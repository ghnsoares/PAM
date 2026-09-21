export interface Movie {
  id: string;
  title: string;
  year: number;
  genre: string;
  director: string;
  duration: number;
  rating: number;
  userRating: number;
  status: 'Assistido' | 'Assistindo' | 'Quero assistir';
  favorite: boolean;
  coverUrl: string;
  synopsis: string;
  trailerUrl: string;
  addedDate: string;
}

export interface User {
  name: string;
  email: string;
  memberSince: string;
  avatarUrl: string;
}