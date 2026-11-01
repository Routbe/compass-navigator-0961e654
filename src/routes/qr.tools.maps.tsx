import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/qr/tools/maps")({ beforeLoad: () => { throw redirect({ href: "/qr-code-generator/tools/maps", statusCode: 301 }); } });
