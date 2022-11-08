/* eslint-disable @next/next/no-head-element */

import NextThemeProvider from './theme-provider'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html>
			<head></head>
			<body className='font-clubhouse dark:bg-dark-bg text-clubhouse-text-color dark:text-dark-text'>
				<NextThemeProvider>{children}</NextThemeProvider>
			</body>
		</html>
	)
}
