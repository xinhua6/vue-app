webpackJsonp([18],{Kmtg:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:{height:t.screenHeight+"px"}},[a("mt-header",{attrs:{title:"vue-app"}},[a("mt-button",{staticClass:"fa fa-fw fa-home",attrs:{slot:"left"},on:{click:function(e){t.go("home")}},slot:"left"}),t._v(" "),a("mt-button",{staticClass:"fa fa-fw fa-refresh",attrs:{slot:"right"},on:{click:function(e){t.check()}},slot:"right"})],1),t._v(" "),a("div",[a("mt-field",{attrs:{label:"账　号",placeholder:"请输入账号"},model:{value:t.model.username,callback:function(e){t.$set(t.model,"username",e)},expression:"model.username"}}),t._v(" "),a("mt-field",{attrs:{label:"密　码",placeholder:"请输入密码",type:"password"},model:{value:t.model.password,callback:function(e){t.$set(t.model,"password",e)},expression:"model.password"}}),t._v(" "),a("mt-field",{attrs:{label:"验证码",placeholder:"请输入验证码"},model:{value:t.model.captcha,callback:function(e){t.$set(t.model,"captcha",e)},expression:"model.captcha"}},[a("img",{staticStyle:{width:"100px",height:"36px",border:"1px solid #eee"},attrs:{src:t.base64Img},on:{click:t.getCaptcha}})]),t._v(" "),a("div",{staticClass:"pd-md"},[a("mt-button",{attrs:{type:"primary",size:"large"},on:{click:t.login}},[t._v("登　录")])],1),t._v(" "),a("mt-field",{attrs:{label:"服务器地址"},model:{value:t.server,callback:function(e){t.server=e},expression:"server"}}),t._v(" "),a("mt-field",{attrs:{label:"热更新地址"},model:{value:t.chcpUrl,callback:function(e){t.chcpUrl=e},expression:"chcpUrl"}}),t._v(" "),a("div",{staticStyle:{position:"absolute",width:"100%",bottom:"5px",color:"gray","font-size":"12px","text-align":"center"}},[t._v("版本号："+t._s(t.appVersion))])],1)],1)},n=[],c={render:o,staticRenderFns:n};e.a=c},L1Z8:function(t,e,a){"use strict";var o=a("4YfN"),n=a.n(o),c=a("YtJ0"),i=a("wSez"),s=(a.n(i),a("HVJf"));e.a={name:"login",data:function(){return{model:{userId:"admin",username:"admin",password:"admin",captcha:"",captchaToken:""},appVersion:Config.appVersion,server:Config.server,chcpUrl:Config.chcpUrl,base64Img:""}},methods:n()({},a.i(s.a)({doLogin:"LOGIN",doLogout:"LOGOUT"}),{getCaptcha:function(){var t=this;utils.http.post("/api/user/captcha").then(function(e){t.model.captchaToken=e.data.body.data.captchaToken,t.base64Img="data:image/png;base64, "+e.data.body.data.base64Img})},login:function(){var t=this;if(""==this.model.captcha)return void c.a.commit("TOGGLE_POPUP",{visible:!0,text:"验证码不能为空",duration:3e3});i.Indicator.open({text:"登录中"}),utils.http.post("/api/user/login",this.model).then(function(e){i.Indicator.close(),e.data.body.data?(t.doLogin({user:e.data.body.data.user,userSetting:e.data.body.data.userSetting}),t.go("/page/home")):(c.a.commit("TOGGLE_POPUP",{visible:!0,text:e.data.head.msg,duration:3e3}),t.getCaptcha())},function(e){setTimeout(function(){i.Indicator.close(),t.go("/page/home")},100)})},check:function(){utils.version.checkForUpdate()}}),watch:{server:function(t){Config.server=t},chcpUrl:function(t){Config.chcpUrl=t}},mounted:function(){},beforeRouteEnter:function(t,e,a){a(function(t){t.doLogout(),t.getCaptcha(),t.model.captcha=""})}}},NaOX:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("L1Z8"),n=a("Kmtg"),c=a("C7Lr"),i=c(o.a,n.a,!1,null,null,null);e.default=i.exports}});