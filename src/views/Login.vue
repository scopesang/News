<template>
  <div>
    <div class="bg-box"></div>
    <div class="login" id="login">
      <div class="iconfont ali-xiaoguanbi"></div>
      <div class="iconfont ali-xiaonew"></div>

      <section class="box">
        <div class="username">
          <label for="username">
            <h3>username</h3>
            <div class="input">
              <input type="text" id="username" placeholder="请输入账号" v-model="form.username" />
              <i class="iconfont ali-xiaoRectangleCopy"></i>
            </div>
          </label>
        </div>

        <div class="pass">
          <label for="password">
            <h3>password</h3>
            <div class="input">
              <input type="password" id="password" placeholder="请输入密码" v-model="form.password" />
              <i class="iconfont ali-xiaoRectangleCopy1"></i>
            </div>
          </label>
        </div>
        <router-link to="/register">
          <p style="text-align:right">注册账号</p>
        </router-link>
        <button class="bg-color" @click="go">立即登录</button>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    go() {
      this.$axios({
        url: "/login",
        method: "POST",
        data: this.form
      }).then(res => {
        console.log(res.data);
        let { message } = res.data;
        this.$toast.success(message);
        localStorage.setItem("userInfo", JSON.stringify(res.data.data));
        this.$toast.success(message);
        this.$router.push("/user");
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

.ali-xiaoguanbi {
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 30px;
  text-align: center;
}
.ali-xiaoguanbi:hover {
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
