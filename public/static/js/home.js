webpackJsonp([0],{"0dUj":function(t,e,n){var i=n("F9Um");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("5fefa57a",i,!0,{})},"8x2i":function(t,e,n){"use strict";function i(t){n("y7D8")}var a=n("qg/I"),r=n("iiqk"),o=n("VU/8"),s=i,c=o(a.a,r.a,!1,s,"data-v-7ddd870a",null);e.a=c.exports},"9AnN":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page has-footer"},[n("mt-header",{attrs:{title:"首页"}},[n("mt-button",{staticClass:"fa fa-fw fa-bars",attrs:{slot:"left"},on:{click:function(e){t.popupMenu=!0}},slot:"left"}),t._v(" "),n("mt-button",{staticClass:"fa fa-fw fa-qrcode",attrs:{slot:"right"},on:{click:function(e){return t.scan()}},slot:"right"})],1),t._v(" "),n("div",[t.showSwipe?n("mt-swipe",{style:{height:.6*t.screenWidth+"px"},attrs:{prevent:!0,auto:t.auto},on:{change:t.handleChange}},t._l(5,function(t){return n("mt-swipe-item",{key:t},[n("img",{attrs:{width:"100%",src:"./static/img/banner/"+(t-1)+".jpg"}})])}),1):t._e(),t._v(" "),n("table",{staticClass:"icon-table"},t._l(t.menus,function(e,i){return i%4==0?n("tr",{key:i},t._l(t.menus,function(e,a){return a>=i&&a<i+4?n("td",{staticStyle:{width:"25%","padding-top":"5px"},on:{click:function(n){return t.go(e.url)}}},[n("div",[n("i",{staticClass:"fa fa-fw",class:"fa fa-"+e.icon,style:{color:t.colors[a]}}),n("br"),t._v(" "),n("span",[t._v(t._s(e.name))])])]):t._e()}),0):t._e()}),0)],1),t._v(" "),n("mt-button",{staticStyle:{"border-radius":"0","text-align":"left",color:"#26a2ff"},attrs:{size:"large"}},[n("i",{staticClass:"fa fa-calendar-o"}),t._v(" 日程安排\n  ")]),t._v(" "),n("timeline",{attrs:{items:t.timelines}}),t._v(" "),n("mt-popup",{staticStyle:{width:"80%"},attrs:{position:"left"},model:{value:t.popupMenu,callback:function(e){t.popupMenu=e},expression:"popupMenu"}},[n("mt-header",{attrs:{title:"菜单",fixed:""}},[n("mt-button",{attrs:{slot:"right",icon:"back"},on:{click:function(e){t.popupMenu=!t.popupMenu}},slot:"right"},[t._v("隐藏")])],1),t._v(" "),n("div",{staticClass:"has-header",staticStyle:{"overflow-y":"auto"},style:{height:t.screenHeight-40+"px"}},t._l(t.menus,function(e,i){return n("mt-cell",{key:i,attrs:{title:e.name},nativeOn:{click:function(n){t.popupMenu=!1,t.go(e.url)}}},[n("i",{staticClass:"fa fa-fw",class:"fa fa-"+e.icon,style:{verticalAlign:"middle",color:t.colors[i]},attrs:{slot:"icon"},slot:"icon"})])}),1)],1),t._v(" "),n("mt-popup",{staticStyle:{width:"100%",height:"100%"},attrs:{"popup-transition":"popup-fade"},model:{value:t.scanned,callback:function(e){t.scanned=e},expression:"scanned"}},[n("mt-header",{attrs:{title:"二维码登录"}},[n("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:function(e){t.scanned=!1}},slot:"left"},[n("span",[t._v("返回")])])],1),t._v(" "),n("div",{staticStyle:{padding:"15px","line-height":"30px","overflow-y":"auto"},style:{height:t.screenHeight-140+"px"}},[n("span",{staticStyle:{color:"#4caf50"}},[t._v("二维码已扫描成功，请确认登录")]),t._v(" "),n("div",{staticStyle:{position:"fixed",left:"5%",padding:"15px 0",bottom:"0",width:"90%"}},[n("div",[n("mt-button",{attrs:{type:"primary",size:"large"},on:{click:function(e){return t.qrcodeLogin()}}},[t._v("确认登录")])],1)])])],1)],1)},a=[],r={render:i,staticRenderFns:a};e.a=r},"As/8":function(t,e,n){var i=n("efEZ");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("39eda796",i,!0,{})},F9Um:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"",""])},IqSH:function(t,e){t.exports=function(t){function e(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=236)}({0:function(t,e){t.exports=function(t,e,n,i,a){var r,o=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(r=t,o=t.default);var c="function"==typeof o?o.options:o;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),i&&(c._scopeId=i);var l;if(a?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=l):n&&(l=n),l){var d=c.functional,u=d?c.render:c.beforeCreate;d?c.render=function(t,e){return l.call(e),u(t,e)}:c.beforeCreate=u?[].concat(u,l):[l]}return{esModule:r,exports:o,options:c}}},157:function(t,e,n){var i=n(0)(n(79),n(181),null,null,null);t.exports=i.exports},181:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"mint-swipe-item"},[t._t("default")],2)},staticRenderFns:[]}},236:function(t,e,n){t.exports=n(43)},43:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(5),a=(n.n(i),n(157)),r=n.n(a);n.d(e,"default",function(){return r.a})},5:function(t,e){},79:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"mt-swipe-item",mounted:function(){this.$parent&&this.$parent.swipeItemCreated(this)},destroyed:function(){this.$parent&&this.$parent.swipeItemDestroyed(this)}}}})},JHQh:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,".timeline-item[data-v-7ddd870a]{width:100%;margin-left:-10px;display:-webkit-box;display:-ms-flexbox;display:flex}.line-item[data-v-7ddd870a]{-webkit-box-flex:0;-ms-flex:0 0 80px;flex:0 0 80px}.line[data-v-7ddd870a]{position:relative;margin:0 auto;padding:0;width:0;height:100%;border-width:1px}.line.history[data-v-7ddd870a]{border-style:solid!important}.line-start[data-v-7ddd870a]{position:absolute;left:-6px;top:-2px;width:6px;height:6px;border-radius:50%;background:#fff;border:3px solid #26a2ff}.line-icon[data-v-7ddd870a]{position:relative;top:22px;left:-13px;text-align:center;line-height:24px;width:25px;height:25px;border-radius:50%;-webkit-box-shadow:2px 2px 5px #888;box-shadow:2px 2px 5px #888;color:#fff}.content-item[data-v-7ddd870a]{-webkit-box-flex:1;-ms-flex:1 0 100px;flex:1 0 100px;border-radius:0 4px 4px 0;margin-top:22px;position:relative}.content-arrow[data-v-7ddd870a]{position:absolute;top:5px;left:-12px;width:0;height:0;border-top:8px solid #fff;border-bottom:8px solid #fff}.content-title[data-v-7ddd870a]{font-size:16px;height:20px;line-height:20px;padding:4px 10px}.content-details[data-v-7ddd870a]{padding:10px;font-size:14px}.content-time[data-v-7ddd870a]{padding:5px;font-size:12px;color:#888;text-align:right}",""])},"Mp5+":function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,".mint-swipe,.mint-swipe-items-wrap{overflow:hidden;position:relative;height:100%}.mint-swipe-items-wrap>div{position:absolute;-webkit-transform:translateX(-100%);transform:translateX(-100%);width:100%;height:100%;display:none}.mint-swipe-items-wrap>div.is-active{display:block;-webkit-transform:none;transform:none}.mint-swipe-indicators{position:absolute;bottom:10px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.mint-swipe-indicator{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2;margin:0 3px}.mint-swipe-indicator.is-active{background:#fff}",""])},Q0Ca:function(t,e,n){"use strict";var i=n("7+uW"),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=function(t){return t=""+t,t.length<2&&(t="0"+t),t};i.default.filter("dateFilter",function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=void 0===t?"undefined":a(t);if("string"===n)return new Date(t);if("object"===n){var i=t.getFullYear()+"-"+r(t.getMonth()+1)+"-"+r(t.getDate());e||(i=i+" "+r(t.getHours())+":"+r(t.getMinutes())),t=i}return t})},efEZ:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,".icon-table[data-v-85d46716]{width:100%;text-align:center;background:#fff;font-size:13px;border:none;border-collapse:collapse}.icon-table td[data-v-85d46716]{height:64px;line-height:20px;vertical-align:middle;border:1px solid #dfdfdf}.icon-table td i[data-v-85d46716]{font-size:24px}",""])},gAYL:function(t,e,n){t.exports=function(t){function e(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=235)}({0:function(t,e){t.exports=function(t,e,n,i,a){var r,o=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(r=t,o=t.default);var c="function"==typeof o?o.options:o;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),i&&(c._scopeId=i);var l;if(a?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=l):n&&(l=n),l){var d=c.functional,u=d?c.render:c.beforeCreate;d?c.render=function(t,e){return l.call(e),u(t,e)}:c.beforeCreate=u?[].concat(u,l):[l]}return{esModule:r,exports:o,options:c}}},1:function(t,e){t.exports=n("7+uW")},158:function(t,e,n){function i(t){n(99)}var a=n(0)(n(80),n(168),i,null,null);t.exports=a.exports},168:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mint-swipe"},[n("div",{ref:"wrap",staticClass:"mint-swipe-items-wrap"},[t._t("default")],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showIndicators,expression:"showIndicators"}],staticClass:"mint-swipe-indicators"},t._l(t.pages,function(e,i){return n("div",{staticClass:"mint-swipe-indicator",class:{"is-active":i===t.index}})}))])},staticRenderFns:[]}},2:function(t,e,n){"use strict";function i(t,e){if(!t||!e)return!1;if(-1!==e.indexOf(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").indexOf(" "+e+" ")>-1}function a(t,e){if(t){for(var n=t.className,a=(e||"").split(" "),r=0,o=a.length;r<o;r++){var s=a[r];s&&(t.classList?t.classList.add(s):i(t,s)||(n+=" "+s))}t.classList||(t.className=n)}}function r(t,e){if(t&&e){for(var n=e.split(" "),a=" "+t.className+" ",r=0,o=n.length;r<o;r++){var s=n[r];s&&(t.classList?t.classList.remove(s):i(t,s)&&(a=a.replace(" "+s+" "," ")))}t.classList||(t.className=l(a))}}var o=n(1),s=n.n(o);n.d(e,"c",function(){return f}),e.a=a,e.b=r;var c=s.a.prototype.$isServer,l=(c||Number(document.documentMode),function(t){return(t||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,"")}),d=function(){return!c&&document.addEventListener?function(t,e,n){t&&e&&n&&t.addEventListener(e,n,!1)}:function(t,e,n){t&&e&&n&&t.attachEvent("on"+e,n)}}(),u=function(){return!c&&document.removeEventListener?function(t,e,n){t&&e&&t.removeEventListener(e,n,!1)}:function(t,e,n){t&&e&&t.detachEvent("on"+e,n)}}(),f=function(t,e,n){var i=function(){n&&n.apply(this,arguments),u(t,e,i)};d(t,e,i)}},235:function(t,e,n){t.exports=n(44)},44:function(t,e,n){"use strict";var i=n(158),a=n.n(i);Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"default",function(){return a.a})},80:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2);e.default={name:"mt-swipe",created:function(){this.dragState={}},data:function(){return{ready:!1,dragging:!1,userScrolling:!1,animating:!1,index:0,pages:[],timer:null,reInitTimer:null,noDrag:!1,isDone:!1}},props:{speed:{type:Number,default:300},defaultIndex:{type:Number,default:0},auto:{type:Number,default:3e3},continuous:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},noDragWhenSingle:{type:Boolean,default:!0},prevent:{type:Boolean,default:!1},stopPropagation:{type:Boolean,default:!1}},watch:{index:function(t){this.$emit("change",t)}},methods:{swipeItemCreated:function(){var t=this;this.ready&&(clearTimeout(this.reInitTimer),this.reInitTimer=setTimeout(function(){t.reInitPages()},100))},swipeItemDestroyed:function(){var t=this;this.ready&&(clearTimeout(this.reInitTimer),this.reInitTimer=setTimeout(function(){t.reInitPages()},100))},rafTranslate:function(t,e,n,i,a){function r(){if(Math.abs(s-n)<.5)return this.animating=!1,s=n,t.style.webkitTransform="",a&&(a.style.webkitTransform=""),cancelAnimationFrame(c),void(i&&i());s=o*s+(1-o)*n,t.style.webkitTransform="translate3d("+s+"px, 0, 0)",a&&(a.style.webkitTransform="translate3d("+(s-n)+"px, 0, 0)"),c=requestAnimationFrame(r.bind(this))}var o=.88;this.animating=!0;var s=e,c=0;r.call(this)},translate:function(t,e,a,r){var o=arguments,s=this;if(a){this.animating=!0,t.style.webkitTransition="-webkit-transform "+a+"ms ease-in-out",setTimeout(function(){t.style.webkitTransform="translate3d("+e+"px, 0, 0)"},50);var c=!1,l=function(){c||(c=!0,s.animating=!1,t.style.webkitTransition="",t.style.webkitTransform="",r&&r.apply(s,o))};n.i(i.c)(t,"webkitTransitionEnd",l),setTimeout(l,a+100)}else t.style.webkitTransition="",t.style.webkitTransform="translate3d("+e+"px, 0, 0)"},reInitPages:function(){var t=this.$children;this.noDrag=1===t.length&&this.noDragWhenSingle;var e=[],a=Math.floor(this.defaultIndex),r=a>=0&&a<t.length?a:0;this.index=r,t.forEach(function(t,a){e.push(t.$el),n.i(i.b)(t.$el,"is-active"),a===r&&n.i(i.a)(t.$el,"is-active")}),this.pages=e},doAnimate:function(t,e){var a=this;if(0!==this.$children.length&&(e||!(this.$children.length<2))){var r,o,s,c,l,d,u=this.speed||300,f=this.index,p=this.pages,h=p.length;e?(r=e.prevPage,s=e.currentPage,o=e.nextPage,c=e.pageWidth,l=e.offsetLeft,d=e.speedX):(c=this.$el.clientWidth,s=p[f],r=p[f-1],o=p[f+1],this.continuous&&p.length>1&&(r||(r=p[p.length-1]),o||(o=p[0])),r&&(r.style.display="block",this.translate(r,-c)),o&&(o.style.display="block",this.translate(o,c)));var m,v=this.$children[f].$el;"prev"===t?(f>0&&(m=f-1),this.continuous&&0===f&&(m=h-1)):"next"===t&&(f<h-1&&(m=f+1),this.continuous&&f===h-1&&(m=0));var g=function(){if(void 0!==m){var t=a.$children[m].$el;n.i(i.b)(v,"is-active"),n.i(i.a)(t,"is-active"),a.index=m}a.isDone&&a.end(),r&&(r.style.display=""),o&&(o.style.display="")};setTimeout(function(){"next"===t?(a.isDone=!0,a.before(s),d?a.rafTranslate(s,l,-c,g,o):(a.translate(s,-c,u,g),o&&a.translate(o,0,u))):"prev"===t?(a.isDone=!0,a.before(s),d?a.rafTranslate(s,l,c,g,r):(a.translate(s,c,u,g),r&&a.translate(r,0,u))):(a.isDone=!1,a.translate(s,0,u,g),void 0!==l?(r&&l>0&&a.translate(r,-1*c,u),o&&l<0&&a.translate(o,c,u)):(r&&a.translate(r,-1*c,u),o&&a.translate(o,c,u)))},10)}},next:function(){this.doAnimate("next")},prev:function(){this.doAnimate("prev")},before:function(){this.$emit("before",this.index)},end:function(){this.$emit("end",this.index)},doOnTouchStart:function(t){if(!this.noDrag){var e=this.$el,n=this.dragState,i=t.touches[0];n.startTime=new Date,n.startLeft=i.pageX,n.startTop=i.pageY,n.startTopAbsolute=i.clientY,n.pageWidth=e.offsetWidth,n.pageHeight=e.offsetHeight;var a=this.$children[this.index-1],r=this.$children[this.index],o=this.$children[this.index+1];this.continuous&&this.pages.length>1&&(a||(a=this.$children[this.$children.length-1]),o||(o=this.$children[0])),n.prevPage=a?a.$el:null,n.dragPage=r?r.$el:null,n.nextPage=o?o.$el:null,n.prevPage&&(n.prevPage.style.display="block"),n.nextPage&&(n.nextPage.style.display="block")}},doOnTouchMove:function(t){if(!this.noDrag){var e=this.dragState,n=t.touches[0];e.speedX=n.pageX-e.currentLeft,e.currentLeft=n.pageX,e.currentTop=n.pageY,e.currentTopAbsolute=n.clientY;var i=e.currentLeft-e.startLeft,a=e.currentTopAbsolute-e.startTopAbsolute,r=Math.abs(i),o=Math.abs(a);if(r<5||r>=5&&o>=1.73*r)return void(this.userScrolling=!0);this.userScrolling=!1,t.preventDefault(),i=Math.min(Math.max(1-e.pageWidth,i),e.pageWidth-1);var s=i<0?"next":"prev";e.prevPage&&"prev"===s&&this.translate(e.prevPage,i-e.pageWidth),this.translate(e.dragPage,i),e.nextPage&&"next"===s&&this.translate(e.nextPage,i+e.pageWidth)}},doOnTouchEnd:function(){if(!this.noDrag){var t=this.dragState,e=new Date-t.startTime,n=null,i=t.currentLeft-t.startLeft,a=t.currentTop-t.startTop,r=t.pageWidth,o=this.index,s=this.pages.length;if(e<300){var c=Math.abs(i)<5&&Math.abs(a)<5;(isNaN(i)||isNaN(a))&&(c=!0),c&&this.$children[this.index].$emit("tap")}e<300&&void 0===t.currentLeft||((e<300||Math.abs(i)>r/2)&&(n=i<0?"next":"prev"),this.continuous||(0===o&&"prev"===n||o===s-1&&"next"===n)&&(n=null),this.$children.length<2&&(n=null),this.doAnimate(n,{offsetLeft:i,pageWidth:t.pageWidth,prevPage:t.prevPage,currentPage:t.dragPage,nextPage:t.nextPage,speedX:t.speedX}),this.dragState={})}},initTimer:function(){var t=this;this.auto>0&&!this.timer&&(this.timer=setInterval(function(){if(!t.continuous&&t.index>=t.pages.length-1)return t.clearTimer();t.dragging||t.animating||t.next()},this.auto))},clearTimer:function(){clearInterval(this.timer),this.timer=null}},destroyed:function(){this.timer&&this.clearTimer(),this.reInitTimer&&(clearTimeout(this.reInitTimer),this.reInitTimer=null)},mounted:function(){var t=this;this.ready=!0,this.initTimer(),this.reInitPages();var e=this.$el;e.addEventListener("touchstart",function(e){t.prevent&&e.preventDefault(),t.stopPropagation&&e.stopPropagation(),t.animating||(t.dragging=!0,t.userScrolling=!1,t.doOnTouchStart(e))}),e.addEventListener("touchmove",function(e){t.dragging&&(t.timer&&t.clearTimer(),t.doOnTouchMove(e))}),e.addEventListener("touchend",function(e){if(t.userScrolling)return t.dragging=!1,void(t.dragState={});t.dragging&&(t.initTimer(),t.doOnTouchEnd(e),t.dragging=!1)})}}},99:function(t,e){}})},h6qm:function(t,e,n){"use strict";function i(t){n("As/8")}Object.defineProperty(e,"__esModule",{value:!0});var a=n("owUo"),r=n("9AnN"),o=n("VU/8"),s=i,c=o(a.a,r.a,!1,s,"data-v-85d46716",null);e.default=c.exports},iiqk:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{padding:"10px"}},t._l(t.items,function(e,i){return n("div",{staticClass:"timeline-item"},[n("div",{staticClass:"line-item"},[n("div",{staticClass:"line",class:{history:e.history},style:{borderColor:e.history?t.color[i]:"#ccc",borderStyle:"dashed"}},[0==i?n("div",{staticClass:"line-start"}):t._e(),t._v(" "),n("div",{staticClass:"line-icon",class:e.icon,style:{background:e.history?t.color[i]:"#ccc"}})])]),t._v(" "),n("div",{staticClass:"content-item",style:{border:"1px solid "+(e.history?t.color[i]:"#ccc"),borderLeft:"4px solid "+(e.history?t.color[i]:"#ccc"),boxShadow:"2px 2px 5px "+(e.history?t.color[i]:"#888")}},[n("div",{staticClass:"content-arrow",style:{borderRight:"8px solid "+(e.history?t.color[i]:"#ccc")}}),t._v(" "),n("div",{staticClass:"content-title",style:{borderBottom:"1px dashed "+(e.history?t.color[i]:"#ccc")}},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"content-details"},[t._v(t._s(e.content))]),t._v(" "),n("div",{staticClass:"content-time"},[t._v(t._s(t._f("dateFilter")(e.time,!1)))])])])}),0)},a=[],r={render:i,staticRenderFns:a};e.a=r},owUo:function(t,e,n){"use strict";var i=n("0dUj"),a=(n.n(i),n("IqSH")),r=n.n(a),o=n("swY8"),s=(n.n(o),n("gAYL")),c=n.n(s),l=n("lrMw"),d=(n.n(l),n("7YS2")),u=n.n(d),f=n("7+uW"),p=n("YtJ0"),h=n("8x2i");n("NYxO");f.default.component(u.a.name,u.a),f.default.component(c.a.name,c.a),f.default.component(r.a.name,r.a),e.a={name:"home",components:{timeline:h.a},data:function(){return{qrcode:"",scanned:!1,auto:5e3,showSwipe:!0,drawer:!1,mini:!1,temporary:!0,right:null,popupMenu:!1,leftMenus:[{title:"Home",icon:"dashboard"},{title:"About",icon:"question_answer"}],colors:["#ff7f50","#87cefa","#da70d6","#32cd32","#6495ed","#ff69b4","#ba55d3","#cd5c5c","#ffa500","#40e0d0","#1e90ff","#ff6347","#7b68ee","#00fa9a","#ffd700","#6b8e23","#ff00ff","#3cb371","#b8860b","#30e0e0"],menus:[{name:"列表",icon:"list",url:"list"},{name:"选项卡",icon:"folder",url:"tab"},{name:"图表",icon:"bar-chart",url:"chart"},{name:"通讯录",icon:"address-book-o",url:"contact"},{name:"表单",icon:"list-alt",url:"form"},{name:"锁屏",icon:"hand-o-up",url:"lock"},{name:"加载",icon:"spinner",url:"loading"},{name:"视频",icon:"video-camera",url:"video"},{name:"日历",icon:"calendar",url:"calendar"},{name:"地图",icon:"map",url:"map"},{name:"弹窗",icon:"window-restore",url:"dialog"},{name:"聊天",icon:"qq",url:"chat"},{name:"上传",icon:"upload",url:"upload"},{name:"浏览器",icon:"chrome",url:"browser"},{name:"缩放",icon:"arrows-alt",url:"zoom"},{name:"流程图",icon:"sitemap",url:"workflow"},{name:"电子签名",icon:"pencil-square-o",url:"signature"},{name:"启动页",icon:"ellipsis-h",url:"splash"}],timelines:[{time:function(){var t=new Date;return t.setHours(9,0,0,0),t}(),history:function(){var t=new Date;return t.setHours(9,0,0,0),t<new Date}(),title:"会议",content:"部门早会",icon:"fa fa-microphone"},{time:function(){var t=new Date;return t.setHours(12,0,0,0),t}(),history:function(){var t=new Date;return t.setHours(12,0,0,0),t<new Date}(),title:"午饭",content:"员工食堂用餐",icon:"fa fa-cutlery"},{time:function(){var t=new Date;return t.setHours(15,0,0,0),t}(),history:function(){var t=new Date;return t.setHours(15,0,0,0),t<new Date}(),title:"下午茶",content:"放松一下心情",icon:"fa fa-coffee"},{time:function(){var t=new Date;return t.setHours(20,0,0,0),t}(),history:function(){var t=new Date;return t.setHours(20,0,0,0),t<new Date}(),title:"生日",content:"朋友生日，一起庆祝",icon:"fa fa-birthday-cake"},{time:function(){var t=new Date;return t.setHours(22,0,0,0),t}(),history:function(){var t=new Date;return t.setHours(22,0,0,0),t<new Date}(),title:"睡觉",content:"亲爱滴，晚安么么哒~",icon:"fa fa-moon-o"}]}},methods:{scan:function(){var t=this;"app"==this.env?(p.a.commit("TOGGLE_POPUP",{visible:!0,text:"正在启用摄像头",duration:3e3}),cordova.plugins.barcodeScanner.scan(function(e){e.cancelled||(t.qrcode=e.text,utils.http.post("/manage/user/scan",{qrcode:t.qrcode,type:"qrcodeScan",msg:"登录二维码已扫描"}).then(function(e){console.log(e),t.scanned=!0},function(t){console.log(t)})),console.log("We got a barcode\nResult: "+e.text+"\nFormat: "+e.format+"\nCancelled: "+e.cancelled)},function(t){alert("Scanning failed: "+t)},{preferFrontCamera:!1,showFlipCameraButton:!0,showTorchButton:!0,torchOn:!1,saveHistory:!1,prompt:"请将二维码对准扫描区域",resultDisplayDuration:500,formats:"QR_CODE,PDF_417",orientation:"portrait",disableAnimations:!1,disableSuccessBeep:!0})):p.a.commit("TOGGLE_POPUP",{visible:!0,text:"请在app中使用二维码扫描",duration:3e3})},qrcodeLogin:function(){var t=this;utils.http.post("/manage/user/scan",{qrcode:this.qrcode,type:"qrcodeLogin",msg:"二维码登录"}).then(function(e){console.log(e),t.scanned=!1,t.qrcode=""},function(t){console.log(t)})},handleChange:function(t){"home"!=this.$route.name&&(this.showSwipe=!1)}},watch:{popupMenu:function(t){t?utils.ui.modal.afterOpen():utils.ui.modal.beforeClose()}},mounted:function(){console.log("home")},beforeRouteEnter:function(t,e,n){n(function(t){t.showSwipe=!0})}}},"qg/I":function(t,e,n){"use strict";n("Q0Ca");e.a={name:"tab",props:["items"],data:function(){return{color:["#87cefa","#ff7f50","#da70d6","#32cd32","#6495ed","#ff69b4","#ba55d3","#cd5c5c","#ffa500","#40e0d0","#1e90ff","#ff6347","#7b68ee","#00fa9a","#ffd700","#6b8e23","#ff00ff","#3cb371","#b8860b","#30e0e0"]}},methods:{}}},swY8:function(t,e,n){var i=n("Mp5+");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("421cdc2a",i,!0,{})},y7D8:function(t,e,n){var i=n("JHQh");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("7cbcc673",i,!0,{})}});