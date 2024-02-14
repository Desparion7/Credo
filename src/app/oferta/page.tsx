'use client';
import React, { Suspense } from 'react';
import TripPreview from '@/components/trip-preview';
import ContactMap from '../components/contact-map';
import AllTripsFilter from './components/all-trips-filter';

const Offert = () => {
	return (
		<section className='relative container mx-auto w-[100%] xl:pb-10 px-2 xl:px-5'>
			<div className='flex justify-center lg:justify-end w-[100%] mb-5'>
				<div className='inline justify-end bg-main-color text-second-color py-2 mt-5 lg:mt-0 px-4 text-sm lg:text-lg'>
					<span className='mr-1 md:mr-5'>+(48) 660 731 797</span>{' '}
					<span>+(48) 13 43 661 20</span>
				</div>
			</div>
			<Suspense fallback={<div>Loading...</div>}>
				<AllTripsFilter />
			</Suspense>
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
