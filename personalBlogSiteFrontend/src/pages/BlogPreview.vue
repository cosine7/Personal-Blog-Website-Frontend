<script setup lang="ts">
import { useRoute } from 'vue-router';
import { marked } from 'marked';
import useBlogStore from '../stores/blog';

const route = useRoute();
const category = route.params.category as string;
const blogStore = useBlogStore();
blogStore.getBlogs(category);
</script>

<template>
  <div class="wrapper">
    <div v-for="blog in blogStore.blogs[category]"
      :key="blog._id"
      v-html="marked.parse(blog.content)">
    </div>
  </div>
</template>

<style scoped lang="less">
.wrapper {
    flex: 1;
    background-color: var(--content-background-color);
    padding: 40px;
}
</style>
