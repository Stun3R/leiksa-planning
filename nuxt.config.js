export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server ',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'leiksa-planning',
    htmlAttrs: {
      lang: 'en',
    },
    bodyAttrs: {
      class: ['font-body'],
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/style/poppins.css',
    '@/node_modules/@braid/vue-formulate/themes/snow/snow.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components/atoms',
    '~/components/molecules',
    '~/components/organisms',
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://vueformulate.com/
    '@braid/vue-formulate/nuxt',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://github.com/nuxt-community/dayjs-module
    '@nuxtjs/dayjs',
  ],

  dayjs: {
    locales: ['fr'],
    defaultLocale: 'fr',
    plugins: ['utc', 'weekday', 'customParseFormat'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
