(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{50:function(e,t,n){e.exports=n(60)},55:function(e,t,n){},56:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(8),o=n.n(s),c=(n(55),n(22)),i=n(23),l=n(31),u=n(38),h=n(37);function m(e){var t=Math.floor(10*Math.random()+1),n=Math.floor(10*Math.random()+1);return new w(t,n,e)}var w=function(){function e(t,n,a){Object(c.a)(this,e),this.firstOperand=void 0,this.secondOperand=void 0,this.expressionEquals=void 0,this.result=void 0,this.compute=function(e,t,n){var a;switch(n){case"+":a=e+t;break;case"-":a=e-t;break;case"\xd7":a=e*t;break;case"\xf7":a=e/t}return a},this.firstOperand=t,this.secondOperand=n,this.expressionEquals="".concat(t,"+").concat(n,"="),this.result=this.compute(t,n,a)}return Object(i.a)(e,[{key:"equals",value:function(e){return e.expressionEquals===this.expressionEquals&&e.result===this.result}}]),e}(),p=(n(56),n(94));function d(e){return e.showAnswer?r.a.createElement(f,{answer:e.answer}):r.a.createElement(v,{answer:e.answer})}function f(e){return r.a.createElement("form",null,r.a.createElement(p.a,{id:"standard-basic",value:e.answer}))}var v=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={currentVal:"",correct:!1},a}return Object(i.a)(n,[{key:"onChange",value:function(e){console.log(typeof e),e.target.value===this.props.answer.toString()?this.setState({correct:!0}):this.setState({correct:!1})}},{key:"render",value:function(){var e=this.state.correct?"primary":"secondary";return r.a.createElement(p.a,{color:e,name:"phone",onChange:this.onChange.bind(this)})}}]),n}(r.a.Component),g=n(93),b=n(98),E=n(97),O=n(96),k=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;Object(c.a)(this,n),a=t.call(this,e);for(var r=[],s=0;s<20;s++){var o;do{o=m("+")}while(r.some((function(e){return e.equals(o)})));r.push(o)}return a.state={problems:r,showAnswers:!1},a.toggleAnswers=a.toggleAnswers.bind(Object(l.a)(a)),a}return Object(i.a)(n,[{key:"toggleAnswers",value:function(){this.setState((function(e){return{showAnswers:!e.showAnswers}}))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{control:r.a.createElement(E.a,{checked:this.state.showAnswers,onChange:this.toggleAnswers,name:"checkedB",color:"primary"}),label:"Toggle Answers"}),r.a.createElement("ol",null,this.state.problems.map((function(t){return r.a.createElement("li",{key:"".concat(t.firstOperand).concat(t.secondOperand)},r.a.createElement(O.a,{width:290},r.a.createElement(g.a,{container:!0,justify:"space-between",alignItems:"center",spacing:0},r.a.createElement(g.a,{item:!0},t.expressionEquals),r.a.createElement(g.a,{item:!0},r.a.createElement(d,{answer:t.result,showAnswer:e.state.showAnswers})))))}))))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.5e4a1ac4.chunk.js.map