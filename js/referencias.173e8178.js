(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["referencias","chunk-515a8379"],{"0095":function(n,t,e){"use strict";e("95c5")},"13aa":function(n,t,e){"use strict";e.r(t);var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"container-fluid banner-interno"},[e("div",{staticClass:"banner-interno__fondo",style:{"background-image":"url("+n.globalData.fondoBannerPrincipal+")"}}),e("div",{staticClass:"container"},[e("div",{staticClass:"banner-interno__titulo py-5"},[n.icono.length?e("div",{staticClass:"banner-interno__titulo__icono me-3"},[e("i",{class:n.icono})]):n._e(),e("h2",{staticClass:"mb-0",domProps:{innerHTML:n._s(n.titulo)}})])])])},i=[],r={name:"BannerInterno",props:{icono:{type:String,default:""},titulo:{type:String,default:""}},data:function(){return{}},computed:{globalData:function(){return this.$config.global}}},s=r,c=(e("0095"),e("2877")),o=Object(c["a"])(s,a,i,!1,null,null,null);t["default"]=o.exports},"3cb4":function(n,t,e){"use strict";e("ddc8")},"64ef":function(n,t,e){"use strict";e.r(t);var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"curso-main-container referencias"},[e("BannerInterno",{attrs:{icono:"fas fa-book",titulo:"Referencias bibliográficas"}}),e("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},n._l(n.orderedData,(function(t){return e("div",{key:t.link,staticClass:"referencias__item"},[e("span",{domProps:{innerHTML:n._s(t.referencia)}}),t.link?e("a",{attrs:{href:t.link,target:"_blank"}},[e("span",{domProps:{innerHTML:n._s(t.link)}}),e("i",{staticClass:"fas fa-external-link-alt"})]):n._e(),e("hr",{staticClass:"my-3"})])})),0)],1)},i=[],r=e("2909"),s=(e("1276"),e("ac1f"),e("13aa")),c=e("ecc5"),o={name:"Referencias",components:{BannerInterno:s["default"]},mixins:[c["a"]],computed:{referenciasData:function(){return this.$config.referencias},orderedData:function(){var n=this,t=Object(r["a"])(this.referenciasData).sort((function(t,e){var a=n.quitarAcentos(t.referencia.split(" ")[0].toLowerCase()),i=n.quitarAcentos(e.referencia.split(" ")[0].toLowerCase());return a<i?-1:a>i?1:0}));return t}}},u=o,l=(e("3cb4"),e("2877")),f=Object(l["a"])(u,a,i,!1,null,null,null);t["default"]=f.exports},"95c5":function(n,t,e){},ddc8:function(n,t,e){},ecc5:function(n,t,e){"use strict";t["a"]={computed:{menuData(){return this.$config.menuPrincipal.menu},iniciarLnk(){const n=this.menuData.find(n=>"introduccion"===n.nombreRuta),t=this.menuData.find(n=>"tema1"===n.nombreRuta);return n||t}},methods:{quitarAcentos(n){const t={"á":"a","é":"e","í":"i","ó":"o","ú":"u","Á":"A","É":"E","Í":"I","Ó":"O","Ú":"U"};return n.split("").map(n=>t[n]||n).join("").toString()}}}}}]);
//# sourceMappingURL=referencias.173e8178.js.map