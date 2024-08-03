import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import "@/app/sass/Corepad.scss";

export const metadata: Metadata = {
  title: "Corepad",
  description: "CPF Floors - Coresteps",
};

function Corepad() {
  return (
    <>
      <>
        <div className="main-banner">
          <div className="main-banner-text">
            <Image
              src="/corepad/corepad-logo.svg"
              height={300}
              width={300}
              alt="Corepad logo"
            ></Image>
            <p>Enhance soundproofing and comfort underfoot with mute pads for vinyl floors.</p>
            <Link className="link-dark" href="/collections/vinyl">
              See Products
            </Link>
          </div>
          <div className="main-banner-img">
            <Image
              src="/corepad/main-banner-img.svg"
              height={300}
              width={300}
              alt="Corepad logo"
            ></Image>
          </div>
        </div>
      </>

      <>
        <div className="quiet-section-container">
          <div className="quiet-section-img">
            <Image
              src="/corepad/child.png"
              height={300}
              width={300}
              alt="Corepad logo"
            ></Image>
          </div>
          <div className="quiet-section-text">
            <h2>The Be Quiet Pad!</h2>
            <p>
              Most of LVT floors that comes with padding attached will not be
              under warranty if you install double underlayment, please check
              your flooring warranty before installing any LVT on top of our
              CorePad.
            </p>
            <Image
              src="/corepad/assembly.svg"
              height={300}
              width={300}
              alt="Corepad logo"
            ></Image>
          </div>
        </div>
      </>

      <>
        <div className="mutepad-banner">
          <div className="mutepad-banner-text">
            <Image
              src="/corepad/mute-pad-logo.svg"
              height={300}
              width={300}
              alt="Corepad logo"
            ></Image>
            <Link className="link-light" href="/collections/vinyl">
              See Products
            </Link>
          </div>
          <div className="mutepad-banner-img">
            <Image
              src="/corepad/mute-pad.svg"
              height={300}
              width={300}
              alt="Corepad logo"
            ></Image>
          </div>
        </div>
      </>

      <>
        <div className="specs-section-container">
          <div className="specs-img">
            <Image
              src="/corepad/specifications-1.svg"
              height={300}
              width={300}
              alt="Corepad logo"
            ></Image>
          </div>
          <div className="specs-img">
            <Image
              className="updated"
              src="/corepad/updated.svg"
              height={300}
              width={300}
              alt="Corepad logo"
            ></Image>
          </div>
        </div>
      </>

      <>
        <div className="mutepad-banner-gray">
          <div className="mutepad-banner-text">
            <Image
              src="/corepad/mutepad-logo-gray.svg"
              height={300}
              width={300}
              alt="Corepad logo"
            ></Image>
            <Link className="link-light" href="/collections/vinyl">
              See Products
            </Link>
          </div>
          <div className="mutepad-banner-img">
            <Image
              src="/corepad/mutepad-gray.svg"
              height={300}
              width={300}
              alt="Corepad logo"
            ></Image>
          </div>
        </div>
      </>

      <>
        <div className="specs-section-container">
          <div className="specs-img">
            <Image
              src="/corepad/specs-gray.svg"
              height={300}
              width={300}
              alt="Corepad logo"
            ></Image>
          </div>
          <div className="specs-img">
            <Image
              className="updated"
              src="/corepad/updated-gray.svg"
              height={300}
              width={300}
              alt="Corepad logo"
            ></Image>
          </div>
        </div>
      </>

      <>
        <div className="mutepad-banner-white">
          <div className="mutepad-banner-text">
            <Image
              src="/corepad/mutepad-white-logo.svg"
              height={300}
              width={300}
              alt="Corepad logo"
            ></Image>
            <Link className="link-light" href="/collections/vinyl">
              See Products
            </Link>
          </div>
          <div className="mutepad-banner-img">
            <Image
              src="/corepad/mutepad-white.svg"
              height={300}
              width={300}
              alt="Corepad logo"
            ></Image>
          </div>
        </div>
      </>

      <>
        <div className="specs-section-container">
          <div className="specs-img">
            <Image
              src="/corepad/specs-white.svg"
              height={300}
              width={300}
              alt="Corepad logo"
            ></Image>
          </div>
          <div className="specs-img">
            <Image
              className="updated"
              src="/corepad/updated-white.svg"
              height={300}
              width={300}
              alt="Corepad logo"
            ></Image>
          </div>
        </div>
      </>

      <>
        <div className="buy-section-container">
          <div className="buy-text">
            <h2>Buy Over</h2>
            <h2>2,000 SqFt</h2>
            <h3>
              Inspire Black Edition flooring <br></br><b>and grab your</b>
            </h3>
            <h2>
              Vapor Barrier <br />
              at $35
            </h2>
            <Link href="/become-a-dealer" className="corepad-green-link">
              Call Your Rep Now!
            </Link>
          </div>
          <div className="buy-img">
            <Image
              src="/corepad/buy-img.svg"
              height={300}
              width={300}
              alt="Corepad logo"
            ></Image>
          </div>
        </div>
      </>

      <>
        <div className="last-banner-container">
          <div className="last-banner">
            <h2>Become a Dealer</h2>
            <p>and Transform Your Space With Style</p>
            <Link className="link-light" href="/become-a-dealer">
              Contact Now
            </Link>
          </div>
        </div>
      </>
    </>
  );
}

export default Corepad;
