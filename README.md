# Spotify Clone with Next.js 13, Zustand, and Tailwind CSS

## Index

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Acknowledgments](#acknowledgments)

## Project Overview
This project is a Spotify clone built using Next.js 13, Zustand for state management, and Tailwind CSS for styling. It leverages the Spotify API to fetch playlists and tracks, providing a functional music player with volume control. Users can select playlists and tracks to play within the application.

## Features
- Playlist Selection: Browse and select playlists from the user's Spotify account.
- Track Listing: View and choose tracks within selected playlists.
- Music Player: Play, pause, and control the volume of the selected track.

<div align="center">
  <div style="display: flex; gap: 16px; align-items: center">
   <img src="public/1.png" alt="" />
  </div>
</div>

## Technologies Used
- Next.js 13: A React framework for building server-rendered React applications with ease.
- Zustand: A lightweight state management library for React, providing a simple and flexible way to manage state in your application.
- Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.

## Getting Started

Para executar o projeto, siga os passos abaixo:

```bash

0. Install node and npm:
- IMPORTANT: Node should be version > 20

1. Clone the repository:
$ git clone https://github.com/ViniciusPonte/spotify-clone.git

2. Change into the project directory:
$ cd spotify-clone

3. Install dependencies:
$ npm install

4. Create a .env.local file in the root directory and add your Spotify API credentials:
$ NEXT_PUBLIC_SPOTIFY_CLIENT_ID=your-client-id
$ NEXT_PUBLIC_SPOTIFY_REDIRECT_URI=your-redirect-uri

5. Run the development server:
$ npm run dev

```

## Acknowledgments
- Thanks to Spotify for providing the API to make this project possible.
- Inspiration for this project comes from the love of music and the desire to explore web development with modern tools.
- Shoutout to the Next.js, Zustand, and Tailwind CSS communities for their fantastic work.