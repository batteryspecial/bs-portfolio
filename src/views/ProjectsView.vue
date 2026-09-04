<script setup>
import { h, ref, reactive } from 'vue'
import InlineEntry from '@/components/Inline.vue'
import ProjectsEntry from '@/components/ProjectsEntry.vue'

const activeSkills = reactive(new Set())
function toggleSkill(skillAlt) {
    if (activeSkills.has(skillAlt)) {
        activeSkills.delete(skillAlt)
    } else {
        activeSkills.add(skillAlt)
    }
}

import JavaLogo from '@/assets/logos/stack/java.png'
import SQLLogo from '@/assets/logos/stack/sqlalchemy.png'
import TorchLogo from '@/assets/logos/stack/torch.png'
import JupyterLogo from '@/assets/logos/stack/jupyter.png'
import AWSLogo from '@/assets/logos/stack/aws.png'
import ClickHouseLogo from '@/assets/logos/stack/clickhouse.png'
import PythonLogo from '@/assets/logos/stack/python.png'
import JavaScriptLogo from '@/assets/logos/stack/javascript.png'
import VoltaLogo from '@/assets/logos/stack/volta.png'
import AndroidLogo from '@/assets/logos/stack/androidstudio.png'
import NvidiaLogo from '@/assets/logos/stack/nvidia.png'
import VueLogo from '@/assets/logos/stack/vuejs.png'
import DjangoLogo from '@/assets/logos/stack/django.png'
import LangGraphLogo from '@/assets/logos/stack/langgraph.png'
import ReactLogo from '@/assets/logos/stack/reactjs.png'
import TailwindLogo from '@/assets/logos/stack/tailwind.png'
import CCLogo from '@/assets/logos/stack/c++.png'
import StripeLogo from '@/assets/logos/stack/stripe.png'
import BootstrapLogo from '@/assets/logos/stack/bootstrap.png'
import CSharpLogo from '@/assets/logos/stack/csharp.png'
import GCPLogo from '@/assets/logos/stack/gcp.png'
import FlaskLogo from '@/assets/logos/stack/flask.png'
import PrismaLogo from '@/assets/logos/stack/prisma.png'
import UnityLogo from '@/assets/logos/stack/unity.png'

const skills = [
    { src: JavaLogo, alt: 'Java', shadowColor: '#E51F2F' },
    { src: SQLLogo, alt: 'SQL', shadowColor: '#ce4359' },
    { src: TorchLogo, alt: 'Torch', shadowColor: '#ee4d2e' },
    { src: JupyterLogo, alt: 'Jupyter', shadowColor: '#E87125' },
    { src: AWSLogo, alt: 'AWS', shadowColor: '#fa6504' },
    { src: ClickHouseLogo, alt: 'ClickHouse', shadowColor: '#fdcc05' },
    { src: PythonLogo, alt: 'Python', shadowColor: '#F1CA3F' },
    { src: JavaScriptLogo, alt: 'JS', shadowColor: '#EDD619' },
    { src: VoltaLogo, alt: 'Volta', shadowColor: '#edda87' },
    { src: AndroidLogo, alt: 'Android', shadowColor: '#87ba53' },
    { src: NvidiaLogo, alt: 'TensorRT', shadowColor: '#78b903' },
    { src: DjangoLogo, alt: 'Django', shadowColor: '#2aaa78' },
    { src: VueLogo, alt: 'Vue.js', shadowColor: '#42b883' },
    { src: LangGraphLogo, alt: 'LangGraph', shadowColor: '#1c3c3c' },
    { src: ReactLogo, alt: 'React', shadowColor: '#5CD2F0' },
    { src: TailwindLogo, alt: 'Tailwind', shadowColor: '#33B6EE' },
    { src: CCLogo, alt: 'C/C++', shadowColor: '#0c72be' },
    { src: PrismaLogo, alt: 'Prisma', shadowColor: '#0c344b' },
    { src: StripeLogo, alt: 'Stripe', shadowColor: '#523afd' },
    { src: BootstrapLogo, alt: 'Bootstrap', shadowColor: '#7A27F0' },
    { src: CSharpLogo, alt: 'C#', shadowColor: '#36128A' },
    { src: GCPLogo, alt: 'GCP', shadowColor: '#757575' },
    { src: FlaskLogo, alt: 'Flask', shadowColor: '#6b6b6b' },
    { src: UnityLogo, alt: 'Unity', shadowColor: '#1C2834' },
]

import SkylineSurvivalCover from '@/assets/projects/skylinesurvival.png'
import MathscriptCover from "@/assets/projects/mathscript.jpeg"
import CampusYapCover from '@/assets/projects/campusyap.png'
import DearFriendsCover from '@/assets/projects/dearfriends.jpeg'
import BlockedManCover from '@/assets/projects/blockedman.png'
import ConnectFourCover from '@/assets/projects/connect4.png'

const ProjectList = ref([{   
    rotation: 0,
    flipped: false,
    image: SkylineSurvivalCover,
    title: 'Skyline Survival',
    demo: '#',
    repo: 'https://github.com/batteryspecial/skyline-survival',
    skills: ['Unity', 'C#', '.NET',],
    description: "An improvement to Unity's Battle resource pack. Features a wave counter, smoother movement, new explosive powerups, and enhanced enemies.",
}, {   
    rotation: 0,
    flipped: false,
    image: MathscriptCover,
    title: 'MathScript',
    demo: '#',
    repo: 'https://github.com/batteryspecial/mathscript',
    skills: ['Next.js', 'Slate.js', 'KaTeX', 'BetterAuth'],
    description: 'A fully inline web text editor. Write documents and export to LaTeX. Informally, "the Jupyter notebook for mathematical proofs." Currently in development.',
}, {   
    rotation: 0,
    flipped: false,
    image: CampusYapCover,
    title: 'CampusYap',
    demo: '#',
    repo: 'https://github.com/aicheye/project_team_23',
    skills: ['Android Studios', 'Flask', 'MySQL'],
    description: 'A location-aware Android native discussion app for Wilfrid Laurier and Waterloo students. The app enables verified campus members to post, reply, and react anonymously to short text messages within a defined geographic radius. Posts will only be visible to users in the same verified region.',
}, {   
    rotation: 0,
    flipped: false,
    image: DearFriendsCover,
    title: 'Dear Friends',
    demo: 'https://chinookcuriositycentral.vercel.app',
    repo: 'https://github.com/batteryspecial/dear-friends',
    skills: ['Django Rest Framework', 'Vue.js', 'Anthropic API'],
    description: 'gone but not forgotten',
}, {   
    rotation: 0,
    flipped: false,
    image: BlockedManCover,
    title: 'Blocked',
    demo: '#',
    repo: 'https://github.com/batteryspecial/blocked-man',
    skills: ['Unity', 'Unity Cloud', 'WebGL'],
    description: "A fun Unity game built on Skyline Survival's resource pack. You control a sphere in third person and must precisely avoid obstacles to reach the end. Explosive powerups are available! A WebGL build is present but not active.",
}, {   
    rotation: 0,
    flipped: false,
    image: ConnectFourCover,
    title: 'Connect 4 AI',
    demo: '#',
    repo: 'https://github.com/batteryspecial/Connect-4-AI',
    skills: ['Java', 'JPanel', 'MiniMax',],
    description: 'A basic implementation of the minimax AI algorithm in Connect 4. Graphics powered by Java Swing and JPanel. The AI is human playable, and features adjustable depth.',
},]);

function flipCard(index) {
    ProjectList.value[index].rotation += 180;
}

function flipAll(state) {
    ProjectList.value.forEach(project => {
        project.flipped = state;
    });
}
</script>

<template>
    <div class="w-[90%] md:w-[85%] lg:w-[75%] mx-auto flex flex-col gap-16">
        <!-- 🔷 ProjectsEntry Section -->
        <section>
            <div class="font-normal mb-10 text-center lg:text-start">
                <h1>Selected Projects</h1><br>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-15">
                <ProjectsEntry
                    v-for="(project, index) in ProjectList"
                    :key="index"
                    :project="project"
                    :rotation="project.rotation"
                    @flip="flipCard(index)"
                    class="transition duration-300"
                />
            </div>
        </section>
        <!-- Skill Tags (below ProjectsEntry) -->
        <section class="rounded-xl bg-slate-400 bg-opacity-50 mb-24">
            <h1 class="p-4 text-3xl font-normal">Development Tools</h1>
            <div class="p-5 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 xl:grid-cols-12 gap-x-5 justify-items-center">
                <div v-for="skill in skills" :key="skill.alt" class="inset-shadow-xl p-2 flex flex-col gap-2 group items-center">
                    <div 
                        @click="toggleSkill(skill.alt)" 
                        class="cursor-box rounded-md flex items-center justify-center w-16 aspect-square transition-transform duration-300" 
                        :class="{ 'active-glow': activeSkills.has(skill.alt) }"
                        :style="{ '--shadow-color': skill.shadowColor }"
                    >
                        <img :src="skill.src" :alt="skill.alt" class="size-[70%] object-contain"/>
                    </div>
                    <p class="sm:text-sm text-xs text-center font-medium w-full truncate">{{ skill.alt }}</p>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.cursor-box {
    position: relative;
    transition: all 0.3s ease;
    background: linear-gradient(145deg, #f2f2f2, #e6e6e6);
    overflow: hidden;
}

.active-glow {
    transform: scale(1.05);
    box-shadow:
        0 0 10px rgb(231, 231, 231),
        0 0 20px var(--shadow-color) !important;
}

.cursor-box::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: -100%;
    background: linear-gradient(60deg, transparent, rgba(0, 0, 0, 0.06), transparent);
    transform: translateX(0%);
    transition: transform 0.5s ease;
}

.cursor-box:not(.active-glow):hover::before {
    transform: translateX(100%);
    box-shadow: 0 0 20px color-mix(in srgb, var(--shadow-color) 40%, transparent);
}
</style>
