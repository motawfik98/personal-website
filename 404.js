(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e){e.exports=JSON.parse('{"404":{"back_404":"Go home","text":"Sorry, I can\'t find the page you\'re looking for...","button_text":"Do you want help to return home?"},"home":{"about":"About me","about_alt":"About","work":"My Work","work_alt":"Work","contact":"Contact me","contact_alt":"Contact"},"about":{"find_me":"You\'ll find me on:"},"work":{"no_projects":"Whoops! There\'s nothing here yet!","categories":"Categories","category_all":"All","website":"Visit Website","source":"Source Code","app":"Download App"},"contact":{"toast":{"close":"Close"},"form":{"name":"What\'s your name?","email":"What\'s your email?","message":"Please, explain yourself:","validation":{"invalid_name":"Invalid name","invalid_email":"Invalid email","invalid_message":"Invalid message","invalid_grecaptcha":"Invalid gRecaptchaResponse","server_error":"Server reported an error","conection_error":"Connection Error","success":"Message sent successfully"}},"loading":"Loading","send":"Send","sending":"Sending"},"misc":{"back":"Go back"}}')},37:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n(5),o=n.n(r),a=n(6),c=n.n(a),i=n(7),u=n.n(i),l=n(8),s=n.n(l),f=n(4),p=n.n(f),d=n(0);function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p()(e);if(t){var o=p()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s()(this,n)}}var y=function(e){u()(n,e);var t=h(n);function n(){return o()(this,n),t.apply(this,arguments)}return c()(n,[{key:"render",value:function(){var e=this.props.iconColor?{fill:this.props.iconColor}:null;return d.default.createElement("svg",{style:e,viewBox:"0 0 24 24"},d.default.createElement("use",{xlinkHref:"".concat("/","assets/icons.svg#").concat(this.props.iconName)}))}}]),n}(d.default.PureComponent)},43:function(e,t,n){"use strict";var r=n(0),o=n(1),a=n.n(o),c=n(9),i=n.n(c),u=n(12),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},d=function(e){function t(){var n,r;s(this,t);for(var o=arguments.length,a=Array(o),c=0;c<o;c++)a[c]=arguments[c];return n=r=f(this,e.call.apply(e,[this].concat(a))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!p(e)){e.preventDefault();var t=r.context.router.history,n=r.props,o=n.replace,a=n.to;o?t.replace(a):t.push(a)}},f(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,o=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["replace","to","innerRef"]);i()(this.context.router,"You should not use <Link> outside a <Router>"),i()(void 0!==t,'You must specify the "to" property');var a=this.context.router.history,c="string"==typeof t?Object(u.b)(t,null,null,a.location):t,s=a.createHref(c);return r.default.createElement("a",l({},o,{onClick:this.handleClick,href:s,ref:n}))},t}(r.default.Component);d.propTypes={onClick:a.a.func,target:a.a.string,replace:a.a.bool,to:a.a.oneOfType([a.a.string,a.a.object]).isRequired,innerRef:a.a.oneOfType([a.a.string,a.a.func])},d.defaultProps={replace:!1},d.contextTypes={router:a.a.shape({history:a.a.shape({push:a.a.func.isRequired,replace:a.a.func.isRequired,createHref:a.a.func.isRequired}).isRequired}).isRequired},t.a=d},97:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var r=n(5),o=n.n(r),a=n(6),c=n.n(a),i=n(7),u=n.n(i),l=n(8),s=n.n(l),f=n(4),p=n.n(f),d=n(0),h=n(43),y=n(37),v=n(36);function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p()(e);if(t){var o=p()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s()(this,n)}}var b=v[404],g=function(e){u()(n,e);var t=m(n);function n(){return o()(this,n),t.apply(this,arguments)}return c()(n,[{key:"render",value:function(){return d.default.createElement("div",{className:"pt-content-card__404-container flex flex-dc"},d.default.createElement("div",{className:"pt-content-card__body pt-content-card__body__404 flex flex-dc flex-full-center"},d.default.createElement(y.a,{iconName:"clippy"}),d.default.createElement("p",null,b.text),d.default.createElement(h.a,{to:"/",title:b.back_404},d.default.createElement("div",null,b.button_text))))}}]),n}(d.default.PureComponent)}}]);