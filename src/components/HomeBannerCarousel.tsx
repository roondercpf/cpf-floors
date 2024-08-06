"use client";

import React, { useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import useEmblaCarousel from "embla-carousel-react";

import "@/app/sass/HomeBannerCarousel.scss";


const HomeBannerCarousel = () => {
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div className="home-banner-carousel-container">
        <div className="embla__viewport home-banner-carousel__viewport" ref={emblaRef}>
          <div className="home-banner-carousel__container">
            
            <div className="home-carousel__slide">
              <div className="home-slide-one">
                <div className="content">
                  <h2><b>Inspire Black</b><br />Edition Collection</h2>
                  <p>
                    The collection that perfectly blends the resilience of waterproof rigid core vinyl with the serene hues of natural and rich wood landscapes.
                  </p>
                  <Link className="link-light" href="#">
                    See More!
                  </Link>
                </div>
              </div>
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
export default HomeBannerCarousel;
