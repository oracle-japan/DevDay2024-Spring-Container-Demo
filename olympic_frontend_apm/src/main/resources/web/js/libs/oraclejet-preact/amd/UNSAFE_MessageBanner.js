define(['exports', 'preact/jsx-runtime', 'preact/hooks', './Message-4b89e577', 'preact', './Floating-7b312a86', 'preact/compat', './TopLayerHost-ed31c70d', './classNames-62eaa01c', './useComponentTheme-78f86a2f', './useTestId-b28a9bba', 'css!./TooltipContentStyles.styles.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', 'css!./IconStyle.styles.css', './IconButton-c2ad6964', './useTranslationBundle-1a7cf79b', 'css!./MessageStyles.styles.css', './MessageFormattingUtils-3ad74f93', './MessagesManager-de1a02ec', './Flex-d982a43c', './MessageUtils-68f4e953', './LiveRegion-3534985f', './useMessagesFocusManager-0d2495b5', './UNSAFE_MessageBanner/themes/redwood/MessageBannerTheme', './timer-5b5f3de2', './MessageCloseButton-e02909f9', './Close-6e354289', './Icon-0a47ad8b', './size-9084555e', './utils-577611d8', './Common/themes/themeContract.css', './colorUtils-8c677a79', './_curry1-cb27040e', './useTooltip-66ebfdaf', './useTooltipControlled-6376d338', './useId-37951d4d', './Layer-f4b2cc70', './useThemeInterpolations-b8a02c6d', './useColorScheme-5ae81aad', './useScale-00e3ccb5', './theme-9fc8c760', './Theme-2c9e73ca', './mergeInterpolations-73b24f1a', './_curry3-bdba4a6e', './_curry2-5a2b49e1', './_isObject-2ffb2ca1', './useHover-17fff32b', './useToggle-bb6b1322', './useFocus-d0d2975a', './useTouch-3838b51e', './mergeProps-7be264ec', './useAnimation-ca55acf6', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentTheme', './hooks/UNSAFE_useTooltip/themes/TooltipContentStyles.css', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentBaseTheme.css', 'css!./TooltipContentVariants.styles.css', './vanilla-extract-recipes-createRuntimeFn.esm-5dce05de', './EnvironmentProvider-f56c5ac9', './LayerManager-71d52c72', './logger-b63acb49', './UNSAFE_Icon/themes/IconStyle.css', './PRIVATE_Message/themes/MessageStyles.css', './MessageDetail-7ede4469', './MessageStartIcon-8282cf45', './SuccessS-19e996bc', './ErrorS-18990896', './InformationS-25f0ee87', './WarningS-1c8c7b01', './MessageSummary-fe1955a5', './MessageTimestamp-7c4860e0', './useFloating-6f4af09f', './useUser-8e4e5333', './positionUtils-32c24780', './refUtils-8d8a4660', './useOutsideClick-87736051', './arrayUtils-37736aa8', './UNSAFE_Floating/themes/redwood/FloatingTheme', './UNSAFE_Floating/themes/FloatingStyles.css', 'css!./FloatingStyles.styles.css', './UNSAFE_Floating/themes/redwood/FloatingBaseTheme.css', 'module', './UNSAFE_Floating/themes/redwood/FloatingVariants.css', './vanilla-extract-dynamic.esm-39e415b2', './UNSAFE_Floating/themes/FloatingContract.css', './Common/themes/redwood/theme', './BaseButton-1d7e01fd', './usePress-7d44cb50', './useActive-702b803a', './TabbableModeContext-1b650f6f', './useTabbableMode-1db1b771', './dimensions-597d86a6', './clientHints-7294b5ec', './UNSAFE_BaseButton/themes/BaseButtonStyles.css', 'css!./BaseButtonStyles.styles.css', './ButtonLayout-72f1db9d', './Text-fb81a941', './UNSAFE_Text/themes/TextStyles.css', 'css!./TextStyles.styles.css', './UNSAFE_ButtonLayout/themes/redwood/ButtonLayoutTheme', './UNSAFE_ButtonLayout/themes/ButtonLayoutStyles.css', 'css!./ButtonLayoutStyles.styles.css', './UNSAFE_ButtonLayout/themes/redwood/ButtonLayoutBaseTheme.css', 'module', './UNSAFE_ButtonLayout/themes/redwood/ButtonLayoutVariants.css', 'css!./ButtonLayoutVariants.styles.css', './getLocale-90e9ce9a', './stringUtils-aa6f579b', './Message.types-aad2a952', './TransitionGroup-f93fdbdc', './MessagesContext-deda9de7', './useMessagesContext-1882e183', './Transition-a946ece5', './boxalignment-a42cf291', 'css!./boxalignment.styles.css', './vanilla-extract-sprinkles-createRuntimeSprinkles.esm-c9464ec7', './flexbox-2b2cf0ed', 'css!./flexbox.styles.css', './flexitem-1802f140', 'css!./flexitem.styles.css', 'css!./FlexStyles.styles.css', './soundUtils-c90120dc', 'css!./LiveRegionStyles.styles.css', './UNSAFE_MessageBanner/themes/MessageBannerStyles.css', 'css!./MessageBannerStyles.styles.css', './UNSAFE_MessageBanner/themes/redwood/MessageBannerBaseTheme.css', 'module', './UNSAFE_MessageBanner/themes/redwood/MessageBannerVariants.css', 'css!./MessageBannerVariants.styles.css'], (function(e,s,t,a,o,n,l,c,r,i,d,u,g,m,h,f,y,b,S,F,B,T,p,M,x,U,_,E,A,v,C,N,w,L,R,k,I,H,j,V,P,O,z,W,$,D,G,K,q,J,Q,X,Y,Z,ee,se,te,ae,oe,ne,le,ce,re,ie,de,ue,ge,me,he,fe,ye,be,Se,Fe,Be,Te,pe,Me,xe,Ue,_e,Ee,Ae,ve,Ce,Ne,we,Le,Re,ke,Ie,He,je,Ve,Pe,Oe,ze,We,$e,De,Ge,Ke,qe,Je,Qe,Xe,Ye,Ze,es,ss,ts,as,os,ns,ls,cs,rs,is,ds,us,gs,ms,hs,fs,ys,bs,Ss,Fs,Bs){"use strict";const Ts={entering:e=>({to:{maxHeight:`${e.scrollHeight}px`,overflow:"hidden"},options:{duration:250},end:{maxHeight:"none",overflow:"initial"}}),exiting:e=>({..."none"===e.style.maxHeight&&{from:{maxHeight:`${e.scrollHeight}px`,overflow:"hidden"}},to:{maxHeight:0,overflow:"hidden"},end:{maxHeight:0,overflow:"hidden"},options:{duration:250}})},ps={maxHeight:0,overflow:"hidden"};e.MessageBanner=function({detailRendererKey:e,data:o,onClose:n,renderers:l,testId:c,variant:u="section"}){const g=d.useTestId(c),m=t.useRef(new Map),h=t.useRef(null),f=t.useRef(null),[b,S]=t.useState(),[U,_]=t.useState(o.length>0),E=y.useTranslationBundle("@oracle/oraclejet-preact"),A=t.useRef(o.length),v=t.useRef(0);A.current=o.length;const C=t.useCallback((e=>s=>m.current.set(e,s)),[]);t.useImperativeHandle(f,(()=>({focus:()=>{if(o.length){const e=o[0].key;return m.current.get(e)?.focus(),!0}return!1},contains:e=>!(!o.length||!e)&&(h.current?.contains(e)??!1)})),[o]);const{controller:N,handlers:w}=M.useMessageFocusManager(f,{onFocus:t.useCallback((()=>{S(E.message_navigationFromMessagesRegion())}),[S,E])}),L=t.useCallback((e=>{n?.(e)}),[n]),R=t.useCallback(((e,s,t)=>{const a=t?.contains(document.activeElement);if(0===A.current)return _(!1),void(a&&N.restorePriorFocus());const n=s+1<o.length?s+1:s-1;if(n>-1&&a){const e=o[n].key;m.current.get(e)?.focus()}}),[N,o]);t.useEffect((()=>{o.length?(_(!0),o.length>v.current&&S(E.message_navigationToMessagesRegion()),N.prioritize()):S(""),v.current=o.length}),[N,o,E]);const{classes:k}=i.useComponentTheme(x.MessageBannerRedwoodTheme);return U||0!==o.length?s.jsx("div",{ref:h,class:r.classNames(["oj-c-messagebanner",k]),tabIndex:-1,...w,...g,children:s.jsxs(B.Flex,{direction:"column",gap:"section"===u?"1x":void 0,children:[s.jsx(F.MessagesManager,{animationStates:Ts,initialAnimationStyles:ps,data:o,onMessageWillRemove:R,children:({item:t})=>s.jsx(a.Message,{messageRef:C(t.key),item:t,detailRenderer:T.getRenderer(t,e,l),variant:"page"===u?"pageBanner":"sectionBanner",onClose:L},t.key)}),s.jsx(p.LiveRegion,{children:b})]})}):null},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_MessageBanner.js.map