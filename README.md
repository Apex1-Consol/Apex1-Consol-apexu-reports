# Apex1-Consol-apexu-reports

Client portal login (`index.html`). Shares the same Supabase project (`nducwhlmudksgxggjrbo`)
and Turnstile CAPTCHA configuration as `Apex1-Consol/ApexOne`.

## CAPTCHA / Turnstile — read before touching

See the "CAPTCHA / Turnstile configuration" section in the `Apex1-Consol/ApexOne`
README before creating or rotating a Turnstile widget. Supabase Auth holds one
secret project-wide across three login surfaces (this repo's `index.html`, and
ApexOne's `index.html` and `report-generator.html`) — changing the widget for one
without updating the others' `data-sitekey` breaks login on the surfaces left behind.
