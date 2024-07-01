"use client";

import Link from "next/link";
import Image from "next/image";

import ContactUsForm from "@/components/ContactUsForm";

import "@/app/sass/ContactUs.scss";

function ContactUs() {
  return (
    <>
      <>
        <div className="contact-main-banner">
          <div className="contact-form-section">
            <div className="contact-form">
              <ContactUsForm />
            </div>
            <div className="contact-img">
              <h2>Let&apos;s Get In Touch</h2>
              <p>
                Take advantage of opportunities to grow your dealer business and
                increase sales! 
              </p>
              <div>
                <Link href="mailto:sales@cpffloors">sales@cpffloors.com</Link>
                <Link href="tel:13056022330">+1-305-6022330 -</Link>
              </div>
              <Image
                src="/become-a-dealer/contact-img.png"
                height={300}
                width={300}
                alt="CPF Floors - Contact us"
              ></Image>
            </div>
          </div>
        </div>
      </>

      <>
        <div className="contact-banner-section">
          <div className="contact-banner">
            <div className="contact-banner-text">
              <h2 className="font-bold">Collection Floors</h2>
              <h2>To Grow Your Business</h2>
              <p>
                Discover high-quality flooring options in different styles, from
                rustic, modern, and classic to elegant. Transform your space
                and find inspiration with our beautiful collections.
              </p>
              <Link href="#" className="link-light">
                See More
              </Link>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default ContactUs;
