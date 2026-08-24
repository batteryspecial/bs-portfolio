<script setup lang="ts">
import { onMounted, onUnmounted, ref, RendererElement, RendererNode, VNode } from 'vue';
import Modal from '@/components/Modal.vue';
import ImageGallery from '@/components/ImageGallery.vue';

export type ImageMetadata = {
    image: string;
    caption: string;
}

type TimelineEntry = {
    time: string;
    event: string;
    description: () => VNode<
        RendererNode, 
        RendererElement, 
        { [key: string]: any }
    >;
    images: ImageMetadata[];
};

const props = defineProps<{ timeline: TimelineEntry }>();
const modalOpen = ref<boolean>(false);
const selectedImageIndex = ref<number>(0);

const openGallery = (index: number) => {
    selectedImageIndex.value = index;
    modalOpen.value = true;
}

const closeGallery = () => {
    modalOpen.value = false;
}

function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Escape") closeGallery();
}
onMounted(() => {
    window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
    <div class="group relative flex w-full gap-6 pb-12 transition-all duration-300">
        <div class="relative flex flex-col items-center">
            <div class="z-10 h-3 w-3 rounded-full bg-white/80 ring-4 ring-white/10 transition-all duration-300 group-hover:bg-white group-hover:ring-white/30 group-hover:shadow-[0_0_12px_rgba(255,255,255,0.8)]"></div>
            <div class="h-full w-[2px] bg-gradient-to-b from-white/30 via-white/10 to-transparent"></div>
        </div>
        <div class="flex flex-1 flex-col gap-4 -mt-1.5">
            <div class="flex flex-col items-start gap-2">
                <span class="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-md transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white">
                    {{ timeline.time }}
                </span>
                <h2 class="text-2xl font-bold tracking-tight text-white/90 transition-colors duration-300 group-hover:text-white">
                    {{ timeline.event }}
                </h2>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div class="lg:col-span-6 text-base leading-relaxed text-white/70">
                    <slot name="description">
                        <span v-if="typeof timeline.description === 'function'">
                            <component :is="timeline.description" />
                        </span>
                        <span v-else>
                            {{ timeline.description }}
                        </span>
                    </slot>
                </div>

                <div v-if="timeline.images && timeline.images.length" class="lg:col-span-6 flex flex-wrap gap-3">
                    <div
                        v-for="(i, index) in timeline.images"
                        :key="index"
                        class="group/img relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-1 hover:border-white/30 hover:shadow-lg"
                    >
                        <img
                            :src="i.image"
                            alt="Timeline detail preview"
                            class="h-24 w-24 object-cover rounded-md transition-transform duration-500 group-hover/img:scale-105"
                            @click="openGallery(index)"
                        />
                    </div>
                </div>
            </div>
        </div>
        <Modal :is-open="modalOpen" @close="closeGallery">
            <ImageGallery
                :images="timeline.images"
                :initial-index="selectedImageIndex"
            />
        </Modal>
    </div>
</template>

<style scoped>

</style>