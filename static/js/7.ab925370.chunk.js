(this.webpackJsonpreact1=this.webpackJsonpreact1||[]).push([[7],{239:function(e,t,n){"use strict";var a=n(59);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,o=void 0;try{for(var s,l=e[Symbol.iterator]();!(a=(s=l.next()).done)&&(n.push(s.value),!t||n.length!==t);a=!0);}catch(u){r=!0,o=u}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return r}))},299:function(e,t,n){e.exports={users:"Users_users__wq2bh"}},300:function(e,t,n){e.exports={user:"User_user__2i00f",avatar:"User_avatar__2F6xN"}},301:function(e,t,n){e.exports=n.p+"static/media/Programmyi-dlya-sozdaniya-avatarok.de470447.png"},302:function(e,t,n){e.exports={pageNumber:"Paginator_pageNumber__1vMZ-",selectedPage:"Paginator_selectedPage__3dvOt"}},312:function(e,t,n){"use strict";n.r(t);var a=n(20),r=n(25),o=n(34),s=n(33),l=n(0),u=n.n(l),i=n(18),c=n(299),f=n.n(c),g=n(300),m=n.n(g),p=n(301),d=n.n(p),v=n(12),b=function(e){var t=e.state,n=e.followingInProgress,a=e.unfollow,r=e.follow;return u.a.createElement("div",{className:m.a.user},u.a.createElement("div",{className:m.a.photo},u.a.createElement(v.b,{to:"/profile/"+t.id},u.a.createElement("div",{className:m.a.avatar},u.a.createElement("img",{src:null!==t.photos.small?t.photos.small:d.a}))),u.a.createElement("div",{className:m.a.button},t.followed?u.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}},"Unfollow"):u.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)}},"Follow"))),u.a.createElement("div",{className:m.a.name},u.a.createElement("div",null,t.name)))},P=n(239),w=n(302),h=n.n(w),E=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,r=e.onPageChange,o=e.portionSize,s=void 0===o?15:o,i=Math.ceil(t/n),c=[],f=1;f<=i;f++)c.push(f);var g=Math.ceil(i/s),m=Object(l.useState)(1),p=Object(P.a)(m,2),d=p[0],v=p[1],b=(d-1)*s+1,w=d*s;return u.a.createElement("div",null,d>1&&u.a.createElement("button",{onClick:function(){v(d-1)}},"PREV"),c.filter((function(e){return e>=b&&e<=w})).map((function(e){return u.a.createElement("button",{className:a===e?h.a.selectedPage:void 0,onClick:function(){r(e)}},e)})),g>d&&u.a.createElement("button",{onClick:function(){v(d+1)}},"NEXT"))},C=function(e){var t=e.users,n=e.follow,a=e.unfollow,r=e.followingInProgress,o=e.addNewUsers,s=e.totalUsersCount,l=e.pageSize,i=e.currentPage,c=e.onPageChange,g=t.map((function(e){return u.a.createElement(b,{state:e,follow:n,unfollow:a,followingInProgress:r})}));return u.a.createElement("div",{className:f.a.usersBlock},u.a.createElement("h3",null,"Users"),u.a.createElement("div",{className:f.a.pageNumber},u.a.createElement(E,{totalItemsCount:s,pageSize:l,currentPage:i,onPageChange:c})),u.a.createElement("div",{className:f.a.users},g),u.a.createElement("div",{className:f.a.button},u.a.createElement("button",{onClick:o},"Show more")))},y=n(50),N=n(82),U=function(e){return e.usersPage.users},S=function(e){return e.usersPage.pageSize},_=function(e){return e.usersPage.totalUsersCount},k=function(e){return e.usersPage.currentPage},z=function(e){return e.usersPage.isFetching},I=function(e){return e.usersPage.followingInProgress},j=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).addNewUsers=function(){e.setUsers()},e.onPageChange=function(t){var n=e.props;(0,n.getPage)(t,n.pageSize)},e.render=function(){return u.a.createElement(u.a.Fragment,null,e.props.isFetching?u.a.createElement(y.a,null):null,u.a.createElement(C,{users:e.props.users,follow:e.props.follow,unfollow:e.props.unfollow,totalUsersCount:e.props.totalUsersCount,pageSize:e.props.pageSize,currentPage:e.props.currentPage,onPageChange:e.onPageChange,addNewUsers:e.addNewUsers,followingInProgress:e.props.followingInProgress}))},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUser(t,n)}}]),n}(u.a.Component),O=Object(i.b)((function(e){return{users:U(e),pageSize:S(e),totalUsersCount:_(e),currentPage:k(e),isFetching:z(e),followingInProgress:I(e)}}),{follow:N.b,unfollow:N.f,setTotalCount:N.e,getUser:N.d,getPage:N.c})(j);t.default=O}}]);
//# sourceMappingURL=7.ab925370.chunk.js.map