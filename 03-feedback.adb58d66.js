!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},o=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var a="Expected a function",u=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt,d="object"==typeof n&&n&&n.Object===Object&&n,m="object"==typeof self&&self&&self.Object===Object&&self,v=d||m||Function("return this")(),g=Object.prototype.toString,y=Math.max,p=Math.min,b=function(){return v.Date.now()};function S(e,t,n){var r,o,i,u,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(a);function v(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function g(e){return c=e,f=setTimeout(O,t),s?v(e):u}function S(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=i}function O(){var e=b();if(S(e))return w(e);f=setTimeout(O,function(e){var n=t-(e-l);return d?p(n,i-(e-c)):n}(e))}function w(e){return f=void 0,m&&r?v(e):(r=o=void 0,u)}function T(){var e=b(),n=S(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return g(l);if(d)return f=setTimeout(O,t),v(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=j(t)||0,h(n)&&(s=!!n.leading,i=(d="maxWait"in n)?y(j(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},T.flush=function(){return void 0===f?u:w(b())},T}function h(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==g.call(t)}(t))return NaN;if(h(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=h(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var r=l.test(t);return r||c.test(t)?s(t.slice(2),r?2:8):f.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(a);return h(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),S(e,t,{leading:r,maxWait:t,trailing:o})};var O=document.querySelector(".feedback-form"),w=document.querySelector('input[name="email"]'),T=document.querySelector('textarea[name="message"]'),x=document.querySelector('button[type="submit"]'),N="feedback-form-state",E={email:"",message:""};!function(){""===o(N).email?w.value="":(w.value=o(N).email,E.email=o(N).email);""===o(N).message?T.value="":(T.value=o(N).message,E.message=o(N).message)}(),console.log("Received from storage: ",o(N)),x.addEventListener("click",(function(){r(N,E={email:"",message:""}),w.value="",T.value=""})),O.addEventListener("input",e(t)((function(){E.email=w.value,E.message=T.value,r(N,E)}),500))}();
//# sourceMappingURL=03-feedback.adb58d66.js.map
