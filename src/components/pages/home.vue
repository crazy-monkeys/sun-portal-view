<template>
  <el-container class="home">
    home
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
<style scoped>
.home {
  height: 500px;
}
</style>
