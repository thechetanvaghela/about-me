import{n as F,j as T,c as K,h as Y,p as y,k as A,_ as w,q as k,r as q,M as z,A as x}from"./q-BfBl-PNg.js";const G='((i,a,r,s)=>{r=e=>{const t=document.querySelector("[q\\\\:base]");t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;a?r(t):i.push(t)}),navigator.serviceWorker.register("/service-worker.js").then(e=>{s=()=>{a=e,i.forEach(r),r({bundles:i})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&s()}):e.active&&s()}).catch(e=>console.error(e))})([])',ge=y("qc-s"),ye=y("qc-c"),me=y("qc-ic"),J=y("qc-h"),X=y("qc-l"),Z=y("qc-n"),Ce=y("qc-a"),_e=y("qc-ir"),Ee=A(()=>w(()=>import("./q-D3WBTSLL.js"),[]),"s_DyVc0YBIqQU"),Se=()=>{},Ae=q(A(()=>w(()=>import("./q-B_DT3kvr.js"),[]),"s_e0ssiDXoeAM")),b=new WeakMap,_=new Map,N=new Set,$="qaction",we="qfunc",S=e=>e.pathname+e.search+e.hash,C=(e,t)=>new URL(e,t.href),p=(e,t)=>e.origin===t.origin,L=e=>e.endsWith("/")?e:e+"/",H=({pathname:e},{pathname:t})=>{const n=Math.abs(e.length-t.length);return n===0?e===t:n===1&&L(e)===L(t)},ee=(e,t)=>e.search===t.search,O=(e,t)=>ee(e,t)&&H(e,t),te=(e,t,n)=>{let s=t??"";return n&&(s+=(s?"&":"?")+$+"="+encodeURIComponent(n.id)),e+(e.endsWith("/")?"":"/")+"q-data.json"+s},De=(e,t)=>{const n=e.href;if(typeof n=="string"&&typeof e.target!="string"&&!e.reload)try{const s=C(n.trim(),t.url),r=C("",t.url);if(p(s,r))return S(s)}catch(s){console.error(s)}else if(e.reload)return S(C("",t.url));return null},ve=(e,t)=>{if(e){const n=C(e,t.url),s=C("",t.url);return!O(n,s)}return!1},Te=(e,t)=>{if(e){const n=C(e,t.url),s=C("",t.url);return!H(n,s)}return!1},ne=e=>e&&typeof e.then=="function",qe=(e,t,n,s)=>{const r=se(),o={head:r,withLocale:a=>k(s,a),resolveValue:a=>{const i=a.__id;if(a.__brand==="server_loader"&&!(i in e.loaders))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");const l=e.loaders[i];if(ne(l))throw new Error("Loaders returning a promise can not be resolved for the head function.");return l},...t};for(let a=n.length-1;a>=0;a--){const i=n[a]&&n[a].head;i&&(typeof i=="function"?I(r,k(s,()=>i(o))):typeof i=="object"&&I(r,i))}return o.head},I=(e,t)=>{typeof t.title=="string"&&(e.title=t.title),E(e.meta,t.meta),E(e.links,t.links),E(e.styles,t.styles),E(e.scripts,t.scripts),Object.assign(e.frontmatter,t.frontmatter)},E=(e,t)=>{if(Array.isArray(t))for(const n of t){if(typeof n.key=="string"){const s=e.findIndex(r=>r.key===n.key);if(s>-1){e[s]=n;continue}}e.push(n)}},se=()=>({title:"",meta:[],links:[],styles:[],scripts:[],frontmatter:{}});function re(e,t){const n=j(e),s=M(e),r=j(t),c=M(t);return Q(e,n,s,t,r,c)}function Q(e,t,n,s,r,c){let o=null;for(;t<n;){const a=e.charCodeAt(t++),i=s.charCodeAt(r++);if(a===91){const l=U(e,t),f=t+(l?3:0),d=v(e,f,n,93),u=e.substring(f,d),h=v(e,d+1,n,47),g=e.substring(d+1,h);t=d+1;const m=r-1;if(l){const R=oe(u,g,s,m,c,e,t+g.length+1,n);if(R)return Object.assign(o||(o={}),R)}const D=v(s,m,c,47,g);if(D==-1)return null;const P=s.substring(m,D);if(!l&&!g&&!P)return null;r=D,(o||(o={}))[u]=decodeURIComponent(P)}else if(a!==i&&!(isNaN(i)&&ce(e,t)))return null}return W(e,t)&&W(s,r)?o||{}:null}function ce(e,t){return e.charCodeAt(t)===91&&U(e,t+1)}function M(e){const t=e.length;return t>1&&e.charCodeAt(t-1)===47?t-1:t}function W(e,t){const n=e.length;return t>=n||t==n-1&&e.charCodeAt(t)===47}function j(e){return e.charCodeAt(0)===47?1:0}function U(e,t){return e.charCodeAt(t)===46&&e.charCodeAt(t+1)===46&&e.charCodeAt(t+2)===46}function v(e,t,n,s,r=""){for(;t<n&&e.charCodeAt(t)!==s;)t++;const c=r.length;for(let o=0;o<c;o++)if(e.charCodeAt(t-c+o)!==r.charCodeAt(o))return-1;return t-c}let V;(function(e){e[e.EOL=0]="EOL",e[e.OPEN_BRACKET=91]="OPEN_BRACKET",e[e.CLOSE_BRACKET=93]="CLOSE_BRACKET",e[e.DOT=46]="DOT",e[e.SLASH=47]="SLASH"})(V||(V={}));function oe(e,t,n,s,r,c,o,a){n.charCodeAt(s)===47&&s++;let i=r;const l=t+"/";let f=5;for(;i>=s&&f--;){const d=Q(c,o,a,n,i,r);if(d){let u=n.substring(s,Math.min(i,r));return u.endsWith(l)&&(u=u.substring(0,u.length-l.length)),d[e]=decodeURIComponent(u),d}i=ae(n,s,l,i,s-1)+l.length}return null}function ae(e,t,n,s,r){let c=e.lastIndexOf(n,s);return c==s-n.length&&(c=e.lastIndexOf(n,s-n.length-1)),c>t?c:r}const Oe=async(e,t,n,s)=>{if(Array.isArray(e))for(const r of e){const c=r[0],o=re(c,s);if(o){const a=r[1],i=r[3],l=new Array(a.length),f=[],d=ie(t,s);let u;return a.forEach((h,g)=>{B(h,f,m=>l[g]=m)}),B(d,f,h=>u=h==null?void 0:h.default),f.length>0&&await Promise.all(f),[c,o,l,u,i]}}return null},B=(e,t,n,s)=>{if(typeof e=="function"){const r=b.get(e);if(r)n(r);else{const c=e();typeof c.then=="function"?t.push(c.then(o=>{b.set(e,o),n(o)})):c&&n(c)}}},ie=(e,t)=>{if(e){t=t.endsWith("/")?t:t+"/";const n=e.find(s=>s[0]===t||t.startsWith(s[0]+(t.endsWith("/")?"":"/")));if(n)return n[1]}},Pe=(e,t,n,s,r=!1)=>{if(t!=="popstate"){const c=O(n,s),o=n.hash===s.hash;if(!c||!o){const a={_qCityScroll:le()};r?e.history.replaceState(a,"",S(s)):e.history.pushState(a,"",S(s))}}},le=()=>({x:0,y:0,w:0,h:0}),fe=e=>{e=e.endsWith("/")?e:e+"/",N.has(e)||(N.add(e),document.dispatchEvent(new CustomEvent("qprefetch",{detail:{links:[e]}})))},Re=async(e,t,n)=>{const s=e.pathname,r=e.search,c=te(s,r,n==null?void 0:n.action);let o;n!=null&&n.action||(o=_.get(c)),(n==null?void 0:n.prefetchSymbols)!==!1&&fe(s);let a;if(!o){const i=ue(n==null?void 0:n.action);n!=null&&n.action&&(n.action.data=void 0),o=fetch(c,i).then(l=>{const f=new URL(l.url),d=f.pathname.endsWith("/q-data.json");if(f.origin!==location.origin||!d){location.href=f.href;return}if((l.headers.get("content-type")||"").includes("json"))return l.text().then(u=>{const h=F(u,t);if(!h){location.href=e.href;return}if(n!=null&&n.clearCache&&_.delete(c),h.redirect)location.href=h.redirect;else if(n!=null&&n.action){const{action:g}=n,m=h.loaders[g.id];a=()=>{g.resolve({status:l.status,result:m})}}return h});(n==null?void 0:n.isPrefetch)!==!0&&(location.href=e.href)}),n!=null&&n.action||_.set(c,o)}return o.then(i=>(i||_.delete(c),a&&a(),i))},ue=e=>{const t=e==null?void 0:e.data;if(t)return t instanceof FormData?{method:"POST",body:t}:{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json, charset=UTF-8"}}},ke=()=>T(J),be=()=>T(X),Ne=()=>T(Z),Le=()=>K(Y("qwikcity")),Ie=(e,t,n,s)=>{e==="popstate"&&s?window.scrollTo(s.x,s.y):(e==="link"||e==="form")&&(he(t,n)||window.scrollTo(0,0))},he=(e,t)=>{const n=e.hash.slice(1),s=n&&document.getElementById(n);return s?(s.scrollIntoView(),!0):!!(!s&&e.hash&&O(e,t))},Me=e=>({x:e.scrollLeft,y:e.scrollTop,w:Math.max(e.scrollWidth,e.clientWidth),h:Math.max(e.scrollHeight,e.clientHeight)}),We=()=>{const e=history.state;return e==null?void 0:e._qCityScroll},je=e=>{const t=history.state||{};t._qCityScroll=e,history.replaceState(t,"")},Ve=q(A(()=>w(()=>import("./q-Dd8U_6lt.js"),[]),"s_TxCFOy819ag"));function Be(e){for(;e&&e.nodeType!==Node.ELEMENT_NODE;)e=e.parentElement;return e.closest("[q\\:container]")}const Fe=q(A(()=>w(()=>import("./q-BD31Kayd.js"),[]),"s_8gdLBszqbaM")),He=e=>z("script",{nonce:x(e,"nonce")},{dangerouslySetInnerHTML:G},null,3,"1Z_0"),Qe=async function*(e,t,n){const s=e.getReader();try{let r="";const c=new TextDecoder;for(;!(n!=null&&n.aborted);){const o=await s.read();if(o.done)break;r+=c.decode(o.value,{stream:!0});const a=r.split(/\n/);r=a.pop();for(const i of a)yield await F(i,t)}}finally{s.releaseLock()}};export{Be as A,Le as B,ye as C,J as D,ke as E,Se as F,Ae as G,we as H,Qe as I,Fe as L,Ve as Q,X as R,He as S,be as a,Te as b,se as c,me as d,Z as e,ge as f,De as g,Ce as h,_e as i,p as j,O as k,Re as l,We as m,Oe as n,H as o,fe as p,qe as q,Ie as r,ve as s,C as t,Ne as u,_ as v,je as w,Me as x,Ee as y,Pe as z};
