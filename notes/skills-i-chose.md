# Skills I chose

Searched skills.sh on 2026-11-04. Nothing has been installed. Star counts are from GitHub on the same day.

## Use these

1. **Writing campaigns: `anthropics/knowledge-work-plugins`** (skills `campaign-plan` and `email-sequence`)
   - Published by Anthropic, the company that makes Claude. The repo has about 34.7K stars and was updated today.
   - It covers planning a campaign and writing the email sequence, which is the writing half of the studio.
   - Runner-up: `coreyhaines31/marketingskills` (about 58K stars, `email-sequence` and `emails`). It is a well-known individual author, not an official company, so I'd read it before trusting it.

2. **Sending email: `resend/resend-skills`** (skill `resend`, plus `send-email`)
   - Published by Resend, the company that runs the email service, so the instructions match the real product. The repo has about 212 stars, which is small but expected for a vendor's own skills repo. It was updated yesterday.
   - Also worth a look from the same publisher: `resend/email-best-practices` (about 147 stars) for deliverability advice and `resend/react-email` for building email templates.

## Avoid these

1. **`caffeinelabs/skills@extension-email-marketing`**
   - It shows 29.8K installs, the most of any "email marketing" result, but the repo has only 2 stars and the publisher has 21 followers.
   - That mismatch is a warning sign, because installs are easy to inflate and stars are harder to fake. I can't tell why the numbers are so far apart, so I wouldn't trust it.

2. **`claude-office-skills/skills@email-marketing`**
   - The name sounds official, but it isn't Anthropic or any known company. It was last updated in January 2026, about 9 months ago, so it may be stale.
   - A generic "email-marketing" skill from an unknown publisher is also no better than the official options above.

## How I decided

Check these three things before installing any skill:

1. **Who publishes it.** Prefer the company that owns the product (`anthropics`, `resend`) or a known author. Be wary of lookalike names.
2. **Whether the numbers agree.** Compare installs on skills.sh with stars on the GitHub repo, and check when the repo was last updated. A big gap, or a repo that hasn't changed in months, is a red flag.
3. **What it actually does.** Open the skill's `SKILL.md` and read it first. A skill is instructions your AI will follow, and it may run commands, so look for anything that asks for API keys, runs scripts, or sends data somewhere unexpected.
