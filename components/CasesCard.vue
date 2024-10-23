<script setup>
defineProps({
    title: String,
    description1: String,
    description2: String,
    description3: String,
    imageUrl: String,
    altText: String,
});
</script>

<template>
    <div class="flex">
        <div class="w-full py-4 flex justify-between items-center">
            <div class="w-1/2 aspect-[340/260]">
                <NuxtImg format="webp" :src="imageUrl" :alt="altText" class="w-full h-full object-cover object-center" />
            </div>
            <div class="flex flex-col w-1/2 items-start pl-2 sm:pl-3 md:pl-4 lg:pl-5">
                <p class="text-[#111111] mb-3
                    text-[16px] sm:text-[16px] md:text-[18px] lg:text-[18px] xl:text-[20px]"
                >
                    {{ title }}
                </p>
                <p class="text-[#555555] mb-1
                    text-[12px] sm:text-[12px] md:text-[12px] lg:text-[14px] xl:text-[16px]"
                >
                    {{ description1 }}
                </p>
                <p class="text-[#555555] mb-1
                    text-[12px] sm:text-[12px] md:text-[12px] lg:text-[14px] xl:text-[16px]"
                >
                    {{ description2 }}
                </p>
                <p class="text-[#555555] mb-1
                    text-[12px] sm:text-[12px] md:text-[12px] lg:text-[14px] xl:text-[16px]"
                >
                    {{ description3 }}
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
img {
    display: inline-block;
    vertical-align: middle;
}
</style>
