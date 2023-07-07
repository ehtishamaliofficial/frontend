import { View, Text, StyleSheet, SafeAreaView, TextInput, ScrollView, Button } from 'react-native'
import { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SelectDropdown from '../components/Select';





export default function AddProduct() {
  const options = ['Iphone', 'Samsung', 'Xiaomi', 'Oppo', 'Vivo', 'Realme', 'Oneplus', 'Huawei', 'Nokia']
  return (
    <SafeAreaView>
      <ScrollView style={{ paddingVertical: 20 }}>
        <Text style={styles.heading}>Add Product</Text>
        <View style={styles.imageContainer}>
          <View style={styles.image}></View>
          <AntDesign style={styles.camera} name="camera" size={30} color="#000" />
        </View>
        <View style={styles.container}>
          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input} placeholder='Product Name' />
        </View>
        <View style={styles.container}>
          <Text style={styles.label}>Description</Text>
          <TextInput style={styles.input} placeholder='Product Description' />
        </View>
        <View style={styles.container}>
          <Text style={styles.label}>Stock</Text>
          <TextInput style={styles.input} placeholder='Product Stock' />
        </View>
        <View style={styles.container}>
          <Text style={styles.label}>Brand</Text>
          <TextInput style={styles.input} placeholder='Product Brand' />
        </View>
        <View style={styles.container}>
          <Text style={styles.label}>Category</Text>
          <SelectDropdown options={options} />
        </View>
        <View style={styles.container}>
          <Text style={styles.label}>Price</Text>
          <TextInput style={styles.input} placeholder='Product Price' />
        </View>
        <View style={styles.container}>
          <Text style={styles.label}>Color</Text>
          <TextInput style={styles.input} placeholder='Color' />
        </View>
        <View style={styles.buttonContainer}>
          <Button title='Add Product' color='blue' />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
    color: '#000'
  },
  container: {
    width: "80%",
    marginHorizontal: "10%",
    paddingVertical: 10
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,

  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    width: "100%",
  },
  imageContainer: {
    position: "relative",
    width: "80%",
    height: 100,
    marginHorizontal: "10%",
  },
  image: {
    width: "50%",
    height: 100,
    borderRadius: 10,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#000',
    marginHorizontal: "25%"
  },
  camera: {
    position: "absolute",
    bottom: -6,
    right: 60,
    zIndex: 1,
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: 50,
    padding: 5,
  },
  buttonContainer: {
    width: "80%",
    height: 100,
    marginHorizontal: "10%",
    paddingVertical: 10
  }
})
