import { Collections } from "@/interfaces/collections.model";
import Image from "next/image";

const DescriptionBanner = ({ collection }: { collection: Collections }) => {
  return (
    <div className="description-banner">
      <div className="description">
        <div className="description-banner-img">
          <Image
            src="/description.svg"
            height={600}
            width={600}
            alt="coreproof"
          ></Image>
        </div>
        <div className="description-banner-text">
          <h2 className="my-5">{collection.name}</h2>
          <h3>The Major Collection Flooring</h3>
          <p>{collection.description}</p>
          <div className="icons flex flex-wrap my-10">
            <Image
              src="/icon1.svg"
              height={100}
              width={100}
              alt="coreproof"
            ></Image>
            <Image
              src="/icon2.svg"
              height={100}
              width={100}
              alt="coreproof"
            ></Image>
            <Image
              src="/icon3.svg"
              height={100}
              width={100}
              alt="coreproof"
            ></Image>
            <Image
              src="/icon4.svg"
              height={100}
              width={100}
              alt="coreproof"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionBanner;
