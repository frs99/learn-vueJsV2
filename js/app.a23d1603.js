(function(e){function t(t){for(var r,c,u=t[0],l=t[1],i=t[2],s=0,f=[];s<u.length;s++)c=u[s],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);b&&b(t);while(f.length)f.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},c={app:0},o={app:0},a=[];function u(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-2d0ccf9b":"aeacaddc","chunk-2d225b4a":"d04ed00f","chunk-7924fe18":"d77c3f70"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-7924fe18":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0ccf9b":"31d6cfe0","chunk-2d225b4a":"31d6cfe0","chunk-7924fe18":"48a02a9c"}[e]+".css",o=l.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var i=a[u],s=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(s===r||s===o))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){i=f[u],s=i.getAttribute("data-href");if(s===r||s===o)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete c[e],b.parentNode.removeChild(b),n(a)},b.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(b)})).then((function(){c[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=a);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=u(e);var f=new Error;i=function(t){s.onerror=s.onload=null,clearTimeout(b);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",f.name="ChunkLoadError",f.type=r,f.request=c,n[1](f)}o[e]=void 0}};var b=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var b=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"133a":function(e,t,n){"use strict";n("ce0e")},"4a12":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={class:"01"};function o(e,t,n,o,a,u){var l=Object(r["u"])("Navbar"),i=Object(r["u"])("Footer");return Object(r["q"])(),Object(r["d"])("div",c,[Object(r["g"])(l),Object(r["g"])(i)])}var a=n("9b19"),u=n.n(a),l={id:"nav"},i=Object(r["e"])("div",{class:"logo"},[Object(r["e"])("img",{src:u.a})],-1),s=Object(r["f"])("HOME"),f=Object(r["f"])("ABOUT"),b=Object(r["f"])("CONTACT");function d(e,t,n,c,o,a){var u=Object(r["u"])("router-link"),d=Object(r["u"])("router-view");return Object(r["q"])(),Object(r["d"])(r["a"],null,[Object(r["e"])("header",l,[i,Object(r["e"])("ul",null,[Object(r["e"])("li",null,[Object(r["g"])(u,{to:"/"},{default:Object(r["A"])((function(){return[s]})),_:1})]),Object(r["e"])("li",null,[Object(r["g"])(u,{to:"/about"},{default:Object(r["A"])((function(){return[f]})),_:1})]),Object(r["e"])("li",null,[Object(r["g"])(u,{to:"/contact"},{default:Object(r["A"])((function(){return[b]})),_:1})])])]),Object(r["g"])(d)],64)}var m={name:"Navbar"},p=(n("85bb"),n("6b0d")),O=n.n(p);const h=O()(m,[["render",d]]);var j=h,v=Object(r["e"])("h1",null,"this is footer from fares",-1),g=[v];function y(e,t,n,c,o,a){return Object(r["q"])(),Object(r["d"])("footer",null,g)}var k={name:"Footer"};n("9fd3");const w=O()(k,[["render",y]]);var N=w,C={components:{Navbar:j,Footer:N}};n("133a");const E=O()(C,[["render",o]]);var x=E,A=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),H=(n("b0c0"),Object(r["e"])("h1",null,' HELLO FROM "HOME"',-1));function S(e,t,n,c,o,a){var u=Object(r["u"])("Hometxt");return Object(r["q"])(),Object(r["d"])("main",null,[H,Object(r["g"])(u),Object(r["e"])("p",{class:Object(r["m"])(o.listClass.name)},Object(r["w"])(a.myName()+" "+o.nameHello),3),Object(r["e"])("button",{class:Object(r["m"])(o.listClass.margin),onClick:t[0]||(t[0]=function(e){return a.getConsole()})},"Print Name",2),Object(r["e"])("div",null,[Object(r["e"])("label",{class:Object(r["m"])(o.listClass.margin)},"Edit name :",2),Object(r["B"])(Object(r["e"])("input",{class:Object(r["m"])(o.listClass.margin),type:"text",placeholder:"edit","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.nameHello=e})},null,2),[[r["y"],o.nameHello]])])])}var T={class:"txt"},_=Object(r["e"])("p",null,[Object(r["f"])(" welcome"),Object(r["e"])("br"),Object(r["f"])(" This page is the home page"),Object(r["e"])("br"),Object(r["f"])(" and is just a test of how this site works ")],-1);function P(e,t,n,c,o,a){return Object(r["q"])(),Object(r["d"])("div",T,[_,Object(r["e"])("h3",null,Object(r["w"])(e.theName),1)])}var M={name:"Home-txt"};const q=O()(M,[["render",P]]);var L,B=q;localStorage.theName?L=localStorage.theName:(L=prompt("ENTER YOUR NAME"),localStorage.setItem("theName",L));var F={components:{Hometxt:B},data:function(){return{nameHello:L,listClass:{name:"name",margin:"mrgn"}}},methods:{myName:function(){return"Hello"},getConsole:function(){console.log(L)}}};n("9c01");const U=O()(F,[["render",S]]);var R=U,D=[{path:"/",name:"Home",component:R},{path:"/about",name:"About",component:function(){return n.e("chunk-7924fe18").then(n.bind(null,"f820"))}},{path:"/contact",name:"contact",component:function(){return n.e("chunk-2d0ccf9b").then(n.bind(null,"4fe8"))}},{path:"/:pathMatch(.*)*",name:"error",component:function(){return n.e("chunk-2d225b4a").then(n.bind(null,"e614"))}}],I=Object(A["a"])({history:Object(A["b"])("/"),routes:D}),J=I;Object(r["c"])(x).use(J).mount("body")},"7f65":function(e,t,n){},"85bb":function(e,t,n){"use strict";n("b870")},"9b19":function(e,t,n){e.exports=n.p+"img/logo.346e12ee.svg"},"9c01":function(e,t,n){"use strict";n("7f65")},"9fd3":function(e,t,n){"use strict";n("4a12")},b870:function(e,t,n){},ce0e:function(e,t,n){}});
//# sourceMappingURL=app.a23d1603.js.map