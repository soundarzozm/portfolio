export default function Footer() {
	return (
		<footer className='px-20 py-14 flex justify-between items-center'>
			<div className='text-center font-medium'>
				<p className=''>Developed with ❤️ by</p>
				<p className=''>Soundar Murugan 🤘🏾 2022</p>
			</div>
			<div className='space-x-8 text-md font-semibold text-blue-500'>
				<a
					href='mailto:soundarmurugan91@gmail.com'
					className='hover:underline underline-offset-8 decoration-blue-500 decoration-2'
				>
					EMAIL
				</a>
				<a
					href='https://twitter.com/soundarzozm'
					className='hover:underline underline-offset-8 decoration-blue-500 decoration-2'
				>
					TWITTER
				</a>
				<a
					href='https://instagram.com/soundarzozm'
					className='hover:underline underline-offset-8 decoration-blue-500 decoration-2'
				>
					INSTAGRAM
				</a>
				<a
					href='https://github.com/soundarzozm'
					className='hover:underline underline-offset-8 decoration-blue-500 decoration-2'
				>
					GITHUB
				</a>
				<a
					href='https://linkedin.com/in/soundar-murugan'
					className='hover:underline underline-offset-8 decoration-blue-500 decoration-2'
				>
					LINKEDIN
				</a>
			</div>
		</footer>
	)
}
