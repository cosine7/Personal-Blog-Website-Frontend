<script setup lang="ts">
import axios from 'axios';
import { reactive } from 'vue';

const admin = reactive({
  username: '',
  password: '',
});
</script>

<template>
  <form>
    <h1>Login</h1>
    <input type="text" id="username" required v-model="admin.username">
    <label for="username">Username</label>
    <input type="password" id="password" required v-model="admin.password">
    <label for="username">Password</label>
    <button :disabled="admin.username === '' || admin.password === ''">Login</button>
  </form>
</template>

<style scoped lang="less">
form {
  display: flex;
  flex-direction: column;
  width: max-content;
  height: max-content;
  margin: 50px auto;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .25);
  padding: 40px;
}

h1 {
  margin-bottom: 25px;
  text-align: center;
}

input {
  width: 300px;
  height: 50px;
  border-radius: 8px;
  border: 1px solid #DCDFE6;
  padding: 0 20px;
  outline: none;
  box-sizing: border-box;
  font-size: 20px;

  &:hover {
    border-color: #C0C4CC;
  }

  &:focus {
    border-color: #409EFF;
  }

  &:focus + label {
    color: #409EFF;
  }

  &:valid + label,
  &:focus + label {
    top: -50px;
    font-size: 14px;
  }
}

label {
  display: flex;
  align-items: center;
  height: 20px;
  width: min-content;
  position: relative;
  color: #C0C4CC;
  top: -25px;
  padding: 0 3px;
  left: 17px;
  transform: translateY(-50%);
  font-size: 20px;
  pointer-events: none;
  transition: all .3s;
  background-color: white;
}

button {
  height: 40px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  background-color: #409EFF;
  color: white;
  cursor: pointer;

  &:disabled {
    background-color: #A0CFFF;
  }
}
</style>
