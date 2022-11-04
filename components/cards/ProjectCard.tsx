import type { NextComponentType } from 'next'
import Link from 'next/link'

const ProjectCard: NextComponentType = ({
	name,
	id,
	lang,
	description,
	url,
	stars,
}) => {
	return (
		<Link href={url}>
			<div className="bg-dusk p-10 w-auto m-2 max-w-2xl hover:scale-110 duration-300 ease-in-out hover:cursor-pointer group-hover:opacity-50 hover:!opacity-100">
				<h3 className="font-bold text-xs tracking-widest uppercase my-2">
					{lang}
				</h3>
				<h2 className="font-bold text-2xl my-2">{name}</h2>
				<p className="text-neutral-400 text-tiny mb-5">{description}</p>
				<div className="flex items-center text-neutral-400">
					<div className="w-3 h-3 mr-2">
						<svg
							viewBox="0 0 46.4 46.4"
							aria-hidden="true"
							className="w-full h-full -mt-px fill-current"
						>
							<path d="M21.6 2c.3-.6.9-1 1.6-1 .7 0 1.3.4 1.6 1l5.8 11.7c.3.5.8.9 1.4 1l12.8 1.9c.7.1 1.2.6 1.4 1.2.2.6 0 1.4-.5 1.8l-9.3 9.1c-.4.4-.6 1-.5 1.6l2.2 12.9c.1.7-.2 1.4-.7 1.8-.6.4-1.3.5-1.9.1L24 39c-.5-.3-1.1-.3-1.7 0l-11.5 6.1c-.6.3-1.3.3-1.9-.1-.6-.4-.8-1.1-.7-1.8l2.2-12.9c.1-.6-.1-1.2-.5-1.6l-9.4-9c-.5-.5-.7-1.2-.5-1.8.2-.6.8-1.1 1.4-1.2l12.9-1.9c.6-.1 1.1-.5 1.4-1L21.6 2z"></path>
						</svg>
					</div>
					<span className="-mt-px text-xs font-semibold leading-none tracking-wider">
						{stars}
						<span className="sr-only">stars</span>
					</span>
				</div>
			</div>
		</Link>
	)
}

export default ProjectCard
