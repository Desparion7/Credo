'use client';
import React from 'react';

const Trip = ({ params }: { params: { trip: string } }) => {
	console.log(params.trip);

	return <div>Trip</div>;
};

export default Trip;
