import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from 'tss-react/mui';
import CssBaseline from '@mui/material/CssBaseline';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import brand from '~/public/text/brand';
import Header from '~/components/Header';
import Banner from '~/components/Banner';
import Counter from '~/components/Counter';
import Feature from '~/components/Feature';
import Showcase from '~/components/Showcase';
import Testimonials from '~/components/Testimonials';
import Faq from '~/components/Faq';
import CompanyLogo from '~/components/CompanyLogo';
import NewsEvent from '~/components/NewsEvent';
import FooterWithDeco from '~/components/Footer/FooterWithDeco';
import PageNav from '~/components/PageNav';
import Notification from '~/components/Notification';

const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles({ uniqId: 'home' })(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
  spaceBottom: {
    marginBottom: theme.spacing(20),
    [theme.breakpoints.down('lg')]: {
      marginBottom: sectionMargin(6),
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(10),
    }
  },
  spaceTop: {
    marginTop: theme.spacing(20),
    [theme.breakpoints.down('lg')]: {
      marginTop: sectionMargin(6),
    },
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(10),
    }
  },
  spaceBottomShort: {
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down('md')]: {
      marginBottom: sectionMargin(2),
    }
  },
  spaceTopShort: {
    marginTop: theme.spacing(10),
    [theme.breakpoints.down('md')]: {
      marginTop: sectionMargin(2),
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
  const { classes } = useStyles();
  const { onToggleDark, onToggleDir } = props;
  const isTablet = useMediaQuery(theme => theme.breakpoints.down('lg'));

  return (
    <Fragment>
      <Head>
        <title>
          { brand.mobile.name + ' - Home Page' }
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <main className={classes.containerWrap}>
          <section id="home">
            <Banner />
          </section>
          <section id="counter">
            <Counter />
          </section>
          <section id="feature" className={classes.spaceTop}>
            <Feature />
          </section>
          <section id="showcase">
            <Showcase />
          </section>
          <section id="testimonials">
            <Testimonials />
          </section>
          <section id="faq" className={classes.spaceTopShort}>
            <Faq />
          </section>
          <section className={classes.spaceTopShort}>
            <CompanyLogo />
          </section>
          <section id="news" className={classes.spaceTopShort}>
            <NewsEvent />
          </section>
        </main>
        <FooterWithDeco toggleDir={onToggleDir} />
        {!isTablet && (
          <Fragment>
            <PageNav />
            <Notification />
          </Fragment>
        )}
      </div>
    </Fragment>
  );
}

Landing.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Landing;
