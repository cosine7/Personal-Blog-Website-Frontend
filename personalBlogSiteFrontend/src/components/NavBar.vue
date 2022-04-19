<script setup lang="ts">

</script>

<template>
  <nav>
    <a href="javascript:;">SomeTechBlogs</a>
    <router-link class="nav-link" to="/">Blogs</router-link>
    <router-link class="nav-link" to="/sds">sdsd</router-link>
  </nav>
  <router-view></router-view>
</template>

<style scoped lang="less">
nav {
  display: flex;
  align-items: baseline;
  padding: 15px 20px;
  width: 100%;
  background-color: rgb(45, 45, 45);
  box-shadow: 0 0 30px rgba(0, 0, 0, .4);

  :first-child {
    color: white;
    font-size: 30px;
    text-decoration: none;
    text-shadow: 0 0 3px rgba(255, 255, 255, .8);
  }
}

.nav-link {
  margin: 0 20px;
  color: gray;
  text-decoration: none;
}

.router-link-active {
  color: rgba(255, 255, 255, .9);
}
</style>
