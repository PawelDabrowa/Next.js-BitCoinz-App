webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/fox/Documents/Next/bitcoin-app/components/Navbar.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar Navbar = function Navbar() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      navbar = _useState[0],\n      setNavbar = _useState[1];\n\n  var changeBackground = function changeBackground() {\n    if (window.scrollY >= 50) {\n      setNavbar(true);\n    } else {\n      setNavbar(false);\n    }\n  };\n\n  window.addEventListener('scroll', changeBackground);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"nav\", {\n    className: \"jsx-1091903364\" + \" \" + \"navbar sticky top-0 flex items-center justify-between flex-wrap p-6 \".concat(navbar ? ' bg-red-100' : ' bg-transparent'),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-1091903364\" + \" \" + \"run \".concat(navbar ? 'on' : 'off'),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 3\n    }\n  }, __jsx(\"button\", {\n    className: \"jsx-1091903364\" + \" \" + \"flex items-center px-3 py-2 border rounded text-teal-900 border-teal-900 hover:text-black hover:border-blue\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, __jsx(\"svg\", {\n    viewBox: \"0 0 20 20\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    className: \"jsx-1091903364\" + \" \" + \"fill-current h-3 w-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    className: \"jsx-1091903364\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 100\n    }\n  }, \"Menu\"), __jsx(\"path\", {\n    d: \"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z\",\n    className: \"jsx-1091903364\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 119\n    }\n  })))), __jsx(\"div\", {\n    className: \"jsx-1091903364\" + \" \" + \"flex-grow justify-start flex text-center items-center w-auto menu \".concat(navbar ? 'on' : 'off'),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-1091903364\" + \" \" + \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    href: \"#responsive-header\",\n    className: \"jsx-1091903364\" + \" \" + \"inline-block text-center mt-0 text-teal-900 hover:text-white text-xl mr-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 20\n    }\n  }, \"Home\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"about\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    href: \"#responsive-header\",\n    className: \"jsx-1091903364\" + \" \" + \"inline-block mt-0 text-teal-900 text-xl hover:text-white text-center mr-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 26\n    }\n  }, \"About\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"anime\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    href: \"#responsive-header\",\n    className: \"jsx-1091903364\" + \" \" + \">text-center inline-block mt-0 text-teal-900 text-xl hover:text-white mr-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 26\n    }\n  }, \"Animation\"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"1091903364\",\n    __self: _this\n  }, \".run.on.jsx-1091903364,.menu.off.jsx-1091903364{display:none;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mb3gvRG9jdW1lbnRzL05leHQvYml0Y29pbi1hcHAvY29tcG9uZW50cy9OYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUNjLEFBS29CLGFBQ2YiLCJmaWxlIjoiL1VzZXJzL2ZveC9Eb2N1bWVudHMvTmV4dC9iaXRjb2luLWFwcC9jb21wb25lbnRzL05hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG5cbiAgY29uc3QgW25hdmJhcixzZXROYXZiYXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGNoYW5nZUJhY2tncm91bmQgPSAoKSA9PiB7XG4gICAgaWYod2luZG93LnNjcm9sbFkgPj0gNTApIHtcbiAgICAgIHNldE5hdmJhcih0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0TmF2YmFyKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGNoYW5nZUJhY2tncm91bmQpO1xuXG4gIHJldHVybiAoXG4gPD5cbiAgPG5hdiBjbGFzc05hbWU9e2BuYXZiYXIgc3RpY2t5IHRvcC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBmbGV4LXdyYXAgcC02ICR7bmF2YmFyID8gJyBiZy1yZWQtMTAwJyAgOiAnIGJnLXRyYW5zcGFyZW50JyB9YH0+XG4gIDxkaXYgY2xhc3NOYW1lPXsgYHJ1biAke25hdmJhciA/ICdvbicgOidvZmYnfWB9PlxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcHgtMyBweS0yIGJvcmRlciByb3VuZGVkIHRleHQtdGVhbC05MDAgYm9yZGVyLXRlYWwtOTAwIGhvdmVyOnRleHQtYmxhY2sgaG92ZXI6Ym9yZGVyLWJsdWVcIj5cbiAgICAgIDxzdmcgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IGgtMyB3LTNcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjx0aXRsZT5NZW51PC90aXRsZT48cGF0aCBkPVwiTTAgM2gyMHYySDBWM3ptMCA2aDIwdjJIMFY5em0wIDZoMjB2Mkgwdi0yelwiLz48L3N2Zz5cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3NOYW1lPXtgZmxleC1ncm93IGp1c3RpZnktc3RhcnQgZmxleCB0ZXh0LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1hdXRvIG1lbnUgJHtuYXZiYXIgPyAnb24nIDonb2ZmJ31gfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgIDxMaW5rIGhyZWY9XCIvXCI+PGEgaHJlZj1cIiNyZXNwb25zaXZlLWhlYWRlclwiIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB0ZXh0LWNlbnRlciBtdC0wIHRleHQtdGVhbC05MDAgaG92ZXI6dGV4dC13aGl0ZSB0ZXh0LXhsIG1yLTRcIj5cbiAgICAgICBIb21lXG4gICAgICA8L2E+PC9MaW5rPlxuICAgICAgPExpbmsgaHJlZj1cImFib3V0XCI+PGEgaHJlZj1cIiNyZXNwb25zaXZlLWhlYWRlclwiIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBtdC0wIHRleHQtdGVhbC05MDAgdGV4dC14bCBob3Zlcjp0ZXh0LXdoaXRlIHRleHQtY2VudGVyIG1yLTRcIj5cbiAgICAgIEFib3V0XG4gICAgICA8L2E+PC9MaW5rPlxuICAgICAgPExpbmsgaHJlZj1cImFuaW1lXCI+PGEgaHJlZj1cIiNyZXNwb25zaXZlLWhlYWRlclwiIGNsYXNzTmFtZT1cIj50ZXh0LWNlbnRlciBpbmxpbmUtYmxvY2sgbXQtMCB0ZXh0LXRlYWwtOTAwIHRleHQteGwgaG92ZXI6dGV4dC13aGl0ZSBtci00XCI+XG4gICAgICBBbmltYXRpb25cbiAgICAgIDwvYT48L0xpbms+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9uYXY+XG5cbiAgPHN0eWxlIGpzeD57YFxuXG4gICAgLnJ1bi5vbixcbiAgICAubWVudS5vZmYge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIFxuICBgfTwvc3R5bGU+XG4gIDwvPlxuICApfTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyOyJdfQ== */\\n/*@ sourceURL=/Users/fox/Documents/Next/bitcoin-app/components/Navbar.js */\"));\n};\n\n_s(Navbar, \"gGtbsjNaHFERlVAhe/8D7DSG470=\");\n\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanM/Y2Q4MiJdLCJuYW1lcyI6WyJOYXZiYXIiLCJ1c2VTdGF0ZSIsIm5hdmJhciIsInNldE5hdmJhciIsImNoYW5nZUJhY2tncm91bmQiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUVRQyxzREFBUSxDQUFDLEtBQUQsQ0FGaEI7QUFBQSxNQUVaQyxNQUZZO0FBQUEsTUFFTEMsU0FGSzs7QUFJbkIsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzdCLFFBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxJQUFrQixFQUFyQixFQUF5QjtBQUN2QkgsZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNELEtBRkQsTUFFTztBQUNMQSxlQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0Q7QUFDRixHQU5EOztBQVFBRSxRQUFNLENBQUNFLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDSCxnQkFBbEM7QUFFQSxTQUNELG1FQUNDO0FBQUEsc0hBQXVGRixNQUFNLEdBQUcsYUFBSCxHQUFvQixpQkFBakg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUEsc0RBQXdCQSxNQUFNLEdBQUcsSUFBSCxHQUFTLEtBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHdDQUFrQiw2R0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQXNDLFdBQU8sRUFBQyxXQUE5QztBQUEwRCxTQUFLLEVBQUMsNEJBQWhFO0FBQUEsd0NBQWUsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE2RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBN0YsRUFBZ0g7QUFBTSxLQUFDLEVBQUMsNkNBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQWhILENBREYsQ0FERixDQURBLEVBTUE7QUFBQSxvSEFBcUZBLE1BQU0sR0FBRyxJQUFILEdBQVMsS0FBcEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsd0NBQWUsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZTtBQUFHLFFBQUksRUFBQyxvQkFBUjtBQUFBLHdDQUF1QywyRUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFmLENBREEsRUFJRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFtQjtBQUFHLFFBQUksRUFBQyxvQkFBUjtBQUFBLHdDQUF1QywyRUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFuQixDQUpGLEVBT0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbUI7QUFBRyxRQUFJLEVBQUMsb0JBQVI7QUFBQSx3Q0FBdUMsNEVBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQW5CLENBUEYsQ0FERixDQU5BLENBREQ7QUFBQTtBQUFBO0FBQUEscXpGQURDO0FBZ0NFLENBOUNKOztHQUFNRixNOztLQUFBQSxNO0FBZ0RTQSxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTmF2YmFyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcblxuICBjb25zdCBbbmF2YmFyLHNldE5hdmJhcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgY2hhbmdlQmFja2dyb3VuZCA9ICgpID0+IHtcbiAgICBpZih3aW5kb3cuc2Nyb2xsWSA+PSA1MCkge1xuICAgICAgc2V0TmF2YmFyKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXROYXZiYXIoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgY2hhbmdlQmFja2dyb3VuZCk7XG5cbiAgcmV0dXJuIChcbiA8PlxuICA8bmF2IGNsYXNzTmFtZT17YG5hdmJhciBzdGlja3kgdG9wLTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGZsZXgtd3JhcCBwLTYgJHtuYXZiYXIgPyAnIGJnLXJlZC0xMDAnICA6ICcgYmctdHJhbnNwYXJlbnQnIH1gfT5cbiAgPGRpdiBjbGFzc05hbWU9eyBgcnVuICR7bmF2YmFyID8gJ29uJyA6J29mZid9YH0+XG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBweC0zIHB5LTIgYm9yZGVyIHJvdW5kZWQgdGV4dC10ZWFsLTkwMCBib3JkZXItdGVhbC05MDAgaG92ZXI6dGV4dC1ibGFjayBob3Zlcjpib3JkZXItYmx1ZVwiPlxuICAgICAgPHN2ZyBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgaC0zIHctM1wiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHRpdGxlPk1lbnU8L3RpdGxlPjxwYXRoIGQ9XCJNMCAzaDIwdjJIMFYzem0wIDZoMjB2MkgwVjl6bTAgNmgyMHYySDB2LTJ6XCIvPjwvc3ZnPlxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzc05hbWU9e2BmbGV4LWdyb3cganVzdGlmeS1zdGFydCBmbGV4IHRleHQtY2VudGVyIGl0ZW1zLWNlbnRlciB3LWF1dG8gbWVudSAke25hdmJhciA/ICdvbicgOidvZmYnfWB9PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgPExpbmsgaHJlZj1cIi9cIj48YSBocmVmPVwiI3Jlc3BvbnNpdmUtaGVhZGVyXCIgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHRleHQtY2VudGVyIG10LTAgdGV4dC10ZWFsLTkwMCBob3Zlcjp0ZXh0LXdoaXRlIHRleHQteGwgbXItNFwiPlxuICAgICAgIEhvbWVcbiAgICAgIDwvYT48L0xpbms+XG4gICAgICA8TGluayBocmVmPVwiYWJvdXRcIj48YSBocmVmPVwiI3Jlc3BvbnNpdmUtaGVhZGVyXCIgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIG10LTAgdGV4dC10ZWFsLTkwMCB0ZXh0LXhsIGhvdmVyOnRleHQtd2hpdGUgdGV4dC1jZW50ZXIgbXItNFwiPlxuICAgICAgQWJvdXRcbiAgICAgIDwvYT48L0xpbms+XG4gICAgICA8TGluayBocmVmPVwiYW5pbWVcIj48YSBocmVmPVwiI3Jlc3BvbnNpdmUtaGVhZGVyXCIgY2xhc3NOYW1lPVwiPnRleHQtY2VudGVyIGlubGluZS1ibG9jayBtdC0wIHRleHQtdGVhbC05MDAgdGV4dC14bCBob3Zlcjp0ZXh0LXdoaXRlIG1yLTRcIj5cbiAgICAgIEFuaW1hdGlvblxuICAgICAgPC9hPjwvTGluaz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L25hdj5cblxuICA8c3R5bGUganN4PntgXG5cbiAgICAucnVuLm9uLFxuICAgIC5tZW51Lm9mZiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgXG4gIGB9PC9zdHlsZT5cbiAgPC8+XG4gICl9O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar.js\n");

/***/ })

})