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
					rel='icon'
					type='image/x-icon'
					href='./../public/favicon.ico'
				/>
				<title>Soundar Murugan</title>
			</head>
			<body className='font-clubhouse dark:bg-dark-bg text-clubhouse-text-color dark:text-dark-text'>
				<NextThemeProvider>{children}</NextThemeProvider>
			</body>
		</html>
	)
}
