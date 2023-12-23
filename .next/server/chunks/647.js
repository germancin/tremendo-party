"use strict";
exports.id = 647;
exports.ids = [647];
exports.modules = {

/***/ 8647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Notification_Notification)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Snackbar"
var Snackbar_ = __webpack_require__(9174);
var Snackbar_default = /*#__PURE__*/__webpack_require__.n(Snackbar_);
// EXTERNAL MODULE: external "@mui/material/SnackbarContent"
var SnackbarContent_ = __webpack_require__(9829);
var SnackbarContent_default = /*#__PURE__*/__webpack_require__.n(SnackbarContent_);
// EXTERNAL MODULE: external "@mui/material/Slide"
var Slide_ = __webpack_require__(6080);
var Slide_default = /*#__PURE__*/__webpack_require__.n(Slide_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/Notification/notification-style.js

const notificationStyles = (0,mui_.makeStyles)({
  uniqId: 'notif'
})(theme => ({
  notification: {
    width: '95%',
    [theme.breakpoints.up('lg')]: {
      width: '80%'
    },
    '& > div': {
      width: '100%',
      color: theme.palette.common.white,
      background: '#424242',
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(1, 4)
      },
      '& > div:first-of-type': {
        [theme.breakpoints.up('sm')]: {
          flex: 1,
          marginRight: theme.spacing(2)
        },
        [theme.breakpoints.down('sm')]: {
          textAlign: 'center'
        }
      }
    }
  },
  button: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 150
    }
  },
  action: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: 0,
      margin: 0
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const notification_style = (notificationStyles);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Notification/Notification.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function TransitionUp(props) {
  return /*#__PURE__*/jsx_runtime_.jsx((Slide_default()), _objectSpread(_objectSpread({}, props), {}, {
    direction: "up"
  }));
}

function Notification() {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    classes
  } = notification_style();
  const {
    0: open,
    1: setOpen
  } = (0,external_react_.useState)(true);

  const handleClose = () => {
    setOpen(false);
  };

  return /*#__PURE__*/jsx_runtime_.jsx((Snackbar_default()), {
    TransitionComponent: TransitionUp,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    classes: {
      root: classes.notification
    },
    open: open,
    onClose: handleClose,
    children: /*#__PURE__*/jsx_runtime_.jsx((SnackbarContent_default()), {
      message: /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
        id: "message-id",
        children: t('notif_msg')
      }),
      classes: {
        action: classes.action
      },
      action: /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
        color: "secondary",
        variant: "contained",
        className: classes.button,
        onClick: handleClose,
        children: t('accept')
      })
    })
  });
}

/* harmony default export */ const Notification_Notification = (Notification);
;// CONCATENATED MODULE: ./components/Notification/index.js


/***/ })

};
;