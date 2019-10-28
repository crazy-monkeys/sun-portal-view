<template>
  <el-container class="home">
    <img src="../../../static/home.jpg" alt="">
  </el-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      activeIndex2: '/'
    };
  },
  methods:{
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.home {
  height: 500px;
  img{
    width: 100%;
  }
}
</style>
