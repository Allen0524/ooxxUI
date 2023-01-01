import {AppProps} from 'next/app';
import {Layout} from '@components/Layout';

import '../globals.css';

export default function MyApp({Component, pageProps}: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
