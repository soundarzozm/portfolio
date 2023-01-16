import { useState } from 'react'

const Switch = (props: { darkTheme: null | Boolean; themeToggle: any }) => {
	return (
		<div
			className={
				'h-6 w-12 rounded-xl z-10 hover:cursor-pointer transition-all duration-200 ease-in-out ' +
				(props.darkTheme ? 'bg-green-400' : 'bg-gray-500')
			}
			onClick={props.themeToggle}
		>
			<div
				className={
					'h-6 w-6 bg-white z-0 rounded-full transition-all duration-200 ease-in-out scale-90 shadow-md ' +
					(props.darkTheme ? 'translate-x-6' : '')
				}
			></div>
		</div>
	)
}

export default Switch
