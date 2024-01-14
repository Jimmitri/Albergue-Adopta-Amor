import React from 'react';
import PF1 from '../../images/perfil1.jpg';
import PF2 from '../../images/perfil2.jpg';


export const AcercaDe = () => {
  return (
    <>
      <div className="container">
        <div className="text">
          <h2 className='m'>Adopta Amor: Encuentra a tu Compañero Peludo en Nuestra Plataforma de Adopción de acerca</h2>
          <p className='n'>En "Adopta Amor", creemos en un mundo donde todos los animales merecen amor, cuidado y un hogar lleno de felicidad. Nuestra misión es proporcionar un refugio virtual para aquellos animales que necesitan una segunda oportunidad, conectándolos con personas amorosas que desean hacer una diferencia en la vida de estos seres.</p>
          <h3 className='acer'>¿Qué nos impulsa?</h3>
          <p className='n'>La idea detrás de "Adopta Amor" surge del profundo amor y respeto que sentimos por todas las formas de vida. Entendemos que muchos animales se enfrentan a circunstancias difíciles y, a menudo, se encuentran en situaciones vulnerables. Nos esforzamos por cambiar eso, ofreciendo una plataforma que facilita la adopción de animales y la creación de vínculos duraderos.</p>
          <h3 className='acer'>Nuestro Objetivo Principal</h3>
          <p className='n'>Buscamos beneficiar a dos partes fundamentales: los animales que anhelan un hogar amoroso y las personas que buscan la compañía fiel de un amigo peludo. Nos esforzamos por ser el puente que une a estos dos grupos, proporcionando un espacio donde las historias de rescate cobran vida y las vidas cambian para mejor.</p>
          <h3 className='acer'>¿Cómo Funciona?</h3>
          <p className='n'>En "Adopta Amor", trabajamos incansablemente para ofrecer una experiencia de adopción sin problemas. Explora las historias conmovedoras de los animales que buscan un hogar y encuentra el compañero perfecto para ti. Nuestro proceso de adopción está diseñado para garantizar que los animales sean colocados en hogares amorosos y responsables.</p>
          <h3 className='acer'>Súmate a la Causa</h3>
          <p className='n'>Ya sea que estés considerando adoptar, hacer una donación o simplemente compartir nuestras historias, te invitamos a ser parte de nuestra comunidad dedicada a hacer del mundo un lugar mejor para todos los seres vivos. Juntos, podemos marcar la diferencia en la vida de estos animales y crear un futuro más brillante para todos.</p>
          <p className='n'>Gracias por visitar "Adopta Amor". ¡Esperamos que encuentres alegría y satisfacción en cada historia de adopción y que te unas a nosotros en esta noble causa!</p>
          <p className='n'>"Adopta Amor" - Donde las Historias de Adopción Cobran Vida.</p>
          <h2 className='atext'>Desarrolladores que Participaron en el Proyecto</h2>
        </div>
      </div>
      
      <div className='Acerca'>
        <div div className='acerca'>
          <div className='acerca_img'>
            <a href="https://github.com/Jimmitri?tab=repositories" target="_blank" rel="noopener, noreferrer">
              <img src={PF1} alt='progra'/>
            </a>          </div>
          <div className='acerc_footer'>
            <a href="https://github.com/Jimmitri?tab=repositories" target="_blank" rel="noopener, noreferrer">
              <h1>J1mm1tr1</h1>
            </a>
            <p>Lógica y Funcionalidad de Página</p>
          </div>
        </div>
        <div div className='acerca'>
          <div className='acerca_img'>
            <a href="https://github.com/Jimmitri?tab=repositories" target="_blank" rel="noopener, noreferrer">
              <img src={PF2} alt='progra'/>
            </a>
          </div>
          <div className='acerc_footer'>
            <a href="https://github.com/Jimmitri?tab=repositories" target="_blank" rel="noopener, noreferrer">
              <h1>Josue</h1>
            </a>
            <p>Estructura y Diseño de Página</p>
          </div>
        </div>  
      </div>

    </>
  )
}
