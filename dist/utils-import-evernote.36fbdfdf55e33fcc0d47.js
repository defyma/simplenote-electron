(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1273:function(t,e,n){"use strict";n.r(e);var r=n(76),o=n(559),i=n(511),a={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},u=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,c=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,s=/^([+-])(\d{2})(?::?(\d{2}))?$/;function f(t){var e,n={},r=t.split(a.dateTimeDelimiter);if(/:/.test(r[0])?(n.date=null,e=r[0]):(n.date=r[0],e=r[1],a.timeZoneDelimiter.test(n.date)&&(n.date=t.split(a.timeZoneDelimiter)[0],e=t.substr(n.date.length,t.length))),e){var o=a.timezone.exec(e);o?(n.time=e.replace(o[1],""),n.timezone=o[1]):n.time=e}return n}function l(t,e){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=t.match(n);if(!r)return{year:null};var o=r[1]&&parseInt(r[1]),i=r[2]&&parseInt(r[2]);return{year:null==i?o:100*i,restDateString:t.slice((r[1]||r[2]).length)}}function p(t,e){if(null===e)return null;var n=t.match(u);if(!n)return null;var r=!!n[4],o=d(n[1]),i=d(n[2])-1,a=d(n[3]),c=d(n[4]),s=d(n[5])-1;if(r)return function(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}(0,c,s)?function(t,e,n){var r=new Date(0);r.setUTCFullYear(t,0,4);var o=r.getUTCDay()||7,i=7*(e-1)+n+1-o;return r.setUTCDate(r.getUTCDate()+i),r}(e,c,s):new Date(NaN);var f=new Date(0);return function(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(b[e]||(h(t)?29:28))}(e,i,a)&&function(t,e){return e>=1&&e<=(h(t)?366:365)}(e,o)?(f.setUTCFullYear(e,i,Math.max(o,a)),f):new Date(NaN)}function d(t){return t?parseInt(t):1}function m(t){var e=t.match(c);if(!e)return null;var n=y(e[1]),r=y(e[2]),o=y(e[3]);return function(t,e,n){if(24===t)return 0===e&&0===n;return n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}(n,r,o)?36e5*n+6e4*r+1e3*o:NaN}function y(t){return t&&parseFloat(t.replace(",","."))||0}function v(t){if("Z"===t)return 0;var e=t.match(s);if(!e)return 0;var n="+"===e[1]?-1:1,r=parseInt(e[2]),o=e[3]&&parseInt(e[3])||0;return function(t,e){return e>=0&&e<=59}(0,o)?n*(36e5*r+6e4*o):NaN}var b=[31,null,31,30,31,30,31,31,30,31,30,31];function h(t){return t%400==0||t%4==0&&t%100}var w=n(33),g=n(607);function D(t){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function O(t,e){return(O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function N(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=C(t);if(e){var o=C(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return j(this,n)}}function j(t,e){return!e||"object"!==D(e)&&"function"!=typeof e?T(t):e}function T(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function C(t){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function P(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&O(t,e)}(n,t);var e=N(n);function n(t,r){var a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),P(T(a=e.call(this)),"importNotes",(function(t){var e,n;if(t&&0!==t.length){var r=t[0];if(r&&r.path)if(r.path&&Object(w.endsWith)(r.path.toLowerCase(),".enex")){var o=new g.a(a.addNote),i=0;null===(e=window.electron)||void 0===e||e.receive("noteImportChannel",(function(t){var e;if(t.error)return a.emit("status","error","Error processing Evernote data."),void(null===(e=window.electron)||void 0===e||e.removeListener("noteImportChannel"));if(t.note)return i++,a.emit("status","progress",i),void o.importNote(t.note,a.options);if(t.complete){var n,r;if(0===i)return a.emit("status","error","No notes were found to import."),void(null===(r=window.electron)||void 0===r||r.removeListener("noteImportChannel"));a.emit("status","complete",i),null===(n=window.electron)||void 0===n||n.removeListener("noteImportChannel")}})),null===(n=window.electron)||void 0===n||n.send("importNotes",r.path)}else a.emit("status","error","An Evernote .enex file is required.");else a.emit("status","error","Could not find Evernote export file.")}else a.emit("status","error","Invalid Evernote export file.")})),P(T(a),"getConvertedDate",(function(t){var e=function(t,e){Object(i.a)(1,arguments);var n=e||{},r=null==n.additionalDigits?2:Object(o.a)(n.additionalDigits);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof t&&"[object String]"!==Object.prototype.toString.call(t))return new Date(NaN);var a,u=f(t);if(u.date){var c=l(u.date,r);a=p(c.restDateString,c.year)}if(isNaN(a)||!a)return new Date(NaN);var s,d=a.getTime(),y=0;if(u.time&&(y=m(u.time),isNaN(y)||null===y))return new Date(NaN);if(!u.timezone){var b=new Date(d+y),h=new Date(b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate(),b.getUTCHours(),b.getUTCMinutes(),b.getUTCSeconds(),b.getUTCMilliseconds());return h.setFullYear(b.getUTCFullYear()),h}return s=v(u.timezone),isNaN(s)?new Date(NaN):new Date(d+y+s)}(t).getTime()/1e3;return isNaN(e)&&(e=Date.now()/1e3),e})),a.addNote=t,a.options=r,a}return n}(r.EventEmitter);e.default=E},607:function(t,e,n){"use strict";var r=n(76),o=n(33);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=p(t);if(e){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m=["content","creationDate","deleted","markdown","modificationDate","pinned","tags"],y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(n,t);var e=s(n);function n(t){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),d(l(r=e.call(this)),"importNote",(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isTrashed,i=void 0!==n&&n,a=e.isMarkdown,u=void 0!==a&&a,c=Object(o.pick)(t,m);c.publishURL="",c.shareURL="",c.deleted=i,c.tags=Object(o.get)(c,"tags",[]),c.systemTags=Object(o.get)(c,"systemTags",[]),c.pinned&&(c.systemTags.push("pinned"),delete c.pinned),(c.markdown||u)&&(c.systemTags.push("markdown"),delete c.markdown),c.creationDate&&isNaN(c.creationDate)&&(c.creationDate=new Date(c.creationDate).getTime()/1e3),c.creationDate=c.creationDate||c.modificationDate||Date.now(),c.modificationDate=c.modificationDate||c.creationDate||Date.now(),Object.prototype.hasOwnProperty.call(c,"content")||(c.content=""),c.tags&&c.tags.map((function(t){Object(o.isEmpty)(t)})),r.addNote(c)})),d(l(r),"importNotes",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;if(Object(o.isEmpty)(t))r.emit("status","error","No notes to import.");else{if(t.activeNotes||t.trashedNotes){var n=Object(o.get)(t,"activeNotes",[]).map((function(t){return r.importNote(t,e)})),i=Object(o.get)(t,"trashedNotes",[]).map((function(t){return r.importNote(t,u(u({},e),{},{isTrashed:!0}))}));return Promise.all(n.concat(i))}r.emit("status","error","Invalid import format: No active or trashed notes found.")}})),r.addNote=t,r}return n}(r.EventEmitter);e.a=y}}]);