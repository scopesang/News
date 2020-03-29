<template>
  <div class="navigation-bar">
    <i class="iconfont ali-xiaoarrow-lift" @click="$router.back()"></i>
    <span>{{navigationtitle}}</span>
    <i class="iconfont ali-xiaonew" @click="$router.push('/')"></i>
  </div>
</template>

<script>
export default {
  // 代表这个组件可接收的属性
  props: ["navigationtitle"]
};
</script>

<style lang="less" scoped>
@import url("//at.alicdn.com/t/font_1449723_66ddyqmbb6o.css");
.navigation-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  margin-bottom: 10px;
}
.ali-xiaonan {
  color: #0091ff;
}
.ali-xiaonv {
  color: #ff4d94;
}
</style>