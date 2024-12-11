<template>
  <div>
    
    <button @click="updateObj">更新对象</button>
    <button @click="updateArray">更新数组</button>
    <div>{{ objItem.name }}-{{ objItem.age }}-{{ objItem.amount }}</div>
    <!-- <span>{{ objItem.name }}-{{ objItem.other }}</span> -->
    <div v-for="item of arrays1" :key="item.count">{{ item.count }}</div>
    <div v-for="(item,index) of arrays2" :key="index+'a2'">{{ item }}</div>
    <div v-for="(item,index) of arrays3" :key="index">{{ item }}</div>
  </div>
</template>
<script>

// import Tinymce from "@/components/Tinymce"
export default {
  // components:{Tinymce},
  data(){
    return {
      objItem:{
        name:'test_hth',
        // age:'test_hth',
      },
      arrays1:[
        {count:'count1'},
        {count:'count2'},
        {count:'count3'},
      ],
      arrays2:[
        'test1','test2','test3'
      ],
      arrays3:[
        1,2,3
      ],
    }
  },
  methods:{
    updateObj(){
      this.objItem.age = "age"    //非响应式

      this.objItem['name'] = "name_change";
      
      // this.objItem.amount = "amount"    //非响应式
      // this.$set(this.objItem,'amount','amount')

    },
    updateArray(){
      for(let i =0;i<1000;i++){
        this.arrays3[i] = {
          count:'众人寿+'+i
        }
      }
      // console.log(this.objItem);
      // this.arrays1[1].count = 'class';
      this.arrays2[5] = 'test5';
      this.arrays3[2] = 5;

      console.log('this.arrays2',this.arrays3,this.arrays2);
    
    },
  },
  created(){
    // this.updateArray();

  },
  mounted(){
    console.log(this);
    
    // this.objItem.age = "age"    //非响应式
    // this.objItem.name = "轻松"  //响应式
    // this.objItem.other = 'other'

    // this.$set(this.objItem,'name','hth')

    // this.arrays[1] = 'class';
    // this.arrays.push('d')
    // this.arrays.length = 5
    // this.arrays[4] = 'class';


    // console.log(this.arrays);
    
  }
  // methods:{
  //   customInput(data){
  //     console.log(data)
  //   }
  // }
}
</script>