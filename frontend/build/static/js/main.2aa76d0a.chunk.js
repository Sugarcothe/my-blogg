(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[2],{26:function(e,n,a){},31:function(e,n,a){"use strict";a.r(n);var t=a(0),o=a.n(t),l=a(17),r=a.n(l),i=a(6),c=a(1),s=(a(26),a(13)),m=a(14),u=a(9),d=a(16),b=a(15),f=function(e){Object(d.a)(a,e);var n=Object(b.a)(a);function a(){var e;return Object(s.a)(this,a),(e=n.call(this)).state={isLoggedIn:!1},e.handleNavbarCollapse=e.handleNavbarCollapse.bind(Object(u.a)(e)),e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){"true"===sessionStorage.getItem("isLoggedIn")&&this.setState((function(e){if(!e.isLoggedIn)return{isLoggedIn:!0}})),"false"===sessionStorage.getItem("isLoggedIn")&&this.setState((function(e){if(e.isLoggedIn)return{isLoggedIn:!1}}))}},{key:"handleNavbarCollapse",value:function(){document.querySelector("#navbarTogglerDemo01").classList.remove("show")}},{key:"render",value:function(){return o.a.createElement("nav",{className:"navbar navbar-custom navbar-expand-lg "},o.a.createElement(i.b,{to:"/",className:"navbar-brand"},o.a.createElement("i",{class:"fas fa-spider"})," iCodeTill",o.a.createElement("span",{className:"full-stop"},"."),"xyz"),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",null,o.a.createElement("i",{className:"fa fa-bars"}))),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo01"},o.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},o.a.createElement("li",{className:"navbar-item"},o.a.createElement(i.b,{to:"/about",className:"nav-link",onClick:this.handleNavbarCollapse},"About")),o.a.createElement("li",{className:"navbar-item"},o.a.createElement(i.b,{to:"/posts",className:"nav-link",onClick:this.handleNavbarCollapse},"Posts")),this.state.isLoggedIn?o.a.createElement("li",{className:"navbar-item"},o.a.createElement(i.b,{to:"/logout",className:"nav-link",onClick:function(){window.sessionStorage.removeItem("isLoggedIn"),window.sessionStorage.removeItem("username"),window.location="/posts"}},"Logout")):o.a.createElement("li",{className:"navbar-item"},o.a.createElement(i.b,{to:"/login",className:"nav-link",onClick:this.handleNavbarCollapse},"Login")))))}}]),a}(t.Component),g=function(){return o.a.createElement("footer",null,"Created by ",o.a.createElement("span",{className:"text-warning",id:"rajat"},"Valentine"),o.a.createElement("br",null),o.a.createElement("span",null,o.a.createElement("i",{className:"fab fa-github",onClick:function(){return window.open("https://github.com/Sugarcothe","_blank")}})," ",o.a.createElement("i",{className:"fab fa-linkedin",onClick:function(){return window.open("https://www.linkedin.com/in/valentine-eze-751a40b2","_blank")}})," ",o.a.createElement("i",{className:"fab fa-stack-overflow",onClick:function(){return window.open("https://stackoverflow.com/users/14275698/eze-valentine-ifeanyichukwu","_blank")}})," ",o.a.createElement("i",{className:"fab fa-twitter",onClick:function(){return window.open("https://twitter.com/sweetestshuga","_blank")}}),o.a.createElement("i",{className:"fab fa-medium",onClick:function(){return window.open("https://ifeanyivalentine82.medium.com","_blank")}})," ",o.a.createElement("i",{className:"fab fas fa-user-tie",onClick:function(){return window.open("https://novoresume.com/editor/resume/ece07cb0-87fe-11eb-a08a-2301b924a048","_blank")}})))},p=Object(t.lazy)((function(){return a.e(13).then(a.bind(null,220))})),h=Object(t.lazy)((function(){return Promise.all([a.e(0),a.e(9)]).then(a.bind(null,84))})),v=Object(t.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(7)]).then(a.bind(null,221))})),w=Object(t.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(8)]).then(a.bind(null,222))})),E=Object(t.lazy)((function(){return Promise.all([a.e(0),a.e(15)]).then(a.bind(null,223))})),k=Object(t.lazy)((function(){return Promise.all([a.e(0),a.e(4),a.e(14)]).then(a.bind(null,224))})),N=Object(t.lazy)((function(){return a.e(11).then(a.bind(null,225))})),y=function(){return o.a.createElement("div",{className:"container"},o.a.createElement(i.a,null,o.a.createElement(f,null),o.a.createElement(t.Suspense,{fallback:o.a.createElement("div",{className:"spinner-container"},o.a.createElement("div",{className:"spinner-border",role:"status"},o.a.createElement("span",{className:"sr-only"},"Loading...")))},o.a.createElement(c.c,null,o.a.createElement(c.a,{path:"/",exact:!0,component:p}),o.a.createElement(c.a,{path:"/posts",exact:!0,component:E}),o.a.createElement(c.a,{path:"/posts/chochocho/",exact:!0,component:v}),o.a.createElement(c.a,{path:"/posts/:id",exact:!0,component:h}),o.a.createElement(c.a,{path:"/posts/:id/edit",exact:!0,component:w}),o.a.createElement(c.a,{path:"/login",component:k}),o.a.createElement(c.a,{path:"/about",component:N}))),o.a.createElement(g,null)))},C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(o.a.createElement(y,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");C?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var t=a.headers.get("content-type");404===a.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):j(n,e)}))}}()}},[[31,3,5]]]);
//# sourceMappingURL=main.2aa76d0a.chunk.js.map