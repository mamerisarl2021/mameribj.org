<template>

    <div class="blog-page-area pd-top-50">
        <div class="container">
            <div class="row custom-gutters-60">
                <div class="col-lg-4">
                    <div class="work-processing-details">
                        <div class="section-title style-four">
                            <h1 class="counting-number">1</h1>
                            <h2 class="title">
                                Plateforme de <span> collaboration</span>
                            </h2>
                            <p>
                                Notre plateforme de collaboration embarque les fonctionnalités suivantes :
                            </p>
                            <div class="riyaqas-check-list">
                                <img src="assets/img/icons/check2.svg" alt="check">
                                <span>la signature electronique de document</span>
                            </div>
                            <div class="riyaqas-check-list">
                                <img src="assets/img/icons/check2.svg" alt="check">
                                <span>le paraphe de document</span>
                            </div>
                            <div class="riyaqas-check-list">
                                <img src="assets/img/icons/check2.svg" alt="check">
                                <span>la révision des documents  </span>
                            </div>
                            <div class="riyaqas-check-list">
                                <img src="assets/img/icons/check2.svg" alt="check">
                                <span>La gestion electronique de document</span>
                            </div>
                            <div class="riyaqas-check-list">
                                <img src="assets/img/icons/check2.svg" alt="check">
                                <span> la gnération de workflow pour le traitement des documents </span>
                            </div>
                           
                           

                        </div>
                    </div>
                </div>
                <div class="col-lg-8">

                    <div class="single-blog-content">
                        <div class="thumb">
                            <div class="blog-gallery-sliderh">
                                <swiper :slidesPerView="1" :spaceBetween="30" :loop="true" :pagination="{
                                    clickable: true,
                                }" :autoplay="{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }" :navigation="true" :modules="modules" class="mySwiper">
                                    <swiper-slide>
                                        <div class="item">
                                            <img src="assets/img/solutions/collabora0.png" alt="blog">
                                        </div>
                                    </swiper-slide>

                                <swiper-slide>
                                    <div class="item">
                                        <img src="assets/img/solutions/collabora1.png" alt="blog">
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="item">
                                        <img src="assets/img/solutions/collabora2.png" alt="blog">
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="item">
                                        <img src="assets/img/solutions/collabora3.png" alt="blog">
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="item">
                                        <img src="assets/img/solutions/collabora5.png" alt="blog">
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="item">
                                        <img src="assets/img/solutions/collabora4.png" alt="blog">
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="item">
                                        <img src="assets/img/solutions/collabora6.png" alt="blog">
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