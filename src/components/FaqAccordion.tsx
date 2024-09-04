'use client'


import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export default function FaqAccordion() {
    return (
      <Accordion type="single" collapsible className="w-full px-10">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-bold py-20">
            <h3>What types of flooring do you offer?</h3>
          </AccordionTrigger>
          <AccordionContent className="py-20">
            <p>We provide a wide range of rigid core vinyl and laminate flooring. Our selection caters to both residential and commercial needs, and includes all the necessary accesories.</p>
          </AccordionContent>
        </AccordionItem>


        <AccordionItem value="item-2">
          <AccordionTrigger className="font-bold py-20">
            <h3>Do you sell to individual homeowners?</h3>
          </AccordionTrigger>
          <AccordionContent className="py-20">
          <p>While our primary clientele consists of retailers, builders, and contractors, we also serve individual homeowners. Feel free to explore our products and submit a quote.</p>
          </AccordionContent>
        </AccordionItem>


        <AccordionItem value="item-3">
          <AccordionTrigger className="font-bold py-20">
            <h3>Do you offer installation services?</h3>
          </AccordionTrigger>
          <AccordionContent className="py-20">
          <p>
          While we don&apos;t provide installation ourselves, we can recommend trusted professionals in your area in the Dealer Locator section. Feel free to ask for referrals!
          </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="font-bold py-20">
            <h3>Is there a warranty on your products?</h3>
          </AccordionTrigger>
          <AccordionContent className="py-20">
          <p>Yes! Our warranties covers Coreproof, Quicksurfaces, and Finfloor brands. You can find detailed warranty information for each product on the Technical Specifications section.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="font-bold py-20">
            <h3>How can I place an order?</h3>
          </AccordionTrigger>
          <AccordionContent className="py-20">
          <p>You can reach out to our team directly on the Become A Dealer section. We’ll guide you through the ordering process and assist with any questions.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger className="font-bold py-20">
            <h3>Can I request samples before making a decision?</h3>
          </AccordionTrigger>
          <AccordionContent className="py-20">
          <p>
          Absolutely! Contact us, and we’ll arrange your free samples of our flooring products. It’s essential to see and feel the materials firsthand.
          </p>
          </AccordionContent>
        </AccordionItem>


      </Accordion>
    )
  }
  