<template>
  <el-container class="extension" direction="vertical">
    <Breadcrumb :breadcrumbList='breadcrumbList' />
    <div class="desc">
      <el-table
        :data="tableData"
        style="width: 100%;margin:20px 0;"
        >
        <el-table-column
          prop="model"
          label="Model"
          header-align='center'
          align='enter'
          width="">
        </el-table-column>
        <el-table-column
          prop=""
          header-align='center'
          align='enter'
          label="Add 5 Years Parts Warranty"
          width="">
          <el-table-column
            prop="partEarlyBirdDiscount"
          header-align='center'
          align='enter'
              :formatter='formatter'

            label="Early-bird Discount"
            width="">
          </el-table-column>
          <el-table-column
            prop="partStandard"
              :formatter='formatter'
          header-align='center'
          align='enter'
            label="Standard"
            width="">
          </el-table-column>
        </el-table-column>
        <el-table-column
          prop="address"
          header-align='center'
          align='enter'
          label="Add 5 Years Standard Warranty">
            <el-table-column
              prop="standardEarlyBirdDiscount"
          header-align='center'
          align='enter'
              label="Early-bird Discount"
              :formatter='formatter'
              width="">
            </el-table-column>
            <el-table-column
              prop="standardStandard"
          align='enter'
              :formatter='formatter'

          header-align='center'
              label="Standard"
              width="">
            </el-table-column>
        </el-table-column>
      </el-table>
      <p style="text-align:right;font-size:16px">Prices are effective from 31 July 2019</p>
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
import {priceTab} from "@/api/registration.js"
export default {
  name: "Extension",
  components:{
    Breadcrumb
  },
  data() {
    return {
      tableData:[],
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
  }
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
