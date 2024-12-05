"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import "../app/sass/Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-container-social">
          <Image
            src="/footer-logo.svg"
            alt="CPF footer Logo"
            width={100}
            height={100}
            unoptimized
          />
          <div className="social-icons">
            <Link target="_blank" href="https://www.instagram.com/cpf_floors/">
              <Image
                src="/instagram.svg"
                height={20}
                width={20}
                alt="CPF Floors Instagram"
                unoptimized
              />
            </Link>

            <Link target="_blank" href="https://www.linkedin.com/company/cpf-floors-llc">
              <Image
                src="/linkedin.svg"
                height={20}
                width={20}
                alt="CPF Floors LinkedIn"
                unoptimized
              />
            </Link>

            <Link target="_blank" href="https://www.pinterest.com/cpf_floors/">
              <Image
                src="/pinterest.svg"
                height={20}
                width={20}
                alt="CPF Floors Pinterest"
                unoptimized
              />
            </Link>
          </div>
        </div>
        <div className="footer-container-links">
          <div className="links-container">
            <h3>Our Products</h3>
            <li>
              <Link href="/collections/vinyl">Rigid Core and Vinyl</Link>
              <Link href="/collections/laminate">Waterproof Laminate</Link>
              <Link href="/coresteps">Core Steps</Link>
              <Link href="/core-moldings">Core Moldings</Link>
              <Link href="/corepad">Underlayment</Link>
            </li>
          </div>
          <div className="links-container">
            <h3>Resources</h3>
            <li>
              <Link href="/order-samples">Order Samples</Link>
              <Link href="/document-center">Document Center</Link>
              <Link href="/display-resources">Display Resources</Link>
              <Link href="/faq">F.A.Q.</Link>
            </li>
          </div>
          <div className="links-container">
            <h3>Get Inspired</h3>
            <li>
              <Link href="/dealer-locator">Dealer Locator</Link>
              <Link href="/blogs">Blog</Link>
            </li>
          </div>
          <div className="links-container">
            <h3>Company</h3>
            <li>
              <Link href="/about-us">About Us</Link>
              <Link href="/become-a-dealer">Become a Dealer</Link>
              <Link href="/financing">Financing</Link>
              <Link href="/privacy-policy">Privacy Policies</Link>
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </div>
        </div>
      </div>
      <div className="copyright-footer">
        <motion.div className="flex footer-img"
        initial={{opacity: 0}}
        whileInView={{opacity:1}}
        transition={{duration: 2}}>
          <Image
            className="mx-10"
            src="/financing/bluetape.svg"
            width={220}
            height={220}
            alt="World Floor Covering Association"
            unoptimized
          />
          <Image
            className="mx-10"
            src="/footer2.svg"
            width={60}
            height={60}
            alt="World Floor Covering Association"
            unoptimized
          />
          <Image
            className="mx-10"
            src="/footer1.svg"
            width={80}
            height={80}
            alt="World Floor Covering Association"
            unoptimized
          />
          <Image
            className="mx-10"
            src="/wfca.svg"
            width={220}
            height={220}
            alt="World Floor Covering Association"
            unoptimized
          />
        </motion.div>
        <p>© 2024 CPF Floors. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
