pipeline {
    agent {
        label 'mameri-node'
    }
    stages {
        stage("Verify tooling") {
            steps { 
                sh '''
                    docker info
                    docker version
                    docker-compose version
                '''
            }
        }
        stage("Verify SSH connection to server") {
            steps {
                sshagent(credentials: ['lws-user']) {
                    sh '''
                        ssh -o StrictHostKeyChecking=no admin@vps99854.serveur-vps.net whoami
                    '''
                }
            }
        }        
        stage("Clear all running docker containers") {
            steps {
                script {
                    try {
                        sh 'docker rm -f $(docker ps -a -q)'
                    } catch (Exception e) {
                        echo 'No running container to clear up...'
                    }
                }
            }
        }
        stage("Start Docker") {
            steps {
                sh 'make up'
                sh 'docker-compose ps'
            }
        }
        stage("Run Composer Install") {
            steps {
                sh 'docker-compose run --rm composer update'
                // sh 'docker-compose run --rm composer install'
            }
        }
        stage("Populate .env file") {
            steps {
                dir("/var/lib/jenkins/workspace/envs/mameribj.org") {
                    fileOperations([fileCopyOperation(excludes: '', flattenFiles: true, includes: '.env', targetLocation: "${WORKSPACE}")])
                }
            }
        }
    }
    post {
        success {
            sh 'cd "/var/mameri-node/workspace/mameribj.org"'
            sh 'rm -rf artifact-pac-api.zip'
            sh 'zip -r artifact-pac-api.zip . -x "*node_modules**"'
            withCredentials([sshUserPrivateKey(credentialsId: "lws-user", keyFileVariable: 'keyfile')]) {
                sh 'scp -v -o StrictHostKeyChecking=no -i ${keyfile} /var/mameri-node/workspace/mameribj.org/artifact-pac-api.zip admin@vps99854.serveur-vps.net:/home/admin/artifact'
            }
            sshagent(credentials: ['lws-user']) {
                sh 'ssh -o StrictHostKeyChecking=no admin@vps99854.serveur-vps.net unzip -o /home/admin/artifact/artifact-pac-api.zip -d /var/www/clients/client0/web1/web/mameribj.org'
                script {
                    try {
                        sh 'ssh -o StrictHostKeyChecking=no admin@vps99854.serveur-vps.net sudo chmod 777 /var/www/clients/client0/web1/web/mameribj.org/storage -R'
                        sh 'ssh -o StrictHostKeyChecking=no admin@vps99854.serveur-vps.net sudo chmod 777 /var/www/clients/client0/web1/web/mameribj.org/bootstrap -R'
                        sh 'ssh -o StrictHostKeyChecking=no admin@vps99854.serveur-vps.net php /var/www/clients/client0/web1/web/mameribj.org/artisan key:generate --force'
                        sh 'ssh -o StrictHostKeyChecking=no admin@vps99854.serveur-vps.net php /var/www/clients/client0/web1/web/mameribj.org/artisan migrate:fresh --seed --force'
                        sh 'ssh -o StrictHostKeyChecking=no admin@vps99854.serveur-vps.net  php /var/www/clients/client0/web1/web/mameribj.org/artisan passport:install --force'
                        sh 'ssh -o StrictHostKeyChecking=no admin@vps99854.serveur-vps.net php /var/www/clients/client0/web1/web/mameribj.org/artisan optimize:clear'
                    } catch (Exception e) {
                        echo 'Some file permissions could not be updated.'
                    }
                }
            }                                  
        }
        always {
            sh 'docker-compose down --remove-orphans -v'
            sh 'docker-compose ps'
        }
    }
}