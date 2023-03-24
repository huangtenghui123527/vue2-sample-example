<template>
  <div class="header">
    <div class="header-log">
      <img alt="Vue logo" src="@/assets/logo.png">
      <h1>JINHUI</h1>
    </div>
    <div class="header-tab clearfix">
      <ul class="fr clearfix">
        <li class="fl" >
          <a href="https://github.com/huangtenghui123527/huangthWeb" target="_blank">
            <img class="h-github" src="https://b.yzcdn.cn/vant/logo/github.svg">
          </a>
        </li>
        <li class="fl">
          <span>用户名:</span>
          <span>admin</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name:"Header",
  data(){
    return{
      users:[{
        id:"001",
        name:"用户",
        value:"admin"
      },{
        id:"002",
        name:"github",
        value:"https://b.yzcdn.cn/vant/logo/github.svg"
      }]
    }
  }
}
</script>
<style lang="scss" scoped>
.header{
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #001938;
  display: flex;
  font-size: 16px;
  color: #fff;
  .header-log{
    width: 200px;
    height: 100%;
    text-align: center;
    img{
      width: 30px;
      position: relative;
      top: 5px;
    }
    h1{
      font-size: 28px;
      display: inline-block;
    }
  }
  .header-tab{
    flex-grow: 1;
    text-align: right;
    ul{
      height: 100%;
      li{
        cursor: pointer;
        margin-right: 20px;
        height: 100%;
        a{
          position: relative;
          top: -2px;
          // height: 100%;
          // display: block;
          // display: flex;
          // align-items: center;
        }
      }
      .h-github{
        width: 32px;
        vertical-align:middle;
        // position: relative;
        // top: 5px;
      }
    }
  }
}
</style>