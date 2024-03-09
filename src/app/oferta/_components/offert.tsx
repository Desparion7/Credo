'use client';
import React, { Suspense, useMemo, useState } from 'react';
import TripPreview from '@/components/trip-preview';
import ContactMap from '@/app/components/contact-map';
import AllTripsFilter from './all-trips-filter';
import { useSearchParams } from 'next/navigation';
import { getTrips } from '@/lib/getTrips';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '@/ui/loading-spinner';

const Offert = () => {
	const searchParams = useSearchParams();
	const tripType = searchParams.get('rodzaj');

	const [activeTripsGroup, setActiveTripsGroup] = useState<any>();

	const { data, isLoading, isError } = useQuery({
		queryFn: async () => await getTrips(),
		queryKey: ['trips'],
	});

	useMemo(() => {
		if (data) {
			const filteredData = data?.filter((item: any) =>
				!tripType || tripType.length === 0
					? true
					: item.acf.type.includes(tripType)
			);
			setActiveTripsGroup(filteredData);
		}
	}, [data, tripType]);

	return (
		<section className='relative container mx-auto w-[100%] xl:pb-10 px-2 custom:px-0 xl:px-5'>
			<div className='flex justify-center lg:justify-end w-[100%] mb-5'>
				<div className='inline justify-end bg-main-color text-second-color py-2 mt-5 lg:mt-0 px-4 text-sm lg:text-lg'>
					<span className='mr-1 md:mr-5'>+(48) 660 731 797</span>{' '}
					<span>+(48) 13 43 661 20</span>
				</div>
			</div>
			<Suspense fallback={<div>Loading...</div>}>
				<AllTripsFilter tripType={tripType} />
			</Suspense>
			<div className='xl:my-5 sm:grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-3 2xl:gap-10 justify-items-center'>
				{isLoading && (
					<>
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
					</>
				)}
				{activeTripsGroup && activeTripsGroup.length > 0
					? activeTripsGroup.map((trip: any) => (
							<TripPreview
								key={trip.acf.unique_name}
								link={`/wyjazd?wycieczka=${trip.acf.unique_name}`}
								imageSrc={trip.acf.main_photo}
								imageAlt={'kościół w licheniu'}
								dateStart={trip.acf.departure_date}
								dateEnd={trip.acf.arrival_date}
								name={trip.acf.title_trip}
								short={trip.acf.short_description}
								price={trip.acf.price}
								days={trip.acf.number_of_days}
								title={trip.acf.title_trip}
							/>
					  ))
					: !isLoading && (
							<p className='absolute text-lg text-center mt-3'>
								Nie udało się znaleść wycieczek w danej
								kategorii
							</p>
					  )}
				{isError && (
					<div className='mt-3 text-lg'>
						Nie udało sie pobrać danych na temat wycieczek, spróbuj
						ponownie poźniej.
					</div>
				)}
			</div>
			<ContactMap />
		</section>
	);
};

export default Offert;
