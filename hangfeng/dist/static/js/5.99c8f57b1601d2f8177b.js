webpackJsonp([5],{"98rb":function(t,n,a){t.exports=a.p+"static/img/about_banner.1e816f1.jpg"},Gwwx:function(t,n,a){"use strict";var i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return t.mydata.title?a("div",{staticClass:"about"},[a("div",{staticClass:"banner"},t._l(t.mydata.title,function(n){return a("p",[t._v(t._s(n))])})),t._v(" "),a("div",{staticClass:"intro"},[a("div",[t._m(0),t._v(" "),a("div",[a("div",{domProps:{innerHTML:t._s(t.title)}}),t._v(" "),t._l(t.desc,function(n){return a("p",[t._v(t._s(n))])})],2),t._v(" "),a("p",{staticStyle:{clear:"both"}})])]),t._v(" "),a("div",{staticClass:"router"},[a("div",[t._v(t._s(t.mydata.router.title))]),t._v(" "),a("p",[t._v(t._s(t.mydata.router.desc))]),t._v(" "),a("div",t._l(t.mydata.router.nav,function(n,i){return a("span",{class:{active:i==t.navIndex},on:{click:function(n){t.chgIndex(i)}}},[t._v("\n        "+t._s(n.title)+"\n      ")])})),t._v(" "),a("router-view",{attrs:{data:t.mydata.router.data,lang:t.lang}})],1)]):t._e()},A=[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",[i("img",{attrs:{src:a("OU5M"),width:"100%"}})])}],o={render:i,staticRenderFns:A};n.a=o},HhUg:function(t,n,a){t.exports=a.p+"static/img/hangfeng_text_bg.9d62082.jpg"},IQTo:function(t,n,a){"use strict";n.a={props:["lang"],data:function(){return{mydata:{},navIndex:0,title:"",desc:[]}},created:function(){this.$parent.isWhite=!1,this.$parent.navIndex=1;var t=this;$.ajax({url:"http://"+this.lang+".hangfeng.mandokg.com/api/v1/about",success:function(n){t.mydata=n,t.title=n.intro[0];var a=n.intro[1].split("<");t.desc.push(a[1].slice(2)),t.desc.push(a[3].slice(2)),t.$nextTick(function(){this.$parent.showFoot=!0})}})},methods:{chgIndex:function(t){this.navIndex=t,0==t?this.$router.push("/about/show"):1==t?this.$router.push("/about/honor"):2==t?this.$router.push("/about/partner"):3==t?this.$router.push("/about/culture"):this.$router.push("/about/dev")}},destroyed:function(){this.$parent.showFoot=!1}}},OU5M:function(t,n,a){t.exports=a.p+"static/img/about.1cdd67d.jpg"},Xfd6:function(t,n,a){n=t.exports=a("BkJT")(!0),n.push([t.i,".intro>div>div[data-v-22948a46]:first-child{-webkit-animation:fadeInLeft .5s 1s both;animation:fadeInLeft .5s 1s both}.intro>div>div[data-v-22948a46]:nth-child(2){-webkit-animation:fadeInRight .5s 1.5s both;animation:fadeInRight .5s 1.5s both}.banner[data-v-22948a46]{width:100%;height:11vw;background:url("+a("98rb")+");background-size:cover;background-position-x:center;background-position-y:25%;color:#fff;text-align:center;padding-top:14vw}.banner p[data-v-22948a46]:first-child{font-size:2vw;font-family:站酷高端黑;letter-spacing:1px}.banner p[data-v-22948a46]:nth-child(2){margin-top:2vw;font-size:1vw}.intro[data-v-22948a46]{width:100%;height:21vw;background-image:url("+a("HhUg")+");background-size:100%;background-position:bottom}.intro>div[data-v-22948a46]{width:60%;margin:7vw auto 0}.intro>div>div[data-v-22948a46]{float:left}.intro>div>div[data-v-22948a46]:first-child{width:38%}.intro>div>div[data-v-22948a46]:nth-child(2){width:59%;padding-left:1.5vw}.intro>div>div>div[data-v-22948a46]{font-size:1.5vw;color:#333;margin-bottom:1.5vw}.intro>div>div p[data-v-22948a46]{font-size:.8vw;color:#aaa;line-height:1.5vw;margin-top:1vw}.router[data-v-22948a46]{margin-top:5vw;text-align:center;position:relative}.router>div[data-v-22948a46]:first-child{font-size:1.8vw;font-weight:700;color:#333}.router>p[data-v-22948a46]{font-size:1vw;color:#666;margin-top:.5vw;margin-bottom:2.5vw}.router>div span[data-v-22948a46]{font-size:.8vw;padding:.5vw 0;color:#333;margin-left:3.3vw;font-weight:400;cursor:pointer}.router>div span[data-v-22948a46]:first-child{margin-left:0}.router>div .active[data-v-22948a46]{color:#008be8;border-bottom:2px solid #008be8;border-top:2px solid #008be8}@media screen and (max-width:1400px){.intro>div[data-v-22948a46]{width:75%}.intro>div>div>div[data-v-22948a46]{margin-top:1vw}}@media screen and (max-width:990px){.intro>div[data-v-22948a46]{width:90%}.intro>div>div>div[data-v-22948a46]{margin-top:0;font-size:2vw;color:#333;margin-bottom:1.5vw}.intro>div>div p[data-v-22948a46]{font-size:1.5vw;color:#aaa;line-height:2vw;margin-top:1vw}}@media screen and (max-width:767px){.banner[data-v-22948a46]{height:22vw;padding-top:28vw}.banner p[data-v-22948a46]:first-child{font-size:6vw;font-family:站酷高端黑;letter-spacing:1px}.banner p[data-v-22948a46]:nth-child(2){margin-top:2vw;font-size:1vw}.intro[data-v-22948a46]{height:auto}.intro>div>div[data-v-22948a46]:first-child{width:100%}.intro>div>div[data-v-22948a46]:nth-child(2){width:100%;padding-left:1.5vw}.intro>div>div>div[data-v-22948a46]{font-size:5.5vw;color:#333;margin-bottom:3vw;text-align:center}.intro>div>div p[data-v-22948a46]{font-size:3.5vw;color:#aaa;line-height:5vw;margin-top:2vw}.router[data-v-22948a46]{margin-top:10vw;margin-bottom:7vw}.router>div[data-v-22948a46]:first-child{font-size:5.5vw}.router>p[data-v-22948a46]{font-size:4.2vw;margin-bottom:5vw}.router>div[data-v-22948a46]:nth-child(3){margin-bottom:7vw}.router>div span[data-v-22948a46]{font-size:2vw!important;padding:.5vw 0;color:#333;margin-left:3.3vw;font-weight:400;cursor:pointer}}","",{version:3,sources:["D:/sublime/hangfeng/src/components/about.vue"],names:[],mappings:"AACA,4CACE,yCAA0C,AAClC,gCAAkC,CAC3C,AACD,6CACE,4CAA6C,AACrC,mCAAqC,CAC9C,AACD,yBACE,WAAY,AACZ,YAAa,AACb,yCAAgD,AAChD,sBAAuB,AACvB,6BAA8B,AAC9B,0BAA2B,AAC3B,WAAY,AACZ,kBAAmB,AACnB,gBAAiB,CAClB,AACD,uCACE,cAAe,AACf,kBAAmB,AACnB,kBAAoB,CACrB,AACD,wCACE,eAAgB,AAChB,aAAe,CAChB,AACD,wBACE,WAAY,AACZ,YAAa,AACb,+CAA0D,AAC1D,qBAAsB,AACtB,0BAA4B,CAC7B,AACD,4BACE,UAAW,AACX,iBAAmB,CACpB,AACD,gCACE,UAAY,CACb,AACD,4CACE,SAAW,CACZ,AACD,6CACE,UAAW,AACX,kBAAoB,CACrB,AACD,oCACE,gBAAiB,AACjB,WAAY,AACZ,mBAAqB,CACtB,AACD,kCACE,eAAgB,AAChB,WAAe,AACf,kBAAmB,AACnB,cAAgB,CACjB,AACD,yBACE,eAAgB,AAChB,kBAAmB,AACnB,iBAAmB,CACpB,AACD,yCACE,gBAAiB,AACjB,gBAAkB,AAClB,UAAY,CACb,AACD,2BACE,cAAe,AACf,WAAY,AACZ,gBAAiB,AACjB,mBAAqB,CACtB,AACD,kCACE,eAAgB,AAChB,eAAgB,AAChB,WAAY,AACZ,kBAAmB,AACnB,gBAAoB,AACpB,cAAgB,CACjB,AACD,8CACE,aAAe,CAChB,AACD,qCACE,cAAe,AACf,gCAAiC,AACjC,4BAA8B,CAC/B,AACD,qCACA,4BACI,SAAW,CACd,AACD,oCACI,cAAgB,CACnB,CACA,AACD,oCACA,4BACI,SAAW,CACd,AACD,oCACI,aAAc,AACd,cAAe,AACf,WAAY,AACZ,mBAAqB,CACxB,AACD,kCACI,gBAAiB,AACjB,WAAe,AACf,gBAAiB,AACjB,cAAgB,CACnB,CACA,AACD,oCACA,yBACI,YAAa,AACb,gBAAkB,CACrB,AACD,uCACI,cAAe,AACf,kBAAmB,AACnB,kBAAoB,CACvB,AACD,wCACI,eAAgB,AAChB,aAAe,CAClB,AACD,wBACI,WAAa,CAChB,AACD,4CACI,UAAY,CACf,AACD,6CACI,WAAY,AACZ,kBAAoB,CACvB,AACD,oCACI,gBAAiB,AACjB,WAAY,AACZ,kBAAmB,AACnB,iBAAmB,CACtB,AACD,kCACI,gBAAiB,AACjB,WAAe,AACf,gBAAiB,AACjB,cAAgB,CACnB,AACD,yBACI,gBAAiB,AACjB,iBAAmB,CACtB,AACD,yCACI,eAAiB,CACpB,AACD,2BACI,gBAAiB,AACjB,iBAAmB,CACtB,AACD,0CACI,iBAAmB,CACtB,AACD,kCACI,wBAA0B,AAC1B,eAAgB,AAChB,WAAY,AACZ,kBAAmB,AACnB,gBAAoB,AACpB,cAAgB,CACnB,CACA",file:"about.vue",sourcesContent:["\n.intro>div>div[data-v-22948a46]:nth-child(1){\n  -webkit-animation: fadeInLeft .5s 1s both;\n          animation: fadeInLeft .5s 1s both;\n}\n.intro>div>div[data-v-22948a46]:nth-child(2){\n  -webkit-animation: fadeInRight .5s 1.5s both;\n          animation: fadeInRight .5s 1.5s both;\n}\n.banner[data-v-22948a46]{\n  width: 100%;\n  height: 11vw;\n  background: url(../assets/img/about_banner.jpg);\n  background-size: cover;\n  background-position-x: center;\n  background-position-y: 25%;\n  color: #fff;\n  text-align: center;\n  padding-top: 14vw\n}\n.banner p[data-v-22948a46]:nth-child(1){\n  font-size: 2vw;\n  font-family: 站酷高端黑;\n  letter-spacing: 1px;\n}\n.banner p[data-v-22948a46]:nth-child(2){\n  margin-top: 2vw;\n  font-size: 1vw;\n}\n.intro[data-v-22948a46]{\n  width: 100%;\n  height: 21vw;\n  background-image: url(../assets/img/hangfeng_text_bg.jpg);\n  background-size: 100%;\n  background-position: bottom;\n}\n.intro>div[data-v-22948a46]{\n  width: 60%;\n  margin: 7vw auto 0;\n}\n.intro>div>div[data-v-22948a46]{\n  float: left;\n}\n.intro>div>div[data-v-22948a46]:nth-child(1){\n  width: 38%;\n}\n.intro>div>div[data-v-22948a46]:nth-child(2){\n  width: 59%;\n  padding-left: 1.5vw;\n}\n.intro>div>div>div[data-v-22948a46]{\n  font-size: 1.5vw;\n  color: #333;\n  margin-bottom: 1.5vw;\n}\n.intro>div>div p[data-v-22948a46]{\n  font-size: .8vw;\n  color: #aaaaaa;\n  line-height: 1.5vw;\n  margin-top: 1vw;\n}\n.router[data-v-22948a46]{\n  margin-top: 5vw;\n  text-align: center;\n  position: relative;\n}\n.router>div[data-v-22948a46]:nth-child(1){\n  font-size: 1.8vw;\n  font-weight: bold;\n  color: #333;\n}\n.router>p[data-v-22948a46]{\n  font-size: 1vw;\n  color: #666;\n  margin-top: .5vw;\n  margin-bottom: 2.5vw;\n}\n.router>div span[data-v-22948a46]{\n  font-size: .8vw;\n  padding: .5vw 0;\n  color: #333;\n  margin-left: 3.3vw;\n  font-weight: normal;\n  cursor: pointer;\n}\n.router>div span[data-v-22948a46]:nth-child(1){\n  margin-left: 0;\n}\n.router>div .active[data-v-22948a46]{\n  color: #008be8;\n  border-bottom: 2px solid #008be8;\n  border-top: 2px solid #008be8;\n}\n@media screen and (max-width:1400px){\n.intro>div[data-v-22948a46]{\n    width: 75%;\n}\n.intro>div>div>div[data-v-22948a46]{\n    margin-top: 1vw;\n}\n}\n@media screen and (max-width:990px){\n.intro>div[data-v-22948a46]{\n    width: 90%;\n}\n.intro>div>div>div[data-v-22948a46]{\n    margin-top: 0;\n    font-size: 2vw;\n    color: #333;\n    margin-bottom: 1.5vw;\n}\n.intro>div>div p[data-v-22948a46]{\n    font-size: 1.5vw;\n    color: #aaaaaa;\n    line-height: 2vw;\n    margin-top: 1vw;\n}\n}\n@media screen and (max-width:767px){\n.banner[data-v-22948a46]{\n    height: 22vw;\n    padding-top: 28vw;\n}\n.banner p[data-v-22948a46]:nth-child(1){\n    font-size: 6vw;\n    font-family: 站酷高端黑;\n    letter-spacing: 1px;\n}\n.banner p[data-v-22948a46]:nth-child(2){\n    margin-top: 2vw;\n    font-size: 1vw;\n}\n.intro[data-v-22948a46]{\n    height: auto;\n}\n.intro>div>div[data-v-22948a46]:nth-child(1){\n    width: 100%;\n}\n.intro>div>div[data-v-22948a46]:nth-child(2){\n    width: 100%;\n    padding-left: 1.5vw;\n}\n.intro>div>div>div[data-v-22948a46]{\n    font-size: 5.5vw;\n    color: #333;\n    margin-bottom: 3vw;\n    text-align: center;\n}\n.intro>div>div p[data-v-22948a46]{\n    font-size: 3.5vw;\n    color: #aaaaaa;\n    line-height: 5vw;\n    margin-top: 2vw;\n}\n.router[data-v-22948a46]{\n    margin-top: 10vw;\n    margin-bottom: 7vw;\n}\n.router>div[data-v-22948a46]:nth-child(1){\n    font-size: 5.5vw;\n}\n.router>p[data-v-22948a46]{\n    font-size: 4.2vw;\n    margin-bottom: 5vw;\n}\n.router>div[data-v-22948a46]:nth-child(3){\n    margin-bottom: 7vw;\n}\n.router>div span[data-v-22948a46]{\n    font-size: 2vw !important;\n    padding: .5vw 0;\n    color: #333;\n    margin-left: 3.3vw;\n    font-weight: normal;\n    cursor: pointer;\n}\n}\n"],sourceRoot:""}])},daIc:function(t,n,a){var i=a("Xfd6");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("8bSs")("6ac4a280",i,!0)},zRCK:function(t,n,a){"use strict";function i(t){a("daIc")}Object.defineProperty(n,"__esModule",{value:!0});var A=a("IQTo"),o=a("Gwwx"),d=a("46Yf"),e=i,r=d(A.a,o.a,!1,e,"data-v-22948a46",null);n.default=r.exports}});
//# sourceMappingURL=5.99c8f57b1601d2f8177b.js.map