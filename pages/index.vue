<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const processRef = ref(null);
const featuresRef = ref(null);
const contactRef = ref(null);
const directionsRef = ref(null);

const handleScroll = (event) => {
    const section = event.detail;
    let element = null;

    switch (section) {
        case 'process':
            if (processRef.value) {
                element = processRef.value.$refs.processElement; 
            }
            break;
        case 'features':
            if (featuresRef.value) {
                element = featuresRef.value.$refs.featuresElement;
            }
            break;
        case 'contact':
            if (contactRef.value) {
                element = contactRef.value.$refs.contactElement;
            }
            break;
        case 'directions':
            if (directionsRef.value) {
                element = directionsRef.value.$refs.directionsElement;
            }
            break;
        default:
            console.warn(`No matching section for: ${section}`);
            return; 
    }

    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

onMounted(async () => {
    await nextTick();
    window.addEventListener('scroll-to', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll-to', handleScroll);
});
</script>

<template>
    <BannerSection />
    <CasesSection />
    <ProcessSection ref="processRef" />
    <FeaturesSection ref="featuresRef" />
    <ContactSection ref="contactRef" />
    <DirectionsSection ref="directionsRef" />
</template>

<style scoped>

</style>
