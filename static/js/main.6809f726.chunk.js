(this["webpackJsonpreact_tabs-js"]=this["webpackJsonpreact_tabs-js"]||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var a=c(3),n=c.n(a),i=c(5),s=c(1),b=(c(10),c(11),c(12),c(4)),d=c.n(b),o=c(0),l=function(t){var e=t.tabs,c=t.selectedTab,a=t.onTabSelected,n=t.selectedTabId;return Object(o.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(o.jsx)("div",{className:"tabs is-boxed","data-cy":"tab-content",children:Object(o.jsx)("ul",{children:e.map((function(t){return Object(o.jsx)("li",{className:d()({"is-active":n===t.id}),"data-cy":"Tab",children:Object(o.jsx)("a",{href:"#".concat(t.id),"data-cy":"TabLink",onClick:function(){return a(t)},children:t.title})},t.id)}))})}),Object(o.jsx)("div",{className:"block","data-cy":"TabContent",children:c.content})]})},r=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],j=function(){var t=Object(s.useState)("tab-1"),e=Object(i.a)(t,2),c=e[0],a=e[1],n=r.find((function(t){return t.id===c}))||r[0];return Object(o.jsxs)("div",{className:"section",children:[Object(o.jsx)("h1",{className:"title",children:"Selected tab is ".concat(n.title)}),Object(o.jsx)(l,{tabs:r,onTabSelected:function(t){a(t.id)},selectedTabId:c,selectedTab:n})]})};n.a.render(Object(o.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.6809f726.chunk.js.map