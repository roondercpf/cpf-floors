import type { Metadata } from "next";
import { FRONTEND } from "../../utils/env";
import { CollectionResponse } from "@/interfaces/collections.model";
import Image from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Collections",
  description: "CPF Floors - Collections",
};

async function Collections() {
  const res = await fetch(`${FRONTEND}/api/collections/`, {
    next: {
      revalidate: 5,
    },
  });
  const { collections }: CollectionResponse = await res.json();
  console.log(collections);
  return (
    <>

      <div className="blog-card-container">
        {collections.length > 0 ? (
          <>
            {collections.map((blog) => {
              return (
                <div key={blog._id}>
                    {collections.name}
                </div>
              );
            })}
          </>
        ) : (
          <>
            <h2>Not Found</h2>
          </>
        )}
      </div>
    </>
  );
}

export default Blogs;
