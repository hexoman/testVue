import{r as e,f as a,g as s,p as l,b as o,j as t,l as n,Y as c,A as u,S as r,s as i,X as p,v as d,q as f,a0 as m,E as v}from"./index-9AxPtOFn.js";import{o as _,d as g}from"./uni-app.es.B-45xLGt.js";import{e as y,E as b}from"./eventBus.D5u9CoqE.js";import{_ as h}from"./_plugin-vue_export-helper.BCo6x5W8.js";const j=h({__name:"ApproveEdit",setup(h){const j=e(""),k=e(""),A=e("pass"),I=()=>{"pass"===A.value?c({title:"您的审核意见：",content:"您同意通过这张申请单!",success:function(e){e.confirm?x(!0):e.cancel&&console.log("用户点击取消")}}):""===j.value?u({title:"需要填写不通过意见",icon:"none",duration:1500}):c({title:"您的审核意见：",content:"您拒绝通过这张申请单!",success:function(e){e.confirm?x(!1):e.cancel&&console.log("用户点击取消")}})},x=e=>{let a=JSON.parse(r.getItem("userInfo")),s={DeliveryID:k.value,Status:e?"21":"31",Remark:j.value,HRCode:a.Account};console.log(s),i({mask:!0}),g(s).then((e=>{console.log("submitApproval:",e),0==e.code?c({title:"",content:"单据审核成功！",confirmText:"回到首页",showCancel:!1,success:function(e){e.confirm&&(p({delta:2}),y(b.refreshApprovalList,{}))}}):u({title:e.msg,icon:"none",duration:1500})})).catch((e=>{d(),console.log(e)}))};return _((e=>{A.value=e.passType,k.value=e.deliveryID,console.log(k.value)})),(e,c)=>{const u=f,r=l,i=m,p=v;return o(),a(r,{class:"container"},{default:s((()=>["pass"===A.value?(o(),a(r,{key:0,class:"description-pass"},{default:s((()=>[t(u,null,{default:s((()=>[n(" 您同意通过此申请单申请")])),_:1})])),_:1})):(o(),a(r,{key:1,class:"description-fail"},{default:s((()=>[t(u,null,{default:s((()=>[n(" 您不同意通过此申请单申请")])),_:1})])),_:1})),t(r,{class:"input-container"},{default:s((()=>[t(i,{modelValue:j.value,"onUpdate:modelValue":c[0]||(c[0]=e=>j.value=e),placeholder:"请输入详细意见"},null,8,["modelValue"])])),_:1}),t(r,{class:"button-container"},{default:s((()=>[t(p,{type:"primary",onClick:I},{default:s((()=>[n("确认")])),_:1})])),_:1})])),_:1})}}},[["__scopeId","data-v-ba132bab"]]);export{j as default};
