"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Collections, Color } from "@/interfaces/collections.model";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

//Styles
import "@/app/sass/ColorFilter.scss";
import { color } from "framer-motion";
import { off } from "process";

function ColorFilter() {
  const [collections, setCollections] = useState<Collections[] | null>([]);

  async function getCollections() {
    try {
      const response = await fetch(`/api/collections/`);
      const data = await response.json();
      setCollections(data.collections);
    } catch (error) {
      console.log("error: ", error);
    }
  }

  useEffect(() => {
    getCollections();
  }, []);

  console.log(typeof collections);

  return (
    <>
      <div>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel minSize={25} maxSize={25}>
            <div className="sidebar text-center flex items-center">sidebar</div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>
            <div className="color-filter flex flex-col items-center justify-center h-100">
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  );
}

export default ColorFilter;
