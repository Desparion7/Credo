'use client';
import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar } from 'react-icons/fi';
import TripImages from './trip-images';
import TripPlan from './trip-plan';
import { useQuery } from '@tanstack/react-query';
import { getTrips } from '@/lib/getTrips';
import LoadingSpinner from '@/ui/loading-spinner';
import { useSearchParams } from 'next/navigation';
import CheckMore from './check-more';

const Trip = () => {
	const searchParams = useSearchParams();
	const trip = searchParams.get('wycieczka');

	// const [currentTrip, setCurrentTrip] = useState<any>();
	const { data, isLoading, isError } = useQuery({
		queryFn: async () => await getTrips(),
		queryKey: ['trips'],
	});

	// useMemo(() => {
	// 	if (data) {
	// 		const selectedData = data?.find(
	// 			(item: any) => item.acf.unique_name === trip
	// 		);
	// 		setCurrentTrip(selectedData);
	// 	}
	// }, [data, trip]);
	const currentTrip = data?.find(
		(item: any) => item.acf.unique_name === trip
	);

	return (
		<section className='relative container custom:mx-auto w-[100%] xl:pb-10 sm:px-2 xl:px-5'>
			<div className='flex justify-center lg:justify-end w-[100%] mb-5'>
				<div className='inline justify-end bg-main-color text-second-color py-2 mt-5 lg:mt-0 px-4 text-sm lg:text-lg'>
					<span className='mr-1 md:mr-5'>+(48) 660 731 797</span>
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
							<h1 className='text-xl xl:text-3xl font-semibold text-center sm:text-left'>
								{currentTrip.acf.title_trip}
							</h1>
							<p className='xl:text-xl text-center lg:text-start'>
								{currentTrip.acf.short_description}
							</p>
						</div>
						<div className='flex flex-col xl:flex-row items-center xl:items-end xl:justify-around gap-3 xl:gap-10 xl:w-[50%]'>
							<div className='flex items-center mt-2'>
								<FiCalendar className='text-lg xl:text-2xl mr-2' />
								{currentTrip.acf.departure_date &&
								currentTrip.acf.arrival_date ? (
									<p className='xl:text-lg'>{`${currentTrip.acf.departure_date}-${currentTrip.acf.arrival_date} (${currentTrip.acf.number_of_days} dni)`}</p>
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
								{currentTrip.acf.price}
							</motion.div>
						</div>
					</motion.div>
					<TripImages
						srcImage={currentTrip.acf.main_photo}
						srcImage1={currentTrip.acf.additional_photo_1}
						srcImage2={currentTrip.acf.additional_photo_2}
						srcImage3={currentTrip.acf.additional_photo_3}
						srcImage4={currentTrip.acf.additional_photo_4}
					/>
					<div className='flex flex-row'>
						<TripPlan
							plan={currentTrip.acf.plan}
							details={currentTrip.acf.trip_details}
							moreInfo={currentTrip.acf.additional_information}
						/>
						<div className='hidden lg:flex flex-col gap-3 mt-10'>
							<p className='text-2xl'>Zobacz również:</p>
							{[...data]
								.filter(
									(item: any) => item.acf.unique_name !== trip
								)
								.sort(() => 0.5 - Math.random())
								.slice(0, 3)
								.map((trip: any) => (
									<CheckMore
										key={trip.acf.unique_name}
										link={`/wyjazd?wycieczka=${trip.acf.unique_name}`}
										title={trip.acf.title_trip}
										imageSrc={trip.acf.main_photo}
										imageAlt={'zdjęcie z danej wycieczki'}
										name={trip.acf.title_trip}
										price={trip.acf.price}
										days={trip.acf.number_of_days}
									/>
								))}
						</div>
					</div>
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
