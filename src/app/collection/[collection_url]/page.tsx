import { FRONTEND } from "@/utils/env";
import { Collections} from "@/interfaces/collections.model";
import { notFound } from "next/navigation";
import CollectionProfilePageCarousel from "@/components/CollectionProfilePageCarousel";
import CollectionVisualizer from "@/components/CollectionVisualizer";

import Link from "next/link";

import "@/app/sass/CollectionProfile.scss";
import "@/app/sass/Financing.scss";
import TabCollectionDescription from "@/components/TabCollectionDescription";

async function CollectionID({
  params: { collection_url },
}: {
  params: { collection_url: string };
}) {
  const res = await fetch(`${FRONTEND}/api/collections/`, {
    headers: { cache: "no-store" },
  });

  const collectionResponse = await res.json();
  console.log(collectionResponse);

  if ("error" in collectionResponse) {
    notFound();
  }

  const { collections }: { collections: Collections[] } = collectionResponse;

  const collection = collections.find(
    (collection) => collection.collection_url === collection_url
  );
  
  const collectionsWithoutCurrent = collections.filter(
    (collection) => collection.collection_url !== collection_url
  );

  if (!collection) {
    notFound();
  }

  return (
    <>
      <>
        <section>
          <CollectionVisualizer collection={collection} />
        </section>
      </>
      <>
        <TabCollectionDescription collection={collection} />
        <CollectionProfilePageCarousel />
      </>

      <section>
        <div className="bluetape-become-container">
          <div className="bluetape-become">
            <h2>Become a Dealer</h2>
            <p>& Transform Spaces with Style</p>
            <Link href="/become-a-dealer" className="link-light">
              Contact Now!
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default CollectionID;
