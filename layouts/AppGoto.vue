<script setup>
const { gotoUrl, kakaoUrl, callUrl } = useImg();
const { kakaoHref, callHref } = useHref();

defineProps({
    show: {
        type: Boolean,
        default: false
    }
});

const onGotoButtonClick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
</script>

<template>
    <div class="fixed z-30 right-5 bottom-40 flex flex-col space-y-3">
        <a v-if="show" class="call-button w-12 h-12 rounded-full flex justify-center items-center" :href="callHref" target="_blank">
            <div class="call-img-wrapperer w-full h-full transition-transform duration-1000 flex justify-center items-center">
                <NuxtImg format="webp" :src="callUrl" alt="call" class="w-full h-full"/>
            </div>
        </a>
        <a v-if="show" class="kakao-button w-12 h-12 rounded-full flex justify-center items-center" :href="kakaoHref" target="_blank">
            <div class="kakao-img-wrapperer w-full h-full transition-transform duration-1000 flex justify-center items-center">
                <NuxtImg format="webp" :src="kakaoUrl" alt="kakao" class="w-full h-full"/>
            </div>
        </a>
        <a v-if="show" class="goto-button w-12 h-12 bg-[#FFFFFF] rounded-full flex justify-center items-center" @click="onGotoButtonClick">
            <div class="goto-img-wrapperer w-full h-full transition-transform duration-1000 flex justify-center items-center">
                <NuxtImg format="webp" :src="gotoUrl" alt="goto" class="w-full h-full"/>
            </div>
        </a>


    </div>
</template>

<style scoped>
.call-button:hover,
.kakao-button:hover,
.goto-button:hover {
    opacity: 40%;
}
</style>
