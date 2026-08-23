(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function xc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var oa={exports:{}},ol={},ia={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zn=Symbol.for("react.element"),yc=Symbol.for("react.portal"),wc=Symbol.for("react.fragment"),kc=Symbol.for("react.strict_mode"),Sc=Symbol.for("react.profiler"),jc=Symbol.for("react.provider"),Nc=Symbol.for("react.context"),Ec=Symbol.for("react.forward_ref"),Cc=Symbol.for("react.suspense"),_c=Symbol.for("react.memo"),zc=Symbol.for("react.lazy"),Qi=Symbol.iterator;function Pc(e){return e===null||typeof e!="object"?null:(e=Qi&&e[Qi]||e["@@iterator"],typeof e=="function"?e:null)}var sa={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},aa=Object.assign,ua={};function cn(e,t,n){this.props=e,this.context=t,this.refs=ua,this.updater=n||sa}cn.prototype.isReactComponent={};cn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};cn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ca(){}ca.prototype=cn.prototype;function Yo(e,t,n){this.props=e,this.context=t,this.refs=ua,this.updater=n||sa}var Ko=Yo.prototype=new ca;Ko.constructor=Yo;aa(Ko,cn.prototype);Ko.isPureReactComponent=!0;var Vi=Array.isArray,da=Object.prototype.hasOwnProperty,qo={current:null},fa={key:!0,ref:!0,__self:!0,__source:!0};function pa(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)da.call(t,r)&&!fa.hasOwnProperty(r)&&(l[r]=t[r]);var u=arguments.length-2;if(u===1)l.children=n;else if(1<u){for(var a=Array(u),d=0;d<u;d++)a[d]=arguments[d+2];l.children=a}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)l[r]===void 0&&(l[r]=u[r]);return{$$typeof:Zn,type:e,key:o,ref:i,props:l,_owner:qo.current}}function Tc(e,t){return{$$typeof:Zn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Xo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zn}function Lc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Wi=/\/+/g;function jl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Lc(""+e.key):t.toString(36)}function jr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Zn:case yc:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+jl(i,0):r,Vi(l)?(n="",e!=null&&(n=e.replace(Wi,"$&/")+"/"),jr(l,t,n,"",function(d){return d})):l!=null&&(Xo(l)&&(l=Tc(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(Wi,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",Vi(e))for(var u=0;u<e.length;u++){o=e[u];var a=r+jl(o,u);i+=jr(o,t,n,a,l)}else if(a=Pc(e),typeof a=="function")for(e=a.call(e),u=0;!(o=e.next()).done;)o=o.value,a=r+jl(o,u++),i+=jr(o,t,n,a,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function ir(e,t,n){if(e==null)return e;var r=[],l=0;return jr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function Fc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},Nr={transition:null},Dc={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Nr,ReactCurrentOwner:qo};function ma(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:ir,forEach:function(e,t,n){ir(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ir(e,function(){t++}),t},toArray:function(e){return ir(e,function(t){return t})||[]},only:function(e){if(!Xo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=cn;D.Fragment=wc;D.Profiler=Sc;D.PureComponent=Yo;D.StrictMode=kc;D.Suspense=Cc;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dc;D.act=ma;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=aa({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=qo.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in t)da.call(t,a)&&!fa.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&u!==void 0?u[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){u=Array(a);for(var d=0;d<a;d++)u[d]=arguments[d+2];r.children=u}return{$$typeof:Zn,type:e.type,key:l,ref:o,props:r,_owner:i}};D.createContext=function(e){return e={$$typeof:Nc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:jc,_context:e},e.Consumer=e};D.createElement=pa;D.createFactory=function(e){var t=pa.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:Ec,render:e}};D.isValidElement=Xo;D.lazy=function(e){return{$$typeof:zc,_payload:{_status:-1,_result:e},_init:Fc}};D.memo=function(e,t){return{$$typeof:_c,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=Nr.transition;Nr.transition={};try{e()}finally{Nr.transition=t}};D.unstable_act=ma;D.useCallback=function(e,t){return ce.current.useCallback(e,t)};D.useContext=function(e){return ce.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};D.useEffect=function(e,t){return ce.current.useEffect(e,t)};D.useId=function(){return ce.current.useId()};D.useImperativeHandle=function(e,t,n){return ce.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return ce.current.useMemo(e,t)};D.useReducer=function(e,t,n){return ce.current.useReducer(e,t,n)};D.useRef=function(e){return ce.current.useRef(e)};D.useState=function(e){return ce.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return ce.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return ce.current.useTransition()};D.version="18.3.1";ia.exports=D;var F=ia.exports;const Zo=xc(F);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mc=F,Rc=Symbol.for("react.element"),Oc=Symbol.for("react.fragment"),bc=Object.prototype.hasOwnProperty,Ic=Mc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Uc={key:!0,ref:!0,__self:!0,__source:!0};function ha(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)bc.call(t,r)&&!Uc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Rc,type:e,key:o,ref:i,props:l,_owner:Ic.current}}ol.Fragment=Oc;ol.jsx=ha;ol.jsxs=ha;oa.exports=ol;var s=oa.exports,Xl={},ga={exports:{}},ke={},va={exports:{}},xa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(w,z){var P=w.length;w.push(z);e:for(;0<P;){var H=P-1>>>1,U=w[H];if(0<l(U,z))w[H]=z,w[P]=U,P=H;else break e}}function n(w){return w.length===0?null:w[0]}function r(w){if(w.length===0)return null;var z=w[0],P=w.pop();if(P!==z){w[0]=P;e:for(var H=0,U=w.length,Ot=U>>>1;H<Ot;){var wt=2*(H+1)-1,Sl=w[wt],kt=wt+1,or=w[kt];if(0>l(Sl,P))kt<U&&0>l(or,Sl)?(w[H]=or,w[kt]=P,H=kt):(w[H]=Sl,w[wt]=P,H=wt);else if(kt<U&&0>l(or,P))w[H]=or,w[kt]=P,H=kt;else break e}}return z}function l(w,z){var P=w.sortIndex-z.sortIndex;return P!==0?P:w.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,u=i.now();e.unstable_now=function(){return i.now()-u}}var a=[],d=[],g=1,m=null,h=3,x=!1,k=!1,S=!1,M=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(w){for(var z=n(d);z!==null;){if(z.callback===null)r(d);else if(z.startTime<=w)r(d),z.sortIndex=z.expirationTime,t(a,z);else break;z=n(d)}}function v(w){if(S=!1,p(w),!k)if(n(a)!==null)k=!0,pn(j);else{var z=n(d);z!==null&&L(v,z.startTime-w)}}function j(w,z){k=!1,S&&(S=!1,f(N),N=-1),x=!0;var P=h;try{for(p(z),m=n(a);m!==null&&(!(m.expirationTime>z)||w&&!se());){var H=m.callback;if(typeof H=="function"){m.callback=null,h=m.priorityLevel;var U=H(m.expirationTime<=z);z=e.unstable_now(),typeof U=="function"?m.callback=U:m===n(a)&&r(a),p(z)}else r(a);m=n(a)}if(m!==null)var Ot=!0;else{var wt=n(d);wt!==null&&L(v,wt.startTime-z),Ot=!1}return Ot}finally{m=null,h=P,x=!1}}var C=!1,_=null,N=-1,b=5,T=-1;function se(){return!(e.unstable_now()-T<b)}function Be(){if(_!==null){var w=e.unstable_now();T=w;var z=!0;try{z=_(!0,w)}finally{z?Oe():(C=!1,_=null)}}else C=!1}var Oe;if(typeof c=="function")Oe=function(){c(Be)};else if(typeof MessageChannel<"u"){var lr=new MessageChannel,kl=lr.port2;lr.port1.onmessage=Be,Oe=function(){kl.postMessage(null)}}else Oe=function(){M(Be,0)};function pn(w){_=w,C||(C=!0,Oe())}function L(w,z){N=M(function(){w(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(w){w.callback=null},e.unstable_continueExecution=function(){k||x||(k=!0,pn(j))},e.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<w?Math.floor(1e3/w):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(w){switch(h){case 1:case 2:case 3:var z=3;break;default:z=h}var P=h;h=z;try{return w()}finally{h=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(w,z){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var P=h;h=w;try{return z()}finally{h=P}},e.unstable_scheduleCallback=function(w,z,P){var H=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?H+P:H):P=H,w){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=P+U,w={id:g++,callback:z,priorityLevel:w,startTime:P,expirationTime:U,sortIndex:-1},P>H?(w.sortIndex=P,t(d,w),n(a)===null&&w===n(d)&&(S?(f(N),N=-1):S=!0,L(v,P-H))):(w.sortIndex=U,t(a,w),k||x||(k=!0,pn(j))),w},e.unstable_shouldYield=se,e.unstable_wrapCallback=function(w){var z=h;return function(){var P=h;h=z;try{return w.apply(this,arguments)}finally{h=P}}}})(xa);va.exports=xa;var $c=va.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ac=F,we=$c;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ya=new Set,Rn={};function Mt(e,t){nn(e,t),nn(e+"Capture",t)}function nn(e,t){for(Rn[e]=t,e=0;e<t.length;e++)ya.add(t[e])}var Ye=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zl=Object.prototype.hasOwnProperty,Bc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gi={},Yi={};function Hc(e){return Zl.call(Yi,e)?!0:Zl.call(Gi,e)?!1:Bc.test(e)?Yi[e]=!0:(Gi[e]=!0,!1)}function Qc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Vc(e,t,n,r){if(t===null||typeof t>"u"||Qc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var Jo=/[\-:]([a-z])/g;function ei(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Jo,ei);ne[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Jo,ei);ne[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Jo,ei);ne[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function ti(e,t,n,r){var l=ne.hasOwnProperty(t)?ne[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Vc(t,n,l,r)&&(n=null),r||l===null?Hc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ze=Ac.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sr=Symbol.for("react.element"),It=Symbol.for("react.portal"),Ut=Symbol.for("react.fragment"),ni=Symbol.for("react.strict_mode"),Jl=Symbol.for("react.profiler"),wa=Symbol.for("react.provider"),ka=Symbol.for("react.context"),ri=Symbol.for("react.forward_ref"),eo=Symbol.for("react.suspense"),to=Symbol.for("react.suspense_list"),li=Symbol.for("react.memo"),et=Symbol.for("react.lazy"),Sa=Symbol.for("react.offscreen"),Ki=Symbol.iterator;function mn(e){return e===null||typeof e!="object"?null:(e=Ki&&e[Ki]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Nl;function Sn(e){if(Nl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Nl=t&&t[1]||""}return`
`+Nl+e}var El=!1;function Cl(e,t){if(!e||El)return"";El=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,u=o.length-1;1<=i&&0<=u&&l[i]!==o[u];)u--;for(;1<=i&&0<=u;i--,u--)if(l[i]!==o[u]){if(i!==1||u!==1)do if(i--,u--,0>u||l[i]!==o[u]){var a=`
`+l[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=u);break}}}finally{El=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Sn(e):""}function Wc(e){switch(e.tag){case 5:return Sn(e.type);case 16:return Sn("Lazy");case 13:return Sn("Suspense");case 19:return Sn("SuspenseList");case 0:case 2:case 15:return e=Cl(e.type,!1),e;case 11:return e=Cl(e.type.render,!1),e;case 1:return e=Cl(e.type,!0),e;default:return""}}function no(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ut:return"Fragment";case It:return"Portal";case Jl:return"Profiler";case ni:return"StrictMode";case eo:return"Suspense";case to:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ka:return(e.displayName||"Context")+".Consumer";case wa:return(e._context.displayName||"Context")+".Provider";case ri:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case li:return t=e.displayName||null,t!==null?t:no(e.type)||"Memo";case et:t=e._payload,e=e._init;try{return no(e(t))}catch{}}return null}function Gc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return no(t);case 8:return t===ni?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ja(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Yc(e){var t=ja(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ar(e){e._valueTracker||(e._valueTracker=Yc(e))}function Na(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ja(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Rr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ro(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function qi(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=mt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ea(e,t){t=t.checked,t!=null&&ti(e,"checked",t,!1)}function lo(e,t){Ea(e,t);var n=mt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?oo(e,t.type,n):t.hasOwnProperty("defaultValue")&&oo(e,t.type,mt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Xi(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function oo(e,t,n){(t!=="number"||Rr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var jn=Array.isArray;function qt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+mt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function io(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Zi(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(jn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mt(n)}}function Ca(e,t){var n=mt(t.value),r=mt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ji(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function _a(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function so(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?_a(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ur,za=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ur=ur||document.createElement("div"),ur.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ur.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function On(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Cn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kc=["Webkit","ms","Moz","O"];Object.keys(Cn).forEach(function(e){Kc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Cn[t]=Cn[e]})});function Pa(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Cn.hasOwnProperty(e)&&Cn[e]?(""+t).trim():t+"px"}function Ta(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Pa(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var qc=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ao(e,t){if(t){if(qc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function uo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var co=null;function oi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fo=null,Xt=null,Zt=null;function es(e){if(e=tr(e)){if(typeof fo!="function")throw Error(y(280));var t=e.stateNode;t&&(t=cl(t),fo(e.stateNode,e.type,t))}}function La(e){Xt?Zt?Zt.push(e):Zt=[e]:Xt=e}function Fa(){if(Xt){var e=Xt,t=Zt;if(Zt=Xt=null,es(e),t)for(e=0;e<t.length;e++)es(t[e])}}function Da(e,t){return e(t)}function Ma(){}var _l=!1;function Ra(e,t,n){if(_l)return e(t,n);_l=!0;try{return Da(e,t,n)}finally{_l=!1,(Xt!==null||Zt!==null)&&(Ma(),Fa())}}function bn(e,t){var n=e.stateNode;if(n===null)return null;var r=cl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var po=!1;if(Ye)try{var hn={};Object.defineProperty(hn,"passive",{get:function(){po=!0}}),window.addEventListener("test",hn,hn),window.removeEventListener("test",hn,hn)}catch{po=!1}function Xc(e,t,n,r,l,o,i,u,a){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(g){this.onError(g)}}var _n=!1,Or=null,br=!1,mo=null,Zc={onError:function(e){_n=!0,Or=e}};function Jc(e,t,n,r,l,o,i,u,a){_n=!1,Or=null,Xc.apply(Zc,arguments)}function ed(e,t,n,r,l,o,i,u,a){if(Jc.apply(this,arguments),_n){if(_n){var d=Or;_n=!1,Or=null}else throw Error(y(198));br||(br=!0,mo=d)}}function Rt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Oa(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ts(e){if(Rt(e)!==e)throw Error(y(188))}function td(e){var t=e.alternate;if(!t){if(t=Rt(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return ts(l),e;if(o===r)return ts(l),t;o=o.sibling}throw Error(y(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,u=l.child;u;){if(u===n){i=!0,n=l,r=o;break}if(u===r){i=!0,r=l,n=o;break}u=u.sibling}if(!i){for(u=o.child;u;){if(u===n){i=!0,n=o,r=l;break}if(u===r){i=!0,r=o,n=l;break}u=u.sibling}if(!i)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function ba(e){return e=td(e),e!==null?Ia(e):null}function Ia(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ia(e);if(t!==null)return t;e=e.sibling}return null}var Ua=we.unstable_scheduleCallback,ns=we.unstable_cancelCallback,nd=we.unstable_shouldYield,rd=we.unstable_requestPaint,Y=we.unstable_now,ld=we.unstable_getCurrentPriorityLevel,ii=we.unstable_ImmediatePriority,$a=we.unstable_UserBlockingPriority,Ir=we.unstable_NormalPriority,od=we.unstable_LowPriority,Aa=we.unstable_IdlePriority,il=null,$e=null;function id(e){if($e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(il,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:ud,sd=Math.log,ad=Math.LN2;function ud(e){return e>>>=0,e===0?32:31-(sd(e)/ad|0)|0}var cr=64,dr=4194304;function Nn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ur(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var u=i&~l;u!==0?r=Nn(u):(o&=i,o!==0&&(r=Nn(o)))}else i=n&~l,i!==0?r=Nn(i):o!==0&&(r=Nn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-De(t),l=1<<n,r|=e[n],t&=~l;return r}function cd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-De(o),u=1<<i,a=l[i];a===-1?(!(u&n)||u&r)&&(l[i]=cd(u,t)):a<=t&&(e.expiredLanes|=u),o&=~u}}function ho(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ba(){var e=cr;return cr<<=1,!(cr&4194240)&&(cr=64),e}function zl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Jn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-De(t),e[t]=n}function fd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-De(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function si(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-De(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var O=0;function Ha(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Qa,ai,Va,Wa,Ga,go=!1,fr=[],it=null,st=null,at=null,In=new Map,Un=new Map,nt=[],pd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rs(e,t){switch(e){case"focusin":case"focusout":it=null;break;case"dragenter":case"dragleave":st=null;break;case"mouseover":case"mouseout":at=null;break;case"pointerover":case"pointerout":In.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Un.delete(t.pointerId)}}function gn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=tr(t),t!==null&&ai(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function md(e,t,n,r,l){switch(t){case"focusin":return it=gn(it,e,t,n,r,l),!0;case"dragenter":return st=gn(st,e,t,n,r,l),!0;case"mouseover":return at=gn(at,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return In.set(o,gn(In.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Un.set(o,gn(Un.get(o)||null,e,t,n,r,l)),!0}return!1}function Ya(e){var t=Nt(e.target);if(t!==null){var n=Rt(t);if(n!==null){if(t=n.tag,t===13){if(t=Oa(n),t!==null){e.blockedOn=t,Ga(e.priority,function(){Va(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Er(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);co=r,n.target.dispatchEvent(r),co=null}else return t=tr(n),t!==null&&ai(t),e.blockedOn=n,!1;t.shift()}return!0}function ls(e,t,n){Er(e)&&n.delete(t)}function hd(){go=!1,it!==null&&Er(it)&&(it=null),st!==null&&Er(st)&&(st=null),at!==null&&Er(at)&&(at=null),In.forEach(ls),Un.forEach(ls)}function vn(e,t){e.blockedOn===t&&(e.blockedOn=null,go||(go=!0,we.unstable_scheduleCallback(we.unstable_NormalPriority,hd)))}function $n(e){function t(l){return vn(l,e)}if(0<fr.length){vn(fr[0],e);for(var n=1;n<fr.length;n++){var r=fr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(it!==null&&vn(it,e),st!==null&&vn(st,e),at!==null&&vn(at,e),In.forEach(t),Un.forEach(t),n=0;n<nt.length;n++)r=nt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<nt.length&&(n=nt[0],n.blockedOn===null);)Ya(n),n.blockedOn===null&&nt.shift()}var Jt=Ze.ReactCurrentBatchConfig,$r=!0;function gd(e,t,n,r){var l=O,o=Jt.transition;Jt.transition=null;try{O=1,ui(e,t,n,r)}finally{O=l,Jt.transition=o}}function vd(e,t,n,r){var l=O,o=Jt.transition;Jt.transition=null;try{O=4,ui(e,t,n,r)}finally{O=l,Jt.transition=o}}function ui(e,t,n,r){if($r){var l=vo(e,t,n,r);if(l===null)Il(e,t,r,Ar,n),rs(e,r);else if(md(l,e,t,n,r))r.stopPropagation();else if(rs(e,r),t&4&&-1<pd.indexOf(e)){for(;l!==null;){var o=tr(l);if(o!==null&&Qa(o),o=vo(e,t,n,r),o===null&&Il(e,t,r,Ar,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Il(e,t,r,null,n)}}var Ar=null;function vo(e,t,n,r){if(Ar=null,e=oi(r),e=Nt(e),e!==null)if(t=Rt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Oa(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ar=e,null}function Ka(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ld()){case ii:return 1;case $a:return 4;case Ir:case od:return 16;case Aa:return 536870912;default:return 16}default:return 16}}var lt=null,ci=null,Cr=null;function qa(){if(Cr)return Cr;var e,t=ci,n=t.length,r,l="value"in lt?lt.value:lt.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return Cr=l.slice(e,1<r?1-r:void 0)}function _r(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function pr(){return!0}function os(){return!1}function Se(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?pr:os,this.isPropagationStopped=os,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pr)},persist:function(){},isPersistent:pr}),t}var dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},di=Se(dn),er=W({},dn,{view:0,detail:0}),xd=Se(er),Pl,Tl,xn,sl=W({},er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xn&&(xn&&e.type==="mousemove"?(Pl=e.screenX-xn.screenX,Tl=e.screenY-xn.screenY):Tl=Pl=0,xn=e),Pl)},movementY:function(e){return"movementY"in e?e.movementY:Tl}}),is=Se(sl),yd=W({},sl,{dataTransfer:0}),wd=Se(yd),kd=W({},er,{relatedTarget:0}),Ll=Se(kd),Sd=W({},dn,{animationName:0,elapsedTime:0,pseudoElement:0}),jd=Se(Sd),Nd=W({},dn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ed=Se(Nd),Cd=W({},dn,{data:0}),ss=Se(Cd),_d={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Td(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Pd[e])?!!t[e]:!1}function fi(){return Td}var Ld=W({},er,{key:function(e){if(e.key){var t=_d[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_r(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fi,charCode:function(e){return e.type==="keypress"?_r(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_r(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fd=Se(Ld),Dd=W({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),as=Se(Dd),Md=W({},er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fi}),Rd=Se(Md),Od=W({},dn,{propertyName:0,elapsedTime:0,pseudoElement:0}),bd=Se(Od),Id=W({},sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ud=Se(Id),$d=[9,13,27,32],pi=Ye&&"CompositionEvent"in window,zn=null;Ye&&"documentMode"in document&&(zn=document.documentMode);var Ad=Ye&&"TextEvent"in window&&!zn,Xa=Ye&&(!pi||zn&&8<zn&&11>=zn),us=" ",cs=!1;function Za(e,t){switch(e){case"keyup":return $d.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ja(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $t=!1;function Bd(e,t){switch(e){case"compositionend":return Ja(t);case"keypress":return t.which!==32?null:(cs=!0,us);case"textInput":return e=t.data,e===us&&cs?null:e;default:return null}}function Hd(e,t){if($t)return e==="compositionend"||!pi&&Za(e,t)?(e=qa(),Cr=ci=lt=null,$t=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xa&&t.locale!=="ko"?null:t.data;default:return null}}var Qd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ds(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qd[e.type]:t==="textarea"}function eu(e,t,n,r){La(r),t=Br(t,"onChange"),0<t.length&&(n=new di("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Pn=null,An=null;function Vd(e){du(e,0)}function al(e){var t=Ht(e);if(Na(t))return e}function Wd(e,t){if(e==="change")return t}var tu=!1;if(Ye){var Fl;if(Ye){var Dl="oninput"in document;if(!Dl){var fs=document.createElement("div");fs.setAttribute("oninput","return;"),Dl=typeof fs.oninput=="function"}Fl=Dl}else Fl=!1;tu=Fl&&(!document.documentMode||9<document.documentMode)}function ps(){Pn&&(Pn.detachEvent("onpropertychange",nu),An=Pn=null)}function nu(e){if(e.propertyName==="value"&&al(An)){var t=[];eu(t,An,e,oi(e)),Ra(Vd,t)}}function Gd(e,t,n){e==="focusin"?(ps(),Pn=t,An=n,Pn.attachEvent("onpropertychange",nu)):e==="focusout"&&ps()}function Yd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return al(An)}function Kd(e,t){if(e==="click")return al(t)}function qd(e,t){if(e==="input"||e==="change")return al(t)}function Xd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Re=typeof Object.is=="function"?Object.is:Xd;function Bn(e,t){if(Re(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Zl.call(t,l)||!Re(e[l],t[l]))return!1}return!0}function ms(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hs(e,t){var n=ms(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ms(n)}}function ru(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ru(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function lu(){for(var e=window,t=Rr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rr(e.document)}return t}function mi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Zd(e){var t=lu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ru(n.ownerDocument.documentElement,n)){if(r!==null&&mi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=hs(n,o);var i=hs(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jd=Ye&&"documentMode"in document&&11>=document.documentMode,At=null,xo=null,Tn=null,yo=!1;function gs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yo||At==null||At!==Rr(r)||(r=At,"selectionStart"in r&&mi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Tn&&Bn(Tn,r)||(Tn=r,r=Br(xo,"onSelect"),0<r.length&&(t=new di("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=At)))}function mr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Bt={animationend:mr("Animation","AnimationEnd"),animationiteration:mr("Animation","AnimationIteration"),animationstart:mr("Animation","AnimationStart"),transitionend:mr("Transition","TransitionEnd")},Ml={},ou={};Ye&&(ou=document.createElement("div").style,"AnimationEvent"in window||(delete Bt.animationend.animation,delete Bt.animationiteration.animation,delete Bt.animationstart.animation),"TransitionEvent"in window||delete Bt.transitionend.transition);function ul(e){if(Ml[e])return Ml[e];if(!Bt[e])return e;var t=Bt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ou)return Ml[e]=t[n];return e}var iu=ul("animationend"),su=ul("animationiteration"),au=ul("animationstart"),uu=ul("transitionend"),cu=new Map,vs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gt(e,t){cu.set(e,t),Mt(t,[e])}for(var Rl=0;Rl<vs.length;Rl++){var Ol=vs[Rl],ef=Ol.toLowerCase(),tf=Ol[0].toUpperCase()+Ol.slice(1);gt(ef,"on"+tf)}gt(iu,"onAnimationEnd");gt(su,"onAnimationIteration");gt(au,"onAnimationStart");gt("dblclick","onDoubleClick");gt("focusin","onFocus");gt("focusout","onBlur");gt(uu,"onTransitionEnd");nn("onMouseEnter",["mouseout","mouseover"]);nn("onMouseLeave",["mouseout","mouseover"]);nn("onPointerEnter",["pointerout","pointerover"]);nn("onPointerLeave",["pointerout","pointerover"]);Mt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var En="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nf=new Set("cancel close invalid load scroll toggle".split(" ").concat(En));function xs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ed(r,t,void 0,e),e.currentTarget=null}function du(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var u=r[i],a=u.instance,d=u.currentTarget;if(u=u.listener,a!==o&&l.isPropagationStopped())break e;xs(l,u,d),o=a}else for(i=0;i<r.length;i++){if(u=r[i],a=u.instance,d=u.currentTarget,u=u.listener,a!==o&&l.isPropagationStopped())break e;xs(l,u,d),o=a}}}if(br)throw e=mo,br=!1,mo=null,e}function $(e,t){var n=t[No];n===void 0&&(n=t[No]=new Set);var r=e+"__bubble";n.has(r)||(fu(t,e,2,!1),n.add(r))}function bl(e,t,n){var r=0;t&&(r|=4),fu(n,e,r,t)}var hr="_reactListening"+Math.random().toString(36).slice(2);function Hn(e){if(!e[hr]){e[hr]=!0,ya.forEach(function(n){n!=="selectionchange"&&(nf.has(n)||bl(n,!1,e),bl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[hr]||(t[hr]=!0,bl("selectionchange",!1,t))}}function fu(e,t,n,r){switch(Ka(t)){case 1:var l=gd;break;case 4:l=vd;break;default:l=ui}n=l.bind(null,t,n,e),l=void 0,!po||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Il(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;i=i.return}for(;u!==null;){if(i=Nt(u),i===null)return;if(a=i.tag,a===5||a===6){r=o=i;continue e}u=u.parentNode}}r=r.return}Ra(function(){var d=o,g=oi(n),m=[];e:{var h=cu.get(e);if(h!==void 0){var x=di,k=e;switch(e){case"keypress":if(_r(n)===0)break e;case"keydown":case"keyup":x=Fd;break;case"focusin":k="focus",x=Ll;break;case"focusout":k="blur",x=Ll;break;case"beforeblur":case"afterblur":x=Ll;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=is;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=wd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Rd;break;case iu:case su:case au:x=jd;break;case uu:x=bd;break;case"scroll":x=xd;break;case"wheel":x=Ud;break;case"copy":case"cut":case"paste":x=Ed;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=as}var S=(t&4)!==0,M=!S&&e==="scroll",f=S?h!==null?h+"Capture":null:h;S=[];for(var c=d,p;c!==null;){p=c;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=bn(c,f),v!=null&&S.push(Qn(c,v,p)))),M)break;c=c.return}0<S.length&&(h=new x(h,k,null,n,g),m.push({event:h,listeners:S}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",h&&n!==co&&(k=n.relatedTarget||n.fromElement)&&(Nt(k)||k[Ke]))break e;if((x||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,x?(k=n.relatedTarget||n.toElement,x=d,k=k?Nt(k):null,k!==null&&(M=Rt(k),k!==M||k.tag!==5&&k.tag!==6)&&(k=null)):(x=null,k=d),x!==k)){if(S=is,v="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(S=as,v="onPointerLeave",f="onPointerEnter",c="pointer"),M=x==null?h:Ht(x),p=k==null?h:Ht(k),h=new S(v,c+"leave",x,n,g),h.target=M,h.relatedTarget=p,v=null,Nt(g)===d&&(S=new S(f,c+"enter",k,n,g),S.target=p,S.relatedTarget=M,v=S),M=v,x&&k)t:{for(S=x,f=k,c=0,p=S;p;p=bt(p))c++;for(p=0,v=f;v;v=bt(v))p++;for(;0<c-p;)S=bt(S),c--;for(;0<p-c;)f=bt(f),p--;for(;c--;){if(S===f||f!==null&&S===f.alternate)break t;S=bt(S),f=bt(f)}S=null}else S=null;x!==null&&ys(m,h,x,S,!1),k!==null&&M!==null&&ys(m,M,k,S,!0)}}e:{if(h=d?Ht(d):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var j=Wd;else if(ds(h))if(tu)j=qd;else{j=Yd;var C=Gd}else(x=h.nodeName)&&x.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(j=Kd);if(j&&(j=j(e,d))){eu(m,j,n,g);break e}C&&C(e,h,d),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&oo(h,"number",h.value)}switch(C=d?Ht(d):window,e){case"focusin":(ds(C)||C.contentEditable==="true")&&(At=C,xo=d,Tn=null);break;case"focusout":Tn=xo=At=null;break;case"mousedown":yo=!0;break;case"contextmenu":case"mouseup":case"dragend":yo=!1,gs(m,n,g);break;case"selectionchange":if(Jd)break;case"keydown":case"keyup":gs(m,n,g)}var _;if(pi)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else $t?Za(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Xa&&n.locale!=="ko"&&($t||N!=="onCompositionStart"?N==="onCompositionEnd"&&$t&&(_=qa()):(lt=g,ci="value"in lt?lt.value:lt.textContent,$t=!0)),C=Br(d,N),0<C.length&&(N=new ss(N,e,null,n,g),m.push({event:N,listeners:C}),_?N.data=_:(_=Ja(n),_!==null&&(N.data=_)))),(_=Ad?Bd(e,n):Hd(e,n))&&(d=Br(d,"onBeforeInput"),0<d.length&&(g=new ss("onBeforeInput","beforeinput",null,n,g),m.push({event:g,listeners:d}),g.data=_))}du(m,t)})}function Qn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Br(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=bn(e,n),o!=null&&r.unshift(Qn(e,o,l)),o=bn(e,t),o!=null&&r.push(Qn(e,o,l))),e=e.return}return r}function bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ys(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var u=n,a=u.alternate,d=u.stateNode;if(a!==null&&a===r)break;u.tag===5&&d!==null&&(u=d,l?(a=bn(n,o),a!=null&&i.unshift(Qn(n,a,u))):l||(a=bn(n,o),a!=null&&i.push(Qn(n,a,u)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var rf=/\r\n?/g,lf=/\u0000|\uFFFD/g;function ws(e){return(typeof e=="string"?e:""+e).replace(rf,`
`).replace(lf,"")}function gr(e,t,n){if(t=ws(t),ws(e)!==t&&n)throw Error(y(425))}function Hr(){}var wo=null,ko=null;function So(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var jo=typeof setTimeout=="function"?setTimeout:void 0,of=typeof clearTimeout=="function"?clearTimeout:void 0,ks=typeof Promise=="function"?Promise:void 0,sf=typeof queueMicrotask=="function"?queueMicrotask:typeof ks<"u"?function(e){return ks.resolve(null).then(e).catch(af)}:jo;function af(e){setTimeout(function(){throw e})}function Ul(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),$n(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);$n(t)}function ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ss(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var fn=Math.random().toString(36).slice(2),Ue="__reactFiber$"+fn,Vn="__reactProps$"+fn,Ke="__reactContainer$"+fn,No="__reactEvents$"+fn,uf="__reactListeners$"+fn,cf="__reactHandles$"+fn;function Nt(e){var t=e[Ue];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ke]||n[Ue]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ss(e);e!==null;){if(n=e[Ue])return n;e=Ss(e)}return t}e=n,n=e.parentNode}return null}function tr(e){return e=e[Ue]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ht(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function cl(e){return e[Vn]||null}var Eo=[],Qt=-1;function vt(e){return{current:e}}function A(e){0>Qt||(e.current=Eo[Qt],Eo[Qt]=null,Qt--)}function I(e,t){Qt++,Eo[Qt]=e.current,e.current=t}var ht={},ie=vt(ht),me=vt(!1),Pt=ht;function rn(e,t){var n=e.type.contextTypes;if(!n)return ht;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function he(e){return e=e.childContextTypes,e!=null}function Qr(){A(me),A(ie)}function js(e,t,n){if(ie.current!==ht)throw Error(y(168));I(ie,t),I(me,n)}function pu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(y(108,Gc(e)||"Unknown",l));return W({},n,r)}function Vr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ht,Pt=ie.current,I(ie,e),I(me,me.current),!0}function Ns(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=pu(e,t,Pt),r.__reactInternalMemoizedMergedChildContext=e,A(me),A(ie),I(ie,e)):A(me),I(me,n)}var Qe=null,dl=!1,$l=!1;function mu(e){Qe===null?Qe=[e]:Qe.push(e)}function df(e){dl=!0,mu(e)}function xt(){if(!$l&&Qe!==null){$l=!0;var e=0,t=O;try{var n=Qe;for(O=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Qe=null,dl=!1}catch(l){throw Qe!==null&&(Qe=Qe.slice(e+1)),Ua(ii,xt),l}finally{O=t,$l=!1}}return null}var Vt=[],Wt=0,Wr=null,Gr=0,je=[],Ne=0,Tt=null,Ve=1,We="";function St(e,t){Vt[Wt++]=Gr,Vt[Wt++]=Wr,Wr=e,Gr=t}function hu(e,t,n){je[Ne++]=Ve,je[Ne++]=We,je[Ne++]=Tt,Tt=e;var r=Ve;e=We;var l=32-De(r)-1;r&=~(1<<l),n+=1;var o=32-De(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,Ve=1<<32-De(t)+l|n<<l|r,We=o+e}else Ve=1<<o|n<<l|r,We=e}function hi(e){e.return!==null&&(St(e,1),hu(e,1,0))}function gi(e){for(;e===Wr;)Wr=Vt[--Wt],Vt[Wt]=null,Gr=Vt[--Wt],Vt[Wt]=null;for(;e===Tt;)Tt=je[--Ne],je[Ne]=null,We=je[--Ne],je[Ne]=null,Ve=je[--Ne],je[Ne]=null}var ye=null,xe=null,B=!1,Fe=null;function gu(e,t){var n=Ee(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Es(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ye=e,xe=ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ye=e,xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Tt!==null?{id:Ve,overflow:We}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ee(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ye=e,xe=null,!0):!1;default:return!1}}function Co(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _o(e){if(B){var t=xe;if(t){var n=t;if(!Es(e,t)){if(Co(e))throw Error(y(418));t=ut(n.nextSibling);var r=ye;t&&Es(e,t)?gu(r,n):(e.flags=e.flags&-4097|2,B=!1,ye=e)}}else{if(Co(e))throw Error(y(418));e.flags=e.flags&-4097|2,B=!1,ye=e}}}function Cs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function vr(e){if(e!==ye)return!1;if(!B)return Cs(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!So(e.type,e.memoizedProps)),t&&(t=xe)){if(Co(e))throw vu(),Error(y(418));for(;t;)gu(e,t),t=ut(t.nextSibling)}if(Cs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){xe=ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}xe=null}}else xe=ye?ut(e.stateNode.nextSibling):null;return!0}function vu(){for(var e=xe;e;)e=ut(e.nextSibling)}function ln(){xe=ye=null,B=!1}function vi(e){Fe===null?Fe=[e]:Fe.push(e)}var ff=Ze.ReactCurrentBatchConfig;function yn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var u=l.refs;i===null?delete u[o]:u[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function xr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function _s(e){var t=e._init;return t(e._payload)}function xu(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=pt(f,c),f.index=0,f.sibling=null,f}function o(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,c,p,v){return c===null||c.tag!==6?(c=Gl(p,f.mode,v),c.return=f,c):(c=l(c,p),c.return=f,c)}function a(f,c,p,v){var j=p.type;return j===Ut?g(f,c,p.props.children,v,p.key):c!==null&&(c.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===et&&_s(j)===c.type)?(v=l(c,p.props),v.ref=yn(f,c,p),v.return=f,v):(v=Mr(p.type,p.key,p.props,null,f.mode,v),v.ref=yn(f,c,p),v.return=f,v)}function d(f,c,p,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Yl(p,f.mode,v),c.return=f,c):(c=l(c,p.children||[]),c.return=f,c)}function g(f,c,p,v,j){return c===null||c.tag!==7?(c=zt(p,f.mode,v,j),c.return=f,c):(c=l(c,p),c.return=f,c)}function m(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Gl(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case sr:return p=Mr(c.type,c.key,c.props,null,f.mode,p),p.ref=yn(f,null,c),p.return=f,p;case It:return c=Yl(c,f.mode,p),c.return=f,c;case et:var v=c._init;return m(f,v(c._payload),p)}if(jn(c)||mn(c))return c=zt(c,f.mode,p,null),c.return=f,c;xr(f,c)}return null}function h(f,c,p,v){var j=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return j!==null?null:u(f,c,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case sr:return p.key===j?a(f,c,p,v):null;case It:return p.key===j?d(f,c,p,v):null;case et:return j=p._init,h(f,c,j(p._payload),v)}if(jn(p)||mn(p))return j!==null?null:g(f,c,p,v,null);xr(f,p)}return null}function x(f,c,p,v,j){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,u(c,f,""+v,j);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case sr:return f=f.get(v.key===null?p:v.key)||null,a(c,f,v,j);case It:return f=f.get(v.key===null?p:v.key)||null,d(c,f,v,j);case et:var C=v._init;return x(f,c,p,C(v._payload),j)}if(jn(v)||mn(v))return f=f.get(p)||null,g(c,f,v,j,null);xr(c,v)}return null}function k(f,c,p,v){for(var j=null,C=null,_=c,N=c=0,b=null;_!==null&&N<p.length;N++){_.index>N?(b=_,_=null):b=_.sibling;var T=h(f,_,p[N],v);if(T===null){_===null&&(_=b);break}e&&_&&T.alternate===null&&t(f,_),c=o(T,c,N),C===null?j=T:C.sibling=T,C=T,_=b}if(N===p.length)return n(f,_),B&&St(f,N),j;if(_===null){for(;N<p.length;N++)_=m(f,p[N],v),_!==null&&(c=o(_,c,N),C===null?j=_:C.sibling=_,C=_);return B&&St(f,N),j}for(_=r(f,_);N<p.length;N++)b=x(_,f,N,p[N],v),b!==null&&(e&&b.alternate!==null&&_.delete(b.key===null?N:b.key),c=o(b,c,N),C===null?j=b:C.sibling=b,C=b);return e&&_.forEach(function(se){return t(f,se)}),B&&St(f,N),j}function S(f,c,p,v){var j=mn(p);if(typeof j!="function")throw Error(y(150));if(p=j.call(p),p==null)throw Error(y(151));for(var C=j=null,_=c,N=c=0,b=null,T=p.next();_!==null&&!T.done;N++,T=p.next()){_.index>N?(b=_,_=null):b=_.sibling;var se=h(f,_,T.value,v);if(se===null){_===null&&(_=b);break}e&&_&&se.alternate===null&&t(f,_),c=o(se,c,N),C===null?j=se:C.sibling=se,C=se,_=b}if(T.done)return n(f,_),B&&St(f,N),j;if(_===null){for(;!T.done;N++,T=p.next())T=m(f,T.value,v),T!==null&&(c=o(T,c,N),C===null?j=T:C.sibling=T,C=T);return B&&St(f,N),j}for(_=r(f,_);!T.done;N++,T=p.next())T=x(_,f,N,T.value,v),T!==null&&(e&&T.alternate!==null&&_.delete(T.key===null?N:T.key),c=o(T,c,N),C===null?j=T:C.sibling=T,C=T);return e&&_.forEach(function(Be){return t(f,Be)}),B&&St(f,N),j}function M(f,c,p,v){if(typeof p=="object"&&p!==null&&p.type===Ut&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case sr:e:{for(var j=p.key,C=c;C!==null;){if(C.key===j){if(j=p.type,j===Ut){if(C.tag===7){n(f,C.sibling),c=l(C,p.props.children),c.return=f,f=c;break e}}else if(C.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===et&&_s(j)===C.type){n(f,C.sibling),c=l(C,p.props),c.ref=yn(f,C,p),c.return=f,f=c;break e}n(f,C);break}else t(f,C);C=C.sibling}p.type===Ut?(c=zt(p.props.children,f.mode,v,p.key),c.return=f,f=c):(v=Mr(p.type,p.key,p.props,null,f.mode,v),v.ref=yn(f,c,p),v.return=f,f=v)}return i(f);case It:e:{for(C=p.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=l(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Yl(p,f.mode,v),c.return=f,f=c}return i(f);case et:return C=p._init,M(f,c,C(p._payload),v)}if(jn(p))return k(f,c,p,v);if(mn(p))return S(f,c,p,v);xr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=l(c,p),c.return=f,f=c):(n(f,c),c=Gl(p,f.mode,v),c.return=f,f=c),i(f)):n(f,c)}return M}var on=xu(!0),yu=xu(!1),Yr=vt(null),Kr=null,Gt=null,xi=null;function yi(){xi=Gt=Kr=null}function wi(e){var t=Yr.current;A(Yr),e._currentValue=t}function zo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function en(e,t){Kr=e,xi=Gt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),e.firstContext=null)}function _e(e){var t=e._currentValue;if(xi!==e)if(e={context:e,memoizedValue:t,next:null},Gt===null){if(Kr===null)throw Error(y(308));Gt=e,Kr.dependencies={lanes:0,firstContext:e}}else Gt=Gt.next=e;return t}var Et=null;function ki(e){Et===null?Et=[e]:Et.push(e)}function wu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,ki(t)):(n.next=l.next,l.next=n),t.interleaved=n,qe(e,r)}function qe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tt=!1;function Si(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ku(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ge(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ct(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,qe(e,n)}return l=r.interleaved,l===null?(t.next=t,ki(r)):(t.next=l.next,l.next=t),r.interleaved=t,qe(e,n)}function zr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,si(e,n)}}function zs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function qr(e,t,n,r){var l=e.updateQueue;tt=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var a=u,d=a.next;a.next=null,i===null?o=d:i.next=d,i=a;var g=e.alternate;g!==null&&(g=g.updateQueue,u=g.lastBaseUpdate,u!==i&&(u===null?g.firstBaseUpdate=d:u.next=d,g.lastBaseUpdate=a))}if(o!==null){var m=l.baseState;i=0,g=d=a=null,u=o;do{var h=u.lane,x=u.eventTime;if((r&h)===h){g!==null&&(g=g.next={eventTime:x,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var k=e,S=u;switch(h=t,x=n,S.tag){case 1:if(k=S.payload,typeof k=="function"){m=k.call(x,m,h);break e}m=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=S.payload,h=typeof k=="function"?k.call(x,m,h):k,h==null)break e;m=W({},m,h);break e;case 2:tt=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[u]:h.push(u))}else x={eventTime:x,lane:h,tag:u.tag,payload:u.payload,callback:u.callback,next:null},g===null?(d=g=x,a=m):g=g.next=x,i|=h;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;h=u,u=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(g===null&&(a=m),l.baseState=a,l.firstBaseUpdate=d,l.lastBaseUpdate=g,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Ft|=i,e.lanes=i,e.memoizedState=m}}function Ps(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(y(191,l));l.call(r)}}}var nr={},Ae=vt(nr),Wn=vt(nr),Gn=vt(nr);function Ct(e){if(e===nr)throw Error(y(174));return e}function ji(e,t){switch(I(Gn,t),I(Wn,e),I(Ae,nr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:so(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=so(t,e)}A(Ae),I(Ae,t)}function sn(){A(Ae),A(Wn),A(Gn)}function Su(e){Ct(Gn.current);var t=Ct(Ae.current),n=so(t,e.type);t!==n&&(I(Wn,e),I(Ae,n))}function Ni(e){Wn.current===e&&(A(Ae),A(Wn))}var Q=vt(0);function Xr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Al=[];function Ei(){for(var e=0;e<Al.length;e++)Al[e]._workInProgressVersionPrimary=null;Al.length=0}var Pr=Ze.ReactCurrentDispatcher,Bl=Ze.ReactCurrentBatchConfig,Lt=0,V=null,q=null,Z=null,Zr=!1,Ln=!1,Yn=0,pf=0;function re(){throw Error(y(321))}function Ci(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Re(e[n],t[n]))return!1;return!0}function _i(e,t,n,r,l,o){if(Lt=o,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pr.current=e===null||e.memoizedState===null?vf:xf,e=n(r,l),Ln){o=0;do{if(Ln=!1,Yn=0,25<=o)throw Error(y(301));o+=1,Z=q=null,t.updateQueue=null,Pr.current=yf,e=n(r,l)}while(Ln)}if(Pr.current=Jr,t=q!==null&&q.next!==null,Lt=0,Z=q=V=null,Zr=!1,t)throw Error(y(300));return e}function zi(){var e=Yn!==0;return Yn=0,e}function Ie(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?V.memoizedState=Z=e:Z=Z.next=e,Z}function ze(){if(q===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=q.next;var t=Z===null?V.memoizedState:Z.next;if(t!==null)Z=t,q=e;else{if(e===null)throw Error(y(310));q=e,e={memoizedState:q.memoizedState,baseState:q.baseState,baseQueue:q.baseQueue,queue:q.queue,next:null},Z===null?V.memoizedState=Z=e:Z=Z.next=e}return Z}function Kn(e,t){return typeof t=="function"?t(e):t}function Hl(e){var t=ze(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=q,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var u=i=null,a=null,d=o;do{var g=d.lane;if((Lt&g)===g)a!==null&&(a=a.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var m={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};a===null?(u=a=m,i=r):a=a.next=m,V.lanes|=g,Ft|=g}d=d.next}while(d!==null&&d!==o);a===null?i=r:a.next=u,Re(r,t.memoizedState)||(pe=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,V.lanes|=o,Ft|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ql(e){var t=ze(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Re(o,t.memoizedState)||(pe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ju(){}function Nu(e,t){var n=V,r=ze(),l=t(),o=!Re(r.memoizedState,l);if(o&&(r.memoizedState=l,pe=!0),r=r.queue,Pi(_u.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,qn(9,Cu.bind(null,n,r,l,t),void 0,null),J===null)throw Error(y(349));Lt&30||Eu(n,t,l)}return l}function Eu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Cu(e,t,n,r){t.value=n,t.getSnapshot=r,zu(t)&&Pu(e)}function _u(e,t,n){return n(function(){zu(t)&&Pu(e)})}function zu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Re(e,n)}catch{return!0}}function Pu(e){var t=qe(e,1);t!==null&&Me(t,e,1,-1)}function Ts(e){var t=Ie();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Kn,lastRenderedState:e},t.queue=e,e=e.dispatch=gf.bind(null,V,e),[t.memoizedState,e]}function qn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Tu(){return ze().memoizedState}function Tr(e,t,n,r){var l=Ie();V.flags|=e,l.memoizedState=qn(1|t,n,void 0,r===void 0?null:r)}function fl(e,t,n,r){var l=ze();r=r===void 0?null:r;var o=void 0;if(q!==null){var i=q.memoizedState;if(o=i.destroy,r!==null&&Ci(r,i.deps)){l.memoizedState=qn(t,n,o,r);return}}V.flags|=e,l.memoizedState=qn(1|t,n,o,r)}function Ls(e,t){return Tr(8390656,8,e,t)}function Pi(e,t){return fl(2048,8,e,t)}function Lu(e,t){return fl(4,2,e,t)}function Fu(e,t){return fl(4,4,e,t)}function Du(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Mu(e,t,n){return n=n!=null?n.concat([e]):null,fl(4,4,Du.bind(null,t,e),n)}function Ti(){}function Ru(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ci(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ou(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ci(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function bu(e,t,n){return Lt&21?(Re(n,t)||(n=Ba(),V.lanes|=n,Ft|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=n)}function mf(e,t){var n=O;O=n!==0&&4>n?n:4,e(!0);var r=Bl.transition;Bl.transition={};try{e(!1),t()}finally{O=n,Bl.transition=r}}function Iu(){return ze().memoizedState}function hf(e,t,n){var r=ft(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Uu(e))$u(t,n);else if(n=wu(e,t,n,r),n!==null){var l=ue();Me(n,e,r,l),Au(n,t,r)}}function gf(e,t,n){var r=ft(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Uu(e))$u(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,u=o(i,n);if(l.hasEagerState=!0,l.eagerState=u,Re(u,i)){var a=t.interleaved;a===null?(l.next=l,ki(t)):(l.next=a.next,a.next=l),t.interleaved=l;return}}catch{}finally{}n=wu(e,t,l,r),n!==null&&(l=ue(),Me(n,e,r,l),Au(n,t,r))}}function Uu(e){var t=e.alternate;return e===V||t!==null&&t===V}function $u(e,t){Ln=Zr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Au(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,si(e,n)}}var Jr={readContext:_e,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},vf={readContext:_e,useCallback:function(e,t){return Ie().memoizedState=[e,t===void 0?null:t],e},useContext:_e,useEffect:Ls,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Tr(4194308,4,Du.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Tr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Tr(4,2,e,t)},useMemo:function(e,t){var n=Ie();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ie();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=hf.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=Ie();return e={current:e},t.memoizedState=e},useState:Ts,useDebugValue:Ti,useDeferredValue:function(e){return Ie().memoizedState=e},useTransition:function(){var e=Ts(!1),t=e[0];return e=mf.bind(null,e[1]),Ie().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=V,l=Ie();if(B){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),J===null)throw Error(y(349));Lt&30||Eu(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Ls(_u.bind(null,r,o,e),[e]),r.flags|=2048,qn(9,Cu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ie(),t=J.identifierPrefix;if(B){var n=We,r=Ve;n=(r&~(1<<32-De(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Yn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=pf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},xf={readContext:_e,useCallback:Ru,useContext:_e,useEffect:Pi,useImperativeHandle:Mu,useInsertionEffect:Lu,useLayoutEffect:Fu,useMemo:Ou,useReducer:Hl,useRef:Tu,useState:function(){return Hl(Kn)},useDebugValue:Ti,useDeferredValue:function(e){var t=ze();return bu(t,q.memoizedState,e)},useTransition:function(){var e=Hl(Kn)[0],t=ze().memoizedState;return[e,t]},useMutableSource:ju,useSyncExternalStore:Nu,useId:Iu,unstable_isNewReconciler:!1},yf={readContext:_e,useCallback:Ru,useContext:_e,useEffect:Pi,useImperativeHandle:Mu,useInsertionEffect:Lu,useLayoutEffect:Fu,useMemo:Ou,useReducer:Ql,useRef:Tu,useState:function(){return Ql(Kn)},useDebugValue:Ti,useDeferredValue:function(e){var t=ze();return q===null?t.memoizedState=e:bu(t,q.memoizedState,e)},useTransition:function(){var e=Ql(Kn)[0],t=ze().memoizedState;return[e,t]},useMutableSource:ju,useSyncExternalStore:Nu,useId:Iu,unstable_isNewReconciler:!1};function Te(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Po(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var pl={isMounted:function(e){return(e=e._reactInternals)?Rt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),l=ft(e),o=Ge(r,l);o.payload=t,n!=null&&(o.callback=n),t=ct(e,o,l),t!==null&&(Me(t,e,l,r),zr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),l=ft(e),o=Ge(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ct(e,o,l),t!==null&&(Me(t,e,l,r),zr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=ft(e),l=Ge(n,r);l.tag=2,t!=null&&(l.callback=t),t=ct(e,l,r),t!==null&&(Me(t,e,r,n),zr(t,e,r))}};function Fs(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!Bn(n,r)||!Bn(l,o):!0}function Bu(e,t,n){var r=!1,l=ht,o=t.contextType;return typeof o=="object"&&o!==null?o=_e(o):(l=he(t)?Pt:ie.current,r=t.contextTypes,o=(r=r!=null)?rn(e,l):ht),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=pl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ds(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&pl.enqueueReplaceState(t,t.state,null)}function To(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Si(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=_e(o):(o=he(t)?Pt:ie.current,l.context=rn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Po(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&pl.enqueueReplaceState(l,l.state,null),qr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function an(e,t){try{var n="",r=t;do n+=Wc(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Vl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Lo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var wf=typeof WeakMap=="function"?WeakMap:Map;function Hu(e,t,n){n=Ge(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){tl||(tl=!0,Ao=r),Lo(e,t)},n}function Qu(e,t,n){n=Ge(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Lo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Lo(e,t),typeof r!="function"&&(dt===null?dt=new Set([this]):dt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Ms(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new wf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Mf.bind(null,e,t,n),t.then(e,e))}function Rs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Os(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ge(-1,1),t.tag=2,ct(n,t,1))),n.lanes|=1),e)}var kf=Ze.ReactCurrentOwner,pe=!1;function ae(e,t,n,r){t.child=e===null?yu(t,null,n,r):on(t,e.child,n,r)}function bs(e,t,n,r,l){n=n.render;var o=t.ref;return en(t,l),r=_i(e,t,n,r,o,l),n=zi(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Xe(e,t,l)):(B&&n&&hi(t),t.flags|=1,ae(e,t,r,l),t.child)}function Is(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Ii(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Vu(e,t,o,r,l)):(e=Mr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:Bn,n(i,r)&&e.ref===t.ref)return Xe(e,t,l)}return t.flags|=1,e=pt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Vu(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(Bn(o,r)&&e.ref===t.ref)if(pe=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,Xe(e,t,l)}return Fo(e,t,n,r,l)}function Wu(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(Kt,ve),ve|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,I(Kt,ve),ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,I(Kt,ve),ve|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,I(Kt,ve),ve|=r;return ae(e,t,l,n),t.child}function Gu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Fo(e,t,n,r,l){var o=he(n)?Pt:ie.current;return o=rn(t,o),en(t,l),n=_i(e,t,n,r,o,l),r=zi(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Xe(e,t,l)):(B&&r&&hi(t),t.flags|=1,ae(e,t,n,l),t.child)}function Us(e,t,n,r,l){if(he(n)){var o=!0;Vr(t)}else o=!1;if(en(t,l),t.stateNode===null)Lr(e,t),Bu(t,n,r),To(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,u=t.memoizedProps;i.props=u;var a=i.context,d=n.contextType;typeof d=="object"&&d!==null?d=_e(d):(d=he(n)?Pt:ie.current,d=rn(t,d));var g=n.getDerivedStateFromProps,m=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function";m||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==r||a!==d)&&Ds(t,i,r,d),tt=!1;var h=t.memoizedState;i.state=h,qr(t,r,i,l),a=t.memoizedState,u!==r||h!==a||me.current||tt?(typeof g=="function"&&(Po(t,n,g,r),a=t.memoizedState),(u=tt||Fs(t,n,u,r,h,a,d))?(m||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),i.props=r,i.state=a,i.context=d,r=u):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,ku(e,t),u=t.memoizedProps,d=t.type===t.elementType?u:Te(t.type,u),i.props=d,m=t.pendingProps,h=i.context,a=n.contextType,typeof a=="object"&&a!==null?a=_e(a):(a=he(n)?Pt:ie.current,a=rn(t,a));var x=n.getDerivedStateFromProps;(g=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==m||h!==a)&&Ds(t,i,r,a),tt=!1,h=t.memoizedState,i.state=h,qr(t,r,i,l);var k=t.memoizedState;u!==m||h!==k||me.current||tt?(typeof x=="function"&&(Po(t,n,x,r),k=t.memoizedState),(d=tt||Fs(t,n,d,r,h,k,a)||!1)?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,k,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,k,a)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),i.props=r,i.state=k,i.context=a,r=d):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Do(e,t,n,r,o,l)}function Do(e,t,n,r,l,o){Gu(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&Ns(t,n,!1),Xe(e,t,o);r=t.stateNode,kf.current=t;var u=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=on(t,e.child,null,o),t.child=on(t,null,u,o)):ae(e,t,u,o),t.memoizedState=r.state,l&&Ns(t,n,!0),t.child}function Yu(e){var t=e.stateNode;t.pendingContext?js(e,t.pendingContext,t.pendingContext!==t.context):t.context&&js(e,t.context,!1),ji(e,t.containerInfo)}function $s(e,t,n,r,l){return ln(),vi(l),t.flags|=256,ae(e,t,n,r),t.child}var Mo={dehydrated:null,treeContext:null,retryLane:0};function Ro(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ku(e,t,n){var r=t.pendingProps,l=Q.current,o=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),I(Q,l&1),e===null)return _o(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=gl(i,r,0,null),e=zt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ro(n),t.memoizedState=Mo,e):Li(t,i));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return Sf(e,t,i,r,u,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,u=l.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=pt(l,a),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?o=pt(u,o):(o=zt(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?Ro(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=Mo,r}return o=e.child,e=o.sibling,r=pt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Li(e,t){return t=gl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function yr(e,t,n,r){return r!==null&&vi(r),on(t,e.child,null,n),e=Li(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Sf(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=Vl(Error(y(422))),yr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=gl({mode:"visible",children:r.children},l,0,null),o=zt(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&on(t,e.child,null,i),t.child.memoizedState=Ro(i),t.memoizedState=Mo,o);if(!(t.mode&1))return yr(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(y(419)),r=Vl(o,r,void 0),yr(e,t,i,r)}if(u=(i&e.childLanes)!==0,pe||u){if(r=J,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,qe(e,l),Me(r,e,l,-1))}return bi(),r=Vl(Error(y(421))),yr(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Rf.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,xe=ut(l.nextSibling),ye=t,B=!0,Fe=null,e!==null&&(je[Ne++]=Ve,je[Ne++]=We,je[Ne++]=Tt,Ve=e.id,We=e.overflow,Tt=t),t=Li(t,r.children),t.flags|=4096,t)}function As(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),zo(e.return,t,n)}function Wl(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function qu(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(ae(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&As(e,n,t);else if(e.tag===19)As(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(I(Q,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Xr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Wl(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Xr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Wl(t,!0,n,null,o);break;case"together":Wl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Lr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ft|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=pt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jf(e,t,n){switch(t.tag){case 3:Yu(t),ln();break;case 5:Su(t);break;case 1:he(t.type)&&Vr(t);break;case 4:ji(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;I(Yr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(I(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?Ku(e,t,n):(I(Q,Q.current&1),e=Xe(e,t,n),e!==null?e.sibling:null);I(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return qu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),I(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,Wu(e,t,n)}return Xe(e,t,n)}var Xu,Oo,Zu,Ju;Xu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Oo=function(){};Zu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Ct(Ae.current);var o=null;switch(n){case"input":l=ro(e,l),r=ro(e,r),o=[];break;case"select":l=W({},l,{value:void 0}),r=W({},r,{value:void 0}),o=[];break;case"textarea":l=io(e,l),r=io(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Hr)}ao(n,r);var i;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var u=l[d];for(i in u)u.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Rn.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var a=r[d];if(u=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&a!==u&&(a!=null||u!=null))if(d==="style")if(u){for(i in u)!u.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in a)a.hasOwnProperty(i)&&u[i]!==a[i]&&(n||(n={}),n[i]=a[i])}else n||(o||(o=[]),o.push(d,n)),n=a;else d==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(o=o||[]).push(d,a)):d==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(d,""+a):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Rn.hasOwnProperty(d)?(a!=null&&d==="onScroll"&&$("scroll",e),o||u===a||(o=[])):(o=o||[]).push(d,a))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};Ju=function(e,t,n,r){n!==r&&(t.flags|=4)};function wn(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Nf(e,t,n){var r=t.pendingProps;switch(gi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return he(t.type)&&Qr(),le(t),null;case 3:return r=t.stateNode,sn(),A(me),A(ie),Ei(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(vr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Fe!==null&&(Qo(Fe),Fe=null))),Oo(e,t),le(t),null;case 5:Ni(t);var l=Ct(Gn.current);if(n=t.type,e!==null&&t.stateNode!=null)Zu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return le(t),null}if(e=Ct(Ae.current),vr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ue]=t,r[Vn]=o,e=(t.mode&1)!==0,n){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(l=0;l<En.length;l++)$(En[l],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":qi(r,o),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},$("invalid",r);break;case"textarea":Zi(r,o),$("invalid",r)}ao(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var u=o[i];i==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&gr(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&gr(r.textContent,u,e),l=["children",""+u]):Rn.hasOwnProperty(i)&&u!=null&&i==="onScroll"&&$("scroll",r)}switch(n){case"input":ar(r),Xi(r,o,!0);break;case"textarea":ar(r),Ji(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Hr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=_a(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Ue]=t,e[Vn]=r,Xu(e,t,!1,!1),t.stateNode=e;e:{switch(i=uo(n,r),n){case"dialog":$("cancel",e),$("close",e),l=r;break;case"iframe":case"object":case"embed":$("load",e),l=r;break;case"video":case"audio":for(l=0;l<En.length;l++)$(En[l],e);l=r;break;case"source":$("error",e),l=r;break;case"img":case"image":case"link":$("error",e),$("load",e),l=r;break;case"details":$("toggle",e),l=r;break;case"input":qi(e,r),l=ro(e,r),$("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=W({},r,{value:void 0}),$("invalid",e);break;case"textarea":Zi(e,r),l=io(e,r),$("invalid",e);break;default:l=r}ao(n,l),u=l;for(o in u)if(u.hasOwnProperty(o)){var a=u[o];o==="style"?Ta(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&za(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&On(e,a):typeof a=="number"&&On(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Rn.hasOwnProperty(o)?a!=null&&o==="onScroll"&&$("scroll",e):a!=null&&ti(e,o,a,i))}switch(n){case"input":ar(e),Xi(e,r,!1);break;case"textarea":ar(e),Ji(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?qt(e,!!r.multiple,o,!1):r.defaultValue!=null&&qt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Hr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)Ju(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=Ct(Gn.current),Ct(Ae.current),vr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ue]=t,(o=r.nodeValue!==n)&&(e=ye,e!==null))switch(e.tag){case 3:gr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&gr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ue]=t,t.stateNode=r}return le(t),null;case 13:if(A(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&xe!==null&&t.mode&1&&!(t.flags&128))vu(),ln(),t.flags|=98560,o=!1;else if(o=vr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(y(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(y(317));o[Ue]=t}else ln(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),o=!1}else Fe!==null&&(Qo(Fe),Fe=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?X===0&&(X=3):bi())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return sn(),Oo(e,t),e===null&&Hn(t.stateNode.containerInfo),le(t),null;case 10:return wi(t.type._context),le(t),null;case 17:return he(t.type)&&Qr(),le(t),null;case 19:if(A(Q),o=t.memoizedState,o===null)return le(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)wn(o,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Xr(e),i!==null){for(t.flags|=128,wn(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return I(Q,Q.current&1|2),t.child}e=e.sibling}o.tail!==null&&Y()>un&&(t.flags|=128,r=!0,wn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Xr(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),wn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!B)return le(t),null}else 2*Y()-o.renderingStartTime>un&&n!==1073741824&&(t.flags|=128,r=!0,wn(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Y(),t.sibling=null,n=Q.current,I(Q,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return Oi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ve&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function Ef(e,t){switch(gi(t),t.tag){case 1:return he(t.type)&&Qr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return sn(),A(me),A(ie),Ei(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ni(t),null;case 13:if(A(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));ln()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(Q),null;case 4:return sn(),null;case 10:return wi(t.type._context),null;case 22:case 23:return Oi(),null;case 24:return null;default:return null}}var wr=!1,oe=!1,Cf=typeof WeakSet=="function"?WeakSet:Set,E=null;function Yt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function bo(e,t,n){try{n()}catch(r){G(e,t,r)}}var Bs=!1;function _f(e,t){if(wo=$r,e=lu(),mi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,u=-1,a=-1,d=0,g=0,m=e,h=null;t:for(;;){for(var x;m!==n||l!==0&&m.nodeType!==3||(u=i+l),m!==o||r!==0&&m.nodeType!==3||(a=i+r),m.nodeType===3&&(i+=m.nodeValue.length),(x=m.firstChild)!==null;)h=m,m=x;for(;;){if(m===e)break t;if(h===n&&++d===l&&(u=i),h===o&&++g===r&&(a=i),(x=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=x}n=u===-1||a===-1?null:{start:u,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ko={focusedElem:e,selectionRange:n},$r=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var S=k.memoizedProps,M=k.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?S:Te(t.type,S),M);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(v){G(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return k=Bs,Bs=!1,k}function Fn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&bo(t,n,o)}l=l.next}while(l!==r)}}function ml(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Io(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ec(e){var t=e.alternate;t!==null&&(e.alternate=null,ec(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ue],delete t[Vn],delete t[No],delete t[uf],delete t[cf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function tc(e){return e.tag===5||e.tag===3||e.tag===4}function Hs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Uo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Hr));else if(r!==4&&(e=e.child,e!==null))for(Uo(e,t,n),e=e.sibling;e!==null;)Uo(e,t,n),e=e.sibling}function $o(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for($o(e,t,n),e=e.sibling;e!==null;)$o(e,t,n),e=e.sibling}var ee=null,Le=!1;function Je(e,t,n){for(n=n.child;n!==null;)nc(e,t,n),n=n.sibling}function nc(e,t,n){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(il,n)}catch{}switch(n.tag){case 5:oe||Yt(n,t);case 6:var r=ee,l=Le;ee=null,Je(e,t,n),ee=r,Le=l,ee!==null&&(Le?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(Le?(e=ee,n=n.stateNode,e.nodeType===8?Ul(e.parentNode,n):e.nodeType===1&&Ul(e,n),$n(e)):Ul(ee,n.stateNode));break;case 4:r=ee,l=Le,ee=n.stateNode.containerInfo,Le=!0,Je(e,t,n),ee=r,Le=l;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&bo(n,t,i),l=l.next}while(l!==r)}Je(e,t,n);break;case 1:if(!oe&&(Yt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){G(n,t,u)}Je(e,t,n);break;case 21:Je(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,Je(e,t,n),oe=r):Je(e,t,n);break;default:Je(e,t,n)}}function Qs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Cf),t.forEach(function(r){var l=Of.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Pe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,u=i;e:for(;u!==null;){switch(u.tag){case 5:ee=u.stateNode,Le=!1;break e;case 3:ee=u.stateNode.containerInfo,Le=!0;break e;case 4:ee=u.stateNode.containerInfo,Le=!0;break e}u=u.return}if(ee===null)throw Error(y(160));nc(o,i,l),ee=null,Le=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(d){G(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)rc(t,e),t=t.sibling}function rc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(t,e),be(e),r&4){try{Fn(3,e,e.return),ml(3,e)}catch(S){G(e,e.return,S)}try{Fn(5,e,e.return)}catch(S){G(e,e.return,S)}}break;case 1:Pe(t,e),be(e),r&512&&n!==null&&Yt(n,n.return);break;case 5:if(Pe(t,e),be(e),r&512&&n!==null&&Yt(n,n.return),e.flags&32){var l=e.stateNode;try{On(l,"")}catch(S){G(e,e.return,S)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,u=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&Ea(l,o),uo(u,i);var d=uo(u,o);for(i=0;i<a.length;i+=2){var g=a[i],m=a[i+1];g==="style"?Ta(l,m):g==="dangerouslySetInnerHTML"?za(l,m):g==="children"?On(l,m):ti(l,g,m,d)}switch(u){case"input":lo(l,o);break;case"textarea":Ca(l,o);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?qt(l,!!o.multiple,x,!1):h!==!!o.multiple&&(o.defaultValue!=null?qt(l,!!o.multiple,o.defaultValue,!0):qt(l,!!o.multiple,o.multiple?[]:"",!1))}l[Vn]=o}catch(S){G(e,e.return,S)}}break;case 6:if(Pe(t,e),be(e),r&4){if(e.stateNode===null)throw Error(y(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(S){G(e,e.return,S)}}break;case 3:if(Pe(t,e),be(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$n(t.containerInfo)}catch(S){G(e,e.return,S)}break;case 4:Pe(t,e),be(e);break;case 13:Pe(t,e),be(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Mi=Y())),r&4&&Qs(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(d=oe)||g,Pe(t,e),oe=d):Pe(t,e),be(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!g&&e.mode&1)for(E=e,g=e.child;g!==null;){for(m=E=g;E!==null;){switch(h=E,x=h.child,h.tag){case 0:case 11:case 14:case 15:Fn(4,h,h.return);break;case 1:Yt(h,h.return);var k=h.stateNode;if(typeof k.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(S){G(r,n,S)}}break;case 5:Yt(h,h.return);break;case 22:if(h.memoizedState!==null){Ws(m);continue}}x!==null?(x.return=h,E=x):Ws(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{l=m.stateNode,d?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=m.stateNode,a=m.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=Pa("display",i))}catch(S){G(e,e.return,S)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(S){G(e,e.return,S)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Pe(t,e),be(e),r&4&&Qs(e);break;case 21:break;default:Pe(t,e),be(e)}}function be(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(tc(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(On(l,""),r.flags&=-33);var o=Hs(e);$o(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,u=Hs(e);Uo(e,u,i);break;default:throw Error(y(161))}}catch(a){G(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function zf(e,t,n){E=e,lc(e)}function lc(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var l=E,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||wr;if(!i){var u=l.alternate,a=u!==null&&u.memoizedState!==null||oe;u=wr;var d=oe;if(wr=i,(oe=a)&&!d)for(E=l;E!==null;)i=E,a=i.child,i.tag===22&&i.memoizedState!==null?Gs(l):a!==null?(a.return=i,E=a):Gs(l);for(;o!==null;)E=o,lc(o),o=o.sibling;E=l,wr=u,oe=d}Vs(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,E=o):Vs(e)}}function Vs(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||ml(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Te(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ps(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ps(t,i,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&$n(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}oe||t.flags&512&&Io(t)}catch(h){G(t,t.return,h)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function Ws(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function Gs(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ml(4,t)}catch(a){G(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(a){G(t,l,a)}}var o=t.return;try{Io(t)}catch(a){G(t,o,a)}break;case 5:var i=t.return;try{Io(t)}catch(a){G(t,i,a)}}}catch(a){G(t,t.return,a)}if(t===e){E=null;break}var u=t.sibling;if(u!==null){u.return=t.return,E=u;break}E=t.return}}var Pf=Math.ceil,el=Ze.ReactCurrentDispatcher,Fi=Ze.ReactCurrentOwner,Ce=Ze.ReactCurrentBatchConfig,R=0,J=null,K=null,te=0,ve=0,Kt=vt(0),X=0,Xn=null,Ft=0,hl=0,Di=0,Dn=null,fe=null,Mi=0,un=1/0,He=null,tl=!1,Ao=null,dt=null,kr=!1,ot=null,nl=0,Mn=0,Bo=null,Fr=-1,Dr=0;function ue(){return R&6?Y():Fr!==-1?Fr:Fr=Y()}function ft(e){return e.mode&1?R&2&&te!==0?te&-te:ff.transition!==null?(Dr===0&&(Dr=Ba()),Dr):(e=O,e!==0||(e=window.event,e=e===void 0?16:Ka(e.type)),e):1}function Me(e,t,n,r){if(50<Mn)throw Mn=0,Bo=null,Error(y(185));Jn(e,n,r),(!(R&2)||e!==J)&&(e===J&&(!(R&2)&&(hl|=n),X===4&&rt(e,te)),ge(e,r),n===1&&R===0&&!(t.mode&1)&&(un=Y()+500,dl&&xt()))}function ge(e,t){var n=e.callbackNode;dd(e,t);var r=Ur(e,e===J?te:0);if(r===0)n!==null&&ns(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ns(n),t===1)e.tag===0?df(Ys.bind(null,e)):mu(Ys.bind(null,e)),sf(function(){!(R&6)&&xt()}),n=null;else{switch(Ha(r)){case 1:n=ii;break;case 4:n=$a;break;case 16:n=Ir;break;case 536870912:n=Aa;break;default:n=Ir}n=fc(n,oc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function oc(e,t){if(Fr=-1,Dr=0,R&6)throw Error(y(327));var n=e.callbackNode;if(tn()&&e.callbackNode!==n)return null;var r=Ur(e,e===J?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=rl(e,r);else{t=r;var l=R;R|=2;var o=sc();(J!==e||te!==t)&&(He=null,un=Y()+500,_t(e,t));do try{Ff();break}catch(u){ic(e,u)}while(!0);yi(),el.current=o,R=l,K!==null?t=0:(J=null,te=0,t=X)}if(t!==0){if(t===2&&(l=ho(e),l!==0&&(r=l,t=Ho(e,l))),t===1)throw n=Xn,_t(e,0),rt(e,r),ge(e,Y()),n;if(t===6)rt(e,r);else{if(l=e.current.alternate,!(r&30)&&!Tf(l)&&(t=rl(e,r),t===2&&(o=ho(e),o!==0&&(r=o,t=Ho(e,o))),t===1))throw n=Xn,_t(e,0),rt(e,r),ge(e,Y()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:jt(e,fe,He);break;case 3:if(rt(e,r),(r&130023424)===r&&(t=Mi+500-Y(),10<t)){if(Ur(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=jo(jt.bind(null,e,fe,He),t);break}jt(e,fe,He);break;case 4:if(rt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-De(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Pf(r/1960))-r,10<r){e.timeoutHandle=jo(jt.bind(null,e,fe,He),r);break}jt(e,fe,He);break;case 5:jt(e,fe,He);break;default:throw Error(y(329))}}}return ge(e,Y()),e.callbackNode===n?oc.bind(null,e):null}function Ho(e,t){var n=Dn;return e.current.memoizedState.isDehydrated&&(_t(e,t).flags|=256),e=rl(e,t),e!==2&&(t=fe,fe=n,t!==null&&Qo(t)),e}function Qo(e){fe===null?fe=e:fe.push.apply(fe,e)}function Tf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!Re(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rt(e,t){for(t&=~Di,t&=~hl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-De(t),r=1<<n;e[n]=-1,t&=~r}}function Ys(e){if(R&6)throw Error(y(327));tn();var t=Ur(e,0);if(!(t&1))return ge(e,Y()),null;var n=rl(e,t);if(e.tag!==0&&n===2){var r=ho(e);r!==0&&(t=r,n=Ho(e,r))}if(n===1)throw n=Xn,_t(e,0),rt(e,t),ge(e,Y()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,jt(e,fe,He),ge(e,Y()),null}function Ri(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(un=Y()+500,dl&&xt())}}function Dt(e){ot!==null&&ot.tag===0&&!(R&6)&&tn();var t=R;R|=1;var n=Ce.transition,r=O;try{if(Ce.transition=null,O=1,e)return e()}finally{O=r,Ce.transition=n,R=t,!(R&6)&&xt()}}function Oi(){ve=Kt.current,A(Kt)}function _t(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,of(n)),K!==null)for(n=K.return;n!==null;){var r=n;switch(gi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qr();break;case 3:sn(),A(me),A(ie),Ei();break;case 5:Ni(r);break;case 4:sn();break;case 13:A(Q);break;case 19:A(Q);break;case 10:wi(r.type._context);break;case 22:case 23:Oi()}n=n.return}if(J=e,K=e=pt(e.current,null),te=ve=t,X=0,Xn=null,Di=hl=Ft=0,fe=Dn=null,Et!==null){for(t=0;t<Et.length;t++)if(n=Et[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}Et=null}return e}function ic(e,t){do{var n=K;try{if(yi(),Pr.current=Jr,Zr){for(var r=V.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Zr=!1}if(Lt=0,Z=q=V=null,Ln=!1,Yn=0,Fi.current=null,n===null||n.return===null){X=1,Xn=t,K=null;break}e:{var o=e,i=n.return,u=n,a=t;if(t=te,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var d=a,g=u,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var x=Rs(i);if(x!==null){x.flags&=-257,Os(x,i,u,o,t),x.mode&1&&Ms(o,d,t),t=x,a=d;var k=t.updateQueue;if(k===null){var S=new Set;S.add(a),t.updateQueue=S}else k.add(a);break e}else{if(!(t&1)){Ms(o,d,t),bi();break e}a=Error(y(426))}}else if(B&&u.mode&1){var M=Rs(i);if(M!==null){!(M.flags&65536)&&(M.flags|=256),Os(M,i,u,o,t),vi(an(a,u));break e}}o=a=an(a,u),X!==4&&(X=2),Dn===null?Dn=[o]:Dn.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Hu(o,a,t);zs(o,f);break e;case 1:u=a;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(dt===null||!dt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=Qu(o,u,t);zs(o,v);break e}}o=o.return}while(o!==null)}uc(n)}catch(j){t=j,K===n&&n!==null&&(K=n=n.return);continue}break}while(!0)}function sc(){var e=el.current;return el.current=Jr,e===null?Jr:e}function bi(){(X===0||X===3||X===2)&&(X=4),J===null||!(Ft&268435455)&&!(hl&268435455)||rt(J,te)}function rl(e,t){var n=R;R|=2;var r=sc();(J!==e||te!==t)&&(He=null,_t(e,t));do try{Lf();break}catch(l){ic(e,l)}while(!0);if(yi(),R=n,el.current=r,K!==null)throw Error(y(261));return J=null,te=0,X}function Lf(){for(;K!==null;)ac(K)}function Ff(){for(;K!==null&&!nd();)ac(K)}function ac(e){var t=dc(e.alternate,e,ve);e.memoizedProps=e.pendingProps,t===null?uc(e):K=t,Fi.current=null}function uc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ef(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,K=null;return}}else if(n=Nf(n,t,ve),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);X===0&&(X=5)}function jt(e,t,n){var r=O,l=Ce.transition;try{Ce.transition=null,O=1,Df(e,t,n,r)}finally{Ce.transition=l,O=r}return null}function Df(e,t,n,r){do tn();while(ot!==null);if(R&6)throw Error(y(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(fd(e,o),e===J&&(K=J=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||kr||(kr=!0,fc(Ir,function(){return tn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ce.transition,Ce.transition=null;var i=O;O=1;var u=R;R|=4,Fi.current=null,_f(e,n),rc(n,e),Zd(ko),$r=!!wo,ko=wo=null,e.current=n,zf(n),rd(),R=u,O=i,Ce.transition=o}else e.current=n;if(kr&&(kr=!1,ot=e,nl=l),o=e.pendingLanes,o===0&&(dt=null),id(n.stateNode),ge(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(tl)throw tl=!1,e=Ao,Ao=null,e;return nl&1&&e.tag!==0&&tn(),o=e.pendingLanes,o&1?e===Bo?Mn++:(Mn=0,Bo=e):Mn=0,xt(),null}function tn(){if(ot!==null){var e=Ha(nl),t=Ce.transition,n=O;try{if(Ce.transition=null,O=16>e?16:e,ot===null)var r=!1;else{if(e=ot,ot=null,nl=0,R&6)throw Error(y(331));var l=R;for(R|=4,E=e.current;E!==null;){var o=E,i=o.child;if(E.flags&16){var u=o.deletions;if(u!==null){for(var a=0;a<u.length;a++){var d=u[a];for(E=d;E!==null;){var g=E;switch(g.tag){case 0:case 11:case 15:Fn(8,g,o)}var m=g.child;if(m!==null)m.return=g,E=m;else for(;E!==null;){g=E;var h=g.sibling,x=g.return;if(ec(g),g===d){E=null;break}if(h!==null){h.return=x,E=h;break}E=x}}}var k=o.alternate;if(k!==null){var S=k.child;if(S!==null){k.child=null;do{var M=S.sibling;S.sibling=null,S=M}while(S!==null)}}E=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,E=i;else e:for(;E!==null;){if(o=E,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Fn(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,E=f;break e}E=o.return}}var c=e.current;for(E=c;E!==null;){i=E;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,E=p;else e:for(i=c;E!==null;){if(u=E,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:ml(9,u)}}catch(j){G(u,u.return,j)}if(u===i){E=null;break e}var v=u.sibling;if(v!==null){v.return=u.return,E=v;break e}E=u.return}}if(R=l,xt(),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(il,e)}catch{}r=!0}return r}finally{O=n,Ce.transition=t}}return!1}function Ks(e,t,n){t=an(n,t),t=Hu(e,t,1),e=ct(e,t,1),t=ue(),e!==null&&(Jn(e,1,t),ge(e,t))}function G(e,t,n){if(e.tag===3)Ks(e,e,n);else for(;t!==null;){if(t.tag===3){Ks(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dt===null||!dt.has(r))){e=an(n,e),e=Qu(t,e,1),t=ct(t,e,1),e=ue(),t!==null&&(Jn(t,1,e),ge(t,e));break}}t=t.return}}function Mf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,J===e&&(te&n)===n&&(X===4||X===3&&(te&130023424)===te&&500>Y()-Mi?_t(e,0):Di|=n),ge(e,t)}function cc(e,t){t===0&&(e.mode&1?(t=dr,dr<<=1,!(dr&130023424)&&(dr=4194304)):t=1);var n=ue();e=qe(e,t),e!==null&&(Jn(e,t,n),ge(e,n))}function Rf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),cc(e,n)}function Of(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),cc(e,n)}var dc;dc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||me.current)pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pe=!1,jf(e,t,n);pe=!!(e.flags&131072)}else pe=!1,B&&t.flags&1048576&&hu(t,Gr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Lr(e,t),e=t.pendingProps;var l=rn(t,ie.current);en(t,n),l=_i(null,t,r,e,l,n);var o=zi();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,he(r)?(o=!0,Vr(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Si(t),l.updater=pl,t.stateNode=l,l._reactInternals=t,To(t,r,e,n),t=Do(null,t,r,!0,o,n)):(t.tag=0,B&&o&&hi(t),ae(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Lr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=If(r),e=Te(r,e),l){case 0:t=Fo(null,t,r,e,n);break e;case 1:t=Us(null,t,r,e,n);break e;case 11:t=bs(null,t,r,e,n);break e;case 14:t=Is(null,t,r,Te(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),Fo(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),Us(e,t,r,l,n);case 3:e:{if(Yu(t),e===null)throw Error(y(387));r=t.pendingProps,o=t.memoizedState,l=o.element,ku(e,t),qr(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=an(Error(y(423)),t),t=$s(e,t,r,n,l);break e}else if(r!==l){l=an(Error(y(424)),t),t=$s(e,t,r,n,l);break e}else for(xe=ut(t.stateNode.containerInfo.firstChild),ye=t,B=!0,Fe=null,n=yu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ln(),r===l){t=Xe(e,t,n);break e}ae(e,t,r,n)}t=t.child}return t;case 5:return Su(t),e===null&&_o(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,So(r,l)?i=null:o!==null&&So(r,o)&&(t.flags|=32),Gu(e,t),ae(e,t,i,n),t.child;case 6:return e===null&&_o(t),null;case 13:return Ku(e,t,n);case 4:return ji(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=on(t,null,r,n):ae(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),bs(e,t,r,l,n);case 7:return ae(e,t,t.pendingProps,n),t.child;case 8:return ae(e,t,t.pendingProps.children,n),t.child;case 12:return ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,I(Yr,r._currentValue),r._currentValue=i,o!==null)if(Re(o.value,i)){if(o.children===l.children&&!me.current){t=Xe(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var u=o.dependencies;if(u!==null){i=o.child;for(var a=u.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=Ge(-1,n&-n),a.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?a.next=a:(a.next=g.next,g.next=a),d.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),zo(o.return,n,t),u.lanes|=n;break}a=a.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(y(341));i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),zo(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}ae(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,en(t,n),l=_e(l),r=r(l),t.flags|=1,ae(e,t,r,n),t.child;case 14:return r=t.type,l=Te(r,t.pendingProps),l=Te(r.type,l),Is(e,t,r,l,n);case 15:return Vu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),Lr(e,t),t.tag=1,he(r)?(e=!0,Vr(t)):e=!1,en(t,n),Bu(t,r,l),To(t,r,l,n),Do(null,t,r,!0,e,n);case 19:return qu(e,t,n);case 22:return Wu(e,t,n)}throw Error(y(156,t.tag))};function fc(e,t){return Ua(e,t)}function bf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,n,r){return new bf(e,t,n,r)}function Ii(e){return e=e.prototype,!(!e||!e.isReactComponent)}function If(e){if(typeof e=="function")return Ii(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ri)return 11;if(e===li)return 14}return 2}function pt(e,t){var n=e.alternate;return n===null?(n=Ee(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Mr(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")Ii(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Ut:return zt(n.children,l,o,t);case ni:i=8,l|=8;break;case Jl:return e=Ee(12,n,t,l|2),e.elementType=Jl,e.lanes=o,e;case eo:return e=Ee(13,n,t,l),e.elementType=eo,e.lanes=o,e;case to:return e=Ee(19,n,t,l),e.elementType=to,e.lanes=o,e;case Sa:return gl(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case wa:i=10;break e;case ka:i=9;break e;case ri:i=11;break e;case li:i=14;break e;case et:i=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=Ee(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function zt(e,t,n,r){return e=Ee(7,e,r,t),e.lanes=n,e}function gl(e,t,n,r){return e=Ee(22,e,r,t),e.elementType=Sa,e.lanes=n,e.stateNode={isHidden:!1},e}function Gl(e,t,n){return e=Ee(6,e,null,t),e.lanes=n,e}function Yl(e,t,n){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Uf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zl(0),this.expirationTimes=zl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ui(e,t,n,r,l,o,i,u,a){return e=new Uf(e,t,n,u,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ee(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Si(o),e}function $f(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:It,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function pc(e){if(!e)return ht;e=e._reactInternals;e:{if(Rt(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(he(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(he(n))return pu(e,n,t)}return t}function mc(e,t,n,r,l,o,i,u,a){return e=Ui(n,r,!0,e,l,o,i,u,a),e.context=pc(null),n=e.current,r=ue(),l=ft(n),o=Ge(r,l),o.callback=t??null,ct(n,o,l),e.current.lanes=l,Jn(e,l,r),ge(e,r),e}function vl(e,t,n,r){var l=t.current,o=ue(),i=ft(l);return n=pc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ge(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ct(l,t,i),e!==null&&(Me(e,l,i,o),zr(e,l,i)),i}function ll(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function qs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $i(e,t){qs(e,t),(e=e.alternate)&&qs(e,t)}function Af(){return null}var hc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ai(e){this._internalRoot=e}xl.prototype.render=Ai.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));vl(e,t,null,null)};xl.prototype.unmount=Ai.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Dt(function(){vl(null,e,null,null)}),t[Ke]=null}};function xl(e){this._internalRoot=e}xl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Wa();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nt.length&&t!==0&&t<nt[n].priority;n++);nt.splice(n,0,e),n===0&&Ya(e)}};function Bi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function yl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xs(){}function Bf(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var d=ll(i);o.call(d)}}var i=mc(t,r,e,0,null,!1,!1,"",Xs);return e._reactRootContainer=i,e[Ke]=i.current,Hn(e.nodeType===8?e.parentNode:e),Dt(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var d=ll(a);u.call(d)}}var a=Ui(e,0,!1,null,null,!1,!1,"",Xs);return e._reactRootContainer=a,e[Ke]=a.current,Hn(e.nodeType===8?e.parentNode:e),Dt(function(){vl(t,a,n,r)}),a}function wl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var u=l;l=function(){var a=ll(i);u.call(a)}}vl(t,i,e,l)}else i=Bf(n,t,e,l,r);return ll(i)}Qa=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Nn(t.pendingLanes);n!==0&&(si(t,n|1),ge(t,Y()),!(R&6)&&(un=Y()+500,xt()))}break;case 13:Dt(function(){var r=qe(e,1);if(r!==null){var l=ue();Me(r,e,1,l)}}),$i(e,1)}};ai=function(e){if(e.tag===13){var t=qe(e,134217728);if(t!==null){var n=ue();Me(t,e,134217728,n)}$i(e,134217728)}};Va=function(e){if(e.tag===13){var t=ft(e),n=qe(e,t);if(n!==null){var r=ue();Me(n,e,t,r)}$i(e,t)}};Wa=function(){return O};Ga=function(e,t){var n=O;try{return O=e,t()}finally{O=n}};fo=function(e,t,n){switch(t){case"input":if(lo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=cl(r);if(!l)throw Error(y(90));Na(r),lo(r,l)}}}break;case"textarea":Ca(e,n);break;case"select":t=n.value,t!=null&&qt(e,!!n.multiple,t,!1)}};Da=Ri;Ma=Dt;var Hf={usingClientEntryPoint:!1,Events:[tr,Ht,cl,La,Fa,Ri]},kn={findFiberByHostInstance:Nt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qf={bundleType:kn.bundleType,version:kn.version,rendererPackageName:kn.rendererPackageName,rendererConfig:kn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ze.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ba(e),e===null?null:e.stateNode},findFiberByHostInstance:kn.findFiberByHostInstance||Af,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sr.isDisabled&&Sr.supportsFiber)try{il=Sr.inject(Qf),$e=Sr}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hf;ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bi(t))throw Error(y(200));return $f(e,t,null,n)};ke.createRoot=function(e,t){if(!Bi(e))throw Error(y(299));var n=!1,r="",l=hc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Ui(e,1,!1,null,null,n,!1,r,l),e[Ke]=t.current,Hn(e.nodeType===8?e.parentNode:e),new Ai(t)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=ba(t),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return Dt(e)};ke.hydrate=function(e,t,n){if(!yl(t))throw Error(y(200));return wl(null,e,t,!0,n)};ke.hydrateRoot=function(e,t,n){if(!Bi(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=hc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=mc(t,null,e,1,n??null,l,!1,o,i),e[Ke]=t.current,Hn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new xl(t)};ke.render=function(e,t,n){if(!yl(t))throw Error(y(200));return wl(null,e,t,!1,n)};ke.unmountComponentAtNode=function(e){if(!yl(e))throw Error(y(40));return e._reactRootContainer?(Dt(function(){wl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};ke.unstable_batchedUpdates=Ri;ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!yl(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return wl(e,t,n,!1,r)};ke.version="18.3.1-next-f1338f8080-20240426";function gc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gc)}catch(e){console.error(e)}}gc(),ga.exports=ke;var Vf=ga.exports,Zs=Vf;Xl.createRoot=Zs.createRoot,Xl.hydrateRoot=Zs.hydrateRoot;function Js({onStartGame:e,onSettings:t,onProgress:n,onAchievements:r,scores:l,levelInfo:o}){return s.jsxs("div",{className:"screen main-menu fade-in",children:[s.jsxs("div",{className:"header",children:[s.jsx("div",{className:"logo float",children:"💕"}),s.jsx("h1",{className:"title",children:"LoveQuest"}),s.jsx("p",{className:"subtitle",children:"爱之探险"}),o&&s.jsxs("div",{className:"level-badge",style:{background:o.color},children:[o.name," · ",(l==null?void 0:l.total)||0,"分"]})]}),s.jsxs("div",{className:"welcome-text",children:[s.jsx("p",{children:"欢迎来到情侣互动小助手~"}),s.jsx("p",{children:"通过有趣的游戏和挑战，"}),s.jsx("p",{children:"让你们更加了解、亲密、默契 ✨"})]}),s.jsxs("div",{className:"menu-buttons",children:[s.jsx("button",{className:"btn btn-primary pulse",onClick:e,children:"🎮 开始游戏"}),s.jsx("button",{className:"btn btn-secondary",onClick:n,children:"📊 我的进度"}),s.jsx("button",{className:"btn btn-secondary",onClick:r,children:"🏆 成就系统"}),s.jsx("button",{className:"btn btn-secondary",onClick:t,children:"⚙️ 设置"})]}),s.jsxs("div",{className:"footer-tip",children:[s.jsx("p",{children:"🔒 所有数据仅存储在本地"}),s.jsx("p",{children:"💕 感情第一，游戏第二"})]}),s.jsx("style",{jsx:!0,children:`
        .main-menu {
          padding: 40px 24px;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .header {
          text-align: center;
          margin-bottom: 32px;
        }

        .logo {
          font-size: 80px;
          margin-bottom: 16px;
        }

        .title {
          font-size: 36px;
          font-weight: bold;
          color: white;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
          margin-bottom: 8px;
        }

        .subtitle {
          font-size: 18px;
          color: rgba(255,255,255,0.9);
        }

        .level-badge {
          display: inline-block;
          padding: 6px 16px;
          border-radius: 20px;
          color: white;
          font-size: 13px;
          font-weight: 600;
          margin-top: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }

        .welcome-text {
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 20px;
          margin-bottom: 32px;
          text-align: center;
          color: white;
          line-height: 1.6;
        }

        .menu-buttons {
          width: 100%;
          max-width: 300px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .btn {
          padding: 16px 32px;
          border: none;
          border-radius: 12px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
        }

        .btn-primary {
          background: linear-gradient(135deg, #FF6B9D 0%, #FF8E53 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(255,107,157,0.4);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255,107,157,0.5);
        }

        .btn-primary:active {
          transform: translateY(0);
        }

        .btn-secondary {
          background: rgba(255,255,255,0.2);
          color: white;
          backdrop-filter: blur(10px);
        }

        .btn-secondary:hover {
          background: rgba(255,255,255,0.3);
        }

        .footer-tip {
          margin-top: 40px;
          text-align: center;
          color: rgba(255,255,255,0.7);
          font-size: 13px;
          line-height: 1.8;
        }
      `})]})}function Wf({modes:e,onSelectMode:t,onBack:n}){return s.jsxs("div",{className:"screen mode-select fade-in",children:[s.jsxs("div",{className:"header",children:[s.jsx("button",{className:"back-btn",onClick:n,children:"← 返回"}),s.jsx("h2",{children:"选择游戏模式"}),s.jsx("p",{className:"desc",children:"每种模式都有独特的互动体验"})]}),s.jsx("div",{className:"modes-grid",children:e.map(r=>s.jsxs("button",{className:"mode-card",onClick:()=>t(r.id),children:[s.jsx("div",{className:"mode-icon",children:r.icon}),s.jsx("h3",{children:r.name}),s.jsx("p",{children:r.desc})]},r.id))}),s.jsx("style",{jsx:!0,children:`
        .mode-select {
          padding: 20px;
          min-height: 100vh;
        }

        .header {
          text-align: center;
          margin-bottom: 28px;
        }

        .back-btn {
          position: absolute;
          left: 16px;
          top: 16px;
          background: rgba(255,255,255,0.2);
          border: none;
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          cursor: pointer;
          font-size: 14px;
        }

        h2 {
          color: white;
          font-size: 26px;
          margin-top: 48px;
          margin-bottom: 8px;
        }

        .desc {
          color: rgba(255,255,255,0.8);
          font-size: 14px;
        }

        .modes-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          max-width: 400px;
          margin: 0 auto;
        }

        .mode-card {
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
          border: none;
          border-radius: 16px;
          padding: 24px 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          color: white;
        }

        .mode-card:hover {
          transform: translateY(-4px);
          background: rgba(255,255,255,0.25);
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        }

        .mode-card:active {
          transform: translateY(-2px);
        }

        .mode-icon {
          font-size: 48px;
          margin-bottom: 12px;
        }

        .mode-card h3 {
          font-size: 16px;
          margin-bottom: 6px;
        }

        .mode-card p {
          font-size: 13px;
          opacity: 0.85;
        }
      `})]})}function Gf({categories:e,questions:t,settings:n,onComplete:r,onBack:l}){var _;const[o,i]=F.useState(null),[u,a]=F.useState(0),[d,g]=F.useState([]),[m,h]=F.useState((n==null?void 0:n.questionsPerGame)||5),[x,k]=F.useState(0),[S,M]=F.useState(!1),f=N=>{if(N==="random"){const T=Object.values(t).flat().filter(se=>!d.includes(se));return T[Math.floor(Math.random()*T.length)]}else{const b=t[N].filter(T=>!d.includes(T));return b[Math.floor(Math.random()*b.length)]}},c=N=>{i(N),a(0),g([]),k(0),M(!0)},p=()=>{k(N=>N+10),g(N=>[...N,j]),u+1>=m?r({mode:"qa",category:o,points:x+10,completedCount:u+1}):a(N=>N+1)},v=()=>{u+1>=m?r({mode:"qa",category:o,points:x,completedCount:u}):a(N=>N+1)},j=f(o);if(!S)return s.jsxs("div",{className:"screen qa-game fade-in",children:[s.jsxs("div",{className:"header",children:[s.jsx("button",{className:"back-btn",onClick:l,children:"← 返回"}),s.jsx("h2",{children:"❓ 知心模式"}),s.jsx("p",{className:"desc",children:"选择问题类别开始探索"})]}),s.jsxs("div",{className:"categories-list",children:[e.map(N=>s.jsxs("button",{className:"category-card",style:{borderLeftColor:N.color},onClick:()=>c(N.id),children:[s.jsx("span",{className:"cat-name",children:N.name}),s.jsx("span",{className:"cat-desc",children:N.desc})]},N.id)),s.jsxs("button",{className:"category-card random-card",onClick:()=>c("random"),children:[s.jsx("span",{className:"cat-name",children:"🎲 随机选题"}),s.jsx("span",{className:"cat-desc",children:"让系统为你挑选"})]})]}),s.jsx("style",{jsx:!0,children:`
          .qa-game { padding: 20px; min-height: 100vh; }
          .header { text-align: center; margin-bottom: 28px; }
          .back-btn {
            position: absolute; left: 16px; top: 16px;
            background: rgba(255,255,255,0.2); border: none;
            color: white; padding: 8px 16px; border-radius: 20px;
            cursor: pointer; font-size: 14px;
          }
          h2 { color: white; font-size: 26px; margin-top: 48px; margin-bottom: 8px; }
          .desc { color: rgba(255,255,255,0.8); font-size: 14px; }
          
          .categories-list { display: flex; flex-direction: column; gap: 12px; max-width: 380px; margin: 0 auto; }
          .category-card {
            background: rgba(255,255,255,0.15); backdrop-filter: blur(10px);
            border: none; border-left: 4px solid; border-radius: 12px;
            padding: 18px 20px; cursor: pointer; transition: all 0.3s;
            color: white; text-align: left; display: flex;
            flex-direction: column; gap: 4px;
          }
          .category-card:hover { background: rgba(255,255,255,0.25); transform: translateX(4px); }
          .cat-name { font-size: 17px; font-weight: 600; }
          .cat-desc { font-size: 13px; opacity: 0.8; }
          .random-card { border-left-color: #FFD700; background: rgba(255,215,0,0.2); }
        `})]});const C=o==="random"?"🎲 随机":((_=e.find(N=>N.id===o))==null?void 0:_.name)||"";return s.jsxs("div",{className:"screen qa-game fade-in",children:[s.jsxs("div",{className:"question-container",children:[s.jsxs("div",{className:"progress-bar",children:[s.jsxs("div",{className:"progress-info",children:[s.jsx("span",{children:C}),s.jsxs("span",{children:[u+1," / ",m]})]}),s.jsx("div",{className:"progress-track",children:s.jsx("div",{className:"progress-fill",style:{width:`${(u+1)/m*100}%`}})})]}),s.jsxs("div",{className:"question-card",children:[s.jsx("div",{className:"q-label",children:"📝 问题"}),s.jsx("p",{className:"question-text",children:j})]}),s.jsx("div",{className:"tip-box",children:"💡 请认真思考后回答，对方请耐心倾听哦~"}),s.jsxs("div",{className:"action-buttons",children:[s.jsx("button",{className:"btn btn-next",onClick:p,children:"✅ 完成并下一题 (+10分)"}),s.jsx("button",{className:"btn btn-skip",onClick:v,children:"⏭️ 跳过此题"})]})]}),s.jsx("style",{jsx:!0,children:`
        .qa-game { padding: 20px; min-height: 100vh; }
        .question-container { max-width: 400px; margin: 0 auto; }
        
        .progress-bar { margin-bottom: 24px; }
        .progress-info { 
          display: flex; justify-content: space-between; 
          color: white; font-size: 14px; margin-bottom: 8px; 
        }
        .progress-track { 
          height: 6px; background: rgba(255,255,255,0.2); 
          border-radius: 3px; overflow: hidden; 
        }
        .progress-fill { 
          height: 100%; background: linear-gradient(90deg, #FF6B9D, #FF8E53);
          border-radius: 3px; transition: width 0.3s ease; 
        }

        .question-card {
          background: rgba(255,255,255,0.95); border-radius: 20px;
          padding: 28px 24px; margin-bottom: 20px; box-shadow: 0 8px 32px rgba(0,0,0,0.15);
        }
        .q-label { font-size: 14px; color: #E91E63; font-weight: 600; margin-bottom: 12px; }
        .question-text { font-size: 19px; line-height: 1.6; color: #333; }

        .tip-box {
          background: rgba(255,255,255,0.15); backdrop-filter: blur(10px);
          border-radius: 12px; padding: 14px 18px; margin-bottom: 24px;
          color: white; font-size: 14px; text-align: center;
        }

        .action-buttons { display: flex; flex-direction: column; gap: 12px; }
        .btn {
          padding: 16px; border: none; border-radius: 12px;
          font-size: 16px; font-weight: 600; cursor: pointer;
          transition: all 0.3s;
        }
        .btn-next {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white; box-shadow: 0 4px 15px rgba(102,126,234,0.4);
        }
        .btn-next:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(102,126,234,0.5); }
        .btn-skip {
          background: rgba(255,255,255,0.2); color: white;
        }
        .btn-skip:hover { background: rgba(255,255,255,0.3); }
      `})]})}function Yf({challenges:e,settings:t,onComplete:n,onBack:r}){const[l,o]=F.useState(0),[i,u]=F.useState([]),[a]=F.useState((t==null?void 0:t.questionsPerGame)||5),[d,g]=F.useState(0),[m,h]=F.useState(null),x=()=>{const c=e.filter(p=>!i.includes(p.text));return c[Math.floor(Math.random()*c.length)]};Zo.useEffect(()=>{if(!m){const c=x();h(c)}},[]);const k=()=>{g(c=>c+20),u(c=>[...c,m.text]),l+1>=a?n({mode:"drink",points:d+20,completedCount:l+1}):(o(c=>c+1),h(x()))},S=()=>{u(c=>[...c,m.text]),l+1>=a?n({mode:"drink",points:d,completedCount:l}):(o(c=>c+1),h(x()))};if(!m)return s.jsx("div",{className:"screen",children:"加载中..."});const M="⭐".repeat(m.level),f={drink:"🍷 饮酒",truth:"💭 真心话",dare:"😈 大冒险",combo:"🔥 组合"};return s.jsxs("div",{className:"screen drink-game fade-in",children:[s.jsxs("div",{className:"header",children:[s.jsx("button",{className:"back-btn",onClick:r,children:"← 返回"}),s.jsx("h2",{children:"🍷 微醺模式"})]}),s.jsxs("div",{className:"challenge-container",children:[s.jsxs("div",{className:"progress-bar",children:[s.jsxs("div",{className:"progress-info",children:[s.jsxs("span",{children:["第 ",l+1," / ",a," 轮"]}),s.jsxs("span",{children:["得分: ",d]})]}),s.jsx("div",{className:"progress-track",children:s.jsx("div",{className:"progress-fill",style:{width:`${(l+1)/a*100}%`}})})]}),s.jsxs("div",{className:"challenge-card",children:[s.jsxs("div",{className:"challenge-meta",children:[s.jsxs("span",{className:"level",children:[M," 难度 ",m.level,"/3"]}),s.jsx("span",{className:"type",children:f[m.type]})]}),s.jsx("div",{className:"challenge-icon",children:m.emoji}),s.jsx("p",{className:"challenge-text",children:m.text})]}),s.jsx("div",{className:"tip-box",children:"🥂 准备好接受挑战了吗？完成或喝酒后点击按钮！"}),s.jsxs("div",{className:"action-buttons",children:[s.jsx("button",{className:"btn btn-complete",onClick:k,children:"✅ 完成挑战 (+20分)"}),s.jsx("button",{className:"btn btn-drink",onClick:S,children:"🍺 喝酒跳过"})]})]}),s.jsx("style",{jsx:!0,children:`
        .drink-game { padding: 20px; min-height: 100vh; }
        .header { text-align: center; margin-bottom: 24px; }
        .back-btn {
          position: absolute; left: 16px; top: 16px;
          background: rgba(255,255,255,0.2); border: none;
          color: white; padding: 8px 16px; border-radius: 20px;
          cursor: pointer; font-size: 14px;
        }
        h2 { color: white; font-size: 26px; margin-top: 48px; }
        
        .challenge-container { max-width: 400px; margin: 0 auto; }
        
        .progress-bar { margin-bottom: 20px; }
        .progress-info {
          display: flex; justify-content: space-between;
          color: white; font-size: 14px; margin-bottom: 8px;
        }
        .progress-track {
          height: 6px; background: rgba(255,255,255,0.2);
          border-radius: 3px; overflow: hidden;
        }
        .progress-fill {
          height: 100%; background: linear-gradient(90deg, #FF6B9D, #FF8E53);
          border-radius: 3px; transition: width 0.3s ease;
        }

        .challenge-card {
          background: linear-gradient(135deg, rgba(255,107,157,0.95), rgba(255,142,83,0.95));
          border-radius: 20px; padding: 28px 24px;
          margin-bottom: 20px; box-shadow: 0 8px 32px rgba(255,107,157,0.4);
          text-align: center; color: white;
        }
        .challenge-meta {
          display: flex; justify-content: space-between;
          font-size: 13px; margin-bottom: 16px;
        }
        .level { opacity: 0.95; }
        .type { font-weight: 600; }
        .challenge-icon { font-size: 56px; margin-bottom: 16px; }
        .challenge-text { font-size: 19px; line-height: 1.6; font-weight: 500; }

        .tip-box {
          background: rgba(255,255,255,0.15); backdrop-filter: blur(10px);
          border-radius: 12px; padding: 14px 18px; margin-bottom: 20px;
          color: white; font-size: 14px; text-align: center;
        }

        .action-buttons { display: flex; flex-direction: column; gap: 12px; }
        .btn {
          padding: 16px; border: none; border-radius: 12px;
          font-size: 16px; font-weight: 600; cursor: pointer;
          transition: all 0.3s;
        }
        .btn-complete {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white; box-shadow: 0 4px 15px rgba(102,126,234,0.4);
        }
        .btn-complete:hover { transform: translateY(-2px); }
        .btn-drink {
          background: rgba(255,255,255,0.2); color: white;
        }
        .btn-drink:hover { background: rgba(255,255,255,0.3); }
      `})]})}function Kf({challenges:e,settings:t,onComplete:n,onBack:r}){const[l,o]=F.useState(0),[i,u]=F.useState([]),[a]=F.useState((t==null?void 0:t.questionsPerGame)||5),[d,g]=F.useState(0),[m,h]=F.useState(null),x=()=>{const f=e.filter(c=>!i.includes(c.text));return f[Math.floor(Math.random()*f.length)]};Zo.useEffect(()=>{m||h(x())},[]);const k=()=>{g(f=>f+15),u(f=>[...f,m.text]),l+1>=a?n({mode:"intimate",points:d+15,completedCount:l+1}):(o(f=>f+1),h(x()))},S=()=>{h(x())};if(!m)return s.jsx("div",{className:"screen",children:"加载中..."});const M="❤️".repeat(m.level);return s.jsxs("div",{className:"screen intimate-game fade-in",children:[s.jsxs("div",{className:"header",children:[s.jsx("button",{className:"back-btn",onClick:r,children:"← 返回"}),s.jsx("h2",{children:"💑 亲密模式"})]}),s.jsxs("div",{className:"challenge-container",children:[s.jsxs("div",{className:"progress-bar",children:[s.jsxs("div",{className:"progress-info",children:[s.jsxs("span",{children:["第 ",l+1," / ",a," 轮"]}),s.jsxs("span",{children:["得分: ",d]})]}),s.jsx("div",{className:"progress-track",children:s.jsx("div",{className:"progress-fill",style:{width:`${(l+1)/a*100}%`}})})]}),s.jsxs("div",{className:"challenge-card",children:[s.jsxs("div",{className:"challenge-meta",children:[s.jsxs("span",{className:"category",children:["⚠️ 等级：",m.category]}),s.jsx("span",{className:"level",children:M})]}),s.jsx("div",{className:"challenge-icon",children:m.emoji}),s.jsx("p",{className:"challenge-text",children:m.text})]}),s.jsxs("div",{className:"warning-box",children:["💡 温馨提醒：",s.jsx("br",{}),"• 所有动作必须双方自愿",s.jsx("br",{}),'• 不舒服随时说"换一个"',s.jsx("br",{}),"• 尊重彼此的边界 💕"]}),s.jsxs("div",{className:"action-buttons",children:[s.jsx("button",{className:"btn btn-complete",onClick:k,children:"✅ 完成 (+15分)"}),s.jsx("button",{className:"btn btn-change",onClick:S,children:"🔄 换一个挑战"})]})]}),s.jsx("style",{jsx:!0,children:`
        .intimate-game { padding: 20px; min-height: 100vh; }
        .header { text-align: center; margin-bottom: 24px; }
        .back-btn {
          position: absolute; left: 16px; top: 16px;
          background: rgba(255,255,255,0.2); border: none;
          color: white; padding: 8px 16px; border-radius: 20px;
          cursor: pointer; font-size: 14px;
        }
        h2 { color: white; font-size: 26px; margin-top: 48px; }
        
        .challenge-container { max-width: 400px; margin: 0 auto; }
        
        .progress-bar { margin-bottom: 20px; }
        .progress-info {
          display: flex; justify-content: space-between;
          color: white; font-size: 14px; margin-bottom: 8px;
        }
        .progress-track {
          height: 6px; background: rgba(255,255,255,0.2);
          border-radius: 3px; overflow: hidden;
        }
        .progress-fill {
          height: 100%; background: linear-gradient(90deg, #E91E63, #FF5722);
          border-radius: 3px; transition: width 0.3s ease;
        }

        .challenge-card {
          background: linear-gradient(135deg, rgba(233,30,99,0.95), rgba(255,87,34,0.95));
          border-radius: 20px; padding: 28px 24px;
          margin-bottom: 20px; box-shadow: 0 8px 32px rgba(233,30,99,0.4);
          text-align: center; color: white;
        }
        .challenge-meta {
          display: flex; justify-content: space-between;
          font-size: 13px; margin-bottom: 16px;
        }
        .category { font-weight: 600; }
        .challenge-icon { font-size: 56px; margin-bottom: 16px; }
        .challenge-text { font-size: 19px; line-height: 1.6; font-weight: 500; }

        .warning-box {
          background: rgba(255,215,0,0.2); backdrop-filter: blur(10px);
          border: 1px solid rgba(255,215,0,0.4); border-radius: 12px;
          padding: 16px 18px; margin-bottom: 20px;
          color: white; font-size: 13px; line-height: 1.8;
        }

        .action-buttons { display: flex; flex-direction: column; gap: 12px; }
        .btn {
          padding: 16px; border: none; border-radius: 12px;
          font-size: 16px; font-weight: 600; cursor: pointer;
          transition: all 0.3s;
        }
        .btn-complete {
          background: linear-gradient(135deg, #E91E63, #FF5722);
          color: white; box-shadow: 0 4px 15px rgba(233,30,99,0.4);
        }
        .btn-complete:hover { transform: translateY(-2px); }
        .btn-change {
          background: rgba(255,255,255,0.2); color: white;
        }
        .btn-change:hover { background: rgba(255,255,255,0.3); }
      `})]})}function qf({questions:e,drinkChallenges:t,intimateChallenges:n,settings:r,onComplete:l,onBack:o}){const[i,u]=F.useState(0),[a]=F.useState((r==null?void 0:r.questionsPerGame)||6),[d,g]=F.useState([]),[m,h]=F.useState(null),[x,k]=F.useState(null),S=["qa","drink","intimate"];F.useEffect(()=>{M()},[i]);const M=()=>{const v=S[i%S.length];h(v);let j;switch(v){case"qa":const C=Object.values(e).flat();j=C[Math.floor(Math.random()*C.length)];break;case"drink":j=t[Math.floor(Math.random()*t.length)];break;case"intimate":j=n[Math.floor(Math.random()*n.length)];break}k(j)},f=()=>{let v=10;m==="drink"&&(v=20),m==="intimate"&&(v=15),g(j=>[...j,{mode:m,content:(x==null?void 0:x.text)||x,points:v}]),i+1>=a?l(d.concat([{mode:m,content:(x==null?void 0:x.text)||x,points:v}])):u(j=>j+1)},c=()=>{switch(m){case"qa":return{icon:"❓",name:"知心问答",color:"#2196F3"};case"drink":return{icon:"🍷",name:"微醺挑战",color:"#FF6B9D"};case"intimate":return{icon:"💑",name:"亲密互动",color:"#E91E63"};default:return{icon:"🎲",name:"随机",color:"#9C27B0"}}};if(!x)return s.jsx("div",{className:"screen",children:"准备中..."});const p=c();return s.jsxs("div",{className:"screen random-game fade-in",children:[s.jsxs("div",{className:"header",children:[s.jsx("button",{className:"back-btn",onClick:o,children:"← 返回"}),s.jsx("h2",{children:"🎲 随机模式"})]}),s.jsxs("div",{className:"round-container",children:[s.jsxs("div",{className:"mode-badge",style:{background:p.color},children:[p.icon," ",p.name]}),s.jsxs("div",{className:"progress-bar",children:[s.jsx("div",{className:"progress-info",children:s.jsxs("span",{children:["第 ",i+1," / ",a," 轮"]})}),s.jsx("div",{className:"progress-track",children:s.jsx("div",{className:"progress-fill",style:{width:`${(i+1)/a*100}%`,background:`linear-gradient(90deg, ${p.color}, ${p.color}88)`}})})]}),s.jsx("div",{className:"content-card",style:{borderTopColor:p.color},children:s.jsx("p",{className:"content-text",children:(x==null?void 0:x.text)||x})}),s.jsxs("div",{className:"tip-box",children:["🎯 本轮是 ",p.name,"！",s.jsx("br",{}),"完成后点击继续进入下一轮~"]}),s.jsx("button",{className:"btn btn-next",onClick:f,style:{background:p.color},children:"✅ 完成并下一轮"})]}),s.jsx("style",{jsx:!0,children:`
        .random-game { padding: 20px; min-height: 100vh; }
        .header { text-align: center; margin-bottom: 24px; }
        .back-btn {
          position: absolute; left: 16px; top: 16px;
          background: rgba(255,255,255,0.2); border: none;
          color: white; padding: 8px 16px; border-radius: 20px;
          cursor: pointer; font-size: 14px;
        }
        h2 { color: white; font-size: 26px; margin-top: 48px; }
        
        .round-container { max-width: 400px; margin: 0 auto; }
        
        .mode-badge {
          display: inline-block; padding: 10px 24px; border-radius: 20px;
          color: white; font-weight: 600; font-size: 15px;
          margin-bottom: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        .progress-bar { margin-bottom: 20px; }
        .progress-info {
          display: flex; justify-content: space-between;
          color: white; font-size: 14px; margin-bottom: 8px;
        }
        .progress-track {
          height: 6px; background: rgba(255,255,255,0.2);
          border-radius: 3px; overflow: hidden;
        }
        .progress-fill {
          height: 100%; border-radius: 3px; transition: width 0.3s ease;
        }

        .content-card {
          background: rgba(255,255,255,0.95); border-radius: 20px;
          padding: 28px 24px; margin-bottom: 20px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.15);
          border-top: 4px solid;
        }
        .content-text { font-size: 19px; line-height: 1.6; color: #333; }

        .tip-box {
          background: rgba(255,255,255,0.15); backdrop-filter: blur(10px);
          border-radius: 12px; padding: 14px 18px; margin-bottom: 20px;
          color: white; font-size: 14px; text-align: center; line-height: 1.6;
        }

        .btn {
          width: 100%; padding: 16px; border: none; border-radius: 12px;
          font-size: 16px; font-weight: 600; cursor: pointer;
          color: white; transition: all 0.3s;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
        .btn:hover { transform: translateY(-2px); }
      `})]})}function Xf({scores:e,history:t,mode:n,stats:r,levelInfo:l,newAchievements:o,onPlayAgain:i,onHome:u}){const a=t.length>0?Math.round(t.filter(g=>g.completed!==!1).length/t.length*100):100,d=()=>{switch(n){case"qa":return"❓ 知心模式";case"drink":return"🍷 微醺模式";case"intimate":return"💑 亲密模式";case"random":return"🎲 随机模式";default:return"🎮 游戏"}};return s.jsxs("div",{className:"screen game-result fade-in",children:[s.jsxs("div",{className:"result-container",children:[s.jsx("div",{className:"celebration",children:"🎉"}),s.jsx("h2",{children:"游戏结束！"}),s.jsx("p",{className:"mode-name",children:d()}),s.jsxs("div",{className:"score-card",children:[s.jsxs("div",{className:"main-score",children:[s.jsx("span",{className:"score-label",children:"本次得分"}),s.jsx("span",{className:"score-value",children:e.total}),s.jsx("span",{className:"score-unit",children:"分"})]}),s.jsxs("div",{className:"stats-grid",children:[s.jsxs("div",{className:"stat-item",children:[s.jsxs("span",{className:"stat-value",children:[a,"%"]}),s.jsx("span",{className:"stat-label",children:"完成率"})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{className:"stat-value",children:t.length}),s.jsx("span",{className:"stat-label",children:"完成数"})]})]})]}),s.jsxs("div",{className:"breakdown",children:[s.jsx("h3",{children:"各模式得分"}),s.jsxs("div",{className:"breakdown-items",children:[s.jsxs("div",{className:"breakdown-item",children:[s.jsx("span",{children:"🍷 微醺"}),s.jsxs("span",{children:[e.drink," 分"]})]}),s.jsxs("div",{className:"breakdown-item",children:[s.jsx("span",{children:"💑 亲密"}),s.jsxs("span",{children:[e.intimate," 分"]})]}),s.jsxs("div",{className:"breakdown-item",children:[s.jsx("span",{children:"❓ 知心"}),s.jsxs("span",{children:[e.qa," 分"]})]})]})]}),s.jsxs("div",{className:"message-box",children:[s.jsx("p",{children:"感谢你们一起度过这段美好时光！💕"}),s.jsx("p",{children:"期待下次再一起玩呀~"})]}),l&&s.jsxs("div",{className:"level-info",style:{borderTopColor:l.color},children:[s.jsx("span",{className:"level-name",children:l.name}),s.jsxs("span",{className:"level-detail",children:["总积分 ",e.total," 分",l.nextScore&&` · 距下一等级还需 ${l.nextScore-e.total} 分`]})]}),o&&o.length>0&&s.jsxs("div",{className:"achievements-unlocked",children:[s.jsx("h4",{children:"🎉 本次解锁成就"}),o.map(g=>s.jsxs("div",{className:"achievement-item",children:[s.jsx("span",{className:"achievement-icon",children:g.icon}),s.jsx("span",{className:"achievement-name",children:g.name}),s.jsxs("span",{className:"achievement-points",children:["+",g.points,"分"]})]},g.id))]}),s.jsxs("div",{className:"action-buttons",children:[s.jsx("button",{className:"btn btn-primary",onClick:i,children:"🔄 再来一局"}),s.jsx("button",{className:"btn btn-secondary",onClick:u,children:"🏠 返回主页"})]})]}),s.jsx("style",{jsx:!0,children:`
        .game-result { 
          padding: 40px 24px; min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
        }
        .result-container { max-width: 380px; width: 100%; text-align: center; }

        .celebration { font-size: 72px; margin-bottom: 16px; animation: float 2s ease-in-out infinite; }
        
        h2 { color: white; font-size: 32px; margin-bottom: 8px; }
        .mode-name { color: rgba(255,255,255,0.9); font-size: 18px; margin-bottom: 32px; }

        .score-card {
          background: rgba(255,255,255,0.95); border-radius: 20px;
          padding: 28px; margin-bottom: 20px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.15);
        }
        .main-score { margin-bottom: 20px; }
        .score-label { display: block; color: #666; font-size: 14px; margin-bottom: 8px; }
        .score-value { font-size: 56px; font-weight: bold; color: #764ba2; }
        .score-unit { color: #999; font-size: 18px; margin-left: 4px; }
        
        .stats-grid { display: flex; gap: 16px; justify-content: center; }
        .stat-item { flex: 1; background: #f5f5f5; border-radius: 12px; padding: 12px; }
        .stat-value { display: block; font-size: 24px; font-weight: bold; color: #333; }
        .stat-label { font-size: 13px; color: #666; margin-top: 4px; }

        .breakdown {
          background: rgba(255,255,255,0.15); backdrop-filter: blur(10px);
          border-radius: 16px; padding: 20px; margin-bottom: 20px;
        }
        .breakdown h3 { color: white; font-size: 16px; margin-bottom: 12px; }
        .breakdown-items { display: flex; flex-direction: column; gap: 8px; }
        .breakdown-item {
          display: flex; justify-content: space-between;
          color: white; font-size: 15px; padding: 8px 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .breakdown-item:last-child { border-bottom: none; }

        .message-box {
          background: rgba(255,215,0,0.2); border-radius: 12px;
          padding: 16px; margin-bottom: 20px; color: white; line-height: 1.6;
        }

        .level-info {
          background: rgba(255,255,255,0.95);
          border-radius: 12px;
          padding: 14px 18px;
          margin-bottom: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 3px solid;
        }

        .level-name {
          font-size: 15px;
          font-weight: 600;
          color: #333;
        }

        .level-detail {
          font-size: 13px;
          color: #666;
        }

        .achievements-unlocked {
          background: linear-gradient(135deg, rgba(255,215,0,0.2), rgba(255,165,0,0.2));
          border: 1px solid rgba(255,215,0,0.4);
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 24px;
          text-align: left;
        }

        .achievements-unlocked h4 {
          color: #FFD700;
          font-size: 15px;
          margin-bottom: 12px;
        }

        .achievement-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255,215,0,0.2);
        }

        .achievement-item:last-child {
          border-bottom: none;
        }

        .achievement-icon {
          font-size: 24px;
        }

        .achievement-name {
          flex: 1;
          color: white;
          font-size: 14px;
          font-weight: 500;
        }

        .achievement-points {
          color: #FFD700;
          font-size: 13px;
          font-weight: 600;
        }

        .action-buttons { display: flex; flex-direction: column; gap: 12px; }
        .btn {
          padding: 16px; border: none; border-radius: 12px;
          font-size: 17px; font-weight: 600; cursor: pointer;
          transition: all 0.3s;
        }
        .btn-primary {
          background: linear-gradient(135deg, #FF6B9D, #FF8E53);
          color: white; box-shadow: 0 4px 15px rgba(255,107,157,0.4);
        }
        .btn-primary:hover { transform: translateY(-2px); }
        .btn-secondary {
          background: rgba(255,255,255,0.2); color: white;
        }
        .btn-secondary:hover { background: rgba(255,255,255,0.3); }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `})]})}function Zf({settings:e,onUpdateSettings:t,onClearData:n,onBack:r}){const l=(o,i)=>{t({[o]:i})};return s.jsxs("div",{className:"screen settings fade-in",children:[s.jsxs("div",{className:"header",children:[s.jsx("button",{className:"back-btn",onClick:r,children:"← 返回"}),s.jsx("h2",{children:"⚙️ 设置"})]}),s.jsxs("div",{className:"settings-container",children:[s.jsxs("div",{className:"settings-section",children:[s.jsx("h3",{children:"🎮 游戏设置"}),s.jsxs("div",{className:"setting-item",children:[s.jsx("label",{children:"难度等级"}),s.jsxs("select",{value:e.difficulty,onChange:o=>l("difficulty",o.target.value),children:[s.jsx("option",{value:"easy",children:"简单"}),s.jsx("option",{value:"normal",children:"普通（推荐）"}),s.jsx("option",{value:"hard",children:"困难"})]})]}),s.jsxs("div",{className:"setting-item",children:[s.jsx("label",{children:"安全词"}),s.jsx("input",{type:"text",value:e.safeWord,onChange:o=>l("safeWord",o.target.value),placeholder:"输入安全词"})]}),s.jsxs("div",{className:"setting-item",children:[s.jsx("label",{children:"每局题目数量"}),s.jsxs("select",{value:e.questionsPerGame,onChange:o=>l("questionsPerGame",parseInt(o.target.value)),children:[s.jsx("option",{value:3,children:"3 题"}),s.jsx("option",{value:5,children:"5 题（推荐）"}),s.jsx("option",{value:10,children:"10 题"}),s.jsx("option",{value:15,children:"15 题"}),s.jsx("option",{value:20,children:"20 题"})]})]})]}),s.jsxs("div",{className:"settings-section",children:[s.jsx("h3",{children:"🔒 隐私与安全"}),s.jsxs("div",{className:"setting-item toggle",children:[s.jsx("label",{children:"保存游戏记录"}),s.jsxs("label",{className:"toggle-switch",children:[s.jsx("input",{type:"checkbox",checked:e.saveHistory,onChange:o=>l("saveHistory",o.target.checked)}),s.jsx("span",{className:"toggle-slider"})]})]}),s.jsxs("div",{className:"setting-item toggle",children:[s.jsx("label",{children:"显示成就通知"}),s.jsxs("label",{className:"toggle-switch",children:[s.jsx("input",{type:"checkbox",checked:e.showNotifications,onChange:o=>l("showNotifications",o.target.checked)}),s.jsx("span",{className:"toggle-slider"})]})]})]}),s.jsxs("div",{className:"safe-word-info",children:[s.jsx("h4",{children:"⚠️ 安全词系统"}),s.jsxs("p",{children:[s.jsxs("strong",{children:['🛑 "',e.safeWord||"暂停",'"']})," → 立即停止当前活动"]}),s.jsxs("p",{children:[s.jsx("strong",{children:'🔄 "换一个"'})," → 更换当前的挑战/问题"]}),s.jsxs("p",{children:[s.jsx("strong",{children:'✅ "继续"'})," → 继续进行游戏"]}),s.jsx("p",{className:"note",children:"任何时候都可以使用安全词，这是你们的权利，不需要感到抱歉。感情第一，游戏第二 💕"})]}),s.jsxs("div",{className:"settings-section danger-zone",children:[s.jsx("h3",{children:"⚠️ 数据管理"}),s.jsx("button",{className:"btn btn-danger",onClick:()=>{window.confirm("确定要清除所有数据吗？包括分数、历史记录、成就等，此操作不可恢复！")&&n()},children:"🗑️ 清除所有数据"}),s.jsx("p",{className:"danger-note",children:"清除后无法恢复，请谨慎操作"})]}),s.jsxs("div",{className:"info-text",children:[s.jsx("p",{children:"LoveQuest v2.0"}),s.jsx("p",{children:"💕 让爱情更有趣"})]})]}),s.jsx("style",{jsx:!0,children:`
        .settings { padding: 20px; min-height: 100vh; }
        .header { text-align: center; margin-bottom: 28px; position: relative; }
        
        .back-btn {
          position: absolute;
          left: 0;
          top: 0;
          background: rgba(255,255,255,0.2);
          border: none;
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          cursor: pointer;
          font-size: 14px;
          transition: all 0.3s;
        }
        .back-btn:hover {
          background: rgba(255,255,255,0.3);
        }

        h2 { color: white; font-size: 26px; margin-top: 48px; margin-bottom: 8px; }
        
        .settings-container { max-width: 400px; margin: 0 auto; }
        
        .settings-section {
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 20px;
          margin-bottom: 16px;
        }
        
        .settings-section h3 { 
          color: white; 
          font-size: 17px; 
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .setting-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .setting-item:last-child { border-bottom: none; }
        
        .setting-item label {
          color: white;
          font-size: 15px;
          font-weight: 500;
        }
        
        .setting-item select,
        .setting-item input[type="text"] {
          background: rgba(255,255,255,0.95);
          border: none;
          border-radius: 8px;
          padding: 10px 14px;
          font-size: 14px;
          color: #333;
          min-width: 130px;
          text-align: right;
        }
        
        .setting-item select:focus,
        .setting-item input[type="text"]:focus {
          outline: none;
          box-shadow: 0 0 0 2px rgba(255,107,157,0.5);
        }

        /* Toggle 开关样式 */
        .toggle-switch {
          position: relative;
          display: inline-block;
          width: 52px;
          height: 28px;
          cursor: pointer;
        }

        .toggle-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .toggle-slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(255,255,255,0.3);
          transition: 0.4s;
          border-radius: 28px;
        }

        .toggle-slider:before {
          position: absolute;
          content: "";
          height: 22px;
          width: 22px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: 0.4s;
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        input:checked + .toggle-slider {
          background-color: #4CAF50;
        }

        input:checked + .toggle-slider:before {
          transform: translateX(24px);
        }

        /* 安全词说明 */
        .safe-word-info {
          background: rgba(255,215,0,0.15);
          border: 1px solid rgba(255,215,0,0.3);
          border-radius: 12px;
          padding: 18px;
          margin-bottom: 16px;
        }
        
        .safe-word-info h4 { 
          color: #FFD700; 
          font-size: 15px; 
          margin-bottom: 12px;
        }
        
        .safe-word-info p { 
          color: white; 
          font-size: 13px; 
          line-height: 1.9; 
          margin-bottom: 6px;
        }
        
        .safe-word-info .note { 
          opacity: 0.85; 
          font-style: italic; 
          margin-top: 10px;
          padding-top: 10px;
          border-top: 1px solid rgba(255,215,0,0.2);
        }

        /* 危险区域 */
        .danger-zone {
          background: rgba(244,67,54,0.15);
          border: 1px solid rgba(244,67,54,0.3);
        }

        .danger-zone h3 {
          color: #FF5252;
        }

        .btn-danger {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #F44336, #E91E63);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .btn-danger:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(244,67,54,0.4);
        }

        .danger-note {
          color: rgba(255,255,255,0.7);
          font-size: 12px;
          text-align: center;
          margin-top: 10px;
        }

        .info-text { 
          text-align: center; 
          color: rgba(255,255,255,0.7); 
          font-size: 13px;
          line-height: 1.8;
        }
      `})]})}function Jf({scores:e,history:t,stats:n,achievements:r,unlockedAchievements:l,levelInfo:o,onBack:i}){t.length>0&&Math.round(t.filter(g=>g.completed!==!1).length/t.length*100);const u=(e.total-(o.nextScore?o.nextScore-150:0))/150*100,a=r.length,d=l.length;return s.jsxs("div",{className:"screen progress fade-in",children:[s.jsxs("div",{className:"header",children:[s.jsx("button",{className:"back-btn",onClick:i,children:"← 返回"}),s.jsx("h2",{children:"📊 我的进度"})]}),s.jsxs("div",{className:"progress-container",children:[s.jsxs("div",{className:"level-card",style:{borderTopColor:o.color},children:[s.jsxs("div",{className:"level-badge",style:{background:o.color},children:["Level ",o.level," · ",o.name]}),s.jsxs("div",{className:"total-score",children:[s.jsx("span",{className:"score-number",children:e.total}),s.jsx("span",{className:"score-text",children:"总积分"})]}),o.nextScore&&s.jsxs("div",{className:"level-progress",children:[s.jsxs("span",{children:["距离下一等级还需 ",o.nextScore-e.total," 分"]}),s.jsx("div",{className:"progress-track-small",children:s.jsx("div",{className:"progress-fill-small",style:{width:`${Math.min(Math.max(u,0),100)}%`,background:o.color}})})]})]}),s.jsxs("div",{className:"scores-detail",children:[s.jsx("h3",{children:"各模式得分"}),s.jsxs("div",{className:"score-bars",children:[s.jsxs("div",{className:"score-bar-item",children:[s.jsxs("div",{className:"bar-header",children:[s.jsx("span",{children:"🍷 微醺模式"}),s.jsxs("span",{children:[e.drink," 分"]})]}),s.jsx("div",{className:"bar-track",children:s.jsx("div",{className:"bar-fill drink",style:{width:`${Math.min(e.drink/2,100)}%`}})})]}),s.jsxs("div",{className:"score-bar-item",children:[s.jsxs("div",{className:"bar-header",children:[s.jsx("span",{children:"💑 亲密模式"}),s.jsxs("span",{children:[e.intimate," 分"]})]}),s.jsx("div",{className:"bar-track",children:s.jsx("div",{className:"bar-fill intimate",style:{width:`${Math.min(e.intimate/1.5,100)}%`}})})]}),s.jsxs("div",{className:"score-bar-item",children:[s.jsxs("div",{className:"bar-header",children:[s.jsx("span",{children:"❓ 知心模式"}),s.jsxs("span",{children:[e.qa," 分"]})]}),s.jsx("div",{className:"bar-track",children:s.jsx("div",{className:"bar-fill qa",style:{width:`${Math.min(e.qa/2,100)}%`}})})]})]})]}),s.jsxs("div",{className:"stats-cards",children:[s.jsxs("div",{className:"stat-card",children:[s.jsx("span",{className:"stat-icon",children:"🎮"}),s.jsx("span",{className:"stat-value",children:n.totalGames||0}),s.jsx("span",{className:"stat-label",children:"总游戏次数"})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("span",{className:"stat-icon",children:"📝"}),s.jsx("span",{className:"stat-value",children:n.totalQuestions||0}),s.jsx("span",{className:"stat-label",children:"已完成题目"})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("span",{className:"stat-icon",children:"🔥"}),s.jsx("span",{className:"stat-value",children:n.streakDays||0}),s.jsx("span",{className:"stat-label",children:"连续天数"})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("span",{className:"stat-icon",children:"⏰"}),s.jsx("span",{className:"stat-value",children:n.totalTimeSpent||0}),s.jsx("span",{className:"stat-label",children:"总时长(分)"})]})]}),s.jsxs("div",{className:"achievement-summary",children:[s.jsx("h3",{children:"🏆 成就系统"}),s.jsxs("div",{className:"achievement-stats",children:[s.jsxs("div",{className:"achievement-stat",children:[s.jsx("span",{className:"achievement-count",children:d}),s.jsxs("span",{className:"achievement-total",children:["/ ",a]}),s.jsx("span",{className:"achievement-label",children:"已解锁"})]}),s.jsx("div",{className:"achievement-progress-bar",children:s.jsx("div",{className:"achievement-progress-fill",style:{width:`${d/a*100}%`}})})]})]}),s.jsxs("div",{className:"tips-box",children:[s.jsx("p",{children:"💡 继续努力，解锁更多成就吧！"}),s.jsx("p",{children:"每完成一局都会获得积分哦~ 🌟"}),n.streakDays>=3&&s.jsxs("p",{className:"streak-tip",children:["🔥 已连续 ",n.streakDays," 天，继续保持！"]})]})]}),s.jsx("style",{jsx:!0,children:`
        .progress { padding: 20px; min-height: 100vh; }
        .header { text-align: center; margin-bottom: 28px; position: relative; }
        
        .back-btn {
          position: absolute;
          left: 0;
          top: 0;
          background: rgba(255,255,255,0.2);
          border: none;
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          cursor: pointer;
          font-size: 14px;
          transition: all 0.3s;
        }
        .back-btn:hover {
          background: rgba(255,255,255,0.3);
        }

        h2 { color: white; font-size: 26px; margin-top: 48px; margin-bottom: 8px; }
        
        .progress-container { max-width: 400px; margin: 0 auto; }

        /* 等级卡片 */
        .level-card {
          background: rgba(255,255,255,0.95);
          border-radius: 20px;
          padding: 28px;
          margin-bottom: 20px;
          text-align: center;
          box-shadow: 0 8px 32px rgba(0,0,0,0.15);
          border-top: 4px solid;
        }
        
        .level-badge {
          display: inline-block;
          padding: 8px 20px;
          border-radius: 20px;
          color: white;
          font-weight: 600;
          font-size: 13px;
          margin-bottom: 16px;
        }
        
        .total-score { margin-bottom: 16px; }
        .score-number { 
          display: block; 
          font-size: 52px; 
          font-weight: bold; 
          color: #764ba2;
          line-height: 1;
        }
        .score-text { 
          color: #666; 
          font-size: 15px; 
          margin-top: 4px;
        }

        .level-progress {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid #f0f0f0;
        }

        .level-progress span {
          display: block;
          font-size: 12px;
          color: #888;
          margin-bottom: 8px;
        }

        .progress-track-small {
          height: 6px;
          background: #f0f0f0;
          border-radius: 3px;
          overflow: hidden;
        }

        .progress-fill-small {
          height: 100%;
          border-radius: 3px;
          transition: width 0.5s ease;
        }

        /* 分数详情 */
        .scores-detail {
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 20px;
          margin-bottom: 16px;
        }
        
        .scores-detail h3 { 
          color: white; 
          font-size: 16px; 
          margin-bottom: 16px;
        }
        
        .score-bars { 
          display: flex; 
          flex-direction: column; 
          gap: 14px; 
        }
        
        .bar-header {
          display: flex;
          justify-content: space-between;
          color: white;
          font-size: 14px;
          margin-bottom: 6px;
        }
        
        .bar-track {
          height: 10px;
          background: rgba(255,255,255,0.2);
          border-radius: 5px;
          overflow: hidden;
        }
        
        .bar-fill { 
          height: 100%; 
          border-radius: 5px; 
          transition: width 0.5s ease; 
        }
        .bar-fill.drink { background: linear-gradient(90deg, #FF6B9D, #FF8E53); }
        .bar-fill.intimate { background: linear-gradient(90deg, #E91E63, #FF5722); }
        .bar-fill.qa { background: linear-gradient(90deg, #667eea, #764ba2); }

        /* 统计卡片 */
        .stats-cards { 
          display: grid; 
          grid-template-columns: 1fr 1fr; 
          gap: 12px; 
          margin-bottom: 16px; 
        }
        
        .stat-card {
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 16px;
          text-align: center;
        }
        
        .stat-icon { 
          font-size: 32px; 
          display: block; 
          margin-bottom: 8px; 
        }
        
        .stat-value { 
          display: block; 
          font-size: 26px; 
          font-weight: bold; 
          color: white; 
        }
        
        .stat-label { 
          font-size: 11px; 
          color: rgba(255,255,255,0.8); 
          margin-top: 4px; 
        }

        /* 成就摘要 */
        .achievement-summary {
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 20px;
          margin-bottom: 16px;
        }

        .achievement-summary h3 {
          color: white;
          font-size: 16px;
          margin-bottom: 14px;
        }

        .achievement-stats {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .achievement-stat {
          text-align: center;
          color: white;
        }

        .achievement-count {
          font-size: 28px;
          font-weight: bold;
          color: #FFD700;
        }

        .achievement-total {
          font-size: 18px;
          opacity: 0.8;
        }

        .achievement-label {
          display: block;
          font-size: 11px;
          opacity: 0.7;
          margin-top: 2px;
        }

        .achievement-progress-bar {
          flex: 1;
          height: 8px;
          background: rgba(255,255,255,0.2);
          border-radius: 4px;
          overflow: hidden;
        }

        .achievement-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #FFD700, #FFA500);
          border-radius: 4px;
          transition: width 0.5s ease;
        }

        /* 提示框 */
        .tips-box {
          background: rgba(255,215,0,0.15);
          border-radius: 12px;
          padding: 16px;
          text-align: center;
          color: white;
          line-height: 1.8;
        }
        
        .tips-box p { 
          font-size: 13px; 
          margin-bottom: 4px; 
        }
        .tips-box p:last-child { 
          margin-bottom: 0; 
        }

        .streak-tip {
          margin-top: 10px !important;
          padding-top: 10px;
          border-top: 1px solid rgba(255,215,0,0.3);
          color: #FFD700 !important;
          font-weight: 600;
        }
      `})]})}const ep=({achievements:e,unlockedIds:t})=>{const[n,r]=F.useState("all"),l=[{id:"all",name:"全部",icon:"🏆"},{id:"beginner",name:"新手",icon:"🌟"},{id:"quantity",name:"数量",icon:"📊"},{id:"score",name:"分数",icon:"💰"},{id:"streak",name:"连续",icon:"🔥"},{id:"special",name:"特殊",icon:"🎉"}],o=n==="all"?e:e.filter(a=>a.category===n),i=t.length,u=e.length;return s.jsxs("div",{className:"achievement-list-container",children:[s.jsxs("div",{className:"achievement-header",children:[s.jsx("h2",{children:"🏆 成就系统"}),s.jsxs("p",{children:["已解锁 ",i,"/",u," 个成就"]}),s.jsx("div",{className:"achievement-progress-bar",children:s.jsx("div",{className:"achievement-progress-fill",style:{width:`${i/u*100}%`}})})]}),s.jsx("div",{className:"achievement-categories",children:l.map(a=>s.jsxs("button",{className:`category-btn ${n===a.id?"active":""}`,onClick:()=>r(a.id),children:[a.icon," ",a.name]},a.id))}),s.jsx("div",{className:"achievement-grid",children:o.map(a=>{const d=t.includes(a.id);return s.jsxs("div",{className:`achievement-card ${d?"unlocked":"locked"}`,children:[s.jsx("div",{className:"card-icon",children:d?a.icon:"🔒"}),s.jsx("h4",{children:a.name}),s.jsx("p",{children:a.description}),s.jsxs("span",{className:"card-points",children:["+",a.points,"分"]}),!d&&s.jsx("div",{className:"card-lock-overlay"})]},a.id)})}),o.length===0&&s.jsx("div",{className:"no-achievements",children:s.jsx("p",{children:"该分类暂无成就"})})]})},tp=({message:e,type:t="info",duration:n=3e3,onClose:r})=>{const[l,o]=F.useState(!1);F.useEffect(()=>{setTimeout(()=>o(!0),10);const u=setTimeout(()=>{o(!1),setTimeout(()=>r&&r(),300)},n);return()=>clearTimeout(u)},[n,r]);const i=()=>{switch(t){case"success":return"✅";case"error":return"❌";case"warning":return"⚠️";case"info":return"ℹ️";default:return"💕"}};return s.jsxs("div",{className:`toast toast-${t} ${l?"toast-visible":""}`,children:[s.jsx("span",{className:"toast-icon",children:i()}),s.jsx("span",{className:"toast-message",children:e})]})},np=()=>{const[e,t]=F.useState([]),n=(a,d="info",g=3e3)=>{const m=Date.now();t(h=>[...h,{id:m,message:a,type:d,duration:g}]),setTimeout(()=>{t(h=>h.filter(x=>x.id!==m))},g+300)};return{success:a=>n(a,"success"),error:a=>n(a,"error"),warning:a=>n(a,"warning"),info:a=>n(a,"info"),ToastContainer:()=>s.jsx("div",{className:"toast-container",children:e.map(a=>s.jsx(tp,{message:a.message,type:a.type,duration:a.duration,onClose:()=>t(d=>d.filter(g=>g.id!==a.id))},a.id))})}},Hi={SCORES:"lovequest_scores",HISTORY:"lovequest_history",SETTINGS:"lovequest_settings",ACHIEVEMENTS:"lovequest_achievements",STATS:"lovequest_stats"},Vo={scores:{drink:0,intimate:0,qa:0,total:0},history:[],settings:{difficulty:"normal",safeWord:"暂停",questionsPerGame:5,saveHistory:!0,showNotifications:!0},achievements:[],stats:{totalGames:0,totalQuestions:0,favoriteMode:null,streakDays:0,lastPlayDate:null,totalTimeSpent:0}},yt=e=>{try{const t=localStorage.getItem(Hi[e]);return t?JSON.parse(t):Vo[e]}catch(t){return console.error("读取数据失败:",t),Vo[e]}},rr=(e,t)=>{try{return localStorage.setItem(Hi[e],JSON.stringify(t)),!0}catch(n){return console.error("保存数据失败:",n),!1}},rp=(e,t)=>{const n=yt("scores");return n[e]=(n[e]||0)+t,n.total=(n.total||0)+t,rr("scores",n),n},ea=()=>yt("scores"),lp=e=>{const t=yt("history");return t.push({...e,id:Date.now(),timestamp:new Date().toISOString()}),t.length>100&&t.shift(),rr("history",t),t},ta=()=>yt("history"),Wo=()=>{const e=yt("settings");return{...Vo.settings,...e}},op=e=>{const n={...Wo(),...e};return rr("settings",n),n},vc=()=>yt("achievements"),ip=e=>{const t=vc();return t.includes(e)?!1:(t.push(e),t.sort(),rr("achievements",t),!0)},sp=e=>{const t=yt("stats");if(t.totalGames+=1,t.totalQuestions+=e.questionsCompleted||0,t.totalTimeSpent+=e.duration||0,e.mode){t.modeStats||(t.modeStats={}),t.modeStats[e.mode]=(t.modeStats[e.mode]||0)+1;const r=Object.entries(t.modeStats).reduce((l,o)=>l[1]>o[1]?l:o);t.favoriteMode=r[0]}const n=new Date().toDateString();if(t.lastPlayDate!==n){const r=new Date(Date.now()-864e5).toDateString();t.lastPlayDate===r?t.streakDays+=1:t.lastPlayDate!==n&&(t.streakDays=1),t.lastPlayDate=n}return rr("stats",t),t},Kl=()=>yt("stats"),ap=()=>!localStorage.getItem(Hi.SCORES),Go=[{id:"first_game",name:"🌱 初出茅庐",description:"完成第一局游戏",icon:"🌱",condition:e=>e.totalGames>=1,category:"beginner",points:10},{id:"first_qa",name:"❓ 好奇宝宝",description:"完成第一次知心问答",icon:"❓",condition:(e,t)=>t.some(n=>n.mode==="qa"),category:"beginner",points:10},{id:"first_drink",name:"🍷 小酌怡情",description:"完成第一次微醺挑战",icon:"🍷",condition:(e,t)=>t.some(n=>n.mode==="drink"),category:"beginner",points:10},{id:"first_intimate",name:"💑 初次亲密",description:"完成第一次亲密互动",icon:"💑",condition:(e,t)=>t.some(n=>n.mode==="intimate"),category:"beginner",points:10},{id:"games_5",name:"🎮 游戏达人",description:"累计完成5局游戏",icon:"🎮",condition:e=>e.totalGames>=5,category:"quantity",points:25},{id:"games_10",name:"⭐ 坚持不懈",description:"累计完成10局游戏",icon:"⭐",condition:e=>e.totalGames>=10,category:"quantity",points:50},{id:"games_25",name:"🏆 游戏大师",description:"累计完成25局游戏",icon:"🏆",condition:e=>e.totalGames>=25,category:"quantity",points:100},{id:"questions_50",name:"📚 知识渊博",description:"累计回答50道问题",icon:"📚",condition:e=>e.totalQuestions>=50,category:"quantity",points:50},{id:"questions_100",name:"🎓 学富五车",description:"累计回答100道问题",icon:"🎓",condition:e=>e.totalQuestions>=100,category:"quantity",points:100},{id:"score_100",name:"💯 百分达人",description:"单局获得100分",icon:"💯",condition:(e,t,n)=>t.some(r=>(r.points||0)>=100),category:"score",points:30},{id:"score_500",name:"💰 积分富翁",description:"总积分达到500分",icon:"💰",condition:(e,t,n)=>n.total>=500,category:"score",points:75},{id:"score_1000",name:"👑 千分王者",description:"总积分达到1000分",icon:"👑",condition:(e,t,n)=>n.total>=1e3,category:"score",points:150},{id:"streak_3",name:"🔥 三天连胜",description:"连续3天玩游戏",icon:"🔥",condition:e=>e.streakDays>=3,category:"streak",points:40},{id:"streak_7",name:"💪 一周不断",description:"连续7天玩游戏",icon:"💪",condition:e=>e.streakDays>=7,category:"streak",points:100},{id:"streak_30",name:"🌟 月度之星",description:"连续30天玩游戏",icon:"🌟",condition:e=>e.streakDays>=30,category:"streak",points:300},{id:"all_modes",name:"🎯 全能选手",description:"体验过所有4种游戏模式",icon:"🎯",condition:(e,t)=>new Set(t.map(r=>r.mode)).size>=4,category:"special",points:60},{id:"perfect_game",name:"✨ 完美无缺",description:"一局游戏中没有跳过任何题目",icon:"✨",condition:(e,t)=>{const n=t.slice(-5);return n.length===5&&n.every(r=>r.completed!==!1)},category:"special",points:80},{id:"night_owl",name:"🦉 夜猫子",description:"在晚上11点后玩游戏",icon:"🦉",condition:(e,t)=>{const n=new Date().getHours();return n>=23||n<5},category:"special",points:20},{id:"early_bird",name:"🐤 早起的鸟儿",description:"在早上6点前玩游戏",icon:"🐤",condition:(e,t)=>{const n=new Date().getHours();return n>=5&&n<7},category:"special",points:20}],up=(e,t,n,r)=>{const l=[];return Go.forEach(o=>{if(!r.includes(o.id))try{o.condition(e,t,n)&&l.push(o)}catch(i){console.error(`检测成就 ${o.id} 失败:`,i)}}),l},ql=e=>e>=1e3?{level:5,name:"💕 恋爱宗师",color:"#E91E63",nextScore:null}:e>=500?{level:4,name:"💖 真爱达人",color:"#FF5722",nextScore:1e3}:e>=300?{level:3,name:"😊 幸福伴侣",color:"#4CAF50",nextScore:500}:e>=150?{level:2,name:"🌱 初出茅庐",color:"#2196F3",nextScore:300}:{level:1,name:"✨ 新手入门",color:"#9E9E9E",nextScore:150},na={basic:["你最喜欢的童年记忆是什么？","如果能拥有一种超能力，你会选什么？","描述一下你心目中的完美约会","你最喜欢的一首歌是什么？为什么？","如果你可以去世界上任何地方旅行，你想去哪里？","你最想学习的一项新技能是什么？","描述一个让你感到幸福的瞬间","如果你能和任何人共进晚餐，你会选择谁？","你最喜欢的电影是什么？为什么它对你很特别？","如果中彩票了，你第一件事会做什么？","描述你的理想周末是怎么度过的","你最珍惜的一件物品是什么？有什么故事？","如果能和历史上的任何人对话，你会选择谁？","你最喜欢的节日是哪个？为什么？","描述一个让你开怀大笑的时刻","如果你的生活是一部电影，片名会叫什么？","你最想尝试的一项运动是什么？","描述一个让你感到骄傲的成就","你最喜欢的食物是什么？有特别的回忆吗？","如果能拥有一个动物超能力（如和动物对话），你会选什么？"],deep:["你最害怕失去什么？","什么事情会让你感到真正快乐？","你觉得我们最相似的地方是什么？最不同的呢？","你觉得自己最大的优点和缺点是什么？","如果可以改变过去的一件事，你会改变什么？","什么让你感到最有成就感？","你对未来的最大期望是什么？","什么事情会让你流泪？","你认为什么是真正的成功？","描述一次改变你人生观的经历","你现在最感恩的是什么？",'你觉得"家"对你意味着什么？',"描述一个你克服困难的经历","你认为友谊最重要的是什么？","什么事情让你觉得人生值得？",'你对"幸福"的定义是什么？',"描述一个你做出艰难决定的时刻","你认为人应该怎样度过一生？","什么事情让你感到平静和安宁？","你希望别人怎么记住你？"],love:["你是什么时候意识到爱上我的？","我们在一起后，你最大的改变是什么？","如果明天是世界末日，你想和我做什么？","你觉得我们之间最浪漫的瞬间是什么？","你最喜欢我的哪个特质？","第一次见到我时，你的第一印象是什么？","你觉得我们之间最需要改进的是什么？","描述一个让你觉得被爱的时刻","你最怀念我们在一起的哪个时刻？","你觉得爱情中最重要的是什么？","描述一个让你心动的小细节","你最喜欢我们之间的哪种相处方式？","你觉得我们作为情侣最大的优势是什么？",'有没有哪个瞬间让你确定"就是这个人"？',"你最想和我一起完成的事情是什么？","描述一个让你感到安心的时刻","你觉得我们应该如何处理争吵？","你最期待我们的未来是什么样子？","有没有什么话一直想对我说但没说出口？","你觉得我们之间最特别的默契是什么？","描述一个让你笑到肚子疼的共同回忆","你最想和我一起去的地方是哪里？","你觉得爱一个人意味着什么？","你希望我从哪些方面更好地支持你？","如果我们有一整天时间只属于我们俩，你想怎么过？"],bold:["分享一个从未告诉过任何人的秘密","描述一个让你心跳加速的场景","你最想和我一起尝试的新事物是什么？","说一个平时不好意思开口的愿望","如果今晚可以做任何事，你想做什么？","你最想对我做但一直没做的事是什么？","分享一个关于我的幻想","你现在最想对我说的一句话是什么？","描述一个让你脸红的场景","你最想在哪里和我接吻？","分享一个你隐藏的癖好或兴趣","你最想收到什么样的惊喜？","描述一个让你兴奋的约会场景","你最想尝试的角色扮演是什么？","你做过最疯狂的事是什么？","你最想改变自己身体的哪个地方？","分享一个你从未告诉别人的性幻想","你最想在什么时候、什么地点向我求婚/接受求婚？","描述一个完美的亲密时刻应该是什么样的","你最想对我说但一直害羞的话是什么？"],memory:["我们第一次约会时穿了什么？","我们第一次接吻是在哪里？","我说过哪句话让你印象深刻？","我们一起完成的最难忘的事是什么？","我们第一次见面时的第一印象是什么？","我们的第一次约会去了哪里？","我送过你的最难忘的礼物是什么？","我们一起笑得最开心的一次是什么时候？","我们第一次牵手是在什么地方？","你还记得我们第一次吵架的原因吗？","我们一起旅行去过的地方中，你最喜欢哪里？","我为你做过的最感动你的一件事是什么？","我们共同的朋友中，谁最先知道我们在交往？","你最喜欢我们哪张合照？","我们在一起后过的第一个生日是怎么庆祝的？",'还记得我们第一次说"我爱你"是在哪里吗？',"我们一起看过的电影中，你最喜欢哪部？","我做过最让你生气的事情是什么？","我们最长时间的一次聊天是聊什么？","你觉得我们最甜蜜的一个情人节是怎么过的？"]},ra=[{level:1,text:"喝一口后说出对方3个优点",type:"drink",emoji:"🍷"},{level:1,text:"干杯后互相说一句情话",type:"drink",emoji:"🥂"},{level:1,text:"碰杯后一起唱一首歌的副歌部分",type:"drink",emoji:"🎤"},{level:1,text:"喝一口后模仿对方的招牌表情",type:"drink",emoji:"😜"},{level:1,text:"干杯后用三个词形容对方",type:"drink",emoji:"💬"},{level:1,text:"喝一口后说出今天最开心的事",type:"drink",emoji:"😊"},{level:2,text:"喝一杯后分享一个秘密",type:"truth",emoji:"💭"},{level:2,text:"真心话：你最想对我但一直没说的一句话是什么？",type:"truth",emoji:"💬"},{level:2,text:"喝半杯后模仿对方的招牌动作",type:"drink",emoji:"🎭"},{level:2,text:"真心话：描述一个你从未告诉别人的恐惧",type:"truth",emoji:"😨"},{level:2,text:"喝一杯后给对方一个真诚的赞美（至少30秒）",type:"drink",emoji:"⭐"},{level:2,text:"真心话：你最想改变我们关系中的什么？",type:"truth",emoji:"💡"},{level:2,text:"喝一口后模仿对方说话的语气说一句话",type:"drink",emoji:"🗣️"},{level:2,text:"真心话：分享一个关于我的梦境",type:"truth",emoji:"💭"},{level:3,text:"大冒险：用非语言方式表达爱意30秒",type:"dare",emoji:"😈"},{level:3,text:"组合挑战：喝一杯 + 拥抱对方 + 说情话",type:"combo",emoji:"🔥"},{level:3,text:"大冒险：喝一杯后跳一段舞（至少15秒）",type:"dare",emoji:"💃"},{level:3,text:"真心话：描述一个让你心跳加速的亲密幻想",type:"truth",emoji:"💓"},{level:3,text:"组合挑战：干杯 + 深情对视10秒 + 吻额头",type:"combo",emoji:"💕"},{level:3,text:'大冒险：喝一杯后用身体摆出"我爱你"的造型',type:"dare",emoji:"🫶"}],la=[{level:1,text:"牵手10秒并注视对方的眼睛",category:"初级",emoji:"🤝"},{level:1,text:"为对方整理头发或衣服",category:"初级",emoji:"✨"},{level:1,text:"互相按摩肩膀1分钟",category:"初级",emoji:"💆"},{level:1,text:"依偎在一起听一首完整的歌",category:"初级",emoji:"🎵"},{level:1,text:"手牵手一起走到另一个房间再走回来",category:"初级",emoji:"🚶"},{level:1,text:"面对面坐着，膝盖相碰，保持30秒",category:"初级",emoji:"🦵"},{level:1,text:"帮对方摘下一根头发（如果有），然后亲吻",category:"初级",emoji:"💋"},{level:2,text:"拥抱持续到数到30（约30秒）",category:"中级",emoji:"🤗"},{level:2,text:"在对方耳边说一句悄悄话",category:"中级",emoji:"👂"},{level:2,text:"一起做伸展运动（要有身体接触哦~）",category:"中级",emoji:"🧘"},{level:2,text:"背靠背坐在一起，感受彼此的体温",category:"中级",emoji:"🔙"},{level:2,text:"为对方按摩手部，每根手指都要按到",category:"中级",emoji:"✋"},{level:2,text:"面对面躺下，鼻尖相碰，保持15秒",category:"中级",emoji:"👃"},{level:2,text:"让对方躺在你的腿上，轻抚对方的头发",category:"中级",emoji:"😴"},{level:3,text:"用手指在对方背上画画，让对方猜画的是什么",category:"高级",emoji:"🎨"},{level:3,text:"给对方一个长达10秒的深吻 💋",category:"高级",emoji:"💋"},{level:3,text:"拥抱时轻轻抬起对方转一圈",category:"高级",emoji:"🌪️"},{level:3,text:"从脚趾到头部，亲吻对方的5个不同部位",category:"高级",emoji:"💏"},{level:3,text:"闭上眼睛，仅通过触摸辨认对方的3个部位",category:"高级",emoji:"🙈"},{level:3,text:"给对方一个全身按摩（重点：肩膀、背部、手）",category:"高级",emoji:"💆‍♀️"}],cp=[{id:"basic",name:"🌱 基础篇",desc:"从简单的问题开始",color:"#4CAF50",count:20},{id:"deep",name:"💭 深度篇",desc:"更有深度的话题",color:"#2196F3",count:20},{id:"love",name:"💕 恋爱篇",desc:"关于我们的故事",color:"#E91E63",count:25},{id:"bold",name:"🔥 大胆篇",desc:"更开放的话题",color:"#FF9800",count:20},{id:"memory",name:"🎯 回忆篇",desc:"考验我们的记忆",color:"#9C27B0",count:20}],dp=[{id:"drink",name:"🍷 微醺模式",desc:"喝着小酒聊聊天",icon:"🍷",color:"#FF6B9D"},{id:"intimate",name:"💑 亲密模式",desc:"增进肢体接触",icon:"💑",color:"#E91E63"},{id:"qa",name:"❓ 知心模式",desc:"深入了解彼此",icon:"❓",color:"#667eea"},{id:"random",name:"🎲 随机模式",desc:"惊喜混合体验",icon:"🎲",color:"#9C27B0"}];function fp(){const[e,t]=F.useState("main"),[n,r]=F.useState(ea),[l,o]=F.useState(ta),[i,u]=F.useState(Wo),[a,d]=F.useState(vc),[g,m]=F.useState(Kl),[h,x]=F.useState(null),[k,S]=F.useState(null),{success:M,warning:f,info:c,ToastContainer:p}=np(),[v,j]=F.useState([]);F.useEffect(()=>{var L;if((L=window.Telegram)!=null&&L.WebApp){const w=window.Telegram.WebApp;w.ready(),w.expand(),w.setHeaderColor&&w.setHeaderColor("#764ba2")}ap()&&c("欢迎来到 LoveQuest！开始你们的甜蜜之旅吧 💕")},[]);const C=(L,w)=>{const z=rp(L,w);return r(z),z},_=L=>{const w=lp(L);return o(w),w},N=()=>{const L=Kl(),w=ta(),z=ea(),P=up(L,w,z,a);if(P.length>0){P.forEach(U=>{ip(U.id),M(`🎉 成就解锁：${U.name}`)}),j(P),d([...a,...P.map(U=>U.id)]);const H=P.reduce((U,Ot)=>U+Ot.points,0);C("qa",H)}},b=L=>{const w=sp(L);return m(w),w},T=()=>{S(Date.now())},se=()=>k?Math.round((Date.now()-k)/6e4):0,Be=()=>{x(null),S(null)},Oe=L=>{_(L);const w=L.mode||h;C(w,L.points||10);const z=se();b({mode:w,questionsCompleted:L.completedCount||1,duration:z}),setTimeout(()=>{N()},500),M("🎉 太棒了！完成一局游戏"),t("result")},lr=L=>{const w=op(L);u(w),M("⚙️ 设置已保存")},kl=()=>{window.confirm("确定要清除所有数据吗？此操作不可恢复！")&&(Object.keys(localStorage).forEach(L=>{L.startsWith("lovequest_")&&localStorage.removeItem(L)}),r({drink:0,intimate:0,qa:0,total:0}),o([]),u(Wo()),d([]),m(Kl()),f("⚠️ 所有数据已清除"),t("main"))},pn=()=>{switch(e){case"main":return s.jsx(Js,{onStartGame:()=>{T(),t("modes")},onSettings:()=>t("settings"),onProgress:()=>t("progress"),onAchievements:()=>t("achievements"),scores:n,levelInfo:ql(n.total)});case"modes":return s.jsx(Wf,{modes:dp,onSelectMode:L=>{x(L),L==="qa"?t("qa"):L==="drink"?t("drink"):L==="intimate"?t("intimate"):L==="random"&&t("random")},onBack:()=>{Be(),t("main")}});case"qa":return s.jsx(Gf,{categories:cp,questions:na,settings:i,onComplete:L=>Oe({...L,mode:"qa"}),onBack:()=>t("modes")});case"drink":return s.jsx(Yf,{challenges:ra,settings:i,onComplete:L=>Oe({...L,mode:"drink"}),onBack:()=>t("modes")});case"intimate":return s.jsx(Kf,{challenges:la,settings:i,onComplete:L=>Oe({...L,mode:"intimate"}),onBack:()=>t("modes")});case"random":return s.jsx(qf,{questions:na,drinkChallenges:ra,intimateChallenges:la,settings:i,onComplete:L=>{L.forEach(w=>{Oe(w)})},onBack:()=>t("modes")});case"result":return s.jsx(Xf,{scores:n,history:l,mode:h,stats:g,levelInfo:ql(n.total),newAchievements:v,onPlayAgain:()=>{Be(),t("modes")},onHome:()=>{Be(),t("main")}});case"settings":return s.jsx(Zf,{settings:i,onUpdateSettings:lr,onClearData:kl,onBack:()=>t("main")});case"progress":return s.jsx(Jf,{scores:n,history:l,stats:g,achievements:Go,unlockedAchievements:a,levelInfo:ql(n.total),onBack:()=>t("main")});case"achievements":return s.jsxs("div",{className:"screen fade-in",children:[s.jsx("button",{className:"back-btn-top",onClick:()=>t("main"),children:"← 返回"}),s.jsx(ep,{achievements:Go,unlockedIds:a})]});default:return s.jsx(Js,{onStartGame:()=>t("modes")})}};return s.jsxs("div",{className:"app-container",children:[s.jsx("style",{children:`
        .back-btn-top {
          position: absolute;
          left: 16px;
          top: 16px;
          background: rgba(255,255,255,0.2);
          border: none;
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          cursor: pointer;
          font-size: 14px;
          z-index: 100;
          transition: all 0.3s;
        }
        .back-btn-top:hover {
          background: rgba(255,255,255,0.3);
        }
      `}),pn(),s.jsx(p,{}),v.length>0&&e==="result"&&s.jsx("div",{className:"achievement-popups",children:v.map((L,w)=>s.jsx("div",{},L.id))})]})}Xl.createRoot(document.getElementById("root")).render(s.jsx(Zo.StrictMode,{children:s.jsx(fp,{})}));
