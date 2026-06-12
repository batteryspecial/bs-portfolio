<script setup>
import linkedinIcon from '../assets/icons/linkedin.svg';
import githubIcon from '../assets/icons/github.svg';
import youtubeIcon from '../assets/icons/youtube.svg';
import instagramIcon from '../assets/icons/instagram.svg';
import webringIcon from '../assets/icons/webring.svg';
import se30Icon from '../assets/icons/se30.svg';
import batteryImage from '../assets/level-100.jpg';

const socialIcons = [
    { href: 'https://www.linkedin.com/in/qinkai-li-40198b31a/', src: linkedinIcon, alt: 'linkedin' },
    { href: 'https://github.com/batteryspecial', src: githubIcon, alt: 'GitHub' },
    { href: 'https://www.youtube.com/@batteryspecial', src: youtubeIcon, alt: 'youtube' },
    { href: 'https://www.instagram.com/qlil_0112/', src: instagramIcon, alt: 'instagram' },
]
</script>

<template>
    <footer class="bg-black text-white py-5 md:py-12">
        <div class="mx-auto max-w-7xl px-4 grid grid-cols-1 gap-y-3 md:grid-cols-3 md:gap-y-0">
            <!-- Left: Image -->
            <div class="flex items-center justify-center">
                <img :src="batteryImage" alt="Battery" class="max-h-20 md:max-h-[160px] rounded-2xl md:rounded-3xl opacity-90"/>
            </div>

            <!-- Right: Content -->
            <div class="md:col-span-2 grid grid-cols-1 gap-y-3 md:grid-cols-2 md:gap-x-12 md:gap-y-6">
                <div class="flex flex-col gap-3 md:gap-6 items-center md:items-start">
                    <!-- Nav -->
                    <nav class="flex gap-8 text-lg font-medium">
                        <router-link to="/" class="opacity-75 hover:opacity-100 transition-opacity duration-200">Home</router-link>
                        <router-link to="/projects" class="opacity-75 hover:opacity-100 transition-opacity duration-200">Projects</router-link>
                    </nav>

                    <!-- Socials -->
                    <div class="flex gap-6">
                        <a v-for="icon in socialIcons" :key="icon.href" :href="icon.href" target="_blank" class="opacity-70 hover:opacity-100 transition">
                            <img :src="icon.src" :alt="icon.alt" class="w-6 h-6 invert" />
                        </a>
                    </div>

                    <!-- Legal -->
                    <div class="opacity-60">
                        <p>© 2025 Battery Special. CC BY-SA 4.0.</p>
                    </div>
                </div>

                <div class="flex flex-col gap-y-2 md:gap-y-4 text-sm items-center md:items-start">
                    <!-- SE Webring -->
                    <a href="https://se-webring.xyz/" target="_blank" class="flex items-center gap-3 opacity-80 hover:opacity-100 transition">
                        <img :src="webringIcon" class="h-8 invert" />
                        <span>University of Waterloo Software Engineering Webring</span>
                    </a>
                    <!-- SE'30 Webring -->
                    <div class="flex items-center justify-center gap-3">
                        <a href="https://se30webring.com?from=https://batteryspecial.vercel.app&dir=prev" class="flex items-center text-2xl leading-none no-underline">←</a>
                        <a href="https://se30webring.com" target="_blank" class="flex items-center">
                            <img :src="se30Icon" alt="SE'30 Webring" class="w-8 h-8 brightness-0 invert" />
                        </a>
                        <a href="https://se30webring.com?from=https://batteryspecial.vercel.app&dir=next" class="flex items-center text-2xl leading-none no-underline">→</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
