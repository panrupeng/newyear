<template>
  <div class="main">
   <div class="btnBox">
    <Button type="info" icon="edit" @click="modal1 = true">修改</Button><br>
    <!-- <Button type="error" icon="close" style="margin-top:8px;">删除</Button> -->
   </div>
    <div class="fulls">
      <h2>{{showData.title}}</h2><small>时间:{{showData.time}}</small>
      <p>{{showData.describe}}</p>
    </div>
    <div class="picBox">
      <Row>
        <Col style="padding:10px;position:relative;" span="8" v-for="(pic, index) in showData.pics" :key="index">
          <img :src="pic" alt="">
          <i @click="deletePic(pic)" class="ivu-icon ivu-icon-ios-close-outline"></i>
        </Col>
      </Row>
    </div>

    <Modal v-model="modal1" title="修改节目信息">
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="节目名称" prop="title">
            <Input v-model="formValidate.title"></Input>
        </FormItem>
        <FormItem label="节目描述" prop="describe">
            <Input type="textarea" :autosize="{minRows: 4,maxRows: 8}" v-model="formValidate.describe"></Input>
        </FormItem>
         <FormItem label="时间" prop="time">
            <Input v-model="formValidate.time"></Input>
        </FormItem>
         <FormItem label="表演者" prop="player">
            <Input v-model="formValidate.player"></Input>
        </FormItem>
         <FormItem label="票数" prop="">
            <!-- <Input v-model="formValidate.vote"></Input> -->
            <InputNumber :max="999999" :min="0" v-model="formValidate.vote"></InputNumber>
        </FormItem>
        <FormItem>

        </FormItem>
    </Form>
      <div slot="footer">
        <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
        <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">取消</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "detailed",
  data() {
    return {
      showData: {},
      modal1: false,
      formValidate: {
        title: "",
        describe: "",
        time: "",
        player: "",
        vote: null
      },
      ruleValidate: {
        title: [
          {
            required: true,
            message: "The tittle cannot be empty",
            trigger: "blur"
          }
        ],
        describe: [
          {
            required: true,
            message: "The describe cannot be empty",
            trigger: "blur"
          }
        ],
        time: [
          {
            required: true,
            message: "The time cannot be empty",
            trigger: "blur"
          }
        ],
        player: [
          {
            required: true,
            message: "The player cannot be empty",
            trigger: "blur"
          }
        ]
      }
    };
  },
  created() {
    this.load();
    // alert(this.$route.params.id)
  },
  mounted() {},
  methods: {
    load() {
      axios({
        method: "get",
        url: "http://106.14.198.193/programsDetails?id=" + this.$route.params.id
      })
        .then(
          function(response) {
            if (response.data.status === "OK") {
              // this.mainData = response.data.data;
              this.showData = response.data.data[0];
              this.formValidate.title = response.data.data[0].title;
              this.formValidate.time = response.data.data[0].time;
              this.formValidate.describe = response.data.data[0].describe;
              this.formValidate.player = response.data.data[0].player;
              this.formValidate.vote = response.data.data[0].vote;
              this.formValidate._id = response.data.data[0]._id;
            }
          }.bind(this)
        )
        .catch(function(error) {});
    },
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.update();
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset(rest) {
      this.modal1 = false;
      //  this.$refs[rest].resetFields();
    },
    update() {
      axios({
        method: "PUT",
        url: "http://106.14.198.193/programs",
        data: this.formValidate
      })
        .then(
          function(response) {
            if (response.data.status === "OK") {
              this.modal1 = false
              this.load()
              this.$Message.success("修改成功");
            }

          }.bind(this)
        )
        .catch(function(error) {});
    },
    deletePic(urls){
      alert(urls)
      axios({
        method:"POST",
        url:"http://106.14.198.193/delimg",
        data:{
          id:this.showData._id,
          url:urls
        }
      }).then(function(response){
        console.log(response);
        if (response.data.status === "OK") {
              this.load()
              this.$Message.success("删除成功")
            }
      }.bind(this)).catch(function(error){
          console.log(error)
      })
    }
    // delete() {
    //   axios({
    //     method: "DELETE",
    //     url: "http://106.14.198.193/programs" + this.showData._id
    //   })
    //     .then(
    //       function(response) {
    //         if (response.data.status === "OK") {
    //           this.modal1 = false
    //           this.load()
    //           this.$Message.success("删除成功");
    //         }

    //       }.bind(this)
    //     )
    //     .catch(function(error) {});
    // }
  }
};
</script>
<style lang="less" scoped>
.main {
  margin: 12px 8px;
}
.btnBox {
  position: absolute;
  top: 70px;
  left: 20px;
}
.fulls {
  max-width: 700px;
  margin: 8px auto;
  text-align: center;
  p {
    font-size: 15px;
  }
}
.picBox {
  max-width: 700px;
  margin: 8px auto;
  position: relative;
  text-align: center;
  img {
    height: 130px;
    width: 100%;
  }
  i {
    font-size: 22px;
    cursor: pointer;
    color: #fff;
    position: absolute;
    right: 13px;
    top: 10px;
  }
}
</style>
