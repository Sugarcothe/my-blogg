(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[14],{224:function(e,o,t){"use strict";t.r(o);var n=t(13),a=t(14),i=t(16),s=t(15),r=t(0),c=t.n(r),l=t(41),u=t.n(l),g=t(179),d=t.n(g),m=t(182),S=t.n(m),E=t(183),_=t.n(E);d.a.config();var T=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BASEURL||"http://localhost:5000",h=function(e){Object(i.a)(t,e);var o=Object(s.a)(t);function t(){var e;Object(n.a)(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=o.call.apply(o,[this].concat(i))).twitterAuthHandler=function(e,o){if(e)window.location="/login";else{var t={username:o.screen_name,socialId:o.user_id};u.a.post("".concat(T,"/auth/login"),t).then((function(e){var o=0;e.data.socialId?(sessionStorage.setItem("isLoggedIn","true"),sessionStorage.setItem("username",e.data.username),o++,window.setTimeout((function(){sessionStorage.removeItem("isLoggedIn"),sessionStorage.removeItem("username")}),5184e3),1===o&&window.location.reload()):window.location="/login"})).catch((function(e){return console.error(e)}))}},e}return Object(a.a)(t,[{key:"componentDidMount",value:function(){"true"===sessionStorage.getItem("isLoggedIn")&&window.history.back()}},{key:"successGoogleLogin",value:function(e){var o={username:e.profileObj.name,socialId:e.googleId};u.a.post("".concat(T,"/auth/login"),o).then((function(o){var t=0;o.data.socialId===e.googleId?(sessionStorage.setItem("isLoggedIn","true"),sessionStorage.setItem("username",o.data.username),t++,window.setTimeout((function(){sessionStorage.removeItem("isLoggedIn"),sessionStorage.removeItem("username")}),5184e3),1===t&&window.location.reload()):window.location="/login"})).catch((function(e){return console.error(e)}))}},{key:"failureGoogleLogin",value:function(e){console.error(e),window.location="/login"}},{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"login"},c.a.createElement("h5",null,"Login with your social account",c.a.createElement("span",{className:"full-stop"},".")),c.a.createElement("hr",{className:"gold-hr"}),c.a.createElement("div",{className:"google"},c.a.createElement(S.a,{clientId:"261376179330-9v1kkchb9li74dur1tnetpa0l27osaju.apps.googleusercontent.com",buttonText:"Log in With Google",onSuccess:this.successGoogleLogin,onFailure:this.failureGoogleLogin,cookiePolicy:"single_host_origin",scope:"profile"})),c.a.createElement("br",null),c.a.createElement("div",{className:"twitter"},c.a.createElement(_.a,{authCallback:this.twitterAuthHandler,consumerKey:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_TWITTER_CONSUMER_ID,consumerSecret:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_TWITTER_CONSUMER_SECRET,callbackUrl:"https://mern-blog-it.herokuapp.com/login",buttonTheme:"light"}))))}}]),t}(c.a.Component);o.default=h}}]);
//# sourceMappingURL=14.1d735e77.chunk.js.map