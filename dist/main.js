!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(t,n,r){"use strict";r.r(n);var o=[{id:1,title:"Learn JavaScript right way",author:"Js Guru",pages:455,read:!1},{id:2,title:"Learn Python right way",author:"Python Nerd",pages:1e3,read:!0},{id:3,title:"Boring Novel",author:"Borgin Young Man",pages:15e3,read:!0}],u=(document.querySelector("#book-list ul"),document.querySelector("#add-book"));document.querySelector("#remove-book");function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;i(this,t),a(this,"addBook",(function(t){e.preventDefault(),console.log(t)})),this.books=n};window.addEventListener("DOMContentLoaded",(function(){u.addEventListener("submit",l.prototype.addBook("Test"))}))}]);