"use client";

import React, { useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import useEmblaCarousel from "embla-carousel-react";
import "@/app/sass/LogosCarousel.scss";

const LogosCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div className="embla logos">
        <div className="embla__viewport logos__viewport" ref={emblaRef}>
          <div className="embla__container logos__container">

            <div className="embla__slide logos__slide">
              <Link href="/corepad">
                <Image
                  src="/logos/corepad.svg"
                  height={80}
                  width={80}
                  alt="Corepad Logo"
                ></Image>
              </Link>
            </div>

            <div className="embla__slide logos__slide">
              <Link href="/collection/66ae8f0d0c8f4839920a6422">
                <Image
                  src="/logos/decotile.svg"
                  height={80}
                  width={80}
                  alt="Corepad Logo"
                ></Image>
              </Link>
            </div>

            <div className="embla__slide logos__slide">
              <Link href="/coresteps">
                <Image
                  src="/logos/coresteps.svg"
                  height={80}
                  width={80}
                  alt="Corepad Logo"
                ></Image>
              </Link>
            </div>

            <div className="embla__slide logos__slide">
              <Link href="/collection/66abd8bbff92ba10a656047e">
                <Image
                  src="/logos/spiritxl.svg"
                  height={80}
                  width={80}
                  alt="Corepad Logo"
                ></Image>
              </Link>
            </div>

            <div className="embla__slide logos__slide">
              <Link href="/core-moldings">
                <Image
                  src="/logos/coremoldings.svg"
                  height={80}
                  width={80}
                  alt="Corepad Logo"
                ></Image>
              </Link>
            </div>

            <div className="embla__slide logos__slide">
              <Link href="/collection/66cb600baec0a38cb01ff2e1">
                <Image
                  src="/logos/deco54.svg"
                  height={80}
                  width={80}
                  alt="Corepad Logo"
                ></Image>
              </Link>
            </div>

            <div className="embla__slide logos__slide">
              <Link href="/collection/66abffc6ff92ba10a656048d">
                <Image
                  src="/logos/quick48.svg"
                  height={80}
                  width={80}
                  alt="Corepad Logo"
                ></Image>
              </Link>
            </div>

            <div className="embla__slide logos__slide">
              <Link href="/collection/66afb340613ab3dab29c8557">
                <Image
                  src="/logos/evolve.svg"
                  height={80}
                  width={80}
                  alt="Corepad Logo"
                ></Image>
              </Link>
            </div>

            <div className="embla__slide logos__slide">
              <Link href="/collection/66afbdb4613ab3dab29c8558">
                <Image
                  src="/logos/ibe.svg"
                  height={80}
                  width={80}
                  alt="Corepad Logo"
                ></Image>
              </Link>
            </div>

            <div className="embla__slide logos__slide">
              <Link href="/collection/66abc1c6ff92ba10a656047d">
                <Image
                  src="/logos/project20.svg"
                  height={80}
                  width={80}
                  alt="Corepad Logo"
                ></Image>
              </Link>
            </div>


            <div className="embla__slide logos__slide">
              <Link href="/corepad">
                <Image
                  src="/logos/mutepad.svg"
                  height={80}
                  width={80}
                  alt="Corepad Logo"
                ></Image>
              </Link>
            </div>

            <div className="embla__slide logos__slide">
              <Link href="/#">
                <Image
                  src="/logos/project.svg"
                  height={80}
                  width={80}
                  alt="Corepad Logo"
                ></Image>
              </Link>
            </div>

            <div className="embla__slide logos__slide">
              <Link href="/collection/66acef9bda1972c3cb4245eb">
                <Image
                  src="/logos/artisan.svg"
                  height={80}
                  width={80}
                  alt="Corepad Logo"
                ></Image>
              </Link>
            </div>

            <div className="embla__slide logos__slide">
              <Link href="/collection/66cb5b6caec0a38cb01ff2e0">
                <Image
                  src="/logos/alpha22.svg"
                  height={80}
                  width={80}
                  alt="Corepad Logo"
                ></Image>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
export default LogosCarousel;
