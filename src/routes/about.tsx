import { createFileRoute, Outlet } from "@tanstack/react-router";
export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: 'ROUT — About' }, { name: "description", content: 'Learn about ROUT and its mission.' }, { property: "og:title", content: 'ROUT — About' }, { property: "og:description", content: 'Learn about ROUT and its mission.' }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),  component: Outlet });
