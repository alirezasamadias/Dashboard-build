(function(){"use strict";var e={1272:function(e,a,t){var n=t(5130),o=t(1387),l=t(6768),r=t(4232),s=t(144);const i=e=>{(0,l.sV)((()=>document.title=`Task App - ${e}`))};var u=i;const c={class:"container"},d=["textContent"],v=["dir"];var m={__name:"Home",setup(e){u("Dashboard");const a=(0,s.KR)(localStorage.getItem("userName")||"user"),t=(0,s.KR)(),n=(0,s.KR)(),o=(0,s.KR)();let i=(0,s.KR)();const m=()=>{t.value=(new Date).getHours(),n.value=(new Date).getMinutes(),t.value<10&&(t.value=`0${t.value}`),n.value<10&&(n.value=`0${n.value}`),i.value=`${t.value}:${n.value}`};return m(),setInterval(m,1e3),t.value<12?o.value="morning":t.value<13?o.value="noon":t.value<18?o.value="afternoon":t.value<=20?o.value="evening":t.value>20&&(o.value="night"),(e,t)=>((0,l.uX)(),(0,l.CE)("section",c,[(0,l.Lk)("h1",{class:"home-clock",textContent:(0,r.v_)((0,s.R1)(i))},null,8,d),(0,l.Lk)("p",{class:"title-lg",dir:"persian"==e.$i18n.locale?"rtl":"ltr"},(0,r.v_)(e.$t(`good ${o.value}`))+" "+(0,r.v_)(a.value),9,v)]))}},h=t(1241);const p=(0,h.A)(m,[["__scopeId","data-v-79db0aa0"]]);var g=p,k=(t(4114),{__name:"SubmitBtn",emits:["submit"],setup(e,{emit:a}){const t=a,o=(0,s.KR)(),i=()=>{t("submit"),o.value=!0,setTimeout((()=>{o.value=!1}),1e3)};return(e,a)=>((0,l.uX)(),(0,l.CE)("button",{onClick:(0,n.D$)(i,["prevent"]),type:"submit",class:"btn"},[(0,l.Lk)("i",{class:(0,r.C4)(["btn-icon icon-checkmark",{"show-icon":o.value}])},null,2),(0,l.Lk)("span",{class:(0,r.C4)(["duration",{hide:o.value}])},(0,r.v_)(e.$t("save")),3)]))}});const f=k;var b=f;const L={class:"container"},w={class:"title-lg"},_={class:"form-group"},y={for:"new-todo"},C=["placeholder"],K={class:"subline"},$={class:"title-md"},z={key:0,class:"todos"},S=["onClick","textContent"],R={class:"todo-item-btn"},j=["onClick"],E=["onClick"],I={key:1};var O={__name:"Todo",setup(e){u("Todo");const a=(0,s.KR)(""),t=[{done:!1,content:"Write a blog post"}],o=JSON.parse(localStorage.getItem("todos"))||t,i=(0,s.KR)(o),c=()=>{a.value.trim()&&(i.value.push({remove:!1,done:!1,content:a.value}),a.value=""),p()},d=e=>{e.done=!e.done,p()},v=e=>{i.value[e].remove=!0,setTimeout((()=>{i.value.splice(e,1),p()}),500)},m=()=>{for(const e of i.value)e.remove=!0;setTimeout((()=>{i.value.splice(0,i.value.length),p()}),500)},h=e=>{a.value=i.value[e].content,v(e),p()},p=()=>{const e=JSON.stringify(i.value);localStorage.setItem("todos",e)};return(e,t)=>((0,l.uX)(),(0,l.CE)("div",L,[(0,l.Lk)("h1",w,(0,r.v_)(e.$t("to do")),1),(0,l.Lk)("form",{onSubmit:(0,n.D$)(c,["prevent"])},[(0,l.Lk)("div",_,[(0,l.Lk)("label",y,(0,r.v_)(e.$t("enter to do")),1),(0,l.bo)((0,l.Lk)("input",{id:"new-todo","onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e),autocomplete:"off",placeholder:e.$t("new to do")},null,8,C),[[n.Jo,a.value]])]),(0,l.bF)(b,{onSubmit:c})],32),(0,l.Lk)("div",K,[(0,l.Lk)("h2",$,(0,r.v_)(e.$t("to do list")),1),0!=i.value.length?((0,l.uX)(),(0,l.CE)("button",{key:0,class:"btn delete-all icon-delete",onClick:m},(0,r.v_)(e.$t("delete all")),1)):(0,l.Q3)("",!0)]),0!=i.value.length?((0,l.uX)(),(0,l.CE)("ul",z,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(i.value,((e,a)=>((0,l.uX)(),(0,l.CE)("li",{key:a,class:(0,r.C4)(["todo-item",{hide:e.remove}])},[(0,l.Lk)("span",{class:(0,r.C4)({done:e.done}),onClick:a=>d(e),textContent:(0,r.v_)(e.content)},null,10,S),(0,l.Lk)("div",R,[(0,l.Lk)("button",{onClick:e=>h(a),class:"btn icon-edit"},null,8,j),(0,l.Lk)("button",{onClick:e=>v(a),class:"btn icon-delete"},null,8,E)])],2)))),128))])):(0,l.Q3)("",!0),0===i.value.length?((0,l.uX)(),(0,l.CE)("span",I,(0,r.v_)(e.$t("empty list")),1)):(0,l.Q3)("",!0)]))}};const X=O;var F=X;const x={class:"container container-sm"},M={class:"title-lg jj"},Q={class:"form-group"},T={for:"city-name"},W=["placeholder"],A={key:0,class:"error"},P={key:1,class:"weather"},H=["src"],N={class:"weather-temperature"},J={class:"weather-city"};var U={__name:"Weather",setup(e){u("Weather");const a=e=>`https://murphyslaw.github.io/hosted-assets/weather/${e.toLowerCase()}.png`,t=async e=>{const a=`https://api.openweathermap.org/data/2.5/weather?q=${e}&units=metric&appid=16a38d83af836c90ee6837bcc746a9d6`;let t={};try{const e=await fetch(a);if(t=await e.json(),!e.ok||200!==t.cod)throw new Error(t.message||"Network response was not OK")}catch(n){throw new Error("Unable to fetch weather data",{cause:n})}return t},o=(0,s.KR)(),i=(0,s.KR)(),c=(0,s.KR)({city:null,temperature:null,icon:null});return(0,l.wB)(i,(async()=>{try{const e=await t(i.value);c.value.city=e.name,c.value.temperature=Math.round(e.main.temp),c.value.icon=a(e.weather[0].main)}catch(e){o.value=e.message}})),(e,a)=>((0,l.uX)(),(0,l.CE)("div",x,[(0,l.Lk)("h1",M,(0,r.v_)(e.$t("weather")),1),(0,l.Lk)("div",Q,[(0,l.Lk)("label",T,(0,r.v_)(e.$t("enter city name")),1),(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>i.value=e),placeholder:e.$t("city name"),spellcheck:"false",autofocus:"",id:"city-name"},null,8,W),[[n.Jo,i.value,void 0,{lazy:!0,trim:!0}]])]),o.value?((0,l.uX)(),(0,l.CE)("div",A,[(0,l.Lk)("p",null,(0,r.v_)(o.value),1)])):(0,l.Q3)("",!0),!o.value&&c.value.city?((0,l.uX)(),(0,l.CE)("div",P,[(0,l.Lk)("img",{class:"weather-icon",src:c.value.icon,alt:"weather-icon"},null,8,H),(0,l.Lk)("h1",N,(0,r.v_)(c.value.temperature)+"°C",1),(0,l.Lk)("h2",J,(0,r.v_)(c.value.city),1)])):(0,l.Q3)("",!0)]))}};const D=U;var G=D;const V={class:"container container-sm"},Y={class:"title-lg"},Z={class:"form-group"},B={for:"name"},q={class:"form-group"},ee={for:"theme"},ae={value:"dark",selected:""},te={value:"light"},ne={class:"form-group"},oe={for:"locale"},le=["value"];var re={__name:"Profile",setup(e){u("Profile");const a=(0,s.KR)(localStorage.getItem("userName")||""),t=(0,s.KR)(localStorage.getItem("theme")||"dark"),o=()=>{localStorage.setItem("userName",a.value),localStorage.setItem("theme",t.value),window.document.body.dataset.theme=localStorage.getItem("theme")};return(e,s)=>((0,l.uX)(),(0,l.CE)("div",V,[(0,l.Lk)("h1",Y,(0,r.v_)(e.$t("profile")),1),(0,l.Lk)("form",{onSubmit:s[3]||(s[3]=(0,n.D$)((e=>o()),["prevent"]))},[(0,l.Lk)("div",Z,[(0,l.Lk)("label",B,(0,r.v_)(e.$t("enter name")),1),(0,l.bo)((0,l.Lk)("input",{id:"name",placeholder:"name",spellcheck:"false",autofocus:"","onUpdate:modelValue":s[0]||(s[0]=e=>a.value=e),required:""},null,512),[[n.Jo,a.value,void 0,{trim:!0}]])]),(0,l.Lk)("div",q,[(0,l.Lk)("label",ee,(0,r.v_)(e.$t("select theme")),1),(0,l.bo)((0,l.Lk)("select",{id:"theme","onUpdate:modelValue":s[1]||(s[1]=e=>t.value=e)},[(0,l.Lk)("option",ae,(0,r.v_)(e.$t("dark")),1),(0,l.Lk)("option",te,(0,r.v_)(e.$t("light")),1)],512),[[n.u1,t.value]])]),(0,l.Lk)("div",ne,[(0,l.Lk)("label",oe,(0,r.v_)(e.$t("select locale")),1),(0,l.bo)((0,l.Lk)("select",{id:"locale","onUpdate:modelValue":s[2]||(s[2]=a=>e.$i18n.locale=a)},[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(e.$i18n.availableLocales,(a=>((0,l.uX)(),(0,l.CE)("option",{key:`locale-${a}`,value:a},(0,r.v_)(e.$t(a)),9,le)))),128))],512),[[n.u1,e.$i18n.locale]])]),(0,l.bF)(b,{onSubmit:o})],32)]))}};const se=re;var ie=se;const ue=[{path:"/",name:"home",component:g},{path:"/todo",name:"todo",component:F},{path:"/weather",name:"weather",component:G},{path:"/profile",name:"profile",component:ie}],ce=(0,o.aE)({history:(0,o.LA)(),routes:ue});var de=ce,ve=t(5384),me=JSON.parse('{"dashboard":"dashboard","todos":"todos","weather":"weather","profile":"profile","good morning":"good morning","good noon":"good noon","good afternoon":"good afternoon","good evening":"good evening","good night":"good night","to do":"to do","enter to do":"enter to do","new to do":"new to do","add":"add","to do list":"to do list","delete all":"delete all","empty list":"empty list","enter city name":"enter city name","city name":"city name","Tehran":"Tehran","Gilan":"Gilan","Khuzestan":"Khuzestan","Fars":"Fars","Isfahan":"Isfahan","Mashhad":"Mashhad","Qazvin":"Qazvin","Semnan":"Semnan","Qom":"Qom","Markazi":"Markazi","Zanjan":"Zanjan","Mazandaran":"Mazandaran","Golestan":"Golestan","Ardebil":"Ardebil","West Azerbaijan Province":"West Azerbaijan Province","Razavi Khorasan Province":"Razavi Khorasan Province","Hamadan":"Hamadan","Kurdistan":"Kurdistan","Kermanshah":"Kermanshah","Lorestan":"Lorestan","Bushehr":"Bushehr","Kerman":"Kerman","Hormozgan":"Hormozgan","Yazd":"Yazd","Zahedan":"Zahedan","Ilam":"Ilam","Yasuj":"Yasuj","Karaj":"Karaj","enter name":"enter name","name":"name","select theme":"select theme","dark":"dark","light":"light","select locale":"select locale","english":"english","persian":"persian","save":"save"}'),he=JSON.parse('{"dashboard":"داشبورد","todos":"کار ها","weather":"آب و هوا","profile":"نمایه","good morning":"صبح بخیر","good noon":"ظهر بخیر","good afternoon":"بعد از ظهر بخیر","good evening":"عصر بخیر","good night":"شب بخیر","to do":"کار ها","enter to do":"وارد کنید تا انجام دهید","new to do":"انجام کار جدید","add":"اضافه کردن","to do list":"لیست انجام کار","delete all":"حذف همه","enter city name":"نام شهر را وارد کنید","city name":"نام شهر","empty list":"لیست خالی","Tehran":"تهران","Gilan":"گیلان","Khuzestan":"خوزستان","Fars":"فارس","Isfahan":"اصفهان","Mashhad":"مشهد","Qazvin":"قزوین","Semnan":"سمنان","Qom":"قم","Markazi":"مرکزی","Zanjan":"زنجان","Mazandaran":"مازندران","Golestan":"گلستان","Ardebil":"اردبیل","West Azerbaijan Province":"استان آذربایجان غربی","Razavi Khorasan Province":"استان خراسان رضوی","Hamadan":"همدان","Kurdistan":"کردستان","Kermanshah":"کرمانشاه","Lorestan":"لرستان","Bushehr":"بوشهر","Kerman":"کرمان","Hormozgan":"هرمزگان","Yazd":"یزد","Zahedan":"زاهدان","Ilam":"ایلام","Yasuj":"یاسوج","Karaj":"کرج","enter name":"نام را وارد کنید","name":"نام","select theme":"طرح زمینه را انتخاب کنید","dark":"تیره","light":"روشن","select locale":"زبان را انتخاب کنید","english":"انگلیسی","persian":"فارسی","save":"ذخیره"}');const pe=()=>{const e=[{english:me},{persian:he}],a={};for(const t of e){const e=Object.keys(t);a[e]=t[e]}return a};var ge=(0,ve.hU)({locale:"english",fallbackLocale:"english",messages:pe()});const ke=(0,l.Lk)("div",{class:"loader"},null,-1),fe=[ke];var be={__name:"SiteLoader",setup(e){let a=(0,s.KR)(!1);return document.onreadystatechange=()=>{"complete"==document.readyState&&(a.value=!0)},(e,t)=>((0,l.uX)(),(0,l.CE)("div",{class:(0,r.C4)(["site-loader",{"hide-loader":(0,s.R1)(a)}])},fe,2))}};const Le=be;var we=Le,_e=t.p+"img/Website-Logo.73440df1.png";const ye={class:"navbar"},Ce=(0,l.Lk)("a",{href:"index.html",title:"website logo",class:"website-logo"},[(0,l.Lk)("img",{src:_e,alt:"nadin soft logo"})],-1),Ke={class:"menu-item"},$e={class:"menu-item"},ze={class:"menu-item"},Se={class:"menu-item"},Re={class:"profile"},je=["textContent"],Ee=(0,l.Lk)("i",{class:"btn icon-user"},null,-1);var Ie={__name:"Header",setup(e){const a=(0,s.KR)(!1),t=()=>a.value=!a.value,n=(0,s.KR)(localStorage.getItem("userName")||"user");return window.document.body.dataset.theme=localStorage.getItem("theme"),(e,o)=>{const s=(0,l.g2)("router-link");return(0,l.uX)(),(0,l.CE)("nav",ye,[Ce,(0,l.Lk)("ul",{class:(0,r.C4)(["menu",{"show-menu":a.value}])},[(0,l.Lk)("li",Ke,[(0,l.bF)(s,{"active-class":"active",to:{name:"home"},class:"menu-item-link"},{default:(0,l.k6)((()=>[(0,l.eW)((0,r.v_)(e.$t("dashboard")),1)])),_:1})]),(0,l.Lk)("li",$e,[(0,l.bF)(s,{"active-class":"active",to:{name:"todo"},class:"menu-item-link"},{default:(0,l.k6)((()=>[(0,l.eW)((0,r.v_)(e.$t("todos")),1)])),_:1})]),(0,l.Lk)("li",ze,[(0,l.bF)(s,{"active-class":"active",to:{name:"weather"},class:"menu-item-link"},{default:(0,l.k6)((()=>[(0,l.eW)((0,r.v_)(e.$t("weather")),1)])),_:1})]),(0,l.Lk)("li",Se,[(0,l.bF)(s,{"active-class":"active",to:{name:"profile"},class:"menu-item-link"},{default:(0,l.k6)((()=>[(0,l.eW)((0,r.v_)(e.$t("profile")),1)])),_:1})])],2),(0,l.Lk)("div",{class:(0,r.C4)(["menu-hamburger icon-menu",{"icon-close":a.value}]),onClick:t},null,2),(0,l.Lk)("div",Re,[(0,l.Lk)("span",{textContent:(0,r.v_)(n.value),class:"title-md"},null,8,je),Ee])])}}};const Oe=Ie;var Xe=Oe;const Fe={id:"header"},xe={id:"main"};var Me={__name:"App",setup(e){return(e,a)=>{const t=(0,l.g2)("router-view");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.bF)((0,s.R1)(we)),(0,l.Lk)("header",Fe,[(0,l.bF)((0,s.R1)(Xe))]),(0,l.Lk)("main",xe,[(0,l.bF)(t)])],64)}}};const Qe=Me;var Te=Qe;(0,n.Ef)(Te).use(de).use(ge).mount("#app")}},a={};function t(n){var o=a[n];if(void 0!==o)return o.exports;var l=a[n]={exports:{}};return e[n].call(l.exports,l,l.exports,t),l.exports}t.m=e,function(){var e=[];t.O=function(a,n,o,l){if(!n){var r=1/0;for(c=0;c<e.length;c++){n=e[c][0],o=e[c][1],l=e[c][2];for(var s=!0,i=0;i<n.length;i++)(!1&l||r>=l)&&Object.keys(t.O).every((function(e){return t.O[e](n[i])}))?n.splice(i--,1):(s=!1,l<r&&(r=l));if(s){e.splice(c--,1);var u=o();void 0!==u&&(a=u)}}return a}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[n,o,l]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.p="/"}(),function(){var e={524:0};t.O.j=function(a){return 0===e[a]};var a=function(a,n){var o,l,r=n[0],s=n[1],i=n[2],u=0;if(r.some((function(a){return 0!==e[a]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(i)var c=i(t)}for(a&&a(n);u<r.length;u++)l=r[u],t.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return t.O(c)},n=self["webpackChunktask_app"]=self["webpackChunktask_app"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=t.O(void 0,[504],(function(){return t(1272)}));n=t.O(n)})();
//# sourceMappingURL=app.df93a3a5.js.map