import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/qr/contact/whatsapp")({ beforeLoad: () => { throw redirect({ href: "/qr-code-generator/contact/whatsapp", statusCode: 301 }); } });
