"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/TodoCard.tsx":
/*!*********************************!*\
  !*** ./components/TodoCard.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/.pnpm/axios@1.7.7/node_modules/axios/lib/axios.js\");\n/* harmony import */ var _barrel_optimize_names_FaCheck_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=FaCheck!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/.pnpm/react-icons@5.3.0_react@19.0.0-rc-66855b96-20241106/node_modules/react-icons/fa/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst TodoCard = ()=>{\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // Fetch todos when the component mounts\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"TodoCard.useEffect\": ()=>{\n            const fetchTodos = {\n                \"TodoCard.useEffect.fetchTodos\": async ()=>{\n                    try {\n                        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get('http://127.0.0.1:8000/api/todo/');\n                        setTodos(response.data);\n                    } catch (error) {\n                        console.error('Error fetching todos:', error);\n                    }\n                }\n            }[\"TodoCard.useEffect.fetchTodos\"];\n            fetchTodos();\n        }\n    }[\"TodoCard.useEffect\"], []); // Empty dependency array ensures it runs only once when the component mounts\n    const toggleCompletion = async (id, completed)=>{\n        try {\n            var _todos_find;\n            const updatedTask = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].put(\"http://127.0.0.1:8000/api/todo/\".concat(id, \"/\"), {\n                is_completed: !completed,\n                title: (_todos_find = todos.find((todo)=>todo.id === id)) === null || _todos_find === void 0 ? void 0 : _todos_find.title\n            });\n        // setTodos(todos.map(todo => (todo.id ? updatedTask.data : todo)));\n        } catch (error) {\n            console.error('Error updating task:', error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#F2F0EF] text-[#171717] p-4 items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"ml-10\",\n            children: todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"w-[80%] border border-[#171717] p-2 mb-2 rounded-full flex justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"w-[50%\",\n                            children: todo.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\danph\\\\Desktop\\\\todoFolder\\\\frontendtodo\\\\components\\\\TodoCard.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 24\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>toggleCompletion(todo.id, todo.is_completed),\n                            className: \"ml-8 bg-[#b4b4b4] p-2 rounded-full shadow-md float-right\",\n                            children: !todo.is_completed && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaCheck_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaCheck, {\n                                className: \"text-[green]\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\danph\\\\Desktop\\\\todoFolder\\\\frontendtodo\\\\components\\\\TodoCard.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 48\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\danph\\\\Desktop\\\\todoFolder\\\\frontendtodo\\\\components\\\\TodoCard.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, todo.id, true, {\n                    fileName: \"C:\\\\Users\\\\danph\\\\Desktop\\\\todoFolder\\\\frontendtodo\\\\components\\\\TodoCard.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 21\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\danph\\\\Desktop\\\\todoFolder\\\\frontendtodo\\\\components\\\\TodoCard.tsx\",\n            lineNumber: 46,\n            columnNumber: 6\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\danph\\\\Desktop\\\\todoFolder\\\\frontendtodo\\\\components\\\\TodoCard.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TodoCard, \"4w2FR3x+JAhc2MKl4V8naiLXs70=\");\n_c = TodoCard;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoCard);\nvar _c;\n$RefreshReg$(_c, \"TodoCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVG9kb0NhcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRTRDO0FBQ2xCO0FBR2U7QUFRekMsTUFBTUksV0FBVzs7SUFFYixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQWEsRUFBRTtJQUVqRCx3Q0FBd0M7SUFDeENDLGdEQUFTQTs4QkFBQztZQUNOLE1BQU1NO2lEQUFhO29CQUNmLElBQUk7d0JBQ0EsTUFBTUMsV0FBVyxNQUFNTiw2Q0FBS0EsQ0FBQ08sR0FBRyxDQUFDO3dCQUNqQ0gsU0FBU0UsU0FBU0UsSUFBSTtvQkFDMUIsRUFBRSxPQUFPQyxPQUFPO3dCQUNaQyxRQUFRRCxLQUFLLENBQUMseUJBQXlCQTtvQkFDM0M7Z0JBQ0o7O1lBRUFKO1FBQ0o7NkJBQUcsRUFBRSxHQUFHLDZFQUE2RTtJQUV2RixNQUFNTSxtQkFBbUIsT0FBT0MsSUFBWUM7UUFDMUMsSUFBRztnQkFFc0NWO1lBRHJDLE1BQU1XLGNBQWMsTUFBTWQsNkNBQUtBLENBQUNlLEdBQUcsQ0FBQyxrQ0FBcUMsT0FBSEgsSUFBRyxNQUFJO2dCQUN6RUksY0FBYyxDQUFDSDtnQkFBV0ksS0FBSyxHQUFFZCxjQUFBQSxNQUFNZSxJQUFJLENBQUNDLENBQUFBLE9BQVFBLEtBQUtQLEVBQUUsS0FBS0EsaUJBQS9CVCxrQ0FBQUEsWUFBb0NjLEtBQUs7WUFBQTtRQUM5RSxvRUFBb0U7UUFDeEUsRUFBQyxPQUFNUixPQUFNO1lBQ1RDLFFBQVFELEtBQUssQ0FBQyx3QkFBd0JBO1FBQzFDO0lBRUY7SUFFQSxxQkFDRSw4REFBQ1c7UUFBSUMsV0FBVTtrQkFDZCw0RUFBQ0M7WUFBR0QsV0FBVTtzQkFDYmxCLE1BQU1vQixHQUFHLENBQUNKLENBQUFBLHFCQUNJLDhEQUFDSztvQkFBR0gsV0FBVTs7c0NBQ1gsOERBQUNJOzRCQUFLSixXQUFVO3NDQUFVRixLQUFLRixLQUFLOzs7Ozs7c0NBQ25DLDhEQUFDUzs0QkFBT0MsU0FBUyxJQUFNaEIsaUJBQWlCUSxLQUFLUCxFQUFFLEVBQUVPLEtBQUtILFlBQVk7NEJBQUdLLFdBQVU7c0NBQzlFLENBQUNGLEtBQUtILFlBQVksa0JBQUksOERBQUNmLGtGQUFPQTtnQ0FBQ29CLFdBQVU7Ozs7Ozs7Ozs7OzttQkFIa0RGLEtBQUtQLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztBQVczSDtHQTVDTVY7S0FBQUE7QUE4Q04saUVBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGFucGhcXERlc2t0b3BcXHRvZG9Gb2xkZXJcXGZyb250ZW5kdG9kb1xcY29tcG9uZW50c1xcVG9kb0NhcmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuXHJcbmltcG9ydCB7IEZhQ2hlY2sgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuXHJcbmludGVyZmFjZSBUb2RvSXRlbSB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uPzogYm9vbGVhbjtcclxuICAgIGlzX2NvbXBsZXRlZDogYm9vbGVhbjtcclxufVxyXG5jb25zdCBUb2RvQ2FyZCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlPFRvZG9JdGVtW10+KFtdKTtcclxuXHJcbiAgICAvLyBGZXRjaCB0b2RvcyB3aGVuIHRoZSBjb21wb25lbnQgbW91bnRzXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZldGNoVG9kb3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS90b2RvLycpO1xyXG4gICAgICAgICAgICAgICAgc2V0VG9kb3MocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB0b2RvczonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmZXRjaFRvZG9zKCk7XHJcbiAgICB9LCBbXSk7IC8vIEVtcHR5IGRlcGVuZGVuY3kgYXJyYXkgZW5zdXJlcyBpdCBydW5zIG9ubHkgb25jZSB3aGVuIHRoZSBjb21wb25lbnQgbW91bnRzXHJcblxyXG4gIGNvbnN0IHRvZ2dsZUNvbXBsZXRpb24gPSBhc3luYyAoaWQ6IG51bWJlciwgY29tcGxldGVkOiBib29sZWFuKSA9PiB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZFRhc2sgPSBhd2FpdCBheGlvcy5wdXQoYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvdG9kby8ke2lkfS9gLCB7XHJcbiAgICAgICAgICAgIGlzX2NvbXBsZXRlZDogIWNvbXBsZXRlZCwgdGl0bGU6IHRvZG9zLmZpbmQodG9kbyA9PiB0b2RvLmlkID09PSBpZCk/LnRpdGxlfSlcclxuICAgICAgICAvLyBzZXRUb2Rvcyh0b2Rvcy5tYXAodG9kbyA9PiAodG9kby5pZCA/IHVwZGF0ZWRUYXNrLmRhdGEgOiB0b2RvKSkpO1xyXG4gICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyB0YXNrOicsIGVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bI0YyRjBFRl0gdGV4dC1bIzE3MTcxN10gcC00IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgIDx1bCBjbGFzc05hbWU9XCJtbC0xMFwiPlxyXG4gICAgIHt0b2Rvcy5tYXAodG9kbyA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInctWzgwJV0gYm9yZGVyIGJvcmRlci1bIzE3MTcxN10gcC0yIG1iLTIgcm91bmRlZC1mdWxsIGZsZXgganVzdGlmeS1iZXR3ZWVuXCIga2V5PXt0b2RvLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LVs1MCVcIj57dG9kby50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdG9nZ2xlQ29tcGxldGlvbih0b2RvLmlkLCB0b2RvLmlzX2NvbXBsZXRlZCl9IGNsYXNzTmFtZT1cIm1sLTggYmctWyNiNGI0YjRdIHAtMiByb3VuZGVkLWZ1bGwgc2hhZG93LW1kIGZsb2F0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHshdG9kby5pc19jb21wbGV0ZWQgJiYgPEZhQ2hlY2sgY2xhc3NOYW1lPVwidGV4dC1bZ3JlZW5dXCIvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvQ2FyZCJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiRmFDaGVjayIsIlRvZG9DYXJkIiwidG9kb3MiLCJzZXRUb2RvcyIsImZldGNoVG9kb3MiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJ0b2dnbGVDb21wbGV0aW9uIiwiaWQiLCJjb21wbGV0ZWQiLCJ1cGRhdGVkVGFzayIsInB1dCIsImlzX2NvbXBsZXRlZCIsInRpdGxlIiwiZmluZCIsInRvZG8iLCJkaXYiLCJjbGFzc05hbWUiLCJ1bCIsIm1hcCIsImxpIiwic3BhbiIsImJ1dHRvbiIsIm9uQ2xpY2siXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/TodoCard.tsx\n"));

/***/ })

});