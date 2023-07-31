(function(){"use strict";var e={5683:function(e,t,n){var r=n(9242),o=n(3396);const a={class:"container"},i={class:"container with-nav"};function u(e,t,n,r,u,l){const c=(0,o.up)("the-navbar"),s=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o._)("div",i,[(0,o.Wm)(c)]),(0,o.Wm)(s)])}n(7658);var l=n(7139);const c={class:"navbar"},s=(0,o._)("h3",null,"Vue Features",-1),p={class:"navbar-menu"},d=["onClick"];function g(e,t,n,r,a,i){const u=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("header",c,[s,(0,o._)("ul",p,[(0,o._)("li",null,[(0,o.Wm)(u,{to:"/"},{default:(0,o.w5)((()=>[(0,o._)("span",{onClick:t[0]||(t[0]=t=>e.$router.push("/"))},"Главная")])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(u,{to:"/login"},{default:(0,o.w5)((()=>[(0,o.Uk)("Login")])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(u,{to:"/other",custom:""},{default:(0,o.w5)((({navigate:t,href:n})=>[(0,o._)("a",{href:"#",onClick:e=>i.navigateHandler(t,n),class:(0,l.C_)(["danger",{active:-1!=e.$route.path.indexOf(n)}])},"Остальное",10,d)])),_:1})])])])}var f={data(){return{myData:{oops:"gets removed"}}},props:{},methods:{navigateHandler(e,t){this.$router.push({path:t})}}},v=n(89);const h=(0,v.Z)(f,[["render",g]]);var m=h,b={data(){return{}},methods:{},components:{TheNavbar:m}};const y=(0,v.Z)(b,[["render",u]]);var w=y,k={install(e,t){let n="ru";const r=e=>{n=e};e.config.globalProperties.$i18n=e=>e.split(".").reduce(((e,t)=>e[t]||"Something Wrong"),t[n]),e.provide("changeLang",r)}},_=n(2483);const C={class:"card"},A=(0,o._)("h1",null,"Главная страница",-1),L=[A];function E(e,t,n,r,a,i){return(0,o.wg)(),(0,o.iD)("div",C,L)}var O={props:{}};const j=(0,v.Z)(O,[["render",E]]);var x=j;const $={class:"container"},S={class:"card"},T={class:"card flex"},z={class:"card-text"};function D(e,t,n,r,a,i){const u=(0,o.up)("AppAlert"),c=(0,o.up)("AppBlock"),s=(0,o.Q2)("color");return(0,o.wg)(),(0,o.iD)("div",$,[(0,o._)("div",S,[(0,o._)("h2",null,(0,l.zw)(e.$i18n("app.title")),1),(0,o._)("button",{class:"btn",onClick:t[0]||(t[0]=(...e)=>i.changeLanguage&&i.changeLanguage(...e))},(0,l.zw)(e.$i18n("app.changeLang")),1)]),e.alert?((0,o.wg)(),(0,o.j4)(u,{key:0,type:a.type,title:"Ойой",text:"Скрой меня =)"},null,8,["type"])):(0,o.kq)("",!0),(0,o._)("div",T,[(0,o.wy)(((0,o.wg)(),(0,o.iD)("p",z,[(0,o.Uk)((0,l.zw)(e.$i18n("app.changeColor")),1)])),[[s,a.myColor,a.colorType,{hover:!0}]]),(0,o._)("button",{class:"btn primary",onClick:t[1]||(t[1]=t=>{e.toggleAlert(),i.changeColor()})},(0,l.zw)(e.alert?e.$i18n("app.hide"):e.$i18n("app.show"))+" "+(0,l.zw)(e.$i18n("app.message")),1)]),(0,o.Wm)(c,{update:a.update},null,8,["update"])])}const P={class:"alert-title"};function W(e,t,n,r,a,i){return(0,o.wg)(),(0,o.iD)("div",{class:(0,l.C_)(["alert",n.type])},[(0,o._)("p",P,(0,l.zw)(n.title),1),(0,o._)("p",null,(0,l.zw)(n.text),1)],2)}var Z={props:{text:String,title:String,type:String}};const F=(0,v.Z)(Z,[["render",W]]);var H=F;const N={class:"container"},q={class:"card"};function B(e,t,n,r,a,i){const u=(0,o.up)("AppAlert");return(0,o.wg)(),(0,o.iD)("div",N,[e.alert?((0,o.wg)(),(0,o.j4)(u,{key:0,type:"danger",title:"Упс!!!",text:"А тут ошибочка =("})):(0,o.kq)("",!0),(0,o._)("div",q,[(0,o._)("button",{class:"btn primary",onClick:t[0]||(t[0]=(...t)=>e.toggleAlert&&e.toggleAlert(...t))},(0,l.zw)(e.alert?e.$i18n("app.hide"):e.$i18n("app.show"))+" "+(0,l.zw)(e.$i18n("app.message")),1)])])}var M={data(){return{alert:!1}},methods:{toggleAlert(){this.alert=!this.alert}}},U={mixins:[M],components:{AppAlert:H}};const Q=(0,v.Z)(U,[["render",B]]);var V=Q;let G="black",I="red";const J=e=>{e.target.style.color=I},K=e=>{e.target.style.color=G};var R={mounted(e,t){e.style[t.arg]=t.value,t.modifiers.hover&&(e.addEventListener("mouseover",J),e.addEventListener("mouseout",K))},updated(e,t){e.style[t.arg]=t.value,G=t.value,t.modifiers.hover&&(e.addEventListener("mouseover",J),e.addEventListener("mouseout",K))},unmounted(e,t){G="black",t.modifiers.hover&&(e.removeEventListener("mouseover",J),e.removeEventListener("mouseout",K))}},X={data(){return{type:"primary",myColor:"black",colorType:"color",lang:"ru",update:!1}},mixins:[M],directives:{color:R},inject:["changeLang"],methods:{changeColor(){this.myColor=this.alert?"#42b983":"black"},changeLanguage(){this.lang="ru"===this.lang?"en":"ru",this.changeLang(this.lang),this.update=!this.update}},components:{AppAlert:H,AppBlock:V}};const Y=(0,v.Z)(X,[["render",D]]);var ee=Y;const te=()=>n.e(966).then(n.bind(n,8966)),ne=(0,_.p7)({history:(0,_.PO)(),routes:[{path:"/",component:x,meta:{title:"Home"}},{path:"/login",name:"login",component:te,meta:{title:"Login"}},{path:"/other",name:"other",meta:{cantEnter:!0,title:"Other"},component:ee},{path:"/:notFound(.*)",redirect:"/"}],linkActiveClass:"active",linkExactActiveClass:"active"});ne.beforeEach(((e,t,n)=>{e.meta.cantEnter?(document.title="Login",n("/login")):(document.title=e.meta.title,n())}));var re=ne;const oe=(0,r.ri)(w),ae={ru:{app:{title:"Русский заголовок",changeLang:"Переключить язык",changeColor:"Меняем этот цвет",hide:"Скрыть",show:"Показать",message:"сообщение"}},en:{app:{title:"Eng title",changeLang:"Change lang",changeColor:"Change the color",hide:"Hide",show:"Show",message:"message"}}};oe.use(re),oe.use(k,ae),oe.mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],a=e[s][2];for(var u=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(u=!1,a<i&&(i=a));if(u){e.splice(s--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".5884c2fc.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-features:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var p=c[s];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==t+a){u=p;break}}u||(l=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=r),e[r]=[o];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(g);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},g=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),l&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/vue/"}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),u=new Error,l=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};n.l(i,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],u=r[1],l=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(l)var s=l(n)}for(t&&t(r);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(s)},r=self["webpackChunkvue_features"]=self["webpackChunkvue_features"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(5683)}));r=n.O(r)})();
//# sourceMappingURL=app.3b0e14ac.js.map