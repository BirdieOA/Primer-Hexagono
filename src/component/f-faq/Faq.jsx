import React from 'react';
import DivFaqDos from './DivFaqDos';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Faq() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div
			className='relative pb-72 isolate px-8 pt-10 lg:pt-40 '
			id='faq'
			data-aos='fade-up'
			data-aos-duration='1000'
		>
			<div
				className='relative flex justify-center py-32 lg:py-10'
				data-aos='fade-up'
				data-aos-duration='1000'
			>
				<img className='h-20 w-20  lg:h-20 lg:w-20' src='/polyfaq.svg' alt='' />
			</div>

			<div
				className='hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr sm:block sm:transform-gpu sm:blur-3xl'
				aria-hidden='true'
				data-aos='fade-up'
				data-aos-duration='2000'
			>
				<div
					className='aspect-[600/845] w-[50.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-10'
					style={{
						clipPath:
							'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
					}}
				/>
			</div>
			<div className='flex justify-center items-center align-middle'>
				<DivFaqDos />
			</div>
		</div>
	);
}
