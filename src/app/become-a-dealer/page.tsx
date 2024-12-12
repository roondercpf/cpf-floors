"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import BecomeADealerForm from "@/components/BecomeADealerForm";

import "@/app/sass/BecomeADealer.scss";
import { Rotate3D } from "lucide-react";

function BecomeADealer() {
  return (
    <>
      <>
        <div className="become-main-banner">
          <div className="become-text">
            <h2>Become a Dealer</h2>
            <p>
              Join us now and discover how we help you <br /> achieve your business
              goals!
            </p>
            <Link className="link-light" href="#contactForm">
              Contact Us
            </Link>
          </div>
          <motion.div
            className="become-img"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <Image
              src="/display-resources/rack-1.svg"
              height={600}
              width={600}
              alt="CPF Floors - Become a dealer"
              unoptimized
            ></Image>
          </motion.div>
        </div>
      </>

      <>
        <div className="benefits-section-container">
          <div className="benefits-title">
            <h2 className="font-bold">Benefits of become a Dealer</h2>
            <h2>Elevate Your Sales With CPF Floors</h2>
            <p>
              Power up your business as a CPF Floors Dealer and join our
              exclusive network to benefit from agility, speed, and readily
              available inventory.
            </p>
          </div>

          <div className="benefits-text-container">
            <div className="benefits-text-area">
              <div className="benefits-text-div">
                <Image
                  src="/become-a-dealer/early-access.svg"
                  height={50}
                  width={50}
                  alt="icon"
                ></Image>
                <h3>Early Access</h3>
                <p>
                  To competitive pricing, exceptional customer support, next-day
                  delivery, and growth tools tailored to your needs.{" "}
                </p>
              </div>
              <div className="benefits-text-div">
                <Image
                  src="/become-a-dealer/grow.svg"
                  height={50}
                  width={50}
                  alt="icon"
                ></Image>
                <h3>Grow Your Business</h3>
                <p>
                  We &quote; ve got your back with the largest in-stock
                  selection of rigid core vinyl, laminate flooring, baseboards,
                  and stair-step materials.{" "}
                </p>
              </div>
            </div>

            <motion.div
              className="benefits-img"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, rotateX: 360 }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/display-resources/sample-board.svg"
                height={500}
                width={500}
                alt="CPF Floors Become a dealer"
              ></Image>
            </motion.div>

            <div className="benefits-text-area">
              <div className="benefits-text-div">
                <Image
                  src="/become-a-dealer/satisfaction.svg"
                  height={50}
                  width={50}
                  alt="icon"
                ></Image>
                <h3>Your Satisfaction, Our Promise</h3>
                <p>
                  Our extensive range of displays and digital marketing
                  resources are specifically designed to help your team
                  accelerate revenue growth and foster customer loyalty.{" "}
                </p>
              </div>
              <div className="benefits-text-div">
                <Image
                  src="/become-a-dealer/custom.svg"
                  height={50}
                  width={50}
                  alt="icon"
                ></Image>
                <h3>Custom Growth Programs</h3>
                <p>
                  Establish your store as a trusted brand with our branding
                  support and private label options for rigid core vinyl
                  products.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </>

      <>
        <div className="bluetape-main-banner">
          <div className="bluetape">
            <div className="bluetape-text">
              <h2 className="font-bold">Buy Today,</h2>
              <h3>Pay Tomorrow With Ease</h3>
              <p>
                Join our dealer network and keep your store&apos;s cash flow
                thriving while growing your business faster! Enjoy multiple
                benefits, including super-friendly financing terms. <br />
                <br /> You can get 0% interest for the first 30 days and choose
                to pay within 30, 60, or 90 days.
              </p>
              <Link className="link-light" href="#contactForm">
                Explore Products
              </Link>
            </div>
            <motion.div
              className="bluetape-img"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <Image
                src="/become-a-dealer/bluetape-banner.png"
                height={600}
                width={600}
                alt="CPF Floors - Become a dealer"
                unoptimized
              ></Image>
            </motion.div>
          </div>
        </div>
      </>

      <>
        <div className="form-section-container">
          <div className="form">
            <div className="form-container">
              <BecomeADealerForm />
            </div>
            <motion.div
              className="form-img"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <Image
                src="/become-a-dealer/contact-img.png"
                height={300}
                width={300}
                alt="Become a dealer -CPF Floors"
              ></Image>
              <h2 className="font-bold">Let&apos;s Work</h2>
              <h2>Together</h2>
              <p className="text-center">
                Take advantage of opportunities to grow your dealer business and
                increase sales!
              </p>
            </motion.div>
          </div>
        </div>
      </>
    </>
  );
}

export default BecomeADealer;
