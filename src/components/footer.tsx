"use client";

import Image from "next/image";
import Link from "next/link";

import "../app/sass/Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-container-social">
          <Image
            src="./footer-logo.svg"
            alt="CPF footer Logo"
            width={100}
            height={100}
          ></Image>
          <div className="social-icons">
            <Image src="./instagram.svg" height={20} width={20} alt="CPF Floors Instagram"></Image>
            <Image src="./linkedin.svg" height={20} width={20} alt="CPF Floors LinkedIn"></Image>
            <Image src="./pinterest.svg" height={20} width={20} alt="CPF Floors Pinterest"></Image>
          </div>
        </div>
        <div className="footer-container-links">
          <div className="links-container">
            <h3>Our Products</h3>
            <li>
              <Link href="#">Rigid Core and Vinyl</Link>
              <Link href="#">Waterproof Laminate</Link>
              <Link href="#">Core Steps</Link>
              <Link href="#">Core Moldings</Link>
              <Link href="#">Underlayment</Link>
              <Link href="#">Order Sample</Link>
            </li>
          </div>
          <div className="links-container">
            <h3>Resources</h3>
            <li>
              <Link href="#">Data Center</Link>
              <Link href="#">Display Resources</Link>
              <Link href="#">Installation Guidelines</Link>
              <Link href="#">F.A.Q.</Link>
            </li>
          </div>
          <div className="links-container">
            <h3>Get Inspired</h3>
            <li>
              <Link href="#">Visualize Your Room</Link>
              <Link href="#">Dealer Locator</Link>
              <Link href="#">Blogs</Link>
              <Link href="#">Product Catalogs</Link>
            </li>
          </div>
          <div className="links-container">
            <h3>Company</h3>
            <li>
              <Link href="#">About Us</Link>
              <Link href="#">Become a Dealer</Link>
              <Link href="#">Financing</Link>
              <Link href="#">Shipping & Delivery</Link>
              <Link href="#">Privacy Policies</Link>
              <Link href="#">Contact Us</Link>
            </li>
          </div>
        </div>
      </div>
      <div className="copyright-footer">
        <p>© 2024 CPF Floors. All rights reserved.</p>
        <Image src="./wfca.svg" width={220} height={220} alt="World Floor Covering Association"></Image>
      </div>
    </footer>
  );
}

export default Footer;