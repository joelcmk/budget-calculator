(this["webpackJsonpbudget-calculator"]=this["webpackJsonpbudget-calculator"]||[]).push([[0],{43:function(e,t,c){},44:function(e,t,c){},56:function(e,t,c){},88:function(e,t,c){"use strict";c.r(t);var n=c(4),s=c.n(n),j=c(32),i=c.n(j),a=(c(56),c(12)),r=c(50),b=c(8);var o=function(e){return Object(b.jsx)("din",{children:Object(b.jsxs)("form",{className:"input",onSubmit:function(t){t.preventDefault(),e.setSubmit("next")},children:[Object(b.jsx)("input",{type:"number",placeholder:"New Expense",name:"expense",id:"expense",value:e.expense,onChange:function(t){e.setExpense(t.target.value)}}),Object(b.jsx)("button",{type:"submit",children:"Next"})]})})},u=c(21),l=c(16),O=c(25),d=c(10),h=(c(43),c(44),function(e){var t=Object(n.useState)(),c=Object(a.a)(t,2),s=c[0],j=c[1],i=Object(n.useState)(""),r=Object(a.a)(i,2),o=r[0],d=r[1],h=Object(u.a)(),p=h.currentUser,x=Object(l.f)();Object(n.useEffect)((function(){Object(u.b)(h,(function(e){e?null===e.photoURL?d(e.displayName[0]):j(e.photoURL):x("/login")}))}),[p]);return console.log(""!==o),Object(b.jsxs)("div",{className:"nav",children:[Object(b.jsx)(O.b,{to:"/",children:Object(b.jsx)("h3",{children:"Home"})}),Object(b.jsx)(O.b,{to:"/profile",children:""!==o?Object(b.jsx)("div",{className:"profile_name",children:Object(b.jsx)("p",{children:o})}):Object(b.jsx)("img",{className:"pp",src:s})})]})}),p=c(17);var x=function(e){var t=Object(n.useState)("300"),c=Object(a.a)(t,2),s=c[0],j=c[1],i=Object(n.useState)("300"),r=Object(a.a)(i,2),x=r[0],f=r[1],m=Object(n.useState)("300"),g=Object(a.a)(m,2),v=g[0],S=g[1],y=Object(n.useState)("300"),N=Object(a.a)(y,2),C=N[0],k=N[1],I=Object(n.useState)("300"),E=Object(a.a)(I,2),U=E[0],T=E[1],A=Object(n.useState)("300"),$=Object(a.a)(A,2),D=$[0],B=$[1],w=Object(n.useState)("300"),F=Object(a.a)(w,2),H=F[0],L=F[1],R=Object(n.useState)(!0),P=Object(a.a)(R,2),z=P[0],K=P[1],J=Object(n.useState)(!0),_=Object(a.a)(J,2),G=_[0],q=_[1],M=Object(n.useState)(!0),V=Object(a.a)(M,2),Q=V[0],W=V[1],X=Object(n.useState)(!0),Y=Object(a.a)(X,2),Z=Y[0],ee=Y[1],te=Object(n.useState)(!0),ce=Object(a.a)(te,2),ne=ce[0],se=ce[1],je=Object(n.useState)(!0),ie=Object(a.a)(je,2),ae=ie[0],re=ie[1],be=Object(n.useState)(!0),oe=Object(a.a)(be,2),ue=oe[0],le=oe[1],Oe=Object(n.useState)(),de=Object(a.a)(Oe,2),he=de[0],pe=de[1],xe=Object(n.useState)(""),fe=Object(a.a)(xe,2),me=fe[0],ge=fe[1];d.a.initializeApp({apiKey:"AIzaSyDv15hsf9FfUwHJsGbOhTncNKSq0kBBCcA",authDomain:"budget-36a35.firebaseapp.com",projectId:"budget-36a35",storageBucket:"budget-36a35.appspot.com",messagingSenderId:"669361891874",appId:"1:669361891874:web:fb21613f657a5890b1387b"});var ve=Object(l.f)(),Se=Object(u.a)();return Se.currentUser,Object(n.useEffect)((function(){Object(u.b)(Se,(function(t){if(t){var c=t.uid;ge(t.photoURL),e.parentCallback(t.photoURL),console.log(t.photoURL),pe(c)}else ve("/login")}))})),console.log(me),Object(n.useEffect)((function(){var e=Object(p.a)(),t=Object(p.c)(e,"users/"+he+"/target");Object(p.b)(t,(function(e){var t=e.val(),c=[];for(var n in t)c.push(t);ge(t)}))}),[he]),me?Object(b.jsxs)("div",{children:[Object(b.jsx)(h,{}),Object(b.jsx)(o,{setExpense:e.setExpense,setSubmit:e.setSubmit,income:e.income,expense:e.expense}),Object(b.jsx)("div",{className:"budget",children:Object(b.jsx)("div",{className:"test",children:Object(b.jsxs)("table",{className:"expenses",children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Category"}),Object(b.jsx)("th",{children:"Expenses"}),Object(b.jsx)("th",{children:"Target"})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Home"}),Object(b.jsxs)("td",{children:[Object(b.jsx)("span",{children:"$"}),e.categoryTotal("home")]}),Object(b.jsx)("td",{children:z?Object(b.jsxs)("div",{className:"edit",children:[Object(b.jsxs)("p",{className:"test1",children:[Object(b.jsx)("span",{children:"$"}),void 0==me.home?"0":me.home]}),Object(b.jsx)("button",{onClick:function(){return K(!1)},type:"submit",children:"edit"})]}):Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"number",onChange:function(e){return j(e.target.value)}}),Object(b.jsx)("button",{onClick:function(){return function(){var e=Object(p.a)();Object(p.e)(Object(p.c)(e,"users/"+he+"/target"),{home:s}),K(!0)}()},children:"Submit"})]})})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Food"}),Object(b.jsxs)("td",{children:[Object(b.jsx)("span",{children:"$"}),e.categoryTotal("food")]}),Object(b.jsx)("td",{className:"test2",children:G?Object(b.jsxs)("div",{className:"edit",children:[Object(b.jsxs)("p",{className:"test1",children:[Object(b.jsx)("span",{children:"$"}),void 0==me.food?"0":me.food]}),Object(b.jsx)("button",{onClick:function(){return q(!1)},type:"submit",children:"edit"})]}):Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{type:"number",onChange:function(e){return f(e.target.value)}}),Object(b.jsx)("button",{onClick:function(){return function(){var e=Object(p.a)();Object(p.e)(Object(p.c)(e,"users/"+he+"/target"),{food:x}),q(!0)}()},children:"Submit"})]})})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Shopping"}),Object(b.jsxs)("td",{children:[Object(b.jsx)("span",{children:"$"}),e.categoryTotal("shopping")]}),Object(b.jsx)("td",{children:Q?Object(b.jsxs)("div",{className:"edit",children:[Object(b.jsxs)("p",{className:"test1",children:[Object(b.jsx)("span",{children:"$"}),void 0==me.shopping?"0":me.shopping]}),Object(b.jsx)("button",{onClick:function(){return W(!1)},type:"submit",children:"edit"})]}):Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{type:"number",onChange:function(e){return S(e.target.value)}}),Object(b.jsx)("button",{onClick:function(){return function(){var e=Object(p.a)();Object(p.e)(Object(p.c)(e,"users/"+he+"/target"),{shopping:v}),W(!0)}()},children:"Submit"})]})})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Utilities"}),Object(b.jsxs)("td",{children:[Object(b.jsx)("span",{children:"$"}),e.categoryTotal("utilities")]}),Object(b.jsx)("td",{children:Z?Object(b.jsxs)("div",{className:"edit",children:[Object(b.jsxs)("p",{className:"test1",children:[Object(b.jsx)("span",{children:"$"}),void 0==me.utilities?"0":me.utilities]}),Object(b.jsx)("button",{onClick:function(){return ee(!1)},type:"submit",children:"edit"})]}):Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{type:"number",onChange:function(e){return k(e.target.value)}}),Object(b.jsx)("button",{onClick:function(){return function(){var e=Object(p.a)();Object(p.e)(Object(p.c)(e,"users/"+he+"/target"),{utilities:C}),ee(!0)}()},children:"Submit"})]})})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Household"}),Object(b.jsxs)("td",{children:[Object(b.jsx)("span",{children:"$"}),e.categoryTotal("household")]}),Object(b.jsx)("td",{children:ne?Object(b.jsxs)("div",{className:"edit",children:[Object(b.jsxs)("p",{className:"test1",children:[Object(b.jsx)("span",{children:"$"}),void 0==me.household?"0":me.household]}),Object(b.jsx)("button",{onClick:function(){return se(!1)},type:"submit",children:"edit"})]}):Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{type:"number",onChange:function(e){return T(e.target.value)}}),Object(b.jsx)("button",{onClick:function(){return function(){var e=Object(p.a)();Object(p.e)(Object(p.c)(e,"users/"+he+"/target"),{household:U}),se(!0)}()},children:"Submit"})]})})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Transportation"}),Object(b.jsxs)("td",{children:[Object(b.jsx)("span",{children:"$"}),e.categoryTotal("transportation")]}),Object(b.jsx)("td",{children:ae?Object(b.jsxs)("div",{className:"edit",children:[Object(b.jsxs)("p",{className:"test1",children:[Object(b.jsx)("span",{children:"$"}),void 0==me.transportation?"0":me.transportation]}),Object(b.jsx)("button",{onClick:function(){return re(!1)},type:"submit",children:"edit"})]}):Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{type:"number",onChange:function(e){return B(e.target.value)}}),Object(b.jsx)("button",{onClick:function(){return function(){var e=Object(p.a)();Object(p.e)(Object(p.c)(e,"users/"+he+"/target"),{transportation:D}),re(!0)}()},children:"Submit"})]})})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Other"}),Object(b.jsxs)("td",{children:[Object(b.jsx)("span",{children:"$"}),e.categoryTotal("other")]}),Object(b.jsx)("td",{children:ue?Object(b.jsxs)("div",{className:"edit",children:[Object(b.jsxs)("p",{className:"test1",children:[Object(b.jsx)("span",{children:"$"}),void 0==me.other?"0":me.other]}),Object(b.jsx)("button",{onClick:function(){return le(!1)},type:"submit",children:"edit"})]}):Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{type:"number",onChange:function(e){return L(e.target.value)}}),Object(b.jsx)("button",{onClick:function(){return function(){var e=Object(p.a)();Object(p.e)(Object(p.c)(e,"users/"+he+"/target"),{other:H}),le(!0)}()},children:"Submit"})]})})]})]})})}),Object(b.jsx)(O.b,{className:"expenses_list",to:"/expenses",children:Object(b.jsx)("button",{children:"Expenses List"})})]}):Object(b.jsx)("p",{children:"loading"})};var f=function(e){var t=Object(u.a)(),c=t.currentUser,s=Object(n.useState)(),j=Object(a.a)(s,2),i=(j[0],j[1],Object(n.useState)()),r=Object(a.a)(i,2),o=(r[0],r[1],Object(n.useState)()),l=Object(a.a)(o,2),d=(l[0],l[1]),h=Object(n.useState)(),p=Object(a.a)(h,2);return p[0],p[1],Object(n.useEffect)((function(){Object(u.b)(t,(function(e){if(e){var t=e.uid;d(t)}}))}),[c]),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Expenses list"}),Object(b.jsx)(O.b,{className:"",to:"/",children:Object(b.jsx)("button",{children:"Home"})}),e.data.map((function(e){return Object(b.jsxs)("li",{children:[e.category," | ",e.expense]})}))]})},m=(c(80),c(46),c(48)),g=c.n(m),v=function(){d.a.initializeApp({apiKey:"AIzaSyDv15hsf9FfUwHJsGbOhTncNKSq0kBBCcA",authDomain:"budget-36a35.firebaseapp.com",projectId:"budget-36a35",storageBucket:"budget-36a35.appspot.com",messagingSenderId:"669361891874",appId:"1:669361891874:web:fb21613f657a5890b1387b"});var e={signInFlow:"popup",signInSuccessUrl:"/budget-calculator",signInOptions:[d.a.auth.EmailAuthProvider.PROVIDER_ID,d.a.auth.GoogleAuthProvider.PROVIDER_ID]};return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"My App"}),Object(b.jsx)("p",{children:"Please sign-in:"}),Object(b.jsx)(g.a,{uiConfig:e,firebaseAuth:d.a.auth()})]})},S=function(e){var t=Object(n.useState)(),c=Object(a.a)(t,2),s=c[0],j=c[1],i=Object(n.useState)(),r=Object(a.a)(i,2),o=r[0],O=r[1],d=Object(n.useState)(),p=Object(a.a)(d,2),x=p[0],f=p[1],m=Object(u.a)(),g=m.currentUser,v=Object(l.f)();return Object(n.useEffect)((function(){Object(u.b)(m,(function(e){if(e){e.uid;j(e.email),O(e.photoURL),f(e.displayName),console.log(e)}else v("/login")}))}),[g]),Object(b.jsxs)("div",{className:"profile",children:[Object(b.jsx)(h,{}),Object(b.jsx)("div",{className:"profile_card",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{className:"",src:o}),Object(b.jsxs)("h2",{children:["Hello ",x]}),Object(b.jsxs)("h2",{children:["Email: ",s]}),Object(b.jsx)("button",{onClick:function(){m.signOut().then((function(){})),localStorage.clear()},children:"Log Out"})]})})]})},y=(c(47),function(){d.a.initializeApp({apiKey:"AIzaSyDv15hsf9FfUwHJsGbOhTncNKSq0kBBCcA",authDomain:"budget-36a35.firebaseapp.com",projectId:"budget-36a35",storageBucket:"budget-36a35.appspot.com",messagingSenderId:"669361891874",appId:"1:669361891874:web:fb21613f657a5890b1387b"});var e=Object(n.useState)(""),t=Object(a.a)(e,2),c=t[0],s=t[1],j=Object(n.useState)(""),i=Object(a.a)(j,2),o=i[0],h=i[1],m=Object(n.useState)(""),g=Object(a.a)(m,2),y=g[0],N=g[1],C=Object(u.a)().currentUser,k=Object(n.useState)(),I=Object(a.a)(k,2),E=I[0],U=I[1],T=Object(n.useState)(),A=Object(a.a)(T,2),$=A[0],D=A[1],B=Object(n.useState)(),w=Object(a.a)(B,2),F=w[0],H=w[1],L=Object(n.useState)(),R=Object(a.a)(L,2),P=R[0],z=R[1];Object(n.useEffect)((function(){C&&H(C.uid)}),[C]),Object(n.useEffect)((function(){var e=Object(p.a)(),t=Object(p.c)(e,"users/"+F);Object(p.b)(t,(function(e){var t=e.val(),c=[];for(var n in t)c.push(t[n]);D(c),z(c.length-1+1)}))}),[F]);for(var K=$?$.map((function(e){return e.expense})):"",J=0,_=0;_<K.length;_++)J+=K[_];function G(e){var t=$?$.filter((function(t){return t.category===e})):"";return t?t.map((function(e){return e.expense})):""}return""===o?Object(b.jsx)(O.a,{children:Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{exact:!0,path:"/",element:Object(b.jsx)(x,{total:J,setExpense:s,setSubmit:h,expense:c,categoryTotal:function(e){for(var t=0,c=0;c<G(e).length;c++)t+=G(e)[c];return t},parentCallback:function(e){U(e)},pp:E})}),Object(b.jsx)(l.a,{exact:!0,path:"/expenses",element:Object(b.jsx)(f,{data:$})}),Object(b.jsx)(l.a,{exact:!0,path:"login",element:Object(b.jsx)(v,{})}),Object(b.jsx)(l.a,{exact:!0,path:"/profile",element:Object(b.jsx)(S,{pp:E})})]})})}):"next"===o?Object(b.jsx)("div",{children:Object(b.jsxs)("form",{onSubmit:function(){var e=Object(p.a)(),t=parseInt(c,10);Object(p.d)(Object(p.c)(e,"users/"+F+"/".concat(P)),{category:y,expense:t}),h("")},className:"App",children:[Object(b.jsx)(r.a,{options:[{value:"home",label:"Home"},{value:"food",label:"Food"},{value:"shopping",label:"Shopping"},{value:"utilities",label:"Utilities"},{value:"household",label:"Household"},{value:"transportation",label:"Transportation"},{value:"other",label:"Other"}],isClearable:!0,onChange:function(e){N(e.value)}}),Object(b.jsx)("button",{type:"submit",children:"Submit"})]})}):void 0}),N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,89)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,j=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),j(e),i(e)}))};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root")),N()}},[[88,1,2]]]);
//# sourceMappingURL=main.af13250c.chunk.js.map