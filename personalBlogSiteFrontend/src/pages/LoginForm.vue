<script setup lang="ts">
import { ref } from 'vue';
import useAdminStore from '../stores/admin';

const admin = useAdminStore();
const username = ref('');
const password = ref('');
const showPassword = ref(false);
// console.log(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
// window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
//     const newColorScheme = event.matches ? "dark" : "light";
// });
</script>

<template>
  <div class="container">
    <form @submit.prevent="admin.login(username, password)">
      <h1>Login</h1>
      <div class="wrapper">
        <input
          type="text"
          id="username"
          required
          v-model="username"
        >
        <label for="username">Username</label>
      </div>
      <div class="wrapper">
        <input
          :type="showPassword ? 'text' : 'password'"
          id="password"
          required
          v-model="password"
        >
        <label for="username">Password</label>
        <i
          @click="showPassword = !showPassword"
          :class="`iconfont icon-password-${showPassword ? 'show' : 'hidden'}`"
        />
      </div>
      <button :disabled="username === '' || password === ''">
        Login
      </button>
    </form>
  </div>
</template>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--sidebar-background-color);
}

form {
  display: flex;
  flex-direction: column;
  width: max-content;
  height: max-content;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .25);
  padding: 40px;
}

h1 {
  margin-bottom: 25px;
  text-align: center;
  user-select: none;
}

.wrapper {
  position: relative;
  margin-bottom: 25px;
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
    top: 0;
    font-size: 14px;
  }
}

label {
  position: absolute;
  color: #C0C4CC;
  top: 50%;
  padding: 0 3px;
  left: 17px;
  transform: translateY(-50%);
  font-size: 20px;
  pointer-events: none;
  transition: all .3s;
  background-color: white;
}

i {
  position: absolute;
  right: 10px;
  font-size: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: #C0C4CC;
  cursor: pointer;

  &:hover {
    color: #409EFF;
  }
}

#password {
  padding-right: 38px;
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
    cursor: not-allowed;
  }
}
</style>
