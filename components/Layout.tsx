import type { NextComponentType } from 'next'
import Intro from './Intro'
import Footer from './Footer'
import Body from './Body'

const Layout: NextComponentType = () => {
	return (
		<div className="flex flex-row justify-end">
			<div className="fixed left-40 top-0 h-screen">
				<div className="flex flex-col justify-between h-full p-20 w-fit">
					<Intro />
					<Footer />
				</div>
			</div>
			<Body />
		</div>
	)
}

export default Layout
