import Image from 'next/image';
import React from 'react';

const page = () => {
	return (
		<section className='relative container mx-auto w-[100%] py-10 px-2 xl:px-5 min-h-[85vh]'>
			<div className='flex gap-5'>
				<div className='flex flex-col gap-3 w-[45%]'>
					<h2 className='text-xl xl:text-3xl font-semibold'>O nas</h2>
					<p className='xl:text-xl border-b-2 border-b-main-color pb-3'>
						Twoja podróż jest sercem naszego świata!
					</p>
					<p className='xl:text-lg font-semibold '>
						Od wielu lat specjalizujemy się w tworzeniu
						niezapomnianych przygód, podróży, ekspedycji i
						pielgrzymek dla klientów indywidualnych, zorganizowanych
						grup, edukacyjnych instytucji oraz osób duchownych.

					</p>
					<p className=' xl:text-lg leading-tight'>
						Naszą misją jest kreowanie niezapomnianych doświadczeń
						podróżniczych. Jako zespół pełen pasji do odkrywania
						nowych miejsc i kultury gościnności, łączymy pasje z
						wieloletnim doświadczeniem w branży turystycznej.
					</p>
					<p className=' xl:text-lg leading-tight'>
						Stawiamy na jakość i indywidualne podejście do każdego
						klienta, dążąc do tego, by każda podróż była nie tylko
						wypoczynkiem, ale również inspirującą podróżą odkrywczą.
						Naszym celem jest, abyś podróżując z nami, mógł nie
						tylko odpocząć, ale również przeżyć coś wyjątkowego, co
						zostanie z Tobą na długo po powrocie do domu. 
					</p>
				</div>
				<div className='w-[50%]'>
					<Image
						src='/about-us.jpg'
						width={1980}
						height={1319}
						alt='zdjęcie'
					/>
				</div>
			</div>
		</section>
	);
};

export default page;
