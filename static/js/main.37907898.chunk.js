(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{25:function(n,e,t){"use strict";t.r(e);var a=t(0),i=t.n(a),r=t(12),c=t.n(r),s=t(2),o=t(3),d=t(4),l=t.n(d),x=t(8),j=t(6);var h,b,p,f,O,m,u,w,g,y,v,A,C=function(){var n=Object(a.useState)([]),e=Object(j.a)(n,2),t=e[0],i=e[1];return Object(a.useEffect)((function(){function n(){return(n=Object(x.a)(l.a.mark((function n(){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:fetch("https://us-central1-dapp-pocket.cloudfunctions.net/cappuuApp/projects",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer c46da20b-f2cc-4e69-85c4-20d83c532abe"}}).then(function(){var n=Object(x.a)(l.a.mark((function n(e){var t;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.json();case 2:t=n.sent,i(t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}());case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),t},k=t(1),z=o.a.div(h||(h=Object(s.a)(["\n  width: 100%;\n  display: flex;\n\n  padding: 10px;\n  border: 1px solid #d4d4d4;\n  border-radius: 4px;\n  padding: 20px;\n  margin: 18px auto;\n  flex-direction: column;\n  box-sizing: border-box;\n"]))),S=o.a.div(b||(b=Object(s.a)(["\n  display: flex;\n  border-radius: 4px;\n  justify-content: space-between;\n  cursor: pointer;\n  @media screen and (max-width: 768px) {\n    flex-wrap: wrap;\n  }\n"]))),T=o.a.div(p||(p=Object(s.a)(["\n  color: #1a1a1a;\n  text-align: center;\n  font-weight: 400;\n  flex-grow: 1;\n\n  max-width: 120px;\n\n  @media screen and (max-width: 768px) {\n    text-align: left;\n  }\n"]))),N=Object(o.a)(T)(f||(f=Object(s.a)(["\n  flex-grow: 1.5;\n  max-width: 180px;\n  min-width: 120px;\n  @media screen and (max-width: 768px) {\n    width: 100%;\n    max-width: 100%;\n    text-align: left;\n    font-weight: 500;\n    font-size: 18px;\n    margin-bottom: 10px;\n  }\n"]))),R=Object(o.a)(T)(O||(O=Object(s.a)(["\n  display: none;\n  @media screen and (max-width: 768px) {\n    display: flex;\n    color: #9f9f9f;\n    font-size: 14px;\n    fint-wight: 500;\n  }\n"]))),I=Object(o.a)(T)(m||(m=Object(s.a)(["\n  max-width: 40px;\n  margin-right: 0;\n\n  span {\n    i {\n      color: #1a1a1a;\n    }\n  }\n  @media screen and (max-width: 768px) {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    max-width: 20px;\n  }\n"]))),L=o.a.div(u||(u=Object(s.a)(["\n  border-top: 0.5px dashed #d4d4d4;\n  margin: 16px 8px 0 8px;\n  transition: all 0.2s ease;\n  overflow: auto;\n  opacity: 1;\n"]))),B=o.a.div(w||(w=Object(s.a)(["\n  font-family: Roboto, 'Noto Sans TC', Arial, sans-serif;\n  font-size: 16px;\n  font-weight: 700;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  color: #1a1a1a;\n  margin: 20px 0 12px 0;\n"]))),D=o.a.div(g||(g=Object(s.a)(["\n  font-family: Roboto, 'Noto Sans TC', Arial, sans-serif;\n  font-size: 16px;\n  font-weight: 500;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.2;\n  letter-spacing: normal;\n  text-align: left;\n  color: #1a1a1a;\n  margin: 12px 0;\n"]))),E=Object(o.a)(D)(y||(y=Object(s.a)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin: 12px 12px 12px 0;\n  width: 100%;\n  a {\n    text-decoration: none;\n    color: #1a1a1a;\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n"]))),F=o.a.div(v||(v=Object(s.a)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n"]))),M=o.a.div(A||(A=Object(s.a)(["\n  margin-right: 50px;\n  max-width: 180px;\n  width: 100%;\n"])));var P,U,Y,J,q,G,H,V=function(n){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),i=t[0],r=t[1];return Object(k.jsxs)(z,{children:[Object(k.jsxs)(S,{onClick:function(){r(!i)},children:[Object(k.jsx)(N,{children:n.data.name}),Object(k.jsxs)(T,{children:[Object(k.jsx)(R,{children:"Type"}),Object(k.jsx)(T,{children:n.data.type})]}),Object(k.jsxs)(T,{children:[Object(k.jsx)(R,{children:"Flexible"}),Object(k.jsx)(T,{children:"Flexible"})]}),Object(k.jsxs)(T,{children:[Object(k.jsx)(R,{children:"Minimum"}),Object(k.jsx)(T,{children:"100USDC"})]}),Object(k.jsxs)(T,{children:[Object(k.jsx)(R,{children:"APY"}),Object(k.jsx)(T,{children:n.data.apr})]}),Object(k.jsx)(I,{children:Object(k.jsx)("span",{children:Object(k.jsx)("i",{className:"fas fa-chevron-down",style:i?{transform:"rotate(-90deg)",transition:" all 0.2s ease"}:{}})})})]}),Object(k.jsxs)(L,{style:i?{}:{overflow:"hidden",opacity:0,maxHeight:0,padding:0,margin:"0 8px "},children:[Object(k.jsx)(B,{children:"Introduction"}),Object(k.jsx)(D,{children:n.data.introduction}),Object(k.jsxs)(F,{children:[Object(k.jsxs)(M,{children:[Object(k.jsx)(B,{children:"Issuer"}),Object(k.jsx)(E,{children:n.data.issuer})]}),Object(k.jsxs)(M,{children:[Object(k.jsx)(B,{children:"Issuer Website"}),Object(k.jsx)(E,{children:Object(k.jsx)("a",{href:n.data.websiteUrl,children:n.data.websiteUrl})})]})]}),Object(k.jsxs)(F,{children:[Object(k.jsxs)(M,{children:[Object(k.jsx)(B,{children:"Start Date"}),Object(k.jsx)(E,{children:n.data.startDate})]}),Object(k.jsxs)(M,{children:[Object(k.jsx)(B,{children:"Total Value Locked"}),Object(k.jsx)(E,{children:n.data.volumn})]}),Object(k.jsxs)(M,{children:[Object(k.jsx)(B,{children:"Contract Address"}),Object(k.jsx)(E,{children:Object(k.jsx)("a",{href:n.data.contractAddress,children:n.data.contractAddress})})]}),Object(k.jsxs)(M,{children:[Object(k.jsx)(B,{children:"Risk Level"}),Object(k.jsx)(E,{children:n.data.riskLevel})]})]})]})]})},W=t(11),K=t(16),Q=function(n){return Object(k.jsxs)(K.a,Object(W.a)(Object(W.a)({speed:3,width:1e3,height:440,viewBox:"0 0 1000 440",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb"},n),{},{children:[Object(k.jsx)("rect",{x:"2",y:"20",rx:"3",ry:"3",width:"980",height:"80"}),Object(k.jsx)("rect",{x:"2",y:"124",rx:"3",ry:"3",width:"980",height:"80"}),Object(k.jsx)("rect",{x:"2",y:"228",rx:"3",ry:"3",width:"980",height:"80"}),Object(k.jsx)("rect",{x:"2",y:"332",rx:"3",ry:"3",width:"980",height:"80"})]}))},X=o.a.div(P||(P=Object(s.a)(["\n  max-width: 1000px;\n  width: auto;\n  margin: 18px auto;\n"]))),Z=o.a.div(U||(U=Object(s.a)(["\n  font-family: Roboto, 'Noto Sans TC', Arial, sans-serif;\n  font-size: 32px;\n  font-weight: 700;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  color: black;\n  margin: 40px 8px 14px 8px;\n"]))),$=o.a.div(Y||(Y=Object(s.a)(["\n  font-family: Roboto, 'Noto Sans TC', Arial, sans-serif;\n  font-size: 16px;\n  font-weight: 500;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  color: #1a1a1a;\n  margin: 4px 8px;\n"]))),_=o.a.div(J||(J=Object(s.a)(["\n  width: 100%;\n  display: flex;\n\n  border-radius: 4px;\n\n  padding: 40px 20px 0 20px;\n  justify-content: space-between;\n  box-sizing: border-box;\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),nn=o.a.div(q||(q=Object(s.a)(["\n  color: #343434;\n  text-align: center;\n  font-family: Roboto, 'Noto Sans TC', Arial, sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n\n  max-width: 120px;\n  width: 100%;\n"]))),en=Object(o.a)(nn)(G||(G=Object(s.a)(["\n  max-width: 180px;\n  width: 100%;\n  min-width: 120px;\n"]))),tn=Object(o.a)(nn)(H||(H=Object(s.a)(["\n  max-width: 40px;\n  width: 100%;\n"])));var an=function(){var n=C();return Object(k.jsxs)(X,{children:[Object(k.jsx)(Z,{children:"Coinomo Yield Products"}),Object(k.jsx)($,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),Object(k.jsxs)(_,{children:[Object(k.jsx)(en,{children:"Name"}),Object(k.jsx)(nn,{children:"Type"}),Object(k.jsx)(nn,{children:"Flexible"}),Object(k.jsx)(nn,{children:"Minimum"}),Object(k.jsx)(nn,{children:"APY"}),Object(k.jsx)(tn,{})]}),(null===n||void 0===n?void 0:n.data)?n.data.en.map((function(n,e){return Object(k.jsx)(V,{data:n},e)})):Object(k.jsx)(Q,{})]})};c.a.render(Object(k.jsx)(i.a.StrictMode,{children:Object(k.jsx)(an,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.37907898.chunk.js.map