import React from 'react';
import { Link } from 'react-router-dom';
import Footerinterno from '../j-footer/Footerinterno';


export default function LeerServicios() {
	
	return (
		<>
			<div className='lg:flex lg:flex-col lg:text-justify px-2'>
				<div className='pb-72 flex flex-col px-4'>
					<section>
						<div className='relative bg-transparent'>
							<div className='absolute top-[25px] left-[25px] z-50 text-2xl'>
								<Link
									to='/'
									className='rounded-tr-xl rounded-bl-full border-l border-r border-sky-300  hover:transform transition ease-in-out duration-500 p-4 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-300 cursor-pointer'
								>
									<h1 className='pl-8'>Volver al inicio</h1>
								</Link>
							</div>
						</div>
					</section>
					<div className='translate-y-[100rem]'></div>
					<div className='lg:translate-y-[150rem]'>
						<SvgTres />
					</div>
					<div className='flex flex-col items-center lg:items-start lg:flex-row pt-40 lg:px-40 text-justify px-4'>
						<img className='h-32 w-32 ' src='/icouno.svg' alt='' />

						<div className='lg:pl-40 font-bold text-2xl'>
							<h1 className='font-extralight text-indigo-300 text-4xl lg:text-8xl pb-20'>
								Tecnología
							</h1>
							<section>
								<h1 className='text-xl lg:text-2xl lg:w-[500px]'>
									En qué consisten estas tecnologías, cuáles son sus ventajas y
									relación entre ellas.
								</h1>
								<br />
								<br />
								<section>
									<div className='flex'>
										<h1 className='text-6xl text-sky-300'>1.</h1>
										<h1 className='text-3xl'>React</h1>
									</div>
									<br />
									<p className='text-xl lg:text-2xl lg:w-[500px]'>
										Es una biblioteca de
										<span className='text-amber-100 '> JavaScript</span>{' '}
										utilizada para construir interfaces de usuario. Permite
										crear componentes reutilizables que se pueden renderizar de
										forma eficiente. React se utiliza ampliamente en el
										desarrollo de aplicaciones web y móviles.
									</p>
									<br />
									<h1 className='text-sky-300'>Ventajas de React</h1>
									<br />
									<ol className='list-disc'>
										<li>
											Permite construir aplicaciones escalables y fáciles de
											mantener.
										</li>
										<li>
											Facilita la creación de componentes reutilizables y
											modulares.
										</li>
										<li>
											Utiliza una sintaxis declarativa que hace que el código
											sea más fácil de entender.
										</li>
										<li>
											Gran cantidad de herramientas y librerías para mejorar la
											experiencia de desarrollo.
										</li>
									</ol>
								</section>
								<br />
								<br />
								<section>
									<div className='flex'>
										<h1 className='text-6xl text-sky-300'>2.</h1>
										<h1 className='text-3xl'>Vite</h1>
									</div>
									<br />
									<p>
										Es un sistema de construcción de aplicaciones web que se
										enfoca en la velocidad y la eficiencia. Vite utiliza una
										arquitectura basada en módulos para compilar y construir
										aplicaciones web de manera más rápida.
									</p>
									<br />
									<h1 className='text-sky-300'>Ventajas de Vite</h1>
									<br />
									<ol className='list-disc'>
										<li>
											Permite una experiencia de desarrollo más rápida y
											eficiente.
										</li>
										<li>
											Utiliza una arquitectura basada en módulos para compilar y
											construir aplicaciones de manera más eficiente.
										</li>
										<li>
											Proporciona una experiencia de desarrollo fluida y sin
											interrupciones.
										</li>
										<li>
											Ofrece una gran cantidad de plugins para personalizar y
											mejorar la experiencia de desarrollo.
										</li>
									</ol>
								</section>
								<br />
								<br />
								<section>
									<div className='flex'>
										<h1 className='text-6xl text-sky-300'>3.</h1>
										<h1 className='text-3xl'>Tailwind:</h1>
									</div>
									<br />
									<p></p>
									<br />
									<h1></h1>
									<br />
									<ol>
										<li></li>
										<li></li>
										<li></li>
										<li></li>
									</ol>
								</section>
								Es un framework de CSS que permite crear estilos personalizados
								de manera rápida y sencilla. Tailwind se enfoca en la creación
								de estilos reutilizables y personalizables mediante el uso de
								clases de CSS predefinidas. Ventajas de Tailwind: - Permite
								crear estilos personalizados de manera más rápida y sencilla. -
								Facilita la creación de estilos reutilizables y personalizables
								mediante el uso de clases de CSS predefinidas. - Proporciona una
								gran cantidad de utilidades para crear diseños y estilos
								complejos. - Mejora la legibilidad del código CSS.
								<br />
								<br />
							</section>
							<br />
							<br />
							<section>
								<div>
									<h1></h1>
									<h1></h1>
								</div>
								<br />
								<p></p>
								<br />
								<h1></h1>
								<br />
								<ol>
									<li></li>
									<li></li>
									<li></li>
									<li></li>
								</ol>
							</section>
							4. Eslint: Es una herramienta de análisis de código que permite
							encontrar y corregir errores y malas prácticas en el código
							JavaScript.
							<br />
							<br />
							Ventajas de Eslint:
							<br />
							<br />
							- Permite encontrar y corregir errores y malas prácticas en el
							código JavaScript.
							<br />
							- Ayuda a mantener una buena calidad de código.
							<br />
							- Mejora la legibilidad y la comprensión del código.
							<br />
							- Se puede personalizar para adaptarse a las necesidades del
							proyecto.
							<br />
							<br />
							<section>
								5. Prettier: Es una herramienta de formateo de código que
								permite mantener un estilo de código consistente y legible.
								<br />
								<br />
								Ventajas de Prettier:
								<br />
								- Permite mantener un estilo de código consistente y legible.
								<br />
								<br />- Ayuda a reducir los errores de estilo de código. -
								Mejora la legibilidad y la comprensión del código.
								<br />
								<br />- Se puede personalizar para adaptarse a las necesidades
								del proyecto.
								<br />
								<br />
								En cuanto a la relación entre estas tecnologías, React se
								utiliza ampliamente en el desarrollo de aplicaciones web y
								móviles, mientras que Vite se utiliza para mejorar la eficiencia
								y la velocidad en la construcción de aplicaciones web. Tailwind
								se utiliza para crear estilos personalizados y mejorar la
								legibilidad del código CSS. Eslint y Prettier se utilizan para
								mejorar la calidad del código y mantener un estilo de código
								consistente y legible. En conjunto, estas tecnologías pueden
								mejorar significativamente la eficiencia de tu sitio web.
							</section>
						</div>
						<img className='hidden h-[550px] lg:block' src='/columncubes.svg' alt='' />
					</div>

					<div className='pt-40 lg:px-40 text-justify px-4'>
						<img className='h-32 w-32' src='/icodos.svg' alt='' />
						<div className='lg:pl-40 font-bold text-2xl'>
							{' '}
							<p className='font-abrilFatface font-extralight text-6xl pb-20'>
								Marketing
							</p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
							tempore aliquam totam voluptate quisquam animi vel, voluptates
							perspiciatis hic odio aperiam necessitatibus laudantium ducimus
							facere culpa labore est debitis. Cupiditate!
						</div>
					</div>

					<div className='pt-40 lg:px-40 text-justify px-4'>
						<img className='h-32 w-32' src='/icotres.svg' alt='' />{' '}
						<div className='lg:pl-40 font-bold text-2xl'>
							{' '}
							<p className='font-abrilFatface font-extralight text-6xl pb-20'>
								Asesoramiento
							</p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
							tempore aliquam totam voluptate quisquam animi vel, voluptates
							perspiciatis hic odio aperiam necessitatibus laudantium ducimus
							facere culpa labore est debitis. Cupiditate!
						</div>
					</div>

					<div className='pt-40 lg:px-40 text-justify px-4'>
						<img className='h-32 w-32' src='/icocuatro.svg' alt='' />
						<div className='lg:pl-40 font-bold text-2xl '>
							<p className='font-abrilFatface font-extralight text-6xl pb-20'>
								Accesibilidad
							</p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
							tempore aliquam totam voluptate quisquam animi vel, voluptates
							perspiciatis hic odio aperiam necessitatibus laudantium ducimus
							facere culpa labore est debitis. Cupiditate!
						</div>
					</div>
				</div>
				<Footerinterno />
			</div>
		</>
	);
}
