<script setup>
import linkedinIcon from '../assets/icons/linkedin.svg';
import githubIcon from '../assets/icons/github.svg';
import youtubeIcon from '../assets/icons/youtube.svg';
import instagramIcon from '../assets/icons/instagram.svg';

const socialIcons = [
    { href: 'https://www.linkedin.com/in/qinkai-li-40198b31a/', src: linkedinIcon, alt: 'linkedin' },
    { href: 'https://github.com/batteryspecial', src: githubIcon, alt: 'GitHub' },
    { href: 'https://www.youtube.com/@batteryspecial', src: youtubeIcon, alt: 'youtube' },
    { href: 'https://www.instagram.com/qlil_0112/', src: instagramIcon, alt: 'instagram' },
]
</script>

<template>
    <footer class="bg-black text-white py-12">
        <div class="mx-auto max-w-7xl h-full grid grid-cols-1 md:grid-cols-3">
            <!-- Left: Image -->
            <div class="flex items-center justify-center">
                <img src="/src/assets/battery.jpg" alt="Battery" class="max-h-[160px] rounded-3xl opacity-90 mb-5 justify-center md:justify-start md:mb-0"/>
            </div>

            <!-- Right: Content -->
            <div class="md:col-span-2 h-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                <div class="flex flex-col gap-6 items-center md:items-start">
                    <!-- Nav -->
                    <nav class="flex gap-8 text-lg font-medium">
                        <router-link to="/" class="footer-link">Home</router-link>
                        <router-link to="/projects" class="footer-link">Projects</router-link>
                        <router-link to="/contact" class="footer-link">Contact</router-link>
                    </nav>

                    <!-- Socials -->
                    <div class="flex gap-6">
                        <a v-for="icon in socialIcons" :key="icon.href":href="icon.href" target="_blank" class="opacity-70 hover:opacity-100 transition">
                        <img :src="icon.src" :alt="icon.alt" class="w-6 h-6 invert" />
                        </a>
                    </div>

                    <!-- Legal -->
                    <div class="opacity-60">
                        <p>© 2025 Battery Special. CC BY-SA 4.0.</p>
                    </div>
                </div>

                <div class="flex flex-col justify-between text-sm items-center md:items-start">
                    <!-- Webring -->
                    <a href="https://se-webring.xyz/" target="_blank" class="flex items-center gap-3 opacity-80 hover:opacity-100 transition">
                        <img src="/src/assets/icons/webring.svg" class="h-8 invert" />
                        <span>University of Waterloo Software Engineering Webring</span>
                    </a>

                    
                </div>
            </div>
        </div>
    </footer>
</template>


<style scoped>
.footer-link {
  opacity: 0.75;
  transition: opacity 0.2s;
}

.footer-link:hover {
  opacity: 1;
}
</style>
