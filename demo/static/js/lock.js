webpackJsonp([5],{"1FfD":function(t,e,i){e=t.exports=i("bKW+")(!1),e.push([t.i,"",""])},"1n7L":function(t,e,i){var s=i("PSbA");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("6imX")("77686cce",s,!0)},AH2o:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{id:"lock"}})},o=[],n={render:s,staticRenderFns:o};e.a=n},AvPd:function(t,e,i){"use strict";var s=i("zcYm");e.a={name:"lock",components:{h5lock:s.a},data:function(){return{}},methods:{toHome:function(){var t=document.getElementById("h5lock");t.parentNode.removeChild(t),this.go("home")}}}},Ndei:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"lxt-page"},[i("mt-header",{attrs:{title:"手势解锁"}},[i("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:t.toHome},slot:"left"},[t._v("返回")])],1),t._v(" "),i("h5lock")],1)},o=[],n={render:s,staticRenderFns:o};e.a=n},PMpZ:function(t,e,i){"use strict";function s(t){i("RE/R")}Object.defineProperty(e,"__esModule",{value:!0});var o=i("AvPd"),n=i("Ndei"),a=i("25r8"),r=s,h=a(o.a,n.a,r,"data-v-54882ee4",null);e.default=h.exports},PSbA:function(t,e,i){e=t.exports=i("bKW+")(!1),e.push([t.i,"",""])},"RE/R":function(t,e,i){var s=i("1FfD");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("6imX")("4229ba59",s,!0)},RkNX:function(t,e,i){"use strict";var s=i("w+Uc");i.n(s);e.a={name:"h5lock",data:function(){return{}},methods:{},mounted:function(){var t={chooseType:3,width:300,height:300,container:"lock",inputEnd:function(t){}};new H5lock(t).init()}}},"w+Uc":function(t,e){!function(){window.H5lock=function(t){this.height=t.height,this.width=t.width,this.chooseType=Number(window.localStorage.getItem("chooseType"))||t.chooseType,this.devicePixelRatio=window.devicePixelRatio||1},H5lock.prototype.drawCle=function(t,e){this.ctx.strokeStyle="#ddd",this.ctx.lineWidth=5,this.ctx.beginPath(),this.ctx.arc(t,e,this.r,0,2*Math.PI,!0),this.ctx.closePath(),this.ctx.stroke()},H5lock.prototype.drawPoint=function(t){for(var e=0;e<this.lastPoint.length;e++)this.ctx.fillStyle=t,this.ctx.beginPath(),this.ctx.arc(this.lastPoint[e].x,this.lastPoint[e].y,this.r/2.5,0,2*Math.PI,!0),this.ctx.closePath(),this.ctx.fill()},H5lock.prototype.drawStatusPoint=function(t){for(var e=0;e<this.lastPoint.length;e++)this.ctx.strokeStyle=t,this.ctx.beginPath(),this.ctx.arc(this.lastPoint[e].x,this.lastPoint[e].y,this.r,0,2*Math.PI,!0),this.ctx.closePath(),this.ctx.stroke()},H5lock.prototype.drawLine=function(t,e,i){this.ctx.beginPath(),this.ctx.strokeStyle=t,this.ctx.lineWidth=5,this.ctx.moveTo(this.lastPoint[0].x,this.lastPoint[0].y);for(var s=1;s<this.lastPoint.length;s++)this.ctx.lineTo(this.lastPoint[s].x,this.lastPoint[s].y);this.ctx.lineTo(e.x,e.y),this.ctx.stroke(),this.ctx.closePath()},H5lock.prototype.createCircle=function(){var t=this.chooseType,e=0;this.r=this.ctx.canvas.width/(1+4*t),this.lastPoint=[],this.arr=[],this.restPoint=[];for(var i=this.r,s=0;s<t;s++)for(var o=0;o<t;o++){e++;var n={x:3.5*o*i+3*i,y:3.5*s*i+3*i,index:e};this.arr.push(n),this.restPoint.push(n)}this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height);for(var s=0;s<this.arr.length;s++)this.drawCle(this.arr[s].x,this.arr[s].y)},H5lock.prototype.getPosition=function(t){var e=t.currentTarget.getBoundingClientRect();return{x:(t.touches[0].clientX-e.left)*this.devicePixelRatio,y:(t.touches[0].clientY-e.top)*this.devicePixelRatio}},H5lock.prototype.update=function(t){this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height);for(var e=0;e<this.arr.length;e++)this.drawCle(this.arr[e].x,this.arr[e].y);this.drawPoint("#26a2ff"),this.drawStatusPoint("#26a2ff"),this.drawLine("#26a2ff",t,this.lastPoint);for(var e=0;e<this.restPoint.length;e++)if(Math.abs(t.x-this.restPoint[e].x)<this.r&&Math.abs(t.y-this.restPoint[e].y)<this.r){this.drawPoint(this.restPoint[e].x,this.restPoint[e].y),this.lastPoint.push(this.restPoint[e]),this.restPoint.splice(e,1);break}},H5lock.prototype.checkPass=function(t,e){for(var i="",s="",o=0;o<t.length;o++)i+=t[o].index+t[o].index;for(var o=0;o<e.length;o++)s+=e[o].index+e[o].index;return i===s},H5lock.prototype.storePass=function(t){if(1==this.pswObj.step)this.checkPass(this.pswObj.fpassword,t)?(this.pswObj.step=2,this.pswObj.spassword=t,document.getElementById("title").innerHTML="密码保存成功",document.getElementById("title").style.color="#00c853",this.drawStatusPoint("#00c853"),this.drawPoint("#00c853"),this.drawLine("#00c853",this.lastPoint[this.lastPoint.length-1],this.lastPoint),window.localStorage.setItem("passwordxx",JSON.stringify(this.pswObj.spassword)),window.localStorage.setItem("chooseType",this.chooseType)):(document.getElementById("title").innerHTML="两次不一致，重新输入",document.getElementById("title").style.color="#ef4f4f",this.drawStatusPoint("#ef4f4f"),this.drawPoint("#ef4f4f"),this.drawLine("#ef4f4f",this.lastPoint[this.lastPoint.length-1],this.lastPoint),delete this.pswObj.step);else if(2==this.pswObj.step)if(this.checkPass(this.pswObj.spassword,t)){var e=document.getElementById("title");e.style.color="#00c853",e.innerHTML="解锁成功",this.drawStatusPoint("#00c853"),this.drawPoint("#00c853"),this.drawLine("#00c853",this.lastPoint[this.lastPoint.length-1],this.lastPoint)}else if(t.length<4){this.drawStatusPoint("#ef4f4f"),this.drawPoint("#ef4f4f"),this.drawLine("#ef4f4f",this.lastPoint[this.lastPoint.length-1],this.lastPoint);var e=document.getElementById("title");e.style.color="#ef4f4f",e.innerHTML="请连接4个点"}else{this.drawStatusPoint("#ef4f4f"),this.drawPoint("#ef4f4f"),this.drawLine("#ef4f4f",this.lastPoint[this.lastPoint.length-1],this.lastPoint);var e=document.getElementById("title");e.style.color="#ef4f4f",e.innerHTML="密码错误，您还可以输入N次"}else if(t.length<4){this.drawStatusPoint("#ef4f4f"),this.drawPoint("#ef4f4f"),this.drawLine("#ef4f4f",this.lastPoint[this.lastPoint.length-1],this.lastPoint);var e=document.getElementById("title");e.style.color="#ef4f4f",e.innerHTML="请连接4个点"}else this.pswObj.step=1,this.pswObj.fpassword=t,document.getElementById("title").innerHTML="再次输入"},H5lock.prototype.makeState=function(){if(2==this.pswObj.step){document.getElementById("updatePassword").style.display="block";var t=document.getElementById("title");t.style.color="#FFF",t.innerHTML="请解锁"}else this.pswObj.step,document.getElementById("updatePassword").style.display="none"},H5lock.prototype.setChooseType=function(t){chooseType=t,init()},H5lock.prototype.updatePassword=function(){window.localStorage.removeItem("passwordxx"),window.localStorage.removeItem("chooseType"),this.pswObj={},document.getElementById("title").innerHTML="绘制解锁图案",this.reset()},H5lock.prototype.initDom=function(){var t=document.createElement("div");t.setAttribute("id","h5lock"),t.setAttribute("style","position: absolute;top:40px;left:0;right:0;bottom:0;background:url(static/img/lock-bg.jpg) no-repeat;background-size:cover;text-align:center;");var e=document.createElement("canvas");e.setAttribute("id","canvas"),e.style.cssText="display: inline-block;",t.innerHTML='<h4 id="title" class="title" style="color:#FFF;">请绘制您的图形密码</h4><a id="updatePassword" style="position: absolute;right: 5px;top: -28px;color:#fff;font-size: 10px;display:none;">重置密码</a>',t.appendChild(e);var i=this.width||320,s=this.height||320;document.body.appendChild(t),e.style.width=i+"px",e.style.height=s+"px",e.height=s*this.devicePixelRatio,e.width=i*this.devicePixelRatio},H5lock.prototype.init=function(){this.initDom(),this.pswObj=window.localStorage.getItem("passwordxx")?{step:2,spassword:JSON.parse(window.localStorage.getItem("passwordxx"))}:{},this.lastPoint=[],this.makeState(),this.touchFlag=!1,this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d"),this.createCircle(),this.bindEvent()},H5lock.prototype.reset=function(){this.makeState(),this.createCircle()},H5lock.prototype.bindEvent=function(){var t=this;this.canvas.addEventListener("touchstart",function(e){e.preventDefault();for(var i=t.getPosition(e),s=0;s<t.arr.length;s++)if(Math.abs(i.x-t.arr[s].x)<t.r&&Math.abs(i.y-t.arr[s].y)<t.r){t.touchFlag=!0,t.drawPoint(t.arr[s].x,t.arr[s].y),t.lastPoint.push(t.arr[s]),t.restPoint.splice(s,1);break}},!1),this.canvas.addEventListener("touchmove",function(e){t.touchFlag&&t.update(t.getPosition(e))},!1),this.canvas.addEventListener("touchend",function(e){t.touchFlag&&(t.touchFlag=!1,t.storePass(t.lastPoint),setTimeout(function(){t.reset()},1e3))},!1),document.getElementById("updatePassword").addEventListener("click",function(){t.updatePassword()})}}()},zcYm:function(t,e,i){"use strict";function s(t){i("1n7L")}var o=i("RkNX"),n=i("AH2o"),a=i("25r8"),r=s,h=a(o.a,n.a,r,null,null);e.a=h.exports}});