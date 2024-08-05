import resource from "@/../resources/resources2.json";
import Image from "next/image";
import Link from "next/link";

const technicalDataSection = ({
  resources,
}: {
  resources: typeof resource;
}) => {
  return (
    <div>
      {resources.map((resource, index) => (
        <div>
          <Image
            src={resource.cover}
            height={600}
            width={600}
            alt={resource.name}
          />
          <div>
            <h2>{resource.name}</h2>
            <Link href={resource.url} target="_blank" className="link-dark">
              DownLoad
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default technicalDataSection;
