<template>
    <div>
        <banner-component></banner-component>

        <!-- feature area start -->
        <div class="sba-featute-area">
            <div class="container">
                <div class="row custom-gutters-16 justify-content-center">
                    <div class="col-xl-4 col-lg-9">
                        <div class="section-title style-two text-xl-left text-center">
                            <h2 class="title">A propos de <span>nous</span></h2>
                            <p>
                                MAMERI SARL a vu jour en 2021 avec un désir ardent d'être la 
                                solution qu'il faut pour le numérique ici en Afrique en particulier 
                                et partout dans le monde entier en générale. Avec une équipe qui croit en la vision
                            MAMERI fera son chemin avec un parcours ambitieux et impressionant.</p>
                            <router-link class="read-more" to="a-propos">Voir plus <i class="fa fa-long-arrow-right"></i></router-link>
                        </div>
                    </div>
                    <div class="col-xl-4 col-sm-6">
                        <div class="single-feature-left">
                            <div class="single-feature">
                                <div class="media">
                                    <img class="media-left" src="assets/img/features/1.svg" alt="feature">
                                    <div class="media-body">
                                        <h6>Notre vision</h6>
                                        <p>
                                            La vision de Mameri SARL est d'être le partenaire de confiance pour l'intégration de solutions numériques intelligentes, sécurisées et orientées vers le cloud, ainsi que pour la gestion efficace des documents et des courriers électroniques. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="single-feature">
                                <div class="media border-radius-2">
                                    <img class="media-left" src="assets/img/features/2.svg" alt="feature">
                                    <div class="media-body">
                                        <h6>Notre mission</h6>
                                        <p>
                                            Nous avons comme mission d'apporter à nos clients des solutions numériques intégrées, fiables et sécurisées, tout en offrant une expertise spécialisée dans la confiance numérique, le cloud, la sécurité informatique, les solutions maritimes et de la gestion électronique de documents, ainsi que des formations adaptées pour accompagner leur évolution technologique.

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-sm-6 mg-top-80">
                        <div class="single-feature-right">
                            <div class="single-feature">
                                <div class="media border-radius-3">
                                    <img class="media-left" src="assets/img/features/3.svg" alt="feature">
                                    <div class="media-body">
                                        <h6>Notre but</h6>
                                        <p>
                                            Notre but est de devenir le leader incontesté dans l'intégration de solutions numériques fiables, intelligentes et sécurisées, en offrant des services 
                                            spécialisés de gestion électronique de documents, de sécurité informatique et de formations adaptées, tout en répondant aux besoins spécifiques de ses clients dans 
                                            les secteurs maritime et cloud.


                                        </p>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        <!-- feature area End -->


        <!-- sbbs service area start -->
        <div class="service-area sbbs-service-area pd-top-112 gray-bg">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6">
                        <div class="section-title text-center">
                            <h2 class="title">Nos services<span></span> <br></h2>
                            <p>
                                De la conception de votre idée, du développement et suivi jusqu'à la livraison, nous
                                vous assistons à chaque étape.
                                Voici nos domaines d'interventions et les solutions que nous vous proposons.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center no-gutters">
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="single-service-left">
                            <div class="media">
                                <div class="thumb media-left">
                                    <img src="assets/img/icons/f1.svg" alt="service">
                                </div>
                                <div class="media-body">
                                    <h6>Intégration de Solutions</h6>
                                    <p>
                                        Nous intégrons des solutions numériques de confiance, intelligentes, cloud,
                                        maritimes et gestion électronique de courriers et de documents.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="single-service-left">
                            <div class="media">
                                <div class="thumb media-left">
                                    <img src="assets/img/icons/f2.svg" alt="service">
                                </div>
                                <div class="media-body">
                                    <h6>Solutions de Sécurité </h6>
                                    <p>
                                        Les solutions de sécurité informatiques ne sont pas en marge de notre zone de
                                        confort.
                                        Nous intervenons dans plusieurs catégories.
                                    </p>
                                    <router-link to="/nos-services">Voir plus<i class="fa fa-long-arrow-right"></i></router-link>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="single-service-left">
                            <div class="media">
                                <div class="thumb media-left">
                                    <img src="assets/img/icons/f3.svg" alt="service">
                                </div>
                                <div class="media-body">
                                    <h6>Conseils et Formations</h6>
                                    <p>
                                        Nous offrons des formations relatives à nos domaines d'interventions pour
                                        permettre à nos
                                        partenaires de mieux jouir des solutions que nous mettons à leur dispositions.

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- sbbs service area end -->

        <PortFoLioComponent/>

      

        <!-- client area start -->
        <PartnerComponent/>
        
        <!-- client area End -->

    </div>
</template>


<script>
import BannerComponent from "./../components/BannerComponent.vue";
import PartnerComponent from "./../components/PartnerComponent.vue";
import PortFoLioComponent from "./../components/PortFoLioComponent.vue";

export default {
    components: {
        BannerComponent,
        PartnerComponent,
        PortFoLioComponent
    },
    setup() {

        return {

        }
    }


}
</script>