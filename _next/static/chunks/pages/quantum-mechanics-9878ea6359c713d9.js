(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{5994:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quantum-mechanics",function(){return r(1381)}])},862:function(e,t,r){"use strict";var l=r(5893);r(7294);var n=r(1664),a=r.n(n),i=r(9008),o=r.n(i);t.Z=e=>{let{children:t,title:r="Formulae Base"}=e;return(0,l.jsxs)("div",{children:[(0,l.jsxs)(o(),{children:[(0,l.jsx)("title",{children:r}),(0,l.jsx)("meta",{charSet:"utf-8"}),(0,l.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,l.jsx)("header",{children:(0,l.jsx)("nav",{children:(0,l.jsx)(a(),{href:"/",children:"Home"})})}),(0,l.jsx)("h1",{children:"Formulae Base"}),t,(0,l.jsxs)("footer",{children:[(0,l.jsx)("hr",{}),(0,l.jsx)("span",{children:"\xa9Kohei Ishii"})]})]})}},2594:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var l=r(5893);r(7294);var n=r(4173);let a=async e=>{try{await navigator.clipboard.writeText(e),n.Am.success("Copied to clipboard!",{autoClose:500})}catch(e){console.error("Failed to copy: ",e),n.Am.error("Failed to copy to clipboard.",{autoClose:500})}},i=e=>()=>{a(e)};var o=r(5152),s=r.n(o);r(2148);let u=s()(()=>Promise.all([r.e(573),r.e(101)]).then(r.bind(r,6101)),{loadableGenerated:{webpack:()=>[6101]},ssr:!1});var d=e=>{let{text:t,...r}=e;return(0,l.jsx)(u,{text:t,...r})},c=e=>{let{formula:t}=e;return(0,l.jsx)("div",{onClick:i(t),style:{cursor:"pointer"},children:(0,l.jsx)(d,{text:t})})},h=e=>{let{functions:t}=e;return(0,l.jsx)("div",{children:t.map(e=>{let{title:t,formulae:r}=e;return(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{children:t}),r.map((e,t)=>{let{formula:r}=e;return(0,l.jsx)("div",{children:(0,l.jsx)(c,{formula:r})},t)})]},t)})})}},8864:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return o},noSSR:function(){return i}});let l=r(8754);r(5893),r(7294);let n=l._(r(6016));function a(e){return{default:(null==e?void 0:e.default)||e}}function i(e,t){return delete t.webpack,delete t.modules,e(t)}function o(e,t){let r=n.default,l={loading:e=>{let{error:t,isLoading:r,pastDelay:l}=e;return null}};e instanceof Promise?l.loader=()=>e:"function"==typeof e?l.loader=e:"object"==typeof e&&(l={...l,...e});let o=(l={...l,...t}).loader;return(l.loadableGenerated&&(l={...l,...l.loadableGenerated},delete l.loadableGenerated),"boolean"!=typeof l.ssr||l.ssr)?r({...l,loader:()=>null!=o?o().then(a):Promise.resolve(a(()=>null))}):(delete l.webpack,delete l.modules,i(r,l))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},572:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return l}});let l=r(8754)._(r(7294)).default.createContext(null)},6016:function(e,t,r){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return h}});let l=r(8754)._(r(7294)),n=r(572),a=[],i=[],o=!1;function s(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}class u{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function d(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),a=null;function s(){if(!a){let t=new u(e,r);a={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return a.promise()}if(!o){let e=r.webpack?r.webpack():r.modules;e&&i.push(t=>{for(let r of e)if(t.includes(r))return s()})}function d(e,t){!function(){s();let e=l.default.useContext(n.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}();let i=l.default.useSyncExternalStore(a.subscribe,a.getCurrentValue,a.getCurrentValue);return l.default.useImperativeHandle(t,()=>({retry:a.retry}),[]),l.default.useMemo(()=>{var t;return i.loading||i.error?l.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:a.retry}):i.loaded?l.default.createElement((t=i.loaded)&&t.default?t.default:t,e):null},[e,i])}return d.preload=()=>s(),d.displayName="LoadableComponent",l.default.forwardRef(d)}(s,e)}function c(e,t){let r=[];for(;e.length;){let l=e.pop();r.push(l(t))}return Promise.all(r).then(()=>{if(e.length)return c(e,t)})}d.preloadAll=()=>new Promise((e,t)=>{c(a).then(e,t)}),d.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let r=()=>(o=!0,t());c(i,e).then(r,r)})),window.__NEXT_PRELOADREADY=d.preloadReady;let h=d},1381:function(e,t,r){"use strict";r.r(t);var l=r(5893),n=r(862),a=r(2594);t.default=()=>(0,l.jsxs)(n.Z,{children:[(0,l.jsx)("h2",{children:"Quantum Mechanics"}),(0,l.jsx)(a.Z,{functions:[{title:"Schr\xf6dinger Equations",formulae:[{description:"Time Dependent",formula:"i\\frac{\\partial}{\\partial t}\\ket{\\Psi(t)} = \\hat{H}\\ket{\\Psi(t)}"},{description:"Time Independent",formula:"\\hat{H}\\ket{\\Psi_n} = E_n \\ket{\\Psi_n}"}]},{title:"Commutation Relations",formulae:[{description:"Definition",formula:"[\\hat{O}_1, \\hat{O}_2] := \\hat{O}_1 \\hat{O}_2 - \\hat{O}_2 \\hat{O}_1"},{description:"Cannonical",formula:"[\\hat{x}_i, \\hat{p}_j] = i \\delta_{ij}"}]}]})]})},5152:function(e,t,r){e.exports=r(8864)}},function(e){e.O(0,[996,888,774,179],function(){return e(e.s=5994)}),_N_E=e.O()}]);