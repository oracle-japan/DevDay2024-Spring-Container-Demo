define(['exports', 'preact/jsx-runtime', 'preact/hooks', './Flex-d982a43c', './UNSAFE_MessageBanner/themes/redwood/MessageBannerTheme', './useComponentTheme-78f86a2f', './timer-5b5f3de2', './classNames-62eaa01c', './MessageCloseButton-e02909f9', './PRIVATE_Message/themes/MessageStyles.css', './MessageDetail-7ede4469', './MessageFormattingUtils-3ad74f93', './MessageStartIcon-8282cf45', './MessageSummary-fe1955a5', './MessageTimestamp-7c4860e0', './MessageUtils-68f4e953', './utils-577611d8'], (function(e,s,a,t,n,r,o,i,c,l,u,m,d,g,f,y,p){"use strict";function v({item:e,renderer:a}){const t=i.classNames([l.messageStartIconStyles.base,l.messageStartIconStyles.toast,l.messageStartIconStyles.customToast]);return s.jsx("div",{class:t,role:"presentation","data-oj-message-custom-icon":"",children:a(e)})}function x({children:e,variant:a="banner"}){const t=i.classNames([l.messageHeaderStyles.base,l.messageHeaderStyles[a]]);return s.jsx("div",{role:"presentation",class:t,children:e})}function S(e){return m.isValidValueForProp(e,"severity")&&"none"!==e}e.Message=function({detailRenderer:e,iconRenderer:M,item:b,onClose:j,messageRef:h=(()=>{}),variant:C="pageBanner"}){const{closeAffordance:k="on",severity:B="error",sound:T,summary:F,timestamp:I}=b.data,{autoTimeout:V="off"}=b.data,N=function(e){return"pageBanner"===e||"sectionBanner"===e?"banner":"toast"}(C),R=a.useCallback((()=>{j?.(b)}),[b,j]),U=a.useCallback((e=>{"Escape"===e.key&&"on"===k&&j?.(b)}),[k,b,j]),A="toast"===N&&"off"!==V,E=a.useRef(),P="on"===V?5e3:"number"==typeof V?V:5e3,w=a.useCallback((()=>{E.current||(E.current=new o.Timer(R,P))}),[R,P]),D=a.useCallback((()=>{E.current&&(E.current.clear(),E.current=void 0)}),[]),H=a.useCallback((()=>{E.current?.pause()}),[]),$=a.useCallback((()=>{E.current?.resume()}),[]);a.useEffect((()=>(m.isValidValueForProp(T)&&y.playSound(T),A&&w(),()=>{D()})),[]);const{variantClasses:_}=r.useComponentTheme(n.MessageBannerRedwoodTheme,{severity:B}),K=i.classNames(["banner"===N&&_,l.messageStyles.base[N],"toast"!==C&&y.severityBasedStyleClass(B,N),"sectionBanner"===C&&l.messageStyles.section]),q=i.classNames([l.messageStyles.content.base,l.messageStyles.content[N]]);return s.jsx("div",{ref:h,class:K,role:"alert","aria-atomic":"true","data-oj-key":`${typeof b.key}-${b.key}`,tabIndex:0,onKeyUp:U,onfocusin:H,onfocusout:$,children:s.jsxs("div",{class:q,children:[M?s.jsx(v,{item:b,renderer:M}):S(B)?s.jsx(d.MessageStartIcon,{severity:B,variant:N}):null,s.jsxs(t.Flex,{direction:"column",flex:"1",gap:p.xUnits(2),children:[s.jsxs(x,{variant:N,children:[s.jsx(g.MessageSummary,{variant:N,text:F}),m.isValidValueForProp(I,"timestamp")&&"toast"!==C&&s.jsx(f.MessageTimestamp,{variant:N,value:I})]}),s.jsx(u.MessageDetail,{variant:N,item:b,renderer:e})]}),"on"===k&&s.jsx(c.MessageCloseButton,{variant:N,onAction:R})]})})}}));
//# sourceMappingURL=Message-4b89e577.js.map