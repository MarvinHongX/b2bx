<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
const menuItems = useMenuItems();
const { logoUrl, phoneUrl } = useImg();
const outsideClickListener = ref(null);
const hamburgerActive = ref(false);

const emitScrollTo = async (section) => {
    await navigateTo('/');

    await nextTick();

    setTimeout(() => {
        const event = new CustomEvent('scroll-to', { detail: section });
        window.dispatchEvent(event);
    }, 50);
};

const handleResize = () => {
    if (window.innerWidth >= 1024) {
        hamburgerActive.value = false;
    }
};

const onClickHamburger = () => {
    hamburgerActive.value = !hamburgerActive.value;
};

const bindOutsideClickListener = () => {
    if (!outsideClickListener.value) {
        outsideClickListener.value = (event) => {
            if (isOutsideClicked(event)) {
                hamburgerActive.value = false;
            }
        };
        document.addEventListener('click', outsideClickListener.value);
    }
};

const unbindOutsideClickListener = () => {
    if (outsideClickListener.value) {
        document.removeEventListener('click', outsideClickListener.value);
        outsideClickListener.value = null;
    }
};

const isOutsideClicked = (event) => {
    const hamburgerButtonEl = document.querySelector('.hamburger-button');

    return !(hamburgerButtonEl?.contains(event.target));
};

onMounted(() => {
    bindOutsideClickListener();
    window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
    unbindOutsideClickListener();
    window.removeEventListener('resize', handleResize);
});

</script>

<template>
    <header class="fixed top-0 left-0 w-full z-30 bg-white shadow h-[55px]">
        <div class="max-w-7xl mx-3 sm:mx-5 md:mx-10 lg:mx-20 xl:mx-40 h-full flex justify-between items-center">     
            <NuxtLink to="/" class="flex-shrink-0">
                <NuxtImg format="webp" :src="logoUrl" alt="logo" class="h-[28px]" />
            </NuxtLink>
            <button
                class="hamburger-button h-full lg:hidden"
                @click="onClickHamburger"
            >
                <svg
                    class="w-7 h-7" 
                    fill="none" 
                    stroke="black" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 3h16M2 10h16M2 17h16" />
                </svg>
            </button>
    
            <!-- Menu -->
            <nav class="hidden lg:flex w-full h-full text-[#111111] text-[15px]">
                <ul class="w-full h-full flex justify-center items-center space-x-9">
                    <li v-for="item in menuItems" :key="item.path" class="h-full flex items-center">
                        <template v-if="item.path.startsWith('#')">
                            <a href="/" @click.prevent="emitScrollTo(item.path.slice(1))" class="h-full flex items-center hover:text-gray-300 transition-colors duration-200">
                                {{ item.label }}
                            </a>
                        </template>
                        <template v-else>
                            <NuxtLink :to="item.path" class="h-full flex items-center hover:text-gray-300 transition-colors duration-200">
                                {{ item.label }}
                            </NuxtLink>
                        </template>
                    </li>
                </ul>
            </nav>
            <p class="flex items-center hidden lg:flex min-w-[140px] text-[#111111] text-[15px]">
                <NuxtImg format="webp" :src="phoneUrl" alt="phoneAlt" class="h-[15px]" />
                &nbsp;02-6215-3890
            </p>
            
            <!-- Mobile menu (when hamburger is clicked) -->
            <div 
                v-if="hamburgerActive"
                class="z-20 lg:hidden absolute top-12 left-0 w-full bg-[#2D2D2D] text-[#828282] px-10 py-4 flex flex-col items-start space-y-4"
            >
                <ul class="space-y-4">
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
                            <NuxtLink :to="item.path" class="hover:text-gray-300 transition-colors duration-200">
                                {{ item.label }}
                            </NuxtLink>
                        </template>
                    </li>
                </ul>

            </div>
        </div>
    </header>
</template>

<style scoped>
</style>
