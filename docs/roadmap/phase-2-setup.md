# Planning Phase 2: Core BaaS & Authentication

Dokumen ini adalah panduan *high-level* untuk menyelesaikan **Phase 2: Core BaaS & Authentication**. Panduan ini dirancang agar mudah dipahami dan dieksekusi langkah demi langkah.

## Tujuan Utama
Menyambungkan aplikasi dengan Supabase dan memastikan sistem pendaftaran/login (*authentication*) berfungsi dengan aman dan terproteksi.

---

## Langkah 1: Setup dan Inisialisasi Supabase
1. **Install Dependencies:** Tambahkan library resmi Supabase (seperti `@supabase/supabase-js` dan `@supabase/ssr`) ke dalam project.
2. **Setup Environment Variables:** Siapkan file `.env.local` dan tambahkan URL serta API Key dari project Supabase Anda.
3. **Buat Supabase Client:** Buat file utilitas (*utility file*) untuk menginisialisasi koneksi Supabase agar bisa dipanggil dari berbagai tempat di aplikasi.

## Langkah 2: Persiapan Database (Tabel Users)
1. **Buat Tabel:** Di dashboard Supabase, buat tabel baru bernama `users`. Tabel ini harus terhubung dengan tabel bawaan Supabase (`auth.users`).
2. **Kolom Data:** Pastikan tabel `users` memiliki informasi dasar seperti `id` (sama dengan id di auth), `email`, dan `nama`.
3. **Automasi (Database Trigger):** Buat trigger di Supabase agar setiap kali ada user baru yang mendaftar, datanya otomatis tersimpan juga di tabel `users` ini.

## Langkah 3: Pembuatan Tampilan (UI) Authentication
1. **Halaman Login:** Buat folder dan halaman untuk login (misalnya di `/login`). Buat form yang meminta Email dan Password.
2. **Halaman Register:** Buat halaman untuk pendaftaran (misalnya di `/register`). Buat form untuk pendaftaran akun baru.
3. **Styling:** Gunakan komponen UI yang sudah disiapkan (seperti Shadcn UI) agar form terlihat rapi dan profesional.

## Langkah 4: Implementasi Logika Authentication
1. **Fungsi Sign Up:** Sambungkan form Register dengan fungsi pendaftaran dari Supabase.
2. **Fungsi Sign In:** Sambungkan form Login dengan fungsi masuk (*login*) dari Supabase.
3. **Fungsi Sign Out:** Buat tombol dan fungsi untuk keluar (*logout*).
4. **Fungsi Lupa Password (Opsional/Dasar):** Siapkan fungsi dasar jika user lupa password.
5. **Penanganan Error:** Tampilkan pesan peringatan jika login gagal (misalnya "Password salah" atau "Email tidak ditemukan").

## Langkah 5: Proteksi Halaman & Middleware
1. **Buat Middleware:** Buat file `middleware.ts` di root project.
2. **Cek Sesi (Session):** Gunakan middleware untuk memeriksa apakah user yang membuka aplikasi sedang dalam status login atau tidak.
3. **Aturan Redirect (Pengalihan):**
   - Jika user **belum login** dan mencoba membuka halaman rahasia/dashboard, lempar mereka kembali ke halaman `/login`.
   - Jika user **sudah login** namun mencoba membuka halaman `/login` atau `/register`, arahkan mereka langsung ke dashboard.

---

## Kriteria Selesai (Definition of Done)
- Aplikasi berhasil tersambung dengan project Supabase.
- User bisa mendaftar, login, dan logout dengan sukses.
- Data user baru otomatis tercatat di tabel `users` di database.
- Halaman dashboard tidak bisa diakses tanpa login.
