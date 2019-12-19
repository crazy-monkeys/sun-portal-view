<template>
  <el-container class="multipleItems" direction="vertical">
    <Breadcrumb :breadcrumbList='breadcrumbList' />
    <div class="desc">
      <img src="../../../static/reg.jpeg" alt="图片">
    </div>
          
    <el-form v-loading='reviewLoading'  :disabled="submitLoading" size="small" class="form" ref="form" :model="form" label-width="80px" label-position="top">
      <h2>{{ $t('multipleItems.billingDetails.title') }}</h2>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item :label="$t('multipleItems.billingDetails.type')">
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
          <el-form-item :label="$t('multipleItems.billingDetails.ABN')">
            <el-input v-model="form.abn" :disabled="form.billType=='Individual' ? true :false"></el-input>
          </el-form-item>
        </el-col>
        
        <el-col :span="6">
          <el-form-item :label="$t('multipleItems.billingDetails.businessName')">
            <el-input v-model="form.businessName" :disabled="form.billType=='Individual' ? true :false"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label="$t('multipleItems.billingDetails.addressLine1')">
            <el-input v-model="form.address.addressLine1"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label="$t('multipleItems.billingDetails.addressLine2')">
            <el-input v-model="form.address.addressLine2"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label="$t('multipleItems.billingDetails.cityDistrict')">
            <el-input v-model="form.address.cityName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label="$t('multipleItems.billingDetails.stateProvince')">
            <el-input v-model="form.address.stateName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label="$t('multipleItems.billingDetails.postCode')">
            <el-input v-model="form.address.postCode"></el-input>
          </el-form-item>
        </el-col>
        
      </el-row>


      <h2>{{ $t('multipleItems.contactDetails.title') }}</h2>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item :label="$t('multipleItems.contactDetails.firstName')">
            <el-input v-model="form.firstName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label="$t('multipleItems.contactDetails.lastName')">
            <el-input v-model="form.lastName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label="$t('multipleItems.contactDetails.email')">
            <el-input v-model="form.email" prefix-icon="el-icon-message">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label="$t('multipleItems.contactDetails.confirmYourEmail')">
            <el-input v-model="form.sendEmail" prefix-icon="el-icon-message">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label="$t('multipleItems.contactDetails.contactNumber')">
            <el-input v-model="form.contactNumber"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <h2>{{ $t('multipleItems.productList.title') }}</h2>
      <el-row :gutter="20">
        
      </el-row>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-row >
            <el-col :span="6">
              <el-form-item :label="$t('multipleItems.productList.purchaseOrder')">
                <el-input v-model="form.purchaseOrder"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="24">
          <el-form-item :label="$t('multipleItems.productList.type')">
            <el-checkbox v-model="form.checked1">{{ $t('multipleItems.productList.TypeContext') }}</el-checkbox>
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
            :label="$t('multipleItems.productList.singleInverter.serialNumber')"
            width="">
            <template slot-scope="scope">
              <el-form-item label="">
                <el-input v-model="scope.row.serialNumber" size="small"  @change="getProductInfo(scope.$index)"></el-input>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column
            prop=""
            :label="$t('multipleItems.productList.singleInverter.productModel')"
            width="">
            <template slot-scope="scope">
              <el-form-item label="">
                <el-input v-model="scope.row.productModel" disabled size="small" :readonly="true"></el-input>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column
            prop=""
            :label="$t('multipleItems.productList.singleInverter.warrantyType')">
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
          <!-- <el-table-column
            prop="amount"
            label="Amount"> -->
            <!-- <template slot-scope="scope">
              <el-form-item label="">
                <el-input v-model="scope.row.amount" size="small" :readonly="true"></el-input>
              </el-form-item>
            </template> -->
          <!-- </el-table-column> -->
          <el-table-column
            prop=""
            :label="$t('multipleItems.productList.singleInverter.amount')">
            <template slot="header" slot-scope="scope">
                <el-button size="small" type='text' @click="addRow(1)">{{ $t('multipleItems.productList.singleInverter.add') }}</el-button>
           </template>
            <template slot-scope="scope">
                <el-button
                  size="small"
                  type="text"
                  @click="delRow(scope.$index,1)">{{ $t('multipleItems.productList.singleInverter.delete') }}</el-button>
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
            :label="$t('multipleItems.productList.multipleInverters.warrantyType')">
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
            :label="$t('multipleItems.productList.multipleInverters.serialNumberList')"
            width="">
            <template slot-scope="scope">
              <el-form-item label="">
                <el-input :placeholder='$t('multipleItems.productList.multipleInverters.serialNumberListPlaceholder')' type="textarea" resize="none" :rows='4' v-model="scope.row.serialNumbers" size="small"  ></el-input>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column
            prop=""
            label="Amount">
            <template slot="header" slot-scope="scope">
                <el-button size="small" type='text' @click="addRow(2)">{{ $t('multipleItems.productList.multipleInverters.add') }}</el-button>
           </template>
            <template slot-scope="scope">
               <el-button
                size="small"
                type="text"
                @click="delRow(scope.$index,2)">{{ $t('multipleItems.productList.multipleInverters.delete') }}</el-button>
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
            <el-checkbox v-model="form.checked">
              <i18n path="multipleItems.toTerm" tag="label" for="multipleItems.tos">
                <el-button type="text" @click="openTerm">{{ $t('multipleItems.tos') }}</el-button> 
              </i18n>
            </el-checkbox>
        </el-col>
      </el-row>
      
      <el-form-item class="sub">
        <el-button v-if="form.checked1" type="primary" @click="review" :loading="reviewLoading">{{ $t('multipleItems.reView') }}</el-button>
        <el-button type="primary" @click="onSubmit" :disabled="!form.checked">{{ $t('multipleItems.submit') }}</el-button>
        <el-button @click="reset">{{ $t('multipleItems.reset') }}</el-button>
      </el-form-item>
    </el-form>
    <el-dialog
      :title="$t('multipleItems.OrderReview.title')"
      :visible.sync="reviewDia"
      width="600px"
      class="dia"
      :before-close="handleClose">
      <h3 >{{ $t('multipleItems.OrderReview.headerTxt') }}</h3>
    <el-form  size="small" :model="reviewForm" label-width="auto" label-position="top">
      <el-row :gutter="20" style="border-bottom:1px dashed #000">
        <el-col :span='12'>
          <el-form-item :label="$t('multipleItems.OrderReview.form.businessName')">
            {{form.businessName}}
          </el-form-item>
        </el-col>
        <el-col :span='12'>
          <el-form-item :label="$t('multipleItems.OrderReview.form.ContactName')">
            {{form.firstName + ' ' + form.lastName}}
            
      </el-form-item>
        </el-col>
        <el-col :span='12'>
          <el-form-item :label="$t('multipleItems.OrderReview.form.emailAddress')">
            {{form.email}}
            
      </el-form-item>
        </el-col>
        <el-col :span='12'>
          <el-form-item :label="$t('multipleItems.OrderReview.form.contactNumber')">
            {{form.contactNumber}}
        
      </el-form-item>
        </el-col>
        <el-col :span='12'>
          <el-form-item :label="$t('multipleItems.OrderReview.form.address')">
            {{form.address.addressLine1+','+form.address.addressLine2+','+form.address.stateName+','+form.address.cityName+' '+form.address.postCode}}
        
      </el-form-item>
        </el-col>
        <el-col :span='12'>
          <el-form-item :label="$t('multipleItems.OrderReview.form.ABN')">
            {{form.abn}}
        
      </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span='12'>
      <el-form-item :label="$t('multipleItems.OrderReview.form.totalItem')">
        {{'$ ' +reviewForm.item}}
      </el-form-item>
        </el-col>


        <el-col :span='12'>
          <el-form-item :label="$t('multipleItems.OrderReview.form.totalAmount1')">
        {{'$ ' +reviewForm.exclGst}}
        
      </el-form-item>
        </el-col>

        <el-col :span='12'>
          <el-form-item :label="$t('multipleItems.OrderReview.form.totalGST')">
        {{'$ ' +reviewForm.gst}}
        
      </el-form-item>
        </el-col>

        <el-col :span='12'>
          <el-form-item :label="$t('multipleItems.OrderReview.form.totalAmount2')">
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
        :label="$t('multipleItems.OrderReview.table.productModel')"
        width="180">
      </el-table-column>
      <el-table-column
        prop="serialNumber"
        :label="$t('multipleItems.OrderReview.table.serialNumber')"
        width="180">
      </el-table-column>
      <el-table-column
        prop="type"
        :label="$t('multipleItems.OrderReview.table.warrantyType')"
         width="300">
      </el-table-column>
      <el-table-column
        prop="amount"
        :label="$t('multipleItems.OrderReview.table.discount')"
         width="180"
        >
        <template slot-scope="scope">
          {{'$ ' + scope.row.amount}}
        </template>
      </el-table-column>
      <el-table-column
        prop="discount"
        :label="$t('multipleItems.OrderReview.table.productModel')"
         width="180">
      </el-table-column>
    </el-table>

      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="reviewDia = false">{{ $t('multipleItems.OrderReview.cancel') }}</el-button>
        <el-button size="small" type="primary" @click="reviewDia = false">{{ $t('multipleItems.OrderReview.confirm') }}</el-button>
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
        label: this.$t('multipleItems.billTypes.business')
      },{
        value: 'Individual',
        label: this.$t('multipleItems.billTypes.individual')
      }],
      warrantyTypes:[{
        value: 'W5YP',
        label: this.$t('multipleItems.warrantyTypes.partsWarranty')
      }, {
        value: 'W5YS',
        label: this.$t('multipleItems.warrantyTypes.standard')
      }],
      
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
      window.open(Bus.dropValue =='BR' ?'../../../sun-portal/v/static/01_Politica de Garantia_Rev.3.pdf':'../../../sun-portal/v/static/Sungrow Manufacturer Warranty.pdf');
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
          this.$message.success(this.$t('multipleItems.submitSuccessMsg', [res.data.data]))
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
  computed:{
    breadcrumbList(){
      return [
        {
          path:'/warranty/extension',
          name:this.$t('multipleItems.breadcrumb.warranty')
        },
        {
          path:'/warranty/extension',
          name:this.$t('multipleItems.breadcrumb.extension')
        },
        {
          path:'/warranty/extension/multipleItems',
          name:this.$t('multipleItems.breadcrumb.multipleItems')
        }
      ]
    }
  }
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
