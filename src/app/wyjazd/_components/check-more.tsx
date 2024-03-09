import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Trip } from '@/types/trip';

const CheckMore = ({ link, title, imageSrc, imageAlt }: Trip) => {
	return (
		<div>
			<Link href={link}>
				<div className='relative w-[300px] h-[150px]'>
					<Image
						src={imageSrc}
						layout='fill'
						objectFit='cover'
						alt={imageAlt}
						className='cursor-pointer'
					/>
				</div>
			</Link>
			<p className='mt-3 text-lg'>{title}</p>
		</div>
	);
};

export default CheckMore;
