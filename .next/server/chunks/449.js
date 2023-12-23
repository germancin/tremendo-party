exports.id = 449;
exports.ids = [449];
exports.modules = {

/***/ 1834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fe": () => (/* binding */ getStaticPaths),
/* harmony export */   "pc": () => (/* binding */ makeStaticProps)
/* harmony export */ });
/* unused harmony exports getI18nPaths, getI18nProps */
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2207);
/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_next_i18next_config__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const getI18nPaths = () => _next_i18next_config__WEBPACK_IMPORTED_MODULE_1___default().i18n.locales.map(lng => ({
  params: {
    locale: lng
  }
}));
const getStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths()
});
const getI18nProps = async (ctx, ns = ['common']) => {
  const locale = ctx?.params?.locale;

  const props = _objectSpread({}, await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__.serverSideTranslations)(locale, ns));

  return props;
};
const makeStaticProps = (ns = []) => async ctx => ({
  props: await getI18nProps(ctx, ns)
});

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

/***/ }),

/***/ 15:
/***/ ((module) => {

module.exports = {
  mobile: {
    name: 'Mobile Apps',
    desc: 'Luxiren Mobile Apps - React Single Landing Page Template',
    prefix: 'luxiren',
    footerText: 'Luxiren Theme 2021',
    logoText: 'Luxiren Mobile',
    projectName: 'Mobile',
    url: 'luxireact.ux-maestro.com/mobile',
    img: '/static/images/mobile-logo.png',
    notifMsg: 'Donec sit amet nulla sed arcu pulvinar ultricies commodo id ligula.'
  }
};

/***/ }),

/***/ 4661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const link = {
  mobile: {
    home: '/',
    contact: '/contact'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (link);

/***/ }),

/***/ 9618:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6dXJsKCNTVkdJRF8xXyk7fQoJLnN0MXtmaWxsOiM2NzNBQjc7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjIwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIxNi43ODM4IiB5MT0iMjU2IiB4Mj0iNDk1LjIxNjIiIHkyPSIyNTYiPgoJPHN0b3AgIG9mZnNldD0iMC4xODQ2IiBzdHlsZT0ic3RvcC1jb2xvcjojNjczQUI3Ii8+Cgk8c3RvcCAgb2Zmc2V0PSIwLjkyNTIiIHN0eWxlPSJzdG9wLWNvbG9yOiM4RDYzRUEiLz4KPC9saW5lYXJHcmFkaWVudD4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQwNSw0MDQuM0MzMDguOSw0NzEuNCwxNDAsNTMwLjksNzMuMyw0NzYuOUMtMTcuOCw0MDMuMiwxNSwzMDIuNSw3NSwxMzcuNWM0NC42LTEyMi45LDczLTE4MC4zLDMwMC43LTQ2LjYKCUM1MzQuOSwxODQuMiw1MjUuMSwzMjAuNSw0MDUsNDA0LjN6Ii8+CjxnPgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTEzNy44LDMzMC40VjE3OC45aDE4Ljl2MTM0LjdoNzAuNHYxNi44SDEzNy44eiIvPgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTI2Ni44LDI4Mi4ydi03Ni44aDE3Ljl2NzUuNmMwLDIyLjMsMTIuNSwzNi4zLDM1LjcsMzYuM2MyMy4yLDAsMzUuOS0xNC4xLDM1LjktMzYuM3YtNzUuNmgxNy45djc2LjgKCQljMCwzMC45LTE4LjIsNTAuOS01My44LDUwLjlDMjg0LjcsMzMzLjEsMjY2LjgsMzEyLjksMjY2LjgsMjgyLjJ6Ii8+CjwvZz4KPC9zdmc+Cg=="

/***/ })

};
;