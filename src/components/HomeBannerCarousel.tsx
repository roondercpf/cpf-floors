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
      <div className="embla home-banner-carousel-container">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide home-carousel-slide">
              <div className="home-slide-one">
                <div className="content">
                  <h2>Inspire Black</h2>
                  <h3>Edition Collection</h3>
                  <p>
                    The collection that perfectly blends the resilience of
                    waterproof rigid core vinyl with the serene hues of natural
                    and rich wood landscapes.
                  </p>
                  <Link className="link-light" href="#">
                    See More!
                  </Link>
                </div>
              </div>
            </div>

            <div className="embla__slide home-carousel-slide">
              <div className="home-slide-two">
                <div className="content">
                  <h2>Spirit XL</h2>
                  <h3>Collection</h3>
                  <p>
                    The collection that perfectly blends the resilience of
                    waterproof rigid core vinyl with the serene hues of natural
                    and rich wood landscapes.
                  </p>
                  <Link className="link-light" href="#">
                    See More!
                  </Link>
                </div>
              </div>
            </div>

            <div className="embla__slide home-carousel-slide">
              <div className="home-slide-three">
                <div className="content">
                  <h2>Project</h2>
                  <h3>Collection</h3>
                  <p>
                    The collection that perfectly blends the resilience of
                    waterproof rigid core vinyl with the serene hues of natural
                    and rich wood landscapes.
                  </p>
                  <Link className="link-light" href="#">
                    See More!
                  </Link>
                </div>
              </div>
            </div>

            <div className="embla__slide home-carousel-slide">
              <div className="home-slide-four">
                <div className="content">
                  <h2>Quick48+</h2>
                  <h3>Collection</h3>
                  <p>
                    The collection that perfectly blends the resilience of
                    waterproof rigid core vinyl with the serene hues of natural
                    and rich wood landscapes.
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
