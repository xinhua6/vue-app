webpackJsonp([16],{"+tBs":function(e,t,n){"use strict";t.a=[{name:"form",path:"form",meta:{login:!1,hasFooter:!1},component:function(e){n.e(1).then(function(){return e(n("BeRe"))}.bind(null,n)).catch(n.oe)}}]},"0dS3":function(e,t,n){"use strict";t.a=[{name:"map",path:"map",meta:{login:!1,hasFooter:!1},component:function(e){n.e(9).then(function(){return e(n("t1kT"))}.bind(null,n)).catch(n.oe)}}]},"0xDb":function(e,t,n){"use strict";var o=n("TuU3"),a=n("4/BI"),i=n("3pLw"),c=n("jg9f"),r=n("Thh0"),u={cache:o.a,format:a.a,http:i.a,ui:c.a,version:r.a};t.a=u},"3pLw":function(e,t,n){"use strict";var o=n("UIuv"),a=n.n(o),i=n("3SZ7"),c=n.n(i),r=n("xY2u"),u=n.n(r),s=n("TuU3"),l=u.a.create({method:"post",timeout:6e4,withCredentials:!0,headers:{post:{"Content-Type":"application/x-www-form-urlencoded"}},transformRequest:[function(e){var t="";for(var n in e)t+=encodeURIComponent(n)+"="+encodeURIComponent(e[n])+"&";return t}]});l.interceptors.request.use(function(e){var t=s.a.get("user"),n={head:{url:e.url,debug:!0,userId:t?t.userId:null,token:s.a.get("token")},body:{data:e.data}};return e.url=window.Config.server+e.url,e.data={request:c()(n)},e},function(e){return console.log(e),a.a.reject(e)}),l.interceptors.response.use(function(e){var t=e.data.head.token;return s.a.set("token",t||s.a.get("token")),e},function(e){return console.log(e),a.a.reject(e)}),t.a=l},"4/BI":function(e,t,n){"use strict";Date.prototype.format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"H+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in t)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[n]:("00"+t[n]).substr((""+t[n]).length)));return e};var o={toDate:function(e,t){return t||(t="yyyy-MM-dd HH:mm:ss"),e.format(t)},parseDate:function(e){return new Date(e.replace("-","/"))}};t.a=o},"48zQ":function(e,t,n){"use strict";function o(e){n("Fjdi")}var a=n("fPAy"),i=n("dCUc"),c=n("25r8"),r=o,u=c(a.a,i.a,r,null,null);t.a=u.exports},"5dKJ":function(e,t,n){"use strict";t.a=[{name:"list",path:"list",meta:{login:!1,hasFooter:!1},component:function(e){n.e(10).then(function(){return e(n("X5+7"))}.bind(null,n)).catch(n.oe)}}]},"8RzN":function(e,t,n){"use strict";t.a=[{name:"chat",path:"chat",meta:{login:!1,hasFooter:!1},component:function(e){n.e(3).then(function(){return e(n("T5Y6"))}.bind(null,n)).catch(n.oe)}}]},B17L:function(e,t,n){"use strict";t.a=[{name:"contact",path:"contact",meta:{login:!1,hasFooter:!1},component:function(e){n.e(11).then(function(){return e(n("+/HG"))}.bind(null,n)).catch(n.oe)}}]},C9LJ:function(e,t,n){"use strict";var o,a=n("u6qr"),i=n.n(a),c=n("WxFH"),r=n.n(c),u=n("0xDb"),s=["LOGIN","LOGOUT","TOGGLE_HEADER","TOGGLE_FOOTER","TOGGLE_TABS","TOGGLE_LOADING","TOGGLE_POPUP","UPDATE_VERSION"],l={},m=!0,p=!1,h=void 0;try{for(var f,d=i()(s);!(m=(f=d.next()).done);m=!0){var g=f.value;l[g]=g}}catch(e){p=!0,h=e}finally{try{!m&&d.return&&d.return()}finally{if(p)throw h}}var _={app:{version:u.a.cache.get("version")||"未知"},ui:{hasHeader:!1,hasFooter:!0,fixFooter:!0,hasTabs:!1,loading:!1,popupTop:!1,popupText:"",popupDuration:null},user:u.a.cache.get("user"),userSetting:u.a.cache.get("userSetting")};alert(u.a.cache.get("version")),alert(_.app.version);var b={hasHeader:function(){return _.ui.hasHeader},hasFooter:function(){return _.ui.hasFooter},fixFooter:function(){return _.ui.fixFooter},hasTabs:function(){return _.ui.hasTabs},isLoading:function(){return _.ui.loading},getVersion:function(){return _.app.version}},v={},T=(o={},r()(o,l.UPDATE_VERSION,function(e,t){u.a.cache.set("version",t),e.app.version=t}),r()(o,l.LOGIN,function(e,t){u.a.cache.set("user",t.user),u.a.cache.set("userSetting",t.userSetting),e.user=t.user,e.userSetting=t.userSetting}),r()(o,l.LOGOUT,function(e){u.a.cache.clear(),e.user=null,e.userSetting=null}),r()(o,l.TOGGLE_HEADER,function(e,t){e.ui.hasHeader=t}),r()(o,l.TOGGLE_FOOTER,function(e,t){e.ui.hasFooter=t}),r()(o,l.TOGGLE_TABS,function(e,t){e.ui.hasTabs=t}),r()(o,l.TOGGLE_LOADING,function(e,t){e.ui.loading=t}),r()(o,l.TOGGLE_POPUP,function(e,t){e.ui.popupTop=t.visible,e.ui.popupText=t.text,t.duration&&setTimeout(function(){e.ui.popupTop=!1,e.ui.popupText="",e.ui.popupDuration=null},t.duration)}),o);t.a={state:_,getters:b,actions:v,mutations:T}},Fjdi:function(e,t){},IqcW:function(e,t,n){"use strict";t.a=[{name:"dialog",path:"dialog",meta:{login:!1,hasFooter:!1},component:function(e){n.e(4).then(function(){return e(n("A6/F"))}.bind(null,n)).catch(n.oe)}}]},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("34v0"),a=n.n(o),i=n("iDdd"),c=n.n(i),r=n("gt1m"),u=n("48zQ"),s=n("YaEn"),l=n("YtJ0"),m=n("lekb"),p=(n.n(m),n("WEav")),h=(n.n(p),n("0xDb")),f=n("PphD"),d=n("wFu8");n.n(d);window.Config={server:"http://localhost:8080/lxt-server",appUrl:"https://chenjia.github.io/vue-app/demo/index.html",chcpUrl:"https://chenjia.github.io/vue-app/demo/chcp.json"},r.default.component(d.Actionsheet.name,d.Actionsheet),r.default.component(d.Badge.name,d.Badge),r.default.component(d.Button.name,d.Button),r.default.component(d.Cell.name,d.Cell),r.default.component(d.CellSwipe.name,d.CellSwipe),r.default.component(d.Checklist.name,d.Checklist),r.default.component(d.DatetimePicker.name,d.DatetimePicker),r.default.component(d.Field.name,d.Field),r.default.component(d.Header.name,d.Header),r.default.component(d.IndexList.name,d.IndexList),r.default.component(d.IndexSection.name,d.IndexSection),r.default.component(d.Loadmore.name,d.Loadmore),r.default.component(d.Popup.name,d.Popup),r.default.component(d.Progress.name,d.Progress),r.default.component(d.Radio.name,d.Radio),r.default.component(d.Range.name,d.Range),r.default.component(d.Search.name,d.Search),r.default.component(d.Spinner.name,d.Spinner),r.default.component(d.Swipe.name,d.Swipe),r.default.component(d.SwipeItem.name,d.SwipeItem),r.default.component(d.Switch.name,d.Switch),r.default.component(d.Tabbar.name,d.Tabbar),r.default.component(d.TabContainer.name,d.TabContainer),r.default.component(d.TabContainerItem.name,d.TabContainerItem),r.default.component(d.TabItem.name,d.TabItem),r.default.config.productionTip=!1,window.utils=h.a,r.default.mixin({data:function(){return{screenWidth:document.documentElement.clientWidth,screenHeight:document.documentElement.clientHeight}},methods:a()({go:function(e){this.$router.push(e)},back:function(){s.a.goBack()}},n.i(f.a)({toggleHeader:"TOGGLE_HEADER",toggleFooter:"TOGGLE_FOOTER",toggleLoading:"TOGGLE_LOADING"}))}),new r.default({el:"#app",router:s.a,store:l.a,template:"<App/>",components:{App:u.a}}),c.a.attach(document.body)},P25B:function(e,t,n){"use strict";t.a=[{name:"video",path:"video",meta:{login:!1,hasFooter:!1},component:function(e){n.e(13).then(function(){return e(n("AmbE"))}.bind(null,n)).catch(n.oe)}}]},QNKx:function(e,t,n){"use strict";t.a=[{name:"login",path:"login",meta:{login:!1,hasFooter:!0},component:function(e){n.e(14).then(function(){e(n("NaOX")),n.e(2).then(function(){n("h6qm")}).catch(n.oe)}.bind(null,n)).catch(n.oe)}}]},RN31:function(e,t,n){"use strict";t.a=[{name:"chart",path:"chart",meta:{login:!1,hasFooter:!1},component:function(e){n.e(0).then(function(){return e(n("M+8D"))}.bind(null,n)).catch(n.oe)}}]},RTGF:function(e,t,n){"use strict";t.a=[{name:"lock",path:"lock",meta:{login:!1,hasFooter:!1},component:function(e){n.e(6).then(function(){return e(n("PMpZ"))}.bind(null,n)).catch(n.oe)}}]},Thh0:function(e,t,n){"use strict";var o=n("YtJ0"),a=(n("TuU3"),n("wFu8")),i=(n.n(a),{check:function(){var e=this;window.chcp&&(o.a.commit("TOGGLE_POPUP",{visible:!0,text:"正在检测新版本"}),chcp.getVersionInfo(function(t,i){chcp.fetchUpdate(function(t,c){var r=JSON.parse(c.config);r.native_version!=window.native_version?(o.a.commit("TOGGLE_POPUP",{visible:!0,text:"当前版本过低，请安装最新版本"}),alert("当前版本过低，请安装最新版本"),window.open(Config.appUrl)):t?(console.log(t),2==t.code?o.a.commit("TOGGLE_POPUP",{visible:!0,text:"已经更新为最新版本",duration:1e3}):(o.a.commit("TOGGLE_POPUP",{visible:!0,text:"更新包获取失败"}),setTimeout(function(){o.a.commit("TOGGLE_POPUP",{visible:!1,text:""})},5e3))):r.release!=i.currentWebVersion&&(n.i(a.MessageBox)("版本提示（"+r.release+"）",r.description).then(function(t){e.install(i)}),document.querySelector(".mint-msgbox-message").style.textAlign="left")},{"config-file":Config.chcpUrl})}))},install:function(e){o.a.commit("TOGGLE_POPUP",{visible:!0,text:"正在安装新版本"}),chcp.installUpdate(function(t){t?o.a.commit("TOGGLE_POPUP",{visible:!0,text:"更新包安装失败"}):(alert("install:"+e.currentWebVersion),o.a.commit("UPDATE_VERSION",e.currentWebVersion),o.a.commit("TOGGLE_POPUP",{visible:!0,text:"已经更新为最新版本",duration:1e3}))})}});document.addEventListener("deviceready",function(){},!1),t.a=i},TuU3:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__=__webpack_require__("3SZ7"),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__),cache={set:function(e,t){"string"==typeof t?localStorage.setItem(e,t):localStorage.setItem(e,__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(t))},get:function get(key){var value=localStorage.getItem(key);if(value&&("{"==value.substr(0,1)||"["==value.substr(0,1)))try{value=eval("("+value+")")}catch(e){console.log("error in get cache key:"+key+", value:"+value)}return value},removeItem:function(e){localStorage.removeItem(e)},clear:function(){localStorage.clear()}};__webpack_exports__.a=cache},WEav:function(e,t){},YaEn:function(e,t,n){"use strict";var o=n("Sxqw"),a=n.n(o),i=n("gt1m"),c=n("nYn5"),r=n("YtJ0"),u=n("QNKx"),s=n("roEk"),l=n("5dKJ"),m=n("RN31"),p=n("B17L"),h=n("+tBs"),f=n("lteJ"),d=n("RTGF"),g=n("u9Kv"),_=n("oz5U"),b=n("0dS3"),v=n("IqcW"),T=n("8RzN"),E=n("P25B");i.default.use(c.a),c.a.prototype.goBack=function(){this.isBack=!0,window.history.go(-1)};var O=new c.a({routes:[{path:"/",redirect:"/page/login"},{path:"/page",component:function(e){n.e(12).then(function(){return e(n("Xk10"))}.bind(null,n)).catch(n.oe)},children:[].concat(a()(u.a),a()(s.a),a()(l.a),a()(m.a),a()(p.a),a()(h.a),a()(f.a),a()(d.a),a()(g.a),a()(_.a),a()(b.a),a()(v.a),a()(T.a),a()(E.a))}]});O.beforeEach(function(e,t,n){r.a.commit("TOGGLE_HEADER",0!=e.meta.hasHeader),r.a.commit("TOGGLE_FOOTER",0!=e.meta.hasFooter),r.a.commit("TOGGLE_TABS",1==e.meta.hasTabs),0==e.meta.login||r.a.state.common.user?n():(r.a.commit("TOGGLE_TOAST",{toast:!0,toastMsg:"请先登录！"}),n("/page/login"))}),O.afterEach(function(e,t){var n=document.querySelector(".loader-box");-1===n.className.indexOf("fadeOut")&&(n.className+=" fadeOut",setTimeout(function(){n.style.display="none"},500))}),t.a=O},YtJ0:function(e,t,n){"use strict";var o=n("gt1m"),a=n("PphD"),i=n("C9LJ");o.default.use(a.c),t.a=new a.c.Store({modules:{common:i.a}})},dCUc:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition",{attrs:{name:"slide-up",mode:"out-in"}},[n("mt-header",{directives:[{name:"show",rawName:"v-show",value:e.hasHeader,expression:"hasHeader"}],staticStyle:{position:"absolute",top:"0",width:"100%"}})],1),e._v(" "),n("router-view"),e._v(" "),n("transition",{attrs:{name:"slide-y",mode:"out-in"}},[n("mt-tabbar",{directives:[{name:"show",rawName:"v-show",value:e.hasTabs,expression:"hasTabs"}],attrs:{fixed:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},e._l(e.tabs,function(t,o){return n("mt-tab-item",{key:o,attrs:{id:t.id}},[n("i",{staticClass:"fa",class:t.icon,staticStyle:{"font-size":"24px"},attrs:{slot:"icon"},slot:"icon"}),e._v("\n        "+e._s(t.text)+"\n      ")])}))],1),e._v(" "),n("mt-popup",{staticStyle:{width:"100%",height:"50px","line-height":"50px",color:"#fff","text-align":"center",background:"rgba(0,0,0,0.5)"},attrs:{closeOnClickModal:!1,position:"top",modal:!0},model:{value:e.$store.state.common.ui.popupTop,callback:function(t){e.$store.state.common.ui.popupTop=t},expression:"$store.state.common.ui.popupTop"}},[e._v("\n    "+e._s(e.$store.state.common.ui.popupText)+"\n  ")])],1)},a=[],i={render:o,staticRenderFns:a};t.a=i},fPAy:function(e,t,n){"use strict";var o=n("34v0"),a=n.n(o),i=n("PphD");t.a={name:"app",data:function(){return{transitionName:"animate-in",tab:"home",tabs:[{id:"home",icon:"fa-home",text:"首页",url:"/page/home"},{id:"contacts",icon:"fa-address-book-o",text:"联系人",url:"/page/home"},{id:"message",icon:"fa-envelope-o",text:"消息",url:"/page/home"},{id:"user",icon:"fa-cog",text:"设置",url:"/page/home"}]}},computed:a()({},n.i(i.b)(["hasHeader","hasTabs","hasFooter","fixFooter","isLoading"]))}},jg9f:function(e,t,n){"use strict";var o={modal:function(e){var t;return{afterOpen:function(){t=document.scrollingElement.scrollTop,document.body.classList.add("modal-open"),document.body.style.top=-t+"px"},beforeClose:function(){document.body.classList.remove("modal-open"),document.scrollingElement.scrollTop=t}}}()};t.a=o},lekb:function(e,t){},lteJ:function(e,t,n){"use strict";t.a=[{name:"tab",path:"tab",meta:{login:!1,hasFooter:!1},component:function(e){n.e(8).then(function(){return e(n("sVk2"))}.bind(null,n)).catch(n.oe)}}]},oz5U:function(e,t,n){"use strict";t.a=[{name:"loading",path:"loading",meta:{login:!1,hasFooter:!1},component:function(e){n.e(7).then(function(){return e(n("hGVa"))}.bind(null,n)).catch(n.oe)}}]},roEk:function(e,t,n){"use strict";t.a=[{name:"home",path:"home",meta:{login:!1,hasFooter:!1,hasTabs:!0},component:function(e){n.e(2).then(function(){return e(n("h6qm"))}.bind(null,n)).catch(n.oe),setTimeout(function(){n.e(5).then(function(){n("F3mG")}).catch(n.oe),n.e(0).then(function(){n("M+8D")}).catch(n.oe),n.e(3).then(function(){n("T5Y6")}).catch(n.oe),n.e(11).then(function(){n("+/HG")}).catch(n.oe),n.e(4).then(function(){n("A6/F")}).catch(n.oe),n.e(1).then(function(){n("BeRe")}).catch(n.oe),n.e(10).then(function(){n("X5+7")}).catch(n.oe),n.e(7).then(function(){n("hGVa")}).catch(n.oe),n.e(6).then(function(){n("PMpZ")}).catch(n.oe),n.e(9).then(function(){n("t1kT")}).catch(n.oe),n.e(8).then(function(){n("sVk2")}).catch(n.oe)},500)}}]},u9Kv:function(e,t,n){"use strict";t.a=[{name:"calendar",path:"calendar",meta:{login:!1,hasFooter:!1},component:function(e){n.e(5).then(function(){return e(n("F3mG"))}.bind(null,n)).catch(n.oe)}}]}},["NHnr"]);