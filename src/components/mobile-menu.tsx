import React from 'react';
import { links } from '@/lib/links';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

type MobileMenuProps = {
	handleToggleMenu: () => void;
	menuVisible: boolean;
};

const MobileMenu = ({ handleToggleMenu, menuVisible }: MobileMenuProps) => {
	const handleCloseMenu = () => {
		handleToggleMenu();
		document.body.style.overflow = 'auto';
	};

	return (
		<nav className='absolute uppercase lg:hidden overflow-hidden z-[20] '>
			<AnimatePresence>
				{menuVisible && (
					<motion.div
						className='bg-main-color bg-opacity-20 w-screen h-screen'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={handleCloseMenu}
					>
						<motion.div
							className='absolute bg-white h-screen w-[100%] left-0 z-[20]'
							initial={{ x: 100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							exit={{ x: 100, opacity: 0 }}
							onClick={(event) => {
								event.stopPropagation();
							}}
						>
							<ul className='flex flex-col gap-5 text-main-color text-lg p-10  mt-10 font-semibold'>
								{links.map((link) => (
									<li key={link.path}>
										<Link
											href={link.path}
											onClick={handleCloseMenu}
										>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
							<div className='flex justify-center'>
								<Image
									src='/logo.PNG'
									alt='logo'
									width={135}
									height={81}
									className='absolute bottom-24 w-[8rem] '
									priority
								/>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default MobileMenu;
