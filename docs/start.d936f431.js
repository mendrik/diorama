parcelRequire=function(e,r,n,t){function i(n,t){function o(e){return i(o.resolve(e))}function c(r){return e[n][1][r]||r}if(!r[n]){if(!e[n]){var l="function"==typeof parcelRequire&&parcelRequire;if(!t&&l)return l(n,!0);if(u)return u(n,!0);if(f&&"string"==typeof n)return f(n);var p=new Error("Cannot find module '"+n+"'");throw p.code="MODULE_NOT_FOUND",p}o.resolve=c;var a=r[n]=new i.Module(n);e[n][0].call(a.exports,o,a,a.exports,this)}return r[n].exports}function o(e){this.id=e,this.bundle=i,this.exports={}}var u="function"==typeof parcelRequire&&parcelRequire,f="function"==typeof require&&require;i.isParcelRequire=!0,i.Module=o,i.modules=e,i.cache=r,i.parent=u;for(var c=0;c<n.length;c++)i(n[c]);if(n.length){var l=i(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):t&&(this[t]=l)}return i}({5:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.images=["samples/1.jpg","samples/2.jpg","samples/3.jpg","samples/4.jpg","samples/5.jpg","samples/6.jpg","samples/7.jpg","samples/8.jpg","samples/9.jpg","samples/10.jpg","samples/11.jpg","samples/12.jpg","samples/13.jpg"];
},{}],4:[function(require,module,exports) {
"use strict";function e(){}Object.defineProperty(exports,"__esModule",{value:!0});var t={},n=[],o=[];function r(r,i){var l,a,p,s,c=o;for(s=arguments.length;s-- >2;)n.push(arguments[s]);for(i&&null!=i.children&&(n.length||n.push(i.children),delete i.children);n.length;)if((a=n.pop())&&void 0!==a.pop)for(s=a.length;s--;)n.push(a[s]);else"boolean"==typeof a&&(a=null),(p="function"!=typeof r)&&(null==a?a="":"number"==typeof a?a=String(a):"string"!=typeof a&&(p=!1)),p&&l?c[c.length-1]+=a:c===o?c=[a]:c.push(a),l=p;var u=new e;return u.nodeName=r,u.children=c,u.attributes=null==i?void 0:i,u.key=null==i?void 0:i.key,void 0!==t.vnode&&t.vnode(u),u}function i(e,t){for(var n in t)e[n]=t[n];return e}var l="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;function a(e,t){return r(e.nodeName,i(i({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}var p=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,s=[];function c(e){!e._dirty&&(e._dirty=!0)&&1==s.push(e)&&(t.debounceRendering||l)(u)}function u(){var e,t=s;for(s=[];e=t.pop();)e._dirty&&A(e)}function f(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&d(e,t.nodeName):n||e._componentConstructor===t.nodeName}function d(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function _(e){var t=i({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function v(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.normalizedNodeName=e,n}function m(e){var t=e.parentNode;t&&t.removeChild(e)}function h(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),o&&o(e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"==typeof o[i]&&!1===p.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var l=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,y,l):e.removeEventListener(t,y,l),(e._listeners||(e._listeners={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e)b(e,t,null==o?"":o),null!=o&&!1!==o||e.removeAttribute(t);else{var a=r&&t!==(t=t.replace(/^xlink:?/,""));null==o||!1===o?a?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(a?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function b(e,t,n){try{e[t]=n}catch(e){}}function y(e){return this._listeners[e.type](t.event&&t.event(e)||e)}var x=[],C=0,g=!1,N=!1;function k(){for(var e;e=x.pop();)t.afterMount&&t.afterMount(e),e.componentDidMount&&e.componentDidMount()}function w(e,t,n,o,r,i){C++||(g=null!=r&&void 0!==r.ownerSVGElement,N=null!=e&&!("__preactattr_"in e));var l=S(e,t,n,o,i);return r&&l.parentNode!==r&&r.appendChild(l),--C||(N=!1,i||k()),l}function S(e,t,n,o,r){var i=e,l=g;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),L(e,!0))),i.__preactattr_=!0,i;var a=t.nodeName;if("function"==typeof a)return D(e,t,n,o);if(g="svg"===a||"foreignObject"!==a&&g,a=String(a),(!e||!d(e,a))&&(i=v(a,g),e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),L(e,!0)}var p=i.firstChild,s=i.__preactattr_,c=t.children;if(null==s){s=i.__preactattr_={};for(var u=i.attributes,f=u.length;f--;)s[u[f].name]=u[f].value}return!N&&c&&1===c.length&&"string"==typeof c[0]&&null!=p&&void 0!==p.splitText&&null==p.nextSibling?p.nodeValue!=c[0]&&(p.nodeValue=c[0]):(c&&c.length||null!=p)&&U(i,c,n,o,N||null!=s.dangerouslySetInnerHTML),P(i,t.attributes,s),g=l,i}function U(e,t,n,o,r){var i,l,a,p,s,c=e.childNodes,u=[],d={},_=0,v=0,h=c.length,b=0,y=t?t.length:0;if(0!==h)for(var x=0;x<h;x++){var C=c[x],g=C.__preactattr_;null!=(N=y&&g?C._component?C._component.__key:g.key:null)?(_++,d[N]=C):(g||(void 0!==C.splitText?!r||C.nodeValue.trim():r))&&(u[b++]=C)}if(0!==y)for(x=0;x<y;x++){var N;if(s=null,null!=(N=(p=t[x]).key))_&&void 0!==d[N]&&(s=d[N],d[N]=void 0,_--);else if(!s&&v<b)for(i=v;i<b;i++)if(void 0!==u[i]&&f(l=u[i],p,r)){s=l,u[i]=void 0,i===b-1&&b--,i===v&&v++;break}s=S(s,p,n,o),a=c[x],s&&s!==e&&s!==a&&(null==a?e.appendChild(s):s===a.nextSibling?m(a):e.insertBefore(s,a))}if(_)for(var x in d)void 0!==d[x]&&L(d[x],!1);for(;v<=b;)void 0!==(s=u[b--])&&L(s,!1)}function L(e,t){var n=e._component;n?H(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||m(e),M(e))}function M(e){for(e=e.lastChild;e;){var t=e.previousSibling;L(e,!0),e=t}}function P(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||h(e,o,n[o],n[o]=void 0,g);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||h(e,o,n[o],n[o]=t[o],g)}var T={};function B(e){var t=e.constructor.name;(T[t]||(T[t]=[])).push(e)}function E(e,t,n){var o,r=T[e.name];if(e.prototype&&e.prototype.render?(o=new e(t,n),j.call(o,t,n)):((o=new j(t,n)).constructor=e,o.render=W),r)for(var i=r.length;i--;)if(r[i].constructor===e){o.nextBase=r[i].nextBase,r.splice(i,1);break}return o}function W(e,t,n){return this.constructor(e,n)}function V(e,n,o,r,i){e._disable||(e._disable=!0,(e.__ref=n.ref)&&delete n.ref,(e.__key=n.key)&&delete n.key,!e.base||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(n,r),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=n,e._disable=!1,0!==o&&(1!==o&&!1===t.syncComponentUpdates&&e.base?c(e):A(e,1,i)),e.__ref&&e.__ref(e))}function A(e,n,o,r){if(!e._disable){var l,a,p,s=e.props,c=e.state,u=e.context,f=e.prevProps||s,d=e.prevState||c,v=e.prevContext||u,m=e.base,h=e.nextBase,b=m||h,y=e._component,g=!1;if(m&&(e.props=f,e.state=d,e.context=v,2!==n&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(s,c,u)?g=!0:e.componentWillUpdate&&e.componentWillUpdate(s,c,u),e.props=s,e.state=c,e.context=u),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!g){l=e.render(s,c,u),e.getChildContext&&(u=i(i({},u),e.getChildContext()));var N,S,U=l&&l.nodeName;if("function"==typeof U){var M=_(l);(a=y)&&a.constructor===U&&M.key==a.__key?V(a,M,1,u,!1):(N=a,e._component=a=E(U,M,u),a.nextBase=a.nextBase||h,a._parentComponent=e,V(a,M,0,u,!1),A(a,1,o,!0)),S=a.base}else p=b,(N=y)&&(p=e._component=null),(b||1===n)&&(p&&(p._component=null),S=w(p,l,u,o||!m,b&&b.parentNode,!0));if(b&&S!==b&&a!==y){var P=b.parentNode;P&&S!==P&&(P.replaceChild(S,b),N||(b._component=null,L(b,!1)))}if(N&&H(N),e.base=S,S&&!r){for(var T=e,B=e;B=B._parentComponent;)(T=B).base=S;S._component=T,S._componentConstructor=T.constructor}}if(!m||o?x.unshift(e):g||(e.componentDidUpdate&&e.componentDidUpdate(f,d,v),t.afterUpdate&&t.afterUpdate(e)),null!=e._renderCallbacks)for(;e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);C||r||k()}}function D(e,t,n,o){for(var r=e&&e._component,i=r,l=e,a=r&&e._componentConstructor===t.nodeName,p=a,s=_(t);r&&!p&&(r=r._parentComponent);)p=r.constructor===t.nodeName;return r&&p&&(!o||r._component)?(V(r,s,3,n,o),e=r.base):(i&&!a&&(H(i),e=l=null),r=E(t.nodeName,s,n),e&&!r.nextBase&&(r.nextBase=e,l=null),V(r,s,1,n,o),e=r.base,l&&e!==l&&(l._component=null,L(l,!1))),e}function H(e){t.beforeUnmount&&t.beforeUnmount(e);var n=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var o=e._component;o?H(o):n&&(n.__preactattr_&&n.__preactattr_.ref&&n.__preactattr_.ref(null),e.nextBase=n,m(n),B(e),M(n)),e.__ref&&e.__ref(null)}function j(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}function z(e,t,n){return w(n,e,{},!1,t,!1)}i(j.prototype,{setState:function(e,t){var n=this.state;this.prevState||(this.prevState=i({},n)),i(n,"function"==typeof e?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),c(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),A(this,2)},render:function(){}});var R={h:r,createElement:r,cloneElement:a,Component:j,render:z,rerender:u,options:t};exports.default=R,exports.h=r,exports.createElement=r,exports.cloneElement=a,exports.Component=j,exports.render=z,exports.rerender=u,exports.options=t;
},{}],7:[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}();Object.defineProperty(exports,"__esModule",{value:!0});var e=require("preact"),r=function(r){function o(){return null!==r&&r.apply(this,arguments)||this}return t(o,r),o.prototype.render=function(t){var r=t.src,o=(t.aspectRatio,{top:t.top,left:t.left,width:t.width,height:t.height,backgroundImage:"url(./"+r+")"});return e.h("li",{style:o})},o}(e.Component);exports.Tile=r;
},{"preact":4}],8:[function(require,module,exports) {
!function(){"use strict";var e="undefined"!=typeof window&&void 0!==window.document?window.document:{},n="undefined"!=typeof module&&module.exports,l="undefined"!=typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,r=function(){for(var n,l=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],r=0,t=l.length,u={};r<t;r++)if((n=l[r])&&n[1]in e){for(r=0;r<n.length;r++)u[l[0][r]]=n[r];return u}return!1}(),t={change:r.fullscreenchange,error:r.fullscreenerror},u={request:function(n){var t=r.requestFullscreen;n=n||e.documentElement,/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)?n[t]():n[t](l&&Element.ALLOW_KEYBOARD_INPUT)},exit:function(){e[r.exitFullscreen]()},toggle:function(e){this.isFullscreen?this.exit():this.request(e)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(n,l){var r=t[n];r&&e.addEventListener(r,l,!1)},off:function(n,l){var r=t[n];r&&e.removeEventListener(r,l,!1)},raw:r};r?(Object.defineProperties(u,{isFullscreen:{get:function(){return Boolean(e[r.fullscreenElement])}},element:{enumerable:!0,get:function(){return e[r.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return Boolean(e[r.fullscreenEnabled])}}}),n?module.exports=u:window.screenfull=u):n?module.exports=!1:window.screenfull=!1}();
},{}],9:[function(require,module,exports) {
"use strict";function t(t){for(var i,e,h=t.length,n=Math.floor,r=Math.random;0!==h;)e=n(r()*h),i=t[h-=1],t[h]=t[e],t[e]=i;return t}function i(t){return t--,t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,t|=t>>16,t|=t>>32,++t}function e(t,i){return t=Math.ceil(t),i=Math.floor(i),Math.floor(Math.random()*(i-t))+t}function h(t,i){for(var e=0;e<t.length;e++)i[e]=t[e]}function n(i,e,n){return h(t(i.slice(e,n)),i)}function r(t){return Array.apply(null,Array(t)).map(function(t){return{x:0,y:0,width:0,height:0,aspectRatio:0,dummy:!0}})}function a(t,i,e,h){for(var n,r,a,o,u=Math.min,d=Math.max,c=e-2;c>=0;c--)if(n=t[o=c<<1],r=t[o+1],a=t[e+c],n.x=a.x,n.y=a.y,i&1<<c?(n.width=a.width,n.height=n.aspectRatio?a.width/n.aspectRatio:0,r.x=a.x,r.y=a.y+n.height,r.width=a.width,r.height=a.height-n.height):(n.width=a.height*n.aspectRatio,n.height=a.height,r.x=a.x+n.width,r.y=a.y,r.width=a.width-n.width,r.height=a.height),o<e){var m=n.width+n.height,f=r.width+r.height;n.dummy||(h.min=u(h.min,m)),r.dummy||(h.min=u(h.min,f)),h.max=d(h.max,m,f)}}function o(t,o,u,d){var c,m,f,x,g,w,y,p,s,l,v,M,R,A=999999999,S=t/o,T=i(u.length),D=r((T<<1)-1),O={},P=(new Date).getTime()+d,_=A,b=.05,j=u.map(function(t,i){return{x:0,y:0,width:0,height:0,index:i,aspectRatio:t,dummy:!1}});T<=5&&(b=A);h(j,D),x=1<<T;for(var z=function(){if(c=e(0,x),O[c])return"continue";for(O[c]=!0,n(D,0,T),l=0,v=T-1;l<v;l++)y=D[R=l<<1].aspectRatio,p=D[R+1].aspectRatio,0!==y&&0!==p?(s=y+p,c&1<<l&&(s=y*p/s)):s=y||p,D[l+T].aspectRatio=s;if((m=(g=S>s)?S/s-1:1-S/s)<b){(M=D[D.length-1]).width=g?o*s:t,M.height=g?o:t/s,a(D,c,T,w={min:A,max:-A});var i=m+(1-w.min/w.max);if(i<_){_=i;var h=D.slice(0,T).filter(function(t){return!t.dummy});f=h.map(function(t){return{x:t.x,y:t.y,index:t.index,width:t.width,height:t.height}});var r=t/M.width,u=o/M.height;f=f.map(function(t){return{x:t.x*r,y:t.y*u,index:t.index,width:t.width*r,height:t.height*u}})}}};(new Date).getTime()<P;)z();return f}Object.defineProperty(exports,"__esModule",{value:!0}),exports.nextPowerOfTwo=i,exports.arrayReplaceIn=h,exports.shuffleSlice=n,exports.dummyArray=r,exports.calculateSizes=a,exports.searchSolution=o;
},{}],6:[function(require,module,exports) {

},{}],3:[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),e=this&&this.__assign||Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var r in e=arguments[o])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},o=this&&this.__rest||function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&(o[n[r]]=t[n[r]])}return o},n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var r=require("preact"),i=require("./tile"),s=n(require("screenfull")),a=require("./layout");require("./diorama.css");var c=function(n){function c(t){var e=n.call(this,t)||this;return e.resizing=!1,e.crop=function(){e.setState({showCrop:!e.state.showCrop}),e.forceUpdate()},e.recalc=function(){e.calculatePositions()},e.add=function(){e.setState({images:Math.min(e.props.images.length,e.state.images+1)}),e.calculatePositions()},e.remove=function(){e.setState({images:Math.max(5,e.state.images-1)}),e.calculatePositions()},e.state={showCrop:!1,tileProps:[],images:9},e}return t(c,n),c.prototype.componentDidMount=function(){var t=this;this.calculatePositions(),window.addEventListener("resize",function(){return t.calculatePositions()})},c.prototype.calculatePositions=function(){var t=this;if(!this.resizing){this.resizing=!0;var e=this.base.clientWidth,o=this.base.clientHeight,n=this.props.images.slice(0,this.state.images),r=[];do{r=a.searchSolution(e,o,n.map(function(t){return t.aspectRatio}),100)}while(!r);requestAnimationFrame(function(){t.setState({tileProps:r.sort(function(t,e){return t.index-e.index}).map(function(e){return{src:t.props.images[e.index].src,aspectRatio:t.props.images[e.index].aspectRatio,top:e.y,left:e.x,width:e.width,height:e.height}})}),t.resizing=!1,t.forceUpdate()})}},c.prototype.shouldComponentUpdate=function(){return!1},c.prototype.render=function(t,n){var a=this,c=n.tileProps,u=n.showCrop;n.images,o(n,["tileProps","showCrop","images"]);return r.h("div",{className:"diorama "+(u?"crop":"")},r.h("ul",null,c.map(function(t){return r.h(i.Tile,e({},t))})),r.h("nav",null,r.h("button",{class:"calc",onClick:function(){return a.recalc()}},"Recalculate"),r.h("button",{class:"crop-toggle",onClick:function(){return a.crop()}},"Show crop"),r.h("button",{class:"fullscreen",onClick:function(){return s.default.toggle()}},"Fullscreen"),r.h("button",{class:"add-image",onClick:function(){return a.add()}},"Add"),r.h("button",{class:"del-image",onClick:function(){return a.remove()}},"Remove")))},c}(r.Component);exports.Diorama=c;
},{"preact":4,"./tile":7,"screenfull":8,"./layout":9,"./diorama.css":6}],2:[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function u(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,u)}c((r=r.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=r[2&i[0]?"return":i[0]?"throw":"next"])&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[0,o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},n=this;Object.defineProperty(exports,"__esModule",{value:!0});var r=require("./images"),o=require("preact"),i=require("./diorama"),a=function(){return new Promise(function(e){document.addEventListener("DOMContentLoaded",function(){e()})})},u=function(e){return new Promise(function(t){var n=new Image;n.addEventListener("load",function(){t({src:e,aspectRatio:n.width/n.height})}),n.src=e})};e(n,void 0,void 0,function(){var e,n;return t(this,function(t){switch(t.label){case 0:return[4,Promise.all([a].concat(r.images.map(u)))];case 1:return(e=t.sent())[0],n=e.slice(1),o.render(o.h(i.Diorama,{images:n}),document.body),[2]}})});
},{"./images":5,"preact":4,"./diorama":3}]},{},[2], null)
//# sourceMappingURL=/diorama/start.fb88c1cc.map