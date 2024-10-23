<script setup>

const { ceoUrl } = useImg();

</script>

<template>
    <div>
        <div class="mt-10 sm:mt-10 md:mt-10
            block sm:block md:hidden"
        >
            <div class="min-w-[240px] max-w-7xl mx-5 sm:mx-5 md:mx-10 lg:mx-20 xl:mx-40">
                <CEOMessage />
            </div>

        </div>
        <div class="bg-[#EEEEEE] mt-10 sm:mt-10 md:mt-40 lg:mt-44 xl:mt-44 relative"
        >
            <div class="min-w-[240px] max-w-7xl mx-5 sm:mx-5 md:mx-10 lg:mx-20 xl:mx-40 relative">
                <div class="mt-8 flex flex-row text-[#555555]
                h-[150px] sm:h-[220px] md:h-[220px] lg:h-[280px] xl:h-[300px]"
                >
                    <!-- Left Section -->
                    <CEOMessage class="hidden sm:hidden md:block"
                    />
    
                    <!-- Right Section (CEO Image) -->
                    <div class="w-full sm:w-full md:w-1/2 min-w-[240px] relative font-regular text-[11px] sm:text-[12px] md:text-[13px] lg:text-[15px]">
                        <div class="absolute right-0 transform -bottom-0 w-full 
                            h-[200px] sm:h-[280px] md:h-[280px] lg:h-[350px] xl:h-[370px]"
                        >
                            <img :src="ceoUrl" alt="ceoAlt" class="absolute -bottom-0 z-10
                                h-[200px] sm:h-[280px] md:h-[280px] lg:h-[350px] xl:h-[370px]
                                left-20 sm:left-26 md:left-20 lg:-left-22 xl:-left-22"
                                
                            />
                            <div class="flex flex-col justify-end transform h-full z-20
                                pb-3 md:pb-8 lg:pb-10 xl:pb-12
                                text-[12px] sm:text-[12px] md:text-[12px] lg:text-[12px]">
                                <div class="mb-3 bg-[#707070] h-[1px] 
                                    w-[250px] sm:w-[300px]"  
                                />
                                    <p class="">10년의 노하우로 막힘없는</p>
                                    <p class="mb-3">서비스를 제공합니다.</p>
                                    <p class="text-[#111111] font-regular
                                    text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px]">
                                    김지섭 대표</p>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
