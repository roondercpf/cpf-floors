import React from "react";
import Link from "next/link";
import Image from "next/image";

import "@/app/sass/DocumentCenter.scss"

function DocumentCenter() {
  return (
    <>
      <div className="document-center-banner">
        <div className="document-img">
            <Image src="/document-center/banner-img.png" height={600} width={600} alt="CPF Floors Resources"> 

            </Image>
        </div>
        <div className="document-text">
            <h2>Document Center</h2>
            <h3>Warranty, Sell sheets & More</h3>
            <p>Explore all the resources of warranties, sales sheets, and more to compare options, and make informed decisions by presenting key details in an easy-to-understand format.</p>
            <Link className="link-light" href="#">Explore All</Link>
        </div>
      </div>

      <section>
        <div className="document-banner-container">
            <div className="document-banner flex flex-col justify-center items-center">
                <h2>Become a Dealer</h2>
                <h3>& Transform Spaces with Style</h3>
                <Link href="/become-a-dealer" className="link-light">Contact Now!</Link>
            </div>
        </div>
      </section>
    </>
  );
}

export default DocumentCenter;
