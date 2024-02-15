import React, { useState } from 'react';
import { GrDocument } from 'react-icons/gr';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { GoGear } from 'react-icons/go';
import { IoMdInformationCircleOutline } from 'react-icons/io';

export const DayDescription = ({
	day,
	title,
	description,
}: {
	day: string;
	title: string;
	description: string;
}) => {
	const [showDetail, setShowDetails] = useState(false);

	const variants = {
		open: { opacity: 1, height: 'auto' },
		collapsed: { opacity: 0, height: 0 },
	};

	return (
		<div>
			<div className='flex items-center gap-2 mt-5'>
				<FaMapMarkerAlt className='text-2xl text-second-color' />
				<p className='text-lg'>{day}</p>
			</div>
			<h3 className='font-semibold ml-7 mt-1'>{title}</h3>
			<motion.div
				className='ml-7 mt-2 overflow-hidden'
				initial='collapsed'
				animate={showDetail ? 'open' : 'collapsed'}
				variants={variants}
				transition={{ duration: 0.3, ease: 'easeInOut' }}
			>
				<p>{description}</p>
			</motion.div>
			<button
				className='text-red-600 underline ml-7 cursor-pointer'
				onClick={() => setShowDetails((prev) => !prev)}
			>
				{showDetail ? 'Zobacz mniej' : 'Zobacz szczegóły'}
			</button>
		</div>
	);
};

const TripPlan = ({
	plan,
	details,
	moreInfo,
}: {
	plan: any;
	details: any;
	moreInfo: any;
}) => {
	return (
		<div className='my-10'>
			<div className='flex flex-col'>
				<div className='flex items-center gap-2'>
					<GrDocument className='text-2xl' />
					<h2 className='text-xl xl:text-2xl font-semibold'>
						Program wyjazdu
					</h2>
				</div>
				{Object.values(plan).map(
					(day: any) =>
						day.dzien && (
							<DayDescription
								key={day.dzien}
								day={day.dzien}
								title={day.krotki_opis_miejsca}
								description={day.szczegolowy_opis_miejsca}
							/>
						)
				)}
				<div className='flex fle items-center gap-2 mt-5'>
					<GoGear className='text-2xl' />
					<h2 className='text-xl xl:text-2xl font-semibold'>
						Szczegóły
					</h2>
				</div>
				<div
					dangerouslySetInnerHTML={{ __html: details }}
					className='ml-7 mt-2'
				></div>
				<div className='flex fle items-center gap-2 mt-5'>
					<IoMdInformationCircleOutline className='text-2xl' />
					<h2 className='text-xl xl:text-2xl font-semibold'>
						Infomracje dodatkowe
					</h2>
				</div>
				<div
					dangerouslySetInnerHTML={{ __html: moreInfo }}
					className='ml-7 mt-2'
				></div>
				<p className='ml-7 mt-2 font-semibold text-2xl'>
					Numer naszego rachunku 28 8642 1083 2002 8322 1404 0002
				</p>
			</div>
			<div></div>
		</div>
	);
};

export default TripPlan;
