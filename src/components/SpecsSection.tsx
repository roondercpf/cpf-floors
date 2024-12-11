import { Collections } from "@/interfaces/collections.model";
import "@/app/sass/CollectionProfile.scss";

const SpecsSection = ({ collection }: { collection: Collections }) => {
  return (
    <div className="description-banner">
      <div className="description" >
        <div className="description-specs">
          <h3 className="font-bold">Size</h3>
          <p>{collection.colors[0].plankSize}</p>
          <h3 className="font-bold">Sqft per box</h3>
          <p>{collection.colors[0].sqftPerBox}</p>
          <h3 className="font-bold">Sqft per pallet</h3>
          <p>{collection.colors[0].sqftPerPallet}</p>
        </div>
        <div className="description-specs">
          <h3 className="font-bold">Total Thickness</h3>
          <p>{collection.overallThickness}</p>
          <h3 className="font-bold">Installation type</h3>
          <p>{collection.colors[0].installationMethod}</p>
          <h3 className="font-bold">Looking</h3>
          <p>...</p>
        </div>
        <div className="description-specs">
          <h3 className="font-bold">Wear Layer</h3>
          <p>{collection.wearLayer}</p>
          <h3 className="font-bold">class</h3>
          <p>{collection.trafficClass}</p>
          <h3 className="font-bold">Warranty</h3>
          <p>{collection.colors[0].warranty}</p>
        </div>
      </div>
    </div>
  );
};

export default SpecsSection;
