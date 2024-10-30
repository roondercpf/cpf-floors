import { Map } from "@/components/Map";
import Image from "next/image";
import { FRONTEND } from "@/utils/env";
import { Dealerlocator } from "@/interfaces/dealer-locator.model";

import "@/app/sass/DisplayResources.scss";
import DealerLocatorForm from "@/components/DealerLocatorForm";

async function DealerLocator() {
  const res = await fetch(`${FRONTEND}/api/dealer-locator`, {
    cache: "no-store",
  });
  const data: Dealerlocator[] = await res.json();

  return (
    <>
      <Map data={data} />
      <div className="main-container">
        <div className="sample-board">
          <div className="sample-board-text">
            <DealerLocatorForm />
          </div>
          <div className="dealer-locator-img sample-board-img">
            <Image
              src="/display-resources/rack-1.svg"
              height={200}
              width={200}
              alt="CPF Floors Display resources"
              unoptimized
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}

export default DealerLocator;
