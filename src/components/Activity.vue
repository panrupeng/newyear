<template>
 <div>
    <Card class="main"  @click.native="detailed(show._id)" v-for="(show, index) in showData" :key="show._id" >
      <h4>{{index+1}}、{{show.title}}</h4>
      <img :src="show.pics[0]" alt="">
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{show.describe}}</p>
    </Card>
 </div>
</template>
<script>
import axios from "axios";
export default {
  name: "activity",
  data() {
    return {
      showData: []
    };
  },
  created() {
    this.load();
  },
  mounted() {},
  methods: {
    load() {
      axios({
        methods: "get",
        url: "http://106.14.198.193/programs"
      })
        .then(
          function(response) {
            // console.log(response.data.data);
            if (response.data.status === "OK")
              this.showData = response.data.data;
          }.bind(this)
        )
        .catch(function(error) {});
    },
    detailed(num) {
      // sessionStorage.setItem("shouId",num);
      this.$router.push({ name: "Detailed",params:{id: num} });
    }
  }
};
</script>

<style lang="less" scoped>
.main {
  width: 200px;
  float: left;
  margin-top: 12px;
  margin-left: 8px;

  img {
    width: 164px;
    height: auto;
  }
}
.ivu-card-body {
  height: 306px;
  overflow: hidden;
  text-overflow: ellipsis;
}
ul li {
  padding: 5px 0;
}
.ivu-card-body {
  ul li:hover {
    color: red;
  }
}
</style>

