!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.geonorge=e():(t.geonorge=t.geonorge||{},t.geonorge.NavigationTabHeading=e())}(self,(function(){return(()=>{"use strict";var t={3341:(t,e,n)=>{n.r(e),n.d(e,{default:()=>i});var o=n(3062),r=n.n(o),s=n(7638),a=n.n(s)()(r());a.push([t.id,':host{font-family:"Open Sans",sans-serif;display:inline-flex;cursor:pointer}:host slot{display:block;background-color:#7da1c4;padding:10px 12px;transition:all .35s linear 0s;color:#fff;border-bottom:1px solid transparent;background-clip:padding-box;border-radius:0;font-size:13px;margin-bottom:0;margin-bottom:-1px;margin-right:2px}:host slot:hover{background-color:#fe5000;color:#fff;border-color:transparent}:host slot.selected{border:1px solid #414042;border-bottom:1px solid #fff;background-color:#fff;color:#555;cursor:default}',"",{version:3,sources:["webpack://./custom-elements/navigation-tabs/navigation-tab-heading/navigation-tab-heading.scss","webpack://./style/variables/_typography.scss","webpack://./style/variables/_colors.scss"],names:[],mappings:"AAEA,MACI,kCCHW,CDIX,mBAAA,CACA,cAAA,CAEA,WACI,aAAA,CACA,wBECU,CAAA,iBAAA,CFCV,6BAAA,CACA,UAAA,CACA,mCAAA,CACA,2BAAA,CACA,eAAA,CACA,cAAA,CACA,eAAA,CACA,kBAAA,CACA,gBAAA,CAEA,iBACI,wBEbI,CFcJ,UAAA,CACA,wBAAA,CAGJ,oBACI,wBAAA,CACA,4BAAA,CACA,qBAAA,CACA,UAAA,CACA,cAAA",sourcesContent:['@import "../../../style/all";\n\n:host {\n    font-family: $default-font;\n    display: inline-flex;\n    cursor: pointer;\n\n    slot {\n        display: block;\n        background-color: $secondary-brand;\n        padding: 10px 12px;\n        transition: all 0.35s linear 0s;\n        color: #fff;\n        border-bottom: 1px solid transparent;\n        background-clip: padding-box;\n        border-radius: 0;\n        font-size: 13px;\n        margin-bottom: 0;\n        margin-bottom: -1px;\n        margin-right: 2px;\n\n        &:hover {\n            background-color: $primary-brand;\n            color: #fff;\n            border-color: transparent;\n        }\n\n        &.selected {\n            border: 1px solid #414042;\n            border-bottom: 1px solid #fff;\n            background-color: #fff;\n            color: #555;\n            cursor: default;\n        }\n    }\n}\n','$default-font: "Open Sans", sans-serif;\n$header-font: "Raleway";',"$body-background: #ffffff;\n$navigation-bar-background:  #f7f7f7;\n$hover-background: rgba(0,0,0,.05);\n$default-border: #d8d8d8;\n\n$default-background: #eee;\n$default-background-hover: #ddd;\n$default-text:#2F3940;\n\n$primary-brand: #FE5000;\n$secondary-brand: #7da1c4;\n\n$primary-background: #7DA1C4;\n$primary-background-hover: #FE5000;\n$primary-text: #3767C7;\n$primary-text-hover:#0056b3;\n\n\n$success-background: #06A755;\n$success-background-hover: #009745;\n$success-text: #06A755;\n\n\n$warning-background: #C38621;\n$warning-background-hover: #B37611;\n$warning-text: #C38621;\n\n$danger-background: #E00d0D;\n$danger-background-hover: #D00000;\n$danger-text: #E00d0D;\n\n$disabled-background: #ffffff;\n$disabled-text: #d8d8d8;\n"],sourceRoot:""}]);const i=a},6290:(t,e,n)=>{n.r(e),n.d(e,{default:()=>o});const o='<template>\n    <slot name="tab-heading"></slot>\n</template>'},7638:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,o){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(o)for(var s=0;s<this.length;s++){var a=this[s][0];null!=a&&(r[a]=!0)}for(var i=0;i<t.length;i++){var c=[].concat(t[i]);o&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},3062:t=>{function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}t.exports=function(t){var n,o,r=(o=4,function(t){if(Array.isArray(t))return t}(n=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var o,r,s=[],a=!0,i=!1;try{for(n=n.call(t);!(a=(o=n.next()).done)&&(s.push(o.value),!e||s.length!==e);a=!0);}catch(t){i=!0,r=t}finally{try{a||null==n.return||n.return()}finally{if(i)throw r}}return s}}(n,o)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,n):void 0}}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=r[1],a=r[3];if(!a)return s;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),l="/*# ".concat(c," */"),d=a.sources.map((function(t){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(t," */")}));return[s].concat(d).concat([l]).join("\n")}return[s].join("\n")}},1397:function(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(r,s){function a(t){try{c(o.next(t))}catch(t){s(t)}}function i(t){try{c(o.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,i)}c((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.Component=void 0;const r=n(5969),s=n(5773),a=n(3804);e.Component=t=>e=>{var n;const i=t.tag||a.toKebabCase(e.prototype.constructor.name),c=((n=class extends e{constructor(){super(),this.props={},this.showShadowRoot=null==t.shadow||t.shadow,!this.shadowRoot&&this.showShadowRoot&&this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys(this.propsInit||{}).map((t=>a.toKebabCase(t)))}attributeChangedCallback(t,e,n){this.onAttributeChange(t,e,n)}onAttributeChange(t,e,n,o=!0){if(e!=n){o&&(this[a.toCamelCase(t)]=n);const r=this.constructor.watchAttributes;if(r&&r[t]){const o=r[t];this.__connected&&"function"==typeof this[o]&&this[o]({old:e,new:n})}}}connectedCallback(){const t=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return o(this,void 0,void 0,(function*(){yield this.render(),t.connectedCallback&&t.connectedCallback.call(this),this.__connected=!0,r.addEventListeners(this),s.initializeProps(this)}))}render(){return o(this,void 0,void 0,(function*(){if(this.__connected)return;const e=document.createElement("template");e.innerHTML=yield this.getStyle(),t.template instanceof Promise?e.content.appendChild(yield this.getExternalTemplate()):"string"==typeof t.template&&(e.innerHTML+=t.template),(this.showShadowRoot?this.shadowRoot:this).appendChild(e.content.cloneNode(!0))}))}getExternalTemplate(){return o(this,void 0,void 0,(function*(){const e=(yield t.template).default.toString(),n=document.createRange().createContextualFragment(e);return 1===n.children.length&&"TEMPLATE"===n.children[0].nodeName?n.firstChild.content:n}))}getStyle(){return o(this,void 0,void 0,(function*(){let e;return t.style instanceof Promise?e=(yield t.style).default.toString():"string"==typeof t.style&&(e=t.style),e?`<style>${e}</style>`:""}))}}).__connected=!1,n.ready=new Promise(((t,e)=>t(!0))),n);return customElements.get(i)||customElements.define(i,c),c}},985:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.CustomElement=void 0;class n extends HTMLElement{constructor(){super()}connect(t){this.isConnected||document.querySelector(t).appendChild(this)}}e.CustomElement=n},265:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getShadowRootElement=e.getElement=void 0,e.getElement=t=>document.querySelector(t),e.getShadowRootElement=(t,e)=>t.shadowRoot.querySelector(e)},406:function(t,e,n){var o=this&&this.__createBinding||(Object.create?function(t,e,n,o){void 0===o&&(o=n),Object.defineProperty(t,o,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,o){void 0===o&&(o=n),t[o]=e[n]}),r=this&&this.__exportStar||function(t,e){for(var n in t)"default"===n||Object.prototype.hasOwnProperty.call(e,n)||o(e,t,n)};Object.defineProperty(e,"__esModule",{value:!0}),r(n(1397),e),r(n(985),e),r(n(265),e),r(n(5969),e),r(n(5773),e),r(n(4271),e),r(n(9766),e),r(n(4938),e)},5969:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Dispatch=e.addEventListeners=e.Listen=void 0;const o=n(3804);e.Listen=(t,e)=>(n,o)=>{n.constructor.listeners||(n.constructor.listeners=[]),n.constructor.listeners.push({selector:e,eventName:t,handler:n[o]})},e.addEventListeners=t=>{if(t.constructor.listeners){const e=t.shadowRoot||t;for(const n of t.constructor.listeners){const o=n.selector?e.querySelector(n.selector)?e.querySelector(n.selector):null:t;o&&o.addEventListener(n.eventName,(e=>{n.handler.call(t,e)}))}}},e.Dispatch=t=>(e,n)=>{Object.defineProperty(e,n,{get:function(){const e=this;return{emit(r){const s=t||o.toDotCase(n);e.dispatchEvent(new CustomEvent(s,r))}}}})}},5773:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.initializeProps=e.Prop=void 0;const o=n(3804);e.Prop=()=>(t,e)=>{const n=o.toKebabCase(e);t.constructor.propsInit||(t.constructor.propsInit={}),t.constructor.propsInit[e]=null,Object.defineProperty(t,e,{get:function(){return this.props[e]?this.props[e]:this.getAttribute(n)},set:function(t){if(this.__connected){const r=this.props[e];this.props[e]=o.tryParseInt(t),"object"!=typeof t?this.setAttribute(n,t):this.onAttributeChange(n,r,t,!1)}else this.hasAttribute(o.toKebabCase(e))||(this.constructor.propsInit[e]=t)}})},e.initializeProps=t=>{const e=t.constructor.watchAttributes;for(let n of(t=>{const e=t.constructor.watchAttributes,n=Object.assign({},e);Object.keys(n).forEach((t=>n[t]=""));const o=Object.assign(Object.assign({},n),t.constructor.propsInit);return Object.keys(o)})(t)){if(e)if(null==e[o.toKebabCase(n)])e[o.toKebabCase(n)]="";else{const r=t.props[n]||t.getAttribute(o.toKebabCase(n));"function"==typeof t[e[n]]&&t[e[n]]({new:r})}t.constructor.propsInit[n]&&(t.hasAttribute(o.toKebabCase(n))||(t[n]=t.constructor.propsInit[n]))}}},4271:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Toggle=void 0;const o=n(3804);e.Toggle=()=>(t,e)=>{t.constructor.propsInit||(t.constructor.propsInit={}),t.constructor.propsInit[e]=null,Object.defineProperty(t,e,{get:function(){return(t=>{if(this.hasAttribute(t)){const e=this.getAttribute(t);return!!/^(true|false|^$)$/.test(e)&&("true"==e||""==e)}return!1})(e)},set:function(t){const n=t;if(null!=t)switch(typeof t){case"boolean":break;case"string":/^(true|false|^$)$/.test(t)?t="true"==n||""==n:(console.warn(`TypeError: Cannot set boolean toggle property '${e}' to '${t}'`),t=!1);break;default:throw`TypeError: Cannot set boolean toggle property '${e}' to '${t}'`}this.__connected?(this.props[e]=t||!1,""!==n&&null!==n?this.setAttribute(e,t):t?this.setAttribute(e,""):this.removeAttribute(e)):this.hasAttribute(o.toKebabCase(e))||(this.constructor.propsInit[e]=t)}})}},9766:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0})},3804:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.tryParseInt=e.toDotCase=e.toCamelCase=e.toKebabCase=void 0,e.toKebabCase=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase(),e.toCamelCase=t=>t.toLowerCase().replace(/(\-\w)/g,(t=>t[1].toUpperCase())),e.toDotCase=t=>t.replace(/(?!^)([A-Z])/g," $1").replace(/[_\s]+(?=[a-zA-Z])/g,".").toLowerCase(),e.tryParseInt=t=>parseInt(t)==t&&NaN!==parseFloat(t)?parseInt(t):t},4938:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Watch=void 0;const o=n(3804);e.Watch=t=>(e,n)=>{e.constructor.watchAttributes||(e.constructor.watchAttributes={}),e.constructor.watchAttributes[o.toKebabCase(t)]=n,e.constructor.propsInit||(e.constructor.propsInit={}),e.constructor.propsInit[t]=null}},913:function(t,e,n){var o=this&&this.__createBinding||(Object.create?function(t,e,n,o){void 0===o&&(o=n),Object.defineProperty(t,o,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,o){void 0===o&&(o=n),t[o]=e[n]}),r=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),s=this&&this.__decorate||function(t,e,n,o){var r,s=arguments.length,a=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(a=(s<3?r(a):s>3?r(e,n,a):r(e,n))||a);return s>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&o(e,t,n);return r(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.NavigationTabHeading=void 0;const i=n(406);let c=0,l=class extends i.CustomElement{constructor(){super()}setup(t){this.connect(t.container),t.id&&(this.id=t.id)}connectedCallback(){this.setAttribute("role","tab"),this.id||(this.id="navigation-tab-heading-"+c++),this.tabHeadingElement=(0,i.getShadowRootElement)(this,"slot[name=tab-heading]"),this.setAttribute("aria-selected","false"),this.setAttribute("tabindex","-1"),this._upgradeProperty("selected")}disconnectedCallback(){}_upgradeProperty(t){if(this.hasOwnProperty(t)){let e=this[t];delete this[t],this[t]=e}}attributeChangedCallback(){}selectedChanged(){this.selected?this.setAttribute("aria-selected",""):this.removeAttribute("aria-selected"),this.selected?this.tabHeadingElement.classList.add("selected"):this.tabHeadingElement.classList.remove("selected"),this.setAttribute("tabindex",this.selected?"0":"-1")}static setup(t,e){(0,i.getElement)(t)}};l.elementSelector="navigation-tab-heading",s([(0,i.Prop)()],l.prototype,"id",void 0),s([(0,i.Toggle)()],l.prototype,"selected",void 0),s([(0,i.Watch)("selected")],l.prototype,"selectedChanged",null),l=s([(0,i.Component)({tag:"navigation-tab-heading",template:Promise.resolve().then((()=>a(n(6290)))),style:Promise.resolve().then((()=>a(n(3341))))})],l),e.NavigationTabHeading=l}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var s=e[o]={id:o,exports:{}};return t[o].call(s.exports,s,s.exports,n),s.exports}return n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n(913)})()}));
//# sourceMappingURL=NavigationTabHeading.js.map