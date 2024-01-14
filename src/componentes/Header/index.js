import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import menu from '../../images/Iconos/menu.svg';
import close from '../../images/Iconos/close.svg';

export const Header = () => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    handleScroll();
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className='hero'>
      <nav className="nav container">
        <div className="nav__logo">
          <Link to={'/'} className="nav__links" onClick={closeMenu}>
          <h2 className="nav__title">Adopta Amor</h2>
          </Link>
        </div>

        <ul className={`nav__link nav__link--menu ${isMenuOpen ? 'nav__link--show' : ''}`}>
          <li className="nav__items">
            <Link to={'/'} className="nav__links" onClick={closeMenu}>Inicio</Link>
          </li>
          <li className="nav__items">
            <Link to={'/Perritos'} className="nav__links" onClick={closeMenu}>Perritos</Link>
          </li>
          <li className="nav__items">
            <Link to={'/Gatitos'} className="nav__links" onClick={closeMenu}>Gatitos</Link>
          </li>
          <li className="nav__items">
            <Link to={'/Adopta'} className="nav__links" onClick={closeMenu}>¡Adopta Ya!</Link>
          </li>
          <li className="nav__items">
            <Link to={'/AcercaDe'} className="nav__links" onClick={closeMenu}>Acerca De</Link>
          </li>
          <li className="nav__items">
            <Link to={'/TerminosyCondiciones'} className="nav__links" onClick={closeMenu}>Terminos y Condiciones</Link>
          </li>
          <img src={close} className="nav__close" alt='close' onClick={closeMenu}></img>
        </ul>

        <div className="nav__menu" onClick={toggleMenu}>
          <img src={menu} className="nav__img" alt='menu'></img>
        </div>
      </nav>

      <section className="hero__container container">
        <h1 className="hero__title">Adopta Amor</h1>
        <h2 className="hero__paragraph">Encuentra a tu Compañero Peludo en Nuestra Plataforma de Adopción de Mascotas.</h2>
      </section>
    </header>
  );
};
