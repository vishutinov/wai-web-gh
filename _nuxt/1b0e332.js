(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{222:function(t,e,n){"use strict";n.r(e);var o={methods:{click:function(){this.$emit("click")}}},r=n(12),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"rounded-md border-none cursor-pointer focus:outline-none px-5 py-2 bg-brand-color hover:bg-green-500 active:bg-green-600",on:{click:function(e){return t.click()}}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(222).default})},223:function(t,e,n){"use strict";e.a={getUserId:function(){return localStorage.getItem("user.id")},setUserId:function(t){return localStorage.setItem("user.id",t)},getUserName:function(){return localStorage.getItem("user.name")},setUserName:function(t){return localStorage.setItem("user.name",t)}}},224:function(t,e,n){"use strict";n.r(e);var o={},r=n(12),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon",attrs:{viewBox:"0 0 24 24"}},[e("path",{attrs:{fill:"currentColor",d:"M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"}})])}),[],!1,null,null,null);e.default=component.exports},225:function(t,e,n){"use strict";n.r(e);var o={},r=n(12),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon",attrs:{viewBox:"0 0 24 24"}},[e("path",{attrs:{fill:"currentColor",d:"M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10A2,2 0 0,1 6,8H15V6A3,3 0 0,0 12,3A3,3 0 0,0 9,6H7A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,17A2,2 0 0,0 14,15A2,2 0 0,0 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17Z"}})])}),[],!1,null,null,null);e.default=component.exports},227:function(t,e,n){},228:function(t,e,n){"use strict";n.r(e);n(32);var o=n(232),r={},l=n(12),c=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon",attrs:{viewBox:"0 0 24 24"}},[e("path",{attrs:{fill:"currentColor",d:"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"}})])}),[],!1,null,null,null).exports,d=n(224),f=n(225),m=n(233),v=n(234),h=n(222),y=n(235),C=n(236),_=n(223),x=n(140),w=n(237),A={components:{IconLock:d.default,IconBullseyeArrow:o.default,IconLockOpen:f.default,RoundButton:m.default,IconDotsVertical:c,Popup:v.default,Button:h.default,QuiteButton:y.default,IconShieldAccount:C.default,IconAccountRemove:w.default},props:["player","withAdminRights","ws"],data:function(){return{text:null,guessedPopup:!1,moderatorPopup:!1,removePopup:!1,timeoutId:null}},computed:{playerText:function(){return this.player.text},self:function(){return!!this.player&&this.player.userId===_.a.getUserId()},disconnected:function(){return"DISCONNECTED"===this.player.status},score:function(){return this.player.score?this.player.score:0}},watch:{player:function(){this.player.justGuessed&&x.a.$emit("confetti")},playerText:{immediate:!0,handler:function(){null!=this.player.text&&(this.text=this.player.text)}},text:function(){this.player.text=this.text}},methods:{guessed:function(){this.guessedPopup=!1,this.ws.send(JSON.stringify({type:"GUESSED",userId:this.player.userId}))},removePlayer:function(){this.removePlayer=!0,this.ws.send(JSON.stringify({type:"REMOVE",userId:this.player.userId}))},setWord:function(){var t=this;null!==this.timeoutId&&clearTimeout(this.timeoutId),this.timeoutId=setTimeout((function(){t.ws.send(JSON.stringify({type:"TEXT",forUserId:t.player.userId,text:t.text}))}),1e3)},transferModerator:function(){this.moderatorPopup=!1,this.ws.send(JSON.stringify({type:"MODERATOR",newModeratorUserId:this.player.userId}))},lockWord:function(){this.ws.send(JSON.stringify({type:"LOCK",users:[this.player.userId]}))},unlockWord:function(){this.ws.send(JSON.stringify({type:"UNLOCK",users:[this.player.userId]})),this.$set(this.player,"locked",!1)}}},k=(n(240),Object(l.a)(A,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col place-items-center w-full shadow-md rounded-md p-2 player border-2 border-gray-200 bg-white",class:{"shake bg-gradient-to-r from-orange-300 to-yellow-200 ":t.player.justGuessed}},[n("div",{staticClass:"flex w-full mb-1",class:{"justify-between":t.score>0,"justify-center":0===t.score}},[t.score>0?n("div",{staticClass:"w-16 flex justify-start items-center pl-1"},[n("IconBullseyeArrow",{staticClass:"mr-1"}),t._v("\n      "+t._s(t.score)+"\n    ")],1):t._e(),t._v(" "),n("div",{staticClass:"flex items-center"},[t.player.moderator?n("IconShieldAccount",{staticClass:"mr-1 fill-current text-green-400"}):t._e(),t._v(" "),n("span",{class:t.self?"font-bold text-lg":""},[t._v("\n        "+t._s(t.player.name)+"\n      ")]),t._v(" "),t.player.moderator?n("div",{staticClass:"ml-1 icon"}):t._e(),t._v(" "),t.disconnected?n("IconCloudOffOutline",{staticClass:"ml-1 fill-current text-gray-500"}):t._e()],1),t._v(" "),t.score>0?n("div",{staticClass:"w-16"}):t._e()]),t._v(" "),t.player.locked||t.self?n("hr",{staticClass:"w-8/12"}):t._e(),t._v(" "),n("div",{staticClass:"flex flex-grow w-full h-full justify-center items-center"},[t.player.locked||t.self?[n("div",{staticClass:"h-full flex place-items-center"},[t.player.text?n("p",{staticClass:"text-2xl whitespace-pre text-center"},["***"==t.player.text?[t._v("* * *")]:[t._v(t._s(t.player.text))]],2):n("p",{staticClass:"text-xl text-gray-500"},[t._v("(no word)")])])]:n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"text-2xl text-center w-full h-full resize-none border-2 border-dotted rounded-md",attrs:{rows:"2",placeholder:"Type word here..."},domProps:{value:t.text},on:{input:[function(e){e.target.composing||(t.text=e.target.value)},function(e){return t.setWord()}]}})],2),t._v(" "),n("div",{staticClass:"flex mt-2 w-full"},[t.withAdminRights?[t.player.locked?n("RoundButton",{on:{click:function(e){return t.unlockWord()}}},[n("IconLock")],1):n("RoundButton",{on:{click:function(e){return t.lockWord()}}},[n("IconLockOpen")],1)]:n("div",{staticClass:"m-2 md:m-1"},[t.player.locked?n("IconLock"):n("IconLockOpen")],1),t._v(" "),t.withAdminRights?[t.player.moderator?t._e():n("RoundButton",{attrs:{disabled:t.disconnected},on:{click:function(e){t.moderatorPopup=!t.moderatorPopup}}},[n("IconShieldAccount")],1),t._v(" "),n("Popup",{scopedSlots:t._u([{key:"content",fn:function(){return[n("IconShieldAccount",{staticClass:"w-20 fill-current text-green-500"}),t._v(" "),n("p",{staticClass:"text-lg my-4 text-center"},[t._v("\n            Do you want to transfer moderator rights to\n            "),n("b",[t._v(t._s(t.player.name))]),t._v("\n            ?\n          ")]),t._v(" "),n("div",{staticClass:"mt-2"},[n("Button",{staticClass:"w-24",on:{click:function(e){return t.transferModerator()}}},[t._v("Yes")]),t._v(" "),n("QuiteButton",{staticClass:"bg-gray-500 w-24",on:{click:function(e){t.moderatorPopup=!1}}},[t._v("\n              No\n            ")])],1)]},proxy:!0}],null,!1,2375090450),model:{value:t.moderatorPopup,callback:function(e){t.moderatorPopup=e},expression:"moderatorPopup"}}),t._v(" "),t.self?t._e():n("RoundButton",{on:{click:function(e){t.removePopup=!t.removePopup}}},[n("IconAccountRemove")],1),t._v(" "),n("Popup",{scopedSlots:t._u([{key:"content",fn:function(){return[n("IconAccountRemove",{staticClass:"w-20 fill-current text-green-500"}),t._v(" "),n("p",{staticClass:"text-lg my-4 text-center"},[t._v("\n            Do you want to remove\n            "),n("b",[t._v(t._s(t.player.name))]),t._v("\n            ?\n          ")]),t._v(" "),n("div",{staticClass:"mt-2"},[n("Button",{staticClass:"w-24",on:{click:function(e){return t.removePlayer()}}},[t._v("Yes")]),t._v(" "),n("QuiteButton",{staticClass:"bg-gray-500 w-24",on:{click:function(e){t.removePopup=!1}}},[t._v("\n              No\n            ")])],1)]},proxy:!0}],null,!1,4076071503),model:{value:t.removePopup,callback:function(e){t.removePopup=e},expression:"removePopup"}})]:t._e(),t._v(" "),n("div",{staticClass:"w-full"}),t._v(" "),t.withAdminRights?[n("RoundButton",{attrs:{disabled:t.player.justGuessed||!t.player.locked},on:{click:function(e){t.guessedPopup=!t.guessedPopup}}},[n("IconBullseyeArrow")],1),t._v(" "),n("Popup",{scopedSlots:t._u([{key:"content",fn:function(){return[n("IconBullseyeArrow",{staticClass:"w-20 fill-current text-green-500"}),t._v(" "),n("p",{staticClass:"text-lg my-4"},[t._v("\n            Has "),n("b",[t._v(t._s(t.player.name))]),t._v(" guessed his/her word?\n          ")]),t._v(" "),n("div",{staticClass:"mt-2"},[n("Button",{staticClass:"w-24",on:{click:function(e){return t.guessed()}}},[t._v("Yes")]),t._v(" "),n("QuiteButton",{staticClass:"bg-gray-500 w-24",on:{click:function(e){t.guessedPopup=!1}}},[t._v("\n              No\n            ")])],1)]},proxy:!0}],null,!1,2952966493),model:{value:t.guessedPopup,callback:function(e){t.guessedPopup=e},expression:"guessedPopup"}})]:t._e()],2)])}),[],!1,null,"13399571",null));e.default=k.exports;installComponents(k,{IconBullseyeArrow:n(232).default,IconShieldAccount:n(236).default,IconCloudOffOutline:n(241).default,IconLock:n(224).default,RoundButton:n(233).default,IconLockOpen:n(225).default,Button:n(222).default,QuiteButton:n(235).default,Popup:n(234).default,IconAccountRemove:n(237).default})},229:function(t,e,n){"use strict";n.r(e);var o={components:{IconContentCopy:n(231).default},props:["contentRef"],methods:{copyToClipboard:function(){this.selectText(this.$parent.$refs[this.contentRef]),document.execCommand("copy"),this.clearSelection()},selectText:function(element){var t;document.selection?((t=document.body.createTextRange()).moveToElementText(element),t.select()):window.getSelection&&((t=document.createRange()).selectNode(element),window.getSelection().removeAllRanges(),window.getSelection().addRange(t))},clearSelection:function(){window.getSelection?window.getSelection().removeAllRanges():document.selection&&document.selection.empty()}}},r=n(12),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"focus:outline-none cursor-pointer",on:{click:this.copyToClipboard}},[e("IconContentCopy")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconContentCopy:n(231).default,Button:n(222).default})},231:function(t,e,n){"use strict";n.r(e);var o={},r=n(12),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon",attrs:{viewBox:"0 0 24 24"}},[e("path",{attrs:{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"}})])}),[],!1,null,null,null);e.default=component.exports},232:function(t,e,n){"use strict";n.r(e);var o={},r=n(12),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon",attrs:{viewBox:"0 0 24 24"}},[e("path",{attrs:{fill:"currentColor",d:"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,10.84 21.79,9.69 21.39,8.61L19.79,10.21C19.93,10.8 20,11.4 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.6,4 13.2,4.07 13.79,4.21L15.4,2.6C14.31,2.21 13.16,2 12,2M19,2L15,6V7.5L12.45,10.05C12.3,10 12.15,10 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12C14,11.85 14,11.7 13.95,11.55L16.5,9H18L22,5H19V2M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12H16A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8V6Z"}})])}),[],!1,null,null,null);e.default=component.exports},233:function(t,e,n){"use strict";n.r(e);var o={props:["disabled"],methods:{click:function(){this.$emit("click")}}},r=n(12),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"rounded-full p-2 md:p-1 focus:outline-none",class:{"fill-current text-gray-500 cursor-not-allowed":t.disabled,"hover:bg-green-400 active:bg-green-600 cursor-pointer":!t.disabled},attrs:{disabled:t.disabled},on:{click:function(e){return t.click()}}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(222).default})},234:function(t,e,n){"use strict";n.r(e);var o={props:["value"],methods:{close:function(){this.$emit("input",!1)}}},r=n(12),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.value?n("div",{staticClass:"fixed top-0 left-0 w-screen h-screen bg-gray-400 bg-opacity-50 flex items-center justify-center",on:{click:function(e){return e.target!==e.currentTarget?null:t.close()}}},[t._t("modal",[n("div",{staticClass:"flex flex-col bg-white p-3 rounded-md shadow-md max-w-lg w-full m-2 items-center"},[t._t("content")],2)])],2):t._e()}),[],!1,null,null,null);e.default=component.exports},235:function(t,e,n){"use strict";n.r(e);var o={methods:{click:function(){this.$emit("click")}}},r=n(12),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"rounded-md border-none cursor-pointer focus:outline-none px-5 py-2 bg-gray-400 hover:bg-gray-500 active:bg-gray-600",on:{click:function(e){return t.click()}}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(222).default})},236:function(t,e,n){"use strict";n.r(e);var o={},r=n(12),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon",attrs:{viewBox:"0 0 24 24"}},[e("path",{attrs:{fill:"currentColor",d:"M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M17.13,17C15.92,18.85 14.11,20.24 12,20.92C9.89,20.24 8.08,18.85 6.87,17C6.53,16.5 6.24,16 6,15.47C6,13.82 8.71,12.47 12,12.47C15.29,12.47 18,13.79 18,15.47C17.76,16 17.47,16.5 17.13,17Z"}})])}),[],!1,null,null,null);e.default=component.exports},237:function(t,e,n){"use strict";n.r(e);var o={},r=n(12),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon",attrs:{viewBox:"0 0 24 24"}},[e("path",{attrs:{fill:"currentColor",d:"M15,14C17.67,14 23,15.33 23,18V20H7V18C7,15.33 12.33,14 15,14M15,12A4,4 0 0,1 11,8A4,4 0 0,1 15,4A4,4 0 0,1 19,8A4,4 0 0,1 15,12M5,9.59L7.12,7.46L8.54,8.88L6.41,11L8.54,13.12L7.12,14.54L5,12.41L2.88,14.54L1.46,13.12L3.59,11L1.46,8.88L2.88,7.46L5,9.59Z"}})])}),[],!1,null,null,null);e.default=component.exports},239:function(t,e,n){"use strict";var o=n(2),r=n(37).find,l=n(103),c=n(18),d=!0,f=c("find");"find"in[]&&Array(1).find((function(){d=!1})),o({target:"Array",proto:!0,forced:d||!f},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),l("find")},240:function(t,e,n){"use strict";n(227)},241:function(t,e,n){"use strict";n.r(e);var o={},r=n(12),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon",attrs:{viewBox:"0 0 24 24"}},[e("path",{attrs:{fill:"currentColor",d:"M7.73,10L15.73,18H6A4,4 0 0,1 2,14A4,4 0 0,1 6,10M3,5.27L5.75,8C2.56,8.15 0,10.77 0,14A6,6 0 0,0 6,20H17.73L19.73,22L21,20.73L4.27,4M19.35,10.03C18.67,6.59 15.64,4 12,4C10.5,4 9.15,4.43 8,5.17L9.45,6.63C10.21,6.23 11.08,6 12,6A5.5,5.5 0 0,1 17.5,11.5V12H19A3,3 0 0,1 22,15C22,16.13 21.36,17.11 20.44,17.62L21.89,19.07C23.16,18.16 24,16.68 24,15C24,12.36 21.95,10.22 19.35,10.03Z"}})])}),[],!1,null,null,null);e.default=component.exports},244:function(t,e,n){"use strict";n.r(e);n(67),n(239),n(51),n(30),n(156),n(31),n(54),n(53);var o=n(222),r=n(229),l=n(224),c=n(225),d=n(228),f=n(223),m={components:{CopyToClipboard:r.default,Player:d.default,Button:o.default,IconLock:l.default,IconLockOpen:c.default},data:function(){return{url:"",players:[],lockAll:!0,ws:null}},created:function(){this.url=window.location.href,f.a.getUserId()&&f.a.getUserId().length>0?this.openWS():this.$router.push({path:"/users/new",query:{to:this.$router.currentRoute.path}})},computed:{isCurrentPlayerModerator:function(){var t=this.players.find((function(p){return p.userId===f.a.getUserId()}));return!!t&&t.moderator}},methods:{toggleLockAll:function(){this.lockAll?this.ws.send(JSON.stringify({type:"LOCK",users:this.players.map((function(p){return p.userId}))})):this.ws.send(JSON.stringify({type:"UNLOCK",users:this.players.map((function(p){return p.userId}))})),this.lockAll=!this.lockAll},openWS:function(){var t=this;this.userId=f.a.getUserId();var e="".concat("wss://api.timetotalk.io","/ws?gameId=").concat(this.$route.params.id,"&userId=").concat(this.userId);this.ws=new WebSocket(e),this.ws.onopen=function(){t.ws.send(JSON.stringify({type:"JOIN",name:f.a.getUserName()}))},this.ws.onmessage=this.onMessage,this.ws.onerror=function(t){return console.error(t)}},onMessage:function(input){var t=this,e=JSON.parse(input.data);if("UPDATE"===e.type)e.players.forEach((function(p){return t.updatePlayer(p)}));else if("GUESSED"===e.type)e.players.forEach((function(p){p.justGuessed=!0,t.updatePlayer(p)}));else if("TEXT"===e.type){var n=this.players.find((function(p){return p.userId===e.forUserId}));n&&(console.info(e.text),this.$set(n,"text",e.text))}else"REMOVED"===e.type&&(console.info("REMOVED"),this.$router.replace("/"))},gridMin:function(t){return Math.min(this.players.length,t)},updatePlayer:function(t){for(;this.players.length<t.order;)this.players.push({});this.players.splice(t.order,1,t),console.info(this.players)}}},v=n(12),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isCurrentPlayerModerator?n("div",{staticClass:"bg-gradient-to-r from-yellow-200 to-yellow-100 my-3 p-3 rounded-md flex flex-col space-y-4"},[t._m(0),t._v(" "),n("div",{staticClass:"flex flex-col md:flex-row md:items-center"},[n("div",{staticClass:"text-md"},[t._v("Link to join:")]),t._v(" "),n("div",{staticClass:"flex"},[n("span",{ref:"url",staticClass:"italic text-md font-semibold md:mx-1"},[t._v("\n          "+t._s(t.url)+"\n        ")]),t._v(" "),n("CopyToClipboard",{staticClass:"ml-1",attrs:{contentRef:"url"}})],1)]),t._v(" "),n("div",{staticClass:"flex flex-col md:flex-row space-y-1"},[n("Button",{on:{click:function(e){return t.toggleLockAll()}}},[n("span",{staticClass:"flex place-content-center"},[t.lockAll?[n("IconLockOpen"),t._v("\n            Lock All Words\n          ")]:[n("IconLock"),t._v("\n            Unlock All Words\n          ")]],2)])],1)]):t._e(),t._v(" "),n("div",{staticClass:"my-3"},[n("div",{class:"grid gap-6 sm:grid-cols-1 md:grid-cols-"+t.gridMin(2)+" lg:grid-cols-"+t.gridMin(3)},[t._l(t.players,(function(e){return[e.userId&&e.status&&"REMOVED"!=e.status?n("Player",{key:e.userId,attrs:{player:e,withAdminRights:t.isCurrentPlayerModerator,ws:t.ws}}):t._e()]}))],2)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h3",{staticClass:"text-4xl font-hairline leading-7 text-black"},[this._v("Your are moderator:")]),this._v(" "),e("p",{staticClass:"text-sm italic text-gray-600"},[this._v("\n        With great power comes great responsibility\n      ")])])}],!1,null,"5c7f1de6",null);e.default=component.exports;installComponents(component,{CopyToClipboard:n(229).default,IconLockOpen:n(225).default,IconLock:n(224).default,Button:n(222).default,Player:n(228).default})}}]);