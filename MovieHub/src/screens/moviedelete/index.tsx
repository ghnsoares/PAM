import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Movie } from '../../types/movie';
import styles from './styles';

interface Props {
  movie: Movie;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function MovieDeleteScreen({ movie, onConfirm, onCancel }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.warningIcon}>⚠️</Text>
        <Text style={styles.title}>Excluir este filme?</Text>
        <Text style={styles.subtitle}>
          Esta ação não pode ser desfazer. O filme <Text style={styles.bold}>"{movie.title}"</Text> será removido da sua coleção.
        </Text>

        <TouchableOpacity style={styles.confirmBtn} onPress={onConfirm}>
          <Text style={styles.confirmText}>Sim, excluir filme</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelBtn} onPress={onCancel}>
          <Text style={styles.cancelText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}