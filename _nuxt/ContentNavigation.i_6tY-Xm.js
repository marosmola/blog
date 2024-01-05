import{u as m}from"./asyncData.p7kYd3L4.js";import{j as v,C as l,D as d,E as g,G as y,g as h,H as _,I as w,k as C,m as p}from"./entry.WWlz3kKV.js";import{h as f,u as P}from"./preview.oV6sYVaB.js";import{q as $,w as c,e as x,s as N,j as E,u as j}from"./query.6O3-0q2p.js";import{_ as T}from"./nuxt-link.ElJ9tL-s.js";const D=async t=>{const{content:e}=v().public;typeof(t==null?void 0:t.params)!="function"&&(t=$(t));const n=t.params(),o=e.experimental.stripQueryParameters?c(`/navigation/${`${f(n)}.${e.integrity}`}/${x(n)}.json`):c(`/navigation/${f(n)}.${e.integrity}.json`);if(N())return(await l(()=>import("./client-db.umqSCjMI.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(i=>i.generateNavigation))(n);const a=await $fetch(o,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:E(n),previewToken:P().getPreviewToken()}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a},S="$s";function b(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,o]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(o!==void 0&&typeof o!="function")throw new Error("[nuxt] [useState] init must be a function: "+o);const a=S+n,r=y(),i=d(r.payload.state,a);if(i.value===void 0&&o){const s=o();if(g(s))return r.payload.state[a]=s,s;i.value=s}return i}const R=h({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=_(t),n=w(()=>{var a;return typeof((a=e.value)==null?void 0:a.params)=="function"?e.value.params():e.value});if(!n.value&&b("dd-navigation").value){const{navigation:a}=j();return{navigation:a}}const{data:o}=await m(`content-navigation-${f(n.value)}`,()=>D(n.value));return{navigation:o}},render(t){const e=C(),{navigation:n}=t,o=i=>p(T,{to:i._path},()=>i.title),a=(i,s)=>p("ul",s?{"data-level":s}:null,i.map(u=>u.children?p("li",null,[o(u),a(u.children,s+1)]):p("li",null,o(u)))),r=i=>a(i,0);return e!=null&&e.default?e.default({navigation:n,...this.$attrs}):r(n)}}),G=R;export{G as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./client-db.umqSCjMI.js","./entry.WWlz3kKV.js","./entry.1Vb0t1ty.css","./query.6O3-0q2p.js","./preview.oV6sYVaB.js","./index.Wme0U9j4.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}