(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[891],{4632:function(e,t,r){var i;"undefined"!=typeof self&&self,i=function(e){return function(){"use strict";var t={771:function(t){t.exports=e}},r={};function i(e){var n=r[e];if(void 0!==n)return n.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,i),a.exports}i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},i.d=function(e,t){for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var n={};return function(){i.d(n,{default:function(){return s}});var e=i(771),t=i.n(e);let r=function(e,t,r){let i=r,n=0,a=e.length;for(;i<t.length;){let r=t[i];if(n<=0&&t.slice(i,i+a)===e)return i;"\\"===r?i++:"{"===r?n++:"}"===r&&n--,i++}return -1},a=/^\\begin{/;var o=function(e,t){let i;let n=[],o=RegExp("("+t.map(e=>e.left.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")).join("|")+")");for(;-1!==(i=e.search(o));){i>0&&(n.push({type:"text",data:e.slice(0,i)}),e=e.slice(i));let o=t.findIndex(t=>e.startsWith(t.left));if(-1===(i=r(t[o].right,e,t[o].left.length)))break;let l=e.slice(0,i+t[o].right.length),d=a.test(l)?l:e.slice(t[o].left.length,i);n.push({type:"math",data:d,rawData:l,display:t[o].display}),e=e.slice(i+t[o].right.length)}return""!==e&&n.push({type:"text",data:e}),n};let l=function(e,r){let i=o(e,r.delimiters);if(1===i.length&&"text"===i[0].type)return null;let n=document.createDocumentFragment();for(let e=0;e<i.length;e++)if("text"===i[e].type)n.appendChild(document.createTextNode(i[e].data));else{let a=document.createElement("span"),o=i[e].data;r.displayMode=i[e].display;try{r.preProcess&&(o=r.preProcess(o)),t().render(o,a,r)}catch(a){if(!(a instanceof t().ParseError))throw a;r.errorCallback("KaTeX auto-render: Failed to parse `"+i[e].data+"` with ",a),n.appendChild(document.createTextNode(i[e].rawData));continue}n.appendChild(a)}return n},d=function(e,t){for(let r=0;r<e.childNodes.length;r++){let i=e.childNodes[r];if(3===i.nodeType){let n=i.textContent,a=i.nextSibling,o=0;for(;a&&a.nodeType===Node.TEXT_NODE;)n+=a.textContent,a=a.nextSibling,o++;let d=l(n,t);if(d){for(let e=0;e<o;e++)i.nextSibling.remove();r+=d.childNodes.length-1,e.replaceChild(d,i)}else r+=o}else if(1===i.nodeType){let e=" "+i.className+" ";-1===t.ignoredTags.indexOf(i.nodeName.toLowerCase())&&t.ignoredClasses.every(t=>-1===e.indexOf(" "+t+" "))&&d(i,t)}}};var s=function(e,t){if(!e)throw Error("No element provided to render");let r={};for(let e in t)t.hasOwnProperty(e)&&(r[e]=t[e]);r.delimiters=r.delimiters||[{left:"$$",right:"$$",display:!0},{left:"\\(",right:"\\)",display:!1},{left:"\\begin{equation}",right:"\\end{equation}",display:!0},{left:"\\begin{align}",right:"\\end{align}",display:!0},{left:"\\begin{alignat}",right:"\\end{alignat}",display:!0},{left:"\\begin{gather}",right:"\\end{gather}",display:!0},{left:"\\begin{CD}",right:"\\end{CD}",display:!0},{left:"\\[",right:"\\]",display:!0}],r.ignoredTags=r.ignoredTags||["script","noscript","style","textarea","pre","code","option"],r.ignoredClasses=r.ignoredClasses||[],r.errorCallback=r.errorCallback||console.error,r.macros=r.macros||{},d(e,r)}}(),n=n.default}()},e.exports=i(r(527))},4227:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lattices",function(){return r(7893)}])},862:function(e,t,r){"use strict";var i=r(5893);r(7294);var n=r(1664),a=r.n(n),o=r(9008),l=r.n(o);t.Z=e=>{let{children:t,title:r="Formulae Base"}=e;return(0,i.jsxs)("div",{children:[(0,i.jsxs)(l(),{children:[(0,i.jsx)("title",{children:r}),(0,i.jsx)("meta",{charSet:"utf-8"}),(0,i.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,i.jsx)("header",{children:(0,i.jsx)("nav",{children:(0,i.jsx)(a(),{href:"/",children:"Home"})})}),(0,i.jsx)("h1",{children:"Formulae Base"}),t,(0,i.jsxs)("footer",{children:[(0,i.jsx)("hr",{}),(0,i.jsx)("span",{children:"\xa9Kohei Ishii"})]})]})}},2594:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var i=r(5893),n=r(7294),a=r(4173);let o=async e=>{try{await navigator.clipboard.writeText(e),a.Am.success("Copied to clipboard!",{autoClose:500})}catch(e){console.error("Failed to copy: ",e),a.Am.error("Failed to copy to clipboard.",{autoClose:500})}},l=e=>()=>{o(e)};var d=r(4632),s=r.n(d);r(2148);var c=e=>{let{text:t}=e,r=(0,n.useRef)(null);(0,n.useEffect)(()=>{r.current&&s()(r.current,{delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1}]})},[t]);let a=t.split("\n").map(e=>"$$".concat(e,"$$")).join("\n");return(0,i.jsx)("div",{ref:r,dangerouslySetInnerHTML:{__html:a}})},f=e=>{let{formula:t}=e;return(0,i.jsx)("div",{onClick:l(t),style:{cursor:"pointer"},children:(0,i.jsx)(c,{text:t})})},u=e=>{let{functions:t}=e;return(0,i.jsx)("div",{children:t.map(e=>{let{title:t,formulae:r}=e;return(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:t}),r.map((e,t)=>{let{formula:r}=e;return(0,i.jsx)("div",{children:(0,i.jsx)(f,{formula:r})},t)})]},t)})})}},7893:function(e,t,r){"use strict";r.r(t);var i=r(5893),n=r(862),a=r(2594);t.default=()=>(0,i.jsxs)(n.Z,{children:[(0,i.jsx)("h2",{children:"Lattices"}),(0,i.jsx)(a.Z,{functions:[{title:"Direct Lattice",formulae:[{description:"Basis",formula:"\\mathbf{A}_d := [\\mathbf{a}_1 \\cdots \\mathbf{a}_d],~(\\mathbf{a}_i \\in \\mathbb{R}^d,~ i = 1, \\cdots, d)"},{description:"Lattice Vectors",formula:"\\mathcal{A}[\\mathbf{A}_d]:=\\{ \\mathbf{A}_d \\cdot [n_1 \\cdots n_d] \\mid n_i =-N_i,\\cdots, N_i,~ i=1,\\cdots, d \\}"},{description:"Cardinality",formula:"N:=|\\mathcal{A}[\\mathbf{A}_d]|=\\prod_{i=1}^d(2N_i+1)"}]},{title:"Reciprocal Lattice",formulae:[{description:"Basis",formula:"\\mathbf{B}_d := [\\mathbf{b}_1 \\cdots \\mathbf{b}_d],~(\\mathbf{b}_i \\in \\mathbb{R}^d,~ i = 1, \\cdots, d)"},{description:"Lattice Vectors",formula:"\\mathcal{B}[\\mathbf{B}_d]:=\\{ \\mathbf{B}_d \\cdot \\mathbf{n} \\mid \\mathbf{n} \\in \\mathbb{Z}^d \\}"},{description:"Discrete Brillouin Zone",formula:"\\mathbb{DBZ}:= \\{ \\mathbf{B}_d \\cdot [f_1 \\cdots f_d] \\mid f_i = \\frac{j}{2N_i},~ i=1,\\cdots, d, ~ j=-N_i, \\cdots, N_i\\}"},{description:"Continuous Brillouin Zone",formula:"\\mathbb{CBZ}:= \\{ \\mathbf{B}_d \\cdot [f_1 \\cdots f_d] \\mid f_i \\in \\mathbb{R}^d,~ i=1,\\cdots, d,~s.t.~ |f_i| \\leq \\frac12 \\}"}]}]})]})}},function(e){e.O(0,[573,996,888,774,179],function(){return e(e.s=4227)}),_N_E=e.O()}]);