import ProjectCard from './ProjectCard'

export default function Projects() {
	return (
		<div className='flex justify-center space-x-20 mt-40 mb-36'>
			<span className='text-blue-500 font-medium tracking-widest'>
				PROJECTS
			</span>
			<div className='font-extralight max-w-2xl space-y-16'>
				<ProjectCard
					title='Surf Videos'
					description='Small React project created during an interview process to browse and search surf videos via the YouTube API.'
					tech={['JavaScript', 'React', 'Python']}
					url=''
				/>
				<ProjectCard
					title='Surf Videos'
					description='Small React project created during an interview process to browse and search surf videos via the YouTube API.'
					tech={['JavaScript', 'React', 'Python']}
					url=''
				/>
			</div>
		</div>
	)
}
