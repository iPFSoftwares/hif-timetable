(this["webpackJsonphif-timetable"]=this["webpackJsonphif-timetable"]||[]).push([[0],{52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n(16),c=n.n(s),i=n(3),a=n(8),l=n(38),o=function(e){var t=e.toString().split(""),n=Object(l.a)(t).reverse().slice(2).reverse().join(""),r=t.slice(-2).join("");return"".concat(n.padStart(2,"0"),":").concat(r.padStart(2,"0"))},u=function(e){var t=Object(i.a)(e,2),n=t[0],r=t[1];n=n.toString().padStart(2,"0"),r=r.toString().padStart(2,"0");var s=o(Number("".concat(n).concat(r)));return Number(s.replace(":",""))},d=function(e,t){var n=o(e).split(":"),r=Object(i.a)(n,2),s=r[0],c=r[1],a=o(t).split(":"),l=Object(i.a)(a,2);return 60*(s-l[0])+(c-l[1])},j=function(e,t){var n=o(e).split(":"),r=Object(i.a)(n,2),s=r[0],c=r[1],a=Number(c)+Number(t),l=Math.floor(a/60);return s=(Number(s)+l).toString(),c=(a%60).toString(),"".concat(s.padStart(2,"0"),":").concat(c.padStart(2,"0"))},b=function(e){var t=e-1,n=100*(Math.floor(t/4)+8);n+=15*Math.floor(t%4);var r=o(n).split(":"),s=Object(i.a)(r,2),c=s[0],a=s[1];return"".concat(c.padStart(2,"0"),":").concat(a)},m="a535186e-5e34-4bc1-872f-d06d7b604613",h=n(6),f=n(0);function x(e){var t=Object(r.useState)([]),n=Object(i.a)(t,2),s=n[0],c=n[1];return Object(r.useEffect)((function(){if(""!==e.trim()){var t=!0;return function(e){if(v[e])return Promise.resolve(v[e]);return fetch("https://walterkimaro.com/api/Employee/search?q="+e).then((function(e){return e.json()})).then((function(t){return v[e]=t,t}))}(e).then((function(e){t&&c(e)})),function(){return t=!1}}}),[e]),s}var v={};var p=function(e){var t=e.placeholder,n=void 0===t?"Type to search":t,s=e.onChange,c=Object(r.useState)(""),a=Object(i.a)(c,2),l=a[0],o=a[1],u=x(l);return Object(f.jsxs)(h.a,{"aria-label":"Cities",className:"w-full",onSelect:function(e){var t=u.find((function(t){return t.full_name===e}));s(t)},children:[Object(f.jsx)(h.b,{className:"w-full py-1 px-2 rounded border border-gray-300 focus:outline-none bg-gray-100",placeholder:n,onChange:function(e){o(e.target.value)},autoFocus:!0}),u&&Object(f.jsx)(h.e,{className:"rounded overflow-hidden bg-white shadow-lg border z-20",children:u.length>0?Object(f.jsx)(h.c,{children:u.map((function(e){return Object(f.jsx)(h.d,{value:e.full_name,children:Object(f.jsxs)("div",{className:"flex items-center px-2 border-t border-gray-300",style:{height:"34px"},children:[Object(f.jsx)("div",{className:"border relative w-6 h-6 rounded-full overflow-hidden",children:Object(f.jsx)("img",{className:"absolute w-full h-full object-cover",src:e.dp,alt:""})}),Object(f.jsx)("span",{className:"ml-2 text-sm",children:e.full_name})]})},e._id)}))}):Object(f.jsx)("span",{className:"block p-3",children:"No results found"})})]})};function O(e){var t=Object(r.useState)([]),n=Object(i.a)(t,2),s=n[0],c=n[1];return Object(r.useEffect)((function(){if(""!==e.trim()){var t=!0;return function(e){if(g[e])return Promise.resolve(g[e]);return fetch("https://walterkimaro.com/api/SessionType/search?q="+e).then((function(e){return e.json()})).then((function(t){return g[e]=t,t}))}(e).then((function(e){t&&c(e)})),function(){return t=!1}}}),[e]),s}var g={};var y=function(e){var t=e.placeholder,n=void 0===t?"Type to search":t,s=e.searchQuery,c=void 0===s?"":s,a=e.onSearchQueryChange,l=e.onChange,o=Object(r.useState)(c),u=Object(i.a)(o,2),d=u[0],j=u[1],b=O(d);return Object(f.jsxs)(h.a,{"aria-label":"Cities",className:"w-full",onSelect:function(e){var t=b.find((function(t){return t.title===e}));l(t)},children:[Object(f.jsx)(h.b,{className:"w-full py-1 px-2 rounded border border-gray-300 focus:outline-none bg-gray-100",placeholder:n,value:d,onChange:function(e){a(e.target.value),j(e.target.value)},autoFocus:!0}),b&&Object(f.jsx)(h.e,{className:"rounded overflow-hidden bg-white shadow-lg border z-20",children:b.length>0?Object(f.jsx)(h.c,{children:b.map((function(e){return Object(f.jsx)(h.d,{className:"px-3 py-2",value:e.title},e._id)}))}):null})]})};var N=function(e){var t=e.activity,n=e.searchQuery,s=e.onSearchQueryChange,c=void 0===s?function(){}:s,a=e.onChange,l=Object(r.useState)(t),o=Object(i.a)(l,2),u=o[0],d=o[1];return Object(r.useEffect)((function(){u&&u!==t&&a(u)}),[u]),Object(f.jsxs)(f.Fragment,{children:[u&&Object(f.jsxs)("div",{className:"flex items-center px-2 rounded bg-gray-200 bg-opacity-25 border border-gray-300",style:{height:"34px"},children:[Object(f.jsx)("span",{className:"ml-2 text-sm",children:u.title}),Object(f.jsx)("button",{className:"ml-auto text-blue-900 text-xs p-0",onClick:function(){return d(null)},children:"Change"})]}),!u&&Object(f.jsx)(y,{searchQuery:n,onSearchQueryChange:c,onChange:d})]})},w=[8,9,10,11,12,13,14,15,16],S=[0,15,30,45];function C(e){var t=e.employee,n=e.onChange,s=Object(r.useState)(t),c=Object(i.a)(s,2),a=c[0],l=c[1];return Object(r.useEffect)((function(){a&&a!==t&&n(a)}),[a]),Object(f.jsxs)(f.Fragment,{children:[a&&Object(f.jsxs)("div",{className:"flex items-center px-2 rounded bg-gray-200 bg-opacity-25 border border-gray-300",style:{height:"34px"},children:[Object(f.jsx)("div",{className:"border relative w-6 h-6 rounded-full overflow-hidden",children:Object(f.jsx)("img",{className:"absolute w-full h-full object-cover",src:a.dp,alt:""})}),Object(f.jsx)("span",{className:"ml-2 text-sm",children:a.full_name}),Object(f.jsx)("button",{className:"ml-auto text-blue-900 text-xs p-0",onClick:function(){return l(null)},children:"Change"})]}),!a&&Object(f.jsx)(p,{onChange:l})]})}var k=function(e){var t=e.session,n=e.onClose,s=e.onSave,c=t.duration||60,l=Object(r.useState)(t.employee),o=Object(i.a)(l,2),b=o[0],h=o[1],x=Object(r.useState)(t.employee),v=Object(i.a)(x,2),p=v[0],O=v[1],g=Object(r.useState)(t.startTime.split(":").map((function(e){return Number(e)}))),y=Object(i.a)(g,2),k=y[0],E=y[1],_=Object(r.useState)([8,30]),z=Object(i.a)(_,2),L=z[0],T=z[1],R=Object(r.useState)(""),Q=Object(i.a)(R,2),M=Q[0],F=Q[1],P=Object(r.useState)(null),A=Object(i.a)(P,2),D=A[0],B=A[1],J=Object(r.useState)(""),U=Object(i.a)(J,2),q=U[0],I=U[1],W=Object(a.useMutation)((function(e){return fetch("https://walterkimaro.com/api/Session",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))}),{onSuccess:function(){s()}}),H=W.isLoading,G=W.isError,K=W.error;return W.isSuccess,W.data,Object(r.useEffect)((function(){T(j(Number(t.startTime.replace(":","")),c).split(":").map((function(e){return Number(e)})))}),[]),Object(f.jsxs)("div",{className:"fixed overflow-y-auto inset-0 bg-black bg-opacity-75 z-10 flex items-center justify-center",children:[Object(f.jsx)("div",{className:"fixed inset-0",onClick:n}),Object(f.jsxs)("div",{className:"rounded-md overflow-hidden w-full max-w-sm relative z-10",children:[Object(f.jsxs)("div",{className:"bg-blue-900 text-white py-3 px-4 flex items-center justify-between",children:[Object(f.jsx)("h3",{className:"font-semibold",children:"Add Session"}),Object(f.jsx)("button",{className:"p-1 hover:bg-white hover:bg-opacity-25 rounded-full",onClick:n,children:Object(f.jsx)("svg",{className:"w-5",fill:"currentColor",viewBox:"0 0 24 24",children:Object(f.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"})})})]}),Object(f.jsxs)("div",{className:"bg-white py-3 px-4",children:[G&&Object(f.jsxs)("span",{children:["Error saving session: ",K]}),Object(f.jsxs)("div",{className:"mb-3",children:["Employee",Object(f.jsx)(C,{employee:b,onChange:h})]}),Object(f.jsxs)("div",{className:"mb-4",children:["Activity",Object(f.jsx)(N,{activity:D,onSearchQueryChange:I,onChange:B})]}),Object(f.jsx)("div",{className:"mb-4",children:Object(f.jsxs)("div",{className:"flex items-center",children:[Object(f.jsxs)("div",{className:"flex-1 flex-shrink-0 mr-2",children:[Object(f.jsx)("label",{children:"Start Time"}),Object(f.jsxs)("div",{className:"inline-flex items-center px-2 rounded bg-gray-100 border border-gray-300",style:{height:"34px"},children:[Object(f.jsx)("select",{className:"",value:k[0],onChange:function(e){return E([e.target.value,k[1]])},children:w.map((function(e){return Object(f.jsx)("option",{value:e,children:e.toString().padStart(2,"0")},e)}))}),Object(f.jsx)("span",{className:"mx-3 text-gray-400",children:"|"}),Object(f.jsx)("select",{className:"px-",value:k[1],onChange:function(e){return E([k[0],e.target.value])},children:S.map((function(e){return Object(f.jsx)("option",{value:e,children:e.toString().padStart(2,"0")},e)}))})]})]}),Object(f.jsxs)("div",{className:"flex-1 flex-shrink-0",children:[Object(f.jsx)("label",{children:"End time"}),Object(f.jsxs)("div",{className:"inline-flex items-center px-2 rounded bg-gray-100 border border-gray-300",style:{height:"34px"},children:[Object(f.jsx)("select",{className:"",value:L[0],onChange:function(e){return T([e.target.value,L[1]])},children:w.map((function(e){return Object(f.jsx)("option",{value:e,children:e.toString().padStart(2,"0")},e)}))}),Object(f.jsx)("span",{className:"mx-3 text-gray-400",children:"|"}),Object(f.jsx)("select",{className:"px-",value:L[1],onChange:function(e){return T([L[0],e.target.value])},children:S.map((function(e){return Object(f.jsx)("option",{value:e,children:e.toString().padStart(2,"0")},e)}))})]})]})]})}),Object(f.jsxs)("div",{className:"mb-2",children:[Object(f.jsx)("label",{children:"Session Details"}),Object(f.jsx)("textarea",{type:"text",className:"w-full py-1 px-2 rounded bg-gray-100 border border-gray-300 resize-y",value:M,onChange:function(e){return F(e.target.value)}})]}),Object(f.jsxs)("div",{className:"mb-4",children:["Reviewer",Object(f.jsx)(C,{employee:p,onChange:O})]}),Object(f.jsx)("div",{className:"flex justify-end",children:Object(f.jsx)("button",{className:"mt-3 mb-1 text-sm py-1 px-6 rounded-full border border-blue-900 text-blue-900",onClick:function(){var e=u(k),t=u(L),n={time:e,duration:d(t,e),title:q,activity:D?D._id:m,description:M,owner:b._id,reviewer:p._id};console.log("Save session:",n),W.mutate(n)},children:H?"Please Wait...":"Save Session"})})]})]})]})},E=(n(52),[8,9,10,11,12,13,14,15,16]),_=[0,15,30,45];function z(e){var t=e.employee,n=e.onChange,s=Object(r.useState)(t),c=Object(i.a)(s,2),a=c[0],l=c[1];return Object(r.useEffect)((function(){a&&a!==t&&n(a)}),[a]),Object(f.jsxs)(f.Fragment,{children:[a&&Object(f.jsxs)("div",{className:"flex items-center px-2 rounded bg-gray-200 bg-opacity-25 border border-gray-300",style:{height:"34px"},children:[Object(f.jsx)("div",{className:"border relative w-6 h-6 rounded-full overflow-hidden",children:Object(f.jsx)("img",{className:"absolute w-full h-full object-cover",src:a.dp,alt:""})}),Object(f.jsx)("span",{className:"ml-2 text-sm",children:a.full_name}),Object(f.jsx)("button",{className:"ml-auto text-blue-900 text-xs p-0",onClick:function(){return l(null)},children:"Change"})]}),!a&&Object(f.jsx)(p,{onChange:l})]})}var L=function(e){var t=e.session,n=e.onClose,s=e.onSave,c=t.duration,l=Object(r.useState)(t.owner),b=Object(i.a)(l,2),h=b[0],x=b[1],v=Object(r.useState)(t.reviewer),p=Object(i.a)(v,2),O=p[0],g=p[1],y=Object(r.useState)(o(t.time).split(":").map((function(e){return Number(e)}))),w=Object(i.a)(y,2),S=w[0],C=w[1],k=Object(r.useState)([8,30]),L=Object(i.a)(k,2),T=L[0],R=L[1],Q=Object(r.useState)(t.description),M=Object(i.a)(Q,2),F=M[0],P=M[1],A=Object(r.useState)(t.activity&&"a535186e-5e34-4bc1-872f-d06d7b604613"!==t.activity._id?t.activity:null),D=Object(i.a)(A,2),B=D[0],J=D[1],U=Object(r.useState)(t.title),q=Object(i.a)(U,2),I=q[0],W=q[1],H=Object(a.useMutation)((function(e){return fetch("https://walterkimaro.com/api/Session/"+t._id,{method:"PATCH",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))}),{onSuccess:function(){s()}}),G=H.isLoading,K=H.isError,V=H.error;return H.isSuccess,H.data,Object(r.useEffect)((function(){var e=o(t.time).replace(":","");R(j(Number(e),c).split(":").map((function(e){return Number(e)})))}),[]),Object(f.jsxs)("div",{className:"fixed overflow-y-auto inset-0 bg-black bg-opacity-75 z-10 flex items-center justify-center",children:[Object(f.jsx)("div",{className:"fixed inset-0",onClick:n}),Object(f.jsxs)("div",{className:"rounded-md overflow-hidden w-full max-w-sm relative z-10",children:[Object(f.jsxs)("div",{className:"bg-blue-900 text-white py-3 px-4 flex items-center justify-between",children:[Object(f.jsx)("h3",{className:"font-semibold",children:"Edit Session"}),Object(f.jsx)("button",{className:"p-1 hover:bg-white hover:bg-opacity-25 rounded-full",onClick:n,children:Object(f.jsx)("svg",{className:"w-5",fill:"currentColor",viewBox:"0 0 24 24",children:Object(f.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"})})})]}),Object(f.jsxs)("div",{className:"bg-white py-3 px-4",children:[K&&Object(f.jsxs)("span",{children:["Error saving session: ",V]}),Object(f.jsxs)("div",{className:"mb-3",children:["Employee",Object(f.jsx)(z,{employee:h,onChange:x})]}),Object(f.jsxs)("div",{className:"mb-4",children:["Activity",Object(f.jsx)(N,{activity:B,searchQuery:I,onSearchQueryChange:W,onChange:J})]}),Object(f.jsx)("div",{className:"mb-4",children:Object(f.jsxs)("div",{className:"flex items-center",children:[Object(f.jsxs)("div",{className:"flex-1 flex-shrink-0 mr-2",children:[Object(f.jsx)("label",{children:"Start Time"}),Object(f.jsxs)("div",{className:"inline-flex items-center px-2 rounded bg-gray-100 border border-gray-300",style:{height:"34px"},children:[Object(f.jsx)("select",{className:"",value:S[0],onChange:function(e){return C([e.target.value,S[1]])},children:E.map((function(e){return Object(f.jsx)("option",{value:e,children:e.toString().padStart(2,"0")},e)}))}),Object(f.jsx)("span",{className:"mx-3 text-gray-400",children:"|"}),Object(f.jsx)("select",{className:"px-",value:S[1],onChange:function(e){return C([S[0],e.target.value])},children:_.map((function(e){return Object(f.jsx)("option",{value:e,children:e.toString().padStart(2,"0")},e)}))})]})]}),Object(f.jsxs)("div",{className:"flex-1 flex-shrink-0",children:[Object(f.jsx)("label",{children:"End time"}),Object(f.jsxs)("div",{className:"inline-flex items-center px-2 rounded bg-gray-100 border border-gray-300",style:{height:"34px"},children:[Object(f.jsx)("select",{className:"",value:T[0],onChange:function(e){return R([e.target.value,T[1]])},children:E.map((function(e){return Object(f.jsx)("option",{value:e,children:e.toString().padStart(2,"0")},e)}))}),Object(f.jsx)("span",{className:"mx-3 text-gray-400",children:"|"}),Object(f.jsx)("select",{className:"px-",value:T[1],onChange:function(e){return R([T[0],e.target.value])},children:_.map((function(e){return Object(f.jsx)("option",{value:e,children:e.toString().padStart(2,"0")},e)}))})]})]})]})}),Object(f.jsxs)("div",{className:"mb-2",children:[Object(f.jsx)("label",{children:"Session Details"}),Object(f.jsx)("textarea",{type:"text",className:"w-full py-1 px-2 rounded bg-gray-100 border border-gray-300 resize-y",value:F,onChange:function(e){return P(e.target.value)}})]}),Object(f.jsxs)("div",{className:"mb-4",children:["Reviewer",Object(f.jsx)(z,{employee:O,onChange:g})]}),Object(f.jsx)("div",{className:"flex justify-end",children:Object(f.jsx)("button",{className:"mt-3 mb-1 text-sm py-1 px-6 rounded-full border border-blue-900 text-blue-900",onClick:function(){var e=u(S),t=u(T),n={time:e,duration:d(t,e),title:I,activity:B?B._id:m,description:F,owner:h._id,reviewer:O._id};console.log("Save session:",n),H.mutate(n)},children:G?"Please Wait...":"Save Session"})})]})]})]})},T=function(e){var t=e.session,n=e.employee,s=e.onEdit,c=e.onDelete,l=Object(r.useState)(!1),u=Object(i.a)(l,2),d=u[0],b=u[1],h=Object(r.useState)(!1),x=Object(i.a)(h,2),v=x[0],p=x[1],O=Object(r.useState)(!1),g=Object(i.a)(O,2),y=g[0],N=g[1],w=t.reviewer._id===t.owner._id,S=!1;w||t.reviewer._id!==n._id||(S=!0);var C=100*Math.round((t.time-800)/100)/25+1,k=(C+=(t.time-800)%100/15)+t.duration/15,E="".concat(1," / ").concat(C," / ").concat(1," / ").concat(k),_=d&&v,z=t.activity.title;t.activity._id===m&&(z=t.title),Object(r.useEffect)((function(){return window.addEventListener("shift-released",T,!1),window.addEventListener("shift-selected",R,!1),function(){console.log("Listener removed from tile"),window.removeEventListener("shift-released",T,!1),window.removeEventListener("shift-selected",R,!1)}}),[]);var L=Object(a.useMutation)((function(){return fetch("https://walterkimaro.com/api/Session/"+t._id,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))}),{onSuccess:c});function T(e){console.log("Shift release captured"),p(!1)}function R(e){console.log("Shift release captured"),p(!0)}return Object(f.jsxs)("div",{className:"session-card pointer-events-auto cursor-pointer bg-blue-900 text-white relative ".concat(y&&"animate-pulse"),style:{gridArea:E},onMouseOver:function(e){return b(!0)},onMouseLeave:function(e){return b(!1)},onClick:function(e){return _?(N(!0),void L.mutate()):s(t)},children:[(_||y)&&Object(f.jsx)("div",{className:"z-10 bg-red-500 absolute inset-0 flex items-center px-2 text-xs",children:y?"Removing Session...":"Remove Session"}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:"truncate opacity-50",style:{fontSize:"10px"},children:[o(t.time)," - ",j(t.time,t.duration)]}),Object(f.jsxs)("h3",{className:"mt-0.5",children:[S&&Object(f.jsxs)("span",{children:["Review ",t.owner.full_name]}),!S&&z]}),!w&&!S&&Object(f.jsx)("div",{style:{marginTop:"0.15rem",display:"flex",alignItems:"center",fontSize:"13px"},children:Object(f.jsx)("img",{style:{width:"20px",height:"20px",objectFit:"cover",borderRadius:"50%"},title:"Reviewer: "+t.reviewer.full_name,src:t.reviewer.dp,alt:""})})]})]})};var R=function(e){var t=e.employee,n=e.sessions,r=e.onClose,s=n.sort((function(e,t){return e.time-t.time}));return Object(f.jsxs)("div",{className:"fixed overflow-y-auto inset-0 bg-black bg-opacity-75 z-10 flex items-center justify-center",children:[Object(f.jsx)("div",{className:"fixed inset-0",onClick:r}),Object(f.jsxs)("div",{className:"rounded-lg overflow-hidden w-full max-w-lg relative z-10",children:[Object(f.jsxs)("div",{className:"bg-blue-900 text-white py-3 px-4 flex items-center justify-between",children:[Object(f.jsxs)("div",{className:"flex items-center",children:[Object(f.jsx)("div",{className:"border relative w-8 h-8 rounded-full overflow-hidden",children:Object(f.jsx)("img",{className:"absolute w-full h-full object-cover",src:t.dp,alt:""})}),Object(f.jsx)("h3",{className:"ml-3",children:t.full_name})]}),Object(f.jsx)("button",{className:"p-1 hover:bg-white hover:bg-opacity-25 rounded-full",onClick:r,children:Object(f.jsx)("svg",{className:"w-5",fill:"currentColor",viewBox:"0 0 24 24",children:Object(f.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"})})})]}),Object(f.jsx)("div",{className:"bg-white p-3",children:s.map((function(e){var n=e.reviewer._id===e.owner._id,r=!1;return n||e.reviewer._id!==t._id||(r=!0),Object(f.jsx)("div",{className:"mb-3",children:Object(f.jsxs)("div",{className:"flex items-start",children:[Object(f.jsxs)("span",{className:"w-32 ml-2 mr-2 flex-shrink-0 text-blue-900",children:[o(e.time)," - ",j(e.time,e.duration)]}),Object(f.jsxs)("div",{className:"flex-1",children:[Object(f.jsxs)("h3",{className:"font-semibold",children:[r&&Object(f.jsxs)("span",{children:[Object(f.jsx)("span",{className:"font-normal",children:"Review"})," ",e.owner.full_name]}),!r&&e.activity.title]}),Object(f.jsx)("p",{className:"text-sm opacity-75",children:e.description}),!n&&!r&&Object(f.jsxs)("div",{className:"flex items-center mt-1",children:[Object(f.jsx)("img",{style:{width:"24px",height:"24px",objectFit:"cover",borderRadius:"50%"},title:"Reviewer: "+e.reviewer.full_name,src:e.reviewer.dp,alt:""}),Object(f.jsxs)("span",{className:"ml-3",children:["Reviewer: ",e.reviewer.full_name]})]})]})]})},e._id)}))})]})]})},Q=n(27);function M(e){var t=Object(r.useState)([]),n=Object(i.a)(t,2),s=n[0],c=n[1];return Object(r.useEffect)((function(){if(""!==e.trim()){var t=!0;return function(e){if(F[e])return Promise.resolve(F[e]);return fetch("https://walterkimaro.com/api/Employee/search?q="+e).then((function(e){return e.json()})).then((function(t){return F[e]=t,t}))}(e).then((function(e){t&&c(e)})),function(){return t=!1}}}),[e]),s}var F={};var P=function(e){var t=e.placeholder,n=void 0===t?"Search Employee":t,s=e.onClose,c=e.onSelectUser,a=Object(r.useState)(""),l=Object(i.a)(a,2),o=l[0],u=l[1],d=M(o),j=Object(r.useRef)(null);function b(e){"Escape"===e.key&&(j.current.value.length?u(""):s())}return Object(r.useEffect)((function(){return document.addEventListener("keyup",b,!1),function(){document.removeEventListener("keyup",b,!1)}}),[]),Object(f.jsxs)("div",{className:"fixed overflow-y-auto inset-0 bg-black bg-opacity-75 z-10 flex items-center justify-center",children:[Object(f.jsx)("div",{className:"fixed inset-0",onClick:s}),Object(f.jsx)("div",{className:"overflow-hidden w-full max-w-sm relative z-10",children:Object(f.jsx)("div",{className:"",children:Object(f.jsxs)(h.a,{"aria-label":"Cities",className:"w-full",onSelect:function(e){var t=d.find((function(t){return t.full_name===e}));c(Object(Q.a)(Object(Q.a)({},t),{},{fromSpotlight:!0}))},children:[Object(f.jsx)(h.b,{ref:j,className:"w-full bg-white py-3 px-4 text-xl rounded border-none bg-transparent focus:outline-none placeholder-gray-300",placeholder:n,value:o,onChange:function(e){e.target.value===j.current.value&&u(e.target.value)},autoFocus:!0}),d&&Object(f.jsx)(h.e,{className:"-mt-1 bg-white relative rounded-b overflow-hidden bg-white shadow-lg border z-20",children:d.length>0?Object(f.jsx)(h.c,{children:d.map((function(e){return Object(f.jsx)(h.d,{value:e.full_name,children:Object(f.jsxs)("div",{className:"flex items-center py-2 px-4 border-b border-gray-100",children:[Object(f.jsx)("div",{className:"border relative w-6 h-6 rounded-full overflow-hidden",children:Object(f.jsx)("img",{className:"absolute w-full h-full object-cover",src:e.dp,alt:""})}),Object(f.jsx)("span",{className:"ml-2 text-sm",children:e.full_name})]})},e._id)}))}):Object(f.jsx)("span",{className:"block p-3",children:"No results found"})})]})})})]})};function A(e){var t=e.employees,n=e.sessions,s=e.onSessionsUpdated,c=Object(r.useState)(null),a=Object(i.a)(c,2),l=a[0],o=a[1],u=Object(r.useState)(null),d=Object(i.a)(u,2),j=d[0],m=d[1],h=Object(r.useState)(null),x=Object(i.a)(h,2),v=x[0],p=x[1],O=Object(r.useState)(!1),g=Object(i.a)(O,2),y=g[0],N=g[1];function w(e){if("Shift"===e.key){var t=new CustomEvent("shift-released");window.dispatchEvent(t)}else j||v||("/"===e.key?N(!0):"Escape"===e.key&&(l&&l.fromSpotlight?(N(!0),setTimeout((function(){return o(null)}),20)):o(null)))}function S(e){if("Shift"===e.key){var t=new CustomEvent("shift-selected");window.dispatchEvent(t)}}function C(e){return n&&n.length?n.filter((function(t){return t.owner._id===e||t.reviewer._id===e})):[]}function E(){m(null),p(null),s()}return Object(r.useEffect)((function(){return document.addEventListener("keyup",w,!1),document.addEventListener("keydown",S,!1),function(){document.removeEventListener("keydown",S,!1),document.removeEventListener("keyup",w,!1)}}),[]),Object(f.jsxs)(f.Fragment,{children:[t.map((function(e,t){return Object(f.jsxs)("div",{style:{display:"flex",border:"2px solid #f5f5f5"},children:[Object(f.jsxs)("div",{className:"employee-title hover:bg-gray-200 cursor-pointer",onClick:function(){return o(e)},children:[Object(f.jsx)("img",{style:{width:"20px",height:"20px",objectFit:"cover",borderRadius:"50%",boxShadow:"0 0 1px rgba(0, 0, 0, 0.26)"},title:"Reviewer: "+e.full_name,src:e.dp,alt:""}),Object(f.jsx)("span",{children:e.full_name})]}),Object(f.jsxs)("div",{style:{flex:1,position:"relative"},children:[Object(f.jsx)("div",{style:{height:"100%",display:"grid",gap:"1px",gridTemplateColumns:"repeat(".concat(32,", 1fr)")},children:Array(32).fill(12).map((function(t,n){return Object(f.jsx)("div",{style:{display:"flex",background:"#ddd",position:"relative"},className:"cursor-pointer",onClick:function(){return m({employee:e,startTime:b(n+1)})}},n)}))}),Object(f.jsx)("div",{className:"absolute inset-0 grid pointer-events-none",style:{background:"rgba(0, 0, 0, 0.01)",gap:"1px",gridTemplateColumns:"repeat(".concat(32,", 1fr)")},children:C(e._id).map((function(t,n){return Object(f.jsx)(T,{employee:e,session:t,onEdit:p,onDelete:E},n)}))})]})]},e._id)})),l&&Object(f.jsx)(R,{employee:l,sessions:C(l._id),onClose:function(e){return o(null)}}),j&&Object(f.jsx)(k,{session:j,onClose:function(e){return m(null)},onSave:E}),v&&Object(f.jsx)(L,{session:v,onClose:function(e){return p(null)},onSave:E}),y&&Object(f.jsx)(P,{onSelectUser:function(e){N(!1),o(e)},onClose:function(e){return N(!1)}})]})}var D=function(){var e=Object(a.useQuery)("employeeList",(function(){return fetch("https://walterkimaro.com/api/Employee").then((function(e){return e.json()}))})),t=e.isLoading,n=(e.error,e.data),r=Object(a.useQuery)("sessions",(function(){return fetch("https://walterkimaro.com/api/Session").then((function(e){return e.json()}))}));return t||r.isLoading?"Loading...":Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{style:{display:"flex",background:"#fff",color:"white",position:"sticky",top:0,zIndex:1},children:[Object(f.jsx)("div",{style:{background:"#333",borderRight:"1px solid #fff",padding:"0.25rem",width:"90px",flexShrink:0}}),Object(f.jsx)("div",{style:{flex:1,display:"grid",gap:"1px",gridTemplateColumns:"repeat(".concat(8,", 1fr)")},children:Array(8).fill(11).map((function(e,t){return Object(f.jsxs)("div",{style:{display:"flex",background:"#333",padding:"0.25rem"},children:[8+t,":00"]},t)}))})]}),Object(f.jsx)(A,{employees:n.sort((function(e,t){return e.tin_number-t.tin_number})),sessions:r.data,onSessionsUpdated:function(){return r.refetch()}})]})},B=new a.QueryClient;c.a.render(Object(f.jsx)(a.QueryClientProvider,{client:B,children:Object(f.jsx)(D,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.6ee31d7a.chunk.js.map