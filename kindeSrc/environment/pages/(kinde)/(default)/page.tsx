"use server";

import React from "react";
import { getKindeRequiredCSS, getKindeRequiredJS } from "@kinde/infrastructure";
import { renderToString } from "react-dom/server.browser";

const Layout = () => {
  return (
    <html>
      <head>
        <title>Home</title>
        {getKindeRequiredCSS()}
        {getKindeRequiredJS()}
      </head>
      <body>
        <h1>Home</h1>
      </body>
    </html>
  );
};

export const Page = async () => {
  const page = await Layout();
  return renderToString(page);
};
