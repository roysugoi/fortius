<script setup>
import { CircleCheckBig } from 'lucide-vue-next';
</script>

<template>
  <head>
    <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
    <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
  </head>
  <body>
    <div class="p-6">
      <div class="p-6 bg-white dark:bg-gray-800 rounded-lg ring shadow-xl ring-gray-900/5">
        <h3 class="flex gap-2 text-green-600 dark:text-white text-base font-medium tracking-tight">
          <CircleCheckBig
          />
          Tailwind installed
        </h3>
        <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
          Dark and light mode test.
        </p>
      </div>
    </div>
  </body>
</template>