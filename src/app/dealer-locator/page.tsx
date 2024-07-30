import { Map } from "@/components/Map";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { FRONTEND } from "@/utils/env";
import { Dealerlocator } from "@/interfaces/dealer-locator.model";

import '@/app/sass/DisplayResources.scss'

async function DealerLocator() {
  const res = await fetch(`${FRONTEND}/api/dealer-locator`, {
    cache: "no-store",
  });
  const data: Dealerlocator[] = await res.json();

  return (
    <>
      <h1>Dealer Locator</h1>
      <Map data={data} />
      <>
      <>
        <div className="main-container">
          <div className="sample-board">
            <div className="sample-board-text">
              <h2>Become a dealer</h2>
              <p>
              Power up your business and join our exclusive network to benefit from agility, speed, and readily available inventory.
              </p>
              <Link className="link-light" href="/become-a-dealer">
                Click Here
              </Link>
            </div>
            <div className="sample-board-img">
              <Image
                src="/display-resources/rack-1.svg"
                height={200}
                width={200}
                alt="CPF Floors Display resources"
              ></Image>
            </div>
          </div>
        </div>
      </>
      </>
    </>
  );
}

export default DealerLocator;
