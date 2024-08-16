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
          <Image
            src="/coresteps/logo.svg"
            height={120}
            width={120}
            alt="Coresteps Logo"
          ></Image>
          <h2>
            <b>Step Into Confort</b>
            <br /> With Custom-Made Steps
          </h2>
          <p>
            Explore the versallity of tailor-made stair steps <br /> and pick
            from our 3 standard step shapes.
          </p>
          <Link className="link-coresteps" href="/contact-us">
            Get a free quote
          </Link>
        </div>
      </div>

      <>
        <div className="main-steps-container">
          <div className="main-steps-text">
            <h2>
              <b>Customize your Style,</b>
              <br /> Step Into Quality
            </h2>
            <p>
              Pick from our 3 standard step shapes and cutomize nosing
              dimensions. For a smoother finish, order our unique full step: a
              wider plank that covers the full run of your staircase
            </p>
          </div>
        </div>

        <div className="steps-cards-container">
          <div className="steps-card">
            <Image
              src="/coresteps/square-steps.png"
              height={500}
              width={500}
              alt="CPF Floors - step"
            ></Image>
            <h3>Square Step</h3>
          </div>
          <div className="steps-card">
            <Image
              src="/coresteps/double-rounded.png"
              height={500}
              width={500}
              alt="CPF Floors - step"
            ></Image>
            <h3>Double Rounded Step</h3>
          </div>
        </div>

        <div className="steps-black-container">
          <div className="black-card">
            <Image
              src="/coresteps/full-steps.svg"
              height={500}
              width={500}
              alt="CPF Floors - step"
            ></Image>
            <p className="text-center">
              A full step stair is a staircase that has steps that occupy the
              entire width of the staircase, without leaving empty spaces
              between them. The steps can be supported on a central structure or
              on the side walls.
            </p>
          </div>
          <div className="black-card">
            <Image
              src="/coresteps/regular-steps.svg"
              height={500}
              width={500}
              alt="CPF Floors - step"
            ></Image>
            <p className="text-center">
              A regular steps stair is a staircase that has the same steps and
              risers on each flight. The steps are the horizontal parts where
              the foot rests, and the risers are the vertical parts that join
              the steps.
            </p>
          </div>
        </div>

        <div className="brochure">
          <div className="brochure-banner-container">
            <div className="brochure-card flex justify-center items-center flex-col">
              <h2>Digital Brochure</h2>
              <p>
                Get all the information about our products at your fingertips
                and formatted for printing.
              </p>
              <Link className="link-coresteps" href="/document-center">Download</Link>
            </div>
          </div>
        </div>

        <div className="brochure-2">
          <div className="brochure-banner-container-2">
            <div className="brochure-card-2 flex justify-center items-center flex-col">
              <h2>Install Yourself</h2>
              <p>
                Get the installation manual to <br /> install your own product.
              </p>
              <Link className="link-coresteps" href="/document-center">Download</Link>
            </div>
          </div>
        </div>

      </>

      <>
        <CorestepsCarousel />
      </>

      <>
        <div className="black-banner-container">
          <div className="black-banner flex flex-col justify-center items-center">
            <div className="black-banner-title">
              <h2>How to purchase CoreSteps</h2>
              <p>Follow the step system to purchase our products without problems.</p>
            </div>
            <div className="black-cards-container flex flex-row flex-wrap justify-between items-start">
              <div className="black-card">
                <Image src="/coresteps/1.svg" height={40} width={40} alt=""></Image>
                <h3>Get a Free Quote</h3>
                <p>Schedule a call to talk about your project.</p>
              </div>
              <div className="black-card">
                <Image src="/coresteps/2.svg" height={40} width={40} alt=""></Image>
                <h3>Select your Product</h3>
                <p>Select the floor and color of your preference to make the stairs. .</p>
              </div>
              <div className="black-card">
                <Image src="/coresteps/3.svg" height={40} width={40} alt=""></Image>
                <h3>Pick up your order</h3>
                <p>Select the delivery or pick-up method of the product..</p>
              </div>
            </div>
          </div>
        </div>
      </>

      <>
        <div className="last-banner-container">
          <div className="last-banner">
            <h2>Become a Dealer</h2>
            <h3>& Transform Your Spaces with Style</h3>
            <Link className="link-coresteps" href="/become-a-dealer">
              Become a Dealer
            </Link>
          </div>
        </div>
      </>
    </>
  );
}

export default Coresteps;
