(this.webpackJsonpexmoto=this.webpackJsonpexmoto||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports={Form:"Form_Form__2_yHn",FormColumn:"Form_FormColumn__3iy4X",FormBox:"Form_FormBox__2fh4_",FormBox__Error:"Form_FormBox__Error__2Jds_",FormBox__Error__Active:"Form_FormBox__Error__Active__lulHx",InvoiceForm:"Form_InvoiceForm__3CDN0"}},,,,,function(e,t,a){e.exports={"Form-Input":"Input_Form-Input__3gD4L","Auth-Form-Input":"Input_Auth-Form-Input__Gzryb"}},,,,,function(e,t,a){e.exports={Button:"Button_Button__15NJU",Button__Green:"Button_Button__Green__2CkE3","Button__Green--Active":"Button_Button__Green--Active__3p7_k",Button__GreenMarginTop:"Button_Button__GreenMarginTop__kQ1D3",Button__White:"Button_Button__White__3Ckme",Button__Red:"Button_Button__Red__3zAya",Button__Blue:"Button_Button__Blue__Xc0GF"}},,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/main-logo.a5230cd6.png"},,,function(e,t,a){e.exports=a.p+"static/media/checked.da188ccb.png"},function(e,t,a){e.exports=a(90)},,,,,function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/b2b.39db7eb1.jpg"},function(e,t,a){e.exports=a.p+"static/media/box.0e601bd8.jpg"},function(e,t,a){e.exports=a.p+"static/media/truck.9e2e6db0.jpg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(16),c=a.n(l),o=(a(41),a(10)),i=a(2),s=(a(42),a(31)),u=a.n(s).a.create({baseURL:"https://exmoto.herokuapp.com/api/v1"}),m=(a(60),a(61),a(62),a(32)),d=a.n(m),p=function(){return n.a.createElement(o.b,{to:"/"},n.a.createElement("div",{className:"Logo-box"},n.a.createElement("img",{src:d.a,alt:"ExMoto logo",className:"Logo-box__Image"})))},_=(a(68),function(){return n.a.createElement("div",{className:"Phone"},n.a.createElement("div",{className:"Phone__Text"},"\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b:"),n.a.createElement("ul",{className:"PhoneBox"},n.a.createElement("li",{className:"PhoneBox__Item"},"373 79 565004"),n.a.createElement("li",{className:"PhoneBox__Item"},"373 68 200884"),n.a.createElement("li",{className:"PhoneBox__Item"},"373 22 284761")))}),f=a(1),v=a(3),y=(a(69),a(70),function(e){return e.show?n.a.createElement("div",{className:"Backdrop",onClick:e.close}):null}),E=(a(71),function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(y,{show:e.show,close:e.close}),n.a.createElement("div",{className:"Modal",style:{transform:e.show?"translate(50%, 50%)":"translateY(0)",display:e.show?"block":"none"}},e.children,n.a.createElement("div",{className:"Close",onClick:e.close})))}),h=(a(72),function(e){var t=new Date(e);return"".concat(t.getDate(),"-").concat(t.getMonth()+1,"-").concat(t.getFullYear())}),b=function(e,t,a,r,n){return{elemType:e,disabled:n,value:"",elemConfig:{inpType:t,label:a,placeholder:r}}},g=function(e){return n.a.createElement("ul",{className:"OrderSummary__List"},n.a.createElement("li",{className:"OrderSummary__Header-Row"},n.a.createElement("div",{className:"OrderSummary__Header-Col"},"\u043d\u043e\u043c\u0435\u0440"),n.a.createElement("div",{className:"OrderSummary__Header-Col"},"\u043e\u0442\u043a\u0443\u0434\u0430"),n.a.createElement("div",{className:"OrderSummary__Header-Col"},"\u043a\u0443\u0434\u0430"),n.a.createElement("div",{className:"OrderSummary__Header-Col"},"\u043f\u0440\u0438\u0431\u044b\u0442\u0438\u0435"),n.a.createElement("div",{className:"OrderSummary__Header-Col"},"\u0441\u0442\u0430\u0442\u0443\u0441"),e.searchResult.recipient?n.a.createElement("div",{className:"OrderSummary__Header-Col"},"\u041f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044c"):null),n.a.createElement("li",{className:"OrderSummary__Body-Row"},n.a.createElement("div",{className:"OrderSummary__Body-Col OrderSummary__Body-Col--1"},e.searchResult.trackingNumber),n.a.createElement("div",{className:"OrderSummary__Body-Col"},e.searchResult.fromCountry,",",n.a.createElement("br",null),e.searchResult.fromCity),n.a.createElement("div",{className:"OrderSummary__Body-Col"},e.searchResult.toCountry,",",n.a.createElement("br",null)," ",e.searchResult.toCity),n.a.createElement("div",{className:"OrderSummary__Body-Col"},h(e.searchResult.estimatedDeliveryDate)),n.a.createElement("div",{className:"OrderSummary__Body-Col"},e.searchResult.delivered?"\u0414\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e":"\u0412 \u043f\u0443\u0442\u0438"),e.searchResult.recipient?n.a.createElement("div",{className:"OrderSummary__Body-Col"},e.searchResult.recipient):null))},N=a(9),x=a.n(N),F=a(19),S=a.n(F),C=function(e){return n.a.createElement("button",{type:"submit",className:[S.a.Button,S.a[e.btnStyle]].join(" "),onClick:e.handleClick},e.children)},O=function(e){return n.a.createElement("form",{id:e.id,className:e.column?[x.a.Form,x.a.FormColumn].join(" "):x.a.Form,onSubmit:function(t){return e.onSubmitHandler(t)}},n.a.createElement("div",{className:x.a[e.formStyle]},e.children,n.a.createElement("p",{className:e.isValid?x.a.FormBox__Error:[x.a.FormBox__Error,x.a.FormBox__Error__Active].join(" ")},e.errText)),n.a.createElement(C,{btnStyle:e.btnStyle},e.btnText))},B=a(14),j=a.n(B),T=a(34),k=a.n(T),w=Object(r.forwardRef)((function(e,t){var a=null;switch(e.elemtype){case"input":a=n.a.createElement(n.a.Fragment,null,n.a.createElement("label",{className:"InvoiceForm__Label"},e.elemConfig.label),n.a.createElement("input",{type:e.elemConfig.inpType,ref:t,name:e.name,className:j.a[e.inpStyle],placeholder:e.elemConfig.placeholder,onChange:e.addChangeHandle?function(t){return e.onChangeHandler(t)}:null,onBlur:e.addBlurHandle?function(t){return e.onBlurHandler(t)}:null,disabled:e.disabled,defaultValue:e.defaultValue,autoComplete:e.autoComplete}));break;case"input-mask":a=n.a.createElement(n.a.Fragment,null,n.a.createElement("label",{className:"InvoiceForm__Label"},e.elemConfig.label),n.a.createElement(k.a,{mask:"99-99-9999",maskChar:"_",name:e.name,alwaysShowMask:!0,type:e.elemConfig.inpType,className:j.a[e.inpStyle],onChange:e.addChangeHandle?function(t){return e.onChangeHandler(t)}:null,onBlur:e.addBlurHandle?function(t){return e.onBlurHandler(t)}:null,autoComplete:e.autoComplete,disabled:e.disabled,value:e.defaultValue}));break;case"select":a=n.a.createElement(n.a.Fragment,null,n.a.createElement("label",{className:"InvoiceForm__Label"},e.elemConfig.label),n.a.createElement("select",{name:e.name,className:j.a[e.inpStyle],onChange:e.addChangeHandle?e.onChangeHandler:null,value:e.defaultValue},e.elemConfig.options.map((function(e){return n.a.createElement("option",{key:e.value,value:e.value},e.displayValie)}))));break;default:a=n.a.createElement("input",null)}return n.a.createElement(n.a.Fragment,null,a)})),R=function(e){var t=Object(r.useState)({errorMessage:{emptyField:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435",noResult:"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e \u043d\u043e\u043c\u0435\u0440\u0443"},elemConfig:{inpType:"text",placeholder:"\u043f\u043e\u0438\u0441\u043a \u043d\u0430\u043a\u043b\u0430\u0434\u043d\u043e\u0439"},value:"",searchResult:{},showModal:!1,isValid:!0,displayErrorText:""}),a=Object(v.a)(t,2),l=a[0],c=a[1],o=Object(r.useRef)(null);return n.a.createElement("div",{className:e.class},n.a.createElement(O,{onSubmitHandler:function(e){return function(e){e.preventDefault();var t=l.isValid;""===l.value&&(t=!1,o.current.focus(),c((function(e){return Object(f.a)(Object(f.a)({},e),{},{showModal:e.showModal,isValid:!1,displayErrorText:l.errorMessage.emptyField})}))),t&&u.get("/deliveries/".concat(l.value)).then((function(e){console.log(e),c((function(t){return Object(f.a)(Object(f.a)({},t),{},{showModal:!0,isValid:!0,searchResult:Object(f.a)({},e.data.data.delivery)})}))})).catch((function(e){console.log(e),c((function(e){return Object(f.a)(Object(f.a)({},e),{},{showModal:!1,isValid:!1,displayErrorText:l.errorMessage.noResult})}))}))}(e)},isValid:l.isValid,errText:l.displayErrorText,btnText:"\u043f\u043e\u0438\u0441\u043a",btnStyle:"Button__Green",formStyle:"FormBox"},n.a.createElement(w,{elemtype:"input",elemConfig:l.elemConfig,inpStyle:"Form-Input",ref:o,onChangeHandler:function(e){return function(e){var t=e.target.value,a=""!==t.trim()&&!0;c((function(e){return Object(f.a)(Object(f.a)({},e),{},{isValid:a,value:t})}))}(e)},onBlurHandler:function(){o.current.focus(),c((function(e){return Object(f.a)(Object(f.a)({},e),{},{showModal:!1,isValid:!0})}))},addChangeHandle:!0,addBlurHandle:!0})),n.a.createElement(E,{show:l.showModal,close:function(){c((function(e){return Object(f.a)(Object(f.a)({},e),{},{showModal:!1,isValid:!0})}))}},n.a.createElement(g,{searchResult:l.searchResult})))},H=function(){return n.a.createElement("header",{className:"Toolbar"},n.a.createElement("div",{className:"Container"},n.a.createElement("div",{className:"Toolbar-Box"},n.a.createElement(p,null),n.a.createElement(R,null),n.a.createElement(C,{btnStyle:"Button__Green"},"\u041f\u0420\u0410\u0419\u0421-\u041b\u0418\u0421\u0422"),n.a.createElement(_,null))))},I=(a(74),function(){return n.a.createElement("footer",{className:"Footer"},n.a.createElement("div",{className:"Container"},n.a.createElement("div",{className:"Footer-Box"},n.a.createElement("div",{className:"Footer-Box__Info"},n.a.createElement("h3",{className:"Footer__Header"},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b:"),n.a.createElement("div",{className:"Footer-Box__Info-Box"},n.a.createElement("ul",{className:"Footer-Box__List"},n.a.createElement("li",{className:"Footer-Box__List"},n.a.createElement("a",{className:"Footer-Box__Link",href:"tel:"},"373 79 565004")),n.a.createElement("li",{className:"Footer-Box__List"},n.a.createElement("a",{className:"Footer-Box__Link",href:"tel:"},"373 68 200884")),n.a.createElement("li",{className:"Footer-Box__List"},n.a.createElement("a",{className:"Footer-Box__Link",href:"tel:"},"373 22 284761"))),n.a.createElement("ul",{className:"Footer-Box__List Footer-Box__List--2 "},n.a.createElement("li",{className:"Footer-Box__List"},n.a.createElement("a",{className:"Footer-Box__Link",href:"tel:"},"kiv@exmoto.com")),n.a.createElement("li",{className:"Footer-Box__List"},n.a.createElement("a",{className:"Footer-Box__Link",href:"tel:"},"International Department ExMoto",n.a.createElement("br",null),"Moldova, Kishinev."))))),n.a.createElement("div",{className:"Footer-Box__Rates"},n.a.createElement(o.b,{to:"/price"},n.a.createElement(C,{btnStyle:"Button__White"},"\u041f\u0420\u0410\u0419\u0421-\u041b\u0418\u0421\u0422"))))))}),D=(a(75),a(76)),V=a(77),A=a(78),P=(a(79),function(e){return console.log(10*e.contWidth),n.a.createElement("div",{className:"SliderImage",style:{backgroundImage:"linear-gradient(105deg, rgba(255,255,255,0.9) \n         ".concat("45%",", rgba(255,255,255, 1) 50%, transparent 10%), url(",e.bgimage,")")}},n.a.createElement("div",{className:"SliderImage__Box"},n.a.createElement("h2",{className:"SliderImage__Heading"},e.heading),n.a.createElement("p",{className:"SliderImage__Paragraph"},e.text)))}),L=(a(80),function(e){for(var t=[],a=function(a){t.push(n.a.createElement("div",{className:e.active[a]?"Dots-Box__Dot Dots-Box__Dot--Active":"Dots-Box__Dot",onClick:function(){return e.changeSlide(a)},key:"dot-".concat(a)}))},r=0;r<e.dots;r++)a(r);return n.a.createElement("div",{className:"Dots-Box"},[].concat(t))}),M=function(){var e=Object(r.useState)({pSlide:0}),t=Object(v.a)(e,2),a=t[0],l=t[1],c=Object(r.useState)({curSlide:0,trans:!0}),o=Object(v.a)(c,2),i=o[0],s=o[1],u=Object(r.useState)(),m=Object(v.a)(u,2),d=m[0],p=m[1],_=Object(r.useState)({dotsCount:[1,2,3],dotStatus:{0:!0}}),f=Object(v.a)(_,2),y=f[0],E=f[1],h=Object(r.useState)([{id:"slide1",heading:"\u041a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u0430\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430",text:" \u0432 \u043b\u044e\u0431\u043e\u0439 \u043d\u0430\u0441\u0435\u043b\u0451\u043d\u043d\u044b\u0439 \u043f\u0443\u043d\u043a\u0442 \u0421\u041d\u0413 \u0438 \u0434\u0430\u043b\u044c\u043d\u0435\u0433\u043e \u0437\u0430\u0440\u0443\u0431\u0435\u0436\u044c\u044f",img:V},{id:"slide2",heading:"\u043e\u0442 \u0434\u0432\u0435\u0440\u0438 \u0434\u043e \u0434\u0432\u0435\u0440\u0438",text:"\u043f\u043e\u043b\u043d\u044b\u0439 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0441 \u0443\u0441\u043b\u0443\u0433 \u043f\u043e \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0435 \u043f\u043e\u0447\u0442\u043e\u0432\u044b\u0445 \u0438 \u0433\u0440\u0443\u0437\u043e\u0432\u044b\u0445 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0439",img:D},{id:"slide3",heading:"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0438 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e",text:"\u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u0441\u0430\u043c\u044b\u043c \u0432\u044b\u0441\u043e\u043a\u0438\u043c \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f\u043c",img:A}]),b=Object(v.a)(h,1)[0],g=Object(r.useRef)(null),N=Object(r.useCallback)((function(e){var t=0,a=e,r={};switch(!0){case 3===i.curSlide&&0===a:r[e]=!0,a=4,t=4*-d;break;case void 0!==y.dotsCount[e]:r[e]=!0,t=-d*e;break;default:r[e]=!0,t=0}s({curSlide:a,trans:!0}),E((function(e){return{dotsCount:e.dotsCount,dotStatus:r}})),l({pSlide:t})}),[i,d,y.dotsCount]);Object(r.useEffect)((function(){p(g.current.offsetWidth/10)}),[N]);var x=b.map((function(e){return n.a.createElement(P,{key:e.id,bgimage:e.img,heading:e.heading,text:e.text})}));return n.a.createElement("div",{className:"Container"},n.a.createElement("div",{className:"Slider"},n.a.createElement("div",{className:"Slider-Box",onTransitionEnd:function(){i.curSlide===g.current.children.length-1&&(s({curSlide:0,trans:!1}),l({pSlide:0}))},ref:g,style:{transform:"translateX(".concat(a.pSlide,"rem)"),transition:i.trans?"all 1s":"none"}},x,n.a.createElement(P,{key:"clone-slide",bgimage:b[0].img,heading:b[0].heading,text:b[0].text,contWidth:d})),n.a.createElement(L,{active:y.dotStatus,dots:y.dotsCount.length,changeSlide:function(e){return N(e)}})))},G=(a(81),a(82),function(e){return n.a.createElement("div",{className:"Partner"},n.a.createElement("h4",{className:"Partner__Header"},e.name))}),U=function(e){var t=Object(r.useState)(["FARMAPRIM","BUCURIA","MAXIMUM","DAAC HERMES","JLC","LAPMOL"]),a=Object(v.a)(t,1)[0].map((function(e){return n.a.createElement(G,{key:e,name:e})}));return n.a.createElement("div",{className:"Container"},n.a.createElement("div",{className:"Partners"},n.a.createElement("h3",{className:"Partners__Header"},"\u041d\u0410\u0428\u0418 \u041f\u0410\u0420\u0422\u041d\u0401\u0420\u042b"),n.a.createElement("div",{className:"Partners-Box"},a)))},q=(a(83),a(84),function(e){var t=Object.keys(e.country.cityData).map((function(t){return n.a.createElement("li",{className:"Table__Body-Row",key:t},n.a.createElement("div",{className:"Table__Body-Col Table__Body-Col--1"},"".concat(e.country.cityData[t].city)),e.country.cityData[t].priceNoNds?n.a.createElement("div",{className:"Table__Body-Col"},"".concat(e.country.cityData[t].priceNoNds," ").concat(e.country.currency)," "):null,n.a.createElement("div",{className:"Table__Body-Col"},"".concat(e.country.cityData[t].priceNds," ").concat(e.country.currency)),n.a.createElement("div",{className:"Table__Body-Col"},"".concat(e.country.cityData[t].priceplus," ").concat(e.country.currency)),n.a.createElement("div",{className:"Table__Body-Col"},e.country.cityData[t].delivery))}));return n.a.createElement("ul",{className:"Table__List"},n.a.createElement("li",{className:"Table__Header-Row"},n.a.createElement("div",{className:"Table__Header-Col Table__Header-Col--1"},e.country.type?e.country.type:"\u0413\u043e\u0440\u043e\u0434"),e.country.addNds?n.a.createElement("div",{className:"Table__Header-Col"},"\u0426\u0435\u043d\u0430 \u0434\u043e ".concat(e.country.weight," "),n.a.createElement("br",null),"(\u0411\u0435\u0437 \u041d\u0414\u0421)"):null,n.a.createElement("div",{className:"Table__Header-Col"},"\u0426\u0435\u043d\u0430 \u0434\u043e ".concat(e.country.weight)," ",n.a.createElement("br",null),"(C \u041d\u0414\u0421)"),n.a.createElement("div",{className:"Table__Header-Col"},"\u0426\u0435\u043d\u0430  ".concat(e.country.weight," + ").concat(e.country.weightplus)," "),n.a.createElement("div",{className:"Table__Header-Col"},"\u0421\u0440\u043e\u043a\u0438 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438")),t)}),z=function(){var e=Object(r.useState)({moldova:{country:"\u041c\u043e\u043b\u0434\u043e\u0432\u0430",cityData:{kishinev:{city:"\u041a\u0438\u0448\u0438\u043d\u0451\u0432",priceNds:"36",priceNoNds:"",priceplus:"6",delivery:"\u0412 \u0434\u0435\u043d\u044c \u043f\u0440\u0438\u0451\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430"},other:{city:"\u0414\u0440\u0443\u0433\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430",priceNds:"90",priceNoNds:"",priceplus:"12",delivery:"1/2 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u043d\u044f"}},currency:"\u041b\u0435\u0439",weight:"2\u043a\u0433",weightplus:"1",addNds:!1},romania:{country:"\u0420\u0443\u043c\u044b\u043d\u0438\u044f",cityData:{buchuresti:{city:"\u0411\u0443\u0445\u0430\u0440\u0435\u0441\u0442",priceNds:"480",priceNoNds:"",priceplus:"50",delivery:"1/3 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u043d\u044f"},other:{city:"\u0414\u0440\u0443\u0433\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430",priceNds:"540",priceNoNds:"",priceplus:"50",delivery:"2/5 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u043d\u044f"}},currency:"\u041b\u0435\u0439",weight:"0,5\u043a\u0433",weightplus:"0,5\u043a\u0433",addNds:!1},ukraine:{country:"\u0423\u043a\u0440\u0430\u0438\u043d\u0430",cityData:{kiev:{city:"\u041a\u0438\u0435\u0432",priceNds:"300",priceNoNds:"250",priceplus:"18",delivery:"1/3 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u043d\u044f"},bigcity:{city:"\u041a\u0440\u0443\u043f\u043d\u044b\u0435 \u0433\u043e\u0440\u043e\u0434\u0430",priceNds:"360",priceNoNds:"300",priceplus:"18",delivery:"2/3 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u043d\u044f"},region:{city:"\u041e\u0431\u043b\u0430\u0441\u0442\u0438",priceNoNds:"350",priceNds:"420",priceplus:"18",delivery:"2/4 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u043d\u044f"}},currency:"\u041b\u0435\u0439",weight:"0,5\u043a\u0433",weightplus:"0,5\u043a\u0433",addNds:!0},russia:{country:"\u0420\u043e\u0441\u0441\u0438\u044f",cityData:{moscow:{city:"\u041c\u043e\u0441\u043a\u0432\u0430",priceNoNds:"350",priceNds:"420",priceplus:"50",delivery:"3/5 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u043d\u044f"},bigcity:{city:"\u041a\u0440\u0443\u043f\u043d\u044b\u0435 \u0433\u043e\u0440\u043e\u0434\u0430",priceNoNds:"400",priceNds:"480",priceplus:"50",delivery:"4/7 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u043d\u044f"},region:{city:"\u041e\u0431\u043b\u0430\u0441\u0442\u0438",priceNoNds:"560",priceNds:"675",priceplus:"50",delivery:"5/10 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u043d\u044f"}},currency:"\u041b\u0435\u0439",weight:"0,5\u043a\u0433",weightplus:"0,5\u043a\u0433",addNds:!0},belarussia:{country:"\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u044c",cityData:{minsk:{city:"\u041c\u0438\u043d\u0441\u043a",priceNoNds:"500",priceNds:"600",priceplus:"50",delivery:"2/3"},bigcity:{city:"\u0414\u0440\u0443\u0433\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430",priceNoNds:"600",priceNds:"720",priceplus:"50",delivery:"3/5 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u043d\u044f"}},currency:"\u041b\u0435\u0439",weight:"0,5\u043a\u0433",weightplus:"0,5\u043a\u0433",addNds:!0},pribaltyka:{country:"\u041f\u0440\u0438\u0431\u0430\u043b\u0442\u0438\u043a\u0430",cityData:{latvia:{city:"\u041b\u0430\u0442\u0432\u0438\u044f",priceNoNds:"30",priceNds:"36",priceplus:"4/5",delivery:"4/6 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u043d\u044f"},litva:{city:"\u041b\u0438\u0442\u0432\u0430",priceNoNds:"30",priceNds:"36",priceplus:"4/5",delivery:"4/6 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u043d\u044f"},estony:{city:"\u042d\u0441\u0442\u043e\u043d\u0438\u044f",priceNoNds:"30",priceNds:"36",priceplus:"4/5",delivery:"4/6 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u043d\u044f"}},currency:"$",weight:"0,5\u043a\u0433",weightplus:"0,5\u043a\u0433",addNds:!0,type:"\u0421\u0442\u0440\u0430\u043d\u0430"},asia:{country:"\u0421\u0440\u0435\u0434\u043d\u044f\u044f \u0438 \u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u0410\u0437\u0438\u044f",type:"\u0421\u0442\u0440\u0430\u043d\u0430",cityData:{kazah:{city:"\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d",priceNoNds:"30",priceNds:"36",priceplus:"6/8",delivery:"4/6 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u043d\u044f"},kirgiz:{city:"\u041a\u0438\u0440\u0433\u0438\u0437\u0438\u044f\u0442\u0432\u0430",priceNoNds:"60",priceNds:"72",priceplus:"8/10",delivery:"\u0423\u0442\u043e\u0447\u043d\u044f\u0442\u044c \u0443 \u0434\u0438\u0441\u043f\u0435\u0442\u0447\u0435\u0440\u0430"},tadjik:{city:"\u0422\u0430\u0434\u0436\u0438\u043a\u0438\u0441\u0442\u0430\u043d",priceNoNds:"67",priceNds:"81",priceplus:"13/16",delivery:"\u0423\u0442\u043e\u0447\u043d\u044f\u0442\u044c \u0443 \u0434\u0438\u0441\u043f\u0435\u0442\u0447\u0435\u0440\u0430"},uzbek:{city:"\u0423\u0437\u0431\u0435\u043a\u0438\u0441\u0442\u0430\u043d",priceNoNds:"67",priceNds:"81",priceplus:"13/16",delivery:"\u0423\u0442\u043e\u0447\u043d\u044f\u0442\u044c \u0443 \u0434\u0438\u0441\u043f\u0435\u0442\u0447\u0435\u0440\u0430"},turkmek:{city:"\u0422\u0443\u0440\u043a\u043c\u0435\u043d\u0438\u0441\u0442\u0430\u043d",priceNoNds:"67",priceNds:"81",priceplus:"13/16",delivery:"\u0423\u0442\u043e\u0447\u043d\u044f\u0442\u044c \u0443 \u0434\u0438\u0441\u043f\u0435\u0442\u0447\u0435\u0440\u0430"}},currency:"$",weight:"0,5\u043a\u0433",weightplus:"0,5\u043a\u0433",addNds:!0}}),t=Object(v.a)(e,1)[0],a=Object.keys(t).map((function(e){return n.a.createElement("div",{className:"PricePage-Box__Item",key:e},n.a.createElement("h2",{className:"PricePage-Box__Header"},t[e].country),n.a.createElement("div",{className:"PricePage-Box__Block"},n.a.createElement(q,{country:t[e],key:!0})))}));return Object(r.useEffect)((function(){window.scrollTo(0,0)}),[]),n.a.createElement("div",{className:"PricePage"},n.a.createElement("h1",{className:"PricePage__Heading"},"\u041f\u0420\u0410\u0419\u0421-\u041b\u0418\u0421\u0422"),n.a.createElement("div",{className:"PricePage-Box"},a))},W=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(H,null),n.a.createElement("main",{className:"Main"},n.a.createElement(i.c,null,n.a.createElement(i.a,{path:"/price"},n.a.createElement(z,null)),n.a.createElement(i.a,{path:"/"},n.a.createElement(M,null),n.a.createElement(U,null)))),n.a.createElement(I,null))},J=a(20),X=(a(85),a(35)),Y=a.n(X),$=(a(86),function(e){return n.a.createElement("div",{className:"Popup"},n.a.createElement("p",{className:"Popup__Text"},"\u041d\u0430\u043a\u043b\u0430\u0434\u043d\u0430\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430"),n.a.createElement("img",{src:Y.a,className:"Popup__Icon",alt:"checked"}))}),K=(a(87),function(e){return n.a.createElement("div",{className:"lds-spinner"},n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null))}),Q=(a(88),function(e){var t=Object.keys(e.formState.invoiceForm).map((function(t){return n.a.createElement(w,{key:t,elemtype:e.formState.invoiceForm[t].elemType,elemConfig:e.formState.invoiceForm[t].elemConfig,onChangeHandler:function(a){return e.changeInputHandler(a,t)},addChangeHandle:!0,addBlurHandle:!1,inpStyle:"Form-Input",disabled:e.formState.invoiceForm[t].disabled,defaultValue:e.formState.invoiceForm[t].value})}));return n.a.createElement("div",{className:"InvoiceForm-Box",style:{display:e.showForm?"block":"none"}},n.a.createElement("div",{className:"InvoiceForm__Close",onClick:e.closeForm,title:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),n.a.createElement("h2",{className:"InvoiceForm-Box__Header"},e.heading),n.a.createElement(O,{id:"addForm",onSubmitHandler:function(t){return e.formSubmit(t)},isValid:e.isValid,btnText:e.btnText,btnStyle:"Button__GreenMarginTop",btnCloseStyle:"Button__Blue",formStyle:"InvoiceForm",column:!0,completeText:"\u041d\u0430\u043a\u043b\u0430\u0434\u043d\u0430\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430",disabled:e.formState.invoiceForm.disabled,errText:e.errorText},t))}),Z=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(Q,{formState:e.formState,showForm:e.showForm,formSubmit:function(t){return e.formSubmit(t)},changeInputHandler:e.changeInputHandler,isValid:e.formState.isValid,errorText:e.formState.displayErrorText,closeForm:e.closeForm,heading:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u0430\u043a\u043b\u0430\u0434\u043d\u0443\u044e",btnText:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}))},ee=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(Q,{formState:e.formState,showForm:e.showForm,formSubmit:function(t){return e.formSubmit(t)},changeInputHandler:e.changeInputHandler,isValid:e.formState.isValid,errorText:e.formState.displayErrorText,closeForm:e.closeForm,heading:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0430\u043a\u043b\u0430\u0434\u043d\u0443\u044e",btnText:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"}))},te=n.a.createContext({isAuth:!1,login:function(){}}),ae=function(e){var t=Object(r.useState)(!1),a=Object(v.a)(t,2),l=a[0],c=a[1];return n.a.createElement(te.Provider,{value:{login:function(){var e=sessionStorage.getItem("access__token");c(e)},isAuth:l}},e.children)},re=function(e){var t=Object(r.useState)({invoiceForm:{trackingNumber:b("input","text","\u041d\u043e\u043c\u0435\u0440 \u043d\u0430\u043a\u043b\u0430\u0434\u043d\u043e\u0439","\u041f\u0440\u0438\u043c\u0435\u0440: 6789487"),fromCountry:b("input","text","\u0418\u0437 \u043a\u0430\u043a\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u044b \u043f\u043e\u0441\u044b\u043b\u043a\u0430?","\u041f\u0440\u0438\u043c\u0435\u0440: \u041c\u043e\u043b\u0434\u043e\u0432\u0430"),fromCity:b("input","text","\u0418\u0437 \u043a\u0430\u043a\u043e\u0433\u043e \u0433\u043e\u0440\u043e\u0434\u0430 \u043f\u043e\u0441\u044b\u043b\u043a\u0430?","\u041f\u0440\u0438\u043c\u0435\u0440:  \u041a\u0438\u0448\u0438\u043d\u0435\u0432"),toCountry:b("input","text","\u0421\u0442\u0440\u0430\u043d\u0430 \u043e\u043f\u0442\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u043e\u0441\u044b\u043b\u043a\u0438","\u041f\u0440\u0438\u043c\u0435\u0440: \u0420\u0443\u043c\u044b\u043d\u0438\u044f"),toCity:b("input","text","\u041f\u0440\u0438\u043c\u0435\u0440: \u0411\u0443\u0445\u0430\u0440\u0435\u0441\u0442","\u0413\u043e\u0440\u043e\u0434 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u043e\u0441\u044b\u043b\u043a\u0438"),estimatedDeliveryDate:{elemType:"input-mask",elemConfig:{inpType:"text",label:"\u041f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0433\u0430\u0435\u043c\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438. \u0414\u0414/\u041c\u041c/\u0413\u0413\u0413\u0413"},validation:!0,value:""},delivered:{elemType:"select",elemConfig:{options:[{value:"",displayValie:"-"},{value:!1,displayValie:"\u0412 \u041f\u0443\u0442\u0438"},{value:!0,displayValie:"\u0414\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e"}],label:"\u0421\u0442\u0430\u0442\u0443\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"},validation:!0,value:""},recipient:{elemType:"input",elemConfig:{inpType:"text",placeholder:"\u041f\u0440\u0438\u043c\u0435\u0440: \u0412\u0430\u043b\u0435\u0440\u0430 \u041c\u043e\u043b\u0434\u0430\u0432\u0441\u043a\u0438\u0439",label:"\u041f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044c"},disabled:!0,value:""}},errorText:{emptyFieldsError:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u0443\u0441\u0442\u044b\u0435 \u043f\u043e\u043b\u044f",notUniqueId:"\u041d\u0430\u043a\u043b\u0430\u0434\u043d\u0430\u044f \u0441 \u0442\u0430\u043a\u0438\u043c \u043d\u043e\u043c\u0435\u0440\u043e\u043c \u0443\u0436\u0435 \u0435\u0441\u0442\u044c",errorDate:"\u0414\u0430\u0442\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0440\u0430\u043d\u044c\u0448\u0435 \u0442\u0435\u043a\u0443\u0449\u0435\u0439"},isValid:!0,showAddForm:!1,showUpdateForm:!1,submitted:!1,displayErrorText:""}),a=Object(v.a)(t,2),l=a[0],c=a[1],o=Object(r.useState)({elemType:"input",elemConfig:{inpType:"text",placeholder:""},errorText:{emptyFieldsError:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u0443\u0441\u0442\u043e\u0435 \u043f\u043e\u043b\u0435",noId:"\u0421 \u0442\u0430\u043a\u0438\u043c \u043d\u043e\u043c\u0435\u0440\u043e\u043c \u043d\u0435\u0442 \u043d\u0430\u043a\u043b\u0430\u0434\u043d\u043e\u0439"},displaySearchErrorText:"",searchResult:{},showSearchResults:!1,validResults:!0,showSpinner:!1,searchValue:""}),i=Object(v.a)(o,2),s=i[0],m=i[1],d=Object(r.useRef)(null),p=Object(r.useContext)(te),_=Object(r.useCallback)((function(){for(var e=!0,t=Object.keys(l.invoiceForm),a=0,r=t;a<r.length;a++){var n=r[a];if("recipient"!==n||!0!==l.invoiceForm.recipient.disabled){if(""===l.invoiceForm[n].value){e=!1;break}e=!0}}return{isFormValid:e,cloneinvoiceForm:t}}),[l.invoiceForm]),y=Object(r.useCallback)((function(e){e.preventDefault();var t=_(),a=t.isFormValid,r=t.cloneinvoiceForm;if(a){var n,o,i={},s="",m=Object(J.a)(r);try{for(m.s();!(o=m.n()).done;){var d=o.value;i[d]=l.invoiceForm[d].value,"estimatedDeliveryDate"===d&&(s=l.invoiceForm[d].value.split("-").reverse().join("-"),n=new Date(s),i[d]=n.getTime())}}catch(p){m.e(p)}finally{m.f()}u.post("/deliveries",i).then((function(e){console.log(e),c((function(e){return Object(f.a)(Object(f.a)({},e),{},{submitted:!0})}))})).catch((function(e){var t;-1!==e.response.data.message.indexOf("Estimated")&&(t=l.errorText.errorDate),-1!==e.response.data.message.indexOf("duplicate")&&(t=l.errorText.notUniqueId),c((function(e){return Object(f.a)(Object(f.a)({},e),{},{submitted:!1,isValid:!1,displayErrorText:t})}))}))}c((function(e){return Object(f.a)(Object(f.a)({},e),{},{isValid:a,displayErrorText:l.errorText.emptyFieldsError})}))}),[_,l.errorText.emptyFieldsError,l.errorText.errorDate,l.errorText.notUniqueId,l.invoiceForm]),g=function(e,t){var a=Object(f.a)({},l.invoiceForm),r=e.target.value;a[t].value=r,"true"===a[t].value&&(a.recipient.disabled=!1),"false"===a[t].value&&(a.recipient.disabled=!0),c((function(e){return Object(f.a)(Object(f.a)({},e),{},{invoiceForm:Object(f.a)({},a)})}))};console.log(l);var N=function(e){e.preventDefault();var t=_(),a=t.isFormValid,r=t.cloneinvoiceForm;if(c((function(e){return Object(f.a)(Object(f.a)({},e),{},{isValid:a,displayErrorText:l.errorText.emptyFieldsError})})),a){var n,o={},i=Object(J.a)(r);try{for(i.s();!(n=i.n()).done;){var m=n.value;l.invoiceForm[m].value!==s.searchResult[m]&&(o[m]=l.invoiceForm[m].value)}}catch(p){i.e(p)}finally{i.f()}if(void 0!==o.estimatedDeliveryDate){var d=o.estimatedDeliveryDate;o.estimatedDeliveryDate=function(e){var t=e.split("-").reverse().join("-");return new Date(t).getTime()}(d)}console.log(o),u.patch("/deliveries/".concat(s.searchResult.trackingNumber),o).then((function(e){console.log(e),c((function(e){return Object(f.a)(Object(f.a)({},e),{},{submitted:!0})}))})).catch((function(e){var t;-1!==e.response.data.message.indexOf("Estimated")&&(t=l.errorText.errorDate),-1!==e.response.data.message.indexOf("duplicate")&&(t=l.errorText.notUniqueId),c((function(e){return Object(f.a)(Object(f.a)({},e),{},{submitted:!1,isValid:!1,displayErrorText:t})}))}))}},x=function(){var e=document.querySelector("#addForm"),t=Object(f.a)({},l.invoiceForm);for(var a in t)t[a].value="";c((function(e){return Object(f.a)(Object(f.a)({},e),{},{invoiceForm:Object(f.a)({},t),submitted:!1,isValid:!0,showAddForm:!1,showUpdateForm:!1})})),m((function(e){return Object(f.a)(Object(f.a)({},e),{},{searchResult:{},showSearchResults:!1})})),e.reset()},F=null;return F=l.showAddForm?n.a.createElement(Z,{formState:l,showForm:l.showAddForm,formSubmit:function(e){return y(e)},changeInputHandler:function(e,t){return g(e,t)},isValid:l.isValid,errorText:l.displayErrorText,closeForm:x}):l.showUpdateForm?n.a.createElement(ee,{showForm:l.showUpdateForm,formState:l,formSubmit:function(e){return N(e)},changeInputHandler:function(e,t){return g(e,t)},isValid:l.isValid,errorText:l.displayErrorText,closeForm:x}):null,n.a.createElement("div",{className:"Admin"},n.a.createElement("div",{className:"Left-Side"},n.a.createElement("div",{className:"Left-Side-Box"},n.a.createElement(C,{btnStyle:l.showAddForm?"Button__Green--Active":"Button__Green",handleClick:function(){c((function(e){return Object(f.a)(Object(f.a)({},e),{},{showAddForm:!0,showUpdateForm:!1})}))}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u0430\u043a\u043b\u0430\u0434\u043d\u0443\u044e"),n.a.createElement("div",{className:"Search"},n.a.createElement("p",{className:"Search__Title"},"\u041d\u0430\u0439\u0442\u0438 \u043d\u0430\u043a\u043b\u0430\u0434\u043d\u0443\u044e"),n.a.createElement(O,{onSubmitHandler:function(e){return function(e){e.preventDefault(),d.current.focus();var t=!0;""===s.searchValue&&(t=!1),t&&u.get("/deliveries/".concat(s.searchValue)).then((function(e){for(var t={},a=0,r=Object.keys(l.invoiceForm);a<r.length;a++){var n=r[a];t[n]=e.data.data.delivery[n],"estimatedDeliveryDate"===n&&(t[n]=h(e.data.data.delivery[n]))}m((function(e){return Object(f.a)(Object(f.a)({},e),{},{searchResult:Object(f.a)({},t),showSearchResults:!0})}))})).catch((function(e){m((function(e){return Object(f.a)(Object(f.a)({},e),{},{showSearchResults:!1,validResults:!1,displaySearchErrorText:s.errorText.noId})}))})),m((function(e){return Object(f.a)(Object(f.a)({},e),{},{validResults:t,showSearchResults:!1,displaySearchErrorText:s.errorText.emptyFieldsError})}))}(e)},isValid:s.validResults,errText:s.displaySearchErrorText,btnText:"\u041d\u0410\u0419\u0422\u0418",btnStyle:"Button__Green",formStyle:"FormBox"},n.a.createElement(w,{elemtype:"input",elemConfig:s.elemConfig,addChangeHandle:!0,onChangeHandler:function(e){return function(e){var t=e.target.value;m((function(e){return Object(f.a)(Object(f.a)({},e),{},{searchValue:t})}))}(e)},addBlurHandle:!0,onBlurHandler:function(){m((function(e){return Object(f.a)(Object(f.a)({},e),{},{validResults:!0})}))},inpStyle:"Form-Input",ref:d})),n.a.createElement("div",{className:"Search__Result-Box"},s.showSpinner?n.a.createElement(K,null):n.a.createElement("div",{className:s.showSearchResults?"Search__Results Search__Results--Active ":"Search__Results"},n.a.createElement("p",{className:"Search__TrackID"},n.a.createElement("span",{className:"Search__Span"},"\u041d\u0430\u043a\u043b\u0430\u0434\u043d\u0430\u044f:")," ",s.searchResult.trackingNumber),n.a.createElement("div",{className:"Search__Settings"},n.a.createElement(C,{btnStyle:"Button__Blue",handleClick:function(){var e=Object(f.a)({},l.invoiceForm);for(var t in s.searchResult)e[t].value=s.searchResult[t],!0===s.searchResult.delivered&&(e.recipient.disabled=!1);c(Object(f.a)(Object(f.a)({},l),{},{showUpdateForm:!0,showAddForm:!1}))}},"\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),n.a.createElement(C,{btnStyle:"Button__Red",handleClick:function(){window.confirm("\u0423\u0432\u0435\u0440\u0435\u043d\u044b \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u0442\u0443 \u043d\u0430\u043a\u043b\u0430\u0434\u043d\u0443\u044e?")&&u.delete("/deliveries/".concat(s.searchResult.trackingNumber)).then((function(e){console.log(e),x()})).catch((function(e){console.log(e)}))}},"\u0443\u0434\u0430\u043b\u0438\u0442\u044c")))))),n.a.createElement("div",{className:"Left-Side__Logout"},n.a.createElement(C,{btnStyle:"Button__Green",handleClick:function(){return e="access__token",sessionStorage.removeItem(e),void p.login();var e}},"\u0412\u042b\u0419\u0422\u0418"))),n.a.createElement("div",{className:"Right-Side"},F,n.a.createElement(E,{show:l.submitted,close:x},n.a.createElement($,null))))},ne=(a(89),function(e){var t=Object(r.useState)({inputConfig:{username:b("input","text","\u041b\u043e\u0433\u0438\u043d","",""),password:b("input","password","\u041f\u0430\u0440\u043e\u043b\u044c","","")},errorText:{emptyFields:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u0443\u0441\u0442\u044b\u0435 \u043f\u043e\u043b\u044f",wrongFields:"\u041d\u0435\u0432\u0435\u0440\u043d\u043e \u0432\u0432\u0435\u0434\u0435\u043d\u044b \u041f\u0430\u0440\u043e\u043b\u044c \u0438\u043b\u0438 \u041b\u043e\u0433\u0438\u043d"},displayErrorText:"",isValid:!0}),a=Object(v.a)(t,2),l=a[0],c=a[1],o=Object(r.useContext)(te),i=Object(r.useCallback)((function(e,t){var a=Object(f.a)({},l.inputConfig);a[t].value=e.target.value,c((function(e){return Object(f.a)(Object(f.a)({},e),{},{inputConfig:Object(f.a)({},a)})}))}),[l.inputConfig]),s=Object.keys(l.inputConfig).map((function(e){return n.a.createElement(w,{key:e,onChangeHandler:function(t){return i(t,e)},addChangeHandle:!0,elemtype:l.inputConfig[e].elemType,elemConfig:l.inputConfig[e].elemConfig,inpStyle:"Auth-Form-Input",add:!1,autoComplete:"on"})}));return n.a.createElement("div",{className:"Auth"},n.a.createElement("form",{className:"Auth-Form",onSubmit:function(e){return function(e){e.preventDefault();var t=!0;for(var a in l.inputConfig)""===l.inputConfig[a].value&&(t=!1);if(c((function(e){return Object(f.a)(Object(f.a)({},e),{},{isValid:t,displayErrorText:l.errorText.emptyFields})})),t){var r={};for(var n in l.inputConfig)r[n]=l.inputConfig[n].value;u.post("/users/login",r).then((function(e){console.log(e),sessionStorage.setItem("access__token",e.data.access_token),o.login(!0)})).catch((function(e){console.log(e.response),c((function(e){return Object(f.a)(Object(f.a)({},e),{},{isValid:!1,displayErrorText:l.errorText.wrongFields})}))}))}}(e)}},s,n.a.createElement("span",{className:l.isValid?"Auth-Form__Error":"Auth-Form__Error Auth-Form__Error--Active"},l.displayErrorText),n.a.createElement(C,{btnStyle:"Button__Green"},"\u0412\u041e\u0419\u0422\u0418")))}),le=function(){u.interceptors.request.use((function(e){var t=sessionStorage.getItem("access__token");return t?(e.headers.Authorization="Bearer ".concat(t),e):e}));var e=Object(r.useContext)(te),t=sessionStorage.getItem("access__token"),a=n.a.createElement(ne,null);return(e.isAuth||t)&&(a=n.a.createElement(re,null)),n.a.createElement("div",{className:"App"},n.a.createElement(o.a,null,n.a.createElement(i.c,null,n.a.createElement(i.a,{path:"/operator",component:W},a),n.a.createElement(i.a,{path:"/",component:W}))))};c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(ae,null,n.a.createElement(le,null))),document.getElementById("root"))}],[[36,1,2]]]);
//# sourceMappingURL=main.40574dd7.chunk.js.map