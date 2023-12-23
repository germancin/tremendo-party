import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import useStyles from './parallax-style';

export default function ParallaxLarge() {
  const { classes, cx } = useStyles();
  return (
    <div className={classes.parallaxWrap}>
      <ParallaxProvider>
        <div className={cx(classes.innerParallax, classes.small)}>
          <Parallax
            translateY={[10, 50]}
            className="figure"
          >
            <svg className={classes.triangle}>
              <use xlinkHref="/images/mobile/triangle.svg#main" />
            </svg>
          </Parallax>
          <Parallax
            translateY={[0, 60]}
            className="figure"
          >
            <svg className={classes.circle}>
              <use xlinkHref="/images/mobile/circle.svg#main" />
            </svg>
          </Parallax>
          <Parallax
            translateY={[-20, 20]}
            className="figure"
          >
            <div className={classes.squareDot}>
              <svg className={classes.dotMany}>
                <use xlinkHref="/images/mobile/dot-many.svg#main" />
              </svg>
            </div>
          </Parallax>
        </div>
      </ParallaxProvider>
    </div>
  );
}
