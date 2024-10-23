<script setup>
import { ref } from 'vue';

const { rentalProcessNextUrl, rentalProcess1Url, rentalProcess2Url, rentalProcess3Url, rentalProcess4Url, rentalProcess5Url, rentalProcess6Url } = useImg();
const processElement = ref(null);
</script>

<template>
    <div class="bg-[#F7F7F7] py-5 sm:py-5 md:py-10 lg:py-20 xl:py-20" ref="processElement">
        <div class="max-w-7xl mx-3 sm:mx-5 md:mx-10 lg:mx-20 xl:mx-40">
            <TitleComponent title="렌탈 진행 절차" />
            <div class="mt-8 overflow-x-auto sm:overflow-x-auto lg:overflow-x-hidden">  
                <div class="flex flex-col sm:flex-col lg:flex-row justify-center min-w-[200px]">
                    <div class="w-full flex justify-between sm:justify-between lg:justify-between">
                        <!-- Step 1 -->
                        <StepComponent :imageUrl="rentalProcess1Url" imageAlt="rentalProcess1" stepText="상담" />
                        <StepNextComponent :nextUrl="rentalProcessNextUrl" nextAlt="rentalProcessNext" />
                        
                        <!-- Step 2 -->
                        <StepComponent :imageUrl="rentalProcess2Url" imageAlt="rentalProcess2" stepText="상품심사" />
                        <StepNextComponent :nextUrl="rentalProcessNextUrl" nextAlt="rentalProcessNext" />
                        
                        <!-- Step 3 -->
                        <StepComponent :imageUrl="rentalProcess3Url" imageAlt="rentalProcess3" stepText="서류접수" />
                        <StepNextComponent :nextUrl="rentalProcessNextUrl" nextAlt="rentalProcessNext" 
                            class="hidden sm:hidden lg:block" />
                    </div>
                    <div class="w-full flex justify-between sm:justify-between lg:justify-evenly lg:item-evenly">
                        <!-- Step 4 -->
                        <StepComponent :imageUrl="rentalProcess4Url" imageAlt="rentalProcess4" stepText="계약자심사" />
                        <StepNextComponent :nextUrl="rentalProcessNextUrl" nextAlt="rentalProcessNext" />
                        
                        <!-- Step 5 -->
                        <StepComponent :imageUrl="rentalProcess5Url" imageAlt="rentalProcess5" stepText="설치확인" />
                        <StepNextComponent :nextUrl="rentalProcessNextUrl" nextAlt="rentalProcessNext" />
                        
                        <!-- Step 6 -->
                        <StepComponent :imageUrl="rentalProcess6Url" imageAlt="rentalProcess6" stepText="입금" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
