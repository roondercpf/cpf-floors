"use client";

import Link from "next/link";
import Image from "next/image";

import "@/app/sass/AboutUs.scss";

function AboutUs() {
  return (
    <>
      <>
        <div className="about-main-banner">
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              We continuously search for the finest and most <br /> innovative flooring
              solutions.
            </p>
            <Link className="link-dark" href="/contact-us">
              Contact Us
            </Link>
          </div>
          <div className="about-img">
            <Image
              src="/about/about-banner.png"
              height={600}
              width={600}
              alt="About Us - CPF Floors"
            ></Image>
          </div>
        </div>
      </>

      <>
        <div className="about-people-section">
          <div className="about-people-text">
            <h2 className="font-bold">We Deliver Trust,</h2>
            <h2>One Plank At Time</h2>
            <p>
              With over 20 years of experience in the industry. Our team
              comprises experts from leading national and global flooring
              companies who bring innovation and excellence to the table.
            </p>
            <Link className="link-dark" href="/contact-us">
              Contact Us
            </Link>
          </div>
        </div>
      </>

      <>
        <div className="choosing-section-container">
          <div className="choosing-text">
            <h2 className="font-bold">Why</h2>
            <h2>choosing us</h2>
            <p>
              Our Miami HQ and Lakeland warehouse allow us to expand quickly
              over the state of Florida and provide efficient service to valued
              customers. We&apos;ve gained the trust of our dealers which has helped
              us ensure swift and efficient service to our valued dealers.
            </p>
            <Link className="link-dark" href="/contact-us">
              Contact Us
            </Link>
          </div>
        </div>
      </>

      <>
        <div className="discover-about-container">
          <div className="discover-about">
            <div className="discover-about-text">
              <h2>Discover Programs</h2>
              <h3>To Grow Your Business</h3>
              <p>
                Discover high-quality flooring options in different styles, from
                rustic, modern, and classic to elegant. Transform your space
                and find inspiration with our beautiful collections.
              </p>
              <Link className="link-light" href="/contact-us">See More</Link>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default AboutUs;
