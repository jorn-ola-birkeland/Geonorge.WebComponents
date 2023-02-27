"use strict";(self.webpackChunk_kartverket_geonorge_web_components=self.webpackChunk_kartverket_geonorge_web_components||[]).push([[8058],{"./src/stories/navigation-tabs/navigation-tab-heading/navigation-tab-heading.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,':host{font-family:"Open Sans",sans-serif;display:inline-flex;cursor:pointer}:host slot{-webkit-border-radius:4px 4px 0 0;border-radius:4px 4px 0 0;display:block;background-color:#4c7aa9;padding:10px 12px;transition:all .35s linear 0s;color:#fff;border-bottom:1px solid rgba(0,0,0,0);background-clip:padding-box;font-size:13px;margin-bottom:0;margin-bottom:-1px;margin-right:2px}:host slot:hover{background-color:#fe5000;color:#fff;border-color:rgba(0,0,0,0)}:host slot.selected{border:1px solid #414042;border-bottom:1px solid #fff;background-color:#fff;color:#555;cursor:default}',"",{version:3,sources:["webpack://./src/stories/navigation-tabs/navigation-tab-heading/navigation-tab-heading.scss","webpack://./src/style/variables/_typography.scss","webpack://./src/style/mixins/_border-radius.scss","webpack://./src/style/variables/_colors.scss"],names:[],mappings:"AAEA,MACI,kCCHW,CDIX,mBAAA,CACA,cAAA,CAEA,WENF,iCFO6B,CEN7B,yBFM6B,CACvB,aAAA,CACA,wBGGa,CHFb,iBAAA,CACA,6BAAA,CACA,UAAA,CACA,qCAAA,CACA,2BAAA,CACA,cAAA,CACA,eAAA,CACA,kBAAA,CACA,gBAAA,CAEA,iBACI,wBGXI,CHYJ,UAAA,CACA,0BAAA,CAGJ,oBACI,wBAAA,CACA,4BAAA,CACA,qBAAA,CACA,UAAA,CACA,cAAA",sourcesContent:['@import "../../../style/all";\n\n:host {\n    font-family: $default-font;\n    display: inline-flex;\n    cursor: pointer;\n\n    slot {\n        @include border-radius(4px 4px 0 0);\n        display: block;\n        background-color: $primary-background;\n        padding: 10px 12px;\n        transition: all 0.35s linear 0s;\n        color: #fff;\n        border-bottom: 1px solid transparent;\n        background-clip: padding-box;\n        font-size: 13px;\n        margin-bottom: 0;\n        margin-bottom: -1px;\n        margin-right: 2px;\n\n        &:hover {\n            background-color: $primary-brand;\n            color: #fff;\n            border-color: transparent;\n        }\n\n        &.selected {\n            border: 1px solid #414042;\n            border-bottom: 1px solid #fff;\n            background-color: #fff;\n            color: #555;\n            cursor: default;\n            \n        }\n    }\n    \n}\n','$default-font: "Open Sans", sans-serif;\n$header-font: "Raleway", sans-serif;\n$default-font-size: 14px;\n',"@mixin border-radius($radius) {\n  -webkit-border-radius: $radius;\n  border-radius: $radius;\n}\n\n// Single side border-radius\n\n@mixin border-top-radius($radius) {\n  -webkit-border-top-right-radius: $radius;\n  border-top-right-radius: $radius;\n  -webkit-border-top-left-radius: $radius;\n  border-top-left-radius: $radius;\n}\n@mixin border-right-radius($radius) {\n  -webkit-border-bottom-right-radius: $radius;\n  border-bottom-right-radius: $radius;\n  -webkit-border-top-right-radius: $radius;\n  border-top-right-radius: $radius;\n}\n@mixin border-bottom-radius($radius) {\n  -webkit-border-bottom-right-radius: $radius;\n  border-bottom-right-radius: $radius;\n  -webkit-border-bottom-left-radius: $radius;\n  border-bottom-left-radius: $radius;\n}\n@mixin border-left-radius($radius) {\n  -webkit-border-bottom-left-radius: $radius;\n  border-bottom-left-radius: $radius;\n  -webkit-border-top-left-radius: $radius;\n  border-top-left-radius: $radius;\n}","$body-background: #ffffff;\n$navigation-bar-background:  #f7f7f7;\n$hover-background: rgba(0,0,0,.05);\n$default-border: #d8d8d8;\n\n$default-background: #eee;\n$default-background-hover: #ddd;\n$default-text:#2F3940;\n\n$light-gray: #f6f5f4;\n\n$primary-brand: #FE5000;\n\n$primary-background: #4C7AA9;\n$primary-background-hover: #FE5000;\n$primary-text: #3767C7;\n$primary-text-hover:#0056b3;\n\n\n$success-background: #06A755;\n$success-background-hover: #009745;\n$success-text: #06A755;\n\n\n$warning-background: #C38621;\n$warning-background-hover: #B37611;\n$warning-text: #C38621;\n\n$danger-background: #E00d0D;\n$danger-background-hover: #D00000;\n$danger-text: #E00d0D;\n\n$disabled-background: #f4f4f4;\n$disabled-border: #dedede;\n$disabled-text: #707070;\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);