import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global.styles';
import { lightTheme } from '../styles/theme';

import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles>
        <Component {...pageProps} />;
      </GlobalStyles>
    </ThemeProvider>
  );
}

export default MyApp;
