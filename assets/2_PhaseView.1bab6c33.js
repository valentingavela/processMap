import{B as l}from"./BackButton.23a74e54.js";import{B as u}from"./BaseCard.cd44a71f.js";import{k as h,l as x,j as e,a as i,F as d}from"./index.f9ef119a.js";import{B as t,A as f,a as c}from"./Breadcrumb.0cc68868.js";const j=()=>{const r=h(),a=x()(r),o=a.category,m=a.process,n=a.phase,p=[e(t.AccordionItem,{...o}),e(t.AccordionItem,{...m}),e(t.AccordionItem,{...n})];return i(d,{children:[e(l,{}),e(f,{width:"full",defaultIndex:[0],children:i(c,{minH:"50vh",children:[e(c.Title,{children:e(t,{items:p})}),e(c.Items,{children:e(I,{steps:n.steps})})]},o.id)})]})},I=({steps:r})=>e(d,{children:r.map(s=>e(u,{to:`${s.id}`,cardStyle:{alignItems:"center",justifyContent:"center",padding:"3px 3px 3px 6px"},children:s.name},s.id))});export{j as default};
