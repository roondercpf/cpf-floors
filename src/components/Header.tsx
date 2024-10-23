"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { CollectionResponse } from "@/interfaces/collections.model";
import "../app/globals.css";
import "../app/sass/Header.scss";
import MenuCarousel from "./MenuCarousel";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Header() {
  const [list, setList] = useState<CollectionResponse>();

  const [openProducts, setOpenProducts] = useState(false);
  const [openInspire, setOpenInspire] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    async function getCollections() {
      const url = "api/collections";
      try {
        const response = await fetch(url);

        const collection: CollectionResponse = await response.json();

        setList(collection);
      } catch (err) {
        console.log(err);
      }
    }
    getCollections();
  }, []);

  return (
    <>
      <>
        <div className="header-promo">
          <p className="font-semibold">
            (305) 602 2330 CALL US - 98% of orders ship in 48 hours - The Best
            in Waterproof Flooring
          </p>
        </div>

        <header className="desktop-header">
          <div>
            <Link href="/">
              <Image
                onClick={() => setOpenProducts(false)}
                className="header-desktop-logo"
                alt="CPF Floors logo"
                src="/footer-logo.svg"
                height={70}
                width={70}
              ></Image>
            </Link>
          </div>
          <nav className="desktop-nav">
            <div className="composed-link flex">
              <Link
                onClick={() => {
                  setOpenProducts(false);
                  setOpenInspire(false);
                }}
                href="/collections"
              >
                Products
              </Link>
              <Image
                onClick={() => {
                  setOpenProducts(!openProducts);
                  setOpenInspire(false);
                }}
                src="/menu-arrow.svg"
                height={14}
                width={14}
                alt=""
              ></Image>
            </div>

            <Link
              href="/dealer-locator"
              onClick={() => {
                setOpenProducts(false);
                setOpenInspire(false);
              }}
            >
              Dealer Locator
            </Link>
            <Link
              href="/order-samples"
              onClick={() => {
                setOpenProducts(false);
                setOpenInspire(false);
              }}
            >
              Order Samples
            </Link>
            <Link
              href="/about-us"
              onClick={() => {
                setOpenProducts(false);
                setOpenInspire(false);
              }}
            >
              About Us
            </Link>

            <div className="composed-link flex">
              <Link
                onClick={() => {
                  setOpenProducts(false);
                }}
                href="/blogs"
              >
                Our Blog
              </Link>
            </div>

            <Link
              href="/contact-us"
              onClick={() => {
                setOpenProducts(false);
                setOpenInspire(false);
              }}
            >
              Contact Us
            </Link>
          </nav>
          <Link
            href="/become-a-dealer"
            className="button-dark"
            onClick={() => {
              setOpenProducts(false);
              setOpenInspire(false);
            }}
          >
            Become a Dealer
          </Link>
        </header>

        {/*OPEN PRODUCTS SECTION*/}

        <AnimatePresence initial={false}>
          {openProducts && (
            <motion.div
              className="products-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
            >
              <div className="menu-products-carousel">
                <MenuCarousel />
              </div>
              <div className="product-menu-links-container">
                <div className="links-container">
                  <h3>Collections</h3>

                  {/*MAPPING COLLECTIONS URLS */}

                  {list?.collections.map((link, index) => (
                    <Link
                      onClick={() => setOpenProducts(false)}
                      key={index}
                      href={`/collection/${link.collection_url}`}
                    >
                      {link.name}
                    </Link>
                  ))}

                  <Link
                    onClick={() => setOpenProducts(false)}
                    className="font-bold underline"
                    href="/collections"
                  >
                    All Categories
                  </Link>
                </div>

                <div className="links-container">
                  <h3>Accesories</h3>
                  <Link
                    onClick={() => setOpenProducts(false)}
                    href="/coresteps"
                  >
                    Baseboards
                  </Link>
                  <Link onClick={() => setOpenProducts(false)} href="/corepad">
                    Underlayment
                  </Link>
                  <Link
                    onClick={() => setOpenProducts(false)}
                    href="/coresteps"
                  >
                    Steps
                  </Link>
                  <Link
                    onClick={() => setOpenProducts(false)}
                    href="/core-moldings"
                  >
                    Moldings
                  </Link>
                </div>
                <div className="links-container">
                  <h3>Resources</h3>
                  <Link
                    onClick={() => setOpenProducts(false)}
                    href="/document-center"
                  >
                    Document Center
                  </Link>
                  <Link
                    onClick={() => setOpenProducts(false)}
                    href="/financing"
                  >
                    Financing
                  </Link>
                  <Link onClick={() => setOpenProducts(false)} href="/faq">
                    F.A.Q.
                  </Link>
                  <Link
                    onClick={() => setOpenProducts(false)}
                    href="/display-resources"
                  >
                    Display Resources
                  </Link>
                  <Link
                    onClick={() => setOpenProducts(false)}
                    href="/privacy-policy"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/*OPEN GET INSPIRED SECTION*/}

        <AnimatePresence initial={false}>
          {openInspire && (
            <motion.div
              className="inspired-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 600, opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
            >
              <Link href="#">
                <div className="inspired-menu-card">
                  <Image
                    src="/home/inspired-menu-1.png"
                    height={400}
                    width={400}
                    alt="CPF Floors - Get Inspired"
                  ></Image>
                  <p>
                    Discover the CoreSteps line, the Stair Luxury Collection
                    with unparalleled{" "}
                  </p>
                </div>
              </Link>

              <Link href="#">
                <div className="inspired-menu-card">
                  <Image
                    src="/home/inspired-menu-2.png"
                    height={400}
                    width={400}
                    alt="CPF Floors - Get Inspired"
                  ></Image>
                  <p>
                    Discover the CoreSteps line, the Stair Luxury Collection
                    with unparalleled{" "}
                  </p>
                </div>
              </Link>

              <Link href="#">
                <div className="inspired-menu-card">
                  <Image
                    src="/home/inspired-menu-1.png"
                    height={400}
                    width={400}
                    alt="CPF Floors - Get Inspired"
                  ></Image>
                  <p>
                    Discover the CoreSteps line, the Stair Luxury Collection
                    with unparalleled{" "}
                  </p>
                </div>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </>

      {/*MOBILE HEADER*/}

      <>
        <div className="mobile-header">
          <div>
            <Link href="/">
              <Image
                className="header-mobile-logo"
                alt="CPF Floors logo"
                src="/footer-logo.svg"
                height={50}
                width={50}
              ></Image>
            </Link>
          </div>
          <Link
            onClick={() => setMobileNav(!mobileNav)}
            href="/become-a-dealer"
            className="link-dark mx-5 py-1 px-8"
          >
            Become a Dealer
          </Link>
          <div
            className="menu-bar flex"
            onClick={() => setMobileNav(!mobileNav)}
          >
            <Image
              src="/menu-bar.svg"
              height={30}
              width={30}
              alt="menu bar"
            ></Image>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {mobileNav && (
            <motion.div
              className="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ height: "100vh", opacity: 1 }}
              exit={{ opacity: 0, height: 0 }}
            >
              {/* MOBILE NAV ACCORDION SECTION */}

              <div className="mobile-nav-links">
                <Accordion type="single" collapsible className="w-full px-5">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      <h3>Products</h3>
                    </AccordionTrigger>
                    <div className="link-container">
                      <AccordionContent className="link-container-list flex flex-col p-5">
                        {list?.collections.map((link, index) => (
                          <Link
                            className="mb-5 text"
                            onClick={() => {
                              setOpenProducts(false);
                              setMobileNav(false);
                            }}
                            key={index}
                            href={`/collection/${link.collection_url}`}
                          >
                            {link.name}
                          </Link>
                        ))}
                      </AccordionContent>
                    </div>
                  </AccordionItem>
                  <div className="link-container-normal py-5">
                    <Link href="/dealer-locator">Dealer Locator</Link>
                  </div>
                  <div className="link-container-normal py-5">
                    <Link href="/become-a-dealer">Become a Dealer</Link>
                  </div>
                  <div className="link-container-normal py-5">
                    <Link href="/about-us">About Us</Link>
                  </div>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      <h3>Get Inspired</h3>
                    </AccordionTrigger>
                    <div className="link-container">
                      <AccordionContent className="link-container-list flex flex-col p-5">
                        <Link href="/blog">Our Blog</Link>
                      </AccordionContent>
                    </div>
                  </AccordionItem>
                  <div className="link-container-normal py-5">
                    <Link href="/order-samples">Order Samples</Link>
                  </div>
                  <div className="link-container-normal py-5">
                    <Link href="/contact-us">Contact Us</Link>
                  </div>
                </Accordion>
                <div className="flex justify-center items-center py-20">
                  <Image
                    src="/footer-logo.svg"
                    height={140}
                    width={140}
                    alt="CPF Floors"
                    unoptimized
                  ></Image>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    </>
  );
}

export default Header;
