import { SSRProvider } from 'react-bootstrap';
import '../../font/stylesheet.css';
import 'styles/index.scss';
import { motion, AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence key={router.pathname} mode={'wait'}>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </AnimatePresence>
  );
}

export default MyApp;
