<script setup>
import { ref } from 'vue';

const { mealkit1Url, puppyKindergarten1Url, moreUrl } = useImg();
const casesElement = ref(null);

</script>

<template>
    <div class="py-5 sm:py-5 md:py-10 lg:py-20 xl:py-20" ref="casesElement">
        <div class="max-w-7xl mx-3 sm:mx-5 md:mx-10 lg:mx-20 xl:mx-40">
            <TitleComponent title="승인사례" />
            <div class="flex w-full justify-end items-center">
                <a @click="goToCasesPage" class="flex items-center cursor-pointer
                    text-[12px] sm:text-[12px] md:text-[12px] lg:text-[12px] xl:text-[14px]">
                        더 보기 &nbsp;
                        <NuxtImg format="webp" :src="moreUrl" alt="moreAlt" class="h-[10px] sm:h-[10px] md:h-[10px] lg:h-[12px] xl:h-[12px]" />
                </a>
            </div>
            <div class="mt-8 min-w-[250px] overflow-x-auto sm:overflow-x-auto lg:overflow-x-hidden">
                <div class="grid gap-2 grid-cols-1 sm:grid-cols-2 min-w-[200px]">
                    <CasesCard
                        title="밀키트 전문점" 
                        description1="렌탈화 품목: 업소용 냉장고"
                        description2="승인금액: 4,200만원"
                        description3="자금용도: 밀키트 전문점 창업"
                        :imageUrl="mealkit1Url"
                    />
                    <CasesCard
                        title="애견유치원" 
                        description1="렌탈화 품목: 냉난방기, 애견케이지" 
                        description2="승인금액: 3,700만원"
                        description3="자금용도: 신규프랜차이즈 창업"
                        :imageUrl="puppyKindergarten1Url"
                    />
                </div>
            </div>
        </div>
    </div>    
</template>
    