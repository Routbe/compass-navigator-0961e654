import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/qr/payment/crypto")({ beforeLoad: () => { throw redirect({ href: "/qr-code-generator/payment/crypto", statusCode: 301 }); } });
