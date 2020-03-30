<template>
  <div class="Comment">
    <navigatebar navigationtitle="我的回帖"></navigatebar>
    <div class="comment-item" v-for="(item,index) in comments" :key="index">
      <p>{{item.create_date.split("T")[0]}}</p>
      <div class="parent" v-if="item.parent">
        <p>回复：{{item.parent.user.nickname}}</p>
        <span>{{item.parent.content}}</span>
      </div>

      <div class="post">
        <div>
          <span>{{item.content}}</span>
        </div>

        <div class="post-title">
          <h5>原文:{{item.post.title}}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.Comment {
  // display: flex;
  // flex-direction: column;
  // align-items: flex-start;
  text-align: left;
  background: #ffffff;
  .comment-item {
    margin-bottom: 10px;
    border-bottom: 1px solid #f4f4f4;
    box-shadow: 0px 3px 12px #88888c9e;
    padding: 20px 20px;
  }
  p {
    color: #bbbabb;
    padding-bottom: 10px;
  }
  .parent {
    background-color: #efefef;

    padding: 10px 10px;
    p {
      color: black;
    }
  }

  .post {
    padding-top: 10px;
    span {
    }
    h5 {
      color: #bbbabb;
      font-weight: normal;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
<script>
import navigatebar from "@/components/Navigatebar";
export default {
  data() {
    return {
      userInfo: JSON.parse(localStorage.getItem("userInfo")),
      comments: []
    };
  },
  components: {
    navigatebar
  },
  mounted() {
    this.$axios({
      url: "/user_comments",
      headers: {
        Authorization: this.userInfo.token
      }
    }).then(res => {
      this.comments = res.data.data;
      console.log(this.comments);
    });
  }
};
</script>

