'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Intro = () => {
	return (
		<section className='relative flex bg-black justify-center items-center w-[100%] h-[88vh] sm:h-[91vh] bg-opacity-20'>
			<Image
				src='/lichen.jpg'
				alt='Zdjęcie świątyni w Licheniu'
				sizes='100vw'
				fill
				priority
				className='object-cover z-[-3] '
			/>
			<div className='relative flex flex-col justify-center md:items-center h-[88vh] sm:h-[91vh] w-[100%]'>
				<motion.div
					className='absolute top-0 uppercase text-end md:text-xl p-4 text-second-color bg-main-color tracking-wider w-[100%]'
					initial={{ x: '-50px', opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ ease: 'easeOut', duration: 0.5, delay: 0.5 }}
				>
					<h1 className='md:hidden md:ml-[1rem] sm:ml-[0] text-second-color text-sm md:text-lg uppercase font-semibold text-center'>
						BIURO PIELGRZYMKOWO - TURYSTYCZNE CREDO
					</h1>
					<p className='mt-2 md:container md:mx-auto md:px-5 text-sm md:text-lg text-center md:text-end'>
						<span className='mr-1 md:mr-5'>+(48) 660 731 797</span>{' '}
						<span>+(48) 13 43 661 20</span>
					</p>
				</motion.div>
				<motion.p
					initial={{ x: '-50px', opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ ease: 'easeOut', duration: 0.5, delay: 1 }}
					className='absolute bottom-0 flex justify-center text-sm md:text-lg lg:text-xl xl:text-3xl text-center p-4 text-second-color bg-main-color tracking-wider w-[100%] uppercase'
				>
					&quot;Pielgrzymuj z pasją, odkrywaj z wiarą!&quot;
				</motion.p>
			</div>
		</section>
	);
};

export default Intro;
