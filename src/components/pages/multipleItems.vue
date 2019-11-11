<template>
  <el-container class="multipleItems" direction="vertical">
    <Breadcrumb :breadcrumbList='breadcrumbList' />
    <div class="desc">
      <img src="../../../static/reg.jpeg" alt="图片">
    </div>
          
    <el-form v-loading='reviewLoading'  :disabled="submitLoading" size="small" class="form" ref="form" :model="form" label-width="80px" label-position="top">
      <h2>Billing Details</h2>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="Type">
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
        <el-col :span="24">
          <el-row >
            <el-col :span="6">
              <el-form-item label="Purchase Order">
                <el-input v-model="form.purchaseOrder"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="24">
          <el-form-item label="Type">
            <el-checkbox v-model="form.checked1">Please select here to add multiple inverters</el-checkbox>
          </el-form-item>
        </el-col>
        <el-table
          v-if="!form.checked1"
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
                <el-input v-model="scope.row.serialNumber" size="small"  @change="getProductInfo(scope.$index)"></el-input>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column
            prop=""
            label="Product model"
            width="">
            <template slot-scope="scope">
              <el-form-item label="">
                <el-input v-model="scope.row.productModel" disabled size="small" :readonly="true"></el-input>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column
            prop=""
            label="Warranty type">
            <template slot-scope="scope">
              <el-form-item label="">
                <el-select v-model="scope.row.warrantyType" placeholder=""
                clearable filterable
                :disabled="!scope.row.productModel"
                @change="getAmount(scope.$index)"
                @clear="form.products[scope.$index].amount=''">
                  <el-option
                    v-for="item in warrantyTypes"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    >
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
                <el-button size="small" type='text' @click="addRow(1)">添加</el-button>
           </template>
            <template slot-scope="scope">
               <el-button
                size="small"
                type="text"
                @click="delRow(scope.$index,1)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>

        <el-table
          v-if="form.checked1"
          :data="form.productList"
          style="width: 100%"
          @row-click='rowClick'
          >
          
          <el-table-column
            prop=""
            label="Warranty type">
            <template slot-scope="scope">
              <el-form-item label="">
                <el-select v-model="scope.row.warrantyType" placeholder=""
                clearable filterable
                >
                  <el-option
                    v-for="item in warrantyTypes"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    :disabled="disableType(item.value)">
                  </el-option>
                </el-select>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column
            prop=""
            label="Serial number List"
            width="">
            <template slot-scope="scope">
              <el-form-item label="">
                <el-input placeholder='Please enter the device serial number separated by ","' type="textarea" resize="none" :rows='4' v-model="scope.row.serialNumbers" size="small"  ></el-input>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column
            prop=""
            label="Amount">
            <template slot="header" slot-scope="scope">
                <el-button size="small" type='text' @click="addRow(2)">添加</el-button>
           </template>
            <template slot-scope="scope">
               <el-button
                size="small"
                type="text"
                @click="delRow(scope.$index,2)">删除</el-button>
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
            <el-checkbox v-model="form.checked">I have read and agree to <el-button type="text" @click="openTerm">Sungrow's warranty terms.</el-button>  </el-checkbox>
          </el-form-item>
        </el-col>
      </el-row>
      
      <el-form-item class="sub">
        <el-button v-if="form.checked1" type="primary" @click="review" :loading="reviewLoading">Review</el-button>
        <el-button type="primary" @click="onSubmit" :disabled="!form.checked">Submit</el-button>
        <el-button @click="reset">reset</el-button>
      </el-form-item>
    </el-form>
    <el-dialog
      title="Order Review"
      :visible.sync="reviewDia"
      width="600px"
      class="dia"
      :before-close="handleClose">
      <h3 >Please check all the contents below. If any items are incorrect, please go back to the form and update before submitting.</h3>
    <el-form  size="small" :model="reviewForm" label-width="auto" label-position="top">
      <el-row :gutter="20" style="border-bottom:1px dashed #000">
        <el-col :span='12'>
          <el-form-item label="Business name:">
            {{form.businessName}}
          </el-form-item>
        </el-col>
        <el-col :span='12'>
          <el-form-item label="Contact name:">
            {{form.firstName + ' ' + form.lastName}}
            
      </el-form-item>
        </el-col>
        <el-col :span='12'>
          <el-form-item label="Email address:">
            {{form.email}}
            
      </el-form-item>
        </el-col>
        <el-col :span='12'>
          <el-form-item label="Contact number:">
            {{form.contactNumber}}
        
      </el-form-item>
        </el-col>
        <el-col :span='12'>
          <el-form-item label="Address:">
            {{form.address.addressLine1+','+form.address.addressLine2+','+form.address.stateName+','+form.address.cityName+' '+form.address.postCode}}
        
      </el-form-item>
        </el-col>
        <el-col :span='12'>
          <el-form-item label="ABN:">
            {{form.abn}}
        
      </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span='12'>
      <el-form-item label="Total item:">
        {{'$ ' +reviewForm.item}}
      </el-form-item>
        </el-col>


        <el-col :span='12'>
          <el-form-item label="Total amount (excl. GST):">
        {{'$ ' +reviewForm.exclGst}}
        
      </el-form-item>
        </el-col>

        <el-col :span='12'>
          <el-form-item label="Total GST:">
        {{'$ ' +reviewForm.gst}}
        
      </el-form-item>
        </el-col>

        <el-col :span='12'>
          <el-form-item label="Total amount (incl. GST):">
        {{ '$ ' +reviewForm.inclGst}}
        
      </el-form-item>
        </el-col>
      </el-row>
      

      
      
      
    </el-form>
    <el-table
    	
      :data="reviewData"
      style="width: 100%">
      <el-table-column
        prop="productModel"
        label="Product model"
        width="180">
      </el-table-column>
      <el-table-column
        prop="serialNumber"
        label="Serial number"
        width="180">
      </el-table-column>
      <el-table-column
        prop="type"
        label="Warranty type"
         width="300">
      </el-table-column>
      <el-table-column
        prop="amount"
        label="Amount"
         width="180"
        >
        <template slot-scope="scope">
          {{'$ ' + scope.row.amount}}
        </template>
      </el-table-column>
      <el-table-column
        prop="discount"
        label="Discount"
         width="180">
      </el-table-column>
    </el-table>

      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="reviewDia = false">取 消</el-button>
        <el-button size="small" type="primary" @click="reviewDia = false">确 定</el-button>
      </span>
    </el-dialog>

  </el-container>
</template>

<script>
import Breadcrumb from '../coms/Breadcrumb'
import { productInfo,submitSingle,getAmount,getMaterials,getProductList ,multiplePrice} from '@/api/registration'
import Bus from "../../bus/bus.js";
export default {
  name: "MultipleItems",
  components:{
    Breadcrumb
  },
  data() {
    const formMod = {
      checked1:false,
        submitType: 2,
        country:Bus.dropValue,
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
        products:[],
        productList:[],
        purchaseOrder:'',
        amount:'',
        checked:false,
        type:3,
      };
    return {
      reviewForm:{},
      reviewData:[],
      reviewDia:false,
      submitLoading: false,
      reviewLoading: false,
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
      formMod,
      form: { ...formMod },
      rowData:{},
      devicePower: null,
    };
  },
  methods: {
    openTerm(){
      window.open('../../../sun-portal/static/Sungrow Manufacturer Warranty.pdf')
    },
    disableType(value){
      const arr2 = this.form.productList.map(item=>{
        return item.warrantyType
      })
      console.log(arr2)
      if(arr2.indexOf(value)!=-1){
        return true
      }else{
        return false
      }
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    review(){
      if(this.form.email.length==0){
        this.$message.error('email is required')
      }else{
        if(this.form.contactNumber.length==0){
          this.$message.error('contactNumber is required')
        }else{
          if((this.form.firstName + ' '+this.form.lastName).length==1){
            this.$message.error('contactName is required')
          }else{
            if(!this.form.address.addressLine1 || !this.form.address.addressLine2 || !this.form.address.cityName || !this.form.address.stateName || !this.form.address.postCode){
              this.$message.error('address is required')
            }else{
              if(this.form.productList.length==0){
                this.$message.error(
                  'product list is required'
                )
              }else{
                this.reviewRequest();
              }
            }
          }
        }
      }
    },
    reviewRequest() {
      this.reviewLoading = true;
      multiplePrice(this.form.productList).then(res=>{
        if(res.data.code==1){
          this.reviewLoading = false;
          this.reviewDia = true
          this.reviewData = res.data.data.products
          this.reviewForm = res.data.data
        }else{
          this.reviewLoading = false;
          this.$message.error(res.data.msg)
        }
      }).catch(err=>{
        this.reviewLoading = false;
        console.log(err)
      });
    },
    rowClick(row){
      this.rowData = row
    },
    addRow(type){
      if(type==1){
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
      }else{
        this.form.productList.push(
          {
            serialNumbers:'',
            warrantyType:'',
          }
        )
      }
    },
    delRow(index,type){
      if(type==1){
        this.form.products.splice(index,1)
      } else{
        this.form.productList.splice(index,1)
      }
      this.getAmount();
    },
    getAmount(){
      getProductList(this.form.products.map(i => {
          return {
            ...i,
            devicePower: this.devicePower
          }
        })).then(res=>{
        if(res.data.code==1){
          this.form.products = res.data.data;
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
        getMaterials(this.form.products[index].serialNumber).then(res=>{
          if(res.data.code==1){
            this.form.products[index].productId = res.data.data.id
            this.form.products[index].productModel = res.data.data.productModelValue
            this.form.products[index].deliveryDate = res.data.data.deliveryDate
            this.form.products[index].businessPartner = res.data.data.businessPartner
            this.devicePower = res.data.data.devicePower
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
      params.append('multiple',this.form.checked1)
      this.form.productList.forEach((item, index) => {
        Object.keys(item).forEach(it => {
          params.append(`multipleProduct[${index}].${it}`, item[it]);
        });
      });
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
      this.form = { ...this.formMod };
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
  .dia{
    h3{
      font-style: italic;
      color: #FF7F00
    }
  }
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
