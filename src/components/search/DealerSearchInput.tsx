"use client";
import {
  Ref,
  forwardRef,
  ReactNode,
  MutableRefObject,
  Dispatch,
  SetStateAction,
} from "react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Dealerlocator } from "@/interfaces/dealer-locator.model";
import { MapRef } from "react-map-gl";
interface DealerSearchInputProps {
  props?: ReactNode;
  filterDealer: Dealerlocator[] | undefined;
  mapRef: MutableRefObject<MapRef | null>;
  setSelectInput: Dispatch<SetStateAction<string>>;
  setSelectedDealer: Dispatch<SetStateAction<Dealerlocator | null | undefined>>;
}
export const DealerSearchInput = forwardRef(
  (
    {
      filterDealer,
      mapRef,
      setSelectInput,
      setSelectedDealer,
      ...props
    }: DealerSearchInputProps,
    ref: Ref<HTMLDivElement>
  ) => {
    return (
      <div className="dealer-search-container" ref={ref}>
        <form
          className="h-auto flex justify-center items-center"
          onSubmit={(e) => {
            e.preventDefault();
            if (filterDealer && filterDealer.length > 0) {
              const item = filterDealer[0];
              setSelectedDealer(item);
            }
          }}
        >
          <div className="search-dealer-input-container flex justify-between rounded-md bg-white shadow shadow-black/20">
            <input
              type="text"
              className="search-dealer-input block w-full flex-1 px-3 py-2 focus:outline-none"
              placeholder="Search your dealer..."
              name="search"
              onChange={(e) => setSelectInput(e.target.value)}
            />
            <span className="search-button m-1 inline-flex cursor-pointer items-center px-4 py-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.66652 14.333C11.3483 14.333 14.333 11.3483 14.333 7.66652C14.333 3.9847 11.3483 1 7.66652 1C3.9847 1 1 3.9847 1 7.66652C1 11.3483 3.9847 14.333 7.66652 14.333Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.9999 16L12.375 12.3751"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </form>
        {filterDealer && (
          <div className="h-40 max-h-40">
            <ScrollArea className="scroll-area h-40 max-h-40 mt-2 w-full overflow-auto rounded-md bg-white">
              {filterDealer.map((item) => (
                <div
                  className="scroll-div-area cursor-pointer px-2 py-2 flex justify-center items-center"
                  key={item._id}
                  onClick={() => {
                    setSelectedDealer(item);
                    mapRef.current?.flyTo({
                      center: [item.lng, item.lat],
                      duration: 1800,
                      zoom: 8,
                      maxZoom: 4,
                    });
                  }}
                >
                  <p className="text-sm font-medium text-gray-600">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              ))}
            </ScrollArea>
          </div>
        )}
      </div>
    );
  }
);
DealerSearchInput.displayName = "DealerSearchInput";
