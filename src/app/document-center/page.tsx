"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import resource from "@/../resources/resources2.json";

import "@/app/sass/DocumentCenter.scss";

function DocumentCenter() {
  const [search, setSearch] = useState("");

  const filteredResources = useMemo(() => {
    return resource.filter((resource) =>
      resource.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <>
      <div className="document-center-banner">
        <div className="document-img">
          <Image
            src="/document-center/banner-img.png"
            height={600}
            width={600}
            alt="CPF Floors Resources"
          ></Image>
        </div>
        <div className="document-text">
          <h2>Document Center</h2>
          <h3>Warranty, Sell sheets & More</h3>
          <p>
            Explore all the resources of warranties, sales sheets, and more to
            compare options, and make informed decisions by presenting key
            details in an easy-to-understand format.
          </p>
          <Link className="link-light" href="#">
            Explore All
          </Link>
        </div>
      </div>

      <section className="document-search-container flex justify-center p-8 flex-col gap-7">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Document"
          className="py-1 px-3 rounded"
        />

        <div className="grid grid-cols-4 gap-3">
          {filteredResources.map((resource, index) => (
            <div key={index}>
              <h2>{resource.name}</h2>
              <Image
                src={resource.cover}
                width={200}
                height={200}
                alt={resource.name}
              />
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="document-banner-container">
          <div className="document-banner flex flex-col justify-center items-center">
            <h2>Become a Dealer</h2>
            <h3>& Transform Spaces with Style</h3>
            <Link href="/become-a-dealer" className="link-light">
              Contact Now!
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default DocumentCenter;
