import {View, Text, TextInput, StyleSheet, FlatList, Image} from 'react-native';
import React, {useState} from 'react';
import productsGetir from '../../assets/productsGetir';

export default function SearchNavigator() {
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productsGetir);

  const handleSearch = text => {
    setSearch(text);
    const filtered = filteredProducts?.filter(product =>
      product.name.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredProducts(filtered);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Arama Sayfası</Text>
      <TextInput
        style={styles.input}
        placeholder="Ürün ara..."
        value={search}
        onChangeText={handleSearch}
      />
      <FlatList
        data={productsGetir}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Image source={{uri: item.image}} style={styles.image} />
            <Text style={styles.itemText}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
    color: '#5D3EBD',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 8,
    elevation: 2,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  itemText: {
    fontSize: 16,
  },
});
