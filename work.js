(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return U}));var r=n(5),a=n.n(r),o=n(6),i=n.n(o),l=n(18),c=n.n(l),s=n(7),u=n.n(s),f=n(8),d=n.n(f),p=n(4),h=n.n(p),m=n(0),v=n(42);function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h()(e);if(t){var a=h()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d()(this,n)}}var _=n(58),k=function(e){u()(n,e);var t=g(n);function n(e){var r;return a()(this,n),(r=t.call(this,e)).handleChange=r.handleChange.bind(c()(r)),r}return i()(n,[{key:"handleChange",value:function(e){this.props.handleFilterChange(this.props.name,!this.props.value)}},{key:"render",value:function(){return m.default.createElement("li",{className:"md__checkbox",title:"".concat(this.props.name," projects")},m.default.createElement("label",{className:"flex flex-cross-center pointer"},m.default.createElement("input",{type:"checkbox",onChange:this.handleChange,checked:this.props.value}),m.default.createElement("span",{className:"md__checkbox-material"},m.default.createElement("span",{className:"md__checkbox-check"})),m.default.createElement("span",{className:"md__checkbox-material__text"},this.props.name),m.default.createElement(_,null)))}}]),n}(m.default.PureComponent),y=n(40),w=n(39);function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h()(e);if(t){var a=h()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d()(this,n)}}var b=w.work,E=function(e){u()(n,e);var t=x(n);function n(e){var r;return a()(this,n),(r=t.call(this,e)).allFiltersAreChecked=r.allFiltersAreChecked.bind(c()(r)),r}return i()(n,[{key:"allFiltersAreChecked",value:function(){var e=this,t=!0;return Object.keys(this.props.filters).forEach((function(n){e.props.filters[n]||(t=!1)})),t}},{key:"render",value:function(){var e=this,t=Object.keys(this.props.filters).map((function(t,n){return m.default.createElement(k,{key:n,name:t,handleFilterChange:e.props.handleFilterChange,value:e.props.filters[t]})}));return m.default.createElement("div",{className:"pt-content-card__body__work-filters ".concat(this.props.isFiltersOpen?"filters-open":"")},m.default.createElement("p",{className:"flex flex-cross-center flex-sa"},m.default.createElement("button",{className:"pt-content-card__header--nav__icon flex-full-center pointer",onClick:this.props.handleDrawerState},m.default.createElement(y.a,{iconName:"close"})),b.categories),m.default.createElement("ul",{className:"pt-content-card__body__work-filters__list flex flex-dc"},m.default.createElement(k,{name:b.category_all,value:this.allFiltersAreChecked(),handleFilterChange:this.props.handleAllFilterChange}),t))}}]),n}(m.default.PureComponent),C=n(41);function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h()(e);if(t){var a=h()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d()(this,n)}}var N=w.work,F=function(e){u()(n,e);var t=R(n);function n(e){var r;return a()(this,n),(r=t.call(this,e)).getLinkTags=r.getLinkTags.bind(c()(r)),r}return i()(n,[{key:"getLinkTags",value:function(){var e=[];return this.props.work.siteUrl&&(e[e.length]=m.default.createElement("a",{href:this.props.work.siteUrl,key:e.length,target:"_blank",rel:"noopener",title:"".concat(this.props.work.title," Website"),className:"flex flex-dc flex-full-center"},m.default.createElement(y.a,{iconName:"web"}),m.default.createElement("p",null,N.website))),this.props.work.sourceCodeUrl&&(e[e.length]=m.default.createElement("a",{href:this.props.work.sourceCodeUrl,key:e.length,target:"_blank",rel:"noopener",title:"".concat(this.props.work.title," Source Code"),className:"flex flex-dc flex-full-center"},m.default.createElement(y.a,{iconName:"code"}),m.default.createElement("p",null,N.source))),this.props.work.appUrl&&(e[e.length]=m.default.createElement("a",{href:this.props.work.appUrl,key:e.length,target:"_blank",rel:"noopener",title:"".concat(this.props.work.title," App Link"),className:"flex flex-dc flex-full-center"},m.default.createElement(y.a,{iconName:"app"}),m.default.createElement("p",null,N.app))),e}},{key:"render",value:function(){var e=this.props.work.categories.map((function(e,t){return m.default.createElement("span",{key:t},e)})),t=this.getLinkTags();return m.default.createElement("div",{className:"pt-content-card__body__work-items__item flex"},m.default.createElement("div",{className:"pt-content-card__body__work-items__item__image flex flex-full-center"},m.default.createElement("img",{src:this.props.work.img||"".concat("/","assets/").concat(C.c),alt:"".concat(this.props.work.title," Icon")})),m.default.createElement("div",{className:"pt-content-card__body__work-items__item__data flex flex-dc flex-sb"},m.default.createElement("h4",null,this.props.work.title),m.default.createElement("p",null,this.props.work.description),m.default.createElement("div",{className:"pt-content-card__body__work-items__item__data__tags"},e)),this.props.work.sourceCodeUrl||this.props.work.siteUrl?m.default.createElement("div",{className:"pt-content-card__body__work-items__item__buttons flex flex-dc"},t):null)}}]),n}(m.default.PureComponent);function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h()(e);if(t){var a=h()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d()(this,n)}}var D=w.work,A=function(e){u()(n,e);var t=S(n);function n(e){var r;return a()(this,n),(r=t.call(this,e)).state={filters:r.generateFilters(),projects:C.e},r.handleFilterChange=r.handleFilterChange.bind(c()(r)),r.handleAllFilterChange=r.handleAllFilterChange.bind(c()(r)),r.getFilteredWorkItems=r.getFilteredWorkItems.bind(c()(r)),r}return i()(n,[{key:"generateFilters",value:function(){var e={};return C.e.forEach((function(t){t.categories.forEach((function(t){Object.keys(e).includes(t)||(e[t]=!0)}))})),e}},{key:"getFilteredWorkItems",value:function(){var e=this;return this.state.projects.length?this.state.projects.map((function(t,n){var r=!1;if(t.categories.forEach((function(t){e.state.filters[t]&&(r=!0)})),r)return m.default.createElement(F,{key:n,work:t})})):m.default.createElement("p",{className:"no-projects-text flex flex-dc flex-cross-center"},m.default.createElement(y.a,{iconName:"person"}),D.no_projects)}},{key:"handleFilterChange",value:function(e,t){var n=Object.assign({},this.state.filters);n[e]=t,this.setState({filters:n})}},{key:"handleAllFilterChange",value:function(e,t){var n=Object.assign({},this.state.filters);Object.keys(this.state.filters).forEach((function(e){n[e]=t})),this.setState({filters:n})}},{key:"render",value:function(){var e={};return this.state.projects.length<=0&&(e={display:"flex",justifyContent:"center",alignItems:"center"}),m.default.createElement("div",{className:"pt-content-card__body pt-content-card__body__work flex flex-cross-center"},this.state.projects.length>0&&m.default.createElement(E,{filters:this.state.filters,handleFilterChange:this.handleFilterChange,handleAllFilterChange:this.handleAllFilterChange,isFiltersOpen:this.props.isFiltersOpen,handleDrawerState:this.props.handleDrawerState}),m.default.createElement("div",{className:"pt-content-card__body__work-filters__overlay ".concat(this.props.isFiltersOpen?"filters-open":""),onClick:this.props.handleDrawerState}),m.default.createElement("div",{className:"pt-content-card__body__work-items",style:e},this.getFilteredWorkItems()))}}]),n}(m.default.PureComponent);function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h()(e);if(t){var a=h()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d()(this,n)}}var j=w.home,U=function(e){u()(n,e);var t=O(n);function n(e){var r;return a()(this,n),(r=t.call(this,e)).state={isFiltersOpen:!1},r.handleDrawerState=r.handleDrawerState.bind(c()(r)),r.handleWindowResize=r.handleWindowResize.bind(c()(r)),r}return i()(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleWindowResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowResize)}},{key:"handleWindowResize",value:function(e){window.innerWidth<=700&&this.setState({isFiltersOpen:!1})}},{key:"handleDrawerState",value:function(){this.setState({isFiltersOpen:!this.state.isFiltersOpen})}},{key:"render",value:function(){return m.default.createElement("div",{className:"pt-content-card__work-container flex flex-dc"},m.default.createElement(v.a,{icon:"folder",title:j.work,handleDrawerState:this.handleDrawerState,isFiltersOpen:this.state.isFiltersOpen}),m.default.createElement(A,{handleDrawerState:this.handleDrawerState,isFiltersOpen:this.state.isFiltersOpen}))}}]),n}(m.default.PureComponent)},39:function(e){e.exports=JSON.parse('{"404":{"back_404":"Go home","text":"Sorry, I can\'t find the page you\'re looking for...","button_text":"Do you want help to return home?"},"home":{"about":"About me","about_alt":"About","work":"My Work","work_alt":"Work","contact":"Contact me","contact_alt":"Contact"},"about":{"find_me":"You\'ll find me on:"},"work":{"no_projects":"Whoops! There\'s nothing here yet!","categories":"Categories","category_all":"All","website":"Visit Website","source":"Source Code","app":"Download App"},"contact":{"toast":{"close":"Close"},"form":{"name":"What\'s your name?","email":"What\'s your email?","message":"Please, explain yourself:","validation":{"invalid_name":"Invalid name","invalid_email":"Invalid email","invalid_message":"Invalid message","invalid_grecaptcha":"Invalid gRecaptchaResponse","server_error":"Server reported an error","conection_error":"Connection Error","success":"Message sent successfully"}},"loading":"Loading","send":"Send","sending":"Sending"},"misc":{"back":"Go back"}}')},40:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(5),a=n.n(r),o=n(6),i=n.n(o),l=n(7),c=n.n(l),s=n(8),u=n.n(s),f=n(4),d=n.n(f),p=n(0);function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d()(e);if(t){var a=d()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u()(this,n)}}var m=function(e){c()(n,e);var t=h(n);function n(){return a()(this,n),t.apply(this,arguments)}return i()(n,[{key:"render",value:function(){var e=this.props.iconColor?{fill:this.props.iconColor}:null;return p.default.createElement("svg",{style:e,viewBox:"0 0 24 24"},p.default.createElement("use",{xlinkHref:"".concat("/","assets/icons.svg#").concat(this.props.iconName)}))}}]),n}(p.default.PureComponent)},41:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return l}));var r={fullName:"Mohamed Tawfik",description:"Software Developer",avatarPath:"avatar.jpeg",about:{title:"HEY THERE! \n    I'M Mohamed Tawfik",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n   \n    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis.",findMeOn:[{iconName:"twitter",text:"@motawfik1998",url:"https://twitter.com/motawfik1998",hoverColor:"#1da1f2"},{iconName:"email",text:"motawfik1998@gmail.com",url:"mailto://motawfik1998@gmail.com",hoverColor:"#546e7a"}]},social:[{iconName:"twitter",url:"https://twitter.com/motawfik1998",text:"I'm on Twitter",hoverColor:"#1da1f2"},{iconName:"github",url:"https://github.com/motawfik98",text:"I'm on Github",hoverColor:"#000"},{iconName:"email",url:"mailto:motawfik1998@gmail.com",text:"Send me an email",hoverColor:"#000"}]},a=[{title:"Remote Tutor",img:"https://motawfik.com/assets/remotetutor.png",description:"Remote tutor platform aimed to connect teachers with students by offering online quizzes and assignments with automatic grading, with uploading video recordings for the students to watch.",categories:["Go","VueJS","MySQL"],siteUrl:"https://remotetutoreg.com"},{title:"Minigram",img:"https://motawfik.com/assets/minigram.png",description:"Android app that allows users to register, share, and like photos with each other.",categories:["Android","Kotlin","Firebase","MVVM"],appUrl:"https://play.google.com/store/apps/details?id=com.motawfik.minigram",sourceCodeUrl:"https://github.com/android-minigram"},{title:"Voice Events",img:"https://motawfik.com/assets/voiceevents.png",description:"Android app that uses speech recognition to allow users to create new calendar events",categories:["Android","Kotlin"],appUrl:"https://play.google.com/store/apps/details?id=com.motawfik.voicereminders",sourceCodeUrl:"https://github.com/motawfik98/android-voice-reminders"}],o="http://localhost:4000",i="6LcBOC8UAAAAAM9YRyBp1RR-1NnwvMU8UDsR63Vu",l="no-work-icon.jpg"},42:function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));var r=n(5),a=n.n(r),o=n(6),i=n.n(o),l=n(7),c=n.n(l),s=n(8),u=n.n(s),f=n(4),d=n.n(f),p=n(0),h=n(46),m=n(40),v=n(39);function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d()(e);if(t){var a=d()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u()(this,n)}}var _=v.misc,k=function(e){c()(n,e);var t=g(n);function n(){return a()(this,n),t.apply(this,arguments)}return i()(n,[{key:"render",value:function(){return p.default.createElement("div",{className:"pt-content-card__header pt-content-card__header--nav flex flex-cross-center"},p.default.createElement(h.a,{to:"/",title:_.back},p.default.createElement("div",{className:"pt-content-card__header--nav__icon flex flex-full-center"},p.default.createElement(m.a,{iconName:"arrow-left"}))),p.default.createElement("div",{className:"pt-content-card__header--nav__title flex flex-full-center"},p.default.createElement(m.a,{iconName:this.props.icon}),p.default.createElement("h2",{className:"ta-c"},this.props.title)),this.props.handleDrawerState?p.default.createElement("button",{style:{pointerEvents:this.props.isFiltersOpen?"none":""},className:"pt-content-card__header--nav__icon flex-full-center pointer",onClick:this.props.handleDrawerState},p.default.createElement(m.a,{iconName:"filter"})):null)}}]),n}(p.default.PureComponent)}}]);