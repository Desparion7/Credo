'use client';
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
				<motion.button className='bg-second-color py-2 px-4 xl:p-2 2xl:p-3 w-[100vw]  text-sm xl:text-lg font-semibold lg:w-auto'>
					{children}
				</motion.button>
			) : (
				<button className='py-2 px-4 xl:p-2 2xl:p-3 w-[100vw]  text-sm xl:text-lg font-semibold lg:w-auto hover:bg-amber-100 bg-gray-200 transition-all duration-300'>
					{children}
				</button>
			)}
		</Link>
	);
};
export const LinkButtonCountry = ({
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
				<motion.button className='bg-second-color py-2 px-4 xl:p-2 2xl:p-3 w-[100vw] lg:w-auto text-sm font-semibold '>
					{children}
				</motion.button>
			) : (
				<button className='py-2 px-4 xl:p-2 2xl:p-3 w-[100vw] lg:w-auto text-sm font-semibold hover:bg-amber-100 bg-gray-200 transition-all duration-300'>
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
				<div className='flex gap-5'>
					<LinkButton2
						link={'/oferta'}
						active={tripType === null ? true : false}
					>
						Pełna oferta 2024!
					</LinkButton2>
				</div>
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
				<div className='flex flex-col lg:flex-row gap-2'>
					<LinkButtonCountry
						link={'/oferta?rodzaj=Polska'}
						active={tripType === 'Polska' ? true : false}
					>
						Polska
					</LinkButtonCountry>
					<LinkButtonCountry
						link={'/oferta?rodzaj=Chorwacja'}
						active={tripType === 'Chorwacja' ? true : false}
					>
						Chorwacja
					</LinkButtonCountry>
					<LinkButtonCountry
						link={'/oferta?rodzaj=Włochy'}
						active={tripType === 'Włochy' ? true : false}
					>
						Włochy
					</LinkButtonCountry>
					<LinkButtonCountry
						link={'/oferta?rodzaj=Portugalia'}
						active={tripType === 'Portugalia' ? true : false}
					>
						Portugalia
					</LinkButtonCountry>
					<LinkButtonCountry
						link={'/oferta?rodzaj=Litwa'}
						active={tripType === 'Litwa' ? true : false}
					>
						Litwa
					</LinkButtonCountry>
					<LinkButtonCountry
						link={'/oferta?rodzaj=Bośnia i Hercegowina'}
						active={
							tripType === 'Bośnia i Hercegowina' ? true : false
						}
					>
						Bośnia i Hercegowina
					</LinkButtonCountry>
				</div>
			</div>
		</div>
	);
};

export default AllTripsFilter;
