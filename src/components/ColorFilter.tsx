"use client";

import type { Collections } from "@/interfaces/collections.model";
import { generateId } from "@/utils/index";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { type ChangeEvent, useEffect, useMemo, useState } from "react";

import "@/app/sass/ColorFilter.scss";

interface ColorFilterProps {
  tone: string;
}

function ColorFilter({ tone }: ColorFilterProps) {
  const [collections, setCollections] = useState<Collections[] | null>([]);
  const [filter, setFilter] = useState({
    size: "",
    colorTone: tone,
    clickSystem: "",
  });
  //const [filteredColors, setFilteredColors] = useState<Color[]>([]);

  async function getCollections() {
    try {
      const response = await fetch("/api/collections/");
      const data = await response.json();
      setCollections(data.collections);
    } catch (error) {
      console.log("error: ", error);
    }
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    getCollections();
  }, []);

  const collectionFiltered = useMemo(() => {
    const aux: typeof collections = JSON.parse(JSON.stringify(collections));

    if (
      aux &&
      aux.length > 0 &&
      Object.values(filter).some((fil) => fil.length > 0)
    ) {
      return aux.filter((collection) => {
        return (
          collection.colors &&
          Array.isArray(collection.colors) &&
          collection.colors.some((color) => {
            return (
              filter.size
                .toLowerCase()
                .includes(color.plankSize?.toLowerCase()) ||
              filter.colorTone
                .toLowerCase()
                .includes(color?.tone?.toLowerCase() ?? "") ||
              filter.clickSystem
                .toLowerCase()
                .includes(color.installationMethod?.toLowerCase())
            );
          })
        );
      });
    }
    return aux;
  }, [filter, collections]);

  const filterByColor = useMemo(() => {
    if (!collectionFiltered) {
      return [];
    }

    for (const collection of collectionFiltered) {
      let { colors } = collection;
      for (const [filt, filtValue] of Object.entries(filter)) {
        if (filtValue.length > 0) {
          colors = colors?.filter((color) => {
            switch (filt) {
              case "size":
                return (
                  filtValue.toLowerCase() === color.plankSize?.toLowerCase()
                );
              case "colorTone":
                return filtValue.toLowerCase() === color?.tone?.toLowerCase();
              case "clickSystem":
                return (
                  filtValue.toLowerCase() ===
                  color.installationMethod?.toLowerCase()
                );
            }
            return true;
          });
          collection.colors = colors;
        }
      }
    }

    return collectionFiltered?.filter(
      (collection) => collection.colors?.length > 0
    );
  }, [collectionFiltered, filter]);

  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  };


  return (
    <>
      <div className="filter-container">
        <div className="filter-title">
          <h2>Filter by category</h2>
          <p>Have any question? Feel free to reach out to us</p>
        </div>

        {/* BUTTONS */}
        <div className="option-container flex justify-center items-center mb-10 p-5">
          <select
            name="colorTone"
            onChange={handleFilterChange}
            defaultValue={tone}
          >
            <option value="">Select by Color</option>
            <option value="grays">Grays</option>
            <option value="tan tones">Tan Tones</option>
            <option value="naturals">Naturals</option>
            <option value="dark naturals">Dark Naturals</option>
            <option value="off whites">Off White</option>
          </select>

          <select name="clickSystem" onChange={handleFilterChange}>
            <option value="">Select Click System</option>
            <option value="Unilin Click">Unilin Click</option>
            <option value="Angle - Angle">Angle - Angle</option>
            <option value="Herringbone">Herringbone</option>
            <option value="Angle Tap">Angle Tap</option>
          </select>

          <select name="size" onChange={handleFilterChange}>
            <option value="">Select Plank Size</option>
            <option value='7"x48"'>7&quot;x48&quot;</option>
            <option value='9"x48"'>9&quot;x48&quot;</option>
            <option value='8"x48"'>8&quot;x48&quot;</option>
            <option value='5"x27"'>5&quot;x27&quot;</option>
            <option value='9"x54"'>9&quot;x54&quot;</option>
            <option value='9"x51"'>9&quot;x51&quot;</option>
            <option value='18"x36"'>18&quot;x36&quot;</option>
            <option value='7"x56"'>7&quot;x56&quot;</option>
            <option value='9"x60"'>9&quot;x60&quot;</option>
          </select>
        </div>

        <div className="colors-container flex flex-wrap items-center justify-center p-5">
          {filterByColor && filterByColor.length > 0 ? (
            filterByColor?.map((collection) => {
              return collection.colors.map((color) => (
                <>
                  <motion.div
                    key={generateId()}
                    className="m-5 color-card"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <Image
                      src={color.picture}
                      height={400}
                      width={400}
                      alt=""
                      unoptimized
                    />
                    <div className="color-card-text my-5">
                      <div className="card-title flex flex-col items-start mb-5">
                        <h3>{color.name}</h3>
                        <span>{color.tone}</span>
                      </div>
                      <p>Plank Size: {color.plankSize}</p>
                      <p>Installation: {color.installationMethod}</p>
                    </div>
                  </motion.div>

                </>
              ));
            })
          ) : (
            <div className="colors-container">
              <div className="no-results flex justify-center items-center">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}
                >
                  No results available
                </motion.p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ColorFilter;
