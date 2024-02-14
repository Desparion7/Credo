'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import BurgerMenuBtn from '@/ui/burger-menu-btn';
import { cn } from '@/lib/utilis';
import { usePathname } from 'next/navigation';
import MobileMenu from './mobile-menu';
import { links } from '@/lib/links';

const Header = () => {
	const url = usePathname();
	const [menuVisible, setMenuVisible] = useState(false);

	const handleToggleMenu = () => {
		setMenuVisible((prev) => {
			!prev
				? (document.body.style.overflow = 'hidden')
				: (document.body.style.overflow = 'auto');
			return !prev;
		});
	};

	return (
		<header
			className='flex sticky sm:justify-center justify-between w-[100%] h-[12vh] sm:h-[9vh] z-10 top-0 pt-1   bg-white'
		>
			<motion.nav
				className='sm:container flex justify-between items-center py-2 w-[100vw]'
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<Link href='/'>
					<motion.div
						whileHover={{
							scale: 1.05,
							transition: { duration: 0.1 },
						}}
						className='flex items-center xljustify-center'
					>
						<div className='ml-[1rem] sm:ml-0 mr-2 w-[6rem] sm:w-[7rem] h-auto'>
							<Image
								src='/logo.png'
								alt='logo'
								width={135}
								height={81}
								priority
							/>
						</div>
						<h1 className='hidden md:block  ml-[1rem] sm:ml-[0] text-main-color text-lg uppercase font-semibold'>
							BIURO PIELGRZYMKOWO - TURYSTYCZNE CREDO
						</h1>
					</motion.div>
				</Link>
				<div className='hidden xl:flex items-center py-4 px-5'>
					<ul className=' flex gap-6 uppercase items-center text-lg tracking-wider'>
						{links.map((link, index) => (
							<li
								key={index}
								className={cn(
									`relative lg:text-md text-main-color transition-colors font-semibold after:content-[''] after:bg-second-color after:h-[3px] after:w-[0%] after:left-0 after:bottom-[-3px] after:rounded-xl after:absolute after:duration-300 hover:after:w-[100%]`,
									{
										'after:w-[100%]': url === link.path,
									}
								)}
							>
								<Link href={link.path}>{link.name}</Link>
							</li>
						))}
					</ul>
				</div>
				<motion.div
					className='relative xl:hidden pr-2 py-4 mr-2 sm:pr-3 z-30 '
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
				>
					<BurgerMenuBtn
						isMenuVisible={menuVisible}
						toggle={handleToggleMenu}
					/>
				</motion.div>
			</motion.nav>
			<MobileMenu
				handleToggleMenu={handleToggleMenu}
				menuVisible={menuVisible}
			/>
		</header>
	);
};

export default Header;
