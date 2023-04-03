// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  webconfig: {
    version: "v0.1",
    hauth: "suncoo",
    updateTime: "2023年3月21日17:12:38",
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_colors.scss" as *;',
        },
      },
    },
  },
});
