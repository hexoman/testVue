import{r as e,e as t,o,s as l,v as a,x as s,z as u,c as r,j as i,g as n,F as c,A as d,p,b as v,k as m,l as h,t as f,f as g,i as C,y as D,B as y,q as S,C as _,S as P,D as w,E as b,G as I}from"./index-ocBV1Jcm.js";import{_ as k}from"./wd-status-tip.BSaN_nvR.js";import{S as H,o as A,q as N,r as L,s as j}from"./uni-app.es.HavBLUR1.js";import{_ as x}from"./wd-input-number.BFQ05it0.js";import{_ as O}from"./wd-swipe-action.DUXxCn0l.js";import{n as V}from"./index.BeurTFNn.js";import{S as M}from"./SearchListDialog.VSmgmqWF.js";import{o as T,E as U,e as B}from"./eventBus.B4SEjQ6A.js";import{_ as E}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./wd-icon.BMHP6ZQG.js";import"./wd-search.DbcZ-QIr.js";const R=E({components:{SearchListDialogvue:M},setup(){const s=e(!1),u=e(!1),r=e(!1),i=e([]),n=e([]),c=e([]),p=e({}),v=e({}),m=e(""),h=e([]);var f="";const g=e("2"),C=e("1"),D=JSON.parse(H.getItem("userInfo"));e(0);const y=t((()=>{let e=h.value.map((e=>e.ProductName));return e=e.join(","),e}));A((e=>{}));const S=e=>{let t=JSON.parse(e.data);h.value=t;let o="";for(let l=0;l<t.length;l++)o+=t[l].ProductInfoID+","+t[l].ProductName+","+t[l].Amount+","+t[l].UseUnit+","+t[l].PurchasePrice+","+t[l].DefaultSupplierID+","+t[l].CategoryCode+","+t[l].CusCategoryName+"^";o=o.substring(0,o.length-1),console.log(o),m.value=o},_=()=>{let e="",t=h.value;for(let o=0;o<t.length;o++)e+=t[o].ProductInfoID+","+t[o].ProductName+","+t[o].Amount+","+t[o].UseUnit+","+t[o].PurchasePrice+","+t[o].DefaultSupplierID+","+t[o].CategoryCode+","+t[o].CusCategoryName+"^";e=e.substring(0,e.length-1),m.value=e},P=e({warehouse:null,department:null,product:null});o((async()=>{T(U.selectProductEventToHome,S),T(U.submitSuccessEvent,w),b(""),I("")}));const w=()=>{f="",m.value=""},b=e=>{let t={HRCode:D.Account,IsStorehouse:"1",SearchValue:e};l({title:"加载中..."}),N(t).then((e=>{a(),console.log("rrrr:",e)})).catch((e=>{a(),console.error("getWarehouses error:",e)}))},I=e=>{let t={HRCode:JSON.parse(H.getItem("userInfo")).Account,IsStorehouse:"0",SearchValue:e};l({title:"加载中..."}),N(t).then((e=>{a(),0!==e.data.length&&(n.value=e.data[0])})).catch((e=>{a(),console.error("getWarehouses error:",e)}))};return{form:P,productList:h,showStoreHousePopup:s,showApplyHousePopup:u,showProductPopup:r,storeHouseList:i,departmentList:n,productNameList:c,housePopTitle:"选择库房",departmentPopTitle:"选择科室",productName:y,deliveryMethod:g,receiptMethod:C,deliveryOptions:[{label:"配送",value:"1"},{label:"不配送",value:"2"}],receiptOptions:[{label:"延时收货",value:"0"},{label:"即时收货",value:"1"}],onDeliveryMethodChange:e=>{g.value=e.detail.value},onReceiptMethodChange:e=>{C.value=e.detail.value},onStoreHouseSearch:e=>{b(e)},handleDeleteClick:e=>{let t=h.value.findIndex((t=>t.ProductInfoID===e.ProductInfoID));t>-1&&(h.value.splice(t,1),_())},handleNumberChange:e=>{console.log("handleNumberChange:",e.Amount);let t=h.value.findIndex((t=>t.ProductInfoID===e.ProductInfoID));t>-1&&(h.value[t].Amount=e.Amount,_())},toBatchList:()=>{""!==f?V("/pages/batch/BatchConfirm",{deliveryID:f}):d({icon:"none",title:"暂时没有整单数据"})},submitForm:()=>{console.log("整单确认:",P.value)},selectProduct:()=>{""!==p.value.DeptCode&&void 0!==p.value.DeptCode?""!==v.value.DeptCode&&void 0!==v.value.DeptCode?V("/pages/product/ProductSearchList",{deptCode:v.value.DeptCode,houseCode:p.value.DeptCode,sourceFrom:"home",selectedProducts:JSON.stringify(h.value)}):d({icon:"none",title:"请先选择科室"}):d({icon:"none",title:"请先选择库房"})},saveDelivery:()=>{if(""===p.value.DeptCode||void 0===p.value.DeptCode)return void d({icon:"none",title:"请先选择库房"});if(""===v.value.DeptCode||void 0===v.value.DeptCode)return void d({icon:"none",title:"请先选择科室"});if(0===m.value.length||void 0===m.value)return void d({icon:"none",title:"请选择产品"});if(""==g.value||void 0===g.value)return void d({icon:"none",title:"请选择配送方式"});if(""==C.value||void 0===C.value)return void d({icon:"none",title:"请选择收获方式"});let e={DeliveryID:f,DeptCode:v.value.DeptCode,Distribution:g.value,IsLineTime:C.value,StorehouseID:p.value.DeptCode,UseTyp:"0",Details:m.value,HRCode:D.Account};console.log("saveDelivery:",e),l({title:"保存中..."}),j(e).then((e=>{a(),0==e.code&&(B(U.saveSuccessEvent,{}),console.log("saveDelivery success:",e.data[1][0]),f=e.data[1][0].DeliveryID_out,h.value=[],m.value="")})).catch((e=>{a(),console.error("saveDelivery error:",e)}))},toHistoryList:()=>{V("/pages/delivery/DeliveryHistory",{})},showStoreHousePopView:()=>{s.value=!s.value},showApplyHousePopView:()=>{u.value=!u.value},showProductPopView:()=>{r.value=!r.value},handleStoreHouseSelect:e=>{s.value=!1,p.value=e,P.value.warehouse=e.DepartmentName},handleApplyHouseSelect:e=>{u.value=!1,v.value=e,P.value.department=e.DepartmentName},handleProductSelect:e=>{r.value=!1,P.value.product=e}}}},[["render",function(e,t,o,l,a,d){const H=y,A=S,N=p,j=b,V=I,M=_,T=L(s("wd-status-tip"),k),U=L(s("wd-input-number"),x),B=L(s("wd-swipe-action"),O),E=P,R=w,F=u("SearchListDialogvue");return v(),r(c,null,[i(N,{class:"page-wraper"},{default:n((()=>[i(N,{class:"page-header"},{default:n((()=>[i(M,{onSubmit:m(l.submitForm,["prevent"]),class:"header"},{default:n((()=>[i(N,{class:"form-item"},{default:n((()=>[i(H,{class:"form-item-title"},{default:n((()=>[h("供货库房:")])),_:1}),i(A,{class:"form-item-value",onClick:l.showStoreHousePopView},{default:n((()=>[h(f(l.form.warehouse||"请选择"),1)])),_:1},8,["onClick"])])),_:1}),i(N,{class:"form-item"},{default:n((()=>[i(H,{class:"form-item-title"},{default:n((()=>[h("申请科室:")])),_:1}),i(A,{class:"form-item-value",onClick:l.showApplyHousePopView},{default:n((()=>[h(f(l.form.department||"请选择"),1)])),_:1},8,["onClick"])])),_:1}),""===l.productName?(v(),g(N,{key:0,class:"form-item"},{default:n((()=>[i(H,{class:"form-item-title"},{default:n((()=>[h("产品名称:")])),_:1}),i(A,{class:"form-item-value",onClick:l.selectProduct},{default:n((()=>[h("请选择")])),_:1},8,["onClick"])])),_:1})):C("",!0),i(N,{class:"form-item"},{default:n((()=>[i(H,{class:"form-item-title"},{default:n((()=>[h("配送方式:")])),_:1}),(v(!0),r(c,null,D(l.deliveryOptions,((e,t)=>(v(),g(V,{onChange:l.onDeliveryMethodChange,key:t},{default:n((()=>[i(j,{class:"form-item-radio",value:e.value,checked:l.deliveryMethod===e.value},{default:n((()=>[h(f(e.label),1)])),_:2},1032,["value","checked"])])),_:2},1032,["onChange"])))),128))])),_:1}),i(N,{class:"form-item"},{default:n((()=>[i(H,{class:"form-item-title"},{default:n((()=>[h("收货方式:")])),_:1}),(v(!0),r(c,null,D(l.receiptOptions,((e,t)=>(v(),g(V,{onChange:l.onReceiptMethodChange,key:t},{default:n((()=>[i(j,{class:"form-item-radio",value:e.value,checked:l.receiptMethod===e.value},{default:n((()=>[h(f(e.label),1)])),_:2},1032,["value","checked"])])),_:2},1032,["onChange"])))),128))])),_:1})])),_:1},8,["onSubmit"])])),_:1}),0===l.productList.length?(v(),g(T,{key:0,image:"search",tip:"当前无添加的产品"})):C("",!0),i(N,{class:"page-main"},{default:n((()=>[i(E,{class:"page-main-scroll",style:{height:"100%"},"scroll-y":!0,"scroll-with-animation":!0},{default:n((()=>[(v(!0),r(c,null,D(l.productList,(e=>(v(),g(N,{key:e.id,class:"page-main-list"},{default:n((()=>[i(B,null,{right:n((()=>[i(N,{style:{height:"100%"}},{default:n((()=>[i(N,{class:"delete-button",style:{background:"white",color:"red"},onClick:t=>l.handleDeleteClick(e)},{default:n((()=>[h(" 删除")])),_:2},1032,["onClick"])])),_:2},1024)])),default:n((()=>[i(N,{style:{"border-bottom":"1px solid #eee"}},{default:n((()=>[i(N,{class:"product-item",onClick:l.selectProduct},{default:n((()=>[i(N,{class:"row"},{default:n((()=>[i(A,{class:"title"},{default:n((()=>[h("产品ID:")])),_:1}),i(A,{class:"value"},{default:n((()=>[h(f(e.ProductInfoID),1)])),_:2},1024)])),_:2},1024),i(N,{class:"row"},{default:n((()=>[i(A,{class:"title"},{default:n((()=>[h("产品名称: ")])),_:1}),i(A,{class:"value"},{default:n((()=>[h(f(e.ProductName),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"]),i(N,{style:{display:"flex","justify-content":"flex-end","align-items":"center",padding:"0 10px 10px 0"}},{default:n((()=>[i(U,{modelValue:e.Amount,"onUpdate:modelValue":t=>e.Amount=t,min:1,onChange:t=>l.handleNumberChange(e)},null,8,["modelValue","onUpdate:modelValue","onChange"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),i(N,{class:"page-footer-h5"},{default:n((()=>[i(R,{class:"save-button",onClick:l.saveDelivery},{default:n((()=>[h("保存")])),_:1},8,["onClick"]),i(R,{class:"history-button",onClick:l.toBatchList},{default:n((()=>[h("整单确认")])),_:1},8,["onClick"])])),_:1})])),_:1}),i(F,{title:l.housePopTitle,visible:l.showStoreHousePopup,items:l.storeHouseList,onSelect:l.handleStoreHouseSelect,onClose:t[0]||(t[0]=e=>l.showStoreHousePopup=!1),onOnSearch:l.onStoreHouseSearch},null,8,["title","visible","items","onSelect","onOnSearch"]),i(F,{title:l.departmentPopTitle,visible:l.showApplyHousePopup,items:l.departmentList,onSelect:l.handleApplyHouseSelect,onClose:t[1]||(t[1]=e=>l.showApplyHousePopup=!1),onOnSearch:e.onDepartmentSearch},null,8,["title","visible","items","onSelect","onOnSearch"])],64)}],["__scopeId","data-v-c9abb429"]]);export{R as default};
