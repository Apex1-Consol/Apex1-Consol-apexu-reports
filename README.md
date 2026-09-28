# Apex1-Consol-apexu-reports

Client portal entry point. Since 2026-09-28 `index.html` is a **thin shell** that forwards
to ApexOne's canonical `report-generator.html` (same origin, so the sign-in carries over).
The generator code lives only in `Apex1-Consol/ApexOne`; do not copy it back here.
The portal Shares the same Supabase project (`nducwhlmudksgxggjrbo`)
and Turnstile CAPTCHA configuration as `Apex1-Consol/ApexOne`.

## CAPTCHA / Turnstile — read before touching

See the "CAPTCHA / Turnstile configuration" section in the `Apex1-Consol/ApexOne`
README before creating or rotating a Turnstile widget. Supabase Auth holds one
secret project-wide across three login surfaces (this repo's `index.html`, and
ApexOne's `index.html` and `report-generator.html`) — changing the widget for one
without updating the others' `data-sitekey` breaks login on the surfaces left behind.
