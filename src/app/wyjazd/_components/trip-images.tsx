import Image from 'next/image';
import React, { useState } from 'react';
import LoadingSpinner from '@/ui/loading-spinner';

interface TripImagesProps {
	srcImage: string;
	srcImage1: string;
	srcImage2: string;
	srcImage3: string;
	srcImage4: string;
}

const TripImages: React.FC<TripImagesProps> = ({
	srcImage,
	srcImage1,
	srcImage2,
	srcImage3,
	srcImage4,
}) => {
	const [isLoaded, setIsLoaded] = useState<Record<string, boolean>>({
		img0: false,
		img1: false,
		img2: false,
		img3: false,
		img4: false,
	});

	const handleLoad = (imgKey: string) => {
		setIsLoaded((prevState) => ({ ...prevState, [imgKey]: true }));
	};

	return (
		<div className='mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4'>
			<div className='md:col-span-1 flex'>
				{!isLoaded.img0 && (
					<div className=' inset-0 w-full bg-gray-300 flex justify-center items-center'>
						<LoadingSpinner />
					</div>
				)}
				<Image
					src={srcImage}
					alt='Duże zdjęcie'
					layout='responsive'
					width={500}
					height={700}
					objectFit='cover'
					onLoadingComplete={() => handleLoad('img0')}
				/>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
				{[srcImage1, srcImage2, srcImage3, srcImage4].map(
					(src, index) => {
						const imgKey = `img${index + 1}`;
						return (
							<div
								key={imgKey}
								className='relative w-full min-h-[250px]'
							>
								{!isLoaded[imgKey] && (
									<div className='absolute w-full h-full bg-gray-200 animate-pulse flex justify-center items-center'>
										<LoadingSpinner />
									</div>
								)}
								<Image
									src={src}
									alt={`Zdjęcie ${index + 1}`}
									layout='fill'
									objectFit='cover'
									onLoadingComplete={() => handleLoad(imgKey)}
								/>
							</div>
						);
					}
				)}
			</div>
		</div>
	);
};

export default TripImages;
