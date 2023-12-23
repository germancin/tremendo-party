import { makeStyles } from 'tss-react/mui';
import { alpha, lighten, darken } from '@mui/material/styles';
import decoWave from '~/public/images/mobile/deco-wave-footer.png';

const footerStyles = makeStyles({ uniqId: 'footer' })((theme, _params, classes) => ({
  link: {
    margin: theme.spacing(1, 1.5),
  },
  invert: {},
  decoTop: {
    fill: theme.palette.mode === 'dark' ? darken(theme.palette.primary.light, 0.65) : lighten(theme.palette.primary.light, 0.8),
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
    },
  },
  footer: {
    position: 'relative',
    marginTop: theme.spacing(8),
    paddingBottom: theme.spacing(12),
    [theme.breakpoints.up('xs')]: {
      paddingTop: theme.spacing(3),
    },
    [`& .${classes.accordionRoot}`]: {
      margin: '0 auto',
      marginTop: theme.spacing(2),
    },
    '& p': {
      color: theme.palette.common.white,
      [theme.breakpoints.down('md')]: {
        marginBottom: theme.spacing(4)
      }
    },
    '& ul': {
      margin: 0,
      padding: 0,
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
          color: theme.palette.text.primary,
        },
      }
    }
  },
  title: {
    color: theme.palette.common.white,
    fontSize: 14,
    textTransform: 'uppercase',
    marginBottom: theme.spacing(3),
    fontWeight: theme.typography.fontWeightBold,
  },
  logo: {
    textAlign: 'center',
    marginBottom: theme.spacing(3),
    '& img': {
      width: 64,
      marginRight: theme.spacing(),
    },
    '& h6': {
      color: theme.palette.common.white,
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
        color: theme.palette.common.white,
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
        width: 'calc(100% - 32px)',
      }
    },
    '& svg': {
      color: theme.palette.primary.light,
    },
    '& fieldset': {
      boxShadow: '0 1.5px 12px 2px rgba(0, 0, 0, 0.06)',
      border: `1px solid ${alpha(theme.palette.primary.light, 0.5)} !important`,
      '& legend': {
        top: 6,
        position: 'relative',
        borderTop: `1px solid ${alpha(theme.palette.primary.light, 0.5)}`
      },
    }
  },
  siteMapItem: {
    [theme.breakpoints.down('lg')]: {
      paddingBottom: '0 !important',
      paddingTop: '0 !important',
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
        fill: theme.palette.text.primary,
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
      paddingTop: theme.spacing(30),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(10, 3, 0),
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
      background: `url(${decoWave}) no-repeat transparent`,
      backgroundSize: '100%',
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
      top: 0,
    }
  },
  leftDeco: {
    left: 0,
    width: 1200,
    height: 1500,
    transform: 'scale(0.5)',
    transformOrigin: 'top left',
  },
  rightDeco: {
    right: -450,
    width: 1200,
    height: 1500,
    transform: 'scale(0.5)',
    transformOrigin: 'top right',
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
        marginRight: theme.spacing(2),
      },
      [theme.breakpoints.down('sm')]: {
        margin: 4
      },
      '& img': {
        width: 160,
        [theme.breakpoints.down('sm')]: {
          width: '100%',
        },
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default footerStyles;
