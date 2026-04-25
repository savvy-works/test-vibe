# Engineering Rules

## 1. General Principles

* Keep code **simple, readable, and maintainable**
* Prefer **clarity over cleverness**
* Avoid over-engineering
* Write code for **humans first, machines second**
* Follow existing patterns before introducing new ones

---

## 2. Naming Conventions

* Variables & functions: `camelCase`
* Classes & components: `PascalCase`
* Constants: `UPPER_SNAKE_CASE`
* File names:

  * Components: `PascalCase.tsx`
  * Others: `kebab-case.ts`

---

## 3. Project Structure (High-Level)

* Separate by **domain/feature**, not by technical layer only
* Use:

  * `/features` → domain-specific logic
  * `/shared` → reusable logic
* Avoid deep nesting (>3 levels)

---

## 4. Code Quality

* No unused variables or imports
* No commented-out code
* No console.log in production code
* Functions should be **small and focused (single responsibility)**
* Avoid duplicate logic (DRY principle)

---

## 5. Git Workflow

### Branch Naming

* `feature/<name>`
* `fix/<name>`
* `chore/<name>`
* `refactor/<name>`

### Commit Message Format

* `feat: add login feature`
* `fix: handle null response`
* `refactor: simplify auth logic`
* `chore: update dependencies`

### Rules

* One feature per branch
* Keep commits atomic and meaningful
* Do not commit broken code

---

## 6. API & Data Access (Frontend-First & BaaS)

### Data Fetching (Supabase)

* Data must be fetched via the Supabase SDK from the client side.
* Do not build custom backend APIs; utilize Supabase directly.
* Rely on Supabase Row Level Security (RLS) for data protection and authorization.

### Edge Functions (Supabase)

* Use Edge Functions only for secure logic that cannot be exposed to the client (e.g., Stripe webhooks, third-party API keys).

### Rules

* Always handle error cases from Supabase or Edge Function responses.
* Transform database data in the service layer before passing it to UI components.

---

## 7. Error Handling

* Never silently ignore errors
* Always provide meaningful error messages
* Fail fast when necessary
* Validate inputs early

---

## 8. Dependency Management

* Avoid unnecessary libraries
* Prefer built-in/native solutions when possible
* Keep dependencies minimal and maintained

---

## 9. Security Basics

* Never hardcode secrets or credentials
* Use environment variables
* Validate all external input
* Sanitize data where needed

---

## 10. Testing (Minimum Standard)

* Critical logic must be testable
* Avoid tightly coupled code
* Prefer pure functions when possible

---

## 11. Documentation

* Every feature must have:

  * Clear purpose
  * Clear usage
* Complex logic must be documented
* Keep README updated

---

## 12. AI Agent Rules (IMPORTANT)

* Always follow this file before generating code
* Do not invent new patterns if already defined
* Do not create unnecessary abstractions
* Reuse existing utilities/components when possible
* Output must be clean, production-ready code

---

## 13. Consistency Rule (CRITICAL)

* Consistency is more important than perfection
* Follow existing codebase style over personal preference

---

## 14. Prohibited Practices

* Magic numbers without explanation
* Hardcoded values that should be configurable
* Mixing responsibilities in one file
* Direct data access from UI layer (must use abstraction/service)

---

## 15. Scalability Mindset

* Code should be easy to extend
* Avoid tight coupling between modules
* Design for change, not for current need only
