'use client';
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { LinkButton } from '../components/actual-trips';
import Link from 'next/link';
import { motion } from 'framer-motion';
import TripPreview from '@/components/trip-preview';
import ContactMap from '../components/contact-map';

const Offert = () => {
	const searchParams = useSearchParams();
	const tripType = searchParams.get('rodzaj');

	return (
		<section className='relative container mx-auto w-[100%] xl:pb-10 px-2 xl:px-5'>
			<div className='flex justify-center lg:justify-end w-[100%] mb-5'>
				<div className='inline justify-end bg-main-color text-second-color py-2 mt-5 lg:mt-0 px-4 text-sm lg:text-lg'>
					<span className='mr-1 md:mr-5'>+(48) 660 731 797</span>{' '}
					<span>+(48) 13 43 661 20</span>
				</div>
			</div>
			<motion.div
				className='flex flex-col lg:flex-row justify-between  border-b-2 border-b-main-color pb-2'
				initial={{ opacity: 0, translateY: '50px' }}
				whileInView={{ opacity: 1, translateY: '0' }}
				transition={{ ease: 'easeOut', duration: 0.4 }}
				viewport={{
					once: true,
				}}
			>
				<Suspense fallback={<div>Loading...</div>}>
					<div className='flex flex-col items-center gap-3 lg:justify-end lg:items-start'>
						<h2 className='text-xl xl:text-3xl font-semibold'>
							{tripType
								? tripType
										.replace(/-/g, ' ')
										.replace(/^\w/, (c) => c.toUpperCase())
								: 'Wszystkie wyjazdy'}
						</h2>
					</div>
				</Suspense>
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
						<LinkButton
							link={'/oferta?rodzaj=wycieczki-zagraniczne'}
						>
							Wycieczki Zagraniczne
						</LinkButton>
						<LinkButton link={'/oferta?rodzaj=wycieczki-szkolne'}>
							Wycieczki Szkolne
						</LinkButton>
					</div>
				</div>
			</motion.div>
			<div className='xl:my-10 pb-10 xl:pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 xl:gap-10 justify-items-center'>
				<TripPreview
					link={'/oferta/lichen'}
					imageSrc={'/lichen.jpg'}
					imageAlt={'kościół w licheniu'}
					data={'02.03.2024 -12.03.2024 (10dni)'}
					name={'LICHEŃ - NIEPOKALANÓW'}
					short={
						'Perełka Polskich Pielgrzymek! Polskie duchowe odrodzenie'
					}
					price={'Cena 480 zł/os.'}
				/>
				<TripPreview
					link={'/oferta/lichen'}
					imageSrc={'/bazylika.jpg'}
					imageAlt={'bazylika św. Piotra'}
					data={'02.10.2024 -02.13.2024 (3dni)'}
					name={'WŁOCHY - ŚLADAMI ŚWIĘTYCH'}
					short={
						'Polskie Sanktuaria: Skarby Wiary i Tradycji! Odkryj duchowe dziedzictwo'
					}
					price={'Cena 2370 zł/os.'}
				/>
				<TripPreview
					link={'/oferta/lichen'}
					imageSrc={'/bazylika.jpg'}
					imageAlt={'bazylika św. Piotra'}
					data={'02.10.2024 -02.13.2024 (3dni)'}
					name={'WŁOCHY - ŚLADAMI ŚWIĘTYCH'}
					short={
						'Polskie Sanktuaria: Skarby Wiary i Tradycji! Odkryj duchowe dziedzictwo'
					}
					price={'Cena 2370 zł/os.'}
				/>
				<TripPreview
					link={'/oferta/lichen'}
					imageSrc={'/lichen.jpg'}
					imageAlt={'kościół w licheniu'}
					data={'02.03.2024 -12.03.2024 (10dni)'}
					name={'LICHEŃ - NIEPOKALANÓW'}
					short={
						'Perełka Polskich Pielgrzymek! Polskie duchowe odrodzenie'
					}
					price={'Cena 480 zł/os.'}
				/>
				<TripPreview
					link={'/oferta/lichen'}
					imageSrc={'/lichen.jpg'}
					imageAlt={'kościół w licheniu'}
					data={'02.03.2024 -12.03.2024 (10dni)'}
					name={'LICHEŃ - NIEPOKALANÓW'}
					short={
						'Perełka Polskich Pielgrzymek! Polskie duchowe odrodzenie'
					}
					price={'Cena 480 zł/os.'}
				/>
				<TripPreview
					link={'/oferta/lichen'}
					imageSrc={'/lichen.jpg'}
					imageAlt={'kościół w licheniu'}
					data={'02.03.2024 -12.03.2024 (10dni)'}
					name={'LICHEŃ - NIEPOKALANÓW'}
					short={
						'Perełka Polskich Pielgrzymek! Polskie duchowe odrodzenie'
					}
					price={'Cena 480 zł/os.'}
				/>
			</div>
			<ContactMap />
		</section>
	);
};

export default Offert;
