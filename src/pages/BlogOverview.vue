<script setup lang="ts">
import { useRoute } from 'vue-router';
import useCategoryStore from '../stores/category';

const categoryStore = useCategoryStore();
await categoryStore.getCategory();
const route = useRoute();
</script>

<template>
  <div class="wrapper">
    <div class="category">
      <h1>Category</h1>
      <router-link
        class="category-item"
        key="all"
        to="/blogs/all"
      >
        All
      </router-link>
      <router-link
        v-for="category in categoryStore.items"
        class="category-item"
        :key="category._id"
        :to="`/blogs/${category._id}`"
      >
        {{ category.name }}
      </router-link>
    </div>
    <router-view v-slot="{ Component }">
      <KeepAlive>
        <component
          :key="route.path"
          :is="Component"
        />
      </KeepAlive>
    </router-view>
  </div>
</template>

<style scoped lang="less">
.wrapper {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.category {
  width: 300px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--divider-color);
  padding: 30px;
  overflow-y: scroll;
  background-color: var(--sidebar-background-color);

  h1 {
    margin-bottom: 10px;
    color: var(--text-color-primary);
  }
}
.category-item {
  display: block;
  color: var(--text-color-secondary);
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
