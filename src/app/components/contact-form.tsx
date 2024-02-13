'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { sendFormData, FormData } from '@/lib/contact-form';
import Image from 'next/image';
import { FaUmbrellaBeach, FaArchway } from 'react-icons/fa6';
import { RiSubwayFill } from 'react-icons/ri';
import { MdChurch } from 'react-icons/md';
import { FaBus } from 'react-icons/fa';
import { BsFillBackpackFill } from 'react-icons/bs';
import { TbBus } from 'react-icons/tb';

const ContactForm = () => {
	const { control, handleSubmit, reset } = useForm<FormData>();

	const onSubmit: SubmitHandler<FormData> = async (data) => {
		const url =
			'https://modezp.com/wp/wp-json/contact-form-7/v1/contact-forms/27/feedback';
		try {
			const result = await sendFormData(data, url);
			if (result) {
				// toast.success('Wiadomość została wysłana');
			}
			reset();
		} catch (error) {
			// toast.error('Coś poszło nie tak');
		}
	};
	return (
		<section className=' w-100vw bg-main-color mt-5 '>
			<div className='relative flex flex-col xl:flex-row items-center xl:items-start container mx-auto w-[100%] py-5 xl:mt-10 px-2 xl:px-5 text-second-color'>
				<div>
					<h2 className='relative text-2xl xl:text-3xl my-2 font-semibold text-center lg:text-start z-[3]'>
						Formularz kontaktowy
					</h2>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className='relative flex flex-col justify-around gap-1 text-sm sm:text-md xl:w-[70%] text-black z-[3]'
					>
						<Controller
							name='yourName'
							control={control}
							defaultValue=''
							rules={{ required: true }}
							render={({ field }) => (
								<input
									{...field}
									type='text'
									className='p-2 outline-none border-main-color border-2 focus:border-second-color placeholder:text-gray-600 text-black'
									required
									placeholder='Imię i nazwisko'
								/>
							)}
						/>
						<Controller
							name='yourEmail'
							control={control}
							defaultValue=''
							render={({ field }) => (
								<input
									{...field}
									type='email'
									className='p-2 outline-none border-main-color border-2 focus:border-second-color placeholder:text-gray-600 text-black'
									required
									placeholder='Twój e-mail'
								/>
							)}
						/>
						<Controller
							name='yourPhone'
							control={control}
							defaultValue=''
							render={({ field }) => (
								<input
									{...field}
									type='number'
									className='p-2 outline-none border-main-color border-2 focus:border-second-color placeholder:text-gray-600 text-black'
									required
									placeholder='Twój numer telefonu'
								/>
							)}
						/>
						<Controller
							name='yourMessage'
							control={control}
							defaultValue=''
							render={({ field }) => (
								<textarea
									{...field}
									className='p-2 outline-none border-main-color border-2 focus:border-second-color placeholder:text-gray-600 text-black'
									placeholder='Wiadomość'
									required
									cols={30}
									rows={5}
									style={{ resize: 'none' }}
								/>
							)}
						/>
						<label
							htmlFor='agreement'
							className='text-white mt-2 flex'
						>
							<input
								type='checkbox'
								className='w-[20px] h-[20px]'
								required
							/>
							<p className='ml-2 text-[12px] xl:text-sm'>
								Zgadzam się na przetwarzanie moich danych
								osobowych przez Biuro pielgrzymkowo turystyczne
								&quot;Credo&quot; S.C. NIP: 6841668923 w celu
								kontaktu z Tobą na Twoją prośbę zgodnie z
								polityką prywatności.
							</p>
						</label>
						<div className='flex justify-center sm:justify-end mt-5'>
							<motion.button
								whileHover={{
									scale: 1.05,
									transition: { duration: 0.1 },
								}}
								type='submit'
								className='bg-second-color outline-none text-main-color text-md lg:text-lg py-2 px-4 rounded-3xl'
							>
								Wyślij wiadomość
							</motion.button>
						</div>
					</form>
				</div>
				<div className='relative w-100% pt-10 xl:right-40 z-[3]'>
					<Image
						src='/biuro.jpg'
						width={595}
						height={392}
						alt='symbol duchowosći'
						className='border-2 border-white z-[3]'
					/>
				</div>
				<FaUmbrellaBeach className='absolute text-second-color text-5xl right-[20px] opacity-10 rotate-12' />
				<TbBus className='absolute text-second-color text-7xl right-[20px] bottom-[40%] opacity-10 rotate-12' />
				<FaBus className='absolute text-second-color text-6xl left-[-60px] top-[250px]  sm:top-[100px] opacity-10 rotate-12' />
				<RiSubwayFill className='absolute text-second-color text-7xl right-[200px] bottom-[0px] opacity-10 ' />
				<FaUmbrellaBeach className='absolute text-second-color text-7xl left-[200px] bottom-[10px] opacity-10 rotate-12' />
				<MdChurch className='absolute text-second-color text-7xl sm:left-[50%] top-[10px] opacity-10 rotate-12' />
				<BsFillBackpackFill className='absolute text-second-color text-7xl sm:left-[60%] bottom-[10px] opacity-10 rotate-12' />
				<FaArchway className='absolute text-second-color text-5xl left-[50%] top-[50%] opacity-10 rotate-[340deg]' />
			</div>
		</section>
	);
};

export default ContactForm;
