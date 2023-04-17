<template>
  <div class="mark-down">
    <div class="md-warp clearfix">
      <div class="md-file-nav fl">
        <div class="md-file-new">新建</div>
      </div>
            

      <div class="md-editor fl">
          <v-md-editor 
            v-model="text" height="600px" 
            right-toolbar="preview sync-scroll customToolbar | fullscreen"
            :disabled-menus="[]"
            :toolbar="toolbar"
            @change="mdChange"
            @save="mdSave"
            @upload-image="uploadImage"
          ></v-md-editor>
      </div>
    </div>
    <a href="http://ckang1229.gitee.io/vue-markdown-editor/zh/" target="_blank">v-md-editor 是基于 Vue 开发的 markdown 编辑器组件</a>
  </div>
</template>
<script>
export default {
  name:"MarkDown",
  data(){
    return {
       toolbar: {
        customToolbar: {
          title: '自定义目录',
          icon: 'v-md-icon-toc',
          action(editor) {
            // toolbar点击时触发的函数
            console.log("editor",editor);
            //  editor.insert(function (selected) {
            //   const prefix = '(((';
            //   const suffix = ')))';
            //   const placeholder = '请输入文本';
            //   const content = selected || placeholder;

            //   return {
            //     text: `${prefix}${content}${suffix}`,
            //     selected: content,
            //   };
            // });
          },
        },
      },
      text:`
  ## 标题
\`\`\`js
import Vue from 'vue'
import VueMarkdownEditor from '@kangc/v-md-editor';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';
import Prism from 'prismjs';

import '@kangc/v-md-editor/lib/style/base-editor.css';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});
VueMarkdownEditor.use(createLineNumbertPlugin());

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
    
    border: 1px solid #cfcfcf;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 15px;
    // box-shadow: 0 2px 12px 0 rgba(196, 196, 196, 24%);
    .md-file-nav{
      width: 150px;
      height: 600px;
      position: relative;
      .md-file-new{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 5px 0;
        cursor: pointer;
        text-align: center;
        color: #545454;
        font-size: 16px;
        border-top: 1px solid #cfcfcf;
      }
    }
    .md-editor{
      width: calc(100% - 150px);
    }
  }
}
</style>