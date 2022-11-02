import { AppProps } from 'next/app';

import '../styles/globals.css';

export default function ({ Component, pageProps }: AppProps) {
	(
		<Component {...pageProps} />
	)
}
