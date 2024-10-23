<script setup>
const { logoUrl } = useImg();
</script>

<template>
  <div class="sm:w-full md:w-1/2 flex flex-col justify-center min-w-[240px]
      py-8 sm:py-10 md:py-12 lg:py-[70px] xl:py-[80px]
      font-regular text-[18px] sm:text-[18px] md:text-[20px] lg:text-[21px]"
  >   
      <p class="mb-1 text-[#111111] font-medium">
          창업, 기계설비, 운영자금이 고민인 분들과
      </p>
      <p class="mb-5 flex justify-start items-center text-[#111111] font-medium">
          <img :src="logoUrl" alt="LogoAlt" class="
                h-[18px] sm:h-[20px] md:h-[18px] lg:h-[22px]"
            />
          가 함께합니다.
      </p>
      <p class="mb-1 font-light text-[12px] sm:text-[12px] md:text-[12px] lg:text-[14px]">
          다양한 품목을 빠르게 승인하고, 최적화된 서비스로 진행하여,
      </p>
      <p class="font-light text-[12px] sm:text-[12px] md:text-[12px] lg:text-[14px]">
          가장 빠르게 자금지급을 진행해드리겠습니다.
      </p>
  </div>
</template>

<style scoped>
</style>
