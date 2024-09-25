"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collections } from "@/interfaces/collections.model";
import resources from "@/../resources/resources2.json";

import "@/app/sass/TabCollectionDescription.scss";

interface Props {
  collection: Collections;
}

const TabCollectionDescription: React.FC<Props> = ({ collection }) => {
  const resource = resources.find(
    (resource) => resource.name === "Installation Manual"
  ) as (typeof resources)[0];

  const tech = resources.find(
    (tech) => tech.name === "Technical Data"
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
        </Tabs>
      </div>
    </>
  );
};

export default TabCollectionDescription;
