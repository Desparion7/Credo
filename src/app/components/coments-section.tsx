'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

type ImageData = {
	id: string;
	src: string;
	alt: string;
	position: 'main' | 'top' | 'bottom';
};

const ComentsSection = () => {
	// Initial state setup with positions for each image
	const [images, setImages] = useState<ImageData[]>([
		{
			id: 'komentarz',
			src: '/komentarz.png',
			alt: 'polecajacy komentarz osoby korzystajace z usługi firmy',
			position: 'main',
		},
		{
			id: 'komentarz2',
			src: '/komentarz2.png',
			alt: 'polecajacy komentarz osoby korzystajace z usługi firmy',
			position: 'top',
		},
		{
			id: 'komentarz3',
			src: '/komentarz3.png',
			alt: 'polecajacy komentarz osoby korzystajace z usługi firmy',
			position: 'bottom',
		},
	]);

	const handleClick = (clickedId: string) => {
		setImages((currentImages) => {
			const newImages = [...currentImages];
			const mainImageIndex = newImages.findIndex(
				(image) => image.position === 'main'
			);
			const clickedImageIndex = newImages.findIndex(
				(image) => image.id === clickedId
			);

			// Swap positions
			[
				newImages[mainImageIndex].position,
				newImages[clickedImageIndex].position,
			] = [
				newImages[clickedImageIndex].position,
				newImages[mainImageIndex].position,
			];

			return newImages;
		});
	};

	const getImageClassName = (position: string) => {
		switch (position) {
			case 'main':
				return 'absolute mx-2 top-[35%] sm:right-32 sm:top-[35%] z-[10]';
			case 'top':
				return 'absolute top-[2%] mx-2 cursor-pointer sm:right-32 sm:top-0 sm:scale-[80%]';
			case 'bottom':
				return 'absolute bottom-[-1%] sm:right-32 sm:bottom-[-1rem] sm:scale-8 cursor-pointer';
			default:
				return '';
		}
	};

	return (
		<section className='relative my-10 w-[100vw] h-[100vh] overflow-hidden'>
			<Image
				src='/bg-komentarze-desktop.jpg'
				alt='widok-z-przodu-szczesliwa-blondynka-z-jej-plecakiem-trzymajac-mape-stojaca-na-zoltej-scianie'
				sizes='100vw'
				fill
				priority
				className='hidden sm:block absolute object-cover z-[-3] h-full'
			/>
			<Image
				src='/bg-komentarze-mobile.jpg'
				alt='widok-z-przodu-szczesliwa-blondynka-z-jej-plecakiem-trzymajac-mape-stojaca-na-zoltej-scianie'
				sizes='100vw'
				fill
				priority
				className='sm:hidden block absolute object-cover z-[-3] '
			/>
			<a
				href='https://www.vecteezy.com/free-photos/mountain'
				rel='nofollow'
				className='hidden'
			>
				Mountain Stock photos by Vecteezy
			</a>
			{images.map((image) => (
				<motion.div
					key={image.id}
					className={getImageClassName(image.position)}
					animate={{ scale: image.position === 'main' ? 1 : 0.85 }}
					onClick={() => handleClick(image.id)}
					transition={{ duration: 0.5 }}
					layout // This prop enables automatic animation on layout changes
				>
					<Image
						src={image.src}
						alt={image.alt}
						width={500}
						height={500}
					/>
				</motion.div>
			))}
			{/* Dots for navigation */}
			<div className='hidden 2xl:flex absolute bottom-[50%] left-[55%] transform -translate-x-1/2 space-x-2 rotate-90'>
				{images.map((image) => (
					<button
						key={image.id}
						className={`h-5 w-5 rounded-full ${
							image.position === 'main'
								? 'bg-third-color'
								: 'bg-gray-200'
						}`}
						onClick={() => handleClick(image.id)}
					/>
				))}
			</div>
		</section>
	);
};

export default ComentsSection;

{
	/* <div className='absolute right-[6%] custom:right-[13%] lg:right-[17%] bottom-[17%]  flex flex-col p-6 sm:p-10 bg-white w-[18rem] sm:w-[20rem] lg:w-[25rem]'>
				<div className='flex flex-row mb-4'>
					<FaStar className='text-second-color' />
					<FaStar className='text-second-color' />
					<FaStar className='text-second-color' />
					<FaStar className='text-second-color' />
					<FaStar className='text-second-color' />
				</div>
				<a
					href={
						'https://www.google.com/search?sca_esv=40ad471a4e6b196f&sxsrf=ACQVn09gbVupi6TLoRXHWAT00e_HQCQjHw:1707824024426&uds=AMwkrPuZw9F283u9WEBJ7XyPHC5SsPkzxfy6GcKuJPFt74wXvxris2Trit5IQLpbMMKr4hGv-cT4QHwYfIhMyiqqma_YJFC5dEAnlmSXjNe48TfZH9iMrUJzVmPypcNvTU9MMTz7o4WG&si=AKbGX_pYNwgZ8bR4wYGfeDhNB2SEWOEwflc0Iy_SV8YABn1ydDJTUlw08bNKILGoglncv1iNiJA0yLuAKTsxd_H4DDesimC1O_nczO4w5MDA5Co5bSMW3cw%3D&q=Biuro+Pielgrzymkowo+-+Turystyczne+%22CREDO%22+Opinie&sa=X&ved=2ahUKEwiY4cGinKiEAxUWcPEDHSatBdwQ3PALegQIVRAF&biw=1680&bih=889&dpr=1'
					}
					target='_blank'
					rel='noopener noreferrer'
				>
					<p className='text-sm lg:text-lg'>
						Byłam na Kanonizacji J.P II. Biuro z Krosna zadbało o
						profesjonalną kadrę :Panowie kierowcy i wspaniała pod
						każdym względem Pani Małgosia.Ona też udostępniła
						pielgrzymom z Pruszkowa niesamowitych wrażeń .....
					</p>
				</a>
				<div>
					<div className='flex items-center justify-between mt-3'>
						<div className='w-[2rem] h-[2rem] sm:w-[4rem] sm:h-[4rem] bg-red-600 flex justify-center items-center rounded-full '>
							<p className='text-sm sm:text-2xl'>C</p>
						</div>
						<p>Opinia z Cylex Polska</p>
					</div>
				</div>
				<div className='absolute bg-white top-2 left-2 w-[100%] h-[100%] z-[-2] rotate-[-8deg]'></div>
				<div className='absolute bg-white top-2 left-2 w-[100%] h-[100%] z-[-2] rotate-[-10deg]'></div>
				<div className='absolute bg-white top-2 left-2 w-[100%] h-[100%] z-[-2] rotate-[-9deg]'></div>
			</div> */
}
