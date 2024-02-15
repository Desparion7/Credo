import React, { Suspense } from 'react';
import Offert from './_components/offert';
import LoadingSpinner from '@/ui/loading-spinner';

const page = () => {
	return (
		<>
			<Suspense
				fallback={
					<div className='flex justify-center items-center w-[100%] min-h-[85vh]'>
						<div className='lg:hidden mt-5 h-[250px] flex items-center justify-center flex-col gap-1'>
							<LoadingSpinner />
						</div>
					</div>
				}
			>
				<Offert />
			</Suspense>
		</>
	);
};

export default page;
