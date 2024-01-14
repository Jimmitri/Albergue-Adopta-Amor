<section className="testimony">
            <div className="testimony__container container">
                <img
                    src={leftarrow}
                    className="testimony__arrow"
                    id="before"
                    alt="leftarrow"
                    onClick={() => slideTestimonies(-1)}
                />
                {[1, 2, 3, 4].map((id) => (
                    <section
                        key={id}
                        className={`testimony__body ${currentTestimony === id ? 'testimony__body--show' : ''}`}
                        data-id={id}
                    >
                        {
                            <section class="testimony__body testimony__body--show" data-id="1">
                    <div class="testimony__texts">
                        <h2 class="subtitle">Mi nombre es Jordan Alexander, <span class="testimony__course">estudiante
                                de CSS.</span></h2>
                        <p class="testimony__review">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut est
                            esse, asperiores eaque totam nulla repudiandae quasi, deserunt culpa exercitationem
                            blanditiis laborum veniam laboriosam saepe reiciendis dolorem. Cum, ratione voluptatum!</p>
                    </div>

                    <figure class="testimony__picture">
                        <img src={FC1} class="testimony__img" alt='PC1'></img>
                    </figure>
                </section>

                <section class="testimony__body" data-id="2">
                    <div class="testimony__texts">
                        <h2 class="subtitle">Mi nombre es Alejandra Perez, <span class="testimony__course">estudiante de
                                CSS.</span></h2>
                        <p class="testimony__review">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut est
                            esse, asperiores eaque laborum veniam laboriosam saepe reiciendis dolorem. Cum, ratione
                            voluptatum!</p>
                    </div>

                    <figure class="testimony__picture">
                        <img src={FC2} class="testimony__img" alt='PC2'></img>
                    </figure>
                </section>

                <section class="testimony__body" data-id="3">
                    <div class="testimony__texts">
                        <h2 class="subtitle">Mi nombre es Karen Arteaga, <span class="testimony__course">estudiante de
                                CSS.</span></h2>
                        <p class="testimony__review">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut est
                            esse, niam laboriosam saepe reiciendis dolorem. Cum, ratione voluptatum!</p>
                    </div>

                    <figure class="testimony__picture">
                        <img src={FC3} class="testimony__img" alt='PC3'></img>
                    </figure>
                </section>

                <section class="testimony__body" data-id="4">
                    <div class="testimony__texts">
                        <h2 class="subtitle">Mi nombre es Kevin Ramirez, <span class="testimony__course">estudiante de
                                CSS.</span></h2>
                        <p class="testimony__review">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut est
                            esse, niam laboriosam saepe reiciendis dolorem. Cum, ratione voluptatum!</p>
                    </div>

                    <figure class="testimony__picture">
                        <img src={FC4} class="testimony__img" alt='PC4'></img>
                    </figure>
                </section>
                        }
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