webpackHotUpdate_N_E("pages/progressbar",{

/***/ "./pages/progressbar.js":
/*!******************************!*\
  !*** ./pages/progressbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/icons */ \"./components/icons.js\");\nvar _jsxFileName = \"/Users/fox/Documents/Next/bitcoin-app/pages/progressbar.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nfunction App() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      progress = _useState[0],\n      setProgress = _useState[1];\n\n  var articleRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useLayoutEffect\"])(function () {\n    var updateHeight = function updateHeight() {\n      if (!articleRef.current) return;\n\n      var _articleRef$current$g = articleRef.current.getBoundingClientRect(),\n          height = _articleRef$current$g.height;\n\n      setProgress(window.scrollY / (height - window.innerHeight));\n    };\n\n    updateHeight();\n    window.addEventListener(\"scroll\", updateHeight);\n    return function () {\n      window.removeEventListener(\"scroll\", updateHeight);\n    };\n  }, []);\n  var position = Math.max(1 - progress, 0);\n  var complete = position === 0;\n  var notMoved = position === 1; // Radius is derived from our desired strokeWidth\n  // If radius is exactly half diameter then the stroke will sit right on the edge and expand in both directions\n  // We want it to sit on the inside so we need to do some offset. So half the stroke width we need to subtract from the radius\n  // If we wanted it on the outside we could add the stroke width but then you'll need to adjust your circle size to be that much larger\n\n  var DIAMETER = 50;\n  var STROKE_WIDTH = 6;\n  var RADIUS = DIAMETER / 2 - STROKE_WIDTH / 2;\n  var CIRCUMFERENCE = Math.PI * RADIUS * 2;\n  return __jsx(\"div\", {\n    className: \"jsx-601672112\" + \" \" + \"App\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    ref: articleRef,\n    className: \"jsx-601672112\" + \" \" + \"article\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    style: {\n      position: \"fixed\",\n      top: '50%',\n      left: '50%',\n      transform: 'translate(-50%, -50%)'\n    },\n    className: \"jsx-601672112\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: {\n      backgroundColor: complete ? \"tomato\" : \"#FFF\"\n    },\n    className: \"jsx-601672112\" + \" \" + \"button\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 11\n    }\n  }, complete ? __jsx(_components_icons__WEBPACK_IMPORTED_MODULE_2__[\"CheckMark\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 23\n    }\n  }) : __jsx(_components_icons__WEBPACK_IMPORTED_MODULE_2__[\"Close\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 39\n    }\n  })), __jsx(\"button\", {\n    className: \"jsx-601672112\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 11\n    }\n  }, !notMoved && __jsx(\"svg\", {\n    viewBox: \"0 0 200 200\",\n    width: \"900px\",\n    height: \"900px\",\n    className: \"jsx-601672112\" + \" \" + \"circle-progress\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 15\n    }\n  }, __jsx(\"circle\", {\n    cx: DIAMETER / 2,\n    cy: DIAMETER / 2,\n    r: RADIUS,\n    stroke: \"tomato\",\n    fill: \"transparent\",\n    strokeWidth: STROKE_WIDTH,\n    style: {\n      strokeDasharray: CIRCUMFERENCE,\n      strokeDashoffset: CIRCUMFERENCE * position\n    },\n    className: \"jsx-601672112\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 17\n    }\n  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"601672112\",\n    __self: this\n  }, \".center-icon.jsx-601672112{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.article.jsx-601672112{height:600vh;background:linear-gradient(to bottom,#1e5799 0%,#7db9e8 100%);}.button.jsx-601672112{position:relative;-webkit-transition:all 0.3s ease;transition:all 0.3s ease;box-shadow:0 2px 4px 0 rgba(0,0,0,0.2);outline:none;cursor:pointer;border:0;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:20px 30px;}.circle-progress.jsx-601672112{position:absolute;left:50;top:0;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mb3gvRG9jdW1lbnRzL05leHQvYml0Y29pbi1hcHAvcGFnZXMvcHJvZ3Jlc3NiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0ZrQixBQUkyQixBQU9MLEFBS0ssQUFjQSxhQWxCOEMsS0FQeEQsQUFZaUIsQUFjakIsUUF6QkMsQUEwQkgsTUFDUixHQTFCa0Msd0NBTWxDLENBSzRDLHVDQUM3QixhQUNFLFlBWmpCLEdBYVcsU0FDYSxzQkFDVCwwRUFDVSxtR0FDSiw2RkFDRCxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2ZveC9Eb2N1bWVudHMvTmV4dC9iaXRjb2luLWFwcC9wYWdlcy9wcm9ncmVzc2Jhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENoZWNrTWFyaywgQ2xvc2UgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9pY29uc1wiO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGFydGljbGVSZWYgPSB1c2VSZWYoKTtcblxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZUhlaWdodCA9ICgpID0+IHtcbiAgICAgIGlmICghYXJ0aWNsZVJlZi5jdXJyZW50KSByZXR1cm47XG5cbiAgICAgIGNvbnN0IHsgaGVpZ2h0IH0gPSBhcnRpY2xlUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIHNldFByb2dyZXNzKHdpbmRvdy5zY3JvbGxZIC8gKGhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodCkpO1xuICAgIH07XG5cbiAgICB1cGRhdGVIZWlnaHQoKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHVwZGF0ZUhlaWdodCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHVwZGF0ZUhlaWdodCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHBvc2l0aW9uID0gTWF0aC5tYXgoMSAtIHByb2dyZXNzLCAwKTtcbiAgY29uc3QgY29tcGxldGUgPSBwb3NpdGlvbiA9PT0gMDtcbiAgY29uc3Qgbm90TW92ZWQgPSBwb3NpdGlvbiA9PT0gMTtcblxuICAvLyBSYWRpdXMgaXMgZGVyaXZlZCBmcm9tIG91ciBkZXNpcmVkIHN0cm9rZVdpZHRoXG4gIC8vIElmIHJhZGl1cyBpcyBleGFjdGx5IGhhbGYgZGlhbWV0ZXIgdGhlbiB0aGUgc3Ryb2tlIHdpbGwgc2l0IHJpZ2h0IG9uIHRoZSBlZGdlIGFuZCBleHBhbmQgaW4gYm90aCBkaXJlY3Rpb25zXG4gIC8vIFdlIHdhbnQgaXQgdG8gc2l0IG9uIHRoZSBpbnNpZGUgc28gd2UgbmVlZCB0byBkbyBzb21lIG9mZnNldC4gU28gaGFsZiB0aGUgc3Ryb2tlIHdpZHRoIHdlIG5lZWQgdG8gc3VidHJhY3QgZnJvbSB0aGUgcmFkaXVzXG4gIC8vIElmIHdlIHdhbnRlZCBpdCBvbiB0aGUgb3V0c2lkZSB3ZSBjb3VsZCBhZGQgdGhlIHN0cm9rZSB3aWR0aCBidXQgdGhlbiB5b3UnbGwgbmVlZCB0byBhZGp1c3QgeW91ciBjaXJjbGUgc2l6ZSB0byBiZSB0aGF0IG11Y2ggbGFyZ2VyXG4gIGNvbnN0IERJQU1FVEVSID0gNTA7XG4gIGNvbnN0IFNUUk9LRV9XSURUSCA9IDY7XG4gIGNvbnN0IFJBRElVUyA9IERJQU1FVEVSIC8gMiAtIFNUUk9LRV9XSURUSCAvIDI7XG4gIGNvbnN0IENJUkNVTUZFUkVOQ0UgPSBNYXRoLlBJICogUkFESVVTICogMjtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGVcIiByZWY9e2FydGljbGVSZWZ9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgICAgICB0b3A6ICc1MCUnLFxuICAgICAgICAgICAgbGVmdDogJzUwJScsXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb21wbGV0ZSA/IFwidG9tYXRvXCIgOiBcIiNGRkZcIlxuICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgIHtjb21wbGV0ZSA/IDxDaGVja01hcmsgLz4gOiA8Q2xvc2UgLz59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgXG4gICAgICAgICAgPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICB7IW5vdE1vdmVkICYmIChcbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAwIDIwMFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCI5MDBweFwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiOTAwcHhcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNpcmNsZS1wcm9ncmVzc1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgICAgICBjeD17RElBTUVURVIgLyAyfVxuICAgICAgICAgICAgICAgICAgY3k9e0RJQU1FVEVSIC8gMn1cbiAgICAgICAgICAgICAgICAgIHI9e1JBRElVU31cbiAgICAgICAgICAgICAgICAgIHN0cm9rZT1cInRvbWF0b1wiXG4gICAgICAgICAgICAgICAgICBmaWxsPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9e1NUUk9LRV9XSURUSH1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZURhc2hhcnJheTogQ0lSQ1VNRkVSRU5DRSxcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlRGFzaG9mZnNldDogQ0lSQ1VNRkVSRU5DRSAqIHBvc2l0aW9uXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgLmNlbnRlci1pY29uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgIH1cblxuICAgICAgLmFydGljbGUge1xuICAgICAgICBoZWlnaHQ6IDYwMHZoO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMWU1Nzk5IDAlLCAjN2RiOWU4IDEwMCUpO1xuICAgICAgfVxuXG4gICAgICAuYnV0dG9uIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMjBweCAzMHB4O1xuICAgICAgfVxuXG4gICAgICAuY2lyY2xlLXByb2dyZXNzIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA1MDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl19 */\\n/*@ sourceURL=/Users/fox/Documents/Next/bitcoin-app/pages/progressbar.js */\"));\n}\n\n_s(App, \"xyOpG6Nh1OTC/BM78AS3Qom7KGk=\");\n\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZ3Jlc3NiYXIuanM/OGNkZiJdLCJuYW1lcyI6WyJBcHAiLCJ1c2VTdGF0ZSIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJhcnRpY2xlUmVmIiwidXNlUmVmIiwidXNlTGF5b3V0RWZmZWN0IiwidXBkYXRlSGVpZ2h0IiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhlaWdodCIsIndpbmRvdyIsInNjcm9sbFkiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicG9zaXRpb24iLCJNYXRoIiwibWF4IiwiY29tcGxldGUiLCJub3RNb3ZlZCIsIkRJQU1FVEVSIiwiU1RST0tFX1dJRFRIIiwiUkFESVVTIiwiQ0lSQ1VNRkVSRU5DRSIsIlBJIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsImJhY2tncm91bmRDb2xvciIsInN0cm9rZURhc2hhcnJheSIsInN0cm9rZURhc2hvZmZzZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxHQUFULEdBQWU7QUFBQTs7QUFBQSxrQkFDbUJDLHNEQUFRLENBQUMsQ0FBRCxDQUQzQjtBQUFBLE1BQ05DLFFBRE07QUFBQSxNQUNJQyxXQURKOztBQUViLE1BQU1DLFVBQVUsR0FBR0Msb0RBQU0sRUFBekI7QUFFQUMsK0RBQWUsQ0FBQyxZQUFNO0FBQ3BCLFFBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekIsVUFBSSxDQUFDSCxVQUFVLENBQUNJLE9BQWhCLEVBQXlCOztBQURBLGtDQUdOSixVQUFVLENBQUNJLE9BQVgsQ0FBbUJDLHFCQUFuQixFQUhNO0FBQUEsVUFHakJDLE1BSGlCLHlCQUdqQkEsTUFIaUI7O0FBS3pCUCxpQkFBVyxDQUFDUSxNQUFNLENBQUNDLE9BQVAsSUFBa0JGLE1BQU0sR0FBR0MsTUFBTSxDQUFDRSxXQUFsQyxDQUFELENBQVg7QUFDRCxLQU5EOztBQVFBTixnQkFBWTtBQUVaSSxVQUFNLENBQUNHLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDUCxZQUFsQztBQUNBLFdBQU8sWUFBTTtBQUNYSSxZQUFNLENBQUNJLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDUixZQUFyQztBQUNELEtBRkQ7QUFHRCxHQWZjLEVBZVosRUFmWSxDQUFmO0FBaUJBLE1BQU1TLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVMsSUFBSWhCLFFBQWIsRUFBdUIsQ0FBdkIsQ0FBakI7QUFDQSxNQUFNaUIsUUFBUSxHQUFHSCxRQUFRLEtBQUssQ0FBOUI7QUFDQSxNQUFNSSxRQUFRLEdBQUdKLFFBQVEsS0FBSyxDQUE5QixDQXZCYSxDQXlCYjtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNSyxRQUFRLEdBQUcsRUFBakI7QUFDQSxNQUFNQyxZQUFZLEdBQUcsQ0FBckI7QUFDQSxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsR0FBRyxDQUFYLEdBQWVDLFlBQVksR0FBRyxDQUE3QztBQUNBLE1BQU1FLGFBQWEsR0FBR1AsSUFBSSxDQUFDUSxFQUFMLEdBQVVGLE1BQVYsR0FBbUIsQ0FBekM7QUFFQSxTQUNFO0FBQUEsdUNBQWUsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBeUIsT0FBRyxFQUFFbkIsVUFBOUI7QUFBQSx1Q0FBZSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFNBQUssRUFBRTtBQUNMWSxjQUFRLEVBQUUsT0FETDtBQUVMVSxTQUFHLEVBQUUsS0FGQTtBQUdMQyxVQUFJLEVBQUUsS0FIRDtBQUlMQyxlQUFTLEVBQUU7QUFKTixLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFO0FBRUEsU0FBSyxFQUFFO0FBQ0xDLHFCQUFlLEVBQUVWLFFBQVEsR0FBRyxRQUFILEdBQWM7QUFEbEMsS0FGUDtBQUFBLHVDQUNVLFFBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1DQSxRQUFRLEdBQUcsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUgsR0FBbUIsTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTjVCLENBUkYsRUFnQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUcsQ0FBQ0MsUUFBRCxJQUNDO0FBQ0UsV0FBTyxFQUFDLGFBRFY7QUFFRSxTQUFLLEVBQUMsT0FGUjtBQUdFLFVBQU0sRUFBQyxPQUhUO0FBQUEsdUNBSVksaUJBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FO0FBQ0UsTUFBRSxFQUFFQyxRQUFRLEdBQUcsQ0FEakI7QUFFRSxNQUFFLEVBQUVBLFFBQVEsR0FBRyxDQUZqQjtBQUdFLEtBQUMsRUFBRUUsTUFITDtBQUlFLFVBQU0sRUFBQyxRQUpUO0FBS0UsUUFBSSxFQUFDLGFBTFA7QUFNRSxlQUFXLEVBQUVELFlBTmY7QUFPRSxTQUFLLEVBQUU7QUFDTFEscUJBQWUsRUFBRU4sYUFEWjtBQUVMTyxzQkFBZ0IsRUFBRVAsYUFBYSxHQUFHUjtBQUY3QixLQVBUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLENBTEosQ0FoQkYsQ0FERixDQURGO0FBQUE7QUFBQTtBQUFBLG0rTEFERjtBQW1GRDs7R0FySFFoQixHOztLQUFBQSxHO0FBdUhNQSxrRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Byb2dyZXNzYmFyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2hlY2tNYXJrLCBDbG9zZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2ljb25zXCI7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgYXJ0aWNsZVJlZiA9IHVzZVJlZigpO1xuXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdXBkYXRlSGVpZ2h0ID0gKCkgPT4ge1xuICAgICAgaWYgKCFhcnRpY2xlUmVmLmN1cnJlbnQpIHJldHVybjtcblxuICAgICAgY29uc3QgeyBoZWlnaHQgfSA9IGFydGljbGVSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgc2V0UHJvZ3Jlc3Mod2luZG93LnNjcm9sbFkgLyAoaGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0KSk7XG4gICAgfTtcblxuICAgIHVwZGF0ZUhlaWdodCgpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdXBkYXRlSGVpZ2h0KTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdXBkYXRlSGVpZ2h0KTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgY29uc3QgcG9zaXRpb24gPSBNYXRoLm1heCgxIC0gcHJvZ3Jlc3MsIDApO1xuICBjb25zdCBjb21wbGV0ZSA9IHBvc2l0aW9uID09PSAwO1xuICBjb25zdCBub3RNb3ZlZCA9IHBvc2l0aW9uID09PSAxO1xuXG4gIC8vIFJhZGl1cyBpcyBkZXJpdmVkIGZyb20gb3VyIGRlc2lyZWQgc3Ryb2tlV2lkdGhcbiAgLy8gSWYgcmFkaXVzIGlzIGV4YWN0bHkgaGFsZiBkaWFtZXRlciB0aGVuIHRoZSBzdHJva2Ugd2lsbCBzaXQgcmlnaHQgb24gdGhlIGVkZ2UgYW5kIGV4cGFuZCBpbiBib3RoIGRpcmVjdGlvbnNcbiAgLy8gV2Ugd2FudCBpdCB0byBzaXQgb24gdGhlIGluc2lkZSBzbyB3ZSBuZWVkIHRvIGRvIHNvbWUgb2Zmc2V0LiBTbyBoYWxmIHRoZSBzdHJva2Ugd2lkdGggd2UgbmVlZCB0byBzdWJ0cmFjdCBmcm9tIHRoZSByYWRpdXNcbiAgLy8gSWYgd2Ugd2FudGVkIGl0IG9uIHRoZSBvdXRzaWRlIHdlIGNvdWxkIGFkZCB0aGUgc3Ryb2tlIHdpZHRoIGJ1dCB0aGVuIHlvdSdsbCBuZWVkIHRvIGFkanVzdCB5b3VyIGNpcmNsZSBzaXplIHRvIGJlIHRoYXQgbXVjaCBsYXJnZXJcbiAgY29uc3QgRElBTUVURVIgPSA1MDtcbiAgY29uc3QgU1RST0tFX1dJRFRIID0gNjtcbiAgY29uc3QgUkFESVVTID0gRElBTUVURVIgLyAyIC0gU1RST0tFX1dJRFRIIC8gMjtcbiAgY29uc3QgQ0lSQ1VNRkVSRU5DRSA9IE1hdGguUEkgKiBSQURJVVMgKiAyO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZVwiIHJlZj17YXJ0aWNsZVJlZn0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICAgIHRvcDogJzUwJScsXG4gICAgICAgICAgICBsZWZ0OiAnNTAlJyxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKSdcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBcbiAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbXBsZXRlID8gXCJ0b21hdG9cIiA6IFwiI0ZGRlwiXG4gICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAge2NvbXBsZXRlID8gPENoZWNrTWFyayAvPiA6IDxDbG9zZSAvPn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBcbiAgICAgICAgICA+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHshbm90TW92ZWQgJiYgKFxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMDAgMjAwXCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjkwMHB4XCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCI5MDBweFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2lyY2xlLXByb2dyZXNzXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgICAgIGN4PXtESUFNRVRFUiAvIDJ9XG4gICAgICAgICAgICAgICAgICBjeT17RElBTUVURVIgLyAyfVxuICAgICAgICAgICAgICAgICAgcj17UkFESVVTfVxuICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwidG9tYXRvXCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17U1RST0tFX1dJRFRIfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlRGFzaGFycmF5OiBDSVJDVU1GRVJFTkNFLFxuICAgICAgICAgICAgICAgICAgICBzdHJva2VEYXNob2Zmc2V0OiBDSVJDVU1GRVJFTkNFICogcG9zaXRpb25cbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAuY2VudGVyLWljb24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgfVxuXG4gICAgICAuYXJ0aWNsZSB7XG4gICAgICAgIGhlaWdodDogNjAwdmg7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMxZTU3OTkgMCUsICM3ZGI5ZTggMTAwJSk7XG4gICAgICB9XG5cbiAgICAgIC5idXR0b24ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gICAgICB9XG5cbiAgICAgIC5jaXJjbGUtcHJvZ3Jlc3Mge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDUwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/progressbar.js\n");

/***/ })

})