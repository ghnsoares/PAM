import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

interface LoginProps {
  onLogin: (email: string) => void;
  onNavigateRegister: () => void;
}

export default function LoginScreen({ onLogin, onNavigateRegister }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MovieHub</Text>
      <Text style={styles.subtitle}>Faça login para continuar</Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="seuemail@exemplo.com"
          placeholderTextColor="#71717A"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="••••••••"
          placeholderTextColor="#71717A"
        />
      </View>

      <TouchableOpacity style={styles.primaryButton} onPress={() => onLogin(email)}>
        <Text style={styles.primaryButtonText}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.footerRow}>
        <Text style={styles.footerText}>Não tem uma conta?</Text>
        <TouchableOpacity onPress={onNavigateRegister}>
          <Text style={styles.linkText}> Criar conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}