import React from "react";
import logoLg from './../../img/logo.svg'

import './header.scss';

export const Header = () => (
  <header className="header">
    <div className="header__container">
      <img src={logoLg} alt="logo" className="header__logo"/>
      <h1 className="header__title">
        Everybody Gets
        <div className="header__next-line">
          Rewarded
        </div>
      </h1>
      <p className="header__text">
        Turn your everyday customer into a loyal one.
        It’s never been easier.
      </p>
    </div>
  </header>
);
