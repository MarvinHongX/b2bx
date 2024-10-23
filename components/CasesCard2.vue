<script setup>
import { ref } from 'vue';

const props = defineProps({
    title: String,
    description1: String,
    description2: String,
    description3: String,
    image1Url: String,
    image2Url: String,
    image3Url: String,
    image4Url: String,
    altText: String,
});
const { bannerNextUrl, bannerPreviousUrl } = useImg();

const cardImages = ref([props.image1Url, props.image2Url, props.image3Url, props.image4Url]);

const currentImage = ref(cardImages.value[0]);

const nextCardImage = () => {
    const currentIndex = cardImages.value.indexOf(currentImage.value);
    const nextIndex = (currentIndex + 1) % cardImages.value.length;
    currentImage.value = cardImages.value[nextIndex];
};

const previousCardImage = () => {
    const currentIndex = cardImages.value.indexOf(currentImage.value);
    const prevIndex = (currentIndex - 1 + cardImages.value.length) % cardImages.value.length;
    currentImage.value = cardImages.value[prevIndex];
};
</script>

<template>
    <div class="flex">
        <div class="w-full py-4 px-0 flex flex-col justify-between items-center">
            <p class="w-full flex items-start text-[#111111] text-left mb-3 
                font-regular 
                text-[16px] sm:text-[16px] md:text-[18px] lg:text-[18px] xl:text-[20px]"
            >
                {{ title }}
            </p>
            <div class="w-full aspect-[340/260] relative">
                <NuxtImg format="webp" :src="currentImage" :alt="altText" class="w-full h-full object-cover object-center" />
                <button @click="previousCardImage" :disabled="cardImages.length <= 1"
                    class="absolute transform -translate-y-1/2 cursor-pointer
                        top-1/2 left-1 sm:left-1 md:left-2 lg:left-3"
                >   
                    <img :src="bannerPreviousUrl" alt="Previous" 
                        class="w-7 sm:w-7 md:w-8 lg:w-8
                            h-7 sm:h-7 md:h-8 lg:h-8"
                    />
                </button>

                <button @click="nextCardImage" :disabled="cardImages.length <= 1"
                    class="absolute transform -translate-y-1/2 cursor-pointer
                        top-1/2 right-1 sm:right-1 md:right-2 lg:right-3"
                >
                    <img :src="bannerNextUrl" alt="Next"
                        class="w-7 sm:w-7 md:w-8 lg:w-8
                            h-7 sm:h-7 md:h-8 lg:h-8"
                    />
                </button>
            </div>
            <div class="flex flex-col w-full items-start pt-4">
                <p class="text-[#555555] mb-1
                    text-[14px] sm:text-[14px] md:text-[14px] lg:text-[14px] xl:text-[16px]"
                >
                    {{ description1 }}
                </p>
                <p class="text-[#555555] mb-1
                    text-[14px] sm:text-[14px] md:text-[14px] lg:text-[14px] xl:text-[16px]"
                >
                    {{ description2 }}
                </p>
                <p class="text-[#555555] mb-1
                    text-[14px] sm:text-[14px] md:text-[14px] lg:text-[14px] xl:text-[16px]"
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
