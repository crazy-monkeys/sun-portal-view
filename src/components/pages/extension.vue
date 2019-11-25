<template>
  <el-container class="extension" direction="vertical">
    <Breadcrumb :breadcrumbList='breadcrumbList' />
    <div class="desc">
      <el-table
        v-if="country=='AU'"
        :data="tableData"
        style="width: 100%;margin:20px 0;">
        <el-table-column
          prop="model"
          :label="$t('extension.table.model')"
          header-align='center'
          align='enter'
          width="">
        </el-table-column>
        <el-table-column
          prop=""
          header-align='center'
          align='enter'
          :label="$t('extension.table.partsWarranty.title')"
          width="">
          <el-table-column
            prop="partEarlyBirdDiscount"
            header-align='center'
            align='enter'
            :formatter='formatter'
            :label="$t('extension.table.partsWarranty.discount')"
            width="">
          </el-table-column>
          <el-table-column
            prop="partStandard"
            :formatter='formatter'
            header-align='center'
            align='enter'
            :label="$t('extension.table.partsWarranty.standard')"
            width="">
          </el-table-column>
        </el-table-column>
        <el-table-column
          prop="address"
          header-align='center'
          align='enter'
          :label="$t('extension.table.standardWarranty.title')">
            <el-table-column
              prop="standardEarlyBirdDiscount"
              header-align='center'
              align='enter'
              :label="$t('extension.table.standardWarranty.discount')"
              :formatter='formatter'
              width="">
            </el-table-column>
            <el-table-column
              prop="standardStandard"
              align='enter'
              :formatter='formatter'
              header-align='center'
              :label="$t('extension.table.standardWarranty.standard')"
              width="">
            </el-table-column>
        </el-table-column>
      </el-table>
      <p style="text-align:right;font-size:16px">{{ $t('extension.table.desc') }}</p>
    </div>
    <div class="link">
      <h2>{{ $t('extension.link.title') }}</h2>
      <ul>
        <li>
          <el-button type="text" @click="sigleBtn">{{ $t('extension.link.singleBtn') }}</el-button>
        </li>
        <li>
          <el-button type="text" @click="multipleBtn">{{ $t('extension.link.multipleBtn') }}</el-button>
        </li>
      </ul>
    </div>
  </el-container>
</template>

<script>
import Breadcrumb from '../coms/Breadcrumb'
import {priceTab} from "@/api/registration.js"
import Bus from "../../bus/bus.js";

export default {
  name: "Extension",
  components:{
    Breadcrumb
  },
  data() {
    return {
      country:Bus.dropValue,
      tableData:[],
      breadcrumbList:[
        {
          path:'/warranty/extension',
          name:this.$t('extension.breadcrumb.warranty')
        },
        {
          path:'/warranty/extension',
          name:this.$t('extension.breadcrumb.extension')
        }
      ]
    };
  },
  created(){
    this.getPriceTab()
  },
  methods: {
    formatter(row, column, cellValue, index){
      console.log(row, column, cellValue, index)
      return '$ ' + cellValue
    },
    getPriceTab(){
      priceTab().then(res=>{
        if(res.data.code==1){
          this.tableData = res.data.data
        }
      })
    },
    sigleBtn(){
      this.$router.push({
        name:'SigleItem'
      })
    },
    multipleBtn(){
      this.$router.push({
        name:'MultipleItems'
      })
    },
  },
  mounted(){
    Bus.$on('dropValue',(res)=>{
      this.country = res
    })
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' >
.extension {
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
