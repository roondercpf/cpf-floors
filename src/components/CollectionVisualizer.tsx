"use client";
import React, { useState } from "react";
import { Color, Collections } from "@/interfaces/collections.model";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";

import "@/app/sass/CollectionVisualizer.scss";
import "@/app/globals.css";

interface Props {
  collection: Collections;
}

const CollectionVisualizer: React.FC<Props> = ({ collection }) => {
  const [expand, setExpand] = useState(false);
  const [image, setImage] = useState("");
  return (
    <>
      <div className="color-visualizer-container flex flex-col justify-center items-center">
        <div className="collection-name flex items-center justify-between p-10">
          <div>
            <h2>
              <b>{collection.name}</b> Collection
            </h2>
            <p>{collection.productType}</p>
          </div>
          <p>
            by <b>{collection.brand}</b>
          </p>
        </div>

        <Tabs defaultValue={collection.colors[0]?.name}>
          <div className="collection-room">
            {collection.colors.map((col, index) => (
              <TabsContent
                className="collection-room-img"
                key={index}
                value={col.name}
              >
                <>
                  {col.room_scenes ? (
                    <>
                      <Image
                        className="logo-visualizer"
                        src="/white-logo.svg"
                        height={40}
                        width={40}
                        alt="CPF Floors"
                      ></Image>
                      <Image
                        className="room-scene"
                        key={index}
                        src={col.room_scenes}
                        height={100}
                        width={100}
                        alt={col.name}
                        unoptimized
                        onClick={() => {
                          setImage(col.room_scenes);
                          console.log(image);
                          setExpand(!expand);
                        }}
                      />
                    </>
                  ) : (
                    <p>Loading</p>
                  )}
                </>
              </TabsContent>
            ))}
          </div>

          {/*BUTTONS*/}
          <div className="collection-room-buttons flex items-center justify-center flex-wrap">
            {collection.colors.map((col, index) => (
              <TabsList key={index}>
                <TabsTrigger
                  value={col.name}
                  className="tab-button flex flex-col"
                >
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

      <AnimatePresence initial={false}>
        {expand && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="expand-container"
          >
            <Image
              onClick={() => setExpand(!expand)}
              className="close"
              src="/close.svg"
              height={40}
              width={40}
              alt="close"
            ></Image>
            <Image
              className="white-logo"
              src="/white-logo.svg"
              height={60}
              width={60}
              alt="CPF Floors"
            ></Image>
            {image === "" ? (
              <div className="loader-screen">
                <Image
                  className="header-desktop-logo"
                  alt="CPF Floors logo"
                  src="/header_desktop_logo.svg"
                  height={150}
                  width={150}
                ></Image>
                <span className="loader"></span>
              </div>
            ) : (
              <Image
                src={`${image}`}
                height={500}
                width={500}
                alt=""
                unoptimized
              ></Image>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CollectionVisualizer;
