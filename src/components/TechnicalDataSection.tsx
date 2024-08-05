import resource from "@/../resources/resources2.json";
import Image from "next/image";
import Link from "next/link";

import "@/app/sass/TechnicalDataSection.scss";

const technicalDataSection = ({
  resources,
}: {
  resources: typeof resource;
}) => {
  return (
    <div>
      {resources.map((resource, index) => (
        <div key={index} className="tech-banner">
          <div className="tech">
            <div className="tech-data">
              <Image
                src={resource.cover}
                height={400}
                width={400}
                alt={resource.name}
              />
              <h2 className="mb-20">{resource.name}</h2>
              <Link href={resource.url} target="_blank" className="link-dark my-20">
                DownLoad
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default technicalDataSection;
