import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const ComentsSection = () => {
	return (
		<section className='relative my-10 w-[100vw] h-[65vh] overflow-hidden'>
			<Image
				src='/trip.jpg'
				alt='Zdjęcie pary podróżników w górach'
				sizes='100vw'
				fill
				priority
				className='block absolute object-cover z-[-3] '
			/>
			<a
				href='https://www.vecteezy.com/free-photos/mountain'
				rel='nofollow'
				className='hidden'
			>
				Mountain Stock photos by Vecteezy
			</a>
			<div className='absolute right-[6%] custom:right-[13%] lg:right-[17%] bottom-[17%]  flex flex-col p-6 sm:p-10 bg-white w-[18rem] sm:w-[20rem] lg:w-[25rem]'>
				<div className='flex flex-row mb-4'>
					<FaStar className='text-second-color' />
					<FaStar className='text-second-color' />
					<FaStar className='text-second-color' />
					<FaStar className='text-second-color' />
					<FaStar className='text-second-color' />
				</div>
				<a
					href={
						'https://www.google.com/search?sca_esv=40ad471a4e6b196f&sxsrf=ACQVn09gbVupi6TLoRXHWAT00e_HQCQjHw:1707824024426&uds=AMwkrPuZw9F283u9WEBJ7XyPHC5SsPkzxfy6GcKuJPFt74wXvxris2Trit5IQLpbMMKr4hGv-cT4QHwYfIhMyiqqma_YJFC5dEAnlmSXjNe48TfZH9iMrUJzVmPypcNvTU9MMTz7o4WG&si=AKbGX_pYNwgZ8bR4wYGfeDhNB2SEWOEwflc0Iy_SV8YABn1ydDJTUlw08bNKILGoglncv1iNiJA0yLuAKTsxd_H4DDesimC1O_nczO4w5MDA5Co5bSMW3cw%3D&q=Biuro+Pielgrzymkowo+-+Turystyczne+%22CREDO%22+Opinie&sa=X&ved=2ahUKEwiY4cGinKiEAxUWcPEDHSatBdwQ3PALegQIVRAF&biw=1680&bih=889&dpr=1'
					}
					target='_blank'
					rel='noopener noreferrer'
				>
					<p className='text-sm lg:text-lg'>
						Byłam na Kanonizacji J.P II. Biuro z Krosna zadbało o
						profesjonalną kadrę :Panowie kierowcy i wspaniała pod
						każdym względem Pani Małgosia.Ona też udostępniła
						pielgrzymom z Pruszkowa niesamowitych wrażeń .....
					</p>
				</a>
				<div>
					<div className='flex items-center justify-between mt-3'>
						<div className='w-[2rem] h-[2rem] sm:w-[4rem] sm:h-[4rem] bg-red-600 flex justify-center items-center rounded-full '>
							<p className='text-sm sm:text-2xl'>C</p>
						</div>
						<p>Opinia z Cylex Polska</p>
					</div>
				</div>
				<div className='absolute bg-white top-2 left-2 w-[100%] h-[100%] z-[-2] rotate-[-8deg]'></div>
				<div className='absolute bg-white top-2 left-2 w-[100%] h-[100%] z-[-2] rotate-[-10deg]'></div>
				<div className='absolute bg-white top-2 left-2 w-[100%] h-[100%] z-[-2] rotate-[-9deg]'></div>
			</div>
		</section>
	);
};

export default ComentsSection;
