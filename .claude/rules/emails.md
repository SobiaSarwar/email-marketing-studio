---
paths:
  - "campaigns/**/emails/*.md"
---

# Email file rules

Each email file must:

- Start with a line "Subject: ..." of 50 characters or fewer, then a line "Preview: ..." of 90 characters or fewer.
- Greet the reader with {{first_name}}.
- Have exactly one main link, written as [Button text](https://kettlebird.example/steep-club).
- End with our sign-off from brand/voice.md, then this two-line footer as plain text, not inside a code block:

  You're getting this because you joined the Kettlebird Tea waitlist.
  Kettlebird Tea, {{company_address}} · Unsubscribe: {{unsubscribe_url}}

  End the first footer line with two spaces so it breaks onto its own line.
- Never state a product fact as settled unless the owner has confirmed it. This covers what is in the box, steeping notes, shipping and timing, pause or cancel, gifting, prices and launch status. Write it as `[Owner to confirm: ...]` instead.
- Use the same wording for the same fact in every email in a campaign. For steeping notes, use `[Owner to confirm: steeping notes come with each tea.]`
