(this.webpackJsonpreact1=this.webpackJsonpreact1||[]).push([[5],{227:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var n=t(2),r=t(241),s=t(0),i=t.n(s),c=t(228),o=t.n(c),u=function(e){var a=e.input,t=e.meta,s=t.touched,c=t.error,u=t.warning,l=Object(r.a)(e,["input","meta"]);return i.a.createElement("div",{className:o.a.error},i.a.createElement(l.element,Object(n.a)(Object(n.a)({},a),l)),s&&(c&&i.a.createElement("span",null,c)||u&&i.a.createElement("span",null,u)))}},228:function(e,a,t){e.exports={error:"FormControl_error__3thCB"}},229:function(e,a,t){"use strict";t.d(a,"b",(function(){return n})),t.d(a,"a",(function(){return r}));t(0);var n=function(e){if(!e)return"Field is required"},r=function(e){return function(a){if(a.length>e)return"Max length is ".concat(e," symbols")}}},232:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__3ckfq",dialogsItems:"Dialogs_dialogsItems__2rgKA",dialog:"Dialogs_dialog__2WzTE",active:"Dialogs_active__2W3di",messages:"Dialogs_messages__2IBnS",message:"Dialogs_message__12OyC",textarea:"Dialogs_textarea__1bBDt"}},233:function(e,a,t){},240:function(e,a,t){"use strict";var n=t(20),r=t(25),s=t(34),i=t(33);var c=t(5).a,o=t(0),u=t.n(o),l=t(18);t.d(a,"a",(function(){return g}));var m=function(e){return{isAuth:e.authUser.isAuth}},g=function(e){var a=function(a){Object(s.a)(o,a);var t=Object(i.a)(o);function o(){return Object(n.a)(this,o),t.apply(this,arguments)}return Object(r.a)(o,[{key:"render",value:function(){return this.props.isAuth?u.a.createElement(e,this.props):u.a.createElement(c,{to:"/login"})}}]),o}(u.a.Component);return Object(l.b)(m)(a)}},311:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(232),i=t.n(s),c=function(e){var a=e.message;return r.a.createElement("div",{className:i.a.message},a)},o=t(12),u=function(e){var a=e.id,t=e.name;return r.a.createElement("div",{className:i.a.dialog},r.a.createElement(o.b,{to:"/dialogs/"+a,activeClassName:i.a.active},t," "))},l=t(66),m=t(111),g=t(112),d=t(233),f=t.n(d),v=t(227),b=t(229),p=Object(b.a)(30),E=Object(g.a)({form:"message"})((function(e){var a=e.handleSubmit;return r.a.createElement("form",{onSubmit:a},r.a.createElement("div",{className:f.a.textarea},r.a.createElement(m.a,{placeholder:"Message text",element:"textarea",name:"message",component:v.a,validate:[b.b,p]})),r.a.createElement("div",{className:f.a.button},r.a.createElement("button",{type:"submit"},"Send")))})),_=function(e){var a=e.dialogsPage,t=e.addNewMessage,n=a.dialogs.map((function(e){return r.a.createElement(u,{name:e.name,id:e.id})})),s=a.messages.map((function(e){return r.a.createElement(c,{message:e.message})})),o=a.avatars.map((function(e){return r.a.createElement(l.a,{img:e.img})}));return r.a.createElement("div",{className:i.a.dialogs},r.a.createElement("div",{className:i.a.dialogsItems},n),r.a.createElement("span",{className:i.a.avatars}," ",o," "),r.a.createElement("div",{className:i.a.messages},s),r.a.createElement("div",{className:i.a.textarea},r.a.createElement(E,{onSubmit:function(e){t(e.message)}})))},h=t(18),N=t(75),O=t(240),j=t(17),x=function(e){return e.dialogsPage};a.default=Object(j.d)(Object(h.b)((function(e){return{dialogsPage:x(e)}}),{addNewMessage:N.a}),O.a)(_)}}]);
//# sourceMappingURL=5.6d303d68.chunk.js.map