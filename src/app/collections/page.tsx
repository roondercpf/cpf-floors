import React from "react";
import Link from "next/link";
import Image from "next/image";

import "@/app/sass/CollectionsCategories.scss";

function CollectionsCategories() {
  return (
    <>
      <div className="categories-container">
        <div className="category-card flex flex-col justify-between">
          <div className="img-title">
            <Image
              src="/collections-categories/vinyl.png"
              height={200}
              width={200}
              alt="CPF Floors Categories"
            ></Image>
            <h2>Rigid Core Vinyl</h2>
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt esse
              omnis ut ea dolorum autem incidunt quibusdam quia aliquid
            </p>
          </div>
          <Link className="link-dark" href="/collections/vinyl">
            View Collections
          </Link>
        </div>

        <div className="category-card flex flex-col justify-between">
          <div className="img-title">
            <Image
              src="/collections-categories/laminate.png"
              height={200}
              width={200}
              alt="CPF Floors Categories"
            ></Image>
            <h2>Laminate</h2>
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt esse
              omnis ut ea dolorum autem incidunt quibusdam quia aliquid
            </p>
          </div>
          <Link className="link-dark" href="/collections/laminate">
            View Collections
          </Link>
        </div>


        <div className="category-card flex flex-col justify-between">
          <div className="img-title">
            <Image
              src="/collections-categories/baseboards.png"
              height={200}
              width={200}
              alt="CPF Floors Categories"
            ></Image>
            <h2>Baseboards</h2>
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt esse
              omnis ut ea dolorum autem incidunt quibusdam quia aliquid
            </p>
          </div>
          <Link className="link-dark" href="/core-moldings">
            View Collections
          </Link>
        </div>

        <div className="category-card flex flex-col justify-between">
          <div className="img-title">
            <Image
              src="/collections-categories/steps.png"
              height={200}
              width={200}
              alt="CPF Floors Categories"
            ></Image>
            <h2>Steps</h2>
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt esse
              omnis ut ea dolorum autem incidunt quibusdam quia aliquid
            </p>
          </div>
          <Link className="link-dark" href="/coresteps">
            View Collections
          </Link>
        </div>

        <div className="category-card flex flex-col justify-between">
          <div className="img-title">
            <Image
              src="/collections-categories/underlayment.png"
              height={200}
              width={200}
              alt="CPF Floors Categories"
            ></Image>
            <h2>Underlayment</h2>
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt esse
              omnis ut ea dolorum autem incidunt quibusdam quia aliquid
            </p>
          </div>
          <Link className="link-dark" href="/corepad">
            View Collections
          </Link>
        </div>


        
      </div>


      <section>
        <div className="become-banner-container">
          <div className="become-banner flex flex-col justify-center items-center">
            <h2>Become a Dealer</h2>
            <p>&Transform Spaces with Style</p>
            <Link className="link-light" href="/become-a-dealer">
              Contact Now!
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default CollectionsCategories;
