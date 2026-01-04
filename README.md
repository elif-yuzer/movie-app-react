🎬 Movie App: Journey of an Optimizer

This project is the story of a developer who is still in the learning process—discovering modern web technologies and overcoming the technical obstacles along the way. It’s not just a movie app; it’s also a problem-solving journey.

🧠 Challenges & Solutions

Syntax & Logic Mastery (The Maze of Braces):
At the beginning, one of my biggest challenges was mixing up JSX curly braces {} with JavaScript logic (especially ternary expressions). Over time, I started to treat each brace as a “door,” which helped me build a clearer understanding of code hierarchy and parent-child relationships.

The “Ghost” Component Issue:
I faced a problem where the detail page appeared on the home page like a “ghost.” This bug pushed me to deeply understand how React Router works and how components are placed within the DOM hierarchy.

UI/UX Evolution (Split-Screen Transformation):
I moved from classic login screens to a modern and aesthetic split-screen design. With Tailwind CSS, I learned how to build responsive layouts and maintain visual balance.

🛠️ Tech Stack

Frontend: React (Vite), Tailwind CSS, Headless UI / DaisyUI

State Management: Context API (to manage data flow from a single source)

Routing: React Router v6 (custom routes and protected areas)

Backend & Auth: Firebase (Authentication and data management)

Data Fetching: Axios & TMDB API

✨ Features

Auth Logic: Login/Register flows and Google sign-in

Private Routing: Movie detail pages accessible only to authenticated users

Dynamic Search & Listing: Real-time movie search and listing via TMDB

Responsive Design: Flexible UI that works smoothly across all devices

📈 Roadmap (Missing Features & Goals)

Advanced Sorting: Dynamically sort movies by release date and TMDB rating

Watchlist: Save favorite movies to Firebase Firestore

Optimization: Faster image loading with lazy loading

NOTE

While building this project, I wasn’t afraid to make mistakes—I treated every “Error” message as a learning opportunity. This project especially helped me strengthen weaker areas such as Context API usage and asynchronous data handling.

MDB API Setup & Endpoints

Create an account and generate an API key from TMDB:
https://www.themoviedb.org/documentation/api

Use the following endpoints:

Discover Movies

Fetch popular/discoverable movies:

https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}

Search Movies

Search by keyword:

https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=

Movie Details

Get details for a specific movie by ID:

https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}

Movie Videos (Trailer/Teaser)

Get the YouTube video key(s) for a movie:

https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}

Poster Images

Use this base URL for movie posters:

https://image.tmdb.org/t/p/w1280${poster_path}

![App Demo](./src//assets/movie.gif)

<details>  TURKISH VERSION

🎬 Movie App: Journey of an Optimizer
Bu proje, öğrenme süreci devam eden bir developer olarak modern web teknolojileriyle tanışma ve karşılaştığım teknik engelleri aşma hikayesidir. Sadece bir film uygulaması değil, aynı zamanda bir problem çözme serüvenidir.

🧠 Challenges & Solutions / Zorluklar ve Çözümler
Syntax & Logic Mastery (Parantezlerin Labirenti): Başlangıçta JSX içindeki süslü parantezlerin {} ve JavaScript mantığının (ternary) birbirine girmesi en büyük engellerden biriydi. Ancak, her bir parantezi bir "kapı" olarak görmeye başlayarak, kod hiyerarşisini (parent-child ilişkisi) kurma becerimi geliştirdim.

The "Ghost" Component Issue (Hayalet Bileşen Sorunu): Detay sayfasının ana sayfada "hayalet" gibi görünmesi sorunuyla karşılaştım. Bu hata sayesinde React Router'ın çalışma mantığını ve bileşenlerin DOM içindeki yerleşim hiyerarşisini derinlemesine kavradım.

UI/UX Evolution (Split-Screen Dönüşümü): Klasik giriş sayfalarından, modern ve estetik bir "Split Screen" (Bölünmüş Ekran) tasarımına geçiş yaptım. Tailwind CSS ile responsive yapıları ve görsel dengeyi kurmayı öğrendim.

Tech Stack / Kullanılan Teknolojiler
Frontend: React (Vite), Tailwind CSS, Headless UI / DaisyUI.

State Management: Context API (Veri akışını tek merkezden yönetmek için).

Routing: React Router v6 (Özel rotalar ve korumalı alanlar için).

Backend & Auth: Firebase (Authentication ve Veri yönetimi).

Data Fetching: Axios & TMDB API.

✨ Features / Özellikler
Auth Logic: Login/Register süreçleri ve Google ile giriş imkanı.

Private Routing: Sadece giriş yapmış kullanıcıların görebileceği film detay sayfaları.

Dynamic Search & Listing: TMDB üzerinden gerçek zamanlı film arama ve listeleme.

Responsive Design: Her türlü cihazda kusursuz çalışan esnek arayüz.

📈 Roadmap / Yol Haritası (Eksikler ve Hedefler)
[ ] Advanced Sorting: Filmleri yayın tarihine ve TMDB puanına göre dinamik olarak sıralamak.

[ ] Watchlist: Kullanıcıların favori filmlerini Firebase Firestore'a kaydetmesi.

[ ] Optimization: Resimlerin lazy loading ile daha hızlı yüklenmesi.

Gemini said
Harika bir fikir! Bir öğretmenin titizliği ve bir geliştiricinin çözüm odaklılığını birleştiren bu README, HR (İnsan Kaynakları) uzmanlarına sadece kod yazabildiğini değil, aynı zamanda nasıl öğrendiğini ve sorunları nasıl analiz ettiğini de gösterecek. 🚀

İşte senin için hazırladığım, hatalarından ders çıkaran ve gelişimini ön plana çıkaran profesyonel README taslağı:

🎬 Movie App: Journey of an Optimizer
Bu proje, bir developer olarak modern web teknolojileriyle tanışma ve karşılaştığım teknik engelleri aşma hikayesidir. Sadece bir film uygulaması değil, aynı zamanda bir problem çözme serüvenidir.

🚀 My Journey & Technical Growth / Yolculuğum ve Teknik Gelişimim
HR uzmanları için bu proje, bir geliştiricinin "darboğazları nasıl aştığını" temsil eder:

🧠 Challenges & Solutions / Zorluklar ve Çözümler
Syntax & Logic Mastery (Parantezlerin Labirenti): Başlangıçta JSX içindeki süslü parantezlerin {} ve JavaScript mantığının (ternary) birbirine girmesi en büyük engellerden biriydi. Ancak, her bir parantezi bir "kapı" olarak görmeye başlayarak, kod hiyerarşisini (parent-child ilişkisi) kurma becerimi geliştirdim.

The "Ghost" Component Issue (Hayalet Bileşen Sorunu): Detay sayfasının ana sayfada "hayalet" gibi görünmesi sorunuyla karşılaştım. Bu hata sayesinde React Router'ın çalışma mantığını ve bileşenlerin DOM içindeki yerleşim hiyerarşisini derinlemesine kavradım.

UI/UX Evolution (Split-Screen Dönüşümü): Klasik giriş sayfalarından, modern ve estetik bir "Split Screen" (Bölünmüş Ekran) tasarımına geçiş yaptım. Tailwind CSS ile responsive yapıları ve görsel dengeyi kurmayı öğrendim.

🛠️ Tech Stack / Kullanılan Teknolojiler
Frontend: React (Vite), Tailwind CSS, Headless UI / DaisyUI.

State Management: Context API (Veri akışını tek merkezden yönetmek için).

Routing: React Router v6 (Özel rotalar ve korumalı alanlar için).

Backend & Auth: Firebase (Authentication ve Veri yönetimi).

Data Fetching: Axios & TMDB API.

✨ Features / Özellikler
Auth Logic: Login/Register süreçleri ve Google ile giriş imkanı.

Private Routing: Sadece giriş yapmış kullanıcıların görebileceği film detay sayfaları.

Dynamic Search & Listing: TMDB üzerinden gerçek zamanlı film arama ve listeleme.

Responsive Design: Her türlü cihazda kusursuz çalışan esnek arayüz.

📈 Roadmap / Yol Haritası (Eksikler ve Hedefler)
[ ] Advanced Sorting: Filmleri yayın tarihine ve TMDB puanına göre dinamik olarak sıralamak.

[ ] Watchlist: Kullanıcıların favori filmlerini Firebase Firestore'a kaydetmesi.

[ ] Optimization: Resimlerin lazy loading ile daha hızlı yüklenmesi.

NOT:
Bu projeyi geliştirirken hata yapmaktan korkmadım; her "Error" mesajını bir öğrenme fırsatı olarak değerlendirdim. Özellikle Context API ve Asenkron veri yönetimi konularındaki zayıf bağlantılarımı, bu proje sayesinde güçlendirdim.

  <summary>Türkçe README</summary>

</details>
