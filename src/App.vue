<script setup>
import { Analytics } from '@vercel/analytics/vue'
import { SpeedInsights } from '@vercel/speed-insights/vue'
import Navbar from './sections/Navbar.vue'
import Footer from './sections/Footer.vue'
</script>

<template>
    <Analytics/>
    <SpeedInsights/>
    <div class="relative z-10 flex min-h-svh flex-col bg-black/75 bg-[url(/src/assets/background.jpg)] bg-cover bg-fixed bg-blend-overlay text-white">
        <Navbar/>
        <RouterView v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </RouterView>
    </div>
    <Footer class="sticky bottom-0"/>
</template>
