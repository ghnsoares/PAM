import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Movie } from '../../types/movie';
import styles from './styles';

interface Props {
  movies: Movie[];
  onSelectMovie: (movie: Movie) => void;
  onToggleFavorite: (id: string) => void;
}

export default function MoviesScreen({ movies, onSelectMovie, onToggleFavorite }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Filmes</Text>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => onSelectMovie(item)}>
            <Image source={{ uri: item.poster }} style={styles.poster} />
            <View style={styles.info}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.year} • {item.genre}</Text>
              <Text style={styles.rating}>★ {item.rating}</Text>
            </View>
            <TouchableOpacity onPress={() => onToggleFavorite(item.id)} style={styles.favBtn}>
              <Text style={{ color: item.favorite ? '#E50914' : '#666', fontSize: 20 }}>
                {item.favorite ? '♥' : '♡'}
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}