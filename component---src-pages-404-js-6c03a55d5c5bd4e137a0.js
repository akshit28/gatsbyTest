(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{149:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return u});var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(155),c=n(156),s=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.site.siteMetadata.title;return i.a.createElement(l.a,{location:this.props.location,title:t},i.a.createElement(c.a,{title:"404: Not Found"}),i.a.createElement("h1",null,"Not Found"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},e}(i.a.Component);e.default=s;var u="1097489062"},152:function(t,e,n){var a;t.exports=(a=n(154))&&a.default||a},153:function(t,e,n){"use strict";var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(33),c=n.n(l);n.d(e,"a",function(){return c.a});n(152),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},154:function(t,e,n){"use strict";n.r(e);n(34);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(55),c=n(2),s=function(t){var e=t.location,n=c.default.getResourcesForPathnameSync(e.pathname);return n?r.a.createElement(l.a,Object.assign({location:e,pageResources:n},n.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=s},155:function(t,e,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(153),c=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props,e=(t.location,t.title,t.children);return i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto"}},i.a.createElement("header",null,"JWR Static Pages"),i.a.createElement("section",null,i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(l.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/page-1"},i.a.createElement("a",null,"Page 1"))),i.a.createElement("li",null,i.a.createElement(l.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/page-2"},i.a.createElement("a",null,"Page 2"))),i.a.createElement("li",null,i.a.createElement(l.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/page-3"},i.a.createElement("a",null,"Page 3"))))),i.a.createElement("article",null,e)),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},e}(i.a.Component);e.a=c},156:function(t,e,n){"use strict";var a=n(157),r=n(0),o=n.n(r),i=n(4),l=n.n(i),c=n(158),s=n.n(c);function u(t){var e=t.description,n=t.lang,r=t.meta,i=t.keywords,l=t.title,c=a.data.site,u=e||c.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},e.a=u},157:function(t){t.exports={data:{site:{siteMetadata:{title:"JR static page",description:"jwr.",author:"JG"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-6c03a55d5c5bd4e137a0.js.map