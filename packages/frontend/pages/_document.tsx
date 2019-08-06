import Document, {
  DocumentContext,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const resetStyles = `
  html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline dotted}b,strong{font-weight:bolder}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,canvas,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{color:inherit;display:table;max-width:100%;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio],legend{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}[hidden],template{display:none}

  html {
    font-size: 14px;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
  }
`;

// @ts-ignore
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    // inject env variables starting with REACT_APP_
    const env = {};
    for (const key in process.env) {
      if (key.startsWith('REACT_APP_')) {
        env[key] = process.env[key];
      }
    }

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        env,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    // @ts-ignore
    const { env } = this.props;

    const injectEnv = () => {
      const envObject = 'window.env = {};';
      const ret = Object.keys(env).reduce((prevValue, currentValue) => {
        return (
          prevValue + `window.env.${currentValue} = '${env[currentValue]}';`
        );
      }, '');
      return envObject + ret;
    };
    return (
      <html>
        <script dangerouslySetInnerHTML={{ __html: injectEnv() }} />
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta
            name="viewport"
            content="width=280, initial-scale=1, maximum-scale=1.0, user-scalable=no"
          />
          <style dangerouslySetInnerHTML={{ __html: resetStyles }} />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400&amp;subset=cyrillic"
            rel="stylesheet"
          />
          {/* TODO: inline it */}
          {/* 
          // @ts-ignore */}
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
