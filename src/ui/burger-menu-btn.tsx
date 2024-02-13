'use client';
import React from 'react';
import { motion } from 'framer-motion';

type MenuToggleButtonProps = {
	toggle: React.Dispatch<React.SetStateAction<boolean>>;
	isMenuVisible: boolean;
};

const BurgerMenuBtn = ({ toggle, isMenuVisible }: MenuToggleButtonProps) => {
	const lineVariants = {
		hover: {
			width: '100%', // Width when hovering for all lines
		},
	};

	const lineTransition = {
		duration: 0.2, // Animation duration
		// You can add a delay on a per-line basis if you want the animations to be sequential
	};
	return (
		<>
			<motion.button
				aria-label='toggle menu'
				onClick={() => toggle((prev) => !prev)}
				animate={isMenuVisible ? 'open' : 'closed'}
				initial='initial'
				whileHover='hover'
				className='relative border border-transparent cursor-pointer z-50 focus:outline-none bg-transparent'
			>
				<div className='relative w-[50px] h-7'>
					<motion.div
						className='absolute right-0 bg-main-color h-1 w-full'
						variants={lineVariants}
						transition={lineTransition}
					/>
					<motion.div
						className='absolute right-0 bg-main-color h-1 w-3/4 top-3'
						variants={lineVariants}
						transition={{ ...lineTransition, delay: 0.1 }}
					/>
					<motion.div
						className='absolute right-0 bg-main-color h-1 w-1/2 top-6'
						variants={lineVariants}
						transition={{ ...lineTransition, delay: 0.2 }}
					/>
				</div>
			</motion.button>
		</>
	);
};

export default BurgerMenuBtn;
