import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Movie } from '../../types/movie';
import styles from './styles';

interface Props {
  userName: string;
  movies: Movie[];
  onSelectMovie: (movie: Movie) => void;
  onNavigateCreate: () => void;
}

export default function HomeScreen({ userName, movies, onSelectMovie, onNavigateCreate }: Props) {
  const watchedCount = movies.filter((m) => m.status === 'Assistido').length;
  const wantToWatchCount = movies.filter((m) => m.status === 'Quero assistir').length;
  const favCount = movies.filter((m) => m.favorite).length;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Olá, {userName}! 👋</Text>
          <Text style={styles.subGreeting}>Desfrute dos seus filmes favoritos</Text>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={onNavigateCreate}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Resumo</Text>
      <View style={styles.statsGrid}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{movies.length}</Text>
          <Text style={styles.statLabel}>Total</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{watchedCount}</Text>
          <Text style={styles.statLabel}>Assistidos</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{wantToWatchCount}</Text>
          <Text style={styles.statLabel}>Quero ver</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{favCount}</Text>
          <Text style={styles.statLabel}>Favoritos</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Filmes Recentes</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalList}>
        {movies.map((movie) => (
          <TouchableOpacity key={movie.id} style={styles.moviePosterCard} onPress={() => onSelectMovie(movie)}>
            <Image source={{ uri: movie.poster }} style={styles.posterImage} />
            <Text numberOfLines={1} style={styles.movieTitle}>{movie.title}</Text>
            <Text style={styles.movieRating}>★ {movie.rating}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ScrollView>
  );
}