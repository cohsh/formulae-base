(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{5994:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quantum-mechanics",function(){return r(1381)}])},862:function(e,t,r){"use strict";var n=r(5893);r(7294);var i=r(1664),a=r.n(i),o=r(9008),s=r.n(o);t.Z=e=>{let{children:t,title:r="Formulae Base"}=e;return(0,n.jsxs)("div",{children:[(0,n.jsxs)(s(),{children:[(0,n.jsx)("title",{children:r}),(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,n.jsx)("header",{children:(0,n.jsx)("nav",{children:(0,n.jsx)(a(),{href:"/",children:"Home"})})}),(0,n.jsx)("h1",{children:"Formulae Base"}),t,(0,n.jsxs)("footer",{children:[(0,n.jsx)("hr",{}),(0,n.jsx)("span",{children:"\xa9Kohei Ishii"})]})]})}},9477:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(5893);r(7294);var i=r(7617),a=r(4173);let o=async e=>{try{await navigator.clipboard.writeText(e),a.Am.success("Copied to clipboard!",{autoClose:500})}catch(e){console.error("Failed to copy: ",e),a.Am.error("Failed to copy to clipboard.",{autoClose:500})}},s=e=>()=>{o(e)};var c=e=>{let{formula:t}=e;return(0,n.jsx)("div",{onClick:s(t),style:{cursor:"pointer"},children:(0,n.jsx)(i.BlockMath,{math:t})})},l=e=>{let{functions:t}=e;return(0,n.jsx)("div",{children:t.map(e=>{let{title:t,formulae:r}=e;return(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:t}),r.map((e,t)=>{let{formula:r}=e;return(0,n.jsx)("div",{children:(0,n.jsx)(c,{formula:r})},t)})]},t)})})}},1381:function(e,t,r){"use strict";r.r(t);var n=r(5893),i=r(862),a=r(9477);t.default=()=>(0,n.jsxs)(i.Z,{children:[(0,n.jsx)("h2",{children:"Quantum Mechanics"}),(0,n.jsx)(a.Z,{functions:[{title:"Schr\xf6dinger Equations",formulae:[{description:"Time Dependent",formula:"i\\frac{\\partial}{\\partial t}\\ket{\\Psi(t)} = \\hat{H}\\ket{\\Psi(t)}"},{description:"Time Independent",formula:"\\hat{H}\\ket{\\Psi_n} = E_n \\ket{\\Psi_n}"}]},{title:"Commutation Relations",formulae:[{description:"Definition",formula:"[\\hat{O}_1, \\hat{O}_2] := \\hat{O}_1 \\hat{O}_2 - \\hat{O}_2 \\hat{O}_1"},{description:"Cannonical",formula:"[\\hat{x}_i, \\hat{p}_j] = i \\delta_{ij}"}]}]})]})},2703:function(e,t,r){"use strict";var n=r(414);function i(){}function a(){}a.resetWarningCache=i,e.exports=function(){function e(e,t,r,i,a,o){if(o!==n){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:i};return r.PropTypes=r,r}},5697:function(e,t,r){e.exports=r(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},7617:function(e,t,r){var n,i,a;a=function(e,t,r,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}Object.defineProperty(e,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(e,{BlockMath:()=>u,InlineMath:()=>d}),t=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=a(void 0);if(r&&r.has(e))return r.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var s=i?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(n,o,s):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}(t),r=i(r),n=i(n);let o=(e,{displayMode:i})=>{let a=({children:r,errorColor:a,math:o,renderError:s})=>{let c=null!=o?o:r,{html:l,error:u}=(0,t.useMemo)(()=>{try{return{html:n.default.renderToString(c,{displayMode:i,errorColor:a,throwOnError:!!s}),error:void 0}}catch(e){if(e instanceof n.default.ParseError||e instanceof TypeError)return{error:e};throw e}},[c,a,s]);return u?s?s(u):t.default.createElement(e,{html:`${u.message}`}):t.default.createElement(e,{html:l})};return a.propTypes={children:r.default.string,errorColor:r.default.string,math:r.default.string,renderError:r.default.func},a},s={html:r.default.string.isRequired},c=({html:e})=>t.default.createElement("div",{"data-testid":"react-katex",dangerouslySetInnerHTML:{__html:e}});c.propTypes=s;let l=({html:e})=>t.default.createElement("span",{"data-testid":"react-katex",dangerouslySetInnerHTML:{__html:e}});l.propTypes=s;let u=o(c,{displayMode:!0}),d=o(l,{displayMode:!1})},"object"==typeof e.exports?a(t,r(7294),r(5697),r(527)):(n=[t,r(7294),r(5697),r(527)],void 0===(i=a.apply(t,n))||(e.exports=i))}},function(e){e.O(0,[573,996,888,774,179],function(){return e(e.s=5994)}),_N_E=e.O()}]);