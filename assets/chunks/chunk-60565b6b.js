function Te(){return!(typeof process>"u"||!process.cwd||!process.versions||typeof process.versions.node>"u"||!process.release||process.release.name!=="node")}function H(e,t){let n;{var r=Error.stackTraceLimit;Error.stackTraceLimit=1/0,n=new Error(e),Error.stackTraceLimit=r}return Te()&&(n.stack=ke(n.stack,t)),n}function ke(e,t){if(!e)return e;const n=_e(e);let r=0;return n.filter(s=>s.includes(" (internal/")||s.includes(" (node:internal")?!1:r<t&&Ie(s)?(r++,!1):!0).join(`
`)}function Ie(e){return e.startsWith("    at ")}function _e(e){return e.split(/\r?\n/)}function k(e,t){const n=globalThis.__vike=globalThis.__vike||{};return n[e]=n[e]||t}function v(e){return typeof e=="object"&&e!==null}function B(e){return Array.from(new Set(e))}const S=k("assertPackageInstances.ts",{instances:[],alreadyLogged:new Set}),le="The client runtime of Server Routing as well as the client runtime of Client Routing are both being loaded. Make sure they aren't loaded both at the same time for a given page. See https://vike.dev/client-runtimes-conflict",G="Two vike client runtime instances are being loaded. Make sure your client-side bundles don't include vike twice. (In order to reduce the size of your client-side JavaScript bundles.)";function J(){{const e=B(S.instances);Ce(e.length<=1,`Both vike@${e[0]} and vike@${e[1]} loaded. Only one version should be loaded.`)}S.checkSingleInstance&&S.instances.length>1&&_(!1,G,{onlyOnce:!0,showStackTrace:!0})}function Zt(e){_(S.isClientRouting!==!0,le,{onlyOnce:!0,showStackTrace:!0}),_(S.isClientRouting===void 0,G,{onlyOnce:!0,showStackTrace:!0}),S.isClientRouting=!1,e&&(S.checkSingleInstance=!0),J()}function en(e){_(S.isClientRouting!==!1,le,{onlyOnce:!0,showStackTrace:!0}),_(S.isClientRouting===void 0,G,{onlyOnce:!0,showStackTrace:!0}),S.isClientRouting=!0,e&&(S.checkSingleInstance=!0),J()}function je(e){S.instances.push(e),J()}function Ce(e,t){if(e)return;const n=`[vike][Wrong Usage] ${t}`;throw new Error(n)}function _(e,t,{onlyOnce:n,showStackTrace:r}){if(e)return;const i=`[vike][Warning] ${t}`;if(n){const{alreadyLogged:s}=S,a=n===!0?i:n;if(s.has(a))return;s.add(a)}console.warn(r?new Error(i):i)}const xe="0.4.150",P={projectName:"Vike",projectVersion:xe,npmPackageName:"vike",githubRepository:"https://github.com/vikejs/vike"};je(P.projectVersion);const ce=new Proxy(e=>e,{get:()=>ce}),p=ce,E=k("utils/assert.ts",{alreadyLogged:new Set,logger(e,t){t==="info"?console.log(e):console.warn(e)},showStackTraceList:new WeakSet}),Oe=`[${P.npmPackageName}]`,Le=`[${P.npmPackageName}@${P.projectVersion}]`,Y=2;function o(e,t){var a;if(e)return;const n=(()=>{if(!t)return null;const l=typeof t=="string"?t:JSON.stringify(t);return p.dim(`Debug info (for ${P.projectName} maintainers; you can ignore this): ${l}`)})(),r=`${P.githubRepository}/issues/new`;let i=[`You stumbled upon a bug in ${P.projectName}'s source code.`,`Go to ${p.blue(r)} and copy-paste this error; a maintainer will fix the bug (usually under 24 hours).`,n].filter(Boolean).join(" ");i=j(i),i=W(i,"Bug"),i=C(i,!0);const s=H(i,Y);throw(a=E.onBeforeLog)==null||a.call(E),s}function g(e,t,{showStackTrace:n}={}){var i;if(e)return;t=j(t),t=W(t,"Wrong Usage"),t=C(t);const r=H(t,Y);throw n&&E.showStackTraceList.add(r),(i=E.onBeforeLog)==null||i.call(E),r}function Fe(e){return e=j(e),e=W(e,"Error"),e=C(e),H(e,Y)}function R(e,t,{onlyOnce:n,showStackTrace:r}){var i;if(!e){if(t=j(t),t=W(t,"Warning"),t=C(t),n){const{alreadyLogged:s}=E,a=n===!0?t:n;if(s.has(a))return;s.add(a)}if((i=E.onBeforeLog)==null||i.call(E),r){const s=new Error(t);E.showStackTraceList.add(s),E.logger(s,"warn")}else E.logger(t,"warn")}}function tn(e,t,{onlyOnce:n}){var r;if(!e){if(t=j(t),t=C(t),n){const{alreadyLogged:i}=E,s=t;if(i.has(s))return;i.add(s)}(r=E.onBeforeLog)==null||r.call(E),E.logger(t,"info")}}function W(e,t){let n=`[${t}]`;const r=t==="Warning"?"yellow":"red";return n=p.bold(p[r](n)),`${n}${e}`}function j(e){return e.startsWith("[")?e:` ${e}`}function C(e,t=!1){return`${t?Le:Oe}${e}`}function M(){return typeof window<"u"&&typeof window.scrollY=="number"}const O=k("utils/assertRouterType.ts",{});function nn(){ue(We()),O.isClientRouting=!0}function We(){return O.isClientRouting!==!1}function rn(){ue(O.isClientRouting!==!0),O.isClientRouting=!1}function ue(e){g(M(),`${p.cyan("import { something } from 'vike/client/router'")} is forbidden on the server-side`,{showStackTrace:!0}),R(e,"You shouldn't `import { something } from 'vike/client/router'` when using Server Routing. The 'vike/client/router' utilities work only with Client Routing. In particular, don't `import { navigate }` nor `import { prefetch }` as they unnecessarily bloat your client-side bundle sizes.",{showStackTrace:!0,onlyOnce:!0})}const Ae=["js","ts","cjs","cts","mjs","mts","jsx","tsx","cjsx","ctsx","mjsx","mtsx"],fe=["vue","svelte","marko","md","mdx"],Ve=[...Ae,...fe];function de(e){const t=Ve.some(n=>e.endsWith("."+n));return o(!ze(e)||t),t}function ze(e){return/\.(c|m)?(j|t)sx?$/.test(e)}function De(e){return fe.some(t=>e.endsWith("."+t))}function L(e,t,n){return typeof e=="string"?Q(e.split(""),t,n).join(""):Q(e,t,n)}function Q(e,t,n){const r=[];let i=t>=0?t:e.length+t;o(i>=0&&i<=e.length);let s=n>=0?n:e.length+n;for(o(s>=0&&s<=e.length);!(i===s||(i===e.length&&(i=0),i===s));){const a=e[i];o(a!==void 0),r.push(a),i++}return r}const ge=["http://","https://","tauri://"];function he(e){return ge.some(t=>e.startsWith(t))||e.startsWith("/")||e.startsWith(".")||e.startsWith("?")||e.startsWith("#")||e===""}function sn(e,t){o(t.includes(" but ")),g(typeof e=="string",`${t} should be a string`),!he(e)&&(!e.startsWith("/")&&!e.includes(":")?g(!1,`${t} is ${p.cyan(e)} and it should be /${p.cyan(e)} instead (URL pathnames should start with a leading slash)`):g(!1,`${t} isn't a valid URL`))}function Ne(e,t){o(he(e)),o(t.startsWith("/"));const[n,...r]=e.split("#");o(n!==void 0);const i=["",...r].join("#")||null;o(i===null||i.startsWith("#"));const s=i===null?"":z(i.slice(1)),[a,...l]=n.split("?");o(a!==void 0);const c=["",...l].join("?")||null;o(c===null||c.startsWith("?"));const u={},f={};Array.from(new URLSearchParams(c||"")).forEach(([$,K])=>{u[$]=K,f[$]=[...f.hasOwnProperty($)?f[$]:[],K]});const{origin:d,pathname:h}=He(a,t);o(d===null||d===z(d)),o(h.startsWith("/")),o(d===null||e.startsWith(d));const m=a.slice((d||"").length);Me(e,d,m,c,i);let{pathname:w,hasBaseServer:I}=Je(h,t);return w=Ue(w),o(w.startsWith("/")),{origin:d,pathname:w,pathnameOriginal:m,hasBaseServer:I,search:u,searchAll:f,searchOriginal:c,hash:s,hashOriginal:i}}function z(e){try{return decodeURIComponent(e)}catch{}try{return decodeURI(e)}catch{}return e}function Ue(e){return e=e.replace(/\s+$/,""),e=e.split("/").map(t=>z(t).split("/").join("%2F")).join("/"),e}function He(e,t){var n;o(!e.includes("?")&&!e.includes("#"));{const{origin:r,pathname:i}=Z(e);if(r)return{origin:r,pathname:i};o(i===e)}if(e.startsWith("/"))return{origin:null,pathname:e};{const r=typeof window<"u"?(n=window==null?void 0:window.document)==null?void 0:n.baseURI:void 0;let i;return r?i=Z(r.split("?")[0]).pathname:i=t,{origin:null,pathname:Be(e,i)}}}function Z(e){if(ge.some(t=>e.startsWith(t))){const[t,n,r,...i]=e.split("/"),s=[t,n,r].join("/"),a=["",...i].join("/")||"/";return{origin:s,pathname:a}}else return{pathname:e,origin:null}}function Be(e,t){const n=t.split("/"),r=e.split("/");let i=t.endsWith("/");e.startsWith(".")&&n.pop();for(const a in r){const l=r[a];l==""&&a==="0"||l!="."&&(l==".."?n.pop():(i=!1,n.push(l)))}let s=n.join("/");return i&&!s.endsWith("/")&&(s+="/"),s.startsWith("/")||(s="/"+s),s}function Ge(e){o(e.startsWith("/")),o(!e.includes("?")),o(!e.includes("#"))}function Je(e,t){Ge(e),o(Ye(t));let n=e;if(o(n.startsWith("/")),o(t.startsWith("/")),t==="/")return{pathname:e,hasBaseServer:!0};let r=t;return t.endsWith("/")&&n===L(t,0,-1)&&(r=L(t,0,-1),o(n===r)),n.startsWith(r)?(o(n.startsWith("/")||n.startsWith("http")),o(n.startsWith(r)),n=n.slice(r.length),n.startsWith("/")||(n="/"+n),o(n.startsWith("/")),{pathname:n,hasBaseServer:!0}):{pathname:e,hasBaseServer:!1}}function Ye(e){return e.startsWith("/")}function Me(e,t,n,r,i){const s=qe(t,n,r,i);o(e===s)}function qe(e,t,n,r){return`${e||""}${t}${n||""}${r||""}`}function q(e,t){t&&Object.defineProperties(e,Object.getOwnPropertyDescriptors(t))}function A(e){return e instanceof Function||typeof e=="function"}function on(e){return(t,n)=>{const r=e(t),i=e(n);return r===i?0:r>i?-1:1}}function an(e){return(t,n)=>{const r=e(t),i=e(n);return r===i?0:r<i?-1:1}}function Xe(e){return(t,n)=>{const r=e(t),i=e(n);if(o([!0,!1,null].includes(r)),o([!0,!1,null].includes(i)),r===i)return 0;if(r===!0||i===!1)return-1;if(i===!0||r===!1)return 1;o(!1)}}function Ke(e){return Xe(t=>{const n=e(t);return n===null?null:!n})}function y(e,t,n="unknown"){if(!v(e))return!1;if(!(t in e))return n==="undefined";if(n==="unknown")return!0;const r=e[t];return n==="array"?Array.isArray(r):n==="object"?v(r):n==="string[]"?Array.isArray(r)&&r.every(i=>typeof i=="string"):n==="function"?A(r):Array.isArray(n)?typeof r=="string"&&n.includes(r):n==="null"?r===null:n==="undefined"?r===void 0:n==="true"?r===!0:n==="false"?r===!1:typeof r===n}function Qe(e,t){return e.toLowerCase()<t.toLowerCase()?-1:e.toLowerCase()>t.toLowerCase()?1:0}const Ze=e=>e!=null;function pe(e){const t=n=>`Not a posix path: ${n}`;o(e!==null,t("null")),o(typeof e=="string",t(`typeof path === ${JSON.stringify(typeof e)}`)),o(e!=="",t("(empty string)")),o(e),o(!e.includes("\\"),t(e))}const et=["clientRouting"];function tt(e){et.forEach(t=>{if(o(e.fileExports),!(t in e.fileExports))return;const n=`The value of \`${t}\` is only allowed to be \`true\`.`;g(e.fileExports[t]!==!1,`${e.filePath} has \`export { ${t} }\` with the value \`false\` which is prohibited: remove \`export { ${t} }\` instead. (${n})`),g(e.fileExports[t]===!0,`${e.filePath} has \`export { ${t} }\` with a forbidden value. ${n}`)})}const me=["render","clientRouting","prerender","doNotPrerender"];function nt(e,t){g(!me.includes(e),`${t} has \`export default { ${e} }\` which is prohibited, use \`export { ${e} }\` instead.`)}function rt(e,t){if(!e)return null;let[n,...r]=e;if(!n||r.length===0&&["*","default",t].includes(n))return null;o(n!=="*");let i="",s="";return n==="default"?i="export default":(i="export",r=[n,...r]),r.forEach(l=>{i=`${i} { ${l}`,s=` }${s}`}),i+s}function ye(e,t,{definedAt:n}){const r=it(n,t),i=r==="internally"?r:`at ${r}`;let s=`${t}`;return`${e} ${p.cyan(s)} defined ${i}`}function it(e,t){if("isComputed"in e)return"internally";let n;return"files"in e?n=e.files:n=[e],o(n.length>=1),n.map(i=>{const{filePathToShowToUser:s,fileExportPathToShowToUser:a}=i;let l=s;const c=rt(a,t);return c&&(l=`${l} > ${p.cyan(c)}`),l}).join(" / ")}function ln(e,t){const n=t.find(r=>r.pageId===e);return o(t.length>0),o(n),n}function Ee({definedAt:e}){if("isComputed"in e||"files"in e)return null;const{filePathToShowToUser:t}=e;return o(t),t}function st({definedAt:e}){const t=Ee({definedAt:e});return o(t),t}function ot(e,t){const n={},r={},i={};e.forEach(l=>{at(l).forEach(({exportName:u,exportValue:f,isFromDefaultExport:d})=>{o(u!=="default"),i[u]=i[u]??[],i[u].push({exportValue:f,exportSource:`${l.filePath} > ${d?`\`export default { ${u} }\``:`\`export { ${u} }\``}`,filePath:l.filePath,_filePath:l.filePath,_fileType:l.fileType,_isFromDefaultExport:d})})}),t&&Object.entries(t.configValues).forEach(([l,c])=>{const{value:u}=c,f=Ee(c),d=ye("Config",l,c);r[l]=r[l]??u,n[l]=n[l]??[],o(n[l].length===0),n[l].push({configValue:u,configDefinedAt:d,configDefinedByFile:f});const h=l;i[h]=i[h]??[],i[h].push({exportValue:u,exportSource:d,filePath:f,_filePath:f,_fileType:null,_isFromDefaultExport:null})});const s=lt(),a={};return Object.entries(i).forEach(([l,c])=>{c.forEach(({exportValue:u,_fileType:f,_isFromDefaultExport:d})=>{a[l]=a[l]??u,f===".page"&&!d&&(l in s||(s[l]=u))})}),o(!("default"in a)),o(!("default"in i)),{config:r,configEntries:n,exports:a,exportsAll:i,pageExports:s}}function at(e){const{filePath:t,fileExports:n}=e;o(n),o(de(t));const r=[];return Object.entries(n).sort(Ke(([i])=>i==="default")).forEach(([i,s])=>{let a=i==="default";if(a)if(De(t))i="Page";else{g(v(s),`The ${p.cyan("export default")} of ${t} should be an object.`),Object.entries(s).forEach(([l,c])=>{nt(l,t),r.push({exportName:l,exportValue:c,isFromDefaultExport:a})});return}r.push({exportName:i,exportValue:s,isFromDefaultExport:a})}),r.forEach(({exportName:i,isFromDefaultExport:s})=>{o(!(s&&me.includes(i)))}),r}function lt(){return new Proxy({},{get(...e){return M()||R(!1,"`pageContext.pageExports` is outdated. Use `pageContext.exports` instead, see https://vike.dev/exports",{onlyOnce:!0,showStackTrace:!0}),Reflect.get(...e)}})}function ct(e){const t=".page.",n=L(e.split(t),0,-1).join(t);return o(!n.includes("\\")),n}function T(e){pe(e)}function cn(e,t){if(t.length>0){const r=t.filter(i=>i.isErrorPage);return r.length===0?null:(g(r.length===1,"Only one error page can be defined"),r[0].pageId)}const n=B(e.map(({pageId:r})=>r).filter(r=>V(r)));if(g(n.length<=1,`Only one _error.page.js is allowed, but found several: ${n.join(" ")}`),n.length>0){const r=n[0];return o(r),r}return null}function V(e,t){return o(!e.includes("\\")),e.includes("/_error")}function ut(e,t){if(t.length>0){const n=t.find(r=>r.pageId===e);return o(n),!!n.isErrorPage}else return V(e)}const ft=[".page",".page.server",".page.route",".page.client",".css"];function dt(e){if(pe(e),e.endsWith(".css"))return".css";o(de(e),e);const n=e.split("/").slice(-1)[0].split("."),r=n.slice(-3)[0],i=n.slice(-2)[0];if(i==="page")return".page";if(o(r==="page",e),i==="server")return".page.server";if(i==="client")return".page.client";if(i==="route")return".page.route";o(!1,e)}function we(e){const t=s=>i.pageId===s||i.isDefaultPageFile&&(ee(i.filePath)||gt(s,i.filePath)),n=dt(e),i={filePath:e,fileType:n,isEnv:s=>{if(o(n!==".page.route"),s==="CLIENT_ONLY")return n===".page.client"||n===".css";if(s==="SERVER_ONLY")return n===".page.server";if(s==="CLIENT_AND_SERVER")return n===".page";o(!1)},isRelevant:t,isDefaultPageFile:D(e),isRendererPageFile:n!==".css"&&D(e)&&ee(e),isErrorPageFile:V(e),pageId:ct(e)};return i}function D(e){return T(e),V(e)?!1:e.includes("/_default")}function ee(e){return T(e),e.includes("/renderer/")}function gt(e,t){T(e),T(t),o(!e.endsWith("/")),o(!t.endsWith("/")),o(D(t));const n=L(t.split("/"),0,-1).filter(r=>r!=="_default").join("/");return e.startsWith(n)}function ht(e){o(Array.isArray(e)),e.forEach(t=>{o(v(t)),o(y(t,"pageId","string")),o(y(t,"routeFilesystem")),o(y(t,"configValuesSerialized")),o(y(t,"configValuesImported"))})}function pt(e){o(y(e,"configValuesImported"))}const mt=["$$registrations","_rerender_only"],yt=[".md",".mdx"];function Et(e,t,n){wt(e,t,n)}function wt(e,t,n){const i=Object.keys(e).filter(a=>!mt.includes(a)),s=i.filter(a=>a!=="default"&&a!==n);if(s.length===0){if(i.length===1)return;const a=p.cyan("export default"),l=p.cyan(`export { ${n} }`);if(i.length===0){let c=`${t} doesn't export any value, but it should have a ${a}`;n&&(c+=` or ${l}`),g(!1,c)}else o(i.length===2),R(!1,`${t} remove ${l} or ${a}`,{onlyOnce:!0})}else if(n){if(yt.some(a=>t.endsWith(a)))return;s.forEach(a=>{R(!1,`${t} should have only a single export: move ${p.cyan(`export { ${a} }`)} to +config.h.js or its own +${s}.js`,{onlyOnce:!0})})}else{const a=s.join(", ");g(!1,`${t} replace ${p.cyan(`export { ${a} }`)} with ${p.cyan(`export default { ${a} }`)}`)}}function N(e){const t={},n=(r,i,s,a)=>{t[r]={value:i,definedAt:{filePathToShowToUser:s,fileExportPathToShowToUser:[r,"default"].includes(a)?[]:[a]}},St(i,r,s)};return e.forEach(r=>{if(r.isValueFile){const{exportValues:i,importPath:s,configName:a}=r;a!=="client"&&Et(i,s,a),Object.entries(i).forEach(([l,c])=>{const u=l!=="default",f=u?l:r.configName;u&&f in t||n(f,c,s,l)})}else{const{configName:i,importPath:s,exportValue:a,exportName:l}=r;n(i,a,s,l)}}),t}function St(e,t,n){o(!n.includes("+config."))}const vt=[{is:e=>e===void 0,match:e=>e==="!undefined",serialize:()=>"!undefined",deserialize:()=>{}},{is:e=>e===1/0,match:e=>e==="!Infinity",serialize:()=>"!Infinity",deserialize:()=>1/0},{is:e=>e===-1/0,match:e=>e==="!-Infinity",serialize:()=>"!-Infinity",deserialize:()=>-1/0},{is:e=>typeof e=="number"&&isNaN(e),match:e=>e==="!NaN",serialize:()=>"!NaN",deserialize:()=>NaN},{is:e=>e instanceof Date,match:e=>e.startsWith("!Date:"),serialize:e=>"!Date:"+e.toISOString(),deserialize:e=>new Date(e.slice(6))},{is:e=>typeof e=="bigint",match:e=>e.startsWith("!BigInt:"),serialize:e=>"!BigInt:"+e.toString(),deserialize:e=>{if(typeof BigInt>"u")throw new Error("Your JavaScript environement does not support BigInt. Consider adding a polyfill.");return BigInt(e.slice(8))}},{is:e=>e instanceof RegExp,match:e=>e.startsWith("!RegExp:"),serialize:e=>"!RegExp:"+e.toString(),deserialize:e=>{e=e.slice(8);const t=e.match(/\/(.*)\/(.*)?/),n=t[1],r=t[2];return new RegExp(n,r)}},{is:e=>e instanceof Map,match:e=>e.startsWith("!Map:"),serialize:(e,t)=>"!Map:"+t(Array.from(e.entries())),deserialize:(e,t)=>new Map(t(e.slice(5)))},{is:e=>e instanceof Set,match:e=>e.startsWith("!Set:"),serialize:(e,t)=>"!Set:"+t(Array.from(e.values())),deserialize:(e,t)=>new Set(t(e.slice(5)))},{is:e=>typeof e=="string"&&e.startsWith("!"),match:e=>e.startsWith("!"),serialize:e=>"!"+e,deserialize:e=>e.slice(1)}];function X(e){const t=JSON.parse(e);return Se(t)}function Se(e){return typeof e=="string"?$t(e):(typeof e=="object"&&e!==null&&Object.entries(e).forEach(([t,n])=>{e[t]=Se(n)}),e)}function $t(e){for(const{match:t,deserialize:n}of vt)if(t(e))return n(e,X);return e}function ve(e){const t={};return Object.entries(e).forEach(([n,r])=>{const{valueSerialized:i,definedAt:s}=r;o(i),o(!t[n]),t[n]={value:X(i),definedAt:s}}),t}function bt(e,t){const n=e.map(i=>{const s={};{const{configValuesSerialized:f}=i,d=ve(f);Object.assign(s,d)}{const{configValuesImported:f}=i,d=N(f);Object.assign(s,d)}const{pageId:a,isErrorPage:l,routeFilesystem:c,loadConfigValuesAll:u}=i;return Pt(s),{pageId:a,isErrorPage:l,routeFilesystem:c,configValues:s,loadConfigValuesAll:u}}),r={configValues:{}};{const i=N(t.configValuesImported);Object.assign(r.configValues,i)}return{pageConfigs:n,pageConfigGlobal:r}}function Pt(e){const t="route",n=e[t];if(!n)return;const{value:r}=n,i=typeof r,s=ye("Config",t,n);g(i==="string"||A(r),`${s} has an invalid type '${i}': it should be a string or a function instead, see https://vike.dev/route`)}function Rt(e){o(y(e,"isGeneratedFile")),o(e.isGeneratedFile!==!1,"vike was re-installed(/re-built). Restart your app."),o(e.isGeneratedFile===!0,`\`isGeneratedFile === ${e.isGeneratedFile}\``),o(y(e,"pageFilesLazy","object")),o(y(e,"pageFilesEager","object")),o(y(e,"pageFilesExportNamesLazy","object")),o(y(e,"pageFilesExportNamesEager","object")),o(y(e.pageFilesLazy,".page")),o(y(e.pageFilesLazy,".page.client")||y(e.pageFilesLazy,".page.server")),o(y(e,"pageFilesList","string[]")),o(y(e,"pageConfigsSerialized")),o(y(e,"pageConfigGlobalSerialized"));const{pageConfigsSerialized:t,pageConfigGlobalSerialized:n}=e;ht(t),pt(n);const{pageConfigs:r,pageConfigGlobal:i}=bt(t,n),s={};x(e.pageFilesLazy).forEach(({filePath:l,pageFile:c,globValue:u})=>{c=s[l]=s[l]??c;const f=u;te(f),c.loadFile=async()=>{"fileExports"in c||(c.fileExports=await f(),tt(c))}}),x(e.pageFilesExportNamesLazy).forEach(({filePath:l,pageFile:c,globValue:u})=>{c=s[l]=s[l]??c;const f=u;te(f),c.loadExportNames=async()=>{if(!("exportNames"in c)){const d=await f();g("exportNames"in d,"You seem to be using Vite 2 but the latest vike versions only work with Vite 3"),o(y(d,"exportNames","string[]"),c.filePath),c.exportNames=d.exportNames}}}),x(e.pageFilesEager).forEach(({filePath:l,pageFile:c,globValue:u})=>{c=s[l]=s[l]??c;const f=u;o(v(f)),c.fileExports=f}),x(e.pageFilesExportNamesEager).forEach(({filePath:l,pageFile:c,globValue:u})=>{c=s[l]=s[l]??c;const f=u;o(v(f)),o(y(f,"exportNames","string[]"),c.filePath),c.exportNames=f.exportNames}),e.pageFilesList.forEach(l=>{s[l]=s[l]??we(l)});const a=Object.values(s);return a.forEach(({filePath:l})=>{o(!l.includes("\\"))}),{pageFiles:a,pageConfigs:r,pageConfigGlobal:i}}function x(e){const t=[];return Object.entries(e).forEach(([n,r])=>{o(ft.includes(n)),o(v(r)),Object.entries(r).forEach(([i,s])=>{const a=we(i);o(a.fileType===n),t.push({filePath:i,pageFile:a,globValue:s})})}),t}function te(e){o(A(e))}const b=k("setPageFiles.ts",{});function un(e){const{pageFiles:t,pageConfigs:n,pageConfigGlobal:r}=Rt(e);b.pageFilesAll=t,b.pageConfigs=n,b.pageConfigGlobal=r}async function fn(e,t){e?(o(!b.pageFilesGetter),o(t===void 0)):(o(b.pageFilesGetter),o(typeof t=="boolean"),(!b.pageFilesAll||!t)&&await b.pageFilesGetter());const{pageFilesAll:n,pageConfigs:r,pageConfigGlobal:i}=b;o(n&&r&&i);const s=Tt(n,r);return{pageFilesAll:n,allPageIds:s,pageConfigs:r,pageConfigGlobal:i}}function Tt(e,t){const n=e.filter(({isDefaultPageFile:s})=>!s).map(({pageId:s})=>s),r=B(n),i=t.map(s=>s.pageId);return[...r,...i]}function kt(e,t){return $e(e,t,!0)}function dn(e,t){return $e(e,t,!1)}function $e(e,t,n){const r=n?"CLIENT_ONLY":"SERVER_ONLY",i=e.filter(m=>m.isRelevant(t)&&m.fileType!==".page.route").sort(It(n,t)),s=m=>{const w=i.filter($=>$.pageId===t&&$.isEnv(m?"CLIENT_AND_SERVER":r));g(w.length<=1,`Merge the following files into a single file: ${w.map($=>$.filePath).join(" ")}`);const I=w[0];return o(I===void 0||!I.isDefaultPageFile),I},a=s(!1),l=s(!0),c=m=>i.filter(w=>w.isRendererPageFile&&w.isEnv(m?"CLIENT_AND_SERVER":r))[0],u=c(!1),f=c(!0),d=i.filter(m=>m.isDefaultPageFile&&!m.isRendererPageFile&&(m.isEnv(r)||m.isEnv("CLIENT_AND_SERVER")));return[a,l,...d,u,f].filter(Ze)}function It(e,t){const n=e?"CLIENT_ONLY":"SERVER_ONLY",r=-1,i=1,s=0;return(a,l)=>{if(!a.isDefaultPageFile&&l.isDefaultPageFile)return r;if(!l.isDefaultPageFile&&a.isDefaultPageFile)return i;{const c=a.isRendererPageFile,u=l.isRendererPageFile;if(!c&&u)return r;if(!u&&c)return i;o(c===u)}{const c=ne(t,a.filePath),u=ne(t,l.filePath);if(c<u)return r;if(u<c)return i;o(c===u)}{if(a.isEnv(n)&&l.isEnv("CLIENT_AND_SERVER"))return r;if(l.isEnv(n)&&a.isEnv("CLIENT_AND_SERVER"))return i}return s}}function ne(e,t){T(e),T(t);let n=0;for(;n<e.length&&n<t.length&&e[n]===t[n];n++);const r=e.slice(n),i=t.slice(n),s=r.split("/").length,a=i.split("/").length;return s+a}const _t="modulepreload",jt=function(e){return"/"+e},re={},gn=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=jt(s),s in re)return;re[s]=!0;const a=s.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let f=i.length-1;f>=0;f--){const d=i[f];if(d.href===s&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":_t,a||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),a)return new Promise((f,d)=>{u.addEventListener("load",f),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t()).catch(s=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s})};function Ct(){o(M())}function xt(){Ct()}function ie(e){const t=e/1e3;if(t<120){const n=se(t);return`${n} second${oe(n)}`}{const n=t/60,r=se(n);return`${r} minute${oe(r)}`}}function se(e){let t=e.toFixed(1);return t.endsWith(".0")&&(t=t.slice(0,-2)),t}function oe(e){return e==="1"?"":"s"}const Ot=k("utils/executeHook.ts",{userHookErrors:new Map});function Lt(e,t){const{hookName:n,hookFilePath:r,hookTimeout:{error:i,warning:s}}=t;let a,l;const c=new Promise((h,m)=>{a=w=>{u(),h(w)},l=w=>{u(),m(w)}}),u=()=>{f&&clearTimeout(f),d&&clearTimeout(d)},f=ae(s)&&setTimeout(()=>{R(!1,`The ${n}() hook defined by ${r} is slow: it's taking more than ${ie(s)} (https://vike.dev/hooksTimeout)`,{onlyOnce:!1})},s),d=ae(i)&&setTimeout(()=>{const h=Fe(`The ${n}() hook defined by ${r} timed out: it didn't finish after ${ie(i)} (https://vike.dev/hooksTimeout)`);l(h)},i);return(async()=>{try{const h=await e();a(h)}catch(h){v(h)&&Ot.userHookErrors.set(h,{hookName:n,hookFilePath:r}),l(h)}})(),c}function ae(e){return!!e&&e!==1/0}function hn(e){const t=window.location.href,{searchOriginal:n,hashOriginal:r,pathname:i}=Ne(t,"/");let s;return e!=null&&e.withoutHash?s=`${i}${n||""}`:s=`${i}${n||""}${r||""}`,o(s.startsWith("/")),s}xt();function pn(){const e="vike_pageContext",t=document.getElementById(e);g(t,`Couldn't find #${e} (which Vike automatically injects in the HTML): make sure it exists (i.e. don't remove it and make sure your HTML isn't malformed)`);const n=t.textContent;o(n);const r=X(n);return o(y(r,"_pageId","string")),q(r,{_hasPageContextFromServer:!0}),r}function U(e,t){if(!(t in e.exports))return null;const{hooksTimeout:n}=e.config,r=Ft(n,t),i=e.exports[t],s=e.exportsAll[t][0];if(o(s.exportValue===i),i===null)return null;const a=s.filePath;return o(a),o(!a.endsWith(" ")),be(i,{hookName:t,hookFilePath:a}),{hookFn:i,hookName:t,hookFilePath:a,hookTimeout:r}}function mn(e,t){const n=e.configValues[t];if(!n)return null;const r=n.value;if(!r)return null;const i=st(n);o(i),be(r,{hookName:t,hookFilePath:i});const s=Pe(t);return{hookFn:r,hookName:t,hookFilePath:i,hookTimeout:s}}function yn(e,t){U(e,t)}function be(e,{hookName:t,hookFilePath:n}){o(t&&n),o(!t.endsWith(")")),g(A(e),`Hook ${t}() defined by ${n} should be a function`)}function Ft(e,t){const n=Wt(e);if(n===!1)return{error:!1,warning:!1};const r=n[t],i=Pe(t);return(r==null?void 0:r.error)!==void 0&&(i.error=r.error),(r==null?void 0:r.warning)!==void 0&&(i.warning=r.warning),i}function Wt(e){if(e===void 0)return{};if(e===!1)return!1;g(v(e),`Setting ${p.cyan("hooksTimeout")} should be ${p.cyan("false")} or an object`);const t={};return Object.entries(e).forEach(([n,r])=>{if(r===!1){t[n]={error:!1,warning:!1};return}g(v(r),`Setting ${p.cyan(`hooksTimeout.${n}`)} should be ${p.cyan("false")} or an object`);const[i,s]=["error","warning"].map(a=>{const l=r[a];if(l===void 0||l===!1)return l;const c=`Setting ${p.cyan(`hooksTimeout.${n}.${a}`)} should be`;return g(typeof l=="number",`${c} ${p.cyan("false")} or a number`),g(l>0,`${c} a positive number`),l});t[n]={error:i,warning:s}}),t}function Pe(e){return e==="onBeforeRoute"?{error:5*1e3,warning:1*1e3}:e==="onPrerenderStart"||e==="onBeforePrerenderStart"||e==="onBeforePrerender"||e==="prerender"?{error:10*60*1e3,warning:30*1e3}:{error:30*1e3,warning:4*1e3}}function At(e){const t=Object.entries(e);for(const n in e)delete e[n];t.sort(([n],[r])=>Qe(n,r)).forEach(([n,r])=>{e[n]=r})}function Vt(e){zt(e),Dt(e)}function zt(e){ut(e._pageId,e._pageConfigs)&&o(y(e,"is404","boolean"))}function Dt(e){if(e.is404===void 0||e.is404===null)return;const t=e.pageProps||{};if(!v(t)){R(!1,"pageContext.pageProps should be an object",{showStackTrace:!0,onlyOnce:!0});return}t.is404=t.is404||e.is404,e.pageProps=t}const Nt="not-serializable",F=k("getPageContextProxyForUser.ts",{});function Ut(e){return o([!0,!1].includes(e._hasPageContextFromServer)),o([!0,!1].includes(e._hasPageContextFromClient)),new Proxy(e,{get(t,n){const r=e[n],i=JSON.stringify(n);return g(r!==Nt,`pageContext[${i}] couldn't be serialized and, therefore, is missing on the client-side. Check the server logs for more information.`),Ht(e,n),r}})}function Ht(e,t){if(F.prev===t||F.prev==="__v_raw"||(Jt(t),t in e)||Gt(t))return;const n=JSON.stringify(t);e._hasPageContextFromServer&&!e._hasPageContextFromClient&&g(!1,`pageContext[${n}] isn't available on the client-side because ${n} is missing in passToClient, see https://vike.dev/passToClient`)}const Bt=["then","toJSON"];function Gt(e){return!!(Bt.includes(e)||typeof e=="symbol"||typeof e!="string"||e.startsWith("__v_"))}function Jt(e){F.prev=e,window.setTimeout(()=>{F.prev=void 0},0)}function Yt(e,t){if(t){const i=e;o([!0,!1].includes(i.isHydration)),o([!0,!1,null].includes(i.isBackwardNavigation))}else{const i=e;o(i.isHydration===!0),o(i.isBackwardNavigation===null)}o("config"in e),o("configEntries"in e),o("exports"in e),o("exportsAll"in e),o("pageExports"in e),o(v(e.pageExports));const n=e.exports.Page;q(e,{Page:n}),Mt(e),At(e);const r=Ut(e);return Vt(e),r}function Mt(e){Object.entries(e).forEach(([t,n])=>{delete e[t],e[t]=n})}function qt(e,t){const n=e.filter(i=>i.pageId===t);return o(n.length<=1),n[0]??null}async function Xt(e,t){if("isAllLoaded"in e&&!t)return e;const n=await e.loadConfigValuesAll();{const{configValuesImported:r}=n,i=N(r);Object.assign(e.configValues,i)}{const{configValuesSerialized:r}=n,i=ve(r);Object.assign(e.configValues,i)}return q(e,{isAllLoaded:!0}),e}const Re="__whileFetchingAssets";async function En(e,t){const n=kt(t._pageFilesAll,e),r=qt(t._pageConfigs,e);let i;const s=!1;try{i=(await Promise.all([r&&Xt(r,s),...n.map(m=>{var w;return(w=m.loadFile)==null?void 0:w.call(m)})]))[0]}catch(h){throw Kt(h)&&Object.assign(h,{[Re]:!0}),h}const{config:a,configEntries:l,exports:c,exportsAll:u,pageExports:f}=ot(n,i);return{config:a,configEntries:l,exports:c,exportsAll:u,pageExports:f,_pageFilesLoaded:n}}function wn(e){return e?e[Re]===!0:!1}function Kt(e){return e instanceof Error?["Failed to fetch dynamically imported module","error loading dynamically imported module","Importing a module script failed","error resolving module specifier","failed to resolve module"].some(n=>e.message.toLowerCase().includes(n.toLowerCase())):!1}async function Sn(e,t){const n=Yt(e,t);let r=null,i;r=U(e,"render"),i="render";{const l=U(e,"onRenderClient");l&&(r=l,i="onRenderClient")}if(!r){const l=Qt(e);if(o(l),e._pageConfigs.length>0)g(!1,`No onRenderClient() hook defined for URL '${l}', but it's needed, see https://vike.dev/onRenderClient`);else{const c=e._pageFilesLoaded.filter(f=>f.fileType===".page.client");let u;c.length===0?u="No file `*.page.client.*` found for URL "+l:u="One of the following files should export a render() hook: "+c.map(f=>f.filePath).join(" "),g(!1,u)}}o(r);const s=r.hookFn;o(i);const a=await Lt(()=>s(n),r);g(a===void 0,`The ${i}() hook defined by ${r.hookFilePath} isn't allowed to return a value`)}function Qt(e){let t;try{t=e.urlPathname??e.urlOriginal}catch{}return t=t??window.location.href,t}export{Lt as A,Pe as B,tn as C,cn as D,Yt as E,ln as F,X as G,Fe as H,on as I,it as J,V as K,mn as L,Ye as M,he as N,kt as O,qt as P,Xe as Q,an as R,sn as S,wn as T,en as U,gn as _,pn as a,g as b,fn as c,R as d,rn as e,Zt as f,hn as g,Sn as h,yn as i,A as j,o as k,En as l,ye as m,Ct as n,q as o,p,nn as q,v as r,un as s,k as t,y as u,dn as v,Ne as w,L as x,M as y,U as z};