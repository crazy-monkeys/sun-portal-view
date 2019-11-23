<template>
  <el-container class="claimForm" direction="vertical">
    <Breadcrumb :breadcrumbList='breadcrumbList' />
    <!-- <div class="desc">
      <img src="../../../static/reg.jpeg" alt="图片">
    </div> -->
    <el-form :disabled="submitLoading" size="small" :rules='rules' class="form" ref="form" :model="form" label-width="80px" label-position="top">
      <h2>{{ $t('claimForm.productDetails.title') }}</h2>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item :label="$t('claimForm.productDetails.serialNumber')" prop='productNumber'>
            <el-input v-model="form.productNumber" @blur='getProductInfo'></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label="$t('claimForm.productDetails.productModel')">
            <el-input v-model="form.productModel" :readonly="true"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label="$t('claimForm.productDetails.dateOfInstallation')" prop='installDate'>
            <el-date-picker
              class="datePicker"
              v-model="form.installDate"
              type="date"
              value-format="yyyy-MM-dd"
              >
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label="$t('claimForm.productDetails.wantToClaimAnAccessory')">
            <el-input v-model="form.accessory" :disabled="form.productNumber.length==0" ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <h2>{{ $t('claimForm.claimantContactDetails.title') }}</h2>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-form-item :label="$t('claimForm.claimantContactDetails.type')" prop='contact.billType'>
              <el-radio-group v-model="form.contact.billType" >
                <el-radio label="Business" value='Business'>Business</el-radio>
                <el-radio label="Individual" vlaue='Individual'>Individual</el-radio>
              </el-radio-group>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20" >
        <el-col :span="6">
          <el-form-item :label="$t('claimForm.claimantContactDetails.ABN')" v-if="form.country=='AU'&&form.contact.billType=='Business'" >
            <el-input v-model="form.contact.abn" :disabled="form.contact.billType=='Individual' ? true :false"></el-input>
          </el-form-item>
        </el-col>
        
        <el-col :span="6" v-if="form.contact.billType=='Business'">
          <el-form-item :label="$t('claimForm.claimantContactDetails.business.name')" >
            <el-input v-model="form.contact.businessName" :disabled="form.contact.billType=='Individual' ? true :false"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="6" v-if="form.contact.billType=='Business'">
          <el-form-item :label="$t('claimForm.claimantContactDetails.business.contactPerson')" prop='contact.person'>
            <el-input v-model="form.contact.person" :disabled="form.contact.billType=='Individual' ? true :false"></el-input>
          </el-form-item>
        </el-col>
        
        <el-col :span="6" v-if="form.contact.billType=='Business'">
          <el-form-item :label="$t('claimForm.claimantContactDetails.business.contactNumber')" prop='contact.contactNumber'>
            <el-input v-model="form.contact.contactNumber" :disabled="form.contact.billType=='Individual' ? true :false"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="6" v-if="form.contact.billType=='Business'">
          <el-form-item :label="$t('claimForm.claimantContactDetails.business.email')" prop='contact.contactEmail'>
            <el-input  v-model="form.contact.contactEmail" prefix-icon="el-icon-message" :disabled="form.contact.billType=='Individual' ? true :false" :placeholder="$t('claimForm.claimantContactDetails.business.emailPlaceholder')">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" v-if="form.contact.billType=='Business'">
          <el-form-item :label="$t('claimForm.claimantContactDetails.business.addressLine1')" prop='contact.address.addressLine1'>
            <el-input v-model="form.contact.address.addressLine1" :disabled="form.contact.billType=='Individual' ? true :false"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" v-if="form.contact.billType=='Business'">
          <el-form-item :label="$t('claimForm.claimantContactDetails.business.addressLine2')" prop='contact.address.addressLine2'>
            <el-input v-model="form.contact.address.addressLine2" :disabled="form.contact.billType=='Individual' ? true :false"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" v-if="form.contact.billType=='Business'">
          <el-form-item :label="$t('claimForm.claimantContactDetails.business.citydistrict')" prop='contact.address.cityName'>
            <el-input v-model="form.contact.address.cityName" :disabled="form.contact.billType=='Individual' ? true :false"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" v-if="form.contact.billType=='Business'">
          <el-form-item :label="$t('claimForm.claimantContactDetails.business.stateProvince')" prop='contact.address.stateName'>
            <el-input v-model="form.contact.address.stateName" :disabled="form.contact.billType=='Individual' ? true :false"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" v-if="form.contact.billType=='Business'">
          <el-form-item :label="$t('claimForm.claimantContactDetails.business.postCode')" prop='contact.address.postCode'>
            <el-input v-model="form.contact.address.postCode" :disabled="form.contact.billType=='Individual' ? true :false"></el-input>
          </el-form-item>
        </el-col>
        
      <!-- </el-row> -->

      <!-- <h2 v-if="form.contact.billType!='Business'">End User Contact Details</h2> -->
      <!-- <el-row v-if="form.contact.billType!='Business'" :gutter="20"> -->
        <el-col :span="6" v-if="form.contact.billType!='Business'">
          <el-form-item :label="$t('claimForm.claimantContactDetails.person.name')" prop='endUser.person'>
            <el-input type="text" v-model="form.endUser.person" ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" v-if="form.contact.billType!='Business'">
          <el-form-item :label="$t('claimForm.claimantContactDetails.person.contactNumber')"  prop='endUser.contactNumber'>
            <el-input type="text" v-model="form.endUser.contactNumber" ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" v-if="form.contact.billType!='Business'">
          <el-form-item :label="$t('claimForm.claimantContactDetails.person.email')" prop='endUser.contactEmail'>
            <el-input  v-model="form.endUser.contactEmail" prefix-icon="el-icon-message"  :placeholder="$t('claimForm.claimantContactDetails.person.emailPlaceholder')">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" v-if="form.contact.billType!='Business'">
          <el-form-item :label="$t('claimForm.claimantContactDetails.person.addressLine1')" prop='endUser.address.addressLine1'>
            <el-input v-model="form.endUser.address.addressLine1"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" v-if="form.contact.billType!='Business'">
          <el-form-item :label="$t('claimForm.claimantContactDetails.person.addressLine2')" prop='endUser.address.addressLine2'>
            <el-input v-model="form.endUser.address.addressLine2"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" v-if="form.contact.billType!='Business'">
          <el-form-item :label="$t('claimForm.claimantContactDetails.person.citydistrict')" prop='endUser.address.cityName'> 
            <el-input v-model="form.endUser.address.cityName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" v-if="form.contact.billType!='Business'">
          <el-form-item :label="$t('claimForm.claimantContactDetails.person.stateProvince')" prop='endUser.address.stateName'>
            <el-input v-model="form.endUser.address.stateName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" v-if="form.contact.billType!='Business'">
          <el-form-item :label="$t('claimForm.claimantContactDetails.person.postCode')" prop='endUser.address.postCode'>
            <el-input v-model="form.endUser.address.postCode"></el-input>
          </el-form-item>
        </el-col>
        
      </el-row>
      <el-row  :gutter="20">
        <el-col :span="12">
          <h2>{{ $t('claimForm.faultDetails.title') }}</h2>
          <el-row :gutter="20">
            <el-col :span="24">
              <el-form-item :label="$t('claimForm.faultDetails.theFaultIs')" prop='serviceCall.fault'>
                  <el-radio-group v-model="form.serviceCall.fault">
                    <el-radio label="Permanent">Permanent</el-radio>
                    <el-radio label="Intermittent">Intermittent</el-radio>
                  </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item :label="$t('claimForm.faultDetails.lcd')">
                <el-input v-model="form.serviceCall.lcd" ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item :label="$t('claimForm.faultDetails.description')" prop='serviceCall.description'>
                <el-input type="textarea" resize="none" :rows="4" v-model="form.serviceCall.description" ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="12">
          <h2>{{ $t('claimForm.addressDetails.title') }}</h2>
            <el-row :gutter="20">
              <el-col :span="24">
                <el-form-item label="" >
                    <el-radio-group v-model="shippingAddressRadio" @change="shippingAddressRadioChangeHandle">
                      <el-radio label="1" value='1'>{{ $t('claimForm.addressDetails.sameAsClaimant') }}</el-radio>
                      <!-- <el-radio label="2" value='2'>Same as end user</el-radio> -->
                      <el-radio label="3" value='3'>{{ $t('claimForm.addressDetails.other') }}</el-radio>
                    </el-radio-group>
                </el-form-item>
              </el-col>
              
              <el-col :span="24">
                <el-form-item :label="$t('claimForm.addressDetails.shippingAddress')" prop="serviceCall.shippingAddress">
                  <el-input type="textarea" resize="none" :rows="4" v-model="form.serviceCall.shippingAddress" :readonly="shippingAddressRadio=='3' ? false: true" ></el-input>
                </el-form-item>
              </el-col>
              
            </el-row>

        </el-col>
      </el-row>

      <h2>{{ $t('claimForm.otherDetails.title') }}</h2>
      <el-row :gutter="20" >
        <el-col :span="12">
          <el-row :gutter="20">
            <el-col :span="24" v-if="form.country=='AU'">
              <el-form-item :label="$t('claimForm.otherDetails.title')">
                  <el-radio-group v-model="form.serviceCall.weather">
                    <el-radio label="Yes">Yes</el-radio>
                    <el-radio label="No">No</el-radio>
                  </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="24" v-if="form.country=='AU'">
              <el-form-item class="one" :label="$t('claimForm.otherDetails.location')" v-if="form.serviceCall.weather=='Yes' ? true:false">
                <el-input v-model="form.serviceCall.location" ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item :label="$t('claimForm.otherDetails.weatherMsg')">
                <el-input type="textarea" resize="none" :rows="4" v-model="form.serviceCall.weatherMsg" ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="12">
          <el-row :gutter="20">
            <el-col :span="24" v-if="form.country=='AU'">
              <el-form-item :label="$t('claimForm.otherDetails.battery')">
                  <el-radio-group v-model="form.serviceCall.battery">
                    <el-radio label="Yes">Yes</el-radio>
                    <el-radio label="No">No</el-radio>
                  </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="24" v-if="form.country=='AU'">
              <el-form-item class="one" :label="$t('claimForm.otherDetails.model')" v-if="form.serviceCall.battery=='Yes' ? true:false">
                <el-input v-model="form.serviceCall.model" ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item class="one" :label="$t('claimForm.otherDetails.batteryMsg')">
                <el-input type="textarea" resize="none" :rows="4" v-model="form.serviceCall.batteryMsg" ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>
      </el-row>

      <h2>{{ $t('claimForm.fileUpload.title') }}</h2>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item :label="$t('claimForm.fileUpload.uploadLabel')">
            <el-upload
              class=""
              ref="upload"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-change="uploadOnChangeHandle"
              :file-list="fileList"
              :auto-upload="false">
              <el-button slot="trigger" size="small" type="primary">{{ $t('claimForm.fileUpload.uploadBtn') }}</el-button>
              <!-- <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button> -->
              <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
            </el-upload>
          </el-form-item>
        </el-col>
        
        <el-col :span="24">
          <el-form-item label=" ">
            <el-checkbox v-model="form.checked">
              <i18n path="claimForm.fileUpload.toTerm" tag="label" for="claimForm.fileUpload.tos">
                <el-button type="text" @click="openTerm">{{ $t('claimForm.fileUpload.tos') }}</el-button> 
              </i18n>
            </el-checkbox>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item class="sub">
        <el-button type="primary" @click="onSubmit('form')" :disabled="!form.checked" :loading='submitLoading'>{{ $t('claimForm.fileUpload.submit') }}</el-button>
        <el-button @click="reset">{{ $t('claimForm.fileUpload.reset') }}</el-button>
      </el-form-item>
    </el-form>
  </el-container>
</template>

<script>
import Breadcrumb from '../coms/Breadcrumb'
import Bus from "../../bus/bus.js";
import { productInfo,submitClaim } from '@/api/registration'
export default {
  name: "ClaimForm",
  components:{
    Breadcrumb
  },
  data() {
    const formMod = {
        accessory: '',
        country:Bus.dropValue,
        endUser:{
          person:'',
          contactNumber:"",
          contactEmail:'',
          address:{
            cityName:'',
            stateName:'',
            postCode:'',
            addressLine1:'',
            addressLine2:'',
          }
        },
        contact:{
          billType:'Business',
          abn:'',
          businessName:"",
          person:'',
          contactNumber:"",
          contactEmail:'',
          address:{
            cityName:'',
            stateName:'',
            postCode:'',
            addressLine1:'',
            addressLine2:'',
          }
        },
        serviceCall:{
          weather:'',
          location:'',
          weatherMsg:'',
          battery:'',
          model:'',
          batteryMsg:'',
          shippingAddress:'',
        },
        businessPartner:'',
        productNumber: '',
        productModel: '',
        productId:[],
        products:[],
        installDate:'',
        type:2
      };
    return {
      rules:{
        'contact.billType':[
          {required:true,message:'Type is required',triggle:['change','blur']}
        ],
        'contact.contactEmail':[
          {required:true,message:'Email is required',triggle:['change','blur']}
        ],
        'contact.person':[
          {required:true,message:'Person is required',triggle:['change','blur']}
        ],
        'contact.contactNumber':[
          {required:true,message:'ContactNumber is required',triggle:['change','blur']}
        ],
        'contact.address.cityName':[
          {required:true,message:'City is required',triggle:['change','blur']}
        ],
        'contact.address.addressLine1':[
          {required:true,message:'AddressLine1 is required',triggle:['change','blur']}
        ],
        'contact.address.addressLine2':[
          {required:true,message:'AddressLine2 is required',triggle:['change','blur']}
        ],
        'contact.address.stateName':[
          {required:true,message:'State is required',triggle:['change','blur']}
        ],
        'contact.address.postCode':[
          {required:true,message:'Post code is required',triggle:['change','blur']}
        ],

        'endUser.contactEmail':[
          {required:true,message:'Email is required',triggle:['change','blur']}
        ],
        'endUser.person':[
          {required:true,message:'Name is required',triggle:['change','blur']}
        ],
        // 'endUser.contactNumber':[
        //   {required:true,message:'ContactNumber is required',triggle:['change','blur']}
        // ],
        'endUser.contactNumber':[
          {required:true,message:'ContactNumber is required',triggle:['change','blur']}
        ],
        'endUser.address.cityName':[
          {required:true,message:'City is required',triggle:['change','blur']}
        ],
        'endUser.address.addressLine1':[
          {required:true,message:'AddressLine1 is required',triggle:['change','blur']}
        ],
        'endUser.address.addressLine2':[
          {required:true,message:'AddressLine2 is required',triggle:['change','blur']}
        ],
        'endUser.address.stateName':[
          {required:true,message:'State is required',triggle:['change','blur']}
        ],
        'endUser.address.postCode':[
          {required:true,message:'Post code is required',triggle:['change','blur']}
        ],
        installDate:[
          {required:true,message:'InstallDate is required',triggle:['change','blur']}
        ],
        productNumber:[
          {required:true,message:'Serial number is required',triggle:['change','blur']}
        ],
        'serviceCall.fault':[
          {required:true,message:'Fault is required',triggle:['change','blur']}
        ],
        'serviceCall.description':[
          {required:true,message:'Fault Description is required',triggle:['change','blur']}
        ],
        'serviceCall.shippingAddress':[
          {required:true,message:'ShippingAddress is required',triggle:['change','blur']}
        ],
      },
      radio:'',
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
          path:'/warranty/claim/form',
          name:'Online Warranty Claim Form'
        }
      ],
      shippingAddressRadio:'',
      fileList:[],
      formMod,
      form: { ...formMod }
    };
  },
  watch:{
    'form.contact.billType':{
      handler:function(n,o){
        if(n=='Individual'){
          console.log(1111)
          this.form.contact.abn=''
          this.form.contact.businessName=''
          this.form.contact.person=''
          this.form.contact.contactNumber=''
          this.form.contact.contactEmail=''
          this.form.contact.address.cityName=''
          this.form.contact.address.stateName=''
          this.form.contact.address.postCode=''
          this.form.contact.address.addressLine1=''
          this.form.contact.address.addressLine2=''
          this.$formTest.resetForm(this.$refs['form'],['contact.abn','contact.businessName','contact.person','contact.contactNumber','contact.contactEmail','contact.address.cityName','contact.address.stateName','contact.address.postCode','contact.address.addressLine1','contact.address.addressLine2'])
        }else{
          console.log(2222)
          this.form.endUser.person=''
          this.form.endUser.contactNumber=''
          this.form.endUser.contactEmail=''
          this.form.endUser.address.cityName=''
          this.form.endUser.address.stateName=''
          this.form.endUser.address.postCode=''
          this.form.endUser.address.addressLine1=''
          this.form.endUser.address.addressLine2=''
          this.$formTest.resetForm(this.$refs['form'],['endUser.person','endUser.contactNumber','endUser.contactEmail','endUser.address.cityName','endUser.address.stateName','endUser.address.postCode','endUser.address.addressLine1','endUser.address.addressLine2'])
        }
      }
    }
  },
  methods: {
    openTerm(){
      window.open('../../../sun-portal/v/static/Sungrow Manufacturer Warranty.pdf')
    },
    shippingAddressRadioChangeHandle(v) {
        if(v === '1' ){
            const {
              address: {
                addressLine1,
                addressLine2,
                cityName,
                stateName,
                postCode
              },
              person,
              contactNumber,
            } = this.form.contact.billType=='Business' ? this.form.contact : this.form.endUser;
            const str = [
              this.form.contact.businessName,
              addressLine1,
              addressLine2,
              cityName,
              stateName,
              postCode,
              person ? `ATTN:${person}` : '',
              contactNumber,
            ].filter(i => i.trim()).join(',');
            this.form.serviceCall.shippingAddress = str;
        }else{
          this.form.serviceCall.shippingAddress = ''
        }
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    uploadOnChangeHandle(file, fileList) {
      this.fileList = fileList;
    },
    getProductInfo(){
      if(this.form.productNumber){
        productInfo({serialNumber:this.form.productNumber}).then(res=>{
          if(res.data.code==1){
            this.form.productModel = res.data.data.productModelValue
            this.form.businessPartner = res.data.data.businessPartner

            // this.form.productId = [res.data.data.id]
            this.form.products = [{
              serialNumber:this.form.productNumber,
              productId:res.data.data.id,
              productModel:res.data.data.productModelValue,
            }]
          }else{
            this.form.productModel = ''
          }
        }).catch(err=>{
            this.form.productModel = ''
          console.log(err)
        })
      }else{
        this.form.productModel = ''
        this.form.accessory = ''
      }
    },
    submit(){
      this.submitLoading = true
      this.form.country = Bus.dropValue
      var params = new FormData()
      this.fileList.forEach((item,index) => {
        params.append('files['+index+']', item.raw);
      })
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
      console.log(params)
      submitClaim(params).then(res=>{
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
    onSubmit(form) {
      this.$formTest.submitForm(this.$refs[form],this.submit)
    },
    reset(){
      this.form={
        accessory: '',
        country:Bus.dropValue,
        endUser:{
          person:'',
          contactNumber:"",
          contactEmail:'',
          address:{
            cityName:'',
            stateName:'',
            postCode:'',
            addressLine1:'',
            addressLine2:'',
          }
        },
        contact:{
          billType:'Business',
          abn:'',
          businessName:"",
          person:'',
          contactNumber:"",
          contactEmail:'',
          address:{
            cityName:'',
            stateName:'',
            postCode:'',
            addressLine1:'',
            addressLine2:'',
          }
        },
        serviceCall:{
          weather:'',
          location:'',
          weatherMsg:'',
          battery:'',
          model:'',
          batteryMsg:'',
          shippingAddress:'',
        },
        businessPartner:'',
        productNumber: '',
        productModel: '',
        productId:[],
        products:[],
        installDate:'',
        type:2
      }
      console.log(this.form)
      this.$refs.upload.clearFiles();
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
  created(){
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
.claimForm {
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
