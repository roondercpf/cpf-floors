import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import "@/app/sass/DisplayResources.scss";

function DisplayResources() {
  return (
    <>
      <div className="main-banner">
        <div className="main-text">
          <h2>Display Resources</h2>
          <p>
            We made it easier and more convenient for you with our regular
            samples boards, sample racks, mini samples with racks and more!
          </p>
          <Link className="link-light" href="#">
            Browse All
          </Link>
        </div>
        <div className="main-img">
          <Image
            src="/display-resources/main-banner.svg"
            height={600}
            width={600}
            alt="CPF Floors Display resources"
          ></Image>
        </div>
      </div>

      <>
        <div className="main-container">
          <div className="sample-racks">
            <div className="sample-racks-img">
              <Image
                src="/display-resources/rack-1.svg"
                height={600}
                width={600}
                alt="CPF Floors Display resources"
              ></Image>
            </div>
            <div className="sample-racks-text">
              <h2>Sample Racks</h2>
              <p>
                Maximize floor space with our convenient sample racks, allowing
                for easy browsing and comparison of different materials and
                finishes.
              </p>
              <Link className="link-dark" href="#">
                Download PDF
              </Link>
            </div>
          </div>
        </div>
      </>

      <>
        <div className="main-container">
          <div className="sample-board">
            <div className="sample-board-text">
              <h2>Sample Boards</h2>
              <p>
                Showcase a curated selection of our most popular flooring
                options in a visually impactful format.
              </p>
              <Link className="link-light" href="#">
                Download PDF
              </Link>
            </div>
            <div className="sample-board-img">
              <Image
                src="/display-resources/sample-board.svg"
                height={600}
                width={600}
                alt="CPF Floors Display resources"
              ></Image>
            </div>
          </div>
        </div>
      </>

      <>
        <div className="main-container">
          <div className="sample-racks">
            <div className="sample-racks-img">
              <Image
                src="/display-resources/brochures.svg"
                height={600}
                width={600}
                alt="CPF Floors Display resources"
              ></Image>
            </div>
            <div className="sample-racks-text">
              <h2>Brochures</h2>
              <p>
                Equip your sales team with detailed brochures packed with
                product information, specifications, and benefits to answer
                customer questions confidently.
              </p>
              <Link className="link-dark" href="#">
                Download PDF
              </Link>
            </div>
          </div>
        </div>
      </>

      <>
        <div className="main-container">
          <div className="sample-board">
            <div className="sample-board-text">
              <h2>Mini Sample Racks</h2>
              <p>
                Ideal for on-the-go presentations, our mini sample sets provide
                a portable way to showcase CPF Floors diverse product range
                directly to clients.
              </p>
              <Link className="link-light" href="#">
                Download PDF
              </Link>
            </div>
            <div className="sample-board-img">
              <Image
                src="/display-resources/mini-sample.svg"
                height={600}
                width={600}
                alt="CPF Floors Display resources"
              ></Image>
            </div>
          </div>
        </div>
      </>

      <>
        <div className="main-container-dog">
          <div className="discover">
            <div className="discover-text">
              <h2>Discover Programs</h2>
              <h3>To Grow Your Business</h3>
              <p>
                Discover high-quality flooring options in different styles, from
                rustic, modern, and classic to elegant.Transform your space and
                find inspiration with our beautiful collections.
              </p>
              <Link className="link-light" href="#">
                See More
              </Link>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default DisplayResources;
