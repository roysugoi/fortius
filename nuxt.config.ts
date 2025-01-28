// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";
import { Activity } from 'lucide-vue-next';
import primevue from "@primevue/nuxt-module"
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  modules: [
    '@primevue/nuxt-module'
],
primevue: {
    options: {
        theme: {
            preset: Aura
        }
    }
},
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['./css/main.css'], 
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
