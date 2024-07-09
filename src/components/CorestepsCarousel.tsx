"use client";

import React, { useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import useEmblaCarousel from "embla-carousel-react";

import "@/app/sass/CorestepsCarousel.scss";

const CorestepsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div className="embla home-banner-carousel-container">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">

            <div className="embla__slide">
                <Image src="/coresteps/step-1.webp" height={600} width={600} alt="Step"></Image>
            </div>
            <div className="embla__slide">
                <Image src="/coresteps/step-2.webp" height={600} width={600} alt="Step"></Image>
            </div>
            <div className="embla__slide">
                <Image src="/coresteps/step-3.webp" height={600} width={600} alt="Step"></Image>
            </div>
            <div className="embla__slide">
                <Image src="/coresteps/step-4.webp" height={600} width={600} alt="Step"></Image>
            </div>
            <div className="embla__slide">
                <Image src="/coresteps/step-5.webp" height={600} width={600} alt="Step"></Image>
            </div>
            <div className="embla__slide">
                <Image src="/coresteps/step-6.webp" height={600} width={600} alt="Step"></Image>
            </div>
            <div className="embla__slide">
                <Image src="/coresteps/step-7.webp" height={600} width={600} alt="Step"></Image>
            </div>
            <div className="embla__slide">
                <Image src="/coresteps/step-8.webp" height={600} width={600} alt="Step"></Image>
            </div>
            <div className="embla__slide">
                <Image src="/coresteps/step-9.webp" height={600} width={600} alt="Step"></Image>
            </div>
            <div className="embla__slide">
                <Image src="/coresteps/step-10.webp" height={600} width={600} alt="Step"></Image>
            </div>
            <div className="embla__slide">
                <Image src="/coresteps/step-11.webp" height={600} width={600} alt="Step"></Image>
            </div>
            <div className="embla__slide">
                <Image src="/coresteps/step12.webp" height={600} width={600} alt="Step"></Image>
            </div>


          </div>
        </div>

        {/*BUTTONS*/}

        <div className="home-carousel-buttons">
          <button
            className="embla__prev home-carousel-prev"
            onClick={scrollPrev}
          >
            <Image src="/prev.svg" height={50} width={50} alt="prev"></Image>
          </button>
          <button
            className="embla__next home-carousel-next"
            onClick={scrollNext}
          >
            <Image src="/next.svg" height={50} width={50} alt="next"></Image>
          </button>
        </div>
      </div>
    </>
  );
};
export default CorestepsCarousel;
