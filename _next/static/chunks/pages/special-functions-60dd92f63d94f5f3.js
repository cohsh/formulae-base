(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{4632:function(e,t,r){var n;"undefined"!=typeof self&&self,n=function(e){return function(){"use strict";var t={771:function(t){t.exports=e}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var i={};return function(){n.d(i,{default:function(){return c}});var e=n(771),t=n.n(e);let r=function(e,t,r){let n=r,i=0,a=e.length;for(;n<t.length;){let r=t[n];if(i<=0&&t.slice(n,n+a)===e)return n;"\\"===r?n++:"{"===r?i++:"}"===r&&i--,n++}return -1},a=/^\\begin{/;var o=function(e,t){let n;let i=[],o=RegExp("("+t.map(e=>e.left.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")).join("|")+")");for(;-1!==(n=e.search(o));){n>0&&(i.push({type:"text",data:e.slice(0,n)}),e=e.slice(n));let o=t.findIndex(t=>e.startsWith(t.left));if(-1===(n=r(t[o].right,e,t[o].left.length)))break;let l=e.slice(0,n+t[o].right.length),s=a.test(l)?l:e.slice(t[o].left.length,n);i.push({type:"math",data:s,rawData:l,display:t[o].display}),e=e.slice(n+t[o].right.length)}return""!==e&&i.push({type:"text",data:e}),i};let l=function(e,r){let n=o(e,r.delimiters);if(1===n.length&&"text"===n[0].type)return null;let i=document.createDocumentFragment();for(let e=0;e<n.length;e++)if("text"===n[e].type)i.appendChild(document.createTextNode(n[e].data));else{let a=document.createElement("span"),o=n[e].data;r.displayMode=n[e].display;try{r.preProcess&&(o=r.preProcess(o)),t().render(o,a,r)}catch(a){if(!(a instanceof t().ParseError))throw a;r.errorCallback("KaTeX auto-render: Failed to parse `"+n[e].data+"` with ",a),i.appendChild(document.createTextNode(n[e].rawData));continue}i.appendChild(a)}return i},s=function(e,t){for(let r=0;r<e.childNodes.length;r++){let n=e.childNodes[r];if(3===n.nodeType){let i=n.textContent,a=n.nextSibling,o=0;for(;a&&a.nodeType===Node.TEXT_NODE;)i+=a.textContent,a=a.nextSibling,o++;let s=l(i,t);if(s){for(let e=0;e<o;e++)n.nextSibling.remove();r+=s.childNodes.length-1,e.replaceChild(s,n)}else r+=o}else if(1===n.nodeType){let e=" "+n.className+" ";-1===t.ignoredTags.indexOf(n.nodeName.toLowerCase())&&t.ignoredClasses.every(t=>-1===e.indexOf(" "+t+" "))&&s(n,t)}}};var c=function(e,t){if(!e)throw Error("No element provided to render");let r={};for(let e in t)t.hasOwnProperty(e)&&(r[e]=t[e]);r.delimiters=r.delimiters||[{left:"$$",right:"$$",display:!0},{left:"\\(",right:"\\)",display:!1},{left:"\\begin{equation}",right:"\\end{equation}",display:!0},{left:"\\begin{align}",right:"\\end{align}",display:!0},{left:"\\begin{alignat}",right:"\\end{alignat}",display:!0},{left:"\\begin{gather}",right:"\\end{gather}",display:!0},{left:"\\begin{CD}",right:"\\end{CD}",display:!0},{left:"\\[",right:"\\]",display:!0}],r.ignoredTags=r.ignoredTags||["script","noscript","style","textarea","pre","code","option"],r.ignoredClasses=r.ignoredClasses||[],r.errorCallback=r.errorCallback||console.error,r.macros=r.macros||{},s(e,r)}}(),i=i.default}()},e.exports=n(r(527))},6851:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/special-functions",function(){return r(4605)}])},862:function(e,t,r){"use strict";var n=r(5893);r(7294);var i=r(1664),a=r.n(i),o=r(9008),l=r.n(o);t.Z=e=>{let{children:t,title:r="Formulae Base"}=e;return(0,n.jsxs)("div",{children:[(0,n.jsxs)(l(),{children:[(0,n.jsx)("title",{children:r}),(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,n.jsx)("header",{children:(0,n.jsx)("nav",{children:(0,n.jsx)(a(),{href:"/",children:"Home"})})}),(0,n.jsx)("h1",{children:"Formulae Base"}),t,(0,n.jsxs)("footer",{children:[(0,n.jsx)("hr",{}),(0,n.jsx)("span",{children:"\xa9Kohei Ishii"})]})]})}},2594:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(5893),i=r(7294),a=r(4173);let o=async e=>{try{await navigator.clipboard.writeText(e),a.Am.success("Copied to clipboard!",{autoClose:500})}catch(e){console.error("Failed to copy: ",e),a.Am.error("Failed to copy to clipboard.",{autoClose:500})}},l=e=>()=>{o(e)};var s=r(4632),c=r.n(s);r(2148);var d=e=>{let{text:t,...r}=e,a=(0,i.useRef)(null);return(0,i.useEffect)(()=>{a.current&&c()(a.current,{delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1}]})},[t]),(0,n.jsxs)("span",{ref:a,...r,children:["$",t,"$"]})},f=e=>{let{formula:t}=e;return(0,n.jsx)("div",{onClick:l(t),style:{cursor:"pointer"},children:(0,n.jsx)(d,{text:t})})},m=e=>{let{functions:t}=e;return(0,n.jsx)("div",{children:t.map(e=>{let{title:t,formulae:r}=e;return(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:t}),r.map((e,t)=>{let{formula:r}=e;return(0,n.jsx)("div",{children:(0,n.jsx)(f,{formula:r})},t)})]},t)})})}},4605:function(e,t,r){"use strict";r.r(t);var n=r(5893),i=r(862),a=r(2594);t.default=()=>(0,n.jsxs)(i.Z,{children:[(0,n.jsx)("h2",{children:"Special Functions"}),(0,n.jsx)(a.Z,{functions:[{title:"Gamma Function",formulae:[{description:"Definition",formula:"\\Gamma(z) := \\int_0^\\infty dt t^{z-1}e^{-t},~\\mathrm{Re}(z) > 0"},{description:"Definition",formula:"\\Gamma(z) := \\lim_{n\\to \\infty} \\frac{n^{z}n!}{\\prod_{j=0}^n(z+j)}"},{description:"Property",formula:"\\Gamma(z+1) = z\\Gamma(z),~ \\mathrm{Re}(z) > 0"},{description:"Euler's Reflection Formula",formula:"\\Gamma(z)\\Gamma(1-z) = \\frac{\\pi}{\\sin{\\pi z}},~ z \\notin \\mathbb{Z}"},{description:"Legendre Duplication Formula",formula:"\\Gamma(z)\\Gamma(z+\\frac12) = 2^{1-2z}\\pi^\\frac12 \\Gamma(2z)"}]},{title:"Beta Function",formulae:[{description:"Definition",formula:"\\mathrm{B}(z_1, z_2) := \\int_0^1 dt t^{z_1-1}(1-t)^{z_2-1},~\\mathrm{Re}(z_1),\\mathrm{Re}(z_2)>0"},{description:"Definition",formula:"\\mathrm{B}(z_1, z_2) := 2\\int_0^{\\frac{\\pi}{2}} d\\theta \\sin^{2z_1-1}\\theta \\cos^{2z_2-1} \\theta,~\\mathrm{Re}(z_1),\\mathrm{Re}(z_2)>0"},{description:"Relation with Gamma Function",formula:"\\mathrm{B}(z_1, z_2) = \\frac{\\Gamma(z_1)\\Gamma(z_2)}{\\Gamma(z_1 + z_2)}"},{description:"Property",formula:"\\mathrm{B}(z_1, z_2) = \\mathrm{B}(z_2, z_1)"},{description:"Property",formula:"\\mathrm{B}(z_1, z_2) = \\mathrm{B}(z_1, z_2 + 1) + \\mathrm{B}(z_1 + 1, z_2)"},{description:"Property",formula:"\\mathrm{B}(1, z_1) = \\frac{1}{z_1}"}]},{title:"Riemann Zeta Function",formulae:[{description:"Definition",formula:"\\zeta(z) = \\sum_{n=1}^\\infty \\frac{1}{n^z}"}]},{title:"Error Function",formulae:[{description:"Definition",formula:"\\mathrm{erf}(z) := \\frac{2}{\\pi^{\\frac12}} \\int_0^z dt e^{-t^2}"},{description:"Property",formula:"\\mathrm{erf}(-z) = -\\mathrm{erf}(z)"},{description:"Property",formula:"\\mathrm{erf}(z^*) = \\mathrm{erf}(z)^*"}]}]})]})}},function(e){e.O(0,[573,996,888,774,179],function(){return e(e.s=6851)}),_N_E=e.O()}]);