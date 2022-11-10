'use client'

import { ThemeProvider } from 'next-themes'

export default function NextThemeProvider({ children }: any) {
	return <ThemeProvider attribute='class'>{children}</ThemeProvider>
}
