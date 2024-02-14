'use client';
import React from 'react';
import { motion } from 'framer-motion';

const CompanyShortDescription = () => {
	return (
		<motion.section
			className=' container mx-auto my-10 xl:my-20  px-2 '
			initial={{ opacity: 0, translateY: '50px' }}
			whileInView={{ opacity: 1, translateY: '0' }}
			transition={{ ease: 'easeOut', duration: 0.4 }}
			viewport={{
				once: true,
			}}
		>
			<h2 className='text-xl xl:text-3xl font-semibold text-center lg:text-start'>
				Biuro Pielgrzymkowo - Turystyczne CREDO
			</h2>
			<p className='xl:text-xl mt-5 text-center lg:text-start'>
				Jesteśmy zespołem pasjonatów podróży, których misją jest
				organizowanie niezapomnianych wyjazdów zarówno o charakterze
				duchowym, jak i turystycznym. Specjalizujemy się w organizacji
				pielgrzymek oraz wycieczek krajowych i zagranicznych, oferując
				bogaty program turystyczny, który obejmuje takie perły jak
				Wenecja, Padwa, Monte Cassino, Asyż w Włoszech; La Salette,
				Lazurowe Wybrzeże, Carcasonne, Lourdes w Francji; Fatima,
				Lisbona w Hiszpanii i Portugalii; oraz Wilno, Kowno w Litwie, a
				także Medjugorie w Bośni i Hercegowinie.
			</p>
			<p className='xl:text-xl mt-5 text-center lg:text-start'>
				Nasze biuro nie ogranicza się jednak tylko do pielgrzymek.
				Organizujemy także wycieczki edukacyjne dla szkół i zakładów
				pracy, proponując wspaniałe lekcje historii w Pradze,
				Budapeszcie, Wiedniu oraz atrakcyjne wycieczki po Słowacji. Na
				życzenie klienta przygotowujemy również imprezy specjalistyczne.
			</p>
		</motion.section>
	);
};

export default CompanyShortDescription;
