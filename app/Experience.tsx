export default function Experience() {
	return (
		<div className='flex justify-center space-x-20 mt-40'>
			<span className='text-blue-500 font-medium tracking-widest'>
				EXPERIENCE
			</span>
			<ul className='font-extralight max-w-2xl space-y-8'>
				<li className='flex justify-between gap-96'>
					<div>
						<div className='font-medium'>NCR Corporation</div>
						<div className='text-sm'>Software Engineer - 1</div>
					</div>
					<div className='font-mono text-xs font-thin'>
						July 2022 - Present
					</div>
				</li>
				<li className='flex justify-between'>
					<div>
						<div className='font-medium'>Factri.Ai</div>
						<div className='text-sm'>
							Fullstack Developer Intern
						</div>
					</div>
					<div className='font-mono text-xs font-thin'>
						February 2022 - June 2022
					</div>
				</li>
			</ul>
		</div>
	)
}
