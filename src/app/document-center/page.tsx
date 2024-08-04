"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import resource from "@/../resources/resources2.json";

import "@/app/sass/DocumentCenter.scss";

function DocumentCenter() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("All");

  const filteredResources = useMemo(() => {
    return resource.filter((resource) => {
      const type = selected === "All" ? true : resource.type === selected;

      return resource.name.toLowerCase().includes(search.toLowerCase()) && type;
    });
  }, [search, selected]);

  const buttonsOptions = [
    "All",
    "Sell Sheets",
    "Warranties",
    "Data Sheets",
    "Installation Manuals",
    "Legal Obligations",
    "Test Labs",
  ];

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
          className="p-5 px-3"
        />

        <div className="document-search-buttons flex justify-center gap-5">
          {buttonsOptions.map((option, index) => (
            <button
              key={index}
              className="link-dark"
              onClick={() => setSelected(option)}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="documents-container flex flex-wrap justify-center items-center">
          {filteredResources.map((resource, index) => (
            <div key={index} className="document-card flex flex-col justify-center items-center">
              <Image
                src={resource.cover}
                width={200}
                height={200}
                alt={resource.name}
              />
              <h3>{resource.name}</h3>
              <Link target="_blank" className="link-dark" href={resource.url}>DownLoad</Link>
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
