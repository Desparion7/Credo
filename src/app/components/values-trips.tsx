'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const ValuesTrips = () => {
	return (
		<section className='container mx-auto flex flex-col justify-center items-center mt-10 '>
			<h2 className='text-xl lg:text-3xl font-semibold text-main-color'>
				Zapewniamy:
			</h2>
			<div className='relative flex flex-col lg:flex-row  justify-center lg:gap-10  mt-5 xl:mt-10 w-[100%] px-2 xl:px-5'>
				<motion.div
					className='flex flex-col gap-5 mb-5 text-md items-center text-center xl:text-start'
					initial={{ opacity: 0, translateY: '50px' }}
					whileInView={{ opacity: 1, translateY: '0' }}
					transition={{ ease: 'easeOut', duration: 0.4 }}
					viewport={{
						once: true,
					}}
				>
					<Image
						src='/duchowość.jpg'
						width={669}
						height={522}
						alt='symbol duchowosći'
						className='w-[14rem] xl:min-w-[15rem]'
					/>
					<p className='lg:hidden xl:text-lg mb-5'>
						<span className='font-semibold'>Duchowość</span> - firma
						promuje duchowe aspekty podróży, zapewniając pielgrzymom
						możliwość głębokiego połączenia z ich wiarą i miejscami
						świętymi. Organizując pielgrzymki do miejsc o znaczeniu
						religijnym, biuro umożliwia uczestnikom odnalezienie
						wewnętrznego spokoju, odnowienie wiary oraz
						doświadczenie wspólnoty z innymi wierzącymi.
					</p>
				</motion.div>
				<motion.div
					className='flex flex-col gap-5 mb-5 text-md items-center text-center xl:text-start'
					initial={{ opacity: 0, translateY: '50px' }}
					whileInView={{ opacity: 1, translateY: '0' }}
					transition={{ ease: 'easeOut', duration: 0.4 }}
					viewport={{
						once: true,
					}}
				>
					<Image
						src='/doświadczenie.jpg'
						width={669}
						height={522}
						alt='symbol doświadczenia'
						className='w-[14rem] xl:min-w-[15rem]'
					/>
					<p className='lg:hidden xl:text-lg mb-5'>
						<span className='font-semibold'>Doświadczenie</span> -
						Firma posiada wieloletnie doświadczenie w organizacji
						pielgrzymek, dzięki czemu może oferować wyjazdy dobrze
						zaplanowane, bezpieczne i w pełni odpowiadające
						potrzebom duchowym uczestników. Doświadczenie to
						umożliwia również rozwiązywanie wszelkich
						nieprzewidzianych sytuacji oraz zapewnienie komfortu i
						satysfakcji z podróży.
					</p>
				</motion.div>
				<motion.div
					className='flex flex-col gap-5 mb-5 text-md items-center text-center xl:text-start'
					initial={{ opacity: 0, translateY: '50px' }}
					whileInView={{ opacity: 1, translateY: '0' }}
					transition={{ ease: 'easeOut', duration: 0.4 }}
					viewport={{
						once: true,
					}}
				>
					<Image
						src='/wsparcie.jpg'
						width={669}
						height={522}
						alt='symbol wsparcia'
						className='w-[14rem] xl:min-w-[15rem]'
					/>
					<p className='lg:hidden xl:text-lg mb-5'>
						<span className='font-semibold'>Wsparcie</span> - Biuro
						oferuje kompleksowe wsparcie na każdym etapie
						pielgrzymki, od momentu planowania przez realizację aż
						po powrót do domu. Wsparcie to obejmuje pomoc w
						przygotowaniach logistycznych, duchowych, a także
						zapewnienie opieki i asysty podczas samej podróży.
						Dzięki temu uczestnicy mogą skupić się na celach swojej
						pielgrzymki, mając pewność, że wszystkie aspekty
						organizacyjne są profesjonalnie obsługiwane.
					</p>
				</motion.div>
			</div>
			<p className='hidden lg:block xl:text-lg mb-5 w-[60%]'>
				<span className='font-semibold'>Duchowość</span> - firma promuje
				duchowe aspekty podróży, zapewniając pielgrzymom możliwość
				głębokiego połączenia z ich wiarą i miejscami świętymi.
				Organizując pielgrzymki do miejsc o znaczeniu religijnym, biuro
				umożliwia uczestnikom odnalezienie wewnętrznego spokoju,
				odnowienie wiary oraz doświadczenie wspólnoty z innymi
				wierzącymi.
			</p>
			<p className='hidden lg:block xl:text-lg mb-5 w-[60%]'>
				<span className='font-semibold'>Doświadczenie</span> - Firma
				posiada wieloletnie doświadczenie w organizacji pielgrzymek,
				dzięki czemu może oferować wyjazdy dobrze zaplanowane,
				bezpieczne i w pełni odpowiadające potrzebom duchowym
				uczestników. Doświadczenie to umożliwia również rozwiązywanie
				wszelkich nieprzewidzianych sytuacji oraz zapewnienie komfortu i
				satysfakcji z podróży.
			</p>
			<p className='hidden lg:block xl:text-lg mb-10 w-[60%]'>
				<span className='font-semibold'>Wsparcie</span> - Biuro oferuje
				kompleksowe wsparcie na każdym etapie pielgrzymki, od momentu
				planowania przez realizację aż po powrót do domu. Wsparcie to
				obejmuje pomoc w przygotowaniach logistycznych, duchowych, a
				także zapewnienie opieki i asysty podczas samej podróży. Dzięki
				temu uczestnicy mogą skupić się na celach swojej pielgrzymki,
				mając pewność, że wszystkie aspekty organizacyjne są
				profesjonalnie obsługiwane.
			</p>
		</section>
	);
};

export default ValuesTrips;
