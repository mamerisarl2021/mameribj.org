<template>
    <div class="header-area header-bg" style="background-image:url(assets/img/bg/banner-bg.png);">
        <div class="container">
            <div class="banner-sliderg banner-slider-one">

                <swiper :slidesPerView="1" :spaceBetween="30" :loop="true" :pagination="{
                    clickable: true,
                }" :autoplay="{
                    delay: 8000,
                    disableOnInteraction: false,
                }" :navigation="true" :modules="modules" class="mySwiper">
                    <swiper-slide> 

                         <div class="banner-slider-item">
                            <div class="row">
                                <div class="col-xl-5 col-lg-6 col-md-6 offset-xl-1">
                                    <div class="header-inner-details">
                                        <div class="header-inner">
                                            <h1 class="title s-animate-1" style="font-size: 40px !important;">
                                                Ensemble, façonnons l'avenir de la <span>technologie</span>
                                            </h1>
                                            <p class="s-animate-2">
                                                La mise en place de solutions informatiques couvrant un
                                                <br> large éventail de domaines d'activités.
                                            </p>
                                            <div class="btn-wrapper desktop-left padding-top-20">
                                                <router-link to="/contact" class="btn btn-radius btn-red s-animate-3">Nous joindre</router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 hidden-sm">
                                    <div class="banner-thumb-wrap">
                                        <div class="banner-thumb">
                                            <img class="header-inner-img" src="assets/img/banner/banner-3.png"
                                                alt="banner-img">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>

                        <div class="banner-slider-item">
                            <div class="row">
                                <div class="col-xl-5 col-lg-6 col-md-6  offset-xl-1">
                                    <div class="header-inner-details">
                                        <div class="header-inner">
                                            <h1 class="title s-animate-1">
                                                Ensemble, façonnons l'avenir de la <span>technologie</span>
                                            </h1>
                                            <p class="s-animate-2">
                                                La mise en place de solutions informatiques couvrant un
                                                <br> large éventail de domaines d'activités.
                                            </p>
                                            <div class="btn-wrapper desktop-left padding-top-20">
                                                <router-link to="/contact" class="btn btn-radius btn-red s-animate-3">Nous joindre</router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 hidden-sm">
                                    <div class="banner-thumb-wrap">
                                        <div class="banner-thumb">
                                            <img class="header-inner-img" src="assets/img/banner/banner-2.jpeg"
                                                alt="banner-img">
                                            <img class="banner-1-img2" src="assets/img/banner/02.png" alt="banner-img">
                                            <img class="banner-1-img3" src="assets/img/banner/03.png" alt="banner-img">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide> 

                         <div class="banner-slider-item">
                            <div class="row">
                                <div class="col-xl-5 col-lg-6 col-md-6  offset-xl-1">
                                    <div class="header-inner-details">
                                        <div class="header-inner">
                                            <h1 class="title s-animate-1">
                                                Ensemble, façonnons l'avenir de la <span>technologie</span>
                                            </h1>
                                            <p class="s-animate-2">
                                                La mise en place de solutions informatiques couvrant un
                                                <br> large éventail de domaines d'activités.
                                            </p>
                                            <div class="btn-wrapper desktop-left padding-top-20">
                                                <router-link to="/contact" class="btn btn-radius btn-red s-animate-3">Nous joindre</router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 hidden-sm">
                                    <div class="banner-thumb-wrap">
                                        <div class="banner-thumb">
                                            <img class="header-inner-img" src="assets/img/banner/banner-1.jpeg"
                                                alt="banner-img">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </swiper-slide>

                </swiper>



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
    name: 'Banner',
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