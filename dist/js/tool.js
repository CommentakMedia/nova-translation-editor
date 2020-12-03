!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){t.exports=function(t,e,n,r,a,s){var o,i=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(o=t,i=t.default);var l,c="function"==typeof i?i.options:i;if(e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),a&&(c._scopeId=a),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=l):r&&(l=r),l){var d=c.functional,f=d?c.render:c.beforeCreate;d?(c._injectStyles=l,c.render=function(t,e){return l.call(e),f(t,e)}):c.beforeCreate=f?[].concat(f,l):[l]}return{esModule:o,exports:i,options:c}}},function(t,e,n){t.exports=n(2)},function(t,e,n){Nova.booting(function(t,e,r){e.addRoutes([{name:"nova-translation-editor",path:"/nova-translation-editor",component:n(3)}])})},function(t,e,n){var r=n(0)(n(4),n(13),!1,null,null,null);t.exports=r.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(5),a=n.n(r);e.default={components:{AddRowModal:a.a},metaInfo:function(){return{title:this.title+" - "+this.currentGroup}},data:function(){return{title:"Nova Translation Editor",apiUrl:"/nova-vendor/nova-translation-editor/",translations:null,currentGroup:null,showNewModal:!1,languages:[]}},mounted:function(){this.getData()},computed:{existingKeys:function(){return Object.keys(this.translations[this.currentGroup])}},methods:{getData:function(){var t=this;Nova.request().get(this.apiUrl+"index").then(function(e){e.data&&e.data.translations&&(t.translations=e.data.translations,t.languages=e.data.languages,t.currentGroup=Object.keys(t.translations)[0])})},addRow:function(t){var e={};for(var n in this.languages)e[this.languages[n]]="";this.translations[this.currentGroup][t]=e,this.showNewModal=!1},save:function(t){var e=this,n={};t?n[t]=this.translations[t]:n=this.translations,Nova.request().post(this.apiUrl+"save",{data:n}).then(function(t){e.$toasted.show("Saved",{type:"success"})}).catch(function(t){e.$toasted.show(t,{type:"error"})})}}}},function(t,e,n){var r=n(0)(n(11),n(12),!1,function(t){n(6)},"data-v-05dcb287",null);t.exports=r.exports},function(t,e,n){var r=n(7);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(9)("039842e2",r,!0,{})},function(t,e,n){(t.exports=n(8)(!1)).push([t.i,"",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var a=(o=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),s=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(s).concat([a]).join("\n")}var o;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},a=0;a<this.length;a++){var s=this[a][0];"number"==typeof s&&(r[s]=!0)}for(a=0;a<t.length;a++){var o=t[a];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},function(t,e,n){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a=n(10),s={},o=r&&(document.head||document.getElementsByTagName("head")[0]),i=null,u=0,l=!1,c=function(){},d=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(t){for(var e=0;e<t.length;e++){var n=t[e],r=s[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(m(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var o=[];for(a=0;a<n.parts.length;a++)o.push(m(n.parts[a]));s[n.id]={id:n.id,refs:1,parts:o}}}}function h(){var t=document.createElement("style");return t.type="text/css",o.appendChild(t),t}function m(t){var e,n,r=document.querySelector("style["+f+'~="'+t.id+'"]');if(r){if(l)return c;r.parentNode.removeChild(r)}if(p){var a=u++;r=i||(i=h()),e=g.bind(null,r,a,!1),n=g.bind(null,r,a,!0)}else r=h(),e=function(t,e){var n=e.css,r=e.media,a=e.sourceMap;r&&t.setAttribute("media",r);d.ssrId&&t.setAttribute(f,e.id);a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}t.exports=function(t,e,n,r){l=n,d=r||{};var o=a(t,e);return v(o),function(e){for(var n=[],r=0;r<o.length;r++){var i=o[r];(u=s[i.id]).refs--,n.push(u)}e?v(o=a(t,e)):o=[];for(r=0;r<n.length;r++){var u;if(0===(u=n[r]).refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete s[u.id]}}}};var _,b=(_=[],function(t,e){return _[t]=e,_.filter(Boolean).join("\n")});function g(t,e,n,r){var a=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=b(e,a);else{var s=document.createTextNode(a),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(s,o[e]):t.appendChild(s)}}},function(t,e){t.exports=function(t,e){for(var n=[],r={},a=0;a<e.length;a++){var s=e[a],o=s[0],i={id:t+":"+a,css:s[1],media:s[2],sourceMap:s[3]};r[o]?r[o].parts.push(i):n.push(r[o]={id:o,parts:[i]})}return n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"AddRowModal",props:{group:{},existingKeys:{}},data:function(){return{keyName:""}},methods:{handleClose:function(){this.$emit("close")},handleSubmit:function(){this.keyName=this.keyName.trim(),-1!=this.existingKeys.indexOf(this.keyName)?this.$toasted.show("This key is already in use",{type:"error"}):this.$emit("create",this.keyName)}},mounted:function(){this.$refs.keyNameInput.focus()}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("modal",[n("form",{staticClass:"bg-white rounded-lg shadow-lg overflow-hidden",attrs:{autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[n("div",[n("heading",{staticClass:"border-b border-40 py-4 px-2",attrs:{level:2}},[t._v(t._s(t.__("Create"))+' "'+t._s(t.group)+'"')]),t._v(" "),n("div",{staticClass:"p-3"},[n("label",{staticClass:"inline-block text-80 mb-2 leading-tight nova-form-label"},[t._v(t._s(t.__("Key of new translation")))]),n("br"),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.keyName,expression:"keyName"}],ref:"keyNameInput",staticClass:"w-full form-control form-input form-input-bordered",attrs:{type:"text",required:""},domProps:{value:t.keyName},on:{input:function(e){e.target.composing||(t.keyName=e.target.value)}}})])],1),t._v(" "),n("div",{staticClass:"bg-30 px-6 py-3 flex"},[n("div",{staticClass:"flex items-center ml-auto"},[n("button",{staticClass:"btn text-80 font-normal h-9 px-3 mr-3 btn-link",attrs:{type:"button"},on:{click:t.handleClose}},[t._v("\n          "+t._s(t.__("Cancel"))+"\n        ")]),t._v(" "),n("button",{staticClass:"btn btn-default btn-primary",attrs:{type:"submit"}},[n("span",[t._v(t._s(t.__("Create")))])])])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("heading",{staticClass:"mb-6"},[t._v(t._s(t.title))]),t._v(" "),t.translations?n("card",{staticClass:"my-6"},[n("nav",{staticClass:"bg-white px-8 pt-2 border-b"},[n("div",{staticClass:"-mb-px flex justify-center cursor-pointer"},t._l(t.translations,function(e,r){return n("a",{key:r,staticClass:"no-underline border-b-2 uppercase tracking-wide font-bold text-s py-3 mx-2 px-3 inline-block",class:t.currentGroup===r?"text-primary border-primary":" text-grey border-transparent",on:{click:function(e){t.currentGroup=r}}},[t._v("\n          "+t._s(r)+"\n        ")])}),0)]),t._v(" "),t._l(t.translations,function(e,r){return n("div",{directives:[{name:"show",rawName:"v-show",value:t.currentGroup===r,expression:"currentGroup === group"}],key:r+"tab"},[n("table",{staticClass:"table w-full"},[n("thead",[n("tr",[n("th",{staticClass:"text-left w-1/5"},[t._v("Key")]),t._v(" "),t._l(t.languages,function(e){return n("th",{staticClass:"text-left"},[t._v("Translation "+t._s(e))])}),t._v(" "),n("th",{staticClass:"hidden"})],2)]),t._v(" "),n("tbody",t._l(e,function(e,a){return n("tr",[n("td",{staticClass:"text-left py-2"},[t._v("\n              "+t._s(a)+"\n              "),n("p",{staticClass:"text-xs\tmt-2 text-dark-grey"},[t._v(t._s(r)+"."+t._s(a))])]),t._v(" "),t._l(t.languages,function(r){return n("td",{staticClass:"text-left"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e[r],expression:"trans[lang]"}],staticClass:"w-full form-input form-input-bordered py-3 m-1 h-auto",attrs:{type:"text"},domProps:{value:e[r]},on:{input:function(n){n.target.composing||t.$set(e,r,n.target.value)}}})])}),t._v(" "),n("td",{staticClass:"hidden"})],2)}),0)]),t._v(" "),n("div",{staticClass:"text-center m-3"},[n("button",{staticClass:"btn btn-default btn-primary",on:{click:function(e){t.showNewModal=!0}}},[t._v("Add row")])])])})],2):t._e(),t._v(" "),n("div",{staticClass:"text-right my-2"},[n("a",{staticClass:"btn btn-link dim cursor-pointer text-80 ml-auto mr-6 router-link-active nova-router-link nova-cancel-button",on:{click:function(e){return t.$router.go()}}},[t._v("\n      "+t._s(t.__("Cancel"))+"\n    ")]),t._v(" "),n("button",{staticClass:"btn btn-default btn-primary mr-3",attrs:{type:"button"},on:{click:function(e){return t.save(t.currentGroup)}}},[t._v(t._s(t.__("Save"))+' "'+t._s(t.currentGroup)+'"')]),t._v(" "),n("button",{staticClass:"btn btn-default btn-primary",attrs:{type:"button"},on:{click:t.save}},[t._v(t._s(t.__("Save all")))])]),t._v(" "),t.showNewModal?n("add-row-modal",{attrs:{group:t.currentGroup,"existing-keys":t.existingKeys},on:{close:function(e){t.showNewModal=!1},create:t.addRow}}):t._e()],1)},staticRenderFns:[]}}]);