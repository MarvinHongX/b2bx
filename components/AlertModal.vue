<script setup>
const props = defineProps({
    show: Boolean,
    message: String,
});
const { modalLogoUrl } = useImg();

const emit = defineEmits(['close']);

const closeModal = () => {
    emit('close');
};
</script>

<template>
    <div 
        v-if="show" 
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        aria-modal="true" role="dialog"
    >
        <div
            ref="modalRef"
            tabindex="-1"
            class="bg-white p-8 rounded-md shadow-lg w-full max-w-md max-h-[80vh] outline-none"
            @keydown.esc="closeModal"
        >
            <div class="flex flex-col items-center w-full p-5">
                <NuxtImg format="webp" :src="modalLogoUrl" alt="modalLogoAlt" class="w-[80px]" />
            </div>

            <!-- 스크롤 가능한 내용 영역 -->
            <div class="text-gray-700 max-h-[60vh] overflow-y-auto">
                <div class="flex flex-col items-center">
                    <p class="mb-2">{{ message }}</p>
                    
                </div>
            </div>
            
            <div class="flex justify-end mt-6">
                <button 
                    @click="closeModal" 
                    class="bg-[#FF8265] hover:bg-[#e67053] text-white py-2 px-4 rounded-md transition duration-200"
                >
                    확인
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg-opacity-50 {
    backdrop-filter: blur(2px);
}
</style>
