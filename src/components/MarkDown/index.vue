<template>
  <div class="mark-down">
    <div class="md-warp">
            
     <v-md-editor 
      v-model="text" height="600px" 
      :disabled-menus="[]"
      @change="mdChange"
      @save="mdSave"
      @upload-image="uploadImage"
     ></v-md-editor>
    </div>
    <a href="http://ckang1229.gitee.io/vue-markdown-editor/zh/" target="_blank">v-md-editor 是基于 Vue 开发的 markdown 编辑器组件</a>
  </div>
</template>
<script>
export default {
  name:"MarkDown",
  data(){
    return {
      text:`\`\`\`js
import Vue from 'vue';
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';

VueMarkdownEditor.use(vuepressTheme);

Vue.use(VueMarkdownEditor);
\`\`\`
`,
    }
  },
  methods:{
    /**
     * 文本修改更新
     * @text
    */
    mdChange(text){
      console.log(text);
    },
    /**
     * 保存修改更新
     * @text
     * @html
    */
    mdSave(text, html){
      console.log("text",text);
      console.log("html",html);
    },
    uploadImage(event, insertImage, files){
      console.log("event",event);
      console.log("insertImage",insertImage);
        // 拿到 files 之后上传到文件服务器，然后向编辑框中插入对应的内容
      console.log(files);

      // 此处只做示例
      insertImage({
        url:
          'https://hbimg.b0.upaiyun.com/4ee5266e3601c72350bc90befce70465bb080504399e5-YXLvkV_fw658',
        desc: '七龙珠',
        // width: 'auto',
        // height: 'auto',
      });
    }
  }
}
</script>
<style lang="scss" scoped>
.mark-down{
  width: 100%;
  .md-warp{
    width: 100%;
    border: 1px solid #cfcfcf;
    box-sizing: border-box;
    margin-bottom: 15px;
  }
}
</style>