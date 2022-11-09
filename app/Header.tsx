export default function Header() {
	return (
		<header className='py-28 px-72'>
			<h1 className='font-extralight text-5xl tracking-wider'>
				Hello!
				<span className='ml-3 hover:animate-wave duration-200 ease-in-out hover:cursor-pointer text-4xl'>
					👋🏾
				</span>
			</h1>
			<h2 className='font-extralight tracking-wider leading-normal text-5xl mt-32 max-w-2xl'>
				I'm <p className='font-normal inline'>Soundar Murugan</p>, a
				design-minded front-end software engineer focused on building
				beautiful interfaces & experiences
				<span className=' hover:cursor-default'>👨🏾‍💻</span>
			</h2>
			<h3 className='mt-32 tracking-wide text-xl font-light'>
				Get in touch<span className='mx-3'>👉🏾</span>
				<a
					href='mailto:soundarmurugan91@gmail.com'
					className='underline underline-offset-8 decoration-blue-500 decoration-4'
				>
					soundarmurugan91@gmail.com
				</a>
			</h3>
		</header>
	)
}
