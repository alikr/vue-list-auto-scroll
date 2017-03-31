webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(11);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{ path: '/', component: _index2.default }];
module.exports = exports['default'];

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(9)

var Component = __webpack_require__(3)(
  /* script */
  null,
  /* template */
  __webpack_require__(12),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/web/github/vue-list-order/src/app/main.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] main.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0ad22a7d", Component.options)
  } else {
    hotAPI.reload("data-v-0ad22a7d", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	components: {},
	data: function data() {
		return {
			current: 0,
			data: [{ name: 'title_' + 1, value: 1 }, { name: 'title_' + 2, value: 2 }, { name: 'title_' + 3, value: 3 }, { name: 'title_' + 4, value: 4 }, { name: 'title_' + 5, value: 5 }, { name: 'title_' + 6, value: 6 }, { name: 'title_' + 7, value: 7 }, { name: 'title_' + 8, value: 8 }, { name: 'title_' + 9, value: 9 }, { name: 'title_' + 10, value: 10 }]
		};
	},
	mounted: function mounted() {
		var _this = this;

		var box = this.$el;
		var table = box.querySelector('.table');
		var boxH = box.offsetHeight;
		var itemH = table.offsetHeight / this.data.length;
		var itemSize = Math.ceil(boxH / itemH);

		var fixH = (1 - boxH / (itemH * itemSize)) * boxH;
		setInterval(function () {
			var total = _this.data.length;
			var preC = _this.current;
			var current = _this.current = preC < total - 1 ? preC + 1 : 0;
			box.scrollTop = current == 0 ? (_this.current = 0, 0) : current >= itemSize && current < total ? (current - itemSize + 1) * itemH + fixH : 0;
		}, 1000);
	}
};
module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(10)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(13),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/web/github/vue-list-order/src/components/home/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4ecaf8d6", Component.options)
  } else {
    hotAPI.reload("data-v-4ecaf8d6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('router-view')
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0ad22a7d", module.exports)
  }
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "box"
  }, [_c('table', {
    staticClass: "table"
  }, _vm._l((_vm.data), function(item, index) {
    return _c('tr', _vm._l((item), function(t, key) {
      return _c('td', [(key == 'name' && index == _vm.current) ? [_c('div', {
        staticClass: "sel"
      })] : _vm._e(), _vm._v("\n\t\t\t\t" + _vm._s(t) + "\n\t\t\t")], 2)
    }))
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4ecaf8d6", module.exports)
  }
}

/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(1);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _routes = __webpack_require__(5);

var _routes2 = _interopRequireDefault(_routes);

var _main = __webpack_require__(7);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

var router = new _vueRouter2.default({
	mode: 'history',
	base: __dirname,
	routes: _routes2.default
});

var app = new _vue2.default({
	el: '#app',
	router: router,
	render: function render(h) {
		return h(_main2.default);
	}
});
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ })
],[15]);