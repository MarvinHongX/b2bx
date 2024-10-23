<script setup>
const { webtoon1Url, webtoon2Url } = useImg();
</script>

<template>
    <HeaderComponent title="쉽게 이해하기" />
    <div class="w-full flex flex-col">
        <div class="w-full max-w-[1500px] overflow-hidden">
            <NuxtImg format="webp" :src="webtoon1Url" alt="webtoon1Alt" class="cropped-image" />
        </div>
    
        <div class="w-full max-w-[1500px] overflow-hidden">
            <NuxtImg format="webp" :src="webtoon2Url" alt="webtoon2Alt" class="cropped-image" />
        </div>
    </div>
</template>

<style scoped>
.cropped-image {
    max-width: initial;
    width: 110%;
    margin-left: -5%;
}
</style>
