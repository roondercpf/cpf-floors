import { FRONTEND } from "@/utils/env";
import { Collections } from "@/interfaces/collections.model";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import "@/app/sass/CollectionProfile.scss";
import "@/app/sass/Financing.scss";
import CollectionPlanksCarousel from "@/components/CollectionPlanksCarousel";

async function CollectionsID({
  params: { collection_id },
}: {
  params: { collection_id: string };
}) {
  const res = await fetch(`${FRONTEND}/api/collections/${collection_id}`);
  const data: Collections = await res.json();

  console.log(data);

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
          <p>{data.product_type}</p>
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

      <>
        <div className="specs-section p-3">
          <h2>Specifications</h2>
          <div className="specs-text flex flex-wrap justify-center items-start">
            <div className="specs m-10">
              <p>Size</p>
              <h3>{data.plank_sizes}</h3>
            </div>
            <div className="specs m-10">
              <p>Box</p>
              <h3>{data.sqft_per_box}</h3>
              <p>{data.planks_per_box} Planks</p>
            </div>
            <div className="specs m-10">
              <p>Sqft per Pallet</p>
              <h3>{data.sqft_per_pallet}</h3>
              <p>{data.box_per_pallet} Boxes</p>
            </div>

            <div className="specs m-10">
              <p>Thickness</p>
              <h3>{data.overall_thickness}</h3>
              <p>{data.underlayment}</p>
            </div>

            <div className="specs m-10">
              <p>Instalation Type</p>
              <h3 className="flex lowercase">{data.installation_method}</h3>
            </div>

            <div className="specs m-10">
              <p>Wear Layer</p>
              <h3>{data.wear_layer}</h3>
            </div>

            <div className="specs m-10">
              <p>Class</p>
              <h3 className="lowercase">{data.traffic_class}</h3>
            </div>
          </div>
        </div>
      </>

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
