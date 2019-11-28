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
            <el-menu-item index="/home">{{ $t('index.menu.home') }}</el-menu-item>
            <el-submenu index="2">
                <template slot="title">{{ $t('index.menu.warranty') }}</template>
                <el-menu-item index="/warranty/claim/form">{{ $t('index.menu.claim') }}</el-menu-item>
                <!-- <el-menu-item index="/warranty/procedure">Warranty Claim Procedure</el-menu-item> -->
                <el-menu-item index="/warranty/registration" :disabled="dropValue!='AU'? true:false">{{ $t('index.menu.registration') }}</el-menu-item>
                <el-menu-item index="/warranty/extension" :disabled="dropValue!='AU'? true:false">{{ $t('index.menu.extension') }}</el-menu-item>
            </el-submenu>
            <div class="drop">
              <!-- <el-dropdown @command="handleCommand" trigger='click'>
                <span class="el-dropdown-link">
                  {{ drop }}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item v-for='item in options' :command="item" :key='item.code'>{{item.name}}</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown> -->


              <el-select class="sel" v-model="dropValue" filterable  clearable size="small"  placeholder="country" @change='changeCountry'>
                <el-option
                  v-for="item in options"
                  :key="item.code"
                  :label="item.name"
                  :value="item.code">
                </el-option>
              </el-select>

              <el-select class="sel" v-model="lang" filterable  clearable size="small"  placeholder="language" @change='changeLang'>
                <el-option
                  v-for="item in langs"
                  :key="item.code"
                  :label="item.name"
                  :value="item.code">
                </el-option>
              </el-select>
            </div>

            
            
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
                <a href="https://en.sungrowpower.com/en/company" >{{ $t('index.footer.company') }}</a>
              </el-col>
              <el-col :span="8">
                <a href="https://en.sungrowpower.com/en/products">{{ $t('index.footer.products') }}</a>
              </el-col><el-col :span="8">
                <a href="https://en.sungrowpower.com/en/news">{{ $t('index.footer.news') }}</a>

              </el-col>
            </el-row>
            <el-row :gutter="0">
              <el-col :span="8">
                <a href="https://en.sungrowpower.com/en/career">{{ $t('index.footer.career') }}</a>
                
              </el-col>
              <el-col :span="8">
                <a href="https://en.sungrowpower.com/en/mission">{{ $t('index.footer.mission') }}</a>

                
              </el-col><el-col :span="8">
                <a href="https://en.sungrowpower.com/en/how-to-buy">{{ $t('index.footer.howTobBuy') }}</a>

               
              </el-col>
            </el-row>
            <el-row :gutter="0">
              <el-col :span="8">
                <a href="https://en.sungrowpower.com/en/events">{{ $t('index.footer.events') }}</a>

              
              </el-col>
              <el-col :span="8">
                <a href="https://en.sungrowpower.com/en/downloads">{{ $t('index.footer.downloads') }}</a>
               
              </el-col>
              <el-col :span="8">
                <a href="https://en.sungrowpower.com/en/social-responsibility">{{ $t('index.footer.socialResponsibility') }}</a>

              
              </el-col>
            </el-row>
            <el-row :gutter="0">
              <el-col :span="8">
                <a href="https://en.sungrowpower.com/en/service">{{ $t('index.footer.service') }}</a>

              
              </el-col>
              <el-col :span="8">
                <a href="https://en.sungrowpower.com/en/webinars">{{ $t('index.footer.webinars') }}</a>
               
              </el-col>
            </el-row>
        
          </div>
          

      </el-container>
      <el-container  class="foot1">
          <p>© 2019 SUNGROW. All Rights Reserved.</p>
          <div class="linkBox">
            <el-row :gutter="100">
              <el-col :span="8">
                <a href="">{{ $t('index.footer.contactUs') }}</a>
              </el-col>
              <el-col :span="8">
                <a href="">{{ $t('index.footer.legalNotice') }}</a>
              </el-col>
              <el-col :span="8">
                <a href="">{{ $t('index.footer.privacyPolicy') }}</a>
              </el-col>
            </el-row>
          </div>
      </el-container>
    </el-footer>
  </el-container>
</template>

<script>
import Bus from "../../bus/bus.js";
import country from './country.js';
import langs from './lan.js';
import { setLan } from '@/api/registration'


export default {
  name: "Index",
  data() {
    return {
      lang:'en',
      activeIndex2: '/',
      options: country,
      langs:langs,
      // drop: sessionStorage.getItem('lanName') ?  sessionStorage.getItem('lanName'):'Country',
      dropValue:sessionStorage.getItem('lan')?sessionStorage.getItem('lan'):'',
    };
  },
  computed:{
  },
  created(){
    // this.lan()
  },
  methods:{
    handleSelect(key, keyPath) {
        // console.log(key, keyPath);
    },
    lan(){
      var data ={
        lan:this.$i18n.locale ==='BR' ? 'pt-BR' : 'en'
      }
      setLan(data).then((res)=>{
          
        }).catch((err)=>{
          console.log(err)
        })
    },
    changeCountry(val) {
      console.log(val)
      this.dropValue = val
      Bus.dropValue = val
      sessionStorage.setItem('lan',val)
    },
    changeLang(val){
      this.$i18n.locale = val=== 'pt-BR' ? 'pt-BR' : 'en'
      this.lan()
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang='scss'  >

.index {
  height: 100%;
  width: 1120px;
  margin: 0 auto;
}
.drop{
  position: absolute;
  right: 50px;
  height: 60px;
  display: flex;
  align-items: center;
  &:focus{
      outline: none !important;
    }
}
.sel{
    
    border: none ;
    background: transparent;
  .el-input__inner{
    border: none;
    background: transparent;
    color: #ee7800;
    
  }
  }
.el-dropdown{
  /* position: absolute;
  right: 50px;
  height: 60px; */
}
.el-dropdown span{
  /* display: block; */
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
