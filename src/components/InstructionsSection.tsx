import resources from "@/../resources/resources2.json";
import Image from "next/image";
import Link from "next/link";

const InstructionsSection = () => {
  const resource = resources.find(
    (resource) => resource.name === "Installation Manual"
  ) as (typeof resources)[0];

  return (
    <div>
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
    </div>
  );
};

export default InstructionsSection;
