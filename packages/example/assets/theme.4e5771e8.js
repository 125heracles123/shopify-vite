const a="modulepreload",d=function(o,r){return new URL(o,r).href},c={},m=function(r,i,l){return!i||i.length===0?r():Promise.all(i.map(e=>{if(e=d(e,l),e in c)return;c[e]=!0;const t=e.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const n=document.createElement("link");if(n.rel=t?"stylesheet":a,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t)return new Promise((u,f)=>{n.addEventListener("load",u),n.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>r())},h=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};h();m(()=>import("./lodash-es.6d048829.js"),[],import.meta.url).then(({default:o})=>{console.log(o.join(["Vite","\u26A1\uFE0F","Shopify"]," "))}).catch(o=>console.log(o));
