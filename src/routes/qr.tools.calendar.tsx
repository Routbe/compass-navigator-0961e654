import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/qr/tools/calendar")({ beforeLoad: () => { throw redirect({ href: "/qr-code-generator/tools/calendar", statusCode: 301 }); } });
