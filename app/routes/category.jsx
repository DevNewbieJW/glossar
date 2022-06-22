import { Outlet } from "@remix-run/react";
import React from "react";

const Category = () => {
  return (
    <div className="w-full h-full flex flex-col items-center py-4">
      <div className="w-full h-full text-4xl font-bold pb-4">Category</div>
      <Outlet />
    </div>
  );
};

export default Category;
