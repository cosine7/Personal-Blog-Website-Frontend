<script setup lang="ts">
import { ref } from 'vue';

const content = ref('');
</script>

<template>
    <mavon-editor v-model="content"/>
</template>

<style scoped lang="less">
</style>
