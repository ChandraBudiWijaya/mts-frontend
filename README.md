# MTS Frontend

Frontend aplikasi Mandor Tracking System yang dibangun dengan React, Tailwind CSS, dan Material-UI.

## Tech Stack

- **React 18** - Library JavaScript untuk membangun UI
- **Vite** - Build tool yang cepat untuk development
- **Material-UI v5** - Komponen UI yang siap pakai
- **Tailwind CSS** - Framework CSS utility-first
- **React Router v6** - Routing untuk aplikasi SPA
- **Axios** - HTTP client untuk API calls

## Prerequisites

Pastikan Anda telah menginstall:
- Node.js (v16 atau lebih baru)
- npm atau yarn

## Installation

1. Clone repository ini
2. Masuk ke direktori proyek:
   ```bash
   cd mts-frontend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Copy environment variables:
   ```bash
   cp .env.example .env
   ```

5. Jalankan development server:
   ```bash
   npm run dev
   ```

6. Buka browser dan akses `http://localhost:3000`

## Available Scripts

- `npm run dev` - Menjalankan development server
- `npm run build` - Build aplikasi untuk production
- `npm run preview` - Preview build production
- `npm run lint` - Check linting errors

## Project Structure

```
src/
├── components/          # Komponen yang dapat digunakan ulang
│   └── Layout/         # Layout utama aplikasi
├── pages/              # Halaman utama aplikasi
├── services/           # API services dan HTTP client
├── utils/              # Utility functions
├── App.jsx             # Root component
├── main.jsx            # Entry point
└── index.css           # Global styles dengan Tailwind
```

## Features

- 🔐 **Authentication** - Login dan logout
- 📱 **Responsive Design** - Mendukung desktop dan mobile
- 🎨 **Modern UI** - Menggunakan Material-UI dan Tailwind CSS
- 🚀 **Fast Development** - Hot module replacement dengan Vite
- 📊 **Dashboard** - Overview data dan statistik
- 🔧 **API Integration** - Terintegrasi dengan Laravel backend

## Environment Variables

Buat file `.env` di root directory dengan variabel berikut:

```env
VITE_API_BASE_URL=http://localhost:8000/api
VITE_APP_NAME=MTS - Mandor Tracking System
```

## API Integration

Aplikasi ini terintegrasi dengan Laravel backend melalui REST API. Konfigurasi API client ada di `src/services/api.js`.

## Styling

Proyek ini menggunakan kombinasi Material-UI dan Tailwind CSS:
- **Material-UI** untuk komponen UI yang kompleks
- **Tailwind CSS** untuk styling utility dan custom styling

## Contributing

1. Fork repository
2. Buat feature branch (`git checkout -b feature/nama-fitur`)
3. Commit changes (`git commit -m 'Menambahkan fitur baru'`)
4. Push ke branch (`git push origin feature/nama-fitur`)
5. Buat Pull Request

## License

Copyright © 2025 MTS (Mandor Tracking System)
