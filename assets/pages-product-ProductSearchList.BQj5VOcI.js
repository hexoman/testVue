import{r as e,o as a,L as t,s as l,v as o,x as s,f as u,g as n,p as c,b as d,j as r,c as i,y as m,F as f,n as h,l as p,A as v,W as _,D as g,t as C,Z as k,q as y}from"./index-ocBV1Jcm.js";import{_ as A}from"./wd-search.DbcZ-QIr.js";import{S as I,o as P,h as w,i as x,r as D}from"./uni-app.es.HavBLUR1.js";import{_ as S}from"./wd-input-number.BFQ05it0.js";import{e as j,E as N}from"./eventBus.B4SEjQ6A.js";import{_ as V}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./wd-icon.BMHP6ZQG.js";const b=V({__name:"ProductSearchList",setup(V){const b=e(""),U=e(""),E=JSON.parse(I.getItem("userInfo")),J=e(""),O=e(0),L=e([]);var T="",q=[];const B=e(0);P((e=>{console.log("options",e),b.value=e.deptCode,U.value=e.houseCode,T=e.sourceFrom,null==e.selectedProducts&&null==e.selectedProducts||(q=JSON.parse(e.selectedProducts))})),w((()=>{})),a((e=>{F();const a=t();O.value=a.safeAreaInsets.bottom,B.value=O.value+20}));const F=()=>{let e={DeptCode:b.value,StoreCode:U.value,SearchValue:J.value,HRCode:E.Account,UseType:"0",Distribution:"0"};l({title:"加载中..."}),x(e).then((e=>{o(),0==e.code&&(L.value=e.data[0],L.value.forEach((e=>{0==e.Amount&&(e.Amount=1),q.length>0&&q.map((a=>{e.ProductInfoID==a.ProductInfoID&&(e.checked=!0,e.Amount=a.Amount)}))})))})).catch((e=>{o(),console.error("queryList error:",e)}))},H=()=>{J.value="",F()},R=e=>{L.value[e].checked=!L.value[e].checked},W=()=>{console.log("搜索关键字:",J.value),F()},Z=()=>{const e=L.value.filter((e=>e.checked));let a=!1;e.forEach((e=>{e.Amount<=0&&(a=!0)})),a?v({icon:"none",title:"申请数量不能为0"}):("home"==T?j(N.selectProductEventToHome,{data:JSON.stringify(e)}):"recentDetail"==T&&j(N.selectProductEventToRecentDetail,{data:JSON.stringify(e)}),_({delta:1}))};return(e,a)=>{const t=D(s("wd-search"),A),l=c,o=k,v=y,_=D(s("wd-input-number"),S),I=g;return d(),u(l,{class:"container"},{default:n((()=>[r(l,{class:"search-bar"},{default:n((()=>[r(t,{placeholder:"搜索产品",modelValue:J.value,"onUpdate:modelValue":a[0]||(a[0]=e=>J.value=e),"hide-cancel":"",onSearch:W,onClear:H,onBlur:W,maxlength:"100",style:{height:"40px"}},null,8,["modelValue"])])),_:1}),r(l,{class:"document-list"},{default:n((()=>[(d(!0),i(f,null,m(L.value,((e,a)=>(d(),u(l,{key:a,class:"document-item"},{default:n((()=>[r(l,{class:"document-details"},{default:n((()=>[r(o,{checked:e.checked,onClick:e=>R(a)},null,8,["checked","onClick"]),r(l,{class:"right"},{default:n((()=>[r(l,{onClick:e=>R(a)},{default:n((()=>[r(v,{class:"new-item"},{default:n((()=>[p("产品名称："+C(e.ProductName),1)])),_:2},1024),r(v,{class:"new-item"},{default:n((()=>[p("领用单位："+C(e.UseUnitName),1)])),_:2},1024),r(v,{class:"new-item"},{default:n((()=>[p("单价："+C(e.PurchasePrice),1)])),_:2},1024),r(v,{class:"new-item"},{default:n((()=>[p("供应商："+C(e.DefaultSupplierName),1)])),_:2},1024),r(v,{class:"new-item"},{default:n((()=>[p("类别代码："+C(e.CategoryCode),1)])),_:2},1024),r(v,{class:"new-item"},{default:n((()=>[p("类别名称："+C(e.CusCategoryName),1)])),_:2},1024)])),_:2},1032,["onClick"]),r(l,{style:{display:"flex","text-align":"right"}},{default:n((()=>[r(_,{modelValue:e.Amount,"onUpdate:modelValue":a=>e.Amount=a,min:1,onChange:a=>(e=>{console.log("handleNumberChange:",e.Amount);let a=L.value.findIndex((a=>a.ProductInfoID===e.ProductInfoID));a>-1&&(L.value[a].Amount=e.Amount)})(e)},null,8,["modelValue","onUpdate:modelValue","onChange"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1}),r(l,{class:"footer"},{default:n((()=>[r(I,{style:h({height:`${B.value}px`}),onClick:Z},{default:n((()=>[p("确定")])),_:1},8,["style"])])),_:1})])),_:1})}}},[["__scopeId","data-v-999f5eca"]]);export{b as default};
