<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    alignLeft: {
        type: Boolean,
        default: false
    }
});
</script>

<template>
    <div
        :class="[
            'font-medium text-[20px] sm:text-[20px] md:text-[22px] lg:text-[24px]',
            alignLeft ? 'text-left' : 'text-center'
        ]"
        >
        {{ title }}
    </div>
</template>

<style scoped>
</style>
