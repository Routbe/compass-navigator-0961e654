import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/qr/contact/vcard")({ beforeLoad: () => { throw redirect({ href: "/qr-code-generator/contact/vcard", statusCode: 301 }); } });
