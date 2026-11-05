# Movie App (React + Vite)

A small movie discovery app built with **React**, **Vite**, and **TMDB**. Search movies, view details, and save favorites in the browser.

## 🚀 Getting started

1. Copy environment variables:

   ```bash
   cp .env.example .env
   ```

2. Add your TMDB API key to `.env` (see the comment in the file).

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the dev server:

   ```bash
   npm run dev
   ```

5. Open the URL shown in the terminal (usually http://localhost:5173).

---

## ⭐ Features

- Search movies by title
- Browse trending movies
- View movie details (rating, overview, release year)
- Save favorites locally (persisted in `localStorage`)
- Clean, component-driven layout

---

## 🧩 Project structure

- `src/components/` — UI components (cards, header, layout)
- `src/pages/` — route pages (Home, Favorites, Movie Details)
- `src/context/` — global state for favorites
- `src/lib/` — TMDB API helpers

---

## 🛠️ Build

```bash
npm run build
```

---

## Notes

If you see an error about `VITE_TMDB_API_KEY`, make sure you copied `.env.example` to `.env` and added your API key.
