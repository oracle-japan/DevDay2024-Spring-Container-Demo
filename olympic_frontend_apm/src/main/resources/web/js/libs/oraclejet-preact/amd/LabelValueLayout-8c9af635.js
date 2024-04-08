define(['exports', 'preact/jsx-runtime', './classNames-62eaa01c', './Flex-d982a43c', './FormContext-c9b69cf8', './useFormContext-dc7a7549', './FormFieldContext-e622bec1', './useFormFieldContext-de5654ba', './size-9084555e', 'css!./LabelValueLayoutStyles.styles.css', './useComponentTheme-78f86a2f', './UNSAFE_TextField/themes/redwood/TextFieldTheme', './UNSAFE_RadioItem/themes/redwood/RadioTheme', './UNSAFE_Label/themes/redwood/LabelTheme', './UNSAFE_TextField/themes/redwood/FormLayoutTheme', './UNSAFE_Checkbox/themes/redwood/CheckboxTheme'], (function(e,l,t,a,s,o,r,d,n,_,y,b,i,u,m,S){"use strict";var c="LabelValueLayoutStyles_labelInnerStyles_base__z3rxc55",h="LabelValueLayoutStyles_labelInnerStyles_start__z3rxc56",x="LabelValueLayoutStyles_labelInnerStyles_startNotPureReadonly__z3rxc57",L="LabelValueLayoutStyles_labelInnerStyles_startWithNoTopRadioSetUA__z3rxc58",T="LabelValueLayoutStyles_labelInnerStyles_insideRadioSet__z3rxc59",F="LabelValueLayoutStyles_labelInnerStyles_startWithNoTopCheckboxSetUA__z3rxc5a",p="LabelValueLayoutStyles_labelInnerStyles_insideCheckboxSet__z3rxc5b",C="LabelValueLayoutStyles_labelInnerStyles_noWrap__z3rxc5c",V="LabelValueLayoutStyles_labelSlotStyles_base__z3rxc50",z="LabelValueLayoutStyles_labelSlotStyles_start__z3rxc51",w="LabelValueLayoutStyles_labelSlotStyles_top__z3rxc52",R="LabelValueLayoutStyles_labelSlotStyles_topAndTopUA__z3rxc53",N="LabelValueLayoutStyles_labelSlotStyles_topPureReadonly__z3rxc54";e.LabelValueLayout=({label:e,labelEdge:s,children:r,labelStartWidth:_="33%",parentComponentVariant:A="textField",hasTopUserAssistance:I=!1})=>{const{baseTheme:U}=y.useComponentTheme(b.TextFieldRedwoodTheme),{baseTheme:f}=y.useComponentTheme(i.RadioRedwoodTheme),{baseTheme:W}=y.useComponentTheme(S.CheckboxRedwoodTheme),{baseTheme:k}=y.useComponentTheme(u.LabelRedwoodTheme),{baseTheme:E}=y.useComponentTheme(m.FormLayoutRedwoodTheme),j="textField"===A,v="radioSet"===A,g="checkboxSet"===A,B="start"===s,P="top"===s||"inside"===s,$="inside"===s,q=n.sizeToCSS(_),D=`calc(100% - ${q})`,G=B?{flexBasis:q,width:q,maxWidth:q}:{},H=B?{flexBasis:D,width:D,maxWidth:D}:{},{isFormLayout:J,isReadonly:K,labelWrapping:M}=o.useFormContext(),{isReadonly:O}=d.useFormFieldContext(),Q=J&&K||!J&&O,X=t.classNames([E,V,B&&z,P&&w,P&&I&&R,P&&Q&&N]),Y=t.classNames([j&&U,v&&f,g&&W,(v||g)&&k,E,c,B&&h,j&&B&&!Q&&x,v&&$&&T,g&&$&&p,v&&B&&!I&&L,g&&B&&!I&&F,"truncate"===M&&C]);return l.jsxs(a.Flex,{wrap:"wrap",align:"start",children:[l.jsx("div",{class:X,style:G,children:l.jsx("div",{class:Y,children:e})}),l.jsx("div",{class:"LabelValueLayoutStyles_valueSlotStyles__z3rxc5d",style:H,children:r})]})}}));
//# sourceMappingURL=LabelValueLayout-8c9af635.js.map