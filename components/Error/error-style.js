import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'error' })(theme => ({
  errorWrap: {
    width: '100%',
    minHeight: 640,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(-15),
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
      zIndex: 1,
    }
  },
  text: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(5),
      borderLeft: `1px solid ${theme.palette.divider}`,
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(4)
    },
  },
  button: {
    marginTop: theme.spacing(4)
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
