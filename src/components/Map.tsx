"use client";
import { ReactNode, useRef, useMemo } from "react";
import Image from "next/image";
import DealerMap, {
  Marker,
  Popup,
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
  ScaleControl,

} from "react-map-gl";
import { Dealerlocator } from "@/interfaces/dealer-locator.model";
import { getCenter } from "geolib";
import "@/app/mapbox-gl.css";

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
    <div className="map-container">
        {/* <div className="map-container-bar">
          <div className="map-title-bar text-center">
            <Image
              className="mb-10"
              src="/footer-logo.svg"
              height={150}
              width={150}
              alt="CPF Logo"
            ></Image>
            <h2>Find your Nearest Dealer</h2>
            <input
              placeholder="Enter your dealer Name"
              type="search"
              name="dealer"
              id="dealer"
            />
          </div>
        </div> */}
      <DealerMap
        mapboxAccessToken={`${process.env.NEXT_PUBLIC_ACCESSTOKEN}`}
        mapStyle={"mapbox://styles/kevyuppie/clyrfqie902ej01p88zlb82xz"}
        initialViewState={{
          ...center,
          zoom: 5.6,
          bearing: 0,
          pitch: 0,
        }}
      >
        <NavigationControl position="top-left" />
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <ScaleControl />
        {data.map((dealer, index) => {
          return (
            <Marker
              key={index}
              latitude={dealer.lat}
              longitude={dealer.lng}
              color="black"
              anchor="bottom"
              offsetTop={-20}
              offsetLeft={-7}
            ></Marker>
          );
        })}
      </DealerMap>
    </div>
  );
};
