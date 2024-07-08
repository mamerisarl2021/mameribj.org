<template>

    <div class="blog-page-area pd-top-1">
        <div class="container">
            <div class="row custom-gutters-60">
                <div class="col-lg-4">
                    <div class="work-processing-details">
                        <div class="section-title style-four">
                            <h1 class="counting-number">1</h1>
                            <h2 class="title">
                                Application de <span>signature électronique</span>
                            </h2>
                            <p>
                                En facilitant l'échange de documents à distance, e-signature vous permet
                                d'offrir un meilleur service à votre clientèle,
                                faciliter la signature de vos documents et vérifier l'authenticité de tout
                                document signé numériquement.
                            </p>


                            <div class="riyaqas-check-list">
                                <img src="assets/img/icons/check2.svg" alt="check">
                                <span>Cachet électronique visible</span>
                            </div>
                            <div class="riyaqas-check-list">
                                <img src="assets/img/icons/check2.svg" alt="check">
                                <span>Signature électronique</span>
                            </div>
                            <div class="riyaqas-check-list">
                                <img src="assets/img/icons/check2.svg" alt="check">
                                <span>Vérification d'authenticité d'un document </span>
                            </div>
                           

                        </div>
                    </div>
                </div>
                <div class="col-lg-8">

                    <div class="single-blog-content">
                        <div class="thumb">
                            <div class="blog-gallery-sliderl">
                                <swiper :slidesPerView="1" :spaceBetween="30" :loop="true" :pagination="{
                                    clickable: true,
                                }" :autoplay="{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }" :navigation="true" :modules="modules" class="mySwiper">
                                    <swiper-slide>
                                        <div class="item">
                                            <img src="assets/img/solutions/auth0.png" alt="blog">
                                        </div>
                                    </swiper-slide>

                                <!-- <swiper-slide>
                                    <div class="item">
                                        <img src="assets/img/solutions/esign-1.png" alt="blog">
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="item">
                                        <img src="assets/img/solutions/esign-2.png" alt="blog">
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="item">
                                        <img src="assets/img/solutions/esign-3.png" alt="blog">
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="item">
                                        <img src="assets/img/solutions/esign-4.png" alt="blog">
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="item">
                                        <img src="assets/img/solutions/esign-5.png" alt="blog">
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="item">
                                        <img src="assets/img/solutions/esign-6.png" alt="blog">
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="item">
                                        <img src="assets/img/solutions/esign-7.png" alt="blog">
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="item">
                                        <img src="assets/img/solutions/esign-8.png" alt="blog">
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="item">
                                        <img src="assets/img/solutions/esign-9.png" alt="blog">
                                    </div>
                                </swiper-slide> -->
                            </swiper>

                            </div>
                        </div>

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