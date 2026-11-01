import { createFileRoute, Outlet } from "@tanstack/react-router";
export const Route = createFileRoute("/dev")({
  head: () => ({ meta: [{ title: 'ROUT — Developer documentation' }, { name: "description", content: 'ROUT developer tools and documentation.' }, { property: "og:title", content: 'ROUT — Developer documentation' }, { property: "og:description", content: 'ROUT developer tools and documentation.' }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),  component: Outlet });
