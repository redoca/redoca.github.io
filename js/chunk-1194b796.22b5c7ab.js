(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1194b796"],{"08a5":function(t,e,a){"use strict";a("50bb")},"0d36":function(t,e,a){},"0ecd":function(t,e,a){"use strict";a("0d36")},"305a":function(t,e,a){},"3aeb":function(t,e,a){},"3dcb":function(t,e,a){},"50bb":function(t,e,a){},"6fad":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"exchange"}},[a("div",{staticClass:"exchange-container"},[a("div",{staticClass:"exchange-container-item"},[a("Border",{staticStyle:{flex:"0 0 49%"},attrs:{height:"400px",title:"外汇风险分类统计"}},[a("Chart1")],1),a("Border",{staticStyle:{flex:"0 0 49%"},attrs:{height:"400px",title:"外汇交易风险分析"}},[a("Chart2")],1)],1),a("div",{staticClass:"exchange-container-item"},[a("Border",{staticStyle:{flex:"0 0 49%"},attrs:{height:"400px",title:"货币汇兑收益分析"}},[a("Chart3")],1),a("Border",{staticStyle:{flex:"0 0 49%"},attrs:{height:"400px",title:"各类货币汇兑损失分析"}},[a("Chart4")],1)],1)])])},s=[],n=a("d243"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"title"},[t._v("各风险类别占比及货币数量")]),a("Echart",{attrs:{options:t.options,height:"320px",width:"500px"}})],1)},l=[],o=(a("e9c4"),a("33de")),c={data:function(){return{options:{color:["#50BA89","#E61958","#F5B51A","#79CBDB","#2A51A3"],legend:{show:!1},series:[{type:"pie",radius:[0,120],center:["50%","50%"],roseType:"area",itemStyle:{borderRadius:8},label:{show:!0,normal:{formatter:"{c}%",color:"white",fontSize:"16"}},labelLine:{show:!0},emphasis:{label:{show:!0}},data:[{value:30,name:"湖北省"},{value:35,name:"湖南省"},{value:40,name:"北京市"},{value:30,name:"四川省"},{value:28,name:"其它"}]}]}}},components:{Echart:o["a"]},mounted:function(){this.timeFn()},beforeDestroy:function(){clearInterval(this.timing)},methods:{timeFn:function(){var t=this;this.timing=setInterval((function(){var e=Math.ceil(5*Math.random())-1;if(e>=0){var a=0==e?4:e-1,i=JSON.parse(JSON.stringify(t.options)),s=i.series[0].data[e].value,n=i.series[0].data[a].value;i.series[0].data[e].value=s+1,i.series[0].data[a].value=n-1,t.options=i}}),2e3)}}},d=c,u=(a("b9a9"),a("2877")),v=Object(u["a"])(d,r,l,!1,null,"6c14afb8",null),h=v.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"title"},[t._v("集团公司未来一个月计划操作")]),a("div",{staticClass:"charts"},[a("div",{staticClass:"ring"},[a("Ring",{attrs:{color:"#F1B847"}}),a("Ring",{attrs:{title:"涉及到货币兑",value:"6个"}})],1),a("div",{staticClass:"bottom"},[t._v("其中甲单位的A货币兑、乙单位的B货币对等汇率波动最大，风险最高")])])])},m=[],p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ring-container"},[a("div",{staticClass:"ring-border"},[a("div",{staticClass:"ring",style:{borderRight:"10px dashed "+t.color,borderBottom:"10px dashed "+t.color}},[a("div",{staticClass:"title"},[t._v(t._s(t.title))])])]),a("div",{staticClass:"value"},[a("div",{staticClass:"icon",style:{backgroundColor:t.color}}),t._v(" "+t._s(t.value)+" ")])])},b=[],C={props:{title:{type:String,default:"即期换汇交易"},color:{type:String,default:"#50BA89"},value:{type:String,default:"8笔"}},data:function(){return{}},computed:{},mounted:function(){},beforeDestroy:function(){},methods:{}},g=C,_=(a("08a5"),Object(u["a"])(g,p,b,!1,null,"54d918e2",null)),x=_.exports,y={components:{Ring:x},data:function(){return{}},computed:{},mounted:function(){},beforeDestroy:function(){},methods:{}},B=y,S=(a("7f6e"),Object(u["a"])(B,f,m,!1,null,"4a1131a8",null)),w=S.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"title"},[t._v("各类货币汇兑收益金额占比")]),a("div",{staticClass:"charts"},[a("Echart",{attrs:{options:t.options,height:"320px",width:"600px"}}),t._m(0)],1)])},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"right"},[a("div",{staticClass:"item"},[a("div",{staticClass:"title"},[t._v("美元")]),a("div",{staticClass:"sub-title"},[t._v("挪威克朗")]),a("div",{staticClass:"number"},[t._v("261000")])]),a("div",{staticClass:"line"},[t._v("----------")]),a("div",{staticClass:"item"},[a("div",{staticClass:"title"},[t._v("欧元")]),a("div",{staticClass:"sub-title"},[t._v("新西兰元")]),a("div",{staticClass:"number"},[t._v("201000")])])])}],F={data:function(){return{options:{color:["#4CBBEA","#2B55A5","#5273B4","#D9AA44","#D08B45","#43AF95"],tooltip:{trigger:"item"},legend:{left:"0",y:"center",width:"120",icon:"square",itemWidth:5,itemHeight:5},series:[{name:"Access From",type:"pie",radius:["40%","70%"],center:["60%","50%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10},label:{formatter:"{d}%",color:"white",backgroundColor:"#0B2E43",borderColor:"#56B2C0",borderWidth:1,borderRadius:50,align:"center",padding:[8,2]},emphasis:{label:{show:!0,fontSize:"40",fontWeight:"bold"}},labelLine:{show:!0,length:20},data:[{value:10,name:"美元"},{value:10,name:"英镑"},{value:10,name:"欧元"},{value:10,name:"日元"},{value:10,name:"其他"},{value:10,name:"美元"},{value:10,name:"英镑"},{value:10,name:"欧元"},{value:10,name:"日元"},{value:10,name:"其他"}]}]}}},components:{Echart:o["a"]}},D=F,O=(a("9c4b"),Object(u["a"])(D,A,E,!1,null,"4d1f597a",null)),$=O.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"title"},[t._v("各类货币汇兑收益金额占比")]),a("div",{staticClass:"charts"},[a("Echart",{attrs:{options:t.options,height:"320px",width:"600px"}}),t._m(0)],1)])},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"right"},[a("div",{staticClass:"item"},[a("div",{staticClass:"title"},[t._v("美元")]),a("div",{staticClass:"sub-title"},[t._v("挪威克朗")]),a("div",{staticClass:"number"},[t._v("261000")])]),a("div",{staticClass:"line"},[t._v("----------")]),a("div",{staticClass:"item"},[a("div",{staticClass:"title"},[t._v("欧元")]),a("div",{staticClass:"sub-title"},[t._v("新西兰元")]),a("div",{staticClass:"number"},[t._v("201000")])])])}],k={data:function(){return{options:{color:["#4CBBEA","#2B55A5","#5273B4","#D9AA44","#D08B45","#43AF95"],tooltip:{trigger:"item"},legend:{left:"0",y:"center",width:"120",icon:"square",itemWidth:5,itemHeight:5},series:[{name:"Access From",type:"pie",radius:["40%","70%"],center:["60%","50%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10},label:{formatter:"{d}%",color:"white",backgroundColor:"#0B2E43",borderColor:"#56B2C0",borderWidth:1,borderRadius:50,align:"center",padding:[8,2]},emphasis:{label:{show:!0,fontSize:"40",fontWeight:"bold"}},labelLine:{show:!0,length:20},data:[{value:10,name:"美元"},{value:10,name:"英镑"},{value:10,name:"欧元"},{value:10,name:"日元"},{value:10,name:"其他"},{value:10,name:"美元"},{value:10,name:"英镑"},{value:10,name:"欧元"},{value:10,name:"日元"},{value:10,name:"其他"}]}]}}},components:{Echart:o["a"]}},z=k,J=(a("0ecd"),Object(u["a"])(z,R,j,!1,null,"10c084c4",null)),W=J.exports,L={components:{Border:n["a"],Chart1:h,Chart2:w,Chart3:$,Chart4:W},data:function(){return{}}},N=L,q=(a("8424"),Object(u["a"])(N,i,s,!1,null,"4e7c74bb",null));e["default"]=q.exports},"7f6e":function(t,e,a){"use strict";a("3aeb")},8424:function(t,e,a){"use strict";a("305a")},"9c4b":function(t,e,a){"use strict";a("3dcb")},"9d3e":function(t,e,a){"use strict";a("b586")},"9efa":function(t,e,a){},b586:function(t,e,a){},b9a9:function(t,e,a){"use strict";a("9efa")},d243:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("dv-border-box-7",{staticClass:"border-container",style:{height:t.height,width:t.width},attrs:{color:["#1C4562","#346F7F"]}},[a("div",{staticClass:"border-title",style:{fontSize:t.fontSize,textAlign:t.textAlign}},[a("span",[t._v("▎")]),t._v(t._s(t.title))]),a("div",{staticClass:"border-content"},[t._t("default")],2)])},s=[],n={props:{title:{default:"标题",type:String},height:{default:"240px",type:String},width:{default:"430px",type:String},textAlign:{default:"left",type:String},fontSize:{default:"18px",type:String}}},r=n,l=(a("9d3e"),a("2877")),o=Object(l["a"])(r,i,s,!1,null,"d8aa1ad6",null);e["a"]=o.exports},e9c4:function(t,e,a){var i=a("23e7"),s=a("da84"),n=a("d066"),r=a("2ba4"),l=a("e330"),o=a("d039"),c=s.Array,d=n("JSON","stringify"),u=l(/./.exec),v=l("".charAt),h=l("".charCodeAt),f=l("".replace),m=l(1..toString),p=/[\uD800-\uDFFF]/g,b=/^[\uD800-\uDBFF]$/,C=/^[\uDC00-\uDFFF]$/,g=function(t,e,a){var i=v(a,e-1),s=v(a,e+1);return u(b,t)&&!u(C,s)||u(C,t)&&!u(b,i)?"\\u"+m(h(t,0),16):t},_=o((function(){return'"\\udf06\\ud834"'!==d("\udf06\ud834")||'"\\udead"'!==d("\udead")}));d&&i({target:"JSON",stat:!0,forced:_},{stringify:function(t,e,a){for(var i=0,s=arguments.length,n=c(s);i<s;i++)n[i]=arguments[i];var l=r(d,null,n);return"string"==typeof l?f(l,p,g):l}})}}]);
//# sourceMappingURL=chunk-1194b796.22b5c7ab.js.map