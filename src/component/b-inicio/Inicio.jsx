import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Inicio() {
	return (
		<section className='' id='inicio'>
			<div
				className='relative bg-gray-950 isolate px-6 pb-72 pt-12 lg:pt-8 lg:px-8'
				id='inicio'
			>
				<div
					className='absolute inset-x-0 -top-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
					aria-hidden='true'
				>
					<div
						className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
						style={{
							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 0.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
						}}
					/>
				</div>
				<div className='mx-auto max-w-2xl py-10	lg:py-0'>
					<div className='hidden sm:mb-8 sm:flex sm:justify-center'></div>
					<div className='text-center'>
						<p className='mt-20 mb-10 sm:mt-2 text-4xl lg:text-5xl text-center lg:mb-2  '>
							CONCEPTO HEXAGONO
						</p>
						<div className='flex justify-center text-4x md:text-6xl tracking-tight lg:text-8xl md:pb-2 lg:pb-4 lg:mb-4'>
							<img
								className='h-28 w-28 lg:h-80 lg:w-80 '
								src='/newlogo.svg'
								alt=''
							/>
						</div>
						<div className='flex justify-center text-4xl mt-10 sm:text-2xl md:text-4xl lg:text-6xl pt-2 pb-9 md:pb-0 lg:pb-9  '>
							<TypeAnimation
						
								sequence={[
									'DISEÑAMOS',
									3000,
									'DESARROLLAMOS',
									3000,
									'TE ALOJAMOS.',
									3000,
								]}
								repeat={Infinity}
								style={{
									background: 'linear-gradient(45deg, #6366f1, #14b8a6)',
									WebkitBackgroundClip: 'text',
									WebkitTextFillColor: 'transparent',
									fontWeight: 'bold',
								}}
							/>
						</div>

						<div className='mt-10 flex items-center justify-center'>
							<a
								className='rounded-md bg-sky-800 px-3.5 py-2.5 text-center text-sm text-white shadow-sm hover:bg-sky-400 hover:text-gray-950 hover:font-bold cursor-pointer hover:transition hover:transform easy-in-out duration-1000 '
								href='#servicios'
							>
								Empezar
							</a>
							<div className='flex items-center'>
								<a
									href='#faq'
									className='text-sm font-bold leading-6 ml-4 text-indigo-300 hover:text-white'
								>
									Saber más
								</a>
							</div>
						</div>
					</div>
				</div>
				<div
					className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
					aria-hidden='true'
				>
					<div
						className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-[1000px] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[45.1875rem]'
						style={{
							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
						}}
					/>
				</div>
			</div>
		</section>
	);
}
