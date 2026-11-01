import { createFileRoute, Outlet } from "@tanstack/react-router";
export const Route = createFileRoute("/info")({
  head: () => ({ meta: [{ title: 'ROUT — Help' }, { name: "description", content: 'Guides for your ROUT profile and QR codes.' }, { property: "og:title", content: 'ROUT — Help' }, { property: "og:description", content: 'Guides for your ROUT profile and QR codes.' }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),  component: Outlet });
