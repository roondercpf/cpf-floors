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
              <h2 className="text-center">
                Let&apos;s Get In <br></br> Touch
              </h2>
              <p>
                Take advantage of opportunities to grow your dealer business and
                increase sales!
              </p>
              <div className="contact-cpf flex flex-row font-bold justifly-between items-center">
                <Link
                  className="flex items-center w-100  contact-data"
                  href="mailto:sales@cpffloors.com"
                >
                  <Image
                    src="/contact-us/Vector.svg"
                    height={30}
                    width={30}
                    alt="CPF Floors contact"
                  ></Image>
                  <p>sales@cpffloors.com</p>
                </Link>
                <Link
                  className="flex items-center w-100 contact-data"
                  href="tel:13056022330"
                >
                  <Image
                    src="/contact-us/ph_phone.svg"
                    height={30}
                    width={30}
                    alt="CPF Floors contact"
                  ></Image>
                  <p>+1 305-6022330</p>
                </Link>
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
                <Link
                  target="_blank"
                  href="https://www.google.com/maps/place/4000+N+Combee+Rd+16+18,+Lakeland,+FL+33805,+EE.+UU./@28.0947005,-81.9062423,17z/data=!3m1!4b1!4m5!3m4!1s0x88dd4157592d0dbd:0x83ead241a5f91835!8m2!3d28.0947005!4d-81.9062423?entry=ttu"
                >
                  <div className="locate-card">
                    <Image
                      src="/contact-us/lakeland.png"
                      height={400}
                      width={400}
                      alt="CPF Location"
                    ></Image>
                    <div className="flex justify-center items-center">
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
                      4000 North Combee Road, Suite 16 - 18 Lakeland, FL 33801
                    </p>
                  </div>
                </Link>

                <Link
                  target="_blank"
                  href="https://www.google.com/maps/place/6700+NW+77th+Ct+%23100,+Miami,+FL+33166,+EE.+UU./@25.8349023,-80.322886,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9bbca94347a61:0x60916fc202cd13dc!8m2!3d25.8349023!4d-80.322886!16s%2Fg%2F11qz9gxv7b?entry=ttu"
                >
                  <div className="locate-card">
                    <Image
                      src="/contact-us/medley.png"
                      height={400}
                      width={400}
                      alt="CPF Location"
                    ></Image>
                    <div className="flex justify-center items-center">
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
