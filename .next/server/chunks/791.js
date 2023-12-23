exports.id = 791;
exports.ids = [791];
exports.modules = {

/***/ 9466:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_language_detector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3707);
/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2207);
/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_next_i18next_config__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_language_detector__WEBPACK_IMPORTED_MODULE_0__]);
next_language_detector__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_language_detector__WEBPACK_IMPORTED_MODULE_0__["default"])({
  fallbackLng: (_next_i18next_config__WEBPACK_IMPORTED_MODULE_1___default().i18n.defaultLocale),
  supportedLngs: (_next_i18next_config__WEBPACK_IMPORTED_MODULE_1___default().i18n.locales)
}));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4791:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l_": () => (/* binding */ Redirect)
/* harmony export */ });
/* unused harmony exports useRedirect, getRedirect */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _languageDetector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9466);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_languageDetector__WEBPACK_IMPORTED_MODULE_2__]);
_languageDetector__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const useRedirect = go => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const to = go || router.asPath; // language detection

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const detectedLng = _languageDetector__WEBPACK_IMPORTED_MODULE_2__/* ["default"].detect */ .Z.detect();

    if (to.startsWith('/' + detectedLng) && router.route === '/404') {
      // prevent endless loop
      router.replace('/' + detectedLng + router.route);
      return;
    }

    _languageDetector__WEBPACK_IMPORTED_MODULE_2__/* ["default"].cache */ .Z.cache(detectedLng);
    router.replace('/' + detectedLng + to);
  });
  return null;
};
const Redirect = () => {
  useRedirect();
  return null;
}; // eslint-disable-next-line react/display-name

const getRedirect = to => () => {
  useRedirect(to);
  return null;
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2207:
/***/ ((module) => {

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'id', 'ar', 'pt', 'zh'],
    fallbackLng: 'en'
  },
  ssg: true // Set to true for Static Site Generation (SSG)

};

/***/ })

};
;