import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head>
				<title>Soundar Murugan</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
			</Head>
			<body className="bg-night text-white">
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
