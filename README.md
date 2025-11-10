# 🌟 Student Data Management System (SDMS) & Portofolio Analisis

Proyek ini adalah sistem demonstrasi dua komponen yang terintegrasi, dirancang untuk menampilkan kemampuan dasar dalam **manajemen data operasional** dan **penyajian informasi visual**, relevan untuk peran Operations & Data Analysis.

## 💻 Tumpukan Teknologi (Tech Stack)

* **Aplikasi Inti (Data):** PHP (MySQLi), MySQL/MariaDB, Bootstrap 5
* **Presentasi (Tampilan):** HTML5, CSS3, JavaScript, Responsive Web Design

---

## 1. 🗃️ Aplikasi Inti: SDMS (Manajemen Data Operasional CRUD)

Komponen ini merupakan inti *back-end* yang bertanggung jawab atas alur kerja data, memastikan data operasional dikelola secara efisien.

### Fungsi Kritis:

* **Siklus Data Lengkap:** Mengimplementasikan fungsionalitas **Create, Read, Update, dan Delete (CRUD)** penuh, membuktikan kemampuan sistem untuk mengelola data transaksional yang dinamis.
* **Akses Database:** Menggunakan PHP native (MySQLi) untuk komunikasi langsung dengan database, yang diperlukan untuk **konsistensi dan integritas data**.
* **Kualitas Input Data:** Menerapkan validasi input dasar untuk memastikan bahwa data yang masuk ke sistem memenuhi standar **kualitas data minimum**.

## 2. 📊 Komponen Dasar Front-End (Lapisan Presentasi)

Komponen ini berfungsi sebagai antarmuka pengguna (UI) dan alat komunikasi visual, dibangun untuk menyajikan data yang kompleks.

### Relevansi Fungsional:

* **Penyajian Data yang Efisien:** Lapisan ini dirancang untuk menyajikan data yang kompleks dalam format yang **terstruktur dan mudah diinterpretasi**, yang merupakan langkah logis setelah data berhasil diolah.
* **Adaptabilitas (RWD):** Penggunaan **Responsive Web Design** memastikan tampilan dan laporan data dapat diakses dan dianalisis secara efektif dari berbagai jenis perangkat.
* **Penguasaan Alat UI Dasar:** Memanfaatkan HTML5, CSS3, dan JavaScript menunjukkan *skill set* yang dibutuhkan untuk membangun dan memelihara *dashboard* atau laporan berbasis web.

---

## 💡 Implikasi Proyek untuk Operasi Bisnis dan Analisis

Proyek ini secara objektif membuktikan kemampuan untuk membangun sistem yang mendukung fungsi penting:

1.  **Pemetaan Aliran Data:** Memahami dan mengelola siklus hidup data operasional dari titik masuk hingga penarikan (*retrieval*).
2.  **Integritas Data:** Merancang dan menerapkan kontrol pada *input* data untuk menjaga keakuratan data inti organisasi.
3.  **Keterampilan SQL:** Menunjukkan kemampuan untuk berinteraksi langsung dengan database untuk manipulasi dan pengambilan data yang dibutuhkan untuk *reporting*.

---

## ⚙️ Instalasi dan Konfigurasi

1.  Pastikan Anda telah menginstal **XAMPP/WAMP/LAMP** atau *stack* pengembangan web PHP lainnya.
2.  Buat database baru dengan nama `akademik` di phpMyAdmin.
3.  **[OPSIONAL]** Buat tabel `mahasiswa` dengan kolom `id` (INT PRIMARY KEY AUTO_INCREMENT), `nim`, `nama`, `alamat`, dan `fakultas`.
4.  Tempatkan file `index.php` ke dalam direktori *root* server Anda (misalnya: `htdocs`).
5.  Akses proyek melalui *browser* Anda (`localhost/nama_folder/index.php`).
