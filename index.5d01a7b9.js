!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},t.parcelRequired7c6=o);var r=o("dCfNN"),l=document.querySelector(".feedback-form"),i=document.querySelector('input[name="email"]'),u=document.querySelector('textarea[name="message"]'),d="feedback-form-state",s={email:"",message:""},f=e(r)((function(e){localStorage.setItem(d,JSON.stringify(s))}),500);l.addEventListener("input",(function(e){s[e.target.name]=e.target.value,f(s)})),window.addEventListener("load",(function(e){var t=JSON.parse(localStorage.getItem(d));t&&(s.email=t.email,s.message=t.message,i.value=t.email,u.value=t.message)})),l.addEventListener("submit",(function(e){e.preventDefault(),l.reset(),localStorage.removeItem(d),console.log(s)}))}();
//# sourceMappingURL=index.5d01a7b9.js.map