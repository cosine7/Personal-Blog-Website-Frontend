<script setup lang="ts">
import NavBar from './components/NavBar.vue';
</script>

<template>
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

#app {
  display: flex;
  flex-direction: column;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,
  "Apple Color Emoji","Segoe UI Emoji";
}

@font-face {
  font-family: "iconfont"; /* Project id  */
  src: url('./assets/iconfont.ttf?t=1650402032452') format('truetype');
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
</style>
