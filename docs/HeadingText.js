!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.geonorge=e():(t.geonorge=t.geonorge||{},t.geonorge.HeadingText=e())}(self,(()=>(()=>{"use strict";var t={1486:(t,e,n)=>{n.r(e),n.d(e,{default:()=>a});var o=n(4663),s=n.n(o),r=n(7638),i=n.n(r)()(s());i.push([t.id,'::slotted(h1),::slotted([size="1"]){font-family:"Raleway",sans-serif;font-size:30px;font-weight:100}@media(min-width: 768px){::slotted(h1),::slotted([size="1"]){font-size:48px}}::slotted(h1[underline]):after,::slotted([size="1"][underline]):after{content:"";display:block;width:75px;border-bottom:3px solid #fe5000;margin:5px 0 15px}@media(min-width: 768px){::slotted(h1[underline]):after,::slotted([size="1"][underline]):after{width:100px;border-bottom:5px solid #fe5000;margin:10px 0 20px}}::slotted(h2),::slotted([size="2"]){font-family:"Raleway",sans-serif;font-size:26px;line-height:30px;font-weight:100;display:inline;margin-bottom:10px;margin-top:20px}@media(min-width: 768px){::slotted(h2),::slotted([size="2"]){font-size:32px;line-height:40px}}::slotted(h2):before,::slotted([size="2"]):before{content:"";display:block;margin-top:46px}::slotted(h2):after,::slotted([size="2"]):after{content:"";display:block;margin-bottom:20px}::slotted(h2[underline]),::slotted([size="2"][underline]){border-bottom:2px solid #fe5000}::slotted(h3),::slotted([size="3"]){font-family:"Open Sans",sans-serif;font-size:20px;font-weight:300}@media(min-width: 768px){::slotted(h3),::slotted([size="3"]){font-size:21px}}::slotted(h4),::slotted([size="4"]){font-family:"Open Sans",sans-serif;font-size:18px;font-weight:300}@media(min-width: 768px){::slotted(h4),::slotted([size="4"]){font-size:19px}}::slotted(h5),::slotted([size="5"]){font-family:"Open Sans",sans-serif;font-size:15px;font-weight:600}@media(min-width: 768px){::slotted(h5),::slotted([size="5"]){font-size:16px}}',"",{version:3,sources:["webpack://./custom-elements/heading-text/heading-text.scss","webpack://./style/variables/_typography.scss","webpack://./style/mixins/_breakpoints.scss"],names:[],mappings:"AAEA,oCAEI,gCCHU,CDIV,cAAA,CACA,eAAA,CEII,yBFRR,oCAMQ,cAAA,CAAA,CAMJ,sEACI,UAAA,CACA,aAAA,CACA,UAAA,CACA,+BAAA,CACA,iBAAA,CETA,yBFIJ,sEAOQ,WAAA,CACA,+BAAA,CACA,kBAAA,CAAA,CAKZ,oCAEI,gCC7BU,CD8BV,cAAA,CACA,gBAAA,CACA,eAAA,CACA,cAAA,CACA,kBAAA,CACA,eAAA,CE1BI,yBFkBR,oCAUQ,cAAA,CACA,gBAAA,CAAA,CAEJ,kDACI,UAAA,CACA,aAAA,CACA,eAAA,CAEJ,gDACI,UAAA,CACA,aAAA,CACA,kBAAA,CAIR,0DAEI,+BAAA,CAGJ,oCAEI,kCC5DW,CD6DX,cAAA,CACA,eAAA,CEpDI,yBFgDR,oCAMQ,cAAA,CAAA,CAIR,oCAEI,kCCtEW,CDuEX,cAAA,CACA,eAAA,CE9DI,yBF0DR,oCAMQ,cAAA,CAAA,CAIR,oCAEI,kCChFW,CDiFX,cAAA,CACA,eAAA,CExEI,yBFoER,oCAMQ,cAAA,CAAA",sourcesContent:['@import "../../style/all";\n\n::slotted(h1),\n::slotted([size="1"]) {\n    font-family: $header-font;\n    font-size: 30px;\n    font-weight: 100;\n    @include breakpoint(tablet) {\n        font-size: 48px;\n    }\n}\n\n::slotted(h1[underline]),\n::slotted([size="1"][underline]) {\n    &:after {\n        content: "";\n        display: block;\n        width: 75px;\n        border-bottom: 3px solid $primary-brand;\n        margin: 5px 0 15px;\n        @include breakpoint(tablet) {\n            width: 100px;\n            border-bottom: 5px solid $primary-brand;\n            margin: 10px 0 20px;\n        }\n    }\n}\n\n::slotted(h2),\n::slotted([size="2"]) {\n    font-family: $header-font;\n    font-size: 26px;\n    line-height: 30px;\n    font-weight: 100;\n    display: inline;\n    margin-bottom: 10px;\n    margin-top: 20px;\n    @include breakpoint(tablet) {\n        font-size: 32px;\n        line-height: 40px;\n    }\n    &:before {\n        content: "";\n        display: block;\n        margin-top: 46px;\n    }\n    &:after {\n        content: "";\n        display: block;\n        margin-bottom: 20px;\n    }\n}\n\n::slotted(h2[underline]),\n::slotted([size="2"][underline]) {\n    border-bottom: 2px solid $primary-brand;\n}\n\n::slotted(h3),\n::slotted([size="3"]) {\n    font-family: $default-font;\n    font-size: 20px;\n    font-weight: 300;\n    @include breakpoint(tablet) {\n        font-size: 21px;\n    }\n}\n\n::slotted(h4),\n::slotted([size="4"]) {\n    font-family: $default-font;\n    font-size: 18px;\n    font-weight: 300;\n    @include breakpoint(tablet) {\n        font-size: 19px;\n    }\n}\n\n::slotted(h5),\n::slotted([size="5"]) {\n    font-family: $default-font;\n    font-size: 15px;\n    font-weight: 600;\n    @include breakpoint(tablet) {\n        font-size: 16px;\n    }\n}\n','$default-font: "Open Sans", sans-serif;\n$header-font: "Raleway", sans-serif;',"@mixin breakpoint($point) {\n    @if $point == desktop {\n        @media (min-width: $screen-desktop) {\n            @content;\n        }\n    } @else if $point == laptop {\n        @media (min-width: $screen-laptop) {\n            @content;\n        }\n    } @else if $point == tablet {\n        @media (min-width: $screen-tablet) {\n            @content;\n        }\n    } @else if $point == phablet {\n        @media (min-width: $screen-phablet) {\n            @content;\n        }\n    }\n}\n"],sourceRoot:""}]);const a=i},291:(t,e,n)=>{n.r(e),n.d(e,{default:()=>o});const o="<template>\n    <slot></slot>\n</template>\n"},7638:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,s,r){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(i[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);o&&i[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),s&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=s):d[4]="".concat(s)),e.push(d))}},e}},4663:t=>{t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),r="/*# ".concat(s," */"),i=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(t," */")}));return[e].concat(i).concat([r]).join("\n")}return[e].join("\n")}},1397:function(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(s,r){function i(t){try{c(o.next(t))}catch(t){r(t)}}function a(t){try{c(o.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,a)}c((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.Component=void 0;const s=n(5969),r=n(5773),i=n(3804);e.Component=t=>e=>{var n;const a=t.tag||i.toKebabCase(e.prototype.constructor.name),c=((n=class extends e{constructor(){super(),this.props={},this.showShadowRoot=null==t.shadow||t.shadow,!this.shadowRoot&&this.showShadowRoot&&this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys(this.propsInit||{}).map((t=>i.toKebabCase(t)))}attributeChangedCallback(t,e,n){this.onAttributeChange(t,e,n)}onAttributeChange(t,e,n,o=!0){if(e!=n){o&&(this[i.toCamelCase(t)]=n);const s=this.constructor.watchAttributes;if(s&&s[t]){const o=s[t];this.__connected&&"function"==typeof this[o]&&this[o]({old:e,new:n})}}}connectedCallback(){const t=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return o(this,void 0,void 0,(function*(){yield this.render(),t.connectedCallback&&t.connectedCallback.call(this),this.__connected=!0,s.addEventListeners(this),r.initializeProps(this)}))}render(){return o(this,void 0,void 0,(function*(){if(this.__connected)return;const e=document.createElement("template");e.innerHTML=yield this.getStyle(),t.template instanceof Promise?e.content.appendChild(yield this.getExternalTemplate()):"string"==typeof t.template&&(e.innerHTML+=t.template),(this.showShadowRoot?this.shadowRoot:this).appendChild(e.content.cloneNode(!0))}))}getExternalTemplate(){return o(this,void 0,void 0,(function*(){const e=(yield t.template).default.toString(),n=document.createRange().createContextualFragment(e);return 1===n.children.length&&"TEMPLATE"===n.children[0].nodeName?n.firstChild.content:n}))}getStyle(){return o(this,void 0,void 0,(function*(){let e;return t.style instanceof Promise?e=(yield t.style).default.toString():"string"==typeof t.style&&(e=t.style),e?`<style>${e}</style>`:""}))}}).__connected=!1,n.ready=new Promise(((t,e)=>t(!0))),n);return customElements.get(a)||customElements.define(a,c),c}},985:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.CustomElement=void 0;class n extends HTMLElement{constructor(){super()}connect(t){this.isConnected||document.querySelector(t).appendChild(this)}}e.CustomElement=n},265:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getShadowRootElement=e.getElement=void 0,e.getElement=t=>document.querySelector(t),e.getShadowRootElement=(t,e)=>t.shadowRoot.querySelector(e)},406:function(t,e,n){var o=this&&this.__createBinding||(Object.create?function(t,e,n,o){void 0===o&&(o=n),Object.defineProperty(t,o,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,o){void 0===o&&(o=n),t[o]=e[n]}),s=this&&this.__exportStar||function(t,e){for(var n in t)"default"===n||Object.prototype.hasOwnProperty.call(e,n)||o(e,t,n)};Object.defineProperty(e,"__esModule",{value:!0}),s(n(1397),e),s(n(985),e),s(n(265),e),s(n(5969),e),s(n(5773),e),s(n(4271),e),s(n(9766),e),s(n(4938),e)},5969:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Dispatch=e.addEventListeners=e.Listen=void 0;const o=n(3804);e.Listen=(t,e)=>(n,o)=>{n.constructor.listeners||(n.constructor.listeners=[]),n.constructor.listeners.push({selector:e,eventName:t,handler:n[o]})},e.addEventListeners=t=>{if(t.constructor.listeners){const e=t.shadowRoot||t;for(const n of t.constructor.listeners){const o=n.selector?e.querySelector(n.selector)?e.querySelector(n.selector):null:t;o&&o.addEventListener(n.eventName,(e=>{n.handler.call(t,e)}))}}},e.Dispatch=t=>(e,n)=>{Object.defineProperty(e,n,{get:function(){const e=this;return{emit(s){const r=t||o.toDotCase(n);e.dispatchEvent(new CustomEvent(r,s))}}}})}},5773:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.initializeProps=e.Prop=void 0;const o=n(3804);e.Prop=()=>(t,e)=>{const n=o.toKebabCase(e);t.constructor.propsInit||(t.constructor.propsInit={}),t.constructor.propsInit[e]=null,Object.defineProperty(t,e,{get:function(){return this.props[e]?this.props[e]:this.getAttribute(n)},set:function(t){if(this.__connected){const s=this.props[e];this.props[e]=o.tryParseInt(t),"object"!=typeof t?this.setAttribute(n,t):this.onAttributeChange(n,s,t,!1)}else this.hasAttribute(o.toKebabCase(e))||(this.constructor.propsInit[e]=t)}})},e.initializeProps=t=>{const e=t.constructor.watchAttributes;for(let n of(t=>{const e=t.constructor.watchAttributes,n=Object.assign({},e);Object.keys(n).forEach((t=>n[t]=""));const o=Object.assign(Object.assign({},n),t.constructor.propsInit);return Object.keys(o)})(t)){if(e)if(null==e[o.toKebabCase(n)])e[o.toKebabCase(n)]="";else{const s=t.props[n]||t.getAttribute(o.toKebabCase(n));"function"==typeof t[e[n]]&&t[e[n]]({new:s})}t.constructor.propsInit[n]&&(t.hasAttribute(o.toKebabCase(n))||(t[n]=t.constructor.propsInit[n]))}}},4271:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Toggle=void 0;const o=n(3804);e.Toggle=()=>(t,e)=>{t.constructor.propsInit||(t.constructor.propsInit={}),t.constructor.propsInit[e]=null,Object.defineProperty(t,e,{get:function(){return(t=>{if(this.hasAttribute(t)){const e=this.getAttribute(t);return!!/^(true|false|^$)$/.test(e)&&("true"==e||""==e)}return!1})(e)},set:function(t){const n=t;if(null!=t)switch(typeof t){case"boolean":break;case"string":/^(true|false|^$)$/.test(t)?t="true"==n||""==n:(console.warn(`TypeError: Cannot set boolean toggle property '${e}' to '${t}'`),t=!1);break;default:throw`TypeError: Cannot set boolean toggle property '${e}' to '${t}'`}this.__connected?(this.props[e]=t||!1,""!==n&&null!==n?this.setAttribute(e,t):t?this.setAttribute(e,""):this.removeAttribute(e)):this.hasAttribute(o.toKebabCase(e))||(this.constructor.propsInit[e]=t)}})}},9766:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0})},3804:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.tryParseInt=e.toDotCase=e.toCamelCase=e.toKebabCase=void 0,e.toKebabCase=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase(),e.toCamelCase=t=>t.toLowerCase().replace(/(\-\w)/g,(t=>t[1].toUpperCase())),e.toDotCase=t=>t.replace(/(?!^)([A-Z])/g," $1").replace(/[_\s]+(?=[a-zA-Z])/g,".").toLowerCase(),e.tryParseInt=t=>parseInt(t)==t&&NaN!==parseFloat(t)?parseInt(t):t},4938:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Watch=void 0;const o=n(3804);e.Watch=t=>(e,n)=>{e.constructor.watchAttributes||(e.constructor.watchAttributes={}),e.constructor.watchAttributes[o.toKebabCase(t)]=n,e.constructor.propsInit||(e.constructor.propsInit={}),e.constructor.propsInit[t]=null}},5134:function(t,e,n){var o=this&&this.__createBinding||(Object.create?function(t,e,n,o){void 0===o&&(o=n);var s=Object.getOwnPropertyDescriptor(e,n);s&&!("get"in s?!e.__esModule:s.writable||s.configurable)||(s={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,o,s)}:function(t,e,n,o){void 0===o&&(o=n),t[o]=e[n]}),s=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),r=this&&this.__decorate||function(t,e,n,o){var s,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&o(e,t,n);return s(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.HeadingText=void 0;const a=n(406);let c=class extends a.CustomElement{constructor(){super()}setup(t){}};r([(0,a.Prop)()],c.prototype,"content",void 0),r([(0,a.Prop)()],c.prototype,"size",void 0),r([(0,a.Prop)()],c.prototype,"tag",void 0),r([(0,a.Toggle)()],c.prototype,"underline",void 0),c=r([(0,a.Component)({tag:"heading-text",template:Promise.resolve().then((()=>i(n(291)))),style:Promise.resolve().then((()=>i(n(1486))))})],c),e.HeadingText=c}},e={};function n(o){var s=e[o];if(void 0!==s)return s.exports;var r=e[o]={id:o,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.exports}return n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n(5134)})()));
//# sourceMappingURL=HeadingText.js.map