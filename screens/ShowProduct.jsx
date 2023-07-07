import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'

export default function ShowProduct() {
    const list = [1, 2, 3, 4, 5, 6, 8, 9]
    return (
        <SafeAreaView>
            <ScrollView>
                <Text style={styles.heading}>All Products</Text>
                {
                    list.map(item => {
                        return <View key={item} style={styles.cardContainer}>
                            <Image style={styles.image} source={{ uri: 'https://i.ibb.co/h7SXXtz/Bloody-G350-EEZEPC-removebg-preview.png' }} />
                            <View style={styles.content}>
                                <Text style={styles.title}>Bloody G350 EEZEPC</Text>
                                <Text style={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quisquam?</Text>
                                < View style={styles.buttonGroup}>
                                    <TouchableOpacity style={styles.button('skyblue')}>
                                        <Text style={styles.buttonText}>Update</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.button('red')}>
                                        <Text style={styles.buttonText}>Delete</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.button('green')}>
                                        <Text style={styles.buttonText}>Gallery</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>
                    })
                }

            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
        marginHorizontal: '10%',
        color: '#000'
    },
    cardContainer: {
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 10,
        width: '80%',
        height: 'auto',
        marginVertical: 10,
        marginHorizontal: '10%',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        color: 'white',
    },
    image: {
        width: '100%',
        height: 100,
        resizeMode: 'contain',
        borderRightWidth: 1,
        borderRightColor: 'blue',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'blue',
        borderRadius: 10
    },
    title: {
        fontSize: 15,
        fontWeight: '600',
        marginVertical: 10,
        textAlign: 'center',
        color: 'white'
    },
    description: {
        fontSize: 15,
        fontWeight: '400',
        marginVertical: 3,
        marginBottom: 10,
        marginHorizontal: 10,
        color: 'white',
        textAlign: 'center'
    },
    buttonGroup: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginVertical: 10,
    },
    button: (color) => ({
        backgroundColor: color,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 5,
    }),
    buttonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'center',
    }

})