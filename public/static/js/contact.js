webpackJsonp([19],{"+/HG":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("ZztL"),r=n("UqZ7"),i=n("C7Lr"),s=i(a.a,r.a,!1,null,null,null);t.default=s.exports},UqZ7:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("mt-header",{attrs:{title:"联系人"}},[n("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:e.back},slot:"left"},[n("span",[e._v("返回")])])],1),e._v(" "),n("div",{staticClass:"mint-searchbar"},[n("div",{staticClass:"mint-searchbar-inner"},[n("i",{staticClass:"mintui mintui-search"}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchKey,expression:"searchKey"}],staticClass:"mint-searchbar-core",staticStyle:{padding:"0 5px"},attrs:{type:"search",placeholder:"输入姓名搜索"},domProps:{value:e.searchKey},on:{input:function(t){t.target.composing||(e.searchKey=t.target.value)}}})]),e._v(" "),n("a",{staticClass:"mint-searchbar-cancel",staticStyle:{display:"none"}},[e._v("取消")])]),e._v(" "),e.ready?n("mt-index-list",{ref:"indexList"},e._l(e.contacts,function(t,a){return n("mt-index-section",{key:a,attrs:{index:a}},e._l(t,function(e,t){return n("mt-cell",{key:t,attrs:{title:e}})}))})):e._e()],1)},r=[],i={render:a,staticRenderFns:r};t.a=i},ZztL:function(e,t,n){"use strict";t.a={name:"contact",data:function(){return{ready:!1,searchKey:"",items:{A:["Aaron","Alden","Austin"],B:["Baldwin","Braden"],C:["Cox","Chapman"],D:["Davis","Dunn"],E:["Ellis","Elliott"],F:["Freeman","Franklin"],G:["Greene","Grant"],H:["Harris","Hall"],I:["Irvin","Irish"],J:["Jones","Johnson"],K:["King","Knight"],L:["Lewis","Lee"],M:["Martinez","Martin"],N:["Nichols","Nelson"],O:["Oliver","Osborne"],P:["Porter","Pierce"],Q:["Quick","Quinta"],R:["Robinson","Rose"],S:["Stone","Stevens"],T:["Thomas","Turner"],U:["Uwe","Urian"],V:["Vance","Vega"],W:["Wilson","White"],X:["Xavier","Xena"],Y:["Young","York"],Z:["Zack","Zenon"]}}},computed:{contacts:function(){var e={};if(this.searchKey){var t=this.items;for(var n in t){var a=!0,r=!1,i=void 0;try{for(var s,o=t[n][Symbol.iterator]();!(a=(s=o.next()).done);a=!0){var c=s.value;-1!=c.toLowerCase().indexOf(this.searchKey.toLowerCase())&&(e[n]||(e[n]=[]),e[n].push(c))}}catch(e){r=!0,i=e}finally{try{!a&&o.return&&o.return()}finally{if(r)throw i}}}}else e=this.items;return e}},mounted:function(){var e=this;setTimeout(function(){e.ready=!0},100),setTimeout(function(){e.items.C.push("chenjia")},200),alert(navigator.contacts),document.addEventListener("deviceready",function(){console.log(navigator.contacts)},!1)}}}});