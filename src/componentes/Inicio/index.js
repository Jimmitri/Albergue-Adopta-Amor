import React, { useEffect, useState } from 'react';
import MC from '../../images/equipo.webp';
import arrow from '../../images/Iconos/arrow.svg';
import leftarrow from '../../images/Iconos/leftarrow.svg';
import rightarrow from '../../images/Iconos/rightarrow.svg';
import FC1 from '../../images/face01.jpg';
import FC2 from '../../images/face02.jpg';
import FC3 from '../../images/face03.jpg';
import FC4 from '../../images/face04.jpg';
import dog from '../../images/Iconos/dog.svg';
import house from '../../images/Iconos/home.svg';
import estadisticas from '../../images/Iconos/estadisticas.svg';

export const Inicio = () => {

    const totalTestimonies = 4;
    const [currentTestimony, setCurrentTestimony] = useState(1);

    const slideTestimonies = (direction) => {
        let value = currentTestimony + direction;

        if (value < 1) {
            value = totalTestimonies;
        } else if (value > totalTestimonies) {
            value = 1;
        }

        setCurrentTestimony(value);
    };

    const testimonyData = [
        {
            name: 'Shabatan',
            mascota: 'Levana',
            src: FC3,
            review: 'La llegada de Levana a mi hogar ha sido como un torbellino de alegría y diversión. Esta juguetona cachorra ha llenado cada rincón de mi vida con risas y alegrías. Desde sus payasadas hasta sus travesuras, Levana ha traído una energía juvenil que ha revitalizado mi hogar. Adoptar a esta pequeña compañera peluda ha sido una decisión llena de amor y diversión, y no puedo imaginar mi vida sin su entusiasmo contagioso.',
        },
        {
            name: 'Jairo',
            mascota: 'Peluza',
            src: FC1,
            review: 'Desde el día en que Peluza llegó a mi vida, todo cambió para mejor. Este encantadora perrita, con su mirada leal y energía inagotable, se ha convertido en mi compañera constante. Cada paseo se convierte en una aventura emocionante, y su presencia siempre ilumina mis días. Adoptar a Peluza ha sido una experiencia maravillosa, llena de momentos alegres y una conexión profunda que solo un perro fiel puede ofrecer.',
        },
        {
            name: 'Kevin',
            mascota: 'Misty',
            src: FC2,
            review: 'Misty, la pequeña exploradora, ha traído una dosis adicional de alegría y curiosidad a mi vida. Desde el momento en que entró en casa, cada día se convierte en una nueva aventura. Sus travesuras y su naturaleza juguetona han creado momentos inolvidables. Adoptar a Misty ha sido como añadir un toque juguetón y travieso a mi rutina diaria, y estoy agradecido por la energía juvenil y la diversión que trae a mi hogar.',
        },
        {
            name: 'Karen',
            mascota: 'Luna',
            src: FC4,
            review: 'Con la llegada de Luna, mi hogar se ha llenado de elegancia y serenidad. Esta gata majestuosa ha encontrado su lugar favorito junto a la ventana, desde donde observa el mundo con una calma única. Luna ha añadido un toque de misterio y gracia a mi vida diaria. Adoptar a esta gatita ha sido como dar la bienvenida a una pequeña reina, y estoy agradecido por la serenidad que ha aportado a mi hogar.',
        },
    ];

    useEffect(() => {
        const titleQuestions = [...document.querySelectorAll('.questions__title')];

        titleQuestions.forEach(question => {
            question.addEventListener('click', () => {
                let height = 0;
                let answer = question.nextElementSibling;
                let addPadding = question.parentElement.parentElement;

                addPadding.classList.toggle('questions__padding--add');
                question.children[0].classList.toggle('questions__arrow--rotate');

                if (answer.clientHeight === 0) {
                    height = answer.scrollHeight;
                }

                answer.style.height = `${height}px`;
            });
        });
    }, []);

return (
    <div className='inicio'>
        <section class="container about">
            <h2 class="subtitle">¿Cúal es nuestro objetivo?</h2>

            <div class="about__main">
                <article class="about__icons">
                    <img src={estadisticas} class="about__icon" alt='estadisticas'></img>
                    <h3 class="about__title">Promover la adopción de mascotas rescatadas</h3>
                </article>

                <article class="about__icons">
                    <img src={house} class="about__icon" alt='house-smile'></img>
                    <h3 class="about__title">Encontrarles un buen hogar a las mascotas rescatadas </h3>
                </article>

                <article class="about__icons">
                    <img  src={dog} class="about__icon" alt='dog'></img>
                    <h3 class="about__title">Mejorar la calidad de vida de las mascotas rescatadas</h3>
                </article>
            </div>
        </section>

        <section class="knowledge">
            <div class="knowledge__container container">
                <div class="knowledege__texts">
                    <h2 class="subtitle">Nuestro equipo especializado en el cuidado de nuestros amigos peludos.</h2>
                    <p class="knowledge__paragraph">Nuestro alguergue cuenta con un equipo especializado en el cuidado de nuestros amigos peludos, con el objetivo de que reciban la mejor calidad de vida. Ellos se encargan de velar por la salud, la alimentación y el bienestar de todos los animales  rescatados. Por eso todos los animales que son dados en adopción cuentan con todas las medidas preventivas para su salud ya sean vacunas, esterilización u otro proceso medico. Por lo que buscamos que cuando estos sean dados en adopción reciban todos los cuidados que requiere cada uno de nuestros amigos peludos. </p>
                </div>

                <figure class="knowledge__picture">
                    <img src={MC} class="knowledge__img" alt='equipo'></img>
                </figure>
            </div>
        </section>

        <section class="test">
            <h2 class="subtitle">Testimonios</h2>
        </section>

        <section className="testimony">
                <div className="testimony__container container">
                    <img
                        src={leftarrow}
                        className="testimony__arrow"
                        id="before"
                        alt="leftarrow"
                        onClick={() => slideTestimonies(-1)}
                    />

                    {testimonyData.map(({ name, mascota, src, review }, id) => (
                        <section
                            key={id + 1}
                            className={`testimony__body ${currentTestimony === id + 1 ? 'testimony__body--show' : ''}`}
                            data-id={id + 1}
                        >
                            <div className="testimony__texts">
                                <h2 className="subtitle">
                                    {`Mi nombre es ${name}, y adopte a ${mascota}.`}
                                </h2>
                                <p className="testimony__review">{review}</p>
                            </div>

                            <figure className="testimony__picture">
                                <img src={src} className="testimony__img" alt={`PC${id + 1}`} />
                            </figure>
                        </section>
                    ))}

                    <img
                        src={rightarrow}
                        className="testimony__arrow"
                        id="next"
                        alt="rightarrow"
                        onClick={() => slideTestimonies(1)}
                    />
                </div>
            </section>

        <section class="questions container">
            <h2 class="subtitle">¿Por qué es mejor adoptar? </h2>

            <section class="questions__container">
                <article class="questions__padding">
                    <div class="questions__answer">
                        <h3 class="questions__title">Experimenta el amor leal y sin condiciones que solo una mascota adoptada puede ofrecer
                            <span class="questions__arrow">
                                <img src={arrow} class="questions__img" alt='arrow'></img>
                            </span>
                        </h3>

                        <p class="questions__show"> Las mascotas adoptadas, ya sean perros o gatos, establecen un vínculo profundo y leal con sus dueños. Su amor incondicional y compañía constante brindan consuelo, alegría y una conexión única que enriquece la vida diaria.</p>
                    </div>
                </article>

                <article class="questions__padding">
                    <div class="questions__answer">
                        <h3 class="questions__title">Cambia no solo su vida, sino la tuya también
                            <span class="questions__arrow">
                                <img src={arrow} class="questions__img" alt='arrow'></img>
                            </span>
                        </h3>

                        <p class="questions__show">Adoptar una mascota no solo impacta positivamente la vida del animal, sino que también transforma la vida del adoptante. La responsabilidad, la rutina y la alegría que traen consigo las mascotas contribuyen al bienestar emocional y físico, creando experiencias significativas.</p>
                    </div>
                </article>

                <article class="questions__padding">
                    <div class="questions__answer">
                        <h3 class="questions__title">Forma parte de la solución, adopta y apoya a las organizaciones locales
                            <span class="questions__arrow">
                                <img src={arrow} class="questions__img" alt='arrow'></img>
                            </span>
                        </h3>

                        <p class="questions__show">Al adoptar, estás contribuyendo a reducir la población de animales sin hogar y apoyando a organizaciones locales de rescate. Adoptar es una forma activa de participar en la construcción de comunidades compasivas y sostenibles, brindando una segunda oportunidad a las mascotas necesitadas.</p>
                    </div>
                </article>
            </section>
            
        </section>
    </div>
);
}



