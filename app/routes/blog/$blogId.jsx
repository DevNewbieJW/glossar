import React from "react";
import { marked } from "marked";

import { Link, useLoaderData } from "@remix-run/react";

import { fetchPostById } from "~/models/post.server.js";

export const loader = async ({ params }) => {
  const id = parseInt(params.blogId);

  return await fetchPostById(id);
};

const BlogId = () => {
  const {
    createdAt,
    title,
    content,
    Category: { name },
  } = useLoaderData();

  return (
    <div className="w-4/5 h-full flex flex-col items-center justify-center">
      <div className="w-full h-full py-4 italic">
        Erstellt am: {new Date(createdAt).toLocaleString("de-DE")}
      </div>
      <div className="w-full h-full text-4xl font-bold pb-4 mx-auto">
        {title}
      </div>
      <div
        className="w-full h-full"
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      />
      <Link
        to={`/category/${name}`}
        className="w-full h-full text-sm italic mt-4 underline"
      >
        {name}
      </Link>
    </div>
  );
};

export default BlogId;
