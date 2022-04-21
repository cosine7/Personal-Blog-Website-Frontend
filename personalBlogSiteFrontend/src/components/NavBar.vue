<script setup lang="ts">
import ThemeSwitchButtonVue from './ThemeSwitchButton.vue';
</script>

<template>
  <nav>
    <a href="javascript:;" class="iconfont icon-blog"></a>
    <router-link class="nav-link" to="/">Blogs</router-link>
    <router-link class="nav-link" to="/login">Login</router-link>
    <ThemeSwitchButtonVue />
  </nav>
  <router-view v-slot="{ Component }">
    <KeepAlive>
      <Suspense>
        <component :is="Component" />
      </Suspense>
    </KeepAlive>
  </router-view>
</template>

<style scoped lang="less">
nav {
  height: 59px;
  width: 100%;
  border-bottom: 1px solid var(--divider-color);
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 30px;
  box-sizing: border-box;
  background-color: var(--nav-background-color);

  :first-child {
    color: #409EFF;
    font-size: 30px;
    text-decoration: none;
    margin-right: 60px;
  }
}

.nav-link {
  display: inline-block;
  height: 60px;
  line-height: 60px;
  color: var(--nav-item-color);
  text-decoration: none;
  box-sizing: border-box;
  margin-right: 40px;

  &:hover {
    color: var(--nav-item-color-active);
  }
}

.router-link-active {
  border-bottom: #409EFF solid 2px;
  color: var(--nav-item-color-active);
}
</style>
