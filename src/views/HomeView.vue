<script setup>
import { ref, onMounted, onUnmounted, h } from 'vue'

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

const socialLinksOffset = ref(0);
const updateSocialLinksPosition = () => {
    const footer = document.querySelector('footer');
    if (!footer) return;

    // The sticky footer is revealed by the last `footer.offsetHeight` pixels
    const distanceToBottom = document.documentElement.scrollHeight - (window.scrollY + window.innerHeight);
    socialLinksOffset.value = Math.max(0,
        Math.min(footer.offsetHeight, footer.offsetHeight - distanceToBottom - 10)
    );
}

const introItems = ref([{
    id: 1,
    content: () => h('span', [
        "I worked on EngHacks 2025 as a frontend director with ", 
        h(InlineEntry, {
            logo: engsoclogo, 
            color: 'purple',
            href: 'https://www.engsoc.uwaterloo.ca/'
        }, { default: () => 'Waterloo Engineering Society' }),"." 
    ])
}, {
    id: 2,
    content: () => h('span', [
        "I am a major contributor to ", 
        h(InlineEntry, {
            logo: orbitalogo, 
            color: 'blue',
            href: 'https://www.uworbital.com/'
        }, { default: () => "Orbital" }),
        ", and their amateur radio station (ARO)."
    ])
}, {
    id: 3,
    content: () => h('span', [
        "I completed my first work term at ", 
        h(InlineEntry, {
            logo: statsyuklogo, 
            color: 'black',
            href: 'https://www.statsyuk.ca/'
        }, { default: () => "Statsyuk Analytics" }),
        ", where I worked across high-level web apps and low-level computer vision infrastructure."
    ])
}, {
    id: 4,
    content: () => h('span', [
        "Currently reading more about CUDA and low-level computing principles."
    ])
}])

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
            <div class="w-full xl:w-7/12 lg:w-2/3 md:w-3/4 flex flex-col items-center">
                <div class="px-5 lg:px-20">
                    <div class="relative flex items-center gap-4 sm:gap-6">
                        <div class="relative group w-auto shrink-0">
                            <img
                                src="/src/assets/profile.jpg"
                                alt="Profile"
                                class="w-24 h-24 sm:w-32 sm:h-32 brightness-50 object-cover rounded-full transition duration-300"
                            />
                            <span class="absolute -bottom-1 -right-1 text-4xl shake-hover">👋</span>
                        </div>
                        <div class="min-w-0">
                            <h1 class="text-4xl sm:text-5xl font-normal mb-2">Qinkai Li</h1>
                        </div>
                    </div>
                    <div class="w-full h-[1px] bg-gray-300 mt-[1.5rem] mb-4"></div>
                    <div class="order-2 flex flex-col items-start gap-4 text-md">
                        <!-- Introduction -->
                        <div class="flex flex-col gap-3 leading-7">
                            <p class="inline text-justify">
                                I'm a second year studying 
                                <InlineEntry
                                    :logo="waterloologo"
                                    color="yellow"
                                    isInline
                                    href="https://uwaterloo.ca/future-students/programs/software-engineering"
                                >
                                    Software Engineering
                                </InlineEntry> 
                                at the University of Waterloo. I'm an engineer, but a scientist and 
                                explorer at heart. This website only documents my technical ventures.
                            </p>
                            <ul class="list-disc dashed-list flex flex-col items-start">
                                <li v-for="item in introItems" :key="item.id">
                                    <component :is="item.content" />
                                </li>
                            </ul>
                        </div>
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
