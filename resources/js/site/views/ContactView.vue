<template>

    <!-- breadcrumb area start -->
    <div class="breadcrumb-area" style="background-image:url(assets/img/page-title-bg.png);">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb-inner">
                        <h1 class="page-title">Contact</h1>
                        <ul class="page-list">
                            <li><a href="/">Accueil</a></li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- breadcrumb area End -->

    <!-- contact form start -->
    <div class="contact-form-area pd-top-112">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-6 col-lg-8">
                    <div class="section-title text-center w-100">
                        <h2 class="title">Nous laisser un<span> message</span></h2>
                        <p>
                            Nous sommes ouverts et prêts à vous accompagner sur vos projets informatiques en toute confiance 
                            et sécurité. N'hésitez pas de nous contacter pour un début de collaboration.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-xl-4 col-lg-5">
                    <img src="assets/img/others/21.png" alt="blog">
                </div>
                <div class="col-lg-7 offset-xl-1">
                    <form class="riyaqas-form-wrap mt-5 mt-lg-0" @submit.prevent="sendMail">
                        <div class="row custom-gutters-16">
                            <div class="col-md-6">
                                <div class="single-input-wrap">
                                    <input type="text" v-model="contactForm.nom" class="single-input">
                                    <label>Nom et prénom</label>
                                </div>
                                <p  v-if="errors['nom']" style="color: red; margin-top: -25px;">{{ errors['nom'][0] }}</p>
                            </div>
                            <div class="col-md-6">
                                <div class="single-input-wrap">
                                    <input type="email"  v-model="contactForm.email" class="single-input">
                                    <label>E-mail</label>
                                </div>
                                <p  v-if="errors['email']" style="color: red; margin-top: -25px;">{{ errors['email'][0] }}</p>

                            </div>
                            <div class="col-md-12">
                                <div class="single-input-wrap">
                                    <input type="text"  v-model="contactForm.objet" class="single-input">
                                    <label>Objet</label>
                                </div>

                            </div>
                            <div class="col-md-12">
                                <div class="single-input-wrap">
                                    <textarea class="single-input textarea" cols="20"  v-model="contactForm.message"></textarea>
                                    <label class="single-input-label">Message</label>
                                </div>
                                <p  v-if="errors['message']" style="color: red; margin-top: -25px;">{{ errors['message'][0] }}</p>

                            </div>
                            <div class="col-12 d-flex">
                                <button class="btn btn-red mt-0" >Envoyer</button>
                                
                                <p v-if="process ===true">
                                    <img style="height: 55px;" src="assets/img/banner/spinner.gif" alt="">
                                </p>
                                
                                

                                
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- map area start -->
    <div class="map-area pd-top-120">
        <div class="container">
            <div class="map-area-wrap">
                <div class="row no-gutters">
                    <div class="col-lg-8">
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.46191452126!2d2.3571119!3d6.463015400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a9502158908f%3A0x7a6a1c7451185791!2sMAMERI%20sarl!5e0!3m2!1sfr!2sbj!4v1712591494392!5m2!1sfr!2sbj" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div class="col-lg-4 desktop-center-item">
                        <div>
                            <div class="contact-info">
                                <h4 class="title">Information de contact:</h4>
                                <p class="sub-title">
                                    Nous sommes ouvert à toute collaboration pour la concrétisation de vos projets.
                                </p>
                                <p>Adresse : Aganmadin, Abomey-Calavi <br> Atlantique, Bénin</p>
                                <p><span>Mobile:</span> <a href="tel:0022921603434">+229 21 60 34 34</a></p>
                                <p><span>E-mail:</span> <a href="mailto:contact@mameribj.com">contact@mameribj.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- map area End -->

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
            handleContactMessage, errors, success, process
        } = useContactService()
        const contactForm = reactive({
            nom : '',
            email : '',
            objet : '',
            message : ''

        })
        const sendMail = async () => {
            await handleContactMessage({ ...contactForm })
            if (success.value === true) {
                contactForm.nom = ''
                contactForm.email = ''
                contactForm.objet = ''
                contactForm.message = ''
            }
            
           

        }
        const showme = ref(null)

      
        return {
            contactForm,
            sendMail,
            errors,
            success,
            process
        }
    }
}
</script>