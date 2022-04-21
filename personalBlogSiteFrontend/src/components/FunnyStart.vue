<template>
  <div class="wrapper">
    <h1>ChenXiao Liu</h1>
    <h1 class="second">是兄弟！就一起来击剑！</h1>
    <img class="third" src="../assets/jijian.gif" alt="击剑">
  </div>
</template>

<style scoped lang="less">
.wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  background-color: black;
  animation: fun 1s forwards;
  animation-delay: 4s;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h1, img {
  background: linear-gradient(90deg, red, orange, yellow, green, blue, aqua, purple);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 100px;
  height: max-content;
  width: max-content;
  animation: move 1s forwards;
  position: relative;
  top: 0;
  opacity: 0;
  margin-bottom: 10px;
}
.second {
  animation-delay: 1s;
}
.third {
  animation-delay: 1.5s;
  width: 250px;
}

@keyframes move {
  100% {
    top: -100px;
    opacity: 1;
  }
}

@keyframes fun {
  50% {
    border-radius: 50%;
  }
  100% {
    width: 0;
    height: 0;
  }
}
</style>
