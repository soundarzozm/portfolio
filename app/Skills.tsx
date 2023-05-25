export default function Skills() {
	return (
		<div className='md:flex justify-center md:space-x-20 mt-40'>
			<span className='text-blue-500 text-sm md:text-base text-right w-32 font-medium tracking-widest'>
				SKILLS
			</span>
			<div className='grid grid-cols-1 md:w-full md:max-w-2xl md:grid-cols-3 sm:grid-cols-2 gap-y-10 sm:gap-x-32 ml-8 md:ml-0 mt-7 md:mt-0'>
				<div>
					<span className='font-medium'>LANGUAGES</span>
					<ul className='font-extralight text-sm space-y-1 mt-2'>
						<li>JavaScript (ES6)</li>
						<li>TypeScript</li>
						<li>Python</li>
					</ul>
				</div>
				<div>
					<span className='font-medium'>FRAMEWORKS</span>
					<ul className='font-extralight text-sm space-y-1 mt-2'>
						<li>React</li>
						<li>Next.js</li>
						<li>TailwindCSS</li>
						<li>TensorFlow</li>
					</ul>
				</div>
				<div>
					<span className='font-medium'>TOOLS</span>
					<ul className='font-extralight text-sm space-y-1 mt-2'>
						<li>Git</li>
						<li>DevTools</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
