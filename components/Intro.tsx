import type { NextComponentType } from 'next'

const Intro: NextComponentType = () => {
	return (
		<section className="w-fit mb-16">
			<div className="flex flex-col items-center mb-7">
				<h1 className="font-bold text-6xl">Soundar Murugan</h1>
				<h3 className="font-semibold text-bg tracking-wide">
					Fullstack Developer at NCR Corporation
				</h3>
			</div>
			<p className="text-neutral-500 text-sm font-normal tracking-wide flex-wrap my-3 leading-7">
				I build open-source front-end libraries at Algolia and host two
				tech podcasts: <br />
				Developer Experience and Entre Devs.
			</p>
			<p className="text-neutral-500 text-sm font-normal tracking-wide flex-wrap my-3 leading-7">
				On my spare time, I share what I learn on my blog and speak at
				tech <br /> conferences around the world.
			</p>
			<nav>
				<ul className="uppercase text-xs font-semibold tracking-widest mt-20 space-y-8 w-fit">
					<li className="cursor-pointer flex items-center text-neutral-500 hover:text-white hover:font-bold group transition-all duration-300 ease-in-out tracking-widest">
						01{' '}
						<span className="inline-block bg-neutral-500 group-hover:bg-white w-8 h-px mx-5 group-hover:w-14 transition-all duration-300 ease-in-out" />{' '}
						Projects
					</li>
					<li className="cursor-pointer flex items-center text-neutral-500 hover:text-white hover:font-bold group transition-all duration-300 ease-in-out tracking-widest">
						02{' '}
						<span className="inline-block bg-neutral-500 group-hover:bg-white w-8 h-px mx-5 group-hover:w-14 transition-all duration-300 ease-in-out" />{' '}
						Talks
					</li>
					<li className="cursor-pointer flex items-center text-neutral-500 hover:text-white hover:font-bold group transition-all duration-300 ease-in-out tracking-widest">
						03{' '}
						<span className="inline-block bg-neutral-500 group-hover:bg-white w-8 h-px mx-5 group-hover:w-14 transition-all duration-300 ease-in-out" />{' '}
						Interviews
					</li>
				</ul>
			</nav>
		</section>
	)
}

export default Intro
