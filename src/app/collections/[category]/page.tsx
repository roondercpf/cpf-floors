import type { Metadata } from "next";
import { FRONTEND } from "../../../utils/env";
import { CollectionResponse } from "@/interfaces/collections.model";
import Image from "next/image";
import Link from "next/link";

import "@/app/sass/Collections.scss";

export const metadata: Metadata = {
  title: "Collections",
  description: "CPF Floors - Collections",
};

async function Collections() {
  const res = await fetch(`${FRONTEND}/api/collections/`, {
    next: {
      revalidate: 5,
    },
  });
  const { collections }: CollectionResponse = await res.json();
  console.log(collections);
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
          <h2>Rigid Core Vinyl Flooring</h2>
          <p>
            Our Rigid Core Vinyl Flooring offers exceptional resilience, easy
            installation, a comfortable feel, and lasting performance.
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
                    src="/home/slide6.png"
                    height={400}
                    width={400}
                    alt="CPF Floors Collections"
                  ></Image>
                  <div className="card-text">
                    <div className="collection-title">
                      <h2>{collection.name}</h2>
                      <h2>Collection</h2>
                    </div>
                    <div className="mb-10">
                      <p className="font-bold">{collection.brand}</p>
                      <p className="font-bold">{collection.serieName}</p>
                      <p>{collection.category}</p>
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
