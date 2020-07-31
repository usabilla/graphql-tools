(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{189:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):b({},t,{},e)),a},s=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(a),O=n,u=s["".concat(i,".").concat(O)]||s[O]||d[O]||l;return a?r.a.createElement(u,b({ref:t},c,{components:a})):r.a.createElement(u,b({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=O;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var c=2;c<l;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},55:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),l=(a(0),a(189)),i={id:"load-files",title:"@graphql-tools/load-files",sidebar_label:"load-files"},b={unversionedId:"api/modules/load-files",id:"api/modules/load-files",isDocsHomePage:!1,title:"@graphql-tools/load-files",description:"Interfaces",source:"@site/docs/api/modules/_load_files_src_index_.md",permalink:"/docs/api/modules/load-files",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/api/modules/_load_files_src_index_.md",sidebar_label:"load-files",sidebar:"someSidebar",previous:{title:"@graphql-tools/load",permalink:"/docs/api/modules/load"},next:{title:"@graphql-tools/graphql-file-loader",permalink:"/docs/api/modules/graphql-file-loader"}},o=[{value:"Interfaces",id:"interfaces",children:[]},{value:"Functions",id:"functions",children:[]},{value:"Functions",id:"functions-1",children:[{value:"loadFiles",id:"loadfiles",children:[]},{value:"loadFilesSync",id:"loadfilessync",children:[]}]}],c={rightToc:o};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"interfaces"},"Interfaces"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/interfaces/_load_files_src_index_.loadfilesoptions"}),"LoadFilesOptions"))),Object(l.b)("h3",{id:"functions"},"Functions"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/modules/load-files#loadfiles"}),"loadFiles")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/modules/load-files#loadfilessync"}),"loadFilesSync"))),Object(l.b)("h2",{id:"functions-1"},"Functions"),Object(l.b)("h3",{id:"loadfiles"},"loadFiles"),Object(l.b)("p",null,"\u25b8 ",Object(l.b)("strong",{parentName:"p"},"loadFiles"),"(",Object(l.b)("inlineCode",{parentName:"p"},"pattern"),": string | string[], ",Object(l.b)("inlineCode",{parentName:"p"},"options"),": ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/_load_files_src_index_.loadfilesoptions"}),"LoadFilesOptions"),"): ",Object(l.b)("em",{parentName:"p"},"Promise\u2039any[]\u203a")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Defined in ",Object(l.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/load-files/src/index.ts#L212"}),"packages/load-files/src/index.ts:212"))),Object(l.b)("p",null,"Asynchronously loads files using the provided glob pattern."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"pattern")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string ","|"," string[]"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Glob pattern or patterns to use when loading files")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"options")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/interfaces/_load_files_src_index_.loadfilesoptions"}),"LoadFilesOptions")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"LoadFilesDefaultOptions"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Additional options")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Returns:")," ",Object(l.b)("em",{parentName:"p"},"Promise\u2039any[]\u203a")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"loadfilessync"},"loadFilesSync"),Object(l.b)("p",null,"\u25b8 ",Object(l.b)("strong",{parentName:"p"},"loadFilesSync"),"\u2039",Object(l.b)("strong",{parentName:"p"},"T"),"\u203a(",Object(l.b)("inlineCode",{parentName:"p"},"pattern"),": string | string[], ",Object(l.b)("inlineCode",{parentName:"p"},"options"),": ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/_load_files_src_index_.loadfilesoptions"}),"LoadFilesOptions"),"): ",Object(l.b)("em",{parentName:"p"},"T[]")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Defined in ",Object(l.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/load-files/src/index.ts#L116"}),"packages/load-files/src/index.ts:116"))),Object(l.b)("p",null,"Synchronously loads files using the provided glob pattern."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Type parameters:")),Object(l.b)("p",null,"\u25aa ",Object(l.b)("strong",{parentName:"p"},"T")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"pattern")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string ","|"," string[]"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Glob pattern or patterns to use when loading files")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"options")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/interfaces/_load_files_src_index_.loadfilesoptions"}),"LoadFilesOptions")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"LoadFilesDefaultOptions"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Additional options")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Returns:")," ",Object(l.b)("em",{parentName:"p"},"T[]")))}p.isMDXComponent=!0}}]);