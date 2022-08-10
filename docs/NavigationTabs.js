!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.geonorge=e():(t.geonorge=t.geonorge||{},t.geonorge.NavigationTabs=e())}(self,(()=>(()=>{"use strict";var t={4344:(t,e,n)=>{n.r(e),n.d(e,{default:()=>s});var o=n(4663),r=n.n(o),a=n(7638),i=n.n(a)()(r());i.push([t.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const s=i},3341:(t,e,n)=>{n.r(e),n.d(e,{default:()=>s});var o=n(4663),r=n.n(o),a=n(7638),i=n.n(a)()(r());i.push([t.id,':host{font-family:"Open Sans",sans-serif;display:inline-flex;cursor:pointer}:host slot{display:block;background-color:#4c7aa9;padding:10px 12px;transition:all .35s linear 0s;color:#fff;border-bottom:1px solid rgba(0,0,0,0);background-clip:padding-box;border-radius:0;font-size:13px;margin-bottom:0;margin-bottom:-1px;margin-right:2px}:host slot:hover{background-color:#fe5000;color:#fff;border-color:rgba(0,0,0,0)}:host slot.selected{border:1px solid #414042;border-bottom:1px solid #fff;background-color:#fff;color:#555;cursor:default}',"",{version:3,sources:["webpack://./custom-elements/navigation-tabs/navigation-tab-heading/navigation-tab-heading.scss","webpack://./style/variables/_typography.scss","webpack://./style/variables/_colors.scss"],names:[],mappings:"AAEA,MACI,kCCHW,CDIX,mBAAA,CACA,cAAA,CAEA,WACI,aAAA,CACA,wBECU,CAAA,iBAAA,CFCV,6BAAA,CACA,UAAA,CACA,qCAAA,CACA,2BAAA,CACA,eAAA,CACA,cAAA,CACA,eAAA,CACA,kBAAA,CACA,gBAAA,CAEA,iBACI,wBEbI,CFcJ,UAAA,CACA,0BAAA,CAGJ,oBACI,wBAAA,CACA,4BAAA,CACA,qBAAA,CACA,UAAA,CACA,cAAA",sourcesContent:['@import "../../../style/all";\n\n:host {\n    font-family: $default-font;\n    display: inline-flex;\n    cursor: pointer;\n\n    slot {\n        display: block;\n        background-color: $secondary-brand;\n        padding: 10px 12px;\n        transition: all 0.35s linear 0s;\n        color: #fff;\n        border-bottom: 1px solid transparent;\n        background-clip: padding-box;\n        border-radius: 0;\n        font-size: 13px;\n        margin-bottom: 0;\n        margin-bottom: -1px;\n        margin-right: 2px;\n\n        &:hover {\n            background-color: $primary-brand;\n            color: #fff;\n            border-color: transparent;\n        }\n\n        &.selected {\n            border: 1px solid #414042;\n            border-bottom: 1px solid #fff;\n            background-color: #fff;\n            color: #555;\n            cursor: default;\n        }\n    }\n}\n','$default-font: "Open Sans", sans-serif;\n$header-font: "Raleway";',"$body-background: #ffffff;\n$navigation-bar-background:  #f7f7f7;\n$hover-background: rgba(0,0,0,.05);\n$default-border: #d8d8d8;\n\n$default-background: #eee;\n$default-background-hover: #ddd;\n$default-text:#2F3940;\n\n$primary-brand: #FE5000;\n$secondary-brand: #4C7AA9;\n\n$primary-background: #4C7AA9;\n$primary-background-hover: #FE5000;\n$primary-text: #3767C7;\n$primary-text-hover:#0056b3;\n\n\n$success-background: #06A755;\n$success-background-hover: #009745;\n$success-text: #06A755;\n\n\n$warning-background: #C38621;\n$warning-background-hover: #B37611;\n$warning-text: #C38621;\n\n$danger-background: #E00d0D;\n$danger-background-hover: #D00000;\n$danger-text: #E00d0D;\n\n$disabled-background: #ffffff;\n$disabled-text: #d8d8d8;\n"],sourceRoot:""}]);const s=i},9146:(t,e,n)=>{n.r(e),n.d(e,{default:()=>s});var o=n(4663),r=n.n(o),a=n(7638),i=n.n(a)()(r());i.push([t.id,':host{font-family:"Open Sans",sans-serif}:host .navigation-tab-headings{width:100%;border-bottom:1px solid #414042;margin-bottom:10px;display:flex;flex-wrap:wrap}',"",{version:3,sources:["webpack://./custom-elements/navigation-tabs/navigation-tabs.scss","webpack://./style/variables/_typography.scss"],names:[],mappings:"AAEA,MACI,kCCHW,CDKX,+BACI,UAAA,CACA,+BAAA,CACA,kBAAA,CACA,YAAA,CACA,cAAA",sourcesContent:['@import "../../style/all";\n\n:host {\n    font-family: $default-font;\n\n    .navigation-tab-headings {\n        width: 100%;\n        border-bottom: 1px solid #414042;\n        margin-bottom: 10px;\n        display: flex;\n        flex-wrap: wrap;\n    }\n}\n','$default-font: "Open Sans", sans-serif;\n$header-font: "Raleway";'],sourceRoot:""}]);const s=i},3936:(t,e,n)=>{n.r(e),n.d(e,{default:()=>o});const o='<template>\n    <slot name="tab-content"></slot>\n</template>'},6290:(t,e,n)=>{n.r(e),n.d(e,{default:()=>o});const o='<template>\n    <slot name="tab-heading"></slot>\n</template>'},8687:(t,e,n)=>{n.r(e),n.d(e,{default:()=>o});const o='<template>\n  <div class="navigation-tab-headings">\n    <slot name="tab-heading"></slot>\n  </div>\n  <slot name="tab-content"></slot>\n</template>'},7638:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},4663:t=>{t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(r," */"),i=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(t," */")}));return[e].concat(i).concat([a]).join("\n")}return[e].join("\n")}},1397:function(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(r,a){function i(t){try{c(o.next(t))}catch(t){a(t)}}function s(t){try{c(o.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,s)}c((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.Component=void 0;const r=n(5969),a=n(5773),i=n(3804);e.Component=t=>e=>{var n;const s=t.tag||i.toKebabCase(e.prototype.constructor.name),c=((n=class extends e{constructor(){super(),this.props={},this.showShadowRoot=null==t.shadow||t.shadow,!this.shadowRoot&&this.showShadowRoot&&this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys(this.propsInit||{}).map((t=>i.toKebabCase(t)))}attributeChangedCallback(t,e,n){this.onAttributeChange(t,e,n)}onAttributeChange(t,e,n,o=!0){if(e!=n){o&&(this[i.toCamelCase(t)]=n);const r=this.constructor.watchAttributes;if(r&&r[t]){const o=r[t];this.__connected&&"function"==typeof this[o]&&this[o]({old:e,new:n})}}}connectedCallback(){const t=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return o(this,void 0,void 0,(function*(){yield this.render(),t.connectedCallback&&t.connectedCallback.call(this),this.__connected=!0,r.addEventListeners(this),a.initializeProps(this)}))}render(){return o(this,void 0,void 0,(function*(){if(this.__connected)return;const e=document.createElement("template");e.innerHTML=yield this.getStyle(),t.template instanceof Promise?e.content.appendChild(yield this.getExternalTemplate()):"string"==typeof t.template&&(e.innerHTML+=t.template),(this.showShadowRoot?this.shadowRoot:this).appendChild(e.content.cloneNode(!0))}))}getExternalTemplate(){return o(this,void 0,void 0,(function*(){const e=(yield t.template).default.toString(),n=document.createRange().createContextualFragment(e);return 1===n.children.length&&"TEMPLATE"===n.children[0].nodeName?n.firstChild.content:n}))}getStyle(){return o(this,void 0,void 0,(function*(){let e;return t.style instanceof Promise?e=(yield t.style).default.toString():"string"==typeof t.style&&(e=t.style),e?`<style>${e}</style>`:""}))}}).__connected=!1,n.ready=new Promise(((t,e)=>t(!0))),n);return customElements.get(s)||customElements.define(s,c),c}},985:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.CustomElement=void 0;class n extends HTMLElement{constructor(){super()}connect(t){this.isConnected||document.querySelector(t).appendChild(this)}}e.CustomElement=n},265:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getShadowRootElement=e.getElement=void 0,e.getElement=t=>document.querySelector(t),e.getShadowRootElement=(t,e)=>t.shadowRoot.querySelector(e)},406:function(t,e,n){var o=this&&this.__createBinding||(Object.create?function(t,e,n,o){void 0===o&&(o=n),Object.defineProperty(t,o,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,o){void 0===o&&(o=n),t[o]=e[n]}),r=this&&this.__exportStar||function(t,e){for(var n in t)"default"===n||Object.prototype.hasOwnProperty.call(e,n)||o(e,t,n)};Object.defineProperty(e,"__esModule",{value:!0}),r(n(1397),e),r(n(985),e),r(n(265),e),r(n(5969),e),r(n(5773),e),r(n(4271),e),r(n(9766),e),r(n(4938),e)},5969:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Dispatch=e.addEventListeners=e.Listen=void 0;const o=n(3804);e.Listen=(t,e)=>(n,o)=>{n.constructor.listeners||(n.constructor.listeners=[]),n.constructor.listeners.push({selector:e,eventName:t,handler:n[o]})},e.addEventListeners=t=>{if(t.constructor.listeners){const e=t.shadowRoot||t;for(const n of t.constructor.listeners){const o=n.selector?e.querySelector(n.selector)?e.querySelector(n.selector):null:t;o&&o.addEventListener(n.eventName,(e=>{n.handler.call(t,e)}))}}},e.Dispatch=t=>(e,n)=>{Object.defineProperty(e,n,{get:function(){const e=this;return{emit(r){const a=t||o.toDotCase(n);e.dispatchEvent(new CustomEvent(a,r))}}}})}},5773:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.initializeProps=e.Prop=void 0;const o=n(3804);e.Prop=()=>(t,e)=>{const n=o.toKebabCase(e);t.constructor.propsInit||(t.constructor.propsInit={}),t.constructor.propsInit[e]=null,Object.defineProperty(t,e,{get:function(){return this.props[e]?this.props[e]:this.getAttribute(n)},set:function(t){if(this.__connected){const r=this.props[e];this.props[e]=o.tryParseInt(t),"object"!=typeof t?this.setAttribute(n,t):this.onAttributeChange(n,r,t,!1)}else this.hasAttribute(o.toKebabCase(e))||(this.constructor.propsInit[e]=t)}})},e.initializeProps=t=>{const e=t.constructor.watchAttributes;for(let n of(t=>{const e=t.constructor.watchAttributes,n=Object.assign({},e);Object.keys(n).forEach((t=>n[t]=""));const o=Object.assign(Object.assign({},n),t.constructor.propsInit);return Object.keys(o)})(t)){if(e)if(null==e[o.toKebabCase(n)])e[o.toKebabCase(n)]="";else{const r=t.props[n]||t.getAttribute(o.toKebabCase(n));"function"==typeof t[e[n]]&&t[e[n]]({new:r})}t.constructor.propsInit[n]&&(t.hasAttribute(o.toKebabCase(n))||(t[n]=t.constructor.propsInit[n]))}}},4271:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Toggle=void 0;const o=n(3804);e.Toggle=()=>(t,e)=>{t.constructor.propsInit||(t.constructor.propsInit={}),t.constructor.propsInit[e]=null,Object.defineProperty(t,e,{get:function(){return(t=>{if(this.hasAttribute(t)){const e=this.getAttribute(t);return!!/^(true|false|^$)$/.test(e)&&("true"==e||""==e)}return!1})(e)},set:function(t){const n=t;if(null!=t)switch(typeof t){case"boolean":break;case"string":/^(true|false|^$)$/.test(t)?t="true"==n||""==n:(console.warn(`TypeError: Cannot set boolean toggle property '${e}' to '${t}'`),t=!1);break;default:throw`TypeError: Cannot set boolean toggle property '${e}' to '${t}'`}this.__connected?(this.props[e]=t||!1,""!==n&&null!==n?this.setAttribute(e,t):t?this.setAttribute(e,""):this.removeAttribute(e)):this.hasAttribute(o.toKebabCase(e))||(this.constructor.propsInit[e]=t)}})}},9766:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0})},3804:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.tryParseInt=e.toDotCase=e.toCamelCase=e.toKebabCase=void 0,e.toKebabCase=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase(),e.toCamelCase=t=>t.toLowerCase().replace(/(\-\w)/g,(t=>t[1].toUpperCase())),e.toDotCase=t=>t.replace(/(?!^)([A-Z])/g," $1").replace(/[_\s]+(?=[a-zA-Z])/g,".").toLowerCase(),e.tryParseInt=t=>parseInt(t)==t&&NaN!==parseFloat(t)?parseInt(t):t},4938:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Watch=void 0;const o=n(3804);e.Watch=t=>(e,n)=>{e.constructor.watchAttributes||(e.constructor.watchAttributes={}),e.constructor.watchAttributes[o.toKebabCase(t)]=n,e.constructor.propsInit||(e.constructor.propsInit={}),e.constructor.propsInit[t]=null}},6792:function(t,e,n){var o=this&&this.__createBinding||(Object.create?function(t,e,n,o){void 0===o&&(o=n);var r=Object.getOwnPropertyDescriptor(e,n);r&&!("get"in r?!e.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,o,r)}:function(t,e,n,o){void 0===o&&(o=n),t[o]=e[n]}),r=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),a=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&o(e,t,n);return r(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.NavigationTabContent=void 0;const s=n(406);let c=0,l=class extends s.CustomElement{constructor(){super()}static get observedAttributes(){return["selected"]}setup(t){this.connect(t.container),t.id&&(this.id=t.id)}connectedCallback(){this.setAttribute("role","tabpanel"),this.id||(this.id="navigation-tab-content-"+c++)}disconnectedCallback(){}static setup(t,e){(0,s.getElement)(t)}};l.elementSelector="navigation-tab-content",a([(0,s.Prop)()],l.prototype,"id",void 0),l=a([(0,s.Component)({tag:"navigation-tab-content",template:Promise.resolve().then((()=>i(n(3936)))),style:Promise.resolve().then((()=>i(n(4344))))})],l),e.NavigationTabContent=l},913:function(t,e,n){var o=this&&this.__createBinding||(Object.create?function(t,e,n,o){void 0===o&&(o=n);var r=Object.getOwnPropertyDescriptor(e,n);r&&!("get"in r?!e.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,o,r)}:function(t,e,n,o){void 0===o&&(o=n),t[o]=e[n]}),r=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),a=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&o(e,t,n);return r(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.NavigationTabHeading=void 0;const s=n(406);let c=0,l=class extends s.CustomElement{constructor(){super()}setup(t){this.connect(t.container),t.id&&(this.id=t.id)}connectedCallback(){this.setAttribute("role","tab"),this.id||(this.id="navigation-tab-heading-"+c++),this.tabHeadingElement=(0,s.getShadowRootElement)(this,"slot[name=tab-heading]"),this.setAttribute("aria-selected","false"),this.setAttribute("tabindex","-1"),this._upgradeProperty("selected")}disconnectedCallback(){}_upgradeProperty(t){if(this.hasOwnProperty(t)){let e=this[t];delete this[t],this[t]=e}}attributeChangedCallback(){}selectedChanged(){this.selected?this.setAttribute("aria-selected",""):this.removeAttribute("aria-selected"),this.selected?this.tabHeadingElement.classList.add("selected"):this.tabHeadingElement.classList.remove("selected"),this.setAttribute("tabindex",this.selected?"0":"-1")}static setup(t,e){(0,s.getElement)(t)}};l.elementSelector="navigation-tab-heading",a([(0,s.Prop)()],l.prototype,"id",void 0),a([(0,s.Toggle)()],l.prototype,"selected",void 0),a([(0,s.Watch)("selected")],l.prototype,"selectedChanged",null),l=a([(0,s.Component)({tag:"navigation-tab-heading",template:Promise.resolve().then((()=>i(n(6290)))),style:Promise.resolve().then((()=>i(n(3341))))})],l),e.NavigationTabHeading=l},697:function(t,e,n){var o=this&&this.__createBinding||(Object.create?function(t,e,n,o){void 0===o&&(o=n);var r=Object.getOwnPropertyDescriptor(e,n);r&&!("get"in r?!e.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,o,r)}:function(t,e,n,o){void 0===o&&(o=n),t[o]=e[n]}),r=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),a=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&o(e,t,n);return r(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.NavigationTabs=void 0;const s=n(406),c=n(913),l=n(6792);let d=class extends s.CustomElement{constructor(){super(),this.onSlotChange=this.onSlotChange.bind(this)}static get observedAttributes(){return["selected"]}setup(t){this.connect(t.container),t.id&&(this.id=t.id)}connectedCallback(){this.tabHeadingSlot=(0,s.getShadowRootElement)(this,"slot[name=tab-heading]"),this.tabContentSlot=(0,s.getShadowRootElement)(this,"slot[name=tab-content]"),this.tabHeadingSlot.addEventListener("slotchange",this.onSlotChange),this.tabContentSlot.addEventListener("slotchange",this.onSlotChange),this.hasAttribute("role")||this.setAttribute("role","tablist"),this.addEventListener("click",this._onClick),new c.NavigationTabHeading,new l.NavigationTabContent,Promise.all([customElements.whenDefined("navigation-tab-heading"),customElements.whenDefined("navigation-tab-content")]).then((()=>{this.linkPanels()}))}disconnectedCallback(){this.removeEventListener("click",this._onClick)}onSlotChange(){this.linkPanels()}linkPanels(){const t=this.getTabHeadingElements();t.forEach((t=>{const e=t.nextElementSibling;if("navigation-tab-content"!==e.tagName.toLowerCase())return void console.error(`navigation-tab-heading #${t.id} is not asibling of a <tab-navigation-content>`);t.setAttribute("aria-controls",e.id),e.setAttribute("aria-labelledby",t.id);let n=document.createElement("div");n.innerHTML=t.innerHTML,n.setAttribute("slot","tab-heading"),t.innerHTML="",t.appendChild(n);let o=document.createElement("div");o.innerHTML=e.innerHTML,o.setAttribute("slot","tab-content"),e.innerHTML="",e.appendChild(o)}));const e=t.find((t=>t.selected))||t[0];this.setSelectTab(e)}setSelectTab(t){this.reset();const e=this.getTabContentForTabHeading(t);if(!e)throw new Error(`No tab-content-element with id ${t.getAttribute("aria-controls")}`);t.selected=!0,e.hidden=!1}getTabHeadingElements(){return Array.from(this.querySelectorAll("navigation-tab-heading"))}getTabContentElements(){return Array.from(this.querySelectorAll("navigation-tab-content"))}getTabContentForTabHeading(t){const e=t.getAttribute("aria-controls");return this.querySelector(`#${e}`)}reset(){const t=this.getTabHeadingElements(),e=this.getTabContentElements();t.forEach((t=>t.selected=!1)),e.forEach((t=>t.hidden=!0))}_onClick(t){const e=t.target.closest("navigation-tab-heading");e&&"tab"===e.getAttribute("role")&&this.setSelectTab(e)}static setup(t,e){(0,s.getElement)(t)}};d.elementSelector="navigation-tabs",a([(0,s.Prop)()],d.prototype,"id",void 0),a([(0,s.Prop)()],d.prototype,"selectedtab",void 0),a([(0,s.Dispatch)("onSearch")],d.prototype,"onSearch",void 0),d=a([(0,s.Component)({tag:"navigation-tabs",template:Promise.resolve().then((()=>i(n(8687)))),style:Promise.resolve().then((()=>i(n(9146))))})],d),e.NavigationTabs=d}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return t[o].call(a.exports,a,a.exports,n),a.exports}return n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n(697)})()));
//# sourceMappingURL=NavigationTabs.js.map