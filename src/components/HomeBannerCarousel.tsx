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
        <div
          className="embla__viewport home-banner-carousel__viewport"
          ref={emblaRef}
        >
          <div className="home-banner-carousel__container">
            <motion.div
              className="home-carousel__slide"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <div className="home-slide-one">
                <div className="content">
                  <h2>
                    <b>Inspire Black</b>
                    <br />
                    Edition Collection
                  </h2>
                  <p>
                  The collection harmoniously combines the durability of waterproof laminate flooring with the calming tones of natural and richly textured wood scenery. 
                  </p>
                  <div className="mt-10">
                    <Link
                      className="link-light"
                      href="/collection/inspire-black-edition-collection"
                    >
                      See More!
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="home-carousel__slide"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <div className="home-slide-two">
                <div className="content">
                  <h2>
                    <b>Deco54</b>
                    <br />
                    Collection
                  </h2>
                  <p>
                  Deco54 exemplifies the highest quality in waterproof rigid core vinyl flooring. With a refined 8mm thickness, a matte finish, and a beautifully natural appearance.
                  </p>
                  <div className="mt-10">
                    <Link
                      className="link-light"
                      href="/collection/deco54-collection"
                    >
                      See More!
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="home-carousel__slide"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <div className="home-slide-three">
                <div className="content">
                  <h2>
                    <b>Project 2.0</b>
                    <br />
                    Collection
                  </h2>
                  <p>
                  Experience the ideal combination of style and functionality. Project 2.0 offers remarkable waterproof qualities and durability, with its subtle hues and lifelike wood appearance, making it an excellent choice for small retail spaces and bustling households.
                  </p>
                  <div className="mt-10">
                    <Link
                      className="link-light"
                      href="/collection/project2.0-collection"
                    >
                      See More!
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="home-carousel__slide"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <div className="home-slide-four">
                <div className="content">
                  <h2>
                    <b>Decotile</b>
                    <br />
                    Collection
                  </h2>
                  <p>
                  This collection perfectly blends affordable luxury, durability, and high-end aesthetics. DecoTile is the ideal option for those who desire flooring that fulfills their needs without sacrificing style.
                  </p>
                  <div className="mt-10">
                    <Link
                      className="link-light"
                      href="/collection/decotile-collection"
                    >
                      See More!
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
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
