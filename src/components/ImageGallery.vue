<script setup lang="ts">
import { ImageMetadata } from '@/sections/Timeline.vue'
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
    images: {
        type: Array,
        required: true,
        default: () => []
    },
    initialIndex: {
        type: Number,
        default: 0
    },
})

const currentIndex = ref(props.initialIndex)
const currentImage = computed(() => {
    return props.images[currentIndex.value] as ImageMetadata
});


function next() {
    if (props.images.length === 0) return
    currentIndex.value = (currentIndex.value + 1) % props.images.length
}
function prev(){
    if (props.images.length === 0) return
    currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}

function handleKeyDown(event: KeyboardEvent) {
    if (['ArrowRight', 'ArrowUp', 'w', 'd'].includes(event.key)) next();
    else if (['ArrowLeft', 'ArrowDown', 's', 'a'].includes(event.key)) prev();
}

onMounted(() => {
    window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
    <div class="flex flex-col items-center justify-center w-full gap-4 pt-4">
        <div class="relative flex w-full items-center justify-center min-h-[300px] max-h-[60vh] overflow-hidden rounded-lg">
            <img 
                :src="currentImage?.image" 
                alt="Gallery preview" 
                class="h-[50vh] max-w-full object-contain transition-all duration-300 select-none [clip-path:inset(0_round_4px)]"
            />
        </div>

        <div v-if="images.length > 1" class="flex items-center justify-between w-full max-w-xs px-4">
            <button 
                @click="prev" 
                class="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/10 hover:text-white active:scale-95"
            >
                ←
            </button>

            <span class="text-xs font-mono tracking-widest text-white/50">
                {{ currentIndex + 1 }} / {{ images.length }}
            </span>

            <button 
                @click="next" 
                class="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/10 hover:text-white active:scale-95"
            >
                →
            </button>
        </div>
        <div v-if="currentImage?.caption" class="text-center text-sm text-white/70 max-w-lg mt-2 font-light leading-relaxed">
            {{ currentImage.caption }}
        </div>
    </div>
</template>