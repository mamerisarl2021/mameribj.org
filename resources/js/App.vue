<template>
    <div>

        <!-- search Popup -->
        <div class="body-overlay" id="body-overlay"></div>
        <div class="search-popup" id="search-popup">
           
        </div>
        <!-- //. search Popup -->

        <Header/> 
        <!-- navbar area end -->
        <!-- <transition name="fade" mode="out-in"> -->
            <router-view />
        <!-- </transition>    -->

        <!-- footer area start -->

        <Footer/> 
      
        <!-- footer area end -->

        <!-- back to top area start -->
        <div class="back-to-top">
            <span class="back-top"><i class="fa fa-angle-up"></i></span>
        </div>
        <!-- back to top area end -->
    </div>
</template>

<script>
import Header from './site/layout/Header.vue'
import Footer from './site/layout/Footer.vue'

export default {
    name: 'App',
    components: {
        Header,
        Footer,

    },


}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>