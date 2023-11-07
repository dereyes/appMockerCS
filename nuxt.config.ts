// https://nuxt.com/docs/guide/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "sass:color"; @use "sass:list"; @use "sass:map"; @use "sass:math"; @use "@/assets/styles/resources" as *;',
        },
      },
    },
  },
});
