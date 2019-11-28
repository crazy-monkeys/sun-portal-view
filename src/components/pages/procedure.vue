<template>
  <el-container class="procedure" direction="vertical">
    <Breadcrumb :breadcrumbList='breadcrumbList' />
    <div class="desc">
      <img src="../../../static/reg.jpeg" alt="图片">
    </div>
    <div class="link">
      <h2>{{ $t('procedure.link.title') }}</h2>
      <ul>
        <li>
          <el-button type="text" @click="sigleBtn">{{ $t('procedure.link.singleBtn') }}</el-button>
        </li>
        <li>
          <el-button type="text" @click="multipleBtn">{{ $t('procedure.link.multipeBtn') }}</el-button>
        </li>
      </ul>
    </div>
  </el-container>
</template>

<script>
import Breadcrumb from '../coms/Breadcrumb'
export default {
  name: "Procedure",
  components:{
    Breadcrumb
  },
  data() {
    return {
    };
  },
  computed:{
    breadcrumbList(){
      return [
        {
          path:'/warranty/extension',
          name:this.$t('procedure.breadcrumb.warranty')
        },
        {
          path:'/warranty/procedure',
          name:this.$t('procedure.breadcrumb.procedure')
        }
      ]
    }
  },
  methods: {
    sigleBtn(){
      window.open('../../../sun-portal/v/static/Sungrow Service Rebate & Service Report_201803.pdf')
    },
    multipleBtn(){
      window.open('../../../sun-portal/v/static/Sungrow Service photos guide v3.0_201803.pdf'  )
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' >
.procedure {
  height: 100%;
  .desc {
    // height: 500px;
    // line-height: 500px;
    text-align: center;
    // background: orange;
    font-size: 30px;
    img{
      width: 100%;
      display: inline-block
    }
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
