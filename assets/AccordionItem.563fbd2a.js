import{r as d,c as R,b as V,j as y,A as P,R as g,m as _,f as F,I as de,d as U,e as ue,o as xe,a as $,B as fe,H as me,S as pe,F as he}from"./index.7eb824de.js";function ve(e,t){if(e!=null){if(typeof e=="function"){e(t);return}try{e.current=t}catch{throw new Error(`Cannot assign value '${t}' to ref '${e}'`)}}}function z(...e){return t=>{e.forEach(n=>{ve(n,t)})}}function nt(...e){return d.exports.useMemo(()=>z(...e),e)}function J(e){return e.sort((t,n)=>{const o=t.compareDocumentPosition(n);if(o&Node.DOCUMENT_POSITION_FOLLOWING||o&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(o&Node.DOCUMENT_POSITION_PRECEDING||o&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(o&Node.DOCUMENT_POSITION_DISCONNECTED||o&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0})}var ye=e=>typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function Q(e,t,n){let o=e+1;return n&&o>=t&&(o=0),o}function Z(e,t,n){let o=e-1;return n&&o<0&&(o=t),o}var H=typeof window<"u"?d.exports.useLayoutEffect:d.exports.useEffect,M=e=>e,ge=class{descendants=new Map;register=e=>{if(e!=null)return ye(e)?this.registerNode(e):t=>{this.registerNode(t,e)}};unregister=e=>{this.descendants.delete(e);const t=J(Array.from(this.descendants.keys()));this.assignIndex(t)};destroy=()=>{this.descendants.clear()};assignIndex=e=>{this.descendants.forEach(t=>{const n=e.indexOf(t.node);t.index=n,t.node.dataset.index=t.index.toString()})};count=()=>this.descendants.size;enabledCount=()=>this.enabledValues().length;values=()=>Array.from(this.descendants.values()).sort((t,n)=>t.index-n.index);enabledValues=()=>this.values().filter(e=>!e.disabled);item=e=>{if(this.count()!==0)return this.values()[e]};enabledItem=e=>{if(this.enabledCount()!==0)return this.enabledValues()[e]};first=()=>this.item(0);firstEnabled=()=>this.enabledItem(0);last=()=>this.item(this.descendants.size-1);lastEnabled=()=>{const e=this.enabledValues().length-1;return this.enabledItem(e)};indexOf=e=>{var t;return e?((t=this.descendants.get(e))==null?void 0:t.index)??-1:-1};enabledIndexOf=e=>e==null?-1:this.enabledValues().findIndex(t=>t.node.isSameNode(e));next=(e,t=!0)=>{const n=Q(e,this.count(),t);return this.item(n)};nextEnabled=(e,t=!0)=>{const n=this.item(e);if(!n)return;const o=this.enabledIndexOf(n.node),s=Q(o,this.enabledCount(),t);return this.enabledItem(s)};prev=(e,t=!0)=>{const n=Z(e,this.count()-1,t);return this.item(n)};prevEnabled=(e,t=!0)=>{const n=this.item(e);if(!n)return;const o=this.enabledIndexOf(n.node),s=Z(o,this.enabledCount()-1,t);return this.enabledItem(s)};registerNode=(e,t)=>{if(!e||this.descendants.has(e))return;const n=Array.from(this.descendants.keys()).concat(e),o=J(n);t?.disabled&&(t.disabled=!!t.disabled);const s={node:e,index:-1,...t};this.descendants.set(e,s),this.assignIndex(o)}};function be(){const e=d.exports.useRef(new ge);return H(()=>()=>e.current.destroy()),e.current}var[Ie,ne]=R({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"});function Ne(e){const t=ne(),[n,o]=d.exports.useState(-1),s=d.exports.useRef(null);H(()=>()=>{!s.current||t.unregister(s.current)},[]),H(()=>{if(!s.current)return;const i=Number(s.current.dataset.index);n!=i&&!Number.isNaN(i)&&o(i)});const r=M(e?t.register(e):t.register);return{descendants:t,index:n,enabledIndex:t.enabledIndexOf(s.current),register:z(r,s)}}function Ae(){return[M(Ie),()=>M(ne()),()=>be(),s=>Ne(s)]}function Ce(e){const{value:t,defaultValue:n,onChange:o,shouldUpdate:s=(x,c)=>x!==c}=e,r=V(o),i=V(s),[p,f]=d.exports.useState(n),l=t!==void 0,a=l?t:p,u=V(x=>{const m=typeof x=="function"?x(a):x;!i(a,m)||(l||f(m),r(m))},[l,r,a,i]);return[a,u]}var T=(...e)=>e.filter(Boolean).join(" ");function Ee(){return!1}var we=e=>{const{condition:t,message:n}=e;t&&Ee()&&console.warn(n)},C={ease:[.25,.1,.25,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1]},O={scale:{enter:{scale:1},exit:{scale:.95}},fade:{enter:{opacity:1},exit:{opacity:0}},pushLeft:{enter:{x:"100%"},exit:{x:"-30%"}},pushRight:{enter:{x:"-100%"},exit:{x:"30%"}},pushUp:{enter:{y:"100%"},exit:{y:"-30%"}},pushDown:{enter:{y:"-100%"},exit:{y:"30%"}},slideLeft:{position:{left:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"-100%",y:0}},slideRight:{position:{right:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"100%",y:0}},slideUp:{position:{top:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"-100%"}},slideDown:{position:{bottom:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"100%"}}};function W(e){switch(e?.direction??"right"){case"right":return O.slideRight;case"left":return O.slideLeft;case"bottom":return O.slideDown;case"top":return O.slideUp;default:return O.slideRight}}var E={enter:{duration:.2,ease:C.easeOut},exit:{duration:.1,ease:C.easeIn}},I={enter:(e,t)=>({...e,delay:typeof t=="number"?t:t?.enter}),exit:(e,t)=>({...e,delay:typeof t=="number"?t:t?.exit})},Se=e=>e!=null&&parseInt(e.toString(),10)>0,ee={exit:{height:{duration:.2,ease:C.ease},opacity:{duration:.3,ease:C.ease}},enter:{height:{duration:.3,ease:C.ease},opacity:{duration:.4,ease:C.ease}}},De={exit:({animateOpacity:e,startingHeight:t,transition:n,transitionEnd:o,delay:s})=>({...e&&{opacity:Se(t)?1:0},height:t,transitionEnd:o?.exit,transition:n?.exit??I.exit(ee.exit,s)}),enter:({animateOpacity:e,endingHeight:t,transition:n,transitionEnd:o,delay:s})=>({...e&&{opacity:1},height:t,transitionEnd:o?.enter,transition:n?.enter??I.enter(ee.enter,s)})},oe=d.exports.forwardRef((e,t)=>{const{in:n,unmountOnExit:o,animateOpacity:s=!0,startingHeight:r=0,endingHeight:i="auto",style:p,className:f,transition:l,transitionEnd:a,...u}=e,[x,c]=d.exports.useState(!1);d.exports.useEffect(()=>{const S=setTimeout(()=>{c(!0)});return()=>clearTimeout(S)},[]),we({condition:Boolean(r>0&&o),message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});const m=parseFloat(r.toString())>0,h={startingHeight:r,endingHeight:i,animateOpacity:s,transition:x?l:{enter:{duration:0}},transitionEnd:{enter:a?.enter,exit:o?a?.exit:{...a?.exit,display:m?"block":"none"}}},v=o?n:!0,N=n||o?"enter":"exit";return y(P,{initial:!1,custom:h,children:v&&g.createElement(_.div,{ref:t,...u,className:T("chakra-collapse",f),style:{overflow:"hidden",display:"block",...p},custom:h,variants:De,initial:o?"exit":!1,animate:N,exit:"exit"})})});oe.displayName="Collapse";var Oe={enter:({transition:e,transitionEnd:t,delay:n}={})=>({opacity:1,transition:e?.enter??I.enter(E.enter,n),transitionEnd:t?.enter}),exit:({transition:e,transitionEnd:t,delay:n}={})=>({opacity:0,transition:e?.exit??I.exit(E.exit,n),transitionEnd:t?.exit})},Pe={initial:"exit",animate:"enter",exit:"exit",variants:Oe},_e=d.exports.forwardRef(function(t,n){const{unmountOnExit:o,in:s,className:r,transition:i,transitionEnd:p,delay:f,...l}=t,a=s||o?"enter":"exit",u=o?s&&o:!0,x={transition:i,transitionEnd:p,delay:f};return y(P,{custom:x,children:u&&g.createElement(_.div,{ref:n,className:T("chakra-fade",r),custom:x,...Pe,animate:a,...l})})});_e.displayName="Fade";var Te={exit:({reverse:e,initialScale:t,transition:n,transitionEnd:o,delay:s})=>({opacity:0,...e?{scale:t,transitionEnd:o?.exit}:{transitionEnd:{scale:t,...o?.exit}},transition:n?.exit??I.exit(E.exit,s)}),enter:({transitionEnd:e,transition:t,delay:n})=>({opacity:1,scale:1,transition:t?.enter??I.enter(E.enter,n),transitionEnd:e?.enter})},ke={initial:"exit",animate:"enter",exit:"exit",variants:Te},Me=d.exports.forwardRef(function(t,n){const{unmountOnExit:o,in:s,reverse:r=!0,initialScale:i=.95,className:p,transition:f,transitionEnd:l,delay:a,...u}=t,x=o?s&&o:!0,c=s||o?"enter":"exit",m={initialScale:i,reverse:r,transition:f,transitionEnd:l,delay:a};return y(P,{custom:m,children:x&&g.createElement(_.div,{ref:n,className:T("chakra-offset-slide",p),...ke,animate:c,custom:m,...u})})});Me.displayName="ScaleFade";var te={exit:{duration:.15,ease:C.easeInOut},enter:{type:"spring",damping:25,stiffness:180}},Re={exit:({direction:e,transition:t,transitionEnd:n,delay:o})=>{const{exit:s}=W({direction:e});return{...s,transition:t?.exit??I.exit(te.exit,o),transitionEnd:n?.exit}},enter:({direction:e,transitionEnd:t,transition:n,delay:o})=>{const{enter:s}=W({direction:e});return{...s,transition:n?.enter??I.enter(te.enter,o),transitionEnd:t?.enter}}},Fe=d.exports.forwardRef(function(t,n){const{direction:o="right",style:s,unmountOnExit:r,in:i,className:p,transition:f,transitionEnd:l,delay:a,motionProps:u,...x}=t,c=W({direction:o}),m=Object.assign({position:"fixed"},c.position,s),h=r?i&&r:!0,v=i||r?"enter":"exit",N={transitionEnd:l,transition:f,direction:o,delay:a};return y(P,{custom:N,children:h&&g.createElement(_.div,{...x,ref:n,initial:"exit",className:T("chakra-slide",p),animate:v,exit:"exit",custom:N,variants:Re,style:m,...u})})});Fe.displayName="Slide";var Ue={initial:({offsetX:e,offsetY:t,transition:n,transitionEnd:o,delay:s})=>({opacity:0,x:e,y:t,transition:n?.exit??I.exit(E.exit,s),transitionEnd:o?.exit}),enter:({transition:e,transitionEnd:t,delay:n})=>({opacity:1,x:0,y:0,transition:e?.enter??I.enter(E.enter,n),transitionEnd:t?.enter}),exit:({offsetY:e,offsetX:t,transition:n,transitionEnd:o,reverse:s,delay:r})=>{const i={x:t,y:e};return{opacity:0,transition:n?.exit??I.exit(E.exit,r),...s?{...i,transitionEnd:o?.exit}:{transitionEnd:{...i,...o?.exit}}}}},Be={initial:"initial",animate:"enter",exit:"exit",variants:Ue},Le=d.exports.forwardRef(function(t,n){const{unmountOnExit:o,in:s,reverse:r=!0,className:i,offsetX:p=0,offsetY:f=8,transition:l,transitionEnd:a,delay:u,...x}=t,c=o?s&&o:!0,m=s||o?"enter":"exit",h={offsetX:p,offsetY:f,reverse:r,transition:l,transitionEnd:a,delay:u};return y(P,{custom:h,children:c&&g.createElement(_.div,{ref:n,className:T("chakra-offset-slide",i),custom:h,...Be,animate:m,...x})})});Le.displayName="SlideFade";var k=(...e)=>e.filter(Boolean).join(" ");function Ve(){return!1}var B=e=>{const{condition:t,message:n}=e;t&&Ve()&&console.warn(n)};function j(...e){return function(n){e.some(o=>(o?.(n),n?.defaultPrevented))}}var[$e,L]=R({name:"AccordionStylesContext",hookName:"useAccordionStyles",providerName:"<Accordion />"}),[je,Y]=R({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItem />"}),[He,ot,We,ze]=Ae(),se=F(function(t,n){const{getButtonProps:o}=Y(),s=o(t,n),i={display:"flex",alignItems:"center",width:"100%",outline:0,...L().button};return g.createElement(U.button,{...s,className:k("chakra-accordion__button",t.className),__css:i})});se.displayName="AccordionButton";function Ye(e){const{onChange:t,defaultIndex:n,index:o,allowMultiple:s,allowToggle:r,...i}=e;Xe(e),qe(e);const p=We(),[f,l]=d.exports.useState(-1);d.exports.useEffect(()=>()=>{l(-1)},[]);const[a,u]=Ce({value:o,defaultValue(){return s?n??[]:n??-1},onChange:t});return{index:a,setIndex:u,htmlProps:i,getAccordionItemProps:c=>{let m=!1;return c!==null&&(m=Array.isArray(a)?a.includes(c):a===c),{isOpen:m,onChange:v=>{if(c!==null)if(s&&Array.isArray(a)){const N=v?a.concat(c):a.filter(S=>S!==c);u(N)}else v?u(c):r&&u(-1)}}},focusedIndex:f,setFocusedIndex:l,descendants:p}}var[Ge,G]=R({name:"AccordionContext",hookName:"useAccordionContext",providerName:"Accordion"});function Ke(e){const{isDisabled:t,isFocusable:n,id:o,...s}=e,{getAccordionItemProps:r,setFocusedIndex:i}=G(),p=d.exports.useRef(null),f=d.exports.useId(),l=o??f,a=`accordion-button-${l}`,u=`accordion-panel-${l}`;Je(e);const{register:x,index:c,descendants:m}=ze({disabled:t&&!n}),{isOpen:h,onChange:v}=r(c===-1?null:c);Qe({isOpen:h,isDisabled:t});const N=()=>{v?.(!0)},S=()=>{v?.(!1)},K=d.exports.useCallback(()=>{v?.(!h),i(c)},[c,i,h,v]),X=d.exports.useCallback(D=>{const w={ArrowDown:()=>{const b=m.nextEnabled(c);b?.node.focus()},ArrowUp:()=>{const b=m.prevEnabled(c);b?.node.focus()},Home:()=>{const b=m.firstEnabled();b?.node.focus()},End:()=>{const b=m.lastEnabled();b?.node.focus()}}[D.key];w&&(D.preventDefault(),w(D))},[m,c]),q=d.exports.useCallback(()=>{i(c)},[i,c]),ce=d.exports.useCallback(function(A={},w=null){return{...A,type:"button",ref:z(x,p,w),id:a,disabled:!!t,"aria-expanded":!!h,"aria-controls":u,onClick:j(A.onClick,K),onFocus:j(A.onFocus,q),onKeyDown:j(A.onKeyDown,X)}},[a,t,h,K,q,X,u,x]),le=d.exports.useCallback(function(A={},w=null){return{...A,ref:w,role:"region",id:u,"aria-labelledby":a,hidden:!h}},[a,h,u]);return{isOpen:h,isDisabled:t,isFocusable:n,onOpen:N,onClose:S,getButtonProps:ce,getPanelProps:le,htmlProps:s}}function Xe(e){const t=e.index||e.defaultIndex,n=t!=null&&!Array.isArray(t)&&e.allowMultiple;B({condition:!!n,message:`If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof t},`})}function qe(e){B({condition:!!(e.allowMultiple&&e.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"})}function Je(e){B({condition:!!(e.isFocusable&&!e.isDisabled),message:`Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `})}function Qe(e){B({condition:e.isOpen&&!!e.isDisabled,message:"Cannot open a disabled accordion item"})}function ie(e){const{isOpen:t,isDisabled:n}=Y(),{reduceMotion:o}=G(),s=k("chakra-accordion__icon",e.className),r=L(),i={opacity:n?.4:1,transform:t?"rotate(-180deg)":void 0,transition:o?void 0:"transform 0.2s",transformOrigin:"center",...r.icon};return y(de,{viewBox:"0 0 24 24","aria-hidden":!0,className:s,__css:i,...e,children:y("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})})}ie.displayName="AccordionIcon";var re=F(function(t,n){const{children:o,className:s}=t,{htmlProps:r,...i}=Ke(t),f={...L().container,overflowAnchor:"none"},l=d.exports.useMemo(()=>i,[i]);return g.createElement(je,{value:l},g.createElement(U.div,{ref:n,...r,className:k("chakra-accordion__item",s),__css:f},typeof o=="function"?o({isExpanded:!!i.isOpen,isDisabled:!!i.isDisabled}):o))});re.displayName="AccordionItem";var ae=F(function(t,n){const{className:o,motionProps:s,...r}=t,{reduceMotion:i}=G(),{getPanelProps:p,isOpen:f}=Y(),l=p(r,n),a=k("chakra-accordion__panel",o),u=L();i||delete l.hidden;const x=g.createElement(U.div,{...l,__css:u.panel,className:a});return i?x:y(oe,{in:f,...s,children:x})});ae.displayName="AccordionPanel";var Ze=F(function({children:t,reduceMotion:n,...o},s){const r=ue("Accordion",o),i=xe(o),{htmlProps:p,descendants:f,...l}=Ye(i),a=d.exports.useMemo(()=>({...l,reduceMotion:!!n}),[l,n]);return g.createElement(He,{value:f},g.createElement(Ge,{value:a},g.createElement($e,{value:r},g.createElement(U.div,{ref:s,...p,className:k("chakra-accordion",o.className),__css:r.root},t))))});Ze.displayName="Accordion";const st=({children:e,cursorPointer:t=!1,customTitleHeading:n,noGrid:o})=>{const{items:s,title:r}=et(e);return $(re,{marginBottom:"36px",borderTop:"1px solid gray",borderRight:"1px solid gray",boxShadow:"6px 6px 0px 0px black, 0px 6px 0px 0px black",children:[$(se,{boxShadow:"0px 3px 0px 0px black",cursor:t?"pointer":"auto",_hover:{background:t?"blackAlpha.50":"white"},children:[y(fe,{flex:"1",textAlign:"left",children:n?r:y(me,{size:"sm",children:r})}),y(ie,{})]}),$(ae,{pt:"1.5em",pb:"1em",children:[o&&s.map(i=>i),!o&&y(pe,{spacing:4,templateColumns:"repeat(auto-fill, minmax(200px, 1fr))",alignItems:"center",children:s.map(i=>i)})]})]})},it=({children:e})=>y(he,{children:e});function et(e){const t=d.exports.Children.toArray(e);let n,o=[];return t.forEach((s,r)=>{if(s.type.name!=="AccordionItemTitle"){o.push(s);return}n=s}),{title:n,items:o}}export{Ze as A,st as a,it as b,nt as u};
