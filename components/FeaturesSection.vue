<script setup>
import { ref } from 'vue';

const { features1Url, features2Url, features3Url, features4Url } = useImg();
const featuresElement = ref(null);

</script>

<template>
    <div class="bg-[#ffffff] py-5 sm:py-5 md:py-10 lg:py-20 xl:py-40" ref="featuresElement">
        <div class="max-w-7xl mx-3 sm:mx-5 md:mx-10 lg:mx-20 xl:mx-40">
            <TitleComponent title="특장점" />
            <div class="mt-8 overflow-x-auto sm:overflow-x-auto lg:overflow-x-hidden">
                <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 min-w-[200px]">
                    <FeatureCard
                        reason="reason.01" 
                        description="대출로 잡히지 않습니다." 
                        :imageUrl="features1Url" 
                        altText="features1" 
                    />
                    <FeatureCard
                        reason="reason.02" 
                        description="전액 비용처리가 가능합니다." 
                        :imageUrl="features2Url" 
                        altText="features2" 
                    />
                    <FeatureCard
                        reason="reason.03" 
                        description="운영자금으로 활용이 가능합니다." 
                        :imageUrl="features3Url" 
                        altText="features3" 
                    />
                    <FeatureCard
                        reason="reason.04" 
                        description="신용점수에 영향을 미치지 않습니다." 
                        :imageUrl="features4Url" 
                        altText="features4" 
                    />
                </div>
            </div>
        </div>
    </div>    
</template>
    