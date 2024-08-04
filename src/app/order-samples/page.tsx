import React from "react";
import Link from "next/link";
import Image from "next/image";
// Components
import { OrderSampleColors } from "@/components/list/OrderSampleColors";
// Types
import { CollectionResponse } from "@/interfaces/collections.model";
// Utils
import { FRONTEND } from "@/utils/env";

import "@/app/sass/OrderSample.scss";

async function OrderSample() {

    const res = await fetch(`${FRONTEND}/api/collections`, {
        cache: "no-cache",
        next: {
            revalidate: 300e3,
        },
    });

    const data: CollectionResponse = await res.json();

  return (
    <>
      <div className="order-sample-banner">
        <div className="order-text">
          <h2>Order Your Free Sample</h2>
          <p>
            Experience the quality of CPF Floors with oyur own eyes. From
            regular samples to Strap Sets or Architect folders, we make floor
            shopping easy and convenient.
          </p>
          <Link className="link-light" href="#">
            Explore All
          </Link>
        </div>
        <div className="order-img">
          <Image
            src="/order-sample/banner-img.png"
            height={600}
            width={600}
            alt="CPF Floors Resources"
          ></Image>
        </div>
      </div>

      <OrderSampleColors collections={data?.collections ? data.collections : []} />


    </>
  );
}

export default OrderSample;