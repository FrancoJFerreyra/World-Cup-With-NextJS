import { SSRProvider } from 'react-bootstrap';
import 'styles/index.scss';

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default MyApp;
