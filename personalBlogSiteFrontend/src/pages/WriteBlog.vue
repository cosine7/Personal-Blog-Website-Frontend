<script setup lang="ts">
import { ref } from 'vue';
import useCategoryStore from '../stores/category';

const categoryStore = useCategoryStore();
const content = ref('');
const showAddCategoryPopover = ref(false);

function togglePopover() {
  showAddCategoryPopover.value = !showAddCategoryPopover.value;
}
</script>

<template>
  <form class="wrapper">
    <div class="option-wrapper">
      <select required>
        <option value="" disabled selected>Select Category</option>
        <option v-for="item in categoryStore.items"
          :key="item.name"
          :value="item.name">
          {{item.name}}
        </option>
      </select>
      <button @click="togglePopover"
        type="button"
        class="iconfont icon-add btn-add">
      </button>
      <button>Publish</button>
    </div>
    <div class="editor-wrapper">
      <mavon-editor v-model="content" />
    </div>
  </form>
  <teleport to="body">
    <div v-show="showAddCategoryPopover" class="popover" @click="togglePopover">
      <form @click.stop>
        <i @click="togglePopover" class="iconfont icon-close"></i>
        <input type="text" placeholder="Category Name">
        <button>Add</button>
      </form>
    </div>
  </teleport>
</template>

<style scoped lang="less">
.wrapper, .editor-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.option-wrapper {
  padding: 15px;
  position: relative;
  display: flex;
  align-items: center;

  :last-child {
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

.btn-add {
  border: none;
  background-color: transparent;
  font-size: 20px;
  margin-left: 10px;
  color: #C0C4CC;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    color: #409EFF;
  }
}

.markdown-body {
  width: 100%;
  height: 100%;
  border-radius: 0;
}

.popover {
  background-color: rgba(0, 0, 0, .4);
  position: absolute;
  z-index: 9999;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: max-content;
    height: max-content;
    background-color: white;
    border-radius: 15px;
    padding: 40px;
    position: relative;

    input, button {
      height: 50px;
      font-size: 20px;
      border-radius: 8px;
      padding: 0 20px;
    }

    input {
      width: 250px;
      border: 1px solid #DCDFE6;
      outline: none;
      margin-right: 20px;

      &:hover {
        border-color: #C0C4CC;
      }

      &:focus {
        border-color: #409EFF;
      }
    }

    button {
      background-color: #409EFF;
      color: white;
      border: none;
      cursor: pointer;

      &:hover {
        background-color: #66B1FF;
      }
    }

    i {
      position: absolute;
      top: 0;
      right: 0;
      cursor: pointer;
      font-size: 20px;
      font-weight: bold;
      margin: 10px;
      color: #C0C4CC;

      &:hover {
        color: black;
      }
    }
  }
}
</style>
