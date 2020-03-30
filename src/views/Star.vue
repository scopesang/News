<template>
  <div class="concernPage">
    <navigatebar navigationtitle="我的收藏"></navigatebar>
    <div v-for="(item,index) in item" :key="index">
      <div class="concern concern-item" v-if="item.cover.length>0 && item.cover.length<3">
        <div class="imgText-left">
          <h4>
            林志玲穿透视黑纱裙米兰看秀
            腹部微隆显孕味
          </h4>
          <p>火星时报 52跟帖</p>
        </div>

        <img
          src="https://tse1-mm.cn.bing.net/th/id/OET.86f8f5d4a8424e95822cc6f530b28316?w=272&h=272&c=7&rs=1&o=5&pid=1.9"
        />
      </div>

      <div class="item2 concern-item" v-if="item.cover.length>2">
        <h4>亚马逊雨林为何燃烧？除了新总统“急功近利”的开发，国际资本才是真凶</h4>
        <div class="imgs">
          <img
            src="https://tse1-mm.cn.bing.net/th/id/OET.6570bfa2065f4f2c8074b99429c29e74?w=272&h=272&c=7&rs=1&o=5&pid=1.9"
            alt
          />
          <img
            src="https://tse1-mm.cn.bing.net/th/id/OET.6570bfa2065f4f2c8074b99429c29e74?w=272&h=272&c=7&rs=1&o=5&pid=1.9"
            alt
          />
          <img
            src="https://tse1-mm.cn.bing.net/th/id/OET.6570bfa2065f4f2c8074b99429c29e74?w=272&h=272&c=7&rs=1&o=5&pid=1.9"
            alt
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import navigatebar from "@/components/Navigatebar";
export default {
  data() {
    return {
      userJson: JSON.parse(localStorage.getItem("userInfo")),
      item: []
    };
  },
  mounted() {
    this.$axios({
      url: "/user_star",
      headers: {
        Authorization: this.userJson.token
      }
    }).then(res => {
      this.item = res.data.data;
      console.log(this.item);
    });
  },
  components: {
    navigatebar
  }
};
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
}
.concern-item {
  padding: 20px 10px;
  border-bottom: 1px solid rgba(228, 228, 228, 1);
}
.concernPage {
  text-align: left;

  .concern {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    .imgText-left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      h4 {
        font-weight: normal;
      }

      p {
        color: #cccc;
        margin-top: 10px;
      }
    }

    img {
      height: 75px;
      width: 120px;
      object-fit: cover;
    }
  }

  .item2 {
    h4 {
      font-weight: normal;
    }
    .imgs {
      display: flex;
      justify-content: space-between;
      align-content: center;
      img {
        width: 33%;
        height: 75px;
        object-fit: cover;
      }
    }
  }
}
</style>