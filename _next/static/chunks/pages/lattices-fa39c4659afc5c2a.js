(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[891],{4632:function(e,t,r){var n;"undefined"!=typeof self&&self,n=function(e){return function(){"use strict";var t={771:function(t){t.exports=e}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var i={};return function(){n.d(i,{default:function(){return s}});var e=n(771),t=n.n(e);let r=function(e,t,r){let n=r,i=0,a=e.length;for(;n<t.length;){let r=t[n];if(i<=0&&t.slice(n,n+a)===e)return n;"\\"===r?n++:"{"===r?i++:"}"===r&&i--,n++}return -1},a=/^\\begin{/;var l=function(e,t){let n;let i=[],l=RegExp("("+t.map(e=>e.left.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")).join("|")+")");for(;-1!==(n=e.search(l));){n>0&&(i.push({type:"text",data:e.slice(0,n)}),e=e.slice(n));let l=t.findIndex(t=>e.startsWith(t.left));if(-1===(n=r(t[l].right,e,t[l].left.length)))break;let d=e.slice(0,n+t[l].right.length),o=a.test(d)?d:e.slice(t[l].left.length,n);i.push({type:"math",data:o,rawData:d,display:t[l].display}),e=e.slice(n+t[l].right.length)}return""!==e&&i.push({type:"text",data:e}),i};let d=function(e,r){let n=l(e,r.delimiters);if(1===n.length&&"text"===n[0].type)return null;let i=document.createDocumentFragment();for(let e=0;e<n.length;e++)if("text"===n[e].type)i.appendChild(document.createTextNode(n[e].data));else{let a=document.createElement("span"),l=n[e].data;r.displayMode=n[e].display;try{r.preProcess&&(l=r.preProcess(l)),t().render(l,a,r)}catch(a){if(!(a instanceof t().ParseError))throw a;r.errorCallback("KaTeX auto-render: Failed to parse `"+n[e].data+"` with ",a),i.appendChild(document.createTextNode(n[e].rawData));continue}i.appendChild(a)}return i},o=function(e,t){for(let r=0;r<e.childNodes.length;r++){let n=e.childNodes[r];if(3===n.nodeType){let i=n.textContent,a=n.nextSibling,l=0;for(;a&&a.nodeType===Node.TEXT_NODE;)i+=a.textContent,a=a.nextSibling,l++;let o=d(i,t);if(o){for(let e=0;e<l;e++)n.nextSibling.remove();r+=o.childNodes.length-1,e.replaceChild(o,n)}else r+=l}else if(1===n.nodeType){let e=" "+n.className+" ";-1===t.ignoredTags.indexOf(n.nodeName.toLowerCase())&&t.ignoredClasses.every(t=>-1===e.indexOf(" "+t+" "))&&o(n,t)}}};var s=function(e,t){if(!e)throw Error("No element provided to render");let r={};for(let e in t)t.hasOwnProperty(e)&&(r[e]=t[e]);r.delimiters=r.delimiters||[{left:"$$",right:"$$",display:!0},{left:"\\(",right:"\\)",display:!1},{left:"\\begin{equation}",right:"\\end{equation}",display:!0},{left:"\\begin{align}",right:"\\end{align}",display:!0},{left:"\\begin{alignat}",right:"\\end{alignat}",display:!0},{left:"\\begin{gather}",right:"\\end{gather}",display:!0},{left:"\\begin{CD}",right:"\\end{CD}",display:!0},{left:"\\[",right:"\\]",display:!0}],r.ignoredTags=r.ignoredTags||["script","noscript","style","textarea","pre","code","option"],r.ignoredClasses=r.ignoredClasses||[],r.errorCallback=r.errorCallback||console.error,r.macros=r.macros||{},o(e,r)}}(),i=i.default}()},e.exports=n(r(527))},4227:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lattices",function(){return r(7893)}])},9648:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var n=r(5893),i=r(7294),a=r(4173);let l=async e=>{try{await navigator.clipboard.writeText(e),a.Am.success("Copied to clipboard!",{autoClose:500})}catch(e){console.error("Failed to copy: ",e),a.Am.error("Failed to copy to clipboard.",{autoClose:500})}},d=e=>()=>{l(e)};var o=r(4632),s=r.n(o);r(2148);var c=e=>{let{text:t}=e,r=(0,i.useRef)(null);(0,i.useEffect)(()=>{r.current&&s()(r.current,{delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1}]})},[t]);let a=t.split("\n").map(e=>"$$".concat(e,"$$")).join("\n");return(0,n.jsx)("div",{ref:r,dangerouslySetInnerHTML:{__html:a}})},h=e=>{let{children:t}=e;return(0,n.jsx)("div",{onClick:d(t),style:{cursor:"pointer"},children:(0,n.jsx)(c,{text:t})})}},862:function(e,t,r){"use strict";var n=r(5893);r(7294);var i=r(1664),a=r.n(i),l=r(9008),d=r.n(l);t.Z=e=>{let{children:t,title:r="Formulae Base"}=e;return(0,n.jsxs)("div",{children:[(0,n.jsxs)(d(),{children:[(0,n.jsx)("title",{children:r}),(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,n.jsx)("header",{children:(0,n.jsx)("nav",{children:(0,n.jsx)(a(),{href:"/",children:"Home"})})}),(0,n.jsx)("h1",{children:"Formulae Base"}),t,(0,n.jsxs)("footer",{children:[(0,n.jsx)("hr",{}),(0,n.jsx)("span",{children:"\xa9Kohei Ishii"})]})]})}},7893:function(e,t,r){"use strict";r.r(t);var n=r(5893),i=r(862),a=r(9648);t.default=()=>(0,n.jsxs)(i.Z,{children:[(0,n.jsx)("h2",{children:"Lattices"}),(0,n.jsx)("h3",{children:"Direct Lattice"}),(0,n.jsx)(a.Z,{children:"\\mathbf{A}_d := [\\mathbf{a}_1 \\cdots \\mathbf{a}_d],~(\\mathbf{a}_i \\in \\mathbb{R}^d,~ i = 1, \\cdots, d)"}),(0,n.jsx)(a.Z,{children:"\\mathcal{A}[\\mathbf{A}_d]:=\\{ \\mathbf{A}_d \\cdot [n_1 \\cdots n_d] \\mid n_i =-N_i,\\cdots, N_i,~ i=1,\\cdots, d \\}"}),(0,n.jsx)(a.Z,{children:"N:=|\\mathcal{A}[\\mathbf{A}_d]|=\\prod_{i=1}^d(2N_i+1)"}),(0,n.jsx)("h3",{children:"Reciprocal Lattice"}),(0,n.jsx)(a.Z,{children:"\\mathbf{B}_d := [\\mathbf{b}_1 \\cdots \\mathbf{b}_d],~(\\mathbf{b}_i \\in \\mathbb{R}^d,~ i = 1, \\cdots, d)"}),(0,n.jsx)(a.Z,{children:"\\mathcal{B}[\\mathbf{B}_d]:=\\{ \\mathbf{B}_d \\cdot \\mathbf{n} \\mid \\mathbf{n} \\in \\mathbb{Z}^d \\}"}),(0,n.jsx)("h4",{children:"Discrete Brillouin Zone"}),(0,n.jsx)(a.Z,{children:"\\mathbb{DBZ}:= \\{ \\mathbf{B}_d \\cdot [f_1 \\cdots f_d] \\mid f_i = \\frac{j}{2N_i},~ i=1,\\cdots, d, ~ j=-N_i, \\cdots, N_i\\}"}),(0,n.jsx)("h4",{children:"Continuous Brillouin Zone"}),(0,n.jsx)(a.Z,{children:"\\mathbb{CBZ}:= \\{ \\mathbf{B}_d \\cdot [f_1 \\cdots f_d] \\mid f_i \\in \\mathbb{R}^d,~ i=1,\\cdots, d,~s.t.~ |f_i| \\leq \\frac12 \\}"})]})}},function(e){e.O(0,[573,996,888,774,179],function(){return e(e.s=4227)}),_N_E=e.O()}]);