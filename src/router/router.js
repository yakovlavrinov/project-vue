import AboutPage from "@/pages/AboutPage.vue";
import MainPage from "@/pages/MainPage.vue";
import PostIdPage from "@/pages/PostIdPage.vue";
import PostPage from "@/pages/PostPage.vue";
import PostPageCompositionApi from "@/pages/PostPageCompositionApi.vue";
import PostPageWithStore from "@/pages/PostPageWithStore.vue";
import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/about',
        component: AboutPage
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    },
    {
        path: '/store',
        component: PostPageWithStore
    },
    {
        path: '/composition',
        component: PostPageCompositionApi
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router