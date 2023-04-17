<template>
 <div class="demo-input" style="margin-top: 15px;">
  <el-input placeholder="请输入内容" v-model="inputValue"  @input="inputChange" class="input-with-select">
    <el-select v-model="select" slot="prepend" placeholder="请选择">
      <el-option label="餐厅名" value="1"></el-option>
      <el-option label="订单号" value="2"></el-option>
      <el-option label="用户电话" value="3"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
</div>
</template>
<script>
export default {
  name:"SelectInput",
  /**
   * 重新定义父组件v-model绑定的数据名称
   * 然后在props在定义接收;
   * 
   * 默认不需要model,props中value属性可以直接获取父组件v-model的值
   * 
  */
   model: {
    prop: 'temp',
    event: 'input'
  },
  props: {
    temp: String,
  },
  data(){
    return {
      inputValue:this.temp,
      select:""
    }
  },
  methods:{
    inputChange(){
      this.$emit('input', this.inputValue)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>