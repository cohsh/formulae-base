(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{4632:function(e,t,r){var n;"undefined"!=typeof self&&self,n=function(e){return function(){"use strict";var t={771:function(t){t.exports=e}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var i={};return function(){n.d(i,{default:function(){return d}});var e=n(771),t=n.n(e);let r=function(e,t,r){let n=r,i=0,a=e.length;for(;n<t.length;){let r=t[n];if(i<=0&&t.slice(n,n+a)===e)return n;"\\"===r?n++:"{"===r?i++:"}"===r&&i--,n++}return -1},a=/^\\begin{/;var l=function(e,t){let n;let i=[],l=RegExp("("+t.map(e=>e.left.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")).join("|")+")");for(;-1!==(n=e.search(l));){n>0&&(i.push({type:"text",data:e.slice(0,n)}),e=e.slice(n));let l=t.findIndex(t=>e.startsWith(t.left));if(-1===(n=r(t[l].right,e,t[l].left.length)))break;let s=e.slice(0,n+t[l].right.length),o=a.test(s)?s:e.slice(t[l].left.length,n);i.push({type:"math",data:o,rawData:s,display:t[l].display}),e=e.slice(n+t[l].right.length)}return""!==e&&i.push({type:"text",data:e}),i};let s=function(e,r){let n=l(e,r.delimiters);if(1===n.length&&"text"===n[0].type)return null;let i=document.createDocumentFragment();for(let e=0;e<n.length;e++)if("text"===n[e].type)i.appendChild(document.createTextNode(n[e].data));else{let a=document.createElement("span"),l=n[e].data;r.displayMode=n[e].display;try{r.preProcess&&(l=r.preProcess(l)),t().render(l,a,r)}catch(a){if(!(a instanceof t().ParseError))throw a;r.errorCallback("KaTeX auto-render: Failed to parse `"+n[e].data+"` with ",a),i.appendChild(document.createTextNode(n[e].rawData));continue}i.appendChild(a)}return i},o=function(e,t){for(let r=0;r<e.childNodes.length;r++){let n=e.childNodes[r];if(3===n.nodeType){let i=n.textContent,a=n.nextSibling,l=0;for(;a&&a.nodeType===Node.TEXT_NODE;)i+=a.textContent,a=a.nextSibling,l++;let o=s(i,t);if(o){for(let e=0;e<l;e++)n.nextSibling.remove();r+=o.childNodes.length-1,e.replaceChild(o,n)}else r+=l}else if(1===n.nodeType){let e=" "+n.className+" ";-1===t.ignoredTags.indexOf(n.nodeName.toLowerCase())&&t.ignoredClasses.every(t=>-1===e.indexOf(" "+t+" "))&&o(n,t)}}};var d=function(e,t){if(!e)throw Error("No element provided to render");let r={};for(let e in t)t.hasOwnProperty(e)&&(r[e]=t[e]);r.delimiters=r.delimiters||[{left:"$$",right:"$$",display:!0},{left:"\\(",right:"\\)",display:!1},{left:"\\begin{equation}",right:"\\end{equation}",display:!0},{left:"\\begin{align}",right:"\\end{align}",display:!0},{left:"\\begin{alignat}",right:"\\end{alignat}",display:!0},{left:"\\begin{gather}",right:"\\end{gather}",display:!0},{left:"\\begin{CD}",right:"\\end{CD}",display:!0},{left:"\\[",right:"\\]",display:!0}],r.ignoredTags=r.ignoredTags||["script","noscript","style","textarea","pre","code","option"],r.ignoredClasses=r.ignoredClasses||[],r.errorCallback=r.errorCallback||console.error,r.macros=r.macros||{},o(e,r)}}(),i=i.default}()},e.exports=n(r(527))},5994:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quantum-mechanics",function(){return r(1381)}])},9648:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var n=r(5893),i=r(7294),a=r(4173);let l=async e=>{try{await navigator.clipboard.writeText(e),a.Am.success("Copied to clipboard!",{autoClose:500})}catch(e){console.error("Failed to copy: ",e),a.Am.error("Failed to copy to clipboard.",{autoClose:500})}},s=e=>()=>{l(e)};var o=r(4632),d=r.n(o);r(2148);var c=e=>{let{text:t}=e,r=(0,i.useRef)(null);(0,i.useEffect)(()=>{r.current&&d()(r.current,{delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1}]})},[t]);let a=t.split("\n").map(e=>"$$".concat(e,"$$")).join("\n");return(0,n.jsx)("div",{ref:r,dangerouslySetInnerHTML:{__html:a}})},h=e=>{let{children:t}=e;return(0,n.jsx)("div",{onClick:s(t),style:{cursor:"pointer"},children:(0,n.jsx)(c,{text:t})})}},862:function(e,t,r){"use strict";var n=r(5893);r(7294);var i=r(1664),a=r.n(i),l=r(9008),s=r.n(l);t.Z=e=>{let{children:t,title:r="Formulae Base"}=e;return(0,n.jsxs)("div",{children:[(0,n.jsxs)(s(),{children:[(0,n.jsx)("title",{children:r}),(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,n.jsx)("header",{children:(0,n.jsx)("nav",{children:(0,n.jsx)(a(),{href:"/",children:"Home"})})}),(0,n.jsx)("h1",{children:"Formulae Base"}),t,(0,n.jsxs)("footer",{children:[(0,n.jsx)("hr",{}),(0,n.jsx)("span",{children:"\xa9Kohei Ishii"})]})]})}},1381:function(e,t,r){"use strict";r.r(t);var n=r(5893),i=r(862),a=r(9648);t.default=()=>(0,n.jsxs)(i.Z,{children:[(0,n.jsx)("h2",{children:"Quantum Mechanics"}),(0,n.jsx)("h3",{children:"Schr\xf6dinger Equations"}),(0,n.jsx)(a.Z,{children:"i\\frac{\\partial}{\\partial t}\\ket{\\Psi(t)} = \\hat{H}\\ket{\\Psi(t)}"}),(0,n.jsx)(a.Z,{children:"\\hat{H}\\ket{\\Psi_n} = E_n \\ket{\\Psi_n}"}),(0,n.jsx)("h3",{children:"Commutation Relations"}),(0,n.jsx)(a.Z,{children:"[\\hat{O}_1, \\hat{O}_2] := \\hat{O}_1 \\hat{O}_2 - \\hat{O}_2 \\hat{O}_1"}),(0,n.jsx)(a.Z,{children:"[\\hat{x}_i, \\hat{p}_j] = i \\delta_{ij}"}),(0,n.jsx)("h3",{children:"Heisenberg Pictures (Assume Hamiltonian is time independent.)"}),(0,n.jsx)(a.Z,{children:"\\hat{O}_\\mathrm{H}(t) := e^{i \\hat{H} t}\\hat{O}_\\mathrm{S} e^{-i \\hat{H} t}"}),(0,n.jsx)(a.Z,{children:"i\\frac{\\partial}{\\partial t} \\hat{O}_\\mathrm{H}(t) = [\\hat{O}_\\mathrm{H}(t), \\hat{H}]"})]})}},function(e){e.O(0,[573,996,888,774,179],function(){return e(e.s=5994)}),_N_E=e.O()}]);