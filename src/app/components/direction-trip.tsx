'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const CountryShort = ({
	children,
	link,
	imageSrc,
}: {
	children: React.ReactNode;
	link: string;
	imageSrc: string;
}) => {
	return (
		<Link href={link}>
			<div className='relative   overflow-hidden cursor-pointer'>
				<motion.div
					initial={{ scale: 1 }}
					whileHover={{ scale: 1.2 }}
					transition={{ duration: 0.3 }}
					className='min-w-[250px] h-[200px]'
				>
					<Image
						src={imageSrc}
						layout='fill'
						objectFit='cover'
						alt='zdjęcie danego państwa'
						className='p-1'
					/>
				</motion.div>
			</div>
			<p className='mt-1 text-lg font-semibold '>{children}</p>
			<p>3 wycieczki</p>
		</Link>
	);
};

const DirectionTrip = () => {
	return (
		<section className='relative container mx-auto w-[100%] px-2 xl:px-5'>
			<div className='flex flex-col justify-between gap-5'>
				<div className='flex flex-col gap-3 justify-end'>
					<h2 className='text-xl xl:text-3xl font-semibold text-center lg:text-start'>
						Kierunki wycieczek
					</h2>
					<p className='xl:text-xl text-center lg:text-start'>
						Przeglądaj oferty wyjazdów według krajów
					</p>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-5 gap-3 xl:gap-10 justify-items-center'>
					<CountryShort
						link={'/oferta?kraje=polska'}
						imageSrc={'/kraje/polska.jpg'}
					>
						Polska
					</CountryShort>
					<CountryShort
						link={'/oferta?kraje=wlochy'}
						imageSrc={'/kraje/wlochy.jpg'}
					>
						Włochy
					</CountryShort>
					<CountryShort
						link={'/oferta?kraje=chorwacja'}
						imageSrc={'/kraje/chorwacja.jpg'}
					>
						Chorwacja
					</CountryShort>
					<CountryShort
						link={'/oferta?kraje=bosnia'}
						imageSrc={'/kraje/bosnia.jpg'}
					>
						Bośnia i Hercegowina
					</CountryShort>
					<CountryShort
						link={'/oferta?kraje=potrugalia'}
						imageSrc={'/kraje/portugalia.jpg'}
					>
						Portugalia
					</CountryShort>
					<CountryShort
						link={'/oferta?kraje=polska'}
						imageSrc={'/kraje/litwa.jpg'}
					>
						Litwa
					</CountryShort>
				</div>
			</div>
		</section>
	);
};

export default DirectionTrip;
