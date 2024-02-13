import Image from 'next/image';
import React from 'react';
import { FiCalendar } from 'react-icons/fi';
import { Trip } from '@/types/trip';
import { motion } from 'framer-motion';

const TripPreview = ({
	imageSrc,
	imageAlt,
	data,
	name,
	short,
	price,
}: Trip) => {
	return (
		<div className='mt-5 flex flex-col gap-1'>
			<div className='overflow-hidden cursor-pointer'>
				<motion.div
					initial={{ scale: 1 }}
					whileHover={{ scale: 1.2 }}
					transition={{ duration: 0.3 }}
				>
					<Image
						src={imageSrc}
						width={500}
						height={700}
						alt={imageAlt}
						className='cursor-pointer'
					/>
				</motion.div>
			</div>
			<div className='flex mt-2'>
				<FiCalendar className='text-2xl mr-2' />
				<p className='xl:text-lg'>02.03.2024 -12.03.2024 (10dni)</p>
			</div>
			<h3 className='font-semibold text-xl xl:text-2xl underline decoration-second-color decoration-4 underline-offset-4'>
				LICHEŃ - NIEPOKALANÓW
			</h3>
			<p className='text-sm'>
				Perełka Polskich Pielgrzymek! Polskie duchowe odrodzenie
			</p>
			<p className='xl:text-2xl font-semibold'>Cena 480 zł/os.</p>
		</div>
	);
};

export default TripPreview;
