import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Nosotros() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			<section>
				<div className='bg-gray-950 pt-20 md:pt-18 pb-72' id='nosotros'>
					<div className='mx-4 md:pt-4 bg-gray-950 lg:mx-auto max-w-5xl  sm:px-6 lg:px-0 lg:py-16'>
						<div
							className='relative isolate overflow-hidden bg-gray-900 px-6 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-0 lg:flex lg:gap-x-12 lg:px-4 lg:my-5 lg:pt-0 rounded-xl  flex flex-col-2'
							data-aos='fade-right'
							data-aos-duration='3000'
						>
							<section>
								<svg
									viewBox='0 0 1024 1024'
									className='absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0'
									aria-hidden='true'
								>
									<circle
										cx={400}
										cy={300}
										r={500}
										fill='url(#759c1415-0410-454c-8f7c-9a820de03641)'
										fillOpacity='0.3'
									/>
									<defs>
										<radialGradient id='759c1415-0410-454c-8f7c-9a820de03641'>
											<stop stopColor='#418980' />
											<stop offset={4} stopColor='#E935C1' />
										</radialGradient>
									</defs>
								</svg>
							</section>
							<section className='flex items-center space-x-72'>
								<div className='mt-3 mx-auto text-center lg:mx-0 lg:flex-auto lg:py-8 lg:text-top'>
									<h2
										className='text-3xl text-indigo-300 lg:text-5xl text-center font-bold'
										data-aos='fade-up'
										data-aos-duration='1000'
									>
										SOBRE NOSOTROS
									</h2>
									<p
										className='p-4 mt-4 lg:text-xl lg:leading-7 text-white text-center'
										data-aos='fade-up'
										data-aos-duration='2000'
									>
										Somos un equipo de trabajo especializado en diseño y
										desarrollo web. Construimos proyectos digitales eficientes y
										creativos, empleando tecnologías modernas y estrategias
										efectivas para potenciar el crecimiento en línea. <br /> Valoramos
										la accesibilidad y nos esforzamos por garantizar que todas
										las personas puedan alcanzar sus objetivos al contratar
										nuestros servicios.
									</p>
									<div className='mt-10 pb-10 flex items-center justify-center gap-x-3 lg:align-middle'>
										<a
											href='#planes'
											className='rounded-md bg-sky-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-400 hover:text-gray-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer transform transitio duration-500'
										>
											Conocer más
										</a>
									</div>
								</div>
							</section>{' '}
							<img
								className='hidden lg:block h-[100px] w-[100px] lg:h-[400px] lg:w-[400px]'
								src='/columncubes.svg'
								alt=''
							/>
							<img
								className='h-[600px] w-[150px] lg:hidden'
								src='/columncubes.svg'
								alt=''
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
