# Repository import

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
