(this["webpackJsonphif-timetable"]=this["webpackJsonphif-timetable"]||[]).push([[0],{55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n(18),c=n.n(s),a=n(11),i=n.n(a),l=n(17),o=n(3),u=n(8),d=n(40),j=function(e){var t=e.toString().split(""),n=Object(d.a)(t).reverse().slice(2).reverse().join(""),r=t.slice(-2).join("");return"".concat(n.padStart(2,"0"),":").concat(r.padStart(2,"0"))},b=function(e){var t=Object(o.a)(e,2),n=t[0],r=t[1];n=n.toString().padStart(2,"0"),r=r.toString().padStart(2,"0");var s=j(Number("".concat(n).concat(r)));return Number(s.replace(":",""))},m=function(e,t){var n=j(e).split(":"),r=Object(o.a)(n,2),s=r[0],c=r[1],a=j(t).split(":"),i=Object(o.a)(a,2);return 60*(s-i[0])+(c-i[1])},f=function(e,t){var n=j(e).split(":"),r=Object(o.a)(n,2),s=r[0],c=r[1],a=Number(c)+Number(t),i=Math.floor(a/60);return s=(Number(s)+i).toString(),c=(a%60).toString(),"".concat(s.padStart(2,"0"),":").concat(c.padStart(2,"0"))},h=function(e){var t=e-1,n=100*(Math.floor(t/4)+8);n+=15*Math.floor(t%4);var r=j(n).split(":"),s=Object(o.a)(r,2),c=s[0],a=s[1];return"".concat(c.padStart(2,"0"),":").concat(a)};function x(){return p.apply(this,arguments)}function p(){return(p=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){window.localStorage.getItem("PASSWORD_SET")?e(!0):window.showConfirmDialog("HIF-2021",{onOkay:function(){window.localStorage.setItem("PASSWORD_SET",!0),e()},onCancel:function(){t()}})})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v="a535186e-5e34-4bc1-872f-d06d7b604613",O=n(6),g=n(0);function y(e){var t=Object(r.useState)([]),n=Object(o.a)(t,2),s=n[0],c=n[1],a=Object(r.useState)(!1),i=Object(o.a)(a,2),l=i[0],u=i[1];return Object(r.useEffect)((function(){if(""!==e.trim()){var t=!0;return u(!0),(n=e,w[n]?Promise.resolve(w[n]):fetch("https://walterkimaro.com/api/Employee/search?q="+n).then((function(e){return e.json()})).then((function(e){return w[n]=e,e}))).then((function(e){u(!1),t&&c(e)})),function(){return t=!1}}var n}),[e]),[s,l]}var w={};var N=function(e){var t=e.placeholder,n=void 0===t?"Type to search":t,s=e.onChange,c=Object(r.useState)(""),a=Object(o.a)(c,2),i=a[0],l=a[1],u=y(i),d=Object(o.a)(u,2),j=d[0],b=d[1];return Object(g.jsxs)(O.a,{"aria-label":"Cities",className:"w-full",onSelect:function(e){var t=j.find((function(t){return t.full_name===e}));s(t)},children:[Object(g.jsx)(O.b,{className:"w-full py-1 px-2 rounded border border-gray-300 focus:outline-none bg-gray-100",placeholder:n,onChange:function(e){l(e.target.value)},autoFocus:!0}),j&&Object(g.jsx)(O.e,{className:"rounded overflow-hidden bg-white shadow-lg border z-20",children:(!b&&j.length)>0?Object(g.jsx)(O.c,{children:j.map((function(e){return Object(g.jsx)(O.d,{value:e.full_name,children:Object(g.jsxs)("div",{className:"flex items-center px-2 border-t border-gray-300",style:{height:"34px"},children:[Object(g.jsx)("div",{className:"border relative w-6 h-6 rounded-full overflow-hidden",children:Object(g.jsx)("img",{className:"absolute w-full h-full object-cover",src:e.dp,alt:""})}),Object(g.jsx)("span",{className:"ml-2 text-sm",children:e.full_name})]})},e._id)}))}):Object(g.jsx)("span",{className:"block p-3",children:b?"Loading...":"No results found"})})]})};function S(e){var t=Object(r.useState)([]),n=Object(o.a)(t,2),s=n[0],c=n[1],a=Object(r.useState)(!1),i=Object(o.a)(a,2),l=i[0],u=i[1];return Object(r.useEffect)((function(){if(""!==e.trim()){var t=!0;return u(!0),function(e){if(C[e])return Promise.resolve(C[e]);return fetch("https://walterkimaro.com/api/SessionType/search?q="+e).then((function(e){return e.json()})).then((function(t){return C[e]=t,t}))}(e).then((function(e){u(!1),t&&c(e)})),function(){return t=!1}}}),[e]),[s,l]}var C={};var k=function(e){var t=e.placeholder,n=void 0===t?"Type to search":t,s=e.searchQuery,c=void 0===s?"":s,a=e.onSearchQueryChange,i=e.onChange,l=Object(r.useState)(c),u=Object(o.a)(l,2),d=u[0],j=u[1],b=S(d),m=Object(o.a)(b,2),f=m[0],h=m[1];return Object(g.jsxs)(O.a,{"aria-label":"Cities",className:"w-full",onSelect:function(e){var t=f.find((function(t){return t.title===e}));i(t)},children:[Object(g.jsx)(O.b,{className:"w-full py-1 px-2 rounded border border-gray-300 focus:outline-none bg-gray-100",placeholder:n,value:d,onChange:function(e){a(e.target.value),j(e.target.value)},autoFocus:!0}),f&&Object(g.jsx)(O.e,{className:"rounded overflow-hidden bg-white shadow-lg border z-20",children:f.length>0?Object(g.jsx)(O.c,{children:f.map((function(e){return Object(g.jsx)(O.d,{className:"px-3 py-2",value:e.title},e._id)}))}):h?Object(g.jsx)("span",{className:"block p-3",children:"Loading..."}):null})]})};var _=function(e){var t=e.activity,n=e.searchQuery,s=e.onSearchQueryChange,c=void 0===s?function(){}:s,a=e.onChange,i=Object(r.useState)(t),l=Object(o.a)(i,2),u=l[0],d=l[1];return Object(r.useEffect)((function(){u&&u!==t&&a(u)}),[u]),Object(g.jsxs)(g.Fragment,{children:[u&&Object(g.jsxs)("div",{className:"flex items-center px-2 rounded bg-gray-200 bg-opacity-25 border border-gray-300",style:{height:"34px"},children:[Object(g.jsx)("span",{className:"ml-2 text-sm",children:u.title}),Object(g.jsx)("button",{className:"ml-auto text-blue-900 text-xs p-0",onClick:function(){d(null),a(null)},children:"Change"})]}),!u&&Object(g.jsx)(k,{searchQuery:n,onSearchQueryChange:c,onChange:d})]})},E=[8,9,10,11,12,13,14,15,16,17,18],z=[0,15,30,45];function L(e){var t=e.employee,n=e.onChange,s=Object(r.useState)(t),c=Object(o.a)(s,2),a=c[0],i=c[1];return Object(r.useEffect)((function(){a&&a!==t&&n(a)}),[a]),Object(g.jsxs)(g.Fragment,{children:[a&&Object(g.jsxs)("div",{className:"flex items-center px-2 rounded bg-gray-200 bg-opacity-25 border border-gray-300",style:{height:"34px"},children:[Object(g.jsx)("div",{className:"border relative w-6 h-6 rounded-full overflow-hidden",children:Object(g.jsx)("img",{className:"absolute w-full h-full object-cover",src:a.dp,alt:""})}),Object(g.jsx)("span",{className:"ml-2 text-sm",children:a.full_name}),Object(g.jsx)("button",{className:"ml-auto text-blue-900 text-xs p-0",onClick:function(){return i(null)},children:"Change"})]}),!a&&Object(g.jsx)(N,{onChange:i})]})}var T=function(e){var t=e.session,n=e.onClose,s=e.onSave,c=t.duration||60,a=Object(r.useState)(t.employee),i=Object(o.a)(a,2),l=i[0],d=i[1],j=Object(r.useState)(t.employee),h=Object(o.a)(j,2),x=h[0],p=h[1],O=Object(r.useState)(t.startTime.split(":").map((function(e){return Number(e)}))),y=Object(o.a)(O,2),w=y[0],N=y[1],S=Object(r.useState)([8,30]),C=Object(o.a)(S,2),k=C[0],T=C[1],R=Object(r.useState)(""),A=Object(o.a)(R,2),M=A[0],Q=A[1],F=Object(r.useState)(null),P=Object(o.a)(F,2),D=P[0],I=P[1],H=Object(r.useState)(""),$=Object(o.a)(H,2),B=$[0],J=$[1],U=Object(u.useMutation)((function(e){return fetch("https://walterkimaro.com/api/Session",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))}),{onSuccess:function(){s()}}),W=U.isLoading,q=U.isError,Z=U.error;return U.isSuccess,U.data,Object(r.useEffect)((function(){T(f(Number(t.startTime.replace(":","")),c).split(":").map((function(e){return Number(e)})))}),[]),Object(g.jsxs)("div",{className:"fixed overflow-y-auto inset-0 bg-black bg-opacity-75 z-10 flex items-center justify-center",children:[Object(g.jsx)("div",{className:"fixed inset-0",onClick:n}),Object(g.jsxs)("div",{className:"rounded-md overflow-hidden w-full max-w-sm relative z-10",children:[Object(g.jsxs)("div",{className:"relative text-white py-3 px-4 flex items-center justify-between",children:[Object(g.jsx)("div",{className:"absolute inset-0 bg-blue-900s bg-primary opacity-70"}),Object(g.jsx)("h3",{className:"font-semibold relative z-10",children:"Add Session"}),Object(g.jsx)("button",{className:"relative z-10 p-1 hover:bg-white hover:bg-opacity-25 rounded-full",onClick:n,children:Object(g.jsx)("svg",{className:"w-5",fill:"currentColor",viewBox:"0 0 24 24",children:Object(g.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"})})})]}),Object(g.jsxs)("div",{className:"bg-white py-3 px-4",children:[q&&Object(g.jsxs)("span",{children:["Error saving session: ",Z]}),Object(g.jsxs)("div",{className:"mb-3",children:["Employee",Object(g.jsx)(L,{employee:l,onChange:d})]}),Object(g.jsxs)("div",{className:"mb-4",children:["Activity",Object(g.jsx)(_,{activity:D,onSearchQueryChange:J,onChange:I})]}),Object(g.jsx)("div",{className:"mb-4",children:Object(g.jsxs)("div",{className:"flex items-center",children:[Object(g.jsxs)("div",{className:"flex-1 flex-shrink-0 mr-2",children:[Object(g.jsx)("label",{children:"Start Time"}),Object(g.jsxs)("div",{className:"inline-flex items-center px-2 rounded bg-gray-100 border border-gray-300",style:{height:"34px"},children:[Object(g.jsx)("select",{className:"",value:w[0],onChange:function(e){return N([e.target.value,w[1]])},children:E.map((function(e){return Object(g.jsx)("option",{value:e,children:e.toString().padStart(2,"0")},e)}))}),Object(g.jsx)("span",{className:"mx-3 text-gray-400",children:"|"}),Object(g.jsx)("select",{className:"px-",value:w[1],onChange:function(e){return N([w[0],e.target.value])},children:z.map((function(e){return Object(g.jsx)("option",{value:e,children:e.toString().padStart(2,"0")},e)}))})]})]}),Object(g.jsxs)("div",{className:"flex-1 flex-shrink-0",children:[Object(g.jsx)("label",{children:"End time"}),Object(g.jsxs)("div",{className:"inline-flex items-center px-2 rounded bg-gray-100 border border-gray-300",style:{height:"34px"},children:[Object(g.jsx)("select",{className:"",value:k[0],onChange:function(e){return T([e.target.value,k[1]])},children:E.map((function(e){return Object(g.jsx)("option",{value:e,children:e.toString().padStart(2,"0")},e)}))}),Object(g.jsx)("span",{className:"mx-3 text-gray-400",children:"|"}),Object(g.jsx)("select",{className:"px-",value:k[1],onChange:function(e){return T([k[0],e.target.value])},children:z.map((function(e){return Object(g.jsx)("option",{value:e,children:e.toString().padStart(2,"0")},e)}))})]})]})]})}),Object(g.jsxs)("div",{className:"mb-2",children:[Object(g.jsx)("label",{children:"Session Details"}),Object(g.jsx)("textarea",{type:"text",className:"w-full py-1 px-2 rounded bg-gray-100 border border-gray-300 resize-y",value:M,onChange:function(e){return Q(e.target.value)}})]}),Object(g.jsxs)("div",{className:"mb-4",children:["Reviewer",Object(g.jsx)(L,{employee:x,onChange:p})]}),Object(g.jsx)("div",{className:"flex justify-end",children:Object(g.jsx)("button",{className:"mt-3 mb-1 text-sm py-1 px-6 rounded-full border border-blue-900 text-blue-900",onClick:function(){var e=b(w),t=b(k),n={time:e,duration:m(t,e),title:B,activity:D?D._id:v,description:M,owner:l._id,reviewer:x._id};console.log("Save session:",n),U.mutate(n)},children:W?"Please Wait...":"Save Session"})})]})]})]})},R=(n(55),[8,9,10,11,12,13,14,15,16,17,18]),A=[0,15,30,45];function M(e){var t=e.employee,n=e.onChange,s=Object(r.useState)(t),c=Object(o.a)(s,2),a=c[0],i=c[1];return Object(r.useEffect)((function(){a&&a!==t&&n(a)}),[a]),Object(g.jsxs)(g.Fragment,{children:[a&&Object(g.jsxs)("div",{className:"flex items-center px-2 rounded bg-gray-200 bg-opacity-25 border border-gray-300",style:{height:"34px"},children:[Object(g.jsx)("div",{className:"border relative w-6 h-6 rounded-full overflow-hidden",children:Object(g.jsx)("img",{className:"absolute w-full h-full object-cover",src:a.dp,alt:""})}),Object(g.jsx)("span",{className:"ml-2 text-sm",children:a.full_name}),Object(g.jsx)("button",{className:"ml-auto text-blue-900 text-xs p-0",onClick:function(){return i(null)},children:"Change"})]}),!a&&Object(g.jsx)(N,{onChange:i})]})}var Q=function(e){var t=e.session,n=e.onClose,s=e.onSave,c=t.duration,a=Object(r.useState)(t.owner),i=Object(o.a)(a,2),l=i[0],d=i[1],h=Object(r.useState)(t.reviewer),x=Object(o.a)(h,2),p=x[0],O=x[1],y=Object(r.useState)(j(t.time).split(":").map((function(e){return Number(e)}))),w=Object(o.a)(y,2),N=w[0],S=w[1],C=Object(r.useState)([8,30]),k=Object(o.a)(C,2),E=k[0],z=k[1],L=Object(r.useState)(t.description),T=Object(o.a)(L,2),Q=T[0],F=T[1],P=Object(r.useState)(t.activity&&"a535186e-5e34-4bc1-872f-d06d7b604613"!==t.activity._id?t.activity:null),D=Object(o.a)(P,2),I=D[0],H=D[1],$=Object(r.useState)(t.title),B=Object(o.a)($,2),J=B[0],U=B[1],W=Object(u.useMutation)((function(e){return fetch("https://walterkimaro.com/api/Session/"+t._id,{method:"PATCH",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))}),{onSuccess:function(){s()}}),q=W.isLoading,Z=W.isError,G=W.error;return W.isSuccess,W.data,Object(r.useEffect)((function(){var e=j(t.time).replace(":","");z(f(Number(e),c).split(":").map((function(e){return Number(e)})))}),[]),Object(g.jsxs)("div",{className:"fixed overflow-y-auto inset-0 bg-black bg-opacity-75 z-10 flex items-center justify-center",children:[Object(g.jsx)("div",{className:"fixed inset-0",onClick:n}),Object(g.jsxs)("div",{className:"rounded-md overflow-hidden w-full max-w-sm relative z-10",children:[Object(g.jsxs)("div",{className:"relative text-white py-3 px-4 flex items-center justify-between",children:[Object(g.jsx)("div",{className:"absolute inset-0 bg-blue-900s bg-primary opacity-70"}),Object(g.jsx)("h3",{className:"font-semibold relative z-10",children:"Edit Session"}),Object(g.jsx)("button",{className:"relative z-10 p-1 hover:bg-white hover:bg-opacity-25 rounded-full",onClick:n,children:Object(g.jsx)("svg",{className:"w-5",fill:"currentColor",viewBox:"0 0 24 24",children:Object(g.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"})})})]}),Object(g.jsxs)("div",{className:"bg-white py-3 px-4",children:[Z&&Object(g.jsxs)("span",{children:["Error saving session: ",G]}),Object(g.jsxs)("div",{className:"mb-3",children:["Employee",Object(g.jsx)(M,{employee:l,onChange:d})]}),Object(g.jsxs)("div",{className:"mb-4",children:["Activity",Object(g.jsx)(_,{activity:I,searchQuery:J,onSearchQueryChange:U,onChange:H})]}),Object(g.jsx)("div",{className:"mb-4",children:Object(g.jsxs)("div",{className:"flex items-center",children:[Object(g.jsxs)("div",{className:"flex-1 flex-shrink-0 mr-2",children:[Object(g.jsx)("label",{children:"Start Time"}),Object(g.jsxs)("div",{className:"inline-flex items-center px-2 rounded bg-gray-100 border border-gray-300",style:{height:"34px"},children:[Object(g.jsx)("select",{className:"",value:N[0],onChange:function(e){return S([e.target.value,N[1]])},children:R.map((function(e){return Object(g.jsx)("option",{value:e,children:e.toString().padStart(2,"0")},e)}))}),Object(g.jsx)("span",{className:"mx-3 text-gray-400",children:"|"}),Object(g.jsx)("select",{className:"px-",value:N[1],onChange:function(e){return S([N[0],e.target.value])},children:A.map((function(e){return Object(g.jsx)("option",{value:e,children:e.toString().padStart(2,"0")},e)}))})]})]}),Object(g.jsxs)("div",{className:"flex-1 flex-shrink-0",children:[Object(g.jsx)("label",{children:"End time"}),Object(g.jsxs)("div",{className:"inline-flex items-center px-2 rounded bg-gray-100 border border-gray-300",style:{height:"34px"},children:[Object(g.jsx)("select",{className:"",value:E[0],onChange:function(e){return z([e.target.value,E[1]])},children:R.map((function(e){return Object(g.jsx)("option",{value:e,children:e.toString().padStart(2,"0")},e)}))}),Object(g.jsx)("span",{className:"mx-3 text-gray-400",children:"|"}),Object(g.jsx)("select",{className:"px-",value:E[1],onChange:function(e){return z([E[0],e.target.value])},children:A.map((function(e){return Object(g.jsx)("option",{value:e,children:e.toString().padStart(2,"0")},e)}))})]})]})]})}),Object(g.jsxs)("div",{className:"mb-2",children:[Object(g.jsx)("label",{children:"Session Details"}),Object(g.jsx)("textarea",{type:"text",className:"w-full py-1 px-2 rounded bg-gray-100 border border-gray-300 resize-y",value:Q,onChange:function(e){return F(e.target.value)}})]}),Object(g.jsxs)("div",{className:"mb-4",children:["Reviewer",Object(g.jsx)(M,{employee:p,onChange:O})]}),Object(g.jsx)("div",{className:"flex justify-end",children:Object(g.jsx)("button",{className:"mt-3 mb-1 text-sm py-1 px-6 rounded-full border border-blue-900 text-blue-900",onClick:function(){var e=b(N),t=b(E),n={time:e,duration:m(t,e),title:J,activity:I?I._id:v,description:Q,owner:l._id,reviewer:p._id};console.log("Save session:",n),W.mutate(n)},children:q?"Please Wait...":"Save Session"})})]})]})]})},F=function(e){var t=e.session,n=e.employee,s=e.forAll,c=void 0!==s&&s,a=e.onEdit,d=e.onDelete,b=Object(r.useState)(!1),m=Object(o.a)(b,2),h=m[0],p=m[1],O=Object(r.useState)(!1),y=Object(o.a)(O,2),w=y[0],N=y[1],S=Object(r.useState)(!1),C=Object(o.a)(S,2),k=C[0],_=C[1],E=t.reviewer._id===t.owner._id,z=!1;E||t.reviewer._id!==n._id||(z=!0);var L=100*Math.round((t.time-800)/100)/25+1,T=(L+=(t.time-800)%100/15)+t.duration/15,R="".concat(1," / ").concat(L," / ").concat(1," / ").concat(T),A=h&&w,M=t.activity.title;t.activity._id===v&&(M=t.title);var Q="Leave"==M;Object(r.useEffect)((function(){return window.addEventListener("shift-released",P,!1),window.addEventListener("shift-selected",D,!1),function(){console.log("Listener removed from tile"),window.removeEventListener("shift-released",P,!1),window.removeEventListener("shift-selected",D,!1)}}),[]);var F=Object(u.useMutation)((function(){return fetch("https://walterkimaro.com/api/Session/"+t._id,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))}),{onSuccess:function(){_(!1),d()}});function P(e){console.log("Shift release captured"),N(!1)}function D(e){console.log("Shift release captured"),N(!0)}function I(){return(I=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x();case 3:_(!0),F.mutate(),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function H(){return(H=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x();case 3:a(t),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return Object(g.jsxs)("div",{className:"session-card pointer-events-auto cursor-pointer ".concat(c&&"for-all"," bg-primary text-white relative ").concat(Q&&"on-leave"," ").concat(k&&"animate-pulse"),style:{gridArea:R},onMouseOver:function(e){return p(!0)},onMouseLeave:function(e){return p(!1)},onClick:function(e){return A?function(){return I.apply(this,arguments)}():function(){return H.apply(this,arguments)}()},children:[(A||k)&&Object(g.jsx)("div",{className:"z-10 bg-red-500 absolute inset-0 flex items-center px-2 text-xs",children:k?"Removing Session...":"Remove Session"}),!c&&!Q&&Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"truncate opacity-80",style:{fontSize:"10px"},children:[j(t.time)," - ",f(t.time,t.duration)]}),Object(g.jsxs)("h3",{className:"mt-0.5",children:[z&&Object(g.jsxs)("span",{children:["Review ",t.owner.full_name]}),!z&&M]}),!E&&!z&&Object(g.jsx)("div",{style:{marginTop:"0.15rem",display:"flex",alignItems:"center",fontSize:"13px"},children:Object(g.jsx)("img",{style:{width:"20px",height:"20px",objectFit:"cover",borderRadius:"50%"},title:"Reviewer: "+t.reviewer.full_name,src:t.reviewer.dp,alt:""})})]}),c&&Object(g.jsx)("div",{className:"flex items-center justify-center h-full uppercase font-bold text-lg",children:Object(g.jsx)("span",{className:"opacity-20",dangerouslySetInnerHTML:{__html:M.split("").join("</br>")}})})]})};var P=function(e){var t=e.employee,n=e.sessions,r=e.onClose,s=n.sort((function(e,t){return e.time-t.time})),c=Math.min(750,.85*window.innerHeight);return Object(g.jsxs)("div",{className:"fixed inset-0 bg-black bg-opacity-75 z-10 flex items-center justify-center",children:[Object(g.jsx)("div",{className:"fixed inset-0",onClick:r}),Object(g.jsxs)("div",{className:"rounded-lg overflow-y-auto w-full max-w-lg relative z-10",style:{maxHeight:c},children:[Object(g.jsxs)("div",{className:"relative text-white py-3 px-4 flex items-center justify-between",children:[Object(g.jsx)("div",{className:"absolute inset-0 bg-blue-900s bg-primary opacity-70"}),Object(g.jsxs)("div",{className:"flex items-center relative z-10",children:[Object(g.jsx)("div",{className:"border-2 border-opacity-80 relative w-8 h-8 rounded-full overflow-hidden",children:Object(g.jsx)("img",{className:"absolute w-full h-full object-cover",src:t.dp,alt:""})}),Object(g.jsx)("h3",{className:"ml-3",children:t.full_name})]}),Object(g.jsx)("button",{className:"relative z-10 p-1 hover:bg-white hover:bg-opacity-25 rounded-full",onClick:r,children:Object(g.jsx)("svg",{className:"w-5",fill:"currentColor",viewBox:"0 0 24 24",children:Object(g.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"})})})]}),Object(g.jsx)("div",{className:"bg-white p-3",children:s.map((function(e){var n=e.reviewer._id===e.owner._id,r=!1;n||e.reviewer._id!==t._id||(r=!0);var s,c=e.activity.title;return e.activity._id===v&&(c=e.title),Object(g.jsx)("div",{className:"mb-3",children:Object(g.jsxs)("div",{className:"flex items-start",children:[Object(g.jsxs)("span",{className:"w-32 ml-2 mr-2 flex-shrink-0 text-blue-900",children:[j(e.time)," - ",f(e.time,e.duration)]}),Object(g.jsxs)("div",{className:"flex-1",children:[Object(g.jsxs)("h3",{className:"font-semibold",children:[r&&Object(g.jsxs)("span",{children:[Object(g.jsx)("span",{className:"font-normal",children:"Review"})," ",e.owner.full_name]}),!r&&c]}),Object(g.jsx)("p",{className:"text-sm opacity-75",dangerouslySetInnerHTML:{__html:(s=e.description,s.replace(/(\b(https?|):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,'<a class="text-blue-900" target="_blank" href=\'$1\'>$1</a>').replace(/(^|[^\/])(www\.[\S]+(\b|$))/gim,'$1<a target="_blank" href="http://$2">$2</a>'))}}),!n&&!r&&Object(g.jsxs)("div",{className:"flex items-center mt-1",children:[Object(g.jsx)("img",{style:{width:"24px",height:"24px",objectFit:"cover",borderRadius:"50%"},title:"Reviewer: "+e.reviewer.full_name,src:e.reviewer.dp,alt:""}),Object(g.jsxs)("span",{className:"ml-3",children:["Reviewer: ",e.reviewer.full_name]})]})]})]})},e._id)}))})]})]})},D=n(29);function I(e){var t=Object(r.useState)([]),n=Object(o.a)(t,2),s=n[0],c=n[1],a=Object(r.useState)(!1),i=Object(o.a)(a,2),l=i[0],u=i[1];return Object(r.useEffect)((function(){if(""!==e.trim()){var t=!0;return u(!0),function(e){if(H[e])return Promise.resolve(H[e]);return fetch("https://walterkimaro.com/api/Employee/search?q="+e).then((function(e){return e.json()})).then((function(t){return H[e]=t,t}))}(e).then((function(e){u(!1),t&&c(e)})),function(){return t=!1}}}),[e]),[s,l]}var H={};var $=function(e){var t=e.placeholder,n=void 0===t?"Search Employee":t,s=e.onClose,c=e.onSelectUser,a=Object(r.useState)(""),i=Object(o.a)(a,2),l=i[0],u=i[1],d=I(l),j=Object(o.a)(d,2),b=j[0],m=j[1],f=Object(r.useRef)(null);function h(e){"Escape"===e.key&&(f.current.value.length?u(""):s())}return Object(r.useEffect)((function(){return document.addEventListener("keyup",h,!1),function(){document.removeEventListener("keyup",h,!1)}}),[]),Object(g.jsxs)("div",{className:"fixed overflow-y-auto inset-0 bg-black bg-opacity-75 z-10 flex items-center justify-center",children:[Object(g.jsx)("div",{className:"fixed inset-0",onClick:s}),Object(g.jsx)("div",{className:"overflow-hidden w-full max-w-sm relative z-10",children:Object(g.jsx)("div",{className:"",children:Object(g.jsxs)(O.a,{"aria-label":"Cities",className:"w-full",onSelect:function(e){var t=b.find((function(t){return t.full_name===e}));c(Object(D.a)(Object(D.a)({},t),{},{fromSpotlight:!0}))},children:[Object(g.jsx)(O.b,{ref:f,className:"w-full bg-white py-3 px-4 text-xl rounded border-none bg-transparent focus:outline-none placeholder-gray-300",placeholder:n,value:l,onChange:function(e){e.target.value===f.current.value&&u(e.target.value)},autoFocus:!0}),b&&Object(g.jsx)(O.e,{className:"-mt-1 bg-white relative rounded-b overflow-hidden bg-white shadow-lg border z-20",children:b.length>0?Object(g.jsx)(O.c,{children:b.map((function(e){return Object(g.jsx)(O.d,{value:e.full_name,children:Object(g.jsxs)("div",{className:"flex items-center py-2 px-4 border-b border-gray-100",children:[Object(g.jsx)("div",{className:"border relative w-6 h-6 rounded-full overflow-hidden",children:Object(g.jsx)("img",{className:"absolute w-full h-full object-cover",src:e.dp,alt:""})}),Object(g.jsx)("span",{className:"ml-2 text-sm",children:e.full_name})]})},e._id)}))}):Object(g.jsx)("span",{className:"block p-3",children:m?"Loading...":"No results found"})})]})})})]})},B=10;function J(e){var t=e.employees,n=e.sessions,s=e.onSessionsUpdated,c=Object(r.useState)(null),a=Object(o.a)(c,2),u=a[0],d=a[1],j=Object(r.useState)(null),b=Object(o.a)(j,2),m=b[0],f=b[1],p=Object(r.useState)(null),v=Object(o.a)(p,2),O=v[0],y=v[1],w=Object(r.useState)(!1),N=Object(o.a)(w,2),S=N[0],C=N[1],k=t.find((function(e){return"All"===e.full_name}));function _(e){if("Shift"===e.key){var t=new CustomEvent("shift-released");window.dispatchEvent(t)}else m||O||("/"===e.key?C(!0):"Escape"===e.key&&(u&&u.fromSpotlight?(C(!0),setTimeout((function(){return d(null)}),20)):d(null)))}function E(e){if("Shift"===e.key){var t=new CustomEvent("shift-selected");window.dispatchEvent(t)}}function z(e){return n&&n.length?n.filter((function(t){return t.owner._id===e||t.reviewer._id===e})):[]}function L(){return(L=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x();case 3:f(t),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function R(){f(null),y(null),s()}return Object(r.useEffect)((function(){return document.addEventListener("keyup",_,!1),document.addEventListener("keydown",E,!1),function(){document.removeEventListener("keydown",E,!1),document.removeEventListener("keyup",_,!1)}}),[]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:"pointer-events-none fixed inset-0 h-screen flex",style:{zIndex:3},children:[Object(g.jsx)("div",{className:"employee-title cursor-pointer",children:Object(g.jsx)("span",{className:"opacity-0",children:"All"})}),Object(g.jsx)("div",{className:"flex-1 grid h-full",style:{gap:"1px",gridTemplateColumns:"repeat(".concat(40,", 1fr)")},children:z(k._id).map((function(e,t){return Object(g.jsx)(F,{forAll:!0,employee:k._id,session:e,onEdit:y,onDelete:R},t)}))})]}),t.filter((function(e){return"All"!==e.full_name})).map((function(e,t){return Object(g.jsxs)("div",{style:{display:"flex",border:"2px solid #f5f5f5"},children:[Object(g.jsxs)("div",{className:"employee-title hover:bg-gray-200 cursor-pointer",onClick:function(){return d(e)},children:[Object(g.jsx)("img",{style:{width:"20px",height:"20px",objectFit:"cover",borderRadius:"50%",boxShadow:"0 0 1px rgba(0, 0, 0, 0.26)"},title:"Reviewer: "+e.full_name,src:e.dp,alt:""}),Object(g.jsx)("span",{children:e.full_name})]}),Object(g.jsxs)("div",{style:{flex:1,position:"relative"},children:[Object(g.jsx)("div",{className:"grid h-full",style:{gap:"1px",gridTemplateColumns:"repeat(".concat(40,", 1fr)")},children:Array(40).fill(12).map((function(t,n){return Object(g.jsx)("div",{style:{display:"flex",background:"#eee",position:"relative"},className:"cursor-pointer",onClick:function(){return function(e){return L.apply(this,arguments)}({employee:e,startTime:h(n+1)})}},n)}))}),Object(g.jsx)("div",{className:"absolute inset-0 grid pointer-events-none",style:{background:"rgba(0, 0, 0, 0.01)",gap:"1px",gridTemplateColumns:"repeat(".concat(40,", 1fr)")},children:z(e._id).map((function(t,n){return Object(g.jsx)(F,{employee:e,session:t,onEdit:y,onDelete:R},n)}))})]})]},e._id)})),u&&Object(g.jsx)(P,{employee:u,sessions:z(u._id),onClose:function(e){return d(null)}}),m&&Object(g.jsx)(T,{session:m,onClose:function(e){return f(null)},onSave:R}),O&&Object(g.jsx)(Q,{session:O,onClose:function(e){return y(null)},onSave:R}),S&&Object(g.jsx)($,{onSelectUser:function(e){C(!1),d(e)},onClose:function(e){return C(!1)}})]})}var U=function(){var e=Object(u.useQuery)("employeeList",(function(){return fetch("https://walterkimaro.com/api/Employee").then((function(e){return e.json()}))})),t=e.isLoading,n=(e.error,e.data),r=Object(u.useQuery)("sessions",(function(){return fetch("https://walterkimaro.com/api/Session").then((function(e){return e.json()}))}));return t||r.isLoading?"Loading...":Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"sticky top-0",style:{display:"flex",background:"#fff",color:"white",zIndex:5},children:[Object(g.jsx)("div",{style:{background:"#333",borderRight:"1px solid #fff",padding:"0.25rem",width:"90px",flexShrink:0}}),Object(g.jsx)("div",{style:{flex:1,display:"grid",gap:"1px",gridTemplateColumns:"repeat(".concat(B,", 1fr)")},children:Array(B).fill(11).map((function(e,t){return Object(g.jsxs)("div",{style:{display:"flex",background:"#333",padding:"0.25rem"},children:[8+t,":00"]},t)}))})]}),Object(g.jsx)(J,{employees:n.sort((function(e,t){return e.tin_number-t.tin_number})),sessions:r.data,onSessionsUpdated:function(){return r.refetch()}})]})},W=new u.QueryClient;c.a.render(Object(g.jsx)(u.QueryClientProvider,{client:W,children:Object(g.jsx)(U,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.13ddf9ea.chunk.js.map