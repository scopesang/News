<template>
  <div>
    <div class="bg-box"></div>
    <div class="login" id="login">
      <router-link to="/">
        <div class="iconfont ali-xiaoshangyibu"></div>
      </router-link>

      <div class="iconfont ali-xiaonew"></div>

      <section class="box">
        <van-form @submit="onSubmit">
          <van-field
            v-model="form.username"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="form.password"
            type="password"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />

          <van-field
            v-model="form.nickname"
            type="text"
            label="nickname"
            placeholder="nickname"
            :rules="[{ required: true, message: '请填写nickname' }]"
          />
          <div>
            <van-button round block class="bg-color" native-type="submit">注册</van-button>
          </div>
        </van-form>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        nickname: "", // 昵称
        password: ""
      }
    };
  },
  methods: {
    // 提交表单时候触发的事件，该事件通过校验才会触发
    // values是表单返回的值，这里的values我们用不上，数据可以在this.form里面拿
    onSubmit(values) {
      // 调用axios发起异步请求，类似$.ajax(类似不代表一样)
      this.$axios({
        // 接口地址
        url: "/register",
        // 声明请求的方法为post请求(一定要注册这个method没有s)
        // 跟vue的methods属性毫无关系
        method: "POST",
        // 参数
        data: this.form
        // .then方法里面的函数就是成功的回调函数,axios没有succces
      }).then(res => {
        // 获取到返回的信息
        const { message } = res.data;
        // 使用vant的弹窗提示用，success表示成功的弹窗
        this.$toast.success(message);
      });
    }
  }
};
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.bg-box {
  width: 100%;
  height: 200px;
  background-color: #656ee7;
}
.van-cell {
  padding: 10px 0px;
}

button {
  font-size: 16px;
}
.login {
  position: absolute;
  width: 88%;
  padding: 15px;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 20px;
  bottom: 20px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 5px 10px 10px #888888;
}
// css 原生的写法
@import url("//at.alicdn.com/t/font_1449723_66ddyqmbb6o.css");

.ali-xiaoshangyibu {
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 30px;
  text-align: center;
}
.ali-xiaoshangyibu:hover {
  border-radius: 50%;
  background-color: #656ee7;
}
.ali-xiaonew {
  color: #656ee7;
  padding-top: 20px;
  font-size: 80px;
  text-align: center;
}
.bg-color {
  background-color: #656ee7;
}
.box {
  padding-top: 50px;
  width: 100%;
}
label input {
  height: 40px;
  width: 100%;
  padding-left: 40px;
}
label h3 {
  text-align: left;
}
.pass {
  margin-top: 20px;
}

.box button {
  margin-top: 30px;
  color: #ffffff;
  border: 0;
  height: 40px;
  width: 100%;
  border-radius: 25px;
  cursor: pointer;
}
.box button:hover {
  background-color: #656ee7bf;
}

// 动画、
// @keyframes left {
//   from {
//     background-color: #656ee7;
//   }
//   to {
//     background-color: burlywood;
//   }
// }
.box .input {
  position: relative;
}
.box i {
  font-size: 40px;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
