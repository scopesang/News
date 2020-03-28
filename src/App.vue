<template>
  <div id="app">
    <div id="phone">
      <router-view />
    </div>
  </div>
</template>

<style lang="less">
@import url("../node_modules/vant/lib/index.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#phone {
  margin: 0 auto;
  background-color: #f3f3f3;
  width: 375px;
  height: 667px;
  position: relative;
}
</style>
