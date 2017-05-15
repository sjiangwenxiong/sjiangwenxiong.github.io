webpackJsonp([6], { 106: function (t, n, A) {
    t.exports = A.p + "static/img/新闻动态.9cb7b19.jpg";
  }, 117: function (t, n, A) {
    t.exports = { render: function () {
        var t = this,
            n = t.$createElement,
            A = t._self._c || n;return A("div", [A("nav-bar"), t._v(" "), t._m(0), t._v(" "), t._m(1)], 1);
      }, staticRenderFns: [function () {
        var t = this,
            n = t.$createElement,
            e = t._self._c || n;return e("div", { staticStyle: { width: "100%", "margin-top": "30px", overflow: "hidden" } }, [e("img", { staticStyle: { width: "100%" }, attrs: { src: A(106) } })]);
      }, function () {
        var t = this,
            n = t.$createElement,
            A = t._self._c || n;return A("div", { staticClass: "w" }, [A("b", { staticStyle: { float: "left", "border-bottom": "1px solid black" } }, [t._v("新闻简介")]), t._v(" "), A("br"), A("br"), A("br"), t._v(" "), A("div", { staticStyle: { clear: "both", "margin-bottom": "50px" } })]);
      }] };
  }, 37: function (t, n, A) {
    A(62);var e = A(0)(A(48), A(117), null, null);t.exports = e.exports;
  }, 48: function (t, n, A) {
    "use strict";

    Object.defineProperty(n, "__esModule", { value: !0 });var e = A(5),
        i = A.n(e);n.default = { name: "about", data: function () {
        return {};
      }, components: { NavBar: i.a } };
  }, 51: function (t, n, A) {
    n = t.exports = A(29)(!0), n.push([t.i, ".wleft{text-align:left}.wright{text-align:right}.d{width:60%;height:300px;min-width:800px;margin:30px auto 0;position:relative}.imgleft{padding:10px;position:absolute;left:0;top:0;width:250px;height:180px}.wordleft{text-align:left;left:210px;top:0}.imgright,.wordleft{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:10px;position:absolute;width:260px;height:180px}.imgright{left:520px;top:180px;text-align:right}.wordright{padding:10px;left:750px;top:180px;width:250px;height:180px}.circleTop,.wordright{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:absolute}.circleTop{top:95px}.circleBottom,.circleTop{width:10px;height:10px;border-radius:50%;background-color:green;left:496.5px}.circleBottom{position:absolute;top:260px}.line{height:330px;width:3px;background-color:green;position:absolute;left:500px;top:100px}.w{width:60%;margin:30px auto 0}", "", { version: 3, sources: ["D:/sublime/kkj_nolint/src/components/news.vue"], names: [], mappings: "AACA,OACE,eAAiB,CAClB,AACD,QACE,gBAAkB,CACnB,AACD,GAEE,UAAW,AACX,aAAc,AACd,gBAAiB,AACjB,mBAAoB,AACpB,iBAAmB,CACpB,AACD,SACE,aAAc,AACd,kBAAmB,AACnB,OAAQ,AACR,MAAO,AACP,YAAa,AACb,YAAc,CACf,AACD,UACE,gBAAiB,AAajB,WAAY,AACZ,KAAO,CAGR,AACD,oBAjBE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,aAAc,AACd,kBAAmB,AAGnB,YAAa,AACb,YAAc,CAoBf,AAlBD,UAaE,WAAY,AACZ,UAAW,AAGX,gBAAkB,CACnB,AACD,WAWE,aAAc,AAEd,WAAY,AACZ,UAAW,AACX,YAAa,AACb,YAAc,CACf,AACD,sBAjBE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAEhC,iBAAmB,CAwBpB,AAlBD,WAiBE,QAAU,CACX,AACD,yBARE,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,uBAAwB,AAExB,YAAc,CAWf,AARD,cAKE,kBAAmB,AAEnB,SAAW,CACZ,AACD,MACE,aAAc,AACd,UAAW,AACX,uBAAwB,AACxB,kBAAmB,AACnB,WAAY,AACZ,SAAW,CACZ,AACD,GACE,UAAW,AACX,kBAAoB,CACrB", file: "news.vue", sourcesContent: ["\n.wleft {\n  text-align: left;\n}\n.wright {\n  text-align: right;\n}\n.d {\n\n  width: 60%;\n  height: 300px;\n  min-width: 800px;\n  margin: 30px auto 0;\n  position: relative;\n}\n.imgleft {\n  padding: 10px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 250px;\n  height: 180px;\n}\n.wordleft {\n  text-align: left;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 10px;\n  position: absolute;\n  left: 210px;\n  top: 0;\n  width: 260px;\n  height: 180px;\n}\n.imgright {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 10px;\n  position: absolute;\n  left: 520px;\n  top: 180px;\n  width: 260px;\n  height: 180px;\n  text-align: right;\n}\n.wordright {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 10px;\n  position: absolute;\n  left: 750px;\n  top: 180px;\n  width: 250px;\n  height: 180px;\n}\n.circleTop {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: green;\n  position: absolute;\n  left: 496.5px;\n  top: 95px;\n}\n.circleBottom {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: green;\n  position: absolute;\n  left: 496.5px;\n  top: 260px;\n}\n.line {\n  height: 330px;\n  width: 3px;\n  background-color: green;\n  position: absolute;\n  left: 500px;\n  top: 100px;\n}\n.w {\n  width: 60%;\n  margin: 30px auto 0;\n}\n"], sourceRoot: "" }]);
  }, 62: function (t, n, A) {
    var e = A(51);"string" == typeof e && (e = [[t.i, e, ""]]), e.locals && (t.exports = e.locals);A(30)("81b59eda", e, !0);
  } });
//# sourceMappingURL=6.eb05772a3fc302a17b38.js.map

//# sourceMappingURL=6.eb05772a3fc302a17b38-compiled.js.map

//# sourceMappingURL=6.eb05772a3fc302a17b38-compiled-compiled.js.map