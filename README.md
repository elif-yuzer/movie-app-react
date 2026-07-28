# justWATCH — Movie App

A React movie explorer with Firebase auth, TMDB search, trailers, and a personal watchlist.

**Live demo:** [movie-app-react-eosin-theta.vercel.app](https://movie-app-react-eosin-theta.vercel.app)

---

## Features

- Email / password and Google sign-in (Firebase Auth)
- Protected routes (`/private/*`) for home, details, and watchlist
- Discover movies + TMDB keyword search
- Sort by release date, popularity, and rating
- Movie detail page with YouTube trailer
- Watchlist saved per user in Cloud Firestore

## Tech stack

- React (Vite)
- React Router
- Context API
- Tailwind CSS + DaisyUI
- Axios + [TMDB API](https://www.themoviedb.org/documentation/api)
- Firebase Auth & Firestore
- Deployed on Vercel

## Getting started

### 1. Clone and install

```bash
git clone https://github.com/elif-yuzer/movie-app-react.git
cd movie-app-react
npm install
```

### 2. Environment variables

Create a `.env` file in the project root (do not commit it):

```env
VITE_APP_API_KEY=
VITE_APP_AUTH_DOMAIN=
VITE_APP_PROJECT_ID=
VITE_APP_STORAGE_BUCKET=
VITE_APP_MESSAGING_SENDER_ID=
VITE_APP_APP_ID=
VITE_TMDB_KEY=
```

- Firebase values: Firebase Console → Project settings → Your apps → `firebaseConfig`
- TMDB key: [TMDB API settings](https://www.themoviedb.org/settings/api)

### 3. Run locally

```bash
npm run dev
```

### 4. Firebase checklist

- Authentication: enable Email/Password and Google
- Firestore: create database and publish rules for `users/{userId}/watchlist/{movieId}` (authenticated user can read/write only their own docs)
- Auth → Authorized domains: add `localhost` and your Vercel domain

## What I learned / challenges

- **Auth race on private routes:** waiting for `onAuthStateChanged` with a `loading` flag before redirecting to login
- **SPA deploy 404:** client routes like `/private/watchlist` need a Vercel rewrite to `index.html`
- **Firestore `permission-denied`:** security rules must match the `users/{uid}/watchlist` path and require `request.auth.uid`
- **Context + API flow:** sharing TMDB fetch helpers and film state through Context instead of prop drilling

## TMDB endpoints used

| Purpose          | Endpoint                                        |
| ---------------- | ----------------------------------------------- |
| Discover         | `/3/discover/movie?api_key=...`                 |
| Search           | `/3/search/movie?api_key=...&query=`            |
| Videos / trailer | `/3/movie/{id}/videos?api_key=...`              |
| Posters          | `https://image.tmdb.org/t/p/w1280{poster_path}` |

---

<details>
<summary>Türkçe özet</summary>

Film keşfi, arama, fragman ve kullanıcıya özel watchlist içeren bir React uygulaması. Auth ve veri için Firebase, film verisi için TMDB kullanıldı; canlı sürüm Vercel’de.

</details>
