import marked from 'marked'
import Hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
let rendererMD = new marked.Renderer();
marked.setOptions({
  renderer: rendererMD,
  gfm: true,
  tables: true,
  escaped : true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code, lang) {
    return Hljs.highlightAuto(code).value;
  }
});

export default (content) => {

  if (typeof content !== 'string') {
    return ''
  }

  // 返回解析内容
  return marked(content, { rendererMD })
}
