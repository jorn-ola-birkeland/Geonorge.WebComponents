!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.geonorge=t():(e.geonorge=e.geonorge||{},e.geonorge.MainSearchField=t())}(self,(function(){return(()=>{var e={4678:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var r=n(3062),s=n.n(r),o=n(7638),i=n.n(o)()(s());i.push([e.id,'*{box-sizing:border-box}div.main-search-field{font-family:"Open Sans",sans-serif;display:flex;height:37px;margin-top:.25em;position:relative;width:100%}@media(min-width: 37.5em){div.main-search-field{margin-top:0}}div.main-search-field .mainSearchLabel{width:0;height:0;overflow:hidden;opacity:0}div.main-search-field input{height:37px;width:100%;outline-offset:-2px;-webkit-appearance:none;background:#fff;border:1px solid #dfdcda;border-right:0;border-radius:2px 0 0 2px;font-size:1.2em;flex:1;margin:0;padding:0 .75em}div.main-search-field button{margin:0;-webkit-appearance:button;background:#fff;border:1px solid #dfdcda;border-left:0;border-radius:0 2px 2px 0;display:inline-block;padding:0 .75em;height:100%}div.main-search-field button svg{height:22px;width:21px}div.search-results-container{-webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);-moz-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);-webkit-border-radius:0 0 3px 3px;border-radius:0 0 3px 3px;position:absolute;background:#fbfcfd;display:none;top:37px;z-index:1}div.search-results-container.open{display:block;width:100%;overflow-y:auto}div.search-results-container a{color:#3767c7;text-decoration:none}div.search-results-container a:hover{color:#0056b3;text-decoration:underline}div.search-results-container div.search-results-for-type:nth-child(odd){background-color:#fbfcfd}div.search-results-container div.search-results-for-type:nth-child(even){background-color:#f5f6f7}div.search-results-container div.search-results-for-type a.search-results-for-type-title{padding:8px 16px;font-size:1.2em;display:inline-block}div.search-results-container div.search-results-for-type a.search-results-for-type-title span.search-results-for-type-number-badge{-webkit-border-radius:6px;border-radius:6px;padding:2px 4px;color:#fff;background-color:#fe5000;display:inline-block;font-size:.8em;vertical-align:text-bottom}div.search-results-container div.search-results-for-type ul.search-results-for-type-list{list-style:none;padding:0 16px 8px 32px;margin:0}div.search-results-container div.search-results-for-type ul.search-results-for-type-list li a{padding:4px 0;display:block}.hidden{height:0;width:0;position:absolute;color:transparent;overflow:hidden}',"",{version:3,sources:["webpack://./custom-elements/main-navigation/main-search-field/main-search-field.scss","webpack://./style/variables/_typography.scss","webpack://./style/mixins/_breakpoints.scss","webpack://./style/mixins/_box-shadow.scss","webpack://./style/mixins/_border-radius.scss","webpack://./style/variables/_colors.scss"],names:[],mappings:"AAEA,EACE,qBAAA,CAGF,sBACE,kCCPa,CDQb,YAAA,CACA,WAAA,CACA,gBAAA,CACA,iBAAA,CACA,UAAA,CEEM,0BFRR,sBAQI,YAAA,CAAA,CAGF,uCACE,OAAA,CACA,QAAA,CACA,eAAA,CACA,SAAA,CAGF,4BACE,WAAA,CACA,UAAA,CACA,mBAAA,CACA,uBAAA,CACA,eAAA,CACA,wBAAA,CACA,cAAA,CACA,yBAAA,CACA,eAAA,CACA,MAAA,CACA,QAAA,CACA,eAAA,CAGF,6BACE,QAAA,CACA,yBAAA,CACA,eAAA,CACA,wBAAA,CACA,aAAA,CACA,yBAAA,CACA,oBAAA,CACA,eAAA,CACA,WAAA,CAEA,iCACE,WAAA,CACA,UAAA,CAKN,6BGxDI,8GHyDF,CGxDE,2GHwDF,CGvDE,sGHuDF,CIzDA,iCJ8DuB,CI7DvB,yBJ6DuB,CACvB,iBAAA,CACA,kBAAA,CACA,YAAA,CACA,QAAA,CACA,SAAA,CAEA,kCACE,aAAA,CACA,UAAA,CACA,eAAA,CAGF,+BACE,aK/DW,CLgEX,oBAAA,CACA,qCACE,aKjEc,CLkEd,yBAAA,CAKF,wEACE,wBAAA,CAEF,yEACE,wBAAA,CAEF,yFACE,gBAAA,CACA,eAAA,CACA,oBAAA,CACA,mII/FJ,yBJgG6B,CI/F7B,iBJ+F6B,CACvB,eAAA,CACA,UAAA,CACA,wBK3FQ,CL4FR,oBAAA,CACA,cAAA,CACA,0BAAA,CAGJ,yFACE,eAAA,CACA,uBAAA,CACA,QAAA,CAEE,8FACE,aAAA,CACA,aAAA,CAOV,QACE,QAAA,CACA,OAAA,CACA,iBAAA,CACA,iBAAA,CACA,eAAA",sourcesContent:['@import "../../../style/all";\n\n* {\n  box-sizing: border-box;\n}\n\ndiv.main-search-field {\n  font-family: $default-font;\n  display: flex;\n  height: 37px;\n  margin-top: 0.25em;\n  position: relative;\n  width: 100%;\n  @include breakpoint(phablet) {\n    margin-top: 0;\n  }\n\n  .mainSearchLabel {\n    width: 0;\n    height: 0;\n    overflow: hidden;\n    opacity: 0;\n  }\n\n  input {\n    height: 37px;\n    width: 100%;\n    outline-offset: -2px;\n    -webkit-appearance: none;\n    background: #fff;\n    border: 1px solid #dfdcda;\n    border-right: 0;\n    border-radius: 2px 0 0 2px;\n    font-size: 1.2em;\n    flex: 1;\n    margin: 0;\n    padding: 0 0.75em;\n  }\n\n  button {\n    margin: 0;\n    -webkit-appearance: button;\n    background: #fff;\n    border: 1px solid #dfdcda;\n    border-left: 0;\n    border-radius: 0 2px 2px 0;\n    display: inline-block;\n    padding: 0 0.75em;\n    height: 100%;\n\n    svg {\n      height: 22px;\n      width: 21px;\n    }\n  }\n}\n\ndiv.search-results-container {\n  @include box-shadow(\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12)\n  );\n  @include border-radius(0 0 3px 3px);\n  position: absolute;\n  background: #fbfcfd;\n  display: none;\n  top: 37px;\n  z-index: 1;\n\n  &.open {\n    display: block;\n    width: 100%;\n    overflow-y: auto;\n  }\n\n  a {\n    color: $primary-text;\n    text-decoration: none;\n    &:hover {\n      color: $primary-text-hover;\n      text-decoration: underline;\n    }\n  }\n\n  div.search-results-for-type {\n    &:nth-child(odd) {\n      background-color: #fbfcfd;\n    }\n    &:nth-child(even) {\n      background-color: #f5f6f7;\n    }\n    a.search-results-for-type-title {\n      padding: 8px 16px;\n      font-size: 1.2em;\n      display: inline-block;\n      span.search-results-for-type-number-badge {\n        @include border-radius(6px);\n        padding: 2px 4px;\n        color: #fff;\n        background-color: $primary-brand;\n        display: inline-block;\n        font-size: 0.8em;\n        vertical-align: text-bottom;\n      }\n    }\n    ul.search-results-for-type-list {\n      list-style: none;\n      padding: 0 16px 8px 32px;\n      margin: 0;\n      li {\n        a {\n          padding: 4px 0;\n          display: block;\n        }\n      }\n    }\n  }\n}\n\n.hidden {\n  height: 0;\n  width: 0;\n  position: absolute;\n  color: transparent;\n  overflow: hidden;\n}\n','$default-font: "Open Sans", sans-serif;\n$header-font: "Raleway";',"@mixin breakpoint($point) {\n    @if $point == desktop {\n        @media (min-width: $screen-desktop) {\n            @content;\n        }\n    } @else if $point == laptop {\n        @media (min-width: $screen-laptop) {\n            @content;\n        }\n    } @else if $point == tablet {\n        @media (min-width: $screen-tablet) {\n            @content;\n        }\n    } @else if $point == phablet {\n        @media (min-width: $screen-phablet) {\n            @content;\n        }\n    }\n}\n","\ufeff@mixin box-shadow($shadows...) {\n    -webkit-box-shadow: $shadows;\n    -moz-box-shadow: $shadows;\n    box-shadow: $shadows;\n}\n","@mixin border-radius($radius) {\n  -webkit-border-radius: $radius;\n  border-radius: $radius;\n}\n\n// Single side border-radius\n\n@mixin border-top-radius($radius) {\n  -webkit-border-top-right-radius: $radius;\n  border-top-right-radius: $radius;\n  -webkit-border-top-left-radius: $radius;\n  border-top-left-radius: $radius;\n}\n@mixin border-right-radius($radius) {\n  -webkit-border-bottom-right-radius: $radius;\n  border-bottom-right-radius: $radius;\n  -webkit-border-top-right-radius: $radius;\n  border-top-right-radius: $radius;\n}\n@mixin border-bottom-radius($radius) {\n  -webkit-border-bottom-right-radius: $radius;\n  border-bottom-right-radius: $radius;\n  -webkit-border-bottom-left-radius: $radius;\n  border-bottom-left-radius: $radius;\n}\n@mixin border-left-radius($radius) {\n  -webkit-border-bottom-left-radius: $radius;\n  border-bottom-left-radius: $radius;\n  -webkit-border-top-left-radius: $radius;\n  border-top-left-radius: $radius;\n}","$body-background: #ffffff;\n$navigation-bar-background:  #f7f7f7;\n$hover-background: rgba(0,0,0,.05);\n$default-border: #d8d8d8;\n\n$default-background: #eee;\n$default-background-hover: #ddd;\n$default-text:#2F3940;\n\n$primary-brand: #FE5000;\n$secondary-brand: #7da1c4;\n\n$primary-background: #7DA1C4;\n$primary-background-hover: #FE5000;\n$primary-text: #3767C7;\n$primary-text-hover:#0056b3;\n\n\n$success-background: #06A755;\n$success-background-hover: #009745;\n$success-text: #06A755;\n\n\n$warning-background: #C38621;\n$warning-background-hover: #B37611;\n$warning-text: #C38621;\n\n$danger-background: #E00d0D;\n$danger-background-hover: #D00000;\n$danger-text: #E00d0D;\n\n$disabled-background: #ffffff;\n$disabled-text: #d8d8d8;\n"],sourceRoot:""}]);const a=i},6920:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r='<template>\n    <div class="main-search-field">\n          <label id="main-search-input-label" for="main-search-input" class="hidden">søk</label>\n          <input id="main-search-input" autocomplete="off" type="search" value="" />\n          <button id="search-submit-button"></button>\n       <div id="search-results-container" class="search-results-container">\n          \n       </div>\n    </div>\n </template>'},7638:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var s={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(s[i]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);r&&s[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},3062:e=>{"use strict";function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}e.exports=function(e){var n,r,s=(r=4,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,s=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){s=!0,o=e}finally{try{r||null==a.return||a.return()}finally{if(s)throw o}}return n}}(n,r)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=s[1],i=s[3];if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),l="/*# ".concat(c," */"),d=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[o].concat(d).concat([l]).join("\n")}return[o].join("\n")}},1397:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(s,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function a(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;const s=n(5969),o=n(5773),i=n(3804);t.Component=e=>t=>{var n;const a=e.tag||i.toKebabCase(t.prototype.constructor.name),c=((n=class extends t{constructor(){super(),this.props={},this.showShadowRoot=null==e.shadow||e.shadow,!this.shadowRoot&&this.showShadowRoot&&this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys(this.propsInit||{}).map((e=>i.toKebabCase(e)))}attributeChangedCallback(e,t,n){this.onAttributeChange(e,t,n)}onAttributeChange(e,t,n,r=!0){if(t!=n){r&&(this[i.toCamelCase(e)]=n);const s=this.constructor.watchAttributes;if(s&&s[e]){const r=s[e];this.__connected&&"function"==typeof this[r]&&this[r]({old:t,new:n})}}}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return r(this,void 0,void 0,(function*(){yield this.render(),e.connectedCallback&&e.connectedCallback.call(this),this.__connected=!0,s.addEventListeners(this),o.initializeProps(this)}))}render(){return r(this,void 0,void 0,(function*(){if(this.__connected)return;const t=document.createElement("template");t.innerHTML=yield this.getStyle(),e.template instanceof Promise?t.content.appendChild(yield this.getExternalTemplate()):"string"==typeof e.template&&(t.innerHTML+=e.template),(this.showShadowRoot?this.shadowRoot:this).appendChild(t.content.cloneNode(!0))}))}getExternalTemplate(){return r(this,void 0,void 0,(function*(){const t=(yield e.template).default.toString(),n=document.createRange().createContextualFragment(t);return 1===n.children.length&&"TEMPLATE"===n.children[0].nodeName?n.firstChild.content:n}))}getStyle(){return r(this,void 0,void 0,(function*(){let t;return e.style instanceof Promise?t=(yield e.style).default.toString():"string"==typeof e.style&&(t=e.style),t?`<style>${t}</style>`:""}))}}).__connected=!1,n.ready=new Promise(((e,t)=>e(!0))),n);return customElements.get(a)||customElements.define(a,c),c}},985:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CustomElement=void 0;class n extends HTMLElement{constructor(){super()}connect(e){this.isConnected||document.querySelector(e).appendChild(this)}}t.CustomElement=n},265:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getShadowRootElement=t.getElement=void 0,t.getElement=e=>document.querySelector(e),t.getShadowRootElement=(e,t)=>e.shadowRoot.querySelector(t)},406:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),s=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),s(n(1397),t),s(n(985),t),s(n(265),t),s(n(5969),t),s(n(5773),t),s(n(4271),t),s(n(9766),t),s(n(4938),t)},5969:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Dispatch=t.addEventListeners=t.Listen=void 0;const r=n(3804);t.Listen=(e,t)=>(n,r)=>{n.constructor.listeners||(n.constructor.listeners=[]),n.constructor.listeners.push({selector:t,eventName:e,handler:n[r]})},t.addEventListeners=e=>{if(e.constructor.listeners){const t=e.shadowRoot||e;for(const n of e.constructor.listeners){const r=n.selector?t.querySelector(n.selector)?t.querySelector(n.selector):null:e;r&&r.addEventListener(n.eventName,(t=>{n.handler.call(e,t)}))}}},t.Dispatch=e=>(t,n)=>{Object.defineProperty(t,n,{get:function(){const t=this;return{emit(s){const o=e||r.toDotCase(n);t.dispatchEvent(new CustomEvent(o,s))}}}})}},5773:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initializeProps=t.Prop=void 0;const r=n(3804);t.Prop=()=>(e,t)=>{const n=r.toKebabCase(t);e.constructor.propsInit||(e.constructor.propsInit={}),e.constructor.propsInit[t]=null,Object.defineProperty(e,t,{get:function(){return this.props[t]?this.props[t]:this.getAttribute(n)},set:function(e){if(this.__connected){const s=this.props[t];this.props[t]=r.tryParseInt(e),"object"!=typeof e?this.setAttribute(n,e):this.onAttributeChange(n,s,e,!1)}else this.hasAttribute(r.toKebabCase(t))||(this.constructor.propsInit[t]=e)}})},t.initializeProps=e=>{const t=e.constructor.watchAttributes;for(let n of(e=>{const t=e.constructor.watchAttributes,n=Object.assign({},t);Object.keys(n).forEach((e=>n[e]=""));const r=Object.assign(Object.assign({},n),e.constructor.propsInit);return Object.keys(r)})(e)){if(t)if(null==t[r.toKebabCase(n)])t[r.toKebabCase(n)]="";else{const s=e.props[n]||e.getAttribute(r.toKebabCase(n));"function"==typeof e[t[n]]&&e[t[n]]({new:s})}e.constructor.propsInit[n]&&(e.hasAttribute(r.toKebabCase(n))||(e[n]=e.constructor.propsInit[n]))}}},4271:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Toggle=void 0;const r=n(3804);t.Toggle=()=>(e,t)=>{e.constructor.propsInit||(e.constructor.propsInit={}),e.constructor.propsInit[t]=null,Object.defineProperty(e,t,{get:function(){return(e=>{if(this.hasAttribute(e)){const t=this.getAttribute(e);return!!/^(true|false|^$)$/.test(t)&&("true"==t||""==t)}return!1})(t)},set:function(e){const n=e;if(null!=e)switch(typeof e){case"boolean":break;case"string":/^(true|false|^$)$/.test(e)?e="true"==n||""==n:(console.warn(`TypeError: Cannot set boolean toggle property '${t}' to '${e}'`),e=!1);break;default:throw`TypeError: Cannot set boolean toggle property '${t}' to '${e}'`}this.__connected?(this.props[t]=e||!1,""!==n&&null!==n?this.setAttribute(t,e):e?this.setAttribute(t,""):this.removeAttribute(t)):this.hasAttribute(r.toKebabCase(t))||(this.constructor.propsInit[t]=e)}})}},9766:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},3804:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.tryParseInt=t.toDotCase=t.toCamelCase=t.toKebabCase=void 0,t.toKebabCase=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase(),t.toCamelCase=e=>e.toLowerCase().replace(/(\-\w)/g,(e=>e[1].toUpperCase())),t.toDotCase=e=>e.replace(/(?!^)([A-Z])/g," $1").replace(/[_\s]+(?=[a-zA-Z])/g,".").toLowerCase(),t.tryParseInt=e=>parseInt(e)==e&&NaN!==parseFloat(e)?parseInt(e):e},4938:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Watch=void 0;const r=n(3804);t.Watch=e=>(t,n)=>{t.constructor.watchAttributes||(t.constructor.watchAttributes={}),t.constructor.watchAttributes[r.toKebabCase(e)]=n,t.constructor.propsInit||(t.constructor.propsInit={}),t.constructor.propsInit[e]=null}},4768:e=>{e.exports='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 34 35" style="enable-background:new 0 0 34 35;" xml:space="preserve"><style type="text/css"> .__24nL31r__st0{fill:#B0A9A2;} </style><g><path class="__24nL31r__st0 " d="M23.6,22.8c2.2-2.4,3.6-5.7,3.6-9.2C27.2,6.1,21.1,0,13.6,0C6.1,0,0,6.1,0,13.6c0,7.5,6.1,13.6,13.6,13.6 c3.1,0,5.9-1,8.1-2.7l10.1,10.1c0.2,0.2,0.6,0.4,0.9,0.4c0.3,0,0.6-0.1,0.9-0.4c0.5-0.5,0.5-1.3,0-1.7L23.6,22.8z M2.5,13.6 c0-6.1,5-11.1,11.1-11.1c6.1,0,11.1,5,11.1,11.1s-5,11.1-11.1,11.1S2.5,19.7,2.5,13.6L2.5,13.6z"></path></g></svg>'},6306:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__decorate||function(e,t,n,r){var s,o=arguments.length,i=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i},i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return s(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MainSearchField=void 0;const c=n(406),l=n(9480),d=n(1406),u=a(n(4768));let h=class extends c.CustomElement{constructor(){super(),this.searchstring="",this.renderSearchResultsForType=e=>{const t=e.Results[0].TypeTranslated,n=e.searchResultsType,r=e.Results.map((e=>`<li>${d.renderDropdownResultLink(e,n,this.searchstring,this.environment)}</li>`)).join("");return`\n      <div class="search-results-for-type">\n         <a href="${d.getKartkatalogUrl(this.environment)}/metadata?text=${this.searchstring}&type=${n}" class="search-results-for-type-title">\n            ${t}\n            <span class="search-results-for-type-number-badge">\n               ${e.NumFound}\n            </span>\n         </a>\n         <ul class="search-results-for-type-list">\n            ${r}\n         </ul>\n      </div>`},this.renderSearchResults=e=>`<div>${e.map((e=>this.renderSearchResultsForType(e))).join("")}</div>`,this.hideSearchResultsContainer=()=>{this.showSearchResults=!1},this.clickOutsideSearchResultsContainer=this.clickOutsideSearchResultsContainer.bind(this)}setup(e){this.connect(e.container),e.id&&(this.id=e.id)}connectedCallback(){this.searchField=c.getShadowRootElement(this,"#main-search-input"),this.searchFieldLabel=c.getShadowRootElement(this,"#main-search-input-label"),this.searchButton=c.getShadowRootElement(this,"#search-submit-button"),this.searchFieldLabel.innerHTML="en"===this.language?"Search":"Søk",this.searchButton.innerHTML=u.default,this.searchResultsContainer=c.getShadowRootElement(this,"#search-results-container"),this.searchResultsContainer.style.maxHeight=window.innerHeight-61+"px",this.searchField&&this.searchstring&&this.searchField.setAttribute("value",this.searchstring),document.addEventListener("click",this.clickOutsideSearchResultsContainer)}disconnectedCallback(){document.removeEventListener("click",this.clickOutsideSearchResultsContainer)}clickOutsideSearchResultsContainer(e){const t=e.composedPath()[0];t.closest("#search-results-container")||t.closest("#main-search-input")||this.hideSearchResultsContainer()}submitSearch(){this.preventRedirect?this.onSearch.emit({detail:{searchString:this.searchstring}}):window.location.href=`${d.getKartkatalogUrl(this.environment)}/metadata?text=${this.searchstring}`}searchFieldKeyUp(e){e.key&&"Enter"===e.key&&this.searchstring&&this.searchstring.length?this.submitSearch():this.searchstring=this.searchField.value}onSearchSubmitted(e){this.submitSearch()}searchStringChanged(){this.searchField&&this.searchField.setAttribute("value",this.searchstring),l.fetchDropdownSearchResults(this.searchstring,this.language,this.environment).then((e=>{this.searchResultsResponses=e}))}languageChanged(){this.searchField&&this.searchField.setAttribute("aria-label","en"===this.language?"Enter your search query":"Skriv inn det du vil søke etter"),this.searchFieldLabel&&(this.searchFieldLabel.innerText="en"===this.language?"Search":"Søk"),this.searchButton&&this.searchButton.setAttribute("aria-label","en"===this.language?"Search":"Søk")}showSearchResultsChanged(){this.showSearchResults?this.searchResultsContainer.classList.add("open"):this.searchResultsContainer.classList.remove("open")}searchResultsResponseChanged(){const e=this.searchResultsResponses&&this.searchResultsResponses.length?this.searchResultsResponses.filter((e=>e.NumFound>0)):[];this.searchResultsContainer.innerHTML=e.length?this.renderSearchResults(e):"",this.showSearchResults=!!e.length}static setup(e,t){const n=c.getElement(e);t.onClick&&n.addEventListener("searchButtonClick",t.onClick),t.active&&(n.showSearchResults=t.active)}};h.elementSelector="main-search-field",o([c.Prop()],h.prototype,"id",void 0),o([c.Prop()],h.prototype,"environment",void 0),o([c.Toggle()],h.prototype,"showSearchResults",void 0),o([c.Toggle()],h.prototype,"preventRedirect",void 0),o([c.Prop()],h.prototype,"searchstring",void 0),o([c.Prop()],h.prototype,"language",void 0),o([c.Prop()],h.prototype,"searchResultsResponses",void 0),o([c.Dispatch("searchResultsChanged")],h.prototype,"onTextChanged",void 0),o([c.Dispatch("onSearchStringChange")],h.prototype,"onSearchStringChange",void 0),o([c.Dispatch("onSearch")],h.prototype,"onSearch",void 0),o([c.Listen("keyup","input")],h.prototype,"searchFieldKeyUp",null),o([c.Listen("click","#search-submit-button")],h.prototype,"onSearchSubmitted",null),o([c.Watch("searchstring")],h.prototype,"searchStringChanged",null),o([c.Watch("language")],h.prototype,"languageChanged",null),o([c.Watch("showsearchresults")],h.prototype,"showSearchResultsChanged",null),o([c.Watch("searchResultsResponses")],h.prototype,"searchResultsResponseChanged",null),h=o([c.Component({tag:"main-search-field",template:Promise.resolve().then((()=>i(n(6920)))),style:Promise.resolve().then((()=>i(n(4678))))})],h),t.MainSearchField=h},9480:function(e,t){"use strict";var n=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(s,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function a(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.fetchDropdownSearchResults=t.fetchMenuItems=t.getGeonorgeMenuUrl=t.getKartkatalogApiUrl=void 0,t.getKartkatalogApiUrl=e=>`https://kartkatalog.${"dev"===e||"test"===e?e+".":""}geonorge.no/api`,t.getGeonorgeMenuUrl=(e,t)=>`https://www.${"dev"===t||"test"===t?"test.":""}geonorge.no/${"en"===e?"en/":""}api/menu/get?omitLinks=1`,t.fetchMenuItems=(e="no",n="")=>{const r=t.getGeonorgeMenuUrl(e,n);return fetch(r).then((e=>e.json())).then((e=>e))},t.fetchDropdownSearchResults=(e="",r="no",s="")=>n(void 0,void 0,void 0,(function*(){const o={dataset:`search?text=${e=e.toString()}&facets%5B1%5Dname=type&facets%5B1%5Dvalue=dataset`,series:`search?text=${e}&facets%5B1%5Dname=type&facets%5B1%5Dvalue=series`,service:`search?text=${e}&facets%5B1%5Dname=type&facets%5B1%5Dvalue=service`,servicelayer:`search?text=${e}&facets%5B1%5Dname=type&facets%5B1%5Dvalue=servicelayer`,software:`search?text=${e}&facets%5B1%5Dname=type&facets%5B1%5Dvalue=software`,articles:`articles?text=${e}`},i={headers:new Headers({"Accept-Language":r})};return e&&e.length?yield Promise.all(Object.keys(o).map((e=>n(void 0,void 0,void 0,(function*(){const n=t.getKartkatalogApiUrl(s);return fetch(`${n}/${o[e]}&limit=5`,i).then((e=>e.json())).then((t=>Object.assign(Object.assign({},t),{searchResultsType:e})))}))))):null}))},1406:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.renderDropdownResultLink=t.convertTextToUrlSlug=t.getGeonorgeNedlastingUrl=t.getGeonorgeUrl=t.getKartkatalogUrl=void 0,t.getKartkatalogUrl=e=>`https://kartkatalog.${"dev"===e||"test"===e?e+".":""}geonorge.no`,t.getGeonorgeUrl=e=>`https://www.${"dev"===e||"test"===e?"test.":""}geonorge.no`,t.getGeonorgeNedlastingUrl=e=>`https://nedlasting.${"dev"===e||"test"===e?"test.":""}geonorge.no`;const n=(e,t,n)=>(e=(e=(e=e.replace(new RegExp(`([^s])([${t}])([^s])`,"ig"),`$1 ${n} $3`)).replace(new RegExp(`([^s])([${t}])`,"ig"),`$1 ${n}`)).replace(new RegExp(`([${t}])([^s])`,"ig"),`${n} $2`)).replace(new RegExp(`[${t}]`,"ig"),n);t.convertTextToUrlSlug=(e="")=>(e=e.toLowerCase(),e=n(e,"&","and"),(e=(e=(e=(e=(e=(e=(e=(e=(e=n(e,"+","plus")).replace("æ","ae")).replace("ä","ae")).replace("ø","oe")).replace("ö","oe")).replace("å","aa")).replace(/( - )/g,"-")).replace(/[\s]+/g,"-")).replace(/[^a-z0-9-]+/gi,"")).replace(/^[^A-Z0-9]*|[^a-z0-9]*$/gi,""));const r=(e,t)=>{if(!t)return!1;t({event:"updateSearchString",category:"metadataSearch",activity:"dropDownResultsClick",searchString:e})};t.renderDropdownResultLink=(e,n,s,o,i)=>"articles"===n?`<a onClick="${r(s,i)}" href="${e.ShowDetailsUrl?e.ShowDetailsUrl:"#"}">${e.Title}</a>`:`<a onClick="${r(s,i)}" href="${t.getKartkatalogUrl(o)}/metadata/${t.convertTextToUrlSlug(e.Title)}/${e.Uuid}">${e.Title}</a>`}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var o=t[r]={id:r,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}return n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(6306)})()}));
//# sourceMappingURL=MainSearchField.js.map