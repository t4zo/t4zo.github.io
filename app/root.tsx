import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import globalStylesheet from "~/global.css";
import tailwindStylesheet from "~/tailwind.css";

import { ThemeContextProvider } from "~/contexts/themeContext";
import { TooltipContextProvider } from "~/contexts/tooltipContext";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStylesheet },
  { rel: "stylesheet", href: globalStylesheet },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  if (typeof window !== 'undefined') {
    if (localStorage.theme === 'dark' /*|| (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)*/) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
  
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ThemeContextProvider>
          <TooltipContextProvider>
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </TooltipContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
