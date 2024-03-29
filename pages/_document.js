import React from "react";
import Document, { Html, Main, NextScript } from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import { getInitColorSchemeScript } from "@mui/material/styles";
import createEmotionCache from "../theme/createEmotionCache";
import HeadComponent from "../components/head";
import i18nextConfig from "../next-i18next.config";

class MyDocument extends Document {
  render() {
    const currentLocale =
      this.props.__NEXT_DATA__.query.locale || i18nextConfig.i18n.defaultLocale;
    return (
      <Html lang={currentLocale} dir={currentLocale === "ar" ? "rtl" : "ltr"}>
        <HeadComponent />
        <body>
          <div
            id="preloader"
            style={{
              position: "fixed",
              zIndex: 2001,
              background: "#fafafa",
              width: "100%",
              height: "100%",
            }}
          >
            <img
              style={{
                opacity: 0.5,
                position: "fixed",
                top: "calc(50% - 50px)",
                left: "calc(50% - 50px)",
              }}
              src="/images/loading.gif"
              alt="loading"
            />
          </div>
          {getInitColorSchemeScript()}
          <Main />
          <NextScript />

          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
                (function(d) {
                  var v = d.createElement('script'), s = d.getElementsByTagName('script')[0];
                  v.onload = function() {
                      const path = window.location.pathname;
                      let clientId = path.split('/')[2];
                      console.log("Original clientId:", clientId); // Log the original clientId
                      const toTitleCase = (str) => {
                        return str
                          .toLowerCase() 
                          .replace(/-/g, ' ') 
                          .split(' ') 
                          .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
                          .join(' ');
                      };

                      // Only convert clientId to Title Case if it's not empty or undefined.
                      let clientIdLabel = clientId ? toTitleCase(clientId) : "";

                      if (window.myChatbot) {
                          const chatbotTitle = clientIdLabel ? clientIdLabel + " Mixer AI": "Tremendo Party";
                          const chatbotLogo = "https://d204nmcbcidqyp.cloudfront.net/tremendo-party-logo.png";
                          const subTitle = clientIdLabel + " Your AI mixer assistant!";
                          window.myChatbot.init({chatbotTitle, subTitle, chatbotLogo, clientId });
                      }
                  };
                  v.src = "https://d204nmcbcidqyp.cloudfront.net/bundle.js";
                  v.type = "text/javascript";
                  v.defer = true;
                  s.parentNode.insertBefore(v, s);
                })(document);
              `,
            }}
          />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () => originalRenderPage({
      enhanceApp: (App) => function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
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
    namespacesRequired: ["common", "mobile-landing"],
  };
};

export default MyDocument;