import Image from 'next/image';
import React from 'react';

const TripImages = ({
	srcImage,
	srcImage1,
	srcImage2,
	srcImage3,
	srcImage4,
}: {
	srcImage: string;
	srcImage1: string;
	srcImage2: string;
	srcImage3: string;
	srcImage4: string;
}) => {
	return (
		<div className='mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4'>
			<div className='md:col-span-1 flex'>
				<Image
					src={srcImage}
					alt='Duże zdjęcie'
					layout='responsive'
					width={500}
					height={700}
					objectFit='cover'
					className='cursor-pointer'
				/>
			</div>
			<div className=' grid grid-cols-1 sm:grid-cols-2 gap-4'>
				<div className='relative w-[100% h-[250px]'>
					<Image
						src={srcImage1}
						alt='Zdjęcie 1'
						layout='fill'
						objectFit='cover'
						className='cursor-pointer'
					/>
				</div>
				<div className='relative  w-[100% h-[250px]'>
					<Image
						src={srcImage2}
						alt='Zdjęcie 2'
						layout='fill'
						objectFit='cover'
						className='cursor-pointer'
					/>
				</div>
				<div className='relative w-[100%] h-[250px]'>
					<Image
						src={srcImage3}
						alt='Zdjęcie 3'
						layout='fill'
						objectFit='cover'
						className='cursor-pointer'
					/>
				</div>
				<div className='relative w-[100% h-[250px]'>
					<Image
						src={srcImage4}
						alt='Zdjęcie 4'
						layout='fill'
						objectFit='cover'
						className='cursor-pointer'
					/>
				</div>
			</div>
		</div>
	);
};

export default TripImages;
