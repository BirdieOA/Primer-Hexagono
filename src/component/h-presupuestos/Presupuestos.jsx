import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Presupuestos() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<>
			<div data-aos='zoom-in-down' data-aos-duration='1000'>
				<section
					className='flex justify-center items-center lg:justify-center lg:items-center py-[100px] lg:pr-20 lg:py-[250px]'
					id='presupuestos'
				>
					<div className='grid grid-cols-3 gap-4 lg:flex lg:justify-center lg:items-center lg:-mt-40'>
						{' '}
						<div className='text-xl text-center font-bold m-4 lg:text-4xl text-indigo-300 col-span-3'>
							Realizanos tu consulta o solicitá un presupuesto a través del
							siguiente formulario y recibí una asesoria gratuita.
						</div>
						<div className='m-5 bg-gradient-to-r bg-slate-800/30 backdrop-blur-md  sm:p-10 lg:p-4 p-8 col-span-3 shadow-2xl '>
							<form
								className='flex flex-col col-span-3 shadow-2xl'
								action='https://getform.io/f/7e6b7e2d-79f0-4ba2-ae9f-346d84ba4194'
								method='POST'
								encType='multipart/form-data'
								autoComplete='off'
							>
								<input
									type='text'
									name='Nombre'
									placeholder='Nombre'
									className='bg-sky-800 placeholder-white lg:text-xl w-auto sm:w-auto lg:w-[600px] focus:ring-sky-400 focus:border-sky-400 border-transparent'
									required
								/>
								<br />

								<input
									type='email'
									name='Email'
									placeholder='Email'
									className='bg-sky-800 placeholder-white lg:text-xl w-auto sm:w-auto lg:w-[600px] focus:ring-sky-400  focus:border-sky-400 border-transparent'
									required
								/>
								<br />

								<input
									type='text'
									name='Telefono'
									placeholder='Telefono'
									className='bg-sky-800 placeholder-white lg:text-xl w-auto sm:w-auto lg:w-[600px] focus:ring-sky-400 focus:border-sky-400 border-transparent'
									required
								/>
								<br />
								<textarea
									className='lg:text-xl bg-sky-800 text-white  focus:ring-sky-400 focus:border-sky-400 border-transparent placeholder-white'
									placeholder='Escriba su consulta'
									name='consulta'
									id='consulta'
									cols='10'
									rows='5'
									required
								></textarea>

								<button
									type='submit'
									className='text-2xl font-bold mt-8 lg:mt:0 p-2 hover:bg-sky-500 transition duration-500 bg-sky-800 hover:text-gray-900'
								>
									Enviar
								</button>
							</form>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
