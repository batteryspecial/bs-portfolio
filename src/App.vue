<script setup>
import { SpeedInsights } from '@vercel/speed-insights/vue'
import Navbar from './sections/Navbar.vue'
import Footer from './sections/Footer.vue'
</script>

<template>
    <SpeedInsights/>
    <div class="relative z-10 flex min-h-svh flex-col bg-[url(/src/assets/background.jpg)] bg-cover bg-fixed text-white">
        <Navbar/>
        <RouterView v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </RouterView>
    </div>
    <Footer class="sticky bottom-0 z-0"/>
</template>
