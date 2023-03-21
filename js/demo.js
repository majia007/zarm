(self.webpackChunksite=self.webpackChunksite||[]).push([[9577],{33306:function(e,t,n){"use strict";var r=n(70885),a=n(2784),o=n(94184),c=n.n(o),l=n(66835),i=n(10095),s=n(30638),u=n(13741),m=n(34610),f=n(72972),d=n(29282),p=n(19727),g=n(45945),h=l.Z.createFromIconfont(d.assets.iconfont);t.Z=function(e){var t=(0,a.useState)(window.localStorage.locale||"zhCN"),n=(0,r.Z)(t,2),o=n[0],l=n[1],d=(0,a.useState)(window.localStorage.primaryColor||"#00bc70"),v=(0,r.Z)(d,2),y=v[0],E=v[1],P=(0,a.useState)(window.localStorage.theme||"light"),b=(0,r.Z)(P,2),Z=b[0],C=b[1],S=e.className,w=e.children,k=c()("app-container",S),O="enUS"===o?p.Z:g.Z;return(0,a.useEffect)((function(){window.scrollTo(0,0),f.Z.on(window,"message",(function(e){var t=e.data;t.locale&&l(t.locale)}))}),[y,Z]),a.createElement(i.ZP,{theme:Z,primaryColor:y,locale:O},a.createElement("div",{className:k},a.createElement("nav",null,a.createElement(s.Z,{trigger:"click",content:a.createElement("div",{className:"setting-container"},a.createElement("ul",{className:"colors"},["#00bc70","#1890ff","#f5222d","#fa541b","#13c2c2","#2f54ec","#712fd1"].map((function(e,t){return a.createElement("li",{key:+t,style:{backgroundColor:e},onClick:function(){E(e),window.localStorage.primaryColor=e}})}))),a.createElement("div",{className:"themes"},a.createElement(u.Z.Group,{compact:!0,type:"button",value:Z,onChange:function(e){C(e),window.localStorage.theme=e}},a.createElement(u.Z,{value:"light"},"默认主题"),a.createElement(u.Z,{value:"dark"},"暗黑主题"))))},a.createElement("span",{className:"setting"})),window.frames.length===window.parent.frames.length&&a.createElement(a.Fragment,null,a.createElement("div",{className:"lang"},a.createElement(u.Z.Group,{compact:!0,type:"button",value:o,onChange:function(e){l(e),window.localStorage.locale=e}},a.createElement(u.Z,{value:"zhCN"},"中文"),a.createElement(u.Z,{value:"enUS"},"EN"))),a.createElement("a",{className:"github",href:"https://github.com/ZhongAnTech/zarm"},a.createElement(h,{type:"github",size:"lg"})))),a.createElement(m.Z.Provider,{value:{locale:o,primaryColor:y,theme:Z}},w)))}},90582:function(e,t,n){"use strict";var r=n(2784),a=n(37940),o=n(42670),c=n(34610),l=n(834);t.Z=function(){var e=(0,r.useContext)(c.Z).locale;return r.createElement(a.Z,{locale:"zh-CN",messages:l.Z[e]},r.createElement("footer",null,r.createElement("div",{className:"copyright"},r.createElement(o.Z,{id:"app.demo.footer.copyright"}))))}},55713:function(e,t,n){"use strict";n(21926);var r=n(2784),a=n(89760),o=n(26213),c=n(42982),l=n(87462),i=n(33306),s=n(90582),u=n(4942),m=n(70885),f=n(19870),d=n(65235),p=n(34610),g=n(92826),h=n(51220),v=n(95149),y=n(21141),E=n(19727),P=n(45945),b=(n(22388),function(e){var t=e.location,o=e.globalContext,l=e.children,i="".concat(parseInt(1e9*Math.random(),10).toString(36)),s=l.match(/([^]*)\n?(```[^]+```)/),u=String(s[1]),m=(0,r.useRef)(),f=(0,r.useCallback)((function(){var e=s[2].match(/```(.*)\n?([^]+)```/);Promise.all([n.e(7503),n.e(9511)]).then(n.bind(n,59511)).then((function(e){var t={en_US:E.Z,zh_CN:P.Z};return{args:["context","React","ReactDOM","Zarm","GlobalContext","Locale","ZarmDesignIcons"],argv:[void 0,r,a,e,o,t,y]}})).then((function(t){var n=t.args,r=t.argv,a="ReactDOM.render(\n          <Zarm.ConfigProvider primaryColor={GlobalContext.primaryColor} theme={GlobalContext.theme} locale={Locale[GlobalContext.locale === 'zhCN' ? 'zh_CN' : 'en_US']}>\n            $1\n          </Zarm.ConfigProvider>,\n          document.getElementById('".concat(i,"'),\n        )"),o=e[2].replace(/import\s+\{\s+([\s\S]*)\s+\}\s+from\s+'react';/,"const { $1 } = React;").replace(/import\s+\{\s+([\s\S]*)\s+\}\s+from\s+'zarm';/,"const { $1 } = Zarm;").replace(/import\s+\{\s+([\s\S]*)\s+\}\s+from\s+'@zarm-design\/icons';/,"const { $1 } = ZarmDesignIcons;").replace(/import\s+([\s\S]*)\s+from\s+'@zarm-design\/icons';/,"const $1 = ZarmDesignIcons;").replace(/import\s+(.*)\s+from\s+'zarm\/lib\/config-provider\/locale\/(.*)';/g,"const $1 = Locale['$2'];").replace(/ReactDOM.render\(\s?([^]+?)(,\s?mountNode\s?\))/g,a).replace(/ReactDOM.render\(\s?([^]+?)(,([\r\n])(\s)*mountNode,(\s)*\))/g,a),l=(0,h.transform)(o,{presets:["es2015","react"],plugins:["proposal-class-properties"]}).code;n.push(l),(0,g.Z)(Function,(0,c.Z)(n)).apply(void 0,(0,c.Z)(r))})).catch((function(e){}))}),[i,s,o]);return(0,r.useEffect)((function(){var e=m.current;return f(),function(){e&&a.unmountComponentAtNode(e)}}),[f]),"/panel"===t.pathname?r.createElement("div",{id:i,ref:m}):r.createElement(v.Z,{title:u},r.createElement("div",{id:i,ref:m}))});function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var w=function(e){var t=(0,r.useContext)(p.Z),n=e.content,o=new Map,c=[];if("string"!=typeof n)return null;(0,r.useEffect)((function(){return function(){var e,t=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}(o);try{for(t.s();!(e=t.n()).done;){var n=(0,m.Z)(e.value,2),r=n[0],l=n[1],i=document.getElementById(r);c.push(i),i instanceof HTMLElement&&a.render(l,i)}}catch(e){t.e(e)}finally{t.f()}}(),function(){c.forEach((function(e){a.unmountComponentAtNode(e)}))}}));var l=(0,f.TU)(n.replace(/## 自定义 Iconfont 图标\s?([^]+)/g,"").replace(/## API\s?([^]+)/g,"").replace(/##\s?([^]+?)((?=##)|$)/g,(function(n,a){var c=parseInt(1e9*Math.random(),10).toString(36);return o.set(c,r.createElement(b,C(C({},e),{},{globalContext:t,location:(0,d.TH)()}),a)),"<div id=".concat(c,"></div>")})),{renderer:new f.TU.Renderer});return r.createElement("main",{dangerouslySetInnerHTML:{__html:l}})},k=n(15671),O=n(43144),T=n(60136),x=n(64575),N=n(61120),I=n(71150),M=n(83497);I.S1({dsn:"https://94149d955af0480aaef1edd42fa6c17e@ets.zhongan.io/8",release:"0.0.16",environment:"prd"});var A=function(e){(0,T.Z)(o,e);var t,n,a=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,N.Z)(t);if(n){var a=(0,N.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,x.Z)(this,e)});function o(e){var t;return(0,k.Z)(this,o),(t=a.call(this,e)).state={error:null,eventId:null},t}return(0,O.Z)(o,[{key:"componentDidCatch",value:function(e,t){var n=this;this.setState({error:e}),M.$e((function(r){r.setExtras(t);var a=M.Tb(e);n.setState({eventId:a})}))}},{key:"render",value:function(){var e=this.props.children,t=this.state,n=t.error,a=t.eventId;return n?r.createElement("button",{onClick:function(){return I.jp({eventId:a})}},"Report feedback"):e}}]),o}(r.Component),D=A,R=n(29282),U=n(49464),j=n(89028),z=n.n(j),B=n(52324),F=function(){return r.useEffect((function(){var e=B.Z.show({icon:"loading",duration:0}).close;return function(){null==e||e()}}),[]),null},$=function(e){var t={page:e.module},a=(0,U.Ho)(e.key);return e.style&&(t.style=function(){return n(75343)("./".concat(a,"Page"))}),z().Map({loader:t,render:function(t,n){return r.createElement(i.Z,{className:"".concat(e.key,"-page")},r.createElement(w,(0,l.Z)({content:t.page.default,component:e},n)),r.createElement(s.Z,null))},loading:function(){return r.createElement(F,null)}})},_=function(){var e=R.components.general,t=R.components.form,a=R.components.feedback,o=R.components.view,l=R.components.navigation,i=R.components.hooks,s=R.components.other;return r.createElement(D,null,r.createElement(r.Suspense,{fallback:r.createElement(F,null)},r.createElement(d.rs,null,r.createElement(d.AW,{exact:!0,path:"/",component:(0,r.lazy)((function(){return n.e(830).then(n.bind(n,20830))}))}),[].concat((0,c.Z)(e),(0,c.Z)(t),(0,c.Z)(a),(0,c.Z)(o),(0,c.Z)(l),(0,c.Z)(i),(0,c.Z)(s)).map((function(e,t){return r.createElement(d.AW,{key:+t,path:"/".concat(e.key),component:$(e)})})),r.createElement(d.AW,{component:(0,r.lazy)((function(){return n.e(4828).then(n.bind(n,24828))}))}))))};a.render(r.createElement(o.UT,null,r.createElement(_,null)),document.getElementById("app"))},19727:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r={locale:"en-US",ActionSheet:{cancelText:"Cancel"},Modal:{confirmText:"Ok",cancelText:"Cancel"},DatePicker:{cancelText:"Cancel",confirmText:"Ok",title:"please select"},DatePickerView:{year:"",month:"",week:"",weeks:["MON","TUE","WED","THU","FRI","SAT","SUN"],day:"",hour:"",minute:"",second:"",am:"AM",pm:"PM"},DateSelect:{placeholder:"please select"},Picker:{title:"please select",confirmText:"Ok",cancelText:"Cancel"},Cascader:{cancelText:"Cancel",confirmText:"Ok",title:"please select"},CascaderView:{unselectedTabText:"Select"},Pull:{pullText:"pull down to refresh",dropText:"release to refresh",loadingText:"loading",successText:"loaded successfully",failureText:"failed to load",completeText:"loading completed"},SearchBar:{placeholder:"Search",cancelText:"Cancel"},Select:{placeholder:"please select"},Keyboard:{confirmText:"Ok"},ImagePreview:{loadBefore:"load origin",loadStart:"loading",loadEnd:"loading completed"},Image:{loadFailed:"loading failed",loading:"loading"},Calendar:{weeks:["SUN","MON","TUE","WED","THU","FRI","SAT"],months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],yearMonthFormat:"MMM YYYY",weekStartsOn:"Sunday"}}},75343:function(e,t,n){var r={"./AffixPage":[23712,3712],"./BadgePage":[54468,4468],"./ButtonPage":[65452,5452],"./CalendarPage":[33484,3484],"./CarouselPage":[98172,8172],"./CellPage":[60035,35],"./CheckboxPage":[51939,1939],"./ConfigProviderPage":[11506,1506],"./FilePickerPage":[88217,8217],"./GridPage":[22704,2704],"./IconPage":[7971,7971],"./ImagePage":[43680,3680],"./ImagePreviewPage":[44417,4417],"./MaskPage":[24893,658],"./MessagePage":[23277,3277],"./ModalPage":[95197,5197],"./NoticeBarPage":[75978,9176],"./PanelPage":[47463,7463],"./PickerPage":[81708,1708],"./PopperPage":[76140,6140],"./PopupPage":[95356,5356],"./ProgressPage":[86597,6597],"./PullPage":[38446,8446],"./RadioPage":[49075,9075],"./SearchBarPage":[62314,2314],"./SkeletonPage":[62350,2350],"./TabsPage":[24830,4830],"./ToastPage":[25978,5978],"./TooltipPage":[97266,7266]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id=75343,e.exports=a}},function(e){e.O(0,[4871,7853,8494],(function(){return 55713,e(e.s=55713)})),e.O()}]);