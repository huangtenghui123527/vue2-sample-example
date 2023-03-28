import Vue from 'vue'
import VueMarkdownEditor from '@kangc/v-md-editor';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';
import Prism from 'prismjs';
console.log("Prism",Prism);

import '@kangc/v-md-editor/lib/style/base-editor.css';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});
VueMarkdownEditor.use(createLineNumbertPlugin());

Vue.use(VueMarkdownEditor);