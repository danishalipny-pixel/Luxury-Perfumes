# Testing & Verification Guide — NOIRÉLLE

## Available Testing Suites & Verification Scripts

### 1. Static Type Checking & Linting
Run TypeScript compilation and static code quality checks:
```bash
npm run build
npm run lint
```
- `tsc -b`: Validates all interface bindings, prop contracts, and component types.
- `oxlint`: Audits code style, react hook usage, and import consistency.

### 2. Live HTTP Route & Asset Audit
The project includes automated endpoint verification testing:
- Validates that all 22 product detail routes (`/product/:slug`) resolve with HTTP 200.
- Validates that all 58 product, coffret, and collection image endpoints return valid HTTP 200 responses.
- Ensures zero broken image requests or missing asset fallbacks.

### 3. Responsive Visual Verification
All 12 key viewports (Desktop 1280x800 and Mobile 390x844) have been captured and verified in `docs/screenshots/`:
- Complete cart state persistence check.
- Dynamic color theme transitions across page layouts.
- Modal interactions, search drawer opening, and slide-over cart drawer checks.
