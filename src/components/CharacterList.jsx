import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function CharacterList({ characters, navigation }) {
  return (
    <View style={styles.list}>
      {characters.map((character) => (
        <View key={character.name} style={styles.item}>
          <Button
            title={character.name.charAt(0).toUpperCase() + character.name.slice(1)}
            onPress={() => navigation.navigate('Planet', { url: character.url })}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  list: { width: '100%' },
  item: { marginBottom: 8 },
});
