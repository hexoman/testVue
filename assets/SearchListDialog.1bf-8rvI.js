import{r as e,e as a,x as s,b as l,f as t,g as o,j as c,l as i,t as n,c as r,y as u,F as m,i as p,p as d,D as v}from"./index-9AxPtOFn.js";import{_ as f}from"./wd-icon.CAl56Gk6.js";import{r as _}from"./uni-app.es.B-45xLGt.js";import{_ as h}from"./wd-search.ZFAT4ore.js";import{_ as g}from"./_plugin-vue_export-helper.BCo6x5W8.js";const w=g({__name:"SearchListDialog",props:{visible:Boolean,items:Array,title:String},emits:["select","close","onSearch"],setup(g,{emit:w}){const x=g,y=w,C=e(""),j=a((()=>x.title)),k=a((()=>C.value?x.items.filter((e=>e.PinYin.includes(C.value)||e.PinYin.toLowerCase().includes(C.value.toLowerCase())||e.DepartmentName.includes(C.value))):x.items)),S=()=>{C.value=""},b=()=>{console.log("onSearch",C.value)},D=()=>{y("close")};return(e,a)=>{const w=d,x=_(s("wd-icon"),f),L=_(s("wd-search"),h),V=v;return g.visible?(l(),t(w,{key:0,class:"popup"},{default:o((()=>[c(w,{class:"overlay",onClick:D}),c(w,{class:"content"},{default:o((()=>[c(w,{class:"title-bar"},{default:o((()=>[i(n(j.value)+" ",1),c(x,{name:"close-normal",class:"close-button",onClick:D,size:"22px"})])),_:1}),c(w,{class:"search-container"},{default:o((()=>[c(L,{placeholder:"可输入拼音首字母快速搜索",modelValue:C.value,"onUpdate:modelValue":a[0]||(a[0]=e=>C.value=e),"hide-cancel":"",onSearch:b,onClear:S,maxlength:"100",style:{height:"40px"}},null,8,["modelValue"])])),_:1}),c(w,{class:"list-container"},{default:o((()=>[c(V,{"scroll-y":"",class:"scroll-view"},{default:o((()=>[(l(!0),r(m,null,u(k.value,((e,a)=>(l(),t(w,{key:a,class:"list-item",onClick:a=>(e=>{y("select",e),C.value=""})(e)},{default:o((()=>[i(n(e.DepartmentName),1)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])),_:1})])),_:1})):p("",!0)}}},[["__scopeId","data-v-253fac8a"]]);export{w as S};
