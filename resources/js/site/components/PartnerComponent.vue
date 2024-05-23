<template>

    <div class="client-area mg-top-100 bg-gray pd-top-110 pd-bottom-120">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-7 col-lg-9">
                    <div class="section-title style-two text-md-center">
                        <h2 class="title">Nos <span>partenaires</span> de qualité</h2>
                        <p>
                            Nous avons des partenaires de de qualité qui nous font confiance et nous accompagnent dans
                            notre
                            vision afin que l'avenir de la technologie se révèle davantage à nos clients.</p>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-xl-10">
                    <div class="client-slider-2">
                        <swiper :slidesPerView="3" :spaceBetween="30" :loop="true" :autoplay="{
                            delay: 5000,
                            disableOnInteraction: false,
                        }" :navigation="true" :modules="modules" class="mySwiper">
                            <swiper-slide>
                                <div class="item1">
                                    <a href="#" class="thumbl">
                                        <img src="assets/img/startup/client/logo-mtn.png" alt="client">
                                    </a>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="item1">
                                    <a href="#" class="thumbm">
                                        <img src="assets/img/startup/client/logo-misp.png" alt="client">
                                    </a>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="item1">
                                    <a href="#" class="thumbm">
                                        <img src="assets/img/startup/client/logo-cis.png" alt="client">
                                    </a>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="item1">
                                    <a href="#" class="thumbl">
                                        <img src="assets/img/startup/client/logis-connect.png" alt="client">
                                    </a>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="item1">
                                    <a href="#" class="thumbl">
                                        <img src="assets/img/startup/client/logo-quality.png" alt="client">
                                    </a>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="item1">
                                    <a href="#" class="thumbl">
                                        <img src="assets/img/startup/client/pebco-bethesda.png" alt="client">
                                    </a>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="item1">
                                    <a href="#" class="thumbl">
                                        <img src="assets/img/startup/client/logo-slt.png" alt="client">
                                    </a>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="item1">
                                    <a href="#" class="thumbl">
                                        <img src="assets/img/startup/client/logo-fontaine.png" alt="client">
                                    </a>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="item1">
                                    <a href="#" class="thumbl">
                                        <img src="assets/img/startup/client/ak-petroleum.png" alt="client">
                                    </a>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="item1">
                                    <a href="#" class="thumbl">
                                        <img src="assets/img/startup/client/trans-soha.png" alt="client">
                                    </a>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="item1">
                                    <a href="#" class="thumbj">
                                        <img src="assets/img/startup/client/logo-apix.png" alt="client">
                                    </a>
                                </div>

                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default {
    name: 'Partner',
    components: {
        Swiper,
        SwiperSlide,
    },

    setup() {
        onMounted(() => {

        })

        return {
            modules: [Autoplay, Pagination, Navigation],

        }
    }
}
</script>

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