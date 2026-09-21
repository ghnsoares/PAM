import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Movie } from '../../types/movie';
import styles from './styles';

interface Props {
  movie: Movie;
  onBack: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onShare: () => void;
}

export default function MovieDetailsScreen({ movie, onBack, onEdit, onDelete, onShare }: Props) {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Text style={styles.backText}>← Voltar</Text>
      </TouchableOpacity>

      <View style={styles.headerArea}>
        <Image source={{ uri: movie.poster }} style={styles.poster} />
        <View style={styles.headerDetails}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.meta}>{movie.year} • {movie.duration} min</Text>
          <Text style={styles.rating}>★ {movie.rating} / 5.0</Text>
          <Text style={styles.director}>Direção: {movie.director}</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Descrição</Text>
      <Text style={styles.synopsis}>{movie.synopsis}</Text>

      <View style={styles.actionsRow}>
        <TouchableOpacity style={styles.actionBtn} onPress={onEdit}>
          <Text style={styles.actionBtnText}>✏️ Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn} onPress={onShare}>
          <Text style={styles.actionBtnText}>🔗 Compartilhar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionBtn, styles.deleteBtn]} onPress={onDelete}>
          <Text style={styles.actionBtnText}>🗑️ Excluir</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}