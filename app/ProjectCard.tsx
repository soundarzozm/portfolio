export default function ProjectCard(props: any) {
	return (
		<div>
			<a
				className='block font-medium tracking-wide group hover:cursor-pointer mb-3'
				href={props.url}
			>
				<span>{props.title}</span>
				<span className='inline-block ml-3 text-blue-500 group-hover:translate-x-2 duration-300 ease-in-out'>
					→
				</span>
			</a>
			<span className='text-sm text-clubhouse-text-color-secondary dark:text-dark-text-secondary'>
				{props.description}
			</span>
			<div className='mt-5 space-x-2'>
				{props.tech.map((element: string, idx: number) => {
					return (
						<span
							key={idx}
							className='text-xs font-mono text-blue-500 border-blue-500 border rounded p-2'
						>
							{element}
						</span>
					)
				})}
			</div>
		</div>
	)
}
