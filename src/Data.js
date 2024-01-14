const data = {
  status: "success",
  items: [
    {
      id: 1,
      cid: 10001,
      title: "Lobo",
      image: require('./images/Perros/perro01.jpeg'),
      raza: "perro",
      sobre: "Lobo, un majestuoso canino, fue hallado en un terreno abandonado, mostrando signos de desnutrición y un estado general preocupante. Sin embargo, después de recibir cuidados adecuados, incluyendo todas las vacunas necesarias, ha experimentado una notable mejoría. Este imponente perro, de apenas poco más de 10 meses, exhibe ahora una vitalidad renovada. Lobo es un macho de gran tamaño, listo para encontrar un hogar amoroso y compartir su lealtad y cariño.",
      descrip:"Leal y Cariñoso"
    },
    {
      id: 2,
      cid: 10002,
      title: "Wendi",
      image: require('./images/Perros/perro02.jpg'),
      raza: "perro",
      sobre: "Wendi, una encantadora cachorra de tan solo 5 meses, fue abandonada cruelmente en mitad de la calle por sus antiguos dueños. Por suerte, llegamos a tiempo para rescatarla y evitar que sufriera algún daño. Wendi es una hembra pequeña, llena de vitalidad y cariño, lista para comenzar una nueva etapa en un hogar donde sea apreciada y cuidada como se merece.",
      descrip:"Adorable y Traviesa"
    },
    {
      id: 3,
      cid: 10003,
      title: "Manchas",
      image: require('./images/Perros/perro03.png'),
      raza: "perro",
      sobre: "Manchas, un encantador cachorro de 5 meses, llegó a nuestras puertas en una caja, acompañado de una conmovedora nota. Sus anteriores dueños, conscientes de sus limitaciones económicas, confiaron en que en nuestro establecimiento podríamos encontrarle un nuevo hogar lleno de amor. Manchas es un macho de tamaño mediano, lleno de energía y afecto, esperando ansiosamente por la oportunidad de formar parte de una familia cariñosa.",
      descrip:"Listo y Juguetón"
    },
    {
      id: 4,
      cid: 10004,
      title: "Blanquita",
      image: require('./images/Perros/perro04.webp'),
      raza: "perro",
      sobre: "Blanquita, una dulce hembra de 8 meses, fue abandonada en un parque de nuestra localidad. A pesar de su situación, se encontraba en buen estado y le proporcionamos todas las vacunas necesarias para garantizar su bienestar. Esta encantadora perrita de tamaño pequeño está lista para encontrar un hogar amoroso y compartir todo su cariño con una familia dedicada.",
      descrip:"Peluda y Cariñosa"
    },
    {
      id: 5,
      cid: 10005,
      title: "Lucho",
      image: require('./images/Perros/perro05.jpeg'),
      raza: "perro",
      sobre: "Lucho, un encantador macho de tamaño mediano, se encontró repentinamente sin hogar cuando su dueño, un adulto mayor, lamentablemente falleció. Ahora, Lucho busca un nuevo comienzo y está ansioso por formar parte de un hogar cariñoso. Este simpático compañero está listo para brindar amor y alegría a quien decida adoptarlo.",
      descrip:"Valiente y Amoroso"
    },
    {
      id: 6,
      cid: 10006,
      title: "Laika",
      image: require('./images/Perros/perro06.jpg'),
      raza: "perro",
      sobre: "Laika, un encantador macho de tamaño mediano, tiene 1 año y 2 meses. La encontramos merodeando por los basureros en busca de algo para comer. A pesar de sus difíciles comienzos, Laika es un juguetón entusiasta, especialmente cuando se trata de una pelota. Listo para dejar atrás su pasado y encontrar un hogar lleno de amor y diversión, Laika espera ansiosamente una familia cariñosa que lo adopte.",
      descrip:"Inteligente y Juguetona"
    },
    {
      id: 7,
      cid: 10007,
      title: "Tamago no Atama",
      image: require('./images/Perros/perro07.png'),
      raza: "perro",
      sobre: "Tamago no Atama, un adorable macho de tamaño pequeño, fue abandonado junto a sus dos hermanos. Encontrados en una caja frente al basurero, unos amables vecinos los trajeron a nuestro local para que nos ocupáramos de ellos. A pesar de su difícil inicio, Tamago no Atama y sus hermanos, todos de 6 meses de edad, están listos para ser parte de un hogar lleno de amor y cuidado",
      descrip:"Tierno y Animado"
    },
    {
      id: 8,
      cid: 10008,
      title: "Rem",
      image: require('./images/Perros/perro13.png'),
      raza: "perro",
      sobre: "Rem, la encantadora hembra de 6 meses, es otra de las hermanas rescatadas junto a Tamago no Atama. Aunque su historia comenzó de manera triste, Rem es una gatita dulce y afectuosa. Disfruta de largas siestas y juegos suaves. Está buscando un hogar lleno de amor y calidez.",
      descrip:"Dulce y Cariñosa"
    },
    {
      id: 9,
      cid: 10009,
      title: "Kira",
      image: require('./images/Perros/perro10.png'),
      raza: "perro",
      sobre: "Kira, un intrépido macho de 6 meses, es uno de los valientes hermanos que fueron abandonados y encontrados cerca de un basurero. A pesar de su difícil comienzo, Kira es juguetón y lleno de energía. Le encanta explorar y está en busca de una familia cariñosa que le dé el hogar amoroso que se merece.",
      descrip:"Intrépido y Juguetón"
    },
    {
      id: 10,
      cid: 10010,
      title: "Minikui",
      image: require('./images/Perros/perro08.jpeg'),
      raza: "perro",
      sobre: " Minikui, una encantadora hembra de 8 meses, llegó a nuestro albergue después de que sus antiguos dueños decidieran deshacerse de ella simplemente por tener preferencias estéticas. A pesar de esa experiencia, Minikui es una perra cariñosa y amigable. Le encanta jugar y recibir caricias. Ahora está en busca de una familia que la valore por su amor incondicional. ",
      descrip:"Cariñosa y Sociable"
    },
    {
      id: 11,
      cid: 10011,
      title: "Copo de Nieve",
      image: require('./images/Perros/perro09.jpg'),
      raza: "perro",
      sobre: " Copo de Nieve, una dulce hembra de 1 año, enfrenta el desafío de la catarata que amenaza con robarle la visión. Su necesidad de cuidados especiales hace que sea crucial encontrar una familia comprensiva y dispuesta a asumir los gastos de su atención médica. A pesar de su condición, Copo de Nieve es un remanso de alegría y amor. Si puedes brindarle un hogar donde la acepten tal como es y le ofrezcan el cariño que merece, estarías haciendo una diferencia significativa en la vida de esta perrita especial.",
      descrip:"Alegre y Enérgica"
    },
    {
      id: 12,
      cid: 10012,
      title: "Doro",
      image: require('./images/Perros/perro11.jpeg'),
      raza: "perro",
      sobre: "Doro, un encantador macho de 8 meses, es el resultado del amor entre dos de nuestros perros adoptables. Su historia es un testimonio del ciclo continuo de afecto y cuidado que buscamos fomentar en nuestro albergue. Con un tamaño pequeño y una personalidad adorable, Doro busca un hogar donde pueda seguir floreciendo rodeado de amor y atención. Si estás listo para darle a este pequeño una vida llena de alegría y compañía, considera darle a Doro un lugar especial en tu hogar.",
      descrip:"Compacto y Divertido"
    },
    {
      id: 13,
      cid: 10013,
      title: "Kawai",
      image: require('./images/Perros/perro12.jpg'),
      raza: "perro",
      sobre: "Kawai, un adorable macho de 4 meses, llegó a nosotros como un regalo generoso de una familia cuya perra había tenido crías. Esta familia confió en nosotros para encontrarle a Kawai un nuevo hogar lleno de amor y cuidado. Con su tamaño pequeño y su encanto innegable, Kawai busca convertirse en parte de un hogar amoroso donde pueda crecer feliz y llenar cada día con alegría. Si estás listo para darle a Kawai un lugar especial en tu vida, considera la posibilidad de adoptar a este pequeño peludo y brindarle un futuro brillante.",
      descrip:"Pequeño y Encantador"
    },
    
    {
      id: 14,
      cid: 10014,
      title: "Arata",
      image: require('./images/Perros/perro14.jpeg'),
      raza: "perro",
      sobre: "Arata, un encantador macho de 6 meses, llegó a nuestro albergue sin mucha historia conocida. A pesar de su pasado incierto, Arata está listo para empezar un nuevo capítulo en su vida, y busca un hogar lleno de amor y cuidado. Con su tamaño mediano y su personalidad prometedora, Arata tiene todo el potencial para convertirse en un compañero leal y afectuoso. Si estás dispuesto a darle a Arata la oportunidad que se merece, considera la posibilidad de adoptarlo y ser parte de su historia de felicidad.",
      descrip:"Noble y Juguetón"
    },
    {
      id: 15,
      cid: 10015,
      title: "Sultán",
      image: require('./images/Perros/perro15.png'),
      raza: "perro",
      sobre: " Sultán, el pequeño emperador de tan solo 5 meses, ha conquistado los corazones de todos en el albergue. A pesar de su corta edad, Sultán ha demostrado ser un verdadero gobernante, ganándose el cariño y la admiración de los trabajadores. Aunque todos lo adoran, ninguno se atreve a llevarse a Sultán a casa. Si estás listo para darle un hogar real a este encantador macho de tamaño pequeño, considera la posibilidad de adoptar a Sultán y hacerlo parte de tu reino de amor y afecto. ¡Una experiencia única te espera con el adorable Sultán!",
      descrip:"Inteligente y Curioso"
    },
    {
      id: 16,
      cid: 10016,
      title: "Tilina",
      image: require('./images/Gatos/gato01.jpg'),
      raza: "gato",
      sobre: "¡Hola! Soy Tilina, una encantadora hembra de tamaño pequeño que sabe disfrutar de los mimos y cariñitos. Aunque tengo una patita trasera amputada, eso no me impide ser una compañera leal y amorosa. Si decides llevarme a tu hogar, recibirás todo mi amor. Soy activa y estoy lista para llenar tu vida de alegría.",
      descrip:"Activa y Cariñosa"
    },
    {
      id: 17,
      cid: 10017,
      title: "Scar",
      image: require('./images/Gatos/gato02.jpeg'),
      raza: "gato",
      sobre: "¡Hola! Soy Scar, un gato macho de tamaño mediano, y aunque al principio puedo ser un poco reservado, con el tiempo me convierto en el mejor compañero. Prefiero ser el único gato en casa para recibir toda la atención y cariño que merezco. Estoy en búsqueda de una familia que me brinde un hogar para siempre. Mi nivel de actividad es moderado, así que estoy listo para compartir momentos de tranquilidad y afecto contigo.",
      descrip:"Intrigante y Tranquilo"
    },
    {
      id: 18,
      cid: 10018,
      title: "Tom",
      image: require('./images/Gatos/gato03.jpg'),
      raza: "gato",
      sobre: "¡Hola! Soy Tom, un gato macho de tamaño pequeño. Soy muy cariñoso y un poco travieso, ¡pero quién puede resistirse a mi encanto! Prefiero ser el único gato en casa para recibir toda la atención y cariño que me encanta. Estoy en busca de una familia que me brinde un hogar para siempre. Mi nivel de actividad es moderado, así que estoy listo para compartir momentos de diversión y afecto contigo.",
      descrip:"Travieso y Afectuoso"
    },
    {
      id: 19,
      cid: 10019,
      title: "Zora",
      image: require('./images/Gatos/gato04.jpg'),
      raza: "gato",
      sobre: "Hola, mi nombre es Zora! Soy un gato macho y de tamaño. Fui abandonado a los 2 meses de nacido, pero fui rescatado de inmediato. Soy un gato extremadamente activo, super cariñoso y muy adorable. Espero encontrar a alguien que me ame y me acompañe en mis travesuras. ¡Anímate!" ,
      descrip:"Divertido y Juguetón"
    },
    {
      id: 20,
      cid: 10020,
      title: "Mayonesa",
      image: require('./images/Gatos/gato05.jpg'),
      raza: "gato",
      sobre: "¡Saludos! Soy Mayonesa, una encantadora gatita hembra de tamaño pequeño. Fui rescatada junto a mi hermanito Figaro, y ahora estoy buscando mi hogar ideal. Soy muy activa y adoro jugar, especialmente con niños. Aunque a veces pueda ser un poco traviesa, te prometo que nunca te aburrirás conmigo. Estoy lista para ser tu mejor amiga y tu compañera ideal. Mi nivel de actividad es alto, así que estoy preparada para llenar tu vida de diversión y afecto. ",
      descrip:"Juguetona y Enérgica"
    },
    {
      id: 21,
      cid: 10021,
      title: "Shira",
      image: require('./images/Gatos/gato06.jpg'),
      raza: "gato",
      sobre: "¡Hola! Soy Shira, una gatita hembra de tamaño pequeño con una historia de valentía. Fui abandonada a las 2 semanas de vida, pero afortunadamente fui rescatada rápidamente. Aunque me adoptaron, debido a circunstancias fuera de mi control, tuvieron que dejarme ir. Ahora estoy aquí, lista para encontrar un hogar lleno de amor. Soy muy juguetona y cariñosa; una de mis actividades favoritas es tirarme panza arriba para recibir caricias. Además, soy inteligente y aprendo rápido. Estoy emocionada por la oportunidad de formar parte de una familia que me ame. Mi nivel de actividad es medio, así que estoy preparada para compartir momentos divertidos y afectuosos contigo. ",
      descrip:"Juguetona y Inteligente"
    },
    {
      id: 22,
      cid: 10022,
      title: "Figaro",
      image: require('./images/Gatos/gato07.jpg'),
      raza: "gato",
      sobre: " ¡Hola! Soy Figaro, un gatito macho de tamaño pequeño con una historia de valentía y supervivencia. Fui rescatado junto con mi hermanita Mayonesa cuando éramos perseguidos por un grupo de perros. Afortunadamente, nos dieron de comer, nos curaron y me recuperé rápidamente. Aunque soy algo desconfiado y tímido al principio, soy dócil y me encanta correr y jugar en el parque. Mi nivel de actividad es medio, así que estoy listo para compartir momentos divertidos y tiernos contigo.",
      descrip:"Timido y Inteligente"
    },
    {
      id: 23,
      cid: 10023,
      title: "Mochi",
      image: require('./images/Gatos/gato08.jpg'),
      raza: "gato",
      sobre: "¡Hola! Soy Mochi, una gatita hembra de tamaño muy pequeño y con un corazón lleno de cariño. A pesar de mi pequeño tamaño, tengo una personalidad especial que busca amor y atención constante. Necesito alguien que cuide de mí y me brinde toda la atención del mundo. Estoy en busca de una familia para siempre. Si decides adoptarme, recibirás mucho amor y ternura a cambio. Mi nivel de actividad es bajo, así que estoy lista para compartir momentos tranquilos y acogedores contigo. ",
      descrip:"Tierna y Dormilona"
    },
    {
      id: 24,
      cid: 10024,
      title: "Mota",
      image: require('./images/Gatos/gato09.jpeg'),
      raza: "gato",
      sobre: " ¡Hola! Soy Mota, una gatita hembra llena de cariño y travesuras. Estoy buscando una familia que tenga mucha paciencia y esté dispuesta a conocerme bien para que podamos entrar en confianza. Mi personalidad activa se refleja en mi amor por jugar, saltar y perseguir todo lo que se cruce en mi camino, ya sean insectos, pelusas o lanas. Deseo encontrar una familia para siempre que comparta mi energía y esté lista para vivir momentos llenos de diversión y amor. Si decides adoptarme, también recibirás un sinfín de travesuras y cariño.",
      descrip:"Valiente y Enérgica"
    },
    {
      id: 25,
      cid: 10025,
      title: "Hachi",
      image: require('./images/Gatos/gato10.jpg'),
      raza: "gato",
      sobre: "¡Hola! Soy Hachi, una gatita hembra algo tímida pero llena de amor y tranquilidad. Aunque soy pequeña, tengo un corazón enorme que anhela encontrar a alguien que me brinde todo el cariño y la atención que necesito. Mi personalidad tranquila y serena se traduce en momentos de calma y ternura. Estoy en la búsqueda de una familia que esté dispuesta a compartir su amor conmigo y asegurar que mi pequeño corazón se llene de felicidad. Si decides adoptarme, prometo ofrecerte todo mi cariño a cambio.",
      descrip:"Compacto y Amorosa"
    },
    {
      id: 26,
      cid: 10026,
      title: "Diego",
      image: require('./images/Gatos/gato11.png'),
      raza: "gato",
      sobre: "¡Hola, soy Diego! Un gato macho lleno de energía y alegría. Mi historia comienza cuando me encontraron escondido en un descampado, siendo perseguido por unos traviesos perros. A pesar de eso, nada ha logrado quitarme el ánimo y la felicidad. Soy un espíritu juguetón, siempre listo para la diversión y los mimos. Me encanta interactuar con los humanos y recibir cariñitos. Mi nivel de actividad es alto, así que si estás buscando un compañero lleno de vitalidad y diversión, ¡soy la elección perfecta! Si decides adoptarme, te aseguro risas, juegos y mucho cariño.",
      descrip:"Enérgico y Alegre"
    },
    {
      id: 27,
      cid: 10027,
      title: "Patroclo",
      image: require('./images/Gatos/gato12.png'),
      raza: "gato",
      sobre: "¡Hola, soy Patroclo! Aunque mi nombre suene a héroe griego, no necesitas ser un semidiós para apreciar mi compañía. Soy un gato macho, muy cariñoso y tranquilo. Disfruto del juego y la diversión todo el tiempo que sea posible. Recientemente perdí a uno de mis hermanos, lo que me dejó un poco solito y confundido, pero estoy listo para encontrar una nueva familia que me brinde amor y cuidados. Mi nivel de actividad es medio, lo que significa que puedo adaptarme fácilmente a tu rutina. Si decides adoptarme, estaré encantado de llenar tu hogar con mi afecto y alegría. ",
      descrip:"Tranquilo y Curioso"
    },
    {
      id: 28,
      cid: 10028,
      title: "Tonoto",
      image: require('./images/Gatos/gato13.jpg'),
      raza: "gato",
      sobre: "¡Hola, soy Tonoto! Mi historia ha sido un poco complicada, me abandonaron a las 2 semanas de nacido, pero afortunadamente, fui rescatado rápidamente. Luego, fui adoptado, pero desafortunadamente, me volvieron a abandonar. Soy un gato macho, algo tímido y desconfiado debido a mis experiencias anteriores, pero tengo la esperanza de encontrar una familia que me brinde el amor y la seguridad que merezco. Mi nivel de actividad es bajo, lo que significa que soy tranquilo y disfruto de momentos relajados. Si decides adoptarme, prometo llenar tu hogar con mi ternura y gratitud.",
      descrip:"Timido y Amoroso"
    },
    {
      id: 29,
      cid: 10029,
      title: "Bella",
      image: require('./images/Gatos/gato14.jpg'),
      raza: "gato",
      sobre: " ¡Hola, soy Bella! Aunque mi nombre suene a femenino, soy un gato macho. Soy muy tranquilo y, al principio, puedo ser algo desconfiado, pero si me brindas los cariños que necesito, construiremos una amistad inolvidable. Disfruto mucho del juego, saltar y divertirme. Mi tamaño es grande, pero eso no impide que sea un compañero cariñoso y juguetón. Además, si decides adoptarme, recibirás todo mi amor y gratitud.",
      descrip:"Tranquilo y Inteligente"
    },
    {
      id: 30,
      cid: 10030,
      title: "Kalessi",
      image: require('./images/Gatos/gato15.webp'),
      raza: "gato",
      sobre: "¡Hola, soy Kalessi! Soy una gatita muy cariñosa y especial, conocida por ser extremadamente dulce. Lo ideal para mí es vivir en un hogar donde pueda ser la única gata, así tendré toda la atención que necesito. Estoy en busca de una familia que me brinde un hogar para siempre. Si decides adoptarme, recibirás todo mi amor y ternura. ",
      descrip:"Leal y Cariñosa"
    },
  ],
};

export default data;