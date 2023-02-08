"use strict";(self.webpackChunk_kartverket_geonorge_web_components=self.webpackChunk_kartverket_geonorge_web_components||[]).push([[6361],{"./src/stories/gn-dialog/template.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".dialog-container:not(.visible){display:none}.dialog-container.visible{display:flex;flex-wrap:wrap;position:fixed;width:100%;background:rgba(0,0,0,.25);height:100%;top:0;left:0;align-content:center;padding:8px 28px;z-index:2;justify-content:center}@media(min-width: 992px){.dialog-container.visible{padding:36px}}.dialog-container .dialog-content{max-height:-moz-calc(100% - 128px);max-height:-webkit-calc(100% - 128px);max-height:calc(100% - 128px);-webkit-box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);-moz-box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);-webkit-border-radius:4px;border-radius:4px;max-width:540px;width:100%;background-color:#fff;overflow:visible;position:relative}.dialog-container .dialog-content:not(.noPadding){padding:22px}@media(min-width: 768px){.dialog-container .dialog-content:not(.noPadding){padding:30px}}@media(min-width: 992px){.dialog-container .dialog-content{width:-moz-calc(100% - 128px);width:-webkit-calc(100% - 128px);width:calc(100% - 128px);max-height:100%}}.dialog-container .dialog-content .close-dialog-button{background:none;border:none;color:#2f3940;display:inline-block;position:absolute;right:7px;top:4px;text-decoration:underline;font-size:19px;cursor:pointer;padding:0;right:8px;top:5px}@media(min-width: 768px){.dialog-container .dialog-content .close-dialog-button{right:15px;top:10px}}.dialog-container .dialog-content .close-dialog-button:hover{text-decoration:none}.dialog-container .dialog-content .close-dialog-button svg{width:17px;height:17px}","",{version:3,sources:["webpack://./src/stories/gn-dialog/template.scss","webpack://./src/style/mixins/_breakpoints.scss","webpack://./src/style/mixins/_calc.scss","webpack://./src/style/mixins/_box-shadow.scss","webpack://./src/style/mixins/_border-radius.scss","webpack://./src/style/variables/_colors.scss"],names:[],mappings:"AAGI,gCACI,YAAA,CAEJ,0BACI,YAAA,CACA,cAAA,CACA,cAAA,CACA,UAAA,CACA,0BAAA,CACA,WAAA,CACA,KAAA,CACA,MAAA,CACA,oBAAA,CACA,gBAAA,CACA,SAAA,CACA,sBAAA,CCZA,yBAAA,0BDcI,YAAA,CAAA,CAGR,kCEtBF,kCAAA,CACA,qCAAA,CACA,6BAAA,CCFE,iHHwBI,CGvBJ,8GHuBI,CGtBJ,yGHsBI,CIxBN,yBJ6B6B,CI5B7B,iBJ4B6B,CACvB,eAAA,CACA,UAAA,CACA,qBAAA,CACA,gBAAA,CACA,iBAAA,CACA,kDACI,YAAA,CC3BJ,yBD0BA,kDAGQ,YAAA,CAAA,CCjCR,yBDiBJ,kCEtBF,6BAAA,CACA,gCAAA,CACA,wBAAA,CFyCU,eAAA,CAAA,CAEJ,uDACI,eAAA,CACA,WAAA,CACA,aK1CE,CL2CF,oBAAA,CACA,iBAAA,CACA,SAAA,CACA,OAAA,CACA,yBAAA,CACA,cAAA,CACA,cAAA,CACA,SAAA,CACA,SAAA,CACA,OAAA,CCjDJ,yBDoCA,uDAeQ,UAAA,CACA,QAAA,CAAA,CAEJ,6DACI,oBAAA,CAEJ,2DACI,UAAA,CACA,WAAA",sourcesContent:['@import "../../style/all";\n\n.dialog-container {\n    &:not(.visible) {\n        display: none;\n    }\n    &.visible {\n        display: flex;\n        flex-wrap: wrap;\n        position: fixed;\n        width: 100%;\n        background: rgba(0, 0, 0, 0.25);\n        height: 100%;\n        top: 0;\n        left: 0;\n        align-content: center;\n        padding: 8px 28px;\n        z-index: 2;\n        justify-content: center;\n        @include breakpoint(laptop) {\n            padding: 36px;\n        }\n    }\n    .dialog-content {\n        @include calc("max-height", "100% - 128px");\n        @include box-shadow(\n            0 11px 15px -7px rgba(0, 0, 0, 0.2),\n            0 24px 38px 3px rgba(0, 0, 0, 0.14),\n            0 9px 46px 8px rgba(0, 0, 0, 0.12)\n        );\n        @include border-radius(4px);\n        max-width: 540px;\n        width: 100%;\n        background-color: #fff;\n        overflow: visible;\n        position: relative;\n        &:not(.noPadding) {\n            padding: 22px;\n            @include breakpoint(tablet) {\n                padding: 30px;\n            }\n        }\n        @include breakpoint(laptop) {\n            @include calc("width", "100% - 128px");\n            max-height: 100%;\n        }\n        .close-dialog-button {\n            background: none;\n            border: none;\n            color: $default-text;\n            display: inline-block;\n            position: absolute;\n            right: 7px;\n            top: 4px;\n            text-decoration: underline;\n            font-size: 19px;\n            cursor: pointer;\n            padding: 0;\n            right: 8px;\n            top: 5px;\n            @include breakpoint(tablet) {\n                right: 15px;\n                top: 10px;\n            }\n            &:hover {\n                text-decoration: none;\n            }\n            svg {\n                width: 17px;\n                height: 17px;\n            }\n        }\n    }\n}\n',"@mixin breakpoint($point) {\n    @if $point == desktop {\n        @media (min-width: $screen-desktop) {\n            @content;\n        }\n    } @else if $point == laptop {\n        @media (min-width: $screen-laptop) {\n            @content;\n        }\n    } @else if $point == tablet {\n        @media (min-width: $screen-tablet) {\n            @content;\n        }\n    } @else if $point == phablet {\n        @media (min-width: $screen-phablet) {\n            @content;\n        }\n    }\n}\n","\ufeff@mixin calc($property, $expression) {\n  #{$property}: -moz-calc(#{$expression});\n  #{$property}: -webkit-calc(#{$expression});\n  #{$property}: calc(#{$expression});\n}","\ufeff@mixin box-shadow($shadows...) {\n    -webkit-box-shadow: $shadows;\n    -moz-box-shadow: $shadows;\n    box-shadow: $shadows;\n}\n","@mixin border-radius($radius) {\n  -webkit-border-radius: $radius;\n  border-radius: $radius;\n}\n\n// Single side border-radius\n\n@mixin border-top-radius($radius) {\n  -webkit-border-top-right-radius: $radius;\n  border-top-right-radius: $radius;\n  -webkit-border-top-left-radius: $radius;\n  border-top-left-radius: $radius;\n}\n@mixin border-right-radius($radius) {\n  -webkit-border-bottom-right-radius: $radius;\n  border-bottom-right-radius: $radius;\n  -webkit-border-top-right-radius: $radius;\n  border-top-right-radius: $radius;\n}\n@mixin border-bottom-radius($radius) {\n  -webkit-border-bottom-right-radius: $radius;\n  border-bottom-right-radius: $radius;\n  -webkit-border-bottom-left-radius: $radius;\n  border-bottom-left-radius: $radius;\n}\n@mixin border-left-radius($radius) {\n  -webkit-border-bottom-left-radius: $radius;\n  border-bottom-left-radius: $radius;\n  -webkit-border-top-left-radius: $radius;\n  border-top-left-radius: $radius;\n}","$body-background: #ffffff;\n$navigation-bar-background:  #f7f7f7;\n$hover-background: rgba(0,0,0,.05);\n$default-border: #d8d8d8;\n\n$default-background: #eee;\n$default-background-hover: #ddd;\n$default-text:#2F3940;\n\n$light-gray: #f6f5f4;\n\n$primary-brand: #FE5000;\n$secondary-brand: #4C7AA9;\n\n$primary-background: #4C7AA9;\n$primary-background-hover: #FE5000;\n$primary-text: #3767C7;\n$primary-text-hover:#0056b3;\n\n\n$success-background: #06A755;\n$success-background-hover: #009745;\n$success-text: #06A755;\n\n\n$warning-background: #C38621;\n$warning-background-hover: #B37611;\n$warning-text: #C38621;\n\n$danger-background: #E00d0D;\n$danger-background-hover: #D00000;\n$danger-text: #E00d0D;\n\n$disabled-background: #eee;\n$disabled-text: #d8d8d8;\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);