import React from 'react';
import { useSearchParams } from 'next/navigation';
import { LinkButton } from '@/app/components/actual-trips';
import Link from 'next/link';
import { motion } from 'framer-motion';

const AllTripsFilter = () => {
	const searchParams = useSearchParams();
	const tripType = searchParams.get('rodzaj');
	return (
		<motion.div
			className='flex flex-col lg:flex-row justify-between  border-b-2 border-b-main-color pb-2'
			initial={{ opacity: 0, translateY: '50px' }}
			whileInView={{ opacity: 1, translateY: '0' }}
			transition={{ ease: 'easeOut', duration: 0.4 }}
			viewport={{
				once: true,
			}}
		>
			<div className='flex flex-col items-center gap-3 lg:justify-end lg:items-start'>
				<h2 className='text-xl xl:text-3xl font-semibold'>
					{tripType
						? tripType
								.replace(/-/g, ' ')
								.replace(/^\w/, (c) => c.toUpperCase())
						: 'Wszystkie wyjazdy'}
				</h2>
			</div>

			<div className='flex flex-col justify-center items-center lg:items-start gap-3'>
				<Link href='/oferta'>
					<motion.button
						className='bg-second-color px-6 py-3 mb-2 mt-5 xl:text-xl font-semibold'
						whileHover={{ scale: 1.05 }}
					>
						Pełna oferta 2024!
					</motion.button>
				</Link>

				<div className='flex flex-col lg:flex-row gap-3 xl:gap-5 2xl:gap-10'>
					<LinkButton link={'/oferta?rodzaj=pielgrzymki'}>
						Pielgrzymki
					</LinkButton>
					<LinkButton link={'/oferta?rodzaj=wycieczki-krajowe'}>
						Wycieczki Krajowe
					</LinkButton>
					<LinkButton link={'/oferta?rodzaj=wycieczki-zagraniczne'}>
						Wycieczki Zagraniczne
					</LinkButton>
					<LinkButton link={'/oferta?rodzaj=wycieczki-szkolne'}>
						Wycieczki Szkolne
					</LinkButton>
				</div>
			</div>
		</motion.div>
	);
};

export default AllTripsFilter;
