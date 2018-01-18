<template>
  <div class="header">
    <router-link to="/activity">活动</router-link>
    <router-link to="/talkOne">弹幕</router-link>
    <router-link to="/talkTwo">弹幕</router-link>
    <router-link to="/Vote">投票</router-link>
  </div>
</template>
<script>
export default {
  name: "appHead"
};
</script>
<style lang="less">
  .header{
    font-size: 16px;
    height: 60px;
    width:100%;
    background:#495060;
    color:#FFF;
    line-height:60px;
    text-align:center;
  }
  a{
    color: #FFF;
    padding: 0 12px;
  }
  a:hover{
    color: orange;
  }
  .router-link-active{
    color: orange;
  }
</style>

