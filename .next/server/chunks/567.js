exports.id = 567;
exports.ids = [567];
exports.modules = {

/***/ 4539:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(889);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9409);
/* harmony import */ var _mui_material_Accordion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Accordion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4604);
/* harmony import */ var _mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8279);
/* harmony import */ var _mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8148);
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9868);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5246);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15);
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_text_brand__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_images_mobile_logo_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9618);
/* harmony import */ var _public_images_mobile_logo_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_images_mobile_logo_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _footer_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5722);
/* harmony import */ var _LangSwitch_Select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1675);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_LangSwitch_Select__WEBPACK_IMPORTED_MODULE_15__]);
_LangSwitch_Select__WEBPACK_IMPORTED_MODULE_15__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



















function Copyright() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9___default()), {
    variant: "body2",
    display: "block",
    align: "center",
    color: "textSecondary",
    children: ["\xA9\xA0", (_public_text_brand__WEBPACK_IMPORTED_MODULE_12___default().mobile.footerText)]
  });
}

const footers = [{
  title: 'Company',
  description: ['Team', 'History', 'Contact us', 'Locations'],
  link: ['#team', '#history', '#contact-us', '#locations']
}, {
  title: 'Resources',
  description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  link: ['#resource', '#resource-name', '#another-resource', '#final-resource']
}, {
  title: 'Legal',
  description: ['Privacy policy', 'Terms of use', 'Terms Condition'],
  link: ['#privacy-policy', '#terms-of-use']
}];

function Footer(props) {
  const {
    classes,
    cx
  } = (0,_footer_style__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)();
  const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
  const {
    invert,
    toggleDir
  } = props;
  const isDesktop = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_8___default()(theme.breakpoints.up('md'));
  const isMobile = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_8___default()(theme.breakpoints.down('md'));
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((_mui_material_Container__WEBPACK_IMPORTED_MODULE_1___default()), {
    maxWidth: "lg",
    component: "footer",
    className: cx(classes.footer, invert && classes.invert),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
      container: true,
      spacing: 4,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
        item: true,
        xs: 12,
        md: 3,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
          className: classes.logo,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("img", {
            src: (_public_images_mobile_logo_svg__WEBPACK_IMPORTED_MODULE_13___default()),
            alt: "logo"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9___default()), {
            variant: "h6",
            color: "textPrimary",
            children: (_public_text_brand__WEBPACK_IMPORTED_MODULE_12___default().mobile.projectName)
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(Copyright, {})]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
        item: true,
        xs: 12,
        md: 6,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
          container: true,
          spacing: 4,
          justifyContent: "space-evenly",
          children: footers.map(footer => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
            item: true,
            xs: 12,
            md: 3,
            className: cx(classes.siteMapItem, invert && classes.invert),
            children: [isDesktop && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9___default()), {
                variant: "h6",
                className: classes.title,
                color: "textPrimary",
                gutterBottom: true,
                children: footer.title
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("ul", {
                children: footer.description.map((item, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("li", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_10___default()), {
                    href: footer.link[index],
                    variant: "subtitle1",
                    color: "textSecondary",
                    children: item
                  })
                }, item))
              })]
            }), isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)((_mui_material_Accordion__WEBPACK_IMPORTED_MODULE_4___default()), {
              square: true,
              className: invert ? classes.invert : '',
              classes: {
                root: classes.accordionRoot
              },
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((_mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_5___default()), {
                expandIcon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_7___default()), {
                  className: classes.accordionIcon
                }),
                "aria-controls": "panel1a-content",
                id: "panel1a-header",
                classes: {
                  content: classes.accordionContent
                },
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("strong", {
                  children: footer.title
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((_mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_6___default()), {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("ul", {
                  children: footer.description.map((item, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("li", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_10___default()), {
                      href: footer.link[index],
                      variant: "subtitle1",
                      color: "textSecondary",
                      children: item
                    })
                  }, item))
                })
              })]
            })]
          }, footer.title))
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
        item: true,
        xs: 12,
        md: 3,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
          className: classes.socmed,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11___default()), {
            "aria-label": "FB",
            className: classes.margin,
            size: "small",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("i", {
              className: "ion-logo-twitter"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11___default()), {
            "aria-label": "TW",
            className: classes.margin,
            size: "small",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("i", {
              className: "ion-logo-facebook"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11___default()), {
            "aria-label": "IG",
            className: classes.margin,
            size: "small",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("i", {
              className: "ion-logo-instagram"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11___default()), {
            "aria-label": "LI",
            className: classes.margin,
            size: "small",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("i", {
              className: "ion-logo-linkedin"
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_LangSwitch_Select__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
          toggleDir: toggleDir
        })]
      })]
    })
  });
}

Footer.defaultProps = {
  invert: false,
  toggleDir: () => {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6508);
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tss_react_mui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_images_mobile_deco_wave_footer_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9540);
/* harmony import */ var _public_images_mobile_deco_wave_footer_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_images_mobile_deco_wave_footer_png__WEBPACK_IMPORTED_MODULE_2__);



const footerStyles = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_0__.makeStyles)({
  uniqId: 'footer'
})((theme, _params, classes) => ({
  link: {
    margin: theme.spacing(1, 1.5)
  },
  invert: {},
  decoTop: {
    fill: theme.palette.mode === 'dark' ? (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.darken)(theme.palette.primary.light, 0.65) : (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.lighten)(theme.palette.primary.light, 0.8),
    height: 300,
    width: '100%',
    position: 'absolute',
    top: -10,
    [theme.breakpoints.up('xl')]: {
      display: 'none'
    },
    [theme.breakpoints.up('lg')]: {
      transform: 'scale(1.5, 1)'
    },
    [theme.breakpoints.down('lg')]: {
      transform: 'scale(1.2, 0.7)',
      top: -80
    },
    [theme.breakpoints.down('sm')]: {
      transform: 'scale(0.5, 0.5)',
      top: -90,
      left: -330,
      width: 1280
    }
  },
  footer: {
    position: 'relative',
    marginTop: theme.spacing(8),
    paddingBottom: theme.spacing(12),
    [theme.breakpoints.up('xs')]: {
      paddingTop: theme.spacing(3)
    },
    [`& .${classes.accordionRoot}`]: {
      margin: '0 auto',
      marginTop: theme.spacing(2)
    },
    '& p': {
      color: theme.palette.common.white,
      [theme.breakpoints.down('md')]: {
        marginBottom: theme.spacing(4)
      }
    },
    '& ul': {
      margin: 0,
      padding: 0
    },
    '& li': {
      listStyle: 'none',
      marginBottom: theme.spacing(),
      '& a': {
        fontSize: 14,
        textDecoration: 'none !important',
        color: theme.palette.common.white,
        '&:hover': {
          color: theme.palette.primary.light
        }
      }
    },
    [`&.${classes.invert}`]: {
      '& p': {
        color: theme.palette.text.primary
      },
      '& li a': {
        color: theme.palette.text.primary
      },
      [`& .${classes.logo}`]: {
        '& h6': {
          color: theme.palette.primary.dark
        }
      },
      [`& .${classes.selectLang}`]: {
        color: theme.palette.text.primary,
        '& svg': {
          color: theme.palette.text.primary
        }
      }
    }
  },
  title: {
    color: theme.palette.common.white,
    fontSize: 14,
    textTransform: 'uppercase',
    marginBottom: theme.spacing(3),
    fontWeight: theme.typography.fontWeightBold
  },
  logo: {
    textAlign: 'center',
    marginBottom: theme.spacing(3),
    '& img': {
      width: 64,
      marginRight: theme.spacing()
    },
    '& h6': {
      color: theme.palette.common.white
    }
  },
  footerDesc: {
    display: 'block',
    fontSize: 14
  },
  socmed: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(4)
    },
    '& button, a': {
      margin: theme.spacing(),
      color: theme.palette.primary.dark,
      background: theme.palette.secondary.main,
      width: 36,
      height: 36,
      '& i': {
        color: theme.palette.common.white
      }
    },
    '& i': {
      fontSize: 24
    }
  },
  icon: {},
  selectLang: {
    margin: '0 auto',
    width: 200,
    display: 'flex !important',
    marginTop: theme.spacing(2),
    color: theme.palette.common.white + '!important',
    [`& .${classes.icon}`]: {
      top: 21 + '!important',
      color: theme.palette.primary.light,
      position: 'relative',
      '& + div': {
        background: 'none !important',
        padding: theme.spacing(1.5, 3, 1.5, 1),
        width: 'calc(100% - 32px)'
      }
    },
    '& svg': {
      color: theme.palette.primary.light
    },
    '& fieldset': {
      boxShadow: '0 1.5px 12px 2px rgba(0, 0, 0, 0.06)',
      border: `1px solid ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.primary.light, 0.5)} !important`,
      '& legend': {
        top: 6,
        position: 'relative',
        borderTop: `1px solid ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.primary.light, 0.5)}`
      }
    }
  },
  siteMapItem: {
    [theme.breakpoints.down('lg')]: {
      paddingBottom: '0 !important',
      paddingTop: '0 !important'
    }
  },
  accordionRoot: {
    background: 'none',
    boxShadow: 'none',
    color: theme.palette.common.white,
    maxWidth: 480,
    [`&.${classes.invert}`]: {
      color: theme.palette.text.primary,
      '& svg': {
        fill: theme.palette.text.primary
      }
    },
    '& svg': {
      fill: theme.palette.common.white
    }
  },
  accordionContent: {
    margin: 0
  },
  accordionIcon: {
    padding: 0
  },
  footerDeco: {
    position: 'relative',
    top: 0,
    backgroundImage: `linear-gradient(30deg, ${theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main} 50%, ${theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.main} 140%)`,
    paddingTop: theme.spacing(40),
    marginTop: -360,
    [theme.breakpoints.up('xl')]: {
      paddingTop: theme.spacing(20),
      marginTop: theme.spacing(20)
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(30)
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(10, 3, 0)
    },
    '&:before': {
      zIndex: 1,
      content: '""',
      width: '100%',
      height: 500,
      position: 'absolute',
      top: theme.spacing(10),
      left: 0,
      opacity: 0.1,
      background: `url(${(_public_images_mobile_deco_wave_footer_png__WEBPACK_IMPORTED_MODULE_2___default())}) no-repeat transparent`,
      backgroundSize: '100%'
    }
  },
  decoration: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    overflow: 'hidden',
    clip: 'rect(0, auto, auto, 0)',
    '& svg': {
      fill: theme.palette.secondary.main,
      opacity: 0.15,
      position: 'fixed',
      top: 0
    }
  },
  leftDeco: {
    left: 0,
    width: 1200,
    height: 1500,
    transform: 'scale(0.5)',
    transformOrigin: 'top left'
  },
  rightDeco: {
    right: -450,
    width: 1200,
    height: 1500,
    transform: 'scale(0.5)',
    transformOrigin: 'top right'
  },
  action: {
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
    paddingTop: theme.spacing(8),
    [theme.breakpoints.down('lg')]: {
      paddingTop: 0,
      paddingBottom: theme.spacing(3)
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(15),
      paddingBottom: 0
    },
    '& h4': {
      color: theme.palette.common.white,
      marginBottom: theme.spacing(6)
    }
  },
  btnArea: {
    margin: theme.spacing(5, 0),
    justifyContent: 'center',
    position: 'relative',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-around'
    },
    '& a': {
      [theme.breakpoints.up('sm')]: {
        marginRight: theme.spacing(2)
      },
      [theme.breakpoints.down('sm')]: {
        margin: 4
      },
      '& img': {
        width: 160,
        [theme.breakpoints.down('sm')]: {
          width: '100%'
        }
      }
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footerStyles);

/***/ }),

/***/ 7797:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3882);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(889);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9868);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2217);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6578);
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_scrollspy__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_images_mobile_logo_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9618);
/* harmony import */ var _public_images_mobile_logo_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_images_mobile_logo_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15);
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_text_brand__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_text_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4661);
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9744);
/* harmony import */ var _MobileMenu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5169);
/* harmony import */ var _header_style__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5835);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8363);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Settings__WEBPACK_IMPORTED_MODULE_14__]);
_Settings__WEBPACK_IMPORTED_MODULE_14__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















let counter = 0;

function createData(name, url, offset) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
    offset
  };
}

const LinkBtn = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function LinkBtn(props, ref) {
  // eslint-disable-line
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_8___default()), _objectSpread({
    to: props.to
  }, props)); // eslint-disable-line
});

function Header(props) {
  const {
    0: fixed,
    1: setFixed
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  let flagFixed = false;

  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagFixed = scroll > 100;

    if (flagFixed !== newFlagFixed) {
      setFixed(newFlagFixed);
      flagFixed = newFlagFixed;
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);
  const {
    classes,
    cx
  } = (0,_header_style__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)();
  const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__.useTheme)();
  const {
    onToggleDark,
    onToggleDir,
    invert
  } = props;
  const {
    t,
    i18n
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)('common');
  const curLang = '/' + i18n.language;
  const isDesktop = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_6___default()(theme.breakpoints.up('lg'));
  const isTablet = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_6___default()(theme.breakpoints.down('lg'));
  const isMobile = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_6___default()(theme.breakpoints.down('sm'));
  const {
    0: menuList
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([createData(_menu__WEBPACK_IMPORTED_MODULE_18__/* ["default"][0] */ .Z[0], '#' + _menu__WEBPACK_IMPORTED_MODULE_18__/* ["default"][0] */ .Z[0]), createData(_menu__WEBPACK_IMPORTED_MODULE_18__/* ["default"][1] */ .Z[1], '#' + _menu__WEBPACK_IMPORTED_MODULE_18__/* ["default"][1] */ .Z[1]), createData(_menu__WEBPACK_IMPORTED_MODULE_18__/* ["default"][2] */ .Z[2], '#' + _menu__WEBPACK_IMPORTED_MODULE_18__/* ["default"][2] */ .Z[2]), createData(_menu__WEBPACK_IMPORTED_MODULE_18__/* ["default"][3] */ .Z[3], '#' + _menu__WEBPACK_IMPORTED_MODULE_18__/* ["default"][3] */ .Z[3], -40)]);
  const {
    0: openDrawer,
    1: setOpenDrawer
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [isTablet && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_MobileMenu__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
      open: openDrawer,
      toggleDrawer: handleOpenDrawer
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1___default()), {
      component: "header",
      position: "relative",
      id: "header",
      className: cx(classes.header, fixed && classes.fixed, openDrawer && classes.openDrawer),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((_mui_material_Container__WEBPACK_IMPORTED_MODULE_5___default()), {
        fixed: isDesktop,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
          className: classes.headerContent,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("nav", {
            className: cx(classes.navMenu, invert && classes.invert),
            children: [isTablet && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3___default()), {
              onClick: handleOpenDrawer,
              className: cx('hamburger hamburger--spin', classes.mobileMenu, openDrawer && 'is-active'),
              size: "large",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("span", {
                className: "hamburger-box",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("span", {
                  className: cx(classes.bar, 'hamburger-inner')
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
              className: classes.logo,
              children: invert ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                href: curLang + _public_text_link__WEBPACK_IMPORTED_MODULE_13__/* ["default"].mobile.home */ .Z.mobile.home,
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("img", {
                  src: (_public_images_mobile_logo_svg__WEBPACK_IMPORTED_MODULE_11___default()),
                  alt: "logo"
                }), !isTablet && (_public_text_brand__WEBPACK_IMPORTED_MODULE_12___default().mobile.projectName)]
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)((react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_8___default()), {
                href: "#home",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("img", {
                  src: (_public_images_mobile_logo_svg__WEBPACK_IMPORTED_MODULE_11___default()),
                  alt: "logo"
                }), !isTablet && (_public_text_brand__WEBPACK_IMPORTED_MODULE_12___default().mobile.projectName)]
              })
            }), isDesktop && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)((react_scrollspy__WEBPACK_IMPORTED_MODULE_10___default()), {
              items: _menu__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z,
              currentClassName: "active",
              children: [menuList.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("li", {
                children: invert ?
                /*#__PURE__*/
                // eslint-disable-next-line
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
                  offset: item.offset || 0,
                  href: '/' + item.url,
                  children: t('mobile-landing.header_' + item.name)
                }) :
                /*#__PURE__*/
                // eslint-disable-next-line
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
                  component: LinkBtn,
                  offset: item.offset || 0,
                  href: item.url,
                  children: t('mobile-landing.header_' + item.name)
                })
              }, item.id.toString())), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: curLang + _public_text_link__WEBPACK_IMPORTED_MODULE_13__/* ["default"].mobile.contact */ .Z.mobile.contact,
                  children: t('mobile-landing.header_contact')
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("nav", {
            className: classes.navMenu,
            children: [!invert && !isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3___default()), {
                "aria-label": "facebook",
                className: classes.socialBtn,
                size: "small",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("i", {
                  className: "ion-logo-twitter"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3___default()), {
                "aria-label": "twitter",
                className: classes.socialBtn,
                size: "small",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("i", {
                  className: "ion-logo-facebook"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3___default()), {
                "aria-label": "instagram",
                className: classes.socialBtn,
                size: "small",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("i", {
                  className: "ion-logo-instagram"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3___default()), {
                "aria-label": "linkedin",
                className: classes.socialBtn,
                size: "small",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("i", {
                  className: "ion-logo-linkedin"
                })
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Settings__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
              toggleDark: onToggleDark,
              toggleDir: onToggleDir,
              invert: invert
            })]
          })]
        })
      })
    })]
  });
}

Header.defaultProps = {
  sticky: false,
  invert: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4180);
/* harmony import */ var _mui_material_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4192);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_List__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(834);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8315);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_text_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4661);
/* harmony import */ var _header_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5835);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8363);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);












function MobileMenu(props) {
  const {
    classes,
    cx
  } = (0,_header_style__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
  const {
    toggleDrawer,
    open
  } = props;
  const {
    t,
    i18n
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)('common');
  const curLang = '/' + i18n.language;

  const SideList = () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
    className: classes.mobileNav,
    role: "presentation",
    onClick: toggleDrawer,
    onKeyDown: toggleDrawer,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
      className: cx(classes.menu, open && classes.menuOpen),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)((_mui_material_List__WEBPACK_IMPORTED_MODULE_2___default()), {
        component: "nav",
        children: [_menu__WEBPACK_IMPORTED_MODULE_9__/* ["default"].map */ .Z.map((item, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_3___default()), {
          button: true,
          component: "a",
          href: `#${item}`,
          index: index.toString(),
          style: {
            animationDuration: index * 0.15 + 's'
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_4___default()), {
            primary: t('mobile-landing.header_' + item),
            className: classes.menuList
          })
        }, item)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_3___default()), {
          button: true,
          component: "a",
          href: curLang + _public_text_link__WEBPACK_IMPORTED_MODULE_6__/* ["default"].mobile.contact */ .Z.mobile.contact,
          style: {
            animationDuration: _menu__WEBPACK_IMPORTED_MODULE_9__/* ["default"].length */ .Z.length * 0.15 + 's'
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_4___default()), {
            primary: t('mobile-landing.header_contact'),
            className: classes.menuList
          })
        })]
      })
    })
  });

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((_mui_material_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_1___default()), {
    open: open,
    onClose: toggleDrawer,
    onOpen: toggleDrawer,
    classes: {
      paper: classes.paperNav
    },
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(SideList, {})
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileMenu);

/***/ }),

/***/ 9744:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5768);
/* harmony import */ var _mui_material_Popover__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Popover__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32);
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4192);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_List__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_ListSubheader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9685);
/* harmony import */ var _mui_material_ListSubheader__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListSubheader__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(834);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3191);
/* harmony import */ var _mui_material_Switch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Switch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3646);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _LangSwitch_Menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4920);
/* harmony import */ var _header_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5835);
/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2207);
/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_next_i18next_config__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_LangSwitch_Menu__WEBPACK_IMPORTED_MODULE_12__]);
_LangSwitch_Menu__WEBPACK_IMPORTED_MODULE_12__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

















let themeType = 'light';

if (typeof Storage !== 'undefined') {
  themeType = localStorage.getItem('luxiTheme') || 'light';
}

function Settings(props) {
  const {
    0: ctn,
    1: setCtn
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    classes,
    cx
  } = (0,_header_style__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)();
  const {
    0: anchorEl,
    1: setAnchorEl
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: isDark,
    1: setDark
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(themeType === 'dark');
  const {
    t,
    i18n
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('common');
  const currentLocale = i18n.language;

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const handleChangeMode = () => {
    setDark(!isDark);
    props.toggleDark();
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setCtn(document.getElementById('main-wrap'));
  });
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const {
    invert
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
    className: classes.setting,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3___default()), {
      "aria-describedby": id,
      "aria-label": "Settings",
      onClick: handleClick,
      className: cx(classes.icon, open && classes.active, invert && classes.invert),
      size: "large",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_4___default()), {
        fontSize: "inherit"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)((_mui_material_Popover__WEBPACK_IMPORTED_MODULE_2___default()), {
      id: id,
      open: open,
      anchorEl: anchorEl,
      onClose: handleClose,
      container: ctn,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center'
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: 'center'
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((_mui_material_List__WEBPACK_IMPORTED_MODULE_5___default()), {
        component: "nav",
        className: classes.modeMenu,
        "aria-label": "Mode-menu",
        subheader: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((_mui_material_ListSubheader__WEBPACK_IMPORTED_MODULE_6___default()), {
          component: "div",
          children: t('mobile-landing.header_theme')
        }),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_7___default()), {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
            component: "div",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_10___default()), {
              component: "label",
              container: true,
              alignItems: "center",
              spacing: 1,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_10___default()), {
                item: true,
                children: t('mobile-landing.header_light')
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_10___default()), {
                item: true,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((_mui_material_Switch__WEBPACK_IMPORTED_MODULE_8___default()), {
                  checked: isDark,
                  onChange: handleChangeMode,
                  value: isDark,
                  inputProps: {
                    'aria-label': 'checkbox'
                  }
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_10___default()), {
                item: true,
                children: t('mobile-landing.header_dark')
              })]
            })
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_9___default()), {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((_mui_material_List__WEBPACK_IMPORTED_MODULE_5___default()), {
        component: "nav",
        className: classes.langMenu,
        "aria-label": "Language-menu",
        subheader: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((_mui_material_ListSubheader__WEBPACK_IMPORTED_MODULE_6___default()), {
          component: "div",
          children: t('mobile-landing.header_language')
        }),
        children: _next_i18next_config__WEBPACK_IMPORTED_MODULE_14___default().i18n.locales.map(locale => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_LangSwitch_Menu__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
          ssg: (_next_i18next_config__WEBPACK_IMPORTED_MODULE_14___default().ssg),
          locale: locale,
          checked: locale === currentLocale,
          toggleDir: props.toggleDir,
          closePopup: handleClose
        }, locale))
      })]
    })]
  });
}

Settings.defaultProps = {
  invert: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Settings);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6508);
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tss_react_mui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_images_flag_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9123);
/* harmony import */ var _public_images_flag_logo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_images_flag_logo_png__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const flagIcon = {
  width: 16,
  height: 16,
  borderRadius: '50%',
  display: 'inline-block',
  position: 'relative',
  marginRight: 5,
  top: 1,
  background: `url(${(_public_images_flag_logo_png__WEBPACK_IMPORTED_MODULE_2___default())}) no-repeat transparent`,
  backgroundSize: '16px auto',
  '&[class="ar"]': {
    backgroundPosition: '0 3px'
  },
  '&[class="zh"]': {
    backgroundPosition: '0 -12px'
  },
  '&[class="en"]': {
    backgroundPosition: '0 -28px'
  },
  '&[class="de"]': {
    backgroundPosition: '0 -44px'
  },
  '&[class="id"]': {
    backgroundPosition: '0 -62px'
  },
  '&[class="pt"]': {
    backgroundPosition: '0 -79px'
  }
};
const headerStyles = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_0__.makeStyles)({
  uniqId: 'header'
})((theme, _params, classes) => ({
  '@keyframes slideRight': {
    from: {
      opacity: 0,
      transform: 'translateX(-100px)'
    },
    to: {
      opacity: 1,
      transform: 'none'
    }
  },
  fixed: {},
  header: {
    position: 'fixed',
    color: theme.palette.common.white,
    background: 'none',
    boxShadow: 'none',
    transition: 'all 0.5s ease-out',
    zIndex: 90,
    '& > *': {
      [theme.breakpoints.down('lg')]: {
        padding: 0
      }
    },
    [`&.${classes.fixed}`]: {
      background: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      [`& .${classes.logo}`]: {
        '& a': {
          color: 'transparent',
          fontSize: 0
        },
        '& img': {
          marginBottom: 0,
          [theme.breakpoints.up('sm')]: {
            height: 48,
            width: 48
          }
        }
      },
      '& nav': {
        padding: theme.spacing(1, 0),
        [`& .${classes.button}`]: {
          padding: theme.spacing(0.5, 2)
        }
      },
      [`& .${classes.socialBtn}`]: {
        background: theme.palette.mode === 'dark' ? (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.primary.light, 0.12) : (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.primary.main, 0.12),
        '& i': {
          color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main
        }
      },
      [`& .${classes.setting}`]: {
        '& svg': {
          fill: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main
        }
      }
    },
    [`&.${classes.openDrawer}`]: {
      zIndex: 1600,
      boxShadow: 'none'
    }
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& nav': {
      alignItems: 'center',
      padding: theme.spacing(2),
      [theme.breakpoints.down('lg')]: {
        padding: theme.spacing(2, 0)
      },
      display: 'flex'
    }
  },
  logo: {
    '& a': {
      textDecoration: 'none',
      display: 'block',
      fontSize: 16,
      color: theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.primary.main,
      alignItems: 'center',
      transition: 'color 0.5s ease-out',
      fontWeight: theme.typography.fontWeightMedium,
      textAlign: 'center'
    },
    '& img': {
      display: 'block',
      margin: '0 auto',
      transition: 'all 0.3s ease-out',
      marginBottom: theme.spacing(),
      height: 48,
      width: 48,
      [theme.breakpoints.up('sm')]: {
        width: 64,
        height: 64
      }
    }
  },
  active: {},
  button: {
    width: theme.spacing(20)
  },
  navMenu: {
    [theme.breakpoints.up('lg')]: {
      '& > *': {
        margin: theme.spacing(0, 1)
      }
    },
    '& a': {
      marginTop: theme.spacing(0.5),
      fontSize: 16,
      fontWeight: theme.typography.fontWeightMedium,
      boxShadow: 'none',
      position: 'relative',
      margin: theme.spacing(0, 1)
    },
    '& ul': {
      listStyle: 'none',
      marginLeft: 0,
      paddingLeft: 0,
      '& li': {
        margin: theme.spacing(0, 1),
        listStyle: 'none',
        position: 'relative',
        display: 'inline-block',
        '& a': {
          textTransform: 'capitalize',
          minWidth: 0,
          padding: '6px',
          background: 'none !important',
          color: theme.palette.text.primary,
          '&:after': {
            content: '""',
            height: 6,
            width: 6,
            transform: 'scale(0)',
            position: 'absolute',
            borderRadius: '50%',
            margin: '0 auto',
            bottom: -5,
            background: theme.palette.primary.main,
            transition: 'all 0.2s cubic-bezier(0.42, 0.16, 0.21, 0.93)'
          },
          '&:hover': {
            transition: 'all 0.3s ease-out',
            color: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.text.primary, 0.5),
            '&:after': {
              transform: 'scale(1)'
            }
          }
        },
        '&[class="active"]': {
          '& a': {
            color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
            '&:after': {
              transform: 'scale(1)'
            }
          }
        }
      }
    },
    [`&.${classes.invert}`]: {
      [`& .${classes.socialBtn}`]: {
        background: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.primary.main, 0.24),
        '& i': {
          color: theme.palette.primary.main
        }
      }
    }
  },
  margin: {},
  langMenu: {
    textTransform: 'capitalize',
    '& i': _objectSpread({}, flagIcon)
  },
  socialBtn: {
    background: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.common.white, 0.24),
    width: 35,
    height: 35,
    padding: theme.spacing(0.5),
    margin: '0 6px',
    '& i': {
      color: theme.palette.common.white,
      fontSize: 22
    }
  },
  icon: {},
  invert: {},
  setting: {
    margin: theme.spacing(0, 1),
    [`& .${classes.icon}`]: {
      transition: 'all 0.3s ease',
      color: theme.palette.common.white,
      [`&.${classes.invert}`]: {
        '& svg': {
          fill: theme.palette.text.secondary
        }
      }
    },
    '& svg': {
      fill: theme.palette.common.white,
      width: 30,
      height: 30,
      [theme.breakpoints.down('sm')]: {
        fill: theme.palette.text.secondary
      }
    },
    [`& .${classes.active}`]: {
      transform: 'rotate(30deg)'
    }
  },
  modeMenu: {
    textTransform: 'capitalize'
  },
  bar: {
    '&[class*="hamburger-inner"]': {
      backgroundColor: theme.palette.text.secondary,
      '&:after, &:before': {
        backgroundColor: theme.palette.text.secondary
      }
    }
  },
  menu: {},
  openDrawer: {},
  paperNav: {
    width: '100%',
    background: theme.palette.background.paper,
    [theme.breakpoints.up(680)]: {
      width: 300
    }
  },
  mobileMenu: {
    margin: theme.spacing(0, 1)
  },
  mobileNav: {
    background: theme.palette.background.paper,
    height: '100%',
    [`& .${classes.menu}`]: {
      padding: theme.spacing(0, 5),
      overflow: 'auto',
      top: 90,
      width: '100%',
      position: 'absolute',
      height: 'calc(100% - 90px)',
      '& a': {
        animationName: '$slideRight',
        animationTimingFunction: 'ease'
      }
    }
  },
  menuList: {
    textTransform: 'capitalize',
    '& span': {
      fontSize: 24
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerStyles);

/***/ }),

/***/ 3413:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7797);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Header__WEBPACK_IMPORTED_MODULE_0__]);
_Header__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const menu = ['feature', 'showcase', 'testimonials', 'faq'];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ 4920:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6959);
/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(834);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3787);
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1211);
/* harmony import */ var _mui_material_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8315);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2207);
/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_next_i18next_config__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_languageDetector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9466);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_languageDetector__WEBPACK_IMPORTED_MODULE_9__]);
_lib_languageDetector__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const LanguageSwitch = ({
  locale,
  checked,
  toggleDir,
  ssg,
  closePopup
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('common');

  const changeLang = lang => {
    _lib_languageDetector__WEBPACK_IMPORTED_MODULE_9__/* ["default"].cache */ .Z.cache(lang);
    closePopup();

    if ((_next_i18next_config__WEBPACK_IMPORTED_MODULE_8___default().ssg)) {
      let href = router.asPath;
      let pName = router.pathname;
      Object.keys(router.query).forEach(k => {
        if (k === 'locale') {
          pName = pName.replace(`[${k}]`, lang);
          return;
        }

        pName = pName.replace(`[${k}]`, router.query[k]);
      });

      if (lang) {
        href = pName;
      }

      router.push(href);
    } else {
      const {
        pathname,
        asPath,
        query
      } = router;
      router.push({
        pathname,
        query
      }, asPath, {
        locale: lang
      });
    }

    if (lang === 'ar') {
      toggleDir('rtl');
    } else {
      toggleDir('ltr');
    }
  };

  return ssg ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_3___default()), {
    role: undefined,
    dense: true,
    button: true,
    onClick: () => changeLang(locale),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_4___default()), {
      className: "flag",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("i", {
        className: locale
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_6___default()), {
      primary: t(locale)
    }), checked && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((_mui_material_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_5___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_2___default()), {
        color: "primary"
      })
    })]
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_3___default()), {
    role: undefined,
    dense: true,
    button: true,
    onClick: () => changeLang(locale),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_4___default()), {
      className: "flag",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("i", {
        className: locale
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_6___default()), {
      primary: t(locale)
    }), checked && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((_mui_material_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_5___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_2___default()), {
        color: "primary"
      })
    })]
  });
};

LanguageSwitch.defaultProps = {
  ssg: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LanguageSwitch);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1675:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_Language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5418);
/* harmony import */ var _mui_icons_material_Language__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Language__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3103);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2651);
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7730);
/* harmony import */ var _mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9271);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Footer_footer_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5722);
/* harmony import */ var _lib_languageDetector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9466);
/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2207);
/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_next_i18next_config__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_languageDetector__WEBPACK_IMPORTED_MODULE_9__]);
_lib_languageDetector__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














function SelectLang(props) {
  const {
    0: ctn,
    1: setCtn
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    classes
  } = (0,_Footer_footer_style__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(); // Translation Function

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
  const {
    t,
    i18n
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)('common');
  const {
    0: values,
    1: setValues
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    lang: i18n.language
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setCtn(document.getElementById('main-wrap'));
  }, []);

  function handleChange(event) {
    const lang = event.target.value;
    setValues(oldValues => _objectSpread(_objectSpread({}, oldValues), {}, {
      [event.target.name]: lang
    }));

    if ((_next_i18next_config__WEBPACK_IMPORTED_MODULE_10___default().ssg)) {
      let href = router.asPath;
      let pName = router.pathname;
      Object.keys(router.query).forEach(k => {
        if (k === 'locale') {
          pName = pName.replace(`[${k}]`, lang);
          return;
        }

        pName = pName.replace(`[${k}]`, router.query[k]);
      });

      if (lang) {
        href = pName;
      }

      router.push(href);
    } else {
      const {
        pathname,
        asPath,
        query
      } = router;
      router.push({
        pathname,
        query
      }, asPath, {
        locale: lang
      });
    }

    _lib_languageDetector__WEBPACK_IMPORTED_MODULE_9__/* ["default"].cache */ .Z.cache(lang);

    if (lang === 'ar') {
      props.toggleDir('rtl');
    } else {
      props.toggleDir('ltr');
    }
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((_mui_material_Select__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "standard",
    value: values.lang,
    onChange: handleChange,
    MenuProps: {
      container: ctn
    },
    startAdornment: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: classes.icon,
      position: "start",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((_mui_icons_material_Language__WEBPACK_IMPORTED_MODULE_1___default()), {})
    }),
    className: classes.selectLang,
    input: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_4___default()), {
      name: "lang",
      id: "outlined-lang-simple"
    }),
    children: _next_i18next_config__WEBPACK_IMPORTED_MODULE_10___default().i18n.locales.map(locale => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5___default()), {
      value: locale,
      children: t(locale)
    }, locale))
  });
}

SelectLang.defaultProps = {
  toggleDir: () => {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectLang);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

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

/***/ 9123:
/***/ ((module) => {

module.exports = "/_next/static/images/flag-logo-b6c0a3b52dae2bf98f199dc6022dc689.png";

/***/ }),

/***/ 9540:
/***/ ((module) => {

module.exports = "/_next/static/images/deco-wave-footer-e6260ce7bfb02bfcff02c440d3c890bc.png";

/***/ })

};
;