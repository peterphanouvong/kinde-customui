"use server";

import React from "react";
import {
  getKindeCSRF,
  getKindeRequiredCSS,
  getKindeRequiredJS,
  getKindeWidget,
  KindePageEvent,
} from "@kinde/infrastructure";
import { renderToString } from "react-dom/server.browser";

const Layout = ({ request, context }: KindePageEvent) => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex" />
        <meta name="csrf-token" content={getKindeCSRF()} />
        <title>{context.widget.content.page_title}</title>
        {getKindeRequiredCSS()}
        {getKindeRequiredJS()}
      </head>
      <body>
        <div data-roast-root="true">
          <h1>Hello world</h1>
          {getKindeWidget()}
        </div>
      </body>
    </html>
  );
};

export default async function Page(event: KindePageEvent): Promise<string> {
  const page = Layout(event);
  return renderToString(page);
}
