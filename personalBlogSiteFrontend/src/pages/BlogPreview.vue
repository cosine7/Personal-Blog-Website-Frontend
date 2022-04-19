<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route);

</script>

<template>
  <div class="some-wrapper">{{route.params}}</div>
</template>

<style lang="less">
.some-wrapper {
    flex: 1;
    // background-color: antiquewhite;
}
</style>
