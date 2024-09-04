import { FRONTEND } from "@/utils/env";
import { Collections, Color } from "@/interfaces/collections.model";
import { notFound } from "next/navigation";

import Link from "next/link";
import Image from "next/image";
import { InfoSection } from "@/components/InfoSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import "@/app/sass/CollectionProfile.scss";
import "@/app/sass/Financing.scss";
import TabCollectionDescription from "@/components/TabCollectionDescription";

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
        <div className="room-img-container flex flex-col justify-between items-center flex-wrap">
          <Tabs defaultValue="scene-1" className="flex flex-wrap">
            <div className="room-img">
              <TabsContent value="scene-1">
                <Image
                  className="scene"
                  src="https://cpffloors.com/wp-content/uploads/2022/12/LETS-DO-IT-ROOM-SCENE-1200x1200.webp"
                  height={400}
                  width={400}
                  alt=""
                ></Image>
              </TabsContent>

              <TabsContent value="scene-2">
                <Image
                  className="scene"
                  src="https://cpffloors.com/wp-content/uploads/2023/09/BALANCED-OAK-ROOM-SCENE-1200x1200.webp"
                  height={400}
                  width={400}
                  alt=""
                ></Image>
              </TabsContent>

              <TabsContent value="scene-3">
                <Image
                  className="scene"
                  src="https://cpffloors.com/wp-content/uploads/2022/12/Execution-Room-Scene.jpg"
                  height={400}
                  width={400}
                  alt=""
                ></Image>
              </TabsContent>
            </div>

            {/*BUTTONS */}
            <div className="room-buttons flex flex-col justify-start items-start">
              <div className="collection-title flex items-center">
                <h2><b>{collection.name}</b> Collection</h2>
                </div>
              <p>By {collection.brand}</p>
              <div>
                <TabsList className="tab-list">
                  <TabsTrigger value="scene-1">
                    <Image
                      src="/home/r1.png"
                      height={90}
                      width={90}
                      alt=""
                    ></Image>
                  </TabsTrigger>
                  <TabsTrigger value="scene-2">
                    <Image
                      src="/home/r2.png"
                      height={90}
                      width={90}
                      alt=""
                    ></Image>
                  </TabsTrigger>
                  <TabsTrigger value="scene-3">
                    <Image
                      src="/home/r3.png"
                      height={90}
                      width={90}
                      alt=""
                    ></Image>
                  </TabsTrigger>
                  <TabsTrigger value="scene-1">
                    <Image
                      src="/home/r1.png"
                      height={90}
                      width={90}
                      alt=""
                    ></Image>
                  </TabsTrigger>
                  <TabsTrigger value="scene-2">
                    <Image
                      src="/home/r2.png"
                      height={90}
                      width={90}
                      alt=""
                    ></Image>
                  </TabsTrigger>
                  <TabsTrigger value="scene-3">
                    <Image
                      src="/home/r3.png"
                      height={90}
                      width={90}
                      alt=""
                    ></Image>
                  </TabsTrigger>
                  <TabsTrigger value="scene-2">
                    <Image
                      src="/home/r2.png"
                      height={90}
                      width={90}
                      alt=""
                    ></Image>
                  </TabsTrigger>
                  <TabsTrigger value="scene-3">
                    <Image
                      src="/home/r3.png"
                      height={90}
                      width={90}
                      alt=""
                    ></Image>
                  </TabsTrigger>
                  <TabsTrigger value="scene-2">
                    <Image
                      src="/home/r2.png"
                      height={90}
                      width={90}
                      alt=""
                    ></Image>
                  </TabsTrigger>
                  <TabsTrigger value="scene-3">
                    <Image
                      src="/home/r3.png"
                      height={90}
                      width={90}
                      alt=""
                    ></Image>
                  </TabsTrigger>
                </TabsList>
              </div>
            </div>
          </Tabs>
        </div>
      </div>

      <TabCollectionDescription collection={collection}  />

      {/* <div className="most-main-banner">
        <h2>More collection also viewed</h2>
        <div className="flex flex-row flex-wrap justify-center items-center">
          {collectionsWithoutCurrent.map((collection, index) => (
            <div
              className="most-container flex flex-row flex-wrap justify-center items-center"
              key={index * Math.random() + 3}
            >
              <div className="most-card flex flex-col flex-wrap justify-center items-center">
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
      </div> */}

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
