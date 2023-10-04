(function(){var e={5032:function(e,t,n){"use strict";var o=n(9242),r=n(3396);const i={class:"navbar"},s={class:"logo"},a={class:"navigation-buttons"},c={class:"navigation-items"},l=(0,r._)("li",{class:"navigation-items"},[(0,r._)("a",{href:"https://www.linkedin.com/in/michaelwidjaya/",target:"_blank",rel:"noopener noreferrer"}," linkedin ")],-1),u=(0,r._)("li",{class:"navigation-items"},[(0,r._)("a",{href:"https://github.com/idkkk11",target:"_blank"}," github ")],-1),d={class:"hamburger-navigation"};function p(e,t,n,o,p,m){const v=(0,r.up)("router-link"),f=(0,r.up)("SidebarMenu"),g=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",i,[(0,r._)("div",s,[(0,r.Wm)(v,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)(" michael widjaya. ")])),_:1})]),(0,r._)("div",a,[(0,r._)("li",c,[(0,r.Wm)(v,{to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)(" about me ")])),_:1})]),l,u]),(0,r._)("div",d,[(0,r.Wm)(f)])]),(0,r.Wm)(g)],64)}var m=n(7139);const v={id:"sidemenu"},f=(0,r._)("span",{class:"top"},null,-1),g=(0,r._)("span",{class:"mid"},null,-1),h=(0,r._)("span",{class:"bottom"},null,-1),b=[f,g,h],k={class:"sidemenu__nav"},w={class:"sidemenu__wrapper"},_={class:"sidemenu__list"},j=(0,r._)("a",{href:"https://www.linkedin.com/in/michaelwidjaya/",class:"nav-text",target:"_blank",rel:"noopener noreferrer"}," LinkedIn ",-1),y=[j],C=(0,r._)("a",{href:"https://github.com/idkkk11",class:"nav-text",target:"_blank",rel:"noopener noreferrer"}," GitHub ",-1),x=[C];function L(e,t,n,i,s,a){const c=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",v,[(0,r._)("button",{class:(0,m.C_)(["sidemenu__btn",{active:s.navOpen}]),onClick:t[0]||(t[0]=(...e)=>a.toggleNav&&a.toggleNav(...e))},b,2),(0,r.Wm)(o.uT,{name:"slide"},{default:(0,r.w5)((()=>[(0,r.wy)((0,r._)("nav",k,[(0,r._)("div",w,[(0,r._)("ul",_,[(0,r._)("li",{class:"sidemenu__item",onClick:t[1]||(t[1]=(...e)=>a.toggleNav&&a.toggleNav(...e))},[(0,r.Wm)(c,{to:"/about",class:"nav-text"},{default:(0,r.w5)((()=>[(0,r.Uk)(" About ")])),_:1})]),(0,r._)("li",{class:"sidemenu__item",onClick:t[2]||(t[2]=(...e)=>a.toggleNav&&a.toggleNav(...e))},y),(0,r._)("li",{class:"sidemenu__item",onClick:t[3]||(t[3]=(...e)=>a.toggleNav&&a.toggleNav(...e))},x)])])],512),[[o.F8,s.navOpen]])])),_:1})])}var T={name:"SidebarMenu",data(){return{navOpen:!1}},methods:{toggleNav(){this.navOpen=!this.navOpen}}},O=n(89);const D=(0,O.Z)(T,[["render",L]]);var S=D,A={components:{SidebarMenu:S}};const E=(0,O.Z)(A,[["render",p]]);var P=E,N=n(2483);const U={class:"segments"};function W(e,t,n,o,i,s){const a=(0,r.up)("LandingArea"),c=(0,r.up)("MyProjects");return(0,r.wg)(),(0,r.iD)("div",U,[(0,r.Wm)(a),(0,r.Wm)(c,{projectsList:i.projectsList},null,8,["projectsList"])])}var I=n.p+"media/websiteLanding.f48c21fb.mp4";const M={class:"landing"},F=(0,r._)("div",{class:"video-player"},[(0,r._)("video",{class:"landing-video",autoPlay:"",muted:"",loop:"",playsinline:""},[(0,r._)("source",{src:I,type:"video/mp4"})])],-1),H={href:"#all-projects",class:"bottom-button"},Z=(0,r._)("div",{class:"bottom-text"}," projects ",-1);function B(e,t,n,o,i,s){const a=(0,r.up)("ChevronDown"),c=(0,r.Q2)("smooth-scroll");return(0,r.wg)(),(0,r.iD)("div",M,[F,(0,r.wy)(((0,r.wg)(),(0,r.iD)("a",H,[Z,(0,r.Wm)(a)])),[[c,{duration:1e3,updateHistory:!1}]])])}const V=e=>((0,r.dD)("data-v-5bfc9c12"),e=e(),(0,r.Cn)(),e),q={class:"chevron-down",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},G=V((()=>(0,r._)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",d:"M19 9l-7 7-7-7"},null,-1))),J=[G];function $(e,t,n,o,i,s){return(0,r.wg)(),(0,r.iD)("svg",q,J)}var z={name:"chevron-down"};const K=(0,O.Z)(z,[["render",$],["__scopeId","data-v-5bfc9c12"]]);var Q=K,R={name:"LandingArea",components:{ChevronDown:Q},methods:{scrollDown(){var e=document.getElementById("all-projects");e.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}}};const Y=(0,O.Z)(R,[["render",B]]);var X=Y,ee=JSON.parse('{"0":{"index":"0","name":"AI Research Paper","skills":"Voiceflow | JavaScript | Alexa Developer Console | SPSS | Python","imgUrl":"../assets/backgrounds/1.png","route":"va"},"1":{"index":"1","name":"3DLabs","skills":"Three.js | Figma | JavaScript | CSS | HTML","imgUrl":"../assets/backgrounds/1.png","route":"3d"},"2":{"index":"2","name":"Emotech","skills":"Vue.js | Figma | Google Analytics | Python | Premiere Pro","imgUrl":"../assets/backgrounds/3.png","route":"emotech"},"3":{"index":"3","name":"The Quad","skills":"InDesign | Illustrator | Lumion | SketchUp | AutoCAD","imgUrl":"../assets/backgrounds/4.png","route":"quad"},"4":{"index":"4","name":"Lesku","skills":"Adobe XD","imgUrl":"../assets/backgrounds/5.png","route":"lesku"},"5":{"index":"5","name":"Philips Easy Grip","skills":"Illustrator | SolidWorks","imgUrl":"../assets/backgrounds/5.png","route":"philips"}}');const te={id:"all-projects"},ne=(0,r._)("div",{id:"projects-heading"},[(0,r._)("div",{id:"heading-line-1"}," Projects over the years: "),(0,r._)("div",{id:"heading-line-2"}," user research, design, and development. ")],-1);function oe(e,t,n,o,i,s){const a=(0,r.up)("EachProject"),c=(0,r.up)("router-link"),l=(0,r.up)("FooterSection");return(0,r.wg)(),(0,r.iD)("div",te,[ne,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.projectsList,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e,class:"project-placeholder"},[(0,r.Wm)(a,{project:e},null,8,["project"]),(0,r.Wm)(c,{to:`/${i.projectsList.route}`},null,8,["to"])])))),128)),(0,r.Wm)(l)])}const re={class:"project"},ie=(0,r._)("div",{class:"h-line"},null,-1),se={class:"project-content"},ae={class:"project-details"},ce={class:"project-name"},le={class:"project-skills"},ue={class:"project-image-container"},de=["src","alt"];function pe(e,t,n,o,i,s){const a=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",re,[ie,(0,r._)("div",se,[(0,r._)("div",ae,[(0,r.Wm)(a,{to:`/${this.project.route}`,onClick:e.$scrollToTop},{default:(0,r.w5)((()=>[(0,r._)("div",ce,(0,m.zw)(this.project.name),1)])),_:1},8,["to","onClick"]),(0,r._)("div",le,(0,m.zw)(this.project.skills),1)]),(0,r._)("div",ue,[(0,r._)("img",{src:s.getImgUrl(n.project.index),alt:e.pic,class:"project-image"},null,8,de)])])])}var me={props:{project:{type:Object,default:()=>{}}},mounted(){console.log(this.project),this.projectLink="@/assets/backgrounds/"+this.project.index+".png",console.log(this.projectLink)},methods:{getImgUrl(e){return n(1265)("./"+e+".png")},scrollToTop(){window.scrollTo(0,0)}}};const ve=(0,O.Z)(me,[["render",pe]]);var fe=ve,ge=n(5728),he={name:"HomeView",components:{EachProject:fe,FooterSection:ge.Z},props:{},data(){return{projectsList:ee}}};const be=(0,O.Z)(he,[["render",oe]]);var ke=be,we={name:"HomeView",components:{LandingArea:X,MyProjects:ke},data(){return{projectsList:[]}},mounted(){console.log("HEllo"),this.projectsList=ee,console.log(this.projectsList)}};const _e=(0,O.Z)(we,[["render",W]]);var je=_e;const ye=[{path:"/",name:"home",component:je},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,6336))},{path:"/va",name:"voiceassistant",component:()=>n.e(443).then(n.bind(n,4607))},{path:"/3d",name:"3dlabs",component:()=>n.e(443).then(n.bind(n,3948))},{path:"/emotech",name:"emotech",component:()=>n.e(443).then(n.bind(n,4031))},{path:"/quad",name:"quad",component:()=>n.e(443).then(n.bind(n,7127))},{path:"/lesku",name:"lesku",component:()=>n.e(443).then(n.bind(n,7029))},{path:"/philips",name:"philips",component:()=>n.e(443).then(n.bind(n,4963))}],Ce=(0,N.p7)({history:(0,N.r5)(),routes:ye,scrollBehavior(e,t,n){return n||{top:0}}});var xe=Ce,Le=n(55),Te=n.n(Le);const Oe=(0,o.ri)(P);Oe.use(xe),Oe.use(Te()),Oe.mount("#app")},5728:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var o=n(3396);const r={class:"footer"},i=(0,o.uE)('<div class="footer-title">Michael Adhipramana Widjaya</div><div class="vertical-line">|</div><a href="https://www.linkedin.com/in/michaelwidjaya/ " target="_blank">LinkedIn</a><div class="vertical-line">|</div><a href="https://github.com/idkkk11" target="_blank"> GitHub </a><div class="vertical-line">|</div>',6),s=(0,o._)("div",{class:"vertical-line"},"|",-1);function a(e,t,n,a,c,l){return(0,o.wg)(),(0,o.iD)("div",r,[i,(0,o._)("div",{id:"to-top",onClick:t[0]||(t[0]=(...e)=>l.toTop&&l.toTop(...e))},"Return to Top"),s,(0,o.Uk)(" Developed on Vue.js ")])}var c={name:"FooterSection",methods:{scrollToTop(){window.scrollTo(0,0)},toTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}},l=n(89);const u=(0,l.Z)(c,[["render",a]]);var d=u},1265:function(e,t,n){var o={"./0.png":866,"./1.png":6017,"./2.png":1567,"./3.png":2212,"./4.png":4711,"./5.png":5261};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id=1265},866:function(e,t,n){"use strict";e.exports=n.p+"img/0.222faa34.png"},6017:function(e,t,n){"use strict";e.exports=n.p+"img/1.1be7ac23.png"},1567:function(e,t,n){"use strict";e.exports=n.p+"img/2.2edf9ea8.png"},2212:function(e,t,n){"use strict";e.exports=n.p+"img/3.66fff757.png"},4711:function(e,t,n){"use strict";e.exports=n.p+"img/4.52608dce.png"},5261:function(e,t,n){"use strict";e.exports=n.p+"img/5.81d7a594.png"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var s=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],i=e[u][2];for(var a=!0,c=0;c<o.length;c++)(!1&i||s>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(a=!1,i<s&&(s=i));if(a){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.f6928fc8.js"}}(),function(){n.miniCssF=function(e){return"css/about.b35616bb.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-website:";n.l=function(o,r,i,s){if(e[o])e[o].push(r);else{var a,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){a=d;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=o),e[o]=[r];var p=function(t,n){a.onerror=a.onload=null,clearTimeout(m);var r=e[o];if(delete e[o],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(i){if(r.onerror=r.onload=null,"load"===i.type)n();else{var s=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=a,r.parentNode.removeChild(r),o(c)}};return r.onerror=r.onload=i,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){r=s[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var s=n.miniCssF(o),a=n.p+s;if(t(s,a))return r();e(o,a,r,i)}))},r={143:0};n.f.miniCss=function(e,t){var n={443:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var s=n.p+n.u(t),a=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",a.name="ChunkLoadError",a.type=i,a.request=s,r[1](a)}};n.l(s,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,s=o[0],a=o[1],c=o[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(c)var u=c(n)}for(t&&t(o);l<s.length;l++)i=s[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},o=self["webpackChunkvue_website"]=self["webpackChunkvue_website"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(5032)}));o=n.O(o)})();
//# sourceMappingURL=app.58d5658c.js.map