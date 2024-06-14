"use client";

import Image from "next/image";
import Link from "next/link";

import "../app/globals.css";
import "../app/sass/Header.scss";

function Header() {
  return (
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
          <ul>
            <li>
              <Link href="/products">Products</Link>
              <Link href="/dealer-locator">Dealer Locator</Link>
              <Link href="/order-samples">Order Sample</Link>
              <Link href="/about-us">About Us</Link>
              <Link href="/get-inspired">Get Inspired</Link>
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <Link href="/become-a-dealer" className="button-dark">Become a Dealer</Link>
      </header>
    </>
  );
}

export default Header;
