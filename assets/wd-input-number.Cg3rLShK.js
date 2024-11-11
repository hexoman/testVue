import{e,r as a,w as t,d as s,g as u,h as i,k as n,p as l,l as o,n as d,j as r,q as c,I as p}from"./index-BHzFND5V.js";import{b as m,t as b,x as f,d as v,m as _,e as h,a as w,_ as N,s as x,f as y,u as I}from"./wd-icon.EUjReaQE.js";import{_ as M}from"./_plugin-vue_export-helper.BCo6x5W8.js";const g=M(e({name:"wd-input-number",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...m,modelValue:b(f),min:v(1),max:v(Number.MAX_SAFE_INTEGER),step:v(1),stepStrictly:_(!1),precision:v(0),disabled:_(!1),disableInput:_(!1),disableMinus:_(!1),disablePlus:_(!1),withoutInput:_(!1),inputWidth:h(36),allowNull:_(!1),placeholder:w("")},emits:["focus","blur","change","update:modelValue"],setup(e,{emit:m}){const b=e,f=m,v=a(!1),_=a(!1),h=a("");function w(e){const{disabled:a,min:t,max:s,step:u}=b;v.value=a||Number(e)<=t||S(e,-u)<t,_.value=a||Number(e)>=s||S(e,u)>s}function M(e){return Number(parseFloat(""+Math.round(e*Math.pow(10,b.precision))/Math.pow(10,b.precision)).toFixed(b.precision))}function g(e){const a=function(e){if(void 0===e)return 0;const a=e.toString(),t=a.indexOf(".");let s=0;return-1!==t&&(s=a.length-t-1),s}(b.step),t=Math.pow(10,a);return Math.round(Number(e)/b.step)*t*b.step/t}function V(e,a=!0){!b.allowNull||y(e)&&""!==e?(b.stepStrictly&&(e=g(e)),!e&&0!==e||void 0===b.precision||(e=M(Number(e))),Number(e)>b.max&&(e=M(b.max)),Number(e)<b.min&&(e=M(b.min)),P(e,a)):P(e,a)}function S(e,a){if(e=Number(e),isNaN(e))return b.min;const t=Math.pow(10,b.precision);return M((e*t+a*t)/t)}function k(){if(v.value||b.disableMinus)return;P(S(h.value,-b.step))}function C(){if(_.value||b.disablePlus)return;P(S(h.value,b.step))}function F(e){P(e.detail.value||"")}function j(e){f("focus",e.detail)}function E(){const e=W(h.value);x(h.value,e)||V(e),f("blur",{value:e})}function P(e,a=!0){x(h.value,e)||(h.value=e,a&&f("update:modelValue",h.value),a&&f("change",{value:e}))}function W(e){return!b.allowNull||y(e)&&""!==e?(e=Number(e),isNaN(e)&&(e=b.min),b.stepStrictly&&(e=g(e)),void 0!==b.precision&&(e=e.toFixed(b.precision)),Number(e)):""}return t((()=>b.modelValue),(e=>{h.value=e,w(e)}),{immediate:!0,deep:!0}),t([()=>b.max,()=>b.min],(()=>{I((()=>{const e=W(h.value);x(h.value,e)||V(e),w(e)}),30)()}),{immediate:!0,deep:!0}),t((()=>b.disabled),(e=>{v.value=e,_.value=e}),{immediate:!0,deep:!0}),(e,a)=>{const t=c,m=p;return s(),u(t,{class:l(`wd-input-number ${e.customClass} ${e.disabled?"is-disabled":""} ${e.withoutInput?"is-without-input":""}`),style:d(e.customStyle)},{default:i((()=>[n(t,{class:l("wd-input-number__action "+(v.value||e.disableMinus?"is-disabled":"")),onClick:k},{default:i((()=>[n(N,{name:"decrease","custom-class":"wd-input-number__action-icon"})])),_:1},8,["class"]),e.withoutInput?r("",!0):(s(),u(t,{key:0,class:"wd-input-number__inner",onClick:a[1]||(a[1]=o((()=>{}),["stop"]))},{default:i((()=>[n(m,{class:"wd-input-number__input",style:d(""+(e.inputWidth?"width: "+e.inputWidth:"")),type:"digit",disabled:e.disabled||e.disableInput,modelValue:h.value,"onUpdate:modelValue":a[0]||(a[0]=e=>h.value=e),placeholder:e.placeholder,onInput:F,onFocus:j,onBlur:E},null,8,["style","disabled","modelValue","placeholder"]),n(t,{class:"wd-input-number__input-border"})])),_:1})),n(t,{class:l("wd-input-number__action "+(_.value||e.disablePlus?"is-disabled":"")),onClick:C},{default:i((()=>[n(N,{name:"add","custom-class":"wd-input-number__action-icon"})])),_:1},8,["class"])])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-d3b8fc32"]]);export{g as _};