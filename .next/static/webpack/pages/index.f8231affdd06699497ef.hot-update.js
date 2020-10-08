webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/fox/Documents/Next/bitcoin-app/components/Navbar.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar Navbar = function Navbar() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      navbar = _useState[0],\n      setNavbar = _useState[1];\n\n  var changeBackground = function changeBackground() {\n    if (window.scrollY >= 50) {\n      setNavbar(true);\n    } else {\n      setNavbar(false);\n    }\n  };\n\n  window.addEventListener('scroll', changeBackground);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"nav\", {\n    className: \"jsx-2934082248\" + \" \" + \"navbar sticky top-0 flex items-center justify-between flex-wrap p-6 \".concat(navbar ? ' bg-red-800' : ' bg-transparent'),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-2934082248\" + \" \" + \"run \".concat(navbar ? 'on' : 'off'),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 3\n    }\n  }, __jsx(\"button\", {\n    className: \"jsx-2934082248\" + \" \" + \"flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, __jsx(\"svg\", {\n    viewBox: \"0 0 20 20\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    className: \"jsx-2934082248\" + \" \" + \"fill-current h-3 w-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    className: \"jsx-2934082248\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 100\n    }\n  }, \"Menu\"), __jsx(\"path\", {\n    d: \"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z\",\n    className: \"jsx-2934082248\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 119\n    }\n  })))), __jsx(\"div\", {\n    className: \"jsx-2934082248\" + \" \" + \"flex-grow flex items-center w-auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-2934082248\" + \" \" + \"text-sm lg:flex-grow\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    href: \"#responsive-header\",\n    className: \"jsx-2934082248\" + \" \" + \">inline-block mt-0 text-teal-200 hover:text-white text-xl mr-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 20\n    }\n  }, \"Home\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"about\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    href: \"#responsive-header\",\n    className: \"jsx-2934082248\" + \" \" + \">inline-block mt-0 text-teal-200 text-xl hover:text-white mr-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 26\n    }\n  }, \"About\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"anime\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    href: \"#responsive-header\",\n    className: \"jsx-2934082248\" + \" \" + \">inline-block mt-0 text-teal-200 text-xl hover:text-white mr-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 26\n    }\n  }, \"Animation\"))), __jsx(\"div\", {\n    className: \"jsx-2934082248\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    href: \"#\",\n    className: \"jsx-2934082248\" + \" \" + \"inline-block text-xl px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white  mt-0\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }, \"Log in\")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"2934082248\",\n    __self: _this\n  }, \".run.on.jsx-2934082248{display:none;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mb3gvRG9jdW1lbnRzL05leHQvYml0Y29pbi1hcHAvY29tcG9uZW50cy9OYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNENjLEFBSW9CLGFBQ2YiLCJmaWxlIjoiL1VzZXJzL2ZveC9Eb2N1bWVudHMvTmV4dC9iaXRjb2luLWFwcC9jb21wb25lbnRzL05hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG5cbiAgY29uc3QgW25hdmJhcixzZXROYXZiYXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGNoYW5nZUJhY2tncm91bmQgPSAoKSA9PiB7XG4gICAgaWYod2luZG93LnNjcm9sbFkgPj0gNTApIHtcbiAgICAgIHNldE5hdmJhcih0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0TmF2YmFyKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGNoYW5nZUJhY2tncm91bmQpO1xuXG4gIHJldHVybiAoXG4gPD5cbiAgPG5hdiBjbGFzc05hbWU9e2BuYXZiYXIgc3RpY2t5IHRvcC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBmbGV4LXdyYXAgcC02ICR7bmF2YmFyID8gJyBiZy1yZWQtODAwJyAgOiAnIGJnLXRyYW5zcGFyZW50JyB9YH0+XG4gIDxkaXYgY2xhc3NOYW1lPXsgYHJ1biAke25hdmJhciA/ICdvbicgOidvZmYnfWB9PlxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcHgtMyBweS0yIGJvcmRlciByb3VuZGVkIHRleHQtdGVhbC0yMDAgYm9yZGVyLXRlYWwtNDAwIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6Ym9yZGVyLXdoaXRlXCI+XG4gICAgICA8c3ZnIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCBoLTMgdy0zXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48dGl0bGU+TWVudTwvdGl0bGU+PHBhdGggZD1cIk0wIDNoMjB2MkgwVjN6bTAgNmgyMHYySDBWOXptMCA2aDIwdjJIMHYtMnpcIi8+PC9zdmc+XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzTmFtZT17XCJmbGV4LWdyb3cgZmxleCBpdGVtcy1jZW50ZXIgdy1hdXRvXCJ9PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBsZzpmbGV4LWdyb3dcIj5cbiAgICA8TGluayBocmVmPVwiL1wiPjxhIGhyZWY9XCIjcmVzcG9uc2l2ZS1oZWFkZXJcIiBjbGFzc05hbWU9XCI+aW5saW5lLWJsb2NrIG10LTAgdGV4dC10ZWFsLTIwMCBob3Zlcjp0ZXh0LXdoaXRlIHRleHQteGwgbXItNFwiPlxuICAgICAgIEhvbWVcbiAgICAgIDwvYT48L0xpbms+XG4gICAgICA8TGluayBocmVmPVwiYWJvdXRcIj48YSBocmVmPVwiI3Jlc3BvbnNpdmUtaGVhZGVyXCIgY2xhc3NOYW1lPVwiPmlubGluZS1ibG9jayBtdC0wIHRleHQtdGVhbC0yMDAgdGV4dC14bCBob3Zlcjp0ZXh0LXdoaXRlIG1yLTRcIj5cbiAgICAgIEFib3V0XG4gICAgICA8L2E+PC9MaW5rPlxuICAgICAgPExpbmsgaHJlZj1cImFuaW1lXCI+PGEgaHJlZj1cIiNyZXNwb25zaXZlLWhlYWRlclwiIGNsYXNzTmFtZT1cIj5pbmxpbmUtYmxvY2sgbXQtMCB0ZXh0LXRlYWwtMjAwIHRleHQteGwgaG92ZXI6dGV4dC13aGl0ZSBtci00XCI+XG4gICAgICBBbmltYXRpb25cbiAgICAgIDwvYT48L0xpbms+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHRleHQteGwgcHgtNCBweS0yIGxlYWRpbmctbm9uZSBib3JkZXIgcm91bmRlZCB0ZXh0LXdoaXRlIGJvcmRlci13aGl0ZSBob3Zlcjpib3JkZXItdHJhbnNwYXJlbnQgaG92ZXI6dGV4dC10ZWFsLTUwMCBob3ZlcjpiZy13aGl0ZSAgbXQtMFwiPkxvZyBpbjwvYT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L25hdj5cblxuICA8c3R5bGUganN4PntgXG5cbiAgICAucnVuLm9uIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICBcbiAgYH08L3N0eWxlPlxuICA8Lz5cbiAgKX07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiXX0= */\\n/*@ sourceURL=/Users/fox/Documents/Next/bitcoin-app/components/Navbar.js */\"));\n};\n\n_s(Navbar, \"gGtbsjNaHFERlVAhe/8D7DSG470=\");\n\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanM/Y2Q4MiJdLCJuYW1lcyI6WyJOYXZiYXIiLCJ1c2VTdGF0ZSIsIm5hdmJhciIsInNldE5hdmJhciIsImNoYW5nZUJhY2tncm91bmQiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUVRQyxzREFBUSxDQUFDLEtBQUQsQ0FGaEI7QUFBQSxNQUVaQyxNQUZZO0FBQUEsTUFFTEMsU0FGSzs7QUFJbkIsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzdCLFFBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxJQUFrQixFQUFyQixFQUF5QjtBQUN2QkgsZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNELEtBRkQsTUFFTztBQUNMQSxlQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0Q7QUFDRixHQU5EOztBQVFBRSxRQUFNLENBQUNFLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDSCxnQkFBbEM7QUFFQSxTQUNELG1FQUNDO0FBQUEsc0hBQXVGRixNQUFNLEdBQUcsYUFBSCxHQUFvQixpQkFBakg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUEsc0RBQXdCQSxNQUFNLEdBQUcsSUFBSCxHQUFTLEtBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHdDQUFrQiw4R0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQXNDLFdBQU8sRUFBQyxXQUE5QztBQUEwRCxTQUFLLEVBQUMsNEJBQWhFO0FBQUEsd0NBQWUsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE2RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBN0YsRUFBZ0g7QUFBTSxLQUFDLEVBQUMsNkNBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQWhILENBREYsQ0FERixDQURBLEVBTUE7QUFBQSx3Q0FBZ0Isb0NBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHdDQUFlLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFlO0FBQUcsUUFBSSxFQUFDLG9CQUFSO0FBQUEsd0NBQXVDLGdFQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQWYsQ0FEQSxFQUlFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW1CO0FBQUcsUUFBSSxFQUFDLG9CQUFSO0FBQUEsd0NBQXVDLGdFQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQW5CLENBSkYsRUFPRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFtQjtBQUFHLFFBQUksRUFBQyxvQkFBUjtBQUFBLHdDQUF1QyxnRUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBbkIsQ0FQRixDQURGLEVBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBLHdDQUFzQixzSkFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLENBWkYsQ0FOQSxDQUREO0FBQUE7QUFBQTtBQUFBLGc5RkFEQztBQWtDRSxDQWhESjs7R0FBTUYsTTs7S0FBQUEsTTtBQWtEU0EscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG5cbiAgY29uc3QgW25hdmJhcixzZXROYXZiYXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGNoYW5nZUJhY2tncm91bmQgPSAoKSA9PiB7XG4gICAgaWYod2luZG93LnNjcm9sbFkgPj0gNTApIHtcbiAgICAgIHNldE5hdmJhcih0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0TmF2YmFyKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGNoYW5nZUJhY2tncm91bmQpO1xuXG4gIHJldHVybiAoXG4gPD5cbiAgPG5hdiBjbGFzc05hbWU9e2BuYXZiYXIgc3RpY2t5IHRvcC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBmbGV4LXdyYXAgcC02ICR7bmF2YmFyID8gJyBiZy1yZWQtODAwJyAgOiAnIGJnLXRyYW5zcGFyZW50JyB9YH0+XG4gIDxkaXYgY2xhc3NOYW1lPXsgYHJ1biAke25hdmJhciA/ICdvbicgOidvZmYnfWB9PlxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcHgtMyBweS0yIGJvcmRlciByb3VuZGVkIHRleHQtdGVhbC0yMDAgYm9yZGVyLXRlYWwtNDAwIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6Ym9yZGVyLXdoaXRlXCI+XG4gICAgICA8c3ZnIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCBoLTMgdy0zXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48dGl0bGU+TWVudTwvdGl0bGU+PHBhdGggZD1cIk0wIDNoMjB2MkgwVjN6bTAgNmgyMHYySDBWOXptMCA2aDIwdjJIMHYtMnpcIi8+PC9zdmc+XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzTmFtZT17XCJmbGV4LWdyb3cgZmxleCBpdGVtcy1jZW50ZXIgdy1hdXRvXCJ9PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBsZzpmbGV4LWdyb3dcIj5cbiAgICA8TGluayBocmVmPVwiL1wiPjxhIGhyZWY9XCIjcmVzcG9uc2l2ZS1oZWFkZXJcIiBjbGFzc05hbWU9XCI+aW5saW5lLWJsb2NrIG10LTAgdGV4dC10ZWFsLTIwMCBob3Zlcjp0ZXh0LXdoaXRlIHRleHQteGwgbXItNFwiPlxuICAgICAgIEhvbWVcbiAgICAgIDwvYT48L0xpbms+XG4gICAgICA8TGluayBocmVmPVwiYWJvdXRcIj48YSBocmVmPVwiI3Jlc3BvbnNpdmUtaGVhZGVyXCIgY2xhc3NOYW1lPVwiPmlubGluZS1ibG9jayBtdC0wIHRleHQtdGVhbC0yMDAgdGV4dC14bCBob3Zlcjp0ZXh0LXdoaXRlIG1yLTRcIj5cbiAgICAgIEFib3V0XG4gICAgICA8L2E+PC9MaW5rPlxuICAgICAgPExpbmsgaHJlZj1cImFuaW1lXCI+PGEgaHJlZj1cIiNyZXNwb25zaXZlLWhlYWRlclwiIGNsYXNzTmFtZT1cIj5pbmxpbmUtYmxvY2sgbXQtMCB0ZXh0LXRlYWwtMjAwIHRleHQteGwgaG92ZXI6dGV4dC13aGl0ZSBtci00XCI+XG4gICAgICBBbmltYXRpb25cbiAgICAgIDwvYT48L0xpbms+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHRleHQteGwgcHgtNCBweS0yIGxlYWRpbmctbm9uZSBib3JkZXIgcm91bmRlZCB0ZXh0LXdoaXRlIGJvcmRlci13aGl0ZSBob3Zlcjpib3JkZXItdHJhbnNwYXJlbnQgaG92ZXI6dGV4dC10ZWFsLTUwMCBob3ZlcjpiZy13aGl0ZSAgbXQtMFwiPkxvZyBpbjwvYT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L25hdj5cblxuICA8c3R5bGUganN4PntgXG5cbiAgICAucnVuLm9uIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICBcbiAgYH08L3N0eWxlPlxuICA8Lz5cbiAgKX07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navbar.js\n");

/***/ })

})