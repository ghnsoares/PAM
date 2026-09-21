import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { UserProfile } from '../../types/movie';
import styles from './styles';

interface Props {
  profile: UserProfile;
  onLogout: () => void;
}

export default function ProfileScreen({ profile, onLogout }: Props) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pageTitle}>Meu Perfil</Text>

      <View style={styles.profileHeader}>
        <Image source={{ uri: profile.avatar }} style={styles.avatar} />
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.email}>{profile.email}</Text>
        <Text style={styles.memberSince}>Membro desde {profile.memberSince}</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>{profile.stats.totalMovies}</Text>
          <Text style={styles.statTitle}>Filmes</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>{profile.stats.favoritesCount}</Text>
          <Text style={styles.statTitle}>Favoritos</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>{profile.stats.watchedCount}</Text>
          <Text style={styles.statTitle}>Assistidos</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.logoutBtn} onPress={onLogout}>
        <Text style={styles.logoutText}>Sair da conta</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}