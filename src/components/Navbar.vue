<template>
  <nav class="w-full flex justify-center items-center pb-4 mt-0 mb-10">
    <div class="bg-white/10 px-12 py-4 rounded-b-2xl shadow-md border border-white/20 flex space-x-20">
      <router-link to="/" class="nav-link" :class="{ 'active' : $route.path === '/' }">Home</router-link>
      <router-link to="/projects" class="nav-link" :class="{ 'active' : $route.path === '/projects' }">Projects</router-link>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  active: {
    type: String,
    default: 'home'
  }
});
</script>

<style scoped>
.nav-link {
  @apply text-2xl hover:text-[#93c4c6] transition-all duration-200 transform;
}

.active {
  @apply font-bold translate-y-[-1px];
}
</style>