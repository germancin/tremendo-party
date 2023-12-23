import React, { Fragment, useEffect, useRef } from 'react';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import imgAPI from '~/public/images/imgAPI';
import { useText } from '~/theme/common';
import particleSpray from './particle-spray';
import useStyles from './banner-style';

function Banner() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation('common');

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const elem = useRef(null);

  useEffect(() => {
    particleSpray();
  }, []);

  return (
    <div className={classes.root} ref={elem}>
      <div className={classes.background}>
        <div className={classes.gradient}>
          <div className={classes.decoWave} />
          {!isMobile && (
            <div className={classes.decoLine} />
          )}
          <div className={classes.decoInner}>
            <canvas id="particle_art_mobile" width="500px" height="700px" />
          </div>
        </div>
      </div>
      <Container fixed={isDesktop}>
        <Grid container>
          <Grid item md={7} xs={12}>
            <div className={classes.text}>
              <Typography variant="h3" className={text.title}>
                {t('mobile-landing.banner_title')}
                &nbsp;
                <strong>
                  {t('mobile-landing.banner_titlestrong')}
                </strong>
              </Typography>
              <Typography variant="h5" className={text.subtitle}>
                {t('mobile-landing.banner_desc')}
              </Typography>
              <div className={classes.btnArea}>
                <Link href="/">
                  <img src="/images/mobile/app-store.png" alt="app store" />
                </Link>
                <Link href="/">
                  <img src="/images/mobile/play-store.png" alt="play store" />
                </Link>
              </div>
            </div>
          </Grid>
          <Grid item md={5} xs={12}>
            <div className={classes.decoration}>
              <div className={classes.phoneIllustration}>
                <img src={imgAPI.mobile[0]} className={classes.phone} alt="illustration" />
                {!isTablet && (
                  <Fragment>
                    <img src={imgAPI.mobile[1]} className={cx(classes.widgetTop, 'fragment-fadeUp')} alt="illustration" />
                    <img src={imgAPI.mobile[2]} className={cx(classes.widgetLeft, 'fragment-fadeUp')} alt="illustration" />
                    <img src={imgAPI.mobile[3]} className={cx(classes.widgetRight, 'fragment-fadeUp')} alt="illustration" />
                  </Fragment>
                )}
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Banner;
