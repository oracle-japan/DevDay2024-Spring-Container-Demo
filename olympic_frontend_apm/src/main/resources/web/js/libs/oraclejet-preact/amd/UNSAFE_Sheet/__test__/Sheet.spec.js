define(['preact/jsx-runtime', '@testing-library/preact', '../../TopLayerHost-ed31c70d', '../../EnvironmentProvider-f56c5ac9', 'chai', 'sinon', 'preact/hooks', '@testing-library/user-event', '../../BaseButton-1d7e01fd', '../../Sheet-cf313a1e', '../../clientHints-7294b5ec', 'preact', '../../Common/themes/redwood/theme', '../../Common/themes/themeContract.css', 'preact/compat', '../../LayerManager-71d52c72', '../../usePress-7d44cb50', '../../useHover-17fff32b', '../../useToggle-bb6b1322', '../../useActive-702b803a', '../../TabbableModeContext-1b650f6f', '../../useTabbableMode-1db1b771', '../../useId-37951d4d', '../../useColorScheme-5ae81aad', '../../classNames-62eaa01c', '../../dimensions-597d86a6', '../../size-9084555e', '../../utils-577611d8', '../../colorUtils-8c677a79', '../../_curry1-cb27040e', '../../mergeInterpolations-73b24f1a', '../../_curry3-bdba4a6e', '../../_curry2-5a2b49e1', '../../_isObject-2ffb2ca1', '../../mergeProps-7be264ec', '../../UNSAFE_BaseButton/themes/BaseButtonStyles.css', 'css!./../../BaseButtonStyles.styles.css', '../../vanilla-extract-recipes-createRuntimeFn.esm-5dce05de', '../../useTestId-b28a9bba', '../../Modal-a2b111dd', '../../Layer-f4b2cc70', '../../useThemeInterpolations-b8a02c6d', '../../useScale-00e3ccb5', '../../theme-9fc8c760', '../../Theme-2c9e73ca', '../../UNSAFE_Modal/themes/ModalStyles.css', 'css!./../../ModalStyles.styles.css', '../../WindowOverlay-6c86c13b', '../../vanilla-extract-dynamic.esm-39e415b2', '../../UNSAFE_WindowOverlay/themes/WindowOverlayStyles.css', 'css!./../../WindowOverlayStyles.styles.css', '../../UNSAFE_WindowOverlay/themes/WindowOverlayContract.css', '../../useUser-8e4e5333', '../../useComponentTheme-78f86a2f', '../../logger-b63acb49', '../../UNSAFE_WindowOverlay/themes/redwood/WindowOverlayTheme', '../../UNSAFE_WindowOverlay/themes/redwood/WindowOverlayBaseTheme.css', 'module', '../../UNSAFE_WindowOverlay/themes/redwood/WindowOverlayVariants.css', '../../useSheetSwipe-681e464c', '../themes/SheetStyles.css', 'css!./../../SheetStyles.styles.css'], (function(e,t,n,s,c,o,r,a,l,i,d,u,h,y,m,p,b,f,S,w,v,x,g,E,T,C,j,O,W,N,B,_,F,U,A,I,M,k,H,P,D,L,R,q,X,Y,z,V,G,J,K,Q,Z,$,ee,te,ne,se,ce,oe,re,ae){"use strict";function le(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var ie=le(a);function de(e){return e.querySelector("#contentId")}function ue(e){return e.querySelector("#contentId").parentElement}const he=({onClose:t})=>{const n=r.useRef(null);return e.jsx(e.Fragment,{children:e.jsxs(s.RootEnvironmentProvider,{children:[e.jsx(l.BaseButton,{ref:n,children:"Open"}),e.jsx(i.Sheet,{isOpen:!0,onClose:t,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",outlineStyle:"none"},id:"contentId",children:[e.jsx("h1",{children:"N1"}),e.jsx("h1",{children:"N2"}),e.jsx("h1",{children:"N3"}),e.jsx("h1",{children:"N4"})]})})]})})};describe("Test Sheet Component",(()=>{it("Sheet content render correctly",(async function(){const{container:n}=t.render(e.jsx(he,{})),s=de(n);c.expect(s).not.null})),it("onClose called when Escape or Tab are pressed",(async function(){const n=o.spy(),{container:s}=t.render(e.jsx(he,{onClose:n})),r=de(s),a=ue(s);c.expect(r).not.null,t.fireEvent.keyDown(a,{code:"Tab"}),t.fireEvent.keyDown(a,{code:"Escape"}),c.expect(n.calledTwice).to.be.true})),it("onClose called when clicking scrim",(async function(){const n=o.spy(),{container:s}=t.render(e.jsx(he,{onClose:n})),r=de(s),a=function(e){return e.parentElement?.parentElement?.parentElement?.firstElementChild}(ue(s));c.expect(r).not.null,await ie.default.click(a),c.expect(n.called).to.be.true})),it("onClose called when swipe is done (mobile)",(async function(){const n=o.spy(),{container:s}=t.render(e.jsx(he,{onClose:n})),r=de(s),a=ue(s);if(c.expect(r).not.null,"undefined"==typeof jest&&"primary"===d.getClientHints().touchSupport){const e=new Touch({target:a,identifier:0,pageX:386,pageY:224}),s=new Touch({target:a,identifier:0,pageX:389,pageY:397});a&&(t.fireEvent.touchStart(a,{timeStamp:10406,currentTarget:a,changedTouches:[e]}),t.fireEvent.touchEnd(a,{timeStamp:10472,currentTarget:a,changedTouches:[s]})),c.expect(n.called).to.be.true}}))}))}));
//# sourceMappingURL=Sheet.spec.js.map
