import type { NextComponentType } from 'next'
import { useEffect, useState } from 'react'
import ProjectCard from './cards/ProjectCard'

const REPOS_EP = 'https://api.github.com/users/soundarzozm/repos?sort=created&direction=desc'

const Body: NextComponentType = () => {
	const [repos, setRepos] = useState([])

	const fetchRepos = async () => {
		fetch(REPOS_EP, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((data) => setRepos(data))
	}

	useEffect(() => {
		fetchRepos()
	}, [])

	return (
		<div className="w-1/2 mt-20 group">
			{repos?.map((repo, idx) => {
				return (
					<ProjectCard
						name={repo.name}
						id={repo.id}
						lang={repo.language}
						description={repo.description}
						key={idx}
						url={repo.html_url}
						stars={repo.stargazers_count}
					/>
				)
			})}
		</div>
	)
}

export default Body
