<template>
  <div class="user">
    <div class="navigation-bar">
      <i class="iconfont ali-xiaoarrow-lift"></i>
      <span>个人中心</span>
      <i class="iconfont ali-xiaonew"></i>
    </div>
    <header>
      <div class="left-detail">
        <img :src="$axios.defaults.baseURL+userInfo.head_img" />
        <div>
          <p>
            <i :class="userInfo.gender == 1 ? 'iconfont ali-xiaonan' : 'iconfont ali-xiaonv'"></i>
            <span>{{userInfo.nickname}}</span>
          </p>
          <p>2019-10-10</p>
        </div>
      </div>
      <div>
        <i class="iconfont ali-xiaoarrow-right"></i>
      </div>
    </header>

    <section>
      <ul>
        <Listbar v-for="(item,index) in rows" :key="index" :label="item.label" :tips="item.tips"></Listbar>
        <Listbar @click.native="out" label="退出"></Listbar>
        <!-- click.native这个事件类型，会给Listbar这个组件最外部的div强制绑定点击事件
        不要去跟事件传递作比较-->
      </ul>
    </section>
  </div>
</template>

<script>
import Listbar from "@/components/Listbar";
export default {
  name: "user",

  data() {
    return {
      rows: [
        { label: "我的关注", tips: "关注的用户" },
        { label: "我的跟帖", tips: "跟帖回复" },
        { label: "我的收藏", tips: "文章视频" }
      ],
      userInfo: {}
    };
  },
  methods: {
    out() {
      // 询问用户是否确定退出

      this.$dialog
        .confirm({
          title: "提示",
          message: "确定退出吗？"
        })
        .then(() => {
          // 点击确定时候触发的函数

          // 清除本地的存储的用户数据
          localStorage.removeItem("userInfo");
          // 跳转到登录页,必须要使用replace。因为退出不可能再返回个人中心
          this.$router.replace("/login");
        })
        .catch(() => {
          // 点击取消按钮触发的函数
        });
    }
  },

  mounted() {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    this.$axios({
      url: "/user/" + userInfo.user.id,
      headers: {
        Authorization: userInfo.token
      }
    }).then(res => {
      this.userInfo = res.data.data;
      console.log(this.userInfo);
    });
  },

  components: {
    Listbar
  }
};
</script>

<style lang="less" scoped >
@import url("//at.alicdn.com/t/font_1449723_66ddyqmbb6o.css");
.navigation-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  margin-bottom: 10px;
}
.ali-xiaonan {
  color: #0091ff;
}
.ali-xiaonv {
  color: #ff4d94;
}

p {
  display: flex;
  justify-content: center;
  align-items: center;
}
a {
  color: #2c3e50;
}
i {
  font-size: 30px;
}
header {
  background-color: #fff;
  padding: 0 20px;
  margin-bottom: 10px;
  height: 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left-detail {
    display: flex;
    align-items: center;

    img {
      width: 70px;
      height: 70px;
      margin-right: 20px;
      object-fit: contain;
      border-radius: 50%;
    }
  }
}
</style>