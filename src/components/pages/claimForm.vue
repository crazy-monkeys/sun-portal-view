<template>
  <el-container class="claimForm" direction="vertical">
    <Breadcrumb :breadcrumbList='breadcrumbList' />
    <div class="desc">
      描述区域
    </div>
    <el-form :disabled="submitLoading" size="small" class="form" ref="form" :model="form" label-width="80px" label-position="top">
      <h2>Product Details</h2>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="Serial number">
            <el-input v-model="form.productNumber" @blur='getProductInfo'></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Date of installation">
            <el-date-picker
              class="datePicker"
              v-model="form.installDate"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Product model">
            <el-input v-model="form.productModel" :readonly="true"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Want to claim an accessory?">
            <el-input v-model="form.productModel" :readonly="true"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <h2>Claimant Contact Details</h2>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="Type">
              <el-radio-group v-model="radio">
                <el-radio label="Business">Business</el-radio>
                <el-radio label="Individual">Individual</el-radio>
              </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="ABN" >
            <el-input v-model="form.abn" :disabled="radio=='Individual' ? true :false"></el-input>
          </el-form-item>
        </el-col>
        
        <el-col :span="6">
          <el-form-item label="Business Name">
            <el-input v-model="form.businessName" :disabled="radio=='Individual' ? true :false"></el-input>
          </el-form-item>
        </el-col>


        <el-col :span="6">
          <el-form-item label="Contact person">
            <el-input v-model="form.contactPerson"></el-input>
          </el-form-item>
        </el-col>
        
        <el-col :span="6">
          <el-form-item label="Contact number">
            <el-input v-model="form.contactNumber"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="6">
          <el-form-item label="Email">
            <el-input  v-model="form.contactEmial" prefix-icon="el-icon-message">
            </el-input>
          </el-form-item>
        </el-col>

        <el-col :span="6">
          <el-form-item label="Country">
            <el-select v-model="form.contryCode" placeholder="请选择" clearable filterable>
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
            <el-input v-model="form.cityName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="State/Province">
            <el-input v-model="form.stateName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Post code">
            <el-input v-model="form.postCode"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Address Line 1">
            <el-input v-model="form.addressLine1"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Address Line 2">
            <el-input v-model="form.addressLine2"></el-input>
          </el-form-item>
        </el-col>
        
        <!-- <el-col :span="6">
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
          </el-form-item>
        </el-col> -->
      </el-row>
      <h2>End User Contact Details</h2>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="Name">
            <el-input type="text" v-model="form.name" ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Contact number">
            <el-input type="text" v-model="form.name" ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Email">
            <el-input  v-model="form.contactEmial" prefix-icon="el-icon-message">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Country">
            <el-select v-model="form.contryCode" placeholder="请选择" clearable filterable>
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
            <el-input v-model="form.cityName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="State/Province">
            <el-input v-model="form.stateName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Post code">
            <el-input v-model="form.postCode"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Address Line 1">
            <el-input v-model="form.addressLine1"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Address Line 2">
            <el-input v-model="form.addressLine2"></el-input>
          </el-form-item>
        </el-col>
        
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <h2>Fault Details</h2>
          <el-row :gutter="20">
            <el-col :span="24">
              <el-form-item label="The fault is">
                  <el-radio-group v-model="radio">
                    <el-radio label="Permanent">Permanent</el-radio>
                    <el-radio label="Intermittent">Intermittent</el-radio>
                  </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="Status message on the LCD:" >
                <el-input v-model="form.abn" ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="Fault description:">
                <el-input type="textarea" resize="none" :rows="4" v-model="form.businessName" ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="12">
          <h2>Shipping Address</h2>
            <el-row :gutter="20">
              <el-col :span="24">
                <el-form-item label="The shipping address is">
                    <el-radio-group v-model="radio">
                      <el-radio label="Same as claimant">Same as claimant</el-radio>
                      <el-radio label="Same as end user">Same as end user</el-radio>
                      <el-radio label="None of the above">None of the above</el-radio>
                    </el-radio-group>
                </el-form-item>
              </el-col>
              
              <el-col :span="24">
                <el-form-item label="Once approved, the replacement device will be shipped to">
                  <el-input type="textarea" resize="none" :rows="4" v-model="form.businessName" ></el-input>
                </el-form-item>
              </el-col>
              
            </el-row>

        </el-col>
      </el-row>
      


      <h2>Other Details</h2>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-row :gutter="20">
            <el-col :span="24">
              <el-form-item label="Is the inverter exposed to the weather (e.g. rain)?">
                  <el-radio-group v-model="radio">
                    <el-radio label="Yes">Yes</el-radio>
                    <el-radio label="No">No</el-radio>
                  </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item class="one" label="Inverter Installation Location" v-if="radio=='Yes' ? true:false">
                <el-input v-model="form.abn" ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="Please provide the reference number that provided by Sungrow staff (either Phone call reference or 5 digits Email ticket number#).">
                <el-input type="textarea" resize="none" :rows="4" v-model="form.businessName" ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="12">
          <el-row :gutter="20">
            <el-col :span="24">
              <el-form-item label="Does the inverter connect with a battery?">
                  <el-radio-group v-model="radio">
                    <el-radio label="Yes">Yes</el-radio>
                    <el-radio label="No">No</el-radio>
                  </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item class="one" label="Battery brand/model" v-if="radio=='Yes' ? true:false">
                <el-input v-model="form.abn" ></el-input>
              </el-form-item>
            </el-col>
            
            <el-col :span="24">
              <el-form-item class="one" label="Please leave any comments here">
                <el-input type="textarea" resize="none" :rows="4" v-model="form.businessName" ></el-input>
              </el-form-item>
            </el-col>
            
          </el-row>
        </el-col>
      </el-row>
      
      

      

      <h2>File Upload</h2>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="Please upload any pictures or documents that can support your warranty claim, such as the data sticker on a side of the inverter, and the LCD status or other LCD info that may be relevant.">
            <el-upload
              class=""
              ref="upload"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList"
              :auto-upload="false">
              <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
              <!-- <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button> -->
              <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
            </el-upload>
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
import { productInfo,submit } from '@/api/registration'
export default {
  name: "ClaimForm",
  components:{
    Breadcrumb
  },
  data() {
    return {
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
      radio:'',
      submitLoading:false,
      options: [{
          value: '1',
          label: '选项1'
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
          path:'/warranty/claim/form',
          name:'Online Warranty Claim Form'
        }
      ],
      fileList:[],
      form: {
        contactFirstName: '',
        contactLastName: '',
        contactEmial: '',
        contactNumber: '',
        productNumber: '',
        productModel: '',
        productId:[],
        products:[],
        businessPartner:'',
        contryCode:'',
        cityName:'',
        stateName:'',
        addressLine1:'',
        addressLine2:'',
        postCode:'',
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
      if(this.form.productNumber){
        productInfo({serialNumber:this.form.productNumber}).then(res=>{
          if(res.data.code==1){
            this.form.productModel = res.data.data.productModel
            // this.form.productId = [res.data.data.id]
            this.form.products = [{
              productId:res.data.data.id,
              productModel:res.data.data.productModel,
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
        // // console.log(i,data[i])
        if(typeof(data[i]) == 'object'){
          for(let j in data[i]){
            // console.log(data[i][j])
            if(typeof(data[i][j]) == 'object'){
              for(let x in data[i][j]){
                // console.log(data[i][j][x])
                if(data[i][j][x] || data[i][j][x]===0){
                  params.append(i+'['+j+']'+'.'+x,data[i][j][x])
                }
              }
            }else{
                if(data[i][j] || data[i][j]===0){

                    params.append(data[i]+j,data[i][j])
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
      submit(params).then(res=>{
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
        contactFirstName: '',
        contactLastName: '',
        contactEmial: '',
        contactNumber: '',
        productNumber: '',
        productModel: '',
        productId:[],
        products:[],
        businessPartner:'',
        contryCode:'',
        cityName:'',
        stateName:'',
        addressLine1:'',
        addressLine2:'',
        postCode:'',
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' >
.claimForm {
  height: 100%;
  .desc {
    border:1px dashed #FF7F00;
    height: 500px;
    line-height: 500px;
    text-align: center;
    // background: orange;
    font-size: 30px
  }
  .form{
    padding: 20px;
    .one{
      .el-form-item__label{
        line-height: 64px;
      }
    }
    h2{
      padding: 10px 0;
      color: #FF7F00
    }
    .datePicker,.el-select{
      width: 100% ;
    }
    .sub{
      margin-top: 20px;
    }
  }
}

</style>
