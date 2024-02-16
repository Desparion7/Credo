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
				<div className='xl:my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 xl:gap-10 justify-items-center'>
					{data?.map((trip: any) => (
						<TripPreview
							key={
								trip.acf
									.unikatowa_nazwa_wycieczki_napisana_z_pauzami
							}
							link={`/wyjazd/${trip.acf.unikatowa_nazwa_wycieczki_napisana_z_pauzami}`}
							title={trip.acf.tytuł_wycieczki}
							imageSrc={trip.acf.zdjecie_glowne}
							imageAlt={'kościół w licheniu'}
							dateStart={trip.acf.data_wyjazdu}
							dateEnd={trip.acf.data_przyjazdu}
							name={trip.acf.tytuł_wycieczki}
							short={trip.acf.krotki_opis_na_karcie}
							price={trip.acf.cena}
							days={trip.acf.numberOfDays}
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
