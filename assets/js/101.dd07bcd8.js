(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{666:function(t,e,a){"use strict";a.r(e);var l=a(1),n=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"input-输入框"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-输入框"}},[t._v("#")]),t._v(" Input 输入框 "),a("Common-SourceCodeLink",{attrs:{comp:"input"}})],1),t._v(" "),a("h2",{attrs:{id:"基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[t._v("#")]),t._v(" 基本使用")]),t._v(" "),a("Common-Democode",{attrs:{title:"",description:""}},[a("input-demo1"),t._v(" "),a("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('<template>\n  <a-input\n    v-model="value"\n    placeholder="Basic usage"\n  />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      value: \'张三\',\n    }\n  }\n}\n<\/script>\n')])])])])],1),t._v(" "),a("h2",{attrs:{id:"前缀和后缀"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前缀和后缀"}},[t._v("#")]),t._v(" 前缀和后缀")]),t._v(" "),a("Common-Democode",{attrs:{title:"",description:"在输入框上添加前缀或后缀图标。"}},[a("input-demo2"),t._v(" "),a("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('<template>\n  <a-input v-model="userName" placeholder="Basic usage" style="width: 200px" ref="userNameInput">\n    <a-icon slot="prefix" name="user" />\n    <a-icon v-if="userName" slot="suffix" name="close-circle" @click="emitEmpty" />\n  </a-input>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      userName: ""\n    };\n  },\n  methods: {\n    emitEmpty() {\n      this.$refs.userNameInput.focus();\n      this.userName = "";\n    }\n  }\n};\n<\/script>\n<style>\n.a-icon {\n  cursor: pointer;\n  color: #ccc;\n  transition: color 0.3s;\n  font-size: 12px;\n}\n.a-icon:hover {\n  color: #999;\n}\n.a-icon:active {\n  color: #666;\n}\n</style>\n')])])])])],1),t._v(" "),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("type")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("声明 input 类型，同原生 input 标签的 type 属性")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("text")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("disabled")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否禁用状态")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("false")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("readonly")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否只读状态")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("false")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("value(v-model)")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("输入框内容")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("prefix")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("input 的前缀图标")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("slot")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("suffix")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("input 的后缀图标")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("slot")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])]),t._v(" "),a("h3",{attrs:{id:"事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[t._v("#")]),t._v(" 事件")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("回调参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("change")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("输入框内容变化时的回调")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("function(e)")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("focus")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("输入框聚焦时的回调")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("function(e)")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("blur")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("输入框失去焦点的回调")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("function(e)")])])])])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);