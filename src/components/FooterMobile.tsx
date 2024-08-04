"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import "@/app/sass/FooterMobile.scss";

export default function FooterMobile() {
  return (
    <>
      <div className="footer-mobile p-10 py-20">
        <div className="footer-social flex justify-between items-center">
          <Link href="/">
            <Image
              src="/footer-logo.svg"
              height={80}
              width={80}
              alt="CPF Floors logo"
            ></Image>
          </Link>
          <div className="footer-icons flex">
            <Link href="#">
              <Image
                className="mx-4"
                src="/instagram.svg"
                height={25}
                width={25}
                alt="CPF Floors logo"
              ></Image>
            </Link>
            <Link href="#">
              <Image
                className="mx-4"
                src="/pinterest.svg"
                height={25}
                width={25}
                alt="CPF Floors logo"
              ></Image>
            </Link>
            <Link href="#">
              <Image
                className="mx-4"
                src="/linkedin.svg"
                height={25}
                width={25}
                alt="CPF Floors logo"
              ></Image>
            </Link>
          </div>
        </div>
        <h2>Let&apos;s click together</h2>

        {/*ACCORDION */}

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-bold py-10">
              <h3>Our Products</h3>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col py-10">
              <Link href="/collections/vinyl">Vinyl</Link>
              <Link href="/collections/laminate">Laminate</Link>
              <Link href="/corepad">Underlayment</Link>
              <Link href="/core-moldings">Moldings</Link>
              <Link href="/coresteps">Steps</Link>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="font-bold py-10">
              <h3>Resources</h3>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col">
              <Link href="/display-resources">Display Resources</Link>
              <Link href="/financing">Financing</Link>
              <Link href="/faq">F.A.Q.</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="font-bold py-10">
              <h3>Get Inspired</h3>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col">
              <Link href="/blogs">Blog</Link>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="font-bold py-10">
              <h3>Our Company</h3>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col">
              <Link href="/become-a-dealer">Become a Dealer</Link>
              <Link href="/dealer-locator">Dealer Locator</Link>
              <Link href="/about-us">About Us</Link>
              <Link href="/contact-us">Contact Us</Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="logos flex flex-wrap  flex-col items-center">
            <Image className="my-5" src="/footer1.svg" height={70} width={70} alt="CPF Floors parters"></Image>
            <Image className="my-5" src="/footer2.svg" height={70} width={70} alt="CPF Floors parters"></Image>
            <Image className="my-5" src="/wfca.svg" height={180} width={180} alt="CPF Floors parters"></Image>
            <Image className="bluetape my-5" src="/financing/bluetape.svg" height={70} width={70} alt="CPF Floors parters"></Image>
        </div>
        <p className="font-semibold">© 2024 CPF Floors. All rights reserved.</p>
      </div>
    </>
  );
}
