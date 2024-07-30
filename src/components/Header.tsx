"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import "../app/globals.css";
import "../app/sass/Header.scss";
import MenuCarousel from "./MenuCarousel";

function Header() {
  const [openProducts, setOpenProducts] = useState(false);
  const [openInspire, setOpenInspire] = useState(false);

  const [mobileNav, setMobileNav] = useState(false);
  const [openMobileProductsScetion, setOpenMobileProductsSection] =
    useState(false);
  const [openMobileInspiredSection, setOpenMobileInspiredSection] =
    useState(false);

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
                className="header-desktop-logo"
                alt="CPF Floors logo"
                src="./footer-logo.svg"
                height={70}
                width={70}
              ></Image>
            </Link>
          </div>
          <nav className="desktop-nav">
            <div className="composed-link flex">
              <Link
                onClick={() => {
                  setOpenProducts(!openProducts);
                  setOpenInspire(false);
                }}
                href="#"
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
              href="#"
              onClick={() => {
                setOpenProducts(false);
                setOpenInspire(false);
              }}
            >
              Order Sample
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
                Blog
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
              animate={{ height: 600, opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
            >
              <div className="menu-products-carousel">
                <MenuCarousel />
              </div>
              <div className="product-menu-links-container">
                <div className="links-container">
                  <h3>Collections</h3>
                  <Link href="#">Deco54</Link>
                  <Link href="/collection/6696ccc2103daba3b410e1a2">
                    Quick48+
                  </Link>
                  <Link href="/collection/6696cdb2103daba3b410e1a6">
                    Project
                  </Link>
                  <Link href="/collection/6696cabd103daba3b410e19f">
                    Spirit XL
                  </Link>
                  <Link href="/collection/6696ccd5103daba3b410e1a4">Project 2.0</Link>
                  <Link href="#">Supreme</Link>
                  <Link href="#">Evolve</Link>
                </div>

                <div className="links-container">
                  <h3>Room Type</h3>
                  <Link href="#">Kitchen</Link>
                  <Link href="#">Bathroom</Link>
                  <Link href="#">Living Area</Link>
                  <Link href="#">Basement</Link>
                  <Link href="#">Light Commercial</Link>
                </div>

                <div className="links-container">
                  <h3>More Products</h3>
                  <Link href="#">Baseboards</Link>
                  <Link href="#">Underlayment</Link>
                  <Link href="#">Steps</Link>
                  <Link href="#">Moldings</Link>
                  <Link href="#">Whisper Matt</Link>
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
                src="./footer-logo.svg"
                height={50}
                width={50}
              ></Image>
            </Link>
          </div>

          <div className="menu-bar" onClick={() => setMobileNav(!mobileNav)}>
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
              initial={{ height: 0 }}
              animate={{ height: "100vh" }}
              exit={{ height: 0 }}
            >
              <div className="mobile-nav-links">
                <div
                  className="composed-link flex"
                  onClick={() =>
                    setOpenMobileProductsSection(!openMobileProductsScetion)
                  }
                >
                  <Link href="/#">Products</Link>
                  <Image
                    src="/menu-arrow.svg"
                    height={14}
                    width={14}
                    alt=""
                  ></Image>
                </div>
                <AnimatePresence initial={false}>
                  {openMobileProductsScetion && (
                    <motion.div
                      className="mobile-section-links"
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                    >
                      <h3>Collections</h3>
                      <Link href="#">Deco54</Link>
                      <Link onClick={()=> setOpenProducts(false)} href="/collection/6696ccc2103daba3b410e1a2">
                        Quick48+
                      </Link>
                      <Link onClick={()=> setOpenProducts(false)} href="/collection/6696cdb2103daba3b410e1a6">
                        Project
                      </Link>
                      <Link onClick={()=> setOpenProducts(false)} href="/collection/6696cabd103daba3b410e19f">
                        Spirit XL
                      </Link>
                      <Link onClick={()=> setOpenProducts(false)} href="/collection/6696ccd5103daba3b410e1a4">Project 2.0</Link>
                      <Link href="#">Supreme</Link>
                      <Link href="#">Evolve</Link>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Link
                  onClick={() => setMobileNav(!mobileNav)}
                  href="/dealer-locator"
                >
                  Dealer Locator
                </Link>
                <Link
                  onClick={() => setMobileNav(!mobileNav)}
                  href="/order-samples"
                >
                  Order Sample
                </Link>
                <Link onClick={() => setMobileNav(!mobileNav)} href="/about-us">
                  About Us
                </Link>
                <Link
                  onClick={() => setMobileNav(!mobileNav)}
                  href="/contact-us"
                >
                  Contact Us
                </Link>

                <div
                  className="composed-link flex"
                  onClick={() =>
                    setOpenMobileInspiredSection(!openMobileInspiredSection)
                  }
                >
                  <Link href="/get-inspired">Get Inspired</Link>
                  <Image
                    src="/menu-arrow.svg"
                    height={14}
                    width={14}
                    alt=""
                  ></Image>
                </div>
                <AnimatePresence initial={false}>
                  {openMobileInspiredSection && (
                    <motion.div
                      className="mobile-section-links"
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                    >
                      <h3>Visit Our Blog</h3>
                      <Link href="/blogs">Blogs</Link>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Link
                  onClick={() => setMobileNav(!mobileNav)}
                  href="/become-a-dealer"
                >
                  Become a dealer
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    </>
  );
}

export default Header;
