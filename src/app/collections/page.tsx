"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import "@/app/sass/CollectionsCategories.scss";

function CollectionsCategories() {
  return (
    <>
      <div className="categories-title">
        <h2>Select Your Product</h2>
        <p>The founders at CPF Floors are dedicated in providing the hihgest levels of quality service and innovation for it&apos;s flooring products. CPF Floors was founded a few years ago, but it&apos;s founders have more than 20 years of experience.</p>
      </div>
      <div className="categories-container">
        <div className="category-card flex flex-col justify-between">
          <div className="img-title">
            <motion.img
              src="/collections-categories/vinyl.png"
              height={200}
              width={200}
              alt="CPF Floors Categories"
            ></motion.img>
            <h2>Rigid Core Vinyl</h2>
          </div>
          <div className="description">
            <p>
              Durable and water-resistant flooring that&apos;s perfect for
              high-traffic areas. Enjoy the wood look with natural tones.
            </p>
          </div>
          <Link className="link-dark" href="/collections/vinyl">
            View Collections
          </Link>
        </div>

        <div className="category-card flex flex-col justify-between">
          <div className="img-title">
            <motion.img
              src="/collections-categories/laminate.png"
              height={200}
              width={200}
              alt="CPF Floors Categories"
            ></motion.img>
            <h2>Laminate</h2>
          </div>
          <div className="description">
            <p>
              Stylish and waterproof flooring that can withstand spills and
              moisture. Ideal for kitchens, bathrooms, and basements.
            </p>
          </div>
          <Link className="link-dark" href="/collections/laminate">
            View Collections
          </Link>
        </div>

        <div className="category-card flex flex-col justify-between">
          <div className="img-title">
            <motion.img
              src="/collections-categories/baseboards.png"
              height={200}
              width={200}
              alt="CPF Floors Categories"
            ></motion.img>
            <h2>Baseboards</h2>
          </div>
          <div className="description">
            <p>
              Protect your walls with our durable baseboards. Available in a
              variety of heights and profiles
            </p>
          </div>
          <Link className="link-dark" href="/core-moldings">
            View Collections
          </Link>
        </div>

        <div className="category-card flex flex-col justify-between">
          <div className="img-title">
            <motion.img
              src="/collections-categories/steps.png"
              height={200}
              width={200}
              alt="CPF Floors Categories"
            ></motion.img>
            <h2>Steps</h2>
          </div>
          <div className="description">
            <p>
              Create a safe and stylish staircase with our custom-made steps.
              Choose from a variety of materials and colors.
            </p>
          </div>
          <Link className="link-dark" href="/coresteps">
            View Collections
          </Link>
        </div>

        <div className="category-card flex flex-col justify-between">
          <div className="img-title">
            <motion.img
              src="/collections-categories/underlayment.png"
              height={200}
              width={200}
              alt="CPF Floors Categories"
            ></motion.img>
            <h2>Underlayment</h2>
          </div>
          <div className="description">
            <p>
              Improve the comfort and performance of your flooring with our
              premium underlayment products. Designed to reduce noise and
              provide additional insulation.
            </p>
          </div>
          <Link className="link-dark" href="/corepad">
            View Collections
          </Link>
        </div>
      </div>

      <section>
        <div className="become-banner-container">
          <div className="become-banner flex flex-col justify-center items-center">
            <h2>Become a Dealer</h2>
            <p>&Transform Spaces with Style</p>
            <Link className="link-light" href="/become-a-dealer">
              Contact Now!
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default CollectionsCategories;
