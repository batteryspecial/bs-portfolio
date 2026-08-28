<script setup>
const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
})
const emit = defineEmits(['close'])
const closeModal = () => {
    emit('close')
}
</script>

<template>
    <Teleport to="body">
        <Transition name="fade">
            <div 
                v-if="isOpen" 
                class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
                @click.self="closeModal"
            >
                <div class="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-stone-900/90 p-6 shadow-2xl backdrop-blur-xl">
                    <button 
                        class="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:bg-white/10 hover:text-white"
                        @click="closeModal"
                    >
                        ✕
                    </button>
                    <slot></slot>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
</style>