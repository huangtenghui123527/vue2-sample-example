<template>
  <div class="rich-txt">
    <h2>富文本编辑</h2>
      <!-- v-model="orderInstructions" -->
    <Tinymce
      :tinymce-id="0"
      @input="customInput"
    />

    <h4 class="rich-title">文本内容</h4>
    <div class="rich-content">{{orderInstructions}}</div>
  </div>
</template>
<script>
import Tinymce from "@/components/Tinymce"
export default {
  components:{Tinymce},
  data(){
    return {
      orderInstructions:"",
    }
  },
  methods:{
    customInput(data){
      // console.log(this.orderInstructions)
      this.orderInstructions = data
    }
  }
}
</script>
<style lang="scss" scoped>
  h2,h4{
    padding: 10px;
  }
  .rich-content{
    width: 100%;
    height: 280px;
    overflow-y: auto;
    padding: 15px;
    box-sizing: border-box;
    word-break:break-all;
    background-color:rgba(218, 234, 238,0.35);
    border-radius: 5px;
  }
</style>