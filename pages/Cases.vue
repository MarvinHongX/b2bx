<script setup>
const { mealkit1Url, mealkit2Url, mealkit3Url, mealkit4Url, puppyKindergarten1Url, puppyKindergarten2Url, puppyKindergarten3Url, puppyKindergarten4Url,  moreUrl } = useImg();
</script>

<template>
    <HeaderComponent title="승인사례" />
    <div class="max-w-7xl mx-5 sm:mx-5 md:mx-10 lg:mx-20 xl:mx-40">
        <div class="mt-8 min-w-[200px] overflow-x-auto sm:overflow-x-auto lg:overflow-x-hidden">
            <div class="grid gap-9 grid-cols-1 sm:grid-cols-2">
                <CasesCard2
                    title="밀키트 전문점" 
                    description1="렌탈화 품목: 업소용 냉장고"
                    description2="승인금액: 4,200만원"
                    description3="자금용도: 밀키트 전문점 창업"
                    :image1Url="mealkit1Url" 
                    :image2Url="mealkit2Url" 
                    :image3Url="mealkit3Url" 
                    :image4Url="mealkit4Url" 
                />
                <CasesCard2
                    title="애견유치원" 
                    description1="렌탈화 품목: 냉난방기, 애견케이지" 
                    description2="승인금액: 3,700만원"
                    description3="자금용도: 신규프랜차이즈 창업"
                    :image1Url="puppyKindergarten1Url"
                    :image2Url="puppyKindergarten2Url" 
                    :image3Url="puppyKindergarten3Url" 
                    :image4Url="puppyKindergarten4Url" 
                />
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
