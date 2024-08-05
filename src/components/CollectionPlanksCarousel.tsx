"use client";

import React, { useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Color } from "@/interfaces/collections.model";

import useEmblaCarousel from "embla-carousel-react";

import "@/app/sass/CollectionProfile.scss";

const CollectionPlanksCarousel = ({ colors }: { colors: Color[] }) => {
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
            {colors.map((color, index) => (
              <div className="embla__slide" key={index}>
                <Image className="carousel-image"
                  src={color.picture ? color.picture : "/place-img"}
                  height={500}
                  width={500}
                  alt={color.name}
                ></Image>
              </div>
            ))}
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
export default CollectionPlanksCarousel;
