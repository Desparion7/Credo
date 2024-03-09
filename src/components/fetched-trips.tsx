'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getTrips } from '@/lib/getTrips';
import TripPreview from '@/components/trip-preview';
import LoadingSpinner from '@/ui/loading-spinner';

const FetchedTrips = () => {
	const { data, isLoading, isError } = useQuery({
		queryFn: async () => await getTrips(),
		queryKey: ['trips'],
	});

	return (
		<>
			{isLoading && (
				<div className='xl:my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 xl:gap-10 justify-items-center'>
					<div className='mt-5 h-[250px] flex items-center justify-center flex-col gap-1'>
						<LoadingSpinner />
					</div>
					<div className='mt-5 h-[250px] flex items-center justify-center flex-col gap-1'>
						<LoadingSpinner />
					</div>
					<div className='mt-5 h-[250px] flex items-center justify-center flex-col gap-1'>
						<LoadingSpinner />
					</div>
					<div className='lg:hidden mt-5 h-[250px] flex items-center justify-center flex-col gap-1'>
						<LoadingSpinner />
					</div>
				</div>
			)}
			{data && (
				<div className='xl:my-5 sm:grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-3 2xl:gap-10 justify-items-center'>
					{[...data].sort(() => 0.5 - Math.random()).slice(0, 6).map((trip: any) => (
						<TripPreview
							key={trip.acf.unique_name}
							link={`/wyjazd?wycieczka=${trip.acf.unique_name}`}
							title={trip.acf.title_trip}
							imageSrc={trip.acf.main_photo}
							imageAlt={'zdjęcie z danej wycieczki'}
							dateStart={trip.acf.departure_date}
							dateEnd={trip.acf.arrival_date}
							name={trip.acf.title_trip}
							short={trip.acf.short_description}
							price={trip.acf.price}
							days={trip.acf.number_of_days}
						/>
					))}
				</div>
			)}
			{isError && (
				<div className='mt-3 text-lg'>
					Nie udało sie pobrać danych na temat wycieczek, spróbuj
					ponownie poźniej.
				</div>
			)}
		</>
	);
};

export default FetchedTrips;
