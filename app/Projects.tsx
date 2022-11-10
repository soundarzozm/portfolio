import ProjectCard from './ProjectCard'
import { ProjectsData } from '../data/ProjectsData'

export default function Projects() {
	return (
		<div className='md:flex justify-center md:space-x-20 mt-40 mb-36'>
			<span className='text-blue-500 font-medium tracking-widest'>
				PROJECTS
			</span>
			<div className='font-extralight md:max-w-2xl space-y-16 mt-7 md:mt-0 ml-12 md:ml-0'>
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
