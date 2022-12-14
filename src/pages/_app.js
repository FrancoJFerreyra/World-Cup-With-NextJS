import { SSRProvider } from 'react-bootstrap';
import Script from 'next/script';
import '../../font/stylesheet.css';
import 'styles/index.scss';
import { motion, AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
	return (
		<AnimatePresence key={router.pathname} mode={'wait'}>
			<SSRProvider>
				<Component {...pageProps} />
				<Script src='https://kit.fontawesome.com/4e0ece56a4.js' crossorigin='anonymous'></Script>
			</SSRProvider>
		</AnimatePresence>
	);
}

export default MyApp;
