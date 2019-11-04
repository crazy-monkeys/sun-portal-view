<template>
  <el-container class="multipleItems" direction="vertical">
    <Breadcrumb :breadcrumbList='breadcrumbList' />
    <div class="desc">
      <img src="../../../static/reg.jpeg" alt="图片">
    </div>
    <el-form size="small" class="form" ref="form" :model="form" label-width="80px" label-position="top">
      <h2>Billing Details</h2>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="Type">
            <el-select v-model="form.billType" placeholder="请选择" clearable filterable>
              <el-option
                v-for="item in billTypes"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="ABN" >
            <el-input v-model="form.abn" :disabled="form.billType=='Individual' ? true :false"></el-input>
          </el-form-item>
        </el-col>
        
        <el-col :span="6">
          <el-form-item label="Business Name">
            <el-input v-model="form.businessName" :disabled="form.billType=='Individual' ? true :false"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Country">
            <el-select v-model="form.address.countryCode" placeholder="请选择" clearable filterable>
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="City/District">
            <el-input v-model="form.address.cityName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="State/Province">
            <el-input v-model="form.address.stateName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Post code">
            <el-input v-model="form.address.postCode"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Address Line 1">
            <el-input v-model="form.address.addressLine1"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Address Line 2">
            <el-input v-model="form.address.addressLine2"></el-input>
          </el-form-item>
        </el-col>
      </el-row>


      <h2>Contact Details</h2>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="First name">
            <el-input v-model="form.firstName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Last name">
            <el-input v-model="form.lastName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Email">
            <el-input v-model="form.email" prefix-icon="el-icon-message">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Confirm your Email">
            <el-input v-model="form.sendEmail" prefix-icon="el-icon-message">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Contact Number">
            <el-input v-model="form.contactNumber"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <h2>Product list</h2>
      <el-row :gutter="20">
        
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="Purchase Order">
            <el-input v-model="form.purchaseOrder"></el-input>
          </el-form-item>
        </el-col>
        
        <el-table
          :data="form.products"
          style="width: 100%"
          @row-click='rowClick'
          show-summary>
          <el-table-column
            prop=""
            label="Serial number"
            width="">
            <template slot-scope="scope">
              <el-form-item label="">
                <el-input v-model="scope.row.serialNumber" size="small"  @blur="getProductInfo(scope.$index)"></el-input>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column
            prop=""
            label="Product model"
            width="">
            <template slot-scope="scope">
              <el-form-item label="">
                <el-input v-model="scope.row.productModel" size="small" :readonly="true"></el-input>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column
            prop=""
            label="Warranty type">
            <template slot-scope="scope">
              <el-form-item label="">
                <el-select v-model="scope.row.warrantyType" placeholder="请选择" clearable filterable @change="getAmount(scope.$index)">
                  <el-option
                    v-for="item in warrantyTypes"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column
            prop="amount"
            label="Amount">
            <!-- <template slot-scope="scope">
              <el-form-item label="">
                <el-input v-model="scope.row.amount" size="small" :readonly="true"></el-input>
              </el-form-item>
            </template> -->
          </el-table-column>
          <el-table-column
            prop=""
            label="Amount">
            <template slot="header" slot-scope="scope">
                <el-button size="small" type='text' @click="addRow">添加</el-button>
           </template>
            <template slot-scope="scope">
               <el-button
                size="small"
                type="text"
                @click="delRow(scope.$index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-row>

      <!-- <h2>The total amount you need to pay is (GST excluded):</h2>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="Total amount (excl. GST)">
            <el-input v-model="form.amount" :readonly="true"></el-input>
          </el-form-item>
        </el-col>
      </el-row> -->

      <el-row :gutter="20">
        <el-col :span="24">
          <el-form-item label=" ">
            <el-checkbox v-model="form.checked">I have read and agree to Sungrow's warranty terms.</el-checkbox>
          </el-form-item>
        </el-col>
      </el-row>



      
      <el-form-item class="sub">
        <el-button type="primary" @click="onSubmit">Submit</el-button>
        <el-button @click="reset">reset</el-button>
      </el-form-item>
    </el-form>
  </el-container>
</template>

<script>
import Breadcrumb from '../coms/Breadcrumb'
import { productInfo,submitSingle,getAmount } from '@/api/registration'
import Bus from "../../bus/bus.js";
export default {
  name: "MultipleItems",
  components:{
    Breadcrumb
  },
  data() {
    return {
      shippingAddressRadio:"",
      billTypes:[{
        value: 'Business',
        label: 'Business'
      },{
        value: 'Individual',
        label: 'Individual'
      }],
      warrantyTypes:[{
        value: 'W5YP',
        label: 'Additional 5 Years Parts Warranty'
      }, {
        value: 'W5YS',
        label: 'Additional 5 Years Standard Warranty'
      }],
      options: [{

        value: 'AU',
        label: 'Australia'
      }, {
        value: '2',
        label: '选项2'
      }],
      breadcrumbList:[
        {
          path:'/warranty/extension',
          name:'Warranty'
        },
        {
          path:'/warranty/extension',
          name:'Extension'
        },
        {
          path:'/warranty/extension/multipleItems',
          name:'Multiple Items'
        }
      ],
      fileList:[],
      productId:'',
      form: {
        country:'',
        address:{
          countryCode:'',
          cityName:'',
          stateName:'',
          postCode:'',
          addressLine1:'',
          addressLine2:'',
        },

        billType:'',
        abn:'',
        businessName:'',


        firstName: '',
        lastName: '',
        email: '',
        sendEmail:'',
        contactNumber: '',

        products:[

        ],
        purchaseOrder:'',
        amount:'',
        checked:false,
        type:3
      },
      rowData:{},
    };
  },
  methods: {
    rowClick(row){
      this.rowData = row
    },
    addRow(){
      this.form.products.push(
        {
          serialNumber:'',
          productId:'',
          productModel:'',
          warrantyType:'',
          amount:'',
          deliveryDate:'',
          businessPartner:''
        }
      )
    },
    delRow(index){
      this.form.products.splice(index,1)
    },
    getAmount(index){
      var data ={
        productId:this.rowData.productId,
        productModel:this.rowData.productModelValue,
        deliveryDate:this.rowData.deliveryDate,
        warrantyType:this.form.products[index].warrantyType
      }
      getAmount(data).then(res=>{
        if(res.data.code==1){
          this.form.products[index].amount  = res.data.data
        }
      })
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    getProductInfo(index){
      if(this.form.products[index].serialNumber){
        productInfo({serialNumber:this.form.products[index].serialNumber}).then(res=>{
          if(res.data.code==1){
            this.form.products[index].productId = res.data.data.id
            this.form.products[index].productModel = res.data.data.productModelValue
            this.form.products[index].deliveryDate = res.data.data.deliveryDate
            this.form.products[index].businessPartner = res.data.data.businessPartner
          }
        }).catch(err=>{
          this.form.products[index].productModel=''
          console.log(err)
        })
      }else{
        this.form.products[index].productModel=''
      }
    },
    onSubmit() {
      // this.form.shippingAddress = [this.form.countryCode,this.form.cityName,this.form.stateName,this.form.postCode,this.form.addressLine1,this.form.addressLine2].join(',')
      this.submitLoading = true
      var params = new FormData()
      var data = this.form
      for (let i in data) {
        // // console.log(i,data[i])
        if(typeof(data[i]) == 'object'){
          for(let j in data[i]){
            // console.log(data[i][j])
            if(typeof(data[i][j]) == 'object'){
              for(let x in data[i][j]){
                // console.log(data[i][j][x])
                if(data[i][j][x] || data[i][j][x]===0){
                  if(data[i].constructor===Array){
                    params.append(i+'['+j+']'+'.'+x,data[i][j][x])
                  }else{
                    params.append(i+'.'+j+'.'+x,data[i][j][x])
                  }
                }
              }
            }else{
                if(data[i][j] || data[i][j]===0){
                    params.append(i+'.'+j,data[i][j])
                }
            }
          }
        }else{
          if(data[i] || data[i]===0){
            params.append(i,data[i])
          }
        }
      }
      submitSingle(params).then(res=>{
        if(res.data.code==1){
          this.submitLoading = false
          this.$message.success('提交成功，3秒后跳转首页')
          setTimeout(() => {
            this.$router.push({
              name:'Home'
            })
          }, 3*1000);
        }
      }).catch(err=>{
        this.submitLoading = false
      })
    },
    reset(){
      this.form = {
        
        address:{
          countryCode:'',
          cityName:'',
          stateName:'',
          postCode:'',
          addressLine1:'',
          addressLine2:'',
        },

        billType:'',
        abn:'',
        businessName:'',


        firstName: '',
        lastName: '',
        email: '',
        sendEmail:'',
        contactNumber: '',




        serialNumber: '',
        productModel: '',
        installDate:'',



        shippingAddress:'',

        countryCode:'',
        cityName:'',
        stateName:'',
        postCode:'',
        addressLine1:'',
        addressLine2:'',


        warrantyType:'',
        purchaseOrder:'',
        amount:'',
        checked:false,
        type:3
      }
    },
    changeFile(val){
      console.log(val)
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {5555
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  },
  mounted(){
    Bus.$on('dropValue',(res)=>{
      this.form.country = res
    })
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' >
.multipleItems {
  height: 100%;
  .el-table{
    .el-form-item{
      margin-bottom: 0;
    }
  }
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
  .form{
    padding: 20px;
    h2{
      padding: 10px 0;
      color: #FF7F00
    }
    .datePicker,.el-select{
      width: 100% ;
    }
    .el-upload{
      width: 100%;
    }
    .upload-demo{
      >div{
        width: 100%;
      }
      ul{
        box-sizing: border-box;
        // padding: 0 1px;
        width: 100%;
        position: absolute;
        top: 0;
        &:focus{
          border: none;
          outline:none !important;
        }
        li{
          // box-sizing: border-box;
          display: flex;
          align-items: center;
          padding: 1px;
          line-height: 32px;
          height: 32px;
          margin-top: 0;
          .el-icon-close{
            top: 9px;
          }
        }
        li:hover{
          background-color: transparent;
        }
        li:focus{
          border: none;
          outline:none !important;
        }
      }
    }
    .sub{
      margin-top: 20px;
    }
  }
}

</style>
