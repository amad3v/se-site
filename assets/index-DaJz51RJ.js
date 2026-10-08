import{t as e}from"./rolldown-runtime-BpQH8Ho1.js";import{A as t,C as n,D as r,E as i,F as a,I as o,M as s,N as c,O as l,P as u,S as d,T as f,_ as p,a as m,b as h,c as g,d as _,f as v,g as y,h as b,i as x,j as S,k as ee,l as C,m as te,n as w,o as ne,p as re,r as ie,s as ae,t as oe,u as T,v as se,w as ce,x as E,y as le}from"./ark-ui-UY6IMVdL.js";import{A as ue,C as de,D as fe,E as pe,O as me,S as he,T as ge,_ as _e,a as ve,b as ye,c as be,d as xe,f as Se,g as Ce,h as we,i as Te,k as Ee,l as De,m as Oe,n as ke,o as Ae,p as je,r as Me,s as Ne,t as Pe,u as Fe,v as Ie,w as Le,x as Re,y as ze}from"./echarts-BY52kjcK.js";import{i as Be,n as Ve,r as He,t as Ue}from"./shiki-B-7MQRy5.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var We=y(`<div>`),Ge=`default`,Ke=e=>typeof e==`function`,qe=e=>Ke(e)?e:()=>e,Je=e=>Ke(e)?e():e,Ye=ce({theme:()=>Ge,renderer:()=>`canvas`,locale:()=>`EN`,group:()=>void 0,devicePixelRatio:()=>typeof window>`u`?1:window.devicePixelRatio,useDirtyRect:()=>!1,useCoarsePointer:()=>void 0,pointerSize:()=>void 0,ssr:()=>!1,width:()=>void 0,height:()=>void 0,autoResize:()=>!0,resizeDebounce:()=>100,initOnVisible:()=>!1,updateOptions:()=>({})}),Xe=ce({instance:()=>null}),Ze=[`theme`,`renderer`,`locale`,`group`,`devicePixelRatio`,`useDirtyRect`,`useCoarsePointer`,`autoResize`,`resizeDebounce`,`initOnVisible`,`updateOptions`,`pointerSize`,`ssr`,`height`,`width`],D=e=>{let t=o(Ye),r=n=>e[n]===void 0?t[n]():Je(e[n]),i=Ze.reduce((e,t)=>(e[t]=()=>r(t),e),{});return n(Ye.Provider,{value:i,get children(){return e.children}})},Qe=Xe.Provider,$e=()=>{let{instance:e}=o(Xe);return{instance:e,dispatch:(t,n)=>{let r=e();r&&!r.isDisposed()&&r.dispatchAction(t,n)},chart:{getId:()=>e()?.getId(),getWidth:()=>e()?.getWidth(),getHeight:()=>e()?.getHeight(),getDevicePixelRatio:()=>e()?.getDevicePixelRatio(),getDom:()=>e()?.getDom(),getOption:()=>e()?.getOption(),isDisposed:()=>e()?.isDisposed()??!0,isSSR:()=>e()?.isSSR()??!1,getDataURL:t=>e()?.getDataURL(t),getConnectedDataURL:t=>e()?.getConnectedDataURL(t),renderToSVGString:t=>e()?.renderToSVGString(t),renderToCanvas:t=>e()?.renderToCanvas(t),convertToPixel:(t,n)=>e()?.convertToPixel(t,n),convertFromPixel:(t,n)=>e()?.convertFromPixel(t,n),convertToLayout:(t,n,r)=>e()?.convertToLayout(t,n,r),containPixel:(t,n)=>e()?.containPixel(t,n),getVisual:(t,n)=>e()?.getVisual(t,n),appendData:t=>e()?.appendData(t),clear:()=>e()?.clear()}}},et=()=>o(Ye),tt=(e,t,n)=>{typeof window<`u`&&f(S([e,t],([e,t])=>{e&&!e.isDisposed()&&e.dispatchAction(t,n)},{defer:!0}))},nt=new WeakMap,rt=(e,t)=>{nt.set(e,t)},it=e=>nt.get(e)?.(),at=(e,t)=>{let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>{e(...r)},t)}},ot=(e,t={})=>{if(typeof window>`u`)return{instance:()=>null};let n=qe(t.theme),r=qe(t.renderer??`canvas`),i=qe(t.group),o=qe(t.autoResize??!0),{locale:c,devicePixelRatio:u,useDirtyRect:d,useCoarsePointer:p,pointerSize:m,ssr:h,width:g,height:_,resizeDebounce:v=100,onResize:y,initOnVisible:b=!1}=t,[x,ee]=l(null),[C,te]=l(),[w,ne]=l(0),re,[ie,ae]=l(!b||typeof IntersectionObserver>`u`);f(S(e,e=>{if(!e||ie())return;let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(t.disconnect(),ae(!0))});t.observe(e),s(()=>{t.disconnect()})}));let oe=null;f(S([e,r,ie],([e,t,r])=>{if(!e||!r)return;let l={renderer:t,locale:c,devicePixelRatio:u,useDirtyRect:d,useCoarsePointer:p,ssr:h,width:g,height:_,pointerSize:m};re=a(n)??`default`;let f=de(e,re,l);rt(f,w);let v=a(i);v?(f.group=v,Re(v),te(v)):te(void 0),ee(f),a(o)&&T(f,e),s(()=>{oe?.disconnect(),oe=null,f.isDisposed()||(f.group=``,f.dispose()),te(void 0),ee(null)})},{defer:!1})),f(S(n,e=>{if(e===void 0||e===re)return;let t=x();t&&!t.isDisposed()&&(t.setTheme(e),re=e,ne(e=>e+1))})),f(S([x,i],([e,t])=>{if(!e||e.isDisposed())return;let n=t||void 0;n!==C()&&(e.group=n??``,n&&Re(n),te(n))})),f(S([x,o],([t,n])=>{let r=a(e);t&&r&&!t.isDisposed()&&(n&&!oe?T(t,r):!n&&oe&&(oe.disconnect(),oe=null))}));let T=(e,t)=>{let n=t.offsetWidth,r=t.offsetHeight,i=!1,a=()=>{e.isDisposed()||!i&&(i=!0,t.offsetWidth===n&&t.offsetHeight===r)||t.offsetWidth!==0&&t.offsetHeight!==0&&(e.resize(),y?.())},o=v>0?at(a,v):a;oe=new ResizeObserver(o),oe.observe(t)};return{instance:x}},st=e=>{if(typeof e!=`object`||!e||Array.isArray(e))return;let t=e.id;if(typeof t==`string`)return t;if(typeof t==`number`&&Number.isFinite(t))return String(t)},ct=(e,t)=>{if(e.length===0)return[];if(t.length===0)return e.slice();let n=new Set(t);return e.filter(e=>!n.has(e))},lt=(e,t)=>{if(e.length===0)return!1;if(t.length===0)return!0;let n=new Set(t);return e.some(e=>!n.has(e))},O=e=>{let t=Array.isArray(e.options)?e.options.length:0,n=Array.isArray(e.media)?e.media.length:0,r=Object.create(null),i=[],a=[];for(let t of Object.keys(e)){if(t===`options`||t===`media`)continue;let n=e[t];if(Array.isArray(n)){let e=new Set,i=0;for(let t of n){let n=st(t);n===void 0?i++:e.add(n)}r[t]={idsSorted:e.size>0?Array.from(e).toSorted():[],noIdCount:i}}else typeof n==`object`&&n?i.push(t):n!==void 0&&a.push(t)}return i.length>1&&i.sort(),a.length>1&&a.sort(),{optionsLength:t,mediaLength:n,arrays:r,objects:i,scalars:a}},ut=(e,t)=>{let n=O(t),r=(e,n)=>({option:t,signature:e,notMerge:n,replaceMerge:[]});if(!e)return r(n,!1);if(n.optionsLength<e.optionsLength||n.mediaLength<e.mediaLength||ct(e.objects,n.objects).length>0||ct(e.scalars,n.scalars).length>0)return r(n,!0);let i=[];for(let t of Object.keys(e.arrays)){let r=e.arrays[t];if(!r)continue;let a=n.arrays[t];if(!a){(r.idsSorted.length>0||r.noIdCount>0)&&i.push(t);continue}if(lt(r.idsSorted,a.idsSorted)){i.push(t);continue}a.noIdCount<r.noIdCount&&i.push(t)}return{option:t,signature:n,notMerge:!1,replaceMerge:i.length>0?i.toSorted():[]}},dt=(e,t,n={})=>{if(typeof window>`u`)return;let r=qe(n.autoMerge??!1),i=qe(n.notMerge??!1),o=qe(n.replaceMerge??[]),s=qe(n.lazyUpdate??!1),c=qe(n.silent??!1),l=null,u;f(S([e,t,()=>{let t=e();return t?it(t):void 0}],([e,t,n])=>{let d=n!==u;if(u=n,!e||e.isDisposed()||t===void 0){l=null;return}if(a(r)){let n=d&&l!==null?{...ut(null,t),notMerge:!0}:ut(l,t),r={notMerge:n.notMerge,replaceMerge:n.replaceMerge.length>0?n.replaceMerge:void 0,lazyUpdate:a(s),silent:a(c)};e.setOption(n.option,r),l=n.signature}else e.setOption(t,{notMerge:a(i),replaceMerge:a(o),lazyUpdate:a(s),silent:a(c)})},{defer:!1}))},k=e=>t=>({type:e,...t??{}}),A={highlight:k(`highlight`),downplay:k(`downplay`),select:k(`select`),unselect:k(`unselect`),toggleSelect:k(`toggleSelect`),showTip:k(`showTip`),hideTip:k(`hideTip`),legendToggleSelect:k(`legendToggleSelect`),legendSelect:k(`legendSelect`),legendUnSelect:k(`legendUnSelect`),legendAllSelect:k(`legendAllSelect`),legendInverseSelect:k(`legendInverseSelect`),dataZoom:k(`dataZoom`),restore:k(`restore`),brush:k(`brush`),timelineChange:k(`timelineChange`),timelinePlayChange:k(`timelinePlayChange`),geoRoam:k(`geoRoam`),graphRoam:k(`graphRoam`),treeRoam:k(`treeRoam`),sankeyRoam:k(`sankeyRoam`),focusNodeAdjacency:k(`focusNodeAdjacency`),unfocusNodeAdjacency:k(`unfocusNodeAdjacency`)},ft=e=>{ye(e)},pt={},mt={},ht={},j=[`children`],gt=`autoMerge.autoResize.devicePixelRatio.group.initOnVisible.lazyUpdate.loading.loadingOptions.locale.notMerge.onDispose.onEvents.onEventsOnce.onInit.onReInit.onResize.onSurfaceEvents.onSurfaceEventsOnce.option.ref.renderer.replaceMerge.resizeDebounce.silent.theme.updateOptions.useDirtyRect.useCoarsePointer.pointerSize.ssr.width.height`.split(`.`),_t=e=>{let[t,r,o]=u(e,j,gt),c=et(),[d,m]=l(null),h=e=>()=>{let t=r[e];return t===void 0?c[e]():Je(t)},g=i(h(`theme`)),v=i(h(`renderer`)),y=i(h(`group`)),x=i(h(`autoResize`)),ee=h(`locale`),C=h(`devicePixelRatio`),te=h(`useDirtyRect`),w=h(`useCoarsePointer`),ne=h(`ssr`),re=h(`pointerSize`),ie=h(`height`),ae=h(`width`),oe=h(`resizeDebounce`),T=h(`initOnVisible`),{instance:se}=ot(d,{theme:g,renderer:v,group:y,autoResize:x,locale:a(ee),devicePixelRatio:a(C),useDirtyRect:a(te),useCoarsePointer:a(w),pointerSize:a(re),resizeDebounce:a(oe),initOnVisible:a(T),ssr:a(ne),width:a(ae),height:a(ie),onResize:r.onResize});{let e=h(`updateOptions`),t=(t,n)=>()=>Je(r[t])??Je(e()[t])??n;dt(se,()=>r.option?.(),{autoMerge:t(`autoMerge`,!1),notMerge:t(`notMerge`,!1),replaceMerge:t(`replaceMerge`,[]),lazyUpdate:t(`lazyUpdate`,!1),silent:t(`silent`,!1)})}let ce=i(()=>Je(r.loading)??!1),E=i(()=>Je(r.loadingOptions)??pt);f(S([se,ce,E],([e,t,n])=>{e&&!e.isDisposed()&&(t?e.showLoading(`default`,n):e.hideLoading())}));let le=i(()=>Je(r.onEvents)??mt);f(S([se,le],([e,t])=>{if(!e||e.isDisposed())return;let n=Object.entries(t);for(let[t,r]of n){let n=t=>{r(t,e)};e.on(t,n),s(()=>e.off(t,n))}}));let ue=i(()=>Je(r.onEventsOnce)??mt),de=new WeakSet;f(S([se,ue],([e,t])=>{if(!e||e.isDisposed())return;let n=Object.entries(t);for(let[t,r]of n){if(de.has(r))continue;let n=i=>{de.has(r)||(de.add(r),r(i,e),e.off(t,n))};e.on(t,n),s(()=>e.off(t,n))}}));let fe=i(()=>Je(r.onSurfaceEvents)??ht);f(S([se,fe],([e,t])=>{if(!e||e.isDisposed())return;let n=e.getZr(),r=Object.entries(t);for(let[e,t]of r)n.on(e,t),s(()=>{n.off(e,t)})}));let pe=i(()=>Je(r.onSurfaceEventsOnce)??ht);f(S([se,pe],([e,t])=>{if(!e||e.isDisposed())return;let n=e.getZr(),r=Object.entries(t);for(let[t,i]of r){let r=a=>{i(a),e.isDisposed()||n.off(t,r)};n.on(t,r),s(()=>{n.off(t,r)})}}));let me=!1;return f(S([se],([e])=>{e&&(me?r.onReInit?.(e):(me=!0,r.onInit?.(e)),s(()=>r.onDispose?.()))})),f(S([se,()=>r.ref],([e,t])=>{t&&(typeof t==`function`&&t(e),s(()=>t(null)))})),n(Qe,{value:{instance:se},get children(){return[(()=>{var e=We();return p(m,e),b(e,o,!1,!1),e})(),_(()=>t.children)]}})},vt=`100%`,M={name:`solid-echarts`,theme:{color:[`#fb628b`,`#3fbe95`,`#785db0`]}},yt={name:`solid-echarts-2`,theme:{color:[`#3277c5`,`#00daaa`,`#f3901c`]}},bt=`#e5edf9`,xt={textStyle:{color:bt}},St={axisLine:{lineStyle:{color:`#c5d9f2`}},axisLabel:{color:bt}},Ct={legend:xt,xAxis:St,yAxis:St},wt={lineStyle:{width:3}},Tt=`import type { Component } from "solid-js";
import { createSignal } from "solid-js";

import type { EChartsOption } from "@amad3v/solid-echarts";
import { DEFAULT_THEME, SolidEChart, SolidEChartProvider } from "@amad3v/solid-echarts";

const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const WEEK_DATA_1 = [820, 932, 901, 934, 1290, 1330, 1320];
const WEEK_DATA_2 = [620, 732, 701, 734, 1090, 1030, 980];
const WEEK_DATA_3 = [900, 850, 980, 1050, 1200, 1150, 1100];

const TWO_SERIES = [
  { name: "Revenue", type: "bar", data: WEEK_DATA_1 },
  { name: "Expenses", type: "bar", data: WEEK_DATA_2 },
];
const THREE_SERIES_WITH_IDS = [
  { id: "rev", name: "Revenue", type: "bar", data: WEEK_DATA_1 },
  { id: "exp", name: "Expenses", type: "bar", data: WEEK_DATA_2 },
  { id: "fore", name: "Forecast", type: "bar", data: WEEK_DATA_3 },
];
const TWO_SERIES_WITH_IDS = [
  { id: "rev", name: "Revenue", type: "bar", data: WEEK_DATA_1 },
  { id: "fore", name: "Forecast", type: "bar", data: WEEK_DATA_3 },
];

const createExample = () => {
  const state = createState();
  const option = makeOption(state);

  return {
    ...state,
    ...option,
  };
};

export const Example: Component = () => {
  const { removeSeries, setRemoveSeries, optionNoId, optionWithId } = createExample();

  return (
    <SolidEChartProvider theme={DEFAULT_THEME}>
      {/* Chart A: autoMerge: false (default) */}
      {/* Ghost series linger after removal */}
      <SolidEChart option={optionNoId} style={{ width: "100%", height: "280px" }} autoMerge={false} />
      {/* Chart B: autoMerge: true (anonymous) */}
      {/* noIdCount diff -> replaceMerge: ['series'] */}
      <SolidEChart option={optionNoId} style={{ width: "100%", height: "280px" }} autoMerge={true} />
      {/* Chart C: autoMerge: true (with id) */}
      {/* hasMissingIds → replaceMerge: ['series'] */}
      <SolidEChart option={optionWithId} style={{ width: "100%", height: "280px" }} autoMerge={true} />
      <button onClick={() => setRemoveSeries((v) => !v)}>
        {removeSeries() ? "Restore series" : "Remove a series"}
      </button>
    </SolidEChartProvider>
  );
};

const createState = () => {
  const [removeSeries, setRemoveSeries] = createSignal(false);

  return {
    removeSeries,
    setRemoveSeries,
  };
};

type State = ReturnType<typeof createState>;

const makeOption = (state: State) => {
  const { removeSeries } = state;

  const generateOption = <T,>(removedSeries: T[], allSeries: T[]) =>
    ({
      tooltip: { trigger: "axis" },
      xAxis: {
        type: "category",
        data: WEEK_DAYS,
      },
      yAxis: {
        type: "value",
      },
      series: removeSeries() ? removedSeries : allSeries,
    }) as EChartsOption;

  const optionNoId = () => generateOption(TWO_SERIES.slice(0, 1), TWO_SERIES);
  const optionWithId = () => generateOption(TWO_SERIES_WITH_IDS, THREE_SERIES_WITH_IDS);

  return {
    optionNoId,
    optionWithId,
  };
};
`;function Et(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`){if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Et(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n)}return r}function Dt(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Et(e))&&(r&&(r+=` `),r+=t);return r}var Ot=y(`<button type=button>`),N=e=>(()=>{var n=Ot();return b(n,t(e,{get class(){return Dt(`btn focus-ring`,e.class)}}),!1,!1),n})(),kt=y(`<div class="mb-4 flex flex-wrap gap-2 items-center">`),P=e=>(()=>{var t=kt();return T(t,()=>e.children),t})(),At=y(`<div class="text-xs text-brand-600 my-2 pl-1 flex gap-2 items-center">`),jt=e=>(()=>{var t=At();return T(t,()=>e.children),t})(),Mt=y(`<div><span class=text-brand-900></span><span class="text-brand-600 text-right">expected: <strong></strong></span><span class="text-brand-900 text-right">got: <strong></strong></span><span class="text-base text-center min-w-5">`),Nt=e=>(()=>{var t=Mt(),n=t.firstChild,i=n.nextSibling,a=i.firstChild.nextSibling,o=i.nextSibling,s=o.firstChild.nextSibling,c=o.nextSibling;return T(n,()=>e.item.label),T(a,()=>e.item.expected()),T(s,()=>e.item.actual()),T(c,()=>e.item.pass()?`✓`:`×`),r(()=>C(t,Dt(`px-3 py-[7px] gap-3 grid grid-cols-[1fr_auto_auto_auto] items-center`,e.even?`bg-brand-50`:`bg-brand-100`,e.withBorder&&`border-t border-brand-100`))),t})(),Pt=y(`<div class="text-xs font-mono mb-6 border border-brand-300 rounded-lg overflow-hidden">`),Ft=y(`<div class="text-brand-800 tracking-wider font-semibold px-3 py-2 bg-brand-200">`),F=e=>(()=>{var t=Pt();return T(t,n(h,{get each(){return e.sections},children:({title:e,items:t})=>[(()=>{var t=Ft();return T(t,e??`LIBRARY BEHAVIOUR CHECKLIST`),t})(),n(h,{each:t,children:(e,t)=>n(Nt,{item:e,get even(){return t()%2==0},get withBorder(){return t()>0}})})]})),t})(),It=[`SolidEChart`,`Datazoom`,`GroupBadge`,`updateOptions`,`finished`,`autoMerge: false`,`solid-echarts`,`event.target`,`onSurfaceEventsOnce`,`theme`,`selectedMode`,`restore`,`createChart`,`false`,`SolidEChartAPI`,`option`,`dispatch()`,`chart.getDom()`,`appendData`,`setOption`,`setTheme()`,`instance()`,`getHeight()`,`autoResize`,`ResizeObserver`,`chart.off()`,`autoMerge={false},`,`highlight`,`chart.getHeight()`,`notMerge: true`,`getOption()`,`chart.setOption()`,`onInit`,`normalMerge`,`forecast`,`legend`,`defer: true`,`revenue`,`tooltip`,`notMerge: false`,`true`,`disconnect()`,`onDispose`,`optionMergePlan`,`onEventsOnce`,`<canvas>`,`null`,`hasMissingIds`,`createChartEffect`,`onSurfaceEvents`,`chart.getWidth()`,`autoMerge: true`,`data-*`,`SolidEChartProvider`,`group`,`select`,`chart.group`,`undefined`,`datazoom`,`noIdCount`,`createAction`,`chart.getZr().on()`,`replaceMerge: ['series']`,`onResize`,`useChart()`,`EChartsType`,`seActions`,`connect()`,`useChart().chart`,`renderer`,`theme={BRAND_THEME.name},`,`<svg>`,`loading`,`onEvents`,`ChartControls`,`nativeProps`,`dispatch`,`createEffect`,`downplay`,`dataZoom`,`ref`],Lt=e(((e,t)=>{(function(){var n,r=`Expected a function`,i=`__lodash_hash_undefined__`,a=`__lodash_placeholder__`,o=1,s=2,c=8,l=16,u=32,d=64,f=128,p=256,m=512,h=1/0,g=9007199254740991,_=17976931348623157e292,v=NaN,y=4294967295,b=y-1,x=y>>>1,S=[[`ary`,f],[`bind`,o],[`bindKey`,s],[`curry`,c],[`curryRight`,l],[`flip`,m],[`partial`,u],[`partialRight`,d],[`rearg`,p]],ee=`[object Arguments]`,C=`[object Array]`,te=`[object AsyncFunction]`,w=`[object Boolean]`,ne=`[object Date]`,re=`[object DOMException]`,ie=`[object Error]`,ae=`[object Function]`,oe=`[object GeneratorFunction]`,T=`[object Map]`,se=`[object Number]`,ce=`[object Null]`,E=`[object Object]`,le=`[object Promise]`,ue=`[object Proxy]`,de=`[object RegExp]`,fe=`[object Set]`,pe=`[object String]`,me=`[object Symbol]`,he=`[object Undefined]`,ge=`[object WeakMap]`,_e=`[object WeakSet]`,ve=`[object ArrayBuffer]`,ye=`[object DataView]`,be=`[object Float32Array]`,xe=`[object Float64Array]`,Se=`[object Int8Array]`,Ce=`[object Int16Array]`,we=`[object Int32Array]`,Te=`[object Uint8Array]`,Ee=`[object Uint8ClampedArray]`,De=`[object Uint16Array]`,Oe=`[object Uint32Array]`,ke=/\b__p \+= '';/g,Ae=/\b(__p \+=) '' \+/g,je=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Me=/&(?:amp|lt|gt|quot|#39);/g,Ne=/[&<>"']/g,Pe=RegExp(Me.source),Fe=RegExp(Ne.source),Ie=/<%-([\s\S]+?)%>/g,Le=/<%([\s\S]+?)%>/g,Re=/<%=([\s\S]+?)%>/g,ze=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Be=/^\w*$/,Ve=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,He=/[\\^$.*+?()[\]{}|]/g,Ue=RegExp(He.source),We=/^\s+/,Ge=/\s/,Ke=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,qe=/\{\n\/\* \[wrapped with (.+)\] \*/,Je=/,? & /,Ye=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Xe=/[()=,{}\[\]\/\s]/,Ze=/\\(\\)?/g,D=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Qe=/\w*$/,$e=/^[-+]0x[0-9a-f]+$/i,et=/^0b[01]+$/i,tt=/^\[object .+?Constructor\]$/,nt=/^0o[0-7]+$/i,rt=/^(?:0|[1-9]\d*)$/,it=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,at=/($^)/,ot=/['\n\r\u2028\u2029\\]/g,st=`\\ud800-\\udfff`,ct=`\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff`,lt=`\\u2700-\\u27bf`,O=`a-z\\xdf-\\xf6\\xf8-\\xff`,ut=`\\xac\\xb1\\xd7\\xf7`,dt=`\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf`,k=`\\u2000-\\u206f`,A=` \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000`,ft=`A-Z\\xc0-\\xd6\\xd8-\\xde`,pt=`\\ufe0e\\ufe0f`,mt=ut+dt+k+A,ht=`['’]`,j=`[`+st+`]`,gt=`[`+mt+`]`,_t=`[`+ct+`]`,vt=`\\d+`,M=`[`+lt+`]`,yt=`[`+O+`]`,bt=`[^`+st+mt+vt+lt+O+ft+`]`,xt=`\\ud83c[\\udffb-\\udfff]`,St=`(?:`+_t+`|`+xt+`)`,Ct=`[^`+st+`]`,wt=`(?:\\ud83c[\\udde6-\\uddff]){2}`,Tt=`[\\ud800-\\udbff][\\udc00-\\udfff]`,Et=`[`+ft+`]`,Dt=`\\u200d`,Ot=`(?:`+yt+`|`+bt+`)`,N=`(?:`+Et+`|`+bt+`)`,kt=`(?:`+ht+`(?:d|ll|m|re|s|t|ve))?`,P=`(?:`+ht+`(?:D|LL|M|RE|S|T|VE))?`,At=St+`?`,jt=`[`+pt+`]?`,Mt=`(?:`+Dt+`(?:`+[Ct,wt,Tt].join(`|`)+`)`+jt+At+`)*`,Nt=`\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])`,Pt=`\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])`,Ft=jt+At+Mt,F=`(?:`+[M,wt,Tt].join(`|`)+`)`+Ft,It=`(?:`+[Ct+_t+`?`,_t,wt,Tt,j].join(`|`)+`)`,Lt=RegExp(ht,`g`),Rt=RegExp(_t,`g`),zt=RegExp(xt+`(?=`+xt+`)|`+It+Ft,`g`),Bt=RegExp([Et+`?`+yt+`+`+kt+`(?=`+[gt,Et,`$`].join(`|`)+`)`,N+`+`+P+`(?=`+[gt,Et+Ot,`$`].join(`|`)+`)`,Et+`?`+Ot+`+`+kt,Et+`+`+P,Pt,Nt,vt,F].join(`|`),`g`),Vt=RegExp(`[`+Dt+st+ct+pt+`]`),Ht=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Ut=`Array.Buffer.DataView.Date.Error.Float32Array.Float64Array.Function.Int8Array.Int16Array.Int32Array.Map.Math.Object.Promise.RegExp.Set.String.Symbol.TypeError.Uint8Array.Uint8ClampedArray.Uint16Array.Uint32Array.WeakMap._.clearTimeout.isFinite.parseInt.setTimeout`.split(`.`),Wt=-1,I={};I[be]=I[xe]=I[Se]=I[Ce]=I[we]=I[Te]=I[Ee]=I[De]=I[Oe]=!0,I[ee]=I[C]=I[ve]=I[w]=I[ye]=I[ne]=I[ie]=I[ae]=I[T]=I[se]=I[E]=I[de]=I[fe]=I[pe]=I[ge]=!1;var L={};L[ee]=L[C]=L[ve]=L[ye]=L[w]=L[ne]=L[be]=L[xe]=L[Se]=L[Ce]=L[we]=L[T]=L[se]=L[E]=L[de]=L[fe]=L[pe]=L[me]=L[Te]=L[Ee]=L[De]=L[Oe]=!0,L[ie]=L[ae]=L[ge]=!1;var Gt={À:`A`,Á:`A`,Â:`A`,Ã:`A`,Ä:`A`,Å:`A`,à:`a`,á:`a`,â:`a`,ã:`a`,ä:`a`,å:`a`,Ç:`C`,ç:`c`,Ð:`D`,ð:`d`,È:`E`,É:`E`,Ê:`E`,Ë:`E`,è:`e`,é:`e`,ê:`e`,ë:`e`,Ì:`I`,Í:`I`,Î:`I`,Ï:`I`,ì:`i`,í:`i`,î:`i`,ï:`i`,Ñ:`N`,ñ:`n`,Ò:`O`,Ó:`O`,Ô:`O`,Õ:`O`,Ö:`O`,Ø:`O`,ò:`o`,ó:`o`,ô:`o`,õ:`o`,ö:`o`,ø:`o`,Ù:`U`,Ú:`U`,Û:`U`,Ü:`U`,ù:`u`,ú:`u`,û:`u`,ü:`u`,Ý:`Y`,ý:`y`,ÿ:`y`,Æ:`Ae`,æ:`ae`,Þ:`Th`,þ:`th`,ß:`ss`,Ā:`A`,Ă:`A`,Ą:`A`,ā:`a`,ă:`a`,ą:`a`,Ć:`C`,Ĉ:`C`,Ċ:`C`,Č:`C`,ć:`c`,ĉ:`c`,ċ:`c`,č:`c`,Ď:`D`,Đ:`D`,ď:`d`,đ:`d`,Ē:`E`,Ĕ:`E`,Ė:`E`,Ę:`E`,Ě:`E`,ē:`e`,ĕ:`e`,ė:`e`,ę:`e`,ě:`e`,Ĝ:`G`,Ğ:`G`,Ġ:`G`,Ģ:`G`,ĝ:`g`,ğ:`g`,ġ:`g`,ģ:`g`,Ĥ:`H`,Ħ:`H`,ĥ:`h`,ħ:`h`,Ĩ:`I`,Ī:`I`,Ĭ:`I`,Į:`I`,İ:`I`,ĩ:`i`,ī:`i`,ĭ:`i`,į:`i`,ı:`i`,Ĵ:`J`,ĵ:`j`,Ķ:`K`,ķ:`k`,ĸ:`k`,Ĺ:`L`,Ļ:`L`,Ľ:`L`,Ŀ:`L`,Ł:`L`,ĺ:`l`,ļ:`l`,ľ:`l`,ŀ:`l`,ł:`l`,Ń:`N`,Ņ:`N`,Ň:`N`,Ŋ:`N`,ń:`n`,ņ:`n`,ň:`n`,ŋ:`n`,Ō:`O`,Ŏ:`O`,Ő:`O`,ō:`o`,ŏ:`o`,ő:`o`,Ŕ:`R`,Ŗ:`R`,Ř:`R`,ŕ:`r`,ŗ:`r`,ř:`r`,Ś:`S`,Ŝ:`S`,Ş:`S`,Š:`S`,ś:`s`,ŝ:`s`,ş:`s`,š:`s`,Ţ:`T`,Ť:`T`,Ŧ:`T`,ţ:`t`,ť:`t`,ŧ:`t`,Ũ:`U`,Ū:`U`,Ŭ:`U`,Ů:`U`,Ű:`U`,Ų:`U`,ũ:`u`,ū:`u`,ŭ:`u`,ů:`u`,ű:`u`,ų:`u`,Ŵ:`W`,ŵ:`w`,Ŷ:`Y`,ŷ:`y`,Ÿ:`Y`,Ź:`Z`,Ż:`Z`,Ž:`Z`,ź:`z`,ż:`z`,ž:`z`,Ĳ:`IJ`,ĳ:`ij`,Œ:`Oe`,œ:`oe`,ŉ:`'n`,ſ:`s`},Kt={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},qt={"&amp;":`&`,"&lt;":`<`,"&gt;":`>`,"&quot;":`"`,"&#39;":`'`},Jt={"\\":`\\`,"'":`'`,"\n":`n`,"\r":`r`,"\u2028":`u2028`,"\u2029":`u2029`},Yt=parseFloat,Xt=parseInt,Zt=typeof global==`object`&&global&&global.Object===Object&&global,Qt=typeof self==`object`&&self&&self.Object===Object&&self,$t=Zt||Qt||Function(`return this`)(),en=typeof e==`object`&&e&&!e.nodeType&&e,R=en&&typeof t==`object`&&t&&!t.nodeType&&t,tn=R&&R.exports===en,nn=tn&&Zt.process,rn=function(){try{return R&&R.require&&R.require(`util`).types||nn&&nn.binding&&nn.binding(`util`)}catch{}}(),an=rn&&rn.isArrayBuffer,on=rn&&rn.isDate,sn=rn&&rn.isMap,cn=rn&&rn.isRegExp,ln=rn&&rn.isSet,un=rn&&rn.isTypedArray;function dn(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function fn(e,t,n,r){for(var i=-1,a=e==null?0:e.length;++i<a;){var o=e[i];t(r,o,n(o),e)}return r}function pn(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}function mn(e,t){for(var n=e==null?0:e.length;n--&&t(e[n],n,e)!==!1;);return e}function hn(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(!t(e[n],n,e))return!1;return!0}function z(e,t){for(var n=-1,r=e==null?0:e.length,i=0,a=[];++n<r;){var o=e[n];t(o,n,e)&&(a[i++]=o)}return a}function gn(e,t){return!!(e!=null&&e.length)&&wn(e,t,0)>-1}function _n(e,t,n){for(var r=-1,i=e==null?0:e.length;++r<i;)if(n(t,e[r]))return!0;return!1}function B(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}function vn(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}function yn(e,t,n,r){var i=-1,a=e==null?0:e.length;for(r&&a&&(n=e[++i]);++i<a;)n=t(n,e[i],i,e);return n}function V(e,t,n,r){var i=e==null?0:e.length;for(r&&i&&(n=e[--i]);i--;)n=t(n,e[i],i,e);return n}function bn(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}var xn=En(`length`);function H(e){return e.split(``)}function U(e){return e.match(Ye)||[]}function Sn(e,t,n){var r;return n(e,function(e,n,i){if(t(e,n,i))return r=n,!1}),r}function Cn(e,t,n,r){for(var i=e.length,a=n+(r?1:-1);r?a--:++a<i;)if(t(e[a],a,e))return a;return-1}function wn(e,t,n){return t===t?Qn(e,t,n):Cn(e,Tn,n)}function W(e,t,n,r){for(var i=n-1,a=e.length;++i<a;)if(r(e[i],t))return i;return-1}function Tn(e){return e!==e}function G(e,t){var n=e==null?0:e.length;return n?An(e,t)/n:v}function En(e){return function(t){return t==null?n:t[e]}}function Dn(e){return function(t){return e==null?n:e[t]}}function On(e,t,n,r,i){return i(e,function(e,i,a){n=r?(r=!1,e):t(n,e,i,a)}),n}function kn(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}function An(e,t){for(var r,i=-1,a=e.length;++i<a;){var o=t(e[i]);o!==n&&(r=r===n?o:r+o)}return r}function jn(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}function Mn(e,t){return B(t,function(t){return[t,e[t]]})}function Nn(e){return e&&e.slice(0,nr(e)+1).replace(We,``)}function Pn(e){return function(t){return e(t)}}function Fn(e,t){return B(t,function(t){return e[t]})}function In(e,t){return e.has(t)}function Ln(e,t){for(var n=-1,r=e.length;++n<r&&wn(t,e[n],0)>-1;);return n}function Rn(e,t){for(var n=e.length;n--&&wn(t,e[n],0)>-1;);return n}function zn(e,t){for(var n=e.length,r=0;n--;)e[n]===t&&++r;return r}var Bn=Dn(Gt),Vn=Dn(Kt);function Hn(e){return`\\`+Jt[e]}function Un(e,t){return e==null?n:e[t]}function Wn(e){return Vt.test(e)}function Gn(e){return Ht.test(e)}function Kn(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}function qn(e){var t=-1,n=Array(e.size);return e.forEach(function(e,r){n[++t]=[r,e]}),n}function Jn(e,t){return function(n){return e(t(n))}}function Yn(e,t){for(var n=-1,r=e.length,i=0,o=[];++n<r;){var s=e[n];(s===t||s===a)&&(e[n]=a,o[i++]=n)}return o}function Xn(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n}function Zn(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=[e,e]}),n}function Qn(e,t,n){for(var r=n-1,i=e.length;++r<i;)if(e[r]===t)return r;return-1}function $n(e,t,n){for(var r=n+1;r--;)if(e[r]===t)return r;return r}function er(e){return Wn(e)?K(e):xn(e)}function tr(e){return Wn(e)?ir(e):H(e)}function nr(e){for(var t=e.length;t--&&Ge.test(e.charAt(t)););return t}var rr=Dn(qt);function K(e){for(var t=zt.lastIndex=0;zt.test(e);)++t;return t}function ir(e){return e.match(zt)||[]}function ar(e){return e.match(Bt)||[]}var or=(function e(t){t=t==null?$t:or.defaults($t.Object(),t,or.pick($t,Ut));var Ge=t.Array,Ye=t.Date,st=t.Error,ct=t.Function,lt=t.Math,O=t.Object,ut=t.RegExp,dt=t.String,k=t.TypeError,A=Ge.prototype,ft=ct.prototype,pt=O.prototype,mt=t[`__core-js_shared__`],ht=ft.toString,j=pt.hasOwnProperty,gt=0,_t=function(){var e=/[^.]+$/.exec(mt&&mt.keys&&mt.keys.IE_PROTO||``);return e?`Symbol(src)_1.`+e:``}(),vt=pt.toString,M=ht.call(O),yt=$t._,bt=ut(`^`+ht.call(j).replace(He,`\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,`$1.*?`)+`$`),xt=tn?t.Buffer:n,St=t.Symbol,Ct=t.Uint8Array,wt=xt?xt.allocUnsafe:n,Tt=Jn(O.getPrototypeOf,O),Et=O.create,Dt=pt.propertyIsEnumerable,Ot=A.splice,N=St?St.isConcatSpreadable:n,kt=St?St.iterator:n,P=St?St.toStringTag:n,At=function(){try{var e=Mo(O,`defineProperty`);return e({},``,{}),e}catch{}}(),jt=t.clearTimeout!==$t.clearTimeout&&t.clearTimeout,Mt=Ye&&Ye.now!==$t.Date.now&&Ye.now,Nt=t.setTimeout!==$t.setTimeout&&t.setTimeout,Pt=lt.ceil,Ft=lt.floor,F=O.getOwnPropertySymbols,It=xt?xt.isBuffer:n,zt=t.isFinite,Bt=A.join,Vt=Jn(O.keys,O),Ht=lt.max,Gt=lt.min,Kt=Ye.now,qt=t.parseInt,Jt=lt.random,Zt=A.reverse,Qt=Mo(t,`DataView`),en=Mo(t,`Map`),R=Mo(t,`Promise`),nn=Mo(t,`Set`),rn=Mo(t,`WeakMap`),xn=Mo(O,`create`),H=rn&&new rn,Dn={},Qn=_s(Qt),K=_s(en),ir=_s(R),sr=_s(nn),cr=_s(rn),lr=St?St.prototype:n,ur=lr?lr.valueOf:n,dr=lr?lr.toString:n;function q(e){if(lu(e)&&!Z(e)&&!(e instanceof J)){if(e instanceof mr)return e;if(j.call(e,`__wrapped__`))return ys(e)}return new mr(e)}var fr=function(){function e(){}return function(t){if(!cu(t))return{};if(Et)return Et(t);e.prototype=t;var r=new e;return e.prototype=n,r}}();function pr(){}function mr(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=n}q.templateSettings={escape:Ie,evaluate:Le,interpolate:Re,variable:``,imports:{_:q}},q.prototype=pr.prototype,q.prototype.constructor=q,mr.prototype=fr(pr.prototype),mr.prototype.constructor=mr;function J(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=y,this.__views__=[]}function hr(){var e=new J(this.__wrapped__);return e.__actions__=Ua(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Ua(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Ua(this.__views__),e}function gr(){if(this.__filtered__){var e=new J(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function _r(){var e=this.__wrapped__.value(),t=this.__dir__,n=Z(e),r=t<0,i=n?e.length:0,a=Lo(0,i,this.__views__),o=a.start,s=a.end,c=s-o,l=r?s:o-1,u=this.__iteratees__,d=u.length,f=0,p=Gt(c,this.__takeCount__);if(!n||!r&&i==c&&p==c)return wa(e,this.__actions__);var m=[];outer:for(;c--&&f<p;){l+=t;for(var h=-1,g=e[l];++h<d;){var _=u[h],v=_.iteratee,y=_.type,b=v(g);if(y==2)g=b;else if(!b){if(y==1)continue outer;break outer}}m[f++]=g}return m}J.prototype=fr(pr.prototype),J.prototype.constructor=J;function vr(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function yr(){this.__data__=xn?xn(null):{},this.size=0}function br(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=+!!t,t}function xr(e){var t=this.__data__;if(xn){var r=t[e];return r===i?n:r}return j.call(t,e)?t[e]:n}function Sr(e){var t=this.__data__;return xn?t[e]!==n:j.call(t,e)}function Cr(e,t){var r=this.__data__;return this.size+=+!this.has(e),r[e]=xn&&t===n?i:t,this}vr.prototype.clear=yr,vr.prototype.delete=br,vr.prototype.get=xr,vr.prototype.has=Sr,vr.prototype.set=Cr;function wr(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Tr(){this.__data__=[],this.size=0}function Er(e){var t=this.__data__,n=Zr(t,e);return n<0?!1:(n==t.length-1?t.pop():Ot.call(t,n,1),--this.size,!0)}function Dr(e){var t=this.__data__,r=Zr(t,e);return r<0?n:t[r][1]}function Or(e){return Zr(this.__data__,e)>-1}function kr(e,t){var n=this.__data__,r=Zr(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}wr.prototype.clear=Tr,wr.prototype.delete=Er,wr.prototype.get=Dr,wr.prototype.has=Or,wr.prototype.set=kr;function Ar(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function jr(){this.size=0,this.__data__={hash:new vr,map:new(en||wr),string:new vr}}function Mr(e){var t=Ao(this,e).delete(e);return this.size-=+!!t,t}function Nr(e){return Ao(this,e).get(e)}function Pr(e){return Ao(this,e).has(e)}function Fr(e,t){var n=Ao(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}Ar.prototype.clear=jr,Ar.prototype.delete=Mr,Ar.prototype.get=Nr,Ar.prototype.has=Pr,Ar.prototype.set=Fr;function Ir(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new Ar;++t<n;)this.add(e[t])}function Lr(e){return this.__data__.set(e,i),this}function Rr(e){return this.__data__.has(e)}Ir.prototype.add=Ir.prototype.push=Lr,Ir.prototype.has=Rr;function zr(e){var t=this.__data__=new wr(e);this.size=t.size}function Br(){this.__data__=new wr,this.size=0}function Vr(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function Hr(e){return this.__data__.get(e)}function Ur(e){return this.__data__.has(e)}function Wr(e,t){var n=this.__data__;if(n instanceof wr){var r=n.__data__;if(!en||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Ar(r)}return n.set(e,t),this.size=n.size,this}zr.prototype.clear=Br,zr.prototype.delete=Vr,zr.prototype.get=Hr,zr.prototype.has=Ur,zr.prototype.set=Wr;function Gr(e,t){var n=Z(e),r=!n&&Kl(e),i=!n&&!r&&Zl(e),a=!n&&!r&&!i&&wu(e),o=n||r||i||a,s=o?jn(e.length,dt):[],c=s.length;for(var l in e)(t||j.call(e,l))&&!(o&&(l==`length`||i&&(l==`offset`||l==`parent`)||a&&(l==`buffer`||l==`byteLength`||l==`byteOffset`)||Go(l,c)))&&s.push(l);return s}function Kr(e){var t=e.length;return t?e[ia(0,t-1)]:n}function qr(e,t){return ms(Ua(e),ri(t,0,e.length))}function Jr(e){return ms(Ua(e))}function Yr(e,t,r){(r!==n&&!Ul(e[t],r)||r===n&&!(t in e))&&ti(e,t,r)}function Xr(e,t,r){var i=e[t];(!(j.call(e,t)&&Ul(i,r))||r===n&&!(t in e))&&ti(e,t,r)}function Zr(e,t){for(var n=e.length;n--;)if(Ul(e[n][0],t))return n;return-1}function Qr(e,t,n,r){return li(e,function(e,i,a){t(r,e,n(e),a)}),r}function $r(e,t){return e&&Wa(t,id(t),e)}function ei(e,t){return e&&Wa(t,ad(t),e)}function ti(e,t,n){t==`__proto__`&&At?At(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function ni(e,t){for(var r=-1,i=t.length,a=Ge(i),o=e==null;++r<i;)a[r]=o?n:Qu(e,t[r]);return a}function ri(e,t,r){return e===e&&(r!==n&&(e=e<=r?e:r),t!==n&&(e=e>=t?e:t)),e}function ii(e,t,r,i,a,o){var s,c=t&1,l=t&2,u=t&4;if(r&&(s=a?r(e,i,a,o):r(e)),s!==n)return s;if(!cu(e))return e;var d=Z(e);if(d){if(s=Bo(e),!c)return Ua(e,s)}else{var f=Io(e),p=f==ae||f==oe;if(Zl(e))return Na(e,c);if(f==E||f==ee||p&&!a){if(s=l||p?{}:Vo(e),!c)return l?Ka(e,ei(s,e)):Ga(e,$r(s,e))}else{if(!L[f])return a?e:{};s=Ho(e,f,c)}}o||=new zr;var m=o.get(e);if(m)return m;o.set(e,s),xu(e)?e.forEach(function(n){s.add(ii(n,t,r,n,e,o))}):uu(e)&&e.forEach(function(n,i){s.set(i,ii(n,t,r,i,e,o))});var h=d?n:(u?l?Eo:To:l?ad:id)(e);return pn(h||e,function(n,i){h&&(i=n,n=e[i]),Xr(s,i,ii(n,t,r,i,e,o))}),s}function ai(e){var t=id(e);return function(n){return oi(n,e,t)}}function oi(e,t,r){var i=r.length;if(e==null)return!i;for(e=O(e);i--;){var a=r[i],o=t[a],s=e[a];if(s===n&&!(a in e)||!o(s))return!1}return!0}function si(e,t,i){if(typeof e!=`function`)throw new k(r);return us(function(){e.apply(n,i)},t)}function ci(e,t,n,r){var i=-1,a=gn,o=!0,s=e.length,c=[],l=t.length;if(!s)return c;n&&(t=B(t,Pn(n))),r?(a=_n,o=!1):t.length>=200&&(a=In,o=!1,t=new Ir(t));outer:for(;++i<s;){var u=e[i],d=n==null?u:n(u);if(u=r||u!==0?u:0,o&&d===d){for(var f=l;f--;)if(t[f]===d)continue outer;c.push(u)}else a(t,d,r)||c.push(u)}return c}var li=Ya(vi),ui=Ya(yi,!0);function di(e,t){var n=!0;return li(e,function(e,r,i){return n=!!t(e,r,i),n}),n}function fi(e,t,r){for(var i=-1,a=e.length;++i<a;){var o=e[i],s=t(o);if(s!=null&&(c===n?s===s&&!Cu(s):r(s,c)))var c=s,l=o}return l}function pi(e,t,r,i){var a=e.length;for(r=Q(r),r<0&&(r=-r>a?0:a+r),i=i===n||i>a?a:Q(i),i<0&&(i+=a),i=r>i?0:Mu(i);r<i;)e[r++]=t;return e}function mi(e,t){var n=[];return li(e,function(e,r,i){t(e,r,i)&&n.push(e)}),n}function hi(e,t,n,r,i){var a=-1,o=e.length;for(n||=Wo,i||=[];++a<o;){var s=e[a];t>0&&n(s)?t>1?hi(s,t-1,n,r,i):vn(i,s):r||(i[i.length]=s)}return i}var gi=Xa(),_i=Xa(!0);function vi(e,t){return e&&gi(e,t,id)}function yi(e,t){return e&&_i(e,t,id)}function bi(e,t){return z(t,function(t){return au(e[t])})}function xi(e,t){t=ka(t,e);for(var r=0,i=t.length;e!=null&&r<i;)e=e[gs(t[r++])];return r&&r==i?e:n}function Si(e,t,n){var r=t(e);return Z(e)?r:vn(r,n(e))}function Ci(e){return e==null?e===n?he:ce:P&&P in O(e)?No(e):is(e)}function wi(e,t){return e>t}function Ti(e,t){return e!=null&&j.call(e,t)}function Ei(e,t){return e!=null&&t in O(e)}function Di(e,t,n){return e>=Gt(t,n)&&e<Ht(t,n)}function Oi(e,t,r){for(var i=r?_n:gn,a=e[0].length,o=e.length,s=o,c=Ge(o),l=1/0,u=[];s--;){var d=e[s];s&&t&&(d=B(d,Pn(t))),l=Gt(d.length,l),c[s]=!r&&(t||a>=120&&d.length>=120)?new Ir(s&&d):n}d=e[0];var f=-1,p=c[0];outer:for(;++f<a&&u.length<l;){var m=d[f],h=t?t(m):m;if(m=r||m!==0?m:0,!(p?In(p,h):i(u,h,r))){for(s=o;--s;){var g=c[s];if(!(g?In(g,h):i(e[s],h,r)))continue outer}p&&p.push(h),u.push(m)}}return u}function ki(e,t,n,r){return vi(e,function(e,i,a){t(r,n(e),i,a)}),r}function Ai(e,t,r){t=ka(t,e),e=os(e,t);var i=e==null?e:e[gs(Ws(t))];return i==null?n:dn(i,e,r)}function ji(e){return lu(e)&&Ci(e)==ee}function Mi(e){return lu(e)&&Ci(e)==ve}function Ni(e){return lu(e)&&Ci(e)==ne}function Pi(e,t,n,r,i){return e===t?!0:e==null||t==null||!lu(e)&&!lu(t)?e!==e&&t!==t:Fi(e,t,n,r,Pi,i)}function Fi(e,t,n,r,i,a){var o=Z(e),s=Z(t),c=o?C:Io(e),l=s?C:Io(t);c=c==ee?E:c,l=l==ee?E:l;var u=c==E,d=l==E,f=c==l;if(f&&Zl(e)){if(!Zl(t))return!1;o=!0,u=!1}if(f&&!u)return a||=new zr,o||wu(e)?xo(e,t,n,r,i,a):So(e,t,c,n,r,i,a);if(!(n&1)){var p=u&&j.call(e,`__wrapped__`),m=d&&j.call(t,`__wrapped__`);if(p||m){var h=p?e.value():e,g=m?t.value():t;return a||=new zr,i(h,g,n,r,a)}}return f?(a||=new zr,Co(e,t,n,r,i,a)):!1}function Ii(e){return lu(e)&&Io(e)==T}function Li(e,t,r,i){var a=r.length,o=a,s=!i;if(e==null)return!o;for(e=O(e);a--;){var c=r[a];if(s&&c[2]?c[1]!==e[c[0]]:!(c[0]in e))return!1}for(;++a<o;){c=r[a];var l=c[0],u=e[l],d=c[1];if(s&&c[2]){if(u===n&&!(l in e))return!1}else{var f=new zr;if(i)var p=i(u,d,l,e,t,f);if(!(p===n?Pi(d,u,3,i,f):p))return!1}}return!0}function Ri(e){return!cu(e)||Xo(e)?!1:(au(e)?bt:tt).test(_s(e))}function zi(e){return lu(e)&&Ci(e)==de}function Bi(e){return lu(e)&&Io(e)==fe}function Vi(e){return lu(e)&&su(e.length)&&!!I[Ci(e)]}function Hi(e){return typeof e==`function`?e:e==null?pf:typeof e==`object`?Z(e)?Ji(e[0],e[1]):qi(e):Ef(e)}function Ui(e){if(!Qo(e))return Vt(e);var t=[];for(var n in O(e))j.call(e,n)&&n!=`constructor`&&t.push(n);return t}function Wi(e){if(!cu(e))return rs(e);var t=Qo(e),n=[];for(var r in e)(r!=`constructor`||!t&&j.call(e,r))&&n.push(r);return n}function Gi(e,t){return e<t}function Ki(e,t){var n=-1,r=Jl(e)?Ge(e.length):[];return li(e,function(e,i,a){r[++n]=t(e,i,a)}),r}function qi(e){var t=jo(e);return t.length==1&&t[0][2]?es(t[0][0],t[0][1]):function(n){return n===e||Li(n,e,t)}}function Ji(e,t){return qo(e)&&$o(t)?es(gs(e),t):function(r){var i=Qu(r,e);return i===n&&i===t?ed(r,e):Pi(t,i,3)}}function Yi(e,t,r,i,a){e!==t&&gi(t,function(o,s){if(a||=new zr,cu(o))Xi(e,t,s,r,Yi,i,a);else{var c=i?i(cs(e,s),o,s+``,e,t,a):n;c===n&&(c=o),Yr(e,s,c)}},ad)}function Xi(e,t,r,i,a,o,s){var c=cs(e,r),l=cs(t,r),u=s.get(l);if(u){Yr(e,r,u);return}var d=o?o(c,l,r+``,e,t,s):n,f=d===n;if(f){var p=Z(l),m=!p&&Zl(l),h=!p&&!m&&wu(l);d=l,p||m||h?Z(c)?d=c:Yl(c)?d=Ua(c):m?(f=!1,d=Na(l,!0)):h?(f=!1,d=Ra(l,!0)):d=[]:vu(l)||Kl(l)?(d=c,Kl(c)?d=Pu(c):(!cu(c)||au(c))&&(d=Vo(l))):f=!1}f&&(s.set(l,d),a(d,l,i,o,s),s.delete(l)),Yr(e,r,d)}function Zi(e,t){var r=e.length;if(r)return t+=t<0?r:0,Go(t,r)?e[t]:n}function Qi(e,t,n){t=t.length?B(t,function(e){return Z(e)?function(t){return xi(t,e.length===1?e[0]:e)}:e}):[pf];var r=-1;return t=B(t,Pn(X())),kn(Ki(e,function(e,n,i){return{criteria:B(t,function(t){return t(e)}),index:++r,value:e}}),function(e,t){return Ba(e,t,n)})}function $i(e,t){return ea(e,t,function(t,n){return ed(e,n)})}function ea(e,t,n){for(var r=-1,i=t.length,a={};++r<i;){var o=t[r],s=xi(e,o);n(s,o)&&la(a,ka(o,e),s)}return a}function ta(e){return function(t){return xi(t,e)}}function na(e,t,n,r){var i=r?W:wn,a=-1,o=t.length,s=e;for(e===t&&(t=Ua(t)),n&&(s=B(e,Pn(n)));++a<o;)for(var c=0,l=t[a],u=n?n(l):l;(c=i(s,u,c,r))>-1;)s!==e&&Ot.call(s,c,1),Ot.call(e,c,1);return e}function ra(e,t){for(var n=e?t.length:0,r=n-1;n--;){var i=t[n];if(n==r||i!==a){var a=i;Go(i)?Ot.call(e,i,1):xa(e,i)}}return e}function ia(e,t){return e+Ft(Jt()*(t-e+1))}function aa(e,t,n,r){for(var i=-1,a=Ht(Pt((t-e)/(n||1)),0),o=Ge(a);a--;)o[r?a:++i]=e,e+=n;return o}function oa(e,t){var n=``;if(!e||t<1||t>g)return n;do t%2&&(n+=e),t=Ft(t/2),t&&(e+=e);while(t);return n}function Y(e,t){return ds(as(e,t,pf),e+``)}function sa(e){return Kr(Cd(e))}function ca(e,t){var n=Cd(e);return ms(n,ri(t,0,n.length))}function la(e,t,r,i){if(!cu(e))return e;t=ka(t,e);for(var a=-1,o=t.length,s=o-1,c=e;c!=null&&++a<o;){var l=gs(t[a]),u=r;if(l===`__proto__`||l===`constructor`||l===`prototype`)return e;if(a!=s){var d=c[l];u=i?i(d,l,c):n,u===n&&(u=cu(d)?d:Go(t[a+1])?[]:{})}Xr(c,l,u),c=c[l]}return e}var ua=H?function(e,t){return H.set(e,t),e}:pf,da=At?function(e,t){return At(e,`toString`,{configurable:!0,enumerable:!1,value:lf(t),writable:!0})}:pf;function fa(e){return ms(Cd(e))}function pa(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),n=n>i?i:n,n<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var a=Ge(i);++r<i;)a[r]=e[r+t];return a}function ma(e,t){var n;return li(e,function(e,r,i){return n=t(e,r,i),!n}),!!n}function ha(e,t,n){var r=0,i=e==null?r:e.length;if(typeof t==`number`&&t===t&&i<=x){for(;r<i;){var a=r+i>>>1,o=e[a];o!==null&&!Cu(o)&&(n?o<=t:o<t)?r=a+1:i=a}return i}return ga(e,t,pf,n)}function ga(e,t,r,i){var a=0,o=e==null?0:e.length;if(o===0)return 0;t=r(t);for(var s=t!==t,c=t===null,l=Cu(t),u=t===n;a<o;){var d=Ft((a+o)/2),f=r(e[d]),p=f!==n,m=f===null,h=f===f,g=Cu(f);if(s)var _=i||h;else _=u?h&&(i||p):c?h&&p&&(i||!m):l?h&&p&&!m&&(i||!g):m||g?!1:i?f<=t:f<t;_?a=d+1:o=d}return Gt(o,b)}function _a(e,t){for(var n=-1,r=e.length,i=0,a=[];++n<r;){var o=e[n],s=t?t(o):o;if(!n||!Ul(s,c)){var c=s;a[i++]=o===0?0:o}}return a}function va(e){return typeof e==`number`?e:Cu(e)?v:+e}function ya(e){if(typeof e==`string`)return e;if(Z(e))return B(e,ya)+``;if(Cu(e))return dr?dr.call(e):``;var t=e+``;return t==`0`&&1/e==-1/0?`-0`:t}function ba(e,t,n){var r=-1,i=gn,a=e.length,o=!0,s=[],c=s;if(n)o=!1,i=_n;else if(a>=200){var l=t?null:ho(e);if(l)return Xn(l);o=!1,i=In,c=new Ir}else c=t?[]:s;outer:for(;++r<a;){var u=e[r],d=t?t(u):u;if(u=n||u!==0?u:0,o&&d===d){for(var f=c.length;f--;)if(c[f]===d)continue outer;t&&c.push(d),s.push(u)}else i(c,d,n)||(c!==s&&c.push(d),s.push(u))}return s}function xa(e,t){t=ka(t,e);var n=-1,r=t.length;if(!r)return!0;for(;++n<r;){var i=gs(t[n]);if(i===`__proto__`&&!j.call(e,`__proto__`)||(i===`constructor`||i===`prototype`)&&n<r-1)return!1}var a=os(e,t);return a==null||delete a[gs(Ws(t))]}function Sa(e,t,n,r){return la(e,t,n(xi(e,t)),r)}function Ca(e,t,n,r){for(var i=e.length,a=r?i:-1;(r?a--:++a<i)&&t(e[a],a,e););return n?pa(e,r?0:a,r?a+1:i):pa(e,r?a+1:0,r?i:a)}function wa(e,t){var n=e;return n instanceof J&&(n=n.value()),yn(t,function(e,t){return t.func.apply(t.thisArg,vn([e],t.args))},n)}function Ta(e,t,n){var r=e.length;if(r<2)return r?ba(e[0]):[];for(var i=-1,a=Ge(r);++i<r;)for(var o=e[i],s=-1;++s<r;)s!=i&&(a[i]=ci(a[i]||o,e[s],t,n));return ba(hi(a,1),t,n)}function Ea(e,t,r){for(var i=-1,a=e.length,o=t.length,s={};++i<a;){var c=i<o?t[i]:n;r(s,e[i],c)}return s}function Da(e){return Yl(e)?e:[]}function Oa(e){return typeof e==`function`?e:pf}function ka(e,t){return Z(e)?e:qo(e,t)?[e]:hs($(e))}var Aa=Y;function ja(e,t,r){var i=e.length;return r=r===n?i:r,!t&&r>=i?e:pa(e,t,r)}var Ma=jt||function(e){return $t.clearTimeout(e)};function Na(e,t){if(t)return e.slice();var n=e.length,r=wt?wt(n):new e.constructor(n);return e.copy(r),r}function Pa(e){var t=new e.constructor(e.byteLength);return new Ct(t).set(new Ct(e)),t}function Fa(e,t){var n=t?Pa(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}function Ia(e){var t=new e.constructor(e.source,Qe.exec(e));return t.lastIndex=e.lastIndex,t}function La(e){return ur?O(ur.call(e)):{}}function Ra(e,t){var n=t?Pa(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function za(e,t){if(e!==t){var r=e!==n,i=e===null,a=e===e,o=Cu(e),s=t!==n,c=t===null,l=t===t,u=Cu(t);if(!c&&!u&&!o&&e>t||o&&s&&l&&!c&&!u||i&&s&&l||!r&&l||!a)return 1;if(!i&&!o&&!u&&e<t||u&&r&&a&&!i&&!o||c&&r&&a||!s&&a||!l)return-1}return 0}function Ba(e,t,n){for(var r=-1,i=e.criteria,a=t.criteria,o=i.length,s=n.length;++r<o;){var c=za(i[r],a[r]);if(c)return r>=s?c:c*(n[r]==`desc`?-1:1)}return e.index-t.index}function Va(e,t,n,r){for(var i=-1,a=e.length,o=n.length,s=-1,c=t.length,l=Ht(a-o,0),u=Ge(c+l),d=!r;++s<c;)u[s]=t[s];for(;++i<o;)(d||i<a)&&(u[n[i]]=e[i]);for(;l--;)u[s++]=e[i++];return u}function Ha(e,t,n,r){for(var i=-1,a=e.length,o=-1,s=n.length,c=-1,l=t.length,u=Ht(a-s,0),d=Ge(u+l),f=!r;++i<u;)d[i]=e[i];for(var p=i;++c<l;)d[p+c]=t[c];for(;++o<s;)(f||i<a)&&(d[p+n[o]]=e[i++]);return d}function Ua(e,t){var n=-1,r=e.length;for(t||=Ge(r);++n<r;)t[n]=e[n];return t}function Wa(e,t,r,i){var a=!r;r||={};for(var o=-1,s=t.length;++o<s;){var c=t[o],l=i?i(r[c],e[c],c,r,e):n;l===n&&(l=e[c]),a?ti(r,c,l):Xr(r,c,l)}return r}function Ga(e,t){return Wa(e,Po(e),t)}function Ka(e,t){return Wa(e,Fo(e),t)}function qa(e,t){return function(n,r){var i=Z(n)?fn:Qr,a=t?t():{};return i(n,e,X(r,2),a)}}function Ja(e){return Y(function(t,r){var i=-1,a=r.length,o=a>1?r[a-1]:n,s=a>2?r[2]:n;for(o=e.length>3&&typeof o==`function`?(a--,o):n,s&&Ko(r[0],r[1],s)&&(o=a<3?n:o,a=1),t=O(t);++i<a;){var c=r[i];c&&e(t,c,i,o)}return t})}function Ya(e,t){return function(n,r){if(n==null)return n;if(!Jl(n))return e(n,r);for(var i=n.length,a=t?i:-1,o=O(n);(t?a--:++a<i)&&r(o[a],a,o)!==!1;);return n}}function Xa(e){return function(t,n,r){for(var i=-1,a=O(t),o=r(t),s=o.length;s--;){var c=o[e?s:++i];if(n(a[c],c,a)===!1)break}return t}}function Za(e,t,n){var r=t&o,i=eo(e);function a(){return(this&&this!==$t&&this instanceof a?i:e).apply(r?n:this,arguments)}return a}function Qa(e){return function(t){t=$(t);var r=Wn(t)?tr(t):n,i=r?r[0]:t.charAt(0),a=r?ja(r,1).join(``):t.slice(1);return i[e]()+a}}function $a(e){return function(t){return yn(rf(Ad(t).replace(Lt,``)),e,``)}}function eo(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var n=fr(e.prototype),r=e.apply(n,t);return cu(r)?r:n}}function to(e,t,r){var i=eo(e);function a(){for(var o=arguments.length,s=Ge(o),c=o,l=ko(a);c--;)s[c]=arguments[c];var u=o<3&&s[0]!==l&&s[o-1]!==l?[]:Yn(s,l);return o-=u.length,o<r?po(e,t,io,a.placeholder,n,s,u,n,n,r-o):dn(this&&this!==$t&&this instanceof a?i:e,this,s)}return a}function no(e){return function(t,r,i){var a=O(t);if(!Jl(t)){var o=X(r,3);t=id(t),r=function(e){return o(a[e],e,a)}}var s=e(t,r,i);return s>-1?a[o?t[s]:s]:n}}function ro(e){return wo(function(t){var i=t.length,a=i,o=mr.prototype.thru;for(e&&t.reverse();a--;){var s=t[a];if(typeof s!=`function`)throw new k(r);if(o&&!l&&Oo(s)==`wrapper`)var l=new mr([],!0)}for(a=l?a:i;++a<i;){s=t[a];var d=Oo(s),m=d==`wrapper`?Do(s):n;l=m&&Yo(m[0])&&m[1]==(f|c|u|p)&&!m[4].length&&m[9]==1?l[Oo(m[0])].apply(l,m[3]):s.length==1&&Yo(s)?l[d]():l.thru(s)}return function(){var e=arguments,n=e[0];if(l&&e.length==1&&Z(n))return l.plant(n).value();for(var r=0,a=i?t[r].apply(this,e):n;++r<i;)a=t[r].call(this,a);return a}})}function io(e,t,r,i,a,u,d,p,h,g){var _=t&f,v=t&o,y=t&s,b=t&(c|l),x=t&m,S=y?n:eo(e);function ee(){for(var n=arguments.length,o=Ge(n),s=n;s--;)o[s]=arguments[s];if(b)var c=ko(ee),l=zn(o,c);if(i&&(o=Va(o,i,a,b)),u&&(o=Ha(o,u,d,b)),n-=l,b&&n<g){var f=Yn(o,c);return po(e,t,io,ee.placeholder,r,o,f,p,h,g-n)}var m=v?r:this,C=y?m[e]:e;return n=o.length,p?o=ss(o,p):x&&n>1&&o.reverse(),_&&h<n&&(o.length=h),this&&this!==$t&&this instanceof ee&&(C=S||eo(C)),C.apply(m,o)}return ee}function ao(e,t){return function(n,r){return ki(n,e,t(r),{})}}function oo(e,t){return function(r,i){var a;if(r===n&&i===n)return t;if(r!==n&&(a=r),i!==n){if(a===n)return i;typeof r==`string`||typeof i==`string`?(r=ya(r),i=ya(i)):(r=va(r),i=va(i)),a=e(r,i)}return a}}function so(e){return wo(function(t){return t=B(t,Pn(X())),Y(function(n){var r=this;return e(t,function(e){return dn(e,r,n)})})})}function co(e,t){t=t===n?` `:ya(t);var r=t.length;if(r<2)return r?oa(t,e):t;var i=oa(t,Pt(e/er(t)));return Wn(t)?ja(tr(i),0,e).join(``):i.slice(0,e)}function lo(e,t,n,r){var i=t&o,a=eo(e);function s(){for(var t=-1,o=arguments.length,c=-1,l=r.length,u=Ge(l+o),d=this&&this!==$t&&this instanceof s?a:e;++c<l;)u[c]=r[c];for(;o--;)u[c++]=arguments[++t];return dn(d,i?n:this,u)}return s}function uo(e){return function(t,r,i){return i&&typeof i!=`number`&&Ko(t,r,i)&&(r=i=n),t=ju(t),r===n?(r=t,t=0):r=ju(r),i=i===n?t<r?1:-1:ju(i),aa(t,r,i,e)}}function fo(e){return function(t,n){return(typeof t!=`string`||typeof n!=`string`)&&(t=Nu(t),n=Nu(n)),e(t,n)}}function po(e,t,r,i,a,l,f,p,m,h){var g=t&c,_=g?f:n,v=g?n:f,y=g?l:n,b=g?n:l;t|=g?u:d,t&=~(g?d:u),t&4||(t&=~(o|s));var x=[e,t,a,y,_,b,v,p,m,h],S=r.apply(n,x);return Yo(e)&&ls(S,x),S.placeholder=i,fs(S,e,t)}function mo(e){var t=lt[e];return function(e,n){if(e=Nu(e),n=n==null?0:Gt(Q(n),292),n&&zt(e)){var r=($(e)+`e`).split(`e`);return r=($(t(r[0]+`e`+(+r[1]+n)))+`e`).split(`e`),+(r[0]+`e`+(+r[1]-n))}return t(e)}}var ho=nn&&1/Xn(new nn([,-0]))[1]==h?function(e){return new nn(e)}:xf;function go(e){return function(t){var n=Io(t);return n==T?qn(t):n==fe?Zn(t):Mn(t,e(t))}}function _o(e,t,i,a,f,p,m,h){var g=t&s;if(!g&&typeof e!=`function`)throw new k(r);var _=a?a.length:0;if(_||(t&=~(u|d),a=f=n),m=m===n?m:Ht(Q(m),0),h=h===n?h:Q(h),_-=f?f.length:0,t&d){var v=a,y=f;a=f=n}var b=g?n:Do(e),x=[e,t,i,a,f,v,y,p,m,h];if(b&&ns(x,b),e=x[0],t=x[1],i=x[2],a=x[3],f=x[4],h=x[9]=x[9]===n?g?0:e.length:Ht(x[9]-_,0),!h&&t&(c|l)&&(t&=~(c|l)),!t||t==o)var S=Za(e,t,i);else S=t==c||t==l?to(e,t,h):(t==u||t==(o|u))&&!f.length?lo(e,t,i,a):io.apply(n,x);return fs((b?ua:ls)(S,x),e,t)}function vo(e,t,r,i){return e===n||Ul(e,pt[r])&&!j.call(i,r)?t:e}function yo(e,t,r,i,a,o){return cu(e)&&cu(t)&&(o.set(t,e),Yi(e,t,n,yo,o),o.delete(t)),e}function bo(e){return vu(e)?n:e}function xo(e,t,r,i,a,o){var s=r&1,c=e.length,l=t.length;if(c!=l&&!(s&&l>c))return!1;var u=o.get(e),d=o.get(t);if(u&&d)return u==t&&d==e;var f=-1,p=!0,m=r&2?new Ir:n;for(o.set(e,t),o.set(t,e);++f<c;){var h=e[f],g=t[f];if(i)var _=s?i(g,h,f,t,e,o):i(h,g,f,e,t,o);if(_!==n){if(_)continue;p=!1;break}if(m){if(!bn(t,function(e,t){if(!In(m,t)&&(h===e||a(h,e,r,i,o)))return m.push(t)})){p=!1;break}}else if(!(h===g||a(h,g,r,i,o))){p=!1;break}}return o.delete(e),o.delete(t),p}function So(e,t,n,r,i,a,o){switch(n){case ye:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case ve:return!(e.byteLength!=t.byteLength||!a(new Ct(e),new Ct(t)));case w:case ne:case se:return Ul(+e,+t);case ie:return e.name==t.name&&e.message==t.message;case de:case pe:return e==t+``;case T:var s=qn;case fe:var c=r&1;if(s||=Xn,e.size!=t.size&&!c)return!1;var l=o.get(e);if(l)return l==t;r|=2,o.set(e,t);var u=xo(s(e),s(t),r,i,a,o);return o.delete(e),u;case me:if(ur)return ur.call(e)==ur.call(t)}return!1}function Co(e,t,r,i,a,o){var s=r&1,c=To(e),l=c.length;if(l!=To(t).length&&!s)return!1;for(var u=l;u--;){var d=c[u];if(!(s?d in t:j.call(t,d)))return!1}var f=o.get(e),p=o.get(t);if(f&&p)return f==t&&p==e;var m=!0;o.set(e,t),o.set(t,e);for(var h=s;++u<l;){d=c[u];var g=e[d],_=t[d];if(i)var v=s?i(_,g,d,t,e,o):i(g,_,d,e,t,o);if(!(v===n?g===_||a(g,_,r,i,o):v)){m=!1;break}h||=d==`constructor`}if(m&&!h){var y=e.constructor,b=t.constructor;y!=b&&`constructor`in e&&`constructor`in t&&!(typeof y==`function`&&y instanceof y&&typeof b==`function`&&b instanceof b)&&(m=!1)}return o.delete(e),o.delete(t),m}function wo(e){return ds(as(e,n,Ns),e+``)}function To(e){return Si(e,id,Po)}function Eo(e){return Si(e,ad,Fo)}var Do=H?function(e){return H.get(e)}:xf;function Oo(e){for(var t=e.name+``,n=Dn[t],r=j.call(Dn,t)?n.length:0;r--;){var i=n[r],a=i.func;if(a==null||a==e)return i.name}return t}function ko(e){return(j.call(q,`placeholder`)?q:e).placeholder}function X(){var e=q.iteratee||mf;return e=e===mf?Hi:e,arguments.length?e(arguments[0],arguments[1]):e}function Ao(e,t){var n=e.__data__;return Jo(t)?n[typeof t==`string`?`string`:`hash`]:n.map}function jo(e){for(var t=id(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,$o(i)]}return t}function Mo(e,t){var r=Un(e,t);return Ri(r)?r:n}function No(e){var t=j.call(e,P),r=e[P];try{e[P]=n;var i=!0}catch{}var a=vt.call(e);return i&&(t?e[P]=r:delete e[P]),a}var Po=F?function(e){return e==null?[]:(e=O(e),z(F(e),function(t){return Dt.call(e,t)}))}:Af,Fo=F?function(e){for(var t=[];e;)vn(t,Po(e)),e=Tt(e);return t}:Af,Io=Ci;(Qt&&Io(new Qt(new ArrayBuffer(1)))!=ye||en&&Io(new en)!=T||R&&Io(R.resolve())!=le||nn&&Io(new nn)!=fe||rn&&Io(new rn)!=ge)&&(Io=function(e){var t=Ci(e),r=t==E?e.constructor:n,i=r?_s(r):``;if(i)switch(i){case Qn:return ye;case K:return T;case ir:return le;case sr:return fe;case cr:return ge}return t});function Lo(e,t,n){for(var r=-1,i=n.length;++r<i;){var a=n[r],o=a.size;switch(a.type){case`drop`:e+=o;break;case`dropRight`:t-=o;break;case`take`:t=Gt(t,e+o);break;case`takeRight`:e=Ht(e,t-o)}}return{start:e,end:t}}function Ro(e){var t=e.match(qe);return t?t[1].split(Je):[]}function zo(e,t,n){t=ka(t,e);for(var r=-1,i=t.length,a=!1;++r<i;){var o=gs(t[r]);if(!(a=e!=null&&n(e,o)))break;e=e[o]}return a||++r!=i?a:(i=e==null?0:e.length,!!i&&su(i)&&Go(o,i)&&(Z(e)||Kl(e)))}function Bo(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]==`string`&&j.call(e,`index`)&&(n.index=e.index,n.input=e.input),n}function Vo(e){return typeof e.constructor==`function`&&!Qo(e)?fr(Tt(e)):{}}function Ho(e,t,n){var r=e.constructor;switch(t){case ve:return Pa(e);case w:case ne:return new r(+e);case ye:return Fa(e,n);case be:case xe:case Se:case Ce:case we:case Te:case Ee:case De:case Oe:return Ra(e,n);case T:return new r;case se:case pe:return new r(e);case de:return Ia(e);case fe:return new r;case me:return La(e)}}function Uo(e,t){var n=t.length;if(!n)return e;var r=n-1;return t[r]=(n>1?`& `:``)+t[r],t=t.join(n>2?`, `:` `),e.replace(Ke,`{
/* [wrapped with `+t+`] */
`)}function Wo(e){return Z(e)||Kl(e)||!!(N&&e&&e[N])}function Go(e,t){var n=typeof e;return t??=g,!!t&&(n==`number`||n!=`symbol`&&rt.test(e))&&e>-1&&e%1==0&&e<t}function Ko(e,t,n){if(!cu(n))return!1;var r=typeof t;return(r==`number`?Jl(n)&&Go(t,n.length):r==`string`&&t in n)?Ul(n[t],e):!1}function qo(e,t){if(Z(e))return!1;var n=typeof e;return n==`number`||n==`symbol`||n==`boolean`||e==null||Cu(e)?!0:Be.test(e)||!ze.test(e)||t!=null&&e in O(t)}function Jo(e){var t=typeof e;return t==`string`||t==`number`||t==`symbol`||t==`boolean`?e!==`__proto__`:e===null}function Yo(e){var t=Oo(e),n=q[t];if(typeof n!=`function`||!(t in J.prototype))return!1;if(e===n)return!0;var r=Do(n);return!!r&&e===r[0]}function Xo(e){return!!_t&&_t in e}var Zo=mt?au:jf;function Qo(e){var t=e&&e.constructor;return e===(typeof t==`function`&&t.prototype||pt)}function $o(e){return e===e&&!cu(e)}function es(e,t){return function(r){return r!=null&&r[e]===t&&(t!==n||e in O(r))}}function ts(e){var t=Tl(e,function(e){return n.size===500&&n.clear(),e}),n=t.cache;return t}function ns(e,t){var n=e[1],r=t[1],i=n|r,l=i<(o|s|f),u=r==f&&n==c||r==f&&n==p&&e[7].length<=t[8]||r==(f|p)&&t[7].length<=t[8]&&n==c;if(!(l||u))return e;r&o&&(e[2]=t[2],i|=n&o?0:4);var d=t[3];if(d){var m=e[3];e[3]=m?Va(m,d,t[4]):d,e[4]=m?Yn(e[3],a):t[4]}return d=t[5],d&&(m=e[5],e[5]=m?Ha(m,d,t[6]):d,e[6]=m?Yn(e[5],a):t[6]),d=t[7],d&&(e[7]=d),r&f&&(e[8]=e[8]==null?t[8]:Gt(e[8],t[8])),e[9]??=t[9],e[0]=t[0],e[1]=i,e}function rs(e){var t=[];if(e!=null)for(var n in O(e))t.push(n);return t}function is(e){return vt.call(e)}function as(e,t,r){return t=Ht(t===n?e.length-1:t,0),function(){for(var n=arguments,i=-1,a=Ht(n.length-t,0),o=Ge(a);++i<a;)o[i]=n[t+i];i=-1;for(var s=Ge(t+1);++i<t;)s[i]=n[i];return s[t]=r(o),dn(e,this,s)}}function os(e,t){return t.length<2?e:xi(e,pa(t,0,-1))}function ss(e,t){for(var r=e.length,i=Gt(t.length,r),a=Ua(e);i--;){var o=t[i];e[i]=Go(o,r)?a[o]:n}return e}function cs(e,t){if((t!==`constructor`||typeof e[t]!=`function`)&&t!=`__proto__`)return e[t]}var ls=ps(ua),us=Nt||function(e,t){return $t.setTimeout(e,t)},ds=ps(da);function fs(e,t,n){var r=t+``;return ds(e,Uo(r,vs(Ro(r),n)))}function ps(e){var t=0,r=0;return function(){var i=Kt(),a=16-(i-r);if(r=i,a>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(n,arguments)}}function ms(e,t){var r=-1,i=e.length,a=i-1;for(t=t===n?i:t;++r<t;){var o=ia(r,a),s=e[o];e[o]=e[r],e[r]=s}return e.length=t,e}var hs=ts(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(``),e.replace(Ve,function(e,n,r,i){t.push(r?i.replace(Ze,`$1`):n||e)}),t});function gs(e){if(typeof e==`string`||Cu(e))return e;var t=e+``;return t==`0`&&1/e==-1/0?`-0`:t}function _s(e){if(e!=null){try{return ht.call(e)}catch{}try{return e+``}catch{}}return``}function vs(e,t){return pn(S,function(n){var r=`_.`+n[0];t&n[1]&&!gn(e,r)&&e.push(r)}),e.sort()}function ys(e){if(e instanceof J)return e.clone();var t=new mr(e.__wrapped__,e.__chain__);return t.__actions__=Ua(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}function bs(e,t,r){t=(r?Ko(e,t,r):t===n)?1:Ht(Q(t),0);var i=e==null?0:e.length;if(!i||t<1)return[];for(var a=0,o=0,s=Ge(Pt(i/t));a<i;)s[o++]=pa(e,a,a+=t);return s}function xs(e){for(var t=-1,n=e==null?0:e.length,r=0,i=[];++t<n;){var a=e[t];a&&(i[r++]=a)}return i}function Ss(){var e=arguments.length;if(!e)return[];for(var t=Ge(e-1),n=arguments[0],r=e;r--;)t[r-1]=arguments[r];return vn(Z(n)?Ua(n):[n],hi(t,1))}var Cs=Y(function(e,t){return Yl(e)?ci(e,hi(t,1,Yl,!0)):[]}),ws=Y(function(e,t){var r=Ws(t);return Yl(r)&&(r=n),Yl(e)?ci(e,hi(t,1,Yl,!0),X(r,2)):[]}),Ts=Y(function(e,t){var r=Ws(t);return Yl(r)&&(r=n),Yl(e)?ci(e,hi(t,1,Yl,!0),n,r):[]});function Es(e,t,r){var i=e==null?0:e.length;return i?(t=r||t===n?1:Q(t),pa(e,t<0?0:t,i)):[]}function Ds(e,t,r){var i=e==null?0:e.length;return i?(t=r||t===n?1:Q(t),t=i-t,pa(e,0,t<0?0:t)):[]}function Os(e,t){return e&&e.length?Ca(e,X(t,3),!0,!0):[]}function ks(e,t){return e&&e.length?Ca(e,X(t,3),!0):[]}function As(e,t,n,r){var i=e==null?0:e.length;return i?(n&&typeof n!=`number`&&Ko(e,t,n)&&(n=0,r=i),pi(e,t,n,r)):[]}function js(e,t,n){var r=e==null?0:e.length;if(!r)return-1;var i=n==null?0:Q(n);return i<0&&(i=Ht(r+i,0)),Cn(e,X(t,3),i)}function Ms(e,t,r){var i=e==null?0:e.length;if(!i)return-1;var a=i-1;return r!==n&&(a=Q(r),a=r<0?Ht(i+a,0):Gt(a,i-1)),Cn(e,X(t,3),a,!0)}function Ns(e){return e!=null&&e.length?hi(e,1):[]}function Ps(e){return e!=null&&e.length?hi(e,h):[]}function Fs(e,t){return e!=null&&e.length?(t=t===n?1:Q(t),hi(e,t)):[]}function Is(e){for(var t=-1,n=e==null?0:e.length,r={};++t<n;){var i=e[t];ti(r,i[0],i[1])}return r}function Ls(e){return e&&e.length?e[0]:n}function Rs(e,t,n){var r=e==null?0:e.length;if(!r)return-1;var i=n==null?0:Q(n);return i<0&&(i=Ht(r+i,0)),wn(e,t,i)}function zs(e){return e!=null&&e.length?pa(e,0,-1):[]}var Bs=Y(function(e){var t=B(e,Da);return t.length&&t[0]===e[0]?Oi(t):[]}),Vs=Y(function(e){var t=Ws(e),r=B(e,Da);return t===Ws(r)?t=n:r.pop(),r.length&&r[0]===e[0]?Oi(r,X(t,2)):[]}),Hs=Y(function(e){var t=Ws(e),r=B(e,Da);return t=typeof t==`function`?t:n,t&&r.pop(),r.length&&r[0]===e[0]?Oi(r,n,t):[]});function Us(e,t){return e==null?``:Bt.call(e,t)}function Ws(e){var t=e==null?0:e.length;return t?e[t-1]:n}function Gs(e,t,r){var i=e==null?0:e.length;if(!i)return-1;var a=i;return r!==n&&(a=Q(r),a=a<0?Ht(i+a,0):Gt(a,i-1)),t===t?$n(e,t,a):Cn(e,Tn,a,!0)}function Ks(e,t){return e&&e.length?Zi(e,Q(t)):n}var qs=Y(Js);function Js(e,t){return e&&e.length&&t&&t.length?na(e,t):e}function Ys(e,t,n){return e&&e.length&&t&&t.length?na(e,t,X(n,2)):e}function Xs(e,t,r){return e&&e.length&&t&&t.length?na(e,t,n,r):e}var Zs=wo(function(e,t){var n=e==null?0:e.length,r=ni(e,t);return ra(e,B(t,function(e){return Go(e,n)?+e:e}).sort(za)),r});function Qs(e,t){var n=[];if(!(e&&e.length))return n;var r=-1,i=[],a=e.length;for(t=X(t,3);++r<a;){var o=e[r];t(o,r,e)&&(n.push(o),i.push(r))}return ra(e,i),n}function $s(e){return e==null?e:Zt.call(e)}function ec(e,t,r){var i=e==null?0:e.length;return i?(r&&typeof r!=`number`&&Ko(e,t,r)?(t=0,r=i):(t=t==null?0:Q(t),r=r===n?i:Q(r)),pa(e,t,r)):[]}function tc(e,t){return ha(e,t)}function nc(e,t,n){return ga(e,t,X(n,2))}function rc(e,t){var n=e==null?0:e.length;if(n){var r=ha(e,t);if(r<n&&Ul(e[r],t))return r}return-1}function ic(e,t){return ha(e,t,!0)}function ac(e,t,n){return ga(e,t,X(n,2),!0)}function oc(e,t){if(e!=null&&e.length){var n=ha(e,t,!0)-1;if(Ul(e[n],t))return n}return-1}function sc(e){return e&&e.length?_a(e):[]}function cc(e,t){return e&&e.length?_a(e,X(t,2)):[]}function lc(e){var t=e==null?0:e.length;return t?pa(e,1,t):[]}function uc(e,t,r){return e&&e.length?(t=r||t===n?1:Q(t),pa(e,0,t<0?0:t)):[]}function dc(e,t,r){var i=e==null?0:e.length;return i?(t=r||t===n?1:Q(t),t=i-t,pa(e,t<0?0:t,i)):[]}function fc(e,t){return e&&e.length?Ca(e,X(t,3),!1,!0):[]}function pc(e,t){return e&&e.length?Ca(e,X(t,3)):[]}var mc=Y(function(e){return ba(hi(e,1,Yl,!0))}),hc=Y(function(e){var t=Ws(e);return Yl(t)&&(t=n),ba(hi(e,1,Yl,!0),X(t,2))}),gc=Y(function(e){var t=Ws(e);return t=typeof t==`function`?t:n,ba(hi(e,1,Yl,!0),n,t)});function _c(e){return e&&e.length?ba(e):[]}function vc(e,t){return e&&e.length?ba(e,X(t,2)):[]}function yc(e,t){return t=typeof t==`function`?t:n,e&&e.length?ba(e,n,t):[]}function bc(e){if(!(e&&e.length))return[];var t=0;return e=z(e,function(e){if(Yl(e))return t=Ht(e.length,t),!0}),jn(t,function(t){return B(e,En(t))})}function xc(e,t){if(!(e&&e.length))return[];var r=bc(e);return t==null?r:B(r,function(e){return dn(t,n,e)})}var Sc=Y(function(e,t){return Yl(e)?ci(e,t):[]}),Cc=Y(function(e){return Ta(z(e,Yl))}),wc=Y(function(e){var t=Ws(e);return Yl(t)&&(t=n),Ta(z(e,Yl),X(t,2))}),Tc=Y(function(e){var t=Ws(e);return t=typeof t==`function`?t:n,Ta(z(e,Yl),n,t)}),Ec=Y(bc);function Dc(e,t){return Ea(e||[],t||[],Xr)}function Oc(e,t){return Ea(e||[],t||[],la)}var kc=Y(function(e){var t=e.length,r=t>1?e[t-1]:n;return r=typeof r==`function`?(e.pop(),r):n,xc(e,r)});function Ac(e){var t=q(e);return t.__chain__=!0,t}function jc(e,t){return t(e),e}function Mc(e,t){return t(e)}var Nc=wo(function(e){var t=e.length,r=t?e[0]:0,i=this.__wrapped__,a=function(t){return ni(t,e)};return t>1||this.__actions__.length||!(i instanceof J)||!Go(r)?this.thru(a):(i=i.slice(r,+r+ +!!t),i.__actions__.push({func:Mc,args:[a],thisArg:n}),new mr(i,this.__chain__).thru(function(e){return t&&!e.length&&e.push(n),e}))});function Pc(){return Ac(this)}function Fc(){return new mr(this.value(),this.__chain__)}function Ic(){this.__values__===n&&(this.__values__=Au(this.value()));var e=this.__index__>=this.__values__.length;return{done:e,value:e?n:this.__values__[this.__index__++]}}function Lc(){return this}function Rc(e){for(var t,r=this;r instanceof pr;){var i=ys(r);i.__index__=0,i.__values__=n,t?a.__wrapped__=i:t=i;var a=i;r=r.__wrapped__}return a.__wrapped__=e,t}function zc(){var e=this.__wrapped__;if(e instanceof J){var t=e;return this.__actions__.length&&(t=new J(this)),t=t.reverse(),t.__actions__.push({func:Mc,args:[$s],thisArg:n}),new mr(t,this.__chain__)}return this.thru($s)}function Bc(){return wa(this.__wrapped__,this.__actions__)}var Vc=qa(function(e,t,n){j.call(e,n)?++e[n]:ti(e,n,1)});function Hc(e,t,r){var i=Z(e)?hn:di;return r&&Ko(e,t,r)&&(t=n),i(e,X(t,3))}function Uc(e,t){return(Z(e)?z:mi)(e,X(t,3))}var Wc=no(js),Gc=no(Ms);function Kc(e,t){return hi(tl(e,t),1)}function qc(e,t){return hi(tl(e,t),h)}function Jc(e,t,r){return r=r===n?1:Q(r),hi(tl(e,t),r)}function Yc(e,t){return(Z(e)?pn:li)(e,X(t,3))}function Xc(e,t){return(Z(e)?mn:ui)(e,X(t,3))}var Zc=qa(function(e,t,n){j.call(e,n)?e[n].push(t):ti(e,n,[t])});function Qc(e,t,n,r){e=Jl(e)?e:Cd(e),n=n&&!r?Q(n):0;var i=e.length;return n<0&&(n=Ht(i+n,0)),Su(e)?n<=i&&e.indexOf(t,n)>-1:!!i&&wn(e,t,n)>-1}var $c=Y(function(e,t,n){var r=-1,i=typeof t==`function`,a=Jl(e)?Ge(e.length):[];return li(e,function(e){a[++r]=i?dn(t,e,n):Ai(e,t,n)}),a}),el=qa(function(e,t,n){ti(e,n,t)});function tl(e,t){return(Z(e)?B:Ki)(e,X(t,3))}function nl(e,t,r,i){return e==null?[]:(Z(t)||(t=t==null?[]:[t]),r=i?n:r,Z(r)||(r=r==null?[]:[r]),Qi(e,t,r))}var rl=qa(function(e,t,n){e[+!n].push(t)},function(){return[[],[]]});function il(e,t,n){var r=Z(e)?yn:On,i=arguments.length<3;return r(e,X(t,4),n,i,li)}function al(e,t,n){var r=Z(e)?V:On,i=arguments.length<3;return r(e,X(t,4),n,i,ui)}function ol(e,t){return(Z(e)?z:mi)(e,El(X(t,3)))}function sl(e){return(Z(e)?Kr:sa)(e)}function cl(e,t,r){return t=(r?Ko(e,t,r):t===n)?1:Q(t),(Z(e)?qr:ca)(e,t)}function ll(e){return(Z(e)?Jr:fa)(e)}function ul(e){if(e==null)return 0;if(Jl(e))return Su(e)?er(e):e.length;var t=Io(e);return t==T||t==fe?e.size:Ui(e).length}function dl(e,t,r){var i=Z(e)?bn:ma;return r&&Ko(e,t,r)&&(t=n),i(e,X(t,3))}var fl=Y(function(e,t){if(e==null)return[];var n=t.length;return n>1&&Ko(e,t[0],t[1])?t=[]:n>2&&Ko(t[0],t[1],t[2])&&(t=[t[0]]),Qi(e,hi(t,1),[])}),pl=Mt||function(){return $t.Date.now()};function ml(e,t){if(typeof t!=`function`)throw new k(r);return e=Q(e),function(){if(--e<1)return t.apply(this,arguments)}}function hl(e,t,r){return t=r?n:t,t=e&&t==null?e.length:t,_o(e,f,n,n,n,n,t)}function gl(e,t){var i;if(typeof t!=`function`)throw new k(r);return e=Q(e),function(){return--e>0&&(i=t.apply(this,arguments)),e<=1&&(t=n),i}}var _l=Y(function(e,t,n){var r=o;if(n.length){var i=Yn(n,ko(_l));r|=u}return _o(e,r,t,n,i)}),vl=Y(function(e,t,n){var r=o|s;if(n.length){var i=Yn(n,ko(vl));r|=u}return _o(t,r,e,n,i)});function yl(e,t,r){t=r?n:t;var i=_o(e,c,n,n,n,n,n,t);return i.placeholder=yl.placeholder,i}function bl(e,t,r){t=r?n:t;var i=_o(e,l,n,n,n,n,n,t);return i.placeholder=bl.placeholder,i}function xl(e,t,i){var a,o,s,c,l,u,d=0,f=!1,p=!1,m=!0;if(typeof e!=`function`)throw new k(r);t=Nu(t)||0,cu(i)&&(f=!!i.leading,p=`maxWait`in i,s=p?Ht(Nu(i.maxWait)||0,t):s,m=`trailing`in i?!!i.trailing:m);function h(t){var r=a,i=o;return a=o=n,d=t,c=e.apply(i,r),c}function g(e){return d=e,l=us(y,t),f?h(e):c}function _(e){var n=e-u,r=e-d,i=t-n;return p?Gt(i,s-r):i}function v(e){var r=e-u,i=e-d;return u===n||r>=t||r<0||p&&i>=s}function y(){var e=pl();if(v(e))return b(e);l=us(y,_(e))}function b(e){return l=n,m&&a?h(e):(a=o=n,c)}function x(){l!==n&&Ma(l),d=0,a=u=o=l=n}function S(){return l===n?c:b(pl())}function ee(){var e=pl(),r=v(e);if(a=arguments,o=this,u=e,r){if(l===n)return g(u);if(p)return Ma(l),l=us(y,t),h(u)}return l===n&&(l=us(y,t)),c}return ee.cancel=x,ee.flush=S,ee}var Sl=Y(function(e,t){return si(e,1,t)}),Cl=Y(function(e,t,n){return si(e,Nu(t)||0,n)});function wl(e){return _o(e,m)}function Tl(e,t){if(typeof e!=`function`||t!=null&&typeof t!=`function`)throw new k(r);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(Tl.Cache||Ar),n}Tl.Cache=Ar;function El(e){if(typeof e!=`function`)throw new k(r);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}function Dl(e){return gl(2,e)}var Ol=Aa(function(e,t){t=t.length==1&&Z(t[0])?B(t[0],Pn(X())):B(hi(t,1),Pn(X()));var n=t.length;return Y(function(r){for(var i=-1,a=Gt(r.length,n);++i<a;)r[i]=t[i].call(this,r[i]);return dn(e,this,r)})}),kl=Y(function(e,t){return _o(e,u,n,t,Yn(t,ko(kl)))}),Al=Y(function(e,t){return _o(e,d,n,t,Yn(t,ko(Al)))}),jl=wo(function(e,t){return _o(e,p,n,n,n,t)});function Ml(e,t){if(typeof e!=`function`)throw new k(r);return t=t===n?t:Q(t),Y(e,t)}function Nl(e,t){if(typeof e!=`function`)throw new k(r);return t=t==null?0:Ht(Q(t),0),Y(function(n){var r=n[t],i=ja(n,0,t);return r&&vn(i,r),dn(e,this,i)})}function Pl(e,t,n){var i=!0,a=!0;if(typeof e!=`function`)throw new k(r);return cu(n)&&(i=`leading`in n?!!n.leading:i,a=`trailing`in n?!!n.trailing:a),xl(e,t,{leading:i,maxWait:t,trailing:a})}function Fl(e){return hl(e,1)}function Il(e,t){return kl(Oa(t),e)}function Ll(){if(!arguments.length)return[];var e=arguments[0];return Z(e)?e:[e]}function Rl(e){return ii(e,4)}function zl(e,t){return t=typeof t==`function`?t:n,ii(e,4,t)}function Bl(e){return ii(e,5)}function Vl(e,t){return t=typeof t==`function`?t:n,ii(e,5,t)}function Hl(e,t){return t==null||oi(e,t,id(t))}function Ul(e,t){return e===t||e!==e&&t!==t}var Wl=fo(wi),Gl=fo(function(e,t){return e>=t}),Kl=ji(function(){return arguments}())?ji:function(e){return lu(e)&&j.call(e,`callee`)&&!Dt.call(e,`callee`)},Z=Ge.isArray,ql=an?Pn(an):Mi;function Jl(e){return e!=null&&su(e.length)&&!au(e)}function Yl(e){return lu(e)&&Jl(e)}function Xl(e){return e===!0||e===!1||lu(e)&&Ci(e)==w}var Zl=It||jf,Ql=on?Pn(on):Ni;function $l(e){return lu(e)&&e.nodeType===1&&!vu(e)}function eu(e){if(e==null)return!0;if(Jl(e)&&(Z(e)||typeof e==`string`||typeof e.splice==`function`||Zl(e)||wu(e)||Kl(e)))return!e.length;var t=Io(e);if(t==T||t==fe)return!e.size;if(Qo(e))return!Ui(e).length;for(var n in e)if(j.call(e,n))return!1;return!0}function tu(e,t){return Pi(e,t)}function nu(e,t,r){r=typeof r==`function`?r:n;var i=r?r(e,t):n;return i===n?Pi(e,t,n,r):!!i}function ru(e){if(!lu(e))return!1;var t=Ci(e);return t==ie||t==re||typeof e.message==`string`&&typeof e.name==`string`&&!vu(e)}function iu(e){return typeof e==`number`&&zt(e)}function au(e){if(!cu(e))return!1;var t=Ci(e);return t==ae||t==oe||t==te||t==ue}function ou(e){return typeof e==`number`&&e==Q(e)}function su(e){return typeof e==`number`&&e>-1&&e%1==0&&e<=g}function cu(e){var t=typeof e;return e!=null&&(t==`object`||t==`function`)}function lu(e){return typeof e==`object`&&!!e}var uu=sn?Pn(sn):Ii;function du(e,t){return e===t||Li(e,t,jo(t))}function fu(e,t,r){return r=typeof r==`function`?r:n,Li(e,t,jo(t),r)}function pu(e){return _u(e)&&e!=+e}function mu(e){if(Zo(e))throw new st(`Unsupported core-js use. Try https://npms.io/search?q=ponyfill.`);return Ri(e)}function hu(e){return e===null}function gu(e){return e==null}function _u(e){return typeof e==`number`||lu(e)&&Ci(e)==se}function vu(e){if(!lu(e)||Ci(e)!=E)return!1;var t=Tt(e);if(t===null)return!0;var n=j.call(t,`constructor`)&&t.constructor;return typeof n==`function`&&n instanceof n&&ht.call(n)==M}var yu=cn?Pn(cn):zi;function bu(e){return ou(e)&&e>=-g&&e<=g}var xu=ln?Pn(ln):Bi;function Su(e){return typeof e==`string`||!Z(e)&&lu(e)&&Ci(e)==pe}function Cu(e){return typeof e==`symbol`||lu(e)&&Ci(e)==me}var wu=un?Pn(un):Vi;function Tu(e){return e===n}function Eu(e){return lu(e)&&Io(e)==ge}function Du(e){return lu(e)&&Ci(e)==_e}var Ou=fo(Gi),ku=fo(function(e,t){return e<=t});function Au(e){if(!e)return[];if(Jl(e))return Su(e)?tr(e):Ua(e);if(kt&&e[kt])return Kn(e[kt]());var t=Io(e);return(t==T?qn:t==fe?Xn:Cd)(e)}function ju(e){return e?(e=Nu(e),e===h||e===-1/0?(e<0?-1:1)*_:e===e?e:0):e===0?e:0}function Q(e){var t=ju(e),n=t%1;return t===t?n?t-n:t:0}function Mu(e){return e?ri(Q(e),0,y):0}function Nu(e){if(typeof e==`number`)return e;if(Cu(e))return v;if(cu(e)){var t=typeof e.valueOf==`function`?e.valueOf():e;e=cu(t)?t+``:t}if(typeof e!=`string`)return e===0?e:+e;e=Nn(e);var n=et.test(e);return n||nt.test(e)?Xt(e.slice(2),n?2:8):$e.test(e)?v:+e}function Pu(e){return Wa(e,ad(e))}function Fu(e){return e?ri(Q(e),-g,g):e===0?e:0}function $(e){return e==null?``:ya(e)}var Iu=Ja(function(e,t){if(Qo(t)||Jl(t)){Wa(t,id(t),e);return}for(var n in t)j.call(t,n)&&Xr(e,n,t[n])}),Lu=Ja(function(e,t){Wa(t,ad(t),e)}),Ru=Ja(function(e,t,n,r){Wa(t,ad(t),e,r)}),zu=Ja(function(e,t,n,r){Wa(t,id(t),e,r)}),Bu=wo(ni);function Vu(e,t){var n=fr(e);return t==null?n:$r(n,t)}var Hu=Y(function(e,t){e=O(e);var r=-1,i=t.length,a=i>2?t[2]:n;for(a&&Ko(t[0],t[1],a)&&(i=1);++r<i;)for(var o=t[r],s=ad(o),c=-1,l=s.length;++c<l;){var u=s[c],d=e[u];(d===n||Ul(d,pt[u])&&!j.call(e,u))&&(e[u]=o[u])}return e}),Uu=Y(function(e){return e.push(n,yo),dn(ld,n,e)});function Wu(e,t){return Sn(e,X(t,3),vi)}function Gu(e,t){return Sn(e,X(t,3),yi)}function Ku(e,t){return e==null?e:gi(e,X(t,3),ad)}function qu(e,t){return e==null?e:_i(e,X(t,3),ad)}function Ju(e,t){return e&&vi(e,X(t,3))}function Yu(e,t){return e&&yi(e,X(t,3))}function Xu(e){return e==null?[]:bi(e,id(e))}function Zu(e){return e==null?[]:bi(e,ad(e))}function Qu(e,t,r){var i=e==null?n:xi(e,t);return i===n?r:i}function $u(e,t){return e!=null&&zo(e,t,Ti)}function ed(e,t){return e!=null&&zo(e,t,Ei)}var td=ao(function(e,t,n){t!=null&&typeof t.toString!=`function`&&(t=vt.call(t)),e[t]=n},lf(pf)),nd=ao(function(e,t,n){t!=null&&typeof t.toString!=`function`&&(t=vt.call(t)),j.call(e,t)?e[t].push(n):e[t]=[n]},X),rd=Y(Ai);function id(e){return Jl(e)?Gr(e):Ui(e)}function ad(e){return Jl(e)?Gr(e,!0):Wi(e)}function od(e,t){var n={};return t=X(t,3),vi(e,function(e,r,i){ti(n,t(e,r,i),e)}),n}function sd(e,t){var n={};return t=X(t,3),vi(e,function(e,r,i){ti(n,r,t(e,r,i))}),n}var cd=Ja(function(e,t,n){Yi(e,t,n)}),ld=Ja(function(e,t,n,r){Yi(e,t,n,r)}),ud=wo(function(e,t){var n={};if(e==null)return n;var r=!1;t=B(t,function(t){return t=ka(t,e),r||=t.length>1,t}),Wa(e,Eo(e),n),r&&(n=ii(n,7,bo));for(var i=t.length;i--;)xa(n,t[i]);return n});function dd(e,t){return pd(e,El(X(t)))}var fd=wo(function(e,t){return e==null?{}:$i(e,t)});function pd(e,t){if(e==null)return{};var n=B(Eo(e),function(e){return[e]});return t=X(t),ea(e,n,function(e,n){return t(e,n[0])})}function md(e,t,r){t=ka(t,e);var i=-1,a=t.length;for(a||(a=1,e=n);++i<a;){var o=e==null?n:e[gs(t[i])];o===n&&(i=a,o=r),e=au(o)?o.call(e):o}return e}function hd(e,t,n){return e==null?e:la(e,t,n)}function gd(e,t,r,i){return i=typeof i==`function`?i:n,e==null?e:la(e,t,r,i)}var _d=go(id),vd=go(ad);function yd(e,t,n){var r=Z(e),i=r||Zl(e)||wu(e);if(t=X(t,4),n==null){var a=e&&e.constructor;n=i?r?new a:[]:cu(e)&&au(a)?fr(Tt(e)):{}}return(i?pn:vi)(e,function(e,r,i){return t(n,e,r,i)}),n}function bd(e,t){return e==null||xa(e,t)}function xd(e,t,n){return e==null?e:Sa(e,t,Oa(n))}function Sd(e,t,r,i){return i=typeof i==`function`?i:n,e==null?e:Sa(e,t,Oa(r),i)}function Cd(e){return e==null?[]:Fn(e,id(e))}function wd(e){return e==null?[]:Fn(e,ad(e))}function Td(e,t,r){return r===n&&(r=t,t=n),r!==n&&(r=Nu(r),r=r===r?r:0),t!==n&&(t=Nu(t),t=t===t?t:0),ri(Nu(e),t,r)}function Ed(e,t,r){return t=ju(t),r===n?(r=t,t=0):r=ju(r),e=Nu(e),Di(e,t,r)}function Dd(e,t,r){if(r&&typeof r!=`boolean`&&Ko(e,t,r)&&(t=r=n),r===n&&(typeof t==`boolean`?(r=t,t=n):typeof e==`boolean`&&(r=e,e=n)),e===n&&t===n?(e=0,t=1):(e=ju(e),t===n?(t=e,e=0):t=ju(t)),e>t){var i=e;e=t,t=i}if(r||e%1||t%1){var a=Jt();return Gt(e+a*(t-e+Yt(`1e-`+((a+``).length-1))),t)}return ia(e,t)}var Od=$a(function(e,t,n){return t=t.toLowerCase(),e+(n?kd(t):t)});function kd(e){return nf($(e).toLowerCase())}function Ad(e){return e=$(e),e&&e.replace(it,Bn).replace(Rt,``)}function jd(e,t,r){e=$(e),t=ya(t);var i=e.length;r=r===n?i:ri(Q(r),0,i);var a=r;return r-=t.length,r>=0&&e.slice(r,a)==t}function Md(e){return e=$(e),e&&Fe.test(e)?e.replace(Ne,Vn):e}function Nd(e){return e=$(e),e&&Ue.test(e)?e.replace(He,`\\$&`):e}var Pd=$a(function(e,t,n){return e+(n?`-`:``)+t.toLowerCase()}),Fd=$a(function(e,t,n){return e+(n?` `:``)+t.toLowerCase()}),Id=Qa(`toLowerCase`);function Ld(e,t,n){e=$(e),t=Q(t);var r=t?er(e):0;if(!t||r>=t)return e;var i=(t-r)/2;return co(Ft(i),n)+e+co(Pt(i),n)}function Rd(e,t,n){e=$(e),t=Q(t);var r=t?er(e):0;return t&&r<t?e+co(t-r,n):e}function zd(e,t,n){e=$(e),t=Q(t);var r=t?er(e):0;return t&&r<t?co(t-r,n)+e:e}function Bd(e,t,n){return n||t==null?t=0:t&&=+t,qt($(e).replace(We,``),t||0)}function Vd(e,t,r){return t=(r?Ko(e,t,r):t===n)?1:Q(t),oa($(e),t)}function Hd(){var e=arguments,t=$(e[0]);return e.length<3?t:t.replace(e[1],e[2])}var Ud=$a(function(e,t,n){return e+(n?`_`:``)+t.toLowerCase()});function Wd(e,t,r){return r&&typeof r!=`number`&&Ko(e,t,r)&&(t=r=n),r=r===n?y:r>>>0,r?(e=$(e),e&&(typeof t==`string`||t!=null&&!yu(t))&&(t=ya(t),!t&&Wn(e))?ja(tr(e),0,r):e.split(t,r)):[]}var Gd=$a(function(e,t,n){return e+(n?` `:``)+nf(t)});function Kd(e,t,n){return e=$(e),n=n==null?0:ri(Q(n),0,e.length),t=ya(t),e.slice(n,n+t.length)==t}function qd(e,t,r){var i=q.templateSettings;r&&Ko(e,t,r)&&(t=n),e=$(e),t=zu({},t,i,vo);var a=zu({},t.imports,i.imports,vo),o=id(a),s=Fn(a,o);pn(o,function(e){if(Xe.test(e))throw new st("Invalid `imports` option passed into `_.template`")});var c,l,u=0,d=t.interpolate||at,f=`__p += '`,p=ut((t.escape||at).source+`|`+d.source+`|`+(d===Re?D:at).source+`|`+(t.evaluate||at).source+`|$`,`g`),m=`//# sourceURL=`+(j.call(t,`sourceURL`)?(t.sourceURL+``).replace(/\s/g,` `):`lodash.templateSources[`+ ++Wt+`]`)+`
`;e.replace(p,function(t,n,r,i,a,o){return r||=i,f+=e.slice(u,o).replace(ot,Hn),n&&(c=!0,f+=`' +
__e(`+n+`) +
'`),a&&(l=!0,f+=`';
`+a+`;
__p += '`),r&&(f+=`' +
((__t = (`+r+`)) == null ? '' : __t) +
'`),u=o+t.length,t}),f+=`';
`;var h=j.call(t,`variable`)&&t.variable;if(!h)f=`with (obj) {
`+f+`
}
`;else if(Xe.test(h))throw new st("Invalid `variable` option passed into `_.template`");f=(l?f.replace(ke,``):f).replace(Ae,`$1`).replace(je,`$1;`),f=`function(`+(h||`obj`)+`) {
`+(h?``:`obj || (obj = {});
`)+`var __t, __p = ''`+(c?`, __e = _.escape`:``)+(l?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+f+`return __p
}`;var g=af(function(){return ct(o,m+`return `+f).apply(n,s)});if(g.source=f,ru(g))throw g;return g}function Jd(e){return $(e).toLowerCase()}function Yd(e){return $(e).toUpperCase()}function Xd(e,t,r){if(e=$(e),e&&(r||t===n))return Nn(e);if(!e||!(t=ya(t)))return e;var i=tr(e),a=tr(t);return ja(i,Ln(i,a),Rn(i,a)+1).join(``)}function Zd(e,t,r){if(e=$(e),e&&(r||t===n))return e.slice(0,nr(e)+1);if(!e||!(t=ya(t)))return e;var i=tr(e);return ja(i,0,Rn(i,tr(t))+1).join(``)}function Qd(e,t,r){if(e=$(e),e&&(r||t===n))return e.replace(We,``);if(!e||!(t=ya(t)))return e;var i=tr(e);return ja(i,Ln(i,tr(t))).join(``)}function $d(e,t){var r=30,i=`...`;if(cu(t)){var a=`separator`in t?t.separator:a;r=`length`in t?Q(t.length):r,i=`omission`in t?ya(t.omission):i}e=$(e);var o=e.length;if(Wn(e)){var s=tr(e);o=s.length}if(r>=o)return e;var c=r-er(i);if(c<1)return i;var l=s?ja(s,0,c).join(``):e.slice(0,c);if(a===n)return l+i;if(s&&(c+=l.length-c),yu(a)){if(e.slice(c).search(a)){var u,d=l;for(a.global||(a=ut(a.source,$(Qe.exec(a))+`g`)),a.lastIndex=0;u=a.exec(d);)var f=u.index;l=l.slice(0,f===n?c:f)}}else if(e.indexOf(ya(a),c)!=c){var p=l.lastIndexOf(a);p>-1&&(l=l.slice(0,p))}return l+i}function ef(e){return e=$(e),e&&Pe.test(e)?e.replace(Me,rr):e}var tf=$a(function(e,t,n){return e+(n?` `:``)+t.toUpperCase()}),nf=Qa(`toUpperCase`);function rf(e,t,r){return e=$(e),t=r?n:t,t===n?Gn(e)?ar(e):U(e):e.match(t)||[]}var af=Y(function(e,t){try{return dn(e,n,t)}catch(e){return ru(e)?e:new st(e)}}),of=wo(function(e,t){return pn(t,function(t){t=gs(t),ti(e,t,_l(e[t],e))}),e});function sf(e){var t=e==null?0:e.length,n=X();return e=t?B(e,function(e){if(typeof e[1]!=`function`)throw new k(r);return[n(e[0]),e[1]]}):[],Y(function(n){for(var r=-1;++r<t;){var i=e[r];if(dn(i[0],this,n))return dn(i[1],this,n)}})}function cf(e){return ai(ii(e,1))}function lf(e){return function(){return e}}function uf(e,t){return e==null||e!==e?t:e}var df=ro(),ff=ro(!0);function pf(e){return e}function mf(e){return Hi(typeof e==`function`?e:ii(e,1))}function hf(e){return qi(ii(e,1))}function gf(e,t){return Ji(e,ii(t,1))}var _f=Y(function(e,t){return function(n){return Ai(n,e,t)}}),vf=Y(function(e,t){return function(n){return Ai(e,n,t)}});function yf(e,t,n){var r=id(t),i=bi(t,r);n==null&&(!cu(t)||!i.length&&r.length)&&(n=t,t=e,e=this,i=bi(t,id(t)));var a=!(cu(n)&&`chain`in n)||!!n.chain,o=au(e);return pn(i,function(n){var r=t[n];e[n]=r,o&&(e.prototype[n]=function(){var t=this.__chain__;if(a||t){var n=e(this.__wrapped__);return(n.__actions__=Ua(this.__actions__)).push({func:r,args:arguments,thisArg:e}),n.__chain__=t,n}return r.apply(e,vn([this.value()],arguments))})}),e}function bf(){return $t._===this&&($t._=yt),this}function xf(){}function Sf(e){return e=Q(e),Y(function(t){return Zi(t,e)})}var Cf=so(B),wf=so(hn),Tf=so(bn);function Ef(e){return qo(e)?En(gs(e)):ta(e)}function Df(e){return function(t){return e==null?n:xi(e,t)}}var Of=uo(),kf=uo(!0);function Af(){return[]}function jf(){return!1}function Mf(){return{}}function Nf(){return``}function Pf(){return!0}function Ff(e,t){if(e=Q(e),e<1||e>g)return[];var n=y,r=Gt(e,y);t=X(t),e-=y;for(var i=jn(r,t);++n<e;)t(n);return i}function If(e){return Z(e)?B(e,gs):Cu(e)?[e]:Ua(hs($(e)))}function Lf(e){var t=++gt;return $(e)+t}var Rf=oo(function(e,t){return e+t},0),zf=mo(`ceil`),Bf=oo(function(e,t){return e/t},1),Vf=mo(`floor`);function Hf(e){return e&&e.length?fi(e,pf,wi):n}function Uf(e,t){return e&&e.length?fi(e,X(t,2),wi):n}function Wf(e){return G(e,pf)}function Gf(e,t){return G(e,X(t,2))}function Kf(e){return e&&e.length?fi(e,pf,Gi):n}function qf(e,t){return e&&e.length?fi(e,X(t,2),Gi):n}var Jf=oo(function(e,t){return e*t},1),Yf=mo(`round`),Xf=oo(function(e,t){return e-t},0);function Zf(e){return e&&e.length?An(e,pf):0}function Qf(e,t){return e&&e.length?An(e,X(t,2)):0}return q.after=ml,q.ary=hl,q.assign=Iu,q.assignIn=Lu,q.assignInWith=Ru,q.assignWith=zu,q.at=Bu,q.before=gl,q.bind=_l,q.bindAll=of,q.bindKey=vl,q.castArray=Ll,q.chain=Ac,q.chunk=bs,q.compact=xs,q.concat=Ss,q.cond=sf,q.conforms=cf,q.constant=lf,q.countBy=Vc,q.create=Vu,q.curry=yl,q.curryRight=bl,q.debounce=xl,q.defaults=Hu,q.defaultsDeep=Uu,q.defer=Sl,q.delay=Cl,q.difference=Cs,q.differenceBy=ws,q.differenceWith=Ts,q.drop=Es,q.dropRight=Ds,q.dropRightWhile=Os,q.dropWhile=ks,q.fill=As,q.filter=Uc,q.flatMap=Kc,q.flatMapDeep=qc,q.flatMapDepth=Jc,q.flatten=Ns,q.flattenDeep=Ps,q.flattenDepth=Fs,q.flip=wl,q.flow=df,q.flowRight=ff,q.fromPairs=Is,q.functions=Xu,q.functionsIn=Zu,q.groupBy=Zc,q.initial=zs,q.intersection=Bs,q.intersectionBy=Vs,q.intersectionWith=Hs,q.invert=td,q.invertBy=nd,q.invokeMap=$c,q.iteratee=mf,q.keyBy=el,q.keys=id,q.keysIn=ad,q.map=tl,q.mapKeys=od,q.mapValues=sd,q.matches=hf,q.matchesProperty=gf,q.memoize=Tl,q.merge=cd,q.mergeWith=ld,q.method=_f,q.methodOf=vf,q.mixin=yf,q.negate=El,q.nthArg=Sf,q.omit=ud,q.omitBy=dd,q.once=Dl,q.orderBy=nl,q.over=Cf,q.overArgs=Ol,q.overEvery=wf,q.overSome=Tf,q.partial=kl,q.partialRight=Al,q.partition=rl,q.pick=fd,q.pickBy=pd,q.property=Ef,q.propertyOf=Df,q.pull=qs,q.pullAll=Js,q.pullAllBy=Ys,q.pullAllWith=Xs,q.pullAt=Zs,q.range=Of,q.rangeRight=kf,q.rearg=jl,q.reject=ol,q.remove=Qs,q.rest=Ml,q.reverse=$s,q.sampleSize=cl,q.set=hd,q.setWith=gd,q.shuffle=ll,q.slice=ec,q.sortBy=fl,q.sortedUniq=sc,q.sortedUniqBy=cc,q.split=Wd,q.spread=Nl,q.tail=lc,q.take=uc,q.takeRight=dc,q.takeRightWhile=fc,q.takeWhile=pc,q.tap=jc,q.throttle=Pl,q.thru=Mc,q.toArray=Au,q.toPairs=_d,q.toPairsIn=vd,q.toPath=If,q.toPlainObject=Pu,q.transform=yd,q.unary=Fl,q.union=mc,q.unionBy=hc,q.unionWith=gc,q.uniq=_c,q.uniqBy=vc,q.uniqWith=yc,q.unset=bd,q.unzip=bc,q.unzipWith=xc,q.update=xd,q.updateWith=Sd,q.values=Cd,q.valuesIn=wd,q.without=Sc,q.words=rf,q.wrap=Il,q.xor=Cc,q.xorBy=wc,q.xorWith=Tc,q.zip=Ec,q.zipObject=Dc,q.zipObjectDeep=Oc,q.zipWith=kc,q.entries=_d,q.entriesIn=vd,q.extend=Lu,q.extendWith=Ru,yf(q,q),q.add=Rf,q.attempt=af,q.camelCase=Od,q.capitalize=kd,q.ceil=zf,q.clamp=Td,q.clone=Rl,q.cloneDeep=Bl,q.cloneDeepWith=Vl,q.cloneWith=zl,q.conformsTo=Hl,q.deburr=Ad,q.defaultTo=uf,q.divide=Bf,q.endsWith=jd,q.eq=Ul,q.escape=Md,q.escapeRegExp=Nd,q.every=Hc,q.find=Wc,q.findIndex=js,q.findKey=Wu,q.findLast=Gc,q.findLastIndex=Ms,q.findLastKey=Gu,q.floor=Vf,q.forEach=Yc,q.forEachRight=Xc,q.forIn=Ku,q.forInRight=qu,q.forOwn=Ju,q.forOwnRight=Yu,q.get=Qu,q.gt=Wl,q.gte=Gl,q.has=$u,q.hasIn=ed,q.head=Ls,q.identity=pf,q.includes=Qc,q.indexOf=Rs,q.inRange=Ed,q.invoke=rd,q.isArguments=Kl,q.isArray=Z,q.isArrayBuffer=ql,q.isArrayLike=Jl,q.isArrayLikeObject=Yl,q.isBoolean=Xl,q.isBuffer=Zl,q.isDate=Ql,q.isElement=$l,q.isEmpty=eu,q.isEqual=tu,q.isEqualWith=nu,q.isError=ru,q.isFinite=iu,q.isFunction=au,q.isInteger=ou,q.isLength=su,q.isMap=uu,q.isMatch=du,q.isMatchWith=fu,q.isNaN=pu,q.isNative=mu,q.isNil=gu,q.isNull=hu,q.isNumber=_u,q.isObject=cu,q.isObjectLike=lu,q.isPlainObject=vu,q.isRegExp=yu,q.isSafeInteger=bu,q.isSet=xu,q.isString=Su,q.isSymbol=Cu,q.isTypedArray=wu,q.isUndefined=Tu,q.isWeakMap=Eu,q.isWeakSet=Du,q.join=Us,q.kebabCase=Pd,q.last=Ws,q.lastIndexOf=Gs,q.lowerCase=Fd,q.lowerFirst=Id,q.lt=Ou,q.lte=ku,q.max=Hf,q.maxBy=Uf,q.mean=Wf,q.meanBy=Gf,q.min=Kf,q.minBy=qf,q.stubArray=Af,q.stubFalse=jf,q.stubObject=Mf,q.stubString=Nf,q.stubTrue=Pf,q.multiply=Jf,q.nth=Ks,q.noConflict=bf,q.noop=xf,q.now=pl,q.pad=Ld,q.padEnd=Rd,q.padStart=zd,q.parseInt=Bd,q.random=Dd,q.reduce=il,q.reduceRight=al,q.repeat=Vd,q.replace=Hd,q.result=md,q.round=Yf,q.runInContext=e,q.sample=sl,q.size=ul,q.snakeCase=Ud,q.some=dl,q.sortedIndex=tc,q.sortedIndexBy=nc,q.sortedIndexOf=rc,q.sortedLastIndex=ic,q.sortedLastIndexBy=ac,q.sortedLastIndexOf=oc,q.startCase=Gd,q.startsWith=Kd,q.subtract=Xf,q.sum=Zf,q.sumBy=Qf,q.template=qd,q.times=Ff,q.toFinite=ju,q.toInteger=Q,q.toLength=Mu,q.toLower=Jd,q.toNumber=Nu,q.toSafeInteger=Fu,q.toString=$,q.toUpper=Yd,q.trim=Xd,q.trimEnd=Zd,q.trimStart=Qd,q.truncate=$d,q.unescape=ef,q.uniqueId=Lf,q.upperCase=tf,q.upperFirst=nf,q.each=Yc,q.eachRight=Xc,q.first=Ls,yf(q,function(){var e={};return vi(q,function(t,n){j.call(q.prototype,n)||(e[n]=t)}),e}(),{chain:!1}),q.VERSION=`4.18.1`,pn([`bind`,`bindKey`,`curry`,`curryRight`,`partial`,`partialRight`],function(e){q[e].placeholder=q}),pn([`drop`,`take`],function(e,t){J.prototype[e]=function(r){r=r===n?1:Ht(Q(r),0);var i=this.__filtered__&&!t?new J(this):this.clone();return i.__filtered__?i.__takeCount__=Gt(r,i.__takeCount__):i.__views__.push({size:Gt(r,y),type:e+(i.__dir__<0?`Right`:``)}),i},J.prototype[e+`Right`]=function(t){return this.reverse()[e](t).reverse()}}),pn([`filter`,`map`,`takeWhile`],function(e,t){var n=t+1,r=n==1||n==3;J.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:X(e,3),type:n}),t.__filtered__=t.__filtered__||r,t}}),pn([`head`,`last`],function(e,t){var n=`take`+(t?`Right`:``);J.prototype[e]=function(){return this[n](1).value()[0]}}),pn([`initial`,`tail`],function(e,t){var n=`drop`+(t?``:`Right`);J.prototype[e]=function(){return this.__filtered__?new J(this):this[n](1)}}),J.prototype.compact=function(){return this.filter(pf)},J.prototype.find=function(e){return this.filter(e).head()},J.prototype.findLast=function(e){return this.reverse().find(e)},J.prototype.invokeMap=Y(function(e,t){return typeof e==`function`?new J(this):this.map(function(n){return Ai(n,e,t)})}),J.prototype.reject=function(e){return this.filter(El(X(e)))},J.prototype.slice=function(e,t){e=Q(e);var r=this;return r.__filtered__&&(e>0||t<0)?new J(r):(e<0?r=r.takeRight(-e):e&&(r=r.drop(e)),t!==n&&(t=Q(t),r=t<0?r.dropRight(-t):r.take(t-e)),r)},J.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},J.prototype.toArray=function(){return this.take(y)},vi(J.prototype,function(e,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),i=/^(?:head|last)$/.test(t),a=q[i?`take`+(t==`last`?`Right`:``):t],o=i||/^find/.test(t);a&&(q.prototype[t]=function(){var t=this.__wrapped__,s=i?[1]:arguments,c=t instanceof J,l=s[0],u=c||Z(t),d=function(e){var t=a.apply(q,vn([e],s));return i&&f?t[0]:t};u&&r&&typeof l==`function`&&l.length!=1&&(c=u=!1);var f=this.__chain__,p=!!this.__actions__.length,m=o&&!f,h=c&&!p;if(!o&&u){t=h?t:new J(this);var g=e.apply(t,s);return g.__actions__.push({func:Mc,args:[d],thisArg:n}),new mr(g,f)}return m&&h?e.apply(this,s):(g=this.thru(d),m?i?g.value()[0]:g.value():g)})}),pn([`pop`,`push`,`shift`,`sort`,`splice`,`unshift`],function(e){var t=A[e],n=/^(?:push|sort|unshift)$/.test(e)?`tap`:`thru`,r=/^(?:pop|shift)$/.test(e);q.prototype[e]=function(){var e=arguments;if(r&&!this.__chain__){var i=this.value();return t.apply(Z(i)?i:[],e)}return this[n](function(n){return t.apply(Z(n)?n:[],e)})}}),vi(J.prototype,function(e,t){var n=q[t];if(n){var r=n.name+``;j.call(Dn,r)||(Dn[r]=[]),Dn[r].push({name:t,func:n})}}),Dn[io(n,s).name]=[{name:`wrapper`,func:n}],J.prototype.clone=hr,J.prototype.reverse=gr,J.prototype.value=_r,q.prototype.at=Nc,q.prototype.chain=Pc,q.prototype.commit=Fc,q.prototype.next=Ic,q.prototype.plant=Rc,q.prototype.reverse=zc,q.prototype.toJSON=q.prototype.valueOf=q.prototype.value=Bc,q.prototype.first=q.prototype.head,kt&&(q.prototype[kt]=Lc),q})();typeof define==`function`&&typeof define.amd==`object`&&define.amd?($t._=or,define(function(){return or})):R?((R.exports=or)._=or,en._=or):$t._=or}).call(e)}))(),Rt=y(`<code class=code-tag>`),zt=e=>new Promise(t=>{setTimeout(()=>{t(e)},1200)}),Bt=(e,t)=>{let n=e.getOption().series;Array.isArray(n)&&t(n.filter(Boolean).length)},Vt=e=>{let t=e.getOption().series;return Array.isArray(t)?t.filter(Boolean).length:0},Ht=(e,t)=>Array.from({length:t},(t,n)=>{let r=e+n;return[r,Math.sin(r/20)*100+Math.random()*30]}),Ut=(e,t,n,r)=>i=>{let a=e(),o=a;i.key===`ArrowRight`&&(i.preventDefault(),o=(a+1)%n),i.key===`ArrowLeft`&&(i.preventDefault(),o=(a-1+n)%n),o!==a&&(t(o),r(A.highlight({seriesIndex:0,dataIndex:o})))},Wt=()=>new Date().toLocaleTimeString(`en`,{hour12:!1}),I=e=>e+1,L=(e,t,n,r)=>{let i=!t.target;e(e=>[{time:Wt(),event:n,x:Math.round(t.offsetX),y:Math.round(t.offsetY),onBlank:i,once:r},...e].slice(0,15))},Gt=e=>e.replaceAll(/[.*+?^${}()|[\]\\]/g,`\\$&`),Kt=e=>{let t=Gt(e);return/[^\w]/.test(e)?t:String.raw`\b${t}\b`},qt=e=>e.replaceAll(/[-\\\]^]/g,`\\$&`),Jt=(e,t)=>{let n=Gt(e),r=Gt(t),i=qt(e),a=qt(t);return String.raw`${n}[^${i}${a}]*?${r}`},Yt=[String.raw`chart\.[a-zA-Z_$][\w$]*\(\)`],Xt=Jt(`<`,`>`),Zt=Jt(`{`,`}`),Qt=RegExp(`(${[...Yt,Xt,Zt,...It.toSorted((e,t)=>t.length-e.length).map(e=>Kt(e))].join(`|`)})`,`g`),$t=RegExp(`^(${Qt.source})$`),en=e=>{let t=e.split(Qt);return n(h,{each:t,children:e=>$t.test(e)?(()=>{var t=Rt();return T(t,e),t})():e})},R=e=>(0,Lt.merge)({},e,Ct),tn=e=>Array.isArray(e)?e.map(e=>(0,Lt.merge)({},e,wt)):(0,Lt.merge)({},e,wt),nn=await Be({langs:[Ve],themes:[Ue],engine:He()}),rn=e=>{if(!e||e.isDisposed())return`-`;let t=e.getVisual({seriesIndex:0},`color`);return typeof t==`string`?t.toLowerCase():`-`},an=(e,t)=>typeof e==`object`&&e?Reflect.get(e,t):void 0,on=(e,t)=>{let n=an(e,t);return Array.isArray(n)?n:[]},sn=(e,t)=>{let n=an(e,t);return typeof n==`number`?n:void 0},cn=(e,t,n=0)=>an(on(e.getOption(),`series`)[n],t),ln=e=>typeof e==`number`?String(Number(e.toFixed(2))):typeof e==`boolean`||typeof e==`string`?String(e):null,un=e=>Object.entries(e).flatMap(([e,t])=>{let n=ln(t);return e!==`type`&&n!==null?[`${e}=${n}`]:[]}).join(` `),dn=(e,t)=>e.split(` `).find(e=>e.startsWith(`${t}=`))??`${t} missing`,fn=y(`<span class="i-lucide-copy size-5">`),pn=y(`<div class="flex gap-1 items-center right-5 top-2 absolute">`),mn=y(`<span class="i-lucide-check size-5">`),hn=`focus-ring flex cursor-pointer items-center justify-center rounded text-brand-300 transition-colors duration-300 hover:text-brand-100`,z=e=>{let t=()=>nn.codeToHtml(e.code,{lang:`tsx`,theme:`github-dark`});return n(m.Root,{get collapsedHeight(){return e.collapsedHeight??200},class:`w-full relative`,get children(){return[n(m.Content,{class:`collapsible-content rounded-lg overflow-auto`,get innerHTML(){return t()}}),(()=>{var t=pn();return T(t,n(m.Trigger,{class:hn,get children(){return n(m.Context,{children:e=>e().open?`Less`:`More`})}}),null),T(t,n(ne.Root,{get value(){return e.code},get children(){return n(ne.Trigger,{class:hn,"aria-label":`Copy code`,get children(){return n(ne.Indicator,{get copied(){return mn()},get children(){return fn()}})}})}}),null),t})()]}})},gn=y(`<div class="p-3 rounded bg-brand-100/70 flex flex-col gap-1 w-full items-center justify-center">`),_n=y(`<div>`),B=y(`<p class="text-xs font-bold whitespace-nowrap">`),vn=y(`<p class="text-xs text-brand-500">`),yn=e=>{let i=t({centerItems:!0},e);return(()=>{var e=_n();return T(e,n(E,{get when(){return i.title||i.note},get children(){var e=gn();return T(e,n(E,{get when(){return i.title},children:e=>(()=>{var t=B();return T(t,e),t})()}),null),T(e,n(E,{get when(){return i.note},children:e=>(()=>{var t=vn();return T(t,e),t})()}),null),e}}),null),T(e,()=>i.children,null),r(()=>C(e,Dt(`p-4 border border-brand-300/50 rounded-lg bg-brand-100/30 flex flex-col gap-2 h-full`,i.centerItems&&`items-center`,i.class))),e})()},V=e=>{let[r,i]=u(e,[`containerProps`]),a=t({chart:_t},i);return n(yn,t(()=>r.containerProps,{get children(){return n(ae,t({get component(){return a.chart}},a))}}))},bn=y(`<div>`),xn=e=>n=>{let[r,i]=u(n,[`class`]);return(()=>{var n=bn();return b(n,t(i,{get class(){return Dt(e,r.class)}}),!1,!1),n})()},H=xn(`w-full flex-1 overflow-y-auto p-6`),U=xn(`w-full bg-brand-900 p-4`),Sn=()=>{let[e,t]=l(!1),[n,r]=l(`-`),[i,a]=l(`-`),[o,s]=l(`-`);return{removeSeries:e,setRemoveSeries:t,countA:n,setCountA:r,countB:i,setCountB:a,countC:o,setCountC:s}},Cn=e=>{let{setCountA:t,setCountB:n,setCountC:r}=e;return{finishedA:(e,n)=>{Bt(n,t)},finishedB:(e,t)=>{Bt(t,n)},finishedC:(e,t)=>{Bt(t,r)}}},wn=e=>{let{removeSeries:t,countA:n,countB:r,countC:i}=e;return[{label:`Initial state - all charts agree on series count`,expected:()=>t()?`varies`:`2 / 2 / 3`,actual:()=>`${n()} / ${r()} / ${i()}`,pass:()=>t()?!0:n()===2&&r()===2&&i()===3},{label:`autoMerge: false - removed series persists (normalMerge keeps ghost)`,expected:()=>t()?`2 (ghost lingers)`:`2`,actual:()=>n()===`-`?`-`:String(n()),pass:()=>n()===2},{label:`autoMerge: true (anonymous) - series count matches option (replaceMerge inferred)`,expected:()=>t()?`1`:`2`,actual:()=>r()===`-`?`-`:String(r()),pass:()=>t()?r()===1:r()===2},{label:`autoMerge: true (with id) - 'exp' removal detected, Expenses gone (replaceMerge inferred)`,expected:()=>t()?`2`:`3`,actual:()=>i()===`-`?`-`:String(i()),pass:()=>t()?i()===2:i()===3}]},W=[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`],Tn=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],G=[820,932,901,934,1290,1330,1320],En=[620,732,701,734,1090,1030,980],Dn=[900,850,980,1050,1200,1150,1100],On=[...G,900,870,1100,1200,1400],kn=[...En,700,650,900,1050,1200],An=[400,500,550,600,800,750,900,850,780,950,1e3,1100],jn=[`A`,`B`,`C`,`D`,`E`],Mn=[150,230,224,218,135],Nn={CATEGORIES:W,TWO_SERIES:[{name:`Revenue`,type:`bar`,data:G},{name:`Expenses`,type:`bar`,data:En}],THREE_SERIES_WITH_IDS:[{id:`rev`,name:`Revenue`,type:`bar`,data:G},{id:`exp`,name:`Expenses`,type:`bar`,data:En},{id:`fore`,name:`Forecast`,type:`bar`,data:Dn}],TWO_SERIES_WITH_IDS:[{id:`rev`,name:`Revenue`,type:`bar`,data:G},{id:`fore`,name:`Forecast`,type:`bar`,data:Dn}]},Pn={CATEGORIES:W,THREE_SERIES:[{name:`Alpha`,type:`bar`,data:G},{name:`Beta`,type:`bar`,data:En},{name:`Gamma`,type:`bar`,data:Dn}],ONE_SERIES:[{name:`Alpha`,type:`bar`,data:G}]},Fn=[{name:`Mon`,value:820},{name:`Tue`,value:932},{name:`Wed`,value:901},{name:`Thu`,value:934},{name:`Fri`,value:1290}],In={initialSeries:[{name:`Revenue`,type:`bar`,data:G},{name:`Expenses`,type:`line`,data:En}],replacementSeries:[{name:`Forecast`,type:`bar`,data:Dn}]},Ln=Tn,Rn=On,zn=kn,Bn=On,Vn=On,Hn=Tn,Un=On,Wn=kn,Gn=`dashboard`,Kn=[{label:`Q1`,values:[120,200,150,80,70,110,180]},{label:`Q2`,values:[80,160,210,140,90,180,60]},{label:`Q3`,values:[200,90,130,170,220,95,170]}],qn=[`bar`,`line`,`scatter`],Jn=Nn.TWO_SERIES,Yn=Nn.THREE_SERIES_WITH_IDS,Xn=Nn.TWO_SERIES_WITH_IDS,Zn=e=>{let{removeSeries:t}=e,n=(e,n)=>R({tooltip:{trigger:`axis`},xAxis:{type:`category`,data:Nn.CATEGORIES},yAxis:{type:`value`},series:t()?e:n});return{optionNoId:()=>n(Jn.slice(0,1),Jn),optionWithId:()=>n(Xn,Yn)}},Qn=y(`<span>Series: Expenses`),$n=y(`<span>(charts react differently)`),er=()=>{let e=Sn(),t=Cn(e),n=wn(e),r=Zn(e);return{...e,...t,checklist:n,...r}},tr=()=>{let{removeSeries:e,setRemoveSeries:t,finishedA:r,finishedB:i,finishedC:a,optionNoId:o,optionWithId:s,checklist:c}=er();return n(D,{get theme(){return M.name},get children(){return[n(U,{class:`gap-4 grid grid-cols-3`,get children(){return[n(V,{containerProps:{title:`autoMerge: false (default)`,note:`Ghost series linger after removal`},option:o,class:`chart-sm`,autoMerge:!1,onEvents:{finished:r}}),n(V,{containerProps:{title:`autoMerge: true (anonymous)`,note:`noIdCount diff → replaceMerge: ['series']`},option:o,class:`chart-sm`,autoMerge:!0,onEvents:{finished:i}}),n(V,{containerProps:{title:`autoMerge: true (with id)`,note:`hasMissingIds → replaceMerge: ['series']`},option:s,class:`chart-sm`,autoMerge:!0,onEvents:{finished:a}})]}}),n(H,{get children(){return[n(jt,{get children(){return[Qn(),n(E,{get when(){return!e()},get children(){return $n()}})]}}),n(F,{sections:[{items:c}]}),n(P,{get children(){return n(N,{onClick:()=>{t(e=>!e)},get children(){return e()?`Restore series`:`Remove a series`}})}}),n(z,{code:Tt})]}})]}})},nr=`import type { Component } from "solid-js";
import { createSignal } from "solid-js";

import type { EChartsOption, EChartsType } from "@amad3v/solid-echarts";
import { DEFAULT_THEME, SolidEChart, SolidEChartProvider } from "@amad3v/solid-echarts";

const FULL_WIDTH = "100%";
const HALF_WIDTH = "50%";
const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const WEEK_DATA_1 = [820, 932, 901, 934, 1290, 1330, 1320];

const createExample = () => {
  const state = createState();
  const actions = makeActions(state);
  const option = makeOption;

  return {
    ...state,
    ...actions,
    option,
  };
};

export const Example: Component = () => {
  const {
    autoResize,
    handleInit,
    handleResize,
    option,
    toggleAutoResize,
    toggleWidth,
    containerWidth,
  } = createExample();

  return (
    <SolidEChartProvider theme={DEFAULT_THEME}>
      <div
        style={{
          width: containerWidth(),
        }}
      >
        <SolidEChart
          option={option}
          autoResize={autoResize}
          style={{ width: "100%", height: "280px" }}
          onInit={handleInit}
          onResize={handleResize}
        />
      </div>

      <button onClick={toggleWidth}>{"Toggle container width (100% <-> 50%)"}</button>
      <button onClick={toggleAutoResize}>
        {\`Toggle autoResize (currently: \${autoResize() ? "on" : "off"})\`}
      </button>
    </SolidEChartProvider>
  );
};

const createState = () => {
  const [autoResize, setAutoResize] = createSignal(true);
  const [containerWidth, setContainerWidth] = createSignal(FULL_WIDTH);
  const [chartWidth, setChartWidth] = createSignal<number | null>(null);
  const [widthTogglesOn, setWidthTogglesOn] = createSignal(0);
  const [widthTogglesOff, setWidthTogglesOff] = createSignal(0);

  return {
    setAutoResize,
    setChartWidth,
    setContainerWidth,
    setWidthTogglesOff,
    setWidthTogglesOn,
    autoResize,
    containerWidth,
    chartWidth,
    widthTogglesOn,
    widthTogglesOff,
  };
};

type State = ReturnType<typeof createState>;

const makeActions = (state: State) => {
  let chartRef: EChartsType | null = null;

  const {
    setContainerWidth,
    setChartWidth,
    setWidthTogglesOn,
    setWidthTogglesOff,
    autoResize,
    setAutoResize,
  } = state;

  const toggleWidth = () => {
    setContainerWidth((w) => (w === FULL_WIDTH ? HALF_WIDTH : FULL_WIDTH));
    if (autoResize()) setWidthTogglesOn(increment);
    else setWidthTogglesOff(increment);
  };

  const toggleAutoResize = () => {
    setAutoResize((on) => {
      return !on;
    });
  };

  const handleInit = (chart: EChartsType) => {
    chartRef = chart;
    setChartWidth(chart.getWidth());
  };

  const handleResize = () => {
    if (chartRef && !chartRef.isDisposed()) {
      setChartWidth(chartRef.getWidth());
    }
  };

  return {
    toggleAutoResize,
    toggleWidth,
    handleInit,
    handleResize,
  };
};

const makeOption = (): EChartsOption => ({
  tooltip: { trigger: "axis" },
  xAxis: { type: "category", data: WEEK_DAYS },
  yAxis: { type: "value" },
  series: [
    {
      type: "line",
      smooth: true,
      data: WEEK_DATA_1,
    },
  ],
});

const increment = (n: number) => n + 1;
`,rr=y(`<div class="text-xs text-brand-950 leading-[1.8] font-mono mb-4 px-3 py-2 panel">`),K=e=>(()=>{var t=rr();return T(t,()=>e.children),t})(),ir=()=>{let[e,t]=l(!0),[n,r]=l(vt),[i,a]=l(0),[o,s]=l(0),[c,u]=l(0),[d,f]=l(null),[p,m]=l(0),[h,g]=l(0),[_,v]=l(0);return{autoResize:e,setAutoResize:t,containerWidth:n,setContainerWidth:r,initCount:i,setInitCount:a,reInitCount:o,setReInitCount:s,resizeCount:c,setResizeCount:u,chartWidth:d,setChartWidth:f,widthTogglesOn:p,setWidthTogglesOn:m,widthTogglesOff:h,setWidthTogglesOff:g,resizeSnapshot:_,setResizeSnapshot:v}},ar=e=>{let t=null,{setContainerWidth:n,setInitCount:r,setReInitCount:i,resizeCount:a,setResizeCount:o,setChartWidth:s,setWidthTogglesOn:c,setWidthTogglesOff:l,autoResize:u,setAutoResize:d,setResizeSnapshot:f}=e;return{toggleAutoResize:()=>{let e=u();e&&f(a()),d(!e)},toggleWidth:()=>{n(e=>e===`100%`?`50%`:vt),u()?c(I):l(I)},handleInit:e=>{t=e,r(I),s(e.getWidth())},handleReInit:()=>{i(I)},handleResize:()=>{t&&!t.isDisposed()&&s(t.getWidth()),o(I)}}},or=e=>{let{autoResize:t,initCount:n,reInitCount:r,resizeCount:i,chartWidth:a,widthTogglesOn:o,widthTogglesOff:s,resizeSnapshot:c}=e;return[{label:`No reinit - toggling autoResize must never recreate the instance`,expected:()=>`onInit 1, onReInit 0`,actual:()=>`onInit ${n()}, onReInit ${r()}`,pass:()=>n()===1&&r()===0},{label:`autoResize: true - onResize fires after container width changes`,expected:()=>o()>0?`≥ 1 resize`:`toggle width with autoResize on`,actual:()=>`${i()} resize${i()===1?``:`s`}`,pass:()=>o()===0||i()>0},{label:`autoResize: false - onResize does not fire when container changes`,expected:()=>s()>0?`frozen at ${c()}`:`toggle width with autoResize off`,actual:()=>String(i()),pass:()=>!t()&&s()>0?i()===c():!0},{label:`onResize callback - chart canvas width readable after resize`,expected:()=>`updates after each resize`,actual:()=>a()===null?`-`:`${String(a())}px`,pass:()=>a()!==null}]},sr=()=>R({tooltip:{trigger:`axis`},xAxis:{type:`category`,data:W},yAxis:{type:`value`},series:tn([{type:`line`,smooth:!0,data:G}])}),cr=y(`<div>autoResize: <strong>`),lr=y(`<div>Container width: <strong>`),ur=y(`<div>Width toggles - on: <strong></strong> / off: <strong>`),dr=()=>{let e=ir(),t=ar(e),n=or(e),r=sr;return{...e,...t,checklist:n,option:r}},q=()=>{let{autoResize:e,checklist:t,containerWidth:r,handleInit:i,handleReInit:a,handleResize:o,option:s,toggleAutoResize:c,toggleWidth:l,widthTogglesOff:u,widthTogglesOn:d}=dr();return n(D,{get theme(){return M.name},get children(){return[n(U,{get style(){return{width:r()}},class:`transition-[width] duration-300`,get children(){return n(V,{option:s,autoResize:e,class:`chart-md`,onInit:i,onReInit:a,onResize:o})}}),n(H,{get children(){return[n(F,{sections:[{items:t}]}),n(K,{get children(){return[(()=>{var t=cr(),n=t.firstChild.nextSibling;return T(n,()=>e()?`true`:`false`),t})(),(()=>{var e=lr(),t=e.firstChild.nextSibling;return T(t,r),e})(),(()=>{var e=ur(),t=e.firstChild.nextSibling,n=t.nextSibling.nextSibling;return T(t,d),T(n,u),e})()]}}),n(P,{get children(){return[n(N,{onClick:l,children:`Toggle container width (100% ↔ 50%)`}),n(N,{onClick:c,get children(){return`Toggle autoResize (currently: ${e()?`on`:`off`})`}})]}}),n(z,{code:nr})]}})]}})},fr=`import type { Component } from "solid-js";
import { batch, createSignal } from "solid-js";

import type { EChartsOption } from "@amad3v/solid-echarts";
import { SolidEChart } from "@amad3v/solid-echarts";

export const Example: Component = () => {
  const [data, setData] = createSignal([820, 932, 901, 934, 1290, 1330, 1320]);
  const [name, setName] = createSignal("Run 0");
  const [color, setColor] = createSignal("#fb628b");

  // One option fed by three signals: every change re-runs the library's effect
  // and calls chart.setOption (which renders synchronously).
  const option = (): EChartsOption => ({
    xAxis: { type: "category", data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
    yAxis: { type: "value" },
    series: [{ name: name(), type: "line", data: data(), lineStyle: { color: color() } }],
  });

  const next = () => ({
    data: Array.from({ length: 7 }, () => Math.round(Math.random() * 1500)),
    name: \`Run \${Math.round(Math.random() * 100)}\`,
    color: \`hsl(\${Math.round(Math.random() * 360)} 70% 55%)\`,
  });

  const updateSeparately = () => {
    const n = next();
    // Three writes, three effect runs, three setOption calls, three renders.
    setData(n.data);
    setName(n.name);
    setColor(n.color);
  };

  const updateBatched = () => {
    const n = next();
    // The effect runs once after the batch: one setOption call, one render.
    batch(() => {
      setData(n.data);
      setName(n.name);
      setColor(n.color);
    });
  };

  return (
    <>
      {/* \`lazyUpdate\` is the other lever: each option is merged immediately
          but ECharts renders once on the next frame. Values read right after a
          change (convertToPixel, getDataURL) still reflect the previous render. */}
      <SolidEChart option={option} lazyUpdate style={{ width: "100%", height: "400px" }} />
      <button onClick={updateSeparately}>{"Update (3 writes)"}</button>
      <button onClick={updateBatched}>{"Update (batch)"}</button>
    </>
  );
};
`,pr=y(`<div class="mb-4 p-3 panel flex flex-wrap gap-x-6 gap-y-4 items-end">`),mr=y(`<p class="text-xs text-brand-800 font-bold w-full">`),J=y(`<div class="p-1 border border-brand-300 rounded-lg bg-brand-100 inline-flex w-fit relative">`),hr=y(`<div class="flex items-baseline justify-between"><span class="text-brand-700 font-mono">`),gr=y(`<span class="i-lucide-chevron-up size-3">`),_r=y(`<span class="i-lucide-chevron-down size-3">`),vr=y(`<div class="border-l border-brand-300 flex flex-col">`),yr=`flex flex-col gap-1.5 text-xs text-brand-900`,br=`font-semibold text-brand-800`,xr=`focus-within:outline-2 focus-within:outline-brand-400 focus-within:outline-offset-2 focus-within:outline-solid`,Sr=e=>(()=>{var t=pr();return T(t,(()=>{var t=_(()=>!!e.title);return()=>t()?(()=>{var t=mr();return T(t,()=>e.title),t})():null})(),null),T(t,()=>e.children,null),t})(),Cr=e=>n(oe.Root,{get checked(){return e.checked},get disabled(){return e.disabled},onCheckedChange:t=>{e.onChange(t.checked)},class:`text-xs text-brand-900 flex gap-2 cursor-pointer items-center data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed`,get children(){return[n(oe.Control,{class:`p-0.5 rounded-full bg-brand-300 inline-flex h-5 w-9 transition-colors duration-200 items-center data-[state=checked]:bg-brand-700 ${xr}`,get children(){return n(oe.Thumb,{class:`rounded-full bg-white size-4 transition-transform duration-200 data-[state=checked]:translate-x-4`})}}),n(oe.Label,{class:`font-mono`,get children(){return e.label}}),n(oe.HiddenInput,{})]}}),wr=e=>n(ie.Root,{get value(){return e.value},onValueChange:t=>{let n=e.options.find(e=>e.value===t.value);n&&e.onChange(n.value)},class:yr,get children(){return[n(ie.Label,{class:br,get children(){return e.label}}),(()=>{var t=J();return T(t,n(ie.Indicator,{class:`rounded-md bg-brand-900 h-[var(--height)] w-[var(--width)] shadow-sm left-[var(--left)]`}),null),T(t,n(h,{get each(){return e.options},children:e=>n(ie.Item,{get value(){return e.value},class:`text-brand-900 font-mono px-3 py-1.5 rounded-md cursor-pointer transition-colors duration-300 z-1 data-[state=checked]:text-brand-100 data-[focus-visible]:outline-2 data-[focus-visible]:outline-brand-400 data-[focus-visible]:outline-solid`,get children(){return[n(ie.ItemText,{get children(){return e.label}}),n(ie.ItemHiddenInput,{})]}})}),null),t})()]}}),Tr=e=>n(w.Root,{get value(){return[e.value]},get min(){return e.min},get max(){return e.max},get step(){return e.step},onValueChange:t=>{e.onChange(t.value[0])},class:`${yr} w-48`,get children(){return[(()=>{var t=hr(),r=t.firstChild;return T(t,n(w.Label,{class:br,get children(){return e.label}}),r),T(r,(()=>{var t=_(()=>!!e.format);return()=>t()?e.format(e.value):String(e.value)})()),t})(),n(w.Control,{class:`flex h-5 items-center`,get children(){return[n(w.Track,{class:`rounded-full bg-brand-300 h-1.5 w-full`,get children(){return n(w.Range,{class:`rounded-full bg-brand-700 h-full`})}}),n(w.Thumb,{index:0,class:`rounded-full bg-brand-900 size-4 shadow ${xr} focus-visible:outline-2 focus-visible:outline-brand-400 focus-visible:outline-offset-2 focus-visible:outline-solid`,get children(){return n(w.HiddenInput,{})}})]}})]}}),Er=e=>n(x.Root,{get value(){return String(e.value)},get min(){return e.min},get max(){return e.max},get step(){return e.step},get disabled(){return e.disabled},onValueChange:t=>{Number.isNaN(t.valueAsNumber)||e.onChange(t.valueAsNumber)},class:`${yr} w-32 data-[disabled]:opacity-50`,get children(){return[n(x.Label,{class:br,get children(){return e.label}}),n(x.Control,{class:`border border-brand-300 rounded-lg bg-brand-50 flex overflow-hidden`,get children(){return[n(x.Input,{class:`font-mono px-2 py-1.5 outline-none bg-transparent min-w-0 w-full focus-visible:bg-brand-100`}),(()=>{var e=vr();return T(e,n(x.IncrementTrigger,{class:`text-brand-800 px-1.5 flex-1 cursor-pointer transition-colors duration-200 hover:bg-brand-200`,get children(){return gr()}}),null),T(e,n(x.DecrementTrigger,{class:`text-brand-800 px-1.5 border-t border-brand-300 flex-1 cursor-pointer transition-colors duration-200 hover:bg-brand-200`,get children(){return _r()}}),null),e})()]}})]}}),Dr=[`#fb628b`,`#3fbe95`,`#785db0`,`#f3901c`],Or=(e,t)=>Array.from({length:e},(e,n)=>[n,Math.sin(n/40+t)*100+(n*7919+t*131)%37]),kr=(e,t,n)=>({animation:!1,legend:xt,xAxis:{type:`value`,scale:!0,...St},yAxis:{type:`value`,scale:!0,...St},series:[{name:n,type:`line`,showSymbol:!1,data:e,lineStyle:{width:1,color:Dr[t%Dr.length]},itemStyle:{color:Dr[t%Dr.length]}}]}),Ar=300,jr=(e,t)=>{let[n,r]=l(0),[a,o]=l(0),[c,u]=l(0),[d,f]=l(null),p=i(()=>Or(e(),n())),m=0,h=0,g=0,_;return s(()=>{clearTimeout(_)}),{option:()=>(m+=1,kr(p(),a(),`Run ${c()}`)),result:d,handleRendered:()=>{h+=1},handleFinished:()=>{g+=1},writeAll:()=>{r(e=>e+1),o(e=>e+1),u(e=>e+1)},measure:e=>{let n=m,r=h,i=g,a=t(),o=performance.now();e();let s=performance.now()-o;f({lazyUpdate:a,setOptionCalls:m-n,syncRendered:h-r,settledFinished:null,blockedMs:s}),clearTimeout(_),_=setTimeout(()=>{f(e=>e&&{...e,settledFinished:g-i})},Ar)}}},Mr={"20k":2e4,"100k":1e5,"200k":2e5},Nr=()=>{let[e,t]=l(`100k`),[n,r]=l(!1),i=()=>Mr[e()];return{size:e,setSize:t,lazyUpdate:n,setLazyUpdate:r,panels:{separate:jr(i,n),batched:jr(i,n)}}},Pr=e=>{let{separate:t,batched:n}=e.panels,r=()=>{t.measure(t.writeAll)},i=()=>{n.measure(()=>{d(n.writeAll)})};return{runSeparate:r,runBatched:i,runBoth:()=>{r(),i()}}},Fr=`run it`,Ir={separate:{setOptionCalls:3,title:`A - THREE SEPARATE WRITES`},batched:{setOptionCalls:1,title:`B - THE SAME WRITES INSIDE batch()`}},Lr=(e,t)=>t.lazyUpdate?0:e.setOptionCalls,Rr=(e,t)=>t.lazyUpdate?1:e.setOptionCalls,zr=(e,t)=>{let n=Ir[e],r=t.panels[e].result;return[{label:`setOption calls - one per effect run`,expected:()=>String(n.setOptionCalls),actual:()=>{let e=r();return e?String(e.setOptionCalls):Fr},pass:()=>{let e=r();return e===null||e.setOptionCalls===n.setOptionCalls}},{label:`Renders inside the click - synchronous, unless lazyUpdate`,expected:()=>{let e=r();return e?String(Lr(n,e)):Fr},actual:()=>{let e=r();return e?String(e.syncRendered):Fr},pass:()=>{let e=r();return e===null||e.syncRendered===Lr(n,e)}},{label:`'finished' events after the frame settled`,expected:()=>{let e=r();return e?String(Rr(n,e)):Fr},actual:()=>{let e=r();return e?e.settledFinished===null?`settling...`:String(e.settledFinished):Fr},pass:()=>{let e=r();return e===null||e.settledFinished===Rr(n,e)}}]},Br=e=>[{title:Ir.separate.title,items:zr(`separate`,e)},{title:Ir.batched.title,items:zr(`batched`,e)}],Vr=y(`<div>lazyUpdate at the last click is recorded per run, so toggling it afterwards does not invalidate the checklist.`),Hr=y(`<div><strong>`),Ur=[`separate`,`batched`],Wr=[{value:`20k`,label:`20k points`},{value:`100k`,label:`100k points`},{value:`200k`,label:`200k points`}],Gr=e=>{if(!e)return`not run yet`;let t=e.settledFinished===null?`...`:String(e.settledFinished);return`${e.setOptionCalls} setOption, ${e.syncRendered} sync renders, ${t} finished, click blocked ${Math.round(e.blockedMs)} ms`},Kr=()=>{let e=Nr(),t=Pr(e),n=Br(e);return{...e,...t,checklist:n}},qr=()=>{let{size:e,setSize:t,lazyUpdate:r,setLazyUpdate:i,panels:a,runSeparate:o,runBatched:s,runBoth:c,checklist:l}=Kr();return n(D,{get theme(){return M.name},get children(){return[n(U,{class:`gap-4 grid grid-cols-2`,get children(){return[n(V,{containerProps:{title:`A - three separate writes`,note:`setSeed(); setColor(); setLabel() - one effect run each`},get option(){return a.separate.option},lazyUpdate:r,class:`chart-md`,get onEvents(){return{rendered:a.separate.handleRendered,finished:a.separate.handleFinished}}}),n(V,{containerProps:{title:`B - the same writes inside batch()`,note:`batch(() => { setSeed(); setColor(); setLabel(); }) - one effect run`},get option(){return a.batched.option},lazyUpdate:r,class:`chart-md`,get onEvents(){return{rendered:a.batched.handleRendered,finished:a.batched.handleFinished}}})]}}),n(H,{get children(){return[n(Sr,{get children(){return[n(Cr,{label:`lazyUpdate (both charts)`,get checked(){return r()},onChange:i}),n(wr,{label:`Series size`,options:Wr,get value(){return e()},onChange:t}),n(N,{onClick:o,children:`Run A (separate)`}),n(N,{onClick:s,children:`Run B (batch)`}),n(N,{onClick:c,children:`Run both`})]}}),n(F,{sections:l}),n(K,{get children(){return[n(h,{each:Ur,children:e=>(()=>{var t=Hr(),n=t.firstChild;return T(t,()=>`${Ir[e].title}: `,n),T(n,()=>Gr(a[e].result())),t})()}),Vr()]}}),n(z,{code:fr})]}})]}})},Jr=`import type { Component } from "solid-js";
import { createSignal } from "solid-js";

import type { EChartsOption } from "@amad3v/solid-echarts";
import { SolidEChart, SolidEChartProvider } from "@amad3v/solid-echarts";

const option: EChartsOption = {
  xAxis: { type: "category", data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
  yAxis: { type: "value" },
  series: [{ type: "bar", data: [820, 932, 901, 934, 1290, 1330, 1320] }],
};

const style = { width: "100%", height: "400px" };

export const Example: Component = () => {
  // \`undefined\` means "use the provider value", a value means "use mine".
  // That holds for the prop itself: in call form \`theme={theme()}\` is \`undefined\`
  // while the signal is. An accessor that returns \`undefined\` is a value, so
  // the accessor form resolves the fallback itself.
  const [theme, setTheme] = createSignal<string | undefined>(undefined);
  const [group, setGroup] = createSignal<string | undefined>(undefined);
  const [loading, setLoading] = createSignal(false);
  const [autoResize, setAutoResize] = createSignal<boolean | undefined>(undefined);
  const [clicks, setClicks] = createSignal(true);

  return (
    <SolidEChartProvider theme="dark" group="dashboard" autoResize={false}>
      {/* Accessor form: the library calls the function. */}
      <SolidEChart
        option={() => option}
        theme={() => theme() ?? "dark"}
        loading={loading}
        group={() => group() ?? "dashboard"}
        autoResize={() => autoResize() ?? false}
        onSurfaceEvents={() => (clicks() ? { click: () => console.log("click") } : {})}
        style={style}
      />

      {/* Call form: the same props, read through the props object, so just as reactive. */}
      <SolidEChart
        option={() => option}
        theme={theme()}
        loading={loading()}
        group={group()}
        autoResize={autoResize()}
        onSurfaceEvents={clicks() ? { click: () => console.log("click") } : {}}
        style={style}
      />

      <button onClick={() => setTheme((t) => (t === undefined ? "default" : undefined))}>Theme</button>
      <button onClick={() => setGroup((g) => (g === undefined ? "mine" : undefined))}>Group</button>
      <button onClick={() => setLoading((l) => !l)}>Loading</button>
      <button onClick={() => setAutoResize((a) => (a === undefined ? true : undefined))}>Resize</button>
      <button onClick={() => setClicks((c) => !c)}>Click handler</button>
    </SolidEChartProvider>
  );
};
`,Yr={theme:yt.name,group:`provider-group`,autoResize:!1},Xr=`own-group`,Zr=e=>(e===M.name?M:yt).theme.color[0].toLowerCase(),Qr=e=>{switch(e){case`inherit`:return;case`brand`:return M.name;case`second`:return yt.name}},$r=e=>{switch(e){case`inherit`:return;case`own`:return Xr;case`none`:return``}},ei=e=>{switch(e){case`inherit`:return;case`on`:return!0;case`off`:return!1}},ti=e=>Qr(e)??Yr.theme,ni=e=>$r(e)??Yr.group,ri=e=>ei(e)??Yr.autoResize,ii=[{value:`inherit`,label:`undefined`},{value:`brand`,label:`Brand`},{value:`second`,label:`Second`}],ai=[{value:`inherit`,label:`undefined`},{value:`own`,label:Xr},{value:`none`,label:`""`}],oi=[{value:`inherit`,label:`undefined`},{value:`on`,label:`true`},{value:`off`,label:`false`}],si=e=>{let[t,n]=l(e);return{value:t,set:n}},ci=()=>{let e=si(`inherit`),t=si(`inherit`),n=si(`inherit`),r=si(!1),i=si(!0),a=si(!1),o=si(0),s=si(null),c=si(null),l=si(0),u=si(0),d=si(null),f=si(!1),p=si(0),m=si(0),h=si(0),g=si(0);return{themeChoice:e.value,setThemeChoice:e.set,groupChoice:t.value,setGroupChoice:t.set,resizeChoice:n.value,setResizeChoice:n.set,loading:r.value,setLoading:r.set,surfaceOn:i.value,setSurfaceOn:i.set,narrow:a.value,setNarrow:a.set,revision:o.value,bump:()=>{o.set(e=>e+1)},accessorChart:s.value,setAccessorChart:s.set,callChart:c.value,setCallChart:c.set,accessorResizes:l.value,setAccessorResizes:l.set,callResizes:u.value,setCallResizes:u.set,probe:d.value,setProbe:d.set,probing:f.value,setProbing:f.set,accessorClicks:p.value,setAccessorClicks:p.set,callClicks:m.value,setCallClicks:m.set,simulatedWhileOn:h.value,setSimulatedWhileOn:h.set,realClicks:g.value,setRealClicks:g.set}},li={maskColor:`rgba(255, 0, 255, 0.15)`,showSpinner:!1},ui=500,di={simulated:!0},fi=e=>typeof e==`object`&&!!e&&`simulated`in e,pi=e=>{let{setThemeChoice:t,setGroupChoice:n,setResizeChoice:r,setLoading:i,setSurfaceOn:a,surfaceOn:o,resizeChoice:c,narrow:l,setNarrow:u,bump:d,accessorChart:f,callChart:p,accessorResizes:m,callResizes:h,setAccessorResizes:g,setCallResizes:_,setProbe:v,setProbing:y,setAccessorClicks:b,setCallClicks:x,setSimulatedWhileOn:S,setRealClicks:ee}=e,C=e=>t=>{e(()=>t),d()},te=e=>t=>{fi(t)?e(I):ee(I)},w=()=>{o()&&S(I),f()?.getZr().trigger(`click`,di),p()?.getZr().trigger(`click`,di),d()},ne;return s(()=>{clearTimeout(ne)}),{selectTheme:C(t),selectGroup:C(n),selectResize:C(r),toggleLoading:C(i),toggleSurface:C(a),simulateSurfaceClick:w,runResizeProbe:()=>{let e=ri(c()),t=m(),n=h();y(!0),u(!l()),ne=setTimeout(()=>{v({expected:e,accessorDelta:m()-t,callDelta:h()-n}),y(!1),d()},ui)},handleAccessorResize:()=>{g(I)},handleCallResize:()=>{_(I)},handleAccessorClick:te(b),handleCallClick:te(x)}},mi=e=>typeof e==`object`&&!!e,hi=e=>!e||e.isDisposed()?`-`:e.getZr().storage.getDisplayList(!0).some(e=>{let t=e.style;return mi(t)&&t.fill===`rgba(255, 0, 255, 0.15)`})?`shown`:`hidden`,gi=e=>!e||e.isDisposed()?`-`:e.group===``?`(none)`:e.group,_i=e=>e?`on`:`off`,vi=e=>{let{themeChoice:t,groupChoice:n,loading:r,revision:i,accessorChart:a,callChart:o,probe:s,accessorClicks:c,callClicks:l,simulatedWhileOn:u}=e,d=[{form:`accessor form`,chart:a},{form:`call form`,chart:o}],f=(e,t)=>()=>(i(),e(t())),p=(e,t,n)=>d.map(({form:r,chart:i})=>{let a=f(n,i);return{label:e(r),expected:t,actual:a,pass:()=>a()===t()}}),m=(e,t)=>({label:`${t}: onResize follows a width change only while autoResize resolves to true`,expected:()=>s()?_i(s()?.expected??!1):`run the probe`,actual:()=>{let t=s();return t?`${String(t[e])} calls`:`-`},pass:()=>{let t=s();return t?t.expected?t[e]>0:t[e]===0:!0}}),h=(e,t)=>({label:`${e}: handler gets simulated clicks only while switched on`,expected:()=>String(u()),actual:()=>String(t()),pass:()=>t()===u()});return{theme:p(e=>`${e}: theme (undefined = provider) - series colour of the instance`,()=>Zr(ti(t())),rn),loading:p(e=>`${e}: loading overlay on the instance`,()=>r()?`shown`:`hidden`,hi),group:p(e=>`${e}: group (undefined = provider) - chart.group of the instance`,()=>{let e=ni(n());return e===``?`(none)`:e},gi),autoResize:[m(`accessorDelta`,`accessor form`),m(`callDelta`,`call form`)],surface:[h(`accessor form`,c),h(`call form`,l)]}},yi=()=>R({xAxis:{type:`category`,data:W},yAxis:{type:`value`},series:[{type:`bar`,data:G}]}),bi=y(`<div class="gap-4 grid grid-cols-2">`),xi=y(`<div>Provider: theme <strong></strong>, group <strong></strong>, autoResize <strong>`),Si=y(`<div>Effective on both charts: theme <strong></strong>, group <strong></strong>, autoResize <strong>`),Ci=y(`<div>Mouse clicks on the charts (not checked): <strong>`),wi=y(`<div class="mb-4 flex flex-wrap gap-6">`),Ti=()=>{let e=ci(),t=pi(e),n=vi(e);return{...e,...t,checklist:n}},Ei=()=>{let e=Ti(),t=()=>e.surfaceOn()?{click:e.handleAccessorClick}:{};return n(D,{get theme(){return Yr.theme},get group(){return Yr.group},get autoResize(){return Yr.autoResize},get children(){return[n(U,{get children(){var r=bi();return T(r,n(V,{get class(){return e.narrow()?`h-280px w-1/2`:`chart-sm`},option:yi,theme:()=>ti(e.themeChoice()),get loading(){return e.loading},loadingOptions:li,group:()=>ni(e.groupChoice()),autoResize:()=>ri(e.resizeChoice()),onSurfaceEvents:t,get onResize(){return e.handleAccessorResize},ref(t){var n=e.setAccessorChart;typeof n==`function`?n(t):e.setAccessorChart=t},containerProps:{title:`Accessor form`,note:`theme={() => ...}  loading={loading}  group={() => ...}  (provider fallback resolved inside the accessor)`}}),null),T(r,n(V,{get class(){return e.narrow()?`h-280px w-1/2`:`chart-sm`},option:yi,get theme(){return Qr(e.themeChoice())},get loading(){return e.loading()},loadingOptions:li,get group(){return $r(e.groupChoice())},get autoResize(){return ei(e.resizeChoice())},get onSurfaceEvents(){return _(()=>!!e.surfaceOn())()?{click:e.handleCallClick}:{}},get onResize(){return e.handleCallResize},ref(t){var n=e.setCallChart;typeof n==`function`?n(t):e.setCallChart=t},containerProps:{title:`Call form`,note:`theme={theme()}  loading={loading()}  group={group()}`}}),null),r}}),n(H,{get children(){return[n(F,{get sections(){return[{title:`THEME`,items:e.checklist.theme},{title:`LOADING`,items:e.checklist.loading},{title:`GROUP`,items:e.checklist.group},{title:`AUTO-RESIZE - run the resize probe`,items:e.checklist.autoResize},{title:`SURFACE EVENTS - use Simulate surface click`,items:e.checklist.surface}]}}),n(K,{get children(){return[(()=>{var e=xi(),t=e.firstChild.nextSibling,n=t.nextSibling.nextSibling,r=n.nextSibling.nextSibling;return T(t,()=>Yr.theme),T(n,()=>Yr.group),T(r,()=>String(Yr.autoResize)),e})(),(()=>{var t=Si(),n=t.firstChild.nextSibling,r=n.nextSibling.nextSibling,i=r.nextSibling.nextSibling;return T(n,()=>ti(e.themeChoice())),T(r,()=>ni(e.groupChoice())||`(none)`),T(i,()=>String(ri(e.resizeChoice()))),t})(),(()=>{var t=Ci(),n=t.firstChild.nextSibling;return T(n,()=>e.realClicks()),t})()]}}),(()=>{var t=wi();return T(t,n(wr,{label:`theme prop`,options:ii,get value(){return e.themeChoice()},get onChange(){return e.selectTheme}}),null),T(t,n(wr,{label:`group prop`,options:ai,get value(){return e.groupChoice()},get onChange(){return e.selectGroup}}),null),T(t,n(wr,{label:`autoResize prop`,options:oi,get value(){return e.resizeChoice()},get onChange(){return e.selectResize}}),null),t})(),(()=>{var t=wi();return T(t,n(Cr,{label:`loading`,get checked(){return e.loading()},get onChange(){return e.toggleLoading}}),null),T(t,n(Cr,{label:`onSurfaceEvents click handler`,get checked(){return e.surfaceOn()},get onChange(){return e.toggleSurface}}),null),t})(),n(P,{get children(){return[n(N,{get onClick(){return e.simulateSurfaceClick},children:`Simulate surface click`}),n(N,{get onClick(){return e.runResizeProbe},get disabled(){return e.probing()},get children(){return e.probing()?`Probing...`:`Run resize probe (change both widths)`}})]}}),n(z,{code:Jr})]}})]}})},Di=`import type { Component } from "solid-js";
import { createSignal, For, Show } from "solid-js";

import type { EChartsOption, SolidEChartAPI } from "@amad3v/solid-echarts";
import { DEFAULT_THEME, SolidEChart, SolidEChartProvider, useChart } from "@amad3v/solid-echarts";
import { Portal } from "solid-js/web";

const LETTERS = ["A", "B", "C", "D", "E"];
const LETTERS_DATA = [150, 230, 224, 218, 135];

const createChartControls = () => {
  const { chart } = useChart();
  const state = createState();
  const actions = makeActions(state, chart);

  const btnActions = [
    { label: "getDataURL (preview)", action: actions.exportPng },
    { label: "getDataURL (download)", action: actions.downloadPng },
    { label: "clear()", action: actions.clearChart },
  ];

  return {
    ...state,
    btnActions,
  };
};

const PngPreview: Component<{ url: string }> = (props) => (
  <div>
    <code>{"getDataURL"}</code>
    <img src={props.url} alt="Chart export preview" style={{ "max-width": "100rem" }} />
  </div>
);

const ChartControls: Component = () => {
  const { dataUrl, btnActions } = createChartControls();

  return (
    <>
      <div>
        <For each={btnActions}>
          {({ action, label }) => <button onClick={action}>{label}</button>}
        </For>
      </div>

      <Show when={dataUrl()}>{(pngUrl) => <PngPreview url={pngUrl()} />}</Show>
    </>
  );
};

export const Example: Component = () => {
  const [ctrlContainer, setCtrlContainer] = createSignal<HTMLElement | undefined>();

  return (
    <SolidEChartProvider theme={DEFAULT_THEME}>
      <SolidEChart
        option={makeOption}
        style={{ width: "100%", height: "280px" }}
      >
        <Show when={ctrlContainer()}>
          {(mount) => (
            <Portal mount={mount()}>
              <ChartControls />
            </Portal>
          )}
        </Show>
      </SolidEChart>
      <div ref={setCtrlContainer}></div>
    </SolidEChartProvider>
  );
};

const createState = () => {
  const [clearedOnce, setClearedOnce] = createSignal(false);
  const [disposedAfterClear, setDisposedAfterClear] = createSignal<boolean | null>(null);
  const [seriesAfterClear, setSeriesAfterClear] = createSignal<number | null>(null);
  const [dataUrl, setDataUrl] = createSignal<string | null>(null);

  return {
    clearedOnce,
    setClearedOnce,
    disposedAfterClear,
    setDisposedAfterClear,
    seriesAfterClear,
    setSeriesAfterClear,
    dataUrl,
    setDataUrl,
  };
};

type State = ReturnType<typeof createState>;

const makeActions = (state: State, chart: SolidEChartAPI) => {
  const { setClearedOnce, setDisposedAfterClear, setSeriesAfterClear, setDataUrl } = state;

  const exportPng = () => {
    const url = chart.getDataURL({ type: "png", pixelRatio: 2, backgroundColor: "#ffffff" });
    setDataUrl(url ?? null);
  };

  const downloadPng = () => {
    const url = chart.getDataURL({ type: "png", pixelRatio: 2, backgroundColor: "#ffffff" });
    if (!url) return;
    const a = document.createElement("a");
    a.href = url;
    a.download = "chart.png";
    a.click();
  };

  const clearChart = () => {
    chart.clear();
    setDisposedAfterClear(chart.isDisposed());
    const series = chart.getOption()?.series;
    setSeriesAfterClear(Array.isArray(series) ? series.filter(Boolean).length : null);
    setClearedOnce(true);
  };

  return {
    downloadPng,
    clearChart,
    exportPng,
  };
};

const makeOption = (): EChartsOption => ({
  tooltip: { trigger: "item" },
  xAxis: { type: "category", data: LETTERS },
  yAxis: { type: "value" },
  series: [{ type: "bar", data: LETTERS_DATA, emphasis: { focus: "self" } }],
});
`,Oi=y(`<div class=mb-4><p class="text-xs mb-1"><code>getDataURL</code> preview (PNG, pixelRatio: 2):</p><img class="border border-neutral-300 max-w-100"alt="Chart export preview">`),ki=e=>(()=>{var t=Oi(),n=t.firstChild.nextSibling;return r(()=>re(n,`src`,e.url)),t})(),Ai=Symbol(`store-raw`),ji=Symbol(`store-node`),Mi=Symbol(`store-has`),Ni=Symbol(`store-self`);function Pi(e){let t=e[se];if(!t&&(Object.defineProperty(e,se,{value:t=new Proxy(e,Hi)}),!Array.isArray(e))){let n=Object.keys(e),r=Object.getOwnPropertyDescriptors(e),i=Object.getPrototypeOf(e),a=i!==null&&typeof e==`object`&&!!e&&!Array.isArray(e)&&i!==Object.prototype;if(a){let e=Object.getOwnPropertyDescriptors(i);n.push(...Object.keys(e)),Object.assign(r,e)}for(let i=0,o=n.length;i<o;i++){let o=n[i];a&&o===`constructor`||r[o].get&&Object.defineProperty(e,o,{configurable:!0,enumerable:r[o].enumerable,get:r[o].get.bind(t)})}}return t}function Fi(e){let t;return typeof e==`object`&&!!e&&(e[se]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function Ii(e,t=new Set){let n,r,i,a;if(n=e!=null&&e[Ai])return n;if(!Fi(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let n=0,a=e.length;n<a;n++)i=e[n],(r=Ii(i,t))!==i&&(e[n]=r)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);let n=Object.keys(e),o=Object.getOwnPropertyDescriptors(e);for(let s=0,c=n.length;s<c;s++)a=n[s],!o[a].get&&(i=e[a],(r=Ii(i,t))!==i&&(e[a]=r))}return e}function Li(e,t){let n=e[t];return n||Object.defineProperty(e,t,{value:n=Object.create(null)}),n}function Ri(e,t,n){if(e[t])return e[t];let[r,i]=l(n,{equals:!1,internal:!0});return r.$=i,e[t]=r}function zi(e,t){let n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===se||t===ji?n:(delete n.value,delete n.writable,n.get=()=>e[se][t],n)}function Bi(e){ee()&&Ri(Li(e,ji),Ni)()}function Vi(e){return Bi(e),Reflect.ownKeys(e)}var Hi={get(e,t,n){if(t===Ai)return e;if(t===se)return n;if(t===le)return Bi(e),n;let r=Li(e,ji),i=r[t],a=i?i():e[t];if(t===ji||t===Mi||t===`__proto__`)return a;if(!i){let n=Object.getOwnPropertyDescriptor(e,t);ee()&&(typeof a!=`function`||Object.prototype.hasOwnProperty.call(e,t))&&!(n&&n.get)&&(a=Ri(r,t,a)())}return Fi(a)?Pi(a):a},has(e,t){return t===Ai||t===se||t===le||t===ji||t===Mi||t===`__proto__`||(ee()&&Ri(Li(e,Mi),t)(),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:Vi,getOwnPropertyDescriptor:zi};function Ui(e,t,n,r=!1){if(t===`__proto__`||!r&&e[t]===n)return;let i=e[t],a=e.length;n===void 0?(delete e[t],e[Mi]&&e[Mi][t]&&i!==void 0&&e[Mi][t].$()):(e[t]=n,e[Mi]&&e[Mi][t]&&i===void 0&&e[Mi][t].$());let o=Li(e,ji),s;if((s=Ri(o,t,i))&&s.$(()=>n),Array.isArray(e)&&e.length!==a){for(let t=e.length;t<a;t++)(s=o[t])&&s.$();(s=Ri(o,`length`,a))&&s.$(e.length)}(s=o[Ni])&&s.$()}function Wi(e,t){let n=Object.keys(t);for(let r=0;r<n.length;r+=1){let i=n[r];Gi(i)||Ui(e,i,t[i])}}function Gi(e){return e===`__proto__`||e===`constructor`||e===`prototype`}function Ki(e,t){if(typeof t==`function`&&(t=t(e)),t=Ii(t),Array.isArray(t)){if(e===t)return;let n=0,r=t.length;for(;n<r;n++){let r=t[n];e[n]!==r&&Ui(e,n,r)}Ui(e,`length`,r)}else Wi(e,t)}function qi(e,t,n=[]){let r,i=e;if(t.length>1){r=t.shift();let a=typeof r,o=Array.isArray(e);if(a===`string`&&(r===`__proto__`||t.length>1&&Gi(r)))return;if(Array.isArray(r)){for(let i=0;i<r.length;i++)qi(e,[r[i]].concat(t),n);return}if(o&&a===`function`){for(let i=0;i<e.length;i++)r(e[i],i)&&qi(e,[i].concat(t),n);return}if(o&&a===`object`){let{from:i=0,to:a=e.length-1,by:o=1}=r;for(let r=i;r<=a;r+=o)qi(e,[r].concat(t),n);return}if(t.length>1){qi(e[r],t,[r].concat(n));return}i=e[r],n=[r].concat(n)}let a=t[0];typeof a==`function`&&(a=a(i,n),a===i)||(r!==void 0||a!=null)&&(a=Ii(a),r===void 0||Fi(i)&&Fi(a)&&!Array.isArray(a)?Wi(i,a):Ui(e,r,a))}function Ji(...[e,t]){let n=Ii(e||{}),r=Array.isArray(n),i=Pi(n);function a(...e){d(()=>{r&&e.length===1?Ki(n,e[0]):qi(n,e)})}return[i,a]}var Yi=Symbol(`store-root`);function Xi(e){return e===`__proto__`||e===`constructor`||e===`prototype`}function Zi(e,t,n,r,i){if(Xi(n))return;let a=t[n];if(e===a)return;let o=Array.isArray(e);if(n!==Yi&&(!Fi(e)||!Fi(a)||o!==Array.isArray(a)||i&&e[i]!==a[i])){Ui(t,n,e);return}if(o){if(e.length&&a.length&&(!r||i&&e[0]&&e[0][i]!=null)){let t,n,o,s,c,l,u,d;for(o=0,s=Math.min(a.length,e.length);o<s&&(a[o]===e[o]||i&&a[o]&&e[o]&&a[o][i]&&a[o][i]===e[o][i]);o++)Zi(e[o],a,o,r,i);let f=Array(e.length),p=new Map;for(s=a.length-1,c=e.length-1;s>=o&&c>=o&&(a[s]===e[c]||i&&a[s]&&e[c]&&a[s][i]&&a[s][i]===e[c][i]);s--,c--)f[c]=a[s];if(o>c||o>s){for(n=o;n<=c;n++)Ui(a,n,e[n]);for(;n<e.length;n++)Ui(a,n,f[n]),Zi(e[n],a,n,r,i);a.length>e.length&&Ui(a,`length`,e.length);return}for(u=Array(c+1),n=c;n>=o;n--)l=e[n],d=i&&l?l[i]:l,t=p.get(d),u[n]=t===void 0?-1:t,p.set(d,n);for(t=o;t<=s;t++)l=a[t],d=i&&l?l[i]:l,n=p.get(d),n!==void 0&&n!==-1&&(f[n]=a[t],n=u[n],p.set(d,n));for(n=o;n<e.length;n++)n in f?(Ui(a,n,f[n]),Zi(e[n],a,n,r,i)):Ui(a,n,e[n])}else for(let t=0,n=e.length;t<n;t++)Zi(e[t],a,t,r,i);a.length>e.length&&Ui(a,`length`,e.length);return}let s=Object.keys(e);for(let t=0,n=s.length;t<n;t++)Xi(s[t])||Zi(e[s[t]],a,s[t],r,i);let c=Object.keys(a);for(let t=0,n=c.length;t<n;t++)e[c[t]]===void 0&&Ui(a,c[t],void 0)}function Qi(e,t={}){let{merge:n,key:r=`id`}=t,i=Ii(e);return e=>{if(!Fi(e)||!Fi(i))return i;let t=Zi(i,{[Yi]:e},Yi,n,r);return t===void 0?e:t}}var $i=()=>{let[e,t]=Ji({width:void 0,height:void 0,domIsElement:!1,id:void 0}),[n,r]=l(null),[i,a]=l(`-`),[o,s]=l(null),[c,u]=l(0),[d,f]=l(!1),[p,m]=l(null),[h,g]=l(null),[_,v]=l(null),[y,b]=l(`-`),[x,S]=l(`-`);return{chartMeta:e,setChartMeta:t,dataUrlValid:n,setDataUrlValid:r,coordsResult:i,setCoordsResult:a,coordsValid:o,setCoordsValid:s,dispatchCount:c,setDispatchCount:u,clearedOnce:d,setClearedOnce:f,disposedAfterClear:p,setDisposedAfterClear:m,seriesAfterClear:h,setSeriesAfterClear:g,dataUrl:_,setDataUrl:v,visualColor:y,setVisualColor:b,optionKeys:x,setOptionKeys:S}},ea=(e,t,n)=>{let{setDataUrlValid:r,setCoordsResult:i,setCoordsValid:a,setDispatchCount:o,setClearedOnce:s,setDisposedAfterClear:c,setSeriesAfterClear:l,setDataUrl:u,setVisualColor:d,setOptionKeys:f}=e;return{downloadPng:()=>{let e=t.getDataURL({type:`png`,pixelRatio:2,backgroundColor:`#ffffff`});if(!e)return;let n=document.createElement(`a`);n.href=e,n.download=`chart.png`,n.click()},downplayAll:()=>{n(A.downplay({})),o(I)},clearChart:()=>{t.clear(),c(t.isDisposed());let e=t.getOption()?.series;l(Array.isArray(e)?e.filter(Boolean).length:null),s(!0)},highlightFirst:()=>{n(A.highlight({seriesIndex:0,dataIndex:0})),o(I)},readOption:()=>{let e=t.getOption();f(e===void 0?`-`:Object.keys(e).join(`, `))},readVisual:()=>{let e=t.getVisual({seriesIndex:0,dataIndex:0},`color`);d(e===void 0?`-`:String(e))},convertCoord:()=>{let e=t.convertToPixel({seriesIndex:0},[2,0]),n=Array.isArray(e)&&e.length===2;a(n),i(n?`[${e.map(e=>Math.round(e)).join(`, `)}]`:e===void 0?`not ready`:String(e))},exportPng:()=>{let e=t.getDataURL({type:`png`,pixelRatio:2,backgroundColor:`#ffffff`});r(typeof e==`string`&&e.startsWith(`data:image/png`)),u(e??null)}}},ta=e=>e.map(e=>({...e,label:typeof e.label==`string`?en(e.label):e.label})),na=(e,t,n)=>{let{chartMeta:r,dataUrlValid:i,coordsResult:a,coordsValid:o,dispatchCount:s,clearedOnce:c,disposedAfterClear:l,seriesAfterClear:u}=e;return{actionItems:ta([{label:`chart.getDataURL() -> valid data:image/png URL`,expected:()=>`data:image/png…`,actual:()=>i()===null?`press Export`:i()?`data:image/png… ✓`:`invalid ×`,pass:()=>i()!==!1},{label:`chart.convertToPixel() → [x, y] pixel pair`,expected:()=>`[x, y]`,actual:()=>o()===null?`press Convert`:a(),pass:()=>o()!==!1},{label:`dispatch() - actions reach the chart`,expected:()=>`≥ 1 dispatch`,actual:()=>`${s()} dispatched`,pass:()=>s()>=0},{label:`chart.clear() → series empty, instance still live`,expected:()=>c()?`series: 0, disposed: false`:`press Clear`,actual:()=>c()?`series: ${String(u())}, disposed: ${String(l())}`:`-`,pass:()=>!c()||u()===0&&l()===!1}]),autoItems:ta([{label:`instance() is non-null after mount`,expected:()=>`non-null`,actual:()=>n()===null?`null`:`non-null`,pass:()=>n()!==null},{label:`chart.isDisposed() -> false while live`,expected:()=>`false`,actual:()=>String(t.isDisposed()),pass:()=>!t.isDisposed()},{label:`chart.isSSR() -> false in browser`,expected:()=>`false`,actual:()=>String(t.isSSR()),pass:()=>!t.isSSR()},{label:`chart.getWidth() / getHeight() -> positive numbers`,expected:()=>`> 0`,actual:()=>r.width===void 0?`-`:`${r.width} × ${String(r.height)}px`,pass:()=>typeof r.width==`number`&&r.width>0},{label:`chart.getDom() -> HTMLElement`,expected:()=>`HTMLElement`,actual:()=>r.width===void 0?`-`:r.domIsElement?`HTMLElement ✓`:`not an element`,pass:()=>r.width===void 0||r.domIsElement},{label:`chart.getId() -> non-empty string`,expected:()=>`string`,actual:()=>r.id===void 0?`-`:`"${r.id}"`,pass:()=>typeof r.id==`string`&&r.id.length>0}])}},ra=()=>R({tooltip:{trigger:`item`},xAxis:{type:`category`,data:jn},yAxis:{type:`value`},series:[{type:`bar`,data:Mn,emphasis:{focus:`self`}}]}),ia=y(`<span>`),aa=y(`<div>getVisual color: <strong>`),oa=y(`<div>getOption keys: <strong>`),Y=y(`<div>convertToPixel: <strong>`),sa=y(`<div>instance() is null: <strong>`),ca=()=>{let{instance:e,chart:t,dispatch:n}=$e(),r=$i(),i=ea(r,t,n),a=na(r,t,e);f(()=>{let t=e();t&&!t.isDisposed()&&r.setChartMeta({width:t.getWidth(),height:t.getHeight(),domIsElement:t.getDom()instanceof HTMLElement,id:t.getId()})});let o=[{label:`getDataURL (preview)`,action:i.exportPng},{label:`getDataURL (download)`,action:i.downloadPng},{label:`convertToPixel`,action:i.convertCoord},{label:`getVisual (color)`,action:i.readVisual},{label:`getOption (keys)`,action:i.readOption},{label:`highlight bar A`,action:i.highlightFirst},{label:`downplay all`,action:i.downplayAll},{label:`clear()`,action:i.clearChart}],s=()=>String(e()===null);return{...r,checklist:a,btnActions:o,nullInstance:s}},la=()=>{let{coordsResult:e,dataUrl:t,visualColor:i,optionKeys:a,btnActions:o,checklist:s,nullInstance:c}=ca();return[n(jt,{get children(){var e=ia();return T(e,()=>en(`Every button uses chart.method() - no null checks, no instance()?. Methods silently return undefined when unavailable.`)),e}}),n(F,{get sections(){return[{title:`AUTO - verified on mount`,items:s.autoItems},{title:`ACTION-TRIGGERED - press buttons below`,items:s.actionItems}]}}),n(K,{get children(){return[(()=>{var e=aa(),t=e.firstChild.nextSibling;return T(t,i),r(e=>te(t,`color`,i().startsWith(`#`)?i():void 0)),e})(),(()=>{var e=oa(),t=e.firstChild.nextSibling;return T(t,a),e})(),(()=>{var t=Y(),n=t.firstChild.nextSibling;return T(n,e),t})(),(()=>{var e=sa(),t=e.firstChild.nextSibling;return T(t,c),e})()]}}),n(P,{get children(){return n(h,{each:o,children:({action:e,label:t})=>n(N,{onClick:e,children:t})})}}),n(E,{get when(){return t()},children:e=>n(ki,{get url(){return e()}})})]},ua=()=>{let[e,t]=l();return n(D,{theme:`default`,get children(){return[n(U,{get children(){return n(yn,{get children(){return n(_t,{option:ra,class:`chart-md`,get theme(){return M.name},get children(){return n(E,{get when(){return e()},children:e=>n(g,{get mount(){return e()},get children(){return[n(la,{}),n(z,{code:Di})]}})})}})}})}}),n(H,{ref:t})]}})},da=`import type { Component } from "solid-js";
import { createSignal } from "solid-js";

import type { EChartRenderer, EChartsOption } from "@amad3v/solid-echarts";
import { createAction, seActions, SolidEChart, useChart } from "@amad3v/solid-echarts";

const option: EChartsOption = {
  tooltip: { trigger: "axis" },
  xAxis: { type: "category", data: ["Jan", "Feb", "Mar", "Apr", "May"] },
  yAxis: { type: "value" },
  series: [{ type: "bar", data: [120, 200, 150, 80, 170], emphasis: { focus: "self" } }],
};

// Must render inside <SolidEChart /> so useChart() finds the instance.
const HighlightRow: Component<{ row: () => number | null }> = (props) => {
  const { instance } = useChart();

  // Tracks [instance, action]: when the renderer changes and the instance is
  // replaced, the current payload is dispatched to the new instance too.
  createAction(instance, () => {
    const index = props.row();

    return index === null
      ? seActions.downplay({})
      : seActions.highlight({ seriesIndex: 0, dataIndex: index });
  });

  return null;
};

export const Example: Component = () => {
  const [row, setRow] = createSignal<number | null>(null);
  const [renderer, setRenderer] = createSignal<EChartRenderer>("canvas");

  return (
    <>
      <p onMouseEnter={() => setRow(2)} onMouseLeave={() => setRow(null)}>
        {"Hover here to highlight the third bar"}
      </p>
      <button onClick={() => setRenderer((r) => (r === "canvas" ? "svg" : "canvas"))}>
        {"Switch renderer (the highlight survives)"}
      </button>
      <SolidEChart
        option={() => option}
        renderer={renderer}
        style={{ width: "100%", height: "400px" }}
      >
        <HighlightRow row={row} />
      </SolidEChart>
    </>
  );
};
`,fa=y(`<div class="border border-brand-300 rounded-md w-full overflow-hidden"><table class="text-xs w-full border-collapse"><thead class=bg-brand-300/60><tr></tr></thead><tbody class=bg-brand-100>`),pa=y(`<th class="px-2 py-1 first:border-r first:border-brand-300 text-left">`),ma=y(`<tr>`),ha=y(`<td class="px-2 py-1 first:border-r first:border-brand-300">`),ga=e=>(()=>{var r=fa(),i=r.firstChild.firstChild,a=i.firstChild,o=i.nextSibling;return T(a,n(h,{get each(){return e.headers},children:e=>(()=>{var t=pa();return T(t,e),t})()})),T(o,n(h,{get each(){return e.data},children:(r,i)=>(()=>{var a=ma();return b(a,t(()=>e.rowProps(i()),{class:`border-y border-brand-300 cursor-pointer last:border-b-0 hover:bg-brand-200`}),!1,!0),T(a,n(h,{each:r,children:e=>(()=>{var t=ha();return T(t,()=>e.toLocaleString()),t})()})),a})()})),r})(),_a=e=>{let{instance:t}=$e();return tt(t,()=>{let t=e.hoveredIndex();return t===null?A.downplay({}):A.highlight({seriesIndex:0,dataIndex:t})}),null},va=()=>{let[e,t]=l(null),[n,r]=l(null),a=i(()=>e()??n()),[o,s]=l(`canvas`),[c,u]=l(0),[d,f]=l(0),[p,m]=l(0),[h,g]=l(0);return{hoveredIndex:e,setHoveredIndex:t,pinnedIndex:n,setPinnedIndex:r,activeIndex:a,renderer:o,setRenderer:s,switchCount:c,setSwitchCount:u,initCount:d,setInitCount:f,reInitCount:p,setReInitCount:m,highlightsOnInstance:h,setHighlightsOnInstance:g}},ya=2,ba=e=>{let{setHoveredIndex:t,setPinnedIndex:n,setRenderer:r,setSwitchCount:i,setInitCount:a,setReInitCount:o,setHighlightsOnInstance:s}=e;return{rowProps:e=>({onMouseEnter:()=>{t(e)},onMouseLeave:()=>{t(null)}}),switchRenderer:()=>{i(I),r(e=>e===`canvas`?`svg`:`canvas`)},togglePin:()=>{n(e=>e===null?ya:null)},handleInit:()=>{a(I),s(0)},handleReInit:()=>{o(I),s(0)},handleHighlight:()=>{s(I)}}},xa=e=>{let{activeIndex:t,initCount:n,reInitCount:r,switchCount:i,highlightsOnInstance:a}=e;return[{label:`onInit fires once - for the first instance only`,expected:()=>`1`,actual:()=>String(n()),pass:()=>n()===1},{label:`onReInit fires on each renderer switch - reInitCount === switchCount`,expected:()=>String(i()),actual:()=>String(r()),pass:()=>r()===i()},{label:`Active highlight re-dispatched to the current instance`,expected:()=>t()===null?`activate a row first`:`≥ 1 highlight`,actual:()=>`${a()} on this instance`,pass:()=>t()===null||a()>=1}]},Sa=()=>R({tooltip:{trigger:`axis`},xAxis:{type:`category`,data:Tn},yAxis:{type:`value`},series:[{type:`bar`,data:Bn,emphasis:{focus:`self`}}]}),Ca=y(`<div>Renderer: <strong>`),wa=y(`<div>Active row index: <strong>`),Ta=y(`<div>onInit / onReInit: <strong></strong> / <strong>`),Ea=y(`<div>highlight events on this instance: <strong>`),Da=Tn.map((e,t)=>[e,Bn[t]??0]),Oa=()=>{let e=va(),t=ba(e),n=xa(e),r=Sa;return{...e,...t,checklist:n,option:r}},ka=()=>{let{activeIndex:e,checklist:t,handleHighlight:r,handleInit:i,handleReInit:a,highlightsOnInstance:o,initCount:s,option:c,pinnedIndex:l,reInitCount:u,renderer:d,rowProps:f,switchRenderer:p,togglePin:m}=Oa();return n(D,{get theme(){return M.name},get children(){return[n(U,{class:`flex gap-20 items-start`,get children(){return[n(yn,{title:`1. Hover a row (or pin one) to activate the highlight`,get children(){return n(ga,{rowProps:f,headers:[`Month`,`Revenue`],data:Da})}}),n(yn,{title:`2. While active, switch renderer - highlight must survive`,class:`w-full`,get children(){return n(_t,{option:c,renderer:d,class:`chart-lg`,onInit:i,onReInit:a,onEvents:{highlight:r},get children(){return n(_a,{hoveredIndex:e})}})}})]}}),n(H,{get children(){return[n(F,{sections:[{items:t}]}),n(K,{get children(){return[(()=>{var e=Ca(),t=e.firstChild.nextSibling;return T(t,d),e})(),(()=>{var t=wa(),n=t.firstChild.nextSibling;return T(n,()=>e()??`none`),T(t,()=>l()===null?``:` (pinned)`,null),t})(),(()=>{var e=Ta(),t=e.firstChild.nextSibling,n=t.nextSibling.nextSibling;return T(t,s),T(n,u),e})(),(()=>{var e=Ea(),t=e.firstChild.nextSibling;return T(t,o),e})()]}}),n(P,{get children(){return[n(N,{onClick:m,get children(){return l()===null?`Pin highlight on row 3`:`Unpin highlight`}}),n(N,{onClick:p,get children(){return`Switch to ${d()===`canvas`?`SVG`:`canvas`} renderer`}})]}}),n(z,{code:da})]}})]}})},Aa=`import type { Component } from "solid-js";
import { createSignal } from "solid-js";

import type { EChartsOption } from "@amad3v/solid-echarts";
import { createAction, createChart, createChartEffect, seActions } from "@amad3v/solid-echarts";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May"];
const REVENUE = [120, 200, 150, 80, 170];

const option = (): EChartsOption => ({
  tooltip: { trigger: "axis" },
  xAxis: { type: "category", data: MONTHS },
  yAxis: { type: "value" },
  series: [{ type: "bar", data: REVENUE, emphasis: { focus: "self" } }],
});

export const Example: Component = () => {
  // The only coupling between the table and the chart.
  const [hovered, setHovered] = createSignal<number | null>(null);
  const [container, setContainer] = createSignal<HTMLDivElement | null>(null);

  // Primitive layer: no <SolidEChart />, just a container element.
  const { instance } = createChart(container);
  createChartEffect(instance, option);

  // Declarative: "keep the chart's highlight in sync with \`hovered\`".
  // Waits for the instance, is a no-op once it is disposed, and the first
  // (synchronous) run is skipped because the model is not ready yet.
  createAction(instance, () => {
    const index = hovered();

    return index === null
      ? seActions.downplay({})
      : seActions.highlight({ seriesIndex: 0, dataIndex: index });
  });

  return (
    <>
      <ul>
        {MONTHS.map((month, i) => (
          <li onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
            {month}
          </li>
        ))}
      </ul>
      <div ref={setContainer} style={{ width: "100%", height: "400px" }} />
    </>
  );
};
`,ja=y(`<div class="text-xs text-brand-400 border border-brand-300 rounded border-dashed bg-brand-100 flex chart-md items-center justify-center">Chart unmounted - hover table rows to confirm counters are frozen`),Ma=()=>ja(),Na=()=>{let[e,t]=l(null),[n,r]=l(!0),[i,a]=l(0),[o,s]=l(0),[c,u]=l(null),[d,f]=l(null),[p,m]=l(!1),[h,g]=l(null),[_,v]=l(null),[y,b]=l(null),{instance:x}=ot(y,{theme:M.name,renderer:`canvas`});return{hoveredIndex:e,setHoveredIndex:t,chartMounted:n,setChartMounted:r,highlightCount:i,setHighlightCount:a,downplayCount:o,setDownplayCount:s,lastHighlightIdx:c,setLastHighlightIdx:u,everHovered:p,setEverHovered:m,downplayAtLeave:d,setDownplayAtLeave:f,highlightAtUnmount:h,setHighlightAtUnmount:g,downplayAtUnmount:_,setDownplayAtUnmount:v,setContainer:b,instance:x}},Pa=e=>typeof e==`object`&&!!e&&`dataIndex`in e&&typeof e.dataIndex==`number`,Fa=e=>{let{downplayCount:t,everHovered:n,highlightCount:r,setChartMounted:i,setDownplayAtLeave:a,setDownplayAtUnmount:o,setEverHovered:s,setHighlightAtUnmount:c,setHoveredIndex:l,setHighlightCount:u,setDownplayCount:d,setLastHighlightIdx:f}=e;return{handleMouseEnter:e=>{s(!0),l(e)},handleMouseLeave:()=>{n()&&a(t()),l(null)},handleRemount:()=>{c(null),o(null),i(!0)},handleUnmount:()=>{c(r()),o(t()),i(!1)},onDownplay:()=>{d(I)},onHighlight:e=>{u(I),Pa(e)&&f(e.dataIndex)}}},Ia=e=>{let{chartMounted:t,downplayAtUnmount:n,downplayCount:r,everHovered:i,downplayAtLeave:a,highlightAtUnmount:o,highlightCount:s,hoveredIndex:c,lastHighlightIdx:l}=e;return{dispatchItems:[{label:`defer: true - no highlight dispatch before chart model is ready`,expected:()=>`0 on load`,actual:()=>String(s()),pass:()=>i()||s()===0},{label:`highlight dispatches on hover - chart event count increments`,expected:()=>c()===null?`hover a row to test`:`≥ 1`,actual:()=>String(s()),pass:()=>c()===null||s()>0},{label:`highlight dataIndex matches hovered row`,expected:()=>c()===null?`-`:String(c()),actual:()=>l()===null?`-`:String(l()),pass:()=>!t()||c()===null||l()===c()},{label:`downplay dispatches on mouse leave`,expected:()=>{let e=a();return e===null?`hover then leave a row`:`≥ ${e+1}`},actual:()=>String(r()),pass:()=>{let e=a();return e===null||r()>e}}],disposeItems:[{label:`dispose guard - no dispatches after unmount (hover table after unmounting)`,expected:()=>{let e=o();return e===null?`unmount chart first, then hover the table`:`highlight: ${String(e)}, downplay: ${String(n())}`},actual:()=>o()===null?`-`:`highlight: ${String(s())}, downplay: ${String(r())}`,pass:()=>{let e=o();return e===null||s()===e&&r()===n()}}]}},La=(e,t)=>()=>R({tooltip:{trigger:`axis`},xAxis:{type:`category`,data:e},yAxis:{type:`value`},series:[{type:`bar`,data:t,emphasis:{focus:`self`}}]}),Ra=y(`<div class=chart-md>`),za=y(`<strong>`),Ba=Tn.map((e,t)=>[e,Vn[t]??0]),Va=()=>{let e=Na(),t=Fa(e),n=Ia(e),r=La(Tn,Vn),{chartMounted:i,setContainer:a,instance:o,hoveredIndex:c}=e;return f(()=>{i()||a(null)}),dt(o,r),tt(o,()=>{let e=c();return e===null?A.downplay({}):A.highlight({seriesIndex:0,dataIndex:e})}),f(()=>{let e=o();e&&!e.isDisposed()&&(e.on(`highlight`,t.onHighlight),e.on(`downplay`,t.onDownplay),s(()=>{e.off(`highlight`,t.onHighlight),e.off(`downplay`,t.onDownplay)}))}),{...e,...t,checklist:n}},Ha=()=>{let{chartMounted:e,handleMouseEnter:t,handleMouseLeave:r,handleRemount:i,handleUnmount:a,hoveredIndex:o,setContainer:s,checklist:c}=Va(),l=[{title:`DISPATCH BEHAVIOUR [hover table rows to test]`,items:c.dispatchItems},{title:`DISPOSE GUARD [unmount chart then hover table rows]`,items:c.disposeItems}];return n(D,{get children(){return[n(U,{class:`flex gap-20 items-start`,get children(){return[n(yn,{title:`Hover a row - watch the chart react`,get children(){return n(ga,{rowProps:e=>({onMouseEnter:()=>{t(e)},onMouseLeave:r}),headers:[`Month`,`Revenue`],data:Ba})}}),n(yn,{title:`Chart - no direct coupling to the table`,class:`w-full`,get children(){return n(E,{get when(){return e()},get fallback(){return n(Ma,{})},get children(){var e=Ra();return p(s,e),e}})}})]}}),n(H,{get children(){return[n(F,{sections:l}),n(K,{get children(){return[`hoveredIndex: `,(()=>{var e=za();return T(e,(()=>{var e=_(()=>o()===null);return()=>e()?`null`:String(o())})()),e})()]}}),n(P,{get children(){return n(N,{get onClick(){return e()?a:i},class:`mt-3`,get children(){return e()?`Unmount chart`:`Remount chart`}})}}),n(z,{code:Aa})]}})]}})},Ua=`import type { Component } from "solid-js";
import { createSignal } from "solid-js";

import type { EChartsOption } from "@amad3v/solid-echarts";
import { createChart, createChartEffect } from "@amad3v/solid-echarts";

export const Example: Component = () => {
  const [sales, setSales] = createSignal([820, 932, 901, 934, 1290, 1330, 1320]);
  // \`createChart\` takes an accessor for the container element; the instance
  // is created once the element exists and disposed when it goes away.
  const [container, setContainer] = createSignal<HTMLDivElement | null>(null);

  const { instance } = createChart(container, { renderer: "canvas", autoResize: true });

  const option = (): EChartsOption => ({
    tooltip: { trigger: "axis" },
    xAxis: { type: "category", data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
    yAxis: { type: "value" },
    series: [{ name: "Sales", type: "bar", data: sales() }],
  });

  // Calls setOption whenever the instance or the option changes.
  createChartEffect(instance, option);

  return (
    <>
      <div ref={setContainer} style={{ width: "100%", height: "400px" }} />
      <button onClick={() => setSales((s) => s.map(() => Math.round(Math.random() * 300)))}>
        {"Randomise data"}
      </button>
    </>
  );
};
`,Wa=()=>{let[e,t]=l(null),[n,r]=l(!0),[i,a]=l(G),[o,s]=l(0),[c,u]=l(0),[d,f]=l(null),[p,m]=l(null),{instance:h}=ot(e,{theme:M.name,renderer:`canvas`,autoResize:!0});return{container:e,setContainer:t,instance:h,chartMounted:n,setChartMounted:r,salesData:i,setSalesData:a,randomiseCount:o,setRandomiseCount:s,finishedCount:c,setFinishedCount:u,renderedData:d,setRenderedData:f,disposedAfterUnmount:p,setDisposedAfterUnmount:m}},Ga=e=>{let t=cn(e,`data`);return Array.isArray(t)?t.filter(e=>typeof e==`number`):null},Ka=e=>{let{instance:t,salesData:n,setSalesData:r,setRandomiseCount:i,setChartMounted:a,setFinishedCount:o,setRenderedData:s,setDisposedAfterUnmount:c}=e;return{randomise:()=>{i(I),r(n().map(()=>Math.round(Math.random()*300)))},toggleMounted:()=>{c(null),a(e=>!e)},logInstance:()=>{console.log(`raw instance:`,t())},handleFinished:()=>{o(I);let e=t();e&&!e.isDisposed()&&s(Ga(e))}}},qa=e=>{let{container:t,instance:n,chartMounted:r,salesData:i,randomiseCount:a,finishedCount:o,renderedData:s,disposedAfterUnmount:c}=e;return[{label:`createChart - instance is non-null while the container is mounted`,expected:()=>r()?`non-null`:`null`,actual:()=>n()===null?`null`:`non-null`,pass:()=>n()===null==!r()},{label:`instance.getDom() is the container element passed to createChart`,expected:()=>`true`,actual:()=>{let e=n();return e===null?`-`:String(e.getDom()===t())},pass:()=>n()===null||n()?.getDom()===t()},{label:`createChartEffect - rendered series data equals the salesData signal`,expected:()=>i().join(`, `),actual:()=>s()?.join(`, `)??`-`,pass:()=>!r()||s()===null||s()?.join()===i().join()},{label:`createChartEffect - every option change re-renders ('finished' fires)`,expected:()=>a()===0?`≥ 1`:`≥ 2`,actual:()=>String(o()),pass:()=>a()===0?o()>=1:o()>=2},{label:`Unmounting the container disposes the instance (isDisposed() === true)`,expected:()=>c()===null?`unmount the chart first`:`true`,actual:()=>c()===null?`-`:String(c()),pass:()=>c()!==!1}]},Ja=e=>{let{salesData:t}=e;return()=>R({tooltip:{trigger:`axis`},xAxis:{type:`category`,data:W},yAxis:{type:`value`},series:[{name:`Sales`,type:`bar`,data:t()}]})},Ya=y(`<div class="text-xs text-brand-400 border border-brand-300 rounded border-dashed bg-brand-100 flex chart-lg items-center justify-center">Container removed - createChart disposed the instance`),Xa=y(`<div class=chart-lg>`),Za=y(`<div>Instance: <strong>`),Qa=y(`<div>Randomise presses: <strong></strong> / 'finished' events: <strong>`),$a=()=>Ya(),eo=()=>{let e=Wa(),t=Ka(e),n=qa(e),r=Ja(e),{chartMounted:i,setContainer:a,instance:o,setDisposedAfterUnmount:c}=e;f(()=>{i()||a(null)}),dt(o,r);let l=null;return f(()=>{let e=o();if(e===null){l!==null&&c(l.isDisposed());return}l=e,e.on(`finished`,t.handleFinished),s(()=>{e.isDisposed()||e.off(`finished`,t.handleFinished)})}),{...e,...t,checklist:n}},to=()=>{let{checklist:e,chartMounted:t,finishedCount:r,instance:i,logInstance:a,randomise:o,randomiseCount:s,setContainer:c,toggleMounted:l}=eo();return[n(U,{get children(){return n(yn,{get children(){return n(E,{get when(){return t()},get fallback(){return n($a,{})},get children(){var e=Xa();return p(c,e),e}})}})}}),n(H,{get children(){return[n(F,{sections:[{items:e}]}),n(K,{get children(){return[(()=>{var e=Za(),t=e.firstChild.nextSibling;return T(t,()=>i()?.getId()??`null`),e})(),(()=>{var e=Qa(),t=e.firstChild.nextSibling,n=t.nextSibling.nextSibling;return T(t,s),T(n,r),e})()]}}),n(P,{get children(){return[n(N,{onClick:o,children:`Randomise data`}),n(N,{onClick:l,get children(){return t()?`Unmount chart`:`Remount chart`}}),n(N,{onClick:a,children:`Log instance to console`})]}}),n(z,{code:Ua})]}})]},no=`import type { Component } from "solid-js";
import { createSignal } from "solid-js";

import type { EChartsOption, EChartsType } from "@amad3v/solid-echarts";
import { SolidEChart, useChart } from "@amad3v/solid-echarts";

const option: EChartsOption = {
  xAxis: { type: "value", min: 0, max: 100 },
  yAxis: { type: "value", min: 0, max: 100 },
  series: [{ type: "scatter", data: [[50, 50]] }],
};

// A child of <SolidEChart> resolves its chart through useChart().
const Exports: Component = () => {
  const { chart } = useChart();

  return (
    <>
      <button
        onClick={() => {
          // Every chart sharing \`group\` ends up in one image. \`type\` is required.
          console.log(chart.getConnectedDataURL({ type: "png", pixelRatio: 1 })?.slice(0, 22));
        }}
      >
        Connected PNG
      </button>
      <button
        onClick={() => {
          // svg renderer only. { useViewBox: false } omits the viewBox.
          console.log(chart.renderToSVGString()?.startsWith("<svg"));
        }}
      >
        SVG string
      </button>
      <button
        onClick={() => {
          // canvas renderer only: width === getWidth() * getDevicePixelRatio().
          console.log(chart.renderToCanvas({ backgroundColor: "#fff" })?.width);
        }}
      >
        Canvas
      </button>
    </>
  );
};

// ssr: true builds an instance with no DOM output, no events and no animation
// loop. It needs an explicit width and height and is exported as a string.
const SsrPreview: Component = () => {
  const { chart } = useChart();
  const [src, setSrc] = createSignal("");

  const render = () => {
    const svg = chart.renderToSVGString() ?? "";
    setSrc(\`data:image/svg+xml;charset=UTF-8,\${encodeURIComponent(svg)}\`);
  };

  return (
    <>
      <button onClick={render}>Render SSR chart</button>
      <img src={src()} alt="SSR chart" />
    </>
  );
};

export const Example: Component = () => {
  let chart: EChartsType | undefined;

  const handleClick = (event: { offsetX: number; offsetY: number }) => {
    const pixel = [event.offsetX, event.offsetY];
    // True when the pixel lies inside the first grid.
    const inside = chart?.containPixel({ gridIndex: 0 }, pixel);
    // pixel -> data. convertToPixel() is the inverse.
    const data = chart?.convertFromPixel({ seriesIndex: 0 }, pixel);
    console.log(inside, data);
  };

  return (
    <>
      {/* \`group\` connects charts through echarts.connect(). */}
      <SolidEChart
        option={() => option}
        group="dashboard"
        devicePixelRatio={2}
        onInit={(instance) => {
          chart = instance;
        }}
        onSurfaceEvents={{ click: handleClick }}
        style={{ width: "100%", height: "400px" }}
      >
        <Exports />
      </SolidEChart>

      <SolidEChart
        ssr
        renderer="svg"
        width={520}
        height={300}
        option={() => option}
        style={{ display: "none" }}
      >
        <SsrPreview />
      </SolidEChart>
    </>
  );
};
`,ro=y(`<div class=mb-4><p class="text-xs mb-1"><code class=code-tag></code></p><img class="border border-neutral-300 max-w-full">`),io=e=>{let{chart:t}=$e();return c(()=>{e.onProxy(t)}),null},ao=e=>(()=>{var t=ro(),n=t.firstChild,i=n.firstChild,a=n.nextSibling;return T(i,()=>e.title),r(t=>{var n=e.url,r=e.title;return n!==t.e&&re(a,`src`,t.e=n),r!==t.t&&re(a,`alt`,t.t=r),t},{e:void 0,t:void 0}),t})(),oo=[120,200,150,80,70,110,130],so=()=>{let[e,t]=l({}),[n,r]=l(null),[i,a]=l(null),[o,s]=l(null),[c,u]=l(null),[d,f]=l(oo),[p,m]=l([]),[h,g]=l(null),[_,v]=l(null);return{proxies:e,setProxies:t,connected:n,setConnected:r,canvasExport:i,setCanvasExport:a,svgExport:o,setSvgExport:s,guards:c,setGuards:u,ssrData:d,setSsrData:f,ssrExports:p,setSsrExports:m,roundTrip:h,setRoundTrip:g,click:_,setClick:v}},co=e=>new Promise((t,n)=>{let r=new Image;r.onload=()=>{t({width:r.naturalWidth,height:r.naturalHeight})},r.onerror=()=>{n(Error(`Image could not be decoded`))},r.src=e}),lo=e=>`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(e)}`,uo=`export-and-ssr-group`,fo=[50,50],po=`#1e293b`,mo=e=>R({animation:!1,backgroundColor:po,...e}),ho=()=>mo({xAxis:{type:`category`,data:W},yAxis:{type:`value`},series:[{type:`bar`,data:G}]}),go=()=>mo({xAxis:{type:`category`,data:W},yAxis:{type:`value`},series:tn([{type:`line`,smooth:!0,data:En}])}),_o=()=>mo({xAxis:{type:`value`,min:0,max:100},yAxis:{type:`value`,min:0,max:100},series:[{type:`scatter`,symbolSize:14,data:[[10,20],[30,60],fo,[80,90]]}]}),vo=()=>mo({xAxis:{type:`category`,data:W},yAxis:{type:`value`},series:tn([{type:`line`,data:G}])}),yo=e=>mo({xAxis:{type:`category`,data:W},yAxis:{type:`value`},series:[{type:`bar`,data:e}]}),bo=`#ffffff`,xo=[1,1],So=e=>{if(!Array.isArray(e)||e.length<2)return null;let t=e[0],n=e[1];return typeof t==`number`&&typeof n==`number`?[t,n]:null},Co=e=>{try{return e(),!1}catch{return!0}},wo=e=>{let t=e.map(e=>e.getBoundingClientRect()),n=(e,n)=>Math.max(...t.map(e=>e[n]))-Math.min(...t.map(t=>t[e]));return{width:n(`left`,`right`),height:n(`top`,`bottom`)}},To=e=>{let t=t=>n=>{e.setProxies(e=>({...e,[t]:n}))},n=()=>{let{bar:t,line:n}=e.proxies(),r=t?.getConnectedDataURL({type:`png`,pixelRatio:1,connectedBackgroundColor:bo}),i=[t?.getDom(),n?.getDom()].filter(e=>e!==void 0);r!==void 0&&co(r).then(t=>{e.setConnected({url:r,actual:t,expected:wo(i)})}).catch(()=>{e.setConnected(null)})},r=()=>{let t=e.proxies().svg,n=t?.renderToSVGString(),r=t?.renderToSVGString({useViewBox:!1});if(n===void 0||r===void 0)return;let i=t?.getWidth(),a=t?.getHeight();co(lo(n)).then(t=>{e.setSvgExport({svg:n,withoutViewBox:r,decoded:t,chart:{width:i??0,height:a??0}})}).catch(()=>{e.setSvgExport(null)})},i=()=>{let t=e.proxies().scatter,n=t?.renderToCanvas({backgroundColor:bo});if(t===void 0||n===void 0)return;let r=t.getDevicePixelRatio()??1;e.setCanvasExport({url:n.toDataURL(`image/png`),isCanvasElement:n instanceof HTMLCanvasElement,canvas:{width:n.width,height:n.height},expected:{width:(t.getWidth()??0)*r,height:(t.getHeight()??0)*r}})},a=()=>{let{bar:t,svg:n}=e.proxies();if(t===void 0||n===void 0)return;let r={svgOnCanvasThrows:Co(()=>t.renderToSVGString()),canvasOnSvgThrows:Co(()=>n.renderToCanvas())};e.setGuards(r)},o=()=>{let t=e.proxies().ssr?.renderToSVGString();t!==void 0&&co(lo(t)).then(n=>{e.setSsrExports(e=>[...e,{svg:t,decoded:n}].slice(-2))}).catch(()=>{e.setSsrExports([])})},s=()=>{e.setSsrData(e=>e.map(()=>Math.round(50+Math.random()*200))),o()},c=()=>{let t=e.proxies().scatter;if(t===void 0)return;let n=So(t.convertToPixel({seriesIndex:0},fo)),r=n===null?null:So(t.convertFromPixel({seriesIndex:0},n));n!==null&&r!==null&&e.setRoundTrip({data:fo,pixel:n,back:r,centerInside:t.containPixel({gridIndex:0},n),cornerInside:t.containPixel({gridIndex:0},xo)})};return{register:t,runAll:()=>{n(),r(),i(),a(),o(),c()},exportConnected:n,exportSvg:r,exportCanvas:i,checkGuards:a,renderSsr:o,randomizeSsr:s,verifyRoundTrip:c,handleSurfaceClick:t=>{let n=e.proxies().scatter;if(n===void 0)return;let r=[t.offsetX,t.offsetY],i=So(n.convertFromPixel({seriesIndex:0},r)),a=i===null?null:So(n.convertToPixel({seriesIndex:0},i));i!==null&&a!==null&&e.setClick({pixel:r,data:i,inside:n.containPixel({gridIndex:0},r),roundTrip:a})}}},Eo=`data:image/png;base64,`,Do=`pending`,Oo=2,ko=.001,X=1e-6,Ao=({width:e,height:t})=>`${Math.round(e)} × ${Math.round(t)}`,jo=(e,t,n)=>Math.abs(e.width-t.width)<=n&&Math.abs(e.height-t.height)<=n,Mo=(e,t)=>Math.max(Math.abs(e[0]-t[0]),Math.abs(e[1]-t[1])),No=([e,t])=>e>=0&&e<=100&&t>=0&&t<=100,Po=e=>{let{proxies:t,connected:n,canvasExport:r,svgExport:i,guards:a,roundTrip:o,click:s,ssrExports:c}=e,l=[{label:`getConnectedDataURL() returns a PNG data URL for the group`,expected:()=>`${Eo}...`,actual:()=>{let e=n();return e===null?Do:`${e.url.slice(0,22)}...`},pass:()=>n()?.url.startsWith(Eo)??!0},{label:`Decoded image size equals the bounding box of the grouped charts only`,expected:()=>{let e=n();return e===null?`-`:Ao(e.expected)},actual:()=>{let e=n();return e===null?Do:Ao(e.actual)},pass:()=>{let e=n();return e===null||jo(e.actual,e.expected,Oo)}}],u=[{label:`renderToSVGString() (svg renderer) returns a complete <svg> document`,expected:()=>`<svg ... </svg>`,actual:()=>{let e=i();return e===null?Do:`${e.svg.slice(0,4)} ... ${e.svg.slice(-6)}`},pass:()=>{let e=i();return e===null||e.svg.startsWith(`<svg`)&&e.svg.trimEnd().endsWith(`</svg>`)}},{label:`renderToSVGString({ useViewBox: false }) drops the viewBox attribute`,expected:()=>`viewBox: yes / no`,actual:()=>{let e=i();if(e===null)return Do;let t=e=>e.includes(`viewBox`)?`yes`:`no`;return`viewBox: ${t(e.svg)} / ${t(e.withoutViewBox)}`},pass:()=>{let e=i();return e===null||e.svg.includes(`viewBox`)&&!e.withoutViewBox.includes(`viewBox`)}},{label:`The SVG string decodes as an image of the chart's getWidth() x getHeight()`,expected:()=>{let e=i();return e===null?`-`:Ao(e.chart)},actual:()=>{let e=i();return e===null?Do:Ao(e.decoded)},pass:()=>{let e=i();return e===null||jo(e.decoded,e.chart,Oo)}},{label:`Renderer guards: renderToSVGString on canvas and renderToCanvas on svg both throw`,expected:()=>`true / true`,actual:()=>{let e=a();return e===null?Do:`${String(e.svgOnCanvasThrows)} / ${String(e.canvasOnSvgThrows)}`},pass:()=>{let e=a();return e===null||e.svgOnCanvasThrows&&e.canvasOnSvgThrows}},{label:`renderToCanvas() returns an HTMLCanvasElement of getWidth() x getDevicePixelRatio()`,expected:()=>{let e=r();return e===null?`-`:`canvas ${Ao(e.expected)}`},actual:()=>{let e=r();return e===null?Do:`${e.isCanvasElement?`canvas`:`other`} ${Ao(e.canvas)}`},pass:()=>{let e=r();return e===null||e.isCanvasElement&&jo(e.canvas,e.expected,1)}},{label:`getDevicePixelRatio() defaults to window.devicePixelRatio`,expected:()=>String(window.devicePixelRatio),actual:()=>String(t().bar?.getDevicePixelRatio()??`-`),pass:()=>t().bar?.getDevicePixelRatio()===window.devicePixelRatio},{label:`getDevicePixelRatio() honours the devicePixelRatio prop (pinned to 2)`,expected:()=>`2`,actual:()=>String(t().scatter?.getDevicePixelRatio()??`-`),pass:()=>t().scatter?.getDevicePixelRatio()===2}],d=[{label:`convertToPixel -> convertFromPixel is the identity on a data point`,expected:()=>{let e=o();return e===null?`-`:e.data.join(`, `)},actual:()=>{let e=o();return e===null?Do:e.back.map(e=>e.toFixed(6)).join(`, `)},pass:()=>{let e=o();return e===null||Mo(e.data,e.back)<=X}},{label:`containPixel: true at the data point's pixel, false at (1, 1) outside the grid`,expected:()=>`true / false`,actual:()=>{let e=o();return e===null?Do:`${String(e.centerInside)} / ${String(e.cornerInside)}`},pass:()=>{let e=o();return e===null||e.centerInside===!0&&e.cornerInside===!1}},{label:`Click the scatter chart: containPixel agrees with the converted data domain`,expected:()=>{let e=s();return e===null?`click the scatter chart`:String(No(e.data))},actual:()=>{let e=s();return e===null?`-`:String(e.inside)},pass:()=>{let e=s();return e===null||e.inside===No(e.data)}},{label:`Click the scatter chart: pixel -> data -> pixel returns the clicked pixel`,expected:()=>{let e=s();return e===null?`-`:e.pixel.map(Math.round).join(`, `)},actual:()=>{let e=s();return e===null?`-`:e.roundTrip.map(Math.round).join(`, `)},pass:()=>{let e=s();return e===null||Mo(e.pixel,e.roundTrip)<=ko}}],f=()=>c().at(-1);return{connectedItems:l,exportItems:u,coordinateItems:d,ssrItems:[{label:`isSSR(): true for the ssr chart, false for client charts`,expected:()=>`true / false`,actual:()=>`${String(t().ssr?.isSSR())} / ${String(t().svg?.isSSR())}`,pass:()=>t().ssr?.isSSR()===!0&&t().svg?.isSSR()===!1},{label:`SSR instance paints nothing into the DOM; a client svg chart does`,expected:()=>`ssr: 0, client: 1`,actual:()=>{let e=e=>t()[e]?.getDom()?.querySelectorAll(`svg, canvas`).length??0;return`ssr: ${e(`ssr`)}, client: ${e(`svg`)}`},pass:()=>{let e=e=>t()[e]?.getDom()?.querySelectorAll(`svg, canvas`).length??0;return e(`ssr`)===0&&e(`svg`)===1}},{label:`width / height props size the SSR instance (no DOM to measure)`,expected:()=>Ao({width:520,height:300}),actual:()=>Ao({width:t().ssr?.getWidth()??0,height:t().ssr?.getHeight()??0}),pass:()=>t().ssr?.getWidth()===520&&t().ssr?.getHeight()===300},{label:`renderToSVGString() on the SSR instance returns the drawn chart (<svg>, <path>)`,expected:()=>`<svg ... <path ...`,actual:()=>{let e=f();return e===void 0?Do:`${e.svg.slice(0,4)}, ${e.svg.includes(`<path`)?`<path`:`no path`}`},pass:()=>{let e=f();return e===void 0||e.svg.startsWith(`<svg`)&&e.svg.includes(`<path`)}},{label:`The SSR string decodes as an <img> of the configured width x height`,expected:()=>Ao({width:520,height:300}),actual:()=>{let e=f();return e===void 0?Do:Ao(e.decoded)},pass:()=>{let e=f();return e===void 0||jo(e.decoded,{width:520,height:300},0)}},{label:`Changing the option and re-rendering yields a different SVG string`,expected:()=>`strings differ`,actual:()=>{let e=c().at(-2),t=c().at(-1);return e===void 0||t===void 0?`press Randomize`:e.svg===t.svg?`identical`:`strings differ`},pass:()=>{let e=c().at(-2),t=c().at(-1);return e===void 0||t===void 0||e.svg!==t.svg}}]}},Fo=y(`<div class="mb-6 gap-4 grid grid-cols-2">`),Io=y(`<span>`),Lo=y(`<div>Last click pixel: <strong>`),Ro=y(`<div>Last click data: <strong>`),zo=y(`<div>containPixel: <strong>`),Bo=y(`<div>SSR string length: <strong>`),Vo=()=>{let e=so(),t=To(e),n=Po(e);return{...e,...t,checklist:n}},Ho=()=>{let{register:e,runAll:t,exportConnected:r,exportSvg:i,exportCanvas:a,checkGuards:o,renderSsr:s,randomizeSsr:c,verifyRoundTrip:l,handleSurfaceClick:u,connected:d,canvasExport:f,svgExport:p,ssrExports:m,ssrData:g,click:_,checklist:v}=Vo(),y=[{label:`getConnectedDataURL`,action:r},{label:`renderToSVGString`,action:i},{label:`renderToCanvas`,action:a},{label:`renderer guards`,action:o},{label:`pixel round trip`,action:l},{label:`SSR: renderToSVGString`,action:s},{label:`SSR: randomize data`,action:c},{label:`Run all`,action:t}];return n(D,{get theme(){return M.name},get children(){return[n(U,{get children(){return[(()=>{var t=Fo();return T(t,n(V,{class:`chart-sm`,option:ho,group:uo,containerProps:{title:`A - canvas, in the export group`},get children(){return n(io,{get onProxy(){return e(`bar`)}})}}),null),T(t,n(V,{class:`chart-sm`,option:go,group:uo,containerProps:{title:`B - canvas, in the export group`},get children(){return n(io,{get onProxy(){return e(`line`)}})}}),null),t})(),(()=>{var r=Fo();return T(r,n(V,{class:`chart-sm`,option:_o,devicePixelRatio:2,onSurfaceEvents:{click:u},onEvents:{finished:l},containerProps:{title:`C - ungrouped, devicePixelRatio 2`,note:`Click anywhere, including outside the grid`},get children(){return n(io,{get onProxy(){return e(`scatter`)}})}}),null),T(r,n(V,{class:`chart-sm`,option:vo,renderer:`svg`,onEventsOnce:{finished:t},containerProps:{title:`D - svg renderer, ungrouped`},get children(){return n(io,{get onProxy(){return e(`svg`)}})}}),null),r})(),n(_t,{class:`hidden`,option:()=>yo(g()),renderer:`svg`,ssr:!0,width:520,height:300,autoResize:!1,get children(){return n(io,{get onProxy(){return e(`ssr`)}})}})]}}),n(H,{get children(){return[n(jt,{get children(){var e=Io();return T(e,()=>en(`ssr: true gives an instance with no DOM, no events and no animation loop. Export it with renderToSVGString().`)),e}}),n(F,{get sections(){return[{title:`getConnectedDataURL - charts A and B (group)`,items:v.connectedItems},{title:`RENDER TO SVG / CANVAS`,items:v.exportItems},{title:`COORDINATES - convertFromPixel / containPixel`,items:v.coordinateItems},{title:`SSR - ssr: true, renderToSVGString`,items:v.ssrItems}]}}),n(K,{get children(){return[(()=>{var e=Lo(),t=e.firstChild.nextSibling;return T(t,()=>_()?.pixel.map(Math.round).join(`, `)??`-`),e})(),(()=>{var e=Ro(),t=e.firstChild.nextSibling;return T(t,()=>_()?.data.map(e=>e.toFixed(1)).join(`, `)??`-`),e})(),(()=>{var e=zo(),t=e.firstChild.nextSibling;return T(t,()=>String(_()?.inside??`-`)),e})(),(()=>{var e=Bo(),t=e.firstChild.nextSibling;return T(t,()=>m().at(-1)?.svg.length??`-`),e})()]}}),n(P,{get children(){return n(h,{each:y,children:({action:e,label:t})=>n(N,{onClick:e,children:t})})}}),n(E,{get when(){return d()},children:e=>n(ao,{title:`getConnectedDataURL (A + B)`,get url(){return e().url}})}),n(E,{get when(){return p()},children:e=>n(ao,{title:`renderToSVGString (chart D)`,get url(){return lo(e().svg)}})}),n(E,{get when(){return f()},children:e=>n(ao,{title:`renderToCanvas (chart C)`,get url(){return e().url}})}),n(E,{get when(){return m().at(-1)},children:e=>n(ao,{title:`SSR instance -> renderToSVGString -> <img>`,get url(){return lo(e().svg)}})}),n(z,{code:no})]}})]}})},Uo=`import type { Component } from "solid-js";
import { createSignal } from "solid-js";

import type { EChartsOption } from "@amad3v/solid-echarts";
import { SolidEChart } from "@amad3v/solid-echarts";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

const makeOption = (type: "bar" | "line", data: number[]): (() => EChartsOption) => {
  return (): EChartsOption => ({
    tooltip: { trigger: "axis" },
    xAxis: { type: "category", data: MONTHS },
    yAxis: { type: "value" },
    dataZoom: [{ type: "inside" }, { type: "slider" }],
    series: [{ type, data }],
  });
};

export const Example: Component = () => {
  // \`group\` is a live prop: changing it moves the chart to another group in
  // place (no reinit) and the charts left behind stay connected.
  const [groupC, setGroupC] = createSignal("forecast");

  return (
    <>
      <SolidEChart
        option={makeOption("bar", [120, 200, 150, 80, 70, 110])}
        group="revenue"
        style={{ width: "100%", height: "280px" }}
      />
      <SolidEChart
        option={makeOption("line", [90, 140, 170, 120, 100, 160])}
        group="revenue"
        style={{ width: "100%", height: "280px" }}
      />
      {/* Zooming A or B moves C only while C is in "revenue". */}
      <SolidEChart
        option={makeOption("bar", [60, 90, 130, 110, 140, 95])}
        group={groupC}
        style={{ width: "100%", height: "280px" }}
      />
      <button onClick={() => setGroupC((g) => (g === "forecast" ? "revenue" : "forecast"))}>
        {\`Move C to \${groupC() === "forecast" ? "revenue" : "forecast"}\`}
      </button>
    </>
  );
};
`,Wo=()=>{let[e,t]=l(`forecast`),[n,r]=l(0),[i,a]=l(0),[o,s]=l(0),[c,u]=Ji({a:0,b:0,c:0});return{chartCGroup:e,setChartCGroup:t,zoomA:n,setZoomA:r,zoomB:i,setZoomB:a,zoomC:o,setZoomC:s,setBaseline:u,deltaA:()=>n()-c.a,deltaB:()=>i()-c.b,deltaC:()=>o()-c.c}},Go=e=>{let{setBaseline:t,setChartCGroup:n,zoomA:r,zoomB:i,zoomC:a,setZoomA:o,setZoomB:s,setZoomC:c}=e,l=()=>{t({a:r(),b:i(),c:a()})};return{moveCToForecast:()=>{l(),n(`forecast`)},moveCToRevenue:()=>{l(),n(`revenue`)},onZoomA:()=>{o(I)},onZoomB:()=>{s(I)},onZoomC:()=>{c(I)}}},Ko=e=>{let{deltaA:t,deltaB:n,deltaC:r,chartCGroup:i}=e;return[{label:`Charts A and B always sync - zoom A propagates datazoom to B`,expected:()=>t()>0?`deltaA === deltaB`:`zoom Chart A to test`,actual:()=>t()>0?`A: +${t()}, B: +${n()}`:`-`,pass:()=>t()===0||t()===n()},{label:`Chart C isolated in 'forecast' - zoom A does NOT propagate to C`,expected:()=>i()===`revenue`?`N/A (C is in revenue)`:t()>0?`deltaC === 0`:`move C to forecast, then zoom A`,actual:()=>i()===`revenue`?`-`:t()>0?`C: +${r()}`:`-`,pass:()=>i()===`revenue`||t()===0||r()===0},{label:`All three charts sync when C joins 'revenue' - zoom A propagates to B and C`,expected:()=>i()===`forecast`?`N/A (C is in forecast)`:t()>0?`deltaA === deltaB === deltaC`:`move C to revenue, then zoom A`,actual:()=>i()===`forecast`?`-`:t()>0?`A: +${t()}, B: +${n()}, C: +${r()}`:`-`,pass:()=>i()===`forecast`||t()===0||t()===n()&&t()===r()}]},qo=()=>{let e=(e,t)=>()=>R({tooltip:{trigger:`axis`},xAxis:{type:`category`,data:Tn},yAxis:{type:`value`},dataZoom:[{type:`inside`},{type:`slider`}],series:[{type:e,smooth:!0,data:t}]});return{optionA:e(`bar`,On),optionB:e(`line`,kn),optionC:e(`bar`,An)}},Jo=y(`<div>Chart A group: <strong>revenue</strong> (fixed)`),Yo=y(`<div>Chart B group: <strong>revenue</strong> (fixed)`),Xo=y(`<div>Chart C group: <strong></strong> (dynamic)`),Zo=()=>{let e=Wo(),t=Go(e),n=Ko(e),r=qo();return{checklist:n,...t,...r,...e}},Qo=()=>{let{chartCGroup:e,checklist:t,moveCToForecast:r,moveCToRevenue:i,onZoomA:a,onZoomB:o,onZoomC:s,optionA:c,optionB:l,optionC:u}=Zo();return n(D,{get theme(){return M.name},get children(){return[n(U,{class:`gap-4 grid grid-cols-3`,get children(){return[n(V,{containerProps:{title:`Chart A - group: revenue (fixed)`},option:c,group:`revenue`,class:`chart-sm`,onEvents:{datazoom:a}}),n(V,{containerProps:{title:`Chart B - group: revenue (fixed)`},option:l,group:`revenue`,class:`chart-sm`,onEvents:{datazoom:o}}),n(V,{get containerProps(){return{title:`Chart C - group: ${e()} (dynamic)`}},option:u,group:e,class:`chart-sm`,onEvents:{datazoom:s}})]}}),n(H,{get children(){return[n(F,{sections:[{items:t}]}),n(K,{get children(){return[Jo(),Yo(),(()=>{var t=Xo(),n=t.firstChild.nextSibling;return T(n,e),t})()]}}),n(P,{get children(){return[n(N,{onClick:i,get disabled(){return e()===`revenue`},children:`Move C → revenue`}),n(N,{onClick:r,get disabled(){return e()===`forecast`},children:`Move C → forecast`})]}}),n(z,{code:Uo})]}})]}})},$o=`import type { Component } from "solid-js";

import type { EChartsOption } from "@amad3v/solid-echarts";
import { connect, disconnect, SolidEChart, SolidEChartProvider } from "@amad3v/solid-echarts";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

const makeOption = (type: "bar" | "line", data: number[]): (() => EChartsOption) => {
  return (): EChartsOption => ({
    tooltip: { trigger: "axis" },
    xAxis: { type: "category", data: MONTHS },
    yAxis: { type: "value" },
    dataZoom: [{ type: "inside" }, { type: "slider" }],
    series: [{ type, data }],
  });
};

const barOption = makeOption("bar", [120, 200, 150, 80, 70, 110]);
const lineOption = makeOption("line", [90, 140, 170, 120, 100, 160]);

export const Example: Component = () => (
  <>
    {/* A and B inherit the group from the provider: zooming one zooms the other. */}
    <SolidEChartProvider group="dashboard">
      <SolidEChart option={barOption} style={{ width: "100%", height: "280px" }} />
      <SolidEChart option={lineOption} style={{ width: "100%", height: "280px" }} />

      {/* A per-chart \`group\` prop wins over the provider: D is isolated from A and B. */}
      <SolidEChart option={lineOption} group="other-group" style={{ width: "100%", height: "280px" }} />
    </SolidEChartProvider>

    {/* No group at all: C never takes part in any sync. */}
    <SolidEChart option={barOption} style={{ width: "100%", height: "280px" }} />

    {/* connect / disconnect toggle the sync of a whole group at runtime. */}
    <button onClick={() => disconnect("dashboard")}>{"Disconnect group"}</button>
    <button onClick={() => connect("dashboard")}>{"Reconnect group"}</button>
  </>
);
`,es=y(`<span class="text-xs text-brand-600 font-mono px-2 py-0.5 panel rounded w-fit block whitespace-nowrap">`),ts=()=>{let{instance:e}=$e(),[t,n]=l(`-`);return f(()=>{let t=e();t&&!t.isDisposed()&&n(t.group||`(none)`)}),(()=>{var e=es();return T(e,()=>`group: ${t()}`),e})()},ns=y(`<div class="flex flex-col w-full items-center">`),rs=e=>(()=>{var r=ns();return T(r,n(_t,t(e,{get children(){return n(ts,{})}}))),r})(),is=`(none)`,as=()=>{let[e,t]=l(!0),[n,r]=l(0),[i,a]=l(0),[o,s]=l(0),[c,u]=l(0),[d,f]=l(0),[p,m]=l(null),[h,g]=l(null),[_,v]=l(null),[y,b]=l(null);return{isConnected:e,setIsConnected:t,zoomA:n,setZoomA:r,zoomB:i,setZoomB:a,zoomC:o,setZoomC:s,zoomD:c,setZoomD:u,zoomBSnapshot:d,setZoomBSnapshot:f,groupA:p,setGroupA:m,groupB:h,setGroupB:g,groupC:_,setGroupC:v,groupD:y,setGroupD:b}},os=(e,t)=>{let{setIsConnected:n,setZoomBSnapshot:r,zoomB:i,setZoomA:a,setZoomB:o,setZoomC:s,setZoomD:c,setGroupA:l,setGroupB:u,setGroupC:d,setGroupD:f}=e;return{handleDisconnect:()=>{he(t),r(i()),n(!1)},handleReconnect:()=>{Re(t),n(!0)},handleZoomA:()=>{a(I)},handleZoomB:()=>{o(I)},handleZoomC:()=>{s(I)},handleZoomD:()=>{c(I)},handleInitA:e=>{l(e.group||`(none)`)},handleInitB:e=>{u(e.group||`(none)`)},handleInitC:e=>{d(e.group||`(none)`)},handleInitD:e=>{f(e.group||`(none)`)}}},ss=(e,t)=>{let{isConnected:n,zoomA:r,zoomB:i,zoomBSnapshot:a,zoomC:o,zoomD:s,groupA:c,groupB:l,groupC:u,groupD:d}=e;return{groupItems:[{label:`Charts A and B inherit group "${t}" from SolidEChartProvider`,expected:()=>`"${t}"`,actual:()=>`A: ${c()??`-`}, B: ${l()??`-`}`,pass:()=>c()===t&&l()===t},{label:`Chart D overrides provider group "${t}" with "other-group"`,expected:()=>`"other-group"`,actual:()=>d()??`-`,pass:()=>d()===`other-group`},{label:`Chart C has no group - unaffected by any group sync`,expected:()=>is,actual:()=>u()??`-`,pass:()=>u()===is}],syncItems:[{label:`Connected: zooming Chart A also fires datazoom on Chart B`,expected:()=>n()?`A and B counts match`:`N/A (disconnected)`,actual:()=>`A: ${r()}, B: ${i()}`,pass:()=>r()===0||!n()||r()===i()},{label:`Disconnected: zooming Chart A does NOT propagate to Chart B`,expected:()=>n()?`N/A (connected)`:`B frozen at ${a()}`,actual:()=>n()?`-`:`B: ${i()} (was ${a()} at disconnect)`,pass:()=>n()||r()===0?!0:i()===a()},{label:`Isolated Chart C (no group): datazoom count stays 0 while A or B is zoomed`,expected:()=>`0 (do not zoom C itself)`,actual:()=>String(o()),pass:()=>o()===0},{label:`Isolated Chart D (other-group): datazoom count stays 0 while A or B is zoomed`,expected:()=>`0 (do not zoom D itself)`,actual:()=>String(s()),pass:()=>s()===0}]}},cs=()=>({barOption:()=>R({tooltip:{trigger:`axis`},xAxis:{type:`category`,data:Hn},yAxis:{type:`value`},dataZoom:[{type:`inside`},{type:`slider`}],series:[{name:`Revenue`,type:`bar`,data:Un}]}),lineOption:()=>R({tooltip:{trigger:`axis`},xAxis:{type:`category`,data:Hn},yAxis:{type:`value`},dataZoom:[{type:`inside`},{type:`slider`}],series:[{name:`Expenses`,type:`line`,smooth:!0,data:Wn}]})}),ls=y(`<div class="mb-6 gap-4 grid grid-cols-2">`),us=y(`<span>Status: <strong>`),ds=()=>{let e=as(),t=os(e,Gn),n=ss(e,Gn),r=cs();return{checklist:n,...t,...r,...e}},fs=()=>{let{handleDisconnect:e,handleReconnect:t,handleZoomA:r,handleZoomB:i,handleZoomC:a,handleZoomD:o,handleInitA:s,handleInitB:c,handleInitC:l,handleInitD:u,checklist:d,isConnected:f,barOption:p,lineOption:m}=ds();return[n(U,{get children(){return[n(D,{group:Gn,get theme(){return M.name},get children(){var e=ls();return T(e,n(V,{class:`chart-sm`,option:p,onInit:s,onEvents:{datazoom:r},chart:rs,containerProps:{title:`Chart A - inherits group from provider`}}),null),T(e,n(V,{class:`chart-sm`,option:m,onInit:c,onEvents:{datazoom:i},chart:rs,containerProps:{title:`Chart B - inherits group from provider`}}),null),e}}),(()=>{var e=ls();return T(e,n(V,{class:`chart-sm`,option:p,onInit:l,onEvents:{datazoom:a},chart:rs,get theme(){return M.name},containerProps:{title:`Chart C - no group (must NOT sync with A or B)`}}),null),T(e,n(D,{group:Gn,get children(){return n(V,{class:`chart-sm`,option:m,group:`other-group`,onInit:u,onEvents:{datazoom:o},chart:rs,get theme(){return M.name},containerProps:{title:`Chart D - provider sets "${Gn}" but per-chart overrides with "other-group"`}})}}),null),e})()]}}),n(H,{get children(){return[n(F,{get sections(){return[{title:`GROUP ASSIGNMENT`,items:d.groupItems},{title:`DATAZOOM SYNC - use slider or scroll to zoom a chart`,items:d.syncItems}]}}),n(K,{get children(){var e=us(),t=e.firstChild.nextSibling;return T(t,()=>f()?`connected ✓`:`disconnected ×`),e}}),n(P,{get children(){return[n(N,{onClick:e,get disabled(){return!f()},children:`Disconnect group`}),n(N,{onClick:t,get disabled(){return f()},children:`Reconnect group`})]}}),n(z,{code:$o})]}})]},ps=`import type { Component } from "solid-js";
import { createSignal } from "solid-js";

import type { EChartsOption, EChartsType } from "@amad3v/solid-echarts";
import {
  SolidEChart,
  SolidEChartProvider,
  createChart,
  createChartEffect,
} from "@amad3v/solid-echarts";

const option: EChartsOption = {
  xAxis: { type: "category", data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
  yAxis: { type: "value" },
  series: [{ type: "bar", data: [820, 932, 901, 934, 1290, 1330, 1320] }],
};

const style = { width: "100%", height: "400px" };

// Primitive: \`instance()\` is null until the container first enters the viewport.
const Primitive: Component = () => {
  const [container, setContainer] = createSignal<HTMLDivElement | null>(null);
  const { instance } = createChart(container, { initOnVisible: true });
  createChartEffect(instance, () => option);

  return <div ref={setContainer} style={style} />;
};

export const Example: Component = () => {
  const onInit = (chart: EChartsType) => console.log("created", chart.id);

  return (
    <div style={{ height: "500px", "overflow-y": "auto" }}>
      {/* On the chart: created when its container first scrolls into view. */}
      <SolidEChart option={() => option} initOnVisible onInit={onInit} style={style} />

      {/* On the provider: inherited by every chart below it ... */}
      <SolidEChartProvider initOnVisible>
        <SolidEChart option={() => option} onInit={onInit} style={style} />
        {/* ... unless the chart sets its own value: this one is created at mount. */}
        <SolidEChart option={() => option} initOnVisible={false} onInit={onInit} style={style} />
      </SolidEChartProvider>

      <Primitive />
    </div>
  );
};

// Static: read once at init. A chart is not disposed when it scrolls out of view,
// and a renderer change does not wait for visibility a second time.
`,ms=y(`<div><p class="text-xs text-brand-800 font-bold mb-1.5"></p><div class="flex flex-wrap gap-2">`),hs=e=>(()=>{var t=ms(),r=t.firstChild,i=r.nextSibling;return T(r,()=>e.title),T(i,n(h,{get each(){return e.actions},children:({label:e,onClick:t})=>n(N,{onClick:t,children:e})})),t})(),gs=[1,2,3,4,5],_s=e=>gs.some(t=>t===e),vs={1:{title:`Chart 1 - prop on <SolidEChart>`,note:`initOnVisible`,short:`prop on <SolidEChart>`,deferred:!0},2:{title:`Chart 2 - inherited from <SolidEChartProvider>`,note:`provider: initOnVisible, chart: nothing`,short:`inherited from provider`,deferred:!0},3:{title:`Chart 3 - provider says true, chart says false`,note:`provider: initOnVisible, chart: initOnVisible={false}`,short:`provider true, prop false`,deferred:!1},4:{title:`Chart 4 - createChart primitive`,note:`createChart(container, { initOnVisible: true })`,short:`createChart primitive`,deferred:!0},5:{title:`Chart 5 - control`,note:`no initOnVisible anywhere`,short:`control`,deferred:!1}},ys=y(`<div>`),bs=e=>(()=>{var t=ys();return T(t,n(yn,{get title(){return vs[e.id].title},get note(){return vs[e.id].note},get children(){return e.children}})),r(()=>re(t,`data-chart-id`,e.id)),t})(),xs=()=>({initCount:0,initAt:`-`,hasInstance:!1,seen:!1}),Ss=()=>({1:xs(),2:xs(),3:xs(),4:xs(),5:xs()}),Cs=()=>{let[e,t]=Ji(Ss()),[n,r]=l(1),[i,a]=l();return{status:e,setStatus:t,epoch:n,setEpoch:r,panel:i,setPanel:a}},ws=e=>{let{status:t,setStatus:n,panel:r,setEpoch:i}=e,a=(e,t)=>{n(e,`hasInstance`,t!==null&&!t.isDisposed())},o=e=>t=>{n(e,e=>({initCount:e.initCount+1,initAt:e.initCount===0?Wt():e.initAt}))},s=e=>t=>{a(e,t)},c=()=>{let e=r();if(!e)return;let i=e.getBoundingClientRect(),a=Math.max(i.top,0),o=Math.min(i.bottom,window.innerHeight),s=e.querySelectorAll(`[data-chart-id]`);for(let e of s){let r=Number(e.dataset.chartId);if(!_s(r)||t[r].seen)continue;let i=e.getBoundingClientRect();i.bottom>=a&&i.top<=o&&n(r,`seen`,!0)}};return{initFor:o,refFor:s,reportInstance:a,updateSeen:c,scrollToChart:e=>{let t=r(),n=t?.querySelector(`[data-chart-id="${String(e)}"]`);t&&n&&t.scrollTo({top:n.offsetTop-16,behavior:`instant`})},remount:()=>{d(()=>{n(Qi(Ss())),i(e=>e+1)}),r()?.scrollTo({top:0,behavior:`instant`}),c()}}},Ts=e=>e?`instance`:`no instance`,Es=e=>{let{status:t}=e,n=(e,t)=>gs.filter(e).map(t);return{deferred:n(e=>vs[e].deferred,e=>({label:`Chart ${String(e)} (${vs[e].short}): instance only once scrolled into view`,expected:()=>Ts(t[e].seen),actual:()=>Ts(t[e].hasInstance),pass:()=>t[e].hasInstance===t[e].seen})),immediate:n(e=>!vs[e].deferred,e=>({label:`Chart ${String(e)} (${vs[e].short}): instance at mount, below the fold`,expected:()=>Ts(!0),actual:()=>Ts(t[e].hasInstance),pass:()=>t[e].hasInstance})),initCount:n(()=>!0,e=>({label:`Chart ${String(e)} (${vs[e].short}): onInit fires exactly once`,expected:()=>t[e].hasInstance?`1`:`0`,actual:()=>String(t[e].initCount),pass:()=>t[e].initCount===+!!t[e].hasInstance}))}},Ds=e=>R({tooltip:{trigger:`axis`},xAxis:{type:`category`,data:W},yAxis:{type:`value`},series:[{type:`bar`,data:G.map(t=>t+e*60)}]}),Os=y(`<div>`),ks=e=>{let[t,n]=l(null),{instance:i}=ot(t,{initOnVisible:!0});return dt(i,()=>e.option()),f(S(i,t=>{e.onInstance(t),t&&e.onInit(t)})),(()=>{var t=Os();return p(n,t),r(()=>C(t,e.class)),t})()},As=y(`<div class="border border-brand-300/50 rounded-lg h-96 relative overflow-y-auto">`),js=y(`<div class=mb-4>`),Ms=y(`<div class="p-4 flex flex-col gap-16"><div class="text-sm text-brand-300 flex shrink-0 h-112 items-center justify-center">Scroll down: every chart below starts outside the panel`),Ns=y(`<div><strong></strong><strong>`),Ps=()=>{let e=Cs(),t=ws(e),n=Es(e);return{...e,...t,checklist:n}},Fs=()=>{let e=Ps();c(()=>{e.updateSeen(),window.addEventListener(`scroll`,e.updateSeen,{capture:!0,passive:!0}),s(()=>{window.removeEventListener(`scroll`,e.updateSeen,{capture:!0})})});let t=gs.map(t=>({label:`Chart ${String(t)}`,onClick:()=>{e.scrollToChart(t)}}));return[n(U,{get children(){var t=As(),r=e.setPanel;return typeof r==`function`?p(r,t):e.setPanel=t,T(t,n(E,{get when(){return e.epoch()},keyed:!0,children:t=>(()=>{var r=Ms();return r.firstChild,re(r,`data-epoch`,t),T(r,n(bs,{id:1,get children(){return n(_t,{class:`chart-sm`,option:()=>Ds(1),initOnVisible:!0,ref(t){var n=e.refFor(1);typeof n==`function`&&n(t)},get onInit(){return e.initFor(1)}})}}),null),T(r,n(D,{initOnVisible:!0,get children(){return[n(bs,{id:2,get children(){return n(_t,{class:`chart-sm`,option:()=>Ds(2),ref(t){var n=e.refFor(2);typeof n==`function`&&n(t)},get onInit(){return e.initFor(2)}})}}),n(bs,{id:3,get children(){return n(_t,{class:`chart-sm`,option:()=>Ds(3),initOnVisible:!1,ref(t){var n=e.refFor(3);typeof n==`function`&&n(t)},get onInit(){return e.initFor(3)}})}})]}}),null),T(r,n(bs,{id:4,get children(){return n(ks,{class:`chart-sm`,option:()=>Ds(4),get onInit(){return e.initFor(4)},onInstance:t=>{e.reportInstance(4,t)}})}}),null),T(r,n(bs,{id:5,get children(){return n(_t,{class:`chart-sm`,option:()=>Ds(5),ref(t){var n=e.refFor(5);typeof n==`function`&&n(t)},get onInit(){return e.initFor(5)}})}}),null),r})()})),t}}),n(H,{get children(){return[n(F,{get sections(){return[{title:`DEFERRED - initOnVisible is true`,items:e.checklist.deferred},{title:`IMMEDIATE - initOnVisible is false or unset`,items:e.checklist.immediate},{title:`onInit - once per instance`,items:e.checklist.initCount}]}}),n(K,{get children(){return n(h,{each:gs,children:t=>(()=>{var n=Ns(),r=n.firstChild,i=r.nextSibling;return T(n,()=>`Chart ${String(t)} (${vs[t].short}): `,r),T(r,()=>e.status[t].hasInstance?`instance ✓`:`no instance ×`),T(n,()=>`, in view yet: ${e.status[t].seen?`yes`:`no`}, onInit ${String(e.status[t].initCount)}x, first at `,i),T(i,()=>e.status[t].initAt),n})()})}}),(()=>{var e=js();return T(e,n(hs,{title:`Scroll the panel to`,actions:t})),e})(),n(P,{get children(){return n(N,{get onClick(){return e.remount},children:`Remount charts and reset counters`})}}),n(z,{code:ps})]}})]},Is=`import type { Component } from "solid-js";
import { createSignal, Show } from "solid-js";

import type { EChartsOption, EChartsType } from "@amad3v/solid-echarts";
import { seSetup, SolidEChart, ToolboxComponent } from "@amad3v/solid-echarts";

// Only needed for the localized toolbox titles below.
seSetup([ToolboxComponent]);

const option: EChartsOption = {
  toolbox: { feature: { saveAsImage: {}, restore: {} } },
  xAxis: { type: "value", min: 0, max: 10 },
  yAxis: { type: "value", min: 0, max: 10 },
  series: [{ type: "scatter", symbolSize: 10, data: [[5, 5]] }],
};

export const Example: Component = () => {
  const [locale, setLocale] = createSignal("EN");
  const [mountId, setMountId] = createSignal(1);

  const report = (chart: EChartsType) => {
    // getOption() holds the resolved defaults, including the localized titles.
    console.log("dpr", chart.getDevicePixelRatio(), "size", chart.getWidth(), chart.getHeight());
  };

  return (
    <>
      {/* These props are read once, when the instance is created:
          locale, devicePixelRatio, useDirtyRect, useCoarsePointer, pointerSize,
          width, height, resizeDebounce (also ssr, initOnVisible, onResize).
          Changing the signals afterwards does nothing. Unset useCoarsePointer /
          pointerSize leave ECharts' own defaults: an enlarged pointer (size 44)
          on touch devices only. */}
      <Show when={mountId()} keyed>
        {(_id) => (
          <SolidEChart
            option={() => option}
            locale={locale}
            devicePixelRatio={2}
            useCoarsePointer
            pointerSize={32}
            useDirtyRect
            width={480}
            height={300}
            resizeDebounce={250}
            onInit={report}
            // The only prop that recreates the instance is \`renderer\`, and the
            // new instance reuses the values captured above, not the current props.
            onReInit={report}
            style={{ width: "100%", height: "400px" }}
          />
        )}
      </Show>

      <button onClick={() => setLocale((l) => (l === "EN" ? "ZH" : "EN"))}>
        {"Change locale (ignored until a new component is created)"}
      </button>
      {/* Creating a new component is how new init-only values get applied. */}
      <button onClick={() => setMountId((id) => id + 1)}>{"Remount chart"}</button>
    </>
  );
};
`,Ls=e=>{let t={unset:void 0,true:!0,false:!1}[e.coarsePointer];return{locale:e.locale,devicePixelRatio:e.devicePixelRatio,useDirtyRect:e.useDirtyRect,useCoarsePointer:t,pointerSize:e.pointerSizeEnabled?e.pointerSize:void 0,width:e.fixedSize?e.width:void 0,height:e.fixedSize?e.height:void 0,resizeDebounce:e.resizeDebounce}},Rs=()=>{let[e,t]=Ji({renderer:`canvas`,locale:`EN`,devicePixelRatio:1,coarsePointer:`unset`,pointerSizeEnabled:!1,pointerSize:16,useDirtyRect:!1,fixedSize:!1,width:480,height:240,resizeDebounce:100}),[n,r]=l(Ls(e)),[i,a]=l(1),[o,s]=l(!1),[c,u]=l(null),[d,f]=l(0),[p,m]=l(0),[h,g]=l(0),[_,v]=l(null);return{controls:e,setControls:t,init:n,setInit:r,mountId:i,setMountId:a,narrow:o,setNarrow:s,readout:c,setReadout:u,initCount:d,setInitCount:f,reInitCount:p,setReInitCount:m,switchCount:h,setSwitchCount:g,resizeLatency:_,setResizeLatency:v}},zs=[5,5],Bs=`#e5edf9`,Vs=()=>({animation:!1,toolbox:{feature:{saveAsImage:{},restore:{}},iconStyle:{borderColor:Bs}},xAxis:{type:`value`,min:0,max:10,...St},yAxis:{type:`value`,min:0,max:10,...St},series:[{type:`scatter`,symbolSize:10,data:[zs]}]}),Hs=90,Us={EN:`Save as Image`,ZH:`保存为图片`},Ws=e=>typeof e==`object`&&!!e,Gs=e=>{let t=e.getOption().toolbox,n=Array.isArray(t)?t[0]:t;if(!Ws(n)||!Ws(n.feature))return``;let r=n.feature.saveAsImage;return Ws(r)&&typeof r.title==`string`?r.title:``},Ks=e=>{let t=e.convertToPixel({seriesIndex:0},zs);if(!Array.isArray(t))return-1;let[n,r]=t,i=e.getZr(),a=-1;for(let e=0;e<=Hs;e+=1)i.findHover(n+e,r)?.target&&(a=e);return a},qs=e=>{let t=e.getDom(),n=t.querySelector(`canvas`);return{devicePixelRatio:e.getDevicePixelRatio(),width:e.getWidth(),height:e.getHeight(),containerWidth:t.clientWidth,containerHeight:t.clientHeight,canvasWidth:n?n.width:null,saveTitle:Gs(e),hitRadius:Ks(e)}},Js=e=>{let{controls:t,setControls:n,setInit:r,setMountId:i,setNarrow:a,setReadout:o,setInitCount:s,setReInitCount:c,setSwitchCount:l,setResizeLatency:u}=e,f=null,p=0,m=e=>{e.isDisposed()||o(qs(e))};return{handleInit:e=>{f=e,s(I),m(e)},handleReInit:e=>{f=e,c(I),m(e)},handleDispose:()=>{f=null},handleFinished:(e,t)=>{m(t)},handleResize:()=>{u(Math.round(performance.now()-p)),f&&m(f)},toggleRenderer:()=>{l(I),n(`renderer`,e=>e===`canvas`?`svg`:`canvas`)},toggleContainerWidth:()=>{p=performance.now(),u(null),a(e=>!e)},remount:()=>{d(()=>{r(Ls(t)),o(null),s(0),c(0),l(0),u(null),i(I)})}}},Ys=`-`,Xs=`n/a (svg)`,Zs=44,Qs=4,$s=1,ec=50,tc=()=>`ontouchstart`in window,nc=e=>{let t=e.useCoarsePointer??tc(),n=e.pointerSize??Zs;return!t||n<=0?5:5+Qs*(Math.ceil(n/8)-1)},rc=(e,t,n=$s)=>Math.abs(e-t)<=n,ic=e=>{let{init:t,readout:n,initCount:r,reInitCount:i,switchCount:a,resizeLatency:o}=e,s=()=>n()?.canvasWidth!=null;return[{title:`INIT-ONLY PROPS - THE INSTANCE KEEPS ITS CREATION VALUES`,items:[{label:`devicePixelRatio - the instance keeps the value from creation`,expected:()=>s()?String(t().devicePixelRatio):Xs,actual:()=>{let e=n();return e?s()?String(e.devicePixelRatio):Xs:Ys},pass:()=>{let e=n();return e?!s()||rc(e.devicePixelRatio,t().devicePixelRatio,.001):!1}},{label:`Canvas backing store = chart width x devicePixelRatio (physical pixels)`,expected:()=>{let e=n();return!e||!s()?Xs:String(Math.round(e.width*t().devicePixelRatio))},actual:()=>{let e=n();return e?.canvasWidth==null?Xs:String(e.canvasWidth)},pass:()=>{let e=n();return e?e.canvasWidth===null||rc(e.canvasWidth,e.width*t().devicePixelRatio):!1}},{label:`locale - default toolbox titles come from the init-time locale`,expected:()=>Us[t().locale],actual:()=>n()?.saveTitle??Ys,pass:()=>n()?.saveTitle===Us[t().locale]},{label:`width / height - fixed at init, otherwise the container size`,expected:()=>{let{width:e,height:r}=t();if(e!==void 0&&r!==void 0)return`${e} x ${r}`;let i=n();return i?`${i.containerWidth} x ${i.containerHeight}`:Ys},actual:()=>{let e=n();return e?`${e.width} x ${e.height}`:Ys},pass:()=>{let e=n();if(!e)return!1;let{width:r,height:i}=t();return r!==void 0&&i!==void 0?e.width===r&&e.height===i:rc(e.width,e.containerWidth)&&rc(e.height,e.containerHeight)}},{label:`useCoarsePointer / pointerSize - hit area around the 5px probe point`,expected:()=>`${nc(t())} px`,actual:()=>{let e=n();return e?`${e.hitRadius} px`:Ys},pass:()=>{let e=n();return e!==null&&rc(e.hitRadius,nc(t()))}},{label:`resizeDebounce - resize callback waits the init-time delay`,expected:()=>`≥ ${t().resizeDebounce} ms`,actual:()=>{let e=o();return e===null?`resize the container`:`${e} ms`},pass:()=>{let n=o();if(n===null)return!0;let{resizeDebounce:r}=t(),i=e.controls.resizeDebounce,a=i>r+ec?n<i:!0;return n>=r&&a}}]},{title:`WHAT RECREATES THE INSTANCE`,items:[{label:`onInit fires once per mounted component`,expected:()=>`1`,actual:()=>String(r()),pass:()=>r()===1},{label:`Only the renderer reinits - onReInit count === renderer switches`,expected:()=>String(a()),actual:()=>String(i()),pass:()=>i()===a()}]}]},ac=`unset`,oc=`no public readout`,sc=`-`,cc=e=>e===void 0?ac:String(e),lc=(e,t)=>e===void 0||t===void 0?`container`:`${e} x ${t}`,uc=(e,t,n,r)=>[{name:`devicePixelRatio`,now:cc(e.devicePixelRatio),atInit:cc(t.devicePixelRatio),instance:n?cc(n.devicePixelRatio):sc},{name:`locale`,now:e.locale,atInit:t.locale,instance:n?`"${n.saveTitle}"`:sc},{name:`useCoarsePointer`,now:cc(e.useCoarsePointer),atInit:cc(t.useCoarsePointer),instance:n?`hit radius ${n.hitRadius} px`:sc},{name:`pointerSize`,now:cc(e.pointerSize),atInit:cc(t.pointerSize),instance:n?`hit radius ${n.hitRadius} px`:sc},{name:`useDirtyRect`,now:cc(e.useDirtyRect),atInit:cc(t.useDirtyRect),instance:oc},{name:`width x height`,now:lc(e.width,e.height),atInit:lc(t.width,t.height),instance:n?`chart ${n.width} x ${n.height} in container ${n.containerWidth} x ${n.containerHeight}`:sc},{name:`resizeDebounce`,now:`${e.resizeDebounce} ms`,atInit:`${t.resizeDebounce} ms`,instance:r===null?oc:`last resize callback after ${r} ms`}],dc=e=>()=>uc(Ls(e.controls),e.init(),e.readout(),e.resizeLatency()),fc=y(`<div>`),pc=y(`<div class="mb-4 flex flex-wrap gap-2 items-center">`),mc=y(`<div class="gap-x-4 grid grid-cols-[auto_auto_auto_1fr]"><strong>prop</strong><strong>now</strong><strong>at creation</strong><strong>live instance reports`),hc=y(`<span>`);ft([Fe]);var gc=[{value:`EN`,label:`EN`},{value:`ZH`,label:`ZH`}],_c=[{value:`unset`,label:`unset`},{value:`true`,label:`true`},{value:`false`,label:`false`}],vc=()=>{let e=Rs(),t=Js(e),n=ic(e),r=dc(e);return{...e,...t,checklist:n,rows:r,option:Vs}},yc=()=>{let{controls:e,setControls:t,mountId:i,narrow:a,checklist:o,rows:s,option:c,handleInit:l,handleReInit:u,handleDispose:d,handleFinished:f,handleResize:p,toggleRenderer:m,toggleContainerWidth:g,remount:_}=vc(),v=()=>Ls(e),y=t=>n(V,{containerProps:{title:`Hit-test probe + locale-dependent toolbox`,note:`hover the toolbox icons for the localized titles`},option:c,renderer:()=>e.renderer,locale:()=>v().locale,devicePixelRatio:()=>v().devicePixelRatio,useDirtyRect:()=>v().useDirtyRect,useCoarsePointer:()=>v().useCoarsePointer,pointerSize:()=>v().pointerSize,width:()=>v().width,height:()=>v().height,resizeDebounce:()=>v().resizeDebounce,class:`chart-md`,"data-mount-id":t,onInit:l,onReInit:u,onDispose:d,onResize:p,onEvents:{finished:f}});return n(D,{get theme(){return M.name},get children(){return[n(U,{get children(){var e=fc();return T(e,n(E,{get when(){return i()},keyed:!0,children:y})),r(()=>C(e,Dt(`mx-auto`,a()?`w-3/5`:`w-full`))),e}}),n(H,{get children(){return[n(Sr,{title:`Props passed to the chart (edit freely - the live instance ignores them)`,get children(){return[n(Tr,{label:`devicePixelRatio`,get value(){return e.devicePixelRatio},min:1,max:3,step:.5,onChange:e=>{t(`devicePixelRatio`,e)}}),n(wr,{label:`locale`,options:gc,get value(){return e.locale},onChange:e=>{t(`locale`,e)}}),n(wr,{label:`useCoarsePointer`,options:_c,get value(){return e.coarsePointer},onChange:e=>{t(`coarsePointer`,e)}}),n(Cr,{label:`pointerSize set`,get checked(){return e.pointerSizeEnabled},onChange:e=>{t(`pointerSizeEnabled`,e)}}),n(Er,{label:`pointerSize`,get value(){return e.pointerSize},min:1,max:100,step:4,get disabled(){return!e.pointerSizeEnabled},onChange:e=>{t(`pointerSize`,e)}}),n(Cr,{label:`useDirtyRect`,get checked(){return e.useDirtyRect},onChange:e=>{t(`useDirtyRect`,e)}}),n(Cr,{label:`fixed width / height`,get checked(){return e.fixedSize},onChange:e=>{t(`fixedSize`,e)}}),n(Er,{label:`width`,get value(){return e.width},min:200,max:1200,step:40,get disabled(){return!e.fixedSize},onChange:e=>{t(`width`,e)}}),n(Er,{label:`height`,get value(){return e.height},min:120,max:352,step:20,get disabled(){return!e.fixedSize},onChange:e=>{t(`height`,e)}}),n(Er,{label:`resizeDebounce (ms)`,get value(){return e.resizeDebounce},min:0,max:1e3,step:100,onChange:e=>{t(`resizeDebounce`,e)}})]}}),(()=>{var t=pc();return T(t,n(N,{onClick:g,children:`Resize container (100% <-> 60%)`}),null),T(t,n(N,{onClick:m,get children(){return`Switch to ${e.renderer===`canvas`?`SVG`:`canvas`} renderer`}}),null),T(t,n(N,{onClick:_,children:`Remount chart (apply the props above)`}),null),t})(),n(F,{sections:o}),n(K,{get children(){var e=mc();return e.firstChild.nextSibling.nextSibling.nextSibling,T(e,n(h,{get each(){return s()},children:e=>[(()=>{var t=hc();return T(t,()=>e.name),t})(),(()=>{var t=hc();return T(t,()=>e.now),t})(),(()=>{var t=hc();return T(t,()=>e.atInit),t})(),(()=>{var t=hc();return T(t,()=>e.instance),t})()]}),null),e}}),n(z,{code:Is})]}})]}})},bc=`import type { Component } from "solid-js";
import { createSignal, onCleanup } from "solid-js";

import type { EChartsOption, EChartsType } from "@amad3v/solid-echarts";
import { DEFAULT_THEME, SolidEChart, SolidEChartProvider } from "@amad3v/solid-echarts";

const MMS_MAX_POINTS = 200;
const MMS_CHUNK_SIZE = 5;

const createExample = () => {
  const state = createState();
  const option = makeOption(MMS_MAX_POINTS);
  const actions = makeActions(state, option, MMS_MAX_POINTS, MMS_CHUNK_SIZE);

  onCleanup(actions.stopStreaming);

  return {
    initCount: state.initCount,
    loading: state.loading,
    pointCount: state.pointCount,
    streaming: state.streaming,
    doneStreaming: state.doneStreaming,
    ...actions,
  };
};

export const Example: Component = () => {
  const {
    streaming,
    doneStreaming,
    startStreaming,
    stopStreaming,
    resetChart,
    handleInit,
    loading,
  } = createExample();

  return (
    <SolidEChartProvider theme={DEFAULT_THEME}>
      <SolidEChart
        onInit={handleInit}
        loading={loading}
        loadingOptions={{ text: "Waiting for data chunk..." }}
        style={{ width: "100%", height: "380px" }}
        autoResize={true}
      />
      <div>
        <button onClick={startStreaming} disabled={streaming() || doneStreaming()}>
          {"Start streaming"}
        </button>
        <button onClick={stopStreaming} disabled={!streaming()}>
          {"Pause"}
        </button>
        <button onClick={resetChart}>{"Reset"}</button>
      </div>
    </SolidEChartProvider>
  );
};

const increment = (n: number) => n + 1;

const generateChunk = (startIndex: number, count: number): number[][] => {
  return Array.from({ length: count }, (_, i) => {
    const x = startIndex + i;
    const y = Math.sin(x / 20) * 100 + Math.random() * 30;
    return [x, y];
  });
};

const createState = () => {
  const refs = {
    chartInstance: null as EChartsType | null,
    streamIntervalId: null as ReturnType<typeof setInterval> | null,
    appendedCount: 0,
  };

  const [pointCount, setPointCount] = createSignal(0);
  const [streaming, setStreaming] = createSignal(false);
  const [loading, setLoading] = createSignal(false);
  const [initCount, setInitCount] = createSignal(0);
  const [doneStreaming, setDoneStreaming] = createSignal(false);

  return {
    initCount,
    loading,
    pointCount,
    refs,
    setInitCount,
    setLoading,
    setPointCount,
    setStreaming,
    streaming,
    doneStreaming,
    setDoneStreaming,
  };
};

type State = ReturnType<typeof createState>;

const makeActions = (
  state: State,
  chartOption: () => EChartsOption,
  maxPoints: number,
  chunckSz: number,
) => {
  const { refs } = state;
  const option = chartOption();

  const handleInit = (chart: EChartsType) => {
    refs.chartInstance = chart;
    state.setInitCount(increment);
    chart.setOption(option);
  };

  const clearStreaming = () => {
    if (refs.streamIntervalId) {
      clearInterval(refs.streamIntervalId);
      refs.streamIntervalId = null;
    }
    state.setStreaming(false);
  };

  const startStreaming = () => {
    if (state.streaming()) return;
    state.setStreaming(true);
    state.setLoading(false);

    refs.streamIntervalId = setInterval(() => {
      if (!refs.chartInstance || refs.chartInstance.isDisposed()) return;
      if (refs.appendedCount >= maxPoints) {
        clearStreaming();
        state.setDoneStreaming(true);
        state.setLoading(false);
        return;
      }

      const chunk = generateChunk(refs.appendedCount, chunckSz);
      refs.chartInstance.appendData({ seriesIndex: 0, data: chunk });
      refs.appendedCount += chunk.length;
      state.setPointCount(refs.appendedCount);

      if (refs.appendedCount === chunckSz) {
        state.setLoading(false);
      }
    }, 100);
  };

  const stopStreaming = () => {
    clearStreaming();
    state.setLoading(true);
  };

  const resetChart = () => {
    clearStreaming();
    refs.appendedCount = 0;
    state.setPointCount(0);
    state.setLoading(false);
    state.setDoneStreaming(false);
    refs.chartInstance?.setOption(option, { notMerge: true });
  };

  return {
    handleInit,
    resetChart,
    startStreaming,
    stopStreaming,
  };
};

const makeOption = (maxPoints: number) => (): EChartsOption => ({
  animation: false,
  tooltip: { trigger: "axis" },
  xAxis: { type: "value", min: 0, max: maxPoints },
  yAxis: { type: "value", min: -150, max: 150 },
  series: [{ type: "line", showSymbol: false, data: [] }],
});
`,xc=()=>{let e={chartInstance:null,streamIntervalId:null,appendedCount:0},[t,n]=l(0),[r,i]=l(!1),[a,o]=l(!1),[s,c]=l(0),[u,d]=l(!1),[f,p]=l(0),[m,h]=l(null);return{refs:e,pointCount:t,setPointCount:n,streaming:r,setStreaming:i,loading:a,setLoading:o,initCount:s,setInitCount:c,doneStreaming:u,setDoneStreaming:d,resetCount:f,setResetCount:p,dataLengthAfterReset:m,setDataLengthAfterReset:h}},Sc=e=>{let t=cn(e,`data`);return Array.isArray(t)?t.length:null},Cc=(e,t,n,r)=>{let{refs:i}=e,a=t(),o=t=>{i.chartInstance=t,e.setInitCount(I),t.setOption(a)},s=()=>{i.streamIntervalId&&=(clearInterval(i.streamIntervalId),null),e.setStreaming(!1)};return{handleInit:o,resetChart:()=>{s(),i.appendedCount=0,e.setPointCount(0),e.setLoading(!1),e.setDoneStreaming(!1);let t=i.chartInstance;t&&!t.isDisposed()&&(t.setOption(a,{notMerge:!0}),e.setDataLengthAfterReset(Sc(t))),e.setResetCount(I)},startStreaming:()=>{e.streaming()||(e.setStreaming(!0),e.setLoading(!1),i.streamIntervalId=setInterval(()=>{if(!i.chartInstance||i.chartInstance.isDisposed())return;if(i.appendedCount>=n){s(),e.setDoneStreaming(!0),e.setLoading(!1);return}let t=Ht(i.appendedCount,r);i.chartInstance.appendData({seriesIndex:0,data:t}),i.appendedCount+=t.length,e.setPointCount(i.appendedCount),i.appendedCount===r&&e.setLoading(!1)},100))},stopStreaming:()=>{s(),e.setLoading(!0)}}},wc=(e,t,n)=>{let{initCount:r,pointCount:i,doneStreaming:a,resetCount:o,dataLengthAfterReset:s}=e;return[{label:`onInit fires once - start / pause / reset reuse the same instance`,expected:()=>`1`,actual:()=>String(r()),pass:()=>r()===1},{label:`appendData streams whole chunks - points streamed is a multiple of the chunk size`,expected:()=>`multiple of ${n}, at most ${t}`,actual:()=>String(i()),pass:()=>i()%n===0&&i()<=t},{label:`Streaming stops at the axis extent - appendData cannot grow the axes`,expected:()=>a()?String(t):`${t} once done`,actual:()=>String(i()),pass:()=>!a()||i()===t},{label:`Reset - setOption({ notMerge: true }) clears the streamed series data`,expected:()=>o()===0?`press Reset`:`0`,actual:()=>{let e=s();return e===null?`-`:String(e)},pass:()=>s()===null||s()===0}]},Tc=e=>()=>R({animation:!1,tooltip:{trigger:`axis`},xAxis:{type:`value`,min:0,max:e},yAxis:{type:`value`,min:-150,max:150},series:[{type:`line`,showSymbol:!1,data:[]}]}),Ec=y(`<span>`),Dc=y(`<div>Mode: <strong>manual</strong> (option prop omitted - no reactive binding)`),Oc=y(`<div>Points streamed: <strong>`),kc=y(`<div>Init count: <strong></strong> (must stay at 1)`),Ac=y(`<div>Streaming: <strong>`),jc=()=>{let e=xc(),t=Cc(e,Tc(200),200,5),n=wc(e,200,5);return s(t.stopStreaming),{...e,...t,checklist:n}},Mc=()=>{let{pointCount:e,initCount:t,streaming:r,doneStreaming:i,startStreaming:a,stopStreaming:o,resetChart:s,handleInit:c,loading:l,checklist:u}=jc();return n(D,{get theme(){return M.name},get children(){return[n(U,{get children(){return n(V,{onInit:c,loading:l,loadingOptions:{text:`Waiting for data chunk...`},class:`h-380px w-full`,autoResize:!0})}}),n(H,{get children(){return[n(F,{sections:[{items:u}]}),n(jt,{get children(){var e=Ec();return T(e,()=>en(`No signals involved in rendering. Data streams directly via appendData - no setOption cycles, no reactive overhead. The loading prop is still reactive and managed by a signal.`)),e}}),n(K,{get children(){return[Dc(),(()=>{var t=Oc(),n=t.firstChild.nextSibling;return T(n,()=>`${e()} / 200`),t})(),(()=>{var e=kc(),n=e.firstChild.nextSibling;return T(n,t),e})(),(()=>{var e=Ac(),t=e.firstChild.nextSibling;return T(t,()=>r()?`yes`:`no`),e})()]}}),n(P,{get children(){return[n(N,{onClick:a,get disabled(){return r()||i()},children:`Start streaming`}),n(N,{onClick:o,get disabled(){return!r()},children:`Pause`}),n(N,{onClick:s,children:`Reset`})]}}),n(z,{code:bc})]}})]}})},Nc=`import type { Component } from "solid-js";
import { createSignal } from "solid-js";

import type { EChartsOption, SeriesOption } from "@amad3v/solid-echarts";
import { SolidEChart } from "@amad3v/solid-echarts";

const initialSeries: SeriesOption[] = [
  { name: "Revenue", type: "bar", data: [820, 932, 901, 934, 1290, 1330, 1320] },
  { name: "Expenses", type: "line", data: [620, 732, 701, 734, 1090, 1130, 1120] },
];

const replacementSeries: SeriesOption[] = [
  { name: "Forecast", type: "bar", data: [900, 1000, 950, 1100, 1400, 1450, 1500] },
];

export const Example: Component = () => {
  const [replaced, setReplaced] = createSignal(false);

  const option = (): EChartsOption => ({
    xAxis: { type: "category", data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
    yAxis: { type: "value" },
    series: replaced() ? replacementSeries : initialSeries,
  });

  const style = { width: "100%", height: "280px" };

  return (
    <>
      {/* Default merge: Forecast takes over index 0, Expenses lingers -> 2 series. */}
      <SolidEChart option={option} style={style} />

      {/* notMerge: the model is reset, only Forecast remains -> 1 series. */}
      <SolidEChart option={option} notMerge style={style} />

      {/* replaceMerge: series are replaced, axes and the rest are merged -> 1 series. */}
      <SolidEChart option={option} replaceMerge={["series"]} style={style} />

      <button onClick={() => setReplaced((r) => !r)}>{"Switch series"}</button>
    </>
  );
};
`,Pc=()=>{let[e,t]=l(!1),[n,r]=l(`-`),[i,a]=l(`-`),[o,s]=l(`-`);return{useReplacement:e,setUseReplacement:t,countA:n,setCountA:r,countB:i,setCountB:a,countC:o,setCountC:s}},Fc=(e,t)=>{t(Vt(e))},Ic=e=>{let{setCountA:t,setCountB:n,setCountC:r,setUseReplacement:i}=e;return{finishedA:(e,n)=>{Fc(n,t)},finishedB:(e,t)=>{Fc(t,n)},finishedC:(e,t)=>{Fc(t,r)},handleReset:()=>{i(!1)},handleSwitch:()=>{i(!0)}}},Lc=e=>{let{useReplacement:t,countA:n,countB:r,countC:i}=e;return[{label:`Initial state - all 3 charts render 2 series (Revenue + Expenses)`,expected:()=>t()?`varies`:`2 / 2 / 2`,actual:()=>`${n()} / ${r()} / ${i()}`,pass:()=>t()?!0:n()===2&&r()===2&&i()===2},{label:`notMerge: false - absent series linger (Expenses kept, count stays at 2)`,expected:()=>`2`,actual:()=>String(n()),pass:()=>n()===`-`||n()===2},{label:`notMerge: true - full replacement, only Forecast survives (count = 1 after switch)`,expected:()=>t()?`1`:`2`,actual:()=>String(r()),pass:()=>r()===`-`?!0:t()?r()===1:r()===2},{label:`replaceMerge: ['series'] - targeted replacement, only Forecast survives (count = 1 after switch)`,expected:()=>t()?`1`:`2`,actual:()=>String(i()),pass:()=>i()===`-`?!0:t()?i()===1:i()===2}]},Rc=W,zc=In.initialSeries,Bc=In.replacementSeries,Vc=e=>()=>R({tooltip:{trigger:`axis`},legend:{},xAxis:{type:`category`,data:Rc},yAxis:{type:`value`},series:e.useReplacement()?Bc:zc}),Hc=()=>{let e=Pc(),t=Ic(e),n=Lc(e),r=Vc(e);return{...e,...t,checklist:n,option:r}},Uc=()=>{let{finishedA:e,finishedB:t,finishedC:r,handleReset:i,handleSwitch:a,option:o,checklist:s}=Hc();return n(D,{get theme(){return M.name},get children(){return[n(U,{class:`gap-4 grid grid-cols-3`,get children(){return[n(V,{containerProps:{title:`notMerge: false (default)`,note:`After switch: Revenue replaced by index, Expenses lingers - expect 2 series`},option:o,class:`chart-sm`,notMerge:!1,onEvents:{finished:e}}),n(V,{containerProps:{title:`notMerge: true`,note:`After switch: full replace - expect only Forecast`},option:o,notMerge:!0,class:`chart-sm`,onEvents:{finished:t}}),n(V,{containerProps:{title:`replaceMerge: ['series']`,note:`After switch: series replaced - expect only Forecast`},option:o,replaceMerge:[`series`],class:`chart-sm`,onEvents:{finished:r}})]}}),n(H,{get children(){return[n(F,{sections:[{title:`MERGE STRATEGY CHECKLIST - switch series to verify`,items:s}]}),n(P,{get children(){return[n(N,{onClick:i,children:`Reset to initial (Revenue + Expenses)`}),n(N,{onClick:a,children:`Switch to replacement (Forecast only)`})]}}),n(z,{code:Nc})]}})]}})},Wc=`import type { Component } from "solid-js";

import type { EChartsOption, EChartsType } from "@amad3v/solid-echarts";
import {
  BrushComponent,
  GeoComponent,
  SolidEChart,
  TimelineComponent,
  registerMap,
  seActions,
  seSetup,
} from "@amad3v/solid-echarts";

// Components the actions below act on must be registered (once is enough).
seSetup([BrushComponent, GeoComponent, TimelineComponent]);

// A tiny hand-made GeoJSON, no network fetch.
registerMap("grid", {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "A" },
      geometry: { type: "Polygon", coordinates: [[[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]]] },
    },
  ],
});

const option: EChartsOption = {
  legend: { data: ["Revenue", "Expenses"] },
  geo: [{ id: "west", map: "grid", roam: true, left: 0, right: "50%" }],
  series: [
    { name: "Revenue", type: "bar", data: [3, 5, 4] },
    { name: "Expenses", type: "bar", data: [2, 3, 3] },
  ],
};

const run = (chart: EChartsType) => {
  // \`name\` is required for legendSelect / legendUnSelect.
  chart.dispatchAction(seActions.legendUnSelect({ name: "Expenses" }));
  chart.dispatchAction(seActions.legendSelect({ name: "Expenses" }));

  // 1.1.0 additions: dataZoomId, pixel x / y for showTip, notBlur for downplay.
  chart.dispatchAction(seActions.dataZoom({ dataZoomId: "zoom-y", start: 20, end: 70 }));
  chart.dispatchAction(seActions.showTip({ x: 220, y: 120 }));
  chart.dispatchAction(seActions.downplay({ seriesIndex: 0, notBlur: true }));

  // A BrushArea needs a brushType. \`areas: []\` clears the selection. The
  // selection comes back in the brushselected event.
  chart.dispatchAction(
    seActions.brush({ areas: [{ brushType: "lineX", coordRange: [1, 2], xAxisIndex: 0 }] }),
  );

  // Needs a TimelineComponent with options[] in the option.
  chart.dispatchAction(seActions.timelineChange({ currentIndex: 2 }));
  chart.dispatchAction(seActions.timelinePlayChange({ playState: true }));

  // geoId / geoIndex pick a geo component, otherwise map series are targeted.
  chart.dispatchAction(seActions.geoRoam({ geoId: "west", dx: 30, dy: 10 }));
  chart.dispatchAction(
    seActions.geoRoam({ geoIndex: 0, zoom: 1.5, originX: 100, originY: 100 }),
  );
};

export const Example: Component = () => (
  <SolidEChart
    option={() => option}
    style={{ width: "100%", height: "400px" }}
    onInit={run}
    onEvents={{
      // legendSelect fires legendselected, legendUnSelect fires legendunselected.
      legendunselected: () => console.log("legendunselected"),
      brushselected: () => console.log("brushselected"),
      timelinechanged: () => console.log("timelinechanged"),
      georoam: () => console.log("georoam"),
    }}
  />
);
`,Gc=y(`<div><strong>`),Kc=y(`<div class="p-2 border border-brand-300 bg-white max-h-32 select-none overflow-y-auto">`),qc=y(`<div class="text-xs text-brand-400 font-mono">`),Jc=`Move mouse over chart or click`,Yc=e=>(()=>{var t=Gc(),n=t.firstChild;return T(t,()=>`[${e.time}] `,n),T(n,()=>` ${e.event}`),T(t,()=>e.entry,null),r(()=>C(t,Dt(`text-xs font-mono`,e.isRegular?`text-rose-700`:`text-brand-700`))),t})(),Xc=e=>(()=>{var r=Kc();return T(r,n(E,{get when(){return e.entries.length>0},get fallback(){return(()=>{var t=qc();return T(t,()=>`${e.placeholder??Jc}…`),t})()},get children(){return n(h,{get each(){return e.entries},children:r=>n(Yc,t({get time(){return r.time},get event(){return String(r[e.eventKey])}},()=>e.entryMapper(r)))})}})),r})(),Zc=()=>{let[e,t]=l(null),[n,r]=l(null),[i,a]=l(null),[o,s]=l(null),[c,u]=Ji({legendselectchanged:0,legendselected:0,legendunselected:0,datazoom:0,showtip:0,downplay:0,brush:0,brushselected:0,brushEnd:0,timelinechanged:0,timelineplaychanged:0,georoam:0}),[d,f]=Ji({legendselectchanged:``,legendselected:``,legendunselected:``,datazoom:``,showtip:``,downplay:``,brush:``,brushselected:``,brushEnd:``,timelinechanged:``,timelineplaychanged:``,georoam:``}),[p,m]=Ji({legendUnSelect:null,legendSelect:null,dataZoomId:null,showTipXY:null,downplayNotBlur:null,brushLineX:null,brushRect:null,brushClear:null,timelineChange:null,timelinePlayChange:null,geoRoamPanById:null,geoRoamZoomByIndex:null}),[h,g]=l([]);return{instances:{legend:e,brush:n,timeline:i,geo:o},setInstances:{legend:t,brush:r,timeline:a,geo:s},counts:c,setCounts:u,details:d,setDetails:f,checks:p,setChecks:m,log:h,setLog:g}},Qc=e=>[{title:`LEGEND (name is required in 1.1.0)`,actions:[{label:`Unselect Expenses`,onClick:()=>{e.legend(`legendUnSelect`,`Expenses`)}},{label:`Select Expenses`,onClick:()=>{e.legend(`legendSelect`,`Expenses`)}},{label:`Unselect Profit`,onClick:()=>{e.legend(`legendUnSelect`,`Profit`)}},{label:`Select Profit`,onClick:()=>{e.legend(`legendSelect`,`Profit`)}}]},{title:`DATAZOOM by dataZoomId / TOOLTIP x, y / DOWNPLAY notBlur`,actions:[{label:`zoom-y 20-70`,onClick:()=>{e.zoomY(20,70)}},{label:`zoom-y 0-100`,onClick:()=>{e.zoomY(0,100)}},{label:`Show tip at x 220, y 120`,onClick:()=>{e.showTipAt(220,120)}},{label:`Hide tip`,onClick:e.hideTip},{label:`Highlight Revenue`,onClick:e.highlightRevenue},{label:`Downplay (notBlur)`,onClick:e.downplayNotBlur}]},{title:`BRUSH areas`,actions:[{label:`lineX x 2.5-5.5`,onClick:()=>{e.brush(`lineX`)}},{label:`rect x 5.5-9.5, y 3.5-8.5`,onClick:()=>{e.brush(`rect`)}},{label:`Clear (areas: [])`,onClick:()=>{e.brush(`clear`)}}]},{title:`TIMELINE`,actions:[{label:`Go to 2022`,onClick:()=>{e.timelineGo(0)}},{label:`Go to 2025`,onClick:()=>{e.timelineGo(3)}},{label:`Play`,onClick:()=>{e.timelinePlay(!0)}},{label:`Pause`,onClick:()=>{e.timelinePlay(!1)}}]},{title:`GEO roam by geoId / geoIndex`,actions:[{label:`Pan east (geoId)`,onClick:e.geoPanEast},{label:`Zoom west x1.5 (geoIndex)`,onClick:e.geoZoomWest}]}],$c=`toy-grid`,el=(e,t,n)=>({type:`Feature`,properties:{name:e},geometry:{type:`Polygon`,coordinates:[[[t,n],[t+1,n],[t+1,n+1],[t,n+1],[t,n]]]}}),tl={type:`FeatureCollection`,features:[el(`North`,0,1),el(`East`,1,0),el(`South`,0,0),el(`West`,1,1)]},nl=xt.textStyle.color,rl=`zoom-x`,il=`zoom-y`,al=`west`,ol=`east`,sl=[`2022`,`2023`,`2024`,`2025`],cl=[[1,3],[2,5],[3,2],[4,6],[5,4],[6,7],[7,3],[8,8],[9,5],[10,6]],ll=()=>R({tooltip:{trigger:`axis`},legend:{data:[`Revenue`,`Expenses`,`Profit`]},grid:{bottom:70,right:60},dataZoom:[{id:rl,type:`slider`,xAxisIndex:0},{id:il,type:`slider`,yAxisIndex:0,filterMode:`none`,right:8}],xAxis:{type:`category`,data:Tn},yAxis:{type:`value`},series:[{name:`Revenue`,type:`bar`,data:[120,132,101,134,90,230,210,182,191,234,290,330],emphasis:{focus:`self`}},{name:`Expenses`,type:`line`,data:[80,92,91,94,70,130,120,112,111,134,160,180]},{name:`Profit`,type:`line`,data:[40,40,10,40,20,100,90,70,80,100,130,150]}]}),ul=()=>R({tooltip:{},toolbox:{feature:{brush:{type:[`rect`,`lineX`,`clear`]}},iconStyle:{borderColor:nl}},brush:{xAxisIndex:0,brushType:`rect`,outOfBrush:{colorAlpha:.25}},xAxis:{type:`value`,min:0,max:11,...St},yAxis:{type:`value`,min:0,max:10,...St},series:[{type:`scatter`,symbolSize:14,data:cl}]}),dl=()=>({baseOption:{timeline:{axisType:`category`,data:sl,autoPlay:!1,loop:!1,playInterval:1500,label:{color:nl},lineStyle:{color:nl}},legend:{show:!1},tooltip:{},xAxis:{type:`category`,data:[`Press`,`Mixer`,`Packer`],...St},yAxis:{type:`value`,max:100,...St},series:[{type:`bar`}]},options:[{series:[{data:[40,62,35]}]},{series:[{data:[55,48,70]}]},{series:[{data:[80,52,64]}]},{series:[{data:[66,90,58]}]}]}),fl=(e,t)=>({id:e,map:$c,roam:!0,zoom:1,left:t===`left`?0:`50%`,right:t===`left`?`50%`:0,label:{show:!0,color:nl},itemStyle:{areaColor:`#3b5b8c`,borderColor:nl}}),pl=()=>({geo:[fl(al,`left`),fl(ol,`right`)]}),ml=e=>Array.isArray(e)?`[${e.map(e=>typeof e==`number`?e.toFixed(2):String(e)).join(`, `)}]`:`-`,hl=(e,t)=>{let n=an(on(e.getOption(),`legend`)[0],`selected`);return String(an(n,t))},gl=(e,t)=>{let n=on(e.getOption(),`dataZoom`).find(e=>an(e,`id`)===t),r=sn(n,`start`),i=sn(n,`end`);return r===void 0||i===void 0?`-`:`${Math.round(r)}-${Math.round(i)}`},_l=e=>String(sn(on(e.getOption(),`timeline`)[0],`currentIndex`)),vl=(e,t)=>{let n=on(e.getOption(),`geo`).find(e=>an(e,`id`)===t);return{zoom:sn(n,`zoom`)??1,center:ml(an(n,`center`))}},yl={lineX:`[2,3,4]`,rect:`[5,7,8]`,clear:`[]`},bl={lineX:`brushLineX`,rect:`brushRect`,clear:`brushClear`},xl=e=>{let t=on(e,`batch`)[0],n=on(t,`selected`)[0],r=an(n,`dataIndex`);return`dataIndex=${Array.isArray(r)?JSON.stringify(r):`none`}`},Sl=(e,t)=>e===`brushselected`?xl(t):un(t),Cl=e=>e.toFixed(2),wl=e=>{let{instances:t,counts:n,setCounts:r,details:i,setDetails:a,setChecks:o,setLog:s}=e,c=e=>{let n=t[e]();return n!==null&&!n.isDisposed()?n:null},l=e=>t=>{let n=Sl(e,t);r(e,I),a(e,n),s(t=>[{time:Wt(),event:e,detail:n},...t].slice(0,15))},u={legendselectchanged:l(`legendselectchanged`),legendselected:l(`legendselected`),legendunselected:l(`legendunselected`),datazoom:l(`datazoom`),showtip:l(`showtip`),downplay:l(`downplay`),brush:l(`brush`),brushselected:l(`brushselected`),brushEnd:l(`brushEnd`),timelinechanged:l(`timelinechanged`),timelineplaychanged:l(`timelineplaychanged`),georoam:l(`georoam`)},d=({id:e,chart:t,payload:r,events:i,repeatable:a=!1,expectedState:s,readState:c})=>{let l=a?`≥1`:`1`,u=i.map(e=>({event:e,count:n[e]}));t.dispatchAction(r);let d=u.map(({event:e,count:t})=>{let r=n[e]-t;return`${e} x${a&&r>=1?l:r}`});o(e,{expected:[...i.map(e=>`${e} x${l}`),s].filter(Boolean).join(`; `),actual:[...d,c()].filter(Boolean).join(`; `)})};return{handlers:u,legend:(e,t)=>{let n=c(`legend`);if(!n)return;let r=e===`legendSelect`;d({id:e,chart:n,payload:r?A.legendSelect({name:t}):A.legendUnSelect({name:t}),events:[r?`legendselected`:`legendunselected`],expectedState:`selected.${t}=${String(r)}`,readState:()=>`selected.${t}=${hl(n,t)}`})},zoomY:(e,t)=>{let n=c(`legend`);if(!n)return;let r=gl(n,rl);d({id:`dataZoomId`,chart:n,payload:A.dataZoom({dataZoomId:il,start:e,end:t}),events:[`datazoom`],expectedState:`${il} ${e}-${t}, ${rl} ${r}`,readState:()=>`${il} ${gl(n,il)}, ${rl} ${gl(n,rl)}`})},showTipAt:(e,t)=>{let n=c(`legend`);n&&d({id:`showTipXY`,chart:n,payload:A.showTip({x:e,y:t}),events:[`showtip`],repeatable:!0,expectedState:`x=${e} y=${t}`,readState:()=>`${dn(i.showtip,`x`)} ${dn(i.showtip,`y`)}`})},hideTip:()=>{c(`legend`)?.dispatchAction(A.hideTip())},highlightRevenue:()=>{c(`legend`)?.dispatchAction(A.highlight({seriesIndex:0}))},downplayNotBlur:()=>{let e=c(`legend`);e&&d({id:`downplayNotBlur`,chart:e,payload:A.downplay({seriesIndex:0,notBlur:!0}),events:[`downplay`],expectedState:`notBlur=true`,readState:()=>dn(i.downplay,`notBlur`)})},brush:e=>{let t=c(`brush`);if(!t)return;let n={lineX:A.brush({areas:[{brushType:`lineX`,coordRange:[2.5,5.5],xAxisIndex:0}]}),rect:A.brush({areas:[{brushType:`rect`,coordRange:[[5.5,9.5],[3.5,8.5]],xAxisIndex:0,yAxisIndex:0}]}),clear:A.brush({areas:[]})};d({id:bl[e],chart:t,payload:n[e],events:[`brush`,`brushselected`],expectedState:`dataIndex=${yl[e]}`,readState:()=>i.brushselected})},timelineGo:e=>{let t=c(`timeline`);t&&d({id:`timelineChange`,chart:t,payload:A.timelineChange({currentIndex:e}),events:[`timelinechanged`],expectedState:`currentIndex=${e}`,readState:()=>`currentIndex=${_l(t)}`})},timelinePlay:e=>{let t=c(`timeline`);t&&d({id:`timelinePlayChange`,chart:t,payload:A.timelinePlayChange({playState:e}),events:[`timelineplaychanged`],expectedState:`playState=${String(e)}`,readState:()=>dn(i.timelineplaychanged,`playState`)})},geoPanEast:()=>{let e=c(`geo`);if(!e)return;let t={west:vl(e,al),east:vl(e,ol)},n=(t,n)=>vl(e,t).center===n?`unchanged`:`changed`;d({id:`geoRoamPanById`,chart:e,payload:A.geoRoam({geoId:ol,dx:30,dy:10}),events:[`georoam`],expectedState:`east center changed, west center unchanged`,readState:()=>`east center ${n(ol,t.east.center)}, west center ${n(al,t.west.center)}`})},geoZoomWest:()=>{let e=c(`geo`);if(!e)return;let t=1.5,n={west:vl(e,al),east:vl(e,ol)};d({id:`geoRoamZoomByIndex`,chart:e,payload:A.geoRoam({geoIndex:0,zoom:t,originX:e.getWidth()/4,originY:e.getHeight()/2}),events:[`georoam`],expectedState:`west zoom ${Cl(n.west.zoom*t)}, east zoom ${Cl(n.east.zoom)}`,readState:()=>`west zoom ${Cl(vl(e,al).zoom)}, east zoom ${Cl(vl(e,ol).zoom)}`})}}},Tl=`press the button`,El=e=>{let{checks:t}=e,n=(e,n)=>({label:n,expected:()=>t[e]?.expected??Tl,actual:()=>t[e]?.actual??`-`,pass:()=>{let n=t[e];return n===null||n.expected===n.actual}});return[{title:`LEGEND / DATAZOOM / TOOLTIP / DOWNPLAY`,items:[n(`legendUnSelect`,`legendUnSelect - fires legendunselected, legend.selected turns false`),n(`legendSelect`,`legendSelect - fires legendselected, legend.selected turns true`),n(`dataZoomId`,`dataZoom { dataZoomId } - fires datazoom, moves only that component`),n(`showTipXY`,`showTip { x, y } - fires showtip, the pixel position is echoed`),n(`downplayNotBlur`,`downplay { notBlur } - fires downplay, notBlur is echoed`)]},{title:`BRUSH`,items:[n(`brushLineX`,`brush lineX area - fires brush + brushselected with the covered points`),n(`brushRect`,`brush rect area - fires brush + brushselected with the covered points`),n(`brushClear`,`brush { areas: [] } - fires brush + brushselected with no points`)]},{title:`TIMELINE`,items:[n(`timelineChange`,`timelineChange - fires timelinechanged, timeline.currentIndex follows`),n(`timelinePlayChange`,`timelinePlayChange - fires timelineplaychanged, playState is echoed`)]},{title:`GEO`,items:[n(`geoRoamPanById`,`geoRoam { geoId, dx, dy } - fires georoam, pans only that geo`),n(`geoRoamZoomByIndex`,`geoRoam { geoIndex, zoom } - fires georoam, zoom = previous x factor`)]}]},Dl=y(`<div class="gap-4 grid md:grid-cols-2">`),Ol=y(`<span>`),kl=y(`<div>legend: <strong>`),Al=y(`<div>datazoom / showtip / downplay: <strong>`),jl=y(`<div>brush / brushselected / brushEnd: <strong>`),Ml=y(`<div>timelinechanged / timelineplaychanged / georoam: <strong>`),Nl=y(`<div class="mb-4 flex flex-col gap-4">`),Pl=y(`<div class=mt-4>`);ft([be,Ce,Ne,Fe]),Le($c,tl);var Fl=()=>{let e=Zc(),t=wl(e);return{...e,...t,checklist:El(e),actionGroups:Qc(t),legendOption:ll,brushOption:ul,timelineOption:dl,geoOption:pl}},Il=e=>({entry:` - ${e.detail}`,isRegular:!1}),Ll=()=>{let{handlers:e,setInstances:t,counts:r,log:i,checklist:a,actionGroups:o,legendOption:s,brushOption:c,timelineOption:l,geoOption:u}=Fl();return n(D,{get theme(){return M.name},get children(){return[n(U,{get children(){var r=Dl();return T(r,n(V,{option:s,class:`chart-md`,ref(e){var n=t.legend;typeof n==`function`?n(e):t.legend=e},containerProps:{title:`legend + dataZoom + tooltip`,note:`legendSelect, dataZoomId, showTip x/y, downplay`},get onEvents(){return{legendselectchanged:e.legendselectchanged,legendselected:e.legendselected,legendunselected:e.legendunselected,datazoom:e.datazoom,showtip:e.showtip,downplay:e.downplay}}}),null),T(r,n(V,{option:c,class:`chart-md`,ref(e){var n=t.brush;typeof n==`function`?n(e):t.brush=e},containerProps:{title:`brush`,note:`BrushComponent, areas`},get onEvents(){return{brush:e.brush,brushselected:e.brushselected,brushEnd:e.brushEnd}}}),null),T(r,n(V,{option:l,class:`chart-md`,ref(e){var n=t.timeline;typeof n==`function`?n(e):t.timeline=e},containerProps:{title:`timeline`,note:`TimelineComponent with options[]`},get onEvents(){return{timelinechanged:e.timelinechanged,timelineplaychanged:e.timelineplaychanged}}}),null),T(r,n(V,{option:u,class:`chart-md`,ref(e){var n=t.geo;typeof n==`function`?n(e):t.geo=e},containerProps:{title:`geo`,note:`GeoComponent + registerMap, two geo components`},get onEvents(){return{georoam:e.georoam}}}),null),r}}),n(H,{get children(){return[n(jt,{get children(){var e=Ol();return T(e,()=>en(`Each button dispatches one seActions payload and the checklist compares the events and the live instance with the docs. legendselectchanged and brushEnd only come from user interaction: click a legend item, or draw a brush area with the toolbox.`)),e}}),n(F,{sections:a}),n(K,{get children(){return[(()=>{var e=kl(),t=e.firstChild.nextSibling;return T(t,()=>`selected ${r.legendselected}, unselected ${r.legendunselected}, selectchanged ${r.legendselectchanged}`),e})(),(()=>{var e=Al(),t=e.firstChild.nextSibling;return T(t,()=>`${r.datazoom} / ${r.showtip} / ${r.downplay}`),e})(),(()=>{var e=jl(),t=e.firstChild.nextSibling;return T(t,()=>`${r.brush} / ${r.brushselected} / ${r.brushEnd}`),e})(),(()=>{var e=Ml(),t=e.firstChild.nextSibling;return T(t,()=>`${r.timelinechanged} / ${r.timelineplaychanged} / ${r.georoam}`),e})()]}}),(()=>{var e=Nl();return T(e,n(h,{each:o,children:({title:e,actions:t})=>n(hs,{title:e,actions:t})})),e})(),n(Xc,{get entries(){return i()},entryMapper:Il,eventKey:`event`,placeholder:`Press a button or interact with a chart`}),(()=>{var e=Pl();return T(e,n(z,{code:Wc})),e})()]}})]}})},Rl=`import type { Component } from "solid-js";
import { createSignal } from "solid-js";

import type { EChartsOption, EChartsType } from "@amad3v/solid-echarts";
import { SolidEChart } from "@amad3v/solid-echarts";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const option: EChartsOption = {
  tooltip: { trigger: "item" },
  xAxis: { type: "category", data: days },
  yAxis: { type: "value" },
  series: [{ type: "bar", data: [820, 932, 901, 934, 1290, 1330, 1320] }],
};

export const Example: Component = () => {
  const [focused, setFocused] = createSignal(false);

  const handleInit = (chart: EChartsType) => {
    // Props SolidEChart does not consume land on the container <div>.
    console.log(chart.getDom().getAttribute("aria-label"));
  };

  return (
    <SolidEChart
      option={() => option}
      style={{ width: "100%", height: "400px" }}
      // Everything below falls through to the container <div>.
      id="weekly-bar-chart"
      tabIndex={0}
      role="img"
      aria-label="Bar chart showing weekly revenue"
      title="Weekly revenue"
      data-testid="chart-container"
      classList={{ "outline-2": focused() }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      onKeyDown={(e) => console.log("key", e.key)}
      onClick={() => console.log("native click")}
      onInit={handleInit}
    />
  );
};
`,zl=()=>{let[e,t]=Ji({tabIndex:null,role:null,ariaLabel:null,id:null,dataTestId:null,title:null}),[n,r]=l(0),[i,a]=l(!1),[o,s]=l(!1),[c,u]=l(0),[d,f]=l(!1);return{domAttributes:e,focusedIndex:n,isFocused:i,everFocused:o,clickCount:c,keyNavUsed:d,setFocusedIndex:r,setEverFocused:s,setClickCount:u,setKeyNavUsed:f,setIsFocused:a,setDomAttributes:t}},Bl=(e,t)=>{let n=null,{focusedIndex:r,setFocusedIndex:i,setEverFocused:a,setClickCount:o,setKeyNavUsed:s,setIsFocused:c,setDomAttributes:l}=e,u=e=>{n=e;let t=e.getDom();l({tabIndex:t.tabIndex,role:t.getAttribute(`role`),ariaLabel:t.getAttribute(`aria-label`),id:t.id||null,dataTestId:t.dataset.testid??null,title:t.getAttribute(`title`)})},d=e=>{n?.dispatchAction(e)};return{handleInit:u,handleFocus:()=>{c(!0),a(!0)},handleBlur:()=>{c(!1)},handleClick:()=>{o(I)},handleKeyDown:Ut(r,i,t.length,e=>{s(!0),d(e)})}},Vl=(e,t)=>{let{domAttributes:n,focusedIndex:r,isFocused:i,everFocused:a,clickCount:o,keyNavUsed:s}=e;return[{label:`tabIndex={0} - container div is keyboard-focusable`,expected:()=>`0`,actual:()=>n.tabIndex===null?`-`:String(n.tabIndex),pass:()=>n.tabIndex===null||n.tabIndex===0},{label:`role="img" - ARIA role passed through`,expected:()=>`img`,actual:()=>n.role??`-`,pass:()=>n.role===null||n.role===`img`},{label:`aria-label - screen reader description present`,expected:()=>`non-empty string`,actual:()=>n.ariaLabel===null?`-`:`"${n.ariaLabel.slice(0,24)}…"`,pass:()=>n.ariaLabel===null||n.ariaLabel.length>0},{label:`id="weekly-bar-chart" - DOM id passed through`,expected:()=>`weekly-bar-chart`,actual:()=>n.id??`-`,pass:()=>n.id===null||n.id===`weekly-bar-chart`},{label:`data-testid="chart-container" - test attribute passed through`,expected:()=>`chart-container`,actual:()=>n.dataTestId??`-`,pass:()=>n.dataTestId===null||n.dataTestId===`chart-container`},{label:`title - browser tooltip attribute passed through`,expected:()=>`non-empty string`,actual:()=>n.title===null?`-`:`"${n.title.slice(0,24)}..."`,pass:()=>n.title===null||n.title.length>0},{label:`onFocus / onBlur - focus events fire on the container div`,expected:()=>`click chart to focus`,actual:()=>a()?`focused: ${i()?`yes`:`no`}`:`-`,pass:()=>!0},{label:`onClick - native click fires on container div (distinct from ECharts click)`,expected:()=>o()>0?`${o()} click(s)`:`click the chart`,actual:()=>String(o()),pass:()=>!0},{label:`onKeyDown - arrow keys navigate bars (focus chart first)`,expected:()=>s()?`index changes`:`focus chart, use arrow keys`,actual:()=>s()?`${t[r()]?.name} (index ${r()})`:`-`,pass:()=>!0}]},Hl=e=>()=>R({tooltip:{trigger:`item`},xAxis:{type:`category`,data:e.map(e=>e.name)},yAxis:{type:`value`},series:[{type:`bar`,data:e.map(e=>e.value),emphasis:{focus:`self`}}]}),Ul=y(`<span>Click the chart to give it focus, then use arrow keys to navigate bars. Open DevTools Elements panel to confirm all attributes are present on the container <code>&lt;div id="weekly-bar-chart"></code>.`),Wl=y(`<div>Focused bar: <strong>`),Gl=y(`<div>Chart focused: <strong>`),Kl=y(`<div>Native onClick fires: <strong>`),Z=()=>{let e=zl(),t=Bl(e,Fn),n=Vl(e,Fn),r=Hl(Fn);return{...e,...t,checklist:n,option:r}},ql=()=>{let{clickCount:e,focusedIndex:t,isFocused:r,handleInit:i,handleFocus:a,handleBlur:o,handleClick:s,handleKeyDown:c,checklist:l,option:u}=Z();return n(D,{get theme(){return M.name},get children(){return[n(U,{get children(){return n(V,{option:u,get class(){return r()?`chart-md outline-2 outline-brand-400 outline-solid`:`chart-md`},tabIndex:0,role:`img`,get"aria-label"(){return`Bar chart showing weekly data. Currently focused: ${Fn[t()]?.name}, value ${Fn[t()]?.value}. Use arrow keys to navigate.`},id:`weekly-bar-chart`,"data-testid":`chart-container`,title:`Weekly revenue chart - use arrow keys to navigate bars`,onKeyDown:c,onFocus:a,onBlur:o,onClick:s,onInit:i})}}),n(H,{get children(){return[n(jt,{get children(){return Ul()}}),n(F,{sections:[{items:l}]}),n(K,{get children(){return[(()=>{var e=Wl(),n=e.firstChild.nextSibling;return T(n,()=>Fn[t()]?.name??`-`),T(e,()=>` (value: ${Fn[t()]?.value})`,null),e})(),(()=>{var e=Gl(),t=e.firstChild.nextSibling;return T(t,()=>r()?`yes - arrow keys active`:`no - click chart first`),e})(),(()=>{var t=Kl(),n=t.firstChild.nextSibling;return T(n,e),t})()]}}),n(z,{code:Rl})]}})]}})},Jl=`import type { Component } from "solid-js";

import type { EChartsOption, EChartsType, EventParams } from "@amad3v/solid-echarts";
import { SolidEChart, seActions } from "@amad3v/solid-echarts";

const option: EChartsOption = {
  tooltip: { trigger: "item" },
  xAxis: { type: "category", data: ["A", "B", "C", "D", "E"] },
  yAxis: { type: "value" },
  series: [{ type: "bar", data: [12, 20, 15, 8, 18], emphasis: { focus: "self" } }],
};

export const Example: Component = () => (
  <SolidEChart
    option={() => option}
    style={{ width: "100%", height: "400px" }}
    // Persistent: runs on every click. The live instance is the second argument.
    onEvents={{
      click: (params: EventParams, chart: EChartsType) => {
        console.log("every click:", params.name);
        chart.dispatchAction(seActions.highlight({ seriesIndex: 0, dataIndex: params.dataIndex }));
      },
    }}
    // One-shot: each handler removes itself after its first call.
    // The same event name may appear in both maps - both run on the first click.
    onEventsOnce={{
      click: (params: EventParams) => console.log("first click only:", params.name),
      // \`finished\` handlers receive \`undefined\` instead of event params.
      finished: () => console.log("first render finished"),
    }}
  />
);
`,Yl=()=>{let[e,t]=l([]),[n,r]=l(0),[i,a]=l(0),[o,s]=l(0);return{log:e,setLog:t,onceClickCount:n,setOnceClickCount:r,everyClickCount:i,setEveryClickCount:a,onceFinishedCount:o,setOnceFinishedCount:s}},Xl=e=>{let{setLog:t,setOnceClickCount:n,setEveryClickCount:r,setOnceFinishedCount:i}=e,a=e=>{t(t=>[e,...t].slice(0,20))};return{handleEveryClick:(e,t)=>{r(I),a({time:Wt(),source:`onEvents`,event:`click`,detail:`bar "${e.name}" - fires every time`}),t.dispatchAction(A.highlight({seriesIndex:0,dataIndex:e.dataIndex}))},handleFirstClick:e=>{n(I),a({time:Wt(),source:`onEventsOnce`,event:`click`,detail:`FIRST click on bar "${e.name}" - will not fire again`})},handleFinished:()=>{i(I),a({time:Wt(),source:`onEventsOnce`,event:`finished`,detail:`chart finished first render - will not fire again`})}}},Zl=e=>{let{onceFinishedCount:t,everyClickCount:n,onceClickCount:r}=e;return[{label:`onEventsOnce 'finished' - fires exactly once after initial render`,expected:()=>`1`,actual:()=>String(t()),pass:()=>t()===1},{label:`onEventsOnce 'click' - fires at most once, self-removes after first fire`,expected:()=>`0 or 1`,actual:()=>n()===0?`-`:String(r()),pass:()=>r()<=1},{label:`onEvents 'click' - fires on every bar click (persistent)`,expected:()=>n()>0?`${n()} (equals total clicks)`:`click a bar`,actual:()=>String(n()),pass:()=>!0},{label:`Dual-map coexistence - after 2+ clicks, onEventsOnce count stays at 1`,expected:()=>n()>=2?`onceClickCount === 1`:`click ≥ 2 times`,actual:()=>n()>=2?`onEventsOnce: ${r()}, onEvents: ${n()}`:`-`,pass:()=>n()<2||r()===1}]},Ql=()=>R({tooltip:{trigger:`item`},xAxis:{type:`category`,data:jn},yAxis:{type:`value`},series:[{type:`bar`,data:Mn,emphasis:{focus:`self`}}]}),$l=y(`<span>`),eu=y(`<div>onEvents click (every): <strong></strong> - increments on every bar click`),tu=y(`<div>onEventsOnce click (first only): <strong></strong> - must stay at 0 or 1, never higher`),nu=y(`<div>onEventsOnce finished: <strong></strong> - fires once on first render complete`),ru=()=>{let e=Yl(),t=Xl(e),n=Zl(e),r=Ql;return{...e,...t,checklist:n,option:r}},iu=()=>{let{everyClickCount:e,log:t,onceClickCount:r,onceFinishedCount:i,handleEveryClick:a,handleFinished:o,handleFirstClick:s,checklist:c,option:l}=ru(),u=e=>({entry:`.${e.event} - ${e.detail}`,isRegular:e.source===`onEventsOnce`});return n(D,{get theme(){return M.name},get children(){return[n(U,{get children(){return n(V,{option:l,class:`chart-sm`,onEvents:{click:a},onEventsOnce:{click:s,finished:o}})}}),n(H,{get children(){return[n(jt,{get children(){var e=$l();return T(e,()=>en(`Orange entries = onEventsOnce. The click once-handler fires on the very first bar click and never again. The finished once-handler fires exactly once after the initial render.`)),e}}),n(F,{sections:[{items:c}]}),n(K,{get children(){return[(()=>{var t=eu(),n=t.firstChild.nextSibling;return T(n,e),t})(),(()=>{var e=tu(),t=e.firstChild.nextSibling;return T(t,r),e})(),(()=>{var e=nu(),t=e.firstChild.nextSibling;return T(t,(()=>{var e=_(()=>i()>0);return()=>e()?`fired ✓ (${i()}x)`:`not yet`})()),e})()]}}),n(Xc,{get entries(){return t()},entryMapper:u,eventKey:`source`,placeholder:`Waiting for events`}),n(z,{code:Jl})]}})]}})},au=`import type { Component } from "solid-js";
import { createSignal } from "solid-js";

import type { EChartsOption, EChartsType } from "@amad3v/solid-echarts";
import { SolidEChart } from "@amad3v/solid-echarts";

const option: EChartsOption = {
  xAxis: { type: "category", data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
  yAxis: { type: "value" },
  series: [{ type: "line", data: [820, 932, 901, 934, 1290, 1330, 1320] }],
};

export const Example: Component = () => {
  const [size, setSize] = createSignal("-");
  const [wide, setWide] = createSignal(true);
  let chart: EChartsType | null = null;

  return (
    <>
      <SolidEChart
        option={() => option}
        autoResize
        // \`onResize\` is read once at init. It runs after \`chart.resize()\`, but not for
        // the observer's initial callback or while the container is 0px wide or tall.
        onResize={() => {
          if (chart) setSize(\`\${chart.getWidth()} x \${chart.getHeight()} px\`);
        }}
        onInit={(instance) => {
          chart = instance;
        }}
        style={{ width: wide() ? "100%" : "60%", height: "400px" }}
      />
      <p>{\`Last resize: \${size()}\`}</p>
      <button onClick={() => setWide((w) => !w)}>{"Toggle width"}</button>
    </>
  );
};
`,ou=()=>{let[e,t]=l(`-`),[n,r]=l(vt),[i,a]=l(!1),[o,s]=l(0),[c,u]=l(!1),[d,f]=l(null);return{resizeAtCollapse:d,widthToggled:c,pixelDimensions:e,containerWidth:n,resizeCount:o,collapsed:i,setResizeAtCollapse:f,setResizeCount:s,setWidthToggled:u,setCollapsed:a,setContainerWidth:r,setPixelDimensions:t}},su=e=>{let t=null,{resizeCount:n,collapsed:r,setResizeAtCollapse:i,setResizeCount:a,setWidthToggled:o,setCollapsed:s,setContainerWidth:c,setPixelDimensions:l}=e;return{toggleCollapse:()=>{r()?(i(null),s(!1)):(i(n()),s(!0))},toggleWidth:()=>{o(!0),c(e=>e===`100%`?`60%`:`100%`)},handleInit:e=>{t=e},handleResize:()=>{if(!t||t.isDisposed())return;let e=t.getWidth(),n=t.getHeight();l(`${e} × ${n} px`),a(I)}}},cu=e=>{let{resizeCount:t,widthToggled:n,resizeAtCollapse:r,pixelDimensions:i}=e;return[{label:`Guard 1 - onResize does not fire on mount (initial observation skipped)`,expected:()=>`-`,actual:()=>t()===0?`-`:`fired ${t()} time(s)`,pass:()=>n()||t()===0},{label:`Guard 2 - onResize does not fire when container is zero-sized (collapse)`,expected:()=>{let e=r();return e===null?`collapse the chart to test`:`frozen at ${e}`},actual:()=>r()===null?`-`:String(t()),pass:()=>{let e=r();return e===null||t()===e}},{label:`Genuine resize - onResize fires when container width changes`,expected:()=>n()?`${t()} fire(s)`:`toggle width to test`,actual:()=>n()?String(t()):`-`,pass:()=>!n()||t()>0},{label:`onResize callback - chart.getWidth() / getHeight() readable after resize`,expected:()=>`W × H px`,actual:()=>i(),pass:()=>i()===`-`||i().includes(`×`)}]},lu=()=>R({tooltip:{trigger:`axis`},xAxis:{type:`category`,data:W},yAxis:{type:`value`},series:tn([{type:`line`,smooth:!0,data:G}])}),uu=y(`<div>Pixel dimensions after resize: <strong>`),du=y(`<div>Chart width: <strong>`),fu=()=>{let e=ou(),t=su(e),n=cu(e),r=lu;return{...e,...t,checklist:n,option:r}},pu=()=>{let{collapsed:e,toggleCollapse:t,toggleWidth:r,handleInit:i,handleResize:a,pixelDimensions:o,containerWidth:s,checklist:c,option:l}=fu();return n(D,{get theme(){return M.name},get children(){return[n(U,{get children(){return n(V,{option:l,get class(){return Dt(`transition-[width,height] duration-300 overflow-hidden`,e()?`h-0`:`h-22rem`)},get style(){return{width:s()}},autoResize:!0,onInit:i,onResize:a,containerProps:{centerItems:!1}})}}),n(H,{get children(){return[n(jt,{children:`Pixel dimensions must show - on initial mount (guard 1). Collapsing must not update dimensions (guard 2 - zero height skipped). Toggling width updates dimensions to the new canvas size.`}),n(F,{sections:[{items:c}]}),n(K,{get children(){return[(()=>{var e=uu(),t=e.firstChild.nextSibling;return T(t,o),T(e,()=>o()===`-`?` ← stays '-' on mount (guard 1 ✓)`:``,null),e})(),(()=>{var t=du(),n=t.firstChild.nextSibling;return T(n,(()=>{var t=_(()=>!!e());return()=>t()?`0px (collapsed)`:s()})()),t})()]}}),n(P,{get children(){return[n(N,{onClick:r,get disabled(){return e()},children:`Toggle width (100% ↔ 60%) - onResize should fire`}),n(N,{onClick:t,get children(){return e()?`Expand`:`Collapse to 0px - onResize should NOT fire`}})]}}),n(z,{code:au})]}})]}})},mu=`import type { Component } from "solid-js";
import { createMemo, createSignal } from "solid-js";

import type { EChartsOption } from "@amad3v/solid-echarts";
import {
  DatasetComponent,
  SolidEChart,
  SolidEChartProvider,
  TransformComponent,
  buildSignature,
  color,
  createChart,
  createChartEffect,
  debounce,
  graphic,
  optionMergePlan,
  registerTransform,
  seSetup,
  useConfig,
} from "@amad3v/solid-echarts";

seSetup([DatasetComponent, TransformComponent]);

// registerTransform: the type must be "<namespace>:<name>".
registerTransform({
  type: "demo:double",
  transform: ({ upstream }) => ({
    data: Array.from({ length: upstream.count() }, (_, index) => [
      upstream.retrieveValue(index, 0),
      Number(upstream.retrieveValue(index, 1)) * 2,
    ]),
  }),
});

// useConfig: a chart built from createChart that honours the provider.
// A prop wins, the provider is the fallback.
const MyChart: Component<{ option: () => EChartsOption; renderer?: "canvas" | "svg" }> = (props) => {
  const config = useConfig();
  const [container, setContainer] = createSignal<HTMLDivElement | null>(null);

  const { instance } = createChart(container, {
    renderer: createMemo(() => props.renderer ?? config.renderer()),
    theme: config.theme,
    group: config.group,
  });
  createChartEffect(instance, () => props.option());

  return <div ref={setContainer} style={{ width: "100%", height: "300px" }} />;
};

// buildSignature + optionMergePlan: chain the previous signature.
let previous = null as ReturnType<typeof buildSignature> | null;
const planFor = (option: EChartsOption) => {
  const plan = optionMergePlan(previous, option);
  previous = plan.signature;
  return plan; // { notMerge, replaceMerge, signature, option }
};

export const Example: Component = () => {
  const [amplitude, setAmplitude] = createSignal(40);
  const [applied, setApplied] = createSignal(40);

  // debounce(fn, ms): the callback takes no arguments, it reads the signal.
  const commit = debounce(() => {
    setApplied(amplitude());
  }, 300);

  const option = (): EChartsOption => ({
    dataset: [
      { id: "raw", source: [["day", "value"], ["Mon", applied()], ["Tue", applied() / 2]] },
      { id: "doubled", fromDatasetId: "raw", transform: { type: "demo:double" } },
    ],
    xAxis: { type: "category" },
    yAxis: { type: "value" },
    series: [
      {
        type: "line",
        datasetId: "doubled",
        // graphic and color are re-exported from echarts.
        lineStyle: { color: color.lift("#fb628b", -0.3) },
        areaStyle: {
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: color.modifyAlpha("#fb628b", 0.7) },
            { offset: 1, color: color.modifyAlpha("#fb628b", 0) },
          ]),
        },
      },
    ],
  });

  console.log(planFor(option()).notMerge, buildSignature(option()).arrays);

  return (
    <SolidEChartProvider theme="dark" renderer="svg">
      <input
        type="range"
        value={amplitude()}
        onInput={(event) => {
          setAmplitude(event.currentTarget.valueAsNumber);
          commit();
        }}
      />
      <MyChart option={option} />
      <SolidEChart option={option} autoMerge style={{ width: "100%", height: "300px" }} />
    </SolidEChartProvider>
  );
};
`,hu=e=>n(w.Root,{class:`mb-4 max-w-md w-full`,get min(){return e.min},get max(){return e.max},get value(){return[e.value]},onValueChange:t=>{e.onChange(t.value[0])},get children(){return[n(w.Label,{class:`text-xs font-mono mb-1 block`,children:`Amplitude (raw)`}),n(w.Control,{class:`flex h-5 items-center relative`,get children(){return[n(w.Track,{class:`rounded-full bg-brand-200 flex-1 h-1.5 relative`,get children(){return n(w.Range,{class:`rounded-full bg-brand-600 h-full`})}}),n(w.Thumb,{index:0,class:`rounded-full bg-brand-900 size-4 focus-ring`,get children(){return n(w.HiddenInput,{})}})]}})]}}),gu=y(`<div>`),_u=e=>{let t=et(),[n,o]=l(null),{instance:c}=ot(n,{renderer:i(()=>e.renderer??t.renderer()),theme:i(()=>e.theme??t.theme()),group:t.group,autoResize:t.autoResize,resizeDebounce:a(t.resizeDebounce),locale:a(t.locale),devicePixelRatio:a(t.devicePixelRatio),useDirtyRect:a(t.useDirtyRect)});return dt(c,()=>e.option()),f(S(c,t=>{if(e.onInstance?.(t),!t)return;let n=()=>{e.onRendered?.()};t.on(`finished`,n),s(()=>{t.off(`finished`,n)})})),(()=>{var t=gu();return p(o,t),r(()=>C(t,e.class)),t})()},vu=e=>{let t=et();return c(()=>{e.onConfig(t)}),null},yu=()=>{let[e,t]=l(`svg`),[n,r]=l(null),[i,a]=l(null),[o,s]=l(null),[c,u]=l(null),[d,f]=l(null),[p,m]=l(0),[h,g]=l(2),[_,v]=l(!0),[y,b]=l(!0),[x,S]=l(1),[ee,C]=l(null),[te,w]=l(null),[ne,re]=l(null),[ie,ae]=l(40),[oe,T]=l(40),[se,ce]=l(0),[E,le]=l(0),[ue,de]=l(null),[fe,pe]=l(null),[me,he]=l(null),[ge,_e]=l(3),[ve,ye]=l(0),[be,xe]=l(null);return{providerRenderer:e,setProviderRenderer:t,rootConfig:n,setRootConfig:r,outerConfig:i,setOuterConfig:a,innerConfig:o,setInnerConfig:s,outerChart:c,setOuterChart:u,innerChart:d,setInnerChart:f,renderRevision:p,setRenderRevision:m,seriesCount:h,setSeriesCount:g,showLegend:_,setShowLegend:v,hasBackground:y,setHasBackground:b,seed:x,setSeed:S,transition:ee,setTransition:C,chartSeriesCount:te,setChartSeriesCount:w,chartHasLegend:ne,setChartHasLegend:re,raw:ie,setRaw:ae,applied:oe,setApplied:T,rawChanges:se,setRawChanges:ce,appliedCalls:E,setAppliedCalls:le,burst:ue,setBurst:de,chartAmplitude:fe,setChartAmplitude:pe,gradientChart:me,setGradientChart:he,windowSize:ge,setWindowSize:_e,transformRuns:ve,setTransformRuns:ye,lastRun:be,setLastRun:xe}},bu=`examples:moving-average`,xu=e=>typeof e==`object`&&!!e&&`window`in e&&typeof e.window==`number`,Su=(e,t)=>e.map(([n],r)=>{let i=e.slice(Math.max(0,r-t+1),r+1),a=i.reduce((e,[,t])=>e+t,0)/i.length;return[n,Math.round(a*100)/100]}),Cu=new Set,wu=e=>(Cu.add(e),()=>{Cu.delete(e)});pe({type:bu,transform:({upstream:e,config:t})=>{if(!xu(t))throw Error(`${bu} needs a numeric "window" config`);let n=[];for(let t=0;t<e.count();t++){let r=e.retrieveValue(t,0),i=e.retrieveValue(t,1);n.push([String(r),typeof i==`number`?i:NaN])}let r=Su(n,t.window);for(let e of Cu)e({window:t.window,output:r});return{data:r}}});var[Tu]=M.theme.color,Eu=.3,Du=.7,Ou=W.map((e,t)=>[e,G[t]]),ku=()=>R({xAxis:{type:`category`,data:W},yAxis:{type:`value`},series:[{type:`bar`,data:G}]}),Au=e=>{let t=Array.from({length:e.seriesCount},(t,n)=>({type:`bar`,name:`Series ${n+1}`,data:W.map((t,r)=>100+(e.seed*37+r*53+n*29)%120)}));return{animation:!1,tooltip:{trigger:`axis`},...e.showLegend&&{legend:xt},...e.hasBackground&&{backgroundColor:`#1e293b`},xAxis:{type:`category`,data:W,...St},yAxis:{type:`value`,...St},series:t}},ju=e=>R({animation:!1,xAxis:{type:`category`,data:[`A`,`B`,`C`,`D`,`E`]},yAxis:{type:`value`,min:0,max:100},series:[{type:`bar`,data:[.4,.7,1,.55,.25].map(t=>Math.round(e*t))}]}),Q=()=>{let e=me(Tu,Eu);return R({xAxis:{type:`category`,data:W},yAxis:{type:`value`},series:[{type:`line`,smooth:!0,data:En,lineStyle:{color:e,width:3},itemStyle:{color:e},areaStyle:{color:new fe(0,0,0,1,[{offset:0,color:Ee(Tu,Du)},{offset:1,color:Ee(Tu,0)}])}}]})},Mu=e=>R({dataset:[{id:`raw`,dimensions:[`day`,`value`],source:Ou},{id:`average`,fromDatasetId:`raw`,transform:{type:bu,config:{window:e}}}],xAxis:{type:`category`},yAxis:{type:`value`},series:[{type:`bar`,name:`Raw`,datasetId:`raw`,encode:{x:0,y:1}},{type:`line`,name:`Moving average (${e})`,datasetId:`average`,encode:{x:0,y:1}}]}),Nu=e=>{let t=i(()=>Au({seriesCount:e.seriesCount(),showLegend:e.showLegend(),hasBackground:e.hasBackground(),seed:e.seed()})),n=null;return{configOption:ku,mergeOption:t,plan:i(()=>{let e=ut(n,t());return n=e.signature,e}),amplitudeOption:i(()=>ju(e.applied())),gradientOption:Q,transformOption:i(()=>Mu(e.windowSize()))}},Pu=[3,5,7],Fu=10,$=100,Iu=20,Lu={notMerge:!1,replaceMerge:[]},Ru={notMerge:!1,replaceMerge:[`series`]},zu={notMerge:!0,replaceMerge:[]},Bu=e=>{let t=e.getOption().series;if(!Array.isArray(t))return null;let n=t[0];if(typeof n!=`object`||!n||!(`data`in n)||!Array.isArray(n.data))return null;let r=n.data[2];return typeof r==`number`?r:null},Vu=e=>{let t=(t,n)=>{e.setTransition({label:t,expected:n})},n=()=>{e.setProviderRenderer(e=>e===`svg`?`canvas`:`svg`)},r=()=>{e.seriesCount()>=4||d(()=>{t(`add a series`,Lu),e.setSeriesCount(I)})},i=()=>{e.seriesCount()<=1||d(()=>{t(`remove a series`,Ru),e.setSeriesCount(e=>e-1)})},a=()=>{d(()=>{t(e.showLegend()?`drop the legend key`:`restore the legend key`,e.showLegend()?zu:Lu),e.setShowLegend(e=>!e)})},o=()=>{d(()=>{t(e.hasBackground()?`drop backgroundColor`:`restore backgroundColor`,e.hasBackground()?zu:Lu),e.setHasBackground(e=>!e)})},c=()=>{d(()=>{t(`change values only`,Lu),e.setSeed(I)})},l=at(()=>{e.setApplied(e.raw()),e.setAppliedCalls(I)},300),u=t=>{e.setRaw(t),e.setRawChanges(I),l()},f=()=>{let t=e.applied()===$?Iu:$,n=e.appliedCalls();for(let e=1;e<=Fu;e++)u(Math.round(t*e/Fu));e.setBurst({before:n,target:t,appliedRightAfter:e.applied()})},p=()=>{e.setWindowSize(e=>Pu[(Pu.indexOf(e)+1)%Pu.length])},m=()=>{e.setRenderRevision(I)},h=t=>{let n=t.getOption().series;e.setChartSeriesCount(Array.isArray(n)?n.filter(Boolean).length:0);let r=t.getOption().legend;e.setChartHasLegend(Array.isArray(r)&&r.length>0)};return s(wu(t=>{e.setLastRun(t),e.setTransformRuns(I)})),{toggleProviderRenderer:n,addSeries:r,removeSeries:i,toggleLegend:a,toggleBackground:o,reseed:c,changeAmplitude:u,runBurst:f,cycleWindow:p,handleRendered:m,handleMergeFinished:(e,t)=>{h(t)},handleAmplitudeFinished:(t,n)=>{e.setChartAmplitude(Bu(n))}}},Hu=250,Uu=`pending`,Wu=1,Gu={3:[820,876,884.33,922.33,1041.67,1184.67,1313.33],5:[820,876,884.33,896.75,975.4,1077.4,1155],7:[820,876,884.33,896.75,975.4,1034.5,1075.29]},Ku=e=>{if(e===null)return`-`;let t=e.getDom();return t.querySelector(`canvas`)===null?t.querySelector(`svg`)===null?`none`:`svg`:`canvas`},qu=e=>{if(e===null)return`-`;let t=e.getVisual({seriesIndex:0},`color`);return typeof t==`string`?t:`-`},Ju=({notMerge:e,replaceMerge:t})=>`notMerge: ${String(e)}, replaceMerge: [${t.join(`, `)}]`,Yu=e=>e.plan().signature.arrays.series,Xu=Eu,Zu=e=>ue(Tu).slice(0,3).map(t=>Math.min(255,Math.trunc(e<0?t*(1-e):(255-t)*e+t))).join(`,`),Qu=(e,t)=>{let n=M.theme.color[0],r=yt.theme.color[0],i=[{label:`useConfig() outside any provider returns the library defaults`,expected:()=>`canvas, default, 100, true, false`,actual:()=>{let t=e.rootConfig();return t===null?Uu:[t.renderer(),t.theme(),t.resizeDebounce(),t.autoResize(),t.ssr()].join(`, `)},pass:()=>{let t=e.rootConfig();return t===null||t.renderer()===`canvas`&&t.theme()==="default"&&t.resizeDebounce()===100&&t.autoResize()&&!t.ssr()}},{label:`useConfig().renderer() follows the provider's reactive renderer`,expected:()=>e.providerRenderer(),actual:()=>e.outerConfig()?.renderer()??Uu,pass:()=>e.outerConfig()?.renderer()===e.providerRenderer()},{label:`useConfig() exposes the provider theme and resizeDebounce`,expected:()=>`${M.name}, ${Hu}`,actual:()=>{let t=e.outerConfig();return t===null?Uu:`${String(t.theme())}, ${t.resizeDebounce()}`},pass:()=>{let t=e.outerConfig();return t?.theme()===M.name&&t.resizeDebounce()===Hu}},{label:`Nested provider overrides renderer and theme, inherits resizeDebounce`,expected:()=>`canvas, ${yt.name}, ${Hu}`,actual:()=>{let t=e.innerConfig();return t===null?Uu:`${t.renderer()}, ${String(t.theme())}, ${t.resizeDebounce()}`},pass:()=>{let t=e.innerConfig();return t?.renderer()===`canvas`&&t.theme()===yt.name&&t.resizeDebounce()===Hu}},{label:`createChart wrapper A renders with the provider's renderer`,expected:()=>e.providerRenderer(),actual:()=>(e.renderRevision(),Ku(e.outerChart())),pass:()=>Ku(e.outerChart())===e.providerRenderer()},{label:`createChart wrapper A uses the provider theme palette`,expected:()=>n,actual:()=>(e.renderRevision(),qu(e.outerChart())),pass:()=>qu(e.outerChart())===n},{label:`Wrapper B: the renderer prop beats the provider (canvas) and gives svg`,expected:()=>`svg`,actual:()=>(e.renderRevision(),Ku(e.innerChart())),pass:()=>Ku(e.innerChart())===`svg`},{label:`Wrapper B: the theme still comes from the nested provider`,expected:()=>r,actual:()=>(e.renderRevision(),qu(e.innerChart())),pass:()=>qu(e.innerChart())===r}],a=[{label:`buildSignature(option) equals the signature carried by the MergePlan`,expected:()=>JSON.stringify(O(t.mergeOption())),actual:()=>JSON.stringify(t.plan().signature),pass:()=>JSON.stringify(O(t.mergeOption()))===JSON.stringify(t.plan().signature)},{label:`Signature counts the anonymous series of the option`,expected:()=>String(e.seriesCount()),actual:()=>String(Yu(t)?.noIdCount??`-`),pass:()=>Yu(t)?.noIdCount===e.seriesCount()},{label:`MergePlan after the last change matches the expected strategy`,expected:()=>{let t=e.transition();return t===null?`press a button`:Ju(t.expected)},actual:()=>{let e=t.plan();return Ju({notMerge:e.notMerge,replaceMerge:e.replaceMerge})},pass:()=>{let n=e.transition(),r=t.plan();return n===null||r.notMerge===n.expected.notMerge&&r.replaceMerge.join()===n.expected.replaceMerge.join()}},{label:`autoMerge chart ends up with the option's series count`,expected:()=>String(e.seriesCount()),actual:()=>String(e.chartSeriesCount()??Uu),pass:()=>e.chartSeriesCount()===null||e.chartSeriesCount()===e.seriesCount()},{label:`autoMerge chart has a legend exactly when the option has one`,expected:()=>String(e.showLegend()),actual:()=>String(e.chartHasLegend()??Uu),pass:()=>e.chartHasLegend()===null||e.chartHasLegend()===e.showLegend()}],o=[{label:`Chart shows the applied value, which trails the slider by 300 ms`,expected:()=>String(e.applied()),actual:()=>String(e.chartAmplitude()??Uu),pass:()=>e.chartAmplitude()===null||e.chartAmplitude()===e.applied()},{label:`Burst of 10 rapid calls: nothing is applied synchronously`,expected:()=>{let t=e.burst();return t===null?`press Burst`:`!== ${t.target}`},actual:()=>String(e.burst()?.appliedRightAfter??`-`),pass:()=>{let t=e.burst();return t===null||t.appliedRightAfter!==t.target}},{label:`Burst of 10 rapid calls: exactly one trailing execution`,expected:()=>`1`,actual:()=>{let t=e.burst();if(t===null)return`-`;let n=e.appliedCalls()-t.before;return n===0?`waiting...`:String(n)},pass:()=>{let t=e.burst();return t===null||e.appliedCalls()-t.before<=1}},{label:`Burst of 10 rapid calls: the last value wins`,expected:()=>String(e.burst()?.target??`-`),actual:()=>{let t=e.burst();return t===null?`-`:e.appliedCalls()===t.before?`waiting...`:String(e.applied())},pass:()=>{let t=e.burst();return t===null||e.appliedCalls()===t.before||e.applied()===t.target}},{label:`Executions never exceed the calls made`,expected:()=>`<= ${e.rawChanges()}`,actual:()=>String(e.appliedCalls()),pass:()=>e.appliedCalls()<=e.rawChanges()}],s=ue(Tu),c=new fe(0,0,0,1,[{offset:0,color:Tu},{offset:1,color:`#000000`}]),l=c.type;return{configItems:i,mergeItems:a,debounceItems:o,graphicItems:[{label:`color.modifyAlpha keeps the channels and sets the alpha`,expected:()=>`${s.slice(0,3).join(`,`)},${Du}`,actual:()=>ue(Ee(Tu,Du)).join(`,`),pass:()=>{let[e,t,n,r]=ue(Ee(Tu,Du));return[e,t,n].every((e,t)=>e===s[t])&&r===.7}},{label:`color.lift(base, level): scales channels for level < 0, blends to white for level > 0`,expected:()=>`${Zu(-Xu)} / ${Zu(Xu)}`,actual:()=>`${ue(me(Tu,-Xu)).slice(0,3).join(`,`)} / ${ue(me(Tu,Xu)).slice(0,3).join(`,`)}`,pass:()=>[-Xu,Xu].every(e=>ue(me(Tu,e)).slice(0,3).join(`,`)===Zu(e))},{label:`new graphic.LinearGradient(...) is a linear gradient with its color stops`,expected:()=>`linear, 2 stops`,actual:()=>`${c.type}, ${c.colorStops.length} stops`,pass:()=>l===`linear`&&c.colorStops.length===2},{label:`The svg renderer paints the gradient: one <linearGradient> with 2 <stop>`,expected:()=>`1 gradient, 2 stops`,actual:()=>{e.renderRevision();let t=e.gradientChart()?.getDom();return t===void 0?Uu:`${t.querySelectorAll(`linearGradient`).length} gradient, ${t.querySelectorAll(`linearGradient stop`).length} stops`},pass:()=>{e.renderRevision();let t=e.gradientChart()?.getDom();return t===void 0||t.querySelectorAll(`linearGradient`).length===1&&t.querySelectorAll(`linearGradient stop`).length===2}},{label:`The series line color is the lifted base color`,expected:()=>me(Tu,Eu),actual:()=>(e.renderRevision(),qu(e.gradientChart())),pass:()=>{e.renderRevision();let t=e.gradientChart();if(t===null)return!0;let n=ue(me(Tu,Eu)),r=ue(qu(t));return n.every((e,t)=>Math.abs(e-r[t])<=Wu)}}],transformItems:[{label:`registerTransform: the dataset transform ran`,expected:()=>`>= 1`,actual:()=>String(e.transformRuns()),pass:()=>e.transformRuns()>=1},{label:`config.window reaches the transform from the dataset option`,expected:()=>String(e.windowSize()),actual:()=>String(e.lastRun()?.window??Uu),pass:()=>e.lastRun()?.window===e.windowSize()},{label:`Transform output equals the hand-computed moving average`,expected:()=>Gu[e.windowSize()]?.join(`, `)??`-`,actual:()=>e.lastRun()?.output.map(([,e])=>e).join(`, `)??Uu,pass:()=>{let t=e.lastRun();return t===null||t.output.map(([,e])=>e).join()===Gu[e.windowSize()]?.join()}}]}},$u=y(`<div class="mb-6 gap-4 grid grid-cols-2">`),ed=y(`<div class="gap-4 grid grid-cols-2">`),td=y(`<span>`),nd=y(`<div>Provider renderer: <strong></strong> / useConfig().renderer(): <strong>`),rd=y(`<div>MergePlan: <strong>`),id=y(`<div>Signature: <strong>`),ad=y(`<div>Slider raw / applied: <strong>`),od=y(`<div>Transform window / runs: <strong>`);ft([Me,Te]);var sd=()=>{let e=yu(),t=Vu(e),n=Nu(e),r=Qu(e,n);return{...e,...t,...n,checklist:r}},cd=()=>{let{providerRenderer:e,setRootConfig:t,setOuterConfig:r,setInnerConfig:i,setOuterChart:a,setInnerChart:o,setGradientChart:s,outerConfig:c,toggleProviderRenderer:l,addSeries:u,removeSeries:d,toggleLegend:f,toggleBackground:p,reseed:m,changeAmplitude:g,runBurst:_,cycleWindow:v,handleRendered:y,handleMergeFinished:b,handleAmplitudeFinished:x,configOption:S,mergeOption:ee,plan:C,amplitudeOption:te,gradientOption:w,transformOption:ne,raw:re,applied:ie,rawChanges:ae,appliedCalls:oe,windowSize:se,transformRuns:ce,checklist:E}=sd(),le=[{label:`Add series`,action:u},{label:`Remove series`,action:d},{label:`Toggle legend`,action:f},{label:`Toggle backgroundColor`,action:p},{label:`Change values`,action:m}];return[n(vu,{onConfig:t}),n(U,{get children(){return[(()=>{var t=$u();return T(t,n(D,{get theme(){return M.name},renderer:e,resizeDebounce:250,get children(){return[n(vu,{onConfig:r}),n(yn,{title:`A - createChart wrapper, outer provider (toggle its renderer)`,get children(){return n(_u,{class:`chart-sm`,option:S,onInstance:a,onRendered:y})}}),n(D,{renderer:`canvas`,get theme(){return yt.name},get children(){return[n(vu,{onConfig:i}),n(yn,{title:`B - nested provider (canvas), renderer prop says svg`,get children(){return n(_u,{class:`chart-sm`,renderer:`svg`,option:S,onInstance:o,onRendered:y})}})]}})]}})),t})(),(()=>{var e=$u();return T(e,n(V,{class:`chart-sm`,option:ee,autoMerge:!0,get theme(){return M.name},onEvents:{finished:b},containerProps:{title:`autoMerge chart - driven by optionMergePlan`}}),null),T(e,n(V,{class:`chart-sm`,option:te,get theme(){return M.name},onEvents:{finished:x},containerProps:{title:`debounce(300 ms) - slider to option`}}),null),e})(),(()=>{var e=ed();return T(e,n(V,{class:`chart-sm`,option:w,renderer:`svg`,get theme(){return M.name},onInit:s,onReInit:s,onEvents:{finished:y},containerProps:{title:`graphic.LinearGradient + color helpers (svg)`}}),null),T(e,n(V,{class:`chart-sm`,option:ne,get theme(){return M.name},containerProps:{title:`registerTransform - examples:moving-average`}}),null),e})()]}}),n(H,{get children(){return[n(jt,{get children(){var e=td();return T(e,()=>en(`useConfig() resolves provider values; a createChart wrapper applies them with the same prop > provider > default precedence as SolidEChart.`)),e}}),n(F,{get sections(){return[{title:`useConfig + createChart wrapper`,items:E.configItems},{title:`buildSignature + optionMergePlan`,items:E.mergeItems},{title:`debounce`,items:E.debounceItems},{title:`graphic + color`,items:E.graphicItems},{title:`registerTransform`,items:E.transformItems}]}}),n(K,{get children(){return[(()=>{var t=nd(),n=t.firstChild.nextSibling,r=n.nextSibling.nextSibling;return T(n,e),T(r,()=>c()?.renderer()??`-`),t})(),(()=>{var e=rd(),t=e.firstChild.nextSibling;return T(t,()=>`notMerge ${String(C().notMerge)}, replaceMerge [${C().replaceMerge.join(`, `)}]`),e})(),(()=>{var e=id(),t=e.firstChild.nextSibling;return T(t,()=>JSON.stringify(C().signature)),e})(),(()=>{var e=ad(),t=e.firstChild.nextSibling;return T(t,()=>`${re()} / ${ie()}`),T(e,()=>` (calls ${ae()}, executions ${oe()})`,null),e})(),(()=>{var e=od(),t=e.firstChild.nextSibling;return T(t,()=>`${se()} / ${ce()}`),e})()]}}),n(P,{get children(){return[n(N,{onClick:l,get children(){return`Provider renderer: ${e()===`svg`?`canvas`:`svg`}`}}),n(h,{each:le,children:({action:e,label:t})=>n(N,{onClick:e,children:t})})]}}),n(hu,{get value(){return re()},min:0,max:100,onChange:g}),n(P,{get children(){return[n(N,{onClick:_,children:`Burst 10 calls`}),n(N,{onClick:v,get children(){return`Moving average window: ${se()}`}})]}}),n(z,{code:mu})]}})]},ld=`import type { Component } from "solid-js";
import { createSignal } from "solid-js";

import type { EChartsOption } from "@amad3v/solid-echarts";
import { SolidEChart, SolidEChartProvider } from "@amad3v/solid-echarts";

const categories = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const Example: Component = () => {
  const [onlyAlpha, setOnlyAlpha] = createSignal(false);

  const option = (): EChartsOption => ({
    xAxis: { type: "category", data: categories },
    yAxis: { type: "value" },
    series: onlyAlpha()
      ? [{ name: "Alpha", type: "bar", data: [5, 9, 7, 8, 6, 4, 3] }]
      : [
          { name: "Alpha", type: "bar", data: [5, 9, 7, 8, 6, 4, 3] },
          { name: "Beta", type: "bar", data: [3, 4, 6, 5, 7, 8, 9] },
          { name: "Gamma", type: "bar", data: [2, 3, 2, 4, 3, 5, 4] },
        ],
  });

  const style = { width: "100%", height: "280px" };

  return (
    // Every chart below inherits \`autoMerge: true\`: when series disappear, the library
    // infers \`replaceMerge: ["series"]\`, so Beta and Gamma are really removed.
    <SolidEChartProvider updateOptions={{ autoMerge: true }}>
      {/* Inherits the provider default. */}
      <SolidEChart option={option} style={style} />

      {/* A per-chart prop wins over the provider: stale series linger. */}
      <SolidEChart option={option} autoMerge={false} style={style} />

      {/* A nested provider replaces \`updateOptions\` for its own subtree only. */}
      <SolidEChartProvider updateOptions={{ autoMerge: false }}>
        <SolidEChart option={option} style={style} />
      </SolidEChartProvider>

      <button onClick={() => setOnlyAlpha((v) => !v)}>{"Toggle Beta + Gamma"}</button>
    </SolidEChartProvider>
  );
};
`,ud=()=>{let[e,t]=l(!1),[n,r]=l(`-`),[i,a]=l(`-`),[o,s]=l(`-`),[c,u]=l(`-`);return{setCountA:r,setCountB:a,setCountC:s,setCountD:u,countA:n,countB:i,countC:o,countD:c,setRemoveSeries:t,removeSeries:e}},dd=e=>{let{setCountA:t,setCountB:n,setCountC:r,setCountD:i,setRemoveSeries:a}=e;return{toggleRemoveSeries:()=>{a(e=>!e)},finishedA:(e,n)=>{Bt(n,t)},finishedB:(e,t)=>{Bt(t,n)},finishedC:(e,t)=>{Bt(t,r)},finishedD:(e,t)=>{Bt(t,i)}}},fd=e=>{let{countA:t,countB:n,countC:r,countD:i,removeSeries:a}=e;return[{label:`Initial state - all 4 charts render 3 series`,expected:()=>a()?`varies`:`3 / 3 / 3 / 3`,actual:()=>`${t()} / ${n()} / ${r()} / ${i()}`,pass:()=>a()?!0:t()===3&&n()===3&&r()===3&&i()===3},{label:`Provider inheritance - Charts A and C: autoMerge: true inherited, stale series removed (count = 1)`,expected:()=>a()?`1 / 1`:`3 / 3`,actual:()=>`${t()} / ${r()}`,pass:()=>t()===`-`?!0:a()?t()===1&&r()===1:t()===3&&r()===3},{label:`Per-chart override - Chart B: autoMerge={false} overrides provider, stale series linger (count stays at 3)`,expected:()=>`3`,actual:()=>String(n()),pass:()=>n()===`-`||n()===3},{label:`Nested provider - Chart D: inner provider autoMerge: false applies to subtree only, stale series linger (count stays at 3)`,expected:()=>`3`,actual:()=>String(i()),pass:()=>i()===`-`||i()===3}]},pd=Pn.CATEGORIES,md=Pn.THREE_SERIES,hd=Pn.ONE_SERIES,gd=e=>{let{removeSeries:t}=e;return()=>R({tooltip:{trigger:`axis`},legend:{},xAxis:{type:`category`,data:pd},yAxis:{type:`value`},series:t()?hd:md})},_d=y(`<span>Series removed: <strong>`),vd=()=>{let e=ud(),t=dd(e),n=fd(e),r=gd(e);return{...e,...t,checklist:n,option:r}},yd=()=>{let{finishedA:e,finishedB:t,finishedC:r,finishedD:i,option:a,removeSeries:o,toggleRemoveSeries:s,checklist:c}=vd();return n(D,{get theme(){return M.name},updateOptions:{autoMerge:!0},get children(){return[n(U,{class:`gap-4 grid grid-cols-2 grid-rows-2`,get children(){return[n(V,{containerProps:{title:`Chart A - inherits provider`,note:`autoMerge: true (from provider) - stale series gone`},option:a,class:`chart-sm`,onEvents:{finished:e}}),n(V,{containerProps:{title:`Chart B - per-chart override`,note:`autoMerge: false override - stale series linger`},option:a,autoMerge:!1,class:`chart-sm`,onEvents:{finished:t}}),n(V,{containerProps:{title:`Chart C - inherits provider`,note:`autoMerge: true (from provider) - stale series gone`},option:a,class:`chart-sm`,onEvents:{finished:r}}),n(yn,{title:`Chart D - nested provider overrides with autoMerge: false for its subtree only`,note:`Nested chart inherits autoMerge: false - stale series linger (expected)`,get children(){return n(D,{updateOptions:{autoMerge:!1},get children(){return n(_t,{option:a,class:`chart-sm`,onEvents:{finished:i}})}})}})]}}),n(H,{get children(){return[n(F,{sections:[{items:c}]}),n(K,{get children(){var e=_d(),t=e.firstChild.nextSibling;return T(t,()=>o()?`yes - Beta and Gamma removed`:`no`),e}}),n(P,{get children(){return n(N,{onClick:s,get children(){return o()?`Restore Beta + Gamma`:`Remove Beta + Gamma`}})}}),n(z,{code:ld})]}})]}})},bd=`import type { Component } from "solid-js";
import { createSignal } from "solid-js";

import type { EChartsOption } from "@amad3v/solid-echarts";
import { SolidEChart } from "@amad3v/solid-echarts";

type SeriesType = "bar" | "line" | "scatter";

export const Example: Component = () => {
  const [data, setData] = createSignal([820, 932, 901, 934, 1290, 1330, 1320]);
  const [type, setType] = createSignal<SeriesType>("bar");

  // \`option\` is an accessor: the signals read inside it are tracked, and every
  // change is applied with \`setOption\` on the same chart instance (no remount).
  const option = (): EChartsOption => ({
    tooltip: {},
    legend: { data: ["Sales"] },
    xAxis: { type: "category", data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
    yAxis: {},
    series: [{ name: "Sales", type: type(), data: data() }],
  });

  return (
    <>
      <SolidEChart
        option={option}
        style={{ width: "100%", height: "400px" }}
        onEvents={{ click: (params) => console.log("clicked", params.name) }}
      />
      <button onClick={() => setData((d) => d.map(() => Math.round(Math.random() * 1500)))}>
        {"Randomise data"}
      </button>
      <button onClick={() => setType((t) => (t === "bar" ? "line" : "bar"))}>
        {\`Switch type (current: \${type()})\`}
      </button>
    </>
  );
};
`,xd=()=>{let[e,t]=l(G),[n,r]=l(`bar`),[i,a]=l(0),[o,s]=l(0),[c,u]=l(`-`),[d,f]=l(0),[p,m]=l(`-`);return{setSalesData:t,setSeriesType:r,setRandomiseCount:a,setClickCount:s,setLastClicked:u,setFinishedCount:f,setRenderedType:m,randomiseCount:i,clickCount:o,finishedCount:d,lastClicked:c,renderedType:p,seriesType:n,salesData:e}},Sd=e=>e.map(()=>Math.round(Math.random()*300)),Cd=e=>{let t=cn(e,`type`);return typeof t==`string`?t:`-`},wd=e=>{let{setSalesData:t,setSeriesType:n,setRandomiseCount:r,setClickCount:i,setLastClicked:a,setFinishedCount:o,setRenderedType:s,seriesType:c}=e;return{handleClick:e=>{i(I),a(e.name)},handleFinished:(e,t)=>{o(I),s(Cd(t))},cycleType:()=>{let e=qn.indexOf(c());n(qn[(e+1)%qn.length])},randomise:()=>{t(e=>Sd(e)),r(I)}}},Td=e=>{let{randomiseCount:t,clickCount:n,finishedCount:r,lastClicked:i,renderedType:a,seriesType:o}=e;return[{label:`Reactive data - option updates re-render the chart (finished fires on each randomise)`,expected:()=>t()>0?`≥ ${t()+1}`:`click Randomise`,actual:()=>String(r()),pass:()=>r()>=t()+1},{label:`Reactive series type - chart re-renders with new type on switch`,expected:()=>o(),actual:()=>a(),pass:()=>a()===`-`||a()===o()},{label:`onEvents 'click' - fires when a chart element is clicked`,expected:()=>n()>0?`≥ 1`:`click a data point`,actual:()=>n()>0?`${n()} (last: ${i()})`:`-`,pass:()=>!0}]},Ed=e=>{let{seriesType:t,salesData:n}=e;return()=>R({tooltip:{},legend:{data:[`Sales`]},xAxis:{data:W},yAxis:{},series:[{name:`Sales`,type:t(),data:n()}]})},Dd=()=>{let e=xd(),t=wd(e),n=Td(e),r=Ed(e);return{...e,...t,checklist:n,option:r}},Od=()=>{let{handleClick:e,handleFinished:t,cycleType:r,randomise:i,option:a,seriesType:o,checklist:s}=Dd();return n(D,{get theme(){return M.name},renderer:`canvas`,get children(){return[n(U,{get children(){return n(V,{option:a,class:`chart-lg`,onEvents:{click:e,finished:t}})}}),n(H,{get children(){return[n(F,{sections:[{items:s}]}),n(P,{get children(){return[n(N,{onClick:i,children:`Randomise data`}),n(N,{onClick:r,get children(){return`Switch type (current: ${o()})`}})]}}),n(z,{code:bd})]}})]}})},kd=`import type { Component } from "solid-js";
import { createSignal } from "solid-js";

import type { EChartRenderer, EChartsOption, EChartsType } from "@amad3v/solid-echarts";
import { SolidEChart } from "@amad3v/solid-echarts";

const option: EChartsOption = {
  tooltip: { trigger: "axis" },
  xAxis: { type: "category", data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
  yAxis: { type: "value" },
  series: [{ type: "line", smooth: true, data: [820, 932, 901, 934, 1290, 1330, 1320] }],
};

export const Example: Component = () => {
  // \`renderer\` is fixed at init: changing it disposes the instance and creates
  // a new one. The current option is applied to the new instance automatically.
  const [renderer, setRenderer] = createSignal<EChartRenderer>("canvas");

  const logRenderer = (label: string) => (chart: EChartsType) => {
    const dom = chart.getDom();
    console.log(label, dom.querySelector("canvas") ? "canvas" : "svg");
  };

  return (
    <>
      <SolidEChart
        option={() => option}
        renderer={renderer}
        style={{ width: "100%", height: "400px" }}
        // First instance only.
        onInit={logRenderer("onInit")}
        // Every instance created after the first one (one per switch).
        onReInit={logRenderer("onReInit")}
        // Every instance torn down: before each reinit and on unmount.
        onDispose={() => console.log("onDispose")}
      />
      <button onClick={() => setRenderer((r) => (r === "canvas" ? "svg" : "canvas"))}>
        {\`Switch to \${renderer() === "canvas" ? "SVG" : "canvas"}\`}
      </button>
    </>
  );
};
`,Ad=()=>{let[e,t]=l(`canvas`),[n,r]=l(0),[i,a]=l(0),[o,s]=l(0),[c,u]=l(0),[d,f]=l(`-`),[p,m]=l(0);return{renderer:e,setRenderer:t,initCount:n,setInitCount:r,reInitCount:i,setReInitCount:a,switchCount:o,setSwitchCount:s,disposeCount:c,setDisposeCount:u,currentRenderer:d,setCurrentRenderer:f,finishedCount:p,setFinishedCount:m}},jd=e=>{let{setRenderer:t,setInitCount:n,setReInitCount:r,setSwitchCount:i,setDisposeCount:a,setCurrentRenderer:o,setFinishedCount:s}=e,c=e=>{let t=e.getDom(),n=e=>t.querySelector(e)!==null,r=n(`canvas`),i=n(`svg`);o(r?`canvas ✓`:i?`svg ✓`:`unknown ×`)};return{toggleRenderer:()=>{i(I),t(e=>e===`canvas`?`svg`:`canvas`)},handleDispose:()=>{a(I)},handleFinished:()=>{s(I)},handleInit:e=>{n(I),c(e)},handleReInit:e=>{r(I),c(e)}}},Md=e=>{let{initCount:t,reInitCount:n,switchCount:r,renderer:i,currentRenderer:a,disposeCount:o,finishedCount:s}=e,c=()=>t()+n();return[{label:`onInit fires once - for the first instance only`,expected:()=>`1`,actual:()=>String(t()),pass:()=>t()===1},{label:`onReInit fires on each renderer switch - reInitCount === switchCount`,expected:()=>String(r()),actual:()=>String(n()),pass:()=>n()===r()},{label:`DOM reflects renderer - container has <canvas> or <svg> matching the prop`,expected:()=>`${i()} ✓`,actual:()=>a(),pass:()=>a()===`${i()} ✓`},{label:`onDispose fires before each reinit - disposeCount === instances - 1`,expected:()=>String(c()-1),actual:()=>String(o()),pass:()=>o()===c()-1},{label:`Option reapplied after reinit - 'finished' fires after each switch`,expected:()=>`≥ ${c()}`,actual:()=>String(s()),pass:()=>s()>=c()}]},Nd=()=>R({tooltip:{trigger:`axis`},xAxis:{type:`category`,data:W},yAxis:{type:`value`},series:tn([{type:`line`,smooth:!0,data:G}])}),Pd=y(`<div>Renderer prop: <strong>`),Fd=y(`<div>DOM confirms: <strong>`),Id=y(`<div>onInit count: <strong></strong> (first instance only)`),Ld=y(`<div>onReInit count: <strong></strong> (increments on each switch)`),Rd=y(`<div>Dispose count: <strong></strong> (always one less than the instances created)`),zd=y(`<div class="mt-3 flex gap-2">`),Bd=()=>{let e=Ad(),t=jd(e),n=Md(e),r=Nd;return{...e,...t,checklist:n,option:r}},Vd=()=>{let{toggleRenderer:e,handleDispose:t,handleFinished:r,handleInit:i,handleReInit:a,renderer:o,initCount:s,reInitCount:c,disposeCount:l,currentRenderer:u,checklist:d,option:f}=Bd();return n(D,{get theme(){return M.name},get children(){return[n(U,{get children(){return n(V,{option:f,renderer:o,class:`chart-lg`,onInit:i,onReInit:a,onDispose:t,onEvents:{finished:r}})}}),n(H,{get children(){return[n(F,{sections:[{items:d}]}),n(K,{get children(){return[(()=>{var e=Pd(),t=e.firstChild.nextSibling;return T(t,o),e})(),(()=>{var e=Fd(),t=e.firstChild.nextSibling;return T(t,u),e})(),(()=>{var e=Id(),t=e.firstChild.nextSibling;return T(t,s),e})(),(()=>{var e=Ld(),t=e.firstChild.nextSibling;return T(t,c),e})(),(()=>{var e=Rd(),t=e.firstChild.nextSibling;return T(t,l),e})()]}}),(()=>{var t=zd();return T(t,n(N,{onClick:e,get children(){return`Switch to ${o()===`canvas`?`SVG`:`canvas`} renderer`}})),t})(),n(z,{code:kd})]}})]}})},Hd=`import type { Component } from "solid-js";

import type { EChartsOption } from "@amad3v/solid-echarts";
import { SolidEChart, seActions, useChart } from "@amad3v/solid-echarts";

const option: EChartsOption = {
  tooltip: { trigger: "axis" },
  legend: { data: ["Revenue", "Expenses"] },
  dataZoom: [{ type: "inside" }, { type: "slider" }],
  xAxis: { type: "category", data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] },
  yAxis: { type: "value" },
  series: [
    // selectedMode is required for select / unselect / toggleSelect to be visible.
    { name: "Revenue", type: "bar", data: [8, 9, 7, 10, 12, 11], selectedMode: "multiple" },
    { name: "Expenses", type: "line", data: [5, 6, 5, 7, 8, 7] },
  ],
};

// useChart must be called inside a <SolidEChart> subtree.
const Controls: Component = () => {
  const { dispatch } = useChart();

  return (
    <>
      <button onClick={() => dispatch(seActions.highlight({ seriesIndex: 0, dataIndex: 2 }))}>
        {"Highlight Mar"}
      </button>
      <button onClick={() => dispatch(seActions.downplay({}))}>{"Downplay"}</button>
      <button onClick={() => dispatch(seActions.select({ seriesIndex: 0, dataIndex: 0 }))}>
        {"Select Jan"}
      </button>
      <button onClick={() => dispatch(seActions.showTip({ seriesIndex: 0, dataIndex: 4 }))}>
        {"Show tip at May"}
      </button>
      {/* Creators type-check their payload: legendToggleSelect requires \`name\`. */}
      <button onClick={() => dispatch(seActions.legendToggleSelect({ name: "Revenue" }))}>
        {"Toggle Revenue"}
      </button>
      <button onClick={() => dispatch(seActions.dataZoom({ start: 0, end: 50 }))}>
        {"Zoom first half"}
      </button>
      <button onClick={() => dispatch(seActions.restore())}>{"Restore"}</button>
    </>
  );
};

export const Example: Component = () => (
  <SolidEChart option={() => option} style={{ width: "100%", height: "400px" }}>
    <Controls />
  </SolidEChart>
);
`,Ud=()=>{let[e,t]=Ji({highlight:!1,downplay:!1,select:!1,showTip:!1,hideTip:!1,legend:!1,zoom:!1,restore:!1}),[n,r]=Ji({highlight:0,downplay:0,select:0,showTip:0,legend:0,dataZoom:0,restore:0}),[i,a]=l(null),[o,s]=l(null);return{dispatched:e,setDispatched:t,eventCounts:n,setEventCounts:r,activeDataIndex:i,setActiveDataIndex:a,lastZoomRange:o,setLastZoomRange:s}},Wd=(e,t)=>[{title:`HIGHLIGHT / DOWNPLAY`,actions:[...t.map((t,n)=>({label:t,onClick:()=>{e.highlightBar(n)}})),{label:`Downplay all`,onClick:e.downplayAll},{label:`Apr (notBlur)`,onClick:()=>{e.highlightWithoutBlur(3)}}]},{title:`SELECT / UNSELECT (requires selectedMode on series)`,actions:[{label:`Select Jan`,onClick:()=>{e.selectBar(0)}},{label:`Select Jun`,onClick:()=>{e.selectBar(5)}},{label:`Toggle Dec`,onClick:()=>{e.toggleBar(11)}},{label:`Unselect All`,onClick:()=>{e.unselectAll()}}]},{title:`TOOLTIP`,actions:[{label:`Show tip at Jan`,onClick:()=>{e.showTipAtData(0)}},{label:`Show tip at Jul`,onClick:()=>{e.showTipAtData(6)}},{label:`Hide tip`,onClick:e.hideTip}]},{title:`LEGEND`,actions:[{label:`Toggle Revenue`,onClick:e.toggleRevenueLegend},{label:`Select all`,onClick:e.selectAllLegend},{label:`Inverse select`,onClick:e.inverseSelectLegend}]},{title:`DATAZOOM`,actions:[{label:`Zoom Q1 (0-25%)`,onClick:e.zoomToQ1},{label:`Zoom H2 (50-100%)`,onClick:e.zoomToH2},{label:`Reset zoom`,onClick:e.resetZoom}]},{title:`RESTORE`,actions:[{label:`Restore (resets all interactions)`,onClick:e.restore}]}],Gd=(e,t,n)=>{let{setDispatched:r,setActiveDataIndex:i,setLastZoomRange:a}=t;return{highlightBar:t=>{e(A.downplay({})),r({downplay:!0}),i(t),e(A.highlight({seriesIndex:0,dataIndex:t})),r({highlight:!0})},downplayAll:()=>{i(null),r({downplay:!0}),e(A.downplay({}))},highlightWithoutBlur:t=>{e(A.downplay({})),r({downplay:!0}),e(A.highlight({seriesIndex:0,dataIndex:t,notBlur:!0})),r({highlight:!0}),i(t)},selectBar:t=>{r({select:!0}),e(A.select({seriesIndex:0,dataIndex:t}))},unselectAll:()=>{r({select:!0}),e(A.unselect({seriesIndex:0,dataIndex:[...n.keys()]}))},toggleBar:t=>{r({select:!0}),e(A.toggleSelect({seriesIndex:0,dataIndex:t}))},showTipAtData:t=>{r({showTip:!0}),e(A.showTip({seriesIndex:0,dataIndex:t}))},hideTip:()=>{r({hideTip:!0}),e(A.hideTip())},toggleRevenueLegend:()=>{r({legend:!0}),e(A.legendToggleSelect({name:`Revenue`}))},selectAllLegend:()=>{r({legend:!0}),e(A.legendAllSelect())},inverseSelectLegend:()=>{r({legend:!0}),e(A.legendInverseSelect())},zoomToQ1:()=>{r({zoom:!0}),a({start:0,end:25}),e(A.dataZoom({start:0,end:25}))},zoomToH2:()=>{r({zoom:!0}),a({start:50,end:100}),e(A.dataZoom({start:50,end:100}))},resetZoom:()=>{r({zoom:!0}),a({start:0,end:100}),e(A.dataZoom({start:0,end:100}))},restore:()=>{i(null),a(null),r({restore:!0}),e(A.restore())}}},Kd=e=>{let{dispatched:t,eventCounts:n,lastZoomRange:r}=e;return[{label:`highlight - emphasis event fires on the chart when a bar button is pressed`,expected:()=>t.highlight?`≥ 1`:`press a bar button`,actual:()=>n.highlight,pass:()=>!t.highlight||n.highlight>0},{label:`downplay - downplay event fires when Downplay all or any bar button is pressed`,expected:()=>t.downplay?`≥ 1`:`press Downplay all or a bar button`,actual:()=>n.downplay,pass:()=>!t.downplay||n.downplay>0},{label:`select / unselect / toggleSelect - selectchanged event fires`,expected:()=>t.select?`≥ 1`:`press a select button`,actual:()=>n.select,pass:()=>!t.select||n.select>0},{label:`showTip - showTip event fires when show tip button is pressed`,expected:()=>t.showTip?`≥ 1`:`press Show tip`,actual:()=>n.showTip,pass:()=>!t.showTip||n.showTip>0},{label:`hideTip - our hideTip dispatch was sent (event count not meaningful)`,expected:()=>t.hideTip?`dispatched`:`press Hide tip`,actual:()=>t.hideTip?`dispatched`:`-`,pass:()=>!0},{label:`legend actions - legendselectchanged fires on toggle / allSelect / inverseSelect`,expected:()=>t.legend?`≥ 1`:`press a legend button`,actual:()=>n.legend,pass:()=>!t.legend||n.legend>0},{label:`dataZoom - datazoom event fires when a zoom button is pressed`,expected:()=>{let e=r();return e===null?`press a zoom button`:`≥ 1 (start: ${e.start}%, end: ${e.end}%)`},actual:()=>n.dataZoom,pass:()=>!t.zoom||n.dataZoom>0},{label:`restore - restore event fires when Restore button is pressed`,expected:()=>t.restore?`≥ 1`:`press Restore`,actual:()=>n.restore,pass:()=>!t.restore||n.restore>0}]},qd=e=>()=>R({tooltip:{trigger:`axis`},legend:{data:[`Revenue`,`Expenses`]},dataZoom:[{type:`inside`},{type:`slider`}],xAxis:{type:`category`,data:e.cat},yAxis:{type:`value`},series:[{name:`Revenue`,type:`bar`,data:e.revenue,selectedMode:`multiple`,emphasis:{focus:`self`,itemStyle:{color:`#1d4a87`}}},tn({name:`Expenses`,type:`line`,smooth:!0,data:e.expenses,emphasis:{focus:`self`}})]}),Jd=y(`<div class="mt-3 flex flex-col gap-4">`),Yd=()=>{let{instance:e,dispatch:t}=$e(),n=Ud(),r=Wd(Gd(t,n,Rn),Ln),i=Kd(n),{setEventCounts:a,setActiveDataIndex:o}=n,c=[[`globalout`,()=>{o(null)}],...[[`highlight`,`highlight`],[`downplay`,`downplay`],[`selectchanged`,`select`],[`showtip`,`showTip`],[`legendselectchanged`,`legend`],[`datazoom`,`dataZoom`],[`restore`,`restore`]].map(([e,t])=>[e,()=>{a(t,I)}])];return f(()=>{let t=e();if(t&&!t.isDisposed()){for(let[e,n]of c)t.on(e,n);s(()=>{for(let[e,n]of c)t.off(e,n)})}}),{actionGroups:r,checklist:i}},Xd=()=>{let{checklist:e,actionGroups:t}=Yd();return(()=>{var r=Jd();return T(r,n(F,{sections:[{items:e}]}),null),T(r,n(h,{each:t,children:({title:e,actions:t})=>n(hs,{title:e,actions:t})}),null),T(r,n(z,{code:Hd}),null),r})()},Zd=()=>{let[e,t]=l(),r=qd({cat:Ln,expenses:zn,revenue:Rn});return n(D,{get theme(){return M.name},get children(){return[n(U,{get children(){return n(yn,{get children(){return n(_t,{option:r,class:`chart-lg`,get children(){return n(E,{get when(){return e()},children:e=>n(g,{get mount(){return e()},get children(){return n(Xd,{})}})})}})}})}}),n(H,{ref:t})]}})},Qd=`import type { Component } from "solid-js";

import type { EChartsOption, EChartsType, EventParams } from "@amad3v/solid-echarts";
import { GraphChart, SolidEChart, seActions, seSetup } from "@amad3v/solid-echarts";

// Register the chart types this view needs (safe to call more than once).
seSetup([GraphChart]);

const option: EChartsOption = {
  series: [
    {
      type: "graph",
      layout: "none",
      // Wheel zoom and drag pan. \`scaleLimit\` bounds the zoom roam can reach.
      roam: true,
      zoom: 1,
      scaleLimit: { min: 0.4, max: 6 },
      emphasis: { focus: "adjacency" },
      data: [
        { name: "Pump", x: 0, y: 0 },
        { name: "Valve", x: 120, y: -60 },
        { name: "Motor", x: 120, y: 60 },
      ],
      links: [
        { source: "Pump", target: "Valve" },
        { source: "Pump", target: "Motor" },
      ],
    },
  ],
};

export const Example: Component = () => {
  // Roam events fire for the mouse AND for dispatched actions. The payload
  // (dx, dy, zoom, ...) is echoed on the event, and getOption() already
  // reports the new view when the handler runs.
  const onRoam = (params: EventParams, chart: EChartsType) => {
    const series = chart.getOption().series;
    const first = Array.isArray(series) ? series[0] : series;
    if (first?.type === "graph") console.log("graphroam", first.zoom, first.center);
  };

  const roam = (chart: EChartsType) => {
    // dx and dy only apply together: a pixel pan, relative to the current view.
    chart.dispatchAction(seActions.graphRoam({ seriesIndex: 0, dx: 60, dy: 30 }));
    // zoom is a FACTOR relative to the current zoom, anchored at originX / originY.
    chart.dispatchAction(
      seActions.graphRoam({ seriesIndex: 0, zoom: 1.5, originX: 200, originY: 150 }),
    );
    // treeRoam and sankeyRoam take the same payload. Omit the series query to
    // roam every series of that type.
    chart.dispatchAction(seActions.focusNodeAdjacency({ seriesIndex: 0, dataIndex: 0 }));
    chart.dispatchAction(seActions.unfocusNodeAdjacency({ seriesIndex: 0 }));
  };

  return (
    <SolidEChart
      option={() => option}
      style={{ width: "100%", height: "400px" }}
      onInit={roam}
      onEvents={{
        graphroam: onRoam,
        focusnodeadjacency: () => console.log("focused"),
        unfocusnodeadjacency: () => console.log("unfocused"),
      }}
    />
  );
};
`,$d=[`graph`,`tree`,`sankey`],ef={graph:`graphroam`,tree:`treeroam`,sankey:`sankeyroam`},tf=()=>({zoom:1,center:`-`}),nf=()=>({zoomExpected:null,zoomActual:null,centerBefore:null,centerAfter:null}),rf=()=>{let[e,t]=l(null),[n,r]=l(null),[i,a]=l(null),[o,s]=Ji({graphroam:0,treeroam:0,sankeyroam:0,dragnode:0,treeexpandandcollapse:0,focusnodeadjacency:0,unfocusnodeadjacency:0}),[c,u]=Ji({graphroam:null,treeroam:null,sankeyroam:null,dragnode:null,treeexpandandcollapse:null,focusnodeadjacency:null,unfocusnodeadjacency:null}),[d,f]=Ji({graph:tf(),tree:tf(),sankey:tf()}),[p,m]=Ji({graph:nf(),tree:nf(),sankey:nf()}),[h,g]=l([]);return{instances:{graph:e,tree:n,sankey:i},setInstances:{graph:t,tree:r,sankey:a},counts:o,setCounts:s,roundTrips:c,setRoundTrips:u,views:d,setViews:f,probes:p,setProbes:m,log:h,setLog:g}},af=1.5,of=1/af,sf=e=>[{title:`GRAPH - graphRoam, focusNodeAdjacency`,actions:[{label:`Pan +60 / +30`,onClick:()=>{e.pan(`graph`,1)}},{label:`Pan -60 / -30`,onClick:()=>{e.pan(`graph`,-1)}},{label:`Zoom x1.5`,onClick:()=>{e.zoom(`graph`,af)}},{label:`Zoom x0.67`,onClick:()=>{e.zoom(`graph`,of)}},{label:`Focus Pump adjacency`,onClick:e.focusNode},{label:`Unfocus`,onClick:e.unfocusNode}]},{title:`TREE - treeRoam, treeExpandAndCollapse`,actions:[{label:`Pan +60 / +30`,onClick:()=>{e.pan(`tree`,1)}},{label:`Pan -60 / -30`,onClick:()=>{e.pan(`tree`,-1)}},{label:`Zoom x1.5`,onClick:()=>{e.zoom(`tree`,af)}},{label:`Zoom x0.67`,onClick:()=>{e.zoom(`tree`,of)}},{label:`Toggle Line A`,onClick:e.toggleTreeNode}]},{title:`SANKEY - sankeyRoam, dragNode`,actions:[{label:`Pan +60 / +30`,onClick:()=>{e.pan(`sankey`,1)}},{label:`Pan -60 / -30`,onClick:()=>{e.pan(`sankey`,-1)}},{label:`Zoom x1.5`,onClick:()=>{e.zoom(`sankey`,af)}},{label:`Zoom x0.67`,onClick:()=>{e.zoom(`sankey`,of)}},{label:`Move Preventive node`,onClick:e.moveSankeyNode}]}],cf={min:.4,max:6},lf=e=>Math.min(cf.max,Math.max(cf.min,e)),uf={show:!0,color:xt.textStyle.color},df=()=>({tooltip:{},series:[{type:`graph`,layout:`none`,roam:!0,zoom:1,scaleLimit:cf,draggable:!0,symbolSize:34,label:uf,lineStyle:{color:`source`,curveness:.2},emphasis:{focus:`adjacency`},data:[{name:`Pump`,x:0,y:0},{name:`Valve`,x:120,y:-60},{name:`Motor`,x:120,y:60},{name:`Sensor`,x:240,y:-90},{name:`Gearbox`,x:240,y:30},{name:`Filter`,x:240,y:120}],links:[{source:`Pump`,target:`Valve`},{source:`Pump`,target:`Motor`},{source:`Valve`,target:`Sensor`},{source:`Motor`,target:`Gearbox`},{source:`Motor`,target:`Filter`},{source:`Valve`,target:`Gearbox`}]}]}),ff=()=>({tooltip:{},series:[{type:`tree`,roam:!0,zoom:1,scaleLimit:cf,initialTreeDepth:2,expandAndCollapse:!0,symbolSize:10,left:`15%`,right:`25%`,label:{...uf,position:`left`,verticalAlign:`middle`,align:`right`},leaves:{label:{position:`right`,verticalAlign:`middle`,align:`left`}},data:[{name:`Plant`,children:[{name:`Line A`,children:[{name:`Press`},{name:`Conveyor`}]},{name:`Line B`,children:[{name:`Mixer`},{name:`Packer`}]},{name:`Utilities`}]}]}]}),pf=()=>({tooltip:{},series:[{type:`sankey`,roam:!0,zoom:1,scaleLimit:cf,draggable:!0,label:uf,emphasis:{focus:`adjacency`},lineStyle:{color:`gradient`,curveness:.5},data:[{name:`Requests`},{name:`Preventive`},{name:`Corrective`},{name:`Done`},{name:`Backlog`}],links:[{source:`Requests`,target:`Preventive`,value:12},{source:`Requests`,target:`Corrective`,value:8},{source:`Preventive`,target:`Done`,value:10},{source:`Preventive`,target:`Backlog`,value:2},{source:`Corrective`,target:`Done`,value:5},{source:`Corrective`,target:`Backlog`,value:3}]}]}),mf=e=>Array.isArray(e)?`[${e.map(e=>typeof e==`number`?e.toFixed(1):String(e)).join(`, `)}]`:`-`,hf=e=>{let t=e.getOption().series,n=Array.isArray(t)?t[0]:t,r=an(n,`zoom`);return{zoom:typeof r==`number`?r:1,center:mf(an(n,`center`))}},gf=60,_f={seriesIndex:0},vf={graph:A.graphRoam,tree:A.treeRoam,sankey:A.sankeyRoam},yf=e=>{let{instances:t,counts:n,setCounts:r,setRoundTrips:i,setViews:a,setProbes:o,setLog:s}=e,c=e=>{let n=t[e]();return n!==null&&!n.isDisposed()?n:null},l=(e,t)=>(n,i)=>{r(e,I),s(t=>[{time:Wt(),event:e,detail:un(n)},...t].slice(0,15)),t&&a(t,hf(i))},u={graphroam:l(`graphroam`,`graph`),treeroam:l(`treeroam`,`tree`),sankeyroam:l(`sankeyroam`,`sankey`),dragnode:l(`dragnode`),treeexpandandcollapse:l(`treeexpandandcollapse`),focusnodeadjacency:l(`focusnodeadjacency`),unfocusnodeadjacency:l(`unfocusnodeadjacency`)},d=(e,t,r)=>{let a=n[t];e.dispatchAction(r),i(t,n[t]-a)},f=(e,t)=>{let n=c(e);if(!n)return;let r=hf(n);d(n,ef[e],vf[e]({..._f,...t}));let i=hf(n);a(e,i),t.zoom===void 0?o(e,{centerBefore:r.center,centerAfter:i.center}):o(e,{zoomExpected:lf(r.zoom*t.zoom),zoomActual:i.zoom})};return{handlers:u,pan:(e,t)=>{f(e,{dx:gf*t,dy:gf/2*t})},zoom:(e,t)=>{let n=c(e);n&&f(e,{zoom:t,originX:n.getWidth()/2,originY:n.getHeight()/2})},focusNode:()=>{let e=c(`graph`);e&&d(e,`focusnodeadjacency`,A.focusNodeAdjacency({seriesIndex:0,dataIndex:0}))},unfocusNode:()=>{let e=c(`graph`);e&&d(e,`unfocusnodeadjacency`,A.unfocusNodeAdjacency({seriesIndex:0}))},toggleTreeNode:()=>{let e=c(`tree`);e&&d(e,`treeexpandandcollapse`,{type:`treeExpandAndCollapse`,seriesIndex:0,dataIndex:1})},moveSankeyNode:()=>{let e=c(`sankey`);if(!e)return;let t=n.dragnode%4;d(e,`dragnode`,{type:`dragNode`,seriesIndex:0,dataIndex:1,localX:140,localY:30+t*40})}}},bf=`press a button`,xf=1e-6,Sf={graph:`graphRoam`,tree:`treeRoam`,sankey:`sankeyRoam`},Cf=e=>e===null?`-`:e.toFixed(3),wf=e=>{let{roundTrips:t,probes:n}=e,r=(e,n)=>({label:e,expected:()=>t[n]===null?bf:1,actual:()=>t[n]??`-`,pass:()=>t[n]===null||t[n]===1});return[{title:`ROAM ACTIONS - dispatch, event, instance`,items:$d.flatMap(e=>{let t=Sf[e],i=ef[e];return[r(`${t} - one dispatch fires exactly one '${i}' event`,i),{label:`${t} zoom - series.zoom in getOption() = previous zoom x factor (within scaleLimit)`,expected:()=>n[e].zoomExpected===null?bf:Cf(n[e].zoomExpected),actual:()=>Cf(n[e].zoomActual),pass:()=>{let{zoomExpected:t,zoomActual:r}=n[e];return t===null||r===null||Math.abs(t-r)<xf}},{label:`${t} pan - series.center in getOption() moves`,expected:()=>n[e].centerBefore===null?bf:`centre changed`,actual:()=>`${n[e].centerBefore??`-`} -> ${n[e].centerAfter??`-`}`,pass:()=>{let{centerBefore:t,centerAfter:r}=n[e];return t===null||t!==r}}]})},{title:`NODE ACTIONS - dispatch, event`,items:[r(`focusNodeAdjacency - fires 'focusnodeadjacency'`,`focusnodeadjacency`),r(`unfocusNodeAdjacency - fires 'unfocusnodeadjacency'`,`unfocusnodeadjacency`),r(`treeExpandAndCollapse - fires 'treeexpandandcollapse'`,`treeexpandandcollapse`),r(`dragNode - fires 'dragnode' (sankey series)`,`dragnode`)]}]},Tf=y(`<div class="gap-4 grid lg:grid-cols-3">`),Ef=y(`<span>`),Df=y(`<div>events: <strong>`),Of=y(`<div class="mb-4 flex flex-col gap-4">`),kf=y(`<div class=mt-4>`),Af=y(`<div><strong></strong> center <strong>`);ft([je,we,Se]);var jf=()=>{let e=rf(),t=yf(e);return{...e,...t,checklist:wf(e),actionGroups:sf(t),graphOption:df,treeOption:ff,sankeyOption:pf}},Mf=e=>({entry:` - ${e.detail}`,isRegular:!e.event.endsWith(`roam`)}),Nf=()=>{let{handlers:e,setInstances:t,views:r,counts:i,log:a,checklist:o,actionGroups:s,graphOption:c,treeOption:l,sankeyOption:u}=jf();return n(D,{get theme(){return M.name},get children(){return[n(U,{get children(){var r=Tf();return T(r,n(V,{option:c,class:`chart-sm`,ref(e){var n=t.graph;typeof n==`function`?n(e):t.graph=e},containerProps:{title:`graph`,note:`graphRoam, focusNodeAdjacency`},get onEvents(){return{graphroam:e.graphroam,focusnodeadjacency:e.focusnodeadjacency,unfocusnodeadjacency:e.unfocusnodeadjacency}}}),null),T(r,n(V,{option:l,class:`chart-sm`,ref(e){var n=t.tree;typeof n==`function`?n(e):t.tree=e},containerProps:{title:`tree`,note:`treeRoam, treeExpandAndCollapse`},get onEvents(){return{treeroam:e.treeroam,treeexpandandcollapse:e.treeexpandandcollapse}}}),null),T(r,n(V,{option:u,class:`chart-sm`,ref(e){var n=t.sankey;typeof n==`function`?n(e):t.sankey=e},containerProps:{title:`sankey`,note:`sankeyRoam, dragNode`},get onEvents(){return{sankeyroam:e.sankeyroam,dragnode:e.dragnode}}}),null),r}}),n(H,{get children(){return[n(jt,{get children(){var e=Ef();return T(e,()=>en(`Wheel and drag roam the charts directly; the buttons dispatch the same roam actions. The dragnode event belongs to the sankey series (graph nodes do not emit it).`)),e}}),n(F,{sections:o}),n(K,{get children(){return[n(h,{each:$d,children:e=>(()=>{var t=Af(),n=t.firstChild,i=n.nextSibling.nextSibling;return T(t,`${e}: zoom `,n),T(n,()=>r[e].zoom.toFixed(3)),T(i,()=>r[e].center),t})()}),(()=>{var e=Df(),t=e.firstChild.nextSibling;return T(t,()=>`graph ${i.graphroam} / tree ${i.treeroam} / sankey ${i.sankeyroam}`),T(e,()=>` - focus ${i.focusnodeadjacency}, unfocus ${i.unfocusnodeadjacency}, expand ${i.treeexpandandcollapse}, dragnode ${i.dragnode}`,null),e})()]}}),(()=>{var e=Of();return T(e,n(h,{each:s,children:({title:e,actions:t})=>n(hs,{title:e,actions:t})})),e})(),n(Xc,{get entries(){return a()},entryMapper:Mf,eventKey:`event`,placeholder:`Roam a chart or press a button`}),(()=>{var e=kf();return T(e,n(z,{code:Qd})),e})()]}})]}})},Pf=`import type { Component } from "solid-js";

import type { EChartsOption, SolidEChartSurfaceEventMap } from "@amad3v/solid-echarts";
import { SolidEChart } from "@amad3v/solid-echarts";

const option: EChartsOption = {
  tooltip: { trigger: "item" },
  xAxis: { type: "category", data: ["A", "B", "C", "D", "E"] },
  yAxis: { type: "value" },
  series: [{ type: "bar", data: [12, 20, 15, 8, 18] }],
};

// Surface events fire anywhere on the canvas / SVG, not only over data elements.
// \`event.target\` is undefined when the pointer is over blank space.
const onceEvents = (): SolidEChartSurfaceEventMap => ({
  click: (event) => console.log("first click only at", event.offsetX, event.offsetY),
});

export const Example: Component = () => (
  <>
    <SolidEChart
      option={() => option}
      style={{ width: "100%", height: "400px" }}
      onSurfaceEvents={{
        click: (event) => {
          const target: unknown = event.target;
          console.log(target ? "clicked an element" : "clicked blank space");
        },
        mousemove: (event) => console.log("pointer at", event.offsetX, event.offsetY),
      }}
    />

    {/* Handlers may also be passed as an accessor (attached since 1.1.0). */}
    <SolidEChart
      option={() => option}
      style={{ width: "100%", height: "400px" }}
      onSurfaceEventsOnce={onceEvents}
    />
  </>
);
`,Ff=()=>{let[e,t]=l([]),[n,r]=l([]),[i,a]=l(0),[o,s]=l(0),[c,u]=l(0),[d,f]=l(0);return{onceLog:n,clickCount:i,blankClickCount:o,onceClickCount:c,onceMoveCount:d,persistentLog:e,setPersistentLog:t,setOnceLog:r,setClickCount:a,setBlankClickCount:s,setOnceClickCount:u,setOnceMoveCount:f}},If=e=>e.target==null,Lf=e=>{let{setPersistentLog:t,setOnceLog:n,setClickCount:r,setBlankClickCount:i,setOnceClickCount:a,setOnceMoveCount:o}=e,s=e=>{r(I),If(e)&&i(I),L(t,e,`click`,!1)},c=e=>{t(t=>{let n=t.at(0);return n?.event===`mousemove`?[{...n,x:Math.round(e.offsetX),y:Math.round(e.offsetY)},...t.slice(1)]:[{time:Wt(),event:`mousemove`,x:Math.round(e.offsetX),y:Math.round(e.offsetY),onBlank:If(e),once:!1},...t].slice(0,15)})},l=(e,t)=>{L(n,e,t,!0)};return{handleOnceClick:e=>{a(I),l(e,`click (once)`)},handleOnceMove:e=>{o(I),l(e,`mousemove (once)`)},handleSurfaceClick:s,handleSurfaceMove:c}},Rf=e=>{let{onceLog:t,clickCount:n,blankClickCount:r,onceClickCount:i,onceMoveCount:a}=e;return[{label:`onSurfaceEvents - persistent click handler fires on every canvas click`,expected:()=>n()>0?`≥ 1`:`click anywhere on the chart`,actual:()=>String(n()),pass:()=>!0},{label:`onSurfaceEvents - event.target is null on blank area (click outside bars)`,expected:()=>r()>0?`≥ 1`:`click blank area (outside bars)`,actual:()=>r()>0?`${r()} blank click(s)`:`-`,pass:()=>!0},{label:`onSurfaceEventsOnce - click handler fires at most once`,expected:()=>i()>0?`1`:`click chart to test`,actual:()=>i()>0?String(i()):`-`,pass:()=>i()<=1},{label:`onSurfaceEventsOnce - mousemove handler fires at most once`,expected:()=>a()>0?`1`:`move mouse over chart to test`,actual:()=>a()>0?String(a()):`-`,pass:()=>a()<=1},{label:`onSurfaceEventsOnce - log stays frozen after both handlers have fired`,expected:()=>i()>0&&a()>0?`≤ 2 entries (frozen)`:`fire both once-handlers first`,actual:()=>i()>0&&a()>0?`${t().length} entries`:`-`,pass:()=>i()>0&&a()>0?t().length<=2:!0}]},zf=()=>R({tooltip:{trigger:`item`},xAxis:{type:`category`,data:jn},yAxis:{type:`value`},series:[{type:`bar`,data:Mn}]}),Bf=y(`<p>onSurfaceEvents - persistent`),Vf=y(`<div>Total clicks on canvas: <strong></strong><br>Blank area clicks: <strong></strong><br>Red entries = clicked blank space (event.target is null)`),Hf=y(`<p>onSurfaceEventsOnce - fires once then stops`),Uf=y(`<div>click once-handler: <strong></strong><br>mousemove once-handler: <strong>`),Wf=y(`<span>After each handler fires once, subsequent interactions produce no new log entries. Handlers have self-removed.`),Gf=y(`<div class="gap-2 grid grid-cols-2 overflow-hidden"><p>`),Kf=()=>{let e=Ff(),t=Lf(e),n=Rf(e),r=zf;return{...e,...t,checklist:n,option:r}},qf=()=>{let{blankClickCount:e,checklist:t,clickCount:r,handleOnceClick:i,handleOnceMove:a,handleSurfaceClick:o,handleSurfaceMove:s,onceClickCount:c,onceLog:l,onceMoveCount:u,option:d,persistentLog:f}=Kf(),p=e=>({entry:` at (${e.x} ,  ${e.y}) ${e.onBlank?` - blank area`:` - over element`}`,isRegular:e.onBlank}),m=e=>n(Xc,{get entries(){return e.entries},entryMapper:p,eventKey:`event`}),h=()=>({click:i,mousemove:a});return n(D,{get theme(){return M.name},get children(){return[n(U,{class:`gap-6 grid grid-cols-2`,get children(){return[n(V,{option:d,class:`chart-sm`,onSurfaceEvents:{click:o,mousemove:s}}),n(V,{option:d,class:`chart-sm`,onSurfaceEventsOnce:h})]}}),n(H,{get children(){return[n(F,{sections:[{items:t}]}),(()=>{var t=Gf(),i=t.firstChild;return T(t,n(K,{get children(){return[Bf(),(()=>{var t=Vf(),n=t.firstChild.nextSibling,i=n.nextSibling.nextSibling.nextSibling;return T(n,r),T(i,e),t})()]}}),i),T(t,n(K,{get children(){return[Hf(),(()=>{var e=Uf(),t=e.firstChild.nextSibling,n=t.nextSibling.nextSibling.nextSibling;return T(t,()=>c()>0?`fired ✓ (stopped)`:`not yet`),T(n,()=>u()>0?`fired ✓ (stopped)`:`not yet`),e})()]}}),i),T(t,n(jt,{get children(){return Wf()}}),null),T(t,n(m,{get entries(){return f()}}),null),T(t,n(m,{get entries(){return l()}}),null),t})(),n(z,{code:Pf})]}})]}})},Jf=`import type { Component } from "solid-js";
import { batch, createSignal } from "solid-js";

import type { EChartsOption, EChartsType } from "@amad3v/solid-echarts";
import { SolidEChart } from "@amad3v/solid-echarts";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const lines: EChartsOption = {
  xAxis: { type: "category", data: days },
  yAxis: { type: "value" },
  series: [{ type: "line", data: [820, 932, 901, 934, 1290, 1330, 1320] }],
};

const bars: EChartsOption = {
  xAxis: { type: "category", data: days },
  yAxis: { type: "value" },
  series: [{ type: "bar", data: [900, 850, 980, 1050, 1200, 1150, 1100] }],
};

export const Example: Component = () => {
  const [option, setOption] = createSignal(lines);
  const [theme, setTheme] = createSignal("default");
  let manual: EChartsType | null = null;

  // ECharts' setTheme rebuilds the chart from the FIRST option set on the
  // instance. With an \`option\` prop the library applies the current option
  // again after every theme change (with notMerge: true under autoMerge).
  // A theme accessor that re-runs with the same value does not call setTheme.
  const both = () => {
    batch(() => {
      setOption(bars);
      setTheme("dark");
    });
  };

  return (
    <>
      <SolidEChart
        option={option}
        theme={theme}
        autoMerge
        style={{ width: "100%", height: "400px" }}
      />

      {/* Manual mode: there is no option prop, so there is nothing to reapply. */}
      <SolidEChart
        theme={theme}
        onInit={(chart: EChartsType) => {
          manual = chart;
          chart.setOption(lines);
        }}
        style={{ width: "100%", height: "400px" }}
      />

      <button onClick={both}>Change option and theme</button>
      {/* After a theme change the manual chart shows \`lines\` again: set the option yourself. */}
      <button onClick={() => manual?.setOption(option())}>Set current option</button>
    </>
  );
};
`,Yf=[`a`,`b`,`c`],Xf=[{value:`a`,label:`A - 2 lines`},{value:`b`,label:`B - 2 bars`},{value:`c`,label:`C - line + bar`}],Zf={a:[{type:`line`,data:G},{type:`line`,data:En}],b:[{type:`bar`,data:Dn},{type:`bar`,data:An.slice(0,7)}],c:[{type:`line`,data:Dn.toReversed()},{type:`bar`,data:G}]},Qf=e=>Zf[e].map(({type:e,data:t})=>`${e}:${String(t[0])}`).join(` | `),$f={brand:{name:M.name,color:M.theme.color[0].toLowerCase()},second:{name:yt.name,color:yt.theme.color[0].toLowerCase()}},ep=[{value:`brand`,label:`Brand`},{value:`second`,label:`Second`}],tp=()=>l(null),np=()=>{let[e,t]=l(`a`),[n,r]=l(`brand`),[i,a]=l(0),[o,s]=tp(),[c,u]=tp(),[d,f]=tp(),[p,m]=tp(),[h,g]=l(!1),[_,v]=l(0),[y,b]=l(0),[x,S]=l(null),[ee,C]=l(null),[te,w]=l(0);return{variant:e,setVariant:t,theme:n,setTheme:r,revision:i,bump:()=>{a(e=>e+1)},defaultChart:o,setDefaultChart:s,autoChart:c,setAutoChart:u,manualChart:d,setManualChart:f,primitiveChart:p,setPrimitiveChart:m,manualStale:h,setManualStale:g,primitiveTheme:()=>(_(),$f[n()].name),nudgeTheme:()=>{v(e=>e+1)},updatedCount:y,setUpdatedCount:b,themeChangeDelta:x,setThemeChangeDelta:S,sameThemeDelta:ee,setSameThemeDelta:C,sameThemeRuns:te,setSameThemeRuns:w}},rp=e=>{let t=Zf[e].map(({type:e,data:t})=>({type:e,data:t}));return R({tooltip:{trigger:`axis`},xAxis:{type:`category`,data:W},yAxis:{type:`value`},series:tn(t)})},ip=e=>{let{variant:t,setVariant:n,theme:r,setTheme:i,bump:a,manualChart:o,setManualStale:s,nudgeTheme:c,updatedCount:l,setUpdatedCount:u,setThemeChangeDelta:f,setSameThemeDelta:p,setSameThemeRuns:m}=e,h=e=>{let t=o();t&&(t.setOption(rp(e)),s(!1))};return{selectVariant:e=>{n(e),h(e),a()},selectTheme:e=>{if(e===r())return;let t=l();i(e),f(l()-t),s(!0),a()},changeBoth:()=>{let e=Yf[(Yf.indexOf(t())+1)%Yf.length],o=r()===`brand`?`second`:`brand`;d(()=>{n(e),h(e),i(o),s(!0)}),a()},reapplyManual:()=>{h(t()),a()},rerunSameTheme:()=>{let e=l();c(),p(l()-e),m(I),a()},handleManualInit:e=>{e.setOption(rp(t()))},handleUpdated:()=>{u(I)}}},ap=e=>typeof e==`object`&&!!e,op=e=>{if(!e||e.isDisposed())return`-`;let t=e.getOption().series;return Array.isArray(t)?t.filter(ap).map(({type:e,data:t})=>{let n=Array.isArray(t)?t[0]:void 0;return`${String(e)}:${String(n)}`}).join(` | `):`-`},sp=e=>e===null?`-`:String(e),cp=e=>{let{variant:t,theme:n,revision:r,defaultChart:i,autoChart:a,manualChart:o,primitiveChart:s,manualStale:c,themeChangeDelta:l,sameThemeDelta:u}=e,d=()=>Qf(t()),f=e=>()=>(r(),op(e())),p=[{label:`Default merge: displays the CURRENT option, not the first`,expected:d,actual:f(i),pass:()=>f(i)()===d()},{label:`autoMerge (notMerge: true after setTheme): displays the CURRENT option`,expected:d,actual:f(a),pass:()=>f(a)()===d()},{label:`Manual mode: after a theme change shows the FIRST option until set again`,expected:()=>c()?Qf(`a`):d(),actual:f(o),pass:()=>f(o)()===(c()?Qf(`a`):d())},{label:`createChart primitive: displays the CURRENT option`,expected:d,actual:f(s),pass:()=>f(s)()===d()}],m=(e,t)=>{let i=()=>(r(),rn(t())),a=()=>$f[n()].color;return{label:e,expected:a,actual:i,pass:()=>i()===a()}};return{option:p,theme:[m(`Default merge: series colour is the first colour of the current theme`,i),m(`autoMerge: series colour is the first colour of the current theme`,a),m(`Manual mode: theme is applied even though the option is stale`,o),m(`createChart primitive: series colour is the first colour of the current theme`,s)],calls:[{label:`Real theme change on the primitive: setTheme + reapplied option = 2 updates`,expected:()=>`2`,actual:()=>sp(l()),pass:()=>l()===null||l()===2},{label:`Accessor re-run with the SAME theme: no setTheme, no reapplied option = 0 updates`,expected:()=>`0`,actual:()=>sp(u()),pass:()=>u()===null||u()===0}]}},lp=y(`<div>`),up=e=>{let[t,n]=l(null),{instance:i}=ot(t,{theme:()=>e.theme(),autoResize:!1});return dt(i,()=>e.option()),f(()=>{e.onInstance(i())}),f(S(i,t=>{if(!t)return;let n=()=>{e.onUpdated()};t.on(`updated`,n),s(()=>{t.off(`updated`,n)})})),(()=>{var t=lp();return p(n,t),r(()=>C(t,e.class)),t})()},dp=y(`<div class="gap-4 grid grid-cols-2">`),fp=y(`<div>Option variant: <strong></strong> (the first option ever set was A)`),pp=y(`<div>Theme: <strong>`),mp=y(`<div>Manual chart shows: <strong>`),hp=y(`<div>Primitive 'updated' events: <strong>`),gp=y(`<div class="mb-4 flex flex-wrap gap-6">`),_p=()=>{let e=np(),t=ip(e),n=cp(e);return{...e,...t,checklist:n,option:()=>rp(e.variant()),themeName:()=>$f[e.theme()].name}},vp=()=>{let e=_p();return[n(U,{get children(){var t=dp();return T(t,n(V,{class:`chart-sm`,get option(){return e.option},get theme(){return e.themeName},ref(t){var n=e.setDefaultChart;typeof n==`function`?n(t):e.setDefaultChart=t},get onEvents(){return{finished:e.bump}},containerProps:{title:`(a) Default merge`,note:`option + theme props`}}),null),T(t,n(V,{class:`chart-sm`,get option(){return e.option},get theme(){return e.themeName},autoMerge:!0,ref(t){var n=e.setAutoChart;typeof n==`function`?n(t):e.setAutoChart=t},get onEvents(){return{finished:e.bump}},containerProps:{title:`(b) autoMerge`,note:`reapplied with notMerge: true after setTheme`}}),null),T(t,n(V,{class:`chart-sm`,get theme(){return e.themeName},ref(t){var n=e.setManualChart;typeof n==`function`?n(t):e.setManualChart=t},get onInit(){return e.handleManualInit},get onEvents(){return{finished:e.bump}},containerProps:{title:`(c) Manual mode`,note:`no option prop: set through the instance`}}),null),T(t,n(yn,{title:`(d) createChart primitive`,note:`theme accessor re-runs without changing`,get children(){return n(up,{class:`chart-sm`,get option(){return e.option},get theme(){return e.primitiveTheme},get onInstance(){return e.setPrimitiveChart},get onUpdated(){return e.handleUpdated}})}}),null),t}}),n(H,{get children(){return[n(F,{get sections(){return[{title:`DISPLAYED OPTION - chart.getOption() on each live instance`,items:e.checklist.option},{title:`THEME - series colour read from each live instance`,items:e.checklist.theme},{title:`setTheme CALLS - 'updated' events of the primitive chart`,items:e.checklist.calls}]}}),n(K,{get children(){return[(()=>{var t=fp(),n=t.firstChild.nextSibling;return T(n,()=>e.variant().toUpperCase()),t})(),(()=>{var t=pp(),n=t.firstChild.nextSibling;return T(n,()=>e.themeName()),t})(),(()=>{var t=mp(),n=t.firstChild.nextSibling;return T(n,()=>e.manualStale()?`first option (stale)`:`current option`),t})(),(()=>{var t=hp(),n=t.firstChild.nextSibling;return T(n,()=>e.updatedCount()),t})()]}}),(()=>{var t=gp();return T(t,n(wr,{label:`Option variant`,options:Xf,get value(){return e.variant()},get onChange(){return e.selectVariant}}),null),T(t,n(wr,{label:`Theme`,options:ep,get value(){return e.theme()},get onChange(){return e.selectTheme}}),null),t})(),n(P,{get children(){return[n(N,{get onClick(){return e.changeBoth},children:`Change option and theme in one batch()`}),n(N,{get onClick(){return e.rerunSameTheme},children:`Re-set same theme (primitive)`}),n(N,{get onClick(){return e.reapplyManual},children:`Set current option on manual chart`})]}}),n(z,{code:Jf})]}})]},yp=`import type { Component } from "solid-js";
import { createSignal } from "solid-js";

import type { EChartsOption } from "@amad3v/solid-echarts";
import { DARK_THEME, DEFAULT_THEME, SolidEChart, SolidEChartProvider } from "@amad3v/solid-echarts";

const option: EChartsOption = {
  tooltip: { trigger: "axis" },
  legend: { data: ["Revenue", "Expenses"] },
  xAxis: { type: "category", data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] },
  yAxis: { type: "value" },
  series: [
    { name: "Revenue", type: "line", smooth: true, data: [820, 932, 901, 934, 1290, 1330] },
    { name: "Expenses", type: "line", smooth: true, data: [620, 732, 701, 734, 1090, 1130] },
  ],
};

export const Example: Component = () => {
  const [theme, setTheme] = createSignal<string>(DEFAULT_THEME);

  return (
    <>
      {/* A theme change is applied to the live instance with \`setTheme\`: no dispose,
          no reinit. The current option is reapplied afterwards (library 1.1.1). */}
      <SolidEChartProvider theme={theme}>
        <SolidEChart
          option={() => option}
          style={{ width: "100%", height: "400px" }}
          onInit={() => console.log("init (first instance only)")}
          onDispose={() => console.log("dispose (never on a theme switch)")}
        />

        {/* A per-chart theme wins over the provider and ignores its changes. */}
        <SolidEChart
          option={() => option}
          theme={DEFAULT_THEME}
          style={{ width: "100%", height: "400px" }}
        />
      </SolidEChartProvider>

      <button onClick={() => setTheme((t) => (t === DARK_THEME ? DEFAULT_THEME : DARK_THEME))}>
        {"Toggle theme"}
      </button>
    </>
  );
};
`,bp=()=>{let[e,t]=l(M.name),[n,r]=l(0),[i,a]=l(0),[o,s]=l(0),[c,u]=l(`-`),[d,f]=l(`-`),[p,m]=l(0);return{currentTheme:e,setCurrentTheme:t,initCountA:n,instanceIdStable:()=>c()===`-`||d()===`-`||c()===d(),setInitCountA:r,disposeCountA:i,setDisposeCountA:a,finishedCountA:o,setFinishedCountA:s,instanceIdA:c,setInstanceIdA:u,instanceIdAfterSwitch:d,setInstanceIdAfterSwitch:f,switchCount:p,setSwitchCount:m}},xp=[M.name,yt.name,Ge],Sp=e=>{let{currentTheme:t,setCurrentTheme:n,setInitCountA:r,setDisposeCountA:i,setFinishedCountA:a,setInstanceIdA:o,setInstanceIdAfterSwitch:s,setSwitchCount:c}=e;return{handleDisposeA:()=>{i(I)},handleFinishedA:(e,t)=>{a(I),s(t.getId())},handleInitA:e=>{r(I),o(e.getId())},cycleTheme:()=>{let e=xp.indexOf(t());n(xp[(e+1)%xp.length]),c(I)}}},Cp=e=>{let{currentTheme:t,initCountA:n,disposeCountA:r,finishedCountA:i,instanceIdA:a,instanceIdAfterSwitch:o,switchCount:s,instanceIdStable:c}=e;return[{label:`No reinit - theme changes in-place via setTheme(), initCount stays at 1`,expected:()=>`1`,actual:()=>String(n()),pass:()=>n()===1},{label:`No dispose - disposeCount stays at 0 through all theme switches`,expected:()=>`0`,actual:()=>String(r()),pass:()=>r()===0},{label:`Same instance - chart getId() unchanged after theme switch`,expected:()=>a()===`-`?`mount chart first`:a(),actual:()=>o()===`-`?`-`:o(),pass:()=>c()},{label:`Re-render after switch - 'finished' fires after each theme change`,expected:()=>s()>0?`>= ${s()+1}`:`>= 1`,actual:()=>String(i()),pass:()=>i()>=s()+1},{label:`Per-chart override - Chart B theme={BRAND_THEME.name} ignores provider (verify visually)`,expected:()=>`always ${M.name}`,actual:()=>`provider: ${t()}`,pass:()=>!0}]},wp=()=>R({tooltip:{trigger:`axis`},legend:{data:[`Revenue`,`Expenses`]},xAxis:{type:`category`,data:Tn.slice(0,6)},yAxis:{type:`value`},series:tn([{name:`Revenue`,type:`line`,smooth:!0,data:G},{name:`Expenses`,type:`line`,smooth:!0,data:En}])}),Tp=y(`<span>Current theme: <strong>`),Ep=()=>{let e=bp(),t=Sp(e),n=Cp(e),r=wp;return{...e,...t,checklist:n,option:r}},Dp=()=>{let{checklist:e,currentTheme:t,cycleTheme:r,handleDisposeA:i,handleFinishedA:a,handleInitA:o,option:s,switchCount:c}=Ep();return[n(U,{class:`gap-6 grid grid-cols-2`,get children(){return n(D,{theme:t,get children(){return[n(V,{containerProps:{title:`Chart A: inherits provider theme`},option:s,class:`chart-lg`,onInit:o,onDispose:i,onEvents:{finished:a}}),n(V,{get containerProps(){return{title:`Chart B: always ${M.name} (per-chart override)`}},option:s,get theme(){return M.name},class:`chart-lg`})]}})}}),n(H,{get children(){return[n(F,{sections:[{items:e}]}),n(K,{get children(){var e=Tp(),n=e.firstChild.nextSibling;return T(n,t),T(e,()=>` (switched ${c()} time(s))`,null),e}}),n(P,{get children(){return n(N,{onClick:r,get children(){return`Cycle theme (${xp.join(` → `)})`}})}}),n(z,{code:yp})]}})]},Op=`import type { Component } from "solid-js";

import type { EventParams, RenderedEventParams } from "@amad3v/solid-echarts";
import { SolidEChart, TreemapChart, seSetup } from "@amad3v/solid-echarts";

seSetup([TreemapChart]);

export const Example: Component = () => (
  <SolidEChart
    option={() => ({
      tooltip: { trigger: "axis" },
      xAxis: { type: "category", data: ["Mon", "Tue", "Wed", "Thu"] },
      yAxis: { type: "value" },
      series: [
        {
          type: "line",
          data: [820, 932, 901, 934],
          areaStyle: {},
          // Without triggerEvent the line and its area emit no mouse events.
          triggerEvent: true,
        },
      ],
    })}
    style={{ width: "100%", height: "400px" }}
    onEvents={{
      // \`rendered\` handlers receive RenderedEventParams.
      rendered: (params: RenderedEventParams) => console.log(\`\${params.elapsedTime} ms\`),
      // \`finished\` handlers receive undefined.
      finished: (params: undefined) => console.log("finished", params),
      // selfType is the part that was hit: "line" or "area" on a line series
      // (ECharts 6.1+), "breadcrumb" on a treemap breadcrumb.
      click: (params: EventParams) => console.log(params.selfType),
      // Tooltip, axis pointer and axis order events get EventParams as well.
      showtip: (params: EventParams) => console.log("showtip", params.dataIndex),
      hidetip: () => console.log("hidetip"),
      updateaxispointer: () => console.log("updateaxispointer"),
      // A bar series with realtimeSort emits this when the bars re-order.
      changeaxisorder: (params: EventParams) => console.log(params.componentType),
    }}
  />
);
`,kp=[38,21,64,47,12,55],Ap=()=>{let[e,t]=l(null),[n,r]=l(null),[i,a]=l(null),[o,s]=Ji({rendered:0,finished:0,showtip:0,hidetip:0,updateaxispointer:0,changeaxisorder:0,click:0,mouseover:0}),[c,u]=Ji({rendered:``,finished:``,showtip:``,hidetip:``,updateaxispointer:``,changeaxisorder:``,click:``,mouseover:``}),[d,f]=Ji({line:0,area:0,breadcrumb:0}),[p,m]=Ji({elapsedTime:null,finishedArg:null,selfTypeViolations:0,showtipFired:null,hidetipFired:null,axisPointerFired:null,showtipEcho:null,orderCountBefore:null}),[h,g]=l([]),[_,v]=l(kp),[y,b]=l(!1);return{instances:{line:e,treemap:n,race:i},setInstances:{line:t,treemap:r,race:a},counts:o,setCounts:s,details:c,setDetails:u,selfTypes:d,setSelfTypes:f,observed:p,setObserved:m,log:h,setLog:g,raceValues:_,setRaceValues:v,racing:y,setRacing:b}},jp={line:[`line`,`area`],treemap:[`breadcrumb`]},Mp=15,Np=1500,Pp=(e,t)=>t===void 0||(jp[e]?.includes(t)??!1),Fp=e=>{let t=Math.max(...e)+Math.min(...e);return e.map(e=>t-e)},Ip=e=>{let{instances:t,counts:n,setCounts:r,details:i,setDetails:a,setSelfTypes:o,setObserved:c,setLog:l,setRaceValues:u,racing:d,setRacing:p}=e,m=e=>{let n=t[e]();return n!==null&&!n.isDisposed()?n:null},h=(e,t)=>{r(e,I),a(e,t),l(n=>{let r=n.at(0);return r?.event===e?[{...r,detail:t,repeat:r.repeat+1},...n.slice(1)]:[{time:Wt(),event:e,detail:t,repeat:1},...n].slice(0,Mp)})},g=e=>t=>{h(e,un(t))},_=e=>t=>{let{selfType:n,seriesType:r}=t;n!==void 0&&o(n,I),Pp(r,n)||c(`selfTypeViolations`,I),h(e,`${r} selfType=${n??`none`}`)},v={rendered:e=>{let t=sn(e,`elapsedTime`);c(`elapsedTime`,t??NaN),h(`rendered`,`elapsedTime=${t?.toFixed(1)??`missing`}`)},finished:e=>{let t=e;c(`finishedArg`,typeof t),h(`finished`,`argument is ${typeof t}`)},showtip:g(`showtip`),hidetip:g(`hidetip`),updateaxispointer:g(`updateaxispointer`),changeaxisorder:g(`changeaxisorder`),click:_(`click`),mouseover:_(`mouseover`)},y=()=>{let e=m(`line`);if(!e)return;let t={showtip:n.showtip,axisPointer:n.updateaxispointer};e.dispatchAction(A.showTip({seriesIndex:0,dataIndex:3})),c({showtipFired:n.showtip-t.showtip,axisPointerFired:n.updateaxispointer-t.axisPointer,showtipEcho:dn(i.showtip,`dataIndex`)})},b=()=>{let e=m(`line`);if(!e)return;let t=n.hidetip;e.dispatchAction(A.hideTip()),c(`hidetipFired`,n.hidetip-t)},x=()=>{u(e=>e.map(e=>e+Math.round(Math.random()*30)))};return f(()=>{if(!d())return;let e=setInterval(x,Np);s(()=>{clearInterval(e)})}),{handlers:v,showTip:y,hideTip:b,stepRace:x,reverseRace:()=>{c(`orderCountBefore`,n.changeaxisorder),u(Fp)},resetRace:()=>{u(kp)},toggleRacing:()=>{p(!d())}}},Lp={line:`hover or click the line`,area:`hover or click the area under the line`,breadcrumb:`click a treemap node, then its breadcrumb`},Rp=e=>{let{counts:t,details:n,selfTypes:r,observed:i}=e,a=(e,t)=>({label:t,expected:()=>r[e]===0?Lp[e]:`≥ 1`,actual:()=>r[e],pass:()=>!0}),o=(e,t,n)=>({label:e,expected:()=>n()===null?t:`≥ 1`,actual:()=>n()??`-`,pass:()=>{let e=n();return e===null||e>=1}});return[{title:`LIFECYCLE EVENTS - handler argument types`,items:[{label:`rendered - handler receives RenderedEventParams { elapsedTime: number }`,expected:()=>`finite number, 0 or more`,actual:()=>i.elapsedTime===null?`-`:`${i.elapsedTime.toFixed(2)} ms`,pass:()=>i.elapsedTime===null||Number.isFinite(i.elapsedTime)&&i.elapsedTime>=0},{label:`finished - handler receives undefined, not EventParams`,expected:()=>`undefined`,actual:()=>i.finishedArg??`-`,pass:()=>i.finishedArg===null||i.finishedArg===`undefined`}]},{title:`EventParams.selfType (ECharts 6.1)`,items:[a(`line`,`selfType 'line' - mouse event on the line of a line series`),a(`area`,`selfType 'area' - mouse event on the areaStyle of a line series`),a(`breadcrumb`,`selfType 'breadcrumb' - mouse event on a treemap breadcrumb`),{label:`selfType only appears on the part it names (line / area on line, breadcrumb on treemap)`,expected:()=>0,actual:()=>i.selfTypeViolations,pass:()=>i.selfTypeViolations===0}]},{title:`TOOLTIP, AXIS POINTER AND AXIS ORDER EVENTS`,items:[{label:`showtip - Show tip fires it and the payload (dataIndex) is echoed`,expected:()=>i.showtipFired===null?`press Show tip`:`≥ 1 event, dataIndex=3`,actual:()=>`${i.showtipFired??`-`} event(s), ${i.showtipEcho??`-`}`,pass:()=>i.showtipFired===null||i.showtipFired>=1&&i.showtipEcho===`dataIndex=3`},o(`updateaxispointer - an axis tooltip shown by showTip moves the axis pointer`,`press Show tip`,()=>i.axisPointerFired),o(`hidetip - Hide tip fires it`,`press Hide tip`,()=>i.hidetipFired),{label:`changeaxisorder - Reverse order re-sorts the realtimeSort bars and fires it`,expected:()=>i.orderCountBefore===null?`press Reverse order`:`≥ ${i.orderCountBefore+1}`,actual:()=>t.changeaxisorder,pass:()=>i.orderCountBefore===null||t.changeaxisorder>i.orderCountBefore},{label:`changeaxisorder - EventParams.componentType names the re-ordered axis`,expected:()=>`componentType=yAxis`,actual:()=>t.changeaxisorder===0?`-`:dn(n.changeaxisorder,`componentType`),pass:()=>t.changeaxisorder===0||n.changeaxisorder.includes(`componentType=yAxis`)}]}]},zp=xt.textStyle.color,Bp=[`Press`,`Mixer`,`Packer`,`Lathe`,`Welder`,`Conveyor`],Vp=()=>R({tooltip:{trigger:`axis`},axisPointer:{type:`cross`},xAxis:{type:`category`,data:W},yAxis:{type:`value`},series:tn([{type:`line`,data:G,areaStyle:{opacity:.35},triggerEvent:!0}])}),Hp=()=>({series:[{type:`treemap`,nodeClick:`zoomToNode`,roam:!1,top:8,bottom:34,left:8,right:8,breadcrumb:{show:!0,bottom:4,height:22},label:{color:zp},data:[{name:`Line A`,value:40,children:[{name:`Press`,value:25},{name:`Conveyor`,value:15}]},{name:`Line B`,value:35,children:[{name:`Mixer`,value:20},{name:`Packer`,value:15}]},{name:`Utilities`,value:25}]}]}),Up=e=>R({grid:{left:90,right:60,top:16,bottom:24},xAxis:{max:`dataMax`},yAxis:{type:`category`,data:Bp,inverse:!0,max:Bp.length-1,animationDuration:300,animationDurationUpdate:300},series:[{type:`bar`,realtimeSort:!0,data:e,label:{show:!0,position:`right`,valueAnimation:!0,color:zp}}],animationDuration:0,animationDurationUpdate:800,animationEasing:`linear`,animationEasingUpdate:`linear`}),Wp=y(`<div class="gap-4 grid lg:grid-cols-3">`),Gp=y(`<span>`),Kp=y(`<div>rendered: <strong></strong> - last elapsedTime <strong>`),qp=y(`<div>finished: <strong></strong> - argument was <strong>`),Jp=y(`<div>selfType: <strong>`),Yp=y(`<div>showtip / hidetip / updateaxispointer / changeaxisorder: <strong>`),Xp=y(`<div class=mt-4>`);ft([Oe]);var Zp=()=>{let e=Ap(),t=Ip(e);return{...e,...t,checklist:Rp(e),lineOption:Vp,treemapOption:Hp,raceOption:()=>Up(e.raceValues())}},Qp=e=>({entry:` - ${e.detail}${e.repeat>1?` (x${e.repeat})`:``}`,isRegular:e.event===`rendered`||e.event===`finished`}),$p=()=>{let{handlers:e,setInstances:t,counts:r,selfTypes:i,observed:a,log:o,racing:s,checklist:c,lineOption:l,treemapOption:u,raceOption:d,showTip:f,hideTip:p,stepRace:m,reverseRace:h,resetRace:g,toggleRacing:v}=Zp();return n(D,{get theme(){return M.name},get children(){return[n(U,{get children(){var r=Wp();return T(r,n(V,{option:l,class:`chart-md`,ref(e){var n=t.line;typeof n==`function`?n(e):t.line=e},containerProps:{title:`line + areaStyle`,note:`selfType line / area, showtip, updateaxispointer`},get onEvents(){return{rendered:e.rendered,finished:e.finished,click:e.click,mouseover:e.mouseover,showtip:e.showtip,hidetip:e.hidetip,updateaxispointer:e.updateaxispointer}}}),null),T(r,n(V,{option:u,class:`chart-md`,ref(e){var n=t.treemap;typeof n==`function`?n(e):t.treemap=e},containerProps:{title:`treemap`,note:`click a node, then the breadcrumb`},get onEvents(){return{click:e.click,mouseover:e.mouseover}}}),null),T(r,n(V,{option:d,class:`chart-md`,ref(e){var n=t.race;typeof n==`function`?n(e):t.race=e},containerProps:{title:`bar race`,note:`realtimeSort, changeaxisorder`},get onEvents(){return{changeaxisorder:e.changeaxisorder}}}),null),r}}),n(H,{get children(){return[n(jt,{get children(){var e=Gp();return T(e,()=>en(`Hover and click the line and its area, then click a treemap node and its breadcrumb to see selfType. The buttons drive showtip, hidetip and the changeaxisorder race.`)),e}}),n(F,{sections:c}),n(K,{get children(){return[(()=>{var e=Kp(),t=e.firstChild.nextSibling,n=t.nextSibling.nextSibling;return T(t,()=>r.rendered),T(n,(()=>{var e=_(()=>a.elapsedTime===null);return()=>e()?`-`:`${a.elapsedTime.toFixed(1)} ms`})()),e})(),(()=>{var e=qp(),t=e.firstChild.nextSibling,n=t.nextSibling.nextSibling;return T(t,()=>r.finished),T(n,()=>a.finishedArg??`-`),e})(),(()=>{var e=Jp(),t=e.firstChild.nextSibling;return T(t,()=>`line ${i.line} / area ${i.area} / breadcrumb ${i.breadcrumb}`),e})(),(()=>{var e=Yp(),t=e.firstChild.nextSibling;return T(t,()=>`${r.showtip} / ${r.hidetip} / ${r.updateaxispointer} / ${r.changeaxisorder}`),e})()]}}),n(P,{get children(){return[n(N,{onClick:f,children:`Show tip (dataIndex 3)`}),n(N,{onClick:p,children:`Hide tip`}),n(N,{onClick:m,children:`Race step`}),n(N,{onClick:h,children:`Reverse order`}),n(N,{onClick:g,children:`Reset race`}),n(N,{onClick:v,get children(){return s()?`Stop auto race`:`Start auto race`}})]}}),n(Xc,{get entries(){return o()},entryMapper:Qp,eventKey:`event`,placeholder:`Hover the chart or press a button`}),(()=>{var e=Xp();return T(e,n(z,{code:Op})),e})()]}})]}})},em=`import type { Component } from "solid-js";
import { createSignal } from "solid-js";

import type { EChartsOption } from "@amad3v/solid-echarts";
import { SolidEChart, SolidEChartProvider } from "@amad3v/solid-echarts";

export const Example: Component = () => {
  const [lazy, setLazy] = createSignal(false);
  const [wide, setWide] = createSignal(false);

  const option = (): EChartsOption => ({
    animation: false,
    legend: wide() ? { data: ["Alpha", "Beta"] } : undefined,
    xAxis: { type: "category", data: ["Mon", "Tue", "Wed"] },
    yAxis: { type: "value" },
    series: wide()
      ? [
          { name: "Alpha", type: "bar", data: [5, 9, 7] },
          { name: "Beta", type: "bar", data: [3, 4, 6] },
        ]
      : [{ name: "Alpha", type: "bar", data: [5, 9, 7] }],
  });

  const style = { width: "100%", height: "280px" };

  return (
    // Provider defaults. They can change after mount: the next setOption uses
    // the new value, changing a flag never calls setOption by itself.
    <SolidEChartProvider updateOptions={() => ({ notMerge: true, lazyUpdate: lazy() })}>
      {/* Inherits notMerge + lazyUpdate from the provider. */}
      <SolidEChart option={option} style={style} />

      {/* Precedence: flag prop > this chart's updateOptions > provider > default. */}
      <SolidEChart option={option} notMerge={false} style={style} />

      {/* A per-chart updateOptions REPLACES the provider object as a whole: it
          does not combine with it, so notMerge and lazyUpdate above are ignored here
          (and \`silent: true\` suppresses the 'updated' event of every setOption). */}
      <SolidEChart option={option} updateOptions={{ silent: true }} style={style} />

      <button onClick={() => setLazy((v) => !v)}>{"Toggle lazyUpdate"}</button>
      <button onClick={() => setWide((v) => !v)}>{"Toggle series"}</button>
    </SolidEChartProvider>
  );
};
`,tm=e=>({animation:!1,legend:e?{...xt,data:[`Alpha`,`Beta`]}:void 0,xAxis:{type:`category`,data:W,...St},yAxis:{type:`value`,...St},series:e?[{name:`Alpha`,type:`bar`,data:G},{name:`Beta`,type:`bar`,data:En}]:[{name:`Alpha`,type:`bar`,data:G}]}),nm=300,rm=e=>Array.isArray(e)?e.length:0,im=()=>{let[e,t]=l(!1),[n,r]=l(null),i=null,a=0,o=0,c=0,u;return s(()=>{clearTimeout(u)}),{option:()=>(c+=1,tm(e())),result:n,handleInit:e=>{i=e,e.on(`updated`,()=>{o+=1})},handleRendered:()=>{a+=1},run:()=>{if(!i)return;let e=a,n=o;t(!0),t(!1);let s=i.getOption();r({seriesCount:Vt(i),legendCount:rm(s.legend),syncRendered:a-e,syncUpdated:o-n,settledUpdated:null}),clearTimeout(u),u=setTimeout(()=>{r(e=>e&&{...e,settledUpdated:o-n})},nm)},optionEvaluations:()=>c}},am=[`inherit`,`own`,`propOverOwn`,`propOverProvider`],om=()=>{let[e,t]=l(`merge`),[n,r]=l(!1),[i,a]=l(!1),[o,s]=l(0),[c,u]=l(0),[d,f]=l(0);return{strategy:e,setStrategy:t,lazyUpdate:n,setLazyUpdate:r,silent:i,setSilent:a,probes:{inherit:im(),own:im(),propOverOwn:im(),propOverProvider:im()},flagChanges:o,setFlagChanges:s,flagChangeEvaluations:c,setFlagChangeEvaluations:u,probeRuns:d,setProbeRuns:f}},sm=e=>{let{probes:t,setStrategy:n,setLazyUpdate:r,setSilent:i}=e,{setFlagChanges:a,setFlagChangeEvaluations:o,setProbeRuns:s}=e,c=()=>am.reduce((e,n)=>e+t[n].optionEvaluations(),0),l=e=>{let t=c();e(),a(I),o(e=>e+c()-t)};return{changeStrategy:e=>{l(()=>{n(e)})},changeLazyUpdate:e=>{l(()=>{r(e)})},changeSilent:e=>{l(()=>{i(e)})},runProbes:()=>{s(I);for(let e of am)t[e].run()}}},cm={strategy:`merge`,lazyUpdate:!1,silent:!1},lm=(e,t)=>{let n={strategy:t.strategy(),lazyUpdate:t.lazyUpdate(),silent:t.silent()};switch(e){case`inherit`:return n;case`own`:return{...cm,lazyUpdate:!0};case`propOverOwn`:return cm;case`propOverProvider`:return{...n,lazyUpdate:!1}}},um={inherit:`Chart A - inherits the provider`,own:`Chart B - per-chart updateOptions`,propOverOwn:`Chart C - flag prop over updateOptions`,propOverProvider:`Chart D - flag prop over provider`},dm=`run the probe`,fm=e=>e.legendCount===0?`notMerge`:e.seriesCount===1?`replaceMerge`:`merge`,pm=(e,t)=>t?0:e?1:2,mm=(e,t)=>{let n=t.probes[e].result,r=()=>lm(e,t);return[{label:`Merge strategy - what wide -> narrow left in the model`,expected:()=>r().strategy,actual:()=>{let e=n();return e?`${fm(e)} (${e.seriesCount} series, ${e.legendCount} legend)`:dm},pass:()=>{let e=n();return e===null||fm(e)===r().strategy}},{label:`lazyUpdate - renders that happened inside the probe call`,expected:()=>r().lazyUpdate?`0 (deferred)`:`2 (synchronous)`,actual:()=>{let e=n();return e?String(e.syncRendered):dm},pass:()=>{let e=n();return e===null||e.syncRendered===(r().lazyUpdate?0:2)}},{label:`silent / lazyUpdate - 'updated' events after the frame settled`,expected:()=>String(pm(r().lazyUpdate,r().silent)),actual:()=>{let e=n();return e?e.settledUpdated===null?`settling...`:String(e.settledUpdated):dm},pass:()=>{let e=n();return e===null||e.settledUpdated===pm(r().lazyUpdate,r().silent)}}]},hm=e=>[...am.map(t=>({title:um[t],items:mm(t,e)})),{title:`PROVIDER FLAGS AFTER MOUNT`,items:[{label:`Changing a provider flag alone does not call setOption`,expected:()=>`0`,actual:()=>String(e.flagChangeEvaluations()),pass:()=>e.flagChangeEvaluations()===0}]}],gm=y(`<div>Probe runs: <strong></strong> (each run = two unbatched writes = two setOption calls per chart)`),_m=y(`<div>Provider flag changes: <strong></strong> - setOption calls they caused: <strong>`),vm=y(`<div><strong>`),ym=[{value:`merge`,label:`merge`},{value:`notMerge`,label:`notMerge`},{value:`replaceMerge`,label:`replaceMerge`}],bm=e=>{if(!e)return`not probed yet`;let t=e.settledUpdated===null?`...`:String(e.settledUpdated);return`${e.seriesCount} series, ${e.legendCount} legend, ${e.syncRendered} sync renders, ${t} updated events`},xm=()=>{let e=om(),t=sm(e),n=hm(e),r=()=>({notMerge:e.strategy()===`notMerge`,replaceMerge:e.strategy()===`replaceMerge`?[`series`]:[],lazyUpdate:e.lazyUpdate(),silent:e.silent()});return{...e,...t,checklist:n,providerUpdateOptions:r}},Sm=()=>{let{strategy:e,lazyUpdate:t,silent:r,changeStrategy:i,changeLazyUpdate:a,changeSilent:o,runProbes:s,probes:c,probeRuns:l,flagChanges:u,flagChangeEvaluations:d,checklist:f,providerUpdateOptions:p}=xm();return n(D,{get theme(){return M.name},updateOptions:p,get children(){return[n(U,{class:`gap-4 grid grid-cols-2 grid-rows-2`,get children(){return[n(V,{get containerProps(){return{title:um.inherit,note:`no per-chart flags - provider updateOptions apply`}},get option(){return c.inherit.option},class:`chart-sm`,get onInit(){return c.inherit.handleInit},get onEvents(){return{rendered:c.inherit.handleRendered}}}),n(V,{get containerProps(){return{title:um.own,note:`updateOptions={{ lazyUpdate: true }} - provider flags ignored`}},get option(){return c.own.option},updateOptions:{lazyUpdate:!0},class:`chart-sm`,get onInit(){return c.own.handleInit},get onEvents(){return{rendered:c.own.handleRendered}}}),n(V,{get containerProps(){return{title:um.propOverOwn,note:`updateOptions={{ notMerge: true }} + notMerge={false}`}},get option(){return c.propOverOwn.option},updateOptions:{notMerge:!0},notMerge:!1,class:`chart-sm`,get onInit(){return c.propOverOwn.handleInit},get onEvents(){return{rendered:c.propOverOwn.handleRendered}}}),n(V,{get containerProps(){return{title:um.propOverProvider,note:`lazyUpdate={false} - strategy and silent still inherited`}},get option(){return c.propOverProvider.option},lazyUpdate:!1,class:`chart-sm`,get onInit(){return c.propOverProvider.handleInit},get onEvents(){return{rendered:c.propOverProvider.handleRendered}}})]}}),n(H,{get children(){return[n(Sr,{title:`Provider updateOptions (changed after mount)`,get children(){return[n(wr,{label:`notMerge / replaceMerge`,options:ym,get value(){return e()},onChange:i}),n(Cr,{label:`lazyUpdate`,get checked(){return t()},onChange:a}),n(Cr,{label:`silent`,get checked(){return r()},onChange:o}),n(N,{onClick:s,children:`Run probe on all charts`})]}}),n(F,{sections:f}),n(K,{get children(){return[(()=>{var e=gm(),t=e.firstChild.nextSibling;return T(t,l),e})(),(()=>{var e=_m(),t=e.firstChild.nextSibling,n=t.nextSibling.nextSibling;return T(t,u),T(n,d),e})(),n(h,{each:am,children:e=>(()=>{var t=vm(),n=t.firstChild;return T(t,()=>`${um[e]}: `,n),T(n,()=>bm(c[e].result())),t})()})]}}),n(z,{code:em})]}})]}})},Cm=`import type { Component } from "solid-js";
import { createSignal, For } from "solid-js";

import type { EChartsOption, EChartsType } from "@amad3v/solid-echarts";
import { SolidEChart, seActions, useChart } from "@amad3v/solid-echarts";

type Dataset = { label: string; values: number[] };

const datasets: Dataset[] = [
  { label: "Q1", values: [120, 200, 150, 80, 70, 110, 180] },
  { label: "Q2", values: [80, 160, 210, 140, 90, 180, 60] },
];

const fakeFetch = (dataset: Dataset): Promise<Dataset> =>
  new Promise((resolve) => setTimeout(() => resolve(dataset), 1200));

// useChart must be called inside a <SolidEChart> subtree (here: as its child).
const Controls: Component<{ onLoad: (dataset: Dataset) => void }> = (props) => {
  const { dispatch } = useChart();

  return (
    <>
      <button onClick={() => dispatch(seActions.highlight({ seriesIndex: 0, dataIndex: 0 }))}>
        {"Highlight first bar"}
      </button>
      <For each={datasets}>
        {(dataset) => (
          <button onClick={() => props.onLoad(dataset)}>{\`Load \${dataset.label}\`}</button>
        )}
      </For>
    </>
  );
};

export const Example: Component = () => {
  const [dataset, setDataset] = createSignal(datasets[0]);
  const [loading, setLoading] = createSignal(false);
  let chart: EChartsType | null = null;

  const option = (): EChartsOption => ({
    tooltip: { trigger: "axis" },
    xAxis: { type: "category", data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
    yAxis: { type: "value" },
    series: [{ name: "Sales", type: "bar", data: dataset().values }],
  });

  const load = async (next: Dataset): Promise<void> => {
    setLoading(true);
    setDataset(await fakeFetch(next));
    setLoading(false);
  };

  return (
    <SolidEChart
      option={option}
      // Call-form props are reactive (since 1.1.0): the overlay follows the signal.
      loading={loading()}
      // \`ref\` receives the live instance (and \`null\` on dispose).
      ref={(instance: EChartsType | null) => {
        chart = instance;
      }}
      onEvents={{ click: (params) => console.log("clicked", params.name, chart?.getWidth()) }}
      style={{ width: "100%", height: "400px" }}
    >
      <Controls onLoad={(next) => void load(next)} />
    </SolidEChart>
  );
};
`,wm=()=>{let[e,t]=l(Kn[0]),[n,r]=l(!1),[i,a]=l(null),[o,s]=l(0),[c,u]=l(null),[d,f]=l(0),[p,m]=l(0),[h,g]=l(`-`);return{currentDataset:e,setCurrentDataset:t,isLoading:n,setIsLoading:r,instanceAvailable:i,setInstanceAvailable:a,highlightCount:o,setHighlightCount:s,refValid:c,setRefValid:u,loadCount:d,setLoadCount:f,clickEventCount:p,setClickEventCount:m,datasetAfterFetch:h,setDatasetAfterFetch:g}},Tm=e=>{let{setCurrentDataset:t,setIsLoading:n,setRefValid:r,setLoadCount:i,setClickEventCount:a,setDatasetAfterFetch:o}=e,s=null;return{handleClick:()=>{a(I)},handleFetch:async e=>{n(!0),i(I);let r=await zt(e);t(r),o(r.label),n(!1)},handleInit:e=>{s=e},setRef:e=>{e!==null&&r(e===s&&!e.isDisposed())}}},Em=e=>{let{currentDataset:t,isLoading:n,instanceAvailable:r,highlightCount:i,refValid:a,loadCount:o,clickEventCount:s,datasetAfterFetch:c}=e;return[{label:`useChart() - instance is non-null inside the SolidEChart subtree`,expected:()=>r()===null?`press Highlight first bar`:`true`,actual:()=>r()===null?`-`:r()?`true ✓`:`false ×`,pass:()=>r()===null||r()===!0},{label:`dispatch() via useChart() - highlight action reaches the chart`,expected:()=>i()>0?`≥ 1`:`press Highlight first bar`,actual:()=>String(i()),pass:()=>!0},{label:`ref forwarding - ref receives the same live EChartsType that onInit reported`,expected:()=>`same live EChartsType`,actual:()=>a()===null?`-`:a()?`valid ✓`:`mismatch ×`,pass:()=>a()===null||a()===!0},{label:`loading prop - overlay shows during async fetch (call-form prop is reactive)`,expected:()=>o()>0?`showed during fetch`:`click a Load button`,actual:()=>o()===0?`-`:n()?`showing now`:`shown ${o()} time(s)`,pass:()=>!0},{label:`reactive option - data updates after fetch completes`,expected:()=>o()>0?`dataset: ${c()}`:`click a Load button`,actual:()=>o()>0?t().label:`-`,pass:()=>o()===0||t().label===c()},{label:`onEvents 'click' - fires when a bar element is clicked`,expected:()=>s()>0?`≥ 1`:`click a bar on the chart`,actual:()=>String(s()),pass:()=>!0}]},Dm=e=>()=>R({tooltip:{trigger:`axis`},legend:{data:[`Sales`]},xAxis:{type:`category`,data:W},yAxis:{type:`value`},series:[{name:`Sales`,type:`bar`,data:e.currentDataset().values}]}),Om=y(`<span>Dataset: <strong>`),km=y(`<div>`),Am=()=>{let e=wm(),t=Tm(e),n=Em(e),r=Dm(e);return{...e,...t,checklist:n,option:r}},jm=e=>{let{instance:t,dispatch:r}=$e(),i=()=>{let n=t();e.onInstanceProbed(n!==null&&!n.isDisposed()),n&&!n.isDisposed()&&(e.onHighlight(),r(A.highlight({seriesIndex:0,dataIndex:0})),setTimeout(()=>{r(A.downplay({seriesIndex:0,dataIndex:0}))},1e3))};return n(P,{get children(){return[n(N,{onClick:i,get disabled(){return e.isLoading()},children:`Highlight first bar (via useChart)`}),n(h,{each:Kn,children:t=>n(N,{onClick:()=>{e.onFetch(t)},get disabled(){return e.isLoading()},get children(){return`Load ${t.label}`}})})]}})},Mm=[{title:`Auto Merge Plan`,cpt:tr,content:`Verifies that autoMerge: true infers the correct setOption merge strategy automatically via optionMergePlan, while autoMerge: false falls back to ECharts' default normalMerge (ghost series linger). Two detection paths are exercised: noIdCount diffing for anonymous series, and hasMissingIds for id-bearing series. The checklist reads live series counts after the finished event - the earliest point where getOption() reflects the merged state - making merge behavior objectively verifiable without visual inspection.`},{title:`Auto Resize Observer`,cpt:q,content:`Verifies that the autoResize prop correctly attaches and detaches a ResizeObserver on the chart container without ever touching the chart instance. Two guards protect against spurious resizes: the first observation is skipped when dimensions have not actually changed (preserving entry animations), and resize is skipped when the container is zero-sized (preventing canvas destruction). The checklist confirms three invariants: toggling autoResize never triggers a reinit, onResize fires on genuine width changes when enabled, and onResize is completely silent when disabled. The onResize callback demonstrates its natural use case — reading the post-resize canvas dimensions via chart.getWidth().`},{title:`Chart Proxy API`,cpt:ua,content:`Exercises the full SolidEChartAPI proxy returned by useChart().chart. The proxy wraps every public ECharts instance method with null and dispose guards - methods silently return undefined when the instance is unavailable, so callers never need optional chaining or null checks. Auto-checks populate on mount via createEffect on instance() - the idiomatic SolidJS pattern that re-runs automatically if the instance is ever replaced. Action-triggered checks require pressing a button. ChartControls is rendered as a child of SolidEChart so useChart() resolves to this specific chart's instance via context.`},{title:`Create Action After Reinit`,cpt:ka,content:`Demonstrates that createAction reactive bindings survive a full chart reinit. When the renderer is switched, ECharts disposes the current instance and creates a new one. Because createAction tracks both instance and the action accessor as dependencies, it automatically re-fires with the current payload on the new instance - no manual re-wiring needed. Hover a row to activate a highlight, then switch the renderer while keeping the mouse over the row. The highlight must reappear on the new instance without any user interaction.`},{title:`Create Action Table Chart`,cpt:Ha,content:`Demonstrates createAction - the declarative action binding primitive from the solid-echarts primitive layer. Instead of calling dispatch() manually in event handlers, a single accessor encodes both states: hovering a row dispatches highlight, leaving the table dispatches downplay.   The signal is the only bridge between the table and the chart - neither component knows the other exists. createAction uses defer: true so no dispatch fires before the chart model is ready, and built-in null/dispose guards silently no-op if the instance is unavailable. Datazoom event counters on the chart make dispatch behavior objectively verifiable without relying on visual inspection.`},{title:`Create Chart Primitive`,cpt:to,content:`Demonstrates the primitive layer directly - createChart and createChartEffect used without the SolidEChart component wrapper. createChart takes a container signal and returns an instance accessor; createChartEffect wires reactive option updates to it. This is the foundation that SolidEChart is built on, exposed for cases where full control over the instance lifecycle is needed. The instance signal transitions from null before the container mounts to a live EChartsType after, and back to null on cleanup.`},{title:`Group Reassignment`,cpt:Qo,content:`Verifies that group sync remains intact when a chart moves between groups at runtime. Charts A and B are permanently in the revenue group. Chart C starts in forecast and can be moved into revenue and back. The critical invariant: A and B must stay synced regardless of C's position - B must never be orphaned by C's group reassignment. Datazoom event counters make sync behavior objectively verifiable per phase. Baselines are snapshotted at each group change so checklist checks reflect only the current phase.`},{title:`Group Sync & Isolation`,cpt:fs,content:`Charts sharing the same group ID synchronise their datazoom and tooltip automatically via ECharts group sync. The group can be set on a SolidEChartProvider (all descendant charts inherit it) or overridden per-chart using the group prop directly on SolidEChart. The connect() / disconnect() utilities toggle sync at runtime without remounting any chart. GroupBadge reads chart.group from the live ECharts instance via useChart(), confirming the library correctly propagated the prop. Datazoom event counters make sync behavior objectively verifiable - matching counts confirm sync is active; a frozen count confirms it is off.`},{title:`Manual Mode Streaming`,cpt:Mc,content:`Demonstrates manual update mode - when the option prop is omitted from SolidEChart, no reactive createChartEffect is wired. The chart instance is accessed via onInit and controlled imperatively. The initial option structure (axes, empty series) is set once via chart.setOption(), then data streams in chunk by chunk using appendData - no signal updates, no setOption cycles, no reactive overhead. All other props (loading, autoResize, onEvents) remain fully functional in manual mode. This is the correct pattern for streaming large datasets where reactive diffing would be wasteful.`},{title:`Merge Strategies`,cpt:Uc,content:`Compares the three setOption merge strategies side by side. The same option switch is applied to all three charts simultaneously - only the merge strategy prop differs. notMerge: false (ECharts default) keeps existing series absent from the new option, causing ghost series to linger. notMerge: true performs a full model reset, removing everything not in the new option. replaceMerge: ['series'] replaces only the series component, leaving axes and grid untouched - the correct choice when you need targeted removal without resetting the entire chart state. The checklist reads live series counts via the finished event to make merge behaviour objectively verifiable.`},{title:`Native DOM Passthrough`,cpt:ql,content:`Demonstrates that unknown props on SolidEChart pass through to the underlying container via the nativeProps spread. Any HTML attribute, ARIA property, DOM event handler, or data-* attribute not consumed by the library reaches the DOM element directly - enabling accessibility, testing, and native browser behaviors without any special handling. DOM attribute checks are verified automatically on mount via onInit and chart.getDom(). Event handler checks require interaction.`},{title:`onEventsOnce`,cpt:iu,content:`Demonstrates onEventsOnce alongside onEvents. Handlers registered via onEventsOnce fire exactly once and self-remove - the library attaches a wrapper that calls chart.off() with its own reference after the first invocation. Both props can carry the same event name simultaneously: on the first occurrence both fire, on subsequent ones only the persistent onEvents handler continues. The event log distinguishes the two sources by color. The checklist verifies all four invariants objectively using live counters.`},{title:`onResize Callback`,cpt:pu,content:`Verifies the onResize callback - a natural extension of autoResize for reading post-resize canvas dimensions. Two guards protect against spurious calls: Guard 1 skips the initial ResizeObserver callback when dimensions have not changed (preserving entry animations), Guard 2 skips resize when the container is zero-sized (preventing canvas destruction). onResize only fires after a genuine resize that passes both guards - at which point chart.getWidth() and chart.getHeight() return the new canvas size in CSS pixels.`},{title:`Provider Merge Defaults`,cpt:yd,content:`Verifies that updateOptions on SolidEChartProvider sets a global default for setOption merge behaviour inherited by all descendant charts. Charts A and C inherit autoMerge: true from the outer provider - removed series are cleaned up automatically. Chart B overrides with autoMerge={false}, at the chart level - per-chart props always win. Chart D sits under a nested provider with autoMerge: false - nested providers shadow only what they explicitly declare, leaving the outer provider's other settings intact. The checklist reads live series counts after the finished event to make inheritance and override behavior objectively verifiable.`},{title:`Reactive Chart Intro`,cpt:Od,content:`The starting point for solid-echarts - a reactive chart wired to two signals: the data array and the series type. Both drive the option accessor, so any change calls setOption automatically without any imperative update code. onEvents demonstrates event wiring on chart elements. The checklist verifies reactivity by counting finished events and reading getOption() after each re-render.`},{title:`Renderer Switch`,cpt:Vd,content:`Verifies that changing the renderer prop triggers a full dispose → reinit cycle. renderer is the only SolidEChart prop that cannot be updated in place - all others (theme, group, autoResize) update without touching the instance. The checklist confirms: onInit fires once for the first instance while onReInit fires for every instance created by a switch, onDispose fires before each reinit, the current option is reapplied automatically, and the DOM reflects the correct renderer via the presence of a <canvas> or <svg> child element.`},{title:`seActions Dispatch`,cpt:Zd,content:`Exercises every seActions factory via dispatch() from useChart(). Each button group covers one action category: highlight/downplay, select, tooltip, legend, dataZoom, and restore. The checklist listens to the corresponding ECharts chart events to confirm each dispatch reached the chart model — not just that our code ran. dataZoom is the one exception: dispatching it programmatically does not fire the datazoom chart event (only user interaction does), so the dispatched range is shown for visual verification instead.`},{title:`Surface Events`,cpt:qf,content:`Demonstrates onSurfaceEvents and onSurfaceEventsOnce - surface events attach to the underlying zrender canvas via chart.getZr().on() and fire anywhere on the rendering surface, including blank areas with no data elements. Unlike onEvents which only fires when the pointer is over a graphic element, surface events fire on the entire canvas. event.target is null when the pointer is over blank space - the key signal for blank-area detection. onSurfaceEventsOnce handlers self-remove after the first invocation using the same closure pattern as onEventsOnce.`},{title:`Theme In Place`,cpt:Dp,content:`Demonstrates in-place theme switching via ECharts setTheme() - the only prop on SolidEChart that updates visuals without touching the instance. Unlike renderer which forces a full dispose → reinit cycle, changing theme preserves the existing instance and reapplies the current option automatically. Chart A inherits the theme from SolidEChartProvider and cycles through the brand, second and default themes. Chart B has a per-chart theme={BRAND_THEME.name}, override that persists regardless of provider changes. The checklist verifies the in-place invariant by tracking onInit, onDispose, and the ECharts instance ID across all switches.`},{title:`useChart & Loading`,cpt:()=>{let{currentDataset:e,isLoading:t,setInstanceAvailable:r,setHighlightCount:i,handleClick:a,handleFetch:o,handleInit:s,setRef:c,option:u,checklist:d}=Am(),[f,m]=l();return n(D,{get theme(){return M.name},renderer:`canvas`,get children(){return[n(U,{get children(){return n(yn,{get children(){return n(_t,{option:u,get loading(){return t()},class:`chart-lg`,ref:c,onInit:s,onEvents:{click:a},get children(){return n(E,{get when(){return f()},children:e=>n(g,{get mount(){return e()},get children(){return n(jm,{onFetch:o,isLoading:t,onInstanceProbed:r,onHighlight:()=>i(I)})}})})}})}})}}),n(H,{get children(){return[n(F,{sections:[{items:d}]}),n(K,{get children(){var n=Om(),r=n.firstChild.nextSibling;return T(r,()=>e().label),T(n,()=>t()?` - loading…`:``,null),n}}),(()=>{var e=km();return p(m,e),e})(),n(z,{code:Cm})]}})]}})},content:`Demonstrates useChart(), reactive loading, and ref forwarding together. ChartControls is rendered as a child of SolidEChart so useChart() resolves to the live instance via context - no prop drilling or ref needed. The loading prop is driven by a signal and shows the ECharts overlay while the simulated async fetch is in progress. ref forwarding delivers the raw EChartsType instance for imperative access outside the component tree.`},{title:`Batched Updates`,cpt:qr,content:`Verifies the performance guidance for reactive options. Three signal writes that feed one option call setOption three times, and ECharts renders each time. Wrapping them in Solid's batch() collapses them to one setOption and one render. lazyUpdate defers rendering to the next frame, so even unbatched writes produce a single finished event. A large series makes the cost visible, and counters on both charts verify the numbers.`},{title:`Call-Form Props`,cpt:Ei,content:`Verifies that props passed in call form (theme={theme()}, loading={loading()}, group={group()}, autoResize={autoResize()}) are as reactive as the accessor form. A call-form prop that switches between undefined and a value switches between the SolidEChartProvider value and the prop. onSurfaceEvents is accepted as an accessor and its handlers re-attach when the map changes. Two charts share the same controls, and the checklist reads theme, loading, chart.group and resize behaviour from each live instance.`},{title:`Export & SSR`,cpt:Ho,content:`Covers the export and coordinate calls of the chart API. getConnectedDataURL merges every chart sharing a group into one image, renderToSVGString and renderToCanvas render from the svg and canvas renderers, and getDevicePixelRatio reads the pixel ratio. convertFromPixel and containPixel are driven by a surface click and checked against convertToPixel. An ssr instance paints nothing into the DOM and is exported as an SVG string, previewed through an <img> data URL. The checklist decodes every output and verifies it.`},{title:`Init on Visible`,cpt:Fs,content:`Verifies initOnVisible on SolidEChart, on SolidEChartProvider (inherited) and on the createChart primitive. Charts below the fold in a scrollable panel have no instance until they are scrolled into view, and each runs onInit exactly once. A chart with initOnVisible={false} under a provider that sets it is created at mount, and a control chart with no initOnVisible is too.`},{title:`Init Options`,cpt:yc,content:`locale, devicePixelRatio, useDirtyRect, useCoarsePointer, pointerSize, width, height and resizeDebounce are read once when the instance is created. Changing them later has no effect, and renderer is the only prop that recreates the instance - with the values captured at mount, not the current props. Readouts from the live instance (getDevicePixelRatio, getWidth/getHeight, localized toolbox titles, pointer hit-testing, resize latency) show the creation-time values until the chart component is remounted.`},{title:`More seActions`,cpt:Ll,content:`Covers the remaining seActions creators: legendSelect and legendUnSelect (a name is required), brush with BrushArea areas, timelineChange and timelinePlayChange on a timeline with options[], and geoRoam targeted by geoId or geoIndex on a map registered with registerMap. It also shows the payload additions showTip x and y, dataZoom dataZoomId and downplay notBlur. Every button dispatches one payload, and the checklist compares the fired events and the live instance state with the documented behaviour.`},{title:`Primitives & Utilities`,cpt:cd,content:`Covers the exports that are neither components nor chart calls. useConfig is read in a probe and in a custom createChart + createChartEffect wrapper that resolves prop, then provider, then default, like SolidEChart. buildSignature is shown beside the MergePlan that optionMergePlan derives as the option changes, and the result is checked against an autoMerge chart. debounce sits between an Ark UI slider and the option, a graphic.LinearGradient fill is built with the color helpers, and a dataset transform is registered with registerTransform.`},{title:`Series Roam`,cpt:Nf,content:`seActions.graphRoam, treeRoam and sankeyRoam pan (dx, dy) and zoom (zoom, originX, originY) a series that has roam: true. The zoom is a factor relative to the current zoom, not an absolute level. Each dispatch fires exactly one graphroam, treeroam or sankeyroam event, and the new center and zoom are written back to the series option, so getOption() on the live instance reports them. focusNodeAdjacency, unfocusNodeAdjacency, tree expand / collapse and sankey dragNode are covered the same way.`},{title:`Theme & Option`,cpt:vp,content:`Verifies that a theme change keeps the current option. ECharts' setTheme rebuilds the chart from the first option ever set, so the library applies the current option again after every theme change - with notMerge: true under autoMerge - also when theme and option change in one batch(). The default-merge, autoMerge and createChart charts are checked on the live instance with chart.getOption(). In manual mode, with no option prop, the chart shows the first option until you set one yourself. An accessor that re-runs with an unchanged theme does not call setTheme again.`},{title:`Typed Events`,cpt:$p,content:`The rendered handler receives RenderedEventParams (elapsedTime) and the finished handler receives undefined. EventParams.selfType is 'line' or 'area' on a line series with triggerEvent, and 'breadcrumb' on a treemap breadcrumb. showtip, hidetip, updateaxispointer and changeaxisorder (a bar race with realtimeSort) reach onEvents handlers too. A live log and counters show each event.`},{title:`Update Options`,cpt:Sm,content:`Per-chart updateOptions and provider updateOptions feed setOption with the precedence: per-chart flag prop, then per-chart updateOptions, then provider updateOptions, then the default. A per-chart updateOptions replaces the provider object as a whole. A provider updateOptions that changes after mount applies on the next setOption, and changing a flag alone never calls it. Four charts probe notMerge, replaceMerge, lazyUpdate and silent on the live instance.`}].toSorted((e,t)=>e.title.localeCompare(t.title,`en`,{sensitivity:`base`})),Nm=`about`,Pm=e=>e.title.toLowerCase().replaceAll(/[^a-z0-9]+/g,`-`).replaceAll(/^-|-$/g,``),Fm=e=>`#/${e}`,Im=()=>decodeURIComponent(window.location.hash.replace(/^#\/?/,``)),Lm=()=>{let[e,t]=l(Im()),n=()=>{t(Im())};return window.addEventListener(`hashchange`,n),s(()=>{window.removeEventListener(`hashchange`,n)}),e},Rm=y(`<svg><g transform="translate(-244.684 91.8013)"><path d="m364.684-81.8013a110 80 0 0 1 110 79.9998 110 80 0 0 1-110 80.0003 110 80 0 0 1-110-80.0003 110 80 0 0 1 110-79.9998zm24.5313 26.1106c-3.25172-0.19108-7.54481 0.429259-8.81187 1.36891-8.27361 2.72693-14.2969 10.1692-22.8089 12.0463-17.1217 2.05454-35.0732 2.70226-50.4791 11.3616-9.54989 5.20155-19.5861 10.8598-26.0677 19.8319-3.935 6.69567-7.27995 14.9926-4.11758 22.6544-0.47115 5.59501-11.3804 11.3339-5.23999 16.0032 2.74056 1.88331 6.54311 0.941288 8.90333-1.18959 11.9046-7.92358 25.7288-12.9205 39.7309-15.4177 3.91076 4.90309 6.11704 11.8679 12.7744 13.8793 2.93855 1.76853 12.9075 1.68529 6.58977-2.312-4.2541-2.41188-8.35626-15.3334-0.24856-8.16022 6.65502 3.02354 15.177 6.82779 22.0457 2.62568-3.21944-1.52902-13.7304-5.98985-10.2919-9.21287 16.6055-2.06614 34.1335-6.87338 50.368-0.303341 8.10142 1.89801 15.5603 6.10918 20.4799 12.9708 6.79736 6.92-2.5048 15.1706-1.18908 23.0534-0.48809 2.69196 6.07799 10.9585 6.74739 7.97264-1.01879-8.29739 10.9972-12.6718 8.16075-21.2431-0.33921-2.15579 6.8653 1.89641 9.32449-1.55701 3.98471-3.20525 11.4064-5.60848 14.4622-5.03277-4.34772-9.89063-15.7353-8.18594-24.0916-5.67769-6.28-3.30855-5.91324-15.0843-11.189-20.8923-7.5492-13.6596-19.5972-24.4957-33.6631-31.1097-6.47738-4.83967-6.70635-14.7839 1.17306-18.1601 2.90008-2.30612 0.69012-3.30845-2.5616-3.49953z"fill=#76b3e1 fill-rule=evenodd stroke-width=0.265>`),zm=e=>(()=>{var n=Rm();return b(n,t(e,{viewBox:`0 0 240 180`,xmlns:`http://www.w3.org/2000/svg`}),!0,!0),n})(),Bm=y(`<li><a>`),Vm=y(`<nav class="bg-brand-950 flex flex-col h-screen w-fit select-none overflow-y-hidden"><div class="p-4 border-brand-900 border-b-2 flex gap-3 whitespace-nowrap items-center"><span class="text-lg text-brand-50 tracking-tight font-semibold">SolidECharts Examples</span></div><ul class="flex flex-1 flex-col gap-0.5 min-h-0 overflow-y-auto">`),Hm=e=>(()=>{var t=Bm(),n=t.firstChild;return T(n,()=>e.label),r(t=>{var r=e.href,i=e.active?`page`:void 0,a=Dt(`text-sm px-3 py-2.5 flex gap-3 w-full transition-all duration-150 items-center relative focus-ring`,e.active?`text-brand-50 font-medium bg-brand-600/20 after:bg-brand-600 after:h-[70%] after:w-1.5 after:content-[''] after:right-0 after:top-[15%] after:absolute before:bg-brand-600 before:h-full before:w-1 before:content-[''] before:left-0 before:top-0 before:absolute`:`text-brand-300 font-[450] hover:text-brand-100 hover:bg-brand-800`);return r!==t.e&&re(n,`href`,t.e=r),i!==t.t&&re(n,`aria-current`,t.t=i),a!==t.a&&C(n,t.a=a),t},{e:void 0,t:void 0,a:void 0}),t})(),Um=e=>(()=>{var t=Vm(),r=t.firstChild,i=r.firstChild,a=r.nextSibling;return T(r,n(zm,{class:`size-8`}),i),T(a,n(h,{get each(){return e.entries},children:(t,r)=>n(Hm,{get label(){return t.title},get href(){return Fm(Pm(t))},get active(){return r()===e.active}})}),null),T(a,n(Hm,{label:`About Examples`,get href(){return Fm(Nm)},get active(){return e.active===-1}}),null),t})(),Wm=y(`<p class="leading-[1.7] mt-2 p-4 panel">`),Gm=e=>(()=>{var t=Wm();return T(t,()=>en(e.content)),t})(),Km=y(`<h2 class="text-2xl pl-2"><a class="hover:text-brand-600 focus-ring">`),qm=e=>(()=>{var t=Km(),n=t.firstChild;return T(n,()=>e.title),r(()=>re(n,`href`,e.href)),t})(),Jm=y(`<section class="p-4 flex flex-col gap-0.5">`),Ym=e=>n(H,{get children(){return n(h,{get each(){return e.entries},children:e=>(()=>{var t=Jm();return T(t,n(qm,{get title(){return e.title},get href(){return Fm(Pm(e))}}),null),T(t,n(Gm,{get content(){return e.content}}),null),t})()})}}),Xm=y(`<main>`);ft([Ie,ze,_e,xe,De,Ae,Pe,ke,ve]),ge(M.name,M.theme),ge(yt.name,yt.theme);var Zm=()=>{let e=Lm(),t=i(()=>{let t=e();return t===`about`?-1:Math.max(0,Mm.findIndex(e=>Pm(e)===t))});return[n(Um,{entries:Mm,get active(){return t()}}),(()=>{var e=Xm();return T(e,n(E,{get when(){return t()>=0},get fallback(){return n(Ym,{entries:Mm})},get children(){return n(ae,{get component(){return Mm[t()].cpt}})}})),e})()]},Qm=document.querySelector(`#root`);v(()=>n(Zm,{}),Qm);