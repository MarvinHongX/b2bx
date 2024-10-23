<script setup>
defineProps({
    title: String,
    type1: String,
    description1: String,
    type2: String,
    description2: String,
    altText: String,
});

const { lineAirUrl, lineBUrl, lineGUrl } = useImg();



const getLabel = (type) => {
    switch (type) {
        case 'A':
        return '공항';
        case 'G':
        return '지선';
        case 'B':
        return '간선';
        default:
        return '';
    }
};

const getLabelColor = (type) => {
    switch (type) {
        case 'A':
        return '#777777'; // Color for 공항
        case 'G':
        return '#37B42D'; // Color for 지선
        case 'B':
        return '#26479D'; // Color for 간선
        default:
        return '#111111'; // Default or fallback color
    }
};
</script>

<template>
    <div class="flex mb-7">
        <div class="h-full w-full flex justify-between items-center">
            <div class="flex flex-col items-start">
                <div class="text-[#111111] font-bold
                    text-[14px] sm:text-[14px] md:text-[16px] lg:text-[14px] xl:text-[16px]
                    mb-2"
                >
                    {{ title }}
                </div>
                <div class="flex items-center mb-1 text-[#444444]
                    text-[13px] sm:text-[13px] md:text-[16px] lg:text-[14px] xl:text-[16px]
                    h-[13px] sm:h-[14px] md:h-[15px] lg:h-[16px] xl:h-[18px]
                    w-full "
                >
                    <div class="flex items-center mr-4
                        h-full">
                        <img :src="type1 === 'A' ? lineAirUrl : type1 === 'B' ? lineBUrl : type1 === 'G' ? lineGUrl : ''" 
                            class="h-full"
                        />
                        &nbsp;
                        <p :style="{ color: getLabelColor(type1) }" class="font-bold text-[13px] sm:text-[13px] md:text-[16px] lg:text-[14px] xl:text-[16px]">
                            {{ getLabel(type1) }}
                        </p>
                    </div>
                    <div>
                        {{ description1 }}
                    </div>
                </div>
                <div v-if="type2" class="flex items-center text-[#444444]
                    text-[13px] sm:text-[13px] md:text-[16px] lg:text-[14px] xl:text-[16px]
                    h-[13px] sm:h-[14px] md:h-[15px] lg:h-[16px] xl:h-[18px]
                    w-full "
                >
                    <div class="flex items-center mr-4
                        h-full">
                        <img :src="type2 === 'A' ? lineAirUrl : type2 === 'B' ? lineBUrl : type2 === 'G' ? lineGUrl : ''" 
                            class="h-full"
                        />
                        &nbsp;
                        <p :style="{ color: getLabelColor(type2) }" class="font-bold text-[13px] sm:text-[13px] md:text-[16px] lg:text-[14px] xl:text-[16px]">
                            {{ getLabel(type2) }}
                        </p>
                    </div>
                    <div>
                        {{ description2 }}
                    </div>
                </div>
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