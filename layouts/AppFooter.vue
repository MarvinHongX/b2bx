<script setup>
import { nextTick } from 'vue';
const menuItems = useFooterMenuItems();

const emitScrollTo = async (section) => {
    await navigateTo('/');

    await nextTick();

    setTimeout(() => {
        const event = new CustomEvent('scroll-to', { detail: section });
        window.dispatchEvent(event);
    }, 50);
};
</script>

<template>
    <footer class="bg-[#2D2D2D] text-[#828282] pb-10">
        <div class="max-w-7xl min-w-[300px] mx-3 sm:mx-5 md:mx-10 lg:mx-20 xl:mx-40">
            <div class="footer-menu text-sm h-[65px]">
                <ul class="flex space-x-6 w-full h-full items-center justify-start">
                    <li v-for="item in menuItems" :key="item.path">
                        <template v-if="item.path.startsWith('#')">
                            <a 
                                href="/" 
                                @click.prevent="emitScrollTo(item.path.slice(1))"
                                class="h-full flex items-center hover:text-gray-300 transition-colors duration-200"
                            >
                                {{ item.label }}
                            </a>
                        </template>
                        <template v-else>
                            <NuxtLink 
                                :to="item.path" 
                                class="hover:text-gray-300 transition-colors duration-200"
                            >
                                {{ item.label }}
                            </NuxtLink>
                        </template>
                    </li>
                </ul>
            </div>
        </div>
        <hr class="border-gray-600 mb-4" />
        <div class="max-w-7xl min-w-[300px] mx-3 sm:mx-5 md:mx-10 lg:mx-20 xl:mx-40">
            <div class="footer-info mb-4 text-left text-[13px] xl:text-[14px]">
                <p class="mb-2">(주)뉴클라베</p>
                <div class="mb-6 flex items-center">
                    <p>서울특별시 금천구 가산로9길 66 더리즌밸리 지식산업센터 4층 406호</p>
                    <p class="mx-4">|</p>
                    <p>Tel.02-6215-3890</p>
                </div>
                <p class="mb-2">Copyright ⓒ 2024 greenepics Inc. All rights reserved</p>
            </div>
        </div>
    </footer>
</template>

