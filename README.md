```markdown
# 💌 Wedding App API

API sederhana untuk aplikasi pernikahan yang digunakan untuk menerima dan menampilkan pesan ucapan dari tamu.


```
### 1. `GET /api/messages`

Mengambil semua pesan yang telah dikirim oleh tamu.

#### 🔹 Response

- **Status Code:** `200 OK`
- **Content-Type:** `application/json`

```json
[
  {
    "id": "1",
    "name": "Budi",
    "phone": "08123456789",
    "message": "Selamat ya!",
    "present": "Hadir",
    "timestamp": "2025-04-10T10:00:00Z"
  },
  {
    "id": "2",
    "name": "Sari",
    "phone": "08234567890",
    "message": "Semoga bahagia selalu!",
    "present": "TIdak Hadir",
    "timestamp": "2025-04-10T10:30:00Z"
  }
]
```

---

### 2. `POST /api/messages`

Mengirimkan pesan ucapan dari tamu.

#### 🔹 Request

- **Method:** `POST`
- **Content-Type:** `application/json`

#### 🔹 Body

```json
{
  "name": "Andi",
  "phone": "083212345678",
  "message": "Selamat menempuh hidup baru!",
  "present": "Transfer"
}
```

#### 🔹 Response

- **Status Code:** `201 Created`
- **Content-Type:** `application/json`

```json
{
  "id": "3",
  "name": "Andi",
  "phone": "083212345678",
  "message": "Selamat menempuh hidup baru!",
  "present": "Hadir",
  "timestamp": "2025-04-10T11:00:00Z"
}
```

---

## 📝 Data Struktur

| Field     | Tipe    | Required | Deskripsi                            |
|-----------|---------|----------|------------------------------------- |
| id        | string  | ✅       | ID unik pesan (otomatis oleh sistem) |
| name      | string  | ✅       | Nama pengirim pesan                  |
| phone     | string  | ✅       | Nomor telepon pengirim               |
| message   | text    | ✅       | Isi pesan ucapan                     |
| present   | boolean | ✅       | Hadir Atau Tidak                     |
| timestamp |timestamp| ✅       | Waktu pesan dikirim (ISO 8601)       |

---

## 🚀 Teknologi

- Node.js / Express (atau backend lain)
- Database MySql