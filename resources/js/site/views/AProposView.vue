<template>

    <!-- breadcrumb area start -->
    <div class="breadcrumb-area" style="background-image:url(assets/img/page-title-bg.png);">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb-inner">
                        <h1 class="page-title">À propos</h1>
                        <ul class="page-list">
                            <li><a href="/">Accueil</a></li>
                            <li>À propos</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- breadcrumb area End -->


    <!-- about area start -->
    <div class="about-provide-area pd-top-120 bg-none">
        <div class="container">
            <div class="row">
                <div class="col-xl-7 col-lg-6">
                    <div class="img-with-video">
                        <div class="img-wrap">
                            <!-- <img src="assets/img/we-provide/1.png" alt="video"> -->
                            <!-- <div class="hover"> -->
                              
                                        <video title="Wildlife" controls style="width: 100%;">
                                        <source src="assets/videos/mameri.mp4" type="video/mp4">
                                        <p>Wildlife</p>
                                        </video>
                            <!-- </div> -->
                        </div>
                    </div>
                </div>
                <div class="col-xl-5 col-lg-6 desktop-center-item">
                    <div>
                        <div class="section-title style-two">
                            <h2 class="title">Qui sommes <span>nous?</span></h2>
                            <p>
                                MAMERI SARL a vu jour en 2021 avec un désir ardent 
                                d'être la solution qu'il faut pour le numérique ici en Afrique en particulier et partout dans 
                                le monde entier en générale. Avec une équipe qui croit en la vision MAMERI fera son chemin avec 
                                un parcours ambitieux et impressionant.</p>
                            <p>
                                De la conception de votre idée, du développement et suivi jusqu'à la livraison, nous vous assistons à chaque étape. Voici nos domaines d'interventions et les solutions que nous vous proposons.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- about area End -->

</template>

<script>
import { ref, reactive } from 'vue';
import useContactService from '../../services/contactService';

export default {
    name: 'Header',
    components: {
    },

    setup() {
        const {
            handleContactMessage, errors
        } = useContactService()
        const contactForm = reactive({
            nom: '',
            email: '',
            objet: '',
            message: ''

        })
        const sendMail = async () => {
            await handleContactMessage({ ...contactForm })


        }
        const showme = ref(null)


        return {
            contactForm,
            sendMail,
            errors
        }
    }
}
</script>