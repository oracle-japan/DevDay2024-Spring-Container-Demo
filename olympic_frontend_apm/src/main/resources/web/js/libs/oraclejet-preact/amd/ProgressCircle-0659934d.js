define(['exports', 'preact/jsx-runtime', './classNames-62eaa01c', './circleUtils-4ed3fb99', './useTranslationBundle-1a7cf79b', './useComponentTheme-78f86a2f', './UNSAFE_ProgressCircle/themes/redwood/ProgressCircleTheme', './CircularMeter-af6d2ee2'], (function(e,s,r,a,l,i,n,t){"use strict";const c=({id:e,size:r,...a})=>{const{classes:c,styles:{indeterminate:o}}=i.useComponentTheme(n.ProgressCircleRedwoodTheme,{size:r,type:"indeterminate"}),u=l.useTranslationBundle("@oracle/oraclejet-preact"),m={"aria-valuetext":a["aria-valuetext"]||u.progressIndeterminate(),role:"progressbar"};return s.jsx(t.CircleWrapper,{id:e,ariaProps:m,class:c,children:s.jsx(t.CircleInner,{class:o})})},o=({value:e=0,max:l=100,id:c,size:o})=>{const{classes:u,styles:{determinate:m,track:d,valueStyle:p}}=i.useComponentTheme(n.ProgressCircleRedwoodTheme,{size:o}),x=Math.min(Math.max(0,e/l),1),C=a.getProgressClipPath(x),h={};return h["aria-valuemin"]=null!=e?0:void 0,h["aria-valuemax"]=null!=e?l:void 0,h["aria-valuenow"]=null!=e?e:void 0,h.role="progressbar",s.jsxs(t.CircleWrapper,{id:c,ariaProps:h,class:u,children:[s.jsx(t.CircleInner,{class:r.classNames([m,d])}),s.jsx(t.CircleInner,{class:r.classNames([m,p]),clipPath:C})]})};e.ProgressCircle=function({value:e,max:r,...a}){return"indeterminate"===e?s.jsx(c,{...a}):s.jsx(o,{value:e,max:r,...a})}}));
//# sourceMappingURL=ProgressCircle-0659934d.js.map