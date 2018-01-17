<template>
  <div class="bgground">
    <div class="mains"><!--活动-->
      <div class="menubox">
        <i class="ivu-icon ivu-icon-ios-people"></i>
        <span>活动</span>
      </div>
    </div>
    <div class="mains"><!--弹幕-->
       <div class="menubox">
        <i class="ivu-icon ivu-icon-ios-chatboxes"></i>
        <span>弹幕</span>
      </div>
    </div>
    <div class="mains"><!--投票-->
       <div class="menubox">
        <i class="ivu-icon ivu-icon-podium"></i>
        <span>投票</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "menus"
};
</script>
<style lang="less">
.bgground {
  height: 100%;
  width: 100%;
  background: url(../assets/menu-bg.jpg);
  padding-top: 120px;
}
.mains {
  height: 80px;
  font-size: 18px;
  background-color: #f7f7f7;
  margin: 0 auto 4px;
  border-radius: 2px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  max-width: 350px;
  line-height: 80px;
  position: relative;
  text-align: center;
  .menubox {
    i {
      font-size: 28px;
      position: relative;
      top: 3px;
      transition: all 200ms linear;
    }
    span {
      padding-left: 8px;
      font-size: 23px;
      transition: all 200ms linear;
    }
  }
}

.mains:hover {
  background: #e1f0fa;
  i{
    font-size: 36px;
     position: relative;
      top: 5px;
    color: #259add;
    opacity: 0.8;
    text-shadow: 0px 0px 13px #fff;
  }
  span{
    font-size: 28px;
    opacity: 1;
    color:#2676ac;
    animation: moveFromTop 200ms ease-in-out;
  }
  @keyframes moveFromTop {
    from {
        opacity: 0;
        -moz-transform: translateY(-200%);
    }
    to {
        opacity: 1;
        -moz-transform: translateY(0%);
    }
}
}

</style>
