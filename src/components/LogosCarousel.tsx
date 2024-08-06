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
              <Link href="/corepad">
                <Image
                  src="/logos/decotile.svg"
                  height={80}
                  width={80}
                  alt="Corepad Logo"
                ></Image>
              </Link>
            </div>

            <div className="embla__slide logos__slide">
              <Link href="/corepad">
                <Image
                  src="/logos/coresteps.svg"
                  height={80}
                  width={80}
                  alt="Corepad Logo"
                ></Image>
              </Link>
            </div>

            <div className="embla__slide logos__slide">
              <Link href="/corepad">
                <Image
                  src="/logos/spiritxl.svg"
                  height={80}
                  width={80}
                  alt="Corepad Logo"
                ></Image>
              </Link>
            </div>

            <div className="embla__slide logos__slide">
              <Link href="/corepad">
                <Image
                  src="/logos/coremoldings.svg"
                  height={80}
                  width={80}
                  alt="Corepad Logo"
                ></Image>
              </Link>
            </div>

            <div className="embla__slide logos__slide">
              <Link href="/corepad">
                <Image
                  src="/logos/deco54.svg"
                  height={80}
                  width={80}
                  alt="Corepad Logo"
                ></Image>
              </Link>
            </div>

            <div className="embla__slide logos__slide">
              <Link href="/corepad">
                <Image
                  src="/logos/quick48.svg"
                  height={80}
                  width={80}
                  alt="Corepad Logo"
                ></Image>
              </Link>
            </div>

            <div className="embla__slide logos__slide">
              <Link href="/corepad">
                <Image
                  src="/logos/evolve.svg"
                  height={80}
                  width={80}
                  alt="Corepad Logo"
                ></Image>
              </Link>
            </div>

            <div className="embla__slide logos__slide">
              <Link href="/corepad">
                <Image
                  src="/logos/ibe.svg"
                  height={80}
                  width={80}
                  alt="Corepad Logo"
                ></Image>
              </Link>
            </div>

            <div className="embla__slide logos__slide">
              <Link href="/corepad">
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
                  src="/logos/finfloor.svg"
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
              <Link href="/corepad">
                <Image
                  src="/logos/project.svg"
                  height={80}
                  width={80}
                  alt="Corepad Logo"
                ></Image>
              </Link>
            </div>

            <div className="embla__slide logos__slide">
              <Link href="/corepad">
                <Image
                  src="/logos/artisan.svg"
                  height={80}
                  width={80}
                  alt="Corepad Logo"
                ></Image>
              </Link>
            </div>

            <div className="embla__slide logos__slide">
              <Link href="/corepad">
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
