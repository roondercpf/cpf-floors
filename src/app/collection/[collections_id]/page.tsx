import { FRONTEND } from "@/utils/env";
import { Collections } from "@/interfaces/collections.model";
import { notFound } from "next/navigation";

async function CollectionsID({
  params: { collection_id },
}: {
  params: { collection_id: string };
}) {
  const res = await fetch(`${FRONTEND}/api/collections/${collection_id}`);
  const data: Collections = await res.json();

  console.log(data)

  if ("error" in data) {
    notFound();
  }

  return <div>{}</div>;
}

export default CollectionsID;
