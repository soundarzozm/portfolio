export default function Experience() {
	return (
		<div className='flex justify-center space-x-20 mt-40'>
			<span className='text-blue-500 font-medium tracking-widest'>
				EXPERIENCE
			</span>
			<ul className='font-extralight max-w-2xl'>
				<li className='flex justify-between gap-96'>
					<div>
						<div className='font-medium'>NCR Corporation</div>
						<div className='text-sm'>Software Engineer - 1</div>
					</div>
					<div className='font-mono text-xs font-thin'>
						July 2022 - Present
					</div>
				</li>
				<li className='flex justify-between mt-8'>
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
				<a
					className='w-auto mt-24 text-xl font-medium content-center flex items-center tracking-wide group hover:cursor-pointer'
					href='https://learnermanipal-my.sharepoint.com/:b:/g/personal/soundar_murugan1_learner_manipal_edu/EQRzsMjK1uNOn-3DAPDGttwBl6XTi4aP-1PuA-4c5uz6JA?e=8VrIba'
				>
					<span>View my resume</span>
					<span className='inline-block text-2xl ml-3 text-blue-500 group-hover:translate-x-2 duration-300 ease-in-out'>
						→
					</span>
				</a>
			</ul>
		</div>
	)
}
