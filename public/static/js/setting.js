webpackJsonp([17],{"+6Nj":function(t,_,e){"use strict";var i=function(){var t=this,_=t.$createElement,i=t._self._c||_;return i("div",{staticStyle:{position:"absolute","overflow-y":"auto",background:"#eee",width:"100%",height:"100%"}},[i("mt-header",{attrs:{title:"设置"}},[i("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:t.back},slot:"left"},[i("span",[t._v("返回")])])],1),t._v(" "),i("div",{staticClass:"list-group"},[i("mt-cell",{attrs:{"is-link":""}},[i("span",{attrs:{slot:"title"},slot:"title"},[t._v("账号："+t._s(t.$store.state.common.user.username))]),t._v(" "),i("img",{attrs:{slot:"icon",src:e("ZBJ4"),width:"24",height:"24"},slot:"icon"})])],1),t._v(" "),i("div",{staticClass:"list-group"},[i("mt-cell",{attrs:{title:"账号与安全","is-link":""}})],1),t._v(" "),i("div",{staticClass:"list-group"},[i("mt-cell",{attrs:{title:"新消息通知","is-link":""}}),t._v(" "),i("mt-cell",{attrs:{title:"隐私","is-link":""},nativeOn:{click:function(_){t.showUserAgent()}}}),t._v(" "),i("mt-cell",{attrs:{title:"通用","is-link":""}}),t._v(" "),i("mt-cell",{attrs:{title:"调试","is-link":""},nativeOn:{click:function(_){t.debug()}}})],1),t._v(" "),i("div",{staticClass:"list-group"},[i("mt-cell",{attrs:{title:"关于app","is-link":""},nativeOn:{click:function(_){t.go("about")}}})],1),t._v(" "),i("div",{staticStyle:{padding:"20px"}},[i("mt-button",{attrs:{type:"danger",size:"large"},on:{click:function(_){t.logout()}}},[t._v("退出登录")])],1),t._v(" "),i("div",{staticClass:"pd-md"},[t._v("\n    "+t._s(t.userAgent)+"\n  ")])],1)},s=[],n={render:i,staticRenderFns:s};_.a=n},"1Gtm":function(t,_,e){"use strict";function i(t){e("MD9J")}Object.defineProperty(_,"__esModule",{value:!0});var s=e("RrLU"),n=e("+6Nj"),a=e("C7Lr"),l=i,o=a(s.a,n.a,!1,l,"data-v-5f1e260b",null);_.default=o.exports},MD9J:function(t,_,e){var i=e("O7mG");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("FIqI")("711571a8",i,!0,{})},O7mG:function(t,_,e){_=t.exports=e("UTlt")(!1),_.push([t.i,".list-group[data-v-5f1e260b]{padding-top:15px}",""])},RrLU:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_mint_ui_lib_message_box_style_css__=__webpack_require__("yvAY"),__WEBPACK_IMPORTED_MODULE_0_mint_ui_lib_message_box_style_css___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mint_ui_lib_message_box_style_css__),__WEBPACK_IMPORTED_MODULE_1_mint_ui_lib_message_box__=__webpack_require__("fc0N"),__WEBPACK_IMPORTED_MODULE_1_mint_ui_lib_message_box___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mint_ui_lib_message_box__),__WEBPACK_IMPORTED_MODULE_2_axios__=__webpack_require__("BMa3"),__WEBPACK_IMPORTED_MODULE_2_axios___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);__webpack_exports__.a={name:"setting",data:function(){return{user:utils.cache.get("user")||{userId:""},userAgent:null}},methods:{logout:function(){var t=this;__WEBPACK_IMPORTED_MODULE_1_mint_ui_lib_message_box___default.a.confirm("确定要退出登录吗?","确认退出").then(function(_){t.go("login")},function(t){console.log(t)})},debug:function debug(){window.eruda||__WEBPACK_IMPORTED_MODULE_2_axios___default()({method:"get",url:"http://cdn.jsdelivr.net/npm/eruda",responseType:"application/script"}).then(function(response){eval(response.data),eruda.init()})},showUserAgent:function(){this.userAgent=navigator.userAgent}},mounted:function(){}}},ZBJ4:function(t,_,e){t.exports=e.p+"static/img/logo.png"}});