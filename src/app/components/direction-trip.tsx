'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const CountryShort = ({
	children,
	link,
	imageSrc,
	short,
}: {
	children: React.ReactNode;
	link: string;
	imageSrc: string;
	short: string;
}) => {
	return (
		<div className='w-[250px]'>
			<div className='relative overflow-hidden w-[250px] h-[200px]'>
				<motion.div
					initial={{ scale: 1 }}
					whileHover={{ scale: 1.2 }}
					transition={{ duration: 0.3 }}
					className='w-[250px] h-[200px]'
				>
					<Link href={link}>
						<Image
							src={imageSrc}
							layout='fill'
							objectFit='cover'
							alt='zdjęcie danego państwa'
							className='p-1 cursor-pointer'
						/>
					</Link>
				</motion.div>
			</div>
			<Link href={link}>
				<p className='inline mt-1 text-lg font-semibold hover:text-blue-600 cursor-pointer'>
					{children}
				</p>
			</Link>
			<p>{short}</p>
		</div>
	);
};

const DirectionTrip = () => {
	return (
		<section className='relative container mx-auto w-[100%] px-2 xl:px-5'>
			<div className='flex flex-col justify-between gap-5 '>
				<div className='overflow-hidden'>
					<motion.div
						className='flex flex-col gap-3 justify-end border-b-2 border-b-main-color pb-2 '
						initial={{ opacity: 0, translateY: '50px' }}
						whileInView={{ opacity: 1, translateY: '0' }}
						transition={{ ease: 'easeOut', duration: 0.5 }}
						viewport={{
							once: true,
						}}
					>
						<h2 className='text-xl xl:text-3xl font-semibold text-center lg:text-start'>
							Kierunki wycieczek
						</h2>
						<p className='xl:text-xl text-center lg:text-start'>
							Przeglądaj oferty wyjazdów według krajów
						</p>
					</motion.div>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-5 gap-3 xl:gap-10 justify-items-center'>
					<CountryShort
						link={'/oferta?rodzaj=Polska'}
						imageSrc={'/kraje/polska.jpg'}
						short={'Poznaj lepiej nasz kraj'}
					>
						Polska
					</CountryShort>
					<CountryShort
						link={'/oferta?rodzaj=Włochy'}
						imageSrc={'/kraje/wlochy.jpg'}
						short={'Dom Watykanu i świętych miejsc'}
					>
						Włochy
					</CountryShort>
					<CountryShort
						link={'/oferta?rodzaj=Francja'}
						imageSrc={'/kraje/francja.jpg'}
						short={'Romantyzm, wino, sztuka i elegancja!'}
					>
						Francja
					</CountryShort>
					<CountryShort
						link={'/oferta?rodzaj=Chorwacja'}
						imageSrc={'/kraje/chorwacja.jpg'}
						short={'Starożyte katedry, średniowieczne kościoły'}
					>
						Chorwacja
					</CountryShort>
					<CountryShort
						link={'/oferta?rodzaj=Bośnia i Hercegowina'}
						imageSrc={'/kraje/bosnia.jpg'}
						short={'Unikalne doświadczenie duchowe'}
					>
						Bośnia i Hercegowina
					</CountryShort>
					<CountryShort
						link={'/oferta?rodzaj=Portugalia'}
						imageSrc={'/kraje/portugalia.jpg'}
						short={'Portugalia ze słynnym sanktuarium w Fatimie'}
					>
						Portugalia
					</CountryShort>
					<CountryShort
						link={'/oferta?rodzaj=Litwa'}
						imageSrc={'/kraje/litwa.jpg'}
						short={'Bogata historia religijna i kulturowa '}
					>
						Litwa
					</CountryShort>
					<CountryShort
						link={'/oferta?rodzaj=Czarnogóra'}
						imageSrc={'/kraje/czarnogora.jpg'}
						short={'Perła natury nad Adriatykiem'}
					>
						Czarnogóra
					</CountryShort>
					<CountryShort
						link={'/oferta?rodzaj=Czechy'}
						imageSrc={'/kraje/czechy.jpg'}
						short={'Krajobrazy, zamki i złote piwo'}
					>
						Czechy
					</CountryShort>
					<CountryShort
						link={'/oferta?rodzaj=Słowacja'}
						imageSrc={'/kraje/słowacja.jpg'}
						short={'Góry, zamki, jaskinie i termalne jeziora'}
					>
						Słowacja
					</CountryShort>
					<CountryShort
						link={'/oferta?rodzaj=Węgry'}
						imageSrc={'/kraje/węgry.jpg'}
						short={
							'Kultura łączy się z historią, winnicami i Dunajem'
						}
					>
						Węgry
					</CountryShort>
				</div>
			</div>
		</section>
	);
};

export default DirectionTrip;
