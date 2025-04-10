<template>
    <!-- breadcrumb area start -->
    <div
        class="breadcrumb-area"
        style="background-image: url(assets/img/page-title-bg.png)"
    >
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb-inner">
                        <h1 class="page-title">Solutions</h1>
                        <ul class="page-list">
                            <li><a href="/">Accueil</a></li>
                            <li>Nos solutions</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- breadcrumb area End -->

    <!-- sbst service area start -->
    <div class="sbst-service-area pd-top-112">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-6 col-lg-10">
                    <div class="section-title text-center">
                        <h2 class="title">
                            Les solutions que nous mettons
                            <span>à votre disposition</span>
                        </h2>
                        <p>
                            En tant que fournisseur de services informatiques,
                            nous sommes déterminés à vous offrir des solutions
                            technologiques innovantes et fiables pour répondre à
                            tous vos besoins en matière de numérique.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- sbst service area end -->

    <!-- <EsignatureSolutionsComponent/> -->
    <McollaborraEsignatureSolutionsComponent />
    <!-- <CevComponent/> -->
    <GestionImmobiliereComponent />
    <ConsignationMaritimeComponent />
</template>

<script>
import { onMounted } from "vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// import EsignatureSolutionsComponent from "./../components/services/EsignatureSolutionsComponent.vue";
import McollaborraEsignatureSolutionsComponent from "../components/services/McollaborraEsignatureSolutionsComponent.vue";
import ConsignationMaritimeComponent from "../components/services/ConsignationMaritimeComponent.vue";
import GestionImmobiliereComponent from "../components/services/GestionImmobiliereComponent.vue";
// import CevComponent from '../components/services/CevComponent.vue';

export default {
    name: "Banner",
    components: {
        Swiper,
        SwiperSlide,
        // EsignatureSolutionsComponent,
        McollaborraEsignatureSolutionsComponent,
        ConsignationMaritimeComponent,
        GestionImmobiliereComponent,
        // CevComponent,
    },

    setup() {
        onMounted(() => {});

        return {
            modules: [Autoplay, Pagination, Navigation],
        };
    },
};
</script>
