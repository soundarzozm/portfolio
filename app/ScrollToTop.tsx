'use client'

import { useState, useEffect } from 'react'

export default function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false)

	const toggleVisibility = () => {
		if (window.pageYOffset > 300) {
			setIsVisible(true)
		} else {
			setIsVisible(false)
		}
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility)

		return () => {
			window.removeEventListener('scroll', toggleVisibility)
		}
	}, [])

	return (
		<span
			className={`${
				isVisible ? 'opacity-100' : 'opacity-0'
			} fixed right-4 bottom-6 text-3xl hover:cursor-pointer hover:-translate-y-2 duration-300 ease-in-out`}
			onClick={scrollToTop}
		>
			☝🏾
		</span>
	)
}
