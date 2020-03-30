<template>
  <div class="Comment"></div>
</template>
<script>
export default {
  data() {
    return {
      userInfo: JSON.parse(localStorage.getItem("userInfo"))
    };
  },
  mounted() {
    this.$axios({
      url: "/post_comment/" + this.userInfo.user.id
    }).then(res => {
      console.log(res);
    });
  }
};
</script>

