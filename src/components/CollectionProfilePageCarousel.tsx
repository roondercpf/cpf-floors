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
      const data = await response.json()
      setCollections(data.collections)
    } catch (error) {
      console.log("error: ", error)
    }
  }

  useEffect(() => {
    getCollections();
  }, []);

  console.log(typeof collections)

  return (
    <>
      <div className="collections-carousel">
        <div className="collections-carousel__viewport" ref={emblaRef}>
          <div className="collections-carousel__container">
            {collections?.map((col, index) => (
              <div key={index} className="collections-carousel__slide">
                <img
                  src={col.cover}
                  height={200}
                  width={200}
                  alt={col.name}
                ></img>
                <div className="p-5">
                  <h3>
                    <b>{col.name}</b> Collection
                  </h3>
                  <p>By <b>{col.brand}</b></p>
                  <div className="collection-specs flex mb-20">
                    <div className="specs link-dark mr-5">{col.core}</div>
                    <div className="specs link-dark mr-5">{col.overallThickness}</div>
                    <div className="specs link-dark mr-5">{col.wearLayer}</div>
                  </div>
                  <Link className="link-dark" href="/${col.id}">
                    View Collection
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="collections-carousel-buttons">
          <button className="collections-carousel-prev" onClick={scrollPrev}>
            <Image src="/prev.svg" height={50} width={50} alt="prev"></Image>
          </button>
          <button className="collections-carousel-next" onClick={scrollNext}>
            <Image src="/next.svg" height={50} width={50} alt="next"></Image>
          </button>
        </div>
      </div>
    </>
  );
}

export default CollectionProfilePageCarousel;
