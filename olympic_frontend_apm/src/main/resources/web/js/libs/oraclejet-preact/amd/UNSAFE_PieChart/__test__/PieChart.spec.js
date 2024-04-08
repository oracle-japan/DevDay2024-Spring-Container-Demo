define(['preact/jsx-runtime', '@testing-library/preact', 'chai', '../../PieChart-c3aafb4f', '../themes/PieChartStyles.css', 'css!./../../PieChartStyles.styles.css', '../../PathUtils-d2f4443a', '../../layoutUtils-a2537680', '../../scale-fdf490f9', '../../labelUtils-da85a002', '../../textUtils-13c9056b', '../../accUtils-8478d1b2', '../../clientHints-7294b5ec', '../../getLocale-90e9ce9a', '../../classNames-62eaa01c', '../../useUser-8e4e5333', 'preact/hooks', '../../TopLayerHost-ed31c70d', 'preact', '../../Common/themes/redwood/theme', '../../Common/themes/themeContract.css', 'preact/compat', '../../usePieChartNav-f3a2fb1c', '../../LayoutUtils-6bb21e37', '../../eventsUtils-94448680', '../../useDatatip-89c35952', '../../Layer-f4b2cc70', '../../useThemeInterpolations-b8a02c6d', '../../useColorScheme-5ae81aad', '../../useScale-00e3ccb5', '../../theme-9fc8c760', '../../Theme-2c9e73ca', '../../mergeInterpolations-73b24f1a', '../../_curry3-bdba4a6e', '../../_curry1-cb27040e', '../../_curry2-5a2b49e1', '../../_isObject-2ffb2ca1', '../../Floating-7b312a86', '../../useFloating-6f4af09f', '../../positionUtils-32c24780', '../../refUtils-8d8a4660', '../../useOutsideClick-87736051', '../../arrayUtils-37736aa8', '../../useComponentTheme-78f86a2f', '../../logger-b63acb49', '../../utils-577611d8', '../../colorUtils-8c677a79', '../../UNSAFE_Floating/themes/redwood/FloatingTheme', '../../UNSAFE_Floating/themes/FloatingStyles.css', 'css!./../../FloatingStyles.styles.css', '../../UNSAFE_Floating/themes/redwood/FloatingBaseTheme.css', 'module', '../../UNSAFE_Floating/themes/redwood/FloatingVariants.css', '../../vanilla-extract-recipes-createRuntimeFn.esm-5dce05de', '../../vanilla-extract-dynamic.esm-39e415b2', '../../UNSAFE_Floating/themes/FloatingContract.css', '../../hooks/PRIVATE_useDatatip/themes/useDatatip.css', 'css!./../../useDatatip.styles.css', '../../useId-37951d4d', '../../util-f0d4f81c', '../../mergeProps-7be264ec', '../../TrackResizeContainer-8d8e1913', '../../useSize-251da8d5', '../../useResizeObserver-5de04057', '../../useTestId-b28a9bba', '../../size-9084555e', '../../colorUtils-f4fa6bec', '../../VisTabularDatatip-4aa8610f', '../../PRIVATE_VisTabularDatatip/themes/VisTabularDatatipStyles.css', 'css!./../../VisTabularDatatipStyles.styles.css'], (function(e,t,a,s,i,c,l,o,r,n,d,b,u,h,m,p,f,g,y,F,U,T,S,C,_,x,P,A,v,D,E,N,w,V,I,R,L,k,z,B,j,O,H,q,G,J,K,M,Q,W,X,Y,Z,$,ee,te,ae,se,ie,ce,le,oe,re,ne,de,be,ue,he,me,pe){"use strict";const fe=[{id:1,value:5},{id:2,value:4},{id:3,value:4}];describe("Test PieChart component",(()=>{it("render",(async function(){const i=t.render(e.jsx(s.PieChart,{data:fe,width:"400px",height:"400px","aria-label":"pie chart label"})),c=await i.getAllByLabelText("pie chart label");a.expect(c).not.null;const l=i.getByRole("application");a.expect(l).not.null}))}))}));
//# sourceMappingURL=PieChart.spec.js.map
