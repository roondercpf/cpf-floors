import { Map } from "@/components/Map";
import { FRONTEND } from "@/utils/env";
import { Dealerlocator } from "@/interfaces/dealer-locator.model";

async function DealerLocator() {
  const res = await fetch(`${FRONTEND}/api/dealer-locator`, {
    cache: "no-store",
  });
  const data: Dealerlocator[] = await res.json();

  return (
    <>
      <h1>Dealer Locator</h1>
      <Map data={data} />
    </>
  );
}

export default DealerLocator;
