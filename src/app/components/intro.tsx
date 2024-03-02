'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SampleNextArrow(props: any) {
	const { onClick } = props;
	return (
		<div
			onClick={onClick}
			className='absolute top-1/2 right-6 z-10 text-white text-2xl xl:text-5xl cursor-pointer hover:text-second-color transition-all duration-200 hover:scale-110'
		>
			&#10095;
		</div>
	);
}

function SamplePrevArrow(props: any) {
	const { onClick } = props;
	return (
		<div
			onClick={onClick}
			className='absolute top-1/2 left-6 z-10 text-white text-2xl xl:text-5xl cursor-pointer hover:text-second-color transition-all duration-200 hover:scale-110'
		>
			&#10094;
		</div>
	);
}

const Intro = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 8000,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};
	return (
		<section>
			<Slider {...settings}>
				<div className='relative flex bg-black justify-center items-center w-[100%] h-[65vh] sm:h-[65vh] bg-opacity-20 '>
					<Image
						src='/intro1.jpg'
						alt='Zdjęcie dziewczyny na wyciecze w Rzymie'
						sizes='100vw'
						fill
						priority
						className='object-cover z-[-3] '
					/>
					<a
						href='https://www.vecteezy.com/free-photos/travel'
						rel='nofollow'
						className='hidden'
					>
						Mountain Stock photos by Vecteezy
					</a>
					<div className='relative flex flex-col justify-center md:items-center h-[65vh] sm:h-[65vh] w-[100%]'>
						<motion.div
							className='absolute top-0 uppercase text-end md:text-xl p-2 text-second-color bg-black bg-opacity-60 tracking-wider w-[100%]'
							initial={{ x: '-50px', opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{
								ease: 'easeOut',
								duration: 0.5,
								delay: 0.5,
							}}
						>
							<h1 className='md:hidden md:ml-[1rem] sm:ml-[0] text-second-color text-sm md:text-lg uppercase font-semibold text-center'>
								BIURO PIELGRZYMKOWO - TURYSTYCZNE CREDO
							</h1>
							<p className='mt-2 md:container md:mx-auto md:px-5 text-sm md:text-lg text-center md:text-end'>
								<span className='mr-1 md:mr-5'>
									+(48) 660 731 797
								</span>{' '}
								<span>+(48) 13 43 661 20</span>
							</p>
						</motion.div>
						<motion.p
							initial={{ x: '-50px', opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{
								ease: 'easeOut',
								duration: 0.5,
								delay: 1,
							}}
							className='absolute bottom-0 flex justify-center text-sm md:text-lg lg:text-xl xl:text-4xl font-semibold text-center p-4 text-second-color bg-black bg-opacity-60 tracking-wider w-[100%] uppercase '
						>
							&quot;Pielgrzymuj z pasją, odkrywaj z wiarą!&quot;
						</motion.p>
					</div>
				</div>
				<div className='relative flex justify-center items-center w-[100%] h-[65vh] sm:h-[65vh]  '>
					<Image
						src='/intro2.jpg'
						alt='zdjęcie dzieci na wycieczce'
						sizes='100vw'
						fill
						priority
						className='object-cover z-[-3] '
					/>
					<div className='relative flex flex-col justify-center md:items-center h-[65vh] sm:h-[65vh] w-[100%] bg-black bg-opacity-30'>
						<div className='absolute top-0 uppercase text-end md:text-xl p-2 text-second-color bg-black bg-opacity-60 tracking-wider w-[100%]'>
							<h1 className='md:hidden md:ml-[1rem] sm:ml-[0] text-second-color text-sm md:text-lg uppercase font-semibold text-center'>
								BIURO PIELGRZYMKOWO - TURYSTYCZNE CREDO
							</h1>
							<p className='mt-2 md:container md:mx-auto md:px-5 text-sm md:text-lg text-center md:text-end'>
								<span className='mr-1 md:mr-5'>
									+(48) 660 731 797
								</span>{' '}
								<span>+(48) 13 43 661 20</span>
							</p>
						</div>
						<p className='absolute bottom-0 flex justify-center text-sm md:text-lg lg:text-xl xl:text-4xl font-semibold text-center p-4 text-second-color bg-black bg-opacity-60 tracking-wider w-[100%] uppercase '>
							Wycieczki szkolne, które zostają w pamięci
						</p>
					</div>
				</div>
				<div className='relative flex  justify-center items-center w-[100%] h-[65vh] sm:h-[65vh] '>
					<Image
						src='/intro3.jpg'
						alt='zdjęcie turystów'
						sizes='100vw'
						fill
						priority
						className='object-cover z-[-3] '
					/>
					<a
						href='https://www.vecteezy.com/free-photos/travel'
						rel='nofollow'
						className='hidden'
					>
						Mountain Stock photos by Vecteezy
					</a>
					<div className='relative flex flex-col justify-center md:items-center h-[65vh] sm:h-[65vh] w-[100%] bg-black bg-opacity-30'>
						<div className='absolute top-0 uppercase text-end md:text-xl p-2 text-second-color bg-black bg-opacity-60 tracking-wider w-[100%]'>
							<h1 className='md:hidden md:ml-[1rem] sm:ml-[0] text-second-color text-sm md:text-lg uppercase font-semibold text-center'>
								BIURO PIELGRZYMKOWO - TURYSTYCZNE CREDO
							</h1>
							<p className='mt-2 md:container md:mx-auto md:px-5 text-sm md:text-lg text-center md:text-end'>
								<span className='mr-1 md:mr-5'>
									+(48) 660 731 797
								</span>{' '}
								<span>+(48) 13 43 661 20</span>
							</p>
						</div>
						<p className='absolute bottom-0 flex justify-center text-sm md:text-lg lg:text-xl xl:text-4xl font-semibold text-center p-4 text-second-color bg-black bg-opacity-60 tracking-wider w-[100%] uppercase '>
							Wyrusz z nami w niezapomnianą przygodę
						</p>
					</div>
				</div>
			</Slider>
		</section>
	);
};

export default Intro;
