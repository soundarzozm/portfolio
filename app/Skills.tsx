export default function Skills() {
	return (
		<div className='flex justify-center space-x-20 mt-40'>
			<span className='text-blue-500 font-medium tracking-widest'>
				SKILLS
			</span>
			<div className='grid grid-cols-3 gap-32'>
				<div>
					<span className="font-medium">LANGUAGES</span>
					<ul className="font-thin text-sm space-y-1 mt-2">
						<li>JavaScript (ES6)</li>
						<li>TypeScript</li>
						<li>HTML</li>
						<li>CSS</li>
						<li>Python</li>
						<li>SQL</li>
						<li>R</li>
					</ul>
				</div>
				<div>
					<span className="font-medium">FRAMEWORKS</span>
					<ul className="font-thin text-sm space-y-1 mt-2">
						<li>NextJS</li>
						<li>ReactJS</li>
						<li>Node</li>
						<li>TensorFlow</li>
						<li>TailwindCSS</li>
					</ul>
				</div>
				<div>
					<span className="font-medium">TOOLS</span>
					<ul className="font-thin text-sm space-y-1 mt-2">
						<li>Bash</li>
						<li>Git</li>
						<li>Chrome DevTools</li>
						<li>Postman</li>
						<li>MongoDB</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
