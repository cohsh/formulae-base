(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{5994:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quantum-mechanics",function(){return i(1381)}])},862:function(e,t,i){"use strict";var n=i(5893);i(7294);var r=i(1664),a=i.n(r),s=i(9008),c=i.n(s);t.Z=e=>{let{children:t,title:i="Formulae Base"}=e;return(0,n.jsxs)("div",{children:[(0,n.jsxs)(c(),{children:[(0,n.jsx)("title",{children:i}),(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,n.jsx)("header",{children:(0,n.jsx)("nav",{children:(0,n.jsx)(a(),{href:"/",children:"Home"})})}),(0,n.jsx)("h1",{children:"Formulae Base"}),t,(0,n.jsxs)("footer",{children:[(0,n.jsx)("hr",{}),(0,n.jsx)("span",{children:"\xa9Kohei Ishii"})]})]})}},9477:function(e,t,i){"use strict";i.d(t,{Z:function(){return l}});var n=i(5893);i(7294);var r=i(7617),a=i(4173);i(2130);let s=async e=>{try{await navigator.clipboard.writeText(e),a.Am.success("Copied to clipboard!",{autoClose:500})}catch(e){console.error("Failed to copy: ",e),a.Am.error("Failed to copy to clipboard.",{autoClose:500})}},c=e=>()=>{s(e)};i(2148);var o=e=>{let{formula:t}=e;return(0,n.jsx)("div",{onClick:c(t),style:{cursor:"pointer"},children:(0,n.jsx)(r.BlockMath,{math:t})})},l=e=>{let{functions:t}=e;return(0,n.jsxs)("div",{children:[t.map(e=>{let{title:t,formulae:i}=e;return(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:t}),i.map((e,t)=>{let{formula:i}=e;return(0,n.jsx)("div",{children:(0,n.jsx)(o,{formula:i})},t)})]},t)}),(0,n.jsx)(a.Ix,{})]})}},1381:function(e,t,i){"use strict";i.r(t);var n=i(5893),r=i(862),a=i(9477);t.default=()=>(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("h2",{children:"Quantum Mechanics"}),(0,n.jsx)(a.Z,{functions:[{title:"Schr\xf6dinger Equations",formulae:[{description:"Time Dependent",formula:"i\\frac{\\partial}{\\partial t}\\ket{\\Psi(t)} = \\hat{H}\\ket{\\Psi(t)}"},{description:"Time Independent",formula:"\\hat{H}\\ket{\\Psi_n} = E_n \\ket{\\Psi_n}"}]},{title:"Commutation Relations",formulae:[{description:"Definition",formula:"[\\hat{O}_1, \\hat{O}_2] := \\hat{O}_1 \\hat{O}_2 - \\hat{O}_2 \\hat{O}_1"},{description:"Cannonical",formula:"[\\hat{x}_i, \\hat{p}_j] = i \\delta_{ij}"}]}]})]})}},function(e){e.O(0,[573,780,161,888,774,179],function(){return e(e.s=5994)}),_N_E=e.O()}]);