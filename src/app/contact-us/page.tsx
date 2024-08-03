"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import ContactUsForm from "@/components/BecomeADealerForm";

import "@/app/sass/ContactUs.scss";
import BecomeADealerForm from "@/components/BecomeADealerForm";

function ContactUs() {
  return (
    <>
      <>
        <div className="contact-main-banner">
          <div className="contact-form-section">
            <div className="contact-form">
              <BecomeADealerForm />
            </div>
            <motion.div
              className="contact-img"
              initial={{ opacity: 0, rotateX: 180 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{ duration: 1 }}
            >
              <h2>
                Let&apos;s Get In <br></br> Touch
              </h2>
              <p>
                Take advantage of opportunities to grow your dealer business and
                increase sales!
              </p>
              <div className="flex flex-col font-bold">
                <Link className="mb-5" href="mailto:sales@cpffloors">
                  sales@cpffloors.com
                </Link>
                <Link href="tel:13056022330">+1-305-6022330</Link>
              </div>
              <Image
                src="/become-a-dealer/contact-img.png"
                height={300}
                width={300}
                alt="CPF Floors - Contact us"
              ></Image>
            </motion.div>
          </div>
        </div>
      </>

      <>
        <section>
          <div className="locate-container">
            <div className="locate">
              <h2>Locate Us</h2>
              <p>
                Visit our showroom to browse our extensive selection of flooring
                options, get expert advice from our professional staff, and
                experience the CPF Floors difference firsthand.
              </p>

              <div className="locate-img">
                <Link href="#">
                  <div className="locate-card">
                    <Image
                      src="/contact-us/lakeland.svg"
                      height={400}
                      width={400}
                      alt="CPF Location"
                    ></Image>
                    <div className="flex mx-auto justify-center items-center">
                      <Image
                        className="mark"
                        src="/contact-us/carbon_location.svg"
                        height={20}
                        width={20}
                        alt="CPF Location"
                      ></Image>
                      <h3 className="text-center">Lakeland, FL</h3>
                    </div>
                    <p className="text-center">
                      6700 NW 77 CT, Suite 100 Miami, FL, 33166
                    </p>
                  </div>
                </Link>
                <Link href="#">
                  <div className="locate-card">
                    <Image
                      src="/contact-us/medley.svg"
                      height={400}
                      width={400}
                      alt="CPF Location"
                    ></Image>
                    <div className="flex mx-auto justify-center items-center">
                      <Image
                        className="mark"
                        src="/contact-us/carbon_location.svg"
                        height={20}
                        width={20}
                        alt="CPF Location"
                      ></Image>
                      <h3 className="text-center">Medley, FL</h3>
                    </div>
                    <p className="text-center">
                      6700 NW 77 CT, Suite 100 Miami, FL, 33166
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>

      <>
        <motion.div
          className="contact-banner-section"
          initial={{ opacity: 0, y: 600 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="contact-banner">
            <div className="contact-banner-text">
              <h2 className="font-bold">Collection Floors</h2>
              <h3>To Grow Your Business</h3>
              <p>
                Discover high-quality flooring options in different styles, from
                rustic, modern, and classic to elegant. Transform your space and
                find inspiration with our beautiful collections.
              </p>
              <Link href="/collections/vinyl" className="link-light">
                See More
              </Link>
            </div>
          </div>
        </motion.div>
      </>
    </>
  );
}

export default ContactUs;
