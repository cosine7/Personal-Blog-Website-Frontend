<script setup lang="ts">
import { ref } from 'vue';

const status = ref(false);
document.body.className = 'theme-light';

function switchTheme() {
  const theme = document.body.className;
  document.body.className = theme === 'theme-light' ? 'theme-dark' : 'theme-light';
}

</script>

<template>
  <label for="theme-switch-button">
    <input v-model="status" @change="switchTheme" type="checkbox" name="" id="theme-switch-button">
    <span></span>
  </label>
</template>

<style scoped lang="less">
input {
  display: none;

  &:checked + span::before {
    left: 25px;
  }

  &:checked + span {
    background-color: #409EFF;
  }
}

label {
  display: inline-block;
  width: 45px;
  height: 25px;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  position: absolute;
  right: 30px;
}

span {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #DCDFE6;
  transition: all .4s;

  &::before {
    display: inline-block;
    position: absolute;
    content: '';
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: white;
    left: 5px;
    transition: all .4s;
  }
}
</style>
