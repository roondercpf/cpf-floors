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
                    <h2>JM Ferrer</h2>
                    <Image src="/about/star.svg" height={40} width={40} alt=""></Image>
                  </div>
                  <div className="comment">
                    <p>Excellent company, excellent quality products, very professional, Mario, Javier & Esteban always willing to seek excellence...highly recommended</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="reviews-carousel__slide">
              <div className="reviews-slide-carousel">
                <div className="content flex justify-center items-start flex-col">
                  <div className="name flex flex-col items-start">
                    <h2>Walter Salas</h2>
                    <Image src="/about/star.svg" height={40} width={40} alt=""></Image>
                  </div>
                  <div className="comment">
                    <p>CPF Floors services are simply exceptional. With a stunning range of styles and colors, they offer something for every home decor. The personalized attention and speed of delivery are remarkable. The CPF team ensures meticulous work, resulting in impeccable floors. Highly recommended!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="reviews-carousel__slide">
              <div className="reviews-slide-carousel">
                <div className="content flex justify-center items-start flex-col">
                  <div className="name flex flex-col items-start">
                    <h2>Derek Clobes</h2>
                    <Image src="/about/star.svg" height={40} width={40} alt=""></Image>
                  </div>
                  <div className="comment">
                    <p>They went above and beyond to ensure my client was moving in onto new flooring..Communication was clear. The product looks amazing. The installer is excited to work with the product in the future and I have peace of mind knowing that it is well built and a conscientious team backs it up.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="reviews-carousel__slide">
              <div className="reviews-slide-carousel">
                <div className="content flex justify-center items-start flex-col">
                  <div className="name flex flex-col items-start">
                    <h2>Nelson Martínez</h2>
                    <Image src="/about/star.svg" height={40} width={40} alt=""></Image>
                  </div>
                  <div className="comment">
                    <p>Top of the line materials with the Best customer service we are grateful for all the support</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="reviews-carousel__slide">
              <div className="reviews-slide-carousel">
                <div className="content flex justify-center items-start flex-col">
                  <div className="name flex flex-col items-start">
                    <h2>Joel Freitas</h2>
                    <Image src="/about/star.svg" height={40} width={40} alt=""></Image>
                  </div>
                  <div className="comment">
                    <p>Muy profesionales, conseguimos un piso extraordinario para nuestras oficinas!</p>
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

