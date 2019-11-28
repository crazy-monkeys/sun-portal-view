<template>
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item v-for="(item ,index) in  breadcrumbList" :key="index" :to="{ path: item.path }">{{ item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {
  name: "Breadcrumb",
  props:{
      breadcrumbList:{
          default:[],
          type:Array
      }
  },
  data() {
    return {
      
    };
  },
  methods: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  .breadcrumb{
    padding: 10px;
  }
</style>
