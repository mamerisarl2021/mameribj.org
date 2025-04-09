<template>


    <!-- soft-box area start -->
    <div class="sbs-what-riyaqas pd-default-120 mg-top-105" style="background-image:url(assets/img/bg/1h1.png);">
        <div class="container">
            <div class="row">
                <div class="col-md-12 section-title">
                    <h2 class="title">Nos projets réalisés</h2>
                </div>
            </div>
            <swiper :slidesPerView="1" :spaceBetween="30" :loop="true" :autoplay="{
                delay: 10000,
                disableOnInteraction: false,
            }" :navigation="true" :modules="modules" class="mySwiper">
                <!-- <swiper-slide>
                    <div class="row">
                        <div class="col-lg-6 wow animated fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
                            <img src="assets/img/solutions/collabora-p.png" alt="img">
                        </div>
                        <div class="col-xl-5 col-lg-6 desktop-center-item">
                            <div class="desktop-center-area wow animated fadeInLeft" data-wow-duration="1s"
                                data-wow-delay="0.3s">
                                <div class="section-title style-two">
                                    <h2 class="title"> Plateforme de <span> collaboration</span> </h2>
                                    <p>
                                        Notre plateforme de collaboration embarque les fonctionnalités suivantes :
                                    </p>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="riyaqas-check-list">
                                            <img src="assets/img/icons/check.svg" alt="check">
                                            <span>la signature electronique de document</span>
                                        </div>
                                        <div class="riyaqas-check-list">
                                            <img src="assets/img/icons/check.svg" alt="check">
                                            <span>le paraphe de document</span>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="riyaqas-check-list">
                                            <img src="assets/img/icons/check.svg" alt="check">
                                            <span>la révision des documents</span>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="riyaqas-check-list">
                                            <img src="assets/img/icons/check.svg" alt="check">
                                            <span>La gestion electronique de document</span>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="riyaqas-check-list">
                                            <img src="assets/img/icons/check.svg" alt="check">
                                            <span>la gnération de workflow pour le traitement des documents</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide> -->
                <swiper-slide>
                    <div class="row">
                        <div class="col-lg-6 wow animated fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
                            <img src="assets/img/projects/logisconnect.png" alt="img">
                        </div>
                        <div class="col-xl-5 col-lg-6 desktop-center-item">
                            <div class="desktop-center-area wow animated fadeInLeft" data-wow-duration="1s"
                                data-wow-delay="0.3s">
                                <div class="section-title style-two">
                                    <h2 class="title"> Application <span>LOGIS CONNECT</span> </h2>
                                    <p>
                                        LOGIS CONNECT est une application de gestion de copropriété verticale et horizontale 
                                        conçue pour aider les syndics de copropriété, les gestionnaires immobiliers et les 
                                        copropriétaires à gérer efficacement les aspects administratifs, financiers et 
                                        opérationnels de leur copropriété. Elle optimise et automatise les tâches liées à la 
                                        gestion quotidienne d’une copropriété.

                                    </p>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="riyaqas-check-list">
                                            <img src="assets/img/icons/check.svg" alt="check">
                                            <span>Gestion administrative et financière dématérialisée</span>
                                        </div>
                                        <div class="riyaqas-check-list">
                                            <img src="assets/img/icons/check.svg" alt="check">
                                            <span>Alertes sur les préjudices sécuritaires & contrôle des Accès</span>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="riyaqas-check-list">
                                            <img src="assets/img/icons/check.svg" alt="check">
                                            <span>Automatisation des rappels et des échéances importantes</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="row">
                        <div class="col-lg-6 wow animated fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
                            <img src="assets/img/solutions/alliance-p.png" alt="img">
                        </div>
                        <div class="col-xl-5 col-lg-6 desktop-center-item">
                            <div class="desktop-center-area wow animated fadeInLeft" data-wow-duration="1s"
                                data-wow-delay="0.3s">
                                <div class="section-title style-two">
                                    <h2 class="title">Plateforme de <span>Consignation maritimes. </span></h2>
                                    <p>
                                        La plateforme de consignation maritimes que nous vous offrons comme solutions comporte les fonctionalités 
                                suivantes : 

                                    </p>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="riyaqas-check-list">
                                            <img src="assets/img/icons/check.svg" alt="check">
                                            <span>La gestion des voyages</span>
                                        </div>
                                        <div class="riyaqas-check-list">
                                            <img src="assets/img/icons/check.svg" alt="check">
                                            <span>La gestion des factures</span>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="riyaqas-check-list">
                                            <img src="assets/img/icons/check.svg" alt="check">
                                            <span>La gestion des magazins</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <!-- site web -->
                <swiper-slide>
                    <div class="row">
                        <div class="col-lg-6 wow animated fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
                            <img src="assets/img/solutions/bepco-p.png" alt="img">
                        </div>
                        <div class="col-xl-5 col-lg-6 desktop-center-item">
                            <div class="desktop-center-area wow animated fadeInLeft" data-wow-duration="1s"
                                data-wow-delay="0.3s">
                                <div class="section-title style-two">
                                    <h2 class="title">Site web pour <span>P.E.B.Co-Bethesda</span></h2>
                                    <p>
                                        P.E.B.Co-Bethesda est une ONG du domaine des microfinance.Ce site web décrit leur vision, leur mission 
                                        et leurs services.Chez P.E.B.Co-Bethesda, c'est:
                                
                                    </p>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="riyaqas-check-list">
                                            <img src="assets/img/icons/check.svg" alt="check">
                                            <span>Investir</span>
                                        </div>
                                        <div class="riyaqas-check-list">
                                            <img src="assets/img/icons/check.svg" alt="check">
                                            <span>Epargner</span>
                                        </div>
                                        <div class="riyaqas-check-list">
                                            <img src="assets/img/icons/check.svg" alt="check">
                                            <span>Grandir</span>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="row">
                        <div class="col-lg-6 wow animated fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
                            <img src="assets/img/solutions/misp-p.png" alt="img">
                        </div>
                        <div class="col-xl-5 col-lg-6 desktop-center-item">
                            <div class="desktop-center-area wow animated fadeInLeft" data-wow-duration="1s"
                                data-wow-delay="0.3s">
                                <div class="section-title style-two">
                                    <h2 class="title">Site web pour <span>le MISP</span></h2>
                                    <p>
                                        Ce site web est pour le Ministère de l'Intérieur et de la Sécurité Publique du Bénin.
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
    <!-- soft-box area End -->



</template>


<style scoped>
.swiper {
    width: 100%;
    height: 100%;
}


.swiper {
    margin-left: auto;
    margin-right: auto;
}
</style>
<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default {
    name: 'Banner',
    components: {
        Swiper,
        SwiperSlide,
    },

    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],

        }
    }
}
</script>
