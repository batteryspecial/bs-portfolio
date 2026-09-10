<script setup>
import { ref, h } from 'vue'
import TimelineEntry from '@/sections/Timeline.vue'

import Statsyuk1 from "@/assets/exp/statsyuk/1.png"
import Statsyuk2 from "@/assets/exp/statsyuk/2.png"
import Statsyuk3 from "@/assets/exp/statsyuk/3.png"
import Statsyuk4 from "@/assets/exp/statsyuk/4.png"
import Statsyuk5 from "@/assets/exp/statsyuk/5.png"
import Statsyuk6 from "@/assets/exp/statsyuk/6.png"
import Statsyuk7 from "@/assets/exp/statsyuk/7.png"

import Percep1 from "@/assets/exp/percep/1.png"

const timelineEntries = ref([{
    time: 'April 2026 — August 2026',
    event: 'Full Stack @ Statsyuk Analytics',
    description: () => h('div', [
        h('p', [
            "Specialized in backend security and optimizing computer vision infrastructure. ",
            "As the first intern class, my work was foundational and most features were completely built from scratch."
        ]),
    ]),
    images: [
        { 
            image: Statsyuk1, 
            caption: "An amortized constant time solution to SAM2 separate-mask run length encoding. Unlike Cutie, SAM2 isolates each object in its own sub-buffer." 
        },
        { 
            image: Statsyuk2, 
            caption: "Nearly 50% runtime saved from introducing independent pass scheduler modes. Turns out the multi-pass barrier stream was not a necessity."
        },
        { 
            image: Statsyuk3, 
            caption: "Removing Python memory copy and serialization overhead using C++ resulted in a shocking ~10x speedup that scales inversely with foreground density." 
        },
        { 
            image: Statsyuk4, 
            caption: "We can convert pipeline stages into parallel processes with bounded queues to handle backpressure and SharedMemory buffers to evade serialization tax." 
        },
        { 
            image: Statsyuk5, 
            caption: "While we can limit the memory usage of native processes in NVIDIA MPS, external TensorRT engines need a custom CUDA memory tracker and limiter." 
        },
        { 
            image: Statsyuk6,
            caption: "Cutie took up 200-300ms per frame, motivating an optimized redesign using a mix of pybind11 extensions, TensorRT engine builds, and LibTorch." 
        },
        { 
            image: Statsyuk7,
            caption: "Decoupling postprocessing analytics from the GPU to a CPU-driven ClickHouse worker allows the pipeline to leverage hardware-level optimizations." 
        }
    ],
}, {
    time: 'December 2025 — Present',
    event: 'Developer @ PercepVision AI',
    description: () => h('div', [
        h('p', [
            "My work focused on making website deployment an AI-assisted workflow so the marketing team can effectively contribute. ",
            "Also contributed to development, optimizing SEO, and outreach API."
        ]),
    ]),
    images: [
        { 
            image: Percep1, 
            caption: "The website was able to gain considerable growth (e.g. 11x increase in views in a single day). PercepVision is currently on track with real customers." 
        }
    ],
}]);
</script>

<template>
    <section class="w-full pt-[5rem] pb-10 px-4 md:px-32 z-3">
        <h1 class="text-5xl font-bold mb-10">Timeline</h1>
        <div class="flex flex-col items-start">
            <TimelineEntry
                v-for="(entry, id) in timelineEntries"
                :key="id"
                :timeline="entry"
                class="mb-7"
                style="opacity: 1; transform: none;"
            >
                <template>
                    <component :is="entry.description" />
                </template>
            </TimelineEntry>
        </div>
    </section>
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
