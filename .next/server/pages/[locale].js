(() => {
var exports = {};
exports.id = 513;
exports.ids = [513];
exports.modules = {

/***/ 8817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Banner_Banner)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(889);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./public/images/imgAPI.js
var imgAPI = __webpack_require__(4882);
// EXTERNAL MODULE: ./theme/common.js
var common = __webpack_require__(4618);
;// CONCATENATED MODULE: ./components/Banner/particle-spray.js
/* eslint-disable */
function renderParticles() {
  var Canvas = document.getElementById('particle_art_mobile');
  var ctx = Canvas.getContext('2d');

  var resize = function () {
    Canvas.width = Canvas.clientWidth;
    Canvas.height = Canvas.clientHeight;
  };

  window.addEventListener('resize', resize);
  resize();
  var elements = [];
  var presets = {};

  presets.o = function (x, y, s, dx, dy) {
    return {
      x: x,
      y: y,
      r: 50 * s,
      w: 10 * s,
      dx: dx,
      dy: dy,
      draw: function (ctx, t) {
        this.x += this.dx;
        this.y += this.dy;
        ctx.beginPath();
        ctx.arc(this.x + +Math.sin((50 + x + t / 10) / 100) * 3, this.y + +Math.sin((45 + x + t / 10) / 100) * 4, this.r, 0, 2 * Math.PI, false);
        ctx.lineWidth = this.w;
        ctx.strokeStyle = '#fff';
        ctx.stroke();
      }
    };
  };

  presets.square = function (x, y, s, dx, dy, dr, r) {
    r = r || 0;
    return {
      x: x + 100,
      y: y + 100,
      s: 20 * s,
      w: 10 * s,
      r: r,
      dx: dx,
      dy: dy,
      dr: dr,
      draw: function (ctx, t) {
        this.x += this.dx;
        this.y += this.dy;
        this.r += this.dr;

        var _this = this;

        var box = function (x, y, tx, ty, c, o) {
          o = o || 0;
          ctx.beginPath();
          ctx.rect(0, 0, tx / 20, tx / 20);
          ctx.moveTo(-o + _this.s / 5 * x, o + _this.s / 5 * y);
          ctx.lineWidth = _this.w;
          ctx.strokeStyle = c;
          ctx.stroke();
        };

        ctx.save();
        ctx.translate(this.x + Math.sin((x + t / 10) / 100) * 5, this.y + Math.sin((10 + x + t / 10) / 100) * 2);
        ctx.rotate(this.r / 5 * Math.PI / 180);
        box(-1, -1, this.x, this.x, '#fff');
        ctx.restore();
      }
    };
  };

  presets.x = function (x, y, s, dx, dy, dr, r) {
    r = r || 0;
    return {
      x: x,
      y: y,
      s: 50 * s,
      w: 5 * s,
      r: r,
      dx: dx,
      dy: dy,
      dr: dr,
      draw: function (ctx, t) {
        this.x += this.dx;
        this.y += this.dy;
        this.r += this.dr;

        var _this = this;

        var line = function (x, y, tx, ty, c, o) {
          o = o || 0;
          ctx.beginPath();
          ctx.moveTo(-o + _this.s / 2 * x, o + _this.s / 2 * y);
          ctx.lineTo(-o + _this.s / 2 * tx, o + _this.s / 2 * ty);
          ctx.lineWidth = _this.w;
          ctx.strokeStyle = c;
          ctx.stroke();
        };

        ctx.save();
        ctx.translate(this.x + Math.sin((x + t / 10) / 100) * 5, this.y + Math.sin((10 + x + t / 10) / 100) * 2);
        ctx.rotate(this.r * Math.PI / 180);
        line(-1, -1, 1, 1, '#fff');
        line(1, -1, -1, 1, '#fff');
        ctx.restore();
      }
    };
  };

  for (var x = 0; x < Canvas.width; x++) {
    for (var y = 0; y < Canvas.height; y++) {
      if (Math.round(Math.random() * 50000) == 1) {
        var s = (Math.random() * 5 + 1) / 10;
        elements.push(presets.square(x, y, s, 0, 0, (Math.random() * 3 - 1) / 5, Math.random() * 360));

        if (Math.round(Math.random()) == 1) {
          elements.push(presets.o(x, y, s, 0, 0));
        } else {
          elements.push(presets.x(x, y, s, 0, 0, (Math.random() * 3 - 1) / 10, Math.random() * 360));
        }
      }
    }
  }

  setInterval(function () {
    ctx.clearRect(0, 0, Canvas.width, Canvas.height);
    var time = new Date().getTime();

    for (var e in elements) elements[e].draw(ctx, time);
  }, 0.2);
}

/* harmony default export */ const particle_spray = (renderParticles);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
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
;// CONCATENATED MODULE: ./components/Banner/banner-style.js





const bannerStyles = (0,mui_.makeStyles)({
  uniqId: 'banner'
})(theme => ({
  root: {
    position: 'relative',
    display: 'block'
  },
  background: {
    position: 'absolute',
    height: 720,
    top: 0,
    right: 0,
    width: '55%',
    [theme.breakpoints.up('lg')]: {
      width: '55%'
    },
    [theme.breakpoints.down('md')]: {
      height: 260
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    '& img': {
      position: 'absolute',
      right: 0,
      top: 0
    }
  },
  decoInner: {
    position: 'absolute',
    top: 0,
    right: 0,
    opacity: 0.2,
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  },
  gradient: {
    backgroundImage: `linear-gradient(30deg, ${theme.palette.primary.main} 50%, ${theme.palette.secondary.main} 140%)`,
    width: '100%',
    height: '100%',
    '& img': {
      display: 'block'
    }
  },
  text: {
    height: 680,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 10,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5)
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start',
      paddingTop: theme.spacing(20),
      height: 560
    },
    '& h3': {
      marginTop: theme.spacing(12),
      [theme.breakpoints.down('lg')]: {
        marginTop: theme.spacing(3)
      },
      [theme.breakpoints.down('sm')]: {
        marginTop: 0,
        textAlign: 'center'
      },
      '& strong': {
        fontWeight: theme.typography.fontWeightBold,
        color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main
      }
    },
    '& h5': {
      color: theme.palette.text.secondary,
      margin: theme.spacing(4, 0),
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center'
      }
    }
  },
  btnArea: {
    textAlign: 'center',
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
  },
  decoration: {
    position: 'relative',
    height: '100%'
  },
  decoWave: {
    position: 'absolute',
    top: 40,
    left: -1,
    width: '102%',
    height: '100%',
    transform: theme.direction === 'rtl' ? 'scale(-1, 1)' : 'none',
    background: `url(${theme.palette.mode === 'dark' ? (deco_wave_dark_default()) : (deco_wave_light_default())}) no-repeat 0 0`,
    backgroundSize: '100% 720px',
    [theme.breakpoints.down('md')]: {
      backgroundSize: '100% 240px'
    }
  },
  decoLine: {
    position: 'absolute',
    left: -20,
    top: 10,
    opacity: 0.56,
    width: '100%',
    height: '100%',
    transform: theme.direction === 'rtl' ? 'scale(-1, 1)' : 'none',
    background: `url(${theme.palette.mode === 'dark' ? (deco_line_dark_default()) : (deco_line_light_default())}) no-repeat 0 0`,
    backgroundSize: '100% 700px'
  },
  phoneIllustration: {
    position: 'relative',
    height: '100%',
    [theme.breakpoints.down('lg')]: {
      right: theme.spacing(-10),
      opacity: theme.palette.mode === 'dark' ? 0.4 : 0.8
    },
    [theme.breakpoints.down('md')]: {
      right: 0,
      top: 200
    },
    [theme.breakpoints.down('sm')]: {
      right: theme.spacing(-20),
      opacity: theme.palette.mode === 'dark' ? 0.2 : 0.4
    },
    '& img': {
      position: 'absolute'
    }
  },
  phone: {
    width: 600,
    right: -40,
    bottom: 0
  },
  widgetTop: {
    width: 150,
    bottom: 330,
    left: 130,
    '&[class*="fragment-fadeUp"]': {
      transitionDelay: '0.2s'
    }
  },
  widgetLeft: {
    width: 170,
    bottom: 180,
    left: 110,
    '&[class*="fragment-fadeUp"]': {
      transitionDelay: '0.3s'
    }
  },
  widgetRight: {
    width: 170,
    bottom: 240,
    right: 80,
    '&[class*="fragment-fadeUp"]': {
      transitionDelay: '0.4s'
    }
  },
  hide: {
    visibility: 'hidden'
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const banner_style = (bannerStyles);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Banner/Banner.js















function Banner() {
  const {
    classes,
    cx
  } = banner_style();
  const {
    classes: text
  } = (0,common/* useText */.XK)();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const theme = (0,styles_.useTheme)();
  const isDesktop = useMediaQuery_default()(theme.breakpoints.up('lg'));
  const isTablet = useMediaQuery_default()(theme.breakpoints.down('lg'));
  const isMobile = useMediaQuery_default()(theme.breakpoints.down('md'));
  const elem = (0,external_react_.useRef)(null);
  (0,external_react_.useEffect)(() => {
    particle_spray();
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.root,
    ref: elem,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.background,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.gradient,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.decoWave
        }), !isMobile && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.decoLine
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.decoInner,
          children: /*#__PURE__*/jsx_runtime_.jsx("canvas", {
            id: "particle_art_mobile",
            width: "500px",
            height: "700px"
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((Container_default()), {
      fixed: isDesktop,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
        container: true,
        children: [/*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
          item: true,
          md: 7,
          xs: 12,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: classes.text,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((Typography_default()), {
              variant: "h3",
              className: text.title,
              children: [t('mobile-landing.banner_title'), "\xA0", /*#__PURE__*/jsx_runtime_.jsx("strong", {
                children: t('mobile-landing.banner_titlestrong')
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
              variant: "h5",
              className: text.subtitle,
              children: t('mobile-landing.banner_desc')
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: classes.btnArea,
              children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/images/mobile/app-store.png",
                  alt: "app store"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/images/mobile/play-store.png",
                  alt: "play store"
                })
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
          item: true,
          md: 5,
          xs: 12,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.decoration,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: classes.phoneIllustration,
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: imgAPI/* default.mobile.0 */.Z.mobile[0],
                className: classes.phone,
                alt: "illustration"
              }), !isTablet && /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
                children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: imgAPI/* default.mobile.1 */.Z.mobile[1],
                  className: cx(classes.widgetTop, 'fragment-fadeUp'),
                  alt: "illustration"
                }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: imgAPI/* default.mobile.2 */.Z.mobile[2],
                  className: cx(classes.widgetLeft, 'fragment-fadeUp'),
                  alt: "illustration"
                }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: imgAPI/* default.mobile.3 */.Z.mobile[3],
                  className: cx(classes.widgetRight, 'fragment-fadeUp'),
                  alt: "illustration"
                })]
              })]
            })
          })
        })]
      })
    })]
  });
}

/* harmony default export */ const Banner_Banner = (Banner);
;// CONCATENATED MODULE: ./components/Banner/index.js


/***/ }),

/***/ 315:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ CompanyLogo_CompanyLogo)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-scroll-animation-wrapper"
var external_react_scroll_animation_wrapper_ = __webpack_require__(5902);
var external_react_scroll_animation_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_react_scroll_animation_wrapper_);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(889);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/CompanyLogo/logo-style.js

const useStyles = (0,mui_.makeStyles)({
  uniqId: 'logo'
})(theme => ({
  title: {
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
      lineHeight: '36px'
    }
  },
  root: {
    display: 'flex',
    margin: theme.spacing(5, 0, 0),
    justifyContent: 'center',
    position: 'relative',
    overflow: 'auto',
    zIndex: 23,
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start'
    },
    '& img': {
      height: 64,
      margin: theme.spacing(4),
      filter: 'grayscale(1) contrast(0.5) brightness(1.5)',
      opacity: theme.palette.mode === 'dark' ? 0.5 : 1,
      transition: 'all 0.3s ease-out',
      '&:hover': {
        filter: 'none'
      }
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const logo_style = (useStyles);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/CompanyLogo/CompanyLogo.js








const logos = ['/images/logos/architect.png', '/images/logos/cloud.png', '/images/logos/coin.png', '/images/logos/mobile.png', '/images/logos/profile.png', '/images/logos/saas.png'];

function CompanyLogo() {
  const {
    classes
  } = logo_style();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((Container_default()), {
    fixed: true,
    children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
      align: "center",
      variant: "h4",
      className: classes.title,
      children: t('mobile-landing.company_title')
    }), /*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_animation_wrapper_default()), {
      animateOnce: true,
      animateIn: "fadeInUpShort",
      offset: -200,
      delay: 300,
      duration: 0.5,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.root,
        children: logos.map((logo, index) => /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: logo,
          alt: 'logo' + index.toString()
        }, index.toString()))
      })
    })]
  });
}

/* harmony default export */ const CompanyLogo_CompanyLogo = (CompanyLogo);
;// CONCATENATED MODULE: ./components/CompanyLogo/index.js


/***/ }),

/***/ 4270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Counter_Counter)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-countup"
const external_react_countup_namespaceObject = require("react-countup");
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_namespaceObject);
// EXTERNAL MODULE: external "react-scroll-animation-wrapper"
var external_react_scroll_animation_wrapper_ = __webpack_require__(5902);
var external_react_scroll_animation_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_react_scroll_animation_wrapper_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(889);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./theme/common.js
var common = __webpack_require__(4618);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/Counter/counter-style.js

const counterStyles = (0,mui_.makeStyles)({
  uniqId: 'counter'
})((theme, _params, classes) => ({
  counterWrap: {
    margin: theme.spacing(10, 0),
    [theme.breakpoints.down('lg')]: {
      margin: 0
    }
  },
  text: {},
  counterItem: {
    '& p': {
      color: theme.palette.text.secondary,
      textTransform: 'capitalize',
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        justifyContent: 'center'
      },
      '& i': {
        color: theme.palette.text.secondary,
        fontSize: 36,
        marginRight: theme.spacing(2),
        lineHeight: '42px',
        [theme.breakpoints.down('sm')]: {
          fontSize: 28,
          lineHeight: '28px'
        }
      }
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    },
    alignItems: 'center',
    justifyContent: 'center',
    [`& .${classes.text}`]: {
      textAlign: 'center',
      '& h3': {
        position: 'relative',
        color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
        paddingBottom: theme.spacing(2)
      }
    }
  },
  counterInner: {
    '& > div': {
      position: 'relative',
      '&:after': {
        content: '""',
        height: 60,
        position: 'absolute',
        right: 0,
        top: 30,
        [theme.breakpoints.up('sm')]: {
          borderLeft: `2px solid ${theme.palette.primary.light}`
        }
      }
    },
    '& > div:last-child': {
      '&:after': {
        display: 'none'
      }
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const counter_style = (counterStyles);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Counter/Counter.js












function Counter() {
  const {
    classes
  } = counter_style();
  const {
    classes: text
  } = (0,common/* useText */.XK)();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    0: play,
    1: setPlay
  } = (0,external_react_.useState)(false);

  const countup = (val, isPlay) => /*#__PURE__*/jsx_runtime_.jsx("span", {
    children: isPlay ? /*#__PURE__*/jsx_runtime_.jsx((external_react_countup_default()), {
      end: val
    }) : 0
  });

  const handlePlay = visible => {
    if (visible.inViewport) {
      setTimeout(() => {
        setPlay(true);
      }, 500);
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.counterWrap,
    children: /*#__PURE__*/jsx_runtime_.jsx((Container_default()), {
      maxWidth: "md",
      children: /*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_animation_wrapper_default()), {
        animateOnce: true,
        animateIn: "fadeIn",
        offset: 1500,
        afterAnimatedIn: handlePlay,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
          container: true,
          justifyContent: "center",
          alignItems: "center",
          className: classes.counterInner,
          spacing: 6,
          children: [/*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
            sm: 4,
            xs: 6,
            item: true,
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.counterItem,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: classes.text,
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((Typography_default()), {
                  variant: "h3",
                  className: text.title,
                  children: ["+", countup(200, play), "M"]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Typography_default()), {
                  component: "p",
                  className: text.subtitle,
                  children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "ion-ios-cloud-download-outline"
                  }), t('mobile-landing.counter_downloads')]
                })]
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
            sm: 4,
            xs: 6,
            item: true,
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.counterItem,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: classes.text,
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((Typography_default()), {
                  variant: "h3",
                  className: text.title,
                  children: ["+", countup(480, play), "M"]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Typography_default()), {
                  component: "p",
                  className: text.subtitle,
                  children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "ion-ios-checkmark-circle-outline"
                  }), t('mobile-landing.counter_transaction')]
                })]
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
            sm: 4,
            xs: 6,
            item: true,
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.counterItem,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: classes.text,
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((Typography_default()), {
                  variant: "h3",
                  className: text.title,
                  children: ["+", countup(180, play), "M"]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Typography_default()), {
                  component: "p",
                  className: text.subtitle,
                  children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "ion-ios-star-outline"
                  }), t('mobile-landing.counter_ratting')]
                })]
              })
            })
          })]
        })
      })
    })
  });
}

/* harmony default export */ const Counter_Counter = (Counter);
;// CONCATENATED MODULE: ./components/Counter/index.js


/***/ }),

/***/ 7551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Faq_Faq)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(889);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Accordion"
var Accordion_ = __webpack_require__(9409);
var Accordion_default = /*#__PURE__*/__webpack_require__.n(Accordion_);
// EXTERNAL MODULE: external "@mui/material/AccordionSummary"
var AccordionSummary_ = __webpack_require__(4604);
var AccordionSummary_default = /*#__PURE__*/__webpack_require__.n(AccordionSummary_);
// EXTERNAL MODULE: external "@mui/material/AccordionDetails"
var AccordionDetails_ = __webpack_require__(8279);
var AccordionDetails_default = /*#__PURE__*/__webpack_require__.n(AccordionDetails_);
// EXTERNAL MODULE: external "@mui/icons-material/ExpandMore"
var ExpandMore_ = __webpack_require__(8148);
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./theme/common.js
var common = __webpack_require__(4618);
// EXTERNAL MODULE: ./components/Parallax/Medium.js
var Medium = __webpack_require__(6);
// EXTERNAL MODULE: ./public/images/mobile/faq.png
var faq = __webpack_require__(9089);
var faq_default = /*#__PURE__*/__webpack_require__.n(faq);
// EXTERNAL MODULE: ./components/Title/index.js + 1 modules
var Title = __webpack_require__(619);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/Faq/faq-style.js

const faqStyles = (0,mui_.makeStyles)({
  uniqId: 'faq'
})((theme, _params, classes) => ({
  root: {
    position: 'relative'
  },
  text: {
    position: 'relative',
    zIndex: 20,
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    }
  },
  illustration: {
    position: 'relative',
    margin: theme.spacing(6),
    '& img': {
      position: 'relative',
      display: 'block',
      width: 280
    }
  },
  decoPrimary: {
    fill: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.primary.light,
    width: 450,
    height: 450,
    position: 'absolute',
    top: -20,
    left: 0,
    transform: 'scale(0.6)',
    transformOrigin: 'left center'
  },
  accordion: {
    position: 'relative'
  },
  item: {
    marginBottom: theme.spacing(3)
  },
  paper: {
    borderRadius: `${theme.rounded.medium} !important`,
    overflow: 'hidden'
  },
  heading: {
    fontWeight: theme.typography.fontWeightMedium,
    padding: theme.spacing(1, 2, 1, 0),
    fontSize: 18,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16
    }
  },
  content: {
    [`& .${classes.icon}`]: {
      position: 'absolute',
      top: theme.spacing(2.5),
      right: theme.spacing(2)
    }
  },
  expanded: {
    backgroundImage: `linear-gradient(30deg, ${theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main}, ${theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.main})`,
    '& > div': {
      background: 'none'
    },
    [`& .${classes.heading}`]: {
      color: theme.palette.common.white,
      paddingTop: 0,
      paddingBottom: 0
    },
    [`& .${classes.icon}`]: {
      color: theme.palette.common.white,
      transform: 'rotate(180deg)'
    }
  },
  detail: {
    background: theme.palette.background.paper,
    paddingTop: theme.spacing(3),
    '& p': {
      fontSize: 18
    }
  },
  icon: {
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const faq_style = (faqStyles);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Faq/Faq.js


















const faqData = [{
  q: 'Pellentesque ac bibendum tortor?',
  a: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
}, {
  q: 'In mi nulla, fringilla vestibulum?',
  a: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
}, {
  q: 'Quisque lacinia purus ut libero?',
  a: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
}, {
  q: 'Quisque ut metus sit amet augue?',
  a: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
}, {
  q: 'Pellentesque ac bibendum tortor?',
  a: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
}];

function Faq() {
  const {
    classes,
    cx
  } = faq_style();
  const {
    classes: text
  } = (0,common/* useText */.XK)();
  const {
    0: expanded,
    1: setExpanded
  } = (0,external_react_.useState)(0);
  const theme = (0,styles_.useTheme)();
  const isMobile = useMediaQuery_default()(theme.breakpoints.down('md'));
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/jsx_runtime_.jsx((Container_default()), {
      fixed: true,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
        container: true,
        spacing: 6,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
          item: true,
          md: 6,
          children: [/*#__PURE__*/jsx_runtime_.jsx(Title/* default */.Z, {
            align: isMobile ? 'center' : 'left',
            children: /*#__PURE__*/jsx_runtime_.jsx("strong", {
              children: "FAQ"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
            className: cx(classes.text, text.subtitle2),
            align: isMobile ? 'center' : 'left',
            component: "p",
            children: t('mobile-landing.faq_subtitle')
          }), !isMobile && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: classes.illustration,
            children: [/*#__PURE__*/jsx_runtime_.jsx(Medium/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: (faq_default()),
              alt: "illustration"
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
          item: true,
          md: 6,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.accordion,
            children: faqData.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.item,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Accordion_default()), {
                classes: {
                  root: classes.paper
                },
                expanded: expanded === index,
                onChange: handleChange(index),
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((AccordionSummary_default()), {
                  classes: {
                    content: classes.content,
                    expanded: classes.expanded
                  },
                  children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                    className: classes.heading,
                    children: item.q
                  }), /*#__PURE__*/jsx_runtime_.jsx((ExpandMore_default()), {
                    className: classes.icon
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx((AccordionDetails_default()), {
                  classes: {
                    root: classes.detail
                  },
                  children: /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                    children: item.a
                  })
                })]
              })
            }, index.toString()))
          })
        })]
      })
    })
  });
}

/* harmony default export */ const Faq_Faq = (Faq);
;// CONCATENATED MODULE: ./components/Faq/index.js


/***/ }),

/***/ 7584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Feature_Feature)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(889);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1168);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: external "react-youtube"
const external_react_youtube_namespaceObject = require("react-youtube");
var external_react_youtube_default = /*#__PURE__*/__webpack_require__.n(external_react_youtube_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Close"
const Close_namespaceObject = require("@mui/icons-material/Close");
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Dialog"
const Dialog_namespaceObject = require("@mui/material/Dialog");
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/DialogContent"
const DialogContent_namespaceObject = require("@mui/material/DialogContent");
var DialogContent_default = /*#__PURE__*/__webpack_require__.n(DialogContent_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/DialogTitle"
const DialogTitle_namespaceObject = require("@mui/material/DialogTitle");
var DialogTitle_default = /*#__PURE__*/__webpack_require__.n(DialogTitle_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Zoom"
const Zoom_namespaceObject = require("@mui/material/Zoom");
var Zoom_default = /*#__PURE__*/__webpack_require__.n(Zoom_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./public/images/imgAPI.js
var imgAPI = __webpack_require__(4882);
// EXTERNAL MODULE: ./theme/common.js
var common = __webpack_require__(4618);
// EXTERNAL MODULE: ./youtube.js
var youtube = __webpack_require__(434);
var youtube_default = /*#__PURE__*/__webpack_require__.n(youtube);
// EXTERNAL MODULE: external "react-scroll-parallax"
var external_react_scroll_parallax_ = __webpack_require__(7446);
// EXTERNAL MODULE: ./components/Parallax/parallax-style.js
var parallax_style = __webpack_require__(7068);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Parallax/Small.js





function ParallaxLarge() {
  const {
    classes,
    cx
  } = (0,parallax_style/* default */.Z)();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.parallaxWrap,
    children: /*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_parallax_.ParallaxProvider, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: cx(classes.innerParallax, classes.small),
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_parallax_.Parallax, {
          translateY: [10, 50],
          className: "figure",
          children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
            className: classes.triangle,
            children: /*#__PURE__*/jsx_runtime_.jsx("use", {
              xlinkHref: "/images/mobile/triangle.svg#main"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_parallax_.Parallax, {
          translateY: [0, 60],
          className: "figure",
          children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
            className: classes.circle,
            children: /*#__PURE__*/jsx_runtime_.jsx("use", {
              xlinkHref: "/images/mobile/circle.svg#main"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_parallax_.Parallax, {
          translateY: [-20, 20],
          className: "figure",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.squareDot,
            children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
              className: classes.dotMany,
              children: /*#__PURE__*/jsx_runtime_.jsx("use", {
                xlinkHref: "/images/mobile/dot-many.svg#main"
              })
            })
          })
        })]
      })
    })
  });
}
// EXTERNAL MODULE: ./components/Parallax/Medium.js
var Medium = __webpack_require__(6);
// EXTERNAL MODULE: ./components/Title/title-style.js
var title_style = __webpack_require__(8460);
;// CONCATENATED MODULE: ./components/Title/TitleSecondary.js




function TitleSecondary(props) {
  const {
    classes,
    cx
  } = (0,title_style/* default */.Z)();
  const {
    text,
    align
  } = props;

  const setAlign = alignment => {
    switch (alignment) {
      case 'right':
        return classes.right;

      case 'center':
        return classes.center;

      default:
        return classes.left;
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: cx(classes.titleSecondary, setAlign(align)),
    children: /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
      variant: "h4",
      children: text
    })
  });
}
TitleSecondary.defaultProps = {
  align: 'left'
};
// EXTERNAL MODULE: ./components/Title/index.js + 1 modules
var Title = __webpack_require__(619);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
// EXTERNAL MODULE: ./public/images/mobile/deco-light-top.svg
var deco_light_top = __webpack_require__(9805);
var deco_light_top_default = /*#__PURE__*/__webpack_require__.n(deco_light_top);
// EXTERNAL MODULE: ./public/images/mobile/deco-dark-top.svg
var deco_dark_top = __webpack_require__(9942);
var deco_dark_top_default = /*#__PURE__*/__webpack_require__.n(deco_dark_top);
;// CONCATENATED MODULE: ./components/Feature/feature-style.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const decoStyle = {
  width: 450,
  height: 450,
  position: 'absolute',
  top: 80,
  right: 40
};
const featureStyles = (0,mui_.makeStyles)({
  uniqId: 'feature'
})((theme, _params, classes) => ({
  root: {},
  decoPrimary: _objectSpread({
    fill: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    [theme.breakpoints.down('md')]: {
      top: 0
    }
  }, decoStyle),
  decoSecondary: _objectSpread({
    fill: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
    [theme.breakpoints.down('md')]: {
      top: 0
    }
  }, decoStyle),
  first: {
    position: 'relative',
    zIndex: 10
  },
  last: {
    position: 'relative',
    zIndex: 30,
    marginBottom: theme.spacing(-70),
    [theme.breakpoints.up('xl')]: {
      marginBottom: theme.spacing(-40)
    }
  },
  decoPrimaryBig: {
    fill: theme.palette.primary.dark,
    width: 500,
    height: 500,
    left: 80,
    top: -40,
    position: 'absolute',
    [theme.breakpoints.down('sm')]: {
      top: -160,
      transform: 'scale(0.5)'
    }
  },
  bgColor: {
    position: 'relative',
    background: theme.palette.mode === 'dark' ? (0,styles_.darken)(theme.palette.primary.light, 0.65) : (0,styles_.alpha)(theme.palette.primary.light, 0.2),
    padding: theme.spacing(20, 0),
    marginTop: theme.spacing(-20)
  },
  decoBgTop: {
    background: `url(${theme.palette.mode === 'dark' ? (deco_dark_top_default()) : (deco_light_top_default())}) no-repeat transparent`,
    backgroundSize: '100% auto',
    position: 'absolute',
    width: '100%',
    height: 470,
    left: 0,
    top: 0,
    '&:after': {
      content: '""',
      background: `url(${theme.palette.mode === 'dark' ? (deco_dark_top_default()) : (deco_light_top_default())}) no-repeat transparent`,
      backgroundSize: '100% auto',
      position: 'absolute',
      width: '100%',
      height: 470,
      opacity: 0.5,
      left: 20,
      top: 20
    }
  },
  button: {},
  item: {
    position: 'relative',
    paddingBottom: theme.spacing(5),
    '& p': {
      marginBottom: theme.spacing()
    },
    '& > div': {
      [theme.breakpoints.down('sm')]: {
        padding: 0
      }
    }
  },
  text: {
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(12)
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    }
  },
  screen: {
    position: 'relative',
    '& img': {
      display: 'block',
      width: 400,
      margin: '0 auto',
      [theme.breakpoints.down('md')]: {
        width: 320,
        margin: '0 auto'
      }
    }
  },
  video: {
    overflow: 'hidden',
    fontWeight: theme.typography.fontWeightBold,
    textAlign: 'center',
    width: '100%',
    position: 'relative',
    height: 300,
    [theme.breakpoints.down('sm')]: {
      height: 180
    },
    '& img': {
      position: 'absolute',
      left: 0,
      width: '100%',
      minHeight: '100%'
    },
    '& h6': {
      fontWeight: theme.typography.fontWeightBold,
      textAlign: 'center',
      position: 'relative',
      margin: theme.spacing(8, 0, 4),
      [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(4, 0)
      }
    },
    [`& .${classes.button}`]: {
      background: theme.palette.primary.main,
      '& i': {
        width: 40,
        height: 40,
        lineHeight: '40px',
        color: theme.palette.common.white,
        transform: 'scale(1.7) translateX(2px)'
      }
    }
  },
  graphic: {
    position: 'absolute',
    '& img': {
      width: '90%',
      display: 'block'
    }
  },
  tabContent: {
    position: 'relative',
    padding: theme.spacing(8, 4)
  },
  tabLabel: {
    fontSize: 18,
    borderBottom: `1px solid ${theme.palette.text.disabled}`
  },
  illustrationLeft: {
    position: 'relative',
    [`& .${classes.screen}`]: {
      margin: 0,
      [theme.breakpoints.up('md')]: {
        marginTop: -50
      },
      [theme.breakpoints.down('md')]: {
        marginLeft: theme.spacing(-20)
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: theme.spacing()
      }
    }
  },
  illustrationRight: {
    position: 'relative',
    [`& .${classes.screen}`]: {
      [theme.breakpoints.up('md')]: {
        left: 20,
        top: -40
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: theme.spacing()
      }
    }
  },
  illustrationCenter: {
    position: 'relative',
    marginTop: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(3)
    }
  },
  videoPopup: {
    width: 690,
    maxWidth: 'none'
  },
  closeBtn: {
    position: 'absolute',
    top: 4,
    right: 4
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const feature_style = (featureStyles);
;// CONCATENATED MODULE: ./components/Feature/Feature.js
function Feature_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Feature_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Feature_ownKeys(Object(source), !0).forEach(function (key) { Feature_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Feature_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function Feature_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


























const Transition = /*#__PURE__*/external_react_default().forwardRef(function Transition(props, ref) {
  // eslint-disable-line
  return /*#__PURE__*/jsx_runtime_.jsx((Zoom_default()), Feature_objectSpread({
    ref: ref
  }, props));
});

function Feature() {
  const {
    classes,
    cx
  } = feature_style();
  const {
    classes: text
  } = (0,common/* useText */.XK)();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const theme = (0,styles_.useTheme)();
  const isMobile = useMediaQuery_default()(theme.breakpoints.down('md'));
  const {
    0: player,
    1: setPlayer
  } = (0,external_react_.useState)([]);
  const {
    0: openPopup,
    1: setOpenPopup
  } = (0,external_react_.useState)(false);

  const handleClickOpen = () => {
    if ((youtube_default()).use) {
      setOpenPopup(true);
      player[0].playVideo();
    }
  };

  const handleClose = () => {
    setOpenPopup(false);
    player[0].pauseVideo();
  };

  const _onReady = event => {
    player.push(event.target);
    setPlayer(player);
  };

  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      controls: 1,
      rel: 0,
      showinfo: 1,
      mute: 0,
      origin: 'http://localhost:3007'
    }
  };
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((Dialog_default()), {
      open: openPopup,
      TransitionComponent: Transition,
      keepMounted: true,
      classes: {
        paper: classes.videoPopup
      },
      onClose: handleClose,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((DialogTitle_default()), {
        id: "alert-dialog-slide-title",
        children: [t('mobile-landing.feature_video'), /*#__PURE__*/jsx_runtime_.jsx((IconButton_default()), {
          onClick: handleClose,
          className: classes.closeBtn,
          size: "large",
          children: /*#__PURE__*/jsx_runtime_.jsx((Close_default()), {
            className: classes.icon
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx((DialogContent_default()), {
        children: (youtube_default()).use && /*#__PURE__*/jsx_runtime_.jsx((external_react_youtube_default()), {
          videoId: "MltGO66gTbo",
          onReady: _onReady,
          opts: opts
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Title/* default */.Z, {
      align: "center",
      children: t('mobile-landing.feature_title')
    }), /*#__PURE__*/jsx_runtime_.jsx((Container_default()), {
      fixed: true,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: cx(classes.item, classes.first),
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
          container: true,
          direction: isMobile ? 'column-reverse' : 'row',
          children: [/*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
            item: true,
            md: 6,
            xs: 12,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: classes.illustrationLeft,
              children: [/*#__PURE__*/jsx_runtime_.jsx("svg", {
                className: classes.decoPrimary,
                children: /*#__PURE__*/jsx_runtime_.jsx("use", {
                  xlinkHref: "/images/mobile/deco-feature.svg#main"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(ParallaxLarge, {}), /*#__PURE__*/jsx_runtime_.jsx("figure", {
                className: classes.screen,
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: imgAPI/* default.mobile.4 */.Z.mobile[4],
                  alt: "illustration"
                })
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
            item: true,
            md: 6,
            xs: 12,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: classes.text,
              children: [/*#__PURE__*/jsx_runtime_.jsx(TitleSecondary, {
                align: isMobile ? 'center' : 'left',
                text: t('mobile-landing.feature_title1')
              }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                display: "block",
                component: "p",
                className: text.subtitle2,
                children: t('mobile-landing.feature_desc1')
              })]
            })
          })]
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.bgColor,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.decoBgTop
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Container_default()), {
        fixed: true,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.item,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
            container: true,
            children: [/*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
              item: true,
              md: 6,
              xs: 12,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: classes.text,
                children: [/*#__PURE__*/jsx_runtime_.jsx(TitleSecondary, {
                  align: isMobile ? 'center' : 'left',
                  text: t('mobile-landing.feature_title2')
                }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                  display: "block",
                  component: "p",
                  className: text.subtitle2,
                  children: t('mobile-landing.feature_desc2')
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
              item: true,
              md: 6,
              xs: 12,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: classes.illustrationRight,
                children: [/*#__PURE__*/jsx_runtime_.jsx("svg", {
                  className: classes.decoSecondary,
                  children: /*#__PURE__*/jsx_runtime_.jsx("use", {
                    xlinkHref: "/images/mobile/deco-feature.svg#main"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(ParallaxLarge, {}), /*#__PURE__*/jsx_runtime_.jsx("figure", {
                  className: classes.screen,
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: imgAPI/* default.mobile.5 */.Z.mobile[5],
                    alt: "screen"
                  })
                })]
              })
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: cx(classes.item, classes.last),
          children: [/*#__PURE__*/jsx_runtime_.jsx(TitleSecondary, {
            align: "center",
            text: t('mobile-landing.feature_title3')
          }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
            align: "center",
            component: "p",
            className: text.subtitle2,
            children: t('mobile-landing.feature_desc3')
          }), /*#__PURE__*/jsx_runtime_.jsx((Container_default()), {
            maxWidth: "sm",
            children: /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
              container: true,
              children: /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
                item: true,
                md: 12,
                xs: 12,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: classes.illustrationCenter,
                  children: [/*#__PURE__*/jsx_runtime_.jsx("svg", {
                    className: classes.decoPrimaryBig,
                    children: /*#__PURE__*/jsx_runtime_.jsx("use", {
                      xlinkHref: "/images/mobile/deco-feature.svg#main"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx(Medium/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Paper_default()), {
                    className: classes.video,
                    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: imgAPI/* default.mobile.6 */.Z.mobile[6],
                      alt: "screen"
                    }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                      variant: "h6",
                      children: t('mobile-landing.feature_watch')
                    }), /*#__PURE__*/jsx_runtime_.jsx((IconButton_default()), {
                      className: classes.button,
                      onClick: handleClickOpen,
                      size: "large",
                      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "ion-ios-play-outline"
                      })
                    })]
                  })]
                })
              })
            })
          })]
        })]
      })]
    })]
  });
}

/* harmony default export */ const Feature_Feature = (Feature);
;// CONCATENATED MODULE: ./components/Feature/index.js


/***/ }),

/***/ 7156:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4618);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4539);
/* harmony import */ var _footer_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5722);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Footer__WEBPACK_IMPORTED_MODULE_5__]);
_Footer__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










function FooterWithDeco(props) {
  const {
    classes
  } = (0,_footer_style__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
  const {
    classes: text
  } = (0,_theme_common__WEBPACK_IMPORTED_MODULE_4__/* .useText */ .XK)();
  const {
    toggleDir
  } = props;
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)('common');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: classes.footerDeco,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("svg", {
      className: classes.decoTop,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("use", {
        xlinkHref: "/images/mobile/deco-wave-top.svg#main"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
      className: classes.decoration
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: classes.action,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
        variant: "h4",
        className: text.subtitle,
        children: t('mobile-landing.footer_text')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: classes.btnArea,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("img", {
            src: "/images/mobile/app-store.png",
            alt: "app store"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("img", {
            src: "/images/mobile/play-store.png",
            alt: "play store"
          })
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      toggleDir: toggleDir
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterWithDeco);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ NewsEvent_NewsEvent)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(889);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./theme/common.js
var common = __webpack_require__(4618);
// EXTERNAL MODULE: ./components/Title/index.js + 1 modules
var Title = __webpack_require__(619);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1168);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/Cards/cards-style.js

const cardsStyles = (0,mui_.makeStyles)({
  uniqId: 'cards'
})((theme, _params, classes) => ({
  landscape: {
    marginBottom: theme.spacing(5),
    alignItems: 'center',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    },
    '& figure': {
      width: 150,
      height: 150,
      margin: 0,
      [theme.breakpoints.down('sm')]: {
        width: '93%',
        margin: '0 auto',
        height: 180
      },
      '& img': {
        height: '100%',
        [theme.breakpoints.down('sm')]: {
          height: 'auto',
          width: '100%'
        }
      }
    },
    [`& .${classes.desc}`]: {
      height: 185,
      padding: theme.spacing(3, 1),
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(3),
        marginLeft: theme.spacing(-12),
        paddingLeft: theme.spacing(13)
      },
      [theme.breakpoints.down('sm')]: {
        paddingTop: 230,
        marginTop: -200,
        padding: theme.spacing(3, 1)
      }
    }
  },
  potrait: {
    flexDirection: 'column',
    '& figure': {
      height: 250,
      width: '93%',
      margin: '0 auto',
      [theme.breakpoints.down('sm')]: {
        height: 180
      },
      '& img': {
        width: '100%'
      }
    },
    [`& .${classes.desc}`]: {
      marginTop: -200,
      padding: theme.spacing(3),
      paddingTop: 230,
      [theme.breakpoints.down('sm')]: {
        paddingLeft: theme.spacing(),
        paddingRight: theme.spacing()
      }
    }
  },
  news: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(8)
    },
    '& figure': {
      overflow: 'hidden',
      borderRadius: 15,
      boxShadow: theme.shadows[8],
      zIndex: 1,
      '& img': {
        marginLeft: '50%',
        transform: 'translateX(-50%)'
      }
    },
    '& p': {
      fontSize: 18,
      marginTop: theme.spacing(2),
      fontWeight: theme.typography.fontWeightMedium
    }
  },
  desc: {
    flex: 1
  },
  text: {
    padding: theme.spacing(0, 1.5)
  },
  type: {
    fontWeight: theme.typography.fontWeightBold,
    textTransform: 'uppercase',
    color: theme.palette.text.secondary
  },
  btn: {
    marginTop: theme.spacing(1),
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
    textTransform: 'none'
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const cards_style = (cardsStyles);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Cards/News.js







function News(props) {
  const {
    classes,
    cx
  } = cards_style();
  const {
    caption,
    text,
    img,
    type
  } = props;

  const setOrientation = orientation => {
    if (orientation === 'landscape') {
      return classes.landscape;
    }

    return classes.potrait;
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: cx(classes.news, setOrientation(type)),
    children: [/*#__PURE__*/jsx_runtime_.jsx("figure", {
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: img,
        alt: "thumb"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Paper_default()), {
      className: classes.desc,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.text,
        children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
          variant: "caption",
          className: classes.type,
          children: caption
        }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
          display: "block",
          component: "p",
          children: text
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
        size: "small",
        className: classes.btn,
        children: "Read more"
      })]
    })]
  });
}
// EXTERNAL MODULE: ./components/Parallax/Large.js
var Large = __webpack_require__(9141);
// EXTERNAL MODULE: ./public/images/imgAPI.js
var imgAPI = __webpack_require__(4882);
// EXTERNAL MODULE: ./public/images/mobile/deco-light-top.svg
var deco_light_top = __webpack_require__(9805);
var deco_light_top_default = /*#__PURE__*/__webpack_require__.n(deco_light_top);
// EXTERNAL MODULE: ./public/images/mobile/deco-dark-top.svg
var deco_dark_top = __webpack_require__(9942);
var deco_dark_top_default = /*#__PURE__*/__webpack_require__.n(deco_dark_top);
;// CONCATENATED MODULE: ./components/NewsEvent/news-event-style.js




const newsEventStyle = (0,mui_.makeStyles)({
  uniqId: 'news'
})(theme => ({
  root: {
    position: 'relative',
    backgroundImage: `linear-gradient(180deg, ${theme.palette.background.paper} 40%, ${theme.palette.mode === 'dark' ? (0,styles_.darken)(theme.palette.primary.light, 0.65) : (0,styles_.alpha)(theme.palette.primary.light, 0.2)} 40%)`,
    margin: '0 auto',
    paddingBottom: theme.spacing(30),
    marginBottom: theme.spacing(-40)
  },
  decoBgTop: {
    background: `url(${theme.palette.mode === 'dark' ? (deco_dark_top_default()) : (deco_light_top_default())}) no-repeat transparent`,
    backgroundSize: '100% auto',
    transform: 'scale(1, 0.4)',
    position: 'absolute',
    width: '100%',
    height: 600,
    left: 0,
    top: 220,
    [theme.breakpoints.down('md')]: {
      top: 400
    }
  },
  parallaxEvent: {
    position: 'absolute',
    top: -320,
    left: 0,
    width: '100%'
  },
  blogWrap: {
    position: 'relative',
    zIndex: 10,
    margin: theme.spacing(10, 0)
  },
  listNews: {
    '& > div': {
      [theme.breakpoints.down('sm')]: {
        paddingTop: '0 !important',
        paddingBottom: '0 !important'
      }
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const news_event_style = (newsEventStyle);
;// CONCATENATED MODULE: ./components/NewsEvent/NewsEvent.js
















function NewsEvent() {
  const {
    classes
  } = news_event_style();
  const {
    classes: text
  } = (0,common/* useText */.XK)();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const theme = (0,styles_.useTheme)();
  const isMobile = useMediaQuery_default()(theme.breakpoints.down('sm'));
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.decoBgTop
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.parallaxEvent,
      children: /*#__PURE__*/jsx_runtime_.jsx(Large/* default */.Z, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(Title/* default */.Z, {
      align: "center",
      children: t('mobile-landing.news_title')
    }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
      align: "center",
      className: text.subtitle2,
      children: t('mobile-landing.news_desc')
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.blogWrap,
      children: /*#__PURE__*/jsx_runtime_.jsx((Container_default()), {
        fixed: true,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
          container: true,
          spacing: 6,
          className: classes.listNews,
          children: [/*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
            item: true,
            md: 6,
            children: /*#__PURE__*/jsx_runtime_.jsx(News, {
              type: "potrait",
              img: imgAPI/* default.photo.11 */.Z.photo[11],
              caption: "headline",
              text: "Sed imperdiet enim ligula, vitae viverra justo."
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
            item: true,
            md: 6,
            children: [/*#__PURE__*/jsx_runtime_.jsx(News, {
              type: isMobile ? 'potrait' : 'landscape',
              img: imgAPI/* default.photo.1 */.Z.photo[1],
              caption: "news",
              text: "Sed imperdiet enim ligula, vitae viverra justo."
            }), /*#__PURE__*/jsx_runtime_.jsx(News, {
              type: "landscape",
              img: imgAPI/* default.photo.2 */.Z.photo[2],
              caption: "news",
              text: "Sed imperdiet enim ligula, vitae viverra justo."
            })]
          })]
        })
      })
    })]
  });
}

/* harmony default export */ const NewsEvent_NewsEvent = (NewsEvent);
;// CONCATENATED MODULE: ./components/NewsEvent/index.js


/***/ }),

/***/ 4316:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ PageNav_PageNav)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-anchor-link-smooth-scroll"
var external_react_anchor_link_smooth_scroll_ = __webpack_require__(2217);
var external_react_anchor_link_smooth_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_anchor_link_smooth_scroll_);
// EXTERNAL MODULE: external "react-scrollspy"
var external_react_scrollspy_ = __webpack_require__(6578);
var external_react_scrollspy_default = /*#__PURE__*/__webpack_require__.n(external_react_scrollspy_);
;// CONCATENATED MODULE: external "@mui/material/Fab"
const Fab_namespaceObject = require("@mui/material/Fab");
var Fab_default = /*#__PURE__*/__webpack_require__.n(Fab_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/ArrowUpward"
const ArrowUpward_namespaceObject = require("@mui/icons-material/ArrowUpward");
var ArrowUpward_default = /*#__PURE__*/__webpack_require__.n(ArrowUpward_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Tooltip"
const Tooltip_namespaceObject = require("@mui/material/Tooltip");
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_namespaceObject);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./components/Header/menu.js
var menu = __webpack_require__(8363);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/PageNav/pagenav-style.js

const pagenav = (0,mui_.makeStyles)({
  uniqId: 'pagenav'
})((theme, _params, classes) => ({
  show: {},
  fab: {
    transform: 'scale(0.5)',
    transition: 'all 0.5s ease',
    opacity: 0,
    background: theme.palette.primary.light,
    fontWeight: theme.typography.fontWeightBold,
    '& svg': {
      fill: theme.palette.primary.dark,
      width: 40,
      height: 40
    },
    '&:hover': {
      '& svg': {
        fill: theme.palette.primary.light
      }
    }
  },
  pageNav: {
    zIndex: 200,
    position: 'fixed',
    bottom: 40,
    right: 40,
    '& nav': {
      transition: 'height 0.5s ease',
      transitionDelay: '0.5s',
      height: 0,
      overflow: 'hidden'
    },
    [`&.${classes.show}`]: {
      [`& .${classes.fab}`]: {
        opacity: 1,
        transform: 'scale(1)'
      }
    },
    '& ul': {
      margin: '0 0 16px 22px',
      padding: 0,
      position: 'relative'
    },
    '& li': {
      marginBottom: theme.spacing(3),
      listStyle: 'none',
      opacity: 0,
      position: 'relative',
      transition: 'all 0.4s ease',
      '& a': {
        width: 12,
        height: 12,
        boxShadow: theme.shadows[1],
        background: theme.palette.background.paper,
        border: `2px solid ${theme.palette.primary.light}`,
        display: 'block',
        transition: 'all 0.4s ease',
        borderRadius: '50%'
      },
      '&[class="active"] a': {
        background: theme.palette.primary.light,
        border: `2px solid ${theme.palette.primary.dark}`
      }
    },
    '&:hover': {
      '& li': {
        opacity: 1,
        top: '0 !important'
      },
      '& nav': {
        transitionDelay: '0s',
        height: '100%'
      }
    }
  },
  tooltip: {
    textTransform: 'capitalize',
    background: theme.palette.primary.dark,
    fontSize: 14
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const pagenav_style = (pagenav);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/PageNav/PageNav.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













function createData(id, name, url) {
  return {
    id,
    name,
    url
  };
}

const LinkBtn = /*#__PURE__*/external_react_default().forwardRef(function LinkBtn(props, ref) {
  // eslint-disable-line
  return /*#__PURE__*/jsx_runtime_.jsx((external_react_anchor_link_smooth_scroll_default()), _objectSpread({
    to: props.to
  }, props)); // eslint-disable-line
});

function PageNav() {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    0: show,
    1: setShow
  } = (0,external_react_.useState)(false);
  let flagShow = false;

  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagShow = scroll > 500;

    if (flagShow !== newFlagShow) {
      setShow(newFlagShow);
      flagShow = newFlagShow;
    }
  };

  (0,external_react_.useEffect)(() => {
    window.addEventListener('scroll', handleScroll);
    console.log();
  }, []);
  const {
    classes,
    cx
  } = pagenav_style();
  const {
    0: menuList
  } = (0,external_react_.useState)([createData(1, menu/* default.0 */.Z[0], '#' + menu/* default.0.replace */.Z[0].replace(/ /g, '_')), createData(2, menu/* default.1 */.Z[1], '#' + menu/* default.1.replace */.Z[1].replace(/ /g, '_')), createData(3, menu/* default.2 */.Z[2], '#' + menu/* default.2.replace */.Z[2].replace(/ /g, '_')), createData(4, menu/* default.3 */.Z[3], '#' + menu/* default.3.replace */.Z[3].replace(/ /g, '_'))]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: cx(classes.pageNav, show && classes.show),
    children: [/*#__PURE__*/jsx_runtime_.jsx("nav", {
      className: classes.sectionNav,
      children: /*#__PURE__*/jsx_runtime_.jsx((external_react_scrollspy_default()), {
        items: menu/* default */.Z,
        currentClassName: "active",
        children: menuList.map(item => /*#__PURE__*/jsx_runtime_.jsx("li", {
          style: {
            top: 30 * (menu/* default.length */.Z.length - item.id)
          },
          "data-id": item.id,
          children: /*#__PURE__*/jsx_runtime_.jsx((Tooltip_default()), {
            title: t('mobile-landing.header_' + item.name),
            placement: "left",
            classes: {
              tooltip: classes.tooltip
            },
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: /*#__PURE__*/jsx_runtime_.jsx(LinkBtn, {
                href: item.url
              })
            })
          })
        }, item.id.toString()))
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((Tooltip_default()), {
      title: "To Top",
      placement: "left",
      classes: {
        tooltip: classes.tooltip
      },
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: /*#__PURE__*/jsx_runtime_.jsx((Fab_default()), {
          color: "primary",
          "aria-label": "To top",
          component: LinkBtn,
          href: "#home",
          className: classes.fab,
          children: /*#__PURE__*/jsx_runtime_.jsx((ArrowUpward_default()), {})
        })
      })
    })]
  });
}

/* harmony default export */ const PageNav_PageNav = (PageNav);
;// CONCATENATED MODULE: ./components/PageNav/index.js


/***/ }),

/***/ 6:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ParallaxLarge)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7446);
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _parallax_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7068);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





function ParallaxLarge() {
  const {
    classes,
    cx
  } = (0,_parallax_style__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    className: classes.parallaxWrap,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_1__.ParallaxProvider, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: cx(classes.innerParallax, classes.medium),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_1__.Parallax, {
          translateY: [10, 50],
          className: "figure",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("svg", {
            className: classes.triangle,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("use", {
              xlinkHref: "/images/mobile/triangle.svg#main"
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_1__.Parallax, {
          translateY: [0, 60],
          className: "figure",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("svg", {
            className: classes.circle,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("use", {
              xlinkHref: "/images/mobile/circle.svg#main"
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_1__.Parallax, {
          translateY: [-20, 20],
          className: "figure",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: classes.squareDot,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("svg", {
              className: classes.dotMany,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("use", {
                xlinkHref: "/images/mobile/dot-many.svg#main"
              })
            })
          })
        })]
      })
    })
  });
}

/***/ }),

/***/ 4780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Showcase_Showcase)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1168);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./public/images/imgAPI.js
var imgAPI = __webpack_require__(4882);
// EXTERNAL MODULE: ./components/Parallax/Large.js
var Large = __webpack_require__(9141);
// EXTERNAL MODULE: ./components/Title/index.js + 1 modules
var Title = __webpack_require__(619);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: ./components/Showcase/showcase-style.js


const showcaseStyles = (0,mui_.makeStyles)({
  uniqId: 'showcase'
})((theme, _params, classes) => ({
  root: {
    backgroundImage: `linear-gradient(185deg, ${theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main} 50%, ${theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.main} 100%)`,
    paddingTop: theme.spacing(80),
    [theme.breakpoints.down('lg')]: {
      paddingTop: theme.spacing(70)
    },
    [theme.breakpoints.up('xl')]: {
      paddingTop: theme.spacing(50)
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(60, 3, 0)
    },
    [theme.breakpoints.down(330)]: {
      padding: theme.spacing(60, 0, 0)
    }
  },
  decoTop: {
    fill: theme.palette.mode === 'dark' ? (0,styles_.darken)(theme.palette.primary.light, 0.65) : (0,styles_.lighten)(theme.palette.primary.light, 0.8),
    height: 300,
    width: '100%',
    position: 'absolute',
    top: -3,
    left: 0,
    [theme.breakpoints.up('lg')]: {
      transform: 'scale(1.5, 1)'
    },
    [theme.breakpoints.up('xl')]: {
      display: 'none'
    }
  },
  decoBottom: {
    fill: theme.palette.mode === 'dark' ? (0,styles_.darken)(theme.palette.primary.light, 0.6) : (0,styles_.lighten)(theme.palette.primary.light, 0.8),
    height: 300,
    width: '100%',
    position: 'absolute',
    bottom: -70,
    zIndex: 21,
    [theme.breakpoints.up('lg')]: {
      transform: 'scale(1.5, 1)'
    },
    [theme.breakpoints.up('xl')]: {
      display: 'none'
    },
    [theme.breakpoints.down('md')]: {
      width: 1280,
      left: '-50%'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  decoBottomMobile: {
    display: 'none',
    height: 140,
    width: '140%',
    left: '-20%',
    position: 'absolute',
    bottom: -40,
    borderRadius: '50%',
    zIndex: 21,
    background: theme.palette.mode === 'dark' ? (0,styles_.darken)(theme.palette.primary.light, 0.6) : (0,styles_.lighten)(theme.palette.primary.light, 0.8),
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    }
  },
  invertParallax: {
    filter: 'brightness(0) invert(1)',
    position: 'absolute',
    opacity: 0.5,
    left: 0,
    bottom: 600,
    width: '100%',
    height: '100%'
  },
  carouselWrap: {
    position: 'relative',
    zIndex: 20,
    [theme.breakpoints.up('lg')]: {
      paddingTop: theme.spacing(10)
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(5)
    }
  },
  item: {
    position: 'relative',
    '&:focus': {
      outline: 'none'
    }
  },
  frame: {
    padding: theme.spacing(1),
    margin: '0 auto',
    borderRadius: 20,
    background: theme.palette.common.white,
    '& img': {
      display: 'block',
      width: '100%'
    }
  },
  carouselSide: {
    [theme.breakpoints.up('xl')]: {
      maxWidth: 1440,
      margin: '0 auto'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    [`& .${classes.frame}`]: {
      width: 200,
      height: 410,
      [theme.breakpoints.down('lg')]: {
        width: 166,
        height: 365
      },
      '& img': {}
    }
  },
  carouselCenter: {
    width: 320,
    overflow: 'hidden',
    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      bottom: 0
    },
    [theme.breakpoints.up('lg')]: {
      bottom: -60
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto'
    },
    [`& .${classes.frame}`]: {
      width: 249,
      height: 548,
      position: 'relative',
      [theme.breakpoints.only('sm')]: {
        width: 166,
        height: 365
      },
      [theme.breakpoints.only('md')]: {
        width: 166,
        height: 365
      },
      '& img': {
        transition: 'all 0.3s ease-out',
        transform: 'translateY(30px)'
      }
    },
    '& div[class="slick-list"]': {
      overflow: 'visible'
    },
    '& div[class*="slick-active "]': {
      '& img': {
        transform: 'translate(0)'
      },
      [`& .${classes.widget}`]: {
        transform: 'scale(1.2)',
        opacity: 1
      }
    }
  },
  widget: {
    position: 'absolute',
    top: 30,
    left: 0,
    transform: 'scale(1)',
    opacity: 0,
    transition: 'all 0.4s ease-out',
    transitionDelay: '0.3s',
    zIndex: 2,
    '& img': {
      width: '100%'
    }
  },
  active: {},
  pagination: {
    zIndex: 80,
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(-8)
    },
    '& ul': {
      position: 'absolute',
      display: 'block',
      width: '100%',
      padding: 0,
      margin: 0,
      listStyle: 'none',
      textAlign: 'center',
      bottom: theme.spacing(-6),
      '& li': {
        position: 'relative',
        display: 'inline-block',
        width: 15,
        height: 15,
        margin: '0 5px',
        padding: 0,
        background: theme.palette.secondary.main,
        borderRadius: 15,
        transition: 'all 0.5s ease-out',
        [`&.${classes.active}`]: {
          width: 40
        },
        '&:hover': {
          opacity: 0.5
        },
        '& button': {
          opacity: 0,
          cursor: 'pointer',
          padding: 0,
          width: '100%',
          height: '100%'
        }
      }
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const showcase_style = (showcaseStyles);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Showcase/Showcase.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function Showcase() {
  const {
    classes
  } = showcase_style();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const sliderSide = (0,external_react_.useRef)(null);
  const sliderCenter = (0,external_react_.useRef)(null);
  const {
    0: slider,
    1: setSlider
  } = (0,external_react_.useState)({
    nav1: null,
    nav2: null
  });
  const {
    0: activeSlide,
    1: setActiveSlide
  } = (0,external_react_.useState)(0);
  (0,external_react_.useEffect)(() => {
    setSlider({
      nav1: sliderSide.current,
      nav2: sliderCenter.current
    });
  }, []);
  const settingsCenter = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    arrows: false,
    afterChange: current => setActiveSlide(current)
  };
  const settingsSide = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 5,
    arrows: false,
    responsive: [{
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }]
  };

  const handleDotsNav = index => {
    sliderCenter.current.slickGoTo(index);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/jsx_runtime_.jsx("svg", {
      className: classes.decoTop,
      children: /*#__PURE__*/jsx_runtime_.jsx("use", {
        xlinkHref: "/images/mobile/deco-wave-top.svg#main"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Title/* default */.Z, {
      dark: true,
      align: "center",
      children: t('mobile-landing.showcase_title')
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.carouselWrap,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.invertParallax,
        children: /*#__PURE__*/jsx_runtime_.jsx(Large/* default */.Z, {})
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.carouselSide,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), _objectSpread(_objectSpread({
          ref: sliderSide,
          asNavFor: slider.nav2
        }, settingsSide), {}, {
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.item,
            children: /*#__PURE__*/jsx_runtime_.jsx((Paper_default()), {
              className: classes.frame,
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: imgAPI/* default.mobile.7 */.Z.mobile[7],
                alt: "app"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.item,
            children: /*#__PURE__*/jsx_runtime_.jsx((Paper_default()), {
              className: classes.frame,
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: imgAPI/* default.mobile.8 */.Z.mobile[8],
                alt: "app"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.item,
            children: /*#__PURE__*/jsx_runtime_.jsx((Paper_default()), {
              className: classes.frame,
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: imgAPI/* default.mobile.9 */.Z.mobile[9],
                alt: "app"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.item,
            children: /*#__PURE__*/jsx_runtime_.jsx((Paper_default()), {
              className: classes.frame,
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: imgAPI/* default.mobile.10 */.Z.mobile[10],
                alt: "app"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.item,
            children: /*#__PURE__*/jsx_runtime_.jsx((Paper_default()), {
              className: classes.frame,
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: imgAPI/* default.mobile.11 */.Z.mobile[11],
                alt: "app"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.item,
            children: /*#__PURE__*/jsx_runtime_.jsx((Paper_default()), {
              className: classes.frame,
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: imgAPI/* default.mobile.12 */.Z.mobile[12],
                alt: "app"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.item,
            children: /*#__PURE__*/jsx_runtime_.jsx((Paper_default()), {
              className: classes.frame,
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: imgAPI/* default.mobile.13 */.Z.mobile[13],
                alt: "app"
              })
            })
          })]
        }))
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.carouselCenter,
        children: /*#__PURE__*/jsx_runtime_.jsx((Paper_default()), {
          className: classes.frame,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), _objectSpread(_objectSpread({
            ref: sliderCenter,
            asNavFor: slider.nav1
          }, settingsCenter), {}, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: classes.item,
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: imgAPI/* default.mobile.7 */.Z.mobile[7],
                alt: "app"
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: classes.widget,
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: imgAPI/* default.mobile.14 */.Z.mobile[14],
                  alt: "app"
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: classes.item,
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: imgAPI/* default.mobile.8 */.Z.mobile[8],
                alt: "app"
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: classes.widget,
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: imgAPI/* default.mobile.15 */.Z.mobile[15],
                  alt: "app"
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: classes.item,
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: imgAPI/* default.mobile.9 */.Z.mobile[9],
                alt: "app"
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: classes.widget,
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: imgAPI/* default.mobile.16 */.Z.mobile[16],
                  alt: "app"
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: classes.item,
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: imgAPI/* default.mobile.10 */.Z.mobile[10],
                alt: "app"
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: classes.widget,
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: imgAPI/* default.mobile.17 */.Z.mobile[17],
                  alt: "app"
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: classes.item,
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: imgAPI/* default.mobile.11 */.Z.mobile[11],
                alt: "app"
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: classes.widget,
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: imgAPI/* default.mobile.18 */.Z.mobile[18],
                  alt: "app"
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: classes.item,
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: imgAPI/* default.mobile.12 */.Z.mobile[12],
                alt: "app"
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: classes.widget,
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: imgAPI/* default.mobile.19 */.Z.mobile[19],
                  alt: "app"
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: classes.item,
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: imgAPI/* default.mobile.13 */.Z.mobile[13],
                alt: "app"
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: classes.widget,
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: imgAPI/* default.mobile.20 */.Z.mobile[20],
                  alt: "app"
                })
              })]
            })]
          }))
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
      className: classes.decoBottom,
      children: /*#__PURE__*/jsx_runtime_.jsx("use", {
        xlinkHref: "/images/mobile/deco-wave-bottom.svg#main"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.decoBottomMobile
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.pagination,
      children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
        children: [...Array(7)].map((e, index) => /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: index === activeSlide ? classes.active : '',
          children: /*#__PURE__*/jsx_runtime_.jsx("button", {
            type: "button",
            onClick: () => handleDotsNav(index),
            children: "\xA0"
          })
        }, index.toString()))
      })
    })]
  });
}

/* harmony default export */ const Showcase_Showcase = (Showcase);
;// CONCATENATED MODULE: ./components/Showcase/index.js


/***/ }),

/***/ 1912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Testimonials_Testimonials)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: external "react-scroll-animation-wrapper"
var external_react_scroll_animation_wrapper_ = __webpack_require__(5902);
var external_react_scroll_animation_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_react_scroll_animation_wrapper_);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(889);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
;// CONCATENATED MODULE: external "@mui/material/Avatar"
const Avatar_namespaceObject = require("@mui/material/Avatar");
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_namespaceObject);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./public/images/imgAPI.js
var imgAPI = __webpack_require__(4882);
// EXTERNAL MODULE: ./components/Title/index.js + 1 modules
var Title = __webpack_require__(619);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: ./public/images/mobile/deco-light-top.svg
var deco_light_top = __webpack_require__(9805);
var deco_light_top_default = /*#__PURE__*/__webpack_require__.n(deco_light_top);
// EXTERNAL MODULE: ./public/images/mobile/deco-dark-top.svg
var deco_dark_top = __webpack_require__(9942);
var deco_dark_top_default = /*#__PURE__*/__webpack_require__.n(deco_dark_top);
;// CONCATENATED MODULE: ./components/Testimonials/testi-style.js




const testiStyles = (0,mui_.makeStyles)({
  uniqId: 'testi'
})((theme, _params, classes) => ({
  root: {
    background: theme.palette.mode === 'dark' ? (0,styles_.darken)(theme.palette.primary.light, 0.6) : (0,styles_.lighten)(theme.palette.primary.light, 0.8),
    minHeight: 400,
    paddingTop: theme.spacing(20)
  },
  carouselWrap: {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center'
  },
  item: {
    '&:focus': {
      outline: 'none'
    }
  },
  content: {
    fontStyle: 'italic',
    fontSize: 18,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16
    }
  },
  name: {
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
    margin: theme.spacing(2, 0, 4),
    '& strong': {
      fontWeight: theme.typography.fontWeightBold
    }
  },
  carouselText: {
    [`& .${classes.item}`]: {
      position: 'relative'
    }
  },
  carouselAvatar: {
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      width: 768
    },
    [`& .${classes.item}`]: {
      cursor: 'pointer',
      height: 140,
      paddingTop: theme.spacing(2)
    },
    '& div[class*="slick-center"]': {
      [`& .${classes.avatar}`]: {
        opacity: 1,
        transform: 'scale(1.4)'
      }
    }
  },
  avatar: {
    border: '4px solid white',
    width: 80,
    height: 80,
    margin: '0 auto',
    opacity: 0.7,
    transition: 'all 0.3s ease'
  },
  decoBgBottom: {
    background: `url(${theme.palette.mode === 'dark' ? (deco_dark_top_default()) : (deco_light_top_default())}) no-repeat transparent`,
    backgroundSize: '100% auto',
    transform: 'rotate(180deg) scale(1, 0.4)',
    position: 'absolute',
    width: '100%',
    height: 470,
    left: 0,
    bottom: -145,
    '&:after': {
      content: '""',
      background: `url(${theme.palette.mode === 'dark' ? (deco_dark_top_default()) : (deco_light_top_default())}) no-repeat transparent`,
      backgroundSize: '100% auto',
      position: 'absolute',
      width: '100%',
      height: 470,
      opacity: 0.5,
      left: 60,
      top: 60
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const testi_style = (testiStyles);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Testimonials/Testimonials.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const testiContent = [{
  text: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.',
  avatar: imgAPI/* default.avatar.10 */.Z.avatar[10],
  name: 'John Doe',
  title: 'Chief Digital Officer'
}, {
  text: 'Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.',
  avatar: imgAPI/* default.avatar.1 */.Z.avatar[1],
  name: 'Jean Doe',
  title: 'Chief Digital Officer'
}, {
  text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
  avatar: imgAPI/* default.avatar.2 */.Z.avatar[2],
  name: 'Jena Doe',
  title: 'Graphic Designer'
}, {
  text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
  avatar: imgAPI/* default.avatar.3 */.Z.avatar[3],
  name: 'Jovelin Doe',
  title: 'Senior Graphic Designer'
}, {
  text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
  avatar: imgAPI/* default.avatar.4 */.Z.avatar[4],
  name: 'Jihan Doe'
}, {
  text: 'Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.',
  avatar: imgAPI/* default.avatar.6 */.Z.avatar[6],
  name: 'Jovelin Doe',
  title: 'Senior Graphic Designer'
}, {
  text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
  avatar: imgAPI/* default.avatar.7 */.Z.avatar[7],
  name: 'John Doe',
  title: 'Senior Graphic Designer'
}, {
  text: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.',
  avatar: imgAPI/* default.avatar.9 */.Z.avatar[9],
  name: 'John Doe',
  title: 'Chief Digital Officer'
}, {
  text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
  avatar: imgAPI/* default.avatar.8 */.Z.avatar[8],
  name: 'Jean Doe',
  title: 'Chief Digital Officer'
}];

function Testimonials() {
  const {
    classes
  } = testi_style();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const sliderText = (0,external_react_.useRef)(null);
  const sliderAvatar = (0,external_react_.useRef)(null);
  const {
    0: slider,
    1: setSlider
  } = (0,external_react_.useState)({
    nav1: null,
    nav2: null
  });
  (0,external_react_.useEffect)(() => {
    setSlider({
      nav1: sliderText.current,
      nav2: sliderAvatar.current
    });
  }, []);
  const settingsText = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    arrows: false
  };
  const settingsAvatar = {
    dots: false,
    infinite: true,
    speed: 500,
    focusOnSelect: true,
    autoplay: true,
    centerPadding: '2px',
    centerMode: true,
    autoplaySpeed: 5000,
    slidesToShow: 7,
    pauseOnHover: false,
    arrows: false,
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }]
  };
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_animation_wrapper_default()), {
      animateOnce: true,
      animateIn: "fadeInUpShort",
      offset: -50,
      delay: 300,
      duration: 0.5,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx(Title/* default */.Z, {
          align: "center",
          children: t('mobile-landing.testimonial_title')
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.carouselWrap,
      children: /*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_animation_wrapper_default()), {
        animateOnce: true,
        animateIn: "fadeInUpShort",
        offset: -150,
        delay: 400,
        duration: 0.5,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx((Container_default()), {
            maxWidth: "sm",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.carouselText,
              children: /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), _objectSpread(_objectSpread({
                ref: sliderText,
                asNavFor: slider.nav2
              }, settingsText), {}, {
                children: testiContent.map((item, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: classes.item,
                  children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                    className: classes.content,
                    children: item.text
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Typography_default()), {
                    className: classes.name,
                    children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
                      children: item.name
                    }), "\xA0-\xA0", item.title]
                  })]
                }, index.toString()))
              }))
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.carouselAvatar,
            children: /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), _objectSpread(_objectSpread({
              ref: sliderAvatar,
              asNavFor: slider.nav1
            }, settingsAvatar), {}, {
              children: testiContent.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: classes.item,
                children: /*#__PURE__*/jsx_runtime_.jsx((Avatar_default()), {
                  alt: item.name,
                  src: item.avatar,
                  className: classes.avatar
                })
              }, index.toString()))
            }))
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.decoBgBottom
    })]
  });
}

/* harmony default export */ const Testimonials_Testimonials = (Testimonials);
;// CONCATENATED MODULE: ./components/Testimonials/index.js


/***/ }),

/***/ 619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Title)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: ./components/Title/title-style.js
var title_style = __webpack_require__(8460);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Title/Title.js




function Title(props) {
  const {
    classes,
    cx
  } = (0,title_style/* default */.Z)();
  const {
    children,
    align,
    dark
  } = props;

  const setAlign = alignment => {
    switch (alignment) {
      case 'left':
        return classes.left;

      case 'right':
        return classes.right;

      case 'center':
        return classes.center;

      default:
        return classes.left;
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: cx(classes.title, setAlign(align), dark && classes.dark),
    children: /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
      variant: "h3",
      children: children
    })
  });
}
Title.defaultProps = {
  align: 'left',
  dark: false
};
;// CONCATENATED MODULE: ./components/Title/index.js


/***/ }),

/***/ 8460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6508);
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tss_react_mui__WEBPACK_IMPORTED_MODULE_0__);

const titleStyles = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_0__.makeStyles)({
  uniqId: 'title'
})((theme, _params, classes) => ({
  left: {
    textAlign: 'left'
  },
  right: {
    textAlign: 'right'
  },
  center: {
    textAlign: 'center'
  },
  dark: {},
  title: {
    display: 'block',
    position: 'relative',
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 3)
    },
    '& h3': {
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 46,
      textTransform: 'capitalize',
      [theme.breakpoints.down('lg')]: {
        fontSize: 38,
        lineHeight: '50px'
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 32,
        lineHeight: '42px'
      },
      '& span': {
        color: theme.palette.text.secondary
      }
    },
    '&:after': {
      content: '""',
      width: 70,
      height: 12,
      bottom: -32,
      borderRadius: 12,
      backgroundImage: `linear-gradient(-20deg, ${theme.palette.primary.light}, ${theme.palette.secondary.light})`,
      position: 'absolute'
    },
    '& strong': {
      color: theme.palette.text.primary
    },
    [`&.${classes.left}`]: {
      '&:after': {
        left: 0
      }
    },
    [`&.${classes.right}`]: {
      '&:after': {
        right: 0
      }
    },
    [`&.${classes.center}`]: {
      '&:after': {
        left: '50%',
        marginLeft: -35
      }
    },
    [`&.${classes.dark}`]: {
      '& h3': {
        color: theme.palette.common.white
      }
    }
  },
  titleSecondary: {
    display: 'block',
    position: 'relative',
    margin: theme.spacing(4, 0),
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(0, 0, 4)
    },
    '& h4': {
      color: theme.palette.text.primary,
      fontSize: 32,
      fontWeight: theme.typography.fontWeightMedium,
      [theme.breakpoints.down('sm')]: {
        fontSize: 24,
        lineHeight: '36px'
      }
    },
    '&:after': {
      content: '""',
      width: 17,
      height: 17,
      borderRadius: '50%',
      background: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
      position: 'absolute'
    },
    [`&.${classes.left}`]: {
      paddingLeft: theme.spacing(4),
      '&:after': {
        left: 0,
        top: 8
      }
    },
    [`&.${classes.right}`]: {
      paddingRight: theme.spacing(4),
      '&:after': {
        right: 0,
        top: 8
      }
    },
    [`&.${classes.center}`]: {
      marginBottom: theme.spacing(6),
      '&:after': {
        left: '50%',
        marginLeft: -8,
        bottom: -35
      }
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (titleStyles);

/***/ }),

/***/ 9315:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* reexport safe */ _lib_getStatic__WEBPACK_IMPORTED_MODULE_5__.Fe),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9868);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6508);
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tss_react_mui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4960);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_getStatic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1834);
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_text_brand__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3413);
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8817);
/* harmony import */ var _components_Counter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4270);
/* harmony import */ var _components_Feature__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7584);
/* harmony import */ var _components_Showcase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4780);
/* harmony import */ var _components_Testimonials__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1912);
/* harmony import */ var _components_Faq__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7551);
/* harmony import */ var _components_CompanyLogo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(315);
/* harmony import */ var _components_NewsEvent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8351);
/* harmony import */ var _components_Footer_FooterWithDeco__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7156);
/* harmony import */ var _components_PageNav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4316);
/* harmony import */ var _components_Notification__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8647);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Header__WEBPACK_IMPORTED_MODULE_7__, _components_Footer_FooterWithDeco__WEBPACK_IMPORTED_MODULE_16__]);
([_components_Header__WEBPACK_IMPORTED_MODULE_7__, _components_Footer_FooterWithDeco__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




 // Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)


















const sectionMargin = margin => margin * 20;

const useStyles = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_3__.makeStyles)({
  uniqId: 'home'
})(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.background.paper
  },
  spaceBottom: {
    marginBottom: theme.spacing(20),
    [theme.breakpoints.down('lg')]: {
      marginBottom: sectionMargin(6)
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(10)
    }
  },
  spaceTop: {
    marginTop: theme.spacing(20),
    [theme.breakpoints.down('lg')]: {
      marginTop: sectionMargin(6)
    },
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(10)
    }
  },
  spaceBottomShort: {
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down('md')]: {
      marginBottom: sectionMargin(2)
    }
  },
  spaceTopShort: {
    marginTop: theme.spacing(10),
    [theme.breakpoints.down('md')]: {
      marginTop: sectionMargin(2)
    }
  },
  containerWrap: {
    marginTop: -40,
    '& > section': {
      position: 'relative'
    }
  }
}));

function Landing(props) {
  const {
    classes
  } = useStyles();
  const {
    onToggleDark,
    onToggleDir
  } = props;
  const isTablet = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_2___default()(theme => theme.breakpoints.down('lg'));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("title", {
        children: (_public_text_brand__WEBPACK_IMPORTED_MODULE_6___default().mobile.name) + ' - Home Page'
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default()), {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
      className: classes.mainWrap,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        onToggleDark: onToggleDark,
        onToggleDir: onToggleDir
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("main", {
        className: classes.containerWrap,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("section", {
          id: "home",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_Banner__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("section", {
          id: "counter",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_Counter__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("section", {
          id: "feature",
          className: classes.spaceTop,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_Feature__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("section", {
          id: "showcase",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_Showcase__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("section", {
          id: "testimonials",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_Testimonials__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("section", {
          id: "faq",
          className: classes.spaceTopShort,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_Faq__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("section", {
          className: classes.spaceTopShort,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_CompanyLogo__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("section", {
          id: "news",
          className: classes.spaceTopShort,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_NewsEvent__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {})
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_Footer_FooterWithDeco__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
        toggleDir: onToggleDir
      }), !isTablet && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_PageNav__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_Notification__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {})]
      })]
    })]
  });
}

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });
// Use this below for Static Site Generation (SSG)
const getStaticProps = (0,_lib_getStatic__WEBPACK_IMPORTED_MODULE_5__/* .makeStaticProps */ .pc)(['common']);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Landing);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4882:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const imgAPI = {
  avatar: ['/images/avatars/pp_girl.svg', '/images/avatars/pp_girl2.svg', '/images/avatars/pp_girl3.svg', '/images/avatars/pp_girl4.svg', '/images/avatars/pp_girl5.svg', '/images/avatars/pp_girl.svg', '/images/avatars/pp_boy.svg', '/images/avatars/pp_boy2.svg', '/images/avatars/pp_boy3.svg', '/images/avatars/pp_boy4.svg', '/images/avatars/pp_boy5.svg'],
  photo: ['https://via.placeholder.com/675x900/e1ad92/ffffff', 'https://via.placeholder.com/967x725/ea6d6d/ffffff', 'https://via.placeholder.com/1280x849/ea6db7/ffffff', 'https://via.placeholder.com/967x725/bb6dea/ffffff', 'https://via.placeholder.com/1048x701/6d6fea/ffffff', 'https://via.placeholder.com/1050x700/6dc0ea/ffffff', 'https://via.placeholder.com/970x725/6deaa6/ffffff', 'https://via.placeholder.com/1051x700/b8de27/ffffff', 'https://via.placeholder.com/1051x701/de9f27/ffffff', 'https://via.placeholder.com/1050x700/ef4545/ffffff', 'https://via.placeholder.com/1050x700/ffc4c4/757575', 'https://via.placeholder.com/640x447/fdffc4/757575', 'https://via.placeholder.com/1280x851/c4ffd7/757575', 'https://via.placeholder.com/640x425/c4cdff/757575'],
  mobile: ['/images/mobile/mobile_banner.png', '/images/mobile/widget-top.png', '/images/mobile/widget-left.png', '/images/mobile/widget-right.png', '/images/mobile/mobile_feature.png', '/images/mobile/mobile_feature2.png', 'https://via.placeholder.com/536x302/fbd2ff/757575', 'https://via.placeholder.com/518x1120/fbd2ff/757575', 'https://via.placeholder.com/518x1120/d2ffff/757575', 'https://via.placeholder.com/518x1120/fbd2ff/757575', 'https://via.placeholder.com/518x1120/d2ffff/757575', 'https://via.placeholder.com/518x1120/fbd2ff/757575', 'https://via.placeholder.com/518x1120/d2ffff/757575', 'https://via.placeholder.com/518x1120/fbd2ff/757575', '/images/mobile/widget_screen1.png', '/images/mobile/widget_screen2.png', '/images/mobile/widget_screen3.png', '/images/mobile/widget_screen4.png', '/images/mobile/widget_screen5.png', '/images/mobile/widget_screen6.png', '/images/mobile/widget_screen7.png', '']
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (imgAPI);

/***/ }),

/***/ 4618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XK": () => (/* binding */ useText)
/* harmony export */ });
/* unused harmony exports useTextAlign, useFloat, useHidden */
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6508);
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tss_react_mui__WEBPACK_IMPORTED_MODULE_0__);
 // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

const useTextAlign = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_0__.makeStyles)({
  uniqId: 'textalign'
})({
  textCenter: {
    textAlign: 'center'
  },
  textLeft: {
    textAlign: 'left'
  },
  textRight: {
    textAlign: 'right'
  }
}); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

const useFloat = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_0__.makeStyles)({
  uniqId: 'float'
})({
  floatLeft: {
    float: 'left'
  },
  floatRight: {
    float: 'right'
  }
}); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

const useText = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_0__.makeStyles)({
  uniqId: 'text'
})(theme => ({
  title: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 48,
    lineHeight: '72px',
    [theme.breakpoints.down('lg')]: {
      fontSize: 38,
      lineHeight: '60px'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 28,
      lineHeight: '44px'
    }
  },
  title2: {
    fontSize: 36,
    lineHeight: '56px',
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down('lg')]: {
      fontSize: 32,
      lineHeight: '48px'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
      lineHeight: '36px'
    }
  },
  subtitle: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: 28,
    lineHeight: '44px',
    [theme.breakpoints.down('lg')]: {
      fontSize: 24,
      lineHeight: '36px'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
      lineHeight: '28px'
    }
  },
  subtitle2: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 22,
    lineHeight: '32px',
    [theme.breakpoints.down('lg')]: {
      fontSize: 20,
      lineHeight: '32px'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
      lineHeight: '24px'
    }
  },
  paragraph: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 16,
    lineHeight: '24px'
  },
  caption: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 16,
    lineHeight: '24px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
      lineHeight: '22px'
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

const useHidden = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_0__.makeStyles)({
  uniqId: 'hidden'
})(theme => ({
  lgDown: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  mdDown: {
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  },
  smDown: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  xsDown: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  lgUp: {
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    }
  },
  mdUp: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  smUp: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }
}));

/***/ }),

/***/ 434:
/***/ ((module) => {

module.exports = {
  use: true
};

/***/ }),

/***/ 9942:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMjgwIDQ3MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTI4MCA0NzA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMzAzMDMwO30KPC9zdHlsZT4KPHRpdGxlPkNvbWJpbmVkIFNoYXBlPC90aXRsZT4KPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CjxnIGlkPSJQYWdlLTEiPgoJPHBhdGggaWQ9IkNvbWJpbmVkLVNoYXBlIiBjbGFzcz0ic3QwIiBkPSJNMTI4MCwyMzIuMWMtMzAuOC03NC45LTkzLjEtMTM3LjgtMTg2LjgtMTg4LjhDODcyLjQtNzYuOSw1NDcuMyw0NjkuNCwzNTYuMiw0NjkuNAoJCUMyMjguNyw0NjkuNCwxMTAsMzk5LjksMCwyNjFWMGgxMjgwVjIzMi4xeiIvPgo8L2c+Cjwvc3ZnPgo="

/***/ }),

/***/ 9805:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTI4MHB4IiBoZWlnaHQ9IjQ3MHB4IiB2aWV3Qm94PSIwIDAgMTI4MCA0NzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5Db21iaW5lZCBTaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik0xMjgwLDIzMi4wNjI5MSBDMTI0OS4xOTU4MSwxNTcuMjA3NDM5IDExODYuOTM4NDMsOTQuMjc5Mjc3OSAxMDkzLjIyNzg4LDQzLjI3ODQyNTcgQzg3Mi4zNzYwMzcsLTc2LjkxNzU1OTggNTQ3LjI4OTMyOCw0NjkuMzY3NjgxIDM1Ni4xNTQ1NTMsNDY5LjM2NzY4MSBDMjI4LjczMTM2OSw0NjkuMzY3NjgxIDExMC4wMTMxODUsMzk5LjkxMTc4NyAtMy4wODU5ODA4N2UtMTQsMjYxIEwwLDAgTDEyODAsMCBMMTI4MCwyMzIuMDYyOTEgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),

/***/ 9089:
/***/ ((module) => {

module.exports = "/_next/static/images/faq-fb207efda1e8610249917249af14d84a.png";

/***/ }),

/***/ 6959:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Check");

/***/ }),

/***/ 8148:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/ExpandMore");

/***/ }),

/***/ 5418:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Language");

/***/ }),

/***/ 32:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Settings");

/***/ }),

/***/ 9409:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Accordion");

/***/ }),

/***/ 8279:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/AccordionDetails");

/***/ }),

/***/ 4604:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/AccordionSummary");

/***/ }),

/***/ 3882:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ 3819:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Button");

/***/ }),

/***/ 889:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Container");

/***/ }),

/***/ 4960:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ 3646:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Divider");

/***/ }),

/***/ 5612:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Grid");

/***/ }),

/***/ 7934:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 3103:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/InputAdornment");

/***/ }),

/***/ 5246:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Link");

/***/ }),

/***/ 4192:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/List");

/***/ }),

/***/ 834:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItem");

/***/ }),

/***/ 3787:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItemIcon");

/***/ }),

/***/ 1211:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItemSecondaryAction");

/***/ }),

/***/ 8315:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItemText");

/***/ }),

/***/ 9685:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListSubheader");

/***/ }),

/***/ 9271:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ 7730:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/OutlinedInput");

/***/ }),

/***/ 1168:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Paper");

/***/ }),

/***/ 5768:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Popover");

/***/ }),

/***/ 2651:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Select");

/***/ }),

/***/ 6080:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Slide");

/***/ }),

/***/ 9174:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Snackbar");

/***/ }),

/***/ 9829:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/SnackbarContent");

/***/ }),

/***/ 4180:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/SwipeableDrawer");

/***/ }),

/***/ 3191:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Switch");

/***/ }),

/***/ 7163:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 8442:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ 9868:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/useMediaQuery");

/***/ }),

/***/ 1377:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 2217:
/***/ ((module) => {

"use strict";
module.exports = require("react-anchor-link-smooth-scroll");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 5902:
/***/ ((module) => {

"use strict";
module.exports = require("react-scroll-animation-wrapper");

/***/ }),

/***/ 7446:
/***/ ((module) => {

"use strict";
module.exports = require("react-scroll-parallax");

/***/ }),

/***/ 6578:
/***/ ((module) => {

"use strict";
module.exports = require("react-scrollspy");

/***/ }),

/***/ 8096:
/***/ ((module) => {

"use strict";
module.exports = require("react-slick");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6508:
/***/ ((module) => {

"use strict";
module.exports = require("tss-react/mui");

/***/ }),

/***/ 3707:
/***/ ((module) => {

"use strict";
module.exports = import("next-language-detector");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,932,676,63,449,567,848,647], () => (__webpack_exec__(9315)));
module.exports = __webpack_exports__;

})();