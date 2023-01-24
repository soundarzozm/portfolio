export default function Header() {
	return (
		<header className='flex flex-col justify-around sm:px-32 sm:py-24 py-16 px-12 h-screen mx-auto max-w-[1440px] text-[0.9rem] sm:text-[1.2rem] md:text-[1.5rem] lg:text-[1.8rem] xl:text-[2rem]'>
			<h1 className='font-extralight text-head tracking-wider my-2'>
				Hello!
				<span className='inline-block ml-3 hover:cursor-pointer hover:animate-wave hover:duration-200 ease-in-out'>
					👋🏾
				</span>
			</h1>
			<h2 className='font-extralight tracking-wider leading-normal text-head max-w-3xl my-2'>
				I&apos;m <p className='font-normal inline'>Soundar Murugan</p>,
				a design-minded front-end software engineer focused on building
				beautiful interfaces & experiences
				<span className=' hover:cursor-default'>👨🏾‍💻</span>
			</h2>
			<h3 className='tracking-wide text-sm font-extralight my-2'>
				<span>Get in touch</span>
				<span className='mx-3'>👉🏾</span>
				<span>
					<a
						href='mailto:soundarmurugan91@gmail.com'
						className='underline underline-offset-8 decoration-blue-500 decoration-4'
					>
						soundarmurugan91@gmail.com
					</a>
				</span>
			</h3>
		</header>
	)
}
