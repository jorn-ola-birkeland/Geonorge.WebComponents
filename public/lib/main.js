!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.geonorge=e():t.geonorge=e()}(window,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=15)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.tryParseInt=e.toDotCase=e.toCamelCase=e.toKebabCase=void 0,e.toKebabCase=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase(),e.toCamelCase=t=>t.toLowerCase().replace(/(\-\w)/g,t=>t[1].toUpperCase()),e.toDotCase=t=>t.replace(/(?!^)([A-Z])/g," $1").replace(/[_\s]+(?=[a-zA-Z])/g,".").toLowerCase(),e.tryParseInt=t=>parseInt(t)==t&&NaN!==parseFloat(t)?parseInt(t):t},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Dispatch=e.addEventListeners=e.Listen=void 0;const o=n(0);e.Listen=(t,e)=>(n,o)=>{n.constructor.listeners||(n.constructor.listeners=[]),n.constructor.listeners.push({selector:e,eventName:t,handler:n[o]})};e.addEventListeners=t=>{if(t.constructor.listeners){const e=t.shadowRoot||t;for(const n of t.constructor.listeners){const o=n.selector?e.querySelector(n.selector)?e.querySelector(n.selector):null:t;o&&o.addEventListener(n.eventName,e=>{n.handler.call(t,e)})}}};e.Dispatch=t=>(e,n)=>{Object.defineProperty(e,n,{get:function(){const e=this;return{emit(r){const i=t||o.toDotCase(n);e.dispatchEvent(new CustomEvent(i,r))}}}})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.initializeProps=e.Prop=void 0;const o=n(0);e.Prop=()=>(t,e)=>{const n=o.toKebabCase(e);t.constructor.propsInit||(t.constructor.propsInit={}),t.constructor.propsInit[e]=null,Object.defineProperty(t,e,{get:function(){return this.props[e]?this.props[e]:this.getAttribute(n)},set:function(t){if(this.__connected){const r=this.props[e];this.props[e]=o.tryParseInt(t),"object"!=typeof t?this.setAttribute(n,t):this.onAttributeChange(n,r,t,!1)}else this.hasAttribute(o.toKebabCase(e))||(this.constructor.propsInit[e]=t)}})};e.initializeProps=t=>{const e=t.constructor.watchAttributes;for(let n of(t=>{const e=t.constructor.watchAttributes,n=Object.assign({},e);Object.keys(n).forEach(t=>n[t]="");const o=Object.assign(Object.assign({},n),t.constructor.propsInit);return Object.keys(o)})(t)){if(e)if(null==e[o.toKebabCase(n)])e[o.toKebabCase(n)]="";else{const r=t.props[n]||t.getAttribute(o.toKebabCase(n));"function"==typeof t[e[n]]&&t[e[n]]({new:r})}t.constructor.propsInit[n]&&(t.hasAttribute(o.toKebabCase(n))||(t[n]=t.constructor.propsInit[n]))}}},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=(s=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(a," */")),i=o.sources.map((function(t){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(t," */")}));return[n].concat(i).concat([r]).join("\n")}var s,c,a;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,o){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(r[s]=!0)}for(var c=0;c<t.length;c++){var a=[].concat(t[c]);o&&r[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),e.push(a))}},e}},function(t,e,n){"use strict";var o=this&&this.__createBinding||(Object.create?function(t,e,n,o){void 0===o&&(o=n),Object.defineProperty(t,o,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,o){void 0===o&&(o=n),t[o]=e[n]}),r=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),i=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(s=(i<3?r(s):i>3?r(e,n,s):r(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},s=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&o(e,t,n);return r(e,t),e},c=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(r,i){function s(t){try{a(o.next(t))}catch(t){i(t)}}function c(t){try{a(o.throw(t))}catch(t){i(t)}}function a(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,c)}a((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.MainNavigation=void 0;const a=n(5),u=n(12);let l=class extends a.CustomElement{constructor(){super(),this.renderMenuItems=t=>`<ul>${t.map(t=>{const e=t.SubMenuItem&&t.SubMenuItem.length?t.SubMenuItem:null;return`<li>${`<a href="${t.Url}">${t.Name}</a>`}${e?this.renderMenuItems(e):""}</li>`}).join("")}</ul>`,console.log("constructor")}setup(t){this.connect(t.container),t.id&&(this.id=t.id)}connectedCallback(){this.searchField=a.getShadowRootElement(this,"input"),console.log(this.language),u.fetchMenuItems(this.language).then(t=>{this.menuItems=t}),this.searchField&&this.searchField.setAttribute("value",this.searchString)}anchorClicked(t){this.onTextChanged.emit({detail:t.key})}valueChanged(){this.searchField&&this.searchField.setAttribute("value",this.searchString)}menuItemsChanged(){if(this.menuItems&&this.menuItems.length){console.log("hoy",this.menuItems);const t=document.createElement("template");this.menuItems.map(t=>`<li><a href="${t.Url}">${t.Name}</a></li>`).join("");t.innerHTML=this.renderMenuItems(this.menuItems),this.menuItems.map(t=>{});a.getShadowRootElement(this,"div").appendChild(t.content.cloneNode(!0))}}loadData(){return c(this,void 0,void 0,(function*(){this.data}))}static setup(t,e){const n=a.getElement(t);e.onClick&&n.addEventListener("menuButtonClick",e.onClick),e.active&&(n.showMenu=e.active)}};l.elementSelector="main-navigation",i([a.Prop()],l.prototype,"id",void 0),i([a.Prop()],l.prototype,"showMenu",void 0),i([a.Prop()],l.prototype,"searchString",void 0),i([a.Prop()],l.prototype,"data",void 0),i([a.Prop()],l.prototype,"language",void 0),i([a.Prop()],l.prototype,"menuItems",void 0),i([a.Dispatch("textChanged")],l.prototype,"onTextChanged",void 0),i([a.Listen("keypress","input")],l.prototype,"anchorClicked",null),i([a.Watch("value")],l.prototype,"valueChanged",null),i([a.Watch("menuItems")],l.prototype,"menuItemsChanged",null),i([a.Watch("data")],l.prototype,"loadData",null),l=i([a.Component({tag:"main-navigation",template:Promise.resolve().then(()=>s(n(13))),style:Promise.resolve().then(()=>s(n(14)))})],l),e.MainNavigation=l},function(t,e,n){"use strict";var o=this&&this.__createBinding||(Object.create?function(t,e,n,o){void 0===o&&(o=n),Object.defineProperty(t,o,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,o){void 0===o&&(o=n),t[o]=e[n]}),r=this&&this.__exportStar||function(t,e){for(var n in t)"default"===n||Object.prototype.hasOwnProperty.call(e,n)||o(e,t,n)};Object.defineProperty(e,"__esModule",{value:!0}),r(n(6),e),r(n(7),e),r(n(8),e),r(n(1),e),r(n(2),e),r(n(9),e),r(n(10),e),r(n(11),e)},function(t,e,n){"use strict";var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(r,i){function s(t){try{a(o.next(t))}catch(t){i(t)}}function c(t){try{a(o.throw(t))}catch(t){i(t)}}function a(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,c)}a((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.Component=void 0;const r=n(1),i=n(2),s=n(0);e.Component=t=>e=>{var n;const c=t.tag||s.toKebabCase(e.prototype.constructor.name),a=((n=class extends e{constructor(){super(),this.props={},this.showShadowRoot=null==t.shadow||t.shadow,!this.shadowRoot&&this.showShadowRoot&&this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys(this.propsInit||{}).map(t=>s.toKebabCase(t))}attributeChangedCallback(t,e,n){this.onAttributeChange(t,e,n)}onAttributeChange(t,e,n,o=!0){if(e!=n){o&&(this[s.toCamelCase(t)]=n);const r=this.constructor.watchAttributes;if(r&&r[t]){const o=r[t];this.__connected&&"function"==typeof this[o]&&this[o]({old:e,new:n})}}}connectedCallback(){const t=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return o(this,void 0,void 0,(function*(){yield this.render(),t.connectedCallback&&t.connectedCallback.call(this),this.__connected=!0,r.addEventListeners(this),i.initializeProps(this)}))}render(){return o(this,void 0,void 0,(function*(){if(this.__connected)return;const e=document.createElement("template");e.innerHTML=yield this.getStyle(),t.template instanceof Promise?e.content.appendChild(yield this.getExternalTemplate()):"string"==typeof t.template&&(e.innerHTML+=t.template),(this.showShadowRoot?this.shadowRoot:this).appendChild(e.content.cloneNode(!0))}))}getExternalTemplate(){return o(this,void 0,void 0,(function*(){const e=(yield t.template).default.toString(),n=document.createRange().createContextualFragment(e);return 1===n.children.length&&"TEMPLATE"===n.children[0].nodeName?n.firstChild.content:n}))}getStyle(){return o(this,void 0,void 0,(function*(){let e;if(t.style instanceof Promise){e=(yield t.style).default.toString()}else"string"==typeof t.style&&(e=t.style);return""+(e?`<style>${e}</style>`:"")}))}}).__connected=!1,n.ready=new Promise((t,e)=>t(!0)),n);return customElements.get(c)||customElements.define(c,a),a}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CustomElement=void 0;class o extends HTMLElement{constructor(){super()}connect(t){this.isConnected||document.querySelector(t).appendChild(this)}}e.CustomElement=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getShadowRootElement=e.getElement=void 0,e.getElement=t=>document.querySelector(t),e.getShadowRootElement=(t,e)=>t.shadowRoot.querySelector(e)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Toggle=void 0;const o=n(0);e.Toggle=()=>(t,e)=>{t.constructor.propsInit||(t.constructor.propsInit={}),t.constructor.propsInit[e]=null,Object.defineProperty(t,e,{get:function(){return(t=>{if(this.hasAttribute(t)){const e=this.getAttribute(t);return!!/^(true|false|^$)$/.test(e)&&("true"==e||""==e)}return!1})(e)},set:function(t){const n=t;if(null!=t)switch(typeof t){case"boolean":break;case"string":/^(true|false|^$)$/.test(t)?t="true"==n||""==n:(console.warn(`TypeError: Cannot set boolean toggle property '${e}' to '${t}'`),t=!1);break;default:throw`TypeError: Cannot set boolean toggle property '${e}' to '${t}'`}this.__connected?(this.props[e]=t||!1,""!==n&&null!==n?this.setAttribute(e,t):t?this.setAttribute(e,""):this.removeAttribute(e)):this.hasAttribute(o.toKebabCase(e))||(this.constructor.propsInit[e]=t)}})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Watch=void 0;const o=n(0);e.Watch=t=>(e,n)=>{e.constructor.watchAttributes||(e.constructor.watchAttributes={}),e.constructor.watchAttributes[o.toKebabCase(t)]=n,e.constructor.propsInit||(e.constructor.propsInit={}),e.constructor.propsInit[t]=null}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.fetchMenuItems=void 0,e.fetchMenuItems=t=>fetch("https://www.test.geonorge.no/api/menu?omitLinks=1").then(t=>t.json()).then(t=>(console.log("menuItems",t),t))},function(t,e,n){"use strict";n.r(e),e.default="<template>\n    <div>\n       <input />\n       <button>Meny</button>\n    </div>\n </template>\n    "},function(t,e,n){"use strict";n.r(e);var o=n(3),r=n.n(o)()(!0);r.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MainNavigation=void 0;const o=n(4);Object.defineProperty(e,"MainNavigation",{enumerable:!0,get:function(){return o.MainNavigation}})}])}));
//# sourceMappingURL=main.js.map