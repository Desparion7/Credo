import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className='z-11 py-2 lg:py-6 bg-white text-main-color border-t-main-color border-t-2'>
			<div className='mx-2 custom:mx-auto text-center lg:text-left lg:mx-20'>
				<div className='flex flex-col lg:flex-row lg:justify-between justify-center '>
					<div className='flex flex-col items-center lg:w-[30%] lg:mb-5'>
						<div className='mb-2 w-[6rem] sm:w-[7rem]'>
							<Image
								src='/logo.png'
								alt='logo'
								width={135}
								height={81}
								priority
							/>
						</div>
						<p className='text-sm mx-2'>
							Odkryj niezapomniane pielgrzymki, wycieczki szkolne
							i turystyczne z Biurem Pielgrzymkowo-Turystycznym
							CREDO. Zanurz się w duchowej podróży, kulturowych
							odkryciach oraz edukacyjnych przygodach.
						</p>
					</div>
					<div className='flex flex-col my-5 lg:my-0'>
						<p className='font-semibold text-xl mb-2'>
							Przejdz do:
						</p>
						<Link href='/'>Strona Główna</Link>
						<Link href='/oferta'>Oferta</Link>
						<Link href='/kontakt'>Kontakt</Link>
						<Link href='/o-firmie'>O Firmie</Link>
					</div>
					<div className='flex flex-col mb-5'>
						<p className='font-semibold text-xl mb-2'>Biuro</p>
						<p>38-400 Krosno</p>
						<p>ul. Podwale 57</p>
					</div>
					<div className='flex flex-col mb-5'>
						<p className='font-semibold text-xl mb-2'>Kontakt</p>
						<p>Email: biuro@credotravel.pl</p>
						<p>Telefon: +48 660 731 797</p>
						<p>Telefon: +48 884 829 900</p>
					</div>
				</div>
			</div>
			<div className=' text-center border-t-2 border-main-color'>
				<div className='flex flex-col lg:flex-row gap-3 text-sm lg:text-lg justify-between lg:mx-20 mt-5'>
					<p>{currentYear} Credo All rights reserved</p>
					<p className=''>
						Strona wykonana przez firme Modezp{' '}
						<a
							href='https://www.modezp.com/'
							target='_blank'
							rel='noopener noreferrer'
							className='underline hover:text-white'
						>
							www.modezp.com
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
