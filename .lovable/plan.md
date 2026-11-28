# Service Pages and Readiness Assessment

## Scope
- Update `/agentic-ai` and `/security-governance` with the requested examples, assessment entry points, and clearer quote/call prompts.
- Change all site contact addresses to `hello@biocircuitlaboratories.com.ng`.
- Add the supplied readiness assessment as a separate page without changing its HTML source.

## Page updates
- On Agentic AI, label the section “Examples” and place the fitness agent and multi-agent architecture links first, followed by the existing health-tech examples.
- Add a readiness-assessment link in at least two well-spaced places on each service page, including a prominent entry point and one near the enquiry section.
- Make quote requests and call requests easy to reach at key decision points. Route them through the existing service enquiry forms, which prepare email drafts; no phone number or booking link was supplied.

## Assessment page
- Copy the uploaded HTML unchanged into the public site files and expose it at a dedicated `/readiness-assessment` page.
- Surround the unchanged assessment with a clear page-level way back to Agentic AI and Security & Governance. Keep its scoring, result, email-draft, and print behavior intact.

## Technical details
- Add a routed page wrapper that displays the untouched assessment file and provides accessible return links to both service pages.
- Replace old contact addresses in shared email helpers, visible links, and service structured data; update the project’s saved contact-email rule.
- Preserve the existing service-page themes and shared email-draft form behavior.

## Verification
- Check both service pages and the assessment at desktop and mobile widths.
- Confirm each service page has at least two working assessment links, the assessment calculates a result and can return to either service page, and email links use the new address.
- Run the relevant form tests, inspect preview diagnostics, and update the roadmap before committing.
