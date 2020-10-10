webpackHotUpdate_N_E("pages/progressbar",{

/***/ "./pages/progressbar.js":
/*!******************************!*\
  !*** ./pages/progressbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/icons */ \"./components/icons.js\");\nvar _jsxFileName = \"/Users/fox/Documents/Next/bitcoin-app/pages/progressbar.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nfunction App() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      progress = _useState[0],\n      setProgress = _useState[1];\n\n  var articleRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useLayoutEffect\"])(function () {\n    var updateHeight = function updateHeight() {\n      if (!articleRef.current) return;\n\n      var _articleRef$current$g = articleRef.current.getBoundingClientRect(),\n          height = _articleRef$current$g.height;\n\n      setProgress(window.scrollY / (height - window.innerHeight));\n    };\n\n    updateHeight();\n    window.addEventListener(\"scroll\", updateHeight);\n    return function () {\n      window.removeEventListener(\"scroll\", updateHeight);\n    };\n  }, []);\n  var position = Math.max(1 - progress, 0);\n  var complete = position === 0;\n  var notMoved = position === 1; // Radius is derived from our desired strokeWidth\n  // If radius is exactly half diameter then the stroke will sit right on the edge and expand in both directions\n  // We want it to sit on the inside so we need to do some offset. So half the stroke width we need to subtract from the radius\n  // If we wanted it on the outside we could add the stroke width but then you'll need to adjust your circle size to be that much larger\n\n  var DIAMETER = 400;\n  var STROKE_WIDTH = 50;\n  var RADIUS = DIAMETER / 2 - STROKE_WIDTH / 2;\n  var CIRCUMFERENCE = Math.PI * RADIUS * 2;\n  return __jsx(\"div\", {\n    className: \"jsx-504122985\" + \" \" + \"App\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    ref: articleRef,\n    className: \"jsx-504122985\" + \" \" + \"article\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-504122985\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: {\n      position: \"fixed\",\n      top: '50px',\n      right: '50px'\n    },\n    className: \"jsx-504122985\" + \" \" + \"button\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }, complete ? __jsx(_components_icons__WEBPACK_IMPORTED_MODULE_2__[\"CheckMark\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 23\n    }\n  }) : __jsx(_components_icons__WEBPACK_IMPORTED_MODULE_2__[\"Close\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 39\n    }\n  })), __jsx(\"button\", {\n    style: {\n      position: \"fixed\"\n    },\n    className: \"jsx-504122985\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 11\n    }\n  }, !notMoved && __jsx(\"svg\", {\n    viewBox: \"0 0 400 400\",\n    className: \"jsx-504122985\" + \" \" + \"circle-progress\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 15\n    }\n  }, __jsx(\"circle\", {\n    cx: DIAMETER / 2,\n    cy: DIAMETER / 2,\n    r: RADIUS,\n    stroke: \"tomato\",\n    fill: \"transparent\",\n    strokeWidth: STROKE_WIDTH,\n    style: {\n      strokeDasharray: CIRCUMFERENCE,\n      strokeDashoffset: CIRCUMFERENCE * position\n    },\n    className: \"jsx-504122985\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 17\n    }\n  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"504122985\",\n    __self: this\n  }, \".article.jsx-504122985{height:600vh;background:linear-gradient(to bottom,#1e5799 0%,#7db9e8 100%);}button.jsx-504122985{width:50%;height:50%;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.circle-progress.jsx-504122985{position:absolute;left:0;top:0;width:50%;max-width:500px;max-height:500px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mb3gvRG9jdW1lbnRzL05leHQvYml0Y29pbi1hcHAvcGFnZXMvcHJvZ3Jlc3NiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0VrQixBQUlzQixBQUtILEFBUVEsVUFQUCxHQUxxRCxLQWF6RCxHQVBDLElBUUYsSUFQRyxFQVFDLE9BUHNCLEdBUWhCLGdCQUNDLGlCQUNuQixDQWpCQSxvRUFRQSIsImZpbGUiOiIvVXNlcnMvZm94L0RvY3VtZW50cy9OZXh0L2JpdGNvaW4tYXBwL3BhZ2VzL3Byb2dyZXNzYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2hlY2tNYXJrLCBDbG9zZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2ljb25zXCI7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgYXJ0aWNsZVJlZiA9IHVzZVJlZigpO1xuXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdXBkYXRlSGVpZ2h0ID0gKCkgPT4ge1xuICAgICAgaWYgKCFhcnRpY2xlUmVmLmN1cnJlbnQpIHJldHVybjtcblxuICAgICAgY29uc3QgeyBoZWlnaHQgfSA9IGFydGljbGVSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgc2V0UHJvZ3Jlc3Mod2luZG93LnNjcm9sbFkgLyAoaGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0KSk7XG4gICAgfTtcblxuICAgIHVwZGF0ZUhlaWdodCgpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdXBkYXRlSGVpZ2h0KTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdXBkYXRlSGVpZ2h0KTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgY29uc3QgcG9zaXRpb24gPSBNYXRoLm1heCgxIC0gcHJvZ3Jlc3MsIDApO1xuICBjb25zdCBjb21wbGV0ZSA9IHBvc2l0aW9uID09PSAwO1xuICBjb25zdCBub3RNb3ZlZCA9IHBvc2l0aW9uID09PSAxO1xuXG4gIC8vIFJhZGl1cyBpcyBkZXJpdmVkIGZyb20gb3VyIGRlc2lyZWQgc3Ryb2tlV2lkdGhcbiAgLy8gSWYgcmFkaXVzIGlzIGV4YWN0bHkgaGFsZiBkaWFtZXRlciB0aGVuIHRoZSBzdHJva2Ugd2lsbCBzaXQgcmlnaHQgb24gdGhlIGVkZ2UgYW5kIGV4cGFuZCBpbiBib3RoIGRpcmVjdGlvbnNcbiAgLy8gV2Ugd2FudCBpdCB0byBzaXQgb24gdGhlIGluc2lkZSBzbyB3ZSBuZWVkIHRvIGRvIHNvbWUgb2Zmc2V0LiBTbyBoYWxmIHRoZSBzdHJva2Ugd2lkdGggd2UgbmVlZCB0byBzdWJ0cmFjdCBmcm9tIHRoZSByYWRpdXNcbiAgLy8gSWYgd2Ugd2FudGVkIGl0IG9uIHRoZSBvdXRzaWRlIHdlIGNvdWxkIGFkZCB0aGUgc3Ryb2tlIHdpZHRoIGJ1dCB0aGVuIHlvdSdsbCBuZWVkIHRvIGFkanVzdCB5b3VyIGNpcmNsZSBzaXplIHRvIGJlIHRoYXQgbXVjaCBsYXJnZXJcbiAgY29uc3QgRElBTUVURVIgPSA0MDA7XG4gIGNvbnN0IFNUUk9LRV9XSURUSCA9IDUwO1xuICBjb25zdCBSQURJVVMgPSBESUFNRVRFUiAvIDIgLSBTVFJPS0VfV0lEVEggLyAyO1xuICBjb25zdCBDSVJDVU1GRVJFTkNFID0gTWF0aC5QSSAqIFJBRElVUyAqIDI7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlXCIgcmVmPXthcnRpY2xlUmVmfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IFxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgICAgICB0b3A6ICc1MHB4JyxcbiAgICAgICAgICAgIHJpZ2h0OiAnNTBweCcsXG4gICAgICAgICAgICBcbiAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICB7Y29tcGxldGUgPyA8Q2hlY2tNYXJrIC8+IDogPENsb3NlIC8+fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHshbm90TW92ZWQgJiYgKFxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA0MDAgNDAwXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaXJjbGUtcHJvZ3Jlc3NcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgICAgY3g9e0RJQU1FVEVSIC8gMn1cbiAgICAgICAgICAgICAgICAgIGN5PXtESUFNRVRFUiAvIDJ9XG4gICAgICAgICAgICAgICAgICByPXtSQURJVVN9XG4gICAgICAgICAgICAgICAgICBzdHJva2U9XCJ0b21hdG9cIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXtTVFJPS0VfV0lEVEh9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBzdHJva2VEYXNoYXJyYXk6IENJUkNVTUZFUkVOQ0UsXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IENJUkNVTUZFUkVOQ0UgKiBwb3NpdGlvblxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgIC5hcnRpY2xlIHtcbiAgICAgICAgaGVpZ2h0OiA2MDB2aDtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzFlNTc5OSAwJSwgIzdkYjllOCAxMDAlKTtcbiAgICAgIH1cblxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgfVxuXG4gICAgICAuY2lyY2xlLXByb2dyZXNzIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl19 */\\n/*@ sourceURL=/Users/fox/Documents/Next/bitcoin-app/pages/progressbar.js */\"));\n}\n\n_s(App, \"xyOpG6Nh1OTC/BM78AS3Qom7KGk=\");\n\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZ3Jlc3NiYXIuanM/OGNkZiJdLCJuYW1lcyI6WyJBcHAiLCJ1c2VTdGF0ZSIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJhcnRpY2xlUmVmIiwidXNlUmVmIiwidXNlTGF5b3V0RWZmZWN0IiwidXBkYXRlSGVpZ2h0IiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhlaWdodCIsIndpbmRvdyIsInNjcm9sbFkiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicG9zaXRpb24iLCJNYXRoIiwibWF4IiwiY29tcGxldGUiLCJub3RNb3ZlZCIsIkRJQU1FVEVSIiwiU1RST0tFX1dJRFRIIiwiUkFESVVTIiwiQ0lSQ1VNRkVSRU5DRSIsIlBJIiwidG9wIiwicmlnaHQiLCJzdHJva2VEYXNoYXJyYXkiLCJzdHJva2VEYXNob2Zmc2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsR0FBVCxHQUFlO0FBQUE7O0FBQUEsa0JBQ21CQyxzREFBUSxDQUFDLENBQUQsQ0FEM0I7QUFBQSxNQUNOQyxRQURNO0FBQUEsTUFDSUMsV0FESjs7QUFFYixNQUFNQyxVQUFVLEdBQUdDLG9EQUFNLEVBQXpCO0FBRUFDLCtEQUFlLENBQUMsWUFBTTtBQUNwQixRQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLFVBQUksQ0FBQ0gsVUFBVSxDQUFDSSxPQUFoQixFQUF5Qjs7QUFEQSxrQ0FHTkosVUFBVSxDQUFDSSxPQUFYLENBQW1CQyxxQkFBbkIsRUFITTtBQUFBLFVBR2pCQyxNQUhpQix5QkFHakJBLE1BSGlCOztBQUt6QlAsaUJBQVcsQ0FBQ1EsTUFBTSxDQUFDQyxPQUFQLElBQWtCRixNQUFNLEdBQUdDLE1BQU0sQ0FBQ0UsV0FBbEMsQ0FBRCxDQUFYO0FBQ0QsS0FORDs7QUFRQU4sZ0JBQVk7QUFFWkksVUFBTSxDQUFDRyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ1AsWUFBbEM7QUFDQSxXQUFPLFlBQU07QUFDWEksWUFBTSxDQUFDSSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ1IsWUFBckM7QUFDRCxLQUZEO0FBR0QsR0FmYyxFQWVaLEVBZlksQ0FBZjtBQWlCQSxNQUFNUyxRQUFRLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLElBQUloQixRQUFiLEVBQXVCLENBQXZCLENBQWpCO0FBQ0EsTUFBTWlCLFFBQVEsR0FBR0gsUUFBUSxLQUFLLENBQTlCO0FBQ0EsTUFBTUksUUFBUSxHQUFHSixRQUFRLEtBQUssQ0FBOUIsQ0F2QmEsQ0F5QmI7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUssUUFBUSxHQUFHLEdBQWpCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLEVBQXJCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHRixRQUFRLEdBQUcsQ0FBWCxHQUFlQyxZQUFZLEdBQUcsQ0FBN0M7QUFDQSxNQUFNRSxhQUFhLEdBQUdQLElBQUksQ0FBQ1EsRUFBTCxHQUFVRixNQUFWLEdBQW1CLENBQXpDO0FBRUEsU0FDRTtBQUFBLHVDQUFlLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQXlCLE9BQUcsRUFBRW5CLFVBQTlCO0FBQUEsdUNBQWUsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFFQSxTQUFLLEVBQUU7QUFDTFksY0FBUSxFQUFFLE9BREw7QUFFTFUsU0FBRyxFQUFFLE1BRkE7QUFHTEMsV0FBSyxFQUFFO0FBSEYsS0FGUDtBQUFBLHVDQUNVLFFBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNDUixRQUFRLEdBQUcsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUgsR0FBbUIsTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVDVCLENBREYsRUFZRTtBQUNFLFNBQUssRUFBRTtBQUNMSCxjQUFRLEVBQUU7QUFETCxLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtHLENBQUNJLFFBQUQsSUFDQztBQUNFLFdBQU8sRUFBQyxhQURWO0FBQUEsdUNBRVksaUJBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFO0FBQ0UsTUFBRSxFQUFFQyxRQUFRLEdBQUcsQ0FEakI7QUFFRSxNQUFFLEVBQUVBLFFBQVEsR0FBRyxDQUZqQjtBQUdFLEtBQUMsRUFBRUUsTUFITDtBQUlFLFVBQU0sRUFBQyxRQUpUO0FBS0UsUUFBSSxFQUFDLGFBTFA7QUFNRSxlQUFXLEVBQUVELFlBTmY7QUFPRSxTQUFLLEVBQUU7QUFDTE0scUJBQWUsRUFBRUosYUFEWjtBQUVMSyxzQkFBZ0IsRUFBRUwsYUFBYSxHQUFHUjtBQUY3QixLQVBUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBTkosQ0FaRixDQURGLENBREY7QUFBQTtBQUFBO0FBQUEseTVKQURGO0FBb0VEOztHQXRHUWhCLEc7O0tBQUFBLEc7QUF3R01BLGtFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcHJvZ3Jlc3NiYXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUxheW91dEVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDaGVja01hcmssIENsb3NlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvaWNvbnNcIjtcblxuZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBhcnRpY2xlUmVmID0gdXNlUmVmKCk7XG5cbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1cGRhdGVIZWlnaHQgPSAoKSA9PiB7XG4gICAgICBpZiAoIWFydGljbGVSZWYuY3VycmVudCkgcmV0dXJuO1xuXG4gICAgICBjb25zdCB7IGhlaWdodCB9ID0gYXJ0aWNsZVJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICBzZXRQcm9ncmVzcyh3aW5kb3cuc2Nyb2xsWSAvIChoZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQpKTtcbiAgICB9O1xuXG4gICAgdXBkYXRlSGVpZ2h0KCk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB1cGRhdGVIZWlnaHQpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB1cGRhdGVIZWlnaHQpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICBjb25zdCBwb3NpdGlvbiA9IE1hdGgubWF4KDEgLSBwcm9ncmVzcywgMCk7XG4gIGNvbnN0IGNvbXBsZXRlID0gcG9zaXRpb24gPT09IDA7XG4gIGNvbnN0IG5vdE1vdmVkID0gcG9zaXRpb24gPT09IDE7XG5cbiAgLy8gUmFkaXVzIGlzIGRlcml2ZWQgZnJvbSBvdXIgZGVzaXJlZCBzdHJva2VXaWR0aFxuICAvLyBJZiByYWRpdXMgaXMgZXhhY3RseSBoYWxmIGRpYW1ldGVyIHRoZW4gdGhlIHN0cm9rZSB3aWxsIHNpdCByaWdodCBvbiB0aGUgZWRnZSBhbmQgZXhwYW5kIGluIGJvdGggZGlyZWN0aW9uc1xuICAvLyBXZSB3YW50IGl0IHRvIHNpdCBvbiB0aGUgaW5zaWRlIHNvIHdlIG5lZWQgdG8gZG8gc29tZSBvZmZzZXQuIFNvIGhhbGYgdGhlIHN0cm9rZSB3aWR0aCB3ZSBuZWVkIHRvIHN1YnRyYWN0IGZyb20gdGhlIHJhZGl1c1xuICAvLyBJZiB3ZSB3YW50ZWQgaXQgb24gdGhlIG91dHNpZGUgd2UgY291bGQgYWRkIHRoZSBzdHJva2Ugd2lkdGggYnV0IHRoZW4geW91J2xsIG5lZWQgdG8gYWRqdXN0IHlvdXIgY2lyY2xlIHNpemUgdG8gYmUgdGhhdCBtdWNoIGxhcmdlclxuICBjb25zdCBESUFNRVRFUiA9IDQwMDtcbiAgY29uc3QgU1RST0tFX1dJRFRIID0gNTA7XG4gIGNvbnN0IFJBRElVUyA9IERJQU1FVEVSIC8gMiAtIFNUUk9LRV9XSURUSCAvIDI7XG4gIGNvbnN0IENJUkNVTUZFUkVOQ0UgPSBNYXRoLlBJICogUkFESVVTICogMjtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGVcIiByZWY9e2FydGljbGVSZWZ9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICAgIHRvcDogJzUwcHgnLFxuICAgICAgICAgICAgcmlnaHQ6ICc1MHB4JyxcbiAgICAgICAgICAgIFxuICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgIHtjb21wbGV0ZSA/IDxDaGVja01hcmsgLz4gOiA8Q2xvc2UgLz59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgeyFub3RNb3ZlZCAmJiAoXG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDQwMCA0MDBcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNpcmNsZS1wcm9ncmVzc1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgICAgICBjeD17RElBTUVURVIgLyAyfVxuICAgICAgICAgICAgICAgICAgY3k9e0RJQU1FVEVSIC8gMn1cbiAgICAgICAgICAgICAgICAgIHI9e1JBRElVU31cbiAgICAgICAgICAgICAgICAgIHN0cm9rZT1cInRvbWF0b1wiXG4gICAgICAgICAgICAgICAgICBmaWxsPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9e1NUUk9LRV9XSURUSH1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZURhc2hhcnJheTogQ0lSQ1VNRkVSRU5DRSxcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlRGFzaG9mZnNldDogQ0lSQ1VNRkVSRU5DRSAqIHBvc2l0aW9uXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgLmFydGljbGUge1xuICAgICAgICBoZWlnaHQ6IDYwMHZoO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMWU1Nzk5IDAlLCAjN2RiOWU4IDEwMCUpO1xuICAgICAgfVxuXG4gICAgICBidXR0b24ge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICB9XG5cbiAgICAgIC5jaXJjbGUtcHJvZ3Jlc3Mge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgbWF4LWhlaWdodDogNTAwcHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/progressbar.js\n");

/***/ })

})