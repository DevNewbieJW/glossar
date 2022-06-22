import React from "react";

import { useLoaderData } from "@remix-run/react";
import { Link } from "@remix-run/react";

import { fetchPosts } from "~/models/post.server.js";

export const loader = async () => {
  return await fetchPosts();
};

const BlogIndex = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const posts = useLoaderData();

  return (
    <div className="w-full h-full flex flex-col space-y-8">
      <div className="w-2/3 h-full flex flex-row items-center justify-center space-x-2 mx-auto">
        <input
          className="p-1 rounded text-white bg-slate-600"
          placeholder="Search..."
          value={searchValue}
          onChange={({ target }) => setSearchValue(target.value)}
        />
        <Link to="new" className="bg-slate-700 p-1 rounded px-2">
          + New Entry
        </Link>
      </div>
      <div className="w-4/5 h-full flex flex-col space-y-4 mx-auto">
        {Object.entries(posts)
          .filter(([_, { title }]) =>
            title.toLowerCase().startsWith(searchValue.toLowerCase())
          )
          .map(
            ([
              index,
              {
                id,
                title,
                content,
                Category: { name },
              },
            ]) => (
              <div
                key={index}
                className="w-full h-full flex flex-col space-y-2 text-white pb-4 border-b"
              >
                <Link
                  to={`/blog/${id}`}
                  className="text-3xl font-bold hover:underline"
                >
                  {title}
                </Link>
                <div className="text-base text-gray-300">
                  {content.split(0, 99)[0]}
                </div>
                <Link
                  className="w-full font-semibold italic text-sm hover:underline"
                  to={`/category/${name}`}
                >
                  {name}
                </Link>
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default BlogIndex;
