# 🚀 Phase 1 Execution Plan: Setup & Scaffolding

**Tujuan Dokumen:**
Memberikan instruksi langkah demi langkah (High-Level) untuk melakukan *setup* awal proyek LaunchKit. Panduan ini dirancang khusus agar mudah dipahami dan diikuti oleh *Junior Programmer* atau AI Agent.

---

## 📋 Langkah-langkah Eksekusi

### 1. Inisialisasi Proyek Dasar
- Lakukan instalasi Next.js terbaru dengan menggunakan **App Router**.
- Pastikan untuk memilih **TypeScript** dan **Tailwind CSS** saat inisialisasi.
- Biarkan pengaturan default lainnya (jangan gunakan *src/ directory* jika tidak perlu, gunakan direktori root sesuai standar Next.js).

### 2. Setup Library Tambahan
- **Shadcn UI:** Lakukan inisialisasi *shadcn/ui* di dalam proyek.
- **State Management & Data Fetching:** 
  - Install `zustand`.
  - Install `@tanstack/react-query` (TanStack Query).
- Buat file *Provider* khusus di root aplikasi (misalnya di `app/layout.tsx` atau file terpisah) untuk membungkus aplikasi dengan `QueryClientProvider`.

### 3. Pembuatan Struktur Folder Utama
Buat folder-folder berikut di direktori utama proyek untuk menjaga kerapian kode:
- Buat folder `/features` (Tempat untuk modul fitur seperti *auth*, *billing*, *dashboard*).
- Buat folder `/shared` dengan sub-folder: `/components`, `/ui` (untuk shadcn), `/hooks`, `/utils`, `/types`.

### 4. Setup Base Layout
- Buka `app/layout.tsx` dan pastikan layout dasarnya bersih.
- Buka `app/page.tsx` dan hapus semua *boilerplate* bawaan Next.js, sisakan halaman kosong dengan teks sederhana (misal: "LaunchKit Ready").

### 5. Implementasi UI Token (Desain Sistem)
Berdasarkan panduan dari `docs/design_token.md`, lakukan modifikasi pada file `tailwind.config.ts` dan `app/globals.css`:
- **Font System:** Masukkan dan gunakan font `Inter` sebagai font default aplikasi.
- **Colors:** Tambahkan palet warna kustom ke *Tailwind config*:
  - *Primary:* Indigo (600, 500, 700).
  - *Text:* Charcoal 900 (`#0f172a`).
  - *Accents:* Teal, Magenta, Amber, Lime, Rose.
  - *Neutral & Surface:* Gray scale dan White.
- **Border Radius:** Atur kustomisasi radius `small (6px)`, `medium (8px)`, dan `large (10px)`.
- **Shadows:** Tambahkan konfigurasi *box-shadow* 4-layer (soft elevation).
- **Micro-Interactions:** Buat *utility class* untuk interaksi *hover* (contoh: lift animation dengan `translateY(-2px)`).

---

## ✅ Kriteria Selesai (Definition of Done)
1. Perintah `npm run dev` berjalan tanpa error.
2. Library *shadcn/ui*, *Zustand*, dan *TanStack Query* sudah ter-install dan terhubung di proyek.
3. Struktur folder `/features` dan `/shared` siap digunakan.
4. Warna *Indigo* dan font *Inter* sudah ter-aplikasi dengan baik dan bisa dipanggil via class Tailwind.
