import type { NextComponentType } from 'next'

const ProjectCard: NextComponentType = () => {
	return (
		<div className="bg-dusk p-10 w-auto m-2 space-y-2 max-w-2xl hover:scale-110 duration-300 ease-in-out">
			<h3 className="font-bold text-xs tracking-widest">TYPESCRIPT</h3>
			<h2 className="font-bold text-2xl">dinerojs/dinero.js</h2>
			<p className="text-neutral-400">
				Create, calculate, and format money is JavaScript and TypeScript
			</p>
			<p className="text-neutral-400 text-xs">5646</p>
		</div>
	)
}

export default ProjectCard
