"use client";
import { ReactNode, useRef, useState } from "react";
import DealerMap, {
  Marker,
  Popup,
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
  ScaleControl,
  Source,
  Layer,
} from "react-map-gl";
import { Dealerlocator } from "@/interfaces/dealer-locator.model";
import { getCenter } from "geolib";
import GeocoderControl from "./Geocoder-control";
import "@/app/mapbox-gl.css";
import { Result } from "postcss";
import Image from "next/image";

import "@/app/sass/DealerLocatorForm.scss"

interface MapProps {
  props?: ReactNode;
  data: Dealerlocator[];

  
}



export const Map = ({ data, ...props }: MapProps) => {
  const [selectedDealer, setSelectedDealer] = useState<Dealerlocator | null>();
  if (data.length === 0) {
    return <div>No dealers found</div>;
  }

  

  //const markerRef = useRef<mapboxgl.Marker>();

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
        antialias={true}
      >
        <GeocoderControl
          position="top-right"
          mapboxAccessToken={`${process.env.NEXT_PUBLIC_ACCESSTOKEN}`}
        />
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
              onClick={() => setSelectedDealer(dealer)}
            >
              {dealer.lng === selectedDealer?.lng &&
              dealer.lat === selectedDealer?.lat ? (
                <Popup
                  className="dealer-popup"
                  latitude={dealer.lat}
                  longitude={dealer.lng}
                  onClose={() => setSelectedDealer(null)}
                  closeOnClick={false}
                  anchor="bottom"
                >
                  <Image className="m-auto mb-5" src="/footer-logo.svg" height={60} width={60} alt="CPF Floors Logo"></Image>
                  <div>
                    <h3>{dealer.title}</h3>
                    <p>{dealer.description}</p>
                    <p>
                      {dealer.city}, {dealer.state} {dealer.postal_code} {dealer.street}
                    </p>
                    <p>{dealer.phone}</p>
                    <p>{dealer.email}</p>
                    <p>{dealer.website}</p>
                  </div>
                </Popup>
              ) : null}
            </Marker>
          );
        })}
      </DealerMap>
    </div>
  );
};
