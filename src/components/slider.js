import React, { useState } from "react";
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

import LOTR from "../images/lotr.png";
import Spiderman from "../images/spiderman.png";
import Mandalorian from "../images/mandalorian.png";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="Slider mb-8">
      <div className="Slider-visor overflow-hidden">
        <ul className={`Slider-container Slider-container--${currentSlide} relative`}>
          <li className="Slider-containerItem relative float-left">
            <article>
              <img className="Slider-img Slider-img--spiderman"
                   src={Spiderman}
                   title="Spider-man"
                   alt="Spider-man swinging on webs" />
              <blockquote className="Slider-quote Slider-quote--spiderman">
                <p>
                  Swinging on the webs of the internet as your friendly neighbourhood developer!
                  <q>With great templates, comes great responsitivity!</q>
                </p>
                <footer className="mb-2 mt-4">
                  <cite>if <u>Ben Parker</u> was a Front-End engineer</cite>
                </footer>
              </blockquote>
            </article>
          </li>
          <li className="Slider-containerItem relative float-left">
            <article>
              <img className="Slider-img Slider-img--lotr"
                   src={LOTR}
                   title="Gandalf and Company"
                   alt="Gandalf and Company travelling by foot"/>
              <blockquote className="Slider-quote Slider-quote--lotr">
                <p>
                  On a quest to building the perfect user interface!
                  <br/>
                  I’m willing to share my knowledge with any interesting hobbit or elf I meet on my way.
                </p>
                <footer className="mb-2 mt-4">
                  <cite>if <u>Gandalf</u> was a Front-End wizard</cite>
                </footer>
              </blockquote>
            </article>
          </li>
          <li className="Slider-containerItem relative float-left">
            <article>
              <img className="Slider-img Slider-img--starwars"
                   src={Mandalorian}
                   title="Mandalorian-man"
                   alt="Mandalorian holding baby Yoda on his back"/>
              <blockquote className="Slider-quote Slider-quote--starwars">
                <p>
                  Although the web is quirky, I personally believe it’s the closest way to achieving cross platform
                  applications.
                  <q>This is the way!</q>
                </p>
                <footer className="mb-2 mt-4">
                  <cite>if <u>Mandalorian</u> was an UI bounty hunter</cite>
                </footer>
              </blockquote>
            </article>
          </li>
        </ul>
      </div>
      <nav className="Slider-controls flex items-center justify-between">
        <button className="Slider-controlsButton flex items-center focus:outline-none focus:shadow-outline hover:underline"
                type="button"
                onClick={() => setCurrentSlide((currentSlide !== 0) ? currentSlide - 1 : 2)}>
          <BiLeftArrow />
          <span>Prev</span>
        </button>
        <div className="Slider-controlsBullets flex items-center">
          <button className={`
                    Slider-controlsBullets-item
                    ${(currentSlide === 0) ? 'Slider-controlsBullets-item--selected' : ''}
                    focus:outline-none focus:shadow-outline hover:bg-pomegranate
                  `}
                  type="button"
                  onClick={() => setCurrentSlide(0)}>
            <span className="a11y-hidden">Spider-man slide</span>
          </button>
          <button className={`
                    Slider-controlsBullets-item
                    ${(currentSlide === 1) ? 'Slider-controlsBullets-item--selected' : ''}
                    focus:outline-none focus:shadow-outline hover:bg-pomegranate
                  `}
                  type="button"
                  onClick={() => setCurrentSlide(1)}>
            <span className="a11y-hidden">Lord of the Rings slide</span>
          </button>
          <button className={`
                    Slider-controlsBullets-item
                    ${(currentSlide === 2) ? 'Slider-controlsBullets-item--selected' : ''}
                    focus:outline-none focus:shadow-outline hover:bg-pomegranate
                  `}
                  type="button"
                  onClick={() => setCurrentSlide(2)}>
            <span className="a11y-hidden">Star Wars slide</span>
          </button>
        </div>
        <button className="Slider-controlsButton flex items-center focus:outline-none focus:shadow-outline hover:underline"
                type="button"
                onClick={() => setCurrentSlide((currentSlide !== 2) ? currentSlide + 1 : 0)}>
          <span>Next</span>
          <BiRightArrow />
        </button>
      </nav>
    </section>
  );
};

export default Slider;
