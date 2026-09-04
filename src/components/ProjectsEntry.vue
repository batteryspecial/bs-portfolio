<script setup>
const props = defineProps({
    project: Object,
    index: Number,
    rotation: Number,
});
const emit = defineEmits(['flip']);
</script>

<template>
    <div class="perspective relative w-full h-[450px]" @click="emit('flip', index)">
        <div 
            class="card-inner absolute inset-0 transition-transform duration-500 rounded-xl shadow-xl hover:shadow-2xl"
            :style="{ transform: `rotateY(${rotation}deg)`}"
        >    
            <!-- Front (Dark Glass Tint) -->
            <div class="card-front backface-hidden overflow-hidden flex flex-col bg-white/10 border border-white/10 rounded-xl">
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
                            class="bg-white/20 text-xs font-semibold px-3 py-1 rounded-full text-white select-none hover:shadow-md hover:shadow-black/30 hover:-translate-y-0.5 transition-all duration-300"
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
                        class="text-white/80 hover:text-white transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after:-bottom-[2px] after:w-0 after:h-[2px] after:opacity-75 after:bg-[whitesmoke] after:transition-all after:duration-300 hover:after:w-full"
                        @click.stop
                    >
                        Repo ↗
                    </a>
                </div>
            </div>

            <!-- Back (Light Glass Tint) -->
            <div class="card-back backface-hidden overflow-auto flex flex-col bg-white/10 border border-white/20 rounded-xl">
                <div class="p-[2rem] flex-1 flex lg:text-justify justify-center">
                    <span class="select-none text-md text-white">{{ project.description }}</span>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.perspective {
    perspective: 1000px;
    -webkit-perspective: 1000px;
}

.card-inner {
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
}
.card-front, .card-back {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
}
.card-front {
    transform: rotateY(0deg) translateZ(1px);
    -webkit-transform: rotateY(0deg) translateZ(1px);
}
.card-back {
    transform: rotateY(180deg) translateZ(1px);
    -webkit-transform: rotateY(180deg) translateZ(1px);
}
</style>