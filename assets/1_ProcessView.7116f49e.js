import{k as l,l as u,j as r,a,F as m,b as h,i as f}from"./index.f9ef119a.js";import{B as p}from"./BackButton.23a74e54.js";import{B as I}from"./BaseProcessCard.f85fd625.js";import{B as o,A as B,a as c}from"./Breadcrumb.0cc68868.js";import"./BaseCard.cd44a71f.js";const w=()=>{const s=l(),t=u()(s),n=t.category,i=t.process,d=[r(o.AccordionItem,{...n}),r(o.AccordionItem,{...i})];return a(m,{children:[r(p,{}),r(B,{width:"full",defaultIndex:[0],children:a(c,{minH:"50vh",children:[r(c.Title,{children:r(o,{items:d})}),r(c.Items,{children:r(x,{phases:i.phases})})]},n.id)})]})},x=({phases:s})=>r(m,{children:s.map((e,t)=>a(h,{alignItems:"center",children:[r(I,{content:e,to:e.id}),s.length!==t+1&&r(f,{ml:"5",fontSize:50})]},`${e.id} ${e.name}`))});export{w as default};
