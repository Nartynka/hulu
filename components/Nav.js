import request from '../utils/request'
import ScrollContainer from 'react-indiana-drag-scroll'

function Nav() {
	const handleScroll = (e) => {
		console.log(e.target)
		let target = e.target
		if (e.target.localName === 'h2') {
			target = e.target.parentNode
		}
		target.scrollBy({
			left: e.deltaY < 0 ? -30 : 30
		})
	}

	return (
		<nav className='relative text-center' onWheel={handleScroll}>
			<ScrollContainer
				vertical='false'
				className='flex 2xl:justify-between px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll h-10'
			>
				{Object.entries(request).map(([key, { title, url }]) => (
					<h2
						key={key}
						className='cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white last:pr-24'
					>
						{title}
					</h2>
				))}
			</ScrollContainer>
			<div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12' />
		</nav>
	)
}

export default Nav
