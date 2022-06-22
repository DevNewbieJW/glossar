import React from "react";

import { Link, useLoaderData } from "@remix-run/react";

import { fetchCategory } from "~/models/category.server.js";
import { fetchPostsByCategory } from "~/models/post.server.js";

export const loader = async ({ params }) => {
  const { cId } = params;
  const category = await fetchCategory(cId);
  return await fetchPostsByCategory(category.id);
};

const CategoryId = () => {
  const posts = useLoaderData();
  return (
    <div className="w-full h-full flex flex-col space-y-4">
      {Object.entries(posts).map(([key, { id, title, content }]) => (
        <Link
          key={key}
          to={`/blog/${id}`}
          className="w-full h-full flex flex-col space-y-2 text-white pb-4 border-b"
        >
          <div className="text-3xl font-bold">{title}</div>
          <div className="text-base text-gray-300">
            {content.split(0, 99)[0]}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryId;
