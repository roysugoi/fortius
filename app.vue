<script setup>
import { CircleCheckBig } from 'lucide-vue-next';
import { ToggleSwitch } from 'primevue';
import { ref } from 'vue';

const checked = ref(true);
</script>

<template>
  <head>
  </head>
  <body>
    <div class="p-6 flex">
      <div class="flex flex-col gap-y-2 p-6 bg-white dark:bg-gray-800 rounded-lg ring shadow-xl ring-gray-900/5">
        <h3 class="flex flex-row gap-2 text-green-600 dark:text-white text-base font-medium tracking-tight">
          <CircleCheckBig
          />
          Tailwind installed
        </h3>
        <p class="text-gray-500 dark:text-gray-400 text-sm ">
          Dark and light mode test.
        </p>
        <ToggleSwitch v-model="checked" @click=""/>
      </div>
    </div>
  </body>
</template>