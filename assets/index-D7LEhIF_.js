(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(o){if(o.ep)return;o.ep=!0;const l=i(o);fetch(o.href,l)}})();var F={},O={exports:{}},s={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C=Symbol.for("react.element"),j=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),$=Symbol.for("react.provider"),Q=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),Z=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),D=Symbol.iterator;function ee(e){return e===null||typeof e!="object"?null:(e=D&&e[D]||e["@@iterator"],typeof e=="function"?e:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,y={};function h(e,r,i){this.props=e,this.context=r,this.refs=y,this.updater=i||M}h.prototype.isReactComponent={};h.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")};h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function k(){}k.prototype=h.prototype;function p(e,r,i){this.props=e,this.context=r,this.refs=y,this.updater=i||M}var w=p.prototype=new k;w.constructor=p;_(w,h.prototype);w.isPureReactComponent=!0;var P=Array.isArray,G=Object.prototype.hasOwnProperty,b={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function z(e,r,i){var n,o={},l=null,c=null;if(r!=null)for(n in r.ref!==void 0&&(c=r.ref),r.key!==void 0&&(l=""+r.key),r)G.call(r,n)&&!U.hasOwnProperty(n)&&(o[n]=r[n]);var d=arguments.length-2;if(d===1)o.children=i;else if(1<d){for(var f=Array(d),I=0;I<d;I++)f[I]=arguments[I+2];o.children=f}if(e&&e.defaultProps)for(n in d=e.defaultProps,d)o[n]===void 0&&(o[n]=d[n]);return{$$typeof:C,type:e,key:l,ref:c,props:o,_owner:b.current}}function te(e,r){return{$$typeof:C,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function E(e){return typeof e=="object"&&e!==null&&e.$$typeof===C}function re(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(i){return r[i]})}var N=/\/+/g;function S(e,r){return typeof e=="object"&&e!==null&&e.key!=null?re(""+e.key):r.toString(36)}function A(e,r,i,n,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var c=!1;if(e===null)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case C:case j:c=!0}}if(c)return c=e,o=o(c),e=n===""?"."+S(c,0):n,P(o)?(i="",e!=null&&(i=e.replace(N,"$&/")+"/"),A(o,r,i,"",function(I){return I})):o!=null&&(E(o)&&(o=te(o,i+(!o.key||c&&c.key===o.key?"":(""+o.key).replace(N,"$&/")+"/")+e)),r.push(o)),1;if(c=0,n=n===""?".":n+":",P(e))for(var d=0;d<e.length;d++){l=e[d];var f=n+S(l,d);c+=A(l,r,i,f,o)}else if(f=ee(e),typeof f=="function")for(e=f.call(e),d=0;!(l=e.next()).done;)l=l.value,f=n+S(l,d++),c+=A(l,r,i,f,o);else if(l==="object")throw r=String(e),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return c}function m(e,r,i){if(e==null)return e;var n=[],o=0;return A(e,n,"","",function(l){return r.call(i,l,o++)}),n}function oe(e){if(e._status===-1){var r=e._result;r=r(),r.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i)},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i)}),e._status===-1&&(e._status=0,e._result=r)}if(e._status===1)return e._result.default;throw e._result}var u={current:null},v={transition:null},ne={ReactCurrentDispatcher:u,ReactCurrentBatchConfig:v,ReactCurrentOwner:b};function W(){throw Error("act(...) is not supported in production builds of React.")}s.Children={map:m,forEach:function(e,r,i){m(e,function(){r.apply(this,arguments)},i)},count:function(e){var r=0;return m(e,function(){r++}),r},toArray:function(e){return m(e,function(r){return r})||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};s.Component=h;s.Fragment=H;s.Profiler=T;s.PureComponent=p;s.StrictMode=q;s.Suspense=X;s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ne;s.act=W;s.cloneElement=function(e,r,i){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=_({},e.props),o=e.key,l=e.ref,c=e._owner;if(r!=null){if(r.ref!==void 0&&(l=r.ref,c=b.current),r.key!==void 0&&(o=""+r.key),e.type&&e.type.defaultProps)var d=e.type.defaultProps;for(f in r)G.call(r,f)&&!U.hasOwnProperty(f)&&(n[f]=r[f]===void 0&&d!==void 0?d[f]:r[f])}var f=arguments.length-2;if(f===1)n.children=i;else if(1<f){d=Array(f);for(var I=0;I<f;I++)d[I]=arguments[I+2];n.children=d}return{$$typeof:C,type:e.type,key:o,ref:l,props:n,_owner:c}};s.createContext=function(e){return e={$$typeof:Q,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:$,_context:e},e.Consumer=e};s.createElement=z;s.createFactory=function(e){var r=z.bind(null,e);return r.type=e,r};s.createRef=function(){return{current:null}};s.forwardRef=function(e){return{$$typeof:K,render:e}};s.isValidElement=E;s.lazy=function(e){return{$$typeof:J,_payload:{_status:-1,_result:e},_init:oe}};s.memo=function(e,r){return{$$typeof:Z,type:e,compare:r===void 0?null:r}};s.startTransition=function(e){var r=v.transition;v.transition={};try{e()}finally{v.transition=r}};s.unstable_act=W;s.useCallback=function(e,r){return u.current.useCallback(e,r)};s.useContext=function(e){return u.current.useContext(e)};s.useDebugValue=function(){};s.useDeferredValue=function(e){return u.current.useDeferredValue(e)};s.useEffect=function(e,r){return u.current.useEffect(e,r)};s.useId=function(){return u.current.useId()};s.useImperativeHandle=function(e,r,i){return u.current.useImperativeHandle(e,r,i)};s.useInsertionEffect=function(e,r){return u.current.useInsertionEffect(e,r)};s.useLayoutEffect=function(e,r){return u.current.useLayoutEffect(e,r)};s.useMemo=function(e,r){return u.current.useMemo(e,r)};s.useReducer=function(e,r,i){return u.current.useReducer(e,r,i)};s.useRef=function(e){return u.current.useRef(e)};s.useState=function(e){return u.current.useState(e)};s.useSyncExternalStore=function(e,r,i){return u.current.useSyncExternalStore(e,r,i)};s.useTransition=function(){return u.current.useTransition()};s.version="18.3.1";O.exports=s;var ie=O.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ae=ie,se=Symbol.for("react.element"),le=Symbol.for("react.fragment"),ce=Object.prototype.hasOwnProperty,fe=ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,de={key:!0,ref:!0,__self:!0,__source:!0};function V(e,r,i){var n,o={},l=null,c=null;i!==void 0&&(l=""+i),r.key!==void 0&&(l=""+r.key),r.ref!==void 0&&(c=r.ref);for(n in r)ce.call(r,n)&&!de.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps,r)o[n]===void 0&&(o[n]=r[n]);return{$$typeof:se,type:e,key:l,ref:c,props:o,_owner:fe.current}}F.Fragment=le;F.jsx=V;F.jsxs=V;var a;(function(e){e[e.ContainsElements=1]="ContainsElements",e[e.Aggregates=2]="Aggregates",e[e.Nests=3]="Nests",e[e.ProjectsElement=4]="ProjectsElement",e[e.AdheresToElement=5]="AdheresToElement",e[e.DefinesByProperties=10]="DefinesByProperties",e[e.DefinesByType=11]="DefinesByType",e[e.AssociatesMaterial=20]="AssociatesMaterial",e[e.AssociatesClassification=30]="AssociatesClassification",e[e.AssociatesDocument=31]="AssociatesDocument",e[e.AssociatesConstraint=32]="AssociatesConstraint",e[e.AssociatesApproval=33]="AssociatesApproval",e[e.AssociatesLibrary=34]="AssociatesLibrary",e[e.ConnectsPathElements=40]="ConnectsPathElements",e[e.FillsElement=41]="FillsElement",e[e.VoidsElement=42]="VoidsElement",e[e.ConnectsElements=43]="ConnectsElements",e[e.ConnectsPortToElement=44]="ConnectsPortToElement",e[e.ConnectsPorts=45]="ConnectsPorts",e[e.InterferesElements=46]="InterferesElements",e[e.CoversBldgElements=47]="CoversBldgElements",e[e.CoversSpaces=48]="CoversSpaces",e[e.ServicesBuildings=49]="ServicesBuildings",e[e.SpaceBoundary=50]="SpaceBoundary",e[e.AssignsToGroup=60]="AssignsToGroup",e[e.AssignsToProduct=61]="AssignsToProduct",e[e.AssignsToGroupByFactor=62]="AssignsToGroupByFactor",e[e.AssignsToActor=63]="AssignsToActor",e[e.AssignsToResource=64]="AssignsToResource",e[e.AssignsToProcess=65]="AssignsToProcess",e[e.AssignsToControl=66]="AssignsToControl",e[e.ReferencedInSpatialStructure=70]="ReferencedInSpatialStructure",e[e.Declares=80]="Declares",e[e.Positions=90]="Positions",e[e.FlowControlElements=91]="FlowControlElements",e[e.Sequence=92]="Sequence"})(a||(a={}));a.ContainsElements+"",a.Aggregates+"",a.Nests+"",a.ProjectsElement+"",a.AdheresToElement+"",a.DefinesByProperties+"",a.DefinesByType+"",a.AssociatesMaterial+"",a.AssociatesClassification+"",a.AssociatesDocument+"",a.AssociatesConstraint+"",a.AssociatesApproval+"",a.AssociatesLibrary+"",a.ConnectsPathElements+"",a.FillsElement+"",a.VoidsElement+"",a.ConnectsElements+"",a.ConnectsPortToElement+"",a.ConnectsPorts+"",a.InterferesElements+"",a.CoversBldgElements+"",a.CoversSpaces+"",a.ServicesBuildings+"",a.SpaceBoundary+"",a.AssignsToGroup+"",a.AssignsToProduct+"",a.AssignsToGroupByFactor+"",a.AssignsToActor+"",a.AssignsToResource+"",a.AssignsToProcess+"",a.AssignsToControl+"",a.ReferencedInSpatialStructure+"",a.Declares+"",a.Positions+"",a.FlowControlElements+"",a.Sequence+"";var t;(function(e){e[e.IfcProject=1]="IfcProject",e[e.IfcSite=2]="IfcSite",e[e.IfcBuilding=3]="IfcBuilding",e[e.IfcBuildingStorey=4]="IfcBuildingStorey",e[e.IfcSpace=5]="IfcSpace",e[e.IfcFacility=59]="IfcFacility",e[e.IfcFacilityPart=60]="IfcFacilityPart",e[e.IfcBridge=61]="IfcBridge",e[e.IfcBridgePart=62]="IfcBridgePart",e[e.IfcRoad=63]="IfcRoad",e[e.IfcRoadPart=64]="IfcRoadPart",e[e.IfcRailway=65]="IfcRailway",e[e.IfcRailwayPart=66]="IfcRailwayPart",e[e.IfcMarineFacility=67]="IfcMarineFacility",e[e.IfcMarinePart=321]="IfcMarinePart",e[e.IfcFacilityPartCommon=322]="IfcFacilityPartCommon",e[e.IfcSpatialZone=317]="IfcSpatialZone",e[e.IfcZone=318]="IfcZone",e[e.IfcSystem=319]="IfcSystem",e[e.IfcDistributionSystem=320]="IfcDistributionSystem",e[e.IfcWall=10]="IfcWall",e[e.IfcWallStandardCase=11]="IfcWallStandardCase",e[e.IfcDoor=12]="IfcDoor",e[e.IfcWindow=13]="IfcWindow",e[e.IfcSlab=14]="IfcSlab",e[e.IfcColumn=15]="IfcColumn",e[e.IfcBeam=16]="IfcBeam",e[e.IfcStair=17]="IfcStair",e[e.IfcRamp=18]="IfcRamp",e[e.IfcRoof=19]="IfcRoof",e[e.IfcCovering=20]="IfcCovering",e[e.IfcCurtainWall=21]="IfcCurtainWall",e[e.IfcRailing=22]="IfcRailing",e[e.IfcPile=23]="IfcPile",e[e.IfcMember=24]="IfcMember",e[e.IfcPlate=25]="IfcPlate",e[e.IfcFooting=26]="IfcFooting",e[e.IfcBuildingElementProxy=27]="IfcBuildingElementProxy",e[e.IfcStairFlight=28]="IfcStairFlight",e[e.IfcRampFlight=29]="IfcRampFlight",e[e.IfcChimney=31]="IfcChimney",e[e.IfcShadingDevice=32]="IfcShadingDevice",e[e.IfcBuildingElementPart=33]="IfcBuildingElementPart",e[e.IfcOpeningElement=30]="IfcOpeningElement",e[e.IfcElementAssembly=34]="IfcElementAssembly",e[e.IfcReinforcingBar=35]="IfcReinforcingBar",e[e.IfcReinforcingMesh=36]="IfcReinforcingMesh",e[e.IfcTendon=37]="IfcTendon",e[e.IfcDiscreteAccessory=38]="IfcDiscreteAccessory",e[e.IfcMechanicalFastener=39]="IfcMechanicalFastener",e[e.IfcDistributionElement=40]="IfcDistributionElement",e[e.IfcFlowTerminal=41]="IfcFlowTerminal",e[e.IfcFlowSegment=42]="IfcFlowSegment",e[e.IfcFlowFitting=43]="IfcFlowFitting",e[e.IfcFlowController=44]="IfcFlowController",e[e.IfcFlowMovingDevice=45]="IfcFlowMovingDevice",e[e.IfcFlowStorageDevice=46]="IfcFlowStorageDevice",e[e.IfcFlowTreatmentDevice=47]="IfcFlowTreatmentDevice",e[e.IfcEnergyConversionDevice=48]="IfcEnergyConversionDevice",e[e.IfcDuctSegment=49]="IfcDuctSegment",e[e.IfcPipeSegment=50]="IfcPipeSegment",e[e.IfcCableSegment=51]="IfcCableSegment",e[e.IfcFurnishingElement=52]="IfcFurnishingElement",e[e.IfcFurniture=53]="IfcFurniture",e[e.IfcProxy=54]="IfcProxy",e[e.IfcAnnotation=55]="IfcAnnotation",e[e.IfcTransportElement=56]="IfcTransportElement",e[e.IfcCivilElement=57]="IfcCivilElement",e[e.IfcGeographicElement=58]="IfcGeographicElement",e[e.IfcCourse=70]="IfcCourse",e[e.IfcPavement=71]="IfcPavement",e[e.IfcKerb=72]="IfcKerb",e[e.IfcMooringDevice=73]="IfcMooringDevice",e[e.IfcNavigationElement=74]="IfcNavigationElement",e[e.IfcTrackElement=75]="IfcTrackElement",e[e.IfcVehicle=76]="IfcVehicle",e[e.IfcEarthworksElement=77]="IfcEarthworksElement",e[e.IfcEarthworksFill=78]="IfcEarthworksFill",e[e.IfcEarthworksCut=79]="IfcEarthworksCut",e[e.IfcReferent=80]="IfcReferent",e[e.IfcSign=81]="IfcSign",e[e.IfcSignal=82]="IfcSignal",e[e.IfcGeotechnicalStratum=83]="IfcGeotechnicalStratum",e[e.IfcGeotechnicalAssembly=84]="IfcGeotechnicalAssembly",e[e.IfcSolidStratum=85]="IfcSolidStratum",e[e.IfcVoidStratum=86]="IfcVoidStratum",e[e.IfcWaterStratum=87]="IfcWaterStratum",e[e.IfcPositioningElement=88]="IfcPositioningElement",e[e.IfcAlignment=89]="IfcAlignment",e[e.IfcRelContainedInSpatialStructure=100]="IfcRelContainedInSpatialStructure",e[e.IfcRelAggregates=101]="IfcRelAggregates",e[e.IfcRelDefinesByProperties=102]="IfcRelDefinesByProperties",e[e.IfcRelDefinesByType=103]="IfcRelDefinesByType",e[e.IfcRelAssociatesMaterial=104]="IfcRelAssociatesMaterial",e[e.IfcRelAssociatesClassification=105]="IfcRelAssociatesClassification",e[e.IfcRelVoidsElement=106]="IfcRelVoidsElement",e[e.IfcRelFillsElement=107]="IfcRelFillsElement",e[e.IfcRelConnectsPathElements=108]="IfcRelConnectsPathElements",e[e.IfcRelSpaceBoundary=109]="IfcRelSpaceBoundary",e[e.IfcPropertySet=200]="IfcPropertySet",e[e.IfcPropertySingleValue=201]="IfcPropertySingleValue",e[e.IfcPropertyEnumeratedValue=202]="IfcPropertyEnumeratedValue",e[e.IfcPropertyBoundedValue=203]="IfcPropertyBoundedValue",e[e.IfcPropertyListValue=204]="IfcPropertyListValue",e[e.IfcElementQuantity=210]="IfcElementQuantity",e[e.IfcQuantityLength=211]="IfcQuantityLength",e[e.IfcQuantityArea=212]="IfcQuantityArea",e[e.IfcQuantityVolume=213]="IfcQuantityVolume",e[e.IfcQuantityCount=214]="IfcQuantityCount",e[e.IfcQuantityWeight=215]="IfcQuantityWeight",e[e.IfcWallType=300]="IfcWallType",e[e.IfcDoorType=301]="IfcDoorType",e[e.IfcWindowType=302]="IfcWindowType",e[e.IfcSlabType=303]="IfcSlabType",e[e.IfcColumnType=304]="IfcColumnType",e[e.IfcBeamType=305]="IfcBeamType",e[e.IfcPileType=306]="IfcPileType",e[e.IfcMemberType=307]="IfcMemberType",e[e.IfcPlateType=308]="IfcPlateType",e[e.IfcFootingType=309]="IfcFootingType",e[e.IfcCoveringType=310]="IfcCoveringType",e[e.IfcRailingType=311]="IfcRailingType",e[e.IfcStairType=312]="IfcStairType",e[e.IfcRampType=313]="IfcRampType",e[e.IfcRoofType=314]="IfcRoofType",e[e.IfcCurtainWallType=315]="IfcCurtainWallType",e[e.IfcBuildingElementProxyType=316]="IfcBuildingElementProxyType",e[e.Unknown=9999]="Unknown"})(t||(t={}));var B;(function(e){e[e.String=0]="String",e[e.Real=1]="Real",e[e.Integer=2]="Integer",e[e.Boolean=3]="Boolean",e[e.Logical=4]="Logical",e[e.Label=5]="Label",e[e.Identifier=6]="Identifier",e[e.Text=7]="Text",e[e.Enum=8]="Enum",e[e.Reference=9]="Reference",e[e.List=10]="List"})(B||(B={}));var R;(function(e){e[e.Length=0]="Length",e[e.Area=1]="Area",e[e.Volume=2]="Volume",e[e.Count=3]="Count",e[e.Weight=4]="Weight",e[e.Time=5]="Time",e[e.Number=6]="Number"})(R||(R={}));var x;(function(e){e[e.HAS_GEOMETRY=1]="HAS_GEOMETRY",e[e.HAS_PROPERTIES=2]="HAS_PROPERTIES",e[e.HAS_QUANTITIES=4]="HAS_QUANTITIES",e[e.IS_TYPE=8]="IS_TYPE",e[e.IS_EXTERNAL=16]="IS_EXTERNAL",e[e.HAS_OPENINGS=32]="HAS_OPENINGS",e[e.IS_FILLING=64]="IS_FILLING"})(x||(x={}));t.IfcProject,t.IfcSite,t.IfcBuilding,t.IfcBuildingStorey,t.IfcSpace,t.IfcSpatialZone,t.IfcZone,t.IfcSystem,t.IfcDistributionSystem,t.IfcFacility,t.IfcFacilityPart,t.IfcBridge,t.IfcBridgePart,t.IfcRoad,t.IfcRoadPart,t.IfcRailway,t.IfcRailwayPart,t.IfcMarineFacility,t.IfcMarinePart,t.IfcFacilityPartCommon,t.IfcWall,t.IfcWallStandardCase,t.IfcDoor,t.IfcDoor,t.IfcWindow,t.IfcWindow,t.IfcSlab,t.IfcSlab,t.IfcColumn,t.IfcColumn,t.IfcBeam,t.IfcBeam,t.IfcStair,t.IfcStairFlight,t.IfcRamp,t.IfcRampFlight,t.IfcRoof,t.IfcCovering,t.IfcCurtainWall,t.IfcRailing,t.IfcPile,t.IfcMember,t.IfcMember,t.IfcPlate,t.IfcPlate,t.IfcFooting,t.IfcBuildingElementProxy,t.IfcChimney,t.IfcShadingDevice,t.IfcBuildingElementPart,t.IfcOpeningElement,t.IfcOpeningElement,t.IfcElementAssembly,t.IfcReinforcingBar,t.IfcReinforcingMesh,t.IfcTendon,t.IfcDiscreteAccessory,t.IfcMechanicalFastener,t.IfcDistributionElement,t.IfcDistributionElement,t.IfcDistributionElement,t.IfcFlowTerminal,t.IfcFlowSegment,t.IfcFlowFitting,t.IfcFlowController,t.IfcFlowMovingDevice,t.IfcFlowStorageDevice,t.IfcFlowTreatmentDevice,t.IfcEnergyConversionDevice,t.IfcDuctSegment,t.IfcPipeSegment,t.IfcCableSegment,t.IfcFurnishingElement,t.IfcFurniture,t.IfcProxy,t.IfcAnnotation,t.IfcTransportElement,t.IfcCivilElement,t.IfcGeographicElement,t.IfcCourse,t.IfcPavement,t.IfcKerb,t.IfcMooringDevice,t.IfcNavigationElement,t.IfcTrackElement,t.IfcVehicle,t.IfcEarthworksElement,t.IfcEarthworksFill,t.IfcEarthworksCut,t.IfcReferent,t.IfcSign,t.IfcSignal,t.IfcGeotechnicalStratum,t.IfcGeotechnicalAssembly,t.IfcSolidStratum,t.IfcVoidStratum,t.IfcWaterStratum,t.IfcPositioningElement,t.IfcAlignment,t.IfcRelContainedInSpatialStructure,t.IfcRelAggregates,t.IfcRelDefinesByProperties,t.IfcRelDefinesByType,t.IfcRelAssociatesMaterial,t.IfcRelAssociatesClassification,t.IfcRelVoidsElement,t.IfcRelFillsElement,t.IfcRelConnectsPathElements,t.IfcRelSpaceBoundary,t.IfcPropertySet,t.IfcPropertySingleValue,t.IfcPropertyEnumeratedValue,t.IfcPropertyBoundedValue,t.IfcPropertyListValue,t.IfcElementQuantity,t.IfcQuantityLength,t.IfcQuantityArea,t.IfcQuantityVolume,t.IfcQuantityCount,t.IfcQuantityWeight,t.IfcWallType,t.IfcDoorType,t.IfcWindowType,t.IfcSlabType,t.IfcColumnType,t.IfcBeamType,t.IfcPileType,t.IfcMemberType,t.IfcPlateType,t.IfcFootingType,t.IfcCoveringType,t.IfcRailingType,t.IfcStairType,t.IfcRampType,t.IfcRoofType,t.IfcCurtainWallType,t.IfcBuildingElementProxyType;function ue(e){return t[e]??"Unknown"}const Ie=["00A0 0104 02D8 0141 00A4 013D 015A 00A7 00A8 0160 015E 0164 0179 00AD 017D 017B","00B0 0105 02DB 0142 00B4 013E 015B 02C7 00B8 0161 015F 0165 017A 02DD 017E 017C","0154 00C1 00C2 0102 00C4 0139 0106 00C7 010C 00C9 0118 00CB 011A 00CD 00CE 010E","0110 0143 0147 00D3 00D4 0150 00D6 00D7 0158 016E 00DA 0170 00DC 00DD 0162 00DF","0155 00E1 00E2 0103 00E4 013A 0107 00E7 010D 00E9 0119 00EB 011B 00ED 00EE 010F","0111 0144 0148 00F3 00F4 0151 00F6 00F7 0159 016F 00FA 0171 00FC 00FD 0163 02D9","00A0 0126 02D8 00A3 00A4 0000 0124 00A7 00A8 0130 015E 011E 0134 00AD 0000 017B","00B0 0127 00B2 00B3 00B4 00B5 0125 00B7 00B8 0131 015F 011F 0135 00BD 0000 017C","00C0 00C1 00C2 0000 00C4 010A 0108 00C7 00C8 00C9 00CA 00CB 00CC 00CD 00CE 00CF","0000 00D1 00D2 00D3 00D4 0120 00D6 00D7 011C 00D9 00DA 00DB 00DC 016C 015C 00DF","00E0 00E1 00E2 0000 00E4 010B 0109 00E7 00E8 00E9 00EA 00EB 00EC 00ED 00EE 00EF","0000 00F1 00F2 00F3 00F4 0121 00F6 00F7 011D 00F9 00FA 00FB 00FC 016D 015D 02D9","00A0 0104 0138 0156 00A4 0128 013B 00A7 00A8 0160 0112 0122 0166 00AD 017D 00AF","00B0 0105 02DB 0157 00B4 0129 013C 02C7 00B8 0161 0113 0123 0167 014A 017E 014B","0100 00C1 00C2 00C3 00C4 00C5 00C6 012E 010C 00C9 0118 00CB 0116 00CD 00CE 012A","0110 0145 014C 0136 00D4 00D5 00D6 00D7 00D8 0172 00DA 00DB 00DC 0168 016A 00DF","0101 00E1 00E2 00E3 00E4 00E5 00E6 012F 010D 00E9 0119 00EB 0117 00ED 00EE 012B","0111 0146 014D 0137 00F4 00F5 00F6 00F7 00F8 0173 00FA 00FB 00FC 0169 016B 02D9","00A0 0401 0402 0403 0404 0405 0406 0407 0408 0409 040A 040B 040C 00AD 040E 040F","0410 0411 0412 0413 0414 0415 0416 0417 0418 0419 041A 041B 041C 041D 041E 041F","0420 0421 0422 0423 0424 0425 0426 0427 0428 0429 042A 042B 042C 042D 042E 042F","0430 0431 0432 0433 0434 0435 0436 0437 0438 0439 043A 043B 043C 043D 043E 043F","0440 0441 0442 0443 0444 0445 0446 0447 0448 0449 044A 044B 044C 044D 044E 044F","2116 0451 0452 0453 0454 0455 0456 0457 0458 0459 045A 045B 045C 00A7 045E 045F","00A0 0000 0000 0000 00A4 0000 0000 0000 0000 0000 0000 0000 060C 00AD 0000 0000","0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 061B 0000 0000 0000 061F","0000 0621 0622 0623 0624 0625 0626 0627 0628 0629 062A 062B 062C 062D 062E 062F","0630 0631 0632 0633 0634 0635 0636 0637 0638 0639 063A 0000 0000 0000 0000 0000","0640 0641 0642 0643 0644 0645 0646 0647 0648 0649 064A 064B 064C 064D 064E 064F","0650 0651 0652 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000","00A0 2018 2019 00A3 20AC 20AF 00A6 00A7 00A8 00A9 037A 00AB 00AC 00AD 0000 2015","00B0 00B1 00B2 00B3 0384 0385 0386 00B7 0388 0389 038A 00BB 038C 00BD 038E 038F","0390 0391 0392 0393 0394 0395 0396 0397 0398 0399 039A 039B 039C 039D 039E 039F","03A0 03A1 0000 03A3 03A4 03A5 03A6 03A7 03A8 03A9 03AA 03AB 03AC 03AD 03AE 03AF","03B0 03B1 03B2 03B3 03B4 03B5 03B6 03B7 03B8 03B9 03BA 03BB 03BC 03BD 03BE 03BF","03C0 03C1 03C2 03C3 03C4 03C5 03C6 03C7 03C8 03C9 03CA 03CB 03CC 03CD 03CE 0000","00A0 0000 00A2 00A3 00A4 00A5 00A6 00A7 00A8 00A9 00D7 00AB 00AC 00AD 00AE 00AF","00B0 00B1 00B2 00B3 00B4 00B5 00B6 00B7 00B8 00B9 00F7 00BB 00BC 00BD 00BE 0000","0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000","0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 2017","05D0 05D1 05D2 05D3 05D4 05D5 05D6 05D7 05D8 05D9 05DA 05DB 05DC 05DD 05DE 05DF","05E0 05E1 05E2 05E3 05E4 05E5 05E6 05E7 05E8 05E9 05EA 0000 0000 200E 200F 0000","00A0 00A1 00A2 00A3 00A4 00A5 00A6 00A7 00A8 00A9 00AA 00AB 00AC 00AD 00AE 00AF","00B0 00B1 00B2 00B3 00B4 00B5 00B6 00B7 00B8 00B9 00BA 00BB 00BC 00BD 00BE 00BF","00C0 00C1 00C2 00C3 00C4 00C5 00C6 00C7 00C8 00C9 00CA 00CB 00CC 00CD 00CE 00CF","011E 00D1 00D2 00D3 00D4 00D5 00D6 00D7 00D8 00D9 00DA 00DB 00DC 0130 015E 00DF","00E0 00E1 00E2 00E3 00E4 00E5 00E6 00E7 00E8 00E9 00EA 00EB 00EC 00ED 00EE 00EF","011F 00F1 00F2 00F3 00F4 00F5 00F6 00F7 00F8 00F9 00FA 00FB 00FC 0131 015F 00FF"];(()=>{const e=[];for(let r=0;r<8;r++){const i=Ie.slice(r*6,r*6+6);e.push(i.join(" ").split(" ").map(n=>parseInt(n,16)))}return e})();const Y=[t.IfcProject,t.IfcSite,t.IfcBuilding,t.IfcBuildingStorey,t.IfcSpace,t.IfcSpatialZone,t.IfcFacility,t.IfcFacilityPart,t.IfcBridge,t.IfcBridgePart,t.IfcRoad,t.IfcRoadPart,t.IfcRailway,t.IfcRailwayPart,t.IfcMarineFacility,t.IfcMarinePart,t.IfcFacilityPartCommon],he=[t.IfcBuilding,t.IfcFacility,t.IfcBridge,t.IfcRoad,t.IfcRailway,t.IfcMarineFacility],ge=[t.IfcBuildingStorey],Ce=[t.IfcSpace,t.IfcSpatialZone];new Set(Y);new Set(he);new Set(ge);new Set(Ce);new Set(Y.map(e=>ue(e)));const me={IFCSOLIDSTRATUM:"IfcGeotechnicalStratum",IFCVOIDSTRATUM:"IfcGeotechnicalStratum",IFCWATERSTRATUM:"IfcGeotechnicalStratum"};Object.entries(me).map(([e,r])=>[e.toUpperCase(),r.toUpperCase()]);new TextDecoder;const Ae=`
        struct Uniforms {
          viewProj: mat4x4<f32>,
          model: mat4x4<f32>,
          baseColor: vec4<f32>,
          metallicRoughness: vec2<f32>, // x = metallic, y = roughness
          _padding1: vec2<f32>,
          sectionPlane: vec4<f32>,      // xyz = plane normal, w = plane distance
          flags: vec4<u32>,             // x = isSelected, y = section/clip bits, z = edgeEnabled, w = edgeIntensityMilli
          clipBoxMin: vec4<f32>,        // xyz = clip-box min corner (world), w = pad
          clipBoxMax: vec4<f32>,        // xyz = clip-box max corner (world), w = pad
          // Quantized-vertex dequantization (issue #1682 phase 6):
          // xyz = lattice-aligned quantMin (batch-origin-relative), w = step.
          // Only read by vs_main_quantized; zero elsewhere.
          quantParams: vec4<f32>,
        }
        @binding(0) @group(0) var<uniform> uniforms: Uniforms;

        // Global lighting environment — one buffer shared by every mesh in
        // the pass (bound once per frame at group(1)). Field packing must
        // match packEnvironmentUniforms() in environment.ts.
        struct Environment {
          sunDirection: vec3<f32>,      // unit vector TOWARD the sun
          sunIntensity: f32,
          sunColor: vec3<f32>,
          ambientIntensity: f32,
          skyColor: vec3<f32>,          // hemisphere-ambient sky tint
          exposure: f32,
          groundColor: vec3<f32>,       // hemisphere-ambient ground tint
          fillIntensity: f32,
          rimIntensity: f32,
          sunSoftness: f32,
          _pad1: f32,
          _pad2: f32,
        }
        @binding(0) @group(1) var<uniform> env: Environment;

        // Sun shadow map (#2670, Phase 2b) at group(1). The depth map, a
        // comparison sampler, and the light matrix + params. Bound on every
        // main-family pipeline; sampling is gated by shadowU.params.y (enabled),
        // so when shadows are off this reads the 1×1 dummy and returns 1.0.
        @binding(1) @group(1) var shadowMap: texture_depth_2d;
        @binding(2) @group(1) var shadowCmp: sampler_comparison;
        struct Shadow {
          lightViewProj: mat4x4<f32>,
          // x = texelSize (1/resolution), y = enabled (0/1),
          // z = normalBias (world units), w = pcfRadius (texels).
          params: vec4<f32>,
          // x = depthBias (reverse-Z clip units, nudges toward lit).
          params2: vec4<f32>,
        }
        @binding(3) @group(1) var<uniform> shadowU: Shadow;

        // Fraction of the sun reaching this surface point (1 = lit, 0 = fully
        // shadowed). Normal-offset + slope-scaled bias defeats acne without
        // peter-panning; the penumbra is sampled with a 12-tap Poisson disk
        // ROTATED per pixel (interleaved gradient noise). A fixed grid kernel
        // undersamples a wide penumbra and breaks into discrete bands (the
        // "tripled shadow" at high softness); a rotated disk turns that banding
        // into fine dither that reads as smooth at any softness.
        // textureSampleCompareLevel is used (not ...Compare) so it is legal in
        // this non-uniform control flow.
        const SHADOW_POISSON = array<vec2<f32>, 12>(
          vec2<f32>(-0.326, -0.406), vec2<f32>(-0.840, -0.074), vec2<f32>(-0.696,  0.457),
          vec2<f32>(-0.203,  0.621), vec2<f32>( 0.962, -0.195), vec2<f32>( 0.473, -0.480),
          vec2<f32>( 0.519,  0.767), vec2<f32>( 0.185, -0.893), vec2<f32>( 0.507,  0.064),
          vec2<f32>( 0.896,  0.412), vec2<f32>(-0.322, -0.933), vec2<f32>(-0.792, -0.598),
        );

        fn sunShadowFactor(worldPos: vec3<f32>, N: vec3<f32>, fragCoord: vec2<f32>) -> f32 {
          if (shadowU.params.y < 0.5) { return 1.0; }
          // The diffuse sun term is TWO-SIDED (abs(dot(N, sun)) in the shading
          // below), so a face whose stabilized normal points away from the sun is
          // still lit. Orient the normal toward the sun before biasing: otherwise
          // the normal-offset push (params.z) moves the sample AWAY from the light
          // (deeper behind the surface), and the slope term below collapses to its
          // max (NdotL→0), together biasing the compare toward "lit" — which leaks
          // direct sun onto interior faces the roof occludes (#2670 review).
          let L = normalize(env.sunDirection);
          let Ns = N * select(-1.0, 1.0, dot(N, L) >= 0.0);
          let biased = worldPos + Ns * shadowU.params.z;
          let clip = shadowU.lightViewProj * vec4<f32>(biased, 1.0);
          let ndc = clip.xyz / clip.w;
          let uv = vec2<f32>(ndc.x * 0.5 + 0.5, ndc.y * -0.5 + 0.5);
          let inBounds = uv.x >= 0.0 && uv.x <= 1.0 && uv.y >= 0.0 && uv.y <= 1.0 && ndc.z > 0.0;
          if (!inBounds) { return 1.0; }
          // Slope-scaled depth bias: at a grazing sun the receiver's light-space
          // depth changes fast across the kernel, so a constant bias can't clear
          // the whole footprint and the surface rings with moiré. Grow the bias
          // as the surface tilts away from the sun (NdotL → 0) and with the
          // kernel width. The hardware slope bias in the depth pass covers the
          // occluder side; this covers the receiver side.
          let NdotL = max(dot(Ns, L), 0.0);
          let slope = clamp(sqrt(max(1.0 - NdotL * NdotL, 0.0)) / max(NdotL, 0.1), 1.0, 12.0);
          let refDepth = ndc.z + shadowU.params2.x * slope * (1.0 + shadowU.params.w);
          let radius = shadowU.params.x * shadowU.params.w;  // penumbra, uv units
          // Per-pixel rotation (interleaved gradient noise) dithers the disk so
          // the discrete taps never line up into bands.
          let ign = fract(52.9829189 * fract(dot(fragCoord, vec2<f32>(0.06711056, 0.00583715))));
          let ang = ign * 6.2831853;
          let cr = cos(ang);
          let sr = sin(ang);
          var sum = 0.0;
          for (var i = 0; i < 12; i = i + 1) {
            let p = SHADOW_POISSON[i];
            let off = vec2<f32>(p.x * cr - p.y * sr, p.x * sr + p.y * cr) * radius;
            sum = sum + textureSampleCompareLevel(shadowMap, shadowCmp, uv + off, refDepth);
          }
          let pcf = sum / 12.0;
          // Terminator fade. On a surface nearly PARALLEL to the sun rays
          // (NdotL → 0, e.g. a vertical wall under a midday sun) the receiver
          // straddles the shadow threshold, so the rotated-disk taps randomly
          // pass/fail and the wall breaks into salt-and-pepper speckle. The
          // direct sun term is near zero there anyway, so fade the cast shadow
          // smoothly toward lit as the surface goes grazing: a clean gradient
          // replaces the ripple (#2670).
          let graze = smoothstep(0.0, 0.3, NdotL);
          return mix(1.0, pcf, graze);
        }

        struct VertexInput {
          @location(0) position: vec3<f32>,
          @location(1) normal: vec3<f32>,
          @location(2) entityId: u32,
        }

        struct VertexOutput {
          @builtin(position) position: vec4<f32>,
          @location(0) worldPos: vec3<f32>,
          @location(1) normal: vec3<f32>,
          @location(2) @interpolate(flat) entityId: u32,
          @location(3) viewPos: vec3<f32>,  // For edge detection
          // Per-draw albedo carried from the vertex stage so the fragment shader
          // is shared by the flat path (vs_main writes uniforms.baseColor — the
          // per-batch / overlay-override colour) AND the instanced path
          // (vs_instanced writes the per-occurrence colour from the instance
          // buffer). For the flat path this is identical to reading
          // uniforms.baseColor directly (the value is constant across the draw).
          @location(4) color: vec4<f32>,
          // Per-occurrence selection flag for the instanced path (bit 0 = selected).
          // vs_main writes 0 (the flat path selects via uniforms.flags.x instead);
          // vs_instanced writes the per-instance flag from the instance buffer, so a
          // single selected occurrence highlights without re-drawing.
          @location(5) @interpolate(flat) instSelected: u32,
        }

        // Per-instance vertex-buffer inputs (slot 1, stepMode 'instance') used by
        // vs_instanced. The mat4 arrives as four COLUMN vec4s (WGSL mat4x4 is
        // column-major), matching composeInstanceMatrix's column-major output +
        // the pipeline's slot-1 attribute offsets (0/16/32/48).
        //
        // Location namespaces: vertex-INPUT @location (this struct + VertexInput)
        // and inter-stage @location (VertexOutput) are INDEPENDENT in WGSL, so
        // InstanceInput.m1 @location(4) does NOT collide with VertexOutput.color
        // @location(4) — exactly as VertexInput.entityId and VertexOutput.entityId
        // already BOTH use @location(2). Within the INPUT namespace the per-vertex
        // inputs (0..2) and per-instance inputs (3..8) stay distinct.
        struct InstanceInput {
          @location(3) m0: vec4<f32>,
          @location(4) m1: vec4<f32>,
          @location(5) m2: vec4<f32>,
          @location(6) m3: vec4<f32>,
          @location(7) instEntityId: u32,
          @location(8) instColor: vec4<f32>,
          @location(9) instSelected: u32,
        }

        // 12-byte quantized vertex (issue #1682 phase 6): uint16x4 (lattice
        // position xyz + packed octahedral normal in w as (u8x << 8 | u8y))
        // followed by the u32 entityId lane. Dequantization is BIT-EXACT for
        // the 2^-10 lattice: quantMin and q*step are both (integer)·2^-10,
        // so coincident points across batches stay coincident (the shared-
        // origin z-fight guarantee survives quantization).
        struct QuantizedVertexInput {
          @location(0) q: vec4<u32>,     // uint16x4: x, y, z, packedOct
          @location(2) entityId: u32,
        }

        fn octDecodeN(packed: u32) -> vec3<f32> {
          let ox = (f32((packed >> 8u) & 255u) / 255.0) * 2.0 - 1.0;
          let oy = (f32(packed & 255u) / 255.0) * 2.0 - 1.0;
          var n = vec3<f32>(ox, oy, 1.0 - abs(ox) - abs(oy));
          if (n.z < 0.0) {
            let tx = (1.0 - abs(oy)) * select(-1.0, 1.0, ox >= 0.0);
            let ty = (1.0 - abs(ox)) * select(-1.0, 1.0, oy >= 0.0);
            n = vec3<f32>(tx, ty, n.z);
          }
          return normalize(n);
        }

        // Shared flat-path vertex shading — vs_main and vs_main_quantized
        // differ ONLY in how position/normal are sourced.
        fn shadeFlatVertex(localPos: vec3<f32>, localNormal: vec3<f32>, entityId: u32) -> VertexOutput {
          var output: VertexOutput;
          let worldPos = uniforms.model * vec4<f32>(localPos, 1.0);
          output.position = uniforms.viewProj * worldPos;
          // Anti z-fighting depth nudge — see vs_main's comment.
          let colorSalt = (entityId >> 24u) * 2654435761u;
          let zHash = (((entityId & 0x00FFFFFFu) ^ colorSalt) * 2654435761u) & 255u;
          output.position.z *= 1.0 + f32(zHash) * 1e-6;
          output.worldPos = worldPos.xyz;
          output.normal = normalize((uniforms.model * vec4<f32>(localNormal, 0.0)).xyz);
          output.entityId = entityId;
          output.color = uniforms.baseColor;
          output.instSelected = 0u;
          output.viewPos = (uniforms.viewProj * worldPos).xyz;
          return output;
        }

        @vertex
        fn vs_main_quantized(input: QuantizedVertexInput) -> VertexOutput {
          let p = uniforms.quantParams.xyz
            + vec3<f32>(f32(input.q.x), f32(input.q.y), f32(input.q.z)) * uniforms.quantParams.w;
          return shadeFlatVertex(p, octDecodeN(input.q.w), input.entityId);
        }

        @vertex
        fn vs_main(input: VertexInput, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {
          var output: VertexOutput;
          let worldPos = uniforms.model * vec4<f32>(input.position, 1.0);
          output.position = uniforms.viewProj * worldPos;
          // Anti z-fighting: deterministic depth nudge.
          // Knuth multiplicative hash spreads sequential IDs across 0-255 so
          // coplanar faces from different entities always get distinct depths.
          // Material-layer walls slice into one closed solid per layer, all
          // sharing the PARENT wall's expressId, so adjacent layers' coincident
          // interface caps would get the same entity nudge and z-fight into a
          // flickering comb ("see inside the wall"). To separate them we fold in
          // an 8-bit MATERIAL-COLOUR salt that mergeGeometry/interleaveTextured
          // baked into the HIGH 8 bits of the entityId lane (low 24 = picking id,
          // masked off by encodeId24). Crucially the salt comes from the mesh's
          // OWN colour, NOT the per-draw baseColor uniform — so the base opaque
          // pass and the lens/IDS/compare/4D OVERLAY pass (which redraws the same
          // geometry with a DIFFERENT draw colour) compute the SAME nudge, and
          // the overlay pipeline's depthCompare:'equal' matches instead of
          // rejecting every fragment. At 1e-6 per step the max world-space offset
          // is <3mm at 10m — invisible.
          let colorSalt = (input.entityId >> 24u) * 2654435761u;
          let zHash = (((input.entityId & 0x00FFFFFFu) ^ colorSalt) * 2654435761u) & 255u;
          output.position.z *= 1.0 + f32(zHash) * 1e-6;
          output.worldPos = worldPos.xyz;
          output.normal = normalize((uniforms.model * vec4<f32>(input.normal, 0.0)).xyz);
          output.entityId = input.entityId;
          output.color = uniforms.baseColor;
          output.instSelected = 0u;  // flat path selects via uniforms.flags.x
          // Store view-space position for edge detection
          output.viewPos = (uniforms.viewProj * worldPos).xyz;
          return output;
        }

        // Instanced vertex entry — one template's geometry drawn once per
        // occurrence. The per-instance mat4 already folds SWAP * rel_k * T(origin)
        // (composed CPU-side, see instanced-render.ts), so it maps the template's
        // LOCAL vertex straight to WebGL Y-up world space — no uniforms.model.
        // rel_k and SWAP are rigid (no scale), so the same matrix transforms
        // normals. entityId + colour come per-occurrence from the instance buffer.
        @vertex
        fn vs_instanced(input: VertexInput, inst: InstanceInput) -> VertexOutput {
          var output: VertexOutput;
          let instMat = mat4x4<f32>(inst.m0, inst.m1, inst.m2, inst.m3);
          let worldPos = instMat * vec4<f32>(input.position, 1.0);
          output.position = uniforms.viewProj * worldPos;
          // Same per-entity depth nudge as vs_main. No colour salt here: the
          // instanced path has no base-vs-overlay coincident redraw (yet), so the
          // raw picking id is enough to separate coplanar entities.
          let zHash = ((inst.instEntityId & 0x00FFFFFFu) * 2654435761u) & 255u;
          output.position.z *= 1.0 + f32(zHash) * 1e-6;
          output.worldPos = worldPos.xyz;
          output.normal = normalize((instMat * vec4<f32>(input.normal, 0.0)).xyz);
          output.entityId = inst.instEntityId;
          output.color = inst.instColor;
          output.instSelected = inst.instSelected;
          output.viewPos = (uniforms.viewProj * worldPos).xyz;
          return output;
        }

        // PBR helper functions
        fn fresnelSchlick(cosTheta: f32, F0: vec3<f32>) -> vec3<f32> {
          return F0 + (1.0 - F0) * pow(clamp(1.0 - cosTheta, 0.0, 1.0), 5.0);
        }

        fn distributionGGX(NdotH: f32, roughness: f32) -> f32 {
          let a = roughness * roughness;
          let a2 = a * a;
          let NdotH2 = NdotH * NdotH;
          let num = a2;
          let denomBase = (NdotH2 * (a2 - 1.0) + 1.0);
          let denom = 3.14159265 * denomBase * denomBase;
          return num / max(denom, 0.0000001);
        }

        fn geometrySchlickGGX(NdotV: f32, roughness: f32) -> f32 {
          let r = (roughness + 1.0);
          let k = (r * r) / 8.0;
          let num = NdotV;
          let denom = NdotV * (1.0 - k) + k;
          return num / max(denom, 0.0000001);
        }

        fn geometrySmith(NdotV: f32, NdotL: f32, roughness: f32) -> f32 {
          let ggx2 = geometrySchlickGGX(NdotV, roughness);
          let ggx1 = geometrySchlickGGX(NdotL, roughness);
          return ggx1 * ggx2;
        }

        fn encodeId24(id: u32) -> vec4<f32> {
          let r = f32((id >> 16u) & 255u) / 255.0;
          let g = f32((id >> 8u) & 255u) / 255.0;
          let b = f32(id & 255u) / 255.0;
          return vec4<f32>(r, g, b, 1.0);
        }

        struct FragmentOutput {
          @location(0) color: vec4<f32>,
          @location(1) objectIdEncoded: vec4<f32>,
        }

        @fragment
        fn fs_main(input: VertexOutput) -> FragmentOutput {
          // Per-instance hide/isolate: bit 1 of the instance flags lane marks a hidden
          // occurrence. Discard it so it neither draws nor writes depth (and the pick
          // pass applies the same discard, so it isn't pickable). vs_main writes
          // instSelected=0u for flat geometry, so this never affects the flat path.
          if ((input.instSelected & 2u) != 0u) {
            discard;
          }
          // Per-instance opacity routing (instanced passes only — flags.x bit 2). The
          // opaque instanced pass draws fully-opaque (or selected) occurrences; the
          // transparent instanced sub-pass (bit 3, alpha-blended) draws the rest. Discard
          // the occurrences belonging to the OTHER pass so each is drawn exactly once.
          // Lens-ghost / x-ray / compare write a low per-instance alpha into input.color.a.
          if ((uniforms.flags.x & 4u) != 0u) {
            let occOpaque = input.color.a >= 0.99 || (input.instSelected & 1u) != 0u;
            let transparentPass = (uniforms.flags.x & 8u) != 0u;
            if (transparentPass) {
              if (occOpaque) { discard; }
            } else {
              if (!occOpaque) { discard; }
            }
          }
          // Section plane clipping - discard fragments ABOVE the plane.
          // flags.y packs two bits: bit 0 = enabled, bit 1 = flipped.
          let sectionEnabled = (uniforms.flags.y & 1u) == 1u;
          if (sectionEnabled) {
            let planeNormal = uniforms.sectionPlane.xyz;
            let planeDistance = uniforms.sectionPlane.w;
            let flipped = (uniforms.flags.y & 2u) == 2u;
            let side = select(1.0, -1.0, flipped);
            let distToPlane = (dot(input.worldPos, planeNormal) - planeDistance) * side;
            if (distToPlane > 0.0) {
              discard;
            }
          }
          // Clip box (section / crop box): discard fragments OUTSIDE the AABB.
          // flags.y bit 2 = clip-box enabled.
          if ((uniforms.flags.y & 4u) != 0u) {
            let p = input.worldPos;
            if (any(p < uniforms.clipBoxMin.xyz) || any(p > uniforms.clipBoxMax.xyz)) {
              discard;
            }
          }

          // Compute normal via derivative-based flat shading.
          //
          // Industry-standard solution for BIM/CAD viewers — what
          // Three.js (material.flatShading = true), Autodesk Forge,
          // Speckle, and xeokit all do for opaque surfaces. Rationale:
          //
          //   * BIM geometry is overwhelmingly flat surfaces (walls,
          //     slabs, roofs, beams), and CSG operations (opening
          //     subtraction, layer slicing) emit those surfaces as
          //     dense strips of coplanar triangles. Per-vertex normal
          //     averaging gives a SLIGHTLY-different normal at each
          //     vertex due to f32 noise from boolean output; the
          //     boundary between strips then reads as a visible darker/
          //     brighter scar line — the horizontal striations on
          //     walls, stripes on roofs, visible triangulation reports
          //     across every CSG kernel we have tried (legacy BSP,
          //     Manifold).
          //   * cross(dpdx, dpdy) of world position evaluates to the
          //     EXACT face normal in the fragment shader. Every
          //     fragment on a flat face — across an arbitrarily-fine
          //     triangulation — gets the IDENTICAL normal, so coplanar
          //     splits become invisible by construction. No CPU-side
          //     welding, smooth-grouping, or coplanar-face merging
          //     fixes the symptom as cleanly.
          //
          // Trade-off: genuinely curved surfaces (cylinder tessellations,
          // BSpline approximations) shade with visible facets. For BIM
          // that's acceptable — curved surfaces are < 5 % of typical
          // model triangle count and the faceting matches CAD-tool
          // (Revit, ArchiCAD) on-screen behaviour at default quality.
          //
          // We still fall back to the vertex normal when derivatives
          // are unavailable (extreme polygon degeneracy where dpdx /
          // dpdy collapse to zero — practically never on real geometry).
          let faceN = cross(dpdx(input.worldPos), dpdy(input.worldPos));
          let fLen2 = dot(faceN, faceN);
          var N: vec3<f32>;
          if (fLen2 > 1e-10) {
            N = faceN * inverseSqrt(fLen2);
          } else {
            // Degenerate derivative — fall back to the vertex normal
            // if it's populated, else +Y.
            N = input.normal;
            let nLen2 = dot(N, N);
            if (nLen2 > 1e-6) {
              N = N * inverseSqrt(nLen2);
            } else {
              N = vec3<f32>(0.0, 1.0, 0.0);
            }
          }

          // Stabilize the SIGN of the derivative face normal with the vertex
          // normal. The screen-space cross product gives the exact face
          // normal DIRECTION for coplanar strips (the scar-line fix), but at
          // grazing angles its SIGN becomes numerically unstable per quad —
          // hemisphere/rim lighting then band-flips across large regions of
          // flat walls/slabs (diagonal lighter/darker bands). The interpolated
          // vertex normal is quad-noise-free, so use it only to orient N.
          // Guard: skip when the vertex normal is missing or nearly
          // perpendicular to the face normal (unreliable witness).
          let vN = input.normal;
          let alignDot = dot(N, vN);
          if (alignDot * alignDot > 0.03 * dot(vN, vN)) {
            N = N * sign(alignDot);
          }

          // Lighting environment — sun/hemisphere/exposure come from the
          // global env uniform (defaults reproduce the historic hardcoded
          // values); fill + rim directions stay fixed in view-agnostic
          // world space as stylistic shaping lights.
          let sunLight = env.sunDirection;
          let fillLight = normalize(vec3<f32>(-0.5, 0.3, -0.3));  // Fill light
          let rimLight = normalize(vec3<f32>(0.0, 0.2, -1.0));  // Rim light for edge definition

          // Hemisphere ambient
          let hemisphereFactor = N.y * 0.5 + 0.5;
          let ambient = mix(env.groundColor, env.skyColor, hemisphereFactor) * env.ambientIntensity;

          // Two-sided sun light so inner faces (I-beam channels) stay visible.
          // sunSoftness is the diffuse wrap (env uniform): 0 = crisp
          // terminator (hard shadows), larger = softer wrap-around (overcast).
          let NdotL = abs(dot(N, sunLight));
          let wrap = env.sunSoftness;
          let diffuseSun = max((NdotL + wrap) / (1.0 + wrap), 0.0) * env.sunIntensity;

          // Fill light - two-sided
          let NdotFill = abs(dot(N, fillLight));
          let diffuseFill = NdotFill * env.fillIntensity;

          // Rim light for edge definition
          let NdotRim = max(dot(N, rimLight), 0.0);
          let rim = pow(NdotRim, 4.0) * env.rimIntensity;

          var baseColor = input.color.rgb;

          // Detect if the color is close to white/gray (low saturation)
          let baseGray = dot(baseColor, vec3<f32>(0.299, 0.587, 0.114));
          let baseSaturation = length(baseColor - vec3<f32>(baseGray)) / max(baseGray, 0.001);
          let isWhiteish = 1.0 - smoothstep(0.0, 0.3, baseSaturation);

          // Darken whites/grays more to reduce washed-out appearance
          baseColor = mix(baseColor, baseColor * 0.7, isWhiteish * 0.4);

          // Combine all lighting. Only the DIRECT sun term is occluded by cast
          // shadows (#2670); ambient/fill/rim are indirect and stay unshadowed.
          let sunShadow = sunShadowFactor(input.worldPos, N, input.position.xy);
          let lightTerm = ambient + env.sunColor * (diffuseSun * sunShadow) + vec3<f32>(diffuseFill + rim);
          var color = baseColor * lightTerm;

          // flags.x is a bitfield:
          //   bit 0 (value 1) = isSelected  → selection-highlight + force opaque
          //   bit 1 (value 2) = isOverlay   → color-override pass; preserve
          //                                    baseColor.a (overlay pipeline has
          //                                    src-alpha blending) AND skip the
          //                                    glass-fresnel branch so low-alpha
          //                                    ghost tints don't pick up the
          //                                    near-white reflection tint meant
          //                                    for real glass materials.
          // Selected via the per-draw flag (flat path) OR the per-occurrence flag
          // (instanced path — vs_instanced reads it from the instance buffer).
          let isSelected = ((uniforms.flags.x & 1u) == 1u) || ((input.instSelected & 1u) == 1u);
          let isOverlay = (uniforms.flags.x & 2u) == 2u;

          // Selection highlight — a blue albedo RE-LIT by the scene lighting.
          //
          // We override the material albedo with selection-blue and re-light
          // it with the SAME lightTerm used for unselected surfaces, then
          // discard the view-dependent (fresnel) term below. Two requirements
          // are in tension and this satisfies both:
          //
          //   * No base-material bleed-through. The old fresnel-glow mix left
          //     ~80 % of the lit object colour visible at face centres (the
          //     green-site / red-roof wash-out). Here the base colour never
          //     enters the result — only lightTerm (geometry/light, colour-
          //     independent) modulates the constant blue albedo.
          //   * Facet/crease structure must survive. A single FLAT colour
          //     (the previous fix) collapsed every face to the same blue, so
          //     internal edges — which read as the per-face shading STEP, not
          //     just the faint screen-space edge line — disappeared on
          //     selection. Re-lighting keeps that per-face brightness step, so
          //     creases read on the highlight exactly as they do unselected.
          //
          // The luminance of lightTerm is remapped by a multiplicative gain
          // (which preserves the per-face brightness RATIOS, so creases read
          // as strongly as on the unselected surface) calibrated so a sunlit
          // face hits full selection-blue, with a floor/ceiling clamp so
          // shadowed faces only dim and bright scenes never wash out.
          if (isSelected) {
            let shadeLum = dot(lightTerm, vec3<f32>(0.299, 0.587, 0.114));
            let shade = clamp(shadeLum * 1.55, 0.45, 1.2);
            color = vec3<f32>(0.3, 0.6, 1.0) * shade;
          }

          // flags.x bit 5 (value 32) = EMPHASIZE overlay: render the colour
          // override FULLY UNLIT and saturated (no lighting attenuation, no
          // wash-to-white) so the focused clash pair reads as a solid, vivid,
          // distinct colour that pops against the lit model — like a clash tool.
          // A faint normal-based shade keeps the silhouette from going flat. (#1277)
          let emphasizedOverlay = isOverlay && (uniforms.flags.x & 32u) != 0u;
          if (emphasizedOverlay) {
            let facet = 0.85 + 0.15 * abs(dot(N, normalize(vec3<f32>(0.3, 1.0, 0.2))));
            color = baseColor * facet;
          }

          // Beautiful fresnel effect for transparent materials (glass)
          // Skip when selected — the glass shine and desaturation wash out the
          // blue highlight, making it appear white instead of blue.
          // Also force alpha to 1.0 for selected objects so the highlight is
          // fully opaque (the selection pipeline has no alpha blending).
          // Emphasized clash overlay paints a SOLID vivid fill (force opaque) so
          // it isn't blended down to a pale tint against the geometry beneath.
          var finalAlpha = select(input.color.a, 1.0, isSelected || emphasizedOverlay);
          if (finalAlpha < 0.99 && !isSelected && !isOverlay) {
            // Calculate view direction for fresnel
            let V = normalize(-input.worldPos);
            let NdotV = max(dot(N, V), 0.0);

            // Enhanced fresnel effect - stronger at edges (grazing angles)
            // Using Schlick's approximation for realistic glass reflection
            let fresnelPower = 1.5; // Higher = softer edge reflections
            let fresnel = pow(1.0 - NdotV, fresnelPower);

            // Glass reflection tint (sky/environment reflection at edges)
            let reflectionTint = vec3<f32>(0.92, 0.96, 1.0);  // Cool sky reflection
            let reflectionStrength = fresnel * 0.6;  // Strong edge reflections

            // Mix in reflection tint at edges
            color = mix(color, color * reflectionTint, reflectionStrength);

            // Add realistic glass shine - brighter at edges where light reflects
            let glassShine = fresnel * 0.12;
            color += glassShine;

            // Slight desaturation at edges (glass reflects environment, not just color)
            let edgeDesaturation = fresnel * 0.25;
            let gray = dot(color, vec3<f32>(0.299, 0.587, 0.114));
            color = mix(color, vec3<f32>(gray), edgeDesaturation);

            // Make glass more transparent (reduce opacity by 30%)
            finalAlpha = finalAlpha * 0.7;
          }

          // Exposure adjustment (historic default 0.85 darkens overall)
          color *= env.exposure;

          // Contrast enhancement
          color = (color - 0.5) * 1.15 + 0.5;
          color = max(color, vec3<f32>(0.0));

          // Saturation boost - stronger for colored surfaces, less for whites
          let gray = dot(color, vec3<f32>(0.299, 0.587, 0.114));
          // More saturation for colored surfaces. isWhiteish is derived from
          // the base material colour, so for a SELECTED object it would leak a
          // material dependence into the highlight (breaking the no-bleed-
          // through contract). The selection blue is a fully-saturated colour,
          // so force the colored-surface boost (1.4) when selected — keeping
          // the highlight identical regardless of the underlying material.
          let satBoost = select(mix(1.4, 1.1, isWhiteish), 1.4, isSelected);
          color = mix(vec3<f32>(gray), color, satBoost);

          // ACES filmic tone mapping
          let a = 2.51;
          let b = 0.03;
          let c = 2.43;
          let d = 0.59;
          let e = 0.14;
          color = clamp((color * (a * color + b)) / (color * (c * color + d) + e), vec3<f32>(0.0), vec3<f32>(1.0));

          // Subtle edge enhancement using screen-space derivatives.
          //
          // Use the SHADED normal (face normal from dpdx/dpdy above)
          // for the normal-gradient term, not the interpolated vertex
          // normal — otherwise we get spurious dark stripes on flat
          // surfaces whose vertex normals carry numerical noise from
          // CSG output (the visible scar-line symptom would just
          // resurface here even after the lit-normal fix). With the
          // face normal, coplanar adjacent triangles agree exactly →
          // zero normal gradient → no false edge; only the genuine
          // creases between perpendicular faces produce a real
          // gradient and get the intended outline.
          let depthGradient = length(vec2<f32>(
            dpdx(input.viewPos.z),
            dpdy(input.viewPos.z)
          ));
          let normalGradient = length(vec2<f32>(
            length(dpdx(N)),
            length(dpdy(N))
          ));

          if (uniforms.flags.z == 1u) {
            // Threshold filters subtle normal discontinuities at internal
            // triangle edges between coplanar entities in the same batch.
            let edgeFactor = smoothstep(0.02, 0.12, depthGradient * 10.0 + normalGradient * 5.0);
            let edgeIntensity = f32(uniforms.flags.w) / 1000.0;
            let edgeDarkenStrength = clamp(0.25 * edgeIntensity, 0.0, 0.85);
            let edgeDarken = mix(1.0, 1.0 - edgeDarkenStrength, edgeFactor);
            color *= edgeDarken;
          }

          // Gamma correction
          color = pow(color, vec3<f32>(1.0 / 2.2));

          var out: FragmentOutput;
          out.color = vec4<f32>(color, finalAlpha);
          out.objectIdEncoded = encodeId24(input.entityId);
          return out;
        }
      `;function g(e,r,i,n){const o=e.indexOf(r);if(o===-1)throw new Error(`textured.wgsl: anchor "${n}" not found — main.wgsl.ts changed; update the textured-shader derivation.`);if(e.indexOf(r,o+r.length)!==-1)throw new Error(`textured.wgsl: anchor "${n}" is not unique — tighten the derivation.`);return e.slice(0,o)+i+e.slice(o+r.length)}function ve(){let e=Ae;return e=g(e,"@binding(0) @group(0) var<uniform> uniforms: Uniforms;",`@binding(0) @group(0) var<uniform> uniforms: Uniforms;
        @binding(1) @group(0) var albedoTex: texture_2d<f32>;
        @binding(2) @group(0) var albedoSampler: sampler;`,"uniform binding"),e=g(e,`          @location(2) entityId: u32,
        }

        struct VertexOutput {`,`          @location(2) entityId: u32,
          @location(10) uv: vec2<f32>,
        }

        struct VertexOutput {`,"VertexInput uv"),e=g(e,`          @location(5) @interpolate(flat) instSelected: u32,
        }`,`          @location(5) @interpolate(flat) instSelected: u32,
          @location(6) uv: vec2<f32>,
        }`,"VertexOutput uv"),e=g(e,"          output.entityId = input.entityId;",`          output.entityId = input.entityId;
          output.uv = input.uv;`,"vs_main uv passthrough"),e=g(e,"var baseColor = input.color.rgb;",`let albedoTexel = textureSample(albedoTex, albedoSampler, input.uv);
          if (albedoTexel.a < 0.004) { discard; }
          var baseColor = albedoTexel.rgb * input.color.rgb;`,"albedo sample"),e}ve();const Se={sectionCut:0,annotation:1,alignment:2,grid:3,dxf:4,clashBox:5};Object.keys(Se).length;var L;(function(e){e.VERTEX="vertex",e.EDGE="edge",e.FACE="face",e.FACE_CENTER="face_center",e.POINT_CLOUD="point_cloud"})(L||(L={}));
