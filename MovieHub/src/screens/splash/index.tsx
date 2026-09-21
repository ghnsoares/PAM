import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styles from './styles';

interface SplashProps {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashProps) {
  React.useEffect(() => {
    const timer = setTimeout(onFinish, 2000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <View style={styles.container}>
      <View style={styles.logoCircle}>
        <Text style={styles.logoIcon}>🎬</Text>
      </View>
      <Text style={styles.title}>MovieHub</Text>
      <Text style={styles.subtitle}>Gerenciador de Filmes</Text>
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="small" color="#E50914" />
        <Text style={styles.loadingText}>Preparando experiência...</Text>
      </View>
    </View>
  );
}