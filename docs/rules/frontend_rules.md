# Frontend Rules

## 1. General Principles

* Follow `/docs/engineering_rules.md` as the base rule
* Prefer **composition over inheritance**
* Keep components **small, reusable, and predictable**
* Avoid unnecessary abstraction
* Maintain **separation of concerns**

---

## 2. Tech Stack Rules

* Framework: Next.js (App Router)
* Styling: TailwindCSS
* UI Components: shadcn/ui
* Data Fetching: TanStack Query
* Table: TanStack Table
* Validation: Zod
* State Management: Zustand
* Backend (BaaS): Supabase (Auth, Database, Edge Functions)
* Billing: Stripe

---

## 3. Project Structure

```
/app
/features
  /<feature-name>
    /components
    /hooks
    /services
    /schemas
    /types
/shared
  /components
  /ui
  /hooks
  /utils
  /types
```

### Rules

* Feature-specific logic → `/features`
* Reusable/global → `/shared`
* Do not mix feature logic into shared

---

## 4. Next.js Rules (App Router)

### Structure

* Use `/app` directory
* **SSG strict**: no server functions allowed
* Use `"use client"` where necessary for interactive components

### Rules

* All API fetching must be **only in client side**
* Do not use server actions or API routes for server-side mutations
* Keep routing clean and predictable

### Data Fetching

* Prefer TanStack Query for all client-side API state

---

## 5. Component Rules

### Types of Components

* **UI Components** → `/shared/ui` (shadcn-based)
* **Reusable Components** → `/shared/components`
* **Feature Components** → `/features/<feature>/components`

### Rules

* One component = one responsibility
* Avoid large components (>200 lines)
* Props must be typed
* No business logic inside UI components

---

## 6. Styling Rules (TailwindCSS)

* Use utility-first approach
* Avoid inline styles
* Avoid excessive class duplication → extract component
* Use `cn()` helper for conditional classes

### Rules

* No hardcoded colors → use theme/token
* Maintain spacing consistency
* Avoid deeply nested class logic

---

## 7. shadcn/ui Rules

* Use shadcn as base UI system
* Do not modify core component directly
* Extend via wrapper if needed

### Rules

* Keep UI consistent
* Do not duplicate existing shadcn components
* Prefer composition over rewriting

---

## 8. State Management

### Rules

* Local state → `useState`
* Server state → TanStack Query
* Global state → Use **Zustand**
* Feature-specific (non-global) state → Combine **Zustand with `useContext`** to scope the state

---

## 9. TanStack Query Rules

### Usage

* All API calls must go through Query or Mutation

### Rules

* Use `queryKey` consistently
* Separate query & mutation logic
* Handle loading & error states

### Structure

```
/features/<feature>/services
  getData.ts
  useGetData.ts
```

---

## 10. TanStack Table Rules

### Rules

* Table logic must be separated from UI
* Define columns in dedicated file
* Use memoization for performance

### Structure

```
/features/<feature>/table
  columns.ts
  table.tsx
```

---

## 11. Data Access Layer (Supabase & Edge Functions)

* No direct Supabase SDK queries inside UI components
* Use service layer for data access

### Rules

* All Supabase queries and Edge Function calls must reside in `/services`
* Rely on Supabase Row Level Security (RLS) for authorization
* Return typed responses (utilize Supabase generated types)
* Handle errors gracefully at the service level before returning to components

---

## 12. Forms & Validation

* Use Zod for schema
* Schema location → `/schemas`

### Rules

* Validation must be schema-driven
* Do not validate manually inside component

---

## 13. Types

### Rules

* Global types → `/shared/types`
* Feature types → `/features/<feature>/types`
* Avoid `any`

---

## 14. Hooks

### Rules

* Custom hooks → `/hooks`
* Must start with `use`
* Do not mix UI logic inside hooks

---

## 15. Performance Rules

* Always use tree-shaking import when available
* Use `React.memo` when needed
* Use `useMemo` & `useCallback` properly
* Avoid unnecessary re-render

---

## 16. Error Handling

* Always handle loading & error state
* Do not leave UI in undefined state

---

## 17. Accessibility (Basic)

* Use semantic HTML
* Add aria-label where needed
* Ensure clickable elements are accessible

---

## 18. Prohibited Practices

* Direct API call inside component
* Mixing UI and business logic
* Duplicate components
* Overusing global state
* Hardcoded values

---

## 19. AI Agent Rules (CRITICAL)

* MUST follow this file strictly
* MUST NOT create new patterns outside defined structure
* MUST reuse existing components if available
* MUST keep code simple and readable
* Output must be production-ready

---

## 20. Consistency Rule

* Follow existing patterns in codebase
* Consistency > personal preference
