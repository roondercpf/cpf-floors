"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import "../app/globals.css";
import "../app/sass/Header.scss";

function Header() {
  const [openProducts, setOpenProducts] = useState(false);
  const [openInspire, setOpenInspire] = useState(false);

  return (
    <>
      <>
        <div className="header-promo">
          <p>Promo here!</p>
        </div>

        <header className="desktop-header">
          <div>
            <Link href="/">
              <Image
                className="header-desktop-logo"
                alt="CPF Floors logo"
                src="./header_desktop_logo.svg"
                height={70}
                width={70}
              ></Image>
            </Link>
          </div>
          <nav className="desktop-nav">
            <div className="composed-link flex">
              <Link href="/products">Products</Link>
              <Image
                onClick={() => setOpenProducts(!openProducts)}
                src="/menu-arrow.svg"
                height={14}
                width={14}
                alt=""
              ></Image>
            </div>

            <Link href="/dealer-locator">Dealer Locator</Link>
            <Link href="/order-samples">Order Sample</Link>
            <Link href="/about-us">About Us</Link>

            <div className="composed-link flex">
              <Link href="/get-inspired">Get Inspired</Link>
              <Image
                onClick={() => setOpenInspire(!openInspire)}
                src="/menu-arrow.svg"
                height={14}
                width={14}
                alt=""
              ></Image>
            </div>

            <Link href="/contact-us">Contact Us</Link>
          </nav>
          <Link href="/become-a-dealer" className="button-dark">
            Become a Dealer
          </Link>
        </header>

        {/*OPEN PRODUCTS SECTION*/}

        <AnimatePresence initial={false}>
          {openProducts && (
            <motion.div
              className="products-menu"
              initial={{ height: 0 }}
              animate={{ height: 400 }}
              exit={{ height: 0 }}
            ></motion.div>
          )}
        </AnimatePresence>

        {/*OPEN GET INSPIRED SECTION*/}

        <AnimatePresence initial={false}>
          {openInspire && (
            <motion.div
              className="inspired-menu"
              initial={{ height: 0 }}
              animate={{ height: 400 }}
              exit={{ height: 0 }}
            ></motion.div>
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
                src="./header_desktop_logo.svg"
                height={70}
                width={70}
              ></Image>
            </Link>
          </div>

          <div className="menu-bar">
            <Image src="/menu-bar.svg" height={40} width={40} alt="menu bar"></Image>
          </div>
          </div>
      
      
      </>
    </>
  );
}

export default Header;
