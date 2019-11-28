<template>
  <el-container class="claim" direction="vertical">
    <Breadcrumb :breadcrumbList='breadcrumbList' />
    <div class="desc">
      <img src="../../../static/reg.jpeg" alt="图片">
    </div>
    <div class="link">
      <h2>
        <el-checkbox v-model="checked">{{ $t('claim.link.checkbox') }}</el-checkbox>
      </h2>
      <el-button type="primary" size="small" @click="go" :disabled="!checked">
        {{ $t('claim.link.goToWarranty') }}
      </el-button>
      <el-button type="primary" size="small" @click="reset">
        {{ $t('claim.link.reset') }}
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
  computed:{
    breadcrumbList(){
      return  [
        {
          path:'/warranty/extension',
          name:this.$t('claim.breadcrumb.warranty')
        },
        {
          path:'/warranty/claim',
          name:this.$t('claim.breadcrumb.claim')
        }
      ]
    }
  },
  data() {
    return {
      checked:false,
      
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
