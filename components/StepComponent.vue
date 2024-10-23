<script setup>
defineProps({
    imageUrl: String,
    imageAlt: String,
    stepText: String
});
</script>

<template>
    <div class="w-[70px] sm:w-[80px] md:w-[100px] lg:w-[110px] xl:w-[120px]
                flex flex-col justify-between items-start">
        <div
            class="flex h-[70px] sm:h-[80px] md:h-[100px] lg:h-[110px] xl:h-[120px] 
                    w-full
                    rounded-full justify-center items-center bg-[#ffffff] mb-2" 
        >
            <div
                class="w-1/3 h-1/3 transition-transform duration-1000 flex justify-center items-center"
            >
                <NuxtImg format="webp" :src="imageUrl" :alt="imageAlt" class="w-full h-full" />
            </div>
        </div>
        <div class="w-full flex flex-col items-center mb-5">
        <p class="text-[#111111] text-[13px] sm:text-[13px] md:text-[16px] lg:text-[14px] xl:text-[16px]">
            
            {{ stepText }}
        </p>
        </div>
    </div>
</template>
  