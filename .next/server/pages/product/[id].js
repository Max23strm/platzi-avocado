"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/product/[id]";
exports.ids = ["pages/product/[id]"];
exports.modules = {

/***/ "./pages/product/[id].tsx":
/*!********************************!*\
  !*** ./pages/product/[id].tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst ProductPage = ()=>{\n    const [avo, setAvo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const { query: { id  }  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (id) {\n            window.fetch(`/api/avo/${id}`).then((res)=>res.json()).then((data)=>setAvo(data));\n        }\n    }, []);\n    console.log(avo);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: avo.name && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: [\n                \"P\\xe1gina producto: \",\n                avo.name\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\maxio\\\\Documents\\\\Programing\\\\Platzi\\\\Next\\\\pages\\\\product\\\\[id].tsx\",\n            lineNumber: 20,\n            columnNumber: 20\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\maxio\\\\Documents\\\\Programing\\\\Platzi\\\\Next\\\\pages\\\\product\\\\[id].tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0L1tpZF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFrRDtBQUNYO0FBRXZDLE1BQU1JLGNBQWMsSUFBTTtJQUN4QixNQUFNLENBQUNDLEtBQUtDLE9BQU8sR0FBR0osK0NBQVFBLENBQUMsQ0FBQztJQUNoQyxNQUFNLEVBQ0pLLE9BQU8sRUFBRUMsR0FBRSxFQUFFLEdBQ2QsR0FBR0wsc0RBQVNBO0lBRWJGLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJTyxJQUFJO1lBQ05DLE9BQ0dDLEtBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRUYsR0FBRyxDQUFDLEVBQ3RCRyxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSSxJQUN0QkYsSUFBSSxDQUFDLENBQUNHLE9BQVNSLE9BQU9RO1FBQ3pCLENBQUM7SUFBQSxHQUFFLEVBQUU7SUFDTEMsUUFBUUMsR0FBRyxDQUFDWDtJQUNoQixxQkFDRSw4REFBQ1k7a0JBQ0VaLElBQUlhLElBQUksa0JBQUksOERBQUNDOztnQkFBRztnQkFBa0JkLElBQUlhLElBQUk7Ozs7Ozs7Ozs7OztBQUdqRDtBQUVBLGlFQUFlZCxXQUFXQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC8uL3BhZ2VzL3Byb2R1Y3QvW2lkXS50c3g/OGI2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNvbnN0IFByb2R1Y3RQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbYXZvLCBzZXRBdm9dID0gdXNlU3RhdGUoe30pXG4gIGNvbnN0IHtcbiAgICBxdWVyeTogeyBpZCB9LFxuICB9ID0gdXNlUm91dGVyKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpZCkge1xuICAgICAgd2luZG93XG4gICAgICAgIC5mZXRjaChgL2FwaS9hdm8vJHtpZH1gKVxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4gc2V0QXZvKGRhdGEpKVxuICAgICAgfX0sW10pXG4gICAgICBjb25zb2xlLmxvZyhhdm8pXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24+XG4gICAgICB7YXZvLm5hbWUgJiYgPGgxPlDDoWdpbmEgcHJvZHVjdG86IHthdm8ubmFtZX08L2gxPn1cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFBhZ2VcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiUHJvZHVjdFBhZ2UiLCJhdm8iLCJzZXRBdm8iLCJxdWVyeSIsImlkIiwid2luZG93IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwic2VjdGlvbiIsIm5hbWUiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/product/[id].tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/product/[id].tsx"));
module.exports = __webpack_exports__;

})();