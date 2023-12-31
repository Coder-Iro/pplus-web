// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: false,
  },
  typescript: {
    shim: false,
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    dbHost: "",
    dbUser: "",
    dbPassword: "",
    dbName: "",
  },

  modules: ["@nuxt/image", "nuxt-icon"],

  app: {
    rootId: "__pplus",
    head: {
      htmlAttrs: {
        lang: "ko",
      },
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
      link: [
        {
          rel: "preconnect",
          href: "https://cdn.jsdelivr.net",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          as: "style",
          crossorigin: "anonymous",
          href: "https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.1/packages/wanted-sans/fonts/webfonts/variable/split/WantedSansVariable.min.css",
        },
        {
          rel: "preload",
          as: "style",
          crossorigin: "anonymous",
          href: "https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.1/packages/wanted-sans/fonts/webfonts/static/split/WantedSans.min.css",
        },
        {
          rel: "stylesheet",
          crossorigin: "anonymous",
          href: "https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.1/packages/wanted-sans/fonts/webfonts/variable/split/WantedSansVariable.min.css",
        },
        {
          rel: "stylesheet",
          crossorigin: "anonymous",
          href: "https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.1/packages/wanted-sans/fonts/webfonts/static/split/WantedSans.min.css",
        },
      ],
    },
  },
});
