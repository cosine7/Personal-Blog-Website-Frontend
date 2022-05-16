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
    <div
      class="blog"
      v-for="blog in blogStore.blogs[category]"
      :key="blog._id"
      v-html="marked.parse(blog.content)"
    />
  </div>
</template>

<style scoped lang="less">
.wrapper {
  flex: 1;
  background-color: var(--content-background-color);
  padding: 40px;
  display: flex;
  flex-direction: column;
  overflow: auto;
}

.blog {
  flex: none;
  width: 100%;
  border-radius: 15px;
  border: 1px solid #C0C4CC;
  margin: 10px 0;
  padding: 20px;
  box-sizing: border-box;
  max-height: 300px;
  cursor: pointer;
  overflow: hidden;
}
</style>
