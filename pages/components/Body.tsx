import type { NextComponentType } from 'next'
import ProjectCard from './cards/ProjectCard'

const Body: NextComponentType = () => {
	return (
		<div className="w-1/2 mt-20">
			<ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
		</div>
	)
}

export default Body
