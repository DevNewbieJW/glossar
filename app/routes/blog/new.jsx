import React from "react";

import { Form } from "@remix-run/react";
import { redirect } from "@remix-run/node";

import { createPost, createPostCategory } from "~/models/post.server.js";
import { fetchCategory } from "~/models/category.server.js";

export const action = async ({ request }) => {
  const formData = await request.formData();

  const postTitle = formData.get("title");
  const postCategory = formData.get("category");
  const postContent = formData.get("content");

  const category = await fetchCategory(postCategory);
  if (category) {
    const fields = { postTitle, categoryId: category.id, postContent };
    await createPost(fields);
  } else {
    const fields = { postTitle, postCategory, postContent };
    await createPostCategory(fields);
  }

  return redirect("/blog");
};

const New = () => (
  <div className="w-2/4 h-full">
    <Form method="post" className="flex flex-col space-y-4">
      <div className="w-full flex flex-col justify-center space-y-2">
        <label className="text-lg" htmlFor="title">
          Title
        </label>
        <input
          className="p-1 rounded text-white bg-slate-600"
          name="title"
          id="title"
          placeholder="What's the next Title gonna be ?"
          autoFocus
        />
      </div>
      <div className="w-full flex flex-col justify-center space-y-2">
        <label className="text-lg" htmlFor="title">
          Category
        </label>
        <input
          className="p-1 rounded text-white bg-slate-600"
          name="category"
          id="category"
          placeholder="e.g. Git, DNS, DHCP etc."
          autoFocus
        />
      </div>
      <div className="w-full flex flex-col justify-center space-y-2">
        <label className="text-lg" htmlFor="content">
          Content
        </label>
        <textarea
          className="w-full h-96 p-1 rounded text-white bg-slate-600 resize-none"
          name="content"
          id="content"
          placeholder="Loading: Wisdom..."
        />
      </div>
      <div className="w-1/4 mx-auto flex items-center justify-center">
        <button
          type="submit"
          className="w-full p-1 rounded text-white bg-slate-600 text-xl"
        >
          Submit
        </button>
      </div>
    </Form>
  </div>
);

export default New;
