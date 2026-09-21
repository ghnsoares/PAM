import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Movie } from '../../types/movie';
import styles from './styles';

interface Props {
  movies: Movie[];
  onSelectMovie: (movie: Movie) => void;
}

export default function FavoritesScreen({ movies, onSelectMovie }: Props) {
  const favorites = movies.filter((m) => m.favorite);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favoritos ♥</Text>
      <Text style={styles.subtitle}>{favorites.length} filmes salvos</Text>

      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => onSelectMovie(item)}>
            <Image source={{ uri: item.poster }} style={styles.poster} />
            <View style={styles.info}>
              <Text style={styles.movieTitle}>{item.title}</Text>
              <Text style={styles.genre}>{item.genre}</Text>
              <Text style={styles.rating}>★ {item.rating}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}