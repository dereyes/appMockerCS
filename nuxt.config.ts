// https://nuxt.com/docs/guide/directory-structure/nuxt.config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "sass:math"; @use "sass:map"; @use "sass:list"; @use "@/assets/styles/resources" as *;',
        },
      },
    },
  },
});
