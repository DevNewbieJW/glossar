import React from "react";
import { Outlet } from "@remix-run/react";

const Blog = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-6">
      <div className="text-6xl mt-4">Blog</div>
      <Outlet />
    </div>
  );
};

export default Blog;
