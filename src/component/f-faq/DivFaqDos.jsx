import { BsChevronUp } from 'react-icons/bs';
import { useState } from 'react';

export default function DivFaqDos() {
	const faqs = [
		{
			question: '¿Por qué debería tener una página web?',
			answer:
				'Una página web puede ser una herramienta muy valiosa para cualquier negocio, ya que puede ayudarte a aumentar tu visibilidad en línea, llegar a nuevos clientes y ofrecer una experiencia de usuario mejorada.',
		},
		{
			question: '¿Qué incluye el diseño de mi página web?',
			answer:
				'El diseño de tu página web incluye varios elementos importantes, como el diseño visual, la estructura del sitio, el contenido y la funcionalidad. En general, una buena página web debe ser fácil de usar, atractiva y bien organizada.',
		},
		{
			question: '¿Cuánto tiempo lleva diseñar mi página web?',
			answer:
				'El tiempo que lleva diseñar una página web depende de varios factores, como la complejidad del diseño, la cantidad de contenido y la funcionalidad que necesites. En general, una página web puede tardar de unas pocas semanas a varios meses en diseñarse y desarrollarse.',
		},
		{
			question: '¿Qué sucede si mi página web tiene problemas técnicos?',
			answer:
				'Si tu página web tiene problemas técnicos, como un error de programación o un problema de alojamiento, podemos ayudarte a solucionarlos rápidamente. Ofrecemos soporte técnico y de mantenimiento continuo para garantizar que tu página web funcione sin problemas en todo momento.',
		},
		{
			question:
				'¿Cómo puedo asegurarme de que mi página web aparezca en los resultados de búsqueda de Google?',
			answer:
				'Hay muchas estrategias diferentes que se pueden utilizar para mejorar la visibilidad de tu página web en los resultados de búsqueda de Google, como la optimización de motores de búsqueda (SEO), el marketing en redes sociales y la publicidad en línea. Podemos trabajar en conjunto para desarrollar una estrategia personalizada que se adapte a tus necesidades y presupuesto.',
		},
		{
			question:
				'¿Qué sucede si quiero agregar más funcionalidad a mi página web en el futuro?',
			answer:
				'Si deseas agregar más funcionalidad a tu página web en el futuro, podemos desarrollar nuevas características y realizar mejoras y actualizaciones.',
		},
	];
	const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);
	return (
		<div>
			<div
				className='md:w-[700px] mx-auto lg:w-[1300px] bg-slate-800/30 backdrop-blur-md p-2 px-4 transition-transform duration-500'
				id='faqenfuncion'
			>
				{faqs.map((faq, index) => (
					<div key={index} className='my-2'>
						<button
							className='flex w-full justify-between text-sky-100 bg-sky-800 px-4 py-2 text-left text-lg hover:bg-sky-400 hover:ease-in-out hover:duration-300 hover:text-sky-950 hover:font-bold focus:bg-sky-400 focus:text-sky-950 focus:font-bold'
							onClick={() =>
								setActiveQuestionIndex(
									index === activeQuestionIndex ? null : index
								)
							}
						>
							{faq.question}
							<BsChevronUp
								className={`${
									index === activeQuestionIndex ? 'rotate-180 transform ' : ''
								} h-5 w-5 text-slate-800 fill-sky-950 transition-transform duration-300`}
							/>
						</button>
						{index === activeQuestionIndex && (
							<div className='px-4 pt-4 pb-2 text-lg '>
								{faq.answer}
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
