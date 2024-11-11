import{a2 as t,d as e,e as r,b as n,f as s,g as a,i as o,m as i,n as c,V as u,p as l}from"./index-DXU0MGIt.js";import{_ as f}from"./_plugin-vue_export-helper.BCo6x5W8.js";class p{constructor(t){this._reject=null,this.promise=new Promise(((e,r)=>{t(e,r),this._reject=r}))}abort(t){this._reject&&this._reject(t)}then(t,e){return this.promise.then(t,e)}catch(t){return this.promise.catch(t)}}function g(t){return Number.isNaN(Number(t))?`${t}`:`${t}px`}function m(t){return"[object Object]"===Object.prototype.toString.call(t)||"object"==typeof t}function y(t){const e=Object.prototype.toString.call(t).match(/\[object (\w+)\]/);return e&&e.length?e[1].toLowerCase():""}const h=t=>null!=t;function d(t,e,r){const n=(t<<16|e<<8|r).toString(16);return"#"+"0".repeat(Math.max(0,6-n.length))+n}function b(t){const e=[];for(let r=1;r<7;r+=2)e.push(parseInt("0x"+t.slice(r,r+2),16));return e}const j=(t,e,r=2)=>{const n=b(t),s=b(e),a=(s[0]-n[0])/r,o=(s[1]-n[1])/r,i=(s[2]-n[2])/r,c=[];for(let u=0;u<r;u++)c.push(d(parseInt(String(a*u+n[0])),parseInt(String(o*u+n[1])),parseInt(String(i*u+n[2]))));return c},w=(t,e,r)=>Math.min(Math.max(t,e),r),v=(t,e)=>{if(t===e)return!0;if(!Array.isArray(t)||!Array.isArray(e))return!1;if(t.length!==e.length)return!1;for(let r=0;r<t.length;++r)if(t[r]!==e[r])return!1;return!0},S=(t,e=2)=>{let r=t.toString();for(;r.length<e;)r="0"+r;return r},A={id:1e3};function x(e,r,n){return new Promise(((r,s)=>{let a=null;a=n?t().in(n):t(),a.select(e).boundingClientRect((t=>{t?r(t):s(new Error("No nodes found"))})).exec()}))}function _(t){return t.replace(/-(\w)/g,((t,e)=>e.toUpperCase()))}function N(t){return"function"==typeof Array.isArray?Array.isArray(t):"[object Array]"===Object.prototype.toString.call(t)}function k(t){return"function"===y(t)}function C(t){return!(!m(t)||!h(t))&&(k(t.then)&&k(t.catch))}function O(t){return N(t)?t.filter((function(t){return null!=t&&""!==t})).map((function(t){return O(t)})).join(";"):"string"===y(t)?t:m(t)?Object.keys(t).filter((function(e){return null!=t[e]&&""!==t[e]})).map((function(e){return[(r=e,r.replace(/[A-Z]/g,(function(t){return"-"+t})).toLowerCase()),t[e]].join(":");var r})).join(";"):""}const I=(t=()=>{})=>new p((e=>{const r=setInterval((()=>{clearInterval(r),e(!0),t()}),1e3/30)}));function $(t,e=new Map){if(null===t||"object"!=typeof t)return t;if(M(t))return new Date(t.getTime());if(t instanceof RegExp)return new RegExp(t.source,t.flags);if(t instanceof Error){const e=new Error(t.message);return e.stack=t.stack,e}if(e.has(t))return e.get(t);const r=Array.isArray(t)?[]:{};e.set(t,r);for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=$(t[n],e));return r}function E(t,e){return Object.keys(e).forEach((r=>{const n=t[r],s=e[r];m(n)&&m(s)?E(n,s):t[r]=s})),t}function z(t,e,r={}){let n,s,a,o=null;const i=!!h(r.leading)&&r.leading,c=!h(r.trailing)||r.trailing;function u(){void 0!==n&&(a=t.apply(s,n),n=void 0)}function l(){o=setTimeout((()=>{o=null,c&&u()}),e)}return function(...t){return n=t,s=this,null===o?(i&&u(),l()):c&&(null!==o&&(clearTimeout(o),o=null),l()),a}}const P=(t,e)=>{const r=e.split(".");try{return r.reduce(((t,e)=>null!=t?t[e]:void 0),t)}catch(n){return}},M=t=>"[object Date]"===Object.prototype.toString.call(t)&&!Number.isNaN(t.getTime());const T=[Number,String],R=t=>({type:t,required:!0}),q=()=>({type:Array,default:()=>[]}),B=t=>({type:Boolean,default:t}),D=t=>({type:Number,default:t}),L=t=>({type:T,default:t}),G=t=>({type:String,default:t}),H={customStyle:G(""),customClass:G("")},U=f(e({name:"wd-icon",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...H,name:R(String),color:String,size:String,classPrefix:G("wd-icon")},emits:["click","touch"],setup(t,{emit:e}){const f=t,p=e,m=r((()=>{return h(f.name)&&(t=f.name,/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg|image)/i.test(t));var t})),y=r((()=>{const t=f.classPrefix;return`${t} ${f.customClass} ${m.value?"wd-icon--image":t+"-"+f.name}`})),d=r((()=>{const t={};return f.color&&(t.color=f.color),f.size&&(t["font-size"]=g(f.size)),`${O(t)}; ${f.customStyle}`}));function b(t){p("click",t)}return(t,e)=>{const r=u,f=l;return n(),s(f,{onClick:b,class:i(y.value),style:c(d.value)},{default:a((()=>[m.value?(n(),s(r,{key:0,class:"wd-icon__image",src:t.name},null,8,["src"])):o("",!0)])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-16dab615"]]);export{p as A,_ as B,P as C,U as _,G as a,H as b,C as c,D as d,L as e,h as f,j as g,g as h,m as i,A as j,q as k,N as l,B as m,y as n,O as o,$ as p,w as q,I as r,v as s,R as t,z as u,S as v,k as w,T as x,x as y,E as z};
