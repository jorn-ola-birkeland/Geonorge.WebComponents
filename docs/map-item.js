!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.geonorge=e():t.geonorge=e()}(self,(function(){return(()=>{var t={895:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>a});var o=n(62),i=n.n(o),r=n(638),s=n.n(r)()(i());s.push([t.id,"*{box-sizing:border-box}.map-items-container .icon-toggle-button{-moz-transition:all .1s ease-in-out;-o-transition:all .1s ease-in-out;-webkit-transition:all .1s ease-in-out;transition:all .1s ease-in-out;border:none;background:transparent;color:#7d746d;cursor:pointer;padding:0}@media(min-width: 37.5em){.map-items-container .icon-toggle-button{padding:0 4px}}.map-items-container .icon-toggle-button.open{color:#414042}.map-items-container .icon-toggle-button .counter{background-color:#fe5000;border-radius:50%;color:#fff;margin-top:-0.25em;margin-left:-0.2em;position:absolute;text-align:center;width:1.4em;line-height:1.4;height:1.4em;font-size:.9em}@media(min-width: 37.5em){.map-items-container .icon-toggle-button .counter{height:1.5em;width:1.5em;line-height:1.5;font-size:1em}}.map-items-container .icon-toggle-button .counter.hidden{display:none}.map-items-container .icon-toggle-button .map-icon svg{width:31px;height:32px}@media(min-width: 37.5em){.map-items-container .icon-toggle-button .map-icon svg{width:36px;height:37px}}.map-items-container .map-item-list-wrapper{position:absolute}.map-items-container .map-item-list-wrapper .map-item-list-container{-webkit-border-radius:0 0 3px 3px;border-radius:0 0 3px 3px;-moz-transition:all .1s ease-in-out;-o-transition:all .1s ease-in-out;-webkit-transition:all .1s ease-in-out;transition:all .1s ease-in-out;box-sizing:border-box;overflow:hidden;max-height:0;position:relative;top:10px;background-color:#fbfcfd;right:205px;width:260px}@media(min-width: 37.5em){.map-items-container .map-item-list-wrapper .map-item-list-container{right:245px;width:300px}}@media print{.map-items-container .map-item-list-wrapper .map-item-list-container{display:none}}.map-items-container .map-item-list-wrapper .map-item-list-container.open{-webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);-moz-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);height:auto;max-height:300px;overflow:auto}.map-items-container .map-item-list-wrapper .map-item-list-container ul{list-style:none;padding:0;margin:0}.map-items-container .map-item-list-wrapper .map-item-list-container ul li{display:flex;align-items:center;justify-content:space-between;padding:8px 16px}.map-items-container .map-item-list-wrapper .map-item-list-container ul li:hover{background-color:rgba(0,0,0,.08)}.map-items-container .map-item-list-wrapper .map-item-list-container ul li .list-icon{margin-left:8px;cursor:pointer;background:none;border:none}.map-items-container .map-item-list-wrapper .map-item-list-container ul li .list-icon svg{color:#e00d0d;width:20px}","",{version:3,sources:["webpack://custom-elements/main-navigation/map-items/map-items.scss","webpack://style/mixins/_transition.scss","webpack://style/mixins/_breakpoints.scss","webpack://style/variables/_colors.scss","webpack://style/mixins/_border-radius.scss","webpack://style/mixins/_box-shadow.scss"],names:[],mappings:"AAEA,EACI,qBAAA,CAIA,yCCNA,mCDOI,CCNJ,iCDMI,CCLJ,sCDKI,CCJJ,8BDII,CACA,WAAA,CACA,sBAAA,CACA,aAAA,CACA,cAAA,CACA,SAAA,CECA,0BFPJ,yCAQQ,aAAA,CAAA,CAEJ,8CACI,aAAA,CAEJ,kDACI,wBGjBI,CHkBJ,iBAAA,CACA,UAAA,CACA,kBAAA,CACA,kBAAA,CACA,iBAAA,CACA,iBAAA,CACA,WAAA,CACA,eAAA,CACA,YAAA,CACA,cAAA,CEjBJ,0BFMA,kDAaQ,YAAA,CACA,WAAA,CACA,eAAA,CACA,aAAA,CAAA,CAEJ,yDACI,YAAA,CAIJ,uDACI,UAAA,CACA,WAAA,CE/BR,0BF6BI,uDAIQ,UAAA,CACA,WAAA,CAAA,CAKhB,4CACI,iBAAA,CACA,qEItDN,iCJuDiC,CItDjC,yBJsDiC,CCvD/B,mCDwDQ,CCvDR,iCDuDQ,CCtDR,sCDsDQ,CCrDR,8BDqDQ,CACA,qBAAA,CACA,eAAA,CACA,YAAA,CACA,iBAAA,CACA,QAAA,CACA,wBAAA,CACA,WAAA,CACA,WAAA,CEnDJ,0BFyCA,qEAYQ,WAAA,CACA,WAAA,CAAA,CAEJ,aAfJ,qEAgBQ,YAAA,CAAA,CAEJ,0EKxER,8GLyEY,CKxEZ,2GLwEY,CKvEZ,sGLuEY,CAKA,WAAA,CACA,gBAAA,CACA,aAAA,CAEJ,wEACI,eAAA,CACA,SAAA,CACA,QAAA,CACA,2EACI,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,gBAAA,CACA,iFACI,gCG3FL,CH6FC,sFACI,eAAA,CACA,cAAA,CACA,eAAA,CACA,WAAA,CACA,0FACI,aGhGX,CHiGW,UAAA",sourcesContent:['@import "../../../style/all";\n\n* {\n    box-sizing: border-box;\n}\n\n.map-items-container {\n    .icon-toggle-button {\n        @include transition(all 0.1s ease-in-out);\n        border: none;\n        background: transparent;\n        color: #7d746d;\n        cursor: pointer;\n        padding: 0;\n        @include breakpoint(phablet) {\n            padding: 0 4px;\n        }\n        &.open {\n            color: #414042;\n        }\n        .counter {\n            background-color: $primary-brand;\n            border-radius: 50%;\n            color: #fff;\n            margin-top: -0.25em;\n            margin-left: -0.2em;\n            position: absolute;\n            text-align: center;\n            width: 1.4em;\n            line-height: 1.4;\n            height: 1.4em;\n            font-size: .9em;\n            @include breakpoint(phablet) {\n                height: 1.5em;\n                width: 1.5em;\n                line-height: 1.5;\n                font-size: 1em;\n            }\n            &.hidden {\n                display: none;\n            }\n        }\n        .map-icon {\n            svg {\n                width: 31px;\n                height: 32px;\n                @include breakpoint(phablet) {\n                    width: 36px;\n                    height: 37px;\n                }\n            }\n        }\n    }\n    .map-item-list-wrapper {\n        position: absolute;\n        .map-item-list-container {\n            @include border-radius(0 0 3px 3px);\n            @include transition(all 0.1s ease-in-out);\n            box-sizing: border-box;\n            overflow: hidden;\n            max-height: 0;\n            position: relative;\n            top: 10px;\n            background-color: #fbfcfd;\n            right: 205px;\n            width: 260px;\n            @include breakpoint(phablet) {\n                right: 245px;\n                width: 300px;\n            }\n            @media print {\n                display: none;\n            }\n            &.open {\n                @include box-shadow(\n                    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n                    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n                    0 3px 14px 2px rgba(0, 0, 0, 0.12)\n                );\n                height: auto;\n                max-height: 300px;\n                overflow: auto;\n            }\n            ul {\n                list-style: none;\n                padding: 0;\n                margin: 0;\n                li {\n                    display: flex;\n                    align-items: center;\n                    justify-content: space-between;\n                    padding: 8px 16px;\n                    &:hover {\n                        background-color: $hover-background;\n                    }\n                    .list-icon {\n                        margin-left: 8px;\n                        cursor: pointer;\n                        background: none;\n                        border: none;\n                        svg {\n                            color: $primary-danger;\n                            width: 20px;\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n',"\ufeff@mixin transition($transition...) {\n    -moz-transition: $transition;\n    -o-transition: $transition;\n    -webkit-transition: $transition;\n    transition: $transition;\n}\n\n@mixin transition-property($property...) {\n    -moz-transition-property: $property;\n    -o-transition-property: $property;\n    -webkit-transition-property: $property;\n    transition-property: $property;\n}\n\n@mixin transition-duration($duration...) {\n    -moz-transition-property: $duration;\n    -o-transition-property: $duration;\n    -webkit-transition-property: $duration;\n    transition-property: $duration;\n}\n\n@mixin transition-timing-function($timing...) {\n    -moz-transition-timing-function: $timing;\n    -o-transition-timing-function: $timing;\n    -webkit-transition-timing-function: $timing;\n    transition-timing-function: $timing;\n}\n\n@mixin transition-delay($delay...) {\n    -moz-transition-delay: $delay;\n    -o-transition-delay: $delay;\n    -webkit-transition-delay: $delay;\n    transition-delay: $delay;\n}\n","@mixin breakpoint($point) {\n    @if $point == desktop {\n        @media (min-width: $screen-desktop) {\n            @content;\n        }\n    } @else if $point == laptop {\n        @media (min-width: $screen-laptop) {\n            @content;\n        }\n    } @else if $point == tablet {\n        @media (min-width: $screen-tablet) {\n            @content;\n        }\n    } @else if $point == phablet {\n        @media (min-width: $screen-phablet) {\n            @content;\n        }\n    }\n}\n","$body-background: #ffffff;\n$primary-background:  #f7f7f7;\n$hover-background: rgba(0,0,0,.08);\n$primary-border: #d8d8d8;\n$primary-brand: #FE5000;\n$primary-danger: #e00d0d;\n$primary-warning: #C38621;\n$icon-disabled: #C2BBBA;\n$secondary-brand: #7da1c4;\n$icon-enabled: #333;\n$primary-success: #06A755;\n$anchor-active:#3767C7;\n$default-text:#2f3940;","@mixin border-radius($radius) {\n  -webkit-border-radius: $radius;\n  border-radius: $radius;\n}\n\n// Single side border-radius\n\n@mixin border-top-radius($radius) {\n  -webkit-border-top-right-radius: $radius;\n  border-top-right-radius: $radius;\n  -webkit-border-top-left-radius: $radius;\n  border-top-left-radius: $radius;\n}\n@mixin border-right-radius($radius) {\n  -webkit-border-bottom-right-radius: $radius;\n  border-bottom-right-radius: $radius;\n  -webkit-border-top-right-radius: $radius;\n  border-top-right-radius: $radius;\n}\n@mixin border-bottom-radius($radius) {\n  -webkit-border-bottom-right-radius: $radius;\n  border-bottom-right-radius: $radius;\n  -webkit-border-bottom-left-radius: $radius;\n  border-bottom-left-radius: $radius;\n}\n@mixin border-left-radius($radius) {\n  -webkit-border-bottom-left-radius: $radius;\n  border-bottom-left-radius: $radius;\n  -webkit-border-top-left-radius: $radius;\n  border-top-left-radius: $radius;\n}","\ufeff@mixin box-shadow($shadows...) {\n    -webkit-box-shadow: $shadows;\n    -moz-box-shadow: $shadows;\n    box-shadow: $shadows;\n}\n"],sourceRoot:""}]);const a=s},814:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>o});const o='<template>\n    <div class="map-items-container">\n        <button id="map-toggle-button" class="icon-toggle-button">\n            <span id="map-toggle-button-counter" class="counter"></span>\n            <span id="map-toggle-button-icon" class="map-icon"></span>\n        </button>\n        <div class="map-item-list-wrapper">\n            <div id="map-item-list-container" class="map-item-list-container"></div>\n        </div>\n    </div>\n</template>'},638:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,o){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(i[s]=!0)}for(var a=0;a<t.length;a++){var c=[].concat(t[a]);o&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},62:t=>{"use strict";function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}t.exports=function(t){var n,o,i=(o=4,function(t){if(Array.isArray(t))return t}(n=t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],o=!0,i=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(o=(s=a.next()).done)&&(n.push(s.value),!e||n.length!==e);o=!0);}catch(t){i=!0,r=t}finally{try{o||null==a.return||a.return()}finally{if(i)throw r}}return n}}(n,o)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,n):void 0}}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=i[1],s=i[3];if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),p="/*# ".concat(c," */"),l=s.sources.map((function(t){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(t," */")}));return[r].concat(l).concat([p]).join("\n")}return[r].join("\n")}},397:function(t,e,n){"use strict";var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function s(t){try{c(o.next(t))}catch(t){r(t)}}function a(t){try{c(o.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}c((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.Component=void 0;const i=n(969),r=n(773),s=n(804);e.Component=t=>e=>{var n;const a=t.tag||s.toKebabCase(e.prototype.constructor.name),c=((n=class extends e{constructor(){super(),this.props={},this.showShadowRoot=null==t.shadow||t.shadow,!this.shadowRoot&&this.showShadowRoot&&this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys(this.propsInit||{}).map((t=>s.toKebabCase(t)))}attributeChangedCallback(t,e,n){this.onAttributeChange(t,e,n)}onAttributeChange(t,e,n,o=!0){if(e!=n){o&&(this[s.toCamelCase(t)]=n);const i=this.constructor.watchAttributes;if(i&&i[t]){const o=i[t];this.__connected&&"function"==typeof this[o]&&this[o]({old:e,new:n})}}}connectedCallback(){const t=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return o(this,void 0,void 0,(function*(){yield this.render(),t.connectedCallback&&t.connectedCallback.call(this),this.__connected=!0,i.addEventListeners(this),r.initializeProps(this)}))}render(){return o(this,void 0,void 0,(function*(){if(this.__connected)return;const e=document.createElement("template");e.innerHTML=yield this.getStyle(),t.template instanceof Promise?e.content.appendChild(yield this.getExternalTemplate()):"string"==typeof t.template&&(e.innerHTML+=t.template),(this.showShadowRoot?this.shadowRoot:this).appendChild(e.content.cloneNode(!0))}))}getExternalTemplate(){return o(this,void 0,void 0,(function*(){const e=(yield t.template).default.toString(),n=document.createRange().createContextualFragment(e);return 1===n.children.length&&"TEMPLATE"===n.children[0].nodeName?n.firstChild.content:n}))}getStyle(){return o(this,void 0,void 0,(function*(){let e;return t.style instanceof Promise?e=(yield t.style).default.toString():"string"==typeof t.style&&(e=t.style),e?`<style>${e}</style>`:""}))}}).__connected=!1,n.ready=new Promise(((t,e)=>t(!0))),n);return customElements.get(a)||customElements.define(a,c),c}},985:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CustomElement=void 0;class n extends HTMLElement{constructor(){super()}connect(t){this.isConnected||document.querySelector(t).appendChild(this)}}e.CustomElement=n},265:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getShadowRootElement=e.getElement=void 0,e.getElement=t=>document.querySelector(t),e.getShadowRootElement=(t,e)=>t.shadowRoot.querySelector(e)},406:function(t,e,n){"use strict";var o=this&&this.__createBinding||(Object.create?function(t,e,n,o){void 0===o&&(o=n),Object.defineProperty(t,o,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,o){void 0===o&&(o=n),t[o]=e[n]}),i=this&&this.__exportStar||function(t,e){for(var n in t)"default"===n||Object.prototype.hasOwnProperty.call(e,n)||o(e,t,n)};Object.defineProperty(e,"__esModule",{value:!0}),i(n(397),e),i(n(985),e),i(n(265),e),i(n(969),e),i(n(773),e),i(n(271),e),i(n(766),e),i(n(938),e)},969:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Dispatch=e.addEventListeners=e.Listen=void 0;const o=n(804);e.Listen=(t,e)=>(n,o)=>{n.constructor.listeners||(n.constructor.listeners=[]),n.constructor.listeners.push({selector:e,eventName:t,handler:n[o]})},e.addEventListeners=t=>{if(t.constructor.listeners){const e=t.shadowRoot||t;for(const n of t.constructor.listeners){const o=n.selector?e.querySelector(n.selector)?e.querySelector(n.selector):null:t;o&&o.addEventListener(n.eventName,(e=>{n.handler.call(t,e)}))}}},e.Dispatch=t=>(e,n)=>{Object.defineProperty(e,n,{get:function(){const e=this;return{emit(i){const r=t||o.toDotCase(n);e.dispatchEvent(new CustomEvent(r,i))}}}})}},773:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.initializeProps=e.Prop=void 0;const o=n(804);e.Prop=()=>(t,e)=>{const n=o.toKebabCase(e);t.constructor.propsInit||(t.constructor.propsInit={}),t.constructor.propsInit[e]=null,Object.defineProperty(t,e,{get:function(){return this.props[e]?this.props[e]:this.getAttribute(n)},set:function(t){if(this.__connected){const i=this.props[e];this.props[e]=o.tryParseInt(t),"object"!=typeof t?this.setAttribute(n,t):this.onAttributeChange(n,i,t,!1)}else this.hasAttribute(o.toKebabCase(e))||(this.constructor.propsInit[e]=t)}})},e.initializeProps=t=>{const e=t.constructor.watchAttributes;for(let n of(t=>{const e=t.constructor.watchAttributes,n=Object.assign({},e);Object.keys(n).forEach((t=>n[t]=""));const o=Object.assign(Object.assign({},n),t.constructor.propsInit);return Object.keys(o)})(t)){if(e)if(null==e[o.toKebabCase(n)])e[o.toKebabCase(n)]="";else{const i=t.props[n]||t.getAttribute(o.toKebabCase(n));"function"==typeof t[e[n]]&&t[e[n]]({new:i})}t.constructor.propsInit[n]&&(t.hasAttribute(o.toKebabCase(n))||(t[n]=t.constructor.propsInit[n]))}}},271:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Toggle=void 0;const o=n(804);e.Toggle=()=>(t,e)=>{t.constructor.propsInit||(t.constructor.propsInit={}),t.constructor.propsInit[e]=null,Object.defineProperty(t,e,{get:function(){return(t=>{if(this.hasAttribute(t)){const e=this.getAttribute(t);return!!/^(true|false|^$)$/.test(e)&&("true"==e||""==e)}return!1})(e)},set:function(t){const n=t;if(null!=t)switch(typeof t){case"boolean":break;case"string":/^(true|false|^$)$/.test(t)?t="true"==n||""==n:(console.warn(`TypeError: Cannot set boolean toggle property '${e}' to '${t}'`),t=!1);break;default:throw`TypeError: Cannot set boolean toggle property '${e}' to '${t}'`}this.__connected?(this.props[e]=t||!1,""!==n&&null!==n?this.setAttribute(e,t):t?this.setAttribute(e,""):this.removeAttribute(e)):this.hasAttribute(o.toKebabCase(e))||(this.constructor.propsInit[e]=t)}})}},766:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},804:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.tryParseInt=e.toDotCase=e.toCamelCase=e.toKebabCase=void 0,e.toKebabCase=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase(),e.toCamelCase=t=>t.toLowerCase().replace(/(\-\w)/g,(t=>t[1].toUpperCase())),e.toDotCase=t=>t.replace(/(?!^)([A-Z])/g," $1").replace(/[_\s]+(?=[a-zA-Z])/g,".").toLowerCase(),e.tryParseInt=t=>parseInt(t)==t&&NaN!==parseFloat(t)?parseInt(t):t},938:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Watch=void 0;const o=n(804);e.Watch=t=>(e,n)=>{e.constructor.watchAttributes||(e.constructor.watchAttributes={}),e.constructor.watchAttributes[o.toKebabCase(t)]=n,e.constructor.propsInit||(e.constructor.propsInit={}),e.constructor.propsInit[t]=null}},635:t=>{t.exports='<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><style type="text/css"> .__158ibJ0__st0{fill:currentColor;} </style><path class="__158ibJ0__st0 " d="M5.2,11.2C4.4,10.1,4,8.8,4,7.3C4,3.3,7.3,0,11.4,0s7.3,3.3,7.3,7.3c0,1.5-0.4,2.8-1.1,3.9L11.4,22L5.2,11.2z M15.5,7.3c0-2.3-1.9-4.2-4.2-4.2S7.2,5.1,7.2,7.3c0,0.8,0.2,1.5,0.7,2.2c0.7,1.1,2,2,3.5,2s2.8-0.7,3.5-2 C15.3,8.9,15.5,8.1,15.5,7.3z"></path></svg>'},374:t=>{t.exports='<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="trash" class="__2fgqV-u__svg-inline--fa __2fgqV-u__fa-trash __2fgqV-u__fa-w-14 __2fgqV-u__ " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M432 80h-82.4l-34-56.7A48 48 0 0 0 274.4 0H173.6a48 48 0 0 0-41.2 23.3L98.4 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16l21.2 339a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM173.6 48h100.8l19.2 32H154.4zm173.3 416H101.11l-21-336h287.8z"></path></svg>'},422:function(t,e,n){"use strict";var o=this&&this.__createBinding||(Object.create?function(t,e,n,o){void 0===o&&(o=n),Object.defineProperty(t,o,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,o){void 0===o&&(o=n),t[o]=e[n]}),i=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),r=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(r<3?i(s):r>3?i(e,n,s):i(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s},s=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&o(e,t,n);return i(e,t),e},a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.MapItems=void 0;const c=n(406),p=a(n(635)),l=a(n(374)),d=n(586);let u=class extends c.CustomElement{constructor(){super(),this.hideListContainer=()=>{this.showList=!1},this.renderMapItems=t=>{const e=t.map((t=>{const e=document.createElement("span");e.innerText=t.Title;const n=document.createElement("button");return n.classList.add("list-icon"),n.innerHTML=l.default,n.dataset.mapItem=JSON.stringify(t),e.appendChild(n),`<li>${e.innerHTML}</li>`})).join("");this.mapItemListContainer.innerHTML=`<ul>${e}</ul>`},this.clickOutsideMapItemsContainer=this.clickOutsideMapItemsContainer.bind(this)}setup(t){this.connect(t.container),t.id&&(this.id=t.id)}connectedCallback(){this.mapButton=c.getShadowRootElement(this,"#map-toggle-button"),this.mapIcon=c.getShadowRootElement(this,"#map-toggle-button-icon"),this.mapIconCounter=c.getShadowRootElement(this,"#map-toggle-button-counter"),this.mapItemListContainer=c.getShadowRootElement(this,"#map-item-list-container"),this.getUpdatedMapItems(),this.mapIcon.innerHTML=p.default,this.renderMapItemsCounter(),document.addEventListener("click",this.clickOutsideMapItemsContainer)}getUpdatedMapItems(){this.mapItems=d.getMapItems()}disconnectedCallback(){document.removeEventListener("click",this.clickOutsideMapItemsContainer)}clickOutsideMapItemsContainer(t){const e=t.composedPath()[0];e.closest("#map-item-list-container")||e.closest("#map-toggle-button")||this.hideListContainer()}renderMapItemsCounter(){this.mapItems&&this.mapItems.length?(this.mapIconCounter.innerHTML=this.mapItems.length.toString(),this.mapIconCounter.classList.remove("hidden")):(this.mapIconCounter.innerHTML="",this.mapIconCounter.classList.add("hidden"))}buttonClicked(t){this.showList=!this.showList}removeMapItemClicked(t){const e=t.composedPath()[0];e.closest("#menu-container");const n=e.closest("button");if(n){const e=n.dataset&&n.dataset.mapItem?JSON.parse(n.dataset.mapItem):null;e&&(t.stopPropagation(),d.removeMapItem(e),this.getUpdatedMapItems(),this.renderMapItems(this.mapItems),this.renderMapItemsCounter())}}showMenuChanged(){this.showList?this.mapItemListContainer.classList.add("open"):this.mapItemListContainer.classList.remove("open"),this.showList?this.mapButton.classList.add("open"):this.mapButton.classList.remove("open")}mapItemsChanged(){this.mapItems&&this.mapItems.length&&(this.renderMapItems(this.mapItems),this.renderMapItemsCounter())}static setup(t,e){const n=c.getElement(t);e.onClick&&n.addEventListener("menuButtonClick",e.onClick),e.active&&(n.showList=e.active)}};u.elementSelector="map-items",r([c.Prop()],u.prototype,"id",void 0),r([c.Toggle()],u.prototype,"showList",void 0),r([c.Listen("click","#map-toggle-button")],u.prototype,"buttonClicked",null),r([c.Listen("click","#map-item-list-container")],u.prototype,"removeMapItemClicked",null),r([c.Watch("showlist")],u.prototype,"showMenuChanged",null),r([c.Watch("mapItems")],u.prototype,"mapItemsChanged",null),u=r([c.Component({tag:"map-items",template:Promise.resolve().then((()=>s(n(814)))),style:Promise.resolve().then((()=>s(n(895))))})],u),e.MapItems=u},586:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.removeMapItem=e.getMapItems=void 0,e.getMapItems=()=>localStorage.mapItems&&Array.isArray(JSON.parse(localStorage.mapItems))?JSON.parse(localStorage.mapItems):[],e.removeMapItem=t=>{let e=localStorage.mapItems&&Array.isArray(JSON.parse(localStorage.mapItems))?JSON.parse(localStorage.mapItems):[];localStorage.mapItems=JSON.stringify(e.filter((e=>e.Uuid!==t.Uuid)))}}},e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={id:o,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.exports}return n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n(422)})()}));
//# sourceMappingURL=map-item.js.map