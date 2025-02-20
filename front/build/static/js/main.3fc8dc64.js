/*! For license information please see main.3fc8dc64.js.LICENSE.txt */
(()=>{var e={175:(e,t)=>{"use strict";const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,r=/^[\u0021-\u003A\u003C-\u007E]*$/,a=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,o=/^[\u0020-\u003A\u003D-\u007E]*$/,i=Object.prototype.toString,l=(()=>{const e=function(){};return e.prototype=Object.create(null),e})();function s(e,t,n){do{const n=e.charCodeAt(t);if(32!==n&&9!==n)return t}while(++t<n);return n}function c(e,t,n){for(;t>n;){const n=e.charCodeAt(--t);if(32!==n&&9!==n)return t+1}return n}function u(e){if(-1===e.indexOf("%"))return e;try{return decodeURIComponent(e)}catch(t){return e}}},730:(e,t,n)=>{"use strict";var r=n(43),a=n(853);function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,l={};function s(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(l[e]=t,e=0;e<t.length;e++)i.add(t[e])}var u=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},h={};function m(e,t,n,r,a,o,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var x=/[\-:]([a-z])/g;function y(e){return e[1].toUpperCase()}function b(e,t,n,r){var a=g.hasOwnProperty(t)?g[t]:null;(null!==a?0!==a.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,a,r)&&(n=null),r||null===a?function(e){return!!d.call(h,e)||!d.call(p,e)&&(f.test(e)?h[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(x,y);g[t]=new m(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(x,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(x,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var v=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),k=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),T=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),O=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var N=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var A=Symbol.iterator;function L(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=A&&e[A]||e["@@iterator"])?e:null}var D,I=Object.assign;function M(e){if(void 0===D)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);D=t&&t[1]||""}return"\n"+D+e}var F=!1;function B(e,t){if(!e||F)return"";F=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&"string"===typeof c.stack){for(var a=c.stack.split("\n"),o=r.stack.split("\n"),i=a.length-1,l=o.length-1;1<=i&&0<=l&&a[i]!==o[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==o[l]){if(1!==i||1!==l)do{if(i--,0>--l||a[i]!==o[l]){var s="\n"+a[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=i&&0<=l);break}}}finally{F=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?M(e):""}function $(e){switch(e.tag){case 5:return M(e.type);case 16:return M("Lazy");case 13:return M("Suspense");case 19:return M("SuspenseList");case 0:case 2:case 15:return e=B(e.type,!1);case 11:return e=B(e.type.render,!1);case 1:return e=B(e.type,!0);default:return""}}function U(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case k:return"Portal";case E:return"Profiler";case j:return"StrictMode";case z:return"Suspense";case P:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case T:return(e.displayName||"Context")+".Consumer";case _:return(e._context.displayName||"Context")+".Provider";case C:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case R:return null!==(t=e.displayName||null)?t:U(e.type)||"Memo";case O:t=e._payload,e=e._init;try{return U(e(t))}catch(n){}}return null}function H(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return U(t);case 8:return t===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function W(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function V(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function K(e){e._valueTracker||(e._valueTracker=function(e){var t=V(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function q(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=V(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function G(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Q(e,t){var n=t.checked;return I({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Y(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=W(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function J(e,t){null!=(t=t.checked)&&b(e,"checked",t,!1)}function X(e,t){J(e,t);var n=W(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,W(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&G(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+W(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(o(91));return I({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ae(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(o(92));if(te(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:W(n)}}function oe(e,t){var n=W(t.value),r=W(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ie(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,ue,de=(ue=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ue(e,t)}))}:ue);function fe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}Object.keys(pe).forEach((function(e){he.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]}))}));var xe=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ye(e,t){if(t){if(xe[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(o(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(o(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(o(62))}}function be(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ve=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ke=null,Se=null,je=null;function Ee(e){if(e=ba(e)){if("function"!==typeof ke)throw Error(o(280));var t=e.stateNode;t&&(t=wa(t),ke(e.stateNode,e.type,t))}}function _e(e){Se?je?je.push(e):je=[e]:Se=e}function Te(){if(Se){var e=Se,t=je;if(je=Se=null,Ee(e),t)for(e=0;e<t.length;e++)Ee(t[e])}}function Ce(e,t){return e(t)}function ze(){}var Pe=!1;function Re(e,t,n){if(Pe)return e(t,n);Pe=!0;try{return Ce(e,t,n)}finally{Pe=!1,(null!==Se||null!==je)&&(ze(),Te())}}function Oe(e,t){var n=e.stateNode;if(null===n)return null;var r=wa(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var Ne=!1;if(u)try{var Ae={};Object.defineProperty(Ae,"passive",{get:function(){Ne=!0}}),window.addEventListener("test",Ae,Ae),window.removeEventListener("test",Ae,Ae)}catch(ue){Ne=!1}function Le(e,t,n,r,a,o,i,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var De=!1,Ie=null,Me=!1,Fe=null,Be={onError:function(e){De=!0,Ie=e}};function $e(e,t,n,r,a,o,i,l,s){De=!1,Ie=null,Le.apply(Be,arguments)}function Ue(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function He(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function We(e){if(Ue(e)!==e)throw Error(o(188))}function Ve(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ue(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var i=a.alternate;if(null===i){if(null!==(r=a.return)){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return We(a),e;if(i===r)return We(a),t;i=i.sibling}throw Error(o(188))}if(n.return!==r.return)n=a,r=i;else{for(var l=!1,s=a.child;s;){if(s===n){l=!0,n=a,r=i;break}if(s===r){l=!0,r=a,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=a;break}if(s===r){l=!0,r=i,n=a;break}s=s.sibling}if(!l)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(e))?Ke(e):null}function Ke(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ke(e);if(null!==t)return t;e=e.sibling}return null}var qe=a.unstable_scheduleCallback,Ge=a.unstable_cancelCallback,Qe=a.unstable_shouldYield,Ye=a.unstable_requestPaint,Je=a.unstable_now,Xe=a.unstable_getCurrentPriorityLevel,Ze=a.unstable_ImmediatePriority,et=a.unstable_UserBlockingPriority,tt=a.unstable_NormalPriority,nt=a.unstable_LowPriority,rt=a.unstable_IdlePriority,at=null,ot=null;var it=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var ct=64,ut=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ft(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,a=e.suspendedLanes,o=e.pingedLanes,i=268435455&n;if(0!==i){var l=i&~a;0!==l?r=dt(l):0!==(o&=i)&&(r=dt(o))}else 0!==(i=n&~a)?r=dt(i):0!==o&&(r=dt(o));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&a)&&((a=r&-r)>=(o=t&-t)||16===a&&0!==(4194240&o)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)a=1<<(n=31-it(t)),r|=e[n],t&=~a;return r}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-it(t)]=n}function yt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-it(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var bt=0;function vt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,kt,St,jt,Et,_t=!1,Tt=[],Ct=null,zt=null,Pt=null,Rt=new Map,Ot=new Map,Nt=[],At="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lt(e,t){switch(e){case"focusin":case"focusout":Ct=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":Rt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ot.delete(t.pointerId)}}function Dt(e,t,n,r,a,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},null!==t&&(null!==(t=ba(t))&&kt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function It(e){var t=ya(e.target);if(null!==t){var n=Ue(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=He(n)))return e.blockedOn=t,void Et(e.priority,(function(){St(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Mt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=ba(n))&&kt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);ve=r,n.target.dispatchEvent(r),ve=null,t.shift()}return!0}function Ft(e,t,n){Mt(e)&&n.delete(t)}function Bt(){_t=!1,null!==Ct&&Mt(Ct)&&(Ct=null),null!==zt&&Mt(zt)&&(zt=null),null!==Pt&&Mt(Pt)&&(Pt=null),Rt.forEach(Ft),Ot.forEach(Ft)}function $t(e,t){e.blockedOn===t&&(e.blockedOn=null,_t||(_t=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Bt)))}function Ut(e){function t(t){return $t(t,e)}if(0<Tt.length){$t(Tt[0],e);for(var n=1;n<Tt.length;n++){var r=Tt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Ct&&$t(Ct,e),null!==zt&&$t(zt,e),null!==Pt&&$t(Pt,e),Rt.forEach(t),Ot.forEach(t),n=0;n<Nt.length;n++)(r=Nt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Nt.length&&null===(n=Nt[0]).blockedOn;)It(n),null===n.blockedOn&&Nt.shift()}var Ht=v.ReactCurrentBatchConfig,Wt=!0;function Vt(e,t,n,r){var a=bt,o=Ht.transition;Ht.transition=null;try{bt=1,qt(e,t,n,r)}finally{bt=a,Ht.transition=o}}function Kt(e,t,n,r){var a=bt,o=Ht.transition;Ht.transition=null;try{bt=4,qt(e,t,n,r)}finally{bt=a,Ht.transition=o}}function qt(e,t,n,r){if(Wt){var a=Qt(e,t,n,r);if(null===a)Wr(e,t,r,Gt,n),Lt(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return Ct=Dt(Ct,e,t,n,r,a),!0;case"dragenter":return zt=Dt(zt,e,t,n,r,a),!0;case"mouseover":return Pt=Dt(Pt,e,t,n,r,a),!0;case"pointerover":var o=a.pointerId;return Rt.set(o,Dt(Rt.get(o)||null,e,t,n,r,a)),!0;case"gotpointercapture":return o=a.pointerId,Ot.set(o,Dt(Ot.get(o)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(Lt(e,r),4&t&&-1<At.indexOf(e)){for(;null!==a;){var o=ba(a);if(null!==o&&wt(o),null===(o=Qt(e,t,n,r))&&Wr(e,t,r,Gt,n),o===a)break;a=o}null!==a&&r.stopPropagation()}else Wr(e,t,r,null,n)}}var Gt=null;function Qt(e,t,n,r){if(Gt=null,null!==(e=ya(e=we(r))))if(null===(t=Ue(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=He(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gt=e,null}function Yt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xe()){case Ze:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Jt=null,Xt=null,Zt=null;function en(){if(Zt)return Zt;var e,t,n=Xt,r=n.length,a="value"in Jt?Jt.value:Jt.textContent,o=a.length;for(e=0;e<r&&n[e]===a[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===a[o-t];t++);return Zt=a.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function an(e){function t(t,n,r,a,o){for(var i in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(a):a[i]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return I(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var on,ln,sn,cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},un=an(cn),dn=I({},cn,{view:0,detail:0}),fn=an(dn),pn=I({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:En,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(on=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=on=0,sn=e),on)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),hn=an(pn),mn=an(I({},pn,{dataTransfer:0})),gn=an(I({},dn,{relatedTarget:0})),xn=an(I({},cn,{animationName:0,elapsedTime:0,pseudoElement:0})),yn=I({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bn=an(yn),vn=an(I({},cn,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Sn[e])&&!!t[e]}function En(){return jn}var _n=I({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?kn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:En,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Tn=an(_n),Cn=an(I({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),zn=an(I({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:En})),Pn=an(I({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Rn=I({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),On=an(Rn),Nn=[9,13,27,32],An=u&&"CompositionEvent"in window,Ln=null;u&&"documentMode"in document&&(Ln=document.documentMode);var Dn=u&&"TextEvent"in window&&!Ln,In=u&&(!An||Ln&&8<Ln&&11>=Ln),Mn=String.fromCharCode(32),Fn=!1;function Bn(e,t){switch(e){case"keyup":return-1!==Nn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $n(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Un=!1;var Hn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Hn[e.type]:"textarea"===t}function Vn(e,t,n,r){_e(r),0<(t=Kr(t,"onChange")).length&&(n=new un("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Kn=null,qn=null;function Gn(e){Mr(e,0)}function Qn(e){if(q(va(e)))return e}function Yn(e,t){if("change"===e)return t}var Jn=!1;if(u){var Xn;if(u){var Zn="oninput"in document;if(!Zn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Zn="function"===typeof er.oninput}Xn=Zn}else Xn=!1;Jn=Xn&&(!document.documentMode||9<document.documentMode)}function tr(){Kn&&(Kn.detachEvent("onpropertychange",nr),qn=Kn=null)}function nr(e){if("value"===e.propertyName&&Qn(qn)){var t=[];Vn(t,qn,e,we(e)),Re(Gn,t)}}function rr(e,t,n){"focusin"===e?(tr(),qn=n,(Kn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ar(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Qn(qn)}function or(e,t){if("click"===e)return Qn(t)}function ir(e,t){if("input"===e||"change"===e)return Qn(t)}var lr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sr(e,t){if(lr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!d.call(t,a)||!lr(e[a],t[a]))return!1}return!0}function cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ur(e,t){var n,r=cr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cr(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function fr(){for(var e=window,t=G();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=G((e=t.contentWindow).document)}return t}function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=fr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&pr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var a=n.textContent.length,o=Math.min(r.start,a);r=void 0===r.end?o:Math.min(r.end,a),!e.extend&&o>r&&(a=r,r=o,o=a),a=ur(n,o);var i=ur(n,r);a&&i&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&((t=t.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=u&&"documentMode"in document&&11>=document.documentMode,gr=null,xr=null,yr=null,br=!1;function vr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;br||null==gr||gr!==G(r)||("selectionStart"in(r=gr)&&pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},yr&&sr(yr,r)||(yr=r,0<(r=Kr(xr,"onSelect")).length&&(t=new un("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},Sr={},jr={};function Er(e){if(Sr[e])return Sr[e];if(!kr[e])return e;var t,n=kr[e];for(t in n)if(n.hasOwnProperty(t)&&t in jr)return Sr[e]=n[t];return e}u&&(jr=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);var _r=Er("animationend"),Tr=Er("animationiteration"),Cr=Er("animationstart"),zr=Er("transitionend"),Pr=new Map,Rr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(e,t){Pr.set(e,t),s(t,[e])}for(var Nr=0;Nr<Rr.length;Nr++){var Ar=Rr[Nr];Or(Ar.toLowerCase(),"on"+(Ar[0].toUpperCase()+Ar.slice(1)))}Or(_r,"onAnimationEnd"),Or(Tr,"onAnimationIteration"),Or(Cr,"onAnimationStart"),Or("dblclick","onDoubleClick"),Or("focusin","onFocus"),Or("focusout","onBlur"),Or(zr,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));function Ir(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,a,i,l,s,c){if($e.apply(this,arguments),De){if(!De)throw Error(o(198));var u=Ie;De=!1,Ie=null,Me||(Me=!0,Fe=u)}}(r,t,void 0,e),e.currentTarget=null}function Mr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==o&&a.isPropagationStopped())break e;Ir(a,l,c),o=s}else for(i=0;i<r.length;i++){if(s=(l=r[i]).instance,c=l.currentTarget,l=l.listener,s!==o&&a.isPropagationStopped())break e;Ir(a,l,c),o=s}}}if(Me)throw e=Fe,Me=!1,Fe=null,e}function Fr(e,t){var n=t[ma];void 0===n&&(n=t[ma]=new Set);var r=e+"__bubble";n.has(r)||(Hr(t,e,2,!1),n.add(r))}function Br(e,t,n){var r=0;t&&(r|=4),Hr(n,e,r,t)}var $r="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[$r]){e[$r]=!0,i.forEach((function(t){"selectionchange"!==t&&(Dr.has(t)||Br(t,!1,e),Br(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[$r]||(t[$r]=!0,Br("selectionchange",!1,t))}}function Hr(e,t,n,r){switch(Yt(t)){case 1:var a=Vt;break;case 4:a=Kt;break;default:a=qt}n=a.bind(null,t,n,e),a=void 0,!Ne||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Wr(e,t,n,r,a){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var i=r.tag;if(3===i||4===i){var l=r.stateNode.containerInfo;if(l===a||8===l.nodeType&&l.parentNode===a)break;if(4===i)for(i=r.return;null!==i;){var s=i.tag;if((3===s||4===s)&&((s=i.stateNode.containerInfo)===a||8===s.nodeType&&s.parentNode===a))return;i=i.return}for(;null!==l;){if(null===(i=ya(l)))return;if(5===(s=i.tag)||6===s){r=o=i;continue e}l=l.parentNode}}r=r.return}Re((function(){var r=o,a=we(n),i=[];e:{var l=Pr.get(e);if(void 0!==l){var s=un,c=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=Tn;break;case"focusin":c="focus",s=gn;break;case"focusout":c="blur",s=gn;break;case"beforeblur":case"afterblur":s=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=zn;break;case _r:case Tr:case Cr:s=xn;break;case zr:s=Pn;break;case"scroll":s=fn;break;case"wheel":s=On;break;case"copy":case"cut":case"paste":s=bn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=Cn}var u=0!==(4&t),d=!u&&"scroll"===e,f=u?null!==l?l+"Capture":null:l;u=[];for(var p,h=r;null!==h;){var m=(p=h).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==f&&(null!=(m=Oe(h,f))&&u.push(Vr(h,m,p)))),d)break;h=h.return}0<u.length&&(l=new s(l,c,null,n,a),i.push({event:l,listeners:u}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===ve||!(c=n.relatedTarget||n.fromElement)||!ya(c)&&!c[ha])&&(s||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(c=(c=n.relatedTarget||n.toElement)?ya(c):null)&&(c!==(d=Ue(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(s=null,c=r),s!==c)){if(u=hn,m="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(u=Cn,m="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==s?l:va(s),p=null==c?l:va(c),(l=new u(m,h+"leave",s,n,a)).target=d,l.relatedTarget=p,m=null,ya(a)===r&&((u=new u(f,h+"enter",c,n,a)).target=p,u.relatedTarget=d,m=u),d=m,s&&c)e:{for(f=c,h=0,p=u=s;p;p=qr(p))h++;for(p=0,m=f;m;m=qr(m))p++;for(;0<h-p;)u=qr(u),h--;for(;0<p-h;)f=qr(f),p--;for(;h--;){if(u===f||null!==f&&u===f.alternate)break e;u=qr(u),f=qr(f)}u=null}else u=null;null!==s&&Gr(i,l,s,u,!1),null!==c&&null!==d&&Gr(i,d,c,u,!0)}if("select"===(s=(l=r?va(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g=Yn;else if(Wn(l))if(Jn)g=ir;else{g=ar;var x=rr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(g=or);switch(g&&(g=g(e,r))?Vn(i,g,n,a):(x&&x(e,l,r),"focusout"===e&&(x=l._wrapperState)&&x.controlled&&"number"===l.type&&ee(l,"number",l.value)),x=r?va(r):window,e){case"focusin":(Wn(x)||"true"===x.contentEditable)&&(gr=x,xr=r,yr=null);break;case"focusout":yr=xr=gr=null;break;case"mousedown":br=!0;break;case"contextmenu":case"mouseup":case"dragend":br=!1,vr(i,n,a);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":vr(i,n,a)}var y;if(An)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Un?Bn(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(In&&"ko"!==n.locale&&(Un||"onCompositionStart"!==b?"onCompositionEnd"===b&&Un&&(y=en()):(Xt="value"in(Jt=a)?Jt.value:Jt.textContent,Un=!0)),0<(x=Kr(r,b)).length&&(b=new vn(b,e,null,n,a),i.push({event:b,listeners:x}),y?b.data=y:null!==(y=$n(n))&&(b.data=y))),(y=Dn?function(e,t){switch(e){case"compositionend":return $n(t);case"keypress":return 32!==t.which?null:(Fn=!0,Mn);case"textInput":return(e=t.data)===Mn&&Fn?null:e;default:return null}}(e,n):function(e,t){if(Un)return"compositionend"===e||!An&&Bn(e,t)?(e=en(),Zt=Xt=Jt=null,Un=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return In&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Kr(r,"onBeforeInput")).length&&(a=new vn("onBeforeInput","beforeinput",null,n,a),i.push({event:a,listeners:r}),a.data=y))}Mr(i,t)}))}function Vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Kr(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,o=a.stateNode;5===a.tag&&null!==o&&(a=o,null!=(o=Oe(e,n))&&r.unshift(Vr(e,o,a)),null!=(o=Oe(e,t))&&r.push(Vr(e,o,a))),e=e.return}return r}function qr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Gr(e,t,n,r,a){for(var o=t._reactName,i=[];null!==n&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==c&&(l=c,a?null!=(s=Oe(n,o))&&i.unshift(Vr(n,s,l)):a||null!=(s=Oe(n,o))&&i.push(Vr(n,s,l))),n=n.return}0!==i.length&&e.push({event:t,listeners:i})}var Qr=/\r\n?/g,Yr=/\u0000|\uFFFD/g;function Jr(e){return("string"===typeof e?e:""+e).replace(Qr,"\n").replace(Yr,"")}function Xr(e,t,n){if(t=Jr(t),Jr(e)!==t&&n)throw Error(o(425))}function Zr(){}var ea=null,ta=null;function na(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ra="function"===typeof setTimeout?setTimeout:void 0,aa="function"===typeof clearTimeout?clearTimeout:void 0,oa="function"===typeof Promise?Promise:void 0,ia="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof oa?function(e){return oa.resolve(null).then(e).catch(la)}:ra;function la(e){setTimeout((function(){throw e}))}function sa(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0===r)return e.removeChild(a),void Ut(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=a}while(n);Ut(t)}function ca(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ua(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var da=Math.random().toString(36).slice(2),fa="__reactFiber$"+da,pa="__reactProps$"+da,ha="__reactContainer$"+da,ma="__reactEvents$"+da,ga="__reactListeners$"+da,xa="__reactHandles$"+da;function ya(e){var t=e[fa];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ha]||n[fa]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ua(e);null!==e;){if(n=e[fa])return n;e=ua(e)}return t}n=(e=n).parentNode}return null}function ba(e){return!(e=e[fa]||e[ha])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function va(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(o(33))}function wa(e){return e[pa]||null}var ka=[],Sa=-1;function ja(e){return{current:e}}function Ea(e){0>Sa||(e.current=ka[Sa],ka[Sa]=null,Sa--)}function _a(e,t){Sa++,ka[Sa]=e.current,e.current=t}var Ta={},Ca=ja(Ta),za=ja(!1),Pa=Ta;function Ra(e,t){var n=e.type.contextTypes;if(!n)return Ta;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a,o={};for(a in n)o[a]=t[a];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Oa(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Na(){Ea(za),Ea(Ca)}function Aa(e,t,n){if(Ca.current!==Ta)throw Error(o(168));_a(Ca,t),_a(za,n)}function La(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var a in r=r.getChildContext())if(!(a in t))throw Error(o(108,H(e)||"Unknown",a));return I({},n,r)}function Da(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ta,Pa=Ca.current,_a(Ca,e),_a(za,za.current),!0}function Ia(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=La(e,t,Pa),r.__reactInternalMemoizedMergedChildContext=e,Ea(za),Ea(Ca),_a(Ca,e)):Ea(za),_a(za,n)}var Ma=null,Fa=!1,Ba=!1;function $a(e){null===Ma?Ma=[e]:Ma.push(e)}function Ua(){if(!Ba&&null!==Ma){Ba=!0;var e=0,t=bt;try{var n=Ma;for(bt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Ma=null,Fa=!1}catch(a){throw null!==Ma&&(Ma=Ma.slice(e+1)),qe(Ze,Ua),a}finally{bt=t,Ba=!1}}return null}var Ha=[],Wa=0,Va=null,Ka=0,qa=[],Ga=0,Qa=null,Ya=1,Ja="";function Xa(e,t){Ha[Wa++]=Ka,Ha[Wa++]=Va,Va=e,Ka=t}function Za(e,t,n){qa[Ga++]=Ya,qa[Ga++]=Ja,qa[Ga++]=Qa,Qa=e;var r=Ya;e=Ja;var a=32-it(r)-1;r&=~(1<<a),n+=1;var o=32-it(t)+a;if(30<o){var i=a-a%5;o=(r&(1<<i)-1).toString(32),r>>=i,a-=i,Ya=1<<32-it(t)+a|n<<a|r,Ja=o+e}else Ya=1<<o|n<<a|r,Ja=e}function eo(e){null!==e.return&&(Xa(e,1),Za(e,1,0))}function to(e){for(;e===Va;)Va=Ha[--Wa],Ha[Wa]=null,Ka=Ha[--Wa],Ha[Wa]=null;for(;e===Qa;)Qa=qa[--Ga],qa[Ga]=null,Ja=qa[--Ga],qa[Ga]=null,Ya=qa[--Ga],qa[Ga]=null}var no=null,ro=null,ao=!1,oo=null;function io(e,t){var n=Rc(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function lo(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,no=e,ro=ca(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,no=e,ro=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Qa?{id:Ya,overflow:Ja}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Rc(18,null,null,0)).stateNode=t,n.return=e,e.child=n,no=e,ro=null,!0);default:return!1}}function so(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function co(e){if(ao){var t=ro;if(t){var n=t;if(!lo(e,t)){if(so(e))throw Error(o(418));t=ca(n.nextSibling);var r=no;t&&lo(e,t)?io(r,n):(e.flags=-4097&e.flags|2,ao=!1,no=e)}}else{if(so(e))throw Error(o(418));e.flags=-4097&e.flags|2,ao=!1,no=e}}}function uo(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;no=e}function fo(e){if(e!==no)return!1;if(!ao)return uo(e),ao=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!na(e.type,e.memoizedProps)),t&&(t=ro)){if(so(e))throw po(),Error(o(418));for(;t;)io(e,t),t=ca(t.nextSibling)}if(uo(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ro=ca(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ro=null}}else ro=no?ca(e.stateNode.nextSibling):null;return!0}function po(){for(var e=ro;e;)e=ca(e.nextSibling)}function ho(){ro=no=null,ao=!1}function mo(e){null===oo?oo=[e]:oo.push(e)}var go=v.ReactCurrentBatchConfig;function xo(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var a=r,i=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===i?t.ref:(t=function(e){var t=a.refs;null===e?delete t[i]:t[i]=e},t._stringRef=i,t)}if("string"!==typeof e)throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function yo(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function bo(e){return(0,e._init)(e._payload)}function vo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t){return(e=Nc(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Ic(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function c(e,t,n,r){var o=n.type;return o===S?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===O&&bo(o)===t.type)?((r=a(t,n.props)).ref=xo(e,t,n),r.return=e,r):((r=Ac(n.type,n.key,n.props,null,e.mode,r)).ref=xo(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Mc(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=Lc(n,e.mode,r,o)).return=e,t):((t=a(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Ic(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Ac(t.type,t.key,t.props,null,e.mode,n)).ref=xo(e,null,t),n.return=e,n;case k:return(t=Mc(t,e.mode,n)).return=e,t;case O:return f(e,(0,t._init)(t._payload),n)}if(te(t)||L(t))return(t=Lc(t,e.mode,n,null)).return=e,t;yo(e,t)}return null}function p(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==a?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===a?c(e,t,n,r):null;case k:return n.key===a?u(e,t,n,r):null;case O:return p(e,t,(a=n._init)(n._payload),r)}if(te(n)||L(n))return null!==a?null:d(e,t,n,r,null);yo(e,n)}return null}function h(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case k:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case O:return h(e,t,n,(0,r._init)(r._payload),a)}if(te(r)||L(r))return d(t,e=e.get(n)||null,r,a,null);yo(t,r)}return null}function m(a,o,l,s){for(var c=null,u=null,d=o,m=o=0,g=null;null!==d&&m<l.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var x=p(a,d,l[m],s);if(null===x){null===d&&(d=g);break}e&&d&&null===x.alternate&&t(a,d),o=i(x,o,m),null===u?c=x:u.sibling=x,u=x,d=g}if(m===l.length)return n(a,d),ao&&Xa(a,m),c;if(null===d){for(;m<l.length;m++)null!==(d=f(a,l[m],s))&&(o=i(d,o,m),null===u?c=d:u.sibling=d,u=d);return ao&&Xa(a,m),c}for(d=r(a,d);m<l.length;m++)null!==(g=h(d,a,m,l[m],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),o=i(g,o,m),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach((function(e){return t(a,e)})),ao&&Xa(a,m),c}function g(a,l,s,c){var u=L(s);if("function"!==typeof u)throw Error(o(150));if(null==(s=u.call(s)))throw Error(o(151));for(var d=u=null,m=l,g=l=0,x=null,y=s.next();null!==m&&!y.done;g++,y=s.next()){m.index>g?(x=m,m=null):x=m.sibling;var b=p(a,m,y.value,c);if(null===b){null===m&&(m=x);break}e&&m&&null===b.alternate&&t(a,m),l=i(b,l,g),null===d?u=b:d.sibling=b,d=b,m=x}if(y.done)return n(a,m),ao&&Xa(a,g),u;if(null===m){for(;!y.done;g++,y=s.next())null!==(y=f(a,y.value,c))&&(l=i(y,l,g),null===d?u=y:d.sibling=y,d=y);return ao&&Xa(a,g),u}for(m=r(a,m);!y.done;g++,y=s.next())null!==(y=h(m,a,g,y.value,c))&&(e&&null!==y.alternate&&m.delete(null===y.key?g:y.key),l=i(y,l,g),null===d?u=y:d.sibling=y,d=y);return e&&m.forEach((function(e){return t(a,e)})),ao&&Xa(a,g),u}return function e(r,o,i,s){if("object"===typeof i&&null!==i&&i.type===S&&null===i.key&&(i=i.props.children),"object"===typeof i&&null!==i){switch(i.$$typeof){case w:e:{for(var c=i.key,u=o;null!==u;){if(u.key===c){if((c=i.type)===S){if(7===u.tag){n(r,u.sibling),(o=a(u,i.props.children)).return=r,r=o;break e}}else if(u.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===O&&bo(c)===u.type){n(r,u.sibling),(o=a(u,i.props)).ref=xo(r,u,i),o.return=r,r=o;break e}n(r,u);break}t(r,u),u=u.sibling}i.type===S?((o=Lc(i.props.children,r.mode,s,i.key)).return=r,r=o):((s=Ac(i.type,i.key,i.props,null,r.mode,s)).ref=xo(r,o,i),s.return=r,r=s)}return l(r);case k:e:{for(u=i.key;null!==o;){if(o.key===u){if(4===o.tag&&o.stateNode.containerInfo===i.containerInfo&&o.stateNode.implementation===i.implementation){n(r,o.sibling),(o=a(o,i.children||[])).return=r,r=o;break e}n(r,o);break}t(r,o),o=o.sibling}(o=Mc(i,r.mode,s)).return=r,r=o}return l(r);case O:return e(r,o,(u=i._init)(i._payload),s)}if(te(i))return m(r,o,i,s);if(L(i))return g(r,o,i,s);yo(r,i)}return"string"===typeof i&&""!==i||"number"===typeof i?(i=""+i,null!==o&&6===o.tag?(n(r,o.sibling),(o=a(o,i)).return=r,r=o):(n(r,o),(o=Ic(i,r.mode,s)).return=r,r=o),l(r)):n(r,o)}}var wo=vo(!0),ko=vo(!1),So=ja(null),jo=null,Eo=null,_o=null;function To(){_o=Eo=jo=null}function Co(e){var t=So.current;Ea(So),e._currentValue=t}function zo(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Po(e,t){jo=e,_o=Eo=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(bl=!0),e.firstContext=null)}function Ro(e){var t=e._currentValue;if(_o!==e)if(e={context:e,memoizedValue:t,next:null},null===Eo){if(null===jo)throw Error(o(308));Eo=e,jo.dependencies={lanes:0,firstContext:e}}else Eo=Eo.next=e;return t}var Oo=null;function No(e){null===Oo?Oo=[e]:Oo.push(e)}function Ao(e,t,n,r){var a=t.interleaved;return null===a?(n.next=n,No(t)):(n.next=a.next,a.next=n),t.interleaved=n,Lo(e,r)}function Lo(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Do=!1;function Io(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Fo(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bo(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Cs)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Lo(e,n)}return null===(a=r.interleaved)?(t.next=t,No(r)):(t.next=a.next,a.next=t),r.interleaved=t,Lo(e,n)}function $o(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}function Uo(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?a=o=i:o=o.next=i,n=n.next}while(null!==n);null===o?a=o=t:o=o.next=t}else a=o=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ho(e,t,n,r){var a=e.updateQueue;Do=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var s=l,c=s.next;s.next=null,null===i?o=c:i.next=c,i=s;var u=e.alternate;null!==u&&((l=(u=u.updateQueue).lastBaseUpdate)!==i&&(null===l?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(null!==o){var d=a.baseState;for(i=0,u=c=s=null,l=o;;){var f=l.lane,p=l.eventTime;if((r&f)===f){null!==u&&(u=u.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,m=l;switch(f=t,p=n,m.tag){case 1:if("function"===typeof(h=m.payload)){d=h.call(p,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(f="function"===typeof(h=m.payload)?h.call(p,d,f):h)||void 0===f)break e;d=I({},d,f);break e;case 2:Do=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(f=a.effects)?a.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===u?(c=u=p,s=d):u=u.next=p,i|=f;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(f=l).next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}if(null===u&&(s=d),a.baseState=s,a.firstBaseUpdate=c,a.lastBaseUpdate=u,null!==(t=a.shared.interleaved)){a=t;do{i|=a.lane,a=a.next}while(a!==t)}else null===o&&(a.shared.lanes=0);Ds|=i,e.lanes=i,e.memoizedState=d}}function Wo(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(null!==a){if(r.callback=null,r=n,"function"!==typeof a)throw Error(o(191,a));a.call(r)}}}var Vo={},Ko=ja(Vo),qo=ja(Vo),Go=ja(Vo);function Qo(e){if(e===Vo)throw Error(o(174));return e}function Yo(e,t){switch(_a(Go,t),_a(qo,e),_a(Ko,Vo),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ea(Ko),_a(Ko,t)}function Jo(){Ea(Ko),Ea(qo),Ea(Go)}function Xo(e){Qo(Go.current);var t=Qo(Ko.current),n=se(t,e.type);t!==n&&(_a(qo,e),_a(Ko,n))}function Zo(e){qo.current===e&&(Ea(Ko),Ea(qo))}var ei=ja(0);function ti(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ni=[];function ri(){for(var e=0;e<ni.length;e++)ni[e]._workInProgressVersionPrimary=null;ni.length=0}var ai=v.ReactCurrentDispatcher,oi=v.ReactCurrentBatchConfig,ii=0,li=null,si=null,ci=null,ui=!1,di=!1,fi=0,pi=0;function hi(){throw Error(o(321))}function mi(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function gi(e,t,n,r,a,i){if(ii=i,li=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ai.current=null===e||null===e.memoizedState?Zi:el,e=n(r,a),di){i=0;do{if(di=!1,fi=0,25<=i)throw Error(o(301));i+=1,ci=si=null,t.updateQueue=null,ai.current=tl,e=n(r,a)}while(di)}if(ai.current=Xi,t=null!==si&&null!==si.next,ii=0,ci=si=li=null,ui=!1,t)throw Error(o(300));return e}function xi(){var e=0!==fi;return fi=0,e}function yi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ci?li.memoizedState=ci=e:ci=ci.next=e,ci}function bi(){if(null===si){var e=li.alternate;e=null!==e?e.memoizedState:null}else e=si.next;var t=null===ci?li.memoizedState:ci.next;if(null!==t)ci=t,si=e;else{if(null===e)throw Error(o(310));e={memoizedState:(si=e).memoizedState,baseState:si.baseState,baseQueue:si.baseQueue,queue:si.queue,next:null},null===ci?li.memoizedState=ci=e:ci=ci.next=e}return ci}function vi(e,t){return"function"===typeof t?t(e):t}function wi(e){var t=bi(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=si,a=r.baseQueue,i=n.pending;if(null!==i){if(null!==a){var l=a.next;a.next=i.next,i.next=l}r.baseQueue=a=i,n.pending=null}if(null!==a){i=a.next,r=r.baseState;var s=l=null,c=null,u=i;do{var d=u.lane;if((ii&d)===d)null!==c&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===c?(s=c=f,l=r):c=c.next=f,li.lanes|=d,Ds|=d}u=u.next}while(null!==u&&u!==i);null===c?l=r:c.next=s,lr(r,t.memoizedState)||(bl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(null!==(e=n.interleaved)){a=e;do{i=a.lane,li.lanes|=i,Ds|=i,a=a.next}while(a!==e)}else null===a&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ki(e){var t=bi(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(null!==a){n.pending=null;var l=a=a.next;do{i=e(i,l.action),l=l.next}while(l!==a);lr(i,t.memoizedState)||(bl=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Si(){}function ji(e,t){var n=li,r=bi(),a=t(),i=!lr(r.memoizedState,a);if(i&&(r.memoizedState=a,bl=!0),r=r.queue,Di(Ti.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||null!==ci&&1&ci.memoizedState.tag){if(n.flags|=2048,Ri(9,_i.bind(null,n,r,a,t),void 0,null),null===zs)throw Error(o(349));0!==(30&ii)||Ei(n,t,a)}return a}function Ei(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=li.updateQueue)?(t={lastEffect:null,stores:null},li.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function _i(e,t,n,r){t.value=n,t.getSnapshot=r,Ci(t)&&zi(e)}function Ti(e,t,n){return n((function(){Ci(t)&&zi(e)}))}function Ci(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(r){return!0}}function zi(e){var t=Lo(e,1);null!==t&&nc(t,e,1,-1)}function Pi(e){var t=yi();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vi,lastRenderedState:e},t.queue=e,e=e.dispatch=Gi.bind(null,li,e),[t.memoizedState,e]}function Ri(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=li.updateQueue)?(t={lastEffect:null,stores:null},li.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Oi(){return bi().memoizedState}function Ni(e,t,n,r){var a=yi();li.flags|=e,a.memoizedState=Ri(1|t,n,void 0,void 0===r?null:r)}function Ai(e,t,n,r){var a=bi();r=void 0===r?null:r;var o=void 0;if(null!==si){var i=si.memoizedState;if(o=i.destroy,null!==r&&mi(r,i.deps))return void(a.memoizedState=Ri(t,n,o,r))}li.flags|=e,a.memoizedState=Ri(1|t,n,o,r)}function Li(e,t){return Ni(8390656,8,e,t)}function Di(e,t){return Ai(2048,8,e,t)}function Ii(e,t){return Ai(4,2,e,t)}function Mi(e,t){return Ai(4,4,e,t)}function Fi(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Bi(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ai(4,4,Fi.bind(null,t,e),n)}function $i(){}function Ui(e,t){var n=bi();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Hi(e,t){var n=bi();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Wi(e,t,n){return 0===(21&ii)?(e.baseState&&(e.baseState=!1,bl=!0),e.memoizedState=n):(lr(n,t)||(n=mt(),li.lanes|=n,Ds|=n,e.baseState=!0),t)}function Vi(e,t){var n=bt;bt=0!==n&&4>n?n:4,e(!0);var r=oi.transition;oi.transition={};try{e(!1),t()}finally{bt=n,oi.transition=r}}function Ki(){return bi().memoizedState}function qi(e,t,n){var r=tc(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Qi(e))Yi(t,n);else if(null!==(n=Ao(e,t,n,r))){nc(n,e,r,ec()),Ji(n,t,r)}}function Gi(e,t,n){var r=tc(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qi(e))Yi(t,a);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var i=t.lastRenderedState,l=o(i,n);if(a.hasEagerState=!0,a.eagerState=l,lr(l,i)){var s=t.interleaved;return null===s?(a.next=a,No(t)):(a.next=s.next,s.next=a),void(t.interleaved=a)}}catch(c){}null!==(n=Ao(e,t,a,r))&&(nc(n,e,r,a=ec()),Ji(n,t,r))}}function Qi(e){var t=e.alternate;return e===li||null!==t&&t===li}function Yi(e,t){di=ui=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ji(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}var Xi={readContext:Ro,useCallback:hi,useContext:hi,useEffect:hi,useImperativeHandle:hi,useInsertionEffect:hi,useLayoutEffect:hi,useMemo:hi,useReducer:hi,useRef:hi,useState:hi,useDebugValue:hi,useDeferredValue:hi,useTransition:hi,useMutableSource:hi,useSyncExternalStore:hi,useId:hi,unstable_isNewReconciler:!1},Zi={readContext:Ro,useCallback:function(e,t){return yi().memoizedState=[e,void 0===t?null:t],e},useContext:Ro,useEffect:Li,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ni(4194308,4,Fi.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ni(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ni(4,2,e,t)},useMemo:function(e,t){var n=yi();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yi();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=qi.bind(null,li,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},yi().memoizedState=e},useState:Pi,useDebugValue:$i,useDeferredValue:function(e){return yi().memoizedState=e},useTransition:function(){var e=Pi(!1),t=e[0];return e=Vi.bind(null,e[1]),yi().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=li,a=yi();if(ao){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===zs)throw Error(o(349));0!==(30&ii)||Ei(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Li(Ti.bind(null,r,i,e),[e]),r.flags|=2048,Ri(9,_i.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=yi(),t=zs.identifierPrefix;if(ao){var n=Ja;t=":"+t+"R"+(n=(Ya&~(1<<32-it(Ya)-1)).toString(32)+n),0<(n=fi++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=pi++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:Ro,useCallback:Ui,useContext:Ro,useEffect:Di,useImperativeHandle:Bi,useInsertionEffect:Ii,useLayoutEffect:Mi,useMemo:Hi,useReducer:wi,useRef:Oi,useState:function(){return wi(vi)},useDebugValue:$i,useDeferredValue:function(e){return Wi(bi(),si.memoizedState,e)},useTransition:function(){return[wi(vi)[0],bi().memoizedState]},useMutableSource:Si,useSyncExternalStore:ji,useId:Ki,unstable_isNewReconciler:!1},tl={readContext:Ro,useCallback:Ui,useContext:Ro,useEffect:Di,useImperativeHandle:Bi,useInsertionEffect:Ii,useLayoutEffect:Mi,useMemo:Hi,useReducer:ki,useRef:Oi,useState:function(){return ki(vi)},useDebugValue:$i,useDeferredValue:function(e){var t=bi();return null===si?t.memoizedState=e:Wi(t,si.memoizedState,e)},useTransition:function(){return[ki(vi)[0],bi().memoizedState]},useMutableSource:Si,useSyncExternalStore:ji,useId:Ki,unstable_isNewReconciler:!1};function nl(e,t){if(e&&e.defaultProps){for(var n in t=I({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:I({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var al={isMounted:function(e){return!!(e=e._reactInternals)&&Ue(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ec(),a=tc(e),o=Fo(r,a);o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Bo(e,o,a))&&(nc(t,e,a,r),$o(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ec(),a=tc(e),o=Fo(r,a);o.tag=1,o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Bo(e,o,a))&&(nc(t,e,a,r),$o(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ec(),r=tc(e),a=Fo(n,r);a.tag=2,void 0!==t&&null!==t&&(a.callback=t),null!==(t=Bo(e,a,r))&&(nc(t,e,r,n),$o(t,e,r))}};function ol(e,t,n,r,a,o,i){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,i):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(a,o))}function il(e,t,n){var r=!1,a=Ta,o=t.contextType;return"object"===typeof o&&null!==o?o=Ro(o):(a=Oa(t)?Pa:Ca.current,o=(r=null!==(r=t.contextTypes)&&void 0!==r)?Ra(e,a):Ta),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=al,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function ll(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&al.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Io(e);var o=t.contextType;"object"===typeof o&&null!==o?a.context=Ro(o):(o=Oa(t)?Pa:Ca.current,a.context=Ra(e,o)),a.state=e.memoizedState,"function"===typeof(o=t.getDerivedStateFromProps)&&(rl(e,t,o,n),a.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(t=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&al.enqueueReplaceState(a,a.state,null),Ho(e,n,a,r),a.state=e.memoizedState),"function"===typeof a.componentDidMount&&(e.flags|=4194308)}function cl(e,t){try{var n="",r=t;do{n+=$(r),r=r.return}while(r);var a=n}catch(o){a="\nError generating stack: "+o.message+"\n"+o.stack}return{value:e,source:t,stack:a,digest:null}}function ul(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function dl(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var fl="function"===typeof WeakMap?WeakMap:Map;function pl(e,t,n){(n=Fo(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ws||(Ws=!0,Vs=r),dl(0,t)},n}function hl(e,t,n){(n=Fo(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){dl(0,t)}}var o=e.stateNode;return null!==o&&"function"===typeof o.componentDidCatch&&(n.callback=function(){dl(0,t),"function"!==typeof r&&(null===Ks?Ks=new Set([this]):Ks.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ml(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new fl;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Ec.bind(null,e,t,n),t.then(e,e))}function gl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function xl(e,t,n,r,a){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Fo(-1,1)).tag=2,Bo(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var yl=v.ReactCurrentOwner,bl=!1;function vl(e,t,n,r){t.child=null===e?ko(t,null,n,r):wo(t,e.child,n,r)}function wl(e,t,n,r,a){n=n.render;var o=t.ref;return Po(t,a),r=gi(e,t,n,r,o,a),n=xi(),null===e||bl?(ao&&n&&eo(t),t.flags|=1,vl(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Wl(e,t,a))}function kl(e,t,n,r,a){if(null===e){var o=n.type;return"function"!==typeof o||Oc(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Ac(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Sl(e,t,o,r,a))}if(o=e.child,0===(e.lanes&a)){var i=o.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(i,r)&&e.ref===t.ref)return Wl(e,t,a)}return t.flags|=1,(e=Nc(o,r)).ref=t.ref,e.return=t,t.child=e}function Sl(e,t,n,r,a){if(null!==e){var o=e.memoizedProps;if(sr(o,r)&&e.ref===t.ref){if(bl=!1,t.pendingProps=r=o,0===(e.lanes&a))return t.lanes=e.lanes,Wl(e,t,a);0!==(131072&e.flags)&&(bl=!0)}}return _l(e,t,n,r,a)}function jl(e,t,n){var r=t.pendingProps,a=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_a(Ns,Os),Os|=n;else{if(0===(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_a(Ns,Os),Os|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==o?o.baseLanes:n,_a(Ns,Os),Os|=r}else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,_a(Ns,Os),Os|=r;return vl(e,t,a,n),t.child}function El(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _l(e,t,n,r,a){var o=Oa(n)?Pa:Ca.current;return o=Ra(t,o),Po(t,a),n=gi(e,t,n,r,o,a),r=xi(),null===e||bl?(ao&&r&&eo(t),t.flags|=1,vl(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Wl(e,t,a))}function Tl(e,t,n,r,a){if(Oa(n)){var o=!0;Da(t)}else o=!1;if(Po(t,a),null===t.stateNode)Hl(e,t),il(t,n,r),sl(t,n,r,a),r=!0;else if(null===e){var i=t.stateNode,l=t.memoizedProps;i.props=l;var s=i.context,c=n.contextType;"object"===typeof c&&null!==c?c=Ro(c):c=Ra(t,c=Oa(n)?Pa:Ca.current);var u=n.getDerivedStateFromProps,d="function"===typeof u||"function"===typeof i.getSnapshotBeforeUpdate;d||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==r||s!==c)&&ll(t,i,r,c),Do=!1;var f=t.memoizedState;i.state=f,Ho(t,r,i,a),s=t.memoizedState,l!==r||f!==s||za.current||Do?("function"===typeof u&&(rl(t,n,u,r),s=t.memoizedState),(l=Do||ol(t,n,l,r,f,s,c))?(d||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||("function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"===typeof i.componentDidMount&&(t.flags|=4194308)):("function"===typeof i.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=c,r=l):("function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Mo(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:nl(t.type,l),i.props=c,d=t.pendingProps,f=i.context,"object"===typeof(s=n.contextType)&&null!==s?s=Ro(s):s=Ra(t,s=Oa(n)?Pa:Ca.current);var p=n.getDerivedStateFromProps;(u="function"===typeof p||"function"===typeof i.getSnapshotBeforeUpdate)||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==d||f!==s)&&ll(t,i,r,s),Do=!1,f=t.memoizedState,i.state=f,Ho(t,r,i,a);var h=t.memoizedState;l!==d||f!==h||za.current||Do?("function"===typeof p&&(rl(t,n,p,r),h=t.memoizedState),(c=Do||ol(t,n,c,r,f,h,s)||!1)?(u||"function"!==typeof i.UNSAFE_componentWillUpdate&&"function"!==typeof i.componentWillUpdate||("function"===typeof i.componentWillUpdate&&i.componentWillUpdate(r,h,s),"function"===typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(r,h,s)),"function"===typeof i.componentDidUpdate&&(t.flags|=4),"function"===typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),i.props=r,i.state=h,i.context=s,r=c):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Cl(e,t,n,r,o,a)}function Cl(e,t,n,r,a,o){El(e,t);var i=0!==(128&t.flags);if(!r&&!i)return a&&Ia(t,n,!1),Wl(e,t,o);r=t.stateNode,yl.current=t;var l=i&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&i?(t.child=wo(t,e.child,null,o),t.child=wo(t,null,l,o)):vl(e,t,l,o),t.memoizedState=r.state,a&&Ia(t,n,!0),t.child}function zl(e){var t=e.stateNode;t.pendingContext?Aa(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Aa(0,t.context,!1),Yo(e,t.containerInfo)}function Pl(e,t,n,r,a){return ho(),mo(a),t.flags|=256,vl(e,t,n,r),t.child}var Rl,Ol,Nl,Al,Ll={dehydrated:null,treeContext:null,retryLane:0};function Dl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Il(e,t,n){var r,a=t.pendingProps,i=ei.current,l=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&i)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(i|=1),_a(ei,1&i),null===e)return co(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=a.children,e=a.fallback,l?(a=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&a)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Dc(s,a,0,null),e=Lc(e,a,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Dl(n),t.memoizedState=Ll,e):Ml(t,s));if(null!==(i=e.memoizedState)&&null!==(r=i.dehydrated))return function(e,t,n,r,a,i,l){if(n)return 256&t.flags?(t.flags&=-257,Fl(e,t,l,r=ul(Error(o(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=Dc({mode:"visible",children:r.children},a,0,null),(i=Lc(i,a,l,null)).flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,0!==(1&t.mode)&&wo(t,e.child,null,l),t.child.memoizedState=Dl(l),t.memoizedState=Ll,i);if(0===(1&t.mode))return Fl(e,t,l,null);if("$!"===a.data){if(r=a.nextSibling&&a.nextSibling.dataset)var s=r.dgst;return r=s,Fl(e,t,l,r=ul(i=Error(o(419)),r,void 0))}if(s=0!==(l&e.childLanes),bl||s){if(null!==(r=zs)){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(a=0!==(a&(r.suspendedLanes|l))?0:a)&&a!==i.retryLane&&(i.retryLane=a,Lo(e,a),nc(r,e,a,-1))}return mc(),Fl(e,t,l,r=ul(Error(o(421))))}return"$?"===a.data?(t.flags|=128,t.child=e.child,t=Tc.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,ro=ca(a.nextSibling),no=t,ao=!0,oo=null,null!==e&&(qa[Ga++]=Ya,qa[Ga++]=Ja,qa[Ga++]=Qa,Ya=e.id,Ja=e.overflow,Qa=t),t=Ml(t,r.children),t.flags|=4096,t)}(e,t,s,a,r,i,n);if(l){l=a.fallback,s=t.mode,r=(i=e.child).sibling;var c={mode:"hidden",children:a.children};return 0===(1&s)&&t.child!==i?((a=t.child).childLanes=0,a.pendingProps=c,t.deletions=null):(a=Nc(i,c)).subtreeFlags=14680064&i.subtreeFlags,null!==r?l=Nc(r,l):(l=Lc(l,s,n,null)).flags|=2,l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,s=null===(s=e.child.memoizedState)?Dl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Ll,a}return e=(l=e.child).sibling,a=Nc(l,{mode:"visible",children:a.children}),0===(1&t.mode)&&(a.lanes=n),a.return=t,a.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Ml(e,t){return(t=Dc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Fl(e,t,n,r){return null!==r&&mo(r),wo(t,e.child,null,n),(e=Ml(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Bl(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),zo(e.return,t,n)}function $l(e,t,n,r,a){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=a)}function Ul(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail;if(vl(e,t,r.children,n),0!==(2&(r=ei.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Bl(e,n,t);else if(19===e.tag)Bl(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(_a(ei,r),0===(1&t.mode))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===ti(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),$l(t,!1,a,n,o);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===ti(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}$l(t,!0,n,null,o);break;case"together":$l(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hl(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ds|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Nc(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Nc(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Vl(e,t){if(!ao)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Kl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=14680064&a.subtreeFlags,r|=14680064&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ql(e,t,n){var r=t.pendingProps;switch(to(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kl(t),null;case 1:case 17:return Oa(t.type)&&Na(),Kl(t),null;case 3:return r=t.stateNode,Jo(),Ea(za),Ea(Ca),ri(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(fo(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==oo&&(ic(oo),oo=null))),Ol(e,t),Kl(t),null;case 5:Zo(t);var a=Qo(Go.current);if(n=t.type,null!==e&&null!=t.stateNode)Nl(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(o(166));return Kl(t),null}if(e=Qo(Ko.current),fo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[fa]=t,r[pa]=i,e=0!==(1&t.mode),n){case"dialog":Fr("cancel",r),Fr("close",r);break;case"iframe":case"object":case"embed":Fr("load",r);break;case"video":case"audio":for(a=0;a<Lr.length;a++)Fr(Lr[a],r);break;case"source":Fr("error",r);break;case"img":case"image":case"link":Fr("error",r),Fr("load",r);break;case"details":Fr("toggle",r);break;case"input":Y(r,i),Fr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Fr("invalid",r);break;case"textarea":ae(r,i),Fr("invalid",r)}for(var s in ye(n,i),a=null,i)if(i.hasOwnProperty(s)){var c=i[s];"children"===s?"string"===typeof c?r.textContent!==c&&(!0!==i.suppressHydrationWarning&&Xr(r.textContent,c,e),a=["children",c]):"number"===typeof c&&r.textContent!==""+c&&(!0!==i.suppressHydrationWarning&&Xr(r.textContent,c,e),a=["children",""+c]):l.hasOwnProperty(s)&&null!=c&&"onScroll"===s&&Fr("scroll",r)}switch(n){case"input":K(r),Z(r,i,!0);break;case"textarea":K(r),ie(r);break;case"select":case"option":break;default:"function"===typeof i.onClick&&(r.onclick=Zr)}r=a,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===a.nodeType?a:a.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[fa]=t,e[pa]=r,Rl(e,t,!1,!1),t.stateNode=e;e:{switch(s=be(n,r),n){case"dialog":Fr("cancel",e),Fr("close",e),a=r;break;case"iframe":case"object":case"embed":Fr("load",e),a=r;break;case"video":case"audio":for(a=0;a<Lr.length;a++)Fr(Lr[a],e);a=r;break;case"source":Fr("error",e),a=r;break;case"img":case"image":case"link":Fr("error",e),Fr("load",e),a=r;break;case"details":Fr("toggle",e),a=r;break;case"input":Y(e,r),a=Q(e,r),Fr("invalid",e);break;case"option":default:a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=I({},r,{value:void 0}),Fr("invalid",e);break;case"textarea":ae(e,r),a=re(e,r),Fr("invalid",e)}for(i in ye(n,a),c=a)if(c.hasOwnProperty(i)){var u=c[i];"style"===i?ge(e,u):"dangerouslySetInnerHTML"===i?null!=(u=u?u.__html:void 0)&&de(e,u):"children"===i?"string"===typeof u?("textarea"!==n||""!==u)&&fe(e,u):"number"===typeof u&&fe(e,""+u):"suppressContentEditableWarning"!==i&&"suppressHydrationWarning"!==i&&"autoFocus"!==i&&(l.hasOwnProperty(i)?null!=u&&"onScroll"===i&&Fr("scroll",e):null!=u&&b(e,i,u,s))}switch(n){case"input":K(e),Z(e,r,!1);break;case"textarea":K(e),ie(e);break;case"option":null!=r.value&&e.setAttribute("value",""+W(r.value));break;case"select":e.multiple=!!r.multiple,null!=(i=r.value)?ne(e,!!r.multiple,i,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof a.onClick&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Kl(t),null;case 6:if(e&&null!=t.stateNode)Al(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(n=Qo(Go.current),Qo(Ko.current),fo(t)){if(r=t.stateNode,n=t.memoizedProps,r[fa]=t,(i=r.nodeValue!==n)&&null!==(e=no))switch(e.tag){case 3:Xr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Xr(r.nodeValue,n,0!==(1&e.mode))}i&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[fa]=t,t.stateNode=r}return Kl(t),null;case 13:if(Ea(ei),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ao&&null!==ro&&0!==(1&t.mode)&&0===(128&t.flags))po(),ho(),t.flags|=98560,i=!1;else if(i=fo(t),null!==r&&null!==r.dehydrated){if(null===e){if(!i)throw Error(o(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(o(317));i[fa]=t}else ho(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Kl(t),i=!1}else null!==oo&&(ic(oo),oo=null),i=!0;if(!i)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ei.current)?0===As&&(As=3):mc())),null!==t.updateQueue&&(t.flags|=4),Kl(t),null);case 4:return Jo(),Ol(e,t),null===e&&Ur(t.stateNode.containerInfo),Kl(t),null;case 10:return Co(t.type._context),Kl(t),null;case 19:if(Ea(ei),null===(i=t.memoizedState))return Kl(t),null;if(r=0!==(128&t.flags),null===(s=i.rendering))if(r)Vl(i,!1);else{if(0!==As||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=ti(e))){for(t.flags|=128,Vl(i,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(i=n).flags&=14680066,null===(s=i.alternate)?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return _a(ei,1&ei.current|2),t.child}e=e.sibling}null!==i.tail&&Je()>Us&&(t.flags|=128,r=!0,Vl(i,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ti(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Vl(i,!0),null===i.tail&&"hidden"===i.tailMode&&!s.alternate&&!ao)return Kl(t),null}else 2*Je()-i.renderingStartTime>Us&&1073741824!==n&&(t.flags|=128,r=!0,Vl(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=i.last)?n.sibling=s:t.child=s,i.last=s)}return null!==i.tail?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Je(),t.sibling=null,n=ei.current,_a(ei,r?1&n|2:1&n),t):(Kl(t),null);case 22:case 23:return dc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Os)&&(Kl(t),6&t.subtreeFlags&&(t.flags|=8192)):Kl(t),null;case 24:case 25:return null}throw Error(o(156,t.tag))}function Gl(e,t){switch(to(t),t.tag){case 1:return Oa(t.type)&&Na(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Jo(),Ea(za),Ea(Ca),ri(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Zo(t),null;case 13:if(Ea(ei),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));ho()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ea(ei),null;case 4:return Jo(),null;case 10:return Co(t.type._context),null;case 22:case 23:return dc(),null;default:return null}}Rl=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ol=function(){},Nl=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Qo(Ko.current);var o,i=null;switch(n){case"input":a=Q(e,a),r=Q(e,r),i=[];break;case"select":a=I({},a,{value:void 0}),r=I({},r,{value:void 0}),i=[];break;case"textarea":a=re(e,a),r=re(e,r),i=[];break;default:"function"!==typeof a.onClick&&"function"===typeof r.onClick&&(e.onclick=Zr)}for(u in ye(n,r),n=null,a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&null!=a[u])if("style"===u){var s=a[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(l.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(s=null!=a?a[u]:void 0,r.hasOwnProperty(u)&&c!==s&&(null!=c||null!=s))if("style"===u)if(s){for(o in s)!s.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&s[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(i||(i=[]),i.push(u,n)),n=c;else"dangerouslySetInnerHTML"===u?(c=c?c.__html:void 0,s=s?s.__html:void 0,null!=c&&s!==c&&(i=i||[]).push(u,c)):"children"===u?"string"!==typeof c&&"number"!==typeof c||(i=i||[]).push(u,""+c):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(l.hasOwnProperty(u)?(null!=c&&"onScroll"===u&&Fr("scroll",e),i||s===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}},Al=function(e,t,n,r){n!==r&&(t.flags|=4)};var Ql=!1,Yl=!1,Jl="function"===typeof WeakSet?WeakSet:Set,Xl=null;function Zl(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){jc(e,t,r)}else n.current=null}function es(e,t,n){try{n()}catch(r){jc(e,t,r)}}var ts=!1;function ns(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var a=r=r.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,void 0!==o&&es(t,n,o)}a=a.next}while(a!==r)}}function rs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function as(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function os(e){var t=e.alternate;null!==t&&(e.alternate=null,os(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[fa],delete t[pa],delete t[ma],delete t[ga],delete t[xa])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function is(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||is(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zr));else if(4!==r&&null!==(e=e.child))for(ss(e,t,n),e=e.sibling;null!==e;)ss(e,t,n),e=e.sibling}function cs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cs(e,t,n),e=e.sibling;null!==e;)cs(e,t,n),e=e.sibling}var us=null,ds=!1;function fs(e,t,n){for(n=n.child;null!==n;)ps(e,t,n),n=n.sibling}function ps(e,t,n){if(ot&&"function"===typeof ot.onCommitFiberUnmount)try{ot.onCommitFiberUnmount(at,n)}catch(l){}switch(n.tag){case 5:Yl||Zl(n,t);case 6:var r=us,a=ds;us=null,fs(e,t,n),ds=a,null!==(us=r)&&(ds?(e=us,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):us.removeChild(n.stateNode));break;case 18:null!==us&&(ds?(e=us,n=n.stateNode,8===e.nodeType?sa(e.parentNode,n):1===e.nodeType&&sa(e,n),Ut(e)):sa(us,n.stateNode));break;case 4:r=us,a=ds,us=n.stateNode.containerInfo,ds=!0,fs(e,t,n),us=r,ds=a;break;case 0:case 11:case 14:case 15:if(!Yl&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){a=r=r.next;do{var o=a,i=o.destroy;o=o.tag,void 0!==i&&(0!==(2&o)||0!==(4&o))&&es(n,t,i),a=a.next}while(a!==r)}fs(e,t,n);break;case 1:if(!Yl&&(Zl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){jc(n,t,l)}fs(e,t,n);break;case 21:fs(e,t,n);break;case 22:1&n.mode?(Yl=(r=Yl)||null!==n.memoizedState,fs(e,t,n),Yl=r):fs(e,t,n);break;default:fs(e,t,n)}}function hs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Jl),t.forEach((function(t){var r=Cc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function ms(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:us=s.stateNode,ds=!1;break e;case 3:case 4:us=s.stateNode.containerInfo,ds=!0;break e}s=s.return}if(null===us)throw Error(o(160));ps(i,l,a),us=null,ds=!1;var c=a.alternate;null!==c&&(c.return=null),a.return=null}catch(u){jc(a,t,u)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gs(t,e),t=t.sibling}function gs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ms(t,e),xs(e),4&r){try{ns(3,e,e.return),rs(3,e)}catch(g){jc(e,e.return,g)}try{ns(5,e,e.return)}catch(g){jc(e,e.return,g)}}break;case 1:ms(t,e),xs(e),512&r&&null!==n&&Zl(n,n.return);break;case 5:if(ms(t,e),xs(e),512&r&&null!==n&&Zl(n,n.return),32&e.flags){var a=e.stateNode;try{fe(a,"")}catch(g){jc(e,e.return,g)}}if(4&r&&null!=(a=e.stateNode)){var i=e.memoizedProps,l=null!==n?n.memoizedProps:i,s=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===s&&"radio"===i.type&&null!=i.name&&J(a,i),be(s,l);var u=be(s,i);for(l=0;l<c.length;l+=2){var d=c[l],f=c[l+1];"style"===d?ge(a,f):"dangerouslySetInnerHTML"===d?de(a,f):"children"===d?fe(a,f):b(a,d,f,u)}switch(s){case"input":X(a,i);break;case"textarea":oe(a,i);break;case"select":var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var h=i.value;null!=h?ne(a,!!i.multiple,h,!1):p!==!!i.multiple&&(null!=i.defaultValue?ne(a,!!i.multiple,i.defaultValue,!0):ne(a,!!i.multiple,i.multiple?[]:"",!1))}a[pa]=i}catch(g){jc(e,e.return,g)}}break;case 6:if(ms(t,e),xs(e),4&r){if(null===e.stateNode)throw Error(o(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(g){jc(e,e.return,g)}}break;case 3:if(ms(t,e),xs(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Ut(t.containerInfo)}catch(g){jc(e,e.return,g)}break;case 4:default:ms(t,e),xs(e);break;case 13:ms(t,e),xs(e),8192&(a=e.child).flags&&(i=null!==a.memoizedState,a.stateNode.isHidden=i,!i||null!==a.alternate&&null!==a.alternate.memoizedState||($s=Je())),4&r&&hs(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Yl=(u=Yl)||d,ms(t,e),Yl=u):ms(t,e),xs(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!d&&0!==(1&e.mode))for(Xl=e,d=e.child;null!==d;){for(f=Xl=d;null!==Xl;){switch(h=(p=Xl).child,p.tag){case 0:case 11:case 14:case 15:ns(4,p,p.return);break;case 1:Zl(p,p.return);var m=p.stateNode;if("function"===typeof m.componentWillUnmount){r=p,n=p.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){jc(r,n,g)}}break;case 5:Zl(p,p.return);break;case 22:if(null!==p.memoizedState){ws(f);continue}}null!==h?(h.return=p,Xl=h):ws(f)}d=d.sibling}e:for(d=null,f=e;;){if(5===f.tag){if(null===d){d=f;try{a=f.stateNode,u?"function"===typeof(i=a.style).setProperty?i.setProperty("display","none","important"):i.display="none":(s=f.stateNode,l=void 0!==(c=f.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,s.style.display=me("display",l))}catch(g){jc(e,e.return,g)}}}else if(6===f.tag){if(null===d)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(g){jc(e,e.return,g)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ms(t,e),xs(e),4&r&&hs(e);case 21:}}function xs(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(is(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var a=r.stateNode;32&r.flags&&(fe(a,""),r.flags&=-33),cs(e,ls(e),a);break;case 3:case 4:var i=r.stateNode.containerInfo;ss(e,ls(e),i);break;default:throw Error(o(161))}}catch(l){jc(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function ys(e,t,n){Xl=e,bs(e,t,n)}function bs(e,t,n){for(var r=0!==(1&e.mode);null!==Xl;){var a=Xl,o=a.child;if(22===a.tag&&r){var i=null!==a.memoizedState||Ql;if(!i){var l=a.alternate,s=null!==l&&null!==l.memoizedState||Yl;l=Ql;var c=Yl;if(Ql=i,(Yl=s)&&!c)for(Xl=a;null!==Xl;)s=(i=Xl).child,22===i.tag&&null!==i.memoizedState?ks(a):null!==s?(s.return=i,Xl=s):ks(a);for(;null!==o;)Xl=o,bs(o,t,n),o=o.sibling;Xl=a,Ql=l,Yl=c}vs(e)}else 0!==(8772&a.subtreeFlags)&&null!==o?(o.return=a,Xl=o):vs(e)}}function vs(e){for(;null!==Xl;){var t=Xl;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Yl||rs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Yl)if(null===n)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:nl(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;null!==i&&Wo(t,i,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Wo(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var d=u.memoizedState;if(null!==d){var f=d.dehydrated;null!==f&&Ut(f)}}}break;default:throw Error(o(163))}Yl||512&t.flags&&as(t)}catch(p){jc(t,t.return,p)}}if(t===e){Xl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Xl=n;break}Xl=t.return}}function ws(e){for(;null!==Xl;){var t=Xl;if(t===e){Xl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Xl=n;break}Xl=t.return}}function ks(e){for(;null!==Xl;){var t=Xl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(s){jc(t,n,s)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var a=t.return;try{r.componentDidMount()}catch(s){jc(t,a,s)}}var o=t.return;try{as(t)}catch(s){jc(t,o,s)}break;case 5:var i=t.return;try{as(t)}catch(s){jc(t,i,s)}}}catch(s){jc(t,t.return,s)}if(t===e){Xl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Xl=l;break}Xl=t.return}}var Ss,js=Math.ceil,Es=v.ReactCurrentDispatcher,_s=v.ReactCurrentOwner,Ts=v.ReactCurrentBatchConfig,Cs=0,zs=null,Ps=null,Rs=0,Os=0,Ns=ja(0),As=0,Ls=null,Ds=0,Is=0,Ms=0,Fs=null,Bs=null,$s=0,Us=1/0,Hs=null,Ws=!1,Vs=null,Ks=null,qs=!1,Gs=null,Qs=0,Ys=0,Js=null,Xs=-1,Zs=0;function ec(){return 0!==(6&Cs)?Je():-1!==Xs?Xs:Xs=Je()}function tc(e){return 0===(1&e.mode)?1:0!==(2&Cs)&&0!==Rs?Rs&-Rs:null!==go.transition?(0===Zs&&(Zs=mt()),Zs):0!==(e=bt)?e:e=void 0===(e=window.event)?16:Yt(e.type)}function nc(e,t,n,r){if(50<Ys)throw Ys=0,Js=null,Error(o(185));xt(e,n,r),0!==(2&Cs)&&e===zs||(e===zs&&(0===(2&Cs)&&(Is|=n),4===As&&lc(e,Rs)),rc(e,r),1===n&&0===Cs&&0===(1&t.mode)&&(Us=Je()+500,Fa&&Ua()))}function rc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-it(o),l=1<<i,s=a[i];-1===s?0!==(l&n)&&0===(l&r)||(a[i]=pt(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}(e,t);var r=ft(e,e===zs?Rs:0);if(0===r)null!==n&&Ge(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Ge(n),1===t)0===e.tag?function(e){Fa=!0,$a(e)}(sc.bind(null,e)):$a(sc.bind(null,e)),ia((function(){0===(6&Cs)&&Ua()})),n=null;else{switch(vt(r)){case 1:n=Ze;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=zc(n,ac.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ac(e,t){if(Xs=-1,Zs=0,0!==(6&Cs))throw Error(o(327));var n=e.callbackNode;if(kc()&&e.callbackNode!==n)return null;var r=ft(e,e===zs?Rs:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gc(e,r);else{t=r;var a=Cs;Cs|=2;var i=hc();for(zs===e&&Rs===t||(Hs=null,Us=Je()+500,fc(e,t));;)try{yc();break}catch(s){pc(e,s)}To(),Es.current=i,Cs=a,null!==Ps?t=0:(zs=null,Rs=0,t=As)}if(0!==t){if(2===t&&(0!==(a=ht(e))&&(r=a,t=oc(e,a))),1===t)throw n=Ls,fc(e,0),lc(e,r),rc(e,Je()),n;if(6===t)lc(e,r);else{if(a=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var a=n[r],o=a.getSnapshot;a=a.value;try{if(!lr(o(),a))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(a)&&(2===(t=gc(e,r))&&(0!==(i=ht(e))&&(r=i,t=oc(e,i))),1===t))throw n=Ls,fc(e,0),lc(e,r),rc(e,Je()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:case 5:wc(e,Bs,Hs);break;case 3:if(lc(e,r),(130023424&r)===r&&10<(t=$s+500-Je())){if(0!==ft(e,0))break;if(((a=e.suspendedLanes)&r)!==r){ec(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ra(wc.bind(null,e,Bs,Hs),t);break}wc(e,Bs,Hs);break;case 4:if(lc(e,r),(4194240&r)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-it(r);i=1<<l,(l=t[l])>a&&(a=l),r&=~i}if(r=a,10<(r=(120>(r=Je()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*js(r/1960))-r)){e.timeoutHandle=ra(wc.bind(null,e,Bs,Hs),r);break}wc(e,Bs,Hs);break;default:throw Error(o(329))}}}return rc(e,Je()),e.callbackNode===n?ac.bind(null,e):null}function oc(e,t){var n=Fs;return e.current.memoizedState.isDehydrated&&(fc(e,t).flags|=256),2!==(e=gc(e,t))&&(t=Bs,Bs=n,null!==t&&ic(t)),e}function ic(e){null===Bs?Bs=e:Bs.push.apply(Bs,e)}function lc(e,t){for(t&=~Ms,t&=~Is,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-it(t),r=1<<n;e[n]=-1,t&=~r}}function sc(e){if(0!==(6&Cs))throw Error(o(327));kc();var t=ft(e,0);if(0===(1&t))return rc(e,Je()),null;var n=gc(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=oc(e,r))}if(1===n)throw n=Ls,fc(e,0),lc(e,t),rc(e,Je()),n;if(6===n)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wc(e,Bs,Hs),rc(e,Je()),null}function cc(e,t){var n=Cs;Cs|=1;try{return e(t)}finally{0===(Cs=n)&&(Us=Je()+500,Fa&&Ua())}}function uc(e){null!==Gs&&0===Gs.tag&&0===(6&Cs)&&kc();var t=Cs;Cs|=1;var n=Ts.transition,r=bt;try{if(Ts.transition=null,bt=1,e)return e()}finally{bt=r,Ts.transition=n,0===(6&(Cs=t))&&Ua()}}function dc(){Os=Ns.current,Ea(Ns)}function fc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,aa(n)),null!==Ps)for(n=Ps.return;null!==n;){var r=n;switch(to(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Na();break;case 3:Jo(),Ea(za),Ea(Ca),ri();break;case 5:Zo(r);break;case 4:Jo();break;case 13:case 19:Ea(ei);break;case 10:Co(r.type._context);break;case 22:case 23:dc()}n=n.return}if(zs=e,Ps=e=Nc(e.current,null),Rs=Os=t,As=0,Ls=null,Ms=Is=Ds=0,Bs=Fs=null,null!==Oo){for(t=0;t<Oo.length;t++)if(null!==(r=(n=Oo[t]).interleaved)){n.interleaved=null;var a=r.next,o=n.pending;if(null!==o){var i=o.next;o.next=a,r.next=i}n.pending=r}Oo=null}return e}function pc(e,t){for(;;){var n=Ps;try{if(To(),ai.current=Xi,ui){for(var r=li.memoizedState;null!==r;){var a=r.queue;null!==a&&(a.pending=null),r=r.next}ui=!1}if(ii=0,ci=si=li=null,di=!1,fi=0,_s.current=null,null===n||null===n.return){As=1,Ls=t,Ps=null;break}e:{var i=e,l=n.return,s=n,c=t;if(t=Rs,s.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var u=c,d=s,f=d.tag;if(0===(1&d.mode)&&(0===f||11===f||15===f)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=gl(l);if(null!==h){h.flags&=-257,xl(h,l,s,0,t),1&h.mode&&ml(i,u,t),c=u;var m=(t=h).updateQueue;if(null===m){var g=new Set;g.add(c),t.updateQueue=g}else m.add(c);break e}if(0===(1&t)){ml(i,u,t),mc();break e}c=Error(o(426))}else if(ao&&1&s.mode){var x=gl(l);if(null!==x){0===(65536&x.flags)&&(x.flags|=256),xl(x,l,s,0,t),mo(cl(c,s));break e}}i=c=cl(c,s),4!==As&&(As=2),null===Fs?Fs=[i]:Fs.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t,Uo(i,pl(0,c,t));break e;case 1:s=c;var y=i.type,b=i.stateNode;if(0===(128&i.flags)&&("function"===typeof y.getDerivedStateFromError||null!==b&&"function"===typeof b.componentDidCatch&&(null===Ks||!Ks.has(b)))){i.flags|=65536,t&=-t,i.lanes|=t,Uo(i,hl(i,s,t));break e}}i=i.return}while(null!==i)}vc(n)}catch(v){t=v,Ps===n&&null!==n&&(Ps=n=n.return);continue}break}}function hc(){var e=Es.current;return Es.current=Xi,null===e?Xi:e}function mc(){0!==As&&3!==As&&2!==As||(As=4),null===zs||0===(268435455&Ds)&&0===(268435455&Is)||lc(zs,Rs)}function gc(e,t){var n=Cs;Cs|=2;var r=hc();for(zs===e&&Rs===t||(Hs=null,fc(e,t));;)try{xc();break}catch(a){pc(e,a)}if(To(),Cs=n,Es.current=r,null!==Ps)throw Error(o(261));return zs=null,Rs=0,As}function xc(){for(;null!==Ps;)bc(Ps)}function yc(){for(;null!==Ps&&!Qe();)bc(Ps)}function bc(e){var t=Ss(e.alternate,e,Os);e.memoizedProps=e.pendingProps,null===t?vc(e):Ps=t,_s.current=null}function vc(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=ql(n,t,Os)))return void(Ps=n)}else{if(null!==(n=Gl(n,t)))return n.flags&=32767,void(Ps=n);if(null===e)return As=6,void(Ps=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Ps=t);Ps=t=e}while(null!==t);0===As&&(As=5)}function wc(e,t,n){var r=bt,a=Ts.transition;try{Ts.transition=null,bt=1,function(e,t,n,r){do{kc()}while(null!==Gs);if(0!==(6&Cs))throw Error(o(327));n=e.finishedWork;var a=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-it(n),o=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~o}}(e,i),e===zs&&(Ps=zs=null,Rs=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||qs||(qs=!0,zc(tt,(function(){return kc(),null}))),i=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||i){i=Ts.transition,Ts.transition=null;var l=bt;bt=1;var s=Cs;Cs|=4,_s.current=null,function(e,t){if(ea=Wt,pr(e=fr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch(w){n=null;break e}var l=0,s=-1,c=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||0!==a&&3!==f.nodeType||(s=l+a),f!==i||0!==r&&3!==f.nodeType||(c=l+r),3===f.nodeType&&(l+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++u===a&&(s=l),p===i&&++d===r&&(c=l),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}n=-1===s||-1===c?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ta={focusedElem:e,selectionRange:n},Wt=!1,Xl=t;null!==Xl;)if(e=(t=Xl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Xl=e;else for(;null!==Xl;){t=Xl;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,x=m.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:nl(t.type,g),x);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var v=t.stateNode.containerInfo;1===v.nodeType?v.textContent="":9===v.nodeType&&v.documentElement&&v.removeChild(v.documentElement);break;default:throw Error(o(163))}}catch(w){jc(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Xl=e;break}Xl=t.return}m=ts,ts=!1}(e,n),gs(n,e),hr(ta),Wt=!!ea,ta=ea=null,e.current=n,ys(n,e,a),Ye(),Cs=s,bt=l,Ts.transition=i}else e.current=n;if(qs&&(qs=!1,Gs=e,Qs=a),i=e.pendingLanes,0===i&&(Ks=null),function(e){if(ot&&"function"===typeof ot.onCommitFiberRoot)try{ot.onCommitFiberRoot(at,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),rc(e,Je()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Ws)throw Ws=!1,e=Vs,Vs=null,e;0!==(1&Qs)&&0!==e.tag&&kc(),i=e.pendingLanes,0!==(1&i)?e===Js?Ys++:(Ys=0,Js=e):Ys=0,Ua()}(e,t,n,r)}finally{Ts.transition=a,bt=r}return null}function kc(){if(null!==Gs){var e=vt(Qs),t=Ts.transition,n=bt;try{if(Ts.transition=null,bt=16>e?16:e,null===Gs)var r=!1;else{if(e=Gs,Gs=null,Qs=0,0!==(6&Cs))throw Error(o(331));var a=Cs;for(Cs|=4,Xl=e.current;null!==Xl;){var i=Xl,l=i.child;if(0!==(16&Xl.flags)){var s=i.deletions;if(null!==s){for(var c=0;c<s.length;c++){var u=s[c];for(Xl=u;null!==Xl;){var d=Xl;switch(d.tag){case 0:case 11:case 15:ns(8,d,i)}var f=d.child;if(null!==f)f.return=d,Xl=f;else for(;null!==Xl;){var p=(d=Xl).sibling,h=d.return;if(os(d),d===u){Xl=null;break}if(null!==p){p.return=h,Xl=p;break}Xl=h}}}var m=i.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var x=g.sibling;g.sibling=null,g=x}while(null!==g)}}Xl=i}}if(0!==(2064&i.subtreeFlags)&&null!==l)l.return=i,Xl=l;else e:for(;null!==Xl;){if(0!==(2048&(i=Xl).flags))switch(i.tag){case 0:case 11:case 15:ns(9,i,i.return)}var y=i.sibling;if(null!==y){y.return=i.return,Xl=y;break e}Xl=i.return}}var b=e.current;for(Xl=b;null!==Xl;){var v=(l=Xl).child;if(0!==(2064&l.subtreeFlags)&&null!==v)v.return=l,Xl=v;else e:for(l=b;null!==Xl;){if(0!==(2048&(s=Xl).flags))try{switch(s.tag){case 0:case 11:case 15:rs(9,s)}}catch(k){jc(s,s.return,k)}if(s===l){Xl=null;break e}var w=s.sibling;if(null!==w){w.return=s.return,Xl=w;break e}Xl=s.return}}if(Cs=a,Ua(),ot&&"function"===typeof ot.onPostCommitFiberRoot)try{ot.onPostCommitFiberRoot(at,e)}catch(k){}r=!0}return r}finally{bt=n,Ts.transition=t}}return!1}function Sc(e,t,n){e=Bo(e,t=pl(0,t=cl(n,t),1),1),t=ec(),null!==e&&(xt(e,1,t),rc(e,t))}function jc(e,t,n){if(3===e.tag)Sc(e,e,n);else for(;null!==t;){if(3===t.tag){Sc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Ks||!Ks.has(r))){t=Bo(t,e=hl(t,e=cl(n,e),1),1),e=ec(),null!==t&&(xt(t,1,e),rc(t,e));break}}t=t.return}}function Ec(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&n,zs===e&&(Rs&n)===n&&(4===As||3===As&&(130023424&Rs)===Rs&&500>Je()-$s?fc(e,0):Ms|=n),rc(e,t)}function _c(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ut,0===(130023424&(ut<<=1))&&(ut=4194304)));var n=ec();null!==(e=Lo(e,t))&&(xt(e,t,n),rc(e,n))}function Tc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),_c(e,n)}function Cc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}null!==r&&r.delete(t),_c(e,n)}function zc(e,t){return qe(e,t)}function Pc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rc(e,t,n,r){return new Pc(e,t,n,r)}function Oc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Nc(e,t){var n=e.alternate;return null===n?((n=Rc(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ac(e,t,n,r,a,i){var l=2;if(r=e,"function"===typeof e)Oc(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case S:return Lc(n.children,a,i,t);case j:l=8,a|=8;break;case E:return(e=Rc(12,n,t,2|a)).elementType=E,e.lanes=i,e;case z:return(e=Rc(13,n,t,a)).elementType=z,e.lanes=i,e;case P:return(e=Rc(19,n,t,a)).elementType=P,e.lanes=i,e;case N:return Dc(n,a,i,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case _:l=10;break e;case T:l=9;break e;case C:l=11;break e;case R:l=14;break e;case O:l=16,r=null;break e}throw Error(o(130,null==e?e:typeof e,""))}return(t=Rc(l,n,t,a)).elementType=e,t.type=r,t.lanes=i,t}function Lc(e,t,n,r){return(e=Rc(7,e,r,t)).lanes=n,e}function Dc(e,t,n,r){return(e=Rc(22,e,r,t)).elementType=N,e.lanes=n,e.stateNode={isHidden:!1},e}function Ic(e,t,n){return(e=Rc(6,e,null,t)).lanes=n,e}function Mc(e,t,n){return(t=Rc(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fc(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Bc(e,t,n,r,a,o,i,l,s){return e=new Fc(e,t,n,l,s),1===t?(t=1,!0===o&&(t|=8)):t=0,o=Rc(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Io(o),e}function $c(e){if(!e)return Ta;e:{if(Ue(e=e._reactInternals)!==e||1!==e.tag)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Oa(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(o(171))}if(1===e.tag){var n=e.type;if(Oa(n))return La(e,n,t)}return t}function Uc(e,t,n,r,a,o,i,l,s){return(e=Bc(n,r,!0,e,0,o,0,l,s)).context=$c(null),n=e.current,(o=Fo(r=ec(),a=tc(n))).callback=void 0!==t&&null!==t?t:null,Bo(n,o,a),e.current.lanes=a,xt(e,a,r),rc(e,r),e}function Hc(e,t,n,r){var a=t.current,o=ec(),i=tc(a);return n=$c(n),null===t.context?t.context=n:t.pendingContext=n,(t=Fo(o,i)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Bo(a,t,i))&&(nc(e,a,i,o),$o(e,a,i)),i}function Wc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Vc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Kc(e,t){Vc(e,t),(e=e.alternate)&&Vc(e,t)}Ss=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||za.current)bl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return bl=!1,function(e,t,n){switch(t.tag){case 3:zl(t),ho();break;case 5:Xo(t);break;case 1:Oa(t.type)&&Da(t);break;case 4:Yo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;_a(So,r._currentValue),r._currentValue=a;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(_a(ei,1&ei.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Il(e,t,n):(_a(ei,1&ei.current),null!==(e=Wl(e,t,n))?e.sibling:null);_a(ei,1&ei.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Ul(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),_a(ei,ei.current),r)break;return null;case 22:case 23:return t.lanes=0,jl(e,t,n)}return Wl(e,t,n)}(e,t,n);bl=0!==(131072&e.flags)}else bl=!1,ao&&0!==(1048576&t.flags)&&Za(t,Ka,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hl(e,t),e=t.pendingProps;var a=Ra(t,Ca.current);Po(t,n),a=gi(null,t,r,e,a,n);var i=xi();return t.flags|=1,"object"===typeof a&&null!==a&&"function"===typeof a.render&&void 0===a.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Oa(r)?(i=!0,Da(t)):i=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,Io(t),a.updater=al,t.stateNode=a,a._reactInternals=t,sl(t,r,e,n),t=Cl(null,t,r,!0,i,n)):(t.tag=0,ao&&i&&eo(t),vl(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hl(e,t),e=t.pendingProps,r=(a=r._init)(r._payload),t.type=r,a=t.tag=function(e){if("function"===typeof e)return Oc(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===C)return 11;if(e===R)return 14}return 2}(r),e=nl(r,e),a){case 0:t=_l(null,t,r,e,n);break e;case 1:t=Tl(null,t,r,e,n);break e;case 11:t=wl(null,t,r,e,n);break e;case 14:t=kl(null,t,r,nl(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,_l(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 1:return r=t.type,a=t.pendingProps,Tl(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 3:e:{if(zl(t),null===e)throw Error(o(387));r=t.pendingProps,a=(i=t.memoizedState).element,Mo(e,t),Ho(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=Pl(e,t,r,n,a=cl(Error(o(423)),t));break e}if(r!==a){t=Pl(e,t,r,n,a=cl(Error(o(424)),t));break e}for(ro=ca(t.stateNode.containerInfo.firstChild),no=t,ao=!0,oo=null,n=ko(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ho(),r===a){t=Wl(e,t,n);break e}vl(e,t,r,n)}t=t.child}return t;case 5:return Xo(t),null===e&&co(t),r=t.type,a=t.pendingProps,i=null!==e?e.memoizedProps:null,l=a.children,na(r,a)?l=null:null!==i&&na(r,i)&&(t.flags|=32),El(e,t),vl(e,t,l,n),t.child;case 6:return null===e&&co(t),null;case 13:return Il(e,t,n);case 4:return Yo(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wo(t,null,r,n):vl(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,wl(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 7:return vl(e,t,t.pendingProps,n),t.child;case 8:case 12:return vl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,l=a.value,_a(So,r._currentValue),r._currentValue=l,null!==i)if(lr(i.value,l)){if(i.children===a.children&&!za.current){t=Wl(e,t,n);break e}}else for(null!==(i=t.child)&&(i.return=t);null!==i;){var s=i.dependencies;if(null!==s){l=i.child;for(var c=s.firstContext;null!==c;){if(c.context===r){if(1===i.tag){(c=Fo(-1,n&-n)).tag=2;var u=i.updateQueue;if(null!==u){var d=(u=u.shared).pending;null===d?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}i.lanes|=n,null!==(c=i.alternate)&&(c.lanes|=n),zo(i.return,n,t),s.lanes|=n;break}c=c.next}}else if(10===i.tag)l=i.type===t.type?null:i.child;else if(18===i.tag){if(null===(l=i.return))throw Error(o(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),zo(l,n,t),l=i.sibling}else l=i.child;if(null!==l)l.return=i;else for(l=i;null!==l;){if(l===t){l=null;break}if(null!==(i=l.sibling)){i.return=l.return,l=i;break}l=l.return}i=l}vl(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,Po(t,n),r=r(a=Ro(a)),t.flags|=1,vl(e,t,r,n),t.child;case 14:return a=nl(r=t.type,t.pendingProps),kl(e,t,r,a=nl(r.type,a),n);case 15:return Sl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:nl(r,a),Hl(e,t),t.tag=1,Oa(r)?(e=!0,Da(t)):e=!1,Po(t,n),il(t,r,a),sl(t,r,a,n),Cl(null,t,r,!0,e,n);case 19:return Ul(e,t,n);case 22:return jl(e,t,n)}throw Error(o(156,t.tag))};var qc="function"===typeof reportError?reportError:function(e){console.error(e)};function Gc(e){this._internalRoot=e}function Qc(e){this._internalRoot=e}function Yc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Jc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Xc(){}function Zc(e,t,n,r,a){var o=n._reactRootContainer;if(o){var i=o;if("function"===typeof a){var l=a;a=function(){var e=Wc(i);l.call(e)}}Hc(t,i,e,a)}else i=function(e,t,n,r,a){if(a){if("function"===typeof r){var o=r;r=function(){var e=Wc(i);o.call(e)}}var i=Uc(t,r,e,0,null,!1,0,"",Xc);return e._reactRootContainer=i,e[ha]=i.current,Ur(8===e.nodeType?e.parentNode:e),uc(),i}for(;a=e.lastChild;)e.removeChild(a);if("function"===typeof r){var l=r;r=function(){var e=Wc(s);l.call(e)}}var s=Bc(e,0,!1,null,0,!1,0,"",Xc);return e._reactRootContainer=s,e[ha]=s.current,Ur(8===e.nodeType?e.parentNode:e),uc((function(){Hc(t,s,n,r)})),s}(n,t,e,a,r);return Wc(i)}Qc.prototype.render=Gc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Hc(e,t,null,null)},Qc.prototype.unmount=Gc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;uc((function(){Hc(null,e,null,null)})),t[ha]=null}},Qc.prototype.unstable_scheduleHydration=function(e){if(e){var t=jt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nt.length&&0!==t&&t<Nt[n].priority;n++);Nt.splice(n,0,e),0===n&&It(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(yt(t,1|n),rc(t,Je()),0===(6&Cs)&&(Us=Je()+500,Ua()))}break;case 13:uc((function(){var t=Lo(e,1);if(null!==t){var n=ec();nc(t,e,1,n)}})),Kc(e,1)}},kt=function(e){if(13===e.tag){var t=Lo(e,134217728);if(null!==t)nc(t,e,134217728,ec());Kc(e,134217728)}},St=function(e){if(13===e.tag){var t=tc(e),n=Lo(e,t);if(null!==n)nc(n,e,t,ec());Kc(e,t)}},jt=function(){return bt},Et=function(e,t){var n=bt;try{return bt=e,t()}finally{bt=n}},ke=function(e,t,n){switch(t){case"input":if(X(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=wa(r);if(!a)throw Error(o(90));q(r),X(r,a)}}}break;case"textarea":oe(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Ce=cc,ze=uc;var eu={usingClientEntryPoint:!1,Events:[ba,va,wa,_e,Te,cc]},tu={findFiberByHostInstance:ya,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nu={bundleType:tu.bundleType,version:tu.version,rendererPackageName:tu.rendererPackageName,rendererConfig:tu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:v.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ve(e))?null:e.stateNode},findFiberByHostInstance:tu.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{at=ru.inject(nu),ot=ru}catch(ue){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eu,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Yc(t))throw Error(o(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Yc(e))throw Error(o(299));var n=!1,r="",a=qc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=Bc(e,1,!1,null,0,n,0,r,a),e[ha]=t.current,Ur(8===e.nodeType?e.parentNode:e),new Gc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=null===(e=Ve(t))?null:e.stateNode},t.flushSync=function(e){return uc(e)},t.hydrate=function(e,t,n){if(!Jc(t))throw Error(o(200));return Zc(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Yc(e))throw Error(o(405));var r=null!=n&&n.hydratedSources||null,a=!1,i="",l=qc;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(a=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=Uc(t,null,e,1,null!=n?n:null,a,0,i,l),e[ha]=t.current,Ur(e),r)for(e=0;e<r.length;e++)a=(a=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Qc(t)},t.render=function(e,t,n){if(!Jc(t))throw Error(o(200));return Zc(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Jc(e))throw Error(o(40));return!!e._reactRootContainer&&(uc((function(){Zc(null,null,e,!1,(function(){e._reactRootContainer=null,e[ha]=null}))})),!0)},t.unstable_batchedUpdates=cc,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Jc(n))throw Error(o(200));if(null==e||void 0===e._reactInternals)throw Error(o(38));return Zc(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},391:(e,t,n)=>{"use strict";var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)},153:(e,t,n)=>{"use strict";var r=n(43),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,o={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,r)&&!s.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:c,ref:u,props:o,_owner:l.current}}t.jsx=c,t.jsxs=c},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=x.prototype;var v=b.prototype=new y;v.constructor=b,m(v,x.prototype),v.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,S={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var a,o={},i=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,a)&&!j.hasOwnProperty(a)&&(o[a]=t[a]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===o[a]&&(o[a]=s[a]);return{$$typeof:n,type:e,key:i,ref:l,props:o,_owner:S.current}}function _(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var T=/\/+/g;function C(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function z(e,t,a,o,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return i=i(s=e),e=""===o?"."+C(s,0):o,w(i)?(a="",null!=e&&(a=e.replace(T,"$&/")+"/"),z(i,t,a,"",(function(e){return e}))):null!=i&&(_(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,a+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(T,"$&/")+"/")+e)),t.push(i)),1;if(s=0,o=""===o?".":o+":",w(e))for(var c=0;c<e.length;c++){var u=o+C(l=e[c],c);s+=z(l,t,a,u,i)}else if(u=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof u)for(e=u.call(e),c=0;!(l=e.next()).done;)s+=z(l=l.value,t,a,u=o+C(l,c++),i);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function P(e,t,n){if(null==e)return e;var r=[],a=0;return z(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function R(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},N={transition:null},A={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:N,ReactCurrentOwner:S};function L(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:P,forEach:function(e,t,n){P(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=x,t.Fragment=a,t.Profiler=i,t.PureComponent=b,t.StrictMode=o,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.act=L,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=m({},e.props),o=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=S.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)k.call(t,c)&&!j.hasOwnProperty(c)&&(a[c]=void 0===t[c]&&void 0!==s?s[c]:t[c])}var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];a.children=s}return{$$typeof:n,type:e.type,key:o,ref:i,props:a,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=N.transition;N.transition={};try{e()}finally{N.transition=t}},t.unstable_act=L,t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,n){return O.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,n){return O.current.useReducer(e,t,n)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return O.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return O.current.useTransition()},t.version="18.3.1"},43:(e,t,n)=>{"use strict";e.exports=n(202)},579:(e,t,n)=>{"use strict";e.exports=n(153)},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<o(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,i=a>>>1;r<i;){var l=2*(r+1)-1,s=e[l],c=l+1,u=e[c];if(0>o(s,n))c<a&&0>o(u,s)?(e[r]=u,e[c]=n,r=c):(e[r]=s,e[l]=n,r=l);else{if(!(c<a&&0>o(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var c=[],u=[],d=1,f=null,p=3,h=!1,m=!1,g=!1,x="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,b="undefined"!==typeof setImmediate?setImmediate:null;function v(e){for(var t=r(u);null!==t;){if(null===t.callback)a(u);else{if(!(t.startTime<=e))break;a(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function w(e){if(g=!1,v(e),!m)if(null!==r(c))m=!0,N(k);else{var t=r(u);null!==t&&A(w,t.startTime-e)}}function k(e,n){m=!1,g&&(g=!1,y(_),_=-1),h=!0;var o=p;try{for(v(n),f=r(c);null!==f&&(!(f.expirationTime>n)||e&&!z());){var i=f.callback;if("function"===typeof i){f.callback=null,p=f.priorityLevel;var l=i(f.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?f.callback=l:f===r(c)&&a(c),v(n)}else a(c);f=r(c)}if(null!==f)var s=!0;else{var d=r(u);null!==d&&A(w,d.startTime-n),s=!1}return s}finally{f=null,p=o,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,j=!1,E=null,_=-1,T=5,C=-1;function z(){return!(t.unstable_now()-C<T)}function P(){if(null!==E){var e=t.unstable_now();C=e;var n=!0;try{n=E(!0,e)}finally{n?S():(j=!1,E=null)}}else j=!1}if("function"===typeof b)S=function(){b(P)};else if("undefined"!==typeof MessageChannel){var R=new MessageChannel,O=R.port2;R.port1.onmessage=P,S=function(){O.postMessage(null)}}else S=function(){x(P,0)};function N(e){E=e,j||(j=!0,S())}function A(e,n){_=x((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,N(k))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,a,o){var i=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?i+o:i:o=i,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:o,expirationTime:l=o+l,sortIndex:-1},o>i?(e.sortIndex=o,n(u,e),null===r(c)&&e===r(u)&&(g?(y(_),_=-1):g=!0,A(w,o-i))):(e.sortIndex=l,n(c,e),m||h||(m=!0,N(k))),e},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},853:(e,t,n)=>{"use strict";e.exports=n(234)},324:e=>{e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<o.length;s++){var c=o[s];if(!l(c))return!1;var u=e[c],d=t[c];if(!1===(a=n?n.call(r,u,d,c):void 0)||void 0===a&&u!==d)return!1}return!0}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+".22603500.chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="shrimatka:";n.l=(r,a,o,i)=>{if(e[r])e[r].push(a);else{var l,s;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){l=d;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+o),l.src=r),e[r]=[a];var f=(t,n)=>{l.onerror=l.onload=null,clearTimeout(p);var a=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((e=>e(n))),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={792:0};n.f.j=(t,r)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise(((n,r)=>a=e[t]=[n,r]));r.push(a[2]=o);var i=n.p+n.u(t),l=new Error;n.l(i,(r=>{if(n.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,a[1](l)}}),"chunk-"+t,t)}};var t=(t,r)=>{var a,o,i=r[0],l=r[1],s=r[2],c=0;if(i.some((t=>0!==e[t]))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(s)s(n)}for(t&&t(r);c<i.length;c++)o=i[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkshrimatka=self.webpackChunkshrimatka||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var e={};n.r(e),n.d(e,{hasBrowserEnv:()=>Ls,hasStandardBrowserEnv:()=>Is,hasStandardBrowserWebWorkerEnv:()=>Ms,navigator:()=>Ds,origin:()=>Fs});var t=n(43),r=n(391),a=(n(175),"popstate");function o(){return f((function(e,t){let{pathname:n,search:r,hash:a}=e.location;return c("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:u(t)}),null,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function i(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function l(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function s(e,t){return{usr:e.state,key:e.key,idx:t}}function c(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0;return{pathname:"string"===typeof e?e:e.pathname,search:"",hash:"",..."string"===typeof t?d(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10)}}function u(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function d(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function f(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{window:o=document.defaultView,v5Compat:l=!1}=r,d=o.history,f="POP",p=null,h=m();function m(){return(d.state||{idx:null}).idx}function g(){f="POP";let e=m(),t=null==e?null:e-h;h=e,p&&p({action:f,location:y.location,delta:t})}function x(e){let t="null"!==o.location.origin?o.location.origin:o.location.href,n="string"===typeof e?e:u(e);return n=n.replace(/ $/,"%20"),i(t,`No window.location.(origin|href) available to create URL for href: ${n}`),new URL(n,t)}null==h&&(h=0,d.replaceState({...d.state,idx:h},""));let y={get action(){return f},get location(){return e(o,d)},listen(e){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(a,g),p=e,()=>{o.removeEventListener(a,g),p=null}},createHref:e=>t(o,e),createURL:x,encodeLocation(e){let t=x(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){f="PUSH";let r=c(y.location,e,t);n&&n(r,e),h=m()+1;let a=s(r,h),i=y.createHref(r);try{d.pushState(a,"",i)}catch(u){if(u instanceof DOMException&&"DataCloneError"===u.name)throw u;o.location.assign(i)}l&&p&&p({action:f,location:y.location,delta:1})},replace:function(e,t){f="REPLACE";let r=c(y.location,e,t);n&&n(r,e),h=m();let a=s(r,h),o=y.createHref(r);d.replaceState(a,"",o),l&&p&&p({action:f,location:y.location,delta:0})},go:e=>d.go(e)};return y}function p(e,t){return h(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",!1)}function h(e,t,n,r){let a=C(("string"===typeof t?d(t):t).pathname||"/",n);if(null==a)return null;let o=m(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(o);let i=null;for(let l=0;null==i&&l<o.length;++l){let e=T(a);i=E(o[l],e,r)}return i}function m(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=(e,a,o)=>{let l={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};l.relativePath.startsWith("/")&&(i(l.relativePath.startsWith(r),`Absolute route path "${l.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(r.length));let s=N([r,l.relativePath]),c=n.concat(l);e.children&&e.children.length>0&&(i(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${s}".`),m(e.children,t,c,s)),(null!=e.path||e.index)&&t.push({path:s,score:j(s,e.index),routesMeta:c})};return e.forEach(((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of g(e.path))a(e,t,n);else a(e,t)})),t}function g(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,a=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return a?[o,""]:[o];let i=g(r.join("/")),l=[];return l.push(...i.map((e=>""===e?o:[o,e].join("/")))),a&&l.push(...i),l.map((t=>e.startsWith("/")&&""===t?"/":t))}var x=/^:[\w-]+$/,y=3,b=2,v=1,w=10,k=-2,S=e=>"*"===e;function j(e,t){let n=e.split("/"),r=n.length;return n.some(S)&&(r+=k),t&&(r+=b),n.filter((e=>!S(e))).reduce(((e,t)=>e+(x.test(t)?y:""===t?v:w)),r)}function E(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{routesMeta:r}=e,a={},o="/",i=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,c="/"===o?t:t.slice(o.length)||"/",u=_({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},c),d=e.route;if(!u&&s&&n&&!r[r.length-1].route.index&&(u=_({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(a,u.params),i.push({params:a,pathname:N([o,u.pathname]),pathnameBase:A(N([o,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(o=N([o,u.pathnameBase]))}return i}function _(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];l("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))");let o=new RegExp(a,t?void 0:"i");return[o,r]}(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let o=a[0],i=o.replace(/(.)\/+$/,"$1"),s=a.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:a}=t;if("*"===r){let e=s[n]||"";i=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[n];return e[r]=a&&!l?void 0:(l||"").replace(/%2F/g,"/"),e}),{}),pathname:o,pathnameBase:i,pattern:e}}function T(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return l(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function C(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function z(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function P(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function R(e){let t=P(e);return t.map(((e,n)=>n===t.length-1?e.pathname:e.pathnameBase))}function O(e,t,n){let r,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"string"===typeof e?r=d(e):(r={...e},i(!r.pathname||!r.pathname.includes("?"),z("?","pathname","search",r)),i(!r.pathname||!r.pathname.includes("#"),z("#","pathname","hash",r)),i(!r.search||!r.search.includes("#"),z("#","search","hash",r)));let o,l=""===e||""===r.pathname,s=l?"/":r.pathname;if(null==s)o=n;else{let e=t.length-1;if(!a&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}o=e>=0?t[e]:"/"}let c=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",{pathname:n,search:r="",hash:a=""}="string"===typeof e?d(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:L(r),hash:D(a)}}(r,o),u=s&&"/"!==s&&s.endsWith("/"),f=(l||"."===s)&&n.endsWith("/");return c.pathname.endsWith("/")||!u&&!f||(c.pathname+="/"),c}var N=e=>e.join("/").replace(/\/\/+/g,"/"),A=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),L=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",D=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function I(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}var M=["POST","PUT","PATCH","DELETE"],F=(new Set(M),["GET",...M]);new Set(F),Symbol("ResetLoaderData");var B=t.createContext(null);B.displayName="DataRouter";var $=t.createContext(null);$.displayName="DataRouterState";var U=t.createContext({isTransitioning:!1});U.displayName="ViewTransition";var H=t.createContext(new Map);H.displayName="Fetchers";var W=t.createContext(null);W.displayName="Await";var V=t.createContext(null);V.displayName="Navigation";var K=t.createContext(null);K.displayName="Location";var q=t.createContext({outlet:null,matches:[],isDataRoute:!1});q.displayName="Route";var G=t.createContext(null);G.displayName="RouteError";function Q(){return null!=t.useContext(K)}function Y(){return i(Q(),"useLocation() may be used only in the context of a <Router> component."),t.useContext(K).location}var J="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function X(e){t.useContext(V).static||t.useLayoutEffect(e)}function Z(){let{isDataRoute:e}=t.useContext(q);return e?function(){let{router:e}=ce("useNavigate"),n=de("useNavigate"),r=t.useRef(!1);X((()=>{r.current=!0}));let a=t.useCallback((async function(t){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};l(r.current,J),r.current&&("number"===typeof t?e.navigate(t):await e.navigate(t,{fromRouteId:n,...a}))}),[e,n]);return a}():function(){i(Q(),"useNavigate() may be used only in the context of a <Router> component.");let e=t.useContext(B),{basename:n,navigator:r}=t.useContext(V),{matches:a}=t.useContext(q),{pathname:o}=Y(),s=JSON.stringify(R(a)),c=t.useRef(!1);X((()=>{c.current=!0}));let u=t.useCallback((function(t){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(l(c.current,J),!c.current)return;if("number"===typeof t)return void r.go(t);let i=O(t,JSON.parse(s),o,"path"===a.relative);null==e&&"/"!==n&&(i.pathname="/"===i.pathname?n:N([n,i.pathname])),(a.replace?r.replace:r.push)(i,a.state,a)}),[n,r,s,o,e]);return u}()}t.createContext(null);function ee(){let{matches:e}=t.useContext(q),n=e[e.length-1];return n?n.params:{}}function te(e){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{matches:r}=t.useContext(q),{pathname:a}=Y(),o=JSON.stringify(R(r));return t.useMemo((()=>O(e,JSON.parse(o),a,"path"===n)),[e,o,a,n])}function ne(e,n,r,a){i(Q(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:s}=t.useContext(V),{matches:c}=t.useContext(q),u=c[c.length-1],f=u?u.params:{},h=u?u.pathname:"/",m=u?u.pathnameBase:"/",g=u&&u.route;{let e=g&&g.path||"";he(h,!g||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let x,y=Y();if(n){let e="string"===typeof n?d(n):n;i("/"===m||e.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${e.pathname}" was given in the \`location\` prop.`),x=e}else x=y;let b=x.pathname||"/",v=b;if("/"!==m){let e=m.replace(/^\//,"").split("/");v="/"+b.replace(/^\//,"").split("/").slice(e.length).join("/")}let w=!s&&r&&r.matches&&r.matches.length>0?r.matches:p(e,{pathname:v});l(g||null!=w,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),l(null==w||void 0!==w[w.length-1].route.element||void 0!==w[w.length-1].route.Component||void 0!==w[w.length-1].route.lazy,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let k=le(w&&w.map((e=>Object.assign({},e,{params:Object.assign({},f,e.params),pathname:N([m,o.encodeLocation?o.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?m:N([m,o.encodeLocation?o.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),c,r,a);return n&&k?t.createElement(K.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...x},navigationType:"POP"}},k):k}function re(){let e=fe(),n=I(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},i={padding:"2px 4px",backgroundColor:a},l=null;return console.error("Error handled by React Router default ErrorBoundary:",e),l=t.createElement(t.Fragment,null,t.createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),t.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",t.createElement("code",{style:i},"ErrorBoundary")," or"," ",t.createElement("code",{style:i},"errorElement")," prop on your route.")),t.createElement(t.Fragment,null,t.createElement("h2",null,"Unexpected Application Error!"),t.createElement("h3",{style:{fontStyle:"italic"}},n),r?t.createElement("pre",{style:o},r):null,l)}var ae=t.createElement(re,null),oe=class extends t.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?t.createElement(q.Provider,{value:this.props.routeContext},t.createElement(G.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ie(e){let{routeContext:n,match:r,children:a}=e,o=t.useContext(B);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),t.createElement(q.Provider,{value:n},a)}function le(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(null==e){if(!r)return null;if(r.errors)e=r.matches;else{if(0!==n.length||r.initialized||!(r.matches.length>0))return null;e=r.matches}}let a=e,o=r?.errors;if(null!=o){let e=a.findIndex((e=>e.route.id&&void 0!==o?.[e.route.id]));i(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),a=a.slice(0,Math.min(a.length,e+1))}let l=!1,s=-1;if(r)for(let t=0;t<a.length;t++){let e=a[t];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(s=t),e.route.id){let{loaderData:t,errors:n}=r,o=e.route.loader&&!t.hasOwnProperty(e.route.id)&&(!n||void 0===n[e.route.id]);if(e.route.lazy||o){l=!0,a=s>=0?a.slice(0,s+1):[a[0]];break}}}return a.reduceRight(((e,i,c)=>{let u,d=!1,f=null,p=null;r&&(u=o&&i.route.id?o[i.route.id]:void 0,f=i.route.errorElement||ae,l&&(s<0&&0===c?(he("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=i.route.hydrateFallbackElement||null)));let h=n.concat(a.slice(0,c+1)),m=()=>{let n;return n=u?f:d?p:i.route.Component?t.createElement(i.route.Component,null):i.route.element?i.route.element:e,t.createElement(ie,{match:i,routeContext:{outlet:e,matches:h,isDataRoute:null!=r},children:n})};return r&&(i.route.ErrorBoundary||i.route.errorElement||0===c)?t.createElement(oe,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()}),null)}function se(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ce(e){let n=t.useContext(B);return i(n,se(e)),n}function ue(e){let n=t.useContext($);return i(n,se(e)),n}function de(e){let n=function(e){let n=t.useContext(q);return i(n,se(e)),n}(e),r=n.matches[n.matches.length-1];return i(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function fe(){let e=t.useContext(G),n=ue("useRouteError"),r=de("useRouteError");return void 0!==e?e:n.errors?.[r]}var pe={};function he(e,t,n){t||pe[e]||(pe[e]=!0,l(!1,n))}t.memo((function(e){let{routes:t,future:n,state:r}=e;return ne(t,void 0,r,n)}));function me(e){i(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ge(e){let{basename:n="/",children:r=null,location:a,navigationType:o="POP",navigator:s,static:c=!1}=e;i(!Q(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=n.replace(/^\/*/,"/"),f=t.useMemo((()=>({basename:u,navigator:s,static:c,future:{}})),[u,s,c]);"string"===typeof a&&(a=d(a));let{pathname:p="/",search:h="",hash:m="",state:g=null,key:x="default"}=a,y=t.useMemo((()=>{let e=C(p,u);return null==e?null:{location:{pathname:e,search:h,hash:m,state:g,key:x},navigationType:o}}),[u,p,h,m,g,x,o]);return l(null!=y,`<Router basename="${u}"> is not able to match the URL "${p}${h}${m}" because it does not start with the basename, so the <Router> won't render anything.`),null==y?null:t.createElement(V.Provider,{value:f},t.createElement(K.Provider,{children:r,value:y}))}function xe(e){let{children:t,location:n}=e;return ne(ye(t),n)}t.Component;function ye(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=[];return t.Children.forEach(e,((e,a)=>{if(!t.isValidElement(e))return;let o=[...n,a];if(e.type===t.Fragment)return void r.push.apply(r,ye(e.props.children,o));i(e.type===me,`[${"string"===typeof e.type?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),i(!e.props.index||!e.props.children,"An index route cannot have child routes.");let l={id:e.props.id||o.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:!0===e.props.hasErrorBoundary||null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(l.children=ye(e.props.children,o)),r.push(l)})),r}var be="get",ve="application/x-www-form-urlencoded";function we(e){return null!=e&&"string"===typeof e.tagName}var ke=null;var Se=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function je(e){return null==e||Se.has(e)?e:(l(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ve}"`),null)}function Ee(e,t){let n,r,a,o,i;if(we(l=e)&&"form"===l.tagName.toLowerCase()){let i=e.getAttribute("action");r=i?C(i,t):null,n=e.getAttribute("method")||be,a=je(e.getAttribute("enctype"))||ve,o=new FormData(e)}else if(function(e){return we(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return we(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let i=e.form;if(null==i)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||i.getAttribute("action");if(r=l?C(l,t):null,n=e.getAttribute("formmethod")||i.getAttribute("method")||be,a=je(e.getAttribute("formenctype"))||je(i.getAttribute("enctype"))||ve,o=new FormData(i,e),!function(){if(null===ke)try{new FormData(document.createElement("form"),0),ke=!1}catch(e){ke=!0}return ke}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";o.append(`${e}x`,"0"),o.append(`${e}y`,"0")}else t&&o.append(t,r)}}else{if(we(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=be,r=null,a=ve,i=e}var l;return o&&"text/plain"===a&&(i=o,o=void 0),{action:r,method:n.toLowerCase(),encType:a,formData:o,body:i}}function _e(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}async function Te(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise((()=>{}))}}function Ce(e){return null!=e&&"string"===typeof e.page}function ze(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"===typeof e.imageSrcSet&&"string"===typeof e.imageSizes:"string"===typeof e.rel&&"string"===typeof e.href)}function Pe(e,t,n,r,a,o){let i=(e,t)=>!n[t]||e.route.id!==n[t].route.id,l=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===o?t.filter(((e,t)=>i(e,t)||l(e,t))):"data"===o?t.filter(((t,o)=>{let s=r.routes[t.route.id];if(!s||!s.hasLoader)return!1;if(i(t,o)||l(t,o))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"===typeof r)return r}return!0})):[]}function Re(e){return[...new Set(e)]}function Oe(e,t){let n=new Set,r=new Set(t);return e.reduce(((e,a)=>{if(t&&!Ce(a)&&"script"===a.as&&a.href&&r.has(a.href))return e;let o=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}(a));return n.has(o)||(n.add(o),e.push({key:o,link:a})),e}),[])}function Ne(e){return{__html:e}}Symbol("SingleFetchRedirect");function Ae(e){let t="string"===typeof e?new URL(e,"undefined"===typeof window?"server://singlefetch/":window.location.origin):e;return"/"===t.pathname?t.pathname="_root.data":t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}t.Component;function Le(e){let{error:n,isOutsideRemixApp:r}=e;console.error(n);let a,o=t.createElement("script",{dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."\n        );\n      '}});if(I(n))return t.createElement(De,{title:"Unhandled Thrown Response!"},t.createElement("h1",{style:{fontSize:"24px"}},n.status," ",n.statusText),o);if(n instanceof Error)0;else{let e=null==n?"Unknown Error":"object"===typeof n&&"toString"in n?n.toString():JSON.stringify(n);new Error(e)}return t.createElement(De,{title:"Application Error!",isOutsideRemixApp:r},t.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),t.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},a.stack),o)}function De(e){let{title:n,renderScripts:r,isOutsideRemixApp:a,children:o}=e,{routeModules:i}=$e();return i.root?.Layout&&!a?o:t.createElement("html",{lang:"en"},t.createElement("head",null,t.createElement("meta",{charSet:"utf-8"}),t.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),t.createElement("title",null,n)),t.createElement("body",null,t.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},o,r?t.createElement(Ge,null):null)))}function Ie(e){return!e}function Me(){let e=t.useContext(B);return _e(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Fe(){let e=t.useContext($);return _e(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Be=t.createContext(void 0);function $e(){let e=t.useContext(Be);return _e(e,"You must render this element inside a <HydratedRouter> element"),e}function Ue(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function He(e,t,n){if(n&&!qe)return[e[0]];if(t){let n=e.findIndex((e=>void 0!==t[e.route.id]));return e.slice(0,n+1)}return e}function We(e){let{page:n,...r}=e,{router:a}=Me(),o=t.useMemo((()=>p(a.routes,n,a.basename)),[a.routes,n,a.basename]);return o?t.createElement(Ke,{page:n,matches:o,...r}):null}function Ve(e){let{manifest:n,routeModules:r}=$e(),[a,o]=t.useState([]);return t.useEffect((()=>{let t=!1;return async function(e,t,n){let r=await Promise.all(e.map((async e=>{let r=t.routes[e.route.id];if(r){let e=await Te(r,n);return e.links?e.links():[]}return[]})));return Oe(r.flat(1).filter(ze).filter((e=>"stylesheet"===e.rel||"preload"===e.rel)).map((e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"})))}(e,n,r).then((e=>{t||o(e)})),()=>{t=!0}}),[e,n,r]),a}function Ke(e){let{page:n,matches:r,...a}=e,o=Y(),{manifest:i,routeModules:l}=$e(),{loaderData:s,matches:c}=Fe(),u=t.useMemo((()=>Pe(n,r,c,i,o,"data")),[n,r,c,i,o]),d=t.useMemo((()=>Pe(n,r,c,i,o,"assets")),[n,r,c,i,o]),f=t.useMemo((()=>{if(n===o.pathname+o.search+o.hash)return[];let e=new Set,t=!1;if(r.forEach((n=>{let r=i.routes[n.route.id];r&&r.hasLoader&&(!u.some((e=>e.route.id===n.route.id))&&n.route.id in s&&l[n.route.id]?.shouldRevalidate||r.hasClientLoader?t=!0:e.add(n.route.id))})),0===e.size)return[];let a=Ae(n);return t&&e.size>0&&a.searchParams.set("_routes",r.filter((t=>e.has(t.route.id))).map((e=>e.route.id)).join(",")),[a.pathname+a.search]}),[s,o,i,u,r,n,l]),p=t.useMemo((()=>function(e,t){return Re(e.map((e=>{let n=t.routes[e.route.id];if(!n)return[];let r=[n.module];return n.imports&&(r=r.concat(n.imports)),r})).flat(1))}(d,i)),[d,i]),h=Ve(d);return t.createElement(t.Fragment,null,f.map((e=>t.createElement("link",{key:e,rel:"prefetch",as:"fetch",href:e,...a}))),p.map((e=>t.createElement("link",{key:e,rel:"modulepreload",href:e,...a}))),h.map((e=>{let{key:n,link:r}=e;return t.createElement("link",{key:n,...r})})))}Be.displayName="FrameworkContext";var qe=!1;function Ge(e){let{manifest:n,serverHandoffString:r,isSpaMode:a,renderMeta:o}=$e(),{router:i,static:l,staticContext:s}=Me(),{matches:c}=Fe(),u=Ie(a);o&&(o.didRenderScripts=!0);let d=He(c,null,a);t.useEffect((()=>{0}),[]);let f=t.useMemo((()=>{let a=s?`window.__reactRouterContext = ${r};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",o=l?`${n.hmr?.runtime?`import ${JSON.stringify(n.hmr.runtime)};`:""}${u?"":`import ${JSON.stringify(n.url)}`};\n${d.map(((e,t)=>`import * as route${t} from ${JSON.stringify(n.routes[e.route.id].module)};`)).join("\n")}\n  ${u?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let n=new Set(t.state.matches.map((e=>e.route.id))),r=t.state.location.pathname.split("/").filter(Boolean),a=["/"];for(r.pop();r.length>0;)a.push(`/${r.join("/")}`),r.pop();a.forEach((e=>{let r=p(t.routes,e,t.basename);r&&r.forEach((e=>n.add(e.route.id)))}));let o=[...n].reduce(((t,n)=>Object.assign(t,{[n]:e.routes[n]})),{});return{...e,routes:o}}(n,i),null,2)};`:""}\n  window.__reactRouterRouteModules = {${d.map(((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`)).join(",")}};\n\nimport(${JSON.stringify(n.entry.module)});`:" ";return t.createElement(t.Fragment,null,t.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:Ne(a),type:void 0}),t.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:Ne(o),type:"module",async:!0}))}),[]),h=d.map((e=>{let t=n.routes[e.route.id];return t?(t.imports||[]).concat([t.module]):[]})).flat(1),m=qe?[]:n.entry.imports.concat(h);return qe?null:t.createElement(t.Fragment,null,u?null:t.createElement("link",{rel:"modulepreload",href:n.url,crossOrigin:e.crossOrigin}),t.createElement("link",{rel:"modulepreload",href:n.entry.module,crossOrigin:e.crossOrigin}),[...new Set(g)].map((n=>t.createElement("link",{key:n,rel:"modulepreload",href:n,crossOrigin:e.crossOrigin}))),f);var g}function Qe(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach((t=>{"function"===typeof t?t(e):null!=t&&(t.current=e)}))}}var Ye="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;try{Ye&&(window.__reactRouterVersion="7.1.5")}catch(sm){}function Je(e){let{basename:n,children:r,window:a}=e,i=t.useRef();null==i.current&&(i.current=o({window:a,v5Compat:!0}));let l=i.current,[s,c]=t.useState({action:l.action,location:l.location}),u=t.useCallback((e=>{t.startTransition((()=>c(e)))}),[c]);return t.useLayoutEffect((()=>l.listen(u)),[l,u]),t.createElement(ge,{basename:n,children:r,location:s.location,navigationType:s.action,navigator:l})}var Xe=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ze=t.forwardRef((function(e,n){let r,{onClick:a,discover:o="render",prefetch:s="none",relative:c,reloadDocument:d,replace:f,state:p,target:h,to:m,preventScrollReset:g,viewTransition:x,...y}=e,{basename:b}=t.useContext(V),v="string"===typeof m&&Xe.test(m),w=!1;if("string"===typeof m&&v&&(r=m,Ye))try{let e=new URL(window.location.href),t=m.startsWith("//")?new URL(e.protocol+m):new URL(m),n=C(t.pathname,b);t.origin===e.origin&&null!=n?m=n+t.search+t.hash:w=!0}catch(sm){l(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let k=function(e){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(Q(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:a}=t.useContext(V),{hash:o,pathname:l,search:s}=te(e,{relative:n}),c=l;return"/"!==r&&(c="/"===l?r:N([r,l])),a.createHref({pathname:c,search:s,hash:o})}(m,{relative:c}),[S,j,E]=function(e,n){let r=t.useContext(Be),[a,o]=t.useState(!1),[i,l]=t.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:u,onMouseLeave:d,onTouchStart:f}=n,p=t.useRef(null);t.useEffect((()=>{if("render"===e&&l(!0),"viewport"===e){let e=new IntersectionObserver((e=>{e.forEach((e=>{l(e.isIntersecting)}))}),{threshold:.5});return p.current&&e.observe(p.current),()=>{e.disconnect()}}}),[e]),t.useEffect((()=>{if(a){let e=setTimeout((()=>{l(!0)}),100);return()=>{clearTimeout(e)}}}),[a]);let h=()=>{o(!0)},m=()=>{o(!1),l(!1)};return r?"intent"!==e?[i,p,{}]:[i,p,{onFocus:Ue(s,h),onBlur:Ue(c,m),onMouseEnter:Ue(u,h),onMouseLeave:Ue(d,m),onTouchStart:Ue(f,h)}]:[!1,p,{}]}(s,y),_=function(e){let{target:n,replace:r,state:a,preventScrollReset:o,relative:i,viewTransition:l}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=Z(),c=Y(),d=te(e,{relative:i});return t.useCallback((t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,n)){t.preventDefault();let n=void 0!==r?r:u(c)===u(d);s(e,{replace:n,state:a,preventScrollReset:o,relative:i,viewTransition:l})}}),[c,s,d,r,a,n,e,o,i,l])}(m,{replace:f,state:p,target:h,preventScrollReset:g,relative:c,viewTransition:x});let T=t.createElement("a",{...y,...E,href:r||k,onClick:w||d?a:function(e){a&&a(e),e.defaultPrevented||_(e)},ref:Qe(n,j),target:h,"data-discover":v||"render"!==o?void 0:"true"});return S&&!v?t.createElement(t.Fragment,null,T,t.createElement(We,{page:k})):T}));Ze.displayName="Link",t.forwardRef((function(e,n){let{"aria-current":r="page",caseSensitive:a=!1,className:o="",end:l=!1,style:s,to:c,viewTransition:u,children:d,...f}=e,p=te(c,{relative:f.relative}),h=Y(),m=t.useContext($),{navigator:g,basename:x}=t.useContext(V),y=null!=m&&function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.useContext(U);i(null!=r,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=nt("useViewTransitionState"),o=te(e,{relative:n.relative});if(!r.isTransitioning)return!1;let l=C(r.currentLocation.pathname,a)||r.currentLocation.pathname,s=C(r.nextLocation.pathname,a)||r.nextLocation.pathname;return null!=_(o.pathname,s)||null!=_(o.pathname,l)}(p)&&!0===u,b=g.encodeLocation?g.encodeLocation(p).pathname:p.pathname,v=h.pathname,w=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;a||(v=v.toLowerCase(),w=w?w.toLowerCase():null,b=b.toLowerCase()),w&&x&&(w=C(w,x)||w);const k="/"!==b&&b.endsWith("/")?b.length-1:b.length;let S,j=v===b||!l&&v.startsWith(b)&&"/"===v.charAt(k),E=null!=w&&(w===b||!l&&w.startsWith(b)&&"/"===w.charAt(b.length)),T={isActive:j,isPending:E,isTransitioning:y},z=j?r:void 0;S="function"===typeof o?o(T):[o,j?"active":null,E?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let P="function"===typeof s?s(T):s;return t.createElement(Ze,{...f,"aria-current":z,className:S,ref:n,style:P,to:c,viewTransition:u},"function"===typeof d?d(T):d)})).displayName="NavLink";var et=t.forwardRef(((e,n)=>{let{discover:r="render",fetcherKey:a,navigate:o,reloadDocument:l,replace:s,state:c,method:d=be,action:f,onSubmit:p,relative:h,preventScrollReset:m,viewTransition:g,...x}=e,y=ot(),b=function(e){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{basename:r}=t.useContext(V),a=t.useContext(q);i(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),l={...te(e||".",{relative:n})},s=Y();if(null==e){l.search=s.search;let e=new URLSearchParams(l.search),t=e.getAll("index"),n=t.some((e=>""===e));if(n){e.delete("index"),t.filter((e=>e)).forEach((t=>e.append("index",t)));let n=e.toString();l.search=n?`?${n}`:""}}e&&"."!==e||!o.route.index||(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index");"/"!==r&&(l.pathname="/"===l.pathname?r:N([r,l.pathname]));return u(l)}(f,{relative:h}),v="get"===d.toLowerCase()?"get":"post",w="string"===typeof f&&Xe.test(f);return t.createElement("form",{ref:n,method:v,action:b,onSubmit:l?p:e=>{if(p&&p(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=t?.getAttribute("formmethod")||d;y(t||e.currentTarget,{fetcherKey:a,method:n,navigate:o,replace:s,state:c,relative:h,preventScrollReset:m,viewTransition:g})},...x,"data-discover":w||"render"!==r?void 0:"true"})}));function tt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function nt(e){let n=t.useContext(B);return i(n,tt(e)),n}et.displayName="Form";var rt=0,at=()=>`__${String(++rt)}__`;function ot(){let{router:e}=nt("useSubmit"),{basename:n}=t.useContext(V),r=de("useRouteId");return t.useCallback((async function(t){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{action:o,method:i,encType:l,formData:s,body:c}=Ee(t,n);if(!1===a.navigate){let t=a.fetcherKey||at();await e.fetch(t,r,a.action||o,{preventScrollReset:a.preventScrollReset,formData:s,body:c,formMethod:a.method||i,formEncType:a.encType||l,flushSync:a.flushSync})}else await e.navigate(a.action||o,{preventScrollReset:a.preventScrollReset,formData:s,body:c,formMethod:a.method||i,formEncType:a.encType||l,replace:a.replace,state:a.state,fromRouteId:r,flushSync:a.flushSync,viewTransition:a.viewTransition})}),[e,n,r])}new TextEncoder;var it=function(){return it=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},it.apply(this,arguments)};Object.create;function lt(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var st=n(324),ct=n.n(st),ut="-ms-",dt="-moz-",ft="-webkit-",pt="comm",ht="rule",mt="decl",gt="@keyframes",xt=Math.abs,yt=String.fromCharCode,bt=Object.assign;function vt(e){return e.trim()}function wt(e,t){return(e=t.exec(e))?e[0]:e}function kt(e,t,n){return e.replace(t,n)}function St(e,t,n){return e.indexOf(t,n)}function jt(e,t){return 0|e.charCodeAt(t)}function Et(e,t,n){return e.slice(t,n)}function _t(e){return e.length}function Tt(e){return e.length}function Ct(e,t){return t.push(e),e}function zt(e,t){return e.filter((function(e){return!wt(e,t)}))}var Pt=1,Rt=1,Ot=0,Nt=0,At=0,Lt="";function Dt(e,t,n,r,a,o,i,l){return{value:e,root:t,parent:n,type:r,props:a,children:o,line:Pt,column:Rt,length:i,return:"",siblings:l}}function It(e,t){return bt(Dt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Mt(e){for(;e.root;)e=It(e.root,{children:[e]});Ct(e,e.siblings)}function Ft(){return At=Nt>0?jt(Lt,--Nt):0,Rt--,10===At&&(Rt=1,Pt--),At}function Bt(){return At=Nt<Ot?jt(Lt,Nt++):0,Rt++,10===At&&(Rt=1,Pt++),At}function $t(){return jt(Lt,Nt)}function Ut(){return Nt}function Ht(e,t){return Et(Lt,e,t)}function Wt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Vt(e){return Pt=Rt=1,Ot=_t(Lt=e),Nt=0,[]}function Kt(e){return Lt="",e}function qt(e){return vt(Ht(Nt-1,Yt(91===e?e+2:40===e?e+1:e)))}function Gt(e){for(;(At=$t())&&At<33;)Bt();return Wt(e)>2||Wt(At)>3?"":" "}function Qt(e,t){for(;--t&&Bt()&&!(At<48||At>102||At>57&&At<65||At>70&&At<97););return Ht(e,Ut()+(t<6&&32==$t()&&32==Bt()))}function Yt(e){for(;Bt();)switch(At){case e:return Nt;case 34:case 39:34!==e&&39!==e&&Yt(At);break;case 40:41===e&&Yt(e);break;case 92:Bt()}return Nt}function Jt(e,t){for(;Bt()&&e+At!==57&&(e+At!==84||47!==$t()););return"/*"+Ht(t,Nt-1)+"*"+yt(47===e?e:Bt())}function Xt(e){for(;!Wt($t());)Bt();return Ht(e,Nt)}function Zt(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function en(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case mt:return e.return=e.return||e.value;case pt:return"";case gt:return e.return=e.value+"{"+Zt(e.children,r)+"}";case ht:if(!_t(e.value=e.props.join(",")))return""}return _t(n=Zt(e.children,r))?e.return=e.value+"{"+n+"}":""}function tn(e,t,n){switch(function(e,t){return 45^jt(e,0)?(((t<<2^jt(e,0))<<2^jt(e,1))<<2^jt(e,2))<<2^jt(e,3):0}(e,t)){case 5103:return ft+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ft+e+e;case 4789:return dt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ft+e+dt+e+ut+e+e;case 5936:switch(jt(e,t+11)){case 114:return ft+e+ut+kt(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ft+e+ut+kt(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ft+e+ut+kt(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ft+e+ut+e+e;case 6165:return ft+e+ut+"flex-"+e+e;case 5187:return ft+e+kt(e,/(\w+).+(:[^]+)/,ft+"box-$1$2"+ut+"flex-$1$2")+e;case 5443:return ft+e+ut+"flex-item-"+kt(e,/flex-|-self/g,"")+(wt(e,/flex-|baseline/)?"":ut+"grid-row-"+kt(e,/flex-|-self/g,""))+e;case 4675:return ft+e+ut+"flex-line-pack"+kt(e,/align-content|flex-|-self/g,"")+e;case 5548:return ft+e+ut+kt(e,"shrink","negative")+e;case 5292:return ft+e+ut+kt(e,"basis","preferred-size")+e;case 6060:return ft+"box-"+kt(e,"-grow","")+ft+e+ut+kt(e,"grow","positive")+e;case 4554:return ft+kt(e,/([^-])(transform)/g,"$1"+ft+"$2")+e;case 6187:return kt(kt(kt(e,/(zoom-|grab)/,ft+"$1"),/(image-set)/,ft+"$1"),e,"")+e;case 5495:case 3959:return kt(e,/(image-set\([^]*)/,ft+"$1$`$1");case 4968:return kt(kt(e,/(.+:)(flex-)?(.*)/,ft+"box-pack:$3"+ut+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ft+e+e;case 4200:if(!wt(e,/flex-|baseline/))return ut+"grid-column-align"+Et(e,t)+e;break;case 2592:case 3360:return ut+kt(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,wt(e.props,/grid-\w+-end/)}))?~St(e+(n=n[t].value),"span",0)?e:ut+kt(e,"-start","")+e+ut+"grid-row-span:"+(~St(n,"span",0)?wt(n,/\d+/):+wt(n,/\d+/)-+wt(e,/\d+/))+";":ut+kt(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return wt(e.props,/grid-\w+-start/)}))?e:ut+kt(kt(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return kt(e,/(.+)-inline(.+)/,ft+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_t(e)-1-t>6)switch(jt(e,t+1)){case 109:if(45!==jt(e,t+4))break;case 102:return kt(e,/(.+:)(.+)-([^]+)/,"$1"+ft+"$2-$3$1"+dt+(108==jt(e,t+3)?"$3":"$2-$3"))+e;case 115:return~St(e,"stretch",0)?tn(kt(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return kt(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,a,o,i,l){return ut+n+":"+r+l+(a?ut+n+"-span:"+(o?i:+i-+r)+l:"")+e}));case 4949:if(121===jt(e,t+6))return kt(e,":",":"+ft)+e;break;case 6444:switch(jt(e,45===jt(e,14)?18:11)){case 120:return kt(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ft+(45===jt(e,14)?"inline-":"")+"box$3$1"+ft+"$2$3$1"+ut+"$2box$3")+e;case 100:return kt(e,":",":"+ut)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return kt(e,"scroll-","scroll-snap-")+e}return e}function nn(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case mt:return void(e.return=tn(e.value,e.length,n));case gt:return Zt([It(e,{value:kt(e.value,"@","@"+ft)})],r);case ht:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(wt(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Mt(It(e,{props:[kt(t,/:(read-\w+)/,":-moz-$1")]})),Mt(It(e,{props:[t]})),bt(e,{props:zt(n,r)});break;case"::placeholder":Mt(It(e,{props:[kt(t,/:(plac\w+)/,":"+ft+"input-$1")]})),Mt(It(e,{props:[kt(t,/:(plac\w+)/,":-moz-$1")]})),Mt(It(e,{props:[kt(t,/:(plac\w+)/,ut+"input-$1")]})),Mt(It(e,{props:[t]})),bt(e,{props:zt(n,r)})}return""}))}}function rn(e){return Kt(an("",null,null,null,[""],e=Vt(e),0,[0],e))}function an(e,t,n,r,a,o,i,l,s){for(var c=0,u=0,d=i,f=0,p=0,h=0,m=1,g=1,x=1,y=0,b="",v=a,w=o,k=r,S=b;g;)switch(h=y,y=Bt()){case 40:if(108!=h&&58==jt(S,d-1)){-1!=St(S+=kt(qt(y),"&","&\f"),"&\f",xt(c?l[c-1]:0))&&(x=-1);break}case 34:case 39:case 91:S+=qt(y);break;case 9:case 10:case 13:case 32:S+=Gt(h);break;case 92:S+=Qt(Ut()-1,7);continue;case 47:switch($t()){case 42:case 47:Ct(ln(Jt(Bt(),Ut()),t,n,s),s);break;default:S+="/"}break;case 123*m:l[c++]=_t(S)*x;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+u:-1==x&&(S=kt(S,/\f/g,"")),p>0&&_t(S)-d&&Ct(p>32?sn(S+";",r,n,d-1,s):sn(kt(S," ","")+";",r,n,d-2,s),s);break;case 59:S+=";";default:if(Ct(k=on(S,t,n,c,u,a,l,b,v=[],w=[],d,o),o),123===y)if(0===u)an(S,t,k,k,v,o,d,l,w);else switch(99===f&&110===jt(S,3)?100:f){case 100:case 108:case 109:case 115:an(e,k,k,r&&Ct(on(e,k,k,0,0,a,l,b,a,v=[],d,w),w),a,w,d,l,r?v:w);break;default:an(S,k,k,k,[""],w,0,l,w)}}c=u=p=0,m=x=1,b=S="",d=i;break;case 58:d=1+_t(S),p=h;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==Ft())continue;switch(S+=yt(y),y*m){case 38:x=u>0?1:(S+="\f",-1);break;case 44:l[c++]=(_t(S)-1)*x,x=1;break;case 64:45===$t()&&(S+=qt(Bt())),f=$t(),u=d=_t(b=S+=Xt(Ut())),y++;break;case 45:45===h&&2==_t(S)&&(m=0)}}return o}function on(e,t,n,r,a,o,i,l,s,c,u,d){for(var f=a-1,p=0===a?o:[""],h=Tt(p),m=0,g=0,x=0;m<r;++m)for(var y=0,b=Et(e,f+1,f=xt(g=i[m])),v=e;y<h;++y)(v=vt(g>0?p[y]+" "+b:kt(b,/&\f/g,p[y])))&&(s[x++]=v);return Dt(e,t,n,0===a?ht:l,s,c,u,d)}function ln(e,t,n,r){return Dt(e,t,n,pt,yt(At),Et(e,2,-2),0,r)}function sn(e,t,n,r,a){return Dt(e,t,n,mt,Et(e,0,r),Et(e,r+1,-1),r,a)}var cn={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},un="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",dn="active",fn="data-styled-version",pn="6.1.15",hn="/*!sc*/\n",mn="undefined"!=typeof window&&"HTMLElement"in window,gn=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),xn=(new Set,Object.freeze([])),yn=Object.freeze({});function bn(e,t,n){return void 0===n&&(n=yn),e.theme!==n.theme&&e.theme||t||n.theme}var vn=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),wn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,kn=/(^-|-$)/g;function Sn(e){return e.replace(wn,"-").replace(kn,"")}var jn=/(a)(d)/gi,En=function(e){return String.fromCharCode(e+(e>25?39:97))};function _n(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=En(t%52)+n;return(En(t%52)+n).replace(jn,"$1-$2")}var Tn,Cn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},zn=function(e){return Cn(5381,e)};function Pn(e){return _n(zn(e)>>>0)}function Rn(e){return e.displayName||e.name||"Component"}function On(e){return"string"==typeof e&&!0}var Nn="function"==typeof Symbol&&Symbol.for,An=Nn?Symbol.for("react.memo"):60115,Ln=Nn?Symbol.for("react.forward_ref"):60112,Dn={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},In={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Mn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Fn=((Tn={})[Ln]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Tn[An]=Mn,Tn);function Bn(e){return("type"in(t=e)&&t.type.$$typeof)===An?Mn:"$$typeof"in e?Fn[e.$$typeof]:Dn;var t}var $n=Object.defineProperty,Un=Object.getOwnPropertyNames,Hn=Object.getOwnPropertySymbols,Wn=Object.getOwnPropertyDescriptor,Vn=Object.getPrototypeOf,Kn=Object.prototype;function qn(e,t,n){if("string"!=typeof t){if(Kn){var r=Vn(t);r&&r!==Kn&&qn(e,r,n)}var a=Un(t);Hn&&(a=a.concat(Hn(t)));for(var o=Bn(e),i=Bn(t),l=0;l<a.length;++l){var s=a[l];if(!(s in In||n&&n[s]||i&&s in i||o&&s in o)){var c=Wn(t,s);try{$n(e,s,c)}catch(e){}}}}return e}function Gn(e){return"function"==typeof e}function Qn(e){return"object"==typeof e&&"styledComponentId"in e}function Yn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Jn(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Xn(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Zn(e,t,n){if(void 0===n&&(n=!1),!n&&!Xn(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Zn(e[r],t[r]);else if(Xn(t))for(var r in t)e[r]=Zn(e[r],t[r]);return e}function er(e,t){Object.defineProperty(e,"toString",{value:t})}function tr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var nr=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)if((a<<=1)<0)throw tr(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var o=r;o<a;o++)this.groupSizes[o]=0}for(var i=this.indexOfGroup(e+1),l=(o=0,t.length);o<l;o++)this.tag.insertRule(i,t[o])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,o=r;o<a;o++)t+="".concat(this.tag.getRule(o)).concat(hn);return t},e}(),rr=new Map,ar=new Map,or=1,ir=function(e){if(rr.has(e))return rr.get(e);for(;ar.has(or);)or++;var t=or++;return rr.set(e,t),ar.set(t,e),t},lr=function(e,t){or=t+1,rr.set(e,t),ar.set(t,e)},sr="style[".concat(un,"][").concat(fn,'="').concat(pn,'"]'),cr=new RegExp("^".concat(un,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ur=function(e,t,n){for(var r,a=n.split(","),o=0,i=a.length;o<i;o++)(r=a[o])&&e.registerName(t,r)},dr=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(hn),a=[],o=0,i=r.length;o<i;o++){var l=r[o].trim();if(l){var s=l.match(cr);if(s){var c=0|parseInt(s[1],10),u=s[2];0!==c&&(lr(u,c),ur(e,u,s[3]),e.getTag().insertRules(c,a)),a.length=0}else a.push(l)}}},fr=function(e){for(var t=document.querySelectorAll(sr),n=0,r=t.length;n<r;n++){var a=t[n];a&&a.getAttribute(un)!==dn&&(dr(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function pr(){return n.nc}var hr=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(un,"]")));return t[t.length-1]}(n),o=void 0!==a?a.nextSibling:null;r.setAttribute(un,dn),r.setAttribute(fn,pn);var i=pr();return i&&r.setAttribute("nonce",i),n.insertBefore(r,o),r},mr=function(){function e(e){this.element=hr(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var a=t[n];if(a.ownerNode===e)return a}throw tr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),gr=function(){function e(e){this.element=hr(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),xr=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),yr=mn,br={isServer:!mn,useCSSOMInjection:!gn},vr=function(){function e(e,t,n){void 0===e&&(e=yn),void 0===t&&(t={});var r=this;this.options=it(it({},br),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&mn&&yr&&(yr=!1,fr(this)),er(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=function(n){var a=function(e){return ar.get(e)}(n);if(void 0===a)return"continue";var o=e.names.get(a),i=t.getGroup(n);if(void 0===o||!o.size||0===i.length)return"continue";var l="".concat(un,".g").concat(n,'[id="').concat(a,'"]'),s="";void 0!==o&&o.forEach((function(e){e.length>0&&(s+="".concat(e,","))})),r+="".concat(i).concat(l,'{content:"').concat(s,'"}').concat(hn)},o=0;o<n;o++)a(o);return r}(r)}))}return e.registerId=function(e){return ir(e)},e.prototype.rehydrate=function(){!this.server&&mn&&fr(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(it(it({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new xr(n):t?new mr(n):new gr(n)}(this.options),new nr(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(ir(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(ir(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(ir(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),wr=/&/g,kr=/^\s*\/\/.*$/gm;function Sr(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Sr(e.children,t)),e}))}function jr(e){var t,n,r,a=void 0===e?yn:e,o=a.options,i=void 0===o?yn:o,l=a.plugins,s=void 0===l?xn:l,c=function(e,r,a){return a.startsWith(n)&&a.endsWith(n)&&a.replaceAll(n,"").length>0?".".concat(t):e},u=s.slice();u.push((function(e){e.type===ht&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(wr,n).replace(r,c))})),i.prefix&&u.push(nn),u.push(en);var d=function(e,a,o,l){void 0===a&&(a=""),void 0===o&&(o=""),void 0===l&&(l="&"),t=l,n=a,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(kr,""),c=rn(o||a?"".concat(o," ").concat(a," { ").concat(s," }"):s);i.namespace&&(c=Sr(c,i.namespace));var d,f=[];return Zt(c,function(e){var t=Tt(e);return function(n,r,a,o){for(var i="",l=0;l<t;l++)i+=e[l](n,r,a,o)||"";return i}}(u.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return d.hash=s.length?s.reduce((function(e,t){return t.name||tr(15),Cn(e,t.name)}),5381).toString():"",d}var Er=new vr,_r=jr(),Tr=t.createContext({shouldForwardProp:void 0,styleSheet:Er,stylis:_r}),Cr=(Tr.Consumer,t.createContext(void 0));function zr(){return(0,t.useContext)(Tr)}function Pr(e){var n=(0,t.useState)(e.stylisPlugins),r=n[0],a=n[1],o=zr().styleSheet,i=(0,t.useMemo)((function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,o]),l=(0,t.useMemo)((function(){return jr({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})}),[e.enableVendorPrefixes,e.namespace,r]);(0,t.useEffect)((function(){ct()(r,e.stylisPlugins)||a(e.stylisPlugins)}),[e.stylisPlugins]);var s=(0,t.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:l}}),[e.shouldForwardProp,i,l]);return t.createElement(Tr.Provider,{value:s},t.createElement(Cr.Provider,{value:l},e.children))}var Rr=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=_r);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,er(this,(function(){throw tr(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=_r),this.name+e.hash},e}(),Or=function(e){return e>="A"&&e<="Z"};function Nr(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Or(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Ar=function(e){return null==e||!1===e||""===e},Lr=function(e){var t,n,r=[];for(var a in e){var o=e[a];e.hasOwnProperty(a)&&!Ar(o)&&(Array.isArray(o)&&o.isCss||Gn(o)?r.push("".concat(Nr(a),":"),o,";"):Xn(o)?r.push.apply(r,lt(lt(["".concat(a," {")],Lr(o),!1),["}"],!1)):r.push("".concat(Nr(a),": ").concat((t=a,null==(n=o)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in cn||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Dr(e,t,n,r){return Ar(e)?[]:Qn(e)?[".".concat(e.styledComponentId)]:Gn(e)?!Gn(a=e)||a.prototype&&a.prototype.isReactComponent||!t?[e]:Dr(e(t),t,n,r):e instanceof Rr?n?(e.inject(n,r),[e.getName(r)]):[e]:Xn(e)?Lr(e):Array.isArray(e)?Array.prototype.concat.apply(xn,e.map((function(e){return Dr(e,t,n,r)}))):[e.toString()];var a}function Ir(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Gn(n)&&!Qn(n))return!1}return!0}var Mr=zn(pn),Fr=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Ir(e),this.componentId=t,this.baseHash=Cn(Mr,t),this.baseStyle=n,vr.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Yn(r,this.staticRulesId);else{var a=Jn(Dr(this.rules,e,t,n)),o=_n(Cn(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,o)){var i=n(a,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,i)}r=Yn(r,o),this.staticRulesId=o}else{for(var l=Cn(this.baseHash,n.hash),s="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)s+=u;else if(u){var d=Jn(Dr(u,e,t,n));l=Cn(l,d+c),s+=d}}if(s){var f=_n(l>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(s,".".concat(f),void 0,this.componentId)),r=Yn(r,f)}}return r},e}(),Br=t.createContext(void 0);Br.Consumer;var $r={};new Set;function Ur(e,n,r){var a=Qn(e),o=e,i=!On(e),l=n.attrs,s=void 0===l?xn:l,c=n.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":Sn(e);$r[n]=($r[n]||0)+1;var r="".concat(n,"-").concat(Pn(pn+n+$r[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):c,d=n.displayName,f=void 0===d?function(e){return On(e)?"styled.".concat(e):"Styled(".concat(Rn(e),")")}(e):d,p=n.displayName&&n.componentId?"".concat(Sn(n.displayName),"-").concat(n.componentId):n.componentId||u,h=a&&o.attrs?o.attrs.concat(s).filter(Boolean):s,m=n.shouldForwardProp;if(a&&o.shouldForwardProp){var g=o.shouldForwardProp;if(n.shouldForwardProp){var x=n.shouldForwardProp;m=function(e,t){return g(e,t)&&x(e,t)}}else m=g}var y=new Fr(r,p,a?o.componentStyle:void 0);function b(e,n){return function(e,n,r){var a=e.attrs,o=e.componentStyle,i=e.defaultProps,l=e.foldedComponentIds,s=e.styledComponentId,c=e.target,u=t.useContext(Br),d=zr(),f=e.shouldForwardProp||d.shouldForwardProp,p=bn(n,u,i)||yn,h=function(e,t,n){for(var r,a=it(it({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var i=Gn(r=e[o])?r(a):r;for(var l in i)a[l]="className"===l?Yn(a[l],i[l]):"style"===l?it(it({},a[l]),i[l]):i[l]}return t.className&&(a.className=Yn(a.className,t.className)),a}(a,n,p),m=h.as||c,g={};for(var x in h)void 0===h[x]||"$"===x[0]||"as"===x||"theme"===x&&h.theme===p||("forwardedAs"===x?g.as=h.forwardedAs:f&&!f(x,m)||(g[x]=h[x]));var y=function(e,t){var n=zr();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,h),b=Yn(l,s);return y&&(b+=" "+y),h.className&&(b+=" "+h.className),g[On(m)&&!vn.has(m)?"class":"className"]=b,r&&(g.ref=r),(0,t.createElement)(m,g)}(v,e,n)}b.displayName=f;var v=t.forwardRef(b);return v.attrs=h,v.componentStyle=y,v.displayName=f,v.shouldForwardProp=m,v.foldedComponentIds=a?Yn(o.foldedComponentIds,o.styledComponentId):"",v.styledComponentId=p,v.target=a?o.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,a=t;r<a.length;r++)Zn(e,a[r],!0);return e}({},o.defaultProps,e):e}}),er(v,(function(){return".".concat(v.styledComponentId)})),i&&qn(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function Hr(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var Wr=function(e){return Object.assign(e,{isCss:!0})};function Vr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Gn(e)||Xn(e))return Wr(Dr(Hr(xn,lt([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Dr(r):Wr(Dr(Hr(r,t)))}function Kr(e,t,n){if(void 0===n&&(n=yn),!t)throw tr(1,t);var r=function(r){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,n,Vr.apply(void 0,lt([r],a,!1)))};return r.attrs=function(r){return Kr(e,t,it(it({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Kr(e,t,it(it({},n),r))},r}var qr=function(e){return Kr(Ur,e)},Gr=qr;vn.forEach((function(e){Gr[e]=qr(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Ir(e),vr.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var a=r(Jn(Dr(this.rules,t,n,r)),""),o=this.componentId+e;n.insertRules(o,o,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&vr.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=pr(),r=Jn([n&&'nonce="'.concat(n,'"'),"".concat(un,'="true"'),"".concat(fn,'="').concat(pn,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw tr(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw tr(2);var r=e.instance.toString();if(!r)return[];var a=((n={})[un]="",n[fn]=pn,n.dangerouslySetInnerHTML={__html:r},n),o=pr();return o&&(a.nonce=o),[t.createElement("style",it({},a,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new vr({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw tr(2);return t.createElement(Pr,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw tr(3)}})(),"__sc-".concat(un,"__");const Qr=n.p+"static/media/fastbetLogo.c3a51433e63afd5453d0.png";var Yr=n(579);const Jr=()=>{const[e,n]=(0,t.useState)(""),[r,a]=(0,t.useState)(""),[o,i]=(0,t.useState)(""),[l,s]=(0,t.useState)(""),[c,u]=(0,t.useState)(""),[d,f]=(0,t.useState)(!1),p=Z();(0,t.useEffect)((()=>{const e=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l),t=c.length>=6,n=o.trim().length>0;f(e&&t&&n)}),[o,l,c]);return(0,Yr.jsxs)(Xr,{children:[(0,Yr.jsxs)(Zr,{children:[(0,Yr.jsx)(ta,{src:Qr,alt:"Shri Matka Logo"}),(0,Yr.jsxs)(na,{children:["For Better Experience",(0,Yr.jsx)("br",{}),"Download Shri Matka App"]}),(0,Yr.jsx)(ra,{children:"Create your account"}),(0,Yr.jsxs)(aa,{onSubmit:async e=>{e.preventDefault();const t={username:o,email:l,password:c};try{const e=await fetch("http://localhost:4000/api/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),r=await e.json();e.ok?(a("User registered successfully!"),n(""),p("/login")):(n(r.message||"Failed to register user"),a(""))}catch(r){n("An error occurred. Please try again."),a("")}},children:[(0,Yr.jsx)(oa,{children:"UserName"}),(0,Yr.jsx)(ia,{type:"text",name:"username",placeholder:"Enter Your Name",value:o,onChange:e=>i(e.target.value)}),(0,Yr.jsx)(oa,{children:"Email"}),(0,Yr.jsx)(ia,{type:"email",name:"email",placeholder:"Enter Your Email",value:l,onChange:e=>s(e.target.value)}),(0,Yr.jsx)(oa,{children:"Password"}),(0,Yr.jsx)(ia,{type:"password",name:"password",placeholder:"Min 6 Digit Password",value:c,onChange:e=>u(e.target.value)}),(0,Yr.jsx)(la,{type:"submit",disabled:!d,children:"Sign Up"}),e&&(0,Yr.jsx)(ca,{children:e}),r&&(0,Yr.jsx)(ua,{children:r}),(0,Yr.jsx)("p",{children:"Already have an account?"}),(0,Yr.jsx)(Ze,{to:"/login",children:(0,Yr.jsx)(la,{children:"Login"})})]})]}),(0,Yr.jsx)(ea,{}),(0,Yr.jsx)(sa,{href:"https://wa.me/1234567890",target:"_blank",rel:"noopener noreferrer"})]})},Xr=Gr.div`
  min-height: 100vh;
  display: flex;
  background: linear-gradient(#0B66FF, #0057D9); /* Overall page background */
`,Zr=Gr.div`
  width: 30%;
  min-width: 320px;
  background-color: #003C7B;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  color: #fff;
`,ea=Gr.div`
  flex: 1;
`,ta=Gr.img`
  width: 120px;
  height: auto;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  background: yellow;
  height: 100px;
  width: 100px;
`,na=Gr.button`
  background-color: transparent;
  color: #fff;
  border: 2px solid white;
  padding: 0.2rem 2rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
  letter-spacing: 1px;
  font-size: 1rem;
  animation: changeBgColor 1.5s infinite;

  @keyframes changeBgColor {
    0% { background-color: #e53935; }
    50% { background-color: #003C7B; }
    100% { background-color: #e53935; }
  }
`,ra=Gr.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`,aa=Gr.form`
  width: 100%;
  max-width: 80%;
  display: flex;
  flex-direction: column;
`,oa=Gr.label`
  text-align: left;
  margin-bottom: 0.25rem;
  font-weight: bold;
  color: #fff;
`,ia=Gr.input`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  text-align: left;

  &:focus {
    outline: none;
    border-color: #0B66FF;
  }
`,la=Gr.button`
  background-color: #007BFF;
  color: #fff;
  border: none;
  padding: 0.75rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  width: 100%;
  &:hover {
    background-color: #005ce6;
  }
`,sa=Gr.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background: url('https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg')
    no-repeat center center;
  background-size: cover;
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(0,0,0,0.3);
`,ca=Gr.p`
  color: red;
  font-weight: bold;
  text-align: center;
`,ua=Gr.p`
  color: green;
  font-weight: bold;
  text-align: center;
`,da=()=>{const[e,n]=(0,t.useState)(""),[r,a]=(0,t.useState)(""),[o,i]=(0,t.useState)(""),l=Z();return(0,Yr.jsxs)(fa,{children:[(0,Yr.jsxs)(pa,{children:[(0,Yr.jsx)(ma,{src:Qr,alt:"Shri Matka Logo"}),(0,Yr.jsxs)(ga,{children:["For Better Experience",(0,Yr.jsx)("br",{}),"Download Shri Matka App"]}),(0,Yr.jsx)(xa,{children:"Login with Email Id"}),(0,Yr.jsxs)(ya,{onSubmit:async t=>{t.preventDefault();try{const t=await fetch("http://localhost:4000/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:r})}),n=await t.json();t.ok?(localStorage.setItem("user",JSON.stringify(n.user)),localStorage.setItem("wallet",JSON.stringify(n.wallet)),localStorage.setItem("history",JSON.stringify(n.history)),i(`Welcome, ${n.user.username}!`),l("/dashboard"),window.location.reload()):i(n.message||"Login failed. Please try again.")}catch(n){i("Error connecting to server. Please try again later.")}},children:[(0,Yr.jsx)(ba,{children:"Username"}),(0,Yr.jsx)(va,{type:"text",name:"username",placeholder:"Enter Your name",value:e,onChange:e=>n(e.target.value),required:!0}),(0,Yr.jsx)(ba,{children:"Password"}),(0,Yr.jsx)(va,{type:"password",name:"password",placeholder:"Min 6 Digit Password",value:r,onChange:e=>a(e.target.value),required:!0}),(0,Yr.jsx)(wa,{type:"submit",children:"LogIn"}),o&&(0,Yr.jsx)(Sa,{children:o}),(0,Yr.jsx)("p",{children:"Don't have an Account?"}),(0,Yr.jsx)(Ze,{to:"/signup",children:(0,Yr.jsx)(wa,{children:"Create new Account"})})]})]}),(0,Yr.jsx)(ha,{}),(0,Yr.jsx)(ka,{href:"https://wa.me/1234567890",target:"_blank",rel:"noopener noreferrer"})]})},fa=Gr.div`
  min-height: 100vh;
  display: flex;
  background: linear-gradient(#0B66FF, #0057D9);
`,pa=Gr.div`
  width: 30%;
  min-width: 320px;
  background-color: #003C7B;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  color: #fff;
`,ha=Gr.div`
  flex: 1;
`,ma=Gr.img`
  width: 120px;
  height: auto;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  background: yellow;
  height: 100px;
  width: 100px;
`,ga=Gr.button`
  background-color: transparent;
  color: #fff;
  border: 2px solid white;
  padding: 0.2rem 2rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
  letter-spacing: 1px;
  font-size: 1rem;
  animation: changeBgColor 1.5s infinite;
  @keyframes changeBgColor {
    0% { background-color: #e53935; }
    50% { background-color: #003C7B; }
    100% { background-color: #e53935; }
  }
`,xa=Gr.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`,ya=Gr.form`
  width: 100%;
  max-width: 80%;
  display: flex;
  flex-direction: column;
`,ba=Gr.label`
  text-align: left;
  margin-bottom: 0.25rem;
  font-weight: bold;
  color: #fff;
`,va=Gr.input`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  text-align: left;
  &:focus {
    outline: none;
    border-color: #0B66FF;
  }
`,wa=Gr.button`
  background-color: #007BFF;
  color: #fff;
  border: none;
  padding: 0.75rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  width: 100%;
  &:hover {
    background-color: #005ce6;
  }
`,ka=Gr.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background: url('https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg')
    no-repeat center center;
  background-size: cover;
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(0,0,0,0.3);
`,Sa=Gr.p`
  color: ${e=>e.children.includes("Error")?"red":"green"};
  font-weight: bold;
  text-align: center;
`;var ja={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ea=t.createContext&&t.createContext(ja),_a=["attr","size","title"];function Ta(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Ca(){return Ca=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ca.apply(this,arguments)}function za(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Pa(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?za(Object(n),!0).forEach((function(t){Ra(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):za(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Ra(e,t,n){return t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Oa(e){return e&&e.map(((e,n)=>t.createElement(e.tag,Pa({key:n},e.attr),Oa(e.child))))}function Na(e){return n=>t.createElement(Aa,Ca({attr:Pa({},e.attr)},n),Oa(e.child))}function Aa(e){var n=n=>{var r,{attr:a,size:o,title:i}=e,l=Ta(e,_a),s=o||n.size||"1em";return n.className&&(r=n.className),e.className&&(r=(r?r+" ":"")+e.className),t.createElement("svg",Ca({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,a,l,{className:r,style:Pa(Pa({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&t.createElement("title",null,i),e.children)};return void 0!==Ea?t.createElement(Ea.Consumer,null,(e=>n(e))):n(ja)}function La(e){return Na({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(e)}function Da(e){return Na({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function Ia(e){return Na({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(e)}function Ma(e){return Na({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z"},child:[]}]})(e)}function Fa(e){return Na({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"},child:[]}]})(e)}function Ba(e){return Na({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"},child:[]}]})(e)}function $a(e){return Na({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(e)}function Ua(e){return Na({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}function Ha(e){return Na({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"},child:[]}]})(e)}function Wa(e){return Na({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(e)}function Va(e){return Na({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM96 424c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm96-192c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm128 368c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"},child:[]}]})(e)}function Ka(e){return Na({tag:"svg",attr:{viewBox:"0 0 288 512"},child:[{tag:"path",attr:{d:"M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"},child:[]}]})(e)}function qa(e){return Na({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"},child:[]}]})(e)}function Ga(e){return Na({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(e)}function Qa(e){return Na({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"},child:[]}]})(e)}function Ya(e){return Na({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zM48 400v-64c35.35 0 64 28.65 64 64H48zm0-224v-64h64c0 35.35-28.65 64-64 64zm272 176c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 48h-64c0-35.35 28.65-64 64-64v64zm0-224c-35.35 0-64-28.65-64-64h64v64z"},child:[]}]})(e)}function Ja(e){return Na({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"},child:[]}]})(e)}function Xa(e){return Na({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(e)}function Za(e){return Na({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"},child:[]}]})(e)}function eo(e){return Na({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"},child:[]}]})(e)}function to(e){return Na({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}function no(e){return Na({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"},child:[]}]})(e)}function ro(e){return Na({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"},child:[]}]})(e)}function ao(e){return Na({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a7.996 7.996 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z"},child:[]}]})(e)}function oo(e){return Na({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"},child:[]}]})(e)}function io(e){return Na({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(e)}function lo(e){return Na({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"},child:[]}]})(e)}const so=Gr.nav`
  background-color: #0a3b66;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  box-sizing: border-box;
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  z-index: 1000;
`,co=Gr.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
`,uo=Gr.ul`
  display: flex;
  list-style: none;
  gap: 10px;
  width: 90%;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${e=>{let{open:t}=e;return t?"0":"-100%"}}; /* Slide-in effect */
    width: 60%;
    height: 100vh;
    background: #0a3b66;
    flex-direction: column;
    text-align: center;
    padding: 80px 20px;
    transition: right 0.4s ease-in-out; 
    // box-shadow: ${e=>{let{open:t}=e;return t?"-5px 0px 15px rgba(0,0,0,0.3)":"none"}};
  }
`,fo=Gr.li`
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding: 10px 20px;
  &:hover {
    color: lightgray;
  }
  &.active {
    color: limegreen;
  }
`,po=Gr.div`
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-right: 20px;
  &:hover {
    color: lightgray;
  }


  @media (max-width: 768px) {
    font-size:0.8rem;
      margin-right: 10px;
  }
`,ho=Gr.div`
  color: white;
  // float:right;
  margin-top:0.4rem;
  font-size: 24px;
  cursor: pointer;
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    z-index: 1100;

  }
`,mo=Gr.div`
display:flex;
gap:1rem;
align-items:center;


`,go=()=>{const[e,n]=(0,t.useState)(!1),[r,a]=(0,t.useState)("#home-page"),o=(0,t.useMemo)((()=>["#home","#about","#rate-chart","#result","#time-table","#how-to-play","#contact-us"]),[]);return(0,t.useEffect)((()=>{const e=()=>{o.forEach((e=>{const t=document.querySelector(e);if(t){const n=t.offsetTop-80,r=n+t.offsetHeight;window.scrollY>=n&&window.scrollY<r&&a(e)}}))};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[o]),(0,Yr.jsxs)(so,{children:[(0,Yr.jsx)(co,{src:Qr,alt:"Shri Matka Logo"}),(0,Yr.jsx)(uo,{open:e,children:o.map(((e,t)=>(0,Yr.jsx)(fo,{className:r===e?"active":"",onClick:()=>n(!1),children:"#home"===e?(0,Yr.jsx)(Ze,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"HOME"}):e.replace("#","").replace(/-/g," ").toUpperCase()},t)))}),(0,Yr.jsxs)(mo,{children:[(0,Yr.jsx)(ho,{onClick:()=>n(!e),children:e?(0,Yr.jsx)(to,{}):(0,Yr.jsx)(Ua,{})}),(0,Yr.jsx)(Ze,{to:"/signup",children:(0,Yr.jsxs)(po,{children:[(0,Yr.jsx)(oo,{})," SignUp"]})})]})]})},xo=n.p+"static/media/read_more.e6aa1c2fc8c10e119388.png",yo=Gr.div`
  width: 100vw;
  height: 100%;
  background: #003366;
`,bo=Gr.div`
  width: 100vw;
  padding: 5rem 2rem;
  background: #003366;
  box-sizing:border-box;

`,vo=Gr.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: white;
  text-align: left;
  @media (max-width: 768px) {
    flex-direction:column;
     font-size: 2.5rem;
  }
`,wo=Gr.p`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: white;
  text-align: left;
  @media (max-width: 768px) {
    flex-direction:column;
     font-size: 1.5rem;
  }
`,ko=Gr.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  flex-wrap:wrap;
  justify-content:start;
`,So=Gr.button`
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  display:flex;
  gap:10px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    opacity: 0.8;
  }
    

`,jo=Gr(So)`
  background-color: #3b5998;
`,Eo=Gr(So)`
  background-color: #e4405f;
`,_o=Gr(So)`
  background-color: #25d366;
`,To=Gr.div`
  width: 95%;
  margin: auto;
  display: flex;
  justify-content:space-between;
   @media (max-width: 768px) {
    flex-direction:column;
      width: 100%;
  }
`,Co=Gr.section`
  width: 60%;
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-sizing:border-box;
  p {
    font-size: 1rem;
    font-style: italic;
    line-height: 1.5rem;
    text-align: left;
  }
  @media (max-width: 768px) {
    width:95%;
      margin: auto;
  }
`,zo=Gr.button`
  background-color: rgb(7, 40, 84);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  gap: 10px;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: rgb(5, 34, 71);
  }
`,Po=Gr.div`
  margin-top: 20px;
  text-align: left;
  h5 {
    font-size: 1.5rem;
    text-align: left;
  }
  h5, h6 {
    margin: 0;
    padding: 5px 0;
  }
  h6 {
    font-size: 1rem;
    text-align: left;
  }
  ul {
    padding-left: 20px;
  }
  li {
    margin-bottom: 10px;
  }
`,Ro=Gr.div`
  background: grey;
  width: 100%;
  height: 400px;
`,Oo=Gr.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap:wrap;
  align-items: center;
//  padding-top:80px;
  justify-content: center;
  text-align: center;
  color: white;
  @media (max-width: 768px) {
     width: 95%;
    
  }
`,No=Gr.div`
  box-sizing: border-box;
`,Ao=Gr.h2`
  font-size: 40px;
  font-weight: bold;
  width: 90%;
  margin: auto;
  color: #ffcc00;
  text-transform: uppercase;
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.8);

  padding: 15px;
  display: inline-block;

  @media (max-width: 768px) {
    font-size: 36px;
    padding: 40px 10px;

  }
`,Lo=Gr.div`
  margin: 30px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 15px;
   
  
`,Do=Gr.button`
  background: yellow;
  color: black;
  width: 450px;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 15px 20px;
  border: 3px solid #fff;
  border-radius: 50px;
  cursor: pointer;
  
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
  @media (max-width: 768px) {
    width: 90%;
    font-size: 18px;
  }
`,Io=Gr.p`
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
  letter-spacing: 1.5px;
  font-family: Georgia;
 text-decoration-color: #282c34;
  @media (max-width: 768px) {
    font-size: 20px;
    padding: 8px 12px;
  }
`,Mo=Gr.h3`
  font-size: 25px;
  font-weight: normal;
  margin-top: 2rem;
  text-transform: uppercase;
  color: white;
  font-family: Poppins;
  letter-spacing: 1px;
  display: inline-block;
  border-radius: 10px;
  @media (max-width: 768px) {
    font-size: 28px;
    letter-spacing: 2px;
  }
`,Fo=Gr.span`
display:block;
@media (max-width: 768px) {
   display:none;
  }
`,Bo=Gr.button`
      border:2px solid green;
      color:white;
      width:100%;
      font-weight:bold;
      background:transparant;
      padding:10px 20px;
      border-radius:15px;
      font-size:1rem;
 background-color: #003366;
  @media (max-width: 768px) {
  }
`,$o=Gr.div`
  width: 37%;
  padding:30px 0px;
   height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
    @media (max-width: 768px) {
     width: 100%;
     height:auto;
  }
  

`,Uo=()=>(0,Yr.jsxs)(yo,{children:[(0,Yr.jsx)(go,{}),(0,Yr.jsxs)(bo,{children:[(0,Yr.jsx)(vo,{children:"India's Best Online Khaiwal for Satta"}),(0,Yr.jsx)(wo,{children:"Posted On: 05th, February 2025"}),(0,Yr.jsxs)(ko,{children:[(0,Yr.jsxs)(jo,{children:["   ",(0,Yr.jsx)(La,{})," ",(0,Yr.jsx)(Fo,{children:" Facebook "})," "]}),(0,Yr.jsxs)(Eo,{children:[" ",(0,Yr.jsx)(Da,{}),"  ",(0,Yr.jsx)(Fo,{children:" Instagram "})," "]}),(0,Yr.jsxs)(_o,{children:[" ",(0,Yr.jsx)(Ia,{})," ",(0,Yr.jsx)(Fo,{children:" Whatsapp "})," "]})]})]}),(0,Yr.jsxs)(To,{children:[(0,Yr.jsxs)(Co,{children:[(0,Yr.jsx)("p",{children:"An online Khaiwal is a mediator between players and Matka markets. It collects bets, ensures fair play, and distributes winnings. Shri Matka is a trusted Khaiwal with transparent dealings, full-rate payouts, and instant results."}),(0,Yr.jsxs)(zo,{children:[(0,Yr.jsx)(Ma,{})," Play Matka ",(0,Yr.jsx)(Fa,{})]}),(0,Yr.jsx)(Ro,{style:{backgroundImage:`url(${xo})`,backgroundSize:"cover",backgroundPosition:"center"}}),(0,Yr.jsxs)(Po,{children:[(0,Yr.jsx)("h5",{children:"Why Shri Matka is the Best Online Khaiwal?"}),(0,Yr.jsx)("h6",{children:"\u2705 Most Trusted Online Khaiwal"}),(0,Yr.jsxs)("ul",{children:[(0,Yr.jsx)("li",{children:"The name, Shri Matka, is synonymous with the most trustworthy online Khaiwal for Satta players."}),(0,Yr.jsx)("li",{children:"This platform offers fair gaming, attracting both beginners and advanced players."}),(0,Yr.jsx)("li",{children:"No hidden charges or fraudulent activities \u2013 100% transparency guaranteed."})]}),(0,Yr.jsx)("h6",{children:"\ud83d\udcb0 Full-Rate Khaiwal for Maximum Profits"}),(0,Yr.jsxs)("ul",{children:[(0,Yr.jsx)("li",{children:"No commission charges \u2013 full-rate payouts for better returns."}),(0,Yr.jsx)("li",{children:"Winning amounts are given instantly without delay or deduction."})]}),(0,Yr.jsx)("h6",{children:"\ud83c\udfb2 Wide Range of Satta Matka Games Available"}),(0,Yr.jsxs)("ul",{children:[(0,Yr.jsx)("li",{children:"Kalyan Matka, Sridevi Matka, Rudraksh Night Matka, Karnataka Night Matka"}),(0,Yr.jsx)("li",{children:"Full Sangam & Half Sangam Games"}),(0,Yr.jsx)("li",{children:"Jodi Digit, Single Panna, Double Panna, and Triple Panna"})]}),(0,Yr.jsx)("h6",{children:"\ud83d\ude80 Safe, Secure, and Fast Transactions"}),(0,Yr.jsxs)("ul",{children:[(0,Yr.jsx)("li",{children:"Instant deposits and withdrawals."}),(0,Yr.jsx)("li",{children:"No intermediaries \u2013 direct business with Shri Matka."}),(0,Yr.jsx)("li",{children:"High-level encryption for secure transactions."})]}),(0,Yr.jsx)("h6",{children:"\ud83d\udcca Real-Time Satta Matka Results"}),(0,Yr.jsxs)("ul",{children:[(0,Yr.jsx)("li",{children:"Instant updates and results for quick information."}),(0,Yr.jsx)("li",{children:"Accurate predictions to maximize winning chances."})]}),(0,Yr.jsx)("h5",{children:"\ud83d\udc49\ud83e\udd11 Gali Haruf Satta King Results \ud83e\udd11\ud83d\udc48"})]}),(0,Yr.jsxs)(zo,{children:[(0,Yr.jsx)(Ma,{})," Play Matka ",(0,Yr.jsx)(Fa,{})]}),(0,Yr.jsxs)(ko,{style:{width:"fit-content",margin:"auto"},children:[(0,Yr.jsxs)(jo,{children:["   ",(0,Yr.jsx)(La,{})," ",(0,Yr.jsx)(Fo,{children:" Facebook "})," "]}),(0,Yr.jsxs)(Eo,{children:[" ",(0,Yr.jsx)(Da,{}),"  ",(0,Yr.jsx)(Fo,{children:" Instagram "})," "]}),(0,Yr.jsxs)(_o,{children:[" ",(0,Yr.jsx)(Ia,{})," ",(0,Yr.jsx)(Fo,{children:" Whatsapp "})," "]})]})]}),(0,Yr.jsx)($o,{children:(0,Yr.jsx)(Oo,{children:(0,Yr.jsxs)(Oo,{children:[(0,Yr.jsx)(Bo,{children:"Download Play App"}),(0,Yr.jsxs)(No,{children:[(0,Yr.jsx)(Ao,{children:"\u0906\u091c \u0939\u0940 \u0921\u093e\u0909\u0928\u0932\u094b\u0921 \u0915\u0930\u0947\u0902 \u0914\u0930 \u0916\u0947\u0932\u0947\u0902, \u0914\u0930 \u091c\u0940\u0924\u0947\u0902 \u0932\u093e\u0916\u094b\u0902 \u0915\u0947 \u0907\u0928\u093e\u092e!"}),(0,Yr.jsxs)(Lo,{children:[(0,Yr.jsx)(Do,{children:"Auto Deposite"}),(0,Yr.jsx)(Do,{children:"Auto Withdrawal"})]}),(0,Yr.jsx)(Io,{children:"Quick Start with Minimum 500 Deposit & Withdrawal"}),(0,Yr.jsx)(Mo,{children:"INDIA'S BEST ONLINE SATTA MATKA SITE"})]}),(0,Yr.jsx)(Bo,{children:"Download Play App"})]})})})]})]}),Ho=Gr.div`
  width: 100vw;
  height: 100%;
  background: #003366;
`,Wo=Gr.div`
  width: 100vw;
  padding: 5rem 2rem;
  background: #003366;
  box-sizing:border-box;

`,Vo=Gr.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: white;
  text-align: left;
  @media (max-width: 768px) {
    flex-direction:column;
     font-size: 2.5rem;
  }
`,Ko=Gr.p`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: white;
  text-align: left;
  @media (max-width: 768px) {
    flex-direction:column;
     font-size: 1.5rem;
  }
`,qo=Gr.div`
  width: 95%;
  margin: auto;
  display: flex;
  justify-content:space-between;
   @media (max-width: 768px) {
    flex-direction:column;
      width: 100%;
  }

`,Go=Gr.section`
  width: 60%;
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-sizing:border-box;
  p {
    font-size: 1rem;
    font-style: italic;
    line-height: 1.5rem;
    text-align: left;
  }
      @media (max-width: 768px) {
    width:95%;
      margin: auto;
  }
`,Qo=Gr.button`
  background-color: rgb(7, 40, 84);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  gap: 10px;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: rgb(5, 34, 71);
  }
`,Yo=Gr.div`
  width: 100%;
 
`,Jo=Gr.div`
  box-sizing: border-box;
`,Xo=Gr.h2`
  font-size: 40px;
  font-weight: bold;
  width: 90%;
  margin: auto;
  color: #ffcc00;
  text-transform: uppercase;
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.8);

  padding: 15px;
  display: inline-block;

  @media (max-width: 768px) {
    font-size: 36px;
    padding: 10px;
  }
`,Zo=Gr.div`
  margin: 30px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`,ei=Gr.button`
  background: yellow;
  color: black;
  width: 450px;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 15px 20px;
  border: 3px solid #fff;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    width: 90%;
    font-size: 28px;
  }
`,ti=Gr.p`
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
  letter-spacing: 1.5px;
  font-family: Georgia;
  // text-shadow: 2px 2px 4px rgba(237, 232, 232, 0.5), -2px -2px 4px rgba(0, 0, 0, 0.5);
text-decoration-color: #282c34;
  @media (max-width: 768px) {
    font-size: 20px;
    padding: 8px 12px;
  }
`,ni=Gr.h3`
  font-size: 25px;
  font-weight: normal;
  margin-top: 2rem;
  text-transform: uppercase;
  color: white;
  font-family: Poppins;
  letter-spacing: 1px;
  display: inline-block;
  border-radius: 10px;
  @media (max-width: 768px) {
    font-size: 28px;
    letter-spacing: 2px;
  }
`,ri=Gr.h5`
  font-size: 1.4rem;
  font-weight: bold;
  color: #003366;
  margin-bottom: 10px;
  text-align:left;
`,ai=Gr.p`
  font-size: 1rem;
  line-height: 1.6rem;
  color: #333;
  text-align: justify;
`,oi=()=>(0,Yr.jsxs)(Ho,{children:[(0,Yr.jsx)(go,{}),(0,Yr.jsxs)(Wo,{children:[(0,Yr.jsx)(Vo,{children:"Articles"}),(0,Yr.jsx)(Ko,{children:"Get all knowledge of about matka and matka market"})]}),(0,Yr.jsxs)(qo,{children:[(0,Yr.jsx)(Go,{children:[...Array(6)].map(((e,t)=>(0,Yr.jsxs)("div",{children:[(0,Yr.jsx)(ri,{children:"Why Shri Matka is the Best Online Khaiwal?"}),(0,Yr.jsx)(ai,{children:"An online Khaiwal is a mediator between players and Matka markets. It collects bets, ensures fair play, and distributes winnings. Shri Matka is a trusted Khaiwal with transparent dealings, full-rate payouts, and instant results."}),(0,Yr.jsxs)(Qo,{children:["Read More ",(0,Yr.jsx)(Fa,{})]})]},t)))}),(0,Yr.jsx)($o,{children:(0,Yr.jsx)(Yo,{children:(0,Yr.jsxs)(Yo,{children:[(0,Yr.jsx)(Bo,{children:"Download Play App"}),(0,Yr.jsxs)(Jo,{children:[(0,Yr.jsx)(Xo,{children:"\u0906\u091c \u0939\u0940 \u0921\u093e\u0909\u0928\u0932\u094b\u0921 \u0915\u0930\u0947\u0902 \u0914\u0930 \u0916\u0947\u0932\u0947\u0902, \u0914\u0930 \u091c\u0940\u0924\u0947\u0902 \u0932\u093e\u0916\u094b\u0902 \u0915\u0947 \u0907\u0928\u093e\u092e!"}),(0,Yr.jsxs)(Zo,{children:[(0,Yr.jsx)(ei,{children:"Auto Deposite"}),(0,Yr.jsx)(ei,{children:"Auto Withdrawal"})]}),(0,Yr.jsx)(ti,{children:"Quick Start with Minimum 500 Deposit & Withdrawal"}),(0,Yr.jsx)(ni,{children:"INDIA'S BEST ONLINE SATTA MATKA SITE"})]}),(0,Yr.jsx)(Bo,{children:"Download Play App"})]})})})]})]}),ii=Gr.div`
  background: #002b4e;
  margin: 40px 0;
  padding: 25px 0;
  border-radius: 10px;
  color: white;
  width: 95%;
  margin: auto;
  border: 1px solid white;
`,li=Gr.div`
  display: flex;
  gap: 20px;
  justify-content: space-evenly;
  align-items: start;
  border-bottom: 1px solid white;
  width: 100%;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,si=Gr.div`
  width: 45%;
  border-radius: 10px;
  margin-bottom: 20px;
  text-align: start;

  @media (max-width: 768px) {
    width: 90%;
  }
`,ci=Gr.h2`
  font-size: 1.5rem;
  font-weight: bold;
`,ui=Gr.p`
  font-size: 1rem;
  line-height: 1.5;
`,di=Gr.button`
  background: transparent;
  color: white;
  border: 2px solid rgb(21, 140, 158);
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #74c0fc;
    color: black;
  }
`,fi=Gr(di)`
  display: block;
  margin: 0 auto;
  margin-top: 30px;
  border: 2px solid rgb(21, 140, 158);
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 1rem;
`,pi=()=>(0,Yr.jsxs)(ii,{id:"about",children:[(0,Yr.jsxs)(li,{children:[(0,Yr.jsxs)(si,{children:[(0,Yr.jsx)(ci,{children:"India's Best Online Khaiwal for Satta"}),(0,Yr.jsx)(ui,{children:"An online Khaiwal is a mediator between players and Matka markets. It collects bets, makes sure that play is fair and gives winning money. In today's times, most Satta Matka players are more interested in an online Khaiwal that allows for safe, fast, and reliable betting. Among such trusted Khaiwals is Shri Matka with honest dealings, full-rate payouts, and instant results."}),(0,Yr.jsx)(Ze,{to:"/read-more",children:(0,Yr.jsx)(di,{children:"Read More >"})})]}),(0,Yr.jsxs)(si,{children:[(0,Yr.jsx)(ci,{children:"Gali Haruf Satta King Results"}),(0,Yr.jsx)(ui,{children:"Gali Satta Matka is one of the most popular types of betting. By knowing the Haruf Andar Bahar Trick, it would be much easier to increase the chances of winning. The Haruf (Letter) Trick can assist players in predicting and analyzing results for better probability in Satta King."}),(0,Yr.jsx)(Ze,{to:"/read-more",children:(0,Yr.jsx)(di,{children:"Read More >"})})]})]}),(0,Yr.jsx)(Ze,{to:"/more-articles",style:{color:"inherit",textDecoration:"none"},children:(0,Yr.jsx)(fi,{children:"More Article"})})]}),hi="480px",mi="768px",gi=Gr.div`
  padding: 100px 15px;
  border-radius: 10px;
  color: white;
  text-align: center;

  @media (max-width: ${mi}) {
    padding: 80px 10px;
  }

  @media (max-width: ${hi}) {
    padding: 60px 5px;
  }
`,xi=Gr.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
`,yi=Gr.div`
  display: flex;
  justify-content: start;
column-gap: 10px;
  flex-wrap: wrap;
  width: 100%;
 
  margin-left:20px;

  @media (max-width: ${mi}) {
    flex-direction: column;
    align-items: center;
    margin-left:0px;
  }
`,bi=Gr.div`
  border: 1px solid #355f85;
  padding: 30px 20px;
  box-sizing: border-box;
  border-radius: 10px;
  text-align: center;
  width: 24%;
  background: #013a63;
  margin-top: 20px;

  @media (max-width: ${mi}) {
    width: 48%;
  }

  @media (max-width: ${hi}) {
    width: 100%;
  }
`,vi=Gr.div`
  width: 190px;
  height: 190px;
  background: #002b4e;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto 10px;
`,wi=Gr.span`
  font-size: 4rem;
  font-weight: bold;
  color: #a3f7b5;
`,ki=Gr.span`
  font-size: 1rem;
  color: #a3f7b5;
`,Si=Gr.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 20px;
  font-size: 0.9rem;
  color: white;
`,ji=Gr.span`
  color: red;
  p {
    color: white;
    margin-top: 0;
    margin-left: 2px;
  }
`,Ei=Gr.span`
  color: green;
  p {
    color: white;
    margin-top: 0;
  }
`,_i=()=>{const[e,n]=(0,t.useState)([]),[r,a]=(0,t.useState)(!0),[o,i]=(0,t.useState)(null);return(0,t.useEffect)((()=>{fetch("http://localhost:4000/api/subscription-state").then((e=>e.json())).then((e=>{e.scrapedData&&e.scrapedData.markets?(n(e.scrapedData.markets),console.log(e)):i("No market data found."),a(!1)})).catch((e=>{console.error("Error fetching data:",e),i("Failed to fetch data. Please try again."),a(!1)}))}),[]),r?(0,Yr.jsx)(gi,{children:(0,Yr.jsx)(xi,{children:"Loading..."})}):o?(0,Yr.jsx)(gi,{children:(0,Yr.jsx)(xi,{children:o})}):(0,Yr.jsxs)(gi,{id:"result",children:[(0,Yr.jsx)(xi,{children:"Shri Matka Online Play Result"}),(0,Yr.jsx)(yi,{children:e.map(((e,t)=>(0,Yr.jsxs)(bi,{children:[(0,Yr.jsxs)(vi,{children:[(0,Yr.jsx)(ki,{children:"--"})," ",(0,Yr.jsx)(wi,{children:e.jodiDigit})," ",(0,Yr.jsx)(ki,{children:"--"})," "]}),(0,Yr.jsxs)(Si,{children:[(0,Yr.jsxs)(ji,{children:["Open ",(0,Yr.jsxs)("p",{children:[e.openTime," "]})]}),(0,Yr.jsxs)(Ei,{children:["Close ",(0,Yr.jsxs)("p",{children:[e.closeTime," "]})]})]}),(0,Yr.jsx)("h3",{children:e.marketName})]},t)))})]})},Ti="480px",Ci="768px",zi=[{id:1,rateText:"10 ka",amount:95,label:"SINGLE DIGIT"},{id:2,rateText:"10 ka",amount:950,label:"JODI DIGIT"},{id:3,rateText:"10 ka",amount:1500,label:"SINGLE PANA"},{id:4,rateText:"10 ka",amount:3e3,label:"DOUBLE PANA"},{id:5,rateText:"10 ka",amount:3e3,label:"DOUBLE PANA"},{id:6,rateText:"10 ka",amount:3e3,label:"DOUBLE PANA"},{id:7,rateText:"10 ka",amount:3e3,label:"DOUBLE PANA"},{id:8,rateText:"10 ka",amount:3e3,label:"DOUBLE PANA"}],Pi=Gr.div`
  text-align: center;
  color: white;
  padding: 0px 20px;
  min-height: 100vh;

  @media (max-width: ${Ci}) {
    padding: 0px 10px;
  }

  @media (max-width: ${Ti}) {
    padding: 0px 5px;
  }
`,Ri=Gr.h2`
  font-size: 36px;
  font-weight: bold;
`,Oi=Gr.p`
  font-size: 16px;
  margin-bottom: 30px;
`,Ni=Gr.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin: auto;

  @media (max-width: ${Ci}) {
    flex-direction: column;
    align-items: center;
  }
`,Ai=Gr.div`
  background: #003366;
  padding: 20px;
  width: 46%;
  border-radius: 15px;
  text-align: center;
  color: white;

  @media (max-width: ${Ci}) {
    width: 80%;
     padding: 0px;
       border-radius: 5px;
  }

  @media (max-width: ${Ti}) {
    width: 100%;
      border-radius: 5px;
  }
`,Li=Gr.p`
  font-size: 14px;
  color: #92ff92;
`,Di=Gr.div`
  display: flex;
  padding: 0px 40px;
  justify-content: start;
  align-items: center;
  margin-top: 10px;

  @media (max-width: ${Ci}) {
    padding: 10px;
  }

  @media (max-width: ${Ti}) {
     padding: 20px;
  }

`,Ii=Gr.h3`
  font-size: 36px;
  font-weight: bold;
  color: #92ff92;
  width: 20%;
  margin: 0;

  p {
    font-size: 16px;
    font-weight: normal;
  }

  @media (max-width: ${Ci}) {
    width: 30%;
     font-size: 25px;
  }

  @media (max-width: ${Ti}) {
    width: 40%;
     font-size: 25px;
  }
`,Mi=Gr.p`
  font-size: 28px;
  font-weight: bold;
  margin: 0 100px;

  @media (max-width: ${Ci}) {
    margin: 0 50px;
  }

  @media (max-width: ${Ti}) {
    margin: 0 20px;
  }
`,Fi=()=>(0,Yr.jsxs)(Pi,{id:"rate-chart",children:[(0,Yr.jsx)(Li,{style:{color:"yellow",fontSize:"16px"},children:"Game Rates"}),(0,Yr.jsx)(Ri,{children:"Online Game Play Rates"}),(0,Yr.jsx)(Oi,{children:"Explore multiple options for maximum fun"}),(0,Yr.jsx)(Ni,{children:zi.map((e=>(0,Yr.jsx)(Ai,{children:(0,Yr.jsxs)(Di,{children:[(0,Yr.jsxs)(Ii,{children:[" ",(0,Yr.jsx)(Li,{children:e.rateText}),e.amount]}),(0,Yr.jsx)(Mi,{children:e.label})]})},e.id)))})]}),Bi="600px",$i=n.p+"static/media/coins.95e57e4b4bf9b9a288ed.png",Ui=Gr.div`
  margin: 40px 0;
  padding: 25px 0;
  border-radius: 10px;
  color: white;
  width: 95%;
  margin: auto;
  padding: 100px 30px;

  @media (max-width: ${Bi}) {
    padding: 50px 0px;

  }
`,Hi=Gr.div`
  background: #003366;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-evenly;
  align-items: flex-start;
  border-bottom: 1px solid white;
  padding: 20px;
  border-radius: 20px;

  @media (max-width: ${Bi}) {
    flex-direction: column;
    align-items: center;
      padding: 0px;
  }
`,Wi=Gr.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`,Vi=Gr.img`
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
`,Ki=Gr.div`
  flex: 2;
  text-align: start;
  padding: 20px 2px;

  @media (max-width: ${Bi}) {
    padding: 10px;
  }
`,qi=Gr.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;

  @media (max-width: ${Bi}) {
    font-size: 2rem;
  }
`,Gi=Gr.p`
  font-size: 1.1rem;
  line-height: 1.8rem;
  letter-spacing: 0.1px;

  @media (max-width: ${Bi}) {
    font-size: 1rem;
  }
`,Qi=()=>(0,Yr.jsxs)(Ui,{id:"how-to-play",children:[(0,Yr.jsx)(qi,{children:"Best Matka App"}),(0,Yr.jsxs)(Hi,{children:[(0,Yr.jsx)(Wi,{children:(0,Yr.jsx)(Vi,{src:$i,alt:"Matka"})}),(0,Yr.jsx)(Ki,{children:(0,Yr.jsxs)(Gi,{children:[(0,Yr.jsx)("p",{children:"Explore a diverse range of markets on Shri Matka Matka, including Madhur Morning, Kalyan Morning, Kalyan Day, Madhur Night, Kalyan Night, Sridevi, Time Bazar, Main Bazar, Rajdhani Night, Milan Morning, Milan Night, Ratan Day, Tara Matka, Mumbai Satta Bazar, Golden, Goa Day, Kolkata Fatafat, Joker, Starline, and many more. We welcome user suggestions and are open to adding new markets upon request."}),(0,Yr.jsx)("p",{children:"Our USP includes full game rate matka, 100% trusted matka, fast admin response, live results, online satta, satta matka 143, best satta app, final ank, top-best matka, open to close, kalyan open, main bazar, time bazar, sridevi satta, rajdhani, fast results, jodi chart, kalyan panel, fast withdrawal, automatic deposit, kuber matka result, minimum deposit, 100 deposit matka, best design, extra deposit bonus, kalyan market, main Mumbai, dpboss, fix ank today kalyan, online matka app, Laxmi matka, matka 420, deep matka, fastest matka result, Gali desawar faridabad gaziabad, Ke keywords or add krlo, Gali satta result, Desawar jodi chart, Faridabad jodi panel, Gaziabad fast result, Gali desawar satta chart, Delhi bazar Shri Ganesh daily satta result, live result Kalyan, kalyan online matka play app, online matka play app, matka play app, old matka chart, daily fast matka result app, VIP guessing, kalyan official matka app, and more."})]})})]})]}),Yi=Gr.section`
  color: #fff;
  text-align: center;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative; /* Ensure the line is positioned relative to this container */
`,Ji=Gr.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 3rem;
`,Xi=Gr.div`
  display: flex;
  flex-wrap: wrap; /* Allows wrapping on smaller screens */
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`,Zi=Gr.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  position: relative;
  flex: 1;
  margin-left: 4rem;
  z-index: 1;

  @media (max-width: 768px) {
    margin: auto;
    margin-bottom: 2rem;
    width: 100%;
  }
`,el=Gr.div`
  background-color: #c4c4c4; /* Gray box background */
  width: 230px;
  height: 230px;
  border-radius: 10px; /* Rounded corners */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
  color: #000; /* Black text for the number */
  margin-bottom: 0.5rem;
  z-index: 0;

  @media (max-width: 768px) {
    margin-left: 0rem;
    margin: auto;
    margin-bottom: 2rem;
    width: 80%;
  }

`,tl=Gr.p`
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0;
  text-align: left;
`,nl=Gr.div`
  position: absolute;
  top: 55%;
  left: 10%;
  width: 70%;
  margin: auto;
  height: 8px;
  background: #b2f7a5;
  z-index: 0;

  @media (max-width: 768px) {
    display: none; /* Hide on small screens */
  }
`,rl=Gr.div`
  font-size: 0.9rem;
  color: #ddd; /* Slightly lighter than pure white */
`,al=()=>(0,Yr.jsxs)(Yi,{id:"how-to-play",children:[(0,Yr.jsx)(Ji,{children:"How To Use"}),(0,Yr.jsx)(nl,{}),(0,Yr.jsxs)(Xi,{children:[(0,Yr.jsxs)(Zi,{children:[(0,Yr.jsx)(el,{children:"1"}),(0,Yr.jsx)(tl,{children:"Download App"})]}),(0,Yr.jsxs)(Zi,{children:[(0,Yr.jsx)(el,{children:"2"}),(0,Yr.jsx)(tl,{children:"Click On Sign In"})]}),(0,Yr.jsxs)(Zi,{children:[(0,Yr.jsx)(el,{children:"3"}),(0,Yr.jsx)(tl,{children:"Enter Id-Password"})]}),(0,Yr.jsxs)(Zi,{children:[(0,Yr.jsx)(el,{children:"4"}),(0,Yr.jsx)(tl,{children:"Check Latest Results"})]})]}),(0,Yr.jsxs)(rl,{children:["Copyright \xa9 2004 - ",(new Date).getFullYear()," Sriti Matka | All rights reserved."]})]}),ol=n.p+"static/media/slide.f98a6c8cfec57cbf0f89.jpg",il=Gr.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative; /* Ensures background covers entire container */
  overflow: hidden;
`,ll=Gr.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${ol}) no-repeat center center/cover;
  z-index: -1; /* Ensures content is above the background */
`,sl=Gr.div`
  box-sizing: border-box;
  z-index: 1; /* Keeps content above the background */
`,cl=Gr.h2`
  font-size: 60px;
  font-weight: bold;
  width: 80%;
  margin: auto;
  color: #ffcc00;
  text-transform: uppercase;
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.8);
  padding: 15px;
  display: inline-block;

  @media (max-width: 768px) {
    font-size: 36px;
    padding: 10px;
  }
`,ul=Gr.div`
  margin: 30px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`,dl=Gr.button`
  background: yellow;
  color: black;
  width: 450px;
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 15px 30px;
  border: 3px solid #fff;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    width: 90%;
    font-size: 28px;
  }
`,fl=Gr.p`
  font-size: 40px;
  font-weight: 500;
  color: #ffffff;
  letter-spacing: 1.5px;
  font-family: Georgia;
  text-decoration-color: #282c34;

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 8px 12px;
  }
`,pl=Gr.h3`
  font-size: 55px;
  font-weight: normal;
  margin-top: 0px;
  text-transform: uppercase;
  color: white;
  font-family: Poppins;
  letter-spacing: 3px;
  display: inline-block;
  border-radius: 10px;

  @media (max-width: 768px) {
    font-size: 28px;
    letter-spacing: 2px;
  }
`,hl=()=>(0,Yr.jsxs)(il,{id:"home",children:[(0,Yr.jsx)(ll,{}),(0,Yr.jsxs)(sl,{children:[(0,Yr.jsx)(cl,{children:"\u0906\u091c \u0939\u0940 \u0921\u093e\u0909\u0928\u0932\u094b\u0921 \u0915\u0930\u0947\u0902 \u0914\u0930 \u0916\u0947\u0932\u0947\u0902, \u0914\u0930 \u091c\u0940\u0924\u0947\u0902 \u0932\u093e\u0916\u094b\u0902 \u0915\u0947 \u0907\u0928\u093e\u092e!"}),(0,Yr.jsxs)(ul,{children:[(0,Yr.jsx)(dl,{children:"Auto Deposite"}),(0,Yr.jsx)(dl,{children:"Auto Withdrawal"})]}),(0,Yr.jsx)(fl,{children:"Quick Start with Minimum 500 Deposit & Withdrawal"}),(0,Yr.jsx)(pl,{children:"INDIA'S BEST ONLINE SATTA MATKA SITE"})]})]}),ml=Gr.div`
  padding: 30px 0px;
  @media (max-width: 768px) {
    width: 95%;
    padding: 0;
    margin: auto;
  }
`,gl=Gr.div`
  background: #002b4e;
  width: 95%;
  margin: 10px auto;
  border: 1px solid #b2f7a5;
  padding: 20px;
  border-radius: 10px;
  color: white;
  text-align: center;
  @media (max-width: 768px) {
    width: 90%;
  }
`,xl=Gr.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
`,yl=Gr.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`,bl=Gr.div`
  display: flex;
  justify-content: space-between;
  background: #013a63;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #355f85;
`,vl=Gr(bl)`
  background: #b2f7a5;
  color: black;
  font-weight: bold;
`,wl=Gr.div.attrs({as:"div"})`
  flex: 1;
  text-align: center;
`,kl=Gr.a`
  color: #a3f7b5;
  text-decoration: underline;
  cursor: pointer;
`,Sl=()=>{const[e,n]=(0,t.useState)(null);if((0,t.useEffect)((()=>{fetch("http://localhost:4000/api/subscription-state").then((e=>e.json())).then((e=>{console.log("Fetched data:",e),n(e)})).catch((e=>{console.error("Error fetching data:",e)}))}),[]),!e)return(0,Yr.jsx)("div",{children:"Loading..."});const{chartData:r}=e.scrapedData;return(0,Yr.jsx)(ml,{id:"time-table",children:(0,Yr.jsxs)(gl,{children:[(0,Yr.jsx)(xl,{children:"Market Data"}),(0,Yr.jsxs)(yl,{children:[(0,Yr.jsxs)(vl,{children:[(0,Yr.jsx)(wl,{children:"Market"}),(0,Yr.jsx)(wl,{children:"Open"}),(0,Yr.jsx)(wl,{children:"Close"}),(0,Yr.jsx)(wl,{children:"Chart"})]}),r.map(((e,t)=>(0,Yr.jsxs)(bl,{children:[(0,Yr.jsx)(wl,{children:e.market}),(0,Yr.jsx)(wl,{children:e.openTime}),(0,Yr.jsx)(wl,{children:e.closeTime}),(0,Yr.jsx)(wl,{children:(0,Yr.jsx)(kl,{href:e.chartLink,target:"_blank",rel:"noopener noreferrer",children:" View Chart"})})]},t)))]})]})})},jl=Gr.button`
  position: fixed;
  bottom: 20px;
  right: ${e=>e.visible?"50px":"-900px"}; 
  background: #b2f7a5;
  color: black;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 1rem 4rem;
  border-radius: 20px;
  border: none;
  z-index: 100;
  transition: all 0.5s ease; /* Smooth transition for button's movement */

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1rem 2rem;
    width: 90%;
    margin:auto;
    bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 1rem 1.5rem;
    width: 95%;
    bottom: 10px;
  }
`,El=()=>{const[e,n]=(0,t.useState)(!1),r=()=>{const e=window.scrollY;n(e>200)};return(0,t.useEffect)((()=>(window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)})),[]),(0,Yr.jsxs)("div",{children:[(0,Yr.jsx)(go,{}),(0,Yr.jsx)(hl,{}),(0,Yr.jsx)(pi,{}),(0,Yr.jsx)(_i,{}),(0,Yr.jsx)(Sl,{}),(0,Yr.jsx)(Fi,{}),(0,Yr.jsx)(Qi,{}),(0,Yr.jsx)(al,{}),(0,Yr.jsx)(jl,{visible:e,children:"Download App"})]})};function _l(e){return Na({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"rect",attr:{width:"416",height:"288",x:"48",y:"144",fill:"none",strokeLinejoin:"round",strokeWidth:"32",rx:"48",ry:"48"},child:[]},{tag:"path",attr:{fill:"none",strokeLinejoin:"round",strokeWidth:"32",d:"M411.36 144v-30A50 50 0 0 0 352 64.9L88.64 109.85A50 50 0 0 0 48 159v49"},child:[]},{tag:"path",attr:{d:"M368 320a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"},child:[]}]})(e)}function Tl(e){return Na({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"},child:[]}]})(e)}function Cl(e,t){return function(){return e.apply(t,arguments)}}const{toString:zl}=Object.prototype,{getPrototypeOf:Pl}=Object,Rl=(Ol=Object.create(null),e=>{const t=zl.call(e);return Ol[t]||(Ol[t]=t.slice(8,-1).toLowerCase())});var Ol;const Nl=e=>(e=e.toLowerCase(),t=>Rl(t)===e),Al=e=>t=>typeof t===e,{isArray:Ll}=Array,Dl=Al("undefined");const Il=Nl("ArrayBuffer");const Ml=Al("string"),Fl=Al("function"),Bl=Al("number"),$l=e=>null!==e&&"object"===typeof e,Ul=e=>{if("object"!==Rl(e))return!1;const t=Pl(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Hl=Nl("Date"),Wl=Nl("File"),Vl=Nl("Blob"),Kl=Nl("FileList"),ql=Nl("URLSearchParams"),[Gl,Ql,Yl,Jl]=["ReadableStream","Request","Response","Headers"].map(Nl);function Xl(e,t){let n,r,{allOwnKeys:a=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),Ll(e))for(n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else{const r=a?Object.getOwnPropertyNames(e):Object.keys(e),o=r.length;let i;for(n=0;n<o;n++)i=r[n],t.call(null,e[i],i,e)}}function Zl(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,a=n.length;for(;a-- >0;)if(r=n[a],t===r.toLowerCase())return r;return null}const es="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global,ts=e=>!Dl(e)&&e!==es;const ns=(rs="undefined"!==typeof Uint8Array&&Pl(Uint8Array),e=>rs&&e instanceof rs);var rs;const as=Nl("HTMLFormElement"),os=(e=>{let{hasOwnProperty:t}=e;return(e,n)=>t.call(e,n)})(Object.prototype),is=Nl("RegExp"),ls=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Xl(n,((n,a)=>{let o;!1!==(o=t(n,a,e))&&(r[a]=o||n)})),Object.defineProperties(e,r)},ss="abcdefghijklmnopqrstuvwxyz",cs="0123456789",us={DIGIT:cs,ALPHA:ss,ALPHA_DIGIT:ss+ss.toUpperCase()+cs};const ds=Nl("AsyncFunction"),fs=(ps="function"===typeof setImmediate,hs=Fl(es.postMessage),ps?setImmediate:hs?((e,t)=>(es.addEventListener("message",(n=>{let{source:r,data:a}=n;r===es&&a===e&&t.length&&t.shift()()}),!1),n=>{t.push(n),es.postMessage(e,"*")}))(`axios@${Math.random()}`,[]):e=>setTimeout(e));var ps,hs;const ms="undefined"!==typeof queueMicrotask?queueMicrotask.bind(es):"undefined"!==typeof process&&process.nextTick||fs,gs={isArray:Ll,isArrayBuffer:Il,isBuffer:function(e){return null!==e&&!Dl(e)&&null!==e.constructor&&!Dl(e.constructor)&&Fl(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"===typeof FormData&&e instanceof FormData||Fl(e.append)&&("formdata"===(t=Rl(e))||"object"===t&&Fl(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&Il(e.buffer),t},isString:Ml,isNumber:Bl,isBoolean:e=>!0===e||!1===e,isObject:$l,isPlainObject:Ul,isReadableStream:Gl,isRequest:Ql,isResponse:Yl,isHeaders:Jl,isUndefined:Dl,isDate:Hl,isFile:Wl,isBlob:Vl,isRegExp:is,isFunction:Fl,isStream:e=>$l(e)&&Fl(e.pipe),isURLSearchParams:ql,isTypedArray:ns,isFileList:Kl,forEach:Xl,merge:function e(){const{caseless:t}=ts(this)&&this||{},n={},r=(r,a)=>{const o=t&&Zl(n,a)||a;Ul(n[o])&&Ul(r)?n[o]=e(n[o],r):Ul(r)?n[o]=e({},r):Ll(r)?n[o]=r.slice():n[o]=r};for(let a=0,o=arguments.length;a<o;a++)arguments[a]&&Xl(arguments[a],r);return n},extend:function(e,t,n){let{allOwnKeys:r}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return Xl(t,((t,r)=>{n&&Fl(t)?e[r]=Cl(t,n):e[r]=t}),{allOwnKeys:r}),e},trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let a,o,i;const l={};if(t=t||{},null==e)return t;do{for(a=Object.getOwnPropertyNames(e),o=a.length;o-- >0;)i=a[o],r&&!r(i,e,t)||l[i]||(t[i]=e[i],l[i]=!0);e=!1!==n&&Pl(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:Rl,kindOfTest:Nl,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(Ll(e))return e;let t=e.length;if(!Bl(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:as,hasOwnProperty:os,hasOwnProp:os,reduceDescriptors:ls,freezeMethods:e=>{ls(e,((t,n)=>{if(Fl(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];Fl(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return Ll(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:Zl,global:es,isContextDefined:ts,ALPHABET:us,generateString:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:us.ALPHA_DIGIT,n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&Fl(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if($l(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const a=Ll(e)?[]:{};return Xl(e,((e,t)=>{const o=n(e,r+1);!Dl(o)&&(a[t]=o)})),t[r]=void 0,a}}return e};return n(e,0)},isAsyncFn:ds,isThenable:e=>e&&($l(e)||Fl(e))&&Fl(e.then)&&Fl(e.catch),setImmediate:fs,asap:ms};function xs(e,t,n,r,a){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),a&&(this.response=a,this.status=a.status?a.status:null)}gs.inherits(xs,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:gs.toJSONObject(this.config),code:this.code,status:this.status}}});const ys=xs.prototype,bs={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{bs[e]={value:e}})),Object.defineProperties(xs,bs),Object.defineProperty(ys,"isAxiosError",{value:!0}),xs.from=(e,t,n,r,a,o)=>{const i=Object.create(ys);return gs.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),xs.call(i,e.message,t,n,r,a),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const vs=xs;function ws(e){return gs.isPlainObject(e)||gs.isArray(e)}function ks(e){return gs.endsWith(e,"[]")?e.slice(0,-2):e}function Ss(e,t,n){return e?e.concat(t).map((function(e,t){return e=ks(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const js=gs.toFlatObject(gs,{},null,(function(e){return/^is[A-Z]/.test(e)}));const Es=function(e,t,n){if(!gs.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=gs.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!gs.isUndefined(t[e])}))).metaTokens,a=n.visitor||c,o=n.dots,i=n.indexes,l=(n.Blob||"undefined"!==typeof Blob&&Blob)&&gs.isSpecCompliantForm(t);if(!gs.isFunction(a))throw new TypeError("visitor must be a function");function s(e){if(null===e)return"";if(gs.isDate(e))return e.toISOString();if(!l&&gs.isBlob(e))throw new vs("Blob is not supported. Use a Buffer instead.");return gs.isArrayBuffer(e)||gs.isTypedArray(e)?l&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function c(e,n,a){let l=e;if(e&&!a&&"object"===typeof e)if(gs.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(gs.isArray(e)&&function(e){return gs.isArray(e)&&!e.some(ws)}(e)||(gs.isFileList(e)||gs.endsWith(n,"[]"))&&(l=gs.toArray(e)))return n=ks(n),l.forEach((function(e,r){!gs.isUndefined(e)&&null!==e&&t.append(!0===i?Ss([n],r,o):null===i?n:n+"[]",s(e))})),!1;return!!ws(e)||(t.append(Ss(a,n,o),s(e)),!1)}const u=[],d=Object.assign(js,{defaultVisitor:c,convertValue:s,isVisitable:ws});if(!gs.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!gs.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+r.join("."));u.push(n),gs.forEach(n,(function(n,o){!0===(!(gs.isUndefined(n)||null===n)&&a.call(t,n,gs.isString(o)?o.trim():o,r,d))&&e(n,r?r.concat(o):[o])})),u.pop()}}(e),t};function _s(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Ts(e,t){this._pairs=[],e&&Es(e,this,t)}const Cs=Ts.prototype;Cs.append=function(e,t){this._pairs.push([e,t])},Cs.toString=function(e){const t=e?function(t){return e.call(this,t,_s)}:_s;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const zs=Ts;function Ps(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Rs(e,t,n){if(!t)return e;const r=n&&n.encode||Ps;gs.isFunction(n)&&(n={serialize:n});const a=n&&n.serialize;let o;if(o=a?a(t,n):gs.isURLSearchParams(t)?t.toString():new zs(t,n).toString(r),o){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}const Os=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){gs.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},Ns={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},As={isBrowser:!0,classes:{URLSearchParams:"undefined"!==typeof URLSearchParams?URLSearchParams:zs,FormData:"undefined"!==typeof FormData?FormData:null,Blob:"undefined"!==typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},Ls="undefined"!==typeof window&&"undefined"!==typeof document,Ds="object"===typeof navigator&&navigator||void 0,Is=Ls&&(!Ds||["ReactNative","NativeScript","NS"].indexOf(Ds.product)<0),Ms="undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts,Fs=Ls&&window.location.href||"http://localhost",Bs={...e,...As};const $s=function(e){function t(e,n,r,a){let o=e[a++];if("__proto__"===o)return!0;const i=Number.isFinite(+o),l=a>=e.length;if(o=!o&&gs.isArray(r)?r.length:o,l)return gs.hasOwnProp(r,o)?r[o]=[r[o],n]:r[o]=n,!i;r[o]&&gs.isObject(r[o])||(r[o]=[]);return t(e,n,r[o],a)&&gs.isArray(r[o])&&(r[o]=function(e){const t={},n=Object.keys(e);let r;const a=n.length;let o;for(r=0;r<a;r++)o=n[r],t[o]=e[o];return t}(r[o])),!i}if(gs.isFormData(e)&&gs.isFunction(e.entries)){const n={};return gs.forEachEntry(e,((e,r)=>{t(function(e){return gs.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null};const Us={transitional:Ns,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,a=gs.isObject(e);a&&gs.isHTMLForm(e)&&(e=new FormData(e));if(gs.isFormData(e))return r?JSON.stringify($s(e)):e;if(gs.isArrayBuffer(e)||gs.isBuffer(e)||gs.isStream(e)||gs.isFile(e)||gs.isBlob(e)||gs.isReadableStream(e))return e;if(gs.isArrayBufferView(e))return e.buffer;if(gs.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(a){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return Es(e,new Bs.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return Bs.isNode&&gs.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((o=gs.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return Es(o?{"files[]":e}:e,t&&new t,this.formSerializer)}}return a||r?(t.setContentType("application/json",!1),function(e,t,n){if(gs.isString(e))try{return(t||JSON.parse)(e),gs.trim(e)}catch(sm){if("SyntaxError"!==sm.name)throw sm}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||Us.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(gs.isResponse(e)||gs.isReadableStream(e))return e;if(e&&gs.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(sm){if(n){if("SyntaxError"===sm.name)throw vs.from(sm,vs.ERR_BAD_RESPONSE,this,null,this.response);throw sm}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Bs.classes.FormData,Blob:Bs.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};gs.forEach(["delete","get","head","post","put","patch"],(e=>{Us.headers[e]={}}));const Hs=Us,Ws=gs.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Vs=Symbol("internals");function Ks(e){return e&&String(e).trim().toLowerCase()}function qs(e){return!1===e||null==e?e:gs.isArray(e)?e.map(qs):String(e)}function Gs(e,t,n,r,a){return gs.isFunction(r)?r.call(this,t,n):(a&&(t=n),gs.isString(t)?gs.isString(r)?-1!==t.indexOf(r):gs.isRegExp(r)?r.test(t):void 0:void 0)}class Qs{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function a(e,t,n){const a=Ks(t);if(!a)throw new Error("header name must be a non-empty string");const o=gs.findKey(r,a);(!o||void 0===r[o]||!0===n||void 0===n&&!1!==r[o])&&(r[o||t]=qs(e))}const o=(e,t)=>gs.forEach(e,((e,n)=>a(e,n,t)));if(gs.isPlainObject(e)||e instanceof this.constructor)o(e,t);else if(gs.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))o((e=>{const t={};let n,r,a;return e&&e.split("\n").forEach((function(e){a=e.indexOf(":"),n=e.substring(0,a).trim().toLowerCase(),r=e.substring(a+1).trim(),!n||t[n]&&Ws[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t);else if(gs.isHeaders(e))for(const[i,l]of e.entries())a(l,i,n);else null!=e&&a(t,e,n);return this}get(e,t){if(e=Ks(e)){const n=gs.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(gs.isFunction(t))return t.call(this,e,n);if(gs.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Ks(e)){const n=gs.findKey(this,e);return!(!n||void 0===this[n]||t&&!Gs(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function a(e){if(e=Ks(e)){const a=gs.findKey(n,e);!a||t&&!Gs(0,n[a],a,t)||(delete n[a],r=!0)}}return gs.isArray(e)?e.forEach(a):a(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const a=t[n];e&&!Gs(0,this[a],a,e,!0)||(delete this[a],r=!0)}return r}normalize(e){const t=this,n={};return gs.forEach(this,((r,a)=>{const o=gs.findKey(n,a);if(o)return t[o]=qs(r),void delete t[a];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(a):String(a).trim();i!==a&&delete t[a],t[i]=qs(r),n[i]=!0})),this}concat(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.constructor.concat(this,...t)}toJSON(e){const t=Object.create(null);return gs.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&gs.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((e=>{let[t,n]=e;return t+": "+n})).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e){const t=new this(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return r.forEach((e=>t.set(e))),t}static accessor(e){const t=(this[Vs]=this[Vs]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=Ks(e);t[r]||(!function(e,t){const n=gs.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,a){return this[r].call(this,t,e,n,a)},configurable:!0})}))}(n,e),t[r]=!0)}return gs.isArray(e)?e.forEach(r):r(e),this}}Qs.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),gs.reduceDescriptors(Qs.prototype,((e,t)=>{let{value:n}=e,r=t[0].toUpperCase()+t.slice(1);return{get:()=>n,set(e){this[r]=e}}})),gs.freezeMethods(Qs);const Ys=Qs;function Js(e,t){const n=this||Hs,r=t||n,a=Ys.from(r.headers);let o=r.data;return gs.forEach(e,(function(e){o=e.call(n,o,a.normalize(),t?t.status:void 0)})),a.normalize(),o}function Xs(e){return!(!e||!e.__CANCEL__)}function Zs(e,t,n){vs.call(this,null==e?"canceled":e,vs.ERR_CANCELED,t,n),this.name="CanceledError"}gs.inherits(Zs,vs,{__CANCEL__:!0});const ec=Zs;function tc(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new vs("Request failed with status code "+n.status,[vs.ERR_BAD_REQUEST,vs.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}const nc=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let a,o=0,i=0;return t=void 0!==t?t:1e3,function(l){const s=Date.now(),c=r[i];a||(a=s),n[o]=l,r[o]=s;let u=i,d=0;for(;u!==o;)d+=n[u++],u%=e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),s-a<t)return;const f=c&&s-c;return f?Math.round(1e3*d/f):void 0}};const rc=function(e,t){let n,r,a=0,o=1e3/t;const i=function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();a=o,n=null,r&&(clearTimeout(r),r=null),e.apply(null,t)};return[function(){const e=Date.now(),t=e-a;for(var l=arguments.length,s=new Array(l),c=0;c<l;c++)s[c]=arguments[c];t>=o?i(s,e):(n=s,r||(r=setTimeout((()=>{r=null,i(n)}),o-t)))},()=>n&&i(n)]},ac=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,r=0;const a=nc(50,250);return rc((n=>{const o=n.loaded,i=n.lengthComputable?n.total:void 0,l=o-r,s=a(l);r=o;e({loaded:o,total:i,progress:i?o/i:void 0,bytes:l,rate:s||void 0,estimated:s&&i&&o<=i?(i-o)/s:void 0,event:n,lengthComputable:null!=i,[t?"download":"upload"]:!0})}),n)},oc=(e,t)=>{const n=null!=e;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},ic=e=>function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return gs.asap((()=>e(...n)))},lc=Bs.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,Bs.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(Bs.origin),Bs.navigator&&/(msie|trident)/i.test(Bs.navigator.userAgent)):()=>!0,sc=Bs.hasStandardBrowserEnv?{write(e,t,n,r,a,o){const i=[e+"="+encodeURIComponent(t)];gs.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),gs.isString(r)&&i.push("path="+r),gs.isString(a)&&i.push("domain="+a),!0===o&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function cc(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const uc=e=>e instanceof Ys?{...e}:e;function dc(e,t){t=t||{};const n={};function r(e,t,n,r){return gs.isPlainObject(e)&&gs.isPlainObject(t)?gs.merge.call({caseless:r},e,t):gs.isPlainObject(t)?gs.merge({},t):gs.isArray(t)?t.slice():t}function a(e,t,n,a){return gs.isUndefined(t)?gs.isUndefined(e)?void 0:r(void 0,e,0,a):r(e,t,0,a)}function o(e,t){if(!gs.isUndefined(t))return r(void 0,t)}function i(e,t){return gs.isUndefined(t)?gs.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function l(n,a,o){return o in t?r(n,a):o in e?r(void 0,n):void 0}const s={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(e,t,n)=>a(uc(e),uc(t),0,!0)};return gs.forEach(Object.keys(Object.assign({},e,t)),(function(r){const o=s[r]||a,i=o(e[r],t[r],r);gs.isUndefined(i)&&o!==l||(n[r]=i)})),n}const fc=e=>{const t=dc({},e);let n,{data:r,withXSRFToken:a,xsrfHeaderName:o,xsrfCookieName:i,headers:l,auth:s}=t;if(t.headers=l=Ys.from(l),t.url=Rs(cc(t.baseURL,t.url),e.params,e.paramsSerializer),s&&l.set("Authorization","Basic "+btoa((s.username||"")+":"+(s.password?unescape(encodeURIComponent(s.password)):""))),gs.isFormData(r))if(Bs.hasStandardBrowserEnv||Bs.hasStandardBrowserWebWorkerEnv)l.setContentType(void 0);else if(!1!==(n=l.getContentType())){const[e,...t]=n?n.split(";").map((e=>e.trim())).filter(Boolean):[];l.setContentType([e||"multipart/form-data",...t].join("; "))}if(Bs.hasStandardBrowserEnv&&(a&&gs.isFunction(a)&&(a=a(t)),a||!1!==a&&lc(t.url))){const e=o&&i&&sc.read(i);e&&l.set(o,e)}return t},pc="undefined"!==typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){const r=fc(e);let a=r.data;const o=Ys.from(r.headers).normalize();let i,l,s,c,u,{responseType:d,onUploadProgress:f,onDownloadProgress:p}=r;function h(){c&&c(),u&&u(),r.cancelToken&&r.cancelToken.unsubscribe(i),r.signal&&r.signal.removeEventListener("abort",i)}let m=new XMLHttpRequest;function g(){if(!m)return;const r=Ys.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders());tc((function(e){t(e),h()}),(function(e){n(e),h()}),{data:d&&"text"!==d&&"json"!==d?m.response:m.responseText,status:m.status,statusText:m.statusText,headers:r,config:e,request:m}),m=null}m.open(r.method.toUpperCase(),r.url,!0),m.timeout=r.timeout,"onloadend"in m?m.onloadend=g:m.onreadystatechange=function(){m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))&&setTimeout(g)},m.onabort=function(){m&&(n(new vs("Request aborted",vs.ECONNABORTED,e,m)),m=null)},m.onerror=function(){n(new vs("Network Error",vs.ERR_NETWORK,e,m)),m=null},m.ontimeout=function(){let t=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const a=r.transitional||Ns;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new vs(t,a.clarifyTimeoutError?vs.ETIMEDOUT:vs.ECONNABORTED,e,m)),m=null},void 0===a&&o.setContentType(null),"setRequestHeader"in m&&gs.forEach(o.toJSON(),(function(e,t){m.setRequestHeader(t,e)})),gs.isUndefined(r.withCredentials)||(m.withCredentials=!!r.withCredentials),d&&"json"!==d&&(m.responseType=r.responseType),p&&([s,u]=ac(p,!0),m.addEventListener("progress",s)),f&&m.upload&&([l,c]=ac(f),m.upload.addEventListener("progress",l),m.upload.addEventListener("loadend",c)),(r.cancelToken||r.signal)&&(i=t=>{m&&(n(!t||t.type?new ec(null,e,m):t),m.abort(),m=null)},r.cancelToken&&r.cancelToken.subscribe(i),r.signal&&(r.signal.aborted?i():r.signal.addEventListener("abort",i)));const x=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(r.url);x&&-1===Bs.protocols.indexOf(x)?n(new vs("Unsupported protocol "+x+":",vs.ERR_BAD_REQUEST,e)):m.send(a||null)}))},hc=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let n,r=new AbortController;const a=function(e){if(!n){n=!0,i();const t=e instanceof Error?e:this.reason;r.abort(t instanceof vs?t:new ec(t instanceof Error?t.message:t))}};let o=t&&setTimeout((()=>{o=null,a(new vs(`timeout ${t} of ms exceeded`,vs.ETIMEDOUT))}),t);const i=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach((e=>{e.unsubscribe?e.unsubscribe(a):e.removeEventListener("abort",a)})),e=null)};e.forEach((e=>e.addEventListener("abort",a)));const{signal:l}=r;return l.unsubscribe=()=>gs.asap(i),l}},mc=function*(e,t){let n=e.byteLength;if(!t||n<t)return void(yield e);let r,a=0;for(;a<n;)r=a+t,yield e.slice(a,r),a=r},gc=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},xc=(e,t,n,r)=>{const a=async function*(e,t){for await(const n of gc(e))yield*mc(n,t)}(e,t);let o,i=0,l=e=>{o||(o=!0,r&&r(e))};return new ReadableStream({async pull(e){try{const{done:t,value:r}=await a.next();if(t)return l(),void e.close();let o=r.byteLength;if(n){let e=i+=o;n(e)}e.enqueue(new Uint8Array(r))}catch(t){throw l(t),t}},cancel:e=>(l(e),a.return())},{highWaterMark:2})},yc="function"===typeof fetch&&"function"===typeof Request&&"function"===typeof Response,bc=yc&&"function"===typeof ReadableStream,vc=yc&&("function"===typeof TextEncoder?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),wc=function(e){try{for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return!!e(...n)}catch(sm){return!1}},kc=bc&&wc((()=>{let e=!1;const t=new Request(Bs.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})),Sc=bc&&wc((()=>gs.isReadableStream(new Response("").body))),jc={stream:Sc&&(e=>e.body)};var Ec;yc&&(Ec=new Response,["text","arrayBuffer","blob","formData","stream"].forEach((e=>{!jc[e]&&(jc[e]=gs.isFunction(Ec[e])?t=>t[e]():(t,n)=>{throw new vs(`Response type '${e}' is not supported`,vs.ERR_NOT_SUPPORT,n)})})));const _c=async(e,t)=>{const n=gs.toFiniteNumber(e.getContentLength());return null==n?(async e=>{if(null==e)return 0;if(gs.isBlob(e))return e.size;if(gs.isSpecCompliantForm(e)){const t=new Request(Bs.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return gs.isArrayBufferView(e)||gs.isArrayBuffer(e)?e.byteLength:(gs.isURLSearchParams(e)&&(e+=""),gs.isString(e)?(await vc(e)).byteLength:void 0)})(t):n},Tc=yc&&(async e=>{let{url:t,method:n,data:r,signal:a,cancelToken:o,timeout:i,onDownloadProgress:l,onUploadProgress:s,responseType:c,headers:u,withCredentials:d="same-origin",fetchOptions:f}=fc(e);c=c?(c+"").toLowerCase():"text";let p,h=hc([a,o&&o.toAbortSignal()],i);const m=h&&h.unsubscribe&&(()=>{h.unsubscribe()});let g;try{if(s&&kc&&"get"!==n&&"head"!==n&&0!==(g=await _c(u,r))){let e,n=new Request(t,{method:"POST",body:r,duplex:"half"});if(gs.isFormData(r)&&(e=n.headers.get("content-type"))&&u.setContentType(e),n.body){const[e,t]=oc(g,ac(ic(s)));r=xc(n.body,65536,e,t)}}gs.isString(d)||(d=d?"include":"omit");const a="credentials"in Request.prototype;p=new Request(t,{...f,signal:h,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:a?d:void 0});let o=await fetch(p);const i=Sc&&("stream"===c||"response"===c);if(Sc&&(l||i&&m)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=o[t]}));const t=gs.toFiniteNumber(o.headers.get("content-length")),[n,r]=l&&oc(t,ac(ic(l),!0))||[];o=new Response(xc(o.body,65536,n,(()=>{r&&r(),m&&m()})),e)}c=c||"text";let x=await jc[gs.findKey(jc,c)||"text"](o,e);return!i&&m&&m(),await new Promise(((t,n)=>{tc(t,n,{data:x,headers:Ys.from(o.headers),status:o.status,statusText:o.statusText,config:e,request:p})}))}catch(x){if(m&&m(),x&&"TypeError"===x.name&&/fetch/i.test(x.message))throw Object.assign(new vs("Network Error",vs.ERR_NETWORK,e,p),{cause:x.cause||x});throw vs.from(x,x&&x.code,e,p)}}),Cc={http:null,xhr:pc,fetch:Tc};gs.forEach(Cc,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(sm){}Object.defineProperty(e,"adapterName",{value:t})}}));const zc=e=>`- ${e}`,Pc=e=>gs.isFunction(e)||null===e||!1===e,Rc=e=>{e=gs.isArray(e)?e:[e];const{length:t}=e;let n,r;const a={};for(let o=0;o<t;o++){let t;if(n=e[o],r=n,!Pc(n)&&(r=Cc[(t=String(n)).toLowerCase()],void 0===r))throw new vs(`Unknown adapter '${t}'`);if(r)break;a[t||"#"+o]=r}if(!r){const e=Object.entries(a).map((e=>{let[t,n]=e;return`adapter ${t} `+(!1===n?"is not supported by the environment":"is not available in the build")}));let n=t?e.length>1?"since :\n"+e.map(zc).join("\n"):" "+zc(e[0]):"as no adapter specified";throw new vs("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r};function Oc(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ec(null,e)}function Nc(e){Oc(e),e.headers=Ys.from(e.headers),e.data=Js.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Rc(e.adapter||Hs.adapter)(e).then((function(t){return Oc(e),t.data=Js.call(e,e.transformResponse,t),t.headers=Ys.from(t.headers),t}),(function(t){return Xs(t)||(Oc(e),t&&t.response&&(t.response.data=Js.call(e,e.transformResponse,t.response),t.response.headers=Ys.from(t.response.headers))),Promise.reject(t)}))}const Ac="1.7.9",Lc={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Lc[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Dc={};Lc.transitional=function(e,t,n){function r(e,t){return"[Axios v1.7.9] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,a,o)=>{if(!1===e)throw new vs(r(a," has been removed"+(t?" in "+t:"")),vs.ERR_DEPRECATED);return t&&!Dc[a]&&(Dc[a]=!0,console.warn(r(a," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,a,o)}},Lc.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};const Ic={assertOptions:function(e,t,n){if("object"!==typeof e)throw new vs("options must be an object",vs.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let a=r.length;for(;a-- >0;){const o=r[a],i=t[o];if(i){const t=e[o],n=void 0===t||i(t,o,e);if(!0!==n)throw new vs("option "+o+" must be "+n,vs.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new vs("Unknown option "+o,vs.ERR_BAD_OPTION)}},validators:Lc},Mc=Ic.validators;class Fc{constructor(e){this.defaults=e,this.interceptors={request:new Os,response:new Os}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let e={};Error.captureStackTrace?Error.captureStackTrace(e):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{n.stack?t&&!String(n.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+t):n.stack=t}catch(sm){}}throw n}}_request(e,t){"string"===typeof e?(t=t||{}).url=e:t=e||{},t=dc(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:a}=t;void 0!==n&&Ic.assertOptions(n,{silentJSONParsing:Mc.transitional(Mc.boolean),forcedJSONParsing:Mc.transitional(Mc.boolean),clarifyTimeoutError:Mc.transitional(Mc.boolean)},!1),null!=r&&(gs.isFunction(r)?t.paramsSerializer={serialize:r}:Ic.assertOptions(r,{encode:Mc.function,serialize:Mc.function},!0)),Ic.assertOptions(t,{baseUrl:Mc.spelling("baseURL"),withXsrfToken:Mc.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o=a&&gs.merge(a.common,a[t.method]);a&&gs.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete a[e]})),t.headers=Ys.concat(o,a);const i=[];let l=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(l=l&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const s=[];let c;this.interceptors.response.forEach((function(e){s.push(e.fulfilled,e.rejected)}));let u,d=0;if(!l){const e=[Nc.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,s),u=e.length,c=Promise.resolve(t);d<u;)c=c.then(e[d++],e[d++]);return c}u=i.length;let f=t;for(d=0;d<u;){const e=i[d++],t=i[d++];try{f=e(f)}catch(p){t.call(this,p);break}}try{c=Nc.call(this,f)}catch(p){return Promise.reject(p)}for(d=0,u=s.length;d<u;)c=c.then(s[d++],s[d++]);return c}getUri(e){return Rs(cc((e=dc(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}gs.forEach(["delete","get","head","options"],(function(e){Fc.prototype[e]=function(t,n){return this.request(dc(n||{},{method:e,url:t,data:(n||{}).data}))}})),gs.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,a){return this.request(dc(a||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Fc.prototype[e]=t(),Fc.prototype[e+"Form"]=t(!0)}));const Bc=Fc;class $c{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,a){n.reason||(n.reason=new ec(e,r,a),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new $c((function(t){e=t})),cancel:e}}}const Uc=$c;const Hc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Hc).forEach((e=>{let[t,n]=e;Hc[n]=t}));const Wc=Hc;const Vc=function e(t){const n=new Bc(t),r=Cl(Bc.prototype.request,n);return gs.extend(r,Bc.prototype,n,{allOwnKeys:!0}),gs.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(dc(t,n))},r}(Hs);Vc.Axios=Bc,Vc.CanceledError=ec,Vc.CancelToken=Uc,Vc.isCancel=Xs,Vc.VERSION=Ac,Vc.toFormData=Es,Vc.AxiosError=vs,Vc.Cancel=Vc.CanceledError,Vc.all=function(e){return Promise.all(e)},Vc.spread=function(e){return function(t){return e.apply(null,t)}},Vc.isAxiosError=function(e){return gs.isObject(e)&&!0===e.isAxiosError},Vc.mergeConfig=dc,Vc.AxiosHeaders=Ys,Vc.formToJSON=e=>$s(gs.isHTMLForm(e)?new FormData(e):e),Vc.getAdapter=Rc,Vc.HttpStatusCode=Wc,Vc.default=Vc;const Kc=Vc,qc=(0,t.createContext)(),Gc=e=>{let{children:n}=e;const[r,a]=(0,t.useState)({username:"Demo",walletBalance:0,email:""}),o=async()=>{const e=localStorage.getItem("user");if(!e)return void console.error("User data not found in localStorage");const t=JSON.parse(e).id;try{const e=await Kc.get(`http://localhost:4000/api/name/${t}`);a({username:e.data.username,walletBalance:e.data.walletBalance,email:e.data.email})}catch(n){console.error("Error fetching profile:",n)}};return(0,t.useEffect)((()=>{o()}),[]),(0,Yr.jsx)(qc.Provider,{value:{profile:r,fetchNameWallet:o},children:n})},Qc=()=>(0,t.useContext)(qc),Yc=Gr.nav`
  background-color: #0b3c68;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: start;
  padding: 20px 20px;
  color: white;
  position: sticky;
  box-sizing:border-box;
  top:0;
  left:0;
  right:0;
  

box-sizing:border-box;
  @media (max-width: 1024px) {
    padding: 15px 20px;
  }
    
`,Jc=Gr.a`
  display: flex;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
    margin-right: 10px;
border-radius:50%;
    @media (max-width: 768px) {
      width: 50px;
      height: 50px;
    }
  }
`,Xc=Gr.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 30px;
  row-gap: 50px;
  width: 90%;
  // padding: 20px 0;
  box-sizing:border-box;

  @media (max-width: 1024px) {
    display: ${e=>{let{open:t}=e;return t?"flex":"none"}};
    flex-direction: column;
    width: 100%;
    background-color: #0b3c68;
    position: absolute;
    top: 100%;
    left: 0;
    padding: 20px;
    z-index: 1000;
    border-top: 2px solid #ffcc00;
  }
`,Zc=Gr.a`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${e=>{let{active:t}=e;return t?"#00ff00":"white"}};  /* Active link is green */
  font-weight: medium;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    color: #ffcc00;
  }
`,eu=Gr.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 22px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`,tu=Gr.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 80%;
  justify-content: space-between;
`,nu=Gr.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  text-decoration: none;
  font-size: 18px;
`,ru=Gr.div`
  display: none;
  cursor: pointer;
  font-size: 24px;
  color: white;

  @media (max-width: 1024px) {
    display: block;
  }
`,au=()=>{const[e,n]=(0,t.useState)(!1),r=Y(),{profile:a}=Qc();return(0,Yr.jsxs)(Yc,{children:[(0,Yr.jsxs)(tu,{children:[(0,Yr.jsx)(Jc,{href:"/",children:(0,Yr.jsx)("img",{src:Qr,alt:"Shri Matka"})}),(0,Yr.jsx)(ru,{onClick:()=>n(!e),children:e?(0,Yr.jsx)(to,{}):(0,Yr.jsx)(Ua,{})}),(0,Yr.jsxs)(Xc,{open:e,children:[(0,Yr.jsxs)(Zc,{active:"/dashboard"===r.pathname,href:"/dashboard",children:[(0,Yr.jsx)(Ga,{})," HOME"]}),(0,Yr.jsxs)(Zc,{active:"/dashboard/my-profile"===r.pathname,href:"/dashboard/my-profile",children:[(0,Yr.jsx)(io,{})," MY PROFILE"]}),(0,Yr.jsxs)(Zc,{active:"/change-password"===r.pathname,href:"/change-password",children:[(0,Yr.jsx)(Qa,{})," CHANGE PASSWORD"]}),(0,Yr.jsxs)(Zc,{active:"/dashboard/wallet"===r.pathname,href:"/dashboard/wallet",children:[(0,Yr.jsx)(lo,{})," WALLET"]}),(0,Yr.jsxs)(Zc,{active:"/dashboard/add-points"===r.pathname,href:"/dashboard/add-points",children:[(0,Yr.jsx)(Ka,{})," ADD POINT"]}),(0,Yr.jsxs)(Zc,{active:"/dashboard/payment-details"===r.pathname,href:"/dashboard/payment-details",children:[(0,Yr.jsx)(ao,{})," ADD BANK DETAIL"]}),(0,Yr.jsxs)(Zc,{active:"/dashboard/reedeem-points"===r.pathname,href:"/dashboard/reedeem-points",children:[(0,Yr.jsx)(Ya,{})," REDEEM POINT"]}),(0,Yr.jsxs)(Zc,{active:"/dashboard/bidhistory"===r.pathname,href:"/dashboard/bidhistory",children:[(0,Yr.jsx)(qa,{})," BID HISTORY"]}),(0,Yr.jsxs)(Zc,{active:"/dashboard/winhistory"===r.pathname,href:"/dashboard/winhistory",children:[(0,Yr.jsx)(Va,{})," WIN HISTORY"]}),(0,Yr.jsxs)(Zc,{active:"/dashboard/game-rates"===r.pathname,href:"/dashboard/game-rates",children:[(0,Yr.jsx)(Wa,{})," GAME RATE"]}),(0,Yr.jsxs)(Zc,{active:"/dashboard/how-to-play"===r.pathname,href:"/dashboard/how-to-play",children:[(0,Yr.jsx)(Za,{})," HOW TO PLAY"]}),(0,Yr.jsxs)(Zc,{active:"/dashboard/help-support"===r.pathname,href:"https://wa.me/9999999990",target:"_blank",rel:"noopener noreferrer",children:[(0,Yr.jsx)(Za,{})," HELP & SUPPORT"]}),(0,Yr.jsxs)(Zc,{active:"/dashboard/delete-account"===r.pathname,href:"/dashboard/delete-account",children:[(0,Yr.jsx)(no,{})," DELETE ACCOUNT"]}),(0,Yr.jsxs)(Zc,{active:"/dashboard/signup"===r.pathname,href:"/",onClick:()=>{localStorage.removeItem("token"),localStorage.removeItem("user")},children:[(0,Yr.jsx)(eo,{})," LOGOUT"]})]})]}),(0,Yr.jsxs)(eu,{children:[(0,Yr.jsxs)(nu,{children:[a.walletBalance,(0,Yr.jsx)(_l,{title:"Wallet"})]}),(0,Yr.jsxs)(nu,{children:[a.username," ",(0,Yr.jsx)(Tl,{title:"User"})]})]})]})},ou=Gr.div`
  background-color: #0b3c68;
  display: flex;
  justify-content: center;
  padding: 20px;
  box-sizing:border-box;
  width: 100%;
`,iu=Gr.div`
  background-color: white;
  width: 100%;

  padding: 40px 20px;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`,lu=Gr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
  width: 150px;

  svg {
    font-size: 80px;
    color: #0b3c68;

    @media (max-width: 768px) {
      font-size: 60px;
    }
  }

  p {
    font-weight: bold;
    font-size: 16px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`,su=Gr.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,cu=Gr.button`
  flex: 1;
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  text-align: center;
  border-radius: 30px;
  color: white;
  background-color: ${e=>{let{$primary:t}=e;return t?"#0b3c68":"gray"}}; /* Fixed prop */
  min-width: 150px;

  span {
    color: ${e=>{let{$primary:t}=e;return t?"lightgreen":"#0b3c68"}};
  }

  &:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 12px;
    width: 100%;
    border-radius: 20px;
  }
`,uu=e=>{let{setToggleGames:t,toggleGames:n}=e;return(0,Yr.jsx)(ou,{children:(0,Yr.jsxs)(iu,{children:[(0,Yr.jsxs)(lu,{children:[(0,Yr.jsx)(Ka,{}),(0,Yr.jsx)("p",{children:"Add Point"})]}),(0,Yr.jsxs)(lu,{children:[(0,Yr.jsx)(Ya,{}),(0,Yr.jsx)("p",{children:"Withdrawal"})]}),(0,Yr.jsxs)(lu,{children:[(0,Yr.jsx)(Ia,{style:{border:"2px solid #0b3c68",borderRadius:"50%",padding:"10px"}}),(0,Yr.jsx)("p",{children:"WhatsApp"})]}),(0,Yr.jsxs)(lu,{children:[(0,Yr.jsx)(Ja,{}),(0,Yr.jsx)("p",{children:"Call"})]}),(0,Yr.jsxs)(su,{children:[(0,Yr.jsx)(cu,{$primary:n,onClick:()=>t(!0),children:(0,Yr.jsx)("span",{children:"Main Game"})}),(0,Yr.jsx)(cu,{$primary:!n,onClick:()=>t(!1),children:(0,Yr.jsx)("span",{children:"Gali Desawar"})})]})]})})},du=Gr.div`
  background-color: #0b3c68;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  box-sizing:border-box;
`,fu=Gr.div`
  background-color: white;
  width: 100%;
  padding: 30px;
  border-radius: 10px;
  box-sizing:border-box;
`,pu=Gr.h2`
  font-size: 50px;
  font-weight: bold;
  color: black;
  margin-bottom: 15px;
  text-align: left;
`,hu=Gr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

`,mu=Gr.div`
  background-color: #0b3c68;
  color: white;
  padding: 20px;
  border-radius: 8px;
  box-sizing:border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,gu=Gr.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  width: 70px;
  text-align: center;

  svg {
    font-size: 30px;
    background-color: #d4f4a6;
    padding: 10px;
    border-radius: 50%;
    color: #0b3c68;
    margin-bottom: 5px;
  }

  p {
    font-size: 12px;
    font-weight: bold;
    margin-top: 3px;
  }
`,xu=Gr.div`
  flex: 1;
  text-align: center;
  height: fit-content;

  h4 {
    color: red;
    font-size: 14px;
    font-weight: bold;
  }

  h3 {
    font-size: 14px;
    font-weight: bold;
    margin: 2px 0;
  }

  p {
    font-size: 12px;
  }
`,yu=Gr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 70px;
  text-align: center;

  svg {
    font-size: 20px;
    background-color: #d4f4a6;
    padding: 15px;
    border-radius: 50%;
    color: red;
    margin-bottom: 5px;
  }

  p {
    font-size: 12px;
    font-weight: bold;
    margin-top: 3px;
  }
`,bu=()=>{const[e,n]=(0,t.useState)([]),[r,a]=(0,t.useState)(!0),[o,i]=(0,t.useState)("");return(0,t.useEffect)((()=>{(async()=>{try{const e=await fetch("http://localhost:4000/api/subscription-state"),t=await e.json();e.ok?n(t.scrapedData.markets):i(t.message||"Failed to fetch game data.")}catch(e){i("Something went wrong. Please try again.")}finally{a(!1)}})()}),[]),console.log(e),(0,Yr.jsx)(du,{children:(0,Yr.jsxs)(fu,{children:[(0,Yr.jsx)(pu,{children:"Play Games"}),r?(0,Yr.jsx)("p",{style:{textAlign:"center",fontWeight:"bold"},children:"Loading..."}):o?(0,Yr.jsx)("p",{style:{textAlign:"center",color:"red",fontWeight:"bold"},children:o}):(0,Yr.jsx)(hu,{children:e.map(((e,t)=>(0,Yr.jsxs)(mu,{children:[(0,Yr.jsxs)(gu,{children:[(0,Yr.jsx)(Ha,{}),(0,Yr.jsx)("p",{children:"Chart"}),(0,Yr.jsxs)("p",{children:["Open: ",e.openTime]})]}),(0,Yr.jsxs)(xu,{children:[(0,Yr.jsx)("h4",{children:e.jodiDigit}),(0,Yr.jsx)("h3",{children:e.marketName}),(0,Yr.jsx)("p",{style:{color:"red",fontWeight:"bold"},children:"Bid is Closed"})]}),(0,Yr.jsx)(Ze,{to:`/dashboard/play/${e.marketName}`,style:{textDecoration:"none",color:"white"},children:(0,Yr.jsxs)(yu,{children:[(0,Yr.jsx)(Xa,{}),(0,Yr.jsx)("p",{children:"Play"}),(0,Yr.jsxs)("p",{children:["Close: ",e.closeTime]})]})})]},t)))})]})})},vu=Gr.div`
  background-color: #0b3c68;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
`,wu=Gr.div`
  background-color: white;
  width: 100%;
  padding: 30px;
  border-radius: 10px;
`,ku=Gr.h2`
  font-size: 50px;
  font-weight: bold;
  color: black;
  margin-bottom: 15px;
  text-align: left;
`,Su=Gr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 15px;
`,ju=Gr.div`
  background-color: #0b3c68;
  color: white;
  padding: 20px;  /* Reduced padding */
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
//   height: 90px;  /* Set a fixed height */
`,Eu=Gr.div`
  display: flex;
 align-items: center;
  justify-content:start;
  flex-direction: column;
  width: 70px;
  text-align: center;

  svg {
    font-size: 30px; /* Reduced icon size */
    background-color: #d4f4a6;
    padding: 10px;
    border-radius: 50%;
    color: #0b3c68;
    margin-bottom: 5px;
  }

  p {
    font-size: 12px; /* Reduced font size */
    font-weight: bold;
     margin-top:3px;
  }
`,_u=Gr.div`
  flex: 1;
  text-align: center;
  padding: 0;
  height: fit-content;

  h4 {
    color: red;
    font-size: 14px; /* Reduced font size */
    font-weight: bold;
  }

  h3 {
    font-size: 14px; /* Reduced font size */
    font-weight: bold;
    margin: 2px 0;
  }

  p {
    font-size: 12px; /* Reduced font size */
  }
`,Tu=Gr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:start;
  width: 70px;
  text-align: center;

  svg {
    font-size: 20px; /* Reduced icon size */
    background-color: #d4f4a6;
    padding: 15px;
    border-radius: 50%;
    color: red;
    margin-bottom: 5px;
  }

  p {
    font-size: 12px; /* Reduced font size */
    font-weight: bold;
  margin-top:3px;
  }
`,Cu=[{id:1,number:"770-40-226",name:"SRIDEVI MORNING",open:"09:10 AM",close:"10:10 AM"},{id:2,number:"450-91-137",name:"RUDRAKSH MORNING",open:"10:10 AM",close:"11:10 AM"},{id:3,number:"137-19-289",name:"KARNATAKA DAY",open:"10:05 AM",close:"11:05 AM"},{id:4,number:"899-68-125",name:"MILAN MORNING",open:"10:25 AM",close:"11:25 AM"},{id:5,number:"139-37-340",name:"KALYAN MORNING",open:"11:00 AM",close:"11:55 AM"},{id:6,number:"489-12-246",name:"SRIDEVI",open:"11:20 AM",close:"12:20 PM"},{id:7,number:"340-78-378",name:"MADHUR MORNING",open:"11:20 AM",close:"12:20 PM"},{id:8,number:"380-10-370",name:"TIME BAZAR",open:"12:55 PM",close:"01:55 PM"},{id:9,number:"780-57-359",name:"MADHUR DAY",open:"01:25 PM",close:"02:30 PM"}],zu=()=>(0,Yr.jsx)(vu,{children:(0,Yr.jsxs)(wu,{children:[(0,Yr.jsx)(ku,{children:"Gali Desawar Games"}),(0,Yr.jsx)(Su,{children:Cu.map((e=>(0,Yr.jsxs)(ju,{children:[(0,Yr.jsxs)(Eu,{children:[(0,Yr.jsx)(Ha,{}),(0,Yr.jsx)("p",{children:"Chart"}),(0,Yr.jsxs)("p",{children:["Open: ",e.open]})]}),(0,Yr.jsxs)(_u,{children:[(0,Yr.jsx)("h4",{children:e.number}),(0,Yr.jsx)("h3",{children:e.name}),(0,Yr.jsx)("p",{style:{color:"red",fontWeight:"bold"},children:"Bid is Closed"})]}),(0,Yr.jsxs)(Tu,{children:[(0,Yr.jsx)(Xa,{}),(0,Yr.jsx)("p",{children:"Play"}),(0,Yr.jsxs)("p",{children:["Close: ",e.close]})]})]},e.id)))})]})});function Pu(e){return Na({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M119.436 36c-16.126 0-29.2 17.237-29.2 38.5v363c0 21.263 13.074 38.5 29.2 38.5h275.298c16.126 0 29.198-17.237 29.198-38.5v-363c0-21.263-13.072-38.5-29.198-38.5H119.436zm57.214 16.174h.002c13.612-.318 26.502 9.855 27.073 28.043.976 31.09-47.738 52.945-52.31 70.015-4.998-18.649-51.414-37.573-52.45-70.015-.995-31.155 37.401-37.91 52.45-11.848 6.26-10.846 15.922-15.977 25.235-16.195zm66.17 112.83h7.963l63.121 160.834c2.536 6.498 7.727 9.748 15.573 9.748h5.468v8.916h-70.134v-8.916h5.587c7.291 0 12.442-.792 15.454-2.377 2.06-1.11 3.09-2.815 3.09-5.113 0-1.347-.278-2.774-.833-4.28l-14.62-37.324h-69.423l-8.2 21.397c-2.14 5.706-3.21 10.222-3.21 13.55 0 3.884 1.782 7.213 5.348 9.987 3.645 2.774 8.916 4.16 15.81 4.16h5.944v8.916h-63.715v-8.916c6.815 0 12.204-1.466 16.166-4.399 3.962-3.011 7.61-8.676 10.937-16.998l59.674-149.185zm-3.447 33.879l-31.502 78.336h62.17l-30.668-78.336zM360.73 361.77c4.572 17.07 53.289 38.923 52.312 70.013-.57 18.188-13.463 28.361-27.074 28.043h-.002c-9.313-.218-18.973-5.35-25.235-16.195-15.048 26.061-53.445 19.308-52.45-11.848 1.036-32.442 47.451-51.364 52.449-70.013z"},child:[]}]})(e)}const Ru=Gr.div`
  background-color: #0b3c68;
  display: flex;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
`,Ou=Gr.div`
  background-color: white;
  width: 100%;
  padding: 40px 20px;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`,Nu=Gr(Ze)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
  width: 150px;
  text-decoration: none;
  color: inherit;

  svg {
    font-size: 80px;
    color: #0b3c68;
    transition: 0.3s;

    @media (max-width: 768px) {
      font-size: 60px;
    }
  }

  p {
    font-weight: bold;
    font-size: 16px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  &:hover svg {
    color: #ffcc00;
  }
`,Au=[{id:1,name:"Cricket",icon:(0,Yr.jsx)(ro,{}),link:"/dashboard/cricket"},{id:2,name:"Matka",icon:(0,Yr.jsx)(Pu,{}),link:"/dashboard"},{id:6,name:"Game 3",icon:(0,Yr.jsx)(ro,{}),link:"/dashboard/tournaments"}],Lu=()=>(0,Yr.jsx)(Ru,{children:(0,Yr.jsx)(Ou,{children:Au.map((e=>(0,Yr.jsxs)(Nu,{to:e.link,children:[e.icon,(0,Yr.jsx)("p",{children:e.name})]},e.id)))})}),Du=Gr.div`
  font-size: 0.9rem;
  padding: 10px 0;
  color: #ddd;
  text-align: center;
`,Iu=Gr.div`
  font-size: 0.9rem;
  padding: 20px 0;
  background: rgb(140, 131, 131);
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  p {
    margin: 0;
    cursor: pointer;
  }
`,Mu=()=>{const[e,n]=(0,t.useState)(!0);return(0,Yr.jsxs)("div",{children:[(0,Yr.jsx)(au,{}),(0,Yr.jsx)(Lu,{}),(0,Yr.jsx)(uu,{setToggleGames:n,toggleGames:e}),e?(0,Yr.jsx)(bu,{}):(0,Yr.jsx)(zu,{}),(0,Yr.jsxs)(Du,{children:["Copyright \xa9 2004 - ",(new Date).getFullYear()," Sriti Matka | All rights reserved."]}),(0,Yr.jsxs)(Iu,{children:[(0,Yr.jsx)("p",{children:"Terms"}),(0,Yr.jsx)("p",{children:"Policy"})]})]})},Fu=Gr.div`
//   background: #002b4e;
  // padding: 20px 0;
  min-height: 100vh;
  box-sizing:border-box;
  @media (max-width: 768px) {
    width: 100%;
    // padding: 10px;
  }
`,Bu=Gr.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,$u=Gr.div`
  background-color: white;
  width: 95%;
//   max-width: 1200px;
  padding: 20px;
  border-radius: 10px;
`,Uu=Gr.div`
  background-color: #0b3c68;
  color: white;
  padding: 50px 20px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
`,Hu=Gr.div`
  display: flex;
//   align-items: center;
  gap: 15px;
`,Wu=Gr.div`
  background-color: #d4f4a6;
  padding: 13px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width:60px;

  svg {
    font-size: 30px;
    color: #0b3c68;
  }
`,Vu=Gr.div`
  display: flex;
  flex-direction: column;
  justify-content:start;
  align-items: start;

  span {
    font-size: 23px;
    font-weight: bold;
  }

  h2 {
    font-size: 40px;
    margin: 0;
  }
`,Ku=Gr.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  flex-wrap: wrap;
`,qu=Gr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
  width: 100px;

  svg {
    font-size: 90px;
    color: #0b3c68;
  }

  p {
    font-size: 14px;
    font-weight: bold;
  }
`,Gu=Gr.div`
  background-color: #0b3c68;
  height: 5px;
  width: 100%;
  border-radius: 5px;
  margin: 10px 0;
`,Qu=Gr.div`
  margin-top: 20px;
`,Yu=Gr.h2`
  font-size: 50px;
  font-weight: bold;
  color: black;
  text-align:left;
`,Ju=Gr.div`
  background-color: #e0e0e5;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  align-items: center;

  gap: 15px;
  font-size: 18px;
  margin-top: 10px;
`,Xu=Gr.div`
  background-color:rgb(103, 156, 29);
  padding: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 30px;
    color:rgb(6, 27, 46);
  }
`,Zu=Gr.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  justify-content:start;
  align-items:start;

  span {
    font-weight: bold;
    color: green;
    font-size: 35px;
  }

  p {
    margin: 5px 0;
  }
`,ed=()=>{const{profile:e}=Qc();return(0,Yr.jsxs)(Fu,{children:[(0,Yr.jsx)(au,{}),(0,Yr.jsx)(Bu,{children:(0,Yr.jsxs)($u,{children:[(0,Yr.jsx)(Uu,{children:(0,Yr.jsxs)(Hu,{children:[(0,Yr.jsx)(Wu,{children:(0,Yr.jsx)(lo,{})}),(0,Yr.jsxs)(Vu,{children:[(0,Yr.jsx)("span",{children:"Balance"}),(0,Yr.jsxs)("h2",{children:[" ",e.walletBalance]})]})]})}),(0,Yr.jsxs)(Ku,{children:[(0,Yr.jsxs)(qu,{children:[(0,Yr.jsx)(Ka,{}),(0,Yr.jsx)("p",{children:"Add Point"})]}),(0,Yr.jsxs)(qu,{children:[(0,Yr.jsx)(Ya,{}),(0,Yr.jsx)("p",{children:"Redeem Point"})]}),(0,Yr.jsxs)(qu,{children:[(0,Yr.jsx)(Ia,{style:{border:"2px solid #0b3c68",borderRadius:"50%",padding:"10px"}}),(0,Yr.jsx)("p",{children:"WhatsApp"})]}),(0,Yr.jsxs)(qu,{children:[(0,Yr.jsx)(Ja,{}),(0,Yr.jsx)("p",{children:"Call"})]})]}),(0,Yr.jsx)(Gu,{}),(0,Yr.jsxs)(Qu,{children:[(0,Yr.jsx)(Yu,{children:"Transactions"}),(0,Yr.jsxs)(Ju,{children:[(0,Yr.jsx)(Xu,{children:(0,Yr.jsx)(Ba,{})}),(0,Yr.jsxs)(Zu,{children:[(0,Yr.jsx)("span",{children:"success"}),(0,Yr.jsxs)("p",{children:["Points: ",e.walletBalance]}),(0,Yr.jsx)("p",{children:"07 February, 2025"})]})]})]})]})})]})},td=Gr.div`
  background-color: white;
  width: 97%;
  padding: 20px;
  
  margin: 40px auto 5px auto;
  box-sizing: border-box;
  border-radius: 10px;

  @media (max-width: 768px) {
    padding: 15px;
    margin: 20px auto;
  }
`,nd=Gr.div`
  background-color: #0b3c68;
  color: white;
  padding: 40px 20px;
  box-sizing:border-box;
  display: flex;
  align-items: center;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
//   max-width: 600px;
  margin: auto;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`,rd=Gr.div`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
`,ad=Gr.div`
  background-color: #d4f4a6;
  padding: 15px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;

  svg {
    font-size: 35px;
    color: #0b3c68;
  }

  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
    padding: 10px;

    svg {
      font-size: 28px;
    }
  }
`,od=Gr.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  span {
    font-size: 20px;
    font-weight: bold;
  }

  h2 {
    font-size: 36px;
    margin: 0;
  }

  @media (max-width: 768px) {
    span {
      font-size: 18px;
    }

    h2 {
      font-size: 28px;
    }
  }
`,id=()=>{const{profile:e}=Qc();return(0,Yr.jsxs)(td,{children:[(0,Yr.jsx)(nd,{children:(0,Yr.jsxs)(rd,{children:[(0,Yr.jsx)(ad,{children:(0,Yr.jsx)(io,{})}),(0,Yr.jsxs)(od,{children:[(0,Yr.jsx)("h2",{children:e.username}),(0,Yr.jsx)("span",{children:e.email})]})]})}),(0,Yr.jsxs)(Ku,{children:[(0,Yr.jsxs)(qu,{children:[(0,Yr.jsx)(Ka,{}),(0,Yr.jsx)("p",{children:"Add Point"})]}),(0,Yr.jsxs)(qu,{children:[(0,Yr.jsx)(Ya,{}),(0,Yr.jsx)("p",{children:"Redeem Point"})]}),(0,Yr.jsxs)(qu,{children:[(0,Yr.jsx)(Ia,{style:{border:"2px solid #0b3c68",borderRadius:"50%",padding:"10px"}}),(0,Yr.jsx)("p",{children:"WhatsApp"})]}),(0,Yr.jsxs)(qu,{children:[(0,Yr.jsx)(Ja,{}),(0,Yr.jsx)("p",{children:"Call"})]})]})]})},ld=Gr.div`
  width: 100%;
  padding: 20px;
  margin: 40px auto 5px auto;
  box-sizing: border-box;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
    margin: 20px auto;
  }
`,sd=Gr.div`
  background-color: white;
  width: 100%;
  padding: 30px;
  text-align: start;
  border-radius: 10px;
  box-sizing:border-box;
  @media (max-width: 768px) {
    padding: 20px;
  }
`,cd=Gr.h1`
  font-size: 40px;
  font-weight: bold;
  color: black;

  @media (max-width: 768px) {
    font-size: 28px;
    text-align: center;
  }
`,ud=Gr.div`
  background-color: #e0e0e5;
  padding: 30px;
  border-radius: 10px;
  margin-top: 20px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`,dd=Gr.div`
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  flex-direction: column;

  span {
    color: #0b3c68;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 16px;
  }
`,fd=Gr.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  width: 100%;

  &:focus {
    border-color: #0b3c68;
  }

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 14px;
  }
`,pd=()=>{const{profile:e}=Qc(),[n,r]=(0,t.useState)({name:e.username,email:e.email,mobile:"NA"}),a=e=>{r({...n,[e.target.name]:e.target.value})};return(0,Yr.jsx)(ld,{children:(0,Yr.jsxs)(sd,{children:[(0,Yr.jsx)(cd,{children:"Profile"}),(0,Yr.jsxs)(ud,{children:[(0,Yr.jsxs)(dd,{children:[(0,Yr.jsx)("span",{children:"Name"}),(0,Yr.jsx)(fd,{type:"text",name:"name",value:e.username,onChange:a,placeholder:"Enter your name"})]}),(0,Yr.jsxs)(dd,{children:[(0,Yr.jsx)("span",{children:"Email"}),(0,Yr.jsx)(fd,{type:"email",name:"email",value:e.email,onChange:a,placeholder:"Enter your email"})]}),(0,Yr.jsxs)(dd,{children:[(0,Yr.jsx)("span",{children:"Mobile"}),(0,Yr.jsx)(fd,{type:"text",name:"mobile",value:n.mobile,onChange:a,placeholder:"Enter your mobile number"})]})]})]})})},hd=Gr.div`
  background-color: #0b3c68;
  display: flex;
  justify-content: start;
  padding: 20px;
  width: 100%;
    box-sizing:border-box;
    @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
    margin: 20px auto;
  }
`,md=Gr.div`
  background-color: white;
  width: 100%;
  padding: 30px;
  text-align: start;
  border-radius: 10px;
`,gd=Gr.h1`
  font-size: 40px;
  font-weight: bold;
  color: black;
`,xd=Gr.div`
  background-color: #e0e0e5;
  padding: 30px;
  border-radius: 10px;
  margin-top: 20px;
`,yd=Gr.div`
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: start;

  span {
    color: #0b3c68;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
  }
`,bd=Gr.button`
  background-color: #0b3c68;
  color: white;
  font-size: 18px;
  font-weight: bold;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #083255;
  }
`,vd=()=>(0,Yr.jsx)(hd,{children:(0,Yr.jsxs)(md,{children:[(0,Yr.jsx)(gd,{children:"Change Password"}),(0,Yr.jsx)(xd,{children:(0,Yr.jsx)(yd,{children:(0,Yr.jsx)(Ze,{to:"/change-password",children:(0,Yr.jsx)(bd,{children:"Change Password"})})})})]})}),wd=Gr.div`
  background-color: #0b3c68;
  display: flex;
  justify-content: start;
  padding: 20px;
  width: 100%;
  box-sizing:border-box;
  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
    margin: 20px auto;
  }
`,kd=Gr.div`
  background-color: white;
  width: 100%;
  padding: 30px;
  text-align: start;
  border-radius: 10px;
`,Sd=Gr.h1`
  font-size: 40px;
  font-weight: bold;
  color: black;
`,jd=Gr.div`
  background-color: #e0e0e5;
  padding: 30px;
  border-radius: 10px;
  margin-top: 20px;
`,Ed=Gr.div`
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: start;

  span {
    color: #0b3c68;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
  }
`,_d=Gr.button`
  background-color:rgb(94, 98, 102);
  color: white;
  font-size: 18px;
  font-weight: bold;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #083255;
  }
`,Td=()=>(0,Yr.jsx)(wd,{children:(0,Yr.jsxs)(kd,{children:[(0,Yr.jsx)(Sd,{children:"Delete Account"}),(0,Yr.jsx)(jd,{children:(0,Yr.jsx)(Ed,{children:(0,Yr.jsx)(_d,{children:"Delete Account"})})})]})}),Cd=()=>(0,Yr.jsxs)("div",{style:{backgroundColor:" #0b3c68"},children:[(0,Yr.jsx)(au,{}),(0,Yr.jsx)(id,{}),(0,Yr.jsx)(pd,{}),(0,Yr.jsx)(vd,{}),(0,Yr.jsx)(Td,{})]}),zd=Gr.div`
  min-height: 100vh;
  display: flex;
  background: linear-gradient(#0b66ff, #0057d9);
`,Pd=Gr.div`
  width: 30%;
  min-width: 320px;
  background-color: #003c7b;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  color: #fff;
`,Rd=Gr.div`
  flex: 1;
`,Od=Gr.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  background: yellow;
`,Nd=Gr.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`,Ad=Gr.form`
  width: 100%;
  max-width: 80%;
  display: flex;
  flex-direction: column;
`,Ld=Gr.label`
  text-align: left;
  margin-bottom: 0.25rem;
  font-weight: bold;
  color: #fff;
`,Dd=Gr.input`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  &:focus {
    outline: none;
    border-color: #0b66ff;
  }
`,Id=Gr.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.75rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  width: 100%;
  &:hover {
    background-color: #005ce6;
  }
`,Md=Gr.p`
  color: red;
  font-weight: bold;
  text-align: center;
`,Fd=Gr.p`
  color: green;
  font-weight: bold;
  text-align: center;
`,Bd=()=>{const[e,n]=(0,t.useState)({oldPassword:"",newPassword:"",confirmPassword:""}),[r,a]=(0,t.useState)(""),[o,i]=(0,t.useState)(""),l=Z(),s=t=>{n({...e,[t.target.name]:t.target.value})};return(0,Yr.jsxs)(zd,{children:[(0,Yr.jsxs)(Pd,{children:[(0,Yr.jsx)(Od,{}),(0,Yr.jsx)(Nd,{children:"Change Your Password"}),(0,Yr.jsxs)(Ad,{onSubmit:async t=>{if(t.preventDefault(),a(""),i(""),e.newPassword===e.confirmPassword){console.log("\ud83d\udce4 Sending Change Password Data:",e);try{const t=await fetch("http://localhost:4000/api/change-password",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},body:JSON.stringify({oldPassword:e.oldPassword,newPassword:e.newPassword})}),n=await t.json();console.log("\u2705 Received Response:",n),t.ok?(i("Password changed successfully! Redirecting..."),setTimeout((()=>l("/dashboard")),2e3)):a(n.message||"Failed to change password")}catch(n){console.error("\u274c Error:",n),a("Something went wrong. Please try again.")}}else a("New password and confirm password do not match.")},children:[(0,Yr.jsx)(Ld,{children:"Old Password"}),(0,Yr.jsx)(Dd,{type:"password",name:"oldPassword",placeholder:"Enter Old Password",value:e.oldPassword,onChange:s,required:!0}),(0,Yr.jsx)(Ld,{children:"New Password"}),(0,Yr.jsx)(Dd,{type:"password",name:"newPassword",placeholder:"Enter New Password",value:e.newPassword,onChange:s,required:!0}),(0,Yr.jsx)(Ld,{children:"Confirm Password"}),(0,Yr.jsx)(Dd,{type:"password",name:"confirmPassword",placeholder:"Confirm New Password",value:e.confirmPassword,onChange:s,required:!0}),(0,Yr.jsx)(Id,{type:"submit",children:"Change Password"}),r&&(0,Yr.jsx)(Md,{children:r}),o&&(0,Yr.jsx)(Fd,{children:o})]})]}),(0,Yr.jsx)(Rd,{})]})},$d=Gr.div`
  background-color: #0b3c68;
  display: flex;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px 0px;
  }
`,Ud=Gr.div`
  background-color: white;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
`,Hd=Gr.div`
  background-color: red;
  color: white;
  text-align: center;
  padding: 15px;
  font-weight: bold;
  font-size: 18px;
  border-radius: 10px;
  margin-bottom: 20px;
`,Wd=Gr.h1`
  font-size: 36px;
  font-weight: bold;
  color: black;
  margin-bottom: 20px;
`,Vd=Gr.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Kd=Gr.input`
  width: 80%;
  padding: 10px;
  font-size: 20px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
`,qd=Gr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  margin-bottom: 20px;
`,Gd=Gr.button`
  background-color: #0b3c68;
  color: white;
  font-size: 18px;
  font-weight: bold;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  
  &:hover {
    background-color: #083255;
  }
`,Qd=Gr.button`
  background-color: #004080;
  color: white;
  font-size: 18px;
  font-weight: bold;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 200px;
  margin-top: 20px;

  &:hover {
    background-color: #002b5e;
  }
`,Yd=()=>{const[e,n]=(0,t.useState)("");return(0,Yr.jsx)($d,{children:(0,Yr.jsxs)(Ud,{children:[(0,Yr.jsxs)(Hd,{children:["For Better Payment Experience ",(0,Yr.jsx)("br",{})," Download Shri Matka App"]}),(0,Yr.jsx)(Wd,{children:"Add Points"}),(0,Yr.jsx)(Vd,{children:(0,Yr.jsx)(Kd,{type:"number",placeholder:"Enter Amount",value:e,onChange:e=>{n(e.target.value)}})}),(0,Yr.jsx)(qd,{children:[300,500,1e3,2e3,5e3,1e4].map((e=>(0,Yr.jsx)(Gd,{onClick:()=>(e=>{n(e)})(e),children:e},e)))}),(0,Yr.jsx)(Qd,{children:"Proceed >"})]})})},Jd=Gr.div`
  text-align: center;
  margin-top: 30px;
  color: white;
  font-size: 14px;
`,Xd=Gr.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;

  p {
    cursor: pointer;
    text-decoration: underline;
  }
`,Zd=()=>{const{profile:e}=Qc();return(0,Yr.jsxs)(Fu,{children:[(0,Yr.jsx)(au,{}),(0,Yr.jsx)(Bu,{children:(0,Yr.jsx)($u,{children:(0,Yr.jsx)(Uu,{children:(0,Yr.jsxs)(Hu,{children:[(0,Yr.jsx)(Wu,{children:(0,Yr.jsx)(lo,{})}),(0,Yr.jsxs)(Vu,{children:[(0,Yr.jsx)("span",{children:"Balance"}),(0,Yr.jsx)("h2",{children:e.walletBalance})]})]})})})}),(0,Yr.jsx)(Yd,{}),(0,Yr.jsxs)(Jd,{children:["Copyright \xa9 2024 - 2025 Shri Matka | All rights reserved.",(0,Yr.jsxs)(Xd,{children:[(0,Yr.jsx)("p",{children:"Terms"}),(0,Yr.jsx)("p",{children:"Privacy"})]})]})]})},ef=n.p+"static/media/matkaImag.b29fe9137280dc3421cc.png",tf=Gr.div`
  background-color: #0b3c68;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 40px;
`,nf=Gr.div`
  background-color: white;
  width: 100%;
  max-width: 1400px;
  padding: 30px;
  border-radius: 10px;
`,rf=Gr.button`
  background-color: #0b3c68;
  color: white;
  border: none;
  padding: 5px 15px;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
`,af=Gr.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  background: #0b3c68;
  border-radius: 20px;
`,of=Gr.h1`
  font-size: 24px;
  font-weight: bold;
  color: #6fdc6f;
  text-transform: uppercase;
  text-align: center;
  flex: 1;
`,lf=Gr.div`
  background-color: ${e=>e.color};
  color: white;
  text-align: center;
  padding: 10px;
  font-weight: bold;
  width:fit-content;
  font-size: 16px;
  border-radius: 10px;
  margin: auto;
  animation: colorChange 0.5s infinite alternate;
  @keyframes colorChange {
    0% {
      background-color: red;
    }
    100% {
      background-color: #0b3c68;
    }
  }
`,sf=Gr.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,cf=Gr.div`
  text-align: center;
`,uf=Gr.img`
  width: 200px;
  height: auto;
  margin-bottom: 10px;
`,df=Gr.h2`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 0;
`,ff=Gr.p`
  font-size: 16px;
  font-weight: bold;
  color: gray;
  margin-bottom: 10px;
  padding-bottom: 5px;
  border-bottom: 2px solid #ccc; /* Added bottom border */
`,pf=()=>{const{gameName:e}=ee(),t=[{id:1,title:"10 KA 95",subtitle:"SINGLE DIGIT",image:ef},{id:2,title:"10 KA 950",subtitle:"JODI DIGIT",image:ef},{id:3,title:"10 KA 95",subtitle:"SINGLE DIGIT",image:ef},{id:4,title:"10 KA 950",subtitle:"JODI DIGIT",image:ef}];return(0,Yr.jsxs)(Fu,{children:[(0,Yr.jsx)(au,{}),(0,Yr.jsx)(tf,{children:(0,Yr.jsxs)(nf,{children:[(0,Yr.jsxs)(af,{children:[(0,Yr.jsx)(rf,{children:(0,Yr.jsx)($a,{})}),(0,Yr.jsx)(of,{children:e})]}),(0,Yr.jsxs)(lf,{children:["For Better Experience ",(0,Yr.jsx)("br",{})," Download ShriMatka App"]}),(0,Yr.jsx)(sf,{children:t.map((t=>(0,Yr.jsx)(Ze,{to:`/dashboard/bidpage/${e}`,children:(0,Yr.jsxs)(cf,{children:[(0,Yr.jsx)(uf,{src:t.image,alt:t.subtitle}),(0,Yr.jsx)(ff,{children:t.title}),(0,Yr.jsx)(df,{children:t.subtitle})]})},t.id)))})]})})]})},hf=Gr.div`
  background-color: #0b3c68;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 40px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 10px;
    width: 100%;
  }
`,mf=Gr.div`
  background-color: white;
  width: 100%;
  max-width: 1400px;
  padding: 30px;
  border-radius: 10px;
  text-align: left;

  @media (max-width: 768px) {
    padding: 20px;
  }
`,gf=Gr.h1`
  font-size: 40px;
  font-weight: bold;
  color: black;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 32px;
    text-align: center;
  }
`,xf=Gr.div`
  background-color: #e0e0e5;
  padding: 30px;
  border-radius: 10px;
  margin-top: 20px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`,yf=Gr.div`
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  flex-direction: column;

  span {
    color: #0b3c68;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 12px;
  }
`,bf=()=>(0,Yr.jsxs)(Fu,{children:[(0,Yr.jsx)(au,{}),(0,Yr.jsx)(hf,{children:(0,Yr.jsxs)(mf,{children:[(0,Yr.jsx)(gf,{children:"Payment Details"}),(0,Yr.jsxs)(xf,{children:[(0,Yr.jsxs)(yf,{children:[(0,Yr.jsx)("span",{children:"UPI ID"}),(0,Yr.jsx)("input",{type:"text",placeholder:"Enter UPI ID"})]}),(0,Yr.jsxs)(yf,{children:[(0,Yr.jsx)("span",{children:"Google Pay Number"}),(0,Yr.jsx)("input",{type:"text",placeholder:"Enter Google Pay Number"})]}),(0,Yr.jsxs)(yf,{children:[(0,Yr.jsx)("span",{children:"Paytm Number"}),(0,Yr.jsx)("input",{type:"text",placeholder:"Enter Paytm Number"})]}),(0,Yr.jsxs)(yf,{children:[(0,Yr.jsx)("span",{children:"PhonePe Number"}),(0,Yr.jsx)("input",{type:"text",placeholder:"Enter PhonePe Number"})]}),(0,Yr.jsxs)(yf,{children:[(0,Yr.jsx)("span",{children:"Your Name in Account"}),(0,Yr.jsx)("input",{type:"text",placeholder:"Enter Account Name"})]}),(0,Yr.jsxs)(yf,{children:[(0,Yr.jsx)("span",{children:"Bank Name"}),(0,Yr.jsx)("input",{type:"text",placeholder:"Enter Bank Name"})]}),(0,Yr.jsxs)(yf,{children:[(0,Yr.jsx)("span",{children:"Account Number"}),(0,Yr.jsx)("input",{type:"text",placeholder:"Enter Account Number"})]})]})]})})]}),vf=Gr.div`
//   background-color: #0b3c68;
//   min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 20px;


  @media (max-width: 768px) {
    padding: 20px;
  }
`,wf=Gr.div`
  background-color: white;
  width: 100%;
//   max-width: 1400px;
  padding: 30px;
  border-radius: 10px;
text-align:left;
  @media (max-width: 768px) {
    padding: 20px;
  }
`,kf=Gr.h1`
  font-size: 40px;
  font-weight: bold;
  color: black;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 32px;
    text-align: center;
  }
`,Sf=Gr.p`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }
`,jf=Gr.div`
  background-color: #e0e0e5;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  font-size: 16px;
  color: black;
  font-weight: bold;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px;
  }
`,Ef=Gr.div`
  background-color: #0b3c68;
  height: 5px;
  width: 100%;
  border-radius: 5px;
//   margin: 20px 0;
`,_f=()=>{const{profile:e}=Qc();return(0,Yr.jsx)(vf,{children:(0,Yr.jsxs)(wf,{children:[(0,Yr.jsx)(kf,{children:"Redeem Points"}),(0,Yr.jsxs)(Sf,{children:["Available Point to Redeem : ",e.walletBalance]}),(0,Yr.jsxs)(jf,{children:["You do not have enough points to redeem. ",(0,Yr.jsx)("br",{}),"Min Required Points are 1000."]}),(0,Yr.jsx)(Ef,{}),(0,Yr.jsx)(kf,{children:"Submitted Redeems"})]})})},Tf=Gr.div`
  text-align: center;
  margin-top: 30px;
  color: white;
  font-size: 14px;
`,Cf=Gr.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;

  p {
    cursor: pointer;
    text-decoration: underline;
  }
`,zf=()=>{const{profile:e}=Qc();return(0,Yr.jsxs)(Fu,{children:[(0,Yr.jsx)(au,{}),(0,Yr.jsx)(Bu,{children:(0,Yr.jsx)($u,{children:(0,Yr.jsx)(Uu,{children:(0,Yr.jsxs)(Hu,{children:[(0,Yr.jsx)(Wu,{children:(0,Yr.jsx)(lo,{})}),(0,Yr.jsxs)(Vu,{children:[(0,Yr.jsx)("span",{children:"Balance"}),(0,Yr.jsx)("h2",{children:e.walletBalance})]})]})})})}),(0,Yr.jsx)(_f,{}),(0,Yr.jsxs)(Tf,{children:["Copyright \xa9 2024 - 2025 Shri Matka | All rights reserved.",(0,Yr.jsxs)(Cf,{children:[(0,Yr.jsx)("p",{children:"Terms"}),(0,Yr.jsx)("p",{children:"Privacy"})]})]})]})},Pf=Gr.div`
  width: 100%;
  background-color: #0b3c68;
  display: flex;
  justify-content: center;
  padding: 20px;
  box-sizing:border-box;
`,Rf=Gr.div`
  background-color: white;
  width: 100%;
  // max-width: 1400px;
  padding: 20px;
  border-radius: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`,Of=Gr.div`
  background-color: #003c7b;
  color: white;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 15px;
  font-size: 24px;
  font-weight: bold;
`,Nf=Gr.div`
  display: flex;
  align-items: center;
  gap: 15px;
`,Af=Gr.div`
  background-color: #d4f4a6;
  padding: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 40px;
    color: #0b3c68;
  }
`,Lf=Gr.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 18px;
    font-weight: bold;
  }

  h2 {
    font-size: 30px;
    margin: 0;
  }
`,Df=Gr.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 20px;
  }
`,If=Gr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 22px;
  font-weight: bold;
  color: black;

  svg {
    font-size: 90px;
    color: #0b3c68;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    font-size: 18px;

    svg {
      font-size: 40px;
    }
  }
`,Mf=()=>{const{profile:e}=Qc();return(0,Yr.jsx)(Pf,{children:(0,Yr.jsxs)(Rf,{children:[(0,Yr.jsx)(Of,{children:(0,Yr.jsxs)(Nf,{children:[(0,Yr.jsx)(Af,{children:(0,Yr.jsx)(_l,{})}),(0,Yr.jsxs)(Lf,{children:[(0,Yr.jsx)("span",{children:"Balance"}),(0,Yr.jsx)("h2",{children:e.walletBalance})]})]})}),(0,Yr.jsxs)(Df,{children:[(0,Yr.jsxs)(If,{children:[(0,Yr.jsx)(Ga,{}),(0,Yr.jsx)("p",{children:"Home"})]}),(0,Yr.jsxs)(If,{children:[(0,Yr.jsx)(Ka,{}),(0,Yr.jsx)("p",{children:"Add"})]}),(0,Yr.jsxs)(If,{children:[(0,Yr.jsx)(lo,{}),(0,Yr.jsx)("p",{children:"Wallet"})]}),(0,Yr.jsxs)(If,{children:[(0,Yr.jsx)(ro,{}),(0,Yr.jsx)("p",{children:"Wins"})]})]})]})})},Ff=Gr.div`
  width: 100%;
  background-color: #0b3c68;
  display: flex;
  justify-content: center;
  padding: 20px;
    box-sizing:border-box;
`,Bf=Gr.div`
  background-color: white;
  width: 100%;
  padding: 20px;
  border-radius: 20px;
`,$f=Gr.div`
  display: flex;
  width: 100%;
  border-radius: 30px;
  overflow: hidden;
  margin-bottom: 20px;
`,Uf=Gr.button`
  flex: 1;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  text-align: center;
  color: white;
  background-color: ${e=>{let{active:t}=e;return t?"#0b3c68":"gray"}};
  border-radius: ${e=>{let{first:t,last:n}=e;return t?"30px 0 0 30px":n?"0 30px 30px 0":"0"}};

  &:hover {
    background-color: ${e=>{let{active:t}=e;return t?"#0b3c68":"#888"}};
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px;
  }
`,Hf=Gr.h1`
  font-size: 40px;
  font-weight: bold;
  color: black;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 32px;
    text-align: center;
  }
`,Wf=Gr.div`
  background-color: #e0e0e5;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  font-size: 16px;
  color: black;
  font-weight: bold;
  margin-top: 15px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px;
  }
`,Vf=()=>{const[e,n]=(0,t.useState)("bids");return(0,Yr.jsx)(Ff,{children:(0,Yr.jsxs)(Bf,{children:[(0,Yr.jsxs)($f,{children:[(0,Yr.jsx)(Uf,{first:!0,active:"bids"===e,onClick:()=>n("bids"),children:"Bids"}),(0,Yr.jsx)(Uf,{last:!0,active:"gali-bids"===e,onClick:()=>n("gali-bids"),children:"Gali Bids"})]}),(0,Yr.jsx)(Hf,{children:"Your Gali Bids"}),(0,Yr.jsx)(Wf,{children:"You do not have any bid."})]})})},Kf=()=>(0,Yr.jsxs)("div",{children:[(0,Yr.jsx)(au,{}),(0,Yr.jsx)(Mf,{}),(0,Yr.jsx)(Vf,{}),(0,Yr.jsxs)(Tf,{children:["Copyright \xa9 2024 - 2025 Shri Matka | All rights reserved.",(0,Yr.jsxs)(Cf,{children:[(0,Yr.jsx)("p",{children:"Terms"}),(0,Yr.jsx)("p",{children:"Privacy"})]})]})]}),qf=Gr.div`
  width: 100%;
  background-color: #0b3c68;
  display: flex;
  justify-content: center;
  padding: 20px;
    box-sizing:border-box;
`,Gf=Gr.div`
  background-color: white;
  width: 100%;
  // max-width: 1400px;
  padding: 20px;
  border-radius: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`,Qf=Gr.div`
  background-color: #003c7b;
  color: white;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 15px;
  font-size: 24px;
  font-weight: bold;
`,Yf=Gr.div`
  display: flex;
  align-items: center;
  gap: 15px;
`,Jf=Gr.div`
  background-color: #d4f4a6;
  padding: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 40px;
    color: #0b3c68;
  }
`,Xf=Gr.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 18px;
    font-weight: bold;
  }

  h2 {
    font-size: 30px;
    margin: 0;
  }
`,Zf=Gr.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 20px;
  }
`,ep=Gr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 22px;
  font-weight: bold;
  color: black;

  svg {
    font-size: 90px;
    color: #0b3c68;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    font-size: 18px;

    svg {
      font-size: 40px;
    }
  }
`,tp=()=>{const{profile:e}=Qc();return(0,Yr.jsx)(qf,{children:(0,Yr.jsxs)(Gf,{children:[(0,Yr.jsx)(Qf,{children:(0,Yr.jsxs)(Yf,{children:[(0,Yr.jsx)(Jf,{children:(0,Yr.jsx)(_l,{})}),(0,Yr.jsxs)(Xf,{children:[(0,Yr.jsx)("span",{children:"Balance"}),(0,Yr.jsx)("h2",{children:e.walletBalance})]})]})}),(0,Yr.jsxs)(Zf,{children:[(0,Yr.jsxs)(ep,{children:[(0,Yr.jsx)(Ga,{}),(0,Yr.jsx)("p",{children:"Home"})]}),(0,Yr.jsxs)(ep,{children:[(0,Yr.jsx)(Ka,{}),(0,Yr.jsx)("p",{children:"Add"})]}),(0,Yr.jsxs)(ep,{children:[(0,Yr.jsx)(lo,{}),(0,Yr.jsx)("p",{children:"Wallet"})]}),(0,Yr.jsxs)(ep,{children:[(0,Yr.jsx)(ro,{}),(0,Yr.jsx)("p",{children:"Wins"})]})]})]})})},np=Gr.div`
  width: 100%;
  background-color: #0b3c68;
  display: flex;
  justify-content: center;
  padding: 20px;
    box-sizing:border-box;
`,rp=Gr.div`
  background-color: white;
  width: 100%;
  padding: 20px;
  border-radius: 20px;
`,ap=Gr.h1`
  font-size: 40px;
  font-weight: bold;
  color: black;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 32px;
    text-align: center;
  }
`,op=Gr.div`
  background-color: #e0e0e5;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  font-size: 16px;
  color: black;
  font-weight: bold;
  margin-top: 15px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px;
  }
`,ip=()=>(0,Yr.jsx)(np,{children:(0,Yr.jsxs)(rp,{children:[(0,Yr.jsx)(ap,{children:"Your Wining Bids"}),(0,Yr.jsx)(op,{children:"You do not have any bid."})]})}),lp=()=>(0,Yr.jsxs)("div",{children:[(0,Yr.jsx)(au,{}),(0,Yr.jsx)(tp,{}),(0,Yr.jsx)(ip,{}),(0,Yr.jsxs)(Tf,{children:["Copyright \xa9 2024 - 2025 Shri Matka | All rights reserved.",(0,Yr.jsxs)(Cf,{children:[(0,Yr.jsx)("p",{children:"Terms"}),(0,Yr.jsx)("p",{children:"Privacy"})]})]})]}),sp=Gr.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  background-color: #0b3c68;
  
`,cp=Gr.div`
  width: 100%;
//   max-width: 1400px;
  background:white;
  padding:30px;
  border-radius:15px;
  text-align:left;
`,up=Gr.h1`
  font-size: 40px;
  font-weight: bold;
  color: black;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 32px;
    text-align: center;
  }
`,dp=Gr.div`
  background-color: #0b3c68;
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`,fp=Gr.div`
  background-color: #c8ff8a;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;

  svg {
    font-size: 40px;
    color: #0b3c68;
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
    margin: 0 auto 15px auto;
  }
`,pp=Gr.div`
  color: white;
  font-size: 20px;
  font-weight: bold;
`,hp=Gr.p`
  font-size: 16px;
  color: #c8ff8a;
  font-weight: normal;
  margin: 0;
`,mp=Gr.h2`
  font-size: 22px;
  margin: 5px 0;
`,gp=()=>(0,Yr.jsx)(sp,{children:(0,Yr.jsxs)(cp,{children:[(0,Yr.jsx)(up,{children:"Gali Deasawer Rates"}),[{id:1,type:"Single Digit",rate:"10 KA 95"},{id:2,type:"Jodi Digit",rate:"10 KA 950"}].map((e=>(0,Yr.jsxs)(dp,{children:[(0,Yr.jsx)(fp,{children:(0,Yr.jsx)(Ka,{})}),(0,Yr.jsxs)(pp,{children:[(0,Yr.jsx)(hp,{children:e.type}),(0,Yr.jsx)(mp,{children:e.rate})]})]},e.id)))]})}),xp=Gr.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  background-color: #0b3c68;
  
`,yp=Gr.div`
  width: 100%;
//   max-width: 1400px;
  background:white;
  padding:30px;
  border-radius:15px;
  text-align:left;
`,bp=Gr.h1`
  font-size: 40px;
  font-weight: bold;
  color: black;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 32px;
    text-align: center;
  }
`,vp=Gr.div`
  background-color: #0b3c68;
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`,wp=Gr.div`
  background-color: #c8ff8a;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;

  svg {
    font-size: 40px;
    color: #0b3c68;
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
    margin: 0 auto 15px auto;
  }
`,kp=Gr.div`
  color: white;
  font-size: 20px;
  font-weight: bold;
`,Sp=Gr.p`
  font-size: 16px;
  color: #c8ff8a;
  font-weight: normal;
  margin: 0;
`,jp=Gr.h2`
  font-size: 22px;
  margin: 5px 0;
`,Ep=()=>(0,Yr.jsx)(xp,{children:(0,Yr.jsxs)(yp,{children:[(0,Yr.jsx)(bp,{children:"Game Rates"}),[{id:1,type:"Single Digit",rate:"10 KA 95"},{id:1,type:"Single Digit",rate:"10 KA 95"},{id:1,type:"Single Digit",rate:"10 KA 95"},{id:1,type:"Single Digit",rate:"10 KA 95"},{id:2,type:"Jodi Digit",rate:"10 KA 950"}].map((e=>(0,Yr.jsxs)(vp,{children:[(0,Yr.jsx)(wp,{children:(0,Yr.jsx)(Ka,{})}),(0,Yr.jsxs)(kp,{children:[(0,Yr.jsx)(Sp,{children:e.type}),(0,Yr.jsx)(jp,{children:e.rate})]})]},e.id)))]})}),_p=()=>(0,Yr.jsxs)("div",{children:[(0,Yr.jsx)(au,{}),(0,Yr.jsx)(Ep,{}),(0,Yr.jsx)(gp,{})]}),Tp=Gr.div`
  background-color: #0b3c68;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
  padding: 20px;
`,Cp=Gr.div`
  background-color: white;
  width: 100%;
  max-width: 1200px;
  padding: 40px;
  border-radius: 10px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px;
  }
`,zp=Gr.h1`
  font-size: 40px;
  font-weight: bold;
  color: black;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`,Pp=Gr.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  color: black;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`,Rp=Gr.p`
  font-size: 16px;
  color: black;
  margin-top: 10px;
  font-weight: normal;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`,Op=Gr.button`
  background-color: #0b3c68;
  color: white;
  font-size: 16px;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #084080;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 15px;
  }
`,Np=()=>(0,Yr.jsx)(Tp,{children:(0,Yr.jsxs)(Cp,{children:[(0,Yr.jsx)(zp,{children:"Delete Account Shri Matka"}),(0,Yr.jsx)(Pp,{children:"Are you sure you want to delete your account?"}),(0,Yr.jsx)(Rp,{children:"The account will be disabled for 14 days, after 14 days all the data related to this account will be deleted."}),(0,Yr.jsx)(Op,{children:"Delete Account"})]})}),Ap=n.p+"static/media/downloadApp.d842502f9307fe71b42d.png",Lp=n.p+"static/media/signup.9f12c9ebc6189e7780ff.png",Dp=n.p+"static/media/login.88d7de150a7695f98611.png",Ip=n.p+"static/media/addpoints.3539f1ddc787a328a56e.png",Mp=n.p+"static/media/addPoint2.44d918d95add598e1287.png",Fp=n.p+"static/media/startPlaying.67cbe003ef3eed6938a8.png",Bp=n.p+"static/media/selectbid.ada53c200b6a28d4a873.png",$p=n.p+"static/media/lastSelectbid.5dcf54efd80a35d26436.png",Up=Gr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  box-sizing:border-box;
  // background-color:red;
`,Hp=Gr.img`
  width: 100%;
  margin: 10px auto;
`,Wp=()=>(0,Yr.jsxs)(Fu,{children:[(0,Yr.jsx)(au,{}),(0,Yr.jsxs)(Up,{children:[(0,Yr.jsx)(Hp,{src:Ap,alt:"Download App"}),(0,Yr.jsx)(Hp,{src:Lp,alt:"Sign Up"}),(0,Yr.jsx)(Hp,{src:Dp,alt:"Login"}),(0,Yr.jsx)(Hp,{src:Ip,alt:"Add Points"}),(0,Yr.jsx)(Hp,{src:Mp,alt:"Add Points Step 2"}),(0,Yr.jsx)(Hp,{src:Fp,alt:"Start Playing"}),(0,Yr.jsx)(Hp,{src:Bp,alt:"Select Bid"}),(0,Yr.jsx)(Hp,{src:$p,alt:"Last Select Bid"})]})]}),Vp=Gr.div`
  background-color: #0b3c68;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
`,Kp=Gr.div`
  background-color: white;
  width: 100%;
  padding: 20px 20px 90px 20px;
  border-radius: 10px;
`,qp=Gr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0b3c68;
  border-radius: 20px;
  padding: 10px;
`,Gp=Gr.h1`
  font-size: 24px;
  font-weight: bold;
  color: #6fdc6f;
  text-transform: uppercase;
  text-align: center;
  flex: 1;
`,Qp=Gr.div`
  background-color: red;
  color: white;
  text-align: center;
  padding: 10px;
  font-weight: bold;
  font-size: 16px;
  border-radius: 10px;
  margin: 20px auto 0 auto;
  width: 100%;
  animation: backgroundChange 1s infinite;

  @keyframes backgroundChange {
    0% {
      background-color: red;
    }
    50% {
      background-color: #0b3c68;
    }
   
  }
`,Yp=Gr.div`
  background-color: #e0e0e5;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  text-align: left;
  width: 40%;
  padding-bottom: 60px;
`,Jp=Gr.label`
  text-align: left;
  margin-bottom: 3rem;
  font-weight: bold;
  color: black;
`,Xp=Gr.div`
  display: flex;
  gap: 10px;
  margin: 10px 0;
`,Zp=Gr.div`
  gap: 10px;
  margin-top: 20px;
`,eh=Gr.div`
  display: flex;
  align-items: center;
  background: white;
  border-radius: 8px;
  overflow: hidden;
`,th=Gr.button`
  background: #0b3c68;
  color: white;
  border: none;
  padding: 10px;
  width: 40%;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  border-radius: 8px;
`,nh=Gr.input`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-top: 10px;
  text-align: left;
  color: black;
  width: 95%;
  &:focus {
    outline: none;
    border-color: #0B66FF;
  }
`,rh=Gr.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  padding: 10px;
  background: white;
  border-radius: 10px;

  div {
    border: 1px solid #ccc;
    width: 30%;
    padding: 10px;
    border-radius: 20px;
  }
`,ah=Gr.button`
  background: #0b3c68;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`,oh=Gr.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
`,ih=()=>{const{gameName:e}=ee(),{profile:n}=Qc(),[r,a]=(0,t.useState)("open"),[o,i]=(0,t.useState)(Array(10).fill("")),[l,s]=(0,t.useState)(0);return(0,Yr.jsx)(Fu,{children:(0,Yr.jsx)(Vp,{children:(0,Yr.jsxs)(Kp,{children:[(0,Yr.jsxs)(qp,{children:[(0,Yr.jsx)(Ze,{to:`/dashboard/play/${e}`,children:(0,Yr.jsx)(rf,{children:(0,Yr.jsx)($a,{})})}),(0,Yr.jsx)(Gp,{children:e})]}),(0,Yr.jsxs)(Qp,{children:["For Better Experience ",(0,Yr.jsx)("br",{})," Download ShriMatka App"]}),(0,Yr.jsxs)(Yp,{children:[(0,Yr.jsx)(Jp,{children:"Bid Type"}),(0,Yr.jsx)("div",{children:(0,Yr.jsx)(Jp,{children:(0,Yr.jsx)(nh,{type:"text",name:"bidType",defaultValue:"Single Digit"})})}),(0,Yr.jsx)(Jp,{children:"Choose Session"}),(0,Yr.jsxs)(Xp,{children:[(0,Yr.jsxs)("label",{children:[(0,Yr.jsx)("input",{type:"radio",name:"session",checked:"open"===r,onChange:()=>a("open")})," ","Open"]}),(0,Yr.jsxs)("label",{children:[(0,Yr.jsx)("input",{type:"radio",name:"session",checked:"close"===r,onChange:()=>a("close")})," ","Close"]})]}),(0,Yr.jsx)(Zp,{children:o.slice(0,10).map(((e,t)=>(0,Yr.jsxs)(eh,{children:[(0,Yr.jsx)(th,{children:t}),(0,Yr.jsx)(nh,{type:"number",value:e,onChange:e=>((e,t)=>{const n=[...o];n[e]=t;const r=n.reduce(((e,t)=>e+(parseFloat(t)||0)),0);i(n),s(r)})(t,e.target.value),placeholder:"Enter Points"})]},t)))})]}),(0,Yr.jsxs)(oh,{children:[(0,Yr.jsxs)(rh,{children:[(0,Yr.jsxs)("div",{children:[(0,Yr.jsx)("strong",{children:l})," Bid Points"]}),(0,Yr.jsxs)("div",{children:[(0,Yr.jsx)("strong",{children:n.walletBalance})," Balance Points"]}),(0,Yr.jsx)(ah,{children:"Submit"})]}),(0,Yr.jsx)("p",{style:{textAlign:"center",fontSize:"14px",color:"green",fontWeight:"bold"},children:"Bid Date: 08, February 2025"})]})]})})})};function lh(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=lh(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}const sh=function(){for(var e,t,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=lh(e))&&(r&&(r+=" "),r+=t);return r};!function(e){if(!e||"undefined"==typeof document)return;let t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}(':root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n');var ch=e=>"number"==typeof e&&!isNaN(e),uh=e=>"string"==typeof e,dh=e=>"function"==typeof e,fh=e=>uh(e)||dh(e)?e:null,ph=(e,t)=>!1===e||ch(e)&&e>0?e:t,hh=e=>(0,t.isValidElement)(e)||uh(e)||dh(e)||ch(e);function mh(e){let{enter:n,exit:r,appendPosition:a=!1,collapse:o=!0,collapseDuration:i=300}=e;return function(e){let{children:l,position:s,preventExitTransition:c,done:u,nodeRef:d,isIn:f,playToast:p}=e,h=a?`${n}--${s}`:n,m=a?`${r}--${s}`:r,g=(0,t.useRef)(0);return(0,t.useLayoutEffect)((()=>{let e=d.current,t=h.split(" "),n=r=>{r.target===d.current&&(p(),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===g.current&&"animationcancel"!==r.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)}),[]),(0,t.useEffect)((()=>{let e=d.current,t=()=>{e.removeEventListener("animationend",t),o?function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300,{scrollHeight:r,style:a}=e;requestAnimationFrame((()=>{a.minHeight="initial",a.height=r+"px",a.transition=`all ${n}ms`,requestAnimationFrame((()=>{a.height="0",a.padding="0",a.margin="0",setTimeout(t,n)}))}))}(e,u,i):u()};f||(c?t():(g.current=1,e.className+=` ${m}`,e.addEventListener("animationend",t)))}),[f]),t.createElement(t.Fragment,null,l)}}function gh(e,t){return{content:xh(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function xh(e,n){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return(0,t.isValidElement)(e)&&!uh(e.type)?(0,t.cloneElement)(e,{closeToast:n.closeToast,toastProps:n,data:n.data,isPaused:r}):dh(e)?e({closeToast:n.closeToast,toastProps:n,data:n.data,isPaused:r}):e}function yh(e){let{delay:n,isRunning:r,closeToast:a,type:o="default",hide:i,className:l,controlledProgress:s,progress:c,rtl:u,isIn:d,theme:f}=e,p=i||s&&0===c,h={animationDuration:`${n}ms`,animationPlayState:r?"running":"paused"};s&&(h.transform=`scaleX(${c})`);let m=sh("Toastify__progress-bar",s?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${f}`,`Toastify__progress-bar--${o}`,{"Toastify__progress-bar--rtl":u}),g=dh(l)?l({rtl:u,type:o,defaultClassName:m}):sh(m,l),x={[s&&c>=1?"onTransitionEnd":"onAnimationEnd"]:s&&c<1?null:()=>{d&&a()}};return t.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":p},t.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${f} Toastify__progress-bar--${o}`}),t.createElement("div",{role:"progressbar","aria-hidden":p?"true":"false","aria-label":"notification timer",className:g,style:h,...x}))}var bh=1,vh=()=>""+bh++;function wh(e,t,n){let r=1,a=0,o=[],i=[],l=t,s=new Map,c=new Set,u=()=>{i=Array.from(s.values()),c.forEach((e=>e()))},d=e=>{var t,n;null==(n=null==(t=e.props)?void 0:t.onClose)||n.call(t,e.removalReason),e.isActive=!1},f=e=>{if(null==e)s.forEach(d);else{let t=s.get(e);t&&d(t)}u()},p=e=>{var t,r;let{toastId:a,updateId:o}=e.props,i=null==o;e.staleId&&s.delete(e.staleId),e.isActive=!0,s.set(a,e),u(),n(gh(e,i?"added":"updated")),i&&(null==(r=(t=e.props).onOpen)||r.call(t))};return{id:e,props:l,observe:e=>(c.add(e),()=>c.delete(e)),toggle:(e,t)=>{s.forEach((n=>{var r;(null==t||t===n.props.toastId)&&(null==(r=n.toggle)||r.call(n,e))}))},removeToast:f,toasts:s,clearQueue:()=>{a-=o.length,o=[]},buildToast:(t,i)=>{if((t=>{let{containerId:n,toastId:r,updateId:a}=t,o=n?n!==e:1!==e,i=s.has(r)&&null==a;return o||i})(i))return;let{toastId:c,updateId:d,data:h,staleId:m,delay:g}=i,x=null==d;x&&a++;let y={...l,style:l.toastStyle,key:r++,...Object.fromEntries(Object.entries(i).filter((e=>{let[t,n]=e;return null!=n}))),toastId:c,updateId:d,data:h,isIn:!1,className:fh(i.className||l.toastClassName),progressClassName:fh(i.progressClassName||l.progressClassName),autoClose:!i.isLoading&&ph(i.autoClose,l.autoClose),closeToast(e){s.get(c).removalReason=e,f(c)},deleteToast(){let e=s.get(c);if(null!=e){if(n(gh(e,"removed")),s.delete(c),a--,a<0&&(a=0),o.length>0)return void p(o.shift());u()}}};y.closeButton=l.closeButton,!1===i.closeButton||hh(i.closeButton)?y.closeButton=i.closeButton:!0===i.closeButton&&(y.closeButton=!hh(l.closeButton)||l.closeButton);let b={content:t,props:y,staleId:m};l.limit&&l.limit>0&&a>l.limit&&x?o.push(b):ch(g)?setTimeout((()=>{p(b)}),g):p(b)},setProps(e){l=e},setToggle:(e,t)=>{let n=s.get(e);n&&(n.toggle=t)},isToastActive:e=>{var t;return null==(t=s.get(e))?void 0:t.isActive},getSnapshot:()=>i}}var kh=new Map,Sh=[],jh=new Set,Eh=e=>jh.forEach((t=>t(e))),_h=()=>kh.size>0;function Th(e,t){var n;if(t)return!(null==(n=kh.get(t))||!n.isToastActive(e));let r=!1;return kh.forEach((t=>{t.isToastActive(e)&&(r=!0)})),r}function Ch(e){if(_h()){if(null==e||(e=>uh(e)||ch(e))(e))kh.forEach((t=>{t.removeToast(e)}));else if(e&&("containerId"in e||"id"in e)){let t=kh.get(e.containerId);t?t.removeToast(e.id):kh.forEach((t=>{t.removeToast(e.id)}))}}else Sh=Sh.filter((t=>null!=e&&t.options.toastId!==e))}function zh(e,t){hh(e)&&(_h()||Sh.push({content:e,options:t}),kh.forEach((n=>{n.buildToast(e,t)})))}function Ph(e,t){kh.forEach((n=>{(null==t||null==t||!t.containerId||(null==t?void 0:t.containerId)===n.id)&&n.toggle(e,null==t?void 0:t.id)}))}function Rh(e){let t=e.containerId||1;return{subscribe(n){let r=wh(t,e,Eh);kh.set(t,r);let a=r.observe(n);return Sh.forEach((e=>zh(e.content,e.options))),Sh=[],()=>{a(),kh.delete(t)}},setProps(e){var n;null==(n=kh.get(t))||n.setProps(e)},getSnapshot(){var e;return null==(e=kh.get(t))?void 0:e.getSnapshot()}}}function Oh(e){return e&&(uh(e.toastId)||ch(e.toastId))?e.toastId:vh()}function Nh(e,t){return zh(e,t),t.toastId}function Ah(e,t){return{...t,type:t&&t.type||e,toastId:Oh(t)}}function Lh(e){return(t,n)=>Nh(t,Ah(e,n))}function Dh(e,t){return Nh(e,Ah("default",t))}function Ih(e){let[n,r]=(0,t.useState)(!1),[a,o]=(0,t.useState)(!1),i=(0,t.useRef)(null),l=(0,t.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:s,pauseOnHover:c,closeToast:u,onClick:d,closeOnClick:f}=e;function p(){r(!0)}function h(){r(!1)}function m(t){let r=i.current;if(l.canDrag&&r){l.didMove=!0,n&&h(),"x"===e.draggableDirection?l.delta=t.clientX-l.start:l.delta=t.clientY-l.start,l.start!==t.clientX&&(l.canCloseOnClick=!1);let a="x"===e.draggableDirection?`${l.delta}px, var(--y)`:`0, calc(${l.delta}px + var(--y))`;r.style.transform=`translate3d(${a},0)`,r.style.opacity=""+(1-Math.abs(l.delta/l.removalDistance))}}function g(){document.removeEventListener("pointermove",m),document.removeEventListener("pointerup",g);let t=i.current;if(l.canDrag&&l.didMove&&t){if(l.canDrag=!1,Math.abs(l.delta)>l.removalDistance)return o(!0),e.closeToast(!0),void e.collapseAll();t.style.transition="transform 0.2s, opacity 0.2s",t.style.removeProperty("transform"),t.style.removeProperty("opacity")}}(function(e){var t;null==(t=kh.get(e.containerId||1))||t.setToggle(e.id,e.fn)})({id:e.toastId,containerId:e.containerId,fn:r}),(0,t.useEffect)((()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||h(),window.addEventListener("focus",p),window.addEventListener("blur",h),()=>{window.removeEventListener("focus",p),window.removeEventListener("blur",h)}}),[e.pauseOnFocusLoss]);let x={onPointerDown:function(t){if(!0===e.draggable||e.draggable===t.pointerType){l.didMove=!1,document.addEventListener("pointermove",m),document.addEventListener("pointerup",g);let n=i.current;l.canCloseOnClick=!0,l.canDrag=!0,n.style.transition="none","x"===e.draggableDirection?(l.start=t.clientX,l.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(l.start=t.clientY,l.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(t){let{top:n,bottom:r,left:a,right:o}=i.current.getBoundingClientRect();"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&t.clientX>=a&&t.clientX<=o&&t.clientY>=n&&t.clientY<=r?h():p()}};return s&&c&&(x.onMouseEnter=h,e.stacked||(x.onMouseLeave=p)),f&&(x.onClick=e=>{d&&d(e),l.canCloseOnClick&&u(!0)}),{playToast:p,pauseToast:h,isRunning:n,preventExitTransition:a,toastRef:i,eventHandlers:x}}Dh.loading=(e,t)=>Nh(e,Ah("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),Dh.promise=function(e,t,n){let r,{pending:a,error:o,success:i}=t;a&&(r=uh(a)?Dh.loading(a,n):Dh.loading(a.render,{...n,...a}));let l={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},s=(e,t,a)=>{if(null==t)return void Dh.dismiss(r);let o={type:e,...l,...n,data:a},i=uh(t)?{render:t}:t;return r?Dh.update(r,{...o,...i}):Dh(i.render,{...o,...i}),a},c=dh(e)?e():e;return c.then((e=>s("success",i,e))).catch((e=>s("error",o,e))),c},Dh.success=Lh("success"),Dh.info=Lh("info"),Dh.error=Lh("error"),Dh.warning=Lh("warning"),Dh.warn=Dh.warning,Dh.dark=(e,t)=>Nh(e,Ah("default",{theme:"dark",...t})),Dh.dismiss=function(e){Ch(e)},Dh.clearWaitingQueue=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};kh.forEach((t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()}))},Dh.isActive=Th,Dh.update=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=((e,t)=>{let{containerId:n}=t;var r;return null==(r=kh.get(n||1))?void 0:r.toasts.get(e)})(e,t);if(n){let{props:r,content:a}=n,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:vh()};o.toastId!==e&&(o.staleId=e);let i=o.render||a;delete o.render,Nh(i,o)}},Dh.done=e=>{Dh.update(e,{progress:1})},Dh.onChange=function(e){return jh.add(e),()=>{jh.delete(e)}},Dh.play=e=>Ph(!0,e),Dh.pause=e=>Ph(!1,e);var Mh="undefined"!=typeof window?t.useLayoutEffect:t.useEffect,Fh=e=>{let{theme:n,type:r,isLoading:a,...o}=e;return t.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===n?"currentColor":`var(--toastify-icon-color-${r})`,...o})};var Bh={info:function(e){return t.createElement(Fh,{...e},t.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return t.createElement(Fh,{...e},t.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return t.createElement(Fh,{...e},t.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return t.createElement(Fh,{...e},t.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return t.createElement("div",{className:"Toastify__spinner"})}};function $h(e){let{theme:n,type:r,isLoading:a,icon:o}=e,i=null,l={theme:n,type:r};return!1===o||(dh(o)?i=o({...l,isLoading:a}):(0,t.isValidElement)(o)?i=(0,t.cloneElement)(o,l):a?i=Bh.spinner():(e=>e in Bh)(r)&&(i=Bh[r](l))),i}var Uh=e=>{let{isRunning:n,preventExitTransition:r,toastRef:a,eventHandlers:o,playToast:i}=Ih(e),{closeButton:l,children:s,autoClose:c,onClick:u,type:d,hideProgressBar:f,closeToast:p,transition:h,position:m,className:g,style:x,progressClassName:y,updateId:b,role:v,progress:w,rtl:k,toastId:S,deleteToast:j,isIn:E,isLoading:_,closeOnClick:T,theme:C,ariaLabel:z}=e,P=sh("Toastify__toast",`Toastify__toast-theme--${C}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":k},{"Toastify__toast--close-on-click":T}),R=dh(g)?g({rtl:k,position:m,type:d,defaultClassName:P}):sh(P,g),O=$h(e),N=!!w||!c,A={closeToast:p,type:d,theme:C},L=null;return!1===l||(L=dh(l)?l(A):(0,t.isValidElement)(l)?(0,t.cloneElement)(l,A):function(e){let{closeToast:n,theme:r,ariaLabel:a="close"}=e;return t.createElement("button",{className:`Toastify__close-button Toastify__close-button--${r}`,type:"button",onClick:e=>{e.stopPropagation(),n(!0)},"aria-label":a},t.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},t.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(A)),t.createElement(h,{isIn:E,done:j,position:m,preventExitTransition:r,nodeRef:a,playToast:i},t.createElement("div",{id:S,tabIndex:0,onClick:u,"data-in":E,className:R,...o,style:x,ref:a,...E&&{role:v,"aria-label":z}},null!=O&&t.createElement("div",{className:sh("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!_})},O),xh(s,e,!n),L,!e.customProgressBar&&t.createElement(yh,{...b&&!N?{key:`p-${b}`}:{},rtl:k,theme:C,delay:c,isRunning:n,isIn:E,closeToast:p,hide:f,type:d,className:y,controlledProgress:N,progress:w||0})))},Hh=function(e){return{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:arguments.length>1&&void 0!==arguments[1]&&arguments[1]}},Wh=mh(Hh("bounce",!0)),Vh=(mh(Hh("slide",!0)),mh(Hh("zoom")),mh(Hh("flip")),{position:"top-right",transition:Wh,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&"KeyT"===e.code});function Kh(e){let n={...Vh,...e},r=e.stacked,[a,o]=(0,t.useState)(!0),i=(0,t.useRef)(null),{getToastToRender:l,isToastActive:s,count:c}=function(e){var n;let{subscribe:r,getSnapshot:a,setProps:o}=(0,t.useRef)(Rh(e)).current;o(e);let i=null==(n=(0,t.useSyncExternalStore)(r,a,a))?void 0:n.slice();return{getToastToRender:function(t){if(!i)return[];let n=new Map;return e.newestOnTop&&i.reverse(),i.forEach((e=>{let{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(e=>t(e[0],e[1])))},isToastActive:Th,count:null==i?void 0:i.length}}(n),{className:u,style:d,rtl:f,containerId:p,hotKeys:h}=n;function m(e){let t=sh("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":f});return dh(u)?u({position:e,rtl:f,defaultClassName:t}):sh(t,fh(u))}function g(){r&&(o(!0),Dh.play())}return Mh((()=>{var e;if(r){let t=i.current.querySelectorAll('[data-in="true"]'),r=12,o=null==(e=n.position)?void 0:e.includes("top"),l=0,s=0;Array.from(t).reverse().forEach(((e,t)=>{let n=e;n.classList.add("Toastify__toast--stacked"),t>0&&(n.dataset.collapsed=`${a}`),n.dataset.pos||(n.dataset.pos=o?"top":"bot");let i=l*(a?.2:1)+(a?0:r*t);n.style.setProperty("--y",`${o?i:-1*i}px`),n.style.setProperty("--g",`${r}`),n.style.setProperty("--s",""+(1-(a?s:0))),l+=n.offsetHeight,s+=.025}))}}),[a,c,r]),(0,t.useEffect)((()=>{function e(e){var t;let n=i.current;h(e)&&(null==(t=n.querySelector('[tabIndex="0"]'))||t.focus(),o(!1),Dh.pause()),"Escape"===e.key&&(document.activeElement===n||null!=n&&n.contains(document.activeElement))&&(o(!0),Dh.play())}return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[h]),t.createElement("section",{ref:i,className:"Toastify",id:p,onMouseEnter:()=>{r&&(o(!1),Dh.pause())},onMouseLeave:g,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":n["aria-label"]},l(((e,n)=>{let a=n.length?{...d}:{...d,pointerEvents:"none"};return t.createElement("div",{tabIndex:-1,className:m(e),"data-stacked":r,style:a,key:`c-${e}`},n.map((e=>{let{content:n,props:a}=e;return t.createElement(Uh,{...a,stacked:r,collapseAll:g,isIn:s(a.toastId,a.containerId),key:`t-${a.key}`},n)})))})))}const qh=Gr.section`
  color: #fff;
  text-align: center;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Gh=Gr.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`,Qh=Gr.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`,Yh=Gr.div`
  background-color: ${e=>{let{selected:t}=e;return t?"#4caf50":"#c4c4c4"}};
  width: 260px;
  height: 250px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  color: black;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;
`,Jh=Gr.button`
  background-color: ${e=>{let{color:t}=e;return t||"#4caf50"}};
  color: white;
  font-size: 1.2rem;
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${e=>{let{hoverColor:t}=e;return t||"#45a049"}};
  }
`,Xh=Gr.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`,Zh=Gr.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  min-width: 300px;
  color: black;
`,em=Gr.select`
  margin-top: 10px;
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #333;
  cursor: pointer;
  width: 90%;
`,tm=Gr.div`
  margin-bottom: 10px;
`,nm=Gr.p`
  font-weight: bold;
  font-size: 1.2rem;
  color: #fff;
`,rm=[{name:"Virat Kohli",runs:90},{name:"MS Dhoni",runs:75},{name:"Rohit Sharma",runs:85},{name:"Sachin Tendulkar",runs:95},{name:"AB de Villiers",runs:80},{name:"Chris Gayle",runs:88}],am=()=>{const[e,n]=(0,t.useState)([{id:1,player1:"",player2:"",totalRuns:0},{id:2,player1:"",player2:"",totalRuns:0},{id:3,player1:"",player2:"",totalRuns:0}]),[r,a]=(0,t.useState)(null),[o,i]=(0,t.useState)(null),[l,s]=(0,t.useState)({player1:"",player2:""}),c=new Set(e.flatMap((e=>[e.player1,e.player2])).filter(Boolean)),u=()=>{i(null)};return(0,Yr.jsxs)(qh,{children:[(0,Yr.jsx)(Gh,{children:"Choose Player"}),(0,Yr.jsx)(Qh,{children:e.map(((t,n)=>{var r,a;return(0,Yr.jsxs)(Yh,{selected:t.player1&&t.player2,onClick:()=>(t=>{i(t),s({...e[t]})})(n),children:[(0,Yr.jsx)(tm,{children:(0,Yr.jsxs)(nm,{children:["Player ",t.id]})}),(0,Yr.jsxs)("p",{children:[" Player 1: ",t.player1," ",t.player1&&`(${null===(r=rm.find((e=>e.name===t.player1)))||void 0===r?void 0:r.runs} runs)`]}),(0,Yr.jsxs)("p",{children:["Player 2: ",t.player2," ",t.player2&&`(${null===(a=rm.find((e=>e.name===t.player2)))||void 0===a?void 0:a.runs} runs)`]}),(0,Yr.jsxs)("p",{children:["Total Runs: ",t.totalRuns]})]},t.id)}))}),r?(0,Yr.jsxs)("h3",{style:{color:"white",fontSize:"2rem",textAlign:"center"},children:["Winner: Player ",r.id," with ",r.totalRuns," Runs"]}):(0,Yr.jsx)("h3",{style:{color:"white"},children:"Select Players and Click Play"}),(0,Yr.jsxs)("div",{style:{display:"flex",justifyContent:"center",gap:"20px",marginTop:"20px"},children:[(0,Yr.jsx)(Jh,{onClick:()=>{const t=e.reduce(((e,t)=>t.totalRuns>e.totalRuns?t:e),e[0]);a(t),Dh.success(`Winner: Card ${t.id} with ${t.totalRuns} Runs`)},children:"Play"}),(0,Yr.jsx)(Jh,{onClick:()=>{n([{id:1,player1:"",player2:"",totalRuns:0},{id:2,player1:"",player2:"",totalRuns:0},{id:3,player1:"",player2:"",totalRuns:0}]),a(null),Dh.info("Game Reset!")},color:"#ff5722",hoverColor:"#e64a19",children:"Reset"})]}),null!==o&&(0,Yr.jsx)(Xh,{children:(0,Yr.jsxs)(Zh,{children:[(0,Yr.jsx)("h3",{children:"Select Players"}),(0,Yr.jsxs)(em,{value:l.player1,onChange:e=>s({...l,player1:e.target.value}),children:[(0,Yr.jsx)("option",{value:"",children:"Select Player"}),rm.map((e=>(0,Yr.jsx)("option",{value:e.name,disabled:c.has(e.name)||l.player2===e.name,children:e.name},e.name)))]}),(0,Yr.jsxs)(em,{value:l.player2,onChange:e=>s({...l,player2:e.target.value}),children:[(0,Yr.jsx)("option",{value:"",children:"Select Player"}),rm.map((e=>(0,Yr.jsx)("option",{value:e.name,disabled:c.has(e.name)||l.player1===e.name,children:e.name},e.name)))]}),(0,Yr.jsxs)("div",{style:{display:"flex",justifyContent:"center",gap:"20px",marginTop:"20px"},children:[(0,Yr.jsx)(Jh,{onClick:()=>{var t,r;if(!l.player1||!l.player2)return void Dh.error("Please select both players!");const a=[...e];a[o]={id:o+1,player1:l.player1,player2:l.player2,totalRuns:((null===(t=rm.find((e=>e.name===l.player1)))||void 0===t?void 0:t.runs)||0)+((null===(r=rm.find((e=>e.name===l.player2)))||void 0===r?void 0:r.runs)||0)},n(a),u(),Dh.success("Players selected successfully!")},children:"Submit"}),(0,Yr.jsx)(Jh,{onClick:u,color:"gray",hoverColor:"lightgray",children:"Cancel"})]})]})}),(0,Yr.jsx)(Kh,{position:"top-right",autoClose:2e3})]})},om=()=>(0,Yr.jsxs)("div",{children:[(0,Yr.jsx)(au,{}),(0,Yr.jsx)(am,{})]});const im=function(){return(0,Yr.jsx)(Gc,{children:(0,Yr.jsx)("div",{className:"App",children:(0,Yr.jsxs)(xe,{children:[(0,Yr.jsx)(me,{path:"/",element:(0,Yr.jsx)(El,{})}),(0,Yr.jsx)(me,{path:"/signUp",element:(0,Yr.jsx)(Jr,{})}),(0,Yr.jsx)(me,{path:"/login",element:(0,Yr.jsx)(da,{})}),(0,Yr.jsx)(me,{path:"/read-more",element:(0,Yr.jsx)(Uo,{})}),(0,Yr.jsx)(me,{path:"/more-articles",element:(0,Yr.jsx)(oi,{})}),(0,Yr.jsx)(me,{path:"/dashboard",element:(0,Yr.jsx)(Mu,{})}),(0,Yr.jsx)(me,{path:"/dashboard/wallet",element:(0,Yr.jsx)(ed,{})}),(0,Yr.jsx)(me,{path:"/dashboard/my-profile",element:(0,Yr.jsx)(Cd,{})}),(0,Yr.jsx)(me,{path:"/change-password",element:(0,Yr.jsx)(Bd,{})}),(0,Yr.jsx)(me,{path:"/dashboard/add-points",element:(0,Yr.jsx)(Zd,{})}),(0,Yr.jsx)(me,{path:"/dashboard/play/:gameName",element:(0,Yr.jsx)(pf,{})}),(0,Yr.jsx)(me,{path:"/dashboard/payment-details",element:(0,Yr.jsx)(bf,{})}),(0,Yr.jsx)(me,{path:"/dashboard/reedeem-points",element:(0,Yr.jsx)(zf,{})}),(0,Yr.jsx)(me,{path:"/dashboard/bidhistory",element:(0,Yr.jsx)(Kf,{})}),(0,Yr.jsx)(me,{path:"/dashboard/winhistory",element:(0,Yr.jsx)(lp,{})}),(0,Yr.jsx)(me,{path:"/dashboard/game-rates",element:(0,Yr.jsx)(_p,{})}),(0,Yr.jsx)(me,{path:"/dashboard/delete-account",element:(0,Yr.jsx)(Np,{})}),(0,Yr.jsx)(me,{path:"/dashboard/how-to-play",element:(0,Yr.jsx)(Wp,{})}),(0,Yr.jsx)(me,{path:"/dashboard/Cricket",element:(0,Yr.jsx)(om,{})}),(0,Yr.jsx)(me,{path:"/dashboard/bidpage/:gameName",element:(0,Yr.jsx)(ih,{})})]})})})},lm=e=>{e&&e instanceof Function&&n.e(453).then(n.bind(n,453)).then((t=>{let{getCLS:n,getFID:r,getFCP:a,getLCP:o,getTTFB:i}=t;n(e),r(e),a(e),o(e),i(e)}))};r.createRoot(document.getElementById("root")).render((0,Yr.jsx)(t.StrictMode,{children:(0,Yr.jsx)(Je,{children:(0,Yr.jsx)(im,{})})})),lm()})()})();
//# sourceMappingURL=main.3fc8dc64.js.map