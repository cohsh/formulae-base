(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[101],{4632:function(e,t,r){var n;"undefined"!=typeof self&&self,n=function(e){return function(){"use strict";var t={771:function(t){t.exports=e}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var l=r[e]={exports:{}};return t[e](l,l.exports,n),l.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var i={};return function(){n.d(i,{default:function(){return d}});var e=n(771),t=n.n(e);let r=function(e,t,r){let n=r,i=0,l=e.length;for(;n<t.length;){let r=t[n];if(i<=0&&t.slice(n,n+l)===e)return n;"\\"===r?n++:"{"===r?i++:"}"===r&&i--,n++}return -1},l=/^\\begin{/;var a=function(e,t){let n;let i=[],a=RegExp("("+t.map(e=>e.left.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")).join("|")+")");for(;-1!==(n=e.search(a));){n>0&&(i.push({type:"text",data:e.slice(0,n)}),e=e.slice(n));let a=t.findIndex(t=>e.startsWith(t.left));if(-1===(n=r(t[a].right,e,t[a].left.length)))break;let o=e.slice(0,n+t[a].right.length),s=l.test(o)?o:e.slice(t[a].left.length,n);i.push({type:"math",data:s,rawData:o,display:t[a].display}),e=e.slice(n+t[a].right.length)}return""!==e&&i.push({type:"text",data:e}),i};let o=function(e,r){let n=a(e,r.delimiters);if(1===n.length&&"text"===n[0].type)return null;let i=document.createDocumentFragment();for(let e=0;e<n.length;e++)if("text"===n[e].type)i.appendChild(document.createTextNode(n[e].data));else{let l=document.createElement("span"),a=n[e].data;r.displayMode=n[e].display;try{r.preProcess&&(a=r.preProcess(a)),t().render(a,l,r)}catch(l){if(!(l instanceof t().ParseError))throw l;r.errorCallback("KaTeX auto-render: Failed to parse `"+n[e].data+"` with ",l),i.appendChild(document.createTextNode(n[e].rawData));continue}i.appendChild(l)}return i},s=function(e,t){for(let r=0;r<e.childNodes.length;r++){let n=e.childNodes[r];if(3===n.nodeType){let i=n.textContent,l=n.nextSibling,a=0;for(;l&&l.nodeType===Node.TEXT_NODE;)i+=l.textContent,l=l.nextSibling,a++;let s=o(i,t);if(s){for(let e=0;e<a;e++)n.nextSibling.remove();r+=s.childNodes.length-1,e.replaceChild(s,n)}else r+=a}else if(1===n.nodeType){let e=" "+n.className+" ";-1===t.ignoredTags.indexOf(n.nodeName.toLowerCase())&&t.ignoredClasses.every(t=>-1===e.indexOf(" "+t+" "))&&s(n,t)}}};var d=function(e,t){if(!e)throw Error("No element provided to render");let r={};for(let e in t)t.hasOwnProperty(e)&&(r[e]=t[e]);r.delimiters=r.delimiters||[{left:"$$",right:"$$",display:!0},{left:"\\(",right:"\\)",display:!1},{left:"\\begin{equation}",right:"\\end{equation}",display:!0},{left:"\\begin{align}",right:"\\end{align}",display:!0},{left:"\\begin{alignat}",right:"\\end{alignat}",display:!0},{left:"\\begin{gather}",right:"\\end{gather}",display:!0},{left:"\\begin{CD}",right:"\\end{CD}",display:!0},{left:"\\[",right:"\\]",display:!0}],r.ignoredTags=r.ignoredTags||["script","noscript","style","textarea","pre","code","option"],r.ignoredClasses=r.ignoredClasses||[],r.errorCallback=r.errorCallback||console.error,r.macros=r.macros||{},s(e,r)}}(),i=i.default}()},e.exports=n(r(527))},6101:function(e,t,r){"use strict";r.r(t);var n=r(5893),i=r(7294),l=r(4632),a=r.n(l);r(2148),t.default=e=>{let{text:t,...r}=e,l=(0,i.useRef)(null);return(0,i.useEffect)(()=>{l.current&&a()(l.current,{delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1}]})},[t]),(0,n.jsxs)("span",{ref:l,...r,children:["$",t,"$"]})}}}]);