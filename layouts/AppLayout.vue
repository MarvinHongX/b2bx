<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import AppTopbar from './AppTopbar.vue';
import AppFooter from './AppFooter.vue';
import AppGoto from './AppGoto.vue';

const scrollDirection = ref('up');
const showGotoButton = ref(false);
let hideTimeout = null;
let ticking = false; 

// Debounced scroll handling
const handleScroll = () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 100) { 
                scrollDirection.value = 'down';
                showGotoButton.value = true;
                if (hideTimeout) {
                    clearTimeout(hideTimeout); 
                }
                hideTimeout = setTimeout(() => {
                    showGotoButton.value = false; 
                }, 2000);
            } else {
                scrollDirection.value = 'up';
                showGotoButton.value = false;
                if (hideTimeout) {
                    clearTimeout(hideTimeout);
                }
            }

            ticking = false;
        });
        ticking = true;
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
    if (hideTimeout) {
        clearTimeout(hideTimeout); // Clean up the timer when unmounting
    }
});
</script>

<template>
    <div class="layout-wrapper">
        <app-topbar></app-topbar>
        <div class="layout-main-container mt-[55px]">
            <div class="layout-main">
                <NuxtPage />
            </div>
            <app-footer></app-footer>
        </div>
    </div>
    <app-goto :show="showGotoButton"></app-goto>
</template>

<style scoped>
.layout-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: white;
    color: black;
}

.layout-main-container {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.layout-main {
    flex-grow: 1;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>