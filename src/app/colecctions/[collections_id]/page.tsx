import { FRONTEND } from "@/utils/env";
import { Collection } from "@/interfaces/collections.model";
import { notFound } from "next/navigation";

async function CollectionsID({
  params: { collection_id },
}: {
  params: { collection_id: string };
}) {
  const res = await fetch(`${FRONTEND}/api/collections/${collection_id}`);
  const data: Collection = await res.json();

  if ("error" in data) {
    notFound();
  }

  return <div>Collectiones here!</div>;
}

export default CollectionsID;
