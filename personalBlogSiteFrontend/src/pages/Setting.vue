<script setup lang="ts">
</script>

<template>
  <div class="wrapper">
    <aside>
      <router-link class="setting-item" to="/setting/admin">Account</router-link>
    </aside>
    <router-view v-slot="{ Component }">
      <KeepAlive>
        <component :is="Component" />
      </KeepAlive>
    </router-view>
  </div>
</template>

<style scoped lang="less">
.wrapper {
  flex: 1;
  display: flex;
}

aside {
  width: 300px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--divider-color);
  padding: 20px;
  box-sizing: border-box;
  overflow-y: scroll;
  background-color: var(--sidebar-background-color);
}

.setting-item {
  text-decoration: none;
  font-size: 20px;
  color: #57606A;
  cursor: pointer;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 8px;
  position: relative;

  &:hover {
    background-color: #F4F5F7;
  }
}

.router-link-active {
  color: #24292F;
  font-weight: bold;
  background-color: #F4F5F7;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -8px;
    display: inline-block;
    width: 4px;
    height: 100%;
    background-color: #0969DA;
    border-radius: 8px;
  }
}
</style>
