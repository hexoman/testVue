import{a0 as o}from"./index-BHzFND5V.js";function e(e,n={}){const s=Object.keys(n).map((o=>`${o}=${encodeURIComponent(n[o])}`)).join("&"),c=s?`${e}?${s}`:e;console.log("fullUrl",c),o({url:c,success:function(o){console.log("Navigate to page successfully",o)},fail:function(o){console.error("Failed to navigate to page",o)}})}export{e as n};