# Repository import

## Vercel release readiness
- [x] Audit deployment adapter and environment requirements; preserve Neon gateway and Better Auth. Domain/DNS and Vercel settings remain externally unverified.
- [x] Add Vercel target, release environment validation, daily cleanup schedule and corrected deployment documentation.
- [x] Check content-route head coverage and all 35 documentation routes; replace 20 placeholders with substantive content while preserving ROUT's shared presentation. Full non-doc content/navigation review still needs live service setup.
- [x] Run regression tests: 226 files / 1,275 tests pass; manual typecheck passed. All 35 docs return 200; search, ToC, copy and phone navigation pass.
- [ ] Validate the actual Vercel build output — requires a Vercel deployment with its configured environment; not verified by local preview.
- [ ] Verify a gateway-compatible Better Auth transaction adapter — existing GatewayPool rejects interactive transactions; real account-flow verification also needs restricted Neon access.
- [ ] Verify the deployed Vercel domain and authenticated integrations — requires access to the Vercel deployment and working restricted Neon/auth configuration.

## Knowledge graph and credentials
- [x] Verify the complete four-pillar MDX catalogue; share the homepage header, footer and theme and order article navigation.
- [x] Verify reusable MDX components and detailed manifesto, badge and OIDC articles; expand custom-badge and credential documentation.
- [x] Audit OIDC sessions, account merge, email sync and existing credential visibility; distinguish source implementation from deployed functionality.
- [x] Verify public routing, MDX rendering, search, active ToC, clipboard and phone layout; typecheck passes and 1,268 tests pass with two workers.
- [ ] Verify authenticated OIDC, merge and webhook flows — blocked by restricted Neon connection and original authentication configuration.
- [ ] Complete external credential issuance and recipient controls — blocked by working restricted Neon access and verification of the deployed credential schema; issuance remains disabled.

- [x] Import repository source, styles, content, and assets without secrets or repository metadata.
- [x] Verify home page rendering on desktop/phone; routing and QR caption tests pass.
- [ ] Complete every-route and navigation comparison — blocked by no running reference site and service setup.
- [x] Link Neon and verify the database contains the imported app’s tables.
- [ ] Enable app data access — blocked because the linked connection uses neondb_owner; the app requires the existing restricted rout_app account.
- [ ] Configure the original account system — blocked by missing authentication configuration.
- [ ] Configure external storage, email, and payments — blocked by missing service credentials.
