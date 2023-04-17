<template>
  <div>
    <h2>v-model实现父子组件实现双向数据绑定</h2>
    <SelectInput v-model="currentVal"/>
    <div>{{currentVal}}</div>
  </div>
</template>
<script>
import SelectInput from "@/components/SelectInput"
export default {
  components:{SelectInput},
  data(){
    return {
      currentVal:"请输入信息"
    }
  },
  mounted(){
  }
}
</script>