import{c as n,r as i,p as h,j as e,i as p,N,d as j}from"./index-D2TAbimZ.js";function w({toggleOpen:l}){const r=n(t=>t.trigger),c=n(t=>t.setTrigger),[s,o]=i.useState([]);i.useEffect(()=>{(async()=>{const d=await j(),f=new Date().getTime(),u=5*60*1e3,m=d.filter(a=>{if(!a.seen)return!0;if(a.seen){const g=new Date(a.updatedAt).getTime();return f-g<=u}return!1});o(m)})()},[r]);const x=i.useCallback(async()=>{s.length&&(await h(),c())},[s]);return e.jsx("div",{className:"fixed top-0 left-0 bottom-0 right-0 bg-black/50 flex items-center justify-center z-[9999]",children:e.jsxs("article",{className:"w-[calc(100%-32px)] max-w-[600px] bg-white dark:bg-grayDark pt-5 pb-[30px] rounded-[8px] flex flex-col md:px-5 px-[44px]",children:[e.jsxs("div",{className:"flex justify-between mb-5",children:[e.jsxs("div",{className:"flex gap-5 items-center",children:[e.jsx("h2",{className:"font-bold",children:"알림"}),e.jsx("button",{onClick:x,className:"text-xs hover:underline",children:"모두 읽음"})]}),e.jsx("button",{onClick:l,children:e.jsx("img",{className:"dark:invert",src:p.Close,alt:"close icon"})})]}),e.jsx("div",{className:"w-full scroll h-[456px] max-h-[456px] overflow-y-auto",children:e.jsx("ul",{className:"flex flex-col gap-[1px] text-xs",children:s.length?e.jsx(e.Fragment,{children:s.map(t=>e.jsx(N,{active:!t.seen,noti:t,onClick:l},t._id))}):e.jsx("li",{className:"text-gray dark:text-whiteDark",children:"등록된 알림이 없습니다"})})})]})})}export{w as default};