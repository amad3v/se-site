import{t as e}from"./rolldown-runtime-BpQH8Ho1.js";import{A as t,C as n,D as r,E as i,F as a,I as o,M as s,N as c,O as l,P as u,S as d,T as f,_ as p,a as m,b as h,c as g,d as _,f as v,g as y,h as b,i as x,j as S,k as ee,l as C,m as te,n as w,o as ne,p as re,r as ie,s as ae,t as oe,u as T,v as se,w as ce,x as E,y as le}from"./ark-ui-DPk4unNr.js";import{A as ue,C as de,D as fe,E as pe,O as me,S as he,T as ge,_ as _e,a as ve,b as ye,c as be,d as xe,f as Se,g as Ce,h as we,i as Te,k as Ee,l as De,m as Oe,n as ke,o as Ae,p as je,r as Me,s as Ne,t as Pe,u as Fe,v as Ie,w as Le,x as Re,y as ze}from"./echarts-BY52kjcK.js";import{i as Be,n as Ve,r as He,t as Ue}from"./shiki-B-7MQRy5.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var We=y(`<div>`),Ge=`default`,Ke=e=>typeof e==`function`,qe=e=>Ke(e)?e:()=>e,Je=e=>Ke(e)?e():e,Ye=ce({theme:()=>Ge,renderer:()=>`canvas`,locale:()=>`EN`,group:()=>void 0,devicePixelRatio:()=>typeof window>`u`?1:window.devicePixelRatio,useDirtyRect:()=>!1,useCoarsePointer:()=>void 0,pointerSize:()=>void 0,ssr:()=>!1,width:()=>void 0,height:()=>void 0,autoResize:()=>!0,resizeDebounce:()=>100,initOnVisible:()=>!1,updateOptions:()=>({})}),Xe=ce({instance:()=>null}),Ze=[`theme`,`renderer`,`locale`,`group`,`devicePixelRatio`,`useDirtyRect`,`useCoarsePointer`,`autoResize`,`resizeDebounce`,`initOnVisible`,`updateOptions`,`pointerSize`,`ssr`,`height`,`width`],D=e=>{let t=o(Ye),r=n=>e[n]===void 0?t[n]():Je(e[n]),i=Ze.reduce((e,t)=>(e[t]=()=>r(t),e),{});return n(Ye.Provider,{value:i,get children(){return e.children}})},Qe=Xe.Provider,$e=()=>{let{instance:e}=o(Xe);return{instance:e,dispatch:(t,n)=>{let r=e();r&&!r.isDisposed()&&r.dispatchAction(t,n)},chart:{getId:()=>e()?.getId(),getWidth:()=>e()?.getWidth(),getHeight:()=>e()?.getHeight(),getDevicePixelRatio:()=>e()?.getDevicePixelRatio(),getDom:()=>e()?.getDom(),getOption:()=>e()?.getOption(),isDisposed:()=>e()?.isDisposed()??!0,isSSR:()=>e()?.isSSR()??!1,getDataURL:t=>e()?.getDataURL(t),getConnectedDataURL:t=>e()?.getConnectedDataURL(t),renderToSVGString:t=>e()?.renderToSVGString(t),renderToCanvas:t=>e()?.renderToCanvas(t),convertToPixel:(t,n)=>e()?.convertToPixel(t,n),convertFromPixel:(t,n)=>e()?.convertFromPixel(t,n),convertToLayout:(t,n,r)=>e()?.convertToLayout(t,n,r),containPixel:(t,n)=>e()?.containPixel(t,n),getVisual:(t,n)=>e()?.getVisual(t,n),appendData:t=>e()?.appendData(t),clear:()=>e()?.clear()}}},et=()=>o(Ye),tt=(e,t,n)=>{typeof window<`u`&&f(S([e,t],([e,t])=>{e&&!e.isDisposed()&&e.dispatchAction(t,n)},{defer:!0}))},nt=new WeakMap,rt=(e,t)=>{nt.set(e,t)},it=e=>nt.get(e)?.(),at=(e,t)=>{let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>{e(...r)},t)}},ot=(e,t={})=>{if(typeof window>`u`)return{instance:()=>null};let n=qe(t.theme),r=qe(t.renderer??`canvas`),i=qe(t.group),o=qe(t.autoResize??!0),{locale:c,devicePixelRatio:u,useDirtyRect:d,useCoarsePointer:p,pointerSize:m,ssr:h,width:g,height:_,resizeDebounce:v=100,onResize:y,initOnVisible:b=!1}=t,[x,ee]=l(null),[C,te]=l(),[w,ne]=l(0),re,[ie,ae]=l(!b||typeof IntersectionObserver>`u`);f(S(e,e=>{if(!e||ie())return;let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(t.disconnect(),ae(!0))});t.observe(e),s(()=>{t.disconnect()})}));let oe=null;f(S([e,r,ie],([e,t,r])=>{if(!e||!r)return;let l={renderer:t,locale:c,devicePixelRatio:u,useDirtyRect:d,useCoarsePointer:p,ssr:h,width:g,height:_,pointerSize:m};re=a(n)??`default`;let f=de(e,re,l);rt(f,w);let v=a(i);v?(f.group=v,Re(v),te(v)):te(void 0),ee(f),a(o)&&T(f,e),s(()=>{oe?.disconnect(),oe=null,f.isDisposed()||(f.group=``,f.dispose()),te(void 0),ee(null)})},{defer:!1})),f(S(n,e=>{if(e===void 0||e===re)return;let t=x();t&&!t.isDisposed()&&(t.setTheme(e),re=e,ne(e=>e+1))})),f(S([x,i],([e,t])=>{if(!e||e.isDisposed())return;let n=t||void 0;n!==C()&&(e.group=n??``,n&&Re(n),te(n))})),f(S([x,o],([t,n])=>{let r=a(e);t&&r&&!t.isDisposed()&&(n&&!oe?T(t,r):!n&&oe&&(oe.disconnect(),oe=null))}));let T=(e,t)=>{let n=t.offsetWidth,r=t.offsetHeight,i=!1,a=()=>{e.isDisposed()||!i&&(i=!0,t.offsetWidth===n&&t.offsetHeight===r)||t.offsetWidth!==0&&t.offsetHeight!==0&&(e.resize(),y?.())},o=v>0?at(a,v):a;oe=new ResizeObserver(o),oe.observe(t)};return{instance:x}},st=e=>{if(typeof e!=`object`||!e||Array.isArray(e))return;let t=e.id;if(typeof t==`string`)return t;if(typeof t==`number`&&Number.isFinite(t))return String(t)},ct=(e,t)=>{if(e.length===0)return[];if(t.length===0)return e.slice();let n=new Set(t);return e.filter(e=>!n.has(e))},lt=(e,t)=>{if(e.length===0)return!1;if(t.length===0)return!0;let n=new Set(t);return e.some(e=>!n.has(e))},O=e=>{let t=Array.isArray(e.options)?e.options.length:0,n=Array.isArray(e.media)?e.media.length:0,r=Object.create(null),i=[],a=[];for(let t of Object.keys(e)){if(t===`options`||t===`media`)continue;let n=e[t];if(Array.isArray(n)){let e=new Set,i=0;for(let t of n){let n=st(t);n===void 0?i++:e.add(n)}r[t]={idsSorted:e.size>0?Array.from(e).toSorted():[],noIdCount:i}}else typeof n==`object`&&n?i.push(t):n!==void 0&&a.push(t)}return i.length>1&&i.sort(),a.length>1&&a.sort(),{optionsLength:t,mediaLength:n,arrays:r,objects:i,scalars:a}},ut=(e,t)=>{let n=O(t),r=(e,n)=>({option:t,signature:e,notMerge:n,replaceMerge:[]});if(!e)return r(n,!1);if(n.optionsLength<e.optionsLength||n.mediaLength<e.mediaLength||ct(e.objects,n.objects).length>0||ct(e.scalars,n.scalars).length>0)return r(n,!0);let i=[];for(let t of Object.keys(e.arrays)){let r=e.arrays[t];if(!r)continue;let a=n.arrays[t];if(!a){(r.idsSorted.length>0||r.noIdCount>0)&&i.push(t);continue}if(lt(r.idsSorted,a.idsSorted)){i.push(t);continue}a.noIdCount<r.noIdCount&&i.push(t)}return{option:t,signature:n,notMerge:!1,replaceMerge:i.length>0?i.toSorted():[]}},dt=(e,t,n={})=>{if(typeof window>`u`)return;let r=qe(n.autoMerge??!1),i=qe(n.notMerge??!1),o=qe(n.replaceMerge??[]),s=qe(n.lazyUpdate??!1),c=qe(n.silent??!1),l=null,u;f(S([e,t,()=>{let t=e();return t?it(t):void 0}],([e,t,n])=>{let d=n!==u;if(u=n,!e||e.isDisposed()||t===void 0){l=null;return}if(a(r)){let n=d&&l!==null?{...ut(null,t),notMerge:!0}:ut(l,t),r={notMerge:n.notMerge,replaceMerge:n.replaceMerge.length>0?n.replaceMerge:void 0,lazyUpdate:a(s),silent:a(c)};e.setOption(n.option,r),l=n.signature}else e.setOption(t,{notMerge:a(i),replaceMerge:a(o),lazyUpdate:a(s),silent:a(c)})},{defer:!1}))},k=e=>t=>({type:e,...t??{}}),A={highlight:k(`highlight`),downplay:k(`downplay`),select:k(`select`),unselect:k(`unselect`),toggleSelect:k(`toggleSelect`),showTip:k(`showTip`),hideTip:k(`hideTip`),legendToggleSelect:k(`legendToggleSelect`),legendSelect:k(`legendSelect`),legendUnSelect:k(`legendUnSelect`),legendAllSelect:k(`legendAllSelect`),legendInverseSelect:k(`legendInverseSelect`),dataZoom:k(`dataZoom`),restore:k(`restore`),brush:k(`brush`),timelineChange:k(`timelineChange`),timelinePlayChange:k(`timelinePlayChange`),geoRoam:k(`geoRoam`),graphRoam:k(`graphRoam`),treeRoam:k(`treeRoam`),sankeyRoam:k(`sankeyRoam`),focusNodeAdjacency:k(`focusNodeAdjacency`),unfocusNodeAdjacency:k(`unfocusNodeAdjacency`)},ft=e=>{ye(e)},pt={},mt={},ht={},j=[`children`],gt=`autoMerge.autoResize.devicePixelRatio.group.initOnVisible.lazyUpdate.loading.loadingOptions.locale.notMerge.onDispose.onEvents.onEventsOnce.onInit.onReInit.onResize.onSurfaceEvents.onSurfaceEventsOnce.option.ref.renderer.replaceMerge.resizeDebounce.silent.theme.updateOptions.useDirtyRect.useCoarsePointer.pointerSize.ssr.width.height`.split(`.`),_t=e=>{let[t,r,o]=u(e,j,gt),c=et(),[d,m]=l(null),h=e=>()=>{let t=r[e];return t===void 0?c[e]():Je(t)},g=i(h(`theme`)),v=i(h(`renderer`)),y=i(h(`group`)),x=i(h(`autoResize`)),ee=h(`locale`),C=h(`devicePixelRatio`),te=h(`useDirtyRect`),w=h(`useCoarsePointer`),ne=h(`ssr`),re=h(`pointerSize`),ie=h(`height`),ae=h(`width`),oe=h(`resizeDebounce`),T=h(`initOnVisible`),{instance:se}=ot(d,{theme:g,renderer:v,group:y,autoResize:x,locale:a(ee),devicePixelRatio:a(C),useDirtyRect:a(te),useCoarsePointer:a(w),pointerSize:a(re),resizeDebounce:a(oe),initOnVisible:a(T),ssr:a(ne),width:a(ae),height:a(ie),onResize:r.onResize});{let e=h(`updateOptions`),t=(t,n)=>()=>Je(r[t])??Je(e()[t])??n;dt(se,()=>r.option?.(),{autoMerge:t(`autoMerge`,!1),notMerge:t(`notMerge`,!1),replaceMerge:t(`replaceMerge`,[]),lazyUpdate:t(`lazyUpdate`,!1),silent:t(`silent`,!1)})}let ce=i(()=>Je(r.loading)??!1),E=i(()=>Je(r.loadingOptions)??pt);f(S([se,ce,E],([e,t,n])=>{e&&!e.isDisposed()&&(t?e.showLoading(`default`,n):e.hideLoading())}));let le=i(()=>Je(r.onEvents)??mt);f(S([se,le],([e,t])=>{if(!e||e.isDisposed())return;let n=Object.entries(t);for(let[t,r]of n){let n=t=>{r(t,e)};e.on(t,n),s(()=>e.off(t,n))}}));let ue=i(()=>Je(r.onEventsOnce)??mt),de=new WeakSet;f(S([se,ue],([e,t])=>{if(!e||e.isDisposed())return;let n=Object.entries(t);for(let[t,r]of n){if(de.has(r))continue;let n=i=>{de.has(r)||(de.add(r),r(i,e),e.off(t,n))};e.on(t,n),s(()=>e.off(t,n))}}));let fe=i(()=>Je(r.onSurfaceEvents)??ht);f(S([se,fe],([e,t])=>{if(!e||e.isDisposed())return;let n=e.getZr(),r=Object.entries(t);for(let[e,t]of r)n.on(e,t),s(()=>{n.off(e,t)})}));let pe=i(()=>Je(r.onSurfaceEventsOnce)??ht);f(S([se,pe],([e,t])=>{if(!e||e.isDisposed())return;let n=e.getZr(),r=Object.entries(t);for(let[t,i]of r){let r=a=>{i(a),e.isDisposed()||n.off(t,r)};n.on(t,r),s(()=>{n.off(t,r)})}}));let me=!1;return f(S([se],([e])=>{e&&(me?r.onReInit?.(e):(me=!0,r.onInit?.(e)),s(()=>r.onDispose?.()))})),f(S([se,()=>r.ref],([e,t])=>{t&&(typeof t==`function`&&t(e),s(()=>t(null)))})),n(Qe,{value:{instance:se},get children(){return[(()=>{var e=We();return p(m,e),b(e,o,!1,!1),e})(),_(()=>t.children)]}})},vt=y(`<footer class="text-xs text-brand-300 px-4 py-2 border-brand-900 border-t-2 bg-brand-950 col-span-2">`),yt=new Date().getFullYear(),bt=()=>(()=>{var e=vt();return T(e,`© ${yt} solid-echarts`),e})(),xt=`100%`,M={name:`solid-echarts`,theme:{color:[`#fb628b`,`#3fbe95`,`#785db0`]}},St={name:`solid-echarts-2`,theme:{color:[`#3277c5`,`#00daaa`,`#f3901c`]}},Ct=`#e5edf9`,wt={textStyle:{color:Ct}},Tt={axisLine:{lineStyle:{color:`#c5d9f2`}},axisLabel:{color:Ct}},Et={legend:wt,xAxis:Tt,yAxis:Tt},Dt={lineStyle:{width:3}},Ot=`import type { Component } from "solid-js";
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
`;function kt(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`){if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=kt(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n)}return r}function At(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=kt(e))&&(r&&(r+=` `),r+=t);return r}var jt=y(`<button type=button>`),N=e=>(()=>{var n=jt();return b(n,t(e,{get class(){return At(`btn`,e.class)}}),!1,!1),n})(),Mt=y(`<div class="mb-4 flex flex-wrap gap-2 items-center">`),Nt=e=>(()=>{var t=Mt();return T(t,()=>e.children),t})(),Pt=y(`<div class="text-xs text-brand-600 my-2 pl-1 flex gap-2 items-center">`),Ft=e=>(()=>{var t=Pt();return T(t,()=>e.children),t})(),It=y(`<div><span class=text-brand-900></span><span class="text-brand-600 text-right">expected: <strong></strong></span><span class="text-brand-900 text-right">got: <strong></strong></span><span class="text-base text-center min-w-5">`),Lt=e=>(()=>{var t=It(),n=t.firstChild,i=n.nextSibling,a=i.firstChild.nextSibling,o=i.nextSibling,s=o.firstChild.nextSibling,c=o.nextSibling;return T(n,()=>e.item.label),T(a,()=>e.item.expected()),T(s,()=>e.item.actual()),T(c,()=>e.item.pass()?`✓`:`×`),r(()=>C(t,At(`px-3 py-[7px] gap-3 grid grid-cols-[1fr_auto_auto_auto] items-center`,e.even?`bg-brand-50`:`bg-brand-100`,e.withBorder&&`border-t border-brand-100`))),t})(),Rt=y(`<div class="text-xs font-mono mb-6 border border-brand-300 rounded-lg overflow-hidden">`),zt=y(`<div class="text-brand-800 tracking-wider font-semibold px-3 py-2 bg-brand-200">`),P=e=>(()=>{var t=Rt();return T(t,n(h,{get each(){return e.sections},children:({title:e,items:t})=>[(()=>{var t=zt();return T(t,e??`LIBRARY BEHAVIOUR CHECKLIST`),t})(),n(h,{each:t,children:(e,t)=>n(Lt,{item:e,get even(){return t()%2==0},get withBorder(){return t()>0}})})]})),t})(),Bt=y(`<div class="p-3 rounded bg-brand-100/70 flex flex-col gap-1 w-full items-center justify-center">`),Vt=y(`<div>`),Ht=y(`<p class="text-xs font-bold whitespace-nowrap">`),Ut=y(`<p class="text-xs text-brand-500">`),Wt=e=>{let i=t({centerItems:!0},e);return(()=>{var e=Vt();return T(e,n(E,{get when(){return i.title||i.note},get children(){var e=Bt();return T(e,n(E,{get when(){return i.title},children:e=>(()=>{var t=Ht();return T(t,e),t})()}),null),T(e,n(E,{get when(){return i.note},children:e=>(()=>{var t=Ut();return T(t,e),t})()}),null),e}}),null),T(e,()=>i.children,null),r(()=>C(e,At(`p-4 border border-brand-300/50 rounded-lg bg-brand-100/30 flex flex-col gap-2 h-full`,i.centerItems&&`items-center`,i.class))),e})()},F=e=>{let[r,i]=u(e,[`containerProps`]),a=t({chart:_t},i);return n(Wt,t(()=>r.containerProps,{get children(){return n(ae,t({get component(){return a.chart}},a))}}))},I=[`SolidEChart`,`Datazoom`,`GroupBadge`,`updateOptions`,`finished`,`autoMerge: false`,`solid-echarts`,`event.target`,`onSurfaceEventsOnce`,`theme`,`selectedMode`,`restore`,`createChart`,`false`,`SolidEChartAPI`,`option`,`dispatch()`,`chart.getDom()`,`appendData`,`setOption`,`setTheme()`,`instance()`,`getHeight()`,`autoResize`,`ResizeObserver`,`chart.off()`,`autoMerge={false},`,`highlight`,`chart.getHeight()`,`notMerge: true`,`getOption()`,`chart.setOption()`,`onInit`,`normalMerge`,`forecast`,`legend`,`defer: true`,`revenue`,`tooltip`,`notMerge: false`,`true`,`disconnect()`,`onDispose`,`optionMergePlan`,`onEventsOnce`,`<canvas>`,`null`,`hasMissingIds`,`createChartEffect`,`onSurfaceEvents`,`chart.getWidth()`,`autoMerge: true`,`data-*`,`SolidEChartProvider`,`group`,`select`,`chart.group`,`undefined`,`datazoom`,`noIdCount`,`createAction`,`chart.getZr().on()`,`replaceMerge: ['series']`,`onResize`,`useChart()`,`EChartsType`,`seActions`,`connect()`,`useChart().chart`,`renderer`,`theme={BRAND_THEME.name},`,`<svg>`,`loading`,`onEvents`,`ChartControls`,`nativeProps`,`dispatch`,`createEffect`,`downplay`,`dataZoom`,`ref`],L=e(((e,t)=>{(function(){var n,r=`Expected a function`,i=`__lodash_hash_undefined__`,a=`__lodash_placeholder__`,o=1,s=2,c=8,l=16,u=32,d=64,f=128,p=256,m=512,h=1/0,g=9007199254740991,_=17976931348623157e292,v=NaN,y=4294967295,b=y-1,x=y>>>1,S=[[`ary`,f],[`bind`,o],[`bindKey`,s],[`curry`,c],[`curryRight`,l],[`flip`,m],[`partial`,u],[`partialRight`,d],[`rearg`,p]],ee=`[object Arguments]`,C=`[object Array]`,te=`[object AsyncFunction]`,w=`[object Boolean]`,ne=`[object Date]`,re=`[object DOMException]`,ie=`[object Error]`,ae=`[object Function]`,oe=`[object GeneratorFunction]`,T=`[object Map]`,se=`[object Number]`,ce=`[object Null]`,E=`[object Object]`,le=`[object Promise]`,ue=`[object Proxy]`,de=`[object RegExp]`,fe=`[object Set]`,pe=`[object String]`,me=`[object Symbol]`,he=`[object Undefined]`,ge=`[object WeakMap]`,_e=`[object WeakSet]`,ve=`[object ArrayBuffer]`,ye=`[object DataView]`,be=`[object Float32Array]`,xe=`[object Float64Array]`,Se=`[object Int8Array]`,Ce=`[object Int16Array]`,we=`[object Int32Array]`,Te=`[object Uint8Array]`,Ee=`[object Uint8ClampedArray]`,De=`[object Uint16Array]`,Oe=`[object Uint32Array]`,ke=/\b__p \+= '';/g,Ae=/\b(__p \+=) '' \+/g,je=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Me=/&(?:amp|lt|gt|quot|#39);/g,Ne=/[&<>"']/g,Pe=RegExp(Me.source),Fe=RegExp(Ne.source),Ie=/<%-([\s\S]+?)%>/g,Le=/<%([\s\S]+?)%>/g,Re=/<%=([\s\S]+?)%>/g,ze=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Be=/^\w*$/,Ve=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,He=/[\\^$.*+?()[\]{}|]/g,Ue=RegExp(He.source),We=/^\s+/,Ge=/\s/,Ke=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,qe=/\{\n\/\* \[wrapped with (.+)\] \*/,Je=/,? & /,Ye=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Xe=/[()=,{}\[\]\/\s]/,Ze=/\\(\\)?/g,D=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Qe=/\w*$/,$e=/^[-+]0x[0-9a-f]+$/i,et=/^0b[01]+$/i,tt=/^\[object .+?Constructor\]$/,nt=/^0o[0-7]+$/i,rt=/^(?:0|[1-9]\d*)$/,it=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,at=/($^)/,ot=/['\n\r\u2028\u2029\\]/g,st=`\\ud800-\\udfff`,ct=`\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff`,lt=`\\u2700-\\u27bf`,O=`a-z\\xdf-\\xf6\\xf8-\\xff`,ut=`\\xac\\xb1\\xd7\\xf7`,dt=`\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf`,k=`\\u2000-\\u206f`,A=` \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000`,ft=`A-Z\\xc0-\\xd6\\xd8-\\xde`,pt=`\\ufe0e\\ufe0f`,mt=ut+dt+k+A,ht=`['’]`,j=`[`+st+`]`,gt=`[`+mt+`]`,_t=`[`+ct+`]`,vt=`\\d+`,yt=`[`+lt+`]`,bt=`[`+O+`]`,xt=`[^`+st+mt+vt+lt+O+ft+`]`,M=`\\ud83c[\\udffb-\\udfff]`,St=`(?:`+_t+`|`+M+`)`,Ct=`[^`+st+`]`,wt=`(?:\\ud83c[\\udde6-\\uddff]){2}`,Tt=`[\\ud800-\\udbff][\\udc00-\\udfff]`,Et=`[`+ft+`]`,Dt=`\\u200d`,Ot=`(?:`+bt+`|`+xt+`)`,kt=`(?:`+Et+`|`+xt+`)`,At=`(?:`+ht+`(?:d|ll|m|re|s|t|ve))?`,jt=`(?:`+ht+`(?:D|LL|M|RE|S|T|VE))?`,N=St+`?`,Mt=`[`+pt+`]?`,Nt=`(?:`+Dt+`(?:`+[Ct,wt,Tt].join(`|`)+`)`+Mt+N+`)*`,Pt=`\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])`,Ft=`\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])`,It=Mt+N+Nt,Lt=`(?:`+[yt,wt,Tt].join(`|`)+`)`+It,Rt=`(?:`+[Ct+_t+`?`,_t,wt,Tt,j].join(`|`)+`)`,zt=RegExp(ht,`g`),P=RegExp(_t,`g`),Bt=RegExp(M+`(?=`+M+`)|`+Rt+It,`g`),Vt=RegExp([Et+`?`+bt+`+`+At+`(?=`+[gt,Et,`$`].join(`|`)+`)`,kt+`+`+jt+`(?=`+[gt,Et+Ot,`$`].join(`|`)+`)`,Et+`?`+Ot+`+`+At,Et+`+`+jt,Ft,Pt,vt,Lt].join(`|`),`g`),Ht=RegExp(`[`+Dt+st+ct+pt+`]`),Ut=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Wt=`Array.Buffer.DataView.Date.Error.Float32Array.Float64Array.Function.Int8Array.Int16Array.Int32Array.Map.Math.Object.Promise.RegExp.Set.String.Symbol.TypeError.Uint8Array.Uint8ClampedArray.Uint16Array.Uint32Array.WeakMap._.clearTimeout.isFinite.parseInt.setTimeout`.split(`.`),F=-1,I={};I[be]=I[xe]=I[Se]=I[Ce]=I[we]=I[Te]=I[Ee]=I[De]=I[Oe]=!0,I[ee]=I[C]=I[ve]=I[w]=I[ye]=I[ne]=I[ie]=I[ae]=I[T]=I[se]=I[E]=I[de]=I[fe]=I[pe]=I[ge]=!1;var L={};L[ee]=L[C]=L[ve]=L[ye]=L[w]=L[ne]=L[be]=L[xe]=L[Se]=L[Ce]=L[we]=L[T]=L[se]=L[E]=L[de]=L[fe]=L[pe]=L[me]=L[Te]=L[Ee]=L[De]=L[Oe]=!0,L[ie]=L[ae]=L[ge]=!1;var Gt={À:`A`,Á:`A`,Â:`A`,Ã:`A`,Ä:`A`,Å:`A`,à:`a`,á:`a`,â:`a`,ã:`a`,ä:`a`,å:`a`,Ç:`C`,ç:`c`,Ð:`D`,ð:`d`,È:`E`,É:`E`,Ê:`E`,Ë:`E`,è:`e`,é:`e`,ê:`e`,ë:`e`,Ì:`I`,Í:`I`,Î:`I`,Ï:`I`,ì:`i`,í:`i`,î:`i`,ï:`i`,Ñ:`N`,ñ:`n`,Ò:`O`,Ó:`O`,Ô:`O`,Õ:`O`,Ö:`O`,Ø:`O`,ò:`o`,ó:`o`,ô:`o`,õ:`o`,ö:`o`,ø:`o`,Ù:`U`,Ú:`U`,Û:`U`,Ü:`U`,ù:`u`,ú:`u`,û:`u`,ü:`u`,Ý:`Y`,ý:`y`,ÿ:`y`,Æ:`Ae`,æ:`ae`,Þ:`Th`,þ:`th`,ß:`ss`,Ā:`A`,Ă:`A`,Ą:`A`,ā:`a`,ă:`a`,ą:`a`,Ć:`C`,Ĉ:`C`,Ċ:`C`,Č:`C`,ć:`c`,ĉ:`c`,ċ:`c`,č:`c`,Ď:`D`,Đ:`D`,ď:`d`,đ:`d`,Ē:`E`,Ĕ:`E`,Ė:`E`,Ę:`E`,Ě:`E`,ē:`e`,ĕ:`e`,ė:`e`,ę:`e`,ě:`e`,Ĝ:`G`,Ğ:`G`,Ġ:`G`,Ģ:`G`,ĝ:`g`,ğ:`g`,ġ:`g`,ģ:`g`,Ĥ:`H`,Ħ:`H`,ĥ:`h`,ħ:`h`,Ĩ:`I`,Ī:`I`,Ĭ:`I`,Į:`I`,İ:`I`,ĩ:`i`,ī:`i`,ĭ:`i`,į:`i`,ı:`i`,Ĵ:`J`,ĵ:`j`,Ķ:`K`,ķ:`k`,ĸ:`k`,Ĺ:`L`,Ļ:`L`,Ľ:`L`,Ŀ:`L`,Ł:`L`,ĺ:`l`,ļ:`l`,ľ:`l`,ŀ:`l`,ł:`l`,Ń:`N`,Ņ:`N`,Ň:`N`,Ŋ:`N`,ń:`n`,ņ:`n`,ň:`n`,ŋ:`n`,Ō:`O`,Ŏ:`O`,Ő:`O`,ō:`o`,ŏ:`o`,ő:`o`,Ŕ:`R`,Ŗ:`R`,Ř:`R`,ŕ:`r`,ŗ:`r`,ř:`r`,Ś:`S`,Ŝ:`S`,Ş:`S`,Š:`S`,ś:`s`,ŝ:`s`,ş:`s`,š:`s`,Ţ:`T`,Ť:`T`,Ŧ:`T`,ţ:`t`,ť:`t`,ŧ:`t`,Ũ:`U`,Ū:`U`,Ŭ:`U`,Ů:`U`,Ű:`U`,Ų:`U`,ũ:`u`,ū:`u`,ŭ:`u`,ů:`u`,ű:`u`,ų:`u`,Ŵ:`W`,ŵ:`w`,Ŷ:`Y`,ŷ:`y`,Ÿ:`Y`,Ź:`Z`,Ż:`Z`,Ž:`Z`,ź:`z`,ż:`z`,ž:`z`,Ĳ:`IJ`,ĳ:`ij`,Œ:`Oe`,œ:`oe`,ŉ:`'n`,ſ:`s`},Kt={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},qt={"&amp;":`&`,"&lt;":`<`,"&gt;":`>`,"&quot;":`"`,"&#39;":`'`},Jt={"\\":`\\`,"'":`'`,"\n":`n`,"\r":`r`,"\u2028":`u2028`,"\u2029":`u2029`},Yt=parseFloat,Xt=parseInt,Zt=typeof global==`object`&&global&&global.Object===Object&&global,R=typeof self==`object`&&self&&self.Object===Object&&self,Qt=Zt||R||Function(`return this`)(),$t=typeof e==`object`&&e&&!e.nodeType&&e,en=$t&&typeof t==`object`&&t&&!t.nodeType&&t,tn=en&&en.exports===$t,nn=tn&&Zt.process,rn=function(){try{return en&&en.require&&en.require(`util`).types||nn&&nn.binding&&nn.binding(`util`)}catch{}}(),an=rn&&rn.isArrayBuffer,on=rn&&rn.isDate,sn=rn&&rn.isMap,cn=rn&&rn.isRegExp,ln=rn&&rn.isSet,z=rn&&rn.isTypedArray;function un(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function dn(e,t,n,r){for(var i=-1,a=e==null?0:e.length;++i<a;){var o=e[i];t(r,o,n(o),e)}return r}function fn(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}function pn(e,t){for(var n=e==null?0:e.length;n--&&t(e[n],n,e)!==!1;);return e}function mn(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(!t(e[n],n,e))return!1;return!0}function hn(e,t){for(var n=-1,r=e==null?0:e.length,i=0,a=[];++n<r;){var o=e[n];t(o,n,e)&&(a[i++]=o)}return a}function gn(e,t){return!!(e!=null&&e.length)&&Dn(e,t,0)>-1}function _n(e,t,n){for(var r=-1,i=e==null?0:e.length;++r<i;)if(n(t,e[r]))return!0;return!1}function B(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}function vn(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}function yn(e,t,n,r){var i=-1,a=e==null?0:e.length;for(r&&a&&(n=e[++i]);++i<a;)n=t(n,e[i],i,e);return n}function bn(e,t,n,r){var i=e==null?0:e.length;for(r&&i&&(n=e[--i]);i--;)n=t(n,e[i],i,e);return n}function xn(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}var Sn=H(`length`);function Cn(e){return e.split(``)}function wn(e){return e.match(Ye)||[]}function Tn(e,t,n){var r;return n(e,function(e,n,i){if(t(e,n,i))return r=n,!1}),r}function En(e,t,n,r){for(var i=e.length,a=n+(r?1:-1);r?a--:++a<i;)if(t(e[a],a,e))return a;return-1}function Dn(e,t,n){return t===t?$n(e,t,n):En(e,kn,n)}function On(e,t,n,r){for(var i=n-1,a=e.length;++i<a;)if(r(e[i],t))return i;return-1}function kn(e){return e!==e}function V(e,t){var n=e==null?0:e.length;return n?U(e,t)/n:v}function H(e){return function(t){return t==null?n:t[e]}}function An(e){return function(t){return e==null?n:e[t]}}function jn(e,t,n,r,i){return i(e,function(e,i,a){n=r?(r=!1,e):t(n,e,i,a)}),n}function Mn(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}function U(e,t){for(var r,i=-1,a=e.length;++i<a;){var o=t(e[i]);o!==n&&(r=r===n?o:r+o)}return r}function Nn(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}function W(e,t){return B(t,function(t){return[t,e[t]]})}function Pn(e){return e&&e.slice(0,rr(e)+1).replace(We,``)}function Fn(e){return function(t){return e(t)}}function In(e,t){return B(t,function(t){return e[t]})}function Ln(e,t){return e.has(t)}function Rn(e,t){for(var n=-1,r=e.length;++n<r&&Dn(t,e[n],0)>-1;);return n}function zn(e,t){for(var n=e.length;n--&&Dn(t,e[n],0)>-1;);return n}function Bn(e,t){for(var n=e.length,r=0;n--;)e[n]===t&&++r;return r}var Vn=An(Gt),Hn=An(Kt);function Un(e){return`\\`+Jt[e]}function Wn(e,t){return e==null?n:e[t]}function Gn(e){return Ht.test(e)}function Kn(e){return Ut.test(e)}function qn(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}function Jn(e){var t=-1,n=Array(e.size);return e.forEach(function(e,r){n[++t]=[r,e]}),n}function Yn(e,t){return function(n){return e(t(n))}}function Xn(e,t){for(var n=-1,r=e.length,i=0,o=[];++n<r;){var s=e[n];(s===t||s===a)&&(e[n]=a,o[i++]=n)}return o}function Zn(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n}function Qn(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=[e,e]}),n}function $n(e,t,n){for(var r=n-1,i=e.length;++r<i;)if(e[r]===t)return r;return-1}function er(e,t,n){for(var r=n+1;r--;)if(e[r]===t)return r;return r}function tr(e){return Gn(e)?ar(e):Sn(e)}function nr(e){return Gn(e)?or(e):Cn(e)}function rr(e){for(var t=e.length;t--&&Ge.test(e.charAt(t)););return t}var ir=An(qt);function ar(e){for(var t=Bt.lastIndex=0;Bt.test(e);)++t;return t}function or(e){return e.match(Bt)||[]}function sr(e){return e.match(Vt)||[]}var cr=(function e(t){t=t==null?Qt:cr.defaults(Qt.Object(),t,cr.pick(Qt,Wt));var Ge=t.Array,Ye=t.Date,st=t.Error,ct=t.Function,lt=t.Math,O=t.Object,ut=t.RegExp,dt=t.String,k=t.TypeError,A=Ge.prototype,ft=ct.prototype,pt=O.prototype,mt=t[`__core-js_shared__`],ht=ft.toString,j=pt.hasOwnProperty,gt=0,_t=function(){var e=/[^.]+$/.exec(mt&&mt.keys&&mt.keys.IE_PROTO||``);return e?`Symbol(src)_1.`+e:``}(),vt=pt.toString,yt=ht.call(O),bt=Qt._,xt=ut(`^`+ht.call(j).replace(He,`\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,`$1.*?`)+`$`),M=tn?t.Buffer:n,St=t.Symbol,Ct=t.Uint8Array,wt=M?M.allocUnsafe:n,Tt=Yn(O.getPrototypeOf,O),Et=O.create,Dt=pt.propertyIsEnumerable,Ot=A.splice,kt=St?St.isConcatSpreadable:n,At=St?St.iterator:n,jt=St?St.toStringTag:n,N=function(){try{var e=No(O,`defineProperty`);return e({},``,{}),e}catch{}}(),Mt=t.clearTimeout!==Qt.clearTimeout&&t.clearTimeout,Nt=Ye&&Ye.now!==Qt.Date.now&&Ye.now,Pt=t.setTimeout!==Qt.setTimeout&&t.setTimeout,Ft=lt.ceil,It=lt.floor,Lt=O.getOwnPropertySymbols,Rt=M?M.isBuffer:n,Bt=t.isFinite,Vt=A.join,Ht=Yn(O.keys,O),Ut=lt.max,Gt=lt.min,Kt=Ye.now,qt=t.parseInt,Jt=lt.random,Zt=A.reverse,R=No(t,`DataView`),$t=No(t,`Map`),en=No(t,`Promise`),nn=No(t,`Set`),rn=No(t,`WeakMap`),Sn=No(O,`create`),Cn=rn&&new rn,An={},$n=_s(R),ar=_s($t),or=_s(en),lr=_s(nn),ur=_s(rn),dr=St?St.prototype:n,G=dr?dr.valueOf:n,fr=dr?dr.toString:n;function K(e){if(lu(e)&&!Z(e)&&!(e instanceof q)){if(e instanceof hr)return e;if(j.call(e,`__wrapped__`))return ys(e)}return new hr(e)}var pr=function(){function e(){}return function(t){if(!cu(t))return{};if(Et)return Et(t);e.prototype=t;var r=new e;return e.prototype=n,r}}();function mr(){}function hr(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=n}K.templateSettings={escape:Ie,evaluate:Le,interpolate:Re,variable:``,imports:{_:K}},K.prototype=mr.prototype,K.prototype.constructor=K,hr.prototype=pr(mr.prototype),hr.prototype.constructor=hr;function q(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=y,this.__views__=[]}function gr(){var e=new q(this.__wrapped__);return e.__actions__=Wa(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Wa(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Wa(this.__views__),e}function _r(){if(this.__filtered__){var e=new q(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function vr(){var e=this.__wrapped__.value(),t=this.__dir__,n=Z(e),r=t<0,i=n?e.length:0,a=Lo(0,i,this.__views__),o=a.start,s=a.end,c=s-o,l=r?s:o-1,u=this.__iteratees__,d=u.length,f=0,p=Gt(c,this.__takeCount__);if(!n||!r&&i==c&&p==c)return Ta(e,this.__actions__);var m=[];outer:for(;c--&&f<p;){l+=t;for(var h=-1,g=e[l];++h<d;){var _=u[h],v=_.iteratee,y=_.type,b=v(g);if(y==2)g=b;else if(!b){if(y==1)continue outer;break outer}}m[f++]=g}return m}q.prototype=pr(mr.prototype),q.prototype.constructor=q;function yr(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function br(){this.__data__=Sn?Sn(null):{},this.size=0}function xr(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=+!!t,t}function Sr(e){var t=this.__data__;if(Sn){var r=t[e];return r===i?n:r}return j.call(t,e)?t[e]:n}function Cr(e){var t=this.__data__;return Sn?t[e]!==n:j.call(t,e)}function wr(e,t){var r=this.__data__;return this.size+=+!this.has(e),r[e]=Sn&&t===n?i:t,this}yr.prototype.clear=br,yr.prototype.delete=xr,yr.prototype.get=Sr,yr.prototype.has=Cr,yr.prototype.set=wr;function Tr(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Er(){this.__data__=[],this.size=0}function Dr(e){var t=this.__data__,n=Qr(t,e);return n<0?!1:(n==t.length-1?t.pop():Ot.call(t,n,1),--this.size,!0)}function Or(e){var t=this.__data__,r=Qr(t,e);return r<0?n:t[r][1]}function kr(e){return Qr(this.__data__,e)>-1}function Ar(e,t){var n=this.__data__,r=Qr(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}Tr.prototype.clear=Er,Tr.prototype.delete=Dr,Tr.prototype.get=Or,Tr.prototype.has=kr,Tr.prototype.set=Ar;function jr(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Mr(){this.size=0,this.__data__={hash:new yr,map:new($t||Tr),string:new yr}}function Nr(e){var t=jo(this,e).delete(e);return this.size-=+!!t,t}function Pr(e){return jo(this,e).get(e)}function Fr(e){return jo(this,e).has(e)}function Ir(e,t){var n=jo(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}jr.prototype.clear=Mr,jr.prototype.delete=Nr,jr.prototype.get=Pr,jr.prototype.has=Fr,jr.prototype.set=Ir;function Lr(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new jr;++t<n;)this.add(e[t])}function Rr(e){return this.__data__.set(e,i),this}function zr(e){return this.__data__.has(e)}Lr.prototype.add=Lr.prototype.push=Rr,Lr.prototype.has=zr;function Br(e){var t=this.__data__=new Tr(e);this.size=t.size}function Vr(){this.__data__=new Tr,this.size=0}function Hr(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function Ur(e){return this.__data__.get(e)}function Wr(e){return this.__data__.has(e)}function Gr(e,t){var n=this.__data__;if(n instanceof Tr){var r=n.__data__;if(!$t||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new jr(r)}return n.set(e,t),this.size=n.size,this}Br.prototype.clear=Vr,Br.prototype.delete=Hr,Br.prototype.get=Ur,Br.prototype.has=Wr,Br.prototype.set=Gr;function Kr(e,t){var n=Z(e),r=!n&&Kl(e),i=!n&&!r&&Zl(e),a=!n&&!r&&!i&&wu(e),o=n||r||i||a,s=o?Nn(e.length,dt):[],c=s.length;for(var l in e)(t||j.call(e,l))&&!(o&&(l==`length`||i&&(l==`offset`||l==`parent`)||a&&(l==`buffer`||l==`byteLength`||l==`byteOffset`)||Go(l,c)))&&s.push(l);return s}function qr(e){var t=e.length;return t?e[aa(0,t-1)]:n}function Jr(e,t){return ms(Wa(e),ii(t,0,e.length))}function Yr(e){return ms(Wa(e))}function Xr(e,t,r){(r!==n&&!Ul(e[t],r)||r===n&&!(t in e))&&ni(e,t,r)}function Zr(e,t,r){var i=e[t];(!(j.call(e,t)&&Ul(i,r))||r===n&&!(t in e))&&ni(e,t,r)}function Qr(e,t){for(var n=e.length;n--;)if(Ul(e[n][0],t))return n;return-1}function $r(e,t,n,r){return ui(e,function(e,i,a){t(r,e,n(e),a)}),r}function ei(e,t){return e&&Ga(t,id(t),e)}function ti(e,t){return e&&Ga(t,ad(t),e)}function ni(e,t,n){t==`__proto__`&&N?N(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function ri(e,t){for(var r=-1,i=t.length,a=Ge(i),o=e==null;++r<i;)a[r]=o?n:Qu(e,t[r]);return a}function ii(e,t,r){return e===e&&(r!==n&&(e=e<=r?e:r),t!==n&&(e=e>=t?e:t)),e}function ai(e,t,r,i,a,o){var s,c=t&1,l=t&2,u=t&4;if(r&&(s=a?r(e,i,a,o):r(e)),s!==n)return s;if(!cu(e))return e;var d=Z(e);if(d){if(s=Bo(e),!c)return Wa(e,s)}else{var f=X(e),p=f==ae||f==oe;if(Zl(e))return Pa(e,c);if(f==E||f==ee||p&&!a){if(s=l||p?{}:Vo(e),!c)return l?qa(e,ti(s,e)):Ka(e,ei(s,e))}else{if(!L[f])return a?e:{};s=Ho(e,f,c)}}o||=new Br;var m=o.get(e);if(m)return m;o.set(e,s),xu(e)?e.forEach(function(n){s.add(ai(n,t,r,n,e,o))}):uu(e)&&e.forEach(function(n,i){s.set(i,ai(n,t,r,i,e,o))});var h=d?n:(u?l?Do:Eo:l?ad:id)(e);return fn(h||e,function(n,i){h&&(i=n,n=e[i]),Zr(s,i,ai(n,t,r,i,e,o))}),s}function oi(e){var t=id(e);return function(n){return si(n,e,t)}}function si(e,t,r){var i=r.length;if(e==null)return!i;for(e=O(e);i--;){var a=r[i],o=t[a],s=e[a];if(s===n&&!(a in e)||!o(s))return!1}return!0}function ci(e,t,i){if(typeof e!=`function`)throw new k(r);return us(function(){e.apply(n,i)},t)}function li(e,t,n,r){var i=-1,a=gn,o=!0,s=e.length,c=[],l=t.length;if(!s)return c;n&&(t=B(t,Fn(n))),r?(a=_n,o=!1):t.length>=200&&(a=Ln,o=!1,t=new Lr(t));outer:for(;++i<s;){var u=e[i],d=n==null?u:n(u);if(u=r||u!==0?u:0,o&&d===d){for(var f=l;f--;)if(t[f]===d)continue outer;c.push(u)}else a(t,d,r)||c.push(u)}return c}var ui=Xa(yi),di=Xa(bi,!0);function fi(e,t){var n=!0;return ui(e,function(e,r,i){return n=!!t(e,r,i),n}),n}function pi(e,t,r){for(var i=-1,a=e.length;++i<a;){var o=e[i],s=t(o);if(s!=null&&(c===n?s===s&&!Cu(s):r(s,c)))var c=s,l=o}return l}function mi(e,t,r,i){var a=e.length;for(r=Q(r),r<0&&(r=-r>a?0:a+r),i=i===n||i>a?a:Q(i),i<0&&(i+=a),i=r>i?0:Mu(i);r<i;)e[r++]=t;return e}function hi(e,t){var n=[];return ui(e,function(e,r,i){t(e,r,i)&&n.push(e)}),n}function gi(e,t,n,r,i){var a=-1,o=e.length;for(n||=Wo,i||=[];++a<o;){var s=e[a];t>0&&n(s)?t>1?gi(s,t-1,n,r,i):vn(i,s):r||(i[i.length]=s)}return i}var _i=Za(),vi=Za(!0);function yi(e,t){return e&&_i(e,t,id)}function bi(e,t){return e&&vi(e,t,id)}function xi(e,t){return hn(t,function(t){return au(e[t])})}function Si(e,t){t=Aa(t,e);for(var r=0,i=t.length;e!=null&&r<i;)e=e[gs(t[r++])];return r&&r==i?e:n}function Ci(e,t,n){var r=t(e);return Z(e)?r:vn(r,n(e))}function wi(e){return e==null?e===n?he:ce:jt&&jt in O(e)?Po(e):is(e)}function Ti(e,t){return e>t}function Ei(e,t){return e!=null&&j.call(e,t)}function Di(e,t){return e!=null&&t in O(e)}function Oi(e,t,n){return e>=Gt(t,n)&&e<Ut(t,n)}function ki(e,t,r){for(var i=r?_n:gn,a=e[0].length,o=e.length,s=o,c=Ge(o),l=1/0,u=[];s--;){var d=e[s];s&&t&&(d=B(d,Fn(t))),l=Gt(d.length,l),c[s]=!r&&(t||a>=120&&d.length>=120)?new Lr(s&&d):n}d=e[0];var f=-1,p=c[0];outer:for(;++f<a&&u.length<l;){var m=d[f],h=t?t(m):m;if(m=r||m!==0?m:0,!(p?Ln(p,h):i(u,h,r))){for(s=o;--s;){var g=c[s];if(!(g?Ln(g,h):i(e[s],h,r)))continue outer}p&&p.push(h),u.push(m)}}return u}function Ai(e,t,n,r){return yi(e,function(e,i,a){t(r,n(e),i,a)}),r}function ji(e,t,r){t=Aa(t,e),e=os(e,t);var i=e==null?e:e[gs(Ws(t))];return i==null?n:un(i,e,r)}function Mi(e){return lu(e)&&wi(e)==ee}function Ni(e){return lu(e)&&wi(e)==ve}function Pi(e){return lu(e)&&wi(e)==ne}function Fi(e,t,n,r,i){return e===t?!0:e==null||t==null||!lu(e)&&!lu(t)?e!==e&&t!==t:Ii(e,t,n,r,Fi,i)}function Ii(e,t,n,r,i,a){var o=Z(e),s=Z(t),c=o?C:X(e),l=s?C:X(t);c=c==ee?E:c,l=l==ee?E:l;var u=c==E,d=l==E,f=c==l;if(f&&Zl(e)){if(!Zl(t))return!1;o=!0,u=!1}if(f&&!u)return a||=new Br,o||wu(e)?So(e,t,n,r,i,a):Co(e,t,c,n,r,i,a);if(!(n&1)){var p=u&&j.call(e,`__wrapped__`),m=d&&j.call(t,`__wrapped__`);if(p||m){var h=p?e.value():e,g=m?t.value():t;return a||=new Br,i(h,g,n,r,a)}}return f?(a||=new Br,wo(e,t,n,r,i,a)):!1}function Li(e){return lu(e)&&X(e)==T}function Ri(e,t,r,i){var a=r.length,o=a,s=!i;if(e==null)return!o;for(e=O(e);a--;){var c=r[a];if(s&&c[2]?c[1]!==e[c[0]]:!(c[0]in e))return!1}for(;++a<o;){c=r[a];var l=c[0],u=e[l],d=c[1];if(s&&c[2]){if(u===n&&!(l in e))return!1}else{var f=new Br;if(i)var p=i(u,d,l,e,t,f);if(!(p===n?Fi(d,u,3,i,f):p))return!1}}return!0}function zi(e){return!cu(e)||Xo(e)?!1:(au(e)?xt:tt).test(_s(e))}function Bi(e){return lu(e)&&wi(e)==de}function Vi(e){return lu(e)&&X(e)==fe}function Hi(e){return lu(e)&&su(e.length)&&!!I[wi(e)]}function Ui(e){return typeof e==`function`?e:e==null?pf:typeof e==`object`?Z(e)?Yi(e[0],e[1]):Ji(e):Ef(e)}function Wi(e){if(!Qo(e))return Ht(e);var t=[];for(var n in O(e))j.call(e,n)&&n!=`constructor`&&t.push(n);return t}function Gi(e){if(!cu(e))return rs(e);var t=Qo(e),n=[];for(var r in e)(r!=`constructor`||!t&&j.call(e,r))&&n.push(r);return n}function Ki(e,t){return e<t}function qi(e,t){var n=-1,r=Jl(e)?Ge(e.length):[];return ui(e,function(e,i,a){r[++n]=t(e,i,a)}),r}function Ji(e){var t=Mo(e);return t.length==1&&t[0][2]?es(t[0][0],t[0][1]):function(n){return n===e||Ri(n,e,t)}}function Yi(e,t){return qo(e)&&$o(t)?es(gs(e),t):function(r){var i=Qu(r,e);return i===n&&i===t?ed(r,e):Fi(t,i,3)}}function Xi(e,t,r,i,a){e!==t&&_i(t,function(o,s){if(a||=new Br,cu(o))Zi(e,t,s,r,Xi,i,a);else{var c=i?i(cs(e,s),o,s+``,e,t,a):n;c===n&&(c=o),Xr(e,s,c)}},ad)}function Zi(e,t,r,i,a,o,s){var c=cs(e,r),l=cs(t,r),u=s.get(l);if(u){Xr(e,r,u);return}var d=o?o(c,l,r+``,e,t,s):n,f=d===n;if(f){var p=Z(l),m=!p&&Zl(l),h=!p&&!m&&wu(l);d=l,p||m||h?Z(c)?d=c:Yl(c)?d=Wa(c):m?(f=!1,d=Pa(l,!0)):h?(f=!1,d=za(l,!0)):d=[]:vu(l)||Kl(l)?(d=c,Kl(c)?d=Pu(c):(!cu(c)||au(c))&&(d=Vo(l))):f=!1}f&&(s.set(l,d),a(d,l,i,o,s),s.delete(l)),Xr(e,r,d)}function Qi(e,t){var r=e.length;if(r)return t+=t<0?r:0,Go(t,r)?e[t]:n}function $i(e,t,n){t=t.length?B(t,function(e){return Z(e)?function(t){return Si(t,e.length===1?e[0]:e)}:e}):[pf];var r=-1;return t=B(t,Fn(Y())),Mn(qi(e,function(e,n,i){return{criteria:B(t,function(t){return t(e)}),index:++r,value:e}}),function(e,t){return Va(e,t,n)})}function ea(e,t){return ta(e,t,function(t,n){return ed(e,n)})}function ta(e,t,n){for(var r=-1,i=t.length,a={};++r<i;){var o=t[r],s=Si(e,o);n(s,o)&&ua(a,Aa(o,e),s)}return a}function na(e){return function(t){return Si(t,e)}}function ra(e,t,n,r){var i=r?On:Dn,a=-1,o=t.length,s=e;for(e===t&&(t=Wa(t)),n&&(s=B(e,Fn(n)));++a<o;)for(var c=0,l=t[a],u=n?n(l):l;(c=i(s,u,c,r))>-1;)s!==e&&Ot.call(s,c,1),Ot.call(e,c,1);return e}function ia(e,t){for(var n=e?t.length:0,r=n-1;n--;){var i=t[n];if(n==r||i!==a){var a=i;Go(i)?Ot.call(e,i,1):Sa(e,i)}}return e}function aa(e,t){return e+It(Jt()*(t-e+1))}function oa(e,t,n,r){for(var i=-1,a=Ut(Ft((t-e)/(n||1)),0),o=Ge(a);a--;)o[r?a:++i]=e,e+=n;return o}function sa(e,t){var n=``;if(!e||t<1||t>g)return n;do t%2&&(n+=e),t=It(t/2),t&&(e+=e);while(t);return n}function J(e,t){return ds(as(e,t,pf),e+``)}function ca(e){return qr(Cd(e))}function la(e,t){var n=Cd(e);return ms(n,ii(t,0,n.length))}function ua(e,t,r,i){if(!cu(e))return e;t=Aa(t,e);for(var a=-1,o=t.length,s=o-1,c=e;c!=null&&++a<o;){var l=gs(t[a]),u=r;if(l===`__proto__`||l===`constructor`||l===`prototype`)return e;if(a!=s){var d=c[l];u=i?i(d,l,c):n,u===n&&(u=cu(d)?d:Go(t[a+1])?[]:{})}Zr(c,l,u),c=c[l]}return e}var da=Cn?function(e,t){return Cn.set(e,t),e}:pf,fa=N?function(e,t){return N(e,`toString`,{configurable:!0,enumerable:!1,value:lf(t),writable:!0})}:pf;function pa(e){return ms(Cd(e))}function ma(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),n=n>i?i:n,n<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var a=Ge(i);++r<i;)a[r]=e[r+t];return a}function ha(e,t){var n;return ui(e,function(e,r,i){return n=t(e,r,i),!n}),!!n}function ga(e,t,n){var r=0,i=e==null?r:e.length;if(typeof t==`number`&&t===t&&i<=x){for(;r<i;){var a=r+i>>>1,o=e[a];o!==null&&!Cu(o)&&(n?o<=t:o<t)?r=a+1:i=a}return i}return _a(e,t,pf,n)}function _a(e,t,r,i){var a=0,o=e==null?0:e.length;if(o===0)return 0;t=r(t);for(var s=t!==t,c=t===null,l=Cu(t),u=t===n;a<o;){var d=It((a+o)/2),f=r(e[d]),p=f!==n,m=f===null,h=f===f,g=Cu(f);if(s)var _=i||h;else _=u?h&&(i||p):c?h&&p&&(i||!m):l?h&&p&&!m&&(i||!g):m||g?!1:i?f<=t:f<t;_?a=d+1:o=d}return Gt(o,b)}function va(e,t){for(var n=-1,r=e.length,i=0,a=[];++n<r;){var o=e[n],s=t?t(o):o;if(!n||!Ul(s,c)){var c=s;a[i++]=o===0?0:o}}return a}function ya(e){return typeof e==`number`?e:Cu(e)?v:+e}function ba(e){if(typeof e==`string`)return e;if(Z(e))return B(e,ba)+``;if(Cu(e))return fr?fr.call(e):``;var t=e+``;return t==`0`&&1/e==-1/0?`-0`:t}function xa(e,t,n){var r=-1,i=gn,a=e.length,o=!0,s=[],c=s;if(n)o=!1,i=_n;else if(a>=200){var l=t?null:go(e);if(l)return Zn(l);o=!1,i=Ln,c=new Lr}else c=t?[]:s;outer:for(;++r<a;){var u=e[r],d=t?t(u):u;if(u=n||u!==0?u:0,o&&d===d){for(var f=c.length;f--;)if(c[f]===d)continue outer;t&&c.push(d),s.push(u)}else i(c,d,n)||(c!==s&&c.push(d),s.push(u))}return s}function Sa(e,t){t=Aa(t,e);var n=-1,r=t.length;if(!r)return!0;for(;++n<r;){var i=gs(t[n]);if(i===`__proto__`&&!j.call(e,`__proto__`)||(i===`constructor`||i===`prototype`)&&n<r-1)return!1}var a=os(e,t);return a==null||delete a[gs(Ws(t))]}function Ca(e,t,n,r){return ua(e,t,n(Si(e,t)),r)}function wa(e,t,n,r){for(var i=e.length,a=r?i:-1;(r?a--:++a<i)&&t(e[a],a,e););return n?ma(e,r?0:a,r?a+1:i):ma(e,r?a+1:0,r?i:a)}function Ta(e,t){var n=e;return n instanceof q&&(n=n.value()),yn(t,function(e,t){return t.func.apply(t.thisArg,vn([e],t.args))},n)}function Ea(e,t,n){var r=e.length;if(r<2)return r?xa(e[0]):[];for(var i=-1,a=Ge(r);++i<r;)for(var o=e[i],s=-1;++s<r;)s!=i&&(a[i]=li(a[i]||o,e[s],t,n));return xa(gi(a,1),t,n)}function Da(e,t,r){for(var i=-1,a=e.length,o=t.length,s={};++i<a;){var c=i<o?t[i]:n;r(s,e[i],c)}return s}function Oa(e){return Yl(e)?e:[]}function ka(e){return typeof e==`function`?e:pf}function Aa(e,t){return Z(e)?e:qo(e,t)?[e]:hs($(e))}var ja=J;function Ma(e,t,r){var i=e.length;return r=r===n?i:r,!t&&r>=i?e:ma(e,t,r)}var Na=Mt||function(e){return Qt.clearTimeout(e)};function Pa(e,t){if(t)return e.slice();var n=e.length,r=wt?wt(n):new e.constructor(n);return e.copy(r),r}function Fa(e){var t=new e.constructor(e.byteLength);return new Ct(t).set(new Ct(e)),t}function Ia(e,t){var n=t?Fa(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}function La(e){var t=new e.constructor(e.source,Qe.exec(e));return t.lastIndex=e.lastIndex,t}function Ra(e){return G?O(G.call(e)):{}}function za(e,t){var n=t?Fa(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function Ba(e,t){if(e!==t){var r=e!==n,i=e===null,a=e===e,o=Cu(e),s=t!==n,c=t===null,l=t===t,u=Cu(t);if(!c&&!u&&!o&&e>t||o&&s&&l&&!c&&!u||i&&s&&l||!r&&l||!a)return 1;if(!i&&!o&&!u&&e<t||u&&r&&a&&!i&&!o||c&&r&&a||!s&&a||!l)return-1}return 0}function Va(e,t,n){for(var r=-1,i=e.criteria,a=t.criteria,o=i.length,s=n.length;++r<o;){var c=Ba(i[r],a[r]);if(c)return r>=s?c:c*(n[r]==`desc`?-1:1)}return e.index-t.index}function Ha(e,t,n,r){for(var i=-1,a=e.length,o=n.length,s=-1,c=t.length,l=Ut(a-o,0),u=Ge(c+l),d=!r;++s<c;)u[s]=t[s];for(;++i<o;)(d||i<a)&&(u[n[i]]=e[i]);for(;l--;)u[s++]=e[i++];return u}function Ua(e,t,n,r){for(var i=-1,a=e.length,o=-1,s=n.length,c=-1,l=t.length,u=Ut(a-s,0),d=Ge(u+l),f=!r;++i<u;)d[i]=e[i];for(var p=i;++c<l;)d[p+c]=t[c];for(;++o<s;)(f||i<a)&&(d[p+n[o]]=e[i++]);return d}function Wa(e,t){var n=-1,r=e.length;for(t||=Ge(r);++n<r;)t[n]=e[n];return t}function Ga(e,t,r,i){var a=!r;r||={};for(var o=-1,s=t.length;++o<s;){var c=t[o],l=i?i(r[c],e[c],c,r,e):n;l===n&&(l=e[c]),a?ni(r,c,l):Zr(r,c,l)}return r}function Ka(e,t){return Ga(e,Fo(e),t)}function qa(e,t){return Ga(e,Io(e),t)}function Ja(e,t){return function(n,r){var i=Z(n)?dn:$r,a=t?t():{};return i(n,e,Y(r,2),a)}}function Ya(e){return J(function(t,r){var i=-1,a=r.length,o=a>1?r[a-1]:n,s=a>2?r[2]:n;for(o=e.length>3&&typeof o==`function`?(a--,o):n,s&&Ko(r[0],r[1],s)&&(o=a<3?n:o,a=1),t=O(t);++i<a;){var c=r[i];c&&e(t,c,i,o)}return t})}function Xa(e,t){return function(n,r){if(n==null)return n;if(!Jl(n))return e(n,r);for(var i=n.length,a=t?i:-1,o=O(n);(t?a--:++a<i)&&r(o[a],a,o)!==!1;);return n}}function Za(e){return function(t,n,r){for(var i=-1,a=O(t),o=r(t),s=o.length;s--;){var c=o[e?s:++i];if(n(a[c],c,a)===!1)break}return t}}function Qa(e,t,n){var r=t&o,i=to(e);function a(){return(this&&this!==Qt&&this instanceof a?i:e).apply(r?n:this,arguments)}return a}function $a(e){return function(t){t=$(t);var r=Gn(t)?nr(t):n,i=r?r[0]:t.charAt(0),a=r?Ma(r,1).join(``):t.slice(1);return i[e]()+a}}function eo(e){return function(t){return yn(rf(Ad(t).replace(zt,``)),e,``)}}function to(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var n=pr(e.prototype),r=e.apply(n,t);return cu(r)?r:n}}function no(e,t,r){var i=to(e);function a(){for(var o=arguments.length,s=Ge(o),c=o,l=Ao(a);c--;)s[c]=arguments[c];var u=o<3&&s[0]!==l&&s[o-1]!==l?[]:Xn(s,l);return o-=u.length,o<r?mo(e,t,ao,a.placeholder,n,s,u,n,n,r-o):un(this&&this!==Qt&&this instanceof a?i:e,this,s)}return a}function ro(e){return function(t,r,i){var a=O(t);if(!Jl(t)){var o=Y(r,3);t=id(t),r=function(e){return o(a[e],e,a)}}var s=e(t,r,i);return s>-1?a[o?t[s]:s]:n}}function io(e){return To(function(t){var i=t.length,a=i,o=hr.prototype.thru;for(e&&t.reverse();a--;){var s=t[a];if(typeof s!=`function`)throw new k(r);if(o&&!l&&ko(s)==`wrapper`)var l=new hr([],!0)}for(a=l?a:i;++a<i;){s=t[a];var d=ko(s),m=d==`wrapper`?Oo(s):n;l=m&&Yo(m[0])&&m[1]==(f|c|u|p)&&!m[4].length&&m[9]==1?l[ko(m[0])].apply(l,m[3]):s.length==1&&Yo(s)?l[d]():l.thru(s)}return function(){var e=arguments,n=e[0];if(l&&e.length==1&&Z(n))return l.plant(n).value();for(var r=0,a=i?t[r].apply(this,e):n;++r<i;)a=t[r].call(this,a);return a}})}function ao(e,t,r,i,a,u,d,p,h,g){var _=t&f,v=t&o,y=t&s,b=t&(c|l),x=t&m,S=y?n:to(e);function ee(){for(var n=arguments.length,o=Ge(n),s=n;s--;)o[s]=arguments[s];if(b)var c=Ao(ee),l=Bn(o,c);if(i&&(o=Ha(o,i,a,b)),u&&(o=Ua(o,u,d,b)),n-=l,b&&n<g){var f=Xn(o,c);return mo(e,t,ao,ee.placeholder,r,o,f,p,h,g-n)}var m=v?r:this,C=y?m[e]:e;return n=o.length,p?o=ss(o,p):x&&n>1&&o.reverse(),_&&h<n&&(o.length=h),this&&this!==Qt&&this instanceof ee&&(C=S||to(C)),C.apply(m,o)}return ee}function oo(e,t){return function(n,r){return Ai(n,e,t(r),{})}}function so(e,t){return function(r,i){var a;if(r===n&&i===n)return t;if(r!==n&&(a=r),i!==n){if(a===n)return i;typeof r==`string`||typeof i==`string`?(r=ba(r),i=ba(i)):(r=ya(r),i=ya(i)),a=e(r,i)}return a}}function co(e){return To(function(t){return t=B(t,Fn(Y())),J(function(n){var r=this;return e(t,function(e){return un(e,r,n)})})})}function lo(e,t){t=t===n?` `:ba(t);var r=t.length;if(r<2)return r?sa(t,e):t;var i=sa(t,Ft(e/tr(t)));return Gn(t)?Ma(nr(i),0,e).join(``):i.slice(0,e)}function uo(e,t,n,r){var i=t&o,a=to(e);function s(){for(var t=-1,o=arguments.length,c=-1,l=r.length,u=Ge(l+o),d=this&&this!==Qt&&this instanceof s?a:e;++c<l;)u[c]=r[c];for(;o--;)u[c++]=arguments[++t];return un(d,i?n:this,u)}return s}function fo(e){return function(t,r,i){return i&&typeof i!=`number`&&Ko(t,r,i)&&(r=i=n),t=ju(t),r===n?(r=t,t=0):r=ju(r),i=i===n?t<r?1:-1:ju(i),oa(t,r,i,e)}}function po(e){return function(t,n){return(typeof t!=`string`||typeof n!=`string`)&&(t=Nu(t),n=Nu(n)),e(t,n)}}function mo(e,t,r,i,a,l,f,p,m,h){var g=t&c,_=g?f:n,v=g?n:f,y=g?l:n,b=g?n:l;t|=g?u:d,t&=~(g?d:u),t&4||(t&=~(o|s));var x=[e,t,a,y,_,b,v,p,m,h],S=r.apply(n,x);return Yo(e)&&ls(S,x),S.placeholder=i,fs(S,e,t)}function ho(e){var t=lt[e];return function(e,n){if(e=Nu(e),n=n==null?0:Gt(Q(n),292),n&&Bt(e)){var r=($(e)+`e`).split(`e`);return r=($(t(r[0]+`e`+(+r[1]+n)))+`e`).split(`e`),+(r[0]+`e`+(+r[1]-n))}return t(e)}}var go=nn&&1/Zn(new nn([,-0]))[1]==h?function(e){return new nn(e)}:xf;function _o(e){return function(t){var n=X(t);return n==T?Jn(t):n==fe?Qn(t):W(t,e(t))}}function vo(e,t,i,a,f,p,m,h){var g=t&s;if(!g&&typeof e!=`function`)throw new k(r);var _=a?a.length:0;if(_||(t&=~(u|d),a=f=n),m=m===n?m:Ut(Q(m),0),h=h===n?h:Q(h),_-=f?f.length:0,t&d){var v=a,y=f;a=f=n}var b=g?n:Oo(e),x=[e,t,i,a,f,v,y,p,m,h];if(b&&ns(x,b),e=x[0],t=x[1],i=x[2],a=x[3],f=x[4],h=x[9]=x[9]===n?g?0:e.length:Ut(x[9]-_,0),!h&&t&(c|l)&&(t&=~(c|l)),!t||t==o)var S=Qa(e,t,i);else S=t==c||t==l?no(e,t,h):(t==u||t==(o|u))&&!f.length?uo(e,t,i,a):ao.apply(n,x);return fs((b?da:ls)(S,x),e,t)}function yo(e,t,r,i){return e===n||Ul(e,pt[r])&&!j.call(i,r)?t:e}function bo(e,t,r,i,a,o){return cu(e)&&cu(t)&&(o.set(t,e),Xi(e,t,n,bo,o),o.delete(t)),e}function xo(e){return vu(e)?n:e}function So(e,t,r,i,a,o){var s=r&1,c=e.length,l=t.length;if(c!=l&&!(s&&l>c))return!1;var u=o.get(e),d=o.get(t);if(u&&d)return u==t&&d==e;var f=-1,p=!0,m=r&2?new Lr:n;for(o.set(e,t),o.set(t,e);++f<c;){var h=e[f],g=t[f];if(i)var _=s?i(g,h,f,t,e,o):i(h,g,f,e,t,o);if(_!==n){if(_)continue;p=!1;break}if(m){if(!xn(t,function(e,t){if(!Ln(m,t)&&(h===e||a(h,e,r,i,o)))return m.push(t)})){p=!1;break}}else if(!(h===g||a(h,g,r,i,o))){p=!1;break}}return o.delete(e),o.delete(t),p}function Co(e,t,n,r,i,a,o){switch(n){case ye:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case ve:return!(e.byteLength!=t.byteLength||!a(new Ct(e),new Ct(t)));case w:case ne:case se:return Ul(+e,+t);case ie:return e.name==t.name&&e.message==t.message;case de:case pe:return e==t+``;case T:var s=Jn;case fe:var c=r&1;if(s||=Zn,e.size!=t.size&&!c)return!1;var l=o.get(e);if(l)return l==t;r|=2,o.set(e,t);var u=So(s(e),s(t),r,i,a,o);return o.delete(e),u;case me:if(G)return G.call(e)==G.call(t)}return!1}function wo(e,t,r,i,a,o){var s=r&1,c=Eo(e),l=c.length;if(l!=Eo(t).length&&!s)return!1;for(var u=l;u--;){var d=c[u];if(!(s?d in t:j.call(t,d)))return!1}var f=o.get(e),p=o.get(t);if(f&&p)return f==t&&p==e;var m=!0;o.set(e,t),o.set(t,e);for(var h=s;++u<l;){d=c[u];var g=e[d],_=t[d];if(i)var v=s?i(_,g,d,t,e,o):i(g,_,d,e,t,o);if(!(v===n?g===_||a(g,_,r,i,o):v)){m=!1;break}h||=d==`constructor`}if(m&&!h){var y=e.constructor,b=t.constructor;y!=b&&`constructor`in e&&`constructor`in t&&!(typeof y==`function`&&y instanceof y&&typeof b==`function`&&b instanceof b)&&(m=!1)}return o.delete(e),o.delete(t),m}function To(e){return ds(as(e,n,Ns),e+``)}function Eo(e){return Ci(e,id,Fo)}function Do(e){return Ci(e,ad,Io)}var Oo=Cn?function(e){return Cn.get(e)}:xf;function ko(e){for(var t=e.name+``,n=An[t],r=j.call(An,t)?n.length:0;r--;){var i=n[r],a=i.func;if(a==null||a==e)return i.name}return t}function Ao(e){return(j.call(K,`placeholder`)?K:e).placeholder}function Y(){var e=K.iteratee||mf;return e=e===mf?Ui:e,arguments.length?e(arguments[0],arguments[1]):e}function jo(e,t){var n=e.__data__;return Jo(t)?n[typeof t==`string`?`string`:`hash`]:n.map}function Mo(e){for(var t=id(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,$o(i)]}return t}function No(e,t){var r=Wn(e,t);return zi(r)?r:n}function Po(e){var t=j.call(e,jt),r=e[jt];try{e[jt]=n;var i=!0}catch{}var a=vt.call(e);return i&&(t?e[jt]=r:delete e[jt]),a}var Fo=Lt?function(e){return e==null?[]:(e=O(e),hn(Lt(e),function(t){return Dt.call(e,t)}))}:Af,Io=Lt?function(e){for(var t=[];e;)vn(t,Fo(e)),e=Tt(e);return t}:Af,X=wi;(R&&X(new R(new ArrayBuffer(1)))!=ye||$t&&X(new $t)!=T||en&&X(en.resolve())!=le||nn&&X(new nn)!=fe||rn&&X(new rn)!=ge)&&(X=function(e){var t=wi(e),r=t==E?e.constructor:n,i=r?_s(r):``;if(i)switch(i){case $n:return ye;case ar:return T;case or:return le;case lr:return fe;case ur:return ge}return t});function Lo(e,t,n){for(var r=-1,i=n.length;++r<i;){var a=n[r],o=a.size;switch(a.type){case`drop`:e+=o;break;case`dropRight`:t-=o;break;case`take`:t=Gt(t,e+o);break;case`takeRight`:e=Ut(e,t-o)}}return{start:e,end:t}}function Ro(e){var t=e.match(qe);return t?t[1].split(Je):[]}function zo(e,t,n){t=Aa(t,e);for(var r=-1,i=t.length,a=!1;++r<i;){var o=gs(t[r]);if(!(a=e!=null&&n(e,o)))break;e=e[o]}return a||++r!=i?a:(i=e==null?0:e.length,!!i&&su(i)&&Go(o,i)&&(Z(e)||Kl(e)))}function Bo(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]==`string`&&j.call(e,`index`)&&(n.index=e.index,n.input=e.input),n}function Vo(e){return typeof e.constructor==`function`&&!Qo(e)?pr(Tt(e)):{}}function Ho(e,t,n){var r=e.constructor;switch(t){case ve:return Fa(e);case w:case ne:return new r(+e);case ye:return Ia(e,n);case be:case xe:case Se:case Ce:case we:case Te:case Ee:case De:case Oe:return za(e,n);case T:return new r;case se:case pe:return new r(e);case de:return La(e);case fe:return new r;case me:return Ra(e)}}function Uo(e,t){var n=t.length;if(!n)return e;var r=n-1;return t[r]=(n>1?`& `:``)+t[r],t=t.join(n>2?`, `:` `),e.replace(Ke,`{
/* [wrapped with `+t+`] */
`)}function Wo(e){return Z(e)||Kl(e)||!!(kt&&e&&e[kt])}function Go(e,t){var n=typeof e;return t??=g,!!t&&(n==`number`||n!=`symbol`&&rt.test(e))&&e>-1&&e%1==0&&e<t}function Ko(e,t,n){if(!cu(n))return!1;var r=typeof t;return(r==`number`?Jl(n)&&Go(t,n.length):r==`string`&&t in n)?Ul(n[t],e):!1}function qo(e,t){if(Z(e))return!1;var n=typeof e;return n==`number`||n==`symbol`||n==`boolean`||e==null||Cu(e)?!0:Be.test(e)||!ze.test(e)||t!=null&&e in O(t)}function Jo(e){var t=typeof e;return t==`string`||t==`number`||t==`symbol`||t==`boolean`?e!==`__proto__`:e===null}function Yo(e){var t=ko(e),n=K[t];if(typeof n!=`function`||!(t in q.prototype))return!1;if(e===n)return!0;var r=Oo(n);return!!r&&e===r[0]}function Xo(e){return!!_t&&_t in e}var Zo=mt?au:jf;function Qo(e){var t=e&&e.constructor;return e===(typeof t==`function`&&t.prototype||pt)}function $o(e){return e===e&&!cu(e)}function es(e,t){return function(r){return r!=null&&r[e]===t&&(t!==n||e in O(r))}}function ts(e){var t=Tl(e,function(e){return n.size===500&&n.clear(),e}),n=t.cache;return t}function ns(e,t){var n=e[1],r=t[1],i=n|r,l=i<(o|s|f),u=r==f&&n==c||r==f&&n==p&&e[7].length<=t[8]||r==(f|p)&&t[7].length<=t[8]&&n==c;if(!(l||u))return e;r&o&&(e[2]=t[2],i|=n&o?0:4);var d=t[3];if(d){var m=e[3];e[3]=m?Ha(m,d,t[4]):d,e[4]=m?Xn(e[3],a):t[4]}return d=t[5],d&&(m=e[5],e[5]=m?Ua(m,d,t[6]):d,e[6]=m?Xn(e[5],a):t[6]),d=t[7],d&&(e[7]=d),r&f&&(e[8]=e[8]==null?t[8]:Gt(e[8],t[8])),e[9]??=t[9],e[0]=t[0],e[1]=i,e}function rs(e){var t=[];if(e!=null)for(var n in O(e))t.push(n);return t}function is(e){return vt.call(e)}function as(e,t,r){return t=Ut(t===n?e.length-1:t,0),function(){for(var n=arguments,i=-1,a=Ut(n.length-t,0),o=Ge(a);++i<a;)o[i]=n[t+i];i=-1;for(var s=Ge(t+1);++i<t;)s[i]=n[i];return s[t]=r(o),un(e,this,s)}}function os(e,t){return t.length<2?e:Si(e,ma(t,0,-1))}function ss(e,t){for(var r=e.length,i=Gt(t.length,r),a=Wa(e);i--;){var o=t[i];e[i]=Go(o,r)?a[o]:n}return e}function cs(e,t){if((t!==`constructor`||typeof e[t]!=`function`)&&t!=`__proto__`)return e[t]}var ls=ps(da),us=Pt||function(e,t){return Qt.setTimeout(e,t)},ds=ps(fa);function fs(e,t,n){var r=t+``;return ds(e,Uo(r,vs(Ro(r),n)))}function ps(e){var t=0,r=0;return function(){var i=Kt(),a=16-(i-r);if(r=i,a>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(n,arguments)}}function ms(e,t){var r=-1,i=e.length,a=i-1;for(t=t===n?i:t;++r<t;){var o=aa(r,a),s=e[o];e[o]=e[r],e[r]=s}return e.length=t,e}var hs=ts(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(``),e.replace(Ve,function(e,n,r,i){t.push(r?i.replace(Ze,`$1`):n||e)}),t});function gs(e){if(typeof e==`string`||Cu(e))return e;var t=e+``;return t==`0`&&1/e==-1/0?`-0`:t}function _s(e){if(e!=null){try{return ht.call(e)}catch{}try{return e+``}catch{}}return``}function vs(e,t){return fn(S,function(n){var r=`_.`+n[0];t&n[1]&&!gn(e,r)&&e.push(r)}),e.sort()}function ys(e){if(e instanceof q)return e.clone();var t=new hr(e.__wrapped__,e.__chain__);return t.__actions__=Wa(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}function bs(e,t,r){t=(r?Ko(e,t,r):t===n)?1:Ut(Q(t),0);var i=e==null?0:e.length;if(!i||t<1)return[];for(var a=0,o=0,s=Ge(Ft(i/t));a<i;)s[o++]=ma(e,a,a+=t);return s}function xs(e){for(var t=-1,n=e==null?0:e.length,r=0,i=[];++t<n;){var a=e[t];a&&(i[r++]=a)}return i}function Ss(){var e=arguments.length;if(!e)return[];for(var t=Ge(e-1),n=arguments[0],r=e;r--;)t[r-1]=arguments[r];return vn(Z(n)?Wa(n):[n],gi(t,1))}var Cs=J(function(e,t){return Yl(e)?li(e,gi(t,1,Yl,!0)):[]}),ws=J(function(e,t){var r=Ws(t);return Yl(r)&&(r=n),Yl(e)?li(e,gi(t,1,Yl,!0),Y(r,2)):[]}),Ts=J(function(e,t){var r=Ws(t);return Yl(r)&&(r=n),Yl(e)?li(e,gi(t,1,Yl,!0),n,r):[]});function Es(e,t,r){var i=e==null?0:e.length;return i?(t=r||t===n?1:Q(t),ma(e,t<0?0:t,i)):[]}function Ds(e,t,r){var i=e==null?0:e.length;return i?(t=r||t===n?1:Q(t),t=i-t,ma(e,0,t<0?0:t)):[]}function Os(e,t){return e&&e.length?wa(e,Y(t,3),!0,!0):[]}function ks(e,t){return e&&e.length?wa(e,Y(t,3),!0):[]}function As(e,t,n,r){var i=e==null?0:e.length;return i?(n&&typeof n!=`number`&&Ko(e,t,n)&&(n=0,r=i),mi(e,t,n,r)):[]}function js(e,t,n){var r=e==null?0:e.length;if(!r)return-1;var i=n==null?0:Q(n);return i<0&&(i=Ut(r+i,0)),En(e,Y(t,3),i)}function Ms(e,t,r){var i=e==null?0:e.length;if(!i)return-1;var a=i-1;return r!==n&&(a=Q(r),a=r<0?Ut(i+a,0):Gt(a,i-1)),En(e,Y(t,3),a,!0)}function Ns(e){return e!=null&&e.length?gi(e,1):[]}function Ps(e){return e!=null&&e.length?gi(e,h):[]}function Fs(e,t){return e!=null&&e.length?(t=t===n?1:Q(t),gi(e,t)):[]}function Is(e){for(var t=-1,n=e==null?0:e.length,r={};++t<n;){var i=e[t];ni(r,i[0],i[1])}return r}function Ls(e){return e&&e.length?e[0]:n}function Rs(e,t,n){var r=e==null?0:e.length;if(!r)return-1;var i=n==null?0:Q(n);return i<0&&(i=Ut(r+i,0)),Dn(e,t,i)}function zs(e){return e!=null&&e.length?ma(e,0,-1):[]}var Bs=J(function(e){var t=B(e,Oa);return t.length&&t[0]===e[0]?ki(t):[]}),Vs=J(function(e){var t=Ws(e),r=B(e,Oa);return t===Ws(r)?t=n:r.pop(),r.length&&r[0]===e[0]?ki(r,Y(t,2)):[]}),Hs=J(function(e){var t=Ws(e),r=B(e,Oa);return t=typeof t==`function`?t:n,t&&r.pop(),r.length&&r[0]===e[0]?ki(r,n,t):[]});function Us(e,t){return e==null?``:Vt.call(e,t)}function Ws(e){var t=e==null?0:e.length;return t?e[t-1]:n}function Gs(e,t,r){var i=e==null?0:e.length;if(!i)return-1;var a=i;return r!==n&&(a=Q(r),a=a<0?Ut(i+a,0):Gt(a,i-1)),t===t?er(e,t,a):En(e,kn,a,!0)}function Ks(e,t){return e&&e.length?Qi(e,Q(t)):n}var qs=J(Js);function Js(e,t){return e&&e.length&&t&&t.length?ra(e,t):e}function Ys(e,t,n){return e&&e.length&&t&&t.length?ra(e,t,Y(n,2)):e}function Xs(e,t,r){return e&&e.length&&t&&t.length?ra(e,t,n,r):e}var Zs=To(function(e,t){var n=e==null?0:e.length,r=ri(e,t);return ia(e,B(t,function(e){return Go(e,n)?+e:e}).sort(Ba)),r});function Qs(e,t){var n=[];if(!(e&&e.length))return n;var r=-1,i=[],a=e.length;for(t=Y(t,3);++r<a;){var o=e[r];t(o,r,e)&&(n.push(o),i.push(r))}return ia(e,i),n}function $s(e){return e==null?e:Zt.call(e)}function ec(e,t,r){var i=e==null?0:e.length;return i?(r&&typeof r!=`number`&&Ko(e,t,r)?(t=0,r=i):(t=t==null?0:Q(t),r=r===n?i:Q(r)),ma(e,t,r)):[]}function tc(e,t){return ga(e,t)}function nc(e,t,n){return _a(e,t,Y(n,2))}function rc(e,t){var n=e==null?0:e.length;if(n){var r=ga(e,t);if(r<n&&Ul(e[r],t))return r}return-1}function ic(e,t){return ga(e,t,!0)}function ac(e,t,n){return _a(e,t,Y(n,2),!0)}function oc(e,t){if(e!=null&&e.length){var n=ga(e,t,!0)-1;if(Ul(e[n],t))return n}return-1}function sc(e){return e&&e.length?va(e):[]}function cc(e,t){return e&&e.length?va(e,Y(t,2)):[]}function lc(e){var t=e==null?0:e.length;return t?ma(e,1,t):[]}function uc(e,t,r){return e&&e.length?(t=r||t===n?1:Q(t),ma(e,0,t<0?0:t)):[]}function dc(e,t,r){var i=e==null?0:e.length;return i?(t=r||t===n?1:Q(t),t=i-t,ma(e,t<0?0:t,i)):[]}function fc(e,t){return e&&e.length?wa(e,Y(t,3),!1,!0):[]}function pc(e,t){return e&&e.length?wa(e,Y(t,3)):[]}var mc=J(function(e){return xa(gi(e,1,Yl,!0))}),hc=J(function(e){var t=Ws(e);return Yl(t)&&(t=n),xa(gi(e,1,Yl,!0),Y(t,2))}),gc=J(function(e){var t=Ws(e);return t=typeof t==`function`?t:n,xa(gi(e,1,Yl,!0),n,t)});function _c(e){return e&&e.length?xa(e):[]}function vc(e,t){return e&&e.length?xa(e,Y(t,2)):[]}function yc(e,t){return t=typeof t==`function`?t:n,e&&e.length?xa(e,n,t):[]}function bc(e){if(!(e&&e.length))return[];var t=0;return e=hn(e,function(e){if(Yl(e))return t=Ut(e.length,t),!0}),Nn(t,function(t){return B(e,H(t))})}function xc(e,t){if(!(e&&e.length))return[];var r=bc(e);return t==null?r:B(r,function(e){return un(t,n,e)})}var Sc=J(function(e,t){return Yl(e)?li(e,t):[]}),Cc=J(function(e){return Ea(hn(e,Yl))}),wc=J(function(e){var t=Ws(e);return Yl(t)&&(t=n),Ea(hn(e,Yl),Y(t,2))}),Tc=J(function(e){var t=Ws(e);return t=typeof t==`function`?t:n,Ea(hn(e,Yl),n,t)}),Ec=J(bc);function Dc(e,t){return Da(e||[],t||[],Zr)}function Oc(e,t){return Da(e||[],t||[],ua)}var kc=J(function(e){var t=e.length,r=t>1?e[t-1]:n;return r=typeof r==`function`?(e.pop(),r):n,xc(e,r)});function Ac(e){var t=K(e);return t.__chain__=!0,t}function jc(e,t){return t(e),e}function Mc(e,t){return t(e)}var Nc=To(function(e){var t=e.length,r=t?e[0]:0,i=this.__wrapped__,a=function(t){return ri(t,e)};return t>1||this.__actions__.length||!(i instanceof q)||!Go(r)?this.thru(a):(i=i.slice(r,+r+ +!!t),i.__actions__.push({func:Mc,args:[a],thisArg:n}),new hr(i,this.__chain__).thru(function(e){return t&&!e.length&&e.push(n),e}))});function Pc(){return Ac(this)}function Fc(){return new hr(this.value(),this.__chain__)}function Ic(){this.__values__===n&&(this.__values__=Au(this.value()));var e=this.__index__>=this.__values__.length;return{done:e,value:e?n:this.__values__[this.__index__++]}}function Lc(){return this}function Rc(e){for(var t,r=this;r instanceof mr;){var i=ys(r);i.__index__=0,i.__values__=n,t?a.__wrapped__=i:t=i;var a=i;r=r.__wrapped__}return a.__wrapped__=e,t}function zc(){var e=this.__wrapped__;if(e instanceof q){var t=e;return this.__actions__.length&&(t=new q(this)),t=t.reverse(),t.__actions__.push({func:Mc,args:[$s],thisArg:n}),new hr(t,this.__chain__)}return this.thru($s)}function Bc(){return Ta(this.__wrapped__,this.__actions__)}var Vc=Ja(function(e,t,n){j.call(e,n)?++e[n]:ni(e,n,1)});function Hc(e,t,r){var i=Z(e)?mn:fi;return r&&Ko(e,t,r)&&(t=n),i(e,Y(t,3))}function Uc(e,t){return(Z(e)?hn:hi)(e,Y(t,3))}var Wc=ro(js),Gc=ro(Ms);function Kc(e,t){return gi(tl(e,t),1)}function qc(e,t){return gi(tl(e,t),h)}function Jc(e,t,r){return r=r===n?1:Q(r),gi(tl(e,t),r)}function Yc(e,t){return(Z(e)?fn:ui)(e,Y(t,3))}function Xc(e,t){return(Z(e)?pn:di)(e,Y(t,3))}var Zc=Ja(function(e,t,n){j.call(e,n)?e[n].push(t):ni(e,n,[t])});function Qc(e,t,n,r){e=Jl(e)?e:Cd(e),n=n&&!r?Q(n):0;var i=e.length;return n<0&&(n=Ut(i+n,0)),Su(e)?n<=i&&e.indexOf(t,n)>-1:!!i&&Dn(e,t,n)>-1}var $c=J(function(e,t,n){var r=-1,i=typeof t==`function`,a=Jl(e)?Ge(e.length):[];return ui(e,function(e){a[++r]=i?un(t,e,n):ji(e,t,n)}),a}),el=Ja(function(e,t,n){ni(e,n,t)});function tl(e,t){return(Z(e)?B:qi)(e,Y(t,3))}function nl(e,t,r,i){return e==null?[]:(Z(t)||(t=t==null?[]:[t]),r=i?n:r,Z(r)||(r=r==null?[]:[r]),$i(e,t,r))}var rl=Ja(function(e,t,n){e[+!n].push(t)},function(){return[[],[]]});function il(e,t,n){var r=Z(e)?yn:jn,i=arguments.length<3;return r(e,Y(t,4),n,i,ui)}function al(e,t,n){var r=Z(e)?bn:jn,i=arguments.length<3;return r(e,Y(t,4),n,i,di)}function ol(e,t){return(Z(e)?hn:hi)(e,El(Y(t,3)))}function sl(e){return(Z(e)?qr:ca)(e)}function cl(e,t,r){return t=(r?Ko(e,t,r):t===n)?1:Q(t),(Z(e)?Jr:la)(e,t)}function ll(e){return(Z(e)?Yr:pa)(e)}function ul(e){if(e==null)return 0;if(Jl(e))return Su(e)?tr(e):e.length;var t=X(e);return t==T||t==fe?e.size:Wi(e).length}function dl(e,t,r){var i=Z(e)?xn:ha;return r&&Ko(e,t,r)&&(t=n),i(e,Y(t,3))}var fl=J(function(e,t){if(e==null)return[];var n=t.length;return n>1&&Ko(e,t[0],t[1])?t=[]:n>2&&Ko(t[0],t[1],t[2])&&(t=[t[0]]),$i(e,gi(t,1),[])}),pl=Nt||function(){return Qt.Date.now()};function ml(e,t){if(typeof t!=`function`)throw new k(r);return e=Q(e),function(){if(--e<1)return t.apply(this,arguments)}}function hl(e,t,r){return t=r?n:t,t=e&&t==null?e.length:t,vo(e,f,n,n,n,n,t)}function gl(e,t){var i;if(typeof t!=`function`)throw new k(r);return e=Q(e),function(){return--e>0&&(i=t.apply(this,arguments)),e<=1&&(t=n),i}}var _l=J(function(e,t,n){var r=o;if(n.length){var i=Xn(n,Ao(_l));r|=u}return vo(e,r,t,n,i)}),vl=J(function(e,t,n){var r=o|s;if(n.length){var i=Xn(n,Ao(vl));r|=u}return vo(t,r,e,n,i)});function yl(e,t,r){t=r?n:t;var i=vo(e,c,n,n,n,n,n,t);return i.placeholder=yl.placeholder,i}function bl(e,t,r){t=r?n:t;var i=vo(e,l,n,n,n,n,n,t);return i.placeholder=bl.placeholder,i}function xl(e,t,i){var a,o,s,c,l,u,d=0,f=!1,p=!1,m=!0;if(typeof e!=`function`)throw new k(r);t=Nu(t)||0,cu(i)&&(f=!!i.leading,p=`maxWait`in i,s=p?Ut(Nu(i.maxWait)||0,t):s,m=`trailing`in i?!!i.trailing:m);function h(t){var r=a,i=o;return a=o=n,d=t,c=e.apply(i,r),c}function g(e){return d=e,l=us(y,t),f?h(e):c}function _(e){var n=e-u,r=e-d,i=t-n;return p?Gt(i,s-r):i}function v(e){var r=e-u,i=e-d;return u===n||r>=t||r<0||p&&i>=s}function y(){var e=pl();if(v(e))return b(e);l=us(y,_(e))}function b(e){return l=n,m&&a?h(e):(a=o=n,c)}function x(){l!==n&&Na(l),d=0,a=u=o=l=n}function S(){return l===n?c:b(pl())}function ee(){var e=pl(),r=v(e);if(a=arguments,o=this,u=e,r){if(l===n)return g(u);if(p)return Na(l),l=us(y,t),h(u)}return l===n&&(l=us(y,t)),c}return ee.cancel=x,ee.flush=S,ee}var Sl=J(function(e,t){return ci(e,1,t)}),Cl=J(function(e,t,n){return ci(e,Nu(t)||0,n)});function wl(e){return vo(e,m)}function Tl(e,t){if(typeof e!=`function`||t!=null&&typeof t!=`function`)throw new k(r);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(Tl.Cache||jr),n}Tl.Cache=jr;function El(e){if(typeof e!=`function`)throw new k(r);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}function Dl(e){return gl(2,e)}var Ol=ja(function(e,t){t=t.length==1&&Z(t[0])?B(t[0],Fn(Y())):B(gi(t,1),Fn(Y()));var n=t.length;return J(function(r){for(var i=-1,a=Gt(r.length,n);++i<a;)r[i]=t[i].call(this,r[i]);return un(e,this,r)})}),kl=J(function(e,t){return vo(e,u,n,t,Xn(t,Ao(kl)))}),Al=J(function(e,t){return vo(e,d,n,t,Xn(t,Ao(Al)))}),jl=To(function(e,t){return vo(e,p,n,n,n,t)});function Ml(e,t){if(typeof e!=`function`)throw new k(r);return t=t===n?t:Q(t),J(e,t)}function Nl(e,t){if(typeof e!=`function`)throw new k(r);return t=t==null?0:Ut(Q(t),0),J(function(n){var r=n[t],i=Ma(n,0,t);return r&&vn(i,r),un(e,this,i)})}function Pl(e,t,n){var i=!0,a=!0;if(typeof e!=`function`)throw new k(r);return cu(n)&&(i=`leading`in n?!!n.leading:i,a=`trailing`in n?!!n.trailing:a),xl(e,t,{leading:i,maxWait:t,trailing:a})}function Fl(e){return hl(e,1)}function Il(e,t){return kl(ka(t),e)}function Ll(){if(!arguments.length)return[];var e=arguments[0];return Z(e)?e:[e]}function Rl(e){return ai(e,4)}function zl(e,t){return t=typeof t==`function`?t:n,ai(e,4,t)}function Bl(e){return ai(e,5)}function Vl(e,t){return t=typeof t==`function`?t:n,ai(e,5,t)}function Hl(e,t){return t==null||si(e,t,id(t))}function Ul(e,t){return e===t||e!==e&&t!==t}var Wl=po(Ti),Gl=po(function(e,t){return e>=t}),Kl=Mi(function(){return arguments}())?Mi:function(e){return lu(e)&&j.call(e,`callee`)&&!Dt.call(e,`callee`)},Z=Ge.isArray,ql=an?Fn(an):Ni;function Jl(e){return e!=null&&su(e.length)&&!au(e)}function Yl(e){return lu(e)&&Jl(e)}function Xl(e){return e===!0||e===!1||lu(e)&&wi(e)==w}var Zl=Rt||jf,Ql=on?Fn(on):Pi;function $l(e){return lu(e)&&e.nodeType===1&&!vu(e)}function eu(e){if(e==null)return!0;if(Jl(e)&&(Z(e)||typeof e==`string`||typeof e.splice==`function`||Zl(e)||wu(e)||Kl(e)))return!e.length;var t=X(e);if(t==T||t==fe)return!e.size;if(Qo(e))return!Wi(e).length;for(var n in e)if(j.call(e,n))return!1;return!0}function tu(e,t){return Fi(e,t)}function nu(e,t,r){r=typeof r==`function`?r:n;var i=r?r(e,t):n;return i===n?Fi(e,t,n,r):!!i}function ru(e){if(!lu(e))return!1;var t=wi(e);return t==ie||t==re||typeof e.message==`string`&&typeof e.name==`string`&&!vu(e)}function iu(e){return typeof e==`number`&&Bt(e)}function au(e){if(!cu(e))return!1;var t=wi(e);return t==ae||t==oe||t==te||t==ue}function ou(e){return typeof e==`number`&&e==Q(e)}function su(e){return typeof e==`number`&&e>-1&&e%1==0&&e<=g}function cu(e){var t=typeof e;return e!=null&&(t==`object`||t==`function`)}function lu(e){return typeof e==`object`&&!!e}var uu=sn?Fn(sn):Li;function du(e,t){return e===t||Ri(e,t,Mo(t))}function fu(e,t,r){return r=typeof r==`function`?r:n,Ri(e,t,Mo(t),r)}function pu(e){return _u(e)&&e!=+e}function mu(e){if(Zo(e))throw new st(`Unsupported core-js use. Try https://npms.io/search?q=ponyfill.`);return zi(e)}function hu(e){return e===null}function gu(e){return e==null}function _u(e){return typeof e==`number`||lu(e)&&wi(e)==se}function vu(e){if(!lu(e)||wi(e)!=E)return!1;var t=Tt(e);if(t===null)return!0;var n=j.call(t,`constructor`)&&t.constructor;return typeof n==`function`&&n instanceof n&&ht.call(n)==yt}var yu=cn?Fn(cn):Bi;function bu(e){return ou(e)&&e>=-g&&e<=g}var xu=ln?Fn(ln):Vi;function Su(e){return typeof e==`string`||!Z(e)&&lu(e)&&wi(e)==pe}function Cu(e){return typeof e==`symbol`||lu(e)&&wi(e)==me}var wu=z?Fn(z):Hi;function Tu(e){return e===n}function Eu(e){return lu(e)&&X(e)==ge}function Du(e){return lu(e)&&wi(e)==_e}var Ou=po(Ki),ku=po(function(e,t){return e<=t});function Au(e){if(!e)return[];if(Jl(e))return Su(e)?nr(e):Wa(e);if(At&&e[At])return qn(e[At]());var t=X(e);return(t==T?Jn:t==fe?Zn:Cd)(e)}function ju(e){return e?(e=Nu(e),e===h||e===-1/0?(e<0?-1:1)*_:e===e?e:0):e===0?e:0}function Q(e){var t=ju(e),n=t%1;return t===t?n?t-n:t:0}function Mu(e){return e?ii(Q(e),0,y):0}function Nu(e){if(typeof e==`number`)return e;if(Cu(e))return v;if(cu(e)){var t=typeof e.valueOf==`function`?e.valueOf():e;e=cu(t)?t+``:t}if(typeof e!=`string`)return e===0?e:+e;e=Pn(e);var n=et.test(e);return n||nt.test(e)?Xt(e.slice(2),n?2:8):$e.test(e)?v:+e}function Pu(e){return Ga(e,ad(e))}function Fu(e){return e?ii(Q(e),-g,g):e===0?e:0}function $(e){return e==null?``:ba(e)}var Iu=Ya(function(e,t){if(Qo(t)||Jl(t)){Ga(t,id(t),e);return}for(var n in t)j.call(t,n)&&Zr(e,n,t[n])}),Lu=Ya(function(e,t){Ga(t,ad(t),e)}),Ru=Ya(function(e,t,n,r){Ga(t,ad(t),e,r)}),zu=Ya(function(e,t,n,r){Ga(t,id(t),e,r)}),Bu=To(ri);function Vu(e,t){var n=pr(e);return t==null?n:ei(n,t)}var Hu=J(function(e,t){e=O(e);var r=-1,i=t.length,a=i>2?t[2]:n;for(a&&Ko(t[0],t[1],a)&&(i=1);++r<i;)for(var o=t[r],s=ad(o),c=-1,l=s.length;++c<l;){var u=s[c],d=e[u];(d===n||Ul(d,pt[u])&&!j.call(e,u))&&(e[u]=o[u])}return e}),Uu=J(function(e){return e.push(n,bo),un(ld,n,e)});function Wu(e,t){return Tn(e,Y(t,3),yi)}function Gu(e,t){return Tn(e,Y(t,3),bi)}function Ku(e,t){return e==null?e:_i(e,Y(t,3),ad)}function qu(e,t){return e==null?e:vi(e,Y(t,3),ad)}function Ju(e,t){return e&&yi(e,Y(t,3))}function Yu(e,t){return e&&bi(e,Y(t,3))}function Xu(e){return e==null?[]:xi(e,id(e))}function Zu(e){return e==null?[]:xi(e,ad(e))}function Qu(e,t,r){var i=e==null?n:Si(e,t);return i===n?r:i}function $u(e,t){return e!=null&&zo(e,t,Ei)}function ed(e,t){return e!=null&&zo(e,t,Di)}var td=oo(function(e,t,n){t!=null&&typeof t.toString!=`function`&&(t=vt.call(t)),e[t]=n},lf(pf)),nd=oo(function(e,t,n){t!=null&&typeof t.toString!=`function`&&(t=vt.call(t)),j.call(e,t)?e[t].push(n):e[t]=[n]},Y),rd=J(ji);function id(e){return Jl(e)?Kr(e):Wi(e)}function ad(e){return Jl(e)?Kr(e,!0):Gi(e)}function od(e,t){var n={};return t=Y(t,3),yi(e,function(e,r,i){ni(n,t(e,r,i),e)}),n}function sd(e,t){var n={};return t=Y(t,3),yi(e,function(e,r,i){ni(n,r,t(e,r,i))}),n}var cd=Ya(function(e,t,n){Xi(e,t,n)}),ld=Ya(function(e,t,n,r){Xi(e,t,n,r)}),ud=To(function(e,t){var n={};if(e==null)return n;var r=!1;t=B(t,function(t){return t=Aa(t,e),r||=t.length>1,t}),Ga(e,Do(e),n),r&&(n=ai(n,7,xo));for(var i=t.length;i--;)Sa(n,t[i]);return n});function dd(e,t){return pd(e,El(Y(t)))}var fd=To(function(e,t){return e==null?{}:ea(e,t)});function pd(e,t){if(e==null)return{};var n=B(Do(e),function(e){return[e]});return t=Y(t),ta(e,n,function(e,n){return t(e,n[0])})}function md(e,t,r){t=Aa(t,e);var i=-1,a=t.length;for(a||(a=1,e=n);++i<a;){var o=e==null?n:e[gs(t[i])];o===n&&(i=a,o=r),e=au(o)?o.call(e):o}return e}function hd(e,t,n){return e==null?e:ua(e,t,n)}function gd(e,t,r,i){return i=typeof i==`function`?i:n,e==null?e:ua(e,t,r,i)}var _d=_o(id),vd=_o(ad);function yd(e,t,n){var r=Z(e),i=r||Zl(e)||wu(e);if(t=Y(t,4),n==null){var a=e&&e.constructor;n=i?r?new a:[]:cu(e)&&au(a)?pr(Tt(e)):{}}return(i?fn:yi)(e,function(e,r,i){return t(n,e,r,i)}),n}function bd(e,t){return e==null||Sa(e,t)}function xd(e,t,n){return e==null?e:Ca(e,t,ka(n))}function Sd(e,t,r,i){return i=typeof i==`function`?i:n,e==null?e:Ca(e,t,ka(r),i)}function Cd(e){return e==null?[]:In(e,id(e))}function wd(e){return e==null?[]:In(e,ad(e))}function Td(e,t,r){return r===n&&(r=t,t=n),r!==n&&(r=Nu(r),r=r===r?r:0),t!==n&&(t=Nu(t),t=t===t?t:0),ii(Nu(e),t,r)}function Ed(e,t,r){return t=ju(t),r===n?(r=t,t=0):r=ju(r),e=Nu(e),Oi(e,t,r)}function Dd(e,t,r){if(r&&typeof r!=`boolean`&&Ko(e,t,r)&&(t=r=n),r===n&&(typeof t==`boolean`?(r=t,t=n):typeof e==`boolean`&&(r=e,e=n)),e===n&&t===n?(e=0,t=1):(e=ju(e),t===n?(t=e,e=0):t=ju(t)),e>t){var i=e;e=t,t=i}if(r||e%1||t%1){var a=Jt();return Gt(e+a*(t-e+Yt(`1e-`+((a+``).length-1))),t)}return aa(e,t)}var Od=eo(function(e,t,n){return t=t.toLowerCase(),e+(n?kd(t):t)});function kd(e){return nf($(e).toLowerCase())}function Ad(e){return e=$(e),e&&e.replace(it,Vn).replace(P,``)}function jd(e,t,r){e=$(e),t=ba(t);var i=e.length;r=r===n?i:ii(Q(r),0,i);var a=r;return r-=t.length,r>=0&&e.slice(r,a)==t}function Md(e){return e=$(e),e&&Fe.test(e)?e.replace(Ne,Hn):e}function Nd(e){return e=$(e),e&&Ue.test(e)?e.replace(He,`\\$&`):e}var Pd=eo(function(e,t,n){return e+(n?`-`:``)+t.toLowerCase()}),Fd=eo(function(e,t,n){return e+(n?` `:``)+t.toLowerCase()}),Id=$a(`toLowerCase`);function Ld(e,t,n){e=$(e),t=Q(t);var r=t?tr(e):0;if(!t||r>=t)return e;var i=(t-r)/2;return lo(It(i),n)+e+lo(Ft(i),n)}function Rd(e,t,n){e=$(e),t=Q(t);var r=t?tr(e):0;return t&&r<t?e+lo(t-r,n):e}function zd(e,t,n){e=$(e),t=Q(t);var r=t?tr(e):0;return t&&r<t?lo(t-r,n)+e:e}function Bd(e,t,n){return n||t==null?t=0:t&&=+t,qt($(e).replace(We,``),t||0)}function Vd(e,t,r){return t=(r?Ko(e,t,r):t===n)?1:Q(t),sa($(e),t)}function Hd(){var e=arguments,t=$(e[0]);return e.length<3?t:t.replace(e[1],e[2])}var Ud=eo(function(e,t,n){return e+(n?`_`:``)+t.toLowerCase()});function Wd(e,t,r){return r&&typeof r!=`number`&&Ko(e,t,r)&&(t=r=n),r=r===n?y:r>>>0,r?(e=$(e),e&&(typeof t==`string`||t!=null&&!yu(t))&&(t=ba(t),!t&&Gn(e))?Ma(nr(e),0,r):e.split(t,r)):[]}var Gd=eo(function(e,t,n){return e+(n?` `:``)+nf(t)});function Kd(e,t,n){return e=$(e),n=n==null?0:ii(Q(n),0,e.length),t=ba(t),e.slice(n,n+t.length)==t}function qd(e,t,r){var i=K.templateSettings;r&&Ko(e,t,r)&&(t=n),e=$(e),t=zu({},t,i,yo);var a=zu({},t.imports,i.imports,yo),o=id(a),s=In(a,o);fn(o,function(e){if(Xe.test(e))throw new st("Invalid `imports` option passed into `_.template`")});var c,l,u=0,d=t.interpolate||at,f=`__p += '`,p=ut((t.escape||at).source+`|`+d.source+`|`+(d===Re?D:at).source+`|`+(t.evaluate||at).source+`|$`,`g`),m=`//# sourceURL=`+(j.call(t,`sourceURL`)?(t.sourceURL+``).replace(/\s/g,` `):`lodash.templateSources[`+ ++F+`]`)+`
`;e.replace(p,function(t,n,r,i,a,o){return r||=i,f+=e.slice(u,o).replace(ot,Un),n&&(c=!0,f+=`' +
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
}`;var g=af(function(){return ct(o,m+`return `+f).apply(n,s)});if(g.source=f,ru(g))throw g;return g}function Jd(e){return $(e).toLowerCase()}function Yd(e){return $(e).toUpperCase()}function Xd(e,t,r){if(e=$(e),e&&(r||t===n))return Pn(e);if(!e||!(t=ba(t)))return e;var i=nr(e),a=nr(t);return Ma(i,Rn(i,a),zn(i,a)+1).join(``)}function Zd(e,t,r){if(e=$(e),e&&(r||t===n))return e.slice(0,rr(e)+1);if(!e||!(t=ba(t)))return e;var i=nr(e);return Ma(i,0,zn(i,nr(t))+1).join(``)}function Qd(e,t,r){if(e=$(e),e&&(r||t===n))return e.replace(We,``);if(!e||!(t=ba(t)))return e;var i=nr(e);return Ma(i,Rn(i,nr(t))).join(``)}function $d(e,t){var r=30,i=`...`;if(cu(t)){var a=`separator`in t?t.separator:a;r=`length`in t?Q(t.length):r,i=`omission`in t?ba(t.omission):i}e=$(e);var o=e.length;if(Gn(e)){var s=nr(e);o=s.length}if(r>=o)return e;var c=r-tr(i);if(c<1)return i;var l=s?Ma(s,0,c).join(``):e.slice(0,c);if(a===n)return l+i;if(s&&(c+=l.length-c),yu(a)){if(e.slice(c).search(a)){var u,d=l;for(a.global||(a=ut(a.source,$(Qe.exec(a))+`g`)),a.lastIndex=0;u=a.exec(d);)var f=u.index;l=l.slice(0,f===n?c:f)}}else if(e.indexOf(ba(a),c)!=c){var p=l.lastIndexOf(a);p>-1&&(l=l.slice(0,p))}return l+i}function ef(e){return e=$(e),e&&Pe.test(e)?e.replace(Me,ir):e}var tf=eo(function(e,t,n){return e+(n?` `:``)+t.toUpperCase()}),nf=$a(`toUpperCase`);function rf(e,t,r){return e=$(e),t=r?n:t,t===n?Kn(e)?sr(e):wn(e):e.match(t)||[]}var af=J(function(e,t){try{return un(e,n,t)}catch(e){return ru(e)?e:new st(e)}}),of=To(function(e,t){return fn(t,function(t){t=gs(t),ni(e,t,_l(e[t],e))}),e});function sf(e){var t=e==null?0:e.length,n=Y();return e=t?B(e,function(e){if(typeof e[1]!=`function`)throw new k(r);return[n(e[0]),e[1]]}):[],J(function(n){for(var r=-1;++r<t;){var i=e[r];if(un(i[0],this,n))return un(i[1],this,n)}})}function cf(e){return oi(ai(e,1))}function lf(e){return function(){return e}}function uf(e,t){return e==null||e!==e?t:e}var df=io(),ff=io(!0);function pf(e){return e}function mf(e){return Ui(typeof e==`function`?e:ai(e,1))}function hf(e){return Ji(ai(e,1))}function gf(e,t){return Yi(e,ai(t,1))}var _f=J(function(e,t){return function(n){return ji(n,e,t)}}),vf=J(function(e,t){return function(n){return ji(e,n,t)}});function yf(e,t,n){var r=id(t),i=xi(t,r);n==null&&(!cu(t)||!i.length&&r.length)&&(n=t,t=e,e=this,i=xi(t,id(t)));var a=!(cu(n)&&`chain`in n)||!!n.chain,o=au(e);return fn(i,function(n){var r=t[n];e[n]=r,o&&(e.prototype[n]=function(){var t=this.__chain__;if(a||t){var n=e(this.__wrapped__);return(n.__actions__=Wa(this.__actions__)).push({func:r,args:arguments,thisArg:e}),n.__chain__=t,n}return r.apply(e,vn([this.value()],arguments))})}),e}function bf(){return Qt._===this&&(Qt._=bt),this}function xf(){}function Sf(e){return e=Q(e),J(function(t){return Qi(t,e)})}var Cf=co(B),wf=co(mn),Tf=co(xn);function Ef(e){return qo(e)?H(gs(e)):na(e)}function Df(e){return function(t){return e==null?n:Si(e,t)}}var Of=fo(),kf=fo(!0);function Af(){return[]}function jf(){return!1}function Mf(){return{}}function Nf(){return``}function Pf(){return!0}function Ff(e,t){if(e=Q(e),e<1||e>g)return[];var n=y,r=Gt(e,y);t=Y(t),e-=y;for(var i=Nn(r,t);++n<e;)t(n);return i}function If(e){return Z(e)?B(e,gs):Cu(e)?[e]:Wa(hs($(e)))}function Lf(e){var t=++gt;return $(e)+t}var Rf=so(function(e,t){return e+t},0),zf=ho(`ceil`),Bf=so(function(e,t){return e/t},1),Vf=ho(`floor`);function Hf(e){return e&&e.length?pi(e,pf,Ti):n}function Uf(e,t){return e&&e.length?pi(e,Y(t,2),Ti):n}function Wf(e){return V(e,pf)}function Gf(e,t){return V(e,Y(t,2))}function Kf(e){return e&&e.length?pi(e,pf,Ki):n}function qf(e,t){return e&&e.length?pi(e,Y(t,2),Ki):n}var Jf=so(function(e,t){return e*t},1),Yf=ho(`round`),Xf=so(function(e,t){return e-t},0);function Zf(e){return e&&e.length?U(e,pf):0}function Qf(e,t){return e&&e.length?U(e,Y(t,2)):0}return K.after=ml,K.ary=hl,K.assign=Iu,K.assignIn=Lu,K.assignInWith=Ru,K.assignWith=zu,K.at=Bu,K.before=gl,K.bind=_l,K.bindAll=of,K.bindKey=vl,K.castArray=Ll,K.chain=Ac,K.chunk=bs,K.compact=xs,K.concat=Ss,K.cond=sf,K.conforms=cf,K.constant=lf,K.countBy=Vc,K.create=Vu,K.curry=yl,K.curryRight=bl,K.debounce=xl,K.defaults=Hu,K.defaultsDeep=Uu,K.defer=Sl,K.delay=Cl,K.difference=Cs,K.differenceBy=ws,K.differenceWith=Ts,K.drop=Es,K.dropRight=Ds,K.dropRightWhile=Os,K.dropWhile=ks,K.fill=As,K.filter=Uc,K.flatMap=Kc,K.flatMapDeep=qc,K.flatMapDepth=Jc,K.flatten=Ns,K.flattenDeep=Ps,K.flattenDepth=Fs,K.flip=wl,K.flow=df,K.flowRight=ff,K.fromPairs=Is,K.functions=Xu,K.functionsIn=Zu,K.groupBy=Zc,K.initial=zs,K.intersection=Bs,K.intersectionBy=Vs,K.intersectionWith=Hs,K.invert=td,K.invertBy=nd,K.invokeMap=$c,K.iteratee=mf,K.keyBy=el,K.keys=id,K.keysIn=ad,K.map=tl,K.mapKeys=od,K.mapValues=sd,K.matches=hf,K.matchesProperty=gf,K.memoize=Tl,K.merge=cd,K.mergeWith=ld,K.method=_f,K.methodOf=vf,K.mixin=yf,K.negate=El,K.nthArg=Sf,K.omit=ud,K.omitBy=dd,K.once=Dl,K.orderBy=nl,K.over=Cf,K.overArgs=Ol,K.overEvery=wf,K.overSome=Tf,K.partial=kl,K.partialRight=Al,K.partition=rl,K.pick=fd,K.pickBy=pd,K.property=Ef,K.propertyOf=Df,K.pull=qs,K.pullAll=Js,K.pullAllBy=Ys,K.pullAllWith=Xs,K.pullAt=Zs,K.range=Of,K.rangeRight=kf,K.rearg=jl,K.reject=ol,K.remove=Qs,K.rest=Ml,K.reverse=$s,K.sampleSize=cl,K.set=hd,K.setWith=gd,K.shuffle=ll,K.slice=ec,K.sortBy=fl,K.sortedUniq=sc,K.sortedUniqBy=cc,K.split=Wd,K.spread=Nl,K.tail=lc,K.take=uc,K.takeRight=dc,K.takeRightWhile=fc,K.takeWhile=pc,K.tap=jc,K.throttle=Pl,K.thru=Mc,K.toArray=Au,K.toPairs=_d,K.toPairsIn=vd,K.toPath=If,K.toPlainObject=Pu,K.transform=yd,K.unary=Fl,K.union=mc,K.unionBy=hc,K.unionWith=gc,K.uniq=_c,K.uniqBy=vc,K.uniqWith=yc,K.unset=bd,K.unzip=bc,K.unzipWith=xc,K.update=xd,K.updateWith=Sd,K.values=Cd,K.valuesIn=wd,K.without=Sc,K.words=rf,K.wrap=Il,K.xor=Cc,K.xorBy=wc,K.xorWith=Tc,K.zip=Ec,K.zipObject=Dc,K.zipObjectDeep=Oc,K.zipWith=kc,K.entries=_d,K.entriesIn=vd,K.extend=Lu,K.extendWith=Ru,yf(K,K),K.add=Rf,K.attempt=af,K.camelCase=Od,K.capitalize=kd,K.ceil=zf,K.clamp=Td,K.clone=Rl,K.cloneDeep=Bl,K.cloneDeepWith=Vl,K.cloneWith=zl,K.conformsTo=Hl,K.deburr=Ad,K.defaultTo=uf,K.divide=Bf,K.endsWith=jd,K.eq=Ul,K.escape=Md,K.escapeRegExp=Nd,K.every=Hc,K.find=Wc,K.findIndex=js,K.findKey=Wu,K.findLast=Gc,K.findLastIndex=Ms,K.findLastKey=Gu,K.floor=Vf,K.forEach=Yc,K.forEachRight=Xc,K.forIn=Ku,K.forInRight=qu,K.forOwn=Ju,K.forOwnRight=Yu,K.get=Qu,K.gt=Wl,K.gte=Gl,K.has=$u,K.hasIn=ed,K.head=Ls,K.identity=pf,K.includes=Qc,K.indexOf=Rs,K.inRange=Ed,K.invoke=rd,K.isArguments=Kl,K.isArray=Z,K.isArrayBuffer=ql,K.isArrayLike=Jl,K.isArrayLikeObject=Yl,K.isBoolean=Xl,K.isBuffer=Zl,K.isDate=Ql,K.isElement=$l,K.isEmpty=eu,K.isEqual=tu,K.isEqualWith=nu,K.isError=ru,K.isFinite=iu,K.isFunction=au,K.isInteger=ou,K.isLength=su,K.isMap=uu,K.isMatch=du,K.isMatchWith=fu,K.isNaN=pu,K.isNative=mu,K.isNil=gu,K.isNull=hu,K.isNumber=_u,K.isObject=cu,K.isObjectLike=lu,K.isPlainObject=vu,K.isRegExp=yu,K.isSafeInteger=bu,K.isSet=xu,K.isString=Su,K.isSymbol=Cu,K.isTypedArray=wu,K.isUndefined=Tu,K.isWeakMap=Eu,K.isWeakSet=Du,K.join=Us,K.kebabCase=Pd,K.last=Ws,K.lastIndexOf=Gs,K.lowerCase=Fd,K.lowerFirst=Id,K.lt=Ou,K.lte=ku,K.max=Hf,K.maxBy=Uf,K.mean=Wf,K.meanBy=Gf,K.min=Kf,K.minBy=qf,K.stubArray=Af,K.stubFalse=jf,K.stubObject=Mf,K.stubString=Nf,K.stubTrue=Pf,K.multiply=Jf,K.nth=Ks,K.noConflict=bf,K.noop=xf,K.now=pl,K.pad=Ld,K.padEnd=Rd,K.padStart=zd,K.parseInt=Bd,K.random=Dd,K.reduce=il,K.reduceRight=al,K.repeat=Vd,K.replace=Hd,K.result=md,K.round=Yf,K.runInContext=e,K.sample=sl,K.size=ul,K.snakeCase=Ud,K.some=dl,K.sortedIndex=tc,K.sortedIndexBy=nc,K.sortedIndexOf=rc,K.sortedLastIndex=ic,K.sortedLastIndexBy=ac,K.sortedLastIndexOf=oc,K.startCase=Gd,K.startsWith=Kd,K.subtract=Xf,K.sum=Zf,K.sumBy=Qf,K.template=qd,K.times=Ff,K.toFinite=ju,K.toInteger=Q,K.toLength=Mu,K.toLower=Jd,K.toNumber=Nu,K.toSafeInteger=Fu,K.toString=$,K.toUpper=Yd,K.trim=Xd,K.trimEnd=Zd,K.trimStart=Qd,K.truncate=$d,K.unescape=ef,K.uniqueId=Lf,K.upperCase=tf,K.upperFirst=nf,K.each=Yc,K.eachRight=Xc,K.first=Ls,yf(K,function(){var e={};return yi(K,function(t,n){j.call(K.prototype,n)||(e[n]=t)}),e}(),{chain:!1}),K.VERSION=`4.18.1`,fn([`bind`,`bindKey`,`curry`,`curryRight`,`partial`,`partialRight`],function(e){K[e].placeholder=K}),fn([`drop`,`take`],function(e,t){q.prototype[e]=function(r){r=r===n?1:Ut(Q(r),0);var i=this.__filtered__&&!t?new q(this):this.clone();return i.__filtered__?i.__takeCount__=Gt(r,i.__takeCount__):i.__views__.push({size:Gt(r,y),type:e+(i.__dir__<0?`Right`:``)}),i},q.prototype[e+`Right`]=function(t){return this.reverse()[e](t).reverse()}}),fn([`filter`,`map`,`takeWhile`],function(e,t){var n=t+1,r=n==1||n==3;q.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:Y(e,3),type:n}),t.__filtered__=t.__filtered__||r,t}}),fn([`head`,`last`],function(e,t){var n=`take`+(t?`Right`:``);q.prototype[e]=function(){return this[n](1).value()[0]}}),fn([`initial`,`tail`],function(e,t){var n=`drop`+(t?``:`Right`);q.prototype[e]=function(){return this.__filtered__?new q(this):this[n](1)}}),q.prototype.compact=function(){return this.filter(pf)},q.prototype.find=function(e){return this.filter(e).head()},q.prototype.findLast=function(e){return this.reverse().find(e)},q.prototype.invokeMap=J(function(e,t){return typeof e==`function`?new q(this):this.map(function(n){return ji(n,e,t)})}),q.prototype.reject=function(e){return this.filter(El(Y(e)))},q.prototype.slice=function(e,t){e=Q(e);var r=this;return r.__filtered__&&(e>0||t<0)?new q(r):(e<0?r=r.takeRight(-e):e&&(r=r.drop(e)),t!==n&&(t=Q(t),r=t<0?r.dropRight(-t):r.take(t-e)),r)},q.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},q.prototype.toArray=function(){return this.take(y)},yi(q.prototype,function(e,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),i=/^(?:head|last)$/.test(t),a=K[i?`take`+(t==`last`?`Right`:``):t],o=i||/^find/.test(t);a&&(K.prototype[t]=function(){var t=this.__wrapped__,s=i?[1]:arguments,c=t instanceof q,l=s[0],u=c||Z(t),d=function(e){var t=a.apply(K,vn([e],s));return i&&f?t[0]:t};u&&r&&typeof l==`function`&&l.length!=1&&(c=u=!1);var f=this.__chain__,p=!!this.__actions__.length,m=o&&!f,h=c&&!p;if(!o&&u){t=h?t:new q(this);var g=e.apply(t,s);return g.__actions__.push({func:Mc,args:[d],thisArg:n}),new hr(g,f)}return m&&h?e.apply(this,s):(g=this.thru(d),m?i?g.value()[0]:g.value():g)})}),fn([`pop`,`push`,`shift`,`sort`,`splice`,`unshift`],function(e){var t=A[e],n=/^(?:push|sort|unshift)$/.test(e)?`tap`:`thru`,r=/^(?:pop|shift)$/.test(e);K.prototype[e]=function(){var e=arguments;if(r&&!this.__chain__){var i=this.value();return t.apply(Z(i)?i:[],e)}return this[n](function(n){return t.apply(Z(n)?n:[],e)})}}),yi(q.prototype,function(e,t){var n=K[t];if(n){var r=n.name+``;j.call(An,r)||(An[r]=[]),An[r].push({name:t,func:n})}}),An[ao(n,s).name]=[{name:`wrapper`,func:n}],q.prototype.clone=gr,q.prototype.reverse=_r,q.prototype.value=vr,K.prototype.at=Nc,K.prototype.chain=Pc,K.prototype.commit=Fc,K.prototype.next=Ic,K.prototype.plant=Rc,K.prototype.reverse=zc,K.prototype.toJSON=K.prototype.valueOf=K.prototype.value=Bc,K.prototype.first=K.prototype.head,At&&(K.prototype[At]=Lc),K})();typeof define==`function`&&typeof define.amd==`object`&&define.amd?(Qt._=cr,define(function(){return cr})):en?((en.exports=cr)._=cr,$t._=cr):Qt._=cr}).call(e)}))(),Gt=y(`<code class=code-tag>`),Kt=e=>new Promise(t=>{setTimeout(()=>{t(e)},1200)}),qt=(e,t)=>{let n=e.getOption().series;Array.isArray(n)&&t(n.filter(Boolean).length)},Jt=e=>{let t=e.getOption().series;return Array.isArray(t)?t.filter(Boolean).length:0},Yt=(e,t)=>Array.from({length:t},(t,n)=>{let r=e+n;return[r,Math.sin(r/20)*100+Math.random()*30]}),Xt=(e,t,n,r)=>i=>{let a=e(),o=a;i.key===`ArrowRight`&&(i.preventDefault(),o=(a+1)%n),i.key===`ArrowLeft`&&(i.preventDefault(),o=(a-1+n)%n),o!==a&&(t(o),r(A.highlight({seriesIndex:0,dataIndex:o})))},Zt=()=>new Date().toLocaleTimeString(`en`,{hour12:!1}),R=e=>e+1,Qt=(e,t,n,r)=>{let i=!t.target;e(e=>[{time:Zt(),event:n,x:Math.round(t.offsetX),y:Math.round(t.offsetY),onBlank:i,once:r},...e].slice(0,15))},$t=e=>e.replaceAll(/[.*+?^${}()|[\]\\]/g,`\\$&`),en=e=>{let t=$t(e);return/[^\w]/.test(e)?t:String.raw`\b${t}\b`},tn=e=>e.replaceAll(/[-\\\]^]/g,`\\$&`),nn=(e,t)=>{let n=$t(e),r=$t(t),i=tn(e),a=tn(t);return String.raw`${n}[^${i}${a}]*?${r}`},rn=[String.raw`chart\.[a-zA-Z_$][\w$]*\(\)`],an=nn(`<`,`>`),on=nn(`{`,`}`),sn=RegExp(`(${[...rn,an,on,...I.toSorted((e,t)=>t.length-e.length).map(e=>en(e))].join(`|`)})`,`g`),cn=RegExp(`^(${sn.source})$`),ln=e=>{let t=e.split(sn);return n(h,{each:t,children:e=>cn.test(e)?(()=>{var t=Gt();return T(t,e),t})():e})},z=e=>(0,L.merge)({},e,Et),un=e=>Array.isArray(e)?e.map(e=>(0,L.merge)({},e,Dt)):(0,L.merge)({},e,Dt),dn=await Be({langs:[Ve],themes:[Ue],engine:He()}),fn=e=>{if(!e||e.isDisposed())return`-`;let t=e.getVisual({seriesIndex:0},`color`);return typeof t==`string`?t.toLowerCase():`-`},pn=(e,t)=>typeof e==`object`&&e?Reflect.get(e,t):void 0,mn=(e,t)=>{let n=pn(e,t);return Array.isArray(n)?n:[]},hn=(e,t)=>{let n=pn(e,t);return typeof n==`number`?n:void 0},gn=(e,t,n=0)=>pn(mn(e.getOption(),`series`)[n],t),_n=e=>typeof e==`number`?String(Number(e.toFixed(2))):typeof e==`boolean`||typeof e==`string`?String(e):null,B=e=>Object.entries(e).flatMap(([e,t])=>{let n=_n(t);return e!==`type`&&n!==null?[`${e}=${n}`]:[]}).join(` `),vn=(e,t)=>e.split(` `).find(e=>e.startsWith(`${t}=`))??`${t} missing`,yn=y(`<div class="rounded-lg overflow-x-auto">`),bn=e=>{let t=()=>dn.codeToHtml(e.code,{lang:`tsx`,theme:`github-dark`});return(()=>{var e=yn();return r(()=>e.innerHTML=t()),e})()},xn=y(`<div>`),Sn=y(`<span class="i-lucide-copy size-4">`),Cn=y(`<span class="i-lucide-check size-4">`),wn=e=>e===`info`||e===`code`,[Tn,En]=l(`info`),Dn=`cursor-pointer text-sm text-brand-300 transition-colors duration-300 hover:text-brand-100 focus-visible:text-brand-100`,On=`${Dn} px-4 py-2 data-[selected]:text-brand-50 data-[selected]:font-medium`,kn=`flex-1 scroll-y`,V=e=>{let[r,i]=u(e,[`class`,`code`,`children`,`ref`]);return n(E,{get when(){return r.code},get fallback(){return(()=>{var e=xn(),n=r.ref;return typeof n==`function`?p(n,e):r.ref=e,b(e,t(i,{get class(){return At(kn,`p-6`,r.class)}}),!1,!0),T(e,()=>r.children),e})()},children:e=>n(m.Root,{get value(){return Tn()},onValueChange:e=>{wn(e.value)&&En(e.value)},class:`border-brand-900 border-t-2 flex flex-1 flex-col min-h-0`,get children(){return[n(m.List,{class:`px-2 bg-brand-950 flex shrink-0 items-center relative`,get children(){return[n(m.Trigger,{value:`info`,class:On,children:`Info`}),n(m.Trigger,{value:`code`,class:On,children:`Code`}),n(m.Indicator,{class:`bg-brand-400 h-0.5 w-[var(--width)] transition-all duration-200 bottom-0`}),n(E,{get when(){return Tn()===`code`},get children(){return n(ne.Root,{get value(){return e()},class:`ml-auto px-2`,get children(){return n(ne.Trigger,{get class(){return At(Dn,`flex gap-1.5 items-center`)},get children(){return[n(ne.Indicator,{get copied(){return Cn()},get children(){return Sn()}}),n(ne.Context,{children:e=>e().copied?`Copied`:`Copy`})]}})}})}})]}}),n(m.Content,t({value:`info`},i,{ref(e){var t=r.ref;typeof t==`function`?t(e):r.ref=e},get class(){return At(kn,`p-6`,r.class)},get children(){return r.children}})),n(m.Content,{value:`code`,get class(){return At(kn,`p-4`)},get children(){return n(bn,{get code(){return e()}})}})]}})})},H=e=>{let[n,r]=u(e,[`class`]);return(()=>{var e=xn();return b(e,t(r,{get class(){return At(`p-4 bg-brand-900 flex-1 scroll-y w-full`,n.class)}}),!1,!1),e})()},An=()=>{let[e,t]=l(!1),[n,r]=l(`-`),[i,a]=l(`-`),[o,s]=l(`-`);return{removeSeries:e,setRemoveSeries:t,countA:n,setCountA:r,countB:i,setCountB:a,countC:o,setCountC:s}},jn=e=>{let{setCountA:t,setCountB:n,setCountC:r}=e;return{finishedA:(e,n)=>{qt(n,t)},finishedB:(e,t)=>{qt(t,n)},finishedC:(e,t)=>{qt(t,r)}}},Mn=e=>{let{removeSeries:t,countA:n,countB:r,countC:i}=e;return[{label:`Initial state - all charts agree on series count`,expected:()=>t()?`varies`:`2 / 2 / 3`,actual:()=>`${n()} / ${r()} / ${i()}`,pass:()=>t()?!0:n()===2&&r()===2&&i()===3},{label:`autoMerge: false - removed series persists (normalMerge keeps ghost)`,expected:()=>t()?`2 (ghost lingers)`:`2`,actual:()=>n()===`-`?`-`:String(n()),pass:()=>n()===2},{label:`autoMerge: true (anonymous) - series count matches option (replaceMerge inferred)`,expected:()=>t()?`1`:`2`,actual:()=>r()===`-`?`-`:String(r()),pass:()=>t()?r()===1:r()===2},{label:`autoMerge: true (with id) - 'exp' removal detected, Expenses gone (replaceMerge inferred)`,expected:()=>t()?`2`:`3`,actual:()=>i()===`-`?`-`:String(i()),pass:()=>t()?i()===2:i()===3}]},U=[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`],Nn=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],W=[820,932,901,934,1290,1330,1320],Pn=[620,732,701,734,1090,1030,980],Fn=[900,850,980,1050,1200,1150,1100],In=[...W,900,870,1100,1200,1400],Ln=[...Pn,700,650,900,1050,1200],Rn=[400,500,550,600,800,750,900,850,780,950,1e3,1100],zn=[`A`,`B`,`C`,`D`,`E`],Bn=[150,230,224,218,135],Vn={CATEGORIES:U,TWO_SERIES:[{name:`Revenue`,type:`bar`,data:W},{name:`Expenses`,type:`bar`,data:Pn}],THREE_SERIES_WITH_IDS:[{id:`rev`,name:`Revenue`,type:`bar`,data:W},{id:`exp`,name:`Expenses`,type:`bar`,data:Pn},{id:`fore`,name:`Forecast`,type:`bar`,data:Fn}],TWO_SERIES_WITH_IDS:[{id:`rev`,name:`Revenue`,type:`bar`,data:W},{id:`fore`,name:`Forecast`,type:`bar`,data:Fn}]},Hn={CATEGORIES:U,THREE_SERIES:[{name:`Alpha`,type:`bar`,data:W},{name:`Beta`,type:`bar`,data:Pn},{name:`Gamma`,type:`bar`,data:Fn}],ONE_SERIES:[{name:`Alpha`,type:`bar`,data:W}]},Un=[{name:`Mon`,value:820},{name:`Tue`,value:932},{name:`Wed`,value:901},{name:`Thu`,value:934},{name:`Fri`,value:1290}],Wn={initialSeries:[{name:`Revenue`,type:`bar`,data:W},{name:`Expenses`,type:`line`,data:Pn}],replacementSeries:[{name:`Forecast`,type:`bar`,data:Fn}]},Gn=Nn,Kn=In,qn=Ln,Jn=In,Yn=In,Xn=Nn,Zn=In,Qn=Ln,$n=`dashboard`,er=[{label:`Q1`,values:[120,200,150,80,70,110,180]},{label:`Q2`,values:[80,160,210,140,90,180,60]},{label:`Q3`,values:[200,90,130,170,220,95,170]}],tr=[`bar`,`line`,`scatter`],nr=Vn.TWO_SERIES,rr=Vn.THREE_SERIES_WITH_IDS,ir=Vn.TWO_SERIES_WITH_IDS,ar=e=>{let{removeSeries:t}=e,n=(e,n)=>z({tooltip:{trigger:`axis`},xAxis:{type:`category`,data:Vn.CATEGORIES},yAxis:{type:`value`},series:t()?e:n});return{optionNoId:()=>n(nr.slice(0,1),nr),optionWithId:()=>n(ir,rr)}},or=y(`<span>Series: Expenses`),sr=y(`<span>(charts react differently)`),cr=()=>{let e=An(),t=jn(e),n=Mn(e),r=ar(e);return{...e,...t,checklist:n,...r}},lr=()=>{let{removeSeries:e,setRemoveSeries:t,finishedA:r,finishedB:i,finishedC:a,optionNoId:o,optionWithId:s,checklist:c}=cr();return n(D,{get theme(){return M.name},get children(){return[n(H,{class:`gap-4 grid grid-cols-3`,get children(){return[n(F,{containerProps:{title:`autoMerge: false (default)`,note:`Ghost series linger after removal`},option:o,class:`chart-sm`,autoMerge:!1,onEvents:{finished:r}}),n(F,{containerProps:{title:`autoMerge: true (anonymous)`,note:`noIdCount diff → replaceMerge: ['series']`},option:o,class:`chart-sm`,autoMerge:!0,onEvents:{finished:i}}),n(F,{containerProps:{title:`autoMerge: true (with id)`,note:`hasMissingIds → replaceMerge: ['series']`},option:s,class:`chart-sm`,autoMerge:!0,onEvents:{finished:a}})]}}),n(V,{code:Ot,get children(){return[n(Ft,{get children(){return[or(),n(E,{get when(){return!e()},get children(){return sr()}})]}}),n(P,{sections:[{items:c}]}),n(Nt,{get children(){return n(N,{onClick:()=>{t(e=>!e)},get children(){return e()?`Restore series`:`Remove a series`}})}})]}})]}})},ur=`import type { Component } from "solid-js";
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
`,dr=y(`<div class="text-xs text-brand-950 leading-[1.8] font-mono mb-4 px-3 py-2 panel">`),G=e=>(()=>{var t=dr();return T(t,()=>e.children),t})(),fr=()=>{let[e,t]=l(!0),[n,r]=l(xt),[i,a]=l(0),[o,s]=l(0),[c,u]=l(0),[d,f]=l(null),[p,m]=l(0),[h,g]=l(0),[_,v]=l(0);return{autoResize:e,setAutoResize:t,containerWidth:n,setContainerWidth:r,initCount:i,setInitCount:a,reInitCount:o,setReInitCount:s,resizeCount:c,setResizeCount:u,chartWidth:d,setChartWidth:f,widthTogglesOn:p,setWidthTogglesOn:m,widthTogglesOff:h,setWidthTogglesOff:g,resizeSnapshot:_,setResizeSnapshot:v}},K=e=>{let t=null,{setContainerWidth:n,setInitCount:r,setReInitCount:i,resizeCount:a,setResizeCount:o,setChartWidth:s,setWidthTogglesOn:c,setWidthTogglesOff:l,autoResize:u,setAutoResize:d,setResizeSnapshot:f}=e;return{toggleAutoResize:()=>{let e=u();e&&f(a()),d(!e)},toggleWidth:()=>{n(e=>e===`100%`?`50%`:xt),u()?c(R):l(R)},handleInit:e=>{t=e,r(R),s(e.getWidth())},handleReInit:()=>{i(R)},handleResize:()=>{t&&!t.isDisposed()&&s(t.getWidth()),o(R)}}},pr=e=>{let{autoResize:t,initCount:n,reInitCount:r,resizeCount:i,chartWidth:a,widthTogglesOn:o,widthTogglesOff:s,resizeSnapshot:c}=e;return[{label:`No reinit - toggling autoResize must never recreate the instance`,expected:()=>`onInit 1, onReInit 0`,actual:()=>`onInit ${n()}, onReInit ${r()}`,pass:()=>n()===1&&r()===0},{label:`autoResize: true - onResize fires after container width changes`,expected:()=>o()>0?`≥ 1 resize`:`toggle width with autoResize on`,actual:()=>`${i()} resize${i()===1?``:`s`}`,pass:()=>o()===0||i()>0},{label:`autoResize: false - onResize does not fire when container changes`,expected:()=>s()>0?`frozen at ${c()}`:`toggle width with autoResize off`,actual:()=>String(i()),pass:()=>!t()&&s()>0?i()===c():!0},{label:`onResize callback - chart canvas width readable after resize`,expected:()=>`updates after each resize`,actual:()=>a()===null?`-`:`${String(a())}px`,pass:()=>a()!==null}]},mr=()=>z({tooltip:{trigger:`axis`},xAxis:{type:`category`,data:U},yAxis:{type:`value`},series:un([{type:`line`,smooth:!0,data:W}])}),hr=y(`<div>autoResize: <strong>`),q=y(`<div>Container width: <strong>`),gr=y(`<div>Width toggles - on: <strong></strong> / off: <strong>`),_r=()=>{let e=fr(),t=K(e),n=pr(e),r=mr;return{...e,...t,checklist:n,option:r}},vr=()=>{let{autoResize:e,checklist:t,containerWidth:r,handleInit:i,handleReInit:a,handleResize:o,option:s,toggleAutoResize:c,toggleWidth:l,widthTogglesOff:u,widthTogglesOn:d}=_r();return n(D,{get theme(){return M.name},get children(){return[n(H,{get style(){return{width:r()}},class:`transition-[width] duration-300`,get children(){return n(F,{option:s,autoResize:e,class:`chart-md`,onInit:i,onReInit:a,onResize:o})}}),n(V,{code:ur,get children(){return[n(P,{sections:[{items:t}]}),n(G,{get children(){return[(()=>{var t=hr(),n=t.firstChild.nextSibling;return T(n,()=>e()?`true`:`false`),t})(),(()=>{var e=q(),t=e.firstChild.nextSibling;return T(t,r),e})(),(()=>{var e=gr(),t=e.firstChild.nextSibling,n=t.nextSibling.nextSibling;return T(t,d),T(n,u),e})()]}}),n(Nt,{get children(){return[n(N,{onClick:l,children:`Toggle container width (100% ↔ 50%)`}),n(N,{onClick:c,get children(){return`Toggle autoResize (currently: ${e()?`on`:`off`})`}})]}})]}})]}})},yr=`import type { Component } from "solid-js";
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
`,br=y(`<div class="mb-4 p-3 panel flex flex-wrap gap-x-6 gap-y-4 items-end">`),xr=y(`<p class="text-xs text-brand-800 font-bold w-full">`),Sr=y(`<div class="p-1 border border-brand-300 rounded-lg bg-brand-100 inline-flex w-fit relative">`),Cr=y(`<div class="flex items-baseline justify-between"><span class="text-brand-700 font-mono">`),wr=y(`<span class="i-lucide-chevron-up size-3">`),Tr=y(`<span class="i-lucide-chevron-down size-3">`),Er=y(`<div class="border-l border-brand-300 flex flex-col">`),Dr=`flex flex-col gap-1.5 text-xs text-brand-900`,Or=`font-semibold text-brand-800`,kr=e=>(()=>{var t=br();return T(t,(()=>{var t=_(()=>!!e.title);return()=>t()?(()=>{var t=xr();return T(t,()=>e.title),t})():null})(),null),T(t,()=>e.children,null),t})(),Ar=e=>n(oe.Root,{get checked(){return e.checked},get disabled(){return e.disabled},onCheckedChange:t=>{e.onChange(t.checked)},class:`text-xs text-brand-900 flex gap-2 cursor-pointer items-center data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed`,get children(){return[n(oe.Control,{class:`p-0.5 rounded-full bg-brand-300 inline-flex h-5 w-9 transition-colors duration-200 items-center data-[state=checked]:bg-brand-700 data-[focus-visible]:shadow-md`,get children(){return n(oe.Thumb,{class:`rounded-full bg-white size-4 transition-transform duration-200 data-[state=checked]:translate-x-4 data-[focus-visible]:scale-110`})}}),n(oe.Label,{class:`font-mono`,get children(){return e.label}}),n(oe.HiddenInput,{})]}}),jr=e=>n(ie.Root,{get value(){return e.value},onValueChange:t=>{let n=e.options.find(e=>e.value===t.value);n&&e.onChange(n.value)},class:Dr,get children(){return[n(ie.Label,{class:Or,get children(){return e.label}}),(()=>{var t=Sr();return T(t,n(ie.Indicator,{class:`rounded-md bg-brand-900 h-[var(--height)] w-[var(--width)] shadow-sm left-[var(--left)]`}),null),T(t,n(h,{get each(){return e.options},children:e=>n(ie.Item,{get value(){return e.value},class:`text-brand-900 font-mono px-3 py-1.5 rounded-md cursor-pointer transition-colors duration-300 z-1 data-[state=checked]:text-brand-100 data-[focus-visible]:underline data-[focus-visible]:decoration-2 data-[focus-visible]:underline-offset-4`,get children(){return[n(ie.ItemText,{get children(){return e.label}}),n(ie.ItemHiddenInput,{})]}})}),null),t})()]}}),Mr=e=>n(w.Root,{get value(){return[e.value]},get min(){return e.min},get max(){return e.max},get step(){return e.step},onValueChange:t=>{e.onChange(t.value[0])},class:`${Dr} w-48`,get children(){return[(()=>{var t=Cr(),r=t.firstChild;return T(t,n(w.Label,{class:Or,get children(){return e.label}}),r),T(r,(()=>{var t=_(()=>!!e.format);return()=>t()?e.format(e.value):String(e.value)})()),t})(),n(w.Control,{class:`flex h-5 items-center`,get children(){return[n(w.Track,{class:`rounded-full bg-brand-300 h-1.5 w-full`,get children(){return n(w.Range,{class:`rounded-full bg-brand-700 h-full`})}}),n(w.Thumb,{index:0,class:`rounded-full bg-brand-900 size-4 shadow transition-transform duration-200 focus-visible:scale-125`,get children(){return n(w.HiddenInput,{})}})]}})]}}),Nr=e=>n(x.Root,{get value(){return String(e.value)},get min(){return e.min},get max(){return e.max},get step(){return e.step},get disabled(){return e.disabled},onValueChange:t=>{Number.isNaN(t.valueAsNumber)||e.onChange(t.valueAsNumber)},class:`${Dr} w-32 data-[disabled]:opacity-50`,get children(){return[n(x.Label,{class:Or,get children(){return e.label}}),n(x.Control,{class:`border border-brand-300 rounded-lg bg-brand-50 flex overflow-hidden`,get children(){return[n(x.Input,{class:`font-mono px-2 py-1.5 outline-none bg-transparent min-w-0 w-full focus-visible:bg-brand-100`}),(()=>{var e=Er();return T(e,n(x.IncrementTrigger,{class:`text-brand-800 px-1.5 flex-1 cursor-pointer transition-colors duration-200 hover:bg-brand-200`,get children(){return wr()}}),null),T(e,n(x.DecrementTrigger,{class:`text-brand-800 px-1.5 border-t border-brand-300 flex-1 cursor-pointer transition-colors duration-200 hover:bg-brand-200`,get children(){return Tr()}}),null),e})()]}})]}}),Pr=[`#fb628b`,`#3fbe95`,`#785db0`,`#f3901c`],Fr=(e,t)=>Array.from({length:e},(e,n)=>[n,Math.sin(n/40+t)*100+(n*7919+t*131)%37]),Ir=(e,t,n)=>({animation:!1,legend:wt,xAxis:{type:`value`,scale:!0,...Tt},yAxis:{type:`value`,scale:!0,...Tt},series:[{name:n,type:`line`,showSymbol:!1,data:e,lineStyle:{width:1,color:Pr[t%Pr.length]},itemStyle:{color:Pr[t%Pr.length]}}]}),Lr=300,Rr=(e,t)=>{let[n,r]=l(0),[a,o]=l(0),[c,u]=l(0),[d,f]=l(null),p=i(()=>Fr(e(),n())),m=0,h=0,g=0,_;return s(()=>{clearTimeout(_)}),{option:()=>(m+=1,Ir(p(),a(),`Run ${c()}`)),result:d,handleRendered:()=>{h+=1},handleFinished:()=>{g+=1},writeAll:()=>{r(e=>e+1),o(e=>e+1),u(e=>e+1)},measure:e=>{let n=m,r=h,i=g,a=t(),o=performance.now();e();let s=performance.now()-o;f({lazyUpdate:a,setOptionCalls:m-n,syncRendered:h-r,settledFinished:null,blockedMs:s}),clearTimeout(_),_=setTimeout(()=>{f(e=>e&&{...e,settledFinished:g-i})},Lr)}}},zr={"20k":2e4,"100k":1e5,"200k":2e5},Br=()=>{let[e,t]=l(`100k`),[n,r]=l(!1),i=()=>zr[e()];return{size:e,setSize:t,lazyUpdate:n,setLazyUpdate:r,panels:{separate:Rr(i,n),batched:Rr(i,n)}}},Vr=e=>{let{separate:t,batched:n}=e.panels,r=()=>{t.measure(t.writeAll)},i=()=>{n.measure(()=>{d(n.writeAll)})};return{runSeparate:r,runBatched:i,runBoth:()=>{r(),i()}}},Hr=`run it`,Ur={separate:{setOptionCalls:3,title:`A - THREE SEPARATE WRITES`},batched:{setOptionCalls:1,title:`B - THE SAME WRITES INSIDE batch()`}},Wr=(e,t)=>t.lazyUpdate?0:e.setOptionCalls,Gr=(e,t)=>t.lazyUpdate?1:e.setOptionCalls,Kr=(e,t)=>{let n=Ur[e],r=t.panels[e].result;return[{label:`setOption calls - one per effect run`,expected:()=>String(n.setOptionCalls),actual:()=>{let e=r();return e?String(e.setOptionCalls):Hr},pass:()=>{let e=r();return e===null||e.setOptionCalls===n.setOptionCalls}},{label:`Renders inside the click - synchronous, unless lazyUpdate`,expected:()=>{let e=r();return e?String(Wr(n,e)):Hr},actual:()=>{let e=r();return e?String(e.syncRendered):Hr},pass:()=>{let e=r();return e===null||e.syncRendered===Wr(n,e)}},{label:`'finished' events after the frame settled`,expected:()=>{let e=r();return e?String(Gr(n,e)):Hr},actual:()=>{let e=r();return e?e.settledFinished===null?`settling...`:String(e.settledFinished):Hr},pass:()=>{let e=r();return e===null||e.settledFinished===Gr(n,e)}}]},qr=e=>[{title:Ur.separate.title,items:Kr(`separate`,e)},{title:Ur.batched.title,items:Kr(`batched`,e)}],Jr=y(`<div>lazyUpdate at the last click is recorded per run, so toggling it afterwards does not invalidate the checklist.`),Yr=y(`<div><strong>`),Xr=[`separate`,`batched`],Zr=[{value:`20k`,label:`20k points`},{value:`100k`,label:`100k points`},{value:`200k`,label:`200k points`}],Qr=e=>{if(!e)return`not run yet`;let t=e.settledFinished===null?`...`:String(e.settledFinished);return`${e.setOptionCalls} setOption, ${e.syncRendered} sync renders, ${t} finished, click blocked ${Math.round(e.blockedMs)} ms`},$r=()=>{let e=Br(),t=Vr(e),n=qr(e);return{...e,...t,checklist:n}},ei=()=>{let{size:e,setSize:t,lazyUpdate:r,setLazyUpdate:i,panels:a,runSeparate:o,runBatched:s,runBoth:c,checklist:l}=$r();return n(D,{get theme(){return M.name},get children(){return[n(H,{class:`gap-4 grid grid-cols-2`,get children(){return[n(F,{containerProps:{title:`A - three separate writes`,note:`setSeed(); setColor(); setLabel() - one effect run each`},get option(){return a.separate.option},lazyUpdate:r,class:`chart-md`,get onEvents(){return{rendered:a.separate.handleRendered,finished:a.separate.handleFinished}}}),n(F,{containerProps:{title:`B - the same writes inside batch()`,note:`batch(() => { setSeed(); setColor(); setLabel(); }) - one effect run`},get option(){return a.batched.option},lazyUpdate:r,class:`chart-md`,get onEvents(){return{rendered:a.batched.handleRendered,finished:a.batched.handleFinished}}})]}}),n(V,{code:yr,get children(){return[n(kr,{get children(){return[n(Ar,{label:`lazyUpdate (both charts)`,get checked(){return r()},onChange:i}),n(jr,{label:`Series size`,options:Zr,get value(){return e()},onChange:t}),n(N,{onClick:o,children:`Run A (separate)`}),n(N,{onClick:s,children:`Run B (batch)`}),n(N,{onClick:c,children:`Run both`})]}}),n(P,{sections:l}),n(G,{get children(){return[n(h,{each:Xr,children:e=>(()=>{var t=Yr(),n=t.firstChild;return T(t,()=>`${Ur[e].title}: `,n),T(n,()=>Qr(a[e].result())),t})()}),Jr()]}})]}})]}})},ti=`import type { Component } from "solid-js";
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
`,ni={theme:St.name,group:`provider-group`,autoResize:!1},ri=`own-group`,ii=e=>(e===M.name?M:St).theme.color[0].toLowerCase(),ai=e=>{switch(e){case`inherit`:return;case`brand`:return M.name;case`second`:return St.name}},oi=e=>{switch(e){case`inherit`:return;case`own`:return ri;case`none`:return``}},si=e=>{switch(e){case`inherit`:return;case`on`:return!0;case`off`:return!1}},ci=e=>ai(e)??ni.theme,li=e=>oi(e)??ni.group,ui=e=>si(e)??ni.autoResize,di=[{value:`inherit`,label:`undefined`},{value:`brand`,label:`Brand`},{value:`second`,label:`Second`}],fi=[{value:`inherit`,label:`undefined`},{value:`own`,label:ri},{value:`none`,label:`""`}],pi=[{value:`inherit`,label:`undefined`},{value:`on`,label:`true`},{value:`off`,label:`false`}],mi=e=>{let[t,n]=l(e);return{value:t,set:n}},hi=()=>{let e=mi(`inherit`),t=mi(`inherit`),n=mi(`inherit`),r=mi(!1),i=mi(!0),a=mi(!1),o=mi(0),s=mi(null),c=mi(null),l=mi(0),u=mi(0),d=mi(null),f=mi(!1),p=mi(0),m=mi(0),h=mi(0),g=mi(0);return{themeChoice:e.value,setThemeChoice:e.set,groupChoice:t.value,setGroupChoice:t.set,resizeChoice:n.value,setResizeChoice:n.set,loading:r.value,setLoading:r.set,surfaceOn:i.value,setSurfaceOn:i.set,narrow:a.value,setNarrow:a.set,revision:o.value,bump:()=>{o.set(e=>e+1)},accessorChart:s.value,setAccessorChart:s.set,callChart:c.value,setCallChart:c.set,accessorResizes:l.value,setAccessorResizes:l.set,callResizes:u.value,setCallResizes:u.set,probe:d.value,setProbe:d.set,probing:f.value,setProbing:f.set,accessorClicks:p.value,setAccessorClicks:p.set,callClicks:m.value,setCallClicks:m.set,simulatedWhileOn:h.value,setSimulatedWhileOn:h.set,realClicks:g.value,setRealClicks:g.set}},gi={maskColor:`rgba(255, 0, 255, 0.15)`,showSpinner:!1},_i=500,vi={simulated:!0},yi=e=>typeof e==`object`&&!!e&&`simulated`in e,bi=e=>{let{setThemeChoice:t,setGroupChoice:n,setResizeChoice:r,setLoading:i,setSurfaceOn:a,surfaceOn:o,resizeChoice:c,narrow:l,setNarrow:u,bump:d,accessorChart:f,callChart:p,accessorResizes:m,callResizes:h,setAccessorResizes:g,setCallResizes:_,setProbe:v,setProbing:y,setAccessorClicks:b,setCallClicks:x,setSimulatedWhileOn:S,setRealClicks:ee}=e,C=e=>t=>{e(()=>t),d()},te=e=>t=>{yi(t)?e(R):ee(R)},w=()=>{o()&&S(R),f()?.getZr().trigger(`click`,vi),p()?.getZr().trigger(`click`,vi),d()},ne;return s(()=>{clearTimeout(ne)}),{selectTheme:C(t),selectGroup:C(n),selectResize:C(r),toggleLoading:C(i),toggleSurface:C(a),simulateSurfaceClick:w,runResizeProbe:()=>{let e=ui(c()),t=m(),n=h();y(!0),u(!l()),ne=setTimeout(()=>{v({expected:e,accessorDelta:m()-t,callDelta:h()-n}),y(!1),d()},_i)},handleAccessorResize:()=>{g(R)},handleCallResize:()=>{_(R)},handleAccessorClick:te(b),handleCallClick:te(x)}},xi=e=>typeof e==`object`&&!!e,Si=e=>!e||e.isDisposed()?`-`:e.getZr().storage.getDisplayList(!0).some(e=>{let t=e.style;return xi(t)&&t.fill===`rgba(255, 0, 255, 0.15)`})?`shown`:`hidden`,Ci=e=>!e||e.isDisposed()?`-`:e.group===``?`(none)`:e.group,wi=e=>e?`on`:`off`,Ti=e=>{let{themeChoice:t,groupChoice:n,loading:r,revision:i,accessorChart:a,callChart:o,probe:s,accessorClicks:c,callClicks:l,simulatedWhileOn:u}=e,d=[{form:`accessor form`,chart:a},{form:`call form`,chart:o}],f=(e,t)=>()=>(i(),e(t())),p=(e,t,n)=>d.map(({form:r,chart:i})=>{let a=f(n,i);return{label:e(r),expected:t,actual:a,pass:()=>a()===t()}}),m=(e,t)=>({label:`${t}: onResize follows a width change only while autoResize resolves to true`,expected:()=>s()?wi(s()?.expected??!1):`run the probe`,actual:()=>{let t=s();return t?`${String(t[e])} calls`:`-`},pass:()=>{let t=s();return t?t.expected?t[e]>0:t[e]===0:!0}}),h=(e,t)=>({label:`${e}: handler gets simulated clicks only while switched on`,expected:()=>String(u()),actual:()=>String(t()),pass:()=>t()===u()});return{theme:p(e=>`${e}: theme (undefined = provider) - series colour of the instance`,()=>ii(ci(t())),fn),loading:p(e=>`${e}: loading overlay on the instance`,()=>r()?`shown`:`hidden`,Si),group:p(e=>`${e}: group (undefined = provider) - chart.group of the instance`,()=>{let e=li(n());return e===``?`(none)`:e},Ci),autoResize:[m(`accessorDelta`,`accessor form`),m(`callDelta`,`call form`)],surface:[h(`accessor form`,c),h(`call form`,l)]}},Ei=()=>z({xAxis:{type:`category`,data:U},yAxis:{type:`value`},series:[{type:`bar`,data:W}]}),Di=y(`<div class="gap-4 grid grid-cols-2">`),Oi=y(`<div>Provider: theme <strong></strong>, group <strong></strong>, autoResize <strong>`),ki=y(`<div>Effective on both charts: theme <strong></strong>, group <strong></strong>, autoResize <strong>`),Ai=y(`<div>Mouse clicks on the charts (not checked): <strong>`),ji=y(`<div class="mb-4 flex flex-wrap gap-6">`),Mi=()=>{let e=hi(),t=bi(e),n=Ti(e);return{...e,...t,checklist:n}},Ni=()=>{let e=Mi(),t=()=>e.surfaceOn()?{click:e.handleAccessorClick}:{};return n(D,{get theme(){return ni.theme},get group(){return ni.group},get autoResize(){return ni.autoResize},get children(){return[n(H,{get children(){var r=Di();return T(r,n(F,{get class(){return e.narrow()?`h-280px w-1/2`:`chart-sm`},option:Ei,theme:()=>ci(e.themeChoice()),get loading(){return e.loading},loadingOptions:gi,group:()=>li(e.groupChoice()),autoResize:()=>ui(e.resizeChoice()),onSurfaceEvents:t,get onResize(){return e.handleAccessorResize},ref(t){var n=e.setAccessorChart;typeof n==`function`?n(t):e.setAccessorChart=t},containerProps:{title:`Accessor form`,note:`theme={() => ...}  loading={loading}  group={() => ...}  (provider fallback resolved inside the accessor)`}}),null),T(r,n(F,{get class(){return e.narrow()?`h-280px w-1/2`:`chart-sm`},option:Ei,get theme(){return ai(e.themeChoice())},get loading(){return e.loading()},loadingOptions:gi,get group(){return oi(e.groupChoice())},get autoResize(){return si(e.resizeChoice())},get onSurfaceEvents(){return _(()=>!!e.surfaceOn())()?{click:e.handleCallClick}:{}},get onResize(){return e.handleCallResize},ref(t){var n=e.setCallChart;typeof n==`function`?n(t):e.setCallChart=t},containerProps:{title:`Call form`,note:`theme={theme()}  loading={loading()}  group={group()}`}}),null),r}}),n(V,{code:ti,get children(){return[n(P,{get sections(){return[{title:`THEME`,items:e.checklist.theme},{title:`LOADING`,items:e.checklist.loading},{title:`GROUP`,items:e.checklist.group},{title:`AUTO-RESIZE - run the resize probe`,items:e.checklist.autoResize},{title:`SURFACE EVENTS - use Simulate surface click`,items:e.checklist.surface}]}}),n(G,{get children(){return[(()=>{var e=Oi(),t=e.firstChild.nextSibling,n=t.nextSibling.nextSibling,r=n.nextSibling.nextSibling;return T(t,()=>ni.theme),T(n,()=>ni.group),T(r,()=>String(ni.autoResize)),e})(),(()=>{var t=ki(),n=t.firstChild.nextSibling,r=n.nextSibling.nextSibling,i=r.nextSibling.nextSibling;return T(n,()=>ci(e.themeChoice())),T(r,()=>li(e.groupChoice())||`(none)`),T(i,()=>String(ui(e.resizeChoice()))),t})(),(()=>{var t=Ai(),n=t.firstChild.nextSibling;return T(n,()=>e.realClicks()),t})()]}}),(()=>{var t=ji();return T(t,n(jr,{label:`theme prop`,options:di,get value(){return e.themeChoice()},get onChange(){return e.selectTheme}}),null),T(t,n(jr,{label:`group prop`,options:fi,get value(){return e.groupChoice()},get onChange(){return e.selectGroup}}),null),T(t,n(jr,{label:`autoResize prop`,options:pi,get value(){return e.resizeChoice()},get onChange(){return e.selectResize}}),null),t})(),(()=>{var t=ji();return T(t,n(Ar,{label:`loading`,get checked(){return e.loading()},get onChange(){return e.toggleLoading}}),null),T(t,n(Ar,{label:`onSurfaceEvents click handler`,get checked(){return e.surfaceOn()},get onChange(){return e.toggleSurface}}),null),t})(),n(Nt,{get children(){return[n(N,{get onClick(){return e.simulateSurfaceClick},children:`Simulate surface click`}),n(N,{get onClick(){return e.runResizeProbe},get disabled(){return e.probing()},get children(){return e.probing()?`Probing...`:`Run resize probe (change both widths)`}})]}})]}})]}})},Pi=`import type { Component } from "solid-js";
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
`,Fi=y(`<div class=mb-4><p class="text-xs mb-1"><code>getDataURL</code> preview (PNG, pixelRatio: 2):</p><img class="border border-neutral-300 max-w-100"alt="Chart export preview">`),Ii=e=>(()=>{var t=Fi(),n=t.firstChild.nextSibling;return r(()=>re(n,`src`,e.url)),t})(),Li=Symbol(`store-raw`),Ri=Symbol(`store-node`),zi=Symbol(`store-has`),Bi=Symbol(`store-self`);function Vi(e){let t=e[se];if(!t&&(Object.defineProperty(e,se,{value:t=new Proxy(e,Yi)}),!Array.isArray(e))){let n=Object.keys(e),r=Object.getOwnPropertyDescriptors(e),i=Object.getPrototypeOf(e),a=i!==null&&typeof e==`object`&&!!e&&!Array.isArray(e)&&i!==Object.prototype;if(a){let e=Object.getOwnPropertyDescriptors(i);n.push(...Object.keys(e)),Object.assign(r,e)}for(let i=0,o=n.length;i<o;i++){let o=n[i];a&&o===`constructor`||r[o].get&&Object.defineProperty(e,o,{configurable:!0,enumerable:r[o].enumerable,get:r[o].get.bind(t)})}}return t}function Hi(e){let t;return typeof e==`object`&&!!e&&(e[se]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function Ui(e,t=new Set){let n,r,i,a;if(n=e!=null&&e[Li])return n;if(!Hi(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let n=0,a=e.length;n<a;n++)i=e[n],(r=Ui(i,t))!==i&&(e[n]=r)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);let n=Object.keys(e),o=Object.getOwnPropertyDescriptors(e);for(let s=0,c=n.length;s<c;s++)a=n[s],!o[a].get&&(i=e[a],(r=Ui(i,t))!==i&&(e[a]=r))}return e}function Wi(e,t){let n=e[t];return n||Object.defineProperty(e,t,{value:n=Object.create(null)}),n}function Gi(e,t,n){if(e[t])return e[t];let[r,i]=l(n,{equals:!1,internal:!0});return r.$=i,e[t]=r}function Ki(e,t){let n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===se||t===Ri?n:(delete n.value,delete n.writable,n.get=()=>e[se][t],n)}function qi(e){ee()&&Gi(Wi(e,Ri),Bi)()}function Ji(e){return qi(e),Reflect.ownKeys(e)}var Yi={get(e,t,n){if(t===Li)return e;if(t===se)return n;if(t===le)return qi(e),n;let r=Wi(e,Ri),i=r[t],a=i?i():e[t];if(t===Ri||t===zi||t===`__proto__`)return a;if(!i){let n=Object.getOwnPropertyDescriptor(e,t);ee()&&(typeof a!=`function`||Object.prototype.hasOwnProperty.call(e,t))&&!(n&&n.get)&&(a=Gi(r,t,a)())}return Hi(a)?Vi(a):a},has(e,t){return t===Li||t===se||t===le||t===Ri||t===zi||t===`__proto__`||(ee()&&Gi(Wi(e,zi),t)(),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:Ji,getOwnPropertyDescriptor:Ki};function Xi(e,t,n,r=!1){if(t===`__proto__`||!r&&e[t]===n)return;let i=e[t],a=e.length;n===void 0?(delete e[t],e[zi]&&e[zi][t]&&i!==void 0&&e[zi][t].$()):(e[t]=n,e[zi]&&e[zi][t]&&i===void 0&&e[zi][t].$());let o=Wi(e,Ri),s;if((s=Gi(o,t,i))&&s.$(()=>n),Array.isArray(e)&&e.length!==a){for(let t=e.length;t<a;t++)(s=o[t])&&s.$();(s=Gi(o,`length`,a))&&s.$(e.length)}(s=o[Bi])&&s.$()}function Zi(e,t){let n=Object.keys(t);for(let r=0;r<n.length;r+=1){let i=n[r];Qi(i)||Xi(e,i,t[i])}}function Qi(e){return e===`__proto__`||e===`constructor`||e===`prototype`}function $i(e,t){if(typeof t==`function`&&(t=t(e)),t=Ui(t),Array.isArray(t)){if(e===t)return;let n=0,r=t.length;for(;n<r;n++){let r=t[n];e[n]!==r&&Xi(e,n,r)}Xi(e,`length`,r)}else Zi(e,t)}function ea(e,t,n=[]){let r,i=e;if(t.length>1){r=t.shift();let a=typeof r,o=Array.isArray(e);if(a===`string`&&(r===`__proto__`||t.length>1&&Qi(r)))return;if(Array.isArray(r)){for(let i=0;i<r.length;i++)ea(e,[r[i]].concat(t),n);return}if(o&&a===`function`){for(let i=0;i<e.length;i++)r(e[i],i)&&ea(e,[i].concat(t),n);return}if(o&&a===`object`){let{from:i=0,to:a=e.length-1,by:o=1}=r;for(let r=i;r<=a;r+=o)ea(e,[r].concat(t),n);return}if(t.length>1){ea(e[r],t,[r].concat(n));return}i=e[r],n=[r].concat(n)}let a=t[0];typeof a==`function`&&(a=a(i,n),a===i)||(r!==void 0||a!=null)&&(a=Ui(a),r===void 0||Hi(i)&&Hi(a)&&!Array.isArray(a)?Zi(i,a):Xi(e,r,a))}function ta(...[e,t]){let n=Ui(e||{}),r=Array.isArray(n),i=Vi(n);function a(...e){d(()=>{r&&e.length===1?$i(n,e[0]):ea(n,e)})}return[i,a]}var na=Symbol(`store-root`);function ra(e){return e===`__proto__`||e===`constructor`||e===`prototype`}function ia(e,t,n,r,i){if(ra(n))return;let a=t[n];if(e===a)return;let o=Array.isArray(e);if(n!==na&&(!Hi(e)||!Hi(a)||o!==Array.isArray(a)||i&&e[i]!==a[i])){Xi(t,n,e);return}if(o){if(e.length&&a.length&&(!r||i&&e[0]&&e[0][i]!=null)){let t,n,o,s,c,l,u,d;for(o=0,s=Math.min(a.length,e.length);o<s&&(a[o]===e[o]||i&&a[o]&&e[o]&&a[o][i]&&a[o][i]===e[o][i]);o++)ia(e[o],a,o,r,i);let f=Array(e.length),p=new Map;for(s=a.length-1,c=e.length-1;s>=o&&c>=o&&(a[s]===e[c]||i&&a[s]&&e[c]&&a[s][i]&&a[s][i]===e[c][i]);s--,c--)f[c]=a[s];if(o>c||o>s){for(n=o;n<=c;n++)Xi(a,n,e[n]);for(;n<e.length;n++)Xi(a,n,f[n]),ia(e[n],a,n,r,i);a.length>e.length&&Xi(a,`length`,e.length);return}for(u=Array(c+1),n=c;n>=o;n--)l=e[n],d=i&&l?l[i]:l,t=p.get(d),u[n]=t===void 0?-1:t,p.set(d,n);for(t=o;t<=s;t++)l=a[t],d=i&&l?l[i]:l,n=p.get(d),n!==void 0&&n!==-1&&(f[n]=a[t],n=u[n],p.set(d,n));for(n=o;n<e.length;n++)n in f?(Xi(a,n,f[n]),ia(e[n],a,n,r,i)):Xi(a,n,e[n])}else for(let t=0,n=e.length;t<n;t++)ia(e[t],a,t,r,i);a.length>e.length&&Xi(a,`length`,e.length);return}let s=Object.keys(e);for(let t=0,n=s.length;t<n;t++)ra(s[t])||ia(e[s[t]],a,s[t],r,i);let c=Object.keys(a);for(let t=0,n=c.length;t<n;t++)e[c[t]]===void 0&&Xi(a,c[t],void 0)}function aa(e,t={}){let{merge:n,key:r=`id`}=t,i=Ui(e);return e=>{if(!Hi(e)||!Hi(i))return i;let t=ia(i,{[na]:e},na,n,r);return t===void 0?e:t}}var oa=()=>{let[e,t]=ta({width:void 0,height:void 0,domIsElement:!1,id:void 0}),[n,r]=l(null),[i,a]=l(`-`),[o,s]=l(null),[c,u]=l(0),[d,f]=l(!1),[p,m]=l(null),[h,g]=l(null),[_,v]=l(null),[y,b]=l(`-`),[x,S]=l(`-`);return{chartMeta:e,setChartMeta:t,dataUrlValid:n,setDataUrlValid:r,coordsResult:i,setCoordsResult:a,coordsValid:o,setCoordsValid:s,dispatchCount:c,setDispatchCount:u,clearedOnce:d,setClearedOnce:f,disposedAfterClear:p,setDisposedAfterClear:m,seriesAfterClear:h,setSeriesAfterClear:g,dataUrl:_,setDataUrl:v,visualColor:y,setVisualColor:b,optionKeys:x,setOptionKeys:S}},sa=(e,t,n)=>{let{setDataUrlValid:r,setCoordsResult:i,setCoordsValid:a,setDispatchCount:o,setClearedOnce:s,setDisposedAfterClear:c,setSeriesAfterClear:l,setDataUrl:u,setVisualColor:d,setOptionKeys:f}=e;return{downloadPng:()=>{let e=t.getDataURL({type:`png`,pixelRatio:2,backgroundColor:`#ffffff`});if(!e)return;let n=document.createElement(`a`);n.href=e,n.download=`chart.png`,n.click()},downplayAll:()=>{n(A.downplay({})),o(R)},clearChart:()=>{t.clear(),c(t.isDisposed());let e=t.getOption()?.series;l(Array.isArray(e)?e.filter(Boolean).length:null),s(!0)},highlightFirst:()=>{n(A.highlight({seriesIndex:0,dataIndex:0})),o(R)},readOption:()=>{let e=t.getOption();f(e===void 0?`-`:Object.keys(e).join(`, `))},readVisual:()=>{let e=t.getVisual({seriesIndex:0,dataIndex:0},`color`);d(e===void 0?`-`:String(e))},convertCoord:()=>{let e=t.convertToPixel({seriesIndex:0},[2,0]),n=Array.isArray(e)&&e.length===2;a(n),i(n?`[${e.map(e=>Math.round(e)).join(`, `)}]`:e===void 0?`not ready`:String(e))},exportPng:()=>{let e=t.getDataURL({type:`png`,pixelRatio:2,backgroundColor:`#ffffff`});r(typeof e==`string`&&e.startsWith(`data:image/png`)),u(e??null)}}},J=e=>e.map(e=>({...e,label:typeof e.label==`string`?ln(e.label):e.label})),ca=(e,t,n)=>{let{chartMeta:r,dataUrlValid:i,coordsResult:a,coordsValid:o,dispatchCount:s,clearedOnce:c,disposedAfterClear:l,seriesAfterClear:u}=e;return{actionItems:J([{label:`chart.getDataURL() -> valid data:image/png URL`,expected:()=>`data:image/png…`,actual:()=>i()===null?`press Export`:i()?`data:image/png… ✓`:`invalid ×`,pass:()=>i()!==!1},{label:`chart.convertToPixel() → [x, y] pixel pair`,expected:()=>`[x, y]`,actual:()=>o()===null?`press Convert`:a(),pass:()=>o()!==!1},{label:`dispatch() - actions reach the chart`,expected:()=>`≥ 1 dispatch`,actual:()=>`${s()} dispatched`,pass:()=>s()>=0},{label:`chart.clear() → series empty, instance still live`,expected:()=>c()?`series: 0, disposed: false`:`press Clear`,actual:()=>c()?`series: ${String(u())}, disposed: ${String(l())}`:`-`,pass:()=>!c()||u()===0&&l()===!1}]),autoItems:J([{label:`instance() is non-null after mount`,expected:()=>`non-null`,actual:()=>n()===null?`null`:`non-null`,pass:()=>n()!==null},{label:`chart.isDisposed() -> false while live`,expected:()=>`false`,actual:()=>String(t.isDisposed()),pass:()=>!t.isDisposed()},{label:`chart.isSSR() -> false in browser`,expected:()=>`false`,actual:()=>String(t.isSSR()),pass:()=>!t.isSSR()},{label:`chart.getWidth() / getHeight() -> positive numbers`,expected:()=>`> 0`,actual:()=>r.width===void 0?`-`:`${r.width} × ${String(r.height)}px`,pass:()=>typeof r.width==`number`&&r.width>0},{label:`chart.getDom() -> HTMLElement`,expected:()=>`HTMLElement`,actual:()=>r.width===void 0?`-`:r.domIsElement?`HTMLElement ✓`:`not an element`,pass:()=>r.width===void 0||r.domIsElement},{label:`chart.getId() -> non-empty string`,expected:()=>`string`,actual:()=>r.id===void 0?`-`:`"${r.id}"`,pass:()=>typeof r.id==`string`&&r.id.length>0}])}},la=()=>z({tooltip:{trigger:`item`},xAxis:{type:`category`,data:zn},yAxis:{type:`value`},series:[{type:`bar`,data:Bn,emphasis:{focus:`self`}}]}),ua=y(`<span>`),da=y(`<div>getVisual color: <strong>`),fa=y(`<div>getOption keys: <strong>`),pa=y(`<div>convertToPixel: <strong>`),ma=y(`<div>instance() is null: <strong>`),ha=()=>{let{instance:e,chart:t,dispatch:n}=$e(),r=oa(),i=sa(r,t,n),a=ca(r,t,e);f(()=>{let t=e();t&&!t.isDisposed()&&r.setChartMeta({width:t.getWidth(),height:t.getHeight(),domIsElement:t.getDom()instanceof HTMLElement,id:t.getId()})});let o=[{label:`getDataURL (preview)`,action:i.exportPng},{label:`getDataURL (download)`,action:i.downloadPng},{label:`convertToPixel`,action:i.convertCoord},{label:`getVisual (color)`,action:i.readVisual},{label:`getOption (keys)`,action:i.readOption},{label:`highlight bar A`,action:i.highlightFirst},{label:`downplay all`,action:i.downplayAll},{label:`clear()`,action:i.clearChart}],s=()=>String(e()===null);return{...r,checklist:a,btnActions:o,nullInstance:s}},ga=()=>{let{coordsResult:e,dataUrl:t,visualColor:i,optionKeys:a,btnActions:o,checklist:s,nullInstance:c}=ha();return[n(Ft,{get children(){var e=ua();return T(e,()=>ln(`Every button uses chart.method() - no null checks, no instance()?. Methods silently return undefined when unavailable.`)),e}}),n(P,{get sections(){return[{title:`AUTO - verified on mount`,items:s.autoItems},{title:`ACTION-TRIGGERED - press buttons below`,items:s.actionItems}]}}),n(G,{get children(){return[(()=>{var e=da(),t=e.firstChild.nextSibling;return T(t,i),r(e=>te(t,`color`,i().startsWith(`#`)?i():void 0)),e})(),(()=>{var e=fa(),t=e.firstChild.nextSibling;return T(t,a),e})(),(()=>{var t=pa(),n=t.firstChild.nextSibling;return T(n,e),t})(),(()=>{var e=ma(),t=e.firstChild.nextSibling;return T(t,c),e})()]}}),n(Nt,{get children(){return n(h,{each:o,children:({action:e,label:t})=>n(N,{onClick:e,children:t})})}}),n(E,{get when(){return t()},children:e=>n(Ii,{get url(){return e()}})})]},_a=()=>{let[e,t]=l();return n(D,{theme:`default`,get children(){return[n(H,{get children(){return n(Wt,{get children(){return n(_t,{option:la,class:`chart-md`,get theme(){return M.name},get children(){return n(E,{get when(){return e()},children:e=>n(g,{get mount(){return e()},get children(){return n(ga,{})}})})}})}})}}),n(V,{code:Pi,ref:t})]}})},va=`import type { Component } from "solid-js";
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
`,ya=y(`<div class="border border-brand-300 rounded-md w-full overflow-hidden"><table class="text-xs w-full border-collapse"><thead class=bg-brand-300/60><tr></tr></thead><tbody class=bg-brand-100>`),ba=y(`<th class="px-2 py-1 first:border-r first:border-brand-300 text-left">`),xa=y(`<tr>`),Sa=y(`<td class="px-2 py-1 first:border-r first:border-brand-300">`),Ca=e=>(()=>{var r=ya(),i=r.firstChild.firstChild,a=i.firstChild,o=i.nextSibling;return T(a,n(h,{get each(){return e.headers},children:e=>(()=>{var t=ba();return T(t,e),t})()})),T(o,n(h,{get each(){return e.data},children:(r,i)=>(()=>{var a=xa();return b(a,t(()=>e.rowProps(i()),{class:`border-y border-brand-300 cursor-pointer last:border-b-0 hover:bg-brand-200`}),!1,!0),T(a,n(h,{each:r,children:e=>(()=>{var t=Sa();return T(t,()=>e.toLocaleString()),t})()})),a})()})),r})(),wa=e=>{let{instance:t}=$e();return tt(t,()=>{let t=e.hoveredIndex();return t===null?A.downplay({}):A.highlight({seriesIndex:0,dataIndex:t})}),null},Ta=()=>{let[e,t]=l(null),[n,r]=l(null),a=i(()=>e()??n()),[o,s]=l(`canvas`),[c,u]=l(0),[d,f]=l(0),[p,m]=l(0),[h,g]=l(0);return{hoveredIndex:e,setHoveredIndex:t,pinnedIndex:n,setPinnedIndex:r,activeIndex:a,renderer:o,setRenderer:s,switchCount:c,setSwitchCount:u,initCount:d,setInitCount:f,reInitCount:p,setReInitCount:m,highlightsOnInstance:h,setHighlightsOnInstance:g}},Ea=2,Da=e=>{let{setHoveredIndex:t,setPinnedIndex:n,setRenderer:r,setSwitchCount:i,setInitCount:a,setReInitCount:o,setHighlightsOnInstance:s}=e;return{rowProps:e=>({onMouseEnter:()=>{t(e)},onMouseLeave:()=>{t(null)}}),switchRenderer:()=>{i(R),r(e=>e===`canvas`?`svg`:`canvas`)},togglePin:()=>{n(e=>e===null?Ea:null)},handleInit:()=>{a(R),s(0)},handleReInit:()=>{o(R),s(0)},handleHighlight:()=>{s(R)}}},Oa=e=>{let{activeIndex:t,initCount:n,reInitCount:r,switchCount:i,highlightsOnInstance:a}=e;return[{label:`onInit fires once - for the first instance only`,expected:()=>`1`,actual:()=>String(n()),pass:()=>n()===1},{label:`onReInit fires on each renderer switch - reInitCount === switchCount`,expected:()=>String(i()),actual:()=>String(r()),pass:()=>r()===i()},{label:`Active highlight re-dispatched to the current instance`,expected:()=>t()===null?`activate a row first`:`≥ 1 highlight`,actual:()=>`${a()} on this instance`,pass:()=>t()===null||a()>=1}]},ka=()=>z({tooltip:{trigger:`axis`},xAxis:{type:`category`,data:Nn},yAxis:{type:`value`},series:[{type:`bar`,data:Jn,emphasis:{focus:`self`}}]}),Aa=y(`<div>Renderer: <strong>`),ja=y(`<div>Active row index: <strong>`),Ma=y(`<div>onInit / onReInit: <strong></strong> / <strong>`),Na=y(`<div>highlight events on this instance: <strong>`),Pa=Nn.map((e,t)=>[e,Jn[t]??0]),Fa=()=>{let e=Ta(),t=Da(e),n=Oa(e),r=ka;return{...e,...t,checklist:n,option:r}},Ia=()=>{let{activeIndex:e,checklist:t,handleHighlight:r,handleInit:i,handleReInit:a,highlightsOnInstance:o,initCount:s,option:c,pinnedIndex:l,reInitCount:u,renderer:d,rowProps:f,switchRenderer:p,togglePin:m}=Fa();return n(D,{get theme(){return M.name},get children(){return[n(H,{class:`flex gap-20 items-start`,get children(){return[n(Wt,{title:`1. Hover a row (or pin one) to activate the highlight`,get children(){return n(Ca,{rowProps:f,headers:[`Month`,`Revenue`],data:Pa})}}),n(Wt,{title:`2. While active, switch renderer - highlight must survive`,class:`w-full`,get children(){return n(_t,{option:c,renderer:d,class:`chart-lg`,onInit:i,onReInit:a,onEvents:{highlight:r},get children(){return n(wa,{hoveredIndex:e})}})}})]}}),n(V,{code:va,get children(){return[n(P,{sections:[{items:t}]}),n(G,{get children(){return[(()=>{var e=Aa(),t=e.firstChild.nextSibling;return T(t,d),e})(),(()=>{var t=ja(),n=t.firstChild.nextSibling;return T(n,()=>e()??`none`),T(t,()=>l()===null?``:` (pinned)`,null),t})(),(()=>{var e=Ma(),t=e.firstChild.nextSibling,n=t.nextSibling.nextSibling;return T(t,s),T(n,u),e})(),(()=>{var e=Na(),t=e.firstChild.nextSibling;return T(t,o),e})()]}}),n(Nt,{get children(){return[n(N,{onClick:m,get children(){return l()===null?`Pin highlight on row 3`:`Unpin highlight`}}),n(N,{onClick:p,get children(){return`Switch to ${d()===`canvas`?`SVG`:`canvas`} renderer`}})]}})]}})]}})},La=`import type { Component } from "solid-js";
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
`,Ra=y(`<div class="text-xs text-brand-400 border border-brand-300 rounded border-dashed bg-brand-100 flex chart-md items-center justify-center">Chart unmounted - hover table rows to confirm counters are frozen`),za=()=>Ra(),Ba=()=>{let[e,t]=l(null),[n,r]=l(!0),[i,a]=l(0),[o,s]=l(0),[c,u]=l(null),[d,f]=l(null),[p,m]=l(!1),[h,g]=l(null),[_,v]=l(null),[y,b]=l(null),{instance:x}=ot(y,{theme:M.name,renderer:`canvas`});return{hoveredIndex:e,setHoveredIndex:t,chartMounted:n,setChartMounted:r,highlightCount:i,setHighlightCount:a,downplayCount:o,setDownplayCount:s,lastHighlightIdx:c,setLastHighlightIdx:u,everHovered:p,setEverHovered:m,downplayAtLeave:d,setDownplayAtLeave:f,highlightAtUnmount:h,setHighlightAtUnmount:g,downplayAtUnmount:_,setDownplayAtUnmount:v,setContainer:b,instance:x}},Va=e=>typeof e==`object`&&!!e&&`dataIndex`in e&&typeof e.dataIndex==`number`,Ha=e=>{let{downplayCount:t,everHovered:n,highlightCount:r,setChartMounted:i,setDownplayAtLeave:a,setDownplayAtUnmount:o,setEverHovered:s,setHighlightAtUnmount:c,setHoveredIndex:l,setHighlightCount:u,setDownplayCount:d,setLastHighlightIdx:f}=e;return{handleMouseEnter:e=>{s(!0),l(e)},handleMouseLeave:()=>{n()&&a(t()),l(null)},handleRemount:()=>{c(null),o(null),i(!0)},handleUnmount:()=>{c(r()),o(t()),i(!1)},onDownplay:()=>{d(R)},onHighlight:e=>{u(R),Va(e)&&f(e.dataIndex)}}},Ua=e=>{let{chartMounted:t,downplayAtUnmount:n,downplayCount:r,everHovered:i,downplayAtLeave:a,highlightAtUnmount:o,highlightCount:s,hoveredIndex:c,lastHighlightIdx:l}=e;return{dispatchItems:[{label:`defer: true - no highlight dispatch before chart model is ready`,expected:()=>`0 on load`,actual:()=>String(s()),pass:()=>i()||s()===0},{label:`highlight dispatches on hover - chart event count increments`,expected:()=>c()===null?`hover a row to test`:`≥ 1`,actual:()=>String(s()),pass:()=>c()===null||s()>0},{label:`highlight dataIndex matches hovered row`,expected:()=>c()===null?`-`:String(c()),actual:()=>l()===null?`-`:String(l()),pass:()=>!t()||c()===null||l()===c()},{label:`downplay dispatches on mouse leave`,expected:()=>{let e=a();return e===null?`hover then leave a row`:`≥ ${e+1}`},actual:()=>String(r()),pass:()=>{let e=a();return e===null||r()>e}}],disposeItems:[{label:`dispose guard - no dispatches after unmount (hover table after unmounting)`,expected:()=>{let e=o();return e===null?`unmount chart first, then hover the table`:`highlight: ${String(e)}, downplay: ${String(n())}`},actual:()=>o()===null?`-`:`highlight: ${String(s())}, downplay: ${String(r())}`,pass:()=>{let e=o();return e===null||s()===e&&r()===n()}}]}},Wa=(e,t)=>()=>z({tooltip:{trigger:`axis`},xAxis:{type:`category`,data:e},yAxis:{type:`value`},series:[{type:`bar`,data:t,emphasis:{focus:`self`}}]}),Ga=y(`<div class=chart-md>`),Ka=y(`<strong>`),qa=Nn.map((e,t)=>[e,Yn[t]??0]),Ja=()=>{let e=Ba(),t=Ha(e),n=Ua(e),r=Wa(Nn,Yn),{chartMounted:i,setContainer:a,instance:o,hoveredIndex:c}=e;return f(()=>{i()||a(null)}),dt(o,r),tt(o,()=>{let e=c();return e===null?A.downplay({}):A.highlight({seriesIndex:0,dataIndex:e})}),f(()=>{let e=o();e&&!e.isDisposed()&&(e.on(`highlight`,t.onHighlight),e.on(`downplay`,t.onDownplay),s(()=>{e.off(`highlight`,t.onHighlight),e.off(`downplay`,t.onDownplay)}))}),{...e,...t,checklist:n}},Ya=()=>{let{chartMounted:e,handleMouseEnter:t,handleMouseLeave:r,handleRemount:i,handleUnmount:a,hoveredIndex:o,setContainer:s,checklist:c}=Ja(),l=[{title:`DISPATCH BEHAVIOUR [hover table rows to test]`,items:c.dispatchItems},{title:`DISPOSE GUARD [unmount chart then hover table rows]`,items:c.disposeItems}];return n(D,{get children(){return[n(H,{class:`flex gap-20 items-start`,get children(){return[n(Wt,{title:`Hover a row - watch the chart react`,get children(){return n(Ca,{rowProps:e=>({onMouseEnter:()=>{t(e)},onMouseLeave:r}),headers:[`Month`,`Revenue`],data:qa})}}),n(Wt,{title:`Chart - no direct coupling to the table`,class:`w-full`,get children(){return n(E,{get when(){return e()},get fallback(){return n(za,{})},get children(){var e=Ga();return p(s,e),e}})}})]}}),n(V,{code:La,get children(){return[n(P,{sections:l}),n(G,{get children(){return[`hoveredIndex: `,(()=>{var e=Ka();return T(e,(()=>{var e=_(()=>o()===null);return()=>e()?`null`:String(o())})()),e})()]}}),n(Nt,{get children(){return n(N,{get onClick(){return e()?a:i},class:`mt-3`,get children(){return e()?`Unmount chart`:`Remount chart`}})}})]}})]}})},Xa=`import type { Component } from "solid-js";
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
`,Za=()=>{let[e,t]=l(null),[n,r]=l(!0),[i,a]=l(W),[o,s]=l(0),[c,u]=l(0),[d,f]=l(null),[p,m]=l(null),{instance:h}=ot(e,{theme:M.name,renderer:`canvas`,autoResize:!0});return{container:e,setContainer:t,instance:h,chartMounted:n,setChartMounted:r,salesData:i,setSalesData:a,randomiseCount:o,setRandomiseCount:s,finishedCount:c,setFinishedCount:u,renderedData:d,setRenderedData:f,disposedAfterUnmount:p,setDisposedAfterUnmount:m}},Qa=e=>{let t=gn(e,`data`);return Array.isArray(t)?t.filter(e=>typeof e==`number`):null},$a=e=>{let{instance:t,salesData:n,setSalesData:r,setRandomiseCount:i,setChartMounted:a,setFinishedCount:o,setRenderedData:s,setDisposedAfterUnmount:c}=e;return{randomise:()=>{i(R),r(n().map(()=>Math.round(Math.random()*300)))},toggleMounted:()=>{c(null),a(e=>!e)},logInstance:()=>{console.log(`raw instance:`,t())},handleFinished:()=>{o(R);let e=t();e&&!e.isDisposed()&&s(Qa(e))}}},eo=e=>{let{container:t,instance:n,chartMounted:r,salesData:i,randomiseCount:a,finishedCount:o,renderedData:s,disposedAfterUnmount:c}=e;return[{label:`createChart - instance is non-null while the container is mounted`,expected:()=>r()?`non-null`:`null`,actual:()=>n()===null?`null`:`non-null`,pass:()=>n()===null==!r()},{label:`instance.getDom() is the container element passed to createChart`,expected:()=>`true`,actual:()=>{let e=n();return e===null?`-`:String(e.getDom()===t())},pass:()=>n()===null||n()?.getDom()===t()},{label:`createChartEffect - rendered series data equals the salesData signal`,expected:()=>i().join(`, `),actual:()=>s()?.join(`, `)??`-`,pass:()=>!r()||s()===null||s()?.join()===i().join()},{label:`createChartEffect - every option change re-renders ('finished' fires)`,expected:()=>a()===0?`≥ 1`:`≥ 2`,actual:()=>String(o()),pass:()=>a()===0?o()>=1:o()>=2},{label:`Unmounting the container disposes the instance (isDisposed() === true)`,expected:()=>c()===null?`unmount the chart first`:`true`,actual:()=>c()===null?`-`:String(c()),pass:()=>c()!==!1}]},to=e=>{let{salesData:t}=e;return()=>z({tooltip:{trigger:`axis`},xAxis:{type:`category`,data:U},yAxis:{type:`value`},series:[{name:`Sales`,type:`bar`,data:t()}]})},no=y(`<div class="text-xs text-brand-400 border border-brand-300 rounded border-dashed bg-brand-100 flex chart-lg items-center justify-center">Container removed - createChart disposed the instance`),ro=y(`<div class=chart-lg>`),io=y(`<div>Instance: <strong>`),ao=y(`<div>Randomise presses: <strong></strong> / 'finished' events: <strong>`),oo=()=>no(),so=()=>{let e=Za(),t=$a(e),n=eo(e),r=to(e),{chartMounted:i,setContainer:a,instance:o,setDisposedAfterUnmount:c}=e;f(()=>{i()||a(null)}),dt(o,r);let l=null;return f(()=>{let e=o();if(e===null){l!==null&&c(l.isDisposed());return}l=e,e.on(`finished`,t.handleFinished),s(()=>{e.isDisposed()||e.off(`finished`,t.handleFinished)})}),{...e,...t,checklist:n}},co=()=>{let{checklist:e,chartMounted:t,finishedCount:r,instance:i,logInstance:a,randomise:o,randomiseCount:s,setContainer:c,toggleMounted:l}=so();return[n(H,{get children(){return n(Wt,{get children(){return n(E,{get when(){return t()},get fallback(){return n(oo,{})},get children(){var e=ro();return p(c,e),e}})}})}}),n(V,{code:Xa,get children(){return[n(P,{sections:[{items:e}]}),n(G,{get children(){return[(()=>{var e=io(),t=e.firstChild.nextSibling;return T(t,()=>i()?.getId()??`null`),e})(),(()=>{var e=ao(),t=e.firstChild.nextSibling,n=t.nextSibling.nextSibling;return T(t,s),T(n,r),e})()]}}),n(Nt,{get children(){return[n(N,{onClick:o,children:`Randomise data`}),n(N,{onClick:l,get children(){return t()?`Unmount chart`:`Remount chart`}}),n(N,{onClick:a,children:`Log instance to console`})]}})]}})]},lo=`import type { Component } from "solid-js";
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
`,uo=y(`<div class=mb-4><p class="text-xs mb-1"><code class=code-tag></code></p><img class="border border-neutral-300 max-w-full">`),fo=e=>{let{chart:t}=$e();return c(()=>{e.onProxy(t)}),null},po=e=>(()=>{var t=uo(),n=t.firstChild,i=n.firstChild,a=n.nextSibling;return T(i,()=>e.title),r(t=>{var n=e.url,r=e.title;return n!==t.e&&re(a,`src`,t.e=n),r!==t.t&&re(a,`alt`,t.t=r),t},{e:void 0,t:void 0}),t})(),mo=[120,200,150,80,70,110,130],ho=()=>{let[e,t]=l({}),[n,r]=l(null),[i,a]=l(null),[o,s]=l(null),[c,u]=l(null),[d,f]=l(mo),[p,m]=l([]),[h,g]=l(null),[_,v]=l(null);return{proxies:e,setProxies:t,connected:n,setConnected:r,canvasExport:i,setCanvasExport:a,svgExport:o,setSvgExport:s,guards:c,setGuards:u,ssrData:d,setSsrData:f,ssrExports:p,setSsrExports:m,roundTrip:h,setRoundTrip:g,click:_,setClick:v}},go=e=>new Promise((t,n)=>{let r=new Image;r.onload=()=>{t({width:r.naturalWidth,height:r.naturalHeight})},r.onerror=()=>{n(Error(`Image could not be decoded`))},r.src=e}),_o=e=>`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(e)}`,vo=`export-and-ssr-group`,yo=[50,50],bo=`#1e293b`,xo=e=>z({animation:!1,backgroundColor:bo,...e}),So=()=>xo({xAxis:{type:`category`,data:U},yAxis:{type:`value`},series:[{type:`bar`,data:W}]}),Co=()=>xo({xAxis:{type:`category`,data:U},yAxis:{type:`value`},series:un([{type:`line`,smooth:!0,data:Pn}])}),wo=()=>xo({xAxis:{type:`value`,min:0,max:100},yAxis:{type:`value`,min:0,max:100},series:[{type:`scatter`,symbolSize:14,data:[[10,20],[30,60],yo,[80,90]]}]}),To=()=>xo({xAxis:{type:`category`,data:U},yAxis:{type:`value`},series:un([{type:`line`,data:W}])}),Eo=e=>xo({xAxis:{type:`category`,data:U},yAxis:{type:`value`},series:[{type:`bar`,data:e}]}),Do=`#ffffff`,Oo=[1,1],ko=e=>{if(!Array.isArray(e)||e.length<2)return null;let t=e[0],n=e[1];return typeof t==`number`&&typeof n==`number`?[t,n]:null},Ao=e=>{try{return e(),!1}catch{return!0}},Y=e=>{let t=e.map(e=>e.getBoundingClientRect()),n=(e,n)=>Math.max(...t.map(e=>e[n]))-Math.min(...t.map(t=>t[e]));return{width:n(`left`,`right`),height:n(`top`,`bottom`)}},jo=e=>{let t=t=>n=>{e.setProxies(e=>({...e,[t]:n}))},n=()=>{let{bar:t,line:n}=e.proxies(),r=t?.getConnectedDataURL({type:`png`,pixelRatio:1,connectedBackgroundColor:Do}),i=[t?.getDom(),n?.getDom()].filter(e=>e!==void 0);r!==void 0&&go(r).then(t=>{e.setConnected({url:r,actual:t,expected:Y(i)})}).catch(()=>{e.setConnected(null)})},r=()=>{let t=e.proxies().svg,n=t?.renderToSVGString(),r=t?.renderToSVGString({useViewBox:!1});if(n===void 0||r===void 0)return;let i=t?.getWidth(),a=t?.getHeight();go(_o(n)).then(t=>{e.setSvgExport({svg:n,withoutViewBox:r,decoded:t,chart:{width:i??0,height:a??0}})}).catch(()=>{e.setSvgExport(null)})},i=()=>{let t=e.proxies().scatter,n=t?.renderToCanvas({backgroundColor:Do});if(t===void 0||n===void 0)return;let r=t.getDevicePixelRatio()??1;e.setCanvasExport({url:n.toDataURL(`image/png`),isCanvasElement:n instanceof HTMLCanvasElement,canvas:{width:n.width,height:n.height},expected:{width:(t.getWidth()??0)*r,height:(t.getHeight()??0)*r}})},a=()=>{let{bar:t,svg:n}=e.proxies();if(t===void 0||n===void 0)return;let r={svgOnCanvasThrows:Ao(()=>t.renderToSVGString()),canvasOnSvgThrows:Ao(()=>n.renderToCanvas())};e.setGuards(r)},o=()=>{let t=e.proxies().ssr?.renderToSVGString();t!==void 0&&go(_o(t)).then(n=>{e.setSsrExports(e=>[...e,{svg:t,decoded:n}].slice(-2))}).catch(()=>{e.setSsrExports([])})},s=()=>{e.setSsrData(e=>e.map(()=>Math.round(50+Math.random()*200))),o()},c=()=>{let t=e.proxies().scatter;if(t===void 0)return;let n=ko(t.convertToPixel({seriesIndex:0},yo)),r=n===null?null:ko(t.convertFromPixel({seriesIndex:0},n));n!==null&&r!==null&&e.setRoundTrip({data:yo,pixel:n,back:r,centerInside:t.containPixel({gridIndex:0},n),cornerInside:t.containPixel({gridIndex:0},Oo)})};return{register:t,runAll:()=>{n(),r(),i(),a(),o(),c()},exportConnected:n,exportSvg:r,exportCanvas:i,checkGuards:a,renderSsr:o,randomizeSsr:s,verifyRoundTrip:c,handleSurfaceClick:t=>{let n=e.proxies().scatter;if(n===void 0)return;let r=[t.offsetX,t.offsetY],i=ko(n.convertFromPixel({seriesIndex:0},r)),a=i===null?null:ko(n.convertToPixel({seriesIndex:0},i));i!==null&&a!==null&&e.setClick({pixel:r,data:i,inside:n.containPixel({gridIndex:0},r),roundTrip:a})}}},Mo=`data:image/png;base64,`,No=`pending`,Po=2,Fo=.001,Io=1e-6,X=({width:e,height:t})=>`${Math.round(e)} × ${Math.round(t)}`,Lo=(e,t,n)=>Math.abs(e.width-t.width)<=n&&Math.abs(e.height-t.height)<=n,Ro=(e,t)=>Math.max(Math.abs(e[0]-t[0]),Math.abs(e[1]-t[1])),zo=([e,t])=>e>=0&&e<=100&&t>=0&&t<=100,Bo=e=>{let{proxies:t,connected:n,canvasExport:r,svgExport:i,guards:a,roundTrip:o,click:s,ssrExports:c}=e,l=[{label:`getConnectedDataURL() returns a PNG data URL for the group`,expected:()=>`${Mo}...`,actual:()=>{let e=n();return e===null?No:`${e.url.slice(0,22)}...`},pass:()=>n()?.url.startsWith(Mo)??!0},{label:`Decoded image size equals the bounding box of the grouped charts only`,expected:()=>{let e=n();return e===null?`-`:X(e.expected)},actual:()=>{let e=n();return e===null?No:X(e.actual)},pass:()=>{let e=n();return e===null||Lo(e.actual,e.expected,Po)}}],u=[{label:`renderToSVGString() (svg renderer) returns a complete <svg> document`,expected:()=>`<svg ... </svg>`,actual:()=>{let e=i();return e===null?No:`${e.svg.slice(0,4)} ... ${e.svg.slice(-6)}`},pass:()=>{let e=i();return e===null||e.svg.startsWith(`<svg`)&&e.svg.trimEnd().endsWith(`</svg>`)}},{label:`renderToSVGString({ useViewBox: false }) drops the viewBox attribute`,expected:()=>`viewBox: yes / no`,actual:()=>{let e=i();if(e===null)return No;let t=e=>e.includes(`viewBox`)?`yes`:`no`;return`viewBox: ${t(e.svg)} / ${t(e.withoutViewBox)}`},pass:()=>{let e=i();return e===null||e.svg.includes(`viewBox`)&&!e.withoutViewBox.includes(`viewBox`)}},{label:`The SVG string decodes as an image of the chart's getWidth() x getHeight()`,expected:()=>{let e=i();return e===null?`-`:X(e.chart)},actual:()=>{let e=i();return e===null?No:X(e.decoded)},pass:()=>{let e=i();return e===null||Lo(e.decoded,e.chart,Po)}},{label:`Renderer guards: renderToSVGString on canvas and renderToCanvas on svg both throw`,expected:()=>`true / true`,actual:()=>{let e=a();return e===null?No:`${String(e.svgOnCanvasThrows)} / ${String(e.canvasOnSvgThrows)}`},pass:()=>{let e=a();return e===null||e.svgOnCanvasThrows&&e.canvasOnSvgThrows}},{label:`renderToCanvas() returns an HTMLCanvasElement of getWidth() x getDevicePixelRatio()`,expected:()=>{let e=r();return e===null?`-`:`canvas ${X(e.expected)}`},actual:()=>{let e=r();return e===null?No:`${e.isCanvasElement?`canvas`:`other`} ${X(e.canvas)}`},pass:()=>{let e=r();return e===null||e.isCanvasElement&&Lo(e.canvas,e.expected,1)}},{label:`getDevicePixelRatio() defaults to window.devicePixelRatio`,expected:()=>String(window.devicePixelRatio),actual:()=>String(t().bar?.getDevicePixelRatio()??`-`),pass:()=>t().bar?.getDevicePixelRatio()===window.devicePixelRatio},{label:`getDevicePixelRatio() honours the devicePixelRatio prop (pinned to 2)`,expected:()=>`2`,actual:()=>String(t().scatter?.getDevicePixelRatio()??`-`),pass:()=>t().scatter?.getDevicePixelRatio()===2}],d=[{label:`convertToPixel -> convertFromPixel is the identity on a data point`,expected:()=>{let e=o();return e===null?`-`:e.data.join(`, `)},actual:()=>{let e=o();return e===null?No:e.back.map(e=>e.toFixed(6)).join(`, `)},pass:()=>{let e=o();return e===null||Ro(e.data,e.back)<=Io}},{label:`containPixel: true at the data point's pixel, false at (1, 1) outside the grid`,expected:()=>`true / false`,actual:()=>{let e=o();return e===null?No:`${String(e.centerInside)} / ${String(e.cornerInside)}`},pass:()=>{let e=o();return e===null||e.centerInside===!0&&e.cornerInside===!1}},{label:`Click the scatter chart: containPixel agrees with the converted data domain`,expected:()=>{let e=s();return e===null?`click the scatter chart`:String(zo(e.data))},actual:()=>{let e=s();return e===null?`-`:String(e.inside)},pass:()=>{let e=s();return e===null||e.inside===zo(e.data)}},{label:`Click the scatter chart: pixel -> data -> pixel returns the clicked pixel`,expected:()=>{let e=s();return e===null?`-`:e.pixel.map(Math.round).join(`, `)},actual:()=>{let e=s();return e===null?`-`:e.roundTrip.map(Math.round).join(`, `)},pass:()=>{let e=s();return e===null||Ro(e.pixel,e.roundTrip)<=Fo}}],f=()=>c().at(-1);return{connectedItems:l,exportItems:u,coordinateItems:d,ssrItems:[{label:`isSSR(): true for the ssr chart, false for client charts`,expected:()=>`true / false`,actual:()=>`${String(t().ssr?.isSSR())} / ${String(t().svg?.isSSR())}`,pass:()=>t().ssr?.isSSR()===!0&&t().svg?.isSSR()===!1},{label:`SSR instance paints nothing into the DOM; a client svg chart does`,expected:()=>`ssr: 0, client: 1`,actual:()=>{let e=e=>t()[e]?.getDom()?.querySelectorAll(`svg, canvas`).length??0;return`ssr: ${e(`ssr`)}, client: ${e(`svg`)}`},pass:()=>{let e=e=>t()[e]?.getDom()?.querySelectorAll(`svg, canvas`).length??0;return e(`ssr`)===0&&e(`svg`)===1}},{label:`width / height props size the SSR instance (no DOM to measure)`,expected:()=>X({width:520,height:300}),actual:()=>X({width:t().ssr?.getWidth()??0,height:t().ssr?.getHeight()??0}),pass:()=>t().ssr?.getWidth()===520&&t().ssr?.getHeight()===300},{label:`renderToSVGString() on the SSR instance returns the drawn chart (<svg>, <path>)`,expected:()=>`<svg ... <path ...`,actual:()=>{let e=f();return e===void 0?No:`${e.svg.slice(0,4)}, ${e.svg.includes(`<path`)?`<path`:`no path`}`},pass:()=>{let e=f();return e===void 0||e.svg.startsWith(`<svg`)&&e.svg.includes(`<path`)}},{label:`The SSR string decodes as an <img> of the configured width x height`,expected:()=>X({width:520,height:300}),actual:()=>{let e=f();return e===void 0?No:X(e.decoded)},pass:()=>{let e=f();return e===void 0||Lo(e.decoded,{width:520,height:300},0)}},{label:`Changing the option and re-rendering yields a different SVG string`,expected:()=>`strings differ`,actual:()=>{let e=c().at(-2),t=c().at(-1);return e===void 0||t===void 0?`press Randomize`:e.svg===t.svg?`identical`:`strings differ`},pass:()=>{let e=c().at(-2),t=c().at(-1);return e===void 0||t===void 0||e.svg!==t.svg}}]}},Vo=y(`<div class="mb-6 gap-4 grid grid-cols-2">`),Ho=y(`<span>`),Uo=y(`<div>Last click pixel: <strong>`),Wo=y(`<div>Last click data: <strong>`),Go=y(`<div>containPixel: <strong>`),Ko=y(`<div>SSR string length: <strong>`),qo=()=>{let e=ho(),t=jo(e),n=Bo(e);return{...e,...t,checklist:n}},Jo=()=>{let{register:e,runAll:t,exportConnected:r,exportSvg:i,exportCanvas:a,checkGuards:o,renderSsr:s,randomizeSsr:c,verifyRoundTrip:l,handleSurfaceClick:u,connected:d,canvasExport:f,svgExport:p,ssrExports:m,ssrData:g,click:_,checklist:v}=qo(),y=[{label:`getConnectedDataURL`,action:r},{label:`renderToSVGString`,action:i},{label:`renderToCanvas`,action:a},{label:`renderer guards`,action:o},{label:`pixel round trip`,action:l},{label:`SSR: renderToSVGString`,action:s},{label:`SSR: randomize data`,action:c},{label:`Run all`,action:t}];return n(D,{get theme(){return M.name},get children(){return[n(H,{get children(){return[(()=>{var t=Vo();return T(t,n(F,{class:`chart-sm`,option:So,group:vo,containerProps:{title:`A - canvas, in the export group`},get children(){return n(fo,{get onProxy(){return e(`bar`)}})}}),null),T(t,n(F,{class:`chart-sm`,option:Co,group:vo,containerProps:{title:`B - canvas, in the export group`},get children(){return n(fo,{get onProxy(){return e(`line`)}})}}),null),t})(),(()=>{var r=Vo();return T(r,n(F,{class:`chart-sm`,option:wo,devicePixelRatio:2,onSurfaceEvents:{click:u},onEvents:{finished:l},containerProps:{title:`C - ungrouped, devicePixelRatio 2`,note:`Click anywhere, including outside the grid`},get children(){return n(fo,{get onProxy(){return e(`scatter`)}})}}),null),T(r,n(F,{class:`chart-sm`,option:To,renderer:`svg`,onEventsOnce:{finished:t},containerProps:{title:`D - svg renderer, ungrouped`},get children(){return n(fo,{get onProxy(){return e(`svg`)}})}}),null),r})(),n(_t,{class:`hidden`,option:()=>Eo(g()),renderer:`svg`,ssr:!0,width:520,height:300,autoResize:!1,get children(){return n(fo,{get onProxy(){return e(`ssr`)}})}})]}}),n(V,{code:lo,get children(){return[n(Ft,{get children(){var e=Ho();return T(e,()=>ln(`ssr: true gives an instance with no DOM, no events and no animation loop. Export it with renderToSVGString().`)),e}}),n(P,{get sections(){return[{title:`getConnectedDataURL - charts A and B (group)`,items:v.connectedItems},{title:`RENDER TO SVG / CANVAS`,items:v.exportItems},{title:`COORDINATES - convertFromPixel / containPixel`,items:v.coordinateItems},{title:`SSR - ssr: true, renderToSVGString`,items:v.ssrItems}]}}),n(G,{get children(){return[(()=>{var e=Uo(),t=e.firstChild.nextSibling;return T(t,()=>_()?.pixel.map(Math.round).join(`, `)??`-`),e})(),(()=>{var e=Wo(),t=e.firstChild.nextSibling;return T(t,()=>_()?.data.map(e=>e.toFixed(1)).join(`, `)??`-`),e})(),(()=>{var e=Go(),t=e.firstChild.nextSibling;return T(t,()=>String(_()?.inside??`-`)),e})(),(()=>{var e=Ko(),t=e.firstChild.nextSibling;return T(t,()=>m().at(-1)?.svg.length??`-`),e})()]}}),n(Nt,{get children(){return n(h,{each:y,children:({action:e,label:t})=>n(N,{onClick:e,children:t})})}}),n(E,{get when(){return d()},children:e=>n(po,{title:`getConnectedDataURL (A + B)`,get url(){return e().url}})}),n(E,{get when(){return p()},children:e=>n(po,{title:`renderToSVGString (chart D)`,get url(){return _o(e().svg)}})}),n(E,{get when(){return f()},children:e=>n(po,{title:`renderToCanvas (chart C)`,get url(){return e().url}})}),n(E,{get when(){return m().at(-1)},children:e=>n(po,{title:`SSR instance -> renderToSVGString -> <img>`,get url(){return _o(e().svg)}})})]}})]}})},Yo=`import type { Component } from "solid-js";
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
`,Xo=()=>{let[e,t]=l(`forecast`),[n,r]=l(0),[i,a]=l(0),[o,s]=l(0),[c,u]=ta({a:0,b:0,c:0});return{chartCGroup:e,setChartCGroup:t,zoomA:n,setZoomA:r,zoomB:i,setZoomB:a,zoomC:o,setZoomC:s,setBaseline:u,deltaA:()=>n()-c.a,deltaB:()=>i()-c.b,deltaC:()=>o()-c.c}},Zo=e=>{let{setBaseline:t,setChartCGroup:n,zoomA:r,zoomB:i,zoomC:a,setZoomA:o,setZoomB:s,setZoomC:c}=e,l=()=>{t({a:r(),b:i(),c:a()})};return{moveCToForecast:()=>{l(),n(`forecast`)},moveCToRevenue:()=>{l(),n(`revenue`)},onZoomA:()=>{o(R)},onZoomB:()=>{s(R)},onZoomC:()=>{c(R)}}},Qo=e=>{let{deltaA:t,deltaB:n,deltaC:r,chartCGroup:i}=e;return[{label:`Charts A and B always sync - zoom A propagates datazoom to B`,expected:()=>t()>0?`deltaA === deltaB`:`zoom Chart A to test`,actual:()=>t()>0?`A: +${t()}, B: +${n()}`:`-`,pass:()=>t()===0||t()===n()},{label:`Chart C isolated in 'forecast' - zoom A does NOT propagate to C`,expected:()=>i()===`revenue`?`N/A (C is in revenue)`:t()>0?`deltaC === 0`:`move C to forecast, then zoom A`,actual:()=>i()===`revenue`?`-`:t()>0?`C: +${r()}`:`-`,pass:()=>i()===`revenue`||t()===0||r()===0},{label:`All three charts sync when C joins 'revenue' - zoom A propagates to B and C`,expected:()=>i()===`forecast`?`N/A (C is in forecast)`:t()>0?`deltaA === deltaB === deltaC`:`move C to revenue, then zoom A`,actual:()=>i()===`forecast`?`-`:t()>0?`A: +${t()}, B: +${n()}, C: +${r()}`:`-`,pass:()=>i()===`forecast`||t()===0||t()===n()&&t()===r()}]},$o=()=>{let e=(e,t)=>()=>z({tooltip:{trigger:`axis`},xAxis:{type:`category`,data:Nn},yAxis:{type:`value`},dataZoom:[{type:`inside`},{type:`slider`}],series:[{type:e,smooth:!0,data:t}]});return{optionA:e(`bar`,In),optionB:e(`line`,Ln),optionC:e(`bar`,Rn)}},es=y(`<div>Chart A group: <strong>revenue</strong> (fixed)`),ts=y(`<div>Chart B group: <strong>revenue</strong> (fixed)`),ns=y(`<div>Chart C group: <strong></strong> (dynamic)`),rs=()=>{let e=Xo(),t=Zo(e),n=Qo(e),r=$o();return{checklist:n,...t,...r,...e}},is=()=>{let{chartCGroup:e,checklist:t,moveCToForecast:r,moveCToRevenue:i,onZoomA:a,onZoomB:o,onZoomC:s,optionA:c,optionB:l,optionC:u}=rs();return n(D,{get theme(){return M.name},get children(){return[n(H,{class:`gap-4 grid grid-cols-3`,get children(){return[n(F,{containerProps:{title:`Chart A - group: revenue (fixed)`},option:c,group:`revenue`,class:`chart-sm`,onEvents:{datazoom:a}}),n(F,{containerProps:{title:`Chart B - group: revenue (fixed)`},option:l,group:`revenue`,class:`chart-sm`,onEvents:{datazoom:o}}),n(F,{get containerProps(){return{title:`Chart C - group: ${e()} (dynamic)`}},option:u,group:e,class:`chart-sm`,onEvents:{datazoom:s}})]}}),n(V,{code:Yo,get children(){return[n(P,{sections:[{items:t}]}),n(G,{get children(){return[es(),ts(),(()=>{var t=ns(),n=t.firstChild.nextSibling;return T(n,e),t})()]}}),n(Nt,{get children(){return[n(N,{onClick:i,get disabled(){return e()===`revenue`},children:`Move C → revenue`}),n(N,{onClick:r,get disabled(){return e()===`forecast`},children:`Move C → forecast`})]}})]}})]}})},as=`import type { Component } from "solid-js";

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
`,os=y(`<span class="text-xs text-brand-600 font-mono px-2 py-0.5 panel rounded w-fit block whitespace-nowrap">`),ss=()=>{let{instance:e}=$e(),[t,n]=l(`-`);return f(()=>{let t=e();t&&!t.isDisposed()&&n(t.group||`(none)`)}),(()=>{var e=os();return T(e,()=>`group: ${t()}`),e})()},cs=y(`<div class="flex flex-col w-full items-center">`),ls=e=>(()=>{var r=cs();return T(r,n(_t,t(e,{get children(){return n(ss,{})}}))),r})(),us=`(none)`,ds=()=>{let[e,t]=l(!0),[n,r]=l(0),[i,a]=l(0),[o,s]=l(0),[c,u]=l(0),[d,f]=l(0),[p,m]=l(null),[h,g]=l(null),[_,v]=l(null),[y,b]=l(null);return{isConnected:e,setIsConnected:t,zoomA:n,setZoomA:r,zoomB:i,setZoomB:a,zoomC:o,setZoomC:s,zoomD:c,setZoomD:u,zoomBSnapshot:d,setZoomBSnapshot:f,groupA:p,setGroupA:m,groupB:h,setGroupB:g,groupC:_,setGroupC:v,groupD:y,setGroupD:b}},fs=(e,t)=>{let{setIsConnected:n,setZoomBSnapshot:r,zoomB:i,setZoomA:a,setZoomB:o,setZoomC:s,setZoomD:c,setGroupA:l,setGroupB:u,setGroupC:d,setGroupD:f}=e;return{handleDisconnect:()=>{he(t),r(i()),n(!1)},handleReconnect:()=>{Re(t),n(!0)},handleZoomA:()=>{a(R)},handleZoomB:()=>{o(R)},handleZoomC:()=>{s(R)},handleZoomD:()=>{c(R)},handleInitA:e=>{l(e.group||`(none)`)},handleInitB:e=>{u(e.group||`(none)`)},handleInitC:e=>{d(e.group||`(none)`)},handleInitD:e=>{f(e.group||`(none)`)}}},ps=(e,t)=>{let{isConnected:n,zoomA:r,zoomB:i,zoomBSnapshot:a,zoomC:o,zoomD:s,groupA:c,groupB:l,groupC:u,groupD:d}=e;return{groupItems:[{label:`Charts A and B inherit group "${t}" from SolidEChartProvider`,expected:()=>`"${t}"`,actual:()=>`A: ${c()??`-`}, B: ${l()??`-`}`,pass:()=>c()===t&&l()===t},{label:`Chart D overrides provider group "${t}" with "other-group"`,expected:()=>`"other-group"`,actual:()=>d()??`-`,pass:()=>d()===`other-group`},{label:`Chart C has no group - unaffected by any group sync`,expected:()=>us,actual:()=>u()??`-`,pass:()=>u()===us}],syncItems:[{label:`Connected: zooming Chart A also fires datazoom on Chart B`,expected:()=>n()?`A and B counts match`:`N/A (disconnected)`,actual:()=>`A: ${r()}, B: ${i()}`,pass:()=>r()===0||!n()||r()===i()},{label:`Disconnected: zooming Chart A does NOT propagate to Chart B`,expected:()=>n()?`N/A (connected)`:`B frozen at ${a()}`,actual:()=>n()?`-`:`B: ${i()} (was ${a()} at disconnect)`,pass:()=>n()||r()===0?!0:i()===a()},{label:`Isolated Chart C (no group): datazoom count stays 0 while A or B is zoomed`,expected:()=>`0 (do not zoom C itself)`,actual:()=>String(o()),pass:()=>o()===0},{label:`Isolated Chart D (other-group): datazoom count stays 0 while A or B is zoomed`,expected:()=>`0 (do not zoom D itself)`,actual:()=>String(s()),pass:()=>s()===0}]}},ms=()=>({barOption:()=>z({tooltip:{trigger:`axis`},xAxis:{type:`category`,data:Xn},yAxis:{type:`value`},dataZoom:[{type:`inside`},{type:`slider`}],series:[{name:`Revenue`,type:`bar`,data:Zn}]}),lineOption:()=>z({tooltip:{trigger:`axis`},xAxis:{type:`category`,data:Xn},yAxis:{type:`value`},dataZoom:[{type:`inside`},{type:`slider`}],series:[{name:`Expenses`,type:`line`,smooth:!0,data:Qn}]})}),hs=y(`<div class="mb-6 gap-4 grid grid-cols-2">`),gs=y(`<span>Status: <strong>`),_s=()=>{let e=ds(),t=fs(e,$n),n=ps(e,$n),r=ms();return{checklist:n,...t,...r,...e}},vs=()=>{let{handleDisconnect:e,handleReconnect:t,handleZoomA:r,handleZoomB:i,handleZoomC:a,handleZoomD:o,handleInitA:s,handleInitB:c,handleInitC:l,handleInitD:u,checklist:d,isConnected:f,barOption:p,lineOption:m}=_s();return[n(H,{get children(){return[n(D,{group:$n,get theme(){return M.name},get children(){var e=hs();return T(e,n(F,{class:`chart-sm`,option:p,onInit:s,onEvents:{datazoom:r},chart:ls,containerProps:{title:`Chart A - inherits group from provider`}}),null),T(e,n(F,{class:`chart-sm`,option:m,onInit:c,onEvents:{datazoom:i},chart:ls,containerProps:{title:`Chart B - inherits group from provider`}}),null),e}}),(()=>{var e=hs();return T(e,n(F,{class:`chart-sm`,option:p,onInit:l,onEvents:{datazoom:a},chart:ls,get theme(){return M.name},containerProps:{title:`Chart C - no group (must NOT sync with A or B)`}}),null),T(e,n(D,{group:$n,get children(){return n(F,{class:`chart-sm`,option:m,group:`other-group`,onInit:u,onEvents:{datazoom:o},chart:ls,get theme(){return M.name},containerProps:{title:`Chart D - provider sets "${$n}" but per-chart overrides with "other-group"`}})}}),null),e})()]}}),n(V,{code:as,get children(){return[n(P,{get sections(){return[{title:`GROUP ASSIGNMENT`,items:d.groupItems},{title:`DATAZOOM SYNC - use slider or scroll to zoom a chart`,items:d.syncItems}]}}),n(G,{get children(){var e=gs(),t=e.firstChild.nextSibling;return T(t,()=>f()?`connected ✓`:`disconnected ×`),e}}),n(Nt,{get children(){return[n(N,{onClick:e,get disabled(){return!f()},children:`Disconnect group`}),n(N,{onClick:t,get disabled(){return f()},children:`Reconnect group`})]}})]}})]},ys=`import type { Component } from "solid-js";
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
`,bs=y(`<div><p class="text-xs text-brand-800 font-bold mb-1.5"></p><div class="flex flex-wrap gap-2">`),xs=e=>(()=>{var t=bs(),r=t.firstChild,i=r.nextSibling;return T(r,()=>e.title),T(i,n(h,{get each(){return e.actions},children:({label:e,onClick:t})=>n(N,{onClick:t,children:e})})),t})(),Ss=[1,2,3,4,5],Cs=e=>Ss.some(t=>t===e),ws={1:{title:`Chart 1 - prop on <SolidEChart>`,note:`initOnVisible`,short:`prop on <SolidEChart>`,deferred:!0},2:{title:`Chart 2 - inherited from <SolidEChartProvider>`,note:`provider: initOnVisible, chart: nothing`,short:`inherited from provider`,deferred:!0},3:{title:`Chart 3 - provider says true, chart says false`,note:`provider: initOnVisible, chart: initOnVisible={false}`,short:`provider true, prop false`,deferred:!1},4:{title:`Chart 4 - createChart primitive`,note:`createChart(container, { initOnVisible: true })`,short:`createChart primitive`,deferred:!0},5:{title:`Chart 5 - control`,note:`no initOnVisible anywhere`,short:`control`,deferred:!1}},Ts=y(`<div>`),Es=e=>(()=>{var t=Ts();return T(t,n(Wt,{get title(){return ws[e.id].title},get note(){return ws[e.id].note},get children(){return e.children}})),r(()=>re(t,`data-chart-id`,e.id)),t})(),Ds=()=>({initCount:0,initAt:`-`,hasInstance:!1,seen:!1}),Os=()=>({1:Ds(),2:Ds(),3:Ds(),4:Ds(),5:Ds()}),ks=()=>{let[e,t]=ta(Os()),[n,r]=l(1),[i,a]=l();return{status:e,setStatus:t,epoch:n,setEpoch:r,panel:i,setPanel:a}},As=e=>{let{status:t,setStatus:n,panel:r,setEpoch:i}=e,a=(e,t)=>{n(e,`hasInstance`,t!==null&&!t.isDisposed())},o=e=>t=>{n(e,e=>({initCount:e.initCount+1,initAt:e.initCount===0?Zt():e.initAt}))},s=e=>t=>{a(e,t)},c=()=>{let e=r();if(!e)return;let i=e.getBoundingClientRect(),a=Math.max(i.top,0),o=Math.min(i.bottom,window.innerHeight),s=e.querySelectorAll(`[data-chart-id]`);for(let e of s){let r=Number(e.dataset.chartId);if(!Cs(r)||t[r].seen)continue;let i=e.getBoundingClientRect();i.bottom>=a&&i.top<=o&&n(r,`seen`,!0)}};return{initFor:o,refFor:s,reportInstance:a,updateSeen:c,scrollToChart:e=>{let t=r(),n=t?.querySelector(`[data-chart-id="${String(e)}"]`);t&&n&&t.scrollTo({top:n.offsetTop-16,behavior:`instant`})},remount:()=>{d(()=>{n(aa(Os())),i(e=>e+1)}),r()?.scrollTo({top:0,behavior:`instant`}),c()}}},js=e=>e?`instance`:`no instance`,Ms=e=>{let{status:t}=e,n=(e,t)=>Ss.filter(e).map(t);return{deferred:n(e=>ws[e].deferred,e=>({label:`Chart ${String(e)} (${ws[e].short}): instance only once scrolled into view`,expected:()=>js(t[e].seen),actual:()=>js(t[e].hasInstance),pass:()=>t[e].hasInstance===t[e].seen})),immediate:n(e=>!ws[e].deferred,e=>({label:`Chart ${String(e)} (${ws[e].short}): instance at mount, below the fold`,expected:()=>js(!0),actual:()=>js(t[e].hasInstance),pass:()=>t[e].hasInstance})),initCount:n(()=>!0,e=>({label:`Chart ${String(e)} (${ws[e].short}): onInit fires exactly once`,expected:()=>t[e].hasInstance?`1`:`0`,actual:()=>String(t[e].initCount),pass:()=>t[e].initCount===+!!t[e].hasInstance}))}},Ns=e=>z({tooltip:{trigger:`axis`},xAxis:{type:`category`,data:U},yAxis:{type:`value`},series:[{type:`bar`,data:W.map(t=>t+e*60)}]}),Ps=y(`<div>`),Fs=e=>{let[t,n]=l(null),{instance:i}=ot(t,{initOnVisible:!0});return dt(i,()=>e.option()),f(S(i,t=>{e.onInstance(t),t&&e.onInit(t)})),(()=>{var t=Ps();return p(n,t),r(()=>C(t,e.class)),t})()},Is=y(`<div class="border border-brand-300/50 rounded-lg h-96 relative overflow-y-auto">`),Ls=y(`<div class=mb-4>`),Rs=y(`<div class="p-4 flex flex-col gap-16"><div class="text-sm text-brand-300 flex shrink-0 h-112 items-center justify-center">Scroll down: every chart below starts outside the panel`),zs=y(`<div><strong></strong><strong>`),Bs=()=>{let e=ks(),t=As(e),n=Ms(e);return{...e,...t,checklist:n}},Vs=()=>{let e=Bs();c(()=>{e.updateSeen(),window.addEventListener(`scroll`,e.updateSeen,{capture:!0,passive:!0}),s(()=>{window.removeEventListener(`scroll`,e.updateSeen,{capture:!0})})});let t=Ss.map(t=>({label:`Chart ${String(t)}`,onClick:()=>{e.scrollToChart(t)}}));return[n(H,{get children(){var t=Is(),r=e.setPanel;return typeof r==`function`?p(r,t):e.setPanel=t,T(t,n(E,{get when(){return e.epoch()},keyed:!0,children:t=>(()=>{var r=Rs();return r.firstChild,re(r,`data-epoch`,t),T(r,n(Es,{id:1,get children(){return n(_t,{class:`chart-sm`,option:()=>Ns(1),initOnVisible:!0,ref(t){var n=e.refFor(1);typeof n==`function`&&n(t)},get onInit(){return e.initFor(1)}})}}),null),T(r,n(D,{initOnVisible:!0,get children(){return[n(Es,{id:2,get children(){return n(_t,{class:`chart-sm`,option:()=>Ns(2),ref(t){var n=e.refFor(2);typeof n==`function`&&n(t)},get onInit(){return e.initFor(2)}})}}),n(Es,{id:3,get children(){return n(_t,{class:`chart-sm`,option:()=>Ns(3),initOnVisible:!1,ref(t){var n=e.refFor(3);typeof n==`function`&&n(t)},get onInit(){return e.initFor(3)}})}})]}}),null),T(r,n(Es,{id:4,get children(){return n(Fs,{class:`chart-sm`,option:()=>Ns(4),get onInit(){return e.initFor(4)},onInstance:t=>{e.reportInstance(4,t)}})}}),null),T(r,n(Es,{id:5,get children(){return n(_t,{class:`chart-sm`,option:()=>Ns(5),ref(t){var n=e.refFor(5);typeof n==`function`&&n(t)},get onInit(){return e.initFor(5)}})}}),null),r})()})),t}}),n(V,{code:ys,get children(){return[n(P,{get sections(){return[{title:`DEFERRED - initOnVisible is true`,items:e.checklist.deferred},{title:`IMMEDIATE - initOnVisible is false or unset`,items:e.checklist.immediate},{title:`onInit - once per instance`,items:e.checklist.initCount}]}}),n(G,{get children(){return n(h,{each:Ss,children:t=>(()=>{var n=zs(),r=n.firstChild,i=r.nextSibling;return T(n,()=>`Chart ${String(t)} (${ws[t].short}): `,r),T(r,()=>e.status[t].hasInstance?`instance ✓`:`no instance ×`),T(n,()=>`, in view yet: ${e.status[t].seen?`yes`:`no`}, onInit ${String(e.status[t].initCount)}x, first at `,i),T(i,()=>e.status[t].initAt),n})()})}}),(()=>{var e=Ls();return T(e,n(xs,{title:`Scroll the panel to`,actions:t})),e})(),n(Nt,{get children(){return n(N,{get onClick(){return e.remount},children:`Remount charts and reset counters`})}})]}})]},Hs=`import type { Component } from "solid-js";
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
`,Us=e=>{let t={unset:void 0,true:!0,false:!1}[e.coarsePointer];return{locale:e.locale,devicePixelRatio:e.devicePixelRatio,useDirtyRect:e.useDirtyRect,useCoarsePointer:t,pointerSize:e.pointerSizeEnabled?e.pointerSize:void 0,width:e.fixedSize?e.width:void 0,height:e.fixedSize?e.height:void 0,resizeDebounce:e.resizeDebounce}},Ws=()=>{let[e,t]=ta({renderer:`canvas`,locale:`EN`,devicePixelRatio:1,coarsePointer:`unset`,pointerSizeEnabled:!1,pointerSize:16,useDirtyRect:!1,fixedSize:!1,width:480,height:240,resizeDebounce:100}),[n,r]=l(Us(e)),[i,a]=l(1),[o,s]=l(!1),[c,u]=l(null),[d,f]=l(0),[p,m]=l(0),[h,g]=l(0),[_,v]=l(null);return{controls:e,setControls:t,init:n,setInit:r,mountId:i,setMountId:a,narrow:o,setNarrow:s,readout:c,setReadout:u,initCount:d,setInitCount:f,reInitCount:p,setReInitCount:m,switchCount:h,setSwitchCount:g,resizeLatency:_,setResizeLatency:v}},Gs=[5,5],Ks=`#e5edf9`,qs=()=>({animation:!1,toolbox:{feature:{saveAsImage:{},restore:{}},iconStyle:{borderColor:Ks}},xAxis:{type:`value`,min:0,max:10,...Tt},yAxis:{type:`value`,min:0,max:10,...Tt},series:[{type:`scatter`,symbolSize:10,data:[Gs]}]}),Js=90,Ys={EN:`Save as Image`,ZH:`保存为图片`},Xs=e=>typeof e==`object`&&!!e,Zs=e=>{let t=e.getOption().toolbox,n=Array.isArray(t)?t[0]:t;if(!Xs(n)||!Xs(n.feature))return``;let r=n.feature.saveAsImage;return Xs(r)&&typeof r.title==`string`?r.title:``},Qs=e=>{let t=e.convertToPixel({seriesIndex:0},Gs);if(!Array.isArray(t))return-1;let[n,r]=t,i=e.getZr(),a=-1;for(let e=0;e<=Js;e+=1)i.findHover(n+e,r)?.target&&(a=e);return a},$s=e=>{let t=e.getDom(),n=t.querySelector(`canvas`);return{devicePixelRatio:e.getDevicePixelRatio(),width:e.getWidth(),height:e.getHeight(),containerWidth:t.clientWidth,containerHeight:t.clientHeight,canvasWidth:n?n.width:null,saveTitle:Zs(e),hitRadius:Qs(e)}},ec=e=>{let{controls:t,setControls:n,setInit:r,setMountId:i,setNarrow:a,setReadout:o,setInitCount:s,setReInitCount:c,setSwitchCount:l,setResizeLatency:u}=e,f=null,p=0,m=e=>{e.isDisposed()||o($s(e))};return{handleInit:e=>{f=e,s(R),m(e)},handleReInit:e=>{f=e,c(R),m(e)},handleDispose:()=>{f=null},handleFinished:(e,t)=>{m(t)},handleResize:()=>{u(Math.round(performance.now()-p)),f&&m(f)},toggleRenderer:()=>{l(R),n(`renderer`,e=>e===`canvas`?`svg`:`canvas`)},toggleContainerWidth:()=>{p=performance.now(),u(null),a(e=>!e)},remount:()=>{d(()=>{r(Us(t)),o(null),s(0),c(0),l(0),u(null),i(R)})}}},tc=`-`,nc=`n/a (svg)`,rc=44,ic=4,ac=1,oc=50,sc=()=>`ontouchstart`in window,cc=e=>{let t=e.useCoarsePointer??sc(),n=e.pointerSize??rc;return!t||n<=0?5:5+ic*(Math.ceil(n/8)-1)},lc=(e,t,n=ac)=>Math.abs(e-t)<=n,uc=e=>{let{init:t,readout:n,initCount:r,reInitCount:i,switchCount:a,resizeLatency:o}=e,s=()=>n()?.canvasWidth!=null;return[{title:`INIT-ONLY PROPS - THE INSTANCE KEEPS ITS CREATION VALUES`,items:[{label:`devicePixelRatio - the instance keeps the value from creation`,expected:()=>s()?String(t().devicePixelRatio):nc,actual:()=>{let e=n();return e?s()?String(e.devicePixelRatio):nc:tc},pass:()=>{let e=n();return e?!s()||lc(e.devicePixelRatio,t().devicePixelRatio,.001):!1}},{label:`Canvas backing store = chart width x devicePixelRatio (physical pixels)`,expected:()=>{let e=n();return!e||!s()?nc:String(Math.round(e.width*t().devicePixelRatio))},actual:()=>{let e=n();return e?.canvasWidth==null?nc:String(e.canvasWidth)},pass:()=>{let e=n();return e?e.canvasWidth===null||lc(e.canvasWidth,e.width*t().devicePixelRatio):!1}},{label:`locale - default toolbox titles come from the init-time locale`,expected:()=>Ys[t().locale],actual:()=>n()?.saveTitle??tc,pass:()=>n()?.saveTitle===Ys[t().locale]},{label:`width / height - fixed at init, otherwise the container size`,expected:()=>{let{width:e,height:r}=t();if(e!==void 0&&r!==void 0)return`${e} x ${r}`;let i=n();return i?`${i.containerWidth} x ${i.containerHeight}`:tc},actual:()=>{let e=n();return e?`${e.width} x ${e.height}`:tc},pass:()=>{let e=n();if(!e)return!1;let{width:r,height:i}=t();return r!==void 0&&i!==void 0?e.width===r&&e.height===i:lc(e.width,e.containerWidth)&&lc(e.height,e.containerHeight)}},{label:`useCoarsePointer / pointerSize - hit area around the 5px probe point`,expected:()=>`${cc(t())} px`,actual:()=>{let e=n();return e?`${e.hitRadius} px`:tc},pass:()=>{let e=n();return e!==null&&lc(e.hitRadius,cc(t()))}},{label:`resizeDebounce - resize callback waits the init-time delay`,expected:()=>`≥ ${t().resizeDebounce} ms`,actual:()=>{let e=o();return e===null?`resize the container`:`${e} ms`},pass:()=>{let n=o();if(n===null)return!0;let{resizeDebounce:r}=t(),i=e.controls.resizeDebounce,a=i>r+oc?n<i:!0;return n>=r&&a}}]},{title:`WHAT RECREATES THE INSTANCE`,items:[{label:`onInit fires once per mounted component`,expected:()=>`1`,actual:()=>String(r()),pass:()=>r()===1},{label:`Only the renderer reinits - onReInit count === renderer switches`,expected:()=>String(a()),actual:()=>String(i()),pass:()=>i()===a()}]}]},dc=`unset`,fc=`no public readout`,pc=`-`,mc=e=>e===void 0?dc:String(e),hc=(e,t)=>e===void 0||t===void 0?`container`:`${e} x ${t}`,gc=(e,t,n,r)=>[{name:`devicePixelRatio`,now:mc(e.devicePixelRatio),atInit:mc(t.devicePixelRatio),instance:n?mc(n.devicePixelRatio):pc},{name:`locale`,now:e.locale,atInit:t.locale,instance:n?`"${n.saveTitle}"`:pc},{name:`useCoarsePointer`,now:mc(e.useCoarsePointer),atInit:mc(t.useCoarsePointer),instance:n?`hit radius ${n.hitRadius} px`:pc},{name:`pointerSize`,now:mc(e.pointerSize),atInit:mc(t.pointerSize),instance:n?`hit radius ${n.hitRadius} px`:pc},{name:`useDirtyRect`,now:mc(e.useDirtyRect),atInit:mc(t.useDirtyRect),instance:fc},{name:`width x height`,now:hc(e.width,e.height),atInit:hc(t.width,t.height),instance:n?`chart ${n.width} x ${n.height} in container ${n.containerWidth} x ${n.containerHeight}`:pc},{name:`resizeDebounce`,now:`${e.resizeDebounce} ms`,atInit:`${t.resizeDebounce} ms`,instance:r===null?fc:`last resize callback after ${r} ms`}],_c=e=>()=>gc(Us(e.controls),e.init(),e.readout(),e.resizeLatency()),vc=y(`<div>`),yc=y(`<div class="mb-4 flex flex-wrap gap-2 items-center">`),bc=y(`<div class="gap-x-4 grid grid-cols-[auto_auto_auto_1fr]"><strong>prop</strong><strong>now</strong><strong>at creation</strong><strong>live instance reports`),xc=y(`<span>`);ft([Fe]);var Sc=[{value:`EN`,label:`EN`},{value:`ZH`,label:`ZH`}],Cc=[{value:`unset`,label:`unset`},{value:`true`,label:`true`},{value:`false`,label:`false`}],wc=()=>{let e=Ws(),t=ec(e),n=uc(e),r=_c(e);return{...e,...t,checklist:n,rows:r,option:qs}},Tc=()=>{let{controls:e,setControls:t,mountId:i,narrow:a,checklist:o,rows:s,option:c,handleInit:l,handleReInit:u,handleDispose:d,handleFinished:f,handleResize:p,toggleRenderer:m,toggleContainerWidth:g,remount:_}=wc(),v=()=>Us(e),y=t=>n(F,{containerProps:{title:`Hit-test probe + locale-dependent toolbox`,note:`hover the toolbox icons for the localized titles`},option:c,renderer:()=>e.renderer,locale:()=>v().locale,devicePixelRatio:()=>v().devicePixelRatio,useDirtyRect:()=>v().useDirtyRect,useCoarsePointer:()=>v().useCoarsePointer,pointerSize:()=>v().pointerSize,width:()=>v().width,height:()=>v().height,resizeDebounce:()=>v().resizeDebounce,class:`chart-md`,"data-mount-id":t,onInit:l,onReInit:u,onDispose:d,onResize:p,onEvents:{finished:f}});return n(D,{get theme(){return M.name},get children(){return[n(H,{get children(){var e=vc();return T(e,n(E,{get when(){return i()},keyed:!0,children:y})),r(()=>C(e,At(`mx-auto`,a()?`w-3/5`:`w-full`))),e}}),n(V,{code:Hs,get children(){return[n(kr,{title:`Props passed to the chart (edit freely - the live instance ignores them)`,get children(){return[n(Mr,{label:`devicePixelRatio`,get value(){return e.devicePixelRatio},min:1,max:3,step:.5,onChange:e=>{t(`devicePixelRatio`,e)}}),n(jr,{label:`locale`,options:Sc,get value(){return e.locale},onChange:e=>{t(`locale`,e)}}),n(jr,{label:`useCoarsePointer`,options:Cc,get value(){return e.coarsePointer},onChange:e=>{t(`coarsePointer`,e)}}),n(Ar,{label:`pointerSize set`,get checked(){return e.pointerSizeEnabled},onChange:e=>{t(`pointerSizeEnabled`,e)}}),n(Nr,{label:`pointerSize`,get value(){return e.pointerSize},min:1,max:100,step:4,get disabled(){return!e.pointerSizeEnabled},onChange:e=>{t(`pointerSize`,e)}}),n(Ar,{label:`useDirtyRect`,get checked(){return e.useDirtyRect},onChange:e=>{t(`useDirtyRect`,e)}}),n(Ar,{label:`fixed width / height`,get checked(){return e.fixedSize},onChange:e=>{t(`fixedSize`,e)}}),n(Nr,{label:`width`,get value(){return e.width},min:200,max:1200,step:40,get disabled(){return!e.fixedSize},onChange:e=>{t(`width`,e)}}),n(Nr,{label:`height`,get value(){return e.height},min:120,max:352,step:20,get disabled(){return!e.fixedSize},onChange:e=>{t(`height`,e)}}),n(Nr,{label:`resizeDebounce (ms)`,get value(){return e.resizeDebounce},min:0,max:1e3,step:100,onChange:e=>{t(`resizeDebounce`,e)}})]}}),(()=>{var t=yc();return T(t,n(N,{onClick:g,children:`Resize container (100% <-> 60%)`}),null),T(t,n(N,{onClick:m,get children(){return`Switch to ${e.renderer===`canvas`?`SVG`:`canvas`} renderer`}}),null),T(t,n(N,{onClick:_,children:`Remount chart (apply the props above)`}),null),t})(),n(P,{sections:o}),n(G,{get children(){var e=bc();return e.firstChild.nextSibling.nextSibling.nextSibling,T(e,n(h,{get each(){return s()},children:e=>[(()=>{var t=xc();return T(t,()=>e.name),t})(),(()=>{var t=xc();return T(t,()=>e.now),t})(),(()=>{var t=xc();return T(t,()=>e.atInit),t})(),(()=>{var t=xc();return T(t,()=>e.instance),t})()]}),null),e}})]}})]}})},Ec=`import type { Component } from "solid-js";
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
`,Dc=()=>{let e={chartInstance:null,streamIntervalId:null,appendedCount:0},[t,n]=l(0),[r,i]=l(!1),[a,o]=l(!1),[s,c]=l(0),[u,d]=l(!1),[f,p]=l(0),[m,h]=l(null);return{refs:e,pointCount:t,setPointCount:n,streaming:r,setStreaming:i,loading:a,setLoading:o,initCount:s,setInitCount:c,doneStreaming:u,setDoneStreaming:d,resetCount:f,setResetCount:p,dataLengthAfterReset:m,setDataLengthAfterReset:h}},Oc=e=>{let t=gn(e,`data`);return Array.isArray(t)?t.length:null},kc=(e,t,n,r)=>{let{refs:i}=e,a=t(),o=t=>{i.chartInstance=t,e.setInitCount(R),t.setOption(a)},s=()=>{i.streamIntervalId&&=(clearInterval(i.streamIntervalId),null),e.setStreaming(!1)};return{handleInit:o,resetChart:()=>{s(),i.appendedCount=0,e.setPointCount(0),e.setLoading(!1),e.setDoneStreaming(!1);let t=i.chartInstance;t&&!t.isDisposed()&&(t.setOption(a,{notMerge:!0}),e.setDataLengthAfterReset(Oc(t))),e.setResetCount(R)},startStreaming:()=>{e.streaming()||(e.setStreaming(!0),e.setLoading(!1),i.streamIntervalId=setInterval(()=>{if(!i.chartInstance||i.chartInstance.isDisposed())return;if(i.appendedCount>=n){s(),e.setDoneStreaming(!0),e.setLoading(!1);return}let t=Yt(i.appendedCount,r);i.chartInstance.appendData({seriesIndex:0,data:t}),i.appendedCount+=t.length,e.setPointCount(i.appendedCount),i.appendedCount===r&&e.setLoading(!1)},100))},stopStreaming:()=>{s(),e.setLoading(!0)}}},Ac=(e,t,n)=>{let{initCount:r,pointCount:i,doneStreaming:a,resetCount:o,dataLengthAfterReset:s}=e;return[{label:`onInit fires once - start / pause / reset reuse the same instance`,expected:()=>`1`,actual:()=>String(r()),pass:()=>r()===1},{label:`appendData streams whole chunks - points streamed is a multiple of the chunk size`,expected:()=>`multiple of ${n}, at most ${t}`,actual:()=>String(i()),pass:()=>i()%n===0&&i()<=t},{label:`Streaming stops at the axis extent - appendData cannot grow the axes`,expected:()=>a()?String(t):`${t} once done`,actual:()=>String(i()),pass:()=>!a()||i()===t},{label:`Reset - setOption({ notMerge: true }) clears the streamed series data`,expected:()=>o()===0?`press Reset`:`0`,actual:()=>{let e=s();return e===null?`-`:String(e)},pass:()=>s()===null||s()===0}]},jc=e=>()=>z({animation:!1,tooltip:{trigger:`axis`},xAxis:{type:`value`,min:0,max:e},yAxis:{type:`value`,min:-150,max:150},series:[{type:`line`,showSymbol:!1,data:[]}]}),Mc=y(`<span>`),Nc=y(`<div>Mode: <strong>manual</strong> (option prop omitted - no reactive binding)`),Pc=y(`<div>Points streamed: <strong>`),Fc=y(`<div>Init count: <strong></strong> (must stay at 1)`),Ic=y(`<div>Streaming: <strong>`),Lc=()=>{let e=Dc(),t=kc(e,jc(200),200,5),n=Ac(e,200,5);return s(t.stopStreaming),{...e,...t,checklist:n}},Rc=()=>{let{pointCount:e,initCount:t,streaming:r,doneStreaming:i,startStreaming:a,stopStreaming:o,resetChart:s,handleInit:c,loading:l,checklist:u}=Lc();return n(D,{get theme(){return M.name},get children(){return[n(H,{get children(){return n(F,{onInit:c,loading:l,loadingOptions:{text:`Waiting for data chunk...`},class:`h-380px w-full`,autoResize:!0})}}),n(V,{code:Ec,get children(){return[n(P,{sections:[{items:u}]}),n(Ft,{get children(){var e=Mc();return T(e,()=>ln(`No signals involved in rendering. Data streams directly via appendData - no setOption cycles, no reactive overhead. The loading prop is still reactive and managed by a signal.`)),e}}),n(G,{get children(){return[Nc(),(()=>{var t=Pc(),n=t.firstChild.nextSibling;return T(n,()=>`${e()} / 200`),t})(),(()=>{var e=Fc(),n=e.firstChild.nextSibling;return T(n,t),e})(),(()=>{var e=Ic(),t=e.firstChild.nextSibling;return T(t,()=>r()?`yes`:`no`),e})()]}}),n(Nt,{get children(){return[n(N,{onClick:a,get disabled(){return r()||i()},children:`Start streaming`}),n(N,{onClick:o,get disabled(){return!r()},children:`Pause`}),n(N,{onClick:s,children:`Reset`})]}})]}})]}})},zc=`import type { Component } from "solid-js";
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
`,Bc=()=>{let[e,t]=l(!1),[n,r]=l(`-`),[i,a]=l(`-`),[o,s]=l(`-`);return{useReplacement:e,setUseReplacement:t,countA:n,setCountA:r,countB:i,setCountB:a,countC:o,setCountC:s}},Vc=(e,t)=>{t(Jt(e))},Hc=e=>{let{setCountA:t,setCountB:n,setCountC:r,setUseReplacement:i}=e;return{finishedA:(e,n)=>{Vc(n,t)},finishedB:(e,t)=>{Vc(t,n)},finishedC:(e,t)=>{Vc(t,r)},handleReset:()=>{i(!1)},handleSwitch:()=>{i(!0)}}},Uc=e=>{let{useReplacement:t,countA:n,countB:r,countC:i}=e;return[{label:`Initial state - all 3 charts render 2 series (Revenue + Expenses)`,expected:()=>t()?`varies`:`2 / 2 / 2`,actual:()=>`${n()} / ${r()} / ${i()}`,pass:()=>t()?!0:n()===2&&r()===2&&i()===2},{label:`notMerge: false - absent series linger (Expenses kept, count stays at 2)`,expected:()=>`2`,actual:()=>String(n()),pass:()=>n()===`-`||n()===2},{label:`notMerge: true - full replacement, only Forecast survives (count = 1 after switch)`,expected:()=>t()?`1`:`2`,actual:()=>String(r()),pass:()=>r()===`-`?!0:t()?r()===1:r()===2},{label:`replaceMerge: ['series'] - targeted replacement, only Forecast survives (count = 1 after switch)`,expected:()=>t()?`1`:`2`,actual:()=>String(i()),pass:()=>i()===`-`?!0:t()?i()===1:i()===2}]},Wc=U,Gc=Wn.initialSeries,Kc=Wn.replacementSeries,qc=e=>()=>z({tooltip:{trigger:`axis`},legend:{},xAxis:{type:`category`,data:Wc},yAxis:{type:`value`},series:e.useReplacement()?Kc:Gc}),Jc=()=>{let e=Bc(),t=Hc(e),n=Uc(e),r=qc(e);return{...e,...t,checklist:n,option:r}},Yc=()=>{let{finishedA:e,finishedB:t,finishedC:r,handleReset:i,handleSwitch:a,option:o,checklist:s}=Jc();return n(D,{get theme(){return M.name},get children(){return[n(H,{class:`gap-4 grid grid-cols-3`,get children(){return[n(F,{containerProps:{title:`notMerge: false (default)`,note:`After switch: Revenue replaced by index, Expenses lingers - expect 2 series`},option:o,class:`chart-sm`,notMerge:!1,onEvents:{finished:e}}),n(F,{containerProps:{title:`notMerge: true`,note:`After switch: full replace - expect only Forecast`},option:o,notMerge:!0,class:`chart-sm`,onEvents:{finished:t}}),n(F,{containerProps:{title:`replaceMerge: ['series']`,note:`After switch: series replaced - expect only Forecast`},option:o,replaceMerge:[`series`],class:`chart-sm`,onEvents:{finished:r}})]}}),n(V,{code:zc,get children(){return[n(P,{sections:[{title:`MERGE STRATEGY CHECKLIST - switch series to verify`,items:s}]}),n(Nt,{get children(){return[n(N,{onClick:i,children:`Reset to initial (Revenue + Expenses)`}),n(N,{onClick:a,children:`Switch to replacement (Forecast only)`})]}})]}})]}})},Xc=`import type { Component } from "solid-js";

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
`,Zc=y(`<div><strong>`),Qc=y(`<div class="p-2 border border-brand-300 bg-white max-h-32 select-none overflow-y-auto">`),$c=y(`<div class="text-xs text-brand-400 font-mono">`),el=`Move mouse over chart or click`,tl=e=>(()=>{var t=Zc(),n=t.firstChild;return T(t,()=>`[${e.time}] `,n),T(n,()=>` ${e.event}`),T(t,()=>e.entry,null),r(()=>C(t,At(`text-xs font-mono`,e.isRegular?`text-rose-700`:`text-brand-700`))),t})(),nl=e=>(()=>{var r=Qc();return T(r,n(E,{get when(){return e.entries.length>0},get fallback(){return(()=>{var t=$c();return T(t,()=>`${e.placeholder??el}…`),t})()},get children(){return n(h,{get each(){return e.entries},children:r=>n(tl,t({get time(){return r.time},get event(){return String(r[e.eventKey])}},()=>e.entryMapper(r)))})}})),r})(),rl=()=>{let[e,t]=l(null),[n,r]=l(null),[i,a]=l(null),[o,s]=l(null),[c,u]=ta({legendselectchanged:0,legendselected:0,legendunselected:0,datazoom:0,showtip:0,downplay:0,brush:0,brushselected:0,brushEnd:0,timelinechanged:0,timelineplaychanged:0,georoam:0}),[d,f]=ta({legendselectchanged:``,legendselected:``,legendunselected:``,datazoom:``,showtip:``,downplay:``,brush:``,brushselected:``,brushEnd:``,timelinechanged:``,timelineplaychanged:``,georoam:``}),[p,m]=ta({legendUnSelect:null,legendSelect:null,dataZoomId:null,showTipXY:null,downplayNotBlur:null,brushLineX:null,brushRect:null,brushClear:null,timelineChange:null,timelinePlayChange:null,geoRoamPanById:null,geoRoamZoomByIndex:null}),[h,g]=l([]);return{instances:{legend:e,brush:n,timeline:i,geo:o},setInstances:{legend:t,brush:r,timeline:a,geo:s},counts:c,setCounts:u,details:d,setDetails:f,checks:p,setChecks:m,log:h,setLog:g}},il=e=>[{title:`LEGEND (name is required in 1.1.0)`,actions:[{label:`Unselect Expenses`,onClick:()=>{e.legend(`legendUnSelect`,`Expenses`)}},{label:`Select Expenses`,onClick:()=>{e.legend(`legendSelect`,`Expenses`)}},{label:`Unselect Profit`,onClick:()=>{e.legend(`legendUnSelect`,`Profit`)}},{label:`Select Profit`,onClick:()=>{e.legend(`legendSelect`,`Profit`)}}]},{title:`DATAZOOM by dataZoomId / TOOLTIP x, y / DOWNPLAY notBlur`,actions:[{label:`zoom-y 20-70`,onClick:()=>{e.zoomY(20,70)}},{label:`zoom-y 0-100`,onClick:()=>{e.zoomY(0,100)}},{label:`Show tip at x 220, y 120`,onClick:()=>{e.showTipAt(220,120)}},{label:`Hide tip`,onClick:e.hideTip},{label:`Highlight Revenue`,onClick:e.highlightRevenue},{label:`Downplay (notBlur)`,onClick:e.downplayNotBlur}]},{title:`BRUSH areas`,actions:[{label:`lineX x 2.5-5.5`,onClick:()=>{e.brush(`lineX`)}},{label:`rect x 5.5-9.5, y 3.5-8.5`,onClick:()=>{e.brush(`rect`)}},{label:`Clear (areas: [])`,onClick:()=>{e.brush(`clear`)}}]},{title:`TIMELINE`,actions:[{label:`Go to 2022`,onClick:()=>{e.timelineGo(0)}},{label:`Go to 2025`,onClick:()=>{e.timelineGo(3)}},{label:`Play`,onClick:()=>{e.timelinePlay(!0)}},{label:`Pause`,onClick:()=>{e.timelinePlay(!1)}}]},{title:`GEO roam by geoId / geoIndex`,actions:[{label:`Pan east (geoId)`,onClick:e.geoPanEast},{label:`Zoom west x1.5 (geoIndex)`,onClick:e.geoZoomWest}]}],al=`toy-grid`,ol=(e,t,n)=>({type:`Feature`,properties:{name:e},geometry:{type:`Polygon`,coordinates:[[[t,n],[t+1,n],[t+1,n+1],[t,n+1],[t,n]]]}}),sl={type:`FeatureCollection`,features:[ol(`North`,0,1),ol(`East`,1,0),ol(`South`,0,0),ol(`West`,1,1)]},cl=wt.textStyle.color,ll=`zoom-x`,ul=`zoom-y`,dl=`west`,fl=`east`,pl=[`2022`,`2023`,`2024`,`2025`],ml=[[1,3],[2,5],[3,2],[4,6],[5,4],[6,7],[7,3],[8,8],[9,5],[10,6]],hl=()=>z({tooltip:{trigger:`axis`},legend:{data:[`Revenue`,`Expenses`,`Profit`]},grid:{bottom:70,right:60},dataZoom:[{id:ll,type:`slider`,xAxisIndex:0},{id:ul,type:`slider`,yAxisIndex:0,filterMode:`none`,right:8}],xAxis:{type:`category`,data:Nn},yAxis:{type:`value`},series:[{name:`Revenue`,type:`bar`,data:[120,132,101,134,90,230,210,182,191,234,290,330],emphasis:{focus:`self`}},{name:`Expenses`,type:`line`,data:[80,92,91,94,70,130,120,112,111,134,160,180]},{name:`Profit`,type:`line`,data:[40,40,10,40,20,100,90,70,80,100,130,150]}]}),gl=()=>z({tooltip:{},toolbox:{feature:{brush:{type:[`rect`,`lineX`,`clear`]}},iconStyle:{borderColor:cl}},brush:{xAxisIndex:0,brushType:`rect`,outOfBrush:{colorAlpha:.25}},xAxis:{type:`value`,min:0,max:11,...Tt},yAxis:{type:`value`,min:0,max:10,...Tt},series:[{type:`scatter`,symbolSize:14,data:ml}]}),_l=()=>({baseOption:{timeline:{axisType:`category`,data:pl,autoPlay:!1,loop:!1,playInterval:1500,label:{color:cl},lineStyle:{color:cl}},legend:{show:!1},tooltip:{},xAxis:{type:`category`,data:[`Press`,`Mixer`,`Packer`],...Tt},yAxis:{type:`value`,max:100,...Tt},series:[{type:`bar`}]},options:[{series:[{data:[40,62,35]}]},{series:[{data:[55,48,70]}]},{series:[{data:[80,52,64]}]},{series:[{data:[66,90,58]}]}]}),vl=(e,t)=>({id:e,map:al,roam:!0,zoom:1,left:t===`left`?0:`50%`,right:t===`left`?`50%`:0,label:{show:!0,color:cl},itemStyle:{areaColor:`#3b5b8c`,borderColor:cl}}),yl=()=>({geo:[vl(dl,`left`),vl(fl,`right`)]}),bl=e=>Array.isArray(e)?`[${e.map(e=>typeof e==`number`?e.toFixed(2):String(e)).join(`, `)}]`:`-`,xl=(e,t)=>{let n=pn(mn(e.getOption(),`legend`)[0],`selected`);return String(pn(n,t))},Sl=(e,t)=>{let n=mn(e.getOption(),`dataZoom`).find(e=>pn(e,`id`)===t),r=hn(n,`start`),i=hn(n,`end`);return r===void 0||i===void 0?`-`:`${Math.round(r)}-${Math.round(i)}`},Cl=e=>String(hn(mn(e.getOption(),`timeline`)[0],`currentIndex`)),wl=(e,t)=>{let n=mn(e.getOption(),`geo`).find(e=>pn(e,`id`)===t);return{zoom:hn(n,`zoom`)??1,center:bl(pn(n,`center`))}},Tl={lineX:`[2,3,4]`,rect:`[5,7,8]`,clear:`[]`},El={lineX:`brushLineX`,rect:`brushRect`,clear:`brushClear`},Dl=e=>{let t=mn(e,`batch`)[0],n=mn(t,`selected`)[0],r=pn(n,`dataIndex`);return`dataIndex=${Array.isArray(r)?JSON.stringify(r):`none`}`},Ol=(e,t)=>e===`brushselected`?Dl(t):B(t),kl=e=>e.toFixed(2),Al=e=>{let{instances:t,counts:n,setCounts:r,details:i,setDetails:a,setChecks:o,setLog:s}=e,c=e=>{let n=t[e]();return n!==null&&!n.isDisposed()?n:null},l=e=>t=>{let n=Ol(e,t);r(e,R),a(e,n),s(t=>[{time:Zt(),event:e,detail:n},...t].slice(0,15))},u={legendselectchanged:l(`legendselectchanged`),legendselected:l(`legendselected`),legendunselected:l(`legendunselected`),datazoom:l(`datazoom`),showtip:l(`showtip`),downplay:l(`downplay`),brush:l(`brush`),brushselected:l(`brushselected`),brushEnd:l(`brushEnd`),timelinechanged:l(`timelinechanged`),timelineplaychanged:l(`timelineplaychanged`),georoam:l(`georoam`)},d=({id:e,chart:t,payload:r,events:i,repeatable:a=!1,expectedState:s,readState:c})=>{let l=a?`≥1`:`1`,u=i.map(e=>({event:e,count:n[e]}));t.dispatchAction(r);let d=u.map(({event:e,count:t})=>{let r=n[e]-t;return`${e} x${a&&r>=1?l:r}`});o(e,{expected:[...i.map(e=>`${e} x${l}`),s].filter(Boolean).join(`; `),actual:[...d,c()].filter(Boolean).join(`; `)})};return{handlers:u,legend:(e,t)=>{let n=c(`legend`);if(!n)return;let r=e===`legendSelect`;d({id:e,chart:n,payload:r?A.legendSelect({name:t}):A.legendUnSelect({name:t}),events:[r?`legendselected`:`legendunselected`],expectedState:`selected.${t}=${String(r)}`,readState:()=>`selected.${t}=${xl(n,t)}`})},zoomY:(e,t)=>{let n=c(`legend`);if(!n)return;let r=Sl(n,ll);d({id:`dataZoomId`,chart:n,payload:A.dataZoom({dataZoomId:ul,start:e,end:t}),events:[`datazoom`],expectedState:`${ul} ${e}-${t}, ${ll} ${r}`,readState:()=>`${ul} ${Sl(n,ul)}, ${ll} ${Sl(n,ll)}`})},showTipAt:(e,t)=>{let n=c(`legend`);n&&d({id:`showTipXY`,chart:n,payload:A.showTip({x:e,y:t}),events:[`showtip`],repeatable:!0,expectedState:`x=${e} y=${t}`,readState:()=>`${vn(i.showtip,`x`)} ${vn(i.showtip,`y`)}`})},hideTip:()=>{c(`legend`)?.dispatchAction(A.hideTip())},highlightRevenue:()=>{c(`legend`)?.dispatchAction(A.highlight({seriesIndex:0}))},downplayNotBlur:()=>{let e=c(`legend`);e&&d({id:`downplayNotBlur`,chart:e,payload:A.downplay({seriesIndex:0,notBlur:!0}),events:[`downplay`],expectedState:`notBlur=true`,readState:()=>vn(i.downplay,`notBlur`)})},brush:e=>{let t=c(`brush`);if(!t)return;let n={lineX:A.brush({areas:[{brushType:`lineX`,coordRange:[2.5,5.5],xAxisIndex:0}]}),rect:A.brush({areas:[{brushType:`rect`,coordRange:[[5.5,9.5],[3.5,8.5]],xAxisIndex:0,yAxisIndex:0}]}),clear:A.brush({areas:[]})};d({id:El[e],chart:t,payload:n[e],events:[`brush`,`brushselected`],expectedState:`dataIndex=${Tl[e]}`,readState:()=>i.brushselected})},timelineGo:e=>{let t=c(`timeline`);t&&d({id:`timelineChange`,chart:t,payload:A.timelineChange({currentIndex:e}),events:[`timelinechanged`],expectedState:`currentIndex=${e}`,readState:()=>`currentIndex=${Cl(t)}`})},timelinePlay:e=>{let t=c(`timeline`);t&&d({id:`timelinePlayChange`,chart:t,payload:A.timelinePlayChange({playState:e}),events:[`timelineplaychanged`],expectedState:`playState=${String(e)}`,readState:()=>vn(i.timelineplaychanged,`playState`)})},geoPanEast:()=>{let e=c(`geo`);if(!e)return;let t={west:wl(e,dl),east:wl(e,fl)},n=(t,n)=>wl(e,t).center===n?`unchanged`:`changed`;d({id:`geoRoamPanById`,chart:e,payload:A.geoRoam({geoId:fl,dx:30,dy:10}),events:[`georoam`],expectedState:`east center changed, west center unchanged`,readState:()=>`east center ${n(fl,t.east.center)}, west center ${n(dl,t.west.center)}`})},geoZoomWest:()=>{let e=c(`geo`);if(!e)return;let t=1.5,n={west:wl(e,dl),east:wl(e,fl)};d({id:`geoRoamZoomByIndex`,chart:e,payload:A.geoRoam({geoIndex:0,zoom:t,originX:e.getWidth()/4,originY:e.getHeight()/2}),events:[`georoam`],expectedState:`west zoom ${kl(n.west.zoom*t)}, east zoom ${kl(n.east.zoom)}`,readState:()=>`west zoom ${kl(wl(e,dl).zoom)}, east zoom ${kl(wl(e,fl).zoom)}`})}}},jl=`press the button`,Ml=e=>{let{checks:t}=e,n=(e,n)=>({label:n,expected:()=>t[e]?.expected??jl,actual:()=>t[e]?.actual??`-`,pass:()=>{let n=t[e];return n===null||n.expected===n.actual}});return[{title:`LEGEND / DATAZOOM / TOOLTIP / DOWNPLAY`,items:[n(`legendUnSelect`,`legendUnSelect - fires legendunselected, legend.selected turns false`),n(`legendSelect`,`legendSelect - fires legendselected, legend.selected turns true`),n(`dataZoomId`,`dataZoom { dataZoomId } - fires datazoom, moves only that component`),n(`showTipXY`,`showTip { x, y } - fires showtip, the pixel position is echoed`),n(`downplayNotBlur`,`downplay { notBlur } - fires downplay, notBlur is echoed`)]},{title:`BRUSH`,items:[n(`brushLineX`,`brush lineX area - fires brush + brushselected with the covered points`),n(`brushRect`,`brush rect area - fires brush + brushselected with the covered points`),n(`brushClear`,`brush { areas: [] } - fires brush + brushselected with no points`)]},{title:`TIMELINE`,items:[n(`timelineChange`,`timelineChange - fires timelinechanged, timeline.currentIndex follows`),n(`timelinePlayChange`,`timelinePlayChange - fires timelineplaychanged, playState is echoed`)]},{title:`GEO`,items:[n(`geoRoamPanById`,`geoRoam { geoId, dx, dy } - fires georoam, pans only that geo`),n(`geoRoamZoomByIndex`,`geoRoam { geoIndex, zoom } - fires georoam, zoom = previous x factor`)]}]},Nl=y(`<div class="gap-4 grid md:grid-cols-2">`),Pl=y(`<span>`),Fl=y(`<div>legend: <strong>`),Il=y(`<div>datazoom / showtip / downplay: <strong>`),Ll=y(`<div>brush / brushselected / brushEnd: <strong>`),Rl=y(`<div>timelinechanged / timelineplaychanged / georoam: <strong>`),zl=y(`<div class="mb-4 flex flex-col gap-4">`);ft([be,Ce,Ne,Fe]),Le(al,sl);var Bl=()=>{let e=rl(),t=Al(e);return{...e,...t,checklist:Ml(e),actionGroups:il(t),legendOption:hl,brushOption:gl,timelineOption:_l,geoOption:yl}},Vl=e=>({entry:` - ${e.detail}`,isRegular:!1}),Hl=()=>{let{handlers:e,setInstances:t,counts:r,log:i,checklist:a,actionGroups:o,legendOption:s,brushOption:c,timelineOption:l,geoOption:u}=Bl();return n(D,{get theme(){return M.name},get children(){return[n(H,{get children(){var r=Nl();return T(r,n(F,{option:s,class:`chart-md`,ref(e){var n=t.legend;typeof n==`function`?n(e):t.legend=e},containerProps:{title:`legend + dataZoom + tooltip`,note:`legendSelect, dataZoomId, showTip x/y, downplay`},get onEvents(){return{legendselectchanged:e.legendselectchanged,legendselected:e.legendselected,legendunselected:e.legendunselected,datazoom:e.datazoom,showtip:e.showtip,downplay:e.downplay}}}),null),T(r,n(F,{option:c,class:`chart-md`,ref(e){var n=t.brush;typeof n==`function`?n(e):t.brush=e},containerProps:{title:`brush`,note:`BrushComponent, areas`},get onEvents(){return{brush:e.brush,brushselected:e.brushselected,brushEnd:e.brushEnd}}}),null),T(r,n(F,{option:l,class:`chart-md`,ref(e){var n=t.timeline;typeof n==`function`?n(e):t.timeline=e},containerProps:{title:`timeline`,note:`TimelineComponent with options[]`},get onEvents(){return{timelinechanged:e.timelinechanged,timelineplaychanged:e.timelineplaychanged}}}),null),T(r,n(F,{option:u,class:`chart-md`,ref(e){var n=t.geo;typeof n==`function`?n(e):t.geo=e},containerProps:{title:`geo`,note:`GeoComponent + registerMap, two geo components`},get onEvents(){return{georoam:e.georoam}}}),null),r}}),n(V,{code:Xc,get children(){return[n(Ft,{get children(){var e=Pl();return T(e,()=>ln(`Each button dispatches one seActions payload and the checklist compares the events and the live instance with the docs. legendselectchanged and brushEnd only come from user interaction: click a legend item, or draw a brush area with the toolbox.`)),e}}),n(P,{sections:a}),n(G,{get children(){return[(()=>{var e=Fl(),t=e.firstChild.nextSibling;return T(t,()=>`selected ${r.legendselected}, unselected ${r.legendunselected}, selectchanged ${r.legendselectchanged}`),e})(),(()=>{var e=Il(),t=e.firstChild.nextSibling;return T(t,()=>`${r.datazoom} / ${r.showtip} / ${r.downplay}`),e})(),(()=>{var e=Ll(),t=e.firstChild.nextSibling;return T(t,()=>`${r.brush} / ${r.brushselected} / ${r.brushEnd}`),e})(),(()=>{var e=Rl(),t=e.firstChild.nextSibling;return T(t,()=>`${r.timelinechanged} / ${r.timelineplaychanged} / ${r.georoam}`),e})()]}}),(()=>{var e=zl();return T(e,n(h,{each:o,children:({title:e,actions:t})=>n(xs,{title:e,actions:t})})),e})(),n(nl,{get entries(){return i()},entryMapper:Vl,eventKey:`event`,placeholder:`Press a button or interact with a chart`})]}})]}})},Ul=`import type { Component } from "solid-js";
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
      classList={{ "shadow-lg": focused() }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      onKeyDown={(e) => console.log("key", e.key)}
      onClick={() => console.log("native click")}
      onInit={handleInit}
    />
  );
};
`,Wl=()=>{let[e,t]=ta({tabIndex:null,role:null,ariaLabel:null,id:null,dataTestId:null,title:null}),[n,r]=l(0),[i,a]=l(!1),[o,s]=l(!1),[c,u]=l(0),[d,f]=l(!1);return{domAttributes:e,focusedIndex:n,isFocused:i,everFocused:o,clickCount:c,keyNavUsed:d,setFocusedIndex:r,setEverFocused:s,setClickCount:u,setKeyNavUsed:f,setIsFocused:a,setDomAttributes:t}},Gl=(e,t)=>{let n=null,{focusedIndex:r,setFocusedIndex:i,setEverFocused:a,setClickCount:o,setKeyNavUsed:s,setIsFocused:c,setDomAttributes:l}=e,u=e=>{n=e;let t=e.getDom();l({tabIndex:t.tabIndex,role:t.getAttribute(`role`),ariaLabel:t.getAttribute(`aria-label`),id:t.id||null,dataTestId:t.dataset.testid??null,title:t.getAttribute(`title`)})},d=e=>{n?.dispatchAction(e)};return{handleInit:u,handleFocus:()=>{c(!0),a(!0)},handleBlur:()=>{c(!1)},handleClick:()=>{o(R)},handleKeyDown:Xt(r,i,t.length,e=>{s(!0),d(e)})}},Kl=(e,t)=>{let{domAttributes:n,focusedIndex:r,isFocused:i,everFocused:a,clickCount:o,keyNavUsed:s}=e;return[{label:`tabIndex={0} - container div is keyboard-focusable`,expected:()=>`0`,actual:()=>n.tabIndex===null?`-`:String(n.tabIndex),pass:()=>n.tabIndex===null||n.tabIndex===0},{label:`role="img" - ARIA role passed through`,expected:()=>`img`,actual:()=>n.role??`-`,pass:()=>n.role===null||n.role===`img`},{label:`aria-label - screen reader description present`,expected:()=>`non-empty string`,actual:()=>n.ariaLabel===null?`-`:`"${n.ariaLabel.slice(0,24)}…"`,pass:()=>n.ariaLabel===null||n.ariaLabel.length>0},{label:`id="weekly-bar-chart" - DOM id passed through`,expected:()=>`weekly-bar-chart`,actual:()=>n.id??`-`,pass:()=>n.id===null||n.id===`weekly-bar-chart`},{label:`data-testid="chart-container" - test attribute passed through`,expected:()=>`chart-container`,actual:()=>n.dataTestId??`-`,pass:()=>n.dataTestId===null||n.dataTestId===`chart-container`},{label:`title - browser tooltip attribute passed through`,expected:()=>`non-empty string`,actual:()=>n.title===null?`-`:`"${n.title.slice(0,24)}..."`,pass:()=>n.title===null||n.title.length>0},{label:`onFocus / onBlur - focus events fire on the container div`,expected:()=>`click chart to focus`,actual:()=>a()?`focused: ${i()?`yes`:`no`}`:`-`,pass:()=>!0},{label:`onClick - native click fires on container div (distinct from ECharts click)`,expected:()=>o()>0?`${o()} click(s)`:`click the chart`,actual:()=>String(o()),pass:()=>!0},{label:`onKeyDown - arrow keys navigate bars (focus chart first)`,expected:()=>s()?`index changes`:`focus chart, use arrow keys`,actual:()=>s()?`${t[r()]?.name} (index ${r()})`:`-`,pass:()=>!0}]},Z=e=>()=>z({tooltip:{trigger:`item`},xAxis:{type:`category`,data:e.map(e=>e.name)},yAxis:{type:`value`},series:[{type:`bar`,data:e.map(e=>e.value),emphasis:{focus:`self`}}]}),ql=y(`<span>Click the chart to give it focus, then use arrow keys to navigate bars. Open DevTools Elements panel to confirm all attributes are present on the container <code>&lt;div id="weekly-bar-chart"></code>.`),Jl=y(`<div>Focused bar: <strong>`),Yl=y(`<div>Chart focused: <strong>`),Xl=y(`<div>Native onClick fires: <strong>`),Zl=()=>{let e=Wl(),t=Gl(e,Un),n=Kl(e,Un),r=Z(Un);return{...e,...t,checklist:n,option:r}},Ql=()=>{let{clickCount:e,focusedIndex:t,isFocused:r,handleInit:i,handleFocus:a,handleBlur:o,handleClick:s,handleKeyDown:c,checklist:l,option:u}=Zl();return n(D,{get theme(){return M.name},get children(){return[n(H,{get children(){return n(F,{option:u,get class(){return r()?`chart-md shadow-lg shadow-brand-400/40 transition-shadow`:`chart-md transition-shadow`},tabIndex:0,role:`img`,get"aria-label"(){return`Bar chart showing weekly data. Currently focused: ${Un[t()]?.name}, value ${Un[t()]?.value}. Use arrow keys to navigate.`},id:`weekly-bar-chart`,"data-testid":`chart-container`,title:`Weekly revenue chart - use arrow keys to navigate bars`,onKeyDown:c,onFocus:a,onBlur:o,onClick:s,onInit:i})}}),n(V,{code:Ul,get children(){return[n(Ft,{get children(){return ql()}}),n(P,{sections:[{items:l}]}),n(G,{get children(){return[(()=>{var e=Jl(),n=e.firstChild.nextSibling;return T(n,()=>Un[t()]?.name??`-`),T(e,()=>` (value: ${Un[t()]?.value})`,null),e})(),(()=>{var e=Yl(),t=e.firstChild.nextSibling;return T(t,()=>r()?`yes - arrow keys active`:`no - click chart first`),e})(),(()=>{var t=Xl(),n=t.firstChild.nextSibling;return T(n,e),t})()]}})]}})]}})},$l=`import type { Component } from "solid-js";

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
`,eu=()=>{let[e,t]=l([]),[n,r]=l(0),[i,a]=l(0),[o,s]=l(0);return{log:e,setLog:t,onceClickCount:n,setOnceClickCount:r,everyClickCount:i,setEveryClickCount:a,onceFinishedCount:o,setOnceFinishedCount:s}},tu=e=>{let{setLog:t,setOnceClickCount:n,setEveryClickCount:r,setOnceFinishedCount:i}=e,a=e=>{t(t=>[e,...t].slice(0,20))};return{handleEveryClick:(e,t)=>{r(R),a({time:Zt(),source:`onEvents`,event:`click`,detail:`bar "${e.name}" - fires every time`}),t.dispatchAction(A.highlight({seriesIndex:0,dataIndex:e.dataIndex}))},handleFirstClick:e=>{n(R),a({time:Zt(),source:`onEventsOnce`,event:`click`,detail:`FIRST click on bar "${e.name}" - will not fire again`})},handleFinished:()=>{i(R),a({time:Zt(),source:`onEventsOnce`,event:`finished`,detail:`chart finished first render - will not fire again`})}}},nu=e=>{let{onceFinishedCount:t,everyClickCount:n,onceClickCount:r}=e;return[{label:`onEventsOnce 'finished' - fires exactly once after initial render`,expected:()=>`1`,actual:()=>String(t()),pass:()=>t()===1},{label:`onEventsOnce 'click' - fires at most once, self-removes after first fire`,expected:()=>`0 or 1`,actual:()=>n()===0?`-`:String(r()),pass:()=>r()<=1},{label:`onEvents 'click' - fires on every bar click (persistent)`,expected:()=>n()>0?`${n()} (equals total clicks)`:`click a bar`,actual:()=>String(n()),pass:()=>!0},{label:`Dual-map coexistence - after 2+ clicks, onEventsOnce count stays at 1`,expected:()=>n()>=2?`onceClickCount === 1`:`click ≥ 2 times`,actual:()=>n()>=2?`onEventsOnce: ${r()}, onEvents: ${n()}`:`-`,pass:()=>n()<2||r()===1}]},ru=()=>z({tooltip:{trigger:`item`},xAxis:{type:`category`,data:zn},yAxis:{type:`value`},series:[{type:`bar`,data:Bn,emphasis:{focus:`self`}}]}),iu=y(`<span>`),au=y(`<div>onEvents click (every): <strong></strong> - increments on every bar click`),ou=y(`<div>onEventsOnce click (first only): <strong></strong> - must stay at 0 or 1, never higher`),su=y(`<div>onEventsOnce finished: <strong></strong> - fires once on first render complete`),cu=()=>{let e=eu(),t=tu(e),n=nu(e),r=ru;return{...e,...t,checklist:n,option:r}},lu=()=>{let{everyClickCount:e,log:t,onceClickCount:r,onceFinishedCount:i,handleEveryClick:a,handleFinished:o,handleFirstClick:s,checklist:c,option:l}=cu(),u=e=>({entry:`.${e.event} - ${e.detail}`,isRegular:e.source===`onEventsOnce`});return n(D,{get theme(){return M.name},get children(){return[n(H,{get children(){return n(F,{option:l,class:`chart-sm`,onEvents:{click:a},onEventsOnce:{click:s,finished:o}})}}),n(V,{code:$l,get children(){return[n(Ft,{get children(){var e=iu();return T(e,()=>ln(`Orange entries = onEventsOnce. The click once-handler fires on the very first bar click and never again. The finished once-handler fires exactly once after the initial render.`)),e}}),n(P,{sections:[{items:c}]}),n(G,{get children(){return[(()=>{var t=au(),n=t.firstChild.nextSibling;return T(n,e),t})(),(()=>{var e=ou(),t=e.firstChild.nextSibling;return T(t,r),e})(),(()=>{var e=su(),t=e.firstChild.nextSibling;return T(t,(()=>{var e=_(()=>i()>0);return()=>e()?`fired ✓ (${i()}x)`:`not yet`})()),e})()]}}),n(nl,{get entries(){return t()},entryMapper:u,eventKey:`source`,placeholder:`Waiting for events`})]}})]}})},uu=`import type { Component } from "solid-js";
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
`,du=()=>{let[e,t]=l(`-`),[n,r]=l(xt),[i,a]=l(!1),[o,s]=l(0),[c,u]=l(!1),[d,f]=l(null);return{resizeAtCollapse:d,widthToggled:c,pixelDimensions:e,containerWidth:n,resizeCount:o,collapsed:i,setResizeAtCollapse:f,setResizeCount:s,setWidthToggled:u,setCollapsed:a,setContainerWidth:r,setPixelDimensions:t}},fu=e=>{let t=null,{resizeCount:n,collapsed:r,setResizeAtCollapse:i,setResizeCount:a,setWidthToggled:o,setCollapsed:s,setContainerWidth:c,setPixelDimensions:l}=e;return{toggleCollapse:()=>{r()?(i(null),s(!1)):(i(n()),s(!0))},toggleWidth:()=>{o(!0),c(e=>e===`100%`?`60%`:`100%`)},handleInit:e=>{t=e},handleResize:()=>{if(!t||t.isDisposed())return;let e=t.getWidth(),n=t.getHeight();l(`${e} × ${n} px`),a(R)}}},pu=e=>{let{resizeCount:t,widthToggled:n,resizeAtCollapse:r,pixelDimensions:i}=e;return[{label:`Guard 1 - onResize does not fire on mount (initial observation skipped)`,expected:()=>`-`,actual:()=>t()===0?`-`:`fired ${t()} time(s)`,pass:()=>n()||t()===0},{label:`Guard 2 - onResize does not fire when container is zero-sized (collapse)`,expected:()=>{let e=r();return e===null?`collapse the chart to test`:`frozen at ${e}`},actual:()=>r()===null?`-`:String(t()),pass:()=>{let e=r();return e===null||t()===e}},{label:`Genuine resize - onResize fires when container width changes`,expected:()=>n()?`${t()} fire(s)`:`toggle width to test`,actual:()=>n()?String(t()):`-`,pass:()=>!n()||t()>0},{label:`onResize callback - chart.getWidth() / getHeight() readable after resize`,expected:()=>`W × H px`,actual:()=>i(),pass:()=>i()===`-`||i().includes(`×`)}]},mu=()=>z({tooltip:{trigger:`axis`},xAxis:{type:`category`,data:U},yAxis:{type:`value`},series:un([{type:`line`,smooth:!0,data:W}])}),hu=y(`<div>Pixel dimensions after resize: <strong>`),gu=y(`<div>Chart width: <strong>`),_u=()=>{let e=du(),t=fu(e),n=pu(e),r=mu;return{...e,...t,checklist:n,option:r}},vu=()=>{let{collapsed:e,toggleCollapse:t,toggleWidth:r,handleInit:i,handleResize:a,pixelDimensions:o,containerWidth:s,checklist:c,option:l}=_u();return n(D,{get theme(){return M.name},get children(){return[n(H,{get children(){return n(F,{option:l,get class(){return At(`transition-[width,height] duration-300 overflow-hidden`,e()?`h-0`:`h-22rem`)},get style(){return{width:s()}},autoResize:!0,onInit:i,onResize:a,containerProps:{centerItems:!1}})}}),n(V,{code:uu,get children(){return[n(Ft,{children:`Pixel dimensions must show - on initial mount (guard 1). Collapsing must not update dimensions (guard 2 - zero height skipped). Toggling width updates dimensions to the new canvas size.`}),n(P,{sections:[{items:c}]}),n(G,{get children(){return[(()=>{var e=hu(),t=e.firstChild.nextSibling;return T(t,o),T(e,()=>o()===`-`?` ← stays '-' on mount (guard 1 ✓)`:``,null),e})(),(()=>{var t=gu(),n=t.firstChild.nextSibling;return T(n,(()=>{var t=_(()=>!!e());return()=>t()?`0px (collapsed)`:s()})()),t})()]}}),n(Nt,{get children(){return[n(N,{onClick:r,get disabled(){return e()},children:`Toggle width (100% ↔ 60%) - onResize should fire`}),n(N,{onClick:t,get children(){return e()?`Expand`:`Collapse to 0px - onResize should NOT fire`}})]}})]}})]}})},yu=`import type { Component } from "solid-js";
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
`,bu=e=>n(w.Root,{class:`mb-4 max-w-md w-full`,get min(){return e.min},get max(){return e.max},get value(){return[e.value]},onValueChange:t=>{e.onChange(t.value[0])},get children(){return[n(w.Label,{class:`text-xs font-mono mb-1 block`,children:`Amplitude (raw)`}),n(w.Control,{class:`flex h-5 items-center relative`,get children(){return[n(w.Track,{class:`rounded-full bg-brand-200 flex-1 h-1.5 relative`,get children(){return n(w.Range,{class:`rounded-full bg-brand-600 h-full`})}}),n(w.Thumb,{index:0,class:`rounded-full bg-brand-900 size-4 transition-transform duration-200 focus-visible:scale-125`,get children(){return n(w.HiddenInput,{})}})]}})]}}),xu=y(`<div>`),Su=e=>{let t=et(),[n,o]=l(null),{instance:c}=ot(n,{renderer:i(()=>e.renderer??t.renderer()),theme:i(()=>e.theme??t.theme()),group:t.group,autoResize:t.autoResize,resizeDebounce:a(t.resizeDebounce),locale:a(t.locale),devicePixelRatio:a(t.devicePixelRatio),useDirtyRect:a(t.useDirtyRect)});return dt(c,()=>e.option()),f(S(c,t=>{if(e.onInstance?.(t),!t)return;let n=()=>{e.onRendered?.()};t.on(`finished`,n),s(()=>{t.off(`finished`,n)})})),(()=>{var t=xu();return p(o,t),r(()=>C(t,e.class)),t})()},Cu=e=>{let t=et();return c(()=>{e.onConfig(t)}),null},wu=()=>{let[e,t]=l(`svg`),[n,r]=l(null),[i,a]=l(null),[o,s]=l(null),[c,u]=l(null),[d,f]=l(null),[p,m]=l(0),[h,g]=l(2),[_,v]=l(!0),[y,b]=l(!0),[x,S]=l(1),[ee,C]=l(null),[te,w]=l(null),[ne,re]=l(null),[ie,ae]=l(40),[oe,T]=l(40),[se,ce]=l(0),[E,le]=l(0),[ue,de]=l(null),[fe,pe]=l(null),[me,he]=l(null),[ge,_e]=l(3),[ve,ye]=l(0),[be,xe]=l(null);return{providerRenderer:e,setProviderRenderer:t,rootConfig:n,setRootConfig:r,outerConfig:i,setOuterConfig:a,innerConfig:o,setInnerConfig:s,outerChart:c,setOuterChart:u,innerChart:d,setInnerChart:f,renderRevision:p,setRenderRevision:m,seriesCount:h,setSeriesCount:g,showLegend:_,setShowLegend:v,hasBackground:y,setHasBackground:b,seed:x,setSeed:S,transition:ee,setTransition:C,chartSeriesCount:te,setChartSeriesCount:w,chartHasLegend:ne,setChartHasLegend:re,raw:ie,setRaw:ae,applied:oe,setApplied:T,rawChanges:se,setRawChanges:ce,appliedCalls:E,setAppliedCalls:le,burst:ue,setBurst:de,chartAmplitude:fe,setChartAmplitude:pe,gradientChart:me,setGradientChart:he,windowSize:ge,setWindowSize:_e,transformRuns:ve,setTransformRuns:ye,lastRun:be,setLastRun:xe}},Tu=`examples:moving-average`,Eu=e=>typeof e==`object`&&!!e&&`window`in e&&typeof e.window==`number`,Du=(e,t)=>e.map(([n],r)=>{let i=e.slice(Math.max(0,r-t+1),r+1),a=i.reduce((e,[,t])=>e+t,0)/i.length;return[n,Math.round(a*100)/100]}),Ou=new Set,ku=e=>(Ou.add(e),()=>{Ou.delete(e)});pe({type:Tu,transform:({upstream:e,config:t})=>{if(!Eu(t))throw Error(`${Tu} needs a numeric "window" config`);let n=[];for(let t=0;t<e.count();t++){let r=e.retrieveValue(t,0),i=e.retrieveValue(t,1);n.push([String(r),typeof i==`number`?i:NaN])}let r=Du(n,t.window);for(let e of Ou)e({window:t.window,output:r});return{data:r}}});var[Au]=M.theme.color,ju=.3,Q=.7,Mu=U.map((e,t)=>[e,W[t]]),Nu=()=>z({xAxis:{type:`category`,data:U},yAxis:{type:`value`},series:[{type:`bar`,data:W}]}),Pu=e=>{let t=Array.from({length:e.seriesCount},(t,n)=>({type:`bar`,name:`Series ${n+1}`,data:U.map((t,r)=>100+(e.seed*37+r*53+n*29)%120)}));return{animation:!1,tooltip:{trigger:`axis`},...e.showLegend&&{legend:wt},...e.hasBackground&&{backgroundColor:`#1e293b`},xAxis:{type:`category`,data:U,...Tt},yAxis:{type:`value`,...Tt},series:t}},Fu=e=>z({animation:!1,xAxis:{type:`category`,data:[`A`,`B`,`C`,`D`,`E`]},yAxis:{type:`value`,min:0,max:100},series:[{type:`bar`,data:[.4,.7,1,.55,.25].map(t=>Math.round(e*t))}]}),$=()=>{let e=me(Au,ju);return z({xAxis:{type:`category`,data:U},yAxis:{type:`value`},series:[{type:`line`,smooth:!0,data:Pn,lineStyle:{color:e,width:3},itemStyle:{color:e},areaStyle:{color:new fe(0,0,0,1,[{offset:0,color:Ee(Au,Q)},{offset:1,color:Ee(Au,0)}])}}]})},Iu=e=>z({dataset:[{id:`raw`,dimensions:[`day`,`value`],source:Mu},{id:`average`,fromDatasetId:`raw`,transform:{type:Tu,config:{window:e}}}],xAxis:{type:`category`},yAxis:{type:`value`},series:[{type:`bar`,name:`Raw`,datasetId:`raw`,encode:{x:0,y:1}},{type:`line`,name:`Moving average (${e})`,datasetId:`average`,encode:{x:0,y:1}}]}),Lu=e=>{let t=i(()=>Pu({seriesCount:e.seriesCount(),showLegend:e.showLegend(),hasBackground:e.hasBackground(),seed:e.seed()})),n=null;return{configOption:Nu,mergeOption:t,plan:i(()=>{let e=ut(n,t());return n=e.signature,e}),amplitudeOption:i(()=>Fu(e.applied())),gradientOption:$,transformOption:i(()=>Iu(e.windowSize()))}},Ru=[3,5,7],zu=10,Bu=100,Vu=20,Hu={notMerge:!1,replaceMerge:[]},Uu={notMerge:!1,replaceMerge:[`series`]},Wu={notMerge:!0,replaceMerge:[]},Gu=e=>{let t=e.getOption().series;if(!Array.isArray(t))return null;let n=t[0];if(typeof n!=`object`||!n||!(`data`in n)||!Array.isArray(n.data))return null;let r=n.data[2];return typeof r==`number`?r:null},Ku=e=>{let t=(t,n)=>{e.setTransition({label:t,expected:n})},n=()=>{e.setProviderRenderer(e=>e===`svg`?`canvas`:`svg`)},r=()=>{e.seriesCount()>=4||d(()=>{t(`add a series`,Hu),e.setSeriesCount(R)})},i=()=>{e.seriesCount()<=1||d(()=>{t(`remove a series`,Uu),e.setSeriesCount(e=>e-1)})},a=()=>{d(()=>{t(e.showLegend()?`drop the legend key`:`restore the legend key`,e.showLegend()?Wu:Hu),e.setShowLegend(e=>!e)})},o=()=>{d(()=>{t(e.hasBackground()?`drop backgroundColor`:`restore backgroundColor`,e.hasBackground()?Wu:Hu),e.setHasBackground(e=>!e)})},c=()=>{d(()=>{t(`change values only`,Hu),e.setSeed(R)})},l=at(()=>{e.setApplied(e.raw()),e.setAppliedCalls(R)},300),u=t=>{e.setRaw(t),e.setRawChanges(R),l()},f=()=>{let t=e.applied()===Bu?Vu:Bu,n=e.appliedCalls();for(let e=1;e<=zu;e++)u(Math.round(t*e/zu));e.setBurst({before:n,target:t,appliedRightAfter:e.applied()})},p=()=>{e.setWindowSize(e=>Ru[(Ru.indexOf(e)+1)%Ru.length])},m=()=>{e.setRenderRevision(R)},h=t=>{let n=t.getOption().series;e.setChartSeriesCount(Array.isArray(n)?n.filter(Boolean).length:0);let r=t.getOption().legend;e.setChartHasLegend(Array.isArray(r)&&r.length>0)};return s(ku(t=>{e.setLastRun(t),e.setTransformRuns(R)})),{toggleProviderRenderer:n,addSeries:r,removeSeries:i,toggleLegend:a,toggleBackground:o,reseed:c,changeAmplitude:u,runBurst:f,cycleWindow:p,handleRendered:m,handleMergeFinished:(e,t)=>{h(t)},handleAmplitudeFinished:(t,n)=>{e.setChartAmplitude(Gu(n))}}},qu=250,Ju=`pending`,Yu=1,Xu={3:[820,876,884.33,922.33,1041.67,1184.67,1313.33],5:[820,876,884.33,896.75,975.4,1077.4,1155],7:[820,876,884.33,896.75,975.4,1034.5,1075.29]},Zu=e=>{if(e===null)return`-`;let t=e.getDom();return t.querySelector(`canvas`)===null?t.querySelector(`svg`)===null?`none`:`svg`:`canvas`},Qu=e=>{if(e===null)return`-`;let t=e.getVisual({seriesIndex:0},`color`);return typeof t==`string`?t:`-`},$u=({notMerge:e,replaceMerge:t})=>`notMerge: ${String(e)}, replaceMerge: [${t.join(`, `)}]`,ed=e=>e.plan().signature.arrays.series,td=ju,nd=e=>ue(Au).slice(0,3).map(t=>Math.min(255,Math.trunc(e<0?t*(1-e):(255-t)*e+t))).join(`,`),rd=(e,t)=>{let n=M.theme.color[0],r=St.theme.color[0],i=[{label:`useConfig() outside any provider returns the library defaults`,expected:()=>`canvas, default, 100, true, false`,actual:()=>{let t=e.rootConfig();return t===null?Ju:[t.renderer(),t.theme(),t.resizeDebounce(),t.autoResize(),t.ssr()].join(`, `)},pass:()=>{let t=e.rootConfig();return t===null||t.renderer()===`canvas`&&t.theme()==="default"&&t.resizeDebounce()===100&&t.autoResize()&&!t.ssr()}},{label:`useConfig().renderer() follows the provider's reactive renderer`,expected:()=>e.providerRenderer(),actual:()=>e.outerConfig()?.renderer()??Ju,pass:()=>e.outerConfig()?.renderer()===e.providerRenderer()},{label:`useConfig() exposes the provider theme and resizeDebounce`,expected:()=>`${M.name}, ${qu}`,actual:()=>{let t=e.outerConfig();return t===null?Ju:`${String(t.theme())}, ${t.resizeDebounce()}`},pass:()=>{let t=e.outerConfig();return t?.theme()===M.name&&t.resizeDebounce()===qu}},{label:`Nested provider overrides renderer and theme, inherits resizeDebounce`,expected:()=>`canvas, ${St.name}, ${qu}`,actual:()=>{let t=e.innerConfig();return t===null?Ju:`${t.renderer()}, ${String(t.theme())}, ${t.resizeDebounce()}`},pass:()=>{let t=e.innerConfig();return t?.renderer()===`canvas`&&t.theme()===St.name&&t.resizeDebounce()===qu}},{label:`createChart wrapper A renders with the provider's renderer`,expected:()=>e.providerRenderer(),actual:()=>(e.renderRevision(),Zu(e.outerChart())),pass:()=>Zu(e.outerChart())===e.providerRenderer()},{label:`createChart wrapper A uses the provider theme palette`,expected:()=>n,actual:()=>(e.renderRevision(),Qu(e.outerChart())),pass:()=>Qu(e.outerChart())===n},{label:`Wrapper B: the renderer prop beats the provider (canvas) and gives svg`,expected:()=>`svg`,actual:()=>(e.renderRevision(),Zu(e.innerChart())),pass:()=>Zu(e.innerChart())===`svg`},{label:`Wrapper B: the theme still comes from the nested provider`,expected:()=>r,actual:()=>(e.renderRevision(),Qu(e.innerChart())),pass:()=>Qu(e.innerChart())===r}],a=[{label:`buildSignature(option) equals the signature carried by the MergePlan`,expected:()=>JSON.stringify(O(t.mergeOption())),actual:()=>JSON.stringify(t.plan().signature),pass:()=>JSON.stringify(O(t.mergeOption()))===JSON.stringify(t.plan().signature)},{label:`Signature counts the anonymous series of the option`,expected:()=>String(e.seriesCount()),actual:()=>String(ed(t)?.noIdCount??`-`),pass:()=>ed(t)?.noIdCount===e.seriesCount()},{label:`MergePlan after the last change matches the expected strategy`,expected:()=>{let t=e.transition();return t===null?`press a button`:$u(t.expected)},actual:()=>{let e=t.plan();return $u({notMerge:e.notMerge,replaceMerge:e.replaceMerge})},pass:()=>{let n=e.transition(),r=t.plan();return n===null||r.notMerge===n.expected.notMerge&&r.replaceMerge.join()===n.expected.replaceMerge.join()}},{label:`autoMerge chart ends up with the option's series count`,expected:()=>String(e.seriesCount()),actual:()=>String(e.chartSeriesCount()??Ju),pass:()=>e.chartSeriesCount()===null||e.chartSeriesCount()===e.seriesCount()},{label:`autoMerge chart has a legend exactly when the option has one`,expected:()=>String(e.showLegend()),actual:()=>String(e.chartHasLegend()??Ju),pass:()=>e.chartHasLegend()===null||e.chartHasLegend()===e.showLegend()}],o=[{label:`Chart shows the applied value, which trails the slider by 300 ms`,expected:()=>String(e.applied()),actual:()=>String(e.chartAmplitude()??Ju),pass:()=>e.chartAmplitude()===null||e.chartAmplitude()===e.applied()},{label:`Burst of 10 rapid calls: nothing is applied synchronously`,expected:()=>{let t=e.burst();return t===null?`press Burst`:`!== ${t.target}`},actual:()=>String(e.burst()?.appliedRightAfter??`-`),pass:()=>{let t=e.burst();return t===null||t.appliedRightAfter!==t.target}},{label:`Burst of 10 rapid calls: exactly one trailing execution`,expected:()=>`1`,actual:()=>{let t=e.burst();if(t===null)return`-`;let n=e.appliedCalls()-t.before;return n===0?`waiting...`:String(n)},pass:()=>{let t=e.burst();return t===null||e.appliedCalls()-t.before<=1}},{label:`Burst of 10 rapid calls: the last value wins`,expected:()=>String(e.burst()?.target??`-`),actual:()=>{let t=e.burst();return t===null?`-`:e.appliedCalls()===t.before?`waiting...`:String(e.applied())},pass:()=>{let t=e.burst();return t===null||e.appliedCalls()===t.before||e.applied()===t.target}},{label:`Executions never exceed the calls made`,expected:()=>`<= ${e.rawChanges()}`,actual:()=>String(e.appliedCalls()),pass:()=>e.appliedCalls()<=e.rawChanges()}],s=ue(Au),c=new fe(0,0,0,1,[{offset:0,color:Au},{offset:1,color:`#000000`}]),l=c.type;return{configItems:i,mergeItems:a,debounceItems:o,graphicItems:[{label:`color.modifyAlpha keeps the channels and sets the alpha`,expected:()=>`${s.slice(0,3).join(`,`)},${Q}`,actual:()=>ue(Ee(Au,Q)).join(`,`),pass:()=>{let[e,t,n,r]=ue(Ee(Au,Q));return[e,t,n].every((e,t)=>e===s[t])&&r===.7}},{label:`color.lift(base, level): scales channels for level < 0, blends to white for level > 0`,expected:()=>`${nd(-td)} / ${nd(td)}`,actual:()=>`${ue(me(Au,-td)).slice(0,3).join(`,`)} / ${ue(me(Au,td)).slice(0,3).join(`,`)}`,pass:()=>[-td,td].every(e=>ue(me(Au,e)).slice(0,3).join(`,`)===nd(e))},{label:`new graphic.LinearGradient(...) is a linear gradient with its color stops`,expected:()=>`linear, 2 stops`,actual:()=>`${c.type}, ${c.colorStops.length} stops`,pass:()=>l===`linear`&&c.colorStops.length===2},{label:`The svg renderer paints the gradient: one <linearGradient> with 2 <stop>`,expected:()=>`1 gradient, 2 stops`,actual:()=>{e.renderRevision();let t=e.gradientChart()?.getDom();return t===void 0?Ju:`${t.querySelectorAll(`linearGradient`).length} gradient, ${t.querySelectorAll(`linearGradient stop`).length} stops`},pass:()=>{e.renderRevision();let t=e.gradientChart()?.getDom();return t===void 0||t.querySelectorAll(`linearGradient`).length===1&&t.querySelectorAll(`linearGradient stop`).length===2}},{label:`The series line color is the lifted base color`,expected:()=>me(Au,ju),actual:()=>(e.renderRevision(),Qu(e.gradientChart())),pass:()=>{e.renderRevision();let t=e.gradientChart();if(t===null)return!0;let n=ue(me(Au,ju)),r=ue(Qu(t));return n.every((e,t)=>Math.abs(e-r[t])<=Yu)}}],transformItems:[{label:`registerTransform: the dataset transform ran`,expected:()=>`>= 1`,actual:()=>String(e.transformRuns()),pass:()=>e.transformRuns()>=1},{label:`config.window reaches the transform from the dataset option`,expected:()=>String(e.windowSize()),actual:()=>String(e.lastRun()?.window??Ju),pass:()=>e.lastRun()?.window===e.windowSize()},{label:`Transform output equals the hand-computed moving average`,expected:()=>Xu[e.windowSize()]?.join(`, `)??`-`,actual:()=>e.lastRun()?.output.map(([,e])=>e).join(`, `)??Ju,pass:()=>{let t=e.lastRun();return t===null||t.output.map(([,e])=>e).join()===Xu[e.windowSize()]?.join()}}]}},id=y(`<div class="mb-6 gap-4 grid grid-cols-2">`),ad=y(`<div class="gap-4 grid grid-cols-2">`),od=y(`<span>`),sd=y(`<div>Provider renderer: <strong></strong> / useConfig().renderer(): <strong>`),cd=y(`<div>MergePlan: <strong>`),ld=y(`<div>Signature: <strong>`),ud=y(`<div>Slider raw / applied: <strong>`),dd=y(`<div>Transform window / runs: <strong>`);ft([Me,Te]);var fd=()=>{let e=wu(),t=Ku(e),n=Lu(e),r=rd(e,n);return{...e,...t,...n,checklist:r}},pd=()=>{let{providerRenderer:e,setRootConfig:t,setOuterConfig:r,setInnerConfig:i,setOuterChart:a,setInnerChart:o,setGradientChart:s,outerConfig:c,toggleProviderRenderer:l,addSeries:u,removeSeries:d,toggleLegend:f,toggleBackground:p,reseed:m,changeAmplitude:g,runBurst:_,cycleWindow:v,handleRendered:y,handleMergeFinished:b,handleAmplitudeFinished:x,configOption:S,mergeOption:ee,plan:C,amplitudeOption:te,gradientOption:w,transformOption:ne,raw:re,applied:ie,rawChanges:ae,appliedCalls:oe,windowSize:se,transformRuns:ce,checklist:E}=fd(),le=[{label:`Add series`,action:u},{label:`Remove series`,action:d},{label:`Toggle legend`,action:f},{label:`Toggle backgroundColor`,action:p},{label:`Change values`,action:m}];return[n(Cu,{onConfig:t}),n(H,{get children(){return[(()=>{var t=id();return T(t,n(D,{get theme(){return M.name},renderer:e,resizeDebounce:250,get children(){return[n(Cu,{onConfig:r}),n(Wt,{title:`A - createChart wrapper, outer provider (toggle its renderer)`,get children(){return n(Su,{class:`chart-sm`,option:S,onInstance:a,onRendered:y})}}),n(D,{renderer:`canvas`,get theme(){return St.name},get children(){return[n(Cu,{onConfig:i}),n(Wt,{title:`B - nested provider (canvas), renderer prop says svg`,get children(){return n(Su,{class:`chart-sm`,renderer:`svg`,option:S,onInstance:o,onRendered:y})}})]}})]}})),t})(),(()=>{var e=id();return T(e,n(F,{class:`chart-sm`,option:ee,autoMerge:!0,get theme(){return M.name},onEvents:{finished:b},containerProps:{title:`autoMerge chart - driven by optionMergePlan`}}),null),T(e,n(F,{class:`chart-sm`,option:te,get theme(){return M.name},onEvents:{finished:x},containerProps:{title:`debounce(300 ms) - slider to option`}}),null),e})(),(()=>{var e=ad();return T(e,n(F,{class:`chart-sm`,option:w,renderer:`svg`,get theme(){return M.name},onInit:s,onReInit:s,onEvents:{finished:y},containerProps:{title:`graphic.LinearGradient + color helpers (svg)`}}),null),T(e,n(F,{class:`chart-sm`,option:ne,get theme(){return M.name},containerProps:{title:`registerTransform - examples:moving-average`}}),null),e})()]}}),n(V,{code:yu,get children(){return[n(Ft,{get children(){var e=od();return T(e,()=>ln(`useConfig() resolves provider values; a createChart wrapper applies them with the same prop > provider > default precedence as SolidEChart.`)),e}}),n(P,{get sections(){return[{title:`useConfig + createChart wrapper`,items:E.configItems},{title:`buildSignature + optionMergePlan`,items:E.mergeItems},{title:`debounce`,items:E.debounceItems},{title:`graphic + color`,items:E.graphicItems},{title:`registerTransform`,items:E.transformItems}]}}),n(G,{get children(){return[(()=>{var t=sd(),n=t.firstChild.nextSibling,r=n.nextSibling.nextSibling;return T(n,e),T(r,()=>c()?.renderer()??`-`),t})(),(()=>{var e=cd(),t=e.firstChild.nextSibling;return T(t,()=>`notMerge ${String(C().notMerge)}, replaceMerge [${C().replaceMerge.join(`, `)}]`),e})(),(()=>{var e=ld(),t=e.firstChild.nextSibling;return T(t,()=>JSON.stringify(C().signature)),e})(),(()=>{var e=ud(),t=e.firstChild.nextSibling;return T(t,()=>`${re()} / ${ie()}`),T(e,()=>` (calls ${ae()}, executions ${oe()})`,null),e})(),(()=>{var e=dd(),t=e.firstChild.nextSibling;return T(t,()=>`${se()} / ${ce()}`),e})()]}}),n(Nt,{get children(){return[n(N,{onClick:l,get children(){return`Provider renderer: ${e()===`svg`?`canvas`:`svg`}`}}),n(h,{each:le,children:({action:e,label:t})=>n(N,{onClick:e,children:t})})]}}),n(bu,{get value(){return re()},min:0,max:100,onChange:g}),n(Nt,{get children(){return[n(N,{onClick:_,children:`Burst 10 calls`}),n(N,{onClick:v,get children(){return`Moving average window: ${se()}`}})]}})]}})]},md=`import type { Component } from "solid-js";
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
`,hd=()=>{let[e,t]=l(!1),[n,r]=l(`-`),[i,a]=l(`-`),[o,s]=l(`-`),[c,u]=l(`-`);return{setCountA:r,setCountB:a,setCountC:s,setCountD:u,countA:n,countB:i,countC:o,countD:c,setRemoveSeries:t,removeSeries:e}},gd=e=>{let{setCountA:t,setCountB:n,setCountC:r,setCountD:i,setRemoveSeries:a}=e;return{toggleRemoveSeries:()=>{a(e=>!e)},finishedA:(e,n)=>{qt(n,t)},finishedB:(e,t)=>{qt(t,n)},finishedC:(e,t)=>{qt(t,r)},finishedD:(e,t)=>{qt(t,i)}}},_d=e=>{let{countA:t,countB:n,countC:r,countD:i,removeSeries:a}=e;return[{label:`Initial state - all 4 charts render 3 series`,expected:()=>a()?`varies`:`3 / 3 / 3 / 3`,actual:()=>`${t()} / ${n()} / ${r()} / ${i()}`,pass:()=>a()?!0:t()===3&&n()===3&&r()===3&&i()===3},{label:`Provider inheritance - Charts A and C: autoMerge: true inherited, stale series removed (count = 1)`,expected:()=>a()?`1 / 1`:`3 / 3`,actual:()=>`${t()} / ${r()}`,pass:()=>t()===`-`?!0:a()?t()===1&&r()===1:t()===3&&r()===3},{label:`Per-chart override - Chart B: autoMerge={false} overrides provider, stale series linger (count stays at 3)`,expected:()=>`3`,actual:()=>String(n()),pass:()=>n()===`-`||n()===3},{label:`Nested provider - Chart D: inner provider autoMerge: false applies to subtree only, stale series linger (count stays at 3)`,expected:()=>`3`,actual:()=>String(i()),pass:()=>i()===`-`||i()===3}]},vd=Hn.CATEGORIES,yd=Hn.THREE_SERIES,bd=Hn.ONE_SERIES,xd=e=>{let{removeSeries:t}=e;return()=>z({tooltip:{trigger:`axis`},legend:{},xAxis:{type:`category`,data:vd},yAxis:{type:`value`},series:t()?bd:yd})},Sd=y(`<span>Series removed: <strong>`),Cd=()=>{let e=hd(),t=gd(e),n=_d(e),r=xd(e);return{...e,...t,checklist:n,option:r}},wd=()=>{let{finishedA:e,finishedB:t,finishedC:r,finishedD:i,option:a,removeSeries:o,toggleRemoveSeries:s,checklist:c}=Cd();return n(D,{get theme(){return M.name},updateOptions:{autoMerge:!0},get children(){return[n(H,{class:`gap-4 grid grid-cols-2`,get children(){return[n(F,{containerProps:{title:`Chart A - inherits provider`,note:`autoMerge: true (from provider) - stale series gone`},option:a,class:`chart-sm`,onEvents:{finished:e}}),n(F,{containerProps:{title:`Chart B - per-chart override`,note:`autoMerge: false override - stale series linger`},option:a,autoMerge:!1,class:`chart-sm`,onEvents:{finished:t}}),n(F,{containerProps:{title:`Chart C - inherits provider`,note:`autoMerge: true (from provider) - stale series gone`},option:a,class:`chart-sm`,onEvents:{finished:r}}),n(Wt,{title:`Chart D - nested provider overrides with autoMerge: false for its subtree only`,note:`Nested chart inherits autoMerge: false - stale series linger (expected)`,get children(){return n(D,{updateOptions:{autoMerge:!1},get children(){return n(_t,{option:a,class:`chart-sm`,onEvents:{finished:i}})}})}})]}}),n(V,{code:md,get children(){return[n(P,{sections:[{items:c}]}),n(G,{get children(){var e=Sd(),t=e.firstChild.nextSibling;return T(t,()=>o()?`yes - Beta and Gamma removed`:`no`),e}}),n(Nt,{get children(){return n(N,{onClick:s,get children(){return o()?`Restore Beta + Gamma`:`Remove Beta + Gamma`}})}})]}})]}})},Td=`import type { Component } from "solid-js";
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
`,Ed=()=>{let[e,t]=l(W),[n,r]=l(`bar`),[i,a]=l(0),[o,s]=l(0),[c,u]=l(`-`),[d,f]=l(0),[p,m]=l(`-`);return{setSalesData:t,setSeriesType:r,setRandomiseCount:a,setClickCount:s,setLastClicked:u,setFinishedCount:f,setRenderedType:m,randomiseCount:i,clickCount:o,finishedCount:d,lastClicked:c,renderedType:p,seriesType:n,salesData:e}},Dd=e=>e.map(()=>Math.round(Math.random()*300)),Od=e=>{let t=gn(e,`type`);return typeof t==`string`?t:`-`},kd=e=>{let{setSalesData:t,setSeriesType:n,setRandomiseCount:r,setClickCount:i,setLastClicked:a,setFinishedCount:o,setRenderedType:s,seriesType:c}=e;return{handleClick:e=>{i(R),a(e.name)},handleFinished:(e,t)=>{o(R),s(Od(t))},cycleType:()=>{let e=tr.indexOf(c());n(tr[(e+1)%tr.length])},randomise:()=>{t(e=>Dd(e)),r(R)}}},Ad=e=>{let{randomiseCount:t,clickCount:n,finishedCount:r,lastClicked:i,renderedType:a,seriesType:o}=e;return[{label:`Reactive data - option updates re-render the chart (finished fires on each randomise)`,expected:()=>t()>0?`≥ ${t()+1}`:`click Randomise`,actual:()=>String(r()),pass:()=>r()>=t()+1},{label:`Reactive series type - chart re-renders with new type on switch`,expected:()=>o(),actual:()=>a(),pass:()=>a()===`-`||a()===o()},{label:`onEvents 'click' - fires when a chart element is clicked`,expected:()=>n()>0?`≥ 1`:`click a data point`,actual:()=>n()>0?`${n()} (last: ${i()})`:`-`,pass:()=>!0}]},jd=e=>{let{seriesType:t,salesData:n}=e;return()=>z({tooltip:{},legend:{data:[`Sales`]},xAxis:{data:U},yAxis:{},series:[{name:`Sales`,type:t(),data:n()}]})},Md=()=>{let e=Ed(),t=kd(e),n=Ad(e),r=jd(e);return{...e,...t,checklist:n,option:r}},Nd=()=>{let{handleClick:e,handleFinished:t,cycleType:r,randomise:i,option:a,seriesType:o,checklist:s}=Md();return n(D,{get theme(){return M.name},renderer:`canvas`,get children(){return[n(H,{get children(){return n(F,{option:a,class:`chart-lg`,onEvents:{click:e,finished:t}})}}),n(V,{code:Td,get children(){return[n(P,{sections:[{items:s}]}),n(Nt,{get children(){return[n(N,{onClick:i,children:`Randomise data`}),n(N,{onClick:r,get children(){return`Switch type (current: ${o()})`}})]}})]}})]}})},Pd=`import type { Component } from "solid-js";
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
`,Fd=()=>{let[e,t]=l(`canvas`),[n,r]=l(0),[i,a]=l(0),[o,s]=l(0),[c,u]=l(0),[d,f]=l(`-`),[p,m]=l(0);return{renderer:e,setRenderer:t,initCount:n,setInitCount:r,reInitCount:i,setReInitCount:a,switchCount:o,setSwitchCount:s,disposeCount:c,setDisposeCount:u,currentRenderer:d,setCurrentRenderer:f,finishedCount:p,setFinishedCount:m}},Id=e=>{let{setRenderer:t,setInitCount:n,setReInitCount:r,setSwitchCount:i,setDisposeCount:a,setCurrentRenderer:o,setFinishedCount:s}=e,c=e=>{let t=e.getDom(),n=e=>t.querySelector(e)!==null,r=n(`canvas`),i=n(`svg`);o(r?`canvas ✓`:i?`svg ✓`:`unknown ×`)};return{toggleRenderer:()=>{i(R),t(e=>e===`canvas`?`svg`:`canvas`)},handleDispose:()=>{a(R)},handleFinished:()=>{s(R)},handleInit:e=>{n(R),c(e)},handleReInit:e=>{r(R),c(e)}}},Ld=e=>{let{initCount:t,reInitCount:n,switchCount:r,renderer:i,currentRenderer:a,disposeCount:o,finishedCount:s}=e,c=()=>t()+n();return[{label:`onInit fires once - for the first instance only`,expected:()=>`1`,actual:()=>String(t()),pass:()=>t()===1},{label:`onReInit fires on each renderer switch - reInitCount === switchCount`,expected:()=>String(r()),actual:()=>String(n()),pass:()=>n()===r()},{label:`DOM reflects renderer - container has <canvas> or <svg> matching the prop`,expected:()=>`${i()} ✓`,actual:()=>a(),pass:()=>a()===`${i()} ✓`},{label:`onDispose fires before each reinit - disposeCount === instances - 1`,expected:()=>String(c()-1),actual:()=>String(o()),pass:()=>o()===c()-1},{label:`Option reapplied after reinit - 'finished' fires after each switch`,expected:()=>`≥ ${c()}`,actual:()=>String(s()),pass:()=>s()>=c()}]},Rd=()=>z({tooltip:{trigger:`axis`},xAxis:{type:`category`,data:U},yAxis:{type:`value`},series:un([{type:`line`,smooth:!0,data:W}])}),zd=y(`<div>Renderer prop: <strong>`),Bd=y(`<div>DOM confirms: <strong>`),Vd=y(`<div>onInit count: <strong></strong> (first instance only)`),Hd=y(`<div>onReInit count: <strong></strong> (increments on each switch)`),Ud=y(`<div>Dispose count: <strong></strong> (always one less than the instances created)`),Wd=y(`<div class="mt-3 flex gap-2">`),Gd=()=>{let e=Fd(),t=Id(e),n=Ld(e),r=Rd;return{...e,...t,checklist:n,option:r}},Kd=()=>{let{toggleRenderer:e,handleDispose:t,handleFinished:r,handleInit:i,handleReInit:a,renderer:o,initCount:s,reInitCount:c,disposeCount:l,currentRenderer:u,checklist:d,option:f}=Gd();return n(D,{get theme(){return M.name},get children(){return[n(H,{get children(){return n(F,{option:f,renderer:o,class:`chart-lg`,onInit:i,onReInit:a,onDispose:t,onEvents:{finished:r}})}}),n(V,{code:Pd,get children(){return[n(P,{sections:[{items:d}]}),n(G,{get children(){return[(()=>{var e=zd(),t=e.firstChild.nextSibling;return T(t,o),e})(),(()=>{var e=Bd(),t=e.firstChild.nextSibling;return T(t,u),e})(),(()=>{var e=Vd(),t=e.firstChild.nextSibling;return T(t,s),e})(),(()=>{var e=Hd(),t=e.firstChild.nextSibling;return T(t,c),e})(),(()=>{var e=Ud(),t=e.firstChild.nextSibling;return T(t,l),e})()]}}),(()=>{var t=Wd();return T(t,n(N,{onClick:e,get children(){return`Switch to ${o()===`canvas`?`SVG`:`canvas`} renderer`}})),t})()]}})]}})},qd=`import type { Component } from "solid-js";

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
`,Jd=()=>{let[e,t]=ta({highlight:!1,downplay:!1,select:!1,showTip:!1,hideTip:!1,legend:!1,zoom:!1,restore:!1}),[n,r]=ta({highlight:0,downplay:0,select:0,showTip:0,legend:0,dataZoom:0,restore:0}),[i,a]=l(null),[o,s]=l(null);return{dispatched:e,setDispatched:t,eventCounts:n,setEventCounts:r,activeDataIndex:i,setActiveDataIndex:a,lastZoomRange:o,setLastZoomRange:s}},Yd=(e,t)=>[{title:`HIGHLIGHT / DOWNPLAY`,actions:[...t.map((t,n)=>({label:t,onClick:()=>{e.highlightBar(n)}})),{label:`Downplay all`,onClick:e.downplayAll},{label:`Apr (notBlur)`,onClick:()=>{e.highlightWithoutBlur(3)}}]},{title:`SELECT / UNSELECT (requires selectedMode on series)`,actions:[{label:`Select Jan`,onClick:()=>{e.selectBar(0)}},{label:`Select Jun`,onClick:()=>{e.selectBar(5)}},{label:`Toggle Dec`,onClick:()=>{e.toggleBar(11)}},{label:`Unselect All`,onClick:()=>{e.unselectAll()}}]},{title:`TOOLTIP`,actions:[{label:`Show tip at Jan`,onClick:()=>{e.showTipAtData(0)}},{label:`Show tip at Jul`,onClick:()=>{e.showTipAtData(6)}},{label:`Hide tip`,onClick:e.hideTip}]},{title:`LEGEND`,actions:[{label:`Toggle Revenue`,onClick:e.toggleRevenueLegend},{label:`Select all`,onClick:e.selectAllLegend},{label:`Inverse select`,onClick:e.inverseSelectLegend}]},{title:`DATAZOOM`,actions:[{label:`Zoom Q1 (0-25%)`,onClick:e.zoomToQ1},{label:`Zoom H2 (50-100%)`,onClick:e.zoomToH2},{label:`Reset zoom`,onClick:e.resetZoom}]},{title:`RESTORE`,actions:[{label:`Restore (resets all interactions)`,onClick:e.restore}]}],Xd=(e,t,n)=>{let{setDispatched:r,setActiveDataIndex:i,setLastZoomRange:a}=t;return{highlightBar:t=>{e(A.downplay({})),r({downplay:!0}),i(t),e(A.highlight({seriesIndex:0,dataIndex:t})),r({highlight:!0})},downplayAll:()=>{i(null),r({downplay:!0}),e(A.downplay({}))},highlightWithoutBlur:t=>{e(A.downplay({})),r({downplay:!0}),e(A.highlight({seriesIndex:0,dataIndex:t,notBlur:!0})),r({highlight:!0}),i(t)},selectBar:t=>{r({select:!0}),e(A.select({seriesIndex:0,dataIndex:t}))},unselectAll:()=>{r({select:!0}),e(A.unselect({seriesIndex:0,dataIndex:[...n.keys()]}))},toggleBar:t=>{r({select:!0}),e(A.toggleSelect({seriesIndex:0,dataIndex:t}))},showTipAtData:t=>{r({showTip:!0}),e(A.showTip({seriesIndex:0,dataIndex:t}))},hideTip:()=>{r({hideTip:!0}),e(A.hideTip())},toggleRevenueLegend:()=>{r({legend:!0}),e(A.legendToggleSelect({name:`Revenue`}))},selectAllLegend:()=>{r({legend:!0}),e(A.legendAllSelect())},inverseSelectLegend:()=>{r({legend:!0}),e(A.legendInverseSelect())},zoomToQ1:()=>{r({zoom:!0}),a({start:0,end:25}),e(A.dataZoom({start:0,end:25}))},zoomToH2:()=>{r({zoom:!0}),a({start:50,end:100}),e(A.dataZoom({start:50,end:100}))},resetZoom:()=>{r({zoom:!0}),a({start:0,end:100}),e(A.dataZoom({start:0,end:100}))},restore:()=>{i(null),a(null),r({restore:!0}),e(A.restore())}}},Zd=e=>{let{dispatched:t,eventCounts:n,lastZoomRange:r}=e;return[{label:`highlight - emphasis event fires on the chart when a bar button is pressed`,expected:()=>t.highlight?`≥ 1`:`press a bar button`,actual:()=>n.highlight,pass:()=>!t.highlight||n.highlight>0},{label:`downplay - downplay event fires when Downplay all or any bar button is pressed`,expected:()=>t.downplay?`≥ 1`:`press Downplay all or a bar button`,actual:()=>n.downplay,pass:()=>!t.downplay||n.downplay>0},{label:`select / unselect / toggleSelect - selectchanged event fires`,expected:()=>t.select?`≥ 1`:`press a select button`,actual:()=>n.select,pass:()=>!t.select||n.select>0},{label:`showTip - showTip event fires when show tip button is pressed`,expected:()=>t.showTip?`≥ 1`:`press Show tip`,actual:()=>n.showTip,pass:()=>!t.showTip||n.showTip>0},{label:`hideTip - our hideTip dispatch was sent (event count not meaningful)`,expected:()=>t.hideTip?`dispatched`:`press Hide tip`,actual:()=>t.hideTip?`dispatched`:`-`,pass:()=>!0},{label:`legend actions - legendselectchanged fires on toggle / allSelect / inverseSelect`,expected:()=>t.legend?`≥ 1`:`press a legend button`,actual:()=>n.legend,pass:()=>!t.legend||n.legend>0},{label:`dataZoom - datazoom event fires when a zoom button is pressed`,expected:()=>{let e=r();return e===null?`press a zoom button`:`≥ 1 (start: ${e.start}%, end: ${e.end}%)`},actual:()=>n.dataZoom,pass:()=>!t.zoom||n.dataZoom>0},{label:`restore - restore event fires when Restore button is pressed`,expected:()=>t.restore?`≥ 1`:`press Restore`,actual:()=>n.restore,pass:()=>!t.restore||n.restore>0}]},Qd=e=>()=>z({tooltip:{trigger:`axis`},legend:{data:[`Revenue`,`Expenses`]},dataZoom:[{type:`inside`},{type:`slider`}],xAxis:{type:`category`,data:e.cat},yAxis:{type:`value`},series:[{name:`Revenue`,type:`bar`,data:e.revenue,selectedMode:`multiple`,emphasis:{focus:`self`,itemStyle:{color:`#1d4a87`}}},un({name:`Expenses`,type:`line`,smooth:!0,data:e.expenses,emphasis:{focus:`self`}})]}),$d=y(`<div class="mt-3 flex flex-col gap-4">`),ef=()=>{let{instance:e,dispatch:t}=$e(),n=Jd(),r=Yd(Xd(t,n,Kn),Gn),i=Zd(n),{setEventCounts:a,setActiveDataIndex:o}=n,c=[[`globalout`,()=>{o(null)}],...[[`highlight`,`highlight`],[`downplay`,`downplay`],[`selectchanged`,`select`],[`showtip`,`showTip`],[`legendselectchanged`,`legend`],[`datazoom`,`dataZoom`],[`restore`,`restore`]].map(([e,t])=>[e,()=>{a(t,R)}])];return f(()=>{let t=e();if(t&&!t.isDisposed()){for(let[e,n]of c)t.on(e,n);s(()=>{for(let[e,n]of c)t.off(e,n)})}}),{actionGroups:r,checklist:i}},tf=()=>{let{checklist:e,actionGroups:t}=ef();return(()=>{var r=$d();return T(r,n(P,{sections:[{items:e}]}),null),T(r,n(h,{each:t,children:({title:e,actions:t})=>n(xs,{title:e,actions:t})}),null),r})()},nf=()=>{let[e,t]=l(),r=Qd({cat:Gn,expenses:qn,revenue:Kn});return n(D,{get theme(){return M.name},get children(){return[n(H,{get children(){return n(Wt,{get children(){return n(_t,{option:r,class:`chart-lg`,get children(){return n(E,{get when(){return e()},children:e=>n(g,{get mount(){return e()},get children(){return n(tf,{})}})})}})}})}}),n(V,{code:qd,ref:t})]}})},rf=`import type { Component } from "solid-js";

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
`,af=[`graph`,`tree`,`sankey`],of={graph:`graphroam`,tree:`treeroam`,sankey:`sankeyroam`},sf=()=>({zoom:1,center:`-`}),cf=()=>({zoomExpected:null,zoomActual:null,centerBefore:null,centerAfter:null}),lf=()=>{let[e,t]=l(null),[n,r]=l(null),[i,a]=l(null),[o,s]=ta({graphroam:0,treeroam:0,sankeyroam:0,dragnode:0,treeexpandandcollapse:0,focusnodeadjacency:0,unfocusnodeadjacency:0}),[c,u]=ta({graphroam:null,treeroam:null,sankeyroam:null,dragnode:null,treeexpandandcollapse:null,focusnodeadjacency:null,unfocusnodeadjacency:null}),[d,f]=ta({graph:sf(),tree:sf(),sankey:sf()}),[p,m]=ta({graph:cf(),tree:cf(),sankey:cf()}),[h,g]=l([]);return{instances:{graph:e,tree:n,sankey:i},setInstances:{graph:t,tree:r,sankey:a},counts:o,setCounts:s,roundTrips:c,setRoundTrips:u,views:d,setViews:f,probes:p,setProbes:m,log:h,setLog:g}},uf=1.5,df=1/uf,ff=e=>[{title:`GRAPH - graphRoam, focusNodeAdjacency`,actions:[{label:`Pan +60 / +30`,onClick:()=>{e.pan(`graph`,1)}},{label:`Pan -60 / -30`,onClick:()=>{e.pan(`graph`,-1)}},{label:`Zoom x1.5`,onClick:()=>{e.zoom(`graph`,uf)}},{label:`Zoom x0.67`,onClick:()=>{e.zoom(`graph`,df)}},{label:`Focus Pump adjacency`,onClick:e.focusNode},{label:`Unfocus`,onClick:e.unfocusNode}]},{title:`TREE - treeRoam, treeExpandAndCollapse`,actions:[{label:`Pan +60 / +30`,onClick:()=>{e.pan(`tree`,1)}},{label:`Pan -60 / -30`,onClick:()=>{e.pan(`tree`,-1)}},{label:`Zoom x1.5`,onClick:()=>{e.zoom(`tree`,uf)}},{label:`Zoom x0.67`,onClick:()=>{e.zoom(`tree`,df)}},{label:`Toggle Line A`,onClick:e.toggleTreeNode}]},{title:`SANKEY - sankeyRoam, dragNode`,actions:[{label:`Pan +60 / +30`,onClick:()=>{e.pan(`sankey`,1)}},{label:`Pan -60 / -30`,onClick:()=>{e.pan(`sankey`,-1)}},{label:`Zoom x1.5`,onClick:()=>{e.zoom(`sankey`,uf)}},{label:`Zoom x0.67`,onClick:()=>{e.zoom(`sankey`,df)}},{label:`Move Preventive node`,onClick:e.moveSankeyNode}]}],pf={min:.4,max:6},mf=e=>Math.min(pf.max,Math.max(pf.min,e)),hf={show:!0,color:wt.textStyle.color},gf=()=>({tooltip:{},series:[{type:`graph`,layout:`none`,roam:!0,zoom:1,scaleLimit:pf,draggable:!0,symbolSize:34,label:hf,lineStyle:{color:`source`,curveness:.2},emphasis:{focus:`adjacency`},data:[{name:`Pump`,x:0,y:0},{name:`Valve`,x:120,y:-60},{name:`Motor`,x:120,y:60},{name:`Sensor`,x:240,y:-90},{name:`Gearbox`,x:240,y:30},{name:`Filter`,x:240,y:120}],links:[{source:`Pump`,target:`Valve`},{source:`Pump`,target:`Motor`},{source:`Valve`,target:`Sensor`},{source:`Motor`,target:`Gearbox`},{source:`Motor`,target:`Filter`},{source:`Valve`,target:`Gearbox`}]}]}),_f=()=>({tooltip:{},series:[{type:`tree`,roam:!0,zoom:1,scaleLimit:pf,initialTreeDepth:2,expandAndCollapse:!0,symbolSize:10,left:`15%`,right:`25%`,label:{...hf,position:`left`,verticalAlign:`middle`,align:`right`},leaves:{label:{position:`right`,verticalAlign:`middle`,align:`left`}},data:[{name:`Plant`,children:[{name:`Line A`,children:[{name:`Press`},{name:`Conveyor`}]},{name:`Line B`,children:[{name:`Mixer`},{name:`Packer`}]},{name:`Utilities`}]}]}]}),vf=()=>({tooltip:{},series:[{type:`sankey`,roam:!0,zoom:1,scaleLimit:pf,draggable:!0,label:hf,emphasis:{focus:`adjacency`},lineStyle:{color:`gradient`,curveness:.5},data:[{name:`Requests`},{name:`Preventive`},{name:`Corrective`},{name:`Done`},{name:`Backlog`}],links:[{source:`Requests`,target:`Preventive`,value:12},{source:`Requests`,target:`Corrective`,value:8},{source:`Preventive`,target:`Done`,value:10},{source:`Preventive`,target:`Backlog`,value:2},{source:`Corrective`,target:`Done`,value:5},{source:`Corrective`,target:`Backlog`,value:3}]}]}),yf=e=>Array.isArray(e)?`[${e.map(e=>typeof e==`number`?e.toFixed(1):String(e)).join(`, `)}]`:`-`,bf=e=>{let t=e.getOption().series,n=Array.isArray(t)?t[0]:t,r=pn(n,`zoom`);return{zoom:typeof r==`number`?r:1,center:yf(pn(n,`center`))}},xf=60,Sf={seriesIndex:0},Cf={graph:A.graphRoam,tree:A.treeRoam,sankey:A.sankeyRoam},wf=e=>{let{instances:t,counts:n,setCounts:r,setRoundTrips:i,setViews:a,setProbes:o,setLog:s}=e,c=e=>{let n=t[e]();return n!==null&&!n.isDisposed()?n:null},l=(e,t)=>(n,i)=>{r(e,R),s(t=>[{time:Zt(),event:e,detail:B(n)},...t].slice(0,15)),t&&a(t,bf(i))},u={graphroam:l(`graphroam`,`graph`),treeroam:l(`treeroam`,`tree`),sankeyroam:l(`sankeyroam`,`sankey`),dragnode:l(`dragnode`),treeexpandandcollapse:l(`treeexpandandcollapse`),focusnodeadjacency:l(`focusnodeadjacency`),unfocusnodeadjacency:l(`unfocusnodeadjacency`)},d=(e,t,r)=>{let a=n[t];e.dispatchAction(r),i(t,n[t]-a)},f=(e,t)=>{let n=c(e);if(!n)return;let r=bf(n);d(n,of[e],Cf[e]({...Sf,...t}));let i=bf(n);a(e,i),t.zoom===void 0?o(e,{centerBefore:r.center,centerAfter:i.center}):o(e,{zoomExpected:mf(r.zoom*t.zoom),zoomActual:i.zoom})};return{handlers:u,pan:(e,t)=>{f(e,{dx:xf*t,dy:xf/2*t})},zoom:(e,t)=>{let n=c(e);n&&f(e,{zoom:t,originX:n.getWidth()/2,originY:n.getHeight()/2})},focusNode:()=>{let e=c(`graph`);e&&d(e,`focusnodeadjacency`,A.focusNodeAdjacency({seriesIndex:0,dataIndex:0}))},unfocusNode:()=>{let e=c(`graph`);e&&d(e,`unfocusnodeadjacency`,A.unfocusNodeAdjacency({seriesIndex:0}))},toggleTreeNode:()=>{let e=c(`tree`);e&&d(e,`treeexpandandcollapse`,{type:`treeExpandAndCollapse`,seriesIndex:0,dataIndex:1})},moveSankeyNode:()=>{let e=c(`sankey`);if(!e)return;let t=n.dragnode%4;d(e,`dragnode`,{type:`dragNode`,seriesIndex:0,dataIndex:1,localX:140,localY:30+t*40})}}},Tf=`press a button`,Ef=1e-6,Df={graph:`graphRoam`,tree:`treeRoam`,sankey:`sankeyRoam`},Of=e=>e===null?`-`:e.toFixed(3),kf=e=>{let{roundTrips:t,probes:n}=e,r=(e,n)=>({label:e,expected:()=>t[n]===null?Tf:1,actual:()=>t[n]??`-`,pass:()=>t[n]===null||t[n]===1});return[{title:`ROAM ACTIONS - dispatch, event, instance`,items:af.flatMap(e=>{let t=Df[e],i=of[e];return[r(`${t} - one dispatch fires exactly one '${i}' event`,i),{label:`${t} zoom - series.zoom in getOption() = previous zoom x factor (within scaleLimit)`,expected:()=>n[e].zoomExpected===null?Tf:Of(n[e].zoomExpected),actual:()=>Of(n[e].zoomActual),pass:()=>{let{zoomExpected:t,zoomActual:r}=n[e];return t===null||r===null||Math.abs(t-r)<Ef}},{label:`${t} pan - series.center in getOption() moves`,expected:()=>n[e].centerBefore===null?Tf:`centre changed`,actual:()=>`${n[e].centerBefore??`-`} -> ${n[e].centerAfter??`-`}`,pass:()=>{let{centerBefore:t,centerAfter:r}=n[e];return t===null||t!==r}}]})},{title:`NODE ACTIONS - dispatch, event`,items:[r(`focusNodeAdjacency - fires 'focusnodeadjacency'`,`focusnodeadjacency`),r(`unfocusNodeAdjacency - fires 'unfocusnodeadjacency'`,`unfocusnodeadjacency`),r(`treeExpandAndCollapse - fires 'treeexpandandcollapse'`,`treeexpandandcollapse`),r(`dragNode - fires 'dragnode' (sankey series)`,`dragnode`)]}]},Af=y(`<div class="gap-4 grid lg:grid-cols-3">`),jf=y(`<span>`),Mf=y(`<div>events: <strong>`),Nf=y(`<div class="mb-4 flex flex-col gap-4">`),Pf=y(`<div><strong></strong> center <strong>`);ft([je,we,Se]);var Ff=()=>{let e=lf(),t=wf(e);return{...e,...t,checklist:kf(e),actionGroups:ff(t),graphOption:gf,treeOption:_f,sankeyOption:vf}},If=e=>({entry:` - ${e.detail}`,isRegular:!e.event.endsWith(`roam`)}),Lf=()=>{let{handlers:e,setInstances:t,views:r,counts:i,log:a,checklist:o,actionGroups:s,graphOption:c,treeOption:l,sankeyOption:u}=Ff();return n(D,{get theme(){return M.name},get children(){return[n(H,{get children(){var r=Af();return T(r,n(F,{option:c,class:`chart-sm`,ref(e){var n=t.graph;typeof n==`function`?n(e):t.graph=e},containerProps:{title:`graph`,note:`graphRoam, focusNodeAdjacency`},get onEvents(){return{graphroam:e.graphroam,focusnodeadjacency:e.focusnodeadjacency,unfocusnodeadjacency:e.unfocusnodeadjacency}}}),null),T(r,n(F,{option:l,class:`chart-sm`,ref(e){var n=t.tree;typeof n==`function`?n(e):t.tree=e},containerProps:{title:`tree`,note:`treeRoam, treeExpandAndCollapse`},get onEvents(){return{treeroam:e.treeroam,treeexpandandcollapse:e.treeexpandandcollapse}}}),null),T(r,n(F,{option:u,class:`chart-sm`,ref(e){var n=t.sankey;typeof n==`function`?n(e):t.sankey=e},containerProps:{title:`sankey`,note:`sankeyRoam, dragNode`},get onEvents(){return{sankeyroam:e.sankeyroam,dragnode:e.dragnode}}}),null),r}}),n(V,{code:rf,get children(){return[n(Ft,{get children(){var e=jf();return T(e,()=>ln(`Wheel and drag roam the charts directly; the buttons dispatch the same roam actions. The dragnode event belongs to the sankey series (graph nodes do not emit it).`)),e}}),n(P,{sections:o}),n(G,{get children(){return[n(h,{each:af,children:e=>(()=>{var t=Pf(),n=t.firstChild,i=n.nextSibling.nextSibling;return T(t,`${e}: zoom `,n),T(n,()=>r[e].zoom.toFixed(3)),T(i,()=>r[e].center),t})()}),(()=>{var e=Mf(),t=e.firstChild.nextSibling;return T(t,()=>`graph ${i.graphroam} / tree ${i.treeroam} / sankey ${i.sankeyroam}`),T(e,()=>` - focus ${i.focusnodeadjacency}, unfocus ${i.unfocusnodeadjacency}, expand ${i.treeexpandandcollapse}, dragnode ${i.dragnode}`,null),e})()]}}),(()=>{var e=Nf();return T(e,n(h,{each:s,children:({title:e,actions:t})=>n(xs,{title:e,actions:t})})),e})(),n(nl,{get entries(){return a()},entryMapper:If,eventKey:`event`,placeholder:`Roam a chart or press a button`})]}})]}})},Rf=`import type { Component } from "solid-js";

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
`,zf=()=>{let[e,t]=l([]),[n,r]=l([]),[i,a]=l(0),[o,s]=l(0),[c,u]=l(0),[d,f]=l(0);return{onceLog:n,clickCount:i,blankClickCount:o,onceClickCount:c,onceMoveCount:d,persistentLog:e,setPersistentLog:t,setOnceLog:r,setClickCount:a,setBlankClickCount:s,setOnceClickCount:u,setOnceMoveCount:f}},Bf=e=>e.target==null,Vf=e=>{let{setPersistentLog:t,setOnceLog:n,setClickCount:r,setBlankClickCount:i,setOnceClickCount:a,setOnceMoveCount:o}=e,s=e=>{r(R),Bf(e)&&i(R),Qt(t,e,`click`,!1)},c=e=>{t(t=>{let n=t.at(0);return n?.event===`mousemove`?[{...n,x:Math.round(e.offsetX),y:Math.round(e.offsetY)},...t.slice(1)]:[{time:Zt(),event:`mousemove`,x:Math.round(e.offsetX),y:Math.round(e.offsetY),onBlank:Bf(e),once:!1},...t].slice(0,15)})},l=(e,t)=>{Qt(n,e,t,!0)};return{handleOnceClick:e=>{a(R),l(e,`click (once)`)},handleOnceMove:e=>{o(R),l(e,`mousemove (once)`)},handleSurfaceClick:s,handleSurfaceMove:c}},Hf=e=>{let{onceLog:t,clickCount:n,blankClickCount:r,onceClickCount:i,onceMoveCount:a}=e;return[{label:`onSurfaceEvents - persistent click handler fires on every canvas click`,expected:()=>n()>0?`≥ 1`:`click anywhere on the chart`,actual:()=>String(n()),pass:()=>!0},{label:`onSurfaceEvents - event.target is null on blank area (click outside bars)`,expected:()=>r()>0?`≥ 1`:`click blank area (outside bars)`,actual:()=>r()>0?`${r()} blank click(s)`:`-`,pass:()=>!0},{label:`onSurfaceEventsOnce - click handler fires at most once`,expected:()=>i()>0?`1`:`click chart to test`,actual:()=>i()>0?String(i()):`-`,pass:()=>i()<=1},{label:`onSurfaceEventsOnce - mousemove handler fires at most once`,expected:()=>a()>0?`1`:`move mouse over chart to test`,actual:()=>a()>0?String(a()):`-`,pass:()=>a()<=1},{label:`onSurfaceEventsOnce - log stays frozen after both handlers have fired`,expected:()=>i()>0&&a()>0?`≤ 2 entries (frozen)`:`fire both once-handlers first`,actual:()=>i()>0&&a()>0?`${t().length} entries`:`-`,pass:()=>i()>0&&a()>0?t().length<=2:!0}]},Uf=()=>z({tooltip:{trigger:`item`},xAxis:{type:`category`,data:zn},yAxis:{type:`value`},series:[{type:`bar`,data:Bn}]}),Wf=y(`<p>onSurfaceEvents - persistent`),Gf=y(`<div>Total clicks on canvas: <strong></strong><br>Blank area clicks: <strong></strong><br>Red entries = clicked blank space (event.target is null)`),Kf=y(`<p>onSurfaceEventsOnce - fires once then stops`),qf=y(`<div>click once-handler: <strong></strong><br>mousemove once-handler: <strong>`),Jf=y(`<span>After each handler fires once, subsequent interactions produce no new log entries. Handlers have self-removed.`),Yf=y(`<div class="gap-2 grid grid-cols-2 overflow-hidden"><p>`),Xf=()=>{let e=zf(),t=Vf(e),n=Hf(e),r=Uf;return{...e,...t,checklist:n,option:r}},Zf=()=>{let{blankClickCount:e,checklist:t,clickCount:r,handleOnceClick:i,handleOnceMove:a,handleSurfaceClick:o,handleSurfaceMove:s,onceClickCount:c,onceLog:l,onceMoveCount:u,option:d,persistentLog:f}=Xf(),p=e=>({entry:` at (${e.x} ,  ${e.y}) ${e.onBlank?` - blank area`:` - over element`}`,isRegular:e.onBlank}),m=e=>n(nl,{get entries(){return e.entries},entryMapper:p,eventKey:`event`}),h=()=>({click:i,mousemove:a});return n(D,{get theme(){return M.name},get children(){return[n(H,{class:`gap-6 grid grid-cols-2`,get children(){return[n(F,{option:d,class:`chart-sm`,onSurfaceEvents:{click:o,mousemove:s}}),n(F,{option:d,class:`chart-sm`,onSurfaceEventsOnce:h})]}}),n(V,{code:Rf,get children(){return[n(P,{sections:[{items:t}]}),(()=>{var t=Yf(),i=t.firstChild;return T(t,n(G,{get children(){return[Wf(),(()=>{var t=Gf(),n=t.firstChild.nextSibling,i=n.nextSibling.nextSibling.nextSibling;return T(n,r),T(i,e),t})()]}}),i),T(t,n(G,{get children(){return[Kf(),(()=>{var e=qf(),t=e.firstChild.nextSibling,n=t.nextSibling.nextSibling.nextSibling;return T(t,()=>c()>0?`fired ✓ (stopped)`:`not yet`),T(n,()=>u()>0?`fired ✓ (stopped)`:`not yet`),e})()]}}),i),T(t,n(Ft,{get children(){return Jf()}}),null),T(t,n(m,{get entries(){return f()}}),null),T(t,n(m,{get entries(){return l()}}),null),t})()]}})]}})},Qf=`import type { Component } from "solid-js";
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
`,$f=[`a`,`b`,`c`],ep=[{value:`a`,label:`A - 2 lines`},{value:`b`,label:`B - 2 bars`},{value:`c`,label:`C - line + bar`}],tp={a:[{type:`line`,data:W},{type:`line`,data:Pn}],b:[{type:`bar`,data:Fn},{type:`bar`,data:Rn.slice(0,7)}],c:[{type:`line`,data:Fn.toReversed()},{type:`bar`,data:W}]},np=e=>tp[e].map(({type:e,data:t})=>`${e}:${String(t[0])}`).join(` | `),rp={brand:{name:M.name,color:M.theme.color[0].toLowerCase()},second:{name:St.name,color:St.theme.color[0].toLowerCase()}},ip=[{value:`brand`,label:`Brand`},{value:`second`,label:`Second`}],ap=()=>l(null),op=()=>{let[e,t]=l(`a`),[n,r]=l(`brand`),[i,a]=l(0),[o,s]=ap(),[c,u]=ap(),[d,f]=ap(),[p,m]=ap(),[h,g]=l(!1),[_,v]=l(0),[y,b]=l(0),[x,S]=l(null),[ee,C]=l(null),[te,w]=l(0);return{variant:e,setVariant:t,theme:n,setTheme:r,revision:i,bump:()=>{a(e=>e+1)},defaultChart:o,setDefaultChart:s,autoChart:c,setAutoChart:u,manualChart:d,setManualChart:f,primitiveChart:p,setPrimitiveChart:m,manualStale:h,setManualStale:g,primitiveTheme:()=>(_(),rp[n()].name),nudgeTheme:()=>{v(e=>e+1)},updatedCount:y,setUpdatedCount:b,themeChangeDelta:x,setThemeChangeDelta:S,sameThemeDelta:ee,setSameThemeDelta:C,sameThemeRuns:te,setSameThemeRuns:w}},sp=e=>{let t=tp[e].map(({type:e,data:t})=>({type:e,data:t}));return z({tooltip:{trigger:`axis`},xAxis:{type:`category`,data:U},yAxis:{type:`value`},series:un(t)})},cp=e=>{let{variant:t,setVariant:n,theme:r,setTheme:i,bump:a,manualChart:o,setManualStale:s,nudgeTheme:c,updatedCount:l,setUpdatedCount:u,setThemeChangeDelta:f,setSameThemeDelta:p,setSameThemeRuns:m}=e,h=e=>{let t=o();t&&(t.setOption(sp(e)),s(!1))};return{selectVariant:e=>{n(e),h(e),a()},selectTheme:e=>{if(e===r())return;let t=l();i(e),f(l()-t),s(!0),a()},changeBoth:()=>{let e=$f[($f.indexOf(t())+1)%$f.length],o=r()===`brand`?`second`:`brand`;d(()=>{n(e),h(e),i(o),s(!0)}),a()},reapplyManual:()=>{h(t()),a()},rerunSameTheme:()=>{let e=l();c(),p(l()-e),m(R),a()},handleManualInit:e=>{e.setOption(sp(t()))},handleUpdated:()=>{u(R)}}},lp=e=>typeof e==`object`&&!!e,up=e=>{if(!e||e.isDisposed())return`-`;let t=e.getOption().series;return Array.isArray(t)?t.filter(lp).map(({type:e,data:t})=>{let n=Array.isArray(t)?t[0]:void 0;return`${String(e)}:${String(n)}`}).join(` | `):`-`},dp=e=>e===null?`-`:String(e),fp=e=>{let{variant:t,theme:n,revision:r,defaultChart:i,autoChart:a,manualChart:o,primitiveChart:s,manualStale:c,themeChangeDelta:l,sameThemeDelta:u}=e,d=()=>np(t()),f=e=>()=>(r(),up(e())),p=[{label:`Default merge: displays the CURRENT option, not the first`,expected:d,actual:f(i),pass:()=>f(i)()===d()},{label:`autoMerge (notMerge: true after setTheme): displays the CURRENT option`,expected:d,actual:f(a),pass:()=>f(a)()===d()},{label:`Manual mode: after a theme change shows the FIRST option until set again`,expected:()=>c()?np(`a`):d(),actual:f(o),pass:()=>f(o)()===(c()?np(`a`):d())},{label:`createChart primitive: displays the CURRENT option`,expected:d,actual:f(s),pass:()=>f(s)()===d()}],m=(e,t)=>{let i=()=>(r(),fn(t())),a=()=>rp[n()].color;return{label:e,expected:a,actual:i,pass:()=>i()===a()}};return{option:p,theme:[m(`Default merge: series colour is the first colour of the current theme`,i),m(`autoMerge: series colour is the first colour of the current theme`,a),m(`Manual mode: theme is applied even though the option is stale`,o),m(`createChart primitive: series colour is the first colour of the current theme`,s)],calls:[{label:`Real theme change on the primitive: setTheme + reapplied option = 2 updates`,expected:()=>`2`,actual:()=>dp(l()),pass:()=>l()===null||l()===2},{label:`Accessor re-run with the SAME theme: no setTheme, no reapplied option = 0 updates`,expected:()=>`0`,actual:()=>dp(u()),pass:()=>u()===null||u()===0}]}},pp=y(`<div>`),mp=e=>{let[t,n]=l(null),{instance:i}=ot(t,{theme:()=>e.theme(),autoResize:!1});return dt(i,()=>e.option()),f(()=>{e.onInstance(i())}),f(S(i,t=>{if(!t)return;let n=()=>{e.onUpdated()};t.on(`updated`,n),s(()=>{t.off(`updated`,n)})})),(()=>{var t=pp();return p(n,t),r(()=>C(t,e.class)),t})()},hp=y(`<div class="gap-4 grid grid-cols-2">`),gp=y(`<div>Option variant: <strong></strong> (the first option ever set was A)`),_p=y(`<div>Theme: <strong>`),vp=y(`<div>Manual chart shows: <strong>`),yp=y(`<div>Primitive 'updated' events: <strong>`),bp=y(`<div class="mb-4 flex flex-wrap gap-6">`),xp=()=>{let e=op(),t=cp(e),n=fp(e);return{...e,...t,checklist:n,option:()=>sp(e.variant()),themeName:()=>rp[e.theme()].name}},Sp=()=>{let e=xp();return[n(H,{get children(){var t=hp();return T(t,n(F,{class:`chart-sm`,get option(){return e.option},get theme(){return e.themeName},ref(t){var n=e.setDefaultChart;typeof n==`function`?n(t):e.setDefaultChart=t},get onEvents(){return{finished:e.bump}},containerProps:{title:`(a) Default merge`,note:`option + theme props`}}),null),T(t,n(F,{class:`chart-sm`,get option(){return e.option},get theme(){return e.themeName},autoMerge:!0,ref(t){var n=e.setAutoChart;typeof n==`function`?n(t):e.setAutoChart=t},get onEvents(){return{finished:e.bump}},containerProps:{title:`(b) autoMerge`,note:`reapplied with notMerge: true after setTheme`}}),null),T(t,n(F,{class:`chart-sm`,get theme(){return e.themeName},ref(t){var n=e.setManualChart;typeof n==`function`?n(t):e.setManualChart=t},get onInit(){return e.handleManualInit},get onEvents(){return{finished:e.bump}},containerProps:{title:`(c) Manual mode`,note:`no option prop: set through the instance`}}),null),T(t,n(Wt,{title:`(d) createChart primitive`,note:`theme accessor re-runs without changing`,get children(){return n(mp,{class:`chart-sm`,get option(){return e.option},get theme(){return e.primitiveTheme},get onInstance(){return e.setPrimitiveChart},get onUpdated(){return e.handleUpdated}})}}),null),t}}),n(V,{code:Qf,get children(){return[n(P,{get sections(){return[{title:`DISPLAYED OPTION - chart.getOption() on each live instance`,items:e.checklist.option},{title:`THEME - series colour read from each live instance`,items:e.checklist.theme},{title:`setTheme CALLS - 'updated' events of the primitive chart`,items:e.checklist.calls}]}}),n(G,{get children(){return[(()=>{var t=gp(),n=t.firstChild.nextSibling;return T(n,()=>e.variant().toUpperCase()),t})(),(()=>{var t=_p(),n=t.firstChild.nextSibling;return T(n,()=>e.themeName()),t})(),(()=>{var t=vp(),n=t.firstChild.nextSibling;return T(n,()=>e.manualStale()?`first option (stale)`:`current option`),t})(),(()=>{var t=yp(),n=t.firstChild.nextSibling;return T(n,()=>e.updatedCount()),t})()]}}),(()=>{var t=bp();return T(t,n(jr,{label:`Option variant`,options:ep,get value(){return e.variant()},get onChange(){return e.selectVariant}}),null),T(t,n(jr,{label:`Theme`,options:ip,get value(){return e.theme()},get onChange(){return e.selectTheme}}),null),t})(),n(Nt,{get children(){return[n(N,{get onClick(){return e.changeBoth},children:`Change option and theme in one batch()`}),n(N,{get onClick(){return e.rerunSameTheme},children:`Re-set same theme (primitive)`}),n(N,{get onClick(){return e.reapplyManual},children:`Set current option on manual chart`})]}})]}})]},Cp=`import type { Component } from "solid-js";
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
`,wp=()=>{let[e,t]=l(M.name),[n,r]=l(0),[i,a]=l(0),[o,s]=l(0),[c,u]=l(`-`),[d,f]=l(`-`),[p,m]=l(0);return{currentTheme:e,setCurrentTheme:t,initCountA:n,instanceIdStable:()=>c()===`-`||d()===`-`||c()===d(),setInitCountA:r,disposeCountA:i,setDisposeCountA:a,finishedCountA:o,setFinishedCountA:s,instanceIdA:c,setInstanceIdA:u,instanceIdAfterSwitch:d,setInstanceIdAfterSwitch:f,switchCount:p,setSwitchCount:m}},Tp=[M.name,St.name,Ge],Ep=e=>{let{currentTheme:t,setCurrentTheme:n,setInitCountA:r,setDisposeCountA:i,setFinishedCountA:a,setInstanceIdA:o,setInstanceIdAfterSwitch:s,setSwitchCount:c}=e;return{handleDisposeA:()=>{i(R)},handleFinishedA:(e,t)=>{a(R),s(t.getId())},handleInitA:e=>{r(R),o(e.getId())},cycleTheme:()=>{let e=Tp.indexOf(t());n(Tp[(e+1)%Tp.length]),c(R)}}},Dp=e=>{let{currentTheme:t,initCountA:n,disposeCountA:r,finishedCountA:i,instanceIdA:a,instanceIdAfterSwitch:o,switchCount:s,instanceIdStable:c}=e;return[{label:`No reinit - theme changes in-place via setTheme(), initCount stays at 1`,expected:()=>`1`,actual:()=>String(n()),pass:()=>n()===1},{label:`No dispose - disposeCount stays at 0 through all theme switches`,expected:()=>`0`,actual:()=>String(r()),pass:()=>r()===0},{label:`Same instance - chart getId() unchanged after theme switch`,expected:()=>a()===`-`?`mount chart first`:a(),actual:()=>o()===`-`?`-`:o(),pass:()=>c()},{label:`Re-render after switch - 'finished' fires after each theme change`,expected:()=>s()>0?`>= ${s()+1}`:`>= 1`,actual:()=>String(i()),pass:()=>i()>=s()+1},{label:`Per-chart override - Chart B theme={BRAND_THEME.name} ignores provider (verify visually)`,expected:()=>`always ${M.name}`,actual:()=>`provider: ${t()}`,pass:()=>!0}]},Op=()=>z({tooltip:{trigger:`axis`},legend:{data:[`Revenue`,`Expenses`]},xAxis:{type:`category`,data:Nn.slice(0,6)},yAxis:{type:`value`},series:un([{name:`Revenue`,type:`line`,smooth:!0,data:W},{name:`Expenses`,type:`line`,smooth:!0,data:Pn}])}),kp=y(`<span>Current theme: <strong>`),Ap=()=>{let e=wp(),t=Ep(e),n=Dp(e),r=Op;return{...e,...t,checklist:n,option:r}},jp=()=>{let{checklist:e,currentTheme:t,cycleTheme:r,handleDisposeA:i,handleFinishedA:a,handleInitA:o,option:s,switchCount:c}=Ap();return[n(H,{class:`gap-6 grid grid-cols-2`,get children(){return n(D,{theme:t,get children(){return[n(F,{containerProps:{title:`Chart A: inherits provider theme`},option:s,class:`chart-lg`,onInit:o,onDispose:i,onEvents:{finished:a}}),n(F,{get containerProps(){return{title:`Chart B: always ${M.name} (per-chart override)`}},option:s,get theme(){return M.name},class:`chart-lg`})]}})}}),n(V,{code:Cp,get children(){return[n(P,{sections:[{items:e}]}),n(G,{get children(){var e=kp(),n=e.firstChild.nextSibling;return T(n,t),T(e,()=>` (switched ${c()} time(s))`,null),e}}),n(Nt,{get children(){return n(N,{onClick:r,get children(){return`Cycle theme (${Tp.join(` → `)})`}})}})]}})]},Mp=`import type { Component } from "solid-js";

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
`,Np=[38,21,64,47,12,55],Pp=()=>{let[e,t]=l(null),[n,r]=l(null),[i,a]=l(null),[o,s]=ta({rendered:0,finished:0,showtip:0,hidetip:0,updateaxispointer:0,changeaxisorder:0,click:0,mouseover:0}),[c,u]=ta({rendered:``,finished:``,showtip:``,hidetip:``,updateaxispointer:``,changeaxisorder:``,click:``,mouseover:``}),[d,f]=ta({line:0,area:0,breadcrumb:0}),[p,m]=ta({elapsedTime:null,finishedArg:null,selfTypeViolations:0,showtipFired:null,hidetipFired:null,axisPointerFired:null,showtipEcho:null,orderCountBefore:null}),[h,g]=l([]),[_,v]=l(Np),[y,b]=l(!1);return{instances:{line:e,treemap:n,race:i},setInstances:{line:t,treemap:r,race:a},counts:o,setCounts:s,details:c,setDetails:u,selfTypes:d,setSelfTypes:f,observed:p,setObserved:m,log:h,setLog:g,raceValues:_,setRaceValues:v,racing:y,setRacing:b}},Fp={line:[`line`,`area`],treemap:[`breadcrumb`]},Ip=15,Lp=1500,Rp=(e,t)=>t===void 0||(Fp[e]?.includes(t)??!1),zp=e=>{let t=Math.max(...e)+Math.min(...e);return e.map(e=>t-e)},Bp=e=>{let{instances:t,counts:n,setCounts:r,details:i,setDetails:a,setSelfTypes:o,setObserved:c,setLog:l,setRaceValues:u,racing:d,setRacing:p}=e,m=e=>{let n=t[e]();return n!==null&&!n.isDisposed()?n:null},h=(e,t)=>{r(e,R),a(e,t),l(n=>{let r=n.at(0);return r?.event===e?[{...r,detail:t,repeat:r.repeat+1},...n.slice(1)]:[{time:Zt(),event:e,detail:t,repeat:1},...n].slice(0,Ip)})},g=e=>t=>{h(e,B(t))},_=e=>t=>{let{selfType:n,seriesType:r}=t;n!==void 0&&o(n,R),Rp(r,n)||c(`selfTypeViolations`,R),h(e,`${r} selfType=${n??`none`}`)},v={rendered:e=>{let t=hn(e,`elapsedTime`);c(`elapsedTime`,t??NaN),h(`rendered`,`elapsedTime=${t?.toFixed(1)??`missing`}`)},finished:e=>{let t=e;c(`finishedArg`,typeof t),h(`finished`,`argument is ${typeof t}`)},showtip:g(`showtip`),hidetip:g(`hidetip`),updateaxispointer:g(`updateaxispointer`),changeaxisorder:g(`changeaxisorder`),click:_(`click`),mouseover:_(`mouseover`)},y=()=>{let e=m(`line`);if(!e)return;let t={showtip:n.showtip,axisPointer:n.updateaxispointer};e.dispatchAction(A.showTip({seriesIndex:0,dataIndex:3})),c({showtipFired:n.showtip-t.showtip,axisPointerFired:n.updateaxispointer-t.axisPointer,showtipEcho:vn(i.showtip,`dataIndex`)})},b=()=>{let e=m(`line`);if(!e)return;let t=n.hidetip;e.dispatchAction(A.hideTip()),c(`hidetipFired`,n.hidetip-t)},x=()=>{u(e=>e.map(e=>e+Math.round(Math.random()*30)))};return f(()=>{if(!d())return;let e=setInterval(x,Lp);s(()=>{clearInterval(e)})}),{handlers:v,showTip:y,hideTip:b,stepRace:x,reverseRace:()=>{c(`orderCountBefore`,n.changeaxisorder),u(zp)},resetRace:()=>{u(Np)},toggleRacing:()=>{p(!d())}}},Vp={line:`hover or click the line`,area:`hover or click the area under the line`,breadcrumb:`click a treemap node, then its breadcrumb`},Hp=e=>{let{counts:t,details:n,selfTypes:r,observed:i}=e,a=(e,t)=>({label:t,expected:()=>r[e]===0?Vp[e]:`≥ 1`,actual:()=>r[e],pass:()=>!0}),o=(e,t,n)=>({label:e,expected:()=>n()===null?t:`≥ 1`,actual:()=>n()??`-`,pass:()=>{let e=n();return e===null||e>=1}});return[{title:`LIFECYCLE EVENTS - handler argument types`,items:[{label:`rendered - handler receives RenderedEventParams { elapsedTime: number }`,expected:()=>`finite number, 0 or more`,actual:()=>i.elapsedTime===null?`-`:`${i.elapsedTime.toFixed(2)} ms`,pass:()=>i.elapsedTime===null||Number.isFinite(i.elapsedTime)&&i.elapsedTime>=0},{label:`finished - handler receives undefined, not EventParams`,expected:()=>`undefined`,actual:()=>i.finishedArg??`-`,pass:()=>i.finishedArg===null||i.finishedArg===`undefined`}]},{title:`EventParams.selfType (ECharts 6.1)`,items:[a(`line`,`selfType 'line' - mouse event on the line of a line series`),a(`area`,`selfType 'area' - mouse event on the areaStyle of a line series`),a(`breadcrumb`,`selfType 'breadcrumb' - mouse event on a treemap breadcrumb`),{label:`selfType only appears on the part it names (line / area on line, breadcrumb on treemap)`,expected:()=>0,actual:()=>i.selfTypeViolations,pass:()=>i.selfTypeViolations===0}]},{title:`TOOLTIP, AXIS POINTER AND AXIS ORDER EVENTS`,items:[{label:`showtip - Show tip fires it and the payload (dataIndex) is echoed`,expected:()=>i.showtipFired===null?`press Show tip`:`≥ 1 event, dataIndex=3`,actual:()=>`${i.showtipFired??`-`} event(s), ${i.showtipEcho??`-`}`,pass:()=>i.showtipFired===null||i.showtipFired>=1&&i.showtipEcho===`dataIndex=3`},o(`updateaxispointer - an axis tooltip shown by showTip moves the axis pointer`,`press Show tip`,()=>i.axisPointerFired),o(`hidetip - Hide tip fires it`,`press Hide tip`,()=>i.hidetipFired),{label:`changeaxisorder - Reverse order re-sorts the realtimeSort bars and fires it`,expected:()=>i.orderCountBefore===null?`press Reverse order`:`≥ ${i.orderCountBefore+1}`,actual:()=>t.changeaxisorder,pass:()=>i.orderCountBefore===null||t.changeaxisorder>i.orderCountBefore},{label:`changeaxisorder - EventParams.componentType names the re-ordered axis`,expected:()=>`componentType=yAxis`,actual:()=>t.changeaxisorder===0?`-`:vn(n.changeaxisorder,`componentType`),pass:()=>t.changeaxisorder===0||n.changeaxisorder.includes(`componentType=yAxis`)}]}]},Up=wt.textStyle.color,Wp=[`Press`,`Mixer`,`Packer`,`Lathe`,`Welder`,`Conveyor`],Gp=()=>z({tooltip:{trigger:`axis`},axisPointer:{type:`cross`},xAxis:{type:`category`,data:U},yAxis:{type:`value`},series:un([{type:`line`,data:W,areaStyle:{opacity:.35},triggerEvent:!0}])}),Kp=()=>({series:[{type:`treemap`,nodeClick:`zoomToNode`,roam:!1,top:8,bottom:34,left:8,right:8,breadcrumb:{show:!0,bottom:4,height:22},label:{color:Up},data:[{name:`Line A`,value:40,children:[{name:`Press`,value:25},{name:`Conveyor`,value:15}]},{name:`Line B`,value:35,children:[{name:`Mixer`,value:20},{name:`Packer`,value:15}]},{name:`Utilities`,value:25}]}]}),qp=e=>z({grid:{left:90,right:60,top:16,bottom:24},xAxis:{max:`dataMax`},yAxis:{type:`category`,data:Wp,inverse:!0,max:Wp.length-1,animationDuration:300,animationDurationUpdate:300},series:[{type:`bar`,realtimeSort:!0,data:e,label:{show:!0,position:`right`,valueAnimation:!0,color:Up}}],animationDuration:0,animationDurationUpdate:800,animationEasing:`linear`,animationEasingUpdate:`linear`}),Jp=y(`<div class="gap-4 grid lg:grid-cols-3">`),Yp=y(`<span>`),Xp=y(`<div>rendered: <strong></strong> - last elapsedTime <strong>`),Zp=y(`<div>finished: <strong></strong> - argument was <strong>`),Qp=y(`<div>selfType: <strong>`),$p=y(`<div>showtip / hidetip / updateaxispointer / changeaxisorder: <strong>`);ft([Oe]);var em=()=>{let e=Pp(),t=Bp(e);return{...e,...t,checklist:Hp(e),lineOption:Gp,treemapOption:Kp,raceOption:()=>qp(e.raceValues())}},tm=e=>({entry:` - ${e.detail}${e.repeat>1?` (x${e.repeat})`:``}`,isRegular:e.event===`rendered`||e.event===`finished`}),nm=()=>{let{handlers:e,setInstances:t,counts:r,selfTypes:i,observed:a,log:o,racing:s,checklist:c,lineOption:l,treemapOption:u,raceOption:d,showTip:f,hideTip:p,stepRace:m,reverseRace:h,resetRace:g,toggleRacing:v}=em();return n(D,{get theme(){return M.name},get children(){return[n(H,{get children(){var r=Jp();return T(r,n(F,{option:l,class:`chart-md`,ref(e){var n=t.line;typeof n==`function`?n(e):t.line=e},containerProps:{title:`line + areaStyle`,note:`selfType line / area, showtip, updateaxispointer`},get onEvents(){return{rendered:e.rendered,finished:e.finished,click:e.click,mouseover:e.mouseover,showtip:e.showtip,hidetip:e.hidetip,updateaxispointer:e.updateaxispointer}}}),null),T(r,n(F,{option:u,class:`chart-md`,ref(e){var n=t.treemap;typeof n==`function`?n(e):t.treemap=e},containerProps:{title:`treemap`,note:`click a node, then the breadcrumb`},get onEvents(){return{click:e.click,mouseover:e.mouseover}}}),null),T(r,n(F,{option:d,class:`chart-md`,ref(e){var n=t.race;typeof n==`function`?n(e):t.race=e},containerProps:{title:`bar race`,note:`realtimeSort, changeaxisorder`},get onEvents(){return{changeaxisorder:e.changeaxisorder}}}),null),r}}),n(V,{code:Mp,get children(){return[n(Ft,{get children(){var e=Yp();return T(e,()=>ln(`Hover and click the line and its area, then click a treemap node and its breadcrumb to see selfType. The buttons drive showtip, hidetip and the changeaxisorder race.`)),e}}),n(P,{sections:c}),n(G,{get children(){return[(()=>{var e=Xp(),t=e.firstChild.nextSibling,n=t.nextSibling.nextSibling;return T(t,()=>r.rendered),T(n,(()=>{var e=_(()=>a.elapsedTime===null);return()=>e()?`-`:`${a.elapsedTime.toFixed(1)} ms`})()),e})(),(()=>{var e=Zp(),t=e.firstChild.nextSibling,n=t.nextSibling.nextSibling;return T(t,()=>r.finished),T(n,()=>a.finishedArg??`-`),e})(),(()=>{var e=Qp(),t=e.firstChild.nextSibling;return T(t,()=>`line ${i.line} / area ${i.area} / breadcrumb ${i.breadcrumb}`),e})(),(()=>{var e=$p(),t=e.firstChild.nextSibling;return T(t,()=>`${r.showtip} / ${r.hidetip} / ${r.updateaxispointer} / ${r.changeaxisorder}`),e})()]}}),n(Nt,{get children(){return[n(N,{onClick:f,children:`Show tip (dataIndex 3)`}),n(N,{onClick:p,children:`Hide tip`}),n(N,{onClick:m,children:`Race step`}),n(N,{onClick:h,children:`Reverse order`}),n(N,{onClick:g,children:`Reset race`}),n(N,{onClick:v,get children(){return s()?`Stop auto race`:`Start auto race`}})]}}),n(nl,{get entries(){return o()},entryMapper:tm,eventKey:`event`,placeholder:`Hover the chart or press a button`})]}})]}})},rm=`import type { Component } from "solid-js";
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
`,im=e=>({animation:!1,legend:e?{...wt,data:[`Alpha`,`Beta`]}:void 0,xAxis:{type:`category`,data:U,...Tt},yAxis:{type:`value`,...Tt},series:e?[{name:`Alpha`,type:`bar`,data:W},{name:`Beta`,type:`bar`,data:Pn}]:[{name:`Alpha`,type:`bar`,data:W}]}),am=300,om=e=>Array.isArray(e)?e.length:0,sm=()=>{let[e,t]=l(!1),[n,r]=l(null),i=null,a=0,o=0,c=0,u;return s(()=>{clearTimeout(u)}),{option:()=>(c+=1,im(e())),result:n,handleInit:e=>{i=e,e.on(`updated`,()=>{o+=1})},handleRendered:()=>{a+=1},run:()=>{if(!i)return;let e=a,n=o;t(!0),t(!1);let s=i.getOption();r({seriesCount:Jt(i),legendCount:om(s.legend),syncRendered:a-e,syncUpdated:o-n,settledUpdated:null}),clearTimeout(u),u=setTimeout(()=>{r(e=>e&&{...e,settledUpdated:o-n})},am)},optionEvaluations:()=>c}},cm=[`inherit`,`own`,`propOverOwn`,`propOverProvider`],lm=()=>{let[e,t]=l(`merge`),[n,r]=l(!1),[i,a]=l(!1),[o,s]=l(0),[c,u]=l(0),[d,f]=l(0);return{strategy:e,setStrategy:t,lazyUpdate:n,setLazyUpdate:r,silent:i,setSilent:a,probes:{inherit:sm(),own:sm(),propOverOwn:sm(),propOverProvider:sm()},flagChanges:o,setFlagChanges:s,flagChangeEvaluations:c,setFlagChangeEvaluations:u,probeRuns:d,setProbeRuns:f}},um=e=>{let{probes:t,setStrategy:n,setLazyUpdate:r,setSilent:i}=e,{setFlagChanges:a,setFlagChangeEvaluations:o,setProbeRuns:s}=e,c=()=>cm.reduce((e,n)=>e+t[n].optionEvaluations(),0),l=e=>{let t=c();e(),a(R),o(e=>e+c()-t)};return{changeStrategy:e=>{l(()=>{n(e)})},changeLazyUpdate:e=>{l(()=>{r(e)})},changeSilent:e=>{l(()=>{i(e)})},runProbes:()=>{s(R);for(let e of cm)t[e].run()}}},dm={strategy:`merge`,lazyUpdate:!1,silent:!1},fm=(e,t)=>{let n={strategy:t.strategy(),lazyUpdate:t.lazyUpdate(),silent:t.silent()};switch(e){case`inherit`:return n;case`own`:return{...dm,lazyUpdate:!0};case`propOverOwn`:return dm;case`propOverProvider`:return{...n,lazyUpdate:!1}}},pm={inherit:`Chart A - inherits the provider`,own:`Chart B - per-chart updateOptions`,propOverOwn:`Chart C - flag prop over updateOptions`,propOverProvider:`Chart D - flag prop over provider`},mm=`run the probe`,hm=e=>e.legendCount===0?`notMerge`:e.seriesCount===1?`replaceMerge`:`merge`,gm=(e,t)=>t?0:e?1:2,_m=(e,t)=>{let n=t.probes[e].result,r=()=>fm(e,t);return[{label:`Merge strategy - what wide -> narrow left in the model`,expected:()=>r().strategy,actual:()=>{let e=n();return e?`${hm(e)} (${e.seriesCount} series, ${e.legendCount} legend)`:mm},pass:()=>{let e=n();return e===null||hm(e)===r().strategy}},{label:`lazyUpdate - renders that happened inside the probe call`,expected:()=>r().lazyUpdate?`0 (deferred)`:`2 (synchronous)`,actual:()=>{let e=n();return e?String(e.syncRendered):mm},pass:()=>{let e=n();return e===null||e.syncRendered===(r().lazyUpdate?0:2)}},{label:`silent / lazyUpdate - 'updated' events after the frame settled`,expected:()=>String(gm(r().lazyUpdate,r().silent)),actual:()=>{let e=n();return e?e.settledUpdated===null?`settling...`:String(e.settledUpdated):mm},pass:()=>{let e=n();return e===null||e.settledUpdated===gm(r().lazyUpdate,r().silent)}}]},vm=e=>[...cm.map(t=>({title:pm[t],items:_m(t,e)})),{title:`PROVIDER FLAGS AFTER MOUNT`,items:[{label:`Changing a provider flag alone does not call setOption`,expected:()=>`0`,actual:()=>String(e.flagChangeEvaluations()),pass:()=>e.flagChangeEvaluations()===0}]}],ym=y(`<div>Probe runs: <strong></strong> (each run = two unbatched writes = two setOption calls per chart)`),bm=y(`<div>Provider flag changes: <strong></strong> - setOption calls they caused: <strong>`),xm=y(`<div><strong>`),Sm=[{value:`merge`,label:`merge`},{value:`notMerge`,label:`notMerge`},{value:`replaceMerge`,label:`replaceMerge`}],Cm=e=>{if(!e)return`not probed yet`;let t=e.settledUpdated===null?`...`:String(e.settledUpdated);return`${e.seriesCount} series, ${e.legendCount} legend, ${e.syncRendered} sync renders, ${t} updated events`},wm=()=>{let e=lm(),t=um(e),n=vm(e),r=()=>({notMerge:e.strategy()===`notMerge`,replaceMerge:e.strategy()===`replaceMerge`?[`series`]:[],lazyUpdate:e.lazyUpdate(),silent:e.silent()});return{...e,...t,checklist:n,providerUpdateOptions:r}},Tm=()=>{let{strategy:e,lazyUpdate:t,silent:r,changeStrategy:i,changeLazyUpdate:a,changeSilent:o,runProbes:s,probes:c,probeRuns:l,flagChanges:u,flagChangeEvaluations:d,checklist:f,providerUpdateOptions:p}=wm();return n(D,{get theme(){return M.name},updateOptions:p,get children(){return[n(H,{class:`gap-4 grid grid-cols-2`,get children(){return[n(F,{get containerProps(){return{title:pm.inherit,note:`no per-chart flags - provider updateOptions apply`}},get option(){return c.inherit.option},class:`chart-sm`,get onInit(){return c.inherit.handleInit},get onEvents(){return{rendered:c.inherit.handleRendered}}}),n(F,{get containerProps(){return{title:pm.own,note:`updateOptions={{ lazyUpdate: true }} - provider flags ignored`}},get option(){return c.own.option},updateOptions:{lazyUpdate:!0},class:`chart-sm`,get onInit(){return c.own.handleInit},get onEvents(){return{rendered:c.own.handleRendered}}}),n(F,{get containerProps(){return{title:pm.propOverOwn,note:`updateOptions={{ notMerge: true }} + notMerge={false}`}},get option(){return c.propOverOwn.option},updateOptions:{notMerge:!0},notMerge:!1,class:`chart-sm`,get onInit(){return c.propOverOwn.handleInit},get onEvents(){return{rendered:c.propOverOwn.handleRendered}}}),n(F,{get containerProps(){return{title:pm.propOverProvider,note:`lazyUpdate={false} - strategy and silent still inherited`}},get option(){return c.propOverProvider.option},lazyUpdate:!1,class:`chart-sm`,get onInit(){return c.propOverProvider.handleInit},get onEvents(){return{rendered:c.propOverProvider.handleRendered}}})]}}),n(V,{code:rm,get children(){return[n(kr,{title:`Provider updateOptions (changed after mount)`,get children(){return[n(jr,{label:`notMerge / replaceMerge`,options:Sm,get value(){return e()},onChange:i}),n(Ar,{label:`lazyUpdate`,get checked(){return t()},onChange:a}),n(Ar,{label:`silent`,get checked(){return r()},onChange:o}),n(N,{onClick:s,children:`Run probe on all charts`})]}}),n(P,{sections:f}),n(G,{get children(){return[(()=>{var e=ym(),t=e.firstChild.nextSibling;return T(t,l),e})(),(()=>{var e=bm(),t=e.firstChild.nextSibling,n=t.nextSibling.nextSibling;return T(t,u),T(n,d),e})(),n(h,{each:cm,children:e=>(()=>{var t=xm(),n=t.firstChild;return T(t,()=>`${pm[e]}: `,n),T(n,()=>Cm(c[e].result())),t})()})]}})]}})]}})},Em=`import type { Component } from "solid-js";
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
`,Dm=()=>{let[e,t]=l(er[0]),[n,r]=l(!1),[i,a]=l(null),[o,s]=l(0),[c,u]=l(null),[d,f]=l(0),[p,m]=l(0),[h,g]=l(`-`);return{currentDataset:e,setCurrentDataset:t,isLoading:n,setIsLoading:r,instanceAvailable:i,setInstanceAvailable:a,highlightCount:o,setHighlightCount:s,refValid:c,setRefValid:u,loadCount:d,setLoadCount:f,clickEventCount:p,setClickEventCount:m,datasetAfterFetch:h,setDatasetAfterFetch:g}},Om=e=>{let{setCurrentDataset:t,setIsLoading:n,setRefValid:r,setLoadCount:i,setClickEventCount:a,setDatasetAfterFetch:o}=e,s=null;return{handleClick:()=>{a(R)},handleFetch:async e=>{n(!0),i(R);let r=await Kt(e);t(r),o(r.label),n(!1)},handleInit:e=>{s=e},setRef:e=>{e!==null&&r(e===s&&!e.isDisposed())}}},km=e=>{let{currentDataset:t,isLoading:n,instanceAvailable:r,highlightCount:i,refValid:a,loadCount:o,clickEventCount:s,datasetAfterFetch:c}=e;return[{label:`useChart() - instance is non-null inside the SolidEChart subtree`,expected:()=>r()===null?`press Highlight first bar`:`true`,actual:()=>r()===null?`-`:r()?`true ✓`:`false ×`,pass:()=>r()===null||r()===!0},{label:`dispatch() via useChart() - highlight action reaches the chart`,expected:()=>i()>0?`≥ 1`:`press Highlight first bar`,actual:()=>String(i()),pass:()=>!0},{label:`ref forwarding - ref receives the same live EChartsType that onInit reported`,expected:()=>`same live EChartsType`,actual:()=>a()===null?`-`:a()?`valid ✓`:`mismatch ×`,pass:()=>a()===null||a()===!0},{label:`loading prop - overlay shows during async fetch (call-form prop is reactive)`,expected:()=>o()>0?`showed during fetch`:`click a Load button`,actual:()=>o()===0?`-`:n()?`showing now`:`shown ${o()} time(s)`,pass:()=>!0},{label:`reactive option - data updates after fetch completes`,expected:()=>o()>0?`dataset: ${c()}`:`click a Load button`,actual:()=>o()>0?t().label:`-`,pass:()=>o()===0||t().label===c()},{label:`onEvents 'click' - fires when a bar element is clicked`,expected:()=>s()>0?`≥ 1`:`click a bar on the chart`,actual:()=>String(s()),pass:()=>!0}]},Am=e=>()=>z({tooltip:{trigger:`axis`},legend:{data:[`Sales`]},xAxis:{type:`category`,data:U},yAxis:{type:`value`},series:[{name:`Sales`,type:`bar`,data:e.currentDataset().values}]}),jm=y(`<span>Dataset: <strong>`),Mm=y(`<div>`),Nm=()=>{let e=Dm(),t=Om(e),n=km(e),r=Am(e);return{...e,...t,checklist:n,option:r}},Pm=e=>{let{instance:t,dispatch:r}=$e(),i=()=>{let n=t();e.onInstanceProbed(n!==null&&!n.isDisposed()),n&&!n.isDisposed()&&(e.onHighlight(),r(A.highlight({seriesIndex:0,dataIndex:0})),setTimeout(()=>{r(A.downplay({seriesIndex:0,dataIndex:0}))},1e3))};return n(Nt,{get children(){return[n(N,{onClick:i,get disabled(){return e.isLoading()},children:`Highlight first bar (via useChart)`}),n(h,{each:er,children:t=>n(N,{onClick:()=>{e.onFetch(t)},get disabled(){return e.isLoading()},get children(){return`Load ${t.label}`}})})]}})},Fm=[{title:`Auto Merge Plan`,cpt:lr,content:`Verifies that autoMerge: true infers the correct setOption merge strategy automatically via optionMergePlan, while autoMerge: false falls back to ECharts' default normalMerge (ghost series linger). Two detection paths are exercised: noIdCount diffing for anonymous series, and hasMissingIds for id-bearing series. The checklist reads live series counts after the finished event - the earliest point where getOption() reflects the merged state - making merge behavior objectively verifiable without visual inspection.`},{title:`Auto Resize Observer`,cpt:vr,content:`Verifies that the autoResize prop correctly attaches and detaches a ResizeObserver on the chart container without ever touching the chart instance. Two guards protect against spurious resizes: the first observation is skipped when dimensions have not actually changed (preserving entry animations), and resize is skipped when the container is zero-sized (preventing canvas destruction). The checklist confirms three invariants: toggling autoResize never triggers a reinit, onResize fires on genuine width changes when enabled, and onResize is completely silent when disabled. The onResize callback demonstrates its natural use case — reading the post-resize canvas dimensions via chart.getWidth().`},{title:`Chart Proxy API`,cpt:_a,content:`Exercises the full SolidEChartAPI proxy returned by useChart().chart. The proxy wraps every public ECharts instance method with null and dispose guards - methods silently return undefined when the instance is unavailable, so callers never need optional chaining or null checks. Auto-checks populate on mount via createEffect on instance() - the idiomatic SolidJS pattern that re-runs automatically if the instance is ever replaced. Action-triggered checks require pressing a button. ChartControls is rendered as a child of SolidEChart so useChart() resolves to this specific chart's instance via context.`},{title:`Create Action After Reinit`,cpt:Ia,content:`Demonstrates that createAction reactive bindings survive a full chart reinit. When the renderer is switched, ECharts disposes the current instance and creates a new one. Because createAction tracks both instance and the action accessor as dependencies, it automatically re-fires with the current payload on the new instance - no manual re-wiring needed. Hover a row to activate a highlight, then switch the renderer while keeping the mouse over the row. The highlight must reappear on the new instance without any user interaction.`},{title:`Create Action Table Chart`,cpt:Ya,content:`Demonstrates createAction - the declarative action binding primitive from the solid-echarts primitive layer. Instead of calling dispatch() manually in event handlers, a single accessor encodes both states: hovering a row dispatches highlight, leaving the table dispatches downplay.   The signal is the only bridge between the table and the chart - neither component knows the other exists. createAction uses defer: true so no dispatch fires before the chart model is ready, and built-in null/dispose guards silently no-op if the instance is unavailable. Datazoom event counters on the chart make dispatch behavior objectively verifiable without relying on visual inspection.`},{title:`Create Chart Primitive`,cpt:co,content:`Demonstrates the primitive layer directly - createChart and createChartEffect used without the SolidEChart component wrapper. createChart takes a container signal and returns an instance accessor; createChartEffect wires reactive option updates to it. This is the foundation that SolidEChart is built on, exposed for cases where full control over the instance lifecycle is needed. The instance signal transitions from null before the container mounts to a live EChartsType after, and back to null on cleanup.`},{title:`Group Reassignment`,cpt:is,content:`Verifies that group sync remains intact when a chart moves between groups at runtime. Charts A and B are permanently in the revenue group. Chart C starts in forecast and can be moved into revenue and back. The critical invariant: A and B must stay synced regardless of C's position - B must never be orphaned by C's group reassignment. Datazoom event counters make sync behavior objectively verifiable per phase. Baselines are snapshotted at each group change so checklist checks reflect only the current phase.`},{title:`Group Sync & Isolation`,cpt:vs,content:`Charts sharing the same group ID synchronise their datazoom and tooltip automatically via ECharts group sync. The group can be set on a SolidEChartProvider (all descendant charts inherit it) or overridden per-chart using the group prop directly on SolidEChart. The connect() / disconnect() utilities toggle sync at runtime without remounting any chart. GroupBadge reads chart.group from the live ECharts instance via useChart(), confirming the library correctly propagated the prop. Datazoom event counters make sync behavior objectively verifiable - matching counts confirm sync is active; a frozen count confirms it is off.`},{title:`Manual Mode Streaming`,cpt:Rc,content:`Demonstrates manual update mode - when the option prop is omitted from SolidEChart, no reactive createChartEffect is wired. The chart instance is accessed via onInit and controlled imperatively. The initial option structure (axes, empty series) is set once via chart.setOption(), then data streams in chunk by chunk using appendData - no signal updates, no setOption cycles, no reactive overhead. All other props (loading, autoResize, onEvents) remain fully functional in manual mode. This is the correct pattern for streaming large datasets where reactive diffing would be wasteful.`},{title:`Merge Strategies`,cpt:Yc,content:`Compares the three setOption merge strategies side by side. The same option switch is applied to all three charts simultaneously - only the merge strategy prop differs. notMerge: false (ECharts default) keeps existing series absent from the new option, causing ghost series to linger. notMerge: true performs a full model reset, removing everything not in the new option. replaceMerge: ['series'] replaces only the series component, leaving axes and grid untouched - the correct choice when you need targeted removal without resetting the entire chart state. The checklist reads live series counts via the finished event to make merge behaviour objectively verifiable.`},{title:`Native DOM Passthrough`,cpt:Ql,content:`Demonstrates that unknown props on SolidEChart pass through to the underlying container via the nativeProps spread. Any HTML attribute, ARIA property, DOM event handler, or data-* attribute not consumed by the library reaches the DOM element directly - enabling accessibility, testing, and native browser behaviors without any special handling. DOM attribute checks are verified automatically on mount via onInit and chart.getDom(). Event handler checks require interaction.`},{title:`onEventsOnce`,cpt:lu,content:`Demonstrates onEventsOnce alongside onEvents. Handlers registered via onEventsOnce fire exactly once and self-remove - the library attaches a wrapper that calls chart.off() with its own reference after the first invocation. Both props can carry the same event name simultaneously: on the first occurrence both fire, on subsequent ones only the persistent onEvents handler continues. The event log distinguishes the two sources by color. The checklist verifies all four invariants objectively using live counters.`},{title:`onResize Callback`,cpt:vu,content:`Verifies the onResize callback - a natural extension of autoResize for reading post-resize canvas dimensions. Two guards protect against spurious calls: Guard 1 skips the initial ResizeObserver callback when dimensions have not changed (preserving entry animations), Guard 2 skips resize when the container is zero-sized (preventing canvas destruction). onResize only fires after a genuine resize that passes both guards - at which point chart.getWidth() and chart.getHeight() return the new canvas size in CSS pixels.`},{title:`Provider Merge Defaults`,cpt:wd,content:`Verifies that updateOptions on SolidEChartProvider sets a global default for setOption merge behaviour inherited by all descendant charts. Charts A and C inherit autoMerge: true from the outer provider - removed series are cleaned up automatically. Chart B overrides with autoMerge={false}, at the chart level - per-chart props always win. Chart D sits under a nested provider with autoMerge: false - nested providers shadow only what they explicitly declare, leaving the outer provider's other settings intact. The checklist reads live series counts after the finished event to make inheritance and override behavior objectively verifiable.`},{title:`Reactive Chart Intro`,cpt:Nd,content:`The starting point for solid-echarts - a reactive chart wired to two signals: the data array and the series type. Both drive the option accessor, so any change calls setOption automatically without any imperative update code. onEvents demonstrates event wiring on chart elements. The checklist verifies reactivity by counting finished events and reading getOption() after each re-render.`},{title:`Renderer Switch`,cpt:Kd,content:`Verifies that changing the renderer prop triggers a full dispose → reinit cycle. renderer is the only SolidEChart prop that cannot be updated in place - all others (theme, group, autoResize) update without touching the instance. The checklist confirms: onInit fires once for the first instance while onReInit fires for every instance created by a switch, onDispose fires before each reinit, the current option is reapplied automatically, and the DOM reflects the correct renderer via the presence of a <canvas> or <svg> child element.`},{title:`seActions Dispatch`,cpt:nf,content:`Exercises every seActions factory via dispatch() from useChart(). Each button group covers one action category: highlight/downplay, select, tooltip, legend, dataZoom, and restore. The checklist listens to the corresponding ECharts chart events to confirm each dispatch reached the chart model — not just that our code ran. dataZoom is the one exception: dispatching it programmatically does not fire the datazoom chart event (only user interaction does), so the dispatched range is shown for visual verification instead.`},{title:`Surface Events`,cpt:Zf,content:`Demonstrates onSurfaceEvents and onSurfaceEventsOnce - surface events attach to the underlying zrender canvas via chart.getZr().on() and fire anywhere on the rendering surface, including blank areas with no data elements. Unlike onEvents which only fires when the pointer is over a graphic element, surface events fire on the entire canvas. event.target is null when the pointer is over blank space - the key signal for blank-area detection. onSurfaceEventsOnce handlers self-remove after the first invocation using the same closure pattern as onEventsOnce.`},{title:`Theme In Place`,cpt:jp,content:`Demonstrates in-place theme switching via ECharts setTheme() - the only prop on SolidEChart that updates visuals without touching the instance. Unlike renderer which forces a full dispose → reinit cycle, changing theme preserves the existing instance and reapplies the current option automatically. Chart A inherits the theme from SolidEChartProvider and cycles through the brand, second and default themes. Chart B has a per-chart theme={BRAND_THEME.name}, override that persists regardless of provider changes. The checklist verifies the in-place invariant by tracking onInit, onDispose, and the ECharts instance ID across all switches.`},{title:`useChart & Loading`,cpt:()=>{let{currentDataset:e,isLoading:t,setInstanceAvailable:r,setHighlightCount:i,handleClick:a,handleFetch:o,handleInit:s,setRef:c,option:u,checklist:d}=Nm(),[f,m]=l();return n(D,{get theme(){return M.name},renderer:`canvas`,get children(){return[n(H,{get children(){return n(Wt,{get children(){return n(_t,{option:u,get loading(){return t()},class:`chart-lg`,ref:c,onInit:s,onEvents:{click:a},get children(){return n(E,{get when(){return f()},children:e=>n(g,{get mount(){return e()},get children(){return n(Pm,{onFetch:o,isLoading:t,onInstanceProbed:r,onHighlight:()=>i(R)})}})})}})}})}}),n(V,{code:Em,get children(){return[n(P,{sections:[{items:d}]}),n(G,{get children(){var n=jm(),r=n.firstChild.nextSibling;return T(r,()=>e().label),T(n,()=>t()?` - loading…`:``,null),n}}),(()=>{var e=Mm();return p(m,e),e})()]}})]}})},content:`Demonstrates useChart(), reactive loading, and ref forwarding together. ChartControls is rendered as a child of SolidEChart so useChart() resolves to the live instance via context - no prop drilling or ref needed. The loading prop is driven by a signal and shows the ECharts overlay while the simulated async fetch is in progress. ref forwarding delivers the raw EChartsType instance for imperative access outside the component tree.`},{title:`Batched Updates`,cpt:ei,content:`Verifies the performance guidance for reactive options. Three signal writes that feed one option call setOption three times, and ECharts renders each time. Wrapping them in Solid's batch() collapses them to one setOption and one render. lazyUpdate defers rendering to the next frame, so even unbatched writes produce a single finished event. A large series makes the cost visible, and counters on both charts verify the numbers.`},{title:`Call-Form Props`,cpt:Ni,content:`Verifies that props passed in call form (theme={theme()}, loading={loading()}, group={group()}, autoResize={autoResize()}) are as reactive as the accessor form. A call-form prop that switches between undefined and a value switches between the SolidEChartProvider value and the prop. onSurfaceEvents is accepted as an accessor and its handlers re-attach when the map changes. Two charts share the same controls, and the checklist reads theme, loading, chart.group and resize behaviour from each live instance.`},{title:`Export & SSR`,cpt:Jo,content:`Covers the export and coordinate calls of the chart API. getConnectedDataURL merges every chart sharing a group into one image, renderToSVGString and renderToCanvas render from the svg and canvas renderers, and getDevicePixelRatio reads the pixel ratio. convertFromPixel and containPixel are driven by a surface click and checked against convertToPixel. An ssr instance paints nothing into the DOM and is exported as an SVG string, previewed through an <img> data URL. The checklist decodes every output and verifies it.`},{title:`Init on Visible`,cpt:Vs,content:`Verifies initOnVisible on SolidEChart, on SolidEChartProvider (inherited) and on the createChart primitive. Charts below the fold in a scrollable panel have no instance until they are scrolled into view, and each runs onInit exactly once. A chart with initOnVisible={false} under a provider that sets it is created at mount, and a control chart with no initOnVisible is too.`},{title:`Init Options`,cpt:Tc,content:`locale, devicePixelRatio, useDirtyRect, useCoarsePointer, pointerSize, width, height and resizeDebounce are read once when the instance is created. Changing them later has no effect, and renderer is the only prop that recreates the instance - with the values captured at mount, not the current props. Readouts from the live instance (getDevicePixelRatio, getWidth/getHeight, localized toolbox titles, pointer hit-testing, resize latency) show the creation-time values until the chart component is remounted.`},{title:`More seActions`,cpt:Hl,content:`Covers the remaining seActions creators: legendSelect and legendUnSelect (a name is required), brush with BrushArea areas, timelineChange and timelinePlayChange on a timeline with options[], and geoRoam targeted by geoId or geoIndex on a map registered with registerMap. It also shows the payload additions showTip x and y, dataZoom dataZoomId and downplay notBlur. Every button dispatches one payload, and the checklist compares the fired events and the live instance state with the documented behaviour.`},{title:`Primitives & Utilities`,cpt:pd,content:`Covers the exports that are neither components nor chart calls. useConfig is read in a probe and in a custom createChart + createChartEffect wrapper that resolves prop, then provider, then default, like SolidEChart. buildSignature is shown beside the MergePlan that optionMergePlan derives as the option changes, and the result is checked against an autoMerge chart. debounce sits between an Ark UI slider and the option, a graphic.LinearGradient fill is built with the color helpers, and a dataset transform is registered with registerTransform.`},{title:`Series Roam`,cpt:Lf,content:`seActions.graphRoam, treeRoam and sankeyRoam pan (dx, dy) and zoom (zoom, originX, originY) a series that has roam: true. The zoom is a factor relative to the current zoom, not an absolute level. Each dispatch fires exactly one graphroam, treeroam or sankeyroam event, and the new center and zoom are written back to the series option, so getOption() on the live instance reports them. focusNodeAdjacency, unfocusNodeAdjacency, tree expand / collapse and sankey dragNode are covered the same way.`},{title:`Theme & Option`,cpt:Sp,content:`Verifies that a theme change keeps the current option. ECharts' setTheme rebuilds the chart from the first option ever set, so the library applies the current option again after every theme change - with notMerge: true under autoMerge - also when theme and option change in one batch(). The default-merge, autoMerge and createChart charts are checked on the live instance with chart.getOption(). In manual mode, with no option prop, the chart shows the first option until you set one yourself. An accessor that re-runs with an unchanged theme does not call setTheme again.`},{title:`Typed Events`,cpt:nm,content:`The rendered handler receives RenderedEventParams (elapsedTime) and the finished handler receives undefined. EventParams.selfType is 'line' or 'area' on a line series with triggerEvent, and 'breadcrumb' on a treemap breadcrumb. showtip, hidetip, updateaxispointer and changeaxisorder (a bar race with realtimeSort) reach onEvents handlers too. A live log and counters show each event.`},{title:`Update Options`,cpt:Tm,content:`Per-chart updateOptions and provider updateOptions feed setOption with the precedence: per-chart flag prop, then per-chart updateOptions, then provider updateOptions, then the default. A per-chart updateOptions replaces the provider object as a whole. A provider updateOptions that changes after mount applies on the next setOption, and changing a flag alone never calls it. Four charts probe notMerge, replaceMerge, lazyUpdate and silent on the live instance.`}].toSorted((e,t)=>e.title.localeCompare(t.title,`en`,{sensitivity:`base`})),Im=`about`,Lm=e=>e.title.toLowerCase().replaceAll(/[^a-z0-9]+/g,`-`).replaceAll(/^-|-$/g,``),Rm=e=>`#/${e}`,zm=()=>decodeURIComponent(window.location.hash.replace(/^#\/?/,``)),Bm=()=>{let[e,t]=l(zm()),n=()=>{t(zm())};return window.addEventListener(`hashchange`,n),s(()=>{window.removeEventListener(`hashchange`,n)}),e},Vm=y(`<svg><g transform="translate(-244.684 91.8013)"><path d="m364.684-81.8013a110 80 0 0 1 110 79.9998 110 80 0 0 1-110 80.0003 110 80 0 0 1-110-80.0003 110 80 0 0 1 110-79.9998zm24.5313 26.1106c-3.25172-0.19108-7.54481 0.429259-8.81187 1.36891-8.27361 2.72693-14.2969 10.1692-22.8089 12.0463-17.1217 2.05454-35.0732 2.70226-50.4791 11.3616-9.54989 5.20155-19.5861 10.8598-26.0677 19.8319-3.935 6.69567-7.27995 14.9926-4.11758 22.6544-0.47115 5.59501-11.3804 11.3339-5.23999 16.0032 2.74056 1.88331 6.54311 0.941288 8.90333-1.18959 11.9046-7.92358 25.7288-12.9205 39.7309-15.4177 3.91076 4.90309 6.11704 11.8679 12.7744 13.8793 2.93855 1.76853 12.9075 1.68529 6.58977-2.312-4.2541-2.41188-8.35626-15.3334-0.24856-8.16022 6.65502 3.02354 15.177 6.82779 22.0457 2.62568-3.21944-1.52902-13.7304-5.98985-10.2919-9.21287 16.6055-2.06614 34.1335-6.87338 50.368-0.303341 8.10142 1.89801 15.5603 6.10918 20.4799 12.9708 6.79736 6.92-2.5048 15.1706-1.18908 23.0534-0.48809 2.69196 6.07799 10.9585 6.74739 7.97264-1.01879-8.29739 10.9972-12.6718 8.16075-21.2431-0.33921-2.15579 6.8653 1.89641 9.32449-1.55701 3.98471-3.20525 11.4064-5.60848 14.4622-5.03277-4.34772-9.89063-15.7353-8.18594-24.0916-5.67769-6.28-3.30855-5.91324-15.0843-11.189-20.8923-7.5492-13.6596-19.5972-24.4957-33.6631-31.1097-6.47738-4.83967-6.70635-14.7839 1.17306-18.1601 2.90008-2.30612 0.69012-3.30845-2.5616-3.49953z"fill=#76b3e1 fill-rule=evenodd stroke-width=0.265>`),Hm=e=>(()=>{var n=Vm();return b(n,t(e,{viewBox:`0 0 240 180`,xmlns:`http://www.w3.org/2000/svg`}),!0,!0),n})(),Um=y(`<li><a>`),Wm=y(`<nav class="bg-brand-950 flex flex-col min-h-0 w-fit select-none overflow-y-hidden"><div class="p-4 border-brand-900 border-b-2 flex gap-3 whitespace-nowrap items-center"><span class="text-lg text-brand-50 tracking-tight font-semibold">SolidECharts Examples</span></div><ul class="flex flex-1 flex-col gap-0.5 scroll-y">`),Gm=e=>(()=>{var t=Um(),n=t.firstChild;return T(n,()=>e.label),r(t=>{var r=e.href,i=e.active?`page`:void 0,a=At(`text-sm px-3 py-2.5 flex gap-3 w-full transition-all duration-150 items-center relative`,e.active?`text-brand-50 font-medium bg-brand-600/20 after:bg-brand-600 after:h-[70%] after:w-1.5 after:content-[''] after:right-0 after:top-[15%] after:absolute before:bg-brand-600 before:h-full before:w-1 before:content-[''] before:left-0 before:top-0 before:absolute`:`text-brand-300 font-[450] focus-visible:text-brand-100 focus-visible:bg-brand-800 hover:text-brand-100 hover:bg-brand-800`);return r!==t.e&&re(n,`href`,t.e=r),i!==t.t&&re(n,`aria-current`,t.t=i),a!==t.a&&C(n,t.a=a),t},{e:void 0,t:void 0,a:void 0}),t})(),Km=e=>(()=>{var t=Wm(),r=t.firstChild,i=r.firstChild,a=r.nextSibling;return T(r,n(Hm,{class:`size-8`}),i),T(a,n(h,{get each(){return e.entries},children:(t,r)=>n(Gm,{get label(){return t.title},get href(){return Rm(Lm(t))},get active(){return r()===e.active}})}),null),T(a,n(Gm,{label:`About Examples`,get href(){return Rm(Im)},get active(){return e.active===-1}}),null),t})(),qm=y(`<p class="leading-[1.7] mt-2 p-4 panel">`),Jm=e=>(()=>{var t=qm();return T(t,()=>ln(e.content)),t})(),Ym=y(`<h2 class="text-2xl pl-2"><a class="transition-colors duration-300 focus-visible:text-brand-600 hover:text-brand-600">`),Xm=e=>(()=>{var t=Ym(),n=t.firstChild;return T(n,()=>e.title),r(()=>re(n,`href`,e.href)),t})(),Zm=y(`<section class="p-4 flex flex-col gap-0.5">`),Qm=e=>n(V,{get children(){return n(h,{get each(){return e.entries},children:e=>(()=>{var t=Zm();return T(t,n(Xm,{get title(){return e.title},get href(){return Rm(Lm(e))}}),null),T(t,n(Jm,{get content(){return e.content}}),null),t})()})}}),$m=y(`<main>`);ft([Ie,ze,_e,xe,De,Ae,Pe,ke,ve]),ge(M.name,M.theme),ge(St.name,St.theme);var eh=()=>{let e=Bm(),t=i(()=>{let t=e();return t===`about`?-1:Math.max(0,Fm.findIndex(e=>Lm(e)===t))});return[n(Km,{entries:Fm,get active(){return t()}}),(()=>{var e=$m();return T(e,n(E,{get when(){return t()>=0},get fallback(){return n(Qm,{entries:Fm})},get children(){return n(ae,{get component(){return Fm[t()].cpt}})}})),e})(),n(bt,{})]},th=document.querySelector(`#root`);v(()=>n(eh,{}),th);