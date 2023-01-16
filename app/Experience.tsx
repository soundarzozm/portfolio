export default function Experience() {
	return (
		<div className='md:flex justify-center md:space-x-20 mt-40'>
			<span className='text-blue-500 text-right w-32 font-medium tracking-widest'>
				EXPERIENCE
			</span>
			<ul className='font-extralight md:max-w-2xl w-11/12 mt-7 md:mt-0 ml-8 md:ml-0'>
				<li className='sm:flex justify-between'>
					<div>
						<div className='font-medium'>NCR Corporation</div>
						<div className='text-sm font-light my-1'>
							Software Engineer - 1
						</div>
					</div>
					<div className='font-mono text-xs font-thin'>
						July 2022 - Present
					</div>
				</li>
				<li className='sm:flex justify-between mt-8'>
					<div>
						<div className='font-medium'>Factri.Ai</div>
						<div className='text-sm font-light my-1'>
							Fullstack Developer Intern
						</div>
					</div>
					<div className='font-mono text-xs font-thin'>
						February 2022 - June 2022
					</div>
				</li>
				<li>
					<a
						className='w-auto mt-24 text-xl font-medium content-center flex items-center tracking-wide group hover:cursor-pointer'
						href='https://learnermanipal-my.sharepoint.com/:b:/g/personal/soundar_murugan1_learner_manipal_edu/EQRzsMjK1uNOn-3DAPDGttwBl6XTi4aP-1PuA-4c5uz6JA?e=8VrIba'
					>
						<span>View my resume</span>
						<span className='inline-block text-2xl ml-3 text-blue-500 group-hover:translate-x-2 duration-300 ease-in-out'>
							→
						</span>
					</a>
				</li>
			</ul>
		</div>
	)
}
