<template>
  <el-container class="registration" direction="vertical">
    <Breadcrumb :breadcrumbList='breadcrumbList' />
    <div class="desc">
      <img src="../../../static/reg.jpeg" alt="图片">
    </div>
    <el-form :disabled="submitLoading" :rules='rules' size="small" class="form" ref="form" :model="form" label-width="80px" label-position="top">
      <h2>Contact Details</h2>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="First name" prop='contacts.contactFirstName'>
            <el-input v-model="form.contacts.contactFirstName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Last name">
            <el-input v-model="form.contacts.contactLastName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Email" prop='contacts.contactEmail'>
            <el-input  v-model="form.contacts.contactEmail" prefix-icon="el-icon-message">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Contact Number">
            <el-input v-model="form.contacts.contactNumber"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <h2>Product Details</h2>
      <el-row :gutter="20">
        <el-col :span="6" v-loading='pNumLoding'>
          <el-form-item label="Product serial number" prop='productNumber'>
            <el-tooltip class="tooltip" effect="dark" :content="pNumTooltip" placement="top-start">
              <el-input v-model="form.productNumber" @blur='getProductInfo'></el-input>
            </el-tooltip>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Product model">
            <el-input v-model="form.productModel" :readonly="true"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <h2>Installation Details</h2>
      <el-row :gutter="20">
        <!-- <el-col :span="6">
          <el-form-item label="Country">
            <el-select v-model="form.address.contryCode" placeholder="请选择" clearable filterable>
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col> -->
        <el-col :span="6">
          <el-form-item label="City/District" prop='address.cityName'>
            <el-input v-model="form.address.cityName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="State/Province" prop='address.stateName'>
            <el-input v-model="form.address.stateName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Post code"  prop='address.postCode'>
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
        <el-col :span="6">
          <el-form-item label="Installer">
            <el-input v-model="form.installInstaller"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Installation date" prop='installDate'>
            <el-date-picker
              :picker-options="pickerOptions"
              class="datePicker"
              v-model="form.installDate"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="6" v-if="form.country=='AU'">
          <el-form-item label="CEC accreditation number">
            <el-input v-model="form.installCec"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" v-if="form.country=='AU'">
          <el-form-item label="Invoice upload" >
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
                  <el-input style="width:100%" class="fileBtn" slot="trigger" size="small" type="primary">选取文件</el-input>
              </el-upload>
            </el-tooltip>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Electrical Compliance Certificate">
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
                  <el-input style="width:100%" class="fileBtn" slot="trigger" size="small" type="primary">选取文件</el-input>
              </el-upload>
            </el-tooltip>
          </el-form-item>
        </el-col>
      </el-row>
      <h2>Suggestions</h2>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="Do you have any product suggestions?">
            <el-input type="textarea" v-model="form.suggestions" resize="none" :rows="4"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label=" ">
            <el-checkbox v-model="form.checked">I have read and agree to Sungrow's warranty terms.</el-checkbox>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item class="sub">
        <el-button type="primary" @click="onSubmit('form')" :disabled="!form.checked" :loading='submitLoading'>Submit</el-button>
        <el-button @click="reset">reset</el-button>
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
        country:"",
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
    return {
      pNumTooltip:'Please refer to the nameplate on the side of the Sungrow product.',
      ivcTooltip:'Please attach the invoice as the evidence of the installation.',
      cecTooltip:'Please attach the Electrical Compliance Certifcate as the evidence of the installation.Normally it will provided by the installer after installation.For different states.the name for such certifcate may vary.',
      pickerOptions:{
        disabledDate: (time) => {
          return time.getTime()>Date.now()
        }
      },
      rules:{
        'contacts.contactFirstName':[
          {required:true,message:'First name is required',triggle:['change','blur']}
        ],
        productNumber:[
          {required:true,message:'Serial number is required',triggle:['change','blur']}
        ],
        'contacts.contactEmail':[
          {required:true,validator: this.$formTest.emailTest,triggle:['change','blur']}
        ],
        'address.cityName':[
          {required:true,message:'City is required',triggle:['change','blur']}
        ],
        'address.stateName':[
          {required:true,message:'State is required',triggle:['change','blur']}
        ],
        'address.postCode':[
          {required:true,message:'Post code is required',triggle:['change','blur']}
        ],
        installDate:[
          {required:true,message:'InstallDate is required',triggle:['change','blur']}
        ]
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
      breadcrumbList:[
        {
          path:'/warranty/registration',
          name:'Warranty'
        },
        {
          path:'/warranty/registration',
          name:'Registration'
        }
      ],
      fileList:[],
      fileList1:[],
      formMod,
      form: {...formMod}
    };
  },
  methods: {
    getProductInfo(){
      if(this.form.productNumber){
        this.pNumLoding =true;
        productInfo({serialNumber:this.form.productNumber}).then(res=>{
          if(res.data.code==1){
            this.pNumLoding=false
            this.form.productModel = res.data.data.productModelValue
            // this.form.productId = [res.data.data.id]
            this.form.products = [{
              productNumber: this.form.productNumber,
              productId:res.data.data.id,
              productModel:res.data.data.productModelValue,
            }]
            this.form.businessPartner = res.data.data.businessPartner
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
        if(i === 'invoiceFile' || i === 'cecFile') {
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
  created(){
    console.log(process.env.API_ROOT)
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
