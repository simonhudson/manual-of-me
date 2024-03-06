import { GlobalStyles } from '@/src/theme/global.styles';
import { theme } from '@/src/theme';
import { ThemeProvider } from 'styled-components';
import { Wrap } from '@/src/theme/layout';
import Head from 'next/head';
import type { BaseObject } from '@/src/types/base';
import type { FunctionComponent } from 'react';

type AppProps = {
	Component: FunctionComponent;
	pageProps: BaseObject;
};

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<title></title>
			</Head>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Wrap>
					<main>
						<Component {...pageProps} />
					</main>
				</Wrap>
			</ThemeProvider>
		</>
	);
};

export default App;
