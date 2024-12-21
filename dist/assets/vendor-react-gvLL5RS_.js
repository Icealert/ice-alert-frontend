import{r as c,R as ie}from"./vendor-recharts-ClcFuUco.js";/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},S.apply(this,arguments)}var R;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(R||(R={}));const j="popstate";function le(e){e===void 0&&(e={});function t(r,a){let{pathname:i,search:l,hash:u}=r.location;return F("",{pathname:i,search:l,hash:u},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:Y(a)}return se(t,n,null,e)}function v(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function K(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function oe(){return Math.random().toString(36).substr(2,8)}function M(e,t){return{usr:e.state,key:e.key,idx:t}}function F(e,t,n,r){return n===void 0&&(n=null),S({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?b(t):t,{state:n,key:t&&t.key||r||oe()})}function Y(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function b(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function se(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:i=!1}=r,l=a.history,u=R.Pop,o=null,f=h();f==null&&(f=0,l.replaceState(S({},l.state,{idx:f}),""));function h(){return(l.state||{idx:null}).idx}function s(){u=R.Pop;let d=h(),x=d==null?null:d-f;f=d,o&&o({action:u,location:m.location,delta:x})}function p(d,x){u=R.Push;let E=F(m.location,d,x);f=h()+1;let C=M(E,f),B=m.createHref(E);try{l.pushState(C,"",B)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;a.location.assign(B)}i&&o&&o({action:u,location:m.location,delta:1})}function y(d,x){u=R.Replace;let E=F(m.location,d,x);f=h();let C=M(E,f),B=m.createHref(E);l.replaceState(C,"",B),i&&o&&o({action:u,location:m.location,delta:0})}function g(d){let x=a.location.origin!=="null"?a.location.origin:a.location.href,E=typeof d=="string"?d:Y(d);return E=E.replace(/ $/,"%20"),v(x,"No window.location.(origin|href) available to create URL for href: "+E),new URL(E,x)}let m={get action(){return u},get location(){return e(a,l)},listen(d){if(o)throw new Error("A history only accepts one active listener");return a.addEventListener(j,s),o=d,()=>{a.removeEventListener(j,s),o=null}},createHref(d){return t(a,d)},createURL:g,encodeLocation(d){let x=g(d);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:p,replace:y,go(d){return l.go(d)}};return m}var k;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(k||(k={}));function ue(e,t,n){return n===void 0&&(n="/"),ce(e,t,n,!1)}function ce(e,t,n,r){let a=typeof t=="string"?b(t):t,i=Z(a.pathname||"/",n);if(i==null)return null;let l=Q(e);he(l);let u=null;for(let o=0;u==null&&o<l.length;++o){let f=Re(i);u=Ee(l[o],f,r)}return u}function Q(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(i,l,u)=>{let o={relativePath:u===void 0?i.path||"":u,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};o.relativePath.startsWith("/")&&(v(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let f=P([r,o.relativePath]),h=n.concat(o);i.children&&i.children.length>0&&(v(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+f+'".')),Q(i.children,t,h,f)),!(i.path==null&&!i.index)&&t.push({path:f,score:ye(f,i.index),routesMeta:h})};return e.forEach((i,l)=>{var u;if(i.path===""||!((u=i.path)!=null&&u.includes("?")))a(i,l);else for(let o of X(i.path))a(i,l,o)}),t}function X(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return a?[i,""]:[i];let l=X(r.join("/")),u=[];return u.push(...l.map(o=>o===""?i:[i,o].join("/"))),a&&u.push(...l),u.map(o=>e.startsWith("/")&&o===""?"/":o)}function he(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:xe(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const fe=/^:[\w-]+$/,de=3,pe=2,me=1,ve=10,ge=-2,V=e=>e==="*";function ye(e,t){let n=e.split("/"),r=n.length;return n.some(V)&&(r+=ge),t&&(r+=pe),n.filter(a=>!V(a)).reduce((a,i)=>a+(fe.test(i)?de:i===""?me:ve),r)}function xe(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function Ee(e,t,n){let{routesMeta:r}=e,a={},i="/",l=[];for(let u=0;u<r.length;++u){let o=r[u],f=u===r.length-1,h=i==="/"?t:t.slice(i.length)||"/",s=D({path:o.relativePath,caseSensitive:o.caseSensitive,end:f},h),p=o.route;if(!s&&f&&n&&!r[r.length-1].route.index&&(s=D({path:o.relativePath,caseSensitive:o.caseSensitive,end:!1},h)),!s)return null;Object.assign(a,s.params),l.push({params:a,pathname:P([i,s.pathname]),pathnameBase:Be(P([i,s.pathnameBase])),route:p}),s.pathnameBase!=="/"&&(i=P([i,s.pathnameBase]))}return l}function D(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ce(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],l=i.replace(/(.)\/+$/,"$1"),u=a.slice(1);return{params:r.reduce((f,h,s)=>{let{paramName:p,isOptional:y}=h;if(p==="*"){let m=u[s]||"";l=i.slice(0,i.length-m.length).replace(/(.)\/+$/,"$1")}const g=u[s];return y&&!g?f[p]=void 0:f[p]=(g||"").replace(/%2F/g,"/"),f},{}),pathname:i,pathnameBase:l,pattern:e}}function Ce(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),K(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,u,o)=>(r.push({paramName:u,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function Re(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return K(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Z(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Pe(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?b(e):e;return{pathname:n?n.startsWith("/")?n:we(n,t):t,search:Ie(r),hash:Le(a)}}function we(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function _(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function be(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Se(e,t){let n=be(e);return t?n.map((r,a)=>a===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ue(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=b(e):(a=S({},e),v(!a.pathname||!a.pathname.includes("?"),_("?","pathname","search",a)),v(!a.pathname||!a.pathname.includes("#"),_("#","pathname","hash",a)),v(!a.search||!a.search.includes("#"),_("#","search","hash",a)));let i=e===""||a.pathname==="",l=i?"/":a.pathname,u;if(l==null)u=n;else{let s=t.length-1;if(!r&&l.startsWith("..")){let p=l.split("/");for(;p[0]==="..";)p.shift(),s-=1;a.pathname=p.join("/")}u=s>=0?t[s]:"/"}let o=Pe(a,u),f=l&&l!=="/"&&l.endsWith("/"),h=(i||l===".")&&n.endsWith("/");return!o.pathname.endsWith("/")&&(f||h)&&(o.pathname+="/"),o}const P=e=>e.join("/").replace(/\/\/+/g,"/"),Be=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ie=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Le=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ne(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const H=["post","put","patch","delete"];new Set(H);const Oe=["get",...H];new Set(Oe);/**
 * React Router v6.28.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U.apply(this,arguments)}const W=c.createContext(null),Te=c.createContext(null),L=c.createContext(null),N=c.createContext(null),w=c.createContext({outlet:null,matches:[],isDataRoute:!1}),ee=c.createContext(null);function O(){return c.useContext(N)!=null}function te(){return O()||v(!1),c.useContext(N).location}function ne(e){c.useContext(L).static||c.useLayoutEffect(e)}function et(){let{isDataRoute:e}=c.useContext(w);return e?qe():_e()}function _e(){O()||v(!1);let e=c.useContext(W),{basename:t,future:n,navigator:r}=c.useContext(L),{matches:a}=c.useContext(w),{pathname:i}=te(),l=JSON.stringify(Se(a,n.v7_relativeSplatPath)),u=c.useRef(!1);return ne(()=>{u.current=!0}),c.useCallback(function(f,h){if(h===void 0&&(h={}),!u.current)return;if(typeof f=="number"){r.go(f);return}let s=Ue(f,JSON.parse(l),i,h.relative==="path");e==null&&t!=="/"&&(s.pathname=s.pathname==="/"?t:P([t,s.pathname])),(h.replace?r.replace:r.push)(s,h.state,h)},[t,r,l,i,e])}function tt(){let{matches:e}=c.useContext(w),t=e[e.length-1];return t?t.params:{}}function Fe(e,t){return $e(e,t)}function $e(e,t,n,r){O()||v(!1);let{navigator:a}=c.useContext(L),{matches:i}=c.useContext(w),l=i[i.length-1],u=l?l.params:{};l&&l.pathname;let o=l?l.pathnameBase:"/";l&&l.route;let f=te(),h;if(t){var s;let d=typeof t=="string"?b(t):t;o==="/"||(s=d.pathname)!=null&&s.startsWith(o)||v(!1),h=d}else h=f;let p=h.pathname||"/",y=p;if(o!=="/"){let d=o.replace(/^\//,"").split("/");y="/"+p.replace(/^\//,"").split("/").slice(d.length).join("/")}let g=ue(e,{pathname:y}),m=Ve(g&&g.map(d=>Object.assign({},d,{params:Object.assign({},u,d.params),pathname:P([o,a.encodeLocation?a.encodeLocation(d.pathname).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?o:P([o,a.encodeLocation?a.encodeLocation(d.pathnameBase).pathname:d.pathnameBase])})),i,n,r);return t&&m?c.createElement(N.Provider,{value:{location:U({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:R.Pop}},m):m}function We(){let e=Je(),t=Ne(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return c.createElement(c.Fragment,null,c.createElement("h2",null,"Unexpected Application Error!"),c.createElement("h3",{style:{fontStyle:"italic"}},t),n?c.createElement("pre",{style:a},n):null,null)}const je=c.createElement(We,null);class Me extends c.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?c.createElement(w.Provider,{value:this.props.routeContext},c.createElement(ee.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ke(e){let{routeContext:t,match:n,children:r}=e,a=c.useContext(W);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),c.createElement(w.Provider,{value:t},r)}function Ve(e,t,n,r){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,u=(a=n)==null?void 0:a.errors;if(u!=null){let h=l.findIndex(s=>s.route.id&&(u==null?void 0:u[s.route.id])!==void 0);h>=0||v(!1),l=l.slice(0,Math.min(l.length,h+1))}let o=!1,f=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<l.length;h++){let s=l[h];if((s.route.HydrateFallback||s.route.hydrateFallbackElement)&&(f=h),s.route.id){let{loaderData:p,errors:y}=n,g=s.route.loader&&p[s.route.id]===void 0&&(!y||y[s.route.id]===void 0);if(s.route.lazy||g){o=!0,f>=0?l=l.slice(0,f+1):l=[l[0]];break}}}return l.reduceRight((h,s,p)=>{let y,g=!1,m=null,d=null;n&&(y=u&&s.route.id?u[s.route.id]:void 0,m=s.route.errorElement||je,o&&(f<0&&p===0?(g=!0,d=null):f===p&&(g=!0,d=s.route.hydrateFallbackElement||null)));let x=t.concat(l.slice(0,p+1)),E=()=>{let C;return y?C=m:g?C=d:s.route.Component?C=c.createElement(s.route.Component,null):s.route.element?C=s.route.element:C=h,c.createElement(ke,{match:s,routeContext:{outlet:h,matches:x,isDataRoute:n!=null},children:C})};return n&&(s.route.ErrorBoundary||s.route.errorElement||p===0)?c.createElement(Me,{location:n.location,revalidation:n.revalidation,component:m,error:y,children:E(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):E()},null)}var re=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(re||{}),I=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(I||{});function De(e){let t=c.useContext(W);return t||v(!1),t}function ze(e){let t=c.useContext(Te);return t||v(!1),t}function Ae(e){let t=c.useContext(w);return t||v(!1),t}function ae(e){let t=Ae(),n=t.matches[t.matches.length-1];return n.route.id||v(!1),n.route.id}function Je(){var e;let t=c.useContext(ee),n=ze(I.UseRouteError),r=ae(I.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function qe(){let{router:e}=De(re.UseNavigateStable),t=ae(I.UseNavigateStable),n=c.useRef(!1);return ne(()=>{n.current=!0}),c.useCallback(function(a,i){i===void 0&&(i={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,U({fromRouteId:t},i)))},[e,t])}const z={};function Ge(e,t){z[t]||(z[t]=!0,console.warn(t))}const A=(e,t,n)=>Ge(e,"⚠️ React Router Future Flag Warning: "+t+". "+("You can use the `"+e+"` future flag to opt-in early. ")+("For more information, see "+n+"."));function Ke(e,t){(e==null?void 0:e.v7_startTransition)===void 0&&A("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),(e==null?void 0:e.v7_relativeSplatPath)===void 0&&!t&&A("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function Ye(e){v(!1)}function Qe(e){let{basename:t="/",children:n=null,location:r,navigationType:a=R.Pop,navigator:i,static:l=!1,future:u}=e;O()&&v(!1);let o=t.replace(/^\/*/,"/"),f=c.useMemo(()=>({basename:o,navigator:i,static:l,future:U({v7_relativeSplatPath:!1},u)}),[o,u,i,l]);typeof r=="string"&&(r=b(r));let{pathname:h="/",search:s="",hash:p="",state:y=null,key:g="default"}=r,m=c.useMemo(()=>{let d=Z(h,o);return d==null?null:{location:{pathname:d,search:s,hash:p,state:y,key:g},navigationType:a}},[o,h,s,p,y,g,a]);return m==null?null:c.createElement(L.Provider,{value:f},c.createElement(N.Provider,{children:n,value:m}))}function nt(e){let{children:t,location:n}=e;return Fe($(t),n)}new Promise(()=>{});function $(e,t){t===void 0&&(t=[]);let n=[];return c.Children.forEach(e,(r,a)=>{if(!c.isValidElement(r))return;let i=[...t,a];if(r.type===c.Fragment){n.push.apply(n,$(r.props.children,i));return}r.type!==Ye&&v(!1),!r.props.index||!r.props.children||v(!1);let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=$(r.props.children,i)),n.push(l)}),n}/**
 * React Router DOM v6.28.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Xe="6";try{window.__reactRouterVersion=Xe}catch{}const Ze="startTransition",J=ie[Ze];function rt(e){let{basename:t,children:n,future:r,window:a}=e,i=c.useRef();i.current==null&&(i.current=le({window:a,v5Compat:!0}));let l=i.current,[u,o]=c.useState({action:l.action,location:l.location}),{v7_startTransition:f}=r||{},h=c.useCallback(s=>{f&&J?J(()=>o(s)):o(s)},[o,f]);return c.useLayoutEffect(()=>l.listen(h),[l,h]),c.useEffect(()=>Ke(r),[r]),c.createElement(Qe,{basename:t,children:n,location:u.location,navigationType:u.action,navigator:l,future:r})}var q;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(q||(q={}));var G;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(G||(G={}));export{rt as B,nt as R,tt as a,te as b,Ye as c,et as u};
//# sourceMappingURL=vendor-react-gvLL5RS_.js.map