'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const ValuesTrips = () => {
	return (
		<section className='relative container mx-auto my-10 xl:my-20 w-[100%] px-2 xl:px-5'>
			<motion.div
				className='flex flex-col lg:flex-row gap-5 mb-5 text-md text-center xl:text-start items-center lg:items-start '
				initial={{ opacity: 0, translateY: '50px' }}
				whileInView={{ opacity: 1, translateY: '0' }}
				transition={{ ease: 'easeOut', duration: 0.4 }}
				viewport={{
					once: true,
				}}
			>
				<Image
					src='/value1.jpg'
					width={140}
					height={173}
					alt='symbol duchowosći'
					className='w-[5rem] xl:min-w-[8rem]'
				/>
				<p className='xl:text-lg'>
					<span className='font-semibold'>Duchowość</span> - Firma
					promuje duchowe aspekty podróży, zapewniając pielgrzymom
					możliwość głębokiego połączenia z ich wiarą i miejscami
					świętymi. Organizując pielgrzymki do miejsc o znaczeniu
					religijnym, biuro umożliwia uczestnikom odnalezienie
					wewnętrznego spokoju, odnowienie wiary oraz doświadczenie
					wspólnoty z innymi wierzącymi.
				</p>
			</motion.div>
			<motion.div
				className='flex flex-col lg:flex-row gap-5 mb-5 text-md items-center xl:text-start lg:items-start text-center'
				initial={{ opacity: 0, translateY: '50px' }}
				whileInView={{ opacity: 1, translateY: '0' }}
				transition={{ ease: 'easeOut', duration: 0.4 }}
				viewport={{
					once: true,
				}}
			>
				<Image
					src='/value2.jpg'
					width={140}
					height={173}
					alt='symbol duchowosći'
					className='w-[5rem] xl:min-w-[8rem]'
				/>

				<p className=' xl:text-lg'>
					<span className='font-semibold'>Doświadczenie </span> -
					Firma posiada wieloletnie doświadczenie w organizacji
					pielgrzymek, dzięki czemu może oferować wyjazdy dobrze
					zaplanowane, bezpieczne i w pełni odpowiadające potrzebom
					duchowym uczestników. Doświadczenie to umożliwia również
					rozwiązywanie wszelkich nieprzewidzianych sytuacji oraz
					zapewnienie komfortu i satysfakcji z podróży.
				</p>
			</motion.div>
			<motion.div
				className='flex flex-col lg:flex-row gap-5 mb-5 text-md items-center lg:items-start text-center xl:text-start'
				initial={{ opacity: 0, translateY: '50px' }}
				whileInView={{ opacity: 1, translateY: '0' }}
				transition={{ ease: 'easeOut', duration: 0.4 }}
				viewport={{
					once: true,
				}}
			>
				<Image
					src='/value3.jpg'
					width={140}
					height={173}
					alt='symbol duchowosći'
					className='w-[5rem] xl:min-w-[8rem]'
				/>
				<p className='xl:text-lg'>
					<span className='font-semibold'>Wsparcie </span> - Biuro
					oferuje kompleksowe wsparcie na każdym etapie pielgrzymki,
					od momentu planowania przez realizację aż po powrót do domu.
					Wsparcie to obejmuje pomoc w przygotowaniach logistycznych,
					duchowych, a także zapewnienie opieki i asysty podczas samej
					podróży. Dzięki temu uczestnicy mogą skupić się na celach
					swojej pielgrzymki, mając pewność, że wszystkie aspekty
					organizacyjne są profesjonalnie obsługiwane.
				</p>
			</motion.div>
		</section>
	);
};

export default ValuesTrips;
