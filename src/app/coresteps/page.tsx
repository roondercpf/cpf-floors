import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import CorestepsCarousel from "@/components/CorestepsCarousel";
import "@/app/sass/Coresteps.scss";

export const metadata: Metadata = {
  title: "Coresteps",
  description: "CPF Floors - Coresteps",
};

function Coresteps() {
  return (
    <>
      <div className="coresteps-main-banner">
        <div className="coresteps-text">
          <h2>Welcome to Coresteps</h2>
          <h3>Stair Luxury Solutions</h3>
          <p>
            Explore our services and products in interior stairs and discover
            the variety of colors.
          </p>
          <Link className="link-coresteps" href="#">
            Get a free quote
          </Link>
        </div>
        <div className="coresteps-img">
          <Image
            src="/coresteps/main-banner-img.svg"
            height={600}
            width={600}
            alt="CPF Floors - Coresteps"
          ></Image>
        </div>
      </div>

      <>
        <div className="main-steps-container">
          <div className="main-steps-text">
            <h2>Custom Made Steps</h2>
            <h3>Our Advantage</h3>
            <p>
              Not only you can pick from our 3 standard step shapes but also you
              can cutomize nosing dimensions. For a smoother finish, order our
              unique full step: a wider plank that covers the full run of your
              staircase
            </p>
          </div>
          <div className="main-steps-img">
            <Image
              src="/coresteps/coresteps-logo.svg"
              width={300}
              height={300}
              alt="Coresteps Logo"
            ></Image>
            <Link className="link-coresteps" href="#">
              Get a free quote
            </Link>
          </div>
        </div>

        <div className="steps-cards-container">
          <div className="steps-card">
            <Image
              src="/coresteps/square-steps.svg"
              height={500}
              width={500}
              alt="CPF Floors - step"
            ></Image>
            <h3>Square Step</h3>
          </div>
          <div className="steps-card">
            <Image
              src="/coresteps/double-rounded-steps.svg"
              height={500}
              width={500}
              alt="CPF Floors - step"
            ></Image>
            <h3>Double Rounded Step</h3>
          </div>
        </div>

        <div className="purchase-container">
          <div className="purchase">
            <div className="purchase-img">
              <Image
                src="/coresteps/purchase-img.png"
                height={600}
                width={600}
                alt="CPF Floors - Steps"
              ></Image>
            </div>
            <div className="purchase-text">
              <h2>Are you ready to purchase our products?</h2>
              <p>
                Click on the button to place your order with our step system
              </p>
              <Link className="light-link-coresteps" href="#">
                Get a free quote
              </Link>
            </div>
          </div>
        </div>

        <div className="construction-container">
          <div className="construction-title">
            <h2>Construction</h2>
            <p>
              Not only you can pick from our 3 standard step shapes but also you
              can cutomize nosing dimensions. For a smoother finish, order our
              unique full step: a wider plank that covers the full run of your
              staircase.
            </p>
          </div>

          <div className="construction-cards-container">
            <div className="construction-card">
              <Image
                src="/coresteps/whit-nose.svg"
                height={200}
                width={200}
                alt="CPF Floors Whit Nose"
              ></Image>
              <h2>Whit Nose</h2>
              <p>
                A stair with nose is a staircase that has rungs that protrude
                beyond the risers, creating a nose effect. Nose treads can
                improve the aesthetics and safety of the staircase by providing
                more surface area for the foot and preventing the risers from
                wearing down due to use.
              </p>
            </div>
            <div className="construction-card">
              <Image
                src="/coresteps/l-shape.svg"
                height={200}
                width={200}
                alt="CPF Floors Whit Nose"
              ></Image>
              <h2>L-Shape</h2>
              <p>
                An L shape stair is a staircase that has a 90 degree turn at
                some point, forming an L shape. The turn can be in the middle or
                at the end of the staircase, and can be made by a landing or by
                two steps in angle.
              </p>
            </div>
            <div className="construction-card">
              <Image
                src="/coresteps/triple-edge.svg"
                height={200}
                width={200}
                alt="CPF Floors Whit Nose"
              ></Image>
              <h2>Triple Edge</h2>
              <p>
                A triple stair angle is an angle that is three times the value
                of another angle. For example, if α is an angle, then 3 is a
                triple stair angle of α.
              </p>
            </div>
            <div className="construction-card">
              <Image
                src="/coresteps/double-edge.svg"
                height={200}
                width={200}
                alt="CPF Floors Whit Nose"
              ></Image>
              <h2>Double-edge</h2>
              <p>
                A double stair angle is an angle that is twice the value of
                another angle. For example, if β is an angle, then 2β is a
                double stair angle of β.
              </p>
            </div>
          </div>
        </div>

        <div className="construction-container">
          <div className="construction-title">
            <h2>Full vs Regular Steps</h2>
            <p>
              Not only you can pick from our 3 standard step shapes but also you
              can cutomize nosing dimensions. For a smoother finish, order our
              unique full step: a wider plank that covers the full run of your
              staircase.
            </p>
          </div>

          <div className="construction-cards-container">
            <div className="construction-card">
              <Image
                src="/coresteps/full-steps.svg"
                height={600}
                width={600}
                alt="CPF Floors Whit Nose"
              ></Image>
              <h2>Full Steps</h2>
              <p>
                A stair with nose is a staircase that has rungs that protrude
                beyond the risers, creating a nose effect. Nose treads can
                improve the aesthetics and safety of the staircase by providing
                more surface area for the foot and preventing the risers from
                wearing down due to use.
              </p>
            </div>
            <div className="construction-card">
              <Image
                src="/coresteps/regular-steps.svg"
                height={600}
                width={600}
                alt="CPF Floors Whit Nose"
              ></Image>
              <h2>Regular Steps</h2>
              <p>
                An L shape stair is a staircase that has a 90 degree turn at
                some point, forming an L shape. The turn can be in the middle or
                at the end of the staircase, and can be made by a landing or by
                two steps in angle.
              </p>
            </div>
          </div>
        </div>
      </>

      <>
        <CorestepsCarousel />
      </>

      <>
        <div className="documents-cards-container">
            <div className="documents-card">
                <h2>Digital Brochure</h2>
                <Image src="/coresteps/digital-brochure.png" height={600} width={600} alt="CPF Floors doocumentation"></Image>
                <p>Download our catalog where you will get all the information about our products at your fingertips and formatted for printing.</p>
                <Link className="link-coresteps" href="#">Download</Link>
            </div>
            <div className="documents-card">
                <h2>Install Yourself</h2>
                <Image src="/coresteps/install-yourself.png" height={600} width={600} alt="CPF Floors doocumentation"></Image>
                <p>With our PDF installation manual you can carry out the corresponding steps to install your own steps</p>
                <Link className="link-coresteps" href="#">Download</Link>
            </div>
        </div>
      </>

      <>
        <div className="last-banner-container">
        <div className="last-banner">
                <h2>Become a Dealer</h2>
                <h3>Transform Your Spaces with Style</h3>
                <Link className="link-coresteps" href="/become-a-dealer">Become a Dealer</Link>
            </div>
        </div>
      </>
    </>
  );
}

export default Coresteps;
