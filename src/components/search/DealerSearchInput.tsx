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
      <div ref={ref}>
        <form>
          <div className="flex justify-between rounded-md bg-white shadow shadow-black/20">
            <input
              type="text"
              className="block w-full flex-1 px-3 py-2 focus:outline-none"
              placeholder="Search your dealer..."
              onChange={(e) => setSelectInput(e.target.value)}
            />
            <span className="m-1 inline-flex cursor-pointer items-center rounded-md bg-indigo-600 px-2 py-2 hover:bg-indigo-700">
              <svg
                className="text-white"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M21.07 16.83L19 14.71a3.08 3.08 0 0 0-3.4-.57l-.9-.9a7 7 0 1 0-1.41 1.41l.89.89a3 3 0 0 0 .53 3.46l2.12 2.12a3 3 0 0 0 4.24 0a3 3 0 0 0 0-4.29Zm-8.48-4.24a5 5 0 1 1 0-7.08a5 5 0 0 1 0 7.08Zm7.07 7.07a1 1 0 0 1-1.42 0l-2.12-2.12a1 1 0 0 1 0-1.42a1 1 0 0 1 1.42 0l2.12 2.12a1 1 0 0 1 0 1.42Z"
                />
              </svg>
            </span>
          </div>
        </form>
        {filterDealer && (
          <div className="h-40 max-h-40">
            <ScrollArea className=" h-40 max-h-40 mt-2 w-full overflow-auto rounded-md bg-white">
              {filterDealer.map((item) => (
                <div
                  className="cursor-pointer px-3 py-2 hover:bg-slate-100"
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
