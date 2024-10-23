<script setup>
defineProps({
    nextUrl: String,
    nextAlt: String
});
</script>

<template>
    <div class="h-[70px] sm:h-[80px] md:h-[100px] lg:h-[110px] xl:h-[120px] 
                flex flex-col justify-between items-start">
        <div class="flex h-full w-full justify-center items-center">
            <div class="w-full
                h-[18px] sm:h-[20px] md:h-[20px] lg:h-[20px] xl:h-[25px]
                transition-transform duration-1000 flex justify-center items-center">
                <NuxtImg format="webp" :src="nextUrl" :alt="nextAlt" class="w-full h-full" />
            </div>
        </div>
    </div>
</template>

