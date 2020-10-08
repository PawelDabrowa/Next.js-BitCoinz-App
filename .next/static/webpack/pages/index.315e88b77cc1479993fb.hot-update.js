webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/fox/Documents/Next/bitcoin-app/components/Navbar.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar Navbar = function Navbar() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      navbar = _useState[0],\n      setNavbar = _useState[1];\n\n  var changeBackground = function changeBackground() {\n    if (window.scrollY >= 50) {\n      setNavbar(true);\n    } else {\n      setNavbar(false);\n    }\n  };\n\n  window.addEventListener('scroll', changeBackground);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"nav\", {\n    className: \"jsx-1091903364\" + \" \" + \"navbar sticky top-0 flex items-center justify-between flex-wrap p-6 \".concat(navbar ? 'bg-transparent' : ' bg-transparent'),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-1091903364\" + \" \" + \"run \".concat(navbar ? 'on' : 'off'),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 3\n    }\n  }, __jsx(\"button\", {\n    className: \"jsx-1091903364\" + \" \" + \"flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-black hover:border-blue\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, __jsx(\"svg\", {\n    viewBox: \"0 0 20 20\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    className: \"jsx-1091903364\" + \" \" + \"fill-current h-3 w-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    className: \"jsx-1091903364\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 100\n    }\n  }, \"Menu\"), __jsx(\"path\", {\n    d: \"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z\",\n    className: \"jsx-1091903364\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 119\n    }\n  })))), __jsx(\"div\", {\n    className: \"jsx-1091903364\" + \" \" + \"flex-grow flex items-center w-auto menu \".concat(navbar ? 'on' : 'off'),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-1091903364\" + \" \" + \"text-sm lg:flex-grow\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    href: \"#responsive-header\",\n    className: \"jsx-1091903364\" + \" \" + \">inline-block mt-0 text-teal-900 hover:text-white text-xl mr-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 20\n    }\n  }, \"Home\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"about\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    href: \"#responsive-header\",\n    className: \"jsx-1091903364\" + \" \" + \">inline-block mt-0 text-teal-900 text-xl hover:text-white mr-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 26\n    }\n  }, \"About\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"anime\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    href: \"#responsive-header\",\n    className: \"jsx-1091903364\" + \" \" + \">inline-block mt-0 text-teal-900 text-xl hover:text-white mr-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 26\n    }\n  }, \"Animation\"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"1091903364\",\n    __self: _this\n  }, \".run.on.jsx-1091903364,.menu.off.jsx-1091903364{display:none;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mb3gvRG9jdW1lbnRzL05leHQvYml0Y29pbi1hcHAvY29tcG9uZW50cy9OYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUNjLEFBS29CLGFBQ2YiLCJmaWxlIjoiL1VzZXJzL2ZveC9Eb2N1bWVudHMvTmV4dC9iaXRjb2luLWFwcC9jb21wb25lbnRzL05hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG5cbiAgY29uc3QgW25hdmJhcixzZXROYXZiYXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGNoYW5nZUJhY2tncm91bmQgPSAoKSA9PiB7XG4gICAgaWYod2luZG93LnNjcm9sbFkgPj0gNTApIHtcbiAgICAgIHNldE5hdmJhcih0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0TmF2YmFyKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGNoYW5nZUJhY2tncm91bmQpO1xuXG4gIHJldHVybiAoXG4gPD5cbiAgPG5hdiBjbGFzc05hbWU9e2BuYXZiYXIgc3RpY2t5IHRvcC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBmbGV4LXdyYXAgcC02ICR7bmF2YmFyID8gJ2JnLXRyYW5zcGFyZW50JyAgOiAnIGJnLXRyYW5zcGFyZW50JyB9YH0+XG4gIDxkaXYgY2xhc3NOYW1lPXsgYHJ1biAke25hdmJhciA/ICdvbicgOidvZmYnfWB9PlxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcHgtMyBweS0yIGJvcmRlciByb3VuZGVkIHRleHQtdGVhbC0yMDAgYm9yZGVyLXRlYWwtNDAwIGhvdmVyOnRleHQtYmxhY2sgaG92ZXI6Ym9yZGVyLWJsdWVcIj5cbiAgICAgIDxzdmcgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IGgtMyB3LTNcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjx0aXRsZT5NZW51PC90aXRsZT48cGF0aCBkPVwiTTAgM2gyMHYySDBWM3ptMCA2aDIwdjJIMFY5em0wIDZoMjB2Mkgwdi0yelwiLz48L3N2Zz5cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3NOYW1lPXtgZmxleC1ncm93IGZsZXggaXRlbXMtY2VudGVyIHctYXV0byBtZW51ICR7bmF2YmFyID8gJ29uJyA6J29mZid9YH0+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGxnOmZsZXgtZ3Jvd1wiPlxuICAgIDxMaW5rIGhyZWY9XCIvXCI+PGEgaHJlZj1cIiNyZXNwb25zaXZlLWhlYWRlclwiIGNsYXNzTmFtZT1cIj5pbmxpbmUtYmxvY2sgbXQtMCB0ZXh0LXRlYWwtOTAwIGhvdmVyOnRleHQtd2hpdGUgdGV4dC14bCBtci00XCI+XG4gICAgICAgSG9tZVxuICAgICAgPC9hPjwvTGluaz5cbiAgICAgIDxMaW5rIGhyZWY9XCJhYm91dFwiPjxhIGhyZWY9XCIjcmVzcG9uc2l2ZS1oZWFkZXJcIiBjbGFzc05hbWU9XCI+aW5saW5lLWJsb2NrIG10LTAgdGV4dC10ZWFsLTkwMCB0ZXh0LXhsIGhvdmVyOnRleHQtd2hpdGUgbXItNFwiPlxuICAgICAgQWJvdXRcbiAgICAgIDwvYT48L0xpbms+XG4gICAgICA8TGluayBocmVmPVwiYW5pbWVcIj48YSBocmVmPVwiI3Jlc3BvbnNpdmUtaGVhZGVyXCIgY2xhc3NOYW1lPVwiPmlubGluZS1ibG9jayBtdC0wIHRleHQtdGVhbC05MDAgdGV4dC14bCBob3Zlcjp0ZXh0LXdoaXRlIG1yLTRcIj5cbiAgICAgIEFuaW1hdGlvblxuICAgICAgPC9hPjwvTGluaz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L25hdj5cblxuICA8c3R5bGUganN4PntgXG5cbiAgICAucnVuLm9uLFxuICAgIC5tZW51Lm9mZiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgXG4gIGB9PC9zdHlsZT5cbiAgPC8+XG4gICl9O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7Il19 */\\n/*@ sourceURL=/Users/fox/Documents/Next/bitcoin-app/components/Navbar.js */\"));\n};\n\n_s(Navbar, \"gGtbsjNaHFERlVAhe/8D7DSG470=\");\n\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanM/Y2Q4MiJdLCJuYW1lcyI6WyJOYXZiYXIiLCJ1c2VTdGF0ZSIsIm5hdmJhciIsInNldE5hdmJhciIsImNoYW5nZUJhY2tncm91bmQiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUVRQyxzREFBUSxDQUFDLEtBQUQsQ0FGaEI7QUFBQSxNQUVaQyxNQUZZO0FBQUEsTUFFTEMsU0FGSzs7QUFJbkIsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzdCLFFBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxJQUFrQixFQUFyQixFQUF5QjtBQUN2QkgsZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNELEtBRkQsTUFFTztBQUNMQSxlQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0Q7QUFDRixHQU5EOztBQVFBRSxRQUFNLENBQUNFLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDSCxnQkFBbEM7QUFFQSxTQUNELG1FQUNDO0FBQUEsc0hBQXVGRixNQUFNLEdBQUcsZ0JBQUgsR0FBdUIsaUJBQXBIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBLHNEQUF3QkEsTUFBTSxHQUFHLElBQUgsR0FBUyxLQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQSx3Q0FBa0IsNkdBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFzQyxXQUFPLEVBQUMsV0FBOUM7QUFBMEQsU0FBSyxFQUFDLDRCQUFoRTtBQUFBLHdDQUFlLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQTdGLEVBQWdIO0FBQU0sS0FBQyxFQUFDLDZDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFoSCxDQURGLENBREYsQ0FEQSxFQU1BO0FBQUEsMEZBQTJEQSxNQUFNLEdBQUcsSUFBSCxHQUFTLEtBQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHdDQUFlLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFlO0FBQUcsUUFBSSxFQUFDLG9CQUFSO0FBQUEsd0NBQXVDLGdFQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQWYsQ0FEQSxFQUlFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW1CO0FBQUcsUUFBSSxFQUFDLG9CQUFSO0FBQUEsd0NBQXVDLGdFQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQW5CLENBSkYsRUFPRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFtQjtBQUFHLFFBQUksRUFBQyxvQkFBUjtBQUFBLHdDQUF1QyxnRUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBbkIsQ0FQRixDQURGLENBTkEsQ0FERDtBQUFBO0FBQUE7QUFBQSxpd0ZBREM7QUFnQ0UsQ0E5Q0o7O0dBQU1GLE07O0tBQUFBLE07QUFnRFNBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OYXZiYXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xuXG4gIGNvbnN0IFtuYXZiYXIsc2V0TmF2YmFyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBjaGFuZ2VCYWNrZ3JvdW5kID0gKCkgPT4ge1xuICAgIGlmKHdpbmRvdy5zY3JvbGxZID49IDUwKSB7XG4gICAgICBzZXROYXZiYXIodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldE5hdmJhcihmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBjaGFuZ2VCYWNrZ3JvdW5kKTtcblxuICByZXR1cm4gKFxuIDw+XG4gIDxuYXYgY2xhc3NOYW1lPXtgbmF2YmFyIHN0aWNreSB0b3AtMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZmxleC13cmFwIHAtNiAke25hdmJhciA/ICdiZy10cmFuc3BhcmVudCcgIDogJyBiZy10cmFuc3BhcmVudCcgfWB9PlxuICA8ZGl2IGNsYXNzTmFtZT17IGBydW4gJHtuYXZiYXIgPyAnb24nIDonb2ZmJ31gfT5cbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHB4LTMgcHktMiBib3JkZXIgcm91bmRlZCB0ZXh0LXRlYWwtMjAwIGJvcmRlci10ZWFsLTQwMCBob3Zlcjp0ZXh0LWJsYWNrIGhvdmVyOmJvcmRlci1ibHVlXCI+XG4gICAgICA8c3ZnIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCBoLTMgdy0zXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48dGl0bGU+TWVudTwvdGl0bGU+PHBhdGggZD1cIk0wIDNoMjB2MkgwVjN6bTAgNmgyMHYySDBWOXptMCA2aDIwdjJIMHYtMnpcIi8+PC9zdmc+XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzTmFtZT17YGZsZXgtZ3JvdyBmbGV4IGl0ZW1zLWNlbnRlciB3LWF1dG8gbWVudSAke25hdmJhciA/ICdvbicgOidvZmYnfWB9PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBsZzpmbGV4LWdyb3dcIj5cbiAgICA8TGluayBocmVmPVwiL1wiPjxhIGhyZWY9XCIjcmVzcG9uc2l2ZS1oZWFkZXJcIiBjbGFzc05hbWU9XCI+aW5saW5lLWJsb2NrIG10LTAgdGV4dC10ZWFsLTkwMCBob3Zlcjp0ZXh0LXdoaXRlIHRleHQteGwgbXItNFwiPlxuICAgICAgIEhvbWVcbiAgICAgIDwvYT48L0xpbms+XG4gICAgICA8TGluayBocmVmPVwiYWJvdXRcIj48YSBocmVmPVwiI3Jlc3BvbnNpdmUtaGVhZGVyXCIgY2xhc3NOYW1lPVwiPmlubGluZS1ibG9jayBtdC0wIHRleHQtdGVhbC05MDAgdGV4dC14bCBob3Zlcjp0ZXh0LXdoaXRlIG1yLTRcIj5cbiAgICAgIEFib3V0XG4gICAgICA8L2E+PC9MaW5rPlxuICAgICAgPExpbmsgaHJlZj1cImFuaW1lXCI+PGEgaHJlZj1cIiNyZXNwb25zaXZlLWhlYWRlclwiIGNsYXNzTmFtZT1cIj5pbmxpbmUtYmxvY2sgbXQtMCB0ZXh0LXRlYWwtOTAwIHRleHQteGwgaG92ZXI6dGV4dC13aGl0ZSBtci00XCI+XG4gICAgICBBbmltYXRpb25cbiAgICAgIDwvYT48L0xpbms+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9uYXY+XG5cbiAgPHN0eWxlIGpzeD57YFxuXG4gICAgLnJ1bi5vbixcbiAgICAubWVudS5vZmYge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIFxuICBgfTwvc3R5bGU+XG4gIDwvPlxuICApfTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Navbar.js\n");

/***/ })

})