import{B as c}from"./BaseProcessCard.81083fdc.js";import{j as e,F as n,u as a,a as o,T as d}from"./index.3013e1ee.js";import{A as l,N as i}from"./NewAccordionItem.85881869.js";import"./BaseCard.7bba25a7.js";const j=()=>e(n,{children:e(l,{width:"full",defaultIndex:[0],allowMultiple:!0,children:e(m,{})})}),m=()=>{const t=a(),{categories:r}=t;return e(n,{children:r.map(s=>o(i,{cursorPointer:!0,children:[o(i.Title,{children:[s.emoji," ",s.name," ","(",e(d,{as:"span",color:"mirgor.purpleHeart",children:s.id}),")"]}),e(i.Items,{children:e(u,{procecess:s.processess})})]},s.id))})},u=({procecess:t})=>e(n,{children:t.map(r=>e(c,{content:r,to:`process/${r.category}/${r.id}`},r.id))});export{j as default};
