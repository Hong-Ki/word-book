(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports={header:"layout_header__1sSBx",wrapper:"layout_wrapper__Gh19r",body:"layout_body__3pUNW",footer:"layout_footer__1ZPi4"}},18:function(e,t,n){e.exports={container:"word_container__14hbr",word:"word_word__1oIdx",mean:"word_mean__hZYdF",result:"word_result__Zdcg-"}},21:function(e,t,n){e.exports={wrapper:"modal_wrapper__MFLJt",title:"modal_title__2czFJ",box:"modal_box__45WXb",contents:"modal_contents__2KNUX",meansList:"modal_meansList__C5E-v",mean:"modal_mean__EMkld",button:"modal_button__Z3JfN",text:"modal_text__1Vovw",submit:"modal_submit__1yWPU",add:"modal_add__2ltqx",cancel:"modal_cancel__1yLS0"}},30:function(e,t,n){e.exports={wordContainerButton:"style_wordContainerButton__1jXes",button:"style_button__3WSSe",container:"style_container__24BwX",word:"style_word__259OL",mean:"style_mean__IykvA",result:"style_result__20gFM",wrapper:"style_wrapper__M0sMb",title:"style_title__1WGSW",box:"style_box__RD1Hh",contents:"style_contents__104Ue",meansList:"style_meansList__3CHdo",text:"style_text__ZOTRB",submit:"style_submit__32Lfd",add:"style_add__3TTNQ",cancel:"style_cancel__1psXg"}},31:function(e,t,n){e.exports={wordContainerButton:"button_wordContainerButton__2uaGW",button:"button_button__1jN1g"}},35:function(e,t,n){e.exports=n(53)},40:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"create",function(){return S}),n.d(a,"update",function(){return A}),n.d(a,"remove",function(){return N}),n.d(a,"loadWords",function(){return k}),n.d(a,"default",function(){return I});var o={};n.r(o),n.d(o,"change",function(){return x}),n.d(o,"default",function(){return D});var r={};n.r(r),n.d(r,"show",function(){return W}),n.d(r,"hide",function(){return B}),n.d(r,"change",function(){return J}),n.d(r,"addMean",function(){return H}),n.d(r,"removeMean",function(){return U}),n.d(r,"changeMean",function(){return P}),n.d(r,"default",function(){return G});var c,i,d=n(1),s=n.n(d),l=n(28),u=n.n(l),m=(n(40),n(3)),p=n(4),b=n(6),h=n(5),O=n(7),f=n(8),j=n.n(f),E=n(17),w=j.a.bind(E),_=function(){return s.a.createElement("div",{className:w("header")}," \ub2e8\uc5b4\uc7a5 ")},v=n(2),g=(n(16),n(12)),C=n(9),y=n(10),T=n(55),M=n(54),S=Object(T.a)("word/CREATE"),A=Object(T.a)("word/UPDATE"),N=Object(T.a)("word/REMOVE"),k=Object(T.a)("word/LOAD_WORDS"),L=Object(v.List)([Object(v.Map)({means:Object(v.List)(["T","E","S","T","1"]),word:"TEST_1",id:"1",isComplete:!1}),Object(v.Map)({means:Object(v.List)(["T","E","S","T","2"]),word:"TEST_2",id:2,isComplete:!0}),Object(v.Map)({means:Object(v.List)(["T","E","S","T","3"]),word:"TEST_3",id:3,isComplete:!1}),Object(v.Map)({means:Object(v.List)(["T","E","S","T","4"]),word:"TEST_4",id:4,isComplete:!1}),Object(v.Map)({means:Object(v.List)(["T","E","S","T","5"]),word:"TEST_5",id:5,isComplete:!1}),Object(v.Map)({means:Object(v.List)(["T","E","S","T","6"]),word:"TEST_6",id:6,isComplete:!1}),Object(v.Map)({means:Object(v.List)(["T","E","S","T","7"]),word:"TEST_7",id:7,isComplete:!1}),Object(v.Map)({means:Object(v.List)(["T","E","S","T","8"]),word:"TEST_8",id:8,isComplete:!1}),Object(v.Map)({means:Object(v.List)(["T","E","S","T","9"]),word:"TEST_9",id:9,isComplete:!1}),Object(v.Map)({means:Object(v.List)(["T","E","S","T","10"]),word:"TEST_10",id:10,isComplete:!1}),Object(v.Map)({means:Object(v.List)(["T","E","S","T","11"]),word:"TEST_11",id:11,isComplete:!1}),Object(v.Map)({means:Object(v.List)(["T","E","S","T","12"]),word:"TEST_12",id:12,isComplete:!1}),Object(v.Map)({means:Object(v.List)(["T","E","S","T","13"]),word:"TEST_13",id:13,isComplete:!1}),Object(v.Map)({means:Object(v.List)(["T","E","S","T","14"]),word:"TEST_14",id:14,isComplete:!1}),Object(v.Map)({means:Object(v.List)(["T","E","S","T","15"]),word:"TEST_15",id:15,isComplete:!1}),Object(v.Map)({means:Object(v.List)(["T","E","S","T","16"]),word:"TEST_16",id:16,isComplete:!1}),Object(v.Map)({means:Object(v.List)(["T","E","S","T","17"]),word:"TEST_17",id:17,isComplete:!1}),Object(v.Map)({means:Object(v.List)(["T","E","S","T","18"]),word:"TEST_18",id:18,isComplete:!1}),Object(v.Map)({means:Object(v.List)(["T","E","S","T","19"]),word:"TEST_19",id:19,isComplete:!1}),Object(v.Map)({means:Object(v.List)(["T","E","S","T","20"]),word:"TEST_20",id:20,isComplete:!1})]),I=Object(M.a)((c={},Object(y.a)(c,"word/CREATE",function(e,t){return e.push(Object(v.Map)(t.payload))}),Object(y.a)(c,"word/UPDATE",function(e,t){var n=e.findIndex(function(e){return e.get("id")===t.payload.id});if(!t.payload.isEqual(e.get(n).toJS())){var a=t.payload.toImmutable();return e.mergeIn([n],a)}}),Object(y.a)(c,"word/REMOVE",function(e,t){var n=e.findIndex(function(e){return e.get("id")===t.payload});return e.delete(n)}),Object(y.a)(c,"word/LOAD_WORDS",function(e,t){return Object(v.fromJS)(t.payload)}),c),L),x=Object(T.a)("test/CHANGE"),R=Object(v.Map)({answers:Object(v.List)([])}),D=Object(M.a)(Object(y.a)({},"test/CHANGE",function(e,t){var n=t.payload.answer;return e.set("answers",Object(v.List)(n.split(",").map(function(e){return e.toUpperCase().trim()}).sort()))}),R),W=Object(T.a)("modal/SHOW"),B=Object(T.a)("modal/HIDE"),J=Object(T.a)("modal/CHANGE"),H=Object(T.a)("modal/ADD_MEAN"),U=Object(T.a)("modal/REMOVE_MEAN"),P=Object(T.a)("modal/CHANGE_MEAN"),V=Object(v.Map)({visible:!1,mode:"",word:Object(v.Map)({id:null,word:"",means:Object(v.List)([]),wrongCounter:-1})}),G=Object(M.a)((i={},Object(y.a)(i,"modal/SHOW",function(e,t){var n=V.get("word"),a="add";return"undefined"!==typeof t.payload&&(n=t.payload,a="change"),e.set("visible",!0).set("word",n).set("mode",a)}),Object(y.a)(i,"modal/HIDE",function(e,t){return e.set("visible",!1).set("word",Object(v.Map)({id:null,word:"",means:Object(v.List)([]),wrongCounter:-1}))}),Object(y.a)(i,"modal/CHANGE",function(e,t){var n=e.getIn(["word"]),a=t.payload;if(n.get("word")!==a.word)return e.setIn(["word","word"],a.word)}),Object(y.a)(i,"modal/ADD_MEAN",function(e,t){var n=e.getIn(["word","means"]),a=Object(v.Map)({mean:t.payload,isEditMode:!1});return e.setIn(["word","means"],n.push(a))}),Object(y.a)(i,"modal/REMOVE_MEAN",function(e,t){var n=e.getIn(["word","means"]),a=t.payload;return e.setIn(["word","means"],n.delete(a))}),Object(y.a)(i,"modal/CHANGE_MEAN",function(e,t){var n=e.getIn(["word","means"]),a=t.payload,o=a.index,r=a.mean;return n.getIn([o,"isEditMode"])?e.setIn(["word","means",o],Object(v.Map)({isEditMode:!1,mean:r})):e.setIn(["word","means",o,"isEditMode"],!0)}),i),V),X=n(18),K=n.n(X),Z=j.a.bind(K.a),F=function(e){function t(){return Object(m.a)(this,t),Object(b.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.word;e.id;return s.a.createElement("div",{className:Z("word")},t)}}]),t}(d.Component),q=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(b.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).handleChange=function(e){(0,n.props.onChange)({answer:e.target.value})},n}return Object(O.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.keyword,n=(e.means,e.onTest),a=this.handleChange;return s.a.createElement("div",null,s.a.createElement("form",null,s.a.createElement("input",{value:t,placeholder:"\ub2e8\uc5b4\uc758 \ub73b\uc744 \uc785\ub825\ud558\uc138\uc694.",onChange:a})),s.a.createElement("button",{onClick:n},"CHECK"))}}]),t}(d.Component),z=j.a.bind(K.a),Q=function(e){function t(){return Object(m.a)(this,t),Object(b.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e,t=this.props,n=t.means,a=t.mode,o=t.onChange,r=t.onTest,c=t.onEdit;if("test"===a)e=s.a.createElement(q,{means:n,onChange:o,onTest:r});else{e=n.toJS()[0];for(var i=1;i<n.size;i++)e+=", "+n.toJS()[i]}return s.a.createElement("div",{onClick:c,className:z("mean")},e)}}]),t}(d.Component),Y=n(30),$=n.n(Y),ee=n(34),te=n(31),ne=j.a.bind(te),ae=function(e){var t=e.children,n=Object(ee.a)(e,["children"]);return s.a.createElement("div",{className:ne(n.className),onClick:n.onClick},t)},oe=n(32),re=n(13),ce=j.a.bind($.a),ie=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(b.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).handleSound=function(e){var t=n.props.word,a=new SpeechSynthesisUtterance(t);a.lang="en-us",a.volume=1,a.rate=1,a.pitch=1,speechSynthesis.speak(a)},n.handleRemove=function(e){var t=n.props,a=t.id;(0,t.onRemove)(a)},n}return Object(O.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.isComplete,e.onSound,e.id,this.handleSound),n=this.handleRemove;return s.a.createElement("div",{className:ce("result")},s.a.createElement(ae,{className:ce("wordContainerButton"),onClick:t},s.a.createElement(oe.a,null)),s.a.createElement(ae,{className:ce("wordContainerButton"),onClick:n},s.a.createElement(re.b,null)))}}]),t}(d.Component),de=j.a.bind(K.a),se=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(b.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).handleEdit=function(e){var t=n.props.onEdit;"DIV"!==e.target.tagName&&"SPAN"!==e.target.tagName||t(e.target.closest("div").id)},n}return Object(O.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.word,n=e.mode,a=(e.onEdit,e.onRemove),o=this.handleEdit;return s.a.createElement("div",{className:de("container"),id:t.get("id"),onClick:o},s.a.createElement(F,{word:t.get("word"),id:t.get("id")}),s.a.createElement(Q,{means:t.get("means"),mode:n}),s.a.createElement(ie,{id:t.get("id"),word:t.get("word"),onRemove:a,isComplete:t.get("isComplete")}))}}]),t}(d.Component),le=function(e){function t(){return Object(m.a)(this,t),Object(b.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.words,n=(e.search,e.mode),a=e.onEdit,o=e.onRemove,r=t.map(function(e){return s.a.createElement(se,{key:e.get("id"),word:e,mode:n,onEdit:a,onRemove:o})});return s.a.createElement("div",null,r)}}]),t}(d.Component),ue={means:[],word:"",id:"",isComplete:!1},me=function e(t){var n=this;for(var a in Object(m.a)(this,e),this.isEqual=function(e){var t=!0;for(var a in ue)if(!(t=t&&n[a].toString()===e[a].toString()))break;return t},this.fromModal=function(){return n.means=n.means.map(function(e){return e.mean}),n},this.toModal=function(){return Object(v.fromJS)(Object(v.Map)(n)).set("means",Object(v.List)(n.means.map(function(e){return Object(v.Map)({mean:e,isEditMod:!1})})))},this.toImmutable=function(){return Object(v.Map)({means:Object(v.List)(n.means),word:n.word,id:n.id,isComplete:n.isComplete})},ue)this[a]=t[a]||ue[a]},pe=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(b.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).handleEdit=function(e){var t=n.props,a=t.ModalActions,o=t.words,r=o.findIndex(function(t){return t.get("id")===e}),c=new me(o.get(r).toJS()).toModal();a.show(c)},n.handleRemove=function(e){var t=n.props,a=t.WordsActions,o=t.words.findIndex(function(t){return t.get("id")===e});o>=0&&a.remove(o)},n}return Object(O.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(e,t){e.words.toString()!==this.props.words.toString()&&localStorage.setItem("words",JSON.stringify(this.props.words))}},{key:"render",value:function(){var e=this.props,t=e.words,n=e.keyword,a=e.mode,o=this.handleEdit,r=this.handleRemove;return s.a.createElement(le,{words:t,search:n,mode:a,onEdit:o,onRemove:r})}}]),t}(d.Component),be=Object(g.b)(function(e){return{keyword:"",words:e.words,mode:""}},function(e){return{WordsActions:Object(C.a)(a,e),ModalActions:Object(C.a)(r,e),TestActions:Object(C.a)(o,e)}})(pe),he=n(33),Oe=n.n(he),fe=n(21),je=n.n(fe),Ee=j.a.bind(je.a),we=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(b.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){var t=Number(e.target.closest("div").getAttribute("index"));(0,n.props.onChangeMean)(t)},n.handleBlur=function(e){var t=e.target.value,a=Number(e.target.getAttribute("index")),o=n.props,r=o.onChangeMean,c=o.means,i=c.findIndex(function(e){return e.get("mean").trim()===t.trim()}),d=t;i>-1&&a!==i&&(alert("\uc774\ubbf8 \uc874\uc7ac\ud558\ub294 \uac12\uc785\ub2c8\ub2e4."),d=c.getIn([a,"mean"])),r(a,d)},n.handleKeyPress=function(e){13!==e.keyCode&&9!==e.keyCode&&"Enter"!==e.key||""===e.target.value||e.target.blur()},n.handleRemove=function(e){(0,n.props.onRemoveMean)(e.target.closest("div").getAttribute("index"))},n.meanRef=s.a.createRef(),n}return Object(O.a)(t,e),Object(p.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.means.toString()!==e.means.toString()}},{key:"componentDidUpdate",value:function(e,t,n){null!==this.meanRef.current&&this.meanRef.current.focus()}},{key:"render",value:function(){var e=this,t=this.props.means,n=this.handleChange,a=this.handleRemove,o=this.handleBlur,r=this.handleKeyPress,c=-1,i=t.map(function(t){return t.get("isEditMode")?s.a.createElement("div",{className:Ee("mean"),key:++c},s.a.createElement("div",{className:Ee("text")},s.a.createElement("input",{index:c,ref:e.meanRef,defaultValue:t.get("mean"),onBlur:o,onKeyPress:r})),s.a.createElement(re.c,{className:Ee("submit")})):s.a.createElement("div",{className:Ee("mean"),key:++c},s.a.createElement("div",{className:Ee("text")},t.get("mean")),s.a.createElement("div",{className:Ee("button"),index:c},s.a.createElement(re.c,{onClick:n}),s.a.createElement(re.b,{onClick:a})))});return s.a.createElement("div",{className:Ee("meansList")},i)}}]),t}(d.Component),_e=j.a.bind(je.a),ve=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(b.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).handleBlur=function(e){var t=n.props.onAddMean,a=e.target.value;""!==a&&null!==a&&"undefined"!==typeof a&&(e.target.value="",t(a))},n.handleKeyPress=function(e){13!==e.keyCode&&9!==e.keyCode||""===e.target.value||(e.preventDefault(),e.target.blur(),e.target.focus())},n.handleChange=function(e){(0,n.props.onChange)(e.target.value)},n}return Object(O.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.handleBlur,t=this.handleChange,n=this.handleKeyPress,a=this.props,o=a.modal,r=a.onChangeMean,c=a.onRemoveMean,i=a.onAdd,d=a.onCancel,l="\ub4f1\ub85d";return"change"===a.mode&&(l="\uc218\uc815"),s.a.createElement("div",{className:_e("wrapper")},s.a.createElement("div",{className:_e("box")},s.a.createElement("div",{className:_e("title")},s.a.createElement("p",null,"\ub2e8\uc5b4 ",l)),s.a.createElement("div",{className:_e("contents")},s.a.createElement("div",null,s.a.createElement("input",{placeholder:"\ub2e8\uc5b4",defaultValue:o.getIn(["word","word"]),onChange:t}),s.a.createElement(we,{means:o.getIn(["word","means"]),onChangeMean:r,onRemoveMean:c})),s.a.createElement("div",null,s.a.createElement("input",{placeholder:"Mean",onBlur:e,onKeyPress:n}))),s.a.createElement("div",{className:_e("add"),onClick:i},s.a.createElement("span",null,l)),s.a.createElement("div",{className:_e("cancel"),onClick:d},s.a.createElement("span",null,"\ucde8\uc18c"))))}}]),t}(d.Component),ge=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(b.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).handleMean={check:function(e){var t=n.props.modal.getIn(["word","means"]).findIndex(function(t){return t.get("mean")===e});return t<0||""===e||null===e||"undefined"===typeof e?-1:t},add:function(e){var t=n.props,a=t.ModalActions;t.modal;n.handleMean.check(e)<0&&a.addMean(e)},remove:function(e){var t=n.props,a=t.ModalActions,o=t.modal,r=Number(e);r<o.getIn(["word","means"]).size&&a.removeMean(r)},change:function(e,t){var a=n.props,o=a.ModalActions;a.modal.getIn(["word","means"]);o.changeMean({index:e,mean:t})}},n.handleWord={add:function(){var e=n.props,t=e.WordsActions,a=e.ModalActions,o=e.modal,r=Object(v.Map)({word:o.getIn(["word","word"]),means:o.getIn(["word","means"]).map(function(e){return e.get("mean")}),isComplete:!1,id:Oe.a.generate()});t.create(r),a.hide()},change:function(){var e=n.props,t=e.WordsActions,a=e.ModalActions,o=e.modal,r=new me(o.get("word").toJS()).fromModal();t.update(r),a.hide()}},n.handleCancel=function(){n.props.ModalActions.hide()},n.handleChange=function(e){var t={word:e,mean:""};n.props.ModalActions.change(t)},n}return Object(O.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.handleMean,t=this.handleChange,n=this.handleWord,a=this.handleCancel,o=this.props.modal;return s.a.createElement("div",null,o.get("visible")&&s.a.createElement(ve,{modal:o,mode:o.get("mode"),onChange:t,onAddMean:e.add,onChangeMean:e.change,onRemoveMean:e.remove,onAdd:n[o.get("mode")],onCancel:a}))}}]),t}(d.Component),Ce=Object(g.b)(function(e){return{modal:e.modal}},function(e){return{WordsActions:Object(C.a)(a,e),ModalActions:Object(C.a)(r,e)}})(ge),ye=j.a.bind(E),Te=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(b.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).handleShow=function(){n.props.ModalActions.show()},n}return Object(O.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.handleShow;return s.a.createElement("div",{className:ye("footer"),onClick:e},s.a.createElement(ae,null,s.a.createElement(re.a,null)))}}]),t}(d.Component),Me=Object(g.b)(null,function(e){return{ModalActions:Object(C.a)(r,e)}})(Te),Se=j.a.bind(E),Ae=function(e){function t(){return Object(m.a)(this,t),Object(b.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("words");null!==e&&"undefined"!==typeof e&&this.props.WordsActions.loadWords(JSON.parse(e))}},{key:"render",value:function(){return s.a.createElement("div",{className:Se("wrapper")},s.a.createElement(_,null),s.a.createElement("div",{className:Se("body")},s.a.createElement(be,null)),s.a.createElement(Me,null),s.a.createElement(Ce,null))}}]),t}(d.Component),Ne=Object(g.b)(function(e){return{}},function(e){return{WordsActions:Object(C.a)(a,e)}})(Ae);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ke=Object(C.b)({words:I,modal:G}),Le=Object(C.c)(ke,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());u.a.render(s.a.createElement(g.a,{store:Le},s.a.createElement(Ne,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.24e04803.chunk.js.map