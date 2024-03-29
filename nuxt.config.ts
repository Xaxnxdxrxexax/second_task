// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/styles/main.scss"],
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Roboto: true,
        },
      },
    ],
    "@pinia/nuxt",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/_colors.scss" as *;',
        },
      },
    },
  },
  // TODO: general or for every page?
  app: {
    head: {
      title: "GlassPaper Marketplace",
      meta: [
        {
          name: "description",
          content: "Everything you can buy from the best brands in the world!",
        },
      ],
    },
  },
});
