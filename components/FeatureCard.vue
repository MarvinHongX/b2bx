<script setup>
defineProps({
    reason: String,
    description: String,
    imageUrl: String,
    altText: String,
});
</script>

<template>
    <div class="flex px-5 py-5 sm:p-7 md:p-8 lg:p-10 xl:p-16 border border-[#e5e7eb] rounded-xl">
        <div class="h-full w-full flex justify-between items-center">
            <div class="flex flex-col items-start gap-3">
                <p class="text-[#828282] 
                    text-[14px] sm:text-[14px] md:text-[16px] lg:text-[14px] xl:text-[16px]"
                >
                    {{ reason }}
                </p>
                <p class="text-[#111111] 
                    text-[16px] sm:text-[14px] md:text-[16px] lg:text-[14px] xl:text-[16px]"
                >
                    {{ description }}
                </p>
            </div>
            <img :src="imageUrl" :alt="altText" 
                 class="h-[35px] sm:h-[35px] md:h-[45px] lg:h-[51px] xl:h-[61px]"/>
        </div>
    </div>
</template>



<style scoped>
img {
    display: inline-block;
    vertical-align: middle;
}
</style>