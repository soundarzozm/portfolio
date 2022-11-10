import ProjectCard from './ProjectCard'
import { ProjectsData } from '../data/ProjectsData'

export default function Projects() {
	return (
		<div className='flex justify-center space-x-20 mt-40 mb-36'>
			<span className='text-blue-500 font-medium tracking-widest'>
				PROJECTS
			</span>
			<div className='font-extralight max-w-2xl space-y-16'>
				{ProjectsData.map((element, idx) => {
					return (
						<ProjectCard
							key={idx}
							title={element.title}
							description={element.description}
							tech={element.tech}
							url={element.url}
						/>
					)
				})}
			</div>
		</div>
	)
}
