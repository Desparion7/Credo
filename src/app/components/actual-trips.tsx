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
		<Link href={link}>
			<button className='py-2 px-4 xl:p-2 2xl:p-3 w-[100vw] xl:w-auto text-sm font-semibold hover:bg-amber-100 bg-gray-200 transition-all duration-300'>
				{children}
			</button>
		</Link>
	);
};

const ActualTrip = () => {
	return (
		<section className='relative container mx-auto w-[100%] py-10 xl:py-20 px-2 xl:px-5'>
			<div className='flex flex-col xl:flex-row justify-between  border-b-2 border-b-main-color pb-2'>
				<div className='flex flex-col items-center gap-3 xl:justify-end xl:items-start'>
					<h2 className='text-xl xl:text-3xl font-semibold'>
						Aktualne wyjazdy
					</h2>
					<p className='xl:text-xl'>
						Odkryj co dla Ciebie przygotowaliśmy
					</p>
				</div>
				<div className='flex flex-col xl:flex-row justify-center items-center xl:items-end gap-3'>
					<Link href='/oferta'>
						<motion.button
							className='flex items-center justify-center bg-second-color px-6 py-3 mb-2 mt-5 xl:text-xl font-semibold w-[100vw] xl:w-auto'
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
