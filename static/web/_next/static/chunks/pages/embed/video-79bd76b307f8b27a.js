(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3126,4114],{61357:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/embed/video",function(){return t(24813)}])},21756:function(e,n,t){"use strict";t.d(n,{Q:function(){return i}});var s=t(85893),a=t(4480),r=t(44974);let i=()=>{let e=(0,a.sJ)(r.g1),{appearanceVariables:n,customStyles:t}=e,i=Object.keys(n).filter(e=>!!n[e]).map(e=>"--".concat(e,": ").concat(n[e]));return(0,s.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n				:root {\n					".concat(i.join(";\n"),"\n				}\n				").concat(t,"\n			")}})}},74681:function(e,n,t){"use strict";t.d(n,{R:function(){return h}});var s=t(85893),a=t(27049),r=t(45938),i=t(5152),o=t.n(i),c=t(94184),l=t.n(c),u=t(40158),d=t.n(u);let f=o()(()=>Promise.all([t.e(2074),t.e(9095)]).then(t.t.bind(t,69095,23)),{loadableGenerated:{webpack:()=>[69095]},ssr:!1}),h=e=>{let n,{streamName:t,customText:i,lastLive:o,notificationsEnabled:c,fediverseAccount:u,showsHeader:h=!0,onNotifyClick:_,onFollowClick:x,className:m}=e;return n=i||(!i&&c&&u?(0,s.jsxs)("span",{children:["This stream is offline. You can"," ",(0,s.jsx)("span",{role:"link",tabIndex:0,className:d().actionLink,onClick:_,children:"be notified"})," ","the next time ",t," goes live or"," ",(0,s.jsx)("span",{role:"link",tabIndex:0,className:d().actionLink,onClick:x,children:"follow"})," ",u," on the Fediverse."]}):!i&&c?(0,s.jsxs)("span",{children:["This stream is offline."," ",(0,s.jsx)("span",{role:"link",tabIndex:0,className:d().actionLink,onClick:_,children:"Be notified"})," ","the next time ",t," goes live."]}):!i&&u?(0,s.jsxs)("span",{children:["This stream is offline."," ",(0,s.jsx)("span",{role:"link",tabIndex:0,className:d().actionLink,onClick:x,children:"Follow"})," ",u," on the Fediverse to see the next time ",t," goes live."]}):"This stream is offline. Check back soon!"),(0,s.jsx)("div",{id:"offline-banner",className:l()(d().outerContainer,m),children:(0,s.jsxs)("div",{className:d().innerContainer,children:[h&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:d().header,children:t}),(0,s.jsx)(a.Z,{className:d().separator})]}),(0,s.jsx)("div",{className:d().bodyText,children:n}),o&&(0,s.jsxs)("div",{className:d().lastLiveDate,children:[(0,s.jsx)(f,{className:d().clockIcon}),"Last live ".concat((0,r.Z)(new Date(o))," ago.")]})]})})}},48831:function(e,n,t){"use strict";t.d(n,{X:function(){return x}});var s=t(85893),a=t(45938),r=t(68730),i=t(67294),o=t(5152),c=t.n(o),l=t(94184),u=t.n(l),d=t(29485),f=t.n(d),h=t(63516);let _=c()(()=>Promise.all([t.e(2074),t.e(1965)]).then(t.t.bind(t,41965,23)),{loadableGenerated:{webpack:()=>[41965]},ssr:!1}),x=e=>{let n,{online:t,lastConnectTime:o,lastDisconnectTime:c,viewerCount:l,className:d}=e,[,x]=(0,i.useState)(new Date);(0,i.useEffect)(()=>{let e=setInterval(()=>x(new Date),1e3);return()=>{clearInterval(e)}},[]);let m="";if(t&&o){let e=function(e){let n="hour",t="minute",s=(0,r.Z)({start:e,end:new Date});return s.days>=1?"".concat(s.days," ").concat((0,h._6)("day",s.days),"\n			").concat(s.hours," ").concat((0,h._6)(n,s.hours)):s.hours>=1?"".concat(s.hours," ").concat((0,h._6)(n,s.hours)," ").concat(s.minutes,"\n			").concat((0,h._6)(t,s.minutes)):"".concat(s.minutes," ").concat((0,h._6)(t,s.minutes),"\n		").concat(s.seconds," ").concat((0,h._6)("second",s.seconds))}(new Date(o));m=t?"Live for  ".concat(e):"Offline",n=l>0&&(0,s.jsxs)("div",{className:f().right,children:[(0,s.jsx)("span",{children:(0,s.jsx)(_,{})}),(0,s.jsx)("span",{children:" ".concat(l)})]})}else!t&&(m="Offline",c&&(n="Last live ".concat((0,a.Z)(new Date(c))," ago.")));return(0,s.jsxs)("div",{className:u()(f().statusbar,d),role:"status",children:[(0,s.jsx)("div",{children:m}),(0,s.jsx)("div",{children:n})]})};x.defaultProps={lastConnectTime:null,lastDisconnectTime:null}},24813:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var s=t(85893);t(67294);var a=t(4480),r=t(11163),i=t(26303),o=t(44974),c=t(74681),l=t(48831),u=t(22864),d=t(21756);function f(){var e;let n=(0,a.sJ)(o.RI),t=(0,a.sJ)(o.g1),f=(0,a.sJ)(o.Q),{name:h}=t,{offlineMessage:_}=t,{viewerCount:x,lastConnectTime:m,lastDisconnectTime:p,streamTitle:v}=n,b=(0,a.sJ)(o.YW),j=(0,r.useRouter)(),y=null!==(e=j.asPath.split("?")[1])&&void 0!==e?e:"",k=y.split("&").reduce((e,n)=>{let[t,s]=n.split("=");return{...e,[t]:s}},{}),w="true"===k.initiallyMuted,N=(0,s.jsx)(i.Z,{active:!0,style:{padding:"10px"},paragraph:{rows:10}}),O=(0,s.jsx)(c.R,{streamName:h,customText:_,notificationsEnabled:!1}),g=(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u.OwncastPlayer,{source:"/hls/stream.m3u8",online:b,initiallyMuted:w,title:v||h,fill:!0}),(0,s.jsx)(l.X,{online:b,lastConnectTime:m,lastDisconnectTime:p,viewerCount:x})]});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.me,{}),(0,s.jsx)(d.Q,{}),(0,s.jsx)("div",{className:"video-embed",children:f.appLoading?N:b?g:O})]})}},40158:function(e){e.exports={outerContainer:"OfflineBanner_outerContainer__3AbsB",innerContainer:"OfflineBanner_innerContainer__zTm13",bodyText:"OfflineBanner_bodyText__nNNy0",separator:"OfflineBanner_separator___j_Ss",lastLiveDate:"OfflineBanner_lastLiveDate___UZdO",clockIcon:"OfflineBanner_clockIcon__s0DB_",header:"OfflineBanner_header__Vu20o",footer:"OfflineBanner_footer__o3Zl5",actionLink:"OfflineBanner_actionLink__b4Mwa"}},29485:function(e){e.exports={statusbar:"Statusbar_statusbar__AtVnB"}},11163:function(e,n,t){e.exports=t(96885)},10434:function(e){function n(){return e.exports=n=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,n.apply(this,arguments)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},59199:function(e,n,t){"use strict";function s(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}t.d(n,{Z:function(){return s}})},74902:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var s=t(30907),a=t(59199),r=t(40181);function i(e){return function(e){if(Array.isArray(e))return(0,s.Z)(e)}(e)||(0,a.Z)(e)||(0,r.Z)(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(e){e.O(0,[2544,2184,5938,2332,5273,9243,6959,781,9774,2888,179],function(){return e(e.s=61357)}),_N_E=e.O()}]);