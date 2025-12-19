<script setup>
import { computed } from 'vue'

const props = defineProps({
  logo: { type: String },
  color: { type: String, required: true }, // e.g. "white", "blue", etc.
  href: { type: String, required: true },
  content: { type: String, default: '' }
});

const bgClass = computed(() => {
  const colorMap = {
    yellow: 'bg-yellow-500/20 hover:bg-yellow-500/40',
    green: 'bg-green-600/20 hover:bg-green-600/40',
    blue: 'bg-blue-500/20 hover:bg-blue-500/40',
    purple: 'bg-purple-600/20 hover:bg-purple-600/40',
    white: 'bg-gray-300/20 hover:bg-gray-300/40',
    black: 'bg-gray-600/20 hover:bg-gray-600/40'
  };
  return colorMap[props.color] || '';
});
</script>

<template>
    <a :href="href" class="inline-link relative inline-flex items-center transition duration-300 gap-0.5 px-1" :class="bgClass" :data-hover-color="color" target="_blank" rel="noopener">
        <img class="mr-1 h-3 w-auto duration-200" :src="logo" alt=""/>
        <span class="z-40 text-white text-opacity-100">
            <slot>{{ content }}</slot>
        </span>
    </a>
</template>

