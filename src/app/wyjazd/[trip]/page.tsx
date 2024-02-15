'use client';
import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar } from 'react-icons/fi';
import TripImages from './components/trip-images';
import TripPlan from './components/trip-plan';
import { useQuery } from '@tanstack/react-query';
import { getTrips } from '@/lib/getTrips';
import LoadingSpinner from '@/ui/loading-spinner';

const Trip = ({ params }: { params: { trip: string } }) => {
	const [currentTrip, setCurrentTrip] = useState<any>();

	const { data, isLoading, isError } = useQuery({
		queryFn: async () => await getTrips(),
		queryKey: ['trips'],
	});

	useMemo(() => {
		if (data) {
			const selectedData = data?.find(
				(item: any) =>
					item.acf.unikatowa_nazwa_wycieczki_napisana_z_pauzami ===
					params.trip
			);
			setCurrentTrip(selectedData);
		}
	}, [data, params.trip]);
	console.log(currentTrip);
	return (
		<section className='relative container mx-auto w-[100%] xl:pb-10 px-2 xl:px-5'>
			<div className='flex justify-center lg:justify-end w-[100%] mb-5'>
				<div className='inline justify-end bg-main-color text-second-color py-2 mt-5 lg:mt-0 px-4 text-sm lg:text-lg'>
					<span className='mr-1 md:mr-5'>+(48) 660 731 797</span>{' '}
					<span>+(48) 13 43 661 20</span>
				</div>
			</div>
			{isLoading && (
				<div className='flex justify-center items-center w-[100%] min-h-[85vh]'>
					<LoadingSpinner />
				</div>
			)}
			{currentTrip && (
				<>
					<motion.div
						className='flex flex-col lg:flex-row justify-between'
						initial={{ opacity: 0, translateY: '50px' }}
						whileInView={{ opacity: 1, translateY: '0' }}
						transition={{ ease: 'easeOut', duration: 0.4 }}
						viewport={{
							once: true,
						}}
					>
						<div className='flex flex-col items-center gap-3 lg:justify-end lg:items-start'>
							<h1 className='text-xl xl:text-3xl font-semibold'>
								{currentTrip.acf.tytuł_wycieczki}
							</h1>
							<p className='xl:text-xl text-center lg:text-start'>
								{currentTrip.acf.krotki_opis_na_karcie}
							</p>
						</div>
						<div className='flex flex-col xl:flex-row items-center xl:items-end xl:justify-around gap-3 xl:gap-10 xl:w-[50%]'>
							<div className='flex items-center mt-2'>
								<FiCalendar className='text-lg xl:text-2xl mr-2' />
								{currentTrip.acf.data_wyjazdu &&
								currentTrip.acf.data_przyjazdu ? (
									<p className='xl:text-lg'>{`${currentTrip.acf.data_wyjazdu}-${currentTrip.acf.data_przyjazdu} (${currentTrip.acf.numberOfDays} dni)`}</p>
								) : (
									<p className='xl:text-lg'>
										Organizacja na zamówienie
									</p>
								)}
							</div>
							<motion.div
								className='bg-second-color px-6 py-3 text-lg xl:text-xl font-semibold lg:w-auto'
								whileInView={{ scale: 1.05 }}
								transition={{ duration: 0.6 }}
							>
								{currentTrip.acf.cena}
							</motion.div>
						</div>
					</motion.div>
					<TripImages
						srcImage={currentTrip.acf.zdjecie_glowne}
						srcImage1={currentTrip.acf.zdjecia_dodatkowe_1}
						srcImage2={currentTrip.acf.zdjecia_dodatkowe_2}
						srcImage3={currentTrip.acf.zdjecia_dodatkowe_3}
						srcImage4={currentTrip.acf.zdjecia_dodatkowe_4}
					/>
					<TripPlan
						plan={currentTrip.acf.Plan}
						details={currentTrip.acf.szczegoly}
						moreInfo={currentTrip.acf.informacje_dodatkowe}
					/>
				</>
			)}
			{isError && (
				<div className='mt-3 text-lg'>
					Nie udało sie pobrać danej wycieczki, spróbuj ponownie
					poźniej.
				</div>
			)}
		</section>
	);
};

export default Trip;
