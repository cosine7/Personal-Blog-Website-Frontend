<script setup lang="ts">
import axios from 'axios';

let categories: string[];

try {
  const { data } = await axios.get('/api/category');
  categories = data;
} catch (error) {
  console.log(error);
}

// const categories = ['All', 'JavaScript'];
</script>

<template>
  <div class="wrapper">
    <div class="category">
      <h1>Category</h1>
      <router-link v-for="category in categories"
      class="category-item"
      :key="category"
      :to="`/blogs/${category}`">
        {{category}}
      </router-link>
      <!-- <router-link class="nav-link" to="/blogs/js">js</router-link> -->
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped lang="less">
.wrapper {
  display: flex;
  flex: 1;
}

.category {
  width: 300px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #DCDFE6;
  padding: 30px;
  overflow-y: scroll;

  h1 {
    margin-bottom: 10px;
  }
}
.category-item {
  display: block;
  color: #4E4E4E;
  text-decoration: none;
  font-size: 24px;
  margin: 8px 0;
  box-sizing: border-box;
  transition: all 0.2s;

  &:hover {
    color: #409EFF;
  }
}

.router-link-active {
  color: #409EFF;
}
</style>
