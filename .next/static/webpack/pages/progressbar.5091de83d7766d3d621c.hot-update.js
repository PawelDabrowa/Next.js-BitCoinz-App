webpackHotUpdate_N_E("pages/progressbar",{

/***/ "./pages/progressbar.js":
/*!******************************!*\
  !*** ./pages/progressbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/icons */ \"./components/icons.js\");\nvar _jsxFileName = \"/Users/fox/Documents/Next/bitcoin-app/pages/progressbar.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nfunction App() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      progress = _useState[0],\n      setProgress = _useState[1];\n\n  var articleRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useLayoutEffect\"])(function () {\n    var updateHeight = function updateHeight() {\n      if (!articleRef.current) return;\n\n      var _articleRef$current$g = articleRef.current.getBoundingClientRect(),\n          height = _articleRef$current$g.height;\n\n      setProgress(window.scrollY / (height - window.innerHeight));\n    };\n\n    updateHeight();\n    window.addEventListener(\"scroll\", updateHeight);\n    return function () {\n      window.removeEventListener(\"scroll\", updateHeight);\n    };\n  }, []);\n  var position = Math.max(1 - progress, 0);\n  var complete = position === 0;\n  var notMoved = position === 1;\n  var DIAMETER = 400;\n  var STROKE_WIDTH = 50;\n  var RADIUS = DIAMETER / 2 - STROKE_WIDTH / 2;\n  var CIRCUMFERENCE = Math.PI * RADIUS * 2;\n  return __jsx(\"div\", {\n    className: \"jsx-1498164300\" + \" \" + \"App\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    ref: articleRef,\n    className: \"jsx-1498164300\" + \" \" + \"article\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-1498164300\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: {\n      position: \"fixed\",\n      top: '50px',\n      right: '50px'\n    },\n    className: \"jsx-1498164300\" + \" \" + \"button\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }\n  }, complete ? __jsx(_components_icons__WEBPACK_IMPORTED_MODULE_2__[\"CheckMark\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 23\n    }\n  }) : __jsx(_components_icons__WEBPACK_IMPORTED_MODULE_2__[\"Close\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 39\n    }\n  })), __jsx(\"button\", {\n    style: {\n      position: \"fixed\"\n    },\n    className: \"jsx-1498164300\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 11\n    }\n  }, !notMoved && __jsx(\"svg\", {\n    viewBox: \"0 0 400 400\",\n    className: \"jsx-1498164300\" + \" \" + \"circle-progress\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 15\n    }\n  }, __jsx(\"circle\", {\n    cx: DIAMETER / 2,\n    cy: DIAMETER / 2,\n    r: RADIUS,\n    stroke: \"tomato\",\n    fill: \"transparent\",\n    strokeWidth: STROKE_WIDTH,\n    style: {\n      strokeDasharray: CIRCUMFERENCE,\n      strokeDashoffset: CIRCUMFERENCE * position\n    },\n    className: \"jsx-1498164300\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 17\n    }\n  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"1498164300\",\n    __self: this\n  }, \".article.jsx-1498164300{height:600vh;background:linear-gradient(to bottom,#1e5799 0%,#7db9e8 100%);}button.jsx-1498164300{width:100%;height:100%;max-width:400px;max-height:400px;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.circle-progress.jsx-1498164300{position:absolute;left:0;top:0;width:100%;max-width:400px;max-height:400px;}html.jsx-1498164300,body.jsx-1498164300{height:100%;overflow:hidden;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mb3gvRG9jdW1lbnRzL05leHQvYml0Y29pbi1hcHAvcGFnZXMvcHJvZ3Jlc3NiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkVrQixBQUlzQixBQUtGLEFBVU8sQUFTTixXQWxCQSxDQW1CSSxDQXhCZ0QsS0FlekQsS0FUUyxFQVVWLEdBU1IsR0FSYSxRQVZNLEdBV0QsY0FWUixFQVdTLE1BVlIsU0FDdUIsRUFUbEMsQUFtQkEsdUdBVEEiLCJmaWxlIjoiL1VzZXJzL2ZveC9Eb2N1bWVudHMvTmV4dC9iaXRjb2luLWFwcC9wYWdlcy9wcm9ncmVzc2Jhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENoZWNrTWFyaywgQ2xvc2UgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9pY29uc1wiO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGFydGljbGVSZWYgPSB1c2VSZWYoKTtcblxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZUhlaWdodCA9ICgpID0+IHtcbiAgICAgIGlmICghYXJ0aWNsZVJlZi5jdXJyZW50KSByZXR1cm47XG5cbiAgICAgIGNvbnN0IHsgaGVpZ2h0IH0gPSBhcnRpY2xlUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIHNldFByb2dyZXNzKHdpbmRvdy5zY3JvbGxZIC8gKGhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodCkpO1xuICAgIH07XG5cbiAgICB1cGRhdGVIZWlnaHQoKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHVwZGF0ZUhlaWdodCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHVwZGF0ZUhlaWdodCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHBvc2l0aW9uID0gTWF0aC5tYXgoMSAtIHByb2dyZXNzLCAwKTtcbiAgY29uc3QgY29tcGxldGUgPSBwb3NpdGlvbiA9PT0gMDtcbiAgY29uc3Qgbm90TW92ZWQgPSBwb3NpdGlvbiA9PT0gMTtcbiAgXG4gIGNvbnN0IERJQU1FVEVSID0gNDAwO1xuICBjb25zdCBTVFJPS0VfV0lEVEggPSA1MDtcbiAgY29uc3QgUkFESVVTID0gRElBTUVURVIgLyAyIC0gU1RST0tFX1dJRFRIIC8gMjtcbiAgY29uc3QgQ0lSQ1VNRkVSRU5DRSA9IE1hdGguUEkgKiBSQURJVVMgKiAyO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZVwiIHJlZj17YXJ0aWNsZVJlZn0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBcbiAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgdG9wOiAnNTBweCcsXG4gICAgICAgICAgICByaWdodDogJzUwcHgnLFxuICAgICAgICAgICAgXG4gICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAge2NvbXBsZXRlID8gPENoZWNrTWFyayAvPiA6IDxDbG9zZSAvPn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7IW5vdE1vdmVkICYmIChcbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDAwIDQwMFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2lyY2xlLXByb2dyZXNzXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgICAgIGN4PXtESUFNRVRFUiAvIDJ9XG4gICAgICAgICAgICAgICAgICBjeT17RElBTUVURVIgLyAyfVxuICAgICAgICAgICAgICAgICAgcj17UkFESVVTfVxuICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwidG9tYXRvXCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17U1RST0tFX1dJRFRIfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlRGFzaGFycmF5OiBDSVJDVU1GRVJFTkNFLFxuICAgICAgICAgICAgICAgICAgICBzdHJva2VEYXNob2Zmc2V0OiBDSVJDVU1GRVJFTkNFICogcG9zaXRpb25cbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAuYXJ0aWNsZSB7XG4gICAgICAgIGhlaWdodDogNjAwdmg7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMxZTU3OTkgMCUsICM3ZGI5ZTggMTAwJSk7XG4gICAgICB9XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgIH1cblxuICAgICAgLmNpcmNsZS1wcm9ncmVzcyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XG4gICAgICB9XG5cbiAgICAgIGh0bWwsIGJvZHkge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG5cbiAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdfQ== */\\n/*@ sourceURL=/Users/fox/Documents/Next/bitcoin-app/pages/progressbar.js */\"));\n}\n\n_s(App, \"xyOpG6Nh1OTC/BM78AS3Qom7KGk=\");\n\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZ3Jlc3NiYXIuanM/OGNkZiJdLCJuYW1lcyI6WyJBcHAiLCJ1c2VTdGF0ZSIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJhcnRpY2xlUmVmIiwidXNlUmVmIiwidXNlTGF5b3V0RWZmZWN0IiwidXBkYXRlSGVpZ2h0IiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhlaWdodCIsIndpbmRvdyIsInNjcm9sbFkiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicG9zaXRpb24iLCJNYXRoIiwibWF4IiwiY29tcGxldGUiLCJub3RNb3ZlZCIsIkRJQU1FVEVSIiwiU1RST0tFX1dJRFRIIiwiUkFESVVTIiwiQ0lSQ1VNRkVSRU5DRSIsIlBJIiwidG9wIiwicmlnaHQiLCJzdHJva2VEYXNoYXJyYXkiLCJzdHJva2VEYXNob2Zmc2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsR0FBVCxHQUFlO0FBQUE7O0FBQUEsa0JBQ21CQyxzREFBUSxDQUFDLENBQUQsQ0FEM0I7QUFBQSxNQUNOQyxRQURNO0FBQUEsTUFDSUMsV0FESjs7QUFFYixNQUFNQyxVQUFVLEdBQUdDLG9EQUFNLEVBQXpCO0FBRUFDLCtEQUFlLENBQUMsWUFBTTtBQUNwQixRQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLFVBQUksQ0FBQ0gsVUFBVSxDQUFDSSxPQUFoQixFQUF5Qjs7QUFEQSxrQ0FHTkosVUFBVSxDQUFDSSxPQUFYLENBQW1CQyxxQkFBbkIsRUFITTtBQUFBLFVBR2pCQyxNQUhpQix5QkFHakJBLE1BSGlCOztBQUt6QlAsaUJBQVcsQ0FBQ1EsTUFBTSxDQUFDQyxPQUFQLElBQWtCRixNQUFNLEdBQUdDLE1BQU0sQ0FBQ0UsV0FBbEMsQ0FBRCxDQUFYO0FBQ0QsS0FORDs7QUFRQU4sZ0JBQVk7QUFFWkksVUFBTSxDQUFDRyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ1AsWUFBbEM7QUFDQSxXQUFPLFlBQU07QUFDWEksWUFBTSxDQUFDSSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ1IsWUFBckM7QUFDRCxLQUZEO0FBR0QsR0FmYyxFQWVaLEVBZlksQ0FBZjtBQWlCQSxNQUFNUyxRQUFRLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLElBQUloQixRQUFiLEVBQXVCLENBQXZCLENBQWpCO0FBQ0EsTUFBTWlCLFFBQVEsR0FBR0gsUUFBUSxLQUFLLENBQTlCO0FBQ0EsTUFBTUksUUFBUSxHQUFHSixRQUFRLEtBQUssQ0FBOUI7QUFFQSxNQUFNSyxRQUFRLEdBQUcsR0FBakI7QUFDQSxNQUFNQyxZQUFZLEdBQUcsRUFBckI7QUFDQSxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsR0FBRyxDQUFYLEdBQWVDLFlBQVksR0FBRyxDQUE3QztBQUNBLE1BQU1FLGFBQWEsR0FBR1AsSUFBSSxDQUFDUSxFQUFMLEdBQVVGLE1BQVYsR0FBbUIsQ0FBekM7QUFFQSxTQUNFO0FBQUEsd0NBQWUsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBeUIsT0FBRyxFQUFFbkIsVUFBOUI7QUFBQSx3Q0FBZSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUVBLFNBQUssRUFBRTtBQUNMWSxjQUFRLEVBQUUsT0FETDtBQUVMVSxTQUFHLEVBQUUsTUFGQTtBQUdMQyxXQUFLLEVBQUU7QUFIRixLQUZQO0FBQUEsd0NBQ1UsUUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0NSLFFBQVEsR0FBRyxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBSCxHQUFtQixNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFUNUIsQ0FERixFQVlFO0FBQ0UsU0FBSyxFQUFFO0FBQ0xILGNBQVEsRUFBRTtBQURMLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0csQ0FBQ0ksUUFBRCxJQUNDO0FBQ0UsV0FBTyxFQUFDLGFBRFY7QUFBQSx3Q0FFWSxpQkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFDRSxNQUFFLEVBQUVDLFFBQVEsR0FBRyxDQURqQjtBQUVFLE1BQUUsRUFBRUEsUUFBUSxHQUFHLENBRmpCO0FBR0UsS0FBQyxFQUFFRSxNQUhMO0FBSUUsVUFBTSxFQUFDLFFBSlQ7QUFLRSxRQUFJLEVBQUMsYUFMUDtBQU1FLGVBQVcsRUFBRUQsWUFOZjtBQU9FLFNBQUssRUFBRTtBQUNMTSxxQkFBZSxFQUFFSixhQURaO0FBRUxLLHNCQUFnQixFQUFFTCxhQUFhLEdBQUdSO0FBRjdCLEtBUFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FOSixDQVpGLENBREYsQ0FERjtBQUFBO0FBQUE7QUFBQSxxcUpBREY7QUE0RUQ7O0dBMUdRaEIsRzs7S0FBQUEsRztBQTRHTUEsa0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9wcm9ncmVzc2Jhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENoZWNrTWFyaywgQ2xvc2UgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9pY29uc1wiO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGFydGljbGVSZWYgPSB1c2VSZWYoKTtcblxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZUhlaWdodCA9ICgpID0+IHtcbiAgICAgIGlmICghYXJ0aWNsZVJlZi5jdXJyZW50KSByZXR1cm47XG5cbiAgICAgIGNvbnN0IHsgaGVpZ2h0IH0gPSBhcnRpY2xlUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIHNldFByb2dyZXNzKHdpbmRvdy5zY3JvbGxZIC8gKGhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodCkpO1xuICAgIH07XG5cbiAgICB1cGRhdGVIZWlnaHQoKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHVwZGF0ZUhlaWdodCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHVwZGF0ZUhlaWdodCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHBvc2l0aW9uID0gTWF0aC5tYXgoMSAtIHByb2dyZXNzLCAwKTtcbiAgY29uc3QgY29tcGxldGUgPSBwb3NpdGlvbiA9PT0gMDtcbiAgY29uc3Qgbm90TW92ZWQgPSBwb3NpdGlvbiA9PT0gMTtcbiAgXG4gIGNvbnN0IERJQU1FVEVSID0gNDAwO1xuICBjb25zdCBTVFJPS0VfV0lEVEggPSA1MDtcbiAgY29uc3QgUkFESVVTID0gRElBTUVURVIgLyAyIC0gU1RST0tFX1dJRFRIIC8gMjtcbiAgY29uc3QgQ0lSQ1VNRkVSRU5DRSA9IE1hdGguUEkgKiBSQURJVVMgKiAyO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZVwiIHJlZj17YXJ0aWNsZVJlZn0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBcbiAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgdG9wOiAnNTBweCcsXG4gICAgICAgICAgICByaWdodDogJzUwcHgnLFxuICAgICAgICAgICAgXG4gICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAge2NvbXBsZXRlID8gPENoZWNrTWFyayAvPiA6IDxDbG9zZSAvPn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7IW5vdE1vdmVkICYmIChcbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDAwIDQwMFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2lyY2xlLXByb2dyZXNzXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgICAgIGN4PXtESUFNRVRFUiAvIDJ9XG4gICAgICAgICAgICAgICAgICBjeT17RElBTUVURVIgLyAyfVxuICAgICAgICAgICAgICAgICAgcj17UkFESVVTfVxuICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwidG9tYXRvXCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17U1RST0tFX1dJRFRIfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlRGFzaGFycmF5OiBDSVJDVU1GRVJFTkNFLFxuICAgICAgICAgICAgICAgICAgICBzdHJva2VEYXNob2Zmc2V0OiBDSVJDVU1GRVJFTkNFICogcG9zaXRpb25cbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAuYXJ0aWNsZSB7XG4gICAgICAgIGhlaWdodDogNjAwdmg7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMxZTU3OTkgMCUsICM3ZGI5ZTggMTAwJSk7XG4gICAgICB9XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgIH1cblxuICAgICAgLmNpcmNsZS1wcm9ncmVzcyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XG4gICAgICB9XG5cbiAgICAgIGh0bWwsIGJvZHkge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG5cbiAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/progressbar.js\n");

/***/ })

})