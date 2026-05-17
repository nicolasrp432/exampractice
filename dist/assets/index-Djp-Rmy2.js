function Xg(e,t){for(var n=0;n<t.length;n++){const i=t[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in e)){const a=Object.getOwnPropertyDescriptor(i,r);a&&Object.defineProperty(e,r,a.get?a:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();function xm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ym={exports:{}},oo={},wm={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nr=Symbol.for("react.element"),Jg=Symbol.for("react.portal"),e1=Symbol.for("react.fragment"),t1=Symbol.for("react.strict_mode"),n1=Symbol.for("react.profiler"),i1=Symbol.for("react.provider"),r1=Symbol.for("react.context"),a1=Symbol.for("react.forward_ref"),o1=Symbol.for("react.suspense"),s1=Symbol.for("react.memo"),l1=Symbol.for("react.lazy"),Nd=Symbol.iterator;function c1(e){return e===null||typeof e!="object"?null:(e=Nd&&e[Nd]||e["@@iterator"],typeof e=="function"?e:null)}var jm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_m=Object.assign,zm={};function xi(e,t,n){this.props=e,this.context=t,this.refs=zm,this.updater=n||jm}xi.prototype.isReactComponent={};xi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};xi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Sm(){}Sm.prototype=xi.prototype;function Kl(e,t,n){this.props=e,this.context=t,this.refs=zm,this.updater=n||jm}var Ql=Kl.prototype=new Sm;Ql.constructor=Kl;_m(Ql,xi.prototype);Ql.isPureReactComponent=!0;var Cd=Array.isArray,Em=Object.prototype.hasOwnProperty,Yl={current:null},Nm={key:!0,ref:!0,__self:!0,__source:!0};function Cm(e,t,n){var i,r={},a=null,o=null;if(t!=null)for(i in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)Em.call(t,i)&&!Nm.hasOwnProperty(i)&&(r[i]=t[i]);var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];r.children=c}if(e&&e.defaultProps)for(i in l=e.defaultProps,l)r[i]===void 0&&(r[i]=l[i]);return{$$typeof:Nr,type:e,key:a,ref:o,props:r,_owner:Yl.current}}function d1(e,t){return{$$typeof:Nr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Xl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Nr}function u1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var kd=/\/+/g;function Ho(e,t){return typeof e=="object"&&e!==null&&e.key!=null?u1(""+e.key):t.toString(36)}function da(e,t,n,i,r){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Nr:case Jg:o=!0}}if(o)return o=e,r=r(o),e=i===""?"."+Ho(o,0):i,Cd(r)?(n="",e!=null&&(n=e.replace(kd,"$&/")+"/"),da(r,t,n,"",function(d){return d})):r!=null&&(Xl(r)&&(r=d1(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(kd,"$&/")+"/")+e)),t.push(r)),1;if(o=0,i=i===""?".":i+":",Cd(e))for(var l=0;l<e.length;l++){a=e[l];var c=i+Ho(a,l);o+=da(a,t,n,c,r)}else if(c=c1(e),typeof c=="function")for(e=c.call(e),l=0;!(a=e.next()).done;)a=a.value,c=i+Ho(a,l++),o+=da(a,t,n,c,r);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Br(e,t,n){if(e==null)return e;var i=[],r=0;return da(e,i,"","",function(a){return t.call(n,a,r++)}),i}function p1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Te={current:null},ua={transition:null},m1={ReactCurrentDispatcher:Te,ReactCurrentBatchConfig:ua,ReactCurrentOwner:Yl};function km(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:Br,forEach:function(e,t,n){Br(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Br(e,function(){t++}),t},toArray:function(e){return Br(e,function(t){return t})||[]},only:function(e){if(!Xl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=xi;V.Fragment=e1;V.Profiler=n1;V.PureComponent=Kl;V.StrictMode=t1;V.Suspense=o1;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m1;V.act=km;V.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=_m({},e.props),r=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Yl.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Em.call(t,c)&&!Nm.hasOwnProperty(c)&&(i[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];i.children=l}return{$$typeof:Nr,type:e.type,key:r,ref:a,props:i,_owner:o}};V.createContext=function(e){return e={$$typeof:r1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:i1,_context:e},e.Consumer=e};V.createElement=Cm;V.createFactory=function(e){var t=Cm.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:a1,render:e}};V.isValidElement=Xl;V.lazy=function(e){return{$$typeof:l1,_payload:{_status:-1,_result:e},_init:p1}};V.memo=function(e,t){return{$$typeof:s1,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=ua.transition;ua.transition={};try{e()}finally{ua.transition=t}};V.unstable_act=km;V.useCallback=function(e,t){return Te.current.useCallback(e,t)};V.useContext=function(e){return Te.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return Te.current.useDeferredValue(e)};V.useEffect=function(e,t){return Te.current.useEffect(e,t)};V.useId=function(){return Te.current.useId()};V.useImperativeHandle=function(e,t,n){return Te.current.useImperativeHandle(e,t,n)};V.useInsertionEffect=function(e,t){return Te.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return Te.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return Te.current.useMemo(e,t)};V.useReducer=function(e,t,n){return Te.current.useReducer(e,t,n)};V.useRef=function(e){return Te.current.useRef(e)};V.useState=function(e){return Te.current.useState(e)};V.useSyncExternalStore=function(e,t,n){return Te.current.useSyncExternalStore(e,t,n)};V.useTransition=function(){return Te.current.useTransition()};V.version="18.3.1";wm.exports=V;var x=wm.exports;const dt=xm(x),f1=Xg({__proto__:null,default:dt},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h1=x,g1=Symbol.for("react.element"),v1=Symbol.for("react.fragment"),b1=Object.prototype.hasOwnProperty,x1=h1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y1={key:!0,ref:!0,__self:!0,__source:!0};function Lm(e,t,n){var i,r={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(i in t)b1.call(t,i)&&!y1.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)r[i]===void 0&&(r[i]=t[i]);return{$$typeof:g1,type:e,key:a,ref:o,props:r,_owner:x1.current}}oo.Fragment=v1;oo.jsx=Lm;oo.jsxs=Lm;ym.exports=oo;var s=ym.exports,Is={},Am={exports:{}},Ke={},Pm={exports:{}},Mm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,M){var F=N.length;N.push(M);e:for(;0<F;){var L=F-1>>>1,I=N[L];if(0<r(I,M))N[L]=M,N[F]=I,F=L;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var M=N[0],F=N.pop();if(F!==M){N[0]=F;e:for(var L=0,I=N.length,H=I>>>1;L<H;){var fe=2*(L+1)-1,he=N[fe],ce=fe+1,Ve=N[ce];if(0>r(he,F))ce<I&&0>r(Ve,he)?(N[L]=Ve,N[ce]=F,L=ce):(N[L]=he,N[fe]=F,L=fe);else if(ce<I&&0>r(Ve,F))N[L]=Ve,N[ce]=F,L=ce;else break e}}return M}function r(N,M){var F=N.sortIndex-M.sortIndex;return F!==0?F:N.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var c=[],d=[],u=1,p=null,m=3,g=!1,b=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(N){for(var M=n(d);M!==null;){if(M.callback===null)i(d);else if(M.startTime<=N)i(d),M.sortIndex=M.expirationTime,t(c,M);else break;M=n(d)}}function j(N){if(y=!1,v(N),!b)if(n(c)!==null)b=!0,D(_);else{var M=n(d);M!==null&&J(j,M.startTime-N)}}function _(N,M){b=!1,y&&(y=!1,h(E),E=-1),g=!0;var F=m;try{for(v(M),p=n(c);p!==null&&(!(p.expirationTime>M)||N&&!$());){var L=p.callback;if(typeof L=="function"){p.callback=null,m=p.priorityLevel;var I=L(p.expirationTime<=M);M=e.unstable_now(),typeof I=="function"?p.callback=I:p===n(c)&&i(c),v(M)}else i(c);p=n(c)}if(p!==null)var H=!0;else{var fe=n(d);fe!==null&&J(j,fe.startTime-M),H=!1}return H}finally{p=null,m=F,g=!1}}var z=!1,S=null,E=-1,A=5,k=-1;function $(){return!(e.unstable_now()-k<A)}function Z(){if(S!==null){var N=e.unstable_now();k=N;var M=!0;try{M=S(!0,N)}finally{M?te():(z=!1,S=null)}}else z=!1}var te;if(typeof f=="function")te=function(){f(Z)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,O=G.port2;G.port1.onmessage=Z,te=function(){O.postMessage(null)}}else te=function(){w(Z,0)};function D(N){S=N,z||(z=!0,te())}function J(N,M){E=w(function(){N(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){b||g||(b=!0,D(_))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(N){switch(m){case 1:case 2:case 3:var M=3;break;default:M=m}var F=m;m=M;try{return N()}finally{m=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,M){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var F=m;m=N;try{return M()}finally{m=F}},e.unstable_scheduleCallback=function(N,M,F){var L=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?L+F:L):F=L,N){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=F+I,N={id:u++,callback:M,priorityLevel:N,startTime:F,expirationTime:I,sortIndex:-1},F>L?(N.sortIndex=F,t(d,N),n(c)===null&&N===n(d)&&(y?(h(E),E=-1):y=!0,J(j,F-L))):(N.sortIndex=I,t(c,N),b||g||(b=!0,D(_))),N},e.unstable_shouldYield=$,e.unstable_wrapCallback=function(N){var M=m;return function(){var F=m;m=M;try{return N.apply(this,arguments)}finally{m=F}}}})(Mm);Pm.exports=Mm;var w1=Pm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j1=x,Ze=w1;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Tm=new Set,nr={};function Mn(e,t){li(e,t),li(e+"Capture",t)}function li(e,t){for(nr[e]=t,e=0;e<t.length;e++)Tm.add(t[e])}var Lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ds=Object.prototype.hasOwnProperty,_1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ld={},Ad={};function z1(e){return Ds.call(Ad,e)?!0:Ds.call(Ld,e)?!1:_1.test(e)?Ad[e]=!0:(Ld[e]=!0,!1)}function S1(e,t,n,i){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function E1(e,t,n,i){if(t===null||typeof t>"u"||S1(e,t,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Re(e,t,n,i,r,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ze[e]=new Re(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ze[t]=new Re(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ze[e]=new Re(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ze[e]=new Re(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ze[e]=new Re(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ze[e]=new Re(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ze[e]=new Re(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ze[e]=new Re(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ze[e]=new Re(e,5,!1,e.toLowerCase(),null,!1,!1)});var Jl=/[\-:]([a-z])/g;function ec(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Jl,ec);ze[t]=new Re(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Jl,ec);ze[t]=new Re(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Jl,ec);ze[t]=new Re(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ze[e]=new Re(e,1,!1,e.toLowerCase(),null,!1,!1)});ze.xlinkHref=new Re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ze[e]=new Re(e,1,!1,e.toLowerCase(),null,!0,!0)});function tc(e,t,n,i){var r=ze.hasOwnProperty(t)?ze[t]:null;(r!==null?r.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(E1(t,n,r,i)&&(n=null),i||r===null?z1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=n===null?r.type===3?!1:"":n:(t=r.attributeName,i=r.attributeNamespace,n===null?e.removeAttribute(t):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?e.setAttributeNS(i,t,n):e.setAttribute(t,n))))}var Rt=j1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ur=Symbol.for("react.element"),Fn=Symbol.for("react.portal"),Bn=Symbol.for("react.fragment"),nc=Symbol.for("react.strict_mode"),Fs=Symbol.for("react.profiler"),Rm=Symbol.for("react.provider"),Om=Symbol.for("react.context"),ic=Symbol.for("react.forward_ref"),Bs=Symbol.for("react.suspense"),Us=Symbol.for("react.suspense_list"),rc=Symbol.for("react.memo"),Ft=Symbol.for("react.lazy"),Im=Symbol.for("react.offscreen"),Pd=Symbol.iterator;function zi(e){return e===null||typeof e!="object"?null:(e=Pd&&e[Pd]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,Wo;function Oi(e){if(Wo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Wo=t&&t[1]||""}return`
`+Wo+e}var Zo=!1;function Go(e,t){if(!e||Zo)return"";Zo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var i=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){i=d}e.call(t.prototype)}else{try{throw Error()}catch(d){i=d}e()}}catch(d){if(d&&i&&typeof d.stack=="string"){for(var r=d.stack.split(`
`),a=i.stack.split(`
`),o=r.length-1,l=a.length-1;1<=o&&0<=l&&r[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(r[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||r[o]!==a[l]){var c=`
`+r[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=l);break}}}finally{Zo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Oi(e):""}function N1(e){switch(e.tag){case 5:return Oi(e.type);case 16:return Oi("Lazy");case 13:return Oi("Suspense");case 19:return Oi("SuspenseList");case 0:case 2:case 15:return e=Go(e.type,!1),e;case 11:return e=Go(e.type.render,!1),e;case 1:return e=Go(e.type,!0),e;default:return""}}function Vs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Bn:return"Fragment";case Fn:return"Portal";case Fs:return"Profiler";case nc:return"StrictMode";case Bs:return"Suspense";case Us:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Om:return(e.displayName||"Context")+".Consumer";case Rm:return(e._context.displayName||"Context")+".Provider";case ic:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case rc:return t=e.displayName||null,t!==null?t:Vs(e.type)||"Memo";case Ft:t=e._payload,e=e._init;try{return Vs(e(t))}catch{}}return null}function C1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vs(t);case 8:return t===nc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function an(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Dm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function k1(e){var t=Dm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vr(e){e._valueTracker||(e._valueTracker=k1(e))}function Fm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Dm(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function za(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function $s(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Md(e,t){var n=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;n=an(t.value!=null?t.value:n),e._wrapperState={initialChecked:i,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Bm(e,t){t=t.checked,t!=null&&tc(e,"checked",t,!1)}function qs(e,t){Bm(e,t);var n=an(t.value),i=t.type;if(n!=null)i==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Hs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Hs(e,t.type,an(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Td(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Hs(e,t,n){(t!=="number"||za(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ii=Array.isArray;function ni(e,t,n,i){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&i&&(e[n].defaultSelected=!0)}else{for(n=""+an(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function Ws(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Rd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(Ii(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:an(n)}}function Um(e,t){var n=an(t.value),i=an(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),i!=null&&(e.defaultValue=""+i)}function Od(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Vm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Vm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $r,$m=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,i,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,i,r)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for($r=$r||document.createElement("div"),$r.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=$r.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ir(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Vi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},L1=["Webkit","ms","Moz","O"];Object.keys(Vi).forEach(function(e){L1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Vi[t]=Vi[e]})});function qm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Vi.hasOwnProperty(e)&&Vi[e]?(""+t).trim():t+"px"}function Hm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=qm(n,t[n],i);n==="float"&&(n="cssFloat"),i?e.setProperty(n,r):e[n]=r}}var A1=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gs(e,t){if(t){if(A1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function Ks(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qs=null;function ac(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ys=null,ii=null,ri=null;function Id(e){if(e=Lr(e)){if(typeof Ys!="function")throw Error(C(280));var t=e.stateNode;t&&(t=po(t),Ys(e.stateNode,e.type,t))}}function Wm(e){ii?ri?ri.push(e):ri=[e]:ii=e}function Zm(){if(ii){var e=ii,t=ri;if(ri=ii=null,Id(e),t)for(e=0;e<t.length;e++)Id(t[e])}}function Gm(e,t){return e(t)}function Km(){}var Ko=!1;function Qm(e,t,n){if(Ko)return e(t,n);Ko=!0;try{return Gm(e,t,n)}finally{Ko=!1,(ii!==null||ri!==null)&&(Km(),Zm())}}function rr(e,t){var n=e.stateNode;if(n===null)return null;var i=po(n);if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var Xs=!1;if(Lt)try{var Si={};Object.defineProperty(Si,"passive",{get:function(){Xs=!0}}),window.addEventListener("test",Si,Si),window.removeEventListener("test",Si,Si)}catch{Xs=!1}function P1(e,t,n,i,r,a,o,l,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(u){this.onError(u)}}var $i=!1,Sa=null,Ea=!1,Js=null,M1={onError:function(e){$i=!0,Sa=e}};function T1(e,t,n,i,r,a,o,l,c){$i=!1,Sa=null,P1.apply(M1,arguments)}function R1(e,t,n,i,r,a,o,l,c){if(T1.apply(this,arguments),$i){if($i){var d=Sa;$i=!1,Sa=null}else throw Error(C(198));Ea||(Ea=!0,Js=d)}}function Tn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ym(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Dd(e){if(Tn(e)!==e)throw Error(C(188))}function O1(e){var t=e.alternate;if(!t){if(t=Tn(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,i=t;;){var r=n.return;if(r===null)break;var a=r.alternate;if(a===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===n)return Dd(r),e;if(a===i)return Dd(r),t;a=a.sibling}throw Error(C(188))}if(n.return!==i.return)n=r,i=a;else{for(var o=!1,l=r.child;l;){if(l===n){o=!0,n=r,i=a;break}if(l===i){o=!0,i=r,n=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===n){o=!0,n=a,i=r;break}if(l===i){o=!0,i=a,n=r;break}l=l.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==i)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function Xm(e){return e=O1(e),e!==null?Jm(e):null}function Jm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Jm(e);if(t!==null)return t;e=e.sibling}return null}var ef=Ze.unstable_scheduleCallback,Fd=Ze.unstable_cancelCallback,I1=Ze.unstable_shouldYield,D1=Ze.unstable_requestPaint,de=Ze.unstable_now,F1=Ze.unstable_getCurrentPriorityLevel,oc=Ze.unstable_ImmediatePriority,tf=Ze.unstable_UserBlockingPriority,Na=Ze.unstable_NormalPriority,B1=Ze.unstable_LowPriority,nf=Ze.unstable_IdlePriority,so=null,vt=null;function U1(e){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(so,e,void 0,(e.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:q1,V1=Math.log,$1=Math.LN2;function q1(e){return e>>>=0,e===0?32:31-(V1(e)/$1|0)|0}var qr=64,Hr=4194304;function Di(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ca(e,t){var n=e.pendingLanes;if(n===0)return 0;var i=0,r=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~r;l!==0?i=Di(l):(a&=o,a!==0&&(i=Di(a)))}else o=n&~r,o!==0?i=Di(o):a!==0&&(i=Di(a));if(i===0)return 0;if(t!==0&&t!==i&&!(t&r)&&(r=i&-i,a=t&-t,r>=a||r===16&&(a&4194240)!==0))return t;if(i&4&&(i|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)n=31-ut(t),r=1<<n,i|=e[n],t&=~r;return i}function H1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W1(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-ut(a),l=1<<o,c=r[o];c===-1?(!(l&n)||l&i)&&(r[o]=H1(l,t)):c<=t&&(e.expiredLanes|=l),a&=~l}}function el(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function rf(){var e=qr;return qr<<=1,!(qr&4194240)&&(qr=64),e}function Qo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Cr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ut(t),e[t]=n}function Z1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-ut(n),a=1<<r;t[r]=0,i[r]=-1,e[r]=-1,n&=~a}}function sc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-ut(n),r=1<<i;r&t|e[i]&t&&(e[i]|=t),n&=~r}}var W=0;function af(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var of,lc,sf,lf,cf,tl=!1,Wr=[],Zt=null,Gt=null,Kt=null,ar=new Map,or=new Map,Vt=[],G1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bd(e,t){switch(e){case"focusin":case"focusout":Zt=null;break;case"dragenter":case"dragleave":Gt=null;break;case"mouseover":case"mouseout":Kt=null;break;case"pointerover":case"pointerout":ar.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":or.delete(t.pointerId)}}function Ei(e,t,n,i,r,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[r]},t!==null&&(t=Lr(t),t!==null&&lc(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function K1(e,t,n,i,r){switch(t){case"focusin":return Zt=Ei(Zt,e,t,n,i,r),!0;case"dragenter":return Gt=Ei(Gt,e,t,n,i,r),!0;case"mouseover":return Kt=Ei(Kt,e,t,n,i,r),!0;case"pointerover":var a=r.pointerId;return ar.set(a,Ei(ar.get(a)||null,e,t,n,i,r)),!0;case"gotpointercapture":return a=r.pointerId,or.set(a,Ei(or.get(a)||null,e,t,n,i,r)),!0}return!1}function df(e){var t=wn(e.target);if(t!==null){var n=Tn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ym(n),t!==null){e.blockedOn=t,cf(e.priority,function(){sf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=nl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Qs=i,n.target.dispatchEvent(i),Qs=null}else return t=Lr(n),t!==null&&lc(t),e.blockedOn=n,!1;t.shift()}return!0}function Ud(e,t,n){pa(e)&&n.delete(t)}function Q1(){tl=!1,Zt!==null&&pa(Zt)&&(Zt=null),Gt!==null&&pa(Gt)&&(Gt=null),Kt!==null&&pa(Kt)&&(Kt=null),ar.forEach(Ud),or.forEach(Ud)}function Ni(e,t){e.blockedOn===t&&(e.blockedOn=null,tl||(tl=!0,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,Q1)))}function sr(e){function t(r){return Ni(r,e)}if(0<Wr.length){Ni(Wr[0],e);for(var n=1;n<Wr.length;n++){var i=Wr[n];i.blockedOn===e&&(i.blockedOn=null)}}for(Zt!==null&&Ni(Zt,e),Gt!==null&&Ni(Gt,e),Kt!==null&&Ni(Kt,e),ar.forEach(t),or.forEach(t),n=0;n<Vt.length;n++)i=Vt[n],i.blockedOn===e&&(i.blockedOn=null);for(;0<Vt.length&&(n=Vt[0],n.blockedOn===null);)df(n),n.blockedOn===null&&Vt.shift()}var ai=Rt.ReactCurrentBatchConfig,ka=!0;function Y1(e,t,n,i){var r=W,a=ai.transition;ai.transition=null;try{W=1,cc(e,t,n,i)}finally{W=r,ai.transition=a}}function X1(e,t,n,i){var r=W,a=ai.transition;ai.transition=null;try{W=4,cc(e,t,n,i)}finally{W=r,ai.transition=a}}function cc(e,t,n,i){if(ka){var r=nl(e,t,n,i);if(r===null)os(e,t,i,La,n),Bd(e,i);else if(K1(r,e,t,n,i))i.stopPropagation();else if(Bd(e,i),t&4&&-1<G1.indexOf(e)){for(;r!==null;){var a=Lr(r);if(a!==null&&of(a),a=nl(e,t,n,i),a===null&&os(e,t,i,La,n),a===r)break;r=a}r!==null&&i.stopPropagation()}else os(e,t,i,null,n)}}var La=null;function nl(e,t,n,i){if(La=null,e=ac(i),e=wn(e),e!==null)if(t=Tn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ym(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return La=e,null}function uf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(F1()){case oc:return 1;case tf:return 4;case Na:case B1:return 16;case nf:return 536870912;default:return 16}default:return 16}}var qt=null,dc=null,ma=null;function pf(){if(ma)return ma;var e,t=dc,n=t.length,i,r="value"in qt?qt.value:qt.textContent,a=r.length;for(e=0;e<n&&t[e]===r[e];e++);var o=n-e;for(i=1;i<=o&&t[n-i]===r[a-i];i++);return ma=r.slice(e,1<i?1-i:void 0)}function fa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zr(){return!0}function Vd(){return!1}function Qe(e){function t(n,i,r,a,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Zr:Vd,this.isPropagationStopped=Vd,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zr)},persist:function(){},isPersistent:Zr}),t}var yi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uc=Qe(yi),kr=oe({},yi,{view:0,detail:0}),J1=Qe(kr),Yo,Xo,Ci,lo=oe({},kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ci&&(Ci&&e.type==="mousemove"?(Yo=e.screenX-Ci.screenX,Xo=e.screenY-Ci.screenY):Xo=Yo=0,Ci=e),Yo)},movementY:function(e){return"movementY"in e?e.movementY:Xo}}),$d=Qe(lo),ev=oe({},lo,{dataTransfer:0}),tv=Qe(ev),nv=oe({},kr,{relatedTarget:0}),Jo=Qe(nv),iv=oe({},yi,{animationName:0,elapsedTime:0,pseudoElement:0}),rv=Qe(iv),av=oe({},yi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ov=Qe(av),sv=oe({},yi,{data:0}),qd=Qe(sv),lv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=dv[e])?!!t[e]:!1}function pc(){return uv}var pv=oe({},kr,{key:function(e){if(e.key){var t=lv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=fa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pc,charCode:function(e){return e.type==="keypress"?fa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mv=Qe(pv),fv=oe({},lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hd=Qe(fv),hv=oe({},kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pc}),gv=Qe(hv),vv=oe({},yi,{propertyName:0,elapsedTime:0,pseudoElement:0}),bv=Qe(vv),xv=oe({},lo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yv=Qe(xv),wv=[9,13,27,32],mc=Lt&&"CompositionEvent"in window,qi=null;Lt&&"documentMode"in document&&(qi=document.documentMode);var jv=Lt&&"TextEvent"in window&&!qi,mf=Lt&&(!mc||qi&&8<qi&&11>=qi),Wd=" ",Zd=!1;function ff(e,t){switch(e){case"keyup":return wv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Un=!1;function _v(e,t){switch(e){case"compositionend":return hf(t);case"keypress":return t.which!==32?null:(Zd=!0,Wd);case"textInput":return e=t.data,e===Wd&&Zd?null:e;default:return null}}function zv(e,t){if(Un)return e==="compositionend"||!mc&&ff(e,t)?(e=pf(),ma=dc=qt=null,Un=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return mf&&t.locale!=="ko"?null:t.data;default:return null}}var Sv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sv[e.type]:t==="textarea"}function gf(e,t,n,i){Wm(i),t=Aa(t,"onChange"),0<t.length&&(n=new uc("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Hi=null,lr=null;function Ev(e){Nf(e,0)}function co(e){var t=qn(e);if(Fm(t))return e}function Nv(e,t){if(e==="change")return t}var vf=!1;if(Lt){var es;if(Lt){var ts="oninput"in document;if(!ts){var Kd=document.createElement("div");Kd.setAttribute("oninput","return;"),ts=typeof Kd.oninput=="function"}es=ts}else es=!1;vf=es&&(!document.documentMode||9<document.documentMode)}function Qd(){Hi&&(Hi.detachEvent("onpropertychange",bf),lr=Hi=null)}function bf(e){if(e.propertyName==="value"&&co(lr)){var t=[];gf(t,lr,e,ac(e)),Qm(Ev,t)}}function Cv(e,t,n){e==="focusin"?(Qd(),Hi=t,lr=n,Hi.attachEvent("onpropertychange",bf)):e==="focusout"&&Qd()}function kv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return co(lr)}function Lv(e,t){if(e==="click")return co(t)}function Av(e,t){if(e==="input"||e==="change")return co(t)}function Pv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mt=typeof Object.is=="function"?Object.is:Pv;function cr(e,t){if(mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ds.call(t,r)||!mt(e[r],t[r]))return!1}return!0}function Yd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xd(e,t){var n=Yd(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yd(n)}}function xf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yf(){for(var e=window,t=za();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=za(e.document)}return t}function fc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Mv(e){var t=yf(),n=e.focusedElem,i=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&xf(n.ownerDocument.documentElement,n)){if(i!==null&&fc(n)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=n.textContent.length,a=Math.min(i.start,r);i=i.end===void 0?a:Math.min(i.end,r),!e.extend&&a>i&&(r=i,i=a,a=r),r=Xd(n,a);var o=Xd(n,i);r&&o&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),a>i?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tv=Lt&&"documentMode"in document&&11>=document.documentMode,Vn=null,il=null,Wi=null,rl=!1;function Jd(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rl||Vn==null||Vn!==za(i)||(i=Vn,"selectionStart"in i&&fc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Wi&&cr(Wi,i)||(Wi=i,i=Aa(il,"onSelect"),0<i.length&&(t=new uc("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Vn)))}function Gr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var $n={animationend:Gr("Animation","AnimationEnd"),animationiteration:Gr("Animation","AnimationIteration"),animationstart:Gr("Animation","AnimationStart"),transitionend:Gr("Transition","TransitionEnd")},ns={},wf={};Lt&&(wf=document.createElement("div").style,"AnimationEvent"in window||(delete $n.animationend.animation,delete $n.animationiteration.animation,delete $n.animationstart.animation),"TransitionEvent"in window||delete $n.transitionend.transition);function uo(e){if(ns[e])return ns[e];if(!$n[e])return e;var t=$n[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wf)return ns[e]=t[n];return e}var jf=uo("animationend"),_f=uo("animationiteration"),zf=uo("animationstart"),Sf=uo("transitionend"),Ef=new Map,eu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cn(e,t){Ef.set(e,t),Mn(t,[e])}for(var is=0;is<eu.length;is++){var rs=eu[is],Rv=rs.toLowerCase(),Ov=rs[0].toUpperCase()+rs.slice(1);cn(Rv,"on"+Ov)}cn(jf,"onAnimationEnd");cn(_f,"onAnimationIteration");cn(zf,"onAnimationStart");cn("dblclick","onDoubleClick");cn("focusin","onFocus");cn("focusout","onBlur");cn(Sf,"onTransitionEnd");li("onMouseEnter",["mouseout","mouseover"]);li("onMouseLeave",["mouseout","mouseover"]);li("onPointerEnter",["pointerout","pointerover"]);li("onPointerLeave",["pointerout","pointerover"]);Mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Iv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fi));function tu(e,t,n){var i=e.type||"unknown-event";e.currentTarget=n,R1(i,t,void 0,e),e.currentTarget=null}function Nf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],r=i.event;i=i.listeners;e:{var a=void 0;if(t)for(var o=i.length-1;0<=o;o--){var l=i[o],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==a&&r.isPropagationStopped())break e;tu(r,l,d),a=c}else for(o=0;o<i.length;o++){if(l=i[o],c=l.instance,d=l.currentTarget,l=l.listener,c!==a&&r.isPropagationStopped())break e;tu(r,l,d),a=c}}}if(Ea)throw e=Js,Ea=!1,Js=null,e}function Y(e,t){var n=t[cl];n===void 0&&(n=t[cl]=new Set);var i=e+"__bubble";n.has(i)||(Cf(t,e,2,!1),n.add(i))}function as(e,t,n){var i=0;t&&(i|=4),Cf(n,e,i,t)}var Kr="_reactListening"+Math.random().toString(36).slice(2);function dr(e){if(!e[Kr]){e[Kr]=!0,Tm.forEach(function(n){n!=="selectionchange"&&(Iv.has(n)||as(n,!1,e),as(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Kr]||(t[Kr]=!0,as("selectionchange",!1,t))}}function Cf(e,t,n,i){switch(uf(t)){case 1:var r=Y1;break;case 4:r=X1;break;default:r=cc}n=r.bind(null,t,n,e),r=void 0,!Xs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function os(e,t,n,i,r){var a=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var l=i.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;o=o.return}for(;l!==null;){if(o=wn(l),o===null)return;if(c=o.tag,c===5||c===6){i=a=o;continue e}l=l.parentNode}}i=i.return}Qm(function(){var d=a,u=ac(n),p=[];e:{var m=Ef.get(e);if(m!==void 0){var g=uc,b=e;switch(e){case"keypress":if(fa(n)===0)break e;case"keydown":case"keyup":g=mv;break;case"focusin":b="focus",g=Jo;break;case"focusout":b="blur",g=Jo;break;case"beforeblur":case"afterblur":g=Jo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=$d;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=tv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=gv;break;case jf:case _f:case zf:g=rv;break;case Sf:g=bv;break;case"scroll":g=J1;break;case"wheel":g=yv;break;case"copy":case"cut":case"paste":g=ov;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Hd}var y=(t&4)!==0,w=!y&&e==="scroll",h=y?m!==null?m+"Capture":null:m;y=[];for(var f=d,v;f!==null;){v=f;var j=v.stateNode;if(v.tag===5&&j!==null&&(v=j,h!==null&&(j=rr(f,h),j!=null&&y.push(ur(f,j,v)))),w)break;f=f.return}0<y.length&&(m=new g(m,b,null,n,u),p.push({event:m,listeners:y}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&n!==Qs&&(b=n.relatedTarget||n.fromElement)&&(wn(b)||b[At]))break e;if((g||m)&&(m=u.window===u?u:(m=u.ownerDocument)?m.defaultView||m.parentWindow:window,g?(b=n.relatedTarget||n.toElement,g=d,b=b?wn(b):null,b!==null&&(w=Tn(b),b!==w||b.tag!==5&&b.tag!==6)&&(b=null)):(g=null,b=d),g!==b)){if(y=$d,j="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(y=Hd,j="onPointerLeave",h="onPointerEnter",f="pointer"),w=g==null?m:qn(g),v=b==null?m:qn(b),m=new y(j,f+"leave",g,n,u),m.target=w,m.relatedTarget=v,j=null,wn(u)===d&&(y=new y(h,f+"enter",b,n,u),y.target=v,y.relatedTarget=w,j=y),w=j,g&&b)t:{for(y=g,h=b,f=0,v=y;v;v=In(v))f++;for(v=0,j=h;j;j=In(j))v++;for(;0<f-v;)y=In(y),f--;for(;0<v-f;)h=In(h),v--;for(;f--;){if(y===h||h!==null&&y===h.alternate)break t;y=In(y),h=In(h)}y=null}else y=null;g!==null&&nu(p,m,g,y,!1),b!==null&&w!==null&&nu(p,w,b,y,!0)}}e:{if(m=d?qn(d):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var _=Nv;else if(Gd(m))if(vf)_=Av;else{_=kv;var z=Cv}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(_=Lv);if(_&&(_=_(e,d))){gf(p,_,n,u);break e}z&&z(e,m,d),e==="focusout"&&(z=m._wrapperState)&&z.controlled&&m.type==="number"&&Hs(m,"number",m.value)}switch(z=d?qn(d):window,e){case"focusin":(Gd(z)||z.contentEditable==="true")&&(Vn=z,il=d,Wi=null);break;case"focusout":Wi=il=Vn=null;break;case"mousedown":rl=!0;break;case"contextmenu":case"mouseup":case"dragend":rl=!1,Jd(p,n,u);break;case"selectionchange":if(Tv)break;case"keydown":case"keyup":Jd(p,n,u)}var S;if(mc)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Un?ff(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(mf&&n.locale!=="ko"&&(Un||E!=="onCompositionStart"?E==="onCompositionEnd"&&Un&&(S=pf()):(qt=u,dc="value"in qt?qt.value:qt.textContent,Un=!0)),z=Aa(d,E),0<z.length&&(E=new qd(E,e,null,n,u),p.push({event:E,listeners:z}),S?E.data=S:(S=hf(n),S!==null&&(E.data=S)))),(S=jv?_v(e,n):zv(e,n))&&(d=Aa(d,"onBeforeInput"),0<d.length&&(u=new qd("onBeforeInput","beforeinput",null,n,u),p.push({event:u,listeners:d}),u.data=S))}Nf(p,t)})}function ur(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Aa(e,t){for(var n=t+"Capture",i=[];e!==null;){var r=e,a=r.stateNode;r.tag===5&&a!==null&&(r=a,a=rr(e,n),a!=null&&i.unshift(ur(e,a,r)),a=rr(e,t),a!=null&&i.push(ur(e,a,r))),e=e.return}return i}function In(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function nu(e,t,n,i,r){for(var a=t._reactName,o=[];n!==null&&n!==i;){var l=n,c=l.alternate,d=l.stateNode;if(c!==null&&c===i)break;l.tag===5&&d!==null&&(l=d,r?(c=rr(n,a),c!=null&&o.unshift(ur(n,c,l))):r||(c=rr(n,a),c!=null&&o.push(ur(n,c,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Dv=/\r\n?/g,Fv=/\u0000|\uFFFD/g;function iu(e){return(typeof e=="string"?e:""+e).replace(Dv,`
`).replace(Fv,"")}function Qr(e,t,n){if(t=iu(t),iu(e)!==t&&n)throw Error(C(425))}function Pa(){}var al=null,ol=null;function sl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ll=typeof setTimeout=="function"?setTimeout:void 0,Bv=typeof clearTimeout=="function"?clearTimeout:void 0,ru=typeof Promise=="function"?Promise:void 0,Uv=typeof queueMicrotask=="function"?queueMicrotask:typeof ru<"u"?function(e){return ru.resolve(null).then(e).catch(Vv)}:ll;function Vv(e){setTimeout(function(){throw e})}function ss(e,t){var n=t,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){e.removeChild(r),sr(t);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);sr(t)}function Qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function au(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wi=Math.random().toString(36).slice(2),gt="__reactFiber$"+wi,pr="__reactProps$"+wi,At="__reactContainer$"+wi,cl="__reactEvents$"+wi,$v="__reactListeners$"+wi,qv="__reactHandles$"+wi;function wn(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[At]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=au(e);e!==null;){if(n=e[gt])return n;e=au(e)}return t}e=n,n=e.parentNode}return null}function Lr(e){return e=e[gt]||e[At],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function po(e){return e[pr]||null}var dl=[],Hn=-1;function dn(e){return{current:e}}function X(e){0>Hn||(e.current=dl[Hn],dl[Hn]=null,Hn--)}function K(e,t){Hn++,dl[Hn]=e.current,e.current=t}var on={},Le=dn(on),De=dn(!1),Cn=on;function ci(e,t){var n=e.type.contextTypes;if(!n)return on;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var r={},a;for(a in n)r[a]=t[a];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function Fe(e){return e=e.childContextTypes,e!=null}function Ma(){X(De),X(Le)}function ou(e,t,n){if(Le.current!==on)throw Error(C(168));K(Le,t),K(De,n)}function kf(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in t))throw Error(C(108,C1(e)||"Unknown",r));return oe({},n,i)}function Ta(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||on,Cn=Le.current,K(Le,e),K(De,De.current),!0}function su(e,t,n){var i=e.stateNode;if(!i)throw Error(C(169));n?(e=kf(e,t,Cn),i.__reactInternalMemoizedMergedChildContext=e,X(De),X(Le),K(Le,e)):X(De),K(De,n)}var _t=null,mo=!1,ls=!1;function Lf(e){_t===null?_t=[e]:_t.push(e)}function Hv(e){mo=!0,Lf(e)}function un(){if(!ls&&_t!==null){ls=!0;var e=0,t=W;try{var n=_t;for(W=1;e<n.length;e++){var i=n[e];do i=i(!0);while(i!==null)}_t=null,mo=!1}catch(r){throw _t!==null&&(_t=_t.slice(e+1)),ef(oc,un),r}finally{W=t,ls=!1}}return null}var Wn=[],Zn=0,Ra=null,Oa=0,Je=[],et=0,kn=null,zt=1,St="";function gn(e,t){Wn[Zn++]=Oa,Wn[Zn++]=Ra,Ra=e,Oa=t}function Af(e,t,n){Je[et++]=zt,Je[et++]=St,Je[et++]=kn,kn=e;var i=zt;e=St;var r=32-ut(i)-1;i&=~(1<<r),n+=1;var a=32-ut(t)+r;if(30<a){var o=r-r%5;a=(i&(1<<o)-1).toString(32),i>>=o,r-=o,zt=1<<32-ut(t)+r|n<<r|i,St=a+e}else zt=1<<a|n<<r|i,St=e}function hc(e){e.return!==null&&(gn(e,1),Af(e,1,0))}function gc(e){for(;e===Ra;)Ra=Wn[--Zn],Wn[Zn]=null,Oa=Wn[--Zn],Wn[Zn]=null;for(;e===kn;)kn=Je[--et],Je[et]=null,St=Je[--et],Je[et]=null,zt=Je[--et],Je[et]=null}var We=null,He=null,ee=!1,ct=null;function Pf(e,t){var n=tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function lu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,We=e,He=Qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,We=e,He=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=kn!==null?{id:zt,overflow:St}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,We=e,He=null,!0):!1;default:return!1}}function ul(e){return(e.mode&1)!==0&&(e.flags&128)===0}function pl(e){if(ee){var t=He;if(t){var n=t;if(!lu(e,t)){if(ul(e))throw Error(C(418));t=Qt(n.nextSibling);var i=We;t&&lu(e,t)?Pf(i,n):(e.flags=e.flags&-4097|2,ee=!1,We=e)}}else{if(ul(e))throw Error(C(418));e.flags=e.flags&-4097|2,ee=!1,We=e}}}function cu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;We=e}function Yr(e){if(e!==We)return!1;if(!ee)return cu(e),ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!sl(e.type,e.memoizedProps)),t&&(t=He)){if(ul(e))throw Mf(),Error(C(418));for(;t;)Pf(e,t),t=Qt(t.nextSibling)}if(cu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){He=Qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}He=null}}else He=We?Qt(e.stateNode.nextSibling):null;return!0}function Mf(){for(var e=He;e;)e=Qt(e.nextSibling)}function di(){He=We=null,ee=!1}function vc(e){ct===null?ct=[e]:ct.push(e)}var Wv=Rt.ReactCurrentBatchConfig;function ki(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var i=n.stateNode}if(!i)throw Error(C(147,e));var r=i,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var l=r.refs;o===null?delete l[a]:l[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function Xr(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function du(e){var t=e._init;return t(e._payload)}function Tf(e){function t(h,f){if(e){var v=h.deletions;v===null?(h.deletions=[f],h.flags|=16):v.push(f)}}function n(h,f){if(!e)return null;for(;f!==null;)t(h,f),f=f.sibling;return null}function i(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function r(h,f){return h=en(h,f),h.index=0,h.sibling=null,h}function a(h,f,v){return h.index=v,e?(v=h.alternate,v!==null?(v=v.index,v<f?(h.flags|=2,f):v):(h.flags|=2,f)):(h.flags|=1048576,f)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,f,v,j){return f===null||f.tag!==6?(f=hs(v,h.mode,j),f.return=h,f):(f=r(f,v),f.return=h,f)}function c(h,f,v,j){var _=v.type;return _===Bn?u(h,f,v.props.children,j,v.key):f!==null&&(f.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Ft&&du(_)===f.type)?(j=r(f,v.props),j.ref=ki(h,f,v),j.return=h,j):(j=wa(v.type,v.key,v.props,null,h.mode,j),j.ref=ki(h,f,v),j.return=h,j)}function d(h,f,v,j){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=gs(v,h.mode,j),f.return=h,f):(f=r(f,v.children||[]),f.return=h,f)}function u(h,f,v,j,_){return f===null||f.tag!==7?(f=En(v,h.mode,j,_),f.return=h,f):(f=r(f,v),f.return=h,f)}function p(h,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=hs(""+f,h.mode,v),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ur:return v=wa(f.type,f.key,f.props,null,h.mode,v),v.ref=ki(h,null,f),v.return=h,v;case Fn:return f=gs(f,h.mode,v),f.return=h,f;case Ft:var j=f._init;return p(h,j(f._payload),v)}if(Ii(f)||zi(f))return f=En(f,h.mode,v,null),f.return=h,f;Xr(h,f)}return null}function m(h,f,v,j){var _=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return _!==null?null:l(h,f,""+v,j);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ur:return v.key===_?c(h,f,v,j):null;case Fn:return v.key===_?d(h,f,v,j):null;case Ft:return _=v._init,m(h,f,_(v._payload),j)}if(Ii(v)||zi(v))return _!==null?null:u(h,f,v,j,null);Xr(h,v)}return null}function g(h,f,v,j,_){if(typeof j=="string"&&j!==""||typeof j=="number")return h=h.get(v)||null,l(f,h,""+j,_);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Ur:return h=h.get(j.key===null?v:j.key)||null,c(f,h,j,_);case Fn:return h=h.get(j.key===null?v:j.key)||null,d(f,h,j,_);case Ft:var z=j._init;return g(h,f,v,z(j._payload),_)}if(Ii(j)||zi(j))return h=h.get(v)||null,u(f,h,j,_,null);Xr(f,j)}return null}function b(h,f,v,j){for(var _=null,z=null,S=f,E=f=0,A=null;S!==null&&E<v.length;E++){S.index>E?(A=S,S=null):A=S.sibling;var k=m(h,S,v[E],j);if(k===null){S===null&&(S=A);break}e&&S&&k.alternate===null&&t(h,S),f=a(k,f,E),z===null?_=k:z.sibling=k,z=k,S=A}if(E===v.length)return n(h,S),ee&&gn(h,E),_;if(S===null){for(;E<v.length;E++)S=p(h,v[E],j),S!==null&&(f=a(S,f,E),z===null?_=S:z.sibling=S,z=S);return ee&&gn(h,E),_}for(S=i(h,S);E<v.length;E++)A=g(S,h,E,v[E],j),A!==null&&(e&&A.alternate!==null&&S.delete(A.key===null?E:A.key),f=a(A,f,E),z===null?_=A:z.sibling=A,z=A);return e&&S.forEach(function($){return t(h,$)}),ee&&gn(h,E),_}function y(h,f,v,j){var _=zi(v);if(typeof _!="function")throw Error(C(150));if(v=_.call(v),v==null)throw Error(C(151));for(var z=_=null,S=f,E=f=0,A=null,k=v.next();S!==null&&!k.done;E++,k=v.next()){S.index>E?(A=S,S=null):A=S.sibling;var $=m(h,S,k.value,j);if($===null){S===null&&(S=A);break}e&&S&&$.alternate===null&&t(h,S),f=a($,f,E),z===null?_=$:z.sibling=$,z=$,S=A}if(k.done)return n(h,S),ee&&gn(h,E),_;if(S===null){for(;!k.done;E++,k=v.next())k=p(h,k.value,j),k!==null&&(f=a(k,f,E),z===null?_=k:z.sibling=k,z=k);return ee&&gn(h,E),_}for(S=i(h,S);!k.done;E++,k=v.next())k=g(S,h,E,k.value,j),k!==null&&(e&&k.alternate!==null&&S.delete(k.key===null?E:k.key),f=a(k,f,E),z===null?_=k:z.sibling=k,z=k);return e&&S.forEach(function(Z){return t(h,Z)}),ee&&gn(h,E),_}function w(h,f,v,j){if(typeof v=="object"&&v!==null&&v.type===Bn&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ur:e:{for(var _=v.key,z=f;z!==null;){if(z.key===_){if(_=v.type,_===Bn){if(z.tag===7){n(h,z.sibling),f=r(z,v.props.children),f.return=h,h=f;break e}}else if(z.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Ft&&du(_)===z.type){n(h,z.sibling),f=r(z,v.props),f.ref=ki(h,z,v),f.return=h,h=f;break e}n(h,z);break}else t(h,z);z=z.sibling}v.type===Bn?(f=En(v.props.children,h.mode,j,v.key),f.return=h,h=f):(j=wa(v.type,v.key,v.props,null,h.mode,j),j.ref=ki(h,f,v),j.return=h,h=j)}return o(h);case Fn:e:{for(z=v.key;f!==null;){if(f.key===z)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){n(h,f.sibling),f=r(f,v.children||[]),f.return=h,h=f;break e}else{n(h,f);break}else t(h,f);f=f.sibling}f=gs(v,h.mode,j),f.return=h,h=f}return o(h);case Ft:return z=v._init,w(h,f,z(v._payload),j)}if(Ii(v))return b(h,f,v,j);if(zi(v))return y(h,f,v,j);Xr(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(n(h,f.sibling),f=r(f,v),f.return=h,h=f):(n(h,f),f=hs(v,h.mode,j),f.return=h,h=f),o(h)):n(h,f)}return w}var ui=Tf(!0),Rf=Tf(!1),Ia=dn(null),Da=null,Gn=null,bc=null;function xc(){bc=Gn=Da=null}function yc(e){var t=Ia.current;X(Ia),e._currentValue=t}function ml(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function oi(e,t){Da=e,bc=Gn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ie=!0),e.firstContext=null)}function it(e){var t=e._currentValue;if(bc!==e)if(e={context:e,memoizedValue:t,next:null},Gn===null){if(Da===null)throw Error(C(308));Gn=e,Da.dependencies={lanes:0,firstContext:e}}else Gn=Gn.next=e;return t}var jn=null;function wc(e){jn===null?jn=[e]:jn.push(e)}function Of(e,t,n,i){var r=t.interleaved;return r===null?(n.next=n,wc(t)):(n.next=r.next,r.next=n),t.interleaved=n,Pt(e,i)}function Pt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Bt=!1;function jc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function If(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Yt(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,q&2){var r=i.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),i.pending=t,Pt(e,n)}return r=i.interleaved,r===null?(t.next=t,wc(i)):(t.next=r.next,r.next=t),i.interleaved=t,Pt(e,n)}function ha(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,sc(e,n)}}function uu(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?r=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?r=a=t:a=a.next=t}else r=a=t;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:i.shared,effects:i.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Fa(e,t,n,i){var r=e.updateQueue;Bt=!1;var a=r.firstBaseUpdate,o=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var c=l,d=c.next;c.next=null,o===null?a=d:o.next=d,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,l=u.lastBaseUpdate,l!==o&&(l===null?u.firstBaseUpdate=d:l.next=d,u.lastBaseUpdate=c))}if(a!==null){var p=r.baseState;o=0,u=d=c=null,l=a;do{var m=l.lane,g=l.eventTime;if((i&m)===m){u!==null&&(u=u.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var b=e,y=l;switch(m=t,g=n,y.tag){case 1:if(b=y.payload,typeof b=="function"){p=b.call(g,p,m);break e}p=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=y.payload,m=typeof b=="function"?b.call(g,p,m):b,m==null)break e;p=oe({},p,m);break e;case 2:Bt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=r.effects,m===null?r.effects=[l]:m.push(l))}else g={eventTime:g,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},u===null?(d=u=g,c=p):u=u.next=g,o|=m;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;m=l,l=m.next,m.next=null,r.lastBaseUpdate=m,r.shared.pending=null}}while(!0);if(u===null&&(c=p),r.baseState=c,r.firstBaseUpdate=d,r.lastBaseUpdate=u,t=r.shared.interleaved,t!==null){r=t;do o|=r.lane,r=r.next;while(r!==t)}else a===null&&(r.shared.lanes=0);An|=o,e.lanes=o,e.memoizedState=p}}function pu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(C(191,r));r.call(i)}}}var Ar={},bt=dn(Ar),mr=dn(Ar),fr=dn(Ar);function _n(e){if(e===Ar)throw Error(C(174));return e}function _c(e,t){switch(K(fr,t),K(mr,e),K(bt,Ar),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Zs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Zs(t,e)}X(bt),K(bt,t)}function pi(){X(bt),X(mr),X(fr)}function Df(e){_n(fr.current);var t=_n(bt.current),n=Zs(t,e.type);t!==n&&(K(mr,e),K(bt,n))}function zc(e){mr.current===e&&(X(bt),X(mr))}var ne=dn(0);function Ba(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var cs=[];function Sc(){for(var e=0;e<cs.length;e++)cs[e]._workInProgressVersionPrimary=null;cs.length=0}var ga=Rt.ReactCurrentDispatcher,ds=Rt.ReactCurrentBatchConfig,Ln=0,re=null,ge=null,be=null,Ua=!1,Zi=!1,hr=0,Zv=0;function Se(){throw Error(C(321))}function Ec(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!mt(e[n],t[n]))return!1;return!0}function Nc(e,t,n,i,r,a){if(Ln=a,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ga.current=e===null||e.memoizedState===null?Yv:Xv,e=n(i,r),Zi){a=0;do{if(Zi=!1,hr=0,25<=a)throw Error(C(301));a+=1,be=ge=null,t.updateQueue=null,ga.current=Jv,e=n(i,r)}while(Zi)}if(ga.current=Va,t=ge!==null&&ge.next!==null,Ln=0,be=ge=re=null,Ua=!1,t)throw Error(C(300));return e}function Cc(){var e=hr!==0;return hr=0,e}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?re.memoizedState=be=e:be=be.next=e,be}function rt(){if(ge===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=be===null?re.memoizedState:be.next;if(t!==null)be=t,ge=e;else{if(e===null)throw Error(C(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},be===null?re.memoizedState=be=e:be=be.next=e}return be}function gr(e,t){return typeof t=="function"?t(e):t}function us(e){var t=rt(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var i=ge,r=i.baseQueue,a=n.pending;if(a!==null){if(r!==null){var o=r.next;r.next=a.next,a.next=o}i.baseQueue=r=a,n.pending=null}if(r!==null){a=r.next,i=i.baseState;var l=o=null,c=null,d=a;do{var u=d.lane;if((Ln&u)===u)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),i=d.hasEagerState?d.eagerState:e(i,d.action);else{var p={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=p,o=i):c=c.next=p,re.lanes|=u,An|=u}d=d.next}while(d!==null&&d!==a);c===null?o=i:c.next=l,mt(i,t.memoizedState)||(Ie=!0),t.memoizedState=i,t.baseState=o,t.baseQueue=c,n.lastRenderedState=i}if(e=n.interleaved,e!==null){r=e;do a=r.lane,re.lanes|=a,An|=a,r=r.next;while(r!==e)}else r===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ps(e){var t=rt(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var i=n.dispatch,r=n.pending,a=t.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do a=e(a,o.action),o=o.next;while(o!==r);mt(a,t.memoizedState)||(Ie=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function Ff(){}function Bf(e,t){var n=re,i=rt(),r=t(),a=!mt(i.memoizedState,r);if(a&&(i.memoizedState=r,Ie=!0),i=i.queue,kc($f.bind(null,n,i,e),[e]),i.getSnapshot!==t||a||be!==null&&be.memoizedState.tag&1){if(n.flags|=2048,vr(9,Vf.bind(null,n,i,r,t),void 0,null),ye===null)throw Error(C(349));Ln&30||Uf(n,t,r)}return r}function Uf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vf(e,t,n,i){t.value=n,t.getSnapshot=i,qf(t)&&Hf(e)}function $f(e,t,n){return n(function(){qf(t)&&Hf(e)})}function qf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!mt(e,n)}catch{return!0}}function Hf(e){var t=Pt(e,1);t!==null&&pt(t,e,1,-1)}function mu(e){var t=ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:gr,lastRenderedState:e},t.queue=e,e=e.dispatch=Qv.bind(null,re,e),[t.memoizedState,e]}function vr(e,t,n,i){return e={tag:e,create:t,destroy:n,deps:i,next:null},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e)),e}function Wf(){return rt().memoizedState}function va(e,t,n,i){var r=ht();re.flags|=e,r.memoizedState=vr(1|t,n,void 0,i===void 0?null:i)}function fo(e,t,n,i){var r=rt();i=i===void 0?null:i;var a=void 0;if(ge!==null){var o=ge.memoizedState;if(a=o.destroy,i!==null&&Ec(i,o.deps)){r.memoizedState=vr(t,n,a,i);return}}re.flags|=e,r.memoizedState=vr(1|t,n,a,i)}function fu(e,t){return va(8390656,8,e,t)}function kc(e,t){return fo(2048,8,e,t)}function Zf(e,t){return fo(4,2,e,t)}function Gf(e,t){return fo(4,4,e,t)}function Kf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qf(e,t,n){return n=n!=null?n.concat([e]):null,fo(4,4,Kf.bind(null,t,e),n)}function Lc(){}function Yf(e,t){var n=rt();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&Ec(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Xf(e,t){var n=rt();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&Ec(t,i[1])?i[0]:(e=e(),n.memoizedState=[e,t],e)}function Jf(e,t,n){return Ln&21?(mt(n,t)||(n=rf(),re.lanes|=n,An|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ie=!0),e.memoizedState=n)}function Gv(e,t){var n=W;W=n!==0&&4>n?n:4,e(!0);var i=ds.transition;ds.transition={};try{e(!1),t()}finally{W=n,ds.transition=i}}function eh(){return rt().memoizedState}function Kv(e,t,n){var i=Jt(e);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},th(e))nh(t,n);else if(n=Of(e,t,n,i),n!==null){var r=Me();pt(n,e,i,r),ih(n,t,i)}}function Qv(e,t,n){var i=Jt(e),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(th(e))nh(t,r);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,l=a(o,n);if(r.hasEagerState=!0,r.eagerState=l,mt(l,o)){var c=t.interleaved;c===null?(r.next=r,wc(t)):(r.next=c.next,c.next=r),t.interleaved=r;return}}catch{}finally{}n=Of(e,t,r,i),n!==null&&(r=Me(),pt(n,e,i,r),ih(n,t,i))}}function th(e){var t=e.alternate;return e===re||t!==null&&t===re}function nh(e,t){Zi=Ua=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ih(e,t,n){if(n&4194240){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,sc(e,n)}}var Va={readContext:it,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},Yv={readContext:it,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:fu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,va(4194308,4,Kf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return va(4194308,4,e,t)},useInsertionEffect:function(e,t){return va(4,2,e,t)},useMemo:function(e,t){var n=ht();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var i=ht();return t=n!==void 0?n(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=Kv.bind(null,re,e),[i.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:mu,useDebugValue:Lc,useDeferredValue:function(e){return ht().memoizedState=e},useTransition:function(){var e=mu(!1),t=e[0];return e=Gv.bind(null,e[1]),ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=re,r=ht();if(ee){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),ye===null)throw Error(C(349));Ln&30||Uf(i,t,n)}r.memoizedState=n;var a={value:n,getSnapshot:t};return r.queue=a,fu($f.bind(null,i,a,e),[e]),i.flags|=2048,vr(9,Vf.bind(null,i,a,n,t),void 0,null),n},useId:function(){var e=ht(),t=ye.identifierPrefix;if(ee){var n=St,i=zt;n=(i&~(1<<32-ut(i)-1)).toString(32)+n,t=":"+t+"R"+n,n=hr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Zv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Xv={readContext:it,useCallback:Yf,useContext:it,useEffect:kc,useImperativeHandle:Qf,useInsertionEffect:Zf,useLayoutEffect:Gf,useMemo:Xf,useReducer:us,useRef:Wf,useState:function(){return us(gr)},useDebugValue:Lc,useDeferredValue:function(e){var t=rt();return Jf(t,ge.memoizedState,e)},useTransition:function(){var e=us(gr)[0],t=rt().memoizedState;return[e,t]},useMutableSource:Ff,useSyncExternalStore:Bf,useId:eh,unstable_isNewReconciler:!1},Jv={readContext:it,useCallback:Yf,useContext:it,useEffect:kc,useImperativeHandle:Qf,useInsertionEffect:Zf,useLayoutEffect:Gf,useMemo:Xf,useReducer:ps,useRef:Wf,useState:function(){return ps(gr)},useDebugValue:Lc,useDeferredValue:function(e){var t=rt();return ge===null?t.memoizedState=e:Jf(t,ge.memoizedState,e)},useTransition:function(){var e=ps(gr)[0],t=rt().memoizedState;return[e,t]},useMutableSource:Ff,useSyncExternalStore:Bf,useId:eh,unstable_isNewReconciler:!1};function st(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function fl(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ho={isMounted:function(e){return(e=e._reactInternals)?Tn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Me(),r=Jt(e),a=Nt(i,r);a.payload=t,n!=null&&(a.callback=n),t=Yt(e,a,r),t!==null&&(pt(t,e,r,i),ha(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Me(),r=Jt(e),a=Nt(i,r);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Yt(e,a,r),t!==null&&(pt(t,e,r,i),ha(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Me(),i=Jt(e),r=Nt(n,i);r.tag=2,t!=null&&(r.callback=t),t=Yt(e,r,i),t!==null&&(pt(t,e,i,n),ha(t,e,i))}};function hu(e,t,n,i,r,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,o):t.prototype&&t.prototype.isPureReactComponent?!cr(n,i)||!cr(r,a):!0}function rh(e,t,n){var i=!1,r=on,a=t.contextType;return typeof a=="object"&&a!==null?a=it(a):(r=Fe(t)?Cn:Le.current,i=t.contextTypes,a=(i=i!=null)?ci(e,r):on),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ho,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=a),t}function gu(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&ho.enqueueReplaceState(t,t.state,null)}function hl(e,t,n,i){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs={},jc(e);var a=t.contextType;typeof a=="object"&&a!==null?r.context=it(a):(a=Fe(t)?Cn:Le.current,r.context=ci(e,a)),r.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(fl(e,t,a,n),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&ho.enqueueReplaceState(r,r.state,null),Fa(e,n,r,i),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function mi(e,t){try{var n="",i=t;do n+=N1(i),i=i.return;while(i);var r=n}catch(a){r=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:r,digest:null}}function ms(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function gl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var eb=typeof WeakMap=="function"?WeakMap:Map;function ah(e,t,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var i=t.value;return n.callback=function(){qa||(qa=!0,El=i),gl(e,t)},n}function oh(e,t,n){n=Nt(-1,n),n.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var r=t.value;n.payload=function(){return i(r)},n.callback=function(){gl(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){gl(e,t),typeof i!="function"&&(Xt===null?Xt=new Set([this]):Xt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function vu(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new eb;var r=new Set;i.set(t,r)}else r=i.get(t),r===void 0&&(r=new Set,i.set(t,r));r.has(n)||(r.add(n),e=fb.bind(null,e,t,n),t.then(e,e))}function bu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function xu(e,t,n,i,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nt(-1,1),t.tag=2,Yt(n,t,1))),n.lanes|=1),e)}var tb=Rt.ReactCurrentOwner,Ie=!1;function Pe(e,t,n,i){t.child=e===null?Rf(t,null,n,i):ui(t,e.child,n,i)}function yu(e,t,n,i,r){n=n.render;var a=t.ref;return oi(t,r),i=Nc(e,t,n,i,a,r),n=Cc(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Mt(e,t,r)):(ee&&n&&hc(t),t.flags|=1,Pe(e,t,i,r),t.child)}function wu(e,t,n,i,r){if(e===null){var a=n.type;return typeof a=="function"&&!Dc(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,sh(e,t,a,i,r)):(e=wa(n.type,null,i,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&r)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:cr,n(o,i)&&e.ref===t.ref)return Mt(e,t,r)}return t.flags|=1,e=en(a,i),e.ref=t.ref,e.return=t,t.child=e}function sh(e,t,n,i,r){if(e!==null){var a=e.memoizedProps;if(cr(a,i)&&e.ref===t.ref)if(Ie=!1,t.pendingProps=i=a,(e.lanes&r)!==0)e.flags&131072&&(Ie=!0);else return t.lanes=e.lanes,Mt(e,t,r)}return vl(e,t,n,i,r)}function lh(e,t,n){var i=t.pendingProps,r=i.children,a=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(Qn,$e),$e|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(Qn,$e),$e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:n,K(Qn,$e),$e|=i}else a!==null?(i=a.baseLanes|n,t.memoizedState=null):i=n,K(Qn,$e),$e|=i;return Pe(e,t,r,n),t.child}function ch(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function vl(e,t,n,i,r){var a=Fe(n)?Cn:Le.current;return a=ci(t,a),oi(t,r),n=Nc(e,t,n,i,a,r),i=Cc(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Mt(e,t,r)):(ee&&i&&hc(t),t.flags|=1,Pe(e,t,n,r),t.child)}function ju(e,t,n,i,r){if(Fe(n)){var a=!0;Ta(t)}else a=!1;if(oi(t,r),t.stateNode===null)ba(e,t),rh(t,n,i),hl(t,n,i,r),i=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var c=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=it(d):(d=Fe(n)?Cn:Le.current,d=ci(t,d));var u=n.getDerivedStateFromProps,p=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==i||c!==d)&&gu(t,o,i,d),Bt=!1;var m=t.memoizedState;o.state=m,Fa(t,i,o,r),c=t.memoizedState,l!==i||m!==c||De.current||Bt?(typeof u=="function"&&(fl(t,n,u,i),c=t.memoizedState),(l=Bt||hu(t,n,l,i,m,c,d))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),o.props=i,o.state=c,o.context=d,i=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{o=t.stateNode,If(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:st(t.type,l),o.props=d,p=t.pendingProps,m=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=it(c):(c=Fe(n)?Cn:Le.current,c=ci(t,c));var g=n.getDerivedStateFromProps;(u=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==c)&&gu(t,o,i,c),Bt=!1,m=t.memoizedState,o.state=m,Fa(t,i,o,r);var b=t.memoizedState;l!==p||m!==b||De.current||Bt?(typeof g=="function"&&(fl(t,n,g,i),b=t.memoizedState),(d=Bt||hu(t,n,d,i,m,b,c)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,b,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,b,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=b),o.props=i,o.state=b,o.context=c,i=d):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),i=!1)}return bl(e,t,n,i,a,r)}function bl(e,t,n,i,r,a){ch(e,t);var o=(t.flags&128)!==0;if(!i&&!o)return r&&su(t,n,!1),Mt(e,t,a);i=t.stateNode,tb.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&o?(t.child=ui(t,e.child,null,a),t.child=ui(t,null,l,a)):Pe(e,t,l,a),t.memoizedState=i.state,r&&su(t,n,!0),t.child}function dh(e){var t=e.stateNode;t.pendingContext?ou(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ou(e,t.context,!1),_c(e,t.containerInfo)}function _u(e,t,n,i,r){return di(),vc(r),t.flags|=256,Pe(e,t,n,i),t.child}var xl={dehydrated:null,treeContext:null,retryLane:0};function yl(e){return{baseLanes:e,cachePool:null,transitions:null}}function uh(e,t,n){var i=t.pendingProps,r=ne.current,a=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(r&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),K(ne,r&1),e===null)return pl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=i.children,e=i.fallback,a?(i=t.mode,a=t.child,o={mode:"hidden",children:o},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=bo(o,i,0,null),e=En(e,i,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=yl(n),t.memoizedState=xl,e):Ac(t,o));if(r=e.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return nb(e,t,o,i,l,r,n);if(a){a=i.fallback,o=t.mode,r=e.child,l=r.sibling;var c={mode:"hidden",children:i.children};return!(o&1)&&t.child!==r?(i=t.child,i.childLanes=0,i.pendingProps=c,t.deletions=null):(i=en(r,c),i.subtreeFlags=r.subtreeFlags&14680064),l!==null?a=en(l,a):(a=En(a,o,n,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,o=e.child.memoizedState,o=o===null?yl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=xl,i}return a=e.child,e=a.sibling,i=en(a,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=n),i.return=t,i.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Ac(e,t){return t=bo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Jr(e,t,n,i){return i!==null&&vc(i),ui(t,e.child,null,n),e=Ac(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nb(e,t,n,i,r,a,o){if(n)return t.flags&256?(t.flags&=-257,i=ms(Error(C(422))),Jr(e,t,o,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=i.fallback,r=t.mode,i=bo({mode:"visible",children:i.children},r,0,null),a=En(a,r,o,null),a.flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,t.mode&1&&ui(t,e.child,null,o),t.child.memoizedState=yl(o),t.memoizedState=xl,a);if(!(t.mode&1))return Jr(e,t,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var l=i.dgst;return i=l,a=Error(C(419)),i=ms(a,i,void 0),Jr(e,t,o,i)}if(l=(o&e.childLanes)!==0,Ie||l){if(i=ye,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==a.retryLane&&(a.retryLane=r,Pt(e,r),pt(i,e,r,-1))}return Ic(),i=ms(Error(C(421))),Jr(e,t,o,i)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=hb.bind(null,e),r._reactRetry=t,null):(e=a.treeContext,He=Qt(r.nextSibling),We=t,ee=!0,ct=null,e!==null&&(Je[et++]=zt,Je[et++]=St,Je[et++]=kn,zt=e.id,St=e.overflow,kn=t),t=Ac(t,i.children),t.flags|=4096,t)}function zu(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),ml(e.return,t,n)}function fs(e,t,n,i,r){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=r)}function ph(e,t,n){var i=t.pendingProps,r=i.revealOrder,a=i.tail;if(Pe(e,t,i.children,n),i=ne.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zu(e,n,t);else if(e.tag===19)zu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(K(ne,i),!(t.mode&1))t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Ba(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),fs(t,!1,r,n,a);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Ba(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}fs(t,!0,n,null,a);break;case"together":fs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ba(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Mt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),An|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=en(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=en(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ib(e,t,n){switch(t.tag){case 3:dh(t),di();break;case 5:Df(t);break;case 1:Fe(t.type)&&Ta(t);break;case 4:_c(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,r=t.memoizedProps.value;K(Ia,i._currentValue),i._currentValue=r;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(K(ne,ne.current&1),t.flags|=128,null):n&t.child.childLanes?uh(e,t,n):(K(ne,ne.current&1),e=Mt(e,t,n),e!==null?e.sibling:null);K(ne,ne.current&1);break;case 19:if(i=(n&t.childLanes)!==0,e.flags&128){if(i)return ph(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),K(ne,ne.current),i)break;return null;case 22:case 23:return t.lanes=0,lh(e,t,n)}return Mt(e,t,n)}var mh,wl,fh,hh;mh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wl=function(){};fh=function(e,t,n,i){var r=e.memoizedProps;if(r!==i){e=t.stateNode,_n(bt.current);var a=null;switch(n){case"input":r=$s(e,r),i=$s(e,i),a=[];break;case"select":r=oe({},r,{value:void 0}),i=oe({},i,{value:void 0}),a=[];break;case"textarea":r=Ws(e,r),i=Ws(e,i),a=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Pa)}Gs(n,i);var o;n=null;for(d in r)if(!i.hasOwnProperty(d)&&r.hasOwnProperty(d)&&r[d]!=null)if(d==="style"){var l=r[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(nr.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in i){var c=i[d];if(l=r!=null?r[d]:void 0,i.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(a||(a=[]),a.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(a=a||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(nr.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&Y("scroll",e),a||l===c||(a=[])):(a=a||[]).push(d,c))}n&&(a=a||[]).push("style",n);var d=a;(t.updateQueue=d)&&(t.flags|=4)}};hh=function(e,t,n,i){n!==i&&(t.flags|=4)};function Li(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function rb(e,t,n){var i=t.pendingProps;switch(gc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Fe(t.type)&&Ma(),Ee(t),null;case 3:return i=t.stateNode,pi(),X(De),X(Le),Sc(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Yr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ct!==null&&(kl(ct),ct=null))),wl(e,t),Ee(t),null;case 5:zc(t);var r=_n(fr.current);if(n=t.type,e!==null&&t.stateNode!=null)fh(e,t,n,i,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(C(166));return Ee(t),null}if(e=_n(bt.current),Yr(t)){i=t.stateNode,n=t.type;var a=t.memoizedProps;switch(i[gt]=t,i[pr]=a,e=(t.mode&1)!==0,n){case"dialog":Y("cancel",i),Y("close",i);break;case"iframe":case"object":case"embed":Y("load",i);break;case"video":case"audio":for(r=0;r<Fi.length;r++)Y(Fi[r],i);break;case"source":Y("error",i);break;case"img":case"image":case"link":Y("error",i),Y("load",i);break;case"details":Y("toggle",i);break;case"input":Md(i,a),Y("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},Y("invalid",i);break;case"textarea":Rd(i,a),Y("invalid",i)}Gs(n,a),r=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?i.textContent!==l&&(a.suppressHydrationWarning!==!0&&Qr(i.textContent,l,e),r=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&Qr(i.textContent,l,e),r=["children",""+l]):nr.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Y("scroll",i)}switch(n){case"input":Vr(i),Td(i,a,!0);break;case"textarea":Vr(i),Od(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=Pa)}i=r,t.updateQueue=i,i!==null&&(t.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Vm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=o.createElement(n,{is:i.is}):(e=o.createElement(n),n==="select"&&(o=e,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):e=o.createElementNS(e,n),e[gt]=t,e[pr]=i,mh(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ks(n,i),n){case"dialog":Y("cancel",e),Y("close",e),r=i;break;case"iframe":case"object":case"embed":Y("load",e),r=i;break;case"video":case"audio":for(r=0;r<Fi.length;r++)Y(Fi[r],e);r=i;break;case"source":Y("error",e),r=i;break;case"img":case"image":case"link":Y("error",e),Y("load",e),r=i;break;case"details":Y("toggle",e),r=i;break;case"input":Md(e,i),r=$s(e,i),Y("invalid",e);break;case"option":r=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},r=oe({},i,{value:void 0}),Y("invalid",e);break;case"textarea":Rd(e,i),r=Ws(e,i),Y("invalid",e);break;default:r=i}Gs(n,r),l=r;for(a in l)if(l.hasOwnProperty(a)){var c=l[a];a==="style"?Hm(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&$m(e,c)):a==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&ir(e,c):typeof c=="number"&&ir(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(nr.hasOwnProperty(a)?c!=null&&a==="onScroll"&&Y("scroll",e):c!=null&&tc(e,a,c,o))}switch(n){case"input":Vr(e),Td(e,i,!1);break;case"textarea":Vr(e),Od(e);break;case"option":i.value!=null&&e.setAttribute("value",""+an(i.value));break;case"select":e.multiple=!!i.multiple,a=i.value,a!=null?ni(e,!!i.multiple,a,!1):i.defaultValue!=null&&ni(e,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Pa)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ee(t),null;case 6:if(e&&t.stateNode!=null)hh(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(C(166));if(n=_n(fr.current),_n(bt.current),Yr(t)){if(i=t.stateNode,n=t.memoizedProps,i[gt]=t,(a=i.nodeValue!==n)&&(e=We,e!==null))switch(e.tag){case 3:Qr(i.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qr(i.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[gt]=t,t.stateNode=i}return Ee(t),null;case 13:if(X(ne),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ee&&He!==null&&t.mode&1&&!(t.flags&128))Mf(),di(),t.flags|=98560,a=!1;else if(a=Yr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(C(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(C(317));a[gt]=t}else di(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ee(t),a=!1}else ct!==null&&(kl(ct),ct=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||ne.current&1?ve===0&&(ve=3):Ic())),t.updateQueue!==null&&(t.flags|=4),Ee(t),null);case 4:return pi(),wl(e,t),e===null&&dr(t.stateNode.containerInfo),Ee(t),null;case 10:return yc(t.type._context),Ee(t),null;case 17:return Fe(t.type)&&Ma(),Ee(t),null;case 19:if(X(ne),a=t.memoizedState,a===null)return Ee(t),null;if(i=(t.flags&128)!==0,o=a.rendering,o===null)if(i)Li(a,!1);else{if(ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Ba(e),o!==null){for(t.flags|=128,Li(a,!1),i=o.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)a=n,e=i,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return K(ne,ne.current&1|2),t.child}e=e.sibling}a.tail!==null&&de()>fi&&(t.flags|=128,i=!0,Li(a,!1),t.lanes=4194304)}else{if(!i)if(e=Ba(o),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Li(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!ee)return Ee(t),null}else 2*de()-a.renderingStartTime>fi&&n!==1073741824&&(t.flags|=128,i=!0,Li(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=de(),t.sibling=null,n=ne.current,K(ne,i?n&1|2:n&1),t):(Ee(t),null);case 22:case 23:return Oc(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?$e&1073741824&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function ab(e,t){switch(gc(t),t.tag){case 1:return Fe(t.type)&&Ma(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pi(),X(De),X(Le),Sc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return zc(t),null;case 13:if(X(ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));di()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(ne),null;case 4:return pi(),null;case 10:return yc(t.type._context),null;case 22:case 23:return Oc(),null;case 24:return null;default:return null}}var ea=!1,Ce=!1,ob=typeof WeakSet=="function"?WeakSet:Set,T=null;function Kn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){se(e,t,i)}else n.current=null}function jl(e,t,n){try{n()}catch(i){se(e,t,i)}}var Su=!1;function sb(e,t){if(al=ka,e=yf(),fc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,d=0,u=0,p=e,m=null;t:for(;;){for(var g;p!==n||r!==0&&p.nodeType!==3||(l=o+r),p!==a||i!==0&&p.nodeType!==3||(c=o+i),p.nodeType===3&&(o+=p.nodeValue.length),(g=p.firstChild)!==null;)m=p,p=g;for(;;){if(p===e)break t;if(m===n&&++d===r&&(l=o),m===a&&++u===i&&(c=o),(g=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=g}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ol={focusedElem:e,selectionRange:n},ka=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var y=b.memoizedProps,w=b.memoizedState,h=t.stateNode,f=h.getSnapshotBeforeUpdate(t.elementType===t.type?y:st(t.type,y),w);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(j){se(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return b=Su,Su=!1,b}function Gi(e,t,n){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&e)===e){var a=r.destroy;r.destroy=void 0,a!==void 0&&jl(t,n,a)}r=r.next}while(r!==i)}}function go(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var i=n.create;n.destroy=i()}n=n.next}while(n!==t)}}function _l(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function gh(e){var t=e.alternate;t!==null&&(e.alternate=null,gh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[gt],delete t[pr],delete t[cl],delete t[$v],delete t[qv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function vh(e){return e.tag===5||e.tag===3||e.tag===4}function Eu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zl(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Pa));else if(i!==4&&(e=e.child,e!==null))for(zl(e,t,n),e=e.sibling;e!==null;)zl(e,t,n),e=e.sibling}function Sl(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Sl(e,t,n),e=e.sibling;e!==null;)Sl(e,t,n),e=e.sibling}var je=null,lt=!1;function It(e,t,n){for(n=n.child;n!==null;)bh(e,t,n),n=n.sibling}function bh(e,t,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(so,n)}catch{}switch(n.tag){case 5:Ce||Kn(n,t);case 6:var i=je,r=lt;je=null,It(e,t,n),je=i,lt=r,je!==null&&(lt?(e=je,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):je.removeChild(n.stateNode));break;case 18:je!==null&&(lt?(e=je,n=n.stateNode,e.nodeType===8?ss(e.parentNode,n):e.nodeType===1&&ss(e,n),sr(e)):ss(je,n.stateNode));break;case 4:i=je,r=lt,je=n.stateNode.containerInfo,lt=!0,It(e,t,n),je=i,lt=r;break;case 0:case 11:case 14:case 15:if(!Ce&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var a=r,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&jl(n,t,o),r=r.next}while(r!==i)}It(e,t,n);break;case 1:if(!Ce&&(Kn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(l){se(n,t,l)}It(e,t,n);break;case 21:It(e,t,n);break;case 22:n.mode&1?(Ce=(i=Ce)||n.memoizedState!==null,It(e,t,n),Ce=i):It(e,t,n);break;default:It(e,t,n)}}function Nu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ob),t.forEach(function(i){var r=gb.bind(null,e,i);n.has(i)||(n.add(i),i.then(r,r))})}}function at(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var a=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:je=l.stateNode,lt=!1;break e;case 3:je=l.stateNode.containerInfo,lt=!0;break e;case 4:je=l.stateNode.containerInfo,lt=!0;break e}l=l.return}if(je===null)throw Error(C(160));bh(a,o,r),je=null,lt=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(d){se(r,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)xh(t,e),t=t.sibling}function xh(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(at(t,e),ft(e),i&4){try{Gi(3,e,e.return),go(3,e)}catch(y){se(e,e.return,y)}try{Gi(5,e,e.return)}catch(y){se(e,e.return,y)}}break;case 1:at(t,e),ft(e),i&512&&n!==null&&Kn(n,n.return);break;case 5:if(at(t,e),ft(e),i&512&&n!==null&&Kn(n,n.return),e.flags&32){var r=e.stateNode;try{ir(r,"")}catch(y){se(e,e.return,y)}}if(i&4&&(r=e.stateNode,r!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&Bm(r,a),Ks(l,o);var d=Ks(l,a);for(o=0;o<c.length;o+=2){var u=c[o],p=c[o+1];u==="style"?Hm(r,p):u==="dangerouslySetInnerHTML"?$m(r,p):u==="children"?ir(r,p):tc(r,u,p,d)}switch(l){case"input":qs(r,a);break;case"textarea":Um(r,a);break;case"select":var m=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!a.multiple;var g=a.value;g!=null?ni(r,!!a.multiple,g,!1):m!==!!a.multiple&&(a.defaultValue!=null?ni(r,!!a.multiple,a.defaultValue,!0):ni(r,!!a.multiple,a.multiple?[]:"",!1))}r[pr]=a}catch(y){se(e,e.return,y)}}break;case 6:if(at(t,e),ft(e),i&4){if(e.stateNode===null)throw Error(C(162));r=e.stateNode,a=e.memoizedProps;try{r.nodeValue=a}catch(y){se(e,e.return,y)}}break;case 3:if(at(t,e),ft(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{sr(t.containerInfo)}catch(y){se(e,e.return,y)}break;case 4:at(t,e),ft(e);break;case 13:at(t,e),ft(e),r=e.child,r.flags&8192&&(a=r.memoizedState!==null,r.stateNode.isHidden=a,!a||r.alternate!==null&&r.alternate.memoizedState!==null||(Tc=de())),i&4&&Nu(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(Ce=(d=Ce)||u,at(t,e),Ce=d):at(t,e),ft(e),i&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!u&&e.mode&1)for(T=e,u=e.child;u!==null;){for(p=T=u;T!==null;){switch(m=T,g=m.child,m.tag){case 0:case 11:case 14:case 15:Gi(4,m,m.return);break;case 1:Kn(m,m.return);var b=m.stateNode;if(typeof b.componentWillUnmount=="function"){i=m,n=m.return;try{t=i,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(y){se(i,n,y)}}break;case 5:Kn(m,m.return);break;case 22:if(m.memoizedState!==null){ku(p);continue}}g!==null?(g.return=m,T=g):ku(p)}u=u.sibling}e:for(u=null,p=e;;){if(p.tag===5){if(u===null){u=p;try{r=p.stateNode,d?(a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=p.stateNode,c=p.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=qm("display",o))}catch(y){se(e,e.return,y)}}}else if(p.tag===6){if(u===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(y){se(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;u===p&&(u=null),p=p.return}u===p&&(u=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:at(t,e),ft(e),i&4&&Nu(e);break;case 21:break;default:at(t,e),ft(e)}}function ft(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(vh(n)){var i=n;break e}n=n.return}throw Error(C(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ir(r,""),i.flags&=-33);var a=Eu(e);Sl(e,a,r);break;case 3:case 4:var o=i.stateNode.containerInfo,l=Eu(e);zl(e,l,o);break;default:throw Error(C(161))}}catch(c){se(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function lb(e,t,n){T=e,yh(e)}function yh(e,t,n){for(var i=(e.mode&1)!==0;T!==null;){var r=T,a=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ea;if(!o){var l=r.alternate,c=l!==null&&l.memoizedState!==null||Ce;l=ea;var d=Ce;if(ea=o,(Ce=c)&&!d)for(T=r;T!==null;)o=T,c=o.child,o.tag===22&&o.memoizedState!==null?Lu(r):c!==null?(c.return=o,T=c):Lu(r);for(;a!==null;)T=a,yh(a),a=a.sibling;T=r,ea=l,Ce=d}Cu(e)}else r.subtreeFlags&8772&&a!==null?(a.return=r,T=a):Cu(e)}}function Cu(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ce||go(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!Ce)if(n===null)i.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:st(t.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&pu(t,a,i);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}pu(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var p=u.dehydrated;p!==null&&sr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Ce||t.flags&512&&_l(t)}catch(m){se(t,t.return,m)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function ku(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function Lu(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{go(4,t)}catch(c){se(t,n,c)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var r=t.return;try{i.componentDidMount()}catch(c){se(t,r,c)}}var a=t.return;try{_l(t)}catch(c){se(t,a,c)}break;case 5:var o=t.return;try{_l(t)}catch(c){se(t,o,c)}}}catch(c){se(t,t.return,c)}if(t===e){T=null;break}var l=t.sibling;if(l!==null){l.return=t.return,T=l;break}T=t.return}}var cb=Math.ceil,$a=Rt.ReactCurrentDispatcher,Pc=Rt.ReactCurrentOwner,nt=Rt.ReactCurrentBatchConfig,q=0,ye=null,me=null,_e=0,$e=0,Qn=dn(0),ve=0,br=null,An=0,vo=0,Mc=0,Ki=null,Oe=null,Tc=0,fi=1/0,jt=null,qa=!1,El=null,Xt=null,ta=!1,Ht=null,Ha=0,Qi=0,Nl=null,xa=-1,ya=0;function Me(){return q&6?de():xa!==-1?xa:xa=de()}function Jt(e){return e.mode&1?q&2&&_e!==0?_e&-_e:Wv.transition!==null?(ya===0&&(ya=rf()),ya):(e=W,e!==0||(e=window.event,e=e===void 0?16:uf(e.type)),e):1}function pt(e,t,n,i){if(50<Qi)throw Qi=0,Nl=null,Error(C(185));Cr(e,n,i),(!(q&2)||e!==ye)&&(e===ye&&(!(q&2)&&(vo|=n),ve===4&&$t(e,_e)),Be(e,i),n===1&&q===0&&!(t.mode&1)&&(fi=de()+500,mo&&un()))}function Be(e,t){var n=e.callbackNode;W1(e,t);var i=Ca(e,e===ye?_e:0);if(i===0)n!==null&&Fd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(n!=null&&Fd(n),t===1)e.tag===0?Hv(Au.bind(null,e)):Lf(Au.bind(null,e)),Uv(function(){!(q&6)&&un()}),n=null;else{switch(af(i)){case 1:n=oc;break;case 4:n=tf;break;case 16:n=Na;break;case 536870912:n=nf;break;default:n=Na}n=Ch(n,wh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function wh(e,t){if(xa=-1,ya=0,q&6)throw Error(C(327));var n=e.callbackNode;if(si()&&e.callbackNode!==n)return null;var i=Ca(e,e===ye?_e:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=Wa(e,i);else{t=i;var r=q;q|=2;var a=_h();(ye!==e||_e!==t)&&(jt=null,fi=de()+500,Sn(e,t));do try{pb();break}catch(l){jh(e,l)}while(!0);xc(),$a.current=a,q=r,me!==null?t=0:(ye=null,_e=0,t=ve)}if(t!==0){if(t===2&&(r=el(e),r!==0&&(i=r,t=Cl(e,r))),t===1)throw n=br,Sn(e,0),$t(e,i),Be(e,de()),n;if(t===6)$t(e,i);else{if(r=e.current.alternate,!(i&30)&&!db(r)&&(t=Wa(e,i),t===2&&(a=el(e),a!==0&&(i=a,t=Cl(e,a))),t===1))throw n=br,Sn(e,0),$t(e,i),Be(e,de()),n;switch(e.finishedWork=r,e.finishedLanes=i,t){case 0:case 1:throw Error(C(345));case 2:vn(e,Oe,jt);break;case 3:if($t(e,i),(i&130023424)===i&&(t=Tc+500-de(),10<t)){if(Ca(e,0)!==0)break;if(r=e.suspendedLanes,(r&i)!==i){Me(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=ll(vn.bind(null,e,Oe,jt),t);break}vn(e,Oe,jt);break;case 4:if($t(e,i),(i&4194240)===i)break;for(t=e.eventTimes,r=-1;0<i;){var o=31-ut(i);a=1<<o,o=t[o],o>r&&(r=o),i&=~a}if(i=r,i=de()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*cb(i/1960))-i,10<i){e.timeoutHandle=ll(vn.bind(null,e,Oe,jt),i);break}vn(e,Oe,jt);break;case 5:vn(e,Oe,jt);break;default:throw Error(C(329))}}}return Be(e,de()),e.callbackNode===n?wh.bind(null,e):null}function Cl(e,t){var n=Ki;return e.current.memoizedState.isDehydrated&&(Sn(e,t).flags|=256),e=Wa(e,t),e!==2&&(t=Oe,Oe=n,t!==null&&kl(t)),e}function kl(e){Oe===null?Oe=e:Oe.push.apply(Oe,e)}function db(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],a=r.getSnapshot;r=r.value;try{if(!mt(a(),r))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $t(e,t){for(t&=~Mc,t&=~vo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ut(t),i=1<<n;e[n]=-1,t&=~i}}function Au(e){if(q&6)throw Error(C(327));si();var t=Ca(e,0);if(!(t&1))return Be(e,de()),null;var n=Wa(e,t);if(e.tag!==0&&n===2){var i=el(e);i!==0&&(t=i,n=Cl(e,i))}if(n===1)throw n=br,Sn(e,0),$t(e,t),Be(e,de()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,vn(e,Oe,jt),Be(e,de()),null}function Rc(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(fi=de()+500,mo&&un())}}function Pn(e){Ht!==null&&Ht.tag===0&&!(q&6)&&si();var t=q;q|=1;var n=nt.transition,i=W;try{if(nt.transition=null,W=1,e)return e()}finally{W=i,nt.transition=n,q=t,!(q&6)&&un()}}function Oc(){$e=Qn.current,X(Qn)}function Sn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Bv(n)),me!==null)for(n=me.return;n!==null;){var i=n;switch(gc(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ma();break;case 3:pi(),X(De),X(Le),Sc();break;case 5:zc(i);break;case 4:pi();break;case 13:X(ne);break;case 19:X(ne);break;case 10:yc(i.type._context);break;case 22:case 23:Oc()}n=n.return}if(ye=e,me=e=en(e.current,null),_e=$e=t,ve=0,br=null,Mc=vo=An=0,Oe=Ki=null,jn!==null){for(t=0;t<jn.length;t++)if(n=jn[t],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,a=n.pending;if(a!==null){var o=a.next;a.next=r,i.next=o}n.pending=i}jn=null}return e}function jh(e,t){do{var n=me;try{if(xc(),ga.current=Va,Ua){for(var i=re.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ua=!1}if(Ln=0,be=ge=re=null,Zi=!1,hr=0,Pc.current=null,n===null||n.return===null){ve=1,br=t,me=null;break}e:{var a=e,o=n.return,l=n,c=t;if(t=_e,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,u=l,p=u.tag;if(!(u.mode&1)&&(p===0||p===11||p===15)){var m=u.alternate;m?(u.updateQueue=m.updateQueue,u.memoizedState=m.memoizedState,u.lanes=m.lanes):(u.updateQueue=null,u.memoizedState=null)}var g=bu(o);if(g!==null){g.flags&=-257,xu(g,o,l,a,t),g.mode&1&&vu(a,d,t),t=g,c=d;var b=t.updateQueue;if(b===null){var y=new Set;y.add(c),t.updateQueue=y}else b.add(c);break e}else{if(!(t&1)){vu(a,d,t),Ic();break e}c=Error(C(426))}}else if(ee&&l.mode&1){var w=bu(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),xu(w,o,l,a,t),vc(mi(c,l));break e}}a=c=mi(c,l),ve!==4&&(ve=2),Ki===null?Ki=[a]:Ki.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var h=ah(a,c,t);uu(a,h);break e;case 1:l=c;var f=a.type,v=a.stateNode;if(!(a.flags&128)&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Xt===null||!Xt.has(v)))){a.flags|=65536,t&=-t,a.lanes|=t;var j=oh(a,l,t);uu(a,j);break e}}a=a.return}while(a!==null)}Sh(n)}catch(_){t=_,me===n&&n!==null&&(me=n=n.return);continue}break}while(!0)}function _h(){var e=$a.current;return $a.current=Va,e===null?Va:e}function Ic(){(ve===0||ve===3||ve===2)&&(ve=4),ye===null||!(An&268435455)&&!(vo&268435455)||$t(ye,_e)}function Wa(e,t){var n=q;q|=2;var i=_h();(ye!==e||_e!==t)&&(jt=null,Sn(e,t));do try{ub();break}catch(r){jh(e,r)}while(!0);if(xc(),q=n,$a.current=i,me!==null)throw Error(C(261));return ye=null,_e=0,ve}function ub(){for(;me!==null;)zh(me)}function pb(){for(;me!==null&&!I1();)zh(me)}function zh(e){var t=Nh(e.alternate,e,$e);e.memoizedProps=e.pendingProps,t===null?Sh(e):me=t,Pc.current=null}function Sh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ab(n,t),n!==null){n.flags&=32767,me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,me=null;return}}else if(n=rb(n,t,$e),n!==null){me=n;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);ve===0&&(ve=5)}function vn(e,t,n){var i=W,r=nt.transition;try{nt.transition=null,W=1,mb(e,t,n,i)}finally{nt.transition=r,W=i}return null}function mb(e,t,n,i){do si();while(Ht!==null);if(q&6)throw Error(C(327));n=e.finishedWork;var r=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Z1(e,a),e===ye&&(me=ye=null,_e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ta||(ta=!0,Ch(Na,function(){return si(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=nt.transition,nt.transition=null;var o=W;W=1;var l=q;q|=4,Pc.current=null,sb(e,n),xh(n,e),Mv(ol),ka=!!al,ol=al=null,e.current=n,lb(n),D1(),q=l,W=o,nt.transition=a}else e.current=n;if(ta&&(ta=!1,Ht=e,Ha=r),a=e.pendingLanes,a===0&&(Xt=null),U1(n.stateNode),Be(e,de()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(qa)throw qa=!1,e=El,El=null,e;return Ha&1&&e.tag!==0&&si(),a=e.pendingLanes,a&1?e===Nl?Qi++:(Qi=0,Nl=e):Qi=0,un(),null}function si(){if(Ht!==null){var e=af(Ha),t=nt.transition,n=W;try{if(nt.transition=null,W=16>e?16:e,Ht===null)var i=!1;else{if(e=Ht,Ht=null,Ha=0,q&6)throw Error(C(331));var r=q;for(q|=4,T=e.current;T!==null;){var a=T,o=a.child;if(T.flags&16){var l=a.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(T=d;T!==null;){var u=T;switch(u.tag){case 0:case 11:case 15:Gi(8,u,a)}var p=u.child;if(p!==null)p.return=u,T=p;else for(;T!==null;){u=T;var m=u.sibling,g=u.return;if(gh(u),u===d){T=null;break}if(m!==null){m.return=g,T=m;break}T=g}}}var b=a.alternate;if(b!==null){var y=b.child;if(y!==null){b.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}T=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,T=o;else e:for(;T!==null;){if(a=T,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Gi(9,a,a.return)}var h=a.sibling;if(h!==null){h.return=a.return,T=h;break e}T=a.return}}var f=e.current;for(T=f;T!==null;){o=T;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,T=v;else e:for(o=f;T!==null;){if(l=T,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:go(9,l)}}catch(_){se(l,l.return,_)}if(l===o){T=null;break e}var j=l.sibling;if(j!==null){j.return=l.return,T=j;break e}T=l.return}}if(q=r,un(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(so,e)}catch{}i=!0}return i}finally{W=n,nt.transition=t}}return!1}function Pu(e,t,n){t=mi(n,t),t=ah(e,t,1),e=Yt(e,t,1),t=Me(),e!==null&&(Cr(e,1,t),Be(e,t))}function se(e,t,n){if(e.tag===3)Pu(e,e,n);else for(;t!==null;){if(t.tag===3){Pu(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Xt===null||!Xt.has(i))){e=mi(n,e),e=oh(t,e,1),t=Yt(t,e,1),e=Me(),t!==null&&(Cr(t,1,e),Be(t,e));break}}t=t.return}}function fb(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),t=Me(),e.pingedLanes|=e.suspendedLanes&n,ye===e&&(_e&n)===n&&(ve===4||ve===3&&(_e&130023424)===_e&&500>de()-Tc?Sn(e,0):Mc|=n),Be(e,t)}function Eh(e,t){t===0&&(e.mode&1?(t=Hr,Hr<<=1,!(Hr&130023424)&&(Hr=4194304)):t=1);var n=Me();e=Pt(e,t),e!==null&&(Cr(e,t,n),Be(e,n))}function hb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Eh(e,n)}function gb(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(C(314))}i!==null&&i.delete(t),Eh(e,n)}var Nh;Nh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||De.current)Ie=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ie=!1,ib(e,t,n);Ie=!!(e.flags&131072)}else Ie=!1,ee&&t.flags&1048576&&Af(t,Oa,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;ba(e,t),e=t.pendingProps;var r=ci(t,Le.current);oi(t,n),r=Nc(null,t,i,e,r,n);var a=Cc();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Fe(i)?(a=!0,Ta(t)):a=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,jc(t),r.updater=ho,t.stateNode=r,r._reactInternals=t,hl(t,i,e,n),t=bl(null,t,i,!0,a,n)):(t.tag=0,ee&&a&&hc(t),Pe(null,t,r,n),t=t.child),t;case 16:i=t.elementType;e:{switch(ba(e,t),e=t.pendingProps,r=i._init,i=r(i._payload),t.type=i,r=t.tag=bb(i),e=st(i,e),r){case 0:t=vl(null,t,i,e,n);break e;case 1:t=ju(null,t,i,e,n);break e;case 11:t=yu(null,t,i,e,n);break e;case 14:t=wu(null,t,i,st(i.type,e),n);break e}throw Error(C(306,i,""))}return t;case 0:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:st(i,r),vl(e,t,i,r,n);case 1:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:st(i,r),ju(e,t,i,r,n);case 3:e:{if(dh(t),e===null)throw Error(C(387));i=t.pendingProps,a=t.memoizedState,r=a.element,If(e,t),Fa(t,i,null,n);var o=t.memoizedState;if(i=o.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){r=mi(Error(C(423)),t),t=_u(e,t,i,n,r);break e}else if(i!==r){r=mi(Error(C(424)),t),t=_u(e,t,i,n,r);break e}else for(He=Qt(t.stateNode.containerInfo.firstChild),We=t,ee=!0,ct=null,n=Rf(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(di(),i===r){t=Mt(e,t,n);break e}Pe(e,t,i,n)}t=t.child}return t;case 5:return Df(t),e===null&&pl(t),i=t.type,r=t.pendingProps,a=e!==null?e.memoizedProps:null,o=r.children,sl(i,r)?o=null:a!==null&&sl(i,a)&&(t.flags|=32),ch(e,t),Pe(e,t,o,n),t.child;case 6:return e===null&&pl(t),null;case 13:return uh(e,t,n);case 4:return _c(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ui(t,null,i,n):Pe(e,t,i,n),t.child;case 11:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:st(i,r),yu(e,t,i,r,n);case 7:return Pe(e,t,t.pendingProps,n),t.child;case 8:return Pe(e,t,t.pendingProps.children,n),t.child;case 12:return Pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(i=t.type._context,r=t.pendingProps,a=t.memoizedProps,o=r.value,K(Ia,i._currentValue),i._currentValue=o,a!==null)if(mt(a.value,o)){if(a.children===r.children&&!De.current){t=Mt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var c=l.firstContext;c!==null;){if(c.context===i){if(a.tag===1){c=Nt(-1,n&-n),c.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),ml(a.return,n,t),l.lanes|=n;break}c=c.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(C(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ml(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Pe(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,i=t.pendingProps.children,oi(t,n),r=it(r),i=i(r),t.flags|=1,Pe(e,t,i,n),t.child;case 14:return i=t.type,r=st(i,t.pendingProps),r=st(i.type,r),wu(e,t,i,r,n);case 15:return sh(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:st(i,r),ba(e,t),t.tag=1,Fe(i)?(e=!0,Ta(t)):e=!1,oi(t,n),rh(t,i,r),hl(t,i,r,n),bl(null,t,i,!0,e,n);case 19:return ph(e,t,n);case 22:return lh(e,t,n)}throw Error(C(156,t.tag))};function Ch(e,t){return ef(e,t)}function vb(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tt(e,t,n,i){return new vb(e,t,n,i)}function Dc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bb(e){if(typeof e=="function")return Dc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ic)return 11;if(e===rc)return 14}return 2}function en(e,t){var n=e.alternate;return n===null?(n=tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function wa(e,t,n,i,r,a){var o=2;if(i=e,typeof e=="function")Dc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Bn:return En(n.children,r,a,t);case nc:o=8,r|=8;break;case Fs:return e=tt(12,n,t,r|2),e.elementType=Fs,e.lanes=a,e;case Bs:return e=tt(13,n,t,r),e.elementType=Bs,e.lanes=a,e;case Us:return e=tt(19,n,t,r),e.elementType=Us,e.lanes=a,e;case Im:return bo(n,r,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Rm:o=10;break e;case Om:o=9;break e;case ic:o=11;break e;case rc:o=14;break e;case Ft:o=16,i=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=tt(o,n,t,r),t.elementType=e,t.type=i,t.lanes=a,t}function En(e,t,n,i){return e=tt(7,e,i,t),e.lanes=n,e}function bo(e,t,n,i){return e=tt(22,e,i,t),e.elementType=Im,e.lanes=n,e.stateNode={isHidden:!1},e}function hs(e,t,n){return e=tt(6,e,null,t),e.lanes=n,e}function gs(e,t,n){return t=tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function xb(e,t,n,i,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qo(0),this.expirationTimes=Qo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qo(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Fc(e,t,n,i,r,a,o,l,c){return e=new xb(e,t,n,l,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=tt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jc(a),e}function yb(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fn,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}function kh(e){if(!e)return on;e=e._reactInternals;e:{if(Tn(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(Fe(n))return kf(e,n,t)}return t}function Lh(e,t,n,i,r,a,o,l,c){return e=Fc(n,i,!0,e,r,a,o,l,c),e.context=kh(null),n=e.current,i=Me(),r=Jt(n),a=Nt(i,r),a.callback=t??null,Yt(n,a,r),e.current.lanes=r,Cr(e,r,i),Be(e,i),e}function xo(e,t,n,i){var r=t.current,a=Me(),o=Jt(r);return n=kh(n),t.context===null?t.context=n:t.pendingContext=n,t=Nt(a,o),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=Yt(r,t,o),e!==null&&(pt(e,r,o,a),ha(e,r,o)),o}function Za(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Mu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Bc(e,t){Mu(e,t),(e=e.alternate)&&Mu(e,t)}function wb(){return null}var Ah=typeof reportError=="function"?reportError:function(e){console.error(e)};function Uc(e){this._internalRoot=e}yo.prototype.render=Uc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));xo(e,t,null,null)};yo.prototype.unmount=Uc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pn(function(){xo(null,e,null,null)}),t[At]=null}};function yo(e){this._internalRoot=e}yo.prototype.unstable_scheduleHydration=function(e){if(e){var t=lf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Vt.length&&t!==0&&t<Vt[n].priority;n++);Vt.splice(n,0,e),n===0&&df(e)}};function Vc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Tu(){}function jb(e,t,n,i,r){if(r){if(typeof i=="function"){var a=i;i=function(){var d=Za(o);a.call(d)}}var o=Lh(t,i,e,0,null,!1,!1,"",Tu);return e._reactRootContainer=o,e[At]=o.current,dr(e.nodeType===8?e.parentNode:e),Pn(),o}for(;r=e.lastChild;)e.removeChild(r);if(typeof i=="function"){var l=i;i=function(){var d=Za(c);l.call(d)}}var c=Fc(e,0,!1,null,null,!1,!1,"",Tu);return e._reactRootContainer=c,e[At]=c.current,dr(e.nodeType===8?e.parentNode:e),Pn(function(){xo(t,c,n,i)}),c}function jo(e,t,n,i,r){var a=n._reactRootContainer;if(a){var o=a;if(typeof r=="function"){var l=r;r=function(){var c=Za(o);l.call(c)}}xo(t,o,e,r)}else o=jb(n,t,e,r,i);return Za(o)}of=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Di(t.pendingLanes);n!==0&&(sc(t,n|1),Be(t,de()),!(q&6)&&(fi=de()+500,un()))}break;case 13:Pn(function(){var i=Pt(e,1);if(i!==null){var r=Me();pt(i,e,1,r)}}),Bc(e,1)}};lc=function(e){if(e.tag===13){var t=Pt(e,134217728);if(t!==null){var n=Me();pt(t,e,134217728,n)}Bc(e,134217728)}};sf=function(e){if(e.tag===13){var t=Jt(e),n=Pt(e,t);if(n!==null){var i=Me();pt(n,e,t,i)}Bc(e,t)}};lf=function(){return W};cf=function(e,t){var n=W;try{return W=e,t()}finally{W=n}};Ys=function(e,t,n){switch(t){case"input":if(qs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var r=po(i);if(!r)throw Error(C(90));Fm(i),qs(i,r)}}}break;case"textarea":Um(e,n);break;case"select":t=n.value,t!=null&&ni(e,!!n.multiple,t,!1)}};Gm=Rc;Km=Pn;var _b={usingClientEntryPoint:!1,Events:[Lr,qn,po,Wm,Zm,Rc]},Ai={findFiberByHostInstance:wn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zb={bundleType:Ai.bundleType,version:Ai.version,rendererPackageName:Ai.rendererPackageName,rendererConfig:Ai.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Xm(e),e===null?null:e.stateNode},findFiberByHostInstance:Ai.findFiberByHostInstance||wb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var na=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!na.isDisabled&&na.supportsFiber)try{so=na.inject(zb),vt=na}catch{}}Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_b;Ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vc(t))throw Error(C(200));return yb(e,t,null,n)};Ke.createRoot=function(e,t){if(!Vc(e))throw Error(C(299));var n=!1,i="",r=Ah;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Fc(e,1,!1,null,null,n,!1,i,r),e[At]=t.current,dr(e.nodeType===8?e.parentNode:e),new Uc(t)};Ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Xm(t),e=e===null?null:e.stateNode,e};Ke.flushSync=function(e){return Pn(e)};Ke.hydrate=function(e,t,n){if(!wo(t))throw Error(C(200));return jo(null,e,t,!0,n)};Ke.hydrateRoot=function(e,t,n){if(!Vc(e))throw Error(C(405));var i=n!=null&&n.hydratedSources||null,r=!1,a="",o=Ah;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Lh(t,null,e,1,n??null,r,!1,a,o),e[At]=t.current,dr(e),i)for(e=0;e<i.length;e++)n=i[e],r=n._getVersion,r=r(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new yo(t)};Ke.render=function(e,t,n){if(!wo(t))throw Error(C(200));return jo(null,e,t,!1,n)};Ke.unmountComponentAtNode=function(e){if(!wo(e))throw Error(C(40));return e._reactRootContainer?(Pn(function(){jo(null,null,e,!1,function(){e._reactRootContainer=null,e[At]=null})}),!0):!1};Ke.unstable_batchedUpdates=Rc;Ke.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!wo(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return jo(e,t,n,!1,i)};Ke.version="18.3.1-next-f1338f8080-20240426";function Ph(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ph)}catch(e){console.error(e)}}Ph(),Am.exports=Ke;var Sb=Am.exports,Ru=Sb;Is.createRoot=Ru.createRoot,Is.hydrateRoot=Ru.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xr(){return xr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},xr.apply(this,arguments)}var Wt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Wt||(Wt={}));const Ou="popstate";function Eb(e){e===void 0&&(e={});function t(i,r){let{pathname:a,search:o,hash:l}=i.location;return Ll("",{pathname:a,search:o,hash:l},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:Ga(r)}return Cb(t,n,null,e)}function ae(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function $c(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Nb(){return Math.random().toString(36).substr(2,8)}function Iu(e,t){return{usr:e.state,key:e.key,idx:t}}function Ll(e,t,n,i){return n===void 0&&(n=null),xr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ji(t):t,{state:n,key:t&&t.key||i||Nb()})}function Ga(e){let{pathname:t="/",search:n="",hash:i=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(t+=i.charAt(0)==="#"?i:"#"+i),t}function ji(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let i=e.indexOf("?");i>=0&&(t.search=e.substr(i),e=e.substr(0,i)),e&&(t.pathname=e)}return t}function Cb(e,t,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:a=!1}=i,o=r.history,l=Wt.Pop,c=null,d=u();d==null&&(d=0,o.replaceState(xr({},o.state,{idx:d}),""));function u(){return(o.state||{idx:null}).idx}function p(){l=Wt.Pop;let w=u(),h=w==null?null:w-d;d=w,c&&c({action:l,location:y.location,delta:h})}function m(w,h){l=Wt.Push;let f=Ll(y.location,w,h);d=u()+1;let v=Iu(f,d),j=y.createHref(f);try{o.pushState(v,"",j)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;r.location.assign(j)}a&&c&&c({action:l,location:y.location,delta:1})}function g(w,h){l=Wt.Replace;let f=Ll(y.location,w,h);d=u();let v=Iu(f,d),j=y.createHref(f);o.replaceState(v,"",j),a&&c&&c({action:l,location:y.location,delta:0})}function b(w){let h=r.location.origin!=="null"?r.location.origin:r.location.href,f=typeof w=="string"?w:Ga(w);return f=f.replace(/ $/,"%20"),ae(h,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,h)}let y={get action(){return l},get location(){return e(r,o)},listen(w){if(c)throw new Error("A history only accepts one active listener");return r.addEventListener(Ou,p),c=w,()=>{r.removeEventListener(Ou,p),c=null}},createHref(w){return t(r,w)},createURL:b,encodeLocation(w){let h=b(w);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:g,go(w){return o.go(w)}};return y}var Du;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Du||(Du={}));function kb(e,t,n){return n===void 0&&(n="/"),Lb(e,t,n)}function Lb(e,t,n,i){let r=typeof t=="string"?ji(t):t,a=hi(r.pathname||"/",n);if(a==null)return null;let o=Mh(e);Ab(o);let l=null;for(let c=0;l==null&&c<o.length;++c){let d=Vb(a);l=Bb(o[c],d)}return l}function Mh(e,t,n,i){t===void 0&&(t=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(a,o,l)=>{let c={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};c.relativePath.startsWith("/")&&(ae(c.relativePath.startsWith(i),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(i.length));let d=tn([i,c.relativePath]),u=n.concat(c);a.children&&a.children.length>0&&(ae(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Mh(a.children,t,u,d)),!(a.path==null&&!a.index)&&t.push({path:d,score:Db(d,a.index),routesMeta:u})};return e.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))r(a,o);else for(let c of Th(a.path))r(a,o,c)}),t}function Th(e){let t=e.split("/");if(t.length===0)return[];let[n,...i]=t,r=n.endsWith("?"),a=n.replace(/\?$/,"");if(i.length===0)return r?[a,""]:[a];let o=Th(i.join("/")),l=[];return l.push(...o.map(c=>c===""?a:[a,c].join("/"))),r&&l.push(...o),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Ab(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Fb(t.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const Pb=/^:[\w-]+$/,Mb=3,Tb=2,Rb=1,Ob=10,Ib=-2,Fu=e=>e==="*";function Db(e,t){let n=e.split("/"),i=n.length;return n.some(Fu)&&(i+=Ib),t&&(i+=Tb),n.filter(r=>!Fu(r)).reduce((r,a)=>r+(Pb.test(a)?Mb:a===""?Rb:Ob),i)}function Fb(e,t){return e.length===t.length&&e.slice(0,-1).every((i,r)=>i===t[r])?e[e.length-1]-t[t.length-1]:0}function Bb(e,t,n){let{routesMeta:i}=e,r={},a="/",o=[];for(let l=0;l<i.length;++l){let c=i[l],d=l===i.length-1,u=a==="/"?t:t.slice(a.length)||"/",p=Al({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},u),m=c.route;if(!p)return null;Object.assign(r,p.params),o.push({params:r,pathname:tn([a,p.pathname]),pathnameBase:Zb(tn([a,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(a=tn([a,p.pathnameBase]))}return o}function Al(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,i]=Ub(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let a=r[0],o=a.replace(/(.)\/+$/,"$1"),l=r.slice(1);return{params:i.reduce((d,u,p)=>{let{paramName:m,isOptional:g}=u;if(m==="*"){let y=l[p]||"";o=a.slice(0,a.length-y.length).replace(/(.)\/+$/,"$1")}const b=l[p];return g&&!b?d[m]=void 0:d[m]=(b||"").replace(/%2F/g,"/"),d},{}),pathname:a,pathnameBase:o,pattern:e}}function Ub(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),$c(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let i=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(i.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),i]}function Vb(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return $c(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function hi(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=e.charAt(n);return i&&i!=="/"?null:e.slice(n)||"/"}const $b=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qb=e=>$b.test(e);function Hb(e,t){t===void 0&&(t="/");let{pathname:n,search:i="",hash:r=""}=typeof e=="string"?ji(e):e,a;if(n)if(qb(n))a=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),$c(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?a=Bu(n.substring(1),"/"):a=Bu(n,t)}else a=t;return{pathname:a,search:Gb(i),hash:Kb(r)}}function Bu(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function vs(e,t,n,i){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Wb(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function qc(e,t){let n=Wb(e);return t?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function Hc(e,t,n,i){i===void 0&&(i=!1);let r;typeof e=="string"?r=ji(e):(r=xr({},e),ae(!r.pathname||!r.pathname.includes("?"),vs("?","pathname","search",r)),ae(!r.pathname||!r.pathname.includes("#"),vs("#","pathname","hash",r)),ae(!r.search||!r.search.includes("#"),vs("#","search","hash",r)));let a=e===""||r.pathname==="",o=a?"/":r.pathname,l;if(o==null)l=n;else{let p=t.length-1;if(!i&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;r.pathname=m.join("/")}l=p>=0?t[p]:"/"}let c=Hb(r,l),d=o&&o!=="/"&&o.endsWith("/"),u=(a||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||u)&&(c.pathname+="/"),c}const tn=e=>e.join("/").replace(/\/\/+/g,"/"),Zb=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Gb=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Kb=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Qb(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Rh=["post","put","patch","delete"];new Set(Rh);const Yb=["get",...Rh];new Set(Yb);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yr(){return yr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},yr.apply(this,arguments)}const _o=x.createContext(null),Oh=x.createContext(null),Ot=x.createContext(null),zo=x.createContext(null),yt=x.createContext({outlet:null,matches:[],isDataRoute:!1}),Ih=x.createContext(null);function Xb(e,t){let{relative:n}=t===void 0?{}:t;_i()||ae(!1);let{basename:i,navigator:r}=x.useContext(Ot),{hash:a,pathname:o,search:l}=So(e,{relative:n}),c=o;return i!=="/"&&(c=o==="/"?i:tn([i,o])),r.createHref({pathname:c,search:l,hash:a})}function _i(){return x.useContext(zo)!=null}function pn(){return _i()||ae(!1),x.useContext(zo).location}function Dh(e){x.useContext(Ot).static||x.useLayoutEffect(e)}function wt(){let{isDataRoute:e}=x.useContext(yt);return e?mx():Jb()}function Jb(){_i()||ae(!1);let e=x.useContext(_o),{basename:t,future:n,navigator:i}=x.useContext(Ot),{matches:r}=x.useContext(yt),{pathname:a}=pn(),o=JSON.stringify(qc(r,n.v7_relativeSplatPath)),l=x.useRef(!1);return Dh(()=>{l.current=!0}),x.useCallback(function(d,u){if(u===void 0&&(u={}),!l.current)return;if(typeof d=="number"){i.go(d);return}let p=Hc(d,JSON.parse(o),a,u.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:tn([t,p.pathname])),(u.replace?i.replace:i.push)(p,u.state,u)},[t,i,o,a,e])}const ex=x.createContext(null);function tx(e){let t=x.useContext(yt).outlet;return t&&x.createElement(ex.Provider,{value:e},t)}function Wc(){let{matches:e}=x.useContext(yt),t=e[e.length-1];return t?t.params:{}}function So(e,t){let{relative:n}=t===void 0?{}:t,{future:i}=x.useContext(Ot),{matches:r}=x.useContext(yt),{pathname:a}=pn(),o=JSON.stringify(qc(r,i.v7_relativeSplatPath));return x.useMemo(()=>Hc(e,JSON.parse(o),a,n==="path"),[e,o,a,n])}function nx(e,t){return ix(e,t)}function ix(e,t,n,i){_i()||ae(!1);let{navigator:r}=x.useContext(Ot),{matches:a}=x.useContext(yt),o=a[a.length-1],l=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let d=pn(),u;if(t){var p;let w=typeof t=="string"?ji(t):t;c==="/"||(p=w.pathname)!=null&&p.startsWith(c)||ae(!1),u=w}else u=d;let m=u.pathname||"/",g=m;if(c!=="/"){let w=c.replace(/^\//,"").split("/");g="/"+m.replace(/^\//,"").split("/").slice(w.length).join("/")}let b=kb(e,{pathname:g}),y=lx(b&&b.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:tn([c,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?c:tn([c,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),a,n,i);return t&&y?x.createElement(zo.Provider,{value:{location:yr({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Wt.Pop}},y):y}function rx(){let e=px(),t=Qb(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:r},n):null,null)}const ax=x.createElement(rx,null);class ox extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?x.createElement(yt.Provider,{value:this.props.routeContext},x.createElement(Ih.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function sx(e){let{routeContext:t,match:n,children:i}=e,r=x.useContext(_o);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(yt.Provider,{value:t},i)}function lx(e,t,n,i){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),i===void 0&&(i=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=i)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,l=(r=n)==null?void 0:r.errors;if(l!=null){let u=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);u>=0||ae(!1),o=o.slice(0,Math.min(o.length,u+1))}let c=!1,d=-1;if(n&&i&&i.v7_partialHydration)for(let u=0;u<o.length;u++){let p=o[u];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=u),p.route.id){let{loaderData:m,errors:g}=n,b=p.route.loader&&m[p.route.id]===void 0&&(!g||g[p.route.id]===void 0);if(p.route.lazy||b){c=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((u,p,m)=>{let g,b=!1,y=null,w=null;n&&(g=l&&p.route.id?l[p.route.id]:void 0,y=p.route.errorElement||ax,c&&(d<0&&m===0?(fx("route-fallback"),b=!0,w=null):d===m&&(b=!0,w=p.route.hydrateFallbackElement||null)));let h=t.concat(o.slice(0,m+1)),f=()=>{let v;return g?v=y:b?v=w:p.route.Component?v=x.createElement(p.route.Component,null):p.route.element?v=p.route.element:v=u,x.createElement(sx,{match:p,routeContext:{outlet:u,matches:h,isDataRoute:n!=null},children:v})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?x.createElement(ox,{location:n.location,revalidation:n.revalidation,component:y,error:g,children:f(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):f()},null)}var Fh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Fh||{}),Bh=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Bh||{});function cx(e){let t=x.useContext(_o);return t||ae(!1),t}function dx(e){let t=x.useContext(Oh);return t||ae(!1),t}function ux(e){let t=x.useContext(yt);return t||ae(!1),t}function Uh(e){let t=ux(),n=t.matches[t.matches.length-1];return n.route.id||ae(!1),n.route.id}function px(){var e;let t=x.useContext(Ih),n=dx(),i=Uh();return t!==void 0?t:(e=n.errors)==null?void 0:e[i]}function mx(){let{router:e}=cx(Fh.UseNavigateStable),t=Uh(Bh.UseNavigateStable),n=x.useRef(!1);return Dh(()=>{n.current=!0}),x.useCallback(function(r,a){a===void 0&&(a={}),n.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,yr({fromRouteId:t},a)))},[e,t])}const Uu={};function fx(e,t,n){Uu[e]||(Uu[e]=!0)}function hx(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function gx(e){let{to:t,replace:n,state:i,relative:r}=e;_i()||ae(!1);let{future:a,static:o}=x.useContext(Ot),{matches:l}=x.useContext(yt),{pathname:c}=pn(),d=wt(),u=Hc(t,qc(l,a.v7_relativeSplatPath),c,r==="path"),p=JSON.stringify(u);return x.useEffect(()=>d(JSON.parse(p),{replace:n,state:i,relative:r}),[d,p,r,n,i]),null}function vx(e){return tx(e.context)}function ot(e){ae(!1)}function bx(e){let{basename:t="/",children:n=null,location:i,navigationType:r=Wt.Pop,navigator:a,static:o=!1,future:l}=e;_i()&&ae(!1);let c=t.replace(/^\/*/,"/"),d=x.useMemo(()=>({basename:c,navigator:a,static:o,future:yr({v7_relativeSplatPath:!1},l)}),[c,l,a,o]);typeof i=="string"&&(i=ji(i));let{pathname:u="/",search:p="",hash:m="",state:g=null,key:b="default"}=i,y=x.useMemo(()=>{let w=hi(u,c);return w==null?null:{location:{pathname:w,search:p,hash:m,state:g,key:b},navigationType:r}},[c,u,p,m,g,b,r]);return y==null?null:x.createElement(Ot.Provider,{value:d},x.createElement(zo.Provider,{children:n,value:y}))}function xx(e){let{children:t,location:n}=e;return nx(Pl(t),n)}new Promise(()=>{});function Pl(e,t){t===void 0&&(t=[]);let n=[];return x.Children.forEach(e,(i,r)=>{if(!x.isValidElement(i))return;let a=[...t,r];if(i.type===x.Fragment){n.push.apply(n,Pl(i.props.children,a));return}i.type!==ot&&ae(!1),!i.props.index||!i.props.children||ae(!1);let o={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Pl(i.props.children,a)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ka(){return Ka=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Ka.apply(this,arguments)}function Vh(e,t){if(e==null)return{};var n={},i=Object.keys(e),r,a;for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function yx(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function wx(e,t){return e.button===0&&(!t||t==="_self")&&!yx(e)}function Ml(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let i=e[n];return t.concat(Array.isArray(i)?i.map(r=>[n,r]):[[n,i]])},[]))}function jx(e,t){let n=Ml(e);return t&&t.forEach((i,r)=>{n.has(r)||t.getAll(r).forEach(a=>{n.append(r,a)})}),n}const _x=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],zx=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Sx="6";try{window.__reactRouterVersion=Sx}catch{}const Ex=x.createContext({isTransitioning:!1}),Nx="startTransition",Vu=f1[Nx];function Cx(e){let{basename:t,children:n,future:i,window:r}=e,a=x.useRef();a.current==null&&(a.current=Eb({window:r,v5Compat:!0}));let o=a.current,[l,c]=x.useState({action:o.action,location:o.location}),{v7_startTransition:d}=i||{},u=x.useCallback(p=>{d&&Vu?Vu(()=>c(p)):c(p)},[c,d]);return x.useLayoutEffect(()=>o.listen(u),[o,u]),x.useEffect(()=>hx(i),[i]),x.createElement(bx,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o,future:i})}const kx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Lx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,we=x.forwardRef(function(t,n){let{onClick:i,relative:r,reloadDocument:a,replace:o,state:l,target:c,to:d,preventScrollReset:u,viewTransition:p}=t,m=Vh(t,_x),{basename:g}=x.useContext(Ot),b,y=!1;if(typeof d=="string"&&Lx.test(d)&&(b=d,kx))try{let v=new URL(window.location.href),j=d.startsWith("//")?new URL(v.protocol+d):new URL(d),_=hi(j.pathname,g);j.origin===v.origin&&_!=null?d=_+j.search+j.hash:y=!0}catch{}let w=Xb(d,{relative:r}),h=Px(d,{replace:o,state:l,target:c,preventScrollReset:u,relative:r,viewTransition:p});function f(v){i&&i(v),v.defaultPrevented||h(v)}return x.createElement("a",Ka({},m,{href:b||w,onClick:y||a?i:f,ref:n,target:c}))}),$u=x.forwardRef(function(t,n){let{"aria-current":i="page",caseSensitive:r=!1,className:a="",end:o=!1,style:l,to:c,viewTransition:d,children:u}=t,p=Vh(t,zx),m=So(c,{relative:p.relative}),g=pn(),b=x.useContext(Oh),{navigator:y,basename:w}=x.useContext(Ot),h=b!=null&&Mx(m)&&d===!0,f=y.encodeLocation?y.encodeLocation(m).pathname:m.pathname,v=g.pathname,j=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;r||(v=v.toLowerCase(),j=j?j.toLowerCase():null,f=f.toLowerCase()),j&&w&&(j=hi(j,w)||j);const _=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let z=v===f||!o&&v.startsWith(f)&&v.charAt(_)==="/",S=j!=null&&(j===f||!o&&j.startsWith(f)&&j.charAt(f.length)==="/"),E={isActive:z,isPending:S,isTransitioning:h},A=z?i:void 0,k;typeof a=="function"?k=a(E):k=[a,z?"active":null,S?"pending":null,h?"transitioning":null].filter(Boolean).join(" ");let $=typeof l=="function"?l(E):l;return x.createElement(we,Ka({},p,{"aria-current":A,className:k,ref:n,style:$,to:c,viewTransition:d}),typeof u=="function"?u(E):u)});var Tl;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Tl||(Tl={}));var qu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(qu||(qu={}));function Ax(e){let t=x.useContext(_o);return t||ae(!1),t}function Px(e,t){let{target:n,replace:i,state:r,preventScrollReset:a,relative:o,viewTransition:l}=t===void 0?{}:t,c=wt(),d=pn(),u=So(e,{relative:o});return x.useCallback(p=>{if(wx(p,n)){p.preventDefault();let m=i!==void 0?i:Ga(d)===Ga(u);c(e,{replace:m,state:r,preventScrollReset:a,relative:o,viewTransition:l})}},[d,c,u,i,r,n,e,a,o,l])}function $h(e){let t=x.useRef(Ml(e)),n=x.useRef(!1),i=pn(),r=x.useMemo(()=>jx(i.search,n.current?null:t.current),[i.search]),a=wt(),o=x.useCallback((l,c)=>{const d=Ml(typeof l=="function"?l(r):l);n.current=!0,a("?"+d,c)},[a,r]);return[r,o]}function Mx(e,t){t===void 0&&(t={});let n=x.useContext(Ex);n==null&&ae(!1);let{basename:i}=Ax(Tl.useViewTransitionState),r=So(e,{relative:t.relative});if(!n.isTransitioning)return!1;let a=hi(n.currentLocation.pathname,i)||n.currentLocation.pathname,o=hi(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Al(r.pathname,o)!=null||Al(r.pathname,a)!=null}const qh=x.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Eo=x.createContext({}),No=x.createContext(null),Co=typeof document<"u",Zc=Co?x.useLayoutEffect:x.useEffect,Hh=x.createContext({strict:!1}),Gc=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),Tx="framerAppearId",Wh="data-"+Gc(Tx);function Rx(e,t,n,i){const{visualElement:r}=x.useContext(Eo),a=x.useContext(Hh),o=x.useContext(No),l=x.useContext(qh).reducedMotion,c=x.useRef();i=i||a.renderer,!c.current&&i&&(c.current=i(e,{visualState:t,parent:r,props:n,presenceContext:o,blockInitialAnimation:o?o.initial===!1:!1,reducedMotionConfig:l}));const d=c.current;x.useInsertionEffect(()=>{d&&d.update(n,o)});const u=x.useRef(!!(n[Wh]&&!window.HandoffComplete));return Zc(()=>{d&&(d.render(),u.current&&d.animationState&&d.animationState.animateChanges())}),x.useEffect(()=>{d&&(d.updateFeatures(),!u.current&&d.animationState&&d.animationState.animateChanges(),u.current&&(u.current=!1,window.HandoffComplete=!0))}),d}function Yn(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Ox(e,t,n){return x.useCallback(i=>{i&&e.mount&&e.mount(i),t&&(i?t.mount(i):t.unmount()),n&&(typeof n=="function"?n(i):Yn(n)&&(n.current=i))},[t])}function wr(e){return typeof e=="string"||Array.isArray(e)}function ko(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Kc=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Qc=["initial",...Kc];function Lo(e){return ko(e.animate)||Qc.some(t=>wr(e[t]))}function Zh(e){return!!(Lo(e)||e.variants)}function Ix(e,t){if(Lo(e)){const{initial:n,animate:i}=e;return{initial:n===!1||wr(n)?n:void 0,animate:wr(i)?i:void 0}}return e.inherit!==!1?t:{}}function Dx(e){const{initial:t,animate:n}=Ix(e,x.useContext(Eo));return x.useMemo(()=>({initial:t,animate:n}),[Hu(t),Hu(n)])}function Hu(e){return Array.isArray(e)?e.join(" "):e}const Wu={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},jr={};for(const e in Wu)jr[e]={isEnabled:t=>Wu[e].some(n=>!!t[n])};function Fx(e){for(const t in e)jr[t]={...jr[t],...e[t]}}const Yc=x.createContext({}),Gh=x.createContext({}),Bx=Symbol.for("motionComponentSymbol");function Ux({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:i,Component:r}){e&&Fx(e);function a(l,c){let d;const u={...x.useContext(qh),...l,layoutId:Vx(l)},{isStatic:p}=u,m=Dx(l),g=i(l,p);if(!p&&Co){m.visualElement=Rx(r,g,u,t);const b=x.useContext(Gh),y=x.useContext(Hh).strict;m.visualElement&&(d=m.visualElement.loadFeatures(u,y,e,b))}return x.createElement(Eo.Provider,{value:m},d&&m.visualElement?x.createElement(d,{visualElement:m.visualElement,...u}):null,n(r,l,Ox(g,m.visualElement,c),g,p,m.visualElement))}const o=x.forwardRef(a);return o[Bx]=r,o}function Vx({layoutId:e}){const t=x.useContext(Yc).id;return t&&e!==void 0?t+"-"+e:e}function $x(e){function t(i,r={}){return Ux(e(i,r))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(i,r)=>(n.has(r)||n.set(r,t(r)),n.get(r))})}const qx=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Xc(e){return typeof e!="string"||e.includes("-")?!1:!!(qx.indexOf(e)>-1||/[A-Z]/.test(e))}const Qa={};function Hx(e){Object.assign(Qa,e)}const Pr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Rn=new Set(Pr);function Kh(e,{layout:t,layoutId:n}){return Rn.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Qa[e]||e==="opacity")}const Ue=e=>!!(e&&e.getVelocity),Wx={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Zx=Pr.length;function Gx(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},i,r){let a="";for(let o=0;o<Zx;o++){const l=Pr[o];if(e[l]!==void 0){const c=Wx[l]||l;a+=`${c}(${e[l]}) `}}return t&&!e.z&&(a+="translateZ(0)"),a=a.trim(),r?a=r(e,i?"":a):n&&i&&(a="none"),a}const Qh=e=>t=>typeof t=="string"&&t.startsWith(e),Yh=Qh("--"),Rl=Qh("var(--"),Kx=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,Qx=(e,t)=>t&&typeof e=="number"?t.transform(e):e,sn=(e,t,n)=>Math.min(Math.max(n,e),t),On={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Yi={...On,transform:e=>sn(0,1,e)},ia={...On,default:1},Xi=e=>Math.round(e*1e5)/1e5,Ao=/(-)?([\d]*\.?[\d])+/g,Xh=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Yx=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Mr(e){return typeof e=="string"}const Tr=e=>({test:t=>Mr(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Dt=Tr("deg"),xt=Tr("%"),B=Tr("px"),Xx=Tr("vh"),Jx=Tr("vw"),Zu={...xt,parse:e=>xt.parse(e)/100,transform:e=>xt.transform(e*100)},Gu={...On,transform:Math.round},Jh={borderWidth:B,borderTopWidth:B,borderRightWidth:B,borderBottomWidth:B,borderLeftWidth:B,borderRadius:B,radius:B,borderTopLeftRadius:B,borderTopRightRadius:B,borderBottomRightRadius:B,borderBottomLeftRadius:B,width:B,maxWidth:B,height:B,maxHeight:B,size:B,top:B,right:B,bottom:B,left:B,padding:B,paddingTop:B,paddingRight:B,paddingBottom:B,paddingLeft:B,margin:B,marginTop:B,marginRight:B,marginBottom:B,marginLeft:B,rotate:Dt,rotateX:Dt,rotateY:Dt,rotateZ:Dt,scale:ia,scaleX:ia,scaleY:ia,scaleZ:ia,skew:Dt,skewX:Dt,skewY:Dt,distance:B,translateX:B,translateY:B,translateZ:B,x:B,y:B,z:B,perspective:B,transformPerspective:B,opacity:Yi,originX:Zu,originY:Zu,originZ:B,zIndex:Gu,fillOpacity:Yi,strokeOpacity:Yi,numOctaves:Gu};function Jc(e,t,n,i){const{style:r,vars:a,transform:o,transformOrigin:l}=e;let c=!1,d=!1,u=!0;for(const p in t){const m=t[p];if(Yh(p)){a[p]=m;continue}const g=Jh[p],b=Qx(m,g);if(Rn.has(p)){if(c=!0,o[p]=b,!u)continue;m!==(g.default||0)&&(u=!1)}else p.startsWith("origin")?(d=!0,l[p]=b):r[p]=b}if(t.transform||(c||i?r.transform=Gx(e.transform,n,u,i):r.transform&&(r.transform="none")),d){const{originX:p="50%",originY:m="50%",originZ:g=0}=l;r.transformOrigin=`${p} ${m} ${g}`}}const ed=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function e0(e,t,n){for(const i in t)!Ue(t[i])&&!Kh(i,n)&&(e[i]=t[i])}function ey({transformTemplate:e},t,n){return x.useMemo(()=>{const i=ed();return Jc(i,t,{enableHardwareAcceleration:!n},e),Object.assign({},i.vars,i.style)},[t])}function ty(e,t,n){const i=e.style||{},r={};return e0(r,i,e),Object.assign(r,ey(e,t,n)),e.transformValues?e.transformValues(r):r}function ny(e,t,n){const i={},r=ty(e,t,n);return e.drag&&e.dragListener!==!1&&(i.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(i.tabIndex=0),i.style=r,i}const iy=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Ya(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||iy.has(e)}let t0=e=>!Ya(e);function ry(e){e&&(t0=t=>t.startsWith("on")?!Ya(t):e(t))}try{ry(require("@emotion/is-prop-valid").default)}catch{}function ay(e,t,n){const i={};for(const r in e)r==="values"&&typeof e.values=="object"||(t0(r)||n===!0&&Ya(r)||!t&&!Ya(r)||e.draggable&&r.startsWith("onDrag"))&&(i[r]=e[r]);return i}function Ku(e,t,n){return typeof e=="string"?e:B.transform(t+n*e)}function oy(e,t,n){const i=Ku(t,e.x,e.width),r=Ku(n,e.y,e.height);return`${i} ${r}`}const sy={offset:"stroke-dashoffset",array:"stroke-dasharray"},ly={offset:"strokeDashoffset",array:"strokeDasharray"};function cy(e,t,n=1,i=0,r=!0){e.pathLength=1;const a=r?sy:ly;e[a.offset]=B.transform(-i);const o=B.transform(t),l=B.transform(n);e[a.array]=`${o} ${l}`}function td(e,{attrX:t,attrY:n,attrScale:i,originX:r,originY:a,pathLength:o,pathSpacing:l=1,pathOffset:c=0,...d},u,p,m){if(Jc(e,d,u,m),p){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:g,style:b,dimensions:y}=e;g.transform&&(y&&(b.transform=g.transform),delete g.transform),y&&(r!==void 0||a!==void 0||b.transform)&&(b.transformOrigin=oy(y,r!==void 0?r:.5,a!==void 0?a:.5)),t!==void 0&&(g.x=t),n!==void 0&&(g.y=n),i!==void 0&&(g.scale=i),o!==void 0&&cy(g,o,l,c,!1)}const n0=()=>({...ed(),attrs:{}}),nd=e=>typeof e=="string"&&e.toLowerCase()==="svg";function dy(e,t,n,i){const r=x.useMemo(()=>{const a=n0();return td(a,t,{enableHardwareAcceleration:!1},nd(i),e.transformTemplate),{...a.attrs,style:{...a.style}}},[t]);if(e.style){const a={};e0(a,e.style,e),r.style={...a,...r.style}}return r}function uy(e=!1){return(n,i,r,{latestValues:a},o)=>{const c=(Xc(n)?dy:ny)(i,a,o,n),u={...ay(i,typeof n=="string",e),...c,ref:r},{children:p}=i,m=x.useMemo(()=>Ue(p)?p.get():p,[p]);return x.createElement(n,{...u,children:m})}}function i0(e,{style:t,vars:n},i,r){Object.assign(e.style,t,r&&r.getProjectionStyles(i));for(const a in n)e.style.setProperty(a,n[a])}const r0=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function a0(e,t,n,i){i0(e,t,void 0,i);for(const r in t.attrs)e.setAttribute(r0.has(r)?r:Gc(r),t.attrs[r])}function id(e,t){const{style:n}=e,i={};for(const r in n)(Ue(n[r])||t.style&&Ue(t.style[r])||Kh(r,e))&&(i[r]=n[r]);return i}function o0(e,t){const n=id(e,t);for(const i in e)if(Ue(e[i])||Ue(t[i])){const r=Pr.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;n[r]=e[i]}return n}function rd(e,t,n,i={},r={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,i,r)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,i,r)),t}function s0(e){const t=x.useRef(null);return t.current===null&&(t.current=e()),t.current}const Xa=e=>Array.isArray(e),py=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),my=e=>Xa(e)?e[e.length-1]||0:e;function ja(e){const t=Ue(e)?e.get():e;return py(t)?t.toValue():t}function fy({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},i,r,a){const o={latestValues:hy(i,r,a,e),renderState:t()};return n&&(o.mount=l=>n(i,l,o)),o}const l0=e=>(t,n)=>{const i=x.useContext(Eo),r=x.useContext(No),a=()=>fy(e,t,i,r);return n?a():s0(a)};function hy(e,t,n,i){const r={},a=i(e,{});for(const m in a)r[m]=ja(a[m]);let{initial:o,animate:l}=e;const c=Lo(e),d=Zh(e);t&&d&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),l===void 0&&(l=t.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const p=u?l:o;return p&&typeof p!="boolean"&&!ko(p)&&(Array.isArray(p)?p:[p]).forEach(g=>{const b=rd(e,g);if(!b)return;const{transitionEnd:y,transition:w,...h}=b;for(const f in h){let v=h[f];if(Array.isArray(v)){const j=u?v.length-1:0;v=v[j]}v!==null&&(r[f]=v)}for(const f in y)r[f]=y[f]}),r}const ue=e=>e;class Qu{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function gy(e){let t=new Qu,n=new Qu,i=0,r=!1,a=!1;const o=new WeakSet,l={schedule:(c,d=!1,u=!1)=>{const p=u&&r,m=p?t:n;return d&&o.add(c),m.add(c)&&p&&r&&(i=t.order.length),c},cancel:c=>{n.remove(c),o.delete(c)},process:c=>{if(r){a=!0;return}if(r=!0,[t,n]=[n,t],n.clear(),i=t.order.length,i)for(let d=0;d<i;d++){const u=t.order[d];u(c),o.has(u)&&(l.schedule(u),e())}r=!1,a&&(a=!1,l.process(c))}};return l}const ra=["prepare","read","update","preRender","render","postRender"],vy=40;function by(e,t){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},a=ra.reduce((p,m)=>(p[m]=gy(()=>n=!0),p),{}),o=p=>a[p].process(r),l=()=>{const p=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(p-r.timestamp,vy),1),r.timestamp=p,r.isProcessing=!0,ra.forEach(o),r.isProcessing=!1,n&&t&&(i=!1,e(l))},c=()=>{n=!0,i=!0,r.isProcessing||e(l)};return{schedule:ra.reduce((p,m)=>{const g=a[m];return p[m]=(b,y=!1,w=!1)=>(n||c(),g.schedule(b,y,w)),p},{}),cancel:p=>ra.forEach(m=>a[m].cancel(p)),state:r,steps:a}}const{schedule:Q,cancel:Tt,state:Ne,steps:bs}=by(typeof requestAnimationFrame<"u"?requestAnimationFrame:ue,!0),xy={useVisualState:l0({scrapeMotionValuesFromProps:o0,createRenderState:n0,onMount:(e,t,{renderState:n,latestValues:i})=>{Q.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),Q.render(()=>{td(n,i,{enableHardwareAcceleration:!1},nd(t.tagName),e.transformTemplate),a0(t,n)})}})},yy={useVisualState:l0({scrapeMotionValuesFromProps:id,createRenderState:ed})};function wy(e,{forwardMotionProps:t=!1},n,i){return{...Xc(e)?xy:yy,preloadedFeatures:n,useRender:uy(t),createVisualElement:i,Component:e}}function Et(e,t,n,i={passive:!0}){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n)}const c0=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Po(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const jy=e=>t=>c0(t)&&e(t,Po(t));function Ct(e,t,n,i){return Et(e,t,jy(n),i)}const _y=(e,t)=>n=>t(e(n)),nn=(...e)=>e.reduce(_y);function d0(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const Yu=d0("dragHorizontal"),Xu=d0("dragVertical");function u0(e){let t=!1;if(e==="y")t=Xu();else if(e==="x")t=Yu();else{const n=Yu(),i=Xu();n&&i?t=()=>{n(),i()}:(n&&n(),i&&i())}return t}function p0(){const e=u0(!0);return e?(e(),!1):!0}class mn{constructor(t){this.isMounted=!1,this.node=t}update(){}}function Ju(e,t){const n="pointer"+(t?"enter":"leave"),i="onHover"+(t?"Start":"End"),r=(a,o)=>{if(a.pointerType==="touch"||p0())return;const l=e.getProps();e.animationState&&l.whileHover&&e.animationState.setActive("whileHover",t),l[i]&&Q.update(()=>l[i](a,o))};return Ct(e.current,n,r,{passive:!e.getProps()[i]})}class zy extends mn{mount(){this.unmount=nn(Ju(this.node,!0),Ju(this.node,!1))}unmount(){}}class Sy extends mn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=nn(Et(this.node.current,"focus",()=>this.onFocus()),Et(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const m0=(e,t)=>t?e===t?!0:m0(e,t.parentElement):!1;function xs(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Po(n))}class Ey extends mn{constructor(){super(...arguments),this.removeStartListeners=ue,this.removeEndListeners=ue,this.removeAccessibleListeners=ue,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const i=this.node.getProps(),a=Ct(window,"pointerup",(l,c)=>{if(!this.checkPressEnd())return;const{onTap:d,onTapCancel:u,globalTapTarget:p}=this.node.getProps();Q.update(()=>{!p&&!m0(this.node.current,l.target)?u&&u(l,c):d&&d(l,c)})},{passive:!(i.onTap||i.onPointerUp)}),o=Ct(window,"pointercancel",(l,c)=>this.cancelPress(l,c),{passive:!(i.onTapCancel||i.onPointerCancel)});this.removeEndListeners=nn(a,o),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=a=>{if(a.key!=="Enter"||this.isPressing)return;const o=l=>{l.key!=="Enter"||!this.checkPressEnd()||xs("up",(c,d)=>{const{onTap:u}=this.node.getProps();u&&Q.update(()=>u(c,d))})};this.removeEndListeners(),this.removeEndListeners=Et(this.node.current,"keyup",o),xs("down",(l,c)=>{this.startPress(l,c)})},n=Et(this.node.current,"keydown",t),i=()=>{this.isPressing&&xs("cancel",(a,o)=>this.cancelPress(a,o))},r=Et(this.node.current,"blur",i);this.removeAccessibleListeners=nn(n,r)}}startPress(t,n){this.isPressing=!0;const{onTapStart:i,whileTap:r}=this.node.getProps();r&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),i&&Q.update(()=>i(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!p0()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:i}=this.node.getProps();i&&Q.update(()=>i(t,n))}mount(){const t=this.node.getProps(),n=Ct(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),i=Et(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=nn(n,i)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Ol=new WeakMap,ys=new WeakMap,Ny=e=>{const t=Ol.get(e.target);t&&t(e)},Cy=e=>{e.forEach(Ny)};function ky({root:e,...t}){const n=e||document;ys.has(n)||ys.set(n,{});const i=ys.get(n),r=JSON.stringify(t);return i[r]||(i[r]=new IntersectionObserver(Cy,{root:e,...t})),i[r]}function Ly(e,t,n){const i=ky(t);return Ol.set(e,n),i.observe(e),()=>{Ol.delete(e),i.unobserve(e)}}const Ay={some:0,all:1};class Py extends mn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:a}=t,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:Ay[r]},l=c=>{const{isIntersecting:d}=c;if(this.isInView===d||(this.isInView=d,a&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:u,onViewportLeave:p}=this.node.getProps(),m=d?u:p;m&&m(c)};return Ly(this.node.current,o,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(My(t,n))&&this.startObserver()}unmount(){}}function My({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const Ty={inView:{Feature:Py},tap:{Feature:Ey},focus:{Feature:Sy},hover:{Feature:zy}};function f0(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let i=0;i<n;i++)if(t[i]!==e[i])return!1;return!0}function Ry(e){const t={};return e.values.forEach((n,i)=>t[i]=n.get()),t}function Oy(e){const t={};return e.values.forEach((n,i)=>t[i]=n.getVelocity()),t}function Mo(e,t,n){const i=e.getProps();return rd(i,t,n!==void 0?n:i.custom,Ry(e),Oy(e))}let ad=ue;const Nn=e=>e*1e3,kt=e=>e/1e3,Iy={current:!1},h0=e=>Array.isArray(e)&&typeof e[0]=="number";function g0(e){return!!(!e||typeof e=="string"&&v0[e]||h0(e)||Array.isArray(e)&&e.every(g0))}const Bi=([e,t,n,i])=>`cubic-bezier(${e}, ${t}, ${n}, ${i})`,v0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Bi([0,.65,.55,1]),circOut:Bi([.55,0,1,.45]),backIn:Bi([.31,.01,.66,-.59]),backOut:Bi([.33,1.53,.69,.99])};function b0(e){if(e)return h0(e)?Bi(e):Array.isArray(e)?e.map(b0):v0[e]}function Dy(e,t,n,{delay:i=0,duration:r,repeat:a=0,repeatType:o="loop",ease:l,times:c}={}){const d={[t]:n};c&&(d.offset=c);const u=b0(l);return Array.isArray(u)&&(d.easing=u),e.animate(d,{delay:i,duration:r,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:a+1,direction:o==="reverse"?"alternate":"normal"})}function Fy(e,{repeat:t,repeatType:n="loop"}){const i=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[i]}const x0=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,By=1e-7,Uy=12;function Vy(e,t,n,i,r){let a,o,l=0;do o=t+(n-t)/2,a=x0(o,i,r)-e,a>0?n=o:t=o;while(Math.abs(a)>By&&++l<Uy);return o}function Rr(e,t,n,i){if(e===t&&n===i)return ue;const r=a=>Vy(a,0,1,e,n);return a=>a===0||a===1?a:x0(r(a),t,i)}const $y=Rr(.42,0,1,1),qy=Rr(0,0,.58,1),y0=Rr(.42,0,.58,1),Hy=e=>Array.isArray(e)&&typeof e[0]!="number",w0=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,j0=e=>t=>1-e(1-t),od=e=>1-Math.sin(Math.acos(e)),_0=j0(od),Wy=w0(od),z0=Rr(.33,1.53,.69,.99),sd=j0(z0),Zy=w0(sd),Gy=e=>(e*=2)<1?.5*sd(e):.5*(2-Math.pow(2,-10*(e-1))),Ky={linear:ue,easeIn:$y,easeInOut:y0,easeOut:qy,circIn:od,circInOut:Wy,circOut:_0,backIn:sd,backInOut:Zy,backOut:z0,anticipate:Gy},ep=e=>{if(Array.isArray(e)){ad(e.length===4);const[t,n,i,r]=e;return Rr(t,n,i,r)}else if(typeof e=="string")return Ky[e];return e},ld=(e,t)=>n=>!!(Mr(n)&&Yx.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),S0=(e,t,n)=>i=>{if(!Mr(i))return i;const[r,a,o,l]=i.match(Ao);return{[e]:parseFloat(r),[t]:parseFloat(a),[n]:parseFloat(o),alpha:l!==void 0?parseFloat(l):1}},Qy=e=>sn(0,255,e),ws={...On,transform:e=>Math.round(Qy(e))},zn={test:ld("rgb","red"),parse:S0("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:i=1})=>"rgba("+ws.transform(e)+", "+ws.transform(t)+", "+ws.transform(n)+", "+Xi(Yi.transform(i))+")"};function Yy(e){let t="",n="",i="",r="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),i=e.substring(5,7),r=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),i=e.substring(3,4),r=e.substring(4,5),t+=t,n+=n,i+=i,r+=r),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Il={test:ld("#"),parse:Yy,transform:zn.transform},Xn={test:ld("hsl","hue"),parse:S0("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:i=1})=>"hsla("+Math.round(e)+", "+xt.transform(Xi(t))+", "+xt.transform(Xi(n))+", "+Xi(Yi.transform(i))+")"},Ae={test:e=>zn.test(e)||Il.test(e)||Xn.test(e),parse:e=>zn.test(e)?zn.parse(e):Xn.test(e)?Xn.parse(e):Il.parse(e),transform:e=>Mr(e)?e:e.hasOwnProperty("red")?zn.transform(e):Xn.transform(e)},ie=(e,t,n)=>-n*e+n*t+e;function js(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Xy({hue:e,saturation:t,lightness:n,alpha:i}){e/=360,t/=100,n/=100;let r=0,a=0,o=0;if(!t)r=a=o=n;else{const l=n<.5?n*(1+t):n+t-n*t,c=2*n-l;r=js(c,l,e+1/3),a=js(c,l,e),o=js(c,l,e-1/3)}return{red:Math.round(r*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:i}}const _s=(e,t,n)=>{const i=e*e;return Math.sqrt(Math.max(0,n*(t*t-i)+i))},Jy=[Il,zn,Xn],e2=e=>Jy.find(t=>t.test(e));function tp(e){const t=e2(e);let n=t.parse(e);return t===Xn&&(n=Xy(n)),n}const E0=(e,t)=>{const n=tp(e),i=tp(t),r={...n};return a=>(r.red=_s(n.red,i.red,a),r.green=_s(n.green,i.green,a),r.blue=_s(n.blue,i.blue,a),r.alpha=ie(n.alpha,i.alpha,a),zn.transform(r))};function t2(e){var t,n;return isNaN(e)&&Mr(e)&&(((t=e.match(Ao))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(Xh))===null||n===void 0?void 0:n.length)||0)>0}const N0={regex:Kx,countKey:"Vars",token:"${v}",parse:ue},C0={regex:Xh,countKey:"Colors",token:"${c}",parse:Ae.parse},k0={regex:Ao,countKey:"Numbers",token:"${n}",parse:On.parse};function zs(e,{regex:t,countKey:n,token:i,parse:r}){const a=e.tokenised.match(t);a&&(e["num"+n]=a.length,e.tokenised=e.tokenised.replace(t,i),e.values.push(...a.map(r)))}function Ja(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&zs(n,N0),zs(n,C0),zs(n,k0),n}function L0(e){return Ja(e).values}function A0(e){const{values:t,numColors:n,numVars:i,tokenised:r}=Ja(e),a=t.length;return o=>{let l=r;for(let c=0;c<a;c++)c<i?l=l.replace(N0.token,o[c]):c<i+n?l=l.replace(C0.token,Ae.transform(o[c])):l=l.replace(k0.token,Xi(o[c]));return l}}const n2=e=>typeof e=="number"?0:e;function i2(e){const t=L0(e);return A0(e)(t.map(n2))}const ln={test:t2,parse:L0,createTransformer:A0,getAnimatableNone:i2},P0=(e,t)=>n=>`${n>0?t:e}`;function M0(e,t){return typeof e=="number"?n=>ie(e,t,n):Ae.test(e)?E0(e,t):e.startsWith("var(")?P0(e,t):R0(e,t)}const T0=(e,t)=>{const n=[...e],i=n.length,r=e.map((a,o)=>M0(a,t[o]));return a=>{for(let o=0;o<i;o++)n[o]=r[o](a);return n}},r2=(e,t)=>{const n={...e,...t},i={};for(const r in n)e[r]!==void 0&&t[r]!==void 0&&(i[r]=M0(e[r],t[r]));return r=>{for(const a in i)n[a]=i[a](r);return n}},R0=(e,t)=>{const n=ln.createTransformer(t),i=Ja(e),r=Ja(t);return i.numVars===r.numVars&&i.numColors===r.numColors&&i.numNumbers>=r.numNumbers?nn(T0(i.values,r.values),n):P0(e,t)},_r=(e,t,n)=>{const i=t-e;return i===0?1:(n-e)/i},np=(e,t)=>n=>ie(e,t,n);function a2(e){return typeof e=="number"?np:typeof e=="string"?Ae.test(e)?E0:R0:Array.isArray(e)?T0:typeof e=="object"?r2:np}function o2(e,t,n){const i=[],r=n||a2(e[0]),a=e.length-1;for(let o=0;o<a;o++){let l=r(e[o],e[o+1]);if(t){const c=Array.isArray(t)?t[o]||ue:t;l=nn(c,l)}i.push(l)}return i}function O0(e,t,{clamp:n=!0,ease:i,mixer:r}={}){const a=e.length;if(ad(a===t.length),a===1)return()=>t[0];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const o=o2(t,i,r),l=o.length,c=d=>{let u=0;if(l>1)for(;u<e.length-2&&!(d<e[u+1]);u++);const p=_r(e[u],e[u+1],d);return o[u](p)};return n?d=>c(sn(e[0],e[a-1],d)):c}function s2(e,t){const n=e[e.length-1];for(let i=1;i<=t;i++){const r=_r(0,t,i);e.push(ie(n,1,r))}}function l2(e){const t=[0];return s2(t,e.length-1),t}function c2(e,t){return e.map(n=>n*t)}function d2(e,t){return e.map(()=>t||y0).splice(0,e.length-1)}function eo({duration:e=300,keyframes:t,times:n,ease:i="easeInOut"}){const r=Hy(i)?i.map(ep):ep(i),a={done:!1,value:t[0]},o=c2(n&&n.length===t.length?n:l2(t),e),l=O0(o,t,{ease:Array.isArray(r)?r:d2(t,r)});return{calculatedDuration:e,next:c=>(a.value=l(c),a.done=c>=e,a)}}function I0(e,t){return t?e*(1e3/t):0}const u2=5;function D0(e,t,n){const i=Math.max(t-u2,0);return I0(n-e(i),t-i)}const Ss=.001,p2=.01,m2=10,f2=.05,h2=1;function g2({duration:e=800,bounce:t=.25,velocity:n=0,mass:i=1}){let r,a,o=1-t;o=sn(f2,h2,o),e=sn(p2,m2,kt(e)),o<1?(r=d=>{const u=d*o,p=u*e,m=u-n,g=Dl(d,o),b=Math.exp(-p);return Ss-m/g*b},a=d=>{const p=d*o*e,m=p*n+n,g=Math.pow(o,2)*Math.pow(d,2)*e,b=Math.exp(-p),y=Dl(Math.pow(d,2),o);return(-r(d)+Ss>0?-1:1)*((m-g)*b)/y}):(r=d=>{const u=Math.exp(-d*e),p=(d-n)*e+1;return-Ss+u*p},a=d=>{const u=Math.exp(-d*e),p=(n-d)*(e*e);return u*p});const l=5/e,c=b2(r,a,l);if(e=Nn(e),isNaN(c))return{stiffness:100,damping:10,duration:e};{const d=Math.pow(c,2)*i;return{stiffness:d,damping:o*2*Math.sqrt(i*d),duration:e}}}const v2=12;function b2(e,t,n){let i=n;for(let r=1;r<v2;r++)i=i-e(i)/t(i);return i}function Dl(e,t){return e*Math.sqrt(1-t*t)}const x2=["duration","bounce"],y2=["stiffness","damping","mass"];function ip(e,t){return t.some(n=>e[n]!==void 0)}function w2(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!ip(e,y2)&&ip(e,x2)){const n=g2(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function F0({keyframes:e,restDelta:t,restSpeed:n,...i}){const r=e[0],a=e[e.length-1],o={done:!1,value:r},{stiffness:l,damping:c,mass:d,duration:u,velocity:p,isResolvedFromDuration:m}=w2({...i,velocity:-kt(i.velocity||0)}),g=p||0,b=c/(2*Math.sqrt(l*d)),y=a-r,w=kt(Math.sqrt(l/d)),h=Math.abs(y)<5;n||(n=h?.01:2),t||(t=h?.005:.5);let f;if(b<1){const v=Dl(w,b);f=j=>{const _=Math.exp(-b*w*j);return a-_*((g+b*w*y)/v*Math.sin(v*j)+y*Math.cos(v*j))}}else if(b===1)f=v=>a-Math.exp(-w*v)*(y+(g+w*y)*v);else{const v=w*Math.sqrt(b*b-1);f=j=>{const _=Math.exp(-b*w*j),z=Math.min(v*j,300);return a-_*((g+b*w*y)*Math.sinh(z)+v*y*Math.cosh(z))/v}}return{calculatedDuration:m&&u||null,next:v=>{const j=f(v);if(m)o.done=v>=u;else{let _=g;v!==0&&(b<1?_=D0(f,v,j):_=0);const z=Math.abs(_)<=n,S=Math.abs(a-j)<=t;o.done=z&&S}return o.value=o.done?a:j,o}}}function rp({keyframes:e,velocity:t=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:a=500,modifyTarget:o,min:l,max:c,restDelta:d=.5,restSpeed:u}){const p=e[0],m={done:!1,value:p},g=E=>l!==void 0&&E<l||c!==void 0&&E>c,b=E=>l===void 0?c:c===void 0||Math.abs(l-E)<Math.abs(c-E)?l:c;let y=n*t;const w=p+y,h=o===void 0?w:o(w);h!==w&&(y=h-p);const f=E=>-y*Math.exp(-E/i),v=E=>h+f(E),j=E=>{const A=f(E),k=v(E);m.done=Math.abs(A)<=d,m.value=m.done?h:k};let _,z;const S=E=>{g(m.value)&&(_=E,z=F0({keyframes:[m.value,b(m.value)],velocity:D0(v,E,m.value),damping:r,stiffness:a,restDelta:d,restSpeed:u}))};return S(0),{calculatedDuration:null,next:E=>{let A=!1;return!z&&_===void 0&&(A=!0,j(E),S(E)),_!==void 0&&E>_?z.next(E-_):(!A&&j(E),m)}}}const j2=e=>{const t=({timestamp:n})=>e(n);return{start:()=>Q.update(t,!0),stop:()=>Tt(t),now:()=>Ne.isProcessing?Ne.timestamp:performance.now()}},ap=2e4;function op(e){let t=0;const n=50;let i=e.next(t);for(;!i.done&&t<ap;)t+=n,i=e.next(t);return t>=ap?1/0:t}const _2={decay:rp,inertia:rp,tween:eo,keyframes:eo,spring:F0};function to({autoplay:e=!0,delay:t=0,driver:n=j2,keyframes:i,type:r="keyframes",repeat:a=0,repeatDelay:o=0,repeatType:l="loop",onPlay:c,onStop:d,onComplete:u,onUpdate:p,...m}){let g=1,b=!1,y,w;const h=()=>{w=new Promise(L=>{y=L})};h();let f;const v=_2[r]||eo;let j;v!==eo&&typeof i[0]!="number"&&(j=O0([0,100],i,{clamp:!1}),i=[0,100]);const _=v({...m,keyframes:i});let z;l==="mirror"&&(z=v({...m,keyframes:[...i].reverse(),velocity:-(m.velocity||0)}));let S="idle",E=null,A=null,k=null;_.calculatedDuration===null&&a&&(_.calculatedDuration=op(_));const{calculatedDuration:$}=_;let Z=1/0,te=1/0;$!==null&&(Z=$+o,te=Z*(a+1)-o);let G=0;const O=L=>{if(A===null)return;g>0&&(A=Math.min(A,L)),g<0&&(A=Math.min(L-te/g,A)),E!==null?G=E:G=Math.round(L-A)*g;const I=G-t*(g>=0?1:-1),H=g>=0?I<0:I>te;G=Math.max(I,0),S==="finished"&&E===null&&(G=te);let fe=G,he=_;if(a){const qo=Math.min(G,te)/Z;let Fr=Math.floor(qo),fn=qo%1;!fn&&qo>=1&&(fn=1),fn===1&&Fr--,Fr=Math.min(Fr,a+1),!!(Fr%2)&&(l==="reverse"?(fn=1-fn,o&&(fn-=o/Z)):l==="mirror"&&(he=z)),fe=sn(0,1,fn)*Z}const ce=H?{done:!1,value:i[0]}:he.next(fe);j&&(ce.value=j(ce.value));let{done:Ve}=ce;!H&&$!==null&&(Ve=g>=0?G>=te:G<=0);const Yg=E===null&&(S==="finished"||S==="running"&&Ve);return p&&p(ce.value),Yg&&N(),ce},D=()=>{f&&f.stop(),f=void 0},J=()=>{S="idle",D(),y(),h(),A=k=null},N=()=>{S="finished",u&&u(),D(),y()},M=()=>{if(b)return;f||(f=n(O));const L=f.now();c&&c(),E!==null?A=L-E:(!A||S==="finished")&&(A=L),S==="finished"&&h(),k=A,E=null,S="running",f.start()};e&&M();const F={then(L,I){return w.then(L,I)},get time(){return kt(G)},set time(L){L=Nn(L),G=L,E!==null||!f||g===0?E=L:A=f.now()-L/g},get duration(){const L=_.calculatedDuration===null?op(_):_.calculatedDuration;return kt(L)},get speed(){return g},set speed(L){L===g||!f||(g=L,F.time=kt(G))},get state(){return S},play:M,pause:()=>{S="paused",E=G},stop:()=>{b=!0,S!=="idle"&&(S="idle",d&&d(),J())},cancel:()=>{k!==null&&O(k),J()},complete:()=>{S="finished"},sample:L=>(A=0,O(L))};return F}function z2(e){let t;return()=>(t===void 0&&(t=e()),t)}const S2=z2(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),E2=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),aa=10,N2=2e4,C2=(e,t)=>t.type==="spring"||e==="backgroundColor"||!g0(t.ease);function k2(e,t,{onUpdate:n,onComplete:i,...r}){if(!(S2()&&E2.has(t)&&!r.repeatDelay&&r.repeatType!=="mirror"&&r.damping!==0&&r.type!=="inertia"))return!1;let o=!1,l,c,d=!1;const u=()=>{c=new Promise(v=>{l=v})};u();let{keyframes:p,duration:m=300,ease:g,times:b}=r;if(C2(t,r)){const v=to({...r,repeat:0,delay:0});let j={done:!1,value:p[0]};const _=[];let z=0;for(;!j.done&&z<N2;)j=v.sample(z),_.push(j.value),z+=aa;b=void 0,p=_,m=z-aa,g="linear"}const y=Dy(e.owner.current,t,p,{...r,duration:m,ease:g,times:b}),w=()=>{d=!1,y.cancel()},h=()=>{d=!0,Q.update(w),l(),u()};return y.onfinish=()=>{d||(e.set(Fy(p,r)),i&&i(),h())},{then(v,j){return c.then(v,j)},attachTimeline(v){return y.timeline=v,y.onfinish=null,ue},get time(){return kt(y.currentTime||0)},set time(v){y.currentTime=Nn(v)},get speed(){return y.playbackRate},set speed(v){y.playbackRate=v},get duration(){return kt(m)},play:()=>{o||(y.play(),Tt(w))},pause:()=>y.pause(),stop:()=>{if(o=!0,y.playState==="idle")return;const{currentTime:v}=y;if(v){const j=to({...r,autoplay:!1});e.setWithVelocity(j.sample(v-aa).value,j.sample(v).value,aa)}h()},complete:()=>{d||y.finish()},cancel:h}}function L2({keyframes:e,delay:t,onUpdate:n,onComplete:i}){const r=()=>(n&&n(e[e.length-1]),i&&i(),{time:0,speed:1,duration:0,play:ue,pause:ue,stop:ue,then:a=>(a(),Promise.resolve()),cancel:ue,complete:ue});return t?to({keyframes:[0,1],duration:0,delay:t,onComplete:r}):r()}const A2={type:"spring",stiffness:500,damping:25,restSpeed:10},P2=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),M2={type:"keyframes",duration:.8},T2={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},R2=(e,{keyframes:t})=>t.length>2?M2:Rn.has(e)?e.startsWith("scale")?P2(t[1]):A2:T2,Fl=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(ln.test(t)||t==="0")&&!t.startsWith("url(")),O2=new Set(["brightness","contrast","saturate","opacity"]);function I2(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[i]=n.match(Ao)||[];if(!i)return e;const r=n.replace(i,"");let a=O2.has(t)?1:0;return i!==n&&(a*=100),t+"("+a+r+")"}const D2=/([a-z-]*)\(.*?\)/g,Bl={...ln,getAnimatableNone:e=>{const t=e.match(D2);return t?t.map(I2).join(" "):e}},F2={...Jh,color:Ae,backgroundColor:Ae,outlineColor:Ae,fill:Ae,stroke:Ae,borderColor:Ae,borderTopColor:Ae,borderRightColor:Ae,borderBottomColor:Ae,borderLeftColor:Ae,filter:Bl,WebkitFilter:Bl},cd=e=>F2[e];function B0(e,t){let n=cd(e);return n!==Bl&&(n=ln),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const U0=e=>/^0[^.\s]+$/.test(e);function B2(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||U0(e)}function U2(e,t,n,i){const r=Fl(t,n);let a;Array.isArray(n)?a=[...n]:a=[null,n];const o=i.from!==void 0?i.from:e.get();let l;const c=[];for(let d=0;d<a.length;d++)a[d]===null&&(a[d]=d===0?o:a[d-1]),B2(a[d])&&c.push(d),typeof a[d]=="string"&&a[d]!=="none"&&a[d]!=="0"&&(l=a[d]);if(r&&c.length&&l)for(let d=0;d<c.length;d++){const u=c[d];a[u]=B0(t,l)}return a}function V2({when:e,delay:t,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:a,repeatType:o,repeatDelay:l,from:c,elapsed:d,...u}){return!!Object.keys(u).length}function dd(e,t){return e[t]||e.default||e}const $2={skipAnimations:!1},ud=(e,t,n,i={})=>r=>{const a=dd(i,e)||{},o=a.delay||i.delay||0;let{elapsed:l=0}=i;l=l-Nn(o);const c=U2(t,e,n,a),d=c[0],u=c[c.length-1],p=Fl(e,d),m=Fl(e,u);let g={keyframes:c,velocity:t.getVelocity(),ease:"easeOut",...a,delay:-l,onUpdate:b=>{t.set(b),a.onUpdate&&a.onUpdate(b)},onComplete:()=>{r(),a.onComplete&&a.onComplete()}};if(V2(a)||(g={...g,...R2(e,g)}),g.duration&&(g.duration=Nn(g.duration)),g.repeatDelay&&(g.repeatDelay=Nn(g.repeatDelay)),!p||!m||Iy.current||a.type===!1||$2.skipAnimations)return L2(g);if(!i.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const b=k2(t,e,g);if(b)return b}return to(g)};function no(e){return!!(Ue(e)&&e.add)}const V0=e=>/^\-?\d*\.?\d+$/.test(e);function pd(e,t){e.indexOf(t)===-1&&e.push(t)}function md(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class fd{constructor(){this.subscriptions=[]}add(t){return pd(this.subscriptions,t),()=>md(this.subscriptions,t)}notify(t,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](t,n,i);else for(let a=0;a<r;a++){const o=this.subscriptions[a];o&&o(t,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const q2=e=>!isNaN(parseFloat(e));class H2{constructor(t,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(i,r=!0)=>{this.prev=this.current,this.current=i;const{delta:a,timestamp:o}=Ne;this.lastUpdated!==o&&(this.timeDelta=a,this.lastUpdated=o,Q.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>Q.postRender(this.velocityCheck),this.velocityCheck=({timestamp:i})=>{i!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=q2(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new fd);const i=this.events[t].add(n);return t==="change"?()=>{i(),Q.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,i){this.set(n),this.prev=t,this.timeDelta=i}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?I0(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function gi(e,t){return new H2(e,t)}const $0=e=>t=>t.test(e),W2={test:e=>e==="auto",parse:e=>e},q0=[On,B,xt,Dt,Jx,Xx,W2],Pi=e=>q0.find($0(e)),Z2=[...q0,Ae,ln],G2=e=>Z2.find($0(e));function K2(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,gi(n))}function Q2(e,t){const n=Mo(e,t);let{transitionEnd:i={},transition:r={},...a}=n?e.makeTargetAnimatable(n,!1):{};a={...a,...i};for(const o in a){const l=my(a[o]);K2(e,o,l)}}function Y2(e,t,n){var i,r;const a=Object.keys(t).filter(l=>!e.hasValue(l)),o=a.length;if(o)for(let l=0;l<o;l++){const c=a[l],d=t[c];let u=null;Array.isArray(d)&&(u=d[0]),u===null&&(u=(r=(i=n[c])!==null&&i!==void 0?i:e.readValue(c))!==null&&r!==void 0?r:t[c]),u!=null&&(typeof u=="string"&&(V0(u)||U0(u))?u=parseFloat(u):!G2(u)&&ln.test(d)&&(u=B0(c,d)),e.addValue(c,gi(u,{owner:e})),n[c]===void 0&&(n[c]=u),u!==null&&e.setBaseTarget(c,u))}}function X2(e,t){return t?(t[e]||t.default||t).from:void 0}function J2(e,t,n){const i={};for(const r in e){const a=X2(r,t);if(a!==void 0)i[r]=a;else{const o=n.getValue(r);o&&(i[r]=o.get())}}return i}function ew({protectedKeys:e,needsAnimating:t},n){const i=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,i}function tw(e,t){const n=e.get();if(Array.isArray(t)){for(let i=0;i<t.length;i++)if(t[i]!==n)return!0}else return n!==t}function H0(e,t,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:a=e.getDefaultTransition(),transitionEnd:o,...l}=e.makeTargetAnimatable(t);const c=e.getValue("willChange");i&&(a=i);const d=[],u=r&&e.animationState&&e.animationState.getState()[r];for(const p in l){const m=e.getValue(p),g=l[p];if(!m||g===void 0||u&&ew(u,p))continue;const b={delay:n,elapsed:0,...dd(a||{},p)};if(window.HandoffAppearAnimations){const h=e.getProps()[Wh];if(h){const f=window.HandoffAppearAnimations(h,p,m,Q);f!==null&&(b.elapsed=f,b.isHandoff=!0)}}let y=!b.isHandoff&&!tw(m,g);if(b.type==="spring"&&(m.getVelocity()||b.velocity)&&(y=!1),m.animation&&(y=!1),y)continue;m.start(ud(p,m,g,e.shouldReduceMotion&&Rn.has(p)?{type:!1}:b));const w=m.animation;no(c)&&(c.add(p),w.then(()=>c.remove(p))),d.push(w)}return o&&Promise.all(d).then(()=>{o&&Q2(e,o)}),d}function Ul(e,t,n={}){const i=Mo(e,t,n.custom);let{transition:r=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const a=i?()=>Promise.all(H0(e,i,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(c=0)=>{const{delayChildren:d=0,staggerChildren:u,staggerDirection:p}=r;return nw(e,t,d+c,u,p,n)}:()=>Promise.resolve(),{when:l}=r;if(l){const[c,d]=l==="beforeChildren"?[a,o]:[o,a];return c().then(()=>d())}else return Promise.all([a(),o(n.delay)])}function nw(e,t,n=0,i=0,r=1,a){const o=[],l=(e.variantChildren.size-1)*i,c=r===1?(d=0)=>d*i:(d=0)=>l-d*i;return Array.from(e.variantChildren).sort(iw).forEach((d,u)=>{d.notify("AnimationStart",t),o.push(Ul(d,t,{...a,delay:n+c(u)}).then(()=>d.notify("AnimationComplete",t)))}),Promise.all(o)}function iw(e,t){return e.sortNodePosition(t)}function rw(e,t,n={}){e.notify("AnimationStart",t);let i;if(Array.isArray(t)){const r=t.map(a=>Ul(e,a,n));i=Promise.all(r)}else if(typeof t=="string")i=Ul(e,t,n);else{const r=typeof t=="function"?Mo(e,t,n.custom):t;i=Promise.all(H0(e,r,n))}return i.then(()=>e.notify("AnimationComplete",t))}const aw=[...Kc].reverse(),ow=Kc.length;function sw(e){return t=>Promise.all(t.map(({animation:n,options:i})=>rw(e,n,i)))}function lw(e){let t=sw(e);const n=dw();let i=!0;const r=(c,d)=>{const u=Mo(e,d);if(u){const{transition:p,transitionEnd:m,...g}=u;c={...c,...g,...m}}return c};function a(c){t=c(e)}function o(c,d){const u=e.getProps(),p=e.getVariantContext(!0)||{},m=[],g=new Set;let b={},y=1/0;for(let h=0;h<ow;h++){const f=aw[h],v=n[f],j=u[f]!==void 0?u[f]:p[f],_=wr(j),z=f===d?v.isActive:null;z===!1&&(y=h);let S=j===p[f]&&j!==u[f]&&_;if(S&&i&&e.manuallyAnimateOnMount&&(S=!1),v.protectedKeys={...b},!v.isActive&&z===null||!j&&!v.prevProp||ko(j)||typeof j=="boolean")continue;let A=cw(v.prevProp,j)||f===d&&v.isActive&&!S&&_||h>y&&_,k=!1;const $=Array.isArray(j)?j:[j];let Z=$.reduce(r,{});z===!1&&(Z={});const{prevResolvedValues:te={}}=v,G={...te,...Z},O=D=>{A=!0,g.has(D)&&(k=!0,g.delete(D)),v.needsAnimating[D]=!0};for(const D in G){const J=Z[D],N=te[D];if(b.hasOwnProperty(D))continue;let M=!1;Xa(J)&&Xa(N)?M=!f0(J,N):M=J!==N,M?J!==void 0?O(D):g.add(D):J!==void 0&&g.has(D)?O(D):v.protectedKeys[D]=!0}v.prevProp=j,v.prevResolvedValues=Z,v.isActive&&(b={...b,...Z}),i&&e.blockInitialAnimation&&(A=!1),A&&(!S||k)&&m.push(...$.map(D=>({animation:D,options:{type:f,...c}})))}if(g.size){const h={};g.forEach(f=>{const v=e.getBaseTarget(f);v!==void 0&&(h[f]=v)}),m.push({animation:h})}let w=!!m.length;return i&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(w=!1),i=!1,w?t(m):Promise.resolve()}function l(c,d,u){var p;if(n[c].isActive===d)return Promise.resolve();(p=e.variantChildren)===null||p===void 0||p.forEach(g=>{var b;return(b=g.animationState)===null||b===void 0?void 0:b.setActive(c,d)}),n[c].isActive=d;const m=o(u,c);for(const g in n)n[g].protectedKeys={};return m}return{animateChanges:o,setActive:l,setAnimateFunction:a,getState:()=>n}}function cw(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!f0(t,e):!1}function hn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function dw(){return{animate:hn(!0),whileInView:hn(),whileHover:hn(),whileTap:hn(),whileDrag:hn(),whileFocus:hn(),exit:hn()}}class uw extends mn{constructor(t){super(t),t.animationState||(t.animationState=lw(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),ko(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let pw=0;class mw extends mn{constructor(){super(...arguments),this.id=pw++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:i}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const a=this.node.animationState.setActive("exit",!t,{custom:i??this.node.getProps().custom});n&&!t&&a.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const fw={animation:{Feature:uw},exit:{Feature:mw}},sp=(e,t)=>Math.abs(e-t);function hw(e,t){const n=sp(e.x,t.x),i=sp(e.y,t.y);return Math.sqrt(n**2+i**2)}class W0{constructor(t,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:a=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const p=Ns(this.lastMoveEventInfo,this.history),m=this.startEvent!==null,g=hw(p.offset,{x:0,y:0})>=3;if(!m&&!g)return;const{point:b}=p,{timestamp:y}=Ne;this.history.push({...b,timestamp:y});const{onStart:w,onMove:h}=this.handlers;m||(w&&w(this.lastMoveEvent,p),this.startEvent=this.lastMoveEvent),h&&h(this.lastMoveEvent,p)},this.handlePointerMove=(p,m)=>{this.lastMoveEvent=p,this.lastMoveEventInfo=Es(m,this.transformPagePoint),Q.update(this.updatePoint,!0)},this.handlePointerUp=(p,m)=>{this.end();const{onEnd:g,onSessionEnd:b,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=Ns(p.type==="pointercancel"?this.lastMoveEventInfo:Es(m,this.transformPagePoint),this.history);this.startEvent&&g&&g(p,w),b&&b(p,w)},!c0(t))return;this.dragSnapToOrigin=a,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const o=Po(t),l=Es(o,this.transformPagePoint),{point:c}=l,{timestamp:d}=Ne;this.history=[{...c,timestamp:d}];const{onSessionStart:u}=n;u&&u(t,Ns(l,this.history)),this.removeListeners=nn(Ct(this.contextWindow,"pointermove",this.handlePointerMove),Ct(this.contextWindow,"pointerup",this.handlePointerUp),Ct(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Tt(this.updatePoint)}}function Es(e,t){return t?{point:t(e.point)}:e}function lp(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ns({point:e},t){return{point:e,delta:lp(e,Z0(t)),offset:lp(e,gw(t)),velocity:vw(t,.1)}}function gw(e){return e[0]}function Z0(e){return e[e.length-1]}function vw(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,i=null;const r=Z0(e);for(;n>=0&&(i=e[n],!(r.timestamp-i.timestamp>Nn(t)));)n--;if(!i)return{x:0,y:0};const a=kt(r.timestamp-i.timestamp);if(a===0)return{x:0,y:0};const o={x:(r.x-i.x)/a,y:(r.y-i.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Ge(e){return e.max-e.min}function Vl(e,t=0,n=.01){return Math.abs(e-t)<=n}function cp(e,t,n,i=.5){e.origin=i,e.originPoint=ie(t.min,t.max,e.origin),e.scale=Ge(n)/Ge(t),(Vl(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=ie(n.min,n.max,e.origin)-e.originPoint,(Vl(e.translate)||isNaN(e.translate))&&(e.translate=0)}function Ji(e,t,n,i){cp(e.x,t.x,n.x,i?i.originX:void 0),cp(e.y,t.y,n.y,i?i.originY:void 0)}function dp(e,t,n){e.min=n.min+t.min,e.max=e.min+Ge(t)}function bw(e,t,n){dp(e.x,t.x,n.x),dp(e.y,t.y,n.y)}function up(e,t,n){e.min=t.min-n.min,e.max=e.min+Ge(t)}function er(e,t,n){up(e.x,t.x,n.x),up(e.y,t.y,n.y)}function xw(e,{min:t,max:n},i){return t!==void 0&&e<t?e=i?ie(t,e,i.min):Math.max(e,t):n!==void 0&&e>n&&(e=i?ie(n,e,i.max):Math.min(e,n)),e}function pp(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function yw(e,{top:t,left:n,bottom:i,right:r}){return{x:pp(e.x,n,r),y:pp(e.y,t,i)}}function mp(e,t){let n=t.min-e.min,i=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,i]=[i,n]),{min:n,max:i}}function ww(e,t){return{x:mp(e.x,t.x),y:mp(e.y,t.y)}}function jw(e,t){let n=.5;const i=Ge(e),r=Ge(t);return r>i?n=_r(t.min,t.max-i,e.min):i>r&&(n=_r(e.min,e.max-r,t.min)),sn(0,1,n)}function _w(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const $l=.35;function zw(e=$l){return e===!1?e=0:e===!0&&(e=$l),{x:fp(e,"left","right"),y:fp(e,"top","bottom")}}function fp(e,t,n){return{min:hp(e,t),max:hp(e,n)}}function hp(e,t){return typeof e=="number"?e:e[t]||0}const gp=()=>({translate:0,scale:1,origin:0,originPoint:0}),Jn=()=>({x:gp(),y:gp()}),vp=()=>({min:0,max:0}),pe=()=>({x:vp(),y:vp()});function Xe(e){return[e("x"),e("y")]}function G0({top:e,left:t,right:n,bottom:i}){return{x:{min:t,max:n},y:{min:e,max:i}}}function Sw({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function Ew(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),i=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Cs(e){return e===void 0||e===1}function ql({scale:e,scaleX:t,scaleY:n}){return!Cs(e)||!Cs(t)||!Cs(n)}function bn(e){return ql(e)||K0(e)||e.z||e.rotate||e.rotateX||e.rotateY}function K0(e){return bp(e.x)||bp(e.y)}function bp(e){return e&&e!=="0%"}function io(e,t,n){const i=e-n,r=t*i;return n+r}function xp(e,t,n,i,r){return r!==void 0&&(e=io(e,r,i)),io(e,n,i)+t}function Hl(e,t=0,n=1,i,r){e.min=xp(e.min,t,n,i,r),e.max=xp(e.max,t,n,i,r)}function Q0(e,{x:t,y:n}){Hl(e.x,t.translate,t.scale,t.originPoint),Hl(e.y,n.translate,n.scale,n.originPoint)}function Nw(e,t,n,i=!1){const r=n.length;if(!r)return;t.x=t.y=1;let a,o;for(let l=0;l<r;l++){a=n[l],o=a.projectionDelta;const c=a.instance;c&&c.style&&c.style.display==="contents"||(i&&a.options.layoutScroll&&a.scroll&&a!==a.root&&ei(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Q0(e,o)),i&&bn(a.latestValues)&&ei(e,a.latestValues))}t.x=yp(t.x),t.y=yp(t.y)}function yp(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function Ut(e,t){e.min=e.min+t,e.max=e.max+t}function wp(e,t,[n,i,r]){const a=t[r]!==void 0?t[r]:.5,o=ie(e.min,e.max,a);Hl(e,t[n],t[i],o,t.scale)}const Cw=["x","scaleX","originX"],kw=["y","scaleY","originY"];function ei(e,t){wp(e.x,t,Cw),wp(e.y,t,kw)}function Y0(e,t){return G0(Ew(e.getBoundingClientRect(),t))}function Lw(e,t,n){const i=Y0(e,n),{scroll:r}=t;return r&&(Ut(i.x,r.offset.x),Ut(i.y,r.offset.y)),i}const X0=({current:e})=>e?e.ownerDocument.defaultView:null,Aw=new WeakMap;class Pw{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=pe(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=u=>{const{dragSnapToOrigin:p}=this.getProps();p?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Po(u,"page").point)},a=(u,p)=>{const{drag:m,dragPropagation:g,onDragStart:b}=this.getProps();if(m&&!g&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=u0(m),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Xe(w=>{let h=this.getAxisMotionValue(w).get()||0;if(xt.test(h)){const{projection:f}=this.visualElement;if(f&&f.layout){const v=f.layout.layoutBox[w];v&&(h=Ge(v)*(parseFloat(h)/100))}}this.originPoint[w]=h}),b&&Q.update(()=>b(u,p),!1,!0);const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},o=(u,p)=>{const{dragPropagation:m,dragDirectionLock:g,onDirectionLock:b,onDrag:y}=this.getProps();if(!m&&!this.openGlobalLock)return;const{offset:w}=p;if(g&&this.currentDirection===null){this.currentDirection=Mw(w),this.currentDirection!==null&&b&&b(this.currentDirection);return}this.updateAxis("x",p.point,w),this.updateAxis("y",p.point,w),this.visualElement.render(),y&&y(u,p)},l=(u,p)=>this.stop(u,p),c=()=>Xe(u=>{var p;return this.getAnimationState(u)==="paused"&&((p=this.getAxisMotionValue(u).animation)===null||p===void 0?void 0:p.play())}),{dragSnapToOrigin:d}=this.getProps();this.panSession=new W0(t,{onSessionStart:r,onStart:a,onMove:o,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,contextWindow:X0(this.visualElement)})}stop(t,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:a}=this.getProps();a&&Q.update(()=>a(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,i){const{drag:r}=this.getProps();if(!i||!oa(t,r,this.currentDirection))return;const a=this.getAxisMotionValue(t);let o=this.originPoint[t]+i[t];this.constraints&&this.constraints[t]&&(o=xw(o,this.constraints[t],this.elastic[t])),a.set(o)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,a=this.constraints;n&&Yn(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=yw(r.layoutBox,n):this.constraints=!1,this.elastic=zw(i),a!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Xe(o=>{this.getAxisMotionValue(o)&&(this.constraints[o]=_w(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Yn(t))return!1;const i=t.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const a=Lw(i,r.root,this.visualElement.getTransformPagePoint());let o=ww(r.layout.layoutBox,a);if(n){const l=n(Sw(o));this.hasMutatedConstraints=!!l,l&&(o=G0(l))}return o}startAnimation(t){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:a,dragSnapToOrigin:o,onDragTransitionEnd:l}=this.getProps(),c=this.constraints||{},d=Xe(u=>{if(!oa(u,n,this.currentDirection))return;let p=c&&c[u]||{};o&&(p={min:0,max:0});const m=r?200:1e6,g=r?40:1e7,b={type:"inertia",velocity:i?t[u]:0,bounceStiffness:m,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...a,...p};return this.startAxisValueAnimation(u,b)});return Promise.all(d).then(l)}startAxisValueAnimation(t,n){const i=this.getAxisMotionValue(t);return i.start(ud(t,i,0,n))}stopAnimation(){Xe(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Xe(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(t,(i.initial?i.initial[t]:void 0)||0)}snapToCursor(t){Xe(n=>{const{drag:i}=this.getProps();if(!oa(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,a=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:l}=r.layout.layoutBox[n];a.set(t[n]-ie(o,l,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Yn(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Xe(o=>{const l=this.getAxisMotionValue(o);if(l){const c=l.get();r[o]=jw({min:c,max:c},this.constraints[o])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Xe(o=>{if(!oa(o,t,null))return;const l=this.getAxisMotionValue(o),{min:c,max:d}=this.constraints[o];l.set(ie(c,d,r[o]))})}addListeners(){if(!this.visualElement.current)return;Aw.set(this.visualElement,this);const t=this.visualElement.current,n=Ct(t,"pointerdown",c=>{const{drag:d,dragListener:u=!0}=this.getProps();d&&u&&this.start(c)}),i=()=>{const{dragConstraints:c}=this.getProps();Yn(c)&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,a=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),i();const o=Et(window,"resize",()=>this.scalePositionWithinConstraints()),l=r.addEventListener("didUpdate",({delta:c,hasLayoutChanged:d})=>{this.isDragging&&d&&(Xe(u=>{const p=this.getAxisMotionValue(u);p&&(this.originPoint[u]+=c[u].translate,p.set(p.get()+c[u].translate))}),this.visualElement.render())});return()=>{o(),n(),a(),l&&l()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:a=!1,dragElastic:o=$l,dragMomentum:l=!0}=t;return{...t,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:a,dragElastic:o,dragMomentum:l}}}function oa(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Mw(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class Tw extends mn{constructor(t){super(t),this.removeGroupControls=ue,this.removeListeners=ue,this.controls=new Pw(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ue}unmount(){this.removeGroupControls(),this.removeListeners()}}const jp=e=>(t,n)=>{e&&Q.update(()=>e(t,n))};class Rw extends mn{constructor(){super(...arguments),this.removePointerDownListener=ue}onPointerDown(t){this.session=new W0(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:X0(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:jp(t),onStart:jp(n),onMove:i,onEnd:(a,o)=>{delete this.session,r&&Q.update(()=>r(a,o))}}}mount(){this.removePointerDownListener=Ct(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function Ow(){const e=x.useContext(No);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:i}=e,r=x.useId();return x.useEffect(()=>i(r),[]),!t&&n?[!1,()=>n&&n(r)]:[!0]}const _a={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function _p(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Mi={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(B.test(e))e=parseFloat(e);else return e;const n=_p(e,t.target.x),i=_p(e,t.target.y);return`${n}% ${i}%`}},Iw={correct:(e,{treeScale:t,projectionDelta:n})=>{const i=e,r=ln.parse(e);if(r.length>5)return i;const a=ln.createTransformer(e),o=typeof r[0]!="number"?1:0,l=n.x.scale*t.x,c=n.y.scale*t.y;r[0+o]/=l,r[1+o]/=c;const d=ie(l,c,.5);return typeof r[2+o]=="number"&&(r[2+o]/=d),typeof r[3+o]=="number"&&(r[3+o]/=d),a(r)}};class Dw extends dt.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:a}=t;Hx(Fw),a&&(n.group&&n.group.add(a),i&&i.register&&r&&i.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),_a.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:i,drag:r,isPresent:a}=this.props,o=i.projection;return o&&(o.isPresent=a,r||t.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),t.isPresent!==a&&(a?o.promote():o.relegate()||Q.postRender(()=>{const l=o.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=t;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function J0(e){const[t,n]=Ow(),i=x.useContext(Yc);return dt.createElement(Dw,{...e,layoutGroup:i,switchLayoutGroup:x.useContext(Gh),isPresent:t,safeToRemove:n})}const Fw={borderRadius:{...Mi,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Mi,borderTopRightRadius:Mi,borderBottomLeftRadius:Mi,borderBottomRightRadius:Mi,boxShadow:Iw},eg=["TopLeft","TopRight","BottomLeft","BottomRight"],Bw=eg.length,zp=e=>typeof e=="string"?parseFloat(e):e,Sp=e=>typeof e=="number"||B.test(e);function Uw(e,t,n,i,r,a){r?(e.opacity=ie(0,n.opacity!==void 0?n.opacity:1,Vw(i)),e.opacityExit=ie(t.opacity!==void 0?t.opacity:1,0,$w(i))):a&&(e.opacity=ie(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<Bw;o++){const l=`border${eg[o]}Radius`;let c=Ep(t,l),d=Ep(n,l);if(c===void 0&&d===void 0)continue;c||(c=0),d||(d=0),c===0||d===0||Sp(c)===Sp(d)?(e[l]=Math.max(ie(zp(c),zp(d),i),0),(xt.test(d)||xt.test(c))&&(e[l]+="%")):e[l]=d}(t.rotate||n.rotate)&&(e.rotate=ie(t.rotate||0,n.rotate||0,i))}function Ep(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const Vw=tg(0,.5,_0),$w=tg(.5,.95,ue);function tg(e,t,n){return i=>i<e?0:i>t?1:n(_r(e,t,i))}function Np(e,t){e.min=t.min,e.max=t.max}function Ye(e,t){Np(e.x,t.x),Np(e.y,t.y)}function Cp(e,t,n,i,r){return e-=t,e=io(e,1/n,i),r!==void 0&&(e=io(e,1/r,i)),e}function qw(e,t=0,n=1,i=.5,r,a=e,o=e){if(xt.test(t)&&(t=parseFloat(t),t=ie(o.min,o.max,t/100)-o.min),typeof t!="number")return;let l=ie(a.min,a.max,i);e===a&&(l-=t),e.min=Cp(e.min,t,n,l,r),e.max=Cp(e.max,t,n,l,r)}function kp(e,t,[n,i,r],a,o){qw(e,t[n],t[i],t[r],t.scale,a,o)}const Hw=["x","scaleX","originX"],Ww=["y","scaleY","originY"];function Lp(e,t,n,i){kp(e.x,t,Hw,n?n.x:void 0,i?i.x:void 0),kp(e.y,t,Ww,n?n.y:void 0,i?i.y:void 0)}function Ap(e){return e.translate===0&&e.scale===1}function ng(e){return Ap(e.x)&&Ap(e.y)}function Zw(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function ig(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function Pp(e){return Ge(e.x)/Ge(e.y)}class Gw{constructor(){this.members=[]}add(t){pd(this.members,t),t.scheduleRender()}remove(t){if(md(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(r=>t===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const a=this.members[r];if(a.isPresent!==!1){i=a;break}}return i?(this.promote(i),!0):!1}promote(t,n){const i=this.lead;if(t!==i&&(this.prevLead=i,this.lead=t,t.show(),i)){i.instance&&i.scheduleRender(),t.scheduleRender(),t.resumeFrom=i,n&&(t.resumeFrom.preserveOpacity=!0),i.snapshot&&(t.snapshot=i.snapshot,t.snapshot.latestValues=i.animationValues||i.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:r}=t.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:i}=t;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Mp(e,t,n){let i="";const r=e.x.translate/t.x,a=e.y.translate/t.y;if((r||a)&&(i=`translate3d(${r}px, ${a}px, 0) `),(t.x!==1||t.y!==1)&&(i+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:c,rotateX:d,rotateY:u}=n;c&&(i+=`rotate(${c}deg) `),d&&(i+=`rotateX(${d}deg) `),u&&(i+=`rotateY(${u}deg) `)}const o=e.x.scale*t.x,l=e.y.scale*t.y;return(o!==1||l!==1)&&(i+=`scale(${o}, ${l})`),i||"none"}const Kw=(e,t)=>e.depth-t.depth;class Qw{constructor(){this.children=[],this.isDirty=!1}add(t){pd(this.children,t),this.isDirty=!0}remove(t){md(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(Kw),this.isDirty=!1,this.children.forEach(t)}}function Yw(e,t){const n=performance.now(),i=({timestamp:r})=>{const a=r-n;a>=t&&(Tt(i),e(a-t))};return Q.read(i,!0),()=>Tt(i)}function Xw(e){window.MotionDebug&&window.MotionDebug.record(e)}function Jw(e){return e instanceof SVGElement&&e.tagName!=="svg"}function ej(e,t,n){const i=Ue(e)?e:gi(e);return i.start(ud("",i,t,n)),i.animation}const Tp=["","X","Y","Z"],tj={visibility:"hidden"},Rp=1e3;let nj=0;const xn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function rg({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},l=t==null?void 0:t()){this.id=nj++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,xn.totalNodes=xn.resolvedTargetDeltas=xn.recalculatedProjection=0,this.nodes.forEach(aj),this.nodes.forEach(dj),this.nodes.forEach(uj),this.nodes.forEach(oj),Xw(xn)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new Qw)}addEventListener(o,l){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new fd),this.eventHandlers.get(o).add(l)}notifyListeners(o,...l){const c=this.eventHandlers.get(o);c&&c.notify(...l)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,l=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Jw(o),this.instance=o;const{layoutId:c,layout:d,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),l&&(d||c)&&(this.isLayoutDirty=!0),e){let p;const m=()=>this.root.updateBlockedByResize=!1;e(o,()=>{this.root.updateBlockedByResize=!0,p&&p(),p=Yw(m,250),_a.hasAnimatedSinceResize&&(_a.hasAnimatedSinceResize=!1,this.nodes.forEach(Ip))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&u&&(c||d)&&this.addEventListener("didUpdate",({delta:p,hasLayoutChanged:m,hasRelativeTargetChanged:g,layout:b})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||u.getDefaultTransition()||gj,{onLayoutAnimationStart:w,onLayoutAnimationComplete:h}=u.getProps(),f=!this.targetLayout||!ig(this.targetLayout,b)||g,v=!m&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||v||m&&(f||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(p,v);const j={...dd(y,"layout"),onPlay:w,onComplete:h};(u.shouldReduceMotion||this.options.layoutRoot)&&(j.delay=0,j.type=!1),this.startAnimation(j)}else m||Ip(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=b})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Tt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(pj),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const p=this.path[u];p.shouldResetTransform=!0,p.updateScroll("snapshot"),p.options.layoutRoot&&p.willUpdate(!1)}const{layoutId:l,layout:c}=this.options;if(l===void 0&&!c)return;const d=this.getTransformTemplate();this.prevTransformTemplateValue=d?d(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Op);return}this.isUpdating||this.nodes.forEach(lj),this.isUpdating=!1,this.nodes.forEach(cj),this.nodes.forEach(ij),this.nodes.forEach(rj),this.clearAllSnapshots();const l=performance.now();Ne.delta=sn(0,1e3/60,l-Ne.timestamp),Ne.timestamp=l,Ne.isProcessing=!0,bs.update.process(Ne),bs.preRender.process(Ne),bs.render.process(Ne),Ne.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(sj),this.sharedNodes.forEach(mj)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Q.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Q.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=pe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let l=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(l=!1),l&&(this.scroll={animationId:this.root.animationId,phase:o,isRoot:i(this.instance),offset:n(this.instance)})}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform,l=this.projectionDelta&&!ng(this.projectionDelta),c=this.getTransformTemplate(),d=c?c(this.latestValues,""):void 0,u=d!==this.prevTransformTemplateValue;o&&(l||bn(this.latestValues)||u)&&(r(this.instance,d),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const l=this.measurePageBox();let c=this.removeElementScroll(l);return o&&(c=this.removeTransform(c)),vj(c),{animationId:this.root.animationId,measuredBox:l,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:o}=this.options;if(!o)return pe();const l=o.measureViewportBox(),{scroll:c}=this.root;return c&&(Ut(l.x,c.offset.x),Ut(l.y,c.offset.y)),l}removeElementScroll(o){const l=pe();Ye(l,o);for(let c=0;c<this.path.length;c++){const d=this.path[c],{scroll:u,options:p}=d;if(d!==this.root&&u&&p.layoutScroll){if(u.isRoot){Ye(l,o);const{scroll:m}=this.root;m&&(Ut(l.x,-m.offset.x),Ut(l.y,-m.offset.y))}Ut(l.x,u.offset.x),Ut(l.y,u.offset.y)}}return l}applyTransform(o,l=!1){const c=pe();Ye(c,o);for(let d=0;d<this.path.length;d++){const u=this.path[d];!l&&u.options.layoutScroll&&u.scroll&&u!==u.root&&ei(c,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),bn(u.latestValues)&&ei(c,u.latestValues)}return bn(this.latestValues)&&ei(c,this.latestValues),c}removeTransform(o){const l=pe();Ye(l,o);for(let c=0;c<this.path.length;c++){const d=this.path[c];if(!d.instance||!bn(d.latestValues))continue;ql(d.latestValues)&&d.updateSnapshot();const u=pe(),p=d.measurePageBox();Ye(u,p),Lp(l,d.latestValues,d.snapshot?d.snapshot.layoutBox:void 0,u)}return bn(this.latestValues)&&Lp(l,this.latestValues),l}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ne.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var l;const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const d=!!this.resumingFrom||this!==c;if(!(o||d&&this.isSharedProjectionDirty||this.isProjectionDirty||!((l=this.parent)===null||l===void 0)&&l.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:p,layoutId:m}=this.options;if(!(!this.layout||!(p||m))){if(this.resolvedRelativeTargetAt=Ne.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=pe(),this.relativeTargetOrigin=pe(),er(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),Ye(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=pe(),this.targetWithTransforms=pe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),bw(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ye(this.target,this.layout.layoutBox),Q0(this.target,this.targetDelta)):Ye(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=pe(),this.relativeTargetOrigin=pe(),er(this.relativeTargetOrigin,this.target,g.target),Ye(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}xn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||ql(this.parent.latestValues)||K0(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const l=this.getLead(),c=!!this.resumingFrom||this!==l;let d=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(d=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1),this.resolvedRelativeTargetAt===Ne.timestamp&&(d=!1),d)return;const{layout:u,layoutId:p}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||p))return;Ye(this.layoutCorrected,this.layout.layoutBox);const m=this.treeScale.x,g=this.treeScale.y;Nw(this.layoutCorrected,this.treeScale,this.path,c),l.layout&&!l.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(l.target=l.layout.layoutBox);const{target:b}=l;if(!b){this.projectionTransform&&(this.projectionDelta=Jn(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Jn(),this.projectionDeltaWithTransform=Jn());const y=this.projectionTransform;Ji(this.projectionDelta,this.layoutCorrected,b,this.latestValues),this.projectionTransform=Mp(this.projectionDelta,this.treeScale),(this.projectionTransform!==y||this.treeScale.x!==m||this.treeScale.y!==g)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",b)),xn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(o,l=!1){const c=this.snapshot,d=c?c.latestValues:{},u={...this.latestValues},p=Jn();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const m=pe(),g=c?c.source:void 0,b=this.layout?this.layout.source:void 0,y=g!==b,w=this.getStack(),h=!w||w.members.length<=1,f=!!(y&&!h&&this.options.crossfade===!0&&!this.path.some(hj));this.animationProgress=0;let v;this.mixTargetDelta=j=>{const _=j/1e3;Dp(p.x,o.x,_),Dp(p.y,o.y,_),this.setTargetDelta(p),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(er(m,this.layout.layoutBox,this.relativeParent.layout.layoutBox),fj(this.relativeTarget,this.relativeTargetOrigin,m,_),v&&Zw(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=pe()),Ye(v,this.relativeTarget)),y&&(this.animationValues=u,Uw(u,d,this.latestValues,_,f,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=_},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Tt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Q.update(()=>{_a.hasAnimatedSinceResize=!0,this.currentAnimation=ej(0,Rp,{...o,onUpdate:l=>{this.mixTargetDelta(l),o.onUpdate&&o.onUpdate(l)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Rp),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:l,target:c,layout:d,latestValues:u}=o;if(!(!l||!c||!d)){if(this!==o&&this.layout&&d&&ag(this.options.animationType,this.layout.layoutBox,d.layoutBox)){c=this.target||pe();const p=Ge(this.layout.layoutBox.x);c.x.min=o.target.x.min,c.x.max=c.x.min+p;const m=Ge(this.layout.layoutBox.y);c.y.min=o.target.y.min,c.y.max=c.y.min+m}Ye(l,c),ei(l,u),Ji(this.projectionDeltaWithTransform,this.layoutCorrected,l,u)}}registerSharedNode(o,l){this.sharedNodes.has(o)||this.sharedNodes.set(o,new Gw),this.sharedNodes.get(o).add(l);const d=l.options.initialPromotionConfig;l.promote({transition:d?d.transition:void 0,preserveFollowOpacity:d&&d.shouldPreserveFollowOpacity?d.shouldPreserveFollowOpacity(l):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:l}=this.options;return l?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:l}=this.options;return l?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:l,preserveFollowOpacity:c}={}){const d=this.getStack();d&&d.promote(this,c),o&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetRotation(){const{visualElement:o}=this.options;if(!o)return;let l=!1;const{latestValues:c}=o;if((c.rotate||c.rotateX||c.rotateY||c.rotateZ)&&(l=!0),!l)return;const d={};for(let u=0;u<Tp.length;u++){const p="rotate"+Tp[u];c[p]&&(d[p]=c[p],o.setStaticValue(p,0))}o.render();for(const u in d)o.setStaticValue(u,d[u]);o.scheduleRender()}getProjectionStyles(o){var l,c;if(!this.instance||this.isSVG)return;if(!this.isVisible)return tj;const d={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,d.opacity="",d.pointerEvents=ja(o==null?void 0:o.pointerEvents)||"",d.transform=u?u(this.latestValues,""):"none",d;const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=ja(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!bn(this.latestValues)&&(y.transform=u?u({},""):"none",this.hasProjected=!1),y}const m=p.animationValues||p.latestValues;this.applyTransformsToTarget(),d.transform=Mp(this.projectionDeltaWithTransform,this.treeScale,m),u&&(d.transform=u(m,d.transform));const{x:g,y:b}=this.projectionDelta;d.transformOrigin=`${g.origin*100}% ${b.origin*100}% 0`,p.animationValues?d.opacity=p===this?(c=(l=m.opacity)!==null&&l!==void 0?l:this.latestValues.opacity)!==null&&c!==void 0?c:1:this.preserveOpacity?this.latestValues.opacity:m.opacityExit:d.opacity=p===this?m.opacity!==void 0?m.opacity:"":m.opacityExit!==void 0?m.opacityExit:0;for(const y in Qa){if(m[y]===void 0)continue;const{correct:w,applyTo:h}=Qa[y],f=d.transform==="none"?m[y]:w(m[y],p);if(h){const v=h.length;for(let j=0;j<v;j++)d[h[j]]=f}else d[y]=f}return this.options.layoutId&&(d.pointerEvents=p===this?ja(o==null?void 0:o.pointerEvents)||"":"none"),d}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var l;return(l=o.currentAnimation)===null||l===void 0?void 0:l.stop()}),this.root.nodes.forEach(Op),this.root.sharedNodes.clear()}}}function ij(e){e.updateLayout()}function rj(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=e.layout,{animationType:a}=e.options,o=n.source!==e.layout.source;a==="size"?Xe(p=>{const m=o?n.measuredBox[p]:n.layoutBox[p],g=Ge(m);m.min=i[p].min,m.max=m.min+g}):ag(a,n.layoutBox,i)&&Xe(p=>{const m=o?n.measuredBox[p]:n.layoutBox[p],g=Ge(i[p]);m.max=m.min+g,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[p].max=e.relativeTarget[p].min+g)});const l=Jn();Ji(l,i,n.layoutBox);const c=Jn();o?Ji(c,e.applyTransform(r,!0),n.measuredBox):Ji(c,i,n.layoutBox);const d=!ng(l);let u=!1;if(!e.resumeFrom){const p=e.getClosestProjectingParent();if(p&&!p.resumeFrom){const{snapshot:m,layout:g}=p;if(m&&g){const b=pe();er(b,n.layoutBox,m.layoutBox);const y=pe();er(y,i,g.layoutBox),ig(b,y)||(u=!0),p.options.layoutRoot&&(e.relativeTarget=y,e.relativeTargetOrigin=b,e.relativeParent=p)}}}e.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:c,layoutDelta:l,hasLayoutChanged:d,hasRelativeTargetChanged:u})}else if(e.isLead()){const{onExitComplete:i}=e.options;i&&i()}e.options.transition=void 0}function aj(e){xn.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function oj(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function sj(e){e.clearSnapshot()}function Op(e){e.clearMeasurements()}function lj(e){e.isLayoutDirty=!1}function cj(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Ip(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function dj(e){e.resolveTargetDelta()}function uj(e){e.calcProjection()}function pj(e){e.resetRotation()}function mj(e){e.removeLeadSnapshot()}function Dp(e,t,n){e.translate=ie(t.translate,0,n),e.scale=ie(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Fp(e,t,n,i){e.min=ie(t.min,n.min,i),e.max=ie(t.max,n.max,i)}function fj(e,t,n,i){Fp(e.x,t.x,n.x,i),Fp(e.y,t.y,n.y,i)}function hj(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const gj={duration:.45,ease:[.4,0,.1,1]},Bp=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),Up=Bp("applewebkit/")&&!Bp("chrome/")?Math.round:ue;function Vp(e){e.min=Up(e.min),e.max=Up(e.max)}function vj(e){Vp(e.x),Vp(e.y)}function ag(e,t,n){return e==="position"||e==="preserve-aspect"&&!Vl(Pp(t),Pp(n),.2)}const bj=rg({attachResizeListener:(e,t)=>Et(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),ks={current:void 0},og=rg({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!ks.current){const e=new bj({});e.mount(window),e.setOptions({layoutScroll:!0}),ks.current=e}return ks.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),xj={pan:{Feature:Rw},drag:{Feature:Tw,ProjectionNode:og,MeasureLayout:J0}},yj=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function wj(e){const t=yj.exec(e);if(!t)return[,];const[,n,i]=t;return[n,i]}function Wl(e,t,n=1){const[i,r]=wj(e);if(!i)return;const a=window.getComputedStyle(t).getPropertyValue(i);if(a){const o=a.trim();return V0(o)?parseFloat(o):o}else return Rl(r)?Wl(r,t,n+1):r}function jj(e,{...t},n){const i=e.current;if(!(i instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(r=>{const a=r.get();if(!Rl(a))return;const o=Wl(a,i);o&&r.set(o)});for(const r in t){const a=t[r];if(!Rl(a))continue;const o=Wl(a,i);o&&(t[r]=o,n||(n={}),n[r]===void 0&&(n[r]=a))}return{target:t,transitionEnd:n}}const _j=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),sg=e=>_j.has(e),zj=e=>Object.keys(e).some(sg),$p=e=>e===On||e===B,qp=(e,t)=>parseFloat(e.split(", ")[t]),Hp=(e,t)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/);if(r)return qp(r[1],t);{const a=i.match(/^matrix\((.+)\)$/);return a?qp(a[1],e):0}},Sj=new Set(["x","y","z"]),Ej=Pr.filter(e=>!Sj.has(e));function Nj(e){const t=[];return Ej.forEach(n=>{const i=e.getValue(n);i!==void 0&&(t.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const vi={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Hp(4,13),y:Hp(5,14)};vi.translateX=vi.x;vi.translateY=vi.y;const Cj=(e,t,n)=>{const i=t.measureViewportBox(),r=t.current,a=getComputedStyle(r),{display:o}=a,l={};o==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(d=>{l[d]=vi[d](i,a)}),t.render();const c=t.measureViewportBox();return n.forEach(d=>{const u=t.getValue(d);u&&u.jump(l[d]),e[d]=vi[d](c,a)}),e},kj=(e,t,n={},i={})=>{t={...t},i={...i};const r=Object.keys(t).filter(sg);let a=[],o=!1;const l=[];if(r.forEach(c=>{const d=e.getValue(c);if(!e.hasValue(c))return;let u=n[c],p=Pi(u);const m=t[c];let g;if(Xa(m)){const b=m.length,y=m[0]===null?1:0;u=m[y],p=Pi(u);for(let w=y;w<b&&m[w]!==null;w++)g?ad(Pi(m[w])===g):g=Pi(m[w])}else g=Pi(m);if(p!==g)if($p(p)&&$p(g)){const b=d.get();typeof b=="string"&&d.set(parseFloat(b)),typeof m=="string"?t[c]=parseFloat(m):Array.isArray(m)&&g===B&&(t[c]=m.map(parseFloat))}else p!=null&&p.transform&&(g!=null&&g.transform)&&(u===0||m===0)?u===0?d.set(g.transform(u)):t[c]=p.transform(m):(o||(a=Nj(e),o=!0),l.push(c),i[c]=i[c]!==void 0?i[c]:t[c],d.jump(m))}),l.length){const c=l.indexOf("height")>=0?window.pageYOffset:null,d=Cj(t,e,l);return a.length&&a.forEach(([u,p])=>{e.getValue(u).set(p)}),e.render(),Co&&c!==null&&window.scrollTo({top:c}),{target:d,transitionEnd:i}}else return{target:t,transitionEnd:i}};function Lj(e,t,n,i){return zj(t)?kj(e,t,n,i):{target:t,transitionEnd:i}}const Aj=(e,t,n,i)=>{const r=jj(e,t,i);return t=r.target,i=r.transitionEnd,Lj(e,t,n,i)},Zl={current:null},lg={current:!1};function Pj(){if(lg.current=!0,!!Co)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Zl.current=e.matches;e.addListener(t),t()}else Zl.current=!1}function Mj(e,t,n){const{willChange:i}=t;for(const r in t){const a=t[r],o=n[r];if(Ue(a))e.addValue(r,a),no(i)&&i.add(r);else if(Ue(o))e.addValue(r,gi(a,{owner:e})),no(i)&&i.remove(r);else if(o!==a)if(e.hasValue(r)){const l=e.getValue(r);!l.hasAnimated&&l.set(a)}else{const l=e.getStaticValue(r);e.addValue(r,gi(l!==void 0?l:a,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Wp=new WeakMap,cg=Object.keys(jr),Tj=cg.length,Zp=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],Rj=Qc.length;class Oj{constructor({parent:t,props:n,presenceContext:i,reducedMotionConfig:r,visualState:a},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>Q.render(this.render,!1,!0);const{latestValues:l,renderState:c}=a;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=t,this.props=n,this.presenceContext=i,this.depth=t?t.depth+1:0,this.reducedMotionConfig=r,this.options=o,this.isControllingVariants=Lo(n),this.isVariantNode=Zh(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:d,...u}=this.scrapeMotionValuesFromProps(n,{});for(const p in u){const m=u[p];l[p]!==void 0&&Ue(m)&&(m.set(l[p],!1),no(d)&&d.add(p))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,Wp.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),lg.current||Pj(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Zl.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Wp.delete(this.current),this.projection&&this.projection.unmount(),Tt(this.notifyUpdate),Tt(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const i=Rn.has(t),r=n.on("change",o=>{this.latestValues[t]=o,this.props.onUpdate&&Q.update(this.notifyUpdate,!1,!0),i&&this.projection&&(this.projection.isTransformDirty=!0)}),a=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{r(),a()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},i,r,a){let o,l;for(let c=0;c<Tj;c++){const d=cg[c],{isEnabled:u,Feature:p,ProjectionNode:m,MeasureLayout:g}=jr[d];m&&(o=m),u(n)&&(!this.features[d]&&p&&(this.features[d]=new p(this)),g&&(l=g))}if((this.type==="html"||this.type==="svg")&&!this.projection&&o){this.projection=new o(this.latestValues,this.parent&&this.parent.projection);const{layoutId:c,layout:d,drag:u,dragConstraints:p,layoutScroll:m,layoutRoot:g}=n;this.projection.setOptions({layoutId:c,layout:d,alwaysMeasureLayout:!!u||p&&Yn(p),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof d=="string"?d:"both",initialPromotionConfig:a,layoutScroll:m,layoutRoot:g})}return l}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):pe()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<Zp.length;i++){const r=Zp[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const a=t["on"+r];a&&(this.propEventSubscriptions[r]=this.on(r,a))}this.prevMotionValues=Mj(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const i=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(i.initial=this.props.initial),i}const n={};for(let i=0;i<Rj;i++){const r=Qc[i],a=this.props[r];(wr(a)||a===!1)&&(n[r]=a)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let i=this.values.get(t);return i===void 0&&n!==void 0&&(i=gi(n,{owner:this}),this.addValue(t,i)),i}readValue(t){var n;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:i}=this.props,r=typeof i=="string"||typeof i=="object"?(n=rd(this.props,i))===null||n===void 0?void 0:n[t]:void 0;if(i&&r!==void 0)return r;const a=this.getBaseTargetFromProps(this.props,t);return a!==void 0&&!Ue(a)?a:this.initialValues[t]!==void 0&&r===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new fd),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class dg extends Oj{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:i}){delete n[t],delete i[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...i},{transformValues:r},a){let o=J2(i,t||{},this);if(r&&(n&&(n=r(n)),i&&(i=r(i)),o&&(o=r(o))),a){Y2(this,i,o);const l=Aj(this,i,o,n);n=l.transitionEnd,i=l.target}return{transition:t,transitionEnd:n,...i}}}function Ij(e){return window.getComputedStyle(e)}class Dj extends dg{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,n){if(Rn.has(n)){const i=cd(n);return i&&i.default||0}else{const i=Ij(t),r=(Yh(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Y0(t,n)}build(t,n,i,r){Jc(t,n,i,r.transformTemplate)}scrapeMotionValuesFromProps(t,n){return id(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Ue(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,i,r){i0(t,n,i,r)}}class Fj extends dg{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Rn.has(n)){const i=cd(n);return i&&i.default||0}return n=r0.has(n)?n:Gc(n),t.getAttribute(n)}measureInstanceViewportBox(){return pe()}scrapeMotionValuesFromProps(t,n){return o0(t,n)}build(t,n,i,r){td(t,n,i,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,i,r){a0(t,n,i,r)}mount(t){this.isSVGTag=nd(t.tagName),super.mount(t)}}const Bj=(e,t)=>Xc(e)?new Fj(t,{enableHardwareAcceleration:!1}):new Dj(t,{enableHardwareAcceleration:!0}),Uj={layout:{ProjectionNode:og,MeasureLayout:J0}},Vj={...fw,...Ty,...xj,...Uj},R=$x((e,t)=>wy(e,t,Vj,Bj));function ug(){const e=x.useRef(!1);return Zc(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function $j(){const e=ug(),[t,n]=x.useState(0),i=x.useCallback(()=>{e.current&&n(t+1)},[t]);return[x.useCallback(()=>Q.postRender(i),[i]),t]}class qj extends x.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Hj({children:e,isPresent:t}){const n=x.useId(),i=x.useRef(null),r=x.useRef({width:0,height:0,top:0,left:0});return x.useInsertionEffect(()=>{const{width:a,height:o,top:l,left:c}=r.current;if(t||!i.current||!a||!o)return;i.current.dataset.motionPopId=n;const d=document.createElement("style");return document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${o}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[t]),x.createElement(qj,{isPresent:t,childRef:i,sizeRef:r},x.cloneElement(e,{ref:i}))}const Ls=({children:e,initial:t,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:a,mode:o})=>{const l=s0(Wj),c=x.useId(),d=x.useMemo(()=>({id:c,initial:t,isPresent:n,custom:r,onExitComplete:u=>{l.set(u,!0);for(const p of l.values())if(!p)return;i&&i()},register:u=>(l.set(u,!1),()=>l.delete(u))}),a?void 0:[n]);return x.useMemo(()=>{l.forEach((u,p)=>l.set(p,!1))},[n]),x.useEffect(()=>{!n&&!l.size&&i&&i()},[n]),o==="popLayout"&&(e=x.createElement(Hj,{isPresent:n},e)),x.createElement(No.Provider,{value:d},e)};function Wj(){return new Map}function Zj(e){return x.useEffect(()=>()=>e(),[])}const yn=e=>e.key||"";function Gj(e,t){e.forEach(n=>{const i=yn(n);t.set(i,n)})}function Kj(e){const t=[];return x.Children.forEach(e,n=>{x.isValidElement(n)&&t.push(n)}),t}const ke=({children:e,custom:t,initial:n=!0,onExitComplete:i,exitBeforeEnter:r,presenceAffectsLayout:a=!0,mode:o="sync"})=>{const l=x.useContext(Yc).forceRender||$j()[0],c=ug(),d=Kj(e);let u=d;const p=x.useRef(new Map).current,m=x.useRef(u),g=x.useRef(new Map).current,b=x.useRef(!0);if(Zc(()=>{b.current=!1,Gj(d,g),m.current=u}),Zj(()=>{b.current=!0,g.clear(),p.clear()}),b.current)return x.createElement(x.Fragment,null,u.map(f=>x.createElement(Ls,{key:yn(f),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:a,mode:o},f)));u=[...u];const y=m.current.map(yn),w=d.map(yn),h=y.length;for(let f=0;f<h;f++){const v=y[f];w.indexOf(v)===-1&&!p.has(v)&&p.set(v,void 0)}return o==="wait"&&p.size&&(u=[]),p.forEach((f,v)=>{if(w.indexOf(v)!==-1)return;const j=g.get(v);if(!j)return;const _=y.indexOf(v);let z=f;if(!z){const S=()=>{p.delete(v);const E=Array.from(g.keys()).filter(A=>!w.includes(A));if(E.forEach(A=>g.delete(A)),m.current=d.filter(A=>{const k=yn(A);return k===v||E.includes(k)}),!p.size){if(c.current===!1)return;l(),i&&i()}};z=x.createElement(Ls,{key:yn(j),isPresent:!1,onExitComplete:S,custom:t,presenceAffectsLayout:a,mode:o},j),p.set(v,z)}u.splice(_,0,z)}),u=u.map(f=>{const v=f.key;return p.has(v)?f:x.createElement(Ls,{key:yn(f),isPresent:!0,presenceAffectsLayout:a,mode:o},f)}),x.createElement(x.Fragment,null,p.size?u:u.map(f=>x.cloneElement(f)))};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qj=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),pg=(...e)=>e.filter((t,n,i)=>!!t&&i.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Yj={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xj=x.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:a,iconNode:o,...l},c)=>x.createElement("svg",{ref:c,...Yj,width:t,height:t,stroke:e,strokeWidth:i?Number(n)*24/Number(t):n,className:pg("lucide",r),...l},[...o.map(([d,u])=>x.createElement(d,u)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=(e,t)=>{const n=x.forwardRef(({className:i,...r},a)=>x.createElement(Xj,{ref:a,iconNode:t,className:pg(`lucide-${Qj(e)}`,i),...r}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=U("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jj=U("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=U("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=U("BrainCircuit",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=U("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=U("ChartNoAxesColumn",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ro=U("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=U("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=U("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or=U("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=U("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=U("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=U("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=U("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=U("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=U("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=U("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=U("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=U("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=U("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=U("FileCode",[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=U("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Io=U("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=U("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=U("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_=U("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=U("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=U("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=U("Microscope",[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=U("PencilLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}],["path",{d:"m15 5 3 3",key:"1w25hb"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ir=U("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=U("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=U("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=U("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=U("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=U("Shuffle",[["path",{d:"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22",key:"1wmou1"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 6h1.9c1.5 0 2.9.9 3.6 2.2",key:"10bdb2"}],["path",{d:"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8",key:"vgxac0"}],["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=U("SkipBack",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=U("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_=U("Skull",[["path",{d:"m12.5 17-.5-1-.5 1h1z",key:"3me087"}],["path",{d:"M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z",key:"1o5pge"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=U("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b_=U("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=U("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=U("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=U("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=U("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=U("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=U("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=U("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=U("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function wg(e){var t,n,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(n=wg(e[t]))&&(i&&(i+=" "),i+=n)}else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}function P(){for(var e,t,n=0,i="",r=arguments.length;n<r;n++)(e=arguments[n])&&(t=wg(e))&&(i&&(i+=" "),i+=t);return i}const j_={},Kp=e=>{let t;const n=new Set,i=(u,p)=>{const m=typeof u=="function"?u(t):u;if(!Object.is(m,t)){const g=t;t=p??(typeof m!="object"||m===null)?m:Object.assign({},t,m),n.forEach(b=>b(t,g))}},r=()=>t,c={setState:i,getState:r,getInitialState:()=>d,subscribe:u=>(n.add(u),()=>n.delete(u)),destroy:()=>{(j_?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},d=t=e(i,r,c);return c},__=e=>e?Kp(e):Kp;var jg={exports:{}},_g={},zg={exports:{}},Sg={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bi=x;function z_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var S_=typeof Object.is=="function"?Object.is:z_,E_=bi.useState,N_=bi.useEffect,C_=bi.useLayoutEffect,k_=bi.useDebugValue;function L_(e,t){var n=t(),i=E_({inst:{value:n,getSnapshot:t}}),r=i[0].inst,a=i[1];return C_(function(){r.value=n,r.getSnapshot=t,As(r)&&a({inst:r})},[e,n,t]),N_(function(){return As(r)&&a({inst:r}),e(function(){As(r)&&a({inst:r})})},[e]),k_(n),n}function As(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!S_(e,n)}catch{return!0}}function A_(e,t){return t()}var P_=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?A_:L_;Sg.useSyncExternalStore=bi.useSyncExternalStore!==void 0?bi.useSyncExternalStore:P_;zg.exports=Sg;var M_=zg.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uo=x,T_=M_;function R_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var O_=typeof Object.is=="function"?Object.is:R_,I_=T_.useSyncExternalStore,D_=Uo.useRef,F_=Uo.useEffect,B_=Uo.useMemo,U_=Uo.useDebugValue;_g.useSyncExternalStoreWithSelector=function(e,t,n,i,r){var a=D_(null);if(a.current===null){var o={hasValue:!1,value:null};a.current=o}else o=a.current;a=B_(function(){function c(g){if(!d){if(d=!0,u=g,g=i(g),r!==void 0&&o.hasValue){var b=o.value;if(r(b,g))return p=b}return p=g}if(b=p,O_(u,g))return b;var y=i(g);return r!==void 0&&r(b,y)?(u=g,b):(u=g,p=y)}var d=!1,u,p,m=n===void 0?null:n;return[function(){return c(t())},m===null?void 0:function(){return c(m())}]},[t,n,i,r]);var l=I_(e,a[0],a[1]);return F_(function(){o.hasValue=!0,o.value=l},[l]),U_(l),l};jg.exports=_g;var V_=jg.exports;const $_=xm(V_),Eg={},{useDebugValue:q_}=dt,{useSyncExternalStoreWithSelector:H_}=$_;let Qp=!1;const W_=e=>e;function Z_(e,t=W_,n){(Eg?"production":void 0)!=="production"&&n&&!Qp&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Qp=!0);const i=H_(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return q_(i),i}const Yp=e=>{(Eg?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?__(e):e,n=(i,r)=>Z_(t,i,r);return Object.assign(n,t),n},Ng=e=>e?Yp(e):Yp,G_={};function K_(e,t){let n;try{n=e()}catch{return}return{getItem:r=>{var a;const o=c=>c===null?null:JSON.parse(c,void 0),l=(a=n.getItem(r))!=null?a:null;return l instanceof Promise?l.then(o):o(l)},setItem:(r,a)=>n.setItem(r,JSON.stringify(a,void 0)),removeItem:r=>n.removeItem(r)}}const zr=e=>t=>{try{const n=e(t);return n instanceof Promise?n:{then(i){return zr(i)(n)},catch(i){return this}}}catch(n){return{then(i){return this},catch(i){return zr(i)(n)}}}},Q_=(e,t)=>(n,i,r)=>{let a={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:w=>w,version:0,merge:(w,h)=>({...h,...w}),...t},o=!1;const l=new Set,c=new Set;let d;try{d=a.getStorage()}catch{}if(!d)return e((...w)=>{console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),n(...w)},i,r);const u=zr(a.serialize),p=()=>{const w=a.partialize({...i()});let h;const f=u({state:w,version:a.version}).then(v=>d.setItem(a.name,v)).catch(v=>{h=v});if(h)throw h;return f},m=r.setState;r.setState=(w,h)=>{m(w,h),p()};const g=e((...w)=>{n(...w),p()},i,r);let b;const y=()=>{var w;if(!d)return;o=!1,l.forEach(f=>f(i()));const h=((w=a.onRehydrateStorage)==null?void 0:w.call(a,i()))||void 0;return zr(d.getItem.bind(d))(a.name).then(f=>{if(f)return a.deserialize(f)}).then(f=>{if(f)if(typeof f.version=="number"&&f.version!==a.version){if(a.migrate)return a.migrate(f.state,f.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return f.state}).then(f=>{var v;return b=a.merge(f,(v=i())!=null?v:g),n(b,!0),p()}).then(()=>{h==null||h(b,void 0),o=!0,c.forEach(f=>f(b))}).catch(f=>{h==null||h(void 0,f)})};return r.persist={setOptions:w=>{a={...a,...w},w.getStorage&&(d=w.getStorage())},clearStorage:()=>{d==null||d.removeItem(a.name)},getOptions:()=>a,rehydrate:()=>y(),hasHydrated:()=>o,onHydrate:w=>(l.add(w),()=>{l.delete(w)}),onFinishHydration:w=>(c.add(w),()=>{c.delete(w)})},y(),b||g},Y_=(e,t)=>(n,i,r)=>{let a={storage:K_(()=>localStorage),partialize:y=>y,version:0,merge:(y,w)=>({...w,...y}),...t},o=!1;const l=new Set,c=new Set;let d=a.storage;if(!d)return e((...y)=>{console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),n(...y)},i,r);const u=()=>{const y=a.partialize({...i()});return d.setItem(a.name,{state:y,version:a.version})},p=r.setState;r.setState=(y,w)=>{p(y,w),u()};const m=e((...y)=>{n(...y),u()},i,r);r.getInitialState=()=>m;let g;const b=()=>{var y,w;if(!d)return;o=!1,l.forEach(f=>{var v;return f((v=i())!=null?v:m)});const h=((w=a.onRehydrateStorage)==null?void 0:w.call(a,(y=i())!=null?y:m))||void 0;return zr(d.getItem.bind(d))(a.name).then(f=>{if(f)if(typeof f.version=="number"&&f.version!==a.version){if(a.migrate)return[!0,a.migrate(f.state,f.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,f.state];return[!1,void 0]}).then(f=>{var v;const[j,_]=f;if(g=a.merge(_,(v=i())!=null?v:m),n(g,!0),j)return u()}).then(()=>{h==null||h(g,void 0),g=i(),o=!0,c.forEach(f=>f(g))}).catch(f=>{h==null||h(void 0,f)})};return r.persist={setOptions:y=>{a={...a,...y},y.storage&&(d=y.storage)},clearStorage:()=>{d==null||d.removeItem(a.name)},getOptions:()=>a,rehydrate:()=>b(),hasHydrated:()=>o,onHydrate:y=>(l.add(y),()=>{l.delete(y)}),onFinishHydration:y=>(c.add(y),()=>{c.delete(y)})},a.skipHydration||b(),g||m},X_=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?((G_?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),Q_(e,t)):Y_(e,t),Cg=X_,J_=["ft_strlen","ft_swap","ft_putstr","ft_strcpy","fizzbuzz","first_word","rev_print","rotone","rot_13","repeat_alpha","search_and_replace","ulstr","alpha_mirror","camel_to_snake","do_op","ft_atoi","ft_strcmp","ft_strcspn","ft_strdup","ft_strpbrk","ft_strrev","inter","is_power_of_2","last_word","print_bits","reverse_bits","swap_bits","union","wdmatch","paramsum","tab_mult","epur_str","expand_str","add_prime_sum","ft_range","ft_rrange","ft_list_size","hidenp","lcm","pgcd","print_hex","ft_atoi_base","str_capitalizer","rstr_capitalizer","fprime","ft_split","sort_list"];function ez(){return{estado:"no_iniciado",testsPasados:0,testsTotal:0,intentos:0,ultimaVez:null,proximaRepasion:null,intervaloDias:1,notas:""}}function tz(){return Object.fromEntries(J_.map(e=>[e,ez()]))}const Xp=[1,3,7,14,30];function nz(e,t){const n=t?Math.min(e,Xp.length-1):0,i=Xp[n],r=new Date;return r.setDate(r.getDate()+i),{proximaRepasion:r.toISOString(),intervaloDias:i}}const xe=Ng(Cg((e,t)=>({ejercicios:tz(),racha:0,totalSesiones:0,ultimaSesion:null,examenes:[],marcarEstado:(n,i)=>e(r=>({ejercicios:{...r.ejercicios,[n]:{...r.ejercicios[n],estado:i,ultimaVez:new Date().toISOString()}}})),registrarIntento:(n,i)=>e(r=>{const a=r.ejercicios[n],o=(a.intentos??0)+1,l=i?a.testsTotal:a.testsPasados,{proximaRepasion:c,intervaloDias:d}=nz(o,i),u=i&&o>=3?"dominado":"practicando";return{ejercicios:{...r.ejercicios,[n]:{...a,intentos:o,testsPasados:l,estado:u,ultimaVez:new Date().toISOString(),proximaRepasion:c,intervaloDias:d}}}}),actualizarNotas:(n,i)=>e(r=>({ejercicios:{...r.ejercicios,[n]:{...r.ejercicios[n],notas:i}}})),guardarExamen:n=>e(i=>({examenes:[n,...i.examenes].slice(0,10),totalSesiones:i.totalSesiones+1,ultimaSesion:new Date().toISOString()})),getEjerciciosParaRepasar:()=>{const{ejercicios:n}=t(),i=new Date;return Object.entries(n).filter(([,r])=>r.proximaRepasion&&new Date(r.proximaRepasion)<=i).map(([r])=>r)},getTotalDominados:()=>{const{ejercicios:n}=t();return Object.values(n).filter(i=>i.estado==="dominado").length}}),{name:"42prep-progress",version:1})),iz={id:"ft_strlen",nombre:"ft_strlen",nivel:1,dificultad:"fácil",tipoEntrega:"funcion",archivosEsperados:["ft_strlen.c"],funcionesPermitidas:[],subject:`Assignment name  : ft_strlen
Expected files   : ft_strlen.c
Allowed functions: none
--------------------------------------------------------------------------------

Write a function that returns the length of a string.

int	ft_strlen(char *str);`,descripcion:"Función que recorre el string carácter a carácter hasta encontrar el \\0 y devuelve el número de posiciones contadas.",palacio:{habitacion:"cocina",mueble:"nevera",personaje:"El Alien Elástico",emoji:"👽",historia:`En la nevera vive el Alien Elástico que se ESTIRA por el string.
Cada celda que toca suma +1 a su contador interno.
Cuando toca al Fantasma Cero (\\0) se CONGELA al instante y no avanza más.
El número que tenía en ese momento = la longitud del string.
Ancla mental: el alien NUNCA cuenta al fantasma, solo se detiene ante él.`,anclas:["while(str[i])  ← para en el \\0","i++  ← avanza y cuenta","return(i)  ← el total","el \\0 congela al alien, no se cuenta","off-by-one: devolver i, no i-1"]},herramientas:["strings"],formulaClave:{descripcion:"Cuenta caracteres hasta el terminador nulo",formula:"i = 0; while (str[i]) i++; return (i);",ejemplo:{entrada:'"hello"',calculo:"h(i=1) e(i=2) l(i=3) l(i=4) o(i=5) \\0 → STOP",resultado:"5"}},versiones:[{id:"clasica",nombre:"Clásica (índice i)",descripcion:"La más legible y la más segura en el examen.",recomendada:!0,codigo:`int	ft_strlen(char *str)
{
	int	i;

	i = 0;
	while (str[i])
		i++;
	return (i);
}`},{id:"puntero",nombre:"Con puntero auxiliar",descripcion:"Avanza un puntero y devuelve la diferencia. Más idiomático en C puro.",recomendada:!1,codigo:`int	ft_strlen(char *str)
{
	char	*p;

	p = str;
	while (*p)
		p++;
	return (p - str);
}`}],tests:[{id:"test_vacio",descripcion:"String vacío → 0",entrada:[""],salida:`0
`,tipo:"edge"},{id:"test_hello",descripcion:'"hello" → 5',entrada:["hello"],salida:`5
`,tipo:"normal"},{id:"test_1char",descripcion:'"a" → 1',entrada:["a"],salida:`1
`,tipo:"normal"},{id:"test_espacio",descripcion:'"hello world" incluye espacio → 11',entrada:["hello world"],salida:`11
`,tipo:"normal"},{id:"test_numeros",descripcion:'"42" → 2',entrada:["42"],salida:`2
`,tipo:"normal"},{id:"test_largo",descripcion:'"abcdefghij" → 10',entrada:["abcdefghij"],salida:`10
`,tipo:"normal"}],gdbSteps:[{paso:1,titulo:'Inicio: str = "hello"',codigo:`(gdb) break ft_strlen
(gdb) run
Breakpoint 1, ft_strlen (str=0x... "hello") at ft_strlen.c:3
3		int i;`,variables:[{nombre:"str",valor:'"hello"',cambio:!0,nota:"Puntero al string"},{nombre:"i",valor:"?",cambio:!1,nota:"Sin inicializar"}]},{paso:2,titulo:"i = 0, comienza el while",codigo:`(gdb) next
5		i = 0;
(gdb) next
6		while (str[i])  → str[0]='h' ≠ '\\0', ENTRA`,variables:[{nombre:"i",valor:"0",cambio:!0,nota:'→ apunta a "h"'},{nombre:"str[0]",valor:"'h' (104)",cambio:!1,nota:"≠ \\0 → entra"}]},{paso:3,titulo:"Iteración 1-4: h, e, l, l → i = 4",codigo:`[i=0] str[0]='h' ≠ '\\0' → i++ → i=1
[i=1] str[1]='e' ≠ '\\0' → i++ → i=2
[i=2] str[2]='l' ≠ '\\0' → i++ → i=3
[i=3] str[3]='l' ≠ '\\0' → i++ → i=4`,variables:[{nombre:"i",valor:"4",cambio:!0,nota:"Cuatro chars contados"}]},{paso:4,titulo:'Iteración 5: "o" → i = 5',codigo:`(gdb) next
6		while (str[i])  → str[4]='o' ≠ '\\0', ENTRA
7			i++;          → i = 5`,variables:[{nombre:"i",valor:"5",cambio:!0,nota:""},{nombre:"str[4]",valor:"'o' (111)",cambio:!1,nota:""}]},{paso:5,titulo:"El Fantasma Cero \\0 → PARA",codigo:`(gdb) next
6		while (str[i])  → str[5]='\\0' = 0 → FALSE, sale del while`,variables:[{nombre:"str[5]",valor:"'\\0' (0)",cambio:!1,nota:"← El Fantasma Cero congela al alien"},{nombre:"i",valor:"5",cambio:!1,nota:"No incrementa para \\0"}]},{paso:6,titulo:"return (i) = 5",codigo:`(gdb) next
8		return (i);
(gdb) finish
Value returned is $1 = 5`,variables:[{nombre:"i",valor:"5",cambio:!1,nota:"✓ Longitud correcta"},{nombre:"retorno",valor:"5",cambio:!0,nota:'"hello" tiene 5 caracteres'}]}],trampas:[{severidad:"mortal",titulo:"return (i - 1) — off-by-one",descripcion:'Al salir del while, i ya apunta al \\0 (no lo cuenta). Devolver i-1 daría 4 para "hello".',codigoMal:`// ❌ Off-by-one
while (str[i])
    i++;
return (i - 1); // 'hello' → 4, FALLA`,codigoBien:`// ✅
while (str[i])
    i++;
return (i);     // 'hello' → 5, CORRECTO`},{severidad:"mortal",titulo:"Usar strlen() en vez de implementarla",descripcion:"strlen() no está en la lista de funciones permitidas. La Moulinette compila con -lboundscheck y detecta si usas funciones no permitidas.",codigoMal:`// ❌ Prohibido
#include <string.h>
int ft_strlen(char *str) {
    return strlen(str); // función externa, no permitida
}`,codigoBien:`// ✅ Implementación propia
int ft_strlen(char *str) {
    int i = 0;
    while (str[i])
        i++;
    return (i);
}`},{severidad:"warning",titulo:"No inicializar i = 0",descripcion:"Sin i = 0, i tiene valor basura. El comportamiento es indefinido.",codigoMal:`int i; // ❌ valor basura
while (str[i]) i++;`,codigoBien:`int i;
i = 0;         // ✅ siempre inicializar
while (str[i]) i++;`}],bajoCelCapot:`La memoria de "hello" en C: [h][e][l][l][o][\\0]
                                              ↑ str apunta aquí al inicio
Cada char ocupa 1 byte. str[i] es equivalente a *(str + i).
El while evalúa el valor del char: 0 (falsy) = \\0 = FIN.`,estrategia:"MEMORIZAR",razonEstrategia:"Patrón clásico de recorrido de string. Se usa en ft_strcpy, ft_strdup, ft_strcmp...",relacionados:["ft_strcpy","ft_putstr","ft_strdup"]},rz={id:"ft_swap",nombre:"ft_swap",nivel:1,dificultad:"fácil",tipoEntrega:"funcion",archivosEsperados:["ft_swap.c"],funcionesPermitidas:[],subject:`Assignment name  : ft_swap
Expected files   : ft_swap.c
Allowed functions: none
--------------------------------------------------------------------------------

Write a function that swaps the contents of two integers whose addresses
are given as parameters.

void	ft_swap(int *a, int *b);`,descripcion:"Función que intercambia los valores de dos enteros usando sus direcciones de memoria. Requiere una variable temporal.",palacio:{habitacion:"cocina",mueble:"fregadero",personaje:"El Sapo Mago",emoji:"🧙",historia:`Junto al fregadero vive el Sapo Mago con su varita-estrella.
Tiene que intercambiar el agua de dos vasos (A y B).
Para hacerlo necesita UN TERCER VASO VACÍO (int tmp).
Ritual: 1) Vierte A en tmp. 2) Vierte B en A. 3) Vierte tmp en B.
¡Sin el vaso vacío es un DESASTRE (segfault o pérdida de datos)!`,anclas:["int tmp = *a  ← guarda A en el vaso vacío","*a = *b  ← vierte B donde estaba A","*b = tmp  ← vierte el vaso en B","TMP es int, no int* (¡sin puntero!)","sin tmp → catástrofe: perderías A"]},herramientas:["strings"],formulaClave:{descripcion:"Swap clásico con variable temporal",formula:"tmp = *a; *a = *b; *b = tmp;",ejemplo:{entrada:"a=3, b=7",calculo:"tmp=3 → *a=7 → *b=3",resultado:"a=7, b=3"}},versiones:[{id:"clasica",nombre:"Clásica con tmp",descripcion:"La única versión válida en el examen de 42. Clara y sin UB.",recomendada:!0,codigo:`void	ft_swap(int *a, int *b)
{
	int	tmp;

	tmp = *a;
	*a = *b;
	*b = tmp;
}`},{id:"xor",nombre:"XOR swap (solo informativo)",descripcion:"Usa XOR para intercambiar sin variable temporal. NO usar: poco legible, falla si a==b (mismo puntero).",recomendada:!1,codigo:`// ⚠️ Solo informativo — NO usar en el examen
void	ft_swap(int *a, int *b)
{
	*a ^= *b;
	*b ^= *a;
	*a ^= *b;
}`}],tests:[{id:"test_normal",descripcion:"3 y 7 → quedan 7 y 3",entrada:["3","7"],salida:`Antes:  a = 3, b = 7
Después: a = 7, b = 3
`,tipo:"normal"},{id:"test_ceros",descripcion:"0 y 0 → siguen siendo 0 y 0",entrada:["0","0"],salida:`Antes:  a = 0, b = 0
Después: a = 0, b = 0
`,tipo:"edge"},{id:"test_negativos",descripcion:"-1 y 5 → quedan 5 y -1",entrada:["-1","5"],salida:`Antes:  a = -1, b = 5
Después: a = 5, b = -1
`,tipo:"normal"},{id:"test_grandes",descripcion:"100 y -100 → quedan -100 y 100",entrada:["100","-100"],salida:`Antes:  a = 100, b = -100
Después: a = -100, b = 100
`,tipo:"normal"}],gdbSteps:[{paso:1,titulo:"Inicio: a=&3, b=&7",codigo:`(gdb) break ft_swap
(gdb) run
Breakpoint 1, ft_swap (a=0x7fffe10, b=0x7fffe14) at ft_swap.c:3
3		int tmp;`,variables:[{nombre:"*a",valor:"3",cambio:!1,nota:"Valor en la dirección a"},{nombre:"*b",valor:"7",cambio:!1,nota:"Valor en la dirección b"},{nombre:"tmp",valor:"?",cambio:!1,nota:"Sin inicializar"}]},{paso:2,titulo:"tmp = *a → guarda 3 en el vaso",codigo:`(gdb) next
5		tmp = *a;
(gdb) next
6		*a = *b;  ← siguiente línea`,variables:[{nombre:"tmp",valor:"3",cambio:!0,nota:"← El vaso guarda A"},{nombre:"*a",valor:"3",cambio:!1,nota:"Aún sin cambiar"},{nombre:"*b",valor:"7",cambio:!1,nota:""}]},{paso:3,titulo:"*a = *b → pone 7 en la dirección de A",codigo:`(gdb) next
7		*b = tmp;
(gdb) print *a
$1 = 7`,variables:[{nombre:"*a",valor:"7",cambio:!0,nota:"← Ahora A tiene el valor de B"},{nombre:"*b",valor:"7",cambio:!1,nota:"Aún sin cambiar"},{nombre:"tmp",valor:"3",cambio:!1,nota:"Sigue guardando el viejo A"}]},{paso:4,titulo:"*b = tmp → pone 3 en la dirección de B",codigo:`(gdb) next
8		}
(gdb) print *b
$2 = 3`,variables:[{nombre:"*b",valor:"3",cambio:!0,nota:"← Ahora B tiene el viejo valor de A"},{nombre:"*a",valor:"7",cambio:!1,nota:"✓ Correcto"},{nombre:"tmp",valor:"3",cambio:!1,nota:"Ya no es necesario"}]},{paso:5,titulo:"Swap completado — resultado",codigo:`(gdb) finish
// Antes:  a=3, b=7
// Después: a=7, b=3  ← ¡Intercambiados!`,variables:[{nombre:"*a",valor:"7",cambio:!1,nota:"✓ Antes era 3"},{nombre:"*b",valor:"3",cambio:!1,nota:"✓ Antes era 7"}]}],trampas:[{severidad:"mortal",titulo:"int *tmp en vez de int tmp → segfault",descripcion:"Si declaras int *tmp (puntero), tmp es una dirección sin inicializar. Desreferenciarla (*tmp = *a) es un acceso a memoria inválida → segfault inmediato.",codigoMal:`// ❌ int *tmp es un puntero que apunta a basura
void ft_swap(int *a, int *b) {
    int *tmp;      // apunta a dirección aleatoria
    *tmp = *a;     // ← SEGFAULT: escribe en memoria aleatoria
    *a = *b;
    *b = *tmp;
}`,codigoBien:`// ✅ int tmp es un entero normal, el "vaso vacío"
void ft_swap(int *a, int *b) {
    int tmp;       // entero normal
    tmp = *a;      // guarda el valor
    *a = *b;
    *b = tmp;
}`},{severidad:"mortal",titulo:"No usar * al desreferenciar — modifica el puntero, no el valor",descripcion:"a = b cambia el puntero local a para que apunte a b. No cambia los valores. El caller no ve ningún cambio.",codigoMal:`// ❌ Cambia los punteros locales, no los valores
void ft_swap(int *a, int *b) {
    int *tmp;
    tmp = a;   // tmp apunta al mismo sitio que a
    a = b;     // a apunta al mismo sitio que b
    b = tmp;   // b apunta al mismo sitio que tmp
    // Los valores *a y *b NO han cambiado
}`,codigoBien:`// ✅ Cambia los valores en memoria
void ft_swap(int *a, int *b) {
    int tmp;
    tmp = *a;  // dereferenciar para obtener el valor
    *a = *b;
    *b = tmp;
}`},{severidad:"warning",titulo:"No comprobar punteros NULL",descripcion:"ft_swap(NULL, &b) provocará segfault. En 42 el sujeto no suele pedir manejo de NULL para funciones básicas, pero es buena práctica saberlo.",codigoMal:`// ❌ Sin protección
void ft_swap(int *a, int *b) {
    int tmp = *a; // crash si a es NULL`,codigoBien:`// ✅ Con protección (si el sujeto lo permite)
void ft_swap(int *a, int *b) {
    int tmp;
    if (!a || !b) return;
    tmp = *a; *a = *b; *b = tmp;
}`}],bajoCelCapot:`Memoria: a y b son punteros (direcciones de memoria de 8 bytes en 64 bits).
*a y *b acceden al entero (4 bytes) que vive en esas direcciones.
tmp vive en el stack frame de ft_swap.
Tras el return, tmp desaparece — el swap queda en memoria del caller.`,estrategia:"MEMORIZAR",razonEstrategia:"Patrón de swap más fundamental. Aparece en sort, en ft_sort_int_tab, y en cualquier algoritmo de ordenación.",relacionados:["ft_strcpy","ft_range"]},az={id:"ft_putstr",nombre:"ft_putstr",nivel:1,dificultad:"fácil",tipoEntrega:"funcion",archivosEsperados:["ft_putstr.c"],funcionesPermitidas:["write"],subject:`Assignment name  : ft_putstr
Expected files   : ft_putstr.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a function that displays a string on the standard output.

void	ft_putstr(char *str);`,descripcion:"Función que escribe un string en la salida estándar usando write(). NO añade \\n al final — escribe exactamente los bytes del string.",palacio:{habitacion:"cocina",mueble:"ventana",personaje:"La Tele que grita letras",emoji:"📺",historia:`En la ventana hay una Tele mágica que grita letras.
Le das un string y ella grita CADA LETRA una a una usando write().
Para al llegar al Fantasma Cero (\\0) — no lo grita.
NUNCA añade un newline al final: lo que le das, lo grita SIN AÑADIR NADA.
Fórmula: while(str[i]) { write(1, &str[i], 1); i++; }`,anclas:["write(1, &str[i], 1)  ← un byte a la vez","while (str[i])  ← para en el \\0","SIN \\n al final — ft_putstr NO añade newline","i = 0; antes del while","tamaño 1 en write ← solo UN carácter"]},herramientas:["strings"],formulaClave:{descripcion:"Escribe cada byte del string con write()",formula:"write(1, &str[i], 1)",ejemplo:{entrada:'"hello"',calculo:"write h, write e, write l, write l, write o → para en \\0",resultado:"stdout: hello  (sin newline)"}},versiones:[{id:"clasica",nombre:"Clásica con índice",descripcion:"La más legible en el examen.",recomendada:!0,codigo:`#include <unistd.h>

void	ft_putstr(char *str)
{
	int	i;

	i = 0;
	while (str[i])
	{
		write(1, &str[i], 1);
		i++;
	}
}`},{id:"puntero",nombre:"Con puntero",descripcion:"Avanza el puntero directamente. Equivalente pero menos explícita.",recomendada:!1,codigo:`#include <unistd.h>

void	ft_putstr(char *str)
{
	while (*str)
		write(1, str++, 1);
}`},{id:"write_total",nombre:"Write de todo de una vez",descripcion:"Más eficiente pero requiere ft_strlen. No válida sin strlen disponible.",recomendada:!1,codigo:`#include <unistd.h>

void	ft_putstr(char *str)
{
	write(1, str, ft_strlen(str));
}`}],tests:[{id:"test_con_newline",descripcion:"String que ya incluye \\n — ft_putstr lo escribe tal cual",entrada:[`hello
`],salida:`hello
`,tipo:"normal"},{id:"test_mundo",descripcion:'"mundo\\n" → lo escribe exacto',entrada:[`mundo
`],salida:`mundo
`,tipo:"normal"},{id:"test_42",descripcion:'"42\\n" → escribe 42 y newline',entrada:[`42
`],salida:`42
`,tipo:"normal"},{id:"test_vacio",descripcion:"String vacío → no escribe nada",entrada:[""],salida:"",tipo:"edge"}],gdbSteps:[{paso:1,titulo:'Inicio: str = "hello\\n"',codigo:`(gdb) break ft_putstr
(gdb) run
Breakpoint 1, ft_putstr (str=0x... "hello\\n") at ft_putstr.c:3
3		int i;`,variables:[{nombre:"str",valor:'"hello\\n"',cambio:!0,nota:"Puntero al string"},{nombre:"i",valor:"?",cambio:!1,nota:"Sin inicializar"}]},{paso:2,titulo:'i = 0, entra al while: str[0]="h"',codigo:`(gdb) next
5		i = 0;
(gdb) next
6		while (str[i])  → str[0]='h' ≠ '\\0', ENTRA`,variables:[{nombre:"i",valor:"0",cambio:!0,nota:""},{nombre:"str[0]",valor:"'h'",cambio:!1,nota:""}]},{paso:3,titulo:'write(1, &str[0], 1) → escribe "h"',codigo:`(gdb) next
7			write(1, &str[i], 1);  → stdout: "h"
(gdb) next
8			i++;                   → i=1`,variables:[{nombre:"i",valor:"1",cambio:!0,nota:""},{nombre:"stdout",valor:'"h"',cambio:!0,nota:"1 byte escrito"}]},{paso:4,titulo:"Iteraciones e, l, l, o → i = 5",codigo:`[i=1] write 'e' → stdout: "he"
[i=2] write 'l' → stdout: "hel"
[i=3] write 'l' → stdout: "hell"
[i=4] write 'o' → stdout: "hello"
i → 5`,variables:[{nombre:"i",valor:"5",cambio:!0,nota:""},{nombre:"stdout",valor:'"hello"',cambio:!0,nota:""}]},{paso:5,titulo:'write "\\n" → i = 6',codigo:`[i=5] write '\\n' → stdout: "hello\\n"
i → 6`,variables:[{nombre:"i",valor:"6",cambio:!0,nota:""},{nombre:"stdout",valor:'"hello\\n"',cambio:!0,nota:"El \\n viene del string, no lo añade ft_putstr"}]},{paso:6,titulo:"str[6] = \\0 → sale del while, return",codigo:`while (str[6]) → '\\0' = 0 → FALSE, sale
// ft_putstr NO añade \\n extra
(gdb) finish`,variables:[{nombre:"str[6]",valor:"'\\0'",cambio:!1,nota:"← Para el while"},{nombre:"stdout total",valor:'"hello\\n"',cambio:!1,nota:"✓ Exactamente lo que contenía el string"}]}],trampas:[{severidad:"mortal",titulo:"Añadir \\n al final — ft_putstr NO es puts()",descripcion:"puts() añade \\n automáticamente. ft_putstr NO lo hace. Si añades un write extra de \\n, la Moulinette fallará cuando el string no debe terminar en \\n.",codigoMal:`// ❌ Añade \\n extra — falla la Moulinette
void ft_putstr(char *str) {
    int i = 0;
    while (str[i])
        write(1, &str[i++], 1);
    write(1, "\\n", 1); // ← EXTRA, no pedido
}`,codigoBien:`// ✅ Solo los bytes del string
void ft_putstr(char *str) {
    int i = 0;
    while (str[i])
        write(1, &str[i++], 1);
    // sin write extra
}`},{severidad:"mortal",titulo:"Usar printf() en vez de write()",descripcion:"printf no está en la lista de funciones permitidas. Solo write() está permitido.",codigoMal:`// ❌ printf no está permitida
void ft_putstr(char *str) {
    printf("%s", str);
}`,codigoBien:`// ✅ Solo write, byte a byte
void ft_putstr(char *str) {
    int i = 0;
    while (str[i])
        write(1, &str[i++], 1);
}`},{severidad:"warning",titulo:"write(1, str, ft_strlen(str)) sin incluir ft_strlen",descripcion:"write() de todo el string de una vez es eficiente, pero requiere ft_strlen disponible en el mismo archivo o como cabecera.",codigoMal:`// ❌ ft_strlen no está declarada aquí
void ft_putstr(char *str) {
    write(1, str, ft_strlen(str)); // error de compilación
}`,codigoBien:`// ✅ Escribe byte a byte — siempre compila
void ft_putstr(char *str) {
    int i = 0;
    while (str[i])
        write(1, &str[i++], 1);
}`}],bajoCelCapot:`write(1, &str[i], 1):
  - 1 = file descriptor: stdout
  - &str[i] = dirección del byte a escribir
  - 1 = número de bytes a escribir
La llamada al sistema escribe directamente sin buffering (a diferencia de printf).`,estrategia:"MEMORIZAR",razonEstrategia:"Base de todas las funciones de output. ft_putstr + ft_putchar + ft_putnbr forman el kit básico de 42.",relacionados:["ft_strlen","ft_strcpy"]},oz={id:"ft_strcpy",nombre:"ft_strcpy",nivel:1,dificultad:"fácil",tipoEntrega:"funcion",archivosEsperados:["ft_strcpy.c"],funcionesPermitidas:[],subject:`Assignment name  : ft_strcpy
Expected files   : ft_strcpy.c
Allowed functions: none
--------------------------------------------------------------------------------

Reproduce the behavior of the function strcpy (man strcpy).

char	*ft_strcpy(char *dest, char *src);`,descripcion:"Función que copia el string src en dest (incluyendo el \\0 final) y devuelve dest. dest debe tener espacio suficiente para contener src.",palacio:{habitacion:"cocina",mueble:"alacena",personaje:"La Fotocopiadora de recetas",emoji:"🖨️",historia:`En la alacena hay una Fotocopiadora de recetas mágica.
Le das el original (src) y el papel en blanco (dest).
Copia LETRA a LETRA: dest[i] = src[i].
Cuando llega al Fantasma Cero (\\0) lo copia también (¡es obligatorio!) y para.
Al final devuelve dest — el papel ya relleno.
¡El papel debe ser LO BASTANTE GRANDE antes de copiar!`,anclas:["dest[i] = src[i]  ← copia byte a byte","copiar el \\0 final  ← OBLIGATORIO","return (dest)  ← devuelve destino","i = 0; antes del while","dest debe tener espacio: sin malloc aquí"]},herramientas:["strings"],formulaClave:{descripcion:"Copia cada byte de src a dest incluyendo el \\0",formula:"while ((dest[i] = src[i])) i++;",ejemplo:{entrada:'src = "hello"',calculo:"h→h e→e l→l l→l o→o \\0→\\0",resultado:'dest = "hello"\\0, retorna dest'}},versiones:[{id:"clasica",nombre:"Clásica con while + índice",descripcion:"La más legible y segura. Copia explícitamente el \\0 fuera del bucle.",recomendada:!0,codigo:`char	*ft_strcpy(char *dest, char *src)
{
	int	i;

	i = 0;
	while (src[i])
	{
		dest[i] = src[i];
		i++;
	}
	dest[i] = '\\0';
	return (dest);
}`},{id:"compacta",nombre:"Compacta (asignación en while)",descripcion:"La condición del while asigna y comprueba en la misma expresión. Copia el \\0 automáticamente.",recomendada:!1,codigo:`char	*ft_strcpy(char *dest, char *src)
{
	int	i;

	i = 0;
	while ((dest[i] = src[i]))
		i++;
	return (dest);
}`},{id:"puntero",nombre:"Con punteros",descripcion:"Avanza punteros directamente. Compacta pero menos legible bajo presión.",recomendada:!1,codigo:`char	*ft_strcpy(char *dest, char *src)
{
	char	*start;

	start = dest;
	while ((*dest++ = *src++))
		;
	return (start);
}`}],tests:[{id:"test_hello",descripcion:'Copia "hello" → "hello"',entrada:["hello"],salida:`hello
`,tipo:"normal"},{id:"test_vacio",descripcion:'Copia "" → ""',entrada:[""],salida:`
`,tipo:"edge"},{id:"test_espacio",descripcion:'Copia "Hello World" con espacio',entrada:["Hello World"],salida:`Hello World
`,tipo:"normal"},{id:"test_simbolos",descripcion:'Copia "abc123!" — mezcla de chars',entrada:["abc123!"],salida:`abc123!
`,tipo:"normal"},{id:"test_1char",descripcion:'Copia "x" — un solo carácter',entrada:["x"],salida:`x
`,tipo:"normal"}],gdbSteps:[{paso:1,titulo:'Inicio: src="hello", dest=buffer[10]',codigo:`(gdb) break ft_strcpy
(gdb) run
Breakpoint 1, ft_strcpy (dest=0x..., src=0x... "hello") at ft_strcpy.c:3
3		int i;`,variables:[{nombre:"src",valor:'"hello"',cambio:!1,nota:"Cadena origen"},{nombre:"dest",valor:"[basura]",cambio:!1,nota:"Buffer destino sin inicializar"},{nombre:"i",valor:"?",cambio:!1,nota:""}]},{paso:2,titulo:"i=0 → copia h: dest[0] = src[0]",codigo:`i = 0
while (src[0])  → 'h' ≠ '\\0' → ENTRA
dest[0] = src[0];  // 'h'
i++;               // i=1`,variables:[{nombre:"i",valor:"0 → 1",cambio:!0,nota:""},{nombre:"dest[0]",valor:"'h'",cambio:!0,nota:"Primer byte copiado"}]},{paso:3,titulo:"Copia e, l, l, o → i=5",codigo:`[i=1] dest[1]='e'
[i=2] dest[2]='l'
[i=3] dest[3]='l'
[i=4] dest[4]='o'
i = 5`,variables:[{nombre:"i",valor:"5",cambio:!0,nota:""},{nombre:"dest",valor:'"hello"...',cambio:!0,nota:"5 bytes copiados, falta el \\0"}]},{paso:4,titulo:"src[5] = \\0 → sale del while",codigo:`while (src[5])  → '\\0' = 0 → FALSE, sale
// Fuera del bucle: ahora copia el \\0
dest[5] = '\\0';`,variables:[{nombre:"src[5]",valor:"'\\0'",cambio:!1,nota:"← Termina el while"},{nombre:"dest[5]",valor:"'\\0'",cambio:!0,nota:"← ¡OBLIGATORIO! Sin esto dest no es string válido"}]},{paso:5,titulo:"return (dest) → puntero al inicio",codigo:`return (dest);
// dest apunta al inicio del buffer: "hello\\0"
(gdb) print dest
$1 = 0x... "hello"`,variables:[{nombre:"dest",valor:'"hello"',cambio:!1,nota:"✓ Copia completa con \\0"},{nombre:"retorno",valor:"puntero a dest",cambio:!0,nota:"Permite encadenamiento: strcpy(strcpy(a,b), c)"}]}],trampas:[{severidad:"mortal",titulo:"Olvidar copiar el \\0 final",descripcion:'Sin dest[i] = "\\0" al final, dest no es un string válido. Cualquier función que lo reciba después iterará más allá del buffer → undefined behavior.',codigoMal:`// ❌ Sin el \\0 final
while (src[i]) {
    dest[i] = src[i];
    i++;
}
// dest = "hello" + basura, NO un string válido`,codigoBien:`// ✅ Con el \\0 final
while (src[i]) {
    dest[i] = src[i];
    i++;
}
dest[i] = '\\0'; // ← SIEMPRE`},{severidad:"mortal",titulo:"No devolver dest — pérdida del puntero",descripcion:"La firma dice char *. Sin return (dest), la función devuelve basura. Los encadenamientos como ft_putstr(ft_strcpy(buf, src)) fallan.",codigoMal:`// ❌ Sin return
char *ft_strcpy(char *dest, char *src) {
    int i = 0;
    while (src[i]) dest[i++] = src[i];
    dest[i] = '\\0';
    // falta return (dest);
}`,codigoBien:`// ✅
char *ft_strcpy(char *dest, char *src) {
    int i = 0;
    while (src[i]) { dest[i] = src[i]; i++; }
    dest[i] = '\\0';
    return (dest); // ← siempre
}`},{severidad:"warning",titulo:"Buffer dest demasiado pequeño — buffer overflow",descripcion:"ft_strcpy NO comprueba el tamaño de dest. Si src es más largo que dest, escribe fuera del buffer (stack smashing). Responsabilidad del llamador.",codigoMal:`// ❌ Buffer desbordado
char dest[3];
ft_strcpy(dest, "hello"); // escribe 6 bytes en 3 → overflow`,codigoBien:`// ✅ Buffer suficientemente grande
char dest[100];
ft_strcpy(dest, "hello"); // OK: 6 bytes en 100`}],bajoCelCapot:`strcpy es una de las funciones más peligrosas de C por el buffer overflow.
En producción se usa strncpy o strlcpy.
En 42 el sujeto garantiza que dest tiene espacio suficiente.
La versión compacta while((dest[i]=src[i])) aprovecha que '\\0'=0=falsy.`,estrategia:"MEMORIZAR",razonEstrategia:"Patrón base de copia de strings. Aparece en ft_strdup (con malloc), en manipulaciones de strings compuestos, etc.",relacionados:["ft_strlen","ft_putstr","ft_strdup"]},sz={id:"fizzbuzz",nombre:"fizzbuzz",nivel:1,dificultad:"fácil",tipoEntrega:"programa",archivosEsperados:["fizzbuzz.c"],funcionesPermitidas:["write"],subject:`Assignment name  : fizzbuzz
Expected files   : fizzbuzz.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that displays numbers from 1 to 100, each separated by a
newline.

If the number is a multiple of 3, replace it with the word "Fizz".
If the number is a multiple of 5, replace it with the word "Buzz".
If the number is a multiple of both 3 and 5, replace it with the word "FizzBuzz".`,descripcion:'Programa que imprime del 1 al 100: múltiplos de 15 → "FizzBuzz", de 3 → "Fizz", de 5 → "Buzz", resto → el número.',palacio:{habitacion:"cocina",mueble:"horno",personaje:"El Microondas que cuenta mal",emoji:"🎯",historia:`El Microondas de la cocina tiene manía con los números.
Cuando llega a un múltiplo de 3 grita "Fizz" en vez del número.
Cuando llega a un múltiplo de 5 grita "Buzz".
Cuando llega a un múltiplo de AMBOS (15, 30, 45...) grita "FizzBuzz".
El truco: comprobar el 15 PRIMERO (else if), sino Fizz y Buzz compiten.`,anclas:["i % 15 == 0 → FizzBuzz  ← PRIMERO","i % 3 == 0  → Fizz","i % 5 == 0  → Buzz","else → ft_putnbr(i)","Mayúsculas: Fizz Buzz FizzBuzz (no fizz buzz fizzbuzz)"]},herramientas:["strings","ascii"],formulaClave:{descripcion:"Triple condicional con módulo — orden de comprobación importa",formula:"if (i%15==0) FizzBuzz; else if (i%3==0) Fizz; else if (i%5==0) Buzz; else número;",ejemplo:{entrada:"i = 15",calculo:"15%15=0 → FizzBuzz (si compruebas %3 antes: también daría Fizz, perdería Buzz)",resultado:"FizzBuzz"}},versiones:[{id:"clasica",nombre:"Clásica con ft_putnbr",descripcion:"Función auxiliar ft_putnbr para imprimir el número. La más limpia en el examen.",recomendada:!0,codigo:`#include <unistd.h>

static void	ft_putnbr(int n)
{
	if (n >= 10)
		ft_putnbr(n / 10);
	write(1, &"0123456789"[n % 10], 1);
}

int	main(void)
{
	int	i;

	i = 1;
	while (i <= 100)
	{
		if (i % 15 == 0)
			write(1, "FizzBuzz\\n", 9);
		else if (i % 3 == 0)
			write(1, "Fizz\\n", 5);
		else if (i % 5 == 0)
			write(1, "Buzz\\n", 5);
		else
		{
			ft_putnbr(i);
			write(1, "\\n", 1);
		}
		i++;
	}
	return (0);
}`},{id:"iterativo",nombre:"Con buffer para números",descripcion:"Convierte el número a string manualmente sin recursión.",recomendada:!1,codigo:`#include <unistd.h>

static void	print_num(int n)
{
	char	buf[4];
	int	len;

	len = 0;
	if (n == 100)
	{
		write(1, "100\\n", 4);
		return ;
	}
	if (n >= 10)
		buf[len++] = '0' + (n / 10);
	buf[len++] = '0' + (n % 10);
	buf[len++] = '\\n';
	write(1, buf, len);
}

int	main(void)
{
	int	i;

	i = 1;
	while (i <= 100)
	{
		if (i % 15 == 0)
			write(1, "FizzBuzz\\n", 9);
		else if (i % 3 == 0)
			write(1, "Fizz\\n", 5);
		else if (i % 5 == 0)
			write(1, "Buzz\\n", 5);
		else
			print_num(i);
		i++;
	}
	return (0);
}`}],tests:[{id:"test_completo",descripcion:"Salida completa 1-100",entrada:[],salida:`1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
Fizz
22
23
Fizz
Buzz
26
Fizz
28
29
FizzBuzz
31
32
Fizz
34
Buzz
Fizz
37
38
Fizz
Buzz
41
Fizz
43
44
FizzBuzz
46
47
Fizz
49
Buzz
Fizz
52
53
Fizz
Buzz
56
Fizz
58
59
FizzBuzz
61
62
Fizz
64
Buzz
Fizz
67
68
Fizz
Buzz
71
Fizz
73
74
FizzBuzz
76
77
Fizz
79
Buzz
Fizz
82
83
Fizz
Buzz
86
Fizz
88
89
FizzBuzz
91
92
Fizz
94
Buzz
Fizz
97
98
Fizz
Buzz
`,tipo:"normal"}],gdbSteps:[{paso:1,titulo:"Inicio: i = 1",codigo:`(gdb) run
Breakpoint 1, main at fizzbuzz.c:12
12		i = 1;
(gdb) next
13		while (i <= 100)`,variables:[{nombre:"i",valor:"1",cambio:!0,nota:"Comienza en 1"}]},{paso:2,titulo:'i=3 → 3%15≠0, 3%3=0 → "Fizz"',codigo:`[i=3]
if (3 % 15 == 0)    → 3 ≠ 0, NO
else if (3 % 3 == 0)→ 0 == 0, SÍ
→ write "Fizz\\n"`,variables:[{nombre:"i",valor:"3",cambio:!0,nota:"Múltiplo de 3"},{nombre:"3 % 3",valor:"0",cambio:!0,nota:'→ "Fizz"'}]},{paso:3,titulo:'i=5 → 5%15≠0, 5%3≠0, 5%5=0 → "Buzz"',codigo:`[i=5]
if (5 % 15 == 0)    → 5 ≠ 0, NO
else if (5 % 3 == 0)→ 2 ≠ 0, NO
else if (5 % 5 == 0)→ 0 == 0, SÍ
→ write "Buzz\\n"`,variables:[{nombre:"i",valor:"5",cambio:!0,nota:"Múltiplo de 5"},{nombre:"5 % 5",valor:"0",cambio:!0,nota:'→ "Buzz"'}]},{paso:4,titulo:'i=15 → 15%15=0 → "FizzBuzz" ← comprobar PRIMERO',codigo:`[i=15]
if (15 % 15 == 0)   → 0 == 0, SÍ ← entra aquí primero
→ write "FizzBuzz\\n"
// Si hubiéramos puesto %3 primero, solo saldría "Fizz"`,variables:[{nombre:"i",valor:"15",cambio:!0,nota:"Múltiplo de 3 Y de 5"},{nombre:"15 % 15",valor:"0",cambio:!0,nota:"← POR ESO %15 va PRIMERO"}]},{paso:5,titulo:"i=7 → ningún módulo → ft_putnbr(7)",codigo:`[i=7]
if (7%15==0) → NO; if (7%3==0) → NO; if (7%5==0) → NO
→ ft_putnbr(7) → write "7\\n"`,variables:[{nombre:"i",valor:"7",cambio:!0,nota:"No es múltiplo de 3 ni 5"},{nombre:"stdout",valor:'"7\\n"',cambio:!0,nota:""}]},{paso:6,titulo:'i=100 → 100%5=0, 100%3=1 → "Buzz"',codigo:`[i=100]
if (100%15==0) → 10≠0, NO
else if (100%3==0) → 1≠0, NO
else if (100%5==0) → 0==0, SÍ
→ write "Buzz\\n"
i++→101, while(101<=100) FALSE → FIN`,variables:[{nombre:"i",valor:"100",cambio:!0,nota:"Último número"},{nombre:"100 % 5",valor:"0",cambio:!0,nota:'→ "Buzz" (no FizzBuzz: 100%3=1)'}]}],trampas:[{severidad:"mortal",titulo:"Comprobar %3 y %5 ANTES que %15 → pierde FizzBuzz",descripcion:'Si pones el else if (%3) antes del if (%15), cuando i=15 entra por %3 y escribe solo "Fizz". Nunca llega al %15.',codigoMal:`// ❌ Orden incorrecto — 15 da "Fizz" en vez de "FizzBuzz"
if (i % 3 == 0)       // ← i=15 entra AQUÍ
    write(1, "Fizz\\n", 5);
else if (i % 5 == 0)  // nunca llega para múltiplos de 15
    write(1, "Buzz\\n", 5);
else if (i % 15 == 0) // NUNCA se ejecuta`,codigoBien:`// ✅ %15 SIEMPRE primero
if (i % 15 == 0)
    write(1, "FizzBuzz\\n", 9);
else if (i % 3 == 0)
    write(1, "Fizz\\n", 5);
else if (i % 5 == 0)
    write(1, "Buzz\\n", 5);`},{severidad:"mortal",titulo:'Mayúsculas incorrectas: "fizz" en vez de "Fizz"',descripcion:'La Moulinette hace comparación byte a byte. "fizz\\n" ≠ "Fizz\\n". Perderías todos los múltiplos de 3.',codigoMal:`// ❌ minúsculas → falla la Moulinette
write(1, "fizz\\n", 5);  // 'f' ≠ 'F'
write(1, "buzz\\n", 5);
write(1, "fizzbuzz\\n", 9);`,codigoBien:`// ✅ primera letra mayúscula
write(1, "Fizz\\n", 5);
write(1, "Buzz\\n", 5);
write(1, "FizzBuzz\\n", 9);`},{severidad:"warning",titulo:"i <= 100 vs i < 100 — incluir el 100",descripcion:"El sujeto pide del 1 al 100 inclusive. Con i < 100 te falta el Buzz del 100.",codigoMal:`// ❌ Sin el 100
while (i < 100) // llega hasta 99, falta el 100`,codigoBien:`// ✅ Incluye el 100
while (i <= 100)`}],bajoCelCapot:`El operador % (módulo) devuelve el resto de la división entera.
15 % 3 = 0 porque 15 = 3×5 + 0
15 % 5 = 0 porque 15 = 5×3 + 0
15 % 15 = 0 — múltiplo de ambos.
La condición i%15 primero evita la doble impresión.`,estrategia:"MEMORIZAR",razonEstrategia:"Clásico de entrevistas y exámenes. El patrón del módulo se reutiliza en pgcd, fprime, add_prime_sum.",relacionados:["pgcd","fprime"]},lz={id:"first_word",nombre:"first_word",nivel:1,dificultad:"fácil",tipoEntrega:"programa",archivosEsperados:["first_word.c"],funcionesPermitidas:["write"],subject:`Assignment name  : first_word
Expected files   : first_word.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that takes a string and displays its first word, followed
by a newline.

A word is a sequence of printable characters, not including ' ' or '\\t'.

If the number of parameters is not 1, or there are no words in the string,
display only a newline.

Examples:
$> ./first_word "FOR PONY"
FOR
$> ./first_word "   lorem   ipsum   dolor   "
lorem
$> ./first_word ""

$> ./first_word "  "

$>`,descripcion:"Programa que imprime la primera palabra del string (separadores: espacio y tab). Si no hay exactamente 1 argumento o no hay palabras, imprime solo \\n.",palacio:{habitacion:"cocina",mueble:"encimera",personaje:"El Cuchillo",emoji:"🔪",historia:`En la encimera hay un Cuchillo que SALTA los espacios iniciales.
Cuando encuentra la primera letra (no espacio, no tab) empieza a CORTAR.
Corta letra a letra hasta que llega a otro espacio/tab o al final del string.
¡Esas letras cortadas son la primera palabra!
Fases: 1) Salta separadores. 2) Escribe letras. 3) Para en separador o \\0.`,anclas:["fase 1: saltar spaces/tabs al inicio","fase 2: escribir hasta space/tab/\\0","argc != 2 → solo '\\n'","string todo spaces → solo '\\n'","separadores: ' ' y '\\t' (¡no olvides el tab!)"]},herramientas:["strings","argc"],formulaClave:{descripcion:"Dos fases: saltar separadores, luego imprimir hasta separador",formula:"while(sep) i++; while(no sep && str[i]) write & i++;",ejemplo:{entrada:'"  hello world"',calculo:"salta 2 espacios → imprime h,e,l,l,o → para en espacio",resultado:"hello"}},versiones:[{id:"clasica",nombre:"Clásica dos fases",descripcion:"Dos bucles explícitos: uno para saltar, otro para imprimir. La más clara en el examen.",recomendada:!0,codigo:`#include <unistd.h>

int	main(int argc, char **argv)
{
	int	i;

	if (argc != 2)
	{
		write(1, "\\n", 1);
		return (0);
	}
	i = 0;
	while (argv[1][i] == ' ' || argv[1][i] == '\\t')
		i++;
	while (argv[1][i] && argv[1][i] != ' ' && argv[1][i] != '\\t')
	{
		write(1, &argv[1][i], 1);
		i++;
	}
	write(1, "\\n", 1);
	return (0);
}`}],tests:[{id:"test_normal",descripcion:'"hello world" → primera palabra hello',entrada:["hello world"],salida:`hello
`,tipo:"normal"},{id:"test_espacios_inicio",descripcion:'"  hello" → salta espacios, imprime hello',entrada:["  hello"],salida:`hello
`,tipo:"normal"},{id:"test_tab",descripcion:'"\\thello there" → tab como separador',entrada:["	hello there"],salida:`hello
`,tipo:"edge"},{id:"test_sin_args",descripcion:"Sin argumentos → solo \\n",entrada:[],salida:`
`,tipo:"edge"},{id:"test_vacio",descripcion:"String vacío → solo \\n",entrada:[""],salida:`
`,tipo:"edge"},{id:"test_solo_espacios",descripcion:'"   " → solo espacios, sin palabras → \\n',entrada:["   "],salida:`
`,tipo:"edge"},{id:"test_1palabra",descripcion:'"word" → una sola palabra',entrada:["word"],salida:`word
`,tipo:"normal"}],gdbSteps:[{paso:1,titulo:'Entrada: "  hello world"',codigo:`(gdb) run "  hello world"
argc=2, argv[1]="  hello world"
i = 0`,variables:[{nombre:"argc",valor:"2",cambio:!0,nota:"✓ Un argumento"},{nombre:"argv[1]",valor:'"  hello world"',cambio:!0,nota:""},{nombre:"i",valor:"0",cambio:!0,nota:""}]},{paso:2,titulo:"Fase 1: salta espacios — i=0,1 → i=2",codigo:`while (argv[1][0]==' ')  → TRUE → i=1
while (argv[1][1]==' ')  → TRUE → i=2
while (argv[1][2]=='h')  → 'h' ≠ ' ' y ≠ '\\t' → SALE`,variables:[{nombre:"i",valor:"2",cambio:!0,nota:'← apunta al "h" de hello'}]},{paso:3,titulo:"Fase 2: imprime h,e,l,l,o",codigo:`[i=2] 'h' ≠ ' ' y ≠ '\\0' → write 'h', i=3
[i=3] 'e' → write 'e', i=4
[i=4] 'l' → write 'l', i=5
[i=5] 'l' → write 'l', i=6
[i=6] 'o' → write 'o', i=7`,variables:[{nombre:"stdout",valor:'"hello"',cambio:!0,nota:""},{nombre:"i",valor:"7",cambio:!0,nota:""}]},{paso:4,titulo:'argv[1][7] = " " → para el segundo while',codigo:`[i=7] argv[1][7]=' ' → condición FALSE → sale del while
→ write("\\n", 1)`,variables:[{nombre:"argv[1][7]",valor:"' '",cambio:!1,nota:"← separador, para el while"},{nombre:"stdout",valor:'"hello\\n"',cambio:!0,nota:"✓ Primera palabra"}]}],trampas:[{severidad:"mortal",titulo:"Olvidar el tab como separador",descripcion:'El sujeto dice "not including space or tab". Si solo compruebas espacio, el string "\\thello" no saltará el tab y escribirá el tab como parte de la salida.',codigoMal:`// ❌ Solo espacio, olvida tab
while (argv[1][i] == ' ')  // ← falta || argv[1][i]=='\\t'
    i++;`,codigoBien:`// ✅ Espacio Y tab
while (argv[1][i] == ' ' || argv[1][i] == '\\t')
    i++;`},{severidad:"mortal",titulo:"String todo-espacios → imprime \\n extra",descripcion:'Si el string es "   " (solo espacios), el primer while salta todo hasta el \\0. El segundo while no entra. Si añades write("\\n") fuera, está bien. Si añades un \\n extra dentro del segundo while también, se duplica.',codigoMal:`// ❌ Problema si el segundo while no entra pero hay \\n dentro
while (argv[1][i] && ...) {
    write(1, &argv[1][i], 1);
    i++;
    if (!argv[1][i] || argv[1][i]==' ')
        write(1, "\\n", 1); // ← \\n dentro del while: doble
}`,codigoBien:`// ✅ Un único write("\\n") AL FINAL, fuera del while
while (argv[1][i] && argv[1][i]!=' ' && argv[1][i]!='\\t') {
    write(1, &argv[1][i], 1);
    i++;
}
write(1, "\\n", 1); // ← siempre, una sola vez`},{severidad:"warning",titulo:"argc != 2 imprime \\n pero olvida el return",descripcion:"Sin return (0) después del write del caso de error, el programa continúa con argv[1]=NULL → segfault al acceder a argv[1][i].",codigoMal:`// ❌ Sin return, cae al código principal con NULL
if (argc != 2)
    write(1, "\\n", 1);
// continúa con argv[1] = NULL → crash`,codigoBien:`// ✅
if (argc != 2) {
    write(1, "\\n", 1);
    return (0); // ← obligatorio
}`}],bajoCelCapot:`"Palabra" en C = secuencia de bytes imprimibles hasta un espacio, tab o \\0.
No hay función mágica: hay que iterar manualmente.
El doble bucle (salta / imprime) es el patrón estándar para parsear tokens.`,estrategia:"MEMORIZAR",razonEstrategia:'El patrón "salta separadores → procesa token" se reutiliza en last_word, ft_split, ft_atoi, wdmatch.',relacionados:["last_word","ft_atoi","ft_split"]},cz={id:"rev_print",nombre:"rev_print",nivel:1,dificultad:"fácil",tipoEntrega:"programa",archivosEsperados:["rev_print.c"],funcionesPermitidas:["write"],subject:`Assignment name  : rev_print
Expected files   : rev_print.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that takes a string, and displays the string in reverse,
followed by a newline.

If the number of arguments is not 1, display only a newline.

Examples:
$> ./rev_print "Hello World"
dlroW olleH
$> ./rev_print ""

$>`,descripcion:"Programa que imprime el string al revés (desde el último carácter hasta el primero) seguido de \\n. Con argc != 2, solo \\n.",palacio:{habitacion:"cocina",mueble:"espejo",personaje:"El Reverendo Moonwalk",emoji:"🕺",historia:`En el espejo de la cocina vive el Reverendo Moonwalk.
Cuando le das un string, él camina HACIA ATRÁS imprimiendo cada letra.
Primero busca el FINAL del string con ft_strlen (o un while).
Luego retrocede desde i = len-1 hasta i = 0.
¡El espejo NO miente: invierte hasta el último char, incluidos espacios!`,anclas:["i = ft_strlen(str) - 1  ← empieza al final","while (i >= 0) write & i--","string vacío → escribe solo \\n","argc != 2 → solo \\n","¡incluye espacios en el reverso!"]},herramientas:["strings","argc"],formulaClave:{descripcion:"Busca el final, itera hacia atrás",formula:"i = len - 1; while (i >= 0) { write(str[i]); i--; }",ejemplo:{entrada:'"abc"',calculo:'len=3, i=2→c, i=1→b, i=0→a → "cba"',resultado:"cba"}},versiones:[{id:"clasica",nombre:"Clásica con longitud precalculada",descripcion:"Calcula la longitud primero con un while, luego recorre hacia atrás.",recomendada:!0,codigo:`#include <unistd.h>

int	main(int argc, char **argv)
{
	int	i;

	if (argc != 2)
	{
		write(1, "\\n", 1);
		return (0);
	}
	i = 0;
	while (argv[1][i])
		i++;
	i--;
	while (i >= 0)
	{
		write(1, &argv[1][i], 1);
		i--;
	}
	write(1, "\\n", 1);
	return (0);
}`}],tests:[{id:"test_hello",descripcion:'"hello" → "olleh"',entrada:["hello"],salida:`olleh
`,tipo:"normal"},{id:"test_con_espacio",descripcion:'"Hello World" → "dlroW olleH"',entrada:["Hello World"],salida:`dlroW olleH
`,tipo:"normal"},{id:"test_1char",descripcion:'"a" → "a"',entrada:["a"],salida:`a
`,tipo:"normal"},{id:"test_vacio",descripcion:"String vacío → solo \\n",entrada:[""],salida:`
`,tipo:"edge"},{id:"test_sin_args",descripcion:"Sin argumentos → solo \\n",entrada:[],salida:`
`,tipo:"edge"},{id:"test_abc",descripcion:'"abc" → "cba"',entrada:["abc"],salida:`cba
`,tipo:"normal"}],gdbSteps:[{paso:1,titulo:'Entrada: "abc", calcula longitud',codigo:`argc=2, argv[1]="abc"
i = 0
while (argv[1][0]) → 'a' → i=1
while (argv[1][1]) → 'b' → i=2
while (argv[1][2]) → 'c' → i=3
while (argv[1][3]) → '\\0' → SALE
i-- → i=2  ← índice del último char`,variables:[{nombre:"i",valor:"2",cambio:!0,nota:'← índice de "c" (último char)'}]},{paso:2,titulo:'i=2 → write "c"',codigo:`while (2 >= 0) → TRUE
write(1, &argv[1][2], 1);  → stdout: "c"
i--  → i=1`,variables:[{nombre:"i",valor:"1",cambio:!0,nota:""},{nombre:"stdout",valor:'"c"',cambio:!0,nota:""}]},{paso:3,titulo:'i=1 → write "b", i=0 → write "a"',codigo:`[i=1] write 'b' → stdout: "cb", i=0
[i=0] write 'a' → stdout: "cba", i=-1`,variables:[{nombre:"i",valor:"-1",cambio:!0,nota:""},{nombre:"stdout",valor:'"cba"',cambio:!0,nota:""}]},{paso:4,titulo:"i=-1 → sale del while, write \\n",codigo:`while (-1 >= 0) → FALSE → sale
write(1, "\\n", 1)
stdout: "cba\\n"`,variables:[{nombre:"i",valor:"-1",cambio:!1,nota:"← condición false"},{nombre:"stdout",valor:'"cba\\n"',cambio:!0,nota:"✓ String invertido"}]}],trampas:[{severidad:"mortal",titulo:"i = len sin el -1 → lee fuera del string",descripcion:'Si len=3 (para "abc"), el último índice válido es 2, no 3. argv[1][3] es el \\0. Si empiezas en i=len sin restar 1, escribes el \\0 (invisible) y los chars quedan desplazados.',codigoMal:`// ❌ Empieza en i=len, escribe '\\0' primero
i = 0; while (argv[1][i]) i++;  // i=3
while (i >= 0) {
    write(1, &argv[1][i], 1);  // i=3: escribe '\\0' ← basura
    i--;
}`,codigoBien:`// ✅ i = len - 1 → último char válido
i = 0; while (argv[1][i]) i++;  // i=3
i--;                             // i=2 ← 'c'
while (i >= 0) {
    write(1, &argv[1][i], 1);
    i--;
}`},{severidad:"mortal",titulo:"Condición i > 0 en vez de i >= 0 → pierde el primer char",descripcion:"El índice 0 es el primer carácter. Con i > 0, nunca se escribe argv[1][0].",codigoMal:`// ❌ i>0 → no imprime argv[1][0]
while (i > 0) {  // para cuando i=0, sin imprimir argv[1][0]
    write(1, &argv[1][i], 1);
    i--;
}`,codigoBien:`// ✅ i>=0 → incluye el índice 0
while (i >= 0) {
    write(1, &argv[1][i], 1);
    i--;
}`},{severidad:"warning",titulo:"String vacío → i queda en -1 antes del segundo while",descripcion:'Con "" el primer while no entra, i=0, i-- → i=-1. El segundo while (i>=-1: TRUE) ¡escribiría argv[1][-1]! Usar i>=0 evita esto.',codigoMal:`// ❌ Con "" y condición i >= -1 escribiría basura
i = 0; while (argv[1][i]) i++; // i=0 para ""
i--;  // i=-1
while (i >= -1) {  // ← entra y lee memoria inválida
    write(1, &argv[1][i], 1);`,codigoBien:`// ✅ Condición i >= 0 protege contra string vacío
i = 0; while (argv[1][i]) i++;
i--;   // i=-1 para ""
while (i >= 0) {  // -1 >= 0 → FALSE → no entra ✓`}],bajoCelCapot:`"abc" en memoria: [a][b][c][\\0]
Índices:           0   1   2   3
Recorrido inverso: 2→c, 1→b, 0→a
El \\0 (índice 3) NO se imprime — queda excluido por la condición i>=0.`,estrategia:"MEMORIZAR",razonEstrategia:"Patrón de índice descendente. Se reutiliza en rstr_capitalizer, reverse_bits (concepto), ft_strrev.",relacionados:["ft_strlen","ft_strrev"]},dz={id:"rotone",nombre:"rotone",nivel:1,dificultad:"fácil",tipoEntrega:"programa",archivosEsperados:["rotone.c"],funcionesPermitidas:["write"],subject:`Assignment name  : rotone
Expected files   : rotone.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that takes a string and displays it, with each of its
alphabetical characters converted to the next one in alphabetical order.

'z' becomes 'a', 'Z' becomes 'A'.

Non-alphabetical characters are not modified.

If the number of arguments is not 1, display only a newline.

Examples:
$> ./rotone "Hello World !"
Ifmmp Xpsme !
$> ./rotone ""

$>`,descripcion:"Programa que rota cada letra +1 en el alfabeto (a→b, y→z, z→a). Mayúsculas y minúsculas se tratan por separado. Símbolos sin cambio.",palacio:{habitacion:"cocina",mueble:"especiero",personaje:"El Ratón Teletransportador",emoji:"🐀",historia:`En el especiero de la cocina vive el Ratón Teletransportador.
Cada letra que toca la desplaza UN PELDAÑO adelante en el alfabeto.
Si la letra está en la última posición (z o Z) ¡salta al inicio! (→ a o A).
Los símbolos y números no los toca: no son su territorio.
Fórmula mental: letra + 1, pero z → a (el abecedario es circular).`,anclas:["'z' → 'a'  ← caso especial minúscula","'Z' → 'A'  ← caso especial mayúscula","c + 1  ← todos los demás","símbolos: sin cambio","argc != 2 → solo \\n"]},herramientas:["strings","ascii","argc"],formulaClave:{descripcion:"Desplazamiento +1 con wrap en z/Z",formula:"if (c == 'z') 'a'; else if (c == 'Z') 'A'; else c + 1;",ejemplo:{entrada:'"hello"',calculo:"h→i e→f l→m l→m o→p",resultado:"ifmmp"}},versiones:[{id:"clasica",nombre:"Clásica con casos especiales explícitos",descripcion:"La más legible: comprueba z y Z primero, luego el rango general.",recomendada:!0,codigo:`#include <unistd.h>

int	main(int argc, char **argv)
{
	int	i;
	char	c;

	if (argc != 2)
	{
		write(1, "\\n", 1);
		return (0);
	}
	i = 0;
	while (argv[1][i])
	{
		c = argv[1][i];
		if (c == 'z')
			c = 'a';
		else if (c == 'Z')
			c = 'A';
		else if ((c >= 'a' && c <= 'y') || (c >= 'A' && c <= 'Y'))
			c = c + 1;
		write(1, &c, 1);
		i++;
	}
	write(1, "\\n", 1);
	return (0);
}`},{id:"con_rangos",nombre:"Con rangos y wrap aritmético",descripcion:"Usa modulo aritmético para el wrap. Menos intuitiva pero válida.",recomendada:!1,codigo:`#include <unistd.h>

int	main(int argc, char **argv)
{
	int	i;
	char	c;

	if (argc != 2)
		return (write(1, "\\n", 1), 0);
	i = 0;
	while (argv[1][i])
	{
		c = argv[1][i];
		if (c >= 'a' && c <= 'z')
			c = 'a' + (c - 'a' + 1) % 26;
		else if (c >= 'A' && c <= 'Z')
			c = 'A' + (c - 'A' + 1) % 26;
		write(1, &c, 1);
		i++;
	}
	write(1, "\\n", 1);
	return (0);
}`}],tests:[{id:"test_hello",descripcion:'"hello" → h+1=i, e+1=f, l+1=m, l+1=m, o+1=p',entrada:["hello"],salida:`ifmmp
`,tipo:"normal"},{id:"test_wrap_min",descripcion:'"xyz" → y+1=z, z→a (wrap)',entrada:["xyz"],salida:`yza
`,tipo:"edge"},{id:"test_mayus",descripcion:'"ABC" → A+1=B, B+1=C, C+1=D',entrada:["ABC"],salida:`BCD
`,tipo:"normal"},{id:"test_wrap_mayus",descripcion:'"XYZ" → Z→A (wrap mayúscula)',entrada:["XYZ"],salida:`YZA
`,tipo:"edge"},{id:"test_simbolos",descripcion:'"hello 42!" → letras rotan, símbolos sin cambio',entrada:["hello 42!"],salida:`ifmmp 42!
`,tipo:"normal"},{id:"test_sin_args",descripcion:"Sin argumentos → solo \\n",entrada:[],salida:`
`,tipo:"edge"}],gdbSteps:[{paso:1,titulo:'Entrada: "xyz"',codigo:`argc=2, argv[1]="xyz"
i = 0`,variables:[{nombre:"argv[1]",valor:'"xyz"',cambio:!0,nota:""},{nombre:"i",valor:"0",cambio:!0,nota:""}]},{paso:2,titulo:'c = "x" → x+1=y (ASCII 120→121)',codigo:`c = argv[1][0] = 'x' (120)
if (c=='z') → NO
if (c=='Z') → NO
if (c>='a' && c<='y') → 120>='a' && 120<='y' → TRUE
c = c + 1 = 121 = 'y'
write 'y'`,variables:[{nombre:"c",valor:"'x'→'y'",cambio:!0,nota:"ASCII 120→121"},{nombre:"stdout",valor:'"y"',cambio:!0,nota:""}]},{paso:3,titulo:'c = "y" → y+1=z (no es z todavía)',codigo:`c = 'y' (121)
if (c=='z') → NO (121 ≠ 122)
if (c>='a' && c<='y') → TRUE (121=121=y ✓)
c = c + 1 = 122 = 'z'
write 'z'`,variables:[{nombre:"c",valor:"'y'→'z'",cambio:!0,nota:"121→122"},{nombre:"stdout",valor:'"yz"',cambio:!0,nota:""}]},{paso:4,titulo:'c = "z" → z→a (¡caso especial wrap!)',codigo:`c = 'z' (122)
if (c == 'z') → TRUE ← caso especial
c = 'a'       ← wrap al inicio del abecedario
write 'a'`,variables:[{nombre:"c",valor:"'z'→'a'",cambio:!0,nota:'← El wrap. Sin esto daría "{" (ASCII 123)'},{nombre:"stdout",valor:'"yza"',cambio:!0,nota:"✓ Resultado correcto"}]},{paso:5,titulo:"argv[1][3] = \\0 → sale, write \\n",codigo:`i=3, argv[1][3]='\\0' → while FALSE → sale
write("\\n", 1)`,variables:[{nombre:"stdout",valor:'"yza\\n"',cambio:!0,nota:"✓"}]}],trampas:[{severidad:"mortal",titulo:'No manejar z→a: c+1 daría "{" (ASCII 123)',descripcion:'"z" tiene ASCII 122. z+1 = 123 = "{". Si no capturas el caso especial z→a, la salida para "xyz" será "yz{" en vez de "yza".',codigoMal:`// ❌ Sin caso especial para z
if (c >= 'a' && c <= 'z')
    c = c + 1;  // 'z'+1 = '{', no 'a'`,codigoBien:`// ✅ Caso especial primero
if (c == 'z')
    c = 'a';
else if (c >= 'a' && c <= 'y')
    c = c + 1;`},{severidad:"mortal",titulo:"No tratar mayúsculas por separado: Z→A, no Z→a",descripcion:'Mayúsculas y minúsculas tienen rangos ASCII distintos (65-90 y 97-122). Z+1=91 es "[". El wrap de Z debe ir a A (65), no a a (97).',codigoMal:`// ❌ Mezcla mayúsculas y minúsculas
if (c == 'z' || c == 'Z')
    c = 'a';  // Z→a es incorrecto (debería ser 'A')`,codigoBien:`// ✅ Separados
if (c == 'z') c = 'a';
if (c == 'Z') c = 'A';  // mayúscula → mayúscula`},{severidad:"warning",titulo:"Imprimir directamente argv[1][i]+1 sin guardar en c",descripcion:"write() necesita una dirección (&c). No puedes hacer write(1, &(argv[1][i]+1), 1) porque argv[1][i]+1 es un valor temporal, no una variable.",codigoMal:`// ❌ No compila o UB
write(1, &(argv[1][i] + 1), 1); // valor temporal, no variable`,codigoBien:`// ✅ Guarda en variable primero
char c = argv[1][i] + 1;
write(1, &c, 1);`}],bajoCelCapot:`ASCII: 'a'=97, 'z'=122, 'A'=65, 'Z'=90.
'z'+1 = 123 = '{' — no es una letra.
Por eso el wrap debe ser explícito: si c=='z' → c='a'.
La versión con módulo: 'a' + (c-'a'+1)%26 evita el caso especial pero es menos legible.`,estrategia:"MEMORIZAR",razonEstrategia:"El wrap circular del alfabeto aparece en rot_13, alpha_mirror, y cualquier cifrado de sustitución.",relacionados:["rot_13","alpha_mirror"]},uz={id:"rot_13",nombre:"rot_13",nivel:1,dificultad:"medio",tipoEntrega:"programa",archivosEsperados:["rot_13.c"],funcionesPermitidas:["write"],subject:`Assignment name  : rot_13
Expected files   : rot_13.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that takes a string and displays it, replacing each of its
letters by the letter 13 spaces ahead in alphabetical order.

'Z' becomes 'M', 'z' becomes 'm' and 'M' becomes 'Z', 'm' becomes 'z'.

Non-alphabetical characters are not modified.

If the number of arguments is not 1, display only a newline.

Examples:
$> ./rot_13 "Hello World !"
Uryyb Jbeyq !
$> ./rot_13 ""

$>`,descripcion:"Cifrado ROT13: desplaza cada letra 13 posiciones en el alfabeto. Como el alfabeto tiene 26 letras, aplicar ROT13 dos veces devuelve el original.",palacio:{habitacion:"cocina",mueble:"cajón",personaje:"Habitación 13 Rótulo Roto",emoji:"🔐",historia:`En el cajón hay el Rótulo Roto de la Habitación 13.
Cada letra cambia por la que está 13 posiciones más adelante.
Como hay 26 letras, la mitad del abecedario (a-m) va a (n-z) y viceversa.
El truco del módulo 26: (posición + 13) % 26 siempre queda dentro de 0-25.
Aplicar ROT13 dos veces descifra: es su propio inverso.`,anclas:["(c - 'a' + 13) % 26 + 'a'  ← minúscula","(c - 'A' + 13) % 26 + 'A'  ← mayúscula","% 26 asegura el wrap circular","n-z → a-m (simétrico)","argc != 2 → solo \\n"]},herramientas:["strings","ascii"],formulaClave:{descripcion:"Desplazamiento modular de 13 en el alfabeto",formula:"c = 'a' + (c - 'a' + 13) % 26",ejemplo:{entrada:"'H' (ASCII 72)",calculo:"'A'+(72-65+13)%26 = 65+20 = 85 = 'U'",resultado:"'U'"},tablaASCII:[{char:"A",ascii:65,calculo:"(65-65+13)%26=13",resultado:"N"},{char:"H",ascii:72,calculo:"(72-65+13)%26=20",resultado:"U"},{char:"N",ascii:78,calculo:"(78-65+13)%26=0",resultado:"A"},{char:"Z",ascii:90,calculo:"(90-65+13)%26=12",resultado:"M"},{char:"a",ascii:97,calculo:"(97-97+13)%26=13",resultado:"n"},{char:"n",ascii:110,calculo:"(110-97+13)%26=0",resultado:"a"}]},versiones:[{id:"clasica",nombre:"Clásica con fórmula modular",descripcion:"La fórmula con % 26 maneja el wrap automáticamente. La más limpia en el examen.",recomendada:!0,codigo:`#include <unistd.h>

int	main(int argc, char **argv)
{
	int	i;
	char	c;

	if (argc != 2)
	{
		write(1, "\\n", 1);
		return (0);
	}
	i = 0;
	while (argv[1][i])
	{
		c = argv[1][i];
		if (c >= 'a' && c <= 'z')
			c = 'a' + (c - 'a' + 13) % 26;
		else if (c >= 'A' && c <= 'Z')
			c = 'A' + (c - 'A' + 13) % 26;
		write(1, &c, 1);
		i++;
	}
	write(1, "\\n", 1);
	return (0);
}`},{id:"tabla",nombre:"Con tabla de lookup (sin módulo)",descripcion:"Verifica si la letra está en la primera o segunda mitad del alfabeto. Menos elegante pero más explícita.",recomendada:!1,codigo:`#include <unistd.h>

int	main(int argc, char **argv)
{
	int	i;
	char	c;

	if (argc != 2)
		return (write(1, "\\n", 1), 0);
	i = 0;
	while (argv[1][i])
	{
		c = argv[1][i];
		if (c >= 'a' && c <= 'm')
			c = c + 13;
		else if (c >= 'n' && c <= 'z')
			c = c - 13;
		else if (c >= 'A' && c <= 'M')
			c = c + 13;
		else if (c >= 'N' && c <= 'Z')
			c = c - 13;
		write(1, &c, 1);
		i++;
	}
	write(1, "\\n", 1);
	return (0);
}`}],tests:[{id:"test_hello",descripcion:'"Hello" → "Uryyb" (H→U e→r l→y l→y o→b)',entrada:["Hello"],salida:`Uryyb
`,tipo:"normal"},{id:"test_abc",descripcion:'"ABC" → "NOP"',entrada:["ABC"],salida:`NOP
`,tipo:"normal"},{id:"test_xyz",descripcion:'"xyz" → "klm" (x+13=k, y+13=l, z+13=m)',entrada:["xyz"],salida:`klm
`,tipo:"edge"},{id:"test_frase",descripcion:'"Hello World!" → símbolos sin cambio',entrada:["Hello World!"],salida:`Uryyb Jbeyq!
`,tipo:"normal"},{id:"test_sin_args",descripcion:"Sin argumentos → solo \\n",entrada:[],salida:`
`,tipo:"edge"},{id:"test_idempotente",descripcion:'"Uryyb" aplicando rot13 de nuevo → "Hello" (propiedad inversa)',entrada:["Uryyb"],salida:`Hello
`,tipo:"normal"}],gdbSteps:[{paso:1,titulo:'Entrada: "Hello"',codigo:`argc=2, argv[1]="Hello"
i = 0`,variables:[{nombre:"argv[1]",valor:'"Hello"',cambio:!0,nota:""}]},{paso:2,titulo:'"H" (72) → "U" (85): (72-65+13)%26+65',codigo:`c = 'H' (72)
c >= 'A' && c <= 'Z' → TRUE
c = 'A' + (72 - 65 + 13) % 26
  = 65  + (20) % 26
  = 65  + 20
  = 85 = 'U'
write 'U'`,variables:[{nombre:"c",valor:"'H'(72) → 'U'(85)",cambio:!0,nota:"(72-65+13)%26=20 → 65+20=85"},{nombre:"stdout",valor:'"U"',cambio:!0,nota:""}]},{paso:3,titulo:'"e" (101) → "r" (114): (101-97+13)%26+97',codigo:`c = 'e' (101)
c >= 'a' && c <= 'z' → TRUE
c = 'a' + (101 - 97 + 13) % 26
  = 97  + (17) % 26
  = 97  + 17
  = 114 = 'r'`,variables:[{nombre:"c",valor:"'e'(101) → 'r'(114)",cambio:!0,nota:"(4+13)%26=17 → 97+17=114"}]},{paso:4,titulo:'"l" (108) → "y" (121): (108-97+13)%26+97',codigo:`c = 'l' (108)
c = 97 + (108 - 97 + 13) % 26
  = 97 + (24) % 26
  = 97 + 24
  = 121 = 'y'`,variables:[{nombre:"c",valor:"'l'(108) → 'y'(121)",cambio:!0,nota:"(11+13)%26=24 → 97+24=121"}]},{paso:5,titulo:'"o" (111) → "b" (98): wrap por módulo',codigo:`c = 'o' (111)
c = 97 + (111 - 97 + 13) % 26
  = 97 + (27) % 26
  = 97 + 1
  = 98 = 'b'   ← el % 26 hace el wrap`,variables:[{nombre:"c",valor:"'o'(111) → 'b'(98)",cambio:!0,nota:"(14+13)%26=1 → 97+1=98 ← wrap!"}]},{paso:6,titulo:'stdout: "Uryyb\\n"',codigo:`H→U, e→r, l→y, l→y, o→b → "Uryyb"
write("\\n", 1)
stdout: "Uryyb\\n"`,variables:[{nombre:"stdout",valor:'"Uryyb\\n"',cambio:!0,nota:"✓ ROT13 aplicado"}]}],trampas:[{severidad:"mortal",titulo:"c + 13 sin módulo → desborda el rango de letras",descripcion:'"n" (110) + 13 = 123 = "{". Sin módulo, las letras de la segunda mitad del alfabeto (n-z) salen fuera del rango.',codigoMal:`// ❌ Sin módulo — 'n'+13='{', no 'a'
if (c >= 'a' && c <= 'z')
    c = c + 13;  // 'n'(110)+13=123='{' ← MALO`,codigoBien:`// ✅ Con módulo — wrap automático
if (c >= 'a' && c <= 'z')
    c = 'a' + (c - 'a' + 13) % 26;  // 'n' → 'a' ✓`},{severidad:"mortal",titulo:"Usar la misma fórmula para mayúsculas y minúsculas",descripcion:'La fórmula usa el offset desde "a" o "A". Mezclarlos da resultados incorrectos.',codigoMal:`// ❌ Usa 'a' para mayúsculas
if (c >= 'A' && c <= 'Z')
    c = 'a' + (c - 'a' + 13) % 26;  // 'A'(65)-'a'(97) = -32 ← negativo`,codigoBien:`// ✅ Usa 'A' para mayúsculas
if (c >= 'A' && c <= 'Z')
    c = 'A' + (c - 'A' + 13) % 26;`},{severidad:"warning",titulo:"La versión tabla (+13/-13) requiere dos rangos por mayúsculas/minúsculas",descripcion:"Si usas la versión sin módulo (a-m: +13, n-z: -13), necesitas exactamente los cuatro rangos: a-m, n-z, A-M, N-Z. Olvidar uno rompe ese grupo de letras.",codigoMal:`// ❌ Solo minúsculas, olvida mayúsculas
if (c >= 'a' && c <= 'm') c += 13;
else if (c >= 'n' && c <= 'z') c -= 13;
// mayúsculas no cambian → incorrecto`,codigoBien:`// ✅ Los cuatro rangos
if (c >= 'a' && c <= 'm') c += 13;
else if (c >= 'n' && c <= 'z') c -= 13;
else if (c >= 'A' && c <= 'M') c += 13;
else if (c >= 'N' && c <= 'Z') c -= 13;`}],bajoCelCapot:`ROT13 es un caso especial de cifrado César donde el desplazamiento es 13.
26 letras ÷ 2 = 13: por eso ROT13 es simétrico (su propio inverso).
El operador % 26 modela el abecedario como un anillo (círculo de 26 elementos).
N→A: (N-A+13)%26 = (13+13)%26 = 26%26 = 0 → A+0 = A ✓`,estrategia:"MEMORIZAR",razonEstrategia:"La fórmula modular del ROT13 es el paradigma de todos los cifrados de sustitución. También aparece en alpha_mirror (26-pos-1).",relacionados:["rotone","alpha_mirror"]},pz={id:"repeat_alpha",nombre:"repeat_alpha",nivel:1,dificultad:"medio",tipoEntrega:"programa",archivosEsperados:["repeat_alpha.c"],funcionesPermitidas:["write"],subject:`Assignment name  : repeat_alpha
Expected files   : repeat_alpha.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that takes a string and displays it with each alphabetical
character duplicated as many times as its alphabetical index, followed by a
newline.

'a' duplicated 1 time.
'b' duplicated 2 times.
'z' duplicated 26 times.
'A' duplicated 1 time.
'Z' duplicated 26 times.

Non-alphabetical characters are not duplicated.

If the number of argument is not 1, just display a newline.

Example:
$>./repeat_alpha "abc"
abbccc
$>./repeat_alpha "Alex;1;"
Alllllllllllleeeeexxxxxxxxxxxxxxxxxxxxxxxx;1;
$>./repeat_alpha ""

$>./repeat_alpha`,descripcion:"Programa que recibe un string y repite cada letra tantas veces como su posición en el alfabeto: a=1 vez, b=2 veces, ..., z=26 veces. Minúsculas y mayúsculas tienen la misma posición. Los símbolos se imprimen 1 vez.",palacio:{habitacion:"cocina",mueble:"microondas",personaje:"El Loro Alfa",emoji:"🦜",historia:`En la cocina hay un Loro Alfa glotón que devora letras del abecedario.
Cuando le das una 'a', la repite UNA vez (es la primera, la más rara).
Cuando le das una 'b', la grita DOS veces (segunda letra, segundo plato).
Cuando le das una 'z', enloquece y la chilla VEINTISÉIS veces sin parar.
¡Pero si le das un símbolo como ';' o '3', lo escupe exactamente UNA vez porque no le gusta!
La fórmula mágica del loro: posición = letra - 'a' + 1. ¡El +1 es OBLIGATORIO!`,anclas:["c - 'a' + 1  (minúsculas)","c - 'A' + 1  (mayúsculas)","símbolo → repeat = 1","+1 OBLIGATORIO (a=1, no 0)","else para símbolos, ¡no olvides!"]},herramientas:["strings","ascii","argc"],formulaClave:{descripcion:"Número de repeticiones según posición en el alfabeto",formula:"repeat = c - 'a' + 1",ejemplo:{entrada:"'e'",calculo:"101 - 97 + 1 = 5",resultado:"'eeeee'"},tablaASCII:[{char:"a",ascii:97,calculo:"97-97+1",repeat:1},{char:"b",ascii:98,calculo:"98-97+1",repeat:2},{char:"e",ascii:101,calculo:"101-97+1",repeat:5},{char:"z",ascii:122,calculo:"122-97+1",repeat:26},{char:"A",ascii:65,calculo:"65-65+1",repeat:1},{char:"Z",ascii:90,calculo:"90-65+1",repeat:26}]},versiones:[{id:"clasica",nombre:"Clásica (variable repeat)",descripcion:"Usa variable repeat explícita. La más legible y segura en el examen.",recomendada:!0,codigo:`#include <unistd.h>

int main(int argc, char **argv)
{
	int	i;
	int	j;
	int	repeat;
	char	c;

	if (argc != 2)
	{
		write(1, "\\n", 1);
		return (0);
	}
	i = 0;
	while (argv[1][i])
	{
		c = argv[1][i];
		if (c >= 'a' && c <= 'z')
			repeat = c - 'a' + 1;
		else if (c >= 'A' && c <= 'Z')
			repeat = c - 'A' + 1;
		else
			repeat = 1;
		j = 0;
		while (j < repeat)
		{
			write(1, &c, 1);
			j++;
		}
		i++;
	}
	write(1, "\\n", 1);
	return (0);
}`},{id:"compacta",nombre:"Compacta (función auxiliar)",descripcion:"Separa el cálculo del repeat en una función. Más limpia pero requiere función extra.",recomendada:!1,codigo:`#include <unistd.h>

static int	ft_repeat(char c)
{
	if (c >= 'a' && c <= 'z')
		return (c - 'a' + 1);
	if (c >= 'A' && c <= 'Z')
		return (c - 'A' + 1);
	return (1);
}

int main(int argc, char **argv)
{
	int	i;
	int	j;

	if (argc != 2)
		return (write(1, "\\n", 1), 0);
	i = 0;
	while (argv[1][i])
	{
		j = ft_repeat(argv[1][i]);
		while (j--)
			write(1, &argv[1][i], 1);
		i++;
	}
	write(1, "\\n", 1);
	return (0);
}`},{id:"inline",nombre:"Inline (sin variable repeat)",descripcion:"Todo en el while interior. Más difícil de leer bajo presión, no recomendada.",recomendada:!1,codigo:`#include <unistd.h>

int main(int argc, char **argv)
{
	int	i;
	int	j;
	int	r;

	if (argc != 2)
		return (write(1, "\\n", 1), 0);
	i = 0;
	while (argv[1][i])
	{
		r = (argv[1][i] >= 'a' && argv[1][i] <= 'z') ? argv[1][i] - 'a' + 1
		  : (argv[1][i] >= 'A' && argv[1][i] <= 'Z') ? argv[1][i] - 'A' + 1
		  : 1;
		j = 0;
		while (j++ < r)
			write(1, &argv[1][i], 1);
		i++;
	}
	write(1, "\\n", 1);
	return (0);
}`}],tests:[{id:"test_abc",descripcion:'"abc" → a=1, b=2, c=3',entrada:["abc"],salida:`abbccc
`,tipo:"normal"},{id:"test_Z",descripcion:'"Z" → 26 Z mayúsculas',entrada:["Z"],salida:`ZZZZZZZZZZZZZZZZZZZZZZZZZZ
`,tipo:"edge"},{id:"test_a",descripcion:'"a" → solo 1 a',entrada:["a"],salida:`a
`,tipo:"normal"},{id:"test_vacio",descripcion:"String vacío → solo newline",entrada:[""],salida:`
`,tipo:"edge"},{id:"test_sin_args",descripcion:"Sin argumentos (argc=1) → newline",entrada:[],salida:`
`,tipo:"edge"},{id:"test_dos_args",descripcion:"Dos argumentos (argc=3) → newline",entrada:["abc","def"],salida:`
`,tipo:"edge"},{id:"test_simbolos",descripcion:"Solo símbolos → sin repetición",entrada:[";!@3"],salida:`;!@3
`,tipo:"normal"},{id:"test_mixto",descripcion:'"aA" → a=1 vez, A=1 vez',entrada:["aA"],salida:`aA
`,tipo:"normal"},{id:"test_alex",descripcion:'"Alex;1;" → A(1)+l(12)+e(5)+x(24)+;1;',entrada:["Alex;1;"],salida:`Alllllllllllleeeeexxxxxxxxxxxxxxxxxxxxxxxx;1;
`,tipo:"normal"}],gdbSteps:[{paso:1,titulo:'Inicio: argc=2, argv[1]="abc"',codigo:`(gdb) run "abc"
Starting program: ./repeat_alpha "abc"

Breakpoint 1, main (argc=2, argv=0x7fffffffe198) at repeat_alpha.c:5
5		int i;`,variables:[{nombre:"argc",valor:"2",cambio:!0,nota:"✓ Correcto: 1 argumento"},{nombre:"argv[1]",valor:'"abc"',cambio:!0,nota:"El string a procesar"},{nombre:"i",valor:"?",cambio:!1,nota:"Sin inicializar"},{nombre:"repeat",valor:"?",cambio:!1,nota:"Sin inicializar"}]},{paso:2,titulo:"i = 0, inicia el bucle",codigo:`(gdb) next
11		i = 0;
(gdb) next
12		while (argv[1][i])  → argv[1][0] = 'a' ≠ '\\0', ENTRA`,variables:[{nombre:"i",valor:"0",cambio:!0,nota:'→ apunta a "a"'},{nombre:"argv[1][0]",valor:"'a' (97)",cambio:!1,nota:"Primer char ≠ \\0"}]},{paso:3,titulo:'c = "a" → calcula repeat = 1',codigo:`(gdb) next
13		c = argv[1][i];           // c = 'a'
(gdb) next
15		if (c >= 'a' && c <= 'z') // 97>=97 && 97<=122 → TRUE
16			repeat = c - 'a' + 1; // 97 - 97 + 1 = 1`,variables:[{nombre:"c",valor:"'a' (97)",cambio:!0,nota:"Minúscula detectada"},{nombre:"repeat",valor:"97 - 97 + 1 = 1",cambio:!0,nota:"← posición 1 en alfabeto"}]},{paso:4,titulo:'Bucle j: escribe "a" × 1',codigo:`(gdb) next
20		j = 0;
(gdb) next
21		while (j < repeat)  // 0 < 1 → TRUE
22			write(1, &c, 1);  // output: "a"
(gdb) next
23			j++;              // j=1
(gdb) next
21		while (j < repeat)  // 1 < 1 → FALSE, sale`,variables:[{nombre:"j",valor:"0 → 1",cambio:!0,nota:""},{nombre:"output",valor:'"a"',cambio:!0,nota:"1 carácter escrito"}]},{paso:5,titulo:'i++ → i=1, c="b" → calcula repeat = 2',codigo:`(gdb) next
24		i++;              // i=1
(gdb) next
12		while (argv[1][i])  // argv[1][1]='b' ≠ '\\0', ENTRA
(gdb) next
13		c = argv[1][i];           // c = 'b'
16			repeat = c - 'a' + 1; // 98 - 97 + 1 = 2`,variables:[{nombre:"i",valor:"1",cambio:!0,nota:""},{nombre:"c",valor:"'b' (98)",cambio:!0,nota:""},{nombre:"repeat",valor:"98 - 97 + 1 = 2",cambio:!0,nota:"← posición 2"}]},{paso:6,titulo:'Bucle j: escribe "bb" × 2',codigo:`(gdb) next  [j=0] write 'b'  → output: "ab"
(gdb) next  [j=1] write 'b'  → output: "abb"
(gdb) next  [j=2] 2<2 FALSE  → sale del while`,variables:[{nombre:"j",valor:"0 → 1 → 2",cambio:!0,nota:""},{nombre:"output",valor:'"abb"',cambio:!0,nota:"2 chars escritos"}]},{paso:7,titulo:'i++ → i=2, c="c" → calcula repeat = 3',codigo:`(gdb) next
i=2, c = argv[1][2] = 'c' (99)
repeat = 'c' - 'a' + 1 = 99 - 97 + 1 = 3`,variables:[{nombre:"i",valor:"2",cambio:!0,nota:""},{nombre:"c",valor:"'c' (99)",cambio:!0,nota:""},{nombre:"repeat",valor:"99 - 97 + 1 = 3",cambio:!0,nota:"← posición 3"}]},{paso:8,titulo:'Bucle j: escribe "ccc" × 3',codigo:`(gdb) next  [j=0] write 'c'  → output: "abbc"
(gdb) next  [j=1] write 'c'  → output: "abbcc"
(gdb) next  [j=2] write 'c'  → output: "abbccc"
(gdb) next  [j=3] 3<3 FALSE  → sale del while`,variables:[{nombre:"j",valor:"0 → 1 → 2 → 3",cambio:!0,nota:""},{nombre:"output",valor:'"abbccc"',cambio:!0,nota:"3 chars escritos"}]},{paso:9,titulo:'i++ → i=3, argv[1][3]="\\0" → sale del while principal',codigo:`(gdb) next
i=3
while (argv[1][3])  // '\\0' = 0 → FALSE, sale del bucle
→ write(1, "\\n", 1)  // output: "abbccc\\n"`,variables:[{nombre:"i",valor:"3",cambio:!0,nota:""},{nombre:"argv[1][3]",valor:"'\\0' (0)",cambio:!1,nota:"Fin del string"},{nombre:"output",valor:'"abbccc\\n"',cambio:!0,nota:"Newline final añadido"}]},{paso:10,titulo:"return 0 — Programa termina",codigo:`(gdb) next
return (0);
[Inferior 1 (process 12345) exited normally]
$> echo $?
0`,variables:[{nombre:"exit code",valor:"0",cambio:!1,nota:"✓ Sin errores"},{nombre:"output total",valor:'"abbccc\\n"',cambio:!1,nota:"✓ Correcto"}]}],trampas:[{severidad:"mortal",titulo:"Olvidar el +1 → a sale 0 veces (invisible)",descripcion:'Sin el +1, la fórmula da repeat=0 para "a". La letra desaparece del output y la Moulinette falla.',codigoMal:`// ❌ SIN +1
if (c >= 'a' && c <= 'z')
    repeat = c - 'a';     // 'a'-'a' = 0 → no se imprime nada
                          // 'b'-'a' = 1 → sale 1 vez en vez de 2`,codigoBien:`// ✅ CON +1
if (c >= 'a' && c <= 'z')
    repeat = c - 'a' + 1; // 'a'-'a'+1 = 1 ✓
                           // 'b'-'a'+1 = 2 ✓`},{severidad:"mortal",titulo:"Olvidar el else para símbolos → repeat basura",descripcion:"Sin el else final, repeat queda con el valor anterior cuando el char es un símbolo. Imprime basura.",codigoMal:`// ❌ SIN else → repeat queda con valor anterior
if (c >= 'a' && c <= 'z')
    repeat = c - 'a' + 1;
else if (c >= 'A' && c <= 'Z')
    repeat = c - 'A' + 1;
// ";" con repeat anterior = 3 → ";;;" en vez de ";"`,codigoBien:`// ✅ CON else → símbolos = 1 vez
if (c >= 'a' && c <= 'z')
    repeat = c - 'a' + 1;
else if (c >= 'A' && c <= 'Z')
    repeat = c - 'A' + 1;
else
    repeat = 1; // ← OBLIGATORIO`},{severidad:"warning",titulo:"No inicializar i = 0 antes del while",descripcion:"i tiene valor basura si no se inicializa. Normas de 42: declarar + inicializar por separado.",codigoMal:`// ❌ Comportamiento indefinido
int i;
// ... (sin i = 0)
while (argv[1][i]) // i = basura`,codigoBien:`// ✅
int i;

i = 0;  // ← siempre antes del while
while (argv[1][i])`}],bajoCelCapot:`RAM: argv[1] es un puntero al string del argumento en el stack del proceso.
Cada argv[1][i] accede a una dirección de memoria: argv[1] + i.

CPU: El bucle externo (i) itera por el array de chars hasta encontrar \\0.
El bucle interno (j) llama a write() N veces, donde N = posición en alfabeto.

SYSCALL write(1, &c, 1):
- fd=1 → stdout
- &c → dirección de la variable local c en el stack
- 1 → escribe exactamente 1 byte
Cada write es una llamada al kernel (syscall número 1 en Linux x86-64).

ARITMÉTICA ASCII:
- 'a'=97, 'z'=122 (rango 97-122)
- 'A'=65, 'Z'=90  (rango 65-90)
- La diferencia entre mayúscula y minúscula es siempre 32
- c-'a'+1 convierte el char a su posición (1-indexed)`,estrategia:"MEMORIZAR",razonEstrategia:'La fórmula c-"a"+1 hay que recordarla de memoria. El patrón if/else if/else también. No hay forma de deducirla bajo presión.',relacionados:["rot_13","rotone","ulstr","alpha_mirror"],progreso:{estado:"no_iniciado",testsPasados:0,testsTotal:9,intentos:0,ultimaVez:null,proximaRepasion:null,intervaloDias:1,notas:""}},mz={id:"search_and_replace",nombre:"search_and_replace",nivel:1,dificultad:"medio",tipoEntrega:"programa",archivosEsperados:["search_and_replace.c"],funcionesPermitidas:["write"],subject:`Assignment name  : search_and_replace
Expected files   : search_and_replace.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that takes 3 arguments:
  - A string in which to make replacements.
  - The character to search for (given as a string, only the first char counts).
  - The replacement character (given as a string, only the first char counts).

The replacement must be done in the order they appear in the string.

If the number of arguments is not 3, or if the second or third argument is
not a single character, print only a newline.

Example:
$> ./search_and_replace "hello" "l" "r"
herro
$> ./search_and_replace "hello" "x" "r"
hello
$>`,descripcion:"Programa que reemplaza todas las ocurrencias de un carácter en un string. Recibe 3 args: string, char a buscar, char de reemplazo.",palacio:{habitacion:"cocina",mueble:"tabla de cortar",personaje:"El Ninja Reemplazador",emoji:"🥷",historia:`En la tabla de cortar trabaja el Ninja Reemplazador.
Le das el string (la lista de ingredientes), el ingrediente a quitar (search) y el nuevo (replace).
Recorre la lista de principio a fin.
Cuando encuentra el ingrediente a quitar, lo sustituye por el nuevo.
Si no lo encuentra, deja el ingrediente sin tocar.
¡Solo acepta EXACTAMENTE 3 argumentos! Con más o menos, huye.`,anclas:["argc != 3 → solo \\n y exit","search = argv[2][0] ← solo el primer char","replace = argv[3][0] ← solo el primer char","if (c == search) write replace; else write c;","recorre argv[1] byte a byte"]},herramientas:["strings","argc"],formulaClave:{descripcion:"Por cada carácter: si es el buscado, escribe el reemplazo; si no, escribe el original",formula:"if (str[i] == search) write(replace); else write(str[i]);",ejemplo:{entrada:'"hello", search="l", replace="r"',calculo:"h→h e→e l→r l→r o→o",resultado:"herro"}},versiones:[{id:"clasica",nombre:"Clásica",descripcion:"La más directa y legible en el examen.",recomendada:!0,codigo:`#include <unistd.h>

int	main(int argc, char **argv)
{
	char	search;
	char	replace;
	int	i;

	if (argc != 4)
	{
		write(1, "\\n", 1);
		return (0);
	}
	search = argv[2][0];
	replace = argv[3][0];
	i = 0;
	while (argv[1][i])
	{
		if (argv[1][i] == search)
			write(1, &replace, 1);
		else
			write(1, &argv[1][i], 1);
		i++;
	}
	write(1, "\\n", 1);
	return (0);
}`}],tests:[{id:"test_hello_lr",descripcion:'"hello" l→r → "herro"',entrada:["hello","l","r"],salida:`herro
`,tipo:"normal"},{id:"test_no_match",descripcion:'"hello" x→r → sin cambios',entrada:["hello","x","r"],salida:`hello
`,tipo:"normal"},{id:"test_reemplaza_todos",descripcion:'"hello world" o→a → "hella warld"',entrada:["hello world","o","a"],salida:`hella warld
`,tipo:"normal"},{id:"test_bad_args",descripcion:"Sin argumentos → error",entrada:[],salida:`search_and_replace: bad arguments
`,tipo:"edge"},{id:"test_bad_args2",descripcion:"Un solo argumento → error",entrada:["hello"],salida:`search_and_replace: bad arguments
`,tipo:"edge"},{id:"test_primer_char",descripcion:'search="HH" → solo usa el primer char "H"',entrada:["Hello","H","h"],salida:`hello
`,tipo:"normal"}],gdbSteps:[{paso:1,titulo:'Entrada: "hello", "l", "r" → argc=4',codigo:`argc=4, argv[1]="hello", argv[2]="l", argv[3]="r"
search = argv[2][0] = 'l'
replace = argv[3][0] = 'r'
i = 0`,variables:[{nombre:"argc",valor:"4",cambio:!0,nota:"✓ Correcto: programa + 3 args"},{nombre:"search",valor:"'l'",cambio:!0,nota:""},{nombre:"replace",valor:"'r'",cambio:!0,nota:""}]},{paso:2,titulo:'i=0: "h" ≠ "l" → escribe "h"',codigo:`argv[1][0] = 'h'
'h' == 'l' → FALSE
write(1, &argv[1][0], 1) → stdout: "h"
i = 1`,variables:[{nombre:"stdout",valor:'"h"',cambio:!0,nota:""}]},{paso:3,titulo:'i=1: "e" ≠ "l" → escribe "e". i=2: "l" == "l" → escribe "r"',codigo:`[i=1] 'e' ≠ 'l' → write 'e' → stdout: "he"
[i=2] 'l' == 'l' → write REPLACE='r' → stdout: "her"`,variables:[{nombre:"stdout",valor:'"her"',cambio:!0,nota:'Primera "l" reemplazada por "r"'}]},{paso:4,titulo:'i=3: segunda "l" → escribe "r". i=4: "o" → escribe "o"',codigo:`[i=3] 'l' == 'l' → write 'r' → stdout: "herr"
[i=4] 'o' ≠ 'l' → write 'o' → stdout: "herro"`,variables:[{nombre:"stdout",valor:'"herro"',cambio:!0,nota:""}]},{paso:5,titulo:"\\0 → sale del while, write \\n",codigo:`argv[1][5] = '\\0' → FALSE → sale
write("\\n", 1)
stdout: "herro\\n"`,variables:[{nombre:"stdout",valor:'"herro\\n"',cambio:!0,nota:"✓ Resultado correcto"}]}],trampas:[{severidad:"mortal",titulo:"argc != 3 en vez de argc != 4 (el programa mismo cuenta)",descripcion:"argc incluye el nombre del programa (argv[0]). Con 3 argumentos del usuario, argc = 4. Si compruebas argc != 3 o argc != 2, el programa siempre falla.",codigoMal:`// ❌ Confunde argc: programa+3args = argc=4
if (argc != 3)  // nunca ejecuta con 3 args reales`,codigoBien:`// ✅ argc=4 con 3 argumentos de usuario
if (argc != 4)  // correcto: ./prog str search replace`},{severidad:"mortal",titulo:"write(1, &replace, 1) donde replace es un char local",descripcion:"write necesita una dirección. Si escribes write(1, argv[3], 1) está bien (ya es un char*). Pero si intentas write(1, &(argv[3][0]), 1) también funciona. El problema es pasar un literal directamente.",codigoMal:`// ❌ No funciona: literal no tiene dirección tomable fácilmente
write(1, "r", 1);  // escribe siempre 'r', no el replace de argv`,codigoBien:`// ✅ Variable local con &
char replace = argv[3][0];
write(1, &replace, 1);  // correcto`},{severidad:"warning",titulo:"No añadir \\n al final",descripcion:"La salida debe terminar en \\n según las normas de 42. Sin él, la Moulinette compara byte a byte y falla.",codigoMal:`// ❌ Sin \\n
while (argv[1][i])
    // ...imprime chars
return (0); // sin write("\\n", 1)`,codigoBien:`// ✅ \\n siempre al final
while (argv[1][i]) { /* ... */ i++; }
write(1, "\\n", 1);
return (0);`}],bajoCelCapot:`argv[2][0] accede al primer byte del tercer argumento.
Si argv[2] = "lll", solo se usa argv[2][0] = 'l'.
La búsqueda es O(n): recorre el string una sola vez.
Es una versión simplificada de sed s/old/new/g.`,estrategia:"MEMORIZAR",razonEstrategia:"Patrón de transformación carácter a carácter. Base conceptual de ft_strchr, ft_strrchr, inter, union.",relacionados:["inter","union","ft_strcspn"]},fz={id:"ulstr",nombre:"ulstr",nivel:1,dificultad:"fácil",tipoEntrega:"programa",archivosEsperados:["ulstr.c"],funcionesPermitidas:["write"],subject:`Assignment name  : ulstr
Expected files   : ulstr.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that takes a string and swaps the case of every alphabetical
character, then displays the result followed by a newline.

If the number of arguments is not 1, display a newline.

Examples:
$> ./ulstr "Hello World"
hELLO wORLD
$> ./ulstr "L'heure c'est l'heure"
l'HEURE C'EST L'HEURE
$>`,descripcion:"Programa que intercambia el case de cada carácter: mayúsculas pasan a minúsculas y minúsculas a mayúsculas. Los no-alfabéticos no cambian.",palacio:{habitacion:"cocina",mueble:"batidora",personaje:"Ultrón igualador",emoji:"🔄",historia:`En la batidora de la cocina vive Ultrón igualador.
Todo lo que entra sale con el case INVERTIDO.
Las mayúsculas se BAJAN y las minúsculas se SUBEN.
Los símbolos, espacios y números: los deja pasar sin tocarlos.
Fórmula: si mayúscula → toLowerCase(); si minúscula → toUpperCase().`,anclas:["c >= 'A' && c <= 'Z' → c + 32  ← mayúscula→minúscula","c >= 'a' && c <= 'z' → c - 32  ← minúscula→mayúscula","símbolos/espacios → sin cambio","argc != 2 → solo \\n","+32 y -32 = diferencia ASCII entre mayúscula y minúscula"]},herramientas:["strings","ascii"],formulaClave:{descripcion:"La diferencia ASCII entre mayúscula y minúscula es siempre 32",formula:"mayúscula: c + 32; minúscula: c - 32;",ejemplo:{entrada:"'H' (72) y 'e' (101)",calculo:"H: 72 + 32 = 104 = h; e: 101 - 32 = 69 = E",resultado:"h, E"},tablaASCII:[{char:"A",ascii:65,calculo:"65+32",resultado:"a (97)"},{char:"Z",ascii:90,calculo:"90+32",resultado:"z (122)"},{char:"a",ascii:97,calculo:"97-32",resultado:"A (65)"},{char:"z",ascii:122,calculo:"122-32",resultado:"Z (90)"}]},versiones:[{id:"clasica",nombre:"Clásica con +32 / -32",descripcion:"Usa la diferencia ASCII 32 entre mayúsculas y minúsculas. La más directa.",recomendada:!0,codigo:`#include <unistd.h>

int	main(int argc, char **argv)
{
	int	i;
	char	c;

	if (argc != 2)
	{
		write(1, "\\n", 1);
		return (0);
	}
	i = 0;
	while (argv[1][i])
	{
		c = argv[1][i];
		if (c >= 'A' && c <= 'Z')
			c = c + 32;
		else if (c >= 'a' && c <= 'z')
			c = c - 32;
		write(1, &c, 1);
		i++;
	}
	write(1, "\\n", 1);
	return (0);
}`},{id:"con_constante",nombre:"Con constante nombrada",descripcion:"Define la diferencia ASCII como constante para mayor claridad.",recomendada:!1,codigo:`#include <unistd.h>

# define CASE_DIFF 32

int	main(int argc, char **argv)
{
	int	i;
	char	c;

	if (argc != 2)
		return (write(1, "\\n", 1), 0);
	i = 0;
	while (argv[1][i])
	{
		c = argv[1][i];
		if (c >= 'A' && c <= 'Z')
			c += CASE_DIFF;
		else if (c >= 'a' && c <= 'z')
			c -= CASE_DIFF;
		write(1, &c, 1);
		i++;
	}
	write(1, "\\n", 1);
	return (0);
}`}],tests:[{id:"test_hello",descripcion:'"Hello" → "hELLO" (H→h, e→E, l→L, l→L, o→O)',entrada:["Hello"],salida:`hELLO
`,tipo:"normal"},{id:"test_lower",descripcion:'"hello" → "HELLO" (todas minúsculas → todas mayúsculas)',entrada:["hello"],salida:`HELLO
`,tipo:"normal"},{id:"test_upper",descripcion:'"HELLO" → "hello" (todas mayúsculas → todas minúsculas)',entrada:["HELLO"],salida:`hello
`,tipo:"normal"},{id:"test_con_espacio",descripcion:'"Hello World" → "hELLO wORLD"',entrada:["Hello World"],salida:`hELLO wORLD
`,tipo:"normal"},{id:"test_numeros",descripcion:'"42abc" → "42ABC" (dígitos sin cambio)',entrada:["42abc"],salida:`42ABC
`,tipo:"normal"},{id:"test_sin_args",descripcion:"Sin argumentos → solo \\n",entrada:[],salida:`
`,tipo:"edge"},{id:"test_vacio",descripcion:"String vacío → solo \\n",entrada:[""],salida:`
`,tipo:"edge"}],gdbSteps:[{paso:1,titulo:'Entrada: "Hello"',codigo:`argc=2, argv[1]="Hello"
i = 0`,variables:[{nombre:"argv[1]",valor:'"Hello"',cambio:!0,nota:""}]},{paso:2,titulo:'"H" (72) → mayúscula → +32 → "h" (104)',codigo:`c = 'H' (72)
c >= 'A' && c <= 'Z' → TRUE
c = 72 + 32 = 104 = 'h'
write 'h'`,variables:[{nombre:"c",valor:"'H'(72) → 'h'(104)",cambio:!0,nota:"72+32=104"},{nombre:"stdout",valor:'"h"',cambio:!0,nota:""}]},{paso:3,titulo:'"e" (101) → minúscula → -32 → "E" (69)',codigo:`c = 'e' (101)
c >= 'a' && c <= 'z' → TRUE
c = 101 - 32 = 69 = 'E'
write 'E'`,variables:[{nombre:"c",valor:"'e'(101) → 'E'(69)",cambio:!0,nota:"101-32=69"},{nombre:"stdout",valor:'"hE"',cambio:!0,nota:""}]},{paso:4,titulo:'"l" → "L", "l" → "L", "o" → "O"',codigo:`[i=2] 'l'(108) -32 → 'L'(76) → stdout: "hEL"
[i=3] 'l'(108) -32 → 'L'(76) → stdout: "hELL"
[i=4] 'o'(111) -32 → 'O'(79) → stdout: "hELLO"`,variables:[{nombre:"stdout",valor:'"hELLO"',cambio:!0,nota:""}]},{paso:5,titulo:"\\0 → sale, write \\n",codigo:`argv[1][5] = '\\0' → FALSE → sale
write("\\n", 1)
stdout: "hELLO\\n"`,variables:[{nombre:"stdout",valor:'"hELLO\\n"',cambio:!0,nota:"✓"}]}],trampas:[{severidad:"mortal",titulo:"+32 en vez de -32 para minúsculas — van más abajo del rango",descripcion:"'a'(97)+32=129, que está fuera del rango ASCII imprimible. Las minúsculas deben RESTAR 32 para ir a mayúsculas.",codigoMal:`// ❌ minúscula +32 → carácter no imprimible
if (c >= 'a' && c <= 'z')
    c = c + 32; // 'a'(97)+32=129 ← fuera de ASCII`,codigoBien:`// ✅ minúscula -32 → mayúscula
if (c >= 'a' && c <= 'z')
    c = c - 32; // 'a'(97)-32=65='A' ✓`},{severidad:"mortal",titulo:"-32 para mayúsculas en vez de +32 — dan caracteres de control",descripcion:"'A'(65)-32=33='!'. Las mayúsculas deben SUMAR 32 para ir a minúsculas.",codigoMal:`// ❌ mayúscula -32 → signo de puntuación
if (c >= 'A' && c <= 'Z')
    c = c - 32; // 'A'(65)-32=33='!' ← MALO`,codigoBien:`// ✅ mayúscula +32 → minúscula
if (c >= 'A' && c <= 'Z')
    c = c + 32; // 'A'(65)+32=97='a' ✓`},{severidad:"warning",titulo:"Olvidar el else — símbolos procesados por ambas ramas",descripcion:"Si usas if sin else if, un carácter que no sea letra podría entrar por las dos condiciones y cambiar incorrectamente.",codigoMal:`// ❌ sin else — doble procesamiento (aunque aquí el rango evita el problema en práctica, es mala forma)
if (c >= 'A' && c <= 'Z') c += 32;
if (c >= 'a' && c <= 'z') c -= 32;  // after +32, 'A' → 'a' might re-enter`,codigoBien:`// ✅ con else if — mutuamente exclusivo
if (c >= 'A' && c <= 'Z')
    c += 32;
else if (c >= 'a' && c <= 'z')
    c -= 32;`}],bajoCelCapot:`El alfabeto ASCII está organizado de forma que la diferencia entre
una letra mayúscula y su minúscula es siempre 32:
'a'-'A' = 97-65 = 32
'z'-'Z' = 122-90 = 32
El bit 5 (valor 32) es el bit de case: 0=mayúscula, 1=minúscula.
Por eso XOR con 32 también haría el swap: c ^= 32 (si es letra).`,estrategia:"MEMORIZAR",razonEstrategia:"La constante 32 entre mayúscula/minúscula aparece en casi todos los ejercicios que manipulan letras: str_capitalizer, rstr_capitalizer, is_alpha.",relacionados:["str_capitalizer","rotone","alpha_mirror"]},hz={id:"alpha_mirror",nombre:"alpha_mirror",nivel:2,dificultad:"medio",tipoEntrega:"programa",archivosEsperados:["alpha_mirror.c"],funcionesPermitidas:["write"],subject:`Assignment name  : alpha_mirror
Expected files   : alpha_mirror.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that takes a string and displays it, replacing each
alphabetical character by the character that has the opposite position in the
alphabetical order.

'a' is replaced by 'z', 'b' by 'y', 'c' by 'x', ..., 'z' by 'a'.
Upper and lower case letters are handled separately.

Non-alphabetical characters are not changed.

If the number of arguments is not 1, display a newline.

Examples:
$> ./alpha_mirror "Hello World!"
Svool Dliow!
$> ./alpha_mirror ""

$>`,descripcion:"Programa que espeja el alfabeto: a↔z, b↔y, ... z↔a. Mayúsculas y minúsculas por separado. Símbolos sin cambio.",palacio:{habitacion:"salon",mueble:"espejo",personaje:"El Espejo del abecedario",emoji:"🔁",historia:`En el salón hay un Espejo Mágico del abecedario.
Cuando le das una 'a', te devuelve la 'z' (su opuesto).
Cuando le das una 'b', devuelve la 'y'. Cuando das 'z', devuelve 'a'.
Fórmula: la posición desde el final = 25 - (posición desde el inicio).
El espejo maneja mayúsculas y minúsculas por separado (A↔Z, a↔z).`,anclas:["'z' - (c - 'a')  ← fórmula minúsculas","'Z' - (c - 'A')  ← fórmula mayúsculas","a↔z, b↔y, m↔n  ← el punto medio","símbolos y espacios: sin cambio","argc != 2 → solo \\n"]},herramientas:["strings","ascii"],formulaClave:{descripcion:"Posición especular: 25 - posición_original",formula:"c = 'z' - (c - 'a')  ó equivalente  c = 'a' + 'z' - c",ejemplo:{entrada:"'H' (pos 7 desde A)",calculo:"'Z' - (72 - 65) = 90 - 7 = 83 = 'S'",resultado:"'S'"},tablaASCII:[{char:"a",ascii:97,calculo:"122-(97-97)=122",resultado:"z"},{char:"z",ascii:122,calculo:"122-(122-97)=97",resultado:"a"},{char:"H",ascii:72,calculo:"90-(72-65)=83",resultado:"S"},{char:"m",ascii:109,calculo:"122-(109-97)=110",resultado:"n"}]},versiones:[{id:"clasica",nombre:"Clásica con fórmula de espejo",descripcion:'La fórmula directa "z - (c - a)" es la más elegante y sin casos especiales.',recomendada:!0,codigo:`#include <unistd.h>

int	main(int argc, char **argv)
{
	int	i;
	char	c;

	if (argc != 2)
	{
		write(1, "\\n", 1);
		return (0);
	}
	i = 0;
	while (argv[1][i])
	{
		c = argv[1][i];
		if (c >= 'a' && c <= 'z')
			c = 'z' - (c - 'a');
		else if (c >= 'A' && c <= 'Z')
			c = 'Z' - (c - 'A');
		write(1, &c, 1);
		i++;
	}
	write(1, "\\n", 1);
	return (0);
}`},{id:"suma",nombre:"Con suma directa",descripcion:"Equivalente: 'a' + 'z' - c = 97 + 122 - c = 219 - c.",recomendada:!1,codigo:`#include <unistd.h>

int	main(int argc, char **argv)
{
	int	i;
	char	c;

	if (argc != 2)
		return (write(1, "\\n", 1), 0);
	i = 0;
	while (argv[1][i])
	{
		c = argv[1][i];
		if (c >= 'a' && c <= 'z')
			c = 'a' + 'z' - c;
		else if (c >= 'A' && c <= 'Z')
			c = 'A' + 'Z' - c;
		write(1, &c, 1);
		i++;
	}
	write(1, "\\n", 1);
	return (0);
}`}],tests:[{id:"test_abc",descripcion:'"abc" → "zyx"',entrada:["abc"],salida:`zyx
`,tipo:"normal"},{id:"test_hello",descripcion:'"Hello" → "Svool"',entrada:["Hello"],salida:`Svool
`,tipo:"normal"},{id:"test_az",descripcion:'"Az" → "Za" (extremos del alfabeto)',entrada:["Az"],salida:`Za
`,tipo:"edge"},{id:"test_mn",descripcion:'"mn" → "nm" (punto medio del alfabeto)',entrada:["mn"],salida:`nm
`,tipo:"normal"},{id:"test_simbolos",descripcion:'"hello world!" → "svool dliow!" (símbolos sin cambio)',entrada:["hello world!"],salida:`svool dliow!
`,tipo:"normal"},{id:"test_sin_args",descripcion:"Sin argumentos → solo \\n",entrada:[],salida:`
`,tipo:"edge"}],gdbSteps:[{paso:1,titulo:'Entrada: "abc"',codigo:`argc=2, argv[1]="abc"
i=0, c='a'(97)
c >= 'a' && c <= 'z' → TRUE
c = 'z' - ('a' - 'a') = 122 - 0 = 122 = 'z'
write 'z'`,variables:[{nombre:"c",valor:"'a'(97) → 'z'(122)",cambio:!0,nota:"97-97=0, 122-0=122"},{nombre:"stdout",valor:'"z"',cambio:!0,nota:""}]},{paso:2,titulo:'i=1: "b"(98) → "y"(121)',codigo:`c = 'b' (98)
c = 'z' - ('b' - 'a') = 122 - 1 = 121 = 'y'
write 'y'`,variables:[{nombre:"c",valor:"'b'(98) → 'y'(121)",cambio:!0,nota:"98-97=1, 122-1=121"}]},{paso:3,titulo:'i=2: "c"(99) → "x"(120)',codigo:`c = 'c' (99)
c = 'z' - ('c' - 'a') = 122 - 2 = 120 = 'x'
write 'x'
stdout: "zyx\\n"`,variables:[{nombre:"stdout",valor:'"zyx\\n"',cambio:!0,nota:"✓"}]}],trampas:[{severidad:"mortal",titulo:"Mezclar rangos mayúsculas/minúsculas",descripcion:"c = 'z' - (c - 'a') para mayúsculas da resultados erróneos. 'A'(65) - 'a'(97) = -32 → 122-(-32) = 154, fuera de ASCII.",codigoMal:`// ❌ Usa offset de minúscula para mayúsculas
if (c >= 'A' && c <= 'Z')
    c = 'z' - (c - 'a');  // 'A'(65)-'a'(97)=-32 → 122+32=154 ← fuera de rango`,codigoBien:`// ✅ Cada rango con su propia base
if (c >= 'A' && c <= 'Z')
    c = 'Z' - (c - 'A');  // 'A'(65)-'A'(65)=0 → 90-0=90='Z' ✓`},{severidad:"warning",titulo:"alpha_mirror vs rot_13: la fórmula no es la misma",descripcion:"ROT13 suma 13. alpha_mirror hace 'z'-posicion (espejo). Son cifrados distintos. No confundirlos.",codigoMal:`// ❌ ROT13, no alpha_mirror
c = 'a' + (c - 'a' + 13) % 26;`,codigoBien:`// ✅ alpha_mirror (espejo del alfabeto)
c = 'z' - (c - 'a');`}],bajoCelCapot:`Posición de 'a' = 0, 'b' = 1, ..., 'z' = 25.
Espejo: posición_nueva = 25 - posición_original.
Equivalencias: 'z' - (c - 'a') = 'a' + 'z' - c = 219 - c (para minúsculas).
Es su propio inverso: aplicar dos veces da el original.`,estrategia:"MEMORIZAR",razonEstrategia:'La fórmula de espejo "z-(c-a)" aparece también en cifrados simétricos y manipulaciones de rango alfabético.',relacionados:["rot_13","rotone","ulstr"]},gz={id:"camel_to_snake",nombre:"camel_to_snake",nivel:2,dificultad:"medio",tipoEntrega:"programa",archivosEsperados:["camel_to_snake.c"],funcionesPermitidas:["write"],subject:`Assignment name  : camel_to_snake
Expected files   : camel_to_snake.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that takes a single string in lowerCamelCase format and
converts it into a string in snake_case format.

The result must be in lowercase.

If the number of arguments is not 1, display a newline.

Examples:
$> ./camel_to_snake "helloWorld"
hello_world
$> ./camel_to_snake "helloWorldFoo"
hello_world_foo
$> ./camel_to_snake ""

$>`,descripcion:'Programa que convierte lowerCamelCase a snake_case: cada letra mayúscula se reemplaza por "_" + su versión minúscula.',palacio:{habitacion:"salon",mueble:"alfombra",personaje:"El Camello que tropieza",emoji:"🐫",historia:`En el salón hay un Camello con jorobas que TROPIEZA en cada mayúscula.
Cuando el Camello tropieza (letra mayúscula), grita "_" y cae al suelo (minúscula).
Las letras normales las pisa sin problemas (las escribe tal cual).
Fórmula: mayúscula → '_' + (c + 32).
¡El lowerCamelCase comienza SIEMPRE en minúscula, nunca hay "_" al inicio!`,anclas:["mayúscula → write '_'; write c+32","minúscula → write c (sin cambio)","símbolos/nums → write tal cual","argc != 2 → solo \\n","+32 convierte mayúscula a minúscula"]},herramientas:["strings","ascii"],formulaClave:{descripcion:'Mayúscula → "_" + minúscula equivalente (+32)',formula:"if (uppercase) { write('_'); write(c + 32); } else write(c);",ejemplo:{entrada:'"helloWorld"',calculo:"h,e,l,l,o → iguales; W(87) → _+w(119)",resultado:"hello_world"}},versiones:[{id:"clasica",nombre:"Clásica con +32",descripcion:"La más directa: detecta mayúscula, escribe underscore y la versión +32.",recomendada:!0,codigo:`#include <unistd.h>

int	main(int argc, char **argv)
{
	int	i;
	char	c;
	char	underscore;

	if (argc != 2)
	{
		write(1, "\\n", 1);
		return (0);
	}
	underscore = '_';
	i = 0;
	while (argv[1][i])
	{
		c = argv[1][i];
		if (c >= 'A' && c <= 'Z')
		{
			write(1, &underscore, 1);
			c = c + 32;
		}
		write(1, &c, 1);
		i++;
	}
	write(1, "\\n", 1);
	return (0);
}`},{id:"array",nombre:"Con string de underscore",descripcion:'Escribe "_" directamente como string literal. Más compacta.',recomendada:!1,codigo:`#include <unistd.h>

int	main(int argc, char **argv)
{
	int	i;
	char	c;

	if (argc != 2)
		return (write(1, "\\n", 1), 0);
	i = 0;
	while (argv[1][i])
	{
		c = argv[1][i];
		if (c >= 'A' && c <= 'Z')
		{
			write(1, "_", 1);
			c += 32;
		}
		write(1, &c, 1);
		i++;
	}
	write(1, "\\n", 1);
	return (0);
}`}],tests:[{id:"test_basic",descripcion:'"helloWorld" → "hello_world"',entrada:["helloWorld"],salida:`hello_world
`,tipo:"normal"},{id:"test_multi",descripcion:'"helloWorldFoo" → "hello_world_foo"',entrada:["helloWorldFoo"],salida:`hello_world_foo
`,tipo:"normal"},{id:"test_nouppercase",descripcion:'"already" → sin cambios',entrada:["already"],salida:`already
`,tipo:"normal"},{id:"test_leading",descripcion:'"CamelCase" → "_camel_case" (C inicial)',entrada:["CamelCase"],salida:`_camel_case
`,tipo:"edge"},{id:"test_vacio",descripcion:"String vacío → solo \\n",entrada:[""],salida:`
`,tipo:"edge"},{id:"test_sin_args",descripcion:"Sin argumentos → solo \\n",entrada:[],salida:`
`,tipo:"edge"}],gdbSteps:[{paso:1,titulo:'"helloWorld": h,e,l,l,o sin cambio',codigo:`[i=0..4] 'h','e','l','l','o' → todos minúsculas → write tal cual
stdout: "hello"`,variables:[{nombre:"stdout",valor:'"hello"',cambio:!0,nota:""},{nombre:"i",valor:"5",cambio:!0,nota:""}]},{paso:2,titulo:'i=5: "W"(87) → mayúscula → escribe "_" luego "w"(119)',codigo:`c = 'W' (87)
c >= 'A' && c <= 'Z' → TRUE
write(1, &underscore, 1) → stdout: "hello_"
c = 87 + 32 = 119 = 'w'
write(1, &c, 1) → stdout: "hello_w"`,variables:[{nombre:"c",valor:"'W'(87) → '_' luego 'w'(119)",cambio:!0,nota:"87+32=119"},{nombre:"stdout",valor:'"hello_w"',cambio:!0,nota:""}]},{paso:3,titulo:'"orld" sin cambio → stdout: "hello_world\\n"',codigo:`[i=6..9] 'o','r','l','d' → minúsculas → write tal cual
write("\\n")
stdout: "hello_world\\n"`,variables:[{nombre:"stdout",valor:'"hello_world\\n"',cambio:!0,nota:"✓"}]}],trampas:[{severidad:"mortal",titulo:'write("_", 1) con literal string → write necesita &char',descripcion:'write(1, "_", 1) funciona (string literal es un char* válido). Pero write(1, &"_", 1) es un puntero a puntero, no funciona. Lo más seguro: `char u = "_"; write(1, &u, 1)`.',codigoMal:`// ❌ No es error de compilación pero el comportamiento puede sorprender
char *u = "_";
write(1, &u, 1);  // &u es la dirección del PUNTERO, no del char`,codigoBien:`// ✅ Dos formas válidas:
write(1, "_", 1);          // string literal como char*
// o:
char u = '_';
write(1, &u, 1);           // dirección del char local`},{severidad:"mortal",titulo:"-32 en vez de +32 para pasar de mayúscula a minúscula",descripcion:"Mayúscula A(65) → minúscula a(97). La diferencia es +32, no -32. c-32 daría c='!' para 'A'.",codigoMal:`// ❌ -32 va en la dirección equivocada
c = c - 32; // 'A'(65)-32=33='!' ← carácter de control`,codigoBien:`// ✅ +32 convierte mayúscula a minúscula
c = c + 32; // 'A'(65)+32=97='a' ✓`},{severidad:"warning",titulo:'"CamelCase" → "_camel_case" (con underscore inicial)',descripcion:'Si el primer carácter ya es mayúscula (no es lowerCamelCase puro), el programa añade "_" al inicio. El sujeto no especifica protección contra esto.',codigoMal:`// Comportamiento esperado por el sujeto con "CamelCase":
// _camel_case (con underscore inicial)
// Es correcto según el sujeto. No lo "arregles" añadiendo una condición especial.`,codigoBien:`// El programa es simple: mayúscula → _ + lower, siempre.
// No hace falta distinción para el primer carácter.`}],bajoCelCapot:`lowerCamelCase → snake_case es una conversión de nombrado.
Diferencia ASCII entre mayúsculas y minúsculas: siempre 32.
El underscore ASCII = 95, entre 'Z'(90) y 'a'(97).
Alternativa: usar tolower() si está permitida.`,estrategia:"MEMORIZAR",razonEstrategia:"Patrón de transformación carácter a carácter con escritura condicional de prefijo. Aparece en str_capitalizer.",relacionados:["ulstr","str_capitalizer"]},vz={id:"do_op",nombre:"do_op",nivel:2,dificultad:"fácil",tipoEntrega:"programa",archivosEsperados:["do_op.c"],funcionesPermitidas:["write"],subject:`Assignment name  : do_op
Expected files   : do_op.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that takes three strings:
  - Two representing integer values.
  - One representing an arithmetic operator (+, -, *, /, %).

The program must display the integer result of the requested operation,
followed by a newline.

If the number of parameters is not 3, or if the operator is not one of the
valid operators, simply display "Error", followed by a newline.

Division and modulo by zero also display "Error".

Example:
$> ./do_op 42 "*" 2
84
$> ./do_op 10 / 2
5
$> ./do_op 10 % 0
Error
$>`,descripcion:'Programa que realiza operaciones aritméticas: argc==4 (programa + 3 args). Convierte strings a int, aplica operador, imprime resultado o "Error".',palacio:{habitacion:"salon",mueble:"mesita",personaje:"La Calculadora de la mesita",emoji:"🧮",historia:`En la mesita del salón hay una Calculadora mágica.
Le das TRES argumentos: el número A, el operador (+,-,*,/,%) y el número B.
Si el operador es válido y no hay división por cero, calcula y muestra el resultado.
Si algo está mal (mal argc, operador desconocido, /0), grita "Error".
¡El programa cuenta como argv[0], así que argc válido = 4!`,anclas:["argc != 4 → Error (programa + 3 argumentos)","a = atoi(argv[1]), op = argv[2][0], b = atoi(argv[3])","/ o % con b==0 → Error","operador inválido → Error","división: truncar hacia cero (comportamiento C)"]},herramientas:["strings","argc","ascii"],formulaClave:{descripcion:"Leer dos enteros y un operador, aplicar y escribir resultado",formula:"a = ft_atoi(argv[1]); b = ft_atoi(argv[3]); op = argv[2][0];",ejemplo:{entrada:'"42" "*" "2"',calculo:'a=42, op="*", b=2 → 42*2=84',resultado:"84"}},versiones:[{id:"clasica",nombre:"Clásica con ft_atoi y ft_putnbr propios",descripcion:"La solución completa que implementa las funciones auxiliares necesarias.",recomendada:!0,codigo:`#include <unistd.h>

static int	ft_atoi(char *str)
{
	int	result;
	int	sign;

	result = 0;
	sign = 1;
	while (*str == ' ' || (*str >= '\\t' && *str <= '\\r'))
		str++;
	if (*str == '-' || *str == '+')
	{
		if (*str == '-')
			sign = -1;
		str++;
	}
	while (*str >= '0' && *str <= '9')
		result = result * 10 + (*str++ - '0');
	return (result * sign);
}

static void	ft_putnbr(int n)
{
	char	c;

	if (n < 0)
	{
		write(1, "-", 1);
		n = -n;
	}
	if (n >= 10)
		ft_putnbr(n / 10);
	c = '0' + (n % 10);
	write(1, &c, 1);
}

int	main(int argc, char **argv)
{
	int	a;
	int	b;
	char	op;
	int	result;

	if (argc != 4)
	{
		write(1, "Error\\n", 6);
		return (0);
	}
	a = ft_atoi(argv[1]);
	op = argv[2][0];
	b = ft_atoi(argv[3]);
	if (op == '+')
		result = a + b;
	else if (op == '-')
		result = a - b;
	else if (op == '*')
		result = a * b;
	else if (op == '/' && b != 0)
		result = a / b;
	else if (op == '%' && b != 0)
		result = a % b;
	else
	{
		write(1, "Error\\n", 6);
		return (0);
	}
	ft_putnbr(result);
	write(1, "\\n", 1);
	return (0);
}`}],tests:[{id:"test_suma",descripcion:"42 + 2 → 44",entrada:["42","+","2"],salida:`44
`,tipo:"normal"},{id:"test_resta",descripcion:"10 - 3 → 7",entrada:["10","-","3"],salida:`7
`,tipo:"normal"},{id:"test_mult",descripcion:"6 * 7 → 42",entrada:["6","*","7"],salida:`42
`,tipo:"normal"},{id:"test_div",descripcion:"10 / 3 → 3 (entero truncado)",entrada:["10","/","3"],salida:`3
`,tipo:"normal"},{id:"test_mod",descripcion:"10 % 3 → 1",entrada:["10","%","3"],salida:`1
`,tipo:"normal"},{id:"test_div_cero",descripcion:"5 / 0 → Error",entrada:["5","/","0"],salida:`Error
`,tipo:"edge"},{id:"test_bad_op",descripcion:"Operador ^ inválido → Error",entrada:["5","^","3"],salida:`Error
`,tipo:"edge"},{id:"test_bad_argc",descripcion:"Sin argumentos → Error",entrada:[],salida:`Error
`,tipo:"edge"}],gdbSteps:[{paso:1,titulo:'Entrada: "42" "+" "2" → argc=4',codigo:`argc=4, argv[1]="42", argv[2]="+", argv[3]="2"
a = ft_atoi("42") = 42
op = argv[2][0] = '+'
b = ft_atoi("2") = 2`,variables:[{nombre:"a",valor:"42",cambio:!0,nota:""},{nombre:"op",valor:"'+'",cambio:!0,nota:""},{nombre:"b",valor:"2",cambio:!0,nota:""}]},{paso:2,titulo:"op == '+' → result = 42 + 2 = 44",codigo:`if (op == '+') → TRUE
result = a + b = 42 + 2 = 44
ft_putnbr(44) → write '4','4'
write "\\n"
stdout: "44\\n"`,variables:[{nombre:"result",valor:"44",cambio:!0,nota:""},{nombre:"stdout",valor:'"44\\n"',cambio:!0,nota:"✓"}]},{paso:3,titulo:'Caso error: "5 / 0" → b=0 → Error',codigo:`a=5, op='/', b=0
if (op == '/') → TRUE
if (op == '/' && b != 0) → FALSE (b==0)
→ else → write "Error\\n"`,variables:[{nombre:"b",valor:"0",cambio:!1,nota:"← división por cero"},{nombre:"stdout",valor:'"Error\\n"',cambio:!0,nota:""}]}],trampas:[{severidad:"mortal",titulo:"argc != 3 en vez de argc != 4",descripcion:'El programa "do_op" es argv[0]. Con 3 argumentos de usuario → argc = 4. La comprobación correcta es argc != 4.',codigoMal:`// ❌ argc==3 con 3 args de usuario sería argc=4, no 3
if (argc != 3)  // do_op 42 + 2 → argc=4, no entraría aquí nunca`,codigoBien:`// ✅
if (argc != 4)  // programa + 3 argumentos = 4`},{severidad:"mortal",titulo:"División entera trunca hacia cero en C (no floor)",descripcion:"-7 / 2 = -3 en C (trunca hacia cero), no -4 (que sería floor). La Moulinette espera el comportamiento de C.",codigoMal:`// ❌ No trunca hacia cero correctamente en todos los compiladores
// sin comportamiento definido para negativos en C89`,codigoBien:`// ✅ En C99/C11 la división entera siempre trunca hacia cero
// -7 / 2 = -3 (no -4)
result = a / b;  // comportamiento definido en C99+`},{severidad:"warning",titulo:"Comprobar ambos / y % contra división por cero",descripcion:"Tanto a/0 como a%0 son undefined behavior en C. Hay que proteger ambos.",codigoMal:`// ❌ Solo protege división
else if (op == '/' && b != 0) result = a / b;
else if (op == '%') result = a % b;  // ← a%0 también es UB`,codigoBien:`// ✅ Protege ambos
else if (op == '/' && b != 0) result = a / b;
else if (op == '%' && b != 0) result = a % b;`}],bajoCelCapot:`El operador viene como string (argv[2]). Sólo el primer byte es relevante (argv[2][0]).
La conversión de string a int la hace ft_atoi (o atoi si está permitida).
El resultado debe imprimirse con ft_putnbr (o printf si está permitida).`,estrategia:"MEMORIZAR",razonEstrategia:"Patrón de parseo de argumentos múltiples + conversión de tipos. El manejo de argc==4 es la trampa clásica.",relacionados:["ft_atoi","paramsum"]},bz={id:"ft_atoi",nombre:"ft_atoi",nivel:2,dificultad:"medio",tipoEntrega:"funcion",archivosEsperados:["ft_atoi.c"],funcionesPermitidas:[],subject:`Assignment name  : ft_atoi
Expected files   : ft_atoi.c
Allowed functions: none
--------------------------------------------------------------------------------

Write a function that converts the initial portion of the string pointed to
by str to int representation.

int	ft_atoi(const char *str);

The function should behave like the standard atoi(3) function:
- Skip whitespace characters (space, \\t, \\n, \\r, \\f, \\v).
- Read optional sign (+ or -).
- Read digits until non-digit.
- Return the resulting integer.`,descripcion:"Función que convierte un string a int: salta espacios blancos, lee signo opcional, acumula dígitos. Replica el comportamiento de atoi(3).",palacio:{habitacion:"salon",mueble:"television",personaje:"El Traductor de números",emoji:"🔢",historia:`En el salón hay un Traductor de números que lee el string FASE A FASE.
FASE 1: Salta los espacios blancos (space, tab, \\n, \\r, \\f, \\v) del principio.
FASE 2: Lee el signo opcional (+ o -). Solo un signo.
FASE 3: Acumula dígitos: result = result*10 + (c-'0').
Cuando llega a un carácter no-dígito, para y devuelve el número.`,anclas:["FASE 1: while(isspace) → salta espacios","FASE 2: if (+/-) → signo; ¡solo uno!","FASE 3: while(isdigit) result=result*10+(c-'0')","return (result * sign)","isspace: ' ', \\t, \\n, \\r, \\f, \\v"]},herramientas:["strings","ascii"],formulaClave:{descripcion:"Acumulación de dígitos en base 10",formula:'result = result * 10 + (str[i] - "0");',ejemplo:{entrada:'"  -42hello"',calculo:"salta 2 spaces → sign=-1 → 4: result=4, 2: result=42 → para en h → return -42",resultado:"-42"}},versiones:[{id:"clasica",nombre:"Clásica tres fases",descripcion:"Tres bucles/condiciones explícitos: whitespace, signo, dígitos.",recomendada:!0,codigo:`int	ft_atoi(const char *str)
{
	int	result;
	int	sign;

	result = 0;
	sign = 1;
	while (*str == ' ' || (*str >= '\\t' && *str <= '\\r'))
		str++;
	if (*str == '-' || *str == '+')
	{
		if (*str == '-')
			sign = -1;
		str++;
	}
	while (*str >= '0' && *str <= '9')
	{
		result = result * 10 + (*str - '0');
		str++;
	}
	return (result * sign);
}`},{id:"indice",nombre:"Con índice i",descripcion:"Usa índice explícito en vez de mover el puntero. Igual de válida.",recomendada:!1,codigo:`int	ft_atoi(const char *str)
{
	int	i;
	int	sign;
	int	result;

	i = 0;
	sign = 1;
	result = 0;
	while (str[i] == ' ' || (str[i] >= '\\t' && str[i] <= '\\r'))
		i++;
	if (str[i] == '-' || str[i] == '+')
	{
		if (str[i] == '-')
			sign = -1;
		i++;
	}
	while (str[i] >= '0' && str[i] <= '9')
	{
		result = result * 10 + (str[i] - '0');
		i++;
	}
	return (result * sign);
}`}],tests:[{id:"test_simple",descripcion:'"42" → 42',entrada:["42"],salida:`42
`,tipo:"normal"},{id:"test_negativo",descripcion:'"-42" → -42',entrada:["-42"],salida:`-42
`,tipo:"normal"},{id:"test_positivo",descripcion:'"+5" → 5 (signo positivo explícito)',entrada:["+5"],salida:`5
`,tipo:"normal"},{id:"test_espacios",descripcion:'"  42" → 42 (salta espacios)',entrada:["  42"],salida:`42
`,tipo:"normal"},{id:"test_letras",descripcion:'"abc" → 0 (sin dígitos)',entrada:["abc"],salida:`0
`,tipo:"edge"},{id:"test_mixto",descripcion:'"-15hello" → -15 (para en h)',entrada:["-15hello"],salida:`-15
`,tipo:"normal"},{id:"test_cero",descripcion:'"0" → 0',entrada:["0"],salida:`0
`,tipo:"edge"}],gdbSteps:[{paso:1,titulo:'FASE 1: saltar whitespace en "  -42"',codigo:`str = "  -42"
FASE 1: while(*str==' ') str++
str[0]=' ' → str++
str[1]=' ' → str++
str[2]='-' ≠ ' ' → sale
str ahora apunta a "-42"`,variables:[{nombre:"str",valor:'"  -42" → "-42"',cambio:!0,nota:"2 espacios saltados"},{nombre:"result",valor:"0",cambio:!1,nota:""},{nombre:"sign",valor:"1",cambio:!1,nota:""}]},{paso:2,titulo:'FASE 2: leer signo "-" → sign = -1',codigo:`if (*str == '-') → TRUE
sign = -1
str++  ← ahora apunta a "42"`,variables:[{nombre:"sign",valor:"-1",cambio:!0,nota:"← signo negativo"},{nombre:"str",valor:'"42"',cambio:!0,nota:""}]},{paso:3,titulo:'FASE 3: leer "4" → result = 4',codigo:`while(*str >= '0' && *str <= '9')
*str = '4' (52) → 52>='0' y 52<='9' → TRUE
result = 0*10 + (52-48) = 4
str++`,variables:[{nombre:"result",valor:"4",cambio:!0,nota:"0*10 + (52-48)"}]},{paso:4,titulo:'FASE 3: leer "2" → result = 42',codigo:`*str = '2' (50) → TRUE
result = 4*10 + (50-48) = 42
str++
*str = '\\0' → FALSE → sale del while`,variables:[{nombre:"result",valor:"42",cambio:!0,nota:"4*10+2=42"}]},{paso:5,titulo:"return (result * sign) = 42 * (-1) = -42",codigo:"return (42 * -1) = -42",variables:[{nombre:"retorno",valor:"-42",cambio:!0,nota:"✓"}]}],trampas:[{severidad:"mortal",titulo:`Olvidar los whitespace distintos del espacio (	, 
, \r, \f, \v)`,descripcion:'atoi() salta TODOS los whitespace C: " ", \\t(9), \\n(10), \\r(13), \\f(12), \\v(11). Solo comprobar " " (espacio) hace fallar las pruebas con tabs.',codigoMal:`// ❌ Solo espacio
while (*str == ' ') str++;  // ¡falta \\t, \\n, \\r, \\f, \\v!`,codigoBien:`// ✅ Todos los whitespace
while (*str == ' ' || (*str >= '\\t' && *str <= '\\r'))
    str++;
// \\t=9, \\n=10, \\v=11, \\f=12, \\r=13 → rango 9..13`},{severidad:"mortal",titulo:"Multiplicar result * 10 ANTES de sumar el nuevo dígito",descripcion:'result = result + c - "0" acumula incorrectamente. Siempre: result = result * 10 + dígito.',codigoMal:`// ❌ Sin multiplicar por 10 — solo suma
result = result + (*str - '0');  // "42" → 4+2=6, no 42`,codigoBien:`// ✅
result = result * 10 + (*str - '0');  // "42" → 0*10+4=4, 4*10+2=42 ✓`},{severidad:"warning",titulo:'Doble signo: "--5" o "+-5"',descripcion:'El real atoi() solo lee UN signo. "--5" resultaría en 0 (el segundo "-" no es dígito). No intentes manejar múltiples signos.',codigoMal:`// ❌ Leer múltiples signos
while (*str == '-' || *str == '+') { ... }`,codigoBien:`// ✅ Solo un signo
if (*str == '-' || *str == '+') {
    if (*str == '-') sign = -1;
    str++;
}`}],bajoCelCapot:`El rango ASCII de whitespace: ' '(32), '\\t'(9), '\\n'(10), '\\v'(11), '\\f'(12), '\\r'(13).
El truco \\t..\\r (9..13) captura todos excepto el espacio.
result * 10 + dígito convierte "123" en 1*100+2*10+3=123.
La función no maneja overflow — comportamiento definido por implementación.`,estrategia:"MEMORIZAR",razonEstrategia:"ft_atoi es un building block de ft_atoi_base, do_op, y cualquier parser numérico. Las 3 fases son el patrón universal.",relacionados:["do_op","ft_atoi_base"]},xz={id:"ft_strcmp",nombre:"ft_strcmp",nivel:2,dificultad:"fácil",tipoEntrega:"funcion",archivosEsperados:["ft_strcmp.c"],funcionesPermitidas:[],subject:`Assignment name  : ft_strcmp
Expected files   : ft_strcmp.c
Allowed functions: none
--------------------------------------------------------------------------------

Write a function that compares the two strings s1 and s2.

It returns an integer less than, equal to, or greater than zero if s1 is
found, respectively, to be less than, to match, or to be greater than s2.

int	ft_strcmp(char *s1, char *s2);`,descripcion:"Función que compara dos strings byte a byte. Devuelve 0 si iguales, positivo si s1>s2, negativo si s1<s2. El valor es la diferencia de los primeros bytes distintos.",palacio:{habitacion:"salon",mueble:"balanza",personaje:"La Balanza de strings",emoji:"⚖️",historia:`En el salón hay una Balanza que pesa strings letra a letra.
Compara s1[i] con s2[i] simultáneamente.
Si encuentra una diferencia: devuelve s1[i] - s2[i].
Si llega al final de ambos sin diferencias: devuelve 0 (iguales).
Si s1 termina antes que s2, el \\0 de s1 "pesa" menos que el char de s2.`,anclas:["while (s1[i] == s2[i] && s1[i]) i++","return (unsigned char)s1[i] - (unsigned char)s2[i]","0 = iguales, <0 = s1<s2, >0 = s1>s2","\\0 tiene valor 0 — el más pequeño de todos","comparación byte a byte, no string completo"]},herramientas:["strings","ascii"],formulaClave:{descripcion:"Diferencia del primer byte distinto (o 0 si son iguales hasta el final)",formula:"while (s1[i] == s2[i] && s1[i]) i++; return ((unsigned char)s1[i] - (unsigned char)s2[i]);",ejemplo:{entrada:'"abc" vs "abd"',calculo:"a==a(i++), b==b(i++), c(99) ≠ d(100) → 99-100=-1",resultado:"-1"}},versiones:[{id:"clasica",nombre:"Clásica con while e índice",descripcion:"La más legible. Avanza mientras los chars son iguales y no es \\0.",recomendada:!0,codigo:`int	ft_strcmp(char *s1, char *s2)
{
	int	i;

	i = 0;
	while (s1[i] == s2[i] && s1[i])
		i++;
	return ((unsigned char)s1[i] - (unsigned char)s2[i]);
}`},{id:"puntero",nombre:"Con punteros",descripcion:"Avanza los punteros directamente. Más compacta.",recomendada:!1,codigo:`int	ft_strcmp(char *s1, char *s2)
{
	while (*s1 && *s1 == *s2)
	{
		s1++;
		s2++;
	}
	return ((unsigned char)*s1 - (unsigned char)*s2);
}`}],tests:[{id:"test_igual",descripcion:'"hello" == "hello" → 0',entrada:["hello","hello"],salida:`0
`,tipo:"normal"},{id:"test_menor",descripcion:'"abc" < "abd" → -1',entrada:["abc","abd"],salida:`-1
`,tipo:"normal"},{id:"test_mayor",descripcion:'"abd" > "abc" → 1',entrada:["abd","abc"],salida:`1
`,tipo:"normal"},{id:"test_ambos_vacios",descripcion:'"" == "" → 0',entrada:["",""],salida:`0
`,tipo:"edge"},{id:"test_s1_corto",descripcion:'"hello" vs "hello!" → -33 (\\0 vs !)',entrada:["hello","hello!"],salida:`-33
`,tipo:"edge"},{id:"test_s2_corto",descripcion:'"hello!" vs "hello" → 33',entrada:["hello!","hello"],salida:`33
`,tipo:"edge"}],gdbSteps:[{paso:1,titulo:'Comparando "abc" vs "abd"',codigo:`s1="abc", s2="abd", i=0
s1[0]='a'(97) == s2[0]='a'(97) && s1[0]≠'\\0' → i=1
s1[1]='b'(98) == s2[1]='b'(98) && s1[1]≠'\\0' → i=2
s1[2]='c'(99) != s2[2]='d'(100) → sale del while`,variables:[{nombre:"i",valor:"2",cambio:!0,nota:"← primer índice diferente"},{nombre:"s1[2]",valor:"'c'(99)",cambio:!1,nota:""},{nombre:"s2[2]",valor:"'d'(100)",cambio:!1,nota:""}]},{paso:2,titulo:"return s1[2] - s2[2] = 99 - 100 = -1",codigo:`return ((unsigned char)'c' - (unsigned char)'d')
     = 99 - 100
     = -1`,variables:[{nombre:"retorno",valor:"-1",cambio:!0,nota:"< 0 → s1 < s2 ✓"}]},{paso:3,titulo:'Caso "hello" vs "hello!": \\0 vs !',codigo:`i=0..4: h==h, e==e, l==l, l==l, o==o
i=5: s1[5]='\\0'(0), while(s1[5] == s2[5]) → '\\0'≠'!' → sale
also: while condition: s1[5]=0 → FALSE → sale
return 0 - '!'(33) = -33`,variables:[{nombre:"s1[5]",valor:"'\\0'(0)",cambio:!1,nota:"← string más corto"},{nombre:"s2[5]",valor:"'!'(33)",cambio:!1,nota:""},{nombre:"retorno",valor:"-33",cambio:!0,nota:"0-33=-33"}]}],trampas:[{severidad:"mortal",titulo:"Usar char en vez de unsigned char para la diferencia",descripcion:'Un char puede ser signed (-128..127) en muchas plataformas. Si s1[i]=200 y s2[i]=50, la diferencia sería -56 (incorrecto). La spec dice "unsigned char".',codigoMal:`// ❌ Con signed char: caracteres > 127 dan resultados incorrectos
return (s1[i] - s2[i]);`,codigoBien:`// ✅ Cast explícito a unsigned char
return ((unsigned char)s1[i] - (unsigned char)s2[i]);`},{severidad:"mortal",titulo:"Condición del while: olvidar && s1[i]",descripcion:"Sin && s1[i], el while continúa después del \\0 leyendo memoria inválida.",codigoMal:`// ❌ Sin verificar \\0 — lee más allá del string
while (s1[i] == s2[i])  // continúa aunque ambos sean \\0`,codigoBien:`// ✅ Para cuando s1[i] es \\0 (lo que implica que s2[i] también lo es si son iguales)
while (s1[i] == s2[i] && s1[i])
    i++;`},{severidad:"warning",titulo:"No devolver los valores exactos estándar (0, 1, -1 vs diff real)",descripcion:'La firma dice "entero mayor, igual o menor que 0". Puede ser -1, 0, 1 o -33, 0, 33. La versión diff real (return s1[i]-s2[i]) es correcta y más fiel al estándar.',codigoMal:`// ❌ Solo -1, 0, 1 — no estándar estricto
if (s1[i] > s2[i]) return 1;
if (s1[i] < s2[i]) return -1;
return 0;`,codigoBien:`// ✅ Diferencia real — correcto y estándar
return ((unsigned char)s1[i] - (unsigned char)s2[i]);`}],bajoCelCapot:`strcmp compara byte a byte (no "string completo").
El \\0 tiene valor 0, el más pequeño, por eso "abc" < "abcd" (\\0 < 'd').
"abc" vs "abd": 'c'(99) - 'd'(100) = -1 (negativo → s1 < s2).
El cast a unsigned char es crítico para chars > 127.`,estrategia:"MEMORIZAR",razonEstrategia:'ft_strcmp es la base de ft_strncmp, wdmatch conceptual, y cualquier comparación de strings. El patrón "avanza mientras igual y no-null" es universal.',relacionados:["ft_strlen","ft_strcpy","wdmatch"]},yz={id:"ft_strcspn",nombre:"ft_strcspn",nivel:2,dificultad:"medio",tipoEntrega:"funcion",archivosEsperados:["ft_strcspn.c"],funcionesPermitidas:[],subject:`Assignment name  : ft_strcspn
Expected files   : ft_strcspn.c
Allowed functions: none
--------------------------------------------------------------------------------

Write a function that calculates the length of the initial segment of s1
which consists entirely of bytes not in s2.

int	ft_strcspn(char *s1, char *s2);

Example:
ft_strcspn("hello", "lo")  → 2 (h and e are not in "lo", l is)
ft_strcspn("hello", "xyz") → 5 (no chars from s2 in s1)`,descripcion:"Función que devuelve la longitud del segmento inicial de s1 que NO contiene ningún carácter de s2. Es el índice del primer char de s1 que aparece en s2.",palacio:{habitacion:"salon",mueble:"puerta",personaje:"El Guardia de la barricada",emoji:"🚧",historia:`En la puerta del salón hay un Guardia con una lista negra (s2).
El Guardia avanza por s1 y cuenta cuántos chars pasan sin estar en la lista.
En cuanto encuentra un char que SÍ está en s2, el Guardia para.
El número que cuenta = cuántos chars pasaron antes del primer problemático.
Si ningún char de s1 está en s2, devuelve la longitud total de s1.`,anclas:["while s1[i] no está en s2: i++","return i ← el índice del primer char de s2 en s1","s2 vacío → todos pasan → return strlen(s1)","s1 vacío → 0 chars pasan → return 0","strcspn = Span of Characters NOT in s2"]},herramientas:["strings"],formulaClave:{descripcion:"Cuenta bytes de s1 hasta encontrar uno que esté en s2",formula:"while (s1[i] && !ft_strchr(s2, s1[i])) i++; return i;",ejemplo:{entrada:'s1="hello", s2="lo"',calculo:'h: not in "lo" → i=1; e: not in "lo" → i=2; l: in "lo" → PARA',resultado:"2"}},versiones:[{id:"clasica",nombre:"Con función auxiliar ft_isin()",descripcion:"Separa la búsqueda en s2 en una función auxiliar. Más legible.",recomendada:!0,codigo:`static int	ft_isin(char c, char *s2)
{
	int	j;

	j = 0;
	while (s2[j])
	{
		if (s2[j] == c)
			return (1);
		j++;
	}
	return (0);
}

int	ft_strcspn(char *s1, char *s2)
{
	int	i;

	i = 0;
	while (s1[i] && !ft_isin(s1[i], s2))
		i++;
	return (i);
}`},{id:"doble_while",nombre:"Con doble while anidado",descripcion:"Implementa la búsqueda en s2 con un while interno. Sin función auxiliar.",recomendada:!1,codigo:`int	ft_strcspn(char *s1, char *s2)
{
	int	i;
	int	j;

	i = 0;
	while (s1[i])
	{
		j = 0;
		while (s2[j])
		{
			if (s1[i] == s2[j])
				return (i);
			j++;
		}
		i++;
	}
	return (i);
}`}],tests:[{id:"test_hello_lo",descripcion:'"hello","lo" → 2 (h,e libres; l en lista)',entrada:["hello","lo"],salida:`2
`,tipo:"normal"},{id:"test_sin_match",descripcion:'"hello","xyz" → 5 (ningún char de s2 en s1)',entrada:["hello","xyz"],salida:`5
`,tipo:"normal"},{id:"test_primer_char",descripcion:'"hello","h" → 0 (primer char ya en s2)',entrada:["hello","h"],salida:`0
`,tipo:"edge"},{id:"test_s1_vacio",descripcion:'"","abc" → 0 (s1 vacío)',entrada:["","abc"],salida:`0
`,tipo:"edge"},{id:"test_s2_vacio",descripcion:'"hello","" → 5 (s2 vacío = ninguno en lista)',entrada:["hello",""],salida:`5
`,tipo:"edge"},{id:"test_ultimo",descripcion:'"hello","o" → 4 (solo la última "o" está en s2)',entrada:["hello","o"],salida:`4
`,tipo:"normal"}],gdbSteps:[{paso:1,titulo:'s1="hello", s2="lo", i=0',codigo:`s1[0]='h'
¿'h' está en s2="lo"? → busca en s2: l≠h, o≠h, \\0 → NO
i++ → i=1`,variables:[{nombre:"i",valor:"1",cambio:!0,nota:""},{nombre:"s1[0]",valor:"'h': NO está en s2",cambio:!1,nota:""}]},{paso:2,titulo:'i=1: "e" no está en s2',codigo:`s1[1]='e'
¿'e' en "lo"? l≠e, o≠e, \\0 → NO
i++ → i=2`,variables:[{nombre:"i",valor:"2",cambio:!0,nota:""}]},{paso:3,titulo:'i=2: "l" SÍ está en s2 → PARA',codigo:`s1[2]='l'
¿'l' en "lo"? l==l → SÍ ← ft_isin devuelve 1
!1 = 0 → condición FALSE → sale del while`,variables:[{nombre:"s1[2]",valor:"'l': SÍ está en s2",cambio:!1,nota:"← El Guardia para"},{nombre:"i",valor:"2",cambio:!1,nota:""}]},{paso:4,titulo:"return i = 2",codigo:`return (2)
// "hello" tiene 2 chars (h,e) antes del primer char de "lo"`,variables:[{nombre:"retorno",valor:"2",cambio:!0,nota:"✓"}]}],trampas:[{severidad:"mortal",titulo:"Devolver i+1 o strlen(s1) en vez del índice correcto",descripcion:'strcspn devuelve el índice del primer char de s2 en s1. Para "hello","lo" es 2 (índice de l), no 3.',codigoMal:`// ❌ Off-by-one
while (s1[i] && !ft_isin(s1[i], s2))
    i++;
return (i + 1);  // "hello","lo" → 3, debería ser 2`,codigoBien:`// ✅ Devolver i directamente
while (s1[i] && !ft_isin(s1[i], s2))
    i++;
return (i);  // índice del primer char de s2 en s1`},{severidad:"mortal",titulo:"No verificar \\0 al final de s2 en la búsqueda interna",descripcion:"El while interno sobre s2 debe parar en el \\0. Sin esa condición, lee memoria inválida.",codigoMal:`// ❌ Sin \\0 check en s2
while (s2[j] != s1[i])  // si s1[i] no está en s2, loop infinito`,codigoBien:`// ✅
while (s2[j] && s2[j] != s1[i])
    j++;
// si s2[j] == '\\0', s1[i] no está en s2`},{severidad:"warning",titulo:"s2 vacío → devolver strlen(s1) (todos los chars son válidos)",descripcion:'Si s2="", ningún char de s1 está en s2. El while externo recorre s1 completo y devuelve su longitud.',codigoMal:`// Preocupación innecesaria — el código correcto ya maneja esto:
while (s1[i] && !ft_isin(s1[i], s2)) i++;
// si s2="" → ft_isin siempre devuelve 0 → i llega al final → return strlen(s1)`,codigoBien:"// No hay nada especial que hacer — el código genérico ya es correcto."}],bajoCelCapot:`strcspn = "string complement span" (span de complemento).
Devuelve cuántos chars de s1 NO están en s2.
strspn (la función hermana) devuelve cuántos chars de s1 SÍ están en s2.
strcspn("hello","lo")=2, strspn("hello","hel")=4.
Se usa como building block de strtok y parsers.`,estrategia:"MEMORIZAR",razonEstrategia:'El patrón "avanzar mientras char NO esté en un conjunto" es la base de strtok, ft_split y parsers de tokens.',relacionados:["ft_strpbrk","ft_split","inter"]},wz={id:"ft_strdup",nombre:"ft_strdup",nivel:2,dificultad:"medio",tipoEntrega:"funcion",archivosEsperados:["ft_strdup.c"],funcionesPermitidas:["malloc"],subject:`Assignment name  : ft_strdup
Expected files   : ft_strdup.c
Allowed functions: malloc
--------------------------------------------------------------------------------

Write a function that duplicates the string pointed to by s. Returns a pointer
to the duplicated string, or NULL if there was insufficient memory.

char	*ft_strdup(char *s);`,descripcion:"Función que crea una copia del string en memoria dinámica. Usa malloc para reservar strlen(s)+1 bytes, copia con strcpy y devuelve el puntero.",palacio:{habitacion:"salon",mueble:"fotocopiadora",personaje:"La Clonadora de strings",emoji:"🧬",historia:`En el salón hay una Clonadora que fabrica copias en el montón (heap).
Le das el original (s) y ella:
1. Mide la longitud (ft_strlen(s)).
2. Pide memoria al montón: malloc(len + 1). El +1 es para el \\0.
3. Copia byte a byte (ft_strcpy o bucle).
4. Devuelve el puntero a la copia clonada.
¡Sin el +1, no hay sitio para el \\0 y es corrupción de memoria!`,anclas:["len = ft_strlen(s)  ← medir primero","malloc(len + 1)  ← +1 para el \\0","if (!dest) return NULL  ← malloc puede fallar","ft_strcpy(dest, s)  ← copiar el contenido","return dest  ← el clon"]},herramientas:["strings"],formulaClave:{descripcion:"malloc(strlen+1) + strcpy + return puntero",formula:"len = ft_strlen(s); dest = malloc(len + 1); ft_strcpy(dest, s); return dest;",ejemplo:{entrada:'"hello"',calculo:"len=5, malloc(6), copia h,e,l,l,o,\\0 → new ptr",resultado:'puntero a "hello" en el heap'}},versiones:[{id:"clasica",nombre:"Clásica con ft_strlen + ft_strcpy",descripcion:"La más legible y correcta en el examen.",recomendada:!0,codigo:`#include <stdlib.h>

static int	ft_strlen(char *s)
{
	int	i;

	i = 0;
	while (s[i])
		i++;
	return (i);
}

static void	ft_strcpy(char *dest, char *src)
{
	int	i;

	i = 0;
	while (src[i])
	{
		dest[i] = src[i];
		i++;
	}
	dest[i] = '\\0';
}

char	*ft_strdup(char *s)
{
	char	*dest;
	int	len;

	len = ft_strlen(s);
	dest = malloc(len + 1);
	if (!dest)
		return (NULL);
	ft_strcpy(dest, s);
	return (dest);
}`},{id:"compacta",nombre:"Con bucle de copia inline",descripcion:"Copia directamente en el bucle sin función auxiliar.",recomendada:!1,codigo:`#include <stdlib.h>

char	*ft_strdup(char *s)
{
	char	*dest;
	int	len;
	int	i;

	len = 0;
	while (s[len])
		len++;
	dest = malloc(len + 1);
	if (!dest)
		return (NULL);
	i = 0;
	while (s[i])
	{
		dest[i] = s[i];
		i++;
	}
	dest[i] = '\\0';
	return (dest);
}`}],tests:[{id:"test_hello",descripcion:'"hello" → duplicado "hello"',entrada:["hello"],salida:`hello
`,tipo:"normal"},{id:"test_vacio",descripcion:'"" → duplicado "" (solo \\0)',entrada:[""],salida:`
`,tipo:"edge"},{id:"test_espacio",descripcion:'"Hello World" → duplicado con espacio',entrada:["Hello World"],salida:`Hello World
`,tipo:"normal"},{id:"test_numeros",descripcion:'"42abc" → duplicado mixto',entrada:["42abc"],salida:`42abc
`,tipo:"normal"}],gdbSteps:[{paso:1,titulo:'Inicio: s="hello"',codigo:`s = "hello"
len = ft_strlen("hello") = 5
dest = malloc(5 + 1) = malloc(6)
if (!dest) → FALSE (malloc exitoso)`,variables:[{nombre:"len",valor:"5",cambio:!0,nota:""},{nombre:"dest",valor:"0x7f... (nuevo bloque de 6 bytes)",cambio:!0,nota:""}]},{paso:2,titulo:'ft_strcpy: copia "hello" + \\0 a dest',codigo:`ft_strcpy(dest, s)
dest[0]='h', dest[1]='e', dest[2]='l', dest[3]='l', dest[4]='o', dest[5]='\\0'`,variables:[{nombre:"dest",valor:'"hello\\0" en heap',cambio:!0,nota:"6 bytes copiados"}]},{paso:3,titulo:"return dest — puntero al clon",codigo:`return dest
// El caller ahora tiene un puntero a una copia independiente de "hello"
// La copia vive en el heap hasta que se llame free(dest)`,variables:[{nombre:"retorno",valor:'0x7f... → "hello"',cambio:!0,nota:"✓ Clon independiente del original"}]}],trampas:[{severidad:"mortal",titulo:"malloc(len) sin +1 → no hay espacio para el \\0",descripcion:"ft_strlen devuelve el número de chars SIN contar el \\0. malloc(len) reserva exactamente los chars, pero no hay espacio para el terminador. El strcpy posterior escribe el \\0 fuera del bloque → heap corruption.",codigoMal:`// ❌ Sin +1 → el \\0 se escribe fuera del bloque
dest = malloc(len);      // "hello" len=5, malloc(5)
ft_strcpy(dest, s);      // escribe h,e,l,l,o,\\0 → \\0 en byte 5, fuera del bloque`,codigoBien:`// ✅ malloc(len + 1) → espacio para el \\0
dest = malloc(len + 1);  // malloc(6) para "hello"
ft_strcpy(dest, s);      // h,e,l,l,o,\\0 → todo dentro del bloque`},{severidad:"mortal",titulo:"No comprobar si malloc devuelve NULL",descripcion:"malloc puede fallar (sistema sin memoria). Si dest=NULL y haces ft_strcpy(NULL, s), segfault inmediato.",codigoMal:`// ❌ Sin check de NULL
dest = malloc(len + 1);
ft_strcpy(dest, s);  // crash si malloc falló`,codigoBien:`// ✅
dest = malloc(len + 1);
if (!dest)
    return (NULL);
ft_strcpy(dest, s);`},{severidad:"warning",titulo:"El caller es responsable de free() — ft_strdup hace malloc",descripcion:"La función devuelve un bloque malloc'd. Si el caller no hace free(), hay memory leak. Esto no afecta a la Moulinette, pero es buena práctica mencionarlo.",codigoMal:`// ❌ Memory leak
char *dup = ft_strdup("hello");
// ... usar dup ...
// sin free(dup) → leak`,codigoBien:`// ✅
char *dup = ft_strdup("hello");
// ... usar dup ...
free(dup);  // ← siempre liberar`}],bajoCelCapot:`malloc(n) reserva n bytes en el heap y devuelve un puntero al inicio.
El \\0 no ocupa espacio en strlen pero sí en la memoria real del string.
"hello" ocupa 6 bytes: h(1)+e(1)+l(1)+l(1)+o(1)+\\0(1).
La copia es INDEPENDIENTE: modificar dest no afecta a s ni viceversa.`,estrategia:"MEMORIZAR",razonEstrategia:"El patrón malloc+strlen+1+strcpy+return es el prototipo de todas las funciones que retornan strings dinámicos.",relacionados:["ft_strlen","ft_strcpy","ft_split"]},jz={id:"ft_strpbrk",nombre:"ft_strpbrk",nivel:2,dificultad:"difícil",tipoEntrega:"funcion",archivosEsperados:["ft_strpbrk.c"],funcionesPermitidas:[],subject:`Assignment name  : ft_strpbrk
Expected files   : ft_strpbrk.c
Allowed functions: none
--------------------------------------------------------------------------------

Write a function that searches the string s1 for any of the bytes in the
string s2. It returns a pointer to the first occurrence in s1 of any of the
bytes in s2, or NULL if none found.

char	*ft_strpbrk(char *s1, char *s2);

Example:
ft_strpbrk("hello", "lo")   → pointer to "llo" (first l at index 2)
ft_strpbrk("hello", "xyz")  → NULL`,descripcion:"Función que busca en s1 el primer carácter que también aparezca en s2. Devuelve PUNTERO al punto de s1 donde lo encuentra, o NULL. La trampa crítica: devolver &s1[i], no s1[i].",palacio:{habitacion:"salon",mueble:"pecera",personaje:"El Pescador de caracteres",emoji:"🎣",historia:`En la pecera del salón vive el Pescador de caracteres.
Le lanzas su caña con el cebo s2 (conjunto de chars a buscar).
Recorre el mar de s1 buscando el primer char que coincida con alguno del cebo.
Cuando lo pesca, NO te da el char solo — te da EL ANZUELO COMPLETO desde ahí (puntero).
Si no pesca nada, devuelve NULL. ¡NUNCA devuelve el char, sino el puntero!`,anclas:["return &s1[i]  ← PUNTERO al primer match (NO s1[i])","return NULL  ← si no hay match (no '\\0' ni vacío)","doble while: externo por s1, interno por s2","La trampa: confundir puntero con valor","el retorno es char* (puntero), no char (valor)"]},herramientas:["strings"],formulaClave:{descripcion:"Recorre s1; para cada char, busca si está en s2; devuelve &s1[i] si sí",formula:"for (i=0; s1[i]; i++) if (ft_isin(s1[i], s2)) return &s1[i]; return NULL;",ejemplo:{entrada:'s1="hello", s2="lo"',calculo:'h: not in s2; e: not in s2; l: IN s2 → return &s1[2] = "llo"',resultado:'puntero a "llo" (substring desde l)'}},versiones:[{id:"clasica",nombre:"Clásica con función auxiliar",descripcion:"Separa la búsqueda en s2 en ft_isin(). La más legible.",recomendada:!0,codigo:`static int	ft_isin(char c, char *s2)
{
	int	j;

	j = 0;
	while (s2[j])
	{
		if (s2[j] == c)
			return (1);
		j++;
	}
	return (0);
}

char	*ft_strpbrk(char *s1, char *s2)
{
	int	i;

	i = 0;
	while (s1[i])
	{
		if (ft_isin(s1[i], s2))
			return (&s1[i]);
		i++;
	}
	return (NULL);
}`},{id:"doble_while",nombre:"Con doble while anidado",descripcion:"Sin función auxiliar. Más compacta pero más difícil de leer.",recomendada:!1,codigo:`char	*ft_strpbrk(char *s1, char *s2)
{
	int	i;
	int	j;

	i = 0;
	while (s1[i])
	{
		j = 0;
		while (s2[j])
		{
			if (s1[i] == s2[j])
				return (&s1[i]);
			j++;
		}
		i++;
	}
	return (NULL);
}`}],tests:[{id:"test_hello_lo",descripcion:'"hello","lo" → "llo" (primer l en pos 2)',entrada:["hello","lo"],salida:`llo
`,tipo:"normal"},{id:"test_sin_match",descripcion:'"hello","xyz" → (null)',entrada:["hello","xyz"],salida:`(null)
`,tipo:"normal"},{id:"test_primer_char",descripcion:'"hello","h" → "hello" (h es el primer char)',entrada:["hello","h"],salida:`hello
`,tipo:"normal"},{id:"test_ultimo_char",descripcion:'"hello","o" → "o" (o es el último char)',entrada:["hello","o"],salida:`o
`,tipo:"normal"},{id:"test_s1_vacio",descripcion:'"","abc" → (null)',entrada:["","abc"],salida:`(null)
`,tipo:"edge"},{id:"test_s2_vacio",descripcion:'"hello","" → (null) (s2 vacío, nada que buscar)',entrada:["hello",""],salida:`(null)
`,tipo:"edge"}],gdbSteps:[{paso:1,titulo:'s1="hello", s2="lo": i=0, "h" no en s2',codigo:`i=0, s1[0]='h'
ft_isin('h', "lo"):  l≠h, o≠h, \\0 → return 0
→ i++, i=1`,variables:[{nombre:"i",valor:"1",cambio:!0,nota:""},{nombre:"s1[0]",valor:"'h': no en s2",cambio:!1,nota:""}]},{paso:2,titulo:'i=1, "e" no en s2',codigo:`s1[1]='e'
ft_isin('e', "lo"): l≠e, o≠e, \\0 → return 0
→ i++, i=2`,variables:[{nombre:"i",valor:"2",cambio:!0,nota:""}]},{paso:3,titulo:'i=2, "l" SÍ en s2 → return &s1[2]',codigo:`s1[2]='l'
ft_isin('l', "lo"): l=='l' → return 1
→ return &s1[2]
// &s1[2] apunta al inicio de "llo"`,variables:[{nombre:"s1[2]",valor:"'l': SÍ en s2 ← MATCH",cambio:!1,nota:""},{nombre:"retorno",valor:'&s1[2] → "llo"',cambio:!0,nota:'← PUNTERO, no el char "l" solo'}]},{paso:4,titulo:"No encontrado → return NULL",codigo:`// Con s2="xyz" en "hello":
// h,e,l,l,o: ninguno en "xyz"
// s1[5]='\\0' → while FALSE → sale
return (NULL)`,variables:[{nombre:"retorno",valor:"NULL",cambio:!0,nota:'← printf imprime "(null)"'}]}],trampas:[{severidad:"mortal",titulo:"return s1[i] en vez de return &s1[i] — devuelve el char, no el puntero",descripcion:"La función devuelve char* (puntero). return s1[i] sería un char (valor), no un puntero. No compila sin cast, y aunque compilara, el resultado sería incorrecto (un entero interpretado como puntero).",codigoMal:`// ❌ Devuelve el char, no el puntero
char *ft_strpbrk(char *s1, char *s2) {
    if (ft_isin(s1[i], s2))
        return (s1[i]);  // ← char, no char* — error de tipo
}`,codigoBien:`// ✅ Devuelve el puntero al char dentro de s1
if (ft_isin(s1[i], s2))
    return (&s1[i]);  // ← &s1[i] = puntero al i-ésimo byte de s1`},{severidad:"mortal",titulo:'return "" en vez de return NULL cuando no hay match',descripcion:'La función debe devolver NULL (el puntero nulo), no una cadena vacía. NULL y "" son cosas completamente diferentes.',codigoMal:`// ❌ Devuelve string vacío, no NULL
return ("");  // vacío pero no es NULL
// el caller no puede distinguir "no encontrado" de "encontrado el \\0"`,codigoBien:`// ✅
return (NULL);  // puntero nulo = no encontrado`},{severidad:"warning",titulo:"s2 vacío → return NULL (ningún char que buscar)",descripcion:'Si s2="", el while interno nunca entra, ft_isin devuelve siempre 0, y nunca hay match. El comportamiento correcto es return NULL.',codigoMal:`// Confusión: ¿devolver s1 completo si s2 vacío?
if (!*s2) return s1;  // ← no, comportamiento incorrecto`,codigoBien:`// El código genérico ya maneja esto:
// si s2="" → ft_isin siempre 0 → nunca match → return NULL ✓`}],bajoCelCapot:`&s1[i] = s1 + i (aritmética de punteros).
La diferencia con strcspn: strpbrk devuelve el PUNTERO al primer match.
strcspn devuelve el ÍNDICE (entero) del primer match.
Un puntero al interior de un string es un "substring view" — no hace malloc.
NULL == 0 en C; printf("%s", NULL) imprime "(null)" en la mayoría de implementaciones.`,estrategia:"MEMORIZAR",razonEstrategia:"La trampa &s1[i] vs s1[i] es la más frecuente en ejercicios con funciones que devuelven punteros a substrings.",relacionados:["ft_strcspn","inter","union"]},_z={id:"ft_strrev",nombre:"ft_strrev",nivel:2,dificultad:"fácil",tipoEntrega:"funcion",archivosEsperados:["ft_strrev.c"],funcionesPermitidas:[],subject:`Assignment name  : ft_strrev
Expected files   : ft_strrev.c
Allowed functions: none
--------------------------------------------------------------------------------

Write a function that reverses a string in-place and returns it.

char	*ft_strrev(char *str);

Example:
ft_strrev("hello") → returns str modified to "olleh"`,descripcion:"Función que invierte un string in-place (dentro del mismo array) y lo devuelve. Usa dos índices que se acercan desde los extremos intercambiando chars.",palacio:{habitacion:"salon",mueble:"espejo",personaje:"El Espejo Inversor",emoji:"🪞",historia:`En el salón hay un Espejo mágico que invierte todo lo que le pones delante.
Le das el string y el Espejo usa dos dedos: uno en el primer char, otro en el último.
Los intercambia con tmp, luego avanza el dedo izquierdo y retrocede el derecho.
Cuando los dos dedos se cruzan, la inversión está completa.
SIEMPRE devuelve el mismo puntero (str) — modifica in-place, sin malloc.`,anclas:["len = strlen(str)  ← medir la longitud primero","i=0, j=len-1  ← dos índices desde los extremos","tmp = str[i]; str[i] = str[j]; str[j] = tmp  ← intercambio","while (i < len / 2)  ← solo hasta la mitad","return (str)  ← mismo puntero, modificado in-place"]},herramientas:["strings"],formulaClave:{descripcion:"Intercambio de chars desde extremos hacia el centro",formula:"while (i < len/2) { tmp=str[i]; str[i]=str[len-1-i]; str[len-1-i]=tmp; i++; } return str;",ejemplo:{entrada:'"hello"',calculo:'len=5; i=0:h↔o; i=1:e↔l; i=2:l≈l(centro); → "olleh"',resultado:'"olleh"'}},versiones:[{id:"clasica",nombre:"Con len calculado y dos variables",descripcion:"Calcula len primero, intercambia con tmp. La más legible.",recomendada:!0,codigo:`char	*ft_strrev(char *str)
{
	int	len;
	int	i;
	char	tmp;

	len = 0;
	while (str[len])
		len++;
	i = 0;
	while (i < len / 2)
	{
		tmp = str[i];
		str[i] = str[len - 1 - i];
		str[len - 1 - i] = tmp;
		i++;
	}
	return (str);
}`},{id:"dos_indices",nombre:"Con dos índices i y j",descripcion:"i desde el inicio, j desde el final, se acercan hasta cruzarse.",recomendada:!1,codigo:`char	*ft_strrev(char *str)
{
	int	i;
	int	j;
	char	tmp;

	i = 0;
	j = 0;
	while (str[j])
		j++;
	j--;
	while (i < j)
	{
		tmp = str[i];
		str[i] = str[j];
		str[j] = tmp;
		i++;
		j--;
	}
	return (str);
}`}],tests:[{id:"test_hello",descripcion:'"hello" → "olleh"',entrada:["hello"],salida:`olleh
`,tipo:"normal"},{id:"test_palindrome",descripcion:'"racecar" → "racecar" (palíndromo)',entrada:["racecar"],salida:`racecar
`,tipo:"normal"},{id:"test_single",descripcion:'"a" → "a" (un char)',entrada:["a"],salida:`a
`,tipo:"edge"},{id:"test_vacio",descripcion:'"" → "" (string vacío)',entrada:[""],salida:`
`,tipo:"edge"},{id:"test_abc",descripcion:'"abc" → "cba"',entrada:["abc"],salida:`cba
`,tipo:"normal"},{id:"test_numero",descripcion:'"12345" → "54321"',entrada:["12345"],salida:`54321
`,tipo:"normal"}],gdbSteps:[{paso:1,titulo:'Calcular len de "hello"',codigo:`str = "hello"
len = 0
str[0]='h' → len++; str[1]='e' → len++; ... str[5]='\\0' → para
len = 5`,variables:[{nombre:"len",valor:"5",cambio:!0,nota:""},{nombre:"i",valor:"0",cambio:!1,nota:""}]},{paso:2,titulo:'i=0: intercambiar str[0]="h" con str[4]="o"',codigo:`i=0, len-1-i = 4
tmp = str[0] = 'h'
str[0] = str[4] = 'o' → str="oello"
str[4] = tmp = 'h' → str="oellh"
i++ → i=1`,variables:[{nombre:"tmp",valor:"'h'",cambio:!0,nota:""},{nombre:"str",valor:'"oellh"',cambio:!0,nota:""},{nombre:"i",valor:"1",cambio:!0,nota:""}]},{paso:3,titulo:'i=1: intercambiar str[1]="e" con str[3]="l"',codigo:`i=1, len-1-i = 3
tmp = 'e'; str[1]='l'; str[3]='e' → str="olh"...
str="olleh" ... i=2`,variables:[{nombre:"str",valor:'"olleh"',cambio:!0,nota:""},{nombre:"i",valor:"2",cambio:!0,nota:""}]},{paso:4,titulo:"i=2: 2 < 5/2=2 → FALSE → sale del while",codigo:`i=2, len/2=2
while (2 < 2) → FALSE → sale
return (str) = "olleh"`,variables:[{nombre:"retorno",valor:'"olleh"',cambio:!0,nota:"✓ invertido in-place"}]}],trampas:[{severidad:"mortal",titulo:"i < len en vez de i < len/2 → invierte el string dos veces",descripcion:"Si el while va hasta len, pasa el punto medio y vuelve a invertir, dejando el string original. El intercambio debe hacerse solo hasta la mitad.",codigoMal:`// ❌ Invierte dos veces → string original
while (i < len) {
    tmp = str[i]; str[i] = str[len-1-i]; str[len-1-i] = tmp;
    i++;
}`,codigoBien:`// ✅ Solo hasta la mitad
while (i < len / 2) {
    tmp = str[i]; str[i] = str[len-1-i]; str[len-1-i] = tmp;
    i++;
}`},{severidad:"mortal",titulo:"No devolver str — retornar NULL o void",descripcion:"La firma es char *ft_strrev. Debe devolver el mismo puntero str. Si devuelves void o NULL, el caller no puede usar el resultado.",codigoMal:`// ❌ Olvida return
void ft_strrev(char *str) {
    // ... invierte ...
    // sin return
}`,codigoBien:`// ✅
char *ft_strrev(char *str) {
    // ... invierte ...
    return (str);  // mismo puntero
}`},{severidad:"warning",titulo:"j = len sin -1 → j apunta al \\0",descripcion:"Si j empieza en len (no len-1), apunta al \\0 terminal. El primer intercambio pondría \\0 al inicio del string.",codigoMal:`// ❌ j apunta al '\\0'
j = len;  // str[len] = '\\0'
// primer intercambio: str[0] ↔ str[len] = '\\0' → error`,codigoBien:`// ✅ j apunta al último char
j = len - 1;  // str[len-1] = último char real`}],bajoCelCapot:`ft_strrev modifica el string directamente (in-place), sin malloc.
El puntero str no cambia — devuelve la misma dirección.
El intercambio a la mitad: para len=5, solo 2 intercambios (i=0,1); el char central (i=2) no se mueve.
Para len=4: 2 intercambios (i=0,1); se cruzan en el medio.`,estrategia:"MEMORIZAR",razonEstrategia:"El patrón de inversión in-place con dos índices es la base de reverse_bits, ft_strrev, y cualquier algoritmo de inversión de array.",relacionados:["reverse_bits","ft_strlen","ft_strcpy"]},zz={id:"inter",nombre:"inter",nivel:2,dificultad:"difícil",tipoEntrega:"programa",archivosEsperados:["inter.c"],funcionesPermitidas:["write"],subject:`Assignment name  : inter
Expected files   : inter.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that takes two strings and prints, without doubles, the
characters that appear in both strings, in the order they appear in the
first one, followed by a newline.

If the number of arguments is not 2, just print a newline.

Example:
$> ./inter "padinton" "notpad"
padnto
$> ./inter "" "notpad"

$> ./inter "padinton" ""

$>`,descripcion:"Programa que imprime los caracteres comunes a s1 y s2, en el orden de aparición en s1, sin duplicados. Usa función auxiliar iter() para buscar en s2, y tabla seen[] para evitar duplicados.",palacio:{habitacion:"salon",mueble:"fichero",personaje:"El Archivero de Intersecciones",emoji:"🗂️",historia:`En el salón hay un Archivero que gestiona dos listas de invitados (s1 y s2).
Solo pasan a la lista final los que están en AMBAS listas.
El Archivero recorre s1 uno a uno: "¿está este en s2?" Si sí, escribe el nombre.
Pero tiene otra regla: "cada nombre solo una vez" — consulta su cuaderno seen[256].
DOBLE CONDICIÓN en iter(): avanzar mientras s2[j] && s2[j] != c.
Si sale por el \\0 → no encontrado. Si sale por coincidencia → encontrado.`,anclas:["iter(s2, c): busca c en s2 — doble condición: s2[j] && s2[j]!=c","si s2[j] != '\\0' al salir → c SÍ está en s2","seen[256]={0}: marca los chars ya escritos","solo escribir si iter(s2,c) && !seen[(unsigned char)c]","argc != 3 → solo '\\n'"]},herramientas:["strings","ascii"],formulaClave:{descripcion:"Para cada char de s1: si está en s2 y no ha salido antes, escribirlo",formula:"for s1[i]: if iter(s2,s1[i]) && !seen[s1[i]]: write(s1[i]); seen[s1[i]]=1",ejemplo:{entrada:'s1="padinton", s2="notpad"',calculo:"p→en s2,nuevo→p; a→en s2,nuevo→a; d→en s2,nuevo→d; i→no en s2; n→en s2,nuevo→n; t→en s2,nuevo→t; o→en s2,nuevo→o; n→seen",resultado:'"padnto"'}},versiones:[{id:"clasica",nombre:"Con función auxiliar iter() y seen[256]",descripcion:"La trampa es iter(): doble condición en el while. La más correcta para el examen.",recomendada:!0,codigo:`#include <unistd.h>

static int	iter(char *s, char c)
{
	int	j;

	j = 0;
	while (s[j] && s[j] != c)
		j++;
	return (s[j] == c);
}

int	main(int argc, char **argv)
{
	int		i;
	int		seen[256];
	char	c;

	if (argc == 3)
	{
		i = 0;
		ft_bzero(seen, sizeof(seen));
		while (argv[1][i])
		{
			c = argv[1][i];
			if (iter(argv[2], c) && !seen[(unsigned char)c])
			{
				write(1, &c, 1);
				seen[(unsigned char)c] = 1;
			}
			i++;
		}
	}
	write(1, "\\n", 1);
	return (0);
}`},{id:"sin_bzero",nombre:"Sin ft_bzero (inicialización manual)",descripcion:"Inicializa seen[] con un bucle. Más verboso pero sin depender de bzero.",recomendada:!1,codigo:`#include <unistd.h>

static int	iter(char *s, char c)
{
	int	j;

	j = 0;
	while (s[j] && s[j] != c)
		j++;
	return (s[j] == c);
}

int	main(int argc, char **argv)
{
	int		i;
	int		seen[256];
	char	c;

	i = 0;
	while (i < 256)
		seen[i++] = 0;
	if (argc == 3)
	{
		i = 0;
		while (argv[1][i])
		{
			c = argv[1][i];
			if (iter(argv[2], c) && !seen[(unsigned char)c])
			{
				write(1, &c, 1);
				seen[(unsigned char)c] = 1;
			}
			i++;
		}
	}
	write(1, "\\n", 1);
	return (0);
}`}],tests:[{id:"test_clasico",descripcion:'"padinton","notpad" → "padnto"',entrada:["padinton","notpad"],salida:`padnto
`,tipo:"normal"},{id:"test_hello_world",descripcion:'"hello","world" → "lo" (solo l y o comunes)',entrada:["hello","world"],salida:`lo
`,tipo:"normal"},{id:"test_sin_comun",descripcion:'"abc","xyz" → "" (ninguno en común)',entrada:["abc","xyz"],salida:`
`,tipo:"edge"},{id:"test_iguales",descripcion:'"hello","hello" → "helo" (sin duplicados)',entrada:["hello","hello"],salida:`helo
`,tipo:"normal"},{id:"test_s1_vacio",descripcion:'"","abc" → "" (s1 vacío)',entrada:["","abc"],salida:`
`,tipo:"edge"},{id:"test_s2_vacio",descripcion:'"hello","" → "" (s2 vacío → nada en común)',entrada:["hello",""],salida:`
`,tipo:"edge"}],gdbSteps:[{paso:1,titulo:'s1="padinton", s2="notpad" — i=0, c="p"',codigo:`c = 'p'
iter("notpad", 'p'):
  j=0: 'n'!='p' && 'n'→ j++
  j=1: 'o'!='p' && 'o'→ j++
  j=2: 't'!='p' && 't'→ j++
  j=3: 'p'=='p' → para
  s[3]='p' == 'p' → return 1
seen['p']=0 → write('p'); seen['p']=1`,variables:[{nombre:"c",valor:"'p'",cambio:!1,nota:""},{nombre:"iter result",valor:"1 (encontrado)",cambio:!0,nota:""},{nombre:"salida",valor:'"p"',cambio:!0,nota:""}]},{paso:2,titulo:'i=3, c="i" — NO está en s2',codigo:`c = 'i'
iter("notpad", 'i'):
  j=0..5: n,o,t,p,a,d ≠ 'i'
  j=6: '\\0' → para
  s[6]='\\0' ≠ 'i' → return 0
→ no escribe`,variables:[{nombre:"c",valor:"'i'",cambio:!1,nota:""},{nombre:"iter result",valor:"0 (no encontrado)",cambio:!0,nota:"← \\0 al salir"}]},{paso:3,titulo:'i=7, c="n" — segunda n → seen ya activo',codigo:`c = 'n'
iter("notpad", 'n') → 1 (n en s2)
seen['n'] = 1  ← ya se escribió en i=4
→ condición: iter && !seen → 1 && !1 = FALSE
→ no escribe (sin duplicados)`,variables:[{nombre:"seen['n']",valor:"1 (ya visto)",cambio:!1,nota:"← bloquea duplicado"}]},{paso:4,titulo:'Fin: write("\\n")',codigo:`// Resultado acumulado: p,a,d,n,t,o
write(1, "\\n", 1)
// Salida: "padnto\\n"`,variables:[{nombre:"salida final",valor:'"padnto\\n"',cambio:!0,nota:"✓"}]}],trampas:[{severidad:"mortal",titulo:"iter() con solo una condición: while (s[j] != c) — loop infinito si no está",descripcion:"Si c no está en s2, el while nunca para (lee más allá del \\0). La doble condición s[j] && s[j]!=c es esencial.",codigoMal:`// ❌ Sin verificar '\\0' → loop infinito
static int iter(char *s, char c) {
    int j = 0;
    while (s[j] != c)  // si c no está: loop infinito o UB
        j++;
    return (1);  // siempre devuelve 1 — incorrecto
}`,codigoBien:`// ✅ Doble condición
static int iter(char *s, char c) {
    int j = 0;
    while (s[j] && s[j] != c)  // para en '\\0' o en match
        j++;
    return (s[j] == c);  // '\\0' → no encontrado; c → encontrado
}`},{severidad:"mortal",titulo:"No usar seen[] → imprime duplicados",descripcion:'Si s1="hello" y s2="hello", sin seen[] imprimiría "helllo" (l dos veces). Hay que marcar cada char ya escrito.',codigoMal:`// ❌ Sin deduplicación
while (argv[1][i]) {
    c = argv[1][i];
    if (iter(argv[2], c))
        write(1, &c, 1);  // imprime l dos veces si l aparece dos veces en s1
    i++;
}`,codigoBien:`// ✅ Con seen[256]
if (iter(argv[2], c) && !seen[(unsigned char)c]) {
    write(1, &c, 1);
    seen[(unsigned char)c] = 1;
}`},{severidad:"warning",titulo:"argc != 3 vs argc != 2 — el programa tiene nombre como argv[0]",descripcion:"argv[0] = nombre del programa, argv[1] = s1, argv[2] = s2. Con 2 strings de entrada, argc=3.",codigoMal:`// ❌ Condición incorrecta
if (argc != 2) ...  // falta el nombre del programa`,codigoBien:`// ✅
if (argc == 3) {
    // argv[1] = s1, argv[2] = s2
}
write(1, "\\n", 1);`}],bajoCelCapot:`iter() termina en '\\0' (no encontrado) o en match (encontrado).
La diferencia con union: inter busca chars que estén en AMBOS; union combina ambos sin repetir.
seen[256] usa el valor ASCII como índice — cubre todos los bytes posibles (0..255).
El cast (unsigned char) evita índices negativos para chars > 127.`,estrategia:"MEMORIZAR",razonEstrategia:"inter es la combinación de iter() (búsqueda en string) + seen[256] (deduplicación). Ambos patrones aparecen en union, ft_strpbrk y otros ejercicios.",relacionados:["union","ft_strpbrk","ft_strcspn"]},Sz={id:"is_power_of_2",nombre:"is_power_of_2",nivel:2,dificultad:"medio",tipoEntrega:"funcion",archivosEsperados:["is_power_of_2.c"],funcionesPermitidas:[],subject:`Assignment name  : is_power_of_2
Expected files   : is_power_of_2.c
Allowed functions: none
--------------------------------------------------------------------------------

Write a function that determines whether a given number is a power of 2.

This function returns 1 if the given number is a power of 2, otherwise it
returns 0.

int	is_power_of_2(unsigned int n);

Example:
is_power_of_2(1)   → 1  (2^0 = 1)
is_power_of_2(2)   → 1  (2^1)
is_power_of_2(8)   → 1  (2^3)
is_power_of_2(0)   → 0  (no es potencia de 2)
is_power_of_2(3)   → 0  (no es potencia de 2)`,descripcion:"Función que devuelve 1 si n es potencia de 2, 0 si no. El truco bit a bit: una potencia de 2 tiene exactamente 1 bit activo. n & (n-1) pone ese bit a 0. Si el resultado es 0 (y n>0), es potencia de 2.",palacio:{habitacion:"salon",mueble:"lampara",personaje:"El Detective de Potencias",emoji:"🔍",historia:`En el salón hay una Lámpara especial que solo brilla con potencias de 2.
El Detective sabe el truco secreto: las potencias de 2 tienen UN SOLO BIT encendido.
Y ese truco: n & (n-1) apaga exactamente ese bit. Si el resultado es 0, solo había un bit.
¡OJO! n=0 no es potencia de 2 (ningún bit encendido). Por eso: n > 0 primero.
La fórmula es: return (n > 0 && (n & (n - 1)) == 0).`,anclas:["n > 0  ← 0 no es potencia de 2","n & (n-1) == 0  ← si verdad, n tiene exactamente 1 bit","potencias de 2: 1,2,4,8,16,32,64,128,...","return 1 si sí, return 0 si no","tipo: unsigned int (no int) — sin negativos"]},herramientas:["bits"],formulaClave:{descripcion:"Una potencia de 2 tiene exactamente 1 bit encendido. n & (n-1) lo apaga.",formula:"return (n > 0 && (n & (n - 1)) == 0);",ejemplo:{entrada:"n=8 (1000)",calculo:"n-1=7 (0111); 8 & 7 = 1000 & 0111 = 0000 = 0; n>0 && 0==0 → 1",resultado:"1"}},versiones:[{id:"bitwise",nombre:"Con n & (n-1)",descripcion:"Solución de una línea usando el truco bit a bit. La más elegante.",recomendada:!0,codigo:`int	is_power_of_2(unsigned int n)
{
	return (n > 0 && (n & (n - 1)) == 0);
}`},{id:"bucle",nombre:"Con bucle de división",descripcion:"Divide por 2 hasta llegar a 1 o a un impar. Más larga pero más explícita.",recomendada:!1,codigo:`int	is_power_of_2(unsigned int n)
{
	if (n == 0)
		return (0);
	while (n > 1)
	{
		if (n % 2 != 0)
			return (0);
		n /= 2;
	}
	return (1);
}`}],tests:[{id:"test_uno",descripcion:"1 (2^0) → 1",entrada:["1"],salida:`1
`,tipo:"normal"},{id:"test_dos",descripcion:"2 (2^1) → 1",entrada:["2"],salida:`1
`,tipo:"normal"},{id:"test_ocho",descripcion:"8 (2^3) → 1",entrada:["8"],salida:`1
`,tipo:"normal"},{id:"test_128",descripcion:"128 (2^7) → 1",entrada:["128"],salida:`1
`,tipo:"normal"},{id:"test_cero",descripcion:"0 → 0 (no es potencia de 2)",entrada:["0"],salida:`0
`,tipo:"edge"},{id:"test_tres",descripcion:"3 → 0 (no es potencia de 2)",entrada:["3"],salida:`0
`,tipo:"normal"},{id:"test_siete",descripcion:"7 → 0 (no es potencia de 2)",entrada:["7"],salida:`0
`,tipo:"normal"}],gdbSteps:[{paso:1,titulo:"n=8 (1000 en binario)",codigo:`n = 8   → 1000
n - 1 = 7 → 0111
n & (n-1) = 1000 & 0111 = 0000 = 0
n > 0 → TRUE
(n & (n-1)) == 0 → TRUE
→ return 1 (es potencia de 2)`,variables:[{nombre:"n",valor:"8 (1000)",cambio:!1,nota:""},{nombre:"n-1",valor:"7 (0111)",cambio:!1,nota:""},{nombre:"n & (n-1)",valor:"0 (0000)",cambio:!0,nota:"← bit único apagado"},{nombre:"retorno",valor:"1",cambio:!0,nota:"✓ potencia de 2"}]},{paso:2,titulo:"n=3 (0011 en binario) — NO es potencia de 2",codigo:`n = 3   → 0011
n - 1 = 2 → 0010
n & (n-1) = 0011 & 0010 = 0010 = 2 ≠ 0
→ return 0 (no es potencia de 2)`,variables:[{nombre:"n",valor:"3 (0011)",cambio:!1,nota:"← 2 bits activos"},{nombre:"n & (n-1)",valor:"2 (0010) ≠ 0",cambio:!0,nota:"← no es cero"},{nombre:"retorno",valor:"0",cambio:!0,nota:""}]},{paso:3,titulo:"n=0 — caso especial",codigo:`n = 0
n > 0 → FALSE
→ short-circuit: return 0
// 0 no es potencia de 2 — sin bits activos`,variables:[{nombre:"n > 0",valor:"FALSE",cambio:!0,nota:"← cortocircuito"},{nombre:"retorno",valor:"0",cambio:!0,nota:""}]}],trampas:[{severidad:"mortal",titulo:"Olvidar la condición n > 0",descripcion:"n=0 satisface (0 & -1) == 0 en algunos sistemas. La condición n > 0 es necesaria para excluir el 0.",codigoMal:`// ❌ n=0 da resultado incorrecto en algunos sistemas
return ((n & (n - 1)) == 0);  // 0 & UINT_MAX puede ser 0`,codigoBien:`// ✅
return (n > 0 && (n & (n - 1)) == 0);`},{severidad:"warning",titulo:"Usar int en vez de unsigned int",descripcion:"La firma usa unsigned int, que no tiene valores negativos. Con int, n-1 para n=0 sería -1 (underflow). unsigned int lo maneja de forma segura.",codigoMal:`// ⚠️ int puede causar underflow con n=0
int is_power_of_2(int n) { ... }`,codigoBien:`// ✅
int is_power_of_2(unsigned int n) { ... }`},{severidad:"warning",titulo:"Retornar true/false en lugar de 1/0",descripcion:"La función debe retornar exactamente 1 (es potencia) o 0 (no lo es), no -1, 2, etc.",codigoMal:`// ⚠️ retorna n & (n-1) que puede ser cualquier valor
return !(n & (n - 1));  // ! convierte a 0/1 — en realidad esto sí está bien`,codigoBien:`// ✅ Explícitamente 1 o 0
return (n > 0 && (n & (n - 1)) == 0);  // == 0 da 0 o 1`}],bajoCelCapot:`Las potencias de 2 en binario: 1=0001, 2=0010, 4=0100, 8=1000.
Solo tienen UN bit en 1. n-1 pone todos los bits por debajo de ese 1 a 1 y lo apaga.
AND bit a bit: n & (n-1) = 0 solo cuando n tiene exactamente un bit encendido.
Este truco es la base de muchos algoritmos de optimización de bits.`,estrategia:"MEMORIZAR",razonEstrategia:"La solución de una línea (n > 0 && (n & (n-1)) == 0) es contra-intuitiva. Sin haberla visto antes es casi imposible derivarla bajo presión.",relacionados:["reverse_bits","swap_bits","print_bits"]},Ez={id:"last_word",nombre:"last_word",nivel:2,dificultad:"medio",tipoEntrega:"programa",archivosEsperados:["last_word.c"],funcionesPermitidas:["write"],subject:`Assignment name  : last_word
Expected files   : last_word.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that takes a string and displays its last word followed by
a newline.

A word is a sequence of non-space characters.

If the number of arguments is not 1, or there are no words, just display a
newline.

Example:
$> ./last_word "FOR THE KNIFE" | cat -e
KNIFE$
$> ./last_word "   hello   " | cat -e
hello$
$> ./last_word | cat -e
$
$>`,descripcion:"Programa que imprime la última palabra de un string. Algoritmo: retroceder desde el final saltando espacios, luego encontrar el inicio de la última palabra y escribirla.",palacio:{habitacion:"salon",mueble:"sofa",personaje:"El Detective de la Última Palabra",emoji:"🕵️",historia:`En el salón hay un Sofá donde el Detective siempre se sienta al final.
Le das una frase y el Detective empieza leyendo desde el FINAL:
PASO 1: Retrocede hasta que no sea espacio (salta espacios finales).
PASO 2: Marca donde termina la palabra (end).
PASO 3: Retrocede hasta que sea espacio o llegue al inicio (start).
PASO 4: Escribe str[start..end].
Si no hay palabras (todo espacios o string vacío), imprime solo '\\n'.`,anclas:["end = len-1; while end>=0 && str[end]==' ': end--","if end<0: sin palabra → solo '\\n'","start = end; while start>0 && str[start-1]!=' ': start--","write str[start..end] char a char","separador: solo espacio (no tab, no newline)"]},herramientas:["strings"],formulaClave:{descripcion:"Desde el final: saltar espacios, luego buscar el inicio de la última palabra",formula:'end=len-1; while(str[end]==" ")end--; start=end; while(start>0&&str[start-1]!=" ")start--; write(str+start, end-start+1)',ejemplo:{entrada:'"   hello   "',calculo:'end=8→saltar 3 spaces→end=4("o"); start=4→retroceder hasta espacio→start=0; write "hello"',resultado:'"hello"'}},versiones:[{id:"clasica",nombre:"Con dos índices end y start",descripcion:"La más explícita. Primero end (salta espacios finales), luego start (encuentra inicio de palabra).",recomendada:!0,codigo:`#include <unistd.h>

int	main(int argc, char **argv)
{
	int	end;
	int	start;

	if (argc == 2)
	{
		end = 0;
		while (argv[1][end])
			end++;
		end--;
		while (end >= 0 && argv[1][end] == ' ')
			end--;
		if (end >= 0)
		{
			start = end;
			while (start > 0 && argv[1][start - 1] != ' ')
				start--;
			while (start <= end)
			{
				write(1, &argv[1][start], 1);
				start++;
			}
		}
	}
	write(1, "\\n", 1);
	return (0);
}`},{id:"punteros",nombre:"Con punteros directos",descripcion:"Usa punteros para retroceder. Más compacto.",recomendada:!1,codigo:`#include <unistd.h>

int	main(int argc, char **argv)
{
	char	*end;
	char	*start;

	if (argc == 2)
	{
		end = argv[1];
		while (*end)
			end++;
		end--;
		while (end >= argv[1] && *end == ' ')
			end--;
		if (end >= argv[1])
		{
			start = end;
			while (start > argv[1] && *(start - 1) != ' ')
				start--;
			while (start <= end)
				write(1, start++, 1);
		}
	}
	write(1, "\\n", 1);
	return (0);
}`}],tests:[{id:"test_clasico",descripcion:'"FOR THE KNIFE" → "KNIFE"',entrada:["FOR THE KNIFE"],salida:`KNIFE
`,tipo:"normal"},{id:"test_trailing_spaces",descripcion:'"hello   " → "hello" (espacios finales)',entrada:["hello   "],salida:`hello
`,tipo:"normal"},{id:"test_leading_spaces",descripcion:'"   hello" → "hello"',entrada:["   hello"],salida:`hello
`,tipo:"normal"},{id:"test_una_palabra",descripcion:'"hello" → "hello"',entrada:["hello"],salida:`hello
`,tipo:"normal"},{id:"test_solo_espacios",descripcion:'"   " → "" (solo espacios → sin palabra)',entrada:["   "],salida:`
`,tipo:"edge"},{id:"test_vacio",descripcion:'"" → "" (string vacío)',entrada:[""],salida:`
`,tipo:"edge"}],gdbSteps:[{paso:1,titulo:'s="   hello   ": calcular len y retroceder desde el final',codigo:`s = "   hello   "
len = 11
end = 10  (índice del último char)
s[10]=' ', s[9]=' ', s[8]=' ' → espacios finales
end-- × 3 → end = 7  (s[7]='o')`,variables:[{nombre:"end inicial",valor:"10",cambio:!1,nota:""},{nombre:"end tras saltar",valor:'7 ("o")',cambio:!0,nota:'← fin real de "hello"'}]},{paso:2,titulo:"end=7: buscar inicio de la palabra",codigo:`start = 7
start>0 && s[start-1]!=' ':
  s[6]='l' ≠ ' ' → start-- → 6
  s[5]='l' ≠ ' ' → start-- → 5
  s[4]='e' ≠ ' ' → start-- → 4
  s[3]='h' ≠ ' ' → start-- → 3
  s[2]=' ' == ' ' → PARA
start = 3`,variables:[{nombre:"start",valor:'3 ("h" de "hello")',cambio:!0,nota:""}]},{paso:3,titulo:'Escribir str[3..7] = "hello"',codigo:`write s[3]='h', s[4]='e', s[5]='l', s[6]='l', s[7]='o'
→ "hello"`,variables:[{nombre:"salida",valor:'"hello"',cambio:!0,nota:"✓"}]},{paso:4,titulo:'write("\\n")',codigo:`write(1, "\\n", 1)
// Salida final: "hello\\n"`,variables:[{nombre:"salida final",valor:'"hello\\n"',cambio:!0,nota:"✓"}]}],trampas:[{severidad:"mortal",titulo:'No saltar espacios finales → last "word" incluye espacios',descripcion:"Si el string termina en espacios y no los saltamos, end apunta a un espacio, no al final de la última palabra.",codigoMal:`// ❌ No salta espacios finales
end = len - 1;
// "hello   ": end=7 (' ') → busca desde espacio → incorrecto`,codigoBien:`// ✅ Saltar espacios del final primero
end = len - 1;
while (end >= 0 && str[end] == ' ')
    end--;
// "hello   ": end=4 ('o') → correcto`},{severidad:"mortal",titulo:"Condición start > 0 en vez de start >= 0",descripcion:"Si la última palabra está al inicio del string (sin espacios delante), start debe llegar a 0. Si la condición es start > 0, se para en 1 y pierde el primer char.",codigoMal:`// ❌ Se para en start=1, pierde str[0]
while (start > 0 && str[start] != ' ')
    start--;
// "hello": start nunca llega a 0`,codigoBien:`// ✅ Comprobar str[start-1] para poder llegar a start=0
while (start > 0 && str[start - 1] != ' ')
    start--;`},{severidad:"warning",titulo:"Solo espacio como separador, NO tab ni newline",descripcion:'El subject dice "non-space characters" — espacio ASCII 32. El separador es SOLO el espacio, no el tab. Diferente de first_word que incluye tabs.',codigoMal:`// ❌ Tratar tab como separador (no es correcto para last_word)
while (end >= 0 && (str[end] == ' ' || str[end] == '\\t'))
    end--;`,codigoBien:`// ✅ Solo espacio
while (end >= 0 && str[end] == ' ')
    end--;`}],bajoCelCapot:`El algoritmo es: ir al final, retroceder spaces, marcar end, retroceder no-spaces para encontrar start.
La longitud de la última palabra es end - start + 1.
Casos especiales: string vacío (end empieza en -1), todo espacios (end<0 tras el primer while).
last_word vs first_word: first_word avanza desde el inicio; last_word retrocede desde el final.`,estrategia:"MEMORIZAR",razonEstrategia:'El patrón "ir al final, saltar separadores, encontrar inicio" es reutilizable en cualquier parser de tokens desde la derecha.',relacionados:["first_word","ft_strcspn","ft_strrev"]},Nz={id:"print_bits",nombre:"print_bits",nivel:2,dificultad:"medio",tipoEntrega:"funcion",archivosEsperados:["print_bits.c"],funcionesPermitidas:["write"],subject:`Assignment name  : print_bits
Expected files   : print_bits.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a function that takes a byte, and prints it in binary without a
newline at the end.

void	print_bits(unsigned char octet);

Example:
print_bits(2)  → 00000010
print_bits(42) → 00101010`,descripcion:'Función que imprime los 8 bits de un byte en orden MSB→LSB. Itera desde el bit 7 al bit 0, extrayendo cada bit con (octet >> i) & 1 y escribiendo "0" o "1".',palacio:{habitacion:"salon",mueble:"radio",personaje:"El Locutor Binario",emoji:"📻",historia:`En el salón hay una Radio que retransmite en binario.
El Locutor lee el byte desde el bit más importante (bit 7) al menos importante (bit 0).
Para cada bit: desplaza el byte i posiciones a la derecha, enmascara con &1.
Si el resultado es 1 → transmite "1", si es 0 → transmite "0".
SIEMPRE 8 bits, siempre con ceros a la izquierda. SIN newline al final.`,anclas:["i = 7; while i >= 0: extraer bit","(octet >> i) & 1  ← bit i del byte","c = '0' + bit  ← convierte 0/1 a char","write(1, &c, 1)  ← escribe un char","SIN '\\n' al final (a diferencia de printf)"]},herramientas:["bits","ascii"],formulaClave:{descripcion:'MSB primero: extraer bit i con (octet>>i)&1, escribir "0" o "1"',formula:'i=7; while(i>=0){ c="0"+((octet>>i)&1); write(1,&c,1); i--; }',ejemplo:{entrada:"octet=2 (00000010)",calculo:"i=7→0, i=6→0, i=5→0, i=4→0, i=3→0, i=2→0, i=1→1, i=0→0",resultado:'"00000010"'}},versiones:[{id:"clasica",nombre:"Desde i=7 hasta i=0 (MSB primero)",descripcion:"Bucle descendente, extrae cada bit con shift y mask. La más clara.",recomendada:!0,codigo:`#include <unistd.h>

void	print_bits(unsigned char octet)
{
	int	i;
	char	c;

	i = 7;
	while (i >= 0)
	{
		c = '0' + ((octet >> i) & 1);
		write(1, &c, 1);
		i--;
	}
}`},{id:"mascara",nombre:"Con máscara 128 (1000 0000)",descripcion:"Empieza con máscara=128, desplaza a la derecha. Evita el shift en el índice.",recomendada:!1,codigo:`#include <unistd.h>

void	print_bits(unsigned char octet)
{
	unsigned char	mask;
	char		c;

	mask = 128;
	while (mask > 0)
	{
		c = (octet & mask) ? '1' : '0';
		write(1, &c, 1);
		mask >>= 1;
	}
}`}],tests:[{id:"test_dos",descripcion:'2 → "00000010"',entrada:["2"],salida:`00000010
`,tipo:"normal"},{id:"test_42",descripcion:'42 → "00101010"',entrada:["42"],salida:`00101010
`,tipo:"normal"},{id:"test_cero",descripcion:'0 → "00000000"',entrada:["0"],salida:`00000000
`,tipo:"edge"},{id:"test_255",descripcion:'255 → "11111111"',entrada:["255"],salida:`11111111
`,tipo:"edge"},{id:"test_uno",descripcion:'1 → "00000001"',entrada:["1"],salida:`00000001
`,tipo:"normal"},{id:"test_128",descripcion:'128 → "10000000"',entrada:["128"],salida:`10000000
`,tipo:"normal"}],gdbSteps:[{paso:1,titulo:"octet=2 (00000010) — i=7 hasta i=2: bits 0",codigo:`octet = 2 → 00000010
i=7: (2 >> 7) & 1 = 0 & 1 = 0 → write('0')
i=6: (2 >> 6) & 1 = 0 → write('0')
i=5: (2 >> 5) & 1 = 0 → write('0')
i=4: (2 >> 4) & 1 = 0 → write('0')
i=3: (2 >> 3) & 1 = 0 → write('0')
i=2: (2 >> 2) & 1 = 0 → write('0')`,variables:[{nombre:"salida hasta i=2",valor:'"000000"',cambio:!0,nota:""}]},{paso:2,titulo:"i=1: bit 1 está activo en 2",codigo:`i=1: (2 >> 1) & 1 = 1 & 1 = 1 → write('1')
// 2 en binario: ...0010 → bit 1 (segundo desde la derecha) = 1`,variables:[{nombre:"salida",valor:'"0000001"',cambio:!0,nota:""}]},{paso:3,titulo:"i=0: bit 0 es 0",codigo:`i=0: (2 >> 0) & 1 = 2 & 1 = 0 → write('0')
// 2 en binario: 00000010 → bit 0 = 0`,variables:[{nombre:"salida final",valor:'"00000010"',cambio:!0,nota:"✓"}]}],trampas:[{severidad:"mortal",titulo:"Empezar desde i=0 (LSB primero) en vez de i=7 (MSB primero)",descripcion:"print_bits imprime MSB primero (bit 7 al bit 0). Si empiezas desde i=0, el output es el binario al revés.",codigoMal:`// ❌ LSB primero → output invertido
i = 0;
while (i < 8) {
    c = '0' + ((octet >> i) & 1);
    write(1, &c, 1);
    i++;
}
// octet=2: "01000000" (invertido, incorrecto)`,codigoBien:`// ✅ MSB primero → correcto
i = 7;
while (i >= 0) {
    c = '0' + ((octet >> i) & 1);
    write(1, &c, 1);
    i--;
}
// octet=2: "00000010" (correcto)`},{severidad:"mortal",titulo:"Añadir \\n al final — la función NO debe imprimir newline",descripcion:'El subject dice explícitamente "without a newline at the end". Solo el main de prueba puede añadir el \\n. La función no debe.',codigoMal:`// ❌ No debe imprimir newline
write(1, "\\n", 1);  // al final de print_bits`,codigoBien:`// ✅ Sin newline — la función termina tras el bit 0
// El main de prueba añade el \\n separado`},{severidad:"warning",titulo:"Usar printf en vez de write",descripcion:"Las funciones permitidas son solo write. No puedes usar printf, puts ni putchar.",codigoMal:`// ❌ printf no está permitido
printf("%d", (octet >> i) & 1);`,codigoBien:`// ✅ write con char calculado
c = '0' + ((octet >> i) & 1);
write(1, &c, 1);`}],bajoCelCapot:`(octet >> i) desplaza el byte i posiciones a la derecha.
& 1 enmascara todo excepto el bit menos significativo → 0 o 1.
'0' + bit convierte 0→'0'(48) o 1→'1'(49) para poder escribirlo con write.
El bit más significativo (MSB) es el bit 7: (octet >> 7) & 1.`,estrategia:"MEMORIZAR",razonEstrategia:"El patrón (octet>>i)&1 para extraer el bit i es universal en manipulación de bits. MSB primero (i=7..0) es el orden visual estándar.",relacionados:["reverse_bits","swap_bits","is_power_of_2"]},Cz={id:"reverse_bits",nombre:"reverse_bits",nivel:2,dificultad:"difícil",tipoEntrega:"funcion",archivosEsperados:["reverse_bits.c"],funcionesPermitidas:[],subject:`Assignment name  : reverse_bits
Expected files   : reverse_bits.c
Allowed functions: none
--------------------------------------------------------------------------------

Write a function that takes a byte, reverses its bits in order and returns
the result.

unsigned char	reverse_bits(unsigned char octet);

Example:
reverse_bits(1)   → 128   (00000001 → 10000000)
reverse_bits(2)   → 64    (00000010 → 01000000)
reverse_bits(170) → 85    (10101010 → 01010101)`,descripcion:"Función que invierte el orden de los bits de un byte. Usa acumulación: bit = bit*2 + octet%2, octet /= 2, repetido 8 veces. Inicializar bit=0.",palacio:{habitacion:"salon",mueble:"reloj",personaje:"El Reversificador de Bits",emoji:"🔄",historia:`En el salón hay un Reloj especial que lee bits en orden inverso.
El Reversificador tiene dos variables: octet (el byte original) y bit (el resultado, empieza en 0).
CADA ITERACIÓN hace dos cosas:
1. bit = bit*2 + octet%2  ← extrae el bit menos significativo y lo añade a la izquierda
2. octet = octet / 2       ← desplaza octet a la derecha (borra el bit extraído)
Después de 8 iteraciones, bit contiene los bits en orden inverso.
CLAVE: inicializar bit=0 (no 1, no octet).`,anclas:["bit = 0  ← inicializar a 0 (¡no a otra cosa!)","bit = bit * 2 + octet % 2  ← extrae LSB y construye resultado","octet = octet / 2  ← desplaza derecha (equivale a >> 1)","repetir 8 veces (un byte = 8 bits)","return (bit)  ← el byte invertido"]},herramientas:["bits"],formulaClave:{descripcion:"Extrae LSB de octet, acumúlalo en bit desplazando left. Repetir 8 veces.",formula:"bit=0; for(i=0;i<8;i++){ bit=bit*2+octet%2; octet/=2; } return bit;",ejemplo:{entrada:"octet=1 (00000001)",calculo:"i=0:bit=0*2+1=1,oct=0; i=1:bit=1*2+0=2,oct=0; ...i=7:bit=128,oct=0",resultado:"128 (10000000)"}},versiones:[{id:"clasica",nombre:"Con while y operaciones aritméticas",descripcion:"Usa * y % en vez de operadores de bits. La más clara conceptualmente.",recomendada:!0,codigo:`unsigned char	reverse_bits(unsigned char octet)
{
	unsigned char	bit;
	int			i;

	bit = 0;
	i = 0;
	while (i < 8)
	{
		bit = bit * 2 + octet % 2;
		octet = octet / 2;
		i++;
	}
	return (bit);
}`},{id:"bitwise",nombre:"Con operadores de bits (<<, >>, &, |)",descripcion:"Equivalente con shift y AND. Más idiomático en C para bits.",recomendada:!1,codigo:`unsigned char	reverse_bits(unsigned char octet)
{
	unsigned char	bit;
	int			i;

	bit = 0;
	i = 0;
	while (i < 8)
	{
		bit = (bit << 1) | (octet & 1);
		octet >>= 1;
		i++;
	}
	return (bit);
}`}],tests:[{id:"test_uno",descripcion:"1 (00000001) → 128 (10000000)",entrada:["1"],salida:`128
`,tipo:"normal"},{id:"test_dos",descripcion:"2 (00000010) → 64 (01000000)",entrada:["2"],salida:`64
`,tipo:"normal"},{id:"test_170",descripcion:"170 (10101010) → 85 (01010101)",entrada:["170"],salida:`85
`,tipo:"normal"},{id:"test_cero",descripcion:"0 (00000000) → 0 (00000000)",entrada:["0"],salida:`0
`,tipo:"edge"},{id:"test_255",descripcion:"255 (11111111) → 255 (11111111)",entrada:["255"],salida:`255
`,tipo:"edge"},{id:"test_128",descripcion:"128 (10000000) → 1 (00000001)",entrada:["128"],salida:`1
`,tipo:"normal"}],gdbSteps:[{paso:1,titulo:"octet=1 (00000001), bit=0 — inicio",codigo:`octet = 1  → binario: 00000001
bit = 0    → binario: 00000000
i = 0`,variables:[{nombre:"octet",valor:"1 (00000001)",cambio:!1,nota:""},{nombre:"bit",valor:"0 (00000000)",cambio:!1,nota:"← inicializado a 0"}]},{paso:2,titulo:"i=0: extraer LSB=1, mover a bit",codigo:`bit = 0 * 2 + 1 % 2 = 0 + 1 = 1
octet = 1 / 2 = 0
→ bit=1 (00000001), octet=0`,variables:[{nombre:"octet%2",valor:"1 (LSB)",cambio:!1,nota:"← bit menos significativo"},{nombre:"bit",valor:"1 (00000001)",cambio:!0,nota:""},{nombre:"octet",valor:"0",cambio:!0,nota:""}]},{paso:3,titulo:"i=1..7: octet=0 → solo bit*2 cada vez",codigo:`i=1: bit=1*2+0=2, octet=0
i=2: bit=2*2+0=4, octet=0
i=3: bit=4*2+0=8, octet=0
i=4: bit=8*2+0=16, octet=0
i=5: bit=16*2+0=32, octet=0
i=6: bit=32*2+0=64, octet=0
i=7: bit=64*2+0=128, octet=0`,variables:[{nombre:"bit tras i=7",valor:"128 (10000000)",cambio:!0,nota:"← LSB original ahora es MSB"}]},{paso:4,titulo:"return 128",codigo:`return (bit) = 128
// 00000001 invertido = 10000000 = 128 ✓`,variables:[{nombre:"retorno",valor:"128",cambio:!0,nota:"✓"}]}],trampas:[{severidad:"mortal",titulo:"Inicializar bit=1 o bit=octet en vez de bit=0",descripcion:"bit empieza en 0. Si empieza en 1 u otro valor, el resultado final será incorrecto porque bit*2 en la primera iteración ya da un valor no nulo.",codigoMal:`// ❌ Inicialización incorrecta
unsigned char bit = 1;   // error: 1*2+... = 2+... incorrectobunsigned char bit = octet; // error: comienza con el valor original`,codigoBien:`// ✅
unsigned char bit = 0;   // empieza limpio, se construye bit a bit`},{severidad:"mortal",titulo:"Iterar 7 veces en vez de 8",descripcion:"Un byte tiene 8 bits. Si el bucle va i<7, el último bit (MSB) no se procesa y el resultado es incorrecto.",codigoMal:`// ❌ Solo 7 iteraciones — pierde el MSB
while (i < 7) { ... i++; }`,codigoBien:`// ✅ 8 iteraciones (uno por bit de byte)
while (i < 8) { ... i++; }`},{severidad:"warning",titulo:"Usar int en vez de unsigned char para bit",descripcion:"bit debe ser unsigned char para que los bits extras no causen problemas. Con int funciona en la práctica, pero la firma dice unsigned char.",codigoMal:`// ⚠️ int puede funcionar pero no es correcto semánticamente
int bit = 0;`,codigoBien:`// ✅
unsigned char bit = 0;`}],bajoCelCapot:`bit = bit*2 + octet%2 es equivalente a (bit << 1) | (octet & 1).
octet / 2 es equivalente a octet >> 1.
Matemáticamente: si octet = b7b6b5b4b3b2b1b0, el resultado es b0b1b2b3b4b5b6b7.
El LSB (bit menos significativo) de octet se extrae con %2 y se convierte en MSB del resultado al iterar.`,estrategia:"MEMORIZAR",razonEstrategia:"La fórmula bit=bit*2+octet%2 y octet/=2 es contraintuitiva pero elegante. Hay que memorizarla porque es difícil de derivar bajo presión.",relacionados:["swap_bits","print_bits","is_power_of_2"]},kz={id:"swap_bits",nombre:"swap_bits",nivel:2,dificultad:"medio",tipoEntrega:"funcion",archivosEsperados:["swap_bits.c"],funcionesPermitidas:[],subject:`Assignment name  : swap_bits
Expected files   : swap_bits.c
Allowed functions: none
--------------------------------------------------------------------------------

Write a function that takes a byte, swaps its halves like the example and
returns the result.

unsigned char	swap_bits(unsigned char octet);

Example:
swap_bits(1)  → 16   (00000001 → 00010000)
swap_bits(16) → 1    (00010000 → 00000001)
swap_bits(65) → 20   (01000001 → 00010100)`,descripcion:"Función que intercambia los dos nibbles (mitades de 4 bits) de un byte. El nibble bajo (bits 0-3) pasa a ser el alto (bits 4-7) y viceversa. Fórmula: (octet << 4) | (octet >> 4).",palacio:{habitacion:"salon",mueble:"ventilador",personaje:"El Intercambiador de Nibbles",emoji:"🌀",historia:`En el salón hay un Ventilador que hace girar los nibbles de un byte.
Un byte tiene dos mitades: nibble alto (bits 4-7) y nibble bajo (bits 0-3).
El Ventilador toma el nibble bajo y lo sube a la posición alta (shift left 4).
Toma el nibble alto y lo baja a la posición baja (shift right 4).
Combina ambas partes con OR y listo: los nibbles están intercambiados.`,anclas:["nibble bajo: octet & 0x0F (0000 1111) → bits 0-3","nibble alto: octet & 0xF0 (1111 0000) → bits 4-7","bajo al alto: (octet & 0x0F) << 4","alto al bajo: (octet & 0xF0) >> 4","return ((octet << 4) | (octet >> 4))  ← versión compacta"]},herramientas:["bits"],formulaClave:{descripcion:"Mover nibble bajo a posición alta y nibble alto a posición baja, combinar con OR",formula:"return ((octet << 4) | (octet >> 4));",ejemplo:{entrada:"octet=1 (00000001)",calculo:"1<<4=16 (00010000); 1>>4=0 (00000000); 16|0=16",resultado:"16 (00010000)"}},versiones:[{id:"compacta",nombre:"Compacta con shift directo",descripcion:"Una línea. Solo funciona si unsigned char — los bits extras se truncan automáticamente.",recomendada:!0,codigo:`unsigned char	swap_bits(unsigned char octet)
{
	return ((octet << 4) | (octet >> 4));
}`},{id:"mascara",nombre:"Con máscaras explícitas 0x0F y 0xF0",descripcion:"Más explícita: separa nibbles con AND antes de desplazar.",recomendada:!1,codigo:`unsigned char	swap_bits(unsigned char octet)
{
	unsigned char	low;
	unsigned char	high;

	low = (octet & 0x0F) << 4;
	high = (octet & 0xF0) >> 4;
	return (low | high);
}`}],tests:[{id:"test_uno",descripcion:"1 (00000001) → 16 (00010000)",entrada:["1"],salida:`16
`,tipo:"normal"},{id:"test_16",descripcion:"16 (00010000) → 1 (00000001)",entrada:["16"],salida:`1
`,tipo:"normal"},{id:"test_65",descripcion:"65 (01000001) → 20 (00010100)",entrada:["65"],salida:`20
`,tipo:"normal"},{id:"test_cero",descripcion:"0 (00000000) → 0",entrada:["0"],salida:`0
`,tipo:"edge"},{id:"test_255",descripcion:"255 (11111111) → 255 (simétrico)",entrada:["255"],salida:`255
`,tipo:"edge"},{id:"test_170",descripcion:"170 (10101010) → 170 (simétrico)",entrada:["170"],salida:`170
`,tipo:"normal"}],gdbSteps:[{paso:1,titulo:"octet=1 (00000001)",codigo:`octet = 1  → 00000001
nibble bajo: bits 0-3 = 0001
nibble alto: bits 4-7 = 0000`,variables:[{nombre:"octet",valor:"1 (00000001)",cambio:!1,nota:""}]},{paso:2,titulo:"octet << 4 y octet >> 4",codigo:`octet << 4 = 1 << 4 = 16   → 00010000
// El nibble bajo (0001) sube a posición alta
octet >> 4 = 1 >> 4 = 0    → 00000000
// El nibble alto (0000) baja a posición baja`,variables:[{nombre:"octet << 4",valor:"16 (00010000)",cambio:!0,nota:"← nibble bajo→alto"},{nombre:"octet >> 4",valor:"0 (00000000)",cambio:!0,nota:"← nibble alto→bajo"}]},{paso:3,titulo:"OR para combinar",codigo:`16 | 0 = 16
00010000
| 00000000
= 00010000 = 16
return 16`,variables:[{nombre:"retorno",valor:"16 (00010000)",cambio:!0,nota:"✓ nibbles intercambiados"}]},{paso:4,titulo:"octet=65 (01000001): nibble bajo=0001, alto=0100",codigo:`65 = 01000001
65 << 4 = 00010000 (bajo=0001 → alto)  = 16... pero se trunca a 8 bits
65 << 4 en unsigned char = 00010000 = 16? No:
65 = 0100 0001
65 << 4 = 0001 0000 (el 0100 sale del byte) → 00010000 → pero como unsigned char = truncado
65 >> 4 = 0000 0100 = 4
16 | 4 = 20 → 00010100
return 20 ✓`,variables:[{nombre:"octet",valor:"65 (01000001)",cambio:!1,nota:""},{nombre:"retorno",valor:"20 (00010100)",cambio:!0,nota:"✓"}]}],trampas:[{severidad:"mortal",titulo:"Usar int en vez de unsigned char → shift puede dar resultados incorrectos",descripcion:"Si octet fuera un int y tuvieras bits en posiciones >7, octet << 4 podría desbordar. Con unsigned char el compilador trunca al byte automáticamente.",codigoMal:`// ❌ int puede tener bits extras que complican el shift
int swap_bits(int octet) { return (octet << 4) | (octet >> 4); }`,codigoBien:`// ✅ unsigned char: solo 8 bits
unsigned char swap_bits(unsigned char octet) {
    return ((octet << 4) | (octet >> 4));
}`},{severidad:"warning",titulo:"Confundir swap_bits (nibbles) con reverse_bits (todos los bits)",descripcion:"swap_bits: intercambia mitades 4+4. reverse_bits: invierte el orden completo bit a bit. Son distintos. swap_bits(1)=16; reverse_bits(1)=128.",codigoMal:`// ❌ Confusión: esto es reverse_bits, no swap_bits
unsigned char bit = 0;
for (int i = 0; i < 8; i++) {
    bit = bit * 2 + octet % 2;
    octet /= 2;
}`,codigoBien:`// ✅ swap_bits: intercambio de nibbles
return ((octet << 4) | (octet >> 4));`}],bajoCelCapot:`Un nibble es la mitad de un byte (4 bits). Un byte tiene nibble alto (bits 4-7) y bajo (bits 0-3).
0x0F = 00001111 (máscara nibble bajo)
0xF0 = 11110000 (máscara nibble alto)
(octet << 4) desplaza el nibble bajo a la posición alta (bits 4-7).
(octet >> 4) desplaza el nibble alto a la posición baja (bits 0-3).
OR combina las dos partes.`,estrategia:"MEMORIZAR",razonEstrategia:"La fórmula (octet<<4)|(octet>>4) es corta pero no obvia. Hay que memorizarla junto con la visualización de nibbles.",relacionados:["reverse_bits","print_bits","is_power_of_2"]},Lz={id:"union",nombre:"union",nivel:2,dificultad:"difícil",tipoEntrega:"programa",archivosEsperados:["union.c"],funcionesPermitidas:["write"],subject:`Assignment name  : union
Expected files   : union.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that takes two strings and prints, without doubles, the
characters that appear in either one of the strings.

The display will be in the order characters appear in the command line, and
will be followed by a newline.

If the number of arguments is not 2, the program displays a newline.

Example:
$> ./union "zpadinton" "notpad" | cat -e
zpadinto$
$> ./union "" "notpad" | cat -e
notpad$
$> ./union | cat -e
$
$>`,descripcion:"Programa que imprime todos los chars de s1 y s2 combinados, sin duplicados, en orden de aparición. Usa tabla visto[256] con índice (unsigned char) para marcar chars ya escritos.",palacio:{habitacion:"salon",mueble:"maceta",personaje:"El Jardinero de Caracteres",emoji:"🌱",historia:`En el salón hay un Jardinero con una maceta enorme donde cabe todo.
Le das dos bolsas de semillas (s1 y s2).
El Jardinero planta cada semilla EN ORDEN: primero las de s1, luego las de s2.
Si ya plantó esa semilla antes, no la repite — mira su libro visto[256].
CLAVE: el índice es (unsigned char)c para evitar acceso con índice negativo.
Al final, la maceta tiene todos los chars únicos en orden de primera aparición.`,anclas:["visto[256] = {0}  ← tabla de chars ya vistos","recorrer s1+s2 en orden (primero s1, luego s2)","if (!visto[(unsigned char)c]): write(c); visto[(unsigned char)c]=1","argc != 3 → solo '\\n'","(unsigned char) evita índices negativos para chars > 127"]},herramientas:["strings","ascii"],formulaClave:{descripcion:"Recorrer s1 luego s2: para cada char, si no está en visto, escribirlo y marcarlo",formula:"for c in s1+s2: if !visto[(uchar)c]: write(c); visto[(uchar)c]=1",ejemplo:{entrada:'s1="hello", s2="world"',calculo:"h→nuevo; e→nuevo; l→nuevo; l→visto; o→nuevo; w→nuevo; o→visto; r→nuevo; l→visto; d→nuevo",resultado:'"helowrd"'}},versiones:[{id:"clasica",nombre:"Con tabla visto[256] e índice (unsigned char)",descripcion:"La más segura y correcta. Inicializa visto[] con un bucle.",recomendada:!0,codigo:`#include <unistd.h>

int	main(int argc, char **argv)
{
	int			i;
	int			visto[256];
	char		c;

	i = 0;
	while (i < 256)
		visto[i++] = 0;
	if (argc == 3)
	{
		i = 0;
		while (argv[1][i])
		{
			c = argv[1][i];
			if (!visto[(unsigned char)c])
			{
				write(1, &c, 1);
				visto[(unsigned char)c] = 1;
			}
			i++;
		}
		i = 0;
		while (argv[2][i])
		{
			c = argv[2][i];
			if (!visto[(unsigned char)c])
			{
				write(1, &c, 1);
				visto[(unsigned char)c] = 1;
			}
			i++;
		}
	}
	write(1, "\\n", 1);
	return (0);
}`},{id:"compacta",nombre:"Con función auxiliar print_unique()",descripcion:"Separa la lógica de escritura única en una función. Más limpia.",recomendada:!1,codigo:`#include <unistd.h>

static void	print_unique(char *s, int *visto)
{
	int	i;
	char	c;

	i = 0;
	while (s[i])
	{
		c = s[i];
		if (!visto[(unsigned char)c])
		{
			write(1, &c, 1);
			visto[(unsigned char)c] = 1;
		}
		i++;
	}
}

int	main(int argc, char **argv)
{
	int		visto[256];
	int		i;

	i = 0;
	while (i < 256)
		visto[i++] = 0;
	if (argc == 3)
	{
		print_unique(argv[1], visto);
		print_unique(argv[2], visto);
	}
	write(1, "\\n", 1);
	return (0);
}`}],tests:[{id:"test_clasico",descripcion:'"zpadinton","notpad" → "zpadinto"',entrada:["zpadinton","notpad"],salida:`zpadinto
`,tipo:"normal"},{id:"test_hello_world",descripcion:'"hello","world" → "helowrd"',entrada:["hello","world"],salida:`helowrd
`,tipo:"normal"},{id:"test_s1_vacio",descripcion:'"","notpad" → "notpad"',entrada:["","notpad"],salida:`notpad
`,tipo:"edge"},{id:"test_s2_vacio",descripcion:'"hello","" → "helo"',entrada:["hello",""],salida:`helo
`,tipo:"edge"},{id:"test_ambos_vacios",descripcion:'"","" → "" (nada)',entrada:["",""],salida:`
`,tipo:"edge"},{id:"test_sin_comun",descripcion:'"abc","xyz" → "abcxyz"',entrada:["abc","xyz"],salida:`abcxyz
`,tipo:"normal"}],gdbSteps:[{paso:1,titulo:"Inicializar visto[256] a 0",codigo:`i = 0;
while (i < 256)
    visto[i++] = 0;
// Todos los 256 slots a 0 (ningún char visto)`,variables:[{nombre:"visto",valor:"[0,0,0,...,0] (256 ceros)",cambio:!0,nota:"← clean state"}]},{paso:2,titulo:'Recorrer s1="hello": h,e,l son nuevos',codigo:`s1[0]='h': visto['h']=0 → write('h'); visto['h']=1
s1[1]='e': visto['e']=0 → write('e'); visto['e']=1
s1[2]='l': visto['l']=0 → write('l'); visto['l']=1
s1[3]='l': visto['l']=1 → NO escribe
s1[4]='o': visto['o']=0 → write('o'); visto['o']=1
salida hasta ahora: "helo"`,variables:[{nombre:"salida",valor:'"helo"',cambio:!0,nota:""},{nombre:"visto['l']",valor:"1",cambio:!0,nota:"← duplicado bloqueado"}]},{paso:3,titulo:'Recorrer s2="world": w,r,d son nuevos; o,l ya vistos',codigo:`s2[0]='w': visto['w']=0 → write('w')
s2[1]='o': visto['o']=1 → NO escribe
s2[2]='r': visto['r']=0 → write('r')
s2[3]='l': visto['l']=1 → NO escribe
s2[4]='d': visto['d']=0 → write('d')
salida: "helowrd"`,variables:[{nombre:"salida",valor:'"helowrd"',cambio:!0,nota:""}]},{paso:4,titulo:'write("\\n")',codigo:`write(1, "\\n", 1)
// Salida final: "helowrd\\n"`,variables:[{nombre:"salida final",valor:'"helowrd\\n"',cambio:!0,nota:"✓"}]}],trampas:[{severidad:"mortal",titulo:"Usar char c como índice de visto[] sin cast → índice negativo",descripcion:"En muchas plataformas char es signed (-128..127). Si c=200 (un char extendido), visto[c] sería visto[-56] → segfault. El cast a (unsigned char) lo hace 0..255.",codigoMal:`// ❌ Sin cast: char puede ser negativo → acceso fuera de rango
char c = argv[1][i];
if (!visto[c])  // si c > 127, c es negativo → crash`,codigoBien:`// ✅ Cast a unsigned char → siempre 0..255
char c = argv[1][i];
if (!visto[(unsigned char)c]) {
    write(1, &c, 1);
    visto[(unsigned char)c] = 1;
}`},{severidad:"mortal",titulo:"No inicializar visto[] → valores basura de la pila",descripcion:'int visto[256] sin inicializar contiene basura. Algunos chars parecerán "ya vistos" y no se imprimirán. Siempre inicializar a 0.',codigoMal:`// ❌ Sin inicializar → comportamiento indefinido
int visto[256];  // contiene basura de la pila`,codigoBien:`// ✅ Inicializar a 0 manualmente (o con memset si está permitido)
int visto[256];
int i = 0;
while (i < 256)
    visto[i++] = 0;`},{severidad:"warning",titulo:"Confundir union (todos únicos) con inter (solo comunes)",descripcion:"union: chars de s1 O s2 (todos, sin repetir). inter: chars de s1 QUE ESTÁN EN s2. Son complementarios.",codigoMal:`// ❌ Confusión: comprueba si c está en s2 antes de escribirlo → inter, no union
if (!visto[(unsigned char)c] && iter(argv[2], c))
    write(1, &c, 1);`,codigoBien:`// ✅ union: no comprueba si c está en s2
if (!visto[(unsigned char)c]) {
    write(1, &c, 1);
    visto[(unsigned char)c] = 1;
}`}],bajoCelCapot:`visto[256] indexado por (unsigned char) es el patrón estándar para "¿he visto este byte antes?".
La diferencia con inter: union incluye todos los chars de ambos strings; inter solo los que están en ambos.
El orden importa: primero s1 completo, luego s2 completo — los chars de s1 siempre van primero.
Para strings vacíos: el while de recorrido no entra, simplemente se salta.`,estrategia:"MEMORIZAR",razonEstrategia:'El patrón visto[256]+(unsigned char) es universal para deduplicación de bytes. Aparece en union, inter, y cualquier problema de "chars únicos".',relacionados:["inter","ft_strpbrk","ft_strcspn"]},Az={id:"wdmatch",nombre:"wdmatch",nivel:2,dificultad:"medio",tipoEntrega:"programa",archivosEsperados:["wdmatch.c"],funcionesPermitidas:["write"],subject:`Assignment name  : wdmatch
Expected files   : wdmatch.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that takes two strings and checks whether the second string's
characters can be found in the first string, in the same order.

If this is the case, display the second string, followed by a newline, otherwise
display just a newline.

If the number of arguments is not 2, the program displays a newline.

Example:
$> ./wdmatch "foobar" "bar" | cat -e
bar$
$> ./wdmatch "foobar" "rab" | cat -e
$
$>`,descripcion:"Programa que comprueba si s2 es una subsecuencia de s1 (los chars de s2 aparecen en s1 en el mismo orden, pero no necesariamente contiguos). Si sí, imprime s2; si no, solo \\n.",palacio:{habitacion:"salon",mueble:"alfombra",personaje:"El Detective de Subsecuencias",emoji:"🕵️",historia:`En el salón hay una Alfombra con huellas secretas.
El Detective tiene dos listas: la pista maestra (s1) y los sospechosos (s2).
Avanza por s1 buscando el primer sospechoso de s2. Cuando lo encuentra, busca el siguiente.
Si logra encontrar TODOS los sospechosos de s2 en orden dentro de s1 → imprime s2.
Si alguno falta o llega antes que su anterior → solo imprime '\\n'.
No importa si hay chars de más entre ellos en s1 — solo importa el ORDEN.`,anclas:["j avanza solo cuando s1[i]==s2[j]  ← sólo al encontrar coincidencia","i avanza siempre  ← recorre toda s1","si argv[2][j]=='\\0' al final → todos encontrados → imprimir s2","si argv[1][i]=='\\0' y argv[2][j]!='\\0' → no encontrado → solo '\\n'","argc != 3 → solo '\\n'"]},herramientas:["strings"],formulaClave:{descripcion:"Dos índices: i recorre s1, j avanza en s2 solo cuando hay match",formula:"while(s1[i]&&s2[j]){ if(s1[i]==s2[j])j++; i++; } if(!s2[j]) write(s2);",ejemplo:{entrada:'s1="foobar", s2="bar"',calculo:'f≠b,o≠b,o≠b,b==b(j=1),a==a(j=2),r==r(j=3); s2[3]=\\0 → print "bar"',resultado:'"bar"'}},versiones:[{id:"clasica",nombre:"Con dos índices i y j",descripcion:"El patrón clásico de verificación de subsecuencia. i siempre avanza, j solo cuando hay match.",recomendada:!0,codigo:`#include <unistd.h>

int	main(int argc, char **argv)
{
	int	i;
	int	j;

	if (argc == 3)
	{
		i = 0;
		j = 0;
		while (argv[1][i] && argv[2][j])
		{
			if (argv[1][i] == argv[2][j])
				j++;
			i++;
		}
		if (!argv[2][j])
		{
			i = 0;
			while (argv[2][i])
			{
				write(1, &argv[2][i], 1);
				i++;
			}
		}
	}
	write(1, "\\n", 1);
	return (0);
}`},{id:"punteros",nombre:"Con punteros directos",descripcion:"Avanza punteros en vez de índices. Más compacto.",recomendada:!1,codigo:`#include <unistd.h>

int	main(int argc, char **argv)
{
	char	*s1;
	char	*s2;

	if (argc == 3)
	{
		s1 = argv[1];
		s2 = argv[2];
		while (*s1 && *s2)
		{
			if (*s1 == *s2)
				s2++;
			s1++;
		}
		if (!*s2)
		{
			s2 = argv[2];
			while (*s2)
				write(1, s2++, 1);
		}
	}
	write(1, "\\n", 1);
	return (0);
}`}],tests:[{id:"test_bar",descripcion:'"foobar","bar" → "bar" (subsecuencia válida)',entrada:["foobar","bar"],salida:`bar
`,tipo:"normal"},{id:"test_rab",descripcion:'"foobar","rab" → "" (r antes de a pero no b a continuación)',entrada:["foobar","rab"],salida:`
`,tipo:"normal"},{id:"test_heo",descripcion:'"hello","heo" → "heo" (h,e,o en orden en "hello")',entrada:["hello","heo"],salida:`heo
`,tipo:"normal"},{id:"test_oxe",descripcion:'"hello","oxe" → "" (no subsecuencia)',entrada:["hello","oxe"],salida:`
`,tipo:"normal"},{id:"test_igual",descripcion:'"hello","hello" → "hello" (idéntico)',entrada:["hello","hello"],salida:`hello
`,tipo:"edge"},{id:"test_s2_mas_largo",descripcion:'"ab","abc" → "" (s2 más largo que s1)',entrada:["ab","abc"],salida:`
`,tipo:"edge"}],gdbSteps:[{paso:1,titulo:'s1="foobar", s2="bar" — bucle principal',codigo:`i=0,j=0: s1[0]='f' != s2[0]='b' → i=1
i=1,j=0: s1[1]='o' != 'b' → i=2
i=2,j=0: s1[2]='o' != 'b' → i=3
i=3,j=0: s1[3]='b' == 'b' → j=1, i=4
i=4,j=1: s1[4]='a' == 'a' → j=2, i=5
i=5,j=2: s1[5]='r' == 'r' → j=3, i=6
s1[6]='\\0' → while FALSE`,variables:[{nombre:"j final",valor:"3",cambio:!0,nota:"← avanzó 3 veces"},{nombre:"argv[2][3]",valor:"'\\0'",cambio:!1,nota:"← todos encontrados"}]},{paso:2,titulo:"!argv[2][j]: j=3, s2[3]=\\0 → TRUE → imprimir s2",codigo:`argv[2][3] = '\\0'
!('\\0') = !(0) = TRUE
→ imprimir s2="bar":
  write('b'), write('a'), write('r')`,variables:[{nombre:"condición",valor:"!s2[j] = TRUE",cambio:!0,nota:""},{nombre:"salida",valor:'"bar"',cambio:!0,nota:"✓"}]},{paso:3,titulo:'Caso "foobar","rab" — r encontrado en pos 5 pero no hay a después',codigo:`i=0..4: f,o,o,b,a → 'r' no encontrado aún (j=0)
i=5: s1[5]='r' == s2[0]='r' → j=1, i=6
s1[6]='\\0' → while FALSE
s2[1]='a' ≠ '\\0' → !s2[j] = FALSE → no imprime`,variables:[{nombre:"j final",valor:"1",cambio:!0,nota:"← solo r encontrado"},{nombre:"condición",valor:'!s2[1]="a" = FALSE',cambio:!0,nota:"← no subsecuencia"},{nombre:"salida",valor:'"" (solo \\n)',cambio:!0,nota:""}]}],trampas:[{severidad:"mortal",titulo:"Avanzar j cuando NO hay match — j solo avanza en coincidencia",descripcion:"j solo debe avanzar cuando s1[i]==s2[j]. Si avanza siempre, consume chars de s2 sin haberlos encontrado en s1.",codigoMal:`// ❌ j avanza siempre — no es subsecuencia correcta
while (s1[i] && s2[j]) {
    if (s1[i] == s2[j])
        write(1, &s2[j], 1);
    i++;
    j++;  // ← siempre avanza — incorrecto
}`,codigoBien:`// ✅ j solo avanza en match
while (s1[i] && s2[j]) {
    if (s1[i] == s2[j])
        j++;
    i++;  // i siempre avanza
}`},{severidad:"mortal",titulo:"Imprimir s2 char a char dentro del while, no después",descripcion:"No se puede imprimir s2 durante la búsqueda — no sabemos aún si toda la subsecuencia está. Hay que verificar primero (!s2[j]) y luego imprimir.",codigoMal:`// ❌ Imprime durante la búsqueda — imprime parcial si falla
while (s1[i] && s2[j]) {
    if (s1[i] == s2[j]) {
        write(1, &s2[j], 1);  // imprime aunque no complete s2
        j++;
    }
    i++;
}`,codigoBien:`// ✅ Verificar PRIMERO, luego imprimir s2 completo
// ... while de búsqueda ...
if (!s2[j]) {
    // imprimir s2 desde el inicio
    i = 0;
    while (s2[i]) write(1, &s2[i++], 1);
}`},{severidad:"warning",titulo:"Confundir subsecuencia con substring",descripcion:'"bar" es substring Y subsecuencia de "foobar". Pero "bor" es subsecuencia (b,o,r en orden) pero NO substring (no son contiguos). wdmatch busca subsecuencia, no substring.',codigoMal:`// ❌ Busca substring (chars contiguos) — incorrecto
// strstr("foobar", "bor") = NULL → error
// wdmatch("foobar", "bor") debería imprimir "bor" ✓`,codigoBien:`// ✅ Subsecuencia: chars en orden, no necesariamente contiguos
// "foobar" contiene b(pos3), o(pos4), r(pos5) → "bor" es subsecuencia`}],bajoCelCapot:`Una subsecuencia mantiene el ORDEN pero no la contigüidad.
"abc" es subsecuencia de "axbxc" (a→b→c en orden, con x de por medio).
"cba" NO es subsecuencia de "abc" (el orden está invertido).
Este algoritmo es O(n+m) — óptimo para verificación de subsecuencias.
Se usa en algoritmos de alineamiento de secuencias de ADN y LCS (Longest Common Subsequence).`,estrategia:"MEMORIZAR",razonEstrategia:'El patrón "dos índices: i siempre avanza, j solo en match" es el algoritmo clásico de verificación de subsecuencia. Hay que conocerlo de memoria.',relacionados:["inter","union","ft_strpbrk"]},Pz={id:"paramsum",nombre:"paramsum",nivel:3,dificultad:"fácil",tipoEntrega:"programa",archivosEsperados:["paramsum.c"],funcionesPermitidas:["write"],subject:`Assignment name  : paramsum
Expected files   : paramsum.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that displays the number of arguments passed to it, followed
by a newline.

With no argument, the program just displays 0.

Example:
$> ./paramsum | cat -e
0$
$> ./paramsum a b c | cat -e
3$
$> ./paramsum "hello world" foo bar | cat -e
3$`,descripcion:"Programa que imprime el número de argumentos recibidos (sin contar el nombre del programa). Básicamente imprime argc-1.",palacio:{habitacion:"dormitorio",mueble:"mesita",personaje:"El Contador de Argumentos",emoji:"🔢",historia:`En la mesita del dormitorio hay un Contador digital que siempre sabe cuántas cosas le das.
Le pasas argumentos y él cuenta: ¿cuántos son? Pero OJO: argv[0] (el nombre del programa) NO cuenta.
argc cuenta el programa también, así que el resultado es argc-1.
Sin argumentos: argc=1, imprime 0.
Con tres argumentos: argc=4, imprime 3.`,anclas:["argc incluye el nombre del programa (argv[0])","imprimir argc - 1  ← el número de argumentos reales","sin args: argc=1 → imprimir 0","put_nbr para imprimir el número","seguido de '\\n'"]},herramientas:["strings"],formulaClave:{descripcion:"argc - 1 es el número de parámetros del programa",formula:'put_nbr(argc - 1); write(1, "\\n", 1);',ejemplo:{entrada:"./paramsum a b c",calculo:"argc=4 → argc-1=3",resultado:"3"}},versiones:[{id:"clasica",nombre:"Clásica con put_nbr recursivo",descripcion:"Imprime argc-1 con una función auxiliar put_nbr. La más limpia.",recomendada:!0,codigo:`#include <unistd.h>

static void	put_nbr(int n)
{
	char	c;

	if (n >= 10)
		put_nbr(n / 10);
	c = '0' + n % 10;
	write(1, &c, 1);
}

int	main(int argc, char **argv)
{
	(void)argv;
	put_nbr(argc - 1);
	write(1, "\\n", 1);
	return (0);
}`},{id:"inline",nombre:"Inline con string temporal",descripcion:"Construye el número como string en un buffer. Sin recursión.",recomendada:!1,codigo:`#include <unistd.h>

int	main(int argc, char **argv)
{
	char	buf[12];
	int	len;
	int	n;

	(void)argv;
	n = argc - 1;
	len = 0;
	if (n == 0)
		buf[len++] = '0';
	while (n > 0)
	{
		buf[len++] = '0' + n % 10;
		n /= 10;
	}
	while (len > 0)
		write(1, &buf[--len], 1);
	write(1, "\\n", 1);
	return (0);
}`}],tests:[{id:"test_cero",descripcion:"Sin argumentos → 0",entrada:[],salida:`0
`,tipo:"edge"},{id:"test_uno",descripcion:"Un argumento → 1",entrada:["a"],salida:`1
`,tipo:"normal"},{id:"test_tres",descripcion:"Tres argumentos → 3",entrada:["a","b","c"],salida:`3
`,tipo:"normal"},{id:"test_dos",descripcion:"Dos argumentos → 2",entrada:["hello","world"],salida:`2
`,tipo:"normal"},{id:"test_cinco",descripcion:"Cinco argumentos → 5",entrada:["1","2","3","4","5"],salida:`5
`,tipo:"normal"}],gdbSteps:[{paso:1,titulo:"./paramsum a b c → argc=4",codigo:`argc = 4
argv[0] = "./paramsum"
argv[1] = "a"
argv[2] = "b"
argv[3] = "c"
argc - 1 = 3`,variables:[{nombre:"argc",valor:"4",cambio:!1,nota:"← incluye el nombre del programa"},{nombre:"argc - 1",valor:"3",cambio:!0,nota:"← lo que hay que imprimir"}]},{paso:2,titulo:"put_nbr(3)",codigo:`put_nbr(3):
  3 < 10 → no recursión
  c = '0' + 3 = '3'
  write(1, "3", 1)
write(1, "\\n", 1)
// Salida: "3\\n"`,variables:[{nombre:"salida",valor:'"3\\n"',cambio:!0,nota:"✓"}]}],trampas:[{severidad:"mortal",titulo:"Imprimir argc en vez de argc-1",descripcion:"argc incluye el nombre del programa (argv[0]). La pregunta pide el número de argumentos pasados, no el total de argc.",codigoMal:`// ❌ argc incluye ./paramsum
put_nbr(argc);  // "3 args" → imprime 4`,codigoBien:`// ✅
put_nbr(argc - 1);  // "3 args" → imprime 3`},{severidad:"warning",titulo:"No manejar el caso n=0 en put_nbr",descripcion:'Si argc-1=0, put_nbr(0) debe imprimir "0". Con un put_nbr que solo itera mientras n>0, no imprimiría nada para n=0.',codigoMal:`// ❌ No imprime nada para n=0
void put_nbr(int n) {
    while (n > 0) { write('0'+n%10); n/=10; }
}`,codigoBien:`// ✅ Manejar 0 explícitamente o con recursión
void put_nbr(int n) {
    if (n >= 10) put_nbr(n / 10);
    char c = '0' + n % 10; write(1, &c, 1);
}
// put_nbr(0): 0 < 10 → no recursión; c='0'+0='0' → write('0') ✓`}],bajoCelCapot:`argc (argument count) siempre incluye argv[0] (el nombre del programa).
argc=1 significa que no se pasaron argumentos: solo el nombre del programa.
"./paramsum a b c" → argc=4, argv={["./paramsum", "a", "b", "c"]}.
El cast (void)argv evita el warning del compilador "unused parameter".`,estrategia:"MEMORIZAR",razonEstrategia:"La confusión argc vs argc-1 es la única trampa. Una vez clara, el ejercicio es el más simple del nivel 3.",relacionados:["tab_mult","add_prime_sum"]},Mz={id:"tab_mult",nombre:"tab_mult",nivel:3,dificultad:"fácil",tipoEntrega:"programa",archivosEsperados:["tab_mult.c"],funcionesPermitidas:["write"],subject:`Assignment name  : tab_mult
Expected files   : tab_mult.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that displays a number's multiplication table.

The program must display the multiplication table of the number given as
argument (from 1 to 9), each operation on its own line.

If the number of arguments is not 1, or if the argument is not a number
between 1 and 9, the program displays a newline.

Format: "i x n = result\\n" for i from 1 to 9.

Example:
$> ./tab_mult 9
1 x 9 = 9
2 x 9 = 18
3 x 9 = 27
4 x 9 = 36
5 x 9 = 45
6 x 9 = 54
7 x 9 = 63
8 x 9 = 72
9 x 9 = 81`,descripcion:'Programa que muestra la tabla de multiplicar del número dado (1-9). Formato exacto: "i x n = resultado\\n" para i de 1 a 9. Requiere put_nbr para imprimir los números.',palacio:{habitacion:"dormitorio",mueble:"poster",personaje:"El Póster de la Tabla",emoji:"📋",historia:`En el dormitorio hay un Póster de tablas de multiplicar en la pared.
Le dices un número del 1 al 9 y el Póster despliega su tabla completa.
El formato es EXACTO: "i x n = resultado" — con espacios alrededor de x y =.
El Póster solo acepta números entre 1 y 9. Si le das otra cosa: solo imprime '\\n'.
Usa put_nbr para imprimir los números sin printf.`,anclas:["for i=1 to 9: write 'i x n = resultado\\n'","formato EXACTO: '1 x N = R\\n' — espacios incluidos","n debe estar entre 1 y 9 (inclusive)","put_nbr para imprimir enteros sin printf","argc != 2 → solo '\\n'"]},herramientas:["strings","ascii"],formulaClave:{descripcion:'Bucle de 1 a 9 imprimiendo "i x n = i*n"',formula:'for i=1 to 9: put_nbr(i); write(" x "); put_nbr(n); write(" = "); put_nbr(i*n); write("\\n");',ejemplo:{entrada:"n=9, i=2",calculo:'"2 x 9 = 18\\n"',resultado:'"2 x 9 = 18"'}},versiones:[{id:"clasica",nombre:"Con put_nbr y strings literales",descripcion:'La más legible. Usa write con strings " x " y " = " directamente.',recomendada:!0,codigo:`#include <unistd.h>

static void	put_nbr(int n)
{
	char	c;

	if (n >= 10)
		put_nbr(n / 10);
	c = '0' + n % 10;
	write(1, &c, 1);
}

int	main(int argc, char **argv)
{
	int	n;
	int	i;

	if (argc != 2 || argv[1][0] < '1' || argv[1][0] > '9' || argv[1][1])
	{
		write(1, "\\n", 1);
		return (0);
	}
	n = argv[1][0] - '0';
	i = 1;
	while (i <= 9)
	{
		put_nbr(i);
		write(1, " x ", 3);
		put_nbr(n);
		write(1, " = ", 3);
		put_nbr(i * n);
		write(1, "\\n", 1);
		i++;
	}
	return (0);
}`},{id:"atoi",nombre:"Con atoi y validación completa",descripcion:"Convierte el argumento con ft_atoi y valida el rango.",recomendada:!1,codigo:`#include <unistd.h>

static void	put_nbr(int n)
{
	char	c;

	if (n >= 10)
		put_nbr(n / 10);
	c = '0' + n % 10;
	write(1, &c, 1);
}

static int	ft_atoi(char *s)
{
	int	n;

	n = 0;
	while (*s >= '0' && *s <= '9')
		n = n * 10 + (*s++ - '0');
	return (n);
}

int	main(int argc, char **argv)
{
	int	n;
	int	i;

	if (argc != 2)
	{
		write(1, "\\n", 1);
		return (0);
	}
	n = ft_atoi(argv[1]);
	if (n < 1 || n > 9)
	{
		write(1, "\\n", 1);
		return (0);
	}
	i = 1;
	while (i <= 9)
	{
		put_nbr(i);
		write(1, " x ", 3);
		put_nbr(n);
		write(1, " = ", 3);
		put_nbr(i * n);
		write(1, "\\n", 1);
		i++;
	}
	return (0);
}`}],tests:[{id:"test_9",descripcion:"n=9 → tabla del 9",entrada:["9"],salida:`1 x 9 = 9
2 x 9 = 18
3 x 9 = 27
4 x 9 = 36
5 x 9 = 45
6 x 9 = 54
7 x 9 = 63
8 x 9 = 72
9 x 9 = 81
`,tipo:"normal"},{id:"test_1",descripcion:"n=1 → tabla del 1",entrada:["1"],salida:`1 x 1 = 1
2 x 1 = 2
3 x 1 = 3
4 x 1 = 4
5 x 1 = 5
6 x 1 = 6
7 x 1 = 7
8 x 1 = 8
9 x 1 = 9
`,tipo:"normal"},{id:"test_5",descripcion:"n=5 → tabla del 5",entrada:["5"],salida:`1 x 5 = 5
2 x 5 = 10
3 x 5 = 15
4 x 5 = 20
5 x 5 = 25
6 x 5 = 30
7 x 5 = 35
8 x 5 = 40
9 x 5 = 45
`,tipo:"normal"},{id:"test_0",descripcion:'n=0 → fuera de rango → "\\n"',entrada:["0"],salida:`
`,tipo:"edge"},{id:"test_10",descripcion:'n=10 → fuera de rango → "\\n"',entrada:["10"],salida:`
`,tipo:"edge"}],gdbSteps:[{paso:1,titulo:"n=9, i=1: primera línea",codigo:`n = 9, i = 1
put_nbr(1) → write('1')
write(1, " x ", 3) → " x "
put_nbr(9) → write('9')
write(1, " = ", 3) → " = "
put_nbr(1 * 9 = 9) → write('9')
write(1, "\\n", 1) → "\\n"
Salida: "1 x 9 = 9\\n"`,variables:[{nombre:"i",valor:"1",cambio:!1,nota:""},{nombre:"i * n",valor:"9",cambio:!1,nota:""}]},{paso:2,titulo:"n=9, i=2: segunda línea (resultado de 2 dígitos)",codigo:`i = 2
put_nbr(2) → "2"
" x "
put_nbr(9) → "9"
" = "
put_nbr(18): 18>=10 → put_nbr(1) → "1"; c='8' → "8"
"\\n"
Salida: "2 x 9 = 18\\n"`,variables:[{nombre:"i * n",valor:"18",cambio:!0,nota:"← 2 dígitos: put_nbr recursivo"}]},{paso:3,titulo:"Bucle termina en i=9",codigo:`i=9:
"9 x 9 = 81\\n"
i++ → i=10
10 <= 9 → FALSE → sale`,variables:[{nombre:"salida final",valor:'9 líneas, última "9 x 9 = 81\\n"',cambio:!0,nota:"✓"}]}],trampas:[{severidad:"mortal",titulo:"Formato incorrecto: sin espacios alrededor de x y =",descripcion:'El formato EXACTO es "i x n = resultado". Hay espacios antes y después de x, y antes y después de =. Cualquier diferencia da error.',codigoMal:`// ❌ Sin espacios
write(1, "x", 1);  // "1x9=9" — incorrecto
write(1, "=", 1);`,codigoBien:`// ✅ Con espacios exactos
write(1, " x ", 3);  // " x "
write(1, " = ", 3);  // " = "`},{severidad:"mortal",titulo:"No validar que n esté entre 1 y 9",descripcion:"Si n=0 o n=10 (u otro valor fuera de rango), el programa debe imprimir solo \\n. Sin validar, imprimiría una tabla inválida.",codigoMal:`// ❌ Sin validación de rango
n = ft_atoi(argv[1]);
// n podría ser 0, 10, -5, etc.`,codigoBien:`// ✅ Validar rango
n = ft_atoi(argv[1]);
if (n < 1 || n > 9) { write(1, "\\n", 1); return 0; }`},{severidad:"warning",titulo:"Usar printf en vez de write",descripcion:"Las funciones permitidas son solo write. Aunque printf funciona en el examen real, en el simulador y norminette es importante usar solo write.",codigoMal:`// ❌ printf no permitido
printf("%d x %d = %d\\n", i, n, i * n);`,codigoBien:`// ✅ write + put_nbr
put_nbr(i); write(1, " x ", 3); put_nbr(n); write(1, " = ", 3); put_nbr(i * n); write(1, "\\n", 1);`}],bajoCelCapot:`put_nbr(n) imprime n recursivamente: para n=81, llama put_nbr(8) que imprime '8', luego imprime '1'.
El formato " x " tiene 3 bytes (espacio, x, espacio) → write(1, " x ", 3).
Validar el input: argv[1][0] entre '1'-'9' y argv[1][1]==0 es la forma más compacta.
El bucle de 1 a 9 es el más simple posible para una tabla de multiplicar.`,estrategia:"MEMORIZAR",razonEstrategia:'El formato exacto "i x n = r" con los espacios correctos y la función put_nbr son lo que hay que memorizar. El bucle de 1 a 9 es trivial.',relacionados:["paramsum","add_prime_sum","print_hex"]},Tz={id:"epur_str",nombre:"epur_str",nivel:3,dificultad:"medio",tipoEntrega:"programa",archivosEsperados:["epur_str.c"],funcionesPermitidas:["write"],subject:`Assignment name  : epur_str
Expected files   : epur_str.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that takes a string and displays it with no leading or
trailing spaces, and with each sequence of spaces reduced to a single space.

If the number of arguments is not 1, just display a newline.

Example:
$> ./epur_str "  hello   world  " | cat -e
hello world$
$> ./epur_str "  " | cat -e
$
$>`,descripcion:'Programa que limpia los espacios de un string: elimina espacios iniciales y finales, y colapsa múltiples espacios consecutivos a uno solo. "Epurer" = purificar en francés.',palacio:{habitacion:"dormitorio",mueble:"acordeon",personaje:"El Acordeón de Una Nota",emoji:"🎹",historia:`En el dormitorio hay un Acordeón especial que aplasta los espacios.
Le das una melodía (string) con silencios de diferentes longitudes (espacios múltiples).
El Acordeón los convierte todos a UN solo silencio (un espacio).
Además: si la melodía empieza o termina con silencio, los elimina.
Usa el flag k: k=1 "hay un espacio pendiente". Cuando llega el siguiente char no-espacio, escribe un espacio antes.`,anclas:["k=0 inicialmente (sin espacio pendiente)","si c==' ' && out.length>0: k=1 (espacio pendiente, pero no imprimir aún)","si c!=' ': si k=1, primero write(' '), k=0; luego write(c)","espacios iniciales: out vacío → k no se pone a 1 → se ignoran","espacios finales: k queda 1 al salir → nunca se escriben"]},herramientas:["strings"],formulaClave:{descripcion:"Flag k para espacio pendiente: escribirlo solo cuando llega el siguiente char real",formula:'for c: if c!=" " { if k: write(" "),k=0; write(c) } else if out>0: k=1',ejemplo:{entrada:'"  hello   world  "',calculo:'espacios iniciales→ignorados; hello→escrito; 3 spaces→k=1; world→" "+world; espacios finales→k pero no escrito',resultado:'"hello world"'}},versiones:[{id:"clasica",nombre:"Con flag k y write char a char",descripcion:'El algoritmo clásico del flag de "espacio pendiente". La más elegante.',recomendada:!0,codigo:`#include <unistd.h>

int	main(int argc, char **argv)
{
	int	i;
	int	k;

	if (argc == 2)
	{
		i = 0;
		k = 0;
		while (argv[1][i])
		{
			if (argv[1][i] != ' ')
			{
				if (k)
				{
					write(1, " ", 1);
					k = 0;
				}
				write(1, &argv[1][i], 1);
			}
			else if (argv[1][i - 1] && argv[1][i - 1] != ' ')
				k = 1;
			i++;
		}
	}
	write(1, "\\n", 1);
	return (0);
}`},{id:"flag_i",nombre:"Con flag started y flag space_pending",descripcion:'Separa "¿hemos empezado?" de "¿hay espacio pendiente?". Más explícita.',recomendada:!1,codigo:`#include <unistd.h>

int	main(int argc, char **argv)
{
	int	i;
	int	started;
	int	pending;

	if (argc == 2)
	{
		i = 0;
		started = 0;
		pending = 0;
		while (argv[1][i])
		{
			if (argv[1][i] != ' ')
			{
				if (started && pending)
					write(1, " ", 1);
				write(1, &argv[1][i], 1);
				started = 1;
				pending = 0;
			}
			else
				pending = 1;
			i++;
		}
	}
	write(1, "\\n", 1);
	return (0);
}`}],tests:[{id:"test_clasico",descripcion:'"  hello   world  " → "hello world"',entrada:["  hello   world  "],salida:`hello world
`,tipo:"normal"},{id:"test_solo_espacios",descripcion:'"   " → "" (solo espacios)',entrada:["   "],salida:`
`,tipo:"edge"},{id:"test_sin_espacios",descripcion:'"hello" → "hello" (sin espacios)',entrada:["hello"],salida:`hello
`,tipo:"normal"},{id:"test_leading",descripcion:'"  hello" → "hello" (solo leading spaces)',entrada:["  hello"],salida:`hello
`,tipo:"normal"},{id:"test_trailing",descripcion:'"hello  " → "hello" (solo trailing spaces)',entrada:["hello  "],salida:`hello
`,tipo:"normal"},{id:"test_multi_palabras",descripcion:'"a  b  c" → "a b c" (espacios entre palabras)',entrada:["a  b  c"],salida:`a b c
`,tipo:"normal"}],gdbSteps:[{paso:1,titulo:'"  hello" — espacios iniciales ignorados',codigo:`i=0: ' ', argv[-1] no existe o i=0 → condición else: ¿argv[1][i-1]...?
Mejor con la versión "pending":
  started=0, pending=0
  i=0: ' ' → pending=1
  i=1: ' ' → pending=1 (ya era 1)
  i=2: 'h' → started=0: NO escribe espacio; write('h'); started=1, pending=0`,variables:[{nombre:"started",valor:"1",cambio:!0,nota:""},{nombre:"pending",valor:"0",cambio:!0,nota:"← espacios iniciales ignorados"},{nombre:"salida",valor:'"h"',cambio:!0,nota:""}]},{paso:2,titulo:'"hello   world" — espacios medios colapsados',codigo:`tras "hello": started=1, pending=0
i=5,6,7: ' ' → pending=1 (cada espacio pone pending=1)
i=8: 'w': started=1 && pending=1 → write(' '); write('w'); pending=0
... → "hello w..."
Final: "hello world"`,variables:[{nombre:"pending",valor:"1 → 0",cambio:!0,nota:"← 3 spaces → 1 space"},{nombre:"salida",valor:'"hello world"',cambio:!0,nota:"✓"}]},{paso:3,titulo:'"world  " — espacios finales eliminados',codigo:`tras "world": pending=0
i=7,8: ' ' → pending=1
fin del string: bucle termina
pending=1 pero NO escribimos más → espacios finales eliminados
write("\\n")`,variables:[{nombre:"salida final",valor:'"hello world\\n"',cambio:!0,nota:"✓ sin trailing spaces"}]}],trampas:[{severidad:"mortal",titulo:"Escribir el espacio INMEDIATAMENTE al verlo, no al llegar al siguiente char",descripcion:"Si escribes el espacio en cuanto lo ves, los espacios finales se imprimen (no deberían). El trick es: guardar en k=1 que hay espacio pendiente, y escribirlo solo cuando llega el siguiente char no-espacio.",codigoMal:`// ❌ Escribe espacios inmediatamente
if (c == ' ')
    write(1, " ", 1);  // imprime espacios finales también`,codigoBien:`// ✅ Retrasa el espacio hasta el siguiente char real
if (c == ' ') k = 1;
else { if (k) { write(1, " ", 1); k = 0; } write(1, &c, 1); }`},{severidad:"mortal",titulo:"No evitar espacios iniciales: k=1 al primer espacio aunque out esté vacío",descripcion:"k debe ponerse a 1 solo si ya hemos escrito algo (out no vacío). Sin esta condición, los espacios iniciales se escribirían.",codigoMal:`// ❌ k=1 siempre → espacios iniciales se imprimirían
if (c == ' ') k = 1;
else { if (k) write(1, " ", 1); ... }`,codigoBien:`// ✅ Solo poner k=1 si ya hemos escrito algo
if (c == ' ' && started) k = 1;
// O en la versión clásica: else if (argv[1][i-1] && argv[1][i-1] != ' ') k = 1`}],bajoCelCapot:`epur_str = "épurer la chaîne" (purificar el string) en francés.
El flag k (o pending) es el corazón del algoritmo: retrasa la escritura del espacio.
Espacios iniciales: k nunca se activa porque no hay char previo real (started=0).
Espacios finales: k queda a 1 pero el bucle termina antes de escribirlo.
Múltiples espacios: solo el primer espacio activa k=1, los siguientes son redundantes.`,estrategia:"MEMORIZAR",razonEstrategia:'El truco del flag "espacio pendiente" es el patrón central. Sin haberlo visto, es difícil derivarlo. Con él, el algoritmo es elegante y corto.',relacionados:["expand_str","str_capitalizer","rstr_capitalizer"]},Rz={id:"expand_str",nombre:"expand_str",nivel:3,dificultad:"fácil",tipoEntrega:"programa",archivosEsperados:["expand_str.c"],funcionesPermitidas:["write"],subject:`Assignment name  : expand_str
Expected files   : expand_str.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that takes a string and displays it, replacing every blank
character by 3 spaces, and without any trailing spaces.

If the number of arguments is not 1, just display a newline.

Example:
$> ./expand_str "hello world" | cat -e
hello   world$
$> ./expand_str " hello " | cat -e
   hello$
$> ./expand_str "  " | cat -e
$
$>`,descripcion:"Programa que expande los espacios: cualquier grupo de espacios consecutivos se reemplaza por exactamente 3 espacios. Los espacios finales se eliminan. Similar a epur_str pero con 3 espacios en vez de 1.",palacio:{habitacion:"dormitorio",mueble:"persiana",personaje:"El Acordeón de Tres Notas",emoji:"📐",historia:`En el dormitorio hay una Persiana que expande los silencios.
Es el hermano mayor de epur_str: en vez de UN silencio, hace TRES.
Cualquier grupo de uno o más espacios → exactamente 3 espacios.
Pero los espacios al FINAL también los elimina (igual que epur_str).
El algoritmo es idéntico a epur_str pero escribe "   " en vez de " ".`,anclas:["k=0 inicialmente (sin grupo de espacios pendiente)","si c==' ': k=1 (hay un grupo de espacios pendiente)","si c!=' ': si k=1, write('   ') (3 espacios), k=0; luego write(c)","espacios iniciales: añade 3 espacios ANTES del primer char","espacios finales: k queda 1 pero no se escribe → eliminados"]},herramientas:["strings"],formulaClave:{descripcion:"Flag k: cada grupo de espacios → exactamente 3 espacios antes del siguiente char",formula:'for c: if c!=" " { if k: write("   "),k=0; write(c) } else: k=1',ejemplo:{entrada:'"hello world"',calculo:'hello→ok; " "→k=1; w→write("   ")+"w" → "hello   world"',resultado:'"hello   world"'}},versiones:[{id:"clasica",nombre:"Con flag k igual que epur_str pero con 3 espacios",descripcion:'Idéntica estructura a epur_str, solo cambia " " por "   ". La diferencia clave.',recomendada:!0,codigo:`#include <unistd.h>

int	main(int argc, char **argv)
{
	int	i;
	int	k;

	if (argc == 2)
	{
		i = 0;
		k = 0;
		while (argv[1][i])
		{
			if (argv[1][i] != ' ')
			{
				if (k)
				{
					write(1, "   ", 3);
					k = 0;
				}
				write(1, &argv[1][i], 1);
			}
			else
				k = 1;
			i++;
		}
	}
	write(1, "\\n", 1);
	return (0);
}`}],tests:[{id:"test_un_espacio",descripcion:'"hello world" → "hello   world" (1 espacio → 3)',entrada:["hello world"],salida:`hello   world
`,tipo:"normal"},{id:"test_multi_espacios",descripcion:'"hello  world" → "hello   world" (2 espacios → 3)',entrada:["hello  world"],salida:`hello   world
`,tipo:"normal"},{id:"test_leading",descripcion:'" hello" → "   hello" (espacio inicial → 3 espacios)',entrada:[" hello"],salida:`   hello
`,tipo:"normal"},{id:"test_trailing",descripcion:'"hello " → "hello" (espacio final eliminado)',entrada:["hello "],salida:`hello
`,tipo:"edge"},{id:"test_solo_espacios",descripcion:'"  " → "" (solo espacios → nada)',entrada:["  "],salida:`
`,tipo:"edge"},{id:"test_multi_inter",descripcion:'"a b c" → "a   b   c"',entrada:["a b c"],salida:`a   b   c
`,tipo:"normal"}],gdbSteps:[{paso:1,titulo:'"hello world": h,e,l,l,o normales; espacio → k=1',codigo:`k=0
i=0..4: 'h','e','l','l','o' → k=0, write cada char
i=5: ' ' → k=1
salida hasta ahora: "hello"`,variables:[{nombre:"k",valor:"1",cambio:!0,nota:"← espacio pendiente"},{nombre:"salida",valor:'"hello"',cambio:!1,nota:""}]},{paso:2,titulo:'i=6: "w" → k=1 → write("   ") antes de "w"',codigo:`i=6: 'w' != ' '
k=1 → write(1, "   ", 3)  ← los 3 espacios
k=0
write(1, "w", 1)
salida: "hello   w"`,variables:[{nombre:"k",valor:"0",cambio:!0,nota:""},{nombre:"salida",valor:'"hello   w"',cambio:!0,nota:"← 3 espacios exactos"}]},{paso:3,titulo:'"o","r","l","d" y fin: sin espacios al final',codigo:`i=7..10: 'o','r','l','d' → sin k → write directo
fin del string: k=0 (no hay espacios al final en este test)
write("\\n")
Salida final: "hello   world\\n"`,variables:[{nombre:"salida final",valor:'"hello   world\\n"',cambio:!0,nota:"✓"}]}],trampas:[{severidad:"mortal",titulo:"Reemplazar CADA espacio por 3 en vez de cada GRUPO por 3",descripcion:'Si "hello  world" (2 espacios), el resultado debe ser "hello   world" (3 espacios), NO "hello      world" (6 espacios = 2*3). Cada GRUPO de espacios se reemplaza por 3, sin importar cuántos haya.',codigoMal:`// ❌ Reemplaza cada espacio individual por 3
if (c == ' ')
    write(1, "   ", 3);  // "hello  world" → 6 spaces!`,codigoBien:`// ✅ Flag k: cualquier grupo de spaces → k=1 → 3 spaces una vez
if (c == ' ') k = 1;
else { if (k) { write(1, "   ", 3); k = 0; } write(1, &c, 1); }`},{severidad:"mortal",titulo:"Confundir con epur_str: escribir 1 espacio en vez de 3",descripcion:'epur_str escribe 1 espacio por grupo; expand_str escribe 3. La única diferencia es "   " vs " ".',codigoMal:`// ❌ epur_str, no expand_str
if (k) write(1, " ", 1);  // 1 espacio, no 3`,codigoBien:`// ✅ expand_str: siempre 3 espacios
if (k) write(1, "   ", 3);`},{severidad:"warning",titulo:"expand_str SÍ añade 3 espacios para espacios iniciales (a diferencia de epur_str)",descripcion:"En epur_str, los espacios iniciales se ignoran (no se imprime el espacio antes del primer char). En expand_str, si hay espacios iniciales, se imprimen 3 espacios antes del primer char.",codigoMal:`// ❌ Ignorar espacios iniciales como en epur_str
if (c == ' ' && started) k = 1;  // expand_str no tiene esta condición`,codigoBien:`// ✅ expand_str: k=1 para CUALQUIER espacio, incluyendo los iniciales
if (c == ' ') k = 1;  // sin condición "started"`}],bajoCelCapot:`expand_str es casi idéntico a epur_str con dos diferencias:
1. Escribe 3 espacios en vez de 1
2. Los espacios INICIALES también producen 3 espacios (k=1 sin condición "started")
Los espacios finales siguen eliminándose (k queda a 1 al salir del bucle → nunca se escribe).
El subject dice "every blank character" → cada char espacio activa k, pero un grupo solo produce 3.`,estrategia:"MEMORIZAR",razonEstrategia:'Una vez memorizado epur_str, expand_str es trivial: misma estructura, 3 espacios en vez de 1, y sin la condición "started" para espacios iniciales.',relacionados:["epur_str","str_capitalizer"]},Oz={id:"add_prime_sum",nombre:"add_prime_sum",nivel:3,dificultad:"medio",tipoEntrega:"programa",archivosEsperados:["add_prime_sum.c"],funcionesPermitidas:["write"],subject:`Assignment name  : add_prime_sum
Expected files   : add_prime_sum.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that takes a positive integer as argument and displays the
sum of all prime numbers up to and including it, followed by a newline.

If the number of arguments is not 1, or if the argument is not a positive
integer, just display 0 followed by a newline.

Example:
$> ./add_prime_sum 5 | cat -e
10$
$> ./add_prime_sum 7 | cat -e
17$
$> ./add_prime_sum 1 | cat -e
0$`,descripcion:"Programa que suma todos los números primos hasta N (inclusive). Requiere is_prime() con verificación hasta sqrt(n), y put_nbr para imprimir el resultado.",palacio:{habitacion:"dormitorio",mueble:"microscopio",personaje:"El Microscopio de Primos",emoji:"🔬",historia:`En el dormitorio hay un Microscopio que detecta números primos.
Le das un número N y el Microscopio examina cada número de 2 a N.
Para cada uno: ¿es primo? Si sí, lo añade a la suma.
La clave de is_prime: probar divisores solo hasta sqrt(n) — eficiencia crítica.
El 1 no es primo. El 2 sí es primo (el único par primo). Resultado: put_nbr(suma).`,anclas:["is_prime(n): probar i de 2 hasta i*i<=n","si n%i==0 → no es primo","if (n < 2) return 0  ← 0 y 1 no son primos","suma = 0; for i=2 to N: if is_prime(i) sum+=i","put_nbr(suma); write('\\n')"]},herramientas:["strings"],formulaClave:{descripcion:"is_prime hasta sqrt + suma acumulativa",formula:"is_prime(x): i=2; while i*i<=x: if x%i==0 return 0; i++ return 1",ejemplo:{entrada:"N=5",calculo:"2(primo)+3(primo)+4(no)+5(primo) = 10",resultado:"10"}},versiones:[{id:"clasica",nombre:"Con is_prime() auxiliar",descripcion:"Separa la verificación de primalidad. La más legible.",recomendada:!0,codigo:`#include <unistd.h>

static int	is_prime(int n)
{
	int	i;

	if (n < 2)
		return (0);
	i = 2;
	while (i * i <= n)
	{
		if (n % i == 0)
			return (0);
		i++;
	}
	return (1);
}

static void	put_nbr(unsigned long n)
{
	char	c;

	if (n >= 10)
		put_nbr(n / 10);
	c = '0' + n % 10;
	write(1, &c, 1);
}

int	main(int argc, char **argv)
{
	unsigned long	sum;
	int			n;
	int			i;

	if (argc != 2)
	{
		write(1, "0\\n", 2);
		return (0);
	}
	n = 0;
	i = 0;
	while (argv[1][i] >= '0' && argv[1][i] <= '9')
		n = n * 10 + (argv[1][i++] - '0');
	sum = 0;
	i = 2;
	while (i <= n)
	{
		if (is_prime(i))
			sum += i;
		i++;
	}
	put_nbr(sum);
	write(1, "\\n", 1);
	return (0);
}`}],tests:[{id:"test_5",descripcion:"N=5 → 10 (2+3+5)",entrada:["5"],salida:`10
`,tipo:"normal"},{id:"test_7",descripcion:"N=7 → 17 (2+3+5+7)",entrada:["7"],salida:`17
`,tipo:"normal"},{id:"test_1",descripcion:"N=1 → 0 (ningún primo ≤1)",entrada:["1"],salida:`0
`,tipo:"edge"},{id:"test_2",descripcion:"N=2 → 2 (solo el 2)",entrada:["2"],salida:`2
`,tipo:"edge"},{id:"test_10",descripcion:"N=10 → 17 (2+3+5+7)",entrada:["10"],salida:`17
`,tipo:"normal"},{id:"test_20",descripcion:"N=20 → 77 (2+3+5+7+11+13+17+19)",entrada:["20"],salida:`77
`,tipo:"normal"}],gdbSteps:[{paso:1,titulo:"N=5: is_prime para 2,3,4,5",codigo:`is_prime(2): i=2, i*i=4 > 2 → while FALSE → return 1 ✓ primo
is_prime(3): i=2, 4>3 → while FALSE → return 1 ✓ primo
is_prime(4): i=2, 4<=4 → 4%2=0 → return 0 ✗ no primo
is_prime(5): i=2, 4<=5 → 5%2=1; i=3, 9>5 → while FALSE → return 1 ✓ primo`,variables:[{nombre:"primos ≤5",valor:"[2, 3, 5]",cambio:!1,nota:""}]},{paso:2,titulo:"Sumar: 2+3+5=10",codigo:`sum = 0
i=2: is_prime(2)=1 → sum=2
i=3: is_prime(3)=1 → sum=5
i=4: is_prime(4)=0 → sum sin cambio
i=5: is_prime(5)=1 → sum=10
i=6: 6>5 → while FALSE`,variables:[{nombre:"sum",valor:"10",cambio:!0,nota:"← 2+3+5"}]},{paso:3,titulo:'put_nbr(10) → "10"',codigo:`put_nbr(10):
  10 >= 10 → put_nbr(1) → write('1')
  c = '0' + 10%10 = '0' → write('0')
write("\\n")
Salida: "10\\n"`,variables:[{nombre:"salida",valor:'"10\\n"',cambio:!0,nota:"✓"}]}],trampas:[{severidad:"mortal",titulo:"is_prime: probar hasta n/2 en vez de sqrt(n)",descripcion:"Probar hasta n/2 funciona pero es O(n) en vez de O(sqrt(n)). Para N grande, puede ser muy lento. El examen puede tener timeouts. Usar i*i<=n.",codigoMal:`// ❌ Hasta n/2 — correcto pero lento
while (i <= n / 2) { if (n % i == 0) return 0; i++; }`,codigoBien:`// ✅ Hasta sqrt(n) — eficiente
while (i * i <= n) { if (n % i == 0) return 0; i++; }`},{severidad:"mortal",titulo:"Considerar el 1 como primo",descripcion:"El 1 NO es primo por definición. is_prime(1) debe devolver 0. La condición if (n < 2) return 0 cubre este caso.",codigoMal:`// ❌ 1 considerado primo
int is_prime(int n) {
    int i = 2;
    while (i * i <= n)  // para n=1: i=2, 4>1 → FALSE → return 1!
        if (n % i++ == 0) return 0;
    return 1;  // is_prime(1) devuelve 1 — INCORRECTO
}`,codigoBien:`// ✅ Excluir 0 y 1 explícitamente
if (n < 2) return (0);  // 0 y 1 no son primos`},{severidad:"warning",titulo:"sum puede desbordar int para N grande",descripcion:"La suma de todos los primos hasta N crece rápidamente. Usar unsigned long para evitar overflow.",codigoMal:`// ⚠️ int puede desbordar para N grande
int sum = 0;`,codigoBien:`// ✅
unsigned long sum = 0;  // o long long`}],bajoCelCapot:`Un número n es primo si solo es divisible por 1 y por sí mismo.
Si n = a*b con a<=b, entonces a<=sqrt(n). Basta probar hasta sqrt(n).
Primos hasta 20: 2, 3, 5, 7, 11, 13, 17, 19 → suma=77.
El 2 es el único primo par. Todos los demás son impares.`,estrategia:"MEMORIZAR",razonEstrategia:"La función is_prime con i*i<=n es el patrón que hay que memorizar. También se usa en pgcd, lcm y fprime.",relacionados:["pgcd","lcm","fprime","tab_mult"]},Iz={id:"ft_range",nombre:"ft_range",nivel:3,dificultad:"medio",tipoEntrega:"funcion",archivosEsperados:["ft_range.c"],funcionesPermitidas:["malloc"],subject:`Assignment name  : ft_range
Expected files   : ft_range.c
Allowed functions: malloc
--------------------------------------------------------------------------------

Write a function that gets two int as parameters, the first is the beginning
of a range, and the second is its end.

The function creates and returns an array of all integers between min included
and max excluded, sorted in ascending order.

If min is greater than or equal to max, the function returns NULL.

int	*ft_range(int min, int max);

Example:
ft_range(1, 5) → [1, 2, 3, 4]  (4 elements)
ft_range(5, 5) → NULL
ft_range(5, 3) → NULL`,descripcion:"Función que crea con malloc un array de enteros desde min (inclusive) hasta max (exclusive), en orden ascendente. Si min >= max, devuelve NULL.",palacio:{habitacion:"dormitorio",mueble:"litera",personaje:"El Escalador de la Litera",emoji:"🪜",historia:`En el dormitorio hay una Litera y el Escalador sube peldaño a peldaño.
Le dices: "sube desde el peldaño min hasta el peldaño max (sin llegar)."
El Escalador primero reserva con malloc tantos peldaños como haya (max-min).
Luego los rellena de min a max-1, uno a uno.
Si min >= max: no hay donde subir → NULL.`,anclas:["if (min >= max) return NULL  ← sin rango → NULL","arr = malloc((max - min) * sizeof(int))  ← tamaño exacto","for i=0: arr[i] = min + i  ← rellenar ascendente","no hay '\\0' al final — es int[], no char[]","return arr  ← el caller es responsable del free()"]},herramientas:["strings"],formulaClave:{descripcion:"malloc(max-min)*sizeof(int) + rellenar de min a max-1",formula:"arr=malloc((max-min)*sizeof(int)); for i=0;i<max-min: arr[i]=min+i; return arr;",ejemplo:{entrada:"min=1, max=5",calculo:"malloc(4*4=16 bytes); arr[0]=1,arr[1]=2,arr[2]=3,arr[3]=4",resultado:"[1, 2, 3, 4]"}},versiones:[{id:"clasica",nombre:"Con índice y llenado secuencial",descripcion:"La más clara. malloc + bucle de llenado.",recomendada:!0,codigo:`#include <stdlib.h>

int	*ft_range(int min, int max)
{
	int	*arr;
	int	i;

	if (min >= max)
		return (NULL);
	arr = malloc((max - min) * sizeof(int));
	if (!arr)
		return (NULL);
	i = 0;
	while (i < max - min)
	{
		arr[i] = min + i;
		i++;
	}
	return (arr);
}`},{id:"puntero",nombre:"Con incremento de min",descripcion:"Usa min++ directamente en el bucle de llenado.",recomendada:!1,codigo:`#include <stdlib.h>

int	*ft_range(int min, int max)
{
	int	*arr;
	int	i;
	int	tmp;

	if (min >= max)
		return (NULL);
	arr = malloc((max - min) * sizeof(int));
	if (!arr)
		return (NULL);
	i = 0;
	tmp = min;
	while (tmp < max)
		arr[i++] = tmp++;
	return (arr);
}`}],tests:[{id:"test_1_5",descripcion:"ft_range(1,5) → [1,2,3,4]",entrada:["1","5"],salida:`1
2
3
4
`,tipo:"normal"},{id:"test_0_3",descripcion:"ft_range(0,3) → [0,1,2]",entrada:["0","3"],salida:`0
1
2
`,tipo:"normal"},{id:"test_neg",descripcion:"ft_range(-2,2) → [-2,-1,0,1]",entrada:["-2","2"],salida:`-2
-1
0
1
`,tipo:"normal"},{id:"test_igual",descripcion:"ft_range(5,5) → NULL",entrada:["5","5"],salida:`
`,tipo:"edge"},{id:"test_inv",descripcion:"ft_range(5,3) → NULL (min>max)",entrada:["5","3"],salida:`
`,tipo:"edge"}],gdbSteps:[{paso:1,titulo:"ft_range(1, 5): validación y malloc",codigo:`min=1, max=5
min >= max? 1>=5 → FALSE → continúa
arr = malloc((5-1) * sizeof(int)) = malloc(16 bytes)
if (!arr) → FALSE (malloc OK)`,variables:[{nombre:"tamaño",valor:"(5-1)*4 = 16 bytes",cambio:!1,nota:"← 4 elementos de 4 bytes"},{nombre:"arr",valor:"0x... (bloque heap)",cambio:!0,nota:""}]},{paso:2,titulo:"Relleno: arr[0]=1, arr[1]=2, ...",codigo:`i=0: arr[0] = 1 + 0 = 1
i=1: arr[1] = 1 + 1 = 2
i=2: arr[2] = 1 + 2 = 3
i=3: arr[3] = 1 + 3 = 4
i=4: 4 < max-min=4 → FALSE → sale`,variables:[{nombre:"arr",valor:"[1, 2, 3, 4]",cambio:!0,nota:"✓"}]},{paso:3,titulo:"return arr",codigo:`return arr
// El caller puede iterar: for (i=0; i<max-min; i++) printf("%d\\n", arr[i]);
// No hay '\\0' — el caller debe saber el tamaño (max-min)`,variables:[{nombre:"retorno",valor:"ptr a [1,2,3,4]",cambio:!0,nota:"✓"}]}],trampas:[{severidad:"mortal",titulo:"malloc((max-min+1)*sizeof(int)) — +1 innecesario",descripcion:"ft_range excluye max. ft_range(1,5) tiene 4 elementos (1,2,3,4), NO 5. El tamaño es (max-min), no (max-min+1). El +1 sería correcto si max fuera inclusive.",codigoMal:`// ❌ +1 innecesario — reserva un int extra
arr = malloc((max - min + 1) * sizeof(int));  // ft_range(1,5) → 5 ints en vez de 4`,codigoBien:`// ✅ max excluido → tamaño exacto
arr = malloc((max - min) * sizeof(int));  // ft_range(1,5) → 4 ints`},{severidad:"mortal",titulo:"No verificar if (!arr) después de malloc",descripcion:"malloc puede devolver NULL si no hay memoria. Si no se verifica, el acceso a arr[i] causará segfault.",codigoMal:`// ❌ Sin check
arr = malloc((max - min) * sizeof(int));
arr[0] = min;  // crash si malloc falló`,codigoBien:`// ✅
arr = malloc((max - min) * sizeof(int));
if (!arr) return (NULL);`},{severidad:"warning",titulo:"No usar sizeof(int) — hardcodear 4",descripcion:"sizeof(int) es portable (puede ser 4 u 8 bytes según la plataforma). Hardcodear 4 funciona en la mayoría de plataformas pero no es correcto.",codigoMal:`// ⚠️ Hardcodeado
arr = malloc((max - min) * 4);`,codigoBien:`// ✅ Portable
arr = malloc((max - min) * sizeof(int));`}],bajoCelCapot:`ft_range(min, max) crea [min, min+1, ..., max-1] — max EXCLUIDO.
El array tiene (max-min) elementos. No tiene terminador NULL (es int[], no char[]).
El caller debe conocer el tamaño para iterar: for (i=0; i<max-min; i++).
Memoria: malloc en el heap → el caller debe hacer free(arr) cuando termine.`,estrategia:"MEMORIZAR",razonEstrategia:"El patrón malloc+fill es el prototipo de todas las funciones que crean arrays dinámicos. max excluido (tamaño=max-min) es la trampa principal.",relacionados:["ft_rrange","ft_strdup","ft_split"]},Dz={id:"ft_rrange",nombre:"ft_rrange",nivel:3,dificultad:"medio",tipoEntrega:"funcion",archivosEsperados:["ft_rrange.c"],funcionesPermitidas:["malloc"],subject:`Assignment name  : ft_rrange
Expected files   : ft_rrange.c
Allowed functions: malloc
--------------------------------------------------------------------------------

Write a function that gets two int as parameters, the first is the beginning
of a range, and the second is its end.

The function creates and returns an array of all integers between min included
and max excluded, sorted in descending order.

If min is greater than or equal to max, the function returns NULL.

int	*ft_rrange(int min, int max);

Example:
ft_rrange(1, 5) → [4, 3, 2, 1]  (4 elements, reversed)
ft_rrange(5, 5) → NULL`,descripcion:"Función idéntica a ft_range pero el array retornado está en orden DESCENDENTE (de max-1 a min). El hermano inverso de ft_range.",palacio:{habitacion:"dormitorio",mueble:"escalera",personaje:"El Escalador al Revés",emoji:"🪜",historia:`En el dormitorio hay otra Escalera, pero esta baja en vez de subir.
El Escalador al Revés hace lo mismo que ft_range, pero rellena el array al revés.
Tiene dos opciones: empezar desde max-1 y bajar, o rellenar desde el final del array.
La más sencilla: arr[i] = max - 1 - i (el primer elemento es max-1, el último es min).
Mismo malloc, misma estructura, solo cambia la fórmula de llenado.`,anclas:["if (min >= max) return NULL  ← igual que ft_range","malloc((max - min) * sizeof(int))  ← igual que ft_range","arr[i] = max - 1 - i  ← descendente (primer elem = max-1)","o: tmp=max-1; while tmp>=min: arr[i++]=tmp--","return arr"]},herramientas:["strings"],formulaClave:{descripcion:"Igual que ft_range pero arr[i] = max-1-i (descendente)",formula:"arr=malloc((max-min)*sizeof(int)); for i=0;i<max-min: arr[i]=max-1-i; return arr;",ejemplo:{entrada:"min=1, max=5",calculo:"malloc(4 ints); arr[0]=4,arr[1]=3,arr[2]=2,arr[3]=1",resultado:"[4, 3, 2, 1]"}},versiones:[{id:"formula",nombre:"Con fórmula arr[i] = max-1-i",descripcion:"La más limpia. El índice i mapea directamente al valor descendente.",recomendada:!0,codigo:`#include <stdlib.h>

int	*ft_rrange(int min, int max)
{
	int	*arr;
	int	i;

	if (min >= max)
		return (NULL);
	arr = malloc((max - min) * sizeof(int));
	if (!arr)
		return (NULL);
	i = 0;
	while (i < max - min)
	{
		arr[i] = max - 1 - i;
		i++;
	}
	return (arr);
}`},{id:"decremento",nombre:"Con tmp=max-1 decrementando",descripcion:"Usa una variable temporal que empieza en max-1 y decrementa.",recomendada:!1,codigo:`#include <stdlib.h>

int	*ft_rrange(int min, int max)
{
	int	*arr;
	int	i;
	int	tmp;

	if (min >= max)
		return (NULL);
	arr = malloc((max - min) * sizeof(int));
	if (!arr)
		return (NULL);
	i = 0;
	tmp = max - 1;
	while (tmp >= min)
		arr[i++] = tmp--;
	return (arr);
}`}],tests:[{id:"test_1_5",descripcion:"ft_rrange(1,5) → [4,3,2,1]",entrada:["1","5"],salida:`4
3
2
1
`,tipo:"normal"},{id:"test_0_3",descripcion:"ft_rrange(0,3) → [2,1,0]",entrada:["0","3"],salida:`2
1
0
`,tipo:"normal"},{id:"test_neg",descripcion:"ft_rrange(-2,2) → [1,0,-1,-2]",entrada:["-2","2"],salida:`1
0
-1
-2
`,tipo:"normal"},{id:"test_igual",descripcion:"ft_rrange(5,5) → NULL",entrada:["5","5"],salida:`
`,tipo:"edge"},{id:"test_inv",descripcion:"ft_rrange(5,3) → NULL (min>max)",entrada:["5","3"],salida:`
`,tipo:"edge"}],gdbSteps:[{paso:1,titulo:"ft_rrange(1, 5): malloc 4 ints",codigo:`min=1, max=5
1 >= 5 → FALSE → continúa
arr = malloc(4 * sizeof(int)) = malloc(16 bytes)`,variables:[{nombre:"arr",valor:"bloque de 16 bytes",cambio:!0,nota:""}]},{paso:2,titulo:"Relleno descendente: arr[i] = max-1-i",codigo:`i=0: arr[0] = 5-1-0 = 4
i=1: arr[1] = 5-1-1 = 3
i=2: arr[2] = 5-1-2 = 2
i=3: arr[3] = 5-1-3 = 1
i=4: 4 < 4 → FALSE → sale`,variables:[{nombre:"arr",valor:"[4, 3, 2, 1]",cambio:!0,nota:"← descendente ✓"}]}],trampas:[{severidad:"mortal",titulo:"Confundir ft_range con ft_rrange — rellenar ascendente en vez de descendente",descripcion:"ft_rrange devuelve el array en orden DESCENDENTE. El primer elemento es max-1, el último es min.",codigoMal:`// ❌ Orden ascendente — es ft_range, no ft_rrange
arr[i] = min + i;  // ft_rrange(1,5) → [1,2,3,4] incorrecto`,codigoBien:`// ✅ Orden descendente
arr[i] = max - 1 - i;  // ft_rrange(1,5) → [4,3,2,1]`},{severidad:"warning",titulo:"tmp-- llega a min-1 en la versión con decremento",descripcion:"En la versión con tmp, el while debe ser tmp >= min, no tmp > min. Si fuera tmp > min, el valor mínimo (min) no se incluiría.",codigoMal:`// ❌ Excluye min — pierde el último elemento
while (tmp > min)   // tmp=max-1 hasta tmp=min+1, sin min`,codigoBien:`// ✅ Incluye min
while (tmp >= min)  // tmp=max-1 hasta tmp=min`}],bajoCelCapot:`ft_rrange(1,5) = [4,3,2,1] = ft_range(1,5) invertido.
La fórmula arr[i] = max-1-i es la forma más elegante: i=0 → max-1, i=max-min-1 → min.
Internamente idéntico a ft_range excepto en la fórmula de relleno.
El caller no puede distinguir entre ft_range y ft_rrange solo mirando la memoria — solo el orden importa.`,estrategia:"MEMORIZAR",razonEstrategia:"Una vez memorizado ft_range, ft_rrange es trivial: cambiar arr[i]=min+i por arr[i]=max-1-i.",relacionados:["ft_range","ft_strrev","ft_split"]},Fz={id:"ft_list_size",nombre:"ft_list_size",nivel:3,dificultad:"medio",tipoEntrega:"funcion",archivosEsperados:["ft_list_size.c"],funcionesPermitidas:[],subject:`Assignment name  : ft_list_size
Expected files   : ft_list_size.c
Allowed functions: none
--------------------------------------------------------------------------------

Write a function that returns the number of elements in a linked list.

The structure t_list is defined in the ft_list.h header file as follows:

typedef struct s_list
{
  struct s_list  *next;
  void           *data;
}                t_list;

int	ft_list_size(t_list *begin_list);

Example:
ft_list_size(NULL)         → 0
ft_list_size(a→b→c→NULL) → 3`,descripcion:"Función que cuenta los elementos de una lista enlazada simple. Recorre la lista siguiendo el puntero next hasta llegar a NULL, incrementando el contador en cada nodo.",palacio:{habitacion:"dormitorio",mueble:"bicicleta",personaje:"El Ciclista de la Cadena",emoji:"🔗",historia:`En el dormitorio hay una Bicicleta con una cadena de eslabones (nodos).
El Ciclista recorre la cadena eslabón a eslabón (nodo a nodo).
En cada eslabón: count++. Cuando llega al fin de la cadena (NULL): para.
Si la cadena está vacía (NULL desde el principio): count=0, devuelve 0.
La struct t_list tiene: next (puntero al siguiente) y data (el contenido).`,anclas:["count = 0  ← inicializar contador","while (begin_list): count++; begin_list=begin_list->next","cuando begin_list==NULL → sale del while","return count  ← número de nodos","si lista vacía (NULL): while no entra → return 0"]},herramientas:["strings"],formulaClave:{descripcion:"Recorrer la lista con while(node): count++; node=node->next",formula:"count=0; while(begin_list){ count++; begin_list=begin_list->next; } return count;",ejemplo:{entrada:"lista: a→b→c→NULL",calculo:"a:count=1; b:count=2; c:count=3; NULL→para",resultado:"3"}},versiones:[{id:"clasica",nombre:"Iterativa con while",descripcion:"La más clara. Avanza nodo a nodo hasta NULL.",recomendada:!0,codigo:`int	ft_list_size(t_list *begin_list)
{
	int	count;

	count = 0;
	while (begin_list)
	{
		count++;
		begin_list = begin_list->next;
	}
	return (count);
}`},{id:"recursiva",nombre:"Recursiva",descripcion:"Recursión: 1 + ft_list_size(next). Elegante pero con stack depth.",recomendada:!1,codigo:`int	ft_list_size(t_list *begin_list)
{
	if (!begin_list)
		return (0);
	return (1 + ft_list_size(begin_list->next));
}`}],tests:[{id:"test_tres",descripcion:"Lista de 3 elementos → 3",entrada:["a","b","c"],salida:`3
`,tipo:"normal"},{id:"test_uno",descripcion:"Lista de 1 elemento → 1",entrada:["x"],salida:`1
`,tipo:"normal"},{id:"test_cinco",descripcion:"Lista de 5 elementos → 5",entrada:["1","2","3","4","5"],salida:`5
`,tipo:"normal"},{id:"test_vacia",descripcion:"Lista vacía (NULL) → 0",entrada:[],salida:`0
`,tipo:"edge"}],gdbSteps:[{paso:1,titulo:"Lista: a→b→c→NULL, count=0",codigo:`begin_list = &a (nodo A)
count = 0`,variables:[{nombre:"begin_list",valor:"&a (no NULL)",cambio:!1,nota:""},{nombre:"count",valor:"0",cambio:!1,nota:""}]},{paso:2,titulo:"Recorrer nodo a nodo",codigo:`Iter 1: begin_list=&a → count=1; begin_list=a->next=&b
Iter 2: begin_list=&b → count=2; begin_list=b->next=&c
Iter 3: begin_list=&c → count=3; begin_list=c->next=NULL
while(NULL) → FALSE → sale`,variables:[{nombre:"count",valor:"3",cambio:!0,nota:"← 3 nodos recorridos"},{nombre:"begin_list",valor:"NULL",cambio:!0,nota:"← fin de lista"}]},{paso:3,titulo:"return 3",codigo:"return (3)",variables:[{nombre:"retorno",valor:"3",cambio:!0,nota:"✓"}]}],trampas:[{severidad:"mortal",titulo:"Usar begin_list->data en vez de begin_list->next para avanzar",descripcion:"Para avanzar al siguiente nodo hay que usar begin_list->next (puntero al nodo siguiente). begin_list->data es el contenido del nodo actual.",codigoMal:`// ❌ data no es el siguiente nodo
begin_list = (t_list *)begin_list->data;  // UB — data no es un t_list*`,codigoBien:`// ✅
begin_list = begin_list->next;  // salta al siguiente nodo`},{severidad:"warning",titulo:"No incluir ft_list.h o no declarar t_list",descripcion:"La struct t_list está definida en ft_list.h. Sin el include, el compilador no conoce el tipo.",codigoMal:`// ❌ Sin include → error: unknown type 't_list'
int ft_list_size(t_list *begin_list) { ... }`,codigoBien:`// ✅ Incluir la definición
#include "ft_list.h"
int ft_list_size(t_list *begin_list) { ... }`}],bajoCelCapot:`Una lista enlazada simple: cada nodo tiene data (contenido) y next (puntero al siguiente).
El último nodo apunta a NULL (centinela del fin).
ft_list_size es O(n) — hay que visitar cada nodo.
La versión recursiva es más elegante pero puede hacer stack overflow para listas muy largas.`,estrategia:"MEMORIZAR",razonEstrategia:"ft_list_size es el ejercicio introductorio a listas enlazadas. Su patrón while(node){count++;node=node->next} se repite en sort_list y otros ejercicios con t_list.",relacionados:["sort_list","ft_range","ft_rrange"]},Bz={id:"hidenp",nombre:"hidenp",nivel:3,dificultad:"medio",tipoEntrega:"programa",archivosEsperados:["hidenp.c"],funcionesPermitidas:["write"],subject:`Assignment name  : hidenp
Expected files   : hidenp.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that takes two strings and checks whether the characters of
the second string are "hidden" in the first string (i.e., appear in the same
order as a subsequence).

Display '1' followed by a newline if they are, '0' followed by a newline if
they are not.

If the number of arguments is not 2, display a newline.

Example:
$> ./hidenp "foobar" "bar" | cat -e
1$
$> ./hidenp "foobar" "rab" | cat -e
0$
$> ./hidenp "hello" "heo" | cat -e
1$`,descripcion:'Programa que verifica si s2 es una subsecuencia de s1 (los chars de s2 aparecen en s1 en el mismo orden). Imprime "1\\n" si sí, "0\\n" si no. Similar a wdmatch pero imprime 1/0 en vez de s2/vacío.',palacio:{habitacion:"dormitorio",mueble:"lupa",personaje:"La Lupa del Detective",emoji:"🔎",historia:`En el dormitorio hay una Lupa poderosa que detecta patrones ocultos.
Le das dos strings: la pista maestra (s1) y el patrón secreto (s2).
La Lupa busca si s2 está "escondido" en s1 como subsecuencia.
Si todos los chars de s2 aparecen en s1 en orden → imprime '1'.
Si alguno falta o está fuera de orden → imprime '0'.
(Mismo algoritmo que wdmatch, pero salida 1/0 en vez de s2/vacío.)`,anclas:["i recorre s1, j recorre s2","si s1[i]==s2[j]: j++ (encontramos un char de s2)","i++ siempre (recorre s1 completo)","si argv[2][j]=='\\0' al final: '1'","si s1 acaba antes que s2: '0'"]},herramientas:["strings"],formulaClave:{descripcion:"Dos índices: i en s1 (siempre avanza), j en s2 (solo en match)",formula:'while(s1[i]&&s2[j]){ if(s1[i]==s2[j])j++; i++; } write(s2[j]?"0":"1");',ejemplo:{entrada:'s1="foobar", s2="bar"',calculo:'f≠b,o≠b,o≠b,b==b(j=1),a==a(j=2),r==r(j=3); s2[3]=\\0 → "1"',resultado:'"1"'}},versiones:[{id:"clasica",nombre:"Con dos índices i y j",descripcion:'Idéntica estructura a wdmatch. Solo cambia la salida: "1" o "0" en vez de s2 o vacío.',recomendada:!0,codigo:`#include <unistd.h>

int	main(int argc, char **argv)
{
	int	i;
	int	j;
	char	c;

	if (argc == 3)
	{
		i = 0;
		j = 0;
		while (argv[1][i] && argv[2][j])
		{
			if (argv[1][i] == argv[2][j])
				j++;
			i++;
		}
		c = (argv[2][j] == '\\0') ? '1' : '0';
		write(1, &c, 1);
		write(1, "\\n", 1);
		return (0);
	}
	write(1, "\\n", 1);
	return (0);
}`}],tests:[{id:"test_bar",descripcion:'"foobar","bar" → 1 (bar es subsecuencia)',entrada:["foobar","bar"],salida:`1
`,tipo:"normal"},{id:"test_rab",descripcion:'"foobar","rab" → 0 (no subsecuencia)',entrada:["foobar","rab"],salida:`0
`,tipo:"normal"},{id:"test_heo",descripcion:'"hello","heo" → 1 (h,e,o en orden)',entrada:["hello","heo"],salida:`1
`,tipo:"normal"},{id:"test_xyz",descripcion:'"hello","xyz" → 0 (ninguno encontrado)',entrada:["hello","xyz"],salida:`0
`,tipo:"normal"},{id:"test_s2_largo",descripcion:'"ab","abc" → 0 (s2 más largo que s1)',entrada:["ab","abc"],salida:`0
`,tipo:"edge"},{id:"test_vacio_s2",descripcion:'"hello","" → 1 (vacío es subsecuencia de todo)',entrada:["hello",""],salida:`1
`,tipo:"edge"}],gdbSteps:[{paso:1,titulo:'s1="foobar",s2="bar": buscar "bar" en "foobar"',codigo:`i=0,j=0: 'f'!='b' → i=1
i=1,j=0: 'o'!='b' → i=2
i=2,j=0: 'o'!='b' → i=3
i=3,j=0: 'b'=='b' → j=1, i=4
i=4,j=1: 'a'=='a' → j=2, i=5
i=5,j=2: 'r'=='r' → j=3, i=6
s1[6]='\\0' → while FALSE
s2[3]='\\0' → c='1'`,variables:[{nombre:"j",valor:"3 (= s2.length)",cambio:!0,nota:"← todos encontrados"},{nombre:"c",valor:"'1'",cambio:!0,nota:"✓"}]},{paso:2,titulo:'s1="foobar",s2="rab": "r" no encontrado a tiempo',codigo:`i=0..4: f,o,o,b,a → j=0 (no hay 'r' antes de pos 5)
i=5,j=0: 'r'=='r' → j=1, i=6
s1[6]='\\0' → while FALSE
s2[1]='a' ≠ '\\0' → c='0'`,variables:[{nombre:"j",valor:"1 ≠ s2.length(3)",cambio:!0,nota:"← no encontrado"},{nombre:"c",valor:"'0'",cambio:!0,nota:""}]}],trampas:[{severidad:"mortal",titulo:'Confundir hidenp con wdmatch: imprimir s2 en vez de "1"',descripcion:'wdmatch imprime s2 si encontrado, "" si no. hidenp imprime "1" o "0". Misma lógica, diferente salida.',codigoMal:`// ❌ Salida de wdmatch, no de hidenp
if (!argv[2][j]) {
    i = 0;
    while (argv[2][i]) write(1, &argv[2][i++], 1);
}`,codigoBien:`// ✅ Salida de hidenp: '1' o '0'
c = (argv[2][j] == '\\0') ? '1' : '0';
write(1, &c, 1);`},{severidad:"warning",titulo:'Caso s2 vacío: j=0=s2.length → resultado es "1"',descripcion:'Si s2="" (vacío), j empieza en 0 y s2.length=0 → inmediatamente j==s2.length → "1". Un string vacío es subsecuencia de cualquier string.',codigoMal:`// ❌ Caso especial innecesario
if (!argv[2][0]) { write("0\\n", ...); }`,codigoBien:`// ✅ El algoritmo general ya maneja este caso
// s2="": j=0, s2[0]='\\0' → while no entra → s2[j]='\\0' → "1"`}],bajoCelCapot:`hidenp = "hidden n in p" o similar — verificación de subsecuencia.
La diferencia con wdmatch: solo el OUTPUT difiere. El algoritmo es idéntico.
wdmatch: "bar" → imprime "bar\\n"; "rab" → imprime "\\n".
hidenp: "bar" → imprime "1\\n"; "rab" → imprime "0\\n".
Una subsecuencia mantiene el orden pero no requiere contigüidad.`,estrategia:"MEMORIZAR",razonEstrategia:"Memorizar wdmatch implica saber hidenp: mismo algoritmo, distinto output. Recordar la diferencia: wdmatch imprime s2, hidenp imprime 1/0.",relacionados:["wdmatch","inter","ft_strcspn"]},Uz={id:"lcm",nombre:"lcm",nivel:3,dificultad:"medio",tipoEntrega:"funcion",archivosEsperados:["lcm.c"],funcionesPermitidas:[],subject:`Assignment name  : lcm
Expected files   : lcm.c
Allowed functions: none
--------------------------------------------------------------------------------

Write a function that takes two unsigned int as parameters and returns the
smallest unsigned int divisible by both.

unsigned int	lcm(unsigned int a, unsigned int b);

Example:
lcm(4, 6)   → 12
lcm(2, 3)   → 6
lcm(3, 3)   → 3
lcm(0, 5)   → 0`,descripcion:"Función que calcula el Mínimo Común Múltiplo (MCM). Usa la relación lcm(a,b) = a/gcd(a,b)*b para evitar overflow. Necesita implementar gcd (algoritmo de Euclides).",palacio:{habitacion:"dormitorio",mueble:"reloj",personaje:"El Reloj de los Engranes",emoji:"⚙️",historia:`En el dormitorio hay un Reloj con dos engranes (a y b).
El Reloj busca el primer momento en que ambos engranes se sincronizan de nuevo.
Para calcular lcm, usa el truco matemático: lcm(a,b) = a/gcd(a,b) * b.
Primero calcula el GCD (Máximo Común Divisor) con el algoritmo de Euclides.
Luego divide a entre el GCD antes de multiplicar para evitar overflow.`,anclas:["lcm(a,b) = a / gcd(a,b) * b  ← fórmula clave","gcd usa el algoritmo de Euclides: while b: tmp=b; b=a%b; a=tmp","if (a==0 || b==0) return 0  ← caso especial","dividir ANTES de multiplicar: a/gcd * b (no a*b/gcd — overflow!)","unsigned int → sin negativos"]},herramientas:["strings"],formulaClave:{descripcion:"lcm(a,b) = a / gcd(a,b) * b — divide primero para evitar overflow",formula:"gcd(x,y): while(y){tmp=y;y=x%y;x=tmp;} return x; lcm: return a/gcd(a,b)*b;",ejemplo:{entrada:"a=4, b=6",calculo:"gcd(4,6): gcd(6,4)→gcd(4,2)→gcd(2,0)=2; lcm=4/2*6=12",resultado:"12"}},versiones:[{id:"clasica",nombre:"Con gcd auxiliar iterativo",descripcion:"gcd con while loop (Euclides iterativo). La más eficiente.",recomendada:!0,codigo:`static unsigned int	gcd(unsigned int a, unsigned int b)
{
	unsigned int	tmp;

	while (b)
	{
		tmp = b;
		b = a % b;
		a = tmp;
	}
	return (a);
}

unsigned int	lcm(unsigned int a, unsigned int b)
{
	if (a == 0 || b == 0)
		return (0);
	return (a / gcd(a, b) * b);
}`},{id:"recursivo",nombre:"Con gcd recursivo",descripcion:"gcd recursivo. Más compacto, misma complejidad.",recomendada:!1,codigo:`static unsigned int	gcd(unsigned int a, unsigned int b)
{
	if (b == 0)
		return (a);
	return (gcd(b, a % b));
}

unsigned int	lcm(unsigned int a, unsigned int b)
{
	if (a == 0 || b == 0)
		return (0);
	return (a / gcd(a, b) * b);
}`}],tests:[{id:"test_4_6",descripcion:"lcm(4,6) → 12",entrada:["4","6"],salida:`12
`,tipo:"normal"},{id:"test_2_3",descripcion:"lcm(2,3) → 6",entrada:["2","3"],salida:`6
`,tipo:"normal"},{id:"test_3_3",descripcion:"lcm(3,3) → 3 (mismos)",entrada:["3","3"],salida:`3
`,tipo:"normal"},{id:"test_0_5",descripcion:"lcm(0,5) → 0 (caso especial)",entrada:["0","5"],salida:`0
`,tipo:"edge"},{id:"test_12_8",descripcion:"lcm(12,8) → 24",entrada:["12","8"],salida:`24
`,tipo:"normal"},{id:"test_1_n",descripcion:"lcm(1,7) → 7",entrada:["1","7"],salida:`7
`,tipo:"normal"}],gdbSteps:[{paso:1,titulo:"lcm(4,6): calcular gcd(4,6)",codigo:`gcd(4, 6):
  iter 1: b=6 → tmp=6, b=4%6=4, a=6 → gcd(6,4)
  iter 2: b=4 → tmp=4, b=6%4=2, a=4 → gcd(4,2)
  iter 3: b=2 → tmp=2, b=4%2=0, a=2 → gcd(2,0)
  iter 4: b=0 → while FALSE → return a=2
gcd(4,6) = 2`,variables:[{nombre:"gcd(4,6)",valor:"2",cambio:!0,nota:"← Máximo Común Divisor"}]},{paso:2,titulo:"lcm = a/gcd * b = 4/2 * 6",codigo:`a=4, b=6, gcd=2
lcm = 4 / 2 * 6
    = 2 * 6
    = 12
return 12`,variables:[{nombre:"lcm(4,6)",valor:"12",cambio:!0,nota:"✓ mínimo múltiplo común"}]}],trampas:[{severidad:"mortal",titulo:"Calcular a*b/gcd en vez de a/gcd*b → overflow",descripcion:"a*b puede desbordar unsigned int antes de dividir por gcd. Dividir primero: a/gcd*b es seguro porque a/gcd es siempre entero (gcd divide a a).",codigoMal:`// ❌ Posible overflow con a*b
return (a * b / gcd(a, b));  // si a=65536, b=65536 → overflow`,codigoBien:`// ✅ Dividir primero — sin overflow
return (a / gcd(a, b) * b);  // a/gcd es exacto (gcd|a)`},{severidad:"mortal",titulo:"No manejar el caso a=0 o b=0",descripcion:"lcm(0, n) = 0 matemáticamente. Sin esta verificación, gcd(0, n) podría causar división por cero o comportamiento indefinido.",codigoMal:`// ❌ Sin caso especial para 0
return (a / gcd(a, b) * b);  // si gcd(0, b) = b, a/b puede ser 0 o error`,codigoBien:`// ✅
if (a == 0 || b == 0) return (0);
return (a / gcd(a, b) * b);`}],bajoCelCapot:`lcm (Least Common Multiple) = mínimo múltiplo común.
lcm(4,6)=12 porque 12 = 4*3 = 6*2 → divisible por ambos.
La relación lcm(a,b) * gcd(a,b) = a * b es el fundamento matemático.
El algoritmo de Euclides: gcd(a,b) = gcd(b, a%b). Se detiene cuando b=0.`,estrategia:"MEMORIZAR",razonEstrategia:"La fórmula lcm=a/gcd*b y el algoritmo de Euclides son dos conceptos que hay que memorizar juntos. Son la base de pgcd, lcm y muchos algoritmos matemáticos.",relacionados:["pgcd","add_prime_sum","fprime"]},Vz={id:"pgcd",nombre:"pgcd",nivel:3,dificultad:"medio",tipoEntrega:"funcion",archivosEsperados:["pgcd.c"],funcionesPermitidas:[],subject:`Assignment name  : pgcd
Expected files   : pgcd.c
Allowed functions: none
--------------------------------------------------------------------------------

Write a function that takes two unsigned int as parameters and returns their
greatest common divisor (GCD), using the Euclidean algorithm.

unsigned int	pgcd(unsigned int a, unsigned int b);

Example:
pgcd(3, 6)   → 3
pgcd(4, 6)   → 2
pgcd(17, 13) → 1  (coprimes)
pgcd(0, 5)   → 5`,descripcion:'Función que calcula el Máximo Común Divisor (MCD/GCD). PGCD = "Plus Grand Commun Diviseur" en francés. Usa el algoritmo de Euclides: pgcd(a,b) = pgcd(b, a%b) hasta b=0.',palacio:{habitacion:"dormitorio",mueble:"tijeras",personaje:"Las Tijeras de Euclides",emoji:"✂️",historia:`En el dormitorio hay unas Tijeras que cortan hasta encontrar la medida común.
El algoritmo de Euclides: ¿cuánto queda de a cuando lo divides por b?
Si el resto es 0: b es el GCD. Si no: repite con (b, a%b).
pgcd(3,6): ¿cuánto queda 3/6? → resto=3. Ahora pgcd(6,3): resto=0 → GCD=3.
Es el fundamento de lcm y muchos algoritmos de criptografía.`,anclas:["while (b): tmp=b; b=a%b; a=tmp  ← Euclides iterativo","cuando b=0: return a  ← a ES el GCD","pgcd(a,0) = a  ← caso base","pgcd(0,b) = b  ← caso especial (el while se ejecuta una vez)","el orden no importa: pgcd(a,b) = pgcd(b,a)"]},herramientas:["strings"],formulaClave:{descripcion:"Algoritmo de Euclides: reemplazar (a,b) por (b, a%b) hasta b=0",formula:"while(b){ tmp=b; b=a%b; a=tmp; } return a;",ejemplo:{entrada:"pgcd(4,6)",calculo:"(4,6)→(6,4)→(4,2)→(2,0) → return 2",resultado:"2"}},versiones:[{id:"iterativo",nombre:"Iterativo con while (Euclides)",descripcion:"La versión clásica. Más eficiente en memoria que la recursiva.",recomendada:!0,codigo:`unsigned int	pgcd(unsigned int a, unsigned int b)
{
	unsigned int	tmp;

	while (b)
	{
		tmp = b;
		b = a % b;
		a = tmp;
	}
	return (a);
}`},{id:"recursivo",nombre:"Recursivo",descripcion:"pgcd(b, a%b) si b!=0, sino a. Elegante y corto.",recomendada:!1,codigo:`unsigned int	pgcd(unsigned int a, unsigned int b)
{
	if (b == 0)
		return (a);
	return (pgcd(b, a % b));
}`}],tests:[{id:"test_3_6",descripcion:"pgcd(3,6) → 3",entrada:["3","6"],salida:`3
`,tipo:"normal"},{id:"test_4_6",descripcion:"pgcd(4,6) → 2",entrada:["4","6"],salida:`2
`,tipo:"normal"},{id:"test_coprimos",descripcion:"pgcd(17,13) → 1 (coprimos)",entrada:["17","13"],salida:`1
`,tipo:"normal"},{id:"test_0_5",descripcion:"pgcd(0,5) → 5 (caso especial)",entrada:["0","5"],salida:`5
`,tipo:"edge"},{id:"test_12_8",descripcion:"pgcd(12,8) → 4",entrada:["12","8"],salida:`4
`,tipo:"normal"},{id:"test_iguales",descripcion:"pgcd(6,6) → 6 (mismos)",entrada:["6","6"],salida:`6
`,tipo:"normal"}],gdbSteps:[{paso:1,titulo:"pgcd(4,6): iteraciones",codigo:`a=4, b=6
Iter 1: b=6≠0 → tmp=6, b=4%6=4, a=6  → (6,4)
Iter 2: b=4≠0 → tmp=4, b=6%4=2, a=4  → (4,2)
Iter 3: b=2≠0 → tmp=2, b=4%2=0, a=2  → (2,0)
Iter 4: b=0 → while FALSE → return a=2`,variables:[{nombre:"iteraciones",valor:"3",cambio:!1,nota:""},{nombre:"retorno",valor:"2",cambio:!0,nota:"✓ GCD(4,6)=2"}]},{paso:2,titulo:"pgcd(0,5): caso especial",codigo:`a=0, b=5
Iter 1: b=5≠0 → tmp=5, b=0%5=0, a=5
Iter 2: b=0 → while FALSE → return a=5
pgcd(0,5) = 5`,variables:[{nombre:"retorno",valor:"5",cambio:!0,nota:"← pgcd(0,n)=n"}]}],trampas:[{severidad:"mortal",titulo:"Olvidar la variable tmp → perder el valor de b",descripcion:"En el intercambio (a,b)→(b,a%b), hay que guardar b en tmp ANTES de modificarlo. Sin tmp: b = a%b, a = b (ya modificado) → incorrecto.",codigoMal:`// ❌ Sin tmp: b ya cambió cuando asignamos a
while (b) {
    b = a % b;  // b ya cambió
    a = b;      // a = nuevo b, no el viejo b
}`,codigoBien:`// ✅ Guardar b primero
while (b) {
    tmp = b;     // guardar b viejo
    b = a % b;   // calcular nuevo b
    a = tmp;     // a = b viejo
}`},{severidad:"warning",titulo:"Confundir pgcd con lcm — son operaciones inversas",descripcion:"pgcd = GCD (máximo COMÚN divisor). lcm = LCM (mínimo COMÚN múltiplo). pgcd(4,6)=2; lcm(4,6)=12. Relacionados: lcm(a,b) = a/pgcd(a,b)*b.",codigoMal:`// ❌ Confusión
// "el GCD de 4 y 6 es 12" → INCORRECTO, 12 es el lcm`,codigoBien:`// ✓ pgcd(4,6) = 2 (el divisor más grande que divide tanto 4 como 6)
// lcm(4,6) = 12 (el múltiplo más pequeño de 4 y 6)`}],bajoCelCapot:`PGCD = "Plus Grand Commun Diviseur" (en francés) = GCD (Greatest Common Divisor).
El algoritmo de Euclides se basa en: gcd(a,b) = gcd(b, a mod b).
Demostración: si d divide a y b, también divide a-b, y por extensión a mod b.
Se converge en O(log(min(a,b))) iteraciones — muy eficiente.`,estrategia:"MEMORIZAR",razonEstrategia:"El algoritmo de Euclides con tmp es la pieza central. Memorizar: while(b){tmp=b;b=a%b;a=tmp;} return a. Se usa en lcm, criptografía RSA y muchos algoritmos.",relacionados:["lcm","add_prime_sum","fprime"]},$z={id:"print_hex",nombre:"print_hex",nivel:3,dificultad:"medio",tipoEntrega:"programa",archivosEsperados:["print_hex.c"],funcionesPermitidas:["write"],subject:`Assignment name  : print_hex
Expected files   : print_hex.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that takes a positive (or zero) int as argument and displays
it in base 16 (lowercase), followed by a newline.

If the number of arguments is not 1, just display a newline.

Example:
$> ./print_hex 10 | cat -e
a$
$> ./print_hex 255 | cat -e
ff$
$> ./print_hex 0 | cat -e
0$`,descripcion:"Programa que convierte un entero positivo a base hexadecimal (minúsculas) e imprime el resultado. Usa una tabla de dígitos hex y recursión similar a put_nbr.",palacio:{habitacion:"dormitorio",mueble:"paleta",personaje:"La Paleta de Colores Hex",emoji:"🎨",historia:`En el dormitorio hay una Paleta de artista con 16 colores (0-9, a-f).
Le das un número decimal y ella lo convierte a base 16.
El proceso: divide por 16 recursivamente, igual que put_nbr pero en base 16.
Cada resto (0-15) mapea a un carácter: 0-9 → '0'-'9', 10-15 → 'a'-'f'.
La tabla "0123456789abcdef" es la clave: hex[n%16] da el dígito correcto.`,anclas:["tabla = '0123456789abcdef'  ← 16 dígitos","si n >= 16: llamar print_hex_rec(n/16) primero  ← recursión","write(tabla[n%16])  ← el dígito actual","solo dígitos en MINÚSCULA (a-f, no A-F)","argc != 2 → solo '\\n'"]},herramientas:["bits","ascii"],formulaClave:{descripcion:"Recursión base 16: dividir por 16, resto mapea a dígito hex",formula:"print_hex(n): if n>=16: print_hex(n/16); write(hex[n%16]);",ejemplo:{entrada:"n=255",calculo:'print_hex(255): 255>=16→print_hex(15); hex[255%16]=hex[15]="f"; print_hex(15): 15<16→hex[15]="f"',resultado:'"ff"'}},versiones:[{id:"recursiva",nombre:"Con función recursiva print_hex_rec",descripcion:"La más limpia. Usa una tabla de caracteres y recursión.",recomendada:!0,codigo:`#include <unistd.h>

static void	print_hex_rec(unsigned int n)
{
	char	hex[] = "0123456789abcdef";

	if (n >= 16)
		print_hex_rec(n / 16);
	write(1, &hex[n % 16], 1);
}

int	main(int argc, char **argv)
{
	unsigned int	n;
	int			i;

	if (argc != 2)
	{
		write(1, "\\n", 1);
		return (0);
	}
	n = 0;
	i = 0;
	while (argv[1][i] >= '0' && argv[1][i] <= '9')
		n = n * 10 + (argv[1][i++] - '0');
	print_hex_rec(n);
	write(1, "\\n", 1);
	return (0);
}`},{id:"iterativa",nombre:"Iterativa con buffer",descripcion:"Construye el número hex en un buffer inverso y luego lo imprime.",recomendada:!1,codigo:`#include <unistd.h>

int	main(int argc, char **argv)
{
	char	hex[] = "0123456789abcdef";
	char	buf[20];
	unsigned int	n;
	int			i;
	int			len;

	if (argc != 2)
	{
		write(1, "\\n", 1);
		return (0);
	}
	n = 0;
	i = 0;
	while (argv[1][i] >= '0' && argv[1][i] <= '9')
		n = n * 10 + (argv[1][i++] - '0');
	if (n == 0)
	{
		write(1, "0\\n", 2);
		return (0);
	}
	len = 0;
	while (n > 0)
	{
		buf[len++] = hex[n % 16];
		n /= 16;
	}
	while (len > 0)
		write(1, &buf[--len], 1);
	write(1, "\\n", 1);
	return (0);
}`}],tests:[{id:"test_10",descripcion:'10 → "a"',entrada:["10"],salida:`a
`,tipo:"normal"},{id:"test_255",descripcion:'255 → "ff"',entrada:["255"],salida:`ff
`,tipo:"normal"},{id:"test_0",descripcion:'0 → "0"',entrada:["0"],salida:`0
`,tipo:"edge"},{id:"test_16",descripcion:'16 → "10" (hex)',entrada:["16"],salida:`10
`,tipo:"normal"},{id:"test_42",descripcion:'42 → "2a"',entrada:["42"],salida:`2a
`,tipo:"normal"},{id:"test_256",descripcion:'256 → "100"',entrada:["256"],salida:`100
`,tipo:"normal"}],gdbSteps:[{paso:1,titulo:"print_hex_rec(255)",codigo:`print_hex_rec(255):
  255 >= 16 → llama print_hex_rec(255/16=15)
    print_hex_rec(15):
      15 < 16 → no recursión
      hex[15%16] = hex[15] = 'f' → write('f')
  hex[255%16] = hex[15] = 'f' → write('f')
Salida: "ff"`,variables:[{nombre:"salida",valor:'"ff"',cambio:!0,nota:"✓"}]},{paso:2,titulo:"print_hex_rec(42)",codigo:`print_hex_rec(42):
  42 >= 16 → llama print_hex_rec(42/16=2)
    print_hex_rec(2):
      2 < 16 → no recursión
      hex[2%16] = hex[2] = '2' → write('2')
  hex[42%16] = hex[10] = 'a' → write('a')
Salida: "2a"`,variables:[{nombre:"salida",valor:'"2a"',cambio:!0,nota:"42 en hex = 2*16+10 = 0x2a ✓"}]}],trampas:[{severidad:"mortal",titulo:"Usar mayúsculas (A-F) en vez de minúsculas (a-f)",descripcion:'El subject especifica base 16 en MINÚSCULA. "0123456789abcdef", no "0123456789ABCDEF".',codigoMal:`// ❌ Mayúsculas
char hex[] = "0123456789ABCDEF";  // imprimiría "FF" en vez de "ff"`,codigoBien:`// ✅ Minúsculas
char hex[] = "0123456789abcdef";`},{severidad:"mortal",titulo:"Olvidar el caso n=0 en la versión iterativa",descripcion:"En la versión iterativa con while(n>0), si n=0 el while no entra y no se imprime nada. La versión recursiva maneja bien el 0 (hex[0%16]='0').",codigoMal:`// ❌ n=0 → no imprime nada
while (n > 0) { buf[len++] = hex[n%16]; n /= 16; }
// si n=0: len=0, while de impresión no entra → output vacío`,codigoBien:`// ✅ Caso especial para 0
if (n == 0) { write(1, "0\\n", 2); return 0; }
// o usar la versión recursiva que lo maneja automáticamente`}],bajoCelCapot:`Base 16: dígitos 0-9 y a-f. 10→a, 11→b, 12→c, 13→d, 14→e, 15→f.
255 = 15*16 + 15 = 0xff. 42 = 2*16 + 10 = 0x2a.
La tabla "0123456789abcdef" indexada por n%16 mapea automáticamente.
La recursión print_hex(n/16); write(hex[n%16]) imprime MSB primero.`,estrategia:"MEMORIZAR",razonEstrategia:'La tabla "0123456789abcdef" + recursión base 16 es el patrón reutilizable para cualquier conversión de base con digits mixtos.',relacionados:["ft_atoi_base","reverse_bits","print_bits"]},qz={id:"ft_atoi_base",nombre:"ft_atoi_base",nivel:3,dificultad:"difícil",tipoEntrega:"funcion",archivosEsperados:["ft_atoi_base.c"],funcionesPermitidas:[],subject:`Assignment name  : ft_atoi_base
Expected files   : ft_atoi_base.c
Allowed functions: none
--------------------------------------------------------------------------------

Write a function that converts the string argument str (base nb_base) to an
integer and returns it.

int	ft_atoi_base(const char *str, const char *base);

The function must handle:
- Whitespace at the beginning (like atoi)
- Optional sign (+ or -)
- Characters in the given base

If a character in str is not in base, stop conversion.

Example:
ft_atoi_base("ff", "0123456789abcdef") → 255
ft_atoi_base("10", "01")              → 2   (binary)
ft_atoi_base("-f", "0123456789abcdef")→ -15
ft_atoi_base("z", "abcdefghijklmnopqrstuvwxyz") → 25`,descripcion:"Generalización de ft_atoi para cualquier base. La base es un string cuyos caracteres son los dígitos. Cada carácter de str se mapea a su índice en base. El índice es el valor numérico.",palacio:{habitacion:"dormitorio",mueble:"diccionario",personaje:"El Diccionario de Bases",emoji:"🔡",historia:`En el dormitorio hay un Diccionario que traduce a cualquier idioma numérico.
Le das un número en cualquier base (binario, hex, letras...) y lo convierte a decimal.
El Diccionario tiene tres fases (como ft_atoi):
FASE 1: Salta espacios en blanco.
FASE 2: Lee signo opcional (+ o -).
FASE 3: Para cada char de str, busca su POSICIÓN en base → ese es su valor.
Si el char no está en base: PARA. El índice en base ES el dígito.`,anclas:["base_len = strlen(base)  ← el tamaño de la base","ft_isin(c, base) devuelve el ÍNDICE de c en base (o -1)","result = result * base_len + digit  ← acumulación en la base dada","FASE 1: skip whitespace; FASE 2: signo; FASE 3: dígitos","parar al primer char no encontrado en base"]},herramientas:["strings","ascii"],formulaClave:{descripcion:"Como ft_atoi pero cada dígito es el índice del char en la cadena base",formula:"digit=base.indexOf(str[i]); result=result*base_len+digit; (parar si -1)",ejemplo:{entrada:'"ff", base="0123456789abcdef"',calculo:"'f'→índice 15; result=0*16+15=15; 'f'→15; result=15*16+15=255",resultado:"255"}},versiones:[{id:"clasica",nombre:"Con ft_isin() auxiliar que devuelve índice",descripcion:"La más modular. ft_isin busca el índice del carácter en la base.",recomendada:!0,codigo:`static int	ft_isin(char c, const char *base)
{
	int	i;

	i = 0;
	while (base[i])
	{
		if (base[i] == c)
			return (i);
		i++;
	}
	return (-1);
}

static int	ft_strlen(const char *s)
{
	int	i;

	i = 0;
	while (s[i])
		i++;
	return (i);
}

int	ft_atoi_base(const char *str, const char *base)
{
	int	base_len;
	int	sign;
	int	result;
	int	digit;

	base_len = ft_strlen(base);
	sign = 1;
	result = 0;
	while (*str == ' ' || (*str >= '\\t' && *str <= '\\r'))
		str++;
	if (*str == '-')
	{
		sign = -1;
		str++;
	}
	else if (*str == '+')
		str++;
	while ((digit = ft_isin(*str, base)) != -1)
	{
		result = result * base_len + digit;
		str++;
	}
	return (result * sign);
}`}],tests:[{id:"test_hex_ff",descripcion:'"ff" base hex → 255',entrada:["ff","0123456789abcdef"],salida:`255
`,tipo:"normal"},{id:"test_bin_10",descripcion:'"10" base binaria → 2',entrada:["10","01"],salida:`2
`,tipo:"normal"},{id:"test_neg_hex",descripcion:'"-f" base hex → -15',entrada:["-f","0123456789abcdef"],salida:`-15
`,tipo:"normal"},{id:"test_decimal",descripcion:'"42" base decimal → 42 (igual que atoi)',entrada:["42","0123456789"],salida:`42
`,tipo:"normal"},{id:"test_alpha",descripcion:'"z" base alpha → 25 (z es el char 25)',entrada:["z","abcdefghijklmnopqrstuvwxyz"],salida:`25
`,tipo:"normal"},{id:"test_0",descripcion:'"0" base hex → 0',entrada:["0","0123456789abcdef"],salida:`0
`,tipo:"edge"}],gdbSteps:[{paso:1,titulo:'"ff" base "0123456789abcdef"',codigo:`base_len = 16, sign=1, result=0
FASE 3: *str='f'
  ft_isin('f', base) → 'f' en posición 15 → digit=15
  result = 0*16 + 15 = 15
  str++
*str='f' (segundo)
  ft_isin('f', base) → digit=15
  result = 15*16 + 15 = 255
  str++
*str='\\0' → ft_isin==-1 → para`,variables:[{nombre:"result",valor:"255",cambio:!0,nota:""},{nombre:"sign",valor:"1",cambio:!1,nota:""},{nombre:"retorno",valor:"255",cambio:!0,nota:"✓"}]},{paso:2,titulo:'"10" base "01" (binario)',codigo:`base_len = 2, result=0
'1' → ft_isin('1',"01") = 1 → result=0*2+1=1
'0' → ft_isin('0',"01") = 0 → result=1*2+0=2
'\\0' → -1 → para
return 2`,variables:[{nombre:"retorno",valor:"2",cambio:!0,nota:'✓ "10" en binario = 2'}]}],trampas:[{severidad:"mortal",titulo:"ft_isin devuelve 1/0 (encontrado/no) en vez del ÍNDICE",descripcion:"El índice de c en base es su VALOR numérico en esa base. Si devuelves 1/0, todos los dígitos valdrían 1 o 0 — resultado completamente incorrecto.",codigoMal:`// ❌ Devuelve bool, no índice
static int ft_isin(char c, char *base) {
    int i = 0;
    while (base[i])
        if (base[i++] == c) return 1;  // debería return i-1 (el índice)
    return 0;
}`,codigoBien:`// ✅ Devuelve el índice (= valor del dígito en esa base)
static int ft_isin(char c, const char *base) {
    int i = 0;
    while (base[i]) {
        if (base[i] == c) return i;  // ← el índice ES el valor
        i++;
    }
    return (-1);
}`},{severidad:"mortal",titulo:"No multiplicar result * base_len antes de sumar — acumulación incorrecta",descripcion:"Como en ft_atoi: result = result * BASE + dígito. En base 16, si result=1 y siguiente dígito=5, result = 1*16+5=21, no 1+5=6.",codigoMal:`// ❌ No multiplica por base_len
result = result + digit;  // "ff" → 15+15=30 en vez de 255`,codigoBien:`// ✅
result = result * base_len + digit;  // "ff" → 0*16+15=15, 15*16+15=255`}],bajoCelCapot:`ft_atoi_base generaliza ft_atoi a cualquier base numérica.
Con base="0123456789abcdef": base 16 (hexadecimal).
Con base="01": base 2 (binario).
Con base="0123456789": base 10 (igual que ft_atoi).
El índice en el string base es el valor numérico del dígito en esa base.`,estrategia:"MEMORIZAR",razonEstrategia:'ft_atoi_base = ft_atoi pero la "tabla de dígitos" es el parámetro base. El patrón clave: ft_isin devuelve el ÍNDICE (no 0/1), y result=result*base_len+digit.',relacionados:["ft_atoi","print_hex","reverse_bits"]},Hz={id:"str_capitalizer",nombre:"str_capitalizer",nivel:3,dificultad:"medio",tipoEntrega:"programa",archivosEsperados:["str_capitalizer.c"],funcionesPermitidas:["write"],subject:`Assignment name  : str_capitalizer
Expected files   : str_capitalizer.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that takes one or more strings as arguments and, for each of
them, capitalizes the first letter of each word (i.e., any sequence of
non-space characters), lowercases the rest, and displays the result, each
followed by a newline character.

A "word" is defined as a sequence of non-space characters.

If the number of arguments is 0, the program just outputs a newline.

Example:
$> ./str_capitalizer "hello world" | cat -e
Hello World$
$> ./str_capitalizer "hELLO wORLD" | cat -e
Hello World$
$> ./str_capitalizer "a b c" | cat -e
A B C$`,descripcion:"Programa que capitaliza la primera letra de cada palabra (secuencia de no-espacios) y pone en minúsculas el resto. Para cada argumento imprime el resultado seguido de newline.",palacio:{habitacion:"dormitorio",mueble:"corona",personaje:"La Corona Capitalizadora",emoji:"👑",historia:`En el dormitorio hay una Corona que nombra a cada palabra.
La Corona pone la primera letra en MAYÚSCULA y el resto en minúsculas.
La lógica: un flag "capitalize" que empieza en true.
Si encuentras espacio: capitalize=true. Si no es espacio y capitalize: MAYÚSCULA, capitalize=false.
Si no es espacio y !capitalize: MINÚSCULA.`,anclas:["flag capitalize = 1 al inicio","espacio → capitalize = 1; no-espacio+capitalize → toupper, capitalize=0","no-espacio+!capitalize → tolower","cada argumento en argv[i], i de 1 a argc-1","write('\\n') al final de cada argumento"]},herramientas:["strings","ascii"],formulaClave:{descripcion:"Flag capitalize: true al inicio y tras cada espacio",formula:"if(space) cap=1; else if(cap){upper;cap=0;} else lower;",ejemplo:{entrada:'"hELLO wORLD"',calculo:"h→cap=1→H(cap=0); E→e; L→l; L→l; O→o; space→cap=1; w→cap=1→W(cap=0); O→o; R→r; L→l; D→d",resultado:'"Hello World"'}},versiones:[{id:"clasica",nombre:"Con flag capitalize y write char a char",descripcion:"La más directa. Itera cada argumento char a char con un flag para saber si hay que capitalizar.",recomendada:!0,codigo:`#include <unistd.h>

int	main(int argc, char **argv)
{
	int	i;
	int	j;
	char	c;
	int	capitalize;

	if (argc == 1)
	{
		write(1, "\\n", 1);
		return (0);
	}
	i = 1;
	while (i < argc)
	{
		j = 0;
		capitalize = 1;
		while (argv[i][j])
		{
			c = argv[i][j];
			if (c == ' ')
				capitalize = 1;
			else if (capitalize)
			{
				if (c >= 'a' && c <= 'z')
					c -= 32;
				capitalize = 0;
			}
			else
			{
				if (c >= 'A' && c <= 'Z')
					c += 32;
			}
			write(1, &c, 1);
			j++;
		}
		write(1, "\\n", 1);
		i++;
	}
	return (0);
}`}],tests:[{id:"test_hello_world",descripcion:'"hello world" → "Hello World"',entrada:["hello world"],salida:`Hello World
`,tipo:"normal"},{id:"test_mixed",descripcion:'"hELLO wORLD" → "Hello World"',entrada:["hELLO wORLD"],salida:`Hello World
`,tipo:"normal"},{id:"test_single",descripcion:'"a b c" → "A B C"',entrada:["a b c"],salida:`A B C
`,tipo:"normal"},{id:"test_all_upper",descripcion:'"HELLO WORLD" → "Hello World"',entrada:["HELLO WORLD"],salida:`Hello World
`,tipo:"normal"},{id:"test_no_args",descripcion:"sin args → solo newline",entrada:[],salida:`
`,tipo:"edge"},{id:"test_single_word",descripcion:'"hello" → "Hello"',entrada:["hello"],salida:`Hello
`,tipo:"normal"}],gdbSteps:[{paso:1,titulo:'"hELLO wORLD": trazar el flag capitalize',codigo:`capitalize=1
'h' → capitalize=1 → 'H', capitalize=0
'E' → cap=0 → tolower → 'e'
'L' → 'l', 'L' → 'l', 'O' → 'o'
' ' → capitalize=1; write(' ')
'w' → capitalize=1 → 'W', capitalize=0
'O' → 'o', 'R' → 'r', 'L' → 'l', 'D' → 'd'
write('\\n')
Salida: "Hello World"`,variables:[{nombre:"salida",valor:'"Hello World"',cambio:!0,nota:"✓"}]}],trampas:[{severidad:"mortal",titulo:"Olvidar escribir el espacio — no modificar caracteres que no son letras",descripcion:"Los espacios se escriben tal cual (solo actualizan el flag). No los saltes ni los modifiques.",codigoMal:`// ❌ Saltar espacios en vez de escribirlos
if (c == ' ') { capitalize = 1; } // no escribe el espacio`,codigoBien:`// ✅ Escribir el espacio y actualizar el flag
if (c == ' ')
    capitalize = 1;
// ...
write(1, &c, 1);  // siempre escribir c`},{severidad:"mortal",titulo:"Confundir str_capitalizer con rstr_capitalizer",descripcion:"str_capitalizer: PRIMERA letra de cada palabra en mayúscula. rstr_capitalizer: ÚLTIMA letra de cada palabra en mayúscula.",codigoMal:`// ❌ Capitalizar la última en vez de la primera
// → eso es rstr_capitalizer`,codigoBien:`// ✅ str_capitalizer: capitalize=1 al inicio y tras espacio → primera
// rstr_capitalizer: mayúscula si char+1 es espacio o fin → última`}],bajoCelCapot:`La capitalización de palabras requiere saber si estamos al inicio de una palabra.
Un flag booleano "capitalize" que se activa tras cada espacio lo resuelve.
El truco c-=32 y c+=32 es el bit 5 de ASCII: 'a'=97='A'+32, 'A'=65.
Alternativamente: if(c>='a'&&c<='z') c-=32; if(c>='A'&&c<='Z') c+=32.`,estrategia:"MEMORIZAR",razonEstrategia:"El flag capitalize es el patrón reutilizable. Memorizar: cap=1 al inicio; espacio→cap=1; primer no-espacio→upper+cap=0; resto→lower.",relacionados:["rstr_capitalizer","epur_str","hidenp"]},Wz={id:"rstr_capitalizer",nombre:"rstr_capitalizer",nivel:3,dificultad:"difícil",tipoEntrega:"programa",archivosEsperados:["rstr_capitalizer.c"],funcionesPermitidas:["write"],subject:`Assignment name  : rstr_capitalizer
Expected files   : rstr_capitalizer.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that takes one or more strings as arguments and, for each of
them, capitalizes the LAST letter of each word (lowercases all others), and
displays the result, each followed by a newline character.

A "word" is defined as a sequence of non-space characters.

If the number of arguments is 0, the program just outputs a newline.

Example:
$> ./rstr_capitalizer "hello world" | cat -e
hellO worlD$
$> ./rstr_capitalizer "hELLO wORLD" | cat -e
hellO worlD$
$> ./rstr_capitalizer "a b c" | cat -e
A B C$`,descripcion:"Como str_capitalizer pero al revés: la ÚLTIMA letra de cada palabra en mayúscula, el resto en minúsculas. Para detectar la última letra de una palabra: str[i+1]==' ' o str[i+1]='\\0'.",palacio:{habitacion:"dormitorio",mueble:"espejo",personaje:"El Espejo Invertido",emoji:"🪞",historia:`En el dormitorio hay un Espejo que todo lo invierte.
En vez de capitalizar la primera letra de cada palabra, capitaliza la ÚLTIMA.
La lógica: si el siguiente char es espacio o fin de string → MAYÚSCULA.
Si no es la última letra de la palabra → MINÚSCULA.
Es el "reverso" de str_capitalizer.`,anclas:["si str[i+1]==' ' o str[i+1]='\\0' → toupper(str[i])","si no → tolower(str[i])","los espacios se escriben sin modificar","str[j+1] para mirar adelante (lookahead)","último char antes de '\\0' o antes de espacio → mayúscula"]},herramientas:["strings","ascii"],formulaClave:{descripcion:"Lookahead: si el siguiente char es espacio o fin → mayúscula",formula:'if(!c[j+1]||c[j+1]==" ") upper; else lower; (salvo el propio espacio)',ejemplo:{entrada:'"hello world"',calculo:'h→l,e→l,l→l,l→l,o→O(next=" "); " "; w→l,o→l,r→l,l→l,d→D(next=\\0)',resultado:'"hellO worlD"'}},versiones:[{id:"clasica",nombre:"Con lookahead argv[i][j+1]",descripcion:"Mira el siguiente char para saber si el actual es el último de la palabra.",recomendada:!0,codigo:`#include <unistd.h>

int	main(int argc, char **argv)
{
	int	i;
	int	j;
	char	c;

	if (argc == 1)
	{
		write(1, "\\n", 1);
		return (0);
	}
	i = 1;
	while (i < argc)
	{
		j = 0;
		while (argv[i][j])
		{
			c = argv[i][j];
			if (c != ' ')
			{
				if (!argv[i][j + 1] || argv[i][j + 1] == ' ')
				{
					if (c >= 'a' && c <= 'z')
						c -= 32;
				}
				else
				{
					if (c >= 'A' && c <= 'Z')
						c += 32;
				}
			}
			write(1, &c, 1);
			j++;
		}
		write(1, "\\n", 1);
		i++;
	}
	return (0);
}`}],tests:[{id:"test_hello_world",descripcion:'"hello world" → "hellO worlD"',entrada:["hello world"],salida:`hellO worlD
`,tipo:"normal"},{id:"test_mixed",descripcion:'"hELLO wORLD" → "hellO worlD"',entrada:["hELLO wORLD"],salida:`hellO worlD
`,tipo:"normal"},{id:"test_single",descripcion:'"a b c" → "A B C"',entrada:["a b c"],salida:`A B C
`,tipo:"normal"},{id:"test_all_upper",descripcion:'"HELLO WORLD" → "hellO worlD"',entrada:["HELLO WORLD"],salida:`hellO worlD
`,tipo:"normal"},{id:"test_no_args",descripcion:"sin args → solo newline",entrada:[],salida:`
`,tipo:"edge"},{id:"test_single_word",descripcion:'"hello" → "hellO"',entrada:["hello"],salida:`hellO
`,tipo:"normal"}],gdbSteps:[{paso:1,titulo:'"hello world": trazar con lookahead',codigo:`j=0: 'h', next='e' (no esp,no\\0) → tolower → 'h'
j=1: 'e', next='l' → 'e'
j=2: 'l', next='l' → 'l'
j=3: 'l', next='o' → 'l'
j=4: 'o', next=' ' → LAST → toupper → 'O'
j=5: ' ' → es espacio → write(' ')
j=6: 'w', next='o' → 'w'
j=7: 'o', next='r' → 'o'
j=8: 'r', next='l' → 'r'
j=9: 'l', next='d' → 'l'
j=10: 'd', next='\\0' → LAST → toupper → 'D'
write('\\n')
Salida: "hellO worlD"`,variables:[{nombre:"salida",valor:'"hellO worlD"',cambio:!0,nota:"✓"}]}],trampas:[{severidad:"mortal",titulo:"Confundir con str_capitalizer — primera vs última letra",descripcion:"str_capitalizer: PRIMERA → flag activate after space. rstr_capitalizer: ÚLTIMA → lookahead next char is space or \\0.",codigoMal:`// ❌ Capitalizar la primera (str_capitalizer)
if (capitalize) { toupper; capitalize=0; }
if (space) capitalize=1;`,codigoBien:`// ✅ Capitalizar la última (rstr_capitalizer)
if (!next || next == ' ') toupper;
else tolower;`},{severidad:"mortal",titulo:"Aplicar toupper/tolower a los espacios",descripcion:'Los espacios se escriben sin modificar. Solo aplicar transformación a letras (c != " ").',codigoMal:`// ❌ toupper(' ') podría dar resultado incorrecto
c = toupper(argv[i][j]);  // sin verificar si es espacio`,codigoBien:`// ✅ Verificar que no es espacio antes de transformar
if (c != ' ') {
    if (!argv[i][j+1] || argv[i][j+1]==' ') c = toupper(c);
    else c = tolower(c);
}`}],bajoCelCapot:`rstr_capitalizer = "reverse str_capitalizer".
La diferencia con str_capitalizer es conceptual: en vez de flag post-space,
usamos lookahead para detectar el final de cada palabra.
Útil para entender patrones de look-ahead en strings.
El case 'a b c' → 'A B C' es interesante: cada palabra tiene 1 sola letra,
que simultáneamente es primera Y última → resultado igual en ambas versiones.`,estrategia:"MEMORIZAR",razonEstrategia:'El patrón de lookahead: si(argv[i][j+1]==" "||!argv[i][j+1]) es la clave. Es el opuesto exacto de str_capitalizer. Memorizarlos juntos como un par.',relacionados:["str_capitalizer","epur_str","hidenp"]},Zz={id:"fprime",nombre:"fprime",nivel:4,dificultad:"medio",tipoEntrega:"programa",archivosEsperados:["fprime.c"],funcionesPermitidas:["write"],subject:`Assignment name  : fprime
Expected files   : fprime.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that takes a positive int and displays its prime factors on the
standard output, followed by a newline.

Factors must be displayed in ascending order and separated by '*'.

If the number of arguments is not 1, or the argument is not valid (negative,
zero, or not a number), just display a newline.

Example:
$> ./fprime 225 | cat -e
3*3*5*5$
$> ./fprime 8333333333333333333 | cat -e
$
$> ./fprime 101 | cat -e
101$
$> ./fprime 1 | cat -e
1$
$> ./fprime | cat -e
$
$> ./fprime 42 | cat -e
2*3*7$`,descripcion:"Descomposición en factores primos. Divide el número por divisores empezando en 2. Cada vez que el divisor divide exactamente, imprime el factor y continúa con el cociente. Si quedan factores, imprime el número restante.",palacio:{habitacion:"garaje",mueble:"destornillador",personaje:"El Destornillador de Primos",emoji:"🔩",historia:`En el garaje hay un Destornillador que desmonta cualquier número en sus piezas primas.
El proceso: prueba divisores desde 2 hacia arriba.
Cada vez que el divisor divide exactamente → imprimir factor, dividir n, no aumentar divisor.
Cuando ya no divide → aumentar divisor.
Si al final n > 1 → n mismo es primo, imprimir.
Caso especial: n=1 → imprimir "1".`,anclas:["divisor d empieza en 2","mientras d*d <= n: si n%d==0 → imprimir d, n/=d; si no d++","al final, si n>1 → imprimir n (es primo)","primer factor no lleva '*' antes — usar flag 'first'","n=1 caso especial → imprimir '1' directamente"]},herramientas:["bits","ascii"],formulaClave:{descripcion:"Divide por d mientras d*d<=n; resto n>1 es primo",formula:"while d*d<=n: if n%d==0: print d; n/=d; else d++; if n>1: print n",ejemplo:{entrada:"n=12",calculo:"d=2: 12%2=0→print 2, n=6; 6%2=0→print 2, n=3; d=2: 2*2=4>3→stop; n=3>1→print 3",resultado:'"2*2*3"'}},versiones:[{id:"clasica",nombre:"Con divisor incremental y flag first",descripcion:"La versión estándar. Eficiente hasta √n. Maneja el caso primo al final.",recomendada:!0,codigo:`#include <unistd.h>

static void	ft_putnbr(unsigned long long n)
{
	char	c;

	if (n >= 10)
		ft_putnbr(n / 10);
	c = n % 10 + '0';
	write(1, &c, 1);
}

int	main(int argc, char **argv)
{
	unsigned long long	n;
	unsigned long long	d;
	int				i;
	int				first;

	if (argc != 2)
	{
		write(1, "\\n", 1);
		return (0);
	}
	n = 0;
	i = 0;
	while (argv[1][i] >= '0' && argv[1][i] <= '9')
		n = n * 10 + (argv[1][i++] - '0');
	if (argv[1][i] != '\\0' || n == 0)
	{
		write(1, "\\n", 1);
		return (0);
	}
	if (n == 1)
	{
		write(1, "1\\n", 2);
		return (0);
	}
	d = 2;
	first = 1;
	while (d * d <= n)
	{
		while (n % d == 0)
		{
			if (!first)
				write(1, "*", 1);
			ft_putnbr(d);
			n /= d;
			first = 0;
		}
		d++;
	}
	if (n > 1)
	{
		if (!first)
			write(1, "*", 1);
		ft_putnbr(n);
	}
	write(1, "\\n", 1);
	return (0);
}`}],tests:[{id:"test_225",descripcion:'225 → "3*3*5*5"',entrada:["225"],salida:`3*3*5*5
`,tipo:"normal"},{id:"test_1",descripcion:'1 → "1"',entrada:["1"],salida:`1
`,tipo:"edge"},{id:"test_101",descripcion:'101 (primo) → "101"',entrada:["101"],salida:`101
`,tipo:"normal"},{id:"test_42",descripcion:'42 → "2*3*7"',entrada:["42"],salida:`2*3*7
`,tipo:"normal"},{id:"test_6",descripcion:'6 → "2*3"',entrada:["6"],salida:`2*3
`,tipo:"normal"},{id:"test_12",descripcion:'12 → "2*2*3"',entrada:["12"],salida:`2*2*3
`,tipo:"normal"},{id:"test_no_args",descripcion:"sin args → newline",entrada:[],salida:`
`,tipo:"edge"}],gdbSteps:[{paso:1,titulo:"fprime(225): descomposición",codigo:`n=225, d=2
d=2: 225%2≠0 → d=3
d=3: 225%3=0 → print "3", n=75, first=0
      75%3=0 → print "*3", n=25
      25%3≠0 → d=4
d=4: 25%4≠0 → d=5
d=5: 25%5=0 → print "*5", n=5
      5%5=0 → print "*5", n=1
      d=6: 6*6=36 > 1 → while FALSE
n=1: n>1 es FALSE → no imprime nada más
write("\\n")
Salida: "3*3*5*5"`,variables:[{nombre:"salida",valor:'"3*3*5*5"',cambio:!0,nota:"✓ 225=3²×5²"}]},{paso:2,titulo:"fprime(42): número compuesto",codigo:`n=42, d=2
d=2: 42%2=0 → "2", n=21
     21%2≠0 → d=3
d=3: 21%3=0 → "*3", n=7
     7%3≠0 → d=4
d=4: 4*4=16 > 7 → while FALSE
n=7 > 1 → "*7"
Salida: "2*3*7"`,variables:[{nombre:"salida",valor:'"2*3*7"',cambio:!0,nota:"✓ 42=2×3×7"}]}],trampas:[{severidad:"mortal",titulo:'Olvidar el caso n=1: sin factores, pero hay que imprimir "1"',descripcion:"Si n=1, el while d*d<=n nunca entra (1*1=1, pero n%1=0 siempre), y n>1 es false. Sin caso especial para n=1, no se imprime nada.",codigoMal:`// ❌ Sin caso especial n=1 → output vacío (solo \\n)
// n=1: d=2, d*d=4>1 → while no entra; n>1 false → nada`,codigoBien:`// ✅ Caso especial antes del bucle
if (n == 1) { write(1, "1\\n", 2); return 0; }`},{severidad:"mortal",titulo:"Usar int en vez de unsigned long long — overflow con números grandes",descripcion:"Los argumentos pueden ser muy grandes. Usar unsigned long long (o al menos unsigned long) para evitar overflow al parsear y al computar d*d.",codigoMal:`// ❌ int desborda con números > 2^31-1
int n = atoi(argv[1]);`,codigoBien:`// ✅ unsigned long long para rangos grandes
unsigned long long n = 0;
while (argv[1][i] >= '0' && argv[1][i] <= '9')
    n = n * 10 + (argv[1][i++] - '0');`},{severidad:"warning",titulo:'Separador "*" antes del primer factor',descripcion:'El primer factor no lleva "*" delante. Usar un flag "first" o imprimir el primer factor fuera del bucle.',codigoMal:`// ❌ Imprime "*2*3*7" en vez de "2*3*7"
while (n % d == 0) { write("*"); ft_putnbr(d); n /= d; }`,codigoBien:`// ✅ Flag "first" para omitir el primer separador
if (!first) write(1, "*", 1);
ft_putnbr(d);
first = 0;`}],bajoCelCapot:`La factorización en primos divide repetidamente por el menor divisor posible.
Solo necesitamos probar hasta √n porque si n tiene un factor mayor que √n,
el cofactor correspondiente es menor que √n y ya lo habríamos encontrado.
225 = 3² × 5². 42 = 2 × 3 × 7. 101 es primo (no tiene factores hasta √101≈10).
El bucle while(n%d==0) extrae todas las potencias del divisor actual.`,estrategia:"MEMORIZAR",razonEstrategia:"El patrón d*d<=n + while(n%d==0){imprimir;n/=d} + al_final_n>1_es_primo es la estructura clave. Memorizar con 225=3*3*5*5 como ejemplo de referencia.",relacionados:["add_prime_sum","pgcd","lcm"]},Gz={id:"ft_split",nombre:"ft_split",nivel:4,dificultad:"difícil",tipoEntrega:"funcion",archivosEsperados:["ft_split.c"],funcionesPermitidas:["malloc"],subject:`Assignment name  : ft_split
Expected files   : ft_split.c
Allowed functions: malloc
--------------------------------------------------------------------------------

Write a function that splits a string into an array of strings, using the
character c as the delimiter.

char	**ft_split(char *str, char c);

The array must end with a NULL pointer.

There should be no empty strings in the result.

If str is NULL, return NULL.

Example:
ft_split("hello world foo", ' ')  → {"hello", "world", "foo", NULL}
ft_split("hello::world", ':')     → {"hello", "world", NULL}
ft_split("  spaces  ", ' ')       → {"spaces", NULL}`,descripcion:"Función que divide un string por un delimitador y devuelve un array de strings (terminado en NULL). Requiere malloc para el array de punteros y para cada substring. Sin strings vacíos en el resultado.",palacio:{habitacion:"garaje",mueble:"sierra",personaje:"La Sierra Divisora",emoji:"🪚",historia:`En el garaje hay una Sierra que corta strings en trozos.
Le das un string y un carácter separador, y la Sierra lo divide en palabras.
El proceso tiene DOS pasadas:
PASADA 1: contar cuántas palabras hay (para malloc del array).
PASADA 2: para cada palabra, malloc de su longitud y copiar.
La Sierra ignora los separadores múltiples — sin strings vacíos.`,anclas:["Pasada 1: count_words(str,c) → contar palabras","malloc((words+1) * sizeof(char*)) → +1 para NULL final","Pasada 2: saltar separadores, calcular longitud de palabra, malloc+copiar","poner resultado[words] = NULL al final","si str==NULL → return NULL"]},herramientas:["strings"],formulaClave:{descripcion:"Dos pasadas: contar palabras → malloc array → extraer cada palabra",formula:"words=count(str,c); res=malloc((words+1)*ptr_size); for each word: skip_sep; get_len; malloc+copy; res[i]=word;",ejemplo:{entrada:'"hello world foo", sep=" "',calculo:'words=3; malloc(4 ptrs); "hello"→malloc(6)+"hello\\0"; "world"→6; "foo"→4; res[3]=NULL',resultado:'{"hello","world","foo",NULL}'}},versiones:[{id:"clasica",nombre:"Con count_words y extracción en bucle",descripcion:"Dos funciones auxiliares: count_words y extract_word. La más legible.",recomendada:!0,codigo:`#include <stdlib.h>

static int	count_words(char *str, char c)
{
	int	count;
	int	in_word;

	count = 0;
	in_word = 0;
	while (*str)
	{
		if (*str == c)
			in_word = 0;
		else if (!in_word)
		{
			count++;
			in_word = 1;
		}
		str++;
	}
	return (count);
}

static char	*extract_word(char *str, char c, int *i)
{
	char	*word;
	int		len;
	int		j;

	while (str[*i] == c)
		(*i)++;
	len = 0;
	while (str[*i + len] && str[*i + len] != c)
		len++;
	word = (char *)malloc(len + 1);
	if (!word)
		return (NULL);
	j = 0;
	while (j < len)
	{
		word[j] = str[*i + j];
		j++;
	}
	word[j] = '\\0';
	*i += len;
	return (word);
}

char	**ft_split(char *str, char c)
{
	char	**result;
	int		words;
	int		i;
	int		j;

	if (!str)
		return (NULL);
	words = count_words(str, c);
	result = (char **)malloc((words + 1) * sizeof(char *));
	if (!result)
		return (NULL);
	i = 0;
	j = 0;
	while (j < words)
	{
		result[j] = extract_word(str, c, &i);
		if (!result[j])
		{
			while (j > 0)
				free(result[--j]);
			free(result);
			return (NULL);
		}
		j++;
	}
	result[j] = NULL;
	return (result);
}`}],tests:[{id:"test_spaces",descripcion:'"hello world foo" por " " → 3 palabras',entrada:["hello world foo"," "],salida:`hello
world
foo
`,tipo:"normal"},{id:"test_colon",descripcion:'"hello::world" por ":" → 2 palabras',entrada:["hello::world",":"],salida:`hello
world
`,tipo:"normal"},{id:"test_leading_sep",descripcion:'"  spaces  " por " " → 1 palabra',entrada:["  spaces  "," "],salida:`spaces
`,tipo:"normal"},{id:"test_single",descripcion:'"hello" sin sep → 1 palabra',entrada:["hello"," "],salida:`hello
`,tipo:"normal"},{id:"test_no_sep",descripcion:"sep no aparece → string completo",entrada:["hello",":"],salida:`hello
`,tipo:"normal"}],gdbSteps:[{paso:1,titulo:'ft_split("hello world", " "): contar y extraer',codigo:`count_words("hello world", ' '):
  'h'..'o': in_word=1, count=1
  ' ': in_word=0
  'w'..'d': in_word=1, count=2
  → words=2

malloc(3 * sizeof(char*)) → result[3]

extract_word: skip ' ', len=5 ("hello"), malloc(6), copy "hello\\0"
  i=5
extract_word: skip ' ', i=6, len=5 ("world"), malloc(6), copy "world\\0"
result[2] = NULL`,variables:[{nombre:"result[0]",valor:'"hello"',cambio:!0,nota:""},{nombre:"result[1]",valor:'"world"',cambio:!0,nota:""},{nombre:"result[2]",valor:"NULL",cambio:!0,nota:"✓"}]}],trampas:[{severidad:"mortal",titulo:"Olvidar el NULL al final del array",descripcion:"El enunciado especifica que el array termina en NULL. Sin él, el código que usa el resultado no sabe dónde termina el array.",codigoMal:`// ❌ Sin NULL final
result = malloc(words * sizeof(char*));
// ... llenar result[0..words-1]
// result[words] no asignado → comportamiento undefined`,codigoBien:`// ✅ malloc words+1, asignar NULL al final
result = malloc((words + 1) * sizeof(char*));
// ...
result[words] = NULL;`},{severidad:"mortal",titulo:"No saltar separadores múltiples → strings vacíos",descripcion:'ft_split("a::b", ":") debe devolver {"a","b",NULL}, no {"a","","b",NULL}. Hay que saltar todos los separadores consecutivos.',codigoMal:`// ❌ Solo salta un separador → crea strings vacíos
while (str[i] != c) { ... }
i++;  // solo avanza uno`,codigoBien:`// ✅ Saltar todos los separadores consecutivos
while (str[i] == c)
    i++;`},{severidad:"warning",titulo:"No liberar en caso de malloc fallo (memory leak)",descripcion:"Si malloc falla a la mitad, liberar todo lo ya asignado antes de retornar NULL.",codigoMal:`// ❌ Si falla malloc de word[j], result y word[0..j-1] quedan sin liberar
if (!result[j]) return NULL;`,codigoBien:`// ✅ Liberar todo en caso de fallo
if (!result[j]) {
    while (j > 0) free(result[--j]);
    free(result);
    return NULL;
}`}],bajoCelCapot:`ft_split es una función de biblioteca fundamental en C — equivalente a split() en Python/JS.
La clave es que NO hay strings vacíos: separadores consecutivos o al inicio/fin se ignoran.
La función hace dos pasadas: contar → allocar → llenar.
El array de punteros más NULL final es el contrato estándar en C para arrays de strings.
Alternativa: una sola pasada si se puede malloc el máximo posible y luego realloc — pero dos pasadas es más limpio.`,estrategia:"MEMORIZAR",razonEstrategia:"Memorizar la estructura: count_words + malloc(n+1) + extract_word(con skip sep) + result[n]=NULL. Es el patrón más complejo del examen y aparece en proyectos reales.",relacionados:["ft_strdup","ft_range","epur_str"]},Kz={id:"sort_list",nombre:"sort_list",nivel:4,dificultad:"difícil",tipoEntrega:"funcion",archivosEsperados:["sort_list.c"],funcionesPermitidas:[],subject:`Assignment name  : sort_list
Expected files   : sort_list.c
Allowed functions: none
--------------------------------------------------------------------------------

Write a function that sorts a linked list of integers in ascending order,
using the bubble sort algorithm.

The linked list is defined as follows:
  typedef struct s_list
  {
    struct s_list *next;
    void          *data;
  } t_list;

The comparison function is provided as a parameter:
  t_list *sort_list(t_list *lst, int (*cmp)(void *, void *));

The cmp function returns a negative value if a < b, 0 if equal, positive if a > b.

The function must not create new nodes or allocate memory.
It must sort by swapping the DATA (not the nodes).`,descripcion:"Ordena una lista enlazada usando bubble sort intercambiando los DATA de los nodos (no los nodos en sí). Requiere comprender estructuras enlazadas y punteros a función.",palacio:{habitacion:"garaje",mueble:"nivel_burbuja",personaje:"El Nivel de Burbuja",emoji:"🫧",historia:`En el garaje hay un Nivel de Burbuja que ordena herramientas de menor a mayor.
El algoritmo: burbuja clásica. Recorre la lista comparando pares adyacentes.
Si cmp(a->data, b->data) > 0 → intercambiar los DATA (no los nodos).
Repetir hasta que no haya intercambios en una pasada completa.
Clave: solo se intercambia data, los punteros next permanecen igual.`,anclas:["swapped = 1 en el while externo — continuar mientras haya cambios","ptr = lst al inicio de cada pasada","si cmp(ptr->data, ptr->next->data) > 0 → swap data","tmp = ptr->data; ptr->data = ptr->next->data; ptr->next->data = tmp","parar al llegar a ptr->next == NULL"]},herramientas:["strings"],formulaClave:{descripcion:"Bubble sort en lista: swap DATA de nodos adyacentes si están desordenados",formula:"while(swapped){swapped=0;ptr=lst; while(ptr->next){if(cmp(ptr->data,ptr->next->data)>0){swap(ptr->data,ptr->next->data);swapped=1;}ptr=ptr->next;}}",ejemplo:{entrada:"lista: [3]->[1]->[2]->NULL, cmp=(a-b)",calculo:"Pasada1: 3>1→swap→[1,3,2]; 3>2→swap→[1,2,3]; swapped=1. Pasada2: no swap→swapped=0→fin",resultado:"[1]->[2]->[3]->NULL"}},versiones:[{id:"bubble_swap_data",nombre:"Bubble sort intercambiando data",descripcion:"El enfoque más directo y el esperado en el examen. Sin malloc, sin nuevos nodos.",recomendada:!0,codigo:`typedef struct s_list
{
	struct s_list	*next;
	void			*data;
}	t_list;

t_list	*sort_list(t_list *lst, int (*cmp)(void *, void *))
{
	t_list	*ptr;
	void	*tmp;
	int		swapped;

	if (!lst)
		return (NULL);
	swapped = 1;
	while (swapped)
	{
		swapped = 0;
		ptr = lst;
		while (ptr->next)
		{
			if (cmp(ptr->data, ptr->next->data) > 0)
			{
				tmp = ptr->data;
				ptr->data = ptr->next->data;
				ptr->next->data = tmp;
				swapped = 1;
			}
			ptr = ptr->next;
		}
	}
	return (lst);
}`}],tests:[{id:"test_3_1_2",descripcion:"[3,1,2] → [1,2,3]",entrada:["3","1","2"],salida:`1
2
3
`,tipo:"normal"},{id:"test_5_4_3_2_1",descripcion:"[5,4,3,2,1] → [1,2,3,4,5]",entrada:["5","4","3","2","1"],salida:`1
2
3
4
5
`,tipo:"normal"},{id:"test_ya_ordenado",descripcion:"[1,2,3] ya ordenado → [1,2,3]",entrada:["1","2","3"],salida:`1
2
3
`,tipo:"normal"},{id:"test_single",descripcion:"[42] → [42]",entrada:["42"],salida:`42
`,tipo:"edge"},{id:"test_two",descripcion:"[5,3] → [3,5]",entrada:["5","3"],salida:`3
5
`,tipo:"normal"}],gdbSteps:[{paso:1,titulo:"sort_list([3,1,2]): pasadas de bubble sort",codigo:`PASADA 1: swapped=0
ptr=[3→1→2]
  cmp(3,1)>0 → swap → [1,3,2], swapped=1
  ptr=[3→2]: cmp(3,2)>0 → swap → [1,2,3], swapped=1
  ptr=[3→NULL]: ptr->next=NULL → fin pasada

PASADA 2: swapped=0
  cmp(1,2)≤0 → no swap
  cmp(2,3)≤0 → no swap
  swapped=0 → while FALSE

return lst → [1→2→3→NULL]`,variables:[{nombre:"pasadas",valor:"2",cambio:!1,nota:""},{nombre:"resultado",valor:"[1,2,3]",cambio:!0,nota:"✓"}]}],trampas:[{severidad:"mortal",titulo:"Intercambiar nodos (next) en vez de DATA — estructura rota",descripcion:"El enunciado dice intercambiar los DATA. Si cambias los punteros next, la estructura de la lista se rompe y el resultado es incorrecto o provoca segfault.",codigoMal:`// ❌ Intercambiar nodos — estructura rota
t_list *tmp_node = ptr;
ptr = ptr->next;
// etc. — muy complejo y propenso a errores`,codigoBien:`// ✅ Solo intercambiar data — simple y correcto
tmp = ptr->data;
ptr->data = ptr->next->data;
ptr->next->data = tmp;`},{severidad:"mortal",titulo:"Olvidar el flag swapped → bucle infinito o O(n²) siempre",descripcion:"Sin el flag swapped, el while exterior nunca sabe si ya está ordenado y itera siempre n veces (ineficiente) o infinitamente.",codigoMal:`// ❌ Sin flag — itera siempre (o infinito si while(1))
int i = 0;
while (i < /* ¿cuántas veces? */) {
    // sin forma de saber si ya terminó`,codigoBien:`// ✅ Con swapped — para cuando no hubo intercambios
swapped = 1;
while (swapped) {
    swapped = 0;
    // ... si hay swap: swapped = 1
}`},{severidad:"warning",titulo:"No verificar ptr->next == NULL antes de comparar",descripcion:"El while interno debe ser while(ptr->next), no while(ptr). Si ptr->next es NULL, acceder a ptr->next->data provoca segfault.",codigoMal:`// ❌ Desborda al final
while (ptr) {
    cmp(ptr->data, ptr->next->data);  // ptr->next puede ser NULL`,codigoBien:`// ✅ Condición correcta
while (ptr->next) {
    cmp(ptr->data, ptr->next->data);  // ptr->next garantizado no-NULL`}],bajoCelCapot:`Bubble sort: O(n²) en el peor caso, O(n) en el mejor (ya ordenado con flag).
En listas enlazadas, no podemos indexar como en arrays, pero bubble sort es natural:
solo necesitamos acceder a nodos adyacentes (ptr y ptr->next).
Intercambiar data en vez de nodos es la clave: preserva la estructura de la lista,
evita el re-enlazado complejo de nodos y es la forma esperada en 42.
La función cmp es un puntero a función: cmp(a,b)<0 significa a<b.`,estrategia:"MEMORIZAR",razonEstrategia:"El patrón bubble sort con flag swapped + swap de data es la estructura completa. Memorizar: while(swapped){swapped=0; while(ptr->next){if(cmp>0){swap;swapped=1;} ptr=ptr->next;}}",relacionados:["ft_list_size","ft_split","pgcd"]},kg=[iz,rz,az,oz,sz,lz,cz,dz,uz,pz,mz,fz],Lg=[hz,gz,vz,bz,xz,yz,wz,jz,_z,zz,Sz,Ez,Nz,Cz,kz,Lz,Az],Ag=[Pz,Mz,Tz,Rz,Oz,Iz,Dz,Fz,Bz,Uz,Vz,$z,qz,Hz,Wz],Pg=[Zz,Gz,Kz],_d={1:kg,2:Lg,3:Ag,4:Pg},le=[...kg,...Lg,...Ag,...Pg],Qz=Object.fromEntries(le.map(e=>[e.id,e]));function Mg(e){return Qz[e]??null}function Yz(e){const t=le.findIndex(n=>n.id===e);return t===-1||t===le.length-1?null:le[t+1]}function Xz(e){const t=le.findIndex(n=>n.id===e);return t<=0?null:le[t-1]}function Jz(e){return _d[e]??[]}const eS=[{to:"/",icon:c_,label:"Inicio"},{to:"/palacio",icon:wd,label:"Palacio"},{to:"/herramientas",icon:yg,label:"Herramientas"},{to:"/examen",icon:i_,label:"Examen"},{to:"/progreso",icon:mg,label:"Progreso"}],tS=[{nivel:1,emoji:"🍳",room:"Cocina",total:12,to:"/ejercicios/1",color:"text-purple-600",activeBg:"bg-purple-50",activeBar:"bg-purple-500"},{nivel:2,emoji:"🛋️",room:"Salón",total:17,to:"/ejercicios/2",color:"text-green-600",activeBg:"bg-green-50",activeBar:"bg-green-500"},{nivel:3,emoji:"🛏️",room:"Dormitorio",total:15,to:"/ejercicios/3",color:"text-orange-600",activeBg:"bg-orange-50",activeBar:"bg-orange-500"},{nivel:4,emoji:"🔧",room:"Garaje",total:3,to:"/ejercicios/4",color:"text-red-600",activeBg:"bg-red-50",activeBar:"bg-red-500"}];function nS(){const[e,t]=x.useState(!1),n=xe(i=>i.ejercicios);return s.jsxs(R.aside,{animate:{width:e?64:240},transition:{duration:.2,ease:"easeInOut"},className:"relative flex flex-col h-screen bg-white border-r border-[#E4E4E7] overflow-hidden shrink-0",children:[s.jsx("div",{className:"flex items-center h-14 px-4 border-b border-[#E4E4E7]",children:s.jsxs("div",{className:"flex items-center gap-2.5 min-w-0",children:[s.jsx("div",{className:"w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-white font-bold text-sm shrink-0",children:"42"}),s.jsx(ke,{initial:!1,children:!e&&s.jsx(R.span,{initial:{opacity:0,width:0},animate:{opacity:1,width:"auto"},exit:{opacity:0,width:0},transition:{duration:.15},className:"font-semibold text-zinc-900 whitespace-nowrap overflow-hidden",children:"Prep"})})]})}),s.jsxs("nav",{className:"flex flex-col gap-0.5 p-2 flex-1 overflow-y-auto",children:[eS.map(({to:i,icon:r,label:a})=>s.jsxs($u,{to:i,end:i==="/",className:({isActive:o})=>P("flex items-center gap-3 px-2.5 py-2 rounded-lg text-sm font-medium transition-colors duration-150",o?"bg-zinc-100 text-zinc-900":"text-zinc-500 hover:text-zinc-800 hover:bg-zinc-50"),title:e?a:void 0,children:[s.jsx(r,{size:18,className:"shrink-0"}),s.jsx(ke,{initial:!1,children:!e&&s.jsx(R.span,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.1},className:"whitespace-nowrap",children:a})})]},i)),s.jsxs("div",{className:"mt-3 mb-1",children:[s.jsx(ke,{initial:!1,children:!e&&s.jsx(R.p,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"px-2.5 text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-1",children:"Niveles"})}),e&&s.jsx("div",{className:"border-t border-[#E4E4E7] mx-2 my-2"})]}),tS.map(({nivel:i,emoji:r,room:a,total:o,to:l,color:c,activeBg:d,activeBar:u})=>{const p=_d[i]??[],m=p.filter(b=>{var y;return((y=n[b.id])==null?void 0:y.estado)==="dominado"}).length,g=Math.round(m/(p.length||1)*100);return s.jsxs($u,{to:l,className:({isActive:b})=>P("flex items-center gap-3 px-2.5 py-2 rounded-lg transition-colors duration-150 group",b?d:"hover:bg-zinc-50"),title:e?`Nivel ${i} — ${a}`:void 0,children:[s.jsx("span",{className:"text-base shrink-0",children:r}),s.jsx(ke,{initial:!1,children:!e&&s.jsxs(R.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"flex-1 min-w-0",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("span",{className:P("text-sm font-medium",c),children:a}),s.jsx("span",{className:"text-xs text-zinc-400",children:o})]}),s.jsx("div",{className:"mt-1 h-1 rounded-full bg-zinc-100 overflow-hidden",children:s.jsx("div",{className:P("h-full rounded-full transition-all duration-500",u),style:{width:`${g}%`}})})]})})]},i)})]}),s.jsx("div",{className:"p-2 border-t border-[#E4E4E7]",children:s.jsx("button",{onClick:()=>t(i=>!i),className:"w-full flex items-center justify-center gap-2 py-1.5 px-2 rounded-lg text-zinc-400 hover:text-zinc-600 hover:bg-zinc-50 transition-colors duration-150 text-sm",title:e?"Expandir sidebar":"Colapsar sidebar",children:e?s.jsx(Or,{size:16}):s.jsxs(s.Fragment,{children:[s.jsx(vd,{size:16}),s.jsx("span",{className:"text-xs",children:"Colapsar"})]})})})]})}const Jp=30,em={"/":"Inicio","/palacio":"Palacio de la Memoria","/herramientas":"Herramientas","/examen":"Simulador de Examen","/progreso":"Progreso","/ejercicios/1":"Cocina — Nivel 1","/ejercicios/2":"Salón — Nivel 2","/ejercicios/3":"Dormitorio — Nivel 3","/ejercicios/4":"Garaje — Nivel 4"};function iS(e){if(em[e])return[{label:em[e],to:e}];if(e.startsWith("/ejercicio/")){const t=e.split("/").pop();return[{label:"Ejercicios",to:null},{label:t,to:e}]}if(e.startsWith("/practicar/")){const t=e.split("/").pop();return[{label:"Práctica",to:null},{label:t,to:e}]}return[{label:"Inicio",to:"/"}]}const tm=["ft_strlen","ft_swap","ft_putstr","ft_strcpy","fizzbuzz","first_word","rev_print","rotone","rot_13","repeat_alpha","search_and_replace","ulstr","alpha_mirror","camel_to_snake","do_op","ft_atoi","ft_strcmp","ft_strcspn","ft_strdup","ft_strpbrk","ft_strrev","inter","is_power_of_2","last_word","print_bits","reverse_bits","swap_bits","union","wdmatch","paramsum","tab_mult","epur_str","expand_str","add_prime_sum","ft_range","ft_rrange","ft_list_size","hidenp","lcm","pgcd","print_hex","ft_atoi_base","str_capitalizer","rstr_capitalizer","fprime","ft_split","sort_list"];function rS(){const{pathname:e}=pn(),t=wt(),n=xe(c=>c.ejercicios),i=xe(c=>c.racha),r=Object.values(n).filter(c=>c.estado==="dominado").length,a=Math.round(r/Jp*100),o=iS(e);function l(){const c=tm[Math.floor(Math.random()*tm.length)];t(`/practicar/${c}`)}return s.jsxs("header",{className:"h-14 shrink-0 border-b border-[#E4E4E7] bg-white flex items-center px-6 gap-4",children:[s.jsx("nav",{className:"flex items-center gap-1 text-sm flex-1 min-w-0",children:o.map((c,d)=>s.jsxs("span",{className:"flex items-center gap-1",children:[d>0&&s.jsx(Or,{size:14,className:"text-zinc-300 shrink-0"}),c.to?s.jsx(we,{to:c.to,className:"text-zinc-500 hover:text-zinc-900 transition-colors truncate",children:c.label}):s.jsx("span",{className:"text-zinc-400 truncate",children:c.label})]},d))}),s.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[s.jsxs("div",{className:"hidden sm:flex items-center gap-2",children:[s.jsx("div",{className:"w-24 h-1.5 bg-zinc-100 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-zinc-800 rounded-full transition-all duration-500",style:{width:`${a}%`}})}),s.jsxs("span",{className:"text-xs text-zinc-500 whitespace-nowrap",children:[s.jsx("span",{className:"font-semibold text-zinc-800",children:r}),"/",Jp]})]}),i>0&&s.jsxs("div",{className:"flex items-center gap-1 px-2 py-1 rounded-full bg-orange-50 border border-orange-200",children:[s.jsx(Io,{size:13,className:"text-orange-500"}),s.jsx("span",{className:"text-xs font-semibold text-orange-700",children:i})]})]}),s.jsxs("button",{onClick:l,className:`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                   bg-zinc-900 text-white text-xs font-medium
                   hover:bg-zinc-700 transition-colors duration-150`,children:[s.jsx(Fo,{size:13}),s.jsx("span",{className:"hidden sm:inline",children:"Examen aleatorio"}),s.jsx("span",{className:"sm:hidden",children:"Aleatorio"})]})]})}function aS(){return s.jsxs("div",{className:"flex h-screen bg-[#FAFAFA] overflow-hidden",children:[s.jsx(nS,{}),s.jsxs("div",{className:"flex-1 flex flex-col min-w-0 overflow-hidden",children:[s.jsx(rS,{}),s.jsx("main",{className:"flex-1 overflow-y-auto",children:s.jsx(R.div,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},transition:{duration:.18,ease:"easeOut"},className:"h-full",children:s.jsx(vx,{})},location.pathname)})]})]})}const nm=[{nivel:1,emoji:"🍳",nombre:"Cocina",color:"purple",total:12,to:"/ejercicios/1",bg:"bg-purple-50",border:"border-purple-200",text:"text-purple-700",bar:"bg-purple-500",ring:"ring-purple-100"},{nivel:2,emoji:"🛋️",nombre:"Salón",color:"green",total:17,to:"/ejercicios/2",bg:"bg-green-50",border:"border-green-200",text:"text-green-700",bar:"bg-green-500",ring:"ring-green-100"},{nivel:3,emoji:"🛏️",nombre:"Dormitorio",color:"orange",total:15,to:"/ejercicios/3",bg:"bg-orange-50",border:"border-orange-200",text:"text-orange-700",bar:"bg-orange-500",ring:"ring-orange-100"},{nivel:4,emoji:"🔧",nombre:"Garaje",color:"red",total:3,to:"/ejercicios/4",bg:"bg-red-50",border:"border-red-200",text:"text-red-700",bar:"bg-red-500",ring:"ring-red-100"}],oS=[{label:"Examen aleatorio",icon:Fo,to:"/examen",bg:"bg-zinc-900",text:"text-white",primary:!0},{label:"Flash Cards",icon:hd,to:"/palacio?mode=flashcards",bg:"bg-purple-50",text:"text-purple-700",primary:!1},{label:"Herramientas",icon:yg,to:"/herramientas",bg:"bg-blue-50",text:"text-blue-700",primary:!1},{label:"Ver progreso",icon:mg,to:"/progreso",bg:"bg-green-50",text:"text-green-700",primary:!1}],Gl={dominado:{bg:"bg-green-500",ring:"ring-green-200",label:"Dominado"},practicando:{bg:"bg-orange-400",ring:"ring-orange-200",label:"Practicando"},estudiando:{bg:"bg-blue-400",ring:"ring-blue-200",label:"Estudiando"},no_iniciado:{bg:"bg-zinc-200",ring:"ring-zinc-100",label:"Sin iniciar"}},im={hidden:{},visible:{transition:{staggerChildren:.07}}},sS={hidden:{opacity:0,y:12},visible:{opacity:1,y:0,transition:{duration:.25,ease:"easeOut"}}};function lS({room:e,dominados:t}){const n=Math.round(t/e.total*100);return s.jsx(R.div,{variants:sS,children:s.jsxs(we,{to:e.to,className:P("flex flex-col gap-3 p-5 rounded-xl border cursor-pointer","transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover",e.bg,e.border),children:[s.jsxs("div",{className:"flex items-start justify-between",children:[s.jsx("span",{className:"text-3xl",children:e.emoji}),s.jsxs("span",{className:P("text-xs font-semibold px-2 py-0.5 rounded-full bg-white/70",e.text),children:["Nivel ",e.nivel]})]}),s.jsxs("div",{children:[s.jsx("p",{className:P("font-semibold",e.text),children:e.nombre}),s.jsxs("p",{className:"text-xs text-zinc-500 mt-0.5",children:[t,"/",e.total," ejercicios"]})]}),s.jsx("div",{className:"h-1.5 bg-white/70 rounded-full overflow-hidden",children:s.jsx(R.div,{className:P("h-full rounded-full",e.bar),initial:{width:0},animate:{width:`${n}%`},transition:{duration:.6,ease:"easeOut",delay:.3}})})]})})}function cS({exercise:e,estado:t}){const n=Gl[t]??Gl.no_iniciado;return s.jsxs(we,{to:`/ejercicio/${e.id}`,title:`${e.nombre} — ${n.label}`,className:P("group flex flex-col items-center justify-center gap-1 p-2 rounded-lg","border border-transparent transition-all duration-150","hover:bg-white hover:border-zinc-200 hover:shadow-card"),children:[s.jsx("span",{className:"text-xl leading-none",children:e.palacio.emoji}),s.jsx("span",{className:"text-[10px] text-zinc-500 text-center leading-tight truncate w-full text-center",children:e.nombre.replace("ft_","").replace("_"," ")}),s.jsx("span",{className:P("w-1.5 h-1.5 rounded-full",n.bg)})]})}function dS({exercise:e,progreso:t}){const n=t.ultimaVez?Math.floor((Date.now()-new Date(t.ultimaVez))/864e5):null;return s.jsxs(we,{to:`/practicar/${e.id}`,className:"flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-50 transition-colors group",children:[s.jsx("span",{className:"text-2xl",children:e.palacio.emoji}),s.jsxs("div",{className:"flex-1 min-w-0",children:[s.jsx("p",{className:"text-sm font-medium text-zinc-800 truncate",children:e.nombre}),s.jsx("p",{className:"text-xs text-zinc-400",children:n!==null?`Hace ${n} día${n!==1?"s":""}`:"Pendiente de repaso"})]}),s.jsx("span",{className:"text-xs font-medium px-2 py-1 rounded-md bg-orange-50 text-orange-700 shrink-0",children:"Repasar"})]})}function uS(){const e=wt(),t=xe(l=>l.ejercicios),n=xe(l=>l.racha),i=x.useMemo(()=>Object.values(t).filter(l=>l.estado==="dominado").length,[t]),r=x.useMemo(()=>{const l={1:0,2:0,3:0,4:0};return le.forEach(c=>{const d=t[c.id];(d==null?void 0:d.estado)==="dominado"&&l[c.nivel]++}),l},[t]),a=x.useMemo(()=>{const l=new Date;return le.filter(c=>{const d=t[c.id];return(d==null?void 0:d.proximaRepasion)&&new Date(d.proximaRepasion)<=l}).slice(0,5)},[t]);function o(){const l=le[Math.floor(Math.random()*le.length)].id;e(`/practicar/${l}`)}return s.jsxs("div",{className:"max-w-5xl mx-auto px-6 py-8 space-y-10",children:[s.jsxs(R.section,{initial:{opacity:0,y:-8},animate:{opacity:1,y:0},transition:{duration:.25},className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",children:[s.jsxs("div",{children:[s.jsx("h1",{className:"text-2xl font-bold text-zinc-900",children:"Hola, ¿listo para el examen? 👋"}),s.jsxs("p",{className:"text-zinc-500 mt-1",children:[s.jsx("span",{className:"font-semibold text-zinc-800",children:i}),"/47 ejercicios dominados"]})]}),s.jsxs("div",{className:"flex items-center gap-3",children:[n>0&&s.jsxs("div",{className:"flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200",children:[s.jsx(Io,{size:15,className:"text-orange-500"}),s.jsxs("span",{className:"text-sm font-semibold text-orange-700",children:[n," días"]})]}),s.jsxs("button",{onClick:o,className:"flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-700 transition-colors",children:[s.jsx(Fo,{size:15}),"Examen aleatorio"]})]})]}),s.jsxs("section",{children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("h2",{className:"text-base font-semibold text-zinc-800",children:"🏠 Palacio de la Memoria"}),s.jsxs(we,{to:"/palacio",className:"text-xs text-zinc-400 hover:text-zinc-700 flex items-center gap-1 transition-colors",children:["Ver mapa ",s.jsx(Or,{size:13})]})]}),s.jsx(R.div,{className:"grid grid-cols-2 lg:grid-cols-4 gap-3",variants:im,initial:"hidden",animate:"visible",children:nm.map(l=>s.jsx(lS,{room:l,dominados:r[l.nivel]},l.nivel))})]}),s.jsxs("section",{children:[s.jsx("h2",{className:"text-base font-semibold text-zinc-800 mb-3",children:"⏰ Próximos a repasar"}),s.jsx("div",{className:"card divide-y divide-zinc-100",children:a.length===0?s.jsxs("div",{className:"p-6 text-center",children:[s.jsx("p",{className:"text-2xl mb-2",children:"🎉"}),s.jsx("p",{className:"text-sm font-medium text-zinc-700",children:"¡Al día con todo!"}),s.jsx("p",{className:"text-xs text-zinc-400 mt-1",children:"No tienes ejercicios pendientes de repaso"})]}):a.map(l=>s.jsx(dS,{exercise:l,progreso:t[l.id]},l.id))})]}),s.jsxs("section",{children:[s.jsx("h2",{className:"text-base font-semibold text-zinc-800 mb-3",children:"⚡ Accesos rápidos"}),s.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:oS.map(({label:l,icon:c,to:d,bg:u,text:p,primary:m})=>s.jsxs(we,{to:d,className:P("flex flex-col items-center gap-2 p-4 rounded-xl border border-transparent","font-medium text-sm text-center","transition-all duration-150 hover:-translate-y-0.5 hover:shadow-card-hover",m?"bg-zinc-900 text-white border-zinc-800":`${u} ${p} border-zinc-100`),children:[s.jsx(c,{size:20}),l]},d))})]}),s.jsxs("section",{children:[s.jsx("h2",{className:"text-base font-semibold text-zinc-800 mb-3",children:"📋 Todos los ejercicios"}),s.jsx("div",{className:"card p-4 space-y-4",children:nm.map(l=>s.jsxs("div",{children:[s.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[s.jsx("span",{className:P("w-2 h-2 rounded-full",l.bar)}),s.jsxs("span",{className:"text-xs font-semibold text-zinc-500 uppercase tracking-wide",children:[l.emoji," ",l.nombre]})]}),s.jsx(R.div,{className:"grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-1",variants:im,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:(_d[l.nivel]??[]).map(c=>{var d;return s.jsx(cS,{exercise:c,estado:((d=t[c.id])==null?void 0:d.estado)??"no_iniciado"},c.id)})})]},l.nivel))}),s.jsx("div",{className:"flex items-center gap-4 mt-3 px-1",children:Object.entries(Gl).map(([l,c])=>s.jsxs("span",{className:"flex items-center gap-1.5 text-xs text-zinc-400",children:[s.jsx("span",{className:P("w-2 h-2 rounded-full",c.bg)}),c.label]},l))})]})]})}const pS={1:{label:"Nivel 1",room:"Cocina",bg:"bg-purple-100",text:"text-purple-700",border:"border-purple-200",dot:"bg-purple-500"},2:{label:"Nivel 2",room:"Salón",bg:"bg-green-100",text:"text-green-700",border:"border-green-200",dot:"bg-green-500"},3:{label:"Nivel 3",room:"Dormitorio",bg:"bg-orange-100",text:"text-orange-700",border:"border-orange-200",dot:"bg-orange-500"},4:{label:"Nivel 4",room:"Garaje",bg:"bg-red-100",text:"text-red-700",border:"border-red-200",dot:"bg-red-500"}},mS={sm:"text-xs px-2 py-0.5",md:"text-xs px-2.5 py-1",lg:"text-sm px-3 py-1.5"};function zd({nivel:e,tamaño:t="md",showRoom:n=!1,className:i=""}){const r=pS[e];return r?s.jsxs("span",{className:P("inline-flex items-center gap-1.5 rounded-full font-semibold border",r.bg,r.text,r.border,mS[t],i),children:[s.jsx("span",{className:P("w-1.5 h-1.5 rounded-full",r.dot)}),n?r.room:r.label]}):null}const fS={1:{nombre:"Cocina",emoji:"🍳",desc:"Fundamentos — strings, ASCII, argc"},2:{nombre:"Salón",emoji:"🛋️",desc:"Intermedio — bits, manipulación de strings"},3:{nombre:"Dormitorio",emoji:"🛏️",desc:"Avanzado — malloc, lógica compleja"},4:{nombre:"Garaje",emoji:"🔧",desc:"Experto — algoritmos, listas enlazadas"}},hS={dominado:{label:"Dominado",bg:"bg-green-100",text:"text-green-700"},practicando:{label:"Practicando",bg:"bg-orange-100",text:"text-orange-700"},estudiando:{label:"Estudiando",bg:"bg-blue-100",text:"text-blue-700"},no_iniciado:{label:"Sin iniciar",bg:"bg-zinc-100",text:"text-zinc-500"}},gS={fácil:"bg-green-50 text-green-600 border-green-200",medio:"bg-orange-50 text-orange-600 border-orange-200",difícil:"bg-red-50 text-red-600 border-red-200"};function vS(){const{nivel:e}=Wc(),t=Number(e),n=Jz(t),i=xe(o=>o.ejercicios),r=fS[t];if(!r||!n.length)return s.jsxs("div",{className:"p-8 text-center",children:[s.jsx("p",{className:"text-4xl mb-3",children:"😕"}),s.jsx("p",{className:"text-lg font-semibold text-zinc-800",children:"Nivel no encontrado"}),s.jsx(we,{to:"/",className:"btn-primary mt-4 inline-flex",children:"← Volver al inicio"})]});const a=n.filter(o=>{var l;return((l=i[o.id])==null?void 0:l.estado)==="dominado"}).length;return s.jsxs("div",{className:"max-w-4xl mx-auto px-6 py-6 space-y-6",children:[s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("span",{className:"text-5xl",children:r.emoji}),s.jsxs("div",{children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("h1",{className:"text-2xl font-bold text-zinc-900",children:r.nombre}),s.jsx(zd,{nivel:t})]}),s.jsx("p",{className:"text-sm text-zinc-500 mt-0.5",children:r.desc})]}),s.jsxs("div",{className:"ml-auto text-right",children:[s.jsxs("p",{className:"text-2xl font-bold text-zinc-900",children:[a,"/",n.length]}),s.jsx("p",{className:"text-xs text-zinc-400",children:"dominados"})]})]}),s.jsx("div",{className:"h-2 rounded-full bg-zinc-100 overflow-hidden",children:s.jsx(R.div,{className:"h-full rounded-full bg-zinc-800",initial:{width:0},animate:{width:`${Math.round(a/n.length*100)}%`},transition:{duration:.6,ease:"easeOut"}})}),s.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",children:n.map((o,l)=>{var p,m,g;const c=((p=i[o.id])==null?void 0:p.estado)??"no_iniciado",d=hS[c],u=o.subject&&o.subject.length>0;return s.jsx(R.div,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{delay:l*.04},children:s.jsxs(we,{to:`/ejercicio/${o.id}`,className:"card p-4 flex items-start gap-3 hover:shadow-card-hover transition-shadow block",children:[s.jsx("span",{className:"text-3xl shrink-0",children:((m=o.palacio)==null?void 0:m.emoji)||"❓"}),s.jsxs("div",{className:"min-w-0 flex-1",children:[s.jsxs("div",{className:"flex items-start justify-between gap-2",children:[s.jsx("p",{className:"font-mono font-semibold text-sm text-zinc-900 truncate",children:o.nombre}),!u&&s.jsx("span",{className:"text-[10px] text-zinc-300 shrink-0",children:"🚧"})]}),s.jsx("p",{className:"text-xs text-zinc-500 mt-0.5 truncate",children:((g=o.palacio)==null?void 0:g.personaje)||"—"}),s.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[s.jsx("span",{className:P("text-[10px] px-1.5 py-0.5 rounded border font-medium",gS[o.dificultad]),children:o.dificultad}),s.jsx("span",{className:P("text-[10px] px-1.5 py-0.5 rounded font-medium",d.bg,d.text),children:d.label})]})]})]})},o.id)})})]})}const Tg=e=>`42prep-variants-${e}`;function bS(e){try{const t=localStorage.getItem(Tg(e));return t?JSON.parse(t):[]}catch{return[]}}function rm(e,t){try{localStorage.setItem(Tg(e),JSON.stringify(t))}catch{}}function Rg(e){const[t,n]=x.useState(()=>bS(e));return{variants:t,saveVariant:(a,o,l)=>{const d=[{id:Date.now().toString(),nombre:a.trim(),descripcion:(o||"").trim(),codigo:l,fechaGuardado:new Date().toISOString()},...t];n(d),rm(e,d)},deleteVariant:a=>{const o=t.filter(l=>l.id!==a);n(o),rm(e,o)}}}function xS({subject:e="",funcionesPermitidas:t=[],archivosEsperados:n=[]}){const[i,r]=x.useState(!1);function a(){navigator.clipboard.writeText(e),r(!0),setTimeout(()=>r(!1),2e3)}return e?s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{className:"relative group",children:[s.jsx("div",{className:"terminal-box text-xs leading-relaxed",children:e}),s.jsx("button",{onClick:a,className:`absolute top-2 right-2 flex items-center gap-1 px-2 py-1 rounded
                     bg-white/10 text-zinc-400 hover:text-white text-xs
                     opacity-0 group-hover:opacity-100 transition-all duration-150`,children:i?s.jsxs(s.Fragment,{children:[s.jsx(Ro,{size:11})," Copiado"]}):s.jsxs(s.Fragment,{children:[s.jsx(yd,{size:11})," Copiar"]})})]}),s.jsxs("div",{className:"flex flex-wrap gap-2",children:[n.map(o=>s.jsxs("span",{className:`inline-flex items-center gap-1 px-2.5 py-1 rounded-md
                                   bg-blue-50 text-blue-700 text-xs font-mono border border-blue-200`,children:[s.jsx(a_,{size:11})," ",o]},o)),t.map(o=>s.jsxs("span",{className:"anchor-chip",children:[o,"()"]},o))]})]}):s.jsxs("div",{className:"py-10 text-center text-zinc-400",children:[s.jsx("p",{className:"text-3xl mb-2",children:"🚧"}),s.jsx("p",{className:"text-sm",children:"Subject no disponible todavía"})]})}function yS({anclas:e=[],className:t=""}){return e.length?s.jsx(R.div,{className:P("flex flex-wrap gap-2",t),variants:{visible:{transition:{staggerChildren:.08}}},initial:"hidden",animate:"visible",children:e.map((n,i)=>s.jsx(R.span,{variants:{hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1,transition:{type:"spring",stiffness:300,damping:20}}},whileHover:{scale:1.05},className:"anchor-chip cursor-default",children:n},i))}):null}const wS={cocina:{border:"border-purple-400",bg:"bg-purple-50"},salón:{border:"border-green-400",bg:"bg-green-50"},dormitorio:{border:"border-orange-400",bg:"bg-orange-50"},garaje:{border:"border-red-400",bg:"bg-red-50"}};function jS({palacio:e={},relacionados:t=[]}){var i;if(!(e!=null&&e.historia))return s.jsxs("div",{className:"py-10 text-center text-zinc-400",children:[s.jsx("p",{className:"text-3xl mb-2",children:"🚧"}),s.jsx("p",{className:"text-sm",children:"Historia no disponible todavía"})]});const n=wS[e.habitacion]??{border:"border-zinc-300",bg:"bg-zinc-50"};return s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:P("border-l-4 rounded-r-xl px-5 py-4",n.border,n.bg),children:[s.jsxs("div",{className:"flex items-start gap-3 mb-3",children:[s.jsx("span",{className:"text-5xl leading-none shrink-0",children:e.emoji}),s.jsxs("div",{children:[s.jsx("p",{className:"font-bold text-zinc-900 text-base",children:e.personaje}),s.jsxs("p",{className:"text-xs text-zinc-500 mt-0.5",children:["📍 ",e.habitacion,e.mueble?` · ${e.mueble}`:""]})]})]}),s.jsx("p",{className:"text-sm text-zinc-700 leading-relaxed whitespace-pre-line",children:e.historia})]}),((i=e.anclas)==null?void 0:i.length)>0&&s.jsxs("div",{children:[s.jsx("p",{className:"text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-2",children:"⚓ Anclas mnemotécnicas"}),s.jsx(yS,{anclas:e.anclas})]}),t.length>0&&s.jsxs("div",{children:[s.jsx("p",{className:"text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-2",children:"🔗 Ejercicios relacionados"}),s.jsx("div",{className:"flex flex-wrap gap-2",children:t.map(r=>s.jsx(we,{to:`/ejercicio/${r}`,className:`text-xs px-2.5 py-1 rounded-md border border-zinc-200
                           hover:bg-zinc-50 text-zinc-600 font-mono transition-colors`,children:r},r))})]}),s.jsxs(we,{to:"/palacio",className:`inline-flex items-center gap-1.5 text-sm text-zinc-400
                                      hover:text-zinc-700 transition-colors`,children:[s.jsx(wd,{size:14})," Ver en el Palacio de la Memoria"]})]})}const Ti=e=>({hidden:{opacity:0,y:10},visible:{opacity:1,y:0,transition:{delay:e,duration:.3,ease:"easeOut"}}});function _S({formulaClave:e}){if(!(e!=null&&e.formula))return s.jsxs("div",{className:"py-10 text-center text-zinc-400",children:[s.jsx("p",{className:"text-3xl mb-2",children:"🚧"}),s.jsx("p",{className:"text-sm",children:"Fórmula no disponible todavía"})]});const{descripcion:t,formula:n,ejemplo:i,tablaASCII:r}=e;return s.jsxs("div",{className:"space-y-4",children:[s.jsxs(R.div,{className:"card p-6 text-center",initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.3},children:[t&&s.jsx("p",{className:"text-xs text-zinc-400 mb-3 uppercase tracking-wide",children:t}),s.jsx("p",{className:"text-3xl font-mono font-bold text-zinc-900 tracking-tight",children:n})]}),i&&s.jsxs("div",{className:"card p-5",children:[s.jsx("p",{className:"text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-4",children:"Ejemplo paso a paso"}),s.jsxs("div",{className:"flex items-end gap-3 flex-wrap",children:[s.jsxs(R.div,{variants:Ti(0),initial:"hidden",animate:"visible",className:"text-center",children:[s.jsx("p",{className:"text-[10px] text-zinc-400 mb-1",children:"Entrada"}),s.jsx("span",{className:`inline-block px-4 py-2.5 rounded-xl font-mono font-bold text-sm
                               bg-blue-50 text-blue-700 border border-blue-200`,children:i.entrada})]}),s.jsx(R.span,{variants:Ti(.2),initial:"hidden",animate:"visible",className:"text-xl font-bold text-zinc-300 mb-2.5",children:"→"}),s.jsxs(R.div,{variants:Ti(.4),initial:"hidden",animate:"visible",className:"text-center",children:[s.jsx("p",{className:"text-[10px] text-zinc-400 mb-1",children:"Cálculo"}),s.jsx("span",{className:`inline-block px-4 py-2.5 rounded-xl font-mono text-sm
                               bg-zinc-50 text-zinc-700 border border-zinc-200`,children:i.calculo})]}),s.jsx(R.span,{variants:Ti(.6),initial:"hidden",animate:"visible",className:"text-xl font-bold text-zinc-300 mb-2.5",children:"="}),s.jsxs(R.div,{variants:Ti(.8),initial:"hidden",animate:"visible",className:"text-center",children:[s.jsx("p",{className:"text-[10px] text-zinc-400 mb-1",children:"Resultado"}),s.jsx("span",{className:`inline-block px-4 py-2.5 rounded-xl font-mono font-bold text-sm
                               bg-green-50 text-green-700 border border-green-200`,children:i.resultado})]})]})]}),(r==null?void 0:r.length)>0&&s.jsxs("div",{className:"card overflow-hidden",children:[s.jsx("p",{className:"text-xs font-semibold text-zinc-500 uppercase tracking-wide px-4 pt-4 pb-2",children:"Valores ASCII clave"}),s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full text-sm",children:[s.jsx("thead",{className:"bg-zinc-50 border-y border-zinc-100",children:s.jsx("tr",{children:["Char","ASCII","Cálculo","→ Repeticiones"].map(a=>s.jsx("th",{className:"px-4 py-2 text-left text-xs font-semibold text-zinc-500",children:a},a))})}),s.jsx("tbody",{className:"divide-y divide-zinc-100",children:r.map((a,o)=>s.jsxs(R.tr,{className:"hover:bg-zinc-50 transition-colors",initial:{opacity:0,x:-6},animate:{opacity:1,x:0},transition:{delay:o*.06,duration:.2},children:[s.jsxs("td",{className:"px-4 py-2.5 font-mono font-bold text-zinc-900 text-base",children:["'",a.char,"'"]}),s.jsx("td",{className:"px-4 py-2.5 font-mono text-zinc-500",children:a.ascii}),s.jsx("td",{className:"px-4 py-2.5 font-mono text-blue-600",children:a.calculo}),s.jsx("td",{className:"px-4 py-2.5",children:s.jsxs("span",{className:`inline-flex items-center px-2.5 py-1 rounded-full
                                       bg-green-50 text-green-700 text-xs font-bold border border-green-200`,children:[a.repeat,"×"]})})]},a.char))})]})})]})]})}function am(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}function zS(e){if(Array.isArray(e))return e}function SS(e,t,n){return(t=PS(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ES(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var i,r,a,o,l=[],c=!0,d=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(c=(i=a.call(n)).done)&&(l.push(i.value),l.length!==t);c=!0);}catch(u){d=!0,r=u}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(d)throw r}}return l}}function NS(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function om(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,i)}return n}function sm(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?om(Object(n),!0).forEach(function(i){SS(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):om(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function CS(e,t){if(e==null)return{};var n,i,r=kS(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function kS(e,t){if(e==null)return{};var n={};for(var i in e)if({}.hasOwnProperty.call(e,i)){if(t.indexOf(i)!==-1)continue;n[i]=e[i]}return n}function LS(e,t){return zS(e)||ES(e,t)||MS(e,t)||NS()}function AS(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function PS(e){var t=AS(e,"string");return typeof t=="symbol"?t:t+""}function MS(e,t){if(e){if(typeof e=="string")return am(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?am(e,t):void 0}}function TS(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function lm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,i)}return n}function cm(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?lm(Object(n),!0).forEach(function(i){TS(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):lm(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function RS(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduceRight(function(r,a){return a(r)},i)}}function Ui(e){return function t(){for(var n=this,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return r.length>=e.length?e.apply(this,r):function(){for(var o=arguments.length,l=new Array(o),c=0;c<o;c++)l[c]=arguments[c];return t.apply(n,[].concat(r,l))}}}function ro(e){return{}.toString.call(e).includes("Object")}function OS(e){return!Object.keys(e).length}function Sr(e){return typeof e=="function"}function IS(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function DS(e,t){return ro(t)||rn("changeType"),Object.keys(t).some(function(n){return!IS(e,n)})&&rn("changeField"),t}function FS(e){Sr(e)||rn("selectorType")}function BS(e){Sr(e)||ro(e)||rn("handlerType"),ro(e)&&Object.values(e).some(function(t){return!Sr(t)})&&rn("handlersType")}function US(e){e||rn("initialIsRequired"),ro(e)||rn("initialType"),OS(e)&&rn("initialContent")}function VS(e,t){throw new Error(e[t]||e.default)}var $S={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},rn=Ui(VS)($S),sa={changes:DS,selector:FS,handler:BS,initial:US};function qS(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};sa.initial(e),sa.handler(t);var n={current:e},i=Ui(ZS)(n,t),r=Ui(WS)(n),a=Ui(sa.changes)(e),o=Ui(HS)(n);function l(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(u){return u};return sa.selector(d),d(n.current)}function c(d){RS(i,r,a,o)(d)}return[l,c]}function HS(e,t){return Sr(t)?t(e.current):t}function WS(e,t){return e.current=cm(cm({},e.current),t),t}function ZS(e,t,n){return Sr(t)?t(e.current):Object.keys(n).forEach(function(i){var r;return(r=t[i])===null||r===void 0?void 0:r.call(t,e.current[i])}),n}var GS={create:qS},KS={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function QS(e){return function t(){for(var n=this,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return r.length>=e.length?e.apply(this,r):function(){for(var o=arguments.length,l=new Array(o),c=0;c<o;c++)l[c]=arguments[c];return t.apply(n,[].concat(r,l))}}}function YS(e){return{}.toString.call(e).includes("Object")}function XS(e){return e||dm("configIsRequired"),YS(e)||dm("configType"),e.urls?(JS(),{paths:{vs:e.urls.monacoBase}}):e}function JS(){console.warn(Og.deprecation)}function eE(e,t){throw new Error(e[t]||e.default)}var Og={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},dm=QS(eE)(Og),tE={config:XS},nE=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return function(r){return n.reduceRight(function(a,o){return o(a)},r)}};function Ig(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],Ig(e[n],t[n]))}),sm(sm({},e),t)}var iE={type:"cancelation",msg:"operation is manually canceled"};function Ps(e){var t=!1,n=new Promise(function(i,r){e.then(function(a){return t?r(iE):i(a)}),e.catch(r)});return n.cancel=function(){return t=!0},n}var rE=["monaco"],aE=GS.create({config:KS,isInitialized:!1,resolve:null,reject:null,monaco:null}),Dg=LS(aE,2),Dr=Dg[0],Vo=Dg[1];function oE(e){var t=tE.config(e),n=t.monaco,i=CS(t,rE);Vo(function(r){return{config:Ig(r.config,i),monaco:n}})}function sE(){var e=Dr(function(t){var n=t.monaco,i=t.isInitialized,r=t.resolve;return{monaco:n,isInitialized:i,resolve:r}});if(!e.isInitialized){if(Vo({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),Ps(Ms);if(window.monaco&&window.monaco.editor)return Fg(window.monaco),e.resolve(window.monaco),Ps(Ms);nE(lE,dE)(uE)}return Ps(Ms)}function lE(e){return document.body.appendChild(e)}function cE(e){var t=document.createElement("script");return e&&(t.src=e),t}function dE(e){var t=Dr(function(i){var r=i.config,a=i.reject;return{config:r,reject:a}}),n=cE("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function uE(){var e=Dr(function(n){var i=n.config,r=n.resolve,a=n.reject;return{config:i,resolve:r,reject:a}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){var i=n.m||n;Fg(i),e.resolve(i)},function(n){e.reject(n)})}function Fg(e){Dr().monaco||Vo({monaco:e})}function pE(){return Dr(function(e){var t=e.monaco;return t})}var Ms=new Promise(function(e,t){return Vo({resolve:e,reject:t})}),Bg={config:oE,init:sE,__getMonacoInstance:pE},mE={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},Ts=mE,fE={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},hE=fE;function gE({children:e}){return dt.createElement("div",{style:hE.container},e)}var vE=gE,bE=vE;function xE({width:e,height:t,isEditorReady:n,loading:i,_ref:r,className:a,wrapperProps:o}){return dt.createElement("section",{style:{...Ts.wrapper,width:e,height:t},...o},!n&&dt.createElement(bE,null,i),dt.createElement("div",{ref:r,style:{...Ts.fullWidth,...!n&&Ts.hide},className:a}))}var yE=xE,Ug=x.memo(yE);function wE(e){x.useEffect(e,[])}var Vg=wE;function jE(e,t,n=!0){let i=x.useRef(!0);x.useEffect(i.current||!n?()=>{i.current=!1}:e,t)}var qe=jE;function tr(){}function ti(e,t,n,i){return _E(e,i)||zE(e,t,n,i)}function _E(e,t){return e.editor.getModel($g(e,t))}function zE(e,t,n,i){return e.editor.createModel(t,n,i?$g(e,i):void 0)}function $g(e,t){return e.Uri.parse(t)}function SE({original:e,modified:t,language:n,originalLanguage:i,modifiedLanguage:r,originalModelPath:a,modifiedModelPath:o,keepCurrentOriginalModel:l=!1,keepCurrentModifiedModel:c=!1,theme:d="light",loading:u="Loading...",options:p={},height:m="100%",width:g="100%",className:b,wrapperProps:y={},beforeMount:w=tr,onMount:h=tr}){let[f,v]=x.useState(!1),[j,_]=x.useState(!0),z=x.useRef(null),S=x.useRef(null),E=x.useRef(null),A=x.useRef(h),k=x.useRef(w),$=x.useRef(!1);Vg(()=>{let O=Bg.init();return O.then(D=>(S.current=D)&&_(!1)).catch(D=>(D==null?void 0:D.type)!=="cancelation"&&console.error("Monaco initialization: error:",D)),()=>z.current?G():O.cancel()}),qe(()=>{if(z.current&&S.current){let O=z.current.getOriginalEditor(),D=ti(S.current,e||"",i||n||"text",a||"");D!==O.getModel()&&O.setModel(D)}},[a],f),qe(()=>{if(z.current&&S.current){let O=z.current.getModifiedEditor(),D=ti(S.current,t||"",r||n||"text",o||"");D!==O.getModel()&&O.setModel(D)}},[o],f),qe(()=>{let O=z.current.getModifiedEditor();O.getOption(S.current.editor.EditorOption.readOnly)?O.setValue(t||""):t!==O.getValue()&&(O.executeEdits("",[{range:O.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),O.pushUndoStop())},[t],f),qe(()=>{var O,D;(D=(O=z.current)==null?void 0:O.getModel())==null||D.original.setValue(e||"")},[e],f),qe(()=>{let{original:O,modified:D}=z.current.getModel();S.current.editor.setModelLanguage(O,i||n||"text"),S.current.editor.setModelLanguage(D,r||n||"text")},[n,i,r],f),qe(()=>{var O;(O=S.current)==null||O.editor.setTheme(d)},[d],f),qe(()=>{var O;(O=z.current)==null||O.updateOptions(p)},[p],f);let Z=x.useCallback(()=>{var J;if(!S.current)return;k.current(S.current);let O=ti(S.current,e||"",i||n||"text",a||""),D=ti(S.current,t||"",r||n||"text",o||"");(J=z.current)==null||J.setModel({original:O,modified:D})},[n,t,r,e,i,a,o]),te=x.useCallback(()=>{var O;!$.current&&E.current&&(z.current=S.current.editor.createDiffEditor(E.current,{automaticLayout:!0,...p}),Z(),(O=S.current)==null||O.editor.setTheme(d),v(!0),$.current=!0)},[p,d,Z]);x.useEffect(()=>{f&&A.current(z.current,S.current)},[f]),x.useEffect(()=>{!j&&!f&&te()},[j,f,te]);function G(){var D,J,N,M;let O=(D=z.current)==null?void 0:D.getModel();l||((J=O==null?void 0:O.original)==null||J.dispose()),c||((N=O==null?void 0:O.modified)==null||N.dispose()),(M=z.current)==null||M.dispose()}return dt.createElement(Ug,{width:g,height:m,isEditorReady:f,loading:u,_ref:E,className:b,wrapperProps:y})}var EE=SE;x.memo(EE);function NE(e){let t=x.useRef();return x.useEffect(()=>{t.current=e},[e]),t.current}var CE=NE,la=new Map;function kE({defaultValue:e,defaultLanguage:t,defaultPath:n,value:i,language:r,path:a,theme:o="light",line:l,loading:c="Loading...",options:d={},overrideServices:u={},saveViewState:p=!0,keepCurrentModel:m=!1,width:g="100%",height:b="100%",className:y,wrapperProps:w={},beforeMount:h=tr,onMount:f=tr,onChange:v,onValidate:j=tr}){let[_,z]=x.useState(!1),[S,E]=x.useState(!0),A=x.useRef(null),k=x.useRef(null),$=x.useRef(null),Z=x.useRef(f),te=x.useRef(h),G=x.useRef(),O=x.useRef(i),D=CE(a),J=x.useRef(!1),N=x.useRef(!1);Vg(()=>{let L=Bg.init();return L.then(I=>(A.current=I)&&E(!1)).catch(I=>(I==null?void 0:I.type)!=="cancelation"&&console.error("Monaco initialization: error:",I)),()=>k.current?F():L.cancel()}),qe(()=>{var I,H,fe,he;let L=ti(A.current,e||i||"",t||r||"",a||n||"");L!==((I=k.current)==null?void 0:I.getModel())&&(p&&la.set(D,(H=k.current)==null?void 0:H.saveViewState()),(fe=k.current)==null||fe.setModel(L),p&&((he=k.current)==null||he.restoreViewState(la.get(a))))},[a],_),qe(()=>{var L;(L=k.current)==null||L.updateOptions(d)},[d],_),qe(()=>{!k.current||i===void 0||(k.current.getOption(A.current.editor.EditorOption.readOnly)?k.current.setValue(i):i!==k.current.getValue()&&(N.current=!0,k.current.executeEdits("",[{range:k.current.getModel().getFullModelRange(),text:i,forceMoveMarkers:!0}]),k.current.pushUndoStop(),N.current=!1))},[i],_),qe(()=>{var I,H;let L=(I=k.current)==null?void 0:I.getModel();L&&r&&((H=A.current)==null||H.editor.setModelLanguage(L,r))},[r],_),qe(()=>{var L;l!==void 0&&((L=k.current)==null||L.revealLine(l))},[l],_),qe(()=>{var L;(L=A.current)==null||L.editor.setTheme(o)},[o],_);let M=x.useCallback(()=>{var L;if(!(!$.current||!A.current)&&!J.current){te.current(A.current);let I=a||n,H=ti(A.current,i||e||"",t||r||"",I||"");k.current=(L=A.current)==null?void 0:L.editor.create($.current,{model:H,automaticLayout:!0,...d},u),p&&k.current.restoreViewState(la.get(I)),A.current.editor.setTheme(o),l!==void 0&&k.current.revealLine(l),z(!0),J.current=!0}},[e,t,n,i,r,a,d,u,p,o,l]);x.useEffect(()=>{_&&Z.current(k.current,A.current)},[_]),x.useEffect(()=>{!S&&!_&&M()},[S,_,M]),O.current=i,x.useEffect(()=>{var L,I;_&&v&&((L=G.current)==null||L.dispose(),G.current=(I=k.current)==null?void 0:I.onDidChangeModelContent(H=>{N.current||v(k.current.getValue(),H)}))},[_,v]),x.useEffect(()=>{if(_){let L=A.current.editor.onDidChangeMarkers(I=>{var fe;let H=(fe=k.current.getModel())==null?void 0:fe.uri;if(H&&I.find(he=>he.path===H.path)){let he=A.current.editor.getModelMarkers({resource:H});j==null||j(he)}});return()=>{L==null||L.dispose()}}return()=>{}},[_,j]);function F(){var L,I;(L=G.current)==null||L.dispose(),m?p&&la.set(a,k.current.saveViewState()):(I=k.current.getModel())==null||I.dispose(),k.current.dispose()}return dt.createElement(Ug,{width:g,height:b,isEditorReady:_,loading:c,_ref:$,className:y,wrapperProps:w})}var LE=kE,AE=x.memo(LE),$o=AE;function um({codigo:e="",titulo:t="Código",lenguaje:n="c",maxHeight:i=500}){const[r,a]=x.useState(!1);function o(){navigator.clipboard.writeText(e),a(!0),setTimeout(()=>a(!1),2e3)}const l=e?e.split(`
`).length:1,c=Math.min(i,Math.max(80,l*19+28));return s.jsxs("div",{className:"rounded-xl border border-zinc-200 overflow-hidden",children:[s.jsxs("div",{className:"bg-zinc-50 px-4 py-2 border-b border-zinc-200 flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsxs("div",{className:"flex gap-1.5",children:[s.jsx("div",{className:"w-3 h-3 rounded-full bg-red-400"}),s.jsx("div",{className:"w-3 h-3 rounded-full bg-yellow-400"}),s.jsx("div",{className:"w-3 h-3 rounded-full bg-green-400"})]}),s.jsx("span",{className:"text-xs font-mono text-zinc-500 ml-1",children:t}),s.jsxs("span",{className:"text-xs text-zinc-300",children:["· ",l," líneas"]})]}),s.jsx("button",{onClick:o,className:"flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-700 transition-colors",children:r?s.jsxs(s.Fragment,{children:[s.jsx(Ro,{size:12})," Copiado"]}):s.jsxs(s.Fragment,{children:[s.jsx(yd,{size:12})," Copiar"]})})]}),s.jsx($o,{height:c,language:n,value:e,theme:"vs",options:{readOnly:!0,minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', 'Courier New', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,renderLineHighlight:"none",selectionHighlight:!1,occurrencesHighlight:"off",folding:!1,wordWrap:"on",scrollbar:{vertical:"hidden",horizontal:"auto",alwaysConsumeMouseWheel:!1},padding:{top:12,bottom:12},contextmenu:!1,links:!1,automaticLayout:!0}})]})}function pm({code:e,variant:t}){const i={bad:{bg:"bg-red-50",border:"border-red-200",text:"text-red-800",label:"❌ MAL",labelColor:"text-red-500"},good:{bg:"bg-green-50",border:"border-green-200",text:"text-green-800",label:"✅ BIEN",labelColor:"text-green-600"}}[t];return s.jsxs("div",{className:P("rounded-lg border p-3",i.bg,i.border),children:[s.jsx("p",{className:P("text-[10px] font-bold mb-1.5 uppercase tracking-wide",i.labelColor),children:i.label}),s.jsx("pre",{className:P("text-xs font-mono whitespace-pre-wrap leading-relaxed",i.text),children:e})]})}function PE({trampas:e=[]}){return e.length?s.jsx("div",{className:"space-y-4",children:e.map((t,n)=>s.jsxs("div",{className:P("card p-4 border-l-4",t.severidad==="mortal"?"border-red-400":"border-orange-400"),children:[s.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[t.severidad==="mortal"?s.jsx(v_,{size:14,className:"text-red-500 shrink-0"}):s.jsx(xg,{size:14,className:"text-orange-500 shrink-0"}),s.jsx("span",{className:P("text-xs font-bold uppercase tracking-wide",t.severidad==="mortal"?"text-red-600":"text-orange-600"),children:t.severidad==="mortal"?"☠ Mortal":"⚠ Warning"}),s.jsx("span",{className:"text-sm font-semibold text-zinc-800",children:t.titulo})]}),s.jsx("p",{className:"text-xs text-zinc-500 mb-3 ml-6",children:t.descripcion}),s.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:[s.jsx(pm,{code:t.codigoMal,variant:"bad"}),s.jsx(pm,{code:t.codigoBien,variant:"good"})]})]},n))}):s.jsx("p",{className:"text-sm text-zinc-400 text-center py-6",children:"No hay trampas registradas todavía"})}function ME(e){const t=e.charCodeAt(0);return t>=97&&t<=122?"lower":t>=65&&t<=90?"upper":e===" "||e==="	"?"space":t>=48&&t<=57?"digit":"symbol"}const TE={lower:{bg:"bg-green-50",border:"border-green-200",text:"text-green-800",tag:"min"},upper:{bg:"bg-blue-50",border:"border-blue-200",text:"text-blue-800",tag:"MAY"},space:{bg:"bg-zinc-100",border:"border-zinc-300",text:"text-zinc-400",tag:"spc"},digit:{bg:"bg-purple-50",border:"border-purple-200",text:"text-purple-800",tag:"123"},symbol:{bg:"bg-orange-50",border:"border-orange-200",text:"text-orange-800",tag:"sym"}};function RE({str:e="",activeIndex:t=-1,showTypes:n=!0}){if(!e.length)return s.jsx("p",{className:"text-xs text-zinc-400 text-center py-2",children:"String vacío — mostrará \\\\0"});const i=[...e];return s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("div",{className:"flex gap-1.5 pb-1 min-w-0",children:[i.map((r,a)=>{const o=ME(r),l=TE[o],c=a===t,d=r===" "?"␣":r==="	"?"→":r;return s.jsxs("div",{className:"flex flex-col items-center gap-0.5 shrink-0",children:[s.jsx("span",{className:"text-[10px] text-zinc-300 font-mono",children:a}),s.jsx("div",{className:P("w-9 h-9 flex items-center justify-center rounded-lg border","font-mono text-sm font-bold transition-all duration-150",l.bg,l.border,l.text,c&&"ring-2 ring-offset-1 ring-blue-400 scale-115 z-10"),children:d}),n&&s.jsx("span",{className:P("text-[9px] font-semibold",l.text),children:l.tag})]},a)}),s.jsxs("div",{className:"flex flex-col items-center gap-0.5 shrink-0 opacity-35",children:[s.jsx("span",{className:"text-[10px] text-zinc-300 font-mono",children:i.length}),s.jsx("div",{className:"w-9 h-9 flex items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 font-mono text-[11px] text-zinc-400",children:"\\0"}),n&&s.jsx("span",{className:"text-[9px] text-zinc-400",children:"fin"})]})]})})}const qg={ft_strlen:e=>e.length!==1?`0
`:String(e[0].length)+`
`,ft_swap:e=>{if(e.length!==2)return`[uso: ft_swap(&a, &b) con dos enteros]
`;const t=Number(e[0]),n=Number(e[1]);return isNaN(t)||isNaN(n)?`[error: se esperan dos enteros]
`:`Antes:  a = ${t}, b = ${n}
Después: a = ${n}, b = ${t}
`},ft_putstr:e=>e.length!==1?"":e[0],ft_strcpy:e=>e.length<1?`
`:e[0]+`
`,fizzbuzz:e=>{let t="";for(let n=1;n<=100;n++)n%15===0?t+=`FizzBuzz
`:n%3===0?t+=`Fizz
`:n%5===0?t+=`Buzz
`:t+=`${n}
`;return t},first_word:e=>{if(e.length!==1)return`
`;const t=e[0];let n=0;for(;n<t.length&&(t[n]===" "||t[n]==="	");)n++;let i="";for(;n<t.length&&t[n]!==" "&&t[n]!=="	";)i+=t[n++];return i+`
`},rev_print:e=>e.length!==1?`
`:[...e[0]].reverse().join("")+`
`,rotone:e=>{if(e.length!==1)return`
`;let t="";for(const n of e[0]){const i=n.charCodeAt(0);i===122?t+="a":i===90?t+="A":i>=97&&i<=121||i>=65&&i<=89?t+=String.fromCharCode(i+1):t+=n}return t+`
`},rot_13:e=>{if(e.length!==1)return`
`;let t="";for(const n of e[0]){const i=n.charCodeAt(0);i>=65&&i<=90?t+=String.fromCharCode((i-65+13)%26+65):i>=97&&i<=122?t+=String.fromCharCode((i-97+13)%26+97):t+=n}return t+`
`},repeat_alpha:e=>{if(e.length!==1)return`
`;let t="";for(const n of e[0]){const i=n.charCodeAt(0);i>=97&&i<=122?t+=n.repeat(i-97+1):i>=65&&i<=90?t+=n.repeat(i-65+1):t+=n}return t+`
`},search_and_replace:e=>{if(e.length!==3)return`search_and_replace: bad arguments
`;const[t,n,i]=e;if(!n||!i)return`search_and_replace: bad arguments
`;const r=n[0],a=i[0];let o="";for(const l of t)o+=l===r?a:l;return o+`
`},ulstr:e=>{if(e.length!==1)return`
`;let t="";for(const n of e[0]){const i=n.charCodeAt(0);i>=65&&i<=90?t+=n.toLowerCase():i>=97&&i<=122?t+=n.toUpperCase():t+=n}return t+`
`},alpha_mirror:e=>{if(e.length!==1)return`
`;let t="";for(const n of e[0]){const i=n.charCodeAt(0);i>=65&&i<=90?t+=String.fromCharCode(90-(i-65)):i>=97&&i<=122?t+=String.fromCharCode(122-(i-97)):t+=n}return t+`
`},do_op:e=>{if(e.length!==3)return`Error
`;const t=parseInt(e[0]),n=parseInt(e[2]),i=e[1];if(isNaN(t)||isNaN(n))return`Error
`;let r;if(i==="+")r=t+n;else if(i==="-")r=t-n;else if(i==="*")r=t*n;else if(i==="/")r=n===0?NaN:Math.trunc(t/n);else if(i==="%")r=n===0?NaN:t%n;else return`Error
`;return isNaN(r)?`Error
`:`${r}
`},print_bits:e=>{if(e.length!==1)return`
`;const t=parseInt(e[0]);return isNaN(t)||t<0||t>255?`
`:t.toString(2).padStart(8,"0")+`
`},is_power_of_2:e=>{if(e.length!==1)return`
`;const t=parseInt(e[0]);return isNaN(t)?`
`:t>0&&!(t&t-1)?`1
`:`0
`},wdmatch:e=>{if(e.length!==2)return`
`;const[t,n]=e;let i=0;for(let r=0;r<t.length&&i<n.length;r++)t[r]===n[i]&&i++;return i===n.length?`${n}
`:`
`},last_word:e=>{if(e.length!==1)return`
`;const t=e[0];let n=t.length-1;for(;n>=0&&t[n]===" ";)n--;if(n<0)return`
`;let i=n;for(;i>0&&t[i-1]!==" ";)i--;return t.slice(i,n+1)+`
`},camel_to_snake:e=>{if(e.length!==1)return`
`;let t="";for(const n of e[0]){const i=n.charCodeAt(0);i>=65&&i<=90?t+="_"+n.toLowerCase():t+=n}return t+`
`},ft_atoi:e=>{if(e.length!==1)return`0
`;const t=e[0];let n=0;for(;n<t.length&&` 	
\r\f\v`.includes(t[n]);)n++;let i=1;n<t.length&&(t[n]==="-"||t[n]==="+")&&(t[n]==="-"&&(i=-1),n++);let r=0;for(;n<t.length&&t[n]>="0"&&t[n]<="9";)r=r*10+(t.charCodeAt(n)-48),n++;return String(r*i)+`
`},ft_strcmp:e=>{if(e.length!==2)return`0
`;const[t,n]=e,i=Math.max(t.length,n.length);for(let r=0;r<=i;r++){const a=r<t.length?t.charCodeAt(r):0,o=r<n.length?n.charCodeAt(r):0;if(a!==o)return String(a-o)+`
`}return`0
`},ft_strcspn:e=>{if(e.length!==2)return`0
`;const[t,n]=e;let i=0;for(;i<t.length&&!n.includes(t[i]);)i++;return String(i)+`
`},ft_strdup:e=>e.length!==1?`
`:e[0]+`
`,ft_strrev:e=>e.length!==1?`
`:[...e[0]].reverse().join("")+`
`,inter:e=>{if(e.length!==2)return`
`;const[t,n]=e,i=new Set;let r="";for(const a of t)!i.has(a)&&n.includes(a)&&(i.add(a),r+=a);return r+`
`},reverse_bits:e=>{if(e.length!==1)return`
`;let t=parseInt(e[0]);if(isNaN(t)||t<0||t>255)return`
`;let n=0;for(let i=0;i<8;i++)n=n*2+t%2,t=Math.floor(t/2);return String(n)+`
`},swap_bits:e=>{if(e.length!==1)return`
`;const t=parseInt(e[0]);return isNaN(t)||t<0||t>255?`
`:String((t&15)<<4|(t&240)>>4)+`
`},union:e=>{if(e.length!==2)return`
`;const[t,n]=e,i=new Set;let r="";for(const a of t+n)i.has(a)||(i.add(a),r+=a);return r+`
`},ft_strpbrk:e=>{if(e.length!==2)return`(null)
`;const[t,n]=e;for(let i=0;i<t.length;i++)if(n.includes(t[i]))return t.slice(i)+`
`;return`(null)
`},tab_mult:e=>{if(e.length!==1)return`
`;const t=parseInt(e[0]);if(isNaN(t)||t<1||t>9)return`
`;let n="";for(let i=1;i<=9;i++)n+=`${i} x ${t} = ${i*t}
`;return n},add_prime_sum:e=>{if(e.length!==1)return`
`;const t=parseInt(e[0]);if(isNaN(t)||t<=0)return`
`;const n=r=>{if(r<2)return!1;for(let a=2;a*a<=r;a++)if(r%a===0)return!1;return!0};let i=0;for(let r=2;r<=t;r++)n(r)&&(i+=r);return String(i)+`
`},ft_range:e=>{if(e.length!==2)return`
`;const t=parseInt(e[0]),n=parseInt(e[1]);if(isNaN(t)||isNaN(n)||t>=n)return`
`;let i="";for(let r=t;r<n;r++)i+=String(r)+`
`;return i},ft_rrange:e=>{if(e.length!==2)return`
`;const t=parseInt(e[0]),n=parseInt(e[1]);if(isNaN(t)||isNaN(n)||t>=n)return`
`;let i="";for(let r=n-1;r>=t;r--)i+=String(r)+`
`;return i},ft_list_size:e=>String(e.length)+`
`,hidenp:e=>{if(e.length!==2)return`
`;const[t,n]=e;let i=0;for(let r=0;r<t.length&&i<n.length;r++)t[r]===n[i]&&i++;return i===n.length?`1
`:`0
`},lcm:e=>{if(e.length!==2)return`
`;const t=parseInt(e[0]),n=parseInt(e[1]);if(isNaN(t)||isNaN(n))return`
`;if(t===0||n===0)return`0
`;const i=(r,a)=>a===0?r:i(a,r%a);return String(t/i(t,n)*n)+`
`},pgcd:e=>{if(e.length!==2)return`
`;const t=parseInt(e[0]),n=parseInt(e[1]);if(isNaN(t)||isNaN(n))return`
`;const i=(r,a)=>a===0?r:i(a,r%a);return String(i(t,n))+`
`},ft_atoi_base:e=>{if(e.length!==2)return`
`;const[t,n]=e;if(!n||n.length<2)return`
`;let i=0;for(;i<t.length&&` 	
\r\f\v`.includes(t[i]);)i++;let r=1;i<t.length&&(t[i]==="-"||t[i]==="+")&&(t[i]==="-"&&(r=-1),i++);let a=0;for(;i<t.length;){const o=n.indexOf(t[i]);if(o===-1)break;a=a*n.length+o,i++}return String(a*r)+`
`},str_capitalizer:e=>{if(e.length!==1)return`
`;let t="",n=!0;for(const i of e[0])i===" "?(t+=i,n=!0):n?(t+=i.toUpperCase(),n=!1):t+=i.toLowerCase();return t+`
`},rstr_capitalizer:e=>{if(e.length!==1)return`
`;const t=e[0];let n="";for(let i=0;i<t.length;i++){const r=t[i];r===" "?n+=r:i===t.length-1||t[i+1]===" "?n+=r.toUpperCase():n+=r.toLowerCase()}return n+`
`},epur_str:e=>{if(e.length!==1)return`
`;let t="",n=0;for(const i of e[0])i!==" "?(n&&(t+=" ",n=0),t+=i):t.length>0&&(n=1);return t+`
`},expand_str:e=>{if(e.length!==1)return`
`;let t="",n=0;for(const i of e[0])i!==" "?(n&&(t+="   ",n=0),t+=i):n=1;return t+`
`},paramsum:e=>`${e.length}
`,print_hex:e=>{if(e.length!==1)return`
`;const t=parseInt(e[0]);return isNaN(t)||t<0?`
`:t.toString(16)+`
`},ft_split:e=>{if(e.length!==2)return`
`;const t=e[0],n=e[1][0];if(!n)return t+`
`;const i=[];let r=0;for(;r<t.length;){for(;r<t.length&&t[r]===n;)r++;if(r>=t.length)break;let a=r;for(;a<t.length&&t[a]!==n;)a++;i.push(t.slice(r,a)),r=a}return i.join(`
`)+`
`},fprime:e=>{if(e.length!==1)return`
`;let t=parseInt(e[0]);if(isNaN(t)||t<=0)return`
`;if(t===1)return`1
`;let n="",i=!0,r=2;for(;r<=t;){for(;t%r===0;)i||(n+="*"),n+=String(r),i=!1,t=Math.floor(t/r);r++}return n+`
`},sort_list:e=>e.length===0?`
`:e.map(Number).sort((n,i)=>n-i).map(String).join(`
`)+`
`};function Hg(e,t){const n=Math.max(e.length,t.length);for(let i=0;i<n;i++)if(e[i]!==t[i])return{position:i,expected:t[i]!==void 0?JSON.stringify(t[i]):"EOF",got:e[i]!==void 0?JSON.stringify(e[i]):"EOF"};return null}function OE(e){const t=qg[e.id];return t?e.tests.map(n=>{try{const i=t(n.entrada),r=i===n.salida;return{...n,output:i,passed:r,diff:r?null:Hg(i,n.salida)}}catch(i){return{...n,output:null,passed:!1,diff:null,error:i.message}}}):e.tests.map(n=>({...n,output:null,passed:!1,diff:null,error:"Simulador no disponible"}))}function mm({label:e,value:t,color:n}){return s.jsxs("p",{className:P("text-xs font-mono",n),children:[s.jsxs("span",{className:"font-semibold",children:[e,": "]}),s.jsx("span",{className:"bg-white/50 px-1 rounded",children:JSON.stringify(t)})]})}function IE({exerciseId:e,tests:t=[]}){const[n,i]=x.useState(""),[r,a]=x.useState(null),[o,l]=x.useState(null),[c,d]=x.useState(!1),u=qg[e],p=x.useCallback(()=>{if(!u){a("⚠ Simulador no disponible para este ejercicio");return}a(u(n!==""?[n]:[]))},[u,n]);async function m(){if(!u||!t.length)return;d(!0),l([]);const y=[];for(const w of t){await new Promise(j=>setTimeout(j,110));let h,f,v;try{h=u(w.entrada),f=h===w.salida,v=f?null:Hg(h,w.salida)}catch{h=null,f=!1,v=null}y.push({...w,out:h,passed:f,diff:v}),l([...y])}d(!1)}const g=(o==null?void 0:o.filter(y=>y.passed).length)??0,b=o&&g===o.length;return s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"card p-4 space-y-3",children:[s.jsx("p",{className:"text-xs font-semibold text-zinc-500 uppercase tracking-wide",children:"Probar con entrada personalizada"}),s.jsxs("div",{className:"flex gap-2",children:[s.jsx("input",{value:n,onChange:y=>i(y.target.value),onKeyDown:y=>y.key==="Enter"&&p(),placeholder:'Escribe un string, p.ej. "abc"',className:`flex-1 px-3 py-2 rounded-lg border border-zinc-200 text-sm font-mono
                       bg-white focus:outline-none focus:ring-2 focus:ring-zinc-300`}),s.jsxs("button",{onClick:p,className:"btn-primary shrink-0",children:[s.jsx(Ir,{size:14})," Ejecutar"]}),s.jsx("button",{onClick:()=>{i(""),a(null)},className:"btn-secondary shrink-0 px-2.5",children:s.jsx(Do,{size:14})})]}),n.length>0&&s.jsxs("div",{children:[s.jsx("p",{className:"text-[11px] text-zinc-400 mb-1.5",children:"Visualización del string:"}),s.jsx(RE,{str:n})]})]}),s.jsx(ke,{children:r!==null&&s.jsxs(R.div,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},exit:{opacity:0},className:"card p-4 space-y-2",children:[s.jsx("p",{className:"text-xs font-semibold text-zinc-500 uppercase tracking-wide",children:"Output"}),s.jsx("div",{className:"terminal-box text-xs",children:r}),s.jsxs("p",{className:"text-[11px] text-zinc-400 font-mono",children:["Exacto: ",JSON.stringify(r)]})]})}),t.length>0&&s.jsxs("div",{className:"card p-4 space-y-3",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("p",{className:"text-xs font-semibold text-zinc-500 uppercase tracking-wide",children:"Tests Moulinette"}),o&&s.jsxs("span",{className:P("text-xs font-bold px-2 py-0.5 rounded-full",b?"bg-green-100 text-green-700":"bg-red-100 text-red-700"),children:[g,"/",o.length]})]}),s.jsxs("button",{onClick:m,disabled:c||!u,className:"btn-secondary text-xs px-3 py-1.5 disabled:opacity-40 flex items-center gap-1",children:[s.jsx(w_,{size:13}),c?"Ejecutando...":"Correr todos"]})]}),s.jsx("div",{className:"space-y-2",children:t.map((y,w)=>{const h=o==null?void 0:o[w];return s.jsxs(R.div,{layout:!0,className:P("flex items-start gap-3 p-3 rounded-lg border text-sm transition-colors",h?h.passed?"bg-green-50 border-green-200":"bg-red-50 border-red-200":"bg-zinc-50 border-zinc-100"),children:[s.jsx("span",{className:"text-lg shrink-0 mt-0.5 leading-none",children:h?h.passed?"✅":"❌":"⭕"}),s.jsxs("div",{className:"flex-1 min-w-0 space-y-1",children:[s.jsx("p",{className:"text-xs font-medium text-zinc-700",children:y.descripcion}),s.jsxs("p",{className:"text-xs font-mono text-zinc-400",children:["args: ",JSON.stringify(y.entrada)]}),h&&!h.passed&&h.out!==null&&s.jsxs("div",{className:"mt-1.5 p-2 rounded bg-white/70 space-y-0.5",children:[s.jsx(mm,{label:"esperado",value:y.salida,color:"text-green-700"}),s.jsx(mm,{label:"obtenido",value:h.out,color:"text-red-600"}),h.diff&&s.jsxs("p",{className:"text-[10px] text-orange-600 font-mono",children:["primer diff en posición ",h.diff.position,": esperado ",h.diff.expected,", obtenido ",h.diff.got]})]})]}),y.tipo==="edge"&&s.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-orange-100 text-orange-600 shrink-0 mt-0.5",children:"edge"})]},y.id)})}),b&&s.jsxs(R.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},className:"text-center py-3",children:[s.jsx("p",{className:"text-2xl",children:"🎉"}),s.jsx("p",{className:"text-sm font-semibold text-green-700 mt-1",children:"¡Todos los tests pasan!"})]})]})]})}function DE({steps:e=[],title:t="Traza de ejecución"}){var o;const[n,i]=x.useState(0),r=x.useRef(null);if(x.useEffect(()=>{var l;(l=r.current)==null||l.scrollIntoView({behavior:"smooth",block:"nearest"})},[n]),!e.length)return s.jsx("p",{className:"text-sm text-zinc-400 text-center py-6",children:"Sin pasos de traza disponibles"});const a=e[n];return s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("button",{onClick:()=>i(0),disabled:n===0,className:"btn-secondary px-2 py-1.5 disabled:opacity-30",children:s.jsx(h_,{size:14})}),s.jsx("button",{onClick:()=>i(l=>Math.max(0,l-1)),disabled:n===0,className:"btn-secondary px-2 py-1.5 disabled:opacity-30",children:s.jsx(vd,{size:14})}),s.jsxs("div",{className:"flex-1 flex flex-col items-center gap-1",children:[s.jsx("span",{className:"text-xs font-medium text-zinc-600",children:t}),s.jsx("div",{className:"flex gap-1",children:e.map((l,c)=>s.jsx("button",{onClick:()=>i(c),className:P("h-1.5 rounded-full transition-all duration-200",c===n?"w-4 bg-zinc-800":"w-1.5 bg-zinc-200 hover:bg-zinc-300")},c))}),s.jsxs("span",{className:"text-[11px] text-zinc-400",children:["Paso ",n+1," de ",e.length]})]}),s.jsx("button",{onClick:()=>i(l=>Math.min(e.length-1,l+1)),disabled:n===e.length-1,className:"btn-secondary px-2 py-1.5 disabled:opacity-30",children:s.jsx(Or,{size:14})})]}),s.jsx("div",{className:"card divide-y divide-zinc-100 max-h-64 overflow-y-auto",children:e.map((l,c)=>s.jsxs("button",{ref:c===n?r:null,onClick:()=>i(c),className:P("w-full text-left flex items-start gap-3 px-4 py-2.5 transition-colors",c===n?"bg-blue-50":"hover:bg-zinc-50"),children:[s.jsx("span",{className:P("shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold mt-0.5",c===n?"bg-blue-500 text-white":c<n?"bg-green-100 text-green-600":"bg-zinc-100 text-zinc-400"),children:c<n?"✓":c+1}),s.jsx("p",{className:P("text-sm truncate",c===n?"text-blue-900 font-medium":"text-zinc-600"),children:l.titulo??`Paso ${c+1}`})]},c))}),s.jsx(ke,{mode:"wait",children:s.jsxs(R.div,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},exit:{opacity:0,y:-3},transition:{duration:.15},className:"space-y-2",children:[a.codigo&&s.jsx("pre",{className:"terminal-box text-xs whitespace-pre-wrap leading-relaxed",children:a.codigo}),((o=a.variables)==null?void 0:o.length)>0&&s.jsx("div",{className:"card overflow-hidden",children:s.jsxs("table",{className:"w-full text-xs",children:[s.jsx("thead",{className:"bg-zinc-50 border-b border-zinc-100",children:s.jsx("tr",{children:["Variable","Valor","Nota"].map(l=>s.jsx("th",{className:"px-3 py-2 text-left font-semibold text-zinc-400",children:l},l))})}),s.jsx("tbody",{className:"divide-y divide-zinc-100",children:a.variables.map((l,c)=>s.jsxs("tr",{className:P("transition-colors",l.cambio&&"bg-green-50"),children:[s.jsx("td",{className:"px-3 py-2 font-mono font-bold text-zinc-800",children:l.nombre}),s.jsx("td",{className:"px-3 py-2 font-mono text-blue-700",children:l.valor}),s.jsxs("td",{className:"px-3 py-2 text-zinc-500",children:[l.cambio&&s.jsx("span",{className:"text-green-600 font-semibold mr-1",children:"← cambió"}),l.nota]})]},c))})]})})]},n)})]})}const FE=[{id:"subject",icon:n_,label:"Subject"},{id:"historia",icon:hd,label:"Historia"},{id:"formula",icon:l_,label:"Fórmula"},{id:"simulador",icon:o_,label:"Simulador"},{id:"gdb",icon:d_,label:"GDB"},{id:"variantes",icon:Fo,label:"Variantes"},{id:"debajo",icon:gg,label:"Por debajo"},{id:"pruebate",icon:Bo,label:"Pruébate"}],BE={dominado:{label:"Dominado",bg:"bg-green-100",text:"text-green-700",border:"border-green-200"},practicando:{label:"Practicando",bg:"bg-orange-100",text:"text-orange-700",border:"border-orange-200"},estudiando:{label:"Estudiando",bg:"bg-blue-100",text:"text-blue-700",border:"border-blue-200"},no_iniciado:{label:"Sin iniciar",bg:"bg-zinc-100",text:"text-zinc-500",border:"border-zinc-200"}};function UE({exercise:e}){var t,n,i,r,a;return s.jsxs("div",{className:"space-y-4",children:[s.jsx(xS,{subject:e.subject,funcionesPermitidas:e.funcionesPermitidas,archivosEsperados:e.archivosEsperados}),s.jsxs("div",{className:"card p-4 space-y-2",children:[s.jsx("p",{className:"text-xs font-semibold text-zinc-500 uppercase tracking-wide",children:"Las 5 preguntas clave"}),[["¿Main o función?",e.tipoEntrega==="programa"?"main() — programa completo":"función — sin main"],["¿Cuántos args?",e.tipoEntrega==="programa"?"argc = 2 (programa + 1 arg)":"recibe parámetros de función"],["¿Qué recibe?",((n=(t=e.archivosEsperados)==null?void 0:t[0])==null?void 0:n.replace(".c",""))??"—"],["¿Qué transforma?",((i=e.descripcion)==null?void 0:i.split(".")[0])??"—"],["¿Trampa especial?",((a=(r=e.trampas)==null?void 0:r[0])==null?void 0:a.titulo)??"Ver tab Variantes"]].map(([o,l])=>s.jsxs("div",{className:"flex gap-2 text-sm",children:[s.jsx("span",{className:"text-zinc-300 shrink-0",children:"→"}),s.jsx("span",{className:"font-medium text-zinc-500 w-36 shrink-0 text-xs",children:o}),s.jsx("span",{className:"text-zinc-800 text-xs",children:l})]},o))]})]})}function VE({exercise:e}){return s.jsx(jS,{palacio:e.palacio,relacionados:e.relacionados})}function $E({exercise:e}){return s.jsx(_S,{formulaClave:e.formulaClave})}function qE({exercise:e}){return s.jsx(IE,{exerciseId:e.id,tests:e.tests})}function HE({exercise:e}){return s.jsx(DE,{steps:e.gdbSteps,title:`GDB — ${e.nombre}`})}function WE({text:e}){const[t,n]=x.useState(!1),i=()=>{navigator.clipboard.writeText(e).then(()=>{n(!0),setTimeout(()=>n(!1),2e3)})};return s.jsxs("button",{onClick:i,title:"Copiar código al portapapeles",className:"flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-700 px-2 py-1 rounded-lg hover:bg-zinc-100 transition-colors",children:[t?s.jsx(Ro,{size:12,className:"text-green-500"}):s.jsx(yd,{size:12}),t?"Copiado":"Copiar"]})}function ZE(e){try{return new Date(e).toLocaleDateString("es-ES",{day:"numeric",month:"short",year:"numeric"})}catch{return e}}function GE({exercise:e}){var l;const[t,n]=x.useState(0),i=e.versiones??[],{variants:r,deleteVariant:a}=Rg(e.id);if(!i.length&&!r.length)return s.jsx(Wg,{label:"variantes"});const o=i[t]??null;return s.jsxs("div",{className:"space-y-6",children:[i.length>0&&s.jsxs("div",{className:"space-y-4",children:[s.jsx("p",{className:"text-xs font-semibold text-zinc-500 uppercase tracking-wide",children:"Versiones del ejercicio"}),s.jsx("div",{className:"flex gap-2 flex-wrap",children:i.map((c,d)=>s.jsxs("button",{onClick:()=>n(d),className:P("px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors",d===t?"bg-zinc-900 text-white border-zinc-900":"bg-white text-zinc-600 border-zinc-200 hover:bg-zinc-50"),children:[c.nombre,c.recomendada&&s.jsx("span",{className:"ml-1.5 text-xs text-green-400",children:"★"})]},c.id))}),o&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:P("p-3 rounded-lg border text-sm",o.recomendada?"bg-green-50 border-green-200 text-green-800":"bg-zinc-50 border-zinc-200 text-zinc-600"),children:[o.recomendada&&s.jsx("span",{className:"font-semibold",children:"✓ Recomendada para el examen · "}),o.descripcion]}),s.jsx(um,{codigo:o.codigo,titulo:((l=e.archivosEsperados)==null?void 0:l[0])??"solution.c",lenguaje:"c"})]})]}),r.length>0&&s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("p",{className:"text-xs font-semibold text-zinc-500 uppercase tracking-wide",children:"Mis variantes guardadas"}),s.jsx("span",{className:"text-xs bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded-full font-semibold",children:r.length})]}),r.map(c=>s.jsxs("div",{className:"rounded-xl border border-blue-200 bg-blue-50/50 overflow-hidden",children:[s.jsxs("div",{className:"flex items-start justify-between px-4 py-3 gap-3",children:[s.jsxs("div",{className:"min-w-0",children:[s.jsx("p",{className:"text-sm font-semibold text-blue-900",children:c.nombre}),c.descripcion&&s.jsx("p",{className:"text-xs text-blue-600 mt-0.5",children:c.descripcion}),s.jsx("p",{className:"text-xs text-zinc-400 mt-0.5",children:ZE(c.fechaGuardado)})]}),s.jsxs("div",{className:"flex items-center gap-1 shrink-0",children:[s.jsx(WE,{text:c.codigo}),s.jsx("button",{onClick:()=>a(c.id),title:"Eliminar variante",className:"text-zinc-400 hover:text-red-500 p-1 rounded-lg hover:bg-red-50 transition-colors",children:s.jsx(bg,{size:14})})]})]}),s.jsx(um,{codigo:c.codigo,titulo:"mi_variante.c",lenguaje:"c"})]},c.id))]}),r.length===0&&s.jsx("div",{className:"rounded-xl border border-dashed border-zinc-200 px-4 py-5 text-center",children:s.jsxs("p",{className:"text-xs text-zinc-400",children:["Guarda tu propia solución desde el editor con el botón ",s.jsx("strong",{children:"💾 Guardar variante"})]})})]})}function KE({exercise:e}){if(!e.bajoCelCapot)return s.jsx(Wg,{label:"explicación técnica"});const t=e.bajoCelCapot.split(`

`).filter(Boolean);return s.jsx("div",{className:"space-y-3",children:t.map((n,i)=>{const[r,...a]=n.split(`
`);return s.jsxs("div",{className:"card p-4",children:[s.jsx("p",{className:"text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2",children:r}),s.jsx("p",{className:"text-sm text-zinc-700 leading-relaxed font-mono whitespace-pre-wrap",children:a.join(`
`)})]},i)})})}function QE({exercise:e,navigate:t}){var i;const n=e.tests??[];return s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"card p-5 text-center space-y-3",children:[s.jsx("p",{className:"text-3xl",children:"🧠"}),s.jsx("p",{className:"font-semibold text-zinc-800",children:"Protocolo Active Recall"}),s.jsx("p",{className:"text-sm text-zinc-500",children:"Sin mirar el código, intenta escribir la solución de memoria. Solo con las anclas que recuerdas."}),s.jsxs("button",{onClick:()=>t(`/practicar/${e.id}`),className:"btn-primary mx-auto",children:[s.jsx(Ir,{size:14})," Abrir editor + Moulinette"]})]}),n.length>0&&s.jsxs("div",{className:"card divide-y divide-zinc-100",children:[s.jsxs("p",{className:"px-4 py-3 text-xs font-semibold text-zinc-500 uppercase tracking-wide",children:["Tests de la Moulinette (",n.length,")"]}),n.map(r=>s.jsxs("div",{className:"px-4 py-3 flex items-start gap-3",children:[s.jsx("span",{className:P("mt-0.5 text-xs px-1.5 py-0.5 rounded font-mono shrink-0",r.tipo==="edge"?"bg-orange-50 text-orange-700":"bg-zinc-100 text-zinc-500"),children:r.tipo}),s.jsxs("div",{className:"min-w-0",children:[s.jsx("p",{className:"text-sm text-zinc-700",children:r.descripcion}),s.jsx("p",{className:"text-xs font-mono text-zinc-400 mt-0.5",children:r.entrada.length?`→ args: ${JSON.stringify(r.entrada)}`:"→ sin argumentos"})]})]},r.id))]}),((i=e.trampas)==null?void 0:i.length)>0&&s.jsx(PE,{trampas:e.trampas})]})}function Wg({label:e}){return s.jsxs("div",{className:"py-16 text-center text-zinc-400",children:[s.jsx("p",{className:"text-4xl mb-3",children:"🚧"}),s.jsxs("p",{className:"text-sm",children:["Los datos de ",e," se añadirán próximamente"]})]})}const Rs="ex-last-tab";function YE(){const{id:e}=Wc(),t=wt(),n=Mg(e),i=Xz(e),r=Yz(e),a=xe(m=>m.ejercicios[e]),o=xe(m=>m.marcarEstado),[l,c]=x.useState(()=>{var m;try{return((m=JSON.parse(localStorage.getItem(Rs)))==null?void 0:m[e])??"subject"}catch{return"subject"}});if(x.useEffect(()=>{try{const m=JSON.parse(localStorage.getItem(Rs))??{};localStorage.setItem(Rs,JSON.stringify({...m,[e]:l}))}catch{}},[e,l]),x.useEffect(()=>{(a==null?void 0:a.estado)==="no_iniciado"&&o(e,"estudiando")},[e]),!n)return s.jsxs("div",{className:"p-8 text-center",children:[s.jsx("p",{className:"text-5xl mb-4",children:"😕"}),s.jsx("p",{className:"text-lg font-semibold text-zinc-800",children:"Ejercicio no encontrado"}),s.jsxs("p",{className:"text-zinc-400 text-sm mt-1",children:["ID: ",s.jsx("span",{className:"font-mono",children:e})]}),s.jsx(we,{to:"/",className:"btn-primary mt-4 inline-flex",children:"← Volver al inicio"})]});const d=(a==null?void 0:a.estado)??"no_iniciado",u=BE[d],p={subject:s.jsx(UE,{exercise:n}),historia:s.jsx(VE,{exercise:n}),formula:s.jsx($E,{exercise:n}),simulador:s.jsx(qE,{exercise:n}),gdb:s.jsx(HE,{exercise:n}),variantes:s.jsx(GE,{exercise:n}),debajo:s.jsx(KE,{exercise:n}),pruebate:s.jsx(QE,{exercise:n,navigate:t})};return s.jsxs("div",{className:"max-w-4xl mx-auto px-6 py-6 space-y-6",children:[s.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center gap-4",children:[s.jsxs("div",{className:"flex items-center gap-4 flex-1 min-w-0",children:[s.jsx("span",{className:"text-5xl shrink-0",children:n.palacio.emoji}),s.jsxs("div",{className:"min-w-0",children:[s.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[s.jsx("h1",{className:"text-xl font-bold text-zinc-900 font-mono",children:n.nombre}),s.jsx(zd,{nivel:n.nivel}),s.jsx("span",{className:P("badge border",u.bg,u.text,u.border),children:u.label})]}),n.descripcion&&s.jsx("p",{className:"text-sm text-zinc-500 mt-0.5 truncate",children:n.descripcion})]})]}),s.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[s.jsx(we,{to:i?`/ejercicio/${i.id}`:"#",className:P("btn-secondary px-2 py-2",!i&&"opacity-30 pointer-events-none"),children:s.jsx(vd,{size:16})}),s.jsx(we,{to:r?`/ejercicio/${r.id}`:"#",className:P("btn-secondary px-2 py-2",!r&&"opacity-30 pointer-events-none"),children:s.jsx(Or,{size:16})}),s.jsxs("button",{onClick:()=>t(`/practicar/${e}`),className:"btn-primary",children:[s.jsx(Ir,{size:14})," Practicar"]})]})]}),s.jsx("div",{className:"flex gap-1 overflow-x-auto pb-1 -mb-1 scrollbar-none",children:FE.map(({id:m,icon:g,label:b})=>s.jsxs("button",{onClick:()=>c(m),className:l===m?"tab-button-active":"tab-button",children:[s.jsx(g,{size:14}),s.jsx("span",{children:b})]},m))}),s.jsx(ke,{mode:"wait",children:s.jsx(R.div,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},exit:{opacity:0,y:-4},transition:{duration:.15},children:p[l]},l)})]})}const XE="https://wandbox.org/api/compile.json";async function JE(e,t=[]){const n=await fetch(XE,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:e,compiler:"gcc-head",options:"",stdin:"","runtime-option-raw":t.map(String).join(`
`)})});if(!n.ok){const a=await n.text().catch(()=>"");throw new Error(`Wandbox API error ${n.status}${a?": "+a:""}`)}const i=await n.json();return{compileError:i.compiler_error&&i.compiler_error.trim()?i.compiler_error:null,stdout:i.program_output??"",stderr:i.program_error??"",exitCode:i.status!==void 0?parseInt(i.status,10):-1}}const e3={ft_strlen:{header:"",main:`#include <stdio.h>
int main(int argc, char **argv)
{
	if (argc < 2) { printf("0\\n"); return (0); }
	printf("%d\\n", ft_strlen(argv[1]));
	return (0);
}`},ft_swap:{header:"",main:`#include <stdio.h>
#include <stdlib.h>
int main(int argc, char **argv)
{
	int a = atoi(argv[1]);
	int b = atoi(argv[2]);
	ft_swap(&a, &b);
	printf("%d %d\\n", a, b);
	return (0);
}`},ft_putstr:{header:"",main:`int main(int argc, char **argv)
{
	if (argc < 2) return (0);
	ft_putstr(argv[1]);
	return (0);
}`},ft_strcpy:{header:"",main:`#include <stdio.h>
int main(int argc, char **argv)
{
	char dst[4096];
	if (argc < 2) { printf("\\n"); return (0); }
	ft_strcpy(dst, argv[1]);
	printf("%s\\n", dst);
	return (0);
}`},ft_strcmp:{header:"",main:`#include <stdio.h>
int main(int argc, char **argv)
{
	if (argc < 3) { printf("0\\n"); return (0); }
	printf("%d\\n", ft_strcmp(argv[1], argv[2]));
	return (0);
}`},ft_strcspn:{header:"",main:`#include <stdio.h>
int main(int argc, char **argv)
{
	if (argc < 3) { printf("0\\n"); return (0); }
	printf("%d\\n", ft_strcspn(argv[1], argv[2]));
	return (0);
}`},ft_strdup:{header:"",main:`#include <stdio.h>
#include <stdlib.h>
int main(int argc, char **argv)
{
	char *dup;
	if (argc < 2) { printf("\\n"); return (0); }
	dup = ft_strdup(argv[1]);
	if (!dup) { printf("(null)\\n"); return (0); }
	printf("%s\\n", dup);
	free(dup);
	return (0);
}`},ft_strpbrk:{header:"",main:`#include <stdio.h>
int main(int argc, char **argv)
{
	char *p;
	if (argc < 3) { printf("(null)\\n"); return (0); }
	p = ft_strpbrk(argv[1], argv[2]);
	if (p)
		printf("%s\\n", p);
	else
		printf("(null)\\n");
	return (0);
}`},ft_strrev:{header:"",main:`#include <stdio.h>
int main(int argc, char **argv)
{
	if (argc < 2) { printf("\\n"); return (0); }
	printf("%s\\n", ft_strrev(argv[1]));
	return (0);
}`},is_power_of_2:{header:"",main:`#include <stdio.h>
#include <stdlib.h>
int main(int argc, char **argv)
{
	unsigned int n;
	if (argc < 2) { printf("0\\n"); return (0); }
	n = (unsigned int)atoi(argv[1]);
	printf("%d\\n", is_power_of_2(n));
	return (0);
}`},print_bits:{header:"",main:`#include <stdlib.h>
#include <unistd.h>
int main(int argc, char **argv)
{
	unsigned char n;
	if (argc < 2) return (0);
	n = (unsigned char)atoi(argv[1]);
	print_bits(n);
	write(1, "\\n", 1);
	return (0);
}`},reverse_bits:{header:"",main:`#include <stdio.h>
#include <stdlib.h>
int main(int argc, char **argv)
{
	if (argc < 2) { printf("0\\n"); return (0); }
	printf("%d\\n", (int)reverse_bits((unsigned char)atoi(argv[1])));
	return (0);
}`},swap_bits:{header:"",main:`#include <stdio.h>
#include <stdlib.h>
int main(int argc, char **argv)
{
	if (argc < 2) { printf("0\\n"); return (0); }
	printf("%d\\n", (int)swap_bits((unsigned char)atoi(argv[1])));
	return (0);
}`},pgcd:{header:"",main:`#include <stdio.h>
#include <stdlib.h>
int main(int argc, char **argv)
{
	unsigned int a;
	unsigned int b;
	if (argc < 3) { printf("0\\n"); return (0); }
	a = (unsigned int)atoi(argv[1]);
	b = (unsigned int)atoi(argv[2]);
	printf("%u\\n", pgcd(a, b));
	return (0);
}`},lcm:{header:"",main:`#include <stdio.h>
#include <stdlib.h>
int main(int argc, char **argv)
{
	unsigned int a;
	unsigned int b;
	if (argc < 3) { printf("0\\n"); return (0); }
	a = (unsigned int)atoi(argv[1]);
	b = (unsigned int)atoi(argv[2]);
	printf("%u\\n", lcm(a, b));
	return (0);
}`},ft_list_size:{header:`typedef struct s_list
{
	struct s_list	*next;
	void			*data;
}	t_list;

`,main:`#include <stdio.h>
#include <stdlib.h>
int main(int argc, char **argv)
{
	t_list	*head;
	t_list	*tail;
	t_list	*node;
	int		i;

	head = NULL;
	tail = NULL;
	i = 1;
	while (i < argc)
	{
		node = malloc(sizeof(t_list));
		node->data = argv[i];
		node->next = NULL;
		if (tail)
			tail->next = node;
		else
			head = node;
		tail = node;
		i++;
	}
	printf("%d\\n", ft_list_size(head));
	return (0);
}`},ft_range:{header:"",main:`#include <stdio.h>
#include <stdlib.h>
int main(int argc, char **argv)
{
	int	min;
	int	max;
	int	*arr;
	int	i;

	if (argc < 3) { printf("\\n"); return (0); }
	min = atoi(argv[1]);
	max = atoi(argv[2]);
	if (min >= max) { printf("\\n"); return (0); }
	arr = ft_range(min, max);
	if (!arr) { printf("\\n"); return (0); }
	i = 0;
	while (i < max - min)
	{
		printf("%d\\n", arr[i]);
		i++;
	}
	free(arr);
	return (0);
}`},ft_rrange:{header:"",main:`#include <stdio.h>
#include <stdlib.h>
int main(int argc, char **argv)
{
	int	min;
	int	max;
	int	*arr;
	int	i;

	if (argc < 3) { printf("\\n"); return (0); }
	min = atoi(argv[1]);
	max = atoi(argv[2]);
	if (min >= max) { printf("\\n"); return (0); }
	arr = ft_rrange(min, max);
	if (!arr) { printf("\\n"); return (0); }
	i = 0;
	while (i < max - min)
	{
		printf("%d\\n", arr[i]);
		i++;
	}
	free(arr);
	return (0);
}`},ft_atoi_base:{header:"",main:`#include <stdio.h>
int main(int argc, char **argv)
{
	if (argc < 3) { printf("0\\n"); return (0); }
	printf("%d\\n", ft_atoi_base(argv[1], argv[2]));
	return (0);
}`},ft_split:{header:"",main:`#include <stdio.h>
#include <stdlib.h>
int main(int argc, char **argv)
{
	char	**result;
	int		i;

	if (argc < 3) return (0);
	result = ft_split(argv[1], argv[2][0]);
	if (!result) return (0);
	i = 0;
	while (result[i])
	{
		printf("%s\\n", result[i]);
		free(result[i]);
		i++;
	}
	free(result);
	return (0);
}`},sort_list:{header:`typedef struct s_list
{
	struct s_list	*next;
	void			*data;
}	t_list;

`,main:`#include <stdio.h>
#include <stdlib.h>

static int	cmp_ints(void *a, void *b)
{
	return (*(int *)a - *(int *)b);
}

int main(int argc, char **argv)
{
	t_list	*head;
	t_list	*tail;
	t_list	*node;
	t_list	*cur;
	int		*val;
	int		i;

	head = NULL;
	tail = NULL;
	i = 1;
	while (i < argc)
	{
		node = malloc(sizeof(t_list));
		val = malloc(sizeof(int));
		*val = atoi(argv[i]);
		node->data = val;
		node->next = NULL;
		if (tail)
			tail->next = node;
		else
			head = node;
		tail = node;
		i++;
	}
	head = sort_list(head, cmp_ints);
	cur = head;
	while (cur)
	{
		printf("%d\\n", *(int *)cur->data);
		cur = cur->next;
	}
	return (0);
}`}};function t3(e,t,n){if(t!=="funcion")return n;const i=e3[e];return i?i.header+n+`
`+i.main:n}function fm(e){var n;if(!e)return`// Tu código aquí
`;const t=((n=e.funcionesPermitidas)==null?void 0:n.join(", "))||"write";return e.tipoEntrega==="programa"?`#include <unistd.h>

/*
** ${e.nombre}
** Funciones permitidas: ${t}
*/

int main(int ac, char **av)
{
	// Tu código aquí
	(void)ac;
	(void)av;
	return (0);
}
`:`#include <unistd.h>

/*
** ${e.nombre}
** Funciones permitidas: ${t}
*/

// Escribe tu función aquí
// (El main de test se añade automáticamente al compilar)

`}function n3({got:e,expected:t}){if(!e&&!t)return null;const n=i=>i==null?s.jsx("span",{className:"text-zinc-400 italic",children:"EOF"}):i.split("").map((r,a)=>r===`
`?s.jsx("span",{className:"text-blue-400",children:"↵"},a):r===" "?s.jsx("span",{className:"bg-red-100 text-red-400",children:"·"},a):s.jsx("span",{children:r},a));return s.jsxs("div",{className:"mt-2 rounded-lg overflow-hidden border border-red-200 text-xs font-mono",children:[s.jsx("div",{className:"bg-red-50 px-3 py-1.5 flex gap-6",children:s.jsxs("div",{children:[s.jsx("span",{className:"text-red-500 font-semibold",children:"Esperado: "}),n(t)]})}),s.jsx("div",{className:"bg-orange-50 px-3 py-1.5 flex gap-6",children:s.jsxs("div",{children:[s.jsx("span",{className:"text-orange-500 font-semibold",children:"Obtenido: "}),n(e)]})})]})}function i3({test:e,index:t}){var l;const[n,i]=x.useState(!1),r=e.status==="pending",a=e.status==="passed",o=e.status==="failed";return s.jsxs(R.div,{layout:!0,className:P("rounded-xl border transition-colors duration-300",a?"border-green-200 bg-green-50":o?"border-red-200  bg-red-50":"border-zinc-200 bg-zinc-50"),children:[s.jsxs("button",{onClick:()=>!r&&i(c=>!c),className:"w-full flex items-center gap-3 px-4 py-3 text-left",children:[s.jsx(R.span,{initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:400,damping:20},children:a?s.jsx(Oo,{size:18,className:"text-green-500"}):o?s.jsx(xd,{size:18,className:"text-red-500"}):s.jsx(fg,{size:18,className:"text-zinc-400"})},e.status),s.jsxs("span",{className:"flex-1 text-sm font-medium text-zinc-700",children:[s.jsxs("span",{className:"text-zinc-400 mr-2",children:["#",t+1]}),e.descripcion]}),!r&&o&&(n?s.jsx(bd,{size:14,className:"text-zinc-400"}):s.jsx(gd,{size:14,className:"text-zinc-400"}))]}),s.jsx(ke,{children:n&&o&&s.jsxs(R.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},className:"overflow-hidden px-4 pb-3",children:[s.jsxs("div",{className:"text-xs text-zinc-500 mb-1",children:["Input: ",s.jsx("code",{className:"font-mono bg-white px-1 rounded",children:(l=e.entrada)!=null&&l.length?e.entrada.join(" "):"(sin args)"})]}),s.jsx(n3,{got:e.output,expected:e.salida})]})})]})}function r3({error:e,onDismiss:t}){return e?s.jsx(R.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},className:"shrink-0 bg-red-50 border-t border-red-200 overflow-hidden",children:s.jsxs("div",{className:"px-4 py-2 max-h-40 overflow-auto",children:[s.jsxs("div",{className:"flex items-center justify-between mb-1",children:[s.jsx("p",{className:"text-xs font-bold text-red-600",children:"❌ Error de compilación (gcc)"}),s.jsx("button",{onClick:t,className:"text-red-400 hover:text-red-600 p-0.5",children:s.jsx(jd,{size:12})})]}),s.jsx("pre",{className:"text-xs font-mono text-red-700 whitespace-pre-wrap leading-relaxed",children:e})]})}):null}function a3({code:e,onSave:t,onClose:n}){const[i,r]=x.useState(""),[a,o]=x.useState(""),l=x.useRef(null);x.useEffect(()=>{var d;(d=l.current)==null||d.focus()},[]);const c=()=>{i.trim()&&(t(i.trim(),a.trim(),e),n())};return s.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm",children:s.jsxs(R.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},className:"bg-white rounded-2xl shadow-2xl border border-zinc-200 w-full max-w-md mx-4 p-6",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("h2",{className:"text-base font-semibold text-zinc-800",children:"💾 Guardar como variante"}),s.jsx("button",{onClick:n,className:"text-zinc-400 hover:text-zinc-600",children:s.jsx(jd,{size:18})})]}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{children:[s.jsxs("label",{className:"block text-xs font-semibold text-zinc-600 mb-1.5",children:["Nombre ",s.jsx("span",{className:"text-red-400",children:"*"})]}),s.jsx("input",{ref:l,type:"text",value:i,onChange:d=>r(d.target.value),onKeyDown:d=>d.key==="Enter"&&c(),placeholder:"Ej: Mi versión con punteros",className:"w-full px-3 py-2 rounded-lg border border-zinc-300 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:border-transparent"})]}),s.jsxs("div",{children:[s.jsxs("label",{className:"block text-xs font-semibold text-zinc-600 mb-1.5",children:["Descripción ",s.jsx("span",{className:"text-zinc-400",children:"(opcional)"})]}),s.jsx("textarea",{value:a,onChange:d=>o(d.target.value),placeholder:"Notas sobre esta variante...",rows:2,className:"w-full px-3 py-2 rounded-lg border border-zinc-300 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:border-transparent"})]})]}),s.jsxs("div",{className:"flex gap-3 mt-5",children:[s.jsx("button",{onClick:n,className:"flex-1 py-2 rounded-lg border border-zinc-200 text-sm text-zinc-600 hover:bg-zinc-50 transition-colors",children:"Cancelar"}),s.jsx("button",{onClick:c,disabled:!i.trim(),className:P("flex-1 py-2 rounded-lg text-sm font-semibold transition-colors",i.trim()?"bg-zinc-900 text-white hover:bg-zinc-700":"bg-zinc-100 text-zinc-400 cursor-not-allowed"),children:"Guardar variante"})]})]})})}function o3({exercise:e,intentos:t}){var o,l,c,d;const[n,i]=x.useState(null),r=u=>i(p=>p===u?null:u),a=[{level:1,label:"💡 Pista 1 — La historia del personaje",content:((o=e==null?void 0:e.palacio)==null?void 0:o.historia)||"No hay historia disponible aún.",color:"purple"},{level:2,label:"🔑 Pista 2 — Las anclas clave",content:((l=e==null?void 0:e.palacio)==null?void 0:l.anclas)||[],color:"blue",isAnchors:!0},{level:3,label:"🧩 Pista 3 — Código parcial",content:(d=(c=e==null?void 0:e.versiones)==null?void 0:c[0])!=null&&d.codigo?e.versiones[0].codigo.replace(/[a-zA-Z_][a-zA-Z0-9_]*/g,u=>Math.random()>.5?u:"___"):"// Código parcial no disponible aún",color:"orange",isCode:!0}];return s.jsxs("div",{className:"space-y-2",children:[s.jsx("h3",{className:"text-xs font-semibold text-zinc-500 uppercase tracking-wide",children:"Pistas"}),a.map(u=>s.jsxs("div",{className:P("rounded-xl border overflow-hidden",u.color==="purple"?"border-purple-200":u.color==="blue"?"border-blue-200":"border-orange-200"),children:[s.jsxs("button",{onClick:()=>r(u.level),className:P("w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium",u.color==="purple"?"bg-purple-50 text-purple-700 hover:bg-purple-100":u.color==="blue"?"bg-blue-50   text-blue-700   hover:bg-blue-100":"bg-orange-50  text-orange-700  hover:bg-orange-100"),children:[u.label,n===u.level?s.jsx(bd,{size:14}):s.jsx(gd,{size:14})]}),s.jsx(ke,{children:n===u.level&&s.jsx(R.div,{initial:{height:0},animate:{height:"auto"},exit:{height:0},className:"overflow-hidden",children:s.jsx("div",{className:"px-4 py-3 bg-white text-sm text-zinc-700 leading-relaxed",children:u.isAnchors&&Array.isArray(u.content)?s.jsx("div",{className:"flex flex-wrap gap-2",children:u.content.map((p,m)=>s.jsx("span",{className:"px-2 py-1 bg-green-100 text-green-700 rounded-lg font-mono text-xs",children:p},m))}):u.isCode?s.jsx("pre",{className:"font-mono text-xs overflow-x-auto bg-zinc-50 rounded-lg p-3 border border-zinc-200",children:u.content}):s.jsx("p",{children:u.content})})})})]},u.level))]})}function s3({exercise:e,onUse:t}){var a;const[n,i]=x.useState(!1),r=(a=e==null?void 0:e.versiones)==null?void 0:a[0];return s.jsx("div",{className:"rounded-xl border border-zinc-200 overflow-hidden",children:n?s.jsxs(R.div,{initial:{opacity:0},animate:{opacity:1},children:[s.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-amber-50 border-b border-amber-200",children:[s.jsxs("span",{className:"text-xs font-semibold text-amber-700",children:["💡 Solución — ",(r==null?void 0:r.nombre)||"Versión clásica"]}),s.jsx("button",{onClick:()=>{t((r==null?void 0:r.codigo)||""),i(!1)},className:"text-xs text-amber-600 hover:text-amber-800 font-medium",children:"Copiar al editor →"})]}),s.jsx("pre",{className:"text-xs font-mono p-4 bg-white overflow-x-auto text-zinc-700 max-h-64 overflow-y-auto",children:(r==null?void 0:r.codigo)||"// Solución no disponible aún"})]}):s.jsxs("button",{onClick:()=>i(!0),className:"w-full flex items-center justify-center gap-2 px-4 py-3 bg-zinc-50 hover:bg-zinc-100 text-zinc-600 text-sm font-medium transition-colors",children:[s.jsx(r_,{size:16}),"Ver solución completa"]})})}function l3({show:e,onClose:t}){return x.useEffect(()=>{if(e){const n=setTimeout(t,3500);return()=>clearTimeout(n)}},[e,t]),s.jsx(ke,{children:e&&s.jsx(R.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-50 flex items-center justify-center pointer-events-none",children:s.jsxs(R.div,{initial:{scale:.5,y:40},animate:{scale:1,y:0},exit:{scale:.8,opacity:0},transition:{type:"spring",stiffness:300,damping:20},className:"bg-white rounded-3xl shadow-2xl border border-green-200 px-12 py-10 text-center",children:[s.jsx(R.div,{animate:{rotate:[0,-10,10,-10,10,0]},transition:{duration:.6,delay:.2},className:"text-6xl mb-4",children:"🏆"}),s.jsx("h2",{className:"text-2xl font-bold text-green-700 mb-2",children:"¡Ejercicio dominado!"}),s.jsx("p",{className:"text-zinc-500 text-sm",children:"Todos los tests pasaron. ¡Buen trabajo!"}),s.jsx("div",{className:"mt-4 flex justify-center gap-2 text-2xl",children:["🎉","✨","🎊","⭐","🌟"].map((n,i)=>s.jsx(R.span,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.1*i+.3},children:n},i))})]})})})}function c3(){const[e,t]=x.useState(0),[n,i]=x.useState(!1),r=x.useRef(null),a=x.useCallback(()=>{i(!0)},[]);x.useEffect(()=>(n?r.current=setInterval(()=>t(l=>l+1),1e3):clearInterval(r.current),()=>clearInterval(r.current)),[n]);const o=`${String(Math.floor(e/60)).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`;return{seconds:e,fmt:o,start:a,running:n}}function d3(){var J;const{id:e}=Wc(),t=wt(),n=Mg(e),{marcarEstado:i,registrarIntento:r,ejercicios:a}=xe(),o=a[e],l=c3(),{saveVariant:c}=Rg(e),d=`42prep-code-${e}`,[u,p]=x.useState(()=>localStorage.getItem(d)||fm(n)),m=x.useRef(null),[g,b]=x.useState(()=>((n==null?void 0:n.tests)||[]).map(N=>({...N,status:"pending",output:null}))),[y,w]=x.useState(!1),[h,f]=x.useState(0),[v,j]=x.useState(!1),[_,z]=x.useState(null),[S,E]=x.useState(!1),A=x.useRef(!1),k=g.filter(N=>N.status==="passed").length,$=g.length>0&&k===g.length;x.useEffect(()=>{localStorage.setItem(d,u)},[u,d]),x.useEffect(()=>{const N=M=>{(M.ctrlKey||M.metaKey)&&M.key==="Enter"&&(M.preventDefault(),Z())};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)});const Z=async()=>{if(y||!n)return;l.running||l.start(),w(!0),z(null),f(L=>L+1),b(n.tests.map(L=>({...L,status:"pending",output:null}))),A.current=!1;const N=t3(n.id,n.tipoEntrega,u);let M=!1,F=!0;for(let L=0;L<n.tests.length;L++){const I=n.tests[L];let H;try{H=await JE(N,I.entrada)}catch(he){M=!0,F=!1,z(`Error de red: ${he.message}

Verifica tu conexión o intenta de nuevo.`),b(ce=>ce.map(Ve=>({...Ve,status:Ve.status==="pending"?"failed":Ve.status})));break}if(H.compileError){M=!0,F=!1;const he=H.compileError.includes("OCI runtime")||H.compileError.includes("Resource temporarily unavailable");z(he?"El servidor de compilación está ocupado. Intenta de nuevo en unos segundos.":H.compileError),b(ce=>ce.map(Ve=>({...Ve,status:"failed",output:""})));break}const fe=H.stdout===I.salida;fe||(F=!1),b(he=>{const ce=[...he];return ce[L]={...ce[L],status:fe?"passed":"failed",output:H.stdout},ce})}w(!1),r(e,F),F&&!M?(i(e,"dominado"),j(!0)):i(e,"practicando")},te=()=>{const N=fm(n);p(N),z(null),b(((n==null?void 0:n.tests)||[]).map(M=>({...M,status:"pending",output:null})))},G=()=>{var N;m.current&&((N=m.current.getAction("editor.action.formatDocument"))==null||N.run())},O=N=>{p(N),z(null)},D={no_iniciado:{label:"Sin empezar",cls:"bg-zinc-100 text-zinc-500"},estudiando:{label:"Estudiando",cls:"bg-blue-100 text-blue-600"},practicando:{label:"Practicando",cls:"bg-orange-100 text-orange-600"},dominado:{label:"✓ Dominado",cls:"bg-green-100 text-green-700"}}[(o==null?void 0:o.estado)||"no_iniciado"];return n?s.jsxs("div",{className:"flex flex-col h-screen bg-zinc-50 overflow-hidden",children:[s.jsx(l3,{show:v,onClose:()=>j(!1)}),S&&s.jsx(a3,{code:u,onSave:c,onClose:()=>E(!1)}),s.jsxs("header",{className:"flex items-center justify-between px-6 py-3 bg-white border-b border-zinc-200 shrink-0",children:[s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsxs("button",{onClick:()=>t(`/ejercicio/${e}`),className:"flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-800 transition-colors",children:[s.jsx(To,{size:16}),"Volver al estudio"]}),s.jsx("div",{className:"w-px h-5 bg-zinc-200"}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"text-base",children:(J=n.palacio)==null?void 0:J.emoji}),s.jsx("span",{className:"font-semibold text-zinc-800 font-mono",children:n.nombre}),s.jsx(zd,{nivel:n.nivel,tamaño:"sm"}),s.jsx("span",{className:P("text-xs font-semibold px-2 py-0.5 rounded-full",D.cls),children:D.label})]})]}),s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsxs("div",{className:"flex items-center gap-4 text-xs text-zinc-500",children:[s.jsxs("span",{children:["Intentos: ",s.jsx("strong",{className:"text-zinc-700",children:h})]}),s.jsxs("span",{children:["Tests: ",s.jsx("strong",{className:"text-green-600",children:k}),"/",s.jsx("strong",{className:"text-zinc-700",children:g.length})]})]}),s.jsxs("div",{className:"flex items-center gap-1.5 text-sm font-mono text-zinc-600 bg-zinc-100 px-3 py-1 rounded-full",children:[s.jsx(b_,{size:14}),l.fmt]}),s.jsx("button",{onClick:te,className:"flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-700",title:"Limpiar y reiniciar",children:s.jsx(Do,{size:14})})]})]}),s.jsxs("div",{className:"flex flex-1 overflow-hidden",children:[s.jsxs("div",{className:"flex flex-col flex-1 min-w-0 border-r border-zinc-200",children:[s.jsx("div",{className:"flex-1 overflow-hidden",children:s.jsx($o,{height:"100%",language:"c",theme:"vs",value:u,onChange:N=>p(N||""),onMount:N=>{m.current=N},options:{fontFamily:"'JetBrains Mono', 'Fira Code', monospace",fontSize:13,lineHeight:20,minimap:{enabled:!1},scrollBeyondLastLine:!1,tabSize:4,insertSpaces:!1,wordWrap:"off",padding:{top:16,bottom:16},renderLineHighlight:"line",suggestOnTriggerCharacters:!0,quickSuggestions:!0,formatOnPaste:!0}})}),s.jsx(ke,{children:_&&s.jsx(r3,{error:_,onDismiss:()=>z(null)})}),s.jsxs("div",{className:"shrink-0 flex items-center gap-3 px-4 py-3 bg-white border-t border-zinc-200",children:[s.jsxs(R.button,{whileTap:{scale:.95},onClick:Z,disabled:y,className:P("flex items-center gap-2 px-5 py-2 rounded-lg font-semibold text-sm transition-all",y?"bg-zinc-100 text-zinc-400 cursor-not-allowed":"bg-zinc-900 text-white hover:bg-zinc-700 shadow-sm"),children:[s.jsx(Ir,{size:15,className:y?"animate-pulse":""}),y?"Compilando…":"Compilar ▶"]}),s.jsxs("button",{onClick:te,className:"flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-zinc-600 bg-zinc-100 hover:bg-zinc-200 transition-colors",children:[s.jsx(bg,{size:14}),"Limpiar 🧹"]}),s.jsxs("button",{onClick:G,className:"flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-zinc-600 bg-zinc-100 hover:bg-zinc-200 transition-colors",children:[s.jsx(vg,{size:14}),"Formato ✨"]}),s.jsxs("button",{onClick:()=>E(!0),className:"flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-blue-600 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors",title:"Guardar el código actual como variante",children:[s.jsx(p_,{size:14}),"Guardar variante"]}),s.jsx("span",{className:"ml-auto text-xs text-zinc-400 font-mono",children:"Ctrl+Enter para compilar"})]})]}),s.jsx("div",{className:"w-96 xl:w-[420px] shrink-0 flex flex-col bg-white overflow-hidden",children:s.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("h2",{className:"font-semibold text-zinc-800 flex items-center gap-2",children:[s.jsx(Bo,{size:16,className:"text-amber-500"}),"Tests de la Moulinette"]}),s.jsx("div",{className:"flex items-center gap-2",children:s.jsxs("span",{className:P("text-sm font-bold tabular-nums",$?"text-green-600":"text-zinc-500"),children:[k,"/",g.length]})})]}),s.jsx("div",{className:"h-2 bg-zinc-100 rounded-full overflow-hidden",children:s.jsx(R.div,{className:P("h-full rounded-full",$?"bg-green-500":"bg-blue-500"),animate:{width:g.length?`${k/g.length*100}%`:"0%"},transition:{type:"spring",stiffness:200,damping:25}})}),s.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-zinc-400",children:[s.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-green-400 inline-block"}),"Verificación real con gcc (Wandbox)"]}),g.length===0?s.jsx("p",{className:"text-sm text-zinc-400 text-center py-6",children:"Sin tests definidos aún para este ejercicio."}):s.jsx("div",{className:"space-y-2",children:g.map((N,M)=>s.jsx(i3,{test:N,index:M},N.id||M))}),s.jsx("div",{className:"h-px bg-zinc-100"}),s.jsx(o3,{exercise:n,intentos:h}),h>=3&&!$&&s.jsx(R.div,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},children:s.jsx(s3,{exercise:n,onUse:O})}),s.jsxs("div",{className:"rounded-xl border border-zinc-100 bg-zinc-50 p-4",children:[s.jsx("h3",{className:"text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-3",children:"Estadísticas de la sesión"}),s.jsxs("div",{className:"grid grid-cols-3 gap-3 text-center",children:[s.jsxs("div",{children:[s.jsx("p",{className:"text-xl font-bold text-zinc-800",children:h}),s.jsx("p",{className:"text-xs text-zinc-500",children:"Intentos"})]}),s.jsxs("div",{children:[s.jsx("p",{className:"text-xl font-bold text-zinc-800",children:l.fmt}),s.jsx("p",{className:"text-xs text-zinc-500",children:"Tiempo"})]}),s.jsxs("div",{children:[s.jsx("p",{className:"text-xl font-bold text-green-600",children:k}),s.jsx("p",{className:"text-xs text-zinc-500",children:"Tests ✓"})]})]})]})]})})]})]}):s.jsx("div",{className:"flex items-center justify-center h-screen bg-zinc-50",children:s.jsxs("div",{className:"text-center",children:[s.jsx("p",{className:"text-zinc-400 text-lg",children:"Ejercicio no encontrado"}),s.jsx("button",{onClick:()=>t("/"),className:"mt-4 text-sm text-blue-600 hover:underline",children:"← Volver al inicio"})]})})}function u3(e,t,n=Math.random,i=30){const r=new Map;for(const l of e)r.has(l.nivel)||r.set(l.nivel,[]),r.get(l.nivel).push(l);const a=[...t],o=a.map(l=>{const c=r.get(l)??[];if(c.length===0)return null;const d=Math.floor(n()*c.length);return c[d]}).filter(Boolean);return{levels:a,exercises:o,totalExercises:o.length,durationMinutes:i}}function p3(){return[{to:"/",label:"Inicio"},{to:"/palacio",label:"Palacio"},{to:"/herramientas",label:"Herramientas"},{to:"/progreso",label:"Progreso"}]}function m3(e){const t=e.length,n=e.filter(a=>a.status!=="skipped").length,i=e.reduce((a,o)=>a+(o.passedTests??0),0),r=e.reduce((a,o)=>a+(o.totalTests??0),0);return{totalExercises:t,completedExercises:n,testsPassed:i,testsTotal:r,scorePct:r===0?0:Math.round(i/r*100),failedExercises:e.filter(a=>!a.passed).map(a=>a.id),timeByExercise:Object.fromEntries(e.map(a=>[a.id,a.elapsedSeconds??0]))}}const f3=Ng(Cg(e=>({tema:"light",idioma:"es",timerExamen:180,nivelesExamen:[1,2,3,4],mostrarPistas:!0,autoReveal:!1,setTimerExamen:t=>e({timerExamen:t}),setNivelesExamen:t=>e({nivelesExamen:t}),togglePistas:()=>e(t=>({mostrarPistas:!t.mostrarPistas})),setAutoReveal:t=>e({autoReveal:t}),toggleNivel:t=>e(n=>({nivelesExamen:n.nivelesExamen.includes(t)?n.nivelesExamen.filter(i=>i!==t):[...n.nivelesExamen,t].sort()}))}),{name:"42prep-settings"})),h3=[{value:30,label:"30 min"},{value:60,label:"1 h"},{value:180,label:"3 h"}],g3={levels:[1,2,3,4],durationMinutes:30,showHints:!1};function hm(){return`#include <unistd.h>

int main(int ac, char **av)
{
	(void)ac;
	(void)av;
	return (0);
}
`}function Zg(e){const t=Math.floor(e/60),n=e%60;return`${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function v3({test:e}){return s.jsx("div",{className:P("rounded-xl border px-4 py-3 text-sm",e.passed?"border-green-200 bg-green-50":"border-red-200 bg-red-50"),children:s.jsxs("div",{className:"flex items-center justify-between gap-3",children:[s.jsx("span",{className:"font-medium text-zinc-800",children:e.descripcion||e.id}),e.passed?s.jsx(Oo,{size:16,className:"text-green-600"}):s.jsx(xd,{size:16,className:"text-red-600"})]})})}function b3({config:e,onChange:t,onStart:n}){return s.jsxs("div",{className:"card p-6 space-y-6 max-w-4xl",children:[s.jsxs("div",{children:[s.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400",children:"Simulador de examen"}),s.jsx("h1",{className:"mt-2 text-3xl font-black text-zinc-900",children:"Examen aleatorio"}),s.jsx("p",{className:"mt-2 text-sm text-zinc-500",children:"Selecciona niveles, tiempo y si quieres pistas. Después de empezar, el modo concentración oculta todo lo demás."})]}),s.jsxs("div",{className:"grid gap-4 md:grid-cols-3",children:[s.jsxs("div",{className:"rounded-2xl border border-zinc-200 bg-zinc-50 p-4",children:[s.jsx("p",{className:"text-xs font-semibold uppercase tracking-wide text-zinc-400",children:"Niveles"}),s.jsx("div",{className:"mt-3 space-y-2",children:[1,2,3,4].map(i=>s.jsxs("label",{className:"flex items-center gap-2 text-sm text-zinc-700",children:[s.jsx("input",{type:"checkbox",checked:e.levels.includes(i),onChange:()=>t({...e,levels:e.levels.includes(i)?e.levels.filter(r=>r!==i):[...e.levels,i].sort()})}),"Nivel ",i]},i))})]}),s.jsxs("div",{className:"rounded-2xl border border-zinc-200 bg-zinc-50 p-4",children:[s.jsx("p",{className:"text-xs font-semibold uppercase tracking-wide text-zinc-400",children:"Duración"}),s.jsx("div",{className:"mt-3 flex flex-wrap gap-2",children:h3.map(i=>s.jsx("button",{onClick:()=>t({...e,durationMinutes:i.value}),className:P("rounded-full px-4 py-2 text-sm font-semibold border transition-colors",e.durationMinutes===i.value?"bg-zinc-900 text-white border-zinc-900":"bg-white text-zinc-600 border-zinc-200 hover:bg-zinc-50"),children:i.label},i.value))})]}),s.jsxs("div",{className:"rounded-2xl border border-zinc-200 bg-zinc-50 p-4",children:[s.jsx("p",{className:"text-xs font-semibold uppercase tracking-wide text-zinc-400",children:"Modo"}),s.jsxs("label",{className:"mt-3 flex items-center gap-2 text-sm text-zinc-700",children:[s.jsx("input",{type:"checkbox",checked:e.showHints,onChange:i=>t({...e,showHints:i.target.checked})}),"Con pistas"]})]})]}),s.jsxs("button",{onClick:n,disabled:e.levels.length===0,className:"btn-primary disabled:opacity-40",children:[s.jsx(Ir,{size:16})," Comenzar examen"]})]})}function x3({session:e,onSubmit:t,onSkip:n,onFinish:i,showHints:r}){const a=e.timeLeftSeconds/e.totalSeconds,o=e.currentExercise;return s.jsx("div",{className:"fixed inset-0 z-40 bg-[#FAFAFA]",children:s.jsxs("div",{className:"flex h-full flex-col",children:[s.jsxs("header",{className:"flex items-center justify-between border-b border-zinc-200 bg-white px-4 py-3 sm:px-6",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsxs(we,{to:"/",className:"btn-secondary",children:[s.jsx(To,{size:16})," Inicio"]}),s.jsx("div",{className:"rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm font-mono text-zinc-700",children:Zg(e.timeLeftSeconds)})]}),s.jsxs("button",{onClick:i,className:"btn-secondary",children:[s.jsx(Gp,{size:16})," Terminar"]})]}),s.jsx("div",{className:"border-b border-zinc-200 bg-white px-4 py-2 sm:px-6",children:s.jsx("div",{className:"flex flex-wrap items-center gap-2",children:p3().map(l=>s.jsx(we,{to:l.to,className:"rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-semibold text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900",children:l.label},l.to))})}),s.jsx("div",{className:"border-b border-zinc-200 bg-white px-4 sm:px-6",children:s.jsx("div",{className:"h-2 overflow-hidden rounded-full bg-zinc-100",children:s.jsx(R.div,{className:"h-full rounded-full bg-zinc-900",animate:{width:`${Math.max(a,0)*100}%`},transition:{duration:.2}})})}),s.jsx("main",{className:"flex-1 overflow-hidden p-4 sm:p-6",children:s.jsxs("div",{className:"grid h-full gap-4 lg:grid-cols-[1fr_380px]",children:[s.jsxs("div",{className:"flex min-w-0 flex-col gap-4",children:[s.jsxs("div",{className:"card flex-1 min-h-0 p-4 sm:p-6",children:[s.jsx("div",{className:"terminal-box text-base sm:text-lg whitespace-pre-wrap",children:(o==null?void 0:o.subject)||"Sin subject"}),s.jsxs("div",{className:"mt-3 flex items-center gap-2 text-xs text-zinc-500",children:[s.jsx(hg,{size:14})," Nivel ",o==null?void 0:o.nivel," · ",o==null?void 0:o.dificultad]}),r?s.jsx("p",{className:"mt-3 text-xs text-amber-600",children:"Pistas activadas para este simulacro."}):null]}),s.jsx("div",{className:"card min-h-[320px] overflow-hidden",children:s.jsx($o,{height:"320px",language:"c",theme:"vs",value:e.code,onChange:e.setCode,options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,fontSize:13,wordWrap:"off",tabSize:4,insertSpaces:!1}})}),s.jsxs("div",{className:"flex flex-wrap gap-3",children:[s.jsxs("button",{onClick:t,className:"btn-primary",children:[s.jsx(f_,{size:16})," Enviar solución"]}),s.jsxs("button",{onClick:n,className:"btn-secondary",children:[s.jsx(g_,{size:16})," Saltar ejercicio"]}),s.jsxs("button",{onClick:i,className:"btn-secondary",children:[s.jsx(Gp,{size:16})," Terminar examen"]})]})]}),s.jsxs("aside",{className:"card flex min-h-0 flex-col overflow-hidden",children:[s.jsxs("div",{className:"border-b border-zinc-200 px-4 py-3",children:[s.jsx("p",{className:"text-xs font-semibold uppercase tracking-wide text-zinc-400",children:"Tests Moulinette"}),s.jsx("p",{className:"mt-1 text-sm text-zinc-500",children:"Corre en silencio y marca el avance por ejercicio."})]}),s.jsx("div",{className:"flex-1 space-y-2 overflow-y-auto p-4",children:e.currentRun.map(l=>s.jsx(v3,{test:l},l.id))})]})]})})]})})}function y3({summary:e,onStudyFailed:t,onRepeat:n,onHome:i}){return s.jsxs("div",{className:"mx-auto max-w-5xl p-4 sm:p-6 space-y-6",children:[s.jsxs("div",{className:"card p-6",children:[s.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400",children:"Resumen del examen"}),s.jsx("h1",{className:"mt-2 text-3xl font-black text-zinc-900",children:"Examen completado"}),s.jsxs("div",{className:"mt-4 grid gap-4 md:grid-cols-4",children:[s.jsx(ca,{label:"Ejercicios completados",value:`${e.completedExercises}/${e.totalExercises}`}),s.jsx(ca,{label:"Tests pasados",value:`${e.scorePct}%`}),s.jsx(ca,{label:"Fallidos",value:e.failedExercises.length}),s.jsx(ca,{label:"Tiempo total",value:Zg(e.totalSeconds)})]})]}),s.jsxs("div",{className:"card p-6",children:[s.jsx("h2",{className:"text-lg font-bold text-zinc-900",children:"Ejercicios fallidos"}),s.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:e.failedExercises.length?e.failedExercises.map(r=>s.jsx("span",{className:"rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm text-red-700",children:r},r)):s.jsx("span",{className:"text-sm text-zinc-500",children:"Ninguno."})})]}),s.jsxs("div",{className:"flex flex-wrap gap-3",children:[s.jsx("button",{onClick:t,className:"btn-primary",children:"Estudiar ejercicios fallidos"}),s.jsx("button",{onClick:n,className:"btn-secondary",children:"Repetir examen"}),s.jsx("button",{onClick:i,className:"btn-secondary",children:"Volver al inicio"})]})]})}function ca({label:e,value:t}){return s.jsxs("div",{className:"rounded-2xl border border-zinc-200 bg-zinc-50 p-4",children:[s.jsx("p",{className:"text-xs font-semibold uppercase tracking-wide text-zinc-400",children:e}),s.jsx("p",{className:"mt-2 text-2xl font-black text-zinc-900",children:t})]})}function w3(){const e=wt(),t=f3(_=>_.mostrarPistas),n=xe(_=>_.guardarExamen),[i,r]=x.useState(g3),[a,o]=x.useState("config"),[l,c]=x.useState(null),[d,u]=x.useState(null),[p,m]=x.useState(!1),g=x.useRef(null),b=x.useRef(null),y=()=>{const _=u3(le,i.levels,Math.random,i.durationMinutes),z=_.exercises[0]??null;c({plan:_,index:0,currentExercise:z,code:hm(),setCode:S=>c(E=>E&&{...E,code:S??""}),currentRun:[],results:[],timeLeftSeconds:i.durationMinutes*60,totalSeconds:i.durationMinutes*60}),o("active")},w=_=>{c(z=>{if(!z)return z;const S=[...z.results,_],E=z.index+1,A=z.plan.exercises[E]??null;return{...z,index:E,currentExercise:A,code:hm(),currentRun:[],results:S}})},h=(_,z=900)=>{window.clearTimeout(b.current),m(!0),b.current=window.setTimeout(()=>{w(_),m(!1)},z)},f=_=>{const z=l;if(!z)return;const S=_??z.results,E=m3(S),A={timestamp:new Date().toISOString(),levels:i.levels,durationMinutes:i.durationMinutes,showHints:i.showHints,...E,totalSeconds:z.totalSeconds-z.timeLeftSeconds};n(A),u(A),o("summary")},v=()=>{if(!(l!=null&&l.currentExercise))return;const _=OE(l.currentExercise);c(A=>A&&{...A,currentRun:_});const z=_.filter(A=>A.passed).length,S=_.length,E=z===S;h({id:l.currentExercise.id,nombre:l.currentExercise.nombre,nivel:l.currentExercise.nivel,passedTests:z,totalTests:S,elapsedSeconds:i.durationMinutes*60-l.timeLeftSeconds,passed:E,status:"completed"})},j=()=>{var _;l!=null&&l.currentExercise&&h({id:l.currentExercise.id,nombre:l.currentExercise.nombre,nivel:l.currentExercise.nivel,passedTests:0,totalTests:((_=l.currentExercise.tests)==null?void 0:_.length)??0,elapsedSeconds:i.durationMinutes*60-l.timeLeftSeconds,passed:!1,status:"skipped"})};return x.useEffect(()=>{if(!(a!=="active"||!l))return g.current=window.setInterval(()=>{c(_=>{if(!_)return _;const z=Math.max(_.timeLeftSeconds-1,0);return z===0&&(window.clearInterval(g.current),queueMicrotask(()=>f(_.results))),{..._,timeLeftSeconds:z}})},1e3),()=>window.clearInterval(g.current)},[a,l]),x.useEffect(()=>{a!=="active"||!l||l.results.length>=l.plan.exercises.length&&l.plan.exercises.length>0&&f(l.results)},[l,a]),x.useEffect(()=>()=>{window.clearTimeout(b.current),window.clearInterval(g.current)},[]),a==="summary"&&d?s.jsx(y3,{summary:d,onStudyFailed:()=>e("/progreso"),onRepeat:()=>{o("config"),c(null),u(null)},onHome:()=>e("/")}):a==="active"&&l?s.jsx(x3,{session:{...l,currentRun:l.currentRun,currentExercise:l.currentExercise},onSubmit:v,onSkip:j,onFinish:()=>f(l.results),showHints:i.showHints&&t||p}):s.jsx("div",{className:"mx-auto max-w-5xl p-4 sm:p-6",children:s.jsx(b3,{config:i,onChange:r,onStart:y})})}const Sd=[{id:"strings",label:"Strings",emoji:"🧵",description:"Recorrer, cortar y transformar cadenas sin perder el hilo.",frequency:"25/30 ejercicios",subjectHints:["string","word","char","argv","strlen","strcpy","strrev","search_and_replace"],patterns:["while (str[i])","write(1, &str[i], 1)","for (const c of str)"],traps:["Olvidar el terminador \\0","Confundir índice con puntero"],trainingExercises:["ft_strlen","ft_putstr","ft_strcpy","first_word","rev_print","rotone","rot_13","search_and_replace","ulstr","ft_strrev","ft_strcmp","ft_strcspn","ft_strdup","ft_strpbrk","inter","wdmatch","epur_str","expand_str","ft_split"],recognition:"Si ves palabras, posiciones, recortes o transformaciones de texto, casi seguro entra aquí.",tools:["strings","argc"]},{id:"ascii",label:"ASCII",emoji:"🔣",description:"Hacer aritmética con letras y dígitos para convertir sin tablas.",frequency:"18/30 ejercicios",subjectHints:["ascii","upper","lower","case","digit","alphabet","mirror","capitalizer"],patterns:["c - 'a' + 1","c - 'A' + 1","±32","c - '0'"],traps:["Olvidar el +1","Aplicar la resta al rango equivocado"],trainingExercises:["repeat_alpha","rot_13","rotone","ulstr","alpha_mirror","camel_to_snake","str_capitalizer","rstr_capitalizer","ft_atoi","ft_atoi_base","do_op"],recognition:"Si la solución depende de mayúsculas, minúsculas o números como caracteres, esta es la pista.",tools:["ascii"]},{id:"argc",label:"argc / argv",emoji:"🧭",description:"Esqueleto de programas que leen argumentos de línea de comandos.",frequency:"28/30 ejercicios",subjectHints:["argc","argv","program","arguments","write"],patterns:["int main(int ac, char **av)","(void)ac;","(void)av;"],traps:["No validar argc","Confundir función con programa"],trainingExercises:["ft_strlen","ft_swap","ft_putstr","ft_strcpy","fizzbuzz","first_word","rev_print","rotone","rot_13","search_and_replace","ulstr","do_op","ft_atoi","ft_split","fprime"],recognition:"Si el subject habla de entrada por terminal, casi siempre empieza por argc/argv.",tools:["argc","strings"]},{id:"bandera",label:"Bandera",emoji:"🚩",description:"Controlar estados al recorrer strings: duplicados, espacios y separadores.",frequency:"10/30 ejercicios",subjectHints:["space","spaces","duplicate","duplicate words","first word","last word","epur","expand","split"],patterns:["int k = 0;","if (k)","k = 1;"],traps:["Imprimir espacios de más","Olvidar reiniciar el estado"],trainingExercises:["first_word","last_word","epur_str","expand_str","ft_split","search_and_replace","inter","wdmatch","union","fizzbuzz"],recognition:"Cuando hay espacios dobles, flags de impresión o separadores, mira la bandera.",tools:["bandera","strings"]},{id:"recursion",label:"Recursión",emoji:"🌀",description:"Resolver repitiendo el mismo patrón con un caso base claro.",frequency:"8/30 ejercicios",subjectHints:["recursive","recursion","list","base","nbr","prime","factor"],patterns:["if (n <= 1) return;","call the same function again","divide and conquer"],traps:["Caso base ausente","No avanzar el estado"],trainingExercises:["ft_putnbr","ft_range","ft_rrange","ft_list_size","add_prime_sum","fprime","ft_atoi_base","sort_list"],recognition:"Si el problema se vuelve más pequeño y repite la misma lógica, suele ser recursión.",tools:["recursion"]},{id:"bits",label:"Bits",emoji:"🧮",description:"Mover, enmascarar y recombinar bits para ver el byte como una máquina.",frequency:"5/30 ejercicios",subjectHints:["bit","bits","binary","byte","reverse","swap"],patterns:[">>","<<","&","|","%2","/2"],traps:["Usar el bit equivocado","No limitar a 8 bits"],trainingExercises:["print_bits","reverse_bits","swap_bits","is_power_of_2","ft_swap","ft_atoi_base"],recognition:"Si el subject pide bytes, binarios o desplazamientos, es zona de bits.",tools:["bits"]},{id:"malloc",label:"malloc",emoji:"🧠",description:"Reservar memoria y cerrar bien el array con NULL final.",frequency:"8/30 ejercicios",subjectHints:["malloc","array","split","range","clone","copy","list","memory"],patterns:["malloc(sizeof(...))","len + 1","result[i] = NULL"],traps:["Olvidar el NULL final","No reservar un byte extra"],trainingExercises:["ft_strdup","ft_range","ft_rrange","ft_split","sort_list","ft_list_size","union","ft_strdup"],recognition:"Si hay arrays dinámicos, clones de strings o listas nuevas, piensa en malloc.",tools:["malloc"]}],Er=Object.fromEntries(Sd.map(e=>[e.id,e])),j3=[{toolId:"strings",keywords:["string","strings","word","words","char","chars","argv","first word","last word","search_and_replace","str","copy","reverse"]},{toolId:"ascii",keywords:["ascii","uppercase","lowercase","mirror","capitalizer","alphabet","digit","digit","case"]},{toolId:"argc",keywords:["argc","argv","main","program","arguments","write"]},{toolId:"bandera",keywords:["space","spaces","duplicate","duplicates","epur","expand","flag","separator","compress"]},{toolId:"recursion",keywords:["recursive","recursion","list","prime","factor","base","tree"]},{toolId:"bits",keywords:["bit","bits","binary","byte","swap_bits","reverse_bits","print_bits","mask"]},{toolId:"malloc",keywords:["malloc","memory","array","clone","split","range","list","buffer"]}],_3=[{prompt:"Subject: print characters one by one from argv[1]",correctToolId:"argc",distractors:["strings","malloc","bits"]},{prompt:"Subject: uppercase and lowercase conversion with 32",correctToolId:"ascii",distractors:["strings","bits","malloc"]},{prompt:"Subject: remove duplicate spaces between words",correctToolId:"bandera",distractors:["strings","argc","recursion"]},{prompt:"Subject: reverse the bits of a byte",correctToolId:"bits",distractors:["ascii","malloc","strings"]},{prompt:"Subject: recursively print the factors of a number",correctToolId:"recursion",distractors:["bits","argc","bandera"]},{prompt:"Subject: duplicate a string in a new buffer",correctToolId:"malloc",distractors:["strings","bits","ascii"]},{prompt:"Subject: find the first word in a string",correctToolId:"strings",distractors:["argc","malloc","bits"]},{prompt:"Subject: convert CamelCase to snake_case",correctToolId:"ascii",distractors:["bandera","recursion","malloc"]},{prompt:"Subject: split the string on a separator",correctToolId:"malloc",distractors:["strings","argc","bits"]},{prompt:"Subject: count the length of argv[1]",correctToolId:"argc",distractors:["strings","bandera","recursion"]}];function z3(e){return e.toLowerCase()}function gm(e){return[...new Set(e)]}function S3(e){const t=["#include <unistd.h>",e.includes("malloc")?"#include <stdlib.h>":null,"","int main(int ac, char **av)","{","	(void)ac;","	(void)av;"];return e.includes("strings")&&t.push("	while (str[i])","		write(1, &str[i], 1);"),e.includes("ascii")&&t.push("	if (c >= 'a' && c <= 'z') c = c - 'a' + 1;"),e.includes("bandera")&&t.push("	int k = 0;"),e.includes("bits")&&t.push("	value = (value >> 1) | (value << 1);"),e.includes("malloc")&&t.push("	result = malloc(sizeof(char) * (len + 1));","	result[i] = NULL;"),t.push("	return (0);","}",""),t.filter(Boolean).join(`
`)}function E3(){return Sd.map(e=>({...e}))}function Ed(e){return Er[e]?{...Er[e]}:null}function N3(e){const t=Er[e];return t?t.trainingExercises.map(n=>le.find(i=>i.id===n)).filter(Boolean):[]}function C3(e){const t=z3(e),n=[],i=[];for(const a of j3)if(a.keywords.some(l=>t.includes(l))){i.push(a.toolId);for(const l of a.keywords)t.includes(l)&&n.push(l)}const r=gm(i);return r.includes("ascii")&&!r.includes("strings")&&r.unshift("strings"),{toolIds:r,keywords:gm(n),skeleton:S3(r),similarExercises:le.filter(a=>r.some(o=>{var l;return(l=Ed(o))==null?void 0:l.trainingExercises.includes(a.id)})).slice(0,6)}}function k3(){return _3.map((e,t)=>{const n=Er[e.correctToolId],i=e.distractors.map(a=>Er[a]).filter(Boolean).slice(0,3),r=[n,...i].slice(0,4);for(;r.length<4;)r.push(Sd[r.length]);return{id:`quiz-${t+1}`,prompt:e.prompt,options:r.map(a=>({id:a.id,label:a.label,emoji:a.emoji})),correctIndex:r.findIndex(a=>a.id===n.id),explanation:n.description}})}const L3=[{id:"tools",label:"Las 7 Herramientas",icon:gg},{id:"decoder",label:"Decodificador de Subjects",icon:y_},{id:"quiz",label:"Quiz Relámpago",icon:Io}];function Os({title:e,subtitle:t}){return s.jsxs("div",{className:"mb-6",children:[s.jsx("h2",{className:"text-2xl sm:text-3xl font-black tracking-tight text-zinc-900",children:e}),t?s.jsx("p",{className:"mt-2 text-sm sm:text-base text-zinc-500 max-w-3xl",children:t}):null]})}function A3({tool:e,open:t,onToggle:n}){const i=N3(e.id);return s.jsxs(R.div,{layout:!0,className:P("rounded-3xl border bg-white shadow-sm overflow-hidden",t?"border-zinc-300":"border-zinc-200"),children:[s.jsxs("button",{onClick:n,className:"w-full px-5 py-4 text-left flex items-center gap-4 hover:bg-zinc-50 transition-colors",children:[s.jsx("div",{className:"h-12 w-12 rounded-2xl bg-zinc-100 flex items-center justify-center text-2xl shrink-0",children:e.emoji}),s.jsxs("div",{className:"flex-1 min-w-0",children:[s.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[s.jsx("h3",{className:"font-bold text-zinc-900",children:e.label}),s.jsx("span",{className:"text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200",children:e.frequency})]}),s.jsx("p",{className:"mt-1 text-sm text-zinc-500 line-clamp-2",children:e.description})]}),t?s.jsx(bd,{size:18,className:"text-zinc-400"}):s.jsx(gd,{size:18,className:"text-zinc-400"})]}),s.jsx(ke,{initial:!1,children:t&&s.jsx(R.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},className:"overflow-hidden",children:s.jsxs("div",{className:"px-5 pb-5 pt-1 grid gap-4 md:grid-cols-2",children:[s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{children:[s.jsx("p",{className:"text-xs font-semibold uppercase tracking-wide text-zinc-400",children:"Cuándo entra"}),s.jsx("p",{className:"mt-1 text-sm text-zinc-700",children:e.recognition})]}),s.jsxs("div",{children:[s.jsx("p",{className:"text-xs font-semibold uppercase tracking-wide text-zinc-400",children:"Patrones"}),s.jsx("div",{className:"mt-2 flex flex-wrap gap-2",children:e.patterns.map(r=>s.jsx("span",{className:"px-2.5 py-1 rounded-lg bg-sky-50 text-sky-700 border border-sky-200 text-xs font-mono",children:r},r))})]}),s.jsxs("div",{children:[s.jsx("p",{className:"text-xs font-semibold uppercase tracking-wide text-zinc-400",children:"Trampas"}),s.jsx("ul",{className:"mt-2 space-y-2 text-sm text-zinc-700",children:e.traps.map(r=>s.jsxs("li",{className:"flex gap-2",children:[s.jsx("span",{className:"mt-1 h-1.5 w-1.5 rounded-full bg-rose-400 shrink-0"}),r]},r))})]})]}),s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{children:[s.jsx("p",{className:"text-xs font-semibold uppercase tracking-wide text-zinc-400",children:"Ejercicios para entrenar"}),s.jsx("div",{className:"mt-2 flex flex-wrap gap-2",children:i.map(r=>s.jsx("span",{className:"px-2.5 py-1 rounded-lg bg-zinc-100 text-zinc-700 border border-zinc-200 text-xs font-medium",children:r.nombre},r.id))})]}),s.jsxs("div",{children:[s.jsx("p",{className:"text-xs font-semibold uppercase tracking-wide text-zinc-400",children:"Reglas rápidas"}),s.jsxs("div",{className:"mt-2 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-700",children:[s.jsx("p",{children:e.tools.map(r=>{var a;return(a=Ed(r))==null?void 0:a.label}).filter(Boolean).join(" + ")||e.label}),s.jsx("p",{className:"mt-2 text-zinc-500",children:e.subjectHints.join(" · ")})]})]})]})]})})})]})}function P3(){const[e,t]=x.useState("Write a program that trims duplicate spaces from argv and prints the first word"),n=x.useMemo(()=>C3(e),[e]);return s.jsxs("div",{className:"grid gap-6 xl:grid-cols-[1.05fr_0.95fr]",children:[s.jsxs("div",{className:"rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm space-y-4",children:[s.jsxs("div",{children:[s.jsx("p",{className:"text-xs font-semibold uppercase tracking-wide text-zinc-400",children:"Subject en inglés"}),s.jsx("textarea",{value:e,onChange:i=>t(i.target.value),rows:6,className:"mt-2 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-800 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"})]}),s.jsx("div",{className:"flex flex-wrap gap-2",children:["argc","strings","ascii","bandera","recursion","bits","malloc"].map(i=>s.jsxs("button",{onClick:()=>t(r=>`${r} ${i}`.trim()),className:"px-3 py-1.5 rounded-full border border-zinc-200 bg-white text-xs font-medium text-zinc-600 hover:border-sky-300 hover:text-sky-700 transition-colors",children:["+ ",i]},i))}),s.jsxs("div",{className:"grid gap-3 sm:grid-cols-2",children:[s.jsxs("div",{className:"rounded-2xl border border-zinc-200 bg-zinc-50 p-4",children:[s.jsx("p",{className:"text-xs font-semibold uppercase tracking-wide text-zinc-400",children:"Herramientas detectadas"}),s.jsx("div",{className:"mt-2 flex flex-wrap gap-2",children:n.toolIds.length?n.toolIds.map(i=>{const r=Ed(i);return s.jsxs("span",{className:"px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold",children:[r==null?void 0:r.emoji," ",r==null?void 0:r.label]},i)}):s.jsx("span",{className:"text-sm text-zinc-500",children:"Ninguna todavía."})})]}),s.jsxs("div",{className:"rounded-2xl border border-zinc-200 bg-zinc-50 p-4",children:[s.jsx("p",{className:"text-xs font-semibold uppercase tracking-wide text-zinc-400",children:"Keywords capturadas"}),s.jsx("div",{className:"mt-2 flex flex-wrap gap-2",children:n.keywords.length?n.keywords.map(i=>s.jsx("span",{className:"px-2.5 py-1 rounded-lg bg-sky-50 text-sky-700 border border-sky-200 text-xs font-mono",children:i},i)):s.jsx("span",{className:"text-sm text-zinc-500",children:"Escribe más texto para afinar."})})]})]})]}),s.jsxs("div",{className:"rounded-3xl border border-zinc-200 bg-white shadow-sm overflow-hidden",children:[s.jsxs("div",{className:"border-b border-zinc-200 px-5 py-4 flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsx("p",{className:"text-xs font-semibold uppercase tracking-wide text-zinc-400",children:"Skeleton sugerido"}),s.jsx("p",{className:"text-sm text-zinc-600",children:"Pega esto en el editor y ajusta la lógica."})]}),s.jsx(vg,{className:"text-sky-500",size:18})]}),s.jsx($o,{height:"420px",defaultLanguage:"c",value:n.skeleton,options:{readOnly:!0,minimap:{enabled:!1},fontSize:13,scrollBeyondLastLine:!1,lineNumbers:"on",wordWrap:"on"},theme:"vs-light"}),s.jsxs("div",{className:"p-5 border-t border-zinc-200 bg-zinc-50",children:[s.jsx("p",{className:"text-xs font-semibold uppercase tracking-wide text-zinc-400",children:"Ejercicios similares"}),s.jsx("div",{className:"mt-3 flex flex-wrap gap-2",children:n.similarExercises.map(i=>s.jsx("span",{className:"px-2.5 py-1 rounded-lg bg-white border border-zinc-200 text-xs text-zinc-700",children:i.nombre},i.id))})]})]})]})}function M3(){const e=x.useMemo(()=>k3(),[]),[t,n]=x.useState(0),[i,r]=x.useState(null),[a,o]=x.useState(0),[l,c]=x.useState(!1),d=e[t];x.useEffect(()=>{r(null),c(!1)},[t]);const u=g=>{i===null&&(r(g),g===d.correctIndex&&o(b=>b+1))},p=()=>{if(t===e.length-1){c(!0);return}n(g=>g+1)},m=()=>{n(0),r(null),o(0),c(!1)};return l?s.jsxs("div",{className:"max-w-2xl mx-auto rounded-3xl border border-zinc-200 bg-white p-8 text-center shadow-sm",children:[s.jsx(Bo,{className:"mx-auto text-amber-500",size:44}),s.jsx("h3",{className:"mt-4 text-2xl font-black text-zinc-900",children:"Resultado final"}),s.jsxs("p",{className:"mt-2 text-zinc-500",children:["Marcaste ",a,"/",e.length,"."]}),s.jsxs("button",{onClick:m,className:"mt-6 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800",children:[s.jsx(Do,{size:16})," Repetir"]})]}):s.jsxs("div",{className:"max-w-3xl mx-auto space-y-6",children:[s.jsxs("div",{className:"flex items-center justify-between text-sm font-semibold text-zinc-500",children:[s.jsxs("span",{children:["Pregunta ",t+1,"/",e.length]}),s.jsxs("span",{children:["Score ",a]})]}),s.jsxs("div",{className:"rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm",children:[s.jsx("p",{className:"text-lg font-bold text-zinc-900",children:d.prompt}),s.jsx("div",{className:"mt-5 grid gap-3 sm:grid-cols-2",children:d.options.map((g,b)=>{const y=b===d.correctIndex,w=i===b,h=i!==null;return s.jsx("button",{onClick:()=>u(b),className:P("rounded-2xl border px-4 py-4 text-left transition-all",h&&y?"border-green-300 bg-green-50":h&&w&&!y?"border-red-300 bg-red-50":"border-zinc-200 bg-zinc-50 hover:border-sky-300 hover:bg-sky-50"),children:s.jsxs("div",{className:"flex items-center justify-between gap-3",children:[s.jsxs("span",{className:"font-semibold text-zinc-900",children:[g.emoji," ",g.label]}),h&&y?s.jsx(Oo,{className:"text-green-600",size:18}):null,h&&w&&!y?s.jsx(xd,{className:"text-red-600",size:18}):null]})},g.id)})}),i!==null&&s.jsxs("div",{className:"mt-5 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-700",children:[s.jsx("p",{className:"font-semibold text-zinc-900",children:i===d.correctIndex?"Correcto.":"No."}),s.jsx("p",{className:"mt-1",children:d.explanation})]}),s.jsxs("div",{className:"mt-6 flex items-center justify-between gap-3",children:[s.jsx("button",{onClick:m,className:"rounded-full border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-600 hover:bg-zinc-50",children:"Reset"}),s.jsx("button",{onClick:p,disabled:i===null,className:"rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-40",children:t===e.length-1?"Terminar":"Siguiente"})]})]})]})}function T3(){const[e,t]=$h(),[n,i]=x.useState(e.get("tab")||"tools"),[r,a]=x.useState("strings"),o=xe(d=>d.getTotalDominados()),l=x.useMemo(()=>E3(),[]);x.useEffect(()=>{const d=e.get("tab");d&&d!==n&&i(d)},[e,n]);const c=d=>{i(d),t(u=>{const p=new URLSearchParams(u);return p.set("tab",d),p},{replace:!0})};return s.jsx("div",{className:"min-h-screen bg-gradient-to-b from-zinc-50 to-white",children:s.jsxs("div",{className:"mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10",children:[s.jsx("header",{className:"rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm sm:p-8",children:s.jsxs("div",{className:"flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between",children:[s.jsxs("div",{className:"max-w-3xl",children:[s.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.24em] text-sky-500",children:"Prompt 12"}),s.jsx("h1",{className:"mt-2 text-3xl font-black tracking-tight text-zinc-900 sm:text-5xl",children:"Tools"}),s.jsx("p",{className:"mt-3 text-sm sm:text-base text-zinc-600",children:"Las 7 herramientas universales, un decodificador de subjects y un quiz relámpago para entrenar el instinto antes de abrir el editor."})]}),s.jsxs("div",{className:"flex flex-wrap gap-3 text-sm",children:[s.jsxs("div",{className:"rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3",children:[s.jsx("div",{className:"text-zinc-400 font-semibold uppercase tracking-wide text-[11px]",children:"Herramientas"}),s.jsx("div",{className:"mt-1 text-xl font-black text-zinc-900",children:"7"})]}),s.jsxs("div",{className:"rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3",children:[s.jsx("div",{className:"text-zinc-400 font-semibold uppercase tracking-wide text-[11px]",children:"Dominados"}),s.jsx("div",{className:"mt-1 text-xl font-black text-zinc-900",children:o})]})]})]})}),s.jsx("div",{className:"mt-6 rounded-full border border-zinc-200 bg-white p-2 shadow-sm flex flex-wrap gap-2",children:L3.map(d=>{const u=d.icon,p=n===d.id;return s.jsxs("button",{onClick:()=>c(d.id),className:P("flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors",p?"bg-zinc-900 text-white":"text-zinc-600 hover:bg-zinc-100"),children:[s.jsx(u,{size:16}),d.label]},d.id)})}),s.jsx("div",{className:"mt-8",children:s.jsx(ke,{mode:"wait",children:s.jsxs(R.section,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},children:[n==="tools"&&s.jsxs("div",{children:[s.jsx(Os,{title:"Las 7 herramientas",subtitle:"Úsalas como filtros mentales: no resuelven todo, pero reducen el espacio de búsqueda en segundos."}),s.jsx("div",{className:"space-y-4",children:l.map(d=>s.jsx(A3,{tool:d,open:r===d.id,onToggle:()=>a(u=>u===d.id?"":d.id)},d.id))})]}),n==="decoder"&&s.jsxs("div",{children:[s.jsx(Os,{title:"Decodificador de Subjects",subtitle:"Pega el subject y mira qué herramientas entran, qué ejercicios lo entrenan y cuál sería el esqueleto inicial."}),s.jsx(P3,{})]}),n==="quiz"&&s.jsxs("div",{children:[s.jsx(Os,{title:"Quiz relámpago",subtitle:"Lee el subject, identifica la herramienta y responde sin pensar de más. Ritmo corto, repetición alta."}),s.jsx(M3,{})]})]},n)})})]})})}const R3=[1,2,3,4];function O3(e){const t=e?new Date(e):null;return t&&!Number.isNaN(t.getTime())?t:null}function vm(e,t){return t?Math.round(e/t*100):0}function I3(e,t,n=new Date){const i=O3(t)??n,r=[];for(let a=6;a>=0;a-=1){const o=new Date(i);o.setDate(i.getDate()-(6-a)),r.push({date:o.toISOString(),label:o.toLocaleDateString("es-ES",{weekday:"narrow"}),active:a>=7-Math.min(Math.max(e,0),7)})}return r}function D3(e={},t={}){if(typeof e.fallos=="number")return e.fallos;const n=t[e.id];if(typeof n=="number")return n;const i=typeof e.testsPasados=="number"?e.testsPasados:0,r=typeof e.testsTotal=="number"?e.testsTotal:0;return Math.max(r-i,0)}function F3({exercises:e=[],progressById:t={},exams:n=[],streak:i=0,totalSessions:r=0,lastSession:a=null,now:o=new Date}={}){const l=e.length,d=e.filter(w=>{var h;return((h=t[w.id])==null?void 0:h.estado)==="dominado"}).length,u=vm(d,l),p=n.reduce((w,h)=>{for(const f of h.failedExercises??[])w[f]=(w[f]??0)+1;return w},{}),m=R3.map(w=>{const h=e.filter(v=>v.nivel===w),f=h.filter(v=>{var j;return((j=t[v.id])==null?void 0:j.estado)==="dominado"}).length;return{level:w,total:h.length,mastered:f,pct:vm(f,h.length)}}),g=e.map(w=>{const h={id:w.id,...t[w.id]??{}},f=D3(h,p),v=h.intentos??0;return{...w,progress:h,failedCount:f,attempts:v}}).filter(w=>w.failedCount>0).sort((w,h)=>h.failedCount-w.failedCount||h.attempts-w.attempts||w.nombre.localeCompare(h.nombre)).slice(0,5),b=[...n].sort((w,h)=>new Date(h.timestamp)-new Date(w.timestamp)).slice(0,10),y=n.reduce((w,h)=>w+(h.totalSeconds??0),0);return{totalExercises:l,masteredCount:d,masteredPct:u,levelStats:m,weakSpots:g,examHistory:b,totalPracticeSeconds:y,totalSessions:r,streak:i,lastSession:a,miniCalendar:I3(i,a,o)}}const ao={dominado:{dot:"bg-green-500",chip:"bg-green-50 text-green-700 border-green-200",card:"border-green-200 bg-green-50/80"},practicando:{dot:"bg-orange-500",chip:"bg-orange-50 text-orange-700 border-orange-200",card:"border-orange-200 bg-orange-50/80"},estudiando:{dot:"bg-sky-500",chip:"bg-sky-50 text-sky-700 border-sky-200",card:"border-sky-200 bg-sky-50/80"},no_iniciado:{dot:"bg-zinc-300",chip:"bg-zinc-100 text-zinc-600 border-zinc-200",card:"border-zinc-200 bg-zinc-50"}},Gg={1:{bar:"bg-purple-500",fill:"from-purple-500 to-purple-400",bg:"bg-purple-50",border:"border-purple-200",text:"text-purple-700"},2:{bar:"bg-green-500",fill:"from-green-500 to-green-400",bg:"bg-green-50",border:"border-green-200",text:"text-green-700"},3:{bar:"bg-orange-500",fill:"from-orange-500 to-orange-400",bg:"bg-orange-50",border:"border-orange-200",text:"text-orange-700"},4:{bar:"bg-red-500",fill:"from-red-500 to-red-400",bg:"bg-red-50",border:"border-red-200",text:"text-red-700"}};function B3(e){return e.replace(/^ft_/,"").replaceAll("_"," ")}function Kg(e=0){const t=Math.floor(e/60),n=e%60;return t===0?`${n}s`:`${t}m ${n.toString().padStart(2,"0")}s`}function Qg(e){const t=new Date(e);return Number.isNaN(t.getTime())?"—":new Intl.DateTimeFormat("es-ES",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(t)}function U3({value:e,total:t}){const n=t?Math.round(e/t*100):0,i=56,r=2*Math.PI*i,a=r-n/100*r;return s.jsxs("div",{className:"relative flex items-center justify-center",children:[s.jsxs("svg",{viewBox:"0 0 140 140",className:"h-40 w-40 -rotate-90",children:[s.jsx("circle",{cx:"70",cy:"70",r:i,className:"fill-none stroke-zinc-100",strokeWidth:"12"}),s.jsx("circle",{cx:"70",cy:"70",r:i,className:"fill-none stroke-zinc-900",strokeWidth:"12",strokeLinecap:"round",strokeDasharray:r,strokeDashoffset:a})]}),s.jsxs("div",{className:"absolute text-center",children:[s.jsxs("div",{className:"text-3xl font-black text-zinc-900",children:[n,"%"]}),s.jsx("div",{className:"mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400",children:"Dominado"})]})]})}function Ri({eyebrow:e,title:t,description:n}){return s.jsxs("div",{className:"mb-4",children:[s.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.22em] text-sky-500",children:e}),s.jsx("h2",{className:"mt-2 text-2xl font-black tracking-tight text-zinc-900",children:t}),n?s.jsx("p",{className:"mt-2 max-w-3xl text-sm text-zinc-500",children:n}):null]})}function Dn({icon:e,label:t,value:n,hint:i,tone:r="zinc"}){const a={zinc:"bg-zinc-50 border-zinc-200 text-zinc-900",green:"bg-green-50 border-green-200 text-green-700",orange:"bg-orange-50 border-orange-200 text-orange-700",purple:"bg-purple-50 border-purple-200 text-purple-700"};return s.jsxs("div",{className:P("rounded-3xl border p-4 sm:p-5",a[r]),children:[s.jsxs("div",{className:"flex items-center justify-between gap-3",children:[s.jsx("p",{className:"text-xs font-semibold uppercase tracking-wide text-zinc-400",children:t}),s.jsx(e,{size:16,className:P(r==="zinc"?"text-zinc-400":"text-current")})]}),s.jsx("div",{className:"mt-3 text-2xl font-black",children:n}),i?s.jsx("p",{className:"mt-1 text-xs text-zinc-500",children:i}):null]})}function V3({days:e}){return s.jsxs("div",{className:"rounded-3xl border border-zinc-200 bg-zinc-50 p-4",children:[s.jsxs("div",{className:"flex items-center justify-between gap-3",children:[s.jsxs("div",{children:[s.jsx("p",{className:"text-xs font-semibold uppercase tracking-wide text-zinc-400",children:"Mini calendario"}),s.jsx("p",{className:"mt-1 text-sm font-semibold text-zinc-700",children:"Racha actual"})]}),s.jsx(t_,{size:18,className:"text-zinc-400"})]}),s.jsx("div",{className:"mt-4 grid grid-cols-7 gap-2",children:e.map(t=>s.jsx("div",{className:P("flex h-10 flex-col items-center justify-center rounded-2xl border text-[10px] font-semibold uppercase tracking-wide",t.active?"border-green-200 bg-green-500 text-white":"border-zinc-200 bg-white text-zinc-400"),children:s.jsx("span",{children:t.label})},t.date))})]})}function $3({level:e,total:t,mastered:n,pct:i}){const r=Gg[e];return s.jsxs("div",{className:"rounded-3xl border border-zinc-200 bg-white p-4 shadow-sm",children:[s.jsxs("div",{className:"flex items-center justify-between gap-3 text-sm",children:[s.jsxs("div",{children:[s.jsxs("p",{className:P("font-semibold",r.text),children:["Nivel ",e]}),s.jsxs("p",{className:"mt-1 text-xs text-zinc-500",children:[n,"/",t," ejercicios"]})]}),s.jsxs("span",{className:P("rounded-full border px-3 py-1 text-xs font-semibold",r.bg,r.border,r.text),children:[i,"%"]})]}),s.jsx("div",{className:"mt-4 h-2 overflow-hidden rounded-full bg-zinc-100",children:s.jsx(R.div,{className:P("h-full rounded-full",r.bar),initial:{width:0},animate:{width:`${i}%`},transition:{duration:.4,ease:"easeOut"}})})]})}function q3({exercise:e,progress:t}){const n=ao[t==null?void 0:t.estado]??ao.no_iniciado;return s.jsxs(we,{to:`/ejercicio/${e.id}`,className:P("group rounded-3xl border p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-card-hover",n.card),children:[s.jsxs("div",{className:"flex items-start justify-between gap-3",children:[s.jsx("span",{className:"text-2xl",children:e.palacio.emoji}),s.jsx("span",{className:P("rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide",n.chip),children:(t==null?void 0:t.estado)??"no_iniciado"})]}),s.jsx("p",{className:"mt-3 font-semibold text-zinc-900",children:B3(e.nombre)}),s.jsxs("p",{className:"mt-1 text-xs text-zinc-500",children:["Nivel ",e.nivel]}),s.jsxs("div",{className:"mt-4 flex items-center justify-between text-xs text-zinc-400",children:[s.jsxs("span",{children:[(t==null?void 0:t.intentos)??0," intentos"]}),s.jsx(Jj,{size:14,className:"opacity-0 transition-opacity group-hover:opacity-100"})]})]})}function H3({exercise:e,progress:t}){return s.jsx("div",{className:"rounded-3xl border border-red-200 bg-red-50/70 p-4",children:s.jsxs("div",{className:"flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",children:[s.jsxs("div",{children:[s.jsx("p",{className:"text-sm font-semibold text-zinc-900",children:e.nombre}),s.jsxs("p",{className:"mt-1 text-xs text-zinc-500",children:[e.palacio.emoji," · Nivel ",e.nivel]})]}),s.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-xs font-semibold",children:[s.jsxs("span",{className:"rounded-full border border-red-200 bg-white px-3 py-1 text-red-700",children:[e.failedCount," fallos"]}),s.jsxs("span",{className:"rounded-full border border-zinc-200 bg-white px-3 py-1 text-zinc-600",children:[t.intentos??0," intentos"]}),s.jsx(we,{to:`/practicar/${e.id}`,className:"rounded-full bg-red-600 px-3 py-1 text-white transition-colors hover:bg-red-500",children:"Estudiar ahora"})]})]})})}function W3({rows:e}){return e.length===0?s.jsx("div",{className:"rounded-3xl border border-zinc-200 bg-white p-6 text-sm text-zinc-500",children:"Todavía no hay exámenes guardados."}):s.jsx("div",{className:"overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm",children:s.jsxs("table",{className:"min-w-full divide-y divide-zinc-100 text-sm",children:[s.jsx("thead",{className:"bg-zinc-50 text-xs uppercase tracking-wide text-zinc-400",children:s.jsxs("tr",{children:[s.jsx("th",{className:"px-4 py-3 text-left font-semibold",children:"Fecha"}),s.jsx("th",{className:"px-4 py-3 text-left font-semibold",children:"Niveles"}),s.jsx("th",{className:"px-4 py-3 text-left font-semibold",children:"Score"}),s.jsx("th",{className:"px-4 py-3 text-left font-semibold",children:"Tiempo"}),s.jsx("th",{className:"px-4 py-3 text-left font-semibold",children:"Fallidos"})]})}),s.jsx("tbody",{className:"divide-y divide-zinc-100",children:e.map(t=>{var n,i;return s.jsxs("tr",{className:"text-zinc-700",children:[s.jsx("td",{className:"px-4 py-3 whitespace-nowrap",children:Qg(t.timestamp)}),s.jsx("td",{className:"px-4 py-3",children:((n=t.levels)==null?void 0:n.map(r=>`Nivel ${r}`).join(", "))||"—"}),s.jsxs("td",{className:"px-4 py-3 font-semibold text-zinc-900",children:[t.scorePct,"%"]}),s.jsx("td",{className:"px-4 py-3 whitespace-nowrap",children:Kg(t.totalSeconds??0)}),s.jsx("td",{className:"px-4 py-3",children:((i=t.failedExercises)==null?void 0:i.length)??0})]},t.timestamp)})})]})})}function Z3(){var m,g;const e=xe(b=>b.ejercicios),t=xe(b=>b.examenes),n=xe(b=>b.racha),i=xe(b=>b.totalSesiones),r=xe(b=>b.ultimaSesion),a=xe(b=>b.actualizarNotas),[o,l]=x.useState(((m=le[0])==null?void 0:m.id)??""),c=x.useMemo(()=>F3({exercises:le,progressById:e,exams:t,streak:n,totalSessions:i,lastSession:r}),[e,t,n,i,r]),d=le.find(b=>b.id===o)??le[0]??null,u=d?e[d.id]:null,p=x.useMemo(()=>[1,2,3,4].map(b=>({level:b,exercises:le.filter(y=>y.nivel===b)})),[]);return s.jsxs("div",{className:"mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10 space-y-8",children:[s.jsxs(R.header,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{duration:.2,ease:"easeOut"},className:"card p-6 sm:p-8",children:[s.jsxs("div",{className:"flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between",children:[s.jsxs("div",{className:"max-w-3xl",children:[s.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.22em] text-sky-500",children:"Prompt 14"}),s.jsx("h1",{className:"mt-2 text-3xl font-black tracking-tight text-zinc-900 sm:text-5xl",children:"Progreso"}),s.jsx("p",{className:"mt-3 text-sm sm:text-base text-zinc-600",children:"Tu mapa de dominio: qué ya tienes, dónde te rompes y qué conviene estudiar ahora."})]}),s.jsxs("div",{className:"grid gap-3 sm:grid-cols-2 xl:grid-cols-4 xl:min-w-[560px]",children:[s.jsx(Dn,{icon:Bo,label:"Dominados",value:`${c.masteredCount}/${c.totalExercises}`,hint:`${c.masteredPct}% del total`,tone:"green"}),s.jsx(Dn,{icon:Io,label:"Racha",value:`${c.streak} días`,hint:c.lastSession?`Última sesión: ${Qg(c.lastSession)}`:"Sin sesiones aún",tone:"orange"}),s.jsx(Dn,{icon:hd,label:"Sesiones",value:c.totalSessions,hint:"Exámenes guardados",tone:"purple"}),s.jsx(Dn,{icon:hg,label:"Práctica",value:Kg(c.totalPracticeSeconds),hint:"Tiempo acumulado",tone:"zinc"})]})]}),s.jsxs("div",{className:"mt-6 grid gap-4 xl:grid-cols-[1.1fr_0.9fr]",children:[s.jsx("div",{className:"rounded-3xl border border-zinc-200 bg-zinc-50 p-5 sm:p-6",children:s.jsxs("div",{className:"flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between",children:[s.jsx(U3,{value:c.masteredCount,total:c.totalExercises}),s.jsxs("div",{className:"grid flex-1 gap-3 sm:grid-cols-2",children:[s.jsx(Dn,{icon:Oo,label:"Ejercicios",value:c.totalExercises,hint:"Total disponible",tone:"zinc"}),s.jsx(Dn,{icon:xg,label:"Puntos débiles",value:c.weakSpots.length,hint:"Top 5 por fallos",tone:"orange"})]})]})}),s.jsx(V3,{days:c.miniCalendar})]})]}),s.jsxs("section",{children:[s.jsx(Ri,{eyebrow:"Estado por nivel",title:"4 barras de progreso",description:"Cada barra resume cuánto tienes consolidado por nivel de la plataforma."}),s.jsx("div",{className:"grid gap-4 lg:grid-cols-2",children:c.levelStats.map(b=>s.jsx($3,{...b},b.level))})]}),s.jsxs("section",{children:[s.jsx(Ri,{eyebrow:"Grid general",title:"Los ejercicios",description:"Cuatro filas, una por nivel, con acceso directo a cada ejercicio."}),s.jsx("div",{className:"space-y-6",children:p.map(({level:b,exercises:y})=>{var h;const w=Gg[b];return s.jsxs("div",{className:P("rounded-3xl border p-4 sm:p-5",w.border,w.bg),children:[s.jsxs("div",{className:"flex items-center justify-between gap-3",children:[s.jsxs("div",{children:[s.jsxs("p",{className:P("text-sm font-semibold",w.text),children:["Nivel ",b]}),s.jsxs("p",{className:"mt-1 text-xs text-zinc-500",children:[y.length," ejercicios"]})]}),s.jsxs("span",{className:P("rounded-full border px-3 py-1 text-xs font-semibold",w.border,"bg-white",w.text),children:[((h=c.levelStats.find(f=>f.level===b))==null?void 0:h.pct)??0,"% dominado"]})]}),s.jsx("div",{className:"mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",children:y.map(f=>s.jsx(q3,{exercise:f,progress:e[f.id]},f.id))})]},b)})})]}),s.jsxs("section",{children:[s.jsx(Ri,{eyebrow:"Puntos débiles",title:"Top 5",description:"Se ordenan por más fallos. Úsalos como lista de estudio inmediata."}),s.jsx("div",{className:"space-y-3",children:c.weakSpots.length?c.weakSpots.map(b=>s.jsx(H3,{exercise:b,progress:b.progress},b.id)):s.jsx("div",{className:"rounded-3xl border border-zinc-200 bg-white p-6 text-sm text-zinc-500",children:"Aún no hay fallos registrados. Haz exámenes para descubrir tus puntos débiles."})})]}),s.jsxs("section",{children:[s.jsx(Ri,{eyebrow:"Historial",title:"Exámenes recientes",description:"Máximo 10 entradas, ordenadas de más reciente a más antigua."}),s.jsx(W3,{rows:c.examHistory})]}),s.jsxs("section",{children:[s.jsx(Ri,{eyebrow:"Notas",title:"Notas personales",description:"Edita una nota inline por ejercicio y guárdala en el estado persistente."}),s.jsxs("div",{className:"grid gap-4 lg:grid-cols-[280px_1fr]",children:[s.jsxs("div",{className:"rounded-3xl border border-zinc-200 bg-white p-4 shadow-sm",children:[s.jsx("label",{className:"text-xs font-semibold uppercase tracking-wide text-zinc-400",children:"Ejercicio"}),s.jsx("select",{value:o,onChange:b=>l(b.target.value),className:"mt-2 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-800 outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-100",children:le.map(b=>s.jsx("option",{value:b.id,children:b.nombre},b.id))}),d?s.jsxs("div",{className:"mt-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-4",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("span",{className:"text-2xl",children:d.palacio.emoji}),s.jsxs("div",{children:[s.jsx("p",{className:"font-semibold text-zinc-900",children:d.nombre}),s.jsxs("p",{className:"text-xs text-zinc-500",children:["Nivel ",d.nivel]})]})]}),s.jsxs("div",{className:"mt-3 flex items-center gap-2 text-xs text-zinc-500",children:[s.jsx(fg,{size:10,className:P((u==null?void 0:u.estado)&&((g=ao[u.estado])==null?void 0:g.dot)||ao.no_iniciado.dot)}),(u==null?void 0:u.estado)??"no_iniciado"]})]}):null]}),s.jsxs("div",{className:"rounded-3xl border border-zinc-200 bg-white p-4 shadow-sm",children:[s.jsxs("div",{className:"flex items-center justify-between gap-3",children:[s.jsxs("div",{children:[s.jsx("p",{className:"text-sm font-semibold text-zinc-900",children:(d==null?void 0:d.nombre)??"Sin selección"}),s.jsx("p",{className:"mt-1 text-xs text-zinc-500",children:"Texto guardado en `notas` del store."})]}),s.jsx(u_,{size:18,className:"text-zinc-400"})]}),s.jsx("textarea",{value:(u==null?void 0:u.notas)??"",onChange:b=>d&&a(d.id,b.target.value),rows:8,placeholder:"Escribe aquí tus recordatorios, trampas y reglas rápidas...",className:"mt-4 w-full rounded-3xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-800 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"}),s.jsxs("div",{className:"mt-3 flex items-center justify-between text-xs text-zinc-400",children:[s.jsx("span",{children:"Guardado automático."}),d?s.jsx("span",{children:d.id}):null]})]})]})]})]})}const bm=[{id:"cocina",name:"Cocina",icon:"🍳",level:1,color:"bg-purple-50 border-purple-200 text-purple-700",active:"bg-purple-100"},{id:"salón",name:"Salón",icon:"🛋️",level:2,color:"bg-green-50 border-green-200 text-green-700",active:"bg-green-100"},{id:"dormitorio",name:"Dormitorio",icon:"🛏️",level:3,color:"bg-orange-50 border-orange-200 text-orange-700",active:"bg-orange-100"},{id:"garaje",name:"Garaje",icon:"🔧",level:4,color:"bg-red-50 border-red-200 text-red-700",active:"bg-red-100"}];function G3({ejercicios:e}){const[t,n]=x.useState(null),i=wt(),r=a=>le.filter(o=>o.nivel===a);if(t){const a=bm.find(l=>l.id===t),o=r(a.level);return s.jsxs(R.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},className:"space-y-6",children:[s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("button",{onClick:()=>n(null),className:"p-2 hover:bg-zinc-100 rounded-full transition-colors",children:s.jsx(To,{size:24,className:"text-zinc-600"})}),s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("span",{className:"text-4xl",children:a.icon}),s.jsx("h2",{className:"text-2xl font-bold text-zinc-800",children:a.name}),s.jsxs("span",{className:"px-3 py-1 bg-zinc-100 text-zinc-600 rounded-full text-sm font-medium",children:["Nivel ",a.level]})]})]}),s.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4",children:o.map((l,c)=>{var p,m,g;const d=((p=e[l.id])==null?void 0:p.estado)||"no_iniciado",u=d==="dominado"?"border-green-300 bg-green-50":d==="practicando"?"border-orange-300 bg-orange-50":"border-zinc-200 bg-white hover:border-zinc-300";return s.jsxs(R.button,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:c*.05},onClick:()=>i(`/ejercicio/${l.id}`),className:P("flex flex-col items-center justify-center p-6 rounded-2xl border text-center transition-all hover:shadow-md cursor-pointer",u),children:[s.jsx("span",{className:"text-5xl mb-3 block drop-shadow-sm",children:((m=l.palacio)==null?void 0:m.emoji)||"❓"}),s.jsx("span",{className:"font-bold text-zinc-800 text-sm mb-1",children:((g=l.palacio)==null?void 0:g.personaje)||"Sin Personaje"}),s.jsx("span",{className:"font-mono text-xs text-zinc-500",children:l.nombre})]},l.id)})})]})}return s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 h-full min-h-[500px]",children:bm.map((a,o)=>{const l=r(a.level),c=l.filter(d=>{var u;return((u=e[d.id])==null?void 0:u.estado)==="dominado"}).length;return s.jsxs(R.button,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:o*.1},onClick:()=>n(a.id),className:P("relative flex flex-col items-center justify-center p-8 rounded-3xl border-2 transition-all hover:-translate-y-1 hover:shadow-lg overflow-hidden group",a.color),children:[s.jsx("div",{className:P("absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity",a.active)}),s.jsxs("div",{className:"relative z-10 flex flex-col items-center",children:[s.jsx("span",{className:"text-7xl mb-4 drop-shadow-sm",children:a.icon}),s.jsx("h2",{className:"text-2xl font-bold mb-2",children:a.name}),s.jsxs("div",{className:"px-4 py-1.5 bg-white/60 backdrop-blur-sm rounded-full text-sm font-semibold shadow-sm",children:["Nivel ",a.level," • ",c,"/",l.length," dominados"]})]}),s.jsxs("div",{className:"relative z-10 w-full mt-8 flex flex-wrap justify-center gap-2 px-4",children:[l.slice(0,8).map(d=>{var u;return s.jsx("span",{className:"text-2xl",title:d.nombre,children:((u=d.palacio)==null?void 0:u.emoji)||"❓"},d.id)}),l.length>8&&s.jsxs("span",{className:"text-lg font-bold opacity-50 flex items-center justify-center w-8 h-8",children:["+",l.length-8]})]})]},a.id)})})}function K3({ejercicios:e}){var h,f,v,j,_;const[t,n]=x.useState(0),[i,r]=x.useState(!1),[a,o]=x.useState({correct:0,wrong:0}),[l,c]=x.useState([]),d=x.useMemo(()=>[...le].sort(()=>Math.random()-.5),[]);x.useEffect(()=>{const z=d.map(S=>{var E;return{id:S.id,dueAt:0,intervalDays:((E=e[S.id])==null?void 0:E.intervaloDias)||1,exercise:S}});c(z),n(0),r(!1)},[d,e]);const u=l[t],p=x.useCallback(z=>{c(S=>{if(S.length===0)return S;const E=[...S],A=Date.now(),k=E[t],$=z?Math.min((k.intervalDays||1)*2,30):1;if(k.intervalDays=$,k.dueAt=A+$*24*60*60*1e3,!z){E.splice(t,1);const Z=Math.min(t+1,E.length);return E.splice(Z,0,k),E}return E})},[t]);if(x.useEffect(()=>{const z=S=>{S.key==="ArrowLeft"&&(S.preventDefault(),r(!1),n(E=>(E-1+Math.max(l.length,1))%Math.max(l.length,1))),S.key==="ArrowRight"&&(S.preventDefault(),r(!1),n(E=>(E+1)%Math.max(l.length,1)))};return window.addEventListener("keydown",z),()=>window.removeEventListener("keydown",z)},[l.length]),l.length===0||!u)return null;const m=u.exercise,g=Math.min(a.correct+a.wrong,30),b=()=>r(z=>!z),y=z=>{o(S=>({...S,[z?"correct":"wrong"]:S[z?"correct":"wrong"]+1})),p(z),r(!1),setTimeout(()=>{n(S=>(S+1)%l.length)},150)},w=z=>{z.stopPropagation(),r(!1),setTimeout(()=>{n(S=>(S-1+l.length)%l.length)},150)};return s.jsxs("div",{className:"flex flex-col items-center justify-center max-w-2xl mx-auto min-h-[500px]",children:[s.jsxs("div",{className:"w-full flex items-center justify-between mb-8 px-4",children:[s.jsxs("span",{className:"text-sm font-semibold text-zinc-500 flex items-center gap-2",children:[s.jsx(s_,{size:15})," Sesión actual"]}),s.jsxs("div",{className:"flex items-center gap-4 text-sm font-bold",children:[s.jsxs("span",{className:"text-red-500 flex items-center gap-1",children:[s.jsx(jd,{size:16})," ",a.wrong]}),s.jsxs("span",{className:"text-green-500 flex items-center gap-1",children:[s.jsx(Ro,{size:16})," ",a.correct]})]}),s.jsxs("span",{className:"text-sm font-semibold text-zinc-500",children:[g,"/30"]})]}),s.jsx("div",{className:"w-full aspect-[3/4] sm:aspect-video relative",style:{perspective:"1000px"},children:s.jsx(ke,{mode:"wait",children:s.jsx(R.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},exit:{opacity:0,x:-50},className:"absolute inset-0 w-full h-full cursor-pointer",onClick:b,style:{transformStyle:"preserve-3d"},children:s.jsxs(R.div,{className:"absolute inset-0 w-full h-full",animate:{rotateY:i?180:0},transition:{duration:.6,type:"spring",stiffness:260,damping:20},style:{transformStyle:"preserve-3d"},children:[s.jsxs("div",{className:"absolute inset-0 w-full h-full bg-white border-2 border-zinc-200 rounded-3xl shadow-lg flex flex-col items-center justify-center p-8 text-center",style:{backfaceVisibility:"hidden"},children:[s.jsx("span",{className:"text-8xl mb-6 drop-shadow-md",children:((h=m.palacio)==null?void 0:h.emoji)||"❓"}),s.jsx("h2",{className:"text-3xl font-bold text-zinc-800 font-mono",children:m.nombre}),s.jsx("div",{className:"mt-8 px-4 py-2 bg-zinc-100 text-zinc-500 rounded-full font-medium text-sm animate-pulse",children:"Click para revelar"})]}),s.jsxs("div",{className:"absolute inset-0 w-full h-full bg-purple-50 border-2 border-purple-200 rounded-3xl shadow-lg flex flex-col p-8 overflow-y-auto",style:{backfaceVisibility:"hidden",transform:"rotateY(180deg)"},children:[s.jsxs("div",{className:"text-center mb-6 border-b border-purple-200 pb-4 shrink-0",children:[s.jsx("h3",{className:"text-2xl font-bold text-purple-900",children:(f=m.palacio)==null?void 0:f.personaje}),s.jsx("span",{className:"font-mono text-sm text-purple-600",children:m.nombre})]}),s.jsxs("p",{className:"text-base text-zinc-700 leading-relaxed mb-6 italic flex-1",children:['"',(v=m.palacio)==null?void 0:v.historia,'"']}),s.jsxs("div",{className:"shrink-0",children:[s.jsx("h4",{className:"text-xs font-bold text-purple-400 uppercase tracking-wide mb-3",children:"Anclas Clave"}),s.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:(_=(j=m.palacio)==null?void 0:j.anclas)==null?void 0:_.map((z,S)=>s.jsx("span",{className:"bg-white border border-purple-100 text-purple-800 px-3 py-1.5 rounded-lg text-sm font-mono shadow-sm",children:z},S))}),m.formulaClave&&s.jsxs("div",{className:"mt-auto",children:[s.jsx("h4",{className:"text-xs font-bold text-purple-400 uppercase tracking-wide mb-3",children:"Fórmula"}),s.jsx("div",{className:"bg-white p-4 rounded-xl border border-purple-100 font-mono text-sm text-zinc-800 shadow-sm text-center",children:m.formulaClave.minusculas||m.formulaClave.formula||m.formulaClave.descripcion})]})]})]})]})},m.id)})}),s.jsxs("div",{className:"flex items-center gap-4 mt-8 w-full",children:[s.jsx("button",{onClick:w,className:"p-4 bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-50 rounded-xl transition-colors shadow-sm",title:"Anterior",children:s.jsx(To,{size:24})}),s.jsx("button",{onClick:z=>{z.stopPropagation(),y(!1)},className:"flex-1 py-4 bg-white border border-red-200 text-red-600 hover:bg-red-50 rounded-xl font-bold text-lg transition-colors shadow-sm",children:"No lo sé"}),s.jsx("button",{onClick:z=>{z.stopPropagation(),y(!0)},className:"flex-1 py-4 bg-green-500 border border-transparent text-white hover:bg-green-600 rounded-xl font-bold text-lg transition-colors shadow-md",children:"Lo tengo"}),s.jsx("button",{onClick:()=>{c(z=>[...z].sort(()=>Math.random()-.5)),n(0),r(!1)},className:"p-4 bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-50 rounded-xl transition-colors shadow-sm",title:"Mezclar mazo",children:s.jsx(Do,{size:24})})]})]})}function Q3({ejercicios:e}){const t=wt(),[n,i]=x.useState("all"),[r,a]=x.useState("all"),[o,l]=x.useState("all"),[c,d]=x.useState(""),u=x.useMemo(()=>le.filter(p=>{var g,b;const m=((g=e[p.id])==null?void 0:g.estado)||"no_iniciado";return!(n!=="all"&&p.nivel!==parseInt(n)||r!=="all"&&p.dificultad!==r||o!=="all"&&m!==o||c&&!p.nombre.toLowerCase().includes(c.toLowerCase())&&!(((b=p.palacio)==null?void 0:b.personaje)||"").toLowerCase().includes(c.toLowerCase()))}),[n,r,o,c,e]);return s.jsxs("div",{className:"space-y-6",children:[s.jsxs("div",{className:"bg-white p-4 rounded-2xl border border-zinc-200 shadow-sm flex flex-col sm:flex-row flex-wrap gap-4 items-center",children:[s.jsxs("div",{className:"relative flex-1 min-w-[200px]",children:[s.jsx(m_,{size:18,className:"absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"}),s.jsx("input",{type:"text",placeholder:"Buscar personaje o ejercicio...",value:c,onChange:p=>d(p.target.value),className:"w-full pl-10 pr-4 py-2 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"})]}),s.jsxs("select",{value:n,onChange:p=>i(p.target.value),className:"px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-xl text-sm outline-none",children:[s.jsx("option",{value:"all",children:"Todos los niveles"}),s.jsx("option",{value:"1",children:"Nivel 1"}),s.jsx("option",{value:"2",children:"Nivel 2"}),s.jsx("option",{value:"3",children:"Nivel 3"}),s.jsx("option",{value:"4",children:"Nivel 4"})]}),s.jsxs("select",{value:r,onChange:p=>a(p.target.value),className:"px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-xl text-sm outline-none",children:[s.jsx("option",{value:"all",children:"Todas las dif."}),s.jsx("option",{value:"fácil",children:"Fácil"}),s.jsx("option",{value:"medio",children:"Medio"}),s.jsx("option",{value:"difícil",children:"Difícil"})]}),s.jsxs("select",{value:o,onChange:p=>l(p.target.value),className:"px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-xl text-sm outline-none",children:[s.jsx("option",{value:"all",children:"Todos los estados"}),s.jsx("option",{value:"no_iniciado",children:"Sin empezar"}),s.jsx("option",{value:"practicando",children:"Practicando"}),s.jsx("option",{value:"dominado",children:"Dominado"})]})]}),s.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:[s.jsx(ke,{children:u.map(p=>{var g,b,y;const m=((g=e[p.id])==null?void 0:g.estado)||"no_iniciado";return s.jsxs(R.button,{layout:!0,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.2},onClick:()=>t(`/ejercicio/${p.id}`),className:"bg-white border border-zinc-200 rounded-2xl p-5 flex flex-col items-center text-center hover:shadow-md hover:border-zinc-300 transition-all text-left h-full",children:[s.jsx("span",{className:"text-5xl mb-4 drop-shadow-sm",children:((b=p.palacio)==null?void 0:b.emoji)||"❓"}),s.jsx("h3",{className:"font-bold text-zinc-800 leading-tight mb-1",children:((y=p.palacio)==null?void 0:y.personaje)||"Sin Personaje"}),s.jsx("span",{className:"font-mono text-xs text-zinc-500 mb-4",children:p.nombre}),s.jsxs("div",{className:"w-full flex items-center justify-between mt-auto pt-4 border-t border-zinc-100",children:[s.jsxs("span",{className:"text-xs font-semibold px-2 py-1 bg-zinc-100 text-zinc-600 rounded-md",children:["Nivel ",p.nivel]}),s.jsx("span",{className:P("w-3 h-3 rounded-full",m==="dominado"?"bg-green-500":m==="practicando"?"bg-orange-400":"bg-zinc-300"),title:m})]})]},p.id)})}),u.length===0&&s.jsx("div",{className:"col-span-full py-12 text-center text-zinc-500",children:"No se encontraron personajes con esos filtros."})]})]})}function Y3(){const[e,t]=x.useState("palace"),[n,i]=$h(),{ejercicios:r}=xe();x.useEffect(()=>{const l=n.get("mode");(l==="flashcards"||l==="characters"||l==="palace")&&t(l)},[n]);const a=x.useCallback(l=>{t(l),i({mode:l},{replace:!0})},[i]),o=[{id:"palace",label:"Palacio",icon:s.jsx(wd,{size:16})},{id:"flashcards",label:"Flash Cards",icon:s.jsx(e_,{size:16})},{id:"characters",label:"Personajes",icon:s.jsx(x_,{size:16})}];return s.jsxs("div",{className:"p-6 md:p-8 max-w-7xl mx-auto min-h-screen",children:[s.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8",children:[s.jsxs("div",{children:[s.jsx("h1",{className:"text-3xl font-bold text-zinc-900 mb-2",children:"Palacio de la Memoria"}),s.jsx("p",{className:"text-zinc-500",children:"Repasa tus historias, personajes y anclas para dominar el examen."})]}),s.jsx("div",{className:"flex items-center p-1 bg-zinc-100 rounded-xl self-start md:self-auto border border-zinc-200",children:o.map(l=>s.jsxs("button",{onClick:()=>a(l.id),className:P("flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all relative",e===l.id?"text-zinc-900":"text-zinc-500 hover:text-zinc-700"),children:[e===l.id&&s.jsx(R.div,{layoutId:"palace-tab-indicator",className:"absolute inset-0 bg-white rounded-lg shadow-sm border border-zinc-200/50",transition:{type:"spring",stiffness:300,damping:25}}),s.jsxs("span",{className:"relative z-10 flex items-center gap-2",children:[l.icon,l.label]})]},l.id))})]}),s.jsx("div",{className:"relative",children:s.jsxs(ke,{mode:"wait",children:[e==="palace"&&s.jsx(R.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},children:s.jsx(G3,{ejercicios:r})},"palace"),e==="flashcards"&&s.jsx(R.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},children:s.jsx(K3,{ejercicios:r})},"flashcards"),e==="characters"&&s.jsx(R.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},children:s.jsx(Q3,{ejercicios:r})},"characters")]})})]})}function X3(){return s.jsxs(xx,{children:[s.jsxs(ot,{element:s.jsx(aS,{}),children:[s.jsx(ot,{path:"/",element:s.jsx(uS,{})}),s.jsx(ot,{path:"/ejercicios/:nivel",element:s.jsx(vS,{})}),s.jsx(ot,{path:"/ejercicio/:id",element:s.jsx(YE,{})}),s.jsx(ot,{path:"/herramientas",element:s.jsx(T3,{})}),s.jsx(ot,{path:"/progreso",element:s.jsx(Z3,{})}),s.jsx(ot,{path:"/palacio",element:s.jsx(Y3,{})})]}),s.jsx(ot,{path:"/practicar/:id",element:s.jsx(d3,{})}),s.jsx(ot,{path:"/examen",element:s.jsx(w3,{})}),s.jsx(ot,{path:"*",element:s.jsx(gx,{to:"/",replace:!0})})]})}Is.createRoot(document.getElementById("root")).render(s.jsx(dt.StrictMode,{children:s.jsx(Cx,{children:s.jsx(X3,{})})}));
