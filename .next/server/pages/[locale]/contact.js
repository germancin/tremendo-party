"use strict";
(() => {
var exports = {};
exports.id = 87;
exports.ids = [87];
exports.modules = {

/***/ 8248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contact),
  "getStaticPaths": () => (/* reexport */ getStatic/* getStaticPaths */.Fe),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
// EXTERNAL MODULE: ./lib/getStatic.js
var getStatic = __webpack_require__(1834);
// EXTERNAL MODULE: ./public/text/brand.js
var brand = __webpack_require__(15);
var brand_default = /*#__PURE__*/__webpack_require__.n(brand);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
;// CONCATENATED MODULE: external "@mui/material/FormControlLabel"
const FormControlLabel_namespaceObject = require("@mui/material/FormControlLabel");
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1168);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
;// CONCATENATED MODULE: external "@mui/icons-material/Send"
const Send_namespaceObject = require("@mui/icons-material/Send");
var Send_default = /*#__PURE__*/__webpack_require__.n(Send_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Snackbar"
var Snackbar_ = __webpack_require__(9174);
var Snackbar_default = /*#__PURE__*/__webpack_require__.n(Snackbar_);
;// CONCATENATED MODULE: external "react-material-ui-form-validator"
const external_react_material_ui_form_validator_namespaceObject = require("react-material-ui-form-validator");
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./public/images/mobile-logo.svg
var mobile_logo = __webpack_require__(9618);
var mobile_logo_default = /*#__PURE__*/__webpack_require__.n(mobile_logo);
// EXTERNAL MODULE: ./public/text/link.js
var text_link = __webpack_require__(4661);
;// CONCATENATED MODULE: external "@mui/material/colors"
const colors_namespaceObject = require("@mui/material/colors");
;// CONCATENATED MODULE: external "@mui/material/Box"
const Box_namespaceObject = require("@mui/material/Box");
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Checkbox"
const Checkbox_namespaceObject = require("@mui/material/Checkbox");
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox_namespaceObject);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Forms/Checkbox.js
const _excluded = ["classes", "errorMessages", "validatorListener", "requiredError", "value"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const red300 = colors_namespaceObject.red[500];

class CheckboxValidatorElement extends external_react_material_ui_form_validator_namespaceObject.ValidatorComponent {
  renderValidatorComponent() {
    const _this$props = this.props,
          {
      classes,
      errorMessages,
      validatorListener,
      requiredError,
      value
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, _excluded);

    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx((Checkbox_default()), _objectSpread(_objectSpread({}, rest), {}, {
        ref: r => {
          this.input = r;
        }
      })), this.errorText()]
    });
  }

  errorText() {
    const {
      isValid
    } = this.state;

    if (isValid) {
      return null;
    }

    return /*#__PURE__*/jsx_runtime_.jsx((Box_default()), {
      sx: {
        left: 42,
        fontSize: 12,
        color: red300,
        position: 'absolute',
        mt: 1
      },
      children: this.getErrorMessage()
    });
  }

}

/* harmony default export */ const Checkbox = (CheckboxValidatorElement);
// EXTERNAL MODULE: ./components/Parallax/Large.js
var Large = __webpack_require__(9141);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: ./public/images/mobile/deco-wave-light.png
var deco_wave_light = __webpack_require__(498);
var deco_wave_light_default = /*#__PURE__*/__webpack_require__.n(deco_wave_light);
// EXTERNAL MODULE: ./public/images/mobile/deco-wave-dark.png
var deco_wave_dark = __webpack_require__(548);
var deco_wave_dark_default = /*#__PURE__*/__webpack_require__.n(deco_wave_dark);
// EXTERNAL MODULE: ./public/images/mobile/deco-line-light.png
var deco_line_light = __webpack_require__(5502);
var deco_line_light_default = /*#__PURE__*/__webpack_require__.n(deco_line_light);
// EXTERNAL MODULE: ./public/images/mobile/deco-line-dark.png
var deco_line_dark = __webpack_require__(9170);
var deco_line_dark_default = /*#__PURE__*/__webpack_require__.n(deco_line_dark);
;// CONCATENATED MODULE: ./components/Forms/form-style.js






const contactStyles = (0,mui_.makeStyles)({
  uniqId: 'form'
})((theme, _params, classes) => ({
  title: {},
  pageWrap: {
    position: 'relative',
    textAlign: 'center',
    height: '100%',
    overflow: 'hidden',
    background: theme.palette.mode === 'dark' ? theme.palette.background.dafault : theme.palette.background.paper,
    padding: theme.spacing(10, 5),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(5, 1)
    },
    [`& .${classes.title}`]: {
      color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.down('md')]: {
        fontSize: 32
      }
    },
    '& a': {
      color: theme.palette.primary.main,
      textTransform: 'none',
      fontSize: 16,
      textDecoration: 'none',
      fontWeight: theme.typography.fontWeightRegular
    }
  },
  background: {
    position: 'absolute',
    height: 700,
    top: -30,
    right: -200,
    transform: theme.direction === 'rtl' ? 'scale(-1, 1)' : 'none',
    width: '50%',
    '& img': {
      position: 'absolute',
      right: theme.direction === 'rtl' ? 'auto' : 200,
      left: theme.direction === 'rtl' ? 200 : 'auto',
      top: 0
    }
  },
  decoInner: {
    position: 'absolute',
    top: 0,
    right: 0,
    opacity: 0.2,
    transform: theme.direction === 'rtl' ? 'scale(-1, 1)' : 'none'
  },
  gradient: {
    backgroundImage: `linear-gradient(30deg, ${theme.palette.primary.main} 50%, ${theme.palette.secondary.main} 140%)`,
    width: '100%',
    height: '100%',
    transform: theme.direction === 'rtl' ? 'scale(-1, 1)' : 'none',
    '& img': {
      display: 'block'
    }
  },
  decoWave: {
    position: 'absolute',
    top: 0,
    left: -1,
    width: '102%',
    height: '100%',
    transform: theme.direction === 'rtl' ? 'scale(-1, 1)' : 'none',
    background: `url(${theme.palette.mode === 'dark' ? (deco_wave_dark_default()) : (deco_wave_light_default())}) no-repeat 0 0`,
    backgroundSize: '100% 720px'
  },
  decoLine: {
    position: 'absolute',
    left: -12,
    top: -40,
    opacity: 0.56,
    width: '100%',
    height: '100%',
    transform: theme.direction === 'rtl' ? 'scale(-1, 1)' : 'none',
    background: `url(${theme.palette.mode === 'dark' ? (deco_line_dark_default()) : (deco_line_light_default())}) no-repeat 0 0`,
    backgroundSize: '100% 700px'
  },
  parallax: {
    overflow: 'hidden',
    height: '100%',
    position: 'absolute',
    width: '100%',
    top: 0,
    left: 0
  },
  innerWrap: {
    textAlign: 'left'
  },
  fullFromWrap: {
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(9, 0)
    }
  },
  formBox: {
    borderRadius: 40,
    overflow: 'hidden',
    background: 'transparent',
    boxShadow: '0 1.5px 12px 2px rgba(0, 0, 0, 0.28)',
    [theme.breakpoints.down('sm')]: {
      boxShadow: 'none'
    }
  },
  desc: {
    fontSize: 20,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    padding: theme.spacing(0, 15),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2, 1),
      fontSize: 16
    }
  },
  input: {
    width: '100%',
    '& label': {
      left: theme.spacing(0.5)
    },
    '& > div': {
      border: `1px solid ${(0,styles_.alpha)(theme.palette.text.primary, 0.25)}`,
      background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.09)' : 'none !important',
      overflow: 'hidden',
      '& input, textarea': {
        paddingLeft: theme.spacing(2),
        '&:focus': {
          background: (0,styles_.alpha)(theme.palette.background.paper, 0.9)
        },
        '&:hover': {
          background: (0,styles_.alpha)(theme.palette.background.paper, 0.13)
        }
      },
      '&:hover': {
        '& textarea': {
          background: 'none !important'
        }
      }
    }
  },
  form: {
    textAlign: 'left',
    position: 'relative',
    padding: theme.spacing(0, 15, 10),
    marginTop: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0, 4, 10)
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2, 1),
      marginTop: theme.spacing(2)
    }
  },
  formHelper: {
    display: 'flex',
    marginTop: theme.spacing(),
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  btnArea: {
    marginTop: theme.spacing(5),
    justifyContent: 'space-between',
    '& label': {
      position: 'relative'
    },
    '& button': {
      minWidth: 240
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    },
    [theme.breakpoints.down('md')]: {
      '& button': {
        marginTop: theme.spacing(4),
        width: '100%',
        height: 56
      }
    },
    '& span': {
      '& a': {
        textDecoration: 'none !important',
        color: theme.palette.secondary.main
      }
    }
  },
  primary: {
    background: theme.palette.primary.main,
    position: 'absolute',
    opacity: 0.08,
    transform: 'rotate(45deg)'
  },
  secondary: {
    background: theme.palette.secondary.main,
    position: 'absolute',
    opacity: 0.1,
    transform: 'rotate(45deg)'
  },
  rightIcon: {
    marginLeft: theme.spacing()
  },
  backtohome: {
    width: 80,
    height: 80,
    position: 'absolute',
    marginTop: 20,
    marginLeft: 20,
    zIndex: 20,
    [theme.breakpoints.up('md')]: {
      marginTop: 20,
      marginLeft: 20
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
    '& i': {
      fontSize: 32,
      color: theme.palette.text.disabled
    },
    '& > span i:first-of-type': {
      opacity: 1,
      transition: 'opacity 0.3s ease'
    },
    '& > span i:last-child': {
      position: 'absolute',
      right: 0,
      opacity: 0,
      transition: 'all 0.3s ease'
    },
    '&:hover': {
      '& > span i:first-of-type': {
        opacity: 0
      },
      '& > span i:last-child': {
        right: 30,
        opacity: 1
      }
    }
  },
  check: {
    '& svg': {
      fill: theme.palette.secondary.main
    }
  },
  logoHeader: {},
  logo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(5),
    [`&.${classes.logoHeader}`]: {
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      zIndex: 10
    },
    '& img': {
      width: 64
    },
    '& p, span': {
      display: 'block',
      fontSize: 24,
      paddingBottom: 4,
      fontWeight: theme.typography.fontWeightBold
    }
  },
  head: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    '& a': {
      marginTop: theme.spacing(2)
    }
  },
  formWrap: {
    background: theme.palette.background.paper,
    position: 'relative',
    padding: theme.spacing(6)
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const form_style = (contactStyles);
;// CONCATENATED MODULE: ./components/Forms/Contact.js
function Contact_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Contact_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Contact_ownKeys(Object(source), !0).forEach(function (key) { Contact_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Contact_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function Contact_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























function Contact() {
  const {
    classes,
    cx
  } = form_style();
  const {
    t,
    i18n
  } = (0,external_next_i18next_.useTranslation)('common');
  const curLang = '/' + i18n.language;
  const isTablet = useMediaQuery_default()(theme => theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery_default()(theme => theme.breakpoints.up('md'));
  const {
    0: values,
    1: setValues
  } = (0,external_react_.useState)({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  (0,external_react_.useEffect)(() => {
    external_react_material_ui_form_validator_namespaceObject.ValidatorForm.addValidationRule('isTruthy', value => value);
  });
  const {
    0: openNotif,
    1: setNotif
  } = (0,external_react_.useState)(false);
  const {
    0: check,
    1: setCheck
  } = (0,external_react_.useState)(false);

  const handleChange = name => event => {
    setValues(Contact_objectSpread(Contact_objectSpread({}, values), {}, {
      [name]: event.target.value
    }));
  };

  const handleCheck = event => {
    setCheck(event.target.checked);
  };

  const handleSubmit = () => {
    setNotif(true);
  };

  const handleClose = () => {
    setNotif(false);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.pageWrap,
    children: [!isTablet && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.background,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.gradient,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.decoWave
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.decoLine
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.decoInner,
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/images/mobile/animation-banner.png",
            alt: "decoration"
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.parallax,
      children: /*#__PURE__*/jsx_runtime_.jsx(Large/* default */.Z, {})
    }), /*#__PURE__*/jsx_runtime_.jsx((Snackbar_default()), {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      open: openNotif,
      autoHideDuration: 4000,
      onClose: handleClose,
      ContentProps: {
        'aria-describedby': 'message-id'
      },
      message: /*#__PURE__*/jsx_runtime_.jsx("span", {
        id: "message-id",
        children: "Message Sent"
      })
    }, "top right"), !isDesktop && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: cx(classes.logo, classes.logoHeader),
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
        href: curLang + text_link/* default.mobile.home */.Z.mobile.home,
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: (mobile_logo_default()),
          alt: "logo"
        }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
          component: "span",
          children: (brand_default()).mobile.projectName
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Container_default()), {
      maxWidth: "md",
      className: classes.innerWrap,
      children: [/*#__PURE__*/jsx_runtime_.jsx((IconButton_default()), {
        href: curLang + text_link/* default.mobile.home */.Z.mobile.home,
        className: classes.backtohome,
        size: "large",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "ion-ios-home-outline"
          }), /*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "ion-ios-arrow-round-back"
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx((Paper_default()), {
        className: cx(classes.formBox, 'fragment-fadeUp'),
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: classes.fullFromWrap,
          children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
            variant: "h3",
            align: "center",
            className: classes.title,
            gutterBottom: true,
            children: t('contact_title')
          }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
            className: classes.desc,
            children: t('contact_subtitle')
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.form,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_material_ui_form_validator_namespaceObject.ValidatorForm, {
              onSubmit: handleSubmit,
              onError: errors => console.log(errors),
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
                container: true,
                spacing: 4,
                children: [/*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
                  item: true,
                  md: 6,
                  xs: 12,
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_react_material_ui_form_validator_namespaceObject.TextValidator, {
                    variant: "filled",
                    className: classes.input,
                    label: t('form_name'),
                    onChange: handleChange('name'),
                    name: "Name",
                    value: values.name,
                    validators: ['required'],
                    errorMessages: ['This field is required']
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
                  item: true,
                  md: 6,
                  xs: 12,
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_react_material_ui_form_validator_namespaceObject.TextValidator, {
                    variant: "filled",
                    className: classes.input,
                    label: t('form_email'),
                    onChange: handleChange('email'),
                    name: "Email",
                    value: values.email,
                    validators: ['required', 'isEmail'],
                    errorMessages: ['This field is required', 'email is not valid']
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
                  item: true,
                  md: 6,
                  xs: 12,
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_react_material_ui_form_validator_namespaceObject.TextValidator, {
                    variant: "filled",
                    className: classes.input,
                    label: t('form_phone'),
                    onChange: handleChange('phone'),
                    name: "Phone",
                    value: values.phone
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
                  item: true,
                  md: 6,
                  xs: 12,
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_react_material_ui_form_validator_namespaceObject.TextValidator, {
                    variant: "filled",
                    className: classes.input,
                    label: t('form_company'),
                    onChange: handleChange('company'),
                    name: "Company",
                    value: values.company
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
                  item: true,
                  md: 12,
                  xs: 12,
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_react_material_ui_form_validator_namespaceObject.TextValidator, {
                    variant: "filled",
                    multiline: true,
                    rows: "6",
                    className: classes.input,
                    label: t('form_message'),
                    onChange: handleChange('message'),
                    name: "Message",
                    value: values.message
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: classes.btnArea,
                children: [/*#__PURE__*/jsx_runtime_.jsx((FormControlLabel_default()), {
                  control: /*#__PURE__*/jsx_runtime_.jsx(Checkbox, {
                    validators: ['isTruthy'],
                    errorMessages: "This field is required",
                    checked: check,
                    value: check,
                    onChange: e => handleCheck(e),
                    color: "primary"
                  }),
                  label: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                    children: [t('form_terms'), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("a", {
                      href: "#",
                      children: t('form_privacy')
                    })]
                  })
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Button_default()), {
                  variant: "contained",
                  type: "submit",
                  color: "secondary",
                  size: "large",
                  children: [t('form_send'), /*#__PURE__*/jsx_runtime_.jsx((Send_default()), {
                    className: classes.rightIcon
                  })]
                })]
              })]
            })
          })]
        })
      })]
    })]
  });
}

/* harmony default export */ const Forms_Contact = (Contact);
;// CONCATENATED MODULE: ./pages/[locale]/contact.js


 // Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)






const useStyles = (0,mui_.makeStyles)({
  uniqId: 'contactpage'
})(theme => ({
  mainWrap: {
    background: theme.palette.background.paper
  }
}));

function contact_Contact() {
  const {
    classes
  } = useStyles();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: (brand_default()).mobile.name + ' - Contact'
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.mainWrap,
      children: /*#__PURE__*/jsx_runtime_.jsx(Forms_Contact, {})
    })]
  });
} // Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });
// Use this below for Static Site Generation (SSG)


const getStaticProps = (0,getStatic/* makeStaticProps */.pc)(['common']);

/* harmony default export */ const contact = (contact_Contact);

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 4475:
/***/ ((module) => {

module.exports = require("@mui/material/Container");

/***/ }),

/***/ 5612:
/***/ ((module) => {

module.exports = require("@mui/material/Grid");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 1168:
/***/ ((module) => {

module.exports = require("@mui/material/Paper");

/***/ }),

/***/ 9174:
/***/ ((module) => {

module.exports = require("@mui/material/Snackbar");

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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 7446:
/***/ ((module) => {

module.exports = require("react-scroll-parallax");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6508:
/***/ ((module) => {

module.exports = require("tss-react/mui");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [449,848], () => (__webpack_exec__(8248)));
module.exports = __webpack_exports__;

})();