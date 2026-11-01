import { createFileRoute, Outlet } from "@tanstack/react-router";
export const Route = createFileRoute("/safety")({
  head: () => ({ meta: [{ title: 'ROUT — Trust and safety' }, { name: "description", content: 'ROUT privacy, security and transparency.' }, { property: "og:title", content: 'ROUT — Trust and safety' }, { property: "og:description", content: 'ROUT privacy, security and transparency.' }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),  component: Outlet });
