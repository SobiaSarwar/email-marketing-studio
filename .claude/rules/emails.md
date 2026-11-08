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
