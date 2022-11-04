import type { NextComponentType } from 'next'
import { useEffect, useState } from 'react'
import ProjectCard from './cards/ProjectCard'

const REPOS_EP = 'https://api.github.com/users/soundarzozm/repos'

const Body: NextComponentType = () => {
	const [repos, setRepos] = useState([])
	const [loading, setLoading] = useState(true)

	const fetchRepos = async () => {
		fetch(REPOS_EP, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((data: any) => {
				let finalResponseData: Array<any> = []

				data.forEach((element: any) => {
					if (element.topics.includes('portfolio')) {
						finalResponseData.push(element)
					}
				})
				setRepos(finalResponseData)
				setLoading(false)
			})
			.catch((error: any) => setLoading(true))
	}

	useEffect(() => {
		fetchRepos()
	}, [])

	return (
		<div className="w-1/2 mt-20 group">
			{!loading ? (
				repos.map((repo, idx) => {
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
				})
			) : (
				<span className="fixed h-10 w-10 right-1/4 top-1/2">
					<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-500 opacity-75"></span>
					<span className="relative inline-flex rounded-full h-10 w-10 bg-gray-200"></span>
				</span>
			)}
		</div>
	)
}

export default Body
