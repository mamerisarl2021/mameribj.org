import { createRouter, createWebHistory } from "vue-router";
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./../site/views/HomeView.vue'),
        meta: {
            title: "Accueil | MAMERI SARL",
            description: "Ensemble, façonnons l'avenir de la technologie.",
        }
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('./../site/views/ContactView.vue'),
        meta: {
            title: "Contact | MAMERI SARL",
            description: "Nous sommes ouverts et prêts à vous accompagner sur vos projets informatiques en toute confiance et sécurité. N'hésitez pas de nous contacter pour un début de collaboration.",
        }
    },
    {
        path: '/a-propos',
        name: 'a-propos',
        component: () => import('./../site/views/AProposView.vue'),
        meta: {
            title: "A Propos | MAMERI SARL",
            description: "Nous sommes une entreprise informatique.",
        }
    },
    {
        path: '/nos-services',
        name: 'nos-services',
        component: () => import('./../site/views/ServicesView.vue'),
        meta: {
            title: "Services | MAMERI SARL",
            description: "Nous rendons des services informatiques.",
        }
    },
    {
        path: '/nos-solutions',
        name: 'nos-solutions',
        component: () => import('./../site/views/SolutionsView.vue'),
        meta: {
            title: "Solutions | MAMERI SARL",
            description: "Nous avons des solutions informatiques.",
        }
    },
   
   
]



const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0, left: 0 }
    }
})


router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    document.description = to.meta.description
    // to and from are both route objects. must call `next`.
    next()
  })
// const router = createRouter({ history: createWebHistory(), routes })
export default router