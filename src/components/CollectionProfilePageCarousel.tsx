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
      <div className="collections-carousel">
        <div className="collections-carousel__viewport" ref={emblaRef}>
          <div className="collections-carousel__container">
            {collections?.map((col, index) => (
              <div key={index} className="collections-carousel__slide">
                <Image
                  src={col.cover}
                  height={200}
                  width={200}
                  alt={col.name}
                  unoptimized
                ></Image>
                <div className="p-10">
                  <h3>
                    <b>{col.name}</b> Collection
                  </h3>
                  <p>
                    By <b>{col.brand}</b>
                  </p>
                  <div className="collection-specs flex flex-col mb-20">
                    <div className="specs  my-2">
                      <b>Core: </b> {col.core}{" "}
                    </div>
                    <div className="specs  my-2">
                      <b>Overall Thickness: </b> {col.overallThickness}
                    </div>
                    <div className="specs  my-2">
                      <b>Wear Layer: </b> {col.wearLayer}
                    </div>
                  </div>
                  <Link
                    className="link-dark"
                    href={"/collection/" + col.collection_url}
                  >
                    View Collection
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="collections-carousel-prev" onClick={scrollPrev}>
          <Image src="/prev.svg" height={50} width={50} alt="prev"></Image>
        </button>
        <button className="collections-carousel-next" onClick={scrollNext}>
          <Image src="/next.svg" height={50} width={50} alt="next"></Image>
        </button>
      </div>
    </>
  );
}

export default CollectionProfilePageCarousel;
