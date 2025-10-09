import { breakpointsTailwind } from '@vueuse/core';

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },

  ssr: true,

  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      title: '',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: '',
        },
        { name: 'author', content: 'Turmir' },
        { name: 'robots', content: 'index, follow' },
        {
          name: 'yandex-verification',
          content: '',
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL,
    },
  },

  css: ['@/assets/scss/_main.scss'],

  components: [{ path: '@/components', extensions: ['.vue'] }],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/scss/abstracts/_variables.scss";
            @import "@/assets/scss/abstracts/_mixins.scss";
            @import "@/assets/scss/abstracts/_functions.scss";
          `,
        },
      },
    },
  },

  modules: [
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtjs/svg-sprite',
    'nuxt-viewport',
    'nuxt-swiper',
    '@element-plus/nuxt',
    'v-gsap-nuxt',
    ['nuxt-yandex-metrika', {}],
  ],

  viewport: {
    breakpoints: breakpointsTailwind,
  },

  elementPlus: {
    importStyle: false,
  },
});
