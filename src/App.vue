<script setup>
import { onMounted, nextTick } from 'vue'
import Navbar from './sections/Navbar.vue'
import Footer from './sections/Footer.vue'

const updateHeight = () => {
    const placeholder = document.querySelector('.placeholder')
    const footer = document.querySelector('.footer')

    if (footer && placeholder) {
        // Use computed style
        const computedHeight = getComputedStyle(footer).height;
        placeholder.style.height = computedHeight;
    }
}

onMounted(async() => {
    await nextTick()
    updateHeight()

    window.addEventListener('resize', updateHeight);
    window.addEventListener('load', updateHeight);
})
</script>

<template>
    <!-- Static background wrapper -->
    <div class="bg-[url(/src/assets/background.jpg)] bg-cover bg-fixed text-white relative z-10">
        <Navbar/>
        <transition name="fade" mode="out-in" @before-enter="handleBeforeEnter" @after-enter="handleAfterEnter">
        <RouterView v-slot="{ Component }">
            <component :is="Component" />
        </RouterView>
        </transition>
    </div>
    <div class="placeholder"></div>
    <Footer class="footer"/>
</template>

<style scoped>
.footer {
    position: fixed;
    z-index: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>