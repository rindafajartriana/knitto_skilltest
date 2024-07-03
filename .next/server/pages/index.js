"use strict";(()=>{var e={};e.id=405,e.ids=[405,888,660],e.modules={323:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},30:(e,t,r)=>{r.a(e,async(e,o)=>{try{r.r(t),r.d(t,{config:()=>b,default:()=>u,getServerSideProps:()=>h,getStaticPaths:()=>g,getStaticProps:()=>x,reportWebVitals:()=>m,routeModule:()=>v,unstable_getServerProps:()=>j,unstable_getServerSideProps:()=>S,unstable_getStaticParams:()=>y,unstable_getStaticPaths:()=>P,unstable_getStaticProps:()=>f});var n=r(93),a=r(244),i=r(323),s=r(899),l=r.n(s),d=r(503),c=r(852),p=e([c]);c=(p.then?(await p)():p)[0];let u=(0,i.l)(c,"default"),x=(0,i.l)(c,"getStaticProps"),g=(0,i.l)(c,"getStaticPaths"),h=(0,i.l)(c,"getServerSideProps"),b=(0,i.l)(c,"config"),m=(0,i.l)(c,"reportWebVitals"),f=(0,i.l)(c,"unstable_getStaticProps"),P=(0,i.l)(c,"unstable_getStaticPaths"),y=(0,i.l)(c,"unstable_getStaticParams"),j=(0,i.l)(c,"unstable_getServerProps"),S=(0,i.l)(c,"unstable_getServerSideProps"),v=new n.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/index",pathname:"/",bundlePath:"",filename:""},components:{App:d.default,Document:l()},userland:c});o()}catch(e){o(e)}})},403:(e,t,r)=>{r.d(t,{Z:()=>h});var o=r(997),n=r(689),a=r(711);let i=require("styled-components");var s=r.n(i);let l=s().div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #fff;
`,d=s().h2`
  text-align: center;
  color: #333;
`,c=s().div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`,p=s().button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
  }
`,u=s().ul`
  list-style: none;
  padding: 0;
`,x=s().li`
  padding: 10px;
  border-bottom: 1px solid #eee;
  background-color: ${({completed:e})=>e?"#d4edda":"#f8d7da"};
  color: ${({completed:e})=>e?"#155724":"#721c24"};
`,g=s().p`
  text-align: center;
  color: #333;
`,h=({pageNumber:e,onPageChange:t})=>{let{data:r,error:i,isLoading:s,refetch:h}=(0,a.kk)(e,10,{skip:!0});return((0,n.useEffect)(()=>{h()},[]),s)?o.jsx(g,{style:{textAlign:"center"},children:"Loading..."}):i?(0,o.jsxs)(g,{children:["Error: ",i.message]}):(0,o.jsxs)(l,{children:[o.jsx(d,{children:"Todo List"}),(0,o.jsxs)(c,{children:[o.jsx(p,{onClick:()=>t(e-1),disabled:1===e,children:"Previous"}),o.jsx(p,{onClick:()=>t(e+1),children:"Next"})]}),o.jsx(u,{children:r.map(e=>(0,o.jsxs)(x,{completed:e.completed,children:[e.title," - ",e.completed?"Completed":"Not Completed"]},e.id))})]})}},503:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var o=r(997);r(689);let n=require("react-redux"),a=require("@reduxjs/toolkit");var i=r(335),s=r(711);let l=(0,a.configureStore)({reducer:{[s.km.reducerPath]:s.km.reducer},middleware:e=>e().concat(s.km.middleware)});(0,i.setupListeners)(l.dispatch);let d=function({Component:e,pageProps:t}){return o.jsx(n.Provider,{store:l,children:o.jsx(e,{...t})})}},852:(e,t,r)=>{r.a(e,async(e,o)=>{try{r.r(t),r.d(t,{default:()=>p,getStaticProps:()=>c});var n=r(997),a=r(689),i=r(403),s=r(711),l=r(648),d=e([l]);async function c(){return{props:{todos:await (0,s.Y2)(1,10)},revalidate:3600}}l=(d.then?(await d)():d)[0];let p=()=>{let[e,t]=(0,a.useState)(1),[r,o]=(0,a.useState)(""),[s,d]=(0,a.useState)(""),[c,p]=(0,a.useState)(!1);return(0,n.jsxs)("div",{children:[n.jsx("h1",{style:{textAlign:"center"},children:"Todo App"}),n.jsx(i.Z,{pageNumber:e,onPageChange:e=>{t(e)}}),n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px",width:"300px"},children:[n.jsx("h2",{style:{textAlign:"center"},children:"Todo Post"}),(0,n.jsxs)("label",{children:["User ID :",n.jsx("input",{type:"number",name:"field1",value:r,onChange:e=>{o(e.target.value)},style:{width:"100%",padding:"8px",boxSizing:"border-box"}})]}),(0,n.jsxs)("label",{children:["Title :",n.jsx("input",{type:"text",name:"field2",value:s,onChange:e=>{d(e.target.value)},style:{width:"100%",padding:"8px",boxSizing:"border-box"}})]}),(0,n.jsxs)("label",{style:{display:"flex",alignItems:"center"},children:["Completed :",n.jsx("input",{type:"checkbox",name:"completed",checked:c,onChange:e=>{p(e.target.checked)},style:{marginLeft:"10px"}})]}),n.jsx("button",{onClick:()=>{l.default.post("https://jsonplaceholder.typicode.com/todos",{userId:r,title:s,completed:c}).then(e=>{alert("POST success:\n"+JSON.stringify(e.data))}).catch(e=>{console.error("Error:",e),alert("POST error:\n"+e)})},style:{padding:"10px",backgroundColor:"#007BFF",color:"#fff",border:"none",cursor:"pointer",borderRadius:"5px"},children:"Submit"})]})})]})};o()}catch(e){o(e)}})},711:(e,t,r)=>{r.d(t,{Y2:()=>i,kk:()=>a,km:()=>n});var o=r(335);let n=(0,o.createApi)({reducerPath:"todoApi",baseQuery:(0,o.fetchBaseQuery)({baseUrl:"https://jsonplaceholder.typicode.com/"}),endpoints:e=>({getTodos:e.query({query:(e=1,t=10)=>`todos?_start=${(e-1)*t}&_limit=${t}`})})}),{useGetTodosQuery:a}=n,i=async(e=1,t=10)=>{let r=await fetch(`https://jsonplaceholder.typicode.com/todos?_start=${(e-1)*t}&_limit=${t}`);return await r.json()}},244:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},335:e=>{e.exports=require("@reduxjs/toolkit/query/react")},785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},689:e=>{e.exports=require("react")},997:e=>{e.exports=require("react/jsx-runtime")},648:e=>{e.exports=import("axios")},17:e=>{e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[899],()=>r(30));module.exports=o})();