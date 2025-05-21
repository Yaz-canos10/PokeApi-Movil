import React, { useState, useEffect } from 'react';
import { View, Text, Button, ActivityIndicator, ScrollView, StyleSheet } from 'react-native';
import { fetchCharacters } from '../api/PokeApi';
import CharacterList from '../components/CharacterList';

export default function HomeScreen({ navigation }) {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const limit = 20;

  const loadCharacters = async (pageToLoad = 1) => {
    setLoading(true);
    try {
      const data = await fetchCharacters(pageToLoad, limit);
      setCharacters(data.results);
      setTotalPages(Math.ceil(data.count / limit));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCharacters(page);
  }, [page]);

  const handleNext = () => {
    if (page < totalPages) setPage(prev => prev + 1);
  };

  const handlePrevious = () => {
    if (page > 1) setPage(prev => prev - 1);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Lista de Pokémon</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <>
          <CharacterList characters={characters} navigation={navigation} />
          <View style={styles.pagination}>
            <Button title="Anterior" onPress={handlePrevious} disabled={page === 1} />
            <Text style={styles.pageInfo}>{`Página ${page} de ${totalPages}`}</Text>
            <Button title="Siguiente" onPress={handleNext} disabled={page === totalPages} />
          </View>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 50, alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
    alignItems: 'center',
  },
  pageInfo: { fontSize: 16 },
});
