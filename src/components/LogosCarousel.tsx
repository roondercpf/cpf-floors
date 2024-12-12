"use client";

import React, { useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

import useEmblaCarousel from "embla-carousel-react";
import "@/app/sass/LogosCarousel.scss";


function LogosCarousel() {
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
              <Link href="/collection/decotile-collection">
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
              <Link href="/collection/spiritxl-collection">
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
              <Link href="/collection/deco54-collection">
                <Image
                  src="/logos/deco54.svg"
                  height={80}
                  width={80}
                  alt="Corepad Logo"
                ></Image>
              </Link>
            </div>

            <div className="embla__slide logos__slide">
              <Link href="/collection/quick48-collection">
                <Image
                  src="/logos/quick48.svg"
                  height={80}
                  width={80}
                  alt="Corepad Logo"
                ></Image>
              </Link>
            </div>

            <div className="embla__slide logos__slide">
              <Link href="/collection/evolve-collection">
                <Image
                  src="/logos/evolve.svg"
                  height={80}
                  width={80}
                  alt="Corepad Logo"
                ></Image>
              </Link>
            </div>

            <div className="embla__slide logos__slide">
              <Link href="/collection/inspire-black-edition-collection">
                <Image
                  src="/logos/ibe.svg"
                  height={80}
                  width={80}
                  alt="Corepad Logo"
                ></Image>
              </Link>
            </div>

            <div className="embla__slide logos__slide">
              <Link href="/collection/project2.0-collection">
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
              <Link href="/collection/project-collection">
                <Image
                  src="/logos/project.svg"
                  height={80}
                  width={80}
                  alt="Corepad Logo"
                ></Image>
              </Link>
            </div>

            <div className="embla__slide logos__slide">
              <Link href="/collection/alpha22-collection">
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
