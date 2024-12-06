"use client";

import React, { useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import useEmblaCarousel from "embla-carousel-react";
import "@/app/sass/FilterCarouselPage.scss";

function FilterCarouselPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div className="embla filter">
        <div className="embla__viewport filter__viewport" ref={emblaRef}>
          <div className="embla__container filter__container">
            <div className="filter-card__slide">
              <Link href="#">
                <motion.img
                  src="/filter-slide-1.png"
                  height={80}
                  width={80}
                  alt="Corepad Logo"
                />
                <div className="effect">
                <motion.img
                  src="/shadow.png"
                  height={80}
                  width={80}
                  alt="Corepad Logo"
                  className="shadow"
                />
                <motion.img
                  src="/filter-plank-1.png"
                  height={80}
                  width={80}
                  alt="Corepad Logo"
                  className="filter-plank"
                />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FilterCarouselPage;
