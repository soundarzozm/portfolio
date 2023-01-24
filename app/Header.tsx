export default function Header() {
	return (
		<header className='flex flex-col justify-around sm:px-24 sm:py-28 py-16 px-12 h-screen mx-auto max-w-[1440px] text-[0.9rem] xxs:text-[1.2rem] xs:text-[1.3rem] sm:text-[1.4rem] md:text-[1.8rem] landscape:text-[0.9rem] landscape:xxs:text-[0.9rem] landscape:xs:text-[1rem] landscape:sm:text-[1.1rem] landscape:md:text-[1.2rem] landscape:lg:text-[1.8rem]'>
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
			<h3 className='tracking-wide font-light my-2 text-[12px] xs:text-lg'>
				<span>Get in touch</span>
				<span className='mx-3'>👉🏾</span>
				<span>
					<a
						href='mailto:soundarmurugan91@gmail.com'
						className='pb-1 px-[2px] shadow-[inset_0_-3px_0_0_rgb(76,130,238)] hover:shadow-[inset_0_-38px_0_0_rgb(76,130,238)] hover:text-white transition-all ease-out duration-300'
					>
						soundarmurugan91@gmail.com
					</a>
				</span>
			</h3>
		</header>
	)
}
