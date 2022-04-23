<script setup lang="ts">
import { ref } from 'vue';
import NavBar from './components/NavBar.vue';
import FunnyStart from './components/FunnyStart.vue';

const showFunnyStart = ref(true);
setTimeout(() => {
  showFunnyStart.value = false;
}, 5000);
</script>

<template>
  <FunnyStart v-if="showFunnyStart" />
  <NavBar />
</template>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}

html, body, #app {
  width: 100%;
  height: 100%;
}

.theme-light {
  --nav-background-color: white;
  --sidebar-background-color: white;
  --content-background-color: white;
  --divider-color: #DCDFE6;
  --text-color-primary: black;
  --text-color-secondary: #4E4E4E;
  --nav-item-color: #8CC4FD;
  --nav-item-color-active: #1989FA;
}

.theme-dark {
  --nav-background-color: #323233;
  --sidebar-background-color: #252526;
  --content-background-color: #1E1E1E;
  --divider-color: #464646;
  --text-color-primary: #CCCCCC;
  --text-color-secondary: #969696;
  --nav-item-color: #255C8B;
  --nav-item-color-active: #2D9EFA;
}

#app {
  display: flex;
  flex-direction: column;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,
  "Apple Color Emoji","Segoe UI Emoji";
}

@font-face {
  font-family: "iconfont"; /* Project id  */
  src: url('./assets/iconfont.ttf?t=1650688658114') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-blog:before {
  content: "\e63a";
}

.icon-add:before {
  content: "\e767";
}

.icon-close:before {
  content: "\e69a";
}

.icon-password-hidden:before {
  content: "\e723";
}

.icon-password-show:before {
  content: "\e724";
}
</style>
