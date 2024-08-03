import { FRONTEND } from "@/utils/env";
import { Collections, Color } from "@/interfaces/collections.model";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";


import "@/app/sass/CollectionProfile.scss";
import "@/app/sass/Financing.scss";

import CollectionPlanksCarousel from "@/components/CollectionPlanksCarousel";

async function CollectionsID( { params: { collection_id }} : {params: { collection_id: string }}) {
  
  const res = await fetch(`${FRONTEND}/api/collections/${collection_id}`);

  const data: Collections = await res.json();

 
  console.log(data.colors);


  if ("error" in data) {
    notFound();
  }

  return (
    <>
      <div className="collection-banner">
        <div className="collection-banner-carousel">
          <CollectionPlanksCarousel />
        </div>
        <div className="collection-banner-text">
          <Image
            src="/coreproof-logo.svg"
            height={350}
            width={350}
            alt="coreproof"
          ></Image>
          <h2 className="my-5">{data.name}</h2>
          <p>{data.brand}</p>
        </div>
      </div>

      

      <div className="description-banner">
        <div className="description">
          <div className="description-banner-img">
            <Image
              src="/description.svg"
              height={600}
              width={600}
              alt="coreproof"
            ></Image>
          </div>
          <div className="description-banner-text">
            <h2 className="my-5">{data.name}</h2>
            <h3>The Major Collection Flooring</h3>
            <p>{data.description}</p>
            <div className="icons flex flex-wrap my-10">
              <Image
                src="/icon1.svg"
                height={100}
                width={100}
                alt="coreproof"
              ></Image>
              <Image
                src="/icon2.svg"
                height={100}
                width={100}
                alt="coreproof"
              ></Image>
              <Image
                src="/icon3.svg"
                height={100}
                width={100}
                alt="coreproof"
              ></Image>
              <Image
                src="/icon4.svg"
                height={100}
                width={100}
                alt="coreproof"
              ></Image>
            </div>
          </div>
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
