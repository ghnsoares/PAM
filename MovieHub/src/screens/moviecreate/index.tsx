import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';

interface Props {
  onCancel: () => void;
  onSubmit: (title: string, genre: string, rating: number) => void;
}

export default function MovieCreateScreen({ onCancel, onSubmit }: Props) {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('4.5');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Novo Filme</Text>

      <View style={styles.field}>
        <Text style={styles.label}>Título</Text>
        <TextInput style={styles.input} value={title} onChangeText={setTitle} placeholder="Nome do filme" placeholderTextColor="#666" />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Gênero</Text>
        <TextInput style={styles.input} value={genre} onChangeText={setGenre} placeholder="Ex: Ação, Drama" placeholderTextColor="#666" />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Nota (0 - 5)</Text>
        <TextInput style={styles.input} value={rating} onChangeText={setRating} keyboardType="numeric" placeholderTextColor="#666" />
      </View>

      <TouchableOpacity style={styles.submitBtn} onPress={() => onSubmit(title, genre, parseFloat(rating) || 4.0)}>
        <Text style={styles.submitText}>Salvar Filme</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cancelBtn} onPress={onCancel}>
        <Text style={styles.cancelText}>Cancelar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}