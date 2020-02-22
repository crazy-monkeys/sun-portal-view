<template>
  <el-container class="registration" direction="vertical">
    <Breadcrumb :breadcrumbList='breadcrumbList' />
    <!-- <div class="desc">
      <img src="../../../static/reg.jpeg" alt="图片">
    </div> -->
    <el-form :disabled="submitLoading" :rules='rules' size="small" class="form" ref="form" :model="form" label-width="80px" label-position="top">
      <h2>{{ $t('registration.contactDetails.title') }}</h2>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item :label="$t('registration.contactDetails.firstName')" prop='contacts.contactFirstName'>
            <el-input v-model="form.contacts.contactFirstName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label="$t('registration.contactDetails.lastName')">
            <el-input v-model="form.contacts.contactLastName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label="$t('registration.contactDetails.email')" prop='contacts.contactEmail' >
            <el-input  v-model="form.contacts.contactEmail" prefix-icon="el-icon-message" placeholder="separated by ';'">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label="$t('registration.contactDetails.contactNumber')">
            <el-input v-model="form.contacts.contactNumber"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <h2>{{ $t('registration.productDetails.title') }}</h2>
      <el-row :gutter="20">
        <el-col :span="6" v-loading='pNumLoding'>
          <el-form-item :label="$t('registration.productDetails.serialNumber')" prop='productNumber'>
            <el-tooltip class="tooltip" effect="dark" :content="pNumTooltip" placement="top-start">
              <el-input v-model="form.productNumber" @change='getProductInfo'></el-input>
            </el-tooltip>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label="$t('registration.productDetails.productModel')">
            <el-input v-model="form.productModel" :readonly="true"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <h2>{{ $t('registration.installationDetails.title') }}</h2>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item :label="$t('registration.installationDetails.addressLine1')">
            <el-input v-model="form.address.addressLine1"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label="$t('registration.installationDetails.addressLine2')">
            <el-input v-model="form.address.addressLine2"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label="$t('registration.installationDetails.cityDistrict')" prop='address.cityName'>
            <el-input v-model="form.address.cityName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label="$t('registration.installationDetails.stateProvince')" prop='address.stateName'>
            <el-input v-model="form.address.stateName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label="$t('registration.installationDetails.postCode')"  prop='address.postCode'>
            <el-input v-model="form.address.postCode"></el-input>
          </el-form-item>
        </el-col>
        
        <el-col :span="6">
          <el-form-item :label="$t('registration.installationDetails.installer')">
            <el-input v-model="form.installInstaller"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label="$t('registration.installationDetails.installDate')" prop='installDate'>
            <el-date-picker
              :picker-options="pickerOptions"
              class="datePicker"
              v-model="form.installDate"
              type="date"
              value-format="yyyy-MM-dd"
              >
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="6" v-if="form.country === 'AU'">
          <el-form-item :label="$t('registration.installationDetails.installCec')">
            <el-input v-model="form.installCec"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" v-if="form.country === 'AU'">
          <el-form-item :label="$t('registration.installationDetails.invoiceUpload')">
            <el-tooltip class="tooltip" effect="dark" :content="ivcTooltip" placement="top-start">
              <el-upload
                class="upload-demo"
                style="width:100%"
                ref="upload"
                :limit="1"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-change='handleChange1'
                :on-preview="handlePreview1"
                :on-remove="handleRemove1"
                :file-list="fileList1"
                :auto-upload="false">
                  <el-input style="width:100%" class="fileBtn" slot="trigger" size="small" type="primary">{{ $t('registration.installationDetails.invoiceUploadBtn') }}</el-input>
              </el-upload>
            </el-tooltip>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label="$t('registration.installationDetails.cecFileUpload')">
            <el-tooltip class="tooltip" effect="dark" :content="cecTooltip" placement="top-start">
              <el-upload
                class="upload-demo"
                style="width:100%"
                ref="upload"
                :limit="1"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-change='handleChange'
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                :auto-upload="false">
                  <el-input style="width:100%" class="fileBtn" slot="trigger" size="small" type="primary">{{ $t('registration.installationDetails.cecFileUploadBtn') }}</el-input>
              </el-upload>
            </el-tooltip>
          </el-form-item>
        </el-col>
      </el-row>
      <h2>{{ $t('registration.Suggestions.title') }}</h2>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item :label="$t('registration.Suggestions.suggestionsContext')">
            <el-input type="textarea" v-model="form.suggestions" resize="none" :rows="4"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label=" ">
            <el-checkbox v-model="form.checked">
              <i18n path="registration.toTerm" tag="label" for="registration.tos">
                <el-button type="text" @click="openTerm">{{ $t('registration.tos') }}</el-button> 
              </i18n>
            </el-checkbox>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item class="sub">
        <el-button type="primary" @click="onSubmit('form')" :disabled="!form.checked" :loading='submitLoading'>{{ $t('registration.submit') }}</el-button>
        <el-button @click="reset">{{ $t('registration.reset') }}</el-button>
      </el-form-item>
    </el-form>
  </el-container>
</template>

<script>
import Bus from "../../bus/bus.js";

import Breadcrumb from '../coms/Breadcrumb'
import { productInfo,submitReg } from '@/api/registration'

export default {
  name: "Registration",
  components:{
    Breadcrumb
  },
  data() {
    const formMod = {
        country:Bus.dropValue,
        invoiceFile:'',
        cecFile:'',
        contacts:{
          contactFirstName: '',
          contactLastName: '',
          contactEmail: '',
          contactNumber: '',
        },
        address:{
          contryCode:'',
          cityName:'',
          stateName:'',
          addressLine1:'',
          addressLine2:'',
          postCode:'',
        },
        productNumber:'',
        productModel:'',
        products:[],
        businessPartner:'',
        installInstaller:'',
        installDate:'',
        installCec:'',
        suggestions:'',
        checked:false,
        type:1,
        a:'',
        b:'',
      };
      let billType = (rule, value, callback) => {
      if (!value) {
        return callback(
          new Error(
            this.$t(
              "claimForm.claimantContactDetails.formTest.billType"
            )
          )
        );
      } else {
        return callback();
      }
    };
    let contactEmail = (rule, value, callback) => {
      if (!value) {
        return callback(
          new Error(
            this.$t(
              "claimForm.claimantContactDetails.formTest.contactEmail"
            )
          )
        );
      } else {
        return callback();
      }
    };
    let person = (rule, value, callback) => {
      if (!value) {
        return callback(
          new Error(
            this.$t(
              "claimForm.claimantContactDetails.formTest.person"
            )
          )
        );
      } else {
        return callback();
      }
    };
    let contactNumber = (rule, value, callback) => {
      if (!value) {
        return callback(
          new Error(
            this.$t(
              "claimForm.claimantContactDetails.formTest.contactNumber"
            )
          )
        );
      } else {
        return callback();
      }
    };
    let cityName = (rule, value, callback) => {
      if (!value) {
        return callback(
          new Error(
            this.$t(
              "claimForm.claimantContactDetails.formTest.cityName"
            )
          )
        );
      } else {
        return callback();
      }
    };
    let addressLine1 = (rule, value, callback) => {
      if (!value) {
        return callback(
          new Error(
            this.$t(
              "claimForm.claimantContactDetails.formTest.addressLine1"
            )
          )
        );
      } else {
        return callback();
      }
    };
    let addressLine2 = (rule, value, callback) => {
      if (!value) {
        return callback(
          new Error(
            this.$t(
              "claimForm.claimantContactDetails.formTest.addressLine2"
            )
          )
        );
      } else {
        return callback();
      }
    };
    let stateName = (rule, value, callback) => {
      if (!value) {
        return callback(
          new Error(
            this.$t(
              "claimForm.claimantContactDetails.formTest.stateName"
            )
          )
        );
      } else {
        return callback();
      }
    };
    let postCode = (rule, value, callback) => {
      if (!value) {
        return callback(
          new Error(
            this.$t(
              "claimForm.claimantContactDetails.formTest.postCode"
            )
          )
        );
      } else {
        return callback();
      }
    };
    let installDate = (rule, value, callback) => {
      if (!value) {
        return callback(
          new Error(
            this.$t(
              "claimForm.claimantContactDetails.formTest.installDate"
            )
          )
        );
      } else {
        return callback();
      }
    };
    let productNumber = (rule, value, callback) => {
      if (!value) {
        return callback(
          new Error(
            this.$t(
              "claimForm.claimantContactDetails.formTest.productNumber"
            )
          )
        );
      } else {
        return callback();
      }
    };
    let fault = (rule, value, callback) => {
      if (!value) {
        return callback(
          new Error(
            this.$t(
              "claimForm.claimantContactDetails.formTest.fault"
            )
          )
        );
      } else {
        return callback();
      }
    };
    let description = (rule, value, callback) => {
      if (!value) {
        return callback(
          new Error(
            this.$t(
              "claimForm.claimantContactDetails.formTest.description"
            )
          )
        );
      } else {
        return callback();
      }
    };
    let shippingAddress = (rule, value, callback) => {
      if (!value) {
        return callback(
          new Error(
            this.$t(
              "claimForm.claimantContactDetails.formTest.shippingAddress"
            )
          )
        );
      } else {
        return callback();
      }
    };
    let contactFirstName = (rule, value, callback) => {
      if (!value) {
        return callback(
          new Error(
            this.$t(
              "claimForm.claimantContactDetails.formTest.contactFirstName"
            )
          )
        );
      } else {
        return callback();
      }
    };
    return {
      rules: {
          "contact.billType": [
            {required: true,validator: billType, trigger: 'blur'}
          ],
          "contact.contactEmail": [
            {required: true,validator: contactEmail, trigger: 'blur'}
          ],
          "contact.person": [
            {required: true,validator: person, trigger: 'blur'}
          ],
          "contact.contactNumber": [
            {required: true,validator: contactNumber, trigger: 'blur'}
          ],
          "contact.address.cityName": [
            {required: true,validator: cityName, trigger: 'blur'}
          ],
          "contact.address.addressLine1": [
            {required: true,validator: addressLine1, trigger: 'blur'}
          ],
          "contact.address.addressLine2": [
            {required: true,validator: addressLine2, trigger: 'blur'}
          ],
          "contact.address.stateName": [
                        {required: true,validator: stateName, trigger: 'blur'}

          ],
          "contact.address.postCode": [
                        {required: true,validator: postCode, trigger: 'blur'}

          ],

          "endUser.contactEmail": [
                        {required: true,validator: contactEmail, trigger: 'blur'}

          ],
          "endUser.person": [
                        {required: true,validator: person, trigger: 'blur'}

          ],
          
          "endUser.contactNumber": [
                        {required: true,validator: contactNumber, trigger: 'blur'}

          ],
          "endUser.address.cityName": [
                        {required: true,validator: cityName, trigger: 'blur'}

          ],
          "endUser.address.addressLine1": [
                        {required: true,validator: addressLine1, trigger: 'blur'}

          ],
          "endUser.address.addressLine2": [
                        {required: true,validator: addressLine2, trigger: 'blur'}

          ],
          "endUser.address.stateName": [
                        {required: true,validator: stateName, trigger: 'blur'}

          ],
          "endUser.address.postCode": [
                        {required: true,validator: postCode, trigger: 'blur'}

          ],
          'installDate': [
                        {required: true,validator: installDate, trigger: 'blur'}

          ],
          'productNumber': [
                        {required: true,validator: productNumber, trigger: 'blur'}

          ],
          "serviceCall.fault": [
                        {required: true,validator: fault, trigger: 'blur'}

          ],
          "serviceCall.description": [
                        {required: true,validator: description, trigger: 'blur'}

          ],
          "serviceCall.shippingAddress": [
                        {required: true,validator: shippingAddress, trigger: 'blur'}

          ],
          'contacts.contactFirstName':[
                        {required: true,validator: contactFirstName, trigger: 'blur'}
        ],
      },
      Bus,
      pNumTooltip: this.$t('registration.pNumTooltip'),
      ivcTooltip: this.$t('registration.ivcTooltip'),
      cecTooltip: this.$t('registration.cecTooltip'),
      pickerOptions:{
        disabledDate: (time) => {
          return time.getTime()>Date.now()
        }
      },
      
      pNumLoding:false,
      submitLoading:false,
      options: [{
          value: 'AU',
          label: 'Australia'
        }, {
          value: '2',
          label: '选项2'
        }],
      
      fileList:[],
      fileList1:[],
      formMod,
      form: {...formMod}
    };
  },
  methods: {
    openTerm(){
      window.open(Bus.dropValue =='BR' ?'../../../sun-portal/v/static/01_Politica de Garantia_Rev.3.pdf':'../../../sun-portal/v/static/Sungrow Manufacturer Warranty.pdf');
    },
    getProductInfo(){
      if(this.form.productNumber){
        this.pNumLoding =true;
        productInfo({serialNumber:this.form.productNumber}).then(res=>{
          if(res.data.code==1){
            this.pNumLoding=false
            this.form.productModel = res.data.data.productModelValue
            // this.form.productId = [res.data.data.id]
            this.form.products = [{
              serialNumber:this.form.productNumber,
              productId:res.data.data.id,
              productModel:res.data.data.productModelValue,
              dispatchedDate:res.data.data.dispatchedDate,
            }]
            this.form.businessPartner = res.data.data.businessPartner
            console.log(this.form.products)
          }else{
            this.pNumLoding=false
          }
        }).catch(err=>{
          this.form.productModel = ''
          this.pNumLoding=false
          console.log(err)
        })
      }else{
        this.form.productModel = ''
      }
    },
    onSubmit(form){
      this.$formTest.submitForm(this.$refs[form],this.submit)
    },
    submit() {
      this.submitLoading = true
      var params = new FormData()
      this.form.country = Bus.dropValue
      var data = this.form
      // console.log(data);
      for (let i in data) {
        // console.log(i,data[i])
        if((i === 'invoiceFile'&& data[i]) || (i === 'cecFile' && data[i])) {
          params.append(i, data[i]);
        } else if(typeof(data[i]) == 'object'){
          for(let j in data[i]){
            // console.log(data[i][j])
            if(typeof(data[i][j]) == 'object'){
              for(let x in data[i][j]){
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
      // for(let i in this.form){
      //   console.log(i,this.form[i])
      //   formData.append(i,this.form[i])
      // }
      submitReg(params).then(res=>{
        if(res.data.code==1){
          this.submitLoading = false
          this.$message.success(this.$t('registration.submitSuccessMsg', [res.data.data]))
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
      this.form={...this.formMod}
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
    },
    handleChange(file,fileList){
      this.fileList = fileList.slice(-1);
      this.form.cecFile = this.fileList[0].raw;
    },
    handleRemove1(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview1(file) {
      console.log(file);
    },
    handleChange1(file,fileList){
      // console.log(file,fileList)
      this.fileList1 = fileList.slice(-1);
      this.form.invoiceFile = this.fileList1[0].raw

    }
  },
  mounted(){
    Bus.$on('dropValue',(res)=>{
      this.form.country = res
    })
  },
  computed:{
    breadcrumbList(){
      return [
        {
          path:'/warranty/registration',
          name:this.$t('registration.breadcrumb.warranty')
        },
        {
          path:'/warranty/registration',
          name:this.$t('registration.breadcrumb.registration') 
        }
      ]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' >
.registration {
  height: 100%;
  .desc {
    text-align: center;
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
