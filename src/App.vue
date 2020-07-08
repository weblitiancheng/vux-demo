<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
// 引入 reset.less，默认样式不包含reset，并且部分用户自己有一套reset样式，因此需要在App.vue进行手动引入
@import '~vux/src/styles/1px.less';
// 1px解决问题
body {
  background-color: #fbf9fe;
}
</style>
