
import type { Metadata } from "next";
import { FRONTEND } from "../../../utils/env";
import { CollectionResponse } from "@/interfaces/collections.model";
import Image from "next/image";
import Link from "next/link";
import { redirect, notFound } from "next/navigation";

import "@/app/sass/Collections.scss";
import CollectionPlanksCarousel from "@/components/CollectionPlanksCarousel";

export const metadata: Metadata = {
  title: "Collections",
  description: "CPF Floors - Collections",
};

const productTypes = ["Rigid core Vinyl", "waterproof laminate"];

async function Collections({
  params: { category },
}: {
  params: { category: string };
}) {
  if (!["vinyl", "laminate"].includes(category)) {
    return notFound();
  }

  const res = await fetch(
    `${FRONTEND}/api/collections/productType/${category}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  const { collections }: CollectionResponse = await res.json();
  return (
    <>
      <div className="collections-main-banner">
        <div className="banner-img">
          <Image
            src="/collections-vinyl/Group 238.png"
            height={400}
            width={400}
            alt="CPF Floors vinyl collections"
          ></Image>
        </div>
        <div className="banner-text">
          <h2 className="capitalize">{productTypes.find((type) => type.toLowerCase().includes(category))}</h2>
          <p>
            Our {productTypes.find((type) => type.toLowerCase().includes(category))} Flooring
            offers exceptional resilience, easy installation, a comfortable
            feel, and lasting performance.
          </p>
        </div>
      </div>

      
      <div className="collections-container">
        {collections.length > 0 ? (
          <>
            {collections.map((collection) => {
              return (
                <div key={collection._id} className="collection-card">
                  <Image
                    src={collection.cover}
                    height={400}
                    width={400}
                    alt="CPF Floors Collections"
                  ></Image>
                  <div className="card-text">
                    <div className="collection-title">
                      <h2><b>{collection.name}</b> Collection</h2>
                    </div>
                    <div className="mb-10">
                      <p>By <b>{collection.brand}</b></p>
                      <p className="font-bold">{collection.serieName}</p>
                      <p>{collection.category}</p>
                    </div>
                    <div className="collection-specs flex mb-10">
                      <div className="link-dark w-auto mr-2 font-bold">{collection.core}</div>
                      <div className="link-dark w-auto mr-2 font-bold">{collection.overallThickness}</div>
                      <div className="link-dark w-auto mr-2 font-bold">{collection.wearLayer}</div>
                    </div>
                    <Link
                      className="link-dark"
                      href={"/collection/" + collection._id}
                    >
                      View Collection
                    </Link>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <>
            <h2>Not Found</h2>
          </>
        )}
      </div>
    </>
  );
}

export default Collections;
