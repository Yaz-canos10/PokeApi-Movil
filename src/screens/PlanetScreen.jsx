import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';
import { fetchCharacterDetail } from '../api/PokeApi';

export default function PlanetScreen({ route }) {
  const { url } = route.params;
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPokemon = async () => {
      try {
        const data = await fetchCharacterDetail(url);
        setPokemon(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadPokemon();
  }, [url]);

  if (loading) {
    return <ActivityIndicator size="large" color="green" style={{ flex: 1, justifyContent: 'center' }} />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.name}>{pokemon.name.toUpperCase()}</Text>
      <Image source={{ uri: pokemon.sprites.front_default }} style={styles.image} />
      <Text style={styles.info}>Altura: {pokemon.height}</Text>
      <Text style={styles.info}>Peso: {pokemon.weight}</Text>
      <Text style={styles.info}>
        Tipos: {pokemon.types.map(t => t.type.name).join(', ')}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center' },
  name: { fontSize: 30, fontWeight: 'bold', marginBottom: 20 },
  image: { width: 150, height: 150, marginBottom: 20 },
  info: { fontSize: 18, marginBottom: 10 },
});
