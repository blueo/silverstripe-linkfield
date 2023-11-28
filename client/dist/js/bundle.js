!function(){"use strict";var e={274:function(e,t,n){var r=l(n(521)),o=l(n(154));function l(e){return e&&e.__esModule?e:{default:e}}document.addEventListener("DOMContentLoaded",(()=>{(0,r.default)(),(0,o.default)()}))},521:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(648)),o=u(n(809)),l=u(n(852)),a=u(n(117)),i=u(n(606));function u(e){return e&&e.__esModule?e:{default:e}}var s=()=>{r.default.component.registerMany({LinkPicker:o.default,LinkField:l.default,"LinkModal.FormBuilderModal":a.default,"LinkModal.InsertMediaModal":i.default})};t.default=s},154:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(648)),o=l(n(689));function l(e){return e&&e.__esModule?e:{default:e}}var a=()=>{r.default.query.register("readLinkTypes",o.default)};t.default=a},852:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=g(n(363)),o=n(827),l=n(624),a=n(648),i=k(n(42)),u=k(n(809)),s=k(n(734)),d=k(n(686)),f=k(n(697)),c=g(n(123)),p=k(n(159)),y=k(n(510)),v=k(n(86)),m=k(n(754));function k(e){return e&&e.__esModule?e:{default:e}}function _(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(_=function(e){return e?n:t})(e)}function g(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=_(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var a=o?Object.getOwnPropertyDescriptor(e,l):null;a&&(a.get||a.set)?Object.defineProperty(r,l,a):r[l]=e[l]}return r.default=e,n&&n.set(e,r),r}const O="SilverStripe\\LinkField\\Controllers\\LinkFieldController",h=e=>{var t;let{value:n=null,onChange:o,types:l,actions:a,isMulti:i=!1}=e;const[d,c]=(0,r.useState)({}),[v,k]=(0,r.useState)(0);let _=n;Array.isArray(_)||("number"==typeof _&&0!=_&&(_=[_]),_||(_=[])),(0,r.useEffect)((()=>{if(!v&&_.length>0){const e=[];for(const t of _)e.push(`itemIDs[]=${t}`);const t=`${y.default.getSection(O).form.linkForm.dataUrl}?${e.join("&")}`;p.default.get(t).then((e=>e.json())).then((e=>{c(e)}))}}),[v,n&&n.length]);const g=()=>{k(0)},h=e=>{k(0);const t=[..._];t.includes(e)||t.push(e),o(i?t:t[0]),a.toasts.success(m.default._t("LinkField.SAVE_SUCCESS","Saved link"))},b=e=>{const t=`${y.default.getSection(O).form.linkForm.deleteUrl}/${e}`;p.default.delete(t,{},{"X-SecurityID":y.default.get("SecurityID")}).then((()=>{a.toasts.success(m.default._t("LinkField.DELETE_SUCCESS","Deleted link"))})).catch((()=>{a.toasts.error(m.default._t("LinkField.DELETE_ERROR","Failed to delete link"))}));const n={...d};delete n[e],c(n),o(i?Object.keys(n):0)},M=i||0===Object.keys(d).length,j=Boolean(v);return r.default.createElement(r.default.Fragment,null,M&&r.default.createElement(u.default,{onModalSuccess:h,onModalClosed:g,types:l}),r.default.createElement("div",null," ",(()=>{const e=[];for(const i of _){var t,n,o,a;if(!d[i])continue;const u=l.hasOwnProperty(null===(t=d[i])||void 0===t?void 0:t.typeKey)?l[null===(n=d[i])||void 0===n?void 0:n.typeKey]:{};e.push(r.default.createElement(s.default,{key:i,id:i,title:null===(o=d[i])||void 0===o?void 0:o.Title,description:null===(a=d[i])||void 0===a?void 0:a.description,typeTitle:u.title||"",onClear:b,onClick:()=>{k(i)}}))}return e})()," "),j&&r.default.createElement(f.default,{types:l,typeKey:null===(t=d[v])||void 0===t?void 0:t.typeKey,isOpen:Boolean(v),onSuccess:h,onClosed:g,linkID:v}))};h.propTypes={value:v.default.oneOfType([v.default.arrayOf(v.default.number),v.default.number]),onChange:v.default.func.isRequired,types:v.default.objectOf(d.default).isRequired,actions:v.default.object.isRequired,isMulti:v.default.bool};var b=(0,o.compose)((0,a.injectGraphql)("readLinkTypes"),i.default,(0,l.connect)(null,(e=>({actions:{toasts:(0,o.bindActionCreators)(c,e)}}))))(h);t.default=b},606:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;s(n(754));var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var a=o?Object.getOwnPropertyDescriptor(e,l):null;a&&(a.get||a.set)?Object.defineProperty(r,l,a):r[l]=e[l]}r.default=e,n&&n.set(e,r);return r}(n(363)),o=s(n(475)),l=n(624),a=s(n(686)),i=s(n(86));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function s(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}const f=e=>{let{type:t,editing:n,data:l,actions:a,onSubmit:i,...u}=e;if(!t)return!1;(0,r.useEffect)((()=>{n?a.initModal():a.reset()}),[n]);const s=l?{ID:l.FileID,Description:l.Title,TargetBlank:!!l.OpenInNew}:{};return r.default.createElement(o.default,d({isOpen:n,type:"insert-link",title:!1,bodyClassName:"modal__dialog",className:"insert-link__dialog-wrapper--internal",fileAttributes:s,onInsert:e=>{let{ID:n,Description:r,TargetBlank:o}=e;return i({FileID:n,Title:r,OpenInNew:o,typeKey:t.key},"",(()=>{}))}},u))};f.propTypes={type:a.default.isRequired,editing:i.default.bool.isRequired,data:i.default.object.isRequired,actions:i.default.object.isRequired,onClick:i.default.func.isRequired};var c=(0,l.connect)((function(){return{}}),(function(e){return{actions:{initModal:()=>e({type:"INIT_FORM_SCHEMA_STACK",payload:{formSchema:{type:"insert-link",nextType:"admin"}}}),reset:()=>e({type:"RESET"})}}}))(f);t.default=c},117:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(363)),o=s(n(912)),l=s(n(872)),a=s(n(902)),i=s(n(510)),u=s(n(86));function s(e){return e&&e.__esModule?e:{default:e}}const d=(e,t)=>{const{schemaUrl:n}=i.default.getSection("SilverStripe\\LinkField\\Controllers\\LinkFieldController").form.linkForm,r=l.default.parse(n),o=a.default.parse(r.query);o.typeKey=e;for(const e of["href","path","pathname"])r[e]=`${r[e]}/${t}`;return l.default.format({...r,search:a.default.stringify(o)})},f=e=>{let{typeTitle:t,typeKey:n,linkID:l=0,isOpen:a,onSuccess:i,onClosed:u}=e;if(!n)return!1;return r.default.createElement(o.default,{title:t,isOpen:a,schemaUrl:d(n,l),identifier:"Link.EditingLinkInfo",onSubmit:async(e,t,n)=>{const r=await n();if(!r.id.match(/\/schema\/linkfield\/([0-9]+)/)){const e=r.id.match(/\/linkForm\/([0-9]+)/),t=parseInt(e[1],10);i(t)}return Promise.resolve()},onClosed:u})};f.propTypes={typeTitle:u.default.string.isRequired,typeKey:u.default.string.isRequired,linkID:u.default.number,isOpen:u.default.bool.isRequired,onSuccess:u.default.func.isRequired,onClosed:u.default.func.isRequired};var c=f;t.default=c},809:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Component=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var a=o?Object.getOwnPropertyDescriptor(e,l):null;a&&(a.get||a.set)?Object.defineProperty(r,l,a):r[l]=e[l]}r.default=e,n&&n.set(e,r);return r}(n(363)),o=s(n(86)),l=s(n(820)),a=s(n(97)),i=s(n(686)),u=s(n(697));function s(e){return e&&e.__esModule?e:{default:e}}function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}const f=e=>{let{types:t,onModalSuccess:n,onModalClosed:o}=e;const[i,s]=(0,r.useState)(""),d=""!==i,f=(0,l.default)("link-picker","form-control"),c=Object.values(t);return r.default.createElement("div",{className:f},r.default.createElement(a.default,{types:c,onSelect:e=>{s(e)}}),d&&r.default.createElement(u.default,{types:t,typeKey:i,isOpen:d,onSuccess:e=>{s(""),n(e)},onClosed:()=>{"function"==typeof o&&o(),s("")}}))};t.Component=f,f.propTypes={types:o.default.objectOf(i.default).isRequired,onModalSuccess:o.default.func.isRequired,onModalClosed:o.default.func};var c=f;t.default=c},97:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(754)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var a=o?Object.getOwnPropertyDescriptor(e,l):null;a&&(a.get||a.set)?Object.defineProperty(r,l,a):r[l]=e[l]}r.default=e,n&&n.set(e,r);return r}(n(363)),l=s(n(86)),a=n(127),i=s(n(686));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function s(e){return e&&e.__esModule?e:{default:e}}const d=e=>{let{types:t,onSelect:n}=e;const[l,i]=(0,o.useState)(!1);return o.default.createElement(a.Dropdown,{isOpen:l,toggle:()=>i((e=>!e)),className:"link-picker__menu"},o.default.createElement(a.DropdownToggle,{className:"link-picker__menu-toggle font-icon-plus-1",caret:!0},r.default._t("LinkField.ADD_LINK","Add Link")),o.default.createElement(a.DropdownMenu,null,t.map((e=>{let{key:t,title:r}=e;return o.default.createElement(a.DropdownItem,{key:t,onClick:()=>n(t)},r)}))))};d.propTypes={types:l.default.arrayOf(i.default).isRequired,onSelect:l.default.func.isRequired};var f=d;t.default=f},734:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(754)),o=i(n(363)),l=i(n(86)),a=n(127);function i(e){return e&&e.__esModule?e:{default:e}}const u=e=>t=>{t.nativeEvent.stopImmediatePropagation(),t.preventDefault(),t.nativeEvent.preventDefault(),t.stopPropagation(),e&&e()},s=e=>{let{id:t,title:n,description:l,typeTitle:i,onClear:s,onClick:d}=e;return o.default.createElement("div",{className:classnames("link-picker__link","form-control")},o.default.createElement(a.Button,{className:"link-picker__button font-icon-link",color:"secondary",onClick:u(d)},o.default.createElement("div",{className:"link-picker__link-detail"},o.default.createElement("div",{className:"link-picker__title"},n),o.default.createElement("small",{className:"link-picker__type"},i,": ",o.default.createElement("span",{className:"link-picker__url"},l)))),o.default.createElement(a.Button,{className:"link-picker__clear",color:"link",onClick:u((()=>s(t)))},r.default._t("LinkField.CLEAR","Clear")))};s.propTypes={id:l.default.number.isRequired,title:l.default.string,description:l.default.string,typeTitle:l.default.string.isRequired,onClear:l.default.func.isRequired,onClick:l.default.func.isRequired};var d=s;t.default=d},697:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(363)),o=n(648),l=i(n(86)),a=i(n(686));function i(e){return e&&e.__esModule?e:{default:e}}const u=e=>{let{types:t,typeKey:n,linkID:l=0,isOpen:a,onSuccess:i,onClosed:u}=e;if(!n)return!1;const s=t.hasOwnProperty(n)?t[n]:{},d=s&&s.hasOwnProperty("handlerName")?s.handlerName:"FormBuilderModal",f=(0,o.loadComponent)(`LinkModal.${d}`);return r.default.createElement(f,{typeTitle:s.title||"",typeKey:n,linkID:l,isOpen:a,onSuccess:i,onClosed:u})};u.propTypes={types:l.default.objectOf(a.default).isRequired,typeKey:l.default.string.isRequired,linkID:l.default.number,isOpen:l.default.bool.isRequired,onSuccess:l.default.func.isRequired,onClosed:l.default.func.isRequired};var s=u;t.default=s},41:function(e,t,n){var r=i(n(311)),o=i(n(363)),l=i(n(691)),a=n(648);function i(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}r.default.entwine("ss",(e=>{e(".js-injector-boot .entwine-linkfield").entwine({Component:null,Root:null,onmatch(){const e=this.closest(".cms-content").attr("id"),t=e?{context:e}:{},n=this.data("schema-component"),r=(0,a.loadComponent)(n,t);this.setComponent(r),this.setRoot(l.default.createRoot(this[0])),this._super(),this.refresh()},refresh(){const e=this.getProps();this.getInputField().val(e.value);const t=this.getComponent();this.getRoot().render(o.default.createElement(t,u({},e,{noHolder:!0})))},handleChange(e){this.getInputField().data("value",e),this.refresh()},getProps(){return{value:this.getInputField().data("value"),onChange:this.handleChange.bind(this),isMulti:this.data("is-multi")??!1}},getInputField(){const t=this.data("field-id");return e(`#${t}`)},onunmatch(){const e=this.getRoot();e&&e.unmount()}})}))},689:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(648);const o={props(e){const{data:{error:t,readLinkTypes:n,loading:r}}=e,o=t&&t.graphQLErrors&&t.graphQLErrors.map((e=>e.message));return{loading:r,types:n?n.reduce(((e,t)=>({...e,[t.key]:t})),{}):{},graphQLErrors:o}}},{READ:l}=r.graphqlTemplates;var a={apolloConfig:o,templateName:l,pluralName:"LinkTypes",pagination:!1,params:{keys:"[ID]"},args:{root:{keys:"keys"}},fields:["key","title"]};t.default=a},686:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n(86))&&r.__esModule?r:{default:r};var l=o.default.shape({key:o.default.string.isRequired,title:o.default.string.isRequired});t.default=l},159:function(e){e.exports=Backend},510:function(e){e.exports=Config},42:function(e){e.exports=FieldHolder},912:function(e){e.exports=FormBuilderModal},648:function(e){e.exports=Injector},475:function(e){e.exports=InsertMediaModal},872:function(e){e.exports=NodeUrl},86:function(e){e.exports=PropTypes},363:function(e){e.exports=React},691:function(e){e.exports=ReactDomClient},624:function(e){e.exports=ReactRedux},127:function(e){e.exports=Reactstrap},827:function(e){e.exports=Redux},123:function(e){e.exports=ToastsActions},820:function(e){e.exports=classnames},754:function(e){e.exports=i18n},311:function(e){e.exports=jQuery},902:function(e){e.exports=qs}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var l=t[r]={exports:{}};return e[r](l,l.exports,n),l.exports}n(274),n(41)}();