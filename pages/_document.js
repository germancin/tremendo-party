import React from 'react';
import Document, { Html, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import { getInitColorSchemeScript } from '@mui/material/styles';
import createEmotionCache from '../theme/createEmotionCache';
import HeadComponent from '../components/head';
import i18nextConfig from '../next-i18next.config';

class MyDocument extends Document {
  render() {
	const currentLocale = this.props.__NEXT_DATA__.query.locale || i18nextConfig.i18n.defaultLocale;
	return (
	  <Html lang={currentLocale} dir={currentLocale === 'ar' ? 'rtl' : 'ltr'}>
		<HeadComponent />
		<body>
		  <div id="preloader"
			style={{
				position: 'fixed',
				zIndex: 2001,
				background: '#fafafa',
				width: '100%',
				height: '100%',
			}}
		  >
			<img style={{
				opacity: 0.5,
				position: 'fixed',
				top: 'calc(50% - 50px)',
				left: 'calc(50% - 50px)'
			  }}
			  src="/images/loading.gif"
			  alt="loading"
			/>
		  </div>
		  {getInitColorSchemeScript()}
		  <Main />
		  <NextScript />

		  <script type="text/javascript">
			(function(d, t) {
				let v = d.createElement(t), s = d.getElementsByTagName(t)[0];
				v.onload = function() {
					window.voiceflow.chat.load({
					verify: { projectID: '65872f550f169661f947f14b' },
					url: 'https://general-runtime.voiceflow.com',
					versionID: 'production'
					})}
				v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
				})(document, 'script');
			</script>
		</body>
	  </Html>
	);
  }
}

MyDocument.getInitialProps = async ctx => {
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
	originalRenderPage({ enhanceApp: (App) => (function EnhanceApp(props) { // eslint-disable-line
	  return <App emotionCache={cache} {...props} />;
	}),
  });

  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
	<style
	  data-emotion={`${style.key} ${style.ids.join(' ')}`}
	  key={style.key}
	  // eslint-disable-next-line react/no-danger
	  dangerouslySetInnerHTML={{ __html: style.css }}
	/>
  ));

  return {
	...initialProps,
	emotionStyleTags,
	namespacesRequired: ['common', 'mobile-landing'],
  };
};

export default MyDocument;
