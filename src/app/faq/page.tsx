import React from "react";
import Image from "next/image";
import Link from "next/link";

import FaqAccordion from "@/components/FaqAccordion";

import "@/app/sass/Faq.scss";

function Faq() {
  return (
    <>
      <>
        <div className="faq-main-banner">
          <div className="faq-banner-text">
            <h2>Frecuently Asked Questions</h2>
            <p>
              Explore our FAQs to learn about our flooring options, warranty
              coverage, ordering process, and more. We&apos;re here to assist you!
            </p>
            <Link className="link-dark" href="/collections">
              Explore Products
            </Link>
          </div>
        
        </div>
      </>

      <>
        <div className="accordion-container">
          <FaqAccordion />
        </div>
      </>


      <>
        <div className="faq-contact-banner">
            <div className="faq-contact-section">
                <div className="faq-text">
                    <h2>Can&apos;t find your answer? </h2>
                    <p>We are here to help you</p>
                    <Link className="link-light" href="/contact-us">Contact Us</Link>
                </div>
            </div>
        </div>
      
      </>
    </>
  );
}

export default Faq;
