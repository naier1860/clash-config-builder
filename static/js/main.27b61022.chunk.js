(this["webpackJsonpclash-config-builder"]=this["webpackJsonpclash-config-builder"]||[]).push([[0],{176:function(e,t,n){e.exports=n(326)},181:function(e,t,n){},309:function(e,t,n){},326:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),o=n.n(c),i=(n(181),n(182),n(168)),s=(n(184),n(68)),u=n(40),l=n.n(u),f=(n(187),n(174)),p=(n(189),n(173)),m=(n(124),n(66)),b=(n(192),n(122)),d=(n(194),n(123)),v=n(41),h=(n(327),n(51)),g=n(162),y=n(94),O=n(22),x=(n(198),n(50)),j=n(74),E=n(67),k=n(163),w=n.n(k),C=n(164),I=n.n(C),S=function(e){var t=e.items,n=void 0===t?[]:t,a=e.onChange,c=void 0===a?function(){}:a,o=n.map((function(e){return r.a.createElement("div",{className:"menu-item",key:I()(),"data-id":e},e)}));return r.a.createElement(w.a,{options:{group:"shared",animation:150},onChange:c,className:"menu"},o)},N=(n(260),n(172)),P=n(165),R=n.n(P),D=n(120),F=(n(262),n(263),n(264),function(e){var t=e.title,n=void 0===t?"":t,c=e.visible,o=void 0!==c&&c,i=e.onChange,s=e.value,u=e.isHieghtlight,l=void 0===u||u,f=Object(a.useState)(s),p=Object(O.a)(f,2),m=p[0],b=p[1];return Object(a.useEffect)((function(){b(s)}),[s]),r.a.createElement(N.a,{title:n,placement:"right",onClose:function(){return i(m)},visible:o,width:"84%"},r.a.createElement(R.a,{value:m,onValueChange:function(e){return b(e)},highlight:function(e){return l?Object(D.highlight)(e,D.languages.yaml,"yaml"):e},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:14,borderRadius:5,backgroundColor:"rgb(40, 44, 52)",color:"#ffffff"}}))});n(309);function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(n,!0).forEach((function(t){Object(g.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L=n(310),M=x.a.Header,U=x.a.Content,V=x.a.Sider,J=x.a.Footer,K="raw",T="subs",H="proxies",z="isFlatRules",B="clashAPI",X=["DOMAIN-SUFFIX","DOMAIN-KEYWORD","DOMAIN","DOMAIN-SUFFIX","IP-CIDR","GEOIP","FINAL"],Y=54637,W=Object(E.create)({baseURL:"http://127.0.0.1:".concat(Y),headers:{"content-type":"application/x-www-form-urlencoded"}});function _(e,t){var n=function(e){var t=window.localStorage.getItem(e);try{return JSON.parse(t)}catch(n){}return t}(e),r=Object(a.useState)(null===n?t:n),c=Object(O.a)(r,2),o=c[0],i=c[1];return[o,function(t){i(t),function(e,t){window.localStorage.setItem(e,JSON.stringify(t))}(e,t)}]}function q(e){var t=e.title,n=e.initValue,r=void 0===n?"":n,c=_(e.cacheKey,r),o=Object(O.a)(c,2),i=o[0],s=o[1],u=Object(a.useState)(!1),l=Object(O.a)(u,2),f=l[0],p=l[1];return{title:t,visible:f,value:i,onChange:function(e){p(!1),s(e)},setValue:s,setVisible:p}}var Q=function(){var e=q({title:"Input raw config.yaml",cacheKey:K}),t=e.setValue,n=e.setVisible,c=q({title:"Input subscriptions(.yaml) url line by line",cacheKey:T}),o=c.setVisible,u=Object(a.useState)(!1),g=Object(O.a)(u,2),k=g[0],w=g[1],C=Object(a.useState)("0"),I=Object(O.a)(C,2),N=I[0],P=I[1],R=Object(a.useState)(""),D=Object(O.a)(R,2),G=D[0],Q=D[1],Z=Object(a.useState)(!1),$=Object(O.a)(Z,2),ee=$[0],te=$[1];Object(a.useEffect)((function(){W.get("/ping").then((function(e){var t=e.data,n=void 0===t?"":t,a=e.status;te(200===a&&"pong"===n)})).catch((function(e){}))}),[]);var ne=_(H,[]),ae=Object(O.a)(ne,2),re=ae[0],ce=ae[1],oe=_(z,!0),ie=Object(O.a)(oe,2),se=ie[0],ue=ie[1],le=_(B,""),fe=Object(O.a)(le,2),pe=fe[0],me=fe[1],be=Object(a.useState)({}),de=Object(O.a)(be,2),ve=de[0],he=de[1];function ge(){return(ge=Object(y.a)(l.a.mark((function e(){var t,n,a,r,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=function(){var e=Object(y.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(E.get)(t);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return","");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),w(!0),e.prev=2,n=c.value.split("\n").filter((function(e){return/^https?:\/\//.test(e)})),a=ee?"http://127.0.0.1:".concat(Y,"/proxy?url="):"https://cloudcompute.lbyczf.com/proxy-content?url=",e.next=7,Object(E.all)(n.map((function(e){return t("".concat(a).concat(encodeURIComponent(e)))})));case 7:r=e.sent,o=[],r.forEach((function(e,t){if(""!==e){var a={};try{a=Object(j.parse)(e)}catch(i){}var r=a.Proxy,c=void 0===r?[]:r;o=o.concat(c)}else s.a.error({message:"Could not download from subscription",description:n[t]})})),ce(o),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),s.a.error({message:"Sync Error",description:e.t0.stack});case 16:w(!1);case 17:case"end":return e.stop()}}),e,null,[[2,13]])})))).apply(this,arguments)}function ye(){return(ye=Object(y.a)(l.a.mark((function e(){var t,n,a,r,c,o,u,f,p,m,b,d,h,g,y,x,k,w,C,I,S,N,R,D,F,G,M,U,V,J,K,T,H,z,B,_;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=ve.Proxy,n=void 0===t?[]:t,a=ve["Proxy Group"],r=void 0===a?[]:a,c=ve.Rule,o=void 0===c?[]:c,u=[],f=!0,p=!1,m=void 0,e.prev=5,b=l.a.mark((function e(){var t,n,a,r,c,o,i,f,p,m;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=h.value,n=t.split(",").map((function(e){return e.trim()})),a=Object(O.a)(n,3),r=a[0],c=a[1],o=a[2],"RULE-SET"!==r||!se){e.next=18;break}return e.prev=4,e.next=7,Object(E.get)(c);case 7:i=e.sent,f=i.status,p=i.data,200===f&&(m=p.split("\n"),u=[].concat(Object(v.a)(u),Object(v.a)(m.map((function(e){var t=e.split(",").map((function(e){return e.trim()})),n=Object(O.a)(t,3),a=n[0],r=n[1],c=n[2];if(!X.includes(a))return null;var i="".concat(a,",").concat(r,",").concat(o);return"no-resolve"===c&&(i+=",no-resolve"),i})).filter((function(e){return e}))))),e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(4),s.a.error({message:"Ruleset download failed",description:c}),e.abrupt("return",{v:void 0});case 16:e.next=19;break;case 18:u=[].concat(Object(v.a)(u),[t]);case 19:case"end":return e.stop()}}),e,null,[[4,12]])})),d=o[Symbol.iterator]();case 8:if(f=(h=d.next()).done){e.next=16;break}return e.delegateYield(b(),"t0",10);case 10:if("object"!==typeof(g=e.t0)){e.next=13;break}return e.abrupt("return",g.v);case 13:f=!0,e.next=8;break;case 16:e.next=22;break;case 18:e.prev=18,e.t1=e.catch(5),p=!0,m=e.t1;case 22:e.prev=22,e.prev=23,f||null==d.return||d.return();case 25:if(e.prev=25,!p){e.next=28;break}throw m;case 28:return e.finish(25);case 29:return e.finish(22);case 30:y=n.concat(re),x=[].concat(Object(v.a)(y.map((function(e){return e.name}))),Object(v.a)(r.map((function(e){return e.name}))),["DIRECT","REJECT","GLOBAL"]),k=!0,w=!1,C=void 0,e.prev=35,I=r.entries()[Symbol.iterator]();case 37:if(k=(S=I.next()).done){e.next=74;break}N=S.value,R=Object(O.a)(N,2),D=R[0],F=R[1],G=F.proxies,M=void 0===G?[]:G,U=!0,V=!1,J=void 0,e.prev=46,K=M[Symbol.iterator]();case 48:if(U=(T=K.next()).done){e.next=57;break}if(H=T.value,x.includes(H)){e.next=54;break}return i.a.error("Group [".concat(F.name,"] contains a not exist proxy [").concat(H,"]"),5),P(D+""),e.abrupt("return");case 54:U=!0,e.next=48;break;case 57:e.next=63;break;case 59:e.prev=59,e.t2=e.catch(46),V=!0,J=e.t2;case 63:e.prev=63,e.prev=64,U||null==K.return||K.return();case 66:if(e.prev=66,!V){e.next=69;break}throw J;case 69:return e.finish(66);case 70:return e.finish(63);case 71:k=!0,e.next=37;break;case 74:e.next=80;break;case 76:e.prev=76,e.t3=e.catch(35),w=!0,C=e.t3;case 80:e.prev=80,e.prev=81,k||null==I.return||I.return();case 83:if(e.prev=83,!w){e.next=86;break}throw C;case 86:return e.finish(83);case 87:return e.finish(80);case 88:if(z="config.yml",B=Object(j.stringify)(A({},ve,{Proxy:y,Rule:u})),!ee){e.next=98;break}return e.next=93,W({method:"post",url:"/config",data:"config="+encodeURIComponent(B)});case 93:_=e.sent,204===_.status&&(window.location.href="clash://install-config?url=".concat(encodeURIComponent("http://127.0.0.1:".concat(Y,"/config")))),e.next=111;break;case 98:if(!pe){e.next=110;break}return e.prev=99,e.next=102,Object(E.put)("".concat(pe,"/configs"),{payload:B},{validateStatus:function(e){return 200!==e}});case 102:s.a.success({message:"Done",description:"Enjoy your free time."}),e.next=108;break;case 105:e.prev=105,e.t4=e.catch(99),s.a.info({message:"Could not write profile to Clash",description:e.t4.stack});case 108:e.next=111;break;case 110:L(B,z);case 111:case"end":return e.stop()}}),e,null,[[5,18,22,30],[23,,25,29],[35,76,80,88],[46,59,63,71],[64,,66,70],[81,,83,87],[99,105]])})))).apply(this,arguments)}Object(a.useEffect)((function(){var t={};try{t=Object(j.parse)(e.value)}catch(n){}he(t||{})}),[e.value]);var Oe=ve["Proxy Group"],xe=void 0===Oe?[]:Oe,je=ve.Proxy,Ee=void 0===je?[]:je,ke=xe.map((function(e,t){e.use;return r.a.createElement(h.a.Item,{key:t},e.name)})),we=[];if(N<xe.length){var Ce=xe[1*N].proxies;we=void 0===Ce?[]:Ce}var Ie=["DIRECT","GLOBAL","REJECT"].concat(Object(v.a)(xe.map((function(e){return e.name}))),Object(v.a)(Ee.map((function(e){return e.name}))),Object(v.a)(re.map((function(e){return e.name})))).filter((function(e){var t=/^/;try{t=new RegExp(G)}catch(n){}return!we.includes(e)&&t.test(e)}));return r.a.createElement(x.a,{className:"main"},r.a.createElement(M,{className:"header"},r.a.createElement(h.a,{theme:"dark",mode:"horizontal",selectedKeys:["1"],style:{lineHeight:"64px"}},r.a.createElement(h.a.Item,{key:"1"},"Proxy Group"),r.a.createElement(h.a.Item,{key:"2",onClick:function(){return n(!0)}},"Raw Config"),r.a.createElement(h.a.Item,{key:"3",onClick:function(){return o(!0)}},"Subscription"),r.a.createElement(h.a.Item,{key:"4",onClick:function(){return window.open("https://github.com/Fndroid/clash-config-builder","_blank")}},"Github"))),r.a.createElement(x.a,null,r.a.createElement(V,{width:200,style:{background:"#fff"}},r.a.createElement(h.a,{mode:"inline",selectedKeys:[N],onClick:function(e){return P(e.key)},style:{height:"100%",borderRight:0}},ke)),r.a.createElement(x.a,{style:{padding:"0 24px 24px"}},r.a.createElement(U,{className:"content"},r.a.createElement("div",{className:"list"},r.a.createElement(d.a,{count:we.length,overflowCount:2e3,offset:[20,0],style:{backgroundColor:"#f50"}},r.a.createElement("div",{className:"list-title"},"Proxies")),r.a.createElement(S,{items:we,onChange:function(e){var n=ve["Proxy Group"],a=void 0===n?[]:n;a[N].proxies=e;var r=Object(j.stringify)(A({},ve,{"Proxy Group":a}));t(r)}})),r.a.createElement("div",{className:"list"},r.a.createElement(d.a,{count:Ie.length,overflowCount:2e3,offset:[20,0],style:{backgroundColor:"#52c41a"}},r.a.createElement("div",{className:"list-title"},"More")),r.a.createElement(S,{items:Ie,onChange:function(){}}),r.a.createElement(b.a,{className:"filter-input",placeholder:"flter by regular expression",value:G,onChange:function(e){var t=e.target.value;Q(t)},allowClear:!0}))))),r.a.createElement(J,{className:"footer"},r.a.createElement(m.a,{className:"btn",loading:k,icon:"cloud-download",onClick:function(){return ge.apply(this,arguments)}},"Sync Proxies"),r.a.createElement(m.a,{className:"btn",type:"primary",icon:"download",onClick:function(){return ye.apply(this,arguments)}},"Download Profile"),r.a.createElement(p.a,{className:"btn",checked:se,onChange:function(e){var t=e.target.checked;ue(void 0===t||t)}},"Flat Ruleset"),r.a.createElement(f.a,{className:"btn mode-tag",color:ee?"green":"volcano"},"".concat(ee?"Local":"Remote"," Mode")),r.a.createElement(b.a,{value:pe,className:"input",placeholder:"http://127.0.0.1:9090",onChange:function(e){var t=e.target.value;me(void 0===t?"":t)}})),r.a.createElement(F,e),r.a.createElement(F,Object.assign({},c,{isHieghtlight:!1})))};o.a.render(r.a.createElement(Q,null),document.getElementById("root"))}},[[176,1,2]]]);
//# sourceMappingURL=main.27b61022.chunk.js.map