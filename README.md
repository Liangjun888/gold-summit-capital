# Gold Summit Capital

This repository is the primary cloud workspace for the Gold Summit Capital project.

Use it as the single source of truth when continuing the project from another computer or another Codex session.

## What This Project Is

Gold Summit Capital is being developed as an ongoing venture project, not a one-off website task.

The business has two core product directions:

- Fund management service
- A client-only hub for investment, education, and family legacy content

The current repository contains both project strategy documents and the first public website prototype.

## Current Stage

The project is currently in the public website V1 stage.

What already exists:

- Project context, status, roadmap, backlog, and decision records
- Website MVP PRD, copy, wireframe, visual direction, and deployment notes
- Runnable public website prototype in `gold-summit-capital-site/`

The client-only portal is still planned as a later phase. The current website version does not implement real client login.

## Start Here

When a new Codex session enters this repository, read files in this order:

1. `00_START_HERE.md`
2. `01_PROJECT_STATUS.md`
3. `02_NEXT_ACTIONS.md`
4. `03_PRODUCT_BLUEPRINT.md`
5. `04_ROADMAP.md`
6. `07_DECISION_LOG.md`

If the task is website-related, then continue with:

1. `10_WEBSITE_MVP_PRD.md`
2. `11_PUBLIC_SITE_COPY.md`
3. `12_PUBLIC_SITE_WIREFRAME.md`
4. `13_VISUAL_DIRECTION.md`
5. `14_TECH_DEPLOYMENT_OPTIONS.md`
6. `15_WEBSITE_V1_IMPLEMENTATION_PLAN.md`
7. `16_WEBSITE_V1_QA_REPORT.md`

## Repository Structure

- `00_START_HERE.md` to `09_REFERENCE_ORGANIZATIONS.md`
  Project context, positioning, roadmap, templates, backlog, and reference material
- `10_WEBSITE_MVP_PRD.md` to `19_GITHUB_PAGES_404_FIX_REPORT.md`
  Website planning, copy, visual direction, implementation notes, QA, and deployment records
- `gold-summit-capital-site/`
  Public website V1 source code, scripts, tests, and deploy config

## Key Outputs Already In The Repo

- Public website V1 planning documents
- Public website V1 source code
- Decision log and next actions
- Deployment and GitHub upload notes

These files are enough for another Codex session to understand:

- what the project is for
- what has already been decided
- what output already exists
- what should happen next

## GitHub As Project Cloud

This GitHub repository is intended to be the cloud handoff point for future Codex sessions on other computers.

Important operating rule:

- Codex can only inherit what is saved in this repository and pushed to GitHub

That means:

- If a change matters, save it to a file in this repo
- Update project status when progress changes
- Update next actions when priorities change
- Update decision log when important decisions are made
- Commit and push after meaningful work

Codex should not assume chat-only context exists outside the repository.

## Files That Carry Project Progress

These files should be kept current because they are the main cross-computer handoff surface:

- `01_PROJECT_STATUS.md`
- `02_NEXT_ACTIONS.md`
- `07_DECISION_LOG.md`

## Working Rules

- Treat Gold Summit Capital as a long-term startup project
- Keep recommendations centered on the two core products
- Avoid unnecessary complexity before value is validated
- Use conservative disclosure for sensitive fund, portfolio, and client information
- Default to review mode before implementing, committing, or pushing later changes

## Website Notes

Website source lives in:

- `gold-summit-capital-site/`

Important limitation recorded in the project:

- The current V1 prototype was built with a dependency-free static generator because the original environment did not have usable `npm`

Long-term preferred direction still documented in the project:

- Astro + Netlify

