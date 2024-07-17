"use client";
import { ReactNode, useRef, useMemo } from "react";
import DealerMap, { Marker, Popup } from "react-map-gl";
import { Dealerlocator } from "@/interfaces/dealer-locator.model";
import { getCenter } from "geolib";
import "mapbox-gl/src/css/mapbox-gl.css";

interface MapProps {
  props?: ReactNode;
  data: Dealerlocator[];
}
export const Map = ({ data, ...props }: MapProps) => {
  if (data.length === 0) {
    return <div>No dealers found</div>;
  }

  const markerRef = useRef<mapboxgl.Marker>();

  const center = getCenter(
    data.map((dealer) => ({
      latitude: dealer.lat,
      longitude: dealer.lng,
    }))
  );

  return (
    <DealerMap
      mapboxAccessToken={`${process.env.NEXT_PUBLIC_ACCESSTOKEN}`}
      mapStyle={"mapbox://styles/kevyuppie/clyndbndm01y601nzavka2oe9"}
      initialViewState={{
        ...center,
        zoom: 5.6,
        bearing: 0,
        pitch: 0,
      }}
    >
      {data.map((dealer, index) => {
        return (
          <Marker
            key={index}
            latitude={dealer.lat}
            longitude={dealer.lng}
            color="red"
            anchor="bottom"
            offsetTop={-20}
            offsetLeft={-7}
          ></Marker>
        );
      })}
    </DealerMap>
  );
};
