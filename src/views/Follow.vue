<template>
  <div id="star">
    <navigate navigationtitle="我的关注"></navigate>
    <div>
      <div class="item" v-for="(item,index) in item" :key="index">
        <div class="left">
          <img :src="$axios.defaults.baseURL+item.head_img" alt />
          <div class="left-text">
            <h4>{{item.nickname}}</h4>
            <p>{{item.create_date.split("T")[0]}}</p>
          </div>
        </div>
        <span @click=" Cancel(item.id)">取消关注</span>
      </div>
    </div>
  </div>
</template>

<script>
import navigate from "@/components/Navigatebar.vue";
export default {
  data() {
    return {
      userInfo: JSON.parse(localStorage.getItem("userInfo")),
      item: [],
      show: false
    };
  },
  methods: {
    Cancel(id) {
      this.$dialog
        .confirm({
          title: "提示",
          message: "确定取消关注吗？"
        })
        .then(() => {
          this.$axios({
            url: "/user_unfollow/" + id,
            headers: {
              Authorization: this.userInfo.token
            }
          }).then(res => {
            this.update();
            console.log(res);
          });
        });
    },

    update() {
      this.$axios({
        url: "/user_follows",
        headers: {
          Authorization: this.userInfo.token
        }
      }).then(res => {
        console.log(res.data.data);

        this.item = res.data.data;
      });
    }
  },
  components: {
    navigate
  },
  mounted() {
    this.update();
  }
};
</script>

<style lang="less" scoped>
.item {
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e1e1e1;
  .left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    h4 {
      font-weight: normal;
      padding-bottom: 10px;
    }
    p {
      color: #707070;
    }
    img {
      margin-right: 20px;
      width: 40px;
      height: 40px;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  span {
    padding: 5px 10px;
    background-color: #e1e1e1;
    border-radius: 50px;
  }
}
</style>
