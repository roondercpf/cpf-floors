"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import HomeBannerCarousel from "@/components/HomeBannerCarousel";

import "@/app/sass/Home.scss";

function Home() {
  return (
    <>
      <>
        <div className="main-banner">
          <h1>Let&apos;s Click Together!</h1>
          <p>The smartest flooring solution for all your renovation needs.</p>
          <motion.img
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration:2}}
            src="/home/main-banner-img.png"
            height={500}
            width={500}
            alt=""
          ></motion.img>
        </div>
      </>
      <>
        <div className="description-container">
          <div className="description-text">
            <h2>+800</h2>
            <p>dealers</p>
          </div>
          <div className="description-text">
            <h2>Find</h2>
            <p>dealers near</p>
          </div>
          <div className="description-text flex items-center justify-evenly py-8">
            <h2>4.8</h2>
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/home/stars.svg"
                height={180}
                width={180}
                alt=""
              ></Image>
              <p>128 reviews</p>
            </div>
          </div>
        </div>
      </>

      <>
        <div className="logos p-20 flex justify-center items-center w-100">
          <Image src="/home/logos.svg" height={100} width={100} alt="" />
        </div>
      </>

      <>
        <div className="roomvo-section-container">
          <div className="roomvo-section">
            <div className="roomvo-img">
              <Image
                src="/home/roomvo-section.png"
                height={500}
                width={500}
                alt="CPF Floor LLC Roomvo Visualizer"
              ></Image>
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
        </div>
      </>

      <>
        <HomeBannerCarousel />
      </>

      <>
        <div className="discover-section-container">
          <div className="discover">
            <div className="discover-text">
              <h2 className="font-bold">Discover Resources</h2>
              <h2>For Grow Your Business</h2>
              <p>
                Gain a competitive edge and ignite revenue growth today. We
                equip your dealer with powerful marketing tools that make CPF
                selling easy.
              </p>
              <Link className="link-dark" href="#">
                Contact Now!
              </Link>
            </div>
            <div className="discover-img">
              <Image
                src="/home/discover-img.png"
                width={500}
                height={500}
                alt="Discover Section CPF Floors"
              ></Image>
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
              <Link href="#" className="link-light">
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
                <h2>Steps</h2>
                <Link href="#">View More</Link>
              </div>
              <div className="available-accessories-div-two">
                <h2>Moldings</h2>
                <Link href="#">View More</Link>
              </div>
              <div className="available-accessories-div-three">
                <h2>Underlayments</h2>
                <Link href="#">View More</Link>
              </div>
            </div>
          </div>
        </div>
      </>

      <>
        <div className="deliver-section-container">
          <div className="deliver-section">
            <div className="deliver-img">
              <Image
                src="/home/deliver-img.png"
                height={500}
                width={500}
                alt="CPF Floor LLC We deliver"
              ></Image>
            </div>
            <div className="deliver-text">
              <h2>We Deliver Trust,</h2>
              <h3>One Plank At Time</h3>
              <p>
                With over 20 years of experience in the industry. Our team
                comprises experts from leading national and global flooring
                companies who bring innovation and excellence to the table. 
              </p>
              <Link href="#" className="link-dark">
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
              src="/home/plank-banner.png"
              width={500}
              height={800}
              alt="CPF Floors Rigid Core Vinyl"
              initial={{ y: 800 }}
              whileInView={{ y: 0 }}
              exit={{ y: 800 }}
              transition={{ duration: 0.5 }}
            ></motion.img>
            <motion.img
              className="cloud"
              src="/home/cloud-banner.png"
              width={900}
              height={800}
              alt="CPF Floors Rigid Core Vinyl"
              initial={{ y: 800 }}
              whileInView={{ y: 0 }}
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
              rustic, modern, and classic to elegant.  Transform your space and
              find inspiration with our beautiful collections.
            </p>
            <Link className="link-light" href="#">See More</Link>
          </div>
          </div>
          
        </div>
      </>
    </>
  );
}

export default Home;
