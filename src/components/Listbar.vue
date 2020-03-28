<template>
  <router-link to="#">
    <li>
      <span>{{label}}</span>
      <div>
        <span>{{tips}}</span>
        <i class="iconfont ali-xiaoarrow-right"></i>
      </div>
    </li>
  </router-link>
</template>

<script>
export default {
  // 声明组件可以接收的属性, label表示左边的文字, tips是右边的文字
  props: ["label", "tips"]
};
</script>
<style  scoped>
section li {
  padding: 15px 20px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1px;
}
</style>

