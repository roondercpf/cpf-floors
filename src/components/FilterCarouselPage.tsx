"use client";

import React, { useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import useEmblaCarousel from "embla-carousel-react";
import "@/app/sass/FilterCarouselPage.scss";

function FilterCarouselPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const url = [
    {
      url: "/filter-slide-1.png",
      plank: "/filter-plank-1.png",
      shadow: "/shadow.png",
      title: "Gray's",
      p: "Category",
    },
    {
      url: "/filter-slide-2.png",
      plank: "/filter-plank-2.png",
      shadow: "/shadow.png",
      title: "Dark Naturals",
      p: "Category",
    },
    {
      url: "/filter-slide-3.png",
      plank: "/filter-plank-3.png",
      shadow: "/shadow.png",
      title: "Naturals",
      p: "Category",
    },
    {
      url: "/filter-slide-4.png",
      plank: "/filter-plank-4.png",
      shadow: "/shadow.png",
      title: "Off Whites",
      p: "Category",
    },
    {
      url: "/filter-slide-5.png",
      plank: "/filter-plank-5.png",
      shadow: "/shadow.png",
      title: "Tan Tones",
      p: "Category",
    },
  ];

  return (
    <>
      <div className="embla filter">
        <div className="embla__viewport filter__viewport" ref={emblaRef}>
          <div className="embla__container filter__container">
            {url.map((img, index) => (
              <div key={index} className="filter-card__slide">
                <div className="slide-text">
                  <h2>{img.title}</h2>
                  <p>{img.p}</p>
                </div>
                <Link href="/quick-search">
                  <motion.img
                    src={img.url}
                    height={80}
                    width={80}
                    alt="Corepad Logo"
                  />
                  <div className="effect">
                    <motion.img
                      src={img.shadow}
                      height={80}
                      width={80}
                      alt="Corepad Logo"
                      className="shadow"
                    />
                    <motion.img
                      src={img.plank}
                      height={80}
                      width={80}
                      alt="Corepad Logo"
                      className="filter-plank"
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default FilterCarouselPage;
