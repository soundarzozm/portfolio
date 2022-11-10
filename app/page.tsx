import '../styles/globals.css'
import Header from './Header'
import ThemeToggle from './ThemeToggle'
import Footer from './Footer'
import Background from './Background'
import Skills from './Skills'
import Experience from './Experience'
import Projects from './Projects'
import ScrollToTop from './ScrollToTop'

export default function HomePage() {
	return (
		<>
			<ThemeToggle />
			<Header />
			<div className='px-10 md:px-20'>
				<Background />
				<Skills />
				<Experience />
				<Projects />
			</div>
			<Footer />
			<ScrollToTop />
		</>
	)
}
