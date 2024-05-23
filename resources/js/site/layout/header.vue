<template>

    <!-- navbar area start -->
    <nav class="navbar navbar-area navbar-expand-lg nav-style-01">
        <div class="container nav-container ">
            <div class="responsive-mobile-menu">
                <div class="logo-wrapper mobile-logo">
                    <a href="/" class="logo">
                        <img src="assets/img/mameri-logo.png" alt="logo">
                    </a>
                </div>
                <div class="nav-right-content">
                    <ul>
                        <li class="search">
                            <!-- <i class="fa fa-search"></i> -->
                        </li>
                     
                    </ul>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#Riyaqas_main_menu"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggle-icon">
                        <span class="line"></span>
                        <span class="line"></span>
                        <span class="line"></span>
                    </span>
                </button>
            </div>
            <div class="collapse navbar-collapse" id="Riyaqas_main_menu" ref="showme">
                <div class="logo-wrapper desktop-logo">
                    <a href="/" class="logo">
                        <img src="assets/img/mameri-logo.png" alt="logo">
                    </a>
                </div>
                <ul class="navbar-nav" >
                    <li class="md-none"></li>
                    <li class="md-none"></li>
                    <li class="md-none"></li>
                    <li class="md-none"></li>
                    <li class="md-none"></li>
                    <li class="lg-none"></li>
                    <li class="lg-none"></li>
                    <li class="menu-item-has-children"  type="button" data-toggle="collapse" data-target="#Riyaqas_main_menu"
                    aria-expanded="false" aria-label="Toggle navigation">
                        <router-link to="/">Accueil</router-link> 
                    </li>

                    <li class="menu-item-has-children">
                        <router-link to="/a-propos" data-toggle="collapse" data-target="#Riyaqas_main_menu">À propos</router-link>
                      
                    </li>
                    <li class="menu-item-has-children" data-toggle="collapse" data-target="#Riyaqas_main_menu">
                        <router-link to="/nos-services">Services</router-link>
                    </li>
                    <li class="menu-item-has-children" data-toggle="collapse" data-target="#Riyaqas_main_menu">
                        <router-link to="/nos-solutions">Solutions</router-link>
                    </li>
                    <li data-toggle="collapse" data-target="#Riyaqas_main_menu"
                    aria-expanded="false" aria-label="Toggle navigation">
                        <router-link to="/contact" >Contact</router-link>
                    </li>
                </ul>
            </div>
            <div class="nav-right-content">
                <ul>
                    <li class="search">
                        <!-- <img style="height: 30px;" src="assets/img/favicon.png" alt="logo">

                        <i class="fa fa-search"></i> -->
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<style scoped>

@media (max-width:992px){
    .md-none{
        display:none !important;
    }
    }
@media (min-width:991px){
    .lg-none{
        display:none !important;
    }
    }
</style>
<script>
import { onMounted, ref } from 'vue';

export default {
    name: 'Header',
    components: {
    },

    setup() {
        onMounted(() => {

          
        })
        const showme = ref(null)
        const item = document.querySelector("#Riyaqas_main_menu");

        const togleMenu =()=>{
            // showme.value = true
            showme.value.classList.remove("show")
            console.log();
            // item.classList.remove("show");

        }
        return {
            togleMenu,
            showme
            
        }
    }
}
</script>