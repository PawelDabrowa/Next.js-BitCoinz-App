module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/progressbar.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/progressbar.js":
/*!******************************!*\
  !*** ./pages/progressbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/fox/Documents/Next/bitcoin-app/pages/progressbar.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\nfunction Progress() {\n  const {\n    0: progress,\n    1: setProgress\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  const articleRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useLayoutEffect\"])(() => {\n    const updateHeight = () => {\n      if (!articleRef.current) return;\n      const {\n        height\n      } = articleRef.current.getBoundingClientRect();\n      setProgress(window.scrollY / (height - window.innerHeight));\n    };\n\n    updateHeight();\n    window.addEventListener(\"scroll\", updateHeight);\n    return () => {\n      window.removeEventListener(\"scroll\", updateHeight);\n    };\n  }, []);\n  const position = Math.max(1 - progress, 0);\n  const complete = position === 0;\n  const notMoved = position === 1;\n  const percent = Math.floor(progress * 100);\n  const DIAMETER = 400;\n  const STROKE_WIDTH = 50;\n  const RADIUS = DIAMETER / 2 - STROKE_WIDTH / 2;\n  const CIRCUMFERENCE = Math.PI * RADIUS * 2;\n  return __jsx(\"div\", {\n    className: \"jsx-483184650\" + \" \" + \"App\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    ref: articleRef,\n    className: \"jsx-483184650\" + \" \" + \"article\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-483184650\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: {\n      position: \"fixed\",\n      top: '50px',\n      right: '50px'\n    },\n    className: \"jsx-483184650\" + \" \" + \"button\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  }), __jsx(\"button\", {\n    style: {\n      position: \"fixed\"\n    },\n    className: \"jsx-483184650\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 11\n    }\n  }, !notMoved && __jsx(\"svg\", {\n    viewBox: \"0 0 400 400\",\n    className: \"jsx-483184650\" + \" \" + \"circle-progress\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 15\n    }\n  }, __jsx(\"circle\", {\n    cx: DIAMETER / 2,\n    cy: DIAMETER / 2,\n    r: RADIUS,\n    stroke: \"tomato\",\n    fill: \"transparent\",\n    strokeWidth: STROKE_WIDTH,\n    style: {\n      strokeDasharray: CIRCUMFERENCE,\n      strokeDashoffset: CIRCUMFERENCE * position\n    },\n    className: \"jsx-483184650\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 17\n    }\n  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"483184650\",\n    __self: this\n  }, \".article.jsx-483184650{height:600vh;background:linear-gradient(to bottom,#1e5799 0%,#7db9e8 100%);}button.jsx-483184650{width:100%;height:100%;max-width:400px;max-height:400px;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.circle-progress.jsx-483184650{position:absolute;left:0;top:0;width:100%;max-width:400px;max-height:400px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mb3gvRG9jdW1lbnRzL05leHQvYml0Y29pbi1hcHAvcGFnZXMvcHJvZ3Jlc3NiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEVrQixBQUlzQixBQUtGLEFBVU8sV0FUTixFQUxvRCxLQWV6RCxLQVRTLEVBVVYsTUFDSyxRQVZNLEdBV0QsY0FWUixFQVdTLE1BVlIsU0FDdUIsRUFUbEMsQUFtQkEsdUdBVEEiLCJmaWxlIjoiL1VzZXJzL2ZveC9Eb2N1bWVudHMvTmV4dC9iaXRjb2luLWFwcC9wYWdlcy9wcm9ncmVzc2Jhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gUHJvZ3Jlc3MoKSB7XG4gIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGFydGljbGVSZWYgPSB1c2VSZWYoKTtcblxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZUhlaWdodCA9ICgpID0+IHtcbiAgICAgIGlmICghYXJ0aWNsZVJlZi5jdXJyZW50KSByZXR1cm47XG5cbiAgICAgIGNvbnN0IHsgaGVpZ2h0IH0gPSBhcnRpY2xlUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIHNldFByb2dyZXNzKHdpbmRvdy5zY3JvbGxZIC8gKGhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodCkpO1xuICAgIH07XG5cbiAgICB1cGRhdGVIZWlnaHQoKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHVwZGF0ZUhlaWdodCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHVwZGF0ZUhlaWdodCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHBvc2l0aW9uID0gTWF0aC5tYXgoMSAtIHByb2dyZXNzLCAwKTtcbiAgY29uc3QgY29tcGxldGUgPSBwb3NpdGlvbiA9PT0gMDtcbiAgY29uc3Qgbm90TW92ZWQgPSBwb3NpdGlvbiA9PT0gMTtcbiAgY29uc3QgcGVyY2VudCA9IE1hdGguZmxvb3IocHJvZ3Jlc3MqMTAwKTsgXG5cbiBcbiAgY29uc3QgRElBTUVURVIgPSA0MDA7XG4gIGNvbnN0IFNUUk9LRV9XSURUSCA9IDUwO1xuICBjb25zdCBSQURJVVMgPSBESUFNRVRFUiAvIDIgLSBTVFJPS0VfV0lEVEggLyAyO1xuICBjb25zdCBDSVJDVU1GRVJFTkNFID0gTWF0aC5QSSAqIFJBRElVUyAqIDI7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlXCIgcmVmPXthcnRpY2xlUmVmfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IFxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgICAgICB0b3A6ICc1MHB4JyxcbiAgICAgICAgICAgIHJpZ2h0OiAnNTBweCcsXG4gICAgICAgICAgICBcbiAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICB7Lyoge2NvbXBsZXRlID8gXCJDb21wbGV0ZWRcIiAgOiBgJHsgcGVyY2VudH0lYCB9ICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHshbm90TW92ZWQgJiYgKFxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA0MDAgNDAwXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaXJjbGUtcHJvZ3Jlc3NcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgICAgY3g9e0RJQU1FVEVSIC8gMn1cbiAgICAgICAgICAgICAgICAgIGN5PXtESUFNRVRFUiAvIDJ9XG4gICAgICAgICAgICAgICAgICByPXtSQURJVVN9XG4gICAgICAgICAgICAgICAgICBzdHJva2U9XCJ0b21hdG9cIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXtTVFJPS0VfV0lEVEh9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBzdHJva2VEYXNoYXJyYXk6IENJUkNVTUZFUkVOQ0UsXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IENJUkNVTUZFUkVOQ0UgKiBwb3NpdGlvblxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgIC5hcnRpY2xlIHtcbiAgICAgICAgaGVpZ2h0OiA2MDB2aDtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzFlNTc5OSAwJSwgIzdkYjllOCAxMDAlKTtcbiAgICAgIH1cblxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgfVxuXG4gICAgICAuY2lyY2xlLXByb2dyZXNzIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgICAgIH1cblxuICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3M7XG4iXX0= */\\n/*@ sourceURL=/Users/fox/Documents/Next/bitcoin-app/pages/progressbar.js */\"));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Progress);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9ncmVzc2Jhci5qcz84Y2RmIl0sIm5hbWVzIjpbIlByb2dyZXNzIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsInVzZVN0YXRlIiwiYXJ0aWNsZVJlZiIsInVzZVJlZiIsInVzZUxheW91dEVmZmVjdCIsInVwZGF0ZUhlaWdodCIsImN1cnJlbnQiLCJoZWlnaHQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInBvc2l0aW9uIiwiTWF0aCIsIm1heCIsImNvbXBsZXRlIiwibm90TW92ZWQiLCJwZXJjZW50IiwiZmxvb3IiLCJESUFNRVRFUiIsIlNUUk9LRV9XSURUSCIsIlJBRElVUyIsIkNJUkNVTUZFUkVOQ0UiLCJQSSIsInRvcCIsInJpZ2h0Iiwic3Ryb2tlRGFzaGFycmF5Iiwic3Ryb2tlRGFzaG9mZnNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxRQUFULEdBQW9CO0FBQ2xCLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsc0RBQVEsQ0FBQyxDQUFELENBQXhDO0FBQ0EsUUFBTUMsVUFBVSxHQUFHQyxvREFBTSxFQUF6QjtBQUVBQywrREFBZSxDQUFDLE1BQU07QUFDcEIsVUFBTUMsWUFBWSxHQUFHLE1BQU07QUFDekIsVUFBSSxDQUFDSCxVQUFVLENBQUNJLE9BQWhCLEVBQXlCO0FBRXpCLFlBQU07QUFBRUM7QUFBRixVQUFhTCxVQUFVLENBQUNJLE9BQVgsQ0FBbUJFLHFCQUFuQixFQUFuQjtBQUVBUixpQkFBVyxDQUFDUyxNQUFNLENBQUNDLE9BQVAsSUFBa0JILE1BQU0sR0FBR0UsTUFBTSxDQUFDRSxXQUFsQyxDQUFELENBQVg7QUFDRCxLQU5EOztBQVFBTixnQkFBWTtBQUVaSSxVQUFNLENBQUNHLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDUCxZQUFsQztBQUNBLFdBQU8sTUFBTTtBQUNYSSxZQUFNLENBQUNJLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDUixZQUFyQztBQUNELEtBRkQ7QUFHRCxHQWZjLEVBZVosRUFmWSxDQUFmO0FBaUJBLFFBQU1TLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVMsSUFBSWpCLFFBQWIsRUFBdUIsQ0FBdkIsQ0FBakI7QUFDQSxRQUFNa0IsUUFBUSxHQUFHSCxRQUFRLEtBQUssQ0FBOUI7QUFDQSxRQUFNSSxRQUFRLEdBQUdKLFFBQVEsS0FBSyxDQUE5QjtBQUNBLFFBQU1LLE9BQU8sR0FBR0osSUFBSSxDQUFDSyxLQUFMLENBQVdyQixRQUFRLEdBQUMsR0FBcEIsQ0FBaEI7QUFHQSxRQUFNc0IsUUFBUSxHQUFHLEdBQWpCO0FBQ0EsUUFBTUMsWUFBWSxHQUFHLEVBQXJCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHRixRQUFRLEdBQUcsQ0FBWCxHQUFlQyxZQUFZLEdBQUcsQ0FBN0M7QUFDQSxRQUFNRSxhQUFhLEdBQUdULElBQUksQ0FBQ1UsRUFBTCxHQUFVRixNQUFWLEdBQW1CLENBQXpDO0FBRUEsU0FDRTtBQUFBLHVDQUFlLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQXlCLE9BQUcsRUFBRXJCLFVBQTlCO0FBQUEsdUNBQWUsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFFQSxTQUFLLEVBQUU7QUFDTFksY0FBUSxFQUFFLE9BREw7QUFFTFksU0FBRyxFQUFFLE1BRkE7QUFHTEMsV0FBSyxFQUFFO0FBSEYsS0FGUDtBQUFBLHVDQUNVLFFBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBWUU7QUFDRSxTQUFLLEVBQUU7QUFDTGIsY0FBUSxFQUFFO0FBREwsS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRyxDQUFDSSxRQUFELElBQ0M7QUFDRSxXQUFPLEVBQUMsYUFEVjtBQUFBLHVDQUVZLGlCQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUNFLE1BQUUsRUFBRUcsUUFBUSxHQUFHLENBRGpCO0FBRUUsTUFBRSxFQUFFQSxRQUFRLEdBQUcsQ0FGakI7QUFHRSxLQUFDLEVBQUVFLE1BSEw7QUFJRSxVQUFNLEVBQUMsUUFKVDtBQUtFLFFBQUksRUFBQyxhQUxQO0FBTUUsZUFBVyxFQUFFRCxZQU5mO0FBT0UsU0FBSyxFQUFFO0FBQ0xNLHFCQUFlLEVBQUVKLGFBRFo7QUFFTEssc0JBQWdCLEVBQUVMLGFBQWEsR0FBR1Y7QUFGN0IsS0FQVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQU5KLENBWkYsQ0FERixDQURGO0FBQUE7QUFBQTtBQUFBLHkrSUFERjtBQXVFRDs7QUFFY2hCLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcHJvZ3Jlc3NiYXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUxheW91dEVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFByb2dyZXNzKCkge1xuICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBhcnRpY2xlUmVmID0gdXNlUmVmKCk7XG5cbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1cGRhdGVIZWlnaHQgPSAoKSA9PiB7XG4gICAgICBpZiAoIWFydGljbGVSZWYuY3VycmVudCkgcmV0dXJuO1xuXG4gICAgICBjb25zdCB7IGhlaWdodCB9ID0gYXJ0aWNsZVJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICBzZXRQcm9ncmVzcyh3aW5kb3cuc2Nyb2xsWSAvIChoZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQpKTtcbiAgICB9O1xuXG4gICAgdXBkYXRlSGVpZ2h0KCk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB1cGRhdGVIZWlnaHQpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB1cGRhdGVIZWlnaHQpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICBjb25zdCBwb3NpdGlvbiA9IE1hdGgubWF4KDEgLSBwcm9ncmVzcywgMCk7XG4gIGNvbnN0IGNvbXBsZXRlID0gcG9zaXRpb24gPT09IDA7XG4gIGNvbnN0IG5vdE1vdmVkID0gcG9zaXRpb24gPT09IDE7XG4gIGNvbnN0IHBlcmNlbnQgPSBNYXRoLmZsb29yKHByb2dyZXNzKjEwMCk7IFxuXG4gXG4gIGNvbnN0IERJQU1FVEVSID0gNDAwO1xuICBjb25zdCBTVFJPS0VfV0lEVEggPSA1MDtcbiAgY29uc3QgUkFESVVTID0gRElBTUVURVIgLyAyIC0gU1RST0tFX1dJRFRIIC8gMjtcbiAgY29uc3QgQ0lSQ1VNRkVSRU5DRSA9IE1hdGguUEkgKiBSQURJVVMgKiAyO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZVwiIHJlZj17YXJ0aWNsZVJlZn0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBcbiAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgdG9wOiAnNTBweCcsXG4gICAgICAgICAgICByaWdodDogJzUwcHgnLFxuICAgICAgICAgICAgXG4gICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgey8qIHtjb21wbGV0ZSA/IFwiQ29tcGxldGVkXCIgIDogYCR7IHBlcmNlbnR9JWAgfSAqL31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7IW5vdE1vdmVkICYmIChcbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDAwIDQwMFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2lyY2xlLXByb2dyZXNzXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgICAgIGN4PXtESUFNRVRFUiAvIDJ9XG4gICAgICAgICAgICAgICAgICBjeT17RElBTUVURVIgLyAyfVxuICAgICAgICAgICAgICAgICAgcj17UkFESVVTfVxuICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwidG9tYXRvXCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17U1RST0tFX1dJRFRIfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlRGFzaGFycmF5OiBDSVJDVU1GRVJFTkNFLFxuICAgICAgICAgICAgICAgICAgICBzdHJva2VEYXNob2Zmc2V0OiBDSVJDVU1GRVJFTkNFICogcG9zaXRpb25cbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAuYXJ0aWNsZSB7XG4gICAgICAgIGhlaWdodDogNjAwdmg7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMxZTU3OTkgMCUsICM3ZGI5ZTggMTAwJSk7XG4gICAgICB9XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgIH1cblxuICAgICAgLmNpcmNsZS1wcm9ncmVzcyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XG4gICAgICB9XG5cbiAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/progressbar.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });