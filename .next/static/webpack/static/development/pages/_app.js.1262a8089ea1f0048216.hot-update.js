webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./reducers/Spotify.js":
/*!*****************************!*\
  !*** ./reducers/Spotify.js ***!
  \*****************************/
/*! exports provided: initialState, Spotify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spotify", function() { return Spotify; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

var initialState = {
  user: {},
  bearer: "",
  accessToken: {}
};
var Spotify = function Spotify() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "UserMe":
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        user: action.value
      });

    case "SetAccessToken":
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        accessToken: action.value
      });

    default:
      return state;
  }
};

/***/ })

})
//# sourceMappingURL=_app.js.1262a8089ea1f0048216.hot-update.js.map