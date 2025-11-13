import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, ScrollView, StyleSheet, Alert } from 'react-native';

export default function ProfilStatique() {
  const [nom, setNom] = useState("Fatima Zahrae");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80' }}
        style={styles.avatar}
      />
      <Text style={styles.title}>Profil Utilisateur</Text>

      <Text style={styles.label}>Nom :</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrez votre nom"
        value={nom}
        onChangeText={setNom}
        editable={true}
      />
      <Text style={styles.label}>Message :</Text>
      <Text style={styles.message}>Bienvenue sur mon profil </Text>
    
      <Button
        title="Afficher une alerte"
        onPress={() => {
          Alert.alert('Bonjour !', 'Vous avez appuyé sur le bouton 👋');
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  message: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 20,
  },
});
