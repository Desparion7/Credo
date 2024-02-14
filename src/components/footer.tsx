import Link from 'next/link';
import React from 'react';
import { FaMobileScreen } from 'react-icons/fa6';

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className=' z-11 py-2 lg:py-4 bg-main-color text-second-color'>
			<div className='custom:container flex flex-col sm:flex-row text-sm lg:text-lg justify-between mx-10 sm:mx-20 text-center '>
				<p>{currentYear} Credo All rights reserved</p>
				<p className=''>
					Strona wykonana przez firme Modezp{' '}
					<a
						href='https://www.modezp.com/'
						className='underline hover:text-white'
					>
						www.modezp.com
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
