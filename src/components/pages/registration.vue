<template>
  <el-container class="registration" direction="vertical">
    <Breadcrumb :breadcrumbList='breadcrumbList' />
    <div class="desc">
      <img src="../../../static/reg.jpeg" alt="图片">
    </div>
    <el-form :disabled="submitLoading" size="small" class="form" ref="form" :model="form" label-width="80px" label-position="top">
      <h2>Contact Details</h2>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="First name">
            <el-input v-model="form.contacts.contactFirstName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Last name">
            <el-input v-model="form.contacts.contactLastName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Email">
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
        <el-col :span="6">
          <el-form-item label="Product serial number">
            <el-input v-model="form.productNumber" @blur='getProductInfo'></el-input>
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
        <el-col :span="6">
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
        <el-col :span="6">
          <el-form-item label="Installer">
            <el-input v-model="form.installInstaller"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Installation date">
            <el-date-picker
              class="datePicker"
              v-model="form.installDate"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="6" v-if="form.address.contryCode=='AU'">
          <el-form-item label="CEC accreditation number">
            <el-input v-model="form.installCec"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Invoice upload">
            <el-upload
              class="upload-demo"
              style="width:100%"
              ref="upload"
              :limit="1"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList"
              :auto-upload="false">
              <el-input style="width:100%" class="fileBtn" slot="trigger" size="small" type="primary">选取文件</el-input>
            </el-upload>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Electrical Compliance Certificate">
            <el-upload
              class="upload-demo"
              style="width:100%"
              ref="upload"
              :limit="1"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList"
              :auto-upload="false">
              <el-input style="width:100%" class="fileBtn" slot="trigger" size="small" type="primary">选取文件</el-input>
            </el-upload>
            <!-- <el-input type="file" v-model="form.electricalComplianceCertificate" @change="changeFile"></el-input> -->
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
        <el-button type="primary" @click="onSubmit" :disabled="!form.checked" :loading='submitLoading'>Submit</el-button>
        <el-button @click="reset">reset</el-button>
      </el-form-item>
    </el-form>
  </el-container>
</template>

<script>
import Breadcrumb from '../coms/Breadcrumb'
import { productInfo,submitReg } from '@/api/registration'
export default {
  name: "Registration",
  components:{
    Breadcrumb
  },
  data() {
    return {
      submitLoading:false,
      options: [{
          value: 'AU',
          label: 'Australia'
        }, {
          value: '2',
          label: '选项2'
        }, {
          value: '3',
          label: '选项3'
        }, {
          value: '4',
          label: '选项4'
        }, {
          value: '5',
          label: '选项5'
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
      form: {
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
        type:1
      }
    };
  },
  methods: {
    getProductInfo(){
      if(this.form.productNumber){
        productInfo({serialNumber:this.form.productNumber}).then(res=>{
          if(res.data.code==1){
            this.form.productModel = res.data.data.productModelValue
            // this.form.productId = [res.data.data.id]
            this.form.products = [{
              productNumber: this.form.productNumber,
              productId:res.data.data.id,
              productModel:res.data.data.productModelValue,
            }]
            this.form.businessPartner = res.data.data.businessPartner
          }
        }).catch(err=>{
          console.log(err)
        })
      }
    },
    onSubmit() {
      this.submitLoading = true
      var params = new FormData()
      var data = this.form
      for (let i in data) {
        console.log(i,data[i])
        if(typeof(data[i]) == 'object'){
          for(let j in data[i]){
            console.log(data[i][j])
            if(typeof(data[i][j]) == 'object'){
              for(let x in data[i][j]){
                console.log(data[i][j][x])
                if(data[i][j][x] || data[i][j][x]===0){
                  params.append(i+'['+j+']'+'.'+x,data[i][j][x])
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
      this.form={
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
        type:1
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
  created(){
    console.log(process.env.API_ROOT)
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' >
.registration {
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
