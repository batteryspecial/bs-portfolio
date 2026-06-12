<script setup>
import { SpeedInsights } from '@vercel/speed-insights/vue'
import Navbar from './sections/Navbar.vue'
import Footer from './sections/Footer.vue'
</script>

<template>
    <SpeedInsights/>
    <!--
        Parallax footer reveal, CSS-only:
        - This wrapper is at least one viewport tall and paints above the footer (z-10).
          Its bg-fixed background stays put while the page scrolls, and is clipped to
          the wrapper, so the footer underneath stays hidden until the content ends.
        - The footer below is `sticky bottom-0` in normal document flow: it pins to the
          bottom of the viewport and gets revealed as the content scrolls past it.
        Because everything scrolls with the document (no inner scroll container, no
        position:fixed), wheel and touch scrolling keep working over the footer.
    -->
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
