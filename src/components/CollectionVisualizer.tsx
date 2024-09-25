"use client"
import React from "react";
import { Color, Collections } from "@/interfaces/collections.model";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import "@/app/sass/CollectionVisualizer.scss";

interface Props {
  collection: Collections;
}


const CollectionVisualizer: React.FC<Props> = ({ collection }) => {
    console.log(collection)
  return (
    <div className="color-visualizer-container">
      <div className="collection-name flex items-center justify-between p-10">
        <div>
        <h2><b>{collection.name}</b> Collection</h2>
        <p>{collection.productType}</p>
        </div>
        <p>by <b>{collection.brand}</b></p>
      </div>


        <Tabs defaultValue={collection.colors[0]?.name}>
          <div className="collection-room">
            {collection.colors.map((col, index) => (
              <TabsContent className="collection-room-img" key={index} value={col.name}>
                <Image
                  key={index}
                  src={col.room_scenes}
                  height={100}
                  width={100}
                  alt={col.name}
                  unoptimized
                />
              </TabsContent>
            ))}
          </div>

          {/*BUTTONS*/}
          <div className="collection-room-buttons flex items-center justify-center flex-wrap">
            {collection.colors.map((col, index) => (
              <TabsList key={index}>
                <TabsTrigger value={col.name} className="flex flex-col">
                  <Image
                    className="rounded mb-5"
                    key={index}
                    src={col.picture}
                    height={100}
                    width={100}
                    alt={col.name}
                  />
                  <p>{col.name}</p>
                </TabsTrigger>
              </TabsList>
            ))}
          </div>
        </Tabs>
      
    </div>
  );
};

export default CollectionVisualizer;
