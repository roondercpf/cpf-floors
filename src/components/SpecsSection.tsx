import { Collections } from "@/interfaces/collections.model";

const SpecsSection = ({ collection }: { collection: Collections }) => {
  return (
    <div>
      <div>
        <h3>Size</h3>
        <p>{collection.colors[0].plank_sizes}</p>
        <h3>Sqft per box</h3>
        <p>{collection.colors[0].sqftPerBox}</p>
        <h3>Sqft per pallet</h3>
        <p>{collection.colors[0].sqftPerPallet}</p>
      </div>
      <div>
        <h3>total thickness</h3>
        <p>{collection.overallThickness}</p>
        <h3>installation type</h3>
        <p>{collection.colors[0].installation_method}</p>
        <h3>Looking</h3>
        <p>...</p>
      </div>
      <div>
        <h3>Wear Layer</h3>
        <p>{collection.wearLayer}</p>
        <h3>class</h3>
        <p>{collection.trafficClass}</p>
        <h3>warranty</h3>
        <p>{collection.colors[0].warranty}</p>
      </div>
    </div>
  );
};

export default SpecsSection;
