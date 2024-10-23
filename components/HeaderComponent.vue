<script setup>
defineProps({
    title: {
        type: String,
        required: true
    }
});
const { skyLineUrl } = useImg();
</script>
  
<template>
    <div class="bg-[#F7F7F7] relative py-10">
        <div class="max-w-7xl mx-auto">
            <NuxtImg format="webp" :src="skyLineUrl" alt="skyLineAlt" class="w-full h-full min-h-20
                object-cover transition-opacity duration-500
                hidden sm:block" 
            />
            <div class="absolute inset-0 flex items-center justify-center">
                <p class="font-medium text-[20px] sm:text-[20px] md:text-[22px] lg:text-[24px]">
                    {{ title }}
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
