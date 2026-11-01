import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/qr/contact/email")({ beforeLoad: () => { throw redirect({ href: "/qr-code-generator/contact/email", statusCode: 301 }); } });
