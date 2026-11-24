# Architecture Notes

- Keep service-page theme variations scoped through `ServicePageLayout` and semantic CSS tokens so one service page can have a distinct identity without changing the rest of the site.
- Share validated, email-draft enquiry behavior across service pages so fields, encoding, and user-facing delivery limits remain consistent.