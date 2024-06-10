"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{1263:(y,E,r)=>{r.d(E,{c:()=>i});var g=r(9672),d=r(1086),l=r(8607);const i=(n,s)=>{let e,t;const u=(a,_,m)=>{if(typeof document>"u")return;const v=document.elementFromPoint(a,_);v&&s(v)&&!v.disabled?v!==e&&(o(),c(v,m)):o()},c=(a,_)=>{e=a,t||(t=e);const m=e;(0,g.w)(()=>m.classList.add("ion-activated")),_()},o=(a=!1)=>{if(!e)return;const _=e;(0,g.w)(()=>_.classList.remove("ion-activated")),a&&t!==e&&e.click(),e=void 0};return(0,l.createGesture)({el:n,gestureName:"buttonActiveDrag",threshold:0,onStart:a=>u(a.currentX,a.currentY,d.a),onMove:a=>u(a.currentX,a.currentY,d.b),onEnd:()=>{o(!0),(0,d.h)(),t=void 0}})}},8438:(y,E,r)=>{r.d(E,{g:()=>d});var g=r(8476);const d=()=>{if(void 0!==g.w)return g.w.Capacitor}},5572:(y,E,r)=>{r.d(E,{c:()=>g,i:()=>d});const g=(l,i,n)=>"function"==typeof n?n(l,i):"string"==typeof n?l[n]===i[n]:Array.isArray(i)?i.includes(l):l===i,d=(l,i,n)=>void 0!==l&&(Array.isArray(l)?l.some(s=>g(s,i,n)):g(l,i,n))},3351:(y,E,r)=>{r.d(E,{g:()=>g});const g=(s,e,t,u,c)=>l(s[1],e[1],t[1],u[1],c).map(o=>d(s[0],e[0],t[0],u[0],o)),d=(s,e,t,u,c)=>c*(3*e*Math.pow(c-1,2)+c*(-3*t*c+3*t+u*c))-s*Math.pow(c-1,3),l=(s,e,t,u,c)=>n((u-=c)-3*(t-=c)+3*(e-=c)-(s-=c),3*t-6*e+3*s,3*e-3*s,s).filter(a=>a>=0&&a<=1),n=(s,e,t,u)=>{if(0===s)return((s,e,t)=>{const u=e*e-4*s*t;return u<0?[]:[(-e+Math.sqrt(u))/(2*s),(-e-Math.sqrt(u))/(2*s)]})(e,t,u);const c=(3*(t/=s)-(e/=s)*e)/3,o=(2*e*e*e-9*e*t+27*(u/=s))/27;if(0===c)return[Math.pow(-o,1/3)];if(0===o)return[Math.sqrt(-c),-Math.sqrt(-c)];const a=Math.pow(o/2,2)+Math.pow(c/3,3);if(0===a)return[Math.pow(o/2,.5)-e/3];if(a>0)return[Math.pow(-o/2+Math.sqrt(a),1/3)-Math.pow(o/2+Math.sqrt(a),1/3)-e/3];const _=Math.sqrt(Math.pow(-c/3,3)),m=Math.acos(-o/(2*Math.sqrt(Math.pow(-c/3,3)))),v=2*Math.pow(_,1/3);return[v*Math.cos(m/3)-e/3,v*Math.cos((m+2*Math.PI)/3)-e/3,v*Math.cos((m+4*Math.PI)/3)-e/3]}},5083:(y,E,r)=>{r.d(E,{i:()=>g});const g=d=>d&&""!==d.dir?"rtl"===d.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3126:(y,E,r)=>{r.r(E),r.d(E,{startFocusVisible:()=>i});const g="ion-focused",l=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],i=n=>{let s=[],e=!0;const t=n?n.shadowRoot:document,u=n||document.body,c=M=>{s.forEach(f=>f.classList.remove(g)),M.forEach(f=>f.classList.add(g)),s=M},o=()=>{e=!1,c([])},a=M=>{e=l.includes(M.key),e||c([])},_=M=>{if(e&&void 0!==M.composedPath){const f=M.composedPath().filter(w=>!!w.classList&&w.classList.contains("ion-focusable"));c(f)}},m=()=>{t.activeElement===u&&c([])};return t.addEventListener("keydown",a),t.addEventListener("focusin",_),t.addEventListener("focusout",m),t.addEventListener("touchstart",o,{passive:!0}),t.addEventListener("mousedown",o),{destroy:()=>{t.removeEventListener("keydown",a),t.removeEventListener("focusin",_),t.removeEventListener("focusout",m),t.removeEventListener("touchstart",o),t.removeEventListener("mousedown",o)},setFocus:c}}},1086:(y,E,r)=>{r.d(E,{I:()=>d,a:()=>e,b:()=>t,c:()=>s,d:()=>c,h:()=>u});var g=r(8438),d=function(o){return o.Heavy="HEAVY",o.Medium="MEDIUM",o.Light="LIGHT",o}(d||{});const i={getEngine(){const o=(0,g.g)();if(null!=o&&o.isPluginAvailable("Haptics"))return o.Plugins.Haptics},available(){if(!this.getEngine())return!1;const a=(0,g.g)();return"web"!==(null==a?void 0:a.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},impact(o){const a=this.getEngine();a&&a.impact({style:o.style})},notification(o){const a=this.getEngine();a&&a.notification({type:o.type})},selection(){this.impact({style:d.Light})},selectionStart(){const o=this.getEngine();o&&o.selectionStart()},selectionChanged(){const o=this.getEngine();o&&o.selectionChanged()},selectionEnd(){const o=this.getEngine();o&&o.selectionEnd()}},n=()=>i.available(),s=()=>{n()&&i.selection()},e=()=>{n()&&i.selectionStart()},t=()=>{n()&&i.selectionChanged()},u=()=>{n()&&i.selectionEnd()},c=o=>{n()&&i.impact(o)}},909:(y,E,r)=>{r.d(E,{I:()=>s,a:()=>c,b:()=>n,c:()=>_,d:()=>v,f:()=>o,g:()=>u,i:()=>t,p:()=>m,r:()=>M,s:()=>a});var g=r(467),d=r(4920),l=r(4929);const n="ion-content",s=".ion-content-scroll-host",e=`${n}, ${s}`,t=f=>"ION-CONTENT"===f.tagName,u=function(){var f=(0,g.A)(function*(w){return t(w)?(yield new Promise(p=>(0,d.c)(w,p)),w.getScrollElement()):w});return function(p){return f.apply(this,arguments)}}(),c=f=>f.querySelector(s)||f.querySelector(e),o=f=>f.closest(e),a=(f,w)=>t(f)?f.scrollToTop(w):Promise.resolve(f.scrollTo({top:0,left:0,behavior:w>0?"smooth":"auto"})),_=(f,w,p,O)=>t(f)?f.scrollByPoint(w,p,O):Promise.resolve(f.scrollBy({top:p,left:w,behavior:O>0?"smooth":"auto"})),m=f=>(0,l.b)(f,n),v=f=>{if(t(f)){const p=f.scrollY;return f.scrollY=!1,p}return f.style.setProperty("overflow","hidden"),!0},M=(f,w)=>{t(f)?f.scrollY=w:f.style.removeProperty("overflow")}},3992:(y,E,r)=>{r.d(E,{a:()=>g,b:()=>_,c:()=>e,d:()=>m,e:()=>P,f:()=>s,g:()=>v,h:()=>l,i:()=>d,j:()=>h,k:()=>C,l:()=>t,m:()=>o,n:()=>M,o:()=>c,p:()=>n,q:()=>i,r:()=>D,s:()=>L,t:()=>a,u:()=>p,v:()=>O,w:()=>u,x:()=>f,y:()=>w});const g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='64'/><path d='M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zM264 196.15L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z'/><path d='M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",L="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",P="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},243:(y,E,r)=>{r.d(E,{c:()=>i,g:()=>n});var g=r(8476),d=r(4920),l=r(4929);const i=(e,t,u)=>{let c,o;if(void 0!==g.w&&"MutationObserver"in g.w){const v=Array.isArray(t)?t:[t];c=new MutationObserver(M=>{for(const f of M)for(const w of f.addedNodes)if(w.nodeType===Node.ELEMENT_NODE&&v.includes(w.slot))return u(),void(0,d.r)(()=>a(w))}),c.observe(e,{childList:!0,subtree:!0})}const a=v=>{var M;o&&(o.disconnect(),o=void 0),o=new MutationObserver(f=>{u();for(const w of f)for(const p of w.removedNodes)p.nodeType===Node.ELEMENT_NODE&&p.slot===t&&m()}),o.observe(null!==(M=v.parentElement)&&void 0!==M?M:v,{subtree:!0,childList:!0})},m=()=>{o&&(o.disconnect(),o=void 0)};return{destroy:()=>{c&&(c.disconnect(),c=void 0),m()}}},n=(e,t,u)=>{const c=null==e?0:e.toString().length,o=s(c,t);if(void 0===u)return o;try{return u(c,t)}catch(a){return(0,l.a)("Exception in provided `counterFormatter`.",a),o}},s=(e,t)=>`${e} / ${t}`},1622:(y,E,r)=>{r.r(E),r.d(E,{KEYBOARD_DID_CLOSE:()=>n,KEYBOARD_DID_OPEN:()=>i,copyVisualViewport:()=>D,keyboardDidClose:()=>f,keyboardDidOpen:()=>v,keyboardDidResize:()=>M,resetKeyboardAssist:()=>c,setKeyboardClose:()=>m,setKeyboardOpen:()=>_,startKeyboardAssist:()=>o,trackViewportChanges:()=>O});var g=r(4379);r(8438),r(8476);const i="ionKeyboardDidShow",n="ionKeyboardDidHide";let e={},t={},u=!1;const c=()=>{e={},t={},u=!1},o=h=>{if(g.K.getEngine())a(h);else{if(!h.visualViewport)return;t=D(h.visualViewport),h.visualViewport.onresize=()=>{O(h),v()||M(h)?_(h):f(h)&&m(h)}}},a=h=>{h.addEventListener("keyboardDidShow",C=>_(h,C)),h.addEventListener("keyboardDidHide",()=>m(h))},_=(h,C)=>{w(h,C),u=!0},m=h=>{p(h),u=!1},v=()=>!u&&e.width===t.width&&(e.height-t.height)*t.scale>150,M=h=>u&&!f(h),f=h=>u&&t.height===h.innerHeight,w=(h,C)=>{const P=new CustomEvent(i,{detail:{keyboardHeight:C?C.keyboardHeight:h.innerHeight-t.height}});h.dispatchEvent(P)},p=h=>{const C=new CustomEvent(n);h.dispatchEvent(C)},O=h=>{e=Object.assign({},t),t=D(h.visualViewport)},D=h=>({width:Math.round(h.width),height:Math.round(h.height),offsetTop:h.offsetTop,offsetLeft:h.offsetLeft,pageTop:h.pageTop,pageLeft:h.pageLeft,scale:h.scale})},4379:(y,E,r)=>{r.d(E,{K:()=>i,a:()=>l});var g=r(8438),d=function(n){return n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE",n}(d||{}),l=function(n){return n.Body="body",n.Ionic="ionic",n.Native="native",n.None="none",n}(l||{});const i={getEngine(){const n=(0,g.g)();if(null!=n&&n.isPluginAvailable("Keyboard"))return n.Plugins.Keyboard},getResizeMode(){const n=this.getEngine();return null!=n&&n.getResizeMode?n.getResizeMode().catch(s=>{if(s.code!==d.Unimplemented)throw s}):Promise.resolve(void 0)}}},4731:(y,E,r)=>{r.d(E,{c:()=>s});var g=r(467),d=r(8476),l=r(4379);const i=e=>{if(void 0===d.d||e===l.a.None||void 0===e)return null;const t=d.d.querySelector("ion-app");return null!=t?t:d.d.body},n=e=>{const t=i(e);return null===t?0:t.clientHeight},s=function(){var e=(0,g.A)(function*(t){let u,c,o,a;const _=function(){var w=(0,g.A)(function*(){const p=yield l.K.getResizeMode(),O=void 0===p?void 0:p.mode;u=()=>{void 0===a&&(a=n(O)),o=!0,m(o,O)},c=()=>{o=!1,m(o,O)},null==d.w||d.w.addEventListener("keyboardWillShow",u),null==d.w||d.w.addEventListener("keyboardWillHide",c)});return function(){return w.apply(this,arguments)}}(),m=(w,p)=>{t&&t(w,v(p))},v=w=>{if(0===a||a===n(w))return;const p=i(w);return null!==p?new Promise(O=>{const h=new ResizeObserver(()=>{p.clientHeight===a&&(h.disconnect(),O())});h.observe(p)}):void 0};return yield _(),{init:_,destroy:()=>{null==d.w||d.w.removeEventListener("keyboardWillShow",u),null==d.w||d.w.removeEventListener("keyboardWillHide",c),u=c=void 0},isKeyboardVisible:()=>o}});return function(u){return e.apply(this,arguments)}}()},7838:(y,E,r)=>{r.d(E,{c:()=>d});var g=r(467);const d=()=>{let l;return{lock:function(){var n=(0,g.A)(function*(){const s=l;let e;return l=new Promise(t=>e=t),void 0!==s&&(yield s),e});return function(){return n.apply(this,arguments)}}()}}},9001:(y,E,r)=>{r.d(E,{c:()=>l});var g=r(8476),d=r(4920);const l=(i,n,s)=>{let e;const t=()=>!(void 0===n()||void 0!==i.label||null===s()),c=()=>{const a=n();if(void 0===a)return;if(!t())return void a.style.removeProperty("width");const _=s().scrollWidth;if(0===_&&null===a.offsetParent&&void 0!==g.w&&"IntersectionObserver"in g.w){if(void 0!==e)return;const m=e=new IntersectionObserver(v=>{1===v[0].intersectionRatio&&(c(),m.disconnect(),e=void 0)},{threshold:.01,root:i});m.observe(a)}else a.style.setProperty("width",.75*_+"px")};return{calculateNotchWidth:()=>{t()&&(0,d.r)(()=>{c()})},destroy:()=>{e&&(e.disconnect(),e=void 0)}}}},7895:(y,E,r)=>{r.d(E,{S:()=>d});const d={bubbles:{dur:1e3,circles:9,fn:(l,i,n)=>{const s=l*i/n-l+"ms",e=2*Math.PI*i/n;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":s}}}},circles:{dur:1e3,circles:8,fn:(l,i,n)=>{const s=i/n,e=l*s-l+"ms",t=2*Math.PI*s;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(l,i)=>({r:6,style:{left:32-32*i+"%","animation-delay":-110*i+"ms"}})},lines:{dur:1e3,lines:8,fn:(l,i,n)=>({y1:14,y2:26,style:{transform:`rotate(${360/n*i+(i<n/2?180:-180)}deg)`,"animation-delay":l*i/n-l+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(l,i,n)=>({y1:12,y2:20,style:{transform:`rotate(${360/n*i+(i<n/2?180:-180)}deg)`,"animation-delay":l*i/n-l+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(l,i,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":l*i/n-l+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(l,i,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":l*i/n-l+"ms"}})}}},7166:(y,E,r)=>{r.r(E),r.d(E,{createSwipeBackGesture:()=>n});var g=r(4920),d=r(5083),l=r(8607);r(1970);const n=(s,e,t,u,c)=>{const o=s.ownerDocument.defaultView;let a=(0,d.i)(s);const m=p=>a?-p.deltaX:p.deltaX;return(0,l.createGesture)({el:s,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:p=>(a=(0,d.i)(s),(p=>{const{startX:D}=p;return a?D>=o.innerWidth-50:D<=50})(p)&&e()),onStart:t,onMove:p=>{const D=m(p)/o.innerWidth;u(D)},onEnd:p=>{const O=m(p),D=o.innerWidth,h=O/D,C=(p=>a?-p.velocityX:p.velocityX)(p),P=C>=0&&(C>.2||O>D/2),A=(P?1-h:h)*D;let x=0;if(A>5){const b=A/Math.abs(C);x=Math.min(b,540)}c(P,h<=0?.01:(0,g.j)(0,h,.9999),x)}})}},2935:(y,E,r)=>{r.d(E,{w:()=>g});const g=(i,n,s)=>{if(typeof MutationObserver>"u")return;const e=new MutationObserver(t=>{s(d(t,n))});return e.observe(i,{childList:!0,subtree:!0}),e},d=(i,n)=>{let s;return i.forEach(e=>{for(let t=0;t<e.addedNodes.length;t++)s=l(e.addedNodes[t],n)||s}),s},l=(i,n)=>{if(1!==i.nodeType)return;const s=i;return(s.tagName===n.toUpperCase()?[s]:Array.from(s.querySelectorAll(n))).find(t=>t.value===s.value)}},856:(y,E,r)=>{r.d(E,{m:()=>u});var g=r(467),d=r(5558),l=r(6354),i=r(2784),s=(r(3011),r(4438)),e=r(1182),t=r(3510);let u=(()=>{var c;class o{constructor(_,m){this.afAuth=_,this.afs=m,this.currentUser=null,this.afAuth.onAuthStateChanged(v=>{this.currentUser=v?{uid:v.uid,email:v.email}:null})}signup({email:_,password:m}){var v=this;return(0,g.A)(function*(){const M=yield v.afAuth.createUserWithEmailAndPassword(_,m);if(M.user){const f=M.user.uid;return v.afs.doc(`users/${f}`).set({uid:f,email:M.user.email})}throw new Error("User creation failed")})()}signIn({email:_,password:m}){return this.afAuth.signInWithEmailAndPassword(_,m)}signOut(){return this.afAuth.signOut()}addChatMessage(_){if(this.currentUser&&this.currentUser.uid)return this.afs.collection("messages").add({msg:_,from:this.currentUser.uid,createdAt:(0,i.O5)()});throw new Error("No user is currently signed in")}getChatMessages(){let _=[];return this.getUsers().pipe((0,d.n)(m=>(_=m,this.afs.collection("messages",v=>v.orderBy("createdAt")).valueChanges({idField:"id"}))),(0,l.T)(m=>{for(let v of m)v.fromName=this.getUserForMsg(v.from,_),this.currentUser&&this.currentUser.uid&&(v.myMsg=this.currentUser.uid===v.from);return m}))}getUsers(){return this.afs.collection("users").valueChanges({idField:"uid"})}getUserForMsg(_,m){for(let v of m)if(v.uid==_)return v.email?v.email:"Deleted";return"Deleted"}}return(c=o).\u0275fac=function(_){return new(_||c)(s.KVO(e.DS),s.KVO(t.Qe))},c.\u0275prov=s.jDH({token:c,factory:c.\u0275fac,providedIn:"root"}),o})()}}]);