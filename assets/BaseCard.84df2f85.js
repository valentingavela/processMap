import{c as _,f as c,o as v,h as x,R as d,g as i,j as n,a as k,B as f,L as p}from"./index.498487b6.js";var l=(...r)=>r.filter(Boolean).join(" "),[b,h]=_({name:"CardStylesContext",hookName:"useCardStyles",providerName:"<Card />"}),N=c(function(e,a){const{className:t,children:s,direction:o="column",justify:m,align:y,...C}=v(e),u=x("Card",e);return d.createElement(i.div,{ref:a,className:l("chakra-card",t),__css:{display:"flex",flexDirection:o,justifyContent:m,alignItems:y,position:"relative",minWidth:0,wordWrap:"break-word",...u.container},...C},n(b,{value:u,children:s}))});c(function(e,a){const{className:t,...s}=e,o=h();return d.createElement(i.div,{ref:a,className:l("chakra-card__header",t),__css:o.header,...s})});var B=c(function(e,a){const{className:t,...s}=e,o=h();return d.createElement(i.div,{ref:a,className:l("chakra-card__body",t),__css:o.body,...s})}),g=c(function(e,a){const{className:t,justify:s,...o}=e,m=h();return d.createElement(i.div,{ref:a,className:l("chakra-card__footer",t),__css:{...m.footer,display:"flex",justifyContent:s},...o})});const w=({to:r,children:e,cardStyle:a})=>k(f,{width:"fit-content",children:[n(p,{to:r,children:n(N,{_hover:{background:"blackAlpha.50"},transitionProperty:"common",transitionDuration:"normal",border:"3px solid black",shadow:"none",borderRadius:"none",width:"9em",height:"7em",...a,children:e})}),n(f,{borderBottom:"3px solid black",mt:"10px",width:"9em"})]});export{w as B,B as C,g as a};
