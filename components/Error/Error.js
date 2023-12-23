import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import linkRouter from '~/public/text/link';
import useStyles from './error-style';

function Error(props) {
  const { classes } = useStyles();
  const { errCode, text } = props;
  const { t, i18n } = useTranslation('common');
  const curLang = '/' + i18n.language;
  const theme = useTheme();
  
  return (
    <div className={classes.errorWrap}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item sm={5} xs={12}>
            <div className={classes.flex}>
              <div className={classes.deco}>
                <div className={classes.artwork}>
                  <svg width="218px" height="220px" viewBox="0 0 218 220" version="1.1">
                    <defs>
                      <linearGradient x1="133.772602%" y1="-75.1506777%" x2="21.5997463%" y2="63.260628%" id="linearGradient-1">
                        <stop stopColor={theme.palette.secondary.main} offset="0%" />
                        <stop stopColor={theme.palette.primary.main} offset="100%" />
                      </linearGradient>
                    </defs>
                    <g id="Page-1" stroke="none" strokeWidth="0" fill="none">
                      <path d="M176.484827,177.458465 C132.792561,207.953068 56.006152,234.998281 25.7115142,210.452625 C-15.7311505,176.958554 -0.783796157,131.166659 26.4613814,56.0799491 C46.757789,0.239832833 59.6555061,-25.9055394 163.187181,34.8837009 C235.62436,77.3761797 231.125156,139.365208 176.484827,177.458465 Z" id="Path" fill="url(#linearGradient-1)" fillRule="nonzero" />
                    </g>
                  </svg>
                </div>
                <Typography variant="h3">
                  {errCode}
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item sm={7} xs={12}>
            <div className={classes.text}>
              <Typography variant="h4">{text}</Typography>
              <Typography>
                {t('404_subtitle')}
              </Typography>
              <Button variant="contained" color="secondary" href={curLang + linkRouter.mobile.home} className={classes.button}>
                {t('back')}
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Error.propTypes = {
  errCode: PropTypes.string,
  text: PropTypes.string,
};

Error.defaultProps = {
  errCode: '404',
  text: '',
};

export default Error;
