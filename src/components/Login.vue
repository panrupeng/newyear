<template>
  <div class="loginbox">
    <h3>欢迎！</h3>
    <Input type="text" class="inputs" v-model.trim="username" icon="ivu-icon ivu-icon-person" placeholder="username" autofocus></Input>
    <Input type="password" class="inputs" v-model.trim="password" icon="ivu-icon ivu-icon-locked" placeholder="password"></Input>
    <Button class="buttons" @click="login" type="primary" long>登录</Button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  created() {},
  mounted() {},
  methods: {
    login() {
      // this.$router.replace({name:'menu'})
      axios({
        method: "post",
        url: "http://106.14.198.193/auth",
        data: {
          name: this.username,
          password: this.password
        }
      })
        .then(
          function(response) {
            console.log(response.data.status);
            if (response.data.status === "OK") {
              this.$router.replace({ name: "activity" });
            }
          }.bind(this)
        )
        .catch(function(error) {});
    }
  }
};
</script>

<style lang="less" scoped>
.loginbox {
  font-size: 18px;
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  // margin-top: 120px;
  position: relative;
  top: 120px;
  border-radius: 2px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  max-width: 350px;
  padding: 10px 40px 40px 40px;
  .inputs {
    padding-top: 12px;
  }
  .buttons {
    margin-top: 24px;
  }
}
</style>
