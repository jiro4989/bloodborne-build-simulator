(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1967:function(e,t,n){Promise.resolve().then(n.bind(n,4769))},4769:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var s=n(7437),l=n(2265);let a=[0,0,0,0,0,0,0,511,531,552,573,594,616,638,659,682,698,719,742,767,793,821,849,878,908,938,970,1001,1034,1066,1100,1123,1147,1170,1193,1216,1239,1261,1283,1304,1325,1346,1366,1386,1405,1424,1442,1458,1474,1489,1500,1508,1517,1526,1535,1544,1553,1562,1571,1580,1588,1597,1606,1615,1623,1632,1641,1649,1658,1666,1675,1683,1692,1700,1709,1717,1725,1734,1742,1750,1758,1767,1775,1783,1791,1799,1807,1814,1822,1830,1837,1845,1852,1860,1867,1874,1881,1888,1894,1900],r=[0,0,0,0,0,0,0,0,88,90,91,93,95,97,98,100,102,104,106,108,110,112,115,117,119,121,124,126,129,131,133,136,139,141,144,146,149,152,154,157,160,160,160,160,160,160,161,161,161,161,161,161,162,162,162,162,162,162,163,163,163,163,163,163,164,164,164,164,164,164,165,165,165,165,165,165,166,166,166,166,166,166,167,167,167,167,167,167,168,168,168,168,168,168,169,169,169,169,169,170];var i=n(4033);let c={name:"特筆なし",key:"milquetoast",level:10,vitality:11,endurance:10,strength:12,skill:10,bloodtinge:9,arcane:8},o={name:"村の生き残り",key:"loneSurvivor",level:10,vitality:14,endurance:11,strength:11,skill:10,bloodtinge:7,arcane:7},d={name:"悲惨な幼年期",key:"troubledChildhood",level:10,vitality:9,endurance:14,strength:9,skill:13,bloodtinge:6,arcane:9},x={name:"暴力的過去",key:"violentPast",level:10,vitality:12,endurance:11,strength:15,skill:9,bloodtinge:6,arcane:7},u={name:"プロフェッショナル",key:"professional",level:10,vitality:9,endurance:12,strength:9,skill:15,bloodtinge:7,arcane:8},h={name:"従軍経験",key:"militaryVeteran",level:10,vitality:10,endurance:10,strength:14,skill:13,bloodtinge:7,arcane:6},j={name:"一族の末裔",key:"nobleScion",level:10,vitality:7,endurance:8,strength:9,skill:13,bloodtinge:14,arcane:9},m={name:"過酷な運命",key:"cruelFate",level:10,vitality:10,endurance:12,strength:10,skill:9,bloodtinge:5,arcane:14},v={name:"生まれるべきではなかった",key:"wasteOfSkin",level:4,vitality:10,endurance:9,strength:10,skill:9,bloodtinge:7,arcane:9},b=new Map([["milquetoast",c],["loneSurvivor",o],["troubledChildhood",d],["violentPast",x],["professional",u],["militaryVeteran",h],["nobleScion",j],["cruelFate",m],["wasteOfSkin",v]]),p=[c,o,d,x,u,h,j,m,v];function g(e){return null==e?0:parseInt(e)}function y(){let e=(0,i.useSearchParams)(),t=e.get("bld")||"",n=g(e.get("org")),c=g(e.get("vit")),o=g(e.get("end")),d=g(e.get("str")),x=g(e.get("skl")),u=g(e.get("blt")),h=g(e.get("arc")),[j,m]=(0,l.useState)(p[n].key),[v,y]=(0,l.useState)(decodeURI(t)),[f,k]=(0,l.useState)(c),[N,C]=(0,l.useState)(o),[_,w]=(0,l.useState)(d),[S,I]=(0,l.useState)(x),[O,R]=(0,l.useState)(u),[E,P]=(0,l.useState)(h),U=b.get(j),L=99-U.vitality,F=99-U.endurance,T=99-U.strength,q=99-U.skill,B=99-U.bloodtinge,D=99-U.arcane;function V(e,t,n,s){if(e<n){t(n);return}if(s<e){t(s);return}t(e)}let $="bg-white text-black p-0.5 md:p-1 m-0.5 md:m-1 rounded w-10 md:w-12",A=e=>{let{value:t,text:n}=e;return(0,s.jsx)("button",{type:"button",className:$,onClick:e=>V(f+t,k,0,L),children:n})},H=e=>{let{value:t,text:n}=e;return(0,s.jsx)("button",{type:"button",className:$,onClick:e=>V(N+t,C,0,F),children:n})},M=e=>{let{value:t,text:n}=e;return(0,s.jsx)("button",{type:"button",className:$,onClick:e=>V(_+t,w,0,T),children:n})},W=e=>{let{value:t,text:n}=e;return(0,s.jsx)("button",{type:"button",className:$,onClick:e=>V(S+t,I,0,q),children:n})},Y=e=>{let{value:t,text:n}=e;return(0,s.jsx)("button",{type:"button",className:$,onClick:e=>V(O+t,R,0,B),children:n})},z=e=>{let{value:t,text:n}=e;return(0,s.jsx)("button",{type:"button",className:$,onClick:e=>V(E+t,P,0,D),children:n})},G="w-28 md:w-40 lg:w-60 m-2",J=function(e,t,n,s,l,a,r,i){let c=encodeURIComponent(e),o="".concat("https://jiro4989.github.io/bloodborne-build-simulator/","?bld=").concat(c,"&org=").concat(t,"&vit=").concat(n,"&end=").concat(s,"&str=").concat(l,"&skl=").concat(a,"&blt=").concat(r,"&arc=").concat(i);return o}(v,function(e){for(let t=0;t<p.length;t++){let n=p[t];if(n.key===e)return t}return 0}(j),f,N,_,S,O,E);return(0,s.jsxs)("main",{className:"flex flex-col items-center justify-between",children:[(0,s.jsx)("header",{className:"p-8 text-xl md:text-2xl",children:(0,s.jsx)("h1",{children:(0,s.jsx)("a",{href:"https://jiro4989.github.io/bloodborne-build-simulator/",children:"Bloodborne ビルドシミュレータ"})})}),(0,s.jsxs)("div",{className:"border rounded p-2 text-sm md:text-base",children:[(0,s.jsxs)("section",{className:"m-2 border-b-2 border-dotted",children:[(0,s.jsx)("h2",{className:"text-xl",children:"入力"}),(0,s.jsx)("table",{className:"m-4",children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{className:"w-20",children:"ビルド名"}),(0,s.jsx)("td",{className:"w-8"}),(0,s.jsx)("td",{children:(0,s.jsx)("input",{className:"w-80 text-black",type:"text",value:v,onChange:e=>y(e.target.value)})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"過去"}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)("select",{className:"text-black",value:j,onChange:e=>{m(e.target.value),k(0),C(0),w(0),I(0),R(0),P(0)},children:p.map((e,t)=>(0,s.jsx)("option",{value:e.key,children:e.name},e.key))})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"体力"}),(0,s.jsx)("td",{children:U.vitality+f}),(0,s.jsxs)("td",{children:[(0,s.jsx)(A,{value:-10,text:"-10"}),(0,s.jsx)(A,{value:-1,text:"-1"}),(0,s.jsx)("input",{className:G,type:"range",min:"0",max:L,step:"1",value:f,onChange:e=>k(parseInt(e.target.value))}),(0,s.jsx)(A,{value:1,text:"+1"}),(0,s.jsx)(A,{value:10,text:"+10"})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"持久力"}),(0,s.jsx)("td",{children:U.endurance+N}),(0,s.jsxs)("td",{children:[(0,s.jsx)(H,{value:-10,text:"-10"}),(0,s.jsx)(H,{value:-1,text:"-1"}),(0,s.jsx)("input",{className:G,type:"range",min:"0",max:F,step:"1",value:N,onChange:e=>C(parseInt(e.target.value))}),(0,s.jsx)(H,{value:1,text:"+1"}),(0,s.jsx)(H,{value:10,text:"+10"})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"筋力"}),(0,s.jsx)("td",{children:U.strength+_}),(0,s.jsxs)("td",{children:[(0,s.jsx)(M,{value:-10,text:"-10"}),(0,s.jsx)(M,{value:-1,text:"-1"}),(0,s.jsx)("input",{className:G,type:"range",min:"0",max:T,step:"1",value:_,onChange:e=>w(parseInt(e.target.value))}),(0,s.jsx)(M,{value:1,text:"+1"}),(0,s.jsx)(M,{value:10,text:"+10"})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"技術"}),(0,s.jsx)("td",{children:U.skill+S}),(0,s.jsxs)("td",{children:[(0,s.jsx)(W,{value:-10,text:"-10"}),(0,s.jsx)(W,{value:-1,text:"-1"}),(0,s.jsx)("input",{className:G,type:"range",min:"0",max:q,step:"1",value:S,onChange:e=>I(parseInt(e.target.value))}),(0,s.jsx)(W,{value:1,text:"+1"}),(0,s.jsx)(W,{value:10,text:"+10"})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"血質"}),(0,s.jsx)("td",{children:U.bloodtinge+O}),(0,s.jsxs)("td",{children:[(0,s.jsx)(Y,{value:-10,text:"-10"}),(0,s.jsx)(Y,{value:-1,text:"-1"}),(0,s.jsx)("input",{className:G,type:"range",min:"0",max:B,step:"1",value:O,onChange:e=>R(parseInt(e.target.value))}),(0,s.jsx)(Y,{value:1,text:"+1"}),(0,s.jsx)(Y,{value:10,text:"+10"})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"神秘"}),(0,s.jsx)("td",{children:U.arcane+E}),(0,s.jsxs)("td",{children:[(0,s.jsx)(z,{value:-10,text:"-10"}),(0,s.jsx)(z,{value:-1,text:"-1"}),(0,s.jsx)("input",{className:G,type:"range",min:"0",max:D,step:"1",value:E,onChange:e=>P(parseInt(e.target.value))}),(0,s.jsx)(z,{value:1,text:"+1"}),(0,s.jsx)(z,{value:10,text:"+10"})]})]})]})})]}),(0,s.jsxs)("section",{className:"m-2",children:[(0,s.jsx)("h2",{className:"text-xl",children:"計算結果"}),(0,s.jsx)("table",{className:"m-4",children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"レベル"}),(0,s.jsx)("td",{children:U.level+f+N+_+S+O+E})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"HP"}),(0,s.jsx)("td",{children:a[U.vitality+f]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"スタミナ"}),(0,s.jsx)("td",{children:r[U.endurance+N]})]})]})})]}),(0,s.jsxs)("section",{className:"m-2",children:[(0,s.jsx)("h2",{className:"text-xl",children:"共有"}),(0,s.jsxs)("p",{className:"m-4",children:["以下のURLをブックマークすることで、今のビルドを保存できます。",(0,s.jsx)("br",{}),"URLをコピーして共有すれば、他の人にビルドを紹介できます。"]}),(0,s.jsxs)("details",{children:[(0,s.jsx)("summary",{children:"折りたたみを展開する"}),(0,s.jsx)("p",{className:"m-4 w-80 break-words",children:(0,s.jsx)("a",{className:"text-cyan-300",href:J,children:J})})]})]})]}),(0,s.jsxs)("footer",{className:"m-4",children:["Copyright (C) 2023 ",(0,s.jsx)("a",{className:"text-cyan-300",href:"https://github.com/jiro4989",children:"jiro4989"})," |"," ",(0,s.jsx)("a",{className:"text-cyan-300",href:"https://github.com/jiro4989/bloodborne-build-simulator",children:"Repository"})]})]})}},622:function(e,t,n){"use strict";var s=n(2265),l=Symbol.for("react.element"),a=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),r=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var s,c={},o=null,d=null;for(s in void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,s)&&!i.hasOwnProperty(s)&&(c[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===c[s]&&(c[s]=t[s]);return{$$typeof:l,type:e,key:o,ref:d,props:c,_owner:r.current}}t.jsx=c,t.jsxs=c},7437:function(e,t,n){"use strict";e.exports=n(622)},4033:function(e,t,n){e.exports=n(94)}},function(e){e.O(0,[971,472,744],function(){return e(e.s=1967)}),_N_E=e.O()}]);