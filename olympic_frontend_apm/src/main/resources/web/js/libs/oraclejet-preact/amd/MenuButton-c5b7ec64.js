define(['exports', 'preact/jsx-runtime', './ButtonLayout-72f1db9d', './ChevronDown-05e0ac1e', './Menu-435029e7', './MenuItem-fe33605a', 'preact/hooks', 'preact', './Floating-7b312a86', 'preact/compat', './TopLayerHost-ed31c70d', './mergeProps-7be264ec', './logger-b63acb49', 'css!./TooltipContentStyles.styles.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', 'css!./IconStyle.styles.css', './SelectMenuGroupContext-b6b495e3', './UNSAFE_Separator/themes/SeparatorStyles.css', 'css!./MenuSeparatorStyles.styles.css', 'module', './UNSAFE_Menu/themes/redwood/MenuSeparatorVariants.css', './useMenuAction-514491bd', './BaseButton-1d7e01fd'], (function(e,t,o,s,n,a,r,u,i,l,c,d,p,h,b,M,m,y,S,f,T,g,B,x){"use strict";const v=l.forwardRef((({children:e,label:a,suffix:i,variant:l="outlined",isDisabled:c=!1,isMenuOpen:p=!1,onToggleMenu:h,size:b="md",type:M="button",width:m,icon:y,testId:S,"aria-describedby":f,onBlur:T,onFocus:g,onMouseEnter:v,onMouseLeave:w,onTouchEnd:E,onTouchStart:F},A)=>{const I=r.useRef(null);r.useImperativeHandle(A,(()=>I.current),[I]);const{triggerProps:j,menuProps:C}=B.useMenuAction({isDisabled:c,onToggleMenu:h,isMenuOpen:p,anchorRef:I}),D={type:"button",buttonType:M},N={onBlur:T,onFocus:g,onMouseEnter:v,onMouseLeave:w,onTouchEnd:E,onTouchStart:F},L=t.jsx(x.BaseButton,{...d.mergeProps(j,N),styling:p?["min","active"]:["min"],elementDetails:D,isDisabled:c,variant:l,width:m,size:b,ref:I,testId:S,"aria-label":i?`${a} ${i}`:a,"aria-describedby":f,children:t.jsx(o.ButtonLayout,{display:"all",suffix:i,startIcon:y,endIcon:t.jsx(s.SvgChevronDown,{}),size:b,children:a})});return c?L:t.jsxs(u.Fragment,{children:[L,t.jsx(n.Menu,{...C,"aria-label":a,offsetValue:4,children:e})]})}));v.displayName="MenuButton",e.MenuButton=v}));
//# sourceMappingURL=MenuButton-c5b7ec64.js.map