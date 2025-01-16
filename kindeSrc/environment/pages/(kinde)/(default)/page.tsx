"use server";

import React from "react";
import {
  getKindeRequiredCSS,
  getKindeRequiredJS,
  KindePageEvent,
} from "@kinde/infrastructure";
import { renderToString } from "react-dom/server.browser";

const Layout = ({ request, context }: KindePageEvent) => {
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

export default async function Page(event: KindePageEvent): Promise<string> {
  const page = await Layout(event);
  return renderToString(page);
}
