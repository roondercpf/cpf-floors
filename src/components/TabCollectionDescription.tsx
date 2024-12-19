"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collections } from "@/interfaces/collections.model";
import resources from "@/../resources/resources2.json";
import { motion, AnimatePresence, animate } from "framer-motion";

import "@/app/sass/TabCollectionDescription.scss";

interface Props {
  collection: Collections;
}

const TabCollectionDescription: React.FC<Props> = ({ collection }) => {

  const [expandColor, setExpandColor] = useState("")
  const [expand, setExpand] = useState(false)
  const [colorName, setColorName] = useState("")
  const [collectionName, setCollectionName] = useState("")

  const resource = resources.find(
    (resource) => resource.name === "Installation Manual"
  ) as (typeof resources)[0];

  const data = resources.find(
    (data) => data.name === collection.name
  ) as (typeof resources)[0];
  
  return (
    <>
      <div className="tabs-container">
        <Tabs defaultValue="description">
          <div className="tabs-buttons">
            <TabsList>
              <div className="tab-list flex justify-between">
                <TabsTrigger value="description">
                  <div className="tab">Description</div>
                </TabsTrigger>
                <TabsTrigger value="color">
                  <div className="tab">Colors</div>
                </TabsTrigger>
                <TabsTrigger value="specs">
                  <div className="tab">Specs</div>
                </TabsTrigger>
                <TabsTrigger value="Installation Manual">
                  <div className="tab">Installation Manual</div>
                </TabsTrigger>
                <TabsTrigger value="Technical Data">
                  <div className="tab">Technical Data</div>
                </TabsTrigger>
              </div>
            </TabsList>
          </div>

          {/*CONTENT */}
          <TabsContent value="description">
            <div className="content-tab">
              <div className="description-img">
                <Image
                  src="/description.svg"
                  height={400}
                  width={400}
                  alt=""
                ></Image>
              </div>
              <div className="description-text">
                <h2>
                  <b>{collection.name}</b> Collection
                </h2>
                <p>{collection.description}</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="color">
            <div className="content-tab">
              <div className="color-list">
                <h2>Color List</h2>
                {collection.colors.map((col, index) => (
                  <p onClick={() => {
                    setExpandColor(col.picture)
                    setExpand(!expand)
                    setColorName(col.name)
                    setCollectionName(collection.name)
                  }} key={index}>{col.name}</p>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="specs">
            <div className="content-tab">
              <div className="specs-container">
                <h2>Specifications</h2>
                <p className="my-4">
                  <b>Product Type: </b>
                  {collection.productType}
                </p>
                <p className="my-4">
                  <b>Core: </b>
                  {collection.core}
                </p>
                <p className="my-4">
                  <b>Thickness: </b>
                  {collection.overallThickness}
                </p>
                <p className="my-4">
                  <b>Class: </b>
                  {collection.trafficClass}
                </p>
                <p className="my-4">
                  <b>Underlayment: </b>
                  {collection.underlayment}
                </p>
                <p className="my-4">
                  <b>Wear Layer: </b>
                  {collection.wearLayer}
                </p>
                <p className="my-4">
                  <b>Plank Size: </b>
                  {collection.colors[0].plankSize}
                </p>
                <p className="my-4">
                  <b>Planks per box: </b>
                  {collection.colors[0].planksPerBox}
                </p>
                <p className="my-4">
                  <b>SqFt per box: </b>
                  {collection.colors[0].sqftPerBox}
                </p>
                <p className="my-4">
                  <b>SqFt per pallet: </b>
                  {collection.colors[0].sqftPerPallet}
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="Installation Manual">
            <div className="content-tab">
              <div className="installation-container w-100 flex flex-col justify-center items-center">
                <Image
                  src={resource.cover}
                  height={200}
                  width={200}
                  alt={resource.name}
                />
                <h2>{resource.name}</h2>
                <Link href={resource.url} target="_blank" className="link-dark">
                  DownLoad
                </Link>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="Technical Data">
            <div className="content-tab">
              <div className="installation-container w-100 flex flex-col justify-center items-center">
                {data ? (
                  <>
                    <Image
                      src={data.cover}
                      height={500}
                      width={200}
                      alt={data.name}
                    />
                    <h2>
                      <b>{data.name}</b> Collection Technical Data
                    </h2>
                    <Link href={data.url} target="_blank" className="link-dark">
                      DownLoad
                    </Link>
                  </>
                ) : (
                  <p>This resource will be available soon</p>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <AnimatePresence initial={false}>
                {expand && (
                  <>
                    <motion.div
                    className="expand-color-container"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.5}}
                    onClick={() => setExpand(false)}>
                        <Image onClick={() => setExpand(false)} className="close" src="/close.svg" height={20} width={20} alt="close"></Image>
                        <div className="image-container">
                        <Image src={`${expandColor}`} width={400} height={400} alt={collection.name} unoptimized></Image>
                        <h2><b>{collectionName}</b> Collection</h2>
                        <p>{colorName}</p>
                        </div>
                    </motion.div>
                  </>
                )}
      </AnimatePresence>
    </>
  );
};

export default TabCollectionDescription;
