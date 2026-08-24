<!-- navbar.vue -->
<template>
    <nav class="w-full flex justify-center items-center pb-4 mb-10">
        <!-- Notice how much cleaner these tags look now: -->
        <div class="bg-white/10 px-8 sm:px-12 py-4 rounded-b-2xl shadow-md border border-white/20 flex space-x-12 sm:space-x-20">
            <router-link 
                to="/"
                class="nav-link"
            >
                Home
            </router-link>
            <router-link
                to="/experience"
                class="nav-link"
            >
                Experience
            </router-link>
            <router-link
                to="/projects"
                class="nav-link"
            >
                Projects
            </router-link>
        </div>
    </nav>
</template>

<style scoped>
.nav-link {
  @apply text-2xl hover:font-medium;
}

.router-link-exact-active {
  @apply font-bold translate-y-[-1px];
}
</style>
