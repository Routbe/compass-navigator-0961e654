import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/qr/payment")({ beforeLoad: () => { throw redirect({ href: "/qr-code-generator/payment", statusCode: 301 }); } });
