"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import "@/app/sass/PrivacyPolicy.scss";

function PrivacyPolicy() {
  return (
    <>
      <div className="main-banner-policy">
        <div className="main-banner-text-policy">
          <h2>Privacy Policy & Terms Conditions</h2>
          <p>
            At our company, we prioritize transparency and customer
            satisfaction. Our Terms of Service clearly outline your rights and
            our responsibilities, ensuring a smooth and secure shopping
            experience. Take a moment to review them today for peace of mind on
            your next flooring project.
          </p>
          <Link href="#" className="link-light">
            Click Here
          </Link>
        </div>
        <div className="main-banner-img-policy">
          <Image
            src="/privacy-policy/main-banner-img.svg"
            height={600}
            width={600}
            alt="CPF Floors Privacy & Policy"
          ></Image>
        </div>
      </div>
      <motion.div
        className="terms-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h2>Our Privacy Policy</h2>
        <h4>General Terms of Service</h4>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          1- Introduction: CPF Floors LLC (the &quot;Company&quot; or
          &quote;We&quote;), maintains its website www.cpffloors.com (the
          “Site”) for your personal entertainment, information, education, and
          shopping convenience of our flooring products and services (the
          “Service”). By using our website, you agree to these Terms of Service
          and Legal Notices set forth below and any other disclaimers and terms
          and conditions stated on the site (“Terms of Service”, or “Terms”).
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          2- Use of Website and Services: You must be at least 18 years old to
          consent to use the Services.You must provide accurate and complete
          information to register for an account to use our Services. You may
          not share your account credentials or make your account available to
          anyone else and are responsible for all activities that occur under
          your account. If you create an account or use the Services on behalf
          of another person or entity, you must have the authority to accept
          these Terms on their behalf.Whether you&apos;re a visitor or a
          customer, especially a user of one of our authorized dealer networks
          (each a “Dealer”), you may download material from our website and
          electronic applications for non-commercial, and Dealer-use only,
          provided you retain all copyright, trademark, and other proprietary
          notices contained in the material. You must not modify, alter,
          distribute, or use the material for public or commercial purposes
          without written permission from an authorized representative of the
          Company. It is strictly prohibited to alter the images of our
          products.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          3- Intellectual Property Rights: Our Site contains registered and
          unregistered trademarks, copyrights, and service marks including but
          not limited to our logo, our tag lines, and those of our vendors and
          others (collectively, “Our Marks”). Any use of Our Marks is strictly
          prohibited, except as explicitly permitted in this Site. The Company
          is the rightful owner of the &quot;Core Proof Floors&quot; trademark
          and a licensee of Finfloor products. “Roomvo” is a registered
          trademark of Leap Tools Inc and they does not endorse these Terms, and
          their terms of services are available in this link. The content on our
          website, including but not limited to text, images, and videos, is
          protected by copyright and other intellectual property laws. You may
          not use this content without express permission from CPF Floors LLC.
        </motion.p>
        <div className="w-100 m-auto text-center my-20"> 
          <Link
            className="link-dark"
            target="_blank"
            href="https://cpf-floors.notion.site/CPF-Floors-I-Terms-of-Services-104260444c5d477bb02cb6942be2717a#ebbce326d19e44faa65b503453a8681c"
          >
            Read More
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="banner-one-container"
        initial={{ opacity: 0, y: 400 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="banner-one">
          <h2>Special Clauses for our Dealers</h2>
          <p>
            As a Dealer utilizing our services, you acknowledge and agree to the
            Company&apos;s Terms for the Sale of Flooring Products, and to
            indemnify and hold CPF Floors LLC, including reasonable legal fees
            and other litigation expenses, arising directly or indirectly.
          </p>
          <Link href="#" className="link-light">
            Read More
          </Link>
        </div>
      </motion.div>
    </>
  );
}

export default PrivacyPolicy;
