import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServiciosTitulo from './ServiciosTitulo';

const features = [
	{
		name: 'Tecnologías',
		description: 'React, Vite, TaildwindCss, Figma.',
		icon: '/icouno.svg',
	},
	{
		name: 'Marketing',
		description: 'Brevo, Google Analytics.',
		icon: '/icodos.svg',
	},
	{
		name: 'Asesoramiento',
		description: 'Nuestro equipo, tu negocio.',
		icon: '/icotres.svg',
	},
	{
		name: 'Accesibilidad',
		description: 'Adaptable, experiencia de usuario e interfaz de usuario.',
		icon: '/icocuatro.svg',
	},
];

export default function Servicios() {
	const handleClick = () => {
		window.scrollTo(0, 0);
	};

	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			<ServiciosTitulo />
			<div className='bg-gray-950'>
				<div
					className='flex justify-center pt-24 lg:pt-32 p-12'
					id='tecnologias'
				>
					<dl
						className='relative bg-slate-400 bg-opacity-20 py-4 rounded-xl'
						data-aos='fade-right'
						data-aos-duration='2000'
					>
						{features.map(feature => (
							<div
								key={feature.name}
								className='relative pl-16 py-6'
								data-aos='fade-right'
								data-aos-duration='2000'
							>
								<dt className='text-base font-bold leading-7 text-neutral-200'>
									<div className='absolute -left-9 top-0 md:-left-12 md:top-0 flex h-14 w-14 md:h-20 md:w-20 items-center justify-center rounded-xl bg-indigo-200 bg-opacity-10 p-2 md:p-4 m-2'>
										<img
											src={feature.icon}
											alt='iconos de letras'
											className='h-20 w-20 text-white '
										/>
									</div>
									{feature.name}
								</dt>
								<dd className='mt-2 mr-12 text-white'>{feature.description}</dd>
							</div>
						))}
						<section>
							<Link
								to='/component/d-servicios/CuatroServicios'
								onClick={handleClick}
							>
	
							</Link>
						</section>
					</dl>
				</div>

				<div
					className='inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-20'
					aria-hidden='true'
				></div>
			</div>
		</>
	);
}
