(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(5),a=n.n(i),u=(n(11),n(2)),o=n.n(u),s=n(3),l=n(6),d=(n(13),n(0)),p=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"Simple File Backup"})})},f=function(){return Object(d.jsx)("div",{id:"uploader",children:Object(d.jsxs)("form",{encType:"multipart/form-data",method:"POST",action:"/api/fileanalyse",children:[Object(d.jsx)("input",{id:"inputfield",type:"file",name:"upfile"}),Object(d.jsx)("input",{id:"button",type:"submit",value:"Upload"})]})})},j=function(e){var t=e.fileList,n=e.downloadSubmit,c=e.deleteFile,r=t.map((function(e,t){return Object(d.jsxs)("div",{class:"list-item",children:[Object(d.jsx)("label",{children:e}),Object(d.jsx)("button",{value:e,type:"submit",onClick:n,children:"Download"}),Object(d.jsx)("button",{value:e,onClick:c,children:"Delete"})]},t)}));return Object(d.jsx)("div",{id:"file-list",children:r})},b=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],i=function(){var e=Object(s.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/filelist");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=Object(s.a)(o.a.mark((function e(t){var n,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.target.value,c=encodeURI(n),e.next=5,fetch("/api/download/".concat(c));case 5:r=e.sent,window.open(r.url),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(s.a)(o.a.mark((function e(t){var n,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.target.value,c=encodeURI(n),r={method:"DELETE"},e.next=6,fetch("/api/download/".concat(c),r);case 6:i(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){i()}),[]),Object(d.jsxs)("div",{id:"app",children:[Object(d.jsx)(p,{}),Object(d.jsx)(f,{}),Object(d.jsx)(j,{fileList:n,downloadSubmit:a,deleteFile:u})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.58bdf76d.chunk.js.map