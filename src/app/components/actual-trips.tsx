'use client';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa6';

import FetchedTrips from '@/components/fetched-trips';

export const LinkButton = ({
	children,
	link,
}: {
	children: React.ReactNode;
	link: string;
}) => {
	return (
		<Link href={link} className='h-full'>
			<button className='flex items-center justify-center px-6 py-3 text-sm font-semibold w-[100vw] bg-gray-200 xl:w-auto transition-all duration-300 h-full hover:bg-amber-100'>
				{children}
			</button>
		</Link>
	);
};

const ActualTrip = () => {
	return (
		<section className='relative container mx-auto w-[100%] py-10 xl:py-20 px-2 custom:px-0 xl:px-5'>
			<div className='flex flex-col xl:flex-row justify-between items-center border-b-2 border-b-main-color pb-2'>
				<div className='flex flex-col items-center gap-3 xl:justify-end xl:items-start'>
					<h2 className='text-xl xl:text-3xl font-semibold'>
						Aktualne wyjazdy
					</h2>
					<p className='xl:text-xl mb-2'>
						Odkryj co dla Ciebie przygotowaliśmy
					</p>
				</div>
				<div className='flex flex-col xl:flex-row justify-center items-center  gap-3 h-full'>
					<Link href='/oferta'>
						<motion.button
							className='flex items-center justify-center bg-second-color px-6 py-3 xl:text-xl font-semibold w-[100vw] xl:w-auto'
							whileHover={{ scale: 1.05 }}
						>
							Pełna oferta 2024 <FaArrowRight className='ml-2' />
						</motion.button>
					</Link>
					<LinkButton link={'/oferta?rodzaj=pielgrzymki'}>
						Pielgrzymki
					</LinkButton>
					<LinkButton link={'/oferta?rodzaj=wycieczki-firmowe'}>
						Wycieczki Firmowe
					</LinkButton>
					<LinkButton link={'/oferta?rodzaj=wycieczki-szkolne'}>
						Wycieczki Szkolne
					</LinkButton>
					<LinkButton link={'/oferta?rodzaj=wycieczki-na-zamówienie'}>
						Wycieczki na zamówienie
					</LinkButton>
				</div>
			</div>
			<FetchedTrips />
		</section>
	);
};

export default ActualTrip;
