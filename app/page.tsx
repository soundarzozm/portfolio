import '../styles/globals.css'
import Header from './Header'
import ThemeToggle from './ThemeToggle'
import Footer from './Footer'
import Background from './Background'
import Skills from './Skills'
import Experience from './Experience'
import Projects from './Projects'

export default function HomePage() {
	return (
		<>
			<ThemeToggle />
			<Header />
			<Background />
			<Skills />
			<Experience />
			<Projects />
			<Footer />
		</>
	)
}
