import Image from 'next/image';
import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { MdOutlineMailOutline } from 'react-icons/md';

const ContactMap = () => {
	return (
		<section className='relative container mx-auto w-[100%] py-5 xl:my-10 px-2 xl:px-5'>
			<div className='flex flex-col lg:flex-row'>
				<div className='xl:w-[50%] flex flex-col items-center lg:items-start font-semibold'>
					<div className='ml-[1rem] sm:ml-0 mr-2 w-[6rem] sm:w-[7rem] h-auto'>
						<Image
							src='/logo.PNG'
							alt='logo'
							width={135}
							height={81}
							priority
						/>
					</div>
					<h2 className='text-2xl xl:text-3xl my-2 font-semibold text-center lg:text-start'>
						Kontakt
					</h2>
					<div className='flex gap-2 my-2 items-center'>
						<FaMapMarkerAlt className='text-3xl' />
						<div className='text-center lg:text-start'>
							<p className='text-lg'>
								38-400 Krosno ul. Podwale 57
							</p>
							<p className='text-lg'>
								Biuro czynne: Poniedziałek – Piątek, 8:00 –
								16:00
							</p>
						</div>
					</div>
					<div className='flex gap-3 my-2 justify-start items-center'>
						<FaPhone className='text-2xl' />
						<div>
							<p className='text-lg'>(48) 13 43 661 20</p>
							<p className='text-lg'>(48) 660 731 797</p>
						</div>
					</div>
					<div className='flex gap-3 my-2'>
						<MdOutlineMailOutline className='text-2xl' />
						<p className='text-lg'>biuro@credokrosno.pl</p>
					</div>
				</div>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.35330888936!2d21.75992581512524!3d49.69506307843633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473c4f4b3fe4f8f1%3A0x309f15a56a31804e!2sBiuro%20Pielgrzymkowo%20-%20Turystyczne%20%22CREDO%22!5e0!3m2!1spl!2spl!4v1707827411919!5m2!1spl!2spl'
					loading='lazy'
					allowFullScreen={true}
					referrerPolicy='no-referrer-when-downgrade'
					className='w-[100%] min-h-[100%] '
				></iframe>
			</div>
		</section>
	);
};

export default ContactMap;
