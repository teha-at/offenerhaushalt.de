webpackJsonp([1],{23:function(e,t,a){"use strict";var l=a(8),r=a(87),i=a(7),s=a.n(i);l.a.use(r.a);new r.a({routes:[{path:"/:level",name:"Treemap",component:s.a,props:!0}]})},46:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(24),r=(a.n(l),a(8)),i=a(26),s=a(7),n=a.n(s),c=a(25),o=a.n(c);a(23);o.a.polyfill(),r.a.config.productionTip=!1,r.a.use(i.a),r.a.customElement("dp-treemap",n.a)},47:function(e,t,a){"use strict";var l=a(52),r=a.n(l),i=a(53),s=a.n(i),n=a(82),c=a.n(n),o=a(19),u=(a.n(o),function(){function e(t){r()(this,e),this.$treemap=c()(t),this.treemap=null,this.div=null}return s()(e,[{key:"create",value:function(){this.width=this.$treemap.width(),this.height=this.$treemap.height(),this.$treemap.empty(),this.treemap=o.layout.treemap().size([this.width,this.height]).sticky(!0).sort(function(e,t){return Math.abs(e.value)-Math.abs(t.value)}).value(function(e){return Math.abs(e.value)}),this.div=o.select(".treemap").append("div").style("position","relative").style("width",this.width+"px").style("height",this.height+"px")}},{key:"render",value:function(e,t){function a(e){e.style("left",function(e){return e.x+"px"}).style("top",function(e){return e.y+"px"}).style("width",function(e){return Math.max(0,e.dx-1)+"px"}).style("height",function(e){return Math.max(0,e.dy-1)+"px"})}this.create();for(var l={children:[]},r=0;r<e.cells.length;r+=1)l.children.push({name:e.cells[r]._label,value:e.cells[r]._value,value_fmt:e.cells[r]._value_fmt,percentage:e.cells[r]._percentage,href:e.cells[r]._url,color:e.cells[r]._color});this.div.datum(l).selectAll(".node").data(this.treemap.nodes).enter().append("a").attr("href",function(e){return e.href}).attr("class","node").call(a).style("background","#fff").classed("big",function(t){return t.value>e.summary._value/50}).html(function(e){return e.percentage<.03?"":e.children?null:'<span class="amount">'+e.value_fmt+"</span>"+e.name}).on("mouseover",function(e){o.select(this).transition().duration(200).style({background:o.rgb(e.color).darker()})}).on("mouseout",function(e){o.select(this).transition().duration(500).style({background:e.color})}).transition().duration(500).delay(function(e,t){return Math.min(30*t,1500)}).style("background",function(e){return e.color})}}]),e}());t.a=u},48:function(e,t,a){"use strict";function l(e){var t={},a=e.split("#")[1],l=a.split("?"),i="";l.length>1&&(i=l[1],a=l[0]);var s=a.split("/").filter(function(e){return""!==e});return""!==i&&(t=r.parse(i)),[s,t]}a.d(t,"a",function(){return l});var r=a(21);a.n(r)},49:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(51),r=a.n(l),i=a(47),s=a(48),n=a(28),c=a.n(n),o=a(19),u=(a.n(o),a(21)),h=(a.n(u),a(27));a.n(h);t.default={name:"treemap",props:{datapackage:"",apiurl:""},data:function(){return{model:{},colors:["#CF3D1E","#F15623","#F68B1F","#FFC60B","#DFCE21","#BCD631","#95C93D","#48B85C","#00833D","#00B48D","#60C4B1","#27C4F4","#478DCB","#3E67B1","#4251A3","#59449B","#6E3F7C","#6A246D","#8A4873","#EB0080","#EF58A0","#C05A89"],config:{value:"Betrag.sum",hierarchies:[{datapackageHierarchy:"administrative_classification",url:"einzelplan",label:"Einzelpläne"},{datapackageHierarchy:"functional_classification",url:"funktion",label:"Funktionen"}],filters:{Jahr:{name:"date_2.Jahr",values:[{label:2017,value:2017},{label:2016,value:2016}],type:"number",default:!0,label:"Jahr"},Typ:{name:"fin_source_Typ.Typ",values:[{label:"Senatsverwaltungen",value:1},{label:"Verfassungsorgane",value:2},{label:"Bezirke",value:3}],type:"string",default:!1,defaultLabel:"Alle",label:"Typ"},titelart:{name:"direction_2.Titelart",values:[{label:"Ausgabetitel",value:"Ausgabetitel"},{label:"Einnahmetitel",value:"Einnahmetitel"}],default:!0,type:"string",label:"Art"}}},selectedHierarchy:{levelsParams:[]},filters:{},data:{},hierarchyColors:{}}},computed:{currentLevel:function(){return this.selectedHierarchy.levelsParams.length}},mounted:function(){this.treemap=new i.a(".treemap"),this.getURLParameters(),this.getModel()},methods:{defaultFilters:function(){for(var e in this.config.filters)this.config.filters[e].default?this.$set(this.filters,e,this.config.filters[e].values[0].value):this.$set(this.filters,e,"")},hierarchyURL:function(){var e=a.i(s.a)(window.location.toString());return e[0].length>0?e[0][0]:""},getURLParameters:function(){var e=a.i(s.a)(window.location.toString());if(0===e[0].length)this.$set(this.selectedHierarchy,"hierarchy",this.config.hierarchies[0]),window.location.hash=this.config.hierarchies[0].url;else{var t=this.config.hierarchies.find(function(t){return t.url===e[0][0]});this.$set(this.selectedHierarchy,"hierarchy",t)}this.$set(this.selectedHierarchy,"levelsParams",e[0].splice(1));var l=e[1];for(var r in l)this.filters[r]=l[r]},getHierarchies:function(){var e=this.selectedHierarchy.levelsParams.length,t="";if(e>0){var a=this.model.hierarchies[this.selectedHierarchy.hierarchy.datapackageHierarchy];for(var l in a.levelsP)if(l<e){var r=a.levels[l];t+="|"+this.model.dimensions[r].key_ref+':"'+this.selectedHierarchy.levelsParams[l]+'"'}}return t},levelBack:function(){var e=a.i(s.a)(window.location.toString()),t=e[0];t.length>1&&t.pop(),window.location.hash=t.join("/")+"?"+u.stringify(this.filters)},addFilter:function(){var e=a.i(s.a)(window.location.toString());window.location.hash=e[0].join("/")+"?"+u.stringify(this.filters)},getDrilldown:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.currentLevel,t=this.getLevel(e);return t[0]+"|"+t[1]},getModel:function(){var e=this,t=""+this.apiurl+this.datapackage+"/model";return c.a.get(t).then(function(t){e.model=t.data.model;var a=e.selectedHierarchy.hierarchy.datapackageHierarchy;e.$set(e.selectedHierarchy,"levels",e.model.hierarchies[a].levels),e.defaultFilters(),window.addEventListener("hashchange",e.updateData)})},getRootColors:function(e,t){var a=this.getLevel(0);for(var l in t.cells){var r=t.cells[l][a[1]];this.hierarchyColors[r]=e(l)}},updateData:function(){var e=this;if(this.getURLParameters(),0===r()(this.hierarchyColors).length)return this.getRoot().then(function(t){e.getData()});this.getData()},getRoot:function(){var e=this,t=this.createApiRequestURL(!0);return console.log(t),c.a.get(t).then(function(t){var a=o.scale.ordinal().range(e.colors);a=a.domain([t.data.total_cell_count,0]),e.getRootColors(a,t.data)})},getRootLevel:function(){var e=this.selectedHierarchy.hierarchy.datapackageHierarchy,t=this.model.hierarchies[e].levels[0];return[this.model.dimensions[t].label_ref,this.model.dimensions[t].key_ref]},getLevel:function(e){var t=this.selectedHierarchy.hierarchy.datapackageHierarchy,a=this.model.hierarchies[t].levels[e];return[this.model.dimensions[a].label_ref,this.model.dimensions[a].key_ref]},getFilters:function(){var e,t="";for(var a in this.filters)""!==this.filters[a]&&(e="","string"===this.config.filters[a].type&&(e='"'),t+=this.config.filters[a].name+":"+e+this.filters[a]+e+"|");if(""===t)for(a in this.config.filters)if(this.config.filters[a].default){var l=this.config.filters[a].name,r=this.config.filters[a].values[0].value;e="","string"===this.config.filters[a].type&&(e='"'),t+=l+":"+e+r+e+"|"}return t},formatValue:function(e){return h.formatMoney(e,"€",0,".")},createApiRequestURL:function(){var e,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a="";t?(e=this.getDrilldown(0),console.log(e)):(e=this.getDrilldown(),a=this.getHierarchies());var l=this.getFilters();return""+this.apiurl+this.datapackage+"/aggregate?cut="+l+a+"&drilldown="+e+"&order="+this.config.value+":desc&pagesize=30"},getData:function(e){var t=this,a=this.createApiRequestURL();c.a.get(a).then(function(e){t.data=e.data;var a=t.getLevel(t.currentLevel),l=o.scale.ordinal().range(t.colors);if(l=l.domain([t.data.total_cell_count,0]),0===t.selectedHierarchy.levelsParams.length)t.getRootColors(l,t.data);else{var r=o.rgb(t.hierarchyColors[t.selectedHierarchy.levelsParams[0]]);l=o.scale.linear(),l=l.interpolate(o.interpolateRgb),l=l.range([r.brighter(),r.darker().darker()]),l=l.domain([t.data.cells.length,0])}var i=0,s=t.config.value;t.data.cells=t.data.cells.filter(function(e){return e[s]>0}),t.data.summary._value=0;for(n in t.data.cells)i+=t.data.cells[n][t.config.value],t.data.summary._value=i;t.data.summary._valueFmt=t.formatValue(t.data.summary._value);for(var n in t.data.cells){var c="",h=u.stringify(t.filters);""!==h&&(h="?"+h),t.selectedHierarchy.levelsParams.length>=1&&(c=t.selectedHierarchy.levelsParams.join("/")+"/"),t.data.cells[n]._value=t.data.cells[n][t.config.value],t.data.cells[n]._color=l(n),t.data.cells[n]._label=t.data.cells[n][a[0]],t.data.cells[n]._value_fmt=t.formatValue(t.data.cells[n]._value),t.selectedHierarchy.levelsParams.length<t.model.hierarchies[t.selectedHierarchy.hierarchy.datapackageHierarchy].levels.length-1&&(t.data.cells[n]._url="#"+t.selectedHierarchy.hierarchy.url+"/"+c+t.data.cells[n][a[1]]+h),t.data.cells[n]._percentage=t.data.cells[n]._value/i,t.data.cells[n]._small=t.data.cells[n]._percentage<.01;var d=(100*t.data.cells[n]._percentage).toFixed(2)+"%";d=d.replace(".",","),t.data.cells[n]._percentage_fmt=d}t.treemap.render(t.data)}).catch(function(e){console.log(e)})}}}},7:function(e,t,a){function l(e){a(80)}var r=a(85)(a(49),a(86),l,null,null);e.exports=r.exports},80:function(e,t){},86:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"treemap-content"},[a("div",{staticClass:"controls"},[a("div",{staticClass:"hierarchies"},[e.selectedHierarchy.levelsParams.length>=1?a("a",{staticClass:"btn btn-default",on:{click:function(t){e.levelBack()}}},[a("i",{staticClass:"fa fa-level-up"}),e._v(" "),a("strong",[e._v("\n      Ebene hoch\n      ")])]):e._e(),e._v(" "),e._l(e.config.hierarchies,function(t){return a("a",{staticClass:"btn btn-default",class:{active:e.hierarchyURL()===t.url},attrs:{href:"#"+t.url}},[e._v(e._s(t.label))])})],2),e._v(" "),a("div",{staticClass:"filters"},e._l(e.config.filters,function(t,l){return a("div",{staticClass:"filter"},[e._v("\n        "+e._s(t.label)+"\n        "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.filters[l],expression:"filters[filterName]"}],staticClass:"btn btn-default dropdown-toggle",attrs:{onchange:e.addFilter()},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.filters,l,t.target.multiple?a:a[0])}}},[t.default?e._e():a("option",{attrs:{value:""},domProps:{selected:!0}},[e._v(e._s(t.defaultLabel))]),e._v(" "),e._l(t.values,function(t){return a("option",{domProps:{value:t.value}},[e._v(e._s(t.label))])})],2)])}))]),e._v(" "),a("div",{staticClass:"treemap"}),e._v(" "),a("table",{staticClass:"table table-condensed"},[e._m(0),e._v(" "),e._l(e.data.cells,function(t){return a("tr",{class:{small:t._small}},[a("td",[a("i",{staticClass:"fa fa-square",style:"color: "+t._color+";"}),e._v(" "),t._url?a("a",{attrs:{href:t._url}},[e._v(e._s(t._label))]):e._e(),e._v(" "),t._url?e._e():a("span",[e._v("\n            "+e._s(t._label)+"\n          ")])]),a("td",{staticClass:"num"},[e._v(e._s(t._value_fmt))]),e._v(" "),a("td",{staticClass:"num"},[e._v(e._s(t._percentage_fmt))])])}),e._v(" "),a("tr",[a("th",[e._v("\n        Total\n      ")]),e._v(" "),e.data.summary?a("th",{staticClass:"num"},[e._v(e._s(e.data.summary._valueFmt))]):e._e(),e._v(" "),a("th",{staticClass:"num"},[e._v("100%")])])],2)])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tr",[a("th",[e._v("Titel")]),e._v(" "),a("th",{staticClass:"num"},[e._v("Betrag")]),e._v(" "),a("th",{staticClass:"num"},[e._v("Anteil")])])}]}},89:function(e,t){}},[46]);
//# sourceMappingURL=app.js.map