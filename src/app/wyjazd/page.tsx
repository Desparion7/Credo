import React, { Suspense } from 'react';
import Trip from './_components/trip';
import LoadingSpinner from '@/ui/loading-spinner';

const Page = () => {
	return (
		<Suspense
			fallback={
				<div className='flex justify-center items-center w-[100%] min-h-[85vh]'>
					<div className='lg:hidden mt-5 h-[250px] flex items-center justify-center flex-col gap-1'>
						<LoadingSpinner />
					</div>
				</div>
			}
		>
			<Trip />
		</Suspense>
	);
};

export default Page;
