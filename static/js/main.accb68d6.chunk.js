(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,,,,function(e,t,r){e.exports={wrapper:"Affairs_wrapper__32gPW",affair:"Affairs_affair__1_7mD",affairName:"Affairs_affairName__1WPCh",priorityHigh:"Affairs_priorityHigh__2GfDV",priorityMiddle:"Affairs_priorityMiddle__2gFWQ",priorityLow:"Affairs_priorityLow__13Ld1",buttons:"Affairs_buttons__v0fyx",buttonOther:"Affairs_buttonOther__35jN2"}},function(e,t,r){e.exports={body:"Message_body__OeC_b",avatar:"Message_avatar__grwOF",angle:"Message_angle__2EPFF",messageBlock:"Message_messageBlock__2toML",name:"Message_name__mCRhx",message:"Message_message__21-j4",time:"Message_time__Gsc7_"}},,,,function(e,t,r){e.exports={wrapper:"Greeting_wrapper__3t3mz",defaultInput:"Greeting_defaultInput__3Urb3",errorInput:"Greeting_errorInput__2l9gj",error:"Greeting_error__WuXG0",button:"Greeting_button__10JwF"}},,,function(e,t,r){e.exports={input:"SuperInputText_input__2tWPM",superInput:"SuperInputText_superInput__1fY2g",errorInput:"SuperInputText_errorInput__2NKu1",error:"SuperInputText_error__eqS4T"}},function(e,t,r){e.exports={label:"SuperCheckbox_label__1I54Q"}},,function(e,t,r){e.exports={default:"SuperButton_default__31UWj",red:"SuperButton_red__Ftpzb"}},function(e,t,r){e.exports={item:"Header_item__2fsiP",activeLink:"Header_activeLink__1jaQd"}},,,,function(e,t,r){e.exports={App:"App_App__3gnD9"}},,function(e,t,r){e.exports={blue:"HW4_blue__1aLN8",column:"HW4_column__HLvDE",testSpanError:"HW4_testSpanError__31R0U"}},,,,,,function(e,t,r){},,,,function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),c=r(20),s=r.n(c),i=(r(29),r(21)),o=r.n(i),j=r(11),l=r(2),u=r(6),d=r.n(u),b=r(0);var h=function(e){return Object(b.jsxs)("div",{className:d.a.body,children:[Object(b.jsx)("img",{src:e.avatar,className:d.a.avatar}),Object(b.jsx)("div",{className:d.a.angle}),Object(b.jsxs)("div",{className:d.a.messageBlock,children:[Object(b.jsx)("div",{className:d.a.name,children:e.name}),Object(b.jsx)("div",{className:d.a.message,children:e.message}),Object(b.jsx)("div",{className:d.a.time,children:e.time})]})]})},p="https://cs8.pikabu.ru/images/big_size_comm/2016-03_6/145936207814459518.jpg",O="\u0421\u0430\u043d\u044f",m="\u0421\u0435\u0439\u0447\u0430\u0441 \u044f \u0431\u0443\u0434\u0443 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0442\u044c \u0432\u0441\u0435 \u0438\u0433\u0440\u044b",x="22:00";var f=function(){return Object(b.jsxs)("div",{children:["homeworks 1",Object(b.jsx)(h,{avatar:p,name:O,message:m,time:x}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},_=r(3),v=r(5),g=r.n(v),N=r(8),k=r(9),C=r(16),y=r.n(C),w=function(e){var t=e.red,r=e.className,a=Object(k.a)(e,["red","className"]),n="".concat(t?y.a.red:y.a.default," ").concat(r);return Object(b.jsx)("button",Object(N.a)({className:n},a))};var A=function(e){var t;return Object(b.jsxs)("div",{className:g.a.affair,children:[Object(b.jsxs)("div",{className:g.a.affairName,children:[e.affair.name," "]}),Object(b.jsxs)("div",{className:"".concat((t=e.affair.priority,"high"===t?g.a.priorityHigh:"middle"===t?g.a.priorityMiddle:g.a.priorityLow)),children:[e.affair.priority," "]}),Object(b.jsx)(w,{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"x"})]})};var I=function(e){var t=e.data.map((function(t){return Object(b.jsx)(A,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(b.jsxs)("div",{className:g.a.wrapper,children:[t,Object(b.jsxs)("div",{className:g.a.buttons,children:[Object(b.jsx)(w,{className:g.a.buttonsFor,onClick:function(){e.setFilter("all")},children:"All"}),Object(b.jsx)(w,{onClick:function(){e.setFilter("high")},className:g.a.buttonsFor,children:"High"}),Object(b.jsx)(w,{onClick:function(){e.setFilter("middle")},className:g.a.buttonsFor,children:"Middle"}),Object(b.jsx)(w,{onClick:function(){e.setFilter("low")},className:g.a.buttonsFor,children:"Low"})]})]})},S=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var F=function(){var e=Object(a.useState)(S),t=Object(_.a)(e,2),r=t[0],n=t[1],c=Object(a.useState)("all"),s=Object(_.a)(c,2),i=s[0],o=s[1],j=function(e,t){switch(t){case"high":return e.filter((function(e){return"high"===e.priority}));case"middle":return e.filter((function(e){return"middle"===e.priority}));case"low":return e.filter((function(e){return"low"===e.priority}));default:return e}}(r,i);return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 2",Object(b.jsx)(I,{data:j,setFilter:o,deleteAffairCallback:function(e){return n(function(e,t){return e.filter((function(e){return e._id!==t}))}(r,e))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},M=r(24),T=r(10),H=r.n(T),L=r(13),P=r.n(L),W=function(e){e.type;var t=e.onChange,r=e.onChangeText,a=e.onKeyPress,n=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(k.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(P.a.error," ").concat(i||""),l="".concat(c?P.a.errorInput:P.a.superInput," ").concat(s||P.a.input);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",Object(N.a)({type:"text",onChange:function(e){t&&t(e),r&&r(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),n&&"Enter"===e.key&&n()},className:l},o)),c&&Object(b.jsx)("span",{className:j,children:c})]})},U=function(e){var t=e.name,r=e.setNameCallback,a=e.addUser,n=e.error,c=e.totalUsers,s=""!==n?H.a.errorInput:H.a.defaultInput,i=1===c?"name":"names";return Object(b.jsxs)("div",{className:H.a.wrapper,children:[Object(b.jsx)(W,{value:t,onChange:r,placeholder:"SuperInputText",error:n}),Object(b.jsx)("br",{}),Object(b.jsx)(w,{onClick:a,children:"Add"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{value:t,onChange:r,className:s,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"}),Object(b.jsx)("button",{onClick:a,className:H.a.button,children:"add"}),Object(b.jsxs)("span",{children:[" ","the array has ".concat(c," ").concat(i)]}),Object(b.jsx)("br",{}),Object(b.jsxs)("span",{className:H.a.error,children:[" ",n]})]})},E=function(e){var t=e.users,r=e.addUserCallback,n=Object(a.useState)(""),c=Object(_.a)(n,2),s=c[0],i=c[1],o=Object(a.useState)(""),j=Object(_.a)(o,2),l=j[0],u=j[1],d=t.length;return Object(b.jsx)(U,{name:s,setNameCallback:function(e){u(""),i(e.currentTarget.value)},addUser:function(){/^([a-zA-Z\u0430-\u044f\u0410-\u042f]{2,})$/.test(s)?(r(s),i(""),alert("Hello ".concat(s[0].toUpperCase()+s.substring(1)," !"))):s.length<2&&s.length>0?(u("\u041d\u0435 \u043c\u0435\u043d\u0435\u0435 \u0434\u0432\u0443\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),i("")):(u("\u0418\u043c\u044f \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0443\u043a\u0432\u044b"),i(""))},error:l,totalUsers:d})},G=r(22);var B=function(){var e=Object(a.useState)([]),t=Object(_.a)(e,2),r=t[0],n=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 3",Object(b.jsx)(E,{users:r,addUserCallback:function(e){var t={_id:Object(G.v1)(),name:e};n([t].concat(Object(M.a)(r)))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},J=r(23),z=r.n(J),D=r(14),K=r.n(D),Q=function(e){e.type;var t=e.onChange,r=e.onChangeChecked,a=e.className,n=(e.spanClassName,e.children),c=Object(k.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(K.a.checkbox," ").concat(a||"");return Object(b.jsxs)("label",{className:K.a.label,children:[Object(b.jsx)("input",Object(N.a)({type:"checkbox",onChange:function(e){t&&t(e),r&&r(e.currentTarget.checked)},className:s},c)),Object(b.jsx)("span",{children:n&&Object(b.jsx)("span",{className:K.a.spanClassName,children:n})})]})};var R=function(){var e=Object(a.useState)(""),t=Object(_.a)(e,2),r=t[0],n=t[1],c=r?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(r)},i=Object(a.useState)(!1),o=Object(_.a)(i,2),j=o[0],l=o[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 4",Object(b.jsxs)("div",{className:z.a.column,children:[Object(b.jsx)(W,{value:r,onChangeText:n,onEnter:s,error:c}),Object(b.jsx)(W,{className:""}),Object(b.jsx)(w,{children:"default"}),Object(b.jsx)(w,{red:!0,onClick:s,children:"delete "}),Object(b.jsx)(w,{disabled:!0,children:"disabled"}),Object(b.jsx)(Q,{checked:j,onChangeChecked:l,children:"some text "}),Object(b.jsx)(Q,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var $=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(f,{}),Object(b.jsx)(F,{}),Object(b.jsx)(B,{}),Object(b.jsx)(R,{})]})};function q(){return Object(b.jsx)("div",{children:Object(b.jsx)("span",{children:"junior"})})}function V(){return Object(b.jsx)("div",{children:Object(b.jsx)("span",{children:"junior plus"})})}var X=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:"404"}),Object(b.jsx)("div",{children:"Page not found!"}),Object(b.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},Y="/pre-junior",Z="/junior",ee="junior-plus",te="/*",re="/";function ae(){return Object(b.jsx)("div",{children:Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{path:Y,element:Object(b.jsx)($,{})}),Object(b.jsx)(l.a,{path:Z,element:Object(b.jsx)(q,{})}),Object(b.jsx)(l.a,{path:ee,element:Object(b.jsx)(V,{})}),Object(b.jsx)(l.a,{path:te,element:Object(b.jsx)(X,{})}),Object(b.jsx)(l.a,{path:re,element:Object(b.jsx)("div",{})})]})})}var ne=r(17),ce=r.n(ne);function se(e){var t=e.path,r=e.name;return Object(b.jsx)("li",{children:Object(b.jsx)(j.b,{to:t,className:function(e){return e.isActive?"".concat(ce.a.activeLink," "):""},children:r})})}var ie=[{name:"PreJunior",path:Y},{name:"Junior",path:Z},{name:"JuniorPlus",path:ee}].map((function(e,t){return Object(b.jsx)(se,{path:e.path,name:e.name},t)}));var oe=function(){return Object(b.jsx)("ul",{className:ce.a.item,children:ie})};var je=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(j.a,{children:[Object(b.jsx)(oe,{}),Object(b.jsx)(ae,{})]})})};var le=function(){return Object(b.jsxs)("div",{className:o.a.App,children:[Object(b.jsx)("div",{children:"react homeworks:"}),Object(b.jsx)(je,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(le,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[33,1,2]]]);
//# sourceMappingURL=main.accb68d6.chunk.js.map