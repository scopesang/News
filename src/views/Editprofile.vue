<template>
  <div class="editprofile">
    <navigation :navigationtitle="navigationtitle"></navigation>

    <section>
      <div class="userImg">
        <img :src="$axios.defaults.baseURL+userInfo.head_img" />
        <van-uploader :after-read="afterRead" />
      </div>

      <listbar label="昵称" :tips="userInfo.nickname" @click.native="shownickname=true"></listbar>
      <!-- @confirm点击确定按钮时候的事件 -->
      <van-dialog v-model="shownickname" title="昵称" show-cancel-button @confirm="changenickname">
        <van-field v-model="value" placeholder="请输入用户名" />
      </van-dialog>

      <listbar label="密码" tips="*********" @click.native="showPassword=true"></listbar>
      <van-dialog
        v-model="showPassword"
        title="修改密码"
        show-cancel-button
        @confirm="handleChangePassword"
      >
        <van-field v-model="password" placeholder="请输入密码" type="password" />
      </van-dialog>
      <listbar label="性别" :tips="userInfo.gender==1 ?'男' :'女'" @click.native="show = true"></listbar>
      <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
    </section>
  </div>
</template>

<script>
import navigation from "@/components/Navigatebar";
import listbar from "@/components/Listbar";
export default {
  data() {
    return {
      navigationtitle: "编辑资料",
      userInfo: {},
      userJSON: {},

      actions: [
        { name: "男", value: 1 },
        { name: "女", value: 0 }
      ],
      value: "",
      password: "",
      shownickname: false,
      showPassword: false,
      show: false
    };
  },
  methods: {
    handleChangePassword() {
      this.update({ password: this.password });
    },
    changenickname() {
      this.update({ nickname: this.value });
      this.userInfo.nickname = this.value;
    },
    onSelect(item) {
      // 调用编辑用户信息的函数
      this.update({ gender: item.value });
      // 同步的修改当前显示的数据
      this.userInfo.gender = item.value;
      this.show = false;
    },

    afterRead(file) {
      // 大家不用去纠结json还是表单的头信息，axios会自动设置的
      const formData = new FormData();
      // 通过原有的方法append给表单添加元素
      // 第一个字符串的file表示接口接收的属性，第二个 file.file是文件对象
      formData.append("file", file.file);
      // 开始上传
      this.$axios({
        url: "/upload",
        // post请求
        method: "POST",
        // 添加头信息
        headers: {
          Authorization: this.userJSON.token
        },
        data: formData
      }).then(res => {
        // url就是图片的路径
        const { url } = res.data.data;
        this.userInfo.head_img = url;
        this.update({
          head_img: url
        });
      });
    },

    update(data) {
      this.$axios({
        url: "/user_update/" + this.userInfo.id,
        method: "POST",
        // 添加头信息
        headers: {
          Authorization: this.userJSON.token
        },
        data
      }).then(res => {
        console.log(res);
        this.$toast.success("修改成功");
      });
    }
  },
  mounted() {
    this.userJSON = JSON.parse(localStorage.getItem("userInfo"));
    console.log(this.userInfo);

    this.$axios({
      url: "/user/" + this.userJSON.user.id,
      headers: {
        Authorization: this.userJSON.token
      }
    }).then(res => {
      this.userInfo = res.data.data;
    });
  },

  components: {
    navigation,
    listbar
  }
};
</script>

<style lang="less" scoped>
section {
  background-color: #ffffff;
  position: relative;
  .userImg {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }
  }
  .van-uploader {
    height: 70px;
    overflow: hidden;
    position: absolute;
    top: 0;
    opacity: 0;
  }
}
</style>