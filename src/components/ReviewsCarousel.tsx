"use client";

import React, { useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import useEmblaCarousel from "embla-carousel-react";

import "@/app/sass/ReviewsCarousel.scss";

const ReviewsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div className="reviews-carousel">
        <div className="reviews-carousel__viewport" ref={emblaRef}>
          <div className="reviews-carousel__container">


            <div className="reviews-carousel__slide">
              <div className="reviews-slide-carousel">
                <div className="content flex justify-center items-start flex-col">
                  <div className="name flex flex-col items-start">
                    <h2>Name</h2>
                    <Image src="/about/star.svg" height={40} width={40} alt=""></Image>
                  </div>
                  <div className="comment">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque officia dolorem ullam, omnis veniam, tempore repudiandae pariatur cumque magni rerum non! Aspernatur distinctio a, similique eaque eveniet excepturi repellendus, labore ad tenetur beatae praesentium facilis hic placeat saepe dolores ducimus!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="reviews-carousel__slide">
              <div className="reviews-slide-carousel">
                <div className="content flex justify-center items-start flex-col">
                  <div className="name flex flex-col items-start">
                    <h2>Name</h2>
                    <Image src="/about/star.svg" height={40} width={40} alt=""></Image>
                  </div>
                  <div className="comment">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque officia dolorem ullam, omnis veniam, tempore repudiandae pariatur cumque magni rerum non! Aspernatur distinctio a, similique eaque eveniet excepturi repellendus, labore ad tenetur beatae praesentium facilis hic placeat saepe dolores ducimus!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="reviews-carousel__slide">
              <div className="reviews-slide-carousel">
                <div className="content flex justify-center items-start flex-col">
                  <div className="name flex flex-col items-start">
                    <h2>Name</h2>
                    <Image src="/about/star.svg" height={40} width={40} alt=""></Image>
                  </div>
                  <div className="comment">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque officia dolorem ullam, omnis veniam, tempore repudiandae pariatur cumque magni rerum non! Aspernatur distinctio a, similique eaque eveniet excepturi repellendus, labore ad tenetur beatae praesentium facilis hic placeat saepe dolores ducimus!</p>
                  </div>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>

        {/*BUTTONS*/}

        <div className="reviews-carousel-buttons">
          <button
            className="reviews-carousel-prev m-5"
            onClick={scrollPrev}
          >
            <Image src="/prev.svg" height={50} width={50} alt="prev"></Image>
          </button>
          <button
            className="reviews-carousel-next m-5"
            onClick={scrollNext}
          >
            <Image src="/next.svg" height={50} width={50} alt="next"></Image>
          </button>
        </div>
      </div>
    </>
  );
};
export default ReviewsCarousel;

