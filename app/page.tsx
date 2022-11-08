import '../styles/globals.css'
import Header from './Header'
import ThemeToggle from './ThemeToggle'
import Footer from './Footer'

export default function HomePage() {
	return (
		<>
			<ThemeToggle />
			<Header />
			<Footer />
		</>
	)
}
