<template>

    <div class="blog-page-area pd-top-1">
        <div class="container">
            <div class="row custom-gutters-60">
                <div class="col-lg-4">
                    <div class="work-processing-details">
                        <div class="section-title style-four">
                            <h1 class="counting-number">3</h1>
                            <h2 class="title">
                                Cachet électronique <span>visible</span>
                            </h2>
                            <p>
                                Notre solution de cachet électronique visible respecte rigoureusement les normes et standards internationaux et
                                garantis ainsi la légalité et l'authenticité des documents signés électroniquement.
                            </p>


                            <div class="riyaqas-check-list">
                                <img src="assets/img/icons/check2.svg" alt="check">
                                <span>Cachet électronique visible</span>
                            </div>
                            <div class="riyaqas-check-list">
                                <img src="assets/img/icons/check2.svg" alt="check">
                                <span>Conformité aux normes internationales de cachets électroniques visibles</span>
                            </div>
                            <div class="riyaqas-check-list">
                                <img src="assets/img/icons/check2.svg" alt="check">
                                <span>Application de vérification mobile </span>
                            </div>
                            <div class="riyaqas-check-list">
                                <img src="assets/img/icons/check2.svg" alt="check">
                                <span>APIs intégrables aux applications métier existantes </span>
                            </div>
                            <div class="riyaqas-check-list">
                                <img src="assets/img/icons/check2.svg" alt="check">
                                <span>Notre solution embarque une PKI en son sein pour la délivrance des certificats de signature</span>
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
                                    <!-- <swiper-slide>
                                        <div class="item">
                                            <img src="assets/img/solutions/cev-1.png" alt="blog">
                                        </div>
                                    </swiper-slide>

                               
                                <swiper-slide>
                                    <div class="item">
                                        <img src="assets/img/solutions/cev-2.png" alt="blog">
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="item">
                                        <img src="assets/img/solutions/cev-3.png" alt="blog">
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="item">
                                        <img src="assets/img/solutions/cev-4.png" alt="blog">
                                    </div>
                                </swiper-slide> -->
                                <swiper-slide>
                                    <div class="item">
                                        <img src="assets/img/solutions/cev-7.png" alt="blog">
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="item">
                                        <img src="assets/img/solutions/cev-5.png" alt="blog">
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="item">
                                        <img src="assets/img/solutions/cev-6.png" alt="blog">
                                    </div>
                                </swiper-slide>
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