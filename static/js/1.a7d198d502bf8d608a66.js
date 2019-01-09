webpackJsonp([1,6],{40:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{loadingText:"数据加载中...",finishText:"没有更多数据了",errorText:"出错了，请点击重试"}}}},44:function(t,e){},46:function(t,e,i){var a,s;i(44),a=i(40);var n=i(49);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=n.render,s.staticRenderFns=n.staticRenderFns,s._scopeId="data-v-76da220c",t.exports=a},49:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"list_bottom"},[i("span",{staticClass:"text"},[t._v(t._s(t.loadingText))])])},staticRenderFns:[]}},131:function(t,e){"use strict";var i={toFriendlyTime:function(t){var e=1469695314,i=e-t,a=parseInt(i/86400),s="";return a>=180?s=a<=360?"半年前":Math.ceil(a/360)+"年前":a>30?s=parseInt(a/30)+"个月前":a>=7&&a<=30?s=parseInt(a/7)+"周前":i<30?s="刚刚":i<60?s=Math.floor(i)+"秒前":i<3600?s=Math.floor(i/60)+"分钟前":i<86400?s=Math.floor(i/3600)+"小时前":i<604800&&(s=a<2?"昨天":a<3?"前天":a+"天前"),s}};t.exports=i},140:function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(10),n=a(s),o=(i(4),i(75)),r=a(o),d=i(46),l=a(d),f=i(131),c=a(f),p=i(6);e.default={data:function(){return{loading:!1}},mounted:function(){this.$store.dispatch("setPageInfo",{headerTitle:"消息中心",left:{className:"back"},right:{hide:!0}})},computed:(0,n.default)({},(0,p.mapGetters)({listData:"getMessageListGet",hasMore:"hasMore"})),components:{MugenScroll:r.default,listBottom:l.default},filters:{toFriendlyTime:c.default.toFriendlyTime},methods:{fetchData:function(){var t=this;if(!this.loading){if(this.loading=!0,!this.hasMore)return this.finishAction(),!1;this.$store.dispatch("getMessageList"),setTimeout(function(){t.loading=!1},0)}},finishAction:function(){this.loading=!0,this.$refs.listBottom.$el.children[0].classList.add("finished"),this.$refs.listBottom.$el.children[0].textContent=this.$refs.listBottom.$data.finishText}}}},191:function(t,e,i){e=t.exports=i(73)(),e.push([t.id,'.fixed{position:fixed;left:0;width:100%}.messageList a .title span,.relative{position:relative}.bg_white{background:#fff}.pointer{cursor:pointer}.block{display:block}.none{display:none}.inline_block{display:inline-block}.cover{background-size:cover!important}.contain{background-size:contain!important}.clearfix:after{content:"";display:block;height:0;clear:both;visibility:hidden}.clearfix{zoom:1}.float_left{float:left}.float_right{float:right}.padding_l_r_24{padding:0 .32rem}.padding_24{padding:.32rem}.padding_b_120{padding-bottom:1.6rem}.padding_t_122{padding-top:1.6rem}.padding_tb_120{padding:1.62667rem 0 1.6rem}.padding_tb_100{padding:1.62667rem 0 1.33333rem}.margin_b_20{margin-bottom:.26667rem}.text_center{text-align:center}.text_right{text-align:right}.flex{display:-ms-flexbox;display:flex}.flex.flex_v_center{-ms-flex-align:center;align-items:center}.flex .flex_item{-ms-flex:1;flex:1}.xoverflow_scroll{overflow-x:auto;-webkit-overflow-scrolling:touch}.messageList li{padding-left:.32rem}.messageList li:last-child a{border-bottom:none}.messageList a{font-size:15px;color:#424242;padding:.26667rem .32rem .26667rem 0;border-bottom:1px solid #e1e9f0}[data-dpr="2"] .messageList a{font-size:30px}[data-dpr="2.5"] .messageList a{font-size:38px}[data-dpr="2.75"] .messageList a{font-size:41px}[data-dpr="3"] .messageList a{font-size:45px}[data-dpr="4"] .messageList a{font-size:60px}.messageList a .time{font-size:11px;color:#9e9e9e}[data-dpr="2"] .messageList a .time{font-size:22px}[data-dpr="2.5"] .messageList a .time{font-size:28px}[data-dpr="2.75"] .messageList a .time{font-size:30px}[data-dpr="3"] .messageList a .time{font-size:33px}[data-dpr="4"] .messageList a .time{font-size:44px}.messageList a .detail{padding-top:.13333rem}.messageList a .title span[data-count]:after{content:attr(data-count);position:absolute;right:-.16rem;top:-.08rem;font-size:9px;width:.24rem;height:.24rem;line-height:.24rem;text-align:center;text-indent:-9999em;border-radius:50%;color:#fff;background:#fc5d7b}.messageList a .title span[data-count="0"]:after{display:none}',""])},200:function(t,e,i){var a=i(191);"string"==typeof a&&(a=[[t.id,a,""]]);i(87)(a,{});a.locals&&(t.exports=a.locals)},250:function(t,e,i){var a,s;i(200),a=i(140);var n=i(265);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=n.render,s.staticRenderFns=n.staticRenderFns,t.exports=a},265:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container messageList"},[i("ul",{staticClass:"bg_white"},t._l(t.listData,function(e){return i("li",[i("a",{attrs:{href:"javascript:void(0)"}},[i("h1",{staticClass:"top flex flex_v_center"},[i("div",{staticClass:"title flex_item"},[i("span",{attrs:{"data-count":"1"}},[t._v(t._s(e.title))])]),t._v(" "),i("div",{staticClass:"time"},[i("time",[t._v(t._s(t._f("toFriendlyTime")(e.create_time)))])])]),t._v(" "),i("p",{staticClass:"detail"},[t._v(t._s(e.content))])])])}),0),t._v(" "),i("mugen-scroll",{attrs:{handler:t.fetchData,"should-handle":!t.loading}},[i("list-bottom",{ref:"listBottom"})],1)],1)},staticRenderFns:[]}}});