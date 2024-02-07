/*! For license information please see 619.js.LICENSE.txt */
export const id=619;export const ids=[619];export const modules={9276:(t,e,r)=>{r.d(e,{J:()=>I});var n=r(4853),o=r(1857),i=r.n(o),a=r(5587);const l=JSON.parse('{"Elsie":{"ExampleComponentName":{"item":{"label":"string"}},"Incrementer":{"decreaseLabel":"Decrease Quantity","increaseLabel":"Increase Quantity","label":"Quantity"},"Modal":{"Close":{"label":"Close"}},"InlineAlert":{"dismissLabel":"Dismiss Alert"},"PriceSummary":{"subTotal":{"label":"Subtotal","withTaxes":"Including taxes"},"shipping":{"label":"Shipping","estimated":"Estimated Shipping","estimatedZip":"Estimated Shipping to ","zipLinkAriaLabel":"Change zip code","withTaxes":"Including taxes"},"taxes":{"total":"Tax Total","totalOnly":"Tax","breakdown":"Taxes","showBreakdown":"Show Tax Breakdown","hideBreakdown":"Hide Tax Breakdown"},"total":{"estimated":"Estimated Total","label":"Total","withoutTax":"Total excluding taxes"}},"PriceRange":{"from":{"label":"From"},"to":{"label":"to"},"asLowAs":{"label":"As low as"}},"Swatches":{"outOfStock":{"label":"out of stock swatch"},"selected":{"label":"swatch selected"},"swatch":{"label":"swatch"}},"Accordion":{"open":{"label":"Open"},"close":{"label":"Close"}},"CartItem":{"remove":{"label":"Remove Item"},"quantity":{"label":"Quantity"},"taxIncluded":{"label":"incl. VAT"},"each":{"label":"each"}}}}');var c=r(9724),s={default:l,en_US:l},u=r(1892),f=r.n(u),p=r(5760),y=r.n(p),d=r(8311),b=r.n(d),v=r(8192),h=r.n(v),m=r(8060),g=r.n(m),x=r(4865),w=r.n(x),_=r(9147),O={};O.styleTagTransform=w(),O.setAttributes=h(),O.insert=b().bind(null,"head"),O.domAPI=y(),O.insertStyleElement=g();f()(_.Z,O);_.Z&&_.Z.locals&&_.Z.locals;var j=r(869),S={};S.styleTagTransform=w(),S.setAttributes=h(),S.insert=b().bind(null,"head"),S.domAPI=y(),S.insertStyleElement=g();f()(j.Z,S);j.Z&&j.Z.locals&&j.Z.locals;var k=r(7188);function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}var E=["lang","langDefinitions","className","children"];function L(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function A(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?L(Object(r),!0).forEach((function(e){C(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function C(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==P(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==P(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===P(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function T(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var D=(0,n.createContext)({locale:"en-US"}),I=function(t){var e,r=t.lang,n=void 0===r?"en_US":r,o=t.langDefinitions,l=void 0===o?{}:o,u=t.className,f=t.children,p=T(t,E),y=i()(l.default,null!==(e=l[n])&&void 0!==e?e:{}),d=i()(function(t){return i()(s.default,s[t]||{})}(n),y);return(0,k.jsx)(D.Provider,{value:{locale:n.replace("_","-")},children:(0,k.jsx)(c.Pj,{definition:d,children:(0,k.jsx)("div",A(A({},p),{},{className:(0,a.S)(["elsie-base-design",u]),children:f}))})})}},743:(t,e,r)=>{function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(i=o.key,a=void 0,a=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(i,"string"),"symbol"===n(a)?a:String(a)),o)}var i,a}r.d(e,{m:()=>v});var i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.config=e}var e,r,n;return e=t,(r=[{key:"getConfig",value:function(){return this.config}},{key:"setConfig",value:function(t){this.config=t}}])&&o(e.prototype,r),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,l=[],c=!0,s=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(l.push(n.value),l.length!==e);c=!0);}catch(t){s=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return l}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){d(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,b(n.key),n)}}function p(t,e,r){return e&&f(t.prototype,e),r&&f(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e,r){return(e=b(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function b(t){var e=function(t,e){if("object"!==a(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===a(e)?e:String(e)}var v=p((function t(e){var r=this,n=e.init,o=e.listeners;y(this,t),d(this,"_listeners",[]),d(this,"config",new i({})),this.listeners=function(t){return r._listeners.forEach((function(t){return t.off()})),r._listeners=o(t)},this.init=function(t){return r.config.setConfig(u(u({},r.config.getConfig()),t)),n(t)}})),h=function(){function t(){y(this,t)}return p(t,null,[{key:"register",value:function(e,r){var n,o;t._mounted&&(null===(n=e.listeners)||void 0===n||n.call(e,r),null===(o=e.init)||void 0===o||o.call(e,r));t._initializers.push([e,r])}},{key:"mount",value:function(){var e,r;t._mounted=!0,null===(e=t._initializers)||void 0===e||e.forEach((function(t){var e,r=l(t,2),n=r[0],o=r[1];null===(e=n.listeners)||void 0===e||e.call(n,o)})),null===(r=t._initializers)||void 0===r||r.forEach((function(t){var e,r=l(t,2),n=r[0],o=r[1];null===(e=n.init)||void 0===e||e.call(n,o)}))}}]),t}();d(h,"_initializers",[]),d(h,"_mounted",!1)},3516:(t,e,r)=>{r.d(e,{H:()=>$});var n=r(3474),o=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i,i=/^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/,a=/[\s\n\\/='"\0<>]/,l=/^xlink:?./,c=/["&<]/;function s(t){if(!1===c.test(t+=""))return t;for(var e=0,r=0,n="",o="";r<t.length;r++){switch(t.charCodeAt(r)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 60:o="&lt;";break;default:continue}r!==e&&(n+=t.slice(e,r)),n+=o,e=r+1}return r!==e&&(n+=t.slice(e,r)),n}var u=function(t,e){return String(t).replace(/(\n+)/g,"$1"+(e||"\t"))},f=function(t,e,r){return String(t).length>(e||40)||!r&&-1!==String(t).indexOf("\n")||-1!==String(t).indexOf("<")},p={},y=/([A-Z])/g;function d(t){var e="";for(var r in t){var n=t[r];null!=n&&""!==n&&(e&&(e+=" "),e+="-"==r[0]?r:p[r]||(p[r]=r.replace(y,"-$1").toLowerCase()),e="number"==typeof n&&!1===o.test(r)?e+": "+n+"px;":e+": "+n+";")}return e||void 0}function b(t,e){return Array.isArray(e)?e.reduce(b,t):null!=e&&!1!==e&&t.push(e),t}function v(){this.__d=!0}function h(t,e){return{__v:t,context:e,props:t.props,setState:v,forceUpdate:v,__d:!0,__h:[]}}function m(t,e){var r=t.contextType,n=r&&e[r.__c];return null!=r?n?n.props.value:r.__:e}var g=[];function x(t,e,r,o,c,p){if(null==t||"boolean"==typeof t)return"";if("object"!=typeof t)return"function"==typeof t?"":s(t);var y=r.pretty,v=y&&"string"==typeof y?y:"\t";if(Array.isArray(t)){for(var w="",_=0;_<t.length;_++)y&&_>0&&(w+="\n"),w+=x(t[_],e,r,o,c,p);return w}if(void 0!==t.constructor)return"";var O,j=t.type,S=t.props,k=!1;if("function"==typeof j){if(k=!0,!r.shallow||!o&&!1!==r.renderRootComponent){if(j===n.Fragment){var P=[];return b(P,t.props.children),x(P,e,r,!1!==r.shallowHighOrder,c,p)}var E,L=t.__c=h(t,e);n.options.__b&&n.options.__b(t);var A=n.options.__r;if(j.prototype&&"function"==typeof j.prototype.render){var C=m(j,e);(L=t.__c=new j(S,C)).__v=t,L._dirty=L.__d=!0,L.props=S,null==L.state&&(L.state={}),null==L._nextState&&null==L.__s&&(L._nextState=L.__s=L.state),L.context=C,j.getDerivedStateFromProps?L.state=Object.assign({},L.state,j.getDerivedStateFromProps(L.props,L.state)):L.componentWillMount&&(L.componentWillMount(),L.state=L._nextState!==L.state?L._nextState:L.__s!==L.state?L.__s:L.state),A&&A(t),E=L.render(L.props,L.state,L.context)}else for(var T=m(j,e),D=0;L.__d&&D++<25;)L.__d=!1,A&&A(t),E=j.call(t.__c,S,T);return L.getChildContext&&(e=Object.assign({},e,L.getChildContext())),n.options.diffed&&n.options.diffed(t),x(E,e,r,!1!==r.shallowHighOrder,c,p)}j=(O=j).displayName||O!==Function&&O.name||function(t){var e=(Function.prototype.toString.call(t).match(/^\s*function\s+([^( ]+)/)||"")[1];if(!e){for(var r=-1,n=g.length;n--;)if(g[n]===t){r=n;break}r<0&&(r=g.push(t)-1),e="UnnamedComponent"+r}return e}(O)}var I,F,N="<"+j;if(S){var M=Object.keys(S);r&&!0===r.sortAttributes&&M.sort();for(var Z=0;Z<M.length;Z++){var z=M[Z],H=S[z];if("children"!==z){if(!a.test(z)&&(r&&r.allAttributes||"key"!==z&&"ref"!==z&&"__self"!==z&&"__source"!==z)){if("defaultValue"===z)z="value";else if("defaultChecked"===z)z="checked";else if("defaultSelected"===z)z="selected";else if("className"===z){if(void 0!==S.class)continue;z="class"}else c&&l.test(z)&&(z=z.toLowerCase().replace(/^xlink:?/,"xlink:"));if("htmlFor"===z){if(S.for)continue;z="for"}"style"===z&&H&&"object"==typeof H&&(H=d(H)),"a"===z[0]&&"r"===z[1]&&"boolean"==typeof H&&(H=String(H));var G=r.attributeHook&&r.attributeHook(z,H,e,r,k);if(G||""===G)N+=G;else if("dangerouslySetInnerHTML"===z)F=H&&H.__html;else if("textarea"===j&&"value"===z)I=H;else if((H||0===H||""===H)&&"function"!=typeof H){if(!(!0!==H&&""!==H||(H=z,r&&r.xml))){N=N+" "+z;continue}if("value"===z){if("select"===j){p=H;continue}"option"===j&&p==H&&void 0===S.selected&&(N+=" selected")}N=N+" "+z+'="'+s(H)+'"'}}}else I=H}}if(y){var $=N.replace(/\n\s*/," ");$===N||~$.indexOf("\n")?y&&~N.indexOf("\n")&&(N+="\n"):N=$}if(N+=">",a.test(j))throw new Error(j+" is not a valid HTML tag name in "+N);var U,R=i.test(j)||r.voidElements&&r.voidElements.test(j),B=[];if(F)y&&f(F)&&(F="\n"+v+u(F,v)),N+=F;else if(null!=I&&b(U=[],I).length){for(var Q=y&&~N.indexOf("\n"),W=!1,V=0;V<U.length;V++){var q=U[V];if(null!=q&&!1!==q){var J=x(q,e,r,!0,"svg"===j||"foreignObject"!==j&&c,p);if(y&&!Q&&f(J)&&(Q=!0),J)if(y){var Y=J.length>0&&"<"!=J[0];W&&Y?B[B.length-1]+=J:B.push(J),W=Y}else B.push(J)}}if(y&&Q)for(var K=B.length;K--;)B[K]="\n"+v+u(B[K],v)}if(B.length||F)N+=B.join("");else if(r&&r.xml)return N.substring(0,N.length-1)+" />";return!R||U||F?(y&&~N.indexOf("\n")&&(N+="\n"),N=N+"</"+j+">"):N=N.replace(/>$/," />"),N}var w={shallow:!0};O.render=O;var _=[];function O(t,e,r){e=e||{};var o=n.options.__s;n.options.__s=!0;var i,a=(0,n.h)(n.Fragment,null);return a.__k=[t],i=r&&(r.pretty||r.voidElements||r.sortAttributes||r.shallow||r.allAttributes||r.xml||r.attributeHook)?x(t,e,r):L(t,e,!1,void 0,a),n.options.__c&&n.options.__c(t,_),n.options.__s=o,_.length=0,i}function j(t){return null==t||"boolean"==typeof t?null:"string"==typeof t||"number"==typeof t||"bigint"==typeof t?(0,n.h)(null,null,t):t}function S(t,e){return"className"===t?"class":"htmlFor"===t?"for":"defaultValue"===t?"value":"defaultChecked"===t?"checked":"defaultSelected"===t?"selected":e&&l.test(t)?t.toLowerCase().replace(/^xlink:?/,"xlink:"):t}function k(t,e){return"style"===t&&null!=e&&"object"==typeof e?d(e):"a"===t[0]&&"r"===t[1]&&"boolean"==typeof e?String(e):e}var P=Array.isArray,E=Object.assign;function L(t,e,r,o,l){if(null==t||!0===t||!1===t||""===t)return"";if("object"!=typeof t)return"function"==typeof t?"":s(t);if(P(t)){var c="";l.__k=t;for(var u=0;u<t.length;u++)c+=L(t[u],e,r,o,l),t[u]=j(t[u]);return c}if(void 0!==t.constructor)return"";t.__=l,n.options.__b&&n.options.__b(t);var f=t.type,p=t.props;if("function"==typeof f){var y;if(f===n.Fragment)y=p.children;else{y=f.prototype&&"function"==typeof f.prototype.render?function(t,e){var r=t.type,o=m(r,e),i=new r(t.props,o);t.__c=i,i.__v=t,i.__d=!0,i.props=t.props,null==i.state&&(i.state={}),null==i.__s&&(i.__s=i.state),i.context=o,r.getDerivedStateFromProps?i.state=E({},i.state,r.getDerivedStateFromProps(i.props,i.state)):i.componentWillMount&&(i.componentWillMount(),i.state=i.__s!==i.state?i.__s:i.state);var a=n.options.__r;return a&&a(t),i.render(i.props,i.state,i.context)}(t,e):function(t,e){var r,o=h(t,e),i=m(t.type,e);t.__c=o;for(var a=n.options.__r,l=0;o.__d&&l++<25;)o.__d=!1,a&&a(t),r=t.type.call(o,t.props,i);return r}(t,e);var d=t.__c;d.getChildContext&&(e=E({},e,d.getChildContext()))}var b=L(y=null!=y&&y.type===n.Fragment&&null==y.key?y.props.children:y,e,r,o,t);return n.options.diffed&&n.options.diffed(t),t.__=void 0,n.options.unmount&&n.options.unmount(t),b}var v,g,x="<";if(x+=f,p)for(var w in v=p.children,p){var _=p[w];if(!("key"===w||"ref"===w||"__self"===w||"__source"===w||"children"===w||"className"===w&&"class"in p||"htmlFor"===w&&"for"in p||a.test(w)))if(_=k(w=S(w,r),_),"dangerouslySetInnerHTML"===w)g=_&&_.__html;else if("textarea"===f&&"value"===w)v=_;else if((_||0===_||""===_)&&"function"!=typeof _){if(!0===_||""===_){_=w,x=x+" "+w;continue}if("value"===w){if("select"===f){o=_;continue}"option"!==f||o!=_||"selected"in p||(x+=" selected")}x=x+" "+w+'="'+s(_)+'"'}}var O=x;if(x+=">",a.test(f))throw new Error(f+" is not a valid HTML tag name in "+x);var A="",C=!1;if(g)A+=g,C=!0;else if("string"==typeof v)A+=s(v),C=!0;else if(P(v)){t.__k=v;for(var T=0;T<v.length;T++){var D=v[T];if(v[T]=j(D),null!=D&&!1!==D){var I=L(D,e,"svg"===f||"foreignObject"!==f&&r,o,t);I&&(A+=I,C=!0)}}}else if(null!=v&&!1!==v&&!0!==v){t.__k=[j(v)];var F=L(v,e,"svg"===f||"foreignObject"!==f&&r,o,t);F&&(A+=F,C=!0)}if(n.options.diffed&&n.options.diffed(t),t.__=void 0,n.options.unmount&&n.options.unmount(t),C)x+=A;else if(i.test(f))return O+" />";return x+"</"+f+">"}O.shallowRender=function(t,e){return O(t,e,w)};const A=O;var C=r(1177),T=r(7188);function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function I(){I=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),l=new S(o||[]);return n(a,"_invoke",{value:w(t,r,l)}),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f={};function p(){}function y(){}function d(){}var b={};c(b,i,(function(){return this}));var v=Object.getPrototypeOf,h=v&&v(v(k([])));h&&h!==e&&r.call(h,i)&&(b=h);var m=d.prototype=p.prototype=Object.create(b);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(n,i,a,l){var c=u(t[n],t,i);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==D(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,l)}),(function(t){o("throw",t,a,l)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,l)}))}l(c.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function w(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var l=_(a,r);if(l){if(l===f)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function _(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=u(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function k(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return y.prototype=d,n(m,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:y,configurable:!0}),y.displayName=c(d,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,l,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},g(x.prototype),c(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(m),c(m,l,"Generator"),c(m,i,(function(){return this})),c(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function F(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function N(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?F(Object(r),!0).forEach((function(e){M(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function M(t,e,r){return(e=G(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Z(t,e,r,n,o,i,a){try{var l=t[i](a),c=l.value}catch(t){return void r(t)}l.done?e(c):Promise.resolve(c).then(n,o)}function z(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){Z(i,n,o,a,l,"next",t)}function l(t){Z(i,n,o,a,l,"throw",t)}a(void 0)}))}}function H(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,G(n.key),n)}}function G(t){var e=function(t,e){if("object"!==D(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==D(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===D(e)?e:String(e)}var $=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._provider=e}var e,r,o,i;return e=t,r=[{key:"render",value:function(t,e){var r=this;return function(){var o=z(I().mark((function o(i){var a,l,c;return I().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(t){o.next=2;break}throw new Error("Component is not defined");case 2:if(i){o.next=4;break}throw new Error("Root element is not defined");case 4:return o.next=6,null===(l=t.getInitialData)||void 0===l?void 0:l.call(t,e);case 6:if(o.t1=a=o.sent,o.t0=null!==o.t1,!o.t0){o.next=10;break}o.t0=void 0!==a;case 10:if(!o.t0){o.next=14;break}o.t2=a,o.next=15;break;case 14:o.t2={};case 15:c=o.t2,(0,n.render)((0,T.jsx)(C.F,N(N({node:r._provider},r._provider.props),{},{children:(0,T.jsx)(t,N(N({},e),{},{initialData:c}))})),i);case 17:case"end":return o.stop()}}),o)})));return function(t){return o.apply(this,arguments)}}()}},{key:"toString",value:(i=z(I().mark((function t(e,r,n){var o,i,a;return I().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}throw new Error("Component is not defined");case 2:return t.next=4,null===(i=e.getInitialData)||void 0===i?void 0:i.call(e,r);case 4:if(t.t1=o=t.sent,t.t0=null!==t.t1,!t.t0){t.next=8;break}t.t0=void 0!==o;case 8:if(!t.t0){t.next=12;break}t.t2=o,t.next=13;break;case 12:t.t2={};case 13:return a=t.t2,t.abrupt("return",A((0,T.jsx)(C.F,N(N({node:this._provider},this._provider.props),{},{children:(0,T.jsx)(e,N(N({},r),{},{initialData:a}))})),{},N({},n)));case 15:case"end":return t.stop()}}),t,this)}))),function(t,e,r){return i.apply(this,arguments)})}],r&&H(e.prototype,r),o&&H(e,o),Object.defineProperty(e,"prototype",{writable:!1}),t}()},9147:(t,e,r)=>{r.d(e,{Z:()=>l});var n=r(4933),o=r.n(n),i=r(3476),a=r.n(i)()(o());a.push([t.id,".elsie-base-design{\n  --color-brand-500:#454545;\n  --color-brand-600:#383838;\n  --color-brand-700:#2b2b2b;\n  --color-neutral-50:#ffffff;\n  --color-neutral-100:#fafafa;\n  --color-neutral-200:#f5f5f5;\n  --color-neutral-300:#e8e8e8;\n  --color-neutral-400:#d6d6d6;\n  --color-neutral-500:#b8b8b8;\n  --color-neutral-600:#8f8f8f;\n  --color-neutral-700:#666666;\n  --color-neutral-800:#3d3d3d;\n  --color-neutral-900:#292929;\n  --color-positive-200:#eff5ef;\n  --color-positive-500:#7fb078;\n  --color-positive-800:#53824c;\n  --color-informational-200:#eeeffb;\n  --color-informational-500:#6978d9;\n  --color-informational-800:#5d6dd6;\n  --color-warning-200:#fdf3e9;\n  --color-warning-500:#e79f5c;\n  --color-warning-800:#cc7a2e;\n  --color-alert-200:#ffebeb;\n  --color-alert-500:#db7070;\n  --color-alert-800:#c35050;\n  --color-button-active:var(--color-brand-700);\n  --color-button-focus:var(--color-neutral-400);\n  --color-button-hover:var(--color-brand-600);\n  --color-action-button-active:var(--color-neutral-50);\n  --color-action-button-hover:var(--color-neutral-300);\n  --color-opacity-16:rgba(255, 255, 255, 0.16);\n  --color-opacity-24:rgba(255, 255, 255, 0.24);\n  --grid-1-columns:4;\n  --grid-1-margins:0;\n  --grid-1-gutters:16px;\n  --grid-2-columns:12;\n  --grid-2-margins:0;\n  --grid-2-gutters:16px;\n  --grid-3-columns:12;\n  --grid-3-margins:0;\n  --grid-3-gutters:24px;\n  --grid-4-columns:12;\n  --grid-4-margins:0;\n  --grid-4-gutters:24px;\n  --grid-5-columns:12;\n  --grid-5-margins:0;\n  --grid-5-gutters:24px;\n  --shape-border-radius-1:3px;\n  --shape-border-radius-2:8px;\n  --shape-border-radius-3:24px;\n  --shape-border-width-1:1px;\n  --shape-border-width-2:1.5px;\n  --shape-border-width-3:2px;\n  --shape-border-width-4:4px;\n  --shape-shadow-1:0 0 16px 0 rgba(0, 0, 0, 0.16);\n  --shape-shadow-2:0 2px 16px 0 rgba(0, 0, 0, 0.16);\n  --shape-shadow-3:0 2px 3px 0 rgba(0, 0, 0, 0.16);\n  --shape-icon-stroke-1:1px;\n  --shape-icon-stroke-2:1.5px;\n  --shape-icon-stroke-3:2px;\n  --shape-icon-stroke-4:4px;\n  --spacing-xxsmall:4px;\n  --spacing-xsmall:8px;\n  --spacing-small:16px;\n  --spacing-medium:24px;\n  --spacing-big:32px;\n  --spacing-xbig:40px;\n  --spacing-xxbig:48px;\n  --spacing-large:64px;\n  --spacing-xlarge:72px;\n  --spacing-xxlarge:96px;\n  --spacing-huge:120px;\n  --spacing-xhuge:144px;\n  --spacing-xxhuge:192px;\n  --type-base-font-family:system-ui, sans-serif;\n  --type-display-1-font:normal normal 300 60px/72px var(--type-base-font-family);\n  --type-display-1-letter-spacing:0.04em;\n  --type-display-2-font:normal normal 300 48px/56px var(--type-base-font-family);\n  --type-display-2-letter-spacing:0.04em;\n  --type-display-3-font:normal normal 300 34px/40px var(--type-base-font-family);\n  --type-display-3-letter-spacing:0.04em;\n  --type-headline-1-font:normal normal 400 24px/32px var(--type-base-font-family);\n  --type-headline-1-letter-spacing:0.04em;\n  --type-headline-2-default-font:normal normal 300 20px/24px var(--type-base-font-family);\n  --type-headline-2-default-letter-spacing:0.04em;\n  --type-headline-2-strong-font:normal normal 400 20px/24px var(--type-base-font-family);\n  --type-headline-2-strong-letter-spacing:0.04em;\n  --type-body-1-default-font:normal normal 300 16px/24px var(--type-base-font-family);\n  --type-body-1-default-letter-spacing:0.04em;\n  --type-body-1-strong-font:normal normal 400 16px/24px var(--type-base-font-family);\n  --type-body-1-strong-letter-spacing:0.04em;\n  --type-body-1-emphasized-font:normal normal 700 16px/24px var(--type-base-font-family);\n  --type-body-1-emphasized-letter-spacing:0.04em;\n  --type-body-2-default-font:normal normal 300 14px/20px var(--type-base-font-family);\n  --type-body-2-default-letter-spacing:0.04em;\n  --type-body-2-strong-font:normal normal 400 14px/20px var(--type-base-font-family);\n  --type-body-2-strong-letter-spacing:0.04em;\n  --type-body-2-emphasized-font:normal normal 700 14px/20px var(--type-base-font-family);\n  --type-body-2-emphasized-letter-spacing:0.04em;\n  --type-button-1-font:normal normal 400 20px/26px var(--type-base-font-family);\n  --type-button-1-letter-spacing:0.08em;\n  --type-button-2-font:normal normal 400 16px/24px var(--type-base-font-family);\n  --type-button-2-letter-spacing:0.08em;\n  --type-details-caption-1-font:normal normal 400 12px/16px var(--type-base-font-family);\n  --type-details-caption-1-letter-spacing:0.08em;\n  --type-details-caption-2-font:normal normal 300 12px/16px var(--type-base-font-family);\n  --type-details-caption-2-letter-spacing:0.08em;\n  --type-details-overline-font:normal normal 400 12px/20px var(--type-base-font-family);\n  --type-details-overline-letter-spacing:0.16em;\n}\n",""]);const l=a},869:(t,e,r)=>{r.d(e,{Z:()=>l});var n=r(4933),o=r.n(n),i=r(3476),a=r.n(i)()(o());a.push([t.id,".elsie-base-design a{\n  --textColor:var(--color-brand-500);\n  color:var(--textColor);\n  text-decoration:none;\n}\n\n.elsie-base-design a:hover{\n  --textColor:var(--color-brand-700);\n  text-decoration:solid underline var(--textColor);\n  text-underline-offset:6px;\n}\n\n.elsie-base-design a:focus-visible{\n  outline:solid var(--shape-border-width-4) var(--color-neutral-400);\n  border:var(--shape-border-width-1) solid var(--color-neutral-800);\n  border-radius:var(--shape-border-radius-1);\n}\n",""]);const l=a},1857:t=>{var e=function(t){return function(t){return!!t&&"object"==typeof t}(t)&&!function(t){var e=Object.prototype.toString.call(t);return"[object RegExp]"===e||"[object Date]"===e||function(t){return t.$$typeof===r}(t)}(t)};var r="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n(t,e){return!1!==e.clone&&e.isMergeableObject(t)?c((r=t,Array.isArray(r)?[]:{}),t,e):t;var r}function o(t,e,r){return t.concat(e).map((function(t){return n(t,r)}))}function i(t){return Object.keys(t).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter((function(e){return Object.propertyIsEnumerable.call(t,e)})):[]}(t))}function a(t,e){try{return e in t}catch(t){return!1}}function l(t,e,r){var o={};return r.isMergeableObject(t)&&i(t).forEach((function(e){o[e]=n(t[e],r)})),i(e).forEach((function(i){(function(t,e){return a(t,e)&&!(Object.hasOwnProperty.call(t,e)&&Object.propertyIsEnumerable.call(t,e))})(t,i)||(a(t,i)&&r.isMergeableObject(e[i])?o[i]=function(t,e){if(!e.customMerge)return c;var r=e.customMerge(t);return"function"==typeof r?r:c}(i,r)(t[i],e[i],r):o[i]=n(e[i],r))})),o}function c(t,r,i){(i=i||{}).arrayMerge=i.arrayMerge||o,i.isMergeableObject=i.isMergeableObject||e,i.cloneUnlessOtherwiseSpecified=n;var a=Array.isArray(r);return a===Array.isArray(t)?a?i.arrayMerge(t,r,i):l(t,r,i):n(r,i)}c.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce((function(t,r){return c(t,r,e)}),{})};var s=c;t.exports=s}};