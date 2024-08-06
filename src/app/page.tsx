"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import HomeBannerCarousel from "@/components/HomeBannerCarousel";
import LogosCarousel from "@/components/LogosCarousel";

import "@/app/sass/Home.scss";

function Home() {
  return (
    <>
      <>
        <div className="main-banner">
          <div className="main-banner-text">
            <h1>Let&apos;s Click <br /> Together!</h1>
            <p>The smartest flooring solution for all your <br /> renovation needs.</p>
            <Link className="link-light" href="/collections">Get Started!</Link>
          </div>
        </div>
      </>

      <>
        <LogosCarousel />
      </>

      <>
        <motion.div
          className="roomvo-section-container"
          initial={{ opacity: 0, y: 800 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="roomvo-section">
            <div className="roomvo-img">
              <motion.img
                src="/home/roomvo-section.png"
                height={500}
                width={500}
                alt="CPF Floor LLC Roomvo Visualizer"
              ></motion.img>
            </div>
            <div className="roomvo-text">
              <h2>Room Visualizer</h2>
              <h3>Select Your Color</h3>
              <p>
                Our room visualizer tool makes it easy for you to visualize your
                dream floor in your house. All you need to do is upload a photo,
                select the products you want to use, and find the perfect design
                for your home.
              </p>
              <Link href="#" className="link-dark">
                Try it Yourself!
              </Link>
            </div>
          </div>
        </motion.div>
      </>

      <>
        <HomeBannerCarousel />
      </>

      <>
        <div className="discover-section-container">
          <div className="discover">
            <div className="discover-text">
              <h2 className="font-bold"><b>Discover Resources</b><br />For Grow Your Business</h2>
              <p>
                Gain a competitive edge and ignite revenue growth today. We
                equip your dealer with powerful marketing tools that make CPF
                selling easy.
              </p>
              <Link className="link-dark" href="/become-a-dealer">
                Contact Now!
              </Link>
            </div>
            <div className="discover-img">
              <motion.img
                src="/home/discover-img.png"
                width={500}
                height={500}
                alt="Discover Section CPF Floors"
              ></motion.img>
            </div>
          </div>
        </div>
      </>

      <>
        <div className="order-section-container">
          <div className="order">
            <div className="order-section-text">
              <h2>Order Your</h2>
              <h2 className="font-bold">Free Sample</h2>
              <p>
                Request your samples and experience the quality of CPF Floors
                with your own eyes!
              </p>
              <Link href="/contact-us" className="link-light">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </>

      <>
        <div className="available-section-container">
          <div className="available-section">
            <div className="available-section-title">
              <h2>Available Accessories </h2>
              <p>
                Each collection tone is complemented by perfectly matched
                moldings, ensuring a seamless and elegant transition through
                your space. Plus, our custom-made square-shaped steps offer a
                modern and timeless architectural edge.
              </p>
            </div>
            <div className="available-accessories-container">
              <div className="available-accessories-div-one">
                <motion.img src="/home/ac1.svg" width={400} height={400} alt=""></motion.img>
                <h2>Steps</h2>
                <Link href="/coresteps">View More</Link>
              </div>
              <div className="available-accessories-div-two">
              <motion.img src="/home/ac2.svg" width={400} height={400} alt=""></motion.img>
                <h2>Moldings</h2>
                <Link href="/core-moldings">View More</Link>
              </div>
              <div className="available-accessories-div-three">
              <motion.img src="/home/ac3.svg" width={400} height={400} alt=""></motion.img>
                <h2>Underlayments</h2>
                <Link href="/corepad">View More</Link>
              </div>
            </div>
          </div>
        </div>
      </>

      <>
        <div className="deliver-section-container">
          <div className="deliver-section">
            <div className="deliver-img">
              <motion.img
                src="/home/deliver-img.png"
                height={500}
                width={500}
                alt="CPF Floor LLC We deliver"
              ></motion.img>
            </div>
            <div className="deliver-text">
              <h2>We Deliver Trust,</h2>
              <h3>One Plank At Time</h3>
              <p>
                With over 20 years of experience in the industry. Our team
                comprises experts from leading national and global flooring
                companies who bring innovation and excellence to the table.
              </p>
              <Link href="/become-a-dealer" className="link-dark">
                Try it Yourself!
              </Link>
            </div>
          </div>
        </div>
      </>

      <>
        <div className="rigid-core-container">
          <div className="rigid-core">
            <motion.img
              className="plank"
              src="/plank.png"
              width={500}
              height={900}
              alt="CPF Floors Rigid Core Vinyl"
              initial={{ y: 700 }}
              whileInView={{ y: 100 }}
              exit={{ y: 700 }}
              transition={{ duration: 0.5 }}
            ></motion.img>
            <motion.img
              className="cloud"
              src="/home/cloud-banner.png"
              width={900}
              height={800}
              alt="CPF Floors Rigid Core Vinyl"
              initial={{ y: 800 }}
              whileInView={{ y: 300 }}
              exit={{ y: 800 }}
              transition={{ duration: 1 }}
            ></motion.img>
            <div className="rigid-core-text">
              <h2>Rigid Core Vinyl</h2>

              <div className="flex flex-row justify-center items-center">
                <h3>Your Flooring Solution Partner</h3>
              </div>
              <p>
                Discover high-quality flooring options in different styles, from
                rustic, modern, and classic to elegant. Transform your space and
                find inspiration with our beautiful collections.
              </p>
              <Link className="link-light" href="/collections/vinyl">
                See More
              </Link>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Home;
