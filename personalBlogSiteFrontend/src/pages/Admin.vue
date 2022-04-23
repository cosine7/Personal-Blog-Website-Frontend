<script setup lang="ts">
import useAdminStore from '../stores/admin';

const admin = useAdminStore();

</script>

<template>
  <div class="wrapper">
    <button @click="admin.logout">Logout</button>
  </div>
</template>

<style scoped lang="less">
.wrapper {
  flex: 1;
  display: flex;
}

button {
  width: max-content;
  height: max-content;
}
</style>
