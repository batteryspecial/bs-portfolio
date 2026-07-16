<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import ContactEntry from '../components/Contacts.vue';
import InlineEntry from '../components/Inline.vue';

import linkedinicon from '../assets/icons/linkedin.svg';
import githubicon from '../assets/icons/github.svg';
import youtubeicon from '../assets/icons/youtube.svg';
import instagramicon from '../assets/icons/instagram.svg';

import waterloologo from '@/assets/logos/uwaterloo.png';
import orbitalogo from '@/assets/logos/uworbital.png'
import engsoclogo from '@/assets/logos/engsoc.png'
import statsyuklogo from '@/assets/logos/statsyuk.svg'

const contactinfo = [
    { src: linkedinicon, alt: 'LinkedIn', href: 'https://www.linkedin.com/in/qinkai-li-40198b31a/' },
    { src: githubicon, alt: 'GitHub', href: 'https://github.com/batteryspecial' },
    { src: youtubeicon, alt: 'YouTube', href: 'https://www.youtube.com/@batteryspecial' },
    { src: instagramicon, alt: 'Instagram', href: 'https://www.instagram.com/batteryspecial_/' },
];

// Slides the fixed social links up so they never overlap the revealed footer
const socialLinksOffset = ref(0);
const updateSocialLinksPosition = () => {
    const footer = document.querySelector('footer');
    if (!footer) return;

    // The sticky footer is revealed by the last `footer.offsetHeight` pixels of
    // document scroll, so the revealed amount is its height minus the distance
    // left to the bottom of the page.
    const distanceToBottom = document.documentElement.scrollHeight - (window.scrollY + window.innerHeight);
    socialLinksOffset.value = Math.max(0,
        Math.min(footer.offsetHeight, footer.offsetHeight - distanceToBottom - 10)
    );
}

onMounted(() => {
    window.addEventListener('scroll', updateSocialLinksPosition, { passive: true });
    window.addEventListener('resize', updateSocialLinksPosition);
    updateSocialLinksPosition();
})

onUnmounted(() => {
    window.removeEventListener('scroll', updateSocialLinksPosition);
    window.removeEventListener('resize', updateSocialLinksPosition);
})
</script>

<template>
    <div class="flex flex-col mx-auto justify-center flex-1 py-8 xl:w-[85%] lg:w-[90%] w-full">
        <section class="flex items-center justify-center relative mx-auto w-full">
            <!-- Left: Text Column -->
            <div class="w-full xl:w-1/2 lg:w-2/3 md:w-3/4 flex flex-col items-center">
                <div class="px-5 lg:px-20">
                    <div class="relative flex items-center gap-4 sm:gap-6">
                        <div class="relative group w-auto shrink-0">
                            <img src="/src/assets/battery.jpg" alt="Profile" class="w-24 h-24 sm:w-32 sm:h-32 object-cover backdrop-brightness-0 rounded-full transition duration-300 polaroid"/>
                            <span class="absolute -bottom-1 -right-1 text-4xl shake-hover">👋</span>
                        </div>
                        <div class="min-w-0">
                            <h1 class="text-4xl sm:text-5xl font-normal mb-2">Qinkai Li</h1>
                            <h3 class="text-xl font-normal">batteryspecial</h3>
                        </div>
                    </div>
                    <div class="w-full h-[1px] bg-gray-300 mt-[1.5rem] mb-4"></div>
                    <div class="order-2 flex flex-col items-start gap-4 text-md">
                        <!-- Introduction -->
                        <div class="flex flex-col gap-3">
                            <p class="inline">
                            I just finished first year studying <InlineEntry :logo="waterloologo" color="yellow" href="https://uwaterloo.ca/future-students/programs/software-engineering">Software Engineering</InlineEntry> at the University of Waterloo. I'm an engineer, but a scientist and explorer at heart.
                            </p>
                            <p>
                                In year 1, I developed the Ground Station for <InlineEntry :logo="orbitalogo" color="blue" href="https://www.uworbital.com/">Orbital</InlineEntry> and worked on EngHacks with <InlineEntry :logo="engsoclogo" color="purple" href="https://www.engsoc.uwaterloo.ca/">Waterloo Engineering Society</InlineEntry>!
                            </p>
                            <p>
                                Currently a full stack engineer at <InlineEntry :logo="statsyuklogo" color="black" href="https://statsyuk.ca">Statsyuk Analytics</InlineEntry>, working on backend and security infrastructure.
                            </p>
                        </div>
                        <!-- Social Media Links -->
                        <div class="fixed top-[35%] left-8 z-50 items-start hidden lg:flex flex-col gap-10 social-links-transform" :style="{ transform: `translateY(-${socialLinksOffset}px)` }">
                            <ContactEntry v-for="link in contactinfo" :key="link.href" :src="link.src" :alt="link.alt" :href="link.href"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
@keyframes shake {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-15deg); }
    75% { transform: rotate(15deg); }
}

.social-links-transform {
    transition: transform 0.8s cubic-bezier(0.01, 0.01, 0.01, 1);
}

.shake-hover {
    display: inline-block;
    transition: transform 0.3s ease-in-out;
}

.group:hover .shake-hover {
    animation: shake 0.5s ease-in-out 2;
}
</style>
