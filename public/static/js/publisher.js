webpackJsonp([22],{"0r7b":function(e,t,s){"use strict";t.a={name:"Video",data:function(){return{url:"rtmp://47.100.119.102:1935/hls",stream:"chenjia"}},methods:{play:function(){/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?this.iosPlay():/(Android)/i.test(navigator.userAgent)?this.androidPlay():(alert("未能识别设备类型，默认用安卓！"),this.androidPlay())},androidPlay:function(){window.videoStreamer.streamRTMP(this.url+"/"+this.stream,function(){console.log("success callback")},function(){console.log("failure callback")})},iosPlay:function(){var e={videoWidth:this.screenWidth,videoHeight:this.screenHeight,videoBitRate:"819200",videoMaxBitRate:"1024000",videoMinBitRate:"512000",videoFrameRate:"24",videoMaxKeyframeInterval:"48",videoOrientation:"1",rtmpServerURL:this.url+"/"+this.stream,labelLive:"Live",labelViewers:"Viewers",labelNoQuestions:"No Questions",alertStopSessionTitle:"Alert",alertStopSessionYes:"Yes",alertStopSessionNo:"No",alertStopSessionMessage:"Are you sure you want to stop the session?",alertStartSessionTitle:"Alert",alertStartSessionOK:"OK",alertStartSessionMessage:"Are you sure you want to start the session?",videoTitleStart:"Start",videoTitlePaused:"Paused",videoTitleEnd:"End"};window.rtmpLiveStreamer.start(function(e){console.log("Results: "+e)},function(e){console.log("Error: "+e)},e)}},watch:{},mounted:function(){}}},AhsZ:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("mt-header",{attrs:{title:"主播"}},[s("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:e.back},slot:"left"},[s("span",[e._v("返回")])])],1),e._v(" "),s("mt-field",{attrs:{label:"推流地址",placeholder:"请输入拉流地址"},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}}),e._v(" "),s("mt-field",{attrs:{label:"stream",placeholder:"请输入stream"},model:{value:e.stream,callback:function(t){e.stream=t},expression:"stream"}}),e._v(" "),s("div",{staticClass:"pd-md"},[s("mt-button",{attrs:{type:"primary",size:"large"},on:{click:e.play}},[e._v("开　播")])],1)],1)},i=[],o={render:a,staticRenderFns:i};t.a=o},mQRn:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("0r7b"),i=s("AhsZ"),o=s("VU/8"),r=o(a.a,i.a,!1,null,null,null);t.default=r.exports}});