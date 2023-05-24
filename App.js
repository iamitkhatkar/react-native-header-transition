import {View, StyleSheet, ScrollView, Image} from 'react-native';
import React from 'react';

const dummayArray = new Array(30).fill().map((item, index) => index + 1);
const imgUrl =
  'https://plus.unsplash.com/premium_photo-1684746338578-4a8f89c62a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2680&q=80';

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imgContainer}>
          <Image source={{uri: imgUrl}} style={styles.img} />
        </View>
        {dummayArray.map(item =>
          item % 2 === 0 ? (
            <View style={styles.bigCard} key={item} />
          ) : (
            <View style={styles.smallCard} key={item} />
          ),
        )}
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DBDFEA',
  },
  canvasContainer: {
    flex: 1,
  },
  imgContainer: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  bigCard: {
    backgroundColor: '#ACB1D6',
    height: 100,
    marginVertical: 12,
    marginHorizontal: 16,
    borderRadius: 16,
  },
  smallCard: {
    backgroundColor: '#8294C4',
    height: 50,
    marginHorizontal: 16,
    borderRadius: 16,
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 80,
  },
});
