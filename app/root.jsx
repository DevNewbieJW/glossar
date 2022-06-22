import { Links, LiveReload, Outlet, Scripts, Link } from "@remix-run/react";
import React from "react";

import styles from "~/styles/tailwind.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

const Root = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Blog / Glossar</title>
        <Links />
        <Scripts />
      </head>
      <body className="bg-slate-500">
        <div className="w-full h-full bg-slate-500 text-white">
          <div className="w-full h-full flex flex-col">
            <div className="w-full h-12 bg-slate-600">
              <div className="w-full h-full p-2 flex items-center justify-center space-x-4 text-lg">
                <Link className="hover:underline" to="/">
                  Home
                </Link>
                <Link className="hover:underline" to="/blog">
                  Blog / Glossar
                </Link>
                <Link className="hover:underline" to="/about">
                  About
                </Link>
              </div>
            </div>
            <div className="w-2/3 flex items-center justify-center mx-auto">
              <Outlet />
            </div>
          </div>
        </div>
        <LiveReload />
      </body>
    </html>
  );
};

export default Root;
