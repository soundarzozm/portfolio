/* eslint-disable @next/next/no-head-element */

import NextThemeProvider from './theme-provider'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<head>
				<meta charSet='UTF-8' />
				<meta
					httpEquiv='X-UA-Compatible'
					content='IE=edge'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<meta
					name='author'
					content='Soundar Murugan'
				/>

				<link
					rel='apple-touch-icon'
					sizes='57x57'
					href='/apple-icon-57x57.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='60x60'
					href='/apple-icon-60x60.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='72x72'
					href='/apple-icon-72x72.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='76x76'
					href='/apple-icon-76x76.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='114x114'
					href='/apple-icon-114x114.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='120x120'
					href='/apple-icon-120x120.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='144x144'
					href='/apple-icon-144x144.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='152x152'
					href='/apple-icon-152x152.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/apple-icon-180x180.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='192x192'
					href='/android-icon-192x192.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='96x96'
					href='/favicon-96x96.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon-16x16.png'
				/>
				<link
					rel='manifest'
					href='/manifest.json'
				/>
				<meta
					name='msapplication-TileColor'
					content='#ffffff'
				/>
				<meta
					name='msapplication-TileImage'
					content='/ms-icon-144x144.png'
				/>
				<meta
					name='theme-color'
					content='#ffffff'
				/>

				<title>Soundar Murugan | Front End Software Developer</title>
				<meta
					name='description'
					content='Soundar Murugan | Front End Software Developer Official Portfolio Website.'
				/>
				<meta
					property='og:title'
					content='Soundar Murugan | Front End Software Developer'
				/>
				<meta
					property='og:description'
					content='Soundar Murugan | Front End Software Developer Official Portfolio Website.'
				/>
				<meta
					property='og:url'
					content='https://soundarmurugan.com/'
				/>
				<meta
					property='og:type'
					content='website'
				/>
				<meta
					name='robots'
					content='all'
				/>
			</head>
			<body className='font-clubhouse dark:bg-dark-bg text-clubhouse-text-color dark:text-dark-text'>
				<NextThemeProvider>{children}</NextThemeProvider>
			</body>
		</html>
	)
}
