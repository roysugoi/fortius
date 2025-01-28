// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";
import { Activity } from 'lucide-vue-next';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['./css/main.css'], 
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
