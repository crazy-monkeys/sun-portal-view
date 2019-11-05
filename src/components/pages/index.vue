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
            <el-dropdown @command="handleCommand" trigger='click'>
              <span class="el-dropdown-link">
                {{drop}}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for='item in options' :command="item" :key='item.value'>{{item.label}}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
        </el-menu>
        <router-view></router-view>
      </el-main>
    </el-container>
    <el-footer>
      <el-container  class="foot">
          <img src="../../../static/footlogo.png" alt="logo">
          <div class="linkBox">
            <el-row :gutter="0">
              <el-col :span="8">
                <a href="https://en.sungrowpower.com/en/company" >About Sungrow</a>
              </el-col>
              <el-col :span="8">
                <a href="https://en.sungrowpower.com/en/products">Products A - Z</a>
              </el-col><el-col :span="8">
                <a href="https://en.sungrowpower.com/en/news">Sungrow News</a>

              </el-col>
            </el-row>
            <el-row :gutter="0">
              <el-col :span="8">
                <a href="https://en.sungrowpower.com/en/career">Career</a>
                
              </el-col>
              <el-col :span="8">
                <a href="https://en.sungrowpower.com/en/mission">Our Mission</a>

                
              </el-col><el-col :span="8">
                <a href="https://en.sungrowpower.com/en/how-to-buy">Distributors</a>

               
              </el-col>
            </el-row>
            <el-row :gutter="0">
              <el-col :span="8">
                <a href="https://en.sungrowpower.com/en/events">Events</a>

              
              </el-col>
              <el-col :span="8">
                <a href="https://en.sungrowpower.com/en/downloads">Downloads</a>
               
              </el-col>
              <el-col :span="8">
                <a href="https://en.sungrowpower.com/en/social-responsibility">Social Responsibility</a>

              
              </el-col>
            </el-row>
            <el-row :gutter="0">
              <el-col :span="8">
                <a href="https://en.sungrowpower.com/en/service">Service</a>

              
              </el-col>
              <el-col :span="8">
                <a href="https://en.sungrowpower.com/en/webinars">Webinars</a>
               
              </el-col>
            </el-row>
        
          </div>
          

      </el-container>
      <el-container  class="foot1">
          <p>© 2019 SUNGROW. All Rights Reserved.</p>
          <div class="linkBox">
            <el-row :gutter="100">
              <el-col :span="8">
                <a href="">Contact us</a>
              </el-col>
              <el-col :span="8">
                <a href="">LegalNotice</a>
              </el-col>
              <el-col :span="8">
                <a href="">PrivacyPolicy</a>
              </el-col>
            </el-row>
          </div>
      </el-container>
    </el-footer>
  </el-container>
</template>

<script>
import Bus from "../../bus/bus.js";

export default {
  name: "Index",
  data() {
    return {
      activeIndex2: '/',
      options: [{
        value: 'AU',
        label: 'Australia'
      }, {
        value: '2',
        label: '选项2'
      }],
      drop:'请选择',
      dropValue:'',
    };
  },
  methods:{
    handleSelect(key, keyPath) {
        // console.log(key, keyPath);
    },
    handleCommand(command) {
        // this.$message('click on item ' + command);
        this.drop = command.label
        this.dropValue = command.value;
        Bus.dropValue = command.value;
        Bus.$emit("dropValue", this.dropValue);
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style   scoped>

.index {
  height: 100%;
  width: 1120px;
  margin: 0 auto;
}
.el-dropdown{
  position: absolute;
  right: 50px;
  height: 60px;
}
.el-dropdown span{
  display: block;
  height: 60px;
  line-height: 60px;
}
.el-dropdown-link {
    cursor: pointer;
    color: #fff;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
.el-header,.el-footer {
  height: 240px !important; 
  /* background: red; */
  padding: 0;
  text-align: center;
  font-size: 30px;
  color: #fff;
  background: #000;
}
.menu {
  position: relative;
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
  

  .foot{
    height: 240px !important;
    background: #f5f5f5;
    justify-content: space-between;
  }
  .foot img{
      height: 50px;
      padding: 100px;
    }
    .foot a{
      display: inline-block;
      width: 100%;
      text-align: left;
      font-size: 16px;
    }
    .foot .linkBox{
      width: 500px;
      padding: 50px 100px;
    }
    .foot .el-button{
      margin: 0
    }
    .foot1{
      background: #ee7800 !important;
      justify-content: space-between;
    }
    .foot1 p{
      padding: 0 20px;
      font-size: 16px;
      line-height: 47px;
    }
    .foot1 .linkBox{
      padding: 0 80px;
    }
    .foot1 a{
      font-size: 16px;
      color: #fff;
    }
</style>
