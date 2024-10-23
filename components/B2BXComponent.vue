<script setup>
const { logoUrl, companyUrl, company2Url, companyApprovalUrl, companyDocUrl } = useImg();
</script>

<template>
    <div class="mt-20 mb-20 sm:mt-15 md:mt-15 lg:mt-20 xl:mt-20">
        <div class="min-w-[240px] max-w-7xl mx-5 sm:mx-5 md:mx-10 lg:mx-20 xl:mx-40">
            <div class="mt-8 flex flex-col md:flex-row text-[#555555] font-light">
                <div class="md:w-1/2 flex justify-start md:justify-start pr-10">
                    <NuxtImg format="webp" :src="companyUrl" alt="companyAlt" class="w-full max-w-[300px] md:max-w-full" />
                </div>
                <div class="md:w-1/2 flex flex-col justify-end text-[13px] sm:text-[14px] md:text-[14px] lg:text-[16px] py-10 md:py-5">
                    <p class="flex flex-row items-center font-bold text-[#111111] text-[18px] md:text-[20px] lg:text-[24px] mb-4">
                        <NuxtImg format="webp" :src="logoUrl" alt="logoAlt" class="w-auto h-[20px] md:h-[25px] lg:h-[30px]" />
                        는
                    </p>
                    <p>여러 렌탈사와 협업하여 사업자금 조달이 가능하게 </p>
                    <p>설비, 장비, 기계, 가전제품들을 렌탈화하여 드립니다.</p>
                    <p class="mb-4">금융이 필요할 때 B2B렌탈을 활용하여 자금조달이 가능합니다.</p>
                    <p>최대한 승인이 나도록 최선의 노력을 하고 있으며, 업계 상황을</p>
                    <p class="mb-4"> 잘 파악하여 서비스를 제공해드리고 있습니다.</p>
                    <p>창업자금이 필요할 때, 기계설비 구매자금이 필요할 때,</p>
                    <p> 프랜차이즈 가맹점 개설자금이 필요할 때, B2BX는 친절하게 </p>
                    <p>최선을 다해 도움을 드리도록 노력하겠습니다.</p>
                </div>
            </div>

            <div class="mt-8 flex flex-col-reverse md:flex-row text-[#555555]">
                <div class="md:w-1/2 flex flex-col justify-center items-start text-[16px] md:text-[18px] lg:text-[18px] py-10 px-0 md:px-8">
                    <div class="flex items-center mb-8">
                        <NuxtImg format="webp" :src="companyDocUrl" alt="companyDocAlt" class="h-[35px] md:h-[40px] mr-4" />
                        <div>
                            <p class="font-medium text-[#111111]">간편한 서류접수</p>
                            <p class="text-[12px] sm:text-[14px] md:text-[14px] lg:text-[16px]">원클릭으로 진행되는 서류접수로 간단접수</p>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <NuxtImg format="webp" :src="companyApprovalUrl" alt="companyApprovalAlt" class="h-[32px] md:h-[37px] mr-4" />
                        <div>
                            <p class="font-medium text-[#111111]">높은 승인율</p>
                            <p class="text-[12px] sm:text-[14px] md:text-[14px] lg:text-[16px]">업계 최고 승인율로 신속한 진행</p>
                        </div>
                    </div>
                </div>
                <div class="md:w-1/2 flex justify-start md:justify-start text-center md:text-left">
                    <NuxtImg format="webp" :src="company2Url" alt="company2Alt" class="w-full max-w-[300px] md:max-w-full" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
