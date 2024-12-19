"use client";
import { ReactNode, useRef, useState, useMemo } from "react";
import DealerMap, {
  Marker,
  Popup,
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
  ScaleControl,
  Source,
  Layer,
  MapRef,
} from "react-map-gl";

import { Dealerlocator } from "@/interfaces/dealer-locator.model";
import { getCenter } from "geolib";
import GeocoderControl from "./Geocoder-control";
import "@/app/mapbox-gl.css";
import Image from "next/image";
import Link from "next/link";
import { DealerSearchInput } from "./search/DealerSearchInput";

import "@/app/sass/DealerLocatorForm.scss";

interface MapProps {
  props?: ReactNode;
  data: Dealerlocator[];
}

export const Map = ({ data, ...props }: MapProps) => {
  const mapRef = useRef<MapRef | null>(null);
  const [selectedDealer, setSelectedDealer] = useState<Dealerlocator | null>();
  const [selectInput, setSelectInput] = useState<string>("");

  const filterDealer = useMemo(() => {
    if (selectInput.length === 0) return;

    const dealerFilter = data.filter(
      (dealer) =>
        dealer.city?.toLowerCase().includes(selectInput.toLowerCase()) ||
        `${dealer.postal_code}`.includes(selectInput) ||
        dealer.title.toLowerCase().includes(selectInput.toLowerCase()) ||
        dealer.street.toLowerCase().includes(selectInput.toLowerCase()) ||
        dealer.website?.toLowerCase().includes(selectInput.toLowerCase()) ||
        dealer.email?.toLowerCase().includes(selectInput.toLowerCase())
    );
    if (!dealerFilter) return;

    return dealerFilter;
  
  }, [selectInput,data]);

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
    <div className="map-container gap-5">
      <div className="map-container-bar">
        <div className="map-title-bar text-center">
          <Image
            className="mb-10"
            src="/footer-logo.svg"
            height={150}
            width={150}
            alt="CPF Logo"
          ></Image>
          <h2>Find your Nearest Dealer</h2>
          <DealerSearchInput
            filterDealer={filterDealer}
            mapRef={mapRef}
            setSelectInput={setSelectInput}
            setSelectedDealer={setSelectedDealer}
          />
        </div>

        <DealerMap
        ref={mapRef}
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
              onClick={() => {
                setSelectedDealer(dealer);
                mapRef.current?.flyTo({
                  center: [dealer.lng, dealer.lat],
                  duration: 1800,
                  zoom: 8,
                  maxZoom: 4,
                });
              }}
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
                  <Image
                    className="m-auto mb-5"
                    src="/footer-logo.svg"
                    height={60}
                    width={60}
                    alt="CPF Floors Logo"
                  ></Image>
                  <div>
                    <h3>{dealer.title}</h3>
                    <p>{dealer.description}</p>
                    <p className="capitalize">
                      <b>Street:</b>
                      {" " + dealer.city}, {dealer.state} {dealer.postal_code}{" "}
                      {dealer.street}
                    </p>
                    <p>
                      <b>Phone:</b>
                      {dealer.phone ? " " + dealer.phone : " Not Available"}
                    </p>


                    {dealer.website ? (
                      <Link target="_blank" href={dealer.website}>Website</Link>
                    ) : <p>No website available</p>}
                  </div>
                </Popup>
              ) : null}
            </Marker>
          );
        })}
      </DealerMap>
      </div>

      
    </div>
  );
};
