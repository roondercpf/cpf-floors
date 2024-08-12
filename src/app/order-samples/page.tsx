import React from "react";
import Link from "next/link";
import Image from "next/image";


import "@/app/sass/OrderSample.scss";

export default function OrderSample() {

;

  return (
    <>
      <div className="order-sample-banner">
        <div className="order-text">
          <h2>Become a<br />Dealer Today!</h2>
          <h3>Experience the Quality First Hand</h3>
          <p>
            Experience the quality of CPF Floors with oyur own eyes.<br/> From
            regular samples to Strap Sets or Architect folders, <br/> we make floor
            shopping easy and convenient.
          </p>
          <Link className="link-light" href="/collections">
            Order Now
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


      {/*ORDER TITLE CONTAINER */}

      <div className="order-title-container">
        <div className="order-title">
          <h3>Discover the endless possibilities <br /> you&apos;ll have as a dealer!</h3>
          <p>Access to exclusive support and resources.</p>
        </div>
        <div className="order-cards-container flex flex-row flex-wrap justify-center items-center">
          <div className="order-card">
            <Image src="/order-sample/card1.png" height={200} width={200} alt="CPF Order a Sample"></Image>
            <h3>Regular sample</h3>
            <p>Discover the strength and durability of our Strapset. Order a sample to see firsthand why it&apos;s a top choice for professionals.</p>
          </div>
          <div className="order-card">
            <Image src="/order-sample/card2.png" height={200} width={200} alt="CPF Order a Sample"></Image>
            <h3>Strap Set</h3>
            <p>Get a closer look at our product quality with a regular sample. Perfect for evaluating color, texture, and durability.</p>
          </div>
          <div className="order-card">
            <Image src="/order-sample/card3.png" height={200} width={200} alt="CPF Order a Sample"></Image>
            <h3>Architech Folder</h3>
            <p>Equip your sales team with professional-grade materials. Order an Architect Folder filled with product samples and information.</p>
          </div>
        </div>
      </div>

      <div className="order-last-banner-container">
        <div className="last-banner-container flex flex-col justify-center items-center">
          <h3>Join our dealer network</h3>
          <p>Order your samples and get started</p>
          <Link className="link-light" href="/contact-us">Contact Now!</Link>
        </div>
      </div>



     


    </>
  );
}
