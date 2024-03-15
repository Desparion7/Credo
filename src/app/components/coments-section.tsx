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
				rel='noopener noreferrer'
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
