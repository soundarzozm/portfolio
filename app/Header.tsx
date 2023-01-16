export default function Header() {
	return (
		<header className='flex flex-col justify-center py-20 sm:px-20 px-10 h-screen'>
			<h1 className='font-extralight sm:text-4xl md:text-5xl text-xl tracking-wider'>
				Hello!
				<span className='ml-3 hover:animate-wave duration-200 ease-in-out hover:cursor-pointer md:text-5xl text-xl sm:text-4xl'>
					👋🏾
				</span>
			</h1>
			<h2 className='font-extralight tracking-wider md:leading-normal leading-normal md:text-5xl sm:text-3xl text-xl mt-32 md:max-w-2xl'>
				I'm <p className='font-normal inline'>Soundar Murugan</p>, a
				design-minded front-end software engineer focused on building
				beautiful interfaces & experiences
				<span className=' hover:cursor-default'>👨🏾‍💻</span>
			</h2>
			<h3 className='mt-32 tracking-wide md:text-xl sm:text-lg text-xs font-light'>
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
