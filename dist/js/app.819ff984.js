(function(){"use strict";var e={6102:function(e,t,n){var o=n(9242),r=n(3396);function a(e,t,n,o,a,s){return(0,r.wg)(),(0,r.j4)((0,r.LL)(o.layout+"-layout"))}var s=n(2483);const i={class:"container"};function u(e,t,n,o,a,s){const u=(0,r.up)("AppAlert"),l=(0,r.up)("RouterView");return(0,r.wg)(),(0,r.iD)("div",i,[o.message?((0,r.wg)(),(0,r.j4)(u,{key:0,type:o.message.type,title:"Ойой",text:o.message.value,onHide:o.toggleAlert},null,8,["type","text","onHide"])):(0,r.kq)("",!0),(0,r.Wm)(l)])}var l=n(65),c=n(7139);const g={class:"alert-title"};function d(e,t,n,o,a,s){return(0,r.wg)(),(0,r.iD)("div",{class:(0,c.C_)(["alert",n.type])},[(0,r._)("p",g,(0,c.zw)(n.title),1),(0,r._)("p",null,(0,c.zw)(n.text),1),(0,r._)("span",{onClick:t[0]||(t[0]=(...e)=>s.toggleAlert&&s.toggleAlert(...e)),class:"alert-close"},"×")],2)}var p={props:{text:String,title:String,type:String},methods:{toggleAlert(){this.$emit("hide")}}},m=n(89);const h=(0,m.Z)(p,[["render",d]]);var v=h,f={setup(){const e=(0,l.oR)(),t=()=>{e.commit("clearMessage")};return{toggleAlert:t,message:(0,r.Fl)((()=>e.state.message))}},components:{AppAlert:v}};const y=(0,m.Z)(f,[["render",u]]);var w=y;const b={class:"container"},k={class:"container with-nav"};function C(e,t,n,o,a,s){const i=(0,r.up)("the-navbar"),u=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",b,[(0,r._)("div",k,[(0,r.Wm)(i)]),(0,r.Wm)(u)])}n(7658);const _={class:"navbar"},A=(0,r._)("h3",null,"VF",-1),L={class:"navbar-menu"},S=["onClick"];function E(e,t,n,a,s,i){const u=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("header",_,[A,(0,r._)("ul",L,[(0,r._)("li",null,[(0,r.Wm)(u,{to:"/"},{default:(0,r.w5)((()=>[(0,r._)("span",{onClick:t[0]||(t[0]=t=>e.$router.push("/"))},"Main")])),_:1})]),(0,r._)("li",null,[(0,r.Wm)(u,{to:"/other",custom:""},{default:(0,r.w5)((({navigate:t,href:n})=>[(0,r._)("a",{href:"#",onClick:e=>i.navigateHandler(t,n),class:(0,c.C_)({active:-1!=e.$route.path.indexOf(n)})},"Langs",10,S)])),_:1})]),(0,r._)("li",null,[(0,r.Wm)(u,{to:"/vuex"},{default:(0,r.w5)((()=>[(0,r.Uk)("Counter")])),_:1})]),(0,r._)("li",null,[(0,r.Wm)(u,{to:"/ws_messenger"},{default:(0,r.w5)((()=>[(0,r.Uk)("Messenger")])),_:1})]),(0,r._)("li",null,[(0,r._)("a",{href:"#",onClick:t[1]||(t[1]=(0,o.iM)(((...e)=>i.logoutHandler&&i.logoutHandler(...e)),["prevent"])),class:"danger"},"Logout")])])])}var O={methods:{...(0,l.OI)("auth",["logout"]),navigateHandler(e,t){this.$router.push({path:t})},logoutHandler(){this.logout(),this.$router.push({path:"/login"})}}};const x=(0,m.Z)(O,[["render",E]]);var M=x,j={components:{TheNavbar:M}};const $=(0,m.Z)(j,[["render",C]]);var T=$,I={setup(){const e=(0,s.yj)();return{layout:(0,r.Fl)((()=>e.meta.layout))}},components:{AuthLayout:w,MainLayout:T}};const D=(0,m.Z)(I,[["render",a]]);var F=D,H={install(e,t){let n="ru";const o=e=>{n=e};e.config.globalProperties.$i18n=e=>e.split(".").reduce(((e,t)=>e[t]||"Something Wrong"),t[n]),e.provide("changeLang",o)}};const Z={class:"card"},z=(0,r._)("h1",null,"Главная страница",-1),P=[z];function W(e,t,n,o,a,s){return(0,r.wg)(),(0,r.iD)("div",Z,P)}var N={props:{}};const U=(0,m.Z)(N,[["render",W]]);var R=U;const V={class:"container"},q={class:"card"},B={class:"card flex"},J={class:"card-text"};function Q(e,t,n,o,a,s){const i=(0,r.up)("AppAlert"),u=(0,r.up)("AppBlock"),l=(0,r.Q2)("color");return(0,r.wg)(),(0,r.iD)("div",V,[(0,r._)("div",q,[(0,r._)("h2",null,(0,c.zw)(e.$i18n("app.title")),1),(0,r._)("button",{class:"btn",onClick:t[0]||(t[0]=(...e)=>s.changeLanguage&&s.changeLanguage(...e))},(0,c.zw)(e.$i18n("app.changeLang")),1)]),e.alert?((0,r.wg)(),(0,r.j4)(i,{key:0,type:a.type,title:"Ойой",text:"Скрой меня =)",onHide:t[1]||(t[1]=t=>{e.toggleAlert(),s.changeColor()})},null,8,["type"])):(0,r.kq)("",!0),(0,r._)("div",B,[(0,r.wy)(((0,r.wg)(),(0,r.iD)("p",J,[(0,r.Uk)((0,c.zw)(e.$i18n("app.changeColor")),1)])),[[l,a.myColor,a.colorType,{hover:!0}]]),(0,r._)("button",{class:"btn primary",onClick:t[2]||(t[2]=t=>{e.toggleAlert(),s.changeColor()})},(0,c.zw)(e.alert?e.$i18n("app.hide"):e.$i18n("app.show"))+" "+(0,c.zw)(e.$i18n("app.message")),1)]),(0,r.Wm)(u,{update:a.update},null,8,["update"])])}const G={class:"container"},K={class:"card"};function X(e,t,n,o,a,s){const i=(0,r.up)("AppAlert");return(0,r.wg)(),(0,r.iD)("div",G,[e.alert?((0,r.wg)(),(0,r.j4)(i,{key:0,type:"danger",title:"Упс!!!",text:"А тут ошибочка =(",onHide:e.toggleAlert},null,8,["onHide"])):(0,r.kq)("",!0),(0,r._)("div",K,[(0,r._)("button",{class:"btn primary",onClick:t[0]||(t[0]=(...t)=>e.toggleAlert&&e.toggleAlert(...t))},(0,c.zw)(e.alert?e.$i18n("app.hide"):e.$i18n("app.show"))+" "+(0,c.zw)(e.$i18n("app.message")),1)])])}var Y={data(){return{alert:!1}},methods:{toggleAlert(){this.alert=!this.alert}}},ee={mixins:[Y],components:{AppAlert:v}};const te=(0,m.Z)(ee,[["render",X]]);var ne=te;let oe="black",re="red";const ae=e=>{e.target.style.color=re},se=e=>{e.target.style.color=oe};var ie={mounted(e,t){e.style[t.arg]=t.value,t.modifiers.hover&&(e.addEventListener("mouseover",ae),e.addEventListener("mouseout",se))},updated(e,t){e.style[t.arg]=t.value,oe=t.value,t.modifiers.hover&&(e.addEventListener("mouseover",ae),e.addEventListener("mouseout",se))},unmounted(e,t){oe="black",t.modifiers.hover&&(e.removeEventListener("mouseover",ae),e.removeEventListener("mouseout",se))}},ue={data(){return{type:"primary",myColor:"black",colorType:"color",lang:"ru",update:!1}},mixins:[Y],directives:{color:ie},inject:["changeLang"],methods:{changeColor(){this.myColor=this.alert?"#42b983":"black"},changeLanguage(){this.lang="ru"===this.lang?"en":"ru",this.changeLang(this.lang),this.update=!this.update}},components:{AppAlert:v,AppBlock:ne}};const le=(0,m.Z)(ue,[["render",Q]]);var ce=le;const ge={class:"container"},de={class:"card form-control"},pe={class:"box"},me=["disabled"],he=["disabled"];function ve(e,t,n,a,s,i){return(0,r.wg)(),(0,r.iD)("div",ge,[(0,r._)("div",de,[(0,r._)("h2",null,"Работа с Store - Vuex "+(0,c.zw)(e.getCount),1),(0,r._)("div",pe,[(0,r.wy)((0,r._)("input",{class:"input","onUpdate:modelValue":t[0]||(t[0]=e=>s.newCount=e),onInput:t[1]||(t[1]=(...e)=>i.inputChandler&&i.inputChandler(...e)),type:"number"},null,544),[[o.nr,s.newCount,void 0,{trim:!0,number:!0}]]),(0,r._)("button",{onClick:t[2]||(t[2]=t=>e.changeCount({type:"increment"})),class:"btn primary mt-10"},"Увеличить"),(0,r._)("button",{onClick:t[3]||(t[3]=t=>e.changeCount({type:"decriment"})),class:"btn mt-10"},"Уменьшить"),(0,r._)("button",{onClick:t[4]||(t[4]=t=>e.changeCount({type:"set",value:s.newCount})),disabled:!s.newCount,class:"btn mt-10"},"Задать",8,me),(0,r._)("button",{onClick:t[5]||(t[5]=t=>e.changeCount({type:"reset"})),disabled:!e.getCount,class:"btn danger mt-10"},"Сброс",8,he)])])])}var fe={name:"Socket",data(){return{newCount:""}},computed:{...(0,l.Se)("counter",["getCount"])},methods:{...(0,l.nv)("counter",["changeCount"]),inputChandler(){console.log(this.newCount)}}};const ye=(0,m.Z)(fe,[["render",ve]]);var we=ye;const be={count:0};var ke={namespaced:!0,state(){return{...be}},mutations:{increment(e){e.count+=1},decriment(e){e.count-=1},set(e,t){e.count=t.value},reset(e){e.count=0}},actions:{changeCount({commit:e},t){e(t.type,t)}},getters:{getCount(e,t,n,o){return e.count}}},Ce=n(4161);const _e={EMAIL_NOT_FOUND:"Пользователь с таким Email не найден",EMAIL_REPEAT:"Пользователь с такой почтой уже существует",INVALID_PASSWORD:"Неверный пароль"},Ae=e=>_e[e]?_e[e]:`Неизвестная ошибка: ${e}`,Le="jwt_token",Se="https://vue-server.onrender.com",Ee={token:localStorage.getItem(Le),user:localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):{},room:"",loginForm:!0};var Oe={namespaced:!0,state(){return{...Ee}},mutations:{changeForm(e){e.loginForm=!e.loginForm},setToken(e,t){e.token=t,localStorage.setItem(Le,t)},setUser(e,t){const n={id:t._id,name:t.username};e.user=n,localStorage.setItem("user",JSON.stringify(n))},setRoom(e,t){e.room=t},clearRoom(e){e.room=""},logout(e,t){e.token=null,e.room="",e.user={},localStorage.removeItem("user"),localStorage.removeItem(Le)}},actions:{async login({commit:e,dispatch:t},n){try{const{data:t}=await Ce.Z.post(`${Se}/auth/login`,n);e("setToken",t.token),e("setUser",t.user),e("clearMessage",null,{root:!0})}catch(o){throw t("setMessage",{value:Ae(o.response.data.error.message),type:"danger"},{root:!0}),new Error}},async registration({commit:e,dispatch:t},n){try{const{data:t}=await Ce.Z.post(`${Se}/auth/registration`,{username:n.name,email:n.email,password:n.password});e("setToken",t.token),e("setUser",t.user),e("clearMessage",null,{root:!0})}catch(o){throw t("setMessage",{value:Ae(o.response.data.error.message),type:"danger"},{root:!0}),new Error}}},getters:{token(e){return e.token},room(e){return e.room},user(e){return e.user},isAuth(e,t){return!!t.token},isLogin(e){return e.loginForm}}};const xe={message:null,loading:!1};var Me=(0,l.MT)({state(){return{...xe}},modules:{counter:ke,auth:Oe},mutations:{setLoading(e){e.loading=!0},clearLoading(e){e.loading=!1},setMessage(e,t){e.message=t},clearMessage(e){e.message=null}},actions:{setMessage({commit:e},t){e("setMessage",t),setTimeout((()=>{e("clearMessage")}),8e3)}},getters:{isLoading(e){return e.loading}}});const je=(0,s.p7)({history:(0,s.PO)(),routes:[{path:"/",component:R,meta:{title:"Home",layout:"main",auth:!0}},{path:"/login",name:"login",component:()=>n.e(303).then(n.bind(n,2303)),meta:{title:"Login",layout:"auth",auth:!1}},{path:"/other",name:"other",meta:{title:"Other",layout:"main",auth:!0},component:ce},{path:"/vuex",component:we,meta:{title:"Vuex",layout:"main",auth:!0}},{path:"/ws_messenger",component:()=>n.e(503).then(n.bind(n,503)),meta:{title:"Socket Messenger",layout:"main",auth:!0}},{path:"/:notFound(.*)",redirect:"/"}],linkActiveClass:"active",linkExactActiveClass:"active"});je.beforeEach(((e,t,n)=>{const o=e.meta.auth;o&&Me.getters["auth/isAuth"]?n():o&&!Me.getters["auth/isAuth"]?n("/login?message=auth"):!o&&Me.getters["auth/isAuth"]?n("/"):n()}));var $e=je;const Te=(0,o.ri)(F),Ie={ru:{app:{title:"Русский заголовок",changeLang:"Переключить язык",changeColor:"Меняем этот цвет",hide:"Скрыть",show:"Показать",message:"сообщение"}},en:{app:{title:"Eng title",changeLang:"Change lang",changeColor:"Change the color",hide:"Hide",show:"Show",message:"message"}}};console.log("Environment is:","production"),Te.use(Me),Te.use($e),Te.use(H,Ie),Te.mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var s=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],a=e[c][2];for(var i=!0,u=0;u<o.length;u++)(!1&a||s>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(i=!1,a<s&&(s=a));if(i){e.splice(c--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{303:"5086bc28",503:"1b9e905d"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-features:";n.l=function(o,r,a,s){if(e[o])e[o].push(r);else{var i,u;if(void 0!==a)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var g=l[c];if(g.getAttribute("src")==o||g.getAttribute("data-webpack")==t+a){i=g;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+a),i.src=o),e[o]=[r];var d=function(t,n){i.onerror=i.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/vue/"}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var s=n.p+n.u(t),i=new Error,u=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",i.name="ChunkLoadError",i.type=a,i.request=s,r[1](i)}};n.l(s,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,s=o[0],i=o[1],u=o[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(u)var c=u(n)}for(t&&t(o);l<s.length;l++)a=s[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},o=self["webpackChunkvue_features"]=self["webpackChunkvue_features"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(6102)}));o=n.O(o)})();
//# sourceMappingURL=app.819ff984.js.map