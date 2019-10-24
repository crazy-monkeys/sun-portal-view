<template>
  <el-container class="extension" direction="vertical">
    <Breadcrumb :breadcrumbList='breadcrumbList' />
    <div class="desc">
      描述区域
    </div>
    <div class="link">
      <h2>
        Warranty extension online order
      </h2>
      <ul>
        <li>
          <el-button type="text" @click="sigleBtn">Sungrow warranty extension for single item</el-button>
        </li>
        <li>
          <el-button type="text" @click="multipleBtn">Sungrow warranty extension for multiple items</el-button>
        </li>
      </ul>
    </div>
  </el-container>
</template>

<script>
import Breadcrumb from '../coms/Breadcrumb'
export default {
  name: "Extension",
  components:{
    Breadcrumb
  },
  data() {
    return {
      breadcrumbList:[
        {
          path:'/warranty/extension',
          name:'Warranty'
        },
        {
          path:'/warranty/extension',
          name:'Extension'
        }
      ]
    };
  },
  methods: {
    sigleBtn(){
      this.$router.push({
        name:'SigleItem'
      })
    },
    multipleBtn(){},
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' >
.extension {
  height: 100%;
  .desc {
    
    border:1px dashed #FF7F00;
    height: 500px;
    line-height: 500px;
    text-align: center;
    // background: orange;
    font-size: 30px;
    margin-bottom: 20px;
  }
  .link{
    h2{
      color: #FF7F00;
      font-size: 24px;
      height: 36px;
      line-height: 36px;
    }  
    ul{
      li{
        list-style-type: disc;
        margin-left: 20px;
      }
    }
    .el-button{
      display: block;
      margin: 0
    }
  }
}

</style>
