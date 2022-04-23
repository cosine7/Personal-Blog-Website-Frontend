<script setup lang="ts">
import { ref } from 'vue';

const content = ref('');
</script>

<template>
  <div class="wrapper">
    <mavon-editor v-model="content" />
  </div>
</template>

<style scoped lang="less">
.wrapper {
  flex: 1;
}

.markdown-body {
  width: 100%;
  height: 100%;
  border-radius: 0;
}
</style>
