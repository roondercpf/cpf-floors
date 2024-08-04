"use client";

import React, { useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import useEmblaCarousel from "embla-carousel-react";

import "@/app/sass/MenuCarousel.scss";

const MenuCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">


            <div className="embla__slide">
              <div className="menu-slide-carousel-one">
                <div className="content">
                  <h2>Inspire Black Edition</h2>
                  <h3>Collection</h3>
                </div>
              </div>
            </div>

            <div className="embla__slide">
              <div className="menu-slide-carousel-two">
                <div className="content">
                  <h2>Project 2.0</h2>
                  <h3>Collection</h3>
                </div>
              </div>
            </div>

            <div className="embla__slide">
              <div className="menu-slide-carousel-three">
                <div className="content">
                  <h2>Alpha 22</h2>
                  <h3>Collection</h3>
                </div>
              </div>
            </div>

            <div className="embla__slide">
              <div className="menu-slide-carousel-four">
                <div className="content">
                  <h2>Spirit XL</h2>
                  <h3>Collection</h3>
                </div>
              </div>
            </div>

            
            
          </div>
        </div>

        {/*BUTTONS*/}

        <div className="menu-carousel-buttons">
          <button
            className="embla__prev menu-carousel-prev m-5"
            onClick={scrollPrev}
          >
            <Image src="/prev.svg" height={50} width={50} alt="prev"></Image>
          </button>
          <button
            className="embla__next menu-carousel-next m-5"
            onClick={scrollNext}
          >
            <Image src="/next.svg" height={50} width={50} alt="next"></Image>
          </button>
        </div>
      </div>
    </>
  );
};
export default MenuCarousel;
