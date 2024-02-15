import React from 'react';

import Link from 'next/link';
import { motion } from 'framer-motion';

export const LinkButton2 = ({
	children,
	link,
	active,
}: {
	children: React.ReactNode;
	link: string;
	active: boolean;
}) => {
	return (
		<Link href={link}>
			{active ? (
				<motion.button
					className='bg-second-color px-6 py-3 xl:text-xl font-semibold w-[100vw] lg:w-auto'
					whileInView={{ scale: 1.05 }}
					transition={{ duration: 0.6 }}
				>
					{children}
				</motion.button>
			) : (
				<button className='py-2 px-4 xl:p-2 2xl:p-3 w-[100vw] lg:w-auto text-sm xl:text-lg font-semibold hover:bg-amber-100 bg-gray-200 transition-all duration-300'>
					{children}
				</button>
			)}
		</Link>
	);
};

const AllTripsFilter = ({ tripType }: { tripType: string | null }) => {
	return (
		<div className='flex flex-col lg:flex-row justify-between  border-b-2 border-b-main-color pb-2'>
			<div className='flex flex-col items-center gap-3 lg:justify-end lg:items-start mb-4'>
				<h2 className='text-xl xl:text-3xl font-semibold'>
					{tripType
						? tripType
								.replace(/-/g, ' ')
								.replace(/^\w/, (c) => c.toUpperCase())
						: 'Wszystkie wyjazdy'}
				</h2>
			</div>
			<div className='flex flex-col justify-center items-center lg:items-start gap-3'>
				<LinkButton2
					link={'/oferta'}
					active={tripType === null ? true : false}
				>
					Pełna oferta 2024!
				</LinkButton2>
				<div className='flex flex-col lg:flex-row gap-3 xl:gap-5 2xl:gap-10'>
					<LinkButton2
						link={'/oferta?rodzaj=pielgrzymki'}
						active={tripType === 'pielgrzymki' ? true : false}
					>
						Pielgrzymki
					</LinkButton2>
					<LinkButton2
						link={'/oferta?rodzaj=wycieczki-firmowe'}
						active={tripType === 'wycieczki-firmowe' ? true : false}
					>
						Wycieczki Firmowe
					</LinkButton2>
					<LinkButton2
						link={'/oferta?rodzaj=wycieczki-szkolne'}
						active={tripType === 'wycieczki-szkolne' ? true : false}
					>
						Wycieczki Szkolne
					</LinkButton2>
					<LinkButton2
						link={'/oferta?rodzaj=wycieczki-na-zamówienie'}
						active={
							tripType === 'wycieczki-na-zamówienie'
								? true
								: false
						}
					>
						Wycieczki Na Zamówienie
					</LinkButton2>
				</div>
			</div>
		</div>
	);
};

export default AllTripsFilter;
