<template>
  <el-container class="claim" direction="vertical">
    <Breadcrumb :breadcrumbList='breadcrumbList' />
    <div class="desc">
      <img src="../../../static/reg.jpeg" alt="图片">
    </div>
    <div class="link">
      <h2>
        <el-checkbox v-model="checked">Check here to indicate that</el-checkbox>
      </h2>
      <el-button type="primary" size="small" @click="go" :disabled="!checked">
        Go to Warranty Claim Page
      </el-button>
      <el-button type="primary" size="small" @click="reset">
        Reset
      </el-button>
      
    </div>
  </el-container>
</template>

<script>
import Breadcrumb from '../coms/Breadcrumb'
export default {
  name: "Claim",
  components:{
    Breadcrumb
  },
  data() {
    return {
      checked:false,
      breadcrumbList:[
        {
          path:'/warranty/extension',
          name:'Warranty'
        },
        {
          path:'/warranty/claim',
          name:'Online Warranty Claim'
        }
      ]
    };
  },
  methods: {
    reset(){
      this.checked = false
    },
    go(){
      this.$router.push({
        name:'ClaimForm'
      })
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' >
.claim {
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
  }
}

</style>
