"use strict";
(() => {
var exports = {};
exports.id = 708;
exports.ids = [708];
exports.modules = {

/***/ 3095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Error_Error)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./public/text/link.js
var text_link = __webpack_require__(4661);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/Error/error-style.js

const useStyles = (0,mui_.makeStyles)({
  uniqId: 'error'
})(theme => ({
  errorWrap: {
    width: '100%',
    minHeight: 640,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(-15)
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(20)
    }
  },
  flex: {
    display: 'flex',
    justifyContent: 'center'
  },
  artwork: {
    position: 'absolute',
    top: -20,
    left: 0
  },
  deco: {
    position: 'relative',
    height: 250,
    '& h3': {
      color: theme.palette.common.white,
      fontSize: 96,
      textTransform: 'capitalize',
      fontWeight: theme.typography.fontWeightBold,
      paddingTop: 40,
      paddingLeft: 20,
      position: 'relative',
      zIndex: 1
    }
  },
  text: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(5),
      borderLeft: `1px solid ${theme.palette.divider}`
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(4)
    }
  },
  button: {
    marginTop: theme.spacing(4)
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const error_style = (useStyles);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Error/Error.js












function Error(props) {
  const {
    classes
  } = error_style();
  const {
    errCode,
    text
  } = props;
  const {
    t,
    i18n
  } = (0,external_next_i18next_.useTranslation)('common');
  const curLang = '/' + i18n.language;
  const theme = (0,styles_.useTheme)();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.errorWrap,
    children: /*#__PURE__*/jsx_runtime_.jsx((Container_default()), {
      maxWidth: "lg",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
        container: true,
        children: [/*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
          item: true,
          sm: 5,
          xs: 12,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.flex,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: classes.deco,
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: classes.artwork,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                  width: "218px",
                  height: "220px",
                  viewBox: "0 0 218 220",
                  version: "1.1",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("defs", {
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
                      x1: "133.772602%",
                      y1: "-75.1506777%",
                      x2: "21.5997463%",
                      y2: "63.260628%",
                      id: "linearGradient-1",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
                        stopColor: theme.palette.secondary.main,
                        offset: "0%"
                      }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
                        stopColor: theme.palette.primary.main,
                        offset: "100%"
                      })]
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("g", {
                    id: "Page-1",
                    stroke: "none",
                    strokeWidth: "0",
                    fill: "none",
                    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                      d: "M176.484827,177.458465 C132.792561,207.953068 56.006152,234.998281 25.7115142,210.452625 C-15.7311505,176.958554 -0.783796157,131.166659 26.4613814,56.0799491 C46.757789,0.239832833 59.6555061,-25.9055394 163.187181,34.8837009 C235.62436,77.3761797 231.125156,139.365208 176.484827,177.458465 Z",
                      id: "Path",
                      fill: "url(#linearGradient-1)",
                      fillRule: "nonzero"
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                variant: "h3",
                children: errCode
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
          item: true,
          sm: 7,
          xs: 12,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: classes.text,
            children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
              variant: "h4",
              children: text
            }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
              children: t('404_subtitle')
            }), /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
              variant: "contained",
              color: "secondary",
              href: curLang + text_link/* default.mobile.home */.Z.mobile.home,
              className: classes.button,
              children: t('back')
            })]
          })
        })]
      })
    })
  });
}

Error.defaultProps = {
  errCode: '404',
  text: ''
};
/* harmony default export */ const Error_Error = (Error);
;// CONCATENATED MODULE: ./components/Error/index.js


/***/ }),

/***/ 8967:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4539);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Footer__WEBPACK_IMPORTED_MODULE_0__]);
_Footer__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8635:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* reexport safe */ _lib_getStatic__WEBPACK_IMPORTED_MODULE_4__.Fe),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6508);
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tss_react_mui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_getStatic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1834);
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_text_brand__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3095);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8967);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3413);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Footer__WEBPACK_IMPORTED_MODULE_7__, _components_Header__WEBPACK_IMPORTED_MODULE_8__]);
([_components_Footer__WEBPACK_IMPORTED_MODULE_7__, _components_Header__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



 // Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)








const useStyles = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_2__.makeStyles)({
  uniqId: 'error'
})(theme => ({
  dedicatedPage: {
    background: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.background.paper
  }
}));

function ErrorPage(props) {
  const {
    classes
  } = useStyles();
  const {
    onToggleDark,
    onToggleDir
  } = props;
  const {
    errorCode,
    stars
  } = props;
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)('common');

  if (errorCode) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("title", {
          children: (_public_text_brand__WEBPACK_IMPORTED_MODULE_5___default().mobile.name) + ' - ' + errorCode
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: classes.dedicatedPage,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          onToggleDark: onToggleDark,
          onToggleDir: onToggleDir,
          invert: true
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_Error__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          errorCode: errorCode,
          text: t('404')
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          invert: true
        })]
      })]
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    className: classes.dedicatedPage,
    children: [t('description'), "Next stars:\xA0", stars]
  });
}

ErrorPage.defaultProps = {
  errorCode: '400',
  stars: 0
}; // Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });
// Use this below for Static Site Generation (SSG)

const getStaticProps = (0,_lib_getStatic__WEBPACK_IMPORTED_MODULE_4__/* .makeStaticProps */ .pc)(['common']);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorPage);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6959:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Check");

/***/ }),

/***/ 8148:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ExpandMore");

/***/ }),

/***/ 5418:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Language");

/***/ }),

/***/ 32:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Settings");

/***/ }),

/***/ 9409:
/***/ ((module) => {

module.exports = require("@mui/material/Accordion");

/***/ }),

/***/ 8279:
/***/ ((module) => {

module.exports = require("@mui/material/AccordionDetails");

/***/ }),

/***/ 4604:
/***/ ((module) => {

module.exports = require("@mui/material/AccordionSummary");

/***/ }),

/***/ 3882:
/***/ ((module) => {

module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 4475:
/***/ ((module) => {

module.exports = require("@mui/material/Container");

/***/ }),

/***/ 3646:
/***/ ((module) => {

module.exports = require("@mui/material/Divider");

/***/ }),

/***/ 5612:
/***/ ((module) => {

module.exports = require("@mui/material/Grid");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 3103:
/***/ ((module) => {

module.exports = require("@mui/material/InputAdornment");

/***/ }),

/***/ 5246:
/***/ ((module) => {

module.exports = require("@mui/material/Link");

/***/ }),

/***/ 4192:
/***/ ((module) => {

module.exports = require("@mui/material/List");

/***/ }),

/***/ 834:
/***/ ((module) => {

module.exports = require("@mui/material/ListItem");

/***/ }),

/***/ 3787:
/***/ ((module) => {

module.exports = require("@mui/material/ListItemIcon");

/***/ }),

/***/ 1211:
/***/ ((module) => {

module.exports = require("@mui/material/ListItemSecondaryAction");

/***/ }),

/***/ 8315:
/***/ ((module) => {

module.exports = require("@mui/material/ListItemText");

/***/ }),

/***/ 9685:
/***/ ((module) => {

module.exports = require("@mui/material/ListSubheader");

/***/ }),

/***/ 9271:
/***/ ((module) => {

module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ 7730:
/***/ ((module) => {

module.exports = require("@mui/material/OutlinedInput");

/***/ }),

/***/ 5768:
/***/ ((module) => {

module.exports = require("@mui/material/Popover");

/***/ }),

/***/ 2651:
/***/ ((module) => {

module.exports = require("@mui/material/Select");

/***/ }),

/***/ 4180:
/***/ ((module) => {

module.exports = require("@mui/material/SwipeableDrawer");

/***/ }),

/***/ 3191:
/***/ ((module) => {

module.exports = require("@mui/material/Switch");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 9868:
/***/ ((module) => {

module.exports = require("@mui/material/useMediaQuery");

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2217:
/***/ ((module) => {

module.exports = require("react-anchor-link-smooth-scroll");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 6578:
/***/ ((module) => {

module.exports = require("react-scrollspy");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6508:
/***/ ((module) => {

module.exports = require("tss-react/mui");

/***/ }),

/***/ 3707:
/***/ ((module) => {

module.exports = import("next-language-detector");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,932,676,63,449,567], () => (__webpack_exec__(8635)));
module.exports = __webpack_exports__;

})();