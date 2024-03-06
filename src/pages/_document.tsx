import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class Layout extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
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
		return (
			<Html lang="en">
				<Head>
					<meta name="description" content="" />
					<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
					<link
						href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;700&amp;family=Open+Sans:wght@400;500;700&amp;family=Poppins:wght@400;700&amp;display=swap"
						rel="stylesheet"
					/>
					<script async src="https://kit.fontawesome.com/6331124e0b.js" crossOrigin="anonymous"></script>
				</Head>
				<body id="top">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default Layout;
