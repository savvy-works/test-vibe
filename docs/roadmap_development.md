# 🗺️ Roadmap Development: LaunchKit SaaS Starter

Berdasarkan *Product Vision*, berikut adalah *roadmap* pengembangan yang dibagi menjadi beberapa fase agar pengerjaan lebih terstruktur, mulai dari *scaffolding* awal hingga tahap pemolesan (*polishing*) siap rilis.

---

## 🚀 Phase 1: Setup & Scaffolding (Boilerplating)
Fase ini berfokus pada penyiapan pondasi teknologi dan struktur direktori utama sesuai dengan `frontend_rules.md` dan `engineering_rules.md`.

- [ ] Inisialisasi Next.js (App Router) dengan TypeScript.
- [ ] Setup Tailwind CSS & Shadcn UI.
- [ ] Setup Zustand untuk global/feature-specific state dan TanStack Query untuk data fetching.
- [ ] Implementasi struktur folder ( `/app`, `/features`, `/shared`).
- [ ] Pembuatan Layout dasar aplikasi (root layout).
- [ ] Pembuatan UI Token / Global CSS theme (sesuai `design_token.md`):
  - [ ] Konfigurasi font system utama (`Inter` & fallback).
  - [ ] Konfigurasi color palette (Indigo primary, Charcoal text, Neutral & Accent colors).
  - [ ] Konfigurasi radius sistem (`6px`, `8px`, `10px`).
  - [ ] Konfigurasi 4-layer soft elevation shadow.
  - [ ] Konfigurasi utilitas micro-interaction (Hover `translateY(-2px)`, Active, Focus states).

---

## 🔐 Phase 2: Core BaaS & Authentication
Fase ini menyambungkan aplikasi dengan Supabase dan memastikan sistem autentikasi berjalan dengan aman.

- [ ] Inisialisasi Supabase Project & Supabase Client SDK di Frontend.
- [ ] Pembuatan tabel `users` (di-extend dari Supabase Auth).
- [ ] Implementasi Auth Services (Sign In, Sign Up, Sign Out, Forgot Password).
- [ ] Pembuatan UI Page untuk Authentication (Login, Register).
- [ ] Setup Session Persistence & Middleware / Route Guard (Redirect unauthenticated users).

---

## 🏢 Phase 3: Multi-Tenant & Core Data Model
Fase ini membangun inti dari fitur SaaS yaitu sistem *Workspace/Tenant* beserta contoh *CRUD Blueprint*.

- [ ] Desain Database Schema untuk `workspaces` dan relasi `workspace_users` (Roles).
- [ ] Implementasi **Row Level Security (RLS)** di Supabase (Pastikan data terisolasi per *workspace*).
- [ ] Pembuatan UI & Logic untuk Create Workspace dan Switch Workspace.
- [ ] Integrasi *Workspace ID* ke dalam Zustand / Context API.
- [ ] **CRUD Blueprint:** Pembuatan entitas contoh `Projects` (Tabel DB, RLS, UI Table menggunakan TanStack Table, Modal Create/Edit).

---

## 💳 Phase 4: Billing & Stripe Integration
Fase integrasi pembayaran berbasis *subscription* menggunakan Stripe dan Supabase Edge Functions.

- [ ] Setup akun Stripe & pembuatan produk subscription (Free / Pro Plan).
- [ ] Pembuatan **Supabase Edge Function** untuk menangani Stripe Webhook (sinkronisasi status *subscription* ke *database*).
- [ ] Setup UI Pricing Page (Pilihan plan).
- [ ] Integrasi Stripe Checkout Button (Subscribe & Upgrade).
- [ ] Setup Stripe Customer Portal untuk *Cancel Subscription*.

---

## ⚙️ Phase 5: Dashboard & User Settings
Fase ini berfokus pada pembentukan UI/UX inti aplikasi setelah user masuk ke dalam *Workspace*.

- [ ] Pembuatan Layout Dashboard (Sidebar, Header, Breadcrumbs).
- [ ] Pembuatan halaman *Dashboard Card Stats* (Overview statis atau dinamis).
- [ ] Pembuatan halaman Settings:
  - [ ] **Profile Settings:** Update data user, avatar upload (menggunakan Supabase Storage).
  - [ ] **Workspace Settings:** Ubah nama workspace, info workspace.
  - [ ] **Billing Settings:** Info plan aktif & tombol menuju portal Stripe.

---

## 🌐 Phase 6: Public Pages (SEO & SSG)
Membangun halaman publik yang cepat, *SEO-friendly*, dan dirender secara statis (SSG).

- [ ] Pembuatan komponen UI Landing Page modern (Hero, Features, Testimonials).
- [ ] Integrasi halaman Pricing (digunakan ulang dari komponen Phase 4, namun diekspor statis).
- [ ] Optimalisasi Meta Tags, SEO, dan performa halaman publik.

---

## ✨ Phase 7: Polishing, Security, & Deployment
Fase terakhir untuk memastikan kode bersih, performa maksimal, dan aplikasi siap dijual/digunakan.

- [ ] **Error Handling & UX:** Pastikan semua state (loading, error, empty state) tertangani dengan UI yang rapi (menggunakan Toast/Skeleton).
- [ ] **Code Review & Refactoring:** Pastikan konsistensi dengan *Engineering Rules*. Tree-shaking import, memoization (`useMemo`, `React.memo` jika perlu).
- [ ] **Security Audit:** Cek kembali semua aturan RLS Supabase dan pastikan tidak ada kebocoran data antar-workspace.
- [ ] Pembuatan skrip kemudahan instalasi (jika perlu) agar proses setup `< 10 menit` tercapai.
- [ ] Dokumentasi penggunaan (*README.md*) & panduan *deployment* ke platform statis (Vercel/NGINX).
