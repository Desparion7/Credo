import React, { Suspense } from 'react';
import Offert from './_components/offert';

const page = () => {
	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<Offert />
			</Suspense>
		</>
	);
};

export default page;
