(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[937],{848:function(e,t,r){"use strict";function n(e,t,r,n,a,c,o){try{var s=e[c](o),i=s.value}catch(u){return void r(u)}s.done?t(i):Promise.resolve(i).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,c){var o=e.apply(t,r);function s(e){n(o,a,c,s,i,"next",e)}function i(e){n(o,a,c,s,i,"throw",e)}s(void 0)}))}}r.d(t,{zv:function(){return h},TP:function(){return l},tx:function(){return m},V0:function(){return p},Hg:function(){return i}});var c=r(757),o=r.n(c),s="3d1aeb62cdabb9af26b73d92f33b1561";function i(){return u.apply(this,arguments)}function u(){return(u=a(o().mark((function e(){var t,r,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/trending/all/day",t="?api_key=".concat(s),e.next=4,fetch("".concat("https://api.themoviedb.org/3/trending/all/day").concat(t));case 4:return r=e.sent,e.next=7,r.json();case 7:return n=e.sent,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return f=a(o().mark((function e(t){var r,n,a,c,i,u=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:1,n="https://api.themoviedb.org/3/search/movie",a="?api_key=".concat(s,"&query=").concat(t,"&language=en-US&page=").concat(r,"&include_adult=false"),e.next=5,fetch("".concat(n).concat(a));case 5:return c=e.sent,e.next=8,c.json();case 8:return i=e.sent,e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function l(e){return v.apply(this,arguments)}function v(){return(v=a(o().mark((function e(t){var r,n,a,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(t),n="?api_key=".concat(s,"&language=en-US"),e.next=4,fetch("".concat(r).concat(n));case 4:return a=e.sent,e.next=7,a.json();case 7:return c=e.sent,e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return d.apply(this,arguments)}function d(){return(d=a(o().mark((function e(t){var r,n,a,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"d783920aea034ba2adae6031a0bf96c0",r="https://api.themoviedb.org/3/movie/".concat(t,"/credits"),n="?api_key=".concat("d783920aea034ba2adae6031a0bf96c0","&language=en-US"),e.next=5,fetch("".concat(r).concat(n));case 5:return a=e.sent,e.next=8,a.json();case 8:return c=e.sent,e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return b.apply(this,arguments)}function b(){return(b=a(o().mark((function e(t){var r,n,a,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"d783920aea034ba2adae6031a0bf96c0",r="https://api.themoviedb.org/3/movie/".concat(t,"/reviews"),n="?api_key=".concat("d783920aea034ba2adae6031a0bf96c0","&language=en-US&page=1"),e.next=5,fetch("".concat(r).concat(n));case 5:return a=e.sent,e.next=8,a.json();case 8:return c=e.sent,e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},646:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var n=r(689),a=r(87),c=r(7),o=r.n(c),s=r(15),i="MovieCard_Item__fnQjx",u="MovieCard_Title__zxtbk",p="MovieCard_Image__5IN96",f="MovieCard_Wrapper__Dhi3B",l="MovieCard_Text__pOTw9",v=r(184);function h(e){var t=e.id,r=e.title,c=e.poster,o=e.voteAverage,h=e.voteCount,d=(0,n.TH)();return(0,v.jsx)("li",{className:i,children:(0,v.jsxs)(a.rU,{to:"/movies/".concat(t),state:d,children:[(0,v.jsx)("p",{className:u,children:r||"Movie without a title"}),(0,v.jsx)("img",{className:p,src:c?"https://image.tmdb.org/t/p/w500/".concat(c):s,alt:r}),(0,v.jsxs)("div",{className:f,children:[(0,v.jsxs)("p",{className:l,children:["Vote average: ",(0,v.jsx)("span",{children:o})]}),(0,v.jsxs)("p",{className:l,children:["Vote count:",(0,v.jsxs)("span",{children:[" ",h]})]})]})]})})}h.protoType={id:o().number,title:o().string,poster:o().string,voteAverage:o().number,voteCount:o().number};var d=h,m="MoviesList_List__solOa";function b(e){var t=e.movies;return(0,v.jsx)("ul",{className:m,children:t.map((function(e){var t=e.id,r=e.title,n=e.poster,a=e.voteAverage,c=e.voteCount;return(0,v.jsx)(d,{id:t,title:r,poster:n,voteAverage:a,voteCount:c},t)}))})}b.protoType={movies:o().arrayOf(o().shape({id:o().number,title:o().string,poster:o().string,voteAverage:o().number,voteCount:o().number})).isRequired};var y=b},937:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var n=r(439),a=r(848),c=r(646);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=r(689),p="SearchBar_Container__kkxA3",f="SearchBar_Form__M1Z0b",l="SearchBar_Button__FcrZe",v="SearchBar_Input__Gd3Pk",h=r(184);var d=function(){var e=(0,u.TH)(),t=(0,u.s0)();return(0,h.jsx)("div",{className:p,children:(0,h.jsxs)("form",{className:f,onSubmit:function(r){r.preventDefault();var n=r.target.elements.query.value;t(i(i({},e),{},{search:"query=".concat(n)}))},children:[(0,h.jsx)("input",{className:v,type:"text",name:"query"}),(0,h.jsx)("button",{className:l,type:"submit",children:"Search"})]})})},m=r(791),b=function(){var e,t=(0,u.TH)().search,r=null!==(e=new URLSearchParams(t).get("query"))&&void 0!==e?e:"",o=(0,m.useState)(null),s=(0,n.Z)(o,2),i=s[0],p=s[1];return(0,m.useEffect)((function(){""!==r&&(0,a.V0)(r).then((function(e){var t=e.results,r=[];t.map((function(e){var t={id:e.id,title:e.original_title,poster:e.poster_path,voteAverage:e.vote_average,voteCount:e.vote_count};return r.push(t)})),p(r)}))}),[r]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d,{}),i&&(0,h.jsx)(c.Z,{movies:i})]})}},888:function(e,t,r){"use strict";var n=r(47);function a(){}function c(){}c.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,c,o){if(o!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:a};return r.PropTypes=r,r}},7:function(e,t,r){e.exports=r(888)()},47:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},15:function(e,t,r){"use strict";e.exports=r.p+"static/media/poster.5532928420febb910f68.jpg"}}]);
//# sourceMappingURL=937.912c5357.chunk.js.map