webpackJsonp([18],{L8Lp:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("RaaZ"),s=e("giAQ"),l=e("VU/8"),i=l(n.a,s.a,!1,null,null,null);a.default=i.exports},RaaZ:function(t,a,e){"use strict";var n=e("u36N");a.a={name:"Observer",components:{RemoteScript:n.a},data:function(){return{player:null,url:"rtmp://47.100.119.102/hls/chenjia"}},methods:{startPlay:function(){var t=this;"app"==this.env?window.CLiteAV.startPlay({url:this.url,playType:window.CLiteAV.PLAY_TYPE.LIVE_RTMP,playMode:1},function(){console.log("suc")},function(){console.log("fail")}):(null==this.player&&(this.player=videojs("my-player",{width:this.screenWidth})),this.player.src({src:this.url,type:"application/x-mpegURL"}),this.player.ready(function(){t.player.play()}))},stopPlay:function(){window.CLiteAV.stopPlay(function(){console.log("stop suc"),document.body.className=""},function(){console.log("stop fail")})}},watch:{},mounted:function(){var t=this;document.addEventListener("backbutton",function(a){t.stopPlay()},!1),document.addEventListener("CLiteAV.onPlayEvent",function(t){"2001"==t.eventID&&(document.body.className="video-play")})}}},giAQ:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("mt-header",{attrs:{title:"视频"}},[e("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:t.back},slot:"left"},[e("span",[t._v("返回")])])],1),t._v(" "),e("mt-field",{attrs:{label:"拉流地址",placeholder:"请输入拉流地址"},model:{value:t.url,callback:function(a){t.url=a},expression:"url"}}),t._v(" "),e("div",{staticClass:"pd-md"},[e("mt-button",{attrs:{type:"primary",size:"large"},on:{click:t.startPlay}},[t._v("播　放")])],1),t._v(" "),e("div",{staticClass:"pd-md"},[e("mt-button",{attrs:{type:"primary",size:"large"},on:{click:t.startPlay}},[t._v("播　放")])],1),t._v(" "),e("div",{staticClass:"pd-md"},[e("mt-button",{attrs:{type:"primary",size:"large"},on:{click:t.startPlay}},[t._v("播　放")])],1),t._v(" "),e("div",{staticClass:"pd-md"},[e("mt-button",{attrs:{type:"primary",size:"large"},on:{click:t.startPlay}},[t._v("播　放")])],1),t._v(" "),e("div",{staticClass:"pd-md"},[e("mt-button",{attrs:{type:"primary",size:"large"},on:{click:t.startPlay}},[t._v("播　放")])],1),t._v(" "),e("div",{staticClass:"pd-md"},[e("mt-button",{attrs:{type:"primary",size:"large"},on:{click:t.startPlay}},[t._v("播　放")])],1),t._v(" "),e("div",{staticClass:"pd-md"},[e("mt-button",{attrs:{type:"primary",size:"large"},on:{click:t.startPlay}},[t._v("播　放")])],1)],1)},s=[],l={render:n,staticRenderFns:s};a.a=l},hcfz:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement;return(t._self._c||a)("i",{staticStyle:{display:"none"}})},s=[],l={render:n,staticRenderFns:s};a.a=l},oZZV:function(t,a,e){"use strict";a.a={name:"RemoteScript",props:["src","callback"],mounted:function(){var t=this,a=document.createElement("script");a.type="text/javascript",a.src=this.src,a.onload=a.readystatechange=function(){a.readyState&&!/loaded|complete/.test(a.readyState)||(t.$emit("callback"),a.onload=a.readystatechange=null)},document.body.appendChild(a)}}},u36N:function(t,a,e){"use strict";var n=e("oZZV"),s=e("hcfz"),l=e("VU/8"),i=l(n.a,s.a,!1,null,null,null);a.a=i.exports}});