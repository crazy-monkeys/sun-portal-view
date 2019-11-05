<template>
  <el-container class="sigleItem" direction="vertical">
    <Breadcrumb :breadcrumbList='breadcrumbList' />
    <div class="desc">
      <img src="../../../static/reg.jpeg" alt="图片">
    </div>
    <el-form :disabled="submitLoading" size="small" class="form" ref="form" :model="form" label-width="80px" label-position="top">
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

      <h2>Product Details</h2>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="Serial number">
            <el-input v-model="form.serialNumber" @blur='getProductInfo'></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Product model">
            <el-input v-model="form.productModel" :readonly="true"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">

        <el-form-item label="Installation date (if applicable)">
            <el-date-picker
              class="datePicker"
              v-model="form.installDate"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>


      <h2>Installation Address</h2>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-form-item label="The installation address is">
            <el-radio-group v-model="shippingAddressRadio">
              <el-radio label="1" value='1'>Same as billing address</el-radio>
              <el-radio label="2" value='2'>Other address (Please fill in below)</el-radio>
              <el-radio label="3" value='3'>Not applicable</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
       <el-col :span="6" v-if="shippingAddressRadio==2">
          <el-form-item label="Country" >
            <el-select v-model="form.countryCode" placeholder="请选择" clearable filterable>
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6" v-if="shippingAddressRadio==2">
          <el-form-item label="City/District">
            <el-input v-model="form.cityName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" v-if="shippingAddressRadio==2">
          <el-form-item label="State/Province">
            <el-input v-model="form.stateName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" v-if="shippingAddressRadio==2">
          <el-form-item label="Post code">
            <el-input v-model="form.postCode"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" v-if="shippingAddressRadio==2">
          <el-form-item label="Address Line 1">
            <el-input v-model="form.addressLine1"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" v-if="shippingAddressRadio==2">
          <el-form-item label="Address Line 2">
            <el-input v-model="form.addressLine2"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <h2>Warranty type to purchase</h2>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="Warranty type">
            <el-select v-model="form.warrantyType" placeholder="请选择" clearable filterable @change="getAmount">
              <el-option
                v-for="item in warrantyTypes"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Purchase order (if applicable)">
            <el-input v-model="form.purchaseOrder"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <h2>The total amount you need to pay is (GST excluded):</h2>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="Total amount (excl. GST)">
            <el-input v-model="form.amount" :readonly="true"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

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
  name: "SigleItem",
  components:{
    Breadcrumb
  },
  data() {
    return {
      submitLoading: false,
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
          path:'/warranty/extension/sigleItem',
          name:'Sigle Item'
        }
      ],
      fileList:[],
      productId:'',
      form: {
        country:'',
        businessPartner:'',
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
    };
  },
  methods: {
    getAmount(){
      if(this.form.warrantyType){
        var data ={
          productId:this.product.id,
          productModel:this.product.productModelValue,
          deliveryDate:this.product.deliveryDate,
          warrantyType:this.form.warrantyType,
        }
        getAmount(data).then(res=>{
          if(res.data.code==1){
            this.form.amount  = res.data.data
            this.form.products = [{
              productId:this.product.id,
              productModel:this.product.productModelValue,
              warrantyType:this.form.warrantyType,
              purchaseOrder:this.form.purchaseOrder,
              amount:this.form.amount,

            }]
          }
        })
      }else{

      }
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
    getProductInfo(){
      if(this.form.serialNumber){
        productInfo({serialNumber:this.form.serialNumber}).then(res=>{
          if(res.data.code==1){
            this.product = res.data.data
            this.form.productModel = res.data.data.productModelValue
            this.form.businessPartner = res.data.data.businessPartner
          }
        }).catch(err=>{
            this.form.productModel = ''

          console.log(err)
        })
      }else{
            this.form.productModel = ''

      }
    },
    onSubmit() {
      this.submitLoading = true
      if(this.shippingAddressRadio==1){
        this.form.shippingAddress = [this.form.address.countryCode,this.form.address.cityName,this.form.address.stateName,this.form.address.postCode,this.form.address.addressLine1,this.form.address.addressLine2].join(',')

      }else if(this.shippingAddressRadio==2){
        this.form.shippingAddress = [this.form.countryCode,this.form.cityName,this.form.stateName,this.form.postCode,this.form.addressLine1,this.form.addressLine2].join(',')
      }else{
        this.form.shippingAddress=''
      }
      this.form.country = Bus.dropValue
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
                  if(data[i].constructor==Array){
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
          this.$message.success('提交成功，单据号：'+res.data.data+ '将在3秒后跳转首页')
          const timer = setTimeout(() => {
            this.$router.push({
              name:'Home'
            })
            clearTimeout(timer);
          }, 3*1000);
        }
      }).catch(err=>{
        this.submitLoading = false
      })
    },
    reset(){
      this.form = {
        businessPartner:'',
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
    handleRemove(file, fileList) {
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
.sigleItem {
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
