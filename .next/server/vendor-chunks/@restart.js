"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@restart";
exports.ids = ["vendor-chunks/@restart"];
exports.modules = {

/***/ "(ssr)/./node_modules/@restart/hooks/esm/useMergedRefs.js":
/*!**********************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useMergedRefs.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   mergeRefs: () => (/* binding */ mergeRefs)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst toFnRef = ref => !ref || typeof ref === 'function' ? ref : value => {\n  ref.current = value;\n};\nfunction mergeRefs(refA, refB) {\n  const a = toFnRef(refA);\n  const b = toFnRef(refB);\n  return value => {\n    if (a) a(value);\n    if (b) b(value);\n  };\n}\n\n/**\n * Create and returns a single callback ref composed from two other Refs.\n *\n * ```tsx\n * const Button = React.forwardRef((props, ref) => {\n *   const [element, attachRef] = useCallbackRef<HTMLButtonElement>();\n *   const mergedRef = useMergedRefs(ref, attachRef);\n *\n *   return <button ref={mergedRef} {...props}/>\n * })\n * ```\n *\n * @param refA A Callback or mutable Ref\n * @param refB A Callback or mutable Ref\n * @category refs\n */\nfunction useMergedRefs(refA, refB) {\n  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => mergeRefs(refA, refB), [refA, refB]);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMergedRefs);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZU1lcmdlZFJlZnMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsWUFBWSxTQUFTO0FBQzlDLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsOENBQU87QUFDaEI7QUFDQSxpRUFBZSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2VzdGFvLXBhZ2FtZW50b3MvLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZU1lcmdlZFJlZnMuanM/OTY3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuY29uc3QgdG9GblJlZiA9IHJlZiA9PiAhcmVmIHx8IHR5cGVvZiByZWYgPT09ICdmdW5jdGlvbicgPyByZWYgOiB2YWx1ZSA9PiB7XG4gIHJlZi5jdXJyZW50ID0gdmFsdWU7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlUmVmcyhyZWZBLCByZWZCKSB7XG4gIGNvbnN0IGEgPSB0b0ZuUmVmKHJlZkEpO1xuICBjb25zdCBiID0gdG9GblJlZihyZWZCKTtcbiAgcmV0dXJuIHZhbHVlID0+IHtcbiAgICBpZiAoYSkgYSh2YWx1ZSk7XG4gICAgaWYgKGIpIGIodmFsdWUpO1xuICB9O1xufVxuXG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJucyBhIHNpbmdsZSBjYWxsYmFjayByZWYgY29tcG9zZWQgZnJvbSB0d28gb3RoZXIgUmVmcy5cbiAqXG4gKiBgYGB0c3hcbiAqIGNvbnN0IEJ1dHRvbiA9IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAqICAgY29uc3QgW2VsZW1lbnQsIGF0dGFjaFJlZl0gPSB1c2VDYWxsYmFja1JlZjxIVE1MQnV0dG9uRWxlbWVudD4oKTtcbiAqICAgY29uc3QgbWVyZ2VkUmVmID0gdXNlTWVyZ2VkUmVmcyhyZWYsIGF0dGFjaFJlZik7XG4gKlxuICogICByZXR1cm4gPGJ1dHRvbiByZWY9e21lcmdlZFJlZn0gey4uLnByb3BzfS8+XG4gKiB9KVxuICogYGBgXG4gKlxuICogQHBhcmFtIHJlZkEgQSBDYWxsYmFjayBvciBtdXRhYmxlIFJlZlxuICogQHBhcmFtIHJlZkIgQSBDYWxsYmFjayBvciBtdXRhYmxlIFJlZlxuICogQGNhdGVnb3J5IHJlZnNcbiAqL1xuZnVuY3Rpb24gdXNlTWVyZ2VkUmVmcyhyZWZBLCByZWZCKSB7XG4gIHJldHVybiB1c2VNZW1vKCgpID0+IG1lcmdlUmVmcyhyZWZBLCByZWZCKSwgW3JlZkEsIHJlZkJdKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHVzZU1lcmdlZFJlZnM7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@restart/hooks/esm/useMergedRefs.js\n");

/***/ })

};
;