"use client";
import { Ref, forwardRef, useState, ReactNode, useMemo } from "react";
import { Collections } from "@/interfaces/collections.model";
import SpecsSection from "./SpecsSection";
import TechnicalDataSection from "./technicalDataSection";
import resources from "@/../resources/resources2.json";
import DescriptionBanner from "./DescriptionBanner";
const buttonGroup = [
  "description",
  "specs",
  "intructions",
  "technical data",
  "benefits",
];
interface InfoSectionProps {
  props?: ReactNode;
  collection: Collections;
}
export const InfoSection = forwardRef(
  ({ collection, ...props }: InfoSectionProps, ref: Ref<HTMLDivElement>) => {
    const [activeButton, setActiveButton] = useState("description");

    const renderActiveButton = useMemo(() => {
      switch (activeButton) {
        case "description":
          return <DescriptionBanner collection={collection} />;
        case "specs":
          return <SpecsSection collection={collection} />;
        case "technical data":
          const resource = resources.filter((resource) =>
            resource.name.toLowerCase().includes(collection.name.toLowerCase())
          );
          return <TechnicalDataSection resources={resource} />;
        default:
          return <DescriptionBanner collection={collection} />;
      }
    }, [activeButton, collection]);

    return (
      <div ref={ref}>
        <div className="flex justify-center gap-5">
          {buttonGroup.map((button, index) => (
            <button
              key={index}
              className="py-1 px-3 capitalize"
              onClick={() => setActiveButton(button)}
            >
              {button}
            </button>
          ))}
        </div>
        {renderActiveButton}
      </div>
    );
  }
);
InfoSection.displayName = "InfoSection";
