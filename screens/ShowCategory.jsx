import { View, Text, SafeAreaView, StyleSheet, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

export default function ShowCategory() {
    const list = [1, 2, 3, 4, 5, 6, 8, 9]
    return (
        <SafeAreaView>
            <ScrollView>
                <Text style={styles.heading}>All Category</Text>
                {
                    list.map(item => {
                        return <View key={item} style={styles.cardContainer}>
                            <Image style={styles.image} source={{ uri: 'https://i.ibb.co/h7SXXtz/Bloody-G350-EEZEPC-removebg-preview.png' }} />
                            <View style={styles.content}>
                                <Text style={styles.title}>IPhone</Text>
                                <View style={styles.buttonGroup}>
                                    {/* <Button title='Update' />
                            <Button color={'red'} title='Delete' /> */}
                                    <TouchableOpacity style={styles.button('skyblue')}>
                                        <Text style={styles.buttonText}>Update</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.button('red')}>
                                        <Text style={styles.buttonText}>Delete</Text>
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
        flexDirection: 'row',
        gap: 10,
        color: 'white',
        backgroundColor: 'blue',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        backgroundColor: 'blue',
        borderRadius: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
        marginHorizontal: '10%',
        color: 'white'
    },
    buttonGroup: {
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginVertical: 10,
        marginHorizontal: 25,
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
