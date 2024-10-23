<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
const { bannerNextUrl, bannerPreviousUrl } = useImg();
const banner1Url = ref(useImg().banner1Url);
const banner1SmallUrl = ref(useImg().banner1SmallUrl);
const bannerImages = ref([banner1Url.value]);  
const currentBanner = ref(bannerImages.value[0]);

const bannerSmallImages = ref([banner1SmallUrl.value]);  
const currentSmallBanner = ref(bannerSmallImages.value[0]);

const intervalId = ref(null);
const bannerIndex = ref(0);
const isAutoPlay = ref(false); 
const opacityClass = ref('opacity-100');

const toggleBanner = () => {
    opacityClass.value = 'opacity-0'; 
    setTimeout(() => {
        bannerIndex.value = (bannerIndex.value + 1) % bannerImages.value.length; 
        currentBanner.value = bannerImages.value[bannerIndex.value];
        opacityClass.value = 'opacity-100'; 
    }, 300);
};

const previousBanner = () => {
    opacityClass.value = 'opacity-0';
    setTimeout(() => {
        bannerIndex.value = (bannerIndex.value - 1 + bannerImages.value.length) % bannerImages.value.length;
        currentBanner.value = bannerImages.value[bannerIndex.value];
        opacityClass.value = 'opacity-100';
    }, 300);
};

const nextBanner = () => {
    opacityClass.value = 'opacity-0';
    setTimeout(() => {
        bannerIndex.value = (bannerIndex.value + 1) % bannerImages.value.length;
        currentBanner.value = bannerImages.value[bannerIndex.value];
        opacityClass.value = 'opacity-100';
    }, 300);
};

const toggleAutoPlay = () => {
    isAutoPlay.value = !isAutoPlay.value;
    if (isAutoPlay.value) {
        intervalId.value = setInterval(toggleBanner, 2000);
    } else {
        clearInterval(intervalId.value);
    }
};

onMounted(() => {
    if (bannerImages.value.length > 1) {
        isAutoPlay.value = true
        intervalId.value = setInterval(toggleBanner, 7000);
    }
});

onBeforeUnmount(() => {
    clearInterval(intervalId.value);
});
</script>

<template>
    <div class="max-w-7xl min-w-[250px] mx-0 sm:mx-0 md:mx-0 lg:mx-0 xl:mx-40 relative">
        <img :src="currentBanner" alt="BannerAlt" class="hidden sm:block w-full h-auto object-cover transition-opacity duration-500" :class="opacityClass" />
        <img :src="currentSmallBanner" alt="BannerAlt" class="block sm:hidden w-full h-auto object-cover transition-opacity duration-500" :class="opacityClass" />
        
        <button @click="previousBanner" :disabled="bannerImages.length <= 1"
            class="absolute transform -translate-y-1/2 cursor-pointer
                    top-1/2 left-2 sm:left-5 md:left-8 lg:left-10"
        >
            <img :src="bannerPreviousUrl" alt="Previous" 
                class="w-8 sm:w-8 md:w-8 lg:w-8
                    h-8 sm:h-8 md:h-8 lg:h-8"
            />
        </button>

        <button @click="nextBanner" :disabled="bannerImages.length <= 1"
            class="absolute transform -translate-y-1/2 cursor-pointer
                    top-1/2 right-2 sm:right-5 md:right-8 lg:right-10"
        >
            <img :src="bannerNextUrl" alt="Next"
                class="w-8 sm:w-8 md:w-8 lg:w-8
                    h-8 sm:h-8 md:h-8 lg:h-8"
            />
        </button>

        <div class="flex absolute text-white 
            text-[14px] sm:text-[14px] md:text-[14px] lg:text-[14px]
            bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-5
            left-2 sm:left-3 md:left-4 lg:left-5">
            <button @click="toggleAutoPlay" :disabled="bannerImages.length <= 1"
                class="bg-white bg-opacity-25 rounded-full cursor-pointer
                    w-8 sm:w-9 md:w-8 lg:w-8"
            >
                <svg v-if="isAutoPlay" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-full h-full">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.2 9v6m4-6v6" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-full h-full">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 8l4 4-4 4V8z" />
                </svg>
            </button>
            <div class="ml-2 flex items-center justify-center">
                {{ bannerIndex + 1 }} / {{ bannerImages.length }}
            </div>
        </div>
    </div>
</template>

<style scoped>
img {
    transition: opacity 0.5s ease-in-out;
}
</style>
