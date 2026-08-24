<script setup>
const props = defineProps({
    project: Object,
    index: Number,
    rotation: Number,
});
const emit = defineEmits(['flip']);
</script>

<template>
    <div class="relative w-full h-[450px] perspective" @click="emit('flip', index)">
        <div 
            class="absolute inset-0 transition-transform duration-500 preserve-3d rounded-xl shadow-xl hover:shadow-2xl"
            :style="{ transform: `rotateY(${rotation}deg)`}"
        >    
            <!-- Front (Dark Glass Tint) -->
            <div class="absolute inset-0 backface-hidden transition-all duration-500 overflow-hidden flex flex-col bg-white/10 border border-white/10 rounded-xl">
                <div
                    class="h-full w-full bg-cover bg-center bg-no-repeat rounded-t-xl hover:grayscale-0 grayscale transition-all duration-300"
                    :style="`background-image: url(${project.image})`"
                />
                <div class="w-full h-[1px]" />
                
                <div class="p-4 flex-1 flex flex-col">
                    <div class="text-2xl mb-3 text-white">{{ project.title }}</div>
                    <div class="flex flex-wrap gap-2 mb-2">
                        <span
                            v-for="(skill, idx) in project.skills"
                            :key="idx"
                            class="bg-white/20 text-xs font-semibold px-3 py-1 rounded-full text-white text-select-none hover:shadow-md hover:shadow-black/30 hover:-translate-y-0.5 transition-all duration-300"
                            @click.stop
                        >
                            {{ skill }}
                        </span>
                    </div>
                </div>
                <div class="inline-flex items-center p-4">
                    <a
                        v-if="project.repo"
                        :href="project.repo"
                        target="_blank"
                        class="text-white/80 hover:text-white transition-colors duration-300 relative link-underline"
                        @click.stop
                    >
                        Repo ↗
                    </a>
                </div>
            </div>

            <!-- Back (Light Glass Tint) -->
            <div class="absolute inset-0 backface-hidden overflow-auto flex flex-col bg-white/10 border border-white/20 rounded-xl" :style="{ transform: 'rotateY(180deg)'}">
                <div class="p-[2rem] flex-1 flex lg:text-justify justify-center">
                    <span class="text-select-none text-md text-white">{{ project.description }}</span>
                </div>
            </div>

        </div>
    </div>
</template>


<style scoped>
.perspective { perspective: 1000px; }
.preserve-3d { transform-style: preserve-3d; }
.backface-hidden { backface-visibility: hidden; }

.link-underline::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 2px;
    opacity: 75%;
    background: whitesmoke;
    transition: all 0.3s ease;
}

.link-underline:hover::after {
    width: 100%;
}

.text-select-none {
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
}
</style>
