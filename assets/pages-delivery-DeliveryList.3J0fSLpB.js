import{r as e,S as t,f as o,o as l,x as a,y as s,z as u,B as r,c as i,k as n,h as c,F as d,s as p,q as m,d as v,l as h,m as f,t as g,g as C,j as D,A as y,C as _,v as S,D as P,E as w,G as b,H as I,J as k}from"./index-BHzFND5V.js";import{_ as H}from"./wd-status-tip.CcdtiQho.js";import{o as A,q as N,r as L,s as j}from"./uni-app.es.wfT66NnM.js";import{_ as x}from"./wd-input-number.Cg3rLShK.js";import{_ as O}from"./wd-swipe-action.CEelKgkL.js";import{n as V}from"./index.D38fHACq.js";import{S as M}from"./SearchListDialog.CxttqgSs.js";import{o as T,E as U,e as B}from"./eventBus.4pzzkI7_.js";import{_ as E}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./wd-icon.EUjReaQE.js";import"./wd-search.DSfClmZp.js";const J=E({components:{SearchListDialogvue:M},setup(){const u=e(!1),r=e(!1),i=e(!1),n=e([]),c=e([]),d=e([]),m=e({}),v=e({}),h=e(""),f=e([]);var g="";const C=e("2"),D=e("1"),y=JSON.parse(t.getItem("userInfo"));e(0);const _=o((()=>{let e=f.value.map((e=>e.ProductName));return e=e.join(","),e}));A((e=>{}));const S=e=>{let t=JSON.parse(e.data);f.value=t;let o="";for(let l=0;l<t.length;l++)o+=t[l].ProductInfoID+","+t[l].ProductName+","+t[l].Amount+","+t[l].UseUnit+","+t[l].PurchasePrice+","+t[l].DefaultSupplierID+","+t[l].CategoryCode+","+t[l].CusCategoryName+"^";o=o.substring(0,o.length-1),console.log(o),h.value=o},P=()=>{let e="",t=f.value;for(let o=0;o<t.length;o++)e+=t[o].ProductInfoID+","+t[o].ProductName+","+t[o].Amount+","+t[o].UseUnit+","+t[o].PurchasePrice+","+t[o].DefaultSupplierID+","+t[o].CategoryCode+","+t[o].CusCategoryName+"^";e=e.substring(0,e.length-1),h.value=e},w=e({warehouse:null,department:null,product:null});l((async()=>{T(U.selectProductEventToHome,S),T(U.submitSuccessEvent,b),I(""),k("")}));const b=()=>{g="",h.value=""},I=e=>{let t={HRCode:y.Account,IsStorehouse:"1",SearchValue:e};a({title:"加载中..."}),N(t).then((e=>{s(),console.log("rrrr:",e)})).catch((e=>{s(),console.error("getWarehouses error:",e)}))},k=e=>{let o={HRCode:JSON.parse(t.getItem("userInfo")).Account,IsStorehouse:"0",SearchValue:e};a({title:"加载中..."}),N(o).then((e=>{s(),0!==e.data.length&&(c.value=e.data[0])})).catch((e=>{s(),console.error("getWarehouses error:",e)}))};return{form:w,productList:f,showStoreHousePopup:u,showApplyHousePopup:r,showProductPopup:i,storeHouseList:n,departmentList:c,productNameList:d,housePopTitle:"选择库房",departmentPopTitle:"选择科室",productName:_,deliveryMethod:C,receiptMethod:D,deliveryOptions:[{label:"配送",value:"1"},{label:"不配送",value:"2"}],receiptOptions:[{label:"延时收货",value:"0"},{label:"即时收货",value:"1"}],onDeliveryMethodChange:e=>{C.value=e.detail.value},onReceiptMethodChange:e=>{D.value=e.detail.value},onStoreHouseSearch:e=>{I(e)},handleDeleteClick:e=>{let t=f.value.findIndex((t=>t.ProductInfoID===e.ProductInfoID));t>-1&&(f.value.splice(t,1),P())},handleNumberChange:e=>{console.log("handleNumberChange:",e.Amount);let t=f.value.findIndex((t=>t.ProductInfoID===e.ProductInfoID));t>-1&&(f.value[t].Amount=e.Amount,P())},toBatchList:()=>{""!==g?V("/pages/batch/BatchConfirm",{deliveryID:g}):p({icon:"none",title:"暂时没有整单数据"})},submitForm:()=>{console.log("整单确认:",w.value)},selectProduct:()=>{""!==m.value.DeptCode&&void 0!==m.value.DeptCode?""!==v.value.DeptCode&&void 0!==v.value.DeptCode?V("/pages/product/ProductSearchList",{deptCode:v.value.DeptCode,houseCode:m.value.DeptCode,sourceFrom:"home",selectedProducts:JSON.stringify(f.value)}):p({icon:"none",title:"请先选择科室"}):p({icon:"none",title:"请先选择库房"})},saveDelivery:()=>{if(""===m.value.DeptCode||void 0===m.value.DeptCode)return void p({icon:"none",title:"请先选择库房"});if(""===v.value.DeptCode||void 0===v.value.DeptCode)return void p({icon:"none",title:"请先选择科室"});if(0===h.value.length||void 0===h.value)return void p({icon:"none",title:"请选择产品"});if(""==C.value||void 0===C.value)return void p({icon:"none",title:"请选择配送方式"});if(""==D.value||void 0===D.value)return void p({icon:"none",title:"请选择收获方式"});let e={DeliveryID:g,DeptCode:v.value.DeptCode,Distribution:C.value,IsLineTime:D.value,StorehouseID:m.value.DeptCode,UseTyp:"0",Details:h.value,HRCode:y.Account};console.log("saveDelivery:",e),a({title:"保存中..."}),j(e).then((e=>{s(),0==e.code&&(B(U.saveSuccessEvent,{}),console.log("saveDelivery success:",e.data[1][0]),g=e.data[1][0].DeliveryID_out,f.value=[],h.value="")})).catch((e=>{s(),console.error("saveDelivery error:",e)}))},toHistoryList:()=>{V("/pages/delivery/DeliveryHistory",{})},showStoreHousePopView:()=>{u.value=!u.value},showApplyHousePopView:()=>{r.value=!r.value},showProductPopView:()=>{i.value=!i.value},handleStoreHouseSelect:e=>{u.value=!1,m.value=e,w.value.warehouse=e.DepartmentName},handleApplyHouseSelect:e=>{r.value=!1,v.value=e,w.value.department=e.DepartmentName},handleProductSelect:e=>{i.value=!1,w.value.product=e}}}},[["render",function(e,t,o,l,a,s){const p=_,A=S,N=m,j=I,V=k,M=P,T=L(u("wd-status-tip"),H),U=L(u("wd-input-number"),x),B=L(u("wd-swipe-action"),O),E=w,J=b,R=r("SearchListDialogvue");return v(),i(d,null,[n(N,{class:"page-wraper"},{default:c((()=>[n(N,{class:"page-header"},{default:c((()=>[n(M,{onSubmit:h(l.submitForm,["prevent"]),class:"header"},{default:c((()=>[n(N,{class:"form-item"},{default:c((()=>[n(p,{class:"form-item-title"},{default:c((()=>[f("供货库房:")])),_:1}),n(A,{class:"form-item-value",onClick:l.showStoreHousePopView},{default:c((()=>[f(g(l.form.warehouse||"请选择"),1)])),_:1},8,["onClick"])])),_:1}),n(N,{class:"form-item"},{default:c((()=>[n(p,{class:"form-item-title"},{default:c((()=>[f("申请科室:")])),_:1}),n(A,{class:"form-item-value",onClick:l.showApplyHousePopView},{default:c((()=>[f(g(l.form.department||"请选择"),1)])),_:1},8,["onClick"])])),_:1}),""===l.productName?(v(),C(N,{key:0,class:"form-item"},{default:c((()=>[n(p,{class:"form-item-title"},{default:c((()=>[f("产品名称:")])),_:1}),n(A,{class:"form-item-value",onClick:l.selectProduct},{default:c((()=>[f("请选择")])),_:1},8,["onClick"])])),_:1})):D("",!0),n(N,{class:"form-item"},{default:c((()=>[n(p,{class:"form-item-title"},{default:c((()=>[f("配送方式:")])),_:1}),(v(!0),i(d,null,y(l.deliveryOptions,((e,t)=>(v(),C(V,{onChange:l.onDeliveryMethodChange,key:t},{default:c((()=>[n(j,{class:"form-item-radio",value:e.value,checked:l.deliveryMethod===e.value},{default:c((()=>[f(g(e.label),1)])),_:2},1032,["value","checked"])])),_:2},1032,["onChange"])))),128))])),_:1}),n(N,{class:"form-item"},{default:c((()=>[n(p,{class:"form-item-title"},{default:c((()=>[f("收货方式:")])),_:1}),(v(!0),i(d,null,y(l.receiptOptions,((e,t)=>(v(),C(V,{onChange:l.onReceiptMethodChange,key:t},{default:c((()=>[n(j,{class:"form-item-radio",value:e.value,checked:l.receiptMethod===e.value},{default:c((()=>[f(g(e.label),1)])),_:2},1032,["value","checked"])])),_:2},1032,["onChange"])))),128))])),_:1})])),_:1},8,["onSubmit"])])),_:1}),0===l.productList.length?(v(),C(T,{key:0,image:"search",tip:"当前无添加的产品"})):D("",!0),n(N,{class:"page-main"},{default:c((()=>[n(E,{class:"page-main-scroll",style:{height:"100%"},"scroll-y":!0,"scroll-with-animation":!0},{default:c((()=>[(v(!0),i(d,null,y(l.productList,(e=>(v(),C(N,{key:e.id,class:"page-main-list"},{default:c((()=>[n(B,null,{right:c((()=>[n(N,{style:{height:"100%"}},{default:c((()=>[n(N,{class:"delete-button",style:{background:"white",color:"red"},onClick:t=>l.handleDeleteClick(e)},{default:c((()=>[f(" 删除")])),_:2},1032,["onClick"])])),_:2},1024)])),default:c((()=>[n(N,{style:{"border-bottom":"1px solid #eee"}},{default:c((()=>[n(N,{class:"product-item",onClick:l.selectProduct},{default:c((()=>[n(N,{class:"row"},{default:c((()=>[n(A,{class:"title"},{default:c((()=>[f("产品ID:")])),_:1}),n(A,{class:"value"},{default:c((()=>[f(g(e.ProductInfoID),1)])),_:2},1024)])),_:2},1024),n(N,{class:"row"},{default:c((()=>[n(A,{class:"title"},{default:c((()=>[f("产品名称: ")])),_:1}),n(A,{class:"value"},{default:c((()=>[f(g(e.ProductName),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"]),n(N,{style:{display:"flex","justify-content":"flex-end","align-items":"center",padding:"0 10px 10px 0"}},{default:c((()=>[n(U,{modelValue:e.Amount,"onUpdate:modelValue":t=>e.Amount=t,min:1,onChange:t=>l.handleNumberChange(e)},null,8,["modelValue","onUpdate:modelValue","onChange"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),n(N,{class:"page-footer-h5"},{default:c((()=>[n(J,{class:"save-button",onClick:l.saveDelivery},{default:c((()=>[f("保存")])),_:1},8,["onClick"]),n(J,{class:"history-button",onClick:l.toBatchList},{default:c((()=>[f("整单确认")])),_:1},8,["onClick"])])),_:1})])),_:1}),n(R,{title:l.housePopTitle,visible:l.showStoreHousePopup,items:l.storeHouseList,onSelect:l.handleStoreHouseSelect,onClose:t[0]||(t[0]=e=>l.showStoreHousePopup=!1),onOnSearch:l.onStoreHouseSearch},null,8,["title","visible","items","onSelect","onOnSearch"]),n(R,{title:l.departmentPopTitle,visible:l.showApplyHousePopup,items:l.departmentList,onSelect:l.handleApplyHouseSelect,onClose:t[1]||(t[1]=e=>l.showApplyHousePopup=!1),onOnSearch:e.onDepartmentSearch},null,8,["title","visible","items","onSelect","onOnSearch"])],64)}],["__scopeId","data-v-c9abb429"]]);export{J as default};