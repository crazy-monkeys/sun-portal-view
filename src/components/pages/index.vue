<template>
  <el-container class="index">
    <el-header >
      <img src="../../../static/banner.png" alt="banner图">
    </el-header>
    <el-container class="main">
      <!-- <el-aside  class="menu">Aside</el-aside> -->
      <el-main class="content">
        <el-menu
            :default-active="$route.path"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#333"
            text-color="#fff"
            :router="true"
            active-text-color="#FF7F00">
            <el-menu-item index="/home">Home</el-menu-item>
            <el-submenu index="2">
                <template slot="title">Warranty</template>
                <el-menu-item index="/warranty/claim">Online Warranty Claim</el-menu-item>
                <el-menu-item index="/warranty/procedure">Warranty Claim Procedure</el-menu-item>
                <el-menu-item index="/warranty/registration">Warranty Registration</el-menu-item>
                <el-menu-item index="/warranty/extension">Warranty Extension</el-menu-item>
            </el-submenu>
        </el-menu>
            <router-view></router-view>
      </el-main>
    </el-container>
    <el-footer>页面底部区域</el-footer>
  </el-container>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      activeIndex2: '/'
    };
  },
  methods:{
    handleSelect(key, keyPath) {
        // console.log(key, keyPath);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index {
  height: 100%;
  width: 1120px;
  margin: 0 auto;
}
.el-header,.el-footer {
  height: 240px !important; 
  /* background: red; */
  padding: 0;
  text-align: center;
  line-height: 240px;
  font-size: 30px;
  color: #fff;
  background: #000;
}
.menu {
  /* background: blue; */
  width: 200px;
  height: 100%;
}
.content{
  overflow-y: hidden;
}
.el-header img{
    height: 240px;
  }
</style>
