import { FRONTEND } from "@/utils/env";
import { Collections, Color } from "@/interfaces/collections.model";
import { notFound } from "next/navigation";

import Link from "next/link";
import Image from "next/image";
import { InfoSection } from "@/components/InfoSection";

import "@/app/sass/CollectionProfile.scss";
import "@/app/sass/Financing.scss";

import CollectionPlanksCarousel from "@/components/CollectionPlanksCarousel";

async function CollectionsID({
  params: { collection_id },
}: {
  params: { collection_id: string };
}) {
  const res = await fetch(`${FRONTEND}/api/collections/`);

  const collectionResponse = await res.json();

  if ("error" in collectionResponse) {
    notFound();
  }

  const { collections }: { collections: Collections[] } = collectionResponse;

  const collection = collections.find(
    (collection) => collection._id === collection_id
  );

  const collectionsWithoutCurrent = collections.filter(
    (collection) => collection._id !== collection_id
  );

  if (!collection) {
    notFound();
  }

  return (
    <>
      <div className="collection-banner">
        <div className="collection-banner-carousel">
          <CollectionPlanksCarousel colors={collection.colors} />
        </div>
        <div className="collection-banner-text">
          <Image
            src="/coreproof-logo.svg"
            height={350}
            width={350}
            alt="coreproof"
          ></Image>
          <h2 className="my-5">{collection.name}</h2>
          <p>{collection.brand}</p>
        </div>
      </div>

      <InfoSection collection={collection} />

      <div className="most-main-banner">
        <h2>More collection also viewed</h2>
        <div className="flex flex-row flex-wrap justify-center items-center">
          {collectionsWithoutCurrent.map((collection, index) => (
            <div className="most-container flex flex-row flex-wrap justify-center items-center" key={index * Math.random() + 3}>
              <div
                className="most-card flex flex-col flex-wrap justify-center items-center"
              >
                <Image
                  className="most-img"
                  src={
                    collection.colors[0].picture
                      ? collection.colors[0].picture
                      : "/place-img.jpg"
                  }
                  height={400}
                  width={400}
                  alt={collection.name}
                ></Image>
                <h3>{collection.name}</h3>
                <p>{collection.brand}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bluetape-become-container">
        <div className="bluetape-become">
          <h2>Become a Dealer</h2>
          <p>& Transform Spaces with Style</p>
          <Link href="/become-a-dealer" className="link-light">
            Contact Now!
          </Link>
        </div>
      </div>
    </>
  );
}

export default CollectionsID;
