import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#f0f4f7',
    alignItems: 'center',
    minHeight: '100%',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#2a9d8f',
    textShadowColor: 'rgba(0, 0, 0, 0.15)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 25,
    alignItems: 'center',
  },
  pageInfo: {
    fontSize: 18,
    color: '#264653',
    fontWeight: '600',
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 20,
  },


  list: {
    width: '100%',
  },
  gridItem: {
    backgroundColor: '#81d4fa', 
    margin: 8,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#0288d1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 6,
    paddingVertical: 10,
  },
  pokemonImage: {
    width: 80,
    height: 80,
    marginBottom: 8,
    resizeMode: 'contain',
  },
  itemText: {
    color: '#01579b',
    fontWeight: '700',
    fontSize: 18,
    textAlign: 'center',
    textTransform: 'capitalize',
    letterSpacing: 1,
  },

 
  planetContainer: {
    padding: 30,
    alignItems: 'center',
    backgroundColor: '#f0f4f7',
    minHeight: '100%',
  },
  planetName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#264653',
    marginBottom: 20,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  planetImage: {
    width: 180,
    height: 180,
    marginBottom: 25,
    borderRadius: 90,
    borderWidth: 3,
    borderColor: '#2a9d8f',
    backgroundColor: '#fff',
  },
  planetInfo: {
    fontSize: 20,
    color: '#333',
    marginBottom: 15,
  },
});

export default styles;
