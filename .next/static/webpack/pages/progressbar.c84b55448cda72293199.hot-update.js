webpackHotUpdate_N_E("pages/progressbar",{

/***/ "./pages/progressbar.js":
/*!******************************!*\
  !*** ./pages/progressbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/fox/Documents/Next/bitcoin-app/pages/progressbar.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\nfunction Progress() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      progress = _useState[0],\n      setProgress = _useState[1];\n\n  var articleRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useLayoutEffect\"])(function () {\n    var updateHeight = function updateHeight() {\n      if (!articleRef.current) return;\n\n      var _articleRef$current$g = articleRef.current.getBoundingClientRect(),\n          height = _articleRef$current$g.height;\n\n      setProgress(window.scrollY / (height - window.innerHeight));\n    };\n\n    updateHeight();\n    window.addEventListener(\"scroll\", updateHeight);\n    return function () {\n      window.removeEventListener(\"scroll\", updateHeight);\n    };\n  }, []);\n  var position = Math.max(1 - progress, 0);\n  var complete = position === 0;\n  var notMoved = position === 1;\n  var DIAMETER = 400;\n  var STROKE_WIDTH = 50;\n  var RADIUS = DIAMETER / 2 - STROKE_WIDTH / 2;\n  var CIRCUMFERENCE = Math.PI * RADIUS * 2;\n  return __jsx(\"div\", {\n    className: \"jsx-483184650\" + \" \" + \"App\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    ref: articleRef,\n    className: \"jsx-483184650\" + \" \" + \"article\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-483184650\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, console.log(RADIUS), __jsx(\"div\", {\n    style: {\n      position: \"fixed\",\n      top: '50px',\n      right: '50px'\n    },\n    className: \"jsx-483184650\" + \" \" + \"button\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }\n  }, complete ? \"Completed\" : \"\"), __jsx(\"button\", {\n    style: {\n      position: \"fixed\"\n    },\n    className: \"jsx-483184650\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 11\n    }\n  }, !notMoved && __jsx(\"svg\", {\n    viewBox: \"0 0 400 400\",\n    className: \"jsx-483184650\" + \" \" + \"circle-progress\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 15\n    }\n  }, __jsx(\"circle\", {\n    cx: DIAMETER / 2,\n    cy: DIAMETER / 2,\n    r: RADIUS,\n    stroke: \"tomato\",\n    fill: \"transparent\",\n    strokeWidth: STROKE_WIDTH,\n    style: {\n      strokeDasharray: CIRCUMFERENCE,\n      strokeDashoffset: CIRCUMFERENCE * position\n    },\n    className: \"jsx-483184650\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 17\n    }\n  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"483184650\",\n    __self: this\n  }, \".article.jsx-483184650{height:600vh;background:linear-gradient(to bottom,#1e5799 0%,#7db9e8 100%);}button.jsx-483184650{width:100%;height:100%;max-width:400px;max-height:400px;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.circle-progress.jsx-483184650{position:absolute;left:0;top:0;width:100%;max-width:400px;max-height:400px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mb3gvRG9jdW1lbnRzL05leHQvYml0Y29pbi1hcHAvcGFnZXMvcHJvZ3Jlc3NiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkVrQixBQUlzQixBQUtGLEFBVU8sV0FUTixFQUxvRCxLQWV6RCxLQVRTLEVBVVYsTUFDSyxRQVZNLEdBV0QsY0FWUixFQVdTLE1BVlIsU0FDdUIsRUFUbEMsQUFtQkEsdUdBVEEiLCJmaWxlIjoiL1VzZXJzL2ZveC9Eb2N1bWVudHMvTmV4dC9iaXRjb2luLWFwcC9wYWdlcy9wcm9ncmVzc2Jhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gUHJvZ3Jlc3MoKSB7XG4gIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGFydGljbGVSZWYgPSB1c2VSZWYoKTtcblxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZUhlaWdodCA9ICgpID0+IHtcbiAgICAgIGlmICghYXJ0aWNsZVJlZi5jdXJyZW50KSByZXR1cm47XG5cbiAgICAgIGNvbnN0IHsgaGVpZ2h0IH0gPSBhcnRpY2xlUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIHNldFByb2dyZXNzKHdpbmRvdy5zY3JvbGxZIC8gKGhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodCkpO1xuICAgIH07XG5cbiAgICB1cGRhdGVIZWlnaHQoKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHVwZGF0ZUhlaWdodCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHVwZGF0ZUhlaWdodCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHBvc2l0aW9uID0gTWF0aC5tYXgoMSAtIHByb2dyZXNzLCAwKTtcbiAgY29uc3QgY29tcGxldGUgPSBwb3NpdGlvbiA9PT0gMDtcbiAgY29uc3Qgbm90TW92ZWQgPSBwb3NpdGlvbiA9PT0gMTtcbiAgXG4gIGNvbnN0IERJQU1FVEVSID0gNDAwO1xuICBjb25zdCBTVFJPS0VfV0lEVEggPSA1MDtcbiAgY29uc3QgUkFESVVTID0gRElBTUVURVIgLyAyIC0gU1RST0tFX1dJRFRIIC8gMjtcbiAgY29uc3QgQ0lSQ1VNRkVSRU5DRSA9IE1hdGguUEkgKiBSQURJVVMgKiAyO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZVwiIHJlZj17YXJ0aWNsZVJlZn0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge2NvbnNvbGUubG9nKFJBRElVUyl9XG4gICAgICAgICAgPGRpdiBcbiAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgdG9wOiAnNTBweCcsXG4gICAgICAgICAgICByaWdodDogJzUwcHgnLFxuICAgICAgICAgICAgXG4gICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAge2NvbXBsZXRlID8gXCJDb21wbGV0ZWRcIiAgOiBcIlwiIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7IW5vdE1vdmVkICYmIChcbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDAwIDQwMFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2lyY2xlLXByb2dyZXNzXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgICAgIGN4PXtESUFNRVRFUiAvIDJ9XG4gICAgICAgICAgICAgICAgICBjeT17RElBTUVURVIgLyAyfVxuICAgICAgICAgICAgICAgICAgcj17UkFESVVTfVxuICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwidG9tYXRvXCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17U1RST0tFX1dJRFRIfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlRGFzaGFycmF5OiBDSVJDVU1GRVJFTkNFLFxuICAgICAgICAgICAgICAgICAgICBzdHJva2VEYXNob2Zmc2V0OiBDSVJDVU1GRVJFTkNFICogcG9zaXRpb25cbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAuYXJ0aWNsZSB7XG4gICAgICAgIGhlaWdodDogNjAwdmg7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMxZTU3OTkgMCUsICM3ZGI5ZTggMTAwJSk7XG4gICAgICB9XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgIH1cblxuICAgICAgLmNpcmNsZS1wcm9ncmVzcyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XG4gICAgICB9XG5cbiAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzO1xuIl19 */\\n/*@ sourceURL=/Users/fox/Documents/Next/bitcoin-app/pages/progressbar.js */\"));\n}\n\n_s(Progress, \"xyOpG6Nh1OTC/BM78AS3Qom7KGk=\");\n\n_c = Progress;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Progress);\n\nvar _c;\n\n$RefreshReg$(_c, \"Progress\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZ3Jlc3NiYXIuanM/OGNkZiJdLCJuYW1lcyI6WyJQcm9ncmVzcyIsInVzZVN0YXRlIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsImFydGljbGVSZWYiLCJ1c2VSZWYiLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1cGRhdGVIZWlnaHQiLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0Iiwid2luZG93Iiwic2Nyb2xsWSIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJwb3NpdGlvbiIsIk1hdGgiLCJtYXgiLCJjb21wbGV0ZSIsIm5vdE1vdmVkIiwiRElBTUVURVIiLCJTVFJPS0VfV0lEVEgiLCJSQURJVVMiLCJDSVJDVU1GRVJFTkNFIiwiUEkiLCJjb25zb2xlIiwibG9nIiwidG9wIiwicmlnaHQiLCJzdHJva2VEYXNoYXJyYXkiLCJzdHJva2VEYXNob2Zmc2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBLGtCQUNjQyxzREFBUSxDQUFDLENBQUQsQ0FEdEI7QUFBQSxNQUNYQyxRQURXO0FBQUEsTUFDREMsV0FEQzs7QUFFbEIsTUFBTUMsVUFBVSxHQUFHQyxvREFBTSxFQUF6QjtBQUVBQywrREFBZSxDQUFDLFlBQU07QUFDcEIsUUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixVQUFJLENBQUNILFVBQVUsQ0FBQ0ksT0FBaEIsRUFBeUI7O0FBREEsa0NBR05KLFVBQVUsQ0FBQ0ksT0FBWCxDQUFtQkMscUJBQW5CLEVBSE07QUFBQSxVQUdqQkMsTUFIaUIseUJBR2pCQSxNQUhpQjs7QUFLekJQLGlCQUFXLENBQUNRLE1BQU0sQ0FBQ0MsT0FBUCxJQUFrQkYsTUFBTSxHQUFHQyxNQUFNLENBQUNFLFdBQWxDLENBQUQsQ0FBWDtBQUNELEtBTkQ7O0FBUUFOLGdCQUFZO0FBRVpJLFVBQU0sQ0FBQ0csZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NQLFlBQWxDO0FBQ0EsV0FBTyxZQUFNO0FBQ1hJLFlBQU0sQ0FBQ0ksbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNSLFlBQXJDO0FBQ0QsS0FGRDtBQUdELEdBZmMsRUFlWixFQWZZLENBQWY7QUFpQkEsTUFBTVMsUUFBUSxHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxJQUFJaEIsUUFBYixFQUF1QixDQUF2QixDQUFqQjtBQUNBLE1BQU1pQixRQUFRLEdBQUdILFFBQVEsS0FBSyxDQUE5QjtBQUNBLE1BQU1JLFFBQVEsR0FBR0osUUFBUSxLQUFLLENBQTlCO0FBRUEsTUFBTUssUUFBUSxHQUFHLEdBQWpCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLEVBQXJCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHRixRQUFRLEdBQUcsQ0FBWCxHQUFlQyxZQUFZLEdBQUcsQ0FBN0M7QUFDQSxNQUFNRSxhQUFhLEdBQUdQLElBQUksQ0FBQ1EsRUFBTCxHQUFVRixNQUFWLEdBQW1CLENBQXpDO0FBRUEsU0FDRTtBQUFBLHVDQUFlLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQXlCLE9BQUcsRUFBRW5CLFVBQTlCO0FBQUEsdUNBQWUsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dzQixPQUFPLENBQUNDLEdBQVIsQ0FBWUosTUFBWixDQURILEVBRUU7QUFFQSxTQUFLLEVBQUU7QUFDTFAsY0FBUSxFQUFFLE9BREw7QUFFTFksU0FBRyxFQUFFLE1BRkE7QUFHTEMsV0FBSyxFQUFFO0FBSEYsS0FGUDtBQUFBLHVDQUNVLFFBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNDVixRQUFRLEdBQUcsV0FBSCxHQUFrQixFQVQzQixDQUZGLEVBYUU7QUFDRSxTQUFLLEVBQUU7QUFDTEgsY0FBUSxFQUFFO0FBREwsS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRyxDQUFDSSxRQUFELElBQ0M7QUFDRSxXQUFPLEVBQUMsYUFEVjtBQUFBLHVDQUVZLGlCQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUNFLE1BQUUsRUFBRUMsUUFBUSxHQUFHLENBRGpCO0FBRUUsTUFBRSxFQUFFQSxRQUFRLEdBQUcsQ0FGakI7QUFHRSxLQUFDLEVBQUVFLE1BSEw7QUFJRSxVQUFNLEVBQUMsUUFKVDtBQUtFLFFBQUksRUFBQyxhQUxQO0FBTUUsZUFBVyxFQUFFRCxZQU5mO0FBT0UsU0FBSyxFQUFFO0FBQ0xRLHFCQUFlLEVBQUVOLGFBRFo7QUFFTE8sc0JBQWdCLEVBQUVQLGFBQWEsR0FBR1I7QUFGN0IsS0FQVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQU5KLENBYkYsQ0FERixDQURGO0FBQUE7QUFBQTtBQUFBLDY3SUFERjtBQXdFRDs7R0F0R1FoQixROztLQUFBQSxRO0FBd0dNQSx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Byb2dyZXNzYmFyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBQcm9ncmVzcygpIHtcbiAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgYXJ0aWNsZVJlZiA9IHVzZVJlZigpO1xuXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdXBkYXRlSGVpZ2h0ID0gKCkgPT4ge1xuICAgICAgaWYgKCFhcnRpY2xlUmVmLmN1cnJlbnQpIHJldHVybjtcblxuICAgICAgY29uc3QgeyBoZWlnaHQgfSA9IGFydGljbGVSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgc2V0UHJvZ3Jlc3Mod2luZG93LnNjcm9sbFkgLyAoaGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0KSk7XG4gICAgfTtcblxuICAgIHVwZGF0ZUhlaWdodCgpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdXBkYXRlSGVpZ2h0KTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdXBkYXRlSGVpZ2h0KTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgY29uc3QgcG9zaXRpb24gPSBNYXRoLm1heCgxIC0gcHJvZ3Jlc3MsIDApO1xuICBjb25zdCBjb21wbGV0ZSA9IHBvc2l0aW9uID09PSAwO1xuICBjb25zdCBub3RNb3ZlZCA9IHBvc2l0aW9uID09PSAxO1xuICBcbiAgY29uc3QgRElBTUVURVIgPSA0MDA7XG4gIGNvbnN0IFNUUk9LRV9XSURUSCA9IDUwO1xuICBjb25zdCBSQURJVVMgPSBESUFNRVRFUiAvIDIgLSBTVFJPS0VfV0lEVEggLyAyO1xuICBjb25zdCBDSVJDVU1GRVJFTkNFID0gTWF0aC5QSSAqIFJBRElVUyAqIDI7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlXCIgcmVmPXthcnRpY2xlUmVmfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7Y29uc29sZS5sb2coUkFESVVTKX1cbiAgICAgICAgICA8ZGl2IFxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgICAgICB0b3A6ICc1MHB4JyxcbiAgICAgICAgICAgIHJpZ2h0OiAnNTBweCcsXG4gICAgICAgICAgICBcbiAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICB7Y29tcGxldGUgPyBcIkNvbXBsZXRlZFwiICA6IFwiXCIgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHshbm90TW92ZWQgJiYgKFxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA0MDAgNDAwXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaXJjbGUtcHJvZ3Jlc3NcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgICAgY3g9e0RJQU1FVEVSIC8gMn1cbiAgICAgICAgICAgICAgICAgIGN5PXtESUFNRVRFUiAvIDJ9XG4gICAgICAgICAgICAgICAgICByPXtSQURJVVN9XG4gICAgICAgICAgICAgICAgICBzdHJva2U9XCJ0b21hdG9cIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXtTVFJPS0VfV0lEVEh9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBzdHJva2VEYXNoYXJyYXk6IENJUkNVTUZFUkVOQ0UsXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IENJUkNVTUZFUkVOQ0UgKiBwb3NpdGlvblxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgIC5hcnRpY2xlIHtcbiAgICAgICAgaGVpZ2h0OiA2MDB2aDtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzFlNTc5OSAwJSwgIzdkYjllOCAxMDAlKTtcbiAgICAgIH1cblxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgfVxuXG4gICAgICAuY2lyY2xlLXByb2dyZXNzIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgICAgIH1cblxuICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3M7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/progressbar.js\n");

/***/ })

})