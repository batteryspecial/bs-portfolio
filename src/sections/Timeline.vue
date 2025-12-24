<script setup>
import { ref } from 'vue';
const props = defineProps({
    timeline: Object,
});
const isAccordionOpen = ref(false);
</script>

<template>
  <div class="flex items-start w-full mb-3 relative opacity-0 transform translate-y-10 animate-fade-in-up">
    <!-- Vertical Line -->
    <div class="w-1 bg-black h-[200%] absolute left-3.5 top-0 z-0"></div>
    <!-- Dot -->
    <div class="w-3 h-3 bg-black rounded-full absolute left-2.5 top-0 z-10"></div>

    <div class="ml-10 flex flex-col w-full">
      <!-- Top: Time and Event -->
        <button class="flex flex-col items-start accordion" @click="isAccordionOpen = !isAccordionOpen" :aria-expanded="isAccordionOpen">
            <div>
                <span class="absolute text-2xl font-bold -translate-y-2.5 -translate-x-12 transition-all duration-300"
                :class="isAccordionOpen ? 'rotate-180 text-gray-800' : 'text-gray-950'">
                {{ isAccordionOpen ? '–' : '+' }}
            </span>
                <p class="relative inline-block px-2 py-1 mb-3 -translate-y-2 font-semibold text-white bg-stone-900 dark:bg-white dark:text-stone-900 rounded-md">
                {{ timeline.time }}
                </p>
                
            </div>
            <h2 class="text-2xl font-semibold -translate-y-2.5">{{ timeline.event }}</h2>
        </button>
        <transition name="accordion-panel">
            <!-- Bottom: Description and Images -->
            <div class="flex flex-col md:flex-row w-full gap-4 panel" :style="{ maxHeight: isAccordionOpen ? '400px' : '0' }">
                <div class="flex-1 text-gray-900 text-justify text-lg">
                    <slot name="description">
                        <span v-if="typeof timeline.description === 'function'">
                            <component :is="timeline.description" />
                        </span>
                        <span v-else>
                            {{ timeline.description }}
                        </span>
                    </slot>
                </div>
                <div class="flex-1 flex flex-wrap justify-center items-center gap-4">
                <img
                    v-for="(image, index) in timeline.images"
                    :key="index"
                    :src="image"
                    alt="Timeline Image"
                    class="w-32 h-32 object-cover rounded-md shadow-lg polaroid"
                    @load="e => e.target.classList.add('loaded')"/>
                </div>
            </div>
        </transition>
    </div>
  </div>
</template>

<style scoped>
/* Define the keyframes for the fade-in-up animation */
@keyframes fade-in-up {
    from {
        opacity: 0;
        transform: translateY(40px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Apply the animation */
.animate-fade-in-up {
    animation: fade-in-up 0.8s ease-out forwards;
}
.accordion {
    background: transparent;
    border: none;
    outline: none;
}
.panel {
    overflow: hidden;
    transition: max-height 0.3s cubic-bezier(.4,0,.2,1);
}

.accordion-panel-enter-active,
.accordion-panel-leave-active {
  transition: max-height 0.3s cubic-bezier(.4,0,.2,1);
}
.accordion-panel-enter-from,
.accordion-panel-leave-to {
  max-height: 0;
}
.accordion-panel-enter-to,
.accordion-panel-leave-from {
  max-height: 400px;
}
</style>
