(function(t){function e(e){for(var a,r,i=e[0],l=e[1],c=e[2],d=0,m=[];d<i.length;d++)r=i[d],o[r]&&m.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(m.length)m.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,i=1;i<s.length;i++){var l=s[i];0!==o[l]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},o={app:0},n=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("64a9"),o=s.n(a);o.a},"0e55":function(t,e,s){},"22d7":function(t,e,s){"use strict";var a=s("0e55"),o=s.n(a);o.a},5544:function(t,e,s){"use strict";var a=s("c0c0"),o=s.n(a);o.a},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var a,o=s("2b0e"),n=s("8c4f"),r=s("0ff2"),i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("i",{staticClass:"fa fa-hand-point-left fa-5x m-5 pr-5"}),s("h1",[t._v("左邊選單選擇番組名稱")])])}],c=(s("c487"),s("2877")),u={},d=Object(c["a"])(u,i,l,!1,null,"0c6cc476",null),m=d.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"program"},[t.contentSrc?s("dmhy-frame",{attrs:{src:t.contentSrc}}):t._e()],1)},p=[],v=(s("a481"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dmhy-frame"},[s("iframe",{attrs:{src:t.src,frameborder:"0"}})])}),h=[],g={props:{src:{type:String,required:!0}}},b=g,C=(s("5544"),Object(c["a"])(b,v,h,!1,null,"572df66e",null)),_=C.exports,w="http://share.dmhy.org/topics/list?keyword=",y={components:{DmhyFrame:_},computed:{keyword:function(){return this.$route.query&&this.$route.query.keyword},contentSrc:function(){return this.keyword?w+this.keyword:null}},mounted:function(){"https:"==location.protocol&&(location.href=location.href.replace("https:","http:"))}},k=y,x=(s("9306"),Object(c["a"])(k,f,p,!1,null,"0e5cbdb4",null)),D=x.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"admin p-3",staticStyle:{"padding-left":"120px !important"}},[s("source-panel",{staticClass:"mb-4"}),s("program-panel",{staticClass:"mb-4"})],1)},$=[],P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mb-0"},[s("div",{staticClass:"d-flex align-items-center mb-2"},[s("span",{staticClass:"fa-2x mr-2"},[t.show?s("i",{staticClass:"fa fa-angle-down"}):s("i",{staticClass:"fa fa-angle-right"})]),s("h4",{staticClass:"mb-0 mr-2",on:{click:function(e){t.show=!t.show}}},[t._v("來源資料")]),s("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button"},on:{click:t.create}},[s("i",{staticClass:"fa fa-plus"})]),s("div",{staticClass:"ml-auto"},[s("span",{staticClass:"badge badge-pill badge-info",domProps:{textContent:t._s(t.sources.length)}})])]),s("table",{staticClass:"table table-striped mb-0 collapse",class:{show:t.show}},[t._m(0),s("tbody",t._l(t.sources,function(e){return s("tr",{key:e.id},[s("td",{staticClass:"fit",domProps:{textContent:t._s(e.season_slug)}}),s("td",{staticClass:"fit",domProps:{textContent:t._s(e.season_name)}}),s("td",{domProps:{textContent:t._s(e.title)}}),s("td",{domProps:{textContent:t._s(e.url)}}),s("td",{staticClass:"fit text-center"},[e.active?s("i",{staticClass:"fa fa-check"}):s("i",{staticClass:"fa fa-times"})]),s("td",{staticClass:"fit"},[s("div",{staticClass:"ml-auto btn-group btn-group-sm",attrs:{role:"group"}},[s("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(s){return t.edit(e)}}},[s("i",{staticClass:"fa fa-pen"})]),s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(s){return t.destroy(e)}}},[s("i",{staticClass:"fa fa-trash"})])])])])}),0)]),s("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[s("modal",{attrs:{size:"lg"},scopedSlots:t._u([{key:"header",fn:function(){return[s("h5",{staticClass:"modal-title"},[t._v("來源")])]},proxy:!0},{key:"body",fn:function(){return[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label"},[t._v("季度Slug")]),s("div",{staticClass:"col-sm-10"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.season_slug,expression:"formData.season_slug"}],staticClass:"form-control",attrs:{type:"text",pattern:"[a-z0-9-_]+",required:""},domProps:{value:t.formData.season_slug},on:{input:function(e){e.target.composing||t.$set(t.formData,"season_slug",e.target.value)}}}),s("div",{staticClass:"text-muted"},[s("small",[t._v("Pattern: [a-z0-9-_]+")])])])]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label"},[t._v("季度名稱")]),s("div",{staticClass:"col-sm-10"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.season_name,expression:"formData.season_name"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.formData.season_name},on:{input:function(e){e.target.composing||t.$set(t.formData,"season_name",e.target.value)}}})])]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label"},[t._v("標題")]),s("div",{staticClass:"col-sm-10"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.title,expression:"formData.title"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.formData.title},on:{input:function(e){e.target.composing||t.$set(t.formData,"title",e.target.value)}}})])]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label"},[t._v("網址")]),s("div",{staticClass:"col-sm-10"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.url,expression:"formData.url"}],staticClass:"form-control",attrs:{type:"url",required:""},domProps:{value:t.formData.url},on:{input:function(e){e.target.composing||t.$set(t.formData,"url",e.target.value)}}})])]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label"},[t._v("目前季度")]),s("div",{staticClass:"col-sm-10"},[s("div",{staticClass:"custom-control custom-radio custom-control-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.active,expression:"formData.active"}],staticClass:"custom-control-input",attrs:{type:"radio",name:"active",required:"",id:"activeRadioTrue"},domProps:{value:!0,checked:t._q(t.formData.active,!0)},on:{change:function(e){return t.$set(t.formData,"active",!0)}}}),s("label",{staticClass:"custom-control-label",attrs:{for:"activeRadioTrue"}},[s("i",{staticClass:"fa fa-check"})])]),s("div",{staticClass:"custom-control custom-radio custom-control-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.active,expression:"formData.active"}],staticClass:"custom-control-input",attrs:{type:"radio",name:"active",required:"",id:"activeRadioFalse"},domProps:{value:!1,checked:t._q(t.formData.active,!1)},on:{change:function(e){return t.$set(t.formData,"active",!1)}}}),s("label",{staticClass:"custom-control-label",attrs:{for:"activeRadioFalse"}},[s("i",{staticClass:"fa fa-times"})])])])])]},proxy:!0},{key:"footer",fn:function(){return[s("div",{staticClass:"text-right"},[s("button",{staticClass:"btn btn-primary mr-1",attrs:{type:"submit"}},[t._v("Save")]),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){t.showModal=!1}}},[t._v("Close")])])]},proxy:!0}]),model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}})],1)])},N=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",{staticClass:"thead-dark"},[s("tr",[s("th",{staticClass:"fit"},[t._v("季度Slug")]),s("th",{staticClass:"fit"},[t._v("季度名稱")]),s("th",[t._v("標題")]),s("th",[t._v("網址")]),s("th",{staticClass:"fit"},[t._v("目前季度")]),s("th",{staticClass:"fit"})])])}],O=s("59ca"),j=(s("e71f"),O["initializeApp"]({apiKey:"AIzaSyBoqlNynbeYZMlMhSejGG_NEEcdnbsC1s4",authDomain:"dmhy-share.firebaseapp.com",databaseURL:"https://dmhy-share.firebaseio.com",projectId:"dmhy-share",storageBucket:"",messagingSenderId:"282849500504",appId:"1:282849500504:web:c681fb63405904eb"})),M=j.firestore(),E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal fade",class:{show:t.show},style:{display:t.show?"block":"none"},attrs:{tabindex:"-1",role:"dialog"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered",class:t.size?"modal-"+t.size:null,attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header bg-dark text-white"},[t._t("header"),s("button",{staticClass:"close text-white",attrs:{type:"button"},on:{click:function(e){t.show=!1}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])],2),s("div",{staticClass:"modal-body"},[t._t("body")],2),s("div",{staticClass:"modal-footer"},[t._t("footer")],2)])])])},q=[],A={props:["value","size"],data:function(){return{show:!!this.value}},watch:{value:function(t){this.show=t},show:function(t){this.$emit("input",t)}},methods:{ok:function(){this.$emit("ok")}}},I=A,W=(s("22d7"),Object(c["a"])(I,E,q,!1,null,null,null)),R=W.exports,z={components:{Modal:R},data:function(){return{show:!1,sources:{},showModal:!1,formAction:null,editingId:null,formData:{}}},firestore:{sources:M.collection("sources")},methods:{submitForm:function(){switch(this.showModal=!1,this.formAction){case"store":this.store();break;case"update":this.update();break}this.editingId=null,this.formAction=null,this.formData={}},create:function(){this.formAction="store",this.formData={},this.showModal=!0},store:function(){this.$firestoreRefs.sources.add(this.formData)},edit:function(t){this.editingId=t.id,this.formAction="update",this.formData=Object.assign({},t),this.showModal=!0},update:function(){this.editingId&&this.$firestoreRefs.sources.doc(this.editingId).set(this.formData)},destroy:function(t){window.confirm("Confirm Delete: "+t.season)&&this.$firestoreRefs.sources.doc(t.id).delete()}}},B=z,F=Object(c["a"])(B,P,N,!1,null,null,null),L=F.exports,J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mb-0"},[s("div",{staticClass:"d-flex align-items-center mb-2"},[s("span",{staticClass:"fa-2x mr-2"},[t.show?s("i",{staticClass:"fa fa-angle-down"}):s("i",{staticClass:"fa fa-angle-right"})]),s("h4",{staticClass:"mb-0 mr-2",on:{click:function(e){t.show=!t.show}}},[t._v("節目資料")]),s("div",{staticClass:"d-inline-block mr-2"},[s("div",{staticClass:"input-group"},[t._m(0),s("select",{directives:[{name:"model",rawName:"v-model",value:t.activeSession,expression:"activeSession"}],staticClass:"custom-select",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.activeSession=e.target.multiple?s:s[0]}}},t._l(t.seasons,function(e,a){return s("option",{key:a,domProps:{value:a,textContent:t._s(e)}})}),0)])]),s("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button"},on:{click:t.create}},[s("i",{staticClass:"fa fa-plus"})]),s("div",{staticClass:"ml-auto"},[s("span",{staticClass:"badge badge-pill badge-info",domProps:{textContent:t._s(t.programs.length)}})])]),s("div",{staticClass:"card collapse",class:{show:t.show}},[s("div",{staticClass:"card-header"},[s("ul",{staticClass:"nav nav-tabs card-header-tabs"},t._l(t.weekNames,function(e,a){return s("li",{key:a,staticClass:"nav-item"},[s("a",{staticClass:"nav-link",class:{active:t.activeWeekNo==a},attrs:{href:"#"},domProps:{textContent:t._s(e)},on:{click:function(e){e.preventDefault(),t.activeWeekNo=a}}})])}),0)]),s("table",{staticClass:"table table-striped mb-0"},[t._m(1),s("tbody",t._l(t.dayPrograms,function(e){return s("tr",{key:e.id},[s("td",{staticClass:"fit",domProps:{textContent:t._s(t.weekNames[e.week_no])}}),s("td",{domProps:{textContent:t._s(e.name)}}),s("td",{domProps:{textContent:t._s(e.keyword)}}),s("td",{domProps:{textContent:t._s(e.season_slugs.join(", "))}}),s("td",{staticClass:"fit"},[s("div",{staticClass:"ml-auto btn-group btn-group-sm",attrs:{role:"group"}},[s("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(s){return t.edit(e)}}},[s("i",{staticClass:"fa fa-pen"})]),s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(s){return t.destroy(e)}}},[s("i",{staticClass:"fa fa-trash"})])])])])}),0)])]),s("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[s("modal",{attrs:{size:"lg"},scopedSlots:t._u([{key:"header",fn:function(){return[s("h5",{staticClass:"modal-title"},[t._v("節目")])]},proxy:!0},{key:"body",fn:function(){return[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label"},[t._v("星期")]),s("div",{staticClass:"col-sm-10 pt-2"},t._l(t.weekNames,function(e,a){return s("div",{key:a,staticClass:"custom-control custom-radio custom-control-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.week_no,expression:"formData.week_no"}],staticClass:"custom-control-input",attrs:{type:"radio",name:"week_no",required:"",id:"weekNoRadio"+a},domProps:{value:a,checked:t._q(t.formData.week_no,a)},on:{change:function(e){return t.$set(t.formData,"week_no",a)}}}),s("label",{staticClass:"custom-control-label",attrs:{for:"weekNoRadio"+a},domProps:{textContent:t._s(e)}})])}),0)]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label"},[t._v("名稱")]),s("div",{staticClass:"col-sm-10"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.name,expression:"formData.name"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.formData.name},on:{input:function(e){e.target.composing||t.$set(t.formData,"name",e.target.value)}}})])]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label"},[t._v("關鍵字")]),s("div",{staticClass:"col-sm-10"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.keyword,expression:"formData.keyword"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.formData.keyword},on:{input:function(e){e.target.composing||t.$set(t.formData,"keyword",e.target.value)}}})])]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label"},[t._v("\n                            季度\n                            "),s("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button"},on:{click:t.addSeason}},[s("i",{staticClass:"fa fa-plus"})])]),s("div",{staticClass:"col-sm-10"},t._l(t.formData.season_slugs,function(e,a){return s("div",{key:a,staticClass:"d-flex align-items-center"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.formData.season_slugs[a],expression:"formData.season_slugs[index]"}],staticClass:"form-control mr-2",attrs:{required:""},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.formData.season_slugs,a,e.target.multiple?s:s[0])}}},t._l(t.sources,function(e){return s("option",{key:e.id,domProps:{value:e.season_slug,textContent:t._s(e.season_name)}})}),0),s("button",{staticClass:"btn btn-sm btn-warning",attrs:{type:"button"},on:{click:function(e){return t.formData.season_slugs.splice(a,1)}}},[s("i",{staticClass:"fa fa-minus"})])])}),0)])]},proxy:!0},{key:"footer",fn:function(){return[s("div",{staticClass:"text-right"},[s("button",{staticClass:"btn btn-primary mr-1",attrs:{type:"submit"}},[t._v("Save")]),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){t.showModal=!1}}},[t._v("Close")])])]},proxy:!0}]),model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}})],1)])},T=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-group-prepend"},[s("label",{staticClass:"input-group-text"},[t._v("季度")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",{staticClass:"thead-dark"},[s("tr",[s("th",{staticClass:"fit"},[t._v("星期")]),s("th",[t._v("名稱")]),s("th",[t._v("關鍵字")]),s("th",[t._v("季度")]),s("th",{staticClass:"fit"})])])}],H=["週日","週一","週二","週三","週四","週五","週六"],G={week_no:(new Date).getDay(),name:null,keyword:null,season_slugs:[]},V={components:{Modal:R},data:function(){return{show:!0,weekNames:H,activeWeekNo:(new Date).getDay(),activeSession:null,sources:[],programs:[],showModal:!1,formAction:null,editingId:null,formData:G}},computed:{dayPrograms:function(){var t=this;return this.programs.filter(function(e){return e.week_no==t.activeWeekNo})},seasons:function(){var t={};return this.sources.map(function(e){t[e.season_slug]=e.season_name}),t}},watch:{sources:function(t){var e=t.filter(function(t){return t.active});e.length&&(this.activeSession=e[0].season_slug)},activeSession:function(t){var e=M.collection("programs").where("season_slugs","array-contains",t);this.$bind("programs",e)}},firestore:{sources:M.collection("sources")},methods:{addSeason:function(){var t=this.formData.season_slugs.concat();t[t.length]=this.activeSession,this.formData.season_slugs=t},submitForm:function(){if(this.showModal=!1,!this.formData.season_slugs.length)return window.alert("季度不可空白"),void(this.showModal=!0);var t=Object.assign({},this.formData);switch(t.season_slugs=t.season_slugs.filter(function(t,e,s){return s.indexOf(t)===e}),this.formData=t,this.formAction){case"store":this.store();break;case"update":this.update();break}this.editingId=null,this.formAction=null,this.formData=JSON.parse(JSON.stringify(G)),this.formData.week_no=this.activeWeekNo},create:function(){this.formAction="store",this.formData=JSON.parse(JSON.stringify(G)),this.formData.week_no=this.activeWeekNo,this.showModal=!0},store:function(){M.collection("programs").add(this.formData)},edit:function(t){this.editingId=t.id,this.formAction="update",this.formData=Object.assign({},t),this.showModal=!0},update:function(){this.editingId&&M.collection("programs").doc(this.editingId).set(this.formData)},destroy:function(t){window.confirm("Confirm Delete: "+t.season)&&M.collection("programs").doc(t.id).delete()}}},K=V,U=Object(c["a"])(K,J,T,!1,null,null,null),Y=U.exports,Z={components:{SourcePanel:L,ProgramPanel:Y},mounted:function(){"http:"==location.protocol&&(location.href=location.href.replace("http:","https:"))}},Q=Z,X=Object(c["a"])(Q,S,$,!1,null,null,null),tt=X.exports,et=[{path:"/",name:"home",component:m},{path:"/program",name:"program",component:D},{path:"/admin",name:"admin",component:tt}],st=new n["a"]({routes:et}),at=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vue-drawer-layout",{ref:"drawer",attrs:{"drawer-width":300},on:{"slide-end":t.handleSlideEnd,"mask-click":t.toggleDrawer}},[s("div",{staticClass:"drawer-content",attrs:{slot:"drawer"},slot:"drawer"},[s("Drawer",{attrs:{visible:t.drawerVisible}})],1),s("div",{attrs:{slot:"content"},slot:"content"},[s("router-view")],1)])},ot=[],nt=s("bd86"),rt=(s("7f7f"),s("f77e")),it=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"drawer"},[s("div",{staticClass:"open-btn",on:{click:function(e){return t.$eventHub.$emit("toggle-drawer")}}},[t.visible?s("i",{staticClass:"fas fa-angle-double-left fa-2x"}):s("i",{staticClass:"fas fa-angle-double-right fa-2x"})]),s("div",{staticClass:"drawer-container d-flex flex-column h-100"},[s("div",{staticClass:"header d-flex align-items-center m-3"},[t.changeSeason?s("div",{staticClass:"d-inline-block mr-2"},[s("div",{staticClass:"input-group input-group-sm"},[t._m(0),s("select",{directives:[{name:"model",rawName:"v-model",value:t.activeSession,expression:"activeSession"}],staticClass:"custom-select",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.activeSession=e.target.multiple?s:s[0]}}},t._l(t.seasons,function(e,a){return s("option",{key:a,domProps:{value:a,textContent:t._s(e)}})}),0)])]):s("h3",{staticClass:"mb-0",domProps:{textContent:t._s(t.activeSource.season_name||"Loading")}}),s("button",{staticClass:"ml-auto btn btn-sm btn-info",attrs:{type:"button"},on:{click:function(e){t.changeSeason=!t.changeSeason}}},[s("i",{staticClass:"fa fa-sync-alt"})])]),s("div",{staticClass:"content flex-grow-1"},[s("ul",{staticClass:"list-group list-group-flush"},[t._l(t.weekNames,function(e,a){return[s("li",{key:"head"+a,staticClass:"list-group-item d-flex justify-content-between align-items-center",class:{"bg-primary":t.activeWeekNo==a},staticStyle:{cursor:"pointer"},on:{click:function(e){return t.changeWeekNo(a)}}},[t._v("\n                        "+t._s(e)+"\n                        "),s("span",{staticClass:"badge badge-secondary badge-pill",domProps:{textContent:t._s(t.programsByWeek[a].length)}})]),t.programsByWeek[a].length?s("div",{key:"body"+a,staticClass:"list-group-item pl-4 collapse",class:{show:t.activeWeekNo==a},staticStyle:{"background-color":"#464646"}},t._l(t.programsByWeek[a]||[],function(e,o){return s("a",{key:a+o,staticClass:"text-truncate d-block p-1",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.changeProgram(e)}}},[t._v("\n                            "+t._s(e.name)+"\n                        ")])}),0):t._e()]})],2),s("div",{staticClass:"mx-3 mt-3"},[t._m(1),s("div",[s("small",[s("a",{attrs:{href:t.activeSource.url,target:"_blank"},domProps:{textContent:t._s(t.activeSource.title)}})])])])]),s("div",{staticClass:"footer mt-3 mx-3 py-2 border-top"},[s("auth-bar")],1)])])},lt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-group-prepend"},[s("label",{staticClass:"input-group-text bg-dark text-light"},[t._v("季度")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("span",{staticClass:"badge badge-info"},[t._v("資料來源")])])}],ct=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login d-flex align-items.center"},[s("div",{staticClass:"left"},[t.user&&t.admins.indexOf(t.user.email)>-1?s("router-link",{attrs:{to:"/admin"}},[s("i",{staticClass:"fa fa-cog"}),t._v(" Admin\n        ")]):t._e()],1),s("div",{staticClass:"right ml-auto"},[t.user?t._e():s("a",{on:{click:t.signIn}},[s("i",{staticClass:"fa fa-sign-in-alt fa-lg"}),t._v(" LogIn\n        ")]),t.user?s("a",{attrs:{title:t.user.displayName},on:{click:t.signOut}},[s("i",{staticClass:"fa fa-sign-out-alt fa-lg"}),t._v(" Logout\n        ")]):t._e()])])},ut=[],dt=(s("ea7b"),{data:function(){return{admins:["asper.tw@gmail.com"],user:null}},created:function(){var t=this;O["auth"]().onAuthStateChanged(function(e){t.user=e})},methods:{signIn:function(){var t=this,e=new O["auth"].GoogleAuthProvider;O["auth"]().signInWithPopup(e).then(function(e){t.user=e.user}).catch(function(t){alert("Login error: "+t.message)})},signOut:function(){O["auth"]().signOut()}}}),mt=dt,ft=Object(c["a"])(mt,ct,ut,!1,null,null,null),pt=ft.exports,vt={components:{AuthBar:pt},props:["visible"],data:function(){return{changeSeason:!1,activeSession:null,sources:{},programs:[],weekNames:H,activeWeekNo:(new Date).getDay()}},computed:{programsByWeek:function(){var t={};return this.weekNames.map(function(e,s){t[s]=[]}),this.programs.map(function(e){t[e.week_no].push(e)}),t},activeSource:function(){var t=this.sources.filter(function(t){return t.active});return t.length?t[0]:{}},seasons:function(){var t={};return this.sources.map(function(e){t[e.season_slug]=e.season_name}),t}},watch:{sources:function(){this.activeSource.season_slug&&(this.activeSession=this.activeSource.season_slug)},activeSession:function(t){var e=M.collection("programs").where("season_slugs","array-contains",t);this.$bind("programs",e)}},firestore:{sources:M.collection("sources")},methods:{changeWeekNo:function(t){this.activeWeekNo=this.activeWeekNo==t?null:t},changeProgram:function(t){"program"===this.$route.name&&this.$route.query.keyword===t.keyword||this.$router.replace({name:"program",query:{keyword:t.keyword}})}}},ht=vt,gt=(s("7e7f"),Object(c["a"])(ht,it,lt,!1,null,"9810a192",null)),bt=gt.exports,Ct={name:"app",components:(a={},Object(nt["a"])(a,rt["DrawerLayout"].name,rt["DrawerLayout"]),Object(nt["a"])(a,"Drawer",bt),a),data:function(){return{drawerVisible:!1}},mounted:function(){this.toggleDrawer()},created:function(){this.$eventHub.$on("toggle-drawer",this.toggleDrawer)},beforeDestroy:function(){this.$eventHub.$off("toggle-drawer")},methods:{toggleDrawer:function(){this.$refs.drawer.toggle()},handleSlideEnd:function(t){this.drawerVisible=t}}},_t=Ct,wt=(s("034f"),Object(c["a"])(_t,at,ot,!1,null,null,null)),yt=wt.exports;o["a"].config.productionTip=!1,o["a"].use(n["a"]),o["a"].use(r["a"]),o["a"].prototype.$eventHub=new o["a"],new o["a"]({router:st,render:function(t){return t(yt)}}).$mount("#app")},"5c20":function(t,e,s){},"64a9":function(t,e,s){},"7e7f":function(t,e,s){"use strict";var a=s("801c"),o=s.n(a);o.a},"801c":function(t,e,s){},9306:function(t,e,s){"use strict";var a=s("5c20"),o=s.n(a);o.a},c0c0:function(t,e,s){},c487:function(t,e,s){"use strict";var a=s("e7a7"),o=s.n(a);o.a},e7a7:function(t,e,s){}});
//# sourceMappingURL=app.223d76c3.js.map