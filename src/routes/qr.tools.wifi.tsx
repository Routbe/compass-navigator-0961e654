import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/qr/tools/wifi")({ beforeLoad: () => { throw redirect({ href: "/qr-code-generator/tools/wifi", statusCode: 301 }); } });
