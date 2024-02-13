'use client';
import TripPreview from '@/components/trip-preview';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const LinkButton = ({
	children,
	link,
}: {
	children: React.ReactNode;
	link: string;
}) => {
	return (
		<Link href={link}>
			<button className='p-1 xl:p-2 2xl:p-3 w-[100%]  text-sm xl:text-lg font-semibold hover:bg-amber-100 bg-gray-200 '>
				{children}
			</button>
		</Link>
	);
};

const ActualTrip = () => {
	return (
		<section className='relative container mx-auto w-[100%] py-10 xl:py-20 px-2 xl:px-5'>
			<div className='flex flex-col lg:flex-row justify-between  border-b-2 border-b-main-color pb-2'>
				<div className='flex flex-col items-center gap-3 lg:justify-end lg:items-start'>
					<h2 className='text-xl xl:text-3xl font-semibold'>
						Aktualne wyjazdy
					</h2>
					<p className='xl:text-xl'>
						Odkryj co dla Ciebie przygotowaliśmy
					</p>
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
					<div className='flex flex-col lg:flex-row gap-2 xl:gap-5 2xl:gap-10'>
						<LinkButton link={'/oferta/pielgrzymki'}>
							Pielgrzymki
						</LinkButton>
						<LinkButton link={'/oferta/wycieczki-krajowe'}>
							Wycieczki Krajowe
						</LinkButton>
						<LinkButton link={'/oferta/wycieczki-zagraniczne'}>
							Wycieczki Zagraniczne
						</LinkButton>
						<LinkButton link={'/oferta/wycieczki-szkolne'}>
							Wycieczki Szkolne
						</LinkButton>
					</div>
				</div>
			</div>
			<div className='xl:my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 xl:gap-10 justify-items-center'>
				<TripPreview
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
		</section>
	);
};

export default ActualTrip;
