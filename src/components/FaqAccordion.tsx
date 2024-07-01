'use client'


import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export default function FaqAccordion() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-bold py-10">What types of flooring do you offer?
          </AccordionTrigger>
          <AccordionContent className="py-20">
          We provide a wide range of rigid core vinyl and laminate flooring. Our selection caters to both residential and commercial needs, and includes all the necessary accesories.
          </AccordionContent>
        </AccordionItem>


        <AccordionItem value="item-2">
          <AccordionTrigger className="font-bold py-10">Do you sell to individual homeowners? </AccordionTrigger>
          <AccordionContent className="py-20">
          <p>While our primary clientele consists of retailers, builders, and contractors, we also serve individual homeowners. Feel free to explore our products and submit a quote.</p>
          </AccordionContent>
        </AccordionItem>


        <AccordionItem value="item-3">
          <AccordionTrigger className="font-bold py-10">Do you offer installation services?</AccordionTrigger>
          <AccordionContent className="py-20">
          While we don’t provide installation ourselves, we can recommend trusted professionals in your area in the Dealer Locator section. Feel free to ask for referrals!
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="font-bold py-10">Is there a warranty on your products?</AccordionTrigger>
          <AccordionContent className="py-20">
          Yes! Our warranties covers Coreproof, Quicksurfaces, and Finfloor brands. You can find detailed warranty information for each product on the Technical Specifications section.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="font-bold py-10">How can I place an order?</AccordionTrigger>
          <AccordionContent className="py-20">
          You can reach out to our team directly on the Become A Dealer section. We’ll guide you through the ordering process and assist with any questions.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger className="font-bold py-10">Can I request samples before making a decision?</AccordionTrigger>
          <AccordionContent className="py-20">
          Absolutely! Contact us, and we’ll arrange your free samples of our flooring products. It’s essential to see and feel the materials firsthand.
          </AccordionContent>
        </AccordionItem>


      </Accordion>
    )
  }
  