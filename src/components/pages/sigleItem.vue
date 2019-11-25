<template>
  <el-container class="sigleItem" direction="vertical">
    <Breadcrumb :breadcrumbList='breadcrumbList' />
    <div class="desc">
      <img src="../../../static/reg.jpeg" alt="图片">
    </div>
    <el-form :disabled="submitLoading" size="small" class="form" ref="form" :model="form" label-width="80px" label-position="top">
      <h2>{{ $t('singleItem.billingDetails.title') }}</h2>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item :label="$t('singleItem.billingDetails.type')">
            <el-select v-model="form.billType" placeholder="" clearable filterable>
              <el-option
                v-for="item in billTypes"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6" v-if="form.country=='AU'">
          <el-form-item :label="$t('singleItem.billingDetails.ABN')">
            <el-input v-model="form.abn" :disabled="form.billType=='Individual' ? true :false"></el-input>
          </el-form-item>
        </el-col>
        
        <el-col :span="6">
          <el-form-item :label="$t('singleItem.billingDetails.businessName')">
            <el-input v-model="form.businessName" :disabled="form.billType=='Individual' ? true :false"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label="$t('singleItem.billingDetails.addressLine1')">
            <el-input v-model="form.address.addressLine1"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label="$t('singleItem.billingDetails.addressLine2')">
            <el-input v-model="form.address.addressLine2"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label="$t('singleItem.billingDetails.cityDistrict')">
            <el-input v-model="form.address.cityName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label="$t('singleItem.billingDetails.stateProvince')">
            <el-input v-model="form.address.stateName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label="$t('singleItem.billingDetails.postCode')">
            <el-input v-model="form.address.postCode"></el-input>
          </el-form-item>
        </el-col>
        
      </el-row>


      <h2>{{ $t('singleItem.contactDetails.title') }}</h2>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item :label="$t('singleItem.contactDetails.firstName')">
            <el-input v-model="form.firstName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label="$t('singleItem.contactDetails.lastName')">
            <el-input v-model="form.lastName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label="$t('singleItem.contactDetails.email')">
            <el-input v-model="form.email" prefix-icon="el-icon-message">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label="$t('singleItem.contactDetails.confirmYourEmail')">
            <el-input v-model="form.sendEmail" prefix-icon="el-icon-message">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label="$t('singleItem.contactDetails.contactNumber')">
            <el-input v-model="form.contactNumber"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <h2>{{ $t('singleItem.productDetails.title') }}</h2>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item :label="$t('singleItem.productDetails.serialNumber')">
            <el-input v-model="form.serialNumber" @blur='getProductInfo'></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label="$t('singleItem.productDetails.productModel')">
            <el-input v-model="form.productModel" :readonly="true"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">

        <el-form-item :label="$t('singleItem.productDetails.installDate')">
            <el-date-picker
              class="datePicker"
              v-model="form.installDate"
              type="date"
              value-format="yyyy-MM-dd"
              >
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>


      <h2>{{ $t('singleItem.installationAddress.title') }}</h2>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-form-item :label="$t('singleItem.installationAddress.installationAddressType.title')">
            <el-radio-group v-model="shippingAddressRadio">
              <el-radio label="1" value='1'>{{ $t('singleItem.installationAddress.installationAddressType.sameAsBillingAddress') }}</el-radio>
              <el-radio label="2" value='2'>{{ $t('singleItem.installationAddress.installationAddressType.otherAddress') }}</el-radio>
              <el-radio label="3" value='3'>{{ $t('singleItem.installationAddress.installationAddressType.notApplicable') }}</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="6" v-if="shippingAddressRadio==2">
          <el-form-item :label="$t('singleItem.installationAddress.addressLine1')">
            <el-input v-model="form.addressLine1"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" v-if="shippingAddressRadio==2">
          <el-form-item :label="$t('singleItem.installationAddress.addressLine2')">
            <el-input v-model="form.addressLine2"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" v-if="shippingAddressRadio==2">
          <el-form-item :label="$t('singleItem.installationAddress.cityDistrict')">
            <el-input v-model="form.cityName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" v-if="shippingAddressRadio==2">
          <el-form-item :label="$t('singleItem.installationAddress.stateProvinc')">
            <el-input v-model="form.stateName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" v-if="shippingAddressRadio==2">
          <el-form-item :label="$t('singleItem.installationAddress.postCode')">
            <el-input v-model="form.postCode"></el-input>
          </el-form-item>
        </el-col>
        
      </el-row>

      <h2>{{ $t('singleItem.warrantyTypeToPurchase.title') }}</h2>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item :label="$t('singleItem.warrantyTypeToPurchase.warrantyType')">
            <el-select v-model="form.warrantyType" placeholder="" clearable filterable @change="getAmount" @clear="form.amount=''">
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
          <el-form-item :label="$t('singleItem.warrantyTypeToPurchase.purchaseOrder')">
            <el-input v-model="form.purchaseOrder"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <h2>{{ $t('singleItem.totalAmountNeedToPay.title') }}</h2>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item :label="$t('singleItem.totalAmountNeedToPay.totalAmount')">
            <el-input v-model="form.amount" :readonly="true"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="24">
          <el-form-item label=" ">
            <el-checkbox v-model="form.checked">
              <i18n path="singleItem.toTerm" tag="label" for="singleItem.tos">
                <el-button type="text" @click="openTerm">{{ $t('singleItem.tos') }}</el-button> 
              </i18n>
            </el-checkbox>
          </el-form-item>
        </el-col>
      </el-row>



      
      <el-form-item class="sub">
        <el-button type="primary" @click="onSubmit">{{ $t('singleItem.submit') }}</el-button>
        <el-button @click="reset">{{ $t('singleItem.reset') }}</el-button>
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
    const formMod = {
      submitType: 1,
      country:Bus.dropValue,
      businessPartner:'',
      address:{
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
    };
    return {
      submitLoading: false,
      shippingAddressRadio:"",
      billTypes:[{
        value: 'Business',
        label: this.$t('singleItem.billTypes.business')
      },{
        value: 'Individual',
        label: this.$t('singleItem.billTypes.individual')
      }],
      warrantyTypes:[{
        value: 'W5YP',
        label: this.$t('singleItem.warrantyTypes.partsWarranty')
      }, {
        value: 'W5YS',
        label: this.$t('singleItem.warrantyTypes.standard')
      }],
      breadcrumbList:[
        {
          path:'/warranty/extension',
          name:this.$t('singleItem.breadcrumb.warranty')
        },
        {
          path:'/warranty/extension',
          name:this.$t('singleItem.breadcrumb.extension')
        },
        {
          path:'/warranty/extension/sigleItem',
          name:this.$t('singleItem.breadcrumb.singleItem')
        }
      ],
      fileList:[],
      productId:'',
      formMod,
      form: { ...formMod },
    };
  },
  watch:{
    shippingAddressRadio: {
      handler:function (n,o) {
        if(n==1){
          this.form.shippingAddress =(this.form.businessName?this.form.businessName+',' :'' ) +this.form.address.addressLine1 +','+this.form.address.addressLine2+','+this.form.address.cityName+','+this.form.address.stateName+','+this.form.address.postCode 
        }else if(n==2){
          this.form.shippingAddress =(this.form.businessName?this.form.businessName+',' :'' ) +this.form.addressLine1 +','+this.form.addressLine2+','+this.form.cityName+','+this.form.stateName+','+this.form.postCode
        }else{
          this.form.shippingAddress = ''
        }
      }      
    },
    'form.billType':{
      handler:function(n,o){
        if(n=='Individual'){
          this.form.abn=''
          this.form.businessName=''
        }else{
        }
      }
    }
  },
  methods: {
    openTerm(){
      window.open('../../../sun-portal/v/static/Sungrow Manufacturer Warranty.pdf')
    },
    getAmount(){
      if(this.form.warrantyType){
        var data ={
          serialNumber:this.form.serialNumber,
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
          this.$message.success('submitted successfully, Doc No.'+res.data.data+ 'and will jump to home page in 3 seconds')

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
      this.form = {...this.formMod};
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
