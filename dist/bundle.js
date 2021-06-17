/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contactUs.js":
/*!**************************!*\
  !*** ./src/contactUs.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contactUsPage = () => {\n    // contact us page module\n    const ELEMENT = document.getElementById(\"content\");\n\n    // Contact Us Display\n\tconst HEADER = document.createElement(\"h1\");\n\tHEADER.innerHTML = \"Via Fratelli\";\n\n\tconst PHONE_NUMBER = document.createElement(\"p\");\n\tPHONE_NUMBER.innerHTML = \"0423 082 781\";\n\n\tconst EMAIL = document.createElement(\"p\");\n\tEMAIL.innerHTML = \"contactus@viafratelli.com\"\n\n\tELEMENT.append(HEADER, PHONE_NUMBER, EMAIL);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactUsPage);\n\n//# sourceURL=webpack://restaurant-page/./src/contactUs.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _wood_fire_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wood-fire-pizza.jpg */ \"./src/wood-fire-pizza.jpg\");\n\n\n\nconst homePage = () => {\n\tconst ELEMENT = document.getElementById(\"content\");\n\n\t//Tabbed Options;\n\tconst TABBED_OPTIONS = document.createElement(\"ul\");\n\tconst HOME = document.createElement(\"li\");\n    HOME.id = \"homeBtn\";\n\tHOME.innerHTML = \"HOME\";\n\tconst MENU = document.createElement(\"li\");\n    MENU.id = \"menuBtn\";\n\tMENU.innerHTML = \"MENU\";\n\tconst CONTACT_US = document.createElement(\"li\");\n    CONTACT_US.id = \"contactUsBtn\"\n\tCONTACT_US.innerHTML = \"CONTACT US\";\n\tTABBED_OPTIONS.append(HOME, MENU, CONTACT_US);\n\n    // Home Page Display\n\tconst HEADER = document.createElement(\"h1\");\n\tHEADER.innerHTML = \"Via Fratelli\";\n\n\tconst SUB_TEXT = document.createElement(\"h2\");\n\tSUB_TEXT.innerHTML = \"Authentic Wood-Fired Pizza Ristorante\";\n\n\tconst IMAGE = new Image();\n\tIMAGE.src = _wood_fire_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__;\n\n\tELEMENT.append(HEADER, SUB_TEXT, IMAGE);\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navBar */ \"./src/navBar.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contactUs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactUs */ \"./src/contactUs.js\");\n\n\n\n\n\n\n// On page Load calls home:\n(0,_navBar__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_home__WEBPACK_IMPORTED_MODULE_1__.default)();\n\n\n// Event listeners for tabs\nconst HOME_BTN = document.getElementById(\"homeBtn\");\nconst MENU_BTN = document.getElementById(\"menuBtn\")\nconst CONTACT_US = document.getElementById(\"contactUsBtn\")\n\nHOME_BTN.addEventListener(\"click\", () => {\n    document.getElementById(\"content\").innerHTML = \"\"; //wipes current page\n    (0,_home__WEBPACK_IMPORTED_MODULE_1__.default)();\n})\n\nMENU_BTN.addEventListener(\"click\", () => {\n    document.getElementById(\"content\").innerHTML = \"\"; //wipes current page\n    (0,_menu__WEBPACK_IMPORTED_MODULE_2__.default)();\n})\n\nCONTACT_US.addEventListener(\"click\", () => {\n    document.getElementById(\"content\").innerHTML = \"\"; //wipes current page\n    (0,_contactUs__WEBPACK_IMPORTED_MODULE_3__.default)();\n})\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menuPage = () => {\n    // menu page module\n\tconst ELEMENT = document.getElementById(\"content\");\n    // Contact Us Display\n\tconst HEADER = document.createElement(\"h1\")\n\tHEADER.innerHTML = \"Via Fratelli\";\n\n\tconst FOOD_ITEMS = document.createElement(\"p\");\n\tFOOD_ITEMS.innerHTML = \"Margarita Pizza\";\n\n\tconst EMAIL = document.createElement(\"p\");\n\tEMAIL.innerHTML = \"contactus@viafratelli.com\"\n\n\tELEMENT.append(HEADER, FOOD_ITEMS, EMAIL);\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/navBar.js":
/*!***********************!*\
  !*** ./src/navBar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst navBar = () => {\n\t//Tabbed Options;\n    const NAV_BAR = document.getElementById(\"navBar\")\n\n\tconst TABBED_OPTIONS = document.createElement(\"ul\");\n\tconst HOME = document.createElement(\"li\");\n\tHOME.id = \"homeBtn\";\n\tHOME.innerHTML = \"HOME\";\n\tconst MENU = document.createElement(\"li\");\n\tMENU.id = \"menuBtn\";\n\tMENU.innerHTML = \"MENU\";\n\tconst CONTACT_US = document.createElement(\"li\");\n\tCONTACT_US.id = \"contactUsBtn\";\n\tCONTACT_US.innerHTML = \"CONTACT US\";\n\tTABBED_OPTIONS.append(HOME, MENU, CONTACT_US);\n\n    NAV_BAR.appendChild(TABBED_OPTIONS);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navBar);\n\n//# sourceURL=webpack://restaurant-page/./src/navBar.js?");

/***/ }),

/***/ "./src/wood-fire-pizza.jpg":
/*!*********************************!*\
  !*** ./src/wood-fire-pizza.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2e7bd356bc1d0ef48b08.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/wood-fire-pizza.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;