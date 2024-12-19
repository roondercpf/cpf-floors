"use client";

import React, { useEffect, useState, useCallback } from "react";
import { Collections } from "@/interfaces/collections.model";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

import "@/app/sass/CollectionProfilePageCarousel.scss";

function CollectionProfilePageCarousel() {
  const [collections, setCollections] = useState<Collections[] | null>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  async function getCollections() {
    try {
      const response = await fetch(`/api/collections/`);
      const data = await response.json();
      setCollections(data.collections);
    } catch (error) {
      console.log("error: ", error);
    }
  }

  useEffect(() => {
    getCollections();
  }, []);

  return (
    <>
      <div className="carousel-title">
        <h2>More Collections Also Viewed</h2>
        <p>Choose the perfect collection for your needs.</p>
      </div>

      {/*CAROUSEL*/}

      <div className="col-profile">
        <div className="col-profile__viewport" ref={emblaRef}>
          <div className="col-profile__container">
            {collections ? (
              collections.map((col, index) => (
                <div key={index} className="col-profile__slide">
                  <div className="cover">
                    <Image
                      className="collection-cover"
                      unoptimized
                      src={col.cover}
                      height={0}
                      width={0}
                      alt=""
                    />
                  </div>
                  <div className="collection-name flex p-5">
                    <h2 className="mr-1">{col.name + " "}</h2>
                    <span>Collection</span>
                  </div>
                  <div className="specs p-5">
                    <div className="spec-cont">
                      <p>
                        Core: <span>{col.core}</span>
                      </p>
                    </div>
                    <div className="spec-cont">
                      <p>
                        Overall Thickness: <span>{col.overallThickness}</span>
                      </p>
                    </div>
                    <div className="spec-cont">
                      <p>
                        Wear Layer: <span>{col.wearLayer}</span>
                      </p>
                    </div>
                  </div>
                  <div className="p-5 mb-10">
                    <Link className="link-dark" href={col.collection_url}>
                      View Collection
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
        <button className="col-profile-prev" onClick={scrollPrev}>
          <Image src="/prev.svg" height={50} width={50} alt="prev"></Image>
        </button>
        <button className="col-profile-next" onClick={scrollNext}>
          <Image src="/next.svg" height={50} width={50} alt="next"></Image>
        </button>
      </div>
    </>
  );
}

export default CollectionProfilePageCarousel;
