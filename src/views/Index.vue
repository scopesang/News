<template>
  <div class="index">
    <header>
      <router-link to="/">
        <i class="iconfont ali-xiaonew"></i>
      </router-link>

      <div class="search">
        <input type="text" placeholder="搜索新闻" />
        <i class="iconfont ali-xiaojiedianguanli"></i>
      </div>
      <router-link to="/user">
        <i class="iconfont ali-xiaoRectangleCopy"></i>
      </router-link>
    </header>
    <nav>
      <!-- tabs选项卡 -->
      <van-tabs v-model="active" sticky swipeable>
        <!-- 每项tab -->
        <van-tab v-for="(item, index) in categories" :key="index" :title="item">
          <!-- pull 下拉刷新 -->
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
              <section>
                <PostItem :itemData="items"></PostItem>
              </section>
            </van-list>
          </van-pull-refresh>
        </van-tab>
      </van-tabs>
    </nav>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  data() {
    return {
      active: 0,
      list: [],
      loading: false,
      finished: false,
      isLoading: false,
      categories: [
        "关注",
        "头条",
        "娱乐",
        "体育 ",
        "汽车 ",
        "房产",
        "体育 ",
        "汽车 ",
        "▼"
      ],
      items: [
        {
          cover: [1, 2, 3],
          type: "img"
        },
        {
          cover: [1],
          type: "img"
        },
        {
          cover: [1],
          type: "video"
        },
        {
          cover: [1, 2, 3],
          type: "img"
        },
        {
          cover: [1],
          type: "img"
        },
        {
          cover: [1],
          type: "video"
        }
      ]
    };
  },
  components: {
    PostItem
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },

    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 6; i++) {
          this.items.push(this.items[i]);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.items.length >= 20) {
          this.finished = true;
        }
      }, 1000);
    }
  }
};
</script>

<style lang="less" scoped>
@import url("//at.alicdn.com/t/font_1449723_66ddyqmbb6o.css");
::-webkit-input-placeholder {
  color: white;
  text-align: center;
}
header {
  background-color: #ff0000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

  a {
    color: #ffff;
  }
  .search {
    position: relative;
    input {
      background-color: #f97979;
      border: none;
      border-radius: 25px;
      padding: 10px 10px 10px 40px;
      color: #ffffff;
      box-sizing: border-box;
    }

    i {
      position: absolute;
      left: 5%;
      top: 50%;
      transform: translate(0%, -50%);
      color: #ffffff;
    }
  }

  i {
    font-size: 24px;
  }
}

nav {
  position: relative;
  /deep/.van-tabs__nav {
    position: static;
  }
  // 想改第三方组件的样式必须用到 /deep/ 深沉作用域
  /deep/ .van-tabs__nav--line {
    background: #e4e4e4;

    // :last-child 是其父辈的最后一个子元素 :nth-last-child(2)是其父辈的倒数第二个子元素
    /deep/ .van-tab:nth-last-child(2) {
      background-color: #e4e4e4 !important;
      position: absolute;
      right: 0;
      width: 50px !important;
    }

    /deep/ .van-tabs__line {
      display: none;
    }

    /deep/ .van-tab--active {
      border-bottom: 3px solid red;
    }
  }
}
</style>