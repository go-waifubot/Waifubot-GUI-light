var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function l(t,e,n){t.$$.on_destroy.push(i(e,n))}function a(t,e,n,o){if(t){const r=u(t,e,n,o);return t[0](r)}}function u(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function f(t,e,n,o,r,s,c){const i=function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(e,o,r,s);if(i){const r=u(e,n,o,c);t.p(r,i)}}function p(t,e){t.appendChild(e)}function d(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function m(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function $(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function g(){return v(" ")}function y(){return v("")}function w(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function k(t,e){t.value=null==e?"":e}function C(t,e,n){t.classList[n?"add":"remove"](e)}let _;function j(t){_=t}function E(){if(!_)throw new Error("Function called outside component initialization");return _}function q(){const t=E();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);o.slice().forEach((e=>{e.call(t,r)}))}}}function S(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t(e)))}const D=[],I=[],O=[],N=[],M=Promise.resolve();let A=!1;function L(){A||(A=!0,M.then(G))}function P(){return L(),M}function T(t){O.push(t)}function U(t){N.push(t)}let R=!1;const W=new Set;function G(){if(!R){R=!0;do{for(let t=0;t<D.length;t+=1){const e=D[t];j(e),F(e.$$)}for(j(null),D.length=0;I.length;)I.pop()();for(let t=0;t<O.length;t+=1){const e=O[t];W.has(e)||(W.add(e),e())}O.length=0}while(D.length);for(;N.length;)N.pop()();A=!1,R=!1,W.clear()}}function F(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const Y=new Set;let B;function V(){B={r:0,c:[],p:B}}function X(){B.r||r(B.c),B=B.p}function H(t,e){t&&t.i&&(Y.delete(t),t.i(e))}function z(t,e,n,o){if(t&&t.o){if(Y.has(t))return;Y.add(t),B.c.push((()=>{Y.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function J(t,e){const n=e.token={};function o(t,o,r,s){if(e.token!==n)return;e.resolved=s;let c=e.ctx;void 0!==r&&(c=c.slice(),c[r]=s);const i=t&&(e.current=t)(c);let l=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==o&&t&&(V(),z(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),X())})):e.block.d(1),i.c(),H(i,1),i.m(e.mount(),e.anchor),l=!0),e.block=i,e.blocks&&(e.blocks[o]=i),l&&G()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const n=E();if(t.then((t=>{j(n),o(e.then,1,e.value,t),j(null)}),(t=>{if(j(n),o(e.catch,2,e.error,t),j(null),!e.hasCatch)throw t})),e.current!==e.pending)return o(e.pending,0),!0}else{if(e.current!==e.then)return o(e.then,1,e.value,t),!0;e.resolved=t}var r}function K(t,e){const n={},o={},r={$$scope:1};let s=t.length;for(;s--;){const c=t[s],i=e[s];if(i){for(const t in c)t in i||(o[t]=1);for(const t in i)r[t]||(n[t]=i[t],r[t]=1);t[s]=i}else for(const t in c)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function Q(t){return"object"==typeof t&&null!==t?t:{}}function Z(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}function tt(t){t&&t.c()}function et(t,e,o,c){const{fragment:i,on_mount:l,on_destroy:a,after_update:u}=t.$$;i&&i.m(e,o),c||T((()=>{const e=l.map(n).filter(s);a?a.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(T)}function nt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ot(e,n,s,c,i,l,a=[-1]){const u=_;j(e);const f=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:o(),dirty:a,skip_bound:!1};let p=!1;if(f.ctx=s?s(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&i(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),p&&function(t,e){-1===t.$$.dirty[0]&&(D.push(t),L(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],f.update(),p=!0,r(f.before_update),f.fragment=!!c&&c(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(h)}else f.fragment&&f.fragment.c();n.intro&&H(e.$$.fragment),et(e,n.target,n.anchor,n.customElement),G()}j(u)}class rt{$destroy(){nt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const st=[];function ct(t,e){return{subscribe:it(t,e).subscribe}}function it(e,n=t){let o;const r=[];function s(t){if(c(e,t)&&(e=t,o)){const t=!st.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),st.push(n,e)}if(t){for(let t=0;t<st.length;t+=2)st[t][0](st[t+1]);st.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,i=t){const l=[c,i];return r.push(l),1===r.length&&(o=n(s)||t),c(e),()=>{const t=r.indexOf(l);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}function lt(e,n,o){const c=!Array.isArray(e),l=c?[e]:e,a=n.length<2;return ct(o,(e=>{let o=!1;const u=[];let f=0,p=t;const d=()=>{if(f)return;p();const o=n(c?u[0]:u,e);a?e(o):p=s(o)?o:t},h=l.map(((t,e)=>i(t,(t=>{u[e]=t,f&=~(1<<e),o&&d()}),(()=>{f|=1<<e}))));return o=!0,d(),function(){r(h),p()}}))}function at(t){let n,o,r;const s=[t[2]];var c=t[0];function i(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return c&&(n=new c(i()),n.$on("routeEvent",t[7])),{c(){n&&tt(n.$$.fragment),o=y()},m(t,e){n&&et(n,t,e),d(t,o,e),r=!0},p(t,e){const r=4&e?K(s,[Q(t[2])]):{};if(c!==(c=t[0])){if(n){V();const t=n;z(t.$$.fragment,1,0,(()=>{nt(t,1)})),X()}c?(n=new c(i()),n.$on("routeEvent",t[7]),tt(n.$$.fragment),H(n.$$.fragment,1),et(n,o.parentNode,o)):n=null}else c&&n.$set(r)},i(t){r||(n&&H(n.$$.fragment,t),r=!0)},o(t){n&&z(n.$$.fragment,t),r=!1},d(t){t&&h(o),n&&nt(n,t)}}}function ut(t){let n,o,r;const s=[{params:t[1]},t[2]];var c=t[0];function i(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return c&&(n=new c(i()),n.$on("routeEvent",t[6])),{c(){n&&tt(n.$$.fragment),o=y()},m(t,e){n&&et(n,t,e),d(t,o,e),r=!0},p(t,e){const r=6&e?K(s,[2&e&&{params:t[1]},4&e&&Q(t[2])]):{};if(c!==(c=t[0])){if(n){V();const t=n;z(t.$$.fragment,1,0,(()=>{nt(t,1)})),X()}c?(n=new c(i()),n.$on("routeEvent",t[6]),tt(n.$$.fragment),H(n.$$.fragment,1),et(n,o.parentNode,o)):n=null}else c&&n.$set(r)},i(t){r||(n&&H(n.$$.fragment,t),r=!0)},o(t){n&&z(n.$$.fragment,t),r=!1},d(t){t&&h(o),n&&nt(n,t)}}}function ft(t){let e,n,o,r;const s=[ut,at],c=[];function i(t,e){return t[1]?0:1}return e=i(t),n=c[e]=s[e](t),{c(){n.c(),o=y()},m(t,n){c[e].m(t,n),d(t,o,n),r=!0},p(t,[r]){let l=e;e=i(t),e===l?c[e].p(t,r):(V(),z(c[l],1,1,(()=>{c[l]=null})),X(),n=c[e],n?n.p(t,r):(n=c[e]=s[e](t),n.c()),H(n,1),n.m(o.parentNode,o))},i(t){r||(H(n),r=!0)},o(t){z(n),r=!1},d(t){c[e].d(t),t&&h(o)}}}function pt(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let o="";return n>-1&&(o=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:o}}const dt=ct(null,(function(t){t(pt());const e=()=>{t(pt())};return window.addEventListener("hashchange",e,!1),function(){window.removeEventListener("hashchange",e,!1)}}));function ht(t,e,n){let{routes:o={}}=e,{prefix:r=""}=e,{restoreScrollState:s=!1}=e;class c{constructor(t,e){if(!e||"function"!=typeof e&&("object"!=typeof e||!0!==e._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:n,keys:o}=function(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,o,r,s,c=[],i="",l=t.split("/");for(l[0]||l.shift();r=l.shift();)"*"===(n=r[0])?(c.push("wild"),i+="/(.*)"):":"===n?(o=r.indexOf("?",1),s=r.indexOf(".",1),c.push(r.substring(1,~o?o:~s?s:r.length)),i+=~o&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(i+=(~o?"?":"")+"\\"+r.substring(s))):i+="/"+r;return{keys:c,pattern:new RegExp("^"+i+(e?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,"object"==typeof e&&!0===e._sveltesparouter?(this.component=e.component,this.conditions=e.conditions||[],this.userData=e.userData,this.props=e.props||{}):(this.component=()=>Promise.resolve(e),this.conditions=[],this.props={}),this._pattern=n,this._keys=o}match(t){if(r)if("string"==typeof r){if(!t.startsWith(r))return null;t=t.substr(r.length)||"/"}else if(r instanceof RegExp){const e=t.match(r);if(!e||!e[0])return null;t=t.substr(e[0].length)||"/"}const e=this._pattern.exec(t);if(null===e)return null;if(!1===this._keys)return e;const n={};let o=0;for(;o<this._keys.length;){try{n[this._keys[o]]=decodeURIComponent(e[o+1]||"")||null}catch(t){n[this._keys[o]]=null}o++}return n}async checkConditions(t){for(let e=0;e<this.conditions.length;e++)if(!await this.conditions[e](t))return!1;return!0}}const i=[];o instanceof Map?o.forEach(((t,e)=>{i.push(new c(e,t))})):Object.keys(o).forEach((t=>{i.push(new c(t,o[t]))}));let l=null,a=null,u={};const f=q();async function p(t,e){await P(),f(t,e)}let d=null;var h;s&&(window.addEventListener("popstate",(t=>{d=t.state&&t.state.scrollY?t.state:null})),h=()=>{d?window.scrollTo(d.scrollX,d.scrollY):window.scrollTo(0,0)},E().$$.after_update.push(h));let m=null,$=null;return dt.subscribe((async t=>{m=t;let e=0;for(;e<i.length;){const o=i[e].match(t.location);if(!o){e++;continue}const r={route:i[e].path,location:t.location,querystring:t.querystring,userData:i[e].userData};if(!await i[e].checkConditions(r))return n(0,l=null),$=null,void p("conditionsFailed",r);p("routeLoading",Object.assign({},r));const s=i[e].component;if($!=s){s.loading?(n(0,l=s.loading),$=s,n(1,a=s.loadingParams),n(2,u={}),p("routeLoaded",Object.assign({},r,{component:l,name:l.name}))):(n(0,l=null),$=null);const e=await s();if(t!=m)return;n(0,l=e&&e.default||e),$=s}return o&&"object"==typeof o&&Object.keys(o).length?n(1,a=o):n(1,a=null),n(2,u=i[e].props),void p("routeLoaded",Object.assign({},r,{component:l,name:l.name}))}n(0,l=null),$=null})),t.$$set=t=>{"routes"in t&&n(3,o=t.routes),"prefix"in t&&n(4,r=t.prefix),"restoreScrollState"in t&&n(5,s=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=s?"manual":"auto")},[l,a,u,o,r,s,function(e){S(t,e)},function(e){S(t,e)}]}lt(dt,(t=>t.location)),lt(dt,(t=>t.querystring));class mt extends rt{constructor(t){super(),ot(this,t,ht,ft,c,{routes:3,prefix:4,restoreScrollState:5})}}function $t(e){let n,o,s,c,i,l,a,u,f,m,v,y,x,C;return{c(){n=$("main"),o=$("div"),s=$("h1"),s.textContent="Welcome to WaifuGUI",c=g(),i=$("img"),a=g(),u=$("span"),u.textContent="Enter a discord user ID to view the user's list",f=g(),m=$("input"),v=g(),y=$("button"),y.textContent="Search",b(s,"class","svelte-n04uj0"),i.src!==(l="./favicon.png")&&b(i,"src","./favicon.png"),b(i,"alt","icon"),b(u,"class","svelte-n04uj0"),b(m,"type","text"),b(m,"placeholder","206794847581896705"),b(m,"class","svelte-n04uj0"),b(y,"class","svelte-n04uj0"),b(o,"class","content svelte-n04uj0"),b(n,"class","svelte-n04uj0")},m(t,r){d(t,n,r),p(n,o),p(o,s),p(o,c),p(o,i),p(o,a),p(o,u),p(o,f),p(o,m),k(m,e[0]),p(o,v),p(o,y),x||(C=[w(m,"input",e[1]),w(y,"click",e[2])],x=!0)},p(t,[e]){1&e&&m.value!==t[0]&&k(m,t[0])},i:t,o:t,d(t){t&&h(n),x=!1,r(C)}}}function vt(t,e,n){let o;return n(0,o=""),[o,function(){o=this.value,n(0,o)},()=>{if(o.length<15)return console.log(o.length),void alert("invalid user ID");!async function(t){if(!t||t.length<1||"/"!=t.charAt(0)&&0!==t.indexOf("#/"))throw Error("Invalid parameter location");await P(),history.replaceState({scrollX:window.scrollX,scrollY:window.scrollY},void 0,void 0),window.location.hash=("#"==t.charAt(0)?"":"#")+t}("/list/"+o)}]}class gt extends rt{constructor(t){super(),ot(this,t,vt,$t,c,{})}}class yt{async pullInventory(t){const e=await fetch("https://waifuapi.kar.moe/user/"+t);try{const t=await e.json();return this.favorite=t.favorite,this.id=t.id,this.quote=t.quote,this.waifus=t.waifus,this.waifus}catch(t){alert(t),async function(){await P(),window.history.back()}()}}}const wt=it(new yt);function bt(t){let e,n;const o=t[2].default,r=a(o,t,t[1],null);return{c(){e=$("div"),r&&r.c(),b(e,"class","svelte-1a0a2md"),C(e,"border",t[0])},m(t,o){d(t,e,o),r&&r.m(e,null),n=!0},p(t,[s]){r&&r.p&&(!n||2&s)&&f(r,o,t,t[1],s,null,null),1&s&&C(e,"border",t[0])},i(t){n||(H(r,t),n=!0)},o(t){z(r,t),n=!1},d(t){t&&h(e),r&&r.d(t)}}}function xt(t,e,n){let{$$slots:o={},$$scope:r}=e,{compare:s}=e;return t.$$set=t=>{"compare"in t&&n(0,s=t.compare),"$$scope"in t&&n(1,r=t.$$scope)},[s,r,o]}class kt extends rt{constructor(t){super(),ot(this,t,xt,bt,c,{compare:0})}}function Ct(e){let n,o,s,c,i,l,a,u,f,m,y,x;return{c(){n=$("div"),o=$("label"),o.textContent="User",s=g(),c=$("input"),i=g(),l=$("button"),l.textContent="Search",a=g(),u=$("button"),f=v("x"),b(o,"for","user"),b(o,"class","svelte-1mop1vp"),b(c,"type","text"),b(c,"placeholder","206794847581896705"),b(c,"class","svelte-1mop1vp"),b(l,"class","svelte-1mop1vp"),u.disabled=m=void 0!==e[1],b(u,"class","svelte-1mop1vp"),b(n,"class","container svelte-1mop1vp")},m(t,r){d(t,n,r),p(n,o),p(n,s),p(n,c),k(c,e[1]),p(n,i),p(n,l),p(n,a),p(n,u),p(u,f),y||(x=[w(c,"input",e[3]),w(l,"click",e[4]),w(u,"click",e[5])],y=!0)},p(t,[e]){2&e&&c.value!==t[1]&&k(c,t[1]),2&e&&m!==(m=void 0!==t[1])&&(u.disabled=m)},i:t,o:t,d(t){t&&h(n),y=!1,r(x)}}}function _t(t,e,n){let o;var r=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(r,s){function c(t){try{l(o.next(t))}catch(t){s(t)}}function i(t){try{l(o.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,i)}l((o=o.apply(t,e||[])).next())}))};let{CompareChars:s=[]}=e;function c(t){return r(this,void 0,void 0,(function*(){let e=new yt;n(0,s=yield e.pullInventory(t))}))}return t.$$set=t=>{"CompareChars"in t&&n(0,s=t.CompareChars)},n(1,o=""),[s,o,c,function(){o=this.value,n(1,o)},()=>c(o),()=>{n(0,s=[]),n(1,o="")}]}class jt extends rt{constructor(t){super(),ot(this,t,_t,Ct,c,{CompareChars:0})}}function Et(t){let e,n;const o=t[2].default,r=a(o,t,t[1],null);return{c(){e=$("div"),r&&r.c(),b(e,"class","container svelte-10c4ovn")},m(t,o){d(t,e,o),r&&r.m(e,null),n=!0},p(t,e){r&&r.p&&(!n||2&e)&&f(r,o,t,t[1],e,null,null)},i(t){n||(H(r,t),n=!0)},o(t){z(r,t),n=!1},d(t){t&&h(e),r&&r.d(t)}}}function qt(t){let e,n,o=t[0]&&Et(t);return{c(){o&&o.c(),e=y()},m(t,r){o&&o.m(t,r),d(t,e,r),n=!0},p(t,[n]){t[0]?o?(o.p(t,n),1&n&&H(o,1)):(o=Et(t),o.c(),H(o,1),o.m(e.parentNode,e)):o&&(V(),z(o,1,1,(()=>{o=null})),X())},i(t){n||(H(o),n=!0)},o(t){z(o),n=!1},d(t){o&&o.d(t),t&&h(e)}}}function St(t,e,n){let{$$slots:o={},$$scope:r}=e,{showDropDown:s=!1}=e;return t.$$set=t=>{"showDropDown"in t&&n(0,s=t.showDropDown),"$$scope"in t&&n(1,r=t.$$scope)},t.$$.update=()=>{t.$$.dirty},[s,r,o]}class Dt extends rt{constructor(t){super(),ot(this,t,St,qt,c,{showDropDown:0})}}function It(e){let n,o,r,s,c,i;return{c(){n=$("div"),o=$("label"),o.textContent="Name",r=g(),s=$("input"),b(o,"for","name"),b(o,"class","svelte-k82xnc"),b(s,"type","text"),b(s,"placeholder","name to search..."),b(s,"class","svelte-k82xnc"),b(n,"class","container svelte-k82xnc")},m(t,l){d(t,n,l),p(n,o),p(n,r),p(n,s),k(s,e[0]),c||(i=w(s,"input",e[2]),c=!0)},p(t,[e]){1&e&&s.value!==t[0]&&k(s,t[0])},i:t,o:t,d(t){t&&h(n),c=!1,i()}}}function Ot(t,e,n){let o,{filter:r}=e;return t.$$set=t=>{"filter"in t&&n(1,r=t.filter)},t.$$.update=()=>{1&t.$$.dirty&&n(1,r=t=>{if(o.length<3)return!0;let e=new RegExp(o,"i");return Object.values(t).filter((t=>null!=e.exec(t.toString()))).length>0})},n(0,o=""),[o,r,function(){o=this.value,n(0,o)}]}class Nt extends rt{constructor(t){super(),ot(this,t,Ot,It,c,{filter:1})}}async function Mt(t,e=1){const n=await fetch("https://graphql.anilist.co",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"query ($term: String, $page: Int) {\n  Media(search: $term) {\n    title {\n      romaji\n    }\n    characters(sort: FAVOURITES_DESC, perPage: 50, page: $page) {\n      pageInfo {\n        hasNextPage\n        lastPage\n      }\n      nodes {\n        id\n        name {\n          full\n        }\n        image {\n          large\n        }\n      }\n    }\n  }\n}",variables:{term:t,page:e}})});if(200==n.status){const o=await n.json();if(o.data.Media.characters.pageInfo.hasNextPage){const n=await Mt(t,e+1);o.data.Media.characters.nodes.push(...n.data.Media.characters.nodes)}return o}console.error(n.statusText)}function At(e){let n,o,s,c,i,l,a,u,f,m,y,x;return{c(){n=$("div"),o=$("label"),o.textContent="Media",s=g(),c=$("input"),i=g(),l=$("button"),l.textContent="Search",a=g(),u=$("button"),f=v("x"),b(o,"for","media"),b(o,"class","svelte-1gdj9sj"),b(c,"type","text"),b(c,"placeholder","media to search..."),b(c,"class","svelte-1gdj9sj"),b(l,"class","svelte-1gdj9sj"),u.disabled=m=void 0!==e[1],b(u,"class","svelte-1gdj9sj"),b(n,"class","container svelte-1gdj9sj")},m(t,r){d(t,n,r),p(n,o),p(n,s),p(n,c),k(c,e[0]),p(n,i),p(n,l),p(n,a),p(n,u),p(u,f),y||(x=[w(c,"input",e[5]),w(c,"keyup",e[6]),w(l,"click",e[7]),w(u,"click",e[8])],y=!0)},p(t,[e]){1&e&&c.value!==t[0]&&k(c,t[0]),2&e&&m!==(m=void 0!==t[1])&&(u.disabled=m)},i:t,o:t,d(t){t&&h(n),y=!1,r(x)}}}function Lt(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(r,s){function c(t){try{l(o.next(t))}catch(t){s(t)}}function i(t){try{l(o.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,i)}l((o=o.apply(t,e||[])).next())}))};let r,{media_chars:s}=e,{search_text:c=""}=e,{filter:i}=e;function l(t){return o(this,void 0,void 0,(function*(){c.length<2||n(1,r=yield Mt(t))}))}return t.$$set=t=>{"media_chars"in t&&n(3,s=t.media_chars),"search_text"in t&&n(0,c=t.search_text),"filter"in t&&n(4,i=t.filter)},t.$$.update=()=>{3&t.$$.dirty&&n(1,r=""!=c?r:null),3&t.$$.dirty&&n(3,s=""!=c&&r?r.data.Media.characters.nodes:[]),2&t.$$.dirty&&n(4,i=t=>!r||null!=r.data.Media.characters.nodes.find((e=>e.id==t.id)))},[c,r,l,s,i,function(){c=this.value,n(0,c)},t=>{"Enter"==t.key&&l(c)},()=>l(c),()=>{n(1,r=null),n(0,c="")}]}class Pt extends rt{constructor(t){super(),ot(this,t,Lt,At,c,{media_chars:3,search_text:0,filter:4})}}function Tt(t,e,n){const o=t.slice();return o[5]=e[n],o}function Ut(t){let e,n,o=t[1],r=[];for(let e=0;e<o.length;e+=1)r[e]=Ft(Tt(t,o,e));const s=t=>z(r[t],1,1,(()=>{r[t]=null}));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=y()},m(t,o){for(let e=0;e<r.length;e+=1)r[e].m(t,o);d(t,e,o),n=!0},p(t,n){if(3&n){let c;for(o=t[1],c=0;c<o.length;c+=1){const s=Tt(t,o,c);r[c]?(r[c].p(s,n),H(r[c],1)):(r[c]=Ft(s),r[c].c(),H(r[c],1),r[c].m(e.parentNode,e))}for(V(),c=o.length;c<r.length;c+=1)s(c);X()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)H(r[t]);n=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)z(r[t]);n=!1},d(t){m(r,t),t&&h(e)}}}function Rt(e){let n,o,r,s,c,i;return{c(){n=$("div"),o=$("div"),r=g(),s=$("img"),b(o,"class","img-overlay svelte-foh3lq"),s.src!==(c=e[5].image.large)&&b(s,"src",c),b(s,"alt",i=e[5].name.full),b(s,"class","svelte-foh3lq"),b(n,"class","overlay-wrapper svelte-foh3lq")},m(t,e){d(t,n,e),p(n,o),p(n,r),p(n,s)},p(t,e){2&e&&s.src!==(c=t[5].image.large)&&b(s,"src",c),2&e&&i!==(i=t[5].name.full)&&b(s,"alt",i)},i:t,o:t,d(t){t&&h(n)}}}function Wt(t){let e,n;function o(...e){return t[4](t[5],...e)}return e=new kt({props:{compare:t[0].some(o),$$slots:{default:[Gt]},$$scope:{ctx:t}}}),{c(){tt(e.$$.fragment)},m(t,o){et(e,t,o),n=!0},p(n,r){t=n;const s={};3&r&&(s.compare=t[0].some(o)),258&r&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(H(e.$$.fragment,t),n=!0)},o(t){z(e.$$.fragment,t),n=!1},d(t){nt(e,t)}}}function Gt(t){let e,n,o,r,s,c;return{c(){e=$("div"),n=$("div"),o=g(),r=$("img"),b(n,"class","img-overlay svelte-foh3lq"),r.src!==(s=t[5].image.large)&&b(r,"src",s),b(r,"alt",c=t[5].name.full),b(r,"class","svelte-foh3lq"),b(e,"class","overlay-wrapper svelte-foh3lq")},m(t,s){d(t,e,s),p(e,n),p(e,o),p(e,r)},p(t,e){2&e&&r.src!==(s=t[5].image.large)&&b(r,"src",s),2&e&&c!==(c=t[5].name.full)&&b(r,"alt",c)},d(t){t&&h(e)}}}function Ft(t){let e,n,o,r,s,c,i,l,a,u,f,m,y,w=t[5].name.full+"",k=t[5].id+"";const C=[Wt,Rt],_=[];function j(t,e){return t[0]?0:1}return u=j(t),f=_[u]=C[u](t),{c(){e=$("div"),n=$("a"),o=$("h4"),r=v(w),c=g(),i=$("p"),l=v(k),a=g(),f.c(),m=g(),b(o,"class","svelte-foh3lq"),b(n,"href",s="https://anilist.co/character/"+t[5].id),b(n,"title","view on anilist"),b(n,"class","svelte-foh3lq"),b(i,"class","svelte-foh3lq"),b(e,"class","waifu-card svelte-foh3lq")},m(t,s){d(t,e,s),p(e,n),p(n,o),p(o,r),p(e,c),p(e,i),p(i,l),p(e,a),_[u].m(e,null),p(e,m),y=!0},p(t,o){(!y||2&o)&&w!==(w=t[5].name.full+"")&&x(r,w),(!y||2&o&&s!==(s="https://anilist.co/character/"+t[5].id))&&b(n,"href",s),(!y||2&o)&&k!==(k=t[5].id+"")&&x(l,k);let c=u;u=j(t),u===c?_[u].p(t,o):(V(),z(_[c],1,1,(()=>{_[c]=null})),X(),f=_[u],f?f.p(t,o):(f=_[u]=C[u](t),f.c()),H(f,1),f.m(e,m))},i(t){y||(H(f),y=!0)},o(t){z(f),y=!1},d(t){t&&h(e),_[u].d()}}}function Yt(t){let e,n,o=t[1]&&Ut(t);return{c(){o&&o.c(),e=y()},m(t,r){o&&o.m(t,r),d(t,e,r),n=!0},p(t,[n]){t[1]?o?(o.p(t,n),2&n&&H(o,1)):(o=Ut(t),o.c(),H(o,1),o.m(e.parentNode,e)):o&&(V(),z(o,1,1,(()=>{o=null})),X())},i(t){n||(H(o),n=!0)},o(t){z(o),n=!1},d(t){o&&o.d(t),t&&h(e)}}}function Bt(t,e,n){let o;l(t,wt,(t=>n(3,o=t)));let{missing:r=[]}=e,s=[],{CompareChars:c=[]}=e;return t.$$set=t=>{"missing"in t&&n(2,r=t.missing),"CompareChars"in t&&n(0,c=t.CompareChars)},t.$$.update=()=>{12&t.$$.dirty&&n(1,s=r.filter((t=>!o.waifus.some((e=>e.id==t.id)))))},[c,s,r,o,(t,e)=>e.id===t.id]}class Vt extends rt{constructor(t){super(),ot(this,t,Bt,Yt,c,{missing:2,CompareChars:0})}}function Xt(t){let e,n,o,r,s,c,i,l,a,u=t[0].id+"",f=t[0].quote+"",m=t[0].favorite&&Ht(t);return{c(){e=$("div"),n=$("h3"),o=v("User "),r=v(u),s=g(),m&&m.c(),c=g(),i=$("div"),l=$("p"),a=v(f),b(n,"class","svelte-jrifvk"),b(l,"class","svelte-jrifvk"),b(i,"class","description svelte-jrifvk"),b(e,"class","content svelte-jrifvk")},m(t,u){d(t,e,u),p(e,n),p(n,o),p(n,r),p(e,s),m&&m.m(e,null),p(e,c),p(e,i),p(i,l),p(l,a)},p(t,n){1&n&&u!==(u=t[0].id+"")&&x(r,u),t[0].favorite?m?m.p(t,n):(m=Ht(t),m.c(),m.m(e,c)):m&&(m.d(1),m=null),1&n&&f!==(f=t[0].quote+"")&&x(a,f)},d(t){t&&h(e),m&&m.d()}}}function Ht(t){let e,n,o,r,s,c,i,l,a,u,f,m,y,w,k=t[0].favorite.name+"",C=t[0].favorite.id+"";return{c(){e=$("h4"),e.textContent="Favorite Character",n=g(),o=$("div"),r=$("a"),s=$("h5"),c=v(k),l=g(),a=$("p"),u=v(C),f=g(),m=$("img"),b(e,"class","svelte-jrifvk"),b(s,"class","svelte-jrifvk"),b(r,"href",i="https://anilist.co/character/"+t[0].favorite.id),b(r,"title","view on anilist"),b(r,"class","svelte-jrifvk"),b(a,"class","svelte-jrifvk"),m.src!==(y=t[0].favorite.image)&&b(m,"src",y),b(m,"alt",w=t[0].favorite.name),b(m,"class","svelte-jrifvk"),b(o,"class","waifu-card svelte-jrifvk")},m(t,i){d(t,e,i),d(t,n,i),d(t,o,i),p(o,r),p(r,s),p(s,c),p(o,l),p(o,a),p(a,u),p(o,f),p(o,m)},p(t,e){1&e&&k!==(k=t[0].favorite.name+"")&&x(c,k),1&e&&i!==(i="https://anilist.co/character/"+t[0].favorite.id)&&b(r,"href",i),1&e&&C!==(C=t[0].favorite.id+"")&&x(u,C),1&e&&m.src!==(y=t[0].favorite.image)&&b(m,"src",y),1&e&&w!==(w=t[0].favorite.name)&&b(m,"alt",w)},d(t){t&&h(e),t&&h(n),t&&h(o)}}}function zt(e){let n,o=e[0]&&Xt(e);return{c(){o&&o.c(),n=y()},m(t,e){o&&o.m(t,e),d(t,n,e)},p(t,[e]){t[0]?o?o.p(t,e):(o=Xt(t),o.c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null)},i:t,o:t,d(t){o&&o.d(t),t&&h(n)}}}function Jt(t,e,n){let o;return l(t,wt,(t=>n(0,o=t))),[o]}class Kt extends rt{constructor(t){super(),ot(this,t,Jt,zt,c,{})}}function Qt(t,e,n){const o=t.slice();return o[20]=e[n],o}function Zt(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function te(t){let e,n,o,r,s,c,i,l,a,u,f,v,y,x,k,C,_,j,E,q,S,D,O,N,M,A,L,P,T,R,W,G,F,Y,B,J,K,Q;function ot(e){t[12](e)}i=new Dt({props:{showDropDown:t[1],$$slots:{default:[ee]},$$scope:{ctx:t}}});let rt={};function st(e){t[13](e)}void 0!==t[2][0]&&(rt.filter=t[2][0]),x=new Nt({props:rt}),I.push((()=>Z(x,"filter",ot)));let ct={};function it(e){t[14](e)}function lt(e){t[15](e)}void 0!==t[4]&&(ct.CompareChars=t[4]),j=new jt({props:ct}),I.push((()=>Z(j,"CompareChars",st)));let at={};void 0!==t[2][1]&&(at.filter=t[2][1]),void 0!==t[3]&&(at.media_chars=t[3]),D=new Pt({props:at}),I.push((()=>Z(D,"filter",it))),I.push((()=>Z(D,"media_chars",lt))),T=new Kt({});let ut=t[19].filter(t[16]).splice(0,200),ft=[];for(let e=0;e<ut.length;e+=1)ft[e]=se(Qt(t,ut,e));const pt=t=>z(ft[t],1,1,(()=>{ft[t]=null}));function dt(e){t[18](e)}let ht={missing:t[3]};return void 0!==t[4]&&(ht.CompareChars=t[4]),G=new Vt({props:ht}),I.push((()=>Z(G,"CompareChars",dt))),{c(){e=$("div"),n=$("div"),o=$("a"),o.innerHTML='<img src="/favicon.png" alt="icon" class="svelte-2ohm2l"/>',r=g(),s=$("button"),s.textContent="v",c=g(),tt(i.$$.fragment),l=g(),a=$("div"),u=$("div"),f=$("a"),f.innerHTML='<img src="/favicon.png" alt="icon" class="svelte-2ohm2l"/>',v=g(),y=$("div"),tt(x.$$.fragment),C=g(),_=$("div"),tt(j.$$.fragment),q=g(),S=$("div"),tt(D.$$.fragment),M=g(),A=$("div"),L=$("div"),P=$("div"),tt(T.$$.fragment),R=g();for(let t=0;t<ft.length;t+=1)ft[t].c();W=g(),tt(G.$$.fragment),Y=g(),B=$("h4"),B.textContent="Search to list more...",b(o,"class","back-btn svelte-2ohm2l"),b(o,"href","/"),b(s,"class","svelte-2ohm2l"),b(n,"class","nav svelte-2ohm2l"),b(n,"id","nav"),b(e,"class","nav-container small svelte-2ohm2l"),b(f,"class","back-btn svelte-2ohm2l"),b(f,"href","/"),b(y,"class","search-prop"),b(_,"class","search-prop"),b(S,"class","search-prop"),b(u,"class","nav svelte-2ohm2l"),b(u,"id","nav"),b(a,"class","nav-container big svelte-2ohm2l"),b(P,"class","left svelte-2ohm2l"),b(P,"id","profile"),b(B,"class","search-more svelte-2ohm2l"),b(L,"class","container svelte-2ohm2l"),b(A,"class","container-wrapper")},m(h,m){d(h,e,m),p(e,n),p(n,o),p(n,r),p(n,s),p(n,c),et(i,n,null),d(h,l,m),d(h,a,m),p(a,u),p(u,f),p(u,v),p(u,y),et(x,y,null),p(u,C),p(u,_),et(j,_,null),p(u,q),p(u,S),et(D,S,null),d(h,M,m),d(h,A,m),p(A,L),p(L,P),et(T,P,null),p(L,R);for(let t=0;t<ft.length;t+=1)ft[t].m(L,null);p(L,W),et(G,L,null),p(L,Y),p(L,B),J=!0,K||(Q=w(s,"click",t[7]),K=!0)},p(t,e){const n={};2&e&&(n.showDropDown=t[1]),8388636&e&&(n.$$scope={dirty:e,ctx:t}),i.$set(n);const o={};!k&&4&e&&(k=!0,o.filter=t[2][0],U((()=>k=!1))),x.$set(o);const r={};!E&&16&e&&(E=!0,r.CompareChars=t[4],U((()=>E=!1))),j.$set(r);const s={};if(!O&&4&e&&(O=!0,s.filter=t[2][1],U((()=>O=!1))),!N&&8&e&&(N=!0,s.media_chars=t[3],U((()=>N=!1))),D.$set(s),113&e){let n;for(ut=t[19].filter(t[16]).splice(0,200),n=0;n<ut.length;n+=1){const o=Qt(t,ut,n);ft[n]?(ft[n].p(o,e),H(ft[n],1)):(ft[n]=se(o),ft[n].c(),H(ft[n],1),ft[n].m(L,W))}for(V(),n=ut.length;n<ft.length;n+=1)pt(n);X()}const c={};8&e&&(c.missing=t[3]),!F&&16&e&&(F=!0,c.CompareChars=t[4],U((()=>F=!1))),G.$set(c)},i(t){if(!J){H(i.$$.fragment,t),H(x.$$.fragment,t),H(j.$$.fragment,t),H(D.$$.fragment,t),H(T.$$.fragment,t);for(let t=0;t<ut.length;t+=1)H(ft[t]);H(G.$$.fragment,t),J=!0}},o(t){z(i.$$.fragment,t),z(x.$$.fragment,t),z(j.$$.fragment,t),z(D.$$.fragment,t),z(T.$$.fragment,t),ft=ft.filter(Boolean);for(let t=0;t<ft.length;t+=1)z(ft[t]);z(G.$$.fragment,t),J=!1},d(t){t&&h(e),nt(i),t&&h(l),t&&h(a),nt(x),nt(j),nt(D),t&&h(M),t&&h(A),nt(T),m(ft,t),nt(G),K=!1,Q()}}}function ee(t){let e,n,o,r,s,c,i,l,a,u,f,p,m;function v(e){t[8](e)}let y={};function w(e){t[9](e)}void 0!==t[2][0]&&(y.filter=t[2][0]),n=new Nt({props:y}),I.push((()=>Z(n,"filter",v)));let x={};function k(e){t[10](e)}function C(e){t[11](e)}void 0!==t[4]&&(x.CompareChars=t[4]),c=new jt({props:x}),I.push((()=>Z(c,"CompareChars",w)));let _={};return void 0!==t[2][1]&&(_.filter=t[2][1]),void 0!==t[3]&&(_.media_chars=t[3]),u=new Pt({props:_}),I.push((()=>Z(u,"filter",k))),I.push((()=>Z(u,"media_chars",C))),{c(){e=$("div"),tt(n.$$.fragment),r=g(),s=$("div"),tt(c.$$.fragment),l=g(),a=$("div"),tt(u.$$.fragment),b(e,"class","search-prop-small svelte-2ohm2l"),b(s,"class","search-prop-small svelte-2ohm2l"),b(a,"class","search-prop-small svelte-2ohm2l")},m(t,o){d(t,e,o),et(n,e,null),d(t,r,o),d(t,s,o),et(c,s,null),d(t,l,o),d(t,a,o),et(u,a,null),m=!0},p(t,e){const r={};!o&&4&e&&(o=!0,r.filter=t[2][0],U((()=>o=!1))),n.$set(r);const s={};!i&&16&e&&(i=!0,s.CompareChars=t[4],U((()=>i=!1))),c.$set(s);const l={};!f&&4&e&&(f=!0,l.filter=t[2][1],U((()=>f=!1))),!p&&8&e&&(p=!0,l.media_chars=t[3],U((()=>p=!1))),u.$set(l)},i(t){m||(H(n.$$.fragment,t),H(c.$$.fragment,t),H(u.$$.fragment,t),m=!0)},o(t){z(n.$$.fragment,t),z(c.$$.fragment,t),z(u.$$.fragment,t),m=!1},d(t){t&&h(e),nt(n),t&&h(r),t&&h(s),nt(c),t&&h(l),t&&h(a),nt(u)}}}function ne(e){let n,o,r;return{c(){n=$("img"),n.src!==(o=e[20].image)&&b(n,"src",o),b(n,"alt",r=e[20].name),b(n,"class","svelte-2ohm2l")},m(t,e){d(t,n,e)},p(t,e){97&e&&n.src!==(o=t[20].image)&&b(n,"src",o),97&e&&r!==(r=t[20].name)&&b(n,"alt",r)},i:t,o:t,d(t){t&&h(n)}}}function oe(t){let e,n;function o(...e){return t[17](t[20],...e)}return e=new kt({props:{compare:t[4].some(o),$$slots:{default:[re]},$$scope:{ctx:t}}}),{c(){tt(e.$$.fragment)},m(t,o){et(e,t,o),n=!0},p(n,r){t=n;const s={};113&r&&(s.compare=t[4].some(o)),8388705&r&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(H(e.$$.fragment,t),n=!0)},o(t){z(e.$$.fragment,t),n=!1},d(t){nt(e,t)}}}function re(t){let e,n,o;return{c(){e=$("img"),e.src!==(n=t[20].image)&&b(e,"src",n),b(e,"alt",o=t[20].name),b(e,"class","svelte-2ohm2l")},m(t,n){d(t,e,n)},p(t,r){97&r&&e.src!==(n=t[20].image)&&b(e,"src",n),97&r&&o!==(o=t[20].name)&&b(e,"alt",o)},d(t){t&&h(e)}}}function se(t){let e,n,o,r,s,c,i,l,a,u,f,m,y=t[20].name+"",w=t[20].id+"";const k=[oe,ne],C=[];function _(t,e){return void 0!==t[4]?0:1}return u=_(t),f=C[u]=k[u](t),{c(){e=$("div"),n=$("a"),o=$("h4"),r=v(y),c=g(),i=$("p"),l=v(w),a=g(),f.c(),b(o,"class","svelte-2ohm2l"),b(n,"href",s="https://anilist.co/character/"+t[20].id),b(n,"title","view on anilist"),b(n,"class","svelte-2ohm2l"),b(i,"class","svelte-2ohm2l"),b(e,"class","waifu-card svelte-2ohm2l")},m(t,s){d(t,e,s),p(e,n),p(n,o),p(o,r),p(e,c),p(e,i),p(i,l),p(e,a),C[u].m(e,null),m=!0},p(t,o){(!m||97&o)&&y!==(y=t[20].name+"")&&x(r,y),(!m||97&o&&s!==(s="https://anilist.co/character/"+t[20].id))&&b(n,"href",s),(!m||97&o)&&w!==(w=t[20].id+"")&&x(l,w);let c=u;u=_(t),u===c?C[u].p(t,o):(V(),z(C[c],1,1,(()=>{C[c]=null})),X(),f=C[u],f?f.p(t,o):(f=C[u]=k[u](t),f.c()),H(f,1),f.m(e,null))},i(t){m||(H(f),m=!0)},o(t){z(f),m=!1},d(t){t&&h(e),C[u].d()}}}function ce(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function ie(t){let e,n,o,r,s,c,i,l,a,u,f,m,v={ctx:t,current:null,token:null,hasCatch:!1,pending:ce,then:te,catch:Zt,value:19,blocks:[,,,]};return J(f=t[6].pullInventory(t[0].user),v),{c(){e=$("meta"),n=$("meta"),r=$("meta"),c=$("meta"),l=$("meta"),a=g(),u=$("main"),v.block.c(),b(e,"property","og:type"),b(e,"content","WaifuGUI"),b(n,"property","og:url"),b(n,"content",o="https://waifugui.kar.moe/#/list/"+t[0].user),b(r,"property","og:title"),b(r,"content",s=`WaifuGUI | Check out ${t[0].user}'s list`),b(c,"property","og:description"),b(c,"content",i=`View ${t[0].user}'s list online`),b(l,"property","og:image"),b(l,"content","https://waifugui.kar.moe/favicon.png"),b(u,"class","svelte-2ohm2l")},m(t,o){p(document.head,e),p(document.head,n),p(document.head,r),p(document.head,c),p(document.head,l),d(t,a,o),d(t,u,o),v.block.m(u,v.anchor=null),v.mount=()=>u,v.anchor=null,m=!0},p(e,[l]){t=e,(!m||1&l&&o!==(o="https://waifugui.kar.moe/#/list/"+t[0].user))&&b(n,"content",o),(!m||1&l&&s!==(s=`WaifuGUI | Check out ${t[0].user}'s list`))&&b(r,"content",s),(!m||1&l&&i!==(i=`View ${t[0].user}'s list online`))&&b(c,"content",i),v.ctx=t,65&l&&f!==(f=t[6].pullInventory(t[0].user))&&J(f,v)||function(t,e,n){const o=e.slice(),{resolved:r}=t;t.current===t.then&&(o[t.value]=r),t.current===t.catch&&(o[t.error]=r),t.block.p(o,n)}(v,t,l)},i(t){m||(H(v.block),m=!0)},o(t){for(let t=0;t<3;t+=1){z(v.blocks[t])}m=!1},d(t){h(e),h(n),h(r),h(c),h(l),t&&h(a),t&&h(u),v.block.d(),v.token=null,v=null}}}function le(t,e,n){let o,r,s;l(t,wt,(t=>n(6,s=t)));let c,{params:i}=e,a=[],u=!1;return t.$$set=t=>{"params"in t&&n(0,i=t.params)},t.$$.update=()=>{4&t.$$.dirty&&n(5,r=t=>o.map((e=>e(t))).every((t=>0!=t))),t.$$.dirty},n(2,o=[t=>!0,t=>!0]),[i,u,o,c,a,r,s,()=>n(1,u=!u),function(e){t.$$.not_equal(o[0],e)&&(o[0]=e,n(2,o))},function(t){a=t,n(4,a)},function(e){t.$$.not_equal(o[1],e)&&(o[1]=e,n(2,o))},function(t){c=t,n(3,c)},function(e){t.$$.not_equal(o[0],e)&&(o[0]=e,n(2,o))},function(t){a=t,n(4,a)},function(e){t.$$.not_equal(o[1],e)&&(o[1]=e,n(2,o))},function(t){c=t,n(3,c)},t=>r(t),(t,e)=>e.id===t.id,function(t){a=t,n(4,a)}]}class ae extends rt{constructor(t){super(),ot(this,t,le,ie,c,{params:0})}}function ue(e){let n,o,r,s;return r=new mt({props:{routes:e[0]}}),{c(){n=$("meta"),o=g(),tt(r.$$.fragment),b(n,"property","og:site_name"),b(n,"content","WaifuGUI")},m(t,e){p(document.head,n),d(t,o,e),et(r,t,e),s=!0},p:t,i(t){s||(H(r.$$.fragment,t),s=!0)},o(t){z(r.$$.fragment,t),s=!1},d(t){h(n),t&&h(o),nt(r,t)}}}function fe(t,e,n){return[{"/":gt,"/list/:user":ae}]}return new class extends rt{constructor(t){super(),ot(this,t,fe,ue,c,{routes:0})}get routes(){return this.$$.ctx[0]}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
