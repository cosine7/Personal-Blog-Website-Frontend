<script setup lang="ts">
import { ref } from 'vue';

const content = ref('');
</script>

<template>
  <form>
    <div class="option-wrapper">
      <select required>
        <option value="" disabled selected>Select Category</option>
        <option value="Java">Java</option>
        <option value="Java">JavaScript</option>
      </select>
      <button>Publish</button>
    </div>
    <div class="editor-wrapper">
      <mavon-editor v-model="content" />
    </div>
  </form>
</template>

<style scoped lang="less">
form, .editor-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.option-wrapper {
  padding: 15px;
  position: relative;

  button {
    position: absolute;
    right: 15px;
    background-color: #409EFF;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    font-size: 18px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;

    &:hover {
      background-color: #66B1FF;
    }
  }
}

select {
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 6px;
  outline: none;
  border-color: #C0C4CC;
  cursor: pointer;

  &:invalid {
    color: #C0C4CC;
  }

  &:hover {
    border-color: #409EFF;
  }
}
.markdown-body {
  width: 100%;
  height: 100%;
  border-radius: 0;
}
</style>
