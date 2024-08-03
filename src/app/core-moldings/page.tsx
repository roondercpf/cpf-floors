"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import "@/app/sass/CoreMoldings.scss";
import BaseboardsCarousel from "@/components/BaseboardsCarousel";

const mainBanner = {
  logoUrl: "/core-moldings/core-moldings-logo.svg",
  banerTitle: "Baseboards & Casing",
  bannerDescription:
    "Add the finish touch to your project with custom-made baseboards and casings.",
  bannerImgUrl: "/core-moldings/main-img.svg",
};

import React from "react";

function CoreMoldings() {
  return (
    <>
      <div className="main-banner-molding">
        <div className="main-banner-molding-text">
          <Image
            src={mainBanner.logoUrl}
            alt="Core Molding Logo"
            width={200}
            height={200}
          ></Image>
          <h2>{mainBanner.banerTitle}</h2>
          <p>{mainBanner.bannerDescription}</p>
          <Link className="link-dark" href="#choices">
            See Products
          </Link>
        </div>
        <div className="main-banner-molding-img">
          <Image
            src={mainBanner.bannerImgUrl}
            alt="Core Molding Logo"
            width={600}
            height={600}
          ></Image>
        </div>
      </div>

      <section>
        <div className="green-banner">
          <div className="green-banner-text">
            <h2>
              Endless Design Possibilities with <b>CoreMolding</b>s
            </h2>
            <Link className="corepad-green-link" href="/contact-us">
              Get a free quote
            </Link>
          </div>
          <div className="green-banner-img"></div>
        </div>
      </section>

      <div className="base-title">
        <h2>
          Baseboards with <br /> <b>Multiple choices!</b>
        </h2>
        <p className="base-p">
          Striking a balance between simplicity and sophistication.
        </p>
      </div>

      <BaseboardsCarousel />

      <section>
        <div className="main-banner-molding-2">
          <div className="main-banner-molding-text-2">
            <h2>Moldings</h2>
            <p>
              {" "}
              Explore a world of design options! Used to transition from one
              flooring type to another.{" "}
            </p>
            <Link className="link-dark" href="#moldings">
              See Products
            </Link>
          </div>
          <div className="main-banner-molding-img-2">
            <Image
              src="/core-moldings/reducer.svg"
              alt="Core Molding Logo"
              width={600}
              height={600}
            ></Image>
          </div>
        </div>
      </section>

      <section>
        <div className="green-banner">
          <div className="green-banner-text">
            <h2>Discover Quality Behind <b>CoreMoldings</b></h2>
            <Link className="corepad-green-link" href="/contact-us">
              Get a free quote
            </Link>
          </div>
          <div className="green-banner-img-2"></div>
        </div>
      </section>

      <section>
        <div className="become">
          <div className="become-text">
            <h2>Become a Dealer</h2>
            <p>& Transform Your Spaces with Style</p>
            <Link className="link-light" href="/become-a-dealer">
              Contact Now!
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default CoreMoldings;
