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
					: item.acf.rodzaj.includes(tripType)
			);
			setActiveTripsGroup(filteredData);
		}
	}, [data, tripType]);

	return (
		<section className='relative container mx-auto w-[100%] xl:pb-10 px-2 xl:px-5'>
			<div className='flex justify-center lg:justify-end w-[100%] mb-5'>
				<div className='inline justify-end bg-main-color text-second-color py-2 mt-5 lg:mt-0 px-4 text-sm lg:text-lg'>
					<span className='mr-1 md:mr-5'>+(48) 660 731 797</span>{' '}
					<span>+(48) 13 43 661 20</span>
				</div>
			</div>
			<Suspense fallback={<div>Loading...</div>}>
				<AllTripsFilter tripType={tripType} />
			</Suspense>
			<div className='xl:my-10 pb-10 xl:pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 xl:gap-10 justify-items-center'>
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
								key={
									trip.acf
										.unikatowa_nazwa_wycieczki_napisana_z_pauzami
								}
								link={`/wyjazd/${trip.acf.unikatowa_nazwa_wycieczki_napisana_z_pauzami}`}
								imageSrc={trip.acf.zdjecie_glowne}
								imageAlt={'kościół w licheniu'}
								dateStart={trip.acf.data_wyjazdu}
								dateEnd={trip.acf.data_przyjazdu}
								name={trip.acf.tytuł_wycieczki}
								short={trip.acf.krotki_opis_na_karcie}
								price={trip.acf.cena}
								days={trip.acf.numberOfDays}
								title={trip.acf.tytuł_wycieczki}
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
