import Image from 'next/image';
import React from 'react';
import { FiCalendar } from 'react-icons/fi';
import { Trip } from '@/types/trip';
import { motion } from 'framer-motion';
import Link from 'next/link';

const TripPreview = ({
	link,
	imageSrc,
	imageAlt,
	dateStart,
	dateEnd,
	short,
	price,
	days,
}: Trip) => {
	return (
		<div className='mt-5 flex flex-col gap-1'>
			<div className='overflow-hidden cursor-pointer'>
				<Link href={link}>
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
				</Link>
			</div>
			<div className='flex mt-2'>
				<FiCalendar className='text-2xl mr-2' />
				{dateStart && dateEnd ? (
					<p className='xl:text-lg'>{`${dateStart}-${dateEnd} (${days} dni)`}</p>
				) : (
					<p className='xl:text-lg'>Organizacja na zamówienie</p>
				)}
			</div>
			<Link href={link}>
				<h3 className='font-semibold text-xl xl:text-2xl underline decoration-second-color decoration-4 underline-offset-4 cursor-pointer hover:text-blue-700'>
					LICHEŃ - NIEPOKALANÓW
				</h3>
			</Link>
			<p className='text-sm'>{short}</p>
			<p className='xl:text-2xl font-semibold'>{`Cena ${price}.`}</p>
		</div>
	);
};

export default TripPreview;
