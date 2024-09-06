"use client";

import React, { useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import useEmblaCarousel from "embla-carousel-react";

import "@/app/sass/CorestepsCarousel.scss";

const BaseboardsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div className="corestep-carousel">
        <div className="corestep__viewport" ref={emblaRef}>
          <div className="corestep__container">
            <div className="corestep__slide">
              <Image
                src="/core-moldings/Baseboard-1-6-Pine-WATERPROOF.webp"
                height={600}
                width={600}
                alt="Step"
              ></Image>
              <p className="text-center my-10 font-bold">Baseboard 1x6 Pine Waterproof</p>
            </div>
            <div className="corestep__slide flex flex-col h-auto justify-center">
              <Image
                src="/core-moldings/Baseboard-1-8-Pine.webp"
                height={600}
                width={600}
                alt="Step"
              ></Image>
              <p className="text-center my-10 font-bold">Baseboard 1x8 Pine</p>
            </div>
            <div className="corestep__slide flex flex-col h-auto justify-center">
              <Image
                src="/core-moldings/Baseboard-410-Pine.webp"
                height={600}
                width={600}
                alt="Step"
              ></Image>
              <p className="text-center my-10 font-bold">Baseboard 410 Pine</p>
            </div>
            <div className="corestep__slide flex flex-col h-auto justify-center">
              <Image
                src="/core-moldings/Baseboard-618-Pine.webp"
                height={600}
                width={600}
                alt="Step"
              ></Image>
              <p className="text-center my-10 font-bold">Baseboard 618 Pine</p>
            </div>
            <div className="corestep__slide flex flex-col h-auto justify-center">
              <Image
                src="/core-moldings/Baseboard-620-Pine.webp"
                height={600}
                width={600}
                alt="Step"
              ></Image>
              <p className="text-center my-10 font-bold">Baseboard 620 Pine</p>
            </div>
            <div className="corestep__slide flex flex-col h-auto justify-center">
              <Image
                src="/core-moldings/Baseboard-810-Pine.webp"
                height={600}
                width={600}
                alt="Step"
              ></Image>
              <p className="text-center my-10 font-bold">Baseboard 810 Pine</p>
            </div>
            <div className="corestep__slide flex flex-col h-auto justify-center">
              <Image
                src="/core-moldings/Baseboard-9769-Pine.webp"
                height={600}
                width={600}
                alt="Step"
              ></Image>
              <p className="text-center my-10 font-bold">Baseboard 9769 Pine</p>
            </div>
            <div className="corestep__slide flex flex-col h-auto justify-center">
              <Image
                src="/core-moldings/Baseboard&Casing1×4Pine.webp"
                height={600}
                width={600}
                alt="Step"
              ></Image>
              <p className="text-center my-10 font-bold">Baseboard Casing Pine</p>
            </div>
            <div className="corestep__slide flex flex-col h-auto justify-center">
              <Image
                src="/core-moldings/Quarter-Round-PinE-MDF-EPS-Waterproof.webp"
                height={600}
                width={600}
                alt="Step"
              ></Image>
              <p className="text-center my-10 font-bold">Quarter Round Pine MDF/EPS</p>
            </div>
          </div>
        </div>

        {/*BUTTONS*/}

        <div className="home-carousel-buttons">
          <button
            className="embla__prev corestep-carousel-prev"
            onClick={scrollPrev}
          >
            <Image src="/prev.svg" height={50} width={50} alt="prev"></Image>
          </button>
          <button
            className="embla__next corestep-carousel-next"
            onClick={scrollNext}
          >
            <Image src="/next.svg" height={50} width={50} alt="next"></Image>
          </button>
        </div>
      </div>
    </>
  );
};
export default BaseboardsCarousel;
