"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import "@/app/sass/ColorFilter.scss"

function ColorFilter() {
  return (
    <>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel minSize={20} defaultSize={20} maxSize={20}>
            <div className="sidebar"></div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
            
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}

export default ColorFilter;
